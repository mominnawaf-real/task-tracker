import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('projects', (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.fn.uuid());
    table.string('name', 255).notNullable();
    table.string('description', 255);
    table
      .enum('status', [
        'blocked',
        'todo',
        'in_progress',
        'ready_for_qa',
        'ready_for_release',
        'in_production',
        'done',
        'no_action',
      ])
      .notNullable()
      .defaultTo('todo');
    table
      .uuid('owner_id')
      .references('id')
      .inTable('users')
      .index()
      .onDelete('SET NULL');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('projects');
}
