const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    
    return webpackMerge(
        
        {       
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true,
                historyApiFallback: true           
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            module: {
                rules: [

                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },                
                    {
                    test: /\.json$/,
                    loader: 'json-loader'
                    },
                    { 
                    test: /\.(woff|woff2|eot|ttf|otf)$/, 
                    loader: 'url-loader?limit=100000' 

                    }
                ],
                
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        },
        modeConfiguration(mode)
    );
};