'use strict';
const os = require('os');
const process = require('process');
const path = require('path');

// Linux Windows_NT Darwin
// For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.group('os');
console.log(os.type());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.freemem());
// console.log(os.cpus());
console.groupEnd();

console.group('process');
console.log(process.execPath);
console.log(process.platform);
console.log(process.uptime());
console.log(process.cpuUsage());
console.log(process.memoryUsage());
// file descriptor 0
console.log(process.stdin.fd);
// 1
console.log(process.stdout.fd);
// 2
console.log(process.stderr.fd);
// 是否终端输入，还有可能通过pipe输入
console.log(process.stdin.isTTY);
// 是否终端输出
console.log(process.stdout.isTTY);
console.groupEnd();

console.group('path');
// linux为:，windows为;
console.log(path.delimiter);
console.log(path.sep);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.dirname(__filename), __dirname);
console.log(path.parse(__filename));
// 返回绝对路径
console.log(path.resolve(__filename));
console.log(path.isAbsolute('foo/bar'));
console.log(path.join(__dirname, 'foo', 'bar'));
console.groupEnd();
