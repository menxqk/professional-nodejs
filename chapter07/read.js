const fs = require('fs');

fs.open('./file.txt', 'r', function (err, fd) {
    if (err) {
        throw err;
    }
    var buf = Buffer.alloc(1024);
    fs.read(fd, buf, 0, 10, 0, function (err, readBytes) {
        if (err) {
            throw err;
        }
        console.log('Just read ' + readBytes + ' bytes');
        if (readBytes > 0) {
            console.log(buf.subarray(0, readBytes).toString());
        }
    });
})