const fs = require('fs')
const path = require('path')
const express = require('express')
const next = require('next')
const { parse } = require('url')
const dotenv = require('dotenv')
dotenv.config()

const server = express()
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const port  = process.env.PORT ? process.env.PORT : 3000
const handle = app.getRequestHandler()

const serverHandler = (req,res) => {
  const { query } = parse(req.url, true)
  app.render(req, res, req.path, query)
}

(async () => {
  await app.prepare()
  server.get('*', serverHandler)
  await server.listen(port)
  console.log(`> Ready: Server listening on http://localhost:${port}`)
})()