/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsShowView = Backbone.CompositeView.extend ({
	template: JST["lists/show"],
	className: "list col-xs-2 connected-sortable",
	
	events: {
 	  "click .add-card": "openAddCard",
		"update-card-order": "sortCards",
		"drop-list": "drop"
  },
	
	initialize: function (options) {
		this.$el.attr('data-list', this.model.id);
		
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
	
	drop: function (event, ui) {
		this.$el.trigger('update-list-order', [this.model, ui])
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
	
	sortCards: function (event, model, ui) {
		var position = ui.item.index();
		
		this.model.cards().remove(model);
		this.model.cards().each(function (listModel, index) {
			var newRank = index;
			if (index >= position) {
				newRank += 1;
				listModel.save({ rank: newRank });
			}
		});
		
		debugger
		model.save({ rank: position });
		this.model.cards().add(model, {at: position});
		
			
		//necessary because even if the order in the collection is changed, the subviews are not.
		this.model.cards().each(this.removeCard.bind(this));
		this.model.cards().each(this.addCard.bind(this));
		
		this.render();
	}
});