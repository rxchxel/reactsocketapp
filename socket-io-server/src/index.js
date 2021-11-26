const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const cors = require('cors');

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(cors());
app.get('/', (req, res) => {
  return res.status(200).send("Hello from the backend")
});
app.get('/msgs', (req, res) => {
  return res.status(200).send("Hello from the backend")
});

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
//   });

server.listen(3001, () => {
  console.log('listening on *:3001');
});