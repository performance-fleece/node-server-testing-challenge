exports.up = function(knex) {
  return knex.schema.createTable('pugs', tbl => {
    tbl.increments();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('pugname', 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pugs');
};
