const Express = require("express")
const Router = require("routing/router")

class App {
  constructor(port = 3000) {
    this.port = port
    this.server = Express()
    this.router = new Router(Express.Router())
  }

  async start() {
    this.router.setupRoutes()
    this.server.use(this.router.getExpressRouter())
    await this.server.listen(this.port)
    console.log(`Server started listening at ${this.port}`)
  }
}

module.exports = App
