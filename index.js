'use strict';

var assign = require('object-assign'),
    main = require('./src/jade.js'),
    config = require('./jsreport.config.js');

module.exports = function(options) {
  var newConfig = assign({}, config);

  newConfig.options = options;
  newConfig.main = main;
  newConfig.directory = __dirname;

  return newConfig;
};
