// 阻塞 vs 非阻塞
const filename = '3-input.txt'

// 阻塞操作（同步）
const fs = require('fs');
const data = fs.readFileSync(filename, 'utf8');
console.log('blocking', data);

// 非阻塞操作（异步）
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('non-blocking', data);
});
