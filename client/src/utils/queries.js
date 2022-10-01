import { gql } from '@apollo/client';

// query for all suds
export const QUERY_SUDS = gql`
    query Query {
        sudsFindAll {
          _id
          title
          description
          ingredients
          steps
          createdAt
          username
        }
}`

// query for individual sud
export const QUERY_SUD = gql`
query Query($id: ID!) {
    sud(_id: $id) {
      _id
      title
      description
      ingredients
      steps
      createdAt
      username
    }
  }`

export const QUERY_SUD_USERNAME = gql`
  query Query($username: String) {
    suds(username: $username) {
      _id
      title
      description
      ingredients
      steps
      createdAt
      username
    }
  }`

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      suds {
        _id
        title
        description
        ingredients
        steps
        createdAt
        username
      }
    }
  }`

export const QUERY_USER = gql`
  query Query($username: String!) {
    user(username: $username) {
      _id
      username
      email
      suds {
        _id
        title
        description
        ingredients
        steps
        createdAt
        username
      }
    }
  }
  `