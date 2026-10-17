import{X as e,d as t,g as n}from"./privacy-fetch-broker/worker-transport-1jpiQ9uS.js";import{_t as r,j as i,mt as a,st as o,v as s}from"./vue.runtime.esm-bundler-CbicM13T.js";import{t as c}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{r as l}from"./id-C-7ZtHvq.js";import{F as u,M as d,N as f,P as p}from"./index-hosted-CPF9Tqej.js";import{t as m}from"./createLucideIcon-BJaUlhYa.js";import{st as h}from"./app-DnBqaxXf.js";var g=m(`library-big`,[[`rect`,{width:`8`,height:`18`,x:`3`,y:`3`,rx:`1`,key:`oynpb5`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z`,key:`1qboyk`}]]);i(),o();var _=e(e=>typeof e==`function`);function v({blocked:e,stopDownload:i,changed:o,failed:c}){let{settings:m,updateExperimental:g}=h(),v=s(()=>typeof window<`u`&&_.safeParse(Reflect.get(window,`showDirectoryPicker`)).success&&typeof indexedDB<`u`&&typeof navigator.locks?.request==`function`),y=a(!1),b=a(`opfs`),x=r(new Map),S=new Map;function C(){return(m.value.experimental?.hostModelDirectories??[]).map(({id:e,name:n})=>({id:t({id:e}),name:n}))}let w=s(()=>C().map(e=>({...e,...v.value?x.value.get(e.id)??{access:`prompt`,error:void 0}:{access:`unsupported`,error:void 0}}))),T=0;async function E(){let e=++T,t=new Map,r=new Map;if(v.value){for(let e of C())try{let i=await u.get({id:n({raw:e.id})});if(!i){t.set(e.id,{access:`missing`,error:void 0});continue}r.set(e.id,i);let a=f({permission:await i.queryPermission({mode:`readwrite`})}),o=a||f({permission:await i.queryPermission({mode:`read`})});t.set(e.id,{access:a?`readwrite`:o?`read`:`prompt`,error:void 0})}catch(n){t.set(e.id,{access:`error`,error:n instanceof Error?n.message:String(n)})}if(e===T){S.clear();for(let[e,t]of r)S.set(e,t);x.value=t}}}async function D({operation:t}){if(!(!v.value||e()||y.value)){y.value=!0;try{await t(),await E(),await o()}catch(e){e instanceof DOMException&&e.name===`AbortError`||c({error:e})}finally{y.value=!1}}}async function O({existingId:e}){let t=await _.parse(Reflect.get(window,`showDirectoryPicker`)).call(window,{mode:`readwrite`});if(!f({permission:await t.queryPermission({mode:`readwrite`})}))throw Error(`Model directory needs read and write permission`);for(let r of C()){if(r.id===e)continue;let i=await u.get({id:n({raw:r.id})});if(i&&await i.isSameEntry(t))throw Error(`This model directory is already registered`)}let r=n({raw:e??l()});await navigator.locks.request(d({id:r}),async()=>{let n=await u.get({id:r});await u.put({id:r,handle:t});try{await g({updater:({experimental:n})=>{let i=n?.hostModelDirectories??[];if(e&&!i.some(e=>e.id===r))throw Error(`Model directory registration was removed`);return{...n,hostModelDirectories:e?i.map(e=>e.id===r?{id:r,name:t.name}:e):[...i,{id:r,name:t.name}]}}})}catch(e){throw n?await u.put({id:r,handle:n}):await u.delete({id:r}),e}})}async function k({id:e}){await D({operation:async()=>{let t=S.get(e);if(t){if(!f({permission:await t.requestPermission({mode:`readwrite`})}))throw Error(`Model directory needs read and write permission`)}else await O({existingId:e})}})}async function A({id:e}){await D({operation:async()=>{await i({id:e});let t=n({raw:e}),r;await p({id:t,save:async()=>{await g({updater:({experimental:e})=>{let n=e?.hostModelDirectories??[];return r=n.find(e=>e.id===t),{...e,hostModelDirectories:n.filter(e=>e.id!==t)}}})},restore:async()=>{await g({updater:({experimental:e})=>{let n=e?.hostModelDirectories??[];return{...e,hostModelDirectories:r&&!n.some(e=>e.id===t)?[...n,r]:n}}})}})}})}async function j({id:e}){return e===`opfs`?{kind:`opfs`}:M({id:e})}async function M({id:e}){if(!v.value||!C().some(t=>t.id===e))throw Error(`Linked model directory is unavailable`);let t=S.get(e);if(!t)throw Error(`Reconnect this model directory before downloading`);if(!f({permission:await t.requestPermission({mode:`readwrite`})}))throw Error(`Model directory needs read and write permission`);return{kind:`host`,directoryId:e}}return{registrations:C,refresh:E,currentHandle:({id:e})=>S.get(e),downloadDestination:j,hostDownloadDestination:M,view:{supported:v,entries:w,busy:y,destination:b,async add(){await D({operation:()=>O({existingId:void 0})})},reconnect:k,remove:A,selectDestination({id:e}){y.value||(e===`opfs`||v.value&&C().some(t=>t.id===e))&&(b.value=e)}}}}c({moduleId:`\0virtual:naidan-tailwind-css-module/868db3632c2021d8ed20df6281b98bfcd8815459420b135d4dfd203a8a04d9c0.js`,fragments:[[1186,`@layer utilities {
.pr-5 {
    padding-right: calc(var(--spacing) * 5);
  }
}
`],[1210,`@layer utilities {
.pl-1\\.5 {
    padding-left: calc(var(--spacing) * 1.5);
  }
}
`],[1764,`@layer utilities {
.enabled\\:hover\\:border-gray-200 {
    &:enabled {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-gray-200);
        }
      }
    }
  }
}
`],[2351,`@layer utilities {
.dark\\:enabled\\:hover\\:border-gray-700 {
    &:where(.dark, .dark *) {
      &:enabled {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-gray-700);
          }
        }
      }
    }
  }
}
`]]});export{g as n,v as t};
//# sourceMappingURL=868db3632c2021d8ed20df6281b98bfcd8815459420b135d4dfd203a8a04d9c0-DnevdR3T.js.map