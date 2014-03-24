Reedly.Views.CategoryView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/categories"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .delete-category" : "destroy"

  },

  render: function(){    
    var rendered = this.template({
      categories: this.collection
    });
    this.$el.html(rendered);
    return this
  },


  destroy: function(event){
    this.collection.get($(event.currentTarget).data("category-id")).destroy();  
  },

 
  
})