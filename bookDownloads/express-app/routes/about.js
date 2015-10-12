
/*
 * GET about listing.
 */

exports.about = function(req, res, next){
  res.render('main', {
    title: 'About',
    subtitle: 'Everthing you want to know about this app',
    description: 'This app uses Node and the Express goodness'
  });
};