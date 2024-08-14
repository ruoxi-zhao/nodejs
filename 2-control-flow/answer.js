// // callback
const files = Array(3).fill(__dirname + '/test.txt');
const { readFile } = require('fs');

const print = (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
};

readFile(files[0], print);
readFile(files[1], print);
readFile(files[2], print);

// promise
const {readFile: readFilePro} = require('fs').promises;
let data = [];
Promise.all(files.map(file => readFilePro(file))).then(results => {
  console.group('promise');
  results.forEach(result => console.log(result.toString()));
  results.forEach(result => data.push(result));
  console.log('Buffer.concat', Buffer.concat(data).toString());
  console.groupEnd();
});

// async await
async function run() {
  const print2 = contents => console.log(contents.toString());
  await readFilePro(files[0]).then(print2);
  await readFilePro(files[1]).then(print2);
  await readFilePro(files[2]).then(print2);
}
run().catch(error => console.error(error));
// 合并输出
async function run2 () {
  const dataAysnc = await Promise.all(files.map(file => readFilePro(file)));
  console.group('async await');
  console.log(Buffer.concat(dataAysnc).toString());
  console.groupEnd();
}
run2().catch(error => {
  console.error(error);
});

// cancel asynchronous operation,not callback
const ac = new AbortController();
setImmediate(() => ac.abort());
async function run3() {
  try {
    console.log(await readFilePro(files[0], {signal: ac.signal}));
  } catch (err) {
    if (err.code !== 'ABORT_ERR') {
      throw err;
    } else {
      console.log('--aborted--');
    }
  }
}
run3();
