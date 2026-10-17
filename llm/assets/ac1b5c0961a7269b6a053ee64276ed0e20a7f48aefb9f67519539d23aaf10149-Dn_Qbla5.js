var e=function({document:e,scheduleFlush:t}){let n=new Map,r=0,i=!1,a;function o({style:t}){return e.head.firstElementChild!==t&&e.head.prepend(t),t}function s(){let t=[...e.head.querySelectorAll(`style[data-naidan-tailwind-runtime]`)],n=a?.isConnected===!0?a:t[0];for(let e of t)e!==n&&e.remove();if(n!==void 0)return a=n,o({style:a});let r=e.createElement(`style`);return r.setAttribute(`data-naidan-tailwind-runtime`,``),a=r,o({style:a})}function c(){i=!1;let e=new Map;for(let[t,{fragments:r,version:i}]of n)for(let[n,a]of r){let r=e.get(n);(r===void 0||r.version<i||r.version===i&&r.moduleId<t)&&e.set(n,{moduleId:t,order:n,css:a,version:i})}let t=[...e.values()].sort((e,t)=>e.order-t.order||(e.moduleId<t.moduleId?-1:+(e.moduleId>t.moduleId))).map(({css:e})=>e).join(`
`),r=s();r.textContent!==t&&(r.textContent=t)}function l(){i||(i=!0,t({callback:c}))}return{register({moduleId:e,fragments:t}){let i=t.map(([e,t])=>[e,t]),a=new Set;for(let[t,n]of i){if(!Number.isInteger(t)||t<0||typeof n!=`string`)throw TypeError(`Invalid static Tailwind CSS fragment in ${e}.`);if(a.has(t))throw Error(`Duplicate static Tailwind CSS fragment order ${t} in ${e}.`);a.add(t)}let o=n.get(e);if(o!==void 0&&o.fragments.length===i.length&&o.fragments.every(([e,t],n)=>i[n]?.[0]===e&&i[n]?.[1]===t)){let t=[...n.entries()].some(([t,n])=>t!==e&&o.version<n.version&&n.fragments.some(([e])=>a.has(e)));r+=1,n.set(e,{fragments:i,version:r}),t&&l();return}r+=1,n.set(e,{fragments:i,version:r}),l()},unregister({moduleId:e}){n.delete(e)&&l()},flush:c}},t=`__NAIDAN_STATIC_TAILWIND_CSS_RUNTIME_V1__`;function n(){return typeof document>`u`?{register(){},unregister(){},flush(){}}:e({document,scheduleFlush:({callback:e})=>{typeof queueMicrotask==`function`?queueMicrotask(e):Promise.resolve().then(e)}})}var r=globalThis[t]??=n();function i({moduleId:e,fragments:t}){r.register({moduleId:e,fragments:t})}i({moduleId:`\0virtual:naidan-tailwind-css-module/ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149.js`,fragments:[[0,`/*! tailwindcss v4.3.2 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
:root, :host {
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
--color-red-50: oklch(97.1% 0.013 17.38);
--color-red-100: oklch(93.6% 0.032 17.717);
--color-red-200: oklch(88.5% 0.062 18.334);
--color-red-300: oklch(80.8% 0.114 19.571);
--color-red-400: oklch(70.4% 0.191 22.216);
--color-red-500: oklch(63.7% 0.237 25.331);
--color-red-600: oklch(57.7% 0.245 27.325);
--color-red-700: oklch(50.5% 0.213 27.518);
--color-red-800: oklch(44.4% 0.177 26.899);
--color-red-900: oklch(39.6% 0.141 25.723);
--color-red-950: oklch(25.8% 0.092 26.042);
--color-orange-50: oklch(98% 0.016 73.684);
--color-orange-100: oklch(95.4% 0.038 75.164);
--color-orange-200: oklch(90.1% 0.076 70.697);
--color-orange-400: oklch(75% 0.183 55.934);
--color-orange-500: oklch(70.5% 0.213 47.604);
--color-orange-800: oklch(47% 0.157 37.304);
--color-orange-900: oklch(40.8% 0.123 38.172);
--color-amber-50: oklch(98.7% 0.022 95.277);
--color-amber-100: oklch(96.2% 0.059 95.617);
--color-amber-200: oklch(92.4% 0.12 95.746);
--color-amber-300: oklch(87.9% 0.169 91.605);
--color-amber-400: oklch(82.8% 0.189 84.429);
--color-amber-500: oklch(76.9% 0.188 70.08);
--color-amber-600: oklch(66.6% 0.179 58.318);
--color-amber-700: oklch(55.5% 0.163 48.998);
--color-amber-800: oklch(47.3% 0.137 46.201);
--color-amber-900: oklch(41.4% 0.112 45.904);
--color-amber-950: oklch(27.9% 0.077 45.635);
--color-yellow-50: oklch(98.7% 0.026 102.212);
--color-yellow-200: oklch(94.5% 0.129 101.54);
--color-yellow-300: oklch(90.5% 0.182 98.111);
--color-yellow-400: oklch(85.2% 0.199 91.936);
--color-yellow-500: oklch(79.5% 0.184 86.047);
--color-yellow-900: oklch(42.1% 0.095 57.708);
--color-green-50: oklch(98.2% 0.018 155.826);
--color-green-100: oklch(96.2% 0.044 156.743);
--color-green-200: oklch(92.5% 0.084 155.995);
--color-green-300: oklch(87.1% 0.15 154.449);
--color-green-400: oklch(79.2% 0.209 151.711);
--color-green-500: oklch(72.3% 0.219 149.579);
--color-green-600: oklch(62.7% 0.194 149.214);
--color-green-700: oklch(52.7% 0.154 150.069);
--color-green-800: oklch(44.8% 0.119 151.328);
--color-green-900: oklch(39.3% 0.095 152.535);
--color-emerald-50: oklch(97.9% 0.021 166.113);
--color-emerald-100: oklch(95% 0.052 163.051);
--color-emerald-200: oklch(90.5% 0.093 164.15);
--color-emerald-300: oklch(84.5% 0.143 164.978);
--color-emerald-400: oklch(76.5% 0.177 163.223);
--color-emerald-500: oklch(69.6% 0.17 162.48);
--color-emerald-600: oklch(59.6% 0.145 163.225);
--color-emerald-700: oklch(50.8% 0.118 165.612);
--color-emerald-800: oklch(43.2% 0.095 166.913);
--color-emerald-900: oklch(37.8% 0.077 168.94);
--color-emerald-950: oklch(26.2% 0.051 172.552);
--color-teal-300: oklch(85.5% 0.138 181.071);
--color-teal-400: oklch(77.7% 0.152 181.912);
--color-teal-500: oklch(70.4% 0.14 182.503);
--color-cyan-50: oklch(98.4% 0.019 200.873);
--color-cyan-200: oklch(91.7% 0.08 205.041);
--color-cyan-300: oklch(86.5% 0.127 207.078);
--color-cyan-500: oklch(71.5% 0.143 215.221);
--color-cyan-600: oklch(60.9% 0.126 221.723);
--color-cyan-700: oklch(52% 0.105 223.128);
--color-cyan-800: oklch(45% 0.085 224.283);
--color-cyan-900: oklch(39.8% 0.07 227.392);
--color-sky-50: oklch(97.7% 0.013 236.62);
--color-sky-400: oklch(74.6% 0.16 232.661);
--color-sky-950: oklch(29.3% 0.066 243.157);
--color-blue-50: oklch(97% 0.014 254.604);
--color-blue-100: oklch(93.2% 0.032 255.585);
--color-blue-200: oklch(88.2% 0.059 254.128);
--color-blue-300: oklch(80.9% 0.105 251.813);
--color-blue-400: oklch(70.7% 0.165 254.624);
--color-blue-500: oklch(62.3% 0.214 259.815);
--color-blue-600: oklch(54.6% 0.245 262.881);
--color-blue-700: oklch(48.8% 0.243 264.376);
--color-blue-800: oklch(42.4% 0.199 265.638);
--color-blue-900: oklch(37.9% 0.146 265.522);
--color-blue-950: oklch(28.2% 0.091 267.935);
--color-indigo-50: oklch(96.2% 0.018 272.314);
--color-indigo-100: oklch(93% 0.034 272.788);
--color-indigo-200: oklch(87% 0.065 274.039);
--color-indigo-300: oklch(78.5% 0.115 274.713);
--color-indigo-400: oklch(67.3% 0.182 276.935);
--color-indigo-500: oklch(58.5% 0.233 277.117);
--color-indigo-600: oklch(51.1% 0.262 276.966);
--color-indigo-700: oklch(45.7% 0.24 277.023);
--color-indigo-800: oklch(39.8% 0.195 277.366);
--color-indigo-900: oklch(35.9% 0.144 278.697);
--color-indigo-950: oklch(25.7% 0.09 281.288);
--color-violet-50: oklch(96.9% 0.016 293.756);
--color-violet-100: oklch(94.3% 0.029 294.588);
--color-violet-200: oklch(89.4% 0.057 293.283);
--color-violet-300: oklch(81.1% 0.111 293.571);
--color-violet-400: oklch(70.2% 0.183 293.541);
--color-violet-500: oklch(60.6% 0.25 292.717);
--color-violet-600: oklch(54.1% 0.281 293.009);
--color-violet-700: oklch(49.1% 0.27 292.581);
--color-violet-800: oklch(43.2% 0.232 292.759);
--color-violet-900: oklch(38% 0.189 293.745);
--color-violet-950: oklch(28.3% 0.141 291.089);
--color-purple-50: oklch(97.7% 0.014 308.299);
--color-purple-100: oklch(94.6% 0.033 307.174);
--color-purple-200: oklch(90.2% 0.063 306.703);
--color-purple-300: oklch(82.7% 0.119 306.383);
--color-purple-400: oklch(71.4% 0.203 305.504);
--color-purple-500: oklch(62.7% 0.265 303.9);
--color-purple-600: oklch(55.8% 0.288 302.321);
--color-purple-700: oklch(49.6% 0.265 301.924);
--color-purple-800: oklch(43.8% 0.218 303.724);
--color-purple-900: oklch(38.1% 0.176 304.987);
--color-fuchsia-500: oklch(66.7% 0.295 322.15);
--color-pink-300: oklch(82.3% 0.12 346.018);
--color-pink-500: oklch(65.6% 0.241 354.308);
--color-rose-50: oklch(96.9% 0.015 12.422);
--color-rose-300: oklch(81% 0.117 11.638);
--color-rose-400: oklch(71.2% 0.194 13.428);
--color-rose-500: oklch(64.5% 0.246 16.439);
--color-rose-600: oklch(58.6% 0.253 17.585);
--color-rose-700: oklch(51.4% 0.222 16.935);
--color-rose-950: oklch(27.1% 0.105 12.094);
--color-slate-900: oklch(20.8% 0.042 265.755);
--color-slate-950: oklch(12.9% 0.042 264.695);
--color-gray-50: oklch(98.5% 0.002 247.839);
--color-gray-100: oklch(96.7% 0.003 264.542);
--color-gray-200: oklch(92.8% 0.006 264.531);
--color-gray-300: oklch(87.2% 0.01 258.338);
--color-gray-400: oklch(70.7% 0.022 261.325);
--color-gray-500: oklch(55.1% 0.027 264.364);
--color-gray-600: oklch(44.6% 0.03 256.802);
--color-gray-700: oklch(37.3% 0.034 259.733);
--color-gray-800: oklch(27.8% 0.033 256.848);
--color-gray-900: oklch(21% 0.034 264.665);
--color-gray-950: oklch(13% 0.028 261.692);
--color-black: #000;
--color-white: #fff;
--spacing: 0.25rem;
--container-sm: 24rem;
--container-md: 28rem;
--container-lg: 32rem;
--container-xl: 36rem;
--container-2xl: 42rem;
--container-3xl: 48rem;
--container-4xl: 56rem;
--container-5xl: 64rem;
--container-6xl: 72rem;
--container-7xl: 80rem;
--text-xs: 0.75rem;
--text-xs--line-height: calc(1 / 0.75);
--text-sm: 0.875rem;
--text-sm--line-height: calc(1.25 / 0.875);
--text-base: 1rem;
--text-base--line-height: calc(1.5 / 1);
--text-lg: 1.125rem;
--text-lg--line-height: calc(1.75 / 1.125);
--text-xl: 1.25rem;
--text-xl--line-height: calc(1.75 / 1.25);
--text-2xl: 1.5rem;
--text-2xl--line-height: calc(2 / 1.5);
--text-3xl: 1.875rem;
--text-3xl--line-height: calc(2.25 / 1.875);
--text-4xl: 2.25rem;
--text-4xl--line-height: calc(2.5 / 2.25);
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-relaxed: 1.625;
--radius-sm: 0.25rem;
--radius-md: 0.375rem;
--radius-lg: 0.5rem;
--radius-xl: 0.75rem;
--radius-2xl: 1rem;
--radius-3xl: 1.5rem;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--animate-spin: spin 1s linear infinite;
--animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
--animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
--animate-bounce: bounce 1s infinite;
--blur-sm: 8px;
--blur-md: 12px;
--blur-xl: 24px;
--blur-2xl: 40px;
--default-transition-duration: 150ms;
--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
--default-font-family: var(--font-sans);
--default-mono-font-family: var(--font-mono);
}
}
@layer base {
*, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
b, strong {
    font-weight: bolder;
  }
code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
small {
    font-size: 80%;
  }
sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
sub {
    bottom: -0.25em;
  }
sup {
    top: -0.5em;
  }
table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
:-moz-focusring {
    outline: auto;
  }
progress {
    vertical-align: baseline;
  }
summary {
    display: list-item;
  }
ol, ul, menu {
    list-style: none;
  }
img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
img, video {
    max-width: 100%;
    height: auto;
  }
button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
:where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
:where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
::file-selector-button {
    margin-inline-end: 4px;
  }
::-moz-placeholder {
    opacity: 1;
  }
::placeholder {
    opacity: 1;
  }
@supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
textarea {
    resize: vertical;
  }
::-webkit-search-decoration {
    -webkit-appearance: none;
  }
::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
::-webkit-datetime-edit {
    display: inline-flex;
  }
::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
:-moz-ui-invalid {
    box-shadow: none;
  }
button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
[hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
`],[244,`@layer utilities {
.pointer-events-auto {
    pointer-events: auto;
  }
.pointer-events-none {
    pointer-events: none;
  }
.invisible {
    visibility: hidden;
  }
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
.absolute {
    position: absolute;
  }
.fixed {
    position: fixed;
  }
.relative {
    position: relative;
  }
.sticky {
    position: sticky;
  }
.inset-0 {
    inset: 0;
  }
}
`],[255,`@layer utilities {
.inset-x-0 {
    inset-inline: 0;
  }
.inset-y-0 {
    inset-block: 0;
  }
}
`],[258,`@layer utilities {
.-top-1 {
    top: calc(var(--spacing) * -1);
  }
.-top-2 {
    top: calc(var(--spacing) * -2);
  }
}
`],[261,`@layer utilities {
.top-0 {
    top: 0;
  }
.top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
.top-1 {
    top: var(--spacing);
  }
.top-1\\.5 {
    top: calc(var(--spacing) * 1.5);
  }
.top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
.top-2 {
    top: calc(var(--spacing) * 2);
  }
.top-2\\.5 {
    top: calc(var(--spacing) * 2.5);
  }
.top-3 {
    top: calc(var(--spacing) * 3);
  }
.top-4 {
    top: calc(var(--spacing) * 4);
  }
}
`],[272,`@layer utilities {
.top-full {
    top: 100%;
  }
}
`],[274,`@layer utilities {
.-right-1 {
    right: calc(var(--spacing) * -1);
  }
.-right-2 {
    right: calc(var(--spacing) * -2);
  }
.right-0 {
    right: 0;
  }
.right-1 {
    right: var(--spacing);
  }
.right-1\\.5 {
    right: calc(var(--spacing) * 1.5);
  }
.right-2 {
    right: calc(var(--spacing) * 2);
  }
.right-3 {
    right: calc(var(--spacing) * 3);
  }
.right-4 {
    right: calc(var(--spacing) * 4);
  }
}
`],[286,`@layer utilities {
.bottom-0 {
    bottom: 0;
  }
.bottom-0\\.5 {
    bottom: calc(var(--spacing) * 0.5);
  }
}
`],[294,`@layer utilities {
.bottom-full {
    bottom: 100%;
  }
}
`],[296,`@layer utilities {
.left-0 {
    left: 0;
  }
.left-0\\.5 {
    left: calc(var(--spacing) * 0.5);
  }
.left-1\\.5 {
    left: calc(var(--spacing) * 1.5);
  }
.left-1\\/2 {
    left: calc(1 / 2 * 100%);
  }
.left-2 {
    left: calc(var(--spacing) * 2);
  }
}
`],[302,`@layer utilities {
.left-3 {
    left: calc(var(--spacing) * 3);
  }
}
`],[309,`@layer utilities {
.-z-10 {
    z-index: calc(10 * -1);
  }
}
`],[311,`@layer utilities {
.z-10 {
    z-index: 10;
  }
.z-20 {
    z-index: 20;
  }
.z-30 {
    z-index: 30;
  }
.z-40 {
    z-index: 40;
  }
.z-50 {
    z-index: 50;
  }
}
`],[318,`@layer utilities {
.z-\\[100\\] {
    z-index: 100;
  }
.z-\\[110\\] {
    z-index: 110;
  }
.z-\\[120\\] {
    z-index: 120;
  }
}
`],[322,`@layer utilities {
.z-\\[200\\] {
    z-index: 200;
  }
}
`],[325,`@layer utilities {
.z-\\[500\\] {
    z-index: 500;
  }
.z-\\[600\\] {
    z-index: 600;
  }
}
`],[329,`@layer utilities {
.col-span-2 {
    grid-column: span 2 / span 2;
  }
}
`],[331,`@layer utilities {
.\\!m-0 {
    margin: 0 !important;
  }
.m-0 {
    margin: 0;
  }
}
`],[337,`@layer utilities {
.mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
.mx-1 {
    margin-inline: var(--spacing);
  }
}
`],[341,`@layer utilities {
.mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
.mx-6 {
    margin-inline: calc(var(--spacing) * 6);
  }
.mx-auto {
    margin-inline: auto;
  }
}
`],[345,`@layer utilities {
.my-1 {
    margin-block: var(--spacing);
  }
.my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
.my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
}
`],[352,`@layer utilities {
.-mt-2 {
    margin-top: calc(var(--spacing) * -2);
  }
.-mt-4 {
    margin-top: calc(var(--spacing) * -4);
  }
}
`],[355,`@layer utilities {
.mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
.mt-1 {
    margin-top: var(--spacing);
  }
.mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
.mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
.mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
.mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
.mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
}
`],[363,`@layer utilities {
.mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
.mt-auto {
    margin-top: auto;
  }
}
`],[367,`@layer utilities {
.mr-1 {
    margin-right: var(--spacing);
  }
.mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
}
`],[374,`@layer utilities {
.mb-0\\.5 {
    margin-bottom: calc(var(--spacing) * 0.5);
  }
.mb-1 {
    margin-bottom: var(--spacing);
  }
.mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
.mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
.mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
.mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
.mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
}
`],[384,`@layer utilities {
.ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
.ml-1 {
    margin-left: var(--spacing);
  }
.ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
}
`],[388,`@layer utilities {
.ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
.ml-5 {
    margin-left: calc(var(--spacing) * 5);
  }
.ml-6 {
    margin-left: calc(var(--spacing) * 6);
  }
}
`],[392,`@layer utilities {
.ml-11 {
    margin-left: calc(var(--spacing) * 11);
  }
}
`],[394,`@layer utilities {
.ml-auto {
    margin-left: auto;
  }
.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
`],[397,`@layer utilities {
.line-clamp-4 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
.block {
    display: block;
  }
}
`],[400,`@layer utilities {
.flex {
    display: flex;
  }
.grid {
    display: grid;
  }
.hidden {
    display: none;
  }
.inline {
    display: inline;
  }
.inline-block {
    display: inline-block;
  }
.inline-flex {
    display: inline-flex;
  }
.aspect-square {
    aspect-ratio: 1 / 1;
  }
.size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
}
`],[409,`@layer utilities {
.h-1 {
    height: var(--spacing);
  }
.h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
}
`],[412,`@layer utilities {
.h-2 {
    height: calc(var(--spacing) * 2);
  }
.h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
.h-3 {
    height: calc(var(--spacing) * 3);
  }
.h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
.h-4 {
    height: calc(var(--spacing) * 4);
  }
.h-4\\.5 {
    height: calc(var(--spacing) * 4.5);
  }
.h-5 {
    height: calc(var(--spacing) * 5);
  }
.h-6 {
    height: calc(var(--spacing) * 6);
  }
.h-7 {
    height: calc(var(--spacing) * 7);
  }
.h-8 {
    height: calc(var(--spacing) * 8);
  }
.h-9 {
    height: calc(var(--spacing) * 9);
  }
.h-10 {
    height: calc(var(--spacing) * 10);
  }
.h-12 {
    height: calc(var(--spacing) * 12);
  }
.h-14 {
    height: calc(var(--spacing) * 14);
  }
.h-16 {
    height: calc(var(--spacing) * 16);
  }
.h-20 {
    height: calc(var(--spacing) * 20);
  }
}
`],[429,`@layer utilities {
.h-32 {
    height: calc(var(--spacing) * 32);
  }
.h-36 {
    height: calc(var(--spacing) * 36);
  }
}
`],[437,`@layer utilities {
.h-\\[18px\\] {
    height: 18px;
  }
}
`],[442,`@layer utilities {
.h-\\[70vh\\] {
    height: 70vh;
  }
}
`],[445,`@layer utilities {
.h-\\[85vh\\] {
    height: 85vh;
  }
.h-\\[90vh\\] {
    height: 90vh;
  }
.h-\\[95vh\\] {
    height: 95vh;
  }
}
`],[450,`@layer utilities {
.h-auto {
    height: auto;
  }
.h-dvh {
    height: 100dvh;
  }
.h-full {
    height: 100%;
  }
.h-px {
    height: 1px;
  }
}
`],[455,`@layer utilities {
.max-h-32 {
    max-height: calc(var(--spacing) * 32);
  }
}
`],[457,`@layer utilities {
.max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
.max-h-48 {
    max-height: calc(var(--spacing) * 48);
  }
}
`],[460,`@layer utilities {
.max-h-60 {
    max-height: calc(var(--spacing) * 60);
  }
.max-h-64 {
    max-height: calc(var(--spacing) * 64);
  }
.max-h-72 {
    max-height: calc(var(--spacing) * 72);
  }
.max-h-80 {
    max-height: calc(var(--spacing) * 80);
  }
.max-h-96 {
    max-height: calc(var(--spacing) * 96);
  }
.max-h-\\[28rem\\] {
    max-height: 28rem;
  }
.max-h-\\[36rem\\] {
    max-height: 36rem;
  }
}
`],[471,`@layer utilities {
.max-h-\\[60vh\\] {
    max-height: 60vh;
  }
}
`],[475,`@layer utilities {
.max-h-\\[85vh\\] {
    max-height: 85vh;
  }
.max-h-\\[90dvh\\] {
    max-height: 90dvh;
  }
.max-h-\\[90vh\\] {
    max-height: 90vh;
  }
}
`],[481,`@layer utilities {
.max-h-\\[300px\\] {
    max-height: 300px;
  }
}
`],[483,`@layer utilities {
.max-h-\\[400px\\] {
    max-height: 400px;
  }
.max-h-\\[500px\\] {
    max-height: 500px;
  }
.max-h-\\[1500px\\] {
    max-height: 1500px;
  }
}
`],[490,`@layer utilities {
.max-h-full {
    max-height: 100%;
  }
}
`],[492,`@layer utilities {
.min-h-0 {
    min-height: 0;
  }
.min-h-8 {
    min-height: calc(var(--spacing) * 8);
  }
.min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
.min-h-10 {
    min-height: calc(var(--spacing) * 10);
  }
.min-h-11 {
    min-height: calc(var(--spacing) * 11);
  }
.min-h-12 {
    min-height: calc(var(--spacing) * 12);
  }
.min-h-14 {
    min-height: calc(var(--spacing) * 14);
  }
.min-h-20 {
    min-height: calc(var(--spacing) * 20);
  }
.min-h-64 {
    min-height: calc(var(--spacing) * 64);
  }
}
`],[507,`@layer utilities {
.min-h-\\[34px\\] {
    min-height: 34px;
  }
}
`],[511,`@layer utilities {
.min-h-\\[52px\\] {
    min-height: 52px;
  }
.min-h-\\[58px\\] {
    min-height: 58px;
  }
}
`],[515,`@layer utilities {
.min-h-\\[100px\\] {
    min-height: 100px;
  }
}
`],[521,`@layer utilities {
.min-h-full {
    min-height: 100%;
  }
.w-0 {
    width: 0;
  }
}
`],[524,`@layer utilities {
.w-1 {
    width: var(--spacing);
  }
.w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
.w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
}
`],[528,`@layer utilities {
.w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
.w-2\\/5 {
    width: calc(2 / 5 * 100%);
  }
.w-3 {
    width: calc(var(--spacing) * 3);
  }
.w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
.w-4 {
    width: calc(var(--spacing) * 4);
  }
.w-4\\.5 {
    width: calc(var(--spacing) * 4.5);
  }
.w-5 {
    width: calc(var(--spacing) * 5);
  }
.w-6 {
    width: calc(var(--spacing) * 6);
  }
.w-7 {
    width: calc(var(--spacing) * 7);
  }
.w-8 {
    width: calc(var(--spacing) * 8);
  }
.w-9 {
    width: calc(var(--spacing) * 9);
  }
.w-10 {
    width: calc(var(--spacing) * 10);
  }
.w-12 {
    width: calc(var(--spacing) * 12);
  }
.w-14 {
    width: calc(var(--spacing) * 14);
  }
.w-16 {
    width: calc(var(--spacing) * 16);
  }
.w-20 {
    width: calc(var(--spacing) * 20);
  }
.w-24 {
    width: calc(var(--spacing) * 24);
  }
.w-28 {
    width: calc(var(--spacing) * 28);
  }
.w-32 {
    width: calc(var(--spacing) * 32);
  }
.w-36 {
    width: calc(var(--spacing) * 36);
  }
.w-40 {
    width: calc(var(--spacing) * 40);
  }
.w-48 {
    width: calc(var(--spacing) * 48);
  }
.w-52 {
    width: calc(var(--spacing) * 52);
  }
.w-56 {
    width: calc(var(--spacing) * 56);
  }
.w-64 {
    width: calc(var(--spacing) * 64);
  }
.w-72 {
    width: calc(var(--spacing) * 72);
  }
.w-80 {
    width: calc(var(--spacing) * 80);
  }
}
`],[556,`@layer utilities {
.w-\\[1px\\] {
    width: 1px;
  }
}
`],[560,`@layer utilities {
.w-\\[18px\\] {
    width: 18px;
  }
}
`],[571,`@layer utilities {
.w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
.w-full {
    width: 100%;
  }
.w-px {
    width: 1px;
  }
.max-w-2xl {
    max-width: var(--container-2xl);
  }
.max-w-3xl {
    max-width: var(--container-3xl);
  }
.max-w-4xl {
    max-width: var(--container-4xl);
  }
.max-w-5xl {
    max-width: var(--container-5xl);
  }
}
`],[580,`@layer utilities {
.max-w-48 {
    max-width: calc(var(--spacing) * 48);
  }
}
`],[582,`@layer utilities {
.max-w-64 {
    max-width: calc(var(--spacing) * 64);
  }
}
`],[590,`@layer utilities {
.max-w-\\[120px\\] {
    max-width: 120px;
  }
}
`],[592,`@layer utilities {
.max-w-\\[150px\\] {
    max-width: 150px;
  }
.max-w-\\[180px\\] {
    max-width: 180px;
  }
.max-w-\\[200px\\] {
    max-width: 200px;
  }
.max-w-\\[240px\\] {
    max-width: 240px;
  }
.max-w-\\[300px\\] {
    max-width: 300px;
  }
}
`],[601,`@layer utilities {
.max-w-full {
    max-width: 100%;
  }
.max-w-lg {
    max-width: var(--container-lg);
  }
.max-w-md {
    max-width: var(--container-md);
  }
}
`],[606,`@layer utilities {
.max-w-sm {
    max-width: var(--container-sm);
  }
.max-w-xl {
    max-width: var(--container-xl);
  }
.min-w-0 {
    min-width: 0;
  }
.min-w-8 {
    min-width: calc(var(--spacing) * 8);
  }
.min-w-10 {
    min-width: calc(var(--spacing) * 10);
  }
.min-w-11 {
    min-width: calc(var(--spacing) * 11);
  }
}
`],[614,`@layer utilities {
.min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
}
`],[623,`@layer utilities {
.min-w-\\[180px\\] {
    min-width: 180px;
  }
}
`],[629,`@layer utilities {
.min-w-max {
    min-width: -moz-max-content;
    min-width: max-content;
  }
.flex-1 {
    flex: 1;
  }
.flex-\\[1\\.4\\] {
    flex: 1.4;
  }
}
`],[633,`@layer utilities {
.flex-\\[2\\.2\\] {
    flex: 2.2;
  }
}
`],[635,`@layer utilities {
.flex-shrink-0 {
    flex-shrink: 0;
  }
.shrink-0 {
    flex-shrink: 0;
  }
.grow {
    flex-grow: 1;
  }
.basis-48 {
    flex-basis: calc(var(--spacing) * 48);
  }
}
`],[640,`@layer utilities {
.table-fixed {
    table-layout: fixed;
  }
.border-collapse {
    border-collapse: collapse;
  }
.origin-bottom-left {
    transform-origin: 0 100%;
  }
.origin-bottom-right {
    transform-origin: 100% 100%;
  }
.origin-top-left {
    transform-origin: 0 0;
  }
.origin-top-right {
    transform-origin: 100% 0;
  }
.-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
`],[651,`@layer utilities {
.translate-x-\\[3px\\] {
    --tw-translate-x: 3px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
.translate-x-\\[18px\\] {
    --tw-translate-x: 18px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
`],[654,`@layer utilities {
.-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
.-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
.-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
`],[659,`@layer utilities {
.translate-y-0 {
    --tw-translate-y: 0;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
`],[662,`@layer utilities {
.translate-y-\\[-10px\\] {
    --tw-translate-y: -10px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
`],[666,`@layer utilities {
.scale-95 {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
.scale-100 {
    --tw-scale-x: 100%;
    --tw-scale-y: 100%;
    --tw-scale-z: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
}
`],[674,`@layer utilities {
.rotate-90 {
    rotate: 90deg;
  }
.rotate-180 {
    rotate: 180deg;
  }
.transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
}
`],[678,`@layer utilities {
.animate-ping {
    animation: var(--animate-ping);
  }
.animate-pulse {
    animation: var(--animate-pulse);
  }
.animate-spin {
    animation: var(--animate-spin);
  }
}
`],[684,`@layer utilities {
.cursor-grab {
    cursor: grab;
  }
}
`],[689,`@layer utilities {
.cursor-not-allowed {
    cursor: not-allowed;
  }
}
`],[691,`@layer utilities {
.cursor-pointer {
    cursor: pointer;
  }
}
`],[695,`@layer utilities {
.cursor-text {
    cursor: text;
  }
}
`],[698,`@layer utilities {
.resize-none {
    resize: none;
  }
.resize-y {
    resize: vertical;
  }
}
`],[702,`@layer utilities {
.scrollbar-thin {
    scrollbar-width: thin;
  }
}
`],[706,`@layer utilities {
.list-disc {
    list-style-type: disc;
  }
.list-none {
    list-style-type: none;
  }
}
`],[709,`@layer utilities {
.appearance-none {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
  }
.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`],[718,`@layer utilities {
.grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\] {
    grid-template-columns: auto minmax(0,1fr) auto;
  }
}
`],[723,`@layer utilities {
.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(min\\(100\\%\\,16rem\\)\\,1fr\\)\\)\\] {
    grid-template-columns: repeat(auto-fit,minmax(min(100%, 16rem),1fr));
  }
}
`],[725,`@layer utilities {
.grid-rows-\\[0fr\\] {
    grid-template-rows: 0fr;
  }
.grid-rows-\\[1fr\\] {
    grid-template-rows: 1fr;
  }
.flex-col {
    flex-direction: column;
  }
.flex-wrap {
    flex-wrap: wrap;
  }
.place-items-center {
    place-items: center;
  }
.content-start {
    align-content: flex-start;
  }
.items-baseline {
    align-items: baseline;
  }
.items-center {
    align-items: center;
  }
.items-end {
    align-items: flex-end;
  }
.items-start {
    align-items: flex-start;
  }
.items-stretch {
    align-items: stretch;
  }
.justify-between {
    justify-content: space-between;
  }
.justify-center {
    justify-content: center;
  }
.justify-end {
    justify-content: flex-end;
  }
}
`],[741,`@layer utilities {
.gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
.gap-1 {
    gap: var(--spacing);
  }
.gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
.gap-2 {
    gap: calc(var(--spacing) * 2);
  }
.gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
.gap-3 {
    gap: calc(var(--spacing) * 3);
  }
.gap-4 {
    gap: calc(var(--spacing) * 4);
  }
.gap-5 {
    gap: calc(var(--spacing) * 5);
  }
.gap-6 {
    gap: calc(var(--spacing) * 6);
  }
.gap-8 {
    gap: calc(var(--spacing) * 8);
  }
}
`],[752,`@layer utilities {
.space-y-0\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-8 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
.space-y-10 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 10) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
}
`],[763,`@layer utilities {
.gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
.gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
.gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
.gap-x-6 {
    -moz-column-gap: calc(var(--spacing) * 6);
         column-gap: calc(var(--spacing) * 6);
  }
}
`],[770,`@layer utilities {
.gap-y-1 {
    row-gap: var(--spacing);
  }
.gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
.gap-y-3 {
    row-gap: calc(var(--spacing) * 3);
  }
}
`],[776,`@layer utilities {
.divide-gray-100 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-100);
    }
  }
}
`],[780,`@layer utilities {
.self-center {
    align-self: center;
  }
.self-end {
    align-self: flex-end;
  }
.self-start {
    align-self: flex-start;
  }
}
`],[784,`@layer utilities {
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
.overflow-auto {
    overflow: auto;
  }
.overflow-hidden {
    overflow: hidden;
  }
.overflow-visible {
    overflow: visible;
  }
.overflow-x-auto {
    overflow-x: auto;
  }
.overflow-x-hidden {
    overflow-x: hidden;
  }
.overflow-y-auto {
    overflow-y: auto;
  }
.overflow-y-hidden {
    overflow-y: hidden;
  }
.overscroll-contain {
    overscroll-behavior: contain;
  }
.overscroll-x-contain {
    overscroll-behavior-x: contain;
  }
.overscroll-y-contain {
    overscroll-behavior-y: contain;
  }
}
`],[796,`@layer utilities {
.rounded {
    border-radius: 0.25rem;
  }
.rounded-2xl {
    border-radius: var(--radius-2xl);
  }
.rounded-3xl {
    border-radius: var(--radius-3xl);
  }
}
`],[802,`@layer utilities {
.rounded-full {
    border-radius: calc(infinity * 1px);
  }
.rounded-lg {
    border-radius: var(--radius-lg);
  }
.rounded-md {
    border-radius: var(--radius-md);
  }
.rounded-sm {
    border-radius: var(--radius-sm);
  }
.rounded-xl {
    border-radius: var(--radius-xl);
  }
}
`],[809,`@layer utilities {
.rounded-l-lg {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
}
`],[812,`@layer utilities {
.rounded-r-lg {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
  }
.rounded-r-xl {
    border-top-right-radius: var(--radius-xl);
    border-bottom-right-radius: var(--radius-xl);
  }
.rounded-b-2xl {
    border-bottom-right-radius: var(--radius-2xl);
    border-bottom-left-radius: var(--radius-2xl);
  }
.border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
.border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
.border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
}
`],[821,`@layer utilities {
.border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
}
`],[823,`@layer utilities {
.border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
.border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
}
`],[826,`@layer utilities {
.\\!border-l-0 {
    border-left-style: var(--tw-border-style) !important;
    border-left-width: 0px !important;
  }
.border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
}
`],[829,`@layer utilities {
.border-l-2 {
    border-left-style: var(--tw-border-style);
    border-left-width: 2px;
  }
}
`],[831,`@layer utilities {
.\\!border-none {
    --tw-border-style: none !important;
    border-style: none !important;
  }
.border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
}
`],[834,`@layer utilities {
.border-amber-100 {
    border-color: var(--color-amber-100);
  }
.border-amber-200 {
    border-color: var(--color-amber-200);
  }
}
`],[839,`@layer utilities {
.border-amber-300 {
    border-color: var(--color-amber-300);
  }
}
`],[841,`@layer utilities {
.border-amber-500\\/20 {
    border-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-amber-500) 20%, transparent);
    }
  }
}
`],[843,`@layer utilities {
.border-blue-100 {
    border-color: var(--color-blue-100);
  }
.border-blue-100\\/30 {
    border-color: color-mix(in srgb, oklch(93.2% 0.032 255.585) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-blue-100) 30%, transparent);
    }
  }
.border-blue-100\\/50 {
    border-color: color-mix(in srgb, oklch(93.2% 0.032 255.585) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-blue-100) 50%, transparent);
    }
  }
}
`],[847,`@layer utilities {
.border-blue-200 {
    border-color: var(--color-blue-200);
  }
.border-blue-200\\/50 {
    border-color: color-mix(in srgb, oklch(88.2% 0.059 254.128) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-blue-200) 50%, transparent);
    }
  }
.border-blue-200\\/60 {
    border-color: color-mix(in srgb, oklch(88.2% 0.059 254.128) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-blue-200) 60%, transparent);
    }
  }
}
`],[851,`@layer utilities {
.border-blue-300 {
    border-color: var(--color-blue-300);
  }
.border-blue-400 {
    border-color: var(--color-blue-400);
  }
}
`],[854,`@layer utilities {
.border-blue-500 {
    border-color: var(--color-blue-500);
  }
}
`],[857,`@layer utilities {
.border-blue-600 {
    border-color: var(--color-blue-600);
  }
}
`],[866,`@layer utilities {
.border-gray-50 {
    border-color: var(--color-gray-50);
  }
.border-gray-100 {
    border-color: var(--color-gray-100);
  }
.border-gray-100\\/50 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 50%, transparent);
    }
  }
.border-gray-200 {
    border-color: var(--color-gray-200);
  }
.border-gray-200\\/50 {
    border-color: color-mix(in srgb, oklch(92.8% 0.006 264.531) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-200) 50%, transparent);
    }
  }
.border-gray-200\\/80 {
    border-color: color-mix(in srgb, oklch(92.8% 0.006 264.531) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-200) 80%, transparent);
    }
  }
.border-gray-300 {
    border-color: var(--color-gray-300);
  }
}
`],[874,`@layer utilities {
.border-gray-700 {
    border-color: var(--color-gray-700);
  }
}
`],[877,`@layer utilities {
.border-gray-800 {
    border-color: var(--color-gray-800);
  }
.border-green-100 {
    border-color: var(--color-green-100);
  }
}
`],[883,`@layer utilities {
.border-indigo-100 {
    border-color: var(--color-indigo-100);
  }
}
`],[891,`@layer utilities {
.border-purple-100 {
    border-color: var(--color-purple-100);
  }
.border-purple-200 {
    border-color: var(--color-purple-200);
  }
}
`],[894,`@layer utilities {
.border-purple-500 {
    border-color: var(--color-purple-500);
  }
.border-red-100 {
    border-color: var(--color-red-100);
  }
}
`],[897,`@layer utilities {
.border-red-200 {
    border-color: var(--color-red-200);
  }
}
`],[899,`@layer utilities {
.border-red-300 {
    border-color: var(--color-red-300);
  }
}
`],[901,`@layer utilities {
.border-red-500 {
    border-color: var(--color-red-500);
  }
}
`],[907,`@layer utilities {
.border-transparent {
    border-color: transparent;
  }
}
`],[910,`@layer utilities {
.border-white {
    border-color: var(--color-white);
  }
.border-white\\/10 {
    border-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
.border-white\\/20 {
    border-color: color-mix(in srgb, #fff 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 20%, transparent);
    }
  }
}
`],[918,`@layer utilities {
.\\!bg-transparent {
    background-color: transparent !important;
  }
.bg-\\[\\#0d1117\\] {
    background-color: #0d1117;
  }
.bg-\\[\\#fcfcfd\\] {
    background-color: #fcfcfd;
  }
.bg-amber-50 {
    background-color: var(--color-amber-50);
  }
}
`],[924,`@layer utilities {
.bg-amber-100 {
    background-color: var(--color-amber-100);
  }
.bg-amber-500 {
    background-color: var(--color-amber-500);
  }
}
`],[927,`@layer utilities {
.bg-amber-500\\/10 {
    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);
    }
  }
}
`],[929,`@layer utilities {
.bg-black {
    background-color: var(--color-black);
  }
.bg-black\\/5 {
    background-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
}
`],[932,`@layer utilities {
.bg-black\\/20 {
    background-color: color-mix(in srgb, #000 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);
    }
  }
.bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
.bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
.bg-black\\/50 {
    background-color: color-mix(in srgb, #000 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
    }
  }
}
`],[937,`@layer utilities {
.bg-black\\/60 {
    background-color: color-mix(in srgb, #000 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 60%, transparent);
    }
  }
.bg-black\\/95 {
    background-color: color-mix(in srgb, #000 95%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 95%, transparent);
    }
  }
.bg-blue-50 {
    background-color: var(--color-blue-50);
  }
}
`],[941,`@layer utilities {
.bg-blue-50\\/20 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 20%, transparent);
    }
  }
.bg-blue-50\\/30 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 30%, transparent);
    }
  }
}
`],[944,`@layer utilities {
.bg-blue-50\\/50 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 50%, transparent);
    }
  }
.bg-blue-50\\/60 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 60%, transparent);
    }
  }
}
`],[947,`@layer utilities {
.bg-blue-50\\/80 {
    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-50) 80%, transparent);
    }
  }
.bg-blue-100 {
    background-color: var(--color-blue-100);
  }
.bg-blue-100\\/50 {
    background-color: color-mix(in srgb, oklch(93.2% 0.032 255.585) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-100) 50%, transparent);
    }
  }
.bg-blue-200 {
    background-color: var(--color-blue-200);
  }
}
`],[952,`@layer utilities {
.bg-blue-400 {
    background-color: var(--color-blue-400);
  }
}
`],[954,`@layer utilities {
.bg-blue-500 {
    background-color: var(--color-blue-500);
  }
.bg-blue-500\\/5 {
    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-500) 5%, transparent);
    }
  }
.bg-blue-500\\/10 {
    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-500) 10%, transparent);
    }
  }
}
`],[961,`@layer utilities {
.bg-blue-600 {
    background-color: var(--color-blue-600);
  }
}
`],[965,`@layer utilities {
.bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
}
`],[972,`@layer utilities {
.bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
.bg-emerald-500\\/10 {
    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-500) 10%, transparent);
    }
  }
}
`],[975,`@layer utilities {
.bg-emerald-500\\/20 {
    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-500) 20%, transparent);
    }
  }
}
`],[977,`@layer utilities {
.bg-gray-50 {
    background-color: var(--color-gray-50);
  }
}
`],[980,`@layer utilities {
.bg-gray-50\\/30 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 30%, transparent);
    }
  }
.bg-gray-50\\/50 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 50%, transparent);
    }
  }
}
`],[983,`@layer utilities {
.bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
.bg-gray-50\\/80 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 80%, transparent);
    }
  }
.bg-gray-50\\/90 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 90%, transparent);
    }
  }
.bg-gray-100 {
    background-color: var(--color-gray-100);
  }
}
`],[988,`@layer utilities {
.bg-gray-100\\/50 {
    background-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-100) 50%, transparent);
    }
  }
.bg-gray-100\\/70 {
    background-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-100) 70%, transparent);
    }
  }
.bg-gray-200 {
    background-color: var(--color-gray-200);
  }
}
`],[993,`@layer utilities {
.bg-gray-300 {
    background-color: var(--color-gray-300);
  }
}
`],[997,`@layer utilities {
.bg-gray-700 {
    background-color: var(--color-gray-700);
  }
}
`],[1e3,`@layer utilities {
.bg-gray-900 {
    background-color: var(--color-gray-900);
  }
}
`],[1003,`@layer utilities {
.bg-gray-950 {
    background-color: var(--color-gray-950);
  }
.bg-green-50 {
    background-color: var(--color-green-50);
  }
}
`],[1007,`@layer utilities {
.bg-green-100 {
    background-color: var(--color-green-100);
  }
}
`],[1009,`@layer utilities {
.bg-green-500\\/5 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 5%, transparent);
    }
  }
.bg-green-600 {
    background-color: var(--color-green-600);
  }
.bg-indigo-50 {
    background-color: var(--color-indigo-50);
  }
}
`],[1014,`@layer utilities {
.bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
}
`],[1019,`@layer utilities {
.bg-indigo-500\\/20 {
    background-color: color-mix(in srgb, oklch(58.5% 0.233 277.117) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
}
`],[1022,`@layer utilities {
.bg-inherit {
    background-color: inherit;
  }
}
`],[1026,`@layer utilities {
.bg-purple-50 {
    background-color: var(--color-purple-50);
  }
.bg-purple-50\\/50 {
    background-color: color-mix(in srgb, oklch(97.7% 0.014 308.299) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-50) 50%, transparent);
    }
  }
}
`],[1029,`@layer utilities {
.bg-purple-100 {
    background-color: var(--color-purple-100);
  }
}
`],[1033,`@layer utilities {
.bg-purple-600 {
    background-color: var(--color-purple-600);
  }
.bg-red-50 {
    background-color: var(--color-red-50);
  }
}
`],[1037,`@layer utilities {
.bg-red-50\\/40 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 40%, transparent);
    }
  }
}
`],[1039,`@layer utilities {
.bg-red-50\\/60 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 60%, transparent);
    }
  }
.bg-red-50\\/70 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 70%, transparent);
    }
  }
}
`],[1043,`@layer utilities {
.bg-red-500 {
    background-color: var(--color-red-500);
  }
.bg-red-500\\/5 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 5%, transparent);
    }
  }
}
`],[1046,`@layer utilities {
.bg-red-600 {
    background-color: var(--color-red-600);
  }
}
`],[1050,`@layer utilities {
.bg-transparent {
    background-color: transparent;
  }
}
`],[1055,`@layer utilities {
.bg-white {
    background-color: var(--color-white);
  }
}
`],[1057,`@layer utilities {
.bg-white\\/20 {
    background-color: color-mix(in srgb, #fff 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);
    }
  }
}
`],[1059,`@layer utilities {
.bg-white\\/50 {
    background-color: color-mix(in srgb, #fff 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 50%, transparent);
    }
  }
.bg-white\\/60 {
    background-color: color-mix(in srgb, #fff 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 60%, transparent);
    }
  }
.bg-white\\/70 {
    background-color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
.bg-white\\/80 {
    background-color: color-mix(in srgb, #fff 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 80%, transparent);
    }
  }
.bg-white\\/90 {
    background-color: color-mix(in srgb, #fff 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 90%, transparent);
    }
  }
.bg-white\\/95 {
    background-color: color-mix(in srgb, #fff 95%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 95%, transparent);
    }
  }
}
`],[1068,`@layer utilities {
.bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
.bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
.bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
.bg-gradient-to-t {
    --tw-gradient-position: to top in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
}
`],[1087,`@layer utilities {
.from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
}
`],[1109,`@layer utilities {
.to-transparent {
    --tw-gradient-to: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
}
`],[1112,`@layer utilities {
.bg-clip-text {
    -webkit-background-clip: text;
            background-clip: text;
  }
.fill-current {
    fill: currentcolor;
  }
}
`],[1116,`@layer utilities {
.object-contain {
    -o-object-fit: contain;
       object-fit: contain;
  }
.object-cover {
    -o-object-fit: cover;
       object-fit: cover;
  }
.\\!p-0 {
    padding: 0 !important;
  }
}
`],[1120,`@layer utilities {
.p-0 {
    padding: 0;
  }
.p-0\\.5 {
    padding: calc(var(--spacing) * 0.5);
  }
.p-1 {
    padding: var(--spacing);
  }
.p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
.p-2 {
    padding: calc(var(--spacing) * 2);
  }
.p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
.p-3 {
    padding: calc(var(--spacing) * 3);
  }
}
`],[1128,`@layer utilities {
.p-4 {
    padding: calc(var(--spacing) * 4);
  }
.p-5 {
    padding: calc(var(--spacing) * 5);
  }
.p-6 {
    padding: calc(var(--spacing) * 6);
  }
.p-8 {
    padding: calc(var(--spacing) * 8);
  }
.p-12 {
    padding: calc(var(--spacing) * 12);
  }
.p-16 {
    padding: calc(var(--spacing) * 16);
  }
}
`],[1136,`@layer utilities {
.px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
.px-1 {
    padding-inline: var(--spacing);
  }
.px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
.px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
.px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
.px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
.px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
.px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
.px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
.px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
.px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
.px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
}
`],[1149,`@layer utilities {
.py-0 {
    padding-block: 0;
  }
.py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
.py-1 {
    padding-block: var(--spacing);
  }
.py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
.py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
.py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
.py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
.py-3\\.5 {
    padding-block: calc(var(--spacing) * 3.5);
  }
.py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
.py-5 {
    padding-block: calc(var(--spacing) * 5);
  }
.py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
}
`],[1161,`@layer utilities {
.py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
}
`],[1164,`@layer utilities {
.py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
}
`],[1167,`@layer utilities {
.pt-0 {
    padding-top: 0;
  }
.pt-0\\.5 {
    padding-top: calc(var(--spacing) * 0.5);
  }
.pt-1 {
    padding-top: var(--spacing);
  }
}
`],[1171,`@layer utilities {
.pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
.pt-2\\.5 {
    padding-top: calc(var(--spacing) * 2.5);
  }
.pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
.pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
}
`],[1176,`@layer utilities {
.pt-6 {
    padding-top: calc(var(--spacing) * 6);
  }
.pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }
}
`],[1181,`@layer utilities {
.pr-1 {
    padding-right: var(--spacing);
  }
.pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
.pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
.pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
.pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
}
`],[1188,`@layer utilities {
.pr-9 {
    padding-right: calc(var(--spacing) * 9);
  }
.pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
.pr-16 {
    padding-right: calc(var(--spacing) * 16);
  }
}
`],[1194,`@layer utilities {
.pb-1 {
    padding-bottom: var(--spacing);
  }
.pb-1\\.5 {
    padding-bottom: calc(var(--spacing) * 1.5);
  }
.pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
}
`],[1198,`@layer utilities {
.pb-3 {
    padding-bottom: calc(var(--spacing) * 3);
  }
.pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
.pb-5 {
    padding-bottom: calc(var(--spacing) * 5);
  }
}
`],[1202,`@layer utilities {
.pb-8 {
    padding-bottom: calc(var(--spacing) * 8);
  }
}
`],[1204,`@layer utilities {
.pb-32 {
    padding-bottom: calc(var(--spacing) * 32);
  }
}
`],[1206,`@layer utilities {
.pb-\\[calc\\(0\\.5rem\\+env\\(safe-area-inset-bottom\\)\\)\\] {
    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
  }
}
`],[1211,`@layer utilities {
.pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
.pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
.pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
.pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
.pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
}
`],[1218,`@layer utilities {
.pl-9 {
    padding-left: calc(var(--spacing) * 9);
  }
.pl-10 {
    padding-left: calc(var(--spacing) * 10);
  }
}
`],[1221,`@layer utilities {
.text-center {
    text-align: center;
  }
.text-left {
    text-align: left;
  }
.text-right {
    text-align: right;
  }
.align-middle {
    vertical-align: middle;
  }
.align-top {
    vertical-align: top;
  }
.font-mono {
    font-family: var(--font-mono);
  }
.font-sans {
    font-family: var(--font-sans);
  }
}
`],[1229,`@layer utilities {
.text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
.text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
.text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
.text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
.text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
.text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
.text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
.text-\\[7px\\] {
    font-size: 7px;
  }
.text-\\[8px\\] {
    font-size: 8px;
  }
.text-\\[9px\\] {
    font-size: 9px;
  }
.text-\\[10px\\] {
    font-size: 10px;
  }
.text-\\[11px\\] {
    font-size: 11px;
  }
}
`],[1243,`@layer utilities {
.leading-4 {
    --tw-leading: calc(var(--spacing) * 4);
    line-height: calc(var(--spacing) * 4);
  }
.leading-5 {
    --tw-leading: calc(var(--spacing) * 5);
    line-height: calc(var(--spacing) * 5);
  }
}
`],[1246,`@layer utilities {
.leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
.leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
.leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
.leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
.font-black {
    --tw-font-weight: var(--font-weight-black);
    font-weight: var(--font-weight-black);
  }
.font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
.font-extrabold {
    --tw-font-weight: var(--font-weight-extrabold);
    font-weight: var(--font-weight-extrabold);
  }
.font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
.font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
.font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
.tracking-\\[0\\.2em\\] {
    --tw-tracking: 0.2em;
    letter-spacing: 0.2em;
  }
}
`],[1260,`@layer utilities {
.tracking-\\[0\\.15em\\] {
    --tw-tracking: 0.15em;
    letter-spacing: 0.15em;
  }
}
`],[1262,`@layer utilities {
.tracking-\\[0\\.18em\\] {
    --tw-tracking: 0.18em;
    letter-spacing: 0.18em;
  }
.tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
.tracking-tighter {
    --tw-tracking: var(--tracking-tighter);
    letter-spacing: var(--tracking-tighter);
  }
.tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
.tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
.tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
.\\[overflow-wrap\\:anywhere\\] {
    overflow-wrap: anywhere;
  }
.break-words {
    overflow-wrap: break-word;
  }
.break-all {
    word-break: break-all;
  }
.whitespace-normal {
    white-space: normal;
  }
.whitespace-nowrap {
    white-space: nowrap;
  }
.whitespace-pre {
    white-space: pre;
  }
}
`],[1275,`@layer utilities {
.whitespace-pre-wrap {
    white-space: pre-wrap;
  }
}
`],[1277,`@layer utilities {
.text-amber-400 {
    color: var(--color-amber-400);
  }
.text-amber-500 {
    color: var(--color-amber-500);
  }
}
`],[1282,`@layer utilities {
.text-amber-600 {
    color: var(--color-amber-600);
  }
.text-amber-700 {
    color: var(--color-amber-700);
  }
}
`],[1285,`@layer utilities {
.text-amber-800 {
    color: var(--color-amber-800);
  }
.text-amber-900 {
    color: var(--color-amber-900);
  }
.text-blue-100 {
    color: var(--color-blue-100);
  }
.text-blue-400 {
    color: var(--color-blue-400);
  }
}
`],[1290,`@layer utilities {
.text-blue-500 {
    color: var(--color-blue-500);
  }
}
`],[1293,`@layer utilities {
.text-blue-500\\/60 {
    color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-500) 60%, transparent);
    }
  }
.text-blue-500\\/70 {
    color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-500) 70%, transparent);
    }
  }
.text-blue-500\\/80 {
    color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-500) 80%, transparent);
    }
  }
.text-blue-600 {
    color: var(--color-blue-600);
  }
.text-blue-600\\/40 {
    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-600) 40%, transparent);
    }
  }
}
`],[1299,`@layer utilities {
.text-blue-600\\/70 {
    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-blue-600) 70%, transparent);
    }
  }
.text-blue-700 {
    color: var(--color-blue-700);
  }
}
`],[1303,`@layer utilities {
.text-blue-800 {
    color: var(--color-blue-800);
  }
.text-blue-900 {
    color: var(--color-blue-900);
  }
}
`],[1309,`@layer utilities {
.text-emerald-500 {
    color: var(--color-emerald-500);
  }
}
`],[1311,`@layer utilities {
.text-emerald-600 {
    color: var(--color-emerald-600);
  }
}
`],[1314,`@layer utilities {
.text-emerald-800 {
    color: var(--color-emerald-800);
  }
}
`],[1316,`@layer utilities {
.text-gray-100 {
    color: var(--color-gray-100);
  }
.text-gray-200 {
    color: var(--color-gray-200);
  }
.text-gray-300 {
    color: var(--color-gray-300);
  }
.text-gray-400 {
    color: var(--color-gray-400);
  }
}
`],[1322,`@layer utilities {
.text-gray-500 {
    color: var(--color-gray-500);
  }
}
`],[1324,`@layer utilities {
.text-gray-600 {
    color: var(--color-gray-600);
  }
.text-gray-700 {
    color: var(--color-gray-700);
  }
}
`],[1327,`@layer utilities {
.text-gray-800 {
    color: var(--color-gray-800);
  }
.text-gray-900 {
    color: var(--color-gray-900);
  }
.text-green-400 {
    color: var(--color-green-400);
  }
.text-green-500 {
    color: var(--color-green-500);
  }
.text-green-500\\/70 {
    color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-green-500) 70%, transparent);
    }
  }
.text-green-600 {
    color: var(--color-green-600);
  }
}
`],[1337,`@layer utilities {
.text-green-800 {
    color: var(--color-green-800);
  }
.text-indigo-400 {
    color: var(--color-indigo-400);
  }
}
`],[1342,`@layer utilities {
.text-indigo-600 {
    color: var(--color-indigo-600);
  }
}
`],[1348,`@layer utilities {
.text-inherit {
    color: inherit;
  }
}
`],[1350,`@layer utilities {
.text-orange-500 {
    color: var(--color-orange-500);
  }
}
`],[1352,`@layer utilities {
.text-purple-500 {
    color: var(--color-purple-500);
  }
}
`],[1356,`@layer utilities {
.text-purple-600 {
    color: var(--color-purple-600);
  }
}
`],[1358,`@layer utilities {
.text-purple-700 {
    color: var(--color-purple-700);
  }
}
`],[1361,`@layer utilities {
.text-red-400 {
    color: var(--color-red-400);
  }
.text-red-500 {
    color: var(--color-red-500);
  }
}
`],[1365,`@layer utilities {
.text-red-600 {
    color: var(--color-red-600);
  }
}
`],[1367,`@layer utilities {
.text-red-600\\/80 {
    color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-red-600) 80%, transparent);
    }
  }
.text-red-700 {
    color: var(--color-red-700);
  }
}
`],[1370,`@layer utilities {
.text-red-800 {
    color: var(--color-red-800);
  }
}
`],[1374,`@layer utilities {
.text-transparent {
    color: transparent;
  }
}
`],[1377,`@layer utilities {
.text-white {
    color: var(--color-white);
  }
}
`],[1383,`@layer utilities {
.text-yellow-400 {
    color: var(--color-yellow-400);
  }
.text-yellow-500 {
    color: var(--color-yellow-500);
  }
.capitalize {
    text-transform: capitalize;
  }
}
`],[1387,`@layer utilities {
.uppercase {
    text-transform: uppercase;
  }
.italic {
    font-style: italic;
  }
.tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
}
`],[1392,`@layer utilities {
.underline {
    text-decoration-line: underline;
  }
.underline-offset-2 {
    text-underline-offset: 2px;
  }
.underline-offset-4 {
    text-underline-offset: 4px;
  }
.placeholder-gray-400 {
    &::-moz-placeholder {
      color: var(--color-gray-400);
    }
    &::placeholder {
      color: var(--color-gray-400);
    }
  }
}
`],[1398,`@layer utilities {
.accent-blue-600 {
    accent-color: var(--color-blue-600);
  }
}
`],[1400,`@layer utilities {
.opacity-0 {
    opacity: 0%;
  }
}
`],[1402,`@layer utilities {
.opacity-20 {
    opacity: 20%;
  }
.opacity-30 {
    opacity: 30%;
  }
.opacity-40 {
    opacity: 40%;
  }
.opacity-50 {
    opacity: 50%;
  }
.opacity-60 {
    opacity: 60%;
  }
.opacity-70 {
    opacity: 70%;
  }
}
`],[1409,`@layer utilities {
.opacity-80 {
    opacity: 80%;
  }
.opacity-90 {
    opacity: 90%;
  }
.opacity-100 {
    opacity: 100%;
  }
}
`],[1416,`@layer utilities {
.shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
}
`],[1427,`@layer utilities {
.shadow-inner {
    --tw-shadow: inset 0 2px 4px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
}
`],[1432,`@layer utilities {
.ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
.ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
.ring-4 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
}
`],[1450,`@layer utilities {
.ring-black\\/5 {
    --tw-ring-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
.ring-blue-400 {
    --tw-ring-color: var(--color-blue-400);
  }
}
`],[1453,`@layer utilities {
.ring-blue-500\\/10 {
    --tw-ring-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-blue-500) 10%, transparent);
    }
  }
.ring-blue-500\\/20 {
    --tw-ring-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-blue-500) 20%, transparent);
    }
  }
.ring-blue-500\\/50 {
    --tw-ring-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);
    }
  }
}
`],[1458,`@layer utilities {
.ring-gray-200 {
    --tw-ring-color: var(--color-gray-200);
  }
.ring-indigo-500\\/10 {
    --tw-ring-color: color-mix(in srgb, oklch(58.5% 0.233 277.117) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 10%, transparent);
    }
  }
}
`],[1466,`@layer utilities {
.grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
}
`],[1478,`@layer utilities {
.transition-\\[grid-template-rows\\] {
    transition-property: grid-template-rows;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
.transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
`],[1482,`@layer utilities {
.transition-\\[width\\] {
    transition-property: width;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
.transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
`],[1485,`@layer utilities {
.transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
`],[1487,`@layer utilities {
.transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
.duration-75 {
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
`],[1490,`@layer utilities {
.duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
.duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
.duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
.duration-400 {
    --tw-duration: 400ms;
    transition-duration: 400ms;
  }
.duration-500 {
    --tw-duration: 500ms;
    transition-duration: 500ms;
  }
.duration-700 {
    --tw-duration: 700ms;
    transition-duration: 700ms;
  }
}
`],[1497,`@layer utilities {
.ease-\\[cubic-bezier\\(0\\.4\\,0\\,0\\.2\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.4,0,0.2,1);
    transition-timing-function: cubic-bezier(0.4,0,0.2,1);
  }
}
`],[1499,`@layer utilities {
.ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
.ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
.ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
.will-change-transform {
    will-change: transform;
  }
.outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
.select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
.select-text {
    -webkit-user-select: text;
    -moz-user-select: text;
         user-select: text;
  }
.ring-inset {
    --tw-ring-inset: inset;
  }
.group-open\\:rotate-180 {
    &:is(:where(.group):is([open], :popover-open, :open) *) {
      rotate: 180deg;
    }
  }
}
`],[1512,`@layer utilities {
.group-hover\\:scale-110 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-scale-x: 110%;
        --tw-scale-y: 110%;
        --tw-scale-z: 110%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }
    }
  }
}
`],[1518,`@layer utilities {
.group-hover\\:text-blue-500 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: var(--color-blue-500);
      }
    }
  }
}
`],[1522,`@layer utilities {
.group-hover\\:text-gray-800 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: var(--color-gray-800);
      }
    }
  }
}
`],[1524,`@layer utilities {
.group-hover\\:opacity-50 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 50%;
      }
    }
  }
.group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
}
`],[1528,`@layer utilities {
.group-hover\\/att\\:opacity-100 {
    &:is(:where(.group\\/att):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
}
`],[1537,`@layer utilities {
.group-hover\\/gen-img\\:opacity-100 {
    &:is(:where(.group\\/gen-img):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
}
`],[1545,`@layer utilities {
.group-hover\\/tool-group\\:text-blue-600 {
    &:is(:where(.group\\/tool-group):hover *) {
      @media (hover: hover) {
        color: var(--color-blue-600);
      }
    }
  }
}
`],[1553,`@layer utilities {
.peer-disabled\\:cursor-not-allowed {
    &:is(:where(.peer):disabled ~ *) {
      cursor: not-allowed;
    }
  }
}
`],[1568,`@layer utilities {
.placeholder\\:text-gray-400 {
    &::-moz-placeholder {
      color: var(--color-gray-400);
    }
    &::placeholder {
      color: var(--color-gray-400);
    }
  }
}
`],[1593,`@layer utilities {
.last\\:mb-0 {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
`],[1597,`@layer utilities {
.focus-within\\:border-blue-500 {
    &:focus-within {
      border-color: var(--color-blue-500);
    }
  }
}
`],[1608,`@layer utilities {
.hover\\:border-blue-200 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-blue-200);
      }
    }
  }
.hover\\:border-blue-300 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-blue-300);
      }
    }
  }
}
`],[1611,`@layer utilities {
.hover\\:border-blue-500 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-blue-500);
      }
    }
  }
}
`],[1616,`@layer utilities {
.hover\\:border-gray-200 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-gray-200);
      }
    }
  }
.hover\\:border-gray-300 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-gray-300);
      }
    }
  }
}
`],[1621,`@layer utilities {
.hover\\:border-red-200 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-red-200);
      }
    }
  }
}
`],[1623,`@layer utilities {
.hover\\:bg-amber-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-amber-50);
      }
    }
  }
}
`],[1628,`@layer utilities {
.hover\\:bg-blue-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-50);
      }
    }
  }
}
`],[1632,`@layer utilities {
.hover\\:bg-blue-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-100);
      }
    }
  }
}
`],[1635,`@layer utilities {
.hover\\:bg-blue-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-600);
      }
    }
  }
.hover\\:bg-blue-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-700);
      }
    }
  }
}
`],[1640,`@layer utilities {
.hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
}
`],[1644,`@layer utilities {
.hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
}
`],[1647,`@layer utilities {
.hover\\:bg-gray-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-200);
      }
    }
  }
}
`],[1652,`@layer utilities {
.hover\\:bg-green-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-green-50);
      }
    }
  }
}
`],[1659,`@layer utilities {
.hover\\:bg-purple-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-purple-700);
      }
    }
  }
.hover\\:bg-red-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-50);
      }
    }
  }
}
`],[1662,`@layer utilities {
.hover\\:bg-red-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-100);
      }
    }
  }
}
`],[1666,`@layer utilities {
.hover\\:bg-red-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-700);
      }
    }
  }
}
`],[1669,`@layer utilities {
.hover\\:bg-white {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-white);
      }
    }
  }
}
`],[1677,`@layer utilities {
.hover\\:text-blue-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-500);
      }
    }
  }
.hover\\:text-blue-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-600);
      }
    }
  }
.hover\\:text-blue-700 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-700);
      }
    }
  }
}
`],[1682,`@layer utilities {
.hover\\:text-gray-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-300);
      }
    }
  }
}
`],[1684,`@layer utilities {
.hover\\:text-gray-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-600);
      }
    }
  }
.hover\\:text-gray-700 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-700);
      }
    }
  }
.hover\\:text-gray-800 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-800);
      }
    }
  }
.hover\\:text-gray-900 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-900);
      }
    }
  }
}
`],[1689,`@layer utilities {
.hover\\:text-green-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-green-600);
      }
    }
  }
}
`],[1692,`@layer utilities {
.hover\\:text-indigo-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-indigo-600);
      }
    }
  }
}
`],[1697,`@layer utilities {
.hover\\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
      }
    }
  }
.hover\\:text-red-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-600);
      }
    }
  }
}
`],[1701,`@layer utilities {
.hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
.hover\\:underline {
    &:hover {
      @media (hover: hover) {
        text-decoration-line: underline;
      }
    }
  }
}
`],[1706,`@layer utilities {
.hover\\:opacity-95 {
    &:hover {
      @media (hover: hover) {
        opacity: 95%;
      }
    }
  }
.hover\\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
}
`],[1717,`@layer utilities {
.focus\\:border-blue-400 {
    &:focus {
      border-color: var(--color-blue-400);
    }
  }
.focus\\:border-blue-500 {
    &:focus {
      border-color: var(--color-blue-500);
    }
  }
}
`],[1727,`@layer utilities {
.focus\\:ring-blue-500 {
    &:focus {
      --tw-ring-color: var(--color-blue-500);
    }
  }
}
`],[1736,`@layer utilities {
.focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
}
`],[1740,`@layer utilities {
.focus-visible\\:ring-blue-500 {
    &:focus-visible {
      --tw-ring-color: var(--color-blue-500);
    }
  }
}
`],[1746,`@layer utilities {
.focus-visible\\:ring-red-500 {
    &:focus-visible {
      --tw-ring-color: var(--color-red-500);
    }
  }
}
`],[1749,`@layer utilities {
.focus-visible\\:ring-offset-2 {
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
}
`],[1751,`@layer utilities {
.focus-visible\\:outline-2 {
    &:focus-visible {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }
  }
.focus-visible\\:outline-offset-2 {
    &:focus-visible {
      outline-offset: 2px;
    }
  }
.focus-visible\\:outline-offset-4 {
    &:focus-visible {
      outline-offset: 4px;
    }
  }
.focus-visible\\:outline-blue-500 {
    &:focus-visible {
      outline-color: var(--color-blue-500);
    }
  }
.focus-visible\\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
.focus-visible\\:ring-inset {
    &:focus-visible {
      --tw-ring-inset: inset;
    }
  }
}
`],[1758,`@layer utilities {
.active\\:scale-95 {
    &:active {
      --tw-scale-x: 95%;
      --tw-scale-y: 95%;
      --tw-scale-z: 95%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
}
`],[1760,`@layer utilities {
.active\\:scale-\\[0\\.98\\] {
    &:active {
      scale: 0.98;
    }
  }
}
`],[1766,`@layer utilities {
.disabled\\:cursor-default {
    &:disabled {
      cursor: default;
    }
  }
.disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
.disabled\\:cursor-wait {
    &:disabled {
      cursor: wait;
    }
  }
}
`],[1771,`@layer utilities {
.disabled\\:opacity-30 {
    &:disabled {
      opacity: 30%;
    }
  }
.disabled\\:opacity-40 {
    &:disabled {
      opacity: 40%;
    }
  }
.disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
.disabled\\:opacity-60 {
    &:disabled {
      opacity: 60%;
    }
  }
.disabled\\:opacity-70 {
    &:disabled {
      opacity: 70%;
    }
  }
}
`],[1777,`@layer utilities {
.disabled\\:shadow-none {
    &:disabled {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
}
`],[1780,`@layer utilities {
.motion-reduce\\:transform-none {
    @media (prefers-reduced-motion: reduce) {
      transform: none;
    }
  }
.motion-reduce\\:animate-none {
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
.motion-reduce\\:transition-none {
    @media (prefers-reduced-motion: reduce) {
      transition-property: none;
    }
  }
}
`],[1790,`@layer utilities {
.sm\\:col-span-2 {
    @media (width >= 40rem) {
      grid-column: span 2 / span 2;
    }
  }
}
`],[1794,`@layer utilities {
.sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
}
`],[1797,`@layer utilities {
.sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
    }
  }
}
`],[1807,`@layer utilities {
.sm\\:w-auto {
    @media (width >= 40rem) {
      width: auto;
    }
  }
}
`],[1814,`@layer utilities {
.sm\\:grid-cols-2 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
.sm\\:grid-cols-3 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
`],[1817,`@layer utilities {
.sm\\:grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\] {
    @media (width >= 40rem) {
      grid-template-columns: minmax(0,1fr) auto;
    }
  }
}
`],[1819,`@layer utilities {
.sm\\:flex-row {
    @media (width >= 40rem) {
      flex-direction: row;
    }
  }
.sm\\:items-center {
    @media (width >= 40rem) {
      align-items: center;
    }
  }
}
`],[1822,`@layer utilities {
.sm\\:justify-between {
    @media (width >= 40rem) {
      justify-content: space-between;
    }
  }
}
`],[1838,`@layer utilities {
.sm\\:p-5 {
    @media (width >= 40rem) {
      padding: calc(var(--spacing) * 5);
    }
  }
.sm\\:p-6 {
    @media (width >= 40rem) {
      padding: calc(var(--spacing) * 6);
    }
  }
.sm\\:p-8 {
    @media (width >= 40rem) {
      padding: calc(var(--spacing) * 8);
    }
  }
.sm\\:p-10 {
    @media (width >= 40rem) {
      padding: calc(var(--spacing) * 10);
    }
  }
}
`],[1845,`@layer utilities {
.sm\\:px-6 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
  }
}
`],[1848,`@layer utilities {
.sm\\:py-5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 5);
    }
  }
}
`],[1852,`@layer utilities {
.sm\\:pl-4 {
    @media (width >= 40rem) {
      padding-left: calc(var(--spacing) * 4);
    }
  }
}
`],[1855,`@layer utilities {
.sm\\:text-base {
    @media (width >= 40rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
}
`],[1857,`@layer utilities {
.sm\\:text-sm {
    @media (width >= 40rem) {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
}
`],[1860,`@layer utilities {
.md\\:col-span-2 {
    @media (width >= 48rem) {
      grid-column: span 2 / span 2;
    }
  }
.md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
}
`],[1865,`@layer utilities {
.md\\:h-\\[90vh\\] {
    @media (width >= 48rem) {
      height: 90vh;
    }
  }
}
`],[1877,`@layer utilities {
.md\\:grid-cols-2 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
.md\\:grid-cols-3 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
`],[1881,`@layer utilities {
.md\\:flex-row {
    @media (width >= 48rem) {
      flex-direction: row;
    }
  }
}
`],[1887,`@layer utilities {
.md\\:rounded-2xl {
    @media (width >= 48rem) {
      border-radius: var(--radius-2xl);
    }
  }
}
`],[1893,`@layer utilities {
.md\\:p-6 {
    @media (width >= 48rem) {
      padding: calc(var(--spacing) * 6);
    }
  }
.md\\:p-8 {
    @media (width >= 48rem) {
      padding: calc(var(--spacing) * 8);
    }
  }
}
`],[1902,`@layer utilities {
.md\\:px-10 {
    @media (width >= 48rem) {
      padding-inline: calc(var(--spacing) * 10);
    }
  }
}
`],[1915,`@layer utilities {
.lg\\:block {
    @media (width >= 64rem) {
      display: block;
    }
  }
}
`],[1920,`@layer utilities {
.lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
`],[1930,`@layer utilities {
.xl\\:grid-cols-3 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
`],[1945,`@layer utilities {
.dark\\:divide-gray-700 {
    &:where(.dark, .dark *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-gray-700);
      }
    }
  }
}
`],[1947,`@layer utilities {
.dark\\:divide-gray-800 {
    &:where(.dark, .dark *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-gray-800);
      }
    }
  }
}
`],[1951,`@layer utilities {
.dark\\:border-amber-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-amber-800);
    }
  }
}
`],[1958,`@layer utilities {
.dark\\:border-blue-400 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-400);
    }
  }
}
`],[1962,`@layer utilities {
.dark\\:border-blue-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-700);
    }
  }
.dark\\:border-blue-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-800);
    }
  }
}
`],[1969,`@layer utilities {
.dark\\:border-blue-900 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-900);
    }
  }
}
`],[1979,`@layer utilities {
.dark\\:border-gray-600 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-600);
    }
  }
.dark\\:border-gray-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-700);
    }
  }
}
`],[1984,`@layer utilities {
.dark\\:border-gray-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-800);
    }
  }
}
`],[1987,`@layer utilities {
.dark\\:border-gray-900 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-900);
    }
  }
.dark\\:border-green-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-green-800);
    }
  }
}
`],[2006,`@layer utilities {
.dark\\:border-red-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-800);
    }
  }
}
`],[2009,`@layer utilities {
.dark\\:border-red-900 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-900);
    }
  }
}
`],[2016,`@layer utilities {
.dark\\:border-white\\/10 {
    &:where(.dark, .dark *) {
      border-color: color-mix(in srgb, #fff 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
      }
    }
  }
}
`],[2032,`@layer utilities {
.dark\\:bg-black\\/10 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #000 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-black) 10%, transparent);
      }
    }
  }
.dark\\:bg-black\\/20 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #000 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-black) 20%, transparent);
      }
    }
  }
}
`],[2035,`@layer utilities {
.dark\\:bg-black\\/40 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #000 40%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
      }
    }
  }
.dark\\:bg-black\\/50 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #000 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
      }
    }
  }
}
`],[2038,`@layer utilities {
.dark\\:bg-blue-400 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-400);
    }
  }
}
`],[2043,`@layer utilities {
.dark\\:bg-blue-500 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-500);
    }
  }
}
`],[2070,`@layer utilities {
.dark\\:bg-gray-600 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-600);
    }
  }
.dark\\:bg-gray-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-700);
    }
  }
}
`],[2074,`@layer utilities {
.dark\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-800);
    }
  }
}
`],[2084,`@layer utilities {
.dark\\:bg-gray-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-900);
    }
  }
}
`],[2095,`@layer utilities {
.dark\\:bg-gray-950 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-950);
    }
  }
}
`],[2147,`@layer utilities {
.dark\\:bg-white\\/5 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #fff 5%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 5%, transparent);
      }
    }
  }
.dark\\:bg-white\\/10 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #fff 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
      }
    }
  }
}
`],[2178,`@layer utilities {
.dark\\:text-amber-200 {
    &:where(.dark, .dark *) {
      color: var(--color-amber-200);
    }
  }
.dark\\:text-amber-300 {
    &:where(.dark, .dark *) {
      color: var(--color-amber-300);
    }
  }
}
`],[2181,`@layer utilities {
.dark\\:text-amber-400 {
    &:where(.dark, .dark *) {
      color: var(--color-amber-400);
    }
  }
}
`],[2183,`@layer utilities {
.dark\\:text-blue-100 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-100);
    }
  }
.dark\\:text-blue-200 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-200);
    }
  }
.dark\\:text-blue-300 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-300);
    }
  }
}
`],[2188,`@layer utilities {
.dark\\:text-blue-400 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-400);
    }
  }
}
`],[2196,`@layer utilities {
.dark\\:text-emerald-300 {
    &:where(.dark, .dark *) {
      color: var(--color-emerald-300);
    }
  }
}
`],[2198,`@layer utilities {
.dark\\:text-emerald-400 {
    &:where(.dark, .dark *) {
      color: var(--color-emerald-400);
    }
  }
.dark\\:text-gray-100 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-100);
    }
  }
.dark\\:text-gray-200 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-200);
    }
  }
.dark\\:text-gray-300 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-300);
    }
  }
.dark\\:text-gray-400 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-400);
    }
  }
}
`],[2205,`@layer utilities {
.dark\\:text-gray-500 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-500);
    }
  }
.dark\\:text-gray-600 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-600);
    }
  }
.dark\\:text-gray-700 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-700);
    }
  }
.dark\\:text-gray-800 {
    &:where(.dark, .dark *) {
      color: var(--color-gray-800);
    }
  }
}
`],[2210,`@layer utilities {
.dark\\:text-green-300 {
    &:where(.dark, .dark *) {
      color: var(--color-green-300);
    }
  }
.dark\\:text-green-400 {
    &:where(.dark, .dark *) {
      color: var(--color-green-400);
    }
  }
}
`],[2215,`@layer utilities {
.dark\\:text-indigo-100 {
    &:where(.dark, .dark *) {
      color: var(--color-indigo-100);
    }
  }
}
`],[2220,`@layer utilities {
.dark\\:text-indigo-400 {
    &:where(.dark, .dark *) {
      color: var(--color-indigo-400);
    }
  }
}
`],[2227,`@layer utilities {
.dark\\:text-purple-300 {
    &:where(.dark, .dark *) {
      color: var(--color-purple-300);
    }
  }
.dark\\:text-purple-400 {
    &:where(.dark, .dark *) {
      color: var(--color-purple-400);
    }
  }
}
`],[2232,`@layer utilities {
.dark\\:text-red-300 {
    &:where(.dark, .dark *) {
      color: var(--color-red-300);
    }
  }
}
`],[2235,`@layer utilities {
.dark\\:text-red-400 {
    &:where(.dark, .dark *) {
      color: var(--color-red-400);
    }
  }
}
`],[2243,`@layer utilities {
.dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
}
`],[2250,`@layer utilities {
.dark\\:ring-gray-700 {
    &:where(.dark, .dark *) {
      --tw-ring-color: var(--color-gray-700);
    }
  }
}
`],[2254,`@layer utilities {
.dark\\:ring-white\\/10 {
    &:where(.dark, .dark *) {
      --tw-ring-color: color-mix(in srgb, #fff 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--color-white) 10%, transparent);
      }
    }
  }
}
`],[2259,`@layer utilities {
.dark\\:group-hover\\:text-gray-200 {
    &:where(.dark, .dark *) {
      &:is(:where(.group):hover *) {
        @media (hover: hover) {
          color: var(--color-gray-200);
        }
      }
    }
  }
}
`],[2275,`@layer utilities {
.dark\\:hover\\:border-blue-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-blue-700);
        }
      }
    }
  }
}
`],[2280,`@layer utilities {
.dark\\:hover\\:border-gray-600 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-gray-600);
        }
      }
    }
  }
.dark\\:hover\\:border-gray-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-gray-700);
        }
      }
    }
  }
}
`],[2286,`@layer utilities {
.dark\\:hover\\:border-red-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-red-800);
        }
      }
    }
  }
}
`],[2303,`@layer utilities {
.dark\\:hover\\:bg-gray-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-gray-700);
        }
      }
    }
  }
}
`],[2306,`@layer utilities {
.dark\\:hover\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-gray-800);
        }
      }
    }
  }
}
`],[2333,`@layer utilities {
.dark\\:hover\\:text-blue-400 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-blue-400);
        }
      }
    }
  }
}
`],[2335,`@layer utilities {
.dark\\:hover\\:text-gray-100 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-gray-100);
        }
      }
    }
  }
.dark\\:hover\\:text-gray-200 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-gray-200);
        }
      }
    }
  }
.dark\\:hover\\:text-gray-300 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-gray-300);
        }
      }
    }
  }
}
`],[2340,`@layer utilities {
.dark\\:hover\\:text-indigo-300 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-indigo-300);
        }
      }
    }
  }
}
`],[2344,`@layer utilities {
.dark\\:hover\\:text-red-400 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-red-400);
        }
      }
    }
  }
}
`],[2346,`@layer utilities {
.dark\\:hover\\:text-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
}
`],[2353,`@layer utilities {
.\\[\\&\\:\\:-webkit-details-marker\\]\\:hidden {
    &::-webkit-details-marker {
      display: none;
    }
  }
}
`],[2356,`@layer base {
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 1.125rem;
    overscroll-behavior-y: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    background-color: var(--color-gray-50);
    color: var(--color-gray-900);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
.selectable {
    -webkit-user-select: text;
    -moz-user-select: text;
         user-select: text;
  }
button, .no-select {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
button, input, textarea {
    touch-action: manipulation;
  }
html.dark, html.dark body {
    background-color: var(--color-gray-950);
    color: var(--color-gray-100);
  }
html[data-naidan-theme-control='app-managed'], html[data-naidan-theme-control='app-managed'] body {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
#app {
    height: 100%;
  }
}
.prose a[data-naidan-external-link="true"]::after {
  content: "";
  display: inline-block;
  width: 0.85em;
  height: 0.85em;
  margin-inline-start: 0.18em;
  vertical-align: -0.08em;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M18%2013v6a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V8a2%202%200%200%201%202-2h6'/%3E%3Cpath%20d='M15%203h6v6'/%3E%3Cpath%20d='M10%2014L21%203'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M18%2013v6a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V8a2%202%200%200%201%202-2h6'/%3E%3Cpath%20d='M15%203h6v6'/%3E%3Cpath%20d='M10%2014L21%203'/%3E%3C/svg%3E");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.prose code {
  margin-inline: calc(var(--spacing) * 0.5);
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  background-color: var(--color-gray-100);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--color-gray-900);
  &:where(.dark, .dark *) {
    border-color: var(--color-gray-700);
  }
  &:where(.dark, .dark *) {
    background-color: color-mix(in srgb, oklch(27.8% 0.033 256.848) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-800) 80%, transparent);
    }
  }
  &:where(.dark, .dark *) {
    color: var(--color-gray-200);
  }
}
.prose pre code {
  margin-inline: 0;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 1em;
  --tw-leading: var(--leading-relaxed);
  line-height: var(--leading-relaxed);
}
.prose code::before, .prose code::after {
  content: "" !important;
}
.mermaid-block {
  position: relative;
  margin-block: calc(var(--spacing) * 4);
  overflow: hidden;
  border-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  &:where(.dark, .dark *) {
    border-color: var(--color-gray-700);
  }
}
.mermaid-ui-overlay {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
  z-index: 10;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.mermaid-block:hover .mermaid-ui-overlay {
  opacity: 100%;
}
@media (hover: none) {
  .touch-visible, .mermaid-ui-overlay {
    opacity: 1 !important;
  }
}
.mermaid-tabs {
  display: flex;
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  background-color: color-mix(in srgb, #fff 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 90%, transparent);
  }
  padding: calc(var(--spacing) * 0.5);
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  --tw-backdrop-blur: blur(var(--blur-sm));
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  &:where(.dark, .dark *) {
    border-color: var(--color-gray-700);
  }
  &:where(.dark, .dark *) {
    background-color: color-mix(in srgb, oklch(27.8% 0.033 256.848) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-800) 90%, transparent);
    }
  }
}
.mermaid-tab {
  display: flex;
  align-items: center;
  gap: var(--spacing);
  border-radius: 3px;
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  font-size: 10px;
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-500);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover {
    @media (hover: hover) {
      color: var(--color-gray-900);
    }
  }
  &:where(.dark, .dark *) {
    color: var(--color-gray-400);
  }
  &:where(.dark, .dark *) {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-100);
      }
    }
  }
}
.mermaid-tab.active {
  background-color: var(--color-indigo-50);
  color: var(--color-indigo-600);
  &:where(.dark, .dark *) {
    background-color: color-mix(in srgb, oklch(35.9% 0.144 278.697) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-900) 30%, transparent);
    }
  }
  &:where(.dark, .dark *) {
    color: var(--color-indigo-400);
  }
}
.mermaid {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
  padding: calc(var(--spacing) * 4);
  &:where(.dark, .dark *) {
    background-color: var(--color-gray-900);
  }
}
.mermaid-raw {
  margin: 0;
  border-radius: 0;
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
  border-color: var(--color-gray-200);
  &:where(.dark, .dark *) {
    border-color: var(--color-gray-700);
  }
}
.bg-transparency-grid {
  --grid-size: 20px;
  --grid-color: #2a2a2a;
  --bg-color: #1f1f1f;
  background-image: linear-gradient(45deg, var(--grid-color) 25%, transparent 25%), linear-gradient(-45deg, var(--grid-color) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--grid-color) 75%), linear-gradient(-45deg, transparent 75%, var(--grid-color) 75%);
  background-size: var(--grid-size) var(--grid-size);
  background-position: 0 0, 0 calc(var(--grid-size) / 2), calc(var(--grid-size) / 2) calc(var(--grid-size) / -2), calc(var(--grid-size) / -2) 0px;
  background-color: var(--bg-color);
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-scrollbar-thumb {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-scrollbar-track {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
@layer properties {
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-scrollbar-thumb: #0000;
      --tw-scrollbar-track: #0000;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-outline-style: solid;
      --tw-divide-x-reverse: 0;
    }
  }
}
`]]});export{i as t};