import { gql } from "apollo-boost"

const recent = blog => gql`
  query {
    recent(blog: ${blog}) {
      posts {
        id
        title
      }
    }
  }
`

const allPosts = blog => gql`
  query {
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
  query {
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
