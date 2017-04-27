//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/index.less");
var router = require('../../../components.router.js');

$('.g-bd').append('<p class="text">这是由js生成的一句话。</p>');

/*head---start*/
router.head();
/*head---end*/

//event object
$('.btn').click(function() {
	openimg();
});
$('.g-bd .img').click(function(event) {
	openimg($(this).find('img').attr('src'));
});

/*alert img layer plugin---start*/
function openimg(img){
	router.dialog(img);
}
/*alert img layer plugin---end*/