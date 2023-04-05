var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/esp32', usersRouter);


const ledsRouter = require('./routes/ledsRouter')
const joystickRouter = require('./routes/joystickRouter')
const ipRouter = require('./routes/ipRouter')
const userRouter = require('./routes/userRouter')
const routeRouter = require('./routes/routeRouter')
const impactRouter = require('./routes/impactRouter')
const pointRouter = require('./routes/pointRouter')

app.use('/api/leds', ledsRouter);
app.use('/api/joystick', joystickRouter);
app.use('/api/ip', ipRouter);
app.use('/api/user', userRouter);
app.use('/api/route', routeRouter);
app.use('/api/impact', impactRouter);
app.use('/api/point', pointRouter);

// if path = /eurovison then go to eurovison.html
app.get('/eurovison', function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + '/public/eurovison.html');
});

module.exports = app;
