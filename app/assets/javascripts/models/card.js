window.Trellino.Models.Card = Backbone.Model.extend ({
	urlRoot: "/api/cards",
	
	comparator: function (card) {
		return card.get('rank');
	},
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		
		delete json.id;
		delete json.created_at;
		delete json.updated_at;
		
		return json;
	}
});