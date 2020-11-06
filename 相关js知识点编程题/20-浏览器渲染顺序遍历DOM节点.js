<script type="text/javascript">
	
	// 根节点
	var node 
	var arr = [];

	// 方式一：深度遍历，递归方式先序遍历DOM树
	function travelsal(node) {
		// 对node进行处理，如果该节点是元素的话
		if (node && node.nodeType === 1) {
			arr.push(node.tagName);
		}
		// 获取node节点的所有孩子节点
		var childNodes = node.childNodes;
		for(var i = 0; i < childNodes.length; i++) {
			var item = childNodes[i];
			if (item.nodeType === 1) {
				travelsal(item);
			}
		}
	}

	// 方式二：采用栈实现深度优先搜索
	var res = [];  //　保存结果
	var stack = [];　　// 用来实现栈
	if (node && node.nodeType === 1) {
		stack.push(node);
	}
	while(stack.length != 0)  {
		var temp = stack.pop();
		var tempChildNodes = temp.childNodes;
		if (temp && temp.nodeType === 1) {
			for (var i = 0; i < tempChildNodes.length; i++) {
				if (tempChildNodes[i].nodeType === 1) {
					stack.push(tempChildNodes[i]);
				}
			}
		}
	}

	// 方式三：采用DOM扩展的Element Traversal API,递归遍历DOM树
	function traversalUsingTraversalAPI(node) {
		if (node && node.nodeType === 1) {
			console.log(node.tagName);
		}
		var len = node.childElementCount, child = node.firstElementChild;
		for (var i = 0; i < len; i++) {
			traversalUsingTraversalAPI(child);
			child = child.nextElementSibling;
		}
	}

</script>