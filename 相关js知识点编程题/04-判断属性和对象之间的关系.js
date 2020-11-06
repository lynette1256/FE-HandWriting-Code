
	var o = {x: 1};
	for(var key in arr) {
		console.log(arr[key]);
	}

	Object.keys(o) // 输出o的全部属性
	'x' in o; // true; 读取到原型上的属性
	o.hasOwnProperty(x);  // true 只读取实例上的属性
	