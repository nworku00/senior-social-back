var express = require("express");
var router = express.Router();
var knex = require("../db"); // Import db.js

router.get("/", async function (req, res, next) {
    knex("posts")
        .select("*")
        .then((user) => res.json(user))
        .catch((err) => next(err));
});
router.get("/:userid", async function (req, res, next) {
    const { userid } = req.params;
    knex("posts")
    .select("*")
    .where({ userid }) 
    .then((post) => res.json(post))
    .catch((err) => next(err));
});
router.post("/", function (req, res, next) {
    const { username, userid, title, text } = req.body;
    knex("posts")
        .insert([{ username , userid , title, text  }])
        .returning("*")
        .then((post) => res.json(post))
        .catch((err) => next(err));
});

module.exports = router;