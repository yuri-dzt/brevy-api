import fp from "fastify-plugin";
import fjwt from "@fastify/jwt";
import { FastifyInstance } from "fastify";

async function staticPlugin(app: FastifyInstance) {
  app.register(fjwt, {
    secret: process.env.JWT_SECRET || "",
  });

  app.addHook("preHandler", (req, _res, next) => {
    req.server.jwt = app.jwt;
    return next();
  });
}

export const fastifyJwtPlugin = fp(staticPlugin);
