const https = require('https');

const options = {
    hostname: 'google.com',
    port: 443,
    path: '/',
    method: 'GET'
};

var req = https.request(options, function (response) {
    response.on('data', function (data) {
        var buf = data.slice(0, 40);
        console.log(buf.toString(), data.length);
    });
    response.on('end', function () {
        console.log('response ended');
    });
});

req.on('error', function (error) {
    console.log(error);
});

req.end();
