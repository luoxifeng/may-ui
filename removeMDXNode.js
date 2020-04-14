
const identity = t => t;
const defaultOpts = {
  jsx: identity,
  import: identity,
  export: identity,
  paragraph: identity,
  heading: identity
};
const ifFun = fun => typeof fun === 'function';

module.exports = (ast = {}, options = defaultOpts) => {
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
}
