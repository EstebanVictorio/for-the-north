const Express = require("express")
const Router = require("routing/router")
const SchemaAgent = require("agents/oracles/schema")

class App {
  constructor(port = 3000) {
    this.port = port
    this.server = Express()
    // this.router = new Router(Express.Router())
    this.schemaAgent = new SchemaAgent(true)
  }

  async start() {
    // this.router.setupRoutes()
    // this.server.use(this.router.getExpressRouter())
    const schemaMiddleware = await this.schemaAgent.useSchema()
    this.server.use("/api", schemaMiddleware)
    await this.server.listen(this.port)
    console.log(`Server started listening at ${this.port}`)
  }
}

module.exports = App
