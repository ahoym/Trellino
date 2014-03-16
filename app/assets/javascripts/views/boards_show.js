window.Trellino.Views.BoardsShowView = Backbone.CompositeView.extend ({
	template: JST["boards/show"],
	
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		// this.listenTo(this.model.lists(), "remove", this.removeList);

		var view = this;
		this.model.lists().each( function(list) {
			view.addList(list)
		});
		var newListView = new Trellino.Views.ListsNewView({
			model : this.model
		});
		this.addSubview('#lists-new', newListView)
	},
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		this.renderSubviews();

		return this;		
	},
	
	addList: function(list) {
		var listsShowView = new Trellino.Views.ListsShowView({
			model: list
		});
		
		this.addSubview("#lists-index", listsShowView);
		listsShowView.render();
	}
});