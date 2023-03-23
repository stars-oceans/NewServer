var express = require('express');
var UserRouter = express.Router();

// 导入 controllers 文件夹里面的 UserController
const UserController = require('../../controllers/admin/UserContrller');

/* GET home page. */
// login 接口
UserRouter.post('/adminapi/user/login',UserController.login)


module.exports = UserRouter;