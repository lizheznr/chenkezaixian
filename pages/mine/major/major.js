Page({
  data: {
    post:[],  //这是一个空的数组，等下获取到数据库的数据将存放在其中
  },
  onLoad: function (options) {
    var thit = this;
    wx.request({
      url:'http://localhost:8080/wxapp/Classrank.do',
      data: {},
      header:{
        'content-type':'application/json' ,  //默认值
      },
      dataType:'json',
     success:function(res) {
        console.log('读取成功')
        console.log(res.data)  
        thit.setData({
          post:res.data
        })
     },
     fail:function(res) {
      console.log("......fail......")
     }
    })
  }
})