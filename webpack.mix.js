// https://laravel-mix.com/docs/3.0/installation
// https://tailwindcss.com/docs/guides/laravel

let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .sass('src/scss/styles.scss', 'css/styles.css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .setPublicPath('dist');