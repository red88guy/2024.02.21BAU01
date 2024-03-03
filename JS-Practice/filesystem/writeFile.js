const fs = require('fs');

const content = 'Hello, everyone!';

fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('Data written to file successfully!');
})