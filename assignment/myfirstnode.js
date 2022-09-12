http = require("http");
http.createServer(function (request, response){
    // Send the http header
    // HTTP status: 200 : ok
    // content type: text/plain
    response.writeHead(200, {'content-type': 'text/plain'});
    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081); // This is the port on which your server instance will be listening

// console will print the message
console.log('Server running at http://127.0.0.1:8081');
