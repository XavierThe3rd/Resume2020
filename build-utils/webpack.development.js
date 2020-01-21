module.exports = () => ({

  output: {
      filename: "develope.js"
  },
  module: {
      rules: [
        {
          test: /\.sa?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  });
