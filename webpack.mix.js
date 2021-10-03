const mix = require("laravel-mix");

require("dotenv").config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your WordPlate applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JavaScript files.
 |
 */

const theme = process.env.WP_DEFAULT_THEME;

mix.setResourceRoot("../");

mix.setPublicPath(`public/themes/${theme}/assets`);

mix
  .js("resources/scripts/app.js", "dist")
  .js("resources/scripts/nav.js", "dist");

mix.sass("resources/styles/app.scss", "dist");

mix.copyDirectory("resources/fonts", `public/themes/${theme}/fonts`);
mix.copyDirectory("resources/icons", `public/themes/${theme}/icons`);
