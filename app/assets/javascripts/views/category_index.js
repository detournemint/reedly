Reedly.Views.CategoryIndexView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/index"],

  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
  },

  events: {
    "click .add-feed-button" : "add",
  },

  render: function(){    
    var rendered = this.template({
      feedCategories: this.collection
    });
    this.$el.html(rendered);
    return this
  },

  add: function(event){
    event.preventDefault();
    debugger
    var formData = $(this).serialize();
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

  
})