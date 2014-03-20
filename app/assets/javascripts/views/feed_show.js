Reedly.Views.FeedShowView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/show"],

  initialize: function(attribute){
    // this.listenTo(this.model.get('entries'), "add", this.render);
  },

  events: {

  },

  render: function(){    
    var rendered = this.template({
      feed: this.model
    });
    this.$el.html(rendered);
    return this
  },

  refresh: function () {
    this.model.get('entries').fetch({
      success: function(){
        console.log("woo")
      },
      error: function () {
        console.log('Could not refresh view for some reason');
      }
    });
  }
  
})