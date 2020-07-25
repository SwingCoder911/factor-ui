// TODO: break this up: https://paulund.co.uk/create-config-files-for-vuejs

let buildWC = false;
const targetIndex = process.argv.indexOf('--target');
if (targetIndex !== -1) {
  buildWC = process.argv[targetIndex + 1] === 'wc';
}
let config;
if (buildWC) {
  config = require('./components.build');
} else {
  config = require('./library.build');
}
// vue.config.js
module.exports = config;
