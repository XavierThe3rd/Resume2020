const path = require('path')

module.exports = () => ({
  mode: 'development',
  entry: "./src/index.js",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 9000           
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "resume"),
    filename: 'develope.js'
  },
})