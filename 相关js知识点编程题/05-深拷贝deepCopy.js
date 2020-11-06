
// 浅拷贝
var shallowCopy = function(obj) {
	if (typeof obj !== 'object') return obj;
	var newObj = obj instanceof Array ? [] : {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}


// 深拷贝 简易版
var　deepCopy = function(obj) {
	if (typeof obj !== 'object') return obj;
	var newObj = obj instanceof Array ? [] : {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = (typeof obj[key] === 'object') ? deepCopy(obj[key]) : obj[key];
		}
	}
	return newObj;
}


// 方法一 
// 不能解决循环引用的问题，同时不能复制函数、undefined、null等情况
let copytObj = JSON.parse(JSON.stringify(obj));

// 改进版二
const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;
// 判断是不是函数、对象

const deepCopy2 = (target, map = new Map()) => {
	// 使用Map 记录已经拷贝过的对象，如果已经拷贝过，则直接返回，用来解决循环引用问题
	if (map.get(target)) return target;
	if (isObject(target)) {
		map.set(target, true);
		const cloneTarget = Array.isArray(target) ? [] : {};
		for (let key in target) {
			if (target.hasOwnProperty(key)) {
				cloneTarget[key] = deepCopy2(target[key], map);
			}
		}
		return cloneTarget;
	} else {
		return target;
	}
}


