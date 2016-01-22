/* global define */
'use strict';

define([
  'marionette',
  'underscore',
  'text!templates/footer.html'
], function (Marionette, _, footerTemplates) {
  return Marionette.ItemView.extend({
    template: _.template(footerTemplates)
  });
});
