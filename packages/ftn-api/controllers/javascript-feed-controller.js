const feed = require("feed/javascript.json")

class JavaScriptFeedController {
  handler(request, response) {
    const { resource } = request.params
    if (!resource) {
      return this.index(request, response)
    }

    return this[resource](request, response)
  }

  index(request, response) {
    return response.send(feed)
  }

  learning(request, response) {
    const { posts } = feed
    const { learning } = posts
    return response.send(learning)
  }

  tooling(request, response) {
    const { posts } = feed
    const { tooling } = posts
    return response.send(tooling)
  }
}

module.exports = JavaScriptFeedController
