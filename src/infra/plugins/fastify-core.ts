import fp from "fastify-plugin";
import fastifyCors from "@fastify/cors";
import { FastifyInstance } from "fastify";

async function staticPlugin(app: FastifyInstance) {
  app.register(fastifyCors, {
    origin: "*",
  });
}

export const fastifyCorsPlugin = fp(staticPlugin);
