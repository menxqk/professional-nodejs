var dgram = require('dgram');

var server = dgram.createSocket('udp4');

var port = 4000;

server.on('message', function (message, rinfo) {
    message = message.toString().trim();
    console.log('server got message %s from %s:%d', message, rinfo.address, rinfo.port);
    server.send(message, 0, message.length, rinfo.port, rinfo.address);
});

server.bind(port);
