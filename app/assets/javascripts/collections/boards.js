/*global Trellino, Backbone */
"use strict";

window.Trellino.Collections.Boards = Backbone.Collection.extend ({
	url: "/api/boards",
	model: Trellino.Models.Board,
	
	getOrFetch: function(id) {
		var model;
		var boards = this;
		
		if (model = this.get(id)) {
			model.fetch();
		} else {
			model = new Trellino.Models.Board({ id: id });
			moodel.fetch({
				succes: function() { boards.add(model) }
			});
		}
		
		return model;
	}
});