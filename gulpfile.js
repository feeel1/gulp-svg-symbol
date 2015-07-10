"use strict"; // Помогает увидеть где ошибка.

var gulp = require('gulp');
var svgs = require('gulp-svg2js');

gulp.task('svgsprite', function(){
    return gulp.src('svg/*.svg')
        .pipe(svgs({
            jsTmpl: 'tmpl/tmpl.js',
            cssTmpl: 'tmpl/tmpl.css'
        }))
        .pipe(gulp.dest('dest'));
});

gulp.task('default', ['svgsprite']);