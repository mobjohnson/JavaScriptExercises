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

// create a view for each band member
Band.Member.View = Backbone.View.extend({
  tagName: 'li',

  render: function(){
    // add the name to the list item
    this.$el.text(this.model.get('name'));

    // append the new list item to th elist in the parent view
    this.parentView.$el.append(this.$el);
  
    return this;
  }
});

console.log('stop');

// create a view for the band
Band.Members.View = Backbone.View.extend({
  el: '#band-wrapper',

  initialize: function(){
    // share the 'this' context with the render function
    _.bindAll(this, 'render');

    // add various events for the collection
    this.collection.on('change', this.render);
    this.collection.on('add', this.render);
    this.collection.on('remove', this.render);

    // render the initial state
    this.render();
  },

  render: function(){
    // empty out the view element
    this.$el.empty();

    // cache this before entering the loop
    var thisView = this;

    // loop through all of the items in the collection,
    // creating a view for each
    this.collection.each(function(bandMember){
      var bandMemberView = new Band.Member.View({
        model: bandMember
      });

      // save a reference to this view within the child view
      bandMemberView.parentView = thisView;

      // render it
      bandMemberView.render();
    
    });

    return this;
  }
});



// create a new instanc of the band view
var bandView = new Band.Members.View({
  collection: band
});






