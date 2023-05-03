const ProductService = require("../../Services/admin/ProductService");

const ProductContrller = {
// 添加产品
  add: async (req, res) => {
    //  console.log(req.file);
    //  console.log(req.body);
    const { title, introduction, detail } = req.body
    const cover = req.file ? `/ProductCover/${req.file.filename} ` : ''
    const ediTime = new Date()
    let data = await ProductService.add(title, introduction, detail, cover, ediTime)
    // console.log(data);
    if (data) {
      res.send({ ok: 1, data })
    } else {
      res.send('Productadd接口出错')
    }

  },

  // 查询 产品 列表
  findList: async (req, res)=>{
      const data = await ProductService.findList()
      // console.log(data);
      res.send({
        ok:1,
        data
      })
  },

  // 查询单项信息
  finditem:  async (req, res)=>{  
    // console.log(req.query);
    // 获取 id 值
    const { id } = req.query
    // console.log(id);
    const data = await ProductService.finditem(id)
    // console.log(data);
    res.send({ ok : 1, data })
  },

// 修改 单项信息
  updataProduct: async (req, res)=>{
    // console.log(req.file);
    // console.log(req.body);
    const { _id, title, detail, introduction,cover } = req.body
    const newcover = req.file ? `/ProductCover/${req.file.filename} ` : cover
    const newTime = new Date()

    let data = await ProductService.updataProduct(_id,title,detail,introduction,newcover,newTime)
    // console.log(data);
    if (data) {
        res.send({
          ok:1,
          data
        })
    }
    
  },

  // 删除 单项产品
  deleteitem :async (req, res)=>{
      const { id } = req.query
      console.log(id);
      const data = await ProductService.deleteitem(id)
      console.log(data);
      if (data) {
          res.send({
            ok : 1,
            data
          })
      }
  }

}

module.exports = ProductContrller