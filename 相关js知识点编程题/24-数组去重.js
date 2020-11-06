
	// 双重循环
	function unique(array) {
		// 用来存储结果
		var res = [];
		for(var i = 0, arrayLen = array.length; i < arrayLen; i ++) {
			for(var j = 0, resLen = res.length; j < resLen; j ++) {
				// 如果当前array[i]的值与结果中存放的值相等，则跳过当前的array[i]
				if (array[i] === res[j]) {
					break;
				}
			}
			// 如果res结果数组遍历到尾部，则说明array[i]不再res结果数组中，保存
			if(j === resLen) {
				res.push(array[i]);
			}
		}
		// 返回结果值
		return res;
	}

	// 使用indexOf简化内层循环
	function unique1(array) {
		var res = [];
		for (var i = 0, arrayLen = array.length; i < arrayLen; i ++) {
			var current = array[i];
			if (res.indexOf(current) === -1) {
				res.push(current);
			}
		}
		return res;
	}

	// 排序后去重
	function unique2(array) {
		var res = [];
		var sortedArray = array.concat().sort();
		var seen; 
		for (var i = 0, len = sortedArray.length; i < len; i ++) {
			// 如果是第一个元素，或者相邻元素不相等
			// 要严格不等于
			if (!i || seen !== sortedArray[i]) {
				res.push(sortedArray[i]);
			}
			seen = sortedArray[i];
		}
		return res;
	}

	// filter 简化外层循环 结合indexOf
	function unique3(array) {
		var res = array.filter(function(item, index, array) {
			// indexOf 用于检测元素在数组中第一次出现的位置
			return array.indexOf(item) === index;
		})
		return res;
	}

	// filter 简化外层循环 结合排序去重方法
	function unique4(array) {
		var sortedArray = array.concat().sort();
		var res = sortedArray.filter(function(item, index, array) {
			return !index || item !== array[index - 1] ;
		})
		return res;
	}

	// ES6 Map 数据结构 键值对
	function unique5(array) {
		var res = new Map();
		return array.filter((a) => !res.has(a) && res.set(a, 1));
	}
	
	// ES6 Set 数据结构 每个元素只出现一次
	function unique6(array) {
		var res = Array.from(new Set(array));
		return res;
	}

	// 可以化简为
	function unique6(array) {
		return [...new Set(array)]
	}

	// 使用object键值对
	function unique7(array) {
		var obj = {};
		return array.filter(function(item, index, array) {
			return obj.hasOwnProperty(typeof item + item) ? false : (obj[item] = true)
		})
	}
