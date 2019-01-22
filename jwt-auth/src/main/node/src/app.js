const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

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

const start = () => {
    app.post("/auth", jsonParser, (req, res) => {
        try {
            res.send(auth(req.body.username, req.body.password, req.body.expiresIn));
        } catch (e) {
            res.status(401).send(e);
        }
    });
    app.get("/publickey", (req, res) => res.send(publicKey));
    app.listen(port, () => console.log(`App listening on port ${port}!`));
};

module.exports = {
    auth,
    publicKey,
    start
};
