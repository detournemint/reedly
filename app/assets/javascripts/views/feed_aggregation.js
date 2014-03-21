Reedly.Views.FeedAgView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/agg"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "mouseover .feed-title" : "delete-button",
    "click .delete-feed" : "destroy"

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    return this
  },


  destroy: function(event){
    this.collection.get($(event.currentTarget).data("feed-id")).destroy();  
  },

  refresh: function () {
    this.model.get('entries').fetch({
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
  
})