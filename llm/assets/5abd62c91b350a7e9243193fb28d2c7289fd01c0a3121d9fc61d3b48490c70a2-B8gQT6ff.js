import{At as e,D as t,S as n,St as r,T as i,Ut as a,W as o,et as s,i as c,it as l,j as u,mt as d,qt as f,st as p,u as m,v as h,w as g,y as _}from"./vue.runtime.esm-bundler-CbicM13T.js";import{t as v}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";import{t as y}from"./message-square-quote-DDMITnvk.js";import"./app-DnBqaxXf.js";var b=Object.freeze(Object.keys({endpoint:!0,model_id:!0,title_generation:!0,system_prompt:!0,lm_param_temperature:!0,lm_param_top_p:!0,lm_param_max_completion_tokens:!0,lm_param_presence_penalty:!0,lm_param_frequency_penalty:!0,lm_param_stop:!0,lm_param_reasoning_effort:!0}));function x({systemPrompt:e}){if(e===void 0)return`parent`;switch(e.behavior){case`override`:return e.content===null?`no_prompt`:`replace`;case`append`:return`append`;default:throw Error(`Unhandled system prompt behavior: ${String(e)}`)}}u(),p(),e(),c();var S={class:`space-y-4`},C={class:`flex items-center justify-between gap-3`},w={class:`text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2`},T={class:`flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg`},E=[`data-testid`],D=[`data-testid`],O=[`data-testid`],k=[`data-testid`],A=[`data-testid`],j=[`rows`,`placeholder`,`data-testid`],M=t({__name:`SystemPromptSettingsEditor`,props:{modelValue:{},title:{},parentModeLabel:{},noPromptModeLabel:{},replaceModeLabel:{},appendModeLabel:{},parentPromptText:{},parentPromptSetCaption:{},parentPromptNotSetCaption:{},noPromptCaption:{},replaceCaption:{},appendCaption:{},typeToReplacePlaceholder:{},replacePlaceholder:{},appendPlaceholder:{},resetKey:{},testIdPrefix:{},rows:{}},emits:[`update:modelValue`,`save`],setup(e,{expose:t,emit:c}){let u=e,p=c,v=d(void 0),b=h(()=>x({systemPrompt:u.modelValue}));function M({systemPrompt:e}){if(e===void 0){v.value=void 0;return}switch(e.behavior){case`override`:v.value=e.content??void 0;return;case`append`:v.value=e.content;return;default:throw Error(`Unhandled system prompt behavior: ${String(e)}`)}}s(()=>u.resetKey,()=>M({systemPrompt:u.modelValue}),{immediate:!0});function N(){switch(b.value){case`parent`:return u.parentPromptText;case`no_prompt`:return``;case`replace`:case`append`:return v.value??``;default:{let e=b.value;throw Error(`Unhandled system prompt UI mode: ${e}`)}}}function P({content:e}){switch(v.value=e,b.value){case`parent`:case`no_prompt`:case`replace`:p(`update:modelValue`,{behavior:`override`,content:e});return;case`append`:p(`update:modelValue`,{behavior:`append`,content:e});return;default:{let e=b.value;throw Error(`Unhandled system prompt UI mode: ${e}`)}}}let F=h({get:N,set:e=>P({content:e})}),I=h(()=>{switch(b.value){case`parent`:return u.parentPromptText?u.parentPromptSetCaption:u.parentPromptNotSetCaption;case`no_prompt`:return u.noPromptCaption;case`replace`:return u.replaceCaption;case`append`:return u.appendCaption;default:{let e=b.value;throw Error(`Unhandled system prompt UI mode: ${e}`)}}}),L=h(()=>{switch(b.value){case`parent`:case`no_prompt`:return u.typeToReplacePlaceholder;case`replace`:return u.replacePlaceholder;case`append`:return u.appendPlaceholder;default:{let e=b.value;throw Error(`Unhandled system prompt UI mode: ${e}`)}}});function R({nextMode:e}){switch(e){case`parent`:p(`update:modelValue`,void 0);break;case`no_prompt`:p(`update:modelValue`,{behavior:`override`,content:null});break;case`replace`:{let e=v.value??u.parentPromptText;v.value=e,p(`update:modelValue`,{behavior:`override`,content:e});break}case`append`:{let e=v.value??``;v.value=e,p(`update:modelValue`,{behavior:`append`,content:e});break}default:throw Error(`Unhandled system prompt UI mode: ${e}`)}p(`save`)}return t({}),(t,s)=>(o(),n(`div`,S,[_(`div`,C,[_(`label`,w,[i(r(y),{class:`w-3 h-3`}),g(` `+f(e.title),1)]),_(`div`,T,[_(`button`,{onClick:s[0]||=e=>R({nextMode:`parent`}),class:a([`px-2 py-0.5 text-[9px] font-bold rounded transition-all`,b.value===`parent`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`]),"data-testid":`${e.testIdPrefix}-parent-button`},f(e.parentModeLabel),11,E),_(`button`,{onClick:s[1]||=e=>R({nextMode:`no_prompt`}),class:a([`px-2 py-0.5 text-[9px] font-bold rounded transition-all`,b.value===`no_prompt`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`]),"data-testid":`${e.testIdPrefix}-no-prompt-button`},f(e.noPromptModeLabel),11,D),_(`button`,{onClick:s[2]||=e=>R({nextMode:`replace`}),class:a([`px-2 py-0.5 text-[9px] font-bold rounded transition-all`,b.value===`replace`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`]),"data-testid":`${e.testIdPrefix}-replace-button`},f(e.replaceModeLabel),11,O),_(`button`,{onClick:s[3]||=e=>R({nextMode:`append`}),class:a([`px-2 py-0.5 text-[9px] font-bold rounded transition-all`,b.value===`append`?`bg-white dark:bg-gray-700 text-blue-600 shadow-sm`:`text-gray-400 hover:text-gray-600`]),"data-testid":`${e.testIdPrefix}-append-button`},f(e.appendModeLabel),11,k)])]),_(`p`,{class:`text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1`,"data-testid":`${e.testIdPrefix}-caption`},f(I.value),9,A),l(_(`textarea`,{"onUpdate:modelValue":s[4]||=e=>F.value=e,onBlur:s[5]||=e=>p(`save`),rows:e.rows,class:`w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white shadow-sm resize-none`,placeholder:L.value,"data-testid":`${e.testIdPrefix}-textarea`},null,40,j),[[m,F.value]])]))}});v({moduleId:`\0virtual:naidan-tailwind-css-module/5abd62c91b350a7e9243193fb28d2c7289fd01c0a3121d9fc61d3b48490c70a2.js`,fragments:[[962,`@layer utilities {
.bg-blue-600\\/10 {
    background-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-600) 10%, transparent);
    }
  }
}
`],[1306,`@layer utilities {
.text-blue-900\\/70 {
    color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-900) 70%, transparent);
    }
  }
}
`],[1323,`@layer utilities {
.text-gray-500\\/70 {
    color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-gray-500) 70%, transparent);
    }
  }
}
`],[1876,`@layer utilities {
.md\\:max-w-\\[240px\\] {
    @media (width >= 48rem) {
      max-width: 240px;
    }
  }
}
`],[1882,`@layer utilities {
.md\\:items-end {
    @media (width >= 48rem) {
      align-items: flex-end;
    }
  }
}
`],[2203,`@layer utilities {
.dark\\:text-gray-400\\/70 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(70.7% 0.022 261.325) 70%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-gray-400) 70%, transparent);
      }
    }
  }
}
`]]});export{x as n,b as r,M as t};
//# sourceMappingURL=5abd62c91b350a7e9243193fb28d2c7289fd01c0a3121d9fc61d3b48490c70a2-B8gQT6ff.js.map