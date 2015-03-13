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

// create the model
var Fruit = Backbone.Model.extend({
  defaults: {
    condition: 'perfect'
  }
});

// create a new instance of the model
var apple = new Fruit({
  type: 'apple',
  color: 'red',
  condition: 'shiny'
});

console.log(apple.get('condition'));



