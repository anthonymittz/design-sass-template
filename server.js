const express = require('express');
const path = require('path');
const sass = require('node-sass-middleware');
const send = require('./handlers');
const sassConfig = require('./sass.config');

const app = express();
const port = 5000;

app.set('view engine', 'pug');

app.use(sass(sassConfig));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', send.homepage);
app.get('/about', send.about);

app.get('/blog', send.blog);
app.get('/blog/:category', send.blogCategory);
app.get('/blog/:category/:article', send.blogArticle);

app.get('/portfolio', send.portfolio);
app.get('/portfolio/:work', send.portfolioWork);

app.use('*', send.fallback);

app.listen(port, () => 
  console.log(`[Server] Listening on http://localhost:${port}/`));
