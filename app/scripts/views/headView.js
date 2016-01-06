define([
	'marionette',
  'underscore',
	'text!templates/header.html'
], function (Marionette, _, headerTemplates) {
	return Marionette.ItemView.extend({
		ui: {
	    "boutonScroll": "#autoScroll"
	  },
	  events: {
	    "click @ui.boutonScroll": "boutonScroll"
	  },
		template: _.template(headerTemplates),
		boutonScroll: function (e) {
			console.log(e.target)
			console.log($(e.target))
			console.log($(e.target).attr("pos"))
			$("body").animate({ scrollTop: $(e.target).attr("pos") }, "slow");
		}
	});
});
