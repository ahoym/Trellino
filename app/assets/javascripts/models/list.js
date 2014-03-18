/*global Trellino, Backbone */
"use strict";

window.Trellino.Models.List = Backbone.Model.extend ({
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		
		delete json.id;
		delete json.created_at;
		delete json.updated_at;
		
		return json;
	},
	
	comparator: function (list) {
		return list.get('rank');
	},
	
	cards: function() {
		if (!this._cards) {
			this._cards = new Trellino.Collections.Cards([], {list: this});
		}
		
		return this._cards;
	},
	
	parse: function(jsonResp) {
		if (jsonResp.cards) {
			this.cards().set(jsonResp.cards);
			delete jsonResp.cards;
		}
		
		return jsonResp;
	}
});