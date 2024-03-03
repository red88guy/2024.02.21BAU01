const fs = require('fs');

fs.mkdir('new_directory', (err) => {
    if (err) return console.error(err);
    console.log('Directory created successfully!');
})