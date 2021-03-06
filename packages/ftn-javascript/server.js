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
  const parsedUrl = parse(req.url, true)
  const newPath = req.path.replace("/ftn-javascript", "/")
  if (/_next/.test(parsedUrl.pathname)) {
    console.log(`Url matches _next`)
    console.log(`Url: ${req.url}`)
    handle(req, res, parsedUrl)
  } else {
    app.render(req, res, newPath, parsedUrl.query)
  }
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
