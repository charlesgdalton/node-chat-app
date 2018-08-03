const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'server@server.com',
    text: 'Hello there peasant',
    createdAt: 1000
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('createMessage', (message) => {
    console.log(message);
  })
});

server.listen(port, () => {
  console.log(`Listening on port:${port}!`);
});
