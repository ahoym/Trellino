window.Trellino.Views.BoardsShowView = Backbone.View.extend ({
	template: JST["boards/show"],
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		
		return this;		
	}
	
});