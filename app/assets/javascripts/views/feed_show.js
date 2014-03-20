Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
  },

  events: {
    "click .feed-entry-read" : "destroy"

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    return this
  },

  destroy: function(event){
    console.log(event.currentTarget)
    console.log(this.model.get(event.currentTarget.id))
    debugger
    var feed = this.model.get(event.currentTarget.id);
    feed.destroy();
  },

  refresh: function () {
    this.model.get('entries').fetch({
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
  
})