
	// AJAX 只能向同源网址发出HTTP请求，发出跨域请求，会报错
	// 拿到服务器返回的数据，AJAX不会刷新整个页面
	// 只会更新页面中的相关部分

	// 创建一个XMLHttpRequest 对象
	var xhr = new XMLHttpRequest();	
	// 指定回调函数
	xhr.onreadystatechange = function() {
		// 通信成功时
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xhr.responseText);
			} else {
				console.log(xhr.statusText);
			}
		}
	}
	// 调用对象的open方法
	xhr.open('POST', url);
	// 调用对象send方法，实际发出请求
	xhr.send(data);

	0： 未初始化，尚未调用open方法
	1： 启动，调用了open方法
	2： 发送，已经调用send方法，但未接受响应
	3： 接受，已经接收到部分响应数据
	4： 完成，已经接收到全部响应数据
	
// -------------------------------------------------
	// 将一个原生的ajax封装成promise
	var ajax = function(url, method, async, data) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(xhr.responseText);
					} else if (xhr.status > 400) {
						reject('发生错误');
					}
				}
			}
			xhr.open(method, url, async);
			xhr.send(data || null);
		})
	}