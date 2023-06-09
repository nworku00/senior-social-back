var express = require("express");
var router = express.Router();
var knex = require("../db"); // Import db.js

/* GET users listing. */

router.get("/", async function (req, res, next) {
    knex("user")
        .select("*")
        .then((user) => res.json(user))
        .catch((err) => next(err));
});
router.get("/:id", async function (req, res, next) {
    const { id } = req.params;
    knex("user")
        .select("*")
        .where({ id })
        .first()
        .then((user) => res.json(user))
        .catch((err) => next(err));
});
router.post("/", function (req, res, next) {
    const { username , email, password } = req.body;
    knex("user")
        .insert([{ username , email, password }])
        .returning("*")
        .then((user) => res.json(user))
        .catch((err) => next(err));
});

module.exports = router;
