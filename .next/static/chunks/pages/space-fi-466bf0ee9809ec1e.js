(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5065],{90337:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/space-fi",function(){return e(30818)}])},30818:function(t,n,e){"use strict";e.r(n),e.d(n,{Page:function(){return d}});var i=e(85893),a=e(51991),u=e(73520);let d=()=>(0,i.jsx)(u.Z,{dappPathname:"space-fi"});d.getLayout=a.wQ,n.default=d},73520:function(t,n,e){"use strict";var i=e(85893),a=e(22107),u=e(67294),d=e(27085),l=e(8433),o=e(39259),r=e(79878),c=e(98300);n.Z=t=>{let{dappPathname:n}=t,f=(0,r._)(t=>t.chains),{chainId:s,account:p}=(0,l.Z)(),{dapp:_,loading:h}=(0,o.Z)("dapp/".concat(n)),[v,w]=(0,u.useState)(),[k,C]=(0,u.useState)(!1),[g,E]=(0,u.useState)(),[m,y]=(0,u.useState)(),Z=(0,u.useMemo)(()=>{var t;return(null==f?void 0:f.length)?null===(t=_.dapp_network)||void 0===t?void 0:t.map(t=>f.find(n=>n.id===t.network_id)):[]},[f,_]),S=(0,u.useMemo)(()=>{if(_.default_chain_id)return _.default_chain_id;let t=f.find(t=>t.id===_.default_network_id);return null==t?void 0:t.chain_id},[f,_]),N=(0,u.useCallback)(async()=>{var t,i,a;let u=d.Z[n];if(!u){E(null);return}let l=null;"swap"===u.type&&(l=await e(61161)("./".concat(n))),"lending"===u.type&&(l=null===(t=await e(93186)("./".concat(n)))||void 0===t?void 0:t.default),"staking"===u.type&&(l=null===(i=await e(48762)("./".concat(n)))||void 0===i?void 0:i.default),"liquidity"===u.type&&(l=null===(a=await e(37476)("./".concat(n)))||void 0===a?void 0:a.default),E({...l,theme:u.theme})},[n]),{run:P}=(0,a.Z)(t=>{var n;if(!(null==f?void 0:f.length))return;let e=!!(null===(n=_.dapp_network)||void 0===n?void 0:n.find(n=>n.chain_id===t));y(e&&t===s),w(f.find(n=>n.chain_id===(e?t:_.default_chain_id)))},{wait:500});(0,u.useEffect)(()=>{C(!0)},[]),(0,u.useEffect)(()=>{N()},[n]),(0,u.useEffect)(()=>{(null==f?void 0:f.length)&&P(S)},[f,S]),(0,u.useEffect)(()=>{v&&s&&(null==f?void 0:f.length)&&P(s)},[s]);let b=(0,u.useMemo)(()=>{var t;if(!_.dapp_network)return null;let n=null===(t=_.dapp_network)||void 0===t?void 0:t.find(t=>t.network_id===(null==v?void 0:v.id));return n||_.dapp_network[0]},[v,_]);return _&&S&&v&&(_.default_chain_id||_.default_network_id)&&(null==b?void 0:b.dapp_src)&&g&&k&&!h?(0,i.jsx)(c.Z,{dapp:_,chainId:s,account:p,dappChains:Z,currentChain:v,localConfig:g,network:b,isChainSupported:m,setIsChainSupported:y,setCurrentChain:w,chains:f}):(0,i.jsx)("div",{})}}},function(t){t.O(0,[4473,3714,3662,533,4722,1693,1072,5317,4146,3660,1314,9861,5524,1991,5175,9774,2888,179],function(){return t(t.s=90337)}),_N_E=t.O()}]);