const express = require('express')
const app = express()
const server = require('http').Server(app)

const PORT = 3000


server.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
})