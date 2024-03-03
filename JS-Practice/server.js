// hello-server.js

// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header with a 200 to signify its ok
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response of "Hello, World!" in the body
    res.end('Hello, World!\n');
})

// Listen on the hostname and port we specified
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})