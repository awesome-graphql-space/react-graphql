const typeDefs = `
  type User {
    id: Int!
    username: String!
    displayName: String!
  }

  type AuthPayload {
    token: String!
    user: User
    id: String!
    loggedIn: Boolean!
  }

  type Mutation {
    loginUser(isLoggedIn: Boolean!, token: String!): AuthPayload
    storeToken(isLoggedIn: Boolean!): Boolean
  }

  type Query {
    getAuthStatus(id: String!): AuthPayload
    loggedIn: Boolean
  }

`;