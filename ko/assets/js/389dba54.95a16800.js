"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,d=m["".concat(p,".").concat(u)]||m[u]||l[u]||i;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:0},a="\ud83d\udfe2 Overview",s={unversionedId:"prompt_hacking/defensive_measures/overview",id:"prompt_hacking/defensive_measures/overview",title:"\ud83d\udfe2 Overview",description:"Preventing prompt injection can be extremely difficult, and there exist few robust defenses against it(@crothers2022machine)(@goodside2021gpt). However, there are some commonsense solutions. For example, if your application does not need to output free-form text, do not allow such outputs. There are many different ways to defend a prompt. We will discuss some of the most common ones here.",source:"@site/docs/prompt_hacking/defensive_measures/overview.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/overview",permalink:"/ko/docs/prompt_hacking/defensive_measures/overview",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Defensive Measures",permalink:"/ko/docs/category/-defensive-measures"},next:{title:"\ud83d\udfe2 Filtering",permalink:"/ko/docs/prompt_hacking/defensive_measures/filtering"}},p={},c=[],f={toc:c},m="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-overview"},"\ud83d\udfe2 Overview"),(0,o.kt)("p",null,"Preventing prompt injection can be extremely difficult, and there exist few robust defenses against it",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". However, there are some commonsense solutions. For example, if your application does not need to output free-form text, do not allow such outputs. There are many different ways to defend a prompt. We will discuss some of the most common ones here."),(0,o.kt)("p",null,"This chapter covers additional commonsense strategies like filtering out words. It also covers prompt improvement strategies (instruction defense, post-prompting, different ways to enclose user input, and XML tagging). Finally, we discuss using an LLM to evaluate output and some more model specific approaches."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Crothers, E., Japkowicz, N., & Viktor, H. (2022). Machine Generated Text: A Comprehensive Survey of Threat Models and Detection Methods.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Goodside, R. (2022). GPT-3 Prompt Injection Defenses. https://twitter.com/goodside/status/1578278974526222336?s=20&t=3UMZB7ntYhwAk3QLpKMAbw\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);