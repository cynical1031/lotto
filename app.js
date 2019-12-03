var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule');
var app = express();
app.io = require('socket.io')();
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var socketRouter = require('./routes/socket')(app.io)
var getLottoResult = require('./routes/scheduler/getLottoResultScheduler')
    // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//라우터
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/', socketRouter);
//스케쥴러
//(초 분 시 일 월 요일) ex */5 = 5초간  
// var getLottoNum = schedule.scheduleJob('* * * * * 6', function() {
//     console.log('schedule1');
// });
var redisUpdate = schedule.scheduleJob('*/10 * * * * *', function() {
    getLottoResult.getHtml().then(result => {
        console.log(result)
    })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;