const http = require('http');
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
const businessProfileRouter = require('./resources/businessProfile/businessProfileRouter');
const callInfoRouter = require('./resources/callInfo/callInfoRouter');
const socialRouter = require('./resources/social/socialRouter');
const addressRouter = require('./resources/address/addressRouter');
const { signIn, protect } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
env.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const URI = '/v1';

app.use(`${URI}/public/upload`, express.static('uploads'));
app.use(`${URI}/signin`, signIn);
app.use(`${URI}/users`, protect, userRouter);
app.use(`${URI}/callinfos`, callInfoRouter);
app.use(`${URI}/socials`, socialRouter);
app.use(`${URI}/sliders`, sliderRouter);
app.use(`${URI}/about`, aboutRouter);
app.use(`${URI}/teams`, teamRouter);
app.use(`${URI}/products`, productRouter);
app.use(`${URI}/gallery/photos`, galleryPhotoRouter);
app.use(`${URI}/gallery/videos`, galleryVideoRouter);
app.use(`${URI}/partners`, partnerRouter);
app.use(`${URI}/address`, addressRouter);
app.use(`${URI}/businessprofile`, businessProfileRouter);

app.get('/', (req, res, next) => {
  res.send('welcome to topline accessories');
});

app.use(errorHandler);

const server = http.createServer(app);

dbConnect();
const PORT = process.env.PORT || 5000;

server.listen();
