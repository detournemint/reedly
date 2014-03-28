Reedly.Views.CategoryIndexView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feed_categories/index"],


  initialize: function(){
    this.listenTo(this.collection, "all", this.render);
    this.openCategories = [];
  },

  events: {
    "click .add-feed-button" : "addFeed",
    "click .expand-menu" : "expandMenu",
    "mouseover .expand-menu" : "boldText",
    "mouseout .expand-menu" : "unBoldText"
  },

  render: function(){    
    var rendered = this.template({
      feedCategories: this.collection
    });
    this.$el.html(rendered);
    return this
  },

  boldText: function(event){
    $(event.currentTarget).css("font-weight","Bold");
  },

  unBoldText: function(event){
    $(event.currentTarget).css("font-weight","");
  },

  addFeed: function(event){
    event.preventDefault();
    var that = this;
    var newFeed = $('input[name=feed\\[url\\]]').val();
    var categoryId = $('select').val();
    var formData = { url: newFeed, feed_category_id: categoryId }
    $.ajax({
      url: "/feeds",
      type: "POST",
      data: formData,
      success: function () {
        that.collection.fetch();
      }
    });
    $('.add-feed').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }, 

  expandMenu: function(event){
    var target = $(event.currentTarget).parent().parent();
    if(target.next().hasClass('hidden')){
      target.next().removeClass('hidden');
      target.children().first().children().children().addClass('glyphicon-chevron-down')
      target.children().first().children().children().removeClass('glyphicon-chevron-right')
      this.openCategories.push(target.next().data('id'));
    } else {
      target.next().addClass('hidden');
      target.children().first().children().children().removeClass('glyphicon-chevron-down')
      target.children().first().children().children().addClass('glyphicon-chevron-right')
    };
  }

  
})