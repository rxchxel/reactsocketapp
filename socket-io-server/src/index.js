const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
//const { Server } = require("socket.io");
const socket = require("socket.io");
const io = new socket.Server(server);
const cors = require('cors');

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(cors());
app.get('/', (req, res) => {
  return res.status(200).send("Hello from the backend")
});
app.get('/atarichat', (req, res) => {
  return res.status(200).send("Hello from the backend!!!!!!!!!!!!")
});

//io.path("/atarichat");

io.on("connection", (socket) => {
  socket.emit("message", "did i work?")
  console.log("i worked this time")
});


server.listen(3001, () => {
  console.log('listening on *:3001');
});