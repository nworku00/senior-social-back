var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");

function generateAccessToken(username) {
    return jwt.sign(username, "secret", { expiresIn: "1800s" });
}
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[0];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, "secret", (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
module.exports = {
    generateAccessToken,
        authenticateToken
}