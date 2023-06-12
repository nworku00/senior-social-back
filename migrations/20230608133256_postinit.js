/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments('id').primary()
        table.text('firstName').notNullable()
        table.text('text').notNullable()
        table.integer('savedBy').unsigned().nullable()
        table.integer('userId').unsigned().notNullable()
        table.foreign('userId').references('id').inTable('user');
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
