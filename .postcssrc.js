const path = require('path')

module.exports = {
  plugins: [
    //require('stylelint'),
    require('postcss-import')({
      path: [path.resolve(__dirname, 'node_modules')]
    }),
    require('postcss-modular-scale'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-cssnext'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-automath')
  ]
}
