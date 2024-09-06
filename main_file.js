const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set public directory for static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'node')));

// Render hospitals.html file as the main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});