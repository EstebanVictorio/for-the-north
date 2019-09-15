const Express = require("express")
const Router = require("routing/router")
const SchemaGateway = require("./schema-gateway")

class App {
  constructor(port = 3000) {
    this.port = port
    this.server = Express()
    this.router = new Router(Express.Router())
    this.schemaGateway = new SchemaGateway(true)
  }

  async start() {
    this.router.setupRoutes()
    this.server.use(this.router.getExpressRouter())
    const schemaMiddleware = await this.schemaGateway.useSchema()
    this.server.use("/api", schemaMiddleware)
    await this.server.listen(this.port)
    console.log(`Server started listening at ${this.port}`)
  }
}

module.exports = App
