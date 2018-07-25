(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game-word.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1d88bMEIlZPFIQzarCHm4yU', 'game-word', __filename);
// scripts/game-word.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefabs: {
            //关卡预制件,是个列表
            default: [],
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //以后不只有一个关卡，这边先初始化一个关卡
        var level = cc.instantiate(this.levelPrefabs[0]);
        //把它放到当前的节点里面
        level.parent = this.node;
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=game-word.js.map
        