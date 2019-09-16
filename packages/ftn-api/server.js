const dotenv = require("dotenv")
const App = require("boot/app")
require("isomorphic-fetch")
dotenv.config()
const port = process.env.PORT || 3000
const server = new App(port)
server.start()
