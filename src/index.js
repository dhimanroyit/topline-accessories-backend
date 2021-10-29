const express = require('express');
const env = require('dotenv');

const app = express();
env.config();

app.get('/', (req, res) => {
  res.send('welcome to topline accessories');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
