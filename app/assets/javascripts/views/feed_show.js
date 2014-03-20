Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.model.get('entries'), "all", this.render);
  },

  events: {
    "click .feed-entry-read" : "destroy",

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    return this
  },


  destroy: function(event){
    this.model.get('entries')._byId[event.currentTarget.id].destroy();
  },

  refresh: function () {
    this.model.get('entries').fetch({
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
  
})