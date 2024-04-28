const express = require('express');
const app = express();
const PORT = 3000;

app.get('/app', (req, res) => {
  res.send('Hello World app!');
});

app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});