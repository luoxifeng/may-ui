const globby = require('globby');
const { resolve } = require('path');
const fs = require('fs-extra');
const mdx = require('@mdx-js/mdx');
const removeMDXNode = require('./removeMDXNode');

(async () => {
  const paths = await globby('./**/*.mdx');
  paths.forEach(async path => {
    const abPath = resolve(__dirname, path);

    // 读取原始内容
    const content = await fs.readFile(abPath);

    // 转译成ast
    const ast = mdx(content);
    const newAst = removeMDXNode(ast);
    console.log(newAst);

    const targetPath = abPath.replace(/components/, '.preview');
    await fs.ensureFile(targetPath);
    return fs.writeFile(targetPath, content);
  });
})();
