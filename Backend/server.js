const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Sample API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend with CORS enabled (niveditha!)' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
