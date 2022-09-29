var request = require('request');

request("http://localhost:8080/get?page=2", function (error, response, body) {
    if (error) {
        console.log(err);
        process.exit(1);
    }

    console.log(response.statusCode);
    console.log(response.httpVersion);
    console.log(response.headers);
    console.log(body);
});
