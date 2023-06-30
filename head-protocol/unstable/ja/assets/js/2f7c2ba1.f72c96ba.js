"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={slug:23,title:"23. Local chain state in chain layer\n",authors:[],tags:["Accepted"]},o=void 0,l={permalink:"/head-protocol/unstable/ja/adr/23",source:"@site/adr/2023-04-26_023-single-state.md",title:"23. Local chain state in chain layer\n",description:"Status",date:"2023-04-26T00:00:00.000Z",formattedDate:"2023\u5e744\u670826\u65e5",tags:[{label:"Accepted",permalink:"/head-protocol/unstable/ja/adr/tags/accepted"}],readingTime:1.99,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"23",title:"23. Local chain state in chain layer\n",authors:[],tags:["Accepted"]},prevItem:{title:"22. Test High-level Properties using Model-Based Testing\n",permalink:"/head-protocol/unstable/ja/adr/22"},nextItem:{title:"24. Persist state changes incrementally\n",permalink:"/head-protocol/unstable/ja/adr/24"}},s={authorsImageUrls:[]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/head-protocol/unstable/ja/adr/18"},"ADR 18")," merged both ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," into one single state in the Hydra node, giving the chain layer a\nway to ",(0,i.kt)("em",{parentName:"li"},"fetch")," and update the ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," when observing a chain event."),(0,i.kt)("li",{parentName:"ul"},"Having the ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," made persistency easier to\ndeal with: we ensure that we always save cohesive states."),(0,i.kt)("li",{parentName:"ul"},"When opening our first head on mainnet we suffered from a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"commit/rollback\nissue")," that was the\nresult of a race condition in the management of the ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," as implemented\nin the context of ",(0,i.kt)("a",{parentName:"li",href:"/head-protocol/unstable/ja/adr/18"},"ADR 18"),"."),(0,i.kt)("li",{parentName:"ul"},"Reproducing the issue by introducing rollbacks in the model based tests, we\ndiscovered that, as a client of a hydra-node, we had no idea how to deal with\nthe rollback event as it is defined now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/185"},"#185")," plans to improve\nrollback management.")),(0,i.kt)("p",null,"The following picture details the race condition through an exemple:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The DirectChain component fetch some ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 0")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"headState"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The DirectChain component observes a transaction and it"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"publishes an event about this observation"),(0,i.kt)("li",{parentName:"ul"},"updates the ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," with some ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState 1"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Node processes the event and emits a new ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," with a\n",(0,i.kt)("inlineCode",{parentName:"li"},"previousRecoverableState")," in case a rollback later happens")),(0,i.kt)("p",null,"The problem is that ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadState 2")," in the figure should point to a previous\nrecoverable head state containing ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 0")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 1"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"race condition",src:a(11925).Z,width:"2310",height:"1731"})),(0,i.kt)("p",null,"Updating the chain state only in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadLogic")," leads to problems when several\ntransactions are in the same block. This can be mitigated by keeping a volatile\nchain state locally while analysing the block. But then it leads to race\nconditions issues if, for some reason, blocks are produced faster than they are\nprocessed by the HeadLogic. Low probability in production but higher when\ntesting."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We supersede ",(0,i.kt)("a",{parentName:"li",href:"/head-protocol/unstable/ja/adr/18"},"ADR 18")," with the current ADR."),(0,i.kt)("li",{parentName:"ul"},"A local chain state is re-introduced in the chain component, not shared with\nthe head logic."),(0,i.kt)("li",{parentName:"ul"},"A copy of the ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," is kept in the ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," to keep the benefits of\n",(0,i.kt)("a",{parentName:"li",href:"/head-protocol/unstable/ja/adr/18"},"ADR 18")," regarding persistency."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"RolledBack")," output is removed from the API unless actionable by users or\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/185"},"#185")," implemented.")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The rollback logic is removed from the HeadLogic and only maintained in the\nchain component."),(0,i.kt)("li",{parentName:"ul"},"The Rollback event carries the ChainState."),(0,i.kt)("li",{parentName:"ul"},"At the node startup, we initialize the chain layer with the persisted\n",(0,i.kt)("inlineCode",{parentName:"li"},"chainState"))))}d.isMDXComponent=!0},11925:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-04-26-023-race-condition-7bc6b62f01470cdeaaaf81ec5227363e.jpg"}}]);