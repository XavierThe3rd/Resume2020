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
                historyApiFallback: true,
                //port: 9000           
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "Resume"),
                filename: "bundled.js"
            },
            module: {
                rules: [

                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: "babel-loader"
                            },
                            {                              
                                //test: /\.(woff|woff2|eot|ttf|otf|png|svg|pdf)$/, 
                                loader: 'eslint-loader',
                                options: {fix: true}                        
                            }
                        ]
                        
                    },                
                    {
                    test: /\.json$/,
                    loader: 'json-loader'
                    },
                    { 
                    test: /\.(woff|woff2|eot|ttf|otf)$/, 
                    loader: 'url-loader?limit=100000' 
                    },
                ],
                
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                new webpack.DefinePlugin({
                    'process.env': {
                      'NODE_ENV': JSON.stringify('production')
                    }
                }),
            ]
        },
        modeConfiguration(mode)
    );
};