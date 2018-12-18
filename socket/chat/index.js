const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('the user is connected');
    
    socket.on('disconnect', () => {
        console.log('user is disconnected');
    });

    socket.on('messages', (message) => {
        console.log(message);
        io.emit('messages', message);
    })

});

server.listen(4000, () => console.log('listening on port 4000'));