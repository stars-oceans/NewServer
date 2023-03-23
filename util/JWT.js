const jsonwebtoken = require('jsonwebtoken')
// 钥匙
const secret = 'yhc'
/* 
 *JWT.generate() : '加密'
 *JWT.verify() : '解密'
*/
const JWT = { 
  // 加密方法 调用
  // value 前端过来的东西
  generate(value, extime){
    // 1.value : 需要加密的东西, 2.secret后端密匙, 3.exTime : 过期时间
    return jsonwebtoken.sign(value, secret, { expiresIn : extime })
  },
  // 解密方法
  verify(token){
    try{
      // 1.token 生成的 token,  2.secret 密匙
      return jsonwebtoken.verify(token, secret)      
    }catch(error){
      return false
    }
  }
}

module.exports = JWT