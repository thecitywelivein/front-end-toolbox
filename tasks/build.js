'use strict';

module.exports = () => {
  const tasks = {
    build: {
      seq: [
        'css',
        'build-src',
        'copy-html',
        'copy-assets'
      ],
      description: 'Bundle the client package and copy it in the public folder. ' +
      'Run \'npm run build\' to prepare a production environment.'
    }
  };
  return tasks;
};
