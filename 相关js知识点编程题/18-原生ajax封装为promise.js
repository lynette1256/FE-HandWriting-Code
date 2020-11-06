import React from 'react';
	const ajax = (url, method, async, data) => {
  	return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      // 已经接收到全部响应数据，而且已经可以在客户端使用了
	      if (xhr.readyState === 4) {
	        if (xhr.status === 200) {
	          resolve(JSON.parse(xhr.responseText))
	        } else if (xhr.status > 400) {
	          reject('发生错误')
	        }
	      }
	    }
	    xhr.open(url, method, async)
	    xhr.send(data || null)
	  })
	}

// 使用Promise封装实现AJAX操作
var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject){
		var client = new XMLHttpRequest();
		client.open('GET', url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept', 'application/json');
		client.send();

		function handle(){
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText))；
			}
		}
	})
	return promise;
}

getJSON('/posts.json').then(function(json) {
	console.log('Contents:' + json);
}, function(error) {
	console.log('出错了', error);
})
