const Circle = require('./test.js');
const path = require('path');

// 可以判断是否通过node answer.js直接运行
// 一个文件被node调用，它就是入口文件
console.log(require.main === module);

const circle = new Circle(7);
console.log(circle.getArea());
console.log(require.cache);
// 解析当前文件的绝对路径
console.log(require.resolve(__filename), path.resolve(__filename));
