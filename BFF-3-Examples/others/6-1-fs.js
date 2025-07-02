const fs = require('fs'); // 1. 引入fs模块

const filePath = 'welcome.txt';
const content = 'Hello, this is a file created by Node.js!';

// 2. 异步写入文件
fs.writeFile(filePath, content, (err) => {
  if (err) throw err;
  console.log('文件写入成功!');

  // 3. 异步读取文件
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('读取到的文件内容是:');
    console.log(data);
  });
});
