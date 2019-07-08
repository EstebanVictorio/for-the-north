let express = require('express')
let path = require('path')

let app = express()


app.get('/',(req, res) => {
  const filePath = path.resolve(__dirname)  + '/sample.html'
  res.sendFile(filePath)
  console.log('Hello world from Express at http://localhost:4000 !')
})

app.listen(4000,() => {
  console.log('Listening on http://localhost:4000...')
},)