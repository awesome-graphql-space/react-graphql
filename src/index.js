import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./registerServiceWorker";
import { netLink, errorLink, requestLink } from "./link";
import "./index.css";

//Imported apollo links
const links = [requestLink, errorLink, netLink];

/**
 * Creating the local apollo client instance
 */
const client = new ApolloClient({ 
  link: ApolloLink.from([links]),
  cache: new InMemoryCache(),
  connectToDevTools: true });

  // Render react app
ReactDOM.render(
    <ApolloProvider client={client}>  
        <AppRouter />
    </ApolloProvider>, document.getElementById('root'));

/**
 * Register react app PWA
 */
registerServiceWorker();
