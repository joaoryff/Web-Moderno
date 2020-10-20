const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// function padrao(cb) {
function transformcaoJs(cb) {
    // gulp.src('src/**/*.js')
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('erro', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

// exports.default = parallel(padrao, fim)
exports.default = series(transformcaoJs, fim)