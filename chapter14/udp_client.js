var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = Buffer.from('this is a message');

client.send(message, 0, message.length, 4000, 'localhost', function (err, bytes) {
    if (err) {
        throw err;
    }
    console.log('bytes:', bytes);
    client.close();
});
