'use strict';

var should = require('should'),
    jsreportPug = require('../'),
    pug = require('../src/pugEngine');

/* eslint padded-blocks: [0] */
describe('jsreport-pug', function() {
  it('should export a jsreport configuration function', function() {
    should(typeof jsreportPug === 'function').be.eql(true);
  });

  it('should create a configuration object from configuration function', function() {
    should(jsreportPug()).have.properties(['name', 'main']);
  });
});

describe('pug engine', function() {
  it('should render html', function() {
    var html = pug('h1', null, null);
    should(html).be.eql('<h1></h1>');
  });

  it('should be able to use helpers', function() {
    var html = pug('h1 #{templateHelpers.sayHello()}', {
      sayHello: function() { return 'Hello from nodejs'; }
    }, null);

    should(html).be.eql('<h1>Hello from nodejs</h1>');
  });

  it('should be able to use data', function() {
    var html = pug('h1= a', null, { a: 'Hey' });
    should(html).be.eql('<h1>Hey</h1>');
  });

  it('should be able to use data (interpolation)', function() {
    var html = pug('p #{name}\'s Pug source code!', null, { name: 'Timothy' });
    should(html).be.eql('<p>Timothy\'s Pug source code!</p>');
  });

  it('should throw when syntax error', function() {
    should(function() {
      pug('h1?', null, {});
    }).throw();
  });

  it('should work with jsreport syntax', function() {
    var html = pug('img(src=`{#image ${b}}`)', null, { b: 'foo' });
    should(html).be.eql('<img src="{#image foo}"/>');
  });
});
