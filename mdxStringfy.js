const isRoute = node => {
  return node.children.find(t => /route:\s+/.test(t.value));
};

module.exports = function() {
  const originHeading = this.Compiler.prototype.visitors.heading;

  this.Compiler.prototype.visitors['heading'] = function(node) {
    if (isRoute(node)) {
      const text = node.children.map(t => t.value).join('');
      return `---\n${text}\n---`;
    }
    return originHeading.call(this, node);
  };

  this.Compiler.prototype.visitors['import'] = function(node) {
    return node.value;
  };

  this.Compiler.prototype.visitors['jsx'] = function(node) {
    return node.value;
  };

  this.Compiler.prototype.visitors['export'] = function(node) {
    return node.value;
  };
};
