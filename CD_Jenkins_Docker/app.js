const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneData CI/CD Pipeline Journey</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        color: #fff;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      header {
        text-align: center;
        padding: 100px 20px 50px;
      }
      header h1 {
        font-size: 3rem;
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: glow 2s ease-in-out infinite alternate;
      }
      header p {
        font-size: 1.2rem;
        color: #ddd;
        margin-top: 15px;
      }

      section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 40px;
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease;
      }

      section.visible {
        opacity: 1;
        transform: translateY(0);
      }

      section h2 {
        color: #00c6ff;
        font-size: 2rem;
        margin-bottom: 15px;
      }

      section p {
        max-width: 700px;
        font-size: 1.1rem;
        line-height: 1.6;
        color: #ccc;
      }

      footer {
        text-align: center;
        padding: 30px;
        color: #aaa;
        font-size: 0.9rem;
      }

      @keyframes glow {
        from { text-shadow: 0 0 10px #0072ff; }
        to { text-shadow: 0 0 25px #00c6ff; }
      }
    </style>
  </head>
  <body>
    <header>
      <h1> OneData CI/CD Pipeline Journey</h1>
      <p>A complete automated pipeline built by <strong>Harsha Dhaarani D</strong></p>
    </header>

    <section>
      <h2>🧱 Step 1: Jenkins Setup with Docker</h2>
      <p>Jenkins was installed and configured inside a Docker container with Docker-in-Docker access, allowing build automation and isolated environments.</p>
    </section>

    <section>
      <h2>🔗 Step 2: GitHub Integration</h2>
      <p>The Jenkins pipeline pulls code directly from the GitHub repository using the “Pipeline from SCM” method, ensuring seamless source control integration.</p>
    </section>

    <section>
      <h2>⚙️ Step 3: Build & Test Automation</h2>
      <p>Node.js dependencies were installed automatically via npm, followed by a lightweight test stage to validate build success before containerization.</p>
    </section>

    <section>
      <h2>🐳 Step 4: Docker Image Build</h2>
      <p>The application was packaged into a Docker image using a multi-stage build from Node.js base image. This ensures efficiency, portability, and version consistency.</p>
    </section>

    <section>
      <h2>🚢 Step 5: Container Deployment</h2>
      <p>After successful build, Jenkins automatically runs the Docker container on port 3000, replacing any previous versions to maintain continuous deployment flow.</p>
    </section>

    <section>
      <h2>📊 Step 6: CI/CD Visualization</h2>
      <p>The deployed app dynamically presents this interactive page as a visual proof of the successful pipeline execution.</p>
    </section>

    <footer>© 2025 OneData CI/CD Demo | Created by Harsha Dhaarani D 💻</footer>

    <script>
      // Reveal sections smoothly on scroll
      const sections = document.querySelectorAll('section');
      const reveal = () => {
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
          }
        });
      };
      window.addEventListener('scroll', reveal);
      reveal();
    </script>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log('🌐 OneData Animated CI/CD Journey running at http://localhost:3000');
});