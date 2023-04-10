//  路由层 接口  V层
var express = require('express');
var UserRouter = express.Router();
// 导入 controllers 文件夹里面的 UserController
const UserController = require('../../controllers/admin/UserContrller');
/* GET home page. */
// login 接口

//TODO: 图片上传的中间件 
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

// 注册接口
UserRouter.post('/adminapi/user/addnewuser',UserController.addnewuser)
// 登录接口
UserRouter.post('/adminapi/user/login',UserController.login)
// 修改信息接口
UserRouter.post('/adminapi/user/upload', upload.single('file'), UserController.upload)
// TODO: 注意 我们在提交 文件的时候必须配置  这个中间件 这个 file的中间件
// 添加用户接口
UserRouter.post('/adminapi/user/adduser', upload.single('file'),UserController.adduser)
// list 列表的  增删改查
// 用户裂变table 列表的查询接口
UserRouter.get('/adminapi/user/list', UserController.list)
// 获取对话框信息
UserRouter.get('/adminapi/user/listPsw/:id', UserController.listPsw)
// 更新对话框内容 
// 获取对话框信息
UserRouter.put('/adminapi/user/listUpdata/:id', UserController.listUpdata)

UserRouter.delete('/adminapi/user/list', UserController.delist)

// 导出
module.exports = UserRouter;