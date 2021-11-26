const axios = require('axios');

const emitMessages = ()=>{
    axios.get('/messages')
io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
      });
}

mo