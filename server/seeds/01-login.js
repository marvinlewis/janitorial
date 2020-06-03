
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('login').insert([
        {username: 'mjjanitorial@aol.com', password: 'kelseymarkellbella'}
      ]);
};
