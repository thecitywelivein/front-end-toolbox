'use strict';

module.exports = (gulp, config) => {
  const tasks = {
    'copy-assets': {
      fn: copyAssetsTask,
      help: 'Copy all Assets'
    }
  };
  return tasks;

  function copyAssetsTask() {
    gulp.src('client/assets/*')
    .pipe(gulp.dest(config.folders.build + '/assets'));
  }
};
