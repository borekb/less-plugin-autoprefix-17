var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('less-plugin-autoprefix');


gulp.task('less', function () {

    var destFolder = 'css';

    return gulp.src('css/style-*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [new autoprefixer()],
            relativeUrls: true // so that e.g. a link to the bg-noise image works from the 'lib' directory
        }))
        .on('error', function (error) {
            console.log(error);
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destFolder));

});