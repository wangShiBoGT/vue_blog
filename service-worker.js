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
    "revision": "03a46954b2e196172924ca1a3a3c9fc2"
  },
  {
    "url": "assets/css/0.styles.b9167f9f.css",
    "revision": "540d7c4ae9fb826feebf5f6497349257"
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
    "url": "assets/js/1.527bea87.js",
    "revision": "ab63a79ac8672bbe694b54af7930ef82"
  },
  {
    "url": "assets/js/10.7618f4ec.js",
    "revision": "998149adf06ba5562be837151827c758"
  },
  {
    "url": "assets/js/11.352c8d99.js",
    "revision": "ac95efc624f99b824ebf20942a2fa184"
  },
  {
    "url": "assets/js/12.213fa243.js",
    "revision": "68953e774ac7447f144363b8cdb4a5b3"
  },
  {
    "url": "assets/js/13.f9695afa.js",
    "revision": "2ef533c10b2ceb57b8e37580b7bbba60"
  },
  {
    "url": "assets/js/14.bc2d64b9.js",
    "revision": "eec986ed760e5dc028872bc614052515"
  },
  {
    "url": "assets/js/15.bb1a01eb.js",
    "revision": "535885baa9dac5998fcaebccb0dd23e8"
  },
  {
    "url": "assets/js/16.fd18ee19.js",
    "revision": "8f75de1fecff80efd6daa986a19f4433"
  },
  {
    "url": "assets/js/17.f0693c53.js",
    "revision": "dad226f51a27e7ebcc90334093a2d794"
  },
  {
    "url": "assets/js/18.ba98cd6e.js",
    "revision": "6eb8aa27d1e9e1953fd62f841bbb3341"
  },
  {
    "url": "assets/js/3.64176748.js",
    "revision": "021a5119f9561f6d0a4d2bbd6bbfcbc5"
  },
  {
    "url": "assets/js/4.a610af19.js",
    "revision": "cb253bfd3d98f0f0097ec8160199f7cc"
  },
  {
    "url": "assets/js/5.f85121cc.js",
    "revision": "30c9004c95149e8667c41c62ef11a11b"
  },
  {
    "url": "assets/js/6.de2e9434.js",
    "revision": "2cbe29ad365e8d183041b435a9e4edd3"
  },
  {
    "url": "assets/js/7.a2e17486.js",
    "revision": "e4c7cd8d46cf910246edf4cce45bc087"
  },
  {
    "url": "assets/js/8.6be6b1c6.js",
    "revision": "2f42bd825149505a0613d93ee49d0984"
  },
  {
    "url": "assets/js/9.24192c48.js",
    "revision": "da73c7833bc6618e480b8c15d82a6082"
  },
  {
    "url": "assets/js/app.04d6874c.js",
    "revision": "90dc1c822d7519fa5818f76fdf62b4c6"
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
    "url": "categories/index.html",
    "revision": "db560325b9ade2952c93e206c6b91c10"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0e91d67e01a0def5318aa12bed1aa975"
  },
  {
    "url": "font/css.html",
    "revision": "74202182c8ef295ebb4083d6f7d94545"
  },
  {
    "url": "fontend/html.html",
    "revision": "e5a2f16b469bc10415d46c86cd6c2270"
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
    "revision": "773bffd9f7a196b64c5dea6848aa407c"
  },
  {
    "url": "interview/firstInterview.html",
    "revision": "a7d7b2d24f1154798091534452eb496f"
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
    "url": "tag/index.html",
    "revision": "fea3d160d710b0d19cda6edb7c858652"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "575b42dbdea6b8c6b0a2f6eb00f9db61"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2ac88940a1f7573ce588c56234391a9a"
  },
  {
    "url": "timeline/index.html",
    "revision": "2913d118f707c97ac919b0c49a7ed6d7"
  },
  {
    "url": "wechat/firstApplet.html",
    "revision": "30b3f33106d65477c94dd60bb7796b71"
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
