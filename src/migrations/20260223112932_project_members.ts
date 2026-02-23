import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('project_members', (table) => {
    table
      .uuid('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE');
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .enum('role', ['viewer', 'editor', 'owner'])
      .notNullable()
      .defaultTo('viewer');
    table.timestamp('joined_at').defaultTo(knex.fn.now()).notNullable();
    table.primary(['project_id', 'user_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('project_members');
}
