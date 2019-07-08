let express = require('express')
let proxy= require('http-proxy-middleware')
const PORT = 3000
let httpProxy = proxy({ 
  target: 'http://localhost:4000',
  changeOrigin: true,
  pathRewrite: {
    '/app2': '/'
  }
})


let app = express()
console.log(httpProxy)
app.use('/app2', httpProxy)
app.listen(PORT)