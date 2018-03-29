// eslint-disable-next-line strict, lines-around-directive
'use strict';

var path = require('path');

module.exports = function (reporter) {
  reporter.extensionsManager.engines.push({
    name: 'pug',
    pathToEngine: path.join(__dirname, 'pugEngine.js')
  });

  // we need to addFileExtensionResolver after the store provider extension is initialized,
  // but before every other extension like sample template is processed
  reporter.initializeListeners.insert(0, 'pug', () => {
    reporter.documentStore
      .addFileExtensionResolver((doc, entitySetName, entityType, propertyType) => {
        if (doc.engine === 'pug' && propertyType.document.engine) {
          return 'pug';
        }

        return undefined;
      });
  });
};
