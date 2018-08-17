import gql from 'graphql-tag';

/**
 * tweets timeline query
 */
export const TWEETS = gql`
    query {
      tweets {
        id
      text
      upload
      slug
      views
      author{
        id
        username
        displayName
      }
      }
    }
    
`;

/** Local state query */
export const GET_AUTH_STATUS = gql`
    query getAuthStatus($id: String!) {
      getAuthStatus(id: $id) @client{
        id
        token
        loggedIn
      }
    }
`;