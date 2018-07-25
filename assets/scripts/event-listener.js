/**
 * Created by chu on 2017/10/9 0009.
 */
const EventListener = function (obj) {
    let Register = {};
    obj.on = function (name, method) {
       //检查事件里面有没有注册的name
      if (!Register.hasOwnProperty(name)){
        //如果没有的话name等于一个列表
          Register[name] = [];
      }
      //列表里面push进入一个方法
      Register[name].push(method);
    }
    ;
     //后面还会传入其他参数
    obj.fire = function (name) {
       //事件注册表里面有木有注册的事件
      if (Register.hasOwnProperty(name)){
         //取出这个列表
        let handlerList = Register[name];
         //遍历这个列表
        for (let i = 0 ; i < handlerList.length ; i ++){
          //取出列表里面的一个方法
          let handler = handlerList[i];
          let args = [];
          //获取参数，遍历js一个方法的默认参数，他也是一个列表
          for (let j = 1 ; j < arguments.length ; j ++){
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
      if (Register.hasOwnProperty(name)){
        //如果有的话取出，handlerList表示方法列表
        let handleList = Register[name];
        for (let i = 0 ; i < handleList.length ; i ++){
          if (handleList[i] === method){
            //删掉他
            handleList.splice(i, 1);
          }
        }
      }
    };
    return obj;
  };
  export default EventListener;