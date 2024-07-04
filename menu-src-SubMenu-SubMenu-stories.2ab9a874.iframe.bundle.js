"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[1933],{"./packages/menu/src/SubMenu/SubMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Destructive:()=>Destructive,Focused:()=>Focused,LiveExample:()=>LiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icon/dist/esm/index.js"),_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/menu/src/MenuItem/index.ts"),_testUtils_withMenuContextDecorator_testutils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/menu/src/testUtils/withMenuContextDecorator.testutils.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/menu/src/SubMenu/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Menu/SubMenu",component:___WEBPACK_IMPORTED_MODULE_5__.Wd,args:{active:!1,title:"Sub menu",description:"This is a description"},parameters:{default:null,controls:{exclude:["open","setOpen"]},generate:{storyNames:["Default","Active","Focused","Destructive","Disabled","DarkInLightMode"],combineArgs:{darkMode:[!1,!0]},decorator:(0,_testUtils_withMenuContextDecorator_testutils__WEBPACK_IMPORTED_MODULE_4__.l)()}}};var LiveExample={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n          width: 256px;\n          outline: 1px dashed gray;\n        "])))},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_5__.Wd,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{initialOpen:!0}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,null,"Apple"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,null,"Banana"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,{disabled:!0},"Carrot")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_5__.Wd,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{initialOpen:!0,glyph:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,null,"Jalapeño"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,{active:!0},"Habanero"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.sN,{glyph:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Beaker"})},"Ghost")))},parameters:{chromatic:{disableSnapshots:!0}}},Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null)},parameters:{generate:{combineArgs:{description:[void 0,"This is a description"],glyph:[void 0,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})],disabled:[!1,!0]}}}},Active={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null)},args:{active:!0},parameters:{generate:{combineArgs:{description:[void 0,"This is a description"],glyph:[void 0,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})],disabled:[!1,!0]}}}},Focused={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null)},args:{highlighted:!0,disabled:!1},parameters:{generate:{combineArgs:{description:[void 0,"This is a description"],glyph:[void 0,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})],disabled:[!1,!0]}},chromatic:{delay:100}}},Destructive={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null)},args:{variant:_MenuItem__WEBPACK_IMPORTED_MODULE_3__.$e.Destructive,active:!1},parameters:{generate:{combineArgs:{description:[void 0,"This is a description"],glyph:[void 0,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_2__.ZP,{glyph:"Cloud"})],disabled:[!1,!0]}}}};LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div className={css`\n          width: 256px;\n          outline: 1px dashed gray;\n        `}>\n        <SubMenu {...(args as any)} initialOpen>\n          <MenuItem>Apple</MenuItem>\n          <MenuItem>Banana</MenuItem>\n          <MenuItem disabled>Carrot</MenuItem>\n        </SubMenu>\n        <SubMenu {...(args as any)} initialOpen glyph={<Icon glyph="Cloud" />}>\n          <MenuItem>Jalapeño</MenuItem>\n          <MenuItem active>Habanero</MenuItem>\n          <MenuItem glyph={<Icon glyph="Beaker" />}>Ghost</MenuItem>\n        </SubMenu>\n      </div>;\n  },\n  parameters: {\n    chromatic: {\n      disableSnapshots: true\n    }\n  }\n} satisfies StoryObj<typeof SubMenu>',...LiveExample.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <></>,\n  parameters: {\n    generate: {\n      combineArgs: {\n        description: [undefined, 'This is a description'],\n        glyph: [undefined, <Icon glyph=\"Cloud\" />],\n        disabled: [false, true]\n      }\n    }\n  }\n} satisfies StoryObj<typeof MenuItem>",...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  render: () => <></>,\n  args: {\n    active: true\n  },\n  parameters: {\n    generate: {\n      combineArgs: {\n        description: [undefined, 'This is a description'],\n        glyph: [undefined, <Icon glyph=\"Cloud\" />],\n        disabled: [false, true]\n      }\n    }\n  }\n} satisfies StoryObj<typeof MenuItem>",...Active.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:"{\n  render: () => <></>,\n  args: {\n    highlighted: true,\n    disabled: false\n  },\n  parameters: {\n    generate: {\n      combineArgs: {\n        description: [undefined, 'This is a description'],\n        glyph: [undefined, <Icon glyph=\"Cloud\" />],\n        disabled: [false, true]\n      }\n    },\n    chromatic: {\n      delay: 100\n    }\n  }\n} satisfies StoryObj<typeof MenuItem>",...Focused.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:"{\n  render: () => <></>,\n  args: {\n    variant: Variant.Destructive,\n    active: false\n  },\n  parameters: {\n    generate: {\n      combineArgs: {\n        description: [undefined, 'This is a description'],\n        glyph: [undefined, <Icon glyph=\"Cloud\" />],\n        disabled: [false, true]\n      }\n    }\n  }\n} satisfies StoryObj<typeof MenuItem>",...Destructive.parameters?.docs?.source}}};const __namedExportsOrder=["LiveExample","Default","Active","Focused","Destructive"]},"./packages/box/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(null,arguments)}var t=["as"];function a(r,a){if(null!=r.as){var l=r.as,f=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(r,t);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(l,n({},f,{ref:a}))}return null!=r.href?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",n({},r,{ref:a})):react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},r,{ref:a}))}a.displayName="InlineBox";var l=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(a);l.displayName="Box",l.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,prop_types__WEBPACK_IMPORTED_MODULE_1___default().func]),href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}},"./packages/menu/src/SubMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wd:()=>SubMenu});var _templateObject,_templateObject2,_templateObject3,SubMenu_templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),isUndefined=__webpack_require__("./node_modules/lodash/isUndefined.js"),isUndefined_default=__webpack_require__.n(isUndefined),esm=__webpack_require__("./packages/descendants/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),ChevronDown=__webpack_require__("./packages/icon/dist/ChevronDown.js"),ChevronUp=__webpack_require__("./packages/icon/dist/ChevronUp.js"),icon_button_dist_esm=__webpack_require__("./packages/icon-button/dist/esm/index.js"),lib_dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),polymorphic_dist_esm=__webpack_require__("./packages/polymorphic/dist/esm/index.js"),constants=__webpack_require__("./packages/menu/src/constants.ts"),MenuContext=__webpack_require__("./packages/menu/src/MenuContext/index.ts"),InternalMenuItemContent=__webpack_require__("./packages/menu/src/MenuItem/InternalMenuItemContent.tsx"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),MenuItem_styles=__webpack_require__("./packages/menu/src/MenuItem/MenuItem.styles.ts"),styles=__webpack_require__("./packages/menu/src/styles.ts"),subMenuContainerClassName=(0,lib_dist_esm.hy)(constants.l.submenu),subMenuToggleClassName=(0,lib_dist_esm.hy)(constants.l.submenu+"-trigger"),subMenuContainerStyles=(0,dist_esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ","\n  position: relative;\n"])),MenuItem_styles.vR),getSubmenuToggleStyles=function getSubmenuToggleStyles(theme){return(0,dist_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  right: ","px;\n  // Ensure the trigger is centered regardless of element height\n  top: 50%;\n  transform: translateY(-50%);\n  color: ",";\n\n  &:hover {\n    color: ",";\n    &:before {\n      // the icon button hover circle\n      background-color: ",";\n    }\n  }\n"])),tokens_dist_esm.W0[300],styles.co[theme].icon.default,styles.co[theme].icon.hover,styles.co[theme].background.hover)},getSubmenuListStyles=function getSubmenuListStyles(){return(0,dist_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 0;\n  height: max-content;\n  overflow: hidden;\n  transition: max-height ","ms ease-in-out;\n  position: relative;\n"])),tokens_dist_esm.nV.default)},calcChildrenHeight=function calcChildrenHeight(parentRef){return parentRef.current?Array.from(parentRef.current.childNodes).reduce((function(h,child){return h+=child.clientHeight}),0):0},_excluded=["as","open","setOpen","initialOpen","title","onClick","onEntered","onExited","className","children"],SubMenu=(0,polymorphic_dist_esm.$A)((function(_ref,fwdRef){var asProp=_ref.as,openProp=_ref.open,setOpenProp=_ref.setOpen,_ref$initialOpen=_ref.initialOpen,initialOpen=void 0!==_ref$initialOpen&&_ref$initialOpen,title=_ref.title,onClick=_ref.onClick,onEntered=_ref.onEntered,onExited=_ref.onExited,children=(_ref.className,_ref.children),restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useInferredPolymorph=(0,polymorphic_dist_esm.pn)(asProp,restProps,"button"),as=_useInferredPolymorph.as,rest=_useInferredPolymorph.rest,active=rest.active,disabled=rest.disabled,_useMenuContext=(0,MenuContext.Xh)(),highlight=_useMenuContext.highlight,setHighlight=_useMenuContext.setHighlight,theme=_useMenuContext.theme,_useDescendant=(0,esm.Yf)(MenuContext.k0,fwdRef,{active,disabled}),descendantIndex=_useDescendant.index,descendantRef=_useDescendant.ref,descendantId=_useDescendant.id,depth=(0,MenuContext.Hd)().depth,_useControlledState=function useControlledState(initialState,controlledState,setControlledState){var isControlled=(0,lib_dist_esm.$K)(controlledState)&&(0,lib_dist_esm.$K)(setControlledState),_useState=(0,index_js_.useState)(initialState),_useState2=(0,slicedToArray.Z)(_useState,2),internalState=_useState2[0],setInternalState=_useState2[1];return(0,index_js_.useEffect)((function(){!isControlled&&isUndefined_default()(initialState)&&lib_dist_esm.X3.error("Warning: `useControlledState` hook is being used without a `controlledState` or `initialState`.This will cause a React warning when the input changes.Please decide between using a controlled or uncontrolled input element, and provide either a `controlledState` or `initialState` to `useControlledState`")}),[isControlled,initialState]),[isControlled?controlledState:internalState,isControlled?setControlledState:setInternalState]}(initialOpen,openProp,setOpenProp),_useControlledState2=(0,slicedToArray.Z)(_useControlledState,2),open=_useControlledState2[0],setOpen=_useControlledState2[1],toggleMenu=function toggleMenu(state){disabled||(isUndefined_default()(state)?setOpen((function(x){return!x})):setOpen(state))};(0,index_js_.useEffect)((function(){rest.active&&setOpen(!0)}),[rest.active,setOpen]);var submenuRef=(0,index_js_.useRef)(null),submenuTriggerRef=(0,index_js_.useRef)(null),subMenuHeight=function useChildrenHeight(parentRef,deps){var _useState=(0,index_js_.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),height=_useState2[0],setHeight=_useState2[1];return(0,index_js_.useEffect)((function(){setHeight(calcChildrenHeight(parentRef))}),[parentRef,deps]),height}(submenuRef,[open]),ChevronIcon=open?ChevronDown.Z:ChevronUp.Z;return index_js_default().createElement(index_js_default().Fragment,null,index_js_default().createElement("li",{role:"none",className:(0,dist_esm.cx)(subMenuContainerClassName,subMenuContainerStyles),"data-testid":constants.l.submenu,"data-lgid":constants.l.submenu},index_js_default().createElement(InternalMenuItemContent.C,(0,esm_extends.Z)({as,id:descendantId,ref:descendantRef,index:descendantIndex,active,disabled,onClick:function handleClick(e){onClick||rest.href?disabled||null==onClick||onClick(e):toggleMenu()},onKeyDown:function handleKeydown(e){switch(e.key){case lib_dist_esm.Pc.ArrowLeft:toggleMenu(!1);break;case lib_dist_esm.Pc.ArrowRight:toggleMenu(!0)}},"data-id":descendantId},rest),title),index_js_default().createElement(icon_button_dist_esm.Z,{"data-testid":constants.l.submenuToggle,"data-lgid":constants.l.submenuToggle,ref:submenuTriggerRef,"aria-label":open?"Close Sub-menu":"Open Sub-menu",onClick:function handleToggleClick(e){e.preventDefault(),e.nativeEvent.stopImmediatePropagation(),e.stopPropagation(),toggleMenu()},onMouseDownCapture:function handleToggleMouseDown(e){e.preventDefault()},className:(0,dist_esm.cx)(subMenuToggleClassName,getSubmenuToggleStyles(theme))},index_js_default().createElement(ChevronIcon,{role:"presentation"}))),index_js_default().createElement(MenuContext.Bw,{depth:depth+1,hasIcon:!!rest.glyph},index_js_default().createElement(Transition.ZP,{in:open,timeout:{enter:0,exit:150},mountOnEnter:!0,unmountOnExit:!0,onEntered:function handleTransitionEntered(){var _descendantRef$curren,_highlight$ref;descendantId===(null==highlight?void 0:highlight.id)?null===(_descendantRef$curren=descendantRef.current)||void 0===_descendantRef$curren||_descendantRef$curren.focus():null==highlight||null===(_highlight$ref=highlight.ref)||void 0===_highlight$ref||null===(_highlight$ref=_highlight$ref.current)||void 0===_highlight$ref||_highlight$ref.focus();null==onEntered||onEntered()},onExiting:function handleTransitionExiting(){var _highlight$ref2,_submenuRef$current,_descendantRef$curren2,currentHighlightElement=null==highlight||null===(_highlight$ref2=highlight.ref)||void 0===_highlight$ref2?void 0:_highlight$ref2.current;currentHighlightElement&&((null==submenuRef||null===(_submenuRef$current=submenuRef.current)||void 0===_submenuRef$current?void 0:_submenuRef$current.contains(currentHighlightElement))&&(null==setHighlight||setHighlight(descendantId),null==descendantRef||null===(_descendantRef$curren2=descendantRef.current)||void 0===_descendantRef$curren2||_descendantRef$curren2.focus()))},onExited:function handleTransitionExited(){var _highlight$ref3;null==highlight||null===(_highlight$ref3=highlight.ref)||void 0===_highlight$ref3||null===(_highlight$ref3=_highlight$ref3.current)||void 0===_highlight$ref3||_highlight$ref3.focus(),null==onExited||onExited()},nodeRef:submenuRef},(function(state){return index_js_default().createElement("ul",{ref:submenuRef,role:"menu","aria-label":title,"data-state":state,"data-open":open,className:(0,dist_esm.cx)(getSubmenuListStyles(),(0,defineProperty.Z)({},(0,dist_esm.css)(SubMenu_templateObject||(SubMenu_templateObject=(0,taggedTemplateLiteral.Z)(["\n                    max-height: ","px;\n                  "])),subMenuHeight+1),"entered"===state))},children)}))))}));SubMenu.displayName="SubMenu"},"./packages/menu/src/testUtils/withMenuContextDecorator.testutils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>withMenuContext});var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/lib/dist/esm/index.js"),_MenuContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/menu/src/MenuContext/index.ts"),withMenuContext=function withMenuContext(){return function(Instance,ctx){var _ref$args=(null!=ctx?ctx:{args:{darkMode:!1,renderDarkMenu:!1}}).args,darkModeProp=_ref$args.darkMode,renderDarkMenu=_ref$args.renderDarkMenu,darkMode=null!=darkModeProp&&darkModeProp,theme=darkMode?_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__.Q2.Dark:_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__.Q2.Light;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n          max-width: 256px;\n        "])))},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuContext__WEBPACK_IMPORTED_MODULE_3__.pl.Provider,{value:{darkMode,theme,renderDarkMenu}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Instance,null)))}}}}]);