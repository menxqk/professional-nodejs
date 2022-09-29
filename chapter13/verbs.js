var http = require('http');

var options = {
    host: 'localhost',
    port: 8080,
    path: '/upload',
    method: 'POST'
};

var req = http.request(options);
req.on('response', function (res) {
    res.setEncoding('utf8')

    var response = "";

    res.on('data', function (data) {
        response += data;
    });

    res.on('end', function () {
        console.log(response);
    });
});

req.end();
