Reedly.Views.FeedIndexView = Backbone.View.extend({
  tagName: 'ul',
  template: JST["feeds/index"],
  initialize: function(){
    this.listenTo(this.collection, "add remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  events: {
    "click .add-feed-button" : "add",
    "click .delete-feed-button" : "destroy"
  },

  render: function(){    
    var rendered = this.template({
      feeds: this.collection
    });
    this.$el.html(rendered);
    return this
  },

  add: function(){
    var newFeed = $('input[name=feed\\[url\\]]').val();
    this.collection.create({
      url: newFeed
    } ,{
      wait: true
    });
    this.collection.fetch();
    $('#your-modal-id').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }, 

  destroy: function(event){
    var feed = this.collection.get(event.currentTarget.id);
    feed.destroy();
  },
  
})