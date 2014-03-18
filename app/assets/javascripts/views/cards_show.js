window.Trellino.Views.CardsShowView = Backbone.View.extend ({
	template: JST["cards/show"],

	initialize: function (options) {
		this.card = options.card
	},
	
	render: function () {
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		
		return this;
	}
});