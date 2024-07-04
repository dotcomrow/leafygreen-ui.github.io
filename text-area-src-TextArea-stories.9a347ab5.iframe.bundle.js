(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[1326],{"./packages/text-area/src/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Generated:()=>Generated,LiveExample:()=>LiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var _templateObject,_templateObject2,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./tools/storybook-utils/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),form_field_dist_esm=__webpack_require__("./packages/form-field/dist/esm/index.js"),hooks_dist_esm=__webpack_require__("./packages/hooks/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),constants_LGIDS_TEXT_AREA_root="lg-text_area",taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),textAreaContainerStyles=(0,emotion_dist_esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  height: auto;\n  display: flex;\n  padding: 0;\n"]))),textAreaStyles=(0,emotion_dist_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  min-height: ","px;\n  display: flex;\n  resize: none;\n  padding: ","px ","px;\n"])),64,tokens_dist_esm.W0[200],tokens_dist_esm.W0[300]),State=form_field_dist_esm.nY,_excluded=["label","description","className","errorMessage","successMessage","darkMode","disabled","state","id","value","onChange","onBlur","handleValidation","aria-label","aria-labelledby","aria-invalid","baseFontSize","data-lgid","defaultValue"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TextArea=(0,index_js_.forwardRef)((function TextArea(_ref,forwardedRef){var label=_ref.label,description=_ref.description,className=_ref.className,_ref$errorMessage=_ref.errorMessage,errorMessage=void 0===_ref$errorMessage?"This input needs your attention":_ref$errorMessage,_ref$successMessage=_ref.successMessage,successMessage=void 0===_ref$successMessage?"Success":_ref$successMessage,darkModeProp=_ref.darkMode,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$state=_ref.state,state=void 0===_ref$state?State.None:_ref$state,idProp=_ref.id,controlledValue=_ref.value,onChange=_ref.onChange,onBlur=_ref.onBlur,handleValidation=_ref.handleValidation,ariaLabel=_ref["aria-label"],ariaLabelledby=_ref["aria-labelledby"],ariaInvalid=_ref["aria-invalid"],baseFontSizeProp=_ref.baseFontSize,_ref$dataLgid=_ref["data-lgid"],dataLgId=void 0===_ref$dataLgid?constants_LGIDS_TEXT_AREA_root:_ref$dataLgid,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),baseFontSize=(0,typography_dist_esm.hN)(baseFontSizeProp),id=(0,hooks_dist_esm.ue)({prefix:"textarea",id:idProp}),darkMode=(0,dist_esm.vs)(darkModeProp).darkMode,isControlled="string"==typeof controlledValue,_useState=(0,index_js_.useState)(defaultValue),_useState2=(0,slicedToArray.Z)(_useState,2),uncontrolledValue=_useState2[0],setValue=_useState2[1],value=isControlled?controlledValue:uncontrolledValue,validation=(0,hooks_dist_esm.V$)(handleValidation);label||ariaLabelledby||console.error("For screen-reader accessibility, label or aria-labelledby must be provided to TextArea.");var formFieldProps=_objectSpread({baseFontSize,className,darkMode,"data-lgid":dataLgId,description,disabled,errorMessage,id,label,state,successMessage},{"aria-invalid":ariaInvalid,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby}),textAreaProps=_objectSpread({className:textAreaStyles,onBlur:function handleBlur(e){onBlur&&onBlur(e),validation.onBlur(e)},onChange:function handleChange(e){onChange&&onChange(e),isControlled||setValue(e.target.value),validation.onChange(e)},ref:forwardedRef,title:null!=label?label:void 0,value},rest);return index_js_default().createElement(form_field_dist_esm.Wi,formFieldProps,index_js_default().createElement(form_field_dist_esm.IR,{className:textAreaContainerStyles},index_js_default().createElement("textarea",textAreaProps)))}));TextArea.displayName="TextArea",TextArea.propTypes={};__webpack_require__("./tools/test-harnesses/dist/esm/index.js");var TextArea_stories_excluded=["darkMode","baseFontSize"];const TextArea_stories={title:"Components/TextArea",component:TextArea,parameters:{default:"LiveExample",generate:{combineArgs:{darkMode:[!1,!0],baseFontSize:[13,16],label:[void 0,"Label"],description:[void 0,"This is a description for the text area"],state:Object.values(State),disabled:[!1,!0]},excludeCombinations:[{label:void 0,description:"This is a description for the text area"}]}},argTypes:{baseFontSize:{options:[void 0,13,16],control:{type:"radio"}},label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},darkMode:esm.bN.darkMode},args:{label:"Label",description:"This is a description for the text area",errorMessage:"This is an error message",disabled:!1,placeholder:"Placeholder"}};var LiveExample=function LiveExample(_ref){var darkMode=_ref.darkMode,baseFontSize=_ref.baseFontSize,args=(0,objectWithoutProperties.Z)(_ref,TextArea_stories_excluded);return index_js_default().createElement(dist_esm.ZP,{baseFontSize},index_js_default().createElement(TextArea,(0,esm_extends.Z)({darkMode},args)))};LiveExample.parameters={chromatic:{disableSnapshot:!0}},LiveExample.argTypes={baseFontSize:{options:[14,16],control:{type:"radio"},description:"Storybook prop only. This font size is passed into the LeafygreenProvider. "}},LiveExample.args={baseFontSize:14};var Generated=function Generated(){};LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:"({\n  darkMode,\n  baseFontSize,\n  ...args\n}: TextAreaProps & FontSizeProps) => <LeafygreenProvider baseFontSize={baseFontSize}>\n    <TextArea darkMode={darkMode} {...args} />\n  </LeafygreenProvider>",...LiveExample.parameters?.docs?.source}}},Generated.parameters={...Generated.parameters,docs:{...Generated.parameters?.docs,source:{originalSource:"() => {}",...Generated.parameters?.docs?.source}}};const __namedExportsOrder=["LiveExample","Generated"]},"./packages/form-field/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IR:()=>qe,Me:()=>S,Wi:()=>Ne,e7:()=>le,nY:()=>J});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/dist/esm/index.js"),_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icon/dist/esm/index.js"),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/hooks/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/palette/dist/esm/index.js"),j="lg-form_field",P={root:j,description:"".concat(j,"-description"),errorMessage:"".concat(j,"-error_message"),feedback:"".concat(j,"-feedback"),input:"".concat(j,"-input"),label:"".concat(j,"-label"),optional:"".concat(j,"-optional"),successMessage:"".concat(j,"-success_message")},S={error:"This input needs your attention",success:"Success"};function F(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},M.apply(null,arguments)}function D(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function I(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?D(Object(r),!0).forEach((function(n){F(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function H(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;r[t]=e[t]}return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function V(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var L,_,C,T,W,X,q,A,B,G,J={None:"none",Error:"error",Valid:"valid"},K={disabled:!1,size:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Default,state:J.None},Q=react__WEBPACK_IMPORTED_MODULE_0___default().createContext(K),R=function R(n){var r=n.value,t=n.children;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Q.Provider,{value:r},t)},Y=function Y(e){var n=e.baseFontSize,r=e.size;return r===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.XSmall||r===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Small?(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(L||(L=V(["\n      font-size: ","px;\n      line-height: ","px;\n    "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.lineHeight):r===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Default?(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_||(_=V(["\n      font-size: ","px;\n      line-height: ","px;\n    "])),n,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.lineHeight):r===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Large?(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(C||(C=V(["\n      font-size: ","px;\n      line-height: ","px;\n    "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.large.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.large.lineHeight):void 0},Z=function Z(e){return e===J.Error?_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$e.Error:e===J.Valid?_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$e.Success:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$e.Primary},$=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(T||(T=V(["\n  display: flex;\n  flex-direction: column;\n"]))),ee=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(W||(W=V(["\n  margin-bottom: ","px;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100]),ne=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(X||(X=V(["\n  display: flex;\n  gap: ","px;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100]),re=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(q||(q=V(["\n  padding-top: ","px;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100]),te=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(A||(A=V(["\n  opacity: 0;\n"]))),ie=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(B||(B=V(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ae=function ae(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(G||(G=V(["\n    height: ","px;\n  "])),e===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Large?_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.large.lineHeight:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.body1.lineHeight)},oe=["baseFontSize","disabled","errorMessage","hideFeedback","id","size","state","successMessage"],le=function le(n){var r=n.baseFontSize,t=n.disabled,a=n.errorMessage,l=n.hideFeedback,s=void 0!==l&&l,d=n.id,c=n.size,p=n.state,f=n.successMessage,b=H(n,oe),m=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__.vs)().theme,g=(0,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.hN)(r),x=Y({baseFontSize:g,size:c}),w=p===J.Error,O=(w||p===J.Valid)&&!t,E=O?{glyph:w?"Warning":"Checkmark",fill:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[m].icon[Z(p)].default,title:w?"Error":"Valid"}:void 0;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",M({id:d,"data-lgid":P.feedback,"data-testid":P.feedback,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(ne,F(F({},re,O),te,s)),"aria-live":"polite","aria-relevant":"all"},b),O&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,E&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(ie,ae(c))},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_5__.ZP,M({},E,{"aria-hidden":!0}))),w?react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.jj,{"data-lgid":P.errorMessage,"data-testid":P.errorMessage,className:x},a):react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.uT,{"data-lgid":P.successMessage,"data-testid":P.successMessage,className:x},f)))};le.displayName="FormFieldFeedback";var se,de,ce,ue,pe,fe,be,me,ge,he,ve,ye,xe,we,ke,Oe,Ee=["label","description","state","id","disabled"],ze=["label","description","children","baseFontSize","state","size","disabled","errorMessage","successMessage","className","darkMode","optional","id"],Ne=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(n,r){var t=n.label,o=n.description,s=n.children,d=n.baseFontSize,c=n.state,u=void 0===c?J.None:c,p=n.size,f=void 0===p?_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Default:p,b=n.disabled,m=void 0!==b&&b,g=n.errorMessage,v=void 0===g?S.error:g,y=n.successMessage,k=void 0===y?S.success:y,E=n.className,z=n.darkMode,N=n.optional,j=n.id,D=H(n,ze),V=(0,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.hN)(d),L=Y({baseFontSize:V,size:f}),_=function(e){var n,r=e.label,t=e.description,i=e.state,a=e.id,o=e.disabled,l=H(e,Ee),s=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.ue)({prefix:P.label}),d=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.ue)({prefix:P.description}),c=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.ue)({prefix:P.feedback}),u=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.ue)({prefix:P.input}),p=null!=a?a:u,f=i===J.Error,b=i!==J.None,m=r?s:l["aria-labelledby"],g=r||m?void 0:l["aria-label"],h="".concat(t?d:""," ").concat(b?c:"").trim(),v=null!==(n=l["aria-invalid"])&&void 0!==n?n:f;return{labelId:s,descriptionId:d,feedbackId:c,inputId:p,inputProps:{id:p,"aria-labelledby":m,"aria-describedby":h,"aria-label":g,"aria-disabled":o,readOnly:l.readOnly?l.readOnly:o,"aria-invalid":v}}}(I({label:t,description:o,state:u,id:j,disabled:m},D)),C=_.labelId,T=_.descriptionId,W=_.feedbackId,X=_.inputId,q=_.inputProps,A={baseFontSize:V,disabled:m,errorMessage:v,id:W,size:f,state:u,successMessage:k};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__.ZP,{darkMode:z},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R,{value:{disabled:m,size:f,state:u,inputProps:q,optional:N}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",M({className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(L,E),ref:r},D),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)($,F({},ee,!(!t&&!o)))},t&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.__,{"data-testid":P.label,className:L,htmlFor:X,id:C,disabled:m},t),o&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.dk,{"data-testid":P.description,className:L,id:T,disabled:m},o)),s,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(le,A))))}));Ne.displayName="FormField";var je=(0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__.hy)("form-field-input"),Pe=(0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__.hy)("form-field-icon"),Se=function Se(e){return"0 0 0 100px ".concat(e," inset")},Fe=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(se||(se=V(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: ",";\n  width: 100%;\n  height: 36px;\n  font-weight: ",";\n  border: 1px solid;\n  z-index: 1;\n  outline: none;\n  border-radius: 6px;\n  transition: ","ms ease-in-out;\n  transition-property: border-color, box-shadow;\n  z-index: 0;\n\n  & ."," {\n    font-family: ",";\n    color: inherit;\n    background-color: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    outline: none;\n    border: none;\n  }\n\n  & ."," svg,\n  & svg {\n    min-height: 16px;\n    min-width: 16px;\n  }\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[1],_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Vl.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.vC.regular,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.nV.default,je,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Vl.default,Pe),Me=function Me(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ce||(ce=V(["\n  @supports selector(:has(a, b)) {\n    &:focus-within:not(:has(.",":focus)) {\n      ",'\n    }\n  }\n\n  /* Fallback for when "has" is unsupported */\n  @supports not selector(:has(a, b)) {\n    &:focus-within {\n      ',"\n    }\n  }\n"])),Pe,e,e)},De=F(F({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__.Q2.Light,Me("\n     {\n      box-shadow: ".concat(_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.kN.light.input,";\n      border-color: ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_8__.D.white,";\n    }\n  "))),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__.Q2.Dark,Me("\n     {\n      box-shadow: ".concat(_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.kN.dark.input,";\n      border-color: ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_8__.D.gray.dark4,";\n    }\n  "))),Ie="&:has(button.".concat(Pe,")"),He=F(F(F(F({},_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.XSmall,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ue||(ue=V(["\n    height: 22px;\n    padding-inline: ","px;\n\n    "," {\n      padding-inline-end: ","px;\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[200],Ie,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Small,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(pe||(pe=V(["\n    height: 28px;\n    padding-inline: ","px;\n\n    "," {\n      padding-inline-end: ","px;\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[200],Ie,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Default,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(fe||(fe=V(["\n    height: 36px;\n    padding-inline: ","px;\n\n    "," {\n      padding-inline-end: ","px;\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[300],Ie,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[150])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Large,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(be||(be=V(["\n    height: 48px;\n    padding-inline: ","px;\n\n    "," {\n      padding-inline-end: ","px;\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[300],Ie,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[200]));var Le=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ye||(ye=V(["\n  width: 100%;\n"]))),_e=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(xe||(xe=V(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.W0[100]),Ce=function Ce(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(we||(we=V(["\n    color: ",";\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].icon.disabled.default)},Te=function Te(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ke||(ke=V(["\n    color: ",";\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].icon.secondary.default)},We=function We(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(Oe||(Oe=V(["\n    color: ",";\n\n    font-size: 12px;\n    line-height: 12px;\n    font-style: italic;\n    font-weight: ",";\n    display: flex;\n    align-items: center;\n    > p {\n      margin: 0;\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.secondary.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.vC.regular)},Xe=["contentEnd","className","children"],qe=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(n,r){var t=n.contentEnd,a=n.className,s=n.children,d=H(n,Xe),c=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__.vs)().theme,u=function U(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Q)}(),p=u.disabled,f=u.size,b=u.state,m=u.inputProps,g=u.optional,h=function Ve(e){var n=e.disabled,r=e.size,a=e.state,o=e.theme;return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(Fe,function(e){var n=e===_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_7__.Q2.Dark?_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_8__.D.gray.dark4:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_.light.background.primary.default;return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(de||(de=V(["\n    color: ",";\n    background: ",";\n    border: 1px solid;\n\n    & ."," {\n      &:-webkit-autofill {\n        color: ",";\n        background: ",";\n        border: 1px solid ",";\n        -webkit-text-fill-color: ",";\n        box-shadow: ",";\n\n        &:focus {\n          box-shadow: ",",\n            ",";\n          border-color: ",";\n        }\n\n        &:hover:not(:focus) {\n          box-shadow: ",",\n            ",";\n        }\n      }\n\n      &::placeholder {\n        font-weight: ",";\n        color: ",";\n      }\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.primary.default,n,je,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.primary.default,n,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].border.primary.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.primary.default,Se(n),Se(n),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.kN[e].input,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].border.primary.focus,Se(n),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.m$[e].gray,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.vC.regular,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.placeholder.default)}(o),He[r],F(F({},(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(function(e){var n=e.theme,r=e.state;return F(F(F({},J.Error,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(me||(me=V(["\n      border-color: ",";\n\n      &:hover,\n      &:active {\n        &:not(:focus) {\n          box-shadow: ",";\n        }\n      }\n    "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[n].border.error.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.m$[n].red)),J.None,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ge||(ge=V(["\n      border-color: ",";\n\n      &:hover,\n      &:active {\n        &:not(:focus) {\n          box-shadow: ",";\n        }\n      }\n    "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[n].border.primary.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.m$[n].gray)),J.Valid,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(he||(he=V(["\n      border-color: ",";\n\n      &:hover,\n      &:active {\n        &:not(:focus) {\n          box-shadow: ",";\n        }\n      }\n    "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[n].border.success.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.m$[n].green))[r]}({theme:o,state:a}),De[o]),!n),function(e){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(ve||(ve=V(["\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n\n    &:hover,\n    &:active {\n      &:not(:focus) {\n        box-shadow: inherit;\n      }\n    }\n\n    & ."," {\n      cursor: not-allowed;\n      pointer-events: none;\n      color: ",";\n\n      &::placeholder {\n        color: inherit;\n      }\n\n      &:-webkit-autofill {\n        &,\n        &:hover,\n        &:focus {\n          appearance: none;\n\n          border: 1px solid ",";\n          -webkit-text-fill-color: ",";\n          box-shadow: ",";\n        }\n\n        &:hover:not(:focus) {\n          box-shadow: inherit;\n        }\n      }\n    }\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.disabled.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].background.disabled.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].border.disabled.default,je,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.disabled.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].border.disabled.hover,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].text.disabled.hover,Se(_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$_[e].background.disabled.hover))}(o),n))}({disabled:p,size:null!=f?f:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.$u.Default,state:b,theme:c}),v=react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(s,I(I({},m),{},{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(je,s.props.className)})),y=b===J.None&&!p&&g,x=y||t;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",M({},d,{ref:r,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(h,a)}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:Le},v),x&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:_e},y&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"data-lgid":P.optional,className:We(c)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Optional")),t&&react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(t,{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(Pe,Te(c),F({},Ce(c),p),t.props.className)})))}));qe.displayName="FormFieldInputWrapper"},"./tools/storybook-utils/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bN:()=>n,xZ:()=>r});__webpack_require__("./node_modules/lodash/mergeWith.js");var n={baseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component",control:{type:"radio"},options:[14,16]},updatedBaseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component. Uses the updated font size values for Euclid Circular A.",control:{type:"radio"},options:[13,16]},darkMode:{description:"Render the component in dark mode.",control:"boolean"},children:{description:"Element rendered inside the component",control:"text"},as:{description:"The component will be rendered in HTML as the element selected here",options:["small","button","a","abbr","address","article","aside","b","big","blockquote","caption","cite","code","dd","del","details","dfn","dialog","div","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","i","ins","kbd","keygen","label","legend","li","main","map","mark","menu","menuitem","meter","nav","noscript","ol","p","picture","pre","progress","q","rp","rt","ruby","s","samp","slot","script","section","select","span","strong","style","sub","summary","sup","template","tbody","td","tfoot","th","thead","time","title","tr","u","ul"],type:{name:"string"},control:{type:"select"},defaultValue:"button"}},r=["aria-controls","aria-describedby","aria-label","aria-labelledby","aria-describedby","className","data-lgid","id","onBlur","onCancel","onChange","onClear","onClick","onConfirm","onDismiss","onFilter","popoverZIndex","portalClassName","portalContainer","ref","setOpen","scrollContainer","usePortal"]},"./tools/test-harnesses/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("webpack/sharing/consume/default/react/react"),__webpack_require__("./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return f="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(Symbol.iterator)?function(t){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(t)},f(t)}var d="data-lgid",m=function m(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){if(!t||"function"!=typeof t.querySelector||"function"!=typeof t.querySelectorAll)throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got ".concat("object"===f(e=t)?null===e?"null":e.constructor.name:f(e),"."));var e}(e[0]),_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.queryAllByAttribute.apply(void 0,[d].concat(e))},p=a((0,_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.buildQueries)(m,(function(t,e){return"Found multiple elements by: [".concat(d,'="').concat(e,'"]')}),(function(t,e){return"Unable to find an element by: [".concat(d,'="').concat(e,'"]')})),5),s=p[0],b=p[1],g=p[2],v=p[3],I=p[4],O=Object.freeze({__proto__:null,findAllByTestId:v,findByTestId:I,getAllByTestId:b,getByTestId:g,queryAllByTestId:m,queryByTestId:s}),j=function(){var t=function(){if("undefined"!=typeof window)return window.document}();if(!t)return{findByLgId:void 0,getByLgId:void 0,queryByLgId:void 0};var e=(0,_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.getQueriesForElement)(t.body,O);return{findByLgId:e.findByTestId,getByLgId:e.getByTestId,queryByLgId:e.queryByTestId}}();j.findByLgId,j.getByLgId},"?4f7e":()=>{}}]);