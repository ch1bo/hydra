"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:6,title:"6. Network Broadcasts all messages\n",authors:[],tags:["Accepted"]},s=void 0,i={permalink:"/head-protocol/unstable/ja/adr/6",source:"@site/adr/2021-06-10_006-network-broadcasts-all-messages.md",title:"6. Network Broadcasts all messages\n",description:"Status",date:"2021-06-10T00:00:00.000Z",formattedDate:"2021\u5e746\u670810\u65e5",tags:[{label:"Accepted",permalink:"/head-protocol/unstable/ja/adr/tags/accepted"}],readingTime:.92,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"6",title:"6. Network Broadcasts all messages\n",authors:[],tags:["Accepted"]},prevItem:{title:"5. Use io-classes\n",permalink:"/head-protocol/unstable/ja/adr/5"},nextItem:{title:"7. Use with-pattern based component interfaces\n",permalink:"/head-protocol/unstable/ja/adr/7"}},l={authorsImageUrls:[]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"The simplified Head protocol in the ",(0,a.kt)("a",{parentName:"p",href:"https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/"},"Hydra\npaper"),"\nrequires ",(0,a.kt)("em",{parentName:"p"},"unicast")," and ",(0,a.kt)("em",{parentName:"p"},"multicast")," messaging between participants. However, this\ncan be simplified to only ",(0,a.kt)("em",{parentName:"p"},"multicast")," by also sending ",(0,a.kt)("inlineCode",{parentName:"p"},"AckTx")," messages to all\nparticipants and removing the necessity for ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfTx"),"."),(0,a.kt)("p",null,"There is already a battle-tested implementation for ",(0,a.kt)("em",{parentName:"p"},"broadcasting")," messages over\nnetworks with any kind of topology (mesh), namely the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/tree/master/ouroboros-network/src/Ouroboros/Network/TxSubmission"},"TxSubmission"),"\nprotocol of ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroroboros-network"),"."),(0,a.kt)("p",null,"If the network connects only to interested peers, ",(0,a.kt)("em",{parentName:"p"},"broadcast")," is essentially the\n",(0,a.kt)("em",{parentName:"p"},"multicast")," required by the protocol. If this is not the case, some addressing\nscheme is required and ",(0,a.kt)("em",{parentName:"p"},"broadcast")," would be a waste of resources."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All messages emitted by a Hydra node through the Network component are ",(0,a.kt)("em",{parentName:"li"},"broadcasted")," to ",(0,a.kt)("em",{parentName:"li"},"all")," nodes in the network"),(0,a.kt)("li",{parentName:"ul"},"This implies the emitter shall itself receive the message")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The network layer is responsible for ensuring sent messages effectively\nreaches all nodes in the network. How this is achieved is left as an\nimplementation detail, i.e. whether it uses relaying or not."),(0,a.kt)("li",{parentName:"ul"},"We need to make sure all Head participants are connected to the same network.")))}m.isMDXComponent=!0}}]);