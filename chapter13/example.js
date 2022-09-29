var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
};

var req = http.get(options);

req.on('response', function (res) {
    console.log('Got response:', res.statusCode);

    res.on('data', function (data) {
        var html = data.toString().substring(0, 20);
        console.log(html);
    });
});

req.on('error', function (err) {
    console.log('Error:', error);
});
