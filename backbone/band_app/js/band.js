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

console.log('stop');

// create a view for the band
Band.Members.View = Backbone.View.extend({
  el: '#band-wrapper',

  initialize: function(){
    this.render();
  },

  render: function(){
    // loop through all of the items in the collection,
    // creating a view for each
    this.collection.each(function(bandMember){
      var bandMemeberView = new Band.Member.View({
        model: bandMember
      });
    });

    return this;
  }
});



// create a new instanc of the band view
var bandView = new Band.Members.View({
  collection: band
});






