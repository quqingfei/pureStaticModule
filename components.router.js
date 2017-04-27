module.exports = {
    /*head---start*/
    head:function(){
        return require.ensure(['./src/js/components/head/index.js'], function(require) {
            var head = require('./src/js/components/head/index.js');
            new head();
        });
    },
    /*alert img layer plugin---start*/
    dialog:function(img){
        return require.ensure(['./src/js/components/dialog/index.js'], function(require) {
            var Dialog = require('./src/js/components/dialog/index.js');
            new Dialog(img);
        });
    }
}