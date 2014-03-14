window.Trellino.Views.BoardsNewView = Backbone.View.extend ({
	template: JST["boards/new"],
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		
		return this;
	}
	
});