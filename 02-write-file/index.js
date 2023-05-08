const path = require('path');
const fs = require('fs');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout, exit } = require('process');
stdout.write('Жду ввода текста:');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    endFunc();
  } else {
    writeStream.write(data);
  }
});

process.on('SIGINT', () => {
  endFunc();
});

function endFunc() {
  stdout.write('Прощаюсь с вами!');
  writeStream.end(() => {
    exit();
  });
}