import gql from 'graphql-tag';

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