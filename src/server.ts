import fastify from "fastify";
import { knex } from "./database";

const appPort = 3333;
const app = fastify();

app.get("/users", async () => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

app
  .listen({
    port: appPort,
  })
  .then(() => {
    console.log(`Server running on http://localhost:${appPort}`);
  });
