
exports.up = function(knex) {
  return knex.schema
    .createTable('quotes', tbl => {
        tbl.increments('id').primary();
        tbl.string('name', 255).notNullable();
        tbl.string('company', 255);
        tbl.string('email', 255).notNullable();
        tbl.string('location', 255);
        tbl.integer('square');
        tbl.timestamp('time_of_request');
        tbl.string('type', 255);
        tbl.text('description')
    })
    .createTable('login', tbl => {
        tbl.increments('id').primary();
        tbl.string('username', 255).notNullable().unique();
        tbl.string('password', 255).notNullable();

    })
};



exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('quotes')
        .dropTableIfExists('login')
  
};
