const http = require('http'); // 1. 引入http模块

const hostname = '127.0.0.1';
const port = 3000;

// 2. 创建服务器实例
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 设置状态码
  res.setHeader('Content-Type', 'text/plain'); // 设置响应头
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n'); // 结束响应并发送内容
});

// 3. 启动服务器并监听端口
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
