/*eslint-env node */

var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
// var jasmine = require('gulp-jasmine-phantom');

gulp.task('default', ['lint'], function() {
	gulp.watch('js/**/*.js', ['lint']);

	browserSync.init({
		server: './'
	});
});


gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});

// gulp.task('tests', function () {
// 	gulp.src('tests/spec/extraSpec.js')
// 		.pipe(jasmine({
// 			integration: true,
// 			vendor: 'js/**/*.js'
// 		}));
// });
