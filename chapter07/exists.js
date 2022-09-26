const fs = require('fs');

var myPath = '/etc/passwd';
console.log(`${myPath} exists? `, fs.existsSync(myPath));

myPath = '/var/lib';
console.log(`${myPath} exists? `, fs.existsSync(myPath));

myPath = '/var/www';
console.log(`${myPath} exists? `, fs.existsSync(myPath));
