'use strict';

var jade = require('toner-jade');

module.exports = function(reporter) {
  reporter.extensionsManager.engines.push({
    name: 'jade',
    pathToEngine: jade
  });
};
