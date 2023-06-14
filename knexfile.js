// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "pg",
        connection: "postgres://localhost:5432/capstoneuserpost",
        migrations: {
            directory: "./migrations",
        },
        useNullAsDefault: false,
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
        connection: {
            host: "postgres://slptpdeb:0V2epevTD6VqdjyYOhG5jW48y09LL1Ho@rajje.db.elephantsql.com/slptpdeb",
            database: "slptpdeb",
            user: "slptpdeb",
            password: "0V2epevTD6VqdjyYOhG5jW48y09LL1Ho",
        },
        migrations: {
            directory: "./migrations",
        },
    },
};
