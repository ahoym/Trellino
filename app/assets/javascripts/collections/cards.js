window.Trellino.Collections.Cards = Backbone.Collection.extend ({
	model: Trellino.Models.Card,
	url: "/api/cards",
	comparator: function (card) {
		return card.get('rank');
	},
	
	initialize: function(model, options) {
		this.list = options.list;
	}
});