const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Version 22 running 🚀");
});
// Trigger CI/CD pipeline for zero downtime deployment demo
app.listen(3000, () => console.log("Server running on port 3000"));
