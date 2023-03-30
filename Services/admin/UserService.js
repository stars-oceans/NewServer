// 进行操作数据库 操作 models
// 控制层 C层
const UserModel = require('../../models/UserModel')

const UserService = {
    //登录操作 操作数据库 查找操作
    login: async (username, password) => {
        return UserModel.find({ username, password })
    },
    // 注册
    // UserModel.create({
    //   username : 'aabbbbddddd',
    //   password : '123456666777777777777',
    //   gender : 1,  // 性别, 0, 1, 2
    //   introduction : '你好',  // 介绍
    //   avatar : 'hhh', //头像
    //   role : '1' //管理员 1, 编辑 2
    //   })

    upload:  ( _id, username, introduction, gender, avatar ) => {
        console.log('id6666',_id);
        if(avatar){
            return UserModel.updateOne({ _id }, {
                username : username,
                introduction : introduction,
                gender : gender,
                avatar: avatar,
            })
        }else{
            return UserModel.updateOne({ _id }, {
                username : username,
                introduction : introduction,
                gender : gender,
            })
        }
       
    },

          // 操作数据库 添加操作
  adduser: (username, password, gender,introduction,avatar,role) => {
    return UserModel.create({
        username : username,
        password : password ,
        gender : gender,  // 性别, 0, 1, 2
        introduction :  introduction,  // 介绍
        avatar : avatar, //头像
        role : role //管理员 1, 编辑 2
    })
  },
}
module.exports = UserService