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
    const learningPostRegex = /learning\/[1-9]+[0-9]*/
    const toolingPostRegex = /tooling\/[1-9]+[0-9]*/
    if (
      learningPostRegex.test(parsedUrl.pathname) ||
      toolingPostRegex.test(parsedUrl.pathname)
    ) {
      const matches = parsedUrl.pathname.match(learningPostRegex)
      console.log("Matches:", matches)
    } else {
      console.log("Match not")
    }
    app.render(req, res, newPath, parsedUrl.query)
  }
}

;(async () => {
  await app.prepare()
  server.get("*", serverHandler)
  await server.listen(port)
  console.log(`> Ready: Server listening on http://localhost:${port}`)
})()
