window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	Trellino.Collections.boards = new Trellino.Collections.Boards();
		Trellino.Collections.boards.fetch({			
			
			success: function () {
				new Trellino.Routers.AppRouter({
					$rootEl: $('#content')
				});

				Backbone.history.start()
			},
			error: function () { debugger }
		})
		
  }
};

$(document).ready(function(){
  Trellino.initialize();
});
