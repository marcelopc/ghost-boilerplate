const gulp = require("gulp");
const clean = require('gulp-clean');
const babel = require("gulp-babel");
const jshint = require('gulp-jshint');
const stylehint = require('jshint-stylish');
const run = require('gulp-run');

var ext_replace = require('gulp-ext-replace');
var replace = require('gulp-string-replace');
var conflict = require("gulp-conflict");


gulp.task("babel", ['clean'], function () {
  return gulp.src(["src/app.js", "src/**/*.js"])
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('lint', function() {
    return gulp.src('./src/**/*.js')
        .pipe(jshint({ "esversion":6, "node": true}))
        .pipe(jshint.reporter(stylehint));
});

gulp.task('wait', async ()=>{
    await new Promise(resolve => setTimeout(resolve, 3000))
}); 

gulp.task('watch', ['clean', 'lint', 'babel'], () => {
    return gulp.watch(['src/**/*.js', 'src/**/*.json'], ['lint', 'babel']);
});

gulp.task('start', ['watch']);

gulp.task('create-teste', () => {
    return gulp.src('./dist/**/*.js')
    .pipe(ext_replace('.spec.js'))
    .pipe(conflict('./spec', {defaultChoice: 'n'}))
    .pipe(replace(new RegExp('.|\n', 'g'), '', {logs: { enabled: false }}))
    .pipe(gulp.dest('./spec'))


});
