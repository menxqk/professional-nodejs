var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var rs = fs.createReadStream('./readable.txt');

    rs.on('data', function (data) {
        if (!res.write(data)) {
            rs.pause();
        }
    });

    res.on('drain', function () {
        rs.resume();
    });

    rs.on('end', function () {
        res.end();
    });
});

server.listen(8080);
