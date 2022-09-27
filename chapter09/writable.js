var fs = require('fs');

var options = { flags: 'w', encoding: 'utf8', mode: 0666 };
var ws = fs.createWriteStream('./writable.txt');

ws.on('drain', function () {
    console.log('writestream drained...');
});
ws.on('close', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('writestream closed...');
});

ws.write(`Line 1
Line 2
Line 3
`);
