
// create the model
var User = Backbone.Model.extend({
  initialize: function(){
    // add handler to save any added model
    this.on('add', this.addHandler);
  },

  addHandler: function(){
    // save the model when it's created
    this.save();
  }
});

// create the collection
var Users = Backbone.Collection.extend({
  model: User,
  // set up the local storage handler
  localStorage: new Backbone.LocalStorage('users')
});

// create a new instance of the collection
var users = new Users;

// fetch the collection from local storage
users.fetch();

// log the collection
console.log(users.toJSON());







