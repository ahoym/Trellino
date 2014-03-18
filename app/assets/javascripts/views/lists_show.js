/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsShowView = Backbone.CompositeView.extend ({
	template: JST["lists/show"],
	className: "list col-xs-1",
	
	events: { "click .add-card": "openAddCard" },
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		
		this.model.cards().each(this.addCard.bind(this));
	},
	
	render: function () {
		var renderedContent = this.template({ list: this.model })
		this.$el.html(renderedContent);
		this.renderSubviews();

		return this;
	},
	
	addCard: function(cards) {
		var cardsShowView = new Trellino.Views.CardsShowView({
			model: cards
		});
		
		this.addSubview("#cards-index", cardsShowView);
		cardsShowView.render();
	},
	
	openAddCard: function (event) {
		event.preventDefault();
		var cardNewView = new Trellino.Views.CardsNewView({ list: this.model });
		
		$(event.currentTarget).parent().html(cardNewView.render().$el)
	}
});