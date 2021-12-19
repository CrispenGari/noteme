import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import React from "react";

const mlBackendLink = new HttpLink({
  uri: `https://7fd9-102-176-222-102.ngrok.io/graphql`,
});

const javaBackendLink = new HttpLink({
  uri: `https://a8b8-102-176-222-102.ngrok.io/graphql`,
});
const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) =>
      (operation.getContext() as any).clientName === "java-backend",
    javaBackendLink,
    mlBackendLink
  ),
  cache: new InMemoryCache(),
});
const GraphQLApolloProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default GraphQLApolloProvider;
