var data = {
      //云开发环境id
      env: 'peiben895800',
      //分享配置
      share_title: '培正舟海二手书',
      share_img: '/images/poster.jpg',
      share_poster: 'https://7065-peiben895800-1257752863.tcb.qcloud.la/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E5%BE%AE%E4%BF%A1%E6%A0%87%E5%87%86%E7%BB%BF%E7%89%88.png?sign=3976a0e39e43244ce92943b1018f7820&t=1609296715',//必须为网络地址
      //客服联系方式
      kefu: {
            weixin: 'Cai895800',
            qq: '895837900',
            gzh: 'https://7065-peiben895800-1257752863.tcb.qcloud.la/qrcode_for_gh_1eaa1af72e3b_258.jpg?sign=dbc6056bed10e7670889cca1ab5345fa&t=1610868931', //公众号二维码必须为网络地址
            phone: '' 
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
      bgurl: '/images/startBg.jpg',
      //校区
      campus: [{
            name: '培正公寓',
            id: 0
      },
      {
            name: '培正北区',
            id: 1
      },
      {
            name: '培正南区',
            id: 2
      },
      {
            name: '培正中区',
            id: 3
      },
      ],
      //配置学院
      college: [{
            name: '通用',
            id: -1
      },
      {
            name: '外国语',
            id: 0
      },
      {
            name: '管理',
            id: 1
      },
      {
            name: '经济',
            id: 2
      },
      {
            name: '会计',
            id: 3
      },
      {
            name: '法学',
            id: 4
      },
      {
            name: '人文',
            id: 5
      },
      {
            name: '数科',
            id: 6
      },
      {
            name: '艺术',
            id: 7
      },
      {
            name: '公必',
            id: 8
      },
      {
            name: '公选',
            id: 9
      },
      {
            name: '其他',
            id: 10
      },
      ],
}
//计时器
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}