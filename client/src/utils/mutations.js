import { gql } from "@apollo/client";

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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_SUD = gql`
mutation Mutation($title: String!, $description: String!, $ingredients: String!, $steps: String!, $username: String!, $url: String) {
  addSud(title: $title, description: $description, ingredients: $ingredients, steps: $steps, username: $username, url: $url) {
    _id
    title
    description
    ingredients
    steps
    createdAt
    username
    url
  }
}`;

export const EDIT_SUD = gql`
mutation Mutation($title: String!, $description: String!, $ingredients: String!, $steps: String!, $username: String!, $sudId: ID!, $url: String) {
  editSud(title: $title, description: $description, ingredients: $ingredients, steps: $steps, username: $username, sudId: $sudId, url: $url) {
    _id
    title
    description
    ingredients
    steps
    createdAt
    username
    url
  }
}
`;

export const DELETE_SUD = gql`
  mutation Mutation($sudId: ID!) {
    deleteSud(sudId: $sudId) {
      _id
    }
  }
`;
