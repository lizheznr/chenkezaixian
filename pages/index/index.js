//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    talk:[
      {
        id:1,
        title:"今日推荐",
        src:"recommend/recommend",
        imgUrl:"imgs/recommend.png"
      },
      {
        id:2,
        title:"最近演讲",
        src:"recent/recent",
        imgUrl:"imgs/recent.png"
      },
      {
        id:3,
        title:"年级排名",
        src:"../mine/myclass/myclass",
        imgUrl:"imgs/major.png"
      },  
      {
        id:4,
        title:"下期内容",
        src:"next/next",
        imgUrl:"imgs/next.png"
      }
    ],
    share:[
      {
        id:1,
        content:"如何缓解紧张情绪，避免思维混乱",
        imgUrl:"imgs/share_1.jpg",
        src:"share/01/01",
        time:"2019-12-03"
      },
      {
        id:2,
        content:"如何锻炼口才能力和反应能力",
        imgUrl:"imgs/share_2.jpg",
        src:"share/02/02",
        time:"2019-06-23"
      },
      {
        id:3,
        content:"演讲中如何使用手势",
        imgUrl:"imgs/share_3.jpg",
        src:"share/03/03",
        time:"2019-01-12"
      },
      {
        id:4,
        content:"脱稿演讲的要点和技巧",
        imgUrl:"imgs/share_4.jpg",
        src:"share/04/04",
        time:"2019-01-19"
      },
      {
        id:5,
        content:"公共场合演讲的技巧",
        imgUrl:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1341172721,3640354500&fm=173&s=6855A944FA0228DE4BF7509203009098&w=640&h=480&img.JPEG",
        src:"share/05/05",
        time:"2018-12-22"
      },
      {
        id:6,
        content:"演讲的重要性，学会演讲是一个非常好的事情",
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586163159516&di=c1b5db51163d4209d31121b081487d76&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1706%2F28-1F60Q00920646.jpg",
        src:"share/06/06",
        time:"2018-11-13"
      },
      {
        id:7,
        content:"演讲的语言有禁忌！演讲中，这个几个雷区......",
        imgUrl:"https://5b0988e595225.cdn.sohucs.com/images/20180425/ba506c1da81b4be2acc79fc44f3915f6.png",
        src:"share/07/07",
        time:"2018-10-09"
      },
      {
        id:8,
        content:"一次完整的演讲必经3个阶段",
        imgUrl:"imgs/share_4.jpg",
        src:"share/08/08",
        time:"2018-04-20"
      }
    ]







  }
})
