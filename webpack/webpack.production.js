const path = require('path')

module.exports = () => ({
  mode: 'production',
  devtool: 'nosource-source-map',
  entry: "./src/index.js",
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "../dist/resume"),
    filename: 'production.js'
  },
})