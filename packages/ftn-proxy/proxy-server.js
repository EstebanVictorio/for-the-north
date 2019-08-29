const express = require("express")
const proxy = require("http-proxy-middleware")
const PORT = process.env.PORT || 3000

const REACT_BLOG = "/ftn-react"
const JS_BLOG = "/ftn-javascript"
const NEXT_JS_BLOG = "/ftn-next"

let httpProxy = proxy({
  target: "http://localhost:4000",
  changeOrigin: true,
  router: {
    "/ftn-javascript": "http://localhost:3001",
    "/ftn-react": "http://localhost:3002",
    "/ftn-next": "http://localhost:4003"
  }
})

let app = express()
app.use(NEXT_JS_BLOG, httpProxy)
app.use(REACT_BLOG, httpProxy)
app.use(JS_BLOG, httpProxy)

app.listen(PORT)
