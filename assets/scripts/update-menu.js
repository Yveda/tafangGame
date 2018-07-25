import global from './global';

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    buttonClick: function (event,coustomData) { 
        cc.log("button click = " + coustomData );
        //发送消息和自定义的参数，然后在level.js里面接收这个消息，并实现方法
        global.event.fire(coustomData + "_tower")
    },
    start () {

    },

    // update (dt) {},
});
