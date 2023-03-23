// 这里面是接收前端返回信息
const UserModel = require('../../models/UserModel');
const UserService = require('../../Services/admin/UserService');
const JWT = require('../../util/JWT');

const UserController = {
  login: async function (req, res) {
    //req.body 前端post 请求过来的请求
    // console.log(req,res,"通");
    // console.log(req.body);
    const { username, password } = req.body
    const data = await UserService.login(username, password)
    if(data.length == 0 ){
      res.send({
        code : '-1',
        error : '用户名密码不匹配'
      })
    }else{
      // console.log(data[0]);
      // 存一下token 什么都可以,我们可以存用户信息来生成 token
      // { } 这个对象里面小明都可以存
      const token = JWT.generate({ _id:data[0]._id, username:data[0].username },'60s')
      console.log(token);
      res.send({
        ok: 1
      })
    }
 
  }

}

module.exports = UserController