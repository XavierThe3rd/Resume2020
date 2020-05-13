/* eslint-disable prettier/prettier */
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const modeConfiguration = env => require(`./webpack/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'development'}) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(   
        {       
          mode,
          optimization: {
              minimizer: [
                new UglifyJsPlugin({
                  cache: true,
                  parallel: true,
                  sourceMap: true, 
                  uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false
                  }
                }),
                new OptimizeCSSAssetsPlugin({})
              ]
            },
            resolve: {
              symlinks: false,
              extensions: ['.js', '.jsx', '.json', '.css'],
              alias: {
                'react': path.resolve(__dirname, 'node_modules/react'),
                'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
                'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom')
              }
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
                  {
                      test: /\.css$/,
                      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                    },
                    {
                      test: /\.(png|jpe?g|gif|pdf|webp)$/,
                      use: [
                        {
                          loader: 'file-loader',
                          options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[name].[ext]'
                          }
                        }
                      ]
                    },
                    {
                      test: /\.svg$/,
                      loader: 'svg-inline-loader'
                    }
              ],
              
          },
          plugins: [
              new HtmlWebpackPlugin({
                  template: "./public/index.html"
              }),
              new MiniCssExtractPlugin(),
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

