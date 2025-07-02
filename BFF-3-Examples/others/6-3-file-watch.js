// file-watcher.js
const fs = require('fs');
const path = require('path');

const directory = process.argv[2] || '.';

console.log(`监控目录: ${directory}`);

fs.watch(directory, (eventType, filename) => {
  if (filename) {
    console.log(`文件 ${filename} 发生了 ${eventType} 事件`);
  }
});
