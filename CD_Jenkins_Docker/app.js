const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>OneData CI/CD Pipeline</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          overflow: hidden;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #0072ff; }
          to { text-shadow: 0 0 25px #00c6ff; }
        }
        p {
          font-size: 1.2rem;
          max-width: 700px;
          line-height: 1.6;
          color: #dcdcdc;
        }
        .loader {
          margin-top: 30px;
          width: 60px;
          height: 60px;
          border: 6px solid rgba(255, 255, 255, 0.2);
          border-top-color: #00c6ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        footer {
          position: absolute;
          bottom: 15px;
          font-size: 0.9rem;
          color: #aaa;
        }
      </style>
    </head>
    <body>
      <h1> OneData Assessment</h1>
      <p>Node.js Application successfully deployed via Jenkins CI/CD Pipeline and Docker Containerization.</p>
      <p>Continuous Integration & Deployment completed flawlessly. The system is live and operational.</p>
      <div class="loader"></div>
      <footer>© 2025 OneData CI/CD Demo | Jenkins + Docker Automation</footer>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('🌐 OneData CI/CD App running on http://localhost:3000');
});