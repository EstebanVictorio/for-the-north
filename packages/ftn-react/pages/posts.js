import { Layout } from "@ftn/patterns"
import styled from "styled-components"
import { useQuery, QueryCreators } from "@ftn/gss"
import PostList from "components/post-list"
import { BLOG } from "utils/constants"

const Posts = ({ query, options }) => {
  const { loading, error, data } = useQuery(query, options)
  let learning = []
  let tooling = []
  if (!loading && data && data.allPosts) {
    learning = data.allPosts.learning
    tooling = data.allPosts.tooling
  }

  return (
    <Layout>
      <PostList learning={learning} tooling={tooling} />
    </Layout>
  )
}

Posts.getInitialProps = async () => {
  const { allPosts } = QueryCreators
  const [query, options] = allPosts(BLOG, true)
  return {
    query,
    options
  }
}

export default Posts
