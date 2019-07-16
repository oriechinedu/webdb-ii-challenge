
exports.up = function(knex) {
 return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('vin').unique().notNullable();
    table.string('make').notNullable()
    table.string('model').notNullable();
    table.decimal('mileage', 10,2).notNullable()
    table.string('transmission_type').nullable();
    table.enum('status', ['clean', 'salvage']).nullable()
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
