/*import { gql } from 'apollo-server';
import pkg from 'graphql-iso-date';
const { GraphQLDateTime } = pkg;

const typeDefs = gql`
  scalar DateTime

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
    visitors: [Visitor]
    visitors_between(start: DateTime!, end: DateTime!): [Visitor]
    opens: [Refrigerator]
    open(id: Int!): Refrigerator
    opens_between(start: DateTime!, end: DateTime!): [Refrigerator]
    outofstocks: [OutOfStock]
    outofstock(shelf: Int!): [OutOfStock]
  }

  type Mutation {
    addVisitor(time: DateTime!): [Visitor]
    openRefrigerator(start: DateTime!, end: DateTime!): [Refrigerator]
    addOutOfStock(shelf: Int!, time: DateTime!): [OutOfStock]
  }
`;

export default typeDefs;*/

import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

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
    visitors: [Visitor]
    visitors_between(start: DateTime!, end: DateTime!): [Visitor]
    opens: [Refrigerator]
    open(id: Int!): Refrigerator
    opens_between(start: DateTime!, end: DateTime!): [Refrigerator]
    outofstocks: [OutOfStock]
    outofstock(shelf: Int!): [OutOfStock]
  }

  type Mutation {
    addVisitor(time: DateTime!): Visitor
    openRefrigerator(start: DateTime!, end: DateTime!): Refrigerator
    addOutOfStock(shelf: Int!, time: DateTime!): OutOfStock
  }
`;

export default typeDefs;
