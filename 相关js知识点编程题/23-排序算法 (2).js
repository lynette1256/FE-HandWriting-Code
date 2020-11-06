
// 方法一
// 冒泡排序算法
// 平均时间复杂度 O(n^2)
// 每次都把最大的数字往后放
// 采用双层循环
function BubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function　BubbleSort(arr) {
	var len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// 两两交换是关键
				swap(arr, j, j + 1);
			}
		}
	}
}

// 方法二
// 选择排序
// 在数组中最大或最小的元素，放在序列的起始，
// 再从剩余的数据中继续寻找最大或最小的元素，
// 依次放到排序序列中，直到所有数据样本排序完成
function selectorSort(arr) {
	var len = arr.length;
	var min;
	for (let i = 0; i < len - 1; i++) {
		// 把当前的下标标记为最小
		min = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		swap(arr, i, min);
	}
	return arr;
}

function selectedSort(arr) {
	let len = arr.length;
	let minIndex;
	for (let i = 0; i < len; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	return arr;
}

// 方法三
// 插入排序
// 将待排序序列第一个元素看做有序序列，把第二个元素
// 到最后一个元素当成是未排序序列
function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (let i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex　>= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex --;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

function insertionSort(arr) {
	let len = arr.length;
	let preIndex, current;
	for (let i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		// 为目标元素腾位置
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex --;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

// 方法四
// 归并排序 **递归** 的思想
// 使用 归并思想 实现排序
// 采用经典的分治策略，将问题分解为小一些的问题然后递归求解
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr.slice();
	}
	var mid = Math.floor(arr.length / 2);
	// 递归
	var left = mergeSort(arr.slice(0, mid));
	var right = mergeSort(arr.slice(mid));
	var result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	result.push(...left, ...right);
	return result;
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	var mid = Math.floor(arr.length / 2);
	// 对左序列 归并排序  对右序列 归并排序
	var left = mergeSort(arr.slice(0, mid));
	var right = mergeSort(arr.slice(mid));
	var result = [];
	// 合并有序链表的相似操作
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	result.push(...left, ...right);
	return result;
}

// 方法五
// 快速排序
// 采用分支策略将一个数组分为两个数组
// 从数列中挑选一个元素，当做哨兵
// 重新排序，所有元素比哨兵小的摆放在哨兵前面。比哨兵大的摆放在哨兵后面
// 递归把小于哨兵值的子数列和大于哨兵值元素的子数列排序

// 数组分成三部分left、pivot、right，使left<=pivot，right>pivot
// 递归处理left
// 递归处理right
// 合并三者结果

function quickSort(arr) {
	// 递归的出口
	if (arr.length < 2) {
		return arr;
	}
	// 哨兵节点
	// 按照分界点，将数组一分为二
	let pivot = arr[arr.length - 1];
	let left = arr.filter((v, i) => v <= pivot && i != arr.length - 1);
	let right = arr.filter(v => v > pivot);
	return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSort(arr) {
	if(arr.length <　2) {
		return arr;
	}
	let pivot = arr[arr.length - 1];
	let left = arr.filter((item, index) => item <= pivot && index !== arr.length - 1);
	let right = arr.filter((item, index) => item > pivot && index !== arr.length - 1);
	return [...quickSort(left), pivot, ...quickSort(right)];
}

</script>