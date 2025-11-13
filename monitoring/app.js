const express = require("express");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

// Default metrics
client.collectDefaultMetrics({ register });

// Custom metric
const requestCount = new client.Counter({
  name: "sample_app_requests_total",
  help: "Total number of requests to the sample app"
});
register.registerMetric(requestCount);

app.get("/", (req, res) => {
  requestCount.inc();
  res.send("Sample App with Prometheus Metrics");
});

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

app.listen(3000, () => {
  console.log("Sample app running at http://localhost:3000");
});