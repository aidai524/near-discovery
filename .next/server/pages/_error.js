"use strict";(()=>{var e={};e.id=4820,e.ids=[4820,2888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},66968:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>f,getStaticProps:()=>c,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var a=r(87093),l=r(35244),o=r(1323),i=r(65211),s=r(64807),d=r(66908),u=e([s]);s=(u.then?(await u)():u)[0];let p=(0,o.l)(d,"default"),c=(0,o.l)(d,"getStaticProps"),f=(0,o.l)(d,"getStaticPaths"),m=(0,o.l)(d,"getServerSideProps"),g=(0,o.l)(d,"config"),h=(0,o.l)(d,"reportWebVitals"),y=(0,o.l)(d,"unstable_getStaticProps"),b=(0,o.l)(d,"unstable_getStaticPaths"),P=(0,o.l)(d,"unstable_getStaticParams"),x=(0,o.l)(d,"unstable_getServerProps"),_=(0,o.l)(d,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:i.default},userland:d});n()}catch(e){n(e)}})},66908:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let n=r(50167),a=n._(r(16689)),l=n._(r(79201)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e,n=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:n}}let s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:s.error},a.default.createElement(l.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:s.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:s.h1},e):null,a.default.createElement("div",{style:s.wrap},a.default.createElement("h2",{style:s.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=i,Error.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},27543:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},79201:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return m}});let n=r(50167),a=r(28760),l=a._(r(16689)),o=n._(r(48955)),i=r(98039),s=r(41988),d=r(27543);function u(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(81905);let c=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let l=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?l=!1:t.add(a.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,l.useContext)(i.AmpStateContext),n=(0,l.useContext)(s.HeadManagerContext);return l.default.createElement(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48955:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(16689),a=()=>{},l=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},81905:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},65211:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(20997),a=r(56859),l=r.n(a),o=r(57518);class i extends l(){static async getInitialProps(e){let t=new o.ServerStyleSheet,r=e.renderPage;try{e.renderPage=()=>r({enhanceApp:e=>r=>t.collectStyles(n.jsx(e,{...r}))});let a=await l().getInitialProps(e);return{...a,styles:[a.styles,t.getStyleElement()]}}finally{t.seal()}}}},35244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},98039:(e,t,r)=>{e.exports=r(87093).vendored.contexts.AmpContext},71982:e=>{e.exports=require("ethers")},93908:e=>{e.exports=require("lodash/debounce")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57518:e=>{e.exports=require("styled-components")},1718:e=>{e.exports=import("@web3-onboard/react")},54275:e=>{e.exports=import("react-loading-skeleton")},3590:e=>{e.exports=import("react-toastify")},71395:e=>{e.exports=import("tslib")},69890:e=>{e.exports=import("zustand")},43602:e=>{e.exports=import("zustand/middleware")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[8428,8640,6859,4807],()=>r(66968));module.exports=n})();