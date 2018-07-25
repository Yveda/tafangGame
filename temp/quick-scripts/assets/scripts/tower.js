(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tower.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9fdd4ZIPepMa5/y+GjTKR2Y', 'tower', __filename);
// scripts/tower.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    //升级塔的方法
    updateTower: function updateTower() {
        cc.log("update tower");
    },
    //卖掉塔的方法
    sellTower: function sellTower() {
        cc.log("sell tower");
    },
    start: function start() {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=tower.js.map
        