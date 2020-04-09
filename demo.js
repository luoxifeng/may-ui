const mdx = require('@mdx-js/mdx');
const { toJSX } = require('@mdx-js/mdx/mdx-hast-to-jsx');
const stringify = require('remark-stringify')

const { createMdxAstCompiler } = mdx;

async function hh() {
  const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`);

  console.log(result);
}

const d = createMdxAstCompiler({
  mdPlugins: [
    stringify
  ]
});
var g = null;



g = d.parse(`

222

---
 name:    Button
 route:    /components/button
---

import { Playground } from 'docz';
import Button from 'may-ui/button';
import Phone from 'site/Phone';

# Button
按钮使用文档

## Basic usage

<Playground>
  <Button type='primary'/>
  <HH />
</Playground>


## 高级用法

<Phone url='/preview/button'/>

`);

const ifFun = fun => typeof fun === 'function';
const isArr = arr => Array.isArray(arr);

const loop = (nodeList = [], opts) => {
  const list = [];

  nodeList.forEach(node => {
    const o = opts[node.type];
    let temp = {};

    if (ifFun(o)) {
      if (node.value) {
        Object.assign({}, node, { value: o(node.value, node) });
        return list.push({
          ...node
        });
      }

      if (node.children) {
        const temp = Object.assign({}, node, loop(node.children, opts));
        return list.push(temp);
      }
    }

    list.push(node);

    // if (['jsx', 'import', 'export'].includes(node.type)) {
    //   rootChildren.push(node);
    // } else if (node.type === 'paragraph') {
    //   node.children = loop(node.children);
    //   // node.type

    // } else {

    // }
  });

  return list;
};

// const isValidNode = node => {
//   if (!node) return;
//   if (node)
//   node

// }
const identity = t => t;
const defaultOpts = {
  jsx: identity,
  import: identity,
  export: identity,
  paragraph: identity,
  heading: identity
};

const removeMDNode = (ast = {}, options = defaultOpts) => {
  const children = [];
  const opts = {
    ...defaultOpts,
    ...options
  };

  if (Array.isArray(ast.children)) {
    ast.children.forEach(node => {
      const transform = opts[node.type] || (() => null);

      if (transform === true) {
        children.push(node);
        return;
      }

      if (!ifFun(transform)) {
        throw new Error(`options.${node.type} must be a function or boolean`);
      }

      const newNode = transform(node);
      if (newNode) {
        children.push(node);
      }
    });
  }

  return {
    ...ast,
    children
  };
};

const removeIsNotRoute = node => {
  const children = (node.children || [])
    .map(t => {
      if (/route:\s*?\/(components)/.test(t.value || '')) {
        return {
          ...t,
          value: t.value.replace(RegExp.$1, 'preview')
        };
      }
      return null;
    })
    .filter(t => t);

  if (!children.length) return null;

  return {
    ...node,
    children
  };
};

// console.log('++++++++++++');
// console.log(g.children[2]);
// console.log('++++++++++++');
// console.log(g.children[3]);
console.log('++++++++---------++++');

var p;
console.log(
  p = removeMDNode(g, {
    heading: removeIsNotRoute,
    paragraph: removeIsNotRoute,
    jsx: (node) => {
      return /<Phone\s*?url=/.test(node.value) ? null : node;
    }
  })
  // .children[0]
);

console.log(toJSX(p));
d.Compiler.prototype.visitors['import'] = function (none) {
  return none.value;
};
d.Compiler.prototype.visitors['jsx'] = function (none) {
  return none.value;
};

d.Compiler.prototype.visitors['export'] = function (none) {
  return none.value;
};


console.log(d.Compiler.prototype.visitors);

console.log(d.stringify(p));

// hh();
