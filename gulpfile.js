var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('less', function(){
	return gulp.src('public/bootstrap/less/bootstrap.less')
		.pipe(less('less', 'includes'))
		.pipe(gulp.dest('public/bootstrap/css'));
});

//gulp default task
gulp.task('default', ['less', 'watch']);

//gulp watch

gulp.task('watch', function(){
	gulp.watch('public/bootstrap/less/**/*.less', ['less']);
});

