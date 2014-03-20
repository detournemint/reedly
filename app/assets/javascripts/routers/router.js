Reedly.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(feeds, $rootEl, $sidebar){
    this.feeds = feeds;
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
  },

  routes: {
    "" : "index",
    "feeds/:id" : "show" 
  },

  index: function(){
    var feedIndexView = new Reedly.Views.FeedIndexView({
      collection: this.feeds
    });

    this.$sidebar.html(feedIndexView.render().$el);
  },

  show: function(id){
    var showView = new Reedly.Views.FeedShowView({
      model: this.feeds.get(id)
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})