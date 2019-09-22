import "isomorphic-fetch"
import QueryCreators from "./query-creators"
import configureClient from "./configure-client"
import { ApolloProvider, useQuery } from "@apollo/react-hooks"

export { QueryCreators, configureClient, ApolloProvider, useQuery }

export default {
  configureClient,
  QueryCreators,
  ApolloProvider,
  useQuery
}
