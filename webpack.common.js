const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
      filename:'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      //处理js
    //   {
    //     test:/\.js$/,
    //     exclude:/(node_modules|bower_components)/,
    //     use:{
    //         loader:'babel-loader',
    //         options:{
    //             presents:['@babel/preset-env']
    //         }    
    //     }
    //   },
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
