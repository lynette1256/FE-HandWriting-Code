<script type="text/javascript">
	// 发布订阅模式 实现绑定、解绑、执行、一次性绑定
	class Event {
		constructor () {
			// 存储事件的数据结构
			this._cache = {}
		}
	}

	// 绑定
	on(type, callback) {
		// 将同一类型事件放入到同一数组中
		if (this._cache[type] || []) {
			// 按值传递 数组的引用地址
			let fns = this._cache[type];
		}
		// let fns = (this._cache[type] = this._cache[type] || [])
		if (fns.indexOf(callback) === -1) {
			fns.push(callback);
		}
		return this;
	}

	// 解绑
	off(type, callback) {
		let fns = this._cache[type];
		if (Array.isArray(fns)) {
			if (callback) {
				// 找到对应的回调函数
				let index = fns.indexOf(callback);
				if (index !== -1) {
					fns.slice(index, 1);
				}
			} else {
				// 全部清空
				fns.length = 0;
			}
		}
		return this;
	}

	// 触发emit
	trigger(type, data) {
		let fns = this._cache[type];
		if (Array.inArray(fns)) {
			fns.forEach((fn) => {
				fn(data)
			})
		}
		return this;
	}

	// 只触发一次
	once(type, callback) {
		this.on(type, callback);
		this.off(type, callback);
		return this;
	}


</script>