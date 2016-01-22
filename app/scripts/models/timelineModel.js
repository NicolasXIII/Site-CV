/* global define */
'use strict';

define(['backbone'],
function (Backbone) {
  return Backbone.Model.extend({
    titre: '',
    etablissement: '',
    description: '',
    icone: '',
    date: ''
  });
});
