
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

    onLoad () {
        //以后不只有一个关卡，这边先初始化一个关卡
        let level = cc.instantiate(this.levelPrefabs[0]);
        //把它放到当前的节点里面
        level.parent = this.node
    },

    start () {

    },

    // update (dt) {},
})
