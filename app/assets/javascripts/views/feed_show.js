Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.model.get('entries'), "all", this.render);
  },

  events: {
    "click .feed-entry-read" : "destroy",
    "mouseenter .entry" : "selected"

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    return this
  },

  selected: function(event){
    $(event.currentTarget).addClass("selected");
    $(event.currentTarget).siblings().removeClass("selected");

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