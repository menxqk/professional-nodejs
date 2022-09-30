var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./server_key.pem'),
    cert: fs.readFileSync('./server_cert.pem'),
    ca: fs.readFileSync('./client_cert.pem'),
    requestCert: true,
    rejectUnauthorized: true
};

var server = https.createServer(options, function (req, res) {
    console.log('authorized:', req.socket.authorized);
    console.log('client certificate:', req.socket.getPeerCertificate());
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

var port = 4001;
var host = 'localhost';

server.listen(port, host);
