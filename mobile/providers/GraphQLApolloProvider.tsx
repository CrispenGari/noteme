import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: `https://51f2-102-176-222-102.ngrok.io/graphql`,
  cache: new InMemoryCache(),
});
const GraphQLApolloProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default GraphQLApolloProvider;
