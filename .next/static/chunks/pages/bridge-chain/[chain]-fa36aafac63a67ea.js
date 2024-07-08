(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6704],{90723:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bridge-chain/[chain]",function(){return e(60382)}])},76212:function(n,t,e){"use strict";e.d(t,{N:function(){return r}});var a=e(85893),i=e(9008),o=e.n(i),c=e(34155);function r(n){return(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:n.title}),(0,a.jsx)("meta",{name:"description",content:n.description}),(0,a.jsx)("meta",{property:"og:title",content:n.title}),(0,a.jsx)("meta",{property:"og:description",content:n.description}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{content:n.image||"".concat(c.env.NEXT_PUBLIC_HOSTNAME,"/bos-meta.png"),property:"og:image"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@NEARProtocol"})]})}},21771:function(n,t,e){"use strict";e.d(t,{$:function(){return s}});var a=e(82729),i=e(85893),o=e(68458);function c(){let n=(0,a._)(["\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  animation: spin 1200ms infinite linear;\n\n  i {\n    color: currentColor;\n    font-size: 16px;\n    line-height: 16px;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return c=function(){return n},n}let r=o.ZP.span.withConfig({componentId:"sc-898cc217-0"})(c());function s(){return(0,i.jsx)(r,{children:(0,i.jsx)("i",{className:"ph ph-spinner"})})}},30490:function(n,t,e){"use strict";e.d(t,{w:function(){return s}});var a=e(85893),i=e(67294),o=e(48097),c=e(4179),r=e(76212);function s(n){let t=(0,c.q)(n=>n.setSrc);return(0,i.useEffect)(()=>{t(n.src)},[t,n]),(0,a.jsxs)(a.Fragment,{children:[n.meta&&(0,a.jsx)(r.N,{...n.meta}),(0,a.jsx)("div",{children:(0,a.jsx)(o.n,{src:n.src,props:n.componentProps})})]})}},48097:function(n,t,e){"use strict";e.d(t,{n:function(){return s}});var a=e(85893),i=e(99376),o=e(60608),c=e(60303),r=e(21771);function s(n){let{EthersProvider:t,ethersContext:e,Widget:s}=(0,c.b)(),l=(0,o.B)(),u=(0,i.Z)();return t&&l.hasResolved?(0,a.jsx)(t,{value:e,children:(0,a.jsx)(s,{config:{redirectMap:l.redirectMap},src:n.src,props:{toast:u,...n.props}})}):(0,a.jsx)(r.$,{})}},32704:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var a=e(67294),i=e(79878),o=e(282),c=e(78579),r=e(42474),s=e.n(r),l=e(48764).Buffer;let u="01234567890123450123456789012345",d=n=>{if(!u)return;let t=s().randomBytes(16),e=s().createCipheriv("aes-256-cbc",l.from(u),t),a=e.update(n,"utf-8","base64");return a+=e.final("base64"),t.toString("base64")+a};var p=e(8433);function m(n){let{account:t,chainId:e}=(0,p.Z)(),r=(0,i._)(n=>n.chains),s=(0,o.s)(n=>n.uuid),l=(0,a.useCallback)(a=>{var i,o,l,u,p,m;let f={};if(!e||!t)return;let _=r.find(n=>n.chain_id===e);if(console.info("addAction data: ",a),"Swap"===a.type&&(f={action_title:"Swap ".concat(a.inputCurrency.symbol," on ").concat(a.template),action_type:"Swap",action_tokens:JSON.stringify(["".concat(a.inputCurrency.symbol),"".concat(a.outputCurrency.symbol)]),action_amount:(null==a?void 0:a.inputCurrencyAmount)?null==a?void 0:a.inputCurrencyAmount.toString():"",account_id:t,account_info:s,template:a.template,action_status:1===a.status?"Success":"Failed",tx_id:a.transactionHash,action_network_id:_.name,chain_id:e,action_switch:a.add?1:0,token_in_currency:null==a?void 0:a.token_in_currency,token_out_currency:null==a?void 0:a.token_out_currency}),"Bridge"===a.type)try{let n=r.find(n=>n.chain_id===a.fromChainId)||{name:"Ethereum Mainnet"},e=r.find(n=>n.chain_id===a.toChainId)||{name:"Ethereum Mainnet"};console.info("chains: ",n,e,_),f={action_title:"Bridge ".concat(a.amount," ").concat(a.token.symbol," to ").concat(null==e?void 0:e.name),action_type:"Bridge",action_tokens:JSON.stringify(["".concat(a.token.symbol)]),action_amount:a.amount,account_id:t,account_info:s,template:a.template,action_network_id:null==n?void 0:n.name,action_switch:a.add?1:0,action_status:1===a.status?"Success":"Failed",tx_id:a.transactionHash,chain_id:a.fromChainId,to_chain_id:a.toChainId,extra_data:JSON.stringify(a.extra_data)},console.info("params:",f)}catch(n){console.info("bridge err",n)}"Lending"===a.type&&(f={action_type:"Lending",account_id:t,account_info:s,template:a.template,action_switch:a.add?1:0,action_status:1===a.status?"Success":"Failed",tx_id:a.transactionHash,action_network_id:_.name,chain_id:e},(null===(i=a.extra_data)||void 0===i?void 0:i.lending_actions)?f.extra_data=JSON.stringify(a.extra_data):(f.action_title="".concat(a.action," ").concat(Number(a.amount).toFixed(3)," ").concat(a.token.symbol," on ").concat(a.template),f.action_tokens=JSON.stringify(["".concat(a.token.symbol)]),f.action_amount=a.amount)),"Liquidity"===a.type&&(f={action_title:"".concat(a.action," ").concat((null==a?void 0:a.token0)+((null==a?void 0:a.token1)?"-"+a.token1:"")," on ").concat(a.template),action_type:a.type,action_tokens:JSON.stringify([null!==(o=null==a?void 0:a.token0)&&void 0!==o?o:"",null!==(l=null==a?void 0:a.token1)&&void 0!==l?l:""]),action_amount:a.amount,account_id:t,action_network_id:_.name,account_info:s,template:a.template,action_status:1===a.status?"Success":"Failed",action_switch:a.add?1:0,tx_id:a.transactionHash,chain_id:e,extra_data:a.extra_data}),"Staking"===a.type&&(f={action_title:a.token?"".concat(a.action," ").concat(a.amount," ").concat(null===(u=a.token)||void 0===u?void 0:u.symbol," on ").concat(a.template):"",action_type:"Staking",action_tokens:a.token?JSON.stringify(["".concat(a.token.symbol)]):"",action_amount:a.amount,account_id:t,account_info:s,template:a.template,action_switch:a.add?1:0,action_status:1===a.status?"Success":"Failed",tx_id:a.transactionHash,action_network_id:(null==_?void 0:_.name)||a.action_network_id,chain_id:e,extra_data:a.extra_data}),"Yield"===a.type&&(f={action_title:"".concat(a.action," ").concat((null==a?void 0:a.token0)+((null==a?void 0:a.token1)?"-"+a.token1:"")," on ").concat(a.template),action_type:a.type,action_tokens:JSON.stringify([null!==(p=null==a?void 0:a.token0)&&void 0!==p?p:"",null!==(m=null==a?void 0:a.token1)&&void 0!==m?m:""]),action_amount:a.amount,account_id:t,account_info:s,template:a.template,action_switch:a.add?1:0,action_status:1===a.status?"Success":"Failed",tx_id:a.transactionHash,action_network_id:(null==_?void 0:_.name)||a.action_network_id,chain_id:e,extra_data:a.extra_data}),f.ss=d("template=".concat(a.template,"&action_type=").concat(a.type,"&tx_hash=").concat(a.transactionHash,"&chain_id=").concat(e,"&time=").concat(Math.ceil(Date.now()/1e3))),f.source=n,console.log("useAddAction params:",f),(0,c.v_)("/api/action/add",f)},[e,t]);return{addAction:l}}},60382:function(n,t,e){"use strict";e.r(t);var a=e(82729),i=e(85893),o=e(80132),c=e(41664),r=e.n(c),s=e(11163),l=e(67294),u=e(68458),d=e(95811),p=e.n(d),m=e(43800),f=e(59397),_=e(8433),g=e(30490),h=e(5557),x=e(32704),y=e(51991),b=e(37346),v=e(22107),w=e(74864),k=e(84379),j=e(78579);function S(){let n=(0,a._)(["\n  margin: 0 8%;\n  color: #ffffff;\n  position: relative;\n  padding-top: 50px;\n  .top-login-select {\n    margin-right: 16px;\n    border-radius: 12px;\n    padding: 4px;\n    display: flex;\n    z-index: 2;\n    width: fit-content;\n    cursor: pointer;\n    position: relative;\n\n    .select-item-wrapper {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      cursor: pointer;\n    }\n    .selsect-item-img {\n      width: 32px;\n      height: 32px;\n      line-height: 32px;\n      text-align: center;\n      border-radius: 8px;\n      margin-right: 8px;\n    }\n    .selsect-item-text {\n      padding-top: 16px;\n      margin-right: 10px;\n      p {\n        font-size: 16px;\n        font-weight: 700;\n        color: #ffffff;\n      }\n    }\n    .selsect-item-icon {\n      background: linear-gradient(0deg, rgba(48, 49, 66, 0.5), rgba(48, 49, 66, 0.5));\n      border: 1px solid rgba(55, 58, 83, 1);\n      border-radius: 6px;\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      line-height: 16px;\n    }\n    .login-select-popup {\n      position: absolute;\n      top: 60px;\n      left: 0;\n      background: #303142;\n      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);\n      border-radius: 12px;\n      padding: 12px;\n      width: 249px;\n      .select-popups-item {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 8px;\n        border-radius: 8px;\n        .flex-grow {\n          flex-grow: 1;\n        }\n        .popup-item-img {\n          width: 32px;\n          height: 32px;\n          line-height: 32px;\n          text-align: center;\n          border-radius: 8px;\n          margin-right: 8px;\n        }\n        .popups-item-text {\n          font-size: 14px;\n          font-weight: 400;\n          color: #fff;\n        }\n      }\n      .select-popups-item:hover {\n        background: #2a2a3a;\n      }\n      .selected {\n        background: #2a2a3a;\n      }\n    }\n  }\n  .content-page {\n    z-index: 1;\n    width: 100%;\n    position: relative;\n    padding-top: 50px;\n    /* position: absolute; */\n  }\n  .select-bg-icon {\n    z-index: 0;\n    position: absolute;\n    top: 60px;\n    left: 50%;\n    transform: translate(-50%);\n    font-size: 20px;\n    font-weight: 700;\n    .select-bg-content {\n      padding-top: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      img {\n        width: 24px;\n        margin-right: 10px;\n      }\n    }\n  }\n"]);return S=function(){return n},n}function C(){let n=(0,a._)(["\n  color: #979abe;\n  font-size: 14px;\n  margin-bottom: 32px;\n  a {\n    text-decoration: none;\n    color: #979abe;\n    display: inline-block;\n    cursor: pointer;\n  }\n  svg {\n    margin: 0 8px;\n  }\n  span {\n    color: #ffffff;\n  }\n"]);return C=function(){return n},n}let N=(0,i.jsx)("svg",{width:"5",height:"8",viewBox:"0 0 5 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1 1L4 4L1 7",stroke:"#979ABE",strokeLinecap:"round"})}),E=u.ZP.div.withConfig({componentId:"sc-a0a3b01d-0"})(S()),Z=u.ZP.div.withConfig({componentId:"sc-a0a3b01d-1"})(C()),A=()=>{let n=(0,s.useRouter)(),t=n.query.chain,[e,a]=(0,l.useState)(),[c,u]=(0,l.useState)(null),{account:d,chainId:y}=(0,_.Z)(),[S,C]=(0,l.useState)(),[{settingChain:A},T]=(0,o.Um)(),{handleReport:F}=(0,m.Z)(),I=(0,b.O)(n=>n.price),[L,O]=(0,l.useState)("");(0,w.z)(n=>n.tab);let P=(0,w.S)(),{addAction:B}=(0,x.Z)("dapp");(0,l.useRef)(null);let{check:z}=(0,f.Z)({isNeedAk:!1}),{run:H}=(0,v.Z)(()=>{let n=h.ZP[t]||h.ZP.arbitrum;a(n)},{wait:500});return(0,l.useEffect)(()=>{e&&!c&&(0,j.U2)("/api/dapp?route=bridge-chain/".concat(e.path)).then(n=>{0===n.code&&u(n.data)})},[e,c]),(0,l.useEffect)(()=>{H()},[t]),(0,l.useEffect)(()=>{if(d){let n=function(n){n=n.toLowerCase().replace("0x","");let t=p()("keccak256").update(n).digest("hex"),e="0x";for(let a=0;a<n.length;a++)parseInt(t[a],16)>=8?e+=n[a].toUpperCase():e+=n[a];return e}(d);C(n)}},[d]),e?(0,i.jsxs)(E,{children:[(0,i.jsxs)(Z,{children:[(0,i.jsx)(r(),{href:"/",children:"Home"}),N,(0,i.jsx)(r(),{href:"/alldapps",children:"dApps"}),N,(0,i.jsxs)("span",{children:[e.title," Bridge"]})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"select-bg-icon",children:(0,i.jsxs)("div",{className:"select-bg-content",children:[(0,i.jsx)("img",{src:null==c?void 0:c.logo,alt:""}),(0,i.jsx)("span",{children:null==c?void 0:c.name})]})}),(0,i.jsx)("div",{className:"content-page",children:(0,i.jsx)(g.w,{src:null==c?void 0:c.dapp_network[0].dapp_src,componentProps:{addAction:B,multicall:k.A,chainId:e.chainId,currentChainId:y,menuConfig:e.menuConfig,prices:I,tab:L,account:S,onReset:()=>{},onChangeTab:n=>{P.setCachedTab(n,e.chainId),O(n)}}})})]})]},t):(0,i.jsx)("div",{})};A.getLayout=y.wQ,t.default=A},74864:function(n,t,e){"use strict";e.d(t,{S:function(){return c},z:function(){return o}});var a=e(64529),i=e(782);let o=(0,a.Ue)(n=>({tab:"",set:t=>n(()=>({...t}))})),c=(0,a.Ue)((0,i.tJ)((n,t)=>({chains:{},setCachedTab:(e,a)=>{let i=t().chains;n({chains:{...i,[a]:e}})}}),{name:"_cached_all_in_one_tab",version:.1,storage:(0,i.FL)(()=>localStorage)}))},4179:function(n,t,e){"use strict";e.d(t,{q:function(){return i}});var a=e(64529);let i=(0,a.Ue)(n=>({src:null,setSrc:t=>n(()=>({src:t}))}))},282:function(n,t,e){"use strict";e.d(t,{s:function(){return c}});var a=e(57632),i=e(64529),o=e(782);let c=(0,i.Ue)((0,o.tJ)((n,t)=>({uuid:(0,a.Z)()}),{name:"_uuid",version:.1,storage:(0,o.FL)(()=>localStorage)}))},60303:function(n,t,e){"use strict";e.d(t,{b:function(){return i}});var a=e(64529);let i=(0,a.Ue)(n=>({cache:null,CommitButton:null,ethersContext:null,EthersProvider:null,Widget:null,near:null,set:t=>n(()=>({...t}))}))},84379:function(n,t,e){"use strict";e.d(t,{A:function(){return o}});var a=e(64146),i=e(8198);let o=async n=>{let{abi:t,calls:e,options:o,multicallAddress:c,provider:r}=n,{requireSuccess:s=!0,...l}=o||{},u=new a.CH(c,[{inputs:[{internalType:"bool",name:"requireSuccess",type:"bool"},{components:[{internalType:"address",name:"target",type:"address"},{internalType:"bytes",name:"callData",type:"bytes"}],internalType:"struct Multicall2.Call[]",name:"calls",type:"tuple[]"}],name:"tryAggregate",outputs:[{components:[{internalType:"bool",name:"success",type:"bool"},{internalType:"bytes",name:"returnData",type:"bytes"}],internalType:"struct Multicall2.Result[]",name:"returnData",type:"tuple[]"}],stateMutability:"nonpayable",type:"function"}],r),d=new i.vU(t),p=e.map(n=>({target:n.address.toLowerCase(),callData:d.encodeFunctionData(n.name,n.params)})),m=await (null==u?void 0:u.callStatic.tryAggregate(s,p,l)),f=null==m?void 0:m.map((n,t)=>{let[a,i]=n;return a&&0!==Number(i)?d.decodeFunctionResult(e[t].name,i):null});return f}},43800:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var a=e(67294),i=e(42501),o=e(78579);function c(){let[n,t]=(0,a.useState)(!1),e=(0,a.useCallback)(async e=>{if(!n){t(!0);try{await (0,o.v_)("".concat(i.h,"/api/quest/source"),{source:e}),t(!1)}catch(n){t(!1)}}},[]);return{loading:n,handleReport:e}}},52361:function(){},94616:function(){}},function(n){n.O(0,[4473,3714,533,4722,1693,1072,5317,4146,8473,8671,5524,1991,9774,2888,179],function(){return n(n.s=90723)}),_N_E=n.O()}]);