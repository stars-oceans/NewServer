//  路由层 接口  V层

var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/admin/NewsContrller');

// 导入 controllers 文件夹里面的 UserController
/* GET home page. */
// login 接口

//TODO: 图片上传的中间件 
const multer  = require('multer');
const upload = multer({ dest: 'public/Newsuploads/' })

// 添加新闻
NewsRouter.post('/adminapi/news/add', upload.single('file'),NewsController.addNews)
// 查询新闻列表
NewsRouter.get('/adminapi/news/findnews', NewsController.findnews)

// 修改新闻发布状态
NewsRouter.post('/adminapi/news/publish', NewsController.publish)

// 点击新编按钮获取单项数据
NewsRouter.get('/adminapi/news/finditem', NewsController.finditem)

// 修改 新闻的数据
NewsRouter.post('/adminapi/news/updataNews', NewsController.updataNews)


// 删除新闻列表的单项
NewsRouter.get('/adminapi/news/deleteitem', NewsController.deleteitem)



module.exports = NewsRouter