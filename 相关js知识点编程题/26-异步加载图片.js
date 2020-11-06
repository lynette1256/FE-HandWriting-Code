import React from 'react';
function loadImageAsync(url) {
	return new Promise(function (resolve, reject) {
		var image = new Image();
		// 加载成功，调用reslove方法
		image.onload = function() {
			resolve(image);
		};

		// 加载失败，调用reject方法
		image.onerror = function() {
			reject(new Error('Could not load image at' + url));
		};
		image.src = url;
	})
}
