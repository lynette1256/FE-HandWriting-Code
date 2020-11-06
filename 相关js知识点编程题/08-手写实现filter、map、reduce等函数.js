<script>
// filter函数, 接收一个函数和可迭代对象，
// 函数的作用是对每个元素进行判断，返回true或者false
// 符合条件的，则压入栈中
Array.prototype.filter1 = function(fn) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		fn(this[i]) && newArr.push(this[i]);
	}
	return newArr;
}

let arr = [2, 4, 6, 8];
let arr1 = arr.filter1(function(item) {
	return item > 5;
})
console.log(arr1);


// map映射函数，返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
Array.prototype.map1 = function(fn) {
	let newArr = [];
	for(let i = 0; i < this.length; i++) {
		newArr.push(fn(this[i]));
	}
	return newArr;
}
var map1 = function(fn) {
	let newArr = [];
	for(let i = 0; i < this.length; i++) {
		newArr.push(fn(this[i]));
	}
	return newArr;
}

// reduce 函数接收一个函数作为累加器
// 数组中的每个值开始缩减，最终计算为一个值

Array.prototype.myReduse = function(callback, init) {
	init = init || null;
	const array = this;
	let pre, startIndex = 0;
	// 没有初始值 且数组为空 报错
	if(!init && array.length == 0) return console.log('空数组，没有初始值')；

	// 没有初始值 且数组长度为1 返回第一项，callback不执行
	if(!init && array.length == 1)
		return array[0];

	// 没有初始值，长度大于1 从第二项开始，prev 为第一项的值
	if(!init && array.length > 1) {
		pre = array[0];
		startIndex = 1;
	}

	// 有初始值 长度大于1 从第一项开始，pre = init
	if(init && array.length > 1) {
		pre = init;
	}
	for(let index = startIndex; index < array.length; index++) {
		// prev 始终当做回调函数的结果
		pre = callback(pre, array[index], index, array);
	}
		return pre;
}

	// reduce 方法实现 推荐！！！！！
	var reduce1 = function(reducer, init) {
		if (this.length === 0 && init === 0) {
			return console.log("数组为空")
		}
		for(let i = 0; i < this.length; i++) {
			init = reducer(init, this[i], i, this);
		}
		return init;
	}


	// find 方法，返回通过测试的数组的第一个元素值
	var find1 = function(fn) {
		for(let i = 0; i < this.length; i++) {
			if(fn(this[i])) return this[i];
		}
	}

	// some 方法，依次执行数组的每一个元素
	// 如果有满足条件的，就返回true，并且剩余元素不在继续执行
	var some = function(fn) {
		for(let i = 0; i < this.length; i++) {
			if(fn(this[i])) {
				return true;
			}
		}
		return false;
	}

	// every 方法用于检测数组所有元素是否都符合指定条件
	var every1 = function(fn) {
		for(let i = 0; i < this.length; i++) {
			if(!fn(this[i])) {
				return false;
			}
		}
		return true;
	}

</script>

