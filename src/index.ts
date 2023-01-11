import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { prisma, Context } from "./context";

import { resolvers, applyResolversEnhanceMap, applyInputTypesEnhanceMap, ROLE } from "../prisma/generated/type-graphql";
import { buildSchema, AuthChecker, Authorized } from "type-graphql";

import express from 'express';
import { createServer } from 'http';

import { applicationDefault, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth";
import { Allow, Max, Min } from "class-validator";

// Custom resolvers
import { PostResolver } from './resolvers/posts.resolvers';
// import { TopicResolver } from "./resolvers/search.resolvers";

const userCreateOrUpdateOperations = [
  "createPostReview",
  "createComment",
  "updateComment",
  "createReply",
]

const userDeleteOperations = [
  "deleteComment",
  "deletePost",
  "deleteReply",
]

const userAccountOperations = [
  "updateUser",
  "deleteUser",
]

const firebaseApp = initializeApp({
  credential: applicationDefault(),
})

const auth = getAuth(firebaseApp);

const port = process.env.PORT || 4000;
const environment = process.env.ENVIRONMENT || "dev";

const getCorsConfig = () => { 
  if (environment === "prod") {
    return ({
      "origin": [/trottar\.com/, /a\.run\.app/],
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

applyInputTypesEnhanceMap({
  PostCreateInput: {
    fields: {
      _all: [Allow()],
      rating: [Min(0), Max(10)],
    }
  },
})

applyResolversEnhanceMap({
  User: {
    upsertUser: [Authorized()],
    createUser: [Authorized()],
    updateUser: [Authorized()],
    users: [Authorized()],
    deleteUser: [Authorized()],
    deleteManyUser: [Authorized()],
  },
  Currency: {
    _all: [Authorized(ROLE.ADMIN)]
  },
  AggregateRating: {
    _all: [Authorized(ROLE.ADMIN)]
  },
  Tenant: {
    createTenant: [Authorized()],
    updateTenant: [Authorized(ROLE.SUPER_ADMIN, ROLE.ADMIN, ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    deleteTenant: [Authorized(ROLE.SUPER_ADMIN, ROLE.ADMIN, ROLE.WORKSPACE_OWNER)],
    createManyTenant: [Authorized(ROLE.SUPER_ADMIN, ROLE.ADMIN)],
    updateManyTenant: [Authorized(ROLE.SUPER_ADMIN, ROLE.ADMIN)],
    deleteManyTenant: [Authorized(ROLE.SUPER_ADMIN, ROLE.ADMIN)],
  },
  NotificationSettings: {
    _all: [Authorized()]
  },
  BookingOrder: {
    createBookingOrder: [Authorized()],
    updateBookingOrder: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN, ROLE.WORKSPACE_USER)],
    deleteBookingOrder: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN, ROLE.WORKSPACE_USER)],
    createManyBookingOrder: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    updateManyBookingOrder: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN, ROLE.WORKSPACE_USER)],
    deleteManyBookingOrder: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN, ROLE.WORKSPACE_USER)],
  },
  BookingOrderLineItem: {
    _all: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN, ROLE.WORKSPACE_USER)],
  },
  Experience: {
    createExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    updateExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    deleteExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    createManyExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    updateManyExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    deleteManyExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
    upsertExperience: [Authorized(ROLE.WORKSPACE_OWNER, ROLE.WORKSPACE_ADMIN)],
  },
  Post: {
    createPost: [Authorized()],
    updatePost: [Authorized()],
    createManyPost: [Authorized(ROLE.ADMIN)],
    updateManyPost: [Authorized(ROLE.ADMIN)],
    deletePost: [Authorized()],
    deleteManyPost: [Authorized(ROLE.ADMIN)],
  },
  Comment: {
    createComment: [Authorized()],
    updateComment: [Authorized()],
    createManyComment: [Authorized(ROLE.ADMIN)],
    updateManyComment: [Authorized(ROLE.ADMIN)],
    deleteComment: [Authorized()],
    deleteManyComment: [Authorized(ROLE.ADMIN)],
  },
  Reply: {
    createReply: [Authorized()],
    updateReply: [Authorized()],
    createManyReply: [Authorized(ROLE.ADMIN)],
    updateManyReply: [Authorized(ROLE.ADMIN)],
    deleteReply: [Authorized()],
    deleteManyReply: [Authorized(ROLE.ADMIN)],
  },
  Reaction: {
    createReaction: [Authorized()],
    updateReaction: [Authorized()],
    createManyReaction: [Authorized(ROLE.ADMIN)],
    updateManyReaction: [Authorized(ROLE.ADMIN)],
    deleteReaction: [Authorized()],
    deleteManyReaction: [Authorized(ROLE.ADMIN)],
  },
  Notification: {
    notification: [Authorized()],
    notifications: [Authorized()],
    createNotification: [Authorized()],
    updateNotification: [Authorized()],
    createManyNotification: [Authorized(ROLE.ADMIN)],
    updateManyNotification: [Authorized(ROLE.ADMIN)],
    deleteNotification: [Authorized()],
    deleteManyNotification: [Authorized(ROLE.ADMIN)],
  },
})

const authChecker: AuthChecker<Context> = async ({ context, args, info }, roles) => {
  // return true
  const requestToken = (context.authHeader || '').replace('Bearer ', '');

  try {
    const decodedToken = await auth.verifyIdToken(requestToken);
    const { uid } = decodedToken;

    const user = await prisma.user.findUnique({
      where: {
        id: uid
      }
    });
    
    if ((uid && info.fieldName === "createUser") || (uid && info.fieldName === "upsertUser")) {
      return true;
    }

    if (roles.length === 0 || (user?.roles.length && roles.some(r => user?.roles.map(i => i.toString()).includes(r)))) {
      return true;
    }

    if (!uid) { 
      throw new Error("Firebase user not found");
    }


    if (!user) {
      throw new Error("User not found");
    }

    if (userCreateOrUpdateOperations.includes(info.fieldName) && user?.id !== args.data.Author.connect.id) {
      throw new Error("user/invalid");
    }


  } catch (err) { 
    if (err?.code === "auth/id-token-expired") {
      throw new Error("Token expired");
    }

    if (err?.message === "user/invalid") {
      throw new Error("Unauthorized: You can only perform this operation on your own content");
    }
    console.log(err)
  }

  return false;
}

(async () => {
  const schema = await buildSchema({
    authChecker,
    resolvers: [PostResolver, ...resolvers],
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
