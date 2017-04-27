var baseConfig = require('./webpack.config.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

baseConfig.plugins.push(addhtml('index.html',['vendors', 'index']));
baseConfig.plugins.push(addhtml('list.html',['vendors', 'list']));
baseConfig.plugins.push(addhtml('about.html',['vendors', 'about']));
baseConfig.plugins.push(allPullAway(['index','list','about']));
//html生成器 /页面生成配置
function addhtml (html,arr) {
	return new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			filename: './view/'+html, //生成的html存放路径，相对于path
			template: './src/view/'+html, //html模板路径
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			hash: '[hash:8]', //为静态资源生成hash值
			chunks: arr,//需要引入的chunk，不配置就会引入所有页面的资源
			minify: { //压缩HTML文件	
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		})
}
//js抽离公共模块
function allPullAway(arr){
	return new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
			chunks: arr,//提取哪些模块共有的部分
			minChunks:3// 提取至少3个模块共有的部分
		})
}

module.exports = baseConfig;