// // create the model
// var User = Backbone.Model.extend({
//   // define the local store with a unique nameu
//   localStorage: new Backbone.LocalStorage('user-store')

// });

// // create a new user
// var user = new User({
//   displayName: 'Martin Johnson',
//   username: 'mobjohnson',
//   bio: 'A Hoopy Frood'
// });

// // // fetch the model from the server
// // user.fetch({
// //   sucess: function(){
// //     console.log('User data fetched from the server');
// //   },

// //   error: function(){
// //     console.log('Unable to fetch user data');
// //   }
// // });

// // check for changes every 5 seconds
// // setInterval(function(){
// //   myModel.fetch();
// // }, 5000);

// // save it
// user.save({},{
//   // success callback
//   success: function(){
//     console.log('User saved auomatically');
//   },

//   // error callback
//   error: function(data, err){
//     // pull the status code and text of the error
//     console.log('Error: ' + err.status + ' = ' + err.statusText)
//   }
// });

// // // fix problems with certail REST request types
// // Backbone.emulateHTTP = true;

// // // fix problems wih JSON encoding
// // Backbone.emulateJSON = true;

// // create the collection
// var Users = Backbone.Collection.extend({
//   // define the local store with a unique name
//   localStorage: new Backbone.LocalStorage('collection-store')
// });


// create the model
var User = Backbone.Model.extend({});

// create the collection
var Users = Backbone.Collection.extend({
  model: User,

  // set up the local storage handler
  localStorage: new Backbone.LocalStorage('users')
});

// create a new instance of the collection
var users = new Users;








