"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:11,title:"11. Use cardano-api\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/fr/adr/11",source:"@site/adr/2021-11-18_011-use-cardano-api.md",title:"11. Use cardano-api\n",description:"Status",date:"2021-11-18T00:00:00.000Z",formattedDate:"18 novembre 2021",tags:[{label:"Accepted",permalink:"/head-protocol/fr/adr/tags/accepted"}],readingTime:1.095,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"11",title:"11. Use cardano-api\n",authors:[],tags:["Accepted"]},prevItem:{title:"10. Use Direct Connection to `cardano-node`\n",permalink:"/head-protocol/fr/adr/10"},nextItem:{title:"12. Top-down Test-driven Design\n",permalink:"/head-protocol/fr/adr/12"}},c={authorsImageUrls:[]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To implement Hydra Head's ledger we have been working with the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger-specs"},"ledger-specs")," packages which provide a low-level interface to work with transactions and ledgers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We also use a lightly wrapped ledger-specs API as our interface for Off-chain transaction submission. This introduced some boilerplate in order to align with cardano-api and provide JSON serialisation."))),(0,a.kt)("li",{parentName:"ul"},"In our initial experiments ",(0,a.kt)("a",{parentName:"li",href:"/adr/10"},"connecting directly")," to a cardano node we have also been using the ledger API for building transactions for want of some scripts-related features in the cardano-api"),(0,a.kt)("li",{parentName:"ul"},"cardano-api is expected to be the supported entrypoint for clients to interact with Cardano chain while ledger-specs is reserved for internal use and direct interactions with ledgers"),(0,a.kt)("li",{parentName:"ul"},"cardano-api now provides all the features we need to run our on-chain validators")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Therefore")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use cardano-api types and functions instead of ledger-specs in ",(0,a.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," component"),(0,a.kt)("li",{parentName:"ul"},"Use cardano-api types instead of custom ones in ",(0,a.kt)("inlineCode",{parentName:"li"},"Hydra.Ledger.Cardano")," component")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removes the boilerplate in ",(0,a.kt)("inlineCode",{parentName:"li"},"Hydra.Ledger.Cardano")," required to map cardano-api types sent by clients to builtin and ledger-specs types"),(0,a.kt)("li",{parentName:"ul"},"Simplifies the  ",(0,a.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," component:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Replaces custom transaction building in ",(0,a.kt)("inlineCode",{parentName:"li"},"Tx")),(0,a.kt)("li",{parentName:"ul"},"Replaces custom transaction fees calculation and balancing in ",(0,a.kt)("inlineCode",{parentName:"li"},"Wallet")),(0,a.kt)("li",{parentName:"ul"},"Replace low-level connection establishment using cardano-api functions connecting to the node (keeping the chain sync subscription)")))))}u.isMDXComponent=!0}}]);