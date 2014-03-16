/*global Trellino, Backbone */
"use strict";

window.Trellino.Routers.AppRouter = Backbone.Router.extend ({
	routes: {
		"": "boardsIndex",
		"boards/new": "boardsNew",
		"boards/:id": "boardsShow"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},
	
	boardsIndex: function() {
		var indexView = new Trellino.Views.BoardsIndexView({
			collection: Trellino.Collections.boards
		});
		
		this._swapView(indexView);
	},
	
	boardsNew: function() {
		var newView = new Trellino.Views.BoardsNewView();
		
		this._swapView(newView);
	},
	
	boardsShow: function(id) {
		var board = Trellino.Collections.boards.getOrFetch(id);
		
		var showView = new Trellino.Views.BoardsShowView({
			model: board
		});
		
		this._swapView(showView);
	},
	
	_swapView: function(view) {
		if (this._currentView) {
			this._currentView.remove();
		}	
		this._currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
	
});