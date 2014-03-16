/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsNewView = Backbone.View.extend ({
	template: JST["lists/new"],
	
	events: { "submit form": "createList" },
		
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		return this;
	},
		
	createList: function(event) {
		event.preventDefault();

		var $lists = this.model.lists()
		var $title = $('#list-title').val()
		var $boardId = this.model.id;
		var $rank = $lists.length + 1;

		$lists.create({ title: $title, rank: $rank, board_id: $boardId });
	}
});