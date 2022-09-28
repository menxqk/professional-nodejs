var net = require('net');

var server = net.createServer(function (socket) {
    console.log('got connection: ', socket.remoteAddress);

    socket.on('data', function (data) {
        socket.write(data.toString());
    });

    socket.on('end', function () {
        console.log('cloed connection: ', socket.remoteAddress);
    });

});

server.listen(4000);
