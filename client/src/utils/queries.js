import { gql } from '@apollo/client';

// query for all suds
export const QUERY_SUDS = gql`
    query Query {
        sudsFindAll {
          _id
          title
          description
          image
          ingredients
          steps
          createdAt
          username
          sudreactions {
            _id
            sudreactionBody
            createdAt
            username
          }
        }
}`

// query for individual sud
export const QUERY_SUD = gql`
query Query($id: ID!) {
    sud(_id: $id) {
      _id
      title
      description
      image
      ingredients
      steps
      createdAt
      username
      sudreactions {
        _id
        sudreactionBody
        createdAt
        username
      }
      sudreactionCount
    }
  }`

// all users
export const QUERY_USERS = gql`
{
    user {
        _id
        username
        email
        suds {
            _id
            sudText
            createdAt
            username
            sudreactions {
                _id
                sudreactionBody
                username
                createdAt
            }
        }
    }
}`

// individual user
export const QUERY_USER = gql`
query getUser($_id: ID) {
    user(id: $ID) {
        _id
        username
        email
        suds {
            _id
            sudText
            createdAt
            username
            sudreactions {
                _id
                sudreactionBody
                username
                createdAt
            }
        }
    }
}`