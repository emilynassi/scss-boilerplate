
const content = `let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

gulp.task('styles', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({}))
		.pipe(gulp.dest('./css3/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});
`

const gulpcontent = {
    content: content,
    filename : './scss/gulpfile.js'
}

module.exports = gulpcontent;