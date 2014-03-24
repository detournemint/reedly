Reedly.Views.CategoryIndexView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/index"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .add-feed-button" : "addFeed",
    "click .add-category-button" : "addCategory"
  },

  render: function(){    
    var rendered = this.template({
      feedCategories: this.collection
    });
    this.$el.html(rendered);
    return this
  },

  addFeed: function(event){
    event.preventDefault();
    debugger
    var newFeed = $('input[name=feed\\[url\\]]').val();
    var categoryId = $('input[name=category]').val();
    var formData = { url: newFeed, feed_category_id: categoryId }
    $.ajax({
      url: "/feeds",
      type: "POST",
      data: formData,
      success: function () {
        console.log("Your callback here!");
      }
    }); // get it out of the form explicitly
    $('.add-feed').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.collection.fetch();
  }, 

  addCategory: function(){
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