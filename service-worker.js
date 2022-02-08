/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01a27852c2a6564e1704299110d66b6b"
  },
  {
    "url": "assets/css/0.styles.39c81d38.css",
    "revision": "81501f120eb016b7ffd7ef66107f4642"
  },
  {
    "url": "assets/css/style.css",
    "revision": "9fb57900593d3d1ff5545ff56e7c4716"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.be58976a.js",
    "revision": "236adf5a3bd12df73322664cd2d11156"
  },
  {
    "url": "assets/js/10.e6fe08c0.js",
    "revision": "0183da0e2ee25752867696b8db930a5a"
  },
  {
    "url": "assets/js/11.55240806.js",
    "revision": "123756812797823fd1fba79102940d1d"
  },
  {
    "url": "assets/js/12.d1e5a8ae.js",
    "revision": "a5e2671a291c4b6239321f31189e1f58"
  },
  {
    "url": "assets/js/13.6617574a.js",
    "revision": "1c5c802e9e27b00321bb65117a47e03e"
  },
  {
    "url": "assets/js/14.881f4fdb.js",
    "revision": "8e26e240bc29886df50ac3050f250ab1"
  },
  {
    "url": "assets/js/15.1b63af28.js",
    "revision": "d1673eae7ffab8c8e68427855ad8389a"
  },
  {
    "url": "assets/js/16.d9a99c65.js",
    "revision": "15e8e2c192dd7a4c2a603e41e108db50"
  },
  {
    "url": "assets/js/17.fff3e735.js",
    "revision": "371cf0ef62cf0bf1499fc90944d83cc3"
  },
  {
    "url": "assets/js/18.689273ef.js",
    "revision": "2d5e6f909fdbbede02e58cf9f2e40104"
  },
  {
    "url": "assets/js/19.0e9bb319.js",
    "revision": "c5465f4651415eb3253b2ff170fd69ea"
  },
  {
    "url": "assets/js/20.541b0df0.js",
    "revision": "f11ec1440f2f2c363422faf2c4e9d21a"
  },
  {
    "url": "assets/js/21.d603a3f1.js",
    "revision": "3e62f8de1aa40096607098fc061ca9f4"
  },
  {
    "url": "assets/js/22.e9fc19dc.js",
    "revision": "fca2ed9967771e87e6ffc2b142fcfe60"
  },
  {
    "url": "assets/js/23.e4dc1ddb.js",
    "revision": "9571298f3f3bf3a89d0bd2e53b4d55a3"
  },
  {
    "url": "assets/js/24.1a97899e.js",
    "revision": "a4331160dc7427f195eb618465561ee3"
  },
  {
    "url": "assets/js/3.3960a298.js",
    "revision": "61ebed923d32c099b145350661df052c"
  },
  {
    "url": "assets/js/4.cedd2d72.js",
    "revision": "0a1c03ea889e630708169731e5cf8a32"
  },
  {
    "url": "assets/js/5.fdeb44dc.js",
    "revision": "02f0f6980e897ddf8d8234c15f0632c1"
  },
  {
    "url": "assets/js/6.775cefd8.js",
    "revision": "1c84640b23190dea3f362384613a7caf"
  },
  {
    "url": "assets/js/7.25bef7d9.js",
    "revision": "6aae40647ca5bbfd31660e8c82e0c487"
  },
  {
    "url": "assets/js/8.bc463428.js",
    "revision": "d03b9b495cca3e45c83f7a21e63a5a57"
  },
  {
    "url": "assets/js/9.53b743eb.js",
    "revision": "07c68fa39eea83b0c465a3dc6133a66b"
  },
  {
    "url": "assets/js/app.4a381b0e.js",
    "revision": "2fa3c4657374200eaa0516db8ca7cb4f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5b5bc7e393694c85adb1cc4817f1192d"
  },
  {
    "url": "assets/js/jq3.5.1.js",
    "revision": "12b69d0ae6c6f0c42942ae6da2896e84"
  },
  {
    "url": "assets/js/mouse.js",
    "revision": "6185a8b0db8614d03658ed6a50d57093"
  },
  {
    "url": "bpmn/articalFirst.html",
    "revision": "b5ec3e55e0d3c47673ca3219971e8347"
  },
  {
    "url": "categories/index.html",
    "revision": "c6f029694d719fd0a03955fc5a2c8e5b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "219ef32bb4e11f0883fe10afe7c2e5a6"
  },
  {
    "url": "css/articalFirst.html",
    "revision": "8bfd3bfdf5e4703aad602b7fe6f922e5"
  },
  {
    "url": "es6/articleFirst.html",
    "revision": "24e76327c078af418f15832ad1956994"
  },
  {
    "url": "font/css.html",
    "revision": "f7f88e8e53ae498cfaa3eb21f187ed1e"
  },
  {
    "url": "fontend/html.html",
    "revision": "f7449a386c610b9d888dc44893dc73ee"
  },
  {
    "url": "images/bpmn.jpg",
    "revision": "9d8077b18ec79864fd387e3a59ffffef"
  },
  {
    "url": "images/tantucoder.png",
    "revision": "a1461c230a2a4696e86773ac1973d434"
  },
  {
    "url": "images/zhuye1.jpg",
    "revision": "1e45dcbde9792f990874dad7ab5e52ba"
  },
  {
    "url": "index.html",
    "revision": "f866bda6d8e09c1ef6904a8beafe12c1"
  },
  {
    "url": "interview/firstInterview.html",
    "revision": "58a1e47866217c8a92bd2278de58fa34"
  },
  {
    "url": "interview/seconedInterview.html",
    "revision": "9d5edfb090160dc811204b6d70d40b5b"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_00.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_01.png",
    "revision": "720a22559bb19baa113d3f8ec700ac74"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_02.png",
    "revision": "873344a63dbc0bc515d086ffb4403c27"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b94bd46eee96cc28ce93326a1cb38199"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "9c0db268e008a4cca294c7b3a88240f6"
  },
  {
    "url": "tag/index.html",
    "revision": "9ea2e32125969291f7b8295afec3f4be"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6209a641af2a7574c835809207fd356e"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6e2f87e0391b0daefd493b6fcb9fa146"
  },
  {
    "url": "tag/流程图/index.html",
    "revision": "64548fab8cafd6f2592bdba10f84b1ad"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0f2367f6cff7ff066582567d2567b300"
  },
  {
    "url": "timeline/index.html",
    "revision": "dcd68139c307499e8c490a7fa79a0017"
  },
  {
    "url": "toolArticle/Spring-Cloud-note.html",
    "revision": "ce78f57407e7985bc2ae762217fbed06"
  },
  {
    "url": "vue3/articalFirst.html",
    "revision": "69910f6920bc0b68593b7d3f8dda4278"
  },
  {
    "url": "wechat/firstApplet.html",
    "revision": "94dacbf4a8bf8768bbe7fff4edb5bd75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
