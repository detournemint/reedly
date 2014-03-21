Reedly.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(feeds, $rootEl, $sidebar){
    this.feeds = feeds;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },

  routes: {
    "feeds" : "index",
    "feeds/:id" : "show" 
  },

  index: function(){
    var feedIndexView = new Reedly.Views.FeedIndexView({
      collection: this.feeds
    });

    var showView = new Reedly.Views.FeedShowView({
      collection: this.feeds
    });
    this._swapView(showView);
    this.$sidebar.html(feedIndexView.render().$el);
  },

  show: function(id){
    var feed = this.feeds.get(id);
    var showView = new Reedly.Views.FeedShowView({
      model: feed,
      collection: feed.entries()
    });
    feed.fetch();
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})