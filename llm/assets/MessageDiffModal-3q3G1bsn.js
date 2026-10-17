import{d as e}from"./privacy-fetch-broker/worker-transport-1jpiQ9uS.js";import{At as t,D as n,H as r,K as i,S as a,St as o,T as s,Ut as c,W as l,b as u,et as d,i as f,j as p,m,mt as h,p as ee,qt as g,rt as te,st as _,t as ne,v,w as y,x as b,y as x}from"./vue.runtime.esm-bundler-CbicM13T.js";import{a as S,r as C}from"./strings-CNSnmhhc.js";import{t as w}from"./preload-helper-DYl5dUZ5.js";import{t as T}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{t as re}from"./arrow-down-C5Bf6OLv.js";import{t as E}from"./arrow-right-DnatKwgo.js";import{t as ie}from"./clock-CSL2YtS3.js";import{t as D}from"./copy-ryPnImk_.js";import{t as ae}from"./cpu-BPgh80FS.js";import{t as oe}from"./eye-off-CDtjbpQv.js";import{t as se}from"./eye-r76fvHgw.js";import{n as ce}from"./MessageActionsMenu-C41dVPoG.js";import{t as le}from"./rotate-ccw-D4ChHsxj.js";import{B as ue,mn as O,tt as k}from"./app-DnBqaxXf.js";import"./0963f1f2efd282a3155bf2baaf9ccb2b9bcb9e9a0bfce29d1ec552f2fc67b37d-CmtvHT2H.js";import{t as A}from"./message-text-BxODvLA1.js";import"./f9004e4bacdf86afb575355f988f793b2afd745c3bac6d2f33d6f5ff0aadcaee-BKq0NKFh.js";import"./a6cc3c5eb373b75db073c593233e85abcf91970ba20ea8fddf7c653837bbfe74-wriLM7Hy.js";import"./101edd00ea527063059f1fbba5b60f28c8ebde6b9eb15cfc63d6544cd4092d68-OiYCN3Tr.js";import"./b521e235b4efb22b5e330a04e4d91f8c39b2c049a3cdff309119a66c11397e7d-ByDiWaoT.js";import"./5b33de7a23d23ffe375bebbfe2be35862d78e938df7f7a30f4a28f6e08f496fb-Dj43QtNp.js";import"./3df0a6bca06e2665100ff9fee0a485e10092925ac4ce3f686b26137a152476ec-D8JKKWsb.js";import"./4a284388d0d5f15140334afecc655910c02414d2d6c5858c90a507a7def47b12-rUEzG9_1.js";import"./4464e414ac878015648e98a5698a87bc0d532e972d82dd37e395bf5f8da78eda-Dh316amm.js";import"./526fa247f2e8d4e6f59c68c79bef6dafe0243540cedae95ae5acfaa701ac1a09-C_A4pgHh.js";S({boundaryId:`5791a0d3084f22c5`,keys:[`su`,`sv`,`sw`,`sx`,`sy`,`sz`,`sA`,`sB`,`sC`,`sD`,`sE`,`sF`,`sG`,`sH`,`sI`,`sJ`,`sK`],loaders:{en:()=>w(()=>import(`./e852fcfdde29c881-Bvy6UxUP.js`).then(e=>e.default),[],import.meta.url),ja:()=>w(()=>import(`./e852fcfdde29c881-BIPrWAb1.js`).then(e=>e.default),[],import.meta.url),"zh-Hans":()=>w(()=>import(`./e852fcfdde29c881-C_GEZ-di.js`).then(e=>e.default),[],import.meta.url),"pt-BR":()=>w(()=>import(`./e852fcfdde29c881-C48P-Hfa.js`).then(e=>e.default),[],import.meta.url),es:()=>w(()=>import(`./e852fcfdde29c881-CUO9yAmt.js`).then(e=>e.default),[],import.meta.url),ko:()=>w(()=>import(`./e852fcfdde29c881-GeSusuNB.js`).then(e=>e.default),[],import.meta.url),de:()=>w(()=>import(`./e852fcfdde29c881-BnL6jjpk.js`).then(e=>e.default),[],import.meta.url)}});function j({oldText:e,newText:t}){let n=({text:e})=>e.split(/(\s+|[^\w\s])/).filter(Boolean),r=n({text:e}),i=n({text:t}),a=r.length,o=i.length,s=new Uint32Array((a+1)*(o+1)),c=({i:e,j:t})=>e*(o+1)+t;for(let e=1;e<=a;e++)for(let t=1;t<=o;t++)if(r[e-1]===i[t-1])s[c({i:e,j:t})]=(s[c({i:e-1,j:t-1})]??0)+1;else{let n=s[c({i:e,j:t-1})]??0,r=s[c({i:e-1,j:t})]??0;s[c({i:e,j:t})]=n>=r?n:r}let l=[],u=a,d=o;for(;u>0||d>0;)u>0&&d>0&&r[u-1]===i[d-1]?(l.unshift({type:`unchanged`,value:r[u-1]}),u--,d--):d>0&&(u===0||(s[c({i:u,j:d-1})]??0)>=(s[c({i:u-1,j:d})]??0))?(l.unshift({type:`added`,value:i[d-1]}),d--):u>0&&(d===0||(s[c({i:u,j:d-1})]??0)<(s[c({i:u-1,j:d})]??0))&&(l.unshift({type:`removed`,value:r[u-1]}),u--);let f=[];for(let e of l){let t=f[f.length-1];t&&t.type===e.type?t.value+=e.value:f.push({...e})}return f}T({moduleId:`\0virtual:naidan-tailwind-css-module/4552eab03247926018c6560016a131063169cff633903e575500cbf844dc74bb.js`,fragments:[[344,`@layer utilities {
.-my-3 {
    margin-block: calc(var(--spacing) * -3);
  }
}
`],[621,`@layer utilities {
.min-w-\\[72px\\] {
    min-width: 72px;
  }
}
`],[881,`@layer utilities {
.border-green-500 {
    border-color: var(--color-green-500);
  }
}
`],[940,`@layer utilities {
.bg-blue-50\\/5 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 5%, transparent);
    }
  }
}
`],[1005,`@layer utilities {
.bg-green-50\\/5 {
    background-color: color-mix(in srgb, oklch(98.2% 0.018 155.826) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-50) 5%, transparent);
    }
  }
}
`],[1326,`@layer utilities {
.text-gray-700\\/80 {
    color: color-mix(in srgb, oklch(37.3% 0.034 259.733) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-gray-700) 80%, transparent);
    }
  }
}
`],[1335,`@layer utilities {
.text-green-700 {
    color: var(--color-green-700);
  }
.text-green-700\\/80 {
    color: color-mix(in srgb, oklch(52.7% 0.154 150.069) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-green-700) 80%, transparent);
    }
  }
}
`],[1369,`@layer utilities {
.text-red-700\\/80 {
    color: color-mix(in srgb, oklch(50.5% 0.213 27.518) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-red-700) 80%, transparent);
    }
  }
}
`],[1390,`@layer utilities {
.line-through {
    text-decoration-line: line-through;
  }
}
`],[1795,`@layer utilities {
.sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
}
`],[2046,`@layer utilities {
.dark\\:bg-blue-500\\/20 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-500) 20%, transparent);
      }
    }
  }
}
`],[2050,`@layer utilities {
.dark\\:bg-blue-900\\/5 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 5%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-900) 5%, transparent);
      }
    }
  }
}
`],[2103,`@layer utilities {
.dark\\:bg-green-900\\/5 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 5%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-green-900) 5%, transparent);
      }
    }
  }
}
`],[2107,`@layer utilities {
.dark\\:bg-green-900\\/40 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 40%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-green-900) 40%, transparent);
      }
    }
  }
}
`],[2204,`@layer utilities {
.dark\\:text-gray-400\\/80 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(70.7% 0.022 261.325) 80%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-gray-400) 80%, transparent);
      }
    }
  }
}
`],[2213,`@layer utilities {
.dark\\:text-green-400\\/80 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(79.2% 0.209 151.711) 80%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-green-400) 80%, transparent);
      }
    }
  }
}
`]]}),p(),_(),t(),f();var M={class:`modal-content-zoom bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col border border-gray-100 dark:border-gray-800 overflow-hidden`},N={class:`px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-between`},P={class:`flex items-center gap-4`},F={class:`p-2.5 bg-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20`},I={class:`text-base font-bold text-gray-800 dark:text-white tracking-tight`},L={class:`text-[11px] text-gray-500 dark:text-gray-400 font-medium`},R={class:`flex items-center gap-6`},z={class:`flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl`},B={class:`flex-1 overflow-y-auto bg-gray-50/30 dark:bg-black/10`},V={key:0,class:`animate-in fade-in slide-in-from-top-2 sticky top-0 z-20 p-6 bg-gray-50/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-blue-100 dark:border-blue-900/30 shadow-lg duration-300`},H={class:`bg-white dark:bg-gray-900 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-xl overflow-hidden flex flex-col max-h-[40vh]`},U={class:`px-5 py-2.5 border-b border-gray-50 dark:border-gray-800 bg-blue-50/30 dark:bg-blue-900/20 flex items-center justify-between`},de={class:`flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest`},fe={class:`text-blue-600 dark:text-blue-400`},pe={class:`text-green-600 dark:text-green-400`},me={class:`flex items-center gap-4`},he=[`title`],ge={class:`p-5 overflow-y-auto font-mono text-sm leading-relaxed whitespace-pre-wrap break-words dark:text-gray-200`},_e={key:0,class:`bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-sm px-0.5`},ve={key:1,class:`bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 line-through rounded-sm px-0.5`},ye={key:2,class:`text-gray-700 dark:text-gray-300`},be={class:`p-6 space-y-8`},xe={class:`px-5 py-3 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/30`},Se={class:`flex items-center gap-1.5 text-[10px] font-medium text-gray-400`},Ce={class:`flex items-center gap-2`},we={key:1,class:`flex items-center gap-1 bg-gray-100/50 dark:bg-black/20 p-0.5 rounded-lg`},Te=[`onClick`],Ee=[`onClick`],De=[`onClick`,`title`],Oe={class:`text-[9px] font-black uppercase tracking-widest`},ke=[`onClick`,`title`],Ae={key:0,class:`p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words dark:text-gray-300`},je={key:0,class:`bg-green-50/50 dark:bg-green-900/20 text-green-700/80 dark:text-green-400/80 rounded px-0.5`},Me={key:1,class:`bg-red-50/50 dark:bg-red-900/20 text-red-700/80 dark:text-red-400/80 line-through rounded px-0.5`},Ne={key:2,class:`text-gray-700/80 dark:text-gray-400/80`},Pe={key:0,class:`flex justify-center -my-3 relative z-10`},Fe={class:`bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 shadow-sm`},Ie={key:0,class:`text-[10px] font-bold text-gray-400 uppercase tracking-widest animate-pulse`},W=O(n({__name:`MessageDiffModal`,props:{isOpen:{type:Boolean},siblings:{},currentMessageId:{}},emits:[`close`],setup(t,{expose:n,emit:f}){let p=t,_=f,S=h(`visible`),w=h(void 0),T=h(void 0),O=h(new Set),W=h(10),G=h(null),K;function q(){typeof IntersectionObserver>`u`||(K&&K.disconnect(),K=new IntersectionObserver(e=>{e[0]?.isIntersecting&&W.value<p.siblings.length&&(W.value+=10)},{threshold:.1}),G.value&&K.observe(G.value))}d([()=>p.isOpen,G],([e,t])=>{e&&t?q():!e&&K&&(K.disconnect(),K=void 0,W.value=10)}),r(()=>{K&&K.disconnect()});let J=v(()=>p.siblings.map((e,t)=>({id:e.id,versionNumber:t+1,content:A({message:e}),modelId:e.modelId,timestamp:e.createdAt}))),Y=v(()=>{if(!w.value||!T.value)return null;let e=J.value.find(e=>e.id===w.value),t=J.value.find(e=>e.id===T.value);return!e||!t?null:{base:e,target:t,parts:j({oldText:e.content,newText:t.content})}}),X=h(void 0),Z=v(()=>{let e=[],t=[...p.siblings].reverse();for(let n=0;n<t.length;n++){let r=t[n];if(!r)continue;let i=O.value.has(r.id),a=[];if(n<W.value&&!i){let e=p.siblings.findIndex(e=>e.id===r.id),t;for(let n=e-1;n>=0;n--){let e=p.siblings[n];if(e&&!O.value.has(e.id)){t=e;break}}a=t?j({oldText:A({message:t}),newText:A({message:r})}):[{type:`unchanged`,value:A({message:r})}]}e.push({id:r.id,versionNumber:p.siblings.findIndex(e=>e.id===r.id)+1,timestamp:r.createdAt,modelId:r.modelId,content:A({message:r}),diffParts:a,isCurrent:r.id===p.currentMessageId,isSkipped:i})}return e});function Le({id:e}){let t=new Set(O.value);t.has(e)?t.delete(e):(t.add(e),w.value===e&&(w.value=void 0),T.value===e&&(T.value=void 0)),O.value=t}async function Q({id:e,content:t}){try{await navigator.clipboard.writeText(t),X.value=e,setTimeout(()=>{X.value===e&&(X.value=void 0)},2e3)}catch(e){console.error(`Failed to copy version content:`,e)}}function Re({timestamp:e}){return new Date(e).toLocaleString()}function $(){_(`close`)}function ze(){w.value=void 0,T.value=void 0}return n({}),(n,r)=>(l(),u(ne,{name:`modal`},{default:te(()=>[t.isOpen?(l(),a(`div`,{key:0,class:`fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6`,onClick:ee($,[`self`])},[x(`div`,M,[x(`div`,N,[x(`div`,P,[x(`div`,F,[s(o(ce),{class:`w-5 h-5 text-blue-500`})]),x(`div`,null,[x(`h2`,I,g(o(C).sE()),1),x(`p`,L,g(o(C).sH()),1)])]),x(`div`,R,[x(`div`,z,[x(`button`,{onClick:r[0]||=e=>S.value=`visible`,class:c([`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all`,S.value===`visible`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`])},g(o(C).sz()),3),x(`button`,{onClick:r[1]||=e=>S.value=`hidden`,class:c([`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all`,S.value===`hidden`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`])},g(o(C).sF()),3)]),x(`button`,{onClick:$,class:`p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors`},[s(o(ue),{class:`w-5 h-5`})])])]),x(`div`,B,[Y.value?(l(),a(`div`,V,[x(`div`,H,[x(`div`,U,[x(`div`,de,[x(`span`,fe,g(o(C).sv({a:Y.value.base.versionNumber})),1),s(o(E),{class:`w-3 h-3`}),x(`span`,pe,g(o(C).sK({a:Y.value.target.versionNumber})),1)]),x(`div`,me,[x(`button`,{onClick:ze,class:`flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors`,title:o(C).sG(),"data-testid":`reset-selection-button`},[s(o(le),{class:`w-3.5 h-3.5`}),x(`span`,null,g(o(C).sG()),1)],8,he),x(`button`,{onClick:r[2]||=e=>Q({id:Y.value.target.id,content:Y.value.target.content}),class:`flex items-center gap-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors`},[X.value===Y.value.target.id?(l(),u(o(k),{key:0,class:`w-3.5 h-3.5 text-green-500`})):(l(),u(o(D),{key:1,class:`w-3.5 h-3.5`})),x(`span`,null,g(o(C).sx()),1)])])]),x(`div`,ge,[S.value===`visible`?(l(!0),a(m,{key:0},i(Y.value.parts,(e,t)=>(l(),a(m,{key:t},[e.type===`added`?(l(),a(`span`,_e,g(e.value),1)):e.type===`removed`?(l(),a(`span`,ve,g(e.value),1)):(l(),a(`span`,ye,g(e.value),1))],64))),128)):(l(),a(m,{key:1},[y(g(Y.value.target.content),1)],64))])])])):b(``,!0),x(`div`,be,[(l(!0),a(m,null,i(Z.value.slice(0,W.value),(t,n)=>(l(),a(`div`,{key:o(e)({id:t.id}),class:`relative`},[x(`div`,{class:c([`bg-white dark:bg-gray-900 rounded-2xl border transition-all shadow-sm group/card`,t.isCurrent?`ring-2 ring-blue-500/10`:``,t.isSkipped?`bg-gray-50/30 dark:bg-gray-800/20 border-dashed border-gray-200 dark:border-gray-700`:w.value===t.id?`border-blue-500 bg-blue-50/5 dark:bg-blue-900/5`:T.value===t.id?`border-green-500 bg-green-50/5 dark:bg-green-900/5`:`border-gray-100 dark:border-gray-800`])},[x(`div`,xe,[x(`div`,{class:c([`flex items-center gap-3`,t.isSkipped?`opacity-40 grayscale`:``])},[x(`span`,{class:c([`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest`,t.isCurrent?`bg-blue-600 text-white`:`bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400`])},` v`+g(t.versionNumber),3),x(`div`,Se,[s(o(ie),{class:`w-3 h-3`}),y(` `+g(Re({timestamp:t.timestamp})),1)])],2),x(`div`,Ce,[t.modelId?(l(),a(`div`,{key:0,class:c([`hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-gray-400 tracking-widest mr-2`,t.isSkipped?`opacity-40 grayscale`:``])},[s(o(ae),{class:`w-3 h-3`}),y(` `+g(t.modelId),1)],2)):b(``,!0),t.isSkipped?b(``,!0):(l(),a(`div`,we,[x(`button`,{onClick:e=>w.value=w.value===t.id?void 0:t.id,class:c([`px-2 py-1 text-[9px] font-black uppercase tracking-tighter rounded transition-all`,w.value===t.id?`bg-blue-600 text-white`:`text-gray-400 hover:text-blue-600`])},g(o(C).su()),11,Te),x(`button`,{onClick:e=>T.value=T.value===t.id?void 0:t.id,class:c([`px-2 py-1 text-[9px] font-black uppercase tracking-tighter rounded transition-all`,T.value===t.id?`bg-green-600 text-white`:`text-gray-400 hover:text-green-600`])},g(o(C).sJ()),11,Ee)])),x(`button`,{onClick:e=>Le({id:t.id}),class:c([`min-w-[72px] p-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 px-2.5 shadow-sm`,t.isSkipped?`text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/20 ring-1 ring-blue-500/50`:`text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-gray-800 border border-transparent`]),title:t.isSkipped?o(C).sC():o(C).sA()},[t.isSkipped?(l(),u(o(se),{key:1,class:`w-3.5 h-3.5`})):(l(),u(o(oe),{key:0,class:`w-3.5 h-3.5`})),x(`span`,Oe,g(t.isSkipped?o(C).sB():o(C).sI()),1)],10,De),t.isSkipped?b(``,!0):(l(),a(`button`,{key:2,onClick:e=>Q({id:t.id,content:t.content}),class:`p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors`,title:X.value===t.id?o(C).sw():o(C).sy()},[X.value===t.id?(l(),u(o(k),{key:0,class:`w-3.5 h-3.5 text-green-500`})):(l(),u(o(D),{key:1,class:`w-3.5 h-3.5`}))],8,ke))])]),t.isSkipped?b(``,!0):(l(),a(`div`,Ae,[S.value===`visible`?(l(!0),a(m,{key:0},i(t.diffParts,(e,t)=>(l(),a(m,{key:t},[e.type===`added`?(l(),a(`span`,je,g(e.value),1)):e.type===`removed`?(l(),a(`span`,Me,g(e.value),1)):(l(),a(`span`,Ne,g(e.value),1))],64))),128)):(l(),a(m,{key:1},[y(g(t.content),1)],64))]))],2),n<W.value-1&&n<Z.value.length-1?(l(),a(`div`,Pe,[x(`div`,Fe,[s(o(re),{class:`w-4 h-4`})])])):b(``,!0)]))),128)),x(`div`,{ref_key:`loadMoreTrigger`,ref:G,class:`h-10 flex items-center justify-center`},[W.value<Z.value.length?(l(),a(`div`,Ie,g(o(C).sD()),1)):b(``,!0)],512)])])])])):b(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-a6e33530`]]);export{W as default};
//# sourceMappingURL=MessageDiffModal-3q3G1bsn.js.map