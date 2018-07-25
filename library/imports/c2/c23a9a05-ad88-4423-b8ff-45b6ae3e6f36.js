"use strict";
cc._RF.push(module, 'c23a9oFrYhEI7j/RbauPm82', 'global');
// scripts/global.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventListener = require('./event-listener');

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = global || {};
global.event = (0, _eventListener2.default)({});
exports.default = global;
module.exports = exports['default'];

cc._RF.pop();