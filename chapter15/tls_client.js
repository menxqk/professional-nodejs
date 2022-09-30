var tls = require('tls');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./my_key.pem'),
    cert: fs.readFileSync('./my_cert.pem'),
    // requestCert: false,
    rejectUnauthorized: false,
    // ca: fs.readFileSync('./my_cert.pem')
};

var host = 'localhost';
var port = 4001;

var client = tls.connect(port, host, options, function (data) {
    console.log('connected:', data);
});

client.on('error', function (error) {
    console.log(error);
    process.exit(1);
});

client.on('secureConnect', function (data) {
    console.log('secureConnected:', data);
});

client.on('data', function (data) {
    console.log(data.toString().trim());
});

client.on('end', function () {
    console.log('connection ended');
    process.exit(0);
});

const sendMessage = function (data) {
    client.write(data);
}
process.stdin.on('data', sendMessage);
