import gulp from "gulp";
import scss from "gulp-scss";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import del from "del";

scss.compiler = require("node-sass");

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
        .pipe(scss().on("error", sass.logError))
        .pipe(autoprefixer({
            flexbox: true,
            gird: "autoplace"
        }))
        .pipe(minify())
        .pipe(gulp.dest(routes.css.dest));

const watch = () =>
        gulp.watch(routes.css.watch, styles);