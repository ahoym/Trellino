/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsShowView = Backbone.CompositeView.extend ({
	template: JST["lists/show"],
	className: "list col-xs-2 connected-sortable",
	
	events: {
 	  "click .add-card": "openAddCard",
		"update-sort": "updateSort"
  },
	
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		this.listenTo(this.model.cards(), "remove", this.removeCard);
		
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
		
		this.addSubview(".cards-index", cardsShowView);
		cardsShowView.render();
	},
	
	removeCard: function (card) {
		var cardShowView = 
			_(this.subviews()[".cards-index"]).find(function (subview) {
				return subview.model == card
			});
			
		this.removeSubview(".cards-index", cardShowView);			
	},
	
	openAddCard: function (event) {
		event.preventDefault();
		var cardNewView = new Trellino.Views.CardsNewView({ list: this.model });
		
		$(event.currentTarget).parent().html(cardNewView.render().$el)
	},
	
	updateSort: function (event, model, position) {
		this.model.cards().remove(model);
		this.model.cards().each(function (model, index) {
			var rank = index;
			if (index >= position) {
				rank += 1;
				model.set('rank', rank);
			}
		});

		model.set('rank', position);
		this.model.cards().add(model, {at: position});
		this.model.cards().each(this.removeCard.bind(this));
		this.model.cards().each(this.addCard.bind(this));
		
		this.render();
	}
});