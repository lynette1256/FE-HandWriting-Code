
// 方法一：原型链继承				
	// 父类构造韩函数
	function Parent () {
	    this.name = 'kevin';
	}
	// 父类构造函数的原型
	Parent.prototype.getName = function () {
	    console.log(this.name);
	}
	// 子类构造函数
	function Child () {

	}
	// 子类的原型为父类的实例
	Child.prototype = new Parent();
	var child1 = new Child();
	console.log(child1.getName()) // kevin


// 存在的问题： 
// 1. 引用类型的属性被所有的实例共享
	function Parent () {
	    this.names = ['kevin', 'daisy'];
	}
	function Child () {}
	Child.prototype = new Parent();
	var child1 = new Child();
	child1.names.push('yayu');
	console.log(child1.names); // ["kevin", "daisy", "yayu"]
	var child2 = new Child();
	console.log(child2.names); // ["kevin", "daisy", "yayu"]

// 2. 在创建Child的实例时，不能向Parent传参

// -------------------------------------------

// 方法二：借用构造函数（经典继承）
	function Parent () {
	    this.names = ['kevin', 'daisy'];
	}

	function Child () {
		// 核心代码
	    Parent.call(this);
	}

	var child1 = new Child();

	child1.names.push('yayu');

	console.log(child1.names); // ["kevin", "daisy", "yayu"]

	var child2 = new Child();

	console.log(child2.names); // ["kevin", "daisy"]


// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
	function Parent (name) {
	    this.name = name;
	}

	function Child (name) {
	    Parent.call(this, name);
	}

	var child1 = new Child('kevin');

	console.log(child1.name); // kevin

	var child2 = new Child('daisy');

	console.log(child2.name); // daisy

// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

// -------------------------------------------

// 方法三：组合继承 !!!!!!推荐
	function Parent (name) {
	    this.name = name;
	    this.colors = ['red', 'blue', 'green'];
	}

	Parent.prototype.getName = function () {
	    console.log(this.name)
	}
	// 以上和原型链继承方式一样
	function Child (name, age) {

	    Parent.call(this, name);
	    
	    this.age = age;
	}

	Child.prototype = new Parent();
	Child.prototype.constructor = Child;

	var child1 = new Child('kevin', '18');
	child1.colors.push('black');

	console.log(child1.name); // kevin
	console.log(child1.age); // 18
	console.log(child1.colors); // ["red", "blue", "green", "black"]

	var child2 = new Child('daisy', '20');
	console.log(child2.name); // daisy
	console.log(child2.age); // 20
	console.log(child2.colors); // ["red", "blue", "green"]

// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

// -------------------------------------------
// 方式五：原型式继承
	function createObj(o) {
	    function F(){}
	    F.prototype = o;
	    return new F();
	}

// 缺点：
// 包含引用类型的属性值始终都会共享相应的值，
// 这点跟原型链继承一样。
	var person = {
	    name: 'kevin',
	    friends: ['daisy', 'kelly']
	}

	var person1 = createObj(person);
	var person2 = createObj(person);

	person1.name = 'person1';
	console.log(person2.name); // kevin

	person1.firends.push('taylor');
	console.log(person2.friends); // ["daisy", "kelly", "taylor"]

// 注意：修改person1.name的值，person2.name的值并未发生改变，
// 并不是因为person1和person2有独立的 name 值，
// 而是因为person1.name = 'person1'，
// 给person1添加了 name 值，并非修改了原型上的 name 值。


// -------------------------------------------

// 方式六：寄生式继承
// 创建一个用于封装继承过程的函数，
// 该函数在内部以某种形式来增强对象，最后返回对象

	function createObj (o) {
	    var clone = Object.create(o);
	    clone.sayName = function () {
	        console.log('hi');
	    }
	    return clone;
	}

// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。


// -------------------------------------------

// 方式四：寄生组合式继承
	function Parent (name) {
	    this.name = name;
	    this.colors = ['red', 'blue', 'green'];
	}

	Parent.prototype.getName = function () {
	    console.log(this.name)
	}
	// 以上定义方法与方式一：原型链继承一致
	function Child (name, age) {
	    Parent.call(this, name);
	    this.age = age;
	}

	// 关键的三步
	var F = function () {};

	F.prototype = Parent.prototype;

	Child.prototype = new F();


	var child1 = new Child('kevin', '18');

	console.log(child1);

// 这种方式的高效率体现它只调用了一次 Parent 构造函数，
// 并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
// 与此同时，原型链还能保持不变；
// 因此，还能够正常使用 instanceof 和 isPrototypeOf。
// 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

// es6 的继承

class B {
	constructor(opt) {
		this.BName = opt.name;
	}
}


class A extends B {
	constructor() {
		// 向父类传参
		super({ name: 'B'});
		// this 需要在super后面使用
		// 可以说 super 的作用是产生一个 this
		console.log(this)
	}
}

// 相当于
function Parent() {
}
function Child() {
	Parent.call(this);
}
Child.prototype = Object.create(Parent.prototype);


// create方法 实现
var create = function(obj) {
	function f() {};
	f.prototype = obj;
	f.prototype.constructor = f;
	return new f();
}


