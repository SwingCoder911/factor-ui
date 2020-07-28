// fileTransformer.js
// Extremely important to mock out our SVG sprites for jest!!
module.exports = {
  process(src, filename, config, options) {
    return `
    exports.default = {
      id: 'id',
      content: 'content',
      stringify: () => 'stringify'
    }`;
  },
};
