/*eslint-env node*/
/*eslint no-console: "error"*/
/*eslint no-console: ["error", { allow: ["Gus"] }] */

const gulp = require("gulp");
// const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const eslint = require("gulp-eslint");
const watch = require("gulp-watch");

// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const  rename = require("gulp-rename");
// const babel = require("gulp-babel");
// const sourcemaps = require("gulp-sourcemaps");
// const imagemin = require("gulp-imagemin");
// const imageminPngquant = require("imagemin-pngquant");


// gulp.task("default", ["copy-html", "copy-images", "styles"/*,"lint"*/], function() {
gulp.task("default", ["lint", "watch"], function() {
	// gulp.watch("sass/**/*.scss",["styles"]);
	// gulp.watch("js/**/*.js",["lint"]);
	gulp.watch("js/**/*.js", ["watch"]);
	gulp.watch("jasmine/**/*.js", ["watch"]);


	// gulp.watch("/index.html",["copy-html"]);
	gulp.watch("./index.html", ["watch"]);
});

// gulp.task("styles", function() {
// 	gulp.src("sass/**/*.scss")
// 		.pipe(sass().on("error", sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ["last 2 versions"] //gets the two last versions of every popular browser
// 		}))
// 		.pipe(gulp.dest("dist/css"));
// 	// eslint-disable-next-line no-console
// 	console.log("Gus, just applied 'styles' function over scss files.");
// });

// gulp.task("copy-html", function() {
// 	gulp.src("./index.html")
// 		.pipe(gulp.dest("./dist"));
// });

// gulp.task("copy-images", function() {
// 	gulp.src("img/*")
// 		.pipe(gulp.dest("dist/img"));
// });
//
// gulp.task("minimize-images", () =>
// 	gulp.src("img/*")
// 		.pipe(imagemin({
// 			progressive: true,
// 			// use: [imageminPngquant()]}).then(() => {
// 			use: [imageminPngquant()],
// 			// eslint-disable-next-line no-console
// 			// console.log("Gus, images optimized")
// 		}))
//
// 		.pipe(gulp.dest("dist/img"))
// );
//
// gulp.task("scripts", function() {
// 	gulp.src("js/**/*.js")
// 		.pipe(sourcemaps.init())
// 		.pipe(babel({
// 			presets: ["env"]
// 		}))
// 		.pipe(concat("all.js"))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("dist/js"));
// });
//
// gulp.task("scripts-dist", function() {
// 	gulp.src("js/**/*.js")
// 		.pipe(sourcemaps.init())
// 		.pipe(babel({
// 			presets: ["env"]
// 		}))
// 		.pipe(concat("all.js"))
// 		.pipe(uglify()) //dist is uglified
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("dist/js"));
// });
//
// gulp.task("dist", [
// 	"copy-html",
// 	"copy-images",
// 	"styles",
// 	"lint",
// 	"scripts-dist"
// ]);

browserSync.init({
	server: "./"
	// server: "./dist"
});
browserSync.stream();

gulp.task("lint", () => {
	// ESLint ignores files with "node_modules" paths.
	// So, it's best to have gulp ignore the directory as well.
	// Also, Be sure to return the stream from the task;
	// Otherwise, the task may end before the stream has finished.
	// return gulp.src(["**/*.js","!node_modules/**"])
	// eslint() attaches the lint output to the "eslint" property
	// of the file object so it can be used by other modules.
		// .pipe(eslint())
	// eslint.format() outputs the lint results to the console.
	// Alternatively use eslint.formatEach() (see Docs).
		// .pipe(eslint.format())
	// To have the process exit with an error code (1) on
	// lint error, return the stream and pipe to failAfterError last.
		// .pipe(eslint.failAfterError());
	// console.log("Gus, just applied 'lint' function over js files.");

});

gulp.task("watch", function(){

  watch("./index.html", function(){
    browserSync.reload();
  });

	watch("js/**/*.js", function() {
		    browserSync.reload();
	});
	// eslint-disable-next-line no-console
	console.log("Gus, just turned on the 'watch' function.");

});
