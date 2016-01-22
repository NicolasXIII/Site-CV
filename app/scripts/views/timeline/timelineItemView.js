'use strict';

define([
	'marionette',
	'text!templates/timelineItem.html'
], function (Marionette, timelineItemTemplates) {
	return Marionette.ItemView.extend({
		template: _.template(timelineItemTemplates),
		className: "cd-timeline-block",
	});
});
