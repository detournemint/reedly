Reedly.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(feeds, categories, $rootEl, $sidebar){
    this.feeds = feeds;
    this.categories = categories;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },

  routes: {
    "" : "index",
    "feeds" : "index",
    "feeds/:id" : "show", 
    "categories" : "categoryIndex"
  },

  index: function(){
    var feedIndexView = new Reedly.Views.FeedIndexView({
      collection: this.feeds
    });

    var agView = new Reedly.Views.FeedAgView({
      collection: this.feeds
    });
    this._swapView(agView);
    this.$sidebar.html(feedIndexView.render().$el);
  },

  categoryIndex: function(){
    var categoryIndexView = new Reedly.Views.CategoryIndexView({
      collection: this.categories
    });

    this.$sidebar.html(categoryIndexView.render().$el);
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
    this._currentView
    if (this._currentView) {
      if (this._currentView.leave) {
        this._currentView.leave();
      }
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})