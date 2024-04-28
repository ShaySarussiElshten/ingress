const express = require('express');
const app = express();
const PORT = 3000;

app.get('/something', (req, res) => {
  res.send('Hello World something!');
});

app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});