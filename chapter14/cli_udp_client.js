var dgram = require('dgram');

if (process.argv.length < 3) {
    console.log('\t [hostname] [port]');
    process.exit(1);
}

var host = process.argv[2];
var port = parseInt(process.argv[3], 10);

var client = dgram.createSocket('udp4');

client.on('message', function (message) {
    console.log('Got message back:', message.toString().trim());
})

process.stdin.on('data', function (data) {
    client.send(data, 0, data.length, port, host);
});

console.log('Start typing to send messages to %s:%s', host, port);
