Reedly.Collections.FeedCategories = Backbone.Collection.extend({

  model: Reedly.Models.FeedCategory,
  url: "/feed_categories",


  findFeed: function(id){
    for (var i = 0; i< this.models.length; i++){
      var category = this.models[i];
      var feed = category.feeds().get(id);
      if (feed){
        return feed
      }
    }
  }

});
