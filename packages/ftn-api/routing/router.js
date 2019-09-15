const JavaScriptFeedController = require("controllers/javascript-feed-controller")
const ReactFeedController = require("controllers/react-feed-controller")

class Router {
  constructor(expressRouter) {
    this.router = expressRouter
  }

  useControllers() {
    const jsController = new JavaScriptFeedController()
    const reactController = new ReactFeedController()
    return {
      jsController,
      reactController
    }
  }

  setupRoutes() {
    const { jsController, reactController } = this.useControllers()
    this.router.get("/js-feed/:resource?", (req, res) =>
      jsController.handler(req, res)
    )
    this.router.get("/react-feed/:resource?", (req, res) =>
      reactController.handler(req, res)
    )
  }

  getExpressRouter() {
    return this.router
  }
}

module.exports = Router
