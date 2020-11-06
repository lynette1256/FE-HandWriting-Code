import React from 'react'
function EventBus() {}
// 事件绑定
EventBus.prototype.on = function(name, callback) {
  // 如果没有事件对象，则新增一个
  if (!this._events) {
    this._events = Object.create(null);
  }

  // 如果没有这个事件的订阅，则新增一个，如果有，则push进去
  if (!this._events[name]) {
    this._events[name] = [callback];
  } else {
    this._events[name].push(callback);
  }
}

// 发布执行订阅方法,如果有该事件，则循环执行所有订阅方法
EventBus.prototype.emit = function(name, ...args) {
  if (this._events[name]) {
    this._events[name].forEach(callback => {
      callback(...args);
    })
  }
}

// 事件清除
EventBus.prototype.off = function(name) {
  if (this._events[name]) {
    delete this._events[name];
  }
}

// 事件只触发一次
EventBus.prototype.once = function(name, callback) {
  // 事件执行一次，然后清除
  let once = (...args) => {
    callback(...args);
    this.off(name);
  }
  this.on(name, once);
}


// -------------------------测试-------------------------
let eventBus = new EventBus();

eventBus.on('on', function (msg) {
  console.log(msg);
 })
 eventBus.once('once', function (msg) {
  console.log(msg);
 })
 eventBus.on('off', function (msg) {
  console.log(msg);
 })
 eventBus.emit('on', '发布on1')//发布on1
 eventBus.emit('on', '发布on2')//发布on2
 eventBus.emit('once', '发布once')//发布once
 eventBus.emit('once', '发布once')
 eventBus.emit('off', '发布off')//发布off
 eventBus.off('off')
 eventBus.emit('off', '发布off')

// 发布on1
// 发布on2
// 发布once
// 发布off