// file-operations.js
const fs = require('fs');
const path = require('path');

// 读取文件
fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }
  console.log('文件内容:', data);
});

// 写入文件
const content = 'Hello, Node.js!';
fs.writeFile('output.txt', content, (err) => {
  if (err) {
    console.error('写入文件失败:', err);
    return;
  }
  console.log('文件写入成功');
});
