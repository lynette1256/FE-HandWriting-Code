
	var instanceof = function(left, right) {
		var rightProto = right.prototype;
		var left = left.__proto__;
		while(true) {
			if(left === null) {
				return false;
			}
			if(left === rightProto) {
				return true;
			}
			left = left.__proto__;
		}
	}
	// 主要实现原理，右边变量的prototype在左边变量的原型链上即可
	let nicole = new person();
	nicole instanceof person; // true

// ---------------------------------------------
// es6 写法 
const myInstanceOf = function(left, right) {
	// 基本类型判断，返回false
	if (typeof left !== 'object' || left === null) return false;
	let leftProto = Object.getPrototypeOf(left);
	let rightProtoType = right.prototype;
	while(true) {
		if (leftProto === null) 
			return false;
		if (leftProto === rightProtoType.prototype) 
			return true;
		leftProto = Object.getPrototypeOf(leftProto);
	}
}
