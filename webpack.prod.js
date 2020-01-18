const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      //处理js
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
});
