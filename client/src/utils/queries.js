import { gql } from "@apollo/client";

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
          url
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
      url
    }
  }
`;

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
    url
  }
`;
