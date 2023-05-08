const path = require('path');
const fs = require('fs');

const cssFile = path.join(__dirname, 'styles');
const bundleFile = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(cssFile, (error, files) => {
  if (error) {
    console.error(error);
    return;
  }

  const cssAllFiles = files.filter(file => path.extname(file) === '.css');

  fs.writeFile(bundleFile, '', error => {
    if (error) {
      console.error(error);
      return;
    }

    cssAllFiles.forEach(file => {
      fs.appendFile(bundleFile, fs.readFileSync(path.join(cssFile, file)), error => {
        if (error) {
          console.error(error);
        }
      });
    });
  });
});