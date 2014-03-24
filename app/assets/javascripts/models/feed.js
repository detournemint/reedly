Reedly.Models.Feed = Backbone.Model.extend({
  initialize:function(){
  },

  urlRoot: "/feeds",

  parse: function (response) {
    debugger
    if (response["categories"]) {
      this.set(response["categories"]);
      delete response["categories"];
    }
    if (response["UncategorizedFeeds"]) {
      this.set(response["UncategorizedFeeds"]);
      delete response["UncategorizedFeeds"];
    }
    return response;
  },

  // entries: function () {
  //   if (!this.get('entries')) {
  //     var feedEntries = new Reedly.Collections.Entries([], { feed: this });
  //     this.set({
  //       entries: feedEntries
  //     });
  //   }
  //   return this.get('entries');
  // },


});
