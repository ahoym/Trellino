window.Trellino.Views.ListsNewView = Backbone.View.extend ({
	template: JST["lists/new"],
	
	events: { 
		"click input.submit-btn": "createList"
					},
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);

		return this;
	},
		
	createList: function(event) {
		console.log("hey")
		var $lists = this.model.lists()
		var $title = $('#list-title').val()
		var $board = this.model.id;
		var $rank = this.collection.length;
		debugger
		$lists.create({ title: $title, board: $board, rank: $rank}, {
			success: function(model) {
				Backbone.history.navigate(model.url(), { trigger: true })
			}
		});
	}
});