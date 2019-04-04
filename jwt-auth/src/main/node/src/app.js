const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const uuid = require('uuid/v4');

const jsonParser = bodyParser.json();

const publicKeyPath = path.resolve(process.env.PUBLIC_KEY_DIR, "auth_rsa.pub");
const privateKeyPath = path.resolve(process.env.PRIVATE_KEY_DIR, "auth_rsa");

const app = express();
const port = 3000;

const publicKey = fs.readFileSync(publicKeyPath, "utf8");
const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const algorithm = "RS256";

// add the groups you need here. This will ultimately be used by annotations like...
// @RolesAllowed({"todo"}) in a JakartaEE application.
const groups = ["todo"];

const refreshTokens = [];

const createAccessTokenObj = (username) => jwt.sign({
    upn: username,
    sub: username,
    iss: "auth",
    aud: "auth",
    groups
}, privateKey, {
    expiresIn: "1m",
    algorithm: algorithm
});

const getAccessToken = (username, password) => {
    if (!username || !username.trim()) {
        throw "invalid username";
    }
    if (username !== password) {
        // demo purposes only. add the real authentication here.
        throw "invalid credentials";
    }
    return createAccessTokenObj(username);
};

const getAccessTokenFromRefreshToken = (refreshToken) => {
    if (!refreshToken || !refreshToken.trim()) {
        throw "invalid refresh token";
    }
    jwt.verify(refreshToken, publicKey, {
        algorithms: [algorithm]
    });
    const decoded = jwt.decode(refreshToken);
    return createAccessTokenObj(decoded.upn);
};

const getRefreshToken = (username, existingId) => {
    const id = uuid();
    const token = jwt.sign({
        upn: username,
        sub: username,
        iss: "auth",
        aud: "auth",
        uuid: id
    }, privateKey, {
        expiresIn: "1h",
        algorithm: algorithm
    });
    const decoded = jwt.decode(token, {complete: true});
    if (existingId) {
        refreshTokens.find((t) => t.id === existingId).expiresOn = decoded.payload.exp ? new Date(decoded.payload.exp * 1000) : null;
    } else {
        refreshTokens.push({
            id,
            username: username,
            createdOn: new Date(),
            expiresOn: decoded.payload.exp ? new Date(decoded.payload.exp * 1000) : null
        });
    }
    return token;
};

const getEventsPage = ({page, pagesize}) => {
    if (!page || !pagesize) {
        return {
            page: 1,
            pages: 1,
            rows: refreshTokens.length,
            data: refreshTokens
        };
    }
    const intPage = Number(page);
    const intPagesize = Number(pagesize);
    const totalPages = Math.floor(refreshTokens.length / intPagesize) + 1;
    if (intPage > totalPages) {
        return {
            page: intPage,
            pages: totalPages,
            rows: refreshTokens.length,
            data: []
        };
    }
    const firstIndex = (intPage - 1) * intPagesize;
    const lastIndex = firstIndex + intPagesize;
    return {
        page: intPage,
        pages: totalPages,
        rows: refreshTokens.length,
        data: refreshTokens.slice(firstIndex, lastIndex)
    };
};

const auth = (username, password) => {
    const accessToken = getAccessToken(username, password);
    const refreshToken = getRefreshToken(username);
    return {
        accessToken,
        refreshToken
    };
};

const refresh = (refreshToken) => {
    const accessToken = getAccessTokenFromRefreshToken(refreshToken);
    const decoded = jwt.decode(refreshToken, {complete: true});
    const newRefreshToken = getRefreshToken(decoded.payload.upn, decoded.payload.uuid);
    return {
        accessToken,
        refreshToken: newRefreshToken
    };
};

const start = () => {
    app.post("/api/auth", jsonParser, (req, res) => {
        try {
            res.send(auth(req.body.username, req.body.password));
        } catch (e) {
            res.status(401).send(e);
        }
    });
    app.post("/api/refresh", jsonParser, (req, res) => {
        try {
            res.send(refresh(req.body.refreshToken));
        } catch (e) {
            res.status(401).send(e);
        }
    });
    app.get("/api/publickey", (req, res) => res.send(publicKey));
    app.get("/api/sessions/:page/:pagesize", (req, res) => res.send(getEventsPage(req.params)));
    app.listen(port, () => console.log(`App listening on port ${port}!`));
};

module.exports = {
    auth,
    refresh,
    publicKey,
    start,
    algorithm
};
