const http = require('http');

const PORT = 8081;

const server = http.createServer((req, res) => {
  res.end('Hello from Docker + Node.js!');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
