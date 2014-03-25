Reedly.Views.CategoryView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/categories"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .remove-category-feed" : "destroy"
  },

  render: function(){    
    var rendered = this.template({
      categories: this.collection
    });
    this.$el.html(rendered);
    return this
  },


  destroy: function(event){
    var that = this;
    var feedId = $(event.currentTarget).data("feed-id")
    $.ajax({
      url: "/feeds/" + feedId,
      type: "delete",
      success: function () {
        that.collection.fetch();
      }
    });
  },

 
  
})