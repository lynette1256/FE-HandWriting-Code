import React from 'react';
// 创建型 工厂模式、单例模式、原型模式
// 结构型 装饰器模式、适配器模式、代理模式
// 行为型 策略模式、观察者模式、迭代器模式

// 1. 工厂模式
// 工厂模式定义了一个用于创建对象的接口，接口由子类决定实例化哪一个类
// 该模式使得一个类实例化推迟到子类，子类可以重写接口方法以便创建时指定自己的对象类型
class Product {
	constructor(name) {
		this.name = name;
	}
	init() {
		console.log('init');
	}
	func() {
		console.log('fun');
	}
}
// 类实例化推迟到子类！！！
class Factory {
	create(name) {
		return new Product(name);
	}
}
// 使用！！！
let factory = new Factory()
let p = factory.create('p1');
p.init()
p.func();

// 2. 单例模式
// 保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 先判断实例是否存在，如果存在直接返回，不存在就创建后返回
class CreateUser {
	constructor(name) {
		this.name = name;
		this.getName();
	}
	// 添加到原型对象上
	getName() {
		return this.name;
	}
}

// 实现单例模式
var ProxyMode = (function() {
	// 闭包
	var instance = null;
	return function (name) {
		if (!instance) {
			instance = new CreateUser(name);
		}
		return instance;
	}
})();

var a = new ProxyMode('aaa');
var b = new ProxyMode('bbb');
console.log(a === b); // true
console.log(a)  // CreateUser { name: 'aaa' }
console.log(b)  // CreateUser { name: 'aaa' }


// 3. 适配器模式
// 提供一个不一样的接口
class Plug {
  getName() {
    return 'iphone充电头';
  }
}

class Target {
  constructor() {
    // 将Plug类封装在里面
    this.plug = new Plug();
  }
  // 外面嵌套一层
  getName() {
    return this.plug.getName() + ' ' + '适配器';
  }
}

let target = new Target();
console.log(target.getName());

// 4. 装饰者模式
class Cellphone {
  // 直接创建的函数 挂载在原型上
  create() {
    console.log('生成一个手机')
  }
}

class Decorator {
  constructor(name) {
    this.cellphone = name;
  }
  // 未声明的方法或者变量在原型链上
  create() {
    this.cellphone.create();
    this.createShell(cellphone)
  }
  createShell() {
    console.log('生成手机壳')
  }
}
let cellphone = new Cellphone();
cellphone.create();
console.log(cellphone); // 生成一个手机
console.log('-------------');
let dec = new Decorator(cellphone);
dec.create();  
// 生成一个手机
// 生成一个手机壳


// 5. 观察者模式
// 保存状态，状态变化后触发所有观察者对象
class Publisher {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  // 通知所有的对象，进行更新操作
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }

  add(observer) {
    this.observers.push(observer);
  }
}


class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.add(this) 	// 添加订阅者到订阅队列
  }
  update(subject) {
  	this.state = subject.getState();
  }
}


let s = new Publisher()
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
console.log(o1, o2);



// 6. 策略模式
// 将算法使用与算法实现分离开来， 
// 策略类（可变） 封装了具体的算法
// 环境类（不变） 接受客户请求，将请求委托给策略类

// 策略类
var levelObj = {
	'A': function (money) {
		return money * 4;
	},
	'B': function (money) {
		return money * 5;
	},
	'C': function (money) {
		return money * 6;
	}
};
// 环境类
var calculate = function(level, money) {
	return levelObj[level](money);
}
console.log(calculate('A', 100));

// 7. 代理模式
// 为对象提供一个代用品或者占位符，以便控制对它的访问
// 使用虚拟代理实现图片懒加载

var imgFunc = (function() {
	var imgNode = document.createElement('img');
	document.body.appendChild(imgNode);
	return {
		setSrc: function(scr) {
			imgNode.src = src;
		}
	}
})();

var proxyImage = (function() {

})
