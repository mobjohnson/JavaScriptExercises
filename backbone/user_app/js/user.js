
// create the model
var User = Backbone.Model.extend({
  initialize: function(){
    // add handlers to save any changes to the model
    this.on('add', this.addHandler);
    this.on('change', this.changeHandler);    
    this.on('remove', this.removeHandler);
  },

  addHandler: function(){
    // save the model when it's created
    this.save();
  },

  changeHandler: function(){
    // only save what has been changed
    this.save(this.changed);
  },

  removeHandler: function(){
    // destroy the model from the server
    this.destroy();
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







