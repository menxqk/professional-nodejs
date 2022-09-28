var spawn = require('child_process').spawn;

require('http').createServer(function (req, res) {
    var child = spawn('ls', ['-al']);
    child.stdout.pipe(res);
    res.on('end', function () {
        child.kill();
    });
}).listen(4000);

