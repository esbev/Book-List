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
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: ID!, $username: String!, $email: String!, $password: String!) {
    addUser(_id: $_id, username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;