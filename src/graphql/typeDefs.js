export const typeDefs = `

  type AuthPayload {
    token: String!
    id: String!
    loggedIn: Boolean!
  }

  type Mutation {
    loginUser(isLoggedIn: Boolean!, token: String!): AuthPayload
    # storeToken(isLoggedIn: Boolean!): Boolean
  }

  type Query {
    getAuthStatus(id: String!): AuthPayload
    # loggedIn: Boolean
  }

`;