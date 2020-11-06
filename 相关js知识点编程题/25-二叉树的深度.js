
// 递归
function TreeDepth(pRoot) {
	if (!pRoot) return 0;
	var left = TreeDepth(pRoot.left);
	var right = TreeDepth(pRoot.right);
	return Math.max(left + 1, right + 1);
}

// 非递归
function TreeDepth(pRoot)
{
    // write code here
    if (!pRoot) return 0;
    var arr = [];
    var res = 0;
    // 把所有节点保留到arr中
    arr.push(pRoot);
    // 深度优先遍历
    while (arr.length) {
        res ++;
        var len = arr.length;
        for(var i = 0; i < len; i++) {
            var node = arr.shift();
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
    }
    return res;
}
