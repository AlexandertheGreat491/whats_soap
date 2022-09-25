import { gql } from '@apollo/client';

// query for all suds
export const QUERY_SUDS = gql`
{
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
}`

// query for individual sud
export const QUERY_SUD = gql`
query getSud($_id: ID) {
    getSud(id: $ID) {
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