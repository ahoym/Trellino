Deleteable = {	
	events: {
		"mouseover": "showDeleteItem",
		"mouseout": "removeDeleteItem",
		"click .delete-item": "deleteItem"
	},
	
	methods: {
		showDeleteItem: function (event) {
			this.$('.delete-item').first().removeClass('hide');
		},
	
		removeDeleteItem: function (event) {
			this.$('.delete-item').first().addClass('hide');
		},
	
		deleteItem: function (event) {
			this.model.destroy();
		}
	}
}