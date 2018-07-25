"use strict";
cc._RF.push(module, 'af8e16XzFhH0YUoKhINO+wk', 'level');
// scripts/level.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//状态机
var TowerPosNodeState = {
    //里面可以避免出现0
    //不可用状态
    Invalid: -1,
    Null: 1,
    BuildMenu: 2,
    Tower: 3,
    UpdateMenu: 4 //升级塔的菜单
};
cc.Class({
    extends: cc.Component,

    properties: {
        //敌人的路径
        enemyPathNodePos: {
            default: [],
            type: cc.Node
        },
        //塔的位置节点
        towerPosNodes: {
            default: [],
            type: cc.Node
        },
        //菜单预制件，（前面写功能，后面写类型）
        buildMenuPrefab: {
            default: null,
            type: cc.Prefab
        },
        //塔的预制件
        towerPrefabs: {
            default: [],
            type: cc.Prefab
        },
        updateMenuPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        for (var i = 0; i < this.towerPosNodes.length; i++) {
            var node = this.towerPosNodes[i];
            //最开始的时候给节点设置Null的状态
            this.setState(node, TowerPosNodeState.Null);
            //抽象出来的一个方法
            this.setTouchEvent(node);
        }
        //全局变量,on一个建造塔的消息
        _global2.default.event.on("build_tower", this.buildTower.bind(this));
        //接收升级塔的操作，并执行函数
        _global2.default.event.on("update_tower", this.updateTower.bind(this));
        //接收卖掉塔的操作，并执行函数
        _global2.default.event.on("sell_tower", this.sellTower.bind(this));
    },

    setTouchEvent: function setTouchEvent(node) {
        var _this = this;

        //点击事件
        node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("touch node name = " + event.target.name);
            //只有当node之前的状态为null的时候，显示当前节点菜单
            if (node.state === TowerPosNodeState.Null) {
                _this.showBuildMenu(event.target);
                //当塔的状态为Tower的时候显示升级菜单
            } else if (node.state === TowerPosNodeState.Tower) {
                _this.showUpdateMenu(event.target);
            }
        });
    },
    //显示菜单
    showBuildMenu: function showBuildMenu(node) {
        //显示菜单之前先关闭菜单
        this.closeMenu();
        //初始化预制件
        var menu = cc.instantiate(this.buildMenuPrefab);
        //菜单的父节点等于当前节点
        menu.parent = this.node;
        //设置位置，也就是父节点的位置
        menu.position = node.position;
        //设置菜单出来后的状态
        this.setState(node, TowerPosNodeState.BuildMenu);
        node.menu = menu;
    },
    //显示升级菜单函数，主体是node，以level层作为父节点
    showUpdateMenu: function showUpdateMenu(node) {
        //关掉建造菜单
        this.closeMenu();
        //新建一个升级菜单预制件实例
        var menu = cc.instantiate(this.updateMenuPrefab);
        //父节点设置为node
        menu.parent = this.node;
        menu.position = node.position;
        //设置node状态为 升级菜单状态
        this.setState(node, TowerPosNodeState.UpdateMenu);
        //node的升级菜单就等于 这个实例的升级菜单
        node.menu = menu;
    },
    //关掉菜单
    closeMenu: function closeMenu() {
        //找到建造菜单是在哪个上面，遍历放置塔的节点的列表
        for (var i = 0; i < this.towerPosNodes.length; i++) {
            //取出节点
            var node = this.towerPosNodes[i];
            //检查他的状态，并关掉
            if (node.state === TowerPosNodeState.BuildMenu) {
                // buildMenu指的是预制件，BuildMenu指的是状态机属性
                node.menu.destroy();
                //设置节点状态为null
                this.setState(node, TowerPosNodeState.Null);
                //直接返回找到的节点
                return node;
            };
            if (node.state === TowerPosNodeState.UpdateMenu) {
                node.menu.destroy();
                this.setState(node, TowerPosNodeState.Tower);
                return node;
            }
        }
    },
    //设置状态机函数,这里指节点的状态
    setState: function setState(node, state) {
        //上次设置的状态与当前的状态是相等的，就返回,避免重复设置状态现象
        if (node.state === state) {
            return;
        }
        switch (state) {
            case TowerPosNodeState.Null:
                break;
            case TowerPosNodeState.BuildMenu:
                break;
            default:
                break;
        }
        node.state = state;
    },
    //实现建造塔的消息
    buildTower: function buildTower(data) {
        //检测事件监听器是否监听成功
        cc.log("build tower" + data);
        //建造塔之前先关闭建造菜单,直接取到返回的节点
        var node = this.closeMenu();
        //然后就可以在这里创建一个塔
        var tower = cc.instantiate(this.towerPrefabs[data]);
        //塔的父节点设置成这个节点
        tower.parent = this.node;
        //塔的位置
        tower.position = node.position;
        //建造完塔之后，设置节点的状态
        this.setState(node, TowerPosNodeState.Tower);
        //给他附上值，方便控制
        node.tower = tower;
    },
    //on消息之后就要去off,关闭这个消息，或者说关闭这个函数
    onDestroy: function onDestroy() {
        _global2.default.event.off("build_tower", this.buildTower);
    },
    //实现升级塔的方法
    updateTower: function updateTower() {},
    //实现卖掉塔的方法
    sellTower: function sellTower(param) {
        //第一步，关闭menu
        var node = this.closeMenu();
        取出需要关闭closeMenu的那个节点;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();