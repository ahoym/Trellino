window.Trellino.Views.CardsShowView = Backbone.View.extend ({
	template: JST["cards/show"],
	className: "card",
	tagName: "li",
	
	events: { 
		"drop-card": "drop"
  },

	initialize: function (options) {
		this.$el.attr('id', 'item-' + this.model.get('rank'));
		this.$el.attr('data-cardId', this.model.id);
				
		this.listenTo(this.model, "change", this.render);
		
		this.card = options.card
	},
	
	render: function () {
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	drop: function (event, ui) {
		this.$el.trigger('update-card-order', [this.model, ui]);
	}
});

// deleteable is a mixin
_.extend(Trellino.Views.CardsShowView.prototype, deleteable);