Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
    this.readEntries = []
  },

  events: {
    "click .keep-unread" : "unread",
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
    if (!_.contains(this.readEntries, event.currentTarget.id)){
      this.readEntries.push(event.currentTarget.id);
    }
  },

  // unread: function(event){
  //   this.readEntries = _.without(this.readEntries, $(event.currentTarget).data("entry-id"));
  // },

  leave: function(){
    this.deleteReadPosts();
  },

  deleteReadPosts: function(){
    var that = this;
    this.readEntries.forEach(function(id){
      that.model.get('entries')._byId[id].destroy({
        success: function(){
         that.model.collection.trigger("reset");
        }
      });
    });
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