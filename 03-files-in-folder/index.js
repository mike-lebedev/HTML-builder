const path = require('path');
const fs = require('fs');

function infoFiles(file) {
  if (file.isFile()) {
    fs.stat(path.resolve(__dirname, 'secret-folder', file.name), function (error, stats) {
      if (error) {
        return console.log(error);
      }
      const name = path.parse(file.name).name;
      const extension = path.extname(file.name).slice(1);
      const size = (stats.size/1024).toFixed(3) + ' Kb';
      console.log(`${name} - ${extension} - ${size}`);
    });
  }
}

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (error, files) {
  if (error) {
    return console.log(error);
  }
  files.forEach((file) => {
    infoFiles(file);
  });
});