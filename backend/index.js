const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/health-check', (req, res) => {
  res.send('Wedding Card Backend is running!');
  res.status(200).end();
});

// Example API route (add more as needed)
app.get('/api/cards', (req, res) => {
  res.json({ message: 'List of wedding cards' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});