
	// 实现call， 使用一个指定的this 和 若干的参数
	func.call(thisArg, arg1, arg2,...,arg4) 
	// 简陋版
	var call = function (context) {
		context.fn = this;
		context.fn();
		delete context.fn;
	}
	//  终极版实现call
	var call = function (context) {
		context = context || window;
		context.fn = this;
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args.push('arguments[' + i + ']');
		}
		var result = eval('context.fn(' + args + ')');
		delete context.fn;
		return result;
	}

	// 使用es6语法
	var call2 = function (context) {
		context = context || window;
		context.fn = this;
		const args = [...arguments].slice(1);
		const result = context.fn(...args);
		delete context.fn;
		return result;
	}

	//--------------------------------------------------
	// apply 模拟实现
	var apply = function (context, arr) {
		var context = context || window;
		context.fn = this;
		var result;
		if (!arr) {
			result = context.fn();
		} else {
			var args = [];
			for (var i = 0; i < arr.length; i++) {
				args.push('arr[' + i + ']');
			}
			result = eval('context.fn(' + args + ')');
		}
		delete context.fn;
		return result;
	}

	// 使用es6语法
	let apply = function (context, arr) {
		context = context || window;
		context.fn = this;
		let result;
		if (!arr) result = context.fn();
		result = context.fn(...arr);
		delete context.fn;
		return result;
	}



	// ---------------------------------------------------------
	// bind实现 简化版
	var bind = function (context) {
		var self = this;
		return function () {
			return self.apply(context);
		}
	}
	// bind第二版
	// 
	var bind2 = function (context) {
		var self = this;
		var args = Array.prototype.slice.call(arguments, 1);
		return function () {	// 调用时，可以在后面再传入参数
			var bindArgs = Array.prototype.slice.call(arguments);
			return self.apply(context, args.concat(bindArgs));
		}
	}

	// bind最终版
	// 判断是否使用new调用bind返回的函数，则bind失效，如果使用new调用，则直接返回想要绑定的对象，否则返回对象应用函数的终值
	var bind2 = function (context) {
		var self = this;
		var context = arguments[0] || window;
		var args = Array.prototype.slice.call(arguments, 1);
		var fBound = function () {
			var bindArgs = Array.prototype.slice.call(arguments);
			return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
		}

		fBound.prototype = this.prototype;
		return fBound;
	}
	
	// 第三版 参考这版
	var bind2 = function () {
		var self = this;
		var context = arguments[0] || window;
		var args = [].slice.call(arguments, 1);
		var fBound = function () {
			var bindArgs = [].slice.call(arguments);
			if (this instanceof fBound) {
				self.apply(this, args.concat(bindArgs));
			} else {
				self.apply(context, args.concat(bindArgs));
			}
		}
		return fBound;
	}	


	// 使用es6实现 推荐这版！！！！！！
	let bind3 = function() {
		let self = this;
		let context = arguments[0] || window;
		let args = Array.prototype.slice.call(arguments, 1);
		let fBound = function () {
			let bindArgs = Array.prototype.slice.call(arguments);
			if (this instanceof fBound) {
				self.apply(this, args.concat(bindArgs));
			} else {
				self.apply(context, args.concat(bindArgs));
			}
		}
		return fBound;
	}
