require('dotenv').config();
require('./models/dbinit');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createUserRouter = require('./routes/createAccount');
var loginRouter = require('./routes/login');
const authorize = require('./middlewares/auth');
var dashboardRouter = require('./routes/dashboard');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create-user', createUserRouter);
app.use('/login', loginRouter);
app.use('/dashboard', authorize, dashboardRouter);

module.exports = app;
