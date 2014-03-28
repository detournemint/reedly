Backbone.Flash = {}
_.extend(Backbone.Flash, {
  initialize : function(config) {
    this.config = _.extend({ 
      el : 'body',
      template: _.template('<div class="alert alert-<%= type %> alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><%= message %></div>'),
      stayDuration: 15000
    }, config);
    Backbone.on('flash', this.handleFlash, this);
  },
  handleFlash : function(flashParams, opts) {  
    var tempConfig = _.extend({}, this.config, opts),
        model = new this.flashModel(flashParams, { config: tempConfig })
        view = new this.flashView({ model: model, config: tempConfig });
    $(tempConfig.el).append(view.render().el);
  },
  flashModel : Backbone.Model.extend({
    initialize: function(attr, options) {    
      this.config = options.config

      if(!this.get('persist'))
        this.setTimer();
    },  
    defaults: {
      persist: false,
      type: 'success',
      message: '',   
    },
    setTimer: function() {
      var me = this;
      this.set('timeoutHandle', window.setTimeout(function() { me.destroy() }, this.config.stayDuration));
    },
    clearTimeout: function() {
      if(this.get('timeoutHandle'))
        window.clearTimeout(this.get('timeoutHandle'));
    }
  }),
  flashView : Backbone.View.extend({
    tagName: 'div',
    className: 'flash',
    initialize: function(options) {      
      this.config = options.config;
      this.listenTo(this.model, 'destroy', this.remove, this);
    },
    events: {
     'click button': 'close'
    },
    render: function() {            
      this.$el.append(this.config.template(this.model.attributes));
      return this;
    },
    close: function() {
      this.model.clearTimeout();
      this.model.destroy();   
    },
    remove: function() {
      var me = this;
      this.stopListening();
      this.$el.hide("slow", function() { me.$el.remove() });    
    }
  })
});

