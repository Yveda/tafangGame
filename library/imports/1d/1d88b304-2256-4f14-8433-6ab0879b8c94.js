"use strict";
cc._RF.push(module, '1d88bMEIlZPFIQzarCHm4yU', 'game-word');
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