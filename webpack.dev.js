let merge = require('webpack-merge')
let common = require('./webpack.common')

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
})