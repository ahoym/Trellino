/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.BoardsNewView = Backbone.View.extend ({
	template: JST["boards/new"],

	events: { "submit form": "createBoard" },
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	},
	
	createBoard: function (event) {
		event.preventDefault();
		var $title = $('form').serializeJSON()['board'].title;
		
		Trellino.Collections.boards.create({title: $title}, {
			success: function(model) {
				Backbone.history.navigate("boards/" + model.id, {trigger: true});
			}
		});
	}
});