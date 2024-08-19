"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[7183],{"./node_modules/antd/es/_util/hooks/useFlexGapSupport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_styleChecker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/_util/styleChecker.js");const __WEBPACK_DEFAULT_EXPORT__=function(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.A)(_React$useState,2),flexible=_React$useState2[0],setFlexible=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_2__.Pu)())}),[]),flexible}},"./node_modules/antd/es/_util/styleChecker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pu:()=>detectFlexGapSupported,qz:()=>canUseDocElement});var flexGapSupported,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rc-util/es/Dom/canUseDom.js"),canUseDocElement=function canUseDocElement(){return(0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__.A)()&&window.document.documentElement},detectFlexGapSupported=function detectFlexGapSupported(){if(!canUseDocElement())return!1;if(void 0!==flexGapSupported)return flexGapSupported;var flex=document.createElement("div");return flex.style.display="flex",flex.style.flexDirection="column",flex.style.rowGap="1px",flex.appendChild(document.createElement("div")),flex.appendChild(document.createElement("div")),document.body.appendChild(flex),flexGapSupported=1===flex.scrollHeight,document.body.removeChild(flex),flexGapSupported}},"./components/common/UserDropdown/UserDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UserDropdown:()=>UserDropdown});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dropdown=__webpack_require__("./node_modules/antd/es/dropdown/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/recoil/es/index.js"),react_hotkeys_hook_esm=__webpack_require__("./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ClientConfigStore=__webpack_require__("./components/stores/ClientConfigStore.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UserDropdown_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/UserDropdown/UserDropdown.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UserDropdown_module.A,options);const UserDropdown_UserDropdown_module=UserDropdown_module.A&&UserDropdown_module.A.locals?UserDropdown_module.A.locals:void 0;var ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),__jsx=react.createElement,CaretDownOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7997)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CaretDownOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CaretDownOutlined.js"]}}}),EditOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(740)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EditOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/EditOutlined.js"]}}}),LockOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(3191)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/LockOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/LockOutlined.js"]}}}),ShrinkOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7145)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ShrinkOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ShrinkOutlined.js"]}}}),ExpandAltOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(5153)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ExpandAltOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ExpandAltOutlined.js"]}}}),MessageOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7437)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/MessageOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/MessageOutlined.js"]}}}),UserOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(1511)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/UserOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/UserOutlined.js"]}}}),Modal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(8275),__webpack_require__.e(6271)]).then(__webpack_require__.bind(__webpack_require__,"./components/ui/Modal/Modal.tsx")).then((function(mod){return mod.Modal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/ui/Modal/Modal.tsx"]}}}),NameChangeModal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(6897),__webpack_require__.e(6492),__webpack_require__.e(284),__webpack_require__.e(5732),__webpack_require__.e(8)]).then(__webpack_require__.bind(__webpack_require__,"./components/modals/NameChangeModal/NameChangeModal.tsx")).then((function(mod){return mod.NameChangeModal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/modals/NameChangeModal/NameChangeModal.tsx"]}}}),AuthModal=dynamic_default()((function(){return Promise.all([__webpack_require__.e(4241),__webpack_require__.e(6897),__webpack_require__.e(9209),__webpack_require__.e(1052),__webpack_require__.e(3184),__webpack_require__.e(9552),__webpack_require__.e(7521)]).then(__webpack_require__.bind(__webpack_require__,"./components/modals/AuthModal/AuthModal.tsx")).then((function(mod){return mod.AuthModal}))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./components/modals/AuthModal/AuthModal.tsx"]}}}),UserDropdown=function UserDropdown(_ref){var id=_ref.id,_ref$username=_ref.username,defaultUsername=void 0===_ref$username?void 0:_ref$username,_ref$hideTitleOnMobil=_ref.hideTitleOnMobile,hideTitleOnMobile=void 0!==_ref$hideTitleOnMobil&&_ref$hideTitleOnMobil,_ref$showToggleChatOp=_ref.showToggleChatOption,showHideChatOption=void 0===_ref$showToggleChatOp||_ref$showToggleChatOp,_useState=(0,react.useState)(!1),showNameChangeModal=_useState[0],setShowNameChangeModal=_useState[1],_useState2=(0,react.useState)(!1),showAuthModal=_useState2[0],setShowAuthModal=_useState2[1],_useRecoilState=(0,es.L4)(ClientConfigStore.t2),_useRecoilState2=(0,slicedToArray.A)(_useRecoilState,2),chatState=_useRecoilState2[0],setChatState=_useRecoilState2[1],_useState3=(0,react.useState)(null),popupWindow=_useState3[0],setPopupWindow=_useState3[1],appState=(0,es.vc)(ClientConfigStore.uy),toggleChatVisibility=function toggleChatVisibility(){showHideChatOption&&setChatState(chatState===ClientConfigStore.ao.VISIBLE?ClientConfigStore.ao.HIDDEN:ClientConfigStore.ao.VISIBLE)},closeChangeNameModal=function closeChangeNameModal(){setShowNameChangeModal(!1)},closeChatPopup=function closeChatPopup(){popupWindow&&popupWindow.close(),setPopupWindow(null),setChatState(ClientConfigStore.ao.VISIBLE)},canShowHideChat=showHideChatOption&&appState.chatAvailable&&(chatState===ClientConfigStore.ao.HIDDEN||chatState===ClientConfigStore.ao.VISIBLE),canShowChatPopup=showHideChatOption&&appState.chatAvailable&&(chatState===ClientConfigStore.ao.HIDDEN||chatState===ClientConfigStore.ao.VISIBLE||chatState===ClientConfigStore.ao.POPPED_OUT);(0,react_hotkeys_hook_esm.vC)("c",toggleChatVisibility,{enableOnContentEditable:!1},[chatState===ClientConfigStore.ao.VISIBLE]);var currentUser=(0,es.vc)(ClientConfigStore.gN);if(!currentUser)return null;var displayName=currentUser.displayName,username=defaultUsername||displayName,items=[{key:0,icon:__jsx(EditOutlined,null),label:"Change name",onClick:function handleChangeName(){setShowNameChangeModal(!0)}},{key:1,icon:__jsx(LockOutlined,null),label:"Authenticate",onClick:function onClick(){return setShowAuthModal(!0)}}];return canShowHideChat&&items.push({key:3,"aria-expanded":chatState===ClientConfigStore.ao.VISIBLE,className:UserDropdown_UserDropdown_module.chatToggle,icon:__jsx(MessageOutlined,null),label:chatState===ClientConfigStore.ao.VISIBLE?"Hide Chat":"Show Chat",onClick:toggleChatVisibility}),canShowChatPopup&&items.push({key:4,icon:__jsx(popupWindow?ShrinkOutlined:ExpandAltOutlined,null),label:popupWindow?"Put chat back":"Pop out chat",onClick:popupWindow?closeChatPopup:function openChatPopup(){closeChatPopup();var w=window.open("/embed/chat/readwrite","_blank","popup");w.addEventListener("beforeunload",closeChatPopup),setPopupWindow(w),setChatState(ClientConfigStore.ao.POPPED_OUT)}}),__jsx(react_error_boundary_esm.tH,{fallbackRender:function fallbackRender(_ref2){var error=_ref2.error,resetErrorBoundary=_ref2.resetErrorBoundary;return __jsx(ComponentError.O,{componentName:"UserDropdown",message:error.message,retryFunction:resetErrorBoundary})}},__jsx("div",{className:UserDropdown_UserDropdown_module.root},__jsx(dropdown.A,{menu:{items},trigger:["click"]},__jsx(es_button.A,{id,type:"primary",icon:__jsx(UserOutlined,{className:UserDropdown_UserDropdown_module.userIcon})},__jsx("span",{className:classnames_default()([UserDropdown_UserDropdown_module.username,hideTitleOnMobile&&UserDropdown_UserDropdown_module.hideTitleOnMobile])},username),__jsx(CaretDownOutlined,null))),__jsx(Modal,{title:"Change Chat Display Name",open:showNameChangeModal,handleCancel:closeChangeNameModal},__jsx(NameChangeModal,{closeModal:closeChangeNameModal})),__jsx(Modal,{title:"Authenticate",open:showAuthModal,handleCancel:function handleCancel(){return setShowAuthModal(!1)}},__jsx(AuthModal,null))))};UserDropdown.displayName="UserDropdown";try{UserDropdown.displayName="UserDropdown",UserDropdown.__docgenInfo={description:"",displayName:"UserDropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},hideTitleOnMobile:{defaultValue:{value:"false"},description:"",name:"hideTitleOnMobile",required:!1,type:{name:"boolean"}},showToggleChatOption:{defaultValue:null,description:"",name:"showToggleChatOption",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/common/UserDropdown/UserDropdown.tsx#UserDropdown"]={docgenInfo:UserDropdown.__docgenInfo,name:"UserDropdown",path:"components/common/UserDropdown/UserDropdown.tsx#UserDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/UserDropdown/UserDropdown.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sLuCbi6JWiNqVQPBhdkc button{border:none}.sLuCbi6JWiNqVQPBhdkc button .fwkFjxy3LBuWIFgvuzIG .B_VIR2nSMmaB6bBb1Ztn{color:var(--theme-unknown-2)}.sLuCbi6JWiNqVQPBhdkc .j7YrcAYIbeBwlZKoYSg4{display:inline}@media only screen and (width >= 768px){.sLuCbi6JWiNqVQPBhdkc .j7YrcAYIbeBwlZKoYSg4{font-weight:600;font-size:.8rem}}@media only screen and (width <= 481px){.sLuCbi6JWiNqVQPBhdkc .uEX5tsPYIN9doIy15WiW{display:none}}@media only screen and (width <= 768px){.Q06REHxPXOszc5biP0kv{display:none}}","",{version:3,sources:["webpack://./components/common/UserDropdown/UserDropdown.module.scss","webpack://./styles/mixins.scss"],names:[],mappings:"AAGE,6BACE,WAAA,CAGE,yEACE,4BAAA,CAKN,4CACE,cAAA,CCNA,wCDKF,4CAII,eAAA,CACA,eAAA,CAAA,CCGF,wCDCF,4CAEI,YAAA,CAAA,CCTF,wCDcJ,sBAEI,YAAA,CAAA",sourcesContent:["@import '../../../styles/mixins';\n\n.root {\n  button {\n    border: none;\n\n    .ant-space {\n      .ant-space-item {\n        color: var(--theme-unknown-2);\n      }\n    }\n  }\n\n  .username {\n    display: inline;\n\n    @include screen(desktop) {\n      font-weight: 600;\n      font-size: 0.8rem;\n    }\n  }\n\n  .hideTitleOnMobile {\n    @include screen(mobile) {\n      display: none;\n    }\n  }\n}\n\n.chatToggle {\n  @include screen(tablet) {\n    display: none;\n  }\n}\n","@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin screen($breakpoint) { \n    @if $breakpoint == desktop {    \n    @media only screen and (width >= 768px) {\n      @content;\n    }\n  }\n\n  // tablet will also apply to mobile as there is no cut-off for min-width, however changing this now could break CSS all over the site.\n  @if $breakpoint == tablet {\n    @media only screen and (width <= 768px) {\n      @content;\n    }\n  }\n\n  @if $breakpoint == mobile {\n    @media only screen and (width <= 481px) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"sLuCbi6JWiNqVQPBhdkc",antSpace:"fwkFjxy3LBuWIFgvuzIG",antSpaceItem:"B_VIR2nSMmaB6bBb1Ztn",username:"j7YrcAYIbeBwlZKoYSg4",hideTitleOnMobile:"uEX5tsPYIN9doIy15WiW",chatToggle:"Q06REHxPXOszc5biP0kv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tH:()=>ErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(){const{error}=this.state;if(null!==error){for(var _this$props$onReset,_this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null===(_this$props$onReset=(_this$props=this.props).onReset)||void 0===_this$props$onReset||_this$props$onReset.call(_this$props,{args,reason:"imperative-api"}),this.setState(initialState)}}componentDidCatch(error,info){var _this$props$onError,_this$props2;null===(_this$props$onError=(_this$props2=this.props).onError)||void 0===_this$props$onError||_this$props$onError.call(_this$props2,error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;var _this$props$onReset2,_this$props3;didCatch&&null!==prevState.error&&function hasArrayChanged(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(null===(_this$props$onReset2=(_this$props3=this.props).onReset)||void 0===_this$props$onReset2||_this$props$onReset2.call(_this$props3,{next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else if(FallbackComponent)childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props);else{if(null!==fallback&&!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))throw error;childToRender=fallback}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}},"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vC:()=>useHotkeys});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=(__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),__webpack_require__("./node_modules/console-browserify/index.js"));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var reservedModifierKeywords=["shift","alt","meta","mod","ctrl"],mappedKeys={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function mapKey(key){return(mappedKeys[key]||key).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function parseKeysHookInput(keys,splitKey){return void 0===splitKey&&(splitKey=","),keys.split(splitKey)}function parseHotkey(hotkey,combinationKey,description){void 0===combinationKey&&(combinationKey="+");var keys=hotkey.toLocaleLowerCase().split(combinationKey).map((function(k){return mapKey(k)}));return _extends({},{alt:keys.includes("alt"),ctrl:keys.includes("ctrl")||keys.includes("control"),shift:keys.includes("shift"),meta:keys.includes("meta"),mod:keys.includes("mod")},{keys:keys.filter((function(k){return!reservedModifierKeywords.includes(k)})),description})}"undefined"!=typeof document&&(document.addEventListener("keydown",(function(e){void 0!==e.key&&pushToCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])})),document.addEventListener("keyup",(function(e){void 0!==e.key&&removeFromCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])}))),"undefined"!=typeof window&&window.addEventListener("blur",(function(){currentlyPressedKeys.clear()}));var currentlyPressedKeys=new Set;function isReadonlyArray(value){return Array.isArray(value)}function pushToCurrentlyPressedKeys(key){var hotkeyArray=Array.isArray(key)?key:[key];currentlyPressedKeys.has("meta")&&currentlyPressedKeys.forEach((function(key){return!function isHotkeyModifier(key){return reservedModifierKeywords.includes(key)}(key)&&currentlyPressedKeys.delete(key.toLowerCase())})),hotkeyArray.forEach((function(hotkey){return currentlyPressedKeys.add(hotkey.toLowerCase())}))}function removeFromCurrentlyPressedKeys(key){var hotkeyArray=Array.isArray(key)?key:[key];"meta"===key?currentlyPressedKeys.clear():hotkeyArray.forEach((function(hotkey){return currentlyPressedKeys.delete(hotkey.toLowerCase())}))}function isHotkeyEnabledOnTag(_ref,enabledOnTags){var target=_ref.target;void 0===enabledOnTags&&(enabledOnTags=!1);var targetTagName=target&&target.tagName;return isReadonlyArray(enabledOnTags)?Boolean(targetTagName&&enabledOnTags&&enabledOnTags.some((function(tag){return tag.toLowerCase()===targetTagName.toLowerCase()}))):Boolean(targetTagName&&enabledOnTags&&!0===enabledOnTags)}var isHotkeyMatchingKeyboardEvent=function isHotkeyMatchingKeyboardEvent(e,hotkey,ignoreModifiers){void 0===ignoreModifiers&&(ignoreModifiers=!1);var alt=hotkey.alt,meta=hotkey.meta,mod=hotkey.mod,shift=hotkey.shift,ctrl=hotkey.ctrl,keys=hotkey.keys,pressedKeyUppercase=e.key,code=e.code,ctrlKey=e.ctrlKey,metaKey=e.metaKey,shiftKey=e.shiftKey,altKey=e.altKey,keyCode=mapKey(code),pressedKey=pressedKeyUppercase.toLowerCase();if(!(null!=keys&&keys.includes(keyCode)||null!=keys&&keys.includes(pressedKey)||["ctrl","control","unknown","meta","alt","shift","os"].includes(keyCode)))return!1;if(!ignoreModifiers){if(alt===!altKey&&"alt"!==pressedKey)return!1;if(shift===!shiftKey&&"shift"!==pressedKey)return!1;if(mod){if(!metaKey&&!ctrlKey)return!1}else{if(meta===!metaKey&&"meta"!==pressedKey&&"os"!==pressedKey)return!1;if(ctrl===!ctrlKey&&"ctrl"!==pressedKey&&"control"!==pressedKey)return!1}}return!(!keys||1!==keys.length||!keys.includes(pressedKey)&&!keys.includes(keyCode))||(keys?function isHotkeyPressed(key,splitKey){return void 0===splitKey&&(splitKey=","),(isReadonlyArray(key)?key:key.split(splitKey)).every((function(hotkey){return currentlyPressedKeys.has(hotkey.trim().toLowerCase())}))}(keys):!keys)},BoundHotkeysProxyProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useBoundHotkeysProxy=function useBoundHotkeysProxy(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BoundHotkeysProxyProvider)};function deepEqual(x,y){return x&&y&&"object"==typeof x&&"object"==typeof y?Object.keys(x).length===Object.keys(y).length&&Object.keys(x).reduce((function(isEqual,key){return isEqual&&deepEqual(x[key],y[key])}),!0):x===y}var HotkeysContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function toggleScope(){},enableScope:function enableScope(){},disableScope:function disableScope(){}}),useHotkeysContext=function useHotkeysContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HotkeysContext)};var stopPropagation=function stopPropagation(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},useSafeLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function useHotkeys(keys,callback,options,dependencies){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),hasTriggeredRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),_options=options instanceof Array?dependencies instanceof Array?void 0:dependencies:options,_keys=isReadonlyArray(keys)?keys.join(null==_options?void 0:_options.splitKey):keys,_deps=options instanceof Array?options:dependencies instanceof Array?dependencies:void 0,memoisedCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback,null!=_deps?_deps:[]),cbRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(memoisedCB);cbRef.current=_deps?memoisedCB:callback;var memoisedOptions=function useDeepEqualMemo(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);return deepEqual(ref.current,value)||(ref.current=value),ref.current}(_options),enabledScopes=useHotkeysContext().enabledScopes,proxy=useBoundHotkeysProxy();return useSafeLayoutEffect((function(){if(!1!==(null==memoisedOptions?void 0:memoisedOptions.enabled)&&function isScopeActive(activeScopes,scopes){return 0===activeScopes.length&&scopes?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!scopes||activeScopes.some((function(scope){return scopes.includes(scope)}))||activeScopes.includes("*")}(enabledScopes,null==memoisedOptions?void 0:memoisedOptions.scopes)){var listener=function listener(e,isKeyUp){var _e$target;if(void 0===isKeyUp&&(isKeyUp=!1),!function isKeyboardEventTriggeredByInput(ev){return isHotkeyEnabledOnTag(ev,["input","textarea","select"])}(e)||isHotkeyEnabledOnTag(e,null==memoisedOptions?void 0:memoisedOptions.enableOnFormTags)){if(null!==ref.current){var rootNode=ref.current.getRootNode();if((rootNode instanceof Document||rootNode instanceof ShadowRoot)&&rootNode.activeElement!==ref.current&&!ref.current.contains(rootNode.activeElement))return void stopPropagation(e)}(null==(_e$target=e.target)||!_e$target.isContentEditable||null!=memoisedOptions&&memoisedOptions.enableOnContentEditable)&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){var _hotkey$keys,hotkey=parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey);if(isHotkeyMatchingKeyboardEvent(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.ignoreModifiers)||null!=(_hotkey$keys=hotkey.keys)&&_hotkey$keys.includes("*")){if(null!=memoisedOptions&&null!=memoisedOptions.ignoreEventWhen&&memoisedOptions.ignoreEventWhen(e))return;if(isKeyUp&&hasTriggeredRef.current)return;if(function maybePreventDefault(e,hotkey,preventDefault){("function"==typeof preventDefault&&preventDefault(e,hotkey)||!0===preventDefault)&&e.preventDefault()}(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.preventDefault),!function isHotkeyEnabled(e,hotkey,enabled){return"function"==typeof enabled?enabled(e,hotkey):!0===enabled||void 0===enabled}(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.enabled))return void stopPropagation(e);cbRef.current(e,hotkey),isKeyUp||(hasTriggeredRef.current=!0)}}))}},handleKeyDown=function handleKeyDown(event){void 0!==event.key&&(pushToCurrentlyPressedKeys(mapKey(event.code)),(void 0===(null==memoisedOptions?void 0:memoisedOptions.keydown)&&!0!==(null==memoisedOptions?void 0:memoisedOptions.keyup)||null!=memoisedOptions&&memoisedOptions.keydown)&&listener(event))},handleKeyUp=function handleKeyUp(event){void 0!==event.key&&(removeFromCurrentlyPressedKeys(mapKey(event.code)),hasTriggeredRef.current=!1,null!=memoisedOptions&&memoisedOptions.keyup&&listener(event,!0))},domNode=ref.current||(null==_options?void 0:_options.document)||document;return domNode.addEventListener("keyup",handleKeyUp),domNode.addEventListener("keydown",handleKeyDown),proxy&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){return proxy.addHotkey(parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey,null==memoisedOptions?void 0:memoisedOptions.description))})),function(){domNode.removeEventListener("keyup",handleKeyUp),domNode.removeEventListener("keydown",handleKeyDown),proxy&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){return proxy.removeHotkey(parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey,null==memoisedOptions?void 0:memoisedOptions.description))}))}}}),[_keys,memoisedOptions,enabledScopes]),ref}}}]);