// 这里面是接收前端返回信息
// 逻辑层  M
const NewsService = require('../../Services/admin/NewsService');
const NewsController = {
  // 添加新闻
  addNews: async (req, res) => {
    // console.log(req.file);
    // 定义一个要往数据库存的 cover
    // 获取图片文件地址 存入数据库
    const cover = req.file ? `/Newsuploads/${req.file.filename} ` : ''
    // 结构出数据
    const { title, content, category, isPublish } = req.body
    // 创建时间对象
    let editTime = new Date()
    var data = await NewsService.addNews(title, content, Number(category), Number(isPublish), cover, editTime)
    if (data) {
      res.send({ ok: 1, msg: '新闻已创建' })
    } else {
      res.send({ ok: 0, msg: '添加新闻接口错误' })

    }

  },

  // 查询新闻列表
  findnews: async (req, res) => {
    let data = await NewsService.findnews()

    if (data) {
      res.send({ ok: 1, data })
    } else {
      res.send({ ok: 0, msg: 'findnews 接口问题' })
    }
  },

  // 修改新闻发布状态
  publish: async (req, res) => {
    // console.log(req.body);
    const { id, isPublish } = req.body
    // console.log(id, isPublish);
    const data = await NewsService.publish(id, isPublish)
    if (data) {
      res.send({ ok: 1 })
    } else {
      res.send({ ok: 0, msg: 'publish 接口问题' })
    }
  },

  // 点击新编按钮获取单项数据
  finditem: async (req, res) => {
    const { id } = req.query
    // console.log(id);
    const data = await NewsService.finditem(id)
    // res.send({ok : 1})
    // console.log(data);
    if (data) {
      res.send({ ok: 1, data })
    } else {
      res.send({
        ok: 0
      })
    }
  },

  updataNews: async (req, res) => {
    // console.log(req.body);
    const { _id, title, content, category, cover, isPublish } = req.body
    const newTime = new Date()
    const data = await NewsService.updataNews(_id, title, content, category, cover, isPublish, newTime)
    if (data) {
      res.send({
        ok: 1,
        data
      })
    }
  },
  // 删除单项的数据
  deleteitem: async (req, res) => {
    console.log(req.query);
    const { id } = req.query
    const data = await NewsService.deleteitem(id)
    if (data) {
      res.send({ ok: 1, data })
    }
  }
}

module.exports = NewsController