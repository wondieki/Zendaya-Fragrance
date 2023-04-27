const express = require('express');
const app = express();

app.get('/perfume', (req, res) => {
  res.send('This is the films page!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});