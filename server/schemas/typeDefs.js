const { gql } = require("apollo-server-express");

//Our type Sud is a pun on a typical user having a type Thought
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    suds: [Sud]
  }

  type Sud {
    _id: ID
    title: String
    description: String
    ingredients: String
    steps: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    sudsFindAll: [Sud]
    suds(username: String): [Sud]
    sud(_id: ID!): Sud
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSud(
      title: String!
      description: String!
      ingredients: String!
      steps: String!
      username: String!
    ): Sud
    editSud(
      title: String!
      description: String!
      ingredients: String!
      steps: String!
      username: String!
      sudId: ID!
    ): Sud
    deleteSud(
      sudId: ID!
    ): Sud
  }
`;

module.exports = typeDefs;
