const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const dbConnect = require('./db/dbConnect');
const userRouter = require('./resources/user/userRouter');
const sliderRouter = require('./resources/slider/sliderRouter');
const aboutRouter = require('./resources/about/aboutRouter');
const teamRouter = require('./resources/team/teamRouter');
const productRouter = require('./resources/products/productRouter');
const galleryPhotoRouter = require('./resources/galleryPhoto/galleryPhotoRouter');
const galleryVideoRouter = require('./resources/galleryVideo/galleryVideoRouter');
const partnerRouter = require('./resources/partner/partnerRouter');
const { signup, signin, protect } = require('./middleware/auth');

const app = express();
env.config();
app.use(express.json());
app.use(cors());

app.use('/signup', signup);
app.use('/signin', signin);
app.use('/users', protect, userRouter);
app.use('/sliders', sliderRouter);
app.use('/about', aboutRouter);
app.use('/teams', teamRouter);
app.use('/products', productRouter);
app.use('/gallery/photos', galleryPhotoRouter);
app.use('/gallery/videos', galleryVideoRouter);
app.use('/partners', partnerRouter);

app.get('/', (req, res) => {
  res.send('welcome to topline accessories');
});

dbConnect();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
