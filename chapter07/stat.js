const fs = require('fs');

var myPath = '/etc/passwd';
fs.stat(myPath, function (err, stats) {
    if (err) {
        console.log(`Error accessing ${myPath}: ${err.message}`);
        throw err;
    }
    console.log(stats);
});