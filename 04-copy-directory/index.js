const path = require('path');
const fs = require('fs/promises');

async function copyFiles() {
  const directory = path.join(__dirname, 'files');
  const dirCopy = path.join(__dirname, 'files-copy');

  try {
    await fs.rm(dirCopy, { recursive: true, force: true });
    await fs.mkdir(dirCopy, { recursive: true });
    const data = await fs.readdir(directory, { withFileTypes: true });
    for (const item of data) {
      if (item.isFile()) {
        const pathItem = path.join(directory, item.name);
        const pathItemDes = path.join(dirCopy, item.name);
        await fs.copyFile(pathItem, pathItemDes);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

copyFiles();
