// 事件驱动示例
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const a = () => {
  console.log('Event A Triggered!');
}

function b() {
  console.log('Event B Triggered!');
}

// 监听事件
myEmitter.on('event-a', a);
myEmitter.on('event-b', b);
myEmitter.emit('event-a');
myEmitter.emit('event-b');
