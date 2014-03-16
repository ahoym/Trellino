/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.ListsShowView = Backbone.View.extend ({
	template: JST["lists/show"],
	
	render: function () {
		var renderedContent = this.template({ list: this.model })
		this.$el.html(renderedContent);

		return this;
	}	
});