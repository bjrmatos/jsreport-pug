// eslint-disable-next-line strict, lines-around-directive
'use strict';

var pug = require('pug');

module.exports = function (html) {
  var compiledTemplate;

  compiledTemplate = pug.compile(html);

  return function (helpers, data) {
    var locals,
        templateHelpers;

    // helpers will be available as `templateHelpers` inside templates
    templateHelpers = helpers ? { templateHelpers: helpers } : { templateHelpers: {} };
    locals = Object.assign({}, data, templateHelpers);

    return compiledTemplate(locals);
  };
};
