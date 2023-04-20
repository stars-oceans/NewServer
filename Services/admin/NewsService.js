const NewsModel = require('../../models/NewsModel')

const NewsService = {
      // 添加新闻
      addNews: (title, content, category, isPublish, cover, editTime) => {
            // console.log(title,content,category,isPublish,cover);
            return NewsModel.create({
                  title,
                  content,
                  category,
                  isPublish,
                  cover,
                  editTime  //时间
            })
      },

      // 查询新闻列表
      findnews: () => {
            return NewsModel.find()
      },

      // 修改新闻发布状态
      publish: (id, isPublish) => {
            return NewsModel.updateOne({ _id: id }, {
                  isPublish: isPublish
            })
      },

      // 点击新编按钮获取单项数据
      finditem: (id) => {
            return NewsModel.findOne({ _id : id }, ['title','content','category','cover','isPublish','editTime'])
      },

      // 修改新闻
      updataNews:(_id,title,content,category,cover,isPublish,newTime)=>{
            return NewsModel.updateOne({_id},{
                  title : title,
                  content : content,
                  category : category,  // 类型,  1, 2, 3
                  cover : cover,  // 封面
                  isPublish : isPublish, //0 未发布, 1 已发布
                  editTime : newTime //管理员 1, 编辑 0
            })
      },
        // 删除单项的数据
      deleteitem:(id)=>{
      return NewsModel.deleteOne({_id: id})
      }
}


module.exports = NewsService