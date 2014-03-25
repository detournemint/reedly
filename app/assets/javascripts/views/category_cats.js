Reedly.Views.CategoryView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/categories"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .remove-category-feed" : "destroy",
    "click .add-category-button" : "addCategory"
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

  addCategory: function(event){
    event.preventDefault();
    var newCategory = $('input[name=category\\[title\\]]').val();
    this.collection.create({
      title: newCategory
    } ,{
      wait: true
    });
    $('.add-category').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.collection.fetch();

  },

 
  
})