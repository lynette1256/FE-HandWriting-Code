
//	如何判断原型和实例的关系
//	使用instanceOf方法
	alert(instance instanceof Object);//true
	alert(instance instanceof Father);//true
	alert(instance instanceof Son);//true

// 使用 isPrototypeOf() 方法
	alert(Object.prototype.isPrototypeOf(instance));//true
	alert(Father.prototype.isPrototypeOf(instance));//true
	alert(Son.prototype.isPrototypeOf(instance));//true


var s = new Object('1');
s.toString();
s = null;

function Parent () {
  this.name = 'parent'
}
function Child () {
  this.sex = 'boy'
}
Child.prototype = new Parent()
var child1 = new Child()