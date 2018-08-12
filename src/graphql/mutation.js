<<<<<<< HEAD
import gql from 'graphql-tag';

/**
 * Auth login mutation
 */
=======
import { gql } from "graphql-tag";

>>>>>>> a99b0aa37d7ab4b08948e22493e8b32a2e4d4fb5
export const LOGIN = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
            uesr {
                id
                username
            }
        }
    }
`;

/**
 * Post tweet mutation
 */
export const POST = gql`
    mutation post(text: String!, upload: String){
        post(text: text, upload: upload){
            id
            text
        }
    }
`;