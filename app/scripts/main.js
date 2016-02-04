'use strict';

require.config({
  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : [ 'underscore', 'jquery' ],
      exports : 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    },
    bootstrap : {
       deps :['jquery']
    }
  },
  paths : {
    jquery : '../bower_components/jquery/dist/jquery',
    underscore : '../bower_components/underscore/underscore',
    backbone : '../bower_components/backbone/backbone',
    marionette : '../bower_components/backbone.marionette/lib/backbone.marionette',
    text : '../bower_components/text/text',
    bootstrap : '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min'
  }
});
require(['app'], function(App) {
  App.start();

  /* jshint ignore:start */
  // scrollTop
  $(document).ready(function($){
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
        scrollTop: 0
      }, scroll_top_duration
    );
    });
  });
  /* jshint ignore:end */
});
