/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, firstName: 'user1',lastName:'user1', email:'email1', password: 'pass1'},
    {id: 2, firstName: 'user2',lastName:'user2', email:'email2', password: 'pass2'},
    {id: 3, firstName: 'user3',lastName:'user3', email:'email3', password: 'pass3'},
  ]);
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, firstName: 'user1', text: 'post1', userId:'1'},
    {id: 2, firstName: 'user2', text: 'post2', userId:'2'},
    {id: 3, firstName: 'user3', text: 'post3 ', userId:'3'},
  ]);
};
