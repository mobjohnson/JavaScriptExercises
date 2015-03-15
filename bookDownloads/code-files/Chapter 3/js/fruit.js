// // create the model
// var Fruit = Backbone.Model.extend({});

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });

// console.log(apple.get('color'));
// console.set('condition', 'bruised');

// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//   description: function() {
//     return this.get('color') + ', ' + this.get('condition') + ' ' + this.get('type');
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });

// console.log(apple.description());

// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//   defaults: {
//     condition: 'perfect'
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });

// console.log(apple.get('condition'));

// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//     initialize: function(){
//     console.log('Fruit model initialized');
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });

// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//   initialize: function(){
//     console.log('Fruit model initialized');
//     this.on('add', function(){
//       console.log('Fruit added - ' + this.get('type'));
//       // This never fired?
//     });
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });

// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//   initialize: function(){
//     console.log('Fruit model initialized');
//     // track changes in the model
//     this.on('change', function(){
//       console.log('Values for the Fruit model have changed');
//     });
//     // track changes in the condition attribute
//     this.on('change:condition', function(){
//       console.log('the condition of this Fruit has changed. Might be getting moldy.');
//     });
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   type: 'apple',
//   color: 'red',
//   condition: 'shiny'
// });


// **************************

// // create the model
// var Fruit = Backbone.Model.extend({
//   // validate the model whenever it changes
//   validate: function(attrs, save){
//     if ( attrs.quantity && !attrs.quantity.isNumber){
//       return 'Quantity must be a number';
//     }
//   }
// });

// // create a new instance of the model
// var apple = new Fruit({
//   name: 'apple'
// });

// // add an error event handler - this fires if it fails validation
// apple.on( 'invalid', function(model, error){
//   console.log(error);
// });

// //  set a malformed quantity to trigger a validation error
// apple.save( 'quantity', 'a bunch');
// // HAD TO CHANGE CODE TO MATCH UNDERSCORE DOCUMENTATION

// **************************

// create a model
// var Fruit = Backbone.Model.extend({});

// // create a collection
// var Fruits = Backbone.Collection.extend({
//   model: Fruit,
//   initialize: function(){
//     this.on('add', function(){
//       console.log('New Fruit added');
//     });

//     this.on('remove', function(){
//       console.log('Fruit removed');
//     });
//   }
// });
// // create a new instance of the collection
// var fruitbowl = new Fruits({
//   type: 'apple',
//   color: 'red'
// });

// // add another model to the collection
// fruitbowl.add({
//   type: 'bananna',
//   color: 'yellow'  
// });

// // remove model from the collection
// fruitbowl.remove(fruitbowl.models[0]);

// **************************
// create a view
// var FruitView = Backbone.View.extend({
//   el: '#my-element',

//   render: function(){
//     this.$el.html('Markup here');

//     return this;
//   }
// });


// var Fruit = Backbone.Model.extend({});

// var apple = new Fruit({
//   name: 'apple'
// });

// var appleView = new FruitView({
//   model: apple
// });


// **************************
// create a view
// var MyView = Backbone.View.extend({
//   el: '#my-element',

//   // initialize: function(){
//   //   this.render();
//   // }

//   // render: function() {
//   //   this.$el.html('Hello World');

//   //   return this;
//   // }

// });

// var myView = new MyView();

// **************************

// create the model for the user
// var User = Backbone.Model.extend({});

// var user = new User({
//   username: 'martin',
//   displayName: 'Martin Johnson',
//   bio: 'A really hoopy frood'
// });

// // create the view
// var UserView = Backbone.View.extend({
//   el: '#user-card',

//   initialize: function(){
//     this.render();
//   },

//   render: function(){
//     // create a link to the user's profile as a wrapper
//     var $card = $('<a href="/users/' + this.model.get('username') + '">');

//     // add the user's name
//     var $name = $('<h1>' + this.model.get('displayName') + '</h1>').appendTo($card);

//     // add the user's bio
//     var $bio = $('<p>' + this.model.get('bio') + '</p>').appendTo($card);

//     // append this element to the DOM
//     this.$el.html($card);

//     return this;
//   }

// });

// // create a new instance of the view, tying it to the user model
// var userView = new UserView({
//   model: user
// });

// **************************

// var myView = new MyView();

// // log the DOM reference of the view's element
// console.log(myView.el);

// **************************

// var MyView = Backbone.View.extend({
//   el: '#my-element',

//   render: function(){
//     this.$el.html('Markup here');

//     return this;
//   }

// });

// **************************

// // create a model for the user
// var User = Backbone.Model.extend({});

// var user = new User({
//   displayName: 'Martin'
// });

// // create the view for the welcome message
// var WelcomeMessageView = Backbone.View.extend({
//   el: 'header .welcome-message',

//   initialize: function(){
//     // bind any changes in this view's model to its render function
//     // in this case you only need to track changes in the
//     // displayNme attribute
//     this.model.on('change:displayName', this.render, this);

//     // also call the render function when the view is initiailzed
//     this.render();
//   },

//   // the render function displays data the model data on the page
//   render: function(){
//     var displayName = this.model.get('displayName');

//     this.$el.html('Welcome ' + displayName);

//     return this;
//   }

// });

// // create a new instance of the welcome message view
// var welcomeMessageView = new WelcomeMessageView({
//   model: user
// })

// **************************
var MyView = Backbone.View.extend({
  tagName: 'li'
});

var myView = new MyView;






