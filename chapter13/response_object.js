var http = require('http');

var options = {
    host: 'localhost',
    port: 8080,
    path: '/get'
}

http.get(options, function (res) {
    console.log('response.statusCode:', res.statusCode);
    console.log('response.httpVersion:', res.httpVersion);
    console.log('response.headers:', res.headers);

    var body = "";
    res.setEncoding('utf8');
    res.on('data', function (data) {
        body += data;
    });
    res.on('end', function () {
        console.log(body);
    });
});
