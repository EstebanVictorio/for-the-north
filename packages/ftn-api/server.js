const dotenv = require("dotenv")
dotenv.config()
const App = require("boot/app")
const port = process.env.PORT || 3000
const server = new App(port)
server.start()
