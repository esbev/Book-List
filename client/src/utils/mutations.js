import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
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
      bookCount
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: [String]!, $description: String!, $title: String!, $bookid: ID!, $image: String, $link: String) {
  saveBook(authors: $authors, description: $description, title: $title, bookid: $bookid, image: $image, link: $link) {
    _id
    username
    email
    bookCount
    savedBooks {
      
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation Mutation($bookid: ID!) {
  removeBook(bookid: $bookid) {
    _id
    username
    email
    bookCount
    savedBooks {
      
    }
  }
}
`;