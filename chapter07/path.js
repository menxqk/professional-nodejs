var path = require('path');

var myPath = '/foo/bar//baz/asdf/quux/..'
console.log(myPath);
console.log(path.normalize(myPath));
