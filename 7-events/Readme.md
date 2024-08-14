Events  11%
The event system
Building event emitters 创建EventEmitter
Consuming event emitters 使用EventEmitter

1. Creating an Event Emitter [class MyEmitter extends EventEmitter]
class MyEmitter extends EventEmitter {
  constructor() {
    super() {}
  }
}
const myee = new MyEmitter();

2. Emitting events [instance.emit('eventname', args)]
myee.emit('event', args);

3. Listening for Events [instance.on() instance.once() instance.prependListener()]

4. Single Use Listener [instance.once()]

5. Removing Listeners [instance.removeListener('eventname') instance.removeAllListeners()]

6. The error Event [instance.on('error', callback) instance.emit('error')]
只emit不on会报错

7. Promise-Based Single Use Listener and AbortController [const {once} = require('events')]
once(instance, eventname, {sginal: ac.sginal});
setTimeout(() => ac.abort(), 1000);
