import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String!
    $email: String!
    $password: String!
) {
    addUser(
        username: $username
        email: $email
        password: $password
    ) {
        token
        user {
            _id
        }
    }
}
`;

export const ADD_SUD = gql`
mutation Mutation($title: String!, $description: String!, $ingredients: String!, $steps: String!, $username: String!) {
  addSud(title: $title, description: $description, ingredients: $ingredients, steps: $steps, username: $username) {
    _id
    title
    description
    ingredients
    steps
    createdAt
    username
  }
}`;



