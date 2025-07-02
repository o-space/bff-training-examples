// 事件循环示例
console.log('1. 开始');

setTimeout(() => {
  console.log('2. 定时器回调');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise回调');
});

console.log('4. 结束');
