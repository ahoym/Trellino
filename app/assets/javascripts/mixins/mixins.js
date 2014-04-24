var deleteable = {
	
	events: {
		"mouseover": "showDeleteItem",
		"mouseout": "removeDeleteItem",
		"click .delete-item": "deleteItem"
	},
	
	showDeleteItem: function (event) {
		this.$('.delete-item').removeClass('hide');
	},
	
	removeDeleteItem: function (event) {
		this.$('.delete-item').addClass('hide');
	},
	
	deleteItem: function (event) {
		this.model.destroy();
	}
}