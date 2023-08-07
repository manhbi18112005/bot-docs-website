"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));n(614),n(941);const i={id:"utility-commands",title:"Utility Commands",description:"Utility Commands"},o=void 0,l={unversionedId:"features/utility-commands",id:"features/utility-commands",title:"Utility Commands",description:"Utility Commands",source:"@site/docs/features/utility-commands.mdx",sourceDirName:"features",slug:"/features/utility-commands",permalink:"/docs/features/utility-commands",draft:!1,tags:[],version:"current",lastUpdatedBy:"MyT\u30c4",lastUpdatedAt:1691395511,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{id:"utility-commands",title:"Utility Commands",description:"Utility Commands"},sidebar:"docs",previous:{title:"Other Commands",permalink:"/docs/features/other-commands"},next:{title:"Others",permalink:"/docs/others"}},s={},m=[],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many nice commands are here."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"Below is a list of general commands. We used  nn_ for the prefix since it's the default.",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"() means optional")),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<> means required")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_ship"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<someone> (someone)"))),(0,a.kt)("p",null,"Ship 2 people. Aliases: ","['lovemeter','pair','ratepair']",", Usage: nn_ship @MyT @Chuck','pair @Chuck,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_translate"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<text>"))),(0,a.kt)("p",null,"Translate text from automatic language detection. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_choice"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<option1> | <option2> | <option...>"))),(0,a.kt)("p",null,"Make a choice randomly... Usage: nn_choice Vietnam | China"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_shortlink"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<url>"))),(0,a.kt)("p",null,"Shorten a link. Aliases: ",'["shorturl", "surl", "slink"]',", Usage: nn_shortlink fb.me/manhbi18112005"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_remind"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<time> <reason>"))),(0,a.kt)("p",null,"Set a remind for you. Usage: nn_remind 1m ng\u1ee7 \u0111i"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_poll"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<channel> <description>"))),(0,a.kt)("p",null,"Hug someone? Usage: nn_poll #meow Anh c\xf3 iu m\xe8o kh\xf4nng dz\u1ee3?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"nn_emojify"))," ",(0,a.kt)("inlineCode",{parentName:"li"},"<test>"))),(0,a.kt)("p",null,"Returns provided text in emojify (emotes) form. Usage: nn_emojify meo meo meo"))}c.isMDXComponent=!0}}]);