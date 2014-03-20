Reedly.Collections.Entries = Backbone.Collection.extend({
   model: Reedly.Models.Entry,

  initialize: function (model, options) {
    this.feed = options.feed;
  },

  url: function () {
    return '/feeds/' + this.feed.id + '/entries';
  }
 
})