import fastify from "fastify";

const appPort = 3333;
const app = fastify();

app.get("/users", async () => {
  return "Users";
});

app
  .listen({
    port: appPort,
  })
  .then(() => {
    console.log(`Server running on http://localhost:${appPort}`);
  });
