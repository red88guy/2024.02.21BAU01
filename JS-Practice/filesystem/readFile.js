const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log("File content:", data);
})