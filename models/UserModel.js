const mongoose = require('mongoose')
const Schema  = mongoose.Schema
// user 模型====>users 集合

const UserType = {
  username : String,
  password : String,
  gender : Number,  // 性别, 0, 1, 2
  introduction : String,  // 介绍
  avatar : String, //头像
  role : Number //管理员 1, 编辑 2
}

const UserModel =  mongoose.model('user',new Schema(UserType))

//模型 user 将会对应的 users 集合
module.exports = UserModel