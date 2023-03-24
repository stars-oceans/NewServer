// 这里面是接收前端返回信息
const UserModel = require('../../models/UserModel');
const UserService = require('../../Services/admin/UserService');
const JWT = require('../../util/JWT');

const UserController = {
  login: async function (req, res) {
    // console.log(req.body);
    const { username, password } = req.body
    const data = await UserService.login(username, password)
    // 判断是否数据库端查询到信息
    if (data.length == 0) {
      res.send({
        code: '-1',
        error: '用户名密码不匹配'
      })
    } else {
      // console.log(data[0]);
      // 存一下token 什么都可以,我们可以存用户信息来生成 token
      // { } 这个对象里面小明都可以存
      const token = JWT.generate({ _id: data[0]._id, username: data[0].username }, '1d')
      // console.log(token);
      // 发给前端响应头
      res.header('Authorization', token)
      res.send({
        ok: 1,
        data: {
            username : data[0].username,
            gender : data[0].gender,  // 性别, 0, 1, 2
            introduction : data[0].introduction,  // 介绍
            avatar : data[0].avatar, //头像
            role : data[0].role //管理员 1, 编辑 2
        }
      })
    }

  }

}

module.exports = UserController