import gql from 'graphql-tag';

export const resolvers = {
  Mutation: {
    storeToken: (_, {loggedIn}, { cache, getCacheKey }) => {
      const query = gql`
        {
          loggedIn @client 
        } 
      `;
      const auths = cache.readQuery({ query });
      console.log("Auths"+ auths)
      const data = { ...auths, loggedIn: loggedIn};
      cache.writeQuery({ query, data });
      return data;
    },
    loginUser: (_, { isLoggedIn, token }, { cache }) => {
      const query = gql`
        query {
          getAuthStatus( id: "1") @client{
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
  }
};

export const defaults =  {
  getAuthStatus :{},
  loggedIn: false
} 

