var path = require('path');
var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    var file = path.normalize('.' + req.url);
    console.log('Trying to serve', file);

    function reportError(err) {
        console.log(err);
        res.writeHead(500);
        res.end('Internal Server Error');
    }

    fs.stat(file, function (err, stats) {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404);
                return res.end('Not found');
            } else {
                return reportError(err);
            }
        }

        if (stats.isDirectory()) {
            res.writeHead(403);
            return res.end('Forbidden');
        }

        var rs = fs.createReadStream(file);
        rs.on('error', reportError);
        res.writeHead(200);
        rs.pipe(res);
    });

}).listen(4000);
