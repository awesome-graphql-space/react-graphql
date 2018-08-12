import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import fetch from "node-fetch";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export let wsLink = null;

if (process.browser) {
  wsLink = new WebSocketLink({
    uri: `ws://localhost:4000`,
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  });
}

export const httpLink = new HttpLink({
  uri: "http://somerandom:4000/graphql",
  fetch,
  credentials: "include"
});

export const cache = new InMemoryCache();

export const request = async operation => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token
    },
    credentials: "include"
  });
};

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const authToken = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : ""
    },
    credentials: "include"
  });
  return forward(operation);
});

export const httpLinkAuth = middlewareLink.concat(httpLink);

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
export const netLink = process.browser
  ? split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httpLinkAuth
    )
  : httpLinkAuth;