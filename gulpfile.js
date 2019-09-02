const gulp = require('gulp');
const zip = require('gulp-zip');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('zip_code', () =>
    gulp.src('src/*.htm')
    	// .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(zip('um.zip'))
        .pipe(gulp.dest('dist'))
);
gulp.task('default', ['zip_code'], function() {
    gulp.watch(['src/*.htm'], ['zip_code']);
});