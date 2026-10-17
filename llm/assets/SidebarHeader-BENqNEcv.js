import{At as e,D as t,S as n,St as r,T as i,Ut as a,W as o,b as s,j as c,q as l,qt as u,rt as d,st as f,x as p,y as m}from"./vue.runtime.esm-bundler-CbicM13T.js";import{a as h,r as g}from"./strings-CNSnmhhc.js";import{t as _}from"./preload-helper-DYl5dUZ5.js";import{t as v}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{t as y}from"./createLucideIcon-BJaUlhYa.js";import{I as b,rn as x}from"./app-DnBqaxXf.js";import"./a3154efa0826671513284a5b182b5e25f12969f3af47466221c301c35ccf6385-CJJfVU-k.js";var S=y(`panel-left`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]]),C=y(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]);h({boundaryId:`f4a9a9ade09b98f7`,keys:[`Ab`,`Am`],loaders:{en:()=>_(()=>import(`./88eb1c65ed22fbae-BiTdGVWO.js`).then(e=>e.default),[],import.meta.url),ja:()=>_(()=>import(`./88eb1c65ed22fbae-CsvfftTu.js`).then(e=>e.default),[],import.meta.url),"zh-Hans":()=>_(()=>import(`./88eb1c65ed22fbae-BMSd_9yB.js`).then(e=>e.default),[],import.meta.url),"pt-BR":()=>_(()=>import(`./88eb1c65ed22fbae-CP6AMJ15.js`).then(e=>e.default),[],import.meta.url),es:()=>_(()=>import(`./88eb1c65ed22fbae-Blujy1cS.js`).then(e=>e.default),[],import.meta.url),ko:()=>_(()=>import(`./88eb1c65ed22fbae-DJAQrFNj.js`).then(e=>e.default),[],import.meta.url),de:()=>_(()=>import(`./88eb1c65ed22fbae-Csl1RAvm.js`).then(e=>e.default),[],import.meta.url)}}),v({moduleId:`\0virtual:naidan-tailwind-css-module/3cb2519bbd492ef45715ecdaba2495d2819d04135423e20377690044a3648fee.js`,fragments:[[1084,`@layer utilities {
.from-gray-800 {
    --tw-gradient-from: var(--color-gray-800);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
}
`],[1105,`@layer utilities {
.to-gray-500 {
    --tw-gradient-to: var(--color-gray-500);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
}
`],[1180,`@layer utilities {
.pt-\\[calc\\(0\\.5rem\\+env\\(safe-area-inset-top\\)\\)\\] {
    padding-top: calc(0.5rem + env(safe-area-inset-top));
  }
}
`],[1704,`@layer utilities {
.hover\\:opacity-80 {
    &:hover {
      @media (hover: hover) {
        opacity: 80%;
      }
    }
  }
}
`],[2163,`@layer utilities {
.dark\\:from-white {
    &:where(.dark, .dark *) {
      --tw-gradient-from: var(--color-white);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
}
`],[2171,`@layer utilities {
.dark\\:to-gray-400 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-gray-400);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
}
`]]}),c(),f(),e();var w={class:`p-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 shrink-0`},T={class:`animate-in fade-in flex items-baseline gap-1.5 duration-300`},E={class:`flex items-center gap-1`},D={class:`text-[10px] font-medium text-gray-400 dark:text-gray-500`},O=[`title`,`aria-label`],k=t({__name:`SidebarHeader`,props:{expanded:{type:Boolean}},emits:[`toggle`],setup(e,{expose:t,emit:c}){let f=c;return t({}),(t,c)=>(o(),n(`div`,{class:a([`pt-[calc(0.5rem+env(safe-area-inset-top))] pb-2 flex items-center overflow-hidden`,e.expanded?`justify-between px-4`:`justify-center px-1`]),"data-testid":`sidebar-brand`},[e.expanded?(o(),s(r(x),{key:0,to:`/`,class:`flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden`},{default:d(()=>[m(`div`,w,[i(b,{size:20})]),m(`div`,T,[c[1]||=m(`h1`,{class:`text-lg font-bold tracking-tight bg-gradient-to-br from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent`},`Naidan`,-1),m(`div`,E,[m(`span`,D,`v`+u(r(`0.55.0`)),1),l(t.$slots,`status`)])])]),_:3})):p(``,!0),m(`button`,{type:`button`,onClick:c[0]||=e=>f(`toggle`),title:e.expanded?r(g).Ab():r(g).Am(),"aria-label":e.expanded?r(g).Ab():r(g).Am(),"data-testid":`sidebar-toggle`,class:`p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`},[i(r(S),{class:`w-5 h-5`})],8,O)],2))}});export{C as n,k as t};
//# sourceMappingURL=SidebarHeader-BENqNEcv.js.map