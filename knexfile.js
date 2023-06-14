// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "pg",
        connection:  "postgres://slptpdeb:0V2epevTD6VqdjyYOhG5jW48y09LL1Ho@rajje.db.elephantsql.com/slptpdeb",
        migrations: {
            directory: "./migrations",
        },
        pool: { min: 2, max: 10 }
    },

    staging: {
        client: "pg",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
    },

    production: {
        client: "pg",
        connection: "postgres://slptpdeb:0V2epevTD6VqdjyYOhG5jW48y09LL1Ho@rajje.db.elephantsql.com/slptpdeb",
        migrations: {
            directory: "./migrations",
        },
        pool: { min: 2, max: 10 }
    },
};
