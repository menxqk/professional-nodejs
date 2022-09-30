var tls = require('tls');
var fs = require('fs');

var serverOptions = {
    key: fs.readFileSync('./my_key.pem'),
    cert: fs.readFileSync('./my_cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
};

var server = tls.createServer(serverOptions);

var port = 4001;

server.listen(port);

server.on('secureConnection', function (clientStream) {
    console.log('Got a new connection:', clientStream.address(), clientStream.remoteAddress);

    clientStream.on('data', function (data) {
        var message = data.toString().trim();
        console.log('data:', message);
        clientStream.write('message: ' + data.toString());
        if (message === 'quit') {
            clientStream.end();
        } else if (message === 'close') {
            clientStream.end();
            server.close();
        }
    });

    clientStream.on('end', function () {
        console.log('end');
    });
});
