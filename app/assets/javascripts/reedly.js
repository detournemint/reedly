window.Reedly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var feeds = new Reedly.Collections.Feeds();
    var categories = new Reedly.Collections.FeedCategories();

    var feedsIndexView = new Reedly.Views.FeedIndexView({
      collection: feeds
    });
    $sidebar.html(feedsIndexView.render().$el);

    feeds.fetch();
    categories.fetch({
      success: function(){
        new Reedly.Routers.FeedRouter(feeds, categories, $rootEl, $sidebar);
        Backbone.history.start();
        
      },
      error: function(){
        console.log("fetch failed");
      }
    });

  }
};

$(document).ready(function(){
  Reedly.initialize();
});
