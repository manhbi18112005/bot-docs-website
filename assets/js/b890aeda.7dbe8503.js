"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Bot dashboard website revamp",authors:["myt"],tags:["dashboard","website"]},i=void 0,s={permalink:"/blog/2023/05/04/newsneakpeak",source:"@site/blog/2023-05-04-newsneakpeak/index.mdx",title:"Bot dashboard website revamp",description:"Hi there, it has been a very long time since my latest update. Although I regularly pushed new updates to Github, I was so lazy to write a short blog post about it. I will try to be more active in the future.",date:"2023-05-04T00:00:00.000Z",formattedDate:"May 4, 2023",tags:[{label:"dashboard",permalink:"/blog/tags/dashboard"},{label:"website",permalink:"/blog/tags/website"}],readingTime:1.2066666666666668,hasTruncateMarker:!1,authors:[{name:"Le Ngo Duc Manh",title:"Founder of No Name Studio",url:"https://myt.nnsvn.me",imageURL:"https://github.com/manhbi18112005.png",key:"myt"}],frontMatter:{title:"Bot dashboard website revamp",authors:["myt"],tags:["dashboard","website"]},prevItem:{title:"No Name Bot Changelog - Version 8.0.0",permalink:"/blog/2023/07/17/8.0.0update"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hi there, it has been a very long time since my latest update. Although I regularly pushed new updates to Github, I was so lazy to write a short blog post about it. I will try to be more active in the future."),(0,o.kt)("p",null,"So in the past few months, I have been struggling with exams, exams and exams... ",(0,o.kt)("del",{parentName:"p"},"genshin is great thru")," I spent time on coding mainly on weekend or holiday, and it was all about the website. The old code I borrowed from Github is totally a mess (I have no idea why he copied the same style for 10 pages literally), therefore reusing the old code is not a great idea. I need to write a new codebase totally from scratch, which you all know costs a lot of time. I have to admit that I am not a good front-end developer, so I spent a lot of time on learning and trying new things. I am still learning, and I will keep learning. ==lol copilot wrote the last sentence==. Between React and Bootstrap, React is better for big production, greater performance, but it takes double the time \ud83d\ude2d. "),(0,o.kt)("p",null,"So basically I started taking drafts on my IPAD, then I chose the most compatitable and ",(0,o.kt)("strong",{parentName:"p"},"easiest")," to start working on. By dividing into small components, I can reuse the code very effectively. Besides, I decided to transfer the current subdomain and use a new web homepage from React. I am still working on it, and I will try to finish it as soon as possible."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc",src:n(2137).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"In the above image, you can see that on the same page, the old code has 2404 lines, meanwhile the new one has only 58. The most obvious advantage is that you can understand the code clearly and my server will spend less time compiling."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Old UI",src:n(1659).Z,width:"1920",height:"1080"}),"\n",(0,o.kt)("img",{alt:"New UI",src:n(9280).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Also you can easily compare the new layout with the former. While it depends on personal tastes, I believe the new one is more modernized and cleaner."),(0,o.kt)("p",null,"So that all for this blog, I will need several weeks to migrate the current features to new UI, and also time for testing, so stay tuned!!!"))}m.isMDXComponent=!0},9280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/newsite-5b07354a8e6512178d2e15745e15db2a.png"},1659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oldsite-57a5b10902f0ab829482de6e25042845.png"},2137:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sc150708-ff3451c845d55110468e4cd6967f8519.png"}}]);