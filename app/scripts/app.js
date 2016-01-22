/* global define */
/*jshint camelcase: false */
'use strict';

define(['backbone', 'marionette',
'views/headView',
'views/aproposView',
'views/competencesView',
'views/timeline/timelineCollectionView',
'views/footerView',
'models/timelineCollection'
],
function(Backbone, Marionette, HeadView, AproposView, CompetencesView, TimelineCollectionView, FooterView, TimelineCollection) {
  var app = new Marionette.Application();
  app.addRegions({
    header: '.header',
    apropos: '.apropos',
    competences: '#competences',
    timeline: '#cd-timeline',
    footer: '.footer'
  });

  var header = new HeadView();
  var apropos = new AproposView();
  var competences = new CompetencesView();
  var footer = new FooterView();

  app.header.show(header);
  app.apropos.show(apropos);
  app.competences.show(competences);
  app.footer.show(footer);

  var timelineCollection = new TimelineCollection();

  timelineCollection.fetch({
    success: function(){
      var timeline = new TimelineCollectionView({
        collection: timelineCollection
      });
      app.timeline.show(timeline);
    }
  });
  return app;
});
