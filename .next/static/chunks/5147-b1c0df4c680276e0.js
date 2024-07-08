(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5147],{20335:function(t,r,o){"use strict";o.d(r,{Ox:function(){return x},S5:function(){return S},xs:function(){return N}});var s=o(16441),l=o(1581),u=o(48794),p=o(2593);let m=new l.Yd(u.i),y={},w=p.O$.from(0),v=p.O$.from(-1);function k(t,r,o,s){let u={fault:r,operation:o};return void 0!==s&&(u.value=s),m.throwError(t,l.Yd.errors.NUMERIC_FAULT,u)}let _="0";for(;_.length<256;)_+=_;function E(t){if("number"!=typeof t)try{t=p.O$.from(t).toNumber()}catch(t){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+_.substring(0,t):m.throwArgumentError("invalid decimal size","decimals",t)}function S(t,r){null==r&&(r=0);let o=E(r);t=p.O$.from(t);let s=t.lt(w);s&&(t=t.mul(v));let l=t.mod(o).toString();for(;l.length<o.length-1;)l="0"+l;l=l.match(/^([0-9]*[1-9]|0)(0*)/)[1];let u=t.div(o).toString();return t=1===o.length?u:u+"."+l,s&&(t="-"+t),t}function x(t,r){null==r&&(r=0);let o=E(r);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||m.throwArgumentError("invalid decimal value","value",t);let s="-"===t.substring(0,1);s&&(t=t.substring(1)),"."===t&&m.throwArgumentError("missing value","value",t);let l=t.split(".");l.length>2&&m.throwArgumentError("too many decimal points","value",t);let u=l[0],y=l[1];for(u||(u="0"),y||(y="0");"0"===y[y.length-1];)y=y.substring(0,y.length-1);for(y.length>o.length-1&&k("fractional component exceeds decimals","underflow","parseFixed"),""===y&&(y="0");y.length<o.length-1;)y+="0";let w=p.O$.from(u),_=p.O$.from(y),S=w.mul(o).add(_);return s&&(S=S.mul(v)),S}class A{constructor(t,r,o,s){t!==y&&m.throwError("cannot use FixedFormat constructor; use FixedFormat.from",l.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=o,this.decimals=s,this.name=(r?"":"u")+"fixed"+String(o)+"x"+String(s),this._multiplier=E(s),Object.freeze(this)}static from(t){if(t instanceof A)return t;"number"==typeof t&&(t=`fixed128x${t}`);let r=!0,o=128,s=18;if("string"==typeof t){if("fixed"===t);else if("ufixed"===t)r=!1;else{let l=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);l||m.throwArgumentError("invalid fixed format","format",t),r="u"!==l[1],o=parseInt(l[2]),s=parseInt(l[3])}}else if(t){let l=(r,o,s)=>null==t[r]?s:(typeof t[r]!==o&&m.throwArgumentError("invalid fixed format ("+r+" not "+o+")","format."+r,t[r]),t[r]);r=l("signed","boolean",r),o=l("width","number",o),s=l("decimals","number",s)}return o%8&&m.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",o),s>80&&m.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",s),new A(y,r,o,s)}}class N{constructor(t,r,o,s){t!==y&&m.throwError("cannot use FixedNumber constructor; use FixedNumber.from",l.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=s,this._hex=r,this._value=o,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&m.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);let r=x(this._value,this.format.decimals),o=x(t._value,t.format.decimals);return N.fromValue(r.add(o),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let r=x(this._value,this.format.decimals),o=x(t._value,t.format.decimals);return N.fromValue(r.sub(o),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let r=x(this._value,this.format.decimals),o=x(t._value,t.format.decimals);return N.fromValue(r.mul(o).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let r=x(this._value,this.format.decimals),o=x(t._value,t.format.decimals);return N.fromValue(r.mul(this.format._multiplier).div(o),this.format.decimals,this.format)}floor(){let t=this.toString().split(".");1===t.length&&t.push("0");let r=N.from(t[0],this.format),o=!t[1].match(/^(0*)$/);return this.isNegative()&&o&&(r=r.subUnsafe(I.toFormat(r.format))),r}ceiling(){let t=this.toString().split(".");1===t.length&&t.push("0");let r=N.from(t[0],this.format),o=!t[1].match(/^(0*)$/);return!this.isNegative()&&o&&(r=r.addUnsafe(I.toFormat(r.format))),r}round(t){null==t&&(t=0);let r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&m.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;let o=N.from("1"+_.substring(0,t),this.format),s=O.toFormat(this.format);return this.mulUnsafe(o).addUnsafe(s).floor().divUnsafe(o)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&m.throwArgumentError("invalid byte width","width",t);let r=p.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,s.$m)(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return N.fromString(this._value,t)}static fromValue(t,r,o){return null!=o||null==r||(0,p.Zm)(r)||(o=r,r=null),null==r&&(r=0),null==o&&(o="fixed"),N.fromString(S(t,r),A.from(o))}static fromString(t,r){null==r&&(r="fixed");let o=A.from(r),l=x(t,o.decimals);!o.signed&&l.lt(w)&&k("unsigned value cannot be negative","overflow","value",t);let u=null;o.signed?u=l.toTwos(o.width).toHexString():(u=l.toHexString(),u=(0,s.$m)(u,o.width/8));let p=S(l,o.decimals);return new N(y,u,p,o)}static fromBytes(t,r){null==r&&(r="fixed");let o=A.from(r);if((0,s.lE)(t).length>o.width/8)throw Error("overflow");let l=p.O$.from(t);o.signed&&(l=l.fromTwos(o.width));let u=l.toTwos((o.signed?0:1)+o.width).toHexString(),m=S(l,o.decimals);return new N(y,u,m,o)}static from(t,r){if("string"==typeof t)return N.fromString(t,r);if((0,s._t)(t))return N.fromBytes(t,r);try{return N.fromValue(t,0,r)}catch(t){if(t.code!==l.Yd.errors.INVALID_ARGUMENT)throw t}return m.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}let I=N.from(1),O=N.from("0.5")},5432:function(t,r,o){"use strict";o.r(r),o.d(r,{AlchemyProvider:function(){return U},AlchemyWebSocketProvider:function(){return R},AnkrProvider:function(){return C},BaseProvider:function(){return u.Zk},CloudflareProvider:function(){return $},EtherscanProvider:function(){return Q},FallbackProvider:function(){return X.H},Formatter:function(){return m.Mb},InfuraProvider:function(){return to},InfuraWebSocketProvider:function(){return ti},IpcProvider:function(){return tt},JsonRpcBatchProvider:function(){return tn},JsonRpcProvider:function(){return w.r},JsonRpcSigner:function(){return w.C},NodesmithProvider:function(){return tc},PocketProvider:function(){return th},Provider:function(){return s.zt},Resolver:function(){return u.H2},StaticJsonRpcProvider:function(){return N.c},UrlJsonRpcProvider:function(){return N.l},Web3Provider:function(){return td.Q},WebSocketProvider:function(){return A},getDefaultProvider:function(){return tf},getNetwork:function(){return l.H},isCommunityResourcable:function(){return m.Ed},isCommunityResource:function(){return m.Gp},showThrottleMessage:function(){return m.vh}});var s=o(81556),l=o(45710),u=o(97013),p=o(6881),m=o(30032),y=o(2593),w=o(82169),v=o(1581),k=o(34216);let _=null;try{if(_=WebSocket,null==_)throw Error("inject please")}catch(r){let t=new v.Yd(k.i);_=function(){t.throwError("WebSockets not supported in this environment",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var E=function(t,r,o,s){function l(t){return t instanceof o?t:new o(function(r){r(t)})}return new(o||(o=Promise))(function(o,u){function p(t){try{y(s.next(t))}catch(t){u(t)}}function m(t){try{y(s.throw(t))}catch(t){u(t)}}function y(t){t.done?o(t.value):l(t.value).then(p,m)}y((s=s.apply(t,r||[])).next())})};let S=new v.Yd(k.i),x=1;class A extends w.r{constructor(t,r){"any"===r&&S.throwError("WebSocketProvider does not support 'any' network yet",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),"string"==typeof t?super(t,r):super("_websocket",r),this._pollingInterval=-1,this._wsReady=!1,"string"==typeof t?(0,p.zG)(this,"_websocket",new _(this.connection.url)):(0,p.zG)(this,"_websocket",t),(0,p.zG)(this,"_requests",{}),(0,p.zG)(this,"_subs",{}),(0,p.zG)(this,"_subIds",{}),(0,p.zG)(this,"_detectNetwork",super.detectNetwork()),this.websocket.onopen=()=>{this._wsReady=!0,Object.keys(this._requests).forEach(t=>{this.websocket.send(this._requests[t].payload)})},this.websocket.onmessage=t=>{let r=t.data,o=JSON.parse(r);if(null!=o.id){let t=String(o.id),s=this._requests[t];if(delete this._requests[t],void 0!==o.result)s.callback(null,o.result),this.emit("debug",{action:"response",request:JSON.parse(s.payload),response:o.result,provider:this});else{let t=null;o.error?(t=Error(o.error.message||"unknown error"),(0,p.zG)(t,"code",o.error.code||null),(0,p.zG)(t,"response",r)):t=Error("unknown error"),s.callback(t,void 0),this.emit("debug",{action:"response",error:t,request:JSON.parse(s.payload),provider:this})}}else if("eth_subscription"===o.method){let t=this._subs[o.params.subscription];t&&t.processFunc(o.params.result)}else console.warn("this should not happen")};let o=setInterval(()=>{this.emit("poll")},1e3);o.unref&&o.unref()}get websocket(){return this._websocket}detectNetwork(){return this._detectNetwork}get pollingInterval(){return 0}resetEventsBlock(t){S.throwError("cannot reset events block on WebSocketProvider",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}set pollingInterval(t){S.throwError("cannot set polling interval on WebSocketProvider",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}poll(){return E(this,void 0,void 0,function*(){return null})}set polling(t){t&&S.throwError("cannot set polling on WebSocketProvider",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}send(t,r){let o=x++;return new Promise((s,l)=>{function u(t,r){return t?l(t):s(r)}let p=JSON.stringify({method:t,params:r,id:o,jsonrpc:"2.0"});this.emit("debug",{action:"request",request:JSON.parse(p),provider:this}),this._requests[String(o)]={callback:u,payload:p},this._wsReady&&this.websocket.send(p)})}static defaultUrl(){return"ws://localhost:8546"}_subscribe(t,r,o){return E(this,void 0,void 0,function*(){let s=this._subIds[t];null==s&&(s=Promise.all(r).then(t=>this.send("eth_subscribe",t)),this._subIds[t]=s);let l=yield s;this._subs[l]={tag:t,processFunc:o}})}_startEvent(t){switch(t.type){case"block":this._subscribe("block",["newHeads"],t=>{let r=y.O$.from(t.number).toNumber();this._emitted.block=r,this.emit("block",r)});break;case"pending":this._subscribe("pending",["newPendingTransactions"],t=>{this.emit("pending",t)});break;case"filter":this._subscribe(t.tag,["logs",this._getFilter(t.filter)],r=>{null==r.removed&&(r.removed=!1),this.emit(t.filter,this.formatter.filterLog(r))});break;case"tx":{let r=t=>{let r=t.hash;this.getTransactionReceipt(r).then(t=>{t&&this.emit(r,t)})};r(t),this._subscribe("tx",["newHeads"],t=>{this._events.filter(t=>"tx"===t.type).forEach(r)});break}case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",t)}}_stopEvent(t){let r=t.tag;if("tx"===t.type){if(this._events.filter(t=>"tx"===t.type).length)return;r="tx"}else if(this.listenerCount(t.event))return;let o=this._subIds[r];o&&(delete this._subIds[r],o.then(t=>{this._subs[t]&&(delete this._subs[t],this.send("eth_unsubscribe",[t]))}))}destroy(){return E(this,void 0,void 0,function*(){this.websocket.readyState===_.CONNECTING&&(yield new Promise(t=>{this.websocket.onopen=function(){t(!0)},this.websocket.onerror=function(){t(!1)}})),this.websocket.close(1e3)})}}var N=o(93901);let I=new v.Yd(k.i),O="_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";class R extends A{constructor(t,r){let o=new U(t,r),s=o.connection.url.replace(/^http/i,"ws").replace(".alchemyapi.",".ws.alchemyapi.");super(s,o.network),(0,p.zG)(this,"apiKey",o.apiKey)}isCommunityResource(){return this.apiKey===O}}class U extends N.l{static getWebSocketProvider(t,r){return new R(t,r)}static getApiKey(t){return null==t?O:(t&&"string"!=typeof t&&I.throwArgumentError("invalid apiKey","apiKey",t),t)}static getUrl(t,r){let o=null;switch(t.name){case"homestead":o="eth-mainnet.alchemyapi.io/v2/";break;case"goerli":o="eth-goerli.g.alchemy.com/v2/";break;case"matic":o="polygon-mainnet.g.alchemy.com/v2/";break;case"maticmum":o="polygon-mumbai.g.alchemy.com/v2/";break;case"arbitrum":o="arb-mainnet.g.alchemy.com/v2/";break;case"arbitrum-goerli":o="arb-goerli.g.alchemy.com/v2/";break;case"optimism":o="opt-mainnet.g.alchemy.com/v2/";break;case"optimism-goerli":o="opt-goerli.g.alchemy.com/v2/";break;default:I.throwArgumentError("unsupported network","network",arguments[0])}return{allowGzip:!0,url:"https://"+o+r,throttleCallback:(t,o)=>(r===O&&(0,m.vh)(),Promise.resolve(!0))}}isCommunityResource(){return this.apiKey===O}}let T=new v.Yd(k.i),B="9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";function F(t){switch(t){case"homestead":return"rpc.ankr.com/eth/";case"ropsten":return"rpc.ankr.com/eth_ropsten/";case"rinkeby":return"rpc.ankr.com/eth_rinkeby/";case"goerli":return"rpc.ankr.com/eth_goerli/";case"matic":return"rpc.ankr.com/polygon/";case"arbitrum":return"rpc.ankr.com/arbitrum/"}return T.throwArgumentError("unsupported network","name",t)}class C extends N.l{isCommunityResource(){return this.apiKey===B}static getApiKey(t){return null==t?B:t}static getUrl(t,r){null==r&&(r=B);let o={allowGzip:!0,url:"https://"+F(t.name)+r,throttleCallback:(t,o)=>(r.apiKey===B&&(0,m.vh)(),Promise.resolve(!0))};return null!=r.projectSecret&&(o.user="",o.password=r.projectSecret),o}}var Y=function(t,r,o,s){function l(t){return t instanceof o?t:new o(function(r){r(t)})}return new(o||(o=Promise))(function(o,u){function p(t){try{y(s.next(t))}catch(t){u(t)}}function m(t){try{y(s.throw(t))}catch(t){u(t)}}function y(t){t.done?o(t.value):l(t.value).then(p,m)}y((s=s.apply(t,r||[])).next())})};let z=new v.Yd(k.i);class $ extends N.l{static getApiKey(t){return null!=t&&z.throwArgumentError("apiKey not supported for cloudflare","apiKey",t),null}static getUrl(t,r){let o=null;return"homestead"===t.name?o="https://cloudflare-eth.com/":z.throwArgumentError("unsupported network","network",arguments[0]),o}perform(t,r){let o=Object.create(null,{perform:{get:()=>super.perform}});return Y(this,void 0,void 0,function*(){if("getBlockNumber"===t){let t=yield o.perform.call(this,"getBlock",{blockTag:"latest"});return t.number}return o.perform.call(this,t,r)})}}var D=o(16441),G=o(83875),H=o(37707),J=function(t,r,o,s){function l(t){return t instanceof o?t:new o(function(r){r(t)})}return new(o||(o=Promise))(function(o,u){function p(t){try{y(s.next(t))}catch(t){u(t)}}function m(t){try{y(s.throw(t))}catch(t){u(t)}}function y(t){t.done?o(t.value):l(t.value).then(p,m)}y((s=s.apply(t,r||[])).next())})};let q=new v.Yd(k.i);function V(t){let r={};for(let o in t){if(null==t[o])continue;let s=t[o];("type"!==o||0!==s)&&(s=({type:!0,gasLimit:!0,gasPrice:!0,maxFeePerGs:!0,maxPriorityFeePerGas:!0,nonce:!0,value:!0})[o]?(0,D.$P)((0,D.Dv)(s)):"accessList"===o?"["+(0,G.z7)(s).map(t=>`{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`).join(",")+"]":(0,D.Dv)(s),r[o]=s)}return r}function W(t){if(0==t.status&&("No records found"===t.message||"No transactions found"===t.message))return t.result;if(1!=t.status||"string"!=typeof t.message||!t.message.match(/^OK/)){let r=Error("invalid response");throw r.result=JSON.stringify(t),(t.result||"").toLowerCase().indexOf("rate limit")>=0&&(r.throttleRetry=!0),r}return t.result}function L(t){if(t&&0==t.status&&"NOTOK"==t.message&&(t.result||"").toLowerCase().indexOf("rate limit")>=0){let r=Error("throttled response");throw r.result=JSON.stringify(t),r.throttleRetry=!0,r}if("2.0"!=t.jsonrpc){let r=Error("invalid response");throw r.result=JSON.stringify(t),r}if(t.error){let r=Error(t.error.message||"unknown error");throw t.error.code&&(r.code=t.error.code),t.error.data&&(r.data=t.error.data),r}return t.result}function M(t){if("pending"===t)throw Error("pending not supported");return"latest"===t?t:parseInt(t.substring(2),16)}function Z(t,r,o){if("call"===t&&r.code===v.Yd.errors.SERVER_ERROR){let t=r.error;if(t&&(t.message.match(/reverted/i)||t.message.match(/VM execution error/i))){let o=t.data;if(o&&(o="0x"+o.replace(/^.*0x/i,"")),(0,D.A7)(o))return o;q.throwError("missing revert data in call exception",v.Yd.errors.CALL_EXCEPTION,{error:r,data:"0x"})}}let s=r.message;throw r.code===v.Yd.errors.SERVER_ERROR&&(r.error&&"string"==typeof r.error.message?s=r.error.message:"string"==typeof r.body?s=r.body:"string"==typeof r.responseText&&(s=r.responseText)),(s=(s||"").toLowerCase()).match(/insufficient funds/)&&q.throwError("insufficient funds for intrinsic transaction cost",v.Yd.errors.INSUFFICIENT_FUNDS,{error:r,method:t,transaction:o}),s.match(/same hash was already imported|transaction nonce is too low|nonce too low/)&&q.throwError("nonce has already been used",v.Yd.errors.NONCE_EXPIRED,{error:r,method:t,transaction:o}),s.match(/another transaction with same nonce/)&&q.throwError("replacement fee too low",v.Yd.errors.REPLACEMENT_UNDERPRICED,{error:r,method:t,transaction:o}),s.match(/execution failed due to an exception|execution reverted/)&&q.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",v.Yd.errors.UNPREDICTABLE_GAS_LIMIT,{error:r,method:t,transaction:o}),r}class Q extends u.Zk{constructor(t,r){super(t),(0,p.zG)(this,"baseUrl",this.getBaseUrl()),(0,p.zG)(this,"apiKey",r||null)}getBaseUrl(){switch(this.network?this.network.name:"invalid"){case"homestead":return"https://api.etherscan.io";case"goerli":return"https://api-goerli.etherscan.io";case"sepolia":return"https://api-sepolia.etherscan.io";case"matic":return"https://api.polygonscan.com";case"maticmum":return"https://api-testnet.polygonscan.com";case"arbitrum":return"https://api.arbiscan.io";case"arbitrum-goerli":return"https://api-goerli.arbiscan.io";case"optimism":return"https://api-optimistic.etherscan.io";case"optimism-goerli":return"https://api-goerli-optimistic.etherscan.io"}return q.throwArgumentError("unsupported network","network",this.network.name)}getUrl(t,r){let o=Object.keys(r).reduce((t,o)=>{let s=r[o];return null!=s&&(t+=`&${o}=${s}`),t},""),s=this.apiKey?`&apikey=${this.apiKey}`:"";return`${this.baseUrl}/api?module=${t}${o}${s}`}getPostUrl(){return`${this.baseUrl}/api`}getPostData(t,r){return r.module=t,r.apikey=this.apiKey,r}fetch(t,r,o){return J(this,void 0,void 0,function*(){let s=o?this.getPostUrl():this.getUrl(t,r),l=o?this.getPostData(t,r):null,u="proxy"===t?L:W;this.emit("debug",{action:"request",request:s,provider:this});let y={url:s,throttleSlotInterval:1e3,throttleCallback:(t,r)=>(this.isCommunityResource()&&(0,m.vh)(),Promise.resolve(!0))},w=null;l&&(y.headers={"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},w=Object.keys(l).map(t=>`${t}=${l[t]}`).join("&"));let v=yield(0,H.rd)(y,w,u||L);return this.emit("debug",{action:"response",request:s,response:(0,p.p$)(v),provider:this}),v})}detectNetwork(){return J(this,void 0,void 0,function*(){return this.network})}perform(t,r){let o=Object.create(null,{perform:{get:()=>super.perform}});return J(this,void 0,void 0,function*(){switch(t){case"getBlockNumber":return this.fetch("proxy",{action:"eth_blockNumber"});case"getGasPrice":return this.fetch("proxy",{action:"eth_gasPrice"});case"getBalance":return this.fetch("account",{action:"balance",address:r.address,tag:r.blockTag});case"getTransactionCount":return this.fetch("proxy",{action:"eth_getTransactionCount",address:r.address,tag:r.blockTag});case"getCode":return this.fetch("proxy",{action:"eth_getCode",address:r.address,tag:r.blockTag});case"getStorageAt":return this.fetch("proxy",{action:"eth_getStorageAt",address:r.address,position:r.position,tag:r.blockTag});case"sendTransaction":return this.fetch("proxy",{action:"eth_sendRawTransaction",hex:r.signedTransaction},!0).catch(t=>Z("sendTransaction",t,r.signedTransaction));case"getBlock":if(r.blockTag)return this.fetch("proxy",{action:"eth_getBlockByNumber",tag:r.blockTag,boolean:r.includeTransactions?"true":"false"});throw Error("getBlock by blockHash not implemented");case"getTransaction":return this.fetch("proxy",{action:"eth_getTransactionByHash",txhash:r.transactionHash});case"getTransactionReceipt":return this.fetch("proxy",{action:"eth_getTransactionReceipt",txhash:r.transactionHash});case"call":{if("latest"!==r.blockTag)throw Error("EtherscanProvider does not support blockTag for call");let t=V(r.transaction);t.module="proxy",t.action="eth_call";try{return yield this.fetch("proxy",t,!0)}catch(t){return Z("call",t,r.transaction)}}case"estimateGas":{let t=V(r.transaction);t.module="proxy",t.action="eth_estimateGas";try{return yield this.fetch("proxy",t,!0)}catch(t){return Z("estimateGas",t,r.transaction)}}case"getLogs":{let t={action:"getLogs"};if(r.filter.fromBlock&&(t.fromBlock=M(r.filter.fromBlock)),r.filter.toBlock&&(t.toBlock=M(r.filter.toBlock)),r.filter.address&&(t.address=r.filter.address),r.filter.topics&&r.filter.topics.length>0&&(r.filter.topics.length>1&&q.throwError("unsupported topic count",v.Yd.errors.UNSUPPORTED_OPERATION,{topics:r.filter.topics}),1===r.filter.topics.length)){let o=r.filter.topics[0];("string"!=typeof o||66!==o.length)&&q.throwError("unsupported topic format",v.Yd.errors.UNSUPPORTED_OPERATION,{topic0:o}),t.topic0=o}let o=yield this.fetch("logs",t),s={};for(let t=0;t<o.length;t++){let r=o[t];if(null==r.blockHash){if(null==s[r.blockNumber]){let t=yield this.getBlock(r.blockNumber);t&&(s[r.blockNumber]=t.hash)}r.blockHash=s[r.blockNumber]}}return o}case"getEtherPrice":if("homestead"!==this.network.name)return 0;return parseFloat((yield this.fetch("stats",{action:"ethprice"})).ethusd)}return o.perform.call(this,t,r)})}getHistory(t,r,o){return J(this,void 0,void 0,function*(){let s={action:"txlist",address:yield this.resolveName(t),startblock:null==r?0:r,endblock:null==o?99999999:o,sort:"asc"},l=yield this.fetch("account",s);return l.map(t=>{["contractAddress","to"].forEach(function(r){""==t[r]&&delete t[r]}),null==t.creates&&null!=t.contractAddress&&(t.creates=t.contractAddress);let r=this.formatter.transactionResponse(t);return t.timeStamp&&(r.timestamp=parseInt(t.timeStamp)),r})})}isCommunityResource(){return null==this.apiKey}}var X=o(51619);let tt=null,te=new v.Yd(k.i),tr="84842078b09946638c03157f83405213";class ti extends A{constructor(t,r){let o=new to(t,r),s=o.connection;s.password&&te.throwError("INFURA WebSocket project secrets unsupported",v.Yd.errors.UNSUPPORTED_OPERATION,{operation:"InfuraProvider.getWebSocketProvider()"});let l=s.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/");super(l,t),(0,p.zG)(this,"apiKey",o.projectId),(0,p.zG)(this,"projectId",o.projectId),(0,p.zG)(this,"projectSecret",o.projectSecret)}isCommunityResource(){return this.projectId===tr}}class to extends N.l{static getWebSocketProvider(t,r){return new ti(t,r)}static getApiKey(t){let r={apiKey:tr,projectId:tr,projectSecret:null};return null==t||("string"==typeof t?r.projectId=t:null!=t.projectSecret?(te.assertArgument("string"==typeof t.projectId,"projectSecret requires a projectId","projectId",t.projectId),te.assertArgument("string"==typeof t.projectSecret,"invalid projectSecret","projectSecret","[REDACTED]"),r.projectId=t.projectId,r.projectSecret=t.projectSecret):t.projectId&&(r.projectId=t.projectId),r.apiKey=r.projectId),r}static getUrl(t,r){let o=null;switch(t?t.name:"unknown"){case"homestead":o="mainnet.infura.io";break;case"goerli":o="goerli.infura.io";break;case"sepolia":o="sepolia.infura.io";break;case"matic":o="polygon-mainnet.infura.io";break;case"maticmum":o="polygon-mumbai.infura.io";break;case"optimism":o="optimism-mainnet.infura.io";break;case"optimism-goerli":o="optimism-goerli.infura.io";break;case"arbitrum":o="arbitrum-mainnet.infura.io";break;case"arbitrum-goerli":o="arbitrum-goerli.infura.io";break;default:te.throwError("unsupported network",v.Yd.errors.INVALID_ARGUMENT,{argument:"network",value:t})}let s={allowGzip:!0,url:"https://"+o+"/v3/"+r.projectId,throttleCallback:(t,o)=>(r.projectId===tr&&(0,m.vh)(),Promise.resolve(!0))};return null!=r.projectSecret&&(s.user="",s.password=r.projectSecret),s}isCommunityResource(){return this.projectId===tr}}class tn extends w.r{send(t,r){let o={method:t,params:r,id:this._nextId++,jsonrpc:"2.0"};null==this._pendingBatch&&(this._pendingBatch=[]);let s={request:o,resolve:null,reject:null},l=new Promise((t,r)=>{s.resolve=t,s.reject=r});return this._pendingBatch.push(s),this._pendingBatchAggregator||(this._pendingBatchAggregator=setTimeout(()=>{let t=this._pendingBatch;this._pendingBatch=null,this._pendingBatchAggregator=null;let r=t.map(t=>t.request);return this.emit("debug",{action:"requestBatch",request:(0,p.p$)(r),provider:this}),(0,H.rd)(this.connection,JSON.stringify(r)).then(o=>{this.emit("debug",{action:"response",request:r,response:o,provider:this}),t.forEach((t,r)=>{let s=o[r];if(s.error){let r=Error(s.error.message);r.code=s.error.code,r.data=s.error.data,t.reject(r)}else t.resolve(s.result)})},o=>{this.emit("debug",{action:"response",error:o,request:r,provider:this}),t.forEach(t=>{t.reject(o)})})},10)),l}}let ts=new v.Yd(k.i),ta="ETHERS_JS_SHARED";class tc extends N.l{static getApiKey(t){return t&&"string"!=typeof t&&ts.throwArgumentError("invalid apiKey","apiKey",t),t||ta}static getUrl(t,r){ts.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");let o=null;switch(t.name){case"homestead":o="https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";break;case"ropsten":o="https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";break;case"rinkeby":o="https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";break;case"goerli":o="https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";break;case"kovan":o="https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";break;default:ts.throwArgumentError("unsupported network","network",arguments[0])}return o+"?apiKey="+r}}let tl=new v.Yd(k.i),tu="62e1ad51b37b8e00394bda3b";class th extends N.l{static getApiKey(t){let r={applicationId:null,loadBalancer:!0,applicationSecretKey:null};return null==t?r.applicationId=tu:"string"==typeof t?r.applicationId=t:null!=t.applicationSecretKey?(r.applicationId=t.applicationId,r.applicationSecretKey=t.applicationSecretKey):t.applicationId?r.applicationId=t.applicationId:tl.throwArgumentError("unsupported PocketProvider apiKey","apiKey",t),r}static getUrl(t,r){let o=null;switch(t?t.name:"unknown"){case"goerli":o="eth-goerli.gateway.pokt.network";break;case"homestead":o="eth-mainnet.gateway.pokt.network";break;case"kovan":o="poa-kovan.gateway.pokt.network";break;case"matic":o="poly-mainnet.gateway.pokt.network";break;case"maticmum":o="polygon-mumbai-rpc.gateway.pokt.network";break;case"rinkeby":o="eth-rinkeby.gateway.pokt.network";break;case"ropsten":o="eth-ropsten.gateway.pokt.network";break;default:tl.throwError("unsupported network",v.Yd.errors.INVALID_ARGUMENT,{argument:"network",value:t})}let s=`https://${o}/v1/lb/${r.applicationId}`,l={headers:{},url:s};return null!=r.applicationSecretKey&&(l.user="",l.password=r.applicationSecretKey),l}isCommunityResource(){return this.applicationId===tu}}var td=o(241);let tp=new v.Yd(k.i);function tf(t,r){if(null==t&&(t="homestead"),"string"==typeof t){let r=t.match(/^(ws|http)s?:/i);if(r)switch(r[1].toLowerCase()){case"http":case"https":return new w.r(t);case"ws":case"wss":return new A(t);default:tp.throwArgumentError("unsupported URL scheme","network",t)}}let o=(0,l.H)(t);return o&&o._defaultProvider||tp.throwError("unsupported getDefaultProvider network",v.Yd.errors.NETWORK_ERROR,{operation:"getDefaultProvider",network:t}),o._defaultProvider({FallbackProvider:X.H,AlchemyProvider:U,AnkrProvider:C,CloudflareProvider:$,EtherscanProvider:Q,InfuraProvider:to,JsonRpcProvider:w.r,NodesmithProvider:tc,PocketProvider:th,Web3Provider:td.Q,IpcProvider:tt},r)}},24150:function(t,r,o){"use strict";o.d(r,{Fn:function(){return y},dF:function(){return k},bM:function(){return w},fi:function(){return _},vz:function(){return v}});var s=o(20335),l=o(1581);let u="units/5.7.0",p=new l.Yd(u),m=["wei","kwei","mwei","gwei","szabo","finney","ether"];function y(t){let r=String(t).split(".");(r.length>2||!r[0].match(/^-?[0-9]*$/)||r[1]&&!r[1].match(/^[0-9]*$/)||"."===t||"-."===t)&&p.throwArgumentError("invalid value","value",t);let o=r[0],s="";for("-"===o.substring(0,1)&&(s="-",o=o.substring(1));"0"===o.substring(0,1);)o=o.substring(1);""===o&&(o="0");let l="";for(2===r.length&&(l="."+(r[1]||"0"));l.length>2&&"0"===l[l.length-1];)l=l.substring(0,l.length-1);let u=[];for(;o.length;){if(o.length<=3){u.unshift(o);break}{let t=o.length-3;u.unshift(o.substring(t)),o=o.substring(0,t)}}return s+u.join(",")+l}function w(t,r){if("string"==typeof r){let t=m.indexOf(r);-1!==t&&(r=3*t)}return(0,s.S5)(t,null!=r?r:18)}function v(t,r){if("string"!=typeof t&&p.throwArgumentError("value must be a string","value",t),"string"==typeof r){let t=m.indexOf(r);-1!==t&&(r=3*t)}return(0,s.Ox)(t,null!=r?r:18)}function k(t){return w(t,18)}function _(t){return v(t,18)}},72023:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__,process=__webpack_require__(34155);!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,r){return function(o){return new Sha256(r,!0).update(o)[t]()}},createMethod=function(t){var r=createOutputMethod("hex",t);NODE_JS&&(r=nodeWrap(r,t)),r.create=function(){return new Sha256(t)},r.update=function(t){return r.create().update(t)};for(var o=0;o<OUTPUT_TYPES.length;++o){var s=OUTPUT_TYPES[o];r[s]=createOutputMethod(s,t)}return r},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,r){return function(o,s){return new HmacSha256(o,r,!0).update(s)[t]()}},createHmacMethod=function(t){var r=createHmacOutputMethod("hex",t);r.create=function(r){return new HmacSha256(r,t)},r.update=function(t,o){return r.create(t).update(o)};for(var o=0;o<OUTPUT_TYPES.length;++o){var s=OUTPUT_TYPES[o];r[s]=createHmacOutputMethod(s,t)}return r};function Sha256(t,r){r?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,r,o){var s,l=typeof t;if("string"===l){var u,p=[],m=t.length,y=0;for(s=0;s<m;++s)(u=t.charCodeAt(s))<128?p[y++]=u:(u<2048?p[y++]=192|u>>6:(u<55296||u>=57344?p[y++]=224|u>>12:(u=65536+((1023&u)<<10|1023&t.charCodeAt(++s)),p[y++]=240|u>>18,p[y++]=128|u>>12&63),p[y++]=128|u>>6&63),p[y++]=128|63&u);t=p}else if("object"===l){if(null===t)throw Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw Error(ERROR)}else throw Error(ERROR);t.length>64&&(t=new Sha256(r,!0).update(t).array());var w=[],v=[];for(s=0;s<64;++s){var k=t[s]||0;w[s]=92^k,v[s]=54^k}Sha256.call(this,r,o),this.update(v),this.oKeyPad=w,this.inner=!0,this.sharedMemory=o}Sha256.prototype.update=function(t){if(!this.finalized){var r,o=typeof t;if("string"!==o){if("object"===o){if(null===t)throw Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw Error(ERROR)}else throw Error(ERROR);r=!0}for(var s,l,u=0,p=t.length,m=this.blocks;u<p;){if(this.hashed&&(this.hashed=!1,m[0]=this.block,m[16]=m[1]=m[2]=m[3]=m[4]=m[5]=m[6]=m[7]=m[8]=m[9]=m[10]=m[11]=m[12]=m[13]=m[14]=m[15]=0),r)for(l=this.start;u<p&&l<64;++u)m[l>>2]|=t[u]<<SHIFT[3&l++];else for(l=this.start;u<p&&l<64;++u)(s=t.charCodeAt(u))<128?m[l>>2]|=s<<SHIFT[3&l++]:(s<2048?m[l>>2]|=(192|s>>6)<<SHIFT[3&l++]:(s<55296||s>=57344?m[l>>2]|=(224|s>>12)<<SHIFT[3&l++]:(s=65536+((1023&s)<<10|1023&t.charCodeAt(++u)),m[l>>2]|=(240|s>>18)<<SHIFT[3&l++],m[l>>2]|=(128|s>>12&63)<<SHIFT[3&l++]),m[l>>2]|=(128|s>>6&63)<<SHIFT[3&l++]),m[l>>2]|=(128|63&s)<<SHIFT[3&l++]);this.lastByteIndex=l,this.bytes+=l-this.start,l>=64?(this.block=m[16],this.start=l-64,this.hash(),this.hashed=!0):this.start=l}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[16]=this.block,t[r>>2]|=EXTRA[3&r],this.block=t[16],r>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,r,o,s,l,u,p,m,y,w,v,k=this.h0,_=this.h1,E=this.h2,S=this.h3,x=this.h4,A=this.h5,N=this.h6,I=this.h7,O=this.blocks;for(t=16;t<64;++t)r=((l=O[t-15])>>>7|l<<25)^(l>>>18|l<<14)^l>>>3,o=((l=O[t-2])>>>17|l<<15)^(l>>>19|l<<13)^l>>>10,O[t]=O[t-16]+r+O[t-7]+o<<0;for(t=0,v=_&E;t<64;t+=4)this.first?(this.is224?(m=300032,I=(l=O[0]-1413257819)-150054599<<0,S=l+24177077<<0):(m=704751109,I=(l=O[0]-210244248)-1521486534<<0,S=l+143694565<<0),this.first=!1):(r=(k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10),o=(x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>25|x<<7),s=(m=k&_)^k&E^v,l=I+o+(p=x&A^~x&N)+K[t]+O[t],u=r+s,I=S+l<<0,S=l+u<<0),r=(S>>>2|S<<30)^(S>>>13|S<<19)^(S>>>22|S<<10),o=(I>>>6|I<<26)^(I>>>11|I<<21)^(I>>>25|I<<7),s=(y=S&k)^S&_^m,l=N+o+(p=I&x^~I&A)+K[t+1]+O[t+1],u=r+s,N=E+l<<0,r=((E=l+u<<0)>>>2|E<<30)^(E>>>13|E<<19)^(E>>>22|E<<10),o=(N>>>6|N<<26)^(N>>>11|N<<21)^(N>>>25|N<<7),s=(w=E&S)^E&k^y,l=A+o+(p=N&I^~N&x)+K[t+2]+O[t+2],u=r+s,A=_+l<<0,r=((_=l+u<<0)>>>2|_<<30)^(_>>>13|_<<19)^(_>>>22|_<<10),o=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7),s=(v=_&E)^_&S^w,l=x+o+(p=A&N^~A&I)+K[t+3]+O[t+3],u=r+s,x=k+l<<0,k=l+u<<0;this.h0=this.h0+k<<0,this.h1=this.h1+_<<0,this.h2=this.h2+E<<0,this.h3=this.h3+S<<0,this.h4=this.h4+x<<0,this.h5=this.h5+A<<0,this.h6=this.h6+N<<0,this.h7=this.h7+I<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,o=this.h2,s=this.h3,l=this.h4,u=this.h5,p=this.h6,m=this.h7,y=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[l>>28&15]+HEX_CHARS[l>>24&15]+HEX_CHARS[l>>20&15]+HEX_CHARS[l>>16&15]+HEX_CHARS[l>>12&15]+HEX_CHARS[l>>8&15]+HEX_CHARS[l>>4&15]+HEX_CHARS[15&l]+HEX_CHARS[u>>28&15]+HEX_CHARS[u>>24&15]+HEX_CHARS[u>>20&15]+HEX_CHARS[u>>16&15]+HEX_CHARS[u>>12&15]+HEX_CHARS[u>>8&15]+HEX_CHARS[u>>4&15]+HEX_CHARS[15&u]+HEX_CHARS[p>>28&15]+HEX_CHARS[p>>24&15]+HEX_CHARS[p>>20&15]+HEX_CHARS[p>>16&15]+HEX_CHARS[p>>12&15]+HEX_CHARS[p>>8&15]+HEX_CHARS[p>>4&15]+HEX_CHARS[15&p];return this.is224||(y+=HEX_CHARS[m>>28&15]+HEX_CHARS[m>>24&15]+HEX_CHARS[m>>20&15]+HEX_CHARS[m>>16&15]+HEX_CHARS[m>>12&15]+HEX_CHARS[m>>8&15]+HEX_CHARS[m>>4&15]+HEX_CHARS[15&m]),y},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,o=this.h2,s=this.h3,l=this.h4,u=this.h5,p=this.h6,m=this.h7,y=[t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,o>>24&255,o>>16&255,o>>8&255,255&o,s>>24&255,s>>16&255,s>>8&255,255&s,l>>24&255,l>>16&255,l>>8&255,255&l,u>>24&255,u>>16&255,u>>8&255,255&u,p>>24&255,p>>16&255,p>>8&255,255&p];return this.is224||y.push(m>>24&255,m>>16&255,m>>8&255,255&m),y},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),r=new DataView(t);return r.setUint32(0,this.h0),r.setUint32(4,this.h1),r.setUint32(8,this.h2),r.setUint32(12,this.h3),r.setUint32(16,this.h4),r.setUint32(20,this.h5),r.setUint32(24,this.h6),this.is224||r.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return exports}).call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()}}]);