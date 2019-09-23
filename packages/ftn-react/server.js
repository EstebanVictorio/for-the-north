const fs = require("fs")
const path = require("path")
const express = require("express")
const next = require("next")
const { parse } = require("url")
const dotenv = require("dotenv")
dotenv.config()

const server = express()
const dev = process.env.NODE_ENV === "development"
const app = next({ dev })
const port = process.env.PORT || 3002
const handle = app.getRequestHandler()

const serverHandler = (req, res) => {
  const parsedUrl = parse(req.url, true)
  const newPath = req.path.replace("/ftn-react", "/")
  if (/_next/.test(parsedUrl.pathname)) {
    handle(req, res, parsedUrl)
  } else {
    app.render(req, res, newPath, parsedUrl.query)
  }
}

;(async () => {
  await app.prepare()
  server.get("*", serverHandler)
  await server.listen(port)
  console.log(`> Ready: Server listening on http://localhost:${port}`)
})()
