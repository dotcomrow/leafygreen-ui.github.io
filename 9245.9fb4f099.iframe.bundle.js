"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[9245],{"./packages/card/src/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_polymorphic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polymorphic/dist/esm/index.js"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/card/src/Card/styles.ts"),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/card/src/Card/types.ts"),_excluded=["as","className","contentStyle","darkMode"],Card=(0,_leafygreen_ui_polymorphic__WEBPACK_IMPORTED_MODULE_3__.$A)((function(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,className=_ref.className,contentStyle=_ref.contentStyle,darkModeProp=_ref.darkMode,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),Component=(0,_leafygreen_ui_polymorphic__WEBPACK_IMPORTED_MODULE_3__.pn)(as,rest,"div").Component;void 0===contentStyle&&("onClick"in rest&&void 0!==rest.onClick||"href"in rest&&rest.href)&&(contentStyle=_types__WEBPACK_IMPORTED_MODULE_5__.w.Clickable);var theme=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__.vs)(darkModeProp).theme;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({ref,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(_styles__WEBPACK_IMPORTED_MODULE_4__.v,_styles__WEBPACK_IMPORTED_MODULE_4__.t[theme].containerStyle,(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__.Z)({},_styles__WEBPACK_IMPORTED_MODULE_4__.t[theme].clickableStyle,contentStyle===_types__WEBPACK_IMPORTED_MODULE_5__.w.Clickable),className)},rest))}));Card.displayName="Card"},"./packages/card/src/Card/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Card__WEBPACK_IMPORTED_MODULE_0__.Z,w:()=>_types__WEBPACK_IMPORTED_MODULE_1__.w});var _Card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/card/src/Card/Card.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/card/src/Card/types.ts")},"./packages/card/src/Card/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>colorSet,v:()=>containerStyle});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),polished__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tokens/dist/esm/index.js"),lightBaseBoxShadow="0 4px 10px -4px ".concat((0,polished__WEBPACK_IMPORTED_MODULE_4__.DZ)(.7,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black)),lightHoverBoxShadow="0 4px 20px -4px ".concat((0,polished__WEBPACK_IMPORTED_MODULE_4__.DZ)(.8,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black)),lightFocusBoxShadow=_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.kN.light.default,darkHoverBoxShadow="0 4px 20px -4px ".concat((0,polished__WEBPACK_IMPORTED_MODULE_4__.DZ)(.3,"#000000")),darkFocusBoxShadow=_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.kN.dark.default,colorSet=(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.Z)({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,{containerStyle:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      border: 1px solid ",";\n      box-shadow: ",";\n      background-color: ",";\n      color: ",";\n    "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2,lightBaseBoxShadow,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.white,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark3),clickableStyle:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      cursor: pointer;\n\n      &:focus {\n        outline: none;\n        box-shadow: ",", ",";\n      }\n\n      &:hover,\n      &:active {\n        border: 1px solid ",";\n        box-shadow: ",";\n\n        &:focus {\n          box-shadow: ",", ",";\n        }\n      }\n    "])),lightFocusBoxShadow,lightBaseBoxShadow,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2,lightHoverBoxShadow,lightFocusBoxShadow,lightHoverBoxShadow)}),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,{containerStyle:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      border: 1px solid ",";\n      box-shadow: ",";\n      background-color: ",";\n      color: ",";\n    "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark2,"0 4px 20px -4px #01121A",_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.white),clickableStyle:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      cursor: pointer;\n\n      &:focus {\n        outline: none;\n        box-shadow: ",", ",";\n      }\n\n      &:hover {\n        box-shadow: ",";\n\n        &:focus {\n          box-shadow: ",", ",";\n        }\n      }\n    "])),"0 4px 20px -4px #01121A",darkFocusBoxShadow,darkHoverBoxShadow,darkHoverBoxShadow,darkFocusBoxShadow)}),containerStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  position: relative;\n  transition: ","ms ease-in-out;\n  transition-property: border, box-shadow;\n  border-radius: 24px;\n  font-family: ",";\n  font-size: ","px;\n  line-height: ","px;\n  padding: 24px;\n  min-height: 68px; // 48px + 20px (padding + line-height)\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.nV.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Vl.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.lineHeight)},"./packages/card/src/Card/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>ContentStyle});var ContentStyle={None:"none",Clickable:"clickable"}},"./packages/card/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentStyle:()=>_Card__WEBPACK_IMPORTED_MODULE_0__.w,default:()=>_Card__WEBPACK_IMPORTED_MODULE_0__.Z});var _Card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/card/src/Card/index.ts")},"./packages/lib/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$$:()=>v,$K:()=>S,E6:()=>N,Kf:()=>k,Nk:()=>R,Pc:()=>_,Q2:()=>g,Up:()=>w,X3:()=>O,gh:()=>h,hy:()=>b,yA:()=>C,yn:()=>B});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/once.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__),lodash_isNull__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isNull.js"),lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/isUndefined.js"),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__),lodash_isObject__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/lodash/omit.js"),__webpack_require__("./node_modules/lodash/pick.js"),__webpack_require__("./node_modules/lodash/isObject.js")),lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);function u(t,r){r=t.length;for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return u(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return s="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(Symbol.iterator)?function(t){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)},s(t)}function y(t){return null!=t&&t.nodeType===Node.ELEMENT_NODE}Object.freeze({__proto__:null,array:function array(t){return null!=t&&t instanceof Array},button:function button(t){return y(t)&&"button"===t.tagName.toLowerCase()},element:y,input:function input(t){return y(t)&&"input"===t.tagName.toLowerCase()}});var d=new Map,b=function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=function(t){var r,e,n=(null!==(r=null===(e=d.get(t))||void 0===e?void 0:e.length)&&void 0!==r?r:0).toString().padStart(4,"0");return"lg-ui".concat(t?"-".concat(t):"","-").concat(n)}(t);if(d.has(t)){var e=d.get(t);d.set(t,[r].concat(p(e)))}else d.set(t,[r]);return r};function v(t){return"string"==typeof(r=t)||"number"==typeof r?t.toString().trim():Array.isArray(t)?t.map(v).join(" ").trim():function(t){return t&&"object"===s(t)&&t.props}(t)?v(t.props.children):"";var r}var g={Light:"light",Dark:"dark"},h=function h(t){return t?g.Dark:g.Light};function w(t){return 1==new Set(t).size}var O={error:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.error),warn:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.warn),log:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.log)},S=function S(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)&&!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(t)};function k(t,r){var e;return null!=t&&"object"===s(t)&&"type"in t&&(t.type.displayName===r||lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default()(t.type)&&"render"in t.type&&(null===(e=t.type.render)||void 0===e?void 0:e.displayName)===r)}var N=function N(t,r){var n,o=null===(n=react__WEBPACK_IMPORTED_MODULE_6___default().Children.map(t,(function(t){if(r.some((function(r){return k(t,r)})))return t})))||void 0===n?void 0:n.filter((function(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)}));return lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)||(null==o?void 0:o.length)===react__WEBPACK_IMPORTED_MODULE_6___default().Children.count(t)||O.error("Children must be one of: ".concat(r.join(", ")),"Received children: ",t),o},C=function C(t,r){Object.defineProperty(t,"target",{writable:!1,value:r});var e=!1,n=!1;return f(f({nativeEvent:t},t),{},{currentTarget:t.currentTarget,target:t.target,bubbles:t.bubbles,cancelable:t.cancelable,defaultPrevented:t.defaultPrevented,eventPhase:t.eventPhase,isTrusted:t.isTrusted,timeStamp:t.timeStamp,type:t.type,preventDefault:function preventDefault(){e=!0,t.preventDefault()},isDefaultPrevented:function isDefaultPrevented(){return e},stopPropagation:function stopPropagation(){n=!0,t.stopPropagation()},isPropagationStopped:function isPropagationStopped(){return n},persist:function persist(){}})};var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Backspace:"Backspace",BracketLeft:"[",Delete:"Delete",Enter:"Enter",Escape:"Escape",Space:" ",Tab:"Tab"},R={Page:"page",Step:"step",Location:"location",Date:"date",Time:"time",True:"true",Unset:"false"};function B(t){throw Error("Received unhandled value: ".concat(t))}},"./packages/tokens/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>p,$e:()=>i,$u:()=>L,AV:()=>o,FP:()=>u,Vl:()=>I,W0:()=>B,Y2:()=>T,Z9:()=>l,ZM:()=>u,kN:()=>x,m$:()=>E,nV:()=>z,vC:()=>w,yL:()=>W});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/palette/dist/esm/index.js"),o={Mobile:320,Tablet:768,Desktop:1024,XLDesktop:1440};function t(e,r,a){return(r=function(e){var r=function(e,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var l={Background:"background",Border:"border",Icon:"icon",Text:"text"},i={Disabled:"disabled",Placeholder:"placeholder",Primary:"primary",Secondary:"secondary",InversePrimary:"inversePrimary",InverseSecondary:"inverseSecondary",Info:"info",Warning:"warning",Error:"error",Success:"success",Link:"link"},u={Default:"default",Hover:"hover",Focus:"focus"},s=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,c=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue,d=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray,g=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green,n=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red,f=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,h=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow,v={background:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,s),u.Hover,d.dark2),u.Focus,c.dark3)),i.Secondary,t(t(t({},u.Default,d.dark4),u.Hover,d.dark2),u.Focus,c.dark3)),i.InversePrimary,t(t(t({},u.Default,d.light2),u.Hover,d.light3),u.Focus,c.light2)),i.Info,t(t(t({},u.Default,c.dark3),u.Hover,c.dark3),u.Focus,c.dark3)),i.Warning,t(t(t({},u.Default,h.dark3),u.Hover,h.dark3),u.Focus,h.dark3)),i.Success,t(t(t({},u.Default,g.dark3),u.Hover,g.dark3),u.Focus,g.dark3)),i.Error,t(t(t({},u.Default,n.dark3),u.Hover,n.dark3),u.Focus,n.dark3)),i.Disabled,t(t(t({},u.Default,d.dark3),u.Hover,d.dark3),u.Focus,d.dark3)),border:t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.base),u.Hover,d.base),u.Focus,c.light1)),i.Secondary,t(t(t({},u.Default,d.dark2),u.Hover,d.dark2),u.Focus,c.light1)),i.Success,t(t(t({},u.Default,g.dark1),u.Hover,g.dark1),u.Focus,c.light1)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,c.light1)),i.Disabled,t(t(t({},u.Default,d.dark2),u.Hover,d.dark2),u.Focus,d.dark2)),icon:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.light1),u.Hover,d.light3),u.Focus,c.light3)),i.Secondary,t(t(t({},u.Default,d.base),u.Hover,d.light3),u.Focus,c.light3)),i.InversePrimary,t(t(t({},u.Default,f),u.Hover,s),u.Focus,c.dark2)),i.Info,t(t(t({},u.Default,c.light1),u.Hover,c.light1),u.Focus,c.light1)),i.Warning,t(t(t({},u.Default,h.base),u.Hover,h.base),u.Focus,h.base)),i.Success,t(t(t({},u.Default,g.base),u.Hover,g.base),u.Focus,g.base)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,n.light1)),i.Disabled,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),text:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.light2),u.Hover,d.light2),u.Focus,c.light3)),i.Placeholder,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),i.Secondary,t(t(t({},u.Default,d.light1),u.Hover,d.light2),u.Focus,c.light3)),i.InversePrimary,t(t(t({},u.Default,s),u.Hover,s),u.Focus,c.dark2)),i.InverseSecondary,t(t(t({},u.Default,d.dark2),u.Hover,s),u.Focus,c.dark2)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,n.light1)),i.Disabled,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),i.Link,t(t(t({},u.Default,c.light1),u.Hover,c.light1),u.Focus,c.light1))},k=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,D=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue,b=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray,H=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green,F=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red,y=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,m=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow,S={background:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,y),u.Hover,b.light2),u.Focus,D.light3)),i.Secondary,t(t(t({},u.Default,b.light3),u.Hover,b.light2),u.Focus,D.light3)),i.InversePrimary,t(t(t({},u.Default,k),u.Hover,b.dark3),u.Focus,D.dark2)),i.Info,t(t(t({},u.Default,D.light3),u.Hover,D.light3),u.Focus,D.light3)),i.Warning,t(t(t({},u.Default,m.light3),u.Hover,m.light3),u.Focus,m.light3)),i.Success,t(t(t({},u.Default,H.light3),u.Hover,H.light3),u.Focus,H.light3)),i.Error,t(t(t({},u.Default,F.light3),u.Hover,F.light3),u.Focus,F.light3)),i.Disabled,t(t(t({},u.Default,b.light2),u.Hover,b.light2),u.Focus,b.light2)),border:t(t(t(t(t({},i.Primary,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,D.light1)),i.Secondary,t(t(t({},u.Default,b.light2),u.Hover,b.light2),u.Focus,D.light1)),i.Success,t(t(t({},u.Default,H.dark1),u.Hover,H.dark1),u.Focus,D.light1)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,D.light1)),i.Disabled,t(t(t({},u.Default,b.light1),u.Hover,b.light1),u.Focus,b.light1)),icon:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,b.dark1),u.Hover,k),u.Focus,D.dark1)),i.Secondary,t(t(t({},u.Default,b.base),u.Hover,k),u.Focus,D.dark1)),i.InversePrimary,t(t(t({},u.Default,y),u.Hover,y),u.Focus,D.light2)),i.Info,t(t(t({},u.Default,D.base),u.Hover,D.base),u.Focus,D.base)),i.Warning,t(t(t({},u.Default,m.dark2),u.Hover,m.dark2),u.Focus,m.dark2)),i.Success,t(t(t({},u.Default,H.dark1),u.Hover,H.dark1),u.Focus,H.dark1)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,F.base)),i.Disabled,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),text:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,k),u.Hover,k),u.Focus,D.dark1)),i.Secondary,t(t(t({},u.Default,b.dark1),u.Hover,k),u.Focus,D.dark1)),i.InversePrimary,t(t(t({},u.Default,y),u.Hover,y),u.Focus,D.light2)),i.InverseSecondary,t(t(t({},u.Default,b.light1),u.Hover,y),u.Focus,D.light2)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,F.base)),i.Disabled,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),i.Placeholder,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),i.Link,t(t(t({},u.Default,D.base),u.Hover,D.base),u.Focus,D.base))},p=t(t({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__.Q2.Dark,v),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__.Q2.Light,S),P_Dark="dark",P_Light="light",x=t(t({},P_Light,{default:"0 0 0 2px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,", 0 0 0 4px ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1),input:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1)}),P_Dark,{default:"0 0 0 2px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,", 0 0 0 4px ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1),input:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1)}),I={default:"'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif",serif:"'MongoDB Value Serif', 'Times New Roman', serif",code:"'Source Code Pro', Menlo, monospace"},w={regular:400,medium:500,bold:700},E=t(t({},P_Light,{gray:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray.light2),green:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green.light2),red:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red.light2)}),P_Dark,{gray:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray.dark2),green:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green.dark3),red:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow.dark3)}),L={XSmall:"xsmall",Small:"small",Default:"default",Large:"large"},B={0:0,25:1,50:2,100:4,150:6,200:8,300:12,400:16,500:20,600:24,800:32,900:36,1e3:40,1200:48,1400:56,1600:64,1800:72,1:4,2:8,3:16,4:24,5:32,6:64,7:88},z={faster:100,default:150,slower:300,slowest:500},T={Body1:13,Body2:16},W={body1:{fontSize:T.Body1,lineHeight:20},body2:{fontSize:T.Body2,lineHeight:28},code1:{fontSize:13,lineHeight:20},code2:{fontSize:15,lineHeight:24},disclaimer:{fontSize:12,lineHeight:20},large:{fontSize:18,lineHeight:24}}}}]);