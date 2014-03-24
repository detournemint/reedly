Reedly.Models.Feed = Backbone.Model.extend({
  initialize:function(){
    this.entries();
  },

  urlRoot: "/feeds",

  parse: function (response) {
    if (response["entries"]) {
      this.entries().set(response["entries"]);
      delete response["entries"];
    }
    return response;
  },

  entries: function () {
    if (!this.get('entries')) {
      var feedEntries = new Reedly.Collections.Entries([], { feed: this });
      this.set({
        entries: feedEntries
      });
    }
    return this.get('entries');
  }

});
