Reedly.Models.FeedCategory = Backbone.Model.extend({
  urlRoot:"/feed_categories",

  initialize:function(){
    this.feeds();
  },


  parse: function (response) {
    if (response["feeds"]) {
      this.feeds().set(response["feeds"], { parse: true });
      delete response["feeds"];
    }
    
    return response;
  },

  feeds: function () {
    if (!this.get('feeds')) {
      var categoryFeeds = new Reedly.Collections.Feeds([], { feed: this });
      this.set({
        feeds: categoryFeeds
      });
    }
    return this.get('feeds');
  }
});