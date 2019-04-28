import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import sassglob from 'gulp-sass-glob'
import sourcemaps from 'gulp-sourcemaps'

function styles() {
    return gulp
        .src('./site/ui/styles/application.sass')
        .pipe(sassglob())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] }), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./site/dist/styles/'))
}

module.exports = { styles }
