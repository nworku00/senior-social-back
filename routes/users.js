var express = require("express");
var router = express.Router();
var knex = require("../db"); // Import db.js
var { generateAccessToken } = require("./auth.js");

/* GET users listing. */

router.post("/signup", function (req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    knex("users")
        .insert([{ firstName, lastName, email, password }])
        .returning("*")
        .then(([user]) => {
            const token = generateAccessToken({ username: user.email })
            res.json({ token, id: user.id ,firstName: user.firstName, lastName: user.lastName, email: user.email,password: user.password });
        })
        .catch((err) => next(err));
});
router.get("/login", async (req, res, next) => {
    const { email } = req.body;
    await knex("users").where({ email }).first().returning("*").then(user => {
        if (user.email) {
            const token = generateAccessToken({ username: email });
            res.json({ token: token, id: user.id ,firstName: user.firstName, lastName: user.lastName,email: user.email, password: user.password });
        } else {
            res.send('user not found')
        }
    })
});

module.exports = router;
