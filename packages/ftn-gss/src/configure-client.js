import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost"

const configureClient = (uri, ssrMode) => {
  const link = new HttpLink({
    uri
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link,
    cache,
    ssrMode
  })

  return apolloClient
}

export default configureClient
