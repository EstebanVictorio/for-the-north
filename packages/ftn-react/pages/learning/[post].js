import { Layout } from "@ftn/patterns"
import { QueryCreators, useQuery } from "@ftn/gss"
import { BLOG } from "utils/constants"

const LearningPost = () => <Layout>{"Learning post"}</Layout>

LearningPost.getInitialProps = async ({ query }) => {
  const { selectedPost } = QueryCreators
  const { post } = query
  const [gqlQuery, options] = selectedPost(post, BLOG, "learning")
  return {
    query: gqlQuery,
    options
  }
}

export default LearningPost
