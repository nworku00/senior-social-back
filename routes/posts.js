var express = require("express");
var router = express.Router();
var { authenticateToken } = require("./auth.js");
var knex = require("../db"); // Import db.js
//get user posts
router.get("/:userId",  authenticateToken, async function (req, res, next) {
    const { userId } = req.params;
    knex("posts")
    .select("*")
    .where({ userId }) 
    .then((post) => res.json(post))
    .catch((err) => next(err));
});
//get all posts
router.get("/",  authenticateToken,async function (req, res, next) {
    knex("posts")
        .select("*")
        .orderBy('id', 'desc')
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
});
//get user's saved posts
router.get("/saved/:savedBy",  async function (req, res, next) {
    const { savedBy } = req.params;
    knex("posts")
    .select("*")
    .where({ savedBy }) 
    .then((post) => res.json(post))
    .catch((err) => next(err));
});
//allow user to save post
router.post("/saved/:id",  async function (req, res, next) {
    const { id } = req.params;
    const { savedBy } = req.body;
    knex("posts")
        .update({ savedby: savedBy })
        .where({ id })
        .then((post) => res.json(post))
    .catch((err) => next(err));
});
//allow user to post
router.post("/",  function (req, res, next) {
    const { firstName, userId, text } = req.body;
    knex("posts")
        .insert([{ firstName, userId , text }])
        .returning("*")
        .then((post) => res.json(post))
        .catch((err) => next(err));
});

module.exports = router;