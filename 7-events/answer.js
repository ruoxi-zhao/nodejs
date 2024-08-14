const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }
}
const myemitter = new MyEmitter();
let count = 0;
myemitter.on('event', (a, b) => {
  count++;
  console.log('received an event named event', a, b);
  console.log('result: ', a+b);
  console.log('called times:', count);
});
myemitter.once('event', (a, b) => {
  count++;
  console.log('received an event named event', a, b);
  console.log('result: ', a+b);
  console.log('called times:', count);
});
myemitter.on('error', err => {
  console.error('呀！有一个EventEmitter错误:', err);
});
myemitter.emit('event', 3, 4);
myemitter.emit('event', 5, 6);

// remove listeners
const listener1 = () => {
  console.log('this is listener1');
};
const listener2 = () => {
  console.log('this is listener2');
};
myemitter.on('event1', listener1);
myemitter.on('event2', listener2);
// setInterval(() => {
//   myemitter.emit('event1');
//   myemitter.emit('event2');
// }, 200);
// setTimeout(() => {
//   myemitter.removeListener('event1', listener1);
// }, 500);
// setTimeout(() => {
//   myemitter.removeAllListeners();
// }, 1000);

// promise-based once and AbortController
const { once } = require('events');
const ac = new AbortController();

setTimeout(() => {
  ac.abort();
}, 300);
async function run() {
  try {
    await once(myemitter, 'testonce', {
      signal: ac.signal,
    });
    console.log('pinged!')
  } catch(error) {
    if (error.code !== 'ABORT_ERR') {
      throw error;
    }
    console.log('canceled!')
  }
}
run();
