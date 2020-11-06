<script type="text/javascript">
// 实现闭包 例子一
	var scope = "global scope";
	function checkscope () {
		var scope = "local scope";
		function f() {
			return scope;
		}
		return f;
	}

	var foo = checkscope();
	foo();

// 例子二
	// 原来的例子
	var data = [];
	for (var i = 0; i < 3; i++) {
		data[i] = function () {
			console.log(i);
		};
	}
	data[0]();  // 3
	data[1]();  // 3
	data[2]();  // 3

	// 修改为闭包!!!!!!!!!!!!
	var data = [];
	for (var i = 0; i < 3; i++) {
		data[i] = (function (para) {
			return function () {
				console.log(para);
			}
		})(i)
	}
	data[0]();  // 0
	data[1]();  // 1
	data[2]();  // 2
	
</script>