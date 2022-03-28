const path = require('path');

module.exports = {
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'expanded',
  outFile: 'style.css',
  includePaths: ['sass'],
  indentedSyntax: true,
  debug: false
};