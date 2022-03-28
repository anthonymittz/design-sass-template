const title = "Application";

exports.homepage = (req, res) => 
  res.render('home/home', {
    title: `Developing and designing for the web | ${title}`,
    name: 'Anthony',
    motto: 'I like to design things for the web.',
    specialization: 'Development | Design' });

exports.blog = (req, res) =>
  res.render('blog/blog', {
    title: `A blog about web development and design | ${title}`})

exports.blogCategory = (req, res) => {
  let category = getParam(req, 'category');
  return res.render('blog/category', {
    title: `${category} - [Category brief] | ${title}`,
    category,
    slug: req.params.category })};

exports.blogArticle = (req, res) => {
  let category = getParam(req, 'category');
  return res.render('blog/article', {
    title: `[Article brief] | ${title}`,
    category,
    slug: req.params.category })};

exports.portfolio = (req, res) => 
  res.render('portfolio/portfolio', {
    title: `My previous work | ${title}` });

exports.portfolioWork = (req, res) => {
  let work = getParam(req, 'work');
  return res.render('portfolio/work', {
    title: `[Work brief] | ${title}`,
    work })};

exports.about = (req, res) => 
  res.render('about', {
    title: `About the app | ${title}`});

exports.fallback = (req, res) => 
  res.render('error/404', {
    title: `Page not found - 404 | ${title}`});

function getParam(req, name) {
  let param = req.params[name];
  return param 
    ? param[0].toUpperCase() + param.substring(1)
    : 'Undefined parameter';
};