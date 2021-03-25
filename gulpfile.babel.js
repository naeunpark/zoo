import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import del from "del";

sass.compiler = require("node-sass");

const routes = {
    css: {
        watch: "src/scss/*",
        src: "src/scss/styles.scss",
        dest: "dist/css"
    }
};

const styles = () => 
    gulp
        .src(routes.css.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            flexbox: true,
            gird: "autoplace"
        }))
        .pipe(minify())
        .pipe(gulp.dest(routes.css.dest));

const watch = () => 
        gulp.watch(routes.css.watch, styles);

const clean = () =>
        del([routes.css.dest]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.series([watch]);

export const dev = gulp.series([prepare, assets, live]);