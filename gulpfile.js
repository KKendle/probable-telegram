const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass')(require('sass'));
const data = require('gulp-data');

const nunjucksHtml = (done) => {
  gulp.src('src/pages/*.html')
    .pipe(data(() => {
      return require('./src/data/pageData.json');
    }))
    .pipe(
      nunjucksRender({
        path: ['src/templates']
      })
    )
    .pipe(gulp.dest('dist'));
  done();
}

exports.default = nunjucksHtml;
