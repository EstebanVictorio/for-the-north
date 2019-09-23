import { gql } from "apollo-boost"

const recent = blog => [
  gql`
    query recent($blog: String!) {
      recent(blog: $blog) {
        posts {
          id
          title
          iconUrl
        }
      }
    }
  `,
  {
    variables: {
      blog
    },
    skip: !blog
  }
]

const allPosts = (blog, released) => [
  gql`
    query allPosts($blog: String!, $released: Boolean) {
      allPosts(blog: $blog,released: $released) {
        learning {
          id
          title
          iconUrl
        }

        tooling {
          id
          title
          iconUrl
        }
      }
    }
  `,
  {
    variables: {
      blog,
      released
    },
    skip: !blog,
    fetchPolicy: "cache-and-network"
  }
]

const selectedPost = (id, blog, section) => [
  gql`
    query selectedPost($id: Int!, $blog: String!, $section: String!) {
      selectedPost(id: $id, blog: $blog, section: $section) {
        post {
          id
          title
        }
      }
    }
  `,
  {
    variables: {
      id,
      blog,
      section
    },
    skip: !id || !blog || !section
  }
]

export { recent, allPosts, selectedPost }

export default {
  recent
}
