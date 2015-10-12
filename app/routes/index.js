var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', {
    title: 'Express',
    description: 'This is my first Express app, so go easy on me'
  });
});

/* GET abouts listing. */
router.get('/about', function(req, res, next) {
  res.render('main', {
    title: 'About',
    subtitle: 'Everthing you want to know about this app',
    description: 'This app uses Node and the Express goodness'
  });
});

module.exports = router;
