const fs = require('fs');

fs.open('./file.txt', 'a', function (err, fd) {
    if (err) {
        throw err;
    }

    var buf = Buffer.from("Line 3\n");
    fs.write(fd, buf, 0, buf.length, null, function (err, written) {
        if (err) {
            throw err;
        }
        console.log('wrote ' + written + ' bytes');
    });
});
