import React from "react"
import ApolloClient from "apollo-client";
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import LoginForm from "./components/LoginForm"
import Tweet from "./components/Tweet"
import { netLink, errorLink, requestLink } from "./link";

const links = [requestLink, errorLink, netLink];

const client = new ApolloClient({ 
  link: ApolloLink.from([links]),
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