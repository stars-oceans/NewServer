const mongoose = require('mongoose')
const Schema  = mongoose.Schema
// user 模型====>users 集合

const ProductType = {
  title : String,
  detail : String,
  introduction : String,  // 介绍
  cover : String, //封面
  ediTime : Date
}

const ProductModel =  mongoose.model('product',new Schema(ProductType))

//模型 user 将会对应的 users 集合
module.exports = ProductModel