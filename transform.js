const globby = require('globby');
const { resolve } = require('path');
const fs = require('fs-extra');

(async () => {
  const paths = await globby('./**/*.mdx');
  paths.forEach(async path => {
    const abPath = resolve(__dirname, path);
    const content = await fs.readFile(abPath);
    const targetPath = abPath.replace(/components/, '.preview');
    await fs.ensureFile(targetPath);
    return fs.writeFile(targetPath, content);
  });
})();
