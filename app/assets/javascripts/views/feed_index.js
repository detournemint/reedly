Reedly.Views.FeedIndexView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/index"],
  initialize: function(){
    this.listenTo(this.collection, "add remove", this.render)
  },

  events: {
    "click .add-feed-button" : "add"
  },

  render: function(){    
    var rendered = this.template({
      feeds: this.collection
    });
    this.$el.html(rendered);
    return this
  },

  add: function(){
    var newFeed = $('input[name=feed\\[url\\]]').val();
    this.collection.create({
      url: newFeed
    } ,{
      wait: true
    });
    this.collection.fetch();
  }
  
})