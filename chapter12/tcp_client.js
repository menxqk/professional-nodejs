var net = require('net');
var port = 4000;

var conn = net.createConnection(port);

conn.on('connect', function () {
    conn.write('a string\n');
});

conn.on('error', function (err) {
    console.log(err);
});

conn.on('data', function (data) {
    console.log(data.toString());
    conn.end();
});
