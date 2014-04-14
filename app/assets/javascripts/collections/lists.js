/*global Trellino, Backbone */
"use strict";

window.Trellino.Collections.Lists = Backbone.Collection.extend ({
	model: Trellino.Models.List,
	url: function () {
		return this.board.url() + "/lists";
	},
	comparator: function (list) {
		return list.get('rank');
	},
	
	initialize: function(model, options) {
		this.board = options.board;
	}
});