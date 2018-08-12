import gql from 'graphql-tag';

/**
 * tweets timeline query
 */
export const TWEETS = gql`
    mutation {
        tweets{
            id
            text
        }
    }
`;