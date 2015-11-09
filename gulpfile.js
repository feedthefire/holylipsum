var gulp = require('gulp');  
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function() {  
    gulp.src(['src/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js
        .pipe(gulp.dest('./www'));
});

gulp.task('copyViews', function() {  
    gulp.src(['src/**/*.ejs'])
        .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {  
    gulp.watch('./src/**/*.ts', ['ts']);
    gulp.watch('./src/**/*.ejs', ['copyViews']);
});

gulp.task('nodemon', ['ts', 'copyViews', 'watch'], function() {  
    nodemon({script: './www/app.js'});
});
