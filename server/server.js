const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

// Serve HTML from dist upon get request to /
app.get('/', (req, res) => {
  res.send('./dist/index.html');
});

// Request first 10 names from DB
  // Require DB model

app.listen(port, () => console.log(`KAPN-G listening on port ${port}`));