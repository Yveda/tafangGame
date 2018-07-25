"use strict";
cc._RF.push(module, '9fdd4ZIPepMa5/y+GjTKR2Y', 'tower');
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