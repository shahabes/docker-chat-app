
var app = require('express')();
const { json } = require('express');
var server = require('http').Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

server.listen(3000);

io.on('connection', function (socket) {

    socket.on('message_received', function (message) {
        // var messageObject = JSON.parse(message);
        // console.log(messageObject.username);
        io.emit('new_message', message);
    });

});
