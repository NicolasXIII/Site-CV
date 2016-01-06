define(['backbone', 'marionette',
 'views/headView',
 'views/aproposView',
 'views/competencesView',
 'views/timeline/timelineCollectionView',
 'views/footerView',
 'models/timelineCollection'
  ],
function(Backbone, Marionette, headView, aproposView, competencesView, timelineCollectionView, footerView, timelineCollection) {
  var app = new Marionette.Application();
  app.addRegions({
    header: '.header',
    apropos: '.apropos',
    competences: '#competences',
    timeline: '#cd-timeline',
    footer: '.footer'
  });

  var header = new headView();
  var apropos = new aproposView();
  var competences = new competencesView();
  var footer = new footerView();

  app.header.show(header);
  app.apropos.show(apropos);
  app.competences.show(competences);
  app.footer.show(footer);

  var TimelineCollection = new timelineCollection();

  TimelineCollection.fetch({
    success: function(){
      var timeline = new timelineCollectionView({
        collection: TimelineCollection
      });
      app.timeline.show(timeline);
    }
  });
  jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

  return app;
});
