const ProductModel = require('../../models/ProductModel')

const ProductService = {
      // 添加产品
      add: (title, introduction, detail, cover, ediTime) => {
            // console.log(ediTime);
            return ProductModel.create({
                  title,
                  introduction,
                  detail,
                  cover,
                  
                  ediTime
            })
      },

      findList:()=>{
            return ProductModel.find()
      },

      // 查找单项
      finditem:(_id)=>{
            return ProductModel.find(
                  {_id},
                  {})
      },

      updataProduct:(_id,title,detail,introduction,cover,newTime)=>{
            return ProductModel.updateOne({_id},{
                  title,
                  detail,
                  introduction,
                  cover,
                  ediTime : newTime
            })
      },

      deleteitem:(_id)=>{
            return ProductModel.deleteOne({_id})
      }

}


module.exports = ProductService