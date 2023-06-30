"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2627],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>h});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function g(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var m=r.createContext({}),p=function(t){var a=r.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},d=function(t){var a=p(t.components);return r.createElement(m.Provider,{value:a},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},o=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,d=g(t,["components","mdxType","originalType","parentName"]),k=p(e),o=n,h=k["".concat(m,".").concat(o)]||k[o]||N[o]||i;return e?r.createElement(h,l(l({ref:a},d),{},{components:e})):r.createElement(h,l({ref:a},d))}));function h(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,l=new Array(i);l[0]=o;var g={};for(var m in a)hasOwnProperty.call(a,m)&&(g[m]=a[m]);g.originalType=t,g[k]="string"==typeof t?t:n,l[1]=g;for(var p=2;p<i;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}o.displayName="MDXCreateElement"},97642:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var r=e(87462),n=(e(67294),e(3905));const i={sidebar_label:"Transactions Costs",sidebar_position:3},l="Transactions Costs",g={unversionedId:"transaction-cost",id:"transaction-cost",title:"Transactions Costs",description:"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using arbitrary values and results are not fully deterministic and comparable to previous runs.",source:"@site/benchmarks/transaction-cost.md",sourceDirName:".",slug:"/transaction-cost",permalink:"/head-protocol/unstable/fr/benchmarks/transaction-cost",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/transaction-cost.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Transactions Costs",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Benchmarks",permalink:"/head-protocol/unstable/fr/benchmarks/"},next:{title:"End-to-End Benchmarks",permalink:"/head-protocol/unstable/fr/benchmarks/end-to-end-benchmarks"}},m={},p=[{value:"Script summary",id:"script-summary",level:2},{value:"Cost of Init Transaction",id:"cost-of-init-transaction",level:2},{value:"Cost of Commit Transaction",id:"cost-of-commit-transaction",level:2},{value:"Cost of CollectCom Transaction",id:"cost-of-collectcom-transaction",level:2},{value:"Cost of Close Transaction",id:"cost-of-close-transaction",level:2},{value:"Cost of Contest Transaction",id:"cost-of-contest-transaction",level:2},{value:"Cost of Abort Transaction",id:"cost-of-abort-transaction",level:2},{value:"Cost of FanOut Transaction",id:"cost-of-fanout-transaction",level:2}],d={toc:p},k="wrapper";function N(t){let{components:a,...e}=t;return(0,n.kt)(k,(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transactions-costs"},"Transactions Costs"),(0,n.kt)("p",null,"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using ",(0,n.kt)("inlineCode",{parentName:"p"},"arbitrary")," values and results are not fully deterministic and comparable to previous runs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metadata"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Generated at")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-30 09:38:28.891069911 UTC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. memory units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"14000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. CPU units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"10000000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. tx size (kB)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"16384")))),(0,n.kt)("h2",{id:"script-summary"},"Script summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Hash"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Size (Bytes)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdInitial"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2212a4ee618434b9b2f366d7c330dbdfb5c7072e793a850fd0de6ddd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4294")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdCommit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"69e1ccf9ad73dc6d37a5bc8de5aec86f3c4c1710fe5fd334e0e16b18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2124")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdHead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8ae095dca4d14a1b8edffb37faa6c84ec60340fbf389a62f027e0b76"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9355")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bcHead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"33642a45c7fbb955ce1704ef09229bb211bf9af9980530db28c6aafe*"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4148")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The minting policy hash is only usable for comparison. As the script is parameterized, the actual script is unique per Head.")),(0,n.kt)("h2",{id:"cost-of-init-transaction"},"Cost of Init Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4746"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.52")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4950"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.54")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5151"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.69"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.69"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.59")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5562"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6587"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.82")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12124"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.74")))),(0,n.kt)("h2",{id:"cost-of-commit-transaction"},"Cost of Commit Transaction"),(0,n.kt)("p",null," This is using ada-only outputs for better comparability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"599"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.34")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"787"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.40")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"975"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1350"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2281"),(0,n.kt)("td",{parentName:"tr",align:"right"},"71.81"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2844"),(0,n.kt)("td",{parentName:"tr",align:"right"},"98.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.35")))),(0,n.kt)("h2",{id:"cost-of-collectcom-transaction"},"Cost of CollectCom Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO (bytes)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"814"),(0,n.kt)("td",{parentName:"tr",align:"right"},"27.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"113"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1134"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.29"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.67")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"170"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1455"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"226"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1784"),(0,n.kt)("td",{parentName:"tr",align:"right"},"82.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.13")))),(0,n.kt)("h2",{id:"cost-of-close-transaction"},"Cost of Close Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.58"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.31"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.39")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"804"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"770"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.39")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"968"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2124"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8726"),(0,n.kt)("td",{parentName:"tr",align:"right"},"86.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"69.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.74")))),(0,n.kt)("h2",{id:"cost-of-contest-transaction"},"Cost of Contest Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"677"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"842"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1007"),(0,n.kt)("td",{parentName:"tr",align:"right"},"27.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.51")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1337"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31.20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.58")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2160"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40.20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.74")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7928"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.81")))),(0,n.kt)("h2",{id:"cost-of-abort-transaction"},"Cost of Abort Transaction"),(0,n.kt)("p",null,"Some variation because of random mixture of still initial and already committed outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4854"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.40"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5107"),(0,n.kt)("td",{parentName:"tr",align:"right"},"33.82"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.75")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5356"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5816"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6139"),(0,n.kt)("td",{parentName:"tr",align:"right"},"96.10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"41.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.50")))),(0,n.kt)("h2",{id:"cost-of-fanout-transaction"},"Cost of FanOut Transaction"),(0,n.kt)("p",null,"Involves spending head output and burning head tokens. Uses ada-only UTxO for better comparability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO (bytes)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4764"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4801"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.47")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"284"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4939"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.69"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"571"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5127"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.82"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1139"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5479"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.83")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1710"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5847"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"40"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2276"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6206"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.60"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2847"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6568"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"44.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.40")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"65"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3701"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7103"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.42"),(0,n.kt)("td",{parentName:"tr",align:"right"},"57.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.68")))))}N.isMDXComponent=!0}}]);