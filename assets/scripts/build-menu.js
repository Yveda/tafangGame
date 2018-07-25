import global from './global';

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    buttonClick: function(event,customData) {
        cc.log("button click" + customData);
        global.event.fire("build_tower",customData);
    },
    start () {

    },

    // update (dt) {},
});
