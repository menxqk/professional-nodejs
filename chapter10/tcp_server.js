var net = require('net');

var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        process.stdout.write(data.toString());
    });

    socket.on('end', function () {
        console.log('end...');
    });

    socket.write('Some String\n');
});

server.on('connection', function (socket) {
    console.log('connection: ', socket.address(), socket.remoteAddress);
});

server.on('listening', function () {
    console.log('server listening...');
});

server.listen(4000);
