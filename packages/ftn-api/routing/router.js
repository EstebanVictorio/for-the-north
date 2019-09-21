class Router {
  constructor(expressRouter) {
    this.router = expressRouter
  }

  useControllers() {}

  setupRoutes() {}

  getExpressRouter() {
    return this.router
  }
}

module.exports = Router
