import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { prisma, Context } from "./context";

import { resolvers } from "../prisma/generated/type-graphql";
import { buildSchema } from "type-graphql";

import express from 'express';
import { createServer } from 'http';

const port = process.env.PORT || 4000;
const environment = process.env.ENVIRONMENT || "dev";

const getCorsConfig = () => { 
  if (environment === "prod") {
    return ({
      "origin": [/unparel\.com/, /a\.run\.app/],
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
    })
  }

  return ({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  })
};

(async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }): Context => ({
      prisma,
      authHeader: req.header("authorization") || "",
    }),
  });

  const expressApp = express();
  const httpServer = createServer(expressApp);

  await server.start();
  server.applyMiddleware({
    app: expressApp,
    path: '/',
    cors: getCorsConfig()
  });

  httpServer.listen(port, () => {
    console.log("Server running at: ", `http://localhost:${port}${server.graphqlPath}`, ` in ${environment} mode`)
  })
})();
