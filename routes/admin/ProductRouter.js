//  路由层 接口  V层
var express = require('express');
var ProductRouter = express.Router();
const ProductContrller = require('../../controllers/admin/ProductContrller')

//TODO: 图片上传的中间件 
const multer  = require('multer')
const upload = multer({ dest: 'public/ProductCover/'})

// 添加产品
ProductRouter.post('/adminapi/Product/add',upload.single('file'),ProductContrller.add)

// 查询 产品 列表
ProductRouter.get('/adminapi/Product/findList', ProductContrller.findList)

// 查询单项信息
ProductRouter.get('/adminapi/Product/finditem', ProductContrller.finditem)

// 修改 单项信息
ProductRouter.post('/adminapi/Product/updataProduct',upload.single('file'), ProductContrller.updataProduct)

ProductRouter.get('/adminapi/Product/deleteitem',ProductContrller.deleteitem)




module.exports = ProductRouter;
