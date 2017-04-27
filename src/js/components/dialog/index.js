//加载模块css
require('./css/dialog.css');
//加载模板
var html = require('./tmpl/dialog.html');

module.exports = function(img) {
	var $dialog = $(html).clone();
	$dialog.find('img').attr('src',img);
	$dialog.find('.close').on('click', function() {
		$dialog.fadeOut(function() {
			$(this).remove();
		});
	});
	$('body').append($dialog);
	$dialog.fadeIn();
}