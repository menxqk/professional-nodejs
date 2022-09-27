var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var rs = fs.createReadStream('./readable.txt');

    rs.pipe(res, { end: false }); // do not call res.end() automaticaly

    rs.on('end', function () {
        res.qrite("And that's all, folks!");
        res.end();
    });
});

server.listen(8080);
