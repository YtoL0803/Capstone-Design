import { ApolloServer } from "apollo-server";
import resolvers from "./graphqltest/resolvers.js";
import typeDefs from "./graphqltest/typeDefs.js";
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
});

server.listen().then(({url}) => {
    console.log('Server ready at ' + url);
});