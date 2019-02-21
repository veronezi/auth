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

// add the groups you need here. This will ultimately be used by annotations like...
// @RolesAllowed({"todo"}) in a JakartaEE application.
const groups = ["todo"];

const events = [];

const auth = (username, password, expiresIn) => {
    if (!username || !username.trim()) {
        throw "invalid username";
    }
    return jwt.sign({
        upn: username,
        sub: username,
        iss: "auth",
        aud: "auth",
        groups
    }, privateKey, {
        expiresIn: expiresIn || "24h",
        algorithm: "RS256"
    });
};

const getEventsPage = ({page, pagesize}) => {
    if (!page || !pagesize) {
        return events;
    }
    const intPage = Number(page);
    const intPagesize = Number(pagesize);
    const totalPages = Math.floor(events.length / intPagesize) + 1;
    if (intPage > totalPages) {
        return [];
    }
    const firstIndex = (intPage - 1) * intPagesize;
    const lastIndex = firstIndex + intPagesize;
    return {
        page: intPage,
        pages: totalPages,
        rows: events.length,
        data: events.slice(firstIndex, lastIndex)
    };
};

const start = () => {
    app.post("/auth", jsonParser, (req, res) => {
        try {
            const token = auth(req.body.username, req.body.password, req.body.expiresIn);
            events.push({
                id: uuid(),
                username: req.body.username,
                date: new Date(),
                success: true
            });
            res.send(token);
        } catch (e) {
            events.push({
                id: uuid(),
                username: req.body.username,
                date: new Date().getTime(),
                success: false,
                exception: e
            });
            res.status(401).send(e);
        }
    });
    app.get("/publickey", (req, res) => res.send(publicKey));
    app.get("/events/:page/:pagesize", (req, res) => res.send(getEventsPage(req.params)));
    app.listen(port, () => console.log(`App listening on port ${port}!`));
};

module.exports = {
    auth,
    publicKey,
    start
};
