//加载模块css
require('./css/head.css');
//head加载模板
var html = require('./tmpl/head.html');

module.exports = function() {
	var $head = $(html).clone();
	$('.g-hd').append($head);
}