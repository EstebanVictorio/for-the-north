import ApolloClient from "apollo-boost"

const configureClient = uri => {
  const apolloClient = new ApolloClient({
    uri
  })

  return apolloClient
}

export default configureClient
