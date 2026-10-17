import{j as e,mt as t,st as n,v as r}from"./vue.runtime.esm-bundler-CbicM13T.js";import{t as i}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";e(),n();function a(){let e=t(`none`),n=t(!1),i=r({get:()=>e.value===`chat`,set:t=>{if(t){e.value=`chat`;return}switch(e.value){case`chat`:e.value=`none`;break;case`none`:case`chat_history`:break;default:{let t=e.value;throw Error(`Unhandled chat exclusion: ${t}`)}}}}),a=r(()=>e.value===`chat`),o=r({get:()=>e.value===`chat_history`,set:t=>{if(t){a.value||(e.value=`chat_history`);return}switch(e.value){case`chat_history`:e.value=`none`;break;case`none`:case`chat`:break;default:{let t=e.value;throw Error(`Unhandled chat exclusion: ${t}`)}}}});function s(){switch(e.value){case`none`:return n.value?[`binary_object`]:[];case`chat`:return n.value?[`chat`,`binary_object`]:[`chat`];case`chat_history`:return n.value?[`chat_history`,`binary_object`]:[`chat_history`];default:{let t=e.value;throw Error(`Unhandled chat exclusion: ${t}`)}}}function c(){e.value=`none`,n.value=!1}return{excludeChats:i,excludeChatHistory:o,excludeAttachments:n,excludeChatHistoryDisabled:a,buildExcludeList:s,reset:c}}i({moduleId:`\0virtual:naidan-tailwind-css-module/2ff2f578252ec0be87811115c82921cfc180489b652ec9987030ee0d79d2811c.js`,fragments:[[1036,`@layer utilities {
.bg-red-50\\/30 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 30%, transparent);
    }
  }
}
`],[1366,`@layer utilities {
.text-red-600\\/70 {
    color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-red-600) 70%, transparent);
    }
  }
}
`],[1448,`@layer utilities {
.shadow-red-500\\/20 {
    --tw-shadow-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 20%, transparent) var(--tw-shadow-alpha), transparent);
    }
  }
}
`],[2129,`@layer utilities {
.dark\\:bg-red-900\\/5 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 5%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 5%, transparent);
      }
    }
  }
}
`],[2236,`@layer utilities {
.dark\\:text-red-400\\/60 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(70.4% 0.191 22.216) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-red-400) 60%, transparent);
      }
    }
  }
}
`]]});export{a as t};
//# sourceMappingURL=2ff2f578252ec0be87811115c82921cfc180489b652ec9987030ee0d79d2811c-D5mlkKb9.js.map