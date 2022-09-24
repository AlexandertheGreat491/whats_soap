const { gql } = require('apollo-server-express');

//Our type Sud is a pun on a typical user having a type Thought
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    suds: [Suds]
}

type Sud { 
    _id: ID
    sudsText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}

type Reaction {
    _id: ID
    reactionBody: String
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
    suds(username: String): [Sud]
    sud(_id: ID!): Sud
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSud(sudText: String!): Sud
    addReaction(sudId: ID!, reactionBody: String!): Sud
}
`;

module.exports = typeDefs;