import { ApolloServer } from "apollo-server";
import resolvers from "./graphqltest/resolvers.js";
import typeDefs from "./graphqltest/typeDefs.js";
import { visitor } from "./graphqltest/db.js";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log('Server ready at ' + url);
});