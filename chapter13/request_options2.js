var request = require('request');

var options = {
    url: 'http://localhost:8080/get/something',
    method: 'PUT',
    qs: { a: 1, b: 2 },
    json: { one: 1, two: 2 },
    encoding: 'utf8'
}

request(options, function (error, response, body) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    console.log(response.statusCode);
    console.log(response.httpVersion);
    console.log(response.headers);
    console.log(body);
});
