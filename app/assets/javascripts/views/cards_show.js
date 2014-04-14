window.Trellino.Views.CardsShowView = Backbone.View.extend ({
	template: JST["cards/show"],
	className: "card",
	
	events: { 
		"mouseover": "showDeleteButton",
		"mouseout": "removeDeleteButton",	
		"click .delete-card": "deleteCard",
		"drop": "drop"
  },

	initialize: function (options) {
		this.listenTo(this.model, "change", this.render);
		
		this.card = options.card
	},
	
	render: function () {
		var renderedContent = this.template({ card: this.model });
		this.$el.attr('id', 'item-' + this.model.get('rank'));
		this.$el.html(renderedContent);
		
		return this;
	},
	
	showDeleteButton: function (event) {
		this.$('.delete-card').removeClass('hide');
	},
	
	removeDeleteButton: function (event) {
		this.$('.delete-card').addClass('hide');
	},
	
	deleteCard: function (event) {
		this.model.destroy();
	},
	
	drop: function (event, index) {
		this.$el.trigger('update-sort', [this.model, index]);
	}
});