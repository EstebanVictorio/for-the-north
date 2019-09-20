class BlogController {
  constructor(firebaseAgent) {
    this.firebaseAgent = firebaseAgent
  }

  async recent({ blog }) {
    const data = await this.firebaseAgent.readDocumentCollectionData(
      blog,
      "posts",
      "learning"
    )

    const recent = data.filter(post => post.status === "RELEASED").slice(-3)

    return {
      posts: recent
    }
  }

  async selectedPost({ id, blog, section }) {
    const data = await this.firebaseAgent.readDocumentCollectionData(
      blog,
      "posts",
      section
    )
    const result = data.filter(post => post.id === id)[0]
    const post = result || { id: -1 }

    return {
      post
    }
  }

  async allPosts({ blog }) {
    const data = await this.firebaseAgent.readCollection(blog)
    const { posts } = data
    const { learning, tooling } = posts

    return {
      learning,
      tooling
    }
  }
}

module.exports = BlogController
