const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.setHeader('Content-Type', 'application/json');

  if (path === '/add') {
    const a = parseFloat(query.a) || 0;
    const b = parseFloat(query.b) || 0;
    res.end(JSON.stringify({ result: a + b }));
  } else if (path === '/multiply') {
    const a = parseFloat(query.a) || 0;
    const b = parseFloat(query.b) || 0;
    res.end(JSON.stringify({ result: a * b }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('计算器API运行在 http://localhost:3000/');
});
