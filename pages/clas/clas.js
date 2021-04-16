Page({
  data: {
    currentId: '1',
    mapUrl: "",
    videoimage: "block", //默认显示封面
    mychoose:[
      {
        id:1,
        content:"班级风采"
      }
    ],
    menu:[
      {
        id:'01',
        src:"",
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbR8wrb5MdYD94J*.GvatBR5nAaTh1E50e3EPi3AOSywnY6LHXx0TIcKyMrR*mrVt0g!!/mnull&bo=zALIAAAAAAADByQ!&rf=photolist&t=5",
        txt:"出彩的班级演讲效果，好的演讲会带来高涨的气氛",
        writer:"繁华巷听栏",
        comment:315
      },
      {
        id:'02',
        src:"",
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbdkx50LfiVg2qDAJzuh6YTwy3Z63TN.CuzohAfLT.l0TKOW072.Yerg6yUwRpT6MLg!!/mnull&bo=vALOAQAAAAARB0E!&rf=photolist&t=5",
        txt:"演讲好的班级，有哪些地方值得学习的呢",
        writer:"听风者",
        comment:219
      }
    ],
    //第二部分数据数组item
    contentImgUrls:[
      {
        id:'01',
        title:'班级排名',
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbbDJuj6SCeT6k6QDuJfyNUDxjktUtNFCzJmbhthpl4Jk1u08zWnECwn4wXMOKl5eCg!!/mnull&bo=xwGXAQAAAAADB3I!&rf=photolist&t=5"
      }, {
        id:'02',
        title:'个人荣誉集合',
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbdKFPZ5y2do2QYkG7WDvHWaRf37JcNvhGjjDhKzGojyjj1v1Y873Ex.u.vLROBvUDA!!/mnull&bo=4wCvAAAAAAARB3w!&rf=photolist&t=5"
      },{
        id:'03',
        title:'比赛成绩',
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbauhsXR61X5*EEKOm.c6WbxXQqiz2Ofh*I4vpKsC2cWtlVLl2YrupuIBAZT4bQS36w!!/mnull&bo=oAU4BAAAAAARB6k!&rf=photolist&t=5"
      },{
        id:'04',
        title:'月冠军集合',
        imgUrl:"http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbZafaOsiioWigH6TIV2UXLqwDFkAOkEwQmaKLyzWUdAa0a1EzbX37EhwQLk7haWMcA!!/mnull&bo=WAJXAQAAAAARBzw!&rf=photolist&t=5"
      }
    ],
    //第三部分数据
    HotImgUrls: [
      {
        //头像地址,文字标题,文字内容,图片地址
        id:'01',
        head: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbeTKNOxIBb*bFBPt9*JbGETujZHkPY3p3tEJcduch7Hb1YXDEZEnPq91UAHMuLVcXg!!/mnull&bo=vAK8AgAAAAARBzA!&rf=photolist&t=5',
        title: '演讲PPT',
        content: '一次好的演讲当然离不开一份优秀的PPT。对于演讲者而言，PPT可以引导主题，概括内容，深入开展演讲；对于听众而言，可以让听众将想象、听觉和视觉结合起来。',
        url: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbcinZ3YZK9acXG0BLYuffqmEzYYAASkhyT.hRjPuo.*P*O6b0g8Zo7n3nSwB1c2Msg!!/mnull&bo=gARgAwAAAAARB9c!&rf=photolist&t=5'
      }
    ],
  },
  // 选项卡切换
  clicked:function(e){
    let id = e.currentTarget.id;
    if(id){
      this.setData({
        currentId:id
      })
    }
  },

  

  // 图文点击跳转 第一部分
 pageskip:function(e){
   var $id = e.currentTarget.dataset.id;//获取对应的ID
   console.log($id)
   if('01' == $id){
    wx.navigateTo({
      url: './changepage/switch1/switch1',
    })
   }
   if('02' == $id){
    wx.navigateTo({ 
      url: './changepage/switch2/switch2',
    })
   }
 },
 pageskip3:function(){
  wx.navigateTo({
    url: './changepage/switch3/switch3',
  })
 },

 // 图文点击跳转 第二部分
 skip:function(e){
  var $id = e.currentTarget.dataset.id;//获取对应的ID
  console.log($id)
  if('01' == $id){
   wx.navigateTo({
     url: './changepage/skip1/skip1',
   })
  }
  if('02' == $id){
   wx.navigateTo({ 
     url: './changepage/skip2/skip2',
   })
  }
  if('03' == $id){
    wx.navigateTo({ 
      url: './changepage/skip3/skip3',
    })
   }
   if('04' == $id){
    wx.navigateTo({ 
      url: './changepage/skip4/skip4',
    })
   }
},
// 图文点击跳转 第三部分
jump:function(e){
  var $id = e.currentTarget.dataset.id;//获取对应的ID
  console.log($id)
  if('01' == $id){
   wx.navigateTo({
     url: './changepage/jump2/jump2',
   })
  }
},
})