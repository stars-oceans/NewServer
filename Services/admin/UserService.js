// 进行操作数据库 操作 models
// 控制层 C层
const UserModel = require('../../models/UserModel')

const UserService = {
    //登录操作 操作数据库 查找操作
    // 注册  只需要两个字段，其他为默认或空
    addnewuser: async (username, password) => {
        return UserModel.create({
            username: username,
            password: password,
            gender: null,  // 性别, 0, 1, 2
            introduction: '',  // 介绍
            avatar: '', //头像
            role: '0' //管理员 1, 编辑 0
        })
    },
    // 登录
    login: async (username, password) => {
        return UserModel.find({ username, password })
    },

    upload: (_id, username, introduction, gender, avatar) => {
        console.log('id6666', _id);
        if (avatar) {
            return UserModel.updateOne({ _id }, {
                username: username,
                introduction: introduction,
                gender: gender,
                avatar: avatar,
            })
        } else {
            return UserModel.updateOne({ _id }, {
                username: username,
                introduction: introduction,
                gender: gender,
            })
        }

    },

    // 操作数据库 添加操作
    adduser: (username, password, gender, introduction, avatar, role) => {
        return UserModel.create({
            username: username,
            password: password,
            gender: gender,  // 性别, 0, 1, 2
            introduction: introduction,  // 介绍
            avatar: avatar, //头像
            role: role //管理员 1, 编辑 2
        })
    },
    //   list列表 接口的查询
    findList: () => {
        return UserModel.find({}, ['username', 'avatar', 'role'])
    },
    // 获取对话框信息
    findListPsw: (id) => {
        return UserModel.find({ _id: id }, ['username', 'password', 'role', 'introduction'])
    },
    // 修改用户信息
    findListUpdata: (id, username, password, role, introduction) => {
        return UserModel.updateOne({ _id: id }, {
            username: username,
            password: password,
            role: role,
            introduction: introduction,
        })
    },
    //  list列表 接口的删除
    delist: (id) => {
        return UserModel.deleteOne({
            _id: id
        })
    }
}
module.exports = UserService