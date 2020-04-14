const globby = require('globby');
const { resolve } = require('path');
const fs = require('fs-extra');
const { createMdxAstCompiler } = require('@mdx-js/mdx');
const stringify = require('remark-stringify');
const removeMDXNode = require('./removeMDXNode');
const mdxStringfy = require('./mdxStringfy');

const compiler = createMdxAstCompiler({
  mdPlugins: [
    stringify,
    mdxStringfy
  ]
});

const removeIsNotRoute = node => {
  const children = (node.children || [])
    .map(t => {
      if (/route:\s*?\/(components)/.test(t.value || '')) {
        return {
          ...t,
          value: t.value.replace(RegExp.$1, 'preview')
        };
      }
      return t;
    })
    .filter(t => t);

  if (!children.length) return null;

  return {
    ...node,
    children
  };
};

(async () => {
  const paths = await globby('./**/*.mdx');
  paths.forEach(async path => {
    const abPath = resolve(__dirname, path);

    // 读取原始内容
    const content = await fs.readFile(abPath);

    // 转译成ast
    const ast = compiler.parse(content);
    const newAst = removeMDXNode(ast, {
      heading: removeIsNotRoute,
      paragraph: () => null,
    });
    // console.log(newAst)
    const newContent = compiler.stringify(newAst);

    const targetPath = abPath.replace(/components/, 'preview');
    await fs.ensureFile(targetPath);
    return fs.writeFile(targetPath, newContent);
  });
})();
