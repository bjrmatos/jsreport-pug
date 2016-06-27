'use strict';

var jade = require('toner-jade');
var fs = require('fs');
var path = require('path');

module.exports = function(reporter) {
  reporter.extensionsManager.engines.push({
    name: 'jade',
    pathToEngine: jade
  });

  // hook to the express extension's ace directory and serve jade highlighting
  reporter.on('express-configure', function(app) {
    app.get('/lib/ace/mode-jade.js', function(req, res) {
      res.send(fs.readFileSync(path.join(__dirname, '../', 'public', 'js', 'ace', 'mode-jade.js')));
    });

    app.get('/lib/ace/snippets/jade.js', function(req, res) {
      res.send(fs.readFileSync(path.join(__dirname, '../', 'public', 'js', 'ace', 'snippets', 'jade.js')));
    });
  });

  // we need to addFileExtensionResolver after the store provider extension is initialized, but before
  // every other extension like sample template is processed
  reporter.initializeListeners.insert(0, 'jade', function() {
    reporter.documentStore.addFileExtensionResolver(function(doc, entitySetName, entityType, propertyType) {
      if (doc.engine === 'jade' && propertyType.document.engine) {
        return 'jade';
      }
    });
  });
};
