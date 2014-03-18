window.Trellino.Views.CardsNewView = Backbone.View.extend ({
	template: JST["cards/new"],
	
	events: { "click #create-card-btn": "createCard",
	 					"click .cancel": "cancel" },
	
	initialize: function(options) {
		this.list = options.list;
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;		
	},
	
	createCard: function (event) {
		event.preventDefault();
		var $cards = this.list.cards();
		
		var $title = $('#create-card').serializeJSON().card.title;
		var $listId = this.list.id;
		var $rank = $cards.length + 1;
		var thisList = this.list;
		
		this.list.cards().create({title: $title, rank: $rank, list_id: $listId }, {
			success: function () {
				thisList.trigger("add");
			}
		});
		$("input[type='text']").val("")
	},
	
	cancel: function (event) {
		event.preventDefault();
		this.$el.remove();
		this.list.trigger("add");
	}
});