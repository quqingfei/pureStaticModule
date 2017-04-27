var webpack = require('webpack');
var baseConfig = require('./webpack.config.js');

baseConfig.plugins.push(
	new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
)

module.exports = baseConfig;