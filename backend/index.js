const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Minecraft Hosting Backend!');
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
