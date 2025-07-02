// 事件驱动示例
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event-a', () => {
  console.log('Event A Triggered!');
});

myEmitter.emit('event-a');
