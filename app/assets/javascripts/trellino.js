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
			},
			error: function () { debugger }
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
	
	addSubviews: function(selector, subview) {
		var selectorSubviews =
			this.subviews()[selector] || (this.subviews()[selector] = []);
		
		selectorSubviews.push(subview);
		var $selectorEl = this.$(selector);
		$selectorEl.append(subview.$el);		
	},
	
	renderSubviews: function() {
		var view = this;
		
		_(this.subviews()).each(function (selectorSubviews, selectr) {
			var $selectorEl = view.$(selector)
			
			_(selectorSubviews).each(function (subviews) {
				$selectorEl.append(subview.render().$el);
			});
		});
	}	
})

$(document).ready(function(){
  Trellino.initialize();
});
