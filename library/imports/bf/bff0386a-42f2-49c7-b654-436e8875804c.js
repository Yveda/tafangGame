"use strict";
cc._RF.push(module, 'bff03hqQvJJx7ZUQ26IdYBM', 'build-menu');
// scripts/build-menu.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    buttonClick: function buttonClick(event, customData) {
        cc.log("button click" + customData);
        _global2.default.event.fire("build_tower", customData);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();