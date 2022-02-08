"use strict";

module.exports = {
  theme: 'reco',
  title: 'SmoothRoadの博客',
  description: '',
  head: [['link', {
    rel: 'icon',
    href: '/favicon.ico'
  }], ['meta', {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1,user-scalable=no'
  }], ["meta", {
    name: "robots",
    content: "all"
  }], ["meta", {
    name: "author",
    content: "坦途"
  }], ['meta', {
    name: 'keywords',
    content: '坦途の博客'
  }], // ['script', { type: 'text/javascript', src: '/assets/js/baidu.js' }],
  ['link', {
    rel: 'stylesheet',
    href: '/assets/css/style.css'
  }], ["link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
  }], ['script', {}, "\n            var _hmt = _hmt || [];\n            (function() {\n                var hm = document.createElement(\"script\");\n                hm.src = \"https://hm.baidu.com/hm.js?a949a9b30eb86ac0159e735ff8670c03\";\n                var s = document.getElementsByTagName(\"script\")[0];\n                s.parentNode.insertBefore(hm, s);\n\n                // \u5F15\u5165\u8C37\u6B4C,\u4E0D\u9700\u8981\u53EF\u5220\u9664\u8FD9\u6BB5\n                var hm1 = document.createElement(\"script\");\n                hm1.src = \"https://www.googletagmanager.com/gtag/js?id=UA-169923503-1\";\n                var s1 = document.getElementsByTagName(\"script\")[0]; \n                s1.parentNode.insertBefore(hm1, s1);\n            })();\n\n            // \u8C37\u6B4C\u52A0\u8F7D,\u4E0D\u9700\u8981\u53EF\u5220\u9664\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-169923503-1');\n        "], ['script', {}, "var _hmt = _hmt || [];\n(function() {\n  var hm = document.createElement(\"script\");\n  hm.src = \"https://hm.baidu.com/hm.js?1f90cc8c7b303ae5a5aaf9271e2e56f5\";\n  var s = document.getElementsByTagName(\"script\")[0]; \n  s.parentNode.insertBefore(hm, s);\n})();"], ['script', {
    "data-ad-client": "ca-pub-6661696030972028",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  }, ""], ['script', {
    src: "/assets/js/jq3.5.1.js"
  }, ""], ['script', {
    src: "/assets/js/mouse.js"
  }, ""]],
  plugins: [["ribbon-animation", {
    size: 90,
    // 默认数据
    opacity: 0.3,
    //  透明度
    zIndex: -1,
    //  层级
    opt: {
      // 色带HSL饱和度
      colorSaturation: "80%",
      // 色带HSL亮度量
      colorBrightness: "60%",
      // 带状颜色不透明度
      colorAlpha: 0.65,
      // 在HSL颜色空间中循环显示颜色的速度有多快
      colorCycleSpeed: 6,
      // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      verticalPosition: "center",
      // 到达屏幕另一侧的速度有多快
      horizontalSpeed: 200,
      // 在任何给定时间，屏幕上会保留多少条带
      ribbonCount: 2,
      // 添加笔划以及色带填充颜色
      strokeSize: 0,
      // 通过页面滚动上的因子垂直移动色带
      parallaxAmount: -0.5,
      // 随着时间的推移，为每个功能区添加动画效果
      animateSections: true
    },
    ribbonShow: false,
    //  点击彩带  true显示  false为不显示
    ribbonAnimationShow: true // 滑动彩带

  }], ['@vuepress/back-to-top'], ["dynamic-title", {
    showIcon: "/favicon.ico",
    showText: "(/≧▽≦/)欢迎回来！",
    hideIcon: "/failure.ico",
    hideText: "(●—●)哦吼,不要走！",
    recoverTime: 2000
  }], ['reading-progress'], ['meting', {
    //metingApi: "https://meting.sigure.xyz/api/music",
    meting: {
      // 网易
      server: "netease",
      // netease:网易云，tencent:qq音乐，xiami:虾米音乐
      // 读取歌单
      type: "playlist",
      mid: "3136952023"
    },
    // 不配置该项的话不会出现全局播放器
    aplayer: {
      // 吸底模式
      // fixed: true,
      mini: true,
      // 自动播放
      // autoplay: true,
      // 歌曲栏折叠
      listFolded: true,
      // 颜色
      theme: '#0ae6ec',
      // 播放顺序为随机
      order: 'random',
      // 初始音量
      volume: 0.4,
      // 关闭歌词显示
      lrcType: 0
    },
    mobile: {
      lrc: true // 手机端去掉cover图
      // cover: false,

    }
  }], ['@vuepress/pwa', {
    serviceWorker: true,
    //指向自定义组件
    popupComponents: 'MySWUpdatePopup',
    updatePopup: {
      message: "新的风暴已经出现",
      buttonText: "盘他"
    }
  }], ['vuepress-plugin-comment', {
    choosen: 'valine',
    // options选项中的所有参数，会传给Valine的配置
    options: {
      el: '#valine-vuepress-comment',
      appId: '4HkIsBE5McVSYWPxwJFkMCxc-gzGzoHsz',
      appKey: 'hwdAubQyuGnwkk2n64gTF8oV'
    }
  }], ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
    theme: ['miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'],
    clean: false,
    messages: {
      welcome: '欢迎来到我的博客',
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '你不喜欢我了吗？痴痴地望着你。'
    },
    messageStyle: {
      right: '68px',
      bottom: '290px'
    },
    width: 200,
    height: 280
  }], ["sakura", {
    //页面樱花插件
    num: 30,
    // 默认数量
    show: true,
    zIndex: 2,
    img: {
      replace: false,
      // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径

    }
  }]],
  themeConfig: {
    // 博客配置
    authorAvatar: '/images/avatar.webp',
    type: 'blog',
    mode: 'dark',
    modeOptions: [{
      mode: 'dark',
      title: '夜晚'
    }, {
      mode: 'auto',
      title: '自动'
    }, {
      mode: 'light',
      title: '白天'
    }],
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新时间',
    // string | boolean
    startYear: '2022',
    subSidebar: 'auto',
    // keyPage: {
    //   keys: ['5a804469a4d2d7fe73670b4d697fa3c8'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: '美文',
            // 默认 文章
            tag: '标识',
            // 默认 标签
            category: '类别',
            // 默认 分类
            friendLink: '友链' // 默认 友情链接

          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    blogConfig: {
      category: {
        location: 2,
        // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”

      },
      tag: {
        location: 3,
        // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”

      },
      socialLinks: [// 信息栏展示社交信息
      {
        icon: 'reco-github',
        link: 'https://github.com/recoluan'
      }, {
        icon: 'reco-npm',
        link: 'https://www.npmjs.com/~reco_luan'
      }]
    },
    nav: [{
      text: "主页",
      link: "/"
    }, {
      text: "前端",
      // 二级菜单配置
      items: [{
        text: "ES6语法",
        items: [{
          text: "ES6基础知识",
          link: "es6/articleFirst"
        }]
      }, {
        text: "2022年 02月 07日 vue3成为正式版本（记录）",
        items: [{
          text: '记录更新vue3.0的开源UI组件库',
          link: '/vue3/articalFirst'
        }]
      }, {
        text: "CSS基础知识",
        items: [{
          text: "CSS基础知识",
          link: "css/articalFirst"
        }]
      }, {
        text: "bpmn流程图",
        items: [{
          text: "bpmn流程图踩坑完成",
          link: "bpmn/articalFirst"
        }]
      }]
    }, {
      text: '网站',
      link: 'http://doc.itclan.cn'
    }, // 后面直接是链接
    {
      text: '小程序',
      items: [{
        text: "小程序文章",
        link: "/wechat/firstApplet/"
      }]
    }, {
      text: '面试',
      items: [{
        text: "【转】由浅入深，JavaScript面试知识点",
        link: '/interview/firstInterview'
      }, {
        text: "简历中的“项目经验”该怎么写？",
        link: '/interview/seconedInterview'
      }]
    }, {
      text: "工具",
      items: [{
        text: "思维导图",
        items: [{
          text: "zhiMap",
          link: "https://zhimap.com/home"
        }, {
          text: "processOn",
          link: "https://www.processon.com/"
        }, {
          text: "gitmind",
          link: "https://gitmind.cn/"
        }]
      }, {
        text: "文档管理",
        items: [{
          text: "语雀",
          link: "https://www.yuque.com/dashboard"
        }, {
          text: "腾讯文档",
          link: "https://docs.qq.com/desktop"
        }]
      }, {
        text: "实用工具",
        items: [{
          text: "声享-做ppt",
          link: "https://ppt.baomitu.com/"
        }, {
          text: "马克鳗-量标注",
          link: "http://www.getmarkman.com/l"
        }]
      }, {
        text: "博客创建踩坑记录",
        items: [{
          text: "【转】VuePress 中增加用户登录功能",
          link: "https://my.oschina.net/u/171860/blog/3134768?_from=gitee_rec"
        }, {
          text: "Markdown语法",
          link: "/toolArticle/Spring-Cloud-note"
        }, {
          text: "Vuepress中使用Vue组件",
          link: "/fontend/html/"
        }, {
          text: "[转]Vuepress中Last Updated时间有误",
          link: "/font/css/"
        }]
      }]
    }, {
      text: 'TimeLine',
      link: '/timeline/',
      icon: 'reco-date'
    }, {
      text: '快速访问🎈',
      icon: 'reco-menu',
      items: [{
        text: '阿里云',
        link: 'https://www.aliyun.com/'
      }, {
        text: '阿里巴巴图标库',
        link: 'https://www.iconfont.cn/'
      }, {
        text: 'Microservices  ——Martin Flower',
        link: 'http://www.bdata-cap.com/newsinfo/1713874.html'
      }, {
        text: 'LeetCode',
        link: 'https://leetcode-cn.com/'
      }, {
        text: 'Vue.js',
        link: 'https://cn.vuejs.org/v2/guide/'
      }, {
        text: 'Element',
        link: 'https://element.eleme.cn/#/zh-CN'
      }, {
        text: 'Java SE API Documentation',
        link: 'https://docs.oracle.com/javase/8/docs/api/index.html'
      }, {
        text: 'Avue.js',
        link: 'https://avuejs.com'
      }, {
        text: 'Spring',
        link: 'https://spring.io/'
      }, {
        text: 'Maven repository',
        link: 'https://mvnrepository.com/'
      }, {
        text: 'Stack Overflow',
        link: 'https://stackoverflow.com/'
      }, {
        text: 'Linux命令大全',
        link: 'https://www.linuxcool.com/'
      }, {
        text: '编程语言排行榜',
        link: 'https://www.tiobe.com/tiobe-index/'
      }, {
        text: '干杯！',
        link: 'https://www.bilibili.com/'
      }, {
        text: '网易云音乐',
        link: 'https://music.163.com/#/my/m/music/playlist?id=5261808563'
      }]
    }, {
      text: '联系',
      icon: 'reco-suggestion',
      items: [{
        text: '邮箱',
        icon: 'reco-github',
        link: 'wang734696199@163.com'
      }]
    }],
    markdown: {
      extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
      lineNumbers: true
    },
    "friendLink": [{
      "title": 'Alex',
      'link': 'https://blog.alexcld.com',
      'desc': "children don't lie"
    }, {
      "title": "稀土掘金",
      "desc": "",
      "link": "https://juejin.cn/"
    }, {
      "title": "码云",
      "desc": "",
      "link": "https://gitee.com/smooth-road"
    }, {
      "title": "黄金豆の博客",
      "desc": "",
      "link": "https://blog.csdn.net/ChuanChuan__/article/details/120023070?utm_source=app&app_version=5.0.0"
    }, {
      "title": "B站",
      "desc": "",
      "link": "https://www.bilibili.com/"
    }]
  }
};