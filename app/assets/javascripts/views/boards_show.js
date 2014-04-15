/*global Trellino, Backbone */
"use strict";

window.Trellino.Views.BoardsShowView = Backbone.CompositeView.extend ({
	template: JST["boards/show"],

	events: { "click input.submit-btn": "test",
	 					"click #delete-board": "deleteBoard",
						"update-list-order": "sortLists"
					},
	
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		this.listenTo(this.model.lists(), "remove", this.removeList);
		this.listenTo(this.model.lists(), "change", this.render);
		
		var newListView = new Trellino.Views.ListsNewView({
			board: this.model
		});
		this.addSubview('.lists-index', newListView);
		
		var controlPanelView = new Trellino.Views.ControlPanel({ board: this.model });
		this.addSubview('#control-panel', controlPanelView);
		
		this.model.lists().each(this.addList.bind(this));
	},
	
	addList: function(list) {
		var listsShowView = new Trellino.Views.ListsShowView({
			model: list
		});
		
		this.addSubview(".lists-index", listsShowView);
		listsShowView.render();
	},
	
  removeList: function (list) {
    var listShowView =
      _(this.subviews()[".lists-index"]).find(function (subview) {
        return subview.model == list
      });

    this.removeSubview(".lists-index", listShowView);
  },
	
	sortLists: function (event, model, ui) {
		var position = ui.item.index();
		
		this.model.lists().remove(model);
		this.model.lists().each( function (boardList, index) {
			var newRank = index;
			if (index >= position) {
				newRank += 1;
				boardList.save({ rank: newRank });
			}
		});
		
		model.set({ rank: position });
		model.save({}, { url: this.model.url() + "/lists/" + model.id });
		this.model.lists().add(model, {at: position});
		
		this.model.lists().each(this.removeList.bind(this));
		this.model.lists().each(this.addList.bind(this));
		
		this.render();
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