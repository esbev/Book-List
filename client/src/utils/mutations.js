import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      bookCount
      savedBooks
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      bookCount
      savedBooks
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    password
    bookCount
    savedBooks 
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation Mutation($bookid: String!) {
  removeBook(bookid: $bookid) {
    _id
    username
    email
    password
    bookCount
    savedBooks 
  }
}
`;