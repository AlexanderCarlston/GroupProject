
exports.up = function(knex, Promise) {
    return knex.schema.createTable('highs', (table) => {
        table.increments();
        table.text('rating');
        table.text('method');
        table.text('strain');
        table.text('amount');
        table.float('duration');
        table.text('notes')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('highs')
};
