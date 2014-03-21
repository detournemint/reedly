Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .feed-entry-read" : "destroy",
    "mouseenter .entry" : "selected",
    "mouseout .entry" : "read"

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

  read: function(event){
    $(event.currentTarget).addClass("read");
  },

  leave: function(){
    this.deleteReadPosts();
  },

  deleteReadPosts: function(){
    debugger
    console.log(this.model.get('entries')._byId[event.currentTarget.id])
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