require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var left = 10;
    var internal = setInterval(function () {
        for (var i = 0; i < 100; i++) {
            res.write(Date.now() + " ");
        }
        if (--left === 0) {
            clearInterval(internal);
            res.end();
        }
    }, 1000);
}).listen(4000);
