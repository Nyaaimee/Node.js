var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('example.txt');

// Set the encoding to be UTF8
readerStream.setEncoding('utf-8'); // You can change the encoding using any for format mentioned

// Handle stream events --> data, end, finish and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end' , function() {
    console.log(data);
});

readerStream.on('finish', (data) => {
    console.log("finished reading stream data");
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});