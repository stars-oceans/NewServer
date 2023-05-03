//  路由层 接口  V层

var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/web/NewsContrller');

// 导入 controllers 文件夹里面的 UserController
/* GET home page. */
// login 接口

NewsRouter.get('/webapi/news/list', NewsController.getList)


module.exports = NewsRouter