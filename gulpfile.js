const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rollup = require('rollup');
const replace = require('rollup-plugin-replace');
const coffee = require('rollup-plugin-coffee-script');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

gulp.task('css', () => {
    return gulp.src('./node_modules/marvina-carousel/dist/css/marvina-carousel.min.css')
    .pipe(gulp.dest('./dist/css'));
});

const banner = `/*!
 * Marvina Carousel React
 * version: ${pkg.version}
 *  author: ${pkg.author.name} <${pkg.author.email}>
 * website: ${pkg.author.url}
 *  github: ${pkg.repository.url}
 * license: ${pkg.license}
 */
`;
gulp.task('bundle', async () => {
    const bundle = await rollup.rollup({
        input: './src/index.coffee',
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            nodeResolve({
                extensions: ['.js', '.coffee']
            }),
            commonjs({
                include: [
                    'node_modules/**',
                ],
                namedExports: {
                    'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement']
                }
            }),
            coffee(),
            babel({
                extensions: ['.js', '.coffee'],
                presets: [
                    ['@babel/preset-env'],
                    '@babel/preset-react'
                ]
            }),
        ]
    });

    await bundle.write({
        banner,
        file: 'dist/js/marvina-carousel.js',
        format: 'umd',
        name: 'MarvinaCarousel'
    });

    await bundle.write({
        banner,
        file: 'dist/js/marvina-carousel.common.js',
        format: 'cjs'
    });

    await bundle.write({
        banner,
        file: 'dist/js/marvina-carousel.esm.js',
        format: 'es',
    });
});

gulp.task('minify', () => {
    return gulp.src('dist/js/marvina-carousel.js')
    .pipe(uglify({
        output: {
            comments: /Marvina Carousel React/
        }
    }))
    .pipe(rename('marvina-carousel.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch-bundle', () => {
    return gulp.watch('./src/**', gulp.series('bundle'));
});

gulp.task('default', gulp.series('watch-bundle'));
gulp.task('build', gulp.series('css', 'bundle', 'minify'));