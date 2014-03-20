window.Reedly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var feeds = new Reedly.Collections.Feeds();

    var feedsIndexView = new Reedly.Views.FeedIndexView({
      collection: feeds
    });
    $sidebar.html(feedsIndexView.render().$el);

    feeds.fetch({
      success: function(){
        new Reedly.Routers.FeedRouter(feeds, $rootEl, $sidebar);
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
