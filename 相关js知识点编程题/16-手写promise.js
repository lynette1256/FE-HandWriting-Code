// 手写实现promise

const PENDING = 'pending';
const FULFILLED = 'pending';
const REJECTED = 'rejected';

class AjPromise {
	constuctor(fn) {
		// 当前状态
		this.state = PENDING;
		// 终值
		this.value = null;
		// 拒因
		this.reason = null;
		// 成功态回调函数队列
		this.onFulfilledCallbacks = [];
		// 拒绝态回调函数队列
		this.onRejectedCallbacks = [];

		// 成功态回调
		const  resolve = value => {
			setTimeout(() => {
				if (this.state === PENDING) {
					this.state = FULFILLED;
					this.value = value;
					this.onFulfilledCallbacks.map(cb => {
						this.value = cb(this.value);
					});
				}
			})
		};

		// 拒绝态回调
		const reject = reason => {
			setTimeout(() => {
				if (this.state === PENDING) {
					this.state = REJECTED;
					this.reason = reason;
					this.onRejectedCallbacks.map(cb => {
						this.reason = cb(this.reason);
					});
				}
			});
		};
		
		try { 
			// 执行promise
			fn(resolve, reject);
		} catch(e) {
			reject(e);
		}
	}

	then(onFulfilled, onRejected) {
			typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled);
			typeof onRejected === 'function' && this.onFulfilledCallbacks.push(onRejected);
			return this;
	}
}
// -----------------------------------------------------
// 使用class类来书写


const PENDING　= 'PENDING';
const FULFILLED　= 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
	constructor(exector) {
		// 初始状态 
		this.status = PENDING;
		// 成功的值
		this.value = undefined;
		// 失败的原因
		this.reason = undefined;

		// 成功态的回调队列
		this.onFulfilledCallbacks = [];

		// 失败态的回调队列
		this.onRejectedCallbacks = [];

		const resolve = value => {
			if (status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				this.onFulfilledCallbacks.forEach(func => func(this.value));
			}
		}

		const reject = reason => {
			if (status === REJECTED) {
				this.status = REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach(func => func(this.reason));
			}
		}

		// 立即执行exector函数
		// 把内部的resolve和reject传入exector，用户可以调用resolve 和 reject
		try {
			exector(resolve, reject);
		} catch(e) {
			reject(e);
		}		
	}

	// 微任务，使用setTimeout模拟
	then(onFulfilled, onRejected) {
		// 保存this指向
		const self = this;
		// then链式调用，返回一个新的promise实例
		return new Promise((resolve, reject) => {
			if (self.status === PENDING) {
				self.onFulfilledCallbacks.push(() => {
					// try 捕获错误
					try {
						// 模拟微任务
						setTimeout(() => {
							const result =  onFulfilled(self.value);
							// 如果回调函数返回的值是promise，执行then操作
							// 如果不是promise，调用新promise的resolve函数
							result instanceof Promise ? result.then(resolve, reject) : resolve(result);
						})
					} catch(e) {
						reject(e);
					}
				})

				self.onRejectedCallbacks.push(() => {
					try {
						setTimeout(() => {
							const result = onRejected(self.reason);
							// 如果回调函数返回的值是promise，执行then的操作
							// 如果不是promise，调用新promise的reject函数
							result instanceof Promise ? result.then(resolve, reject) : reject(result);
						})
					} catch(e) {
						reject(e);
					}
				})
			} else if (self.status === FULFILLED) {		
					setTimeout(() => {
						try {
							const result = onFulfilled(self.value);
							result instanceof Promise ? result.then(resolve, reject) : resolve(result);
						} catch (e) {
							reject(e);
						}
					})
				
			} else if (self.status === REJECTED) {
				setTimeout(() => {
					try {
						const result = onRejected(self.reason);
						result instanceof Promise ? result.then(resolve, reject) : reject(result);
					} catch(e) {
						reject(e);						
					}
				})
			}
		})
	}

	// catch捕获错误的状态，
	catch(onRejected) {
		return this.then(null, onRejected);
	}

	resolve(value) {
		if (value instanceof Promise) {
			return value;
		} else {
			return new Promise((resolve, reject) => resolve(value));
		}
	}
	all(promiseArr) {
		const len = promiseArr.length;
		const values = new Array(len);

		let count = 0;
		return new Promise((resolve, reject) => {
			for (let i = 0; i < len; i++) {
				Promise.resolve(promiseArr[i]).then(
					val => {
						values[i] = val;
						count ++;
						if (count === len) resolve(values);
					},
					err => reject(err),
					)
			}
		})
	}
}