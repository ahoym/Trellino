/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsNewView = Backbone.View.extend ({
	template: JST["lists/new"],
	className: "list new-list",
	
	events: { "submit form": "createList" },

	initialize: function (options) {
		this.board = options.board;
	},
		
	render: function () {
		var renderedContent = this.template({ board: this.board });
		this.$el.html(renderedContent);
		return this;
	},
		
	createList: function(event) {
		event.preventDefault();

		var $lists = this.board.lists()
		var $title = $('#list-title').val()
		var $boardId = this.board.id;
		var $rank = $lists.length + 1;
		
		$lists.create({ title: $title, rank: $rank, board_id: $boardId });
		$('#list-title').val("")
	}
});