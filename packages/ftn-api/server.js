const dotenv = require("dotenv")
const App = require("boot/app")
dotenv.config()
const port = process.env.PORT || 3000
const server = new App(port)
server.start()
