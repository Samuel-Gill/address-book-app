const path = require('path');
require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
        // use: ['babel-loader'],
        // options: {

        //   presets: ['@babel/preset-env'],
        //   plugins: ['@babel/plugin-transform-runtime']
        // }
        // options: {
        //   presets: ['react']
        // }
      },
      {
        test: /\.(sass|less|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  target: ["web", 'es5'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    // publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 3050,
    historyApiFallback: true,
  },
  //   output: {
  //     path: path.resolve(__dirname, './dist'),
  //     filename: 'bundle.js',
  //   },
  //   devServer: {
  //     static: path.resolve(__dirname, './dist'),
  //   },
};
