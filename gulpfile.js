"use strict"; // Помогает увидеть где ошибка.

var gulp = require('gulp');
var svgSpriteScript = require('gulp-svg-sprite-script');

gulp.task('createSprite', function(){
    return gulp.src('svg/*.svg')
        .pipe(svgSpriteScript({
            jsTmpl: 'tmpl/icons-tmpl.js',
            cssTmpl: 'tmpl/icons-tmpl.css'
        }))
        .pipe(gulp.dest('dest'));
});

gulp.task('default', ['createSprite']);