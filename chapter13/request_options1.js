var request = require('request');;

var options = {
    url: 'http://localhost:8080/something',
    method: 'DELETE',
    headers: { Accept: 'application/json' },
    body: Buffer.from("Hello World", 'utf8')
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
