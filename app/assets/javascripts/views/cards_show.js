window.Trellino.Views.CardsShowView = Backbone.View.extend ({
	template: JST["cards/show"],
	className: "card",
	
	events: { "mouseover div.card": "showDeleteButton" },

	initialize: function (options) {
		this.card = options.card
	},
	
	render: function () {
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	showDeleteButton: function (event) {
		console.log("PEW")
		$(event.currentTarget).hover(
			function() {
				$(this).fadeIn(500);
				$(this).append("<button id='delete'>X</button>");
			},
			function() {
				$(this).remove("<button id='delete'>X</button>");
			}
		)
	}
	
});