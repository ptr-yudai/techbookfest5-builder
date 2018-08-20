'use strict';

import gulp            from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import Prism           from 'node-prismjs';
import pug             from 'pug';
import browserSync     from 'browser-sync';

pug.filters.code = function(str, options, locals) {
  const opts = Object.assign({}, options || {}, locals || {});
  const lang = opts.lang || 'plain';
  const start = (typeof opts.start === 'number')? opts.start : null;

  const highlighted = (Prism.languages[opts.lang])
    ? Prism.highlight(str, Prism.languages[opts.lang])
    : str;

  const lineNumberGutter = (start !== null)
    ?   `<span class="line-numbers-rows" style="counter-reset: linenumber ${start - 1}">`
      + Array(str.split('\n').length).join('<span></span>')
      + `</span>`
    : '';

  return `<pre class="${(start !== null)? 'line-numbers' : ''}" ${(start !== null)? 'data-start="'+start+'"' : ''}>`
       +   `<code class="language-${lang}">${lineNumberGutter}${highlighted}</code>`
       + `</pre>`;
}

const $ = gulpLoadPlugins();
const plumberOpt = {
  errorHandler: function(err) {
    console.error(err.stack);
    this.emit('end');
  },
}

gulp.task('default', ['pug', 'assets', 'stylus']);

gulp.task('pug', () =>
  gulp.src('src/index.pug')
    .pipe($.plumber(plumberOpt))
    .pipe($.pug({
      pug: pug,
      pretty: true,
    }))
    .pipe(gulp.dest('dest/'))
);

gulp.task('assets', () =>
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dest/assets/'))
);

gulp.task('stylus', () =>
  gulp.src('style/main.styl')
    .pipe($.plumber(plumberOpt))
    .pipe($.sourcemaps.init())
    .pipe($.stylus({
      'include css': true,
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dest/'))
);

gulp.task('browsersync', () => {
  browserSync({
    server: {
      baseDir: 'dest/',
      index: 'index.html',
    },
    open: false,
  });
});

gulp.task('bs-reload', () => {
  browserSync.reload();
})

gulp.task('watch', ['default', 'browsersync'], () => {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/assets/**/*', ['assets']);
  gulp.watch('style/**/*.styl', ['stylus']);
  gulp.watch('dest/*.css', ['bs-reload']);
  gulp.watch('dest/*.html', ['bs-reload']);
});
