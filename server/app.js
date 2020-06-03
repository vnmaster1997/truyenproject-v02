require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressJwt = require('express-jwt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
/*const auth = require('./routes/index.router');*/
const { static } = require('express');


const product = require('./routes/product.router');
/*var User = require('mongoose').model('User');*/

var app = express();

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(passport.initialize());
app.use('/product', product);
app.use('/images/', static('../uploads/'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));