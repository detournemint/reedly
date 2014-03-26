Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(){
    this.listenTo(this.model, "all", this.render);
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .keep-unread" : "unread",
    "mouseenter .entry" : "selected",
    "mouseout .entry" : "read",
    "click .delete-entry" : "destroy"

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    $($('.category-feeds-menu')[this.model.attributes.feed_category_id - 1]).removeClass('hidden')
    return this
  },

  selected: function(event){
    $(event.currentTarget).addClass("selected");
    $(event.currentTarget).siblings().removeClass("selected");
  },


  // read: function(event){
  //   $(event.currentTarget).addClass("read");
  //   if (!_.contains(this.readEntries, $(event.currentTarget).data('id'))){
  //     this.readEntries.push(event.currentTarget.id);
  //   }
  // },

  // unread: function(event){
  //   this.readEntries = _.without(this.readEntries, $(event.currentTarget).data("entry-id"));
  // },

  // leave: function(){
  //   this.deleteReadPosts();
  // },

  // deleteReadPosts: function(){
  //   var that = this;
  //   this.readEntries.forEach(function(id){
  //     that.model.get('entries')._byId[id].destroy({
  //       success: function(){
  //        FeedCategories.trigger("reset");
  //       }
  //     });
  //   });
  // },


  destroy: function(event){ 
    var that = this;
    this.model.get('entries')._byId[$(event.currentTarget).data('id')].destroy({
      success: function(){  
        that.collection.trigger("reset")
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