var http = require('http');

var server = http.createServer(function (req, res) {
    res.write(`${req.method} ${req.url} ${req.httpVersion}\n`);

    req.setEncoding('utf8');
    req.on('data', function (data) {
        res.write(data);
    });
    req.on('end', function () {
        res.end();
    });
});

server.listen(8080, 'localhost');
