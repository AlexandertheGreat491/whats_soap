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

//this one is broken
// export const EDIT_SUD = gql`
// mutation editSud($sudId: ID!){
//     editSud (sudId: $sudId) {
//         _id
//         sudText
//         createdAt
//         username
//     }
    
// }`;
    
// export const DELETE_SUD = gql`
// mutation deleteSud($sudId: ID!) {
//     deleteSud(sudId: $sudId) {
//         _id
//         sudText
//         createdAt
//         username
//         sudreactions {
//             _id
//             sudreactionBody
//             username
//             createdAt
//         }
//     }
// }`;

// export const ADD_REACTION = gql`
// mutation addReaction($sudId: ID!) {
//     addReaction(sudId: $sudId) {
//         _id
//         sudreactionBody
//         username
//         createdAt
//     }
// }`;

// export const DELETE_REACTION = gql`
// mutation deleteReaction($sudId: ID!) {
//     deleteReaction(sudId: $sudId) {
//         _id
//         sudreactionBody
//         username
//         createdAt
//     }
// }`;
