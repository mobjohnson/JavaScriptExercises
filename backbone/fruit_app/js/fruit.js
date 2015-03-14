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
var Fruit = Backbone.Model.extend({});

// create a collection
var Fruits = Backbone.Collection.extend({
  model: Fruit,
  initialize: function(){
    this.on('add', function(){
      console.log('New Fruit added');
    });

    this.on('remove', function(){
      console.log('Fruit removed');
    });
  }
});

// create a new instance of the collection
var fruitbowl = new Fruits({
  type: 'apple',
  color: 'red'
});

// add another model to the collection
fruitbowl.add({
  type: 'bananna',
  color: 'yellow'  
});

// remove model to the collection
fruitbowl.remove(fruitbowl.models[0]);


