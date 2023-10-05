// index.js
const express = require("express");
const app = express();
const PORT = 4001;
app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

module.exports = app;
