if(!self.define){let i,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,r)=>{const u=i||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let o={};const s=i=>e(i,u),g={module:{uri:u},exports:o,require:s};n[u]=Promise.all(l.map((i=>g[i]||s(i)))).then((i=>(r(...i),o)))}}define(["./workbox-79ffe3e0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"uttv-v1.0.1"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.8bf5aad1.css",revision:null},{url:"/css/chunk-vendors.41c73897.css",revision:null},{url:"/imagenes/background.png",revision:"33166c1e11fbd16171fc4657f422eb6e"},{url:"/imagenes/icon1.png",revision:"9095e162795f742e3730294d2a4b6f55"},{url:"/imagenes/icon4.png",revision:"bc9ca368c29829ba9eddc2f98b865d90"},{url:"/img/Avanzado.83221a32.png",revision:null},{url:"/img/DescripEjercicio.d065fd8e.png",revision:null},{url:"/img/Ejercicios.6998c05f.jpg",revision:null},{url:"/img/Equilibrio.6a8e7af3.png",revision:null},{url:"/img/Estirando.c62b7e32.jpg",revision:null},{url:"/img/Experto.69538655.png",revision:null},{url:"/img/FELICIADES.7dc99d06.png",revision:null},{url:"/img/Flexibilidad.fb2dc2ff.png",revision:null},{url:"/img/Fortalecimiento.831eb2b2.png",revision:null},{url:"/img/LogoNegro.50954477.png",revision:null},{url:"/img/Maximus.1d57200b.png",revision:null},{url:"/img/Nuevo.9b348b19.png",revision:null},{url:"/img/Relleno1.d0d1d972.jpg",revision:null},{url:"/img/Relleno2.ac0fce70.jpg",revision:null},{url:"/img/Resistencia.40838c5a.png",revision:null},{url:"/img/Tipo.2037f731.png",revision:null},{url:"/img/Usuario-navbar.91056d01.png",revision:null},{url:"/img/Usuario1.1a8b9fc8.jpg",revision:null},{url:"/img/cuerpo.5e61de70.png",revision:null},{url:"/img/gorjeo.0c6ba6e7.png",revision:null},{url:"/img/instagram.a35eda2b.png",revision:null},{url:"/img/logo.bad5baa4.png",revision:null},{url:"/img/nivel.48d6bd95.png",revision:null},{url:"/img/novato.d31ba741.png",revision:null},{url:"/img/perfil.44417f30.png",revision:null},{url:"/img/principiante.2f5660ae.png",revision:null},{url:"/img/salir.d493ddd4.png",revision:null},{url:"/img/usuario.4388e4e4.png",revision:null},{url:"/img/youtube.d9d03c6c.png",revision:null},{url:"/index.html",revision:"45eb24f304969a8561b675bf4ae09729"},{url:"/js/app.f5e7feab.js",revision:null},{url:"/js/chunk-vendors.ab9a12cf.js",revision:null},{url:"/manifest.json",revision:"8ac6d71b08d06daa2718825e4004d472"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
