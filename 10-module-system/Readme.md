Module system   7%
CommonJS Module System only

1. Loading a Module with CJS  [require]
npm install 安装依赖，例如 tap
const tap = require('tap');

2. Creating a CJS Module [module.exports]
module.exports = {
  upper
};
const {upper} = require('./format.js');

3. Detecting Main Module in CJS [require.main]
一个文件是程序的入口文件，就是main module（通过node index.js方式调用执行的index.js即为main module）
if(require.main === module) {

} else {
  module.exports = {upper};
}

4. Dynamically Loading an ESM Module in CJS [import().then().catch()]
if(require.main === module) {
  import('./format.js').then((module) => {
    const {upper} = module;
    console.log(upper('hello world'));
  }).catch(error => {
    console.error(error);
  });
}

5. Resolve a Module Path in CJS [require.resolve()]
加载任意 module 的绝对路径
require.resolve('pino')  // /home/ruoxi/WORK/node2/node_modules/pino/pino.js

