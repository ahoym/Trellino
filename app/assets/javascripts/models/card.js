"use strict";

window.Trellino.Models.Card = Backbone.Model.extend ({
	urlRoot: "/api/cards",
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		
		delete json.created_at;
		delete json.updated_at;
		
		return json;
	}
});