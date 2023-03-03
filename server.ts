'from * as http from "http";'

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});

