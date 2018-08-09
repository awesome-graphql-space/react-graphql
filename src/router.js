import React from "react"
import ApolloClient from "apollo-client";
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from 'apollo-utilities'
import { AUTH_TOKEN } from './constant'
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import LoginForm from "./components/LoginForm"
import Tweet from "./components/Tweet"

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  })
  return forward(operation)
})


const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
    },
  },
})


const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

const client = new ApolloClient({ 
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true })

 const AppRouter = () => (
 <ApolloProvider client={client}>  
    <Router>
      <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginForm} />
          <Route path="/tweet" component={Tweet} />
      </div>		
    </Router>
  </ApolloProvider>
)
 export default AppRouter