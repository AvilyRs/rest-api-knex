import fastify from "fastify";

import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/transactions", async () => {
  const transaction = await knex("transactions").select("*");
  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server running on http://localhost:${env.PORT}`);
  });
