var fs = require('fs');

var rs = fs.createReadStream('./readable.txt');

rs.on('data', function (data) {
    console.log(data.toString());
});

rs.on('end', function (data) {
    console.log('readstream ended...');
});
