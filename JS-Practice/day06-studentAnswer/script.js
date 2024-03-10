const http = require('http');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the HTML page with the form
    fs.readFile(path.join('./index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/start-timer') {
    // Handle form submission to start the timer
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const time = parseInt(formData.get('time'));
      if (!isNaN(time) && time >= 1 && time <= 60) {
        // Start the timer and send updates using SSE
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        });

        countdown(res, time);
      } else {
        // Invalid input
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid time. Please enter a number between 1 and 60.');
      }
    });
  } else {
    // Handle other requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function countdown(res, time) {
  const intervalId = setInterval(() => {
    if (time > 0) {
      res.write(`Countdown: ${time} seconds remaining\n\n`);
      time--;
    } else {
      res.write('Time is up!\n\n');
      clearInterval(intervalId);
      res.end();
    }
  }, 1000);
}
