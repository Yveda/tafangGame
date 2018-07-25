"use strict";
cc._RF.push(module, '63f56mpTg1M6pCRBt8NHwAZ', 'update-menu');
// scripts/update-menu.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    buttonClick: function buttonClick(event, coustomData) {
        cc.log("button click = " + coustomData);
        //发送消息和自定义的参数，然后在level.js里面接收这个消息，并实现方法
        _global2.default.event.fire(coustomData + "_tower");
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();