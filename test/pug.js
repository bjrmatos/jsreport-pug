// eslint-disable-next-line strict, lines-around-directive
'use strict';

var should = require('should'),
    jsreportPug = require('../'),
    pug = require('../src/pugEngine');

/* eslint padded-blocks: [0] */
describe('jsreport-pug', () => {
  it('should export a jsreport configuration function', () => {
    should(typeof jsreportPug === 'function').be.eql(true);
  });

  it('should create a configuration object from configuration function', () => {
    should(jsreportPug()).have.properties(['name', 'main']);
  });
});

describe('pug engine', () => {
  it('should render html', () => {
    var html = pug('h1')();
    should(html).be.eql('<h1></h1>');
  });

  it('should be able to use helpers', () => {
    var html = pug('h1 #{templateHelpers.sayHello()}')({
      sayHello: () => 'Hello from nodejs'
    }, null);

    should(html).be.eql('<h1>Hello from nodejs</h1>');
  });

  it('should be able to use data', () => {
    var html = pug('h1= a')(null, { a: 'Hey' });
    should(html).be.eql('<h1>Hey</h1>');
  });

  it('should be able to use data (interpolation)', () => {
    var html = pug('p #{name}\'s Pug source code!')(null, { name: 'Timothy' });
    should(html).be.eql('<p>Timothy\'s Pug source code!</p>');
  });

  it('should throw when syntax error', () => {
    should(() => {
      pug('h1?')(null, {});
    }).throw();
  });

  it('should work with jsreport syntax', () => {
    // eslint-disable-next-line no-template-curly-in-string
    var html = pug('img(src=`{#image ${b}}`)')(null, { b: 'foo' });
    should(html).be.eql('<img src="{#image foo}"/>');
  });
});
