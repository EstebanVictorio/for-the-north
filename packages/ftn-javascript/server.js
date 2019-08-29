const fs = require("fs")
const path = require("path")
const express = require("express")
const { buildSchema } = require("graphql")
const graphqlHTTP = require("express-graphql")
const next = require("next")
const { parse } = require("url")
const dotenv = require("dotenv")
const rootValue = require("./schema/root")
dotenv.config()

const server = express()
const dev = process.env.NODE_ENV === "development"
const app = next({ dev })
const port = process.env.PORT || 3001
const handle = app.getRequestHandler()

const serverHandler = (req, res) => {
  const { query } = parse(req.url, true)
  app.render(req, res, req.path, query)
}

const schemaResolver = (err, data) => {
  if (!err) {
    const schema = buildSchema(data.toString())
    server.use(
      "/api",
      graphqlHTTP({
        schema,
        rootValue,
        graphiql: true
      })
    )
  }
}

;(async () => {
  await fs.readFile(path.resolve("./schema/schema.graphql"), schemaResolver)
  await app.prepare()
  server.get("*", serverHandler)
  await server.listen(port)
  console.log(`> Ready: Server listening on http://localhost:${port}`)
})()
