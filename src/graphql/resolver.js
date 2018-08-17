import gql from 'graphql-tag';

export const resolvers = {
  Mutation: {
    loginUser: async (_, { isLoggedIn, token }, { cache }) => {
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

      console.log(previous);

      const data = {
        ...previous,
        token,
        loggedIn: isLoggedIn
      };

      cache.writeData({id:`AuthPayload:${'1'}`, data });
      const current = await cache.readQuery({ query });
      console.log(current);
      return current.getAuthStatus;
    },
  }
};

export const defaults =  {
  getAuthStatus :{
    __typename: 'AuthPayload',
    id: '1',
    loggedIn: false,
    token: ''
  },
} 

