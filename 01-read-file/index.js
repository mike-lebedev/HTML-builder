const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'));

stream.on('data', (data) => {
  process.stdout.write(data);
});

stream.on('error', (error) => {
  console.error(error);
});