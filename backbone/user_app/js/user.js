// create the model
var User = Backbone.Model.extend({
  // url of the REST API
  url: './path-to-api/'

});

// create a new user
var user = new User({
  displayName: 'Martin Johnson',
  username: 'mobjohnson',
  bio: 'A Hoopy Frood'
});

// fetch the model from the server
user.fetch({
  sucess: function(){
    console.log('User data fetched from the server');
  },

  error: function(){
    console.log('Unable to fetch user data');
  }
});

// check for changes every 5 seconds
setInterval(function(){
  myModel.fetch();
}, 5000);

// save it
user.save({},{
  // success callback
  success: function(){
    console.log('User saved auomatically');
  },

  // error callback
  error: function(data, err){
    // pull the status code and text of the error
    console.log('Error: ' + err.status + ' = ' + err.statusText)
  }
});








