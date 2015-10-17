'use strict';

var should = require('should'),
    jsreportJade = require('../');

/* eslint padded-blocks: [0] */
describe('jsreport-jade', function() {

  it('should export a jsreport configuration object', function() {
    should(jsreportJade).have.properties(['name', 'main']);
  });

});
