const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from URX app!');
});

app.listen(port, () => {
  console.log(`URX app listening at http://localhost:${port}`);
});

