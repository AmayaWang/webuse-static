var gulp = require('gulp');

module.exports = function(paths, browserSync) {

  browserSync.init({
    server: {
      baseDir: "./"+paths.dev.html,                      
      directory: true                     
    },
    open: 'external',                       
    startPath: './',
    port: 9999
  });

  gulp.watch(paths.dev.html + "*.{html,htm}", function() {
    browserSync.reload();
  });
  gulp.watch(paths.dev.sass + '../**/*.scss', ['sassCompile']);
  gulp.watch([paths.dev.js + '../**/*.js','!'+paths.dev.js+'../**/*.min.js'],['jsCompress']);
};
