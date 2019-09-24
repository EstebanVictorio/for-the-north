import { Layout } from "@ftn/patterns"
import { QueryCreators, useQuery } from "@ftn/gss"
import { BLOG } from "utils/constants"

const ToolingPost = () => <Layout>{"Tooling post"}</Layout>

ToolingPost.getInitialProps = async ({ query }) => {
  const { selectedPost } = QueryCreators
  const { post } = query
  const [gqlQuery, options] = selectedPost(post, BLOG, "tooling")
  return {
    query: gqlQuery,
    options
  }
}

export default ToolingPost
