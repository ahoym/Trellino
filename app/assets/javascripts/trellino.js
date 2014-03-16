/*globals window, Trellino:true, $, _, Backbone */

window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	
  initialize: function() {
  	Trellino.Collections.boards = new Trellino.Collections.Boards();
		Trellino.Collections.boards.fetch({			
			success: function () {
				new Trellino.Routers.AppRouter({
					$rootEl: $('#content')
				});
				Backbone.history.start();
			}
		})
  }
};

Backbone.CompositeView = Backbone.View.extend({
	subviews: function () {
		if (!this._subviews) {
			this._subviews = {};
		}
		
		return this._subviews;
	},
	
  addSubview: function (selector, subview) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    selectorSubviews.push(subview);

    var $selectorEl = this.$(selector);
    $selectorEl.append(subview.$el);
  },
	
  renderSubviews: function () {
    var view = this;
    
    _(this.subviews()).each(function (selectorSubviews, selector) {
      var $selectorEl = view.$(selector);
      $selectorEl.empty();

      _(selectorSubviews).each(function (subview) {
        $selectorEl.append(subview.render().$el);
      });
    });
  },
	
	removeSubview: function(selector, subview) {
		var selectorSubviews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
		
		var subviewIndex = selectorSubviews.indexOf(subview);
		selectorSubviews.splice(subviewIndex, 1);
		subview.remove();
	}	
});

$(document).ready(function(){
  Trellino.initialize();
});
