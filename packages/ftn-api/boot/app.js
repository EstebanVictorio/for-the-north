const Express = require("express")
const Router = require("routing/router")
const cors = require("cors")
const SchemaAgent = require("agents/oracles/schema")

class App {
  constructor(port = 3000) {
    this.port = port
    this.server = Express()
    this.server.use(cors())
    // this.router = new Router(Express.Router())
    this.schemaAgent = new SchemaAgent(true)
  }

  async start() {
    const schemaMiddleware = await this.schemaAgent.useSchema()
    this.server.use("/api", schemaMiddleware)
    await this.server.listen(this.port)
    console.log(`Server started listening at ${this.port}`)
  }
}

module.exports = App
