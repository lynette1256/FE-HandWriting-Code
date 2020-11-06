	// 防抖
	// 事件被触发n秒后再执行回调，如果在n秒内又被触发，则重新计时 
	// 适用于多次响应一次执行的场景
	// 第一版防抖
	function debounce(func, wait) {
		var timeout;
		return function() {
			clearTimeout(timeout);
			timeout = setTimeout(func, wait);
		}
	}

	// 第二版防抖 修改了this指向
	function debounce1(func, wait) {
		var timeout;
		return function() {
			var context = this;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				return func.apply(context)
			}, wait);
		}
	}	

	// 第三版防抖 可添加event事件
	function debounce2(func, wait) {
		var timeout;
		return function() {
			var context = this;
			var args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				return func.apply(context, args);
			}, wait);
		}
	}