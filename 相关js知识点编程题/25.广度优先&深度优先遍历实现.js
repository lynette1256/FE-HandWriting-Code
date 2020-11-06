// 遍历一个html文档，打印出节点的标签名和类名
// <html>
// <body>
// 	<div id='root'>
//         <span>123
//             <a href="#">
//                 sdsd
//             </a>
//             <div>sdsd<a>这是一个a标签</a></div>
//         </span>
//         <span>456
//             <p>这是一个p标签</p>
//         </span>
// </div>
// </body>
// </html>


// 深度优先算法递归实现
var dfs = function(node, nodeList) {
	if (node) {
		nodeList.push(node);
		var children = node.children;
		for (var i = 0; i < children.length; i ++) {
			dfs(children[i], nodeList);
		}
	}
	return nodeList；
}
var root = document.getElementById('root');
dfs(root, nodeList = []);


// 深度优先遍历算法非递归实现
var dfs1 = function(node) {
	var nodeList = [];
	if (node) {
		// 深度优先使用 栈 遍历
		// 栈 先进后出
		var stack = [];
		stack.push(node);
		while (stack.length !== 0) {
			var item = stack.pop();
			nodeList.push(item);
			var children = item.children;
			for (var i = children.length - 1; i >= 0; i --) {
				stack.push(children[i]);
			}
		}
	}
	return nodeList;
}
var root = document.getElementById('root');
console.log(dfs1(root));


// 广度优先遍历二叉树
// 使用队列实现
var bfs = function(node) {
	var nodeList = [];
	if (node) {
		var queue = [node];
		// 当执行队列为空时，跳出循环
		while(queue.length !== 0) {
			var item = queue.shift();
			nodeList.push(item);
			var children = item.children;
			for(var i = 0; i < children.length; i++) {
				queue.push(children[i]);
			}
		}
	}
	return nodeList;
}

var bfs1 = function (node) {
	var nodeList = [];
	let queue = [node];
	// 当执行队列为空，跳出循环
	while (queue.length !== 0) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let temp = queue.shift();
			if (temp.left) queue.push(temp.left);
			if (temp.right) queue.push(temp.right);
			// 做一些操作
 		}
	}
 
}
var root = document.getElementById('root');
console.log(log(bfs(root));
