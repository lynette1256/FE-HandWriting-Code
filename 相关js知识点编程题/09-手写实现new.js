
    // new实现了哪些功能
    // 1. 创建了一个全新的对象
    // 2. 这个对象会被执行[[Prototype]]链接
    // 3. 生成的新对象会绑定到函数调用的this上
    // 4. 通过new创建的每个新对象最终被[[prototpye]]
    //    链接到函数的prototype对象上
    // 5. 如果函数中没有返回对象类型，则new表达式
    // 中的函数调用会自动返回这个新对象
 
    // 第一版
    var newFun1 = function() {
    	var obj = new Object();
    	// 取出第一个参数，即为我们要传入的构造函数
    	// shift 会修改原来的数组
    	// 所以arguments会被去除第一个参数
    	var Constructor = [].shift.call(arguments);
    	// 将obj的原型指向构造函数，这样obj可以访问到构造函数原型中的属性
    	obj.__proto__ = Constructor.prototype;
    	// 使用apply，改变构造函数this的指向到新建的对象
    	// 这样obj可以访问到构造函数中的属性
    	Constructor.apply(obj, arguments);
    	return obj;
    }


  	// 第二版  ！！！！！参考这版本
	var newFun2 = function() {
		var obj = new Object();
		var Constructor = [].shift.call(arguments);
		obj.__proto__ = Constructor.prototype;
		var ret = Constructor.apply(obj, arguments);
		return typeof ret === 'Object' ? ret : obj;
	}
// ------------------------------------------------------

