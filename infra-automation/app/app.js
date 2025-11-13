const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Sample App Running with Redis + Nginx + Jenkins!");
});

app.listen(3000, () => console.log("App running on 3000"));