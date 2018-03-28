'use strict';

var main = require('./src/pug.js'),
    config = require('./jsreport.config.js');

module.exports = function(options) {
  var newConfig = Object.assign({}, config);

  newConfig.options = options;
  newConfig.main = main;
  newConfig.directory = __dirname;

  return newConfig;
};
