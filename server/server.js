const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('./dist/index.html');
});

app.listen(port, () => console.log(`KAPN-G listening on port ${port}`));