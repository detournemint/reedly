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

    var categoryIndexView = new Reedly.Views.CategoryIndexView({
      collection: categories
    });
    $sidebar.html(categoryIndexView.render().$el);

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
