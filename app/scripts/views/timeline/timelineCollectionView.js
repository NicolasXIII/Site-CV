'use strict';

define([
  'marionette',
  'views/timeline/timelineItemView'
], function (Marionette, timelineItemView) {
  return Marionette.CollectionView.extend({
    childView: timelineItemView
  });
});
