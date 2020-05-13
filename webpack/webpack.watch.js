/* eslint-disable prettier/prettier */
const path = require("path");
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = () => ({
    mode: 'watch',
    //entry: "./src/index.js",
    entry: {
        client: ['./src/index.js', hotMiddlewareScript]
        },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "../static/resume"),
        filename: "production.js"
    },
});