if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>i(e,r),t={module:{uri:r},exports:o,require:a};s[r]=Promise.all(l.map((e=>t[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4b7ad3f1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/acceuil-DLZH1xHr.png",revision:null},{url:"assets/difficulte-CWHRAqyQ.png",revision:null},{url:"assets/distribuer-CzrjTt26.png",revision:null},{url:"assets/fa-brands-400-C99Yv4gD.woff2",revision:null},{url:"assets/fa-brands-400-DtZKBM2a.ttf",revision:null},{url:"assets/fa-regular-400-BMFokQJ2.ttf",revision:null},{url:"assets/fa-regular-400-OOsPf1xj.woff2",revision:null},{url:"assets/fa-solid-900-DAI24fNt.woff2",revision:null},{url:"assets/fa-solid-900-DM0teJdg.ttf",revision:null},{url:"assets/fa-v4compatibility-aR9vOKaP.woff2",revision:null},{url:"assets/fa-v4compatibility-F0dlVTLQ.ttf",revision:null},{url:"assets/index-BZugWRu6.css",revision:null},{url:"assets/index-DRMoD-Og.js",revision:null},{url:"assets/logo-B8_OJD9r.png",revision:null},{url:"assets/nbrJoueur-BQ6ft5_5.png",revision:null},{url:"assets/nom-BvbuNag-.png",revision:null},{url:"assets/plateau-B1E-f3H7.png",revision:null},{url:"assets/poser-CZketZll.png",revision:null},{url:"assets/stoper-DdSGHNDm.png",revision:null},{url:"doigts-domino-multicolores-fond-blanc_1069677-1408.avif",revision:"3c7c141d1b5309be7b7d3e489b00a842"},{url:"gettyimages-155070888-612x612.jpg",revision:"1db1e84d03f462a578c4dc9e0f00fd9a"},{url:"index.html",revision:"4368597de370a2aa1e60e6450b5e196b"},{url:"logo.png",revision:"1c20a058471baa5dcde6f437176ef7de"},{url:"manifest.webmanifest",revision:"511d91763e45b3f64a365a48cb3e25f3"},{url:"pieces-dominos-dominos-points-colores-ligne_511044-397.avif",revision:"eecae0ee5f33a45252838341ee9a39e5"},{url:"Preview",revision:"1ac6ee723181cccdc8765b83056d652a"},{url:"registerSW.js",revision:"a4abcedc93345e730670c17e8b33bd8b"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo.png",revision:"1c20a058471baa5dcde6f437176ef7de"},{url:"manifest.webmanifest",revision:"511d91763e45b3f64a365a48cb3e25f3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.startsWith("/")),new e.CacheFirst({cacheName:"api-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
