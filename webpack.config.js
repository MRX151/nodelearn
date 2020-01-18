const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // mode:'production',
  entry: { 
    app: "./src/index.js" 
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot:true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      //处理样式文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //处理图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      //处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
