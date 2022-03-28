const path = require('path');
const express = require('express');
const sass = require('node-sass-middleware');

const app = express();
const port = 5000;
const title = "Application"

app.set('view engine', 'pug');

app.use(sass({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'expanded',
  outFile: 'style.css',
  includePaths: ['sass'],
  indentedSyntax: true,
  debug: false
}));

/* ------------- MIDDLEWARE ------------- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---------------- HOME ---------------- */
app.get('/', (req, res) => res.render('home/home', {
  title: `Developing and designing for the web | ${title}`,
  name: 'Anthony',
  motto: 'I like to design things for the web.',
  specialization: 'Development | Design'
}));

/* ---------------- BLOG ---------------- */
app.get('/blog', (req, res) => res.render('blog/blog',
  {title: `A blog about web development and design | ${title}`}));

app.get('/blog/:category', (req, res) => {
  let category = getCategory(req);
  return res.render('blog/category', {
    title: `${category} - [Category brief] | ${title}`,
    category,
    slug: req.params.category })});

app.get('/blog/:category/:article', (req, res) => {
  let category = getCategory(req);
  return res.render('blog/article', {
    title: `[Article brief] | ${title}`,
    category,
    slug: req.params.category
  })});

/* ---------------- WORK ---------------- */
app.get('/work', (req, res) => res.render('work/work',
  {title: `My previous work | ${title}`}));

/* --------------- ABOUT ---------------- */
app.get('/about', (req, res) => res.render('about',
  {title: `About the app | ${title}`}));

/* -------------- FALLBACK -------------- */
app.use('*', (req, res) =>  res.render('error/404', 
    {title: `Page not found - 404 | ${title}`}));


app.listen(port, () => 
  console.log(`[Server] Listening on http://localhost:${port}/`));

function getCategory(req) {
  return req.params.category[0].toUpperCase() + req.params.category.substring(1);
}
