/* global Trellino, Backbone */
"use strict";

window.Trellino.Views.ControlPanel = Backbone.View.extend ({
	template: JST["control_panel"],
	
	events: { "submit form": "addMember" },
	
	initialize: function (options) {
		this.board = options.board;
	},
	
	render: function () {
		var renderedContent = this.template()
		this.$el.html(renderedContent);
		
		return this;
	},
	
	addMember: function (event) {
		event.preventDefault();

		var $newMemberEmail = $('#add-member').val();
		this.board.save({ newMemberEmail: $newMemberEmail });
		$('#add-member').val("");
	}
})