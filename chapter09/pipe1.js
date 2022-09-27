var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var rs = fs.createReadStream('./readable.txt');

    rs.pipe(res); // res.end() is called automaticaly
});

server.listen(8080);
