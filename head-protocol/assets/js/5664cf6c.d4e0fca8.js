"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},o="Test Results for hydra-cluster",s={unversionedId:"tests/hydra-cluster/hspec-results",id:"tests/hydra-cluster/hspec-results",title:"Test Results for hydra-cluster",description:"Test.LogFilter",source:"@site/benchmarks/tests/hydra-cluster/hspec-results.md",sourceDirName:"tests/hydra-cluster",slug:"/tests/hydra-cluster/hspec-results",permalink:"/head-protocol/benchmarks/tests/hydra-cluster/hspec-results",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/tests/hydra-cluster/hspec-results.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ledger micro-benchmarks",permalink:"/head-protocol/benchmarks/ledger"},next:{title:"Test Results for hydra-node",permalink:"/head-protocol/benchmarks/tests/hydra-node/hspec-results"}},i={},d=[{value:"Test.LogFilter",id:"testlogfilter",level:2},{value:"Performance traces",id:"performance-traces",level:3},{value:"Test.Ledger.Cardano.Configuration",id:"testledgercardanoconfiguration",level:2},{value:"ShelleyGenesis",id:"shelleygenesis",level:3},{value:"ProtocolParameters",id:"protocolparameters",level:3},{value:"Test.Hydra.Cluster.Faucet",id:"testhydraclusterfaucet",level:2},{value:"returnFundsToFaucet",id:"returnfundstofaucet",level:3},{value:"seedFromFaucet",id:"seedfromfaucet",level:3},{value:"Test.Generator",id:"testgenerator",level:2},{value:"JSON encoding of Dataset",id:"json-encoding-of-dataset",level:3},{value:"Test.EndToEnd",id:"testendtoend",level:2},{value:"End-to-end on Cardano devnet",id:"end-to-end-on-cardano-devnet",level:3},{value:"hydra-node executable",id:"hydra-node-executable",level:4},{value:"Monitoring",id:"monitoring",level:4},{value:"two hydra heads scenario",id:"two-hydra-heads-scenario",level:4},{value:"restarting nodes",id:"restarting-nodes",level:4},{value:"three hydra nodes scenario",id:"three-hydra-nodes-scenario",level:4},{value:"single party hydra head",id:"single-party-hydra-head",level:4},{value:"Test.DirectChain",id:"testdirectchain",level:2},{value:"Test.CardanoNode",id:"testcardanonode",level:2},{value:"Test.CardanoClient",id:"testcardanoclient",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"test-results-for-hydra-cluster"},"Test Results for hydra-cluster"),(0,n.kt)("h2",{id:"testlogfilter"},"Test.LogFilter"),(0,n.kt)("h3",{id:"performance-traces"},"Performance traces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"generate trace for NewTx")),(0,n.kt)("h2",{id:"testledgercardanoconfiguration"},"Test.Ledger.Cardano.Configuration"),(0,n.kt)("h3",{id:"shelleygenesis"},"ShelleyGenesis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can be read from JSON")),(0,n.kt)("h3",{id:"protocolparameters"},"ProtocolParameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can be read from JSON")),(0,n.kt)("h2",{id:"testhydraclusterfaucet"},"Test.Hydra.Cluster.Faucet"),(0,n.kt)("h3",{id:"returnfundstofaucet"},"returnFundsToFaucet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"seedFromFaucet and returnFundsToFaucet work together")),(0,n.kt)("h3",{id:"seedfromfaucet"},"seedFromFaucet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"should work concurrently")),(0,n.kt)("h2",{id:"testgenerator"},"Test.Generator"),(0,n.kt)("h3",{id:"json-encoding-of-dataset"},"JSON encoding of Dataset"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"allows to encode values with aeson and read them back"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Details"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"generates a Dataset that keeps UTXO constant"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Details"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n"))))),(0,n.kt)("h2",{id:"testendtoend"},"Test.EndToEnd"),(0,n.kt)("h3",{id:"end-to-end-on-cardano-devnet"},"End-to-end on Cardano devnet"),(0,n.kt)("h4",{id:"hydra-node-executable"},"hydra-node executable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"logs its command line arguments"),(0,n.kt)("li",{parentName:"ul"},"detects misconfiguration")),(0,n.kt)("h4",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node exposes Prometheus metrics on port 6001")),(0,n.kt)("h4",{id:"two-hydra-heads-scenario"},"two hydra heads scenario"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"two heads on the same network do not conflict"),(0,n.kt)("li",{parentName:"ul"},"bob cannot abort alice's head")),(0,n.kt)("h4",{id:"restarting-nodes"},"restarting nodes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can abort head after restart"),(0,n.kt)("li",{parentName:"ul"},"can observe a commit tx after a restart, even when a tx happened while down"),(0,n.kt)("li",{parentName:"ul"},"can start chain from the past and replay on-chain events"),(0,n.kt)("li",{parentName:"ul"},"close of an initial snapshot from re-initialized node is contested")),(0,n.kt)("h4",{id:"three-hydra-nodes-scenario"},"three hydra nodes scenario"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"inits a Head, processes a single Cardano transaction and closes it again"),(0,n.kt)("li",{parentName:"ul"},"inits a Head and closes it immediately")),(0,n.kt)("h4",{id:"single-party-hydra-head"},"single party hydra head"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"full head life-cycle"),(0,n.kt)("li",{parentName:"ul"},"can close with long deadline"),(0,n.kt)("li",{parentName:"ul"},"can submit a timed tx"),(0,n.kt)("li",{parentName:"ul"},"commits using fuel"),(0,n.kt)("li",{parentName:"ul"},"commits from external with script utxo"),(0,n.kt)("li",{parentName:"ul"},"can't commit externally with internal wallet utxo")),(0,n.kt)("h2",{id:"testdirectchain"},"Test.DirectChain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can init and abort a head given nothing has been committed"),(0,n.kt)("li",{parentName:"ul"},"can init and abort a 2-parties head after one party has committed"),(0,n.kt)("li",{parentName:"ul"},"cannot abort a non-participating head"),(0,n.kt)("li",{parentName:"ul"},"can commit"),(0,n.kt)("li",{parentName:"ul"},"can commit empty UTxO"),(0,n.kt)("li",{parentName:"ul"},"can open, close & fanout a Head"),(0,n.kt)("li",{parentName:"ul"},"can restart head to point in the past and replay on-chain events"),(0,n.kt)("li",{parentName:"ul"},"cannot restart head to an unknown point"),(0,n.kt)("li",{parentName:"ul"},"can publish and query reference scripts in a timely manner"),(0,n.kt)("li",{parentName:"ul"},"can only contest once")),(0,n.kt)("h2",{id:"testcardanonode"},"Test.CardanoNode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"has expected cardano-node version available"),(0,n.kt)("li",{parentName:"ul"},"withCardanoNodeDevnet does start a block-producing devnet within 5 seconds")),(0,n.kt)("h2",{id:"testcardanoclient"},"Test.CardanoClient"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"queryGenesisParameters works as expected")))}p.isMDXComponent=!0}}]);