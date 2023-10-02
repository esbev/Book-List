const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
  }
# create an input type to handle the saveBook mutation
  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]!, 
      description: String!, 
      title: String!, 
      bookid: String!, 
      image: String, 
      link: String
    ): User
    removeBook(bookid: ID!): User
  }
`;

module.exports = typeDefs;
