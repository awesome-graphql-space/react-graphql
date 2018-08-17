import gql from 'graphql-tag';

export const resolvers = {
  Mutation: {
    storeToken: (_, {token}, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'AuthPayload', token: token })
      const fragment = gql`
        fragment authFragment on AuthPayload {
          token
        }
      `;
      const auths = cache.readFragment({ fragment, id });
      const data = { ...auths, token: token};
      cache.writeData({ id, data });
      return null;
    },
    loginUser: (_, { isLoggedIn, token }, { cache }) => {
      const query = gql`
        query getAuthStatus($id: "1") {
          getAuthStatus( id: $id) @client{
            token
            id
            loggedIn
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const data = {
        ...previous,
        token: token,
        isLoggedIn: isLoggedIn
      };
      cache.writeData({ data });
      const current = cache.readQuery({ query });
      return current;
    },
  },
};

export const defaults =  {
  getAuthStatus :{}
} 