Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { 
        isPlaying: false,  
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbcFRUKMt5FzvQLXGgNyXrpz5m1Inw7iwcJRX8DywnjOupDiglz9Tf9600F10HLqg6A!!/mnull&bo=WAKQAQAAAAARB*s!&rf=photolist&t=5',   
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%916.mp4?sign=145447aa89a14113827a894e9d95d166&t=1586159565',
        txt:"李玉——“时间的重量”",},
      { 
        isPlaying: false, 
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbT47p0lnURjqr71lKWZCuT1VZpJc2jv*.TaKS*b.2UJMRunjEhp7fLKXZAvvXfczUg!!/mnull&bo=WAKQAQAAAAARB*s!&rf=photolist&t=5', 
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%915.mp4?sign=5c0ed4acd2708c53396686b172f179de&t=1586159512',
        txt:"王林——“岔路口”",},
      { 
        isPlaying: false, 
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXba405kD*m85*oNcA4p8el10utoFekC6p0Q2OlgFlNixNcERoMq512P8gf6KiJMxm1Q!!/mnull&bo=JQJuAQAAAAARB3g!&rf=photolist&t=5',  
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%914.mp4?sign=d51ac10e6bb18e49819db1d2247185f9&t=1586158506' ,
        txt:"张磊——“誉满天下,谤满天下”",},
      { 
        isPlaying: false, 
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbT*bC5MvYXyitdmohRzlNNx2dDxDSeCCDNUezZTDMe3dKS4zm0eslL.6G4J.72.nDA!!/mnull&bo=9QFTAQAAAAARB5Y!&rf=photolist&t=5',  
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%913.mp4?sign=172d3e47e0e0fbc4a4f76114daef31b9&t=1586158442' ,
        txt:"张晴——“菩提本非木,明镜亦非台;本自无一物,何处惹尘埃。”",},
      { 
        isPlaying: false, 
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbXTLI29*g0KwDBcV0MEBk2UqrE4qdTcGcJU8cjHay1m3BmNYZwQZCMhxI26LmKlKpw!!/mnull&bo=TAJpAQAAAAARBxY!&rf=photolist&t=5',  
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%91.mp4?sign=611a6faf4f531e81cf3b79a8e011f087&t=1586157865', 
        txt:"胡柳——“生命中的空白”",},
      { 
        isPlaying: false,  
        poster: 'http://m.qpic.cn/psc?/V11h8Exn09veod/U3..NSiujzLMR7a*2QgXbXQ*izHKQtIrjyLR5CDHXG0dk1Ec6DtP5PNnVdQ3ywrVvWZXFnmbzBsZOrSmgg73Pw!!/mnull&bo=uQJoAQAAAAARB.I!&rf=photolist&t=5', 
        video_url: 'https://7363-score-app-tzlae-1301773497.tcb.qcloud.la/%E8%A7%86%E9%A2%912.mp4?sign=b0b2634a10418b9a414da6fdd4e93bad&t=1586157721',
        txt:"刘宇  ——“不必要完美”", },
    ]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
 
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var length = this.data.list.length
    var id = e.currentTarget.id
    if (!this.data.playIndex) { // 没有播放时播放视频
      this.setData({
        playIndex: id
      })
      var videoContext = wx.createVideoContext(['index', id].join(''))
      videoContext.play()
    } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext(['index', this.data.playIndex].join(''))
      videoContextPrev.seek(0)
      videoContextPrev.pause()
      this.setData({
        playIndex: id
      })
      var videoContextCurrent = wx.createVideoContext(['index', this.data.playIndex].join(''))
      videoContextCurrent.play()
    }
  }
})