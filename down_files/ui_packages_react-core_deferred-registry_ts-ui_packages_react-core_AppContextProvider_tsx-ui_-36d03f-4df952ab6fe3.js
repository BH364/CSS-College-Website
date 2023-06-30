"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_deferred-registry_ts-ui_packages_react-core_AppContextProvider_tsx-ui_-36d03f"],{65722:(e,t,r)=>{r.d(t,{Z:()=>a});let a=()=>void 0},45055:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(67294);let s=(0,a.createContext)(null)},96843:(e,t,r)=>{var a;r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){return(a=this.registrationEntries)[e]||(a[e]=new s),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let s=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},51145:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(44544);let{getItem:s,setItem:o,removeItem:n}=(0,a.Z)("localStorage"),i="REACT_PROFILING_ENABLED",l={enable:()=>o(i,"true"),disable:()=>n(i),isEnabled:()=>!!s(i)},d=l},86283:(e,t,r)=>{r.d(t,{Qg:()=>a.Qg,W6:()=>a.W6,cF:()=>a.cF,iG:()=>s.iG,jX:()=>s.jX,n4:()=>s.n4,zu:()=>s.zu});var a=r(35647),s=r(73614)},73614:(e,t,r)=>{r.d(t,{iG:()=>s,jX:()=>n,n4:()=>a,zu:()=>o});let a="undefined"==typeof document?void 0:document,s="undefined"==typeof window?void 0:window,o="undefined"==typeof history?void 0:history,n="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,r)=>{r.d(t,{Qg:()=>o,W6:()=>s,cF:()=>n});var a=r(73614);let s=void 0===a.n4,o=!s;function n(){return!!s||Boolean(a.n4.querySelector('react-app[data-ssr="true"]'))}},95325:(e,t,r)=>{r.d(t,{JP:()=>g,sS:()=>C,F1:()=>S,V6:()=>N});var a,s,o,n,i,l,d=r(85893),c=r(85529),u=r(70697),h=r(41905),m=r(67294);let p={info:"",success:"Toast--success",error:"Toast--error"},f={info:(0,d.jsx)(c.szr,{}),success:(0,d.jsx)(c.nQG,{}),error:(0,d.jsx)(c.wNq,{})},y=({message:e,timeToLive:t,icon:r,type:a="info",role:s="alert"})=>{let[o,n]=m.useState(!0),{safeSetTimeout:i}=(0,u.Z)();return(0,m.useEffect)(()=>{t&&i(()=>n(!1),t-300)},[i,t]),(0,d.jsx)(h.h,{children:(0,d.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,d.jsxs)("div",{className:`Toast ${p[a]} ${o?"Toast--animateIn":"Toast--animateOut"}`,id:"issue-app-toast","data-testid":`issue-app-toast-${a}`,role:s,children:[(0,d.jsx)("span",{className:"Toast-icon",children:r||f[a]}),(0,d.jsx)("span",{className:"Toast-content",children:e})]})})})};try{(a=y).displayName||(a.displayName="Toast")}catch{}function g({progress:e,radius:t=11,isSuccess:r=!1}){return(0,d.jsxs)("svg",{width:2*t+2,height:2*t+2,"data-target":"tracked-issues-progress.progress","data-circumference":"38",style:{transform:"rotate(-90deg)"},"aria-hidden":"true",focusable:"false",children:[(0,d.jsx)("circle",{stroke:"var(--color-border-default)",strokeWidth:"2",fill:"transparent",cx:"50%",cy:"50%",r:t}),(0,d.jsx)("circle",{style:{transition:"stroke-dashoffset 0.35s"},stroke:r?"var(--color-done-fg)":"var(--color-fg-default)",strokeWidth:"2",strokeDasharray:2*Math.PI*t,strokeDashoffset:2*Math.PI*t*(1-e),strokeLinecap:"round",fill:"transparent",cx:"50%",cy:"50%",r:t})]})}try{(s=g).displayName||(s.displayName="PercentageCircle")}catch{}var v=r(65722);let x=(0,m.createContext)({addToast:v.Z,addPersistedToast:v.Z,clearPersistedToast:v.Z}),R=(0,m.createContext)({toasts:[],persistedToast:null});function C({children:e}){let[t,r]=(0,m.useState)([]),[a,s]=(0,m.useState)(null),{safeSetTimeout:o}=(0,u.Z)(),n=(0,m.useCallback)(function(e){r([...t,e]),o(()=>r(t.slice(1)),5e3)},[t,o]),i=(0,m.useCallback)(function(e){s(e)},[s]),l=(0,m.useCallback)(function(){s(null)},[s]),c=(0,m.useMemo)(()=>({addToast:n,addPersistedToast:i,clearPersistedToast:l}),[i,n,l]),h=(0,m.useMemo)(()=>({toasts:t,persistedToast:a}),[t,a]);return(0,d.jsx)(x.Provider,{value:c,children:(0,d.jsx)(R.Provider,{value:h,children:e})})}function N(){return(0,m.useContext)(x)}try{(o=x).displayName||(o.displayName="ToastContext")}catch{}try{(n=R).displayName||(n.displayName="InternalToastsContext")}catch{}try{(i=C).displayName||(i.displayName="ToastContextProvider")}catch{}function S(){let{toasts:e,persistedToast:t}=(0,m.useContext)(R);return(0,d.jsxs)(d.Fragment,{children:[e.map((e,t)=>(0,d.jsx)(y,{message:e.message,icon:e.icon,timeToLive:5e3,type:e.type,role:e.role},t)),t&&(0,d.jsx)(y,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{(l=S).displayName||(l.displayName="Toasts")}catch{}},78249:(e,t,r)=>{r.d(t,{g:()=>o});var a=r(67294),s=r(86283);function o(e,t){s.Qg&&(0,a.useLayoutEffect)(e,t)}},61476:(e,t,r)=>{r.d(t,{P:()=>l,f:()=>i});var a,s,o=r(85893),n=r(67294);let i=(0,n.createContext)({locale:"en"}),l=({locale:e="en",children:t})=>{let r=(0,n.useMemo)(()=>({locale:e}),[e]);return(0,o.jsx)(i.Provider,{value:r,children:t})};try{(a=i).displayName||(a.displayName="IntlContext")}catch{}try{(s=l).displayName||(s.displayName="IntlProvider")}catch{}},58989:(e,t,r)=>{r.d(t,{i:()=>i});var a,s=r(85893),o=r(67294),n=r(45055);function i({routes:e,history:t,children:r}){let a=(0,o.useMemo)(()=>({routes:e,history:t}),[e,t]);return(0,s.jsx)(n.I.Provider,{value:a,children:r})}try{(a=i).displayName||(a.displayName="AppContextProvider")}catch{}},1343:(e,t,r)=>{let a;r.d(t,{R:()=>x});var s,o=r(85893),n=r(98224),i=r(78831),l=r(8386),d=r(27233),c=r(67294);let u=globalThis.document;function h(e){switch(e){case"light":return"day";case"dark":return"night";default:return"auto"}}function m(e){let t=e.colorMode;return{colorMode:h(t),dayScheme:e.lightTheme,nightScheme:e.darkTheme}}function p(){return m(a||{})}function f(){let{documentElement:e}=u,[t,r]=(0,c.useState)(()=>m(e.dataset));return(0,c.useEffect)(()=>{let t=new MutationObserver(()=>r(m(e.dataset)));return t.observe(e,{attributes:!0,attributeFilter:["data-color-mode","data-light-theme","data-dark-theme"]}),()=>t.disconnect()},[e]),t}let y=u?f:p;var g=r(61476),v=r(95325);function x({locale:e,children:t,wasServerRendered:r}){let{colorMode:a,dayScheme:s,nightScheme:c}=y();return(0,o.jsx)(i.HK,{children:(0,o.jsx)(n.DJ,{wasServerRendered:r,children:(0,o.jsx)(g.P,{locale:e,children:(0,o.jsx)(l.ZP,{colorMode:a,dayScheme:s,nightScheme:c,preventSSRMismatch:!0,children:(0,o.jsx)(d.Z,{children:(0,o.jsx)(v.sS,{children:t})})})})})})}try{(s=x).displayName||(s.displayName="BaseProviders")}catch{}},77617:(e,t,r)=>{r.d(t,{P:()=>d});var a,s,o=r(85893),n=r(95325),i=r(67294);function l(){let{addToast:e}=(0,n.V6)();return(0,i.useEffect)(()=>{e({type:"error",message:"SSR failed, see console for error details"})},[]),null}try{(a=l).displayName||(a.displayName="SSRErrorToast")}catch{}function d({ssrError:e}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.F1,{}),e&&(0,o.jsx)(l,{})]})}try{(s=d).displayName||(s.displayName="CommonElements")}catch{}},88003:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var a=r(85893),s=r(76006),o=r(20745),n=r(67294),i=r(51145),l=function(e,t,r,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,r,n):s(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){let e={createRoot:o.s,hydrateRoot:o.a};i.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,s=await this.getReactNode(t),l=(0,a.jsx)(n.StrictMode,{children:s});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:()=>{}}),t&&requestIdleCallback(()=>document.head.removeChild(t))}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,62518,19))}logSSRError(e){let t=JSON.parse(e),r=d(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}};function d(e){if(!e.stacktrace)return"";let t="\n ",r=e.stacktrace.map(e=>{let{function:r,filename:a,lineno:s,colno:o}=e,n=`${t} at ${r} (${a}:${s}:${o})`;return t=" ",n});return r.join("\n")}l([s.fA],ReactBaseElement.prototype,"embeddedData",void 0),l([s.fA],ReactBaseElement.prototype,"ssrError",void 0),l([s.fA],ReactBaseElement.prototype,"reactRoot",void 0)},98224:(e,t,r)=>{r.d(t,{DJ:()=>u,i$:()=>o,kb:()=>c});var a,s,o,n=r(85893),i=r(67294),l=r(86283),d=r(78249);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(o||(o={}));let c=(0,i.createContext)("ClientRender");function u({wasServerRendered:e,children:t}){let[r,a]=(0,i.useState)(()=>l.W6?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,d.g)(()=>{"ClientRender"!==r&&a("ClientRender")},[r]),(0,n.jsx)(c.Provider,{value:r,children:t})}try{(a=c).displayName||(a.displayName="RenderPhaseContext")}catch{}try{(s=u).displayName||(s.displayName="RenderPhaseProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_deferred-registry_ts-ui_packages_react-core_AppContextProvider_tsx-ui_-36d03f-657273a99671.js.map