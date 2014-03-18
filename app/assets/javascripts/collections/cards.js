window.Trellino.Collections.Cards = Backbone.Collection.extend ({
	model: Trellino.Models.Card,
	url: function() {
		return this.list.url() + "/api/cards"
	},
	
	initialize: function(model, options) {
		this.list = options.list;
	}
});