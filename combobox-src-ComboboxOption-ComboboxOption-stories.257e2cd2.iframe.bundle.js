(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[5321],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=(0,esm_typeof.Z)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,esm_typeof.Z)(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./packages/combobox/src/ComboboxOption/ComboboxOption.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithIcons:()=>WithIcons,WithoutIcons:()=>WithoutIcons,WithoutIconsAndMultiStep:()=>WithoutIconsAndMultiStep,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icon/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_ComboboxContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/combobox/src/ComboboxContext/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Combobox/ComboboxOption",component:__webpack_require__("./packages/combobox/src/ComboboxOption/ComboboxOption.tsx").y,parameters:{default:null,generate:{storyNames:["WithIcons","WithoutIcons","WithoutIconsAndMultiStep"],combineArgs:{darkMode:[!1,!0],description:[void 0,"This is a description"],isSelected:[!1,!0],isFocused:[!1,!0],disabled:[!1,!0]},decorator:function decorator(Instance,context){return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__.ZP,{darkMode:null==context?void 0:context.args.darkMode},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ComboboxContext__WEBPACK_IMPORTED_MODULE_4__.c.Provider,{value:_objectSpread(_objectSpread({},_ComboboxContext__WEBPACK_IMPORTED_MODULE_4__.O),{},{withIcons:null==context?void 0:context.args.withIcons})},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Instance,{glyph:null==context?void 0:context.args.glyph})))}}},args:{displayName:"Option",setSelected:function setSelected(){}}};var WithoutIcons=function WithoutIcons(){return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,null)};WithoutIcons.parameters={generate:{args:{withIcons:!1,glyph:void 0}}};var WithIcons=function WithIcons(){return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,null)};WithIcons.parameters={generate:{args:{withIcons:!0,glyph:react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})}}};var WithoutIconsAndMultiStep=function WithoutIconsAndMultiStep(){return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,null)};WithoutIconsAndMultiStep.parameters={generate:{decorator:function decorator(Instance,context){return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__.ZP,{darkMode:null==context?void 0:context.args.darkMode},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ComboboxContext__WEBPACK_IMPORTED_MODULE_4__.c.Provider,{value:_objectSpread(_objectSpread({},_ComboboxContext__WEBPACK_IMPORTED_MODULE_4__.O),{},{withIcons:null==context?void 0:context.args.withIcons,multiselect:!0})},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Instance,{glyph:null==context?void 0:context.args.glyph})))},args:{withIcons:!1,glyph:void 0}}},WithoutIcons.parameters={...WithoutIcons.parameters,docs:{...WithoutIcons.parameters?.docs,source:{originalSource:"() => <></>",...WithoutIcons.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"() => <></>",...WithIcons.parameters?.docs?.source}}},WithoutIconsAndMultiStep.parameters={...WithoutIconsAndMultiStep.parameters,docs:{...WithoutIconsAndMultiStep.parameters?.docs,source:{originalSource:"() => <></>",...WithoutIconsAndMultiStep.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutIcons","WithIcons","WithoutIconsAndMultiStep"]},"./tools/test-harnesses/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("webpack/sharing/consume/default/react/react"),__webpack_require__("./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return f="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(Symbol.iterator)?function(t){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(t)},f(t)}var d="data-lgid",m=function m(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){if(!t||"function"!=typeof t.querySelector||"function"!=typeof t.querySelectorAll)throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got ".concat("object"===f(e=t)?null===e?"null":e.constructor.name:f(e),"."));var e}(e[0]),_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.queryAllByAttribute.apply(void 0,[d].concat(e))},p=a((0,_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.buildQueries)(m,(function(t,e){return"Found multiple elements by: [".concat(d,'="').concat(e,'"]')}),(function(t,e){return"Unable to find an element by: [".concat(d,'="').concat(e,'"]')})),5),s=p[0],b=p[1],g=p[2],v=p[3],I=p[4],O=Object.freeze({__proto__:null,findAllByTestId:v,findByTestId:I,getAllByTestId:b,getByTestId:g,queryAllByTestId:m,queryByTestId:s}),j=function(){var t=function(){if("undefined"!=typeof window)return window.document}();if(!t)return{findByLgId:void 0,getByLgId:void 0,queryByLgId:void 0};var e=(0,_testing_library_dom__WEBPACK_IMPORTED_MODULE_1__.getQueriesForElement)(t.body,O);return{findByLgId:e.findByTestId,getByLgId:e.getByTestId,queryByLgId:e.queryByTestId}}();j.findByLgId,j.getByLgId},"./node_modules/lodash/_arrayReduce.js":module=>{module.exports=function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}},"./node_modules/lodash/_asciiWords.js":module=>{var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;module.exports=function asciiWords(string){return string.match(reAsciiWord)||[]}},"./node_modules/lodash/_baseClamp.js":module=>{module.exports=function baseClamp(number,lower,upper){return number==number&&(void 0!==upper&&(number=number<=upper?number:upper),void 0!==lower&&(number=number>=lower?number:lower)),number}},"./node_modules/lodash/_baseHas.js":module=>{var hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function baseHas(object,key){return null!=object&&hasOwnProperty.call(object,key)}},"./node_modules/lodash/_basePropertyOf.js":module=>{module.exports=function basePropertyOf(object){return function(key){return null==object?void 0:object[key]}}},"./node_modules/lodash/_createCompounder.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),deburr=__webpack_require__("./node_modules/lodash/deburr.js"),words=__webpack_require__("./node_modules/lodash/words.js"),reApos=RegExp("['’]","g");module.exports=function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}},"./node_modules/lodash/_deburrLetter.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_basePropertyOf.js")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});module.exports=deburrLetter},"./node_modules/lodash/_hasUnicodeWord.js":module=>{var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;module.exports=function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}},"./node_modules/lodash/_unicodeWords.js":module=>{var rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsDigits,rsEmoji].join("|"),"g");module.exports=function unicodeWords(string){return string.match(reUnicodeWord)||[]}},"./node_modules/lodash/clamp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseClamp=__webpack_require__("./node_modules/lodash/_baseClamp.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js");module.exports=function clamp(number,lower,upper){return void 0===upper&&(upper=lower,lower=void 0),void 0!==upper&&(upper=(upper=toNumber(upper))==upper?upper:0),void 0!==lower&&(lower=(lower=toNumber(lower))==lower?lower:0),baseClamp(toNumber(number),lower,upper)}},"./node_modules/lodash/deburr.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_deburrLetter.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,reComboMark=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");module.exports=function deburr(string){return(string=toString(string))&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}},"./node_modules/lodash/escapeRegExp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);module.exports=function escapeRegExp(string){return(string=toString(string))&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,"\\$&"):string}},"./node_modules/lodash/has.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseHas=__webpack_require__("./node_modules/lodash/_baseHas.js"),hasPath=__webpack_require__("./node_modules/lodash/_hasPath.js");module.exports=function has(object,path){return null!=object&&hasPath(object,path,baseHas)}},"./node_modules/lodash/kebabCase.js":(module,__unused_webpack_exports,__webpack_require__)=>{var kebabCase=__webpack_require__("./node_modules/lodash/_createCompounder.js")((function(result,word,index){return result+(index?"-":"")+word.toLowerCase()}));module.exports=kebabCase},"./node_modules/lodash/words.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiWords=__webpack_require__("./node_modules/lodash/_asciiWords.js"),hasUnicodeWord=__webpack_require__("./node_modules/lodash/_hasUnicodeWord.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),unicodeWords=__webpack_require__("./node_modules/lodash/_unicodeWords.js");module.exports=function words(string,pattern,guard){return string=toString(string),void 0===(pattern=guard?void 0:pattern)?hasUnicodeWord(string)?unicodeWords(string):asciiWords(string):string.match(pattern)||[]}}}]);