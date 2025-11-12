const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Welcome to OneData Assessment - Node.js Application deployed via Jenkins and Docker. Continuous Integration & Deployment completed successfully.');
});

server.listen(3000, () => {
  console.log('OneData Assessment App deployed successfully using Jenkins CI/CD Pipeline. Running on port 3000.');
});