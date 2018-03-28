'use strict';

var path = require('path');

module.exports = function(reporter) {
  reporter.extensionsManager.engines.push({
    name: 'jade',
    pathToEngine: path.join(__dirname, 'pugEngine.js')
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
