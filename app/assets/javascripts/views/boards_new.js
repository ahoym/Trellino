window.Trellino.Views.BoardsNewView = Backbone.View.extend ({
	template: JST["boards/new"],

	events: { "click #create-board": "createBoard" },
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	createBoard: function () {
		var $title = $('#board-title').val();
		
		this.collection.create({title: $title}, {
			success: function(model) {
				Backbone.history.navigate("#", {trigger: true});
			}
		});
	}
	
});