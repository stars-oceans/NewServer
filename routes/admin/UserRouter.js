var express = require('express');
var UserRouter = express.Router();
// 导入 controllers 文件夹里面的 UserController
const UserController = require('../../controllers/admin/UserContrller');
/* GET home page. */
// login 接口

// 图片上传的中间件
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })


UserRouter.post('/adminapi/user/login',UserController.login)
UserRouter.get('/adminapi/user/home', (req, res)=>{
  res.send('我是模拟 token 的访问!!!')
})

UserRouter.post('/adminapi/user/upload', upload.single('file'), UserController.upload)

module.exports = UserRouter;