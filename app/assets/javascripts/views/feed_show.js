Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
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
    var that = this;
    this.model.get('entries')._byId[event.currentTarget.id].destroy({
      success: function(){
        that.model.collection.trigger("reset");
      }
    });
    
  },

  refresh: function () {
    this.model.get('entries').fetch({
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
  
})