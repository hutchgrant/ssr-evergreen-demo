!function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],p=0,f=[];p<u.length;p++)a=u[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"static/js/"+{2:"b2485acda8712d1a3960"}[e]+".js"}(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,u.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;i.push([22,1]),n()}([,,,,,,,,,,,,,,,function(e,t,n){var r=n(23);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(24);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){e.exports=n.p+"static/assets/logo.png"},function(e,t,n){var r=n(25);e.exports="string"==typeof r?r:r.toString()},,,,function(e,t,n){e.exports=n(28)},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,":host{min-height:80vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}",""])},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"@keyframes logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host header{display:flex;flex-direction:column}:host header small{display:block}:host header #logo{height:40vh;background-size:contain;background-position:50%;background-repeat:no-repeat;animation:logo-spin 30s linear infinite}:host header h1{margin:5px;padding:0 0 20px;color:#fff;text-shadow:1px 1px 2px #3e6726}@media only screen and (max-width:400px){:host header h1{font-size:1.8em}}:host ul{list-style:none;padding-left:15px;line-height:1.5rem}:host ul li{padding:5px;text-align:left;display:inline}:host ul li a{cursor:pointer;color:green;text-decoration:none}:host ul li.active a{color:#000;font-weight:600}",""])},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,":host p{color:#3c6919;font-size:1.75rem;margin:5px}",""])},,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(15),i=n.n(o),a=n(16),u=n.n(a),c=n(17),l=n.n(c);let s=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends r.a{render(){return r["c"]`
      <style>
        ${u.a}
      </style>

      <header>
        <a id="logo" href="https://projectevergreen.github.io/" title="Project Evergreen home link" style="background-image: url(${l.a})">&nbsp;</a>
        <h1>
          <small>Welcome to</small>
          Create&nbsp;Evergreen&nbsp;App!</h1>
          <h2><strong>SSR Example App</strong></h2>
          <ul>
            <li>
              <a href="/" aria-label="menu-item">Home Page</a>
            </li>
            <li>
              <a href="/docs" aria-label="menu-item">Docs Page</a>
            </li>
          </ul>
      </header>
    `}});customElements.define("eve-header",s);var p=n(18),f=n.n(p);let d=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends r.a{render(){return r["c"]`
      <style>
        ${f.a}
      </style>

      <div>
      <p>Home page!</p>
      </div>
    `}});customElements.define("home-page",d);var h=n(21),g=n(11),y=n(12),m=n(19);const v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.c;var b=Object(g.d)((e,t)=>e,v(Object(y.a)(g.b),Object(g.a)(m.a)));let _=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends r.a{render(){return r["c"]`
      <div>
        Loading...
      </div>
    `}});customElements.define("my-loading",_);var x=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);Object(h.a)(b);let O=x(class extends r.a{render(){return r["c"]`
    <style>
      ${i.a}
    </style>
      <eve-header></eve-header>
      <lit-route path="/" component="home-page"></lit-route>
      <lit-route
        path="/docs"
        component="docs-page"
        loading="my-loading"
        .resolve="${()=>n.e(2).then(n.bind(null,31))}"
      ></lit-route>
    `}});customElements.define("eve-app",O)}]);