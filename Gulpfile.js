var gulp  = require('gulp');
var Super = require('./index');

gulp.task('default', function() {
  Super('test/pages/*.md', {});
});
