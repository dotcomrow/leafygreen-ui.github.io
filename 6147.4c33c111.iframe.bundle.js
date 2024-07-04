(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[6147],{"./packages/code/src/Panel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Panel_Panel});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),CopyButton=__webpack_require__("./packages/code/src/CopyButton/CopyButton.tsx"),LanguageSwitcher=__webpack_require__("./packages/code/src/LanguageSwitcher/LanguageSwitcher.tsx"),Panel_styles=__webpack_require__("./packages/code/src/Panel/Panel.styles.ts");function Panel(_ref){var language=_ref.language,languageOptions=_ref.languageOptions,contents=_ref.contents,onChange=_ref.onChange,onCopy=_ref.onCopy,showCopyButton=_ref.showCopyButton,customActionButtons=_ref.customActionButtons,showCustomActionButtons=_ref.showCustomActionButtons,usePortal=_ref.usePortal,portalClassName=_ref.portalClassName,portalContainer=_ref.portalContainer,scrollContainer=_ref.scrollContainer,popoverZIndex=_ref.popoverZIndex,className=_ref.className,theme=(0,dist_esm.vs)().theme,popoverProps={popoverZIndex,usePortal,portalClassName,portalContainer,scrollContainer};return index_js_default().createElement("div",{className:(0,esm.cx)(Panel_styles.ZO,Panel_styles.be[theme],(0,defineProperty.Z)((0,defineProperty.Z)({},Panel_styles.m1[theme],!language),Panel_styles.IQ[theme],!!language),className),"data-testid":"leafygreen-code-panel"},void 0!==language&&void 0!==languageOptions&&void 0!==onChange&&index_js_default().createElement(LanguageSwitcher.Z,(0,esm_extends.Z)({onChange,language,languageOptions},popoverProps)),showCopyButton&&index_js_default().createElement(CopyButton.Z,{onCopy,contents,withLanguageSwitcher:!!language}),showCustomActionButtons&&index_js_default().createElement(index_js_default().Fragment,null,null==customActionButtons?void 0:customActionButtons.map((function(action){return action}))))}Panel.displayName="Panel";const Panel_Panel=Panel},"./packages/code/src/globalStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>variantColors,Q:()=>injectGlobalStyles});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tokens/dist/esm/index.js"),variantColors=(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.Z)({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,{0:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light3,1:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2,2:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark2,3:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black,4:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.white,5:"#D83713",6:"#956d00",7:"#12824D",8:"#007ab8",9:"#016ee9",10:"#CC3887"}),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,{0:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black,1:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark2,2:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light1,3:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light3,4:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark2,5:"#FF6F44",6:"#EDB210",7:"#35DE7B",8:"#a5e3ff",9:"#2dc4ff",10:"#FF7DC3"}),getStyles=function getStyles(theme){return"\n  .lg-highlight-hljs-".concat(theme," {\n    \n    .lg-highlight-keyword,\n    .lg-highlight-keyword.lg-highlight-function,\n    .lg-highlight-keyword.lg-highlight-class,\n    .lg-highlight-selector-tag,\n    .lg-highlight-selector-attr,\n    .lg-highlight-selector-pseudo,\n    .lg-highlight-selector-id,\n    .lg-highlight-selector-class {\n      color: ").concat(variantColors[theme][10],";\n    }\n\n    .lg-highlight-regexp,\n    .lg-highlight-number,\n    .lg-highlight-literal,\n    .lg-highlight-function.lg-highlight-title {\n      color: ").concat(variantColors[theme][9],";\n    }\n\n    .lg-highlight-quote,\n    .lg-highlight-section,\n    .lg-highlight-name {\n      color: ").concat(variantColors[theme][8],";\n    }\n\n    .lg-highlight-string,\n    .lg-highlight-addition {\n      color: ").concat(variantColors[theme][7],";\n    }\n\n    .lg-highlight-meta,\n    .lg-highlight-meta-string {\n      color: ").concat(variantColors[theme][6],";\n    }\n\n    .lg-highlight-variable,\n    .lg-highlight-deletion,\n    .lg-highlight-symbol,\n    .lg-highlight-bullet,\n    .lg-highlight-meta,\n    .lg-highlight-link,\n    .lg-highlight-attr,\n    .lg-highlight-attribute,\n    .lg-highlight-language,\n    .lg-highlight-template-variable,\n    .lg-highlight-built_in,\n    .lg-highlight-type,\n    .lg-highlight-params {\n      color: ").concat(variantColors[theme][5],"\n    }\n\n    .lg-highlight-title,\n    .lg-highlight-class.lg-highlight-title {\n      color: ").concat(variantColors[theme][3],";\n    }\n\n    .lg-highlight-doctag,\n    .lg-highlight-formula {\n      color: ").concat(variantColors[theme][3],";\n    }\n  \n    .lg-highlight-comment {\n      color: ").concat(variantColors[theme][2],";\n      font-style: italic;\n    }\n  \n    .lg-highlight-string {\n      font-weight: 600;\n    }\n    \n    .lg-highlight-emphasis {\n      font-style: italic;\n    }\n  \n    .lg-highlight-strong {\n      font-weight: ").concat(_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.vC.bold,";\n    }\n  }\n")};function injectGlobalStyles(){Object.values(_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2).forEach((function(theme){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.injectGlobal)(getStyles(theme))}))}},"./packages/code/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Code:()=>_Code__WEBPACK_IMPORTED_MODULE_0__.E,Language:()=>_types__WEBPACK_IMPORTED_MODULE_3__.S,Mode:()=>_types__WEBPACK_IMPORTED_MODULE_3__.A,Panel:()=>_Panel__WEBPACK_IMPORTED_MODULE_2__.s,default:()=>__WEBPACK_DEFAULT_EXPORT__,variantColors:()=>_globalStyles__WEBPACK_IMPORTED_MODULE_1__.P});var _Code__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/code/src/Code/index.ts"),_globalStyles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/code/src/globalStyles.tsx"),_Panel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/code/src/Panel/index.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/code/src/types.ts");const __WEBPACK_DEFAULT_EXPORT__=_Code__WEBPACK_IMPORTED_MODULE_0__.E},"./packages/code/src/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Mode,S:()=>Language});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_languages__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/code/src/languages.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Mode={Light:"light",Dark:"dark"},Language=_objectSpread(_objectSpread({},_languages__WEBPACK_IMPORTED_MODULE_1__.i),{},{None:"none"})},"./node_modules/lodash/_baseFor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFor=__webpack_require__("./node_modules/lodash/_createBaseFor.js")();module.exports=baseFor},"./node_modules/lodash/_baseForOwn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFor=__webpack_require__("./node_modules/lodash/_baseFor.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys)}},"./node_modules/lodash/_baseIsMatch.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");module.exports=function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(null==object)return!length;for(object=Object(object);index--;){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object))return!1}for(;++index<length;){var key=(data=matchData[index])[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(void 0===objValue&&!(key in object))return!1}else{var stack=new Stack;if(customizer)var result=customizer(objValue,srcValue,key,object,source,stack);if(!(void 0===result?baseIsEqual(srcValue,objValue,3,customizer,stack):result))return!1}}return!0}},"./node_modules/lodash/_baseIteratee.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseMatches=__webpack_require__("./node_modules/lodash/_baseMatches.js"),baseMatchesProperty=__webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),property=__webpack_require__("./node_modules/lodash/property.js");module.exports=function baseIteratee(value){return"function"==typeof value?value:null==value?identity:"object"==typeof value?isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value):property(value)}},"./node_modules/lodash/_baseMatches.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsMatch=__webpack_require__("./node_modules/lodash/_baseIsMatch.js"),getMatchData=__webpack_require__("./node_modules/lodash/_getMatchData.js"),matchesStrictComparable=__webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");module.exports=function baseMatches(source){var matchData=getMatchData(source);return 1==matchData.length&&matchData[0][2]?matchesStrictComparable(matchData[0][0],matchData[0][1]):function(object){return object===source||baseIsMatch(object,source,matchData)}}},"./node_modules/lodash/_baseMatchesProperty.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js"),get=__webpack_require__("./node_modules/lodash/get.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),isStrictComparable=__webpack_require__("./node_modules/lodash/_isStrictComparable.js"),matchesStrictComparable=__webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseMatchesProperty(path,srcValue){return isKey(path)&&isStrictComparable(srcValue)?matchesStrictComparable(toKey(path),srcValue):function(object){var objValue=get(object,path);return void 0===objValue&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,3)}}},"./node_modules/lodash/_baseProperty.js":module=>{module.exports=function baseProperty(key){return function(object){return null==object?void 0:object[key]}}},"./node_modules/lodash/_basePropertyDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=function basePropertyDeep(path){return function(object){return baseGet(object,path)}}},"./node_modules/lodash/_createBaseFor.js":module=>{module.exports=function createBaseFor(fromRight){return function(object,iteratee,keysFunc){for(var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;length--;){var key=props[fromRight?length:++index];if(!1===iteratee(iterable[key],key,iterable))break}return object}}},"./node_modules/lodash/_getMatchData.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isStrictComparable=__webpack_require__("./node_modules/lodash/_isStrictComparable.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function getMatchData(object){for(var result=keys(object),length=result.length;length--;){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)]}return result}},"./node_modules/lodash/_isStrictComparable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function isStrictComparable(value){return value==value&&!isObject(value)}},"./node_modules/lodash/_matchesStrictComparable.js":module=>{module.exports=function matchesStrictComparable(key,srcValue){return function(object){return null!=object&&(object[key]===srcValue&&(void 0!==srcValue||key in Object(object)))}}},"./node_modules/lodash/get.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=function get(object,path,defaultValue){var result=null==object?void 0:baseGet(object,path);return void 0===result?defaultValue:result}},"./node_modules/lodash/property.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseProperty=__webpack_require__("./node_modules/lodash/_baseProperty.js"),basePropertyDeep=__webpack_require__("./node_modules/lodash/_basePropertyDeep.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path)}}}]);