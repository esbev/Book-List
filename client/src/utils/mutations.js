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
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
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
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($input: BookInput) {
  saveBook(input: $input) {
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookid: String!) {
    removeBook(bookId: $bookId) {
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;