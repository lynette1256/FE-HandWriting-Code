	// 节流
	// 两个思路，一个时间戳实现，一个设置定时器实现
	// 大量事件按时间平均分配触发
	// 时间戳实现，当事件触发时，当前时间减去之前时间
	// 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前时间戳

	function throttle(func, wait){
		var context, args;
		var previous = 0;
		return function () {
			var now = + new Date();
			context = this;
			args = arguments;
			if (now - previous > wait) {
				func.apply(context, args);
				previous = now;
			}
		}
	}

	// 定时器实现，设置定时器，再次触发事件时，
	// 如果定时器存在，则不执行
	// 直到定时器不存在，然后执行函数，清空定时器
	function throttleClock(func, wait) {
		var timeout; 
		var context, args;
		return function() {								
			context = this;
			args = arguments;
			if (!timeout) {
				timeout = setTimeout(function() {
					timeout = null;
					func.apply(context, args);
				}, wait);
			}
		}
	}