import{t as e}from"./ac1b5c0961a7269b6a053ee64276ed0e20a7f48aefb9f67519539d23aaf10149-Dn_Qbla5.js";e({moduleId:`\0virtual:naidan-tailwind-css-module/29d088cf21360e0578dff57d6737196bd875582ffbc144f85dd32fdd779eae32.js`,fragments:[[1547,`@layer utilities {
.peer-checked\\:bg-blue-600 {
    &:is(:where(.peer):checked ~ *) {
      background-color: var(--color-blue-600);
    }
  }
}
`],[1572,`@layer utilities {
.after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
}
`],[1578,`@layer utilities {
.after\\:h-4 {
    &::after {
      content: var(--tw-content);
      height: calc(var(--spacing) * 4);
    }
  }
.after\\:w-4 {
    &::after {
      content: var(--tw-content);
      width: calc(var(--spacing) * 4);
    }
  }
.after\\:rounded-full {
    &::after {
      content: var(--tw-content);
      border-radius: calc(infinity * 1px);
    }
  }
}
`],[1583,`@layer utilities {
.after\\:bg-white {
    &::after {
      content: var(--tw-content);
      background-color: var(--color-white);
    }
  }
}
`],[1588,`@layer utilities {
.after\\:content-\\[\\'\\'\\] {
    &::after {
      --tw-content: '';
      content: var(--tw-content);
    }
  }
}
`]]}),e({moduleId:`\0virtual:naidan-tailwind-css-module/acadd2a30fe4c1b09fae017ed191cf00d6620488a315153a7c911ce38b5d2f07.js`,fragments:[[1573,`@layer utilities {
.after\\:start-\\[4px\\] {
    &::after {
      content: var(--tw-content);
      inset-inline-start: 4px;
    }
  }
}
`],[1575,`@layer utilities {
.after\\:top-\\[4px\\] {
    &::after {
      content: var(--tw-content);
      top: 4px;
    }
  }
}
`],[1581,`@layer utilities {
.after\\:border {
    &::after {
      content: var(--tw-content);
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
.after\\:border-gray-300 {
    &::after {
      content: var(--tw-content);
      border-color: var(--color-gray-300);
    }
  }
}
`],[1586,`@layer utilities {
.after\\:transition-all {
    &::after {
      content: var(--tw-content);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }
  }
}
`],[1591,`@layer utilities {
.peer-checked\\:after\\:translate-x-full {
    &:is(:where(.peer):checked ~ *) {
      &::after {
        content: var(--tw-content);
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
.peer-checked\\:after\\:border-white {
    &:is(:where(.peer):checked ~ *) {
      &::after {
        content: var(--tw-content);
        border-color: var(--color-white);
      }
    }
  }
}
`],[1944,`@layer utilities {
.rtl\\:peer-checked\\:after\\:-translate-x-full {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      &:is(:where(.peer):checked ~ *) {
        &::after {
          content: var(--tw-content);
          --tw-translate-x: -100%;
          translate: var(--tw-translate-x) var(--tw-translate-y);
        }
      }
    }
  }
}
`]]});