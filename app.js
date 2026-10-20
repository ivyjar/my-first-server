const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static middleware must come before the routes
app.use(express.static('public'));

// GET /about
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// GET /api/time
app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

// GET /api/greeting?name=Sara
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: 'Hello, ' + name + '!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
