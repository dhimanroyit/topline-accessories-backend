const express = require('express');
const env = require('dotenv');
const dbConnect = require('./db/dbConnect');
const userRouter = require('./resources/user/userRouter');
const sliderRouter = require('./resources/slider/sliderRouter');

const app = express();
env.config();
app.use(express.json());

app.use('/users', userRouter);
app.use('/sliders', sliderRouter);
app.get('/', (req, res) => {
  res.send('welcome to topline accessories');
});

dbConnect();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
