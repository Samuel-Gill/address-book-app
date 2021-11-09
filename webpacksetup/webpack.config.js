const path = require('path');
require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

 
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sass|less|css)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ],
    },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
},
plugins: [
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
],
devServer: {
    port: 3050,
},
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js',
//   },
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//   },
};
