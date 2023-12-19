module.exports = {
    plugins: [
       require('autoprefixer'),
       require('cssnano')({ preset: 'default' }),
       require('postcss-purifycss')({
         content: ['**/*.html', '**/*.js'],
         whitelist: ['whitelisted-class'],
       }),
       require('stylelint'),
       require('prettier'),
    ],
};