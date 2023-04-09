const mongoose = require('mongoose')
const Schema  = mongoose.Schema
// user 模型====>users 集合

const UserType = {
  title : String,
  content : String,
  category : Number,  // 类型,  1, 2, 3
  cover : String,  // 封面
  isPublish : Number, //0 未发布, 1 已发布
  editTime : Date //管理员 1, 编辑 0
}

const NewsModel =  mongoose.model('news',new Schema(UserType))

//模型 user 将会对应的 users 集合
module.exports = NewsModel