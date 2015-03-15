var Band = {};

// create the model
Band.Member = Backbone.Model.extend({});

// create teh collection
Band.Members = Backbone.Collection.extend({
  model: Band.Member
})

// populate the collection
var band = new Band.Members([
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'}
]);

// create a view
Band.Member.View = Backbone.View.extend({
  tagName: 'li',

  render: function(){
    // add the name to the list item
    this.$el.text(this.model.get('name'));
  
    return this;
  }
});