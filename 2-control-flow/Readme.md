Control flow   12 %
Managing asynchronous operations
Control flow abstractions

1. Callbacks [readFile(__filename, (err, contents) => {})]

2. Promises [Promise.all([readFilePro(__filename)]).then().catch()]
const {readFile: readFilePro} = require('fs').promises;

3. Async/Await [await Promise.all([])]

4. Canceling Asynchronous Operations [new AbortController()]
const ac = new AbortController();
readFilePro(__filename, {signal: ac.signal});
setImmediate(() => { ac.abort() });