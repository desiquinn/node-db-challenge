
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.text('description');
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false).notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
        tbl.text('description');
    })
    .createTable('need', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources');
        tbl.primary(['project_id', 'resource_id']);
        tbl.string('details')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
