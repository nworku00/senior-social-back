/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('title').notNullable()
        table.text('text').notNullable()
        table.integer('userid').unsigned().notNullable()
        table.foreign('userid').references('id').inTable('user');
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
