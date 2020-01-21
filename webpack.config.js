const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

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
                        test: /\.(png|jpe?g|gif)$/,
                        loader: 'react-native-web-image-loader?name=[name].[ext]&scalings[@2x]=2&scalings[-3x]=3'
                    },

                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },

                    {
                        test: /\.svg$/,
                        loader: 'svg-inline-loader'
                    },

                    {
                        test: /\.(png|jpe?g|gif)$/,
                        loader: 'react-native-web-image-loader?name=[hash].[ext]'
                    },
                    
                    {
                    test: /\.json$/,
                    loader: 'json-loader'
                    },
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