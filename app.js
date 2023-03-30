var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 导入路由
// 导入 UserRouter 路由
var UserRouter = require('./routes/admin/UserRouter');
const JWT = require('./util/JWT');


var app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// 各种配置
app.use(logger('dev'));
// 配置 post 请求注册中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* 
  /adminapi - 后台用的接口
  /webapi   - 企业官网用的
*/
// 检测 前端 token 是否过期 的中间件
app.use((req, res, next) => {
  // 如果 token 有效,next()
  // 如果token 过期了,返回 401 错误
  if (req.url === '/adminapi/user/login') {
    next()
    return
  }
  const token = req.headers.authorization.split(' ')[1]
  // console.log(token);
  if (token) {
    let payload = JWT.verify(token)
    if (payload) {
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username
      }, '1d')
      res.header('Authorization', newToken)
      next()
    } else {
      res.status(401).send({ errCode: 0, msg: 'token 已过期' })
    }
  }
})

//TODO: 注册UserRouter 路由
app.use(UserRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

