window.Trellino.Views.CardsNewView = Backbone.View.extend ({
	template: JST["cards/new"],
	className: "create-card",
	
	events: { "click #create-card-btn": "createCard",
	 					"click .cancel": "cancel" },
	
	initialize: function(options) {
		this.list = options.list;
		
		//remove DOM on mouse click away
		var that = this;
		this.$el.mouseleave(function(){  
      $('html').click(function(){
              that.cancel();
          $('html').unbind('click');
       });
    });
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;		
	},
	
	createCard: function (event) {
		event.preventDefault();
		var $cards = this.list.cards();
		
		var $title = $('#create-card-form').serializeJSON().card.title;
		var $listId = this.list.id;
		var $rank = $cards.length;
		var thisList = this.list;
		
		this.list.cards().create({title: $title, rank: $rank, list_id: $listId }, {
			success: function () {
				thisList.trigger("sync");
			}
		});
		$("input[type='textarea']").val("")
	},
	
	cancel: function (event) {
		if (event) event.preventDefault();
		this.$el.remove();
		this.list.trigger("sync");
	}
});