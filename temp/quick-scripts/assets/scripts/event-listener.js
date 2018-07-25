(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/event-listener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0fc91OwOHFGt7FV0cE35Xa3', 'event-listener', __filename);
// scripts/event-listener.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by chu on 2017/10/9 0009.
 */
var EventListener = function EventListener(obj) {
  var Register = {};
  obj.on = function (name, method) {
    //检查事件里面有没有注册的name
    if (!Register.hasOwnProperty(name)) {
      //如果没有的话name等于一个列表
      Register[name] = [];
    }
    //列表里面push进入一个方法
    Register[name].push(method);
  };
  //后面还会传入其他参数
  obj.fire = function (name) {
    //事件注册表里面有木有注册的事件
    if (Register.hasOwnProperty(name)) {
      //取出这个列表
      var handlerList = Register[name];
      //遍历这个列表
      for (var i = 0; i < handlerList.length; i++) {
        //取出列表里面的一个方法
        var handler = handlerList[i];
        var args = [];
        //获取参数，遍历js一个方法的默认参数，他也是一个列表
        for (var j = 1; j < arguments.length; j++) {
          args.push(arguments[j]);
        }
        //引用运行
        handler.apply(this, args);
      }
    }
  };
  //注销
  obj.off = function (name, method) {
    //检测注册表里面有没有这个方法
    if (Register.hasOwnProperty(name)) {
      //如果有的话取出，handlerList表示方法列表
      var handleList = Register[name];
      for (var i = 0; i < handleList.length; i++) {
        if (handleList[i] === method) {
          //删掉他
          handleList.splice(i, 1);
        }
      }
    }
  };
  return obj;
};
exports.default = EventListener;
module.exports = exports["default"];

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
        //# sourceMappingURL=event-listener.js.map
        