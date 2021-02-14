import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("defaultEmail").notNullable().unique();
    table.string("password").notNullable();
    table.string("image_url");
    table.string("user_type").notNullable();

    table.string("relationship_drugs");
    table.string("relationship_family");
    table.string("time_without_drugs");
    table.integer("age");

    table.string("createdAt").notNullable().defaultTo(Date.now());
    table.string("updatedAt").notNullable().defaultTo(Date.now());
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("users");
}
