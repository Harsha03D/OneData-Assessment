const express = require("express");
const app = express();

let counter = 0;

// This endpoint fails randomly
app.get("/", (req, res) => {
  counter++;
  if (Math.random() > 0.7) {
    throw new Error("Random app failure occurred!");
  }
  res.send("App is running. Request count: " + counter);
});

// Error handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(4000, () => console.log("Buggy app running on port 4000"));