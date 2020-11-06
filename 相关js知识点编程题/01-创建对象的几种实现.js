
	// 方式一：工厂模式
	// 缺点：对象无法识别，所有实例指向一个原型
	function createPerson (name) {
		var o = new Object();
		o.name = name;
		o.getName = function () {
			console.log(this.name);
		}
		return o;
	}
	var person1 = createPerson('kevin');

	// 方式二：构造函数模式
	// 优点：实例可以识别为一个特定的类型
	// 缺点：每次创建实例时，每个方法都要被创建一次
	function Person(name) {
		this.name = name;
		this.getName = function () {
			console.log(this.name);
		}
	}
	var person2 = new Person('kevin');

	// 方式二优化：构造函数模式优化
	// 优点：解决了每个方法都要被重新创建的问题
	// 缺点：封装的不彻底
	function Person(name) {
		this.name = name;
		this.getName = getName;
	}
	function getName() {
		console.log(this.name);
	}
	var person21 = new Person('kevin');


	// 方式三：原型模式
	// 优点：方法不会重新创建
	// 缺点：1.所有属性和方法都共享，2.不能初始化参数
	function Person() {}
	Person.prototype.name = 'kevin';
	Person.prototype.getName = function () {
		console.log(this.name);
	}
	var person3 = new Person();


	// 方式三优化：原型模型优化
	// 优点：封装性增强
	// 缺点：重写原型，丢失constructor属性
	function Person() {}
	Person.prototype = {
		name: 'kevin',
		getName: function() {
			console.log(this.name);
		}
	}
	var person31 = new Person();

	// 方式三优化：原型模式优化
	// 优点：实例可以通过constructor属性找到所属构造函数
	// 缺点：原型模式缺点没有解决
	function Person(name) {}
	Person.prototype = {
		constructor: Person,// 通过constructor属性找到所属构造函数
		name: 'kevin',
		getName: function() {
			console.log(this.name);
		}
	}
	var person32 = new Person();


	// 方式四：组合模式
	// 构造函数与原型模式结合
	// 优点：该共享的共享，该私有的私有
	// 缺点：封装性一般
	function Person(name) {
		this.name = name;
	}

	Person.prototype = {
		constructor: Person,
		getName: function () {
			console.log(this.name);
		}
	};
	var person4 = new Person();

	// 方式五：动态原型模式
	function Person(name) {
		this.name = name;
		if (typeof this.getName !== 'function') {
			Person.prototype.getName = function () {
				console.log(this.name);
			}
		}
	}
	var person41 = new Person();

	// 方式五优化：寄生构造函数模式
	// 寄生构造函数模式在工厂模式创建对象时，多使用new
	function Person(name) {
		var o = new Object();
		o.name = name;
		o.getName = function () {
			console.log(this.name);
		}
		return o;
	}
	var person5 = new Person('kevin');

	// 方式五优化：稳妥构造函数模式
	// 与寄生构造函数模式不同：
	// 1. 新创建的实例方法不引用this
	// 2. 不使用new操作符调用构造函数
	function Person(name) {
		var o = new Object();
		o.sayName = function() {
			console.log(name);
		}
		return o;
	}
	var person51 = Person('kevin');
	person51.sayName(); // kevin
	person51.name = 'daisy';
	person51.sayName(); // kevin
	console.log(person51.name); // daisy
