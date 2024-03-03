// hello-server.js

// Import the HTTP module
const http = require('http');
const fs = require('fs').promises;

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server

const requestListener = function (req,res) {
    fs.readFile(__dirname + "/day06-activityDom.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
}

const server = http.createServer(requestListener);

// Listen on the hostname and port we specified
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})



