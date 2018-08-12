import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./index.css";

  // Render react app
ReactDOM.render(
    <ApolloProvider>  
        <App />
    </ApolloProvider>, document.getElementById('root'));

/**
 * Register react app PWA
 */
registerServiceWorker();
