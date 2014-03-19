Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    
  },

  events: {
  },

  render: function(){    
    var rendered = this.template({
      feed: this.model,
      entries: this.model.get('entries')
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
  }
  
})