import{At as e,D as t,S as n,T as r,Ut as i,W as a,Wt as o,_ as s,b as c,i as l,j as u,mt as d,q as f,rt as p,s as m,st as h,t as g,v as _,x as v}from"./vue.runtime.esm-bundler-CbicM13T.js";import{t as y}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{t as b}from"./createLucideIcon-BJaUlhYa.js";import{P as x,j as S,k as C,mn as w}from"./app-DnBqaxXf.js";import"./0963f1f2efd282a3155bf2baaf9ccb2b9bcb9e9a0bfce29d1ec552f2fc67b37d-CmtvHT2H.js";var T=b(`history`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]);y({moduleId:`\0virtual:naidan-tailwind-css-module/93dc7e56132c8eac1356f78ac5a8d4e9e60cc2c1d2ea939c8487a235eddadc2d.js`,fragments:[[2305,`@layer utilities {
.dark\\:hover\\:bg-gray-700\\/50 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: color-mix(in srgb, oklch(37.3% 0.034 259.733) 50%, transparent);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--color-gray-700) 50%, transparent);
          }
        }
      }
    }
  }
}
`]]}),y({moduleId:`\0virtual:naidan-tailwind-css-module/c74ca54c575eb258aaea667312635d4e5b476e42ed9a834a0eb3f0176f3af711.js`,fragments:[[2083,`@layer utilities {
.dark\\:bg-gray-800\\/95 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(27.8% 0.033 256.848) 95%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-gray-800) 95%, transparent);
      }
    }
  }
}
`]]}),l(),h(),u(),e();var E=w(t({__name:`MessageActionsMenu`,props:{isOpen:{type:Boolean},triggerEl:{},width:{default:192}},emits:[`close`],setup(e,{expose:t,emit:l}){m(e=>({v5a30df38:E.value?`'scale(0.95) translateY(10px)'`:`'scale(0.95) translateY(-10px)'`}));let u=e,h=l,y=d(null),{width:b,height:w}=x(),T=S(()=>u.triggerEl),E=_(()=>{if(!u.triggerEl)return!1;let e=T.top.value;return e>w.value-T.bottom.value&&e>150}),D=_(()=>{if(!u.isOpen||!u.triggerEl)return{};let e=T,t=Math.max(0,Math.min(u.width||192,b.value-16)),n=e.right.value-t;n<8&&(n=8),n+t>b.value-8&&(n=Math.max(0,b.value-t-8));let r=E.value,i=Math.max(8,w.value-8),a=Math.min(i,Math.max(8,e.bottom.value+4)),o=Math.min(i,Math.max(8,w.value-e.top.value+4));return{position:`fixed`,left:`${n}px`,width:`${t}px`,maxHeight:`${Math.max(0,w.value-(r?o:a)-8)}px`,zIndex:9999,...r?{bottom:`${o}px`}:{top:`${a}px`}}});return C(y,e=>{u.triggerEl?.contains(e.target)||h(`close`)}),t({}),(t,l)=>(a(),c(s,{to:`body`},[r(g,{name:`dropdown`},{default:p(()=>[e.isOpen?(a(),n(`div`,{key:0,ref_key:`dropdownRef`,ref:y,class:i([`bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-100 dark:border-gray-700 rounded-xl shadow-2xl py-1 overflow-x-hidden overflow-y-auto overscroll-contain`,E.value?`origin-bottom-right`:`origin-top-right`]),style:o(D.value)},[f(t.$slots,`default`,{},void 0,!0)],6)):v(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-902047b9`]]);export{T as n,E as t};
//# sourceMappingURL=MessageActionsMenu-C41dVPoG.js.map