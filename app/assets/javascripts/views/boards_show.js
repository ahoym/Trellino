/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.BoardsShowView = Backbone.CompositeView.extend ({
	template: JST["boards/show"],

	events: { "click input.submit-btn": "test",
	 					"click #delete-board": "deleteBoard"
					},
	
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		this.listenTo(this.model.lists(), "remove", this.removeList);

		this.model.lists().each(this.addList.bind(this));

		var controlPanelView = new Trellino.Views.ControlPanel({ board: this.model });
		this.addSubview('#control-panel', controlPanelView);

		var newListView = new Trellino.Views.ListsNewView({
			board: this.model
		});
		this.addSubview('#lists-new', newListView);
	},
	
	addList: function(list) {
		var listsShowView = new Trellino.Views.ListsShowView({
			model: list
		});
		
		this.addSubview("#lists-index", listsShowView);
		listsShowView.render();
	},
	
  removeList: function (list) {
    var listsShowView =
      _(this.subviews()["#lists-index"]).find(function (subview) {
        return subview.model == list
      });

    this.removeSubview("#lists-index", listsShowView);
  },
	
	render: function () {
		var renderedContent = this.template({ board: this.model });
		this.$el.html(renderedContent);
		this.renderSubviews();

		return this;		
	},
	
	deleteBoard: function () {
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("", { trigger: true });
			}
		});
	}
});