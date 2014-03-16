/*global Trellino, Backbone */
"use strict";

window.Trellino.Models.List = Backbone.Model.extend ({
	urlRoot: "/api/lists",
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		
		delete json.id;
		delete json.created_at;
		delete json.updated_at;
		
		return json;
	}
});