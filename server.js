const path = require('path');
const express = require('express');
const sass = require('node-sass-middleware');

const app = express();
const port = 5000;

app.set('view engine', 'pug');

app.use(sass({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'expanded',
  outFile: 'style.css',
  includePaths: ['sass'],
  indentedSyntax: true,
  debug: true
}));

app.use(express.static('public'));

app.use('/', (req, res) => res.render('home', 
  {title: 'Application', message: 'Lorem Ipsum'}));

app.listen(port, () => 
  console.log(`[Server] Listening on http://localhost:${port}/`));