const express = require('express');

const app = express();

app.use(express.static('./dist/apps/weather'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/apps/weather' });
});

app.get('/backend', (req, res) => {
  res.json({
    url: process.env.BACKEND_URL,
    apiKey: process.env.API_KEY,
  });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
