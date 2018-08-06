const gulp = require("gulp");
const clean = require('gulp-clean');
const babel = require("gulp-babel");

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


gulp.task('watch', ['clean'], () => {
    return gulp.watch(['src/**/*.js', 'src/**/*.json'], ['babel']);
});

gulp.task('default', ['watch']);

// --delay 5