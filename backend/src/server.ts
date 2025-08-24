import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  // Custom error handling logic can be added here
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  // Register routes
  await app.register(cors,{
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: true,
  });
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
