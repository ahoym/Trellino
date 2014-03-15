window.Trellino.Collections.Boards = Backbone.Collection.extend ({
	url: "/boards",
	model: Trellino.Models.Board,
	
	getOrFetch: function(id) {
		var model;
		
		if (model = this.get(id)) {
			model.fetch();
		} else {
			model = new Trellino.Models.Board({ id: id });
			moodel.fetch({
				succes: function() { todos.add(model) }
			});
		}
		
		return model;
	}
});