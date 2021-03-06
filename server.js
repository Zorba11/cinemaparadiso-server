const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const PORT = process.env.PORT || 3000

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId)
    })
  })
})

server.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
})