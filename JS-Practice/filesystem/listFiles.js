const fs = require('fs');

const directoryPath = 'new_directory';

fs.readdir(directoryPath, (err, files) => {
    if (err) return console.error(err);
    console.log('Files in the directory:', files);
})