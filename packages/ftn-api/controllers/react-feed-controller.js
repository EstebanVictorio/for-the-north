const feed = require("feed/react.json")
const { REACT_JS } = require("constants/collections")
const FirebaseAgent = require("agents/oracles/firebase")
class ReactFeedController {
  constructor() {
    this.agent = new FirebaseAgent()
    this.agent.ignite()
  }

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

  async learning(request, response) {
    const learning = await this.agent.readDocumentCollectionData(
      REACT_JS,
      "posts",
      "learning"
    )

    return response.send(learning)
  }

  async tooling(request, response) {
    const tooling = await this.agent.readDocumentCollectionData(
      REACT_JS,
      "posts",
      "tooling"
    )

    return response.send(tooling)
  }
}

module.exports = ReactFeedController
