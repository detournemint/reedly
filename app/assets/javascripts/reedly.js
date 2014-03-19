window.Reedly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content')
    var feeds = new Reedly.Collections.Feeds();
    feeds.fetch({
      success: function(){
        new Reedly.Routers.FeedRouter(feeds, $rootEl);
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
