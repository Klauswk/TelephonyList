var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('clean',function(){
    return gulp.src("dist/")
            .pipe(clean());
});

gulp.task('jshint',function(){
    return gulp.src('./public/js/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('uglify',/*['clean'],*/function(){
    return gulp.src('./public/js/**/*.js')
            .pipe(concat("scripts.js"))
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
});

gulp.task('minify-css', function() {
  return gulp.src(['./public/css/**/*.css','./public/bootstrap/css/bootstrap.min.css'])
    .pipe(concat("bundle.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('default',['clean','jshint','uglify','minify-css']);
