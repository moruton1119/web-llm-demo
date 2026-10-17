const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lazy-style-probe-BRwhiL4M.js","./lazy-style-probe-DpYMcVq_.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,s as n,u as r}from"./privacy-fetch-broker/worker-transport-1jpiQ9uS.js";import{At as i,D as a,I as o,S as s,St as c,T as l,Ut as u,W as d,j as f,mt as p,qt as m,st as h,v as g,w as _,x as v,y}from"./vue.runtime.esm-bundler-CbicM13T.js";import{a as b,n as x,r as S}from"./strings-CNSnmhhc.js";import{t as C}from"./preload-helper-DYl5dUZ5.js";import{t as w}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{t as T}from"./createLucideIcon-BJaUlhYa.js";import{X as ee,_ as E,a as D,cn as O,ln as k,mn as A,o as j}from"./app-DnBqaxXf.js";import"./56e4373f55f359f04f7e389d21fb97c53c3d3909904d57e24636fcec24252a4b-BJhssqbx.js";import"./526fa247f2e8d4e6f59c68c79bef6dafe0243540cedae95ae5acfaa701ac1a09-C_A4pgHh.js";import"./a4cd16a429f4a8e294d012c4a9d01b010fc37df1680de0a75d1b1a39d3a204f0-sgx6q7Lb.js";import{n as M,r as N}from"./report-0UXeHChW.js";var P=T(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]);b({boundaryId:`e31f9184b5de9c9a`,keys:[`AE`,`AF`,`AG`,`AH`,`AI`,`AJ`,`AK`,`AL`,`AM`,`AN`,`AO`],loaders:{en:()=>C(()=>import(`./f94cd1d345717bc4-DzgLmIq6.js`).then(e=>e.default),[],import.meta.url),ja:()=>C(()=>import(`./f94cd1d345717bc4-7euuSH7o.js`).then(e=>e.default),[],import.meta.url),"zh-Hans":()=>C(()=>import(`./f94cd1d345717bc4-Cilyr2vN.js`).then(e=>e.default),[],import.meta.url),"pt-BR":()=>C(()=>import(`./f94cd1d345717bc4-ZNfLIuRG.js`).then(e=>e.default),[],import.meta.url),es:()=>C(()=>import(`./f94cd1d345717bc4-BYPpBsnL.js`).then(e=>e.default),[],import.meta.url),ko:()=>C(()=>import(`./f94cd1d345717bc4-DwLf0aUA.js`).then(e=>e.default),[],import.meta.url),de:()=>C(()=>import(`./f94cd1d345717bc4-BDpLC4wU.js`).then(e=>e.default),[],import.meta.url)}});var F=3e4,I=3e4,L=5e3,R=`naidan-highlight-worker`,z=`file-protocol-compatible-wesh-worker`;async function B({label:e,timeoutMs:t,action:n}){let r,i=new Promise((n,i)=>{r=setTimeout(()=>i(Error(`${e} timed out after ${t} ms.`)),t)});try{return await Promise.race([n(),i])}finally{r!==void 0&&clearTimeout(r)}}async function V({label:e,createWorker:t}){let n=await B({label:e,timeoutMs:F,action:t});try{return{worker:n,remote:r({endpoint:n})}}catch(e){throw n.terminate(),e}}async function H({session:t}){let n;try{await B({label:`Split Worker Comlink proxy release`,timeoutMs:L,action:async()=>{await e({remote:t.remote})}})}catch(e){n=e}finally{t.worker.terminate()}if(n!==void 0)throw n}async function U({session:e,releaseSession:t,timeoutMs:n}){try{await B({label:`Split Worker session cleanup`,timeoutMs:n,action:()=>t({session:e})})}catch(t){throw e.worker.terminate(),t}}async function W({createSession:e,releaseSession:t,creationTimeoutMs:n,cleanupTimeoutMs:r,label:i}){let a=Error(`${i} timed out after ${n} ms.`),o,s=!1,c=Promise.resolve().then(e),l=new Promise((e,t)=>{o=setTimeout(()=>{s=!0,t(a)},n)});try{return await Promise.race([c,l])}finally{o!==void 0&&clearTimeout(o),s&&c.then(async e=>{try{await U({session:e,releaseSession:t,timeoutMs:r})}catch{}},()=>void 0)}}async function G({createSession:e,releaseSession:t,creationTimeoutMs:n,cleanupTimeoutMs:r}){let i=await Promise.allSettled([W({createSession:e,releaseSession:t,creationTimeoutMs:n,cleanupTimeoutMs:r,label:`First Highlight Worker session creation`}),W({createSession:e,releaseSession:t,creationTimeoutMs:n,cleanupTimeoutMs:r,label:`Second Highlight Worker session creation`})]),a=i.filter(e=>e.status===`fulfilled`),o=i.filter(e=>e.status===`rejected`)[0];if(o!==void 0)throw await Promise.allSettled(a.map(({value:e})=>U({session:e,releaseSession:t,timeoutMs:r}))),o.reason;let s=a[0],c=a[1];if(s===void 0||c===void 0)throw Error(`Concurrent Highlight Worker creation produced an incomplete outcome set.`);return[s.value,c.value]}async function K({session:e,source:t}){let n=await e.remote.highlight({request:{code:t,language:`json`,mode:`named-language`}});return{resolvedLanguage:n.resolvedLanguage,htmlLength:n.html.length}}async function q({session:e,source:t,runProbe:n,releaseSession:r,operationTimeoutMs:i,cleanupTimeoutMs:a}){let o,s;try{o=await B({label:`Highlight Worker probe`,timeoutMs:i,action:()=>n({session:e,source:t})})}catch(e){s=e}let c;try{await U({session:e,releaseSession:r,timeoutMs:a})}catch(e){c=e}if(s!==void 0)throw s;if(c!==void 0)throw c;if(o===void 0)throw Error(`Highlight Worker probe produced no result.`);return o}async function J({wesh:e}){let r=[],i=[],a=new TextDecoder,o,s,c;try{await e.init(n({value:{rootHandle:`readonly`,mounts:[],user:`standalone-verification`,initialEnv:{},initialCwd:`/`},capability:`file-system-handle-clone`})),o=(await e.startExecution({script:`ls -1 /`},t({value:e=>{switch(e.type){case`started`:case`exit`:return;case`stdout`:r.push(a.decode(e.buffer));return;case`stderr`:i.push(a.decode(e.buffer));return;case`error`:throw Error(e.message);default:throw Error(`Unhandled Wesh verification event: ${String(e)}`)}}}))).executionId,s={exitCode:(await e.awaitExecution({request:{executionId:o}})).exitCode,stdout:r.join(``),stderr:i.join(``)}}catch(e){c=e}let l;if(o!==void 0)try{await e.disposeExecution({request:{executionId:o}})}catch(e){l=e}try{await e.dispose()}catch(e){l??=e}if(c!==void 0)throw c;if(l!==void 0)throw l;if(s===void 0)throw Error(`Standalone Wesh file probe produced no result.`);return s}async function Y({session:e,runProbe:t,releaseSession:n,operationTimeoutMs:r,cleanupTimeoutMs:i}){let a,o;try{a=await B({label:`Wesh Worker file probe`,timeoutMs:r,action:()=>t({session:e})})}catch(e){o=e}let s;try{await U({session:e,releaseSession:n,timeoutMs:i})}catch(e){s=e}if(o!==void 0)throw o;if(s!==void 0)throw s;if(a===void 0)throw Error(`Wesh Worker file probe produced no result.`);return a}function X(){return{workersCreated:0,workersTerminated:0,activeWorkers:0,initializationAttempts:0,initializationSuccesses:0,initializationFailures:0,initializationTimeouts:0}}function Z({before:e,after:t}){return{workersCreated:t.workersCreated-e.workersCreated,workersTerminated:t.workersTerminated-e.workersTerminated,activeWorkers:t.activeWorkers-e.activeWorkers,initializationAttempts:t.initializationAttempts-e.initializationAttempts,initializationSuccesses:t.initializationSuccesses-e.initializationSuccesses,initializationFailures:t.initializationFailures-e.initializationFailures,initializationTimeouts:t.initializationTimeouts-e.initializationTimeouts}}async function Q({createHighlightSession:e,createWeshSession:t,readDiagnostics:n,runHighlightProbe:r,runWeshProbe:i,releaseHighlightSession:a,releaseWeshSession:o,creationTimeoutMs:s,operationTimeoutMs:c,cleanupTimeoutMs:l}){let u=n(),d=await G({createSession:e,releaseSession:a,creationTimeoutMs:s,cleanupTimeoutMs:l}),f=await Promise.allSettled(d.map((e,t)=>q({session:e,source:`{"probe":"concurrent-${t===0?`a`:`b`}"}`,runProbe:r,releaseSession:a,operationTimeoutMs:c,cleanupTimeoutMs:l}))),p=f.find(e=>e.status===`rejected`);if(p)throw p.reason;let m=f.map(e=>{switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:throw Error(`Unhandled Promise outcome: ${String(e)}`)}}),h=await q({session:await W({createSession:e,releaseSession:a,creationTimeoutMs:s,cleanupTimeoutMs:l,label:`Recreated Highlight Worker session creation`}),source:`{"probe":"recreated-after-terminate"}`,runProbe:r,releaseSession:a,operationTimeoutMs:c,cleanupTimeoutMs:l}),g=await Y({session:await W({createSession:t,releaseSession:o,creationTimeoutMs:s,cleanupTimeoutMs:l,label:`Wesh Worker session creation`}),runProbe:i,releaseSession:o,operationTimeoutMs:c,cleanupTimeoutMs:l}),_=n();return{diagnosticsBefore:u,diagnosticsAfter:_,diagnosticDeltas:Z({before:u,after:_}),workerDeltas:{highlight:Z({before:u.workersByName[R]??X(),after:_.workersByName[R]??X()}),wesh:Z({before:u.workersByName[z]??X(),after:_.workersByName[z]??X()})},concurrentHighlights:m,recreatedWorkerHighlight:h,weshCommandProbe:g}}async function te(){return Q({createHighlightSession:()=>V({label:`Highlight Worker creation`,createWorker:()=>D()}),createWeshSession:()=>V({label:`Wesh Worker creation`,createWorker:()=>D()}),readDiagnostics:j,runHighlightProbe:K,runWeshProbe:({session:e})=>J({wesh:e.remote}),releaseHighlightSession:H,releaseWeshSession:H,creationTimeoutMs:F,operationTimeoutMs:I,cleanupTimeoutMs:L})}w({moduleId:`\0virtual:naidan-tailwind-css-module/8bb8260869ec7d7c70e46b8367b1df45ac80ea89d2bd0ec0c06dea468602ac62.js`,fragments:[[435,`@layer utilities {
.h-\\[13px\\] {
    height: 13px;
  }
}
`],[562,`@layer utilities {
.w-\\[43px\\] {
    width: 43px;
  }
}
`],[859,`@layer utilities {
.border-cyan-200 {
    border-color: var(--color-cyan-200);
  }
.border-cyan-300 {
    border-color: var(--color-cyan-300);
  }
}
`],[964,`@layer utilities {
.bg-cyan-700 {
    background-color: var(--color-cyan-700);
  }
}
`],[968,`@layer utilities {
.bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
}
`],[1307,`@layer utilities {
.text-cyan-800\\/70 {
    color: color-mix(in srgb, oklch(45% 0.085 224.283) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-cyan-800) 70%, transparent);
    }
  }
.text-cyan-900 {
    color: var(--color-cyan-900);
  }
}
`],[1637,`@layer utilities {
.hover\\:bg-cyan-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-cyan-50);
      }
    }
  }
.hover\\:bg-cyan-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-cyan-600);
      }
    }
  }
}
`],[1846,`@layer utilities {
.sm\\:px-8 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
}
`],[1957,`@layer utilities {
.dark\\:border-amber-900\\/50 {
    &:where(.dark, .dark *) {
      border-color: color-mix(in srgb, oklch(41.4% 0.112 45.904) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-amber-900) 50%, transparent);
      }
    }
  }
}
`],[1974,`@layer utilities {
.dark\\:border-cyan-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-cyan-800);
    }
  }
.dark\\:border-cyan-900\\/50 {
    &:where(.dark, .dark *) {
      border-color: color-mix(in srgb, oklch(39.8% 0.07 227.392) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-cyan-900) 50%, transparent);
      }
    }
  }
}
`],[2067,`@layer utilities {
.dark\\:bg-emerald-900\\/40 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(37.8% 0.077 168.94) 40%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-emerald-900) 40%, transparent);
      }
    }
  }
}
`],[2194,`@layer utilities {
.dark\\:text-cyan-200 {
    &:where(.dark, .dark *) {
      color: var(--color-cyan-200);
    }
  }
.dark\\:text-cyan-300\\/70 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(86.5% 0.127 207.078) 70%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-cyan-300) 70%, transparent);
      }
    }
  }
}
`]]}),f(),h(),i();var ne={class:`min-h-full bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-8`,"data-testid":`standalone-verification-page`},re={class:`mx-auto max-w-5xl space-y-5 rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm dark:border-cyan-900/50 dark:bg-gray-900`},ie={class:`flex flex-wrap items-start justify-between gap-3`},ae={class:`text-lg font-bold text-cyan-900 dark:text-cyan-200`},oe={class:`mt-1 max-w-2xl text-sm font-medium leading-relaxed text-cyan-800/70 dark:text-cyan-300/70`},se={class:`flex flex-wrap gap-2`},ce=[`disabled`],le={key:0,class:`rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-medium text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200`,"data-testid":`standalone-verification-unavailable`},ue={class:`text-xs text-gray-500 dark:text-gray-400`},de={class:`sr-only`,"aria-hidden":`true`},fe={key:1,class:`space-y-3`},pe={class:`max-h-[36rem] overflow-auto rounded-xl bg-gray-950 p-4 text-left text-[11px] leading-5 text-gray-100`,"data-testid":`standalone-verification-json`},$=`data-debug-file-protocol-standalone-lazy-style-initial-marker`,me=A(a({__name:`standalone`,setup(e,{expose:t}){let n=O(),r=k(),{addToast:i}=E(),a=g(()=>!1),f=p(!1),h=p(),b=p(),w=p(),T=p(),D=g(()=>h.value===void 0?``:N({report:h.value}));function A({element:e}){let t=document.documentElement,n=t.getAttribute($);if(n!==null)return n;let r=getComputedStyle(e).getPropertyValue(`--debug-file-protocol-standalone-lazy-style-marker`).trim();return t.setAttribute($,r),r}async function j({signal:e}){e.throwIfAborted();let t=await C(()=>import(`./lazy-style-probe-BRwhiL4M.js`),__vite__mapDeps([0,1]),import.meta.url);return e.throwIfAborted(),{marker:t.STANDALONE_VERIFICATION_LAZY_STYLE_MARKER}}async function F({signal:e}){if(e.throwIfAborted(),!n.fullPath.startsWith(`/debug/standalone`))throw Error(`Unexpected standalone debug route: ${n.fullPath}`);let t=n.fullPath,i=`__standalone-verification-route-probe`,a,s;try{await r.replace({path:n.path,hash:n.hash,query:{...n.query,[i]:n.query[i]===`1`?`2`:`1`}}),await o(),e.throwIfAborted(),a=n.fullPath}catch(e){s=e}let c;try{await r.replace(t),await o()}catch(e){c=e}if(s!==void 0)throw s;if(c!==void 0)throw c;if(a===void 0)throw Error(`Standalone verification route transition produced no transitioned route.`);return{beforePath:t,transitionedPath:a,restoredPath:n.fullPath}}async function I(){if(!(!a.value||f.value||b.value===void 0||w.value===void 0||T.value===void 0)){f.value=!0,h.value=void 0;try{let e=A({element:T.value}),t=r.resolve(n.fullPath);h.value=await M({route:{fullPath:n.fullPath,name:typeof n.name==`string`?n.name:void 0,matchedPaths:n.matched.map(e=>e.path),resolvedHref:t.href},tailwindStyleProbeElement:b.value,scopedStyleProbeElement:w.value,lazyStyleProbeElement:T.value,lazyStyleInitialMarker:e,debugLoadFileProtocolStandaloneLazyStyleProbeModule:j,debugExerciseFileProtocolStandaloneRouteRoundTrip:F,debugRunWorkerProbe:async({signal:e})=>{e.throwIfAborted();let t=await te();return e.throwIfAborted(),t},checkTimeoutMs:6e4})}catch(e){i({message:await x.AN({a:e instanceof Error?e.message:String(e)}),duration:8e3})}finally{f.value=!1}}}function L({text:e}){let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();try{return document.execCommand(`copy`)}finally{t.remove()}}async function R(){if(D.value.length!==0)try{let e=!1;if(navigator.clipboard?.writeText!==void 0)try{await navigator.clipboard.writeText(D.value),e=!0}catch{}if(e||=L({text:D.value}),!e)throw Error(`The browser rejected both clipboard methods.`);i({message:await x.AL(),duration:4e3})}catch(e){i({message:await x.AH({a:e instanceof Error?e.message:String(e)}),duration:8e3})}}return t({}),(e,t)=>(d(),s(`main`,ne,[y(`section`,re,[y(`div`,ie,[y(`div`,null,[y(`h1`,ae,m(c(S).AK()),1),y(`p`,oe,m(c(S).AE()),1)]),y(`div`,se,[y(`button`,{class:`inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60`,"data-testid":`run-standalone-verification-button`,disabled:f.value||!a.value,onClick:I},[l(c(ee),{class:`h-4 w-4`}),_(` `+m(f.value?c(S).AJ():c(S).AI()),1)],8,ce),h.value?(d(),s(`button`,{key:0,class:`inline-flex items-center gap-2 rounded-xl border border-cyan-300 bg-white px-4 py-2.5 text-xs font-bold text-cyan-900 shadow-sm transition hover:bg-cyan-50 dark:border-cyan-800 dark:bg-gray-950 dark:text-cyan-200`,"data-testid":`copy-standalone-verification-json-button`,onClick:R},[l(c(P),{class:`h-4 w-4`}),_(` `+m(c(S).AG()),1)])):v(``,!0)])]),a.value?v(``,!0):(d(),s(`p`,le,m(c(S).AM()),1)),y(`p`,ue,m(c(S).AF()),1),y(`div`,de,[y(`div`,{ref_key:`tailwindStyleProbeElement`,ref:b,class:`h-[13px] w-[43px]`,"data-testid":`standalone-tailwind-probe`},null,512),y(`div`,{ref_key:`scopedStyleProbeElement`,ref:w,class:`standalone-verification-scoped-probe`,"data-testid":`standalone-scoped-probe`},null,512),y(`div`,{ref_key:`lazyStyleProbeElement`,ref:T,class:`standalone-verification-lazy-style-probe`,"data-testid":`standalone-lazy-style-probe`},null,512)]),h.value?(d(),s(`div`,fe,[y(`p`,{class:u([`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide`,h.value.status===`pass`?`bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300`:`bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300`]),"data-testid":`standalone-verification-status`},m(c(S).AO({a:h.value.status,b:h.value.summary.passed,c:h.value.summary.failed})),3),y(`pre`,pe,m(D.value),1)])):v(``,!0)])]))}}),[[`__scopeId`,`data-v-6ccb8f12`]]);export{me as default};
//# sourceMappingURL=standalone-PgZvSM7c.js.map