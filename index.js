const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  return res.status(200).send('API server is running');
});

app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});