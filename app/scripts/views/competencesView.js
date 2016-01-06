define([
	'marionette',
  'underscore',
	'text!templates/competences.html'
], function (Marionette, _, competencesTemplates) {
	return Marionette.ItemView.extend({
		template: _.template(competencesTemplates),
	});
});
