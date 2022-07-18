"use strict";(self.webpackChunkcanyon_io=self.webpackChunkcanyon_io||[]).push([[271],{1903:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),s=(n(7294),n(3905));const o={sidebar_position:1,title:"\u5e38\u89c1\u95ee\u9898"},r=void 0,l={unversionedId:"common_problem",id:"common_problem",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"\u8986\u76d6\u7387\u6587\u4ef6\u4e0d\u5b8c\u6574",source:"@site/docs/common_problem.md",sourceDirName:".",slug:"/common_problem",permalink:"/arex-help/docs/common_problem",editUrl:"http://canyon.io/-/tree/master/docs/common_problem.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5e38\u89c1\u95ee\u9898"}},i=[{value:"\u8986\u76d6\u7387\u6587\u4ef6\u4e0d\u5b8c\u6574",id:"\u8986\u76d6\u7387\u6587\u4ef6\u4e0d\u5b8c\u6574",children:[{value:".ts\u7f3a\u5931",id:"ts\u7f3a\u5931",children:[]}]}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u8986\u76d6\u7387\u6587\u4ef6\u4e0d\u5b8c\u6574"},"\u8986\u76d6\u7387\u6587\u4ef6\u4e0d\u5b8c\u6574"),(0,s.kt)("h3",{id:"ts\u7f3a\u5931"},".ts\u7f3a\u5931"),(0,s.kt)("p",null,"\u53ef\u80fd\u4f60\u7684\u9879\u76ee\u662f\u8fd9\u6837\u914d\u7f6e\u7684\ud83e\udd14"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    rules: [\n        {\n            test: /\\.(js|jsx)$/,\n            use:['babel-loader'],\n            exclude:'/node_modules/'\n        },\n        {\n            test: /\\.(ts|tsx)$/,\n            use:['ts-loader'],\n            exclude:'/node_modules/'\n        }\n    ]\n}\n")),(0,s.kt)("p",null,"\u7531\u4e8e babel-plugin-istanbul \u662f\u4f9d\u8d56\u4e8ebabel\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6539\u6210\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    rules: [\n        {\n            test: /\\.(js|jsx|ts|tsx)$/,\n            use:['babel-loader','ts-loader'],\n            exclude:'/node_modules/'\n        }\n    ]\n}\n")),(0,s.kt)("p",null,"\ud83d\udca1\u6216\u8005\u4f7f\u7528 ",(0,s.kt)("strong",{parentName:"p"},"@babel/preset-typescript")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"ts-loader\u5728\u5185\u90e8\u662f\u8c03\u7528\u4e86",(0,s.kt)("strong",{parentName:"p"},"TypeScript\u7684\u5b98\u65b9\u7f16\u8bd1\u5668 \u2013 tsc"),"\uff0c\u6240\u4ee5\u7b2c\u4e00\u79cd\u5199\u6cd5\u7684",(0,s.kt)("strong",{parentName:"p"},"\u5e76\u6ca1\u6709\u7ecf\u8fc7babel\u8f6c\u8bd1"),"\uff0c\u4e5f\u5c31\u6ca1\u6709\u4eab\u53d7\u5230babel\u7684\u5bf9JavaScript\u4ee3\u7801\u7684\u517c\u5bb9\u6027\u5904\u7406\u3002"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"\u95ee\u9898"),"\uff1a\u7528\u4e86typescript\u8fd8\u9700\u8981babel\u6216\u8005polyfill\u5417\uff1f ",(0,s.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/322722786"},"\u56de\u7b54\u4e00"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000010106158"},"\u56de\u7b54\u4e8c")))))}m.isMDXComponent=!0}}]);