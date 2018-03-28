'use strict';

var pug = require('pug');

module.exports = function(html, helpers, data) {
  var locals,
      templateHelpers,
      compiledTemplate;

  // helpers will be available as `templateHelpers` inside templates
  templateHelpers = helpers ? { templateHelpers: helpers } : { templateHelpers: {} };
  locals = Object.assign({}, data, templateHelpers);
  compiledTemplate = pug.compile(html);

  return compiledTemplate(locals);
};
