const JwtStrategy = require("passport-jwt").Strategy;
const bcrypt = require("bcryptjs");
var knex = require("../db"); // Import db.js

module.exports = (passport) => {
    passport.use(
        new JwtStrategy({ usernameField: "username" }, async (username, password, done) => {
            try {
                const user = await knex("user")
                .where({username})
                    .then((user) => res.json(user))
                    .catch((err) => next(err));

                if (!user) {
                    return done(null, false, { message: "Incorrect username." });
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, { message: "Incorrect password." });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await knex("user")
            .where({id})
                .then((user) => res.json(user))
                .catch((err) => next(err));

            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};
