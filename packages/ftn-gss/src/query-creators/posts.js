import { gql } from "apollo-boost"

const recent = blog => [
  gql`
    query recent($blog: String!) {
      recent(blog: $blog) {
        posts {
          id
          title
        }
      }
    }
  `,
  {
    variables: {
      blog
    }
  }
]

const allPosts = blog => gql`
  {
    allPosts(blog: ${blog}) {
      learning {
        id
        title
      }

      tooling {
        id
        title
      }
    }
  }
`

const selectedPost = (id, blog, section) => gql`
  {
    selectedPost(id: ${id}, blog: ${blog}, section: ${section}) {
      post {
        id
        title
      }
    }
  }
`

export { recent, allPosts, selectedPost }

export default {
  recent
}
