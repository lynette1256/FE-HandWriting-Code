// 使用set实现交集、并集和差集

let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);

// 并集
let union = new Set([...a, ...b]);

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));

// a相对于b的差集
let difference = new Set([...a].filter(x => !b.has(x)));

