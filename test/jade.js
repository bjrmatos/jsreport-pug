'use strict';

var should = require('should'),
    jsreportJade = require('../');

/* eslint padded-blocks: [0] */
describe('jsreport-jade', function() {
  it('should export a jsreport configuration function', function() {
    should(typeof jsreportJade === 'function').be.eql(true);
  });

  it('should create a configuration object from configuration function', function() {
    should(jsreportJade()).have.properties(['name', 'main']);
  });
});
