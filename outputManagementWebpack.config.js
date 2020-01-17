const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')

module.exports = {
  entry:{
    app1:'./src/index.js',
    print:'./src/print.js'
  },
  // devtool: 'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}