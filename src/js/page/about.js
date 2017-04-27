//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/about.less");
var router = require('../../../components.router.js');
/*head---start*/
router.head();
/*head---end*/
$('#about').html('这是一个关于webpack构建工程的栗子');