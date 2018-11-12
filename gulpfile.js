'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var rename = require("gulp-rename");

gulp.task('copyfiles', function(){
	gulp.src('node_modules/@types/ej.web.all/index.d.ts')
	    .pipe(rename(function (path) {
			path.basename = "ej.web.all.d";
			path.extname = ".ts";
		}))
        .pipe(gulp.dest('tsfiles'));
	gulp.src('node_modules/@types/jquery/index.d.ts')
	    .pipe(rename(function (path) {
			path.basename = "jquery.d";
			path.extname = ".ts";
		}))
        .pipe(gulp.dest('tsfiles'));
		gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js')
        .pipe(gulp.dest('scripts'));
		gulp.src('node_modules/syncfusion-javascript/Content/ej/web/**')
        .pipe(gulp.dest('content/ejthemes'));
});
gulp.task('start', function() {
	connect.server({
		port: 5200,
		fallback: 'default.htm',
		livereload: true
	});
	
});