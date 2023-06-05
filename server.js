import express from 'express';
import { ApolloServer } from "apollo-server-express";
import resolvers from "./src/resolvers.js";
import typeDefs from "./src/typeDefs.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb+srv://limjh2255:whdghks1@cluster0.nqhhtgm.mongodb.net/?retryWrites=true&w=majority', // mLab URL 삽입 dbuser: 아이디, dbpassword: 비밀번호
    {useNewUrlParser : true});
    mongoose.connection.once('open', () => {
        console.log('MongoDB Connected...');
    }
);
    
const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
});

async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
