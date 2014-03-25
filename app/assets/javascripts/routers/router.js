Reedly.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(feeds, categories, $rootEl, $sidebar){
    this.feeds = feeds;
    this.categories = categories;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },

  routes: {
    "index" : "index",
    "feeds" : "index",
    "feeds/:id" : "show", 
    "" : "categoryIndex"
  },

  index: function(){
    var categoryIndexView = new Reedly.Views.CategoryIndexView({
      collection: this.categories
    });

    var agView = new Reedly.Views.FeedAgView({
      collection: this.feeds
    });
    this._swapView(agView);
    this.$sidebar.html(categoryIndexView.render().$el);
  },

  categoryIndex: function(){
    var categoryIndexView = new Reedly.Views.CategoryIndexView({
      collection: this.categories
    });

    var catView = new Reedly.Views.CategoryView({
      collection: this.categories
    });
    this._swapView(catView);

    this.$sidebar.html(categoryIndexView.render().$el);
  },

  show: function(id){
    var feed = this.categories.findFeed(id);
    var categoryIndexView = new Reedly.Views.CategoryIndexView({
      collection: this.categories
    });
    var showView = new Reedly.Views.FeedShowView({
      model: feed,
      collection: this.categories
    });
    //feed.fetch();
    this._swapView(showView);
    this.$sidebar.html(categoryIndexView.render().$el);
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