// 这里面是接收前端返回信息
const UserModel = require('../../models/UserModel');
const UserService = require('../../Services/admin/UserService');
const JWT = require('../../util/JWT');

const UserController = {
  // login 接口
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
          username: data[0].username,
          gender: data[0].gender,  // 性别, 0, 1, 2
          introduction: data[0].introduction,  // 介绍
          avatar: data[0].avatar, //头像
          role: data[0].role //管理员 1, 编辑 2
        }
      })
    }

  },

  // upload 接口
  upload: async function (req, res) {
    // console.log(req.file);
    let { username, introduction, gender } = req.body
    // 看是否传有头像,如果有就拼接字符串,如果没有就为 
    let avatar = req.file?`/avataruploads/${req.file.filename}` : ''
    const token = req.headers.authorization.split(' ')[1]
    let payload = JWT.verify(token)

    console.log(payload._id);
    let _id = payload._id
    let newgender = Number(gender)
    let data = await UserService.upload(_id, username, introduction, newgender, avatar)

    if (data) {
      console.log('已经发发出！');
      if (avatar) {
        res.send({
          ok: 1,
          data: {
            username,
            introduction,
             gender : newgender,
            avatar
          }
        })
      }else{
        res.send({
          ok: 1,
          data: {
            username,
            introduction,
             gender : newgender,
          }
        })
      }
    } else {
      res.send('修改数据发生错误！')
    }

  }
}

module.exports = UserController