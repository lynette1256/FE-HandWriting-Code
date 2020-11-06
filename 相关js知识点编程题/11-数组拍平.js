
	// 方法一：递归 循环数组元素，遇到数组则递归调用
	var arr = [1, [2, [3, 4]]];
	function flatten(arr) {
		var result = [];
		for (var i = 0; i < len; i++) {
			if (Array.isArray(arr[i])) {
				// push 会改变原数组，方法无返回
				// concat 不会改变原数组，而是返回一个新数组，
				result = result.concat(flatten(arr[i]));
			} else {
				result.push(arr[i]);
			}
		}
		return result;
	}

	// 方法二： toString 方法
	var arr = [1, [2, [3, 4]]];
	function flatten1(arr) {
		return arr.toString().split(',').map(function(item) {
			return +item;
		})
	}


	// 方法三：reduce数组
	var　arr = [1, [2, [3, 4]]];
	function flatten(arr) {
		return arr.reduce(function(prev, next) {
			return prev.concat(Array.isArray(next) ? flatten(next) : next)
		}, [])
	}
	console.log(flatten(arr));

	// 方法四：ES6...扩展符
	var arr = [1, [2, [3, 4]]];
	function flatten(arr) {
		while (arr.some(item => Array.isArray(item))) {
			arr = [].concat(...arr);
		}
		return arr;
	}

	// 方法五: flat() Infinity 不知道具体深度，可以实现完全扁平
	// 返回一个新数组，不会修改原数组
	// 还可移除数组中的空位
	var arr = [1, [2, [3, 4]]];
	arr.flat(Infinity);
