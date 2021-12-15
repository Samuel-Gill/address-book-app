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
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: "style-loader", //3. Inject styles into DOM
          },
          {
            loader: "css-loader",  //2. Turns css into commonjs
          },
          {
            loader: "less-loader", //1. Truns less into css
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
};
