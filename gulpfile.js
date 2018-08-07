const gulp = require("gulp");
const clean = require('gulp-clean');
const babel = require("gulp-babel");
const jshint = require('gulp-jshint');
const stylehint = require('jshint-stylish')


gulp.task("babel", ['clean'], function () {
  return gulp.src(["src/app.js", "src/**/*.js"])
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// const tsProject = ts.createProject('tsconfig.json');

// gulp.task('scripts', ['static'], () => {

//     const tsResult = tsProject.src()
//         .pipe(tsProject());

//     return tsResult.js
//         .pipe(gulp.dest('dist'));

// });

// gulp.task('static', ['clean'], () => {
//     return gulp
//         .src(['src/**/*.json'])
//         .pipe(gulp.dest('dist'));
// });

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

gulp.task('default', ['watch']);

