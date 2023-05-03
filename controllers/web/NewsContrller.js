// 这里面是接收前端返回信息
// 逻辑层  M
const NewsService = require('../../Services/web/NewsService');
const NewsController = {
getList : async (req,res)=>{
  // console.log(req.query);
  const { _id } = req.query
  console.log(_id);
  const data = await NewsService.getList(_id)
  // console.log(data);
  res.send({
    ok: 1, data
  })
}
}

module.exports = NewsController