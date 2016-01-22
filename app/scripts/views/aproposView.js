/* global define */
'use strict';

define([
  'marionette',
  'underscore',
  'text!templates/apropos.html'
], function (Marionette, _, aproposTemplates) {
  return Marionette.ItemView.extend({
    template: _.template(aproposTemplates)
  });
});
