"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={layout:"post",title:"Guilds Related Shortcuts",subtitle:"Some really complicated coding related to guilds",tags:["guild"],comments:!0},i=void 0,o={permalink:"/blog/2022/09/25/guild-related",source:"@site/blog/2022-09-25-guild-related.mdx",title:"Guilds Related Shortcuts",description:"Get guild name from its ID",date:"2022-09-25T00:00:00.000Z",formattedDate:"September 25, 2022",tags:[{label:"guild",permalink:"/blog/tags/guild"}],readingTime:.36,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Guilds Related Shortcuts",subtitle:"Some really complicated coding related to guilds",tags:["guild"],comments:!0},prevItem:{title:"Syntax Related Shortcuts",permalink:"/blog/2022/09/26/syntax-related"}},c={authorsImageUrls:[]},s=[{value:"Get guild name from its ID",id:"get-guild-name-from-its-id",level:3},{value:"Get subcommand",id:"get-subcommand",level:3},{value:"Check Bot Permission",id:"check-bot-permission",level:3},{value:"Get Channel",id:"get-channel",level:3},{value:"Get Channel by name",id:"get-channel-by-name",level:3}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"get-guild-name-from-its-id"},"Get guild name from its ID"),(0,r.kt)("p",null,"{% highlight javascript linenos %}\ninteraction.client.guilds.fetch(channelID).then((guild) => console.log(guild.name))\n{% endhighlight %}"),(0,r.kt)("h3",{id:"get-subcommand"},"Get subcommand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const sub = interaction.options._subcommand;\n")),(0,r.kt)("p",null,"{: .box-note}\n",(0,r.kt)("strong",{parentName:"p"},"Note:")," This can be used too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const sub = interaction.options.getSubcommand();\n")),(0,r.kt)("h3",{id:"check-bot-permission"},"Check Bot Permission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'if (!interaction.guild.members.me.permissions.has("ManageChannels"))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (interaction.guild.members.me.permissions.has([PermissionsBitField.Flags.BanMembers]) === false)\n")),(0,r.kt)("h3",{id:"get-channel"},"Get Channel"),(0,r.kt)("p",null,"{% highlight javascript linenos %}\ninteraction.guild.channels.fetch('741480944367566904').then(channel => console.log(",(0,r.kt)("inlineCode",{parentName:"p"},"${channel.type}"),")).catch(console.error);\n{% endhighlight %}"),(0,r.kt)("h3",{id:"get-channel-by-name"},"Get Channel by name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'      const search = args.join(" ");\n      const tcByName = message.guild.findMatchingChannels(search);\n      if (tcByName.length === 0) return message.safeReply(`No channels found matching \\`${search}\\`!`);\n      if (tcByName.length > 1) return message.safeReply(`Multiple channels found matching \\`${search}\\`!`);\n      [targetChannel] = tcByName;\n')))}p.isMDXComponent=!0}}]);