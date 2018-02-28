var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function () {

    browserSync.init({
        proxy: "localhost:3000"
    });

    gulp.watch('assets/sass/**/*.scss', ['styles']);
    gulp.watch("../sea_www/views/**/*.pug").on('change', function () {
        browserSync.reload();
    });
});


gulp.task('styles', function () {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('../sea_www/public/stylesheets/'))
        .pipe(browserSync.stream());
});

//Watch task
gulp.task('default', ['serve'], function () {
    // gulp.watch('sass/**/*.scss',['styles']);
});