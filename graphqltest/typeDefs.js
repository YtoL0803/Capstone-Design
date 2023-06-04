import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Visitor {
    id: Int!
    time: DateTime!
  }

  type Refrigerator {
    id: Int!
    start: DateTime!
    end: DateTime!
  }

  type OutOfStock {
    shelf: Int!
    time: DateTime!
  }

  type Query {
    getUser(id: ID!): User
    visitors: [Visitor]
    visitors_between(start: DateTime!, end: DateTime!): [Visitor]
    opens: [Refrigerator]
    open(id: Int!): Refrigerator
    opens_between(start: DateTime!, end: DateTime!): [Refrigerator]
    outofstocks: [OutOfStock]
    outofstock(shelf: Int!): [OutOfStock]
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    addVisitor(time: DateTime!): Visitor
    openRefrigerator(start: DateTime!, end: DateTime!): Refrigerator
    addOutOfStock(shelf: Int!, time: DateTime!): OutOfStock
  }
`;

export default typeDefs;
