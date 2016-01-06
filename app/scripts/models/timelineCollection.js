define(['backbone', 'models/timelineModel'],
function (Backbone, timelineModel) {
  return Backbone.Collection.extend({
    model: timelineModel,
    url: "data/timeline.json"
  });
});
