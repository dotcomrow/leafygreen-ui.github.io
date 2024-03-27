import e,{forwardRef as r}from"react";import{storybookArgTypes as t}from"@lg-tools/storybook-utils";import{Avatar as n}from"@lg-chat/avatar";import o from"@leafygreen-ui/badge";import{css as a,cx as i}from"@leafygreen-ui/emotion";import l from"@leafygreen-ui/icon/dist/X";import c from"@leafygreen-ui/icon-button";import f,{useDarkMode as u}from"@leafygreen-ui/leafygreen-provider";import{Body as m}from"@leafygreen-ui/typography";import{Theme as s}from"@leafygreen-ui/lib";import{palette as g}from"@leafygreen-ui/palette";import{spacing as d}from"@leafygreen-ui/tokens";function b(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function y(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function v(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var h,O,j,k,x,C,E=a(h||(h=v(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px ","px;\n  border-bottom: 1px solid;\n"])),d[4]),w=(b(k={},s.Dark,a(O||(O=v(["\n    background-color: ",";\n    border-color: ",";\n  "])),g.black,g.gray.dark2)),b(k,s.Light,a(j||(j=v(["\n    background-color: ",";\n    border-color: ",";\n  "])),g.white,g.gray.light2)),k),T=a(x||(x=v(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n"])),d[2]),P=a(C||(C=v(["\n  margin: auto;\n"]))),S=["title","className","align","onClose","badgeText","darkMode","iconSlot"],M=r((function(r,t){var a=r.title,s=r.className,g=r.align,d=void 0===g?N.Center:g,v=r.onClose,h=r.badgeText,O=r.darkMode,j=r.iconSlot,k=y(r,S),x=u(O),C=x.darkMode,M=x.theme;return e.createElement(f,{darkMode:C},e.createElement("div",p({className:i(E,w[M],s)},k,{ref:t}),e.createElement("div",{className:i(T,b({},P,d===N.Center))},e.createElement(n,{variant:"mongo",color:"green-base",sizeOverride:24}),e.createElement(m,null,e.createElement("strong",null,a)),h&&e.createElement(o,{variant:"blue"},h)),!!v&&e.createElement(c,{"aria-label":"Close chat",onClick:v},j||e.createElement(l,null))))}));M.displayName="TitleBar";var N={Center:"center",Left:"left"},z={title:"Chat/TitleBar",component:M,args:{title:"LeafyGreen Chat",onClose:void 0},argTypes:{onClose:{control:"none"},badgeText:{control:"text"},darkMode:t.darkMode}},B=function(r){return e.createElement("div",{style:{width:700}},e.createElement(M,r))},L=B.bind({}),D=B.bind({});D.args={align:"left"};var G=B.bind({});G.args={badgeText:"Beta"};var I=B.bind({});I.args={onClose:function(){}};var X=B.bind({});X.args={align:"left",onClose:function(){}};export{L as Centered,I as CenteredWithClose,D as LeftAligned,X as LeftAlignedWithClose,G as WithBeta,z as default};