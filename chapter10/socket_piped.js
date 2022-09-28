var fs = require('fs');
var net = require('net');

var ws = fs.createWriteStream('mysocketdump.txt');

var server = net.createServer(function (socket) {
    socket.on('end', function () {
        ws.end();
        server.close();
    });

    socket.pipe(ws);
}).listen(4001);
