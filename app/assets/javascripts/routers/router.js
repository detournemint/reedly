Reedly.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(feeds, $rootEl){
    this.feeds = feeds;
    this.$rootEl = $rootEl;
  }

  routes: {
    "feeds/" : "index"
  }

  index: function(){
    var feedIndexView = new Reedly.Views.FeedIndexView({
      collection: this.feeds
    });

    _swapView(feedIndexView);
  }

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})