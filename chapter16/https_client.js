var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./client_key.pem'),
    cert: fs.readFileSync('./client_cert.pem'),
    ca: fs.readFileSync('./server_cert.pem'),
    rejectUnauthorized: false,
    port: 4001,
    method: 'GET',
    path: '/'
};

var request = https.request(options, function (response) {
    console.log('response.statusCode:', response.statusCode);

    response.on('data', function (data) {
        console.log('got some data back from the server:', data.toString().trim());
    });
});

request.on('error', function (error) {
    console.log('Error:', error);
});

request.write('Hey!\n');
request.end();
