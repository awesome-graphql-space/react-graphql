import gql from 'graphql-tag';

/**
 * tweets timeline query
 */
export const TWEETS = gql`
    query {
      tweets{
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