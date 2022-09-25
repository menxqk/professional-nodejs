var fs = require('fs');

fs.readFile('/etc/passwd', function (err, fileContent) {
    if (err) {
        throw err;
    }
    console.log('file content:\n', fileContent.toString());
});