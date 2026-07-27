(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function j0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ad={exports:{}},ci={},Td={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function M3(){if(lf)return Be;lf=1;var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,C={};function L(T,z,ne){this.props=T,this.context=z,this.refs=C,this.updater=ne||M}L.prototype.isReactComponent={},L.prototype.setState=function(T,z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,z,"setState")},L.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function N(){}N.prototype=L.prototype;function j(T,z,ne){this.props=T,this.context=z,this.refs=C,this.updater=ne||M}var S=j.prototype=new N;S.constructor=j,_(S,L.prototype),S.isPureReactComponent=!0;var P=Array.isArray,$=Object.prototype.hasOwnProperty,R={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function E(T,z,ne){var U,X={},se=null,B=null;if(z!=null)for(U in z.ref!==void 0&&(B=z.ref),z.key!==void 0&&(se=""+z.key),z)$.call(z,U)&&!A.hasOwnProperty(U)&&(X[U]=z[U]);var O=arguments.length-2;if(O===1)X.children=ne;else if(1<O){for(var ae=Array(O),ge=0;ge<O;ge++)ae[ge]=arguments[ge+2];X.children=ae}if(T&&T.defaultProps)for(U in O=T.defaultProps,O)X[U]===void 0&&(X[U]=O[U]);return{$$typeof:e,type:T,key:se,ref:B,props:X,_owner:R.current}}function D(T,z){return{$$typeof:e,type:T.type,key:z,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function Z(T){var z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return z[ne]})}var H=/\/+/g;function Y(T,z){return typeof T=="object"&&T!==null&&T.key!=null?Z(""+T.key):z.toString(36)}function ee(T,z,ne,U,X){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var B=!1;if(T===null)B=!0;else switch(se){case"string":case"number":B=!0;break;case"object":switch(T.$$typeof){case e:case a:B=!0}}if(B)return B=T,X=X(B),T=U===""?"."+Y(B,0):U,P(X)?(ne="",T!=null&&(ne=T.replace(H,"$&/")+"/"),ee(X,z,ne,"",function(ge){return ge})):X!=null&&(G(X)&&(X=D(X,ne+(!X.key||B&&B.key===X.key?"":(""+X.key).replace(H,"$&/")+"/")+T)),z.push(X)),1;if(B=0,U=U===""?".":U+":",P(T))for(var O=0;O<T.length;O++){se=T[O];var ae=U+Y(se,O);B+=ee(se,z,ne,ae,X)}else if(ae=k(T),typeof ae=="function")for(T=ae.call(T),O=0;!(se=T.next()).done;)se=se.value,ae=U+Y(se,O++),B+=ee(se,z,ne,ae,X);else if(se==="object")throw z=String(T),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return B}function oe(T,z,ne){if(T==null)return T;var U=[],X=0;return ee(T,U,"","",function(se){return z.call(ne,se,X++)}),U}function ce(T){if(T._status===-1){var z=T._result;z=z(),z.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=z)}if(T._status===1)return T._result.default;throw T._result}var de={current:null},K={transition:null},F={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:K,ReactCurrentOwner:R};function q(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:oe,forEach:function(T,z,ne){oe(T,function(){z.apply(this,arguments)},ne)},count:function(T){var z=0;return oe(T,function(){z++}),z},toArray:function(T){return oe(T,function(z){return z})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Be.Component=L,Be.Fragment=i,Be.Profiler=l,Be.PureComponent=j,Be.StrictMode=s,Be.Suspense=v,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Be.act=q,Be.cloneElement=function(T,z,ne){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var U=_({},T.props),X=T.key,se=T.ref,B=T._owner;if(z!=null){if(z.ref!==void 0&&(se=z.ref,B=R.current),z.key!==void 0&&(X=""+z.key),T.type&&T.type.defaultProps)var O=T.type.defaultProps;for(ae in z)$.call(z,ae)&&!A.hasOwnProperty(ae)&&(U[ae]=z[ae]===void 0&&O!==void 0?O[ae]:z[ae])}var ae=arguments.length-2;if(ae===1)U.children=ne;else if(1<ae){O=Array(ae);for(var ge=0;ge<ae;ge++)O[ge]=arguments[ge+2];U.children=O}return{$$typeof:e,type:T.type,key:X,ref:se,props:U,_owner:B}},Be.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},Be.createElement=E,Be.createFactory=function(T){var z=E.bind(null,T);return z.type=T,z},Be.createRef=function(){return{current:null}},Be.forwardRef=function(T){return{$$typeof:m,render:T}},Be.isValidElement=G,Be.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:ce}},Be.memo=function(T,z){return{$$typeof:x,type:T,compare:z===void 0?null:z}},Be.startTransition=function(T){var z=K.transition;K.transition={};try{T()}finally{K.transition=z}},Be.unstable_act=q,Be.useCallback=function(T,z){return de.current.useCallback(T,z)},Be.useContext=function(T){return de.current.useContext(T)},Be.useDebugValue=function(){},Be.useDeferredValue=function(T){return de.current.useDeferredValue(T)},Be.useEffect=function(T,z){return de.current.useEffect(T,z)},Be.useId=function(){return de.current.useId()},Be.useImperativeHandle=function(T,z,ne){return de.current.useImperativeHandle(T,z,ne)},Be.useInsertionEffect=function(T,z){return de.current.useInsertionEffect(T,z)},Be.useLayoutEffect=function(T,z){return de.current.useLayoutEffect(T,z)},Be.useMemo=function(T,z){return de.current.useMemo(T,z)},Be.useReducer=function(T,z,ne){return de.current.useReducer(T,z,ne)},Be.useRef=function(T){return de.current.useRef(T)},Be.useState=function(T){return de.current.useState(T)},Be.useSyncExternalStore=function(T,z,ne){return de.current.useSyncExternalStore(T,z,ne)},Be.useTransition=function(){return de.current.useTransition()},Be.version="18.3.1",Be}var cf;function Fu(){return cf||(cf=1,Td.exports=M3()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function $3(){if(df)return ci;df=1;var e=Fu(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,v,x){var y,w={},k=null,M=null;x!==void 0&&(k=""+x),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(M=v.ref);for(y in v)s.call(v,y)&&!d.hasOwnProperty(y)&&(w[y]=v[y]);if(m&&m.defaultProps)for(y in v=m.defaultProps,v)w[y]===void 0&&(w[y]=v[y]);return{$$typeof:a,type:m,key:k,ref:M,props:w,_owner:l.current}}return ci.Fragment=i,ci.jsx=p,ci.jsxs=p,ci}var uf;function N3(){return uf||(uf=1,Ad.exports=$3()),Ad.exports}var n=N3(),g=Fu();const ln=j0(g);var Vs={},Id={exports:{}},nn={},Ed={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function R3(){return pf||(pf=1,(function(e){function a(K,F){var q=K.length;K.push(F);e:for(;0<q;){var T=q-1>>>1,z=K[T];if(0<l(z,F))K[T]=F,K[q]=z,q=T;else break e}}function i(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var F=K[0],q=K.pop();if(q!==F){K[0]=q;e:for(var T=0,z=K.length,ne=z>>>1;T<ne;){var U=2*(T+1)-1,X=K[U],se=U+1,B=K[se];if(0>l(X,q))se<z&&0>l(B,X)?(K[T]=B,K[se]=q,T=se):(K[T]=X,K[U]=q,T=U);else if(se<z&&0>l(B,q))K[T]=B,K[se]=q,T=se;else break e}}return F}function l(K,F){var q=K.sortIndex-F.sortIndex;return q!==0?q:K.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();e.unstable_now=function(){return p.now()-m}}var v=[],x=[],y=1,w=null,k=3,M=!1,_=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(K){for(var F=i(x);F!==null;){if(F.callback===null)s(x);else if(F.startTime<=K)s(x),F.sortIndex=F.expirationTime,a(v,F);else break;F=i(x)}}function P(K){if(C=!1,S(K),!_)if(i(v)!==null)_=!0,ce($);else{var F=i(x);F!==null&&de(P,F.startTime-K)}}function $(K,F){_=!1,C&&(C=!1,N(E),E=-1),M=!0;var q=k;try{for(S(F),w=i(v);w!==null&&(!(w.expirationTime>F)||K&&!Z());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var z=T(w.expirationTime<=F);F=e.unstable_now(),typeof z=="function"?w.callback=z:w===i(v)&&s(v),S(F)}else s(v);w=i(v)}if(w!==null)var ne=!0;else{var U=i(x);U!==null&&de(P,U.startTime-F),ne=!1}return ne}finally{w=null,k=q,M=!1}}var R=!1,A=null,E=-1,D=5,G=-1;function Z(){return!(e.unstable_now()-G<D)}function H(){if(A!==null){var K=e.unstable_now();G=K;var F=!0;try{F=A(!0,K)}finally{F?Y():(R=!1,A=null)}}else R=!1}var Y;if(typeof j=="function")Y=function(){j(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=H,Y=function(){oe.postMessage(null)}}else Y=function(){L(H,0)};function ce(K){A=K,R||(R=!0,Y())}function de(K,F){E=L(function(){K(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){_||M||(_=!0,ce($))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(v)},e.unstable_next=function(K){switch(k){case 1:case 2:case 3:var F=3;break;default:F=k}var q=k;k=F;try{return K()}finally{k=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,F){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var q=k;k=K;try{return F()}finally{k=q}},e.unstable_scheduleCallback=function(K,F,q){var T=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?T+q:T):q=T,K){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=q+z,K={id:y++,callback:F,priorityLevel:K,startTime:q,expirationTime:z,sortIndex:-1},q>T?(K.sortIndex=q,a(x,K),i(v)===null&&K===i(x)&&(C?(N(E),E=-1):C=!0,de(P,q-T))):(K.sortIndex=z,a(v,K),_||M||(_=!0,ce($))),K},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(K){var F=k;return function(){var q=k;k=F;try{return K.apply(this,arguments)}finally{k=q}}}})(Pd)),Pd}var hf;function L3(){return hf||(hf=1,Ed.exports=R3()),Ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function A3(){if(ff)return nn;ff=1;var e=Fu(),a=L3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){p(t,r),p(t+"Capture",r)}function p(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return v.call(w,t)?!0:v.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function M(t,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,r,o,c){if(r===null||typeof r>"u"||M(t,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(t,r,o,c,u,h,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=b}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){L[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];L[r]=new C(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){L[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){L[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){L[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){L[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){L[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){L[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){L[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function j(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(N,j);L[r]=new C(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(N,j);L[r]=new C(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(N,j);L[r]=new C(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){L[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),L.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){L[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,o,c){var u=L.hasOwnProperty(r)?L[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,o,u,c)&&(o=null),c||u===null?k(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(r=u.attributeName,c=u.attributeNamespace,o===null?t.removeAttribute(r):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?t.setAttributeNS(c,r,o):t.setAttribute(r,o))))}var P=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),R=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),K=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,T;function z(t){if(T===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var ne=!1;function U(t,r){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var c=te}Reflect.construct(t,[],r)}else{try{r.call()}catch(te){c=te}t.call(r.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),h=c.stack.split(`
`),b=u.length-1,I=h.length-1;1<=b&&0<=I&&u[b]!==h[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==h[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==h[I]){var W=`
`+u[b].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=b&&0<=I);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?z(t):""}function X(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case R:return"Portal";case D:return"Profiler";case E:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case H:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oe:return r=t.displayName||null,r!==null?r:se(t.type)||"Memo";case ce:r=t._payload,t=t._init;try{return se(t(r))}catch{}}return null}function B(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function O(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ge(t){var r=ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,h.call(this,b)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ue(t){t._valueTracker||(t._valueTracker=ge(t))}function xe(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return t&&(c=ae(t)?t.checked?"true":"false":t.value),t=c,t!==o?(r.setValue(t),!0):!1}function le(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ye(t,r){var o=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ce(t,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=O(r.value!=null?r.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ae(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function Ne(t,r){Ae(t,r);var o=O(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?_e(t,r.type,o):r.hasOwnProperty("defaultValue")&&_e(t,r.type,O(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Pe(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function _e(t,r,o){(r!=="number"||le(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ue=Array.isArray;function Ge(t,r,o,c){if(t=t.options,r){r={};for(var u=0;u<o.length;u++)r["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=r.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&c&&(t[o].defaultSelected=!0)}else{for(o=""+O(o),r=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function St(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oe(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(i(92));if(Ue(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:O(o)}}function ot(t,r){var o=O(r.value),c=O(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function ht(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Vt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Vt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gt,Kn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,o,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Gt=Gt||document.createElement("div"),Gt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function bn(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},En=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(t){En.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),ir[r]=ir[t]})});function Ao(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ir.hasOwnProperty(t)&&ir[t]?(""+r).trim():r+"px"}function Te(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=Ao(o,r[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,u):t[o]=u}}var tt=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,r){if(r){if(tt[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function gt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sr=null;function lr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ro=null,jr=null,cr=null;function $a(t){if(t=Ya(t)){if(typeof ro!="function")throw Error(i(280));var r=t.stateNode;r&&(r=ss(r),ro(t.stateNode,t.type,r))}}function Fi(t){jr?cr?cr.push(t):cr=[t]:jr=t}function Qn(){if(jr){var t=jr,r=cr;if(cr=jr=null,$a(t),r)for(t=0;t<r.length;t++)$a(r[t])}}function Mt(t,r){return t(r)}function Di(){}var re=!1;function me(t,r,o){if(re)return t(r,o);re=!0;try{return Mt(t,r,o)}finally{re=!1,(jr!==null||cr!==null)&&(Di(),Qn())}}function we(t,r){var o=t.stateNode;if(o===null)return null;var c=ss(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Ze=!1;if(m)try{var Xe={};Object.defineProperty(Xe,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",Xe,Xe),window.removeEventListener("test",Xe,Xe)}catch{Ze=!1}function kn(t,r,o,c,u,h,b,I,W){var te=Array.prototype.slice.call(arguments,3);try{r.apply(o,te)}catch(he){this.onError(he)}}var Pn=!1,Zn=null,oo=!1,Na=null,Iv={onError:function(t){Pn=!0,Zn=t}};function Ev(t,r,o,c,u,h,b,I,W){Pn=!1,Zn=null,kn.apply(Iv,arguments)}function Pv(t,r,o,c,u,h,b,I,W){if(Ev.apply(this,arguments),Pn){if(Pn){var te=Zn;Pn=!1,Zn=null}else throw Error(i(198));oo||(oo=!0,Na=te)}}function ao(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Rp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Lp(t){if(ao(t)!==t)throw Error(i(188))}function zv(t){var r=t.alternate;if(!r){if(r=ao(t),r===null)throw Error(i(188));return r!==t?null:t}for(var o=t,c=r;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Lp(u),t;if(h===c)return Lp(u),r;h=h.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=h;else{for(var b=!1,I=u.child;I;){if(I===o){b=!0,o=u,c=h;break}if(I===c){b=!0,c=u,o=h;break}I=I.sibling}if(!b){for(I=h.child;I;){if(I===o){b=!0,o=h,c=u;break}if(I===c){b=!0,c=h,o=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:r}function Ap(t){return t=zv(t),t!==null?Tp(t):null}function Tp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Tp(t);if(r!==null)return r;t=t.sibling}return null}var Ip=a.unstable_scheduleCallback,Ep=a.unstable_cancelCallback,Ov=a.unstable_shouldYield,Fv=a.unstable_requestPaint,vt=a.unstable_now,Dv=a.unstable_getCurrentPriorityLevel,Xl=a.unstable_ImmediatePriority,Pp=a.unstable_UserBlockingPriority,Bi=a.unstable_NormalPriority,Bv=a.unstable_LowPriority,zp=a.unstable_IdlePriority,Wi=null,Xn=null;function Wv(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Wi,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:qv,Hv=Math.log,Uv=Math.LN2;function qv(t){return t>>>=0,t===0?32:31-(Hv(t)/Uv|0)|0}var Hi=64,Ui=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qi(t,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,u=t.suspendedLanes,h=t.pingedLanes,b=o&268435455;if(b!==0){var I=b&~u;I!==0?c=Ra(I):(h&=b,h!==0&&(c=Ra(h)))}else b=o&~u,b!==0?c=Ra(b):h!==0&&(c=Ra(h));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)o=31-zn(r),u=1<<o,c|=t[o],r&=~u;return c}function Vv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(t,r){for(var o=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var b=31-zn(h),I=1<<b,W=u[b];W===-1?((I&o)===0||(I&c)!==0)&&(u[b]=Vv(I,r)):W<=r&&(t.expiredLanes|=I),h&=~I}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Op(){var t=Hi;return Hi<<=1,(Hi&4194240)===0&&(Hi=64),t}function ec(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function La(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-zn(r),t[r]=o}function Yv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-zn(o),h=1<<u;r[u]=0,c[u]=-1,t[u]=-1,o&=~h}}function tc(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var c=31-zn(o),u=1<<c;u&r|t[c]&r&&(t[c]|=r),o&=~u}}var Je=0;function Fp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Dp,nc,Bp,Wp,Hp,rc=!1,Vi=[],Sr=null,Mr=null,$r=null,Aa=new Map,Ta=new Map,Nr=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(t,r){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Aa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(r.pointerId)}}function Ia(t,r,o,c,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Ya(r),r!==null&&nc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Qv(t,r,o,c,u){switch(r){case"focusin":return Sr=Ia(Sr,t,r,o,c,u),!0;case"dragenter":return Mr=Ia(Mr,t,r,o,c,u),!0;case"mouseover":return $r=Ia($r,t,r,o,c,u),!0;case"pointerover":var h=u.pointerId;return Aa.set(h,Ia(Aa.get(h)||null,t,r,o,c,u)),!0;case"gotpointercapture":return h=u.pointerId,Ta.set(h,Ia(Ta.get(h)||null,t,r,o,c,u)),!0}return!1}function qp(t){var r=io(t.target);if(r!==null){var o=ao(r);if(o!==null){if(r=o.tag,r===13){if(r=Rp(o),r!==null){t.blockedOn=r,Hp(t.priority,function(){Bp(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ac(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);sr=c,o.target.dispatchEvent(c),sr=null}else return r=Ya(o),r!==null&&nc(r),t.blockedOn=o,!1;r.shift()}return!0}function Vp(t,r,o){Gi(t)&&o.delete(r)}function Zv(){rc=!1,Sr!==null&&Gi(Sr)&&(Sr=null),Mr!==null&&Gi(Mr)&&(Mr=null),$r!==null&&Gi($r)&&($r=null),Aa.forEach(Vp),Ta.forEach(Vp)}function Ea(t,r){t.blockedOn===r&&(t.blockedOn=null,rc||(rc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Zv)))}function Pa(t){function r(u){return Ea(u,t)}if(0<Vi.length){Ea(Vi[0],t);for(var o=1;o<Vi.length;o++){var c=Vi[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Sr!==null&&Ea(Sr,t),Mr!==null&&Ea(Mr,t),$r!==null&&Ea($r,t),Aa.forEach(r),Ta.forEach(r),o=0;o<Nr.length;o++)c=Nr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Nr.length&&(o=Nr[0],o.blockedOn===null);)qp(o),o.blockedOn===null&&Nr.shift()}var To=P.ReactCurrentBatchConfig,Yi=!0;function Xv(t,r,o,c){var u=Je,h=To.transition;To.transition=null;try{Je=1,oc(t,r,o,c)}finally{Je=u,To.transition=h}}function Jv(t,r,o,c){var u=Je,h=To.transition;To.transition=null;try{Je=4,oc(t,r,o,c)}finally{Je=u,To.transition=h}}function oc(t,r,o,c){if(Yi){var u=ac(t,r,o,c);if(u===null)kc(t,r,c,Ki,o),Up(t,c);else if(Qv(u,t,r,o,c))c.stopPropagation();else if(Up(t,c),r&4&&-1<Kv.indexOf(t)){for(;u!==null;){var h=Ya(u);if(h!==null&&Dp(h),h=ac(t,r,o,c),h===null&&kc(t,r,c,Ki,o),h===u)break;u=h}u!==null&&c.stopPropagation()}else kc(t,r,c,null,o)}}var Ki=null;function ac(t,r,o,c){if(Ki=null,t=lr(c),t=io(t),t!==null)if(r=ao(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Rp(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ki=t,null}function Gp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case Xl:return 1;case Pp:return 4;case Bi:case Bv:return 16;case zp:return 536870912;default:return 16}default:return 16}}var Rr=null,ic=null,Qi=null;function Yp(){if(Qi)return Qi;var t,r=ic,o=r.length,c,u="value"in Rr?Rr.value:Rr.textContent,h=u.length;for(t=0;t<o&&r[t]===u[t];t++);var b=o-t;for(c=1;c<=b&&r[o-c]===u[h-c];c++);return Qi=u.slice(t,1<c?1-c:void 0)}function Zi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function Kp(){return!1}function dn(t){function r(o,c,u,h,b){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Xi:Kp,this.isPropagationStopped=Kp,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),r}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=dn(Io),za=q({},Io,{view:0,detail:0}),ex=dn(za),lc,cc,Oa,Ji=q({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(lc=t.screenX-Oa.screenX,cc=t.screenY-Oa.screenY):cc=lc=0,Oa=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),Qp=dn(Ji),tx=q({},Ji,{dataTransfer:0}),nx=dn(tx),rx=q({},za,{relatedTarget:0}),dc=dn(rx),ox=q({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=dn(ox),ix=q({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=dn(ix),lx=q({},Io,{data:0}),Zp=dn(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ux[t])?!!r[t]:!1}function uc(){return px}var hx=q({},za,{key:function(t){if(t.key){var r=cx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(t){return t.type==="keypress"?Zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fx=dn(hx),mx=q({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=dn(mx),gx=q({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),vx=dn(gx),xx=q({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=dn(xx),wx=q({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=dn(wx),kx=[9,13,27,32],pc=m&&"CompositionEvent"in window,Fa=null;m&&"documentMode"in document&&(Fa=document.documentMode);var _x=m&&"TextEvent"in window&&!Fa,Jp=m&&(!pc||Fa&&8<Fa&&11>=Fa),eh=" ",th=!1;function nh(t,r){switch(t){case"keyup":return kx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function Cx(t,r){switch(t){case"compositionend":return rh(r);case"keypress":return r.which!==32?null:(th=!0,eh);case"textInput":return t=r.data,t===eh&&th?null:t;default:return null}}function jx(t,r){if(Eo)return t==="compositionend"||!pc&&nh(t,r)?(t=Yp(),Qi=ic=Rr=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Jp&&r.locale!=="ko"?null:r.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Sx[t.type]:r==="textarea"}function ah(t,r,o,c){Fi(c),r=os(r,"onChange"),0<r.length&&(o=new sc("onChange","change",null,o,c),t.push({event:o,listeners:r}))}var Da=null,Ba=null;function Mx(t){_h(t,0)}function es(t){var r=Do(t);if(xe(r))return t}function $x(t,r){if(t==="change")return r}var ih=!1;if(m){var hc;if(m){var fc="oninput"in document;if(!fc){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),fc=typeof sh.oninput=="function"}hc=fc}else hc=!1;ih=hc&&(!document.documentMode||9<document.documentMode)}function lh(){Da&&(Da.detachEvent("onpropertychange",ch),Ba=Da=null)}function ch(t){if(t.propertyName==="value"&&es(Ba)){var r=[];ah(r,Ba,t,lr(t)),me(Mx,r)}}function Nx(t,r,o){t==="focusin"?(lh(),Da=r,Ba=o,Da.attachEvent("onpropertychange",ch)):t==="focusout"&&lh()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return es(Ba)}function Lx(t,r){if(t==="click")return es(r)}function Ax(t,r){if(t==="input"||t==="change")return es(r)}function Tx(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var On=typeof Object.is=="function"?Object.is:Tx;function Wa(t,r){if(On(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!v.call(r,u)||!On(t[u],r[u]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uh(t,r){var o=dh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=r&&c>=r)return{node:o,offset:r-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dh(o)}}function ph(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ph(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function hh(){for(var t=window,r=le();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=le(t.document)}return r}function mc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Ix(t){var r=hh(),o=t.focusedElem,c=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&ph(o.ownerDocument.documentElement,o)){if(c!==null&&mc(o)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(c.start,u);c=c.end===void 0?h:Math.min(c.end,u),!t.extend&&h>c&&(u=c,c=h,h=u),u=uh(o,h);var b=uh(o,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),h>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=m&&"documentMode"in document&&11>=document.documentMode,Po=null,gc=null,Ha=null,vc=!1;function fh(t,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vc||Po==null||Po!==le(c)||(c=Po,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ha&&Wa(Ha,c)||(Ha=c,c=os(gc,"onSelect"),0<c.length&&(r=new sc("onSelect","select",null,r,o),t.push({event:r,listeners:c}),r.target=Po)))}function ts(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var zo={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},xc={},mh={};m&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function ns(t){if(xc[t])return xc[t];if(!zo[t])return t;var r=zo[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in mh)return xc[t]=r[o];return t}var gh=ns("animationend"),vh=ns("animationiteration"),xh=ns("animationstart"),yh=ns("transitionend"),wh=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,r){wh.set(t,r),d(r,[t])}for(var yc=0;yc<bh.length;yc++){var wc=bh[yc],Px=wc.toLowerCase(),zx=wc[0].toUpperCase()+wc.slice(1);Lr(Px,"on"+zx)}Lr(gh,"onAnimationEnd"),Lr(vh,"onAnimationIteration"),Lr(xh,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(yh,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function kh(t,r,o){var c=t.type||"unknown-event";t.currentTarget=o,Pv(c,r,void 0,t),t.currentTarget=null}function _h(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],u=c.event;c=c.listeners;e:{var h=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],W=I.instance,te=I.currentTarget;if(I=I.listener,W!==h&&u.isPropagationStopped())break e;kh(u,I,te),h=W}else for(b=0;b<c.length;b++){if(I=c[b],W=I.instance,te=I.currentTarget,I=I.listener,W!==h&&u.isPropagationStopped())break e;kh(u,I,te),h=W}}}if(oo)throw t=Na,oo=!1,Na=null,t}function at(t,r){var o=r[$c];o===void 0&&(o=r[$c]=new Set);var c=t+"__bubble";o.has(c)||(Ch(r,t,2,!1),o.add(c))}function bc(t,r,o){var c=0;r&&(c|=4),Ch(o,t,c,r)}var rs="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[rs]){t[rs]=!0,s.forEach(function(o){o!=="selectionchange"&&(Ox.has(o)||bc(o,!1,t),bc(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[rs]||(r[rs]=!0,bc("selectionchange",!1,r))}}function Ch(t,r,o,c){switch(Gp(r)){case 1:var u=Xv;break;case 4:u=Jv;break;default:u=oc}o=u.bind(null,r,o,t),u=void 0,!Ze||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,o,{capture:!0,passive:u}):t.addEventListener(r,o,!0):u!==void 0?t.addEventListener(r,o,{passive:u}):t.addEventListener(r,o,!1)}function kc(t,r,o,c,u){var h=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===u||W.nodeType===8&&W.parentNode===u))return;b=b.return}for(;I!==null;){if(b=io(I),b===null)return;if(W=b.tag,W===5||W===6){c=h=b;continue e}I=I.parentNode}}c=c.return}me(function(){var te=h,he=lr(o),fe=[];e:{var pe=wh.get(t);if(pe!==void 0){var be=sc,je=t;switch(t){case"keypress":if(Zi(o)===0)break e;case"keydown":case"keyup":be=fx;break;case"focusin":je="focus",be=dc;break;case"focusout":je="blur",be=dc;break;case"beforeblur":case"afterblur":be=dc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=vx;break;case gh:case vh:case xh:be=ax;break;case yh:be=yx;break;case"scroll":be=ex;break;case"wheel":be=bx;break;case"copy":case"cut":case"paste":be=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Xp}var Se=(r&4)!==0,xt=!Se&&t==="scroll",Q=Se?pe!==null?pe+"Capture":null:pe;Se=[];for(var V=te,J;V!==null;){J=V;var ve=J.stateNode;if(J.tag===5&&ve!==null&&(J=ve,Q!==null&&(ve=we(V,Q),ve!=null&&Se.push(Va(V,ve,J)))),xt)break;V=V.return}0<Se.length&&(pe=new be(pe,je,null,o,he),fe.push({event:pe,listeners:Se}))}}if((r&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",pe&&o!==sr&&(je=o.relatedTarget||o.fromElement)&&(io(je)||je[dr]))break e;if((be||pe)&&(pe=he.window===he?he:(pe=he.ownerDocument)?pe.defaultView||pe.parentWindow:window,be?(je=o.relatedTarget||o.toElement,be=te,je=je?io(je):null,je!==null&&(xt=ao(je),je!==xt||je.tag!==5&&je.tag!==6)&&(je=null)):(be=null,je=te),be!==je)){if(Se=Qp,ve="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Se=Xp,ve="onPointerLeave",Q="onPointerEnter",V="pointer"),xt=be==null?pe:Do(be),J=je==null?pe:Do(je),pe=new Se(ve,V+"leave",be,o,he),pe.target=xt,pe.relatedTarget=J,ve=null,io(he)===te&&(Se=new Se(Q,V+"enter",je,o,he),Se.target=J,Se.relatedTarget=xt,ve=Se),xt=ve,be&&je)t:{for(Se=be,Q=je,V=0,J=Se;J;J=Oo(J))V++;for(J=0,ve=Q;ve;ve=Oo(ve))J++;for(;0<V-J;)Se=Oo(Se),V--;for(;0<J-V;)Q=Oo(Q),J--;for(;V--;){if(Se===Q||Q!==null&&Se===Q.alternate)break t;Se=Oo(Se),Q=Oo(Q)}Se=null}else Se=null;be!==null&&jh(fe,pe,be,Se,!1),je!==null&&xt!==null&&jh(fe,xt,je,Se,!0)}}e:{if(pe=te?Do(te):window,be=pe.nodeName&&pe.nodeName.toLowerCase(),be==="select"||be==="input"&&pe.type==="file")var Me=$x;else if(oh(pe))if(ih)Me=Ax;else{Me=Rx;var Re=Nx}else(be=pe.nodeName)&&be.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Me=Lx);if(Me&&(Me=Me(t,te))){ah(fe,Me,o,he);break e}Re&&Re(t,pe,te),t==="focusout"&&(Re=pe._wrapperState)&&Re.controlled&&pe.type==="number"&&_e(pe,"number",pe.value)}switch(Re=te?Do(te):window,t){case"focusin":(oh(Re)||Re.contentEditable==="true")&&(Po=Re,gc=te,Ha=null);break;case"focusout":Ha=gc=Po=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,fh(fe,o,he);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":fh(fe,o,he)}var Le;if(pc)e:{switch(t){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Eo?nh(t,o)&&(Ie="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(Jp&&o.locale!=="ko"&&(Eo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Eo&&(Le=Yp()):(Rr=he,ic="value"in Rr?Rr.value:Rr.textContent,Eo=!0)),Re=os(te,Ie),0<Re.length&&(Ie=new Zp(Ie,t,null,o,he),fe.push({event:Ie,listeners:Re}),Le?Ie.data=Le:(Le=rh(o),Le!==null&&(Ie.data=Le)))),(Le=_x?Cx(t,o):jx(t,o))&&(te=os(te,"onBeforeInput"),0<te.length&&(he=new Zp("onBeforeInput","beforeinput",null,o,he),fe.push({event:he,listeners:te}),he.data=Le))}_h(fe,r)})}function Va(t,r,o){return{instance:t,listener:r,currentTarget:o}}function os(t,r){for(var o=r+"Capture",c=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=we(t,o),h!=null&&c.unshift(Va(t,h,u)),h=we(t,r),h!=null&&c.push(Va(t,h,u))),t=t.return}return c}function Oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,r,o,c,u){for(var h=r._reactName,b=[];o!==null&&o!==c;){var I=o,W=I.alternate,te=I.stateNode;if(W!==null&&W===c)break;I.tag===5&&te!==null&&(I=te,u?(W=we(o,h),W!=null&&b.unshift(Va(o,W,I))):u||(W=we(o,h),W!=null&&b.push(Va(o,W,I)))),o=o.return}b.length!==0&&t.push({event:r,listeners:b})}var Fx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Sh(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(Dx,"")}function as(t,r,o){if(r=Sh(r),Sh(t)!==r&&o)throw Error(i(425))}function is(){}var _c=null,Cc=null;function jc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(t){return Mh.resolve(null).then(t).catch(Hx)}:Sc;function Hx(t){setTimeout(function(){throw t})}function Mc(t,r){var o=r,c=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){t.removeChild(u),Pa(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);Pa(r)}function Ar(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Fo,Ga="__reactProps$"+Fo,dr="__reactContainer$"+Fo,$c="__reactEvents$"+Fo,Ux="__reactListeners$"+Fo,qx="__reactHandles$"+Fo;function io(t){var r=t[Jn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[dr]||o[Jn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=$h(t);t!==null;){if(o=t[Jn])return o;t=$h(t)}return r}t=o,o=t.parentNode}return null}function Ya(t){return t=t[Jn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ss(t){return t[Ga]||null}var Nc=[],Bo=-1;function Tr(t){return{current:t}}function it(t){0>Bo||(t.current=Nc[Bo],Nc[Bo]=null,Bo--)}function nt(t,r){Bo++,Nc[Bo]=t.current,t.current=r}var Ir={},Bt=Tr(Ir),Zt=Tr(!1),so=Ir;function Wo(t,r){var o=t.type.contextTypes;if(!o)return Ir;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=r[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function Xt(t){return t=t.childContextTypes,t!=null}function ls(){it(Zt),it(Bt)}function Nh(t,r,o){if(Bt.current!==Ir)throw Error(i(168));nt(Bt,r),nt(Zt,o)}function Rh(t,r,o){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,B(t)||"Unknown",u));return q({},o,c)}function cs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,so=Bt.current,nt(Bt,t),nt(Zt,Zt.current),!0}function Lh(t,r,o){var c=t.stateNode;if(!c)throw Error(i(169));o?(t=Rh(t,r,so),c.__reactInternalMemoizedMergedChildContext=t,it(Zt),it(Bt),nt(Bt,t)):it(Zt),nt(Zt,o)}var ur=null,ds=!1,Rc=!1;function Ah(t){ur===null?ur=[t]:ur.push(t)}function Vx(t){ds=!0,Ah(t)}function Er(){if(!Rc&&ur!==null){Rc=!0;var t=0,r=Je;try{var o=ur;for(Je=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}ur=null,ds=!1}catch(u){throw ur!==null&&(ur=ur.slice(t+1)),Ip(Xl,Er),u}finally{Je=r,Rc=!1}}return null}var Ho=[],Uo=0,us=null,ps=0,_n=[],Cn=0,lo=null,pr=1,hr="";function co(t,r){Ho[Uo++]=ps,Ho[Uo++]=us,us=t,ps=r}function Th(t,r,o){_n[Cn++]=pr,_n[Cn++]=hr,_n[Cn++]=lo,lo=t;var c=pr;t=hr;var u=32-zn(c)-1;c&=~(1<<u),o+=1;var h=32-zn(r)+u;if(30<h){var b=u-u%5;h=(c&(1<<b)-1).toString(32),c>>=b,u-=b,pr=1<<32-zn(r)+u|o<<u|c,hr=h+t}else pr=1<<h|o<<u|c,hr=t}function Lc(t){t.return!==null&&(co(t,1),Th(t,1,0))}function Ac(t){for(;t===us;)us=Ho[--Uo],Ho[Uo]=null,ps=Ho[--Uo],Ho[Uo]=null;for(;t===lo;)lo=_n[--Cn],_n[Cn]=null,hr=_n[--Cn],_n[Cn]=null,pr=_n[--Cn],_n[Cn]=null}var un=null,pn=null,lt=!1,Fn=null;function Ih(t,r){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Eh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,un=t,pn=Ar(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,un=t,pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=lo!==null?{id:pr,overflow:hr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,un=t,pn=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ic(t){if(lt){var r=pn;if(r){var o=r;if(!Eh(t,r)){if(Tc(t))throw Error(i(418));r=Ar(o.nextSibling);var c=un;r&&Eh(t,r)?Ih(c,o):(t.flags=t.flags&-4097|2,lt=!1,un=t)}}else{if(Tc(t))throw Error(i(418));t.flags=t.flags&-4097|2,lt=!1,un=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function hs(t){if(t!==un)return!1;if(!lt)return Ph(t),lt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!jc(t.type,t.memoizedProps)),r&&(r=pn)){if(Tc(t))throw zh(),Error(i(418));for(;r;)Ih(t,r),r=Ar(r.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){pn=Ar(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}pn=null}}else pn=un?Ar(t.stateNode.nextSibling):null;return!0}function zh(){for(var t=pn;t;)t=Ar(t.nextSibling)}function qo(){pn=un=null,lt=!1}function Ec(t){Fn===null?Fn=[t]:Fn.push(t)}var Gx=P.ReactCurrentBatchConfig;function Ka(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,t));var u=c,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(b){var I=u.refs;b===null?delete I[h]:I[h]=b},r._stringRef=h,r)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function fs(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Oh(t){var r=t._init;return r(t._payload)}function Fh(t){function r(Q,V){if(t){var J=Q.deletions;J===null?(Q.deletions=[V],Q.flags|=16):J.push(V)}}function o(Q,V){if(!t)return null;for(;V!==null;)r(Q,V),V=V.sibling;return null}function c(Q,V){for(Q=new Map;V!==null;)V.key!==null?Q.set(V.key,V):Q.set(V.index,V),V=V.sibling;return Q}function u(Q,V){return Q=Hr(Q,V),Q.index=0,Q.sibling=null,Q}function h(Q,V,J){return Q.index=J,t?(J=Q.alternate,J!==null?(J=J.index,J<V?(Q.flags|=2,V):J):(Q.flags|=2,V)):(Q.flags|=1048576,V)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,V,J,ve){return V===null||V.tag!==6?(V=Sd(J,Q.mode,ve),V.return=Q,V):(V=u(V,J),V.return=Q,V)}function W(Q,V,J,ve){var Me=J.type;return Me===A?he(Q,V,J.props.children,ve,J.key):V!==null&&(V.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===ce&&Oh(Me)===V.type)?(ve=u(V,J.props),ve.ref=Ka(Q,V,J),ve.return=Q,ve):(ve=Os(J.type,J.key,J.props,null,Q.mode,ve),ve.ref=Ka(Q,V,J),ve.return=Q,ve)}function te(Q,V,J,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Md(J,Q.mode,ve),V.return=Q,V):(V=u(V,J.children||[]),V.return=Q,V)}function he(Q,V,J,ve,Me){return V===null||V.tag!==7?(V=xo(J,Q.mode,ve,Me),V.return=Q,V):(V=u(V,J),V.return=Q,V)}function fe(Q,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Sd(""+V,Q.mode,J),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case $:return J=Os(V.type,V.key,V.props,null,Q.mode,J),J.ref=Ka(Q,null,V),J.return=Q,J;case R:return V=Md(V,Q.mode,J),V.return=Q,V;case ce:var ve=V._init;return fe(Q,ve(V._payload),J)}if(Ue(V)||F(V))return V=xo(V,Q.mode,J,null),V.return=Q,V;fs(Q,V)}return null}function pe(Q,V,J,ve){var Me=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Me!==null?null:I(Q,V,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case $:return J.key===Me?W(Q,V,J,ve):null;case R:return J.key===Me?te(Q,V,J,ve):null;case ce:return Me=J._init,pe(Q,V,Me(J._payload),ve)}if(Ue(J)||F(J))return Me!==null?null:he(Q,V,J,ve,null);fs(Q,J)}return null}function be(Q,V,J,ve,Me){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return Q=Q.get(J)||null,I(V,Q,""+ve,Me);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case $:return Q=Q.get(ve.key===null?J:ve.key)||null,W(V,Q,ve,Me);case R:return Q=Q.get(ve.key===null?J:ve.key)||null,te(V,Q,ve,Me);case ce:var Re=ve._init;return be(Q,V,J,Re(ve._payload),Me)}if(Ue(ve)||F(ve))return Q=Q.get(J)||null,he(V,Q,ve,Me,null);fs(V,ve)}return null}function je(Q,V,J,ve){for(var Me=null,Re=null,Le=V,Ie=V=0,Rt=null;Le!==null&&Ie<J.length;Ie++){Le.index>Ie?(Rt=Le,Le=null):Rt=Le.sibling;var Ke=pe(Q,Le,J[Ie],ve);if(Ke===null){Le===null&&(Le=Rt);break}t&&Le&&Ke.alternate===null&&r(Q,Le),V=h(Ke,V,Ie),Re===null?Me=Ke:Re.sibling=Ke,Re=Ke,Le=Rt}if(Ie===J.length)return o(Q,Le),lt&&co(Q,Ie),Me;if(Le===null){for(;Ie<J.length;Ie++)Le=fe(Q,J[Ie],ve),Le!==null&&(V=h(Le,V,Ie),Re===null?Me=Le:Re.sibling=Le,Re=Le);return lt&&co(Q,Ie),Me}for(Le=c(Q,Le);Ie<J.length;Ie++)Rt=be(Le,Q,Ie,J[Ie],ve),Rt!==null&&(t&&Rt.alternate!==null&&Le.delete(Rt.key===null?Ie:Rt.key),V=h(Rt,V,Ie),Re===null?Me=Rt:Re.sibling=Rt,Re=Rt);return t&&Le.forEach(function(Ur){return r(Q,Ur)}),lt&&co(Q,Ie),Me}function Se(Q,V,J,ve){var Me=F(J);if(typeof Me!="function")throw Error(i(150));if(J=Me.call(J),J==null)throw Error(i(151));for(var Re=Me=null,Le=V,Ie=V=0,Rt=null,Ke=J.next();Le!==null&&!Ke.done;Ie++,Ke=J.next()){Le.index>Ie?(Rt=Le,Le=null):Rt=Le.sibling;var Ur=pe(Q,Le,Ke.value,ve);if(Ur===null){Le===null&&(Le=Rt);break}t&&Le&&Ur.alternate===null&&r(Q,Le),V=h(Ur,V,Ie),Re===null?Me=Ur:Re.sibling=Ur,Re=Ur,Le=Rt}if(Ke.done)return o(Q,Le),lt&&co(Q,Ie),Me;if(Le===null){for(;!Ke.done;Ie++,Ke=J.next())Ke=fe(Q,Ke.value,ve),Ke!==null&&(V=h(Ke,V,Ie),Re===null?Me=Ke:Re.sibling=Ke,Re=Ke);return lt&&co(Q,Ie),Me}for(Le=c(Q,Le);!Ke.done;Ie++,Ke=J.next())Ke=be(Le,Q,Ie,Ke.value,ve),Ke!==null&&(t&&Ke.alternate!==null&&Le.delete(Ke.key===null?Ie:Ke.key),V=h(Ke,V,Ie),Re===null?Me=Ke:Re.sibling=Ke,Re=Ke);return t&&Le.forEach(function(S3){return r(Q,S3)}),lt&&co(Q,Ie),Me}function xt(Q,V,J,ve){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case $:e:{for(var Me=J.key,Re=V;Re!==null;){if(Re.key===Me){if(Me=J.type,Me===A){if(Re.tag===7){o(Q,Re.sibling),V=u(Re,J.props.children),V.return=Q,Q=V;break e}}else if(Re.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===ce&&Oh(Me)===Re.type){o(Q,Re.sibling),V=u(Re,J.props),V.ref=Ka(Q,Re,J),V.return=Q,Q=V;break e}o(Q,Re);break}else r(Q,Re);Re=Re.sibling}J.type===A?(V=xo(J.props.children,Q.mode,ve,J.key),V.return=Q,Q=V):(ve=Os(J.type,J.key,J.props,null,Q.mode,ve),ve.ref=Ka(Q,V,J),ve.return=Q,Q=ve)}return b(Q);case R:e:{for(Re=J.key;V!==null;){if(V.key===Re)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){o(Q,V.sibling),V=u(V,J.children||[]),V.return=Q,Q=V;break e}else{o(Q,V);break}else r(Q,V);V=V.sibling}V=Md(J,Q.mode,ve),V.return=Q,Q=V}return b(Q);case ce:return Re=J._init,xt(Q,V,Re(J._payload),ve)}if(Ue(J))return je(Q,V,J,ve);if(F(J))return Se(Q,V,J,ve);fs(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(o(Q,V.sibling),V=u(V,J),V.return=Q,Q=V):(o(Q,V),V=Sd(J,Q.mode,ve),V.return=Q,Q=V),b(Q)):o(Q,V)}return xt}var Vo=Fh(!0),Dh=Fh(!1),ms=Tr(null),gs=null,Go=null,Pc=null;function zc(){Pc=Go=gs=null}function Oc(t){var r=ms.current;it(ms),t._currentValue=r}function Fc(t,r,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===o)break;t=t.return}}function Yo(t,r){gs=t,Pc=Go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Jt=!0),t.firstContext=null)}function jn(t){var r=t._currentValue;if(Pc!==t)if(t={context:t,memoizedValue:r,next:null},Go===null){if(gs===null)throw Error(i(308));Go=t,gs.dependencies={lanes:0,firstContext:t}}else Go=Go.next=t;return r}var uo=null;function Dc(t){uo===null?uo=[t]:uo.push(t)}function Bh(t,r,o,c){var u=r.interleaved;return u===null?(o.next=o,Dc(r)):(o.next=u.next,u.next=o),r.interleaved=o,fr(t,c)}function fr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Pr=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(t,r,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ye&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,fr(t,o)}return u=c.interleaved,u===null?(r.next=r,Dc(c)):(r.next=u.next,u.next=r),c.interleaved=r,fr(t,o)}function vs(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,o|=c,r.lanes=o,tc(t,o)}}function Hh(t,r){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=b:h=h.next=b,o=o.next}while(o!==null);h===null?u=h=r:h=h.next=r}else u=h=r;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function xs(t,r,o,c){var u=t.updateQueue;Pr=!1;var h=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var W=I,te=W.next;W.next=null,b===null?h=te:b.next=te,b=W;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=te:I.next=te,he.lastBaseUpdate=W))}if(h!==null){var fe=u.baseState;b=0,he=te=W=null,I=h;do{var pe=I.lane,be=I.eventTime;if((c&pe)===pe){he!==null&&(he=he.next={eventTime:be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Se=I;switch(pe=r,be=o,Se.tag){case 1:if(je=Se.payload,typeof je=="function"){fe=je.call(be,fe,pe);break e}fe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Se.payload,pe=typeof je=="function"?je.call(be,fe,pe):je,pe==null)break e;fe=q({},fe,pe);break e;case 2:Pr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,pe=u.effects,pe===null?u.effects=[I]:pe.push(I))}else be={eventTime:be,lane:pe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(te=he=be,W=fe):he=he.next=be,b|=pe;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;pe=I,I=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);if(he===null&&(W=fe),u.baseState=W,u.firstBaseUpdate=te,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);fo|=b,t.lanes=b,t.memoizedState=fe}}function Uh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Qa={},er=Tr(Qa),Za=Tr(Qa),Xa=Tr(Qa);function po(t){if(t===Qa)throw Error(i(174));return t}function Wc(t,r){switch(nt(Xa,r),nt(Za,t),nt(er,Qa),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=dt(r,t)}it(er),nt(er,r)}function Ko(){it(er),it(Za),it(Xa)}function qh(t){po(Xa.current);var r=po(er.current),o=dt(r,t.type);r!==o&&(nt(Za,t),nt(er,o))}function Hc(t){Za.current===t&&(it(er),it(Za))}var ut=Tr(0);function ys(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uc=[];function qc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var ws=P.ReactCurrentDispatcher,Vc=P.ReactCurrentBatchConfig,ho=0,pt=null,_t=null,$t=null,bs=!1,Ja=!1,ei=0,Yx=0;function Wt(){throw Error(i(321))}function Gc(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!On(t[o],r[o]))return!1;return!0}function Yc(t,r,o,c,u,h){if(ho=h,pt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ws.current=t===null||t.memoizedState===null?Xx:Jx,t=o(c,u),Ja){h=0;do{if(Ja=!1,ei=0,25<=h)throw Error(i(301));h+=1,$t=_t=null,r.updateQueue=null,ws.current=e3,t=o(c,u)}while(Ja)}if(ws.current=Cs,r=_t!==null&&_t.next!==null,ho=0,$t=_t=pt=null,bs=!1,r)throw Error(i(300));return t}function Kc(){var t=ei!==0;return ei=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?pt.memoizedState=$t=t:$t=$t.next=t,$t}function Sn(){if(_t===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var r=$t===null?pt.memoizedState:$t.next;if(r!==null)$t=r,_t=t;else{if(t===null)throw Error(i(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},$t===null?pt.memoizedState=$t=t:$t=$t.next=t}return $t}function ti(t,r){return typeof r=="function"?r(t):r}function Qc(t){var r=Sn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=_t,u=c.baseQueue,h=o.pending;if(h!==null){if(u!==null){var b=u.next;u.next=h.next,h.next=b}c.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,c=c.baseState;var I=b=null,W=null,te=h;do{var he=te.lane;if((ho&he)===he)W!==null&&(W=W.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var fe={lane:he,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};W===null?(I=W=fe,b=c):W=W.next=fe,pt.lanes|=he,fo|=he}te=te.next}while(te!==null&&te!==h);W===null?b=c:W.next=I,On(c,r.memoizedState)||(Jt=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=W,o.lastRenderedState=c}if(t=o.interleaved,t!==null){u=t;do h=u.lane,pt.lanes|=h,fo|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Zc(t){var r=Sn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=o.dispatch,u=o.pending,h=r.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do h=t(h,b.action),b=b.next;while(b!==u);On(h,r.memoizedState)||(Jt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,c]}function Vh(){}function Gh(t,r){var o=pt,c=Sn(),u=r(),h=!On(c.memoizedState,u);if(h&&(c.memoizedState=u,Jt=!0),c=c.queue,Xc(Qh.bind(null,o,c,t),[t]),c.getSnapshot!==r||h||$t!==null&&$t.memoizedState.tag&1){if(o.flags|=2048,ni(9,Kh.bind(null,o,c,u,r),void 0,null),Nt===null)throw Error(i(349));(ho&30)!==0||Yh(o,r,u)}return u}function Yh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=pt.updateQueue,r===null?(r={lastEffect:null,stores:null},pt.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Kh(t,r,o,c){r.value=o,r.getSnapshot=c,Zh(r)&&Xh(t)}function Qh(t,r,o){return o(function(){Zh(r)&&Xh(t)})}function Zh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!On(t,o)}catch{return!0}}function Xh(t){var r=fr(t,1);r!==null&&Hn(r,t,1,-1)}function Jh(t){var r=tr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:t},r.queue=t,t=t.dispatch=Zx.bind(null,pt,t),[r.memoizedState,t]}function ni(t,r,o,c){return t={tag:t,create:r,destroy:o,deps:c,next:null},r=pt.updateQueue,r===null?(r={lastEffect:null,stores:null},pt.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,r.lastEffect=t)),t}function e1(){return Sn().memoizedState}function ks(t,r,o,c){var u=tr();pt.flags|=t,u.memoizedState=ni(1|r,o,void 0,c===void 0?null:c)}function _s(t,r,o,c){var u=Sn();c=c===void 0?null:c;var h=void 0;if(_t!==null){var b=_t.memoizedState;if(h=b.destroy,c!==null&&Gc(c,b.deps)){u.memoizedState=ni(r,o,h,c);return}}pt.flags|=t,u.memoizedState=ni(1|r,o,h,c)}function t1(t,r){return ks(8390656,8,t,r)}function Xc(t,r){return _s(2048,8,t,r)}function n1(t,r){return _s(4,2,t,r)}function r1(t,r){return _s(4,4,t,r)}function o1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function a1(t,r,o){return o=o!=null?o.concat([t]):null,_s(4,4,o1.bind(null,r,t),o)}function Jc(){}function i1(t,r){var o=Sn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Gc(r,c[1])?c[0]:(o.memoizedState=[t,r],t)}function s1(t,r){var o=Sn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Gc(r,c[1])?c[0]:(t=t(),o.memoizedState=[t,r],t)}function l1(t,r,o){return(ho&21)===0?(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=o):(On(o,r)||(o=Op(),pt.lanes|=o,fo|=o,t.baseState=!0),r)}function Kx(t,r){var o=Je;Je=o!==0&&4>o?o:4,t(!0);var c=Vc.transition;Vc.transition={};try{t(!1),r()}finally{Je=o,Vc.transition=c}}function c1(){return Sn().memoizedState}function Qx(t,r,o){var c=Br(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},d1(t))u1(r,o);else if(o=Bh(t,r,o,c),o!==null){var u=Kt();Hn(o,t,c,u),p1(o,r,c)}}function Zx(t,r,o){var c=Br(t),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(d1(t))u1(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var b=r.lastRenderedState,I=h(b,o);if(u.hasEagerState=!0,u.eagerState=I,On(I,b)){var W=r.interleaved;W===null?(u.next=u,Dc(r)):(u.next=W.next,W.next=u),r.interleaved=u;return}}catch{}finally{}o=Bh(t,r,u,c),o!==null&&(u=Kt(),Hn(o,t,c,u),p1(o,r,c))}}function d1(t){var r=t.alternate;return t===pt||r!==null&&r===pt}function u1(t,r){Ja=bs=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function p1(t,r,o){if((o&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,o|=c,r.lanes=o,tc(t,o)}}var Cs={readContext:jn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Xx={readContext:jn,useCallback:function(t,r){return tr().memoizedState=[t,r===void 0?null:r],t},useContext:jn,useEffect:t1,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,ks(4194308,4,o1.bind(null,r,t),o)},useLayoutEffect:function(t,r){return ks(4194308,4,t,r)},useInsertionEffect:function(t,r){return ks(4,2,t,r)},useMemo:function(t,r){var o=tr();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var c=tr();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Qx.bind(null,pt,t),[c.memoizedState,t]},useRef:function(t){var r=tr();return t={current:t},r.memoizedState=t},useState:Jh,useDebugValue:Jc,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=Jh(!1),r=t[0];return t=Kx.bind(null,t[1]),tr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var c=pt,u=tr();if(lt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),Nt===null)throw Error(i(349));(ho&30)!==0||Yh(c,r,o)}u.memoizedState=o;var h={value:o,getSnapshot:r};return u.queue=h,t1(Qh.bind(null,c,h,t),[t]),c.flags|=2048,ni(9,Kh.bind(null,c,h,o,r),void 0,null),o},useId:function(){var t=tr(),r=Nt.identifierPrefix;if(lt){var o=hr,c=pr;o=(c&~(1<<32-zn(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=ei++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Yx++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Jx={readContext:jn,useCallback:i1,useContext:jn,useEffect:Xc,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:s1,useReducer:Qc,useRef:e1,useState:function(){return Qc(ti)},useDebugValue:Jc,useDeferredValue:function(t){var r=Sn();return l1(r,_t.memoizedState,t)},useTransition:function(){var t=Qc(ti)[0],r=Sn().memoizedState;return[t,r]},useMutableSource:Vh,useSyncExternalStore:Gh,useId:c1,unstable_isNewReconciler:!1},e3={readContext:jn,useCallback:i1,useContext:jn,useEffect:Xc,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:s1,useReducer:Zc,useRef:e1,useState:function(){return Zc(ti)},useDebugValue:Jc,useDeferredValue:function(t){var r=Sn();return _t===null?r.memoizedState=t:l1(r,_t.memoizedState,t)},useTransition:function(){var t=Zc(ti)[0],r=Sn().memoizedState;return[t,r]},useMutableSource:Vh,useSyncExternalStore:Gh,useId:c1,unstable_isNewReconciler:!1};function Dn(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function ed(t,r,o,c){r=t.memoizedState,o=o(c,r),o=o==null?r:q({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var js={isMounted:function(t){return(t=t._reactInternals)?ao(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var c=Kt(),u=Br(t),h=mr(c,u);h.payload=r,o!=null&&(h.callback=o),r=zr(t,h,u),r!==null&&(Hn(r,t,u,c),vs(r,t,u))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var c=Kt(),u=Br(t),h=mr(c,u);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=zr(t,h,u),r!==null&&(Hn(r,t,u,c),vs(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Kt(),c=Br(t),u=mr(o,c);u.tag=2,r!=null&&(u.callback=r),r=zr(t,u,c),r!==null&&(Hn(r,t,c,o),vs(r,t,c))}};function h1(t,r,o,c,u,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,b):r.prototype&&r.prototype.isPureReactComponent?!Wa(o,c)||!Wa(u,h):!0}function f1(t,r,o){var c=!1,u=Ir,h=r.contextType;return typeof h=="object"&&h!==null?h=jn(h):(u=Xt(r)?so:Bt.current,c=r.contextTypes,h=(c=c!=null)?Wo(t,u):Ir),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=js,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),r}function m1(t,r,o,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==t&&js.enqueueReplaceState(r,r.state,null)}function td(t,r,o,c){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Bc(t);var h=r.contextType;typeof h=="object"&&h!==null?u.context=jn(h):(h=Xt(r)?so:Bt.current,u.context=Wo(t,h)),u.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(ed(t,r,h,o),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&js.enqueueReplaceState(u,u.state,null),xs(t,o,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Qo(t,r){try{var o="",c=r;do o+=X(c),c=c.return;while(c);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:u,digest:null}}function nd(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function rd(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var t3=typeof WeakMap=="function"?WeakMap:Map;function g1(t,r,o){o=mr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){As||(As=!0,xd=c),rd(t,r)},o}function v1(t,r,o){o=mr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;o.payload=function(){return c(u)},o.callback=function(){rd(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){rd(t,r),typeof c!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),o}function x1(t,r,o){var c=t.pingCache;if(c===null){c=t.pingCache=new t3;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(o)||(u.add(o),t=m3.bind(null,t,r,o),r.then(t,t))}function y1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function w1(t,r,o,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=mr(-1,1),r.tag=2,zr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var n3=P.ReactCurrentOwner,Jt=!1;function Yt(t,r,o,c){r.child=t===null?Dh(r,null,o,c):Vo(r,t.child,o,c)}function b1(t,r,o,c,u){o=o.render;var h=r.ref;return Yo(r,u),c=Yc(t,r,o,c,h,u),o=Kc(),t!==null&&!Jt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,gr(t,r,u)):(lt&&o&&Lc(r),r.flags|=1,Yt(t,r,c,u),r.child)}function k1(t,r,o,c,u){if(t===null){var h=o.type;return typeof h=="function"&&!jd(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,_1(t,r,h,c,u)):(t=Os(o.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&u)===0){var b=h.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(b,c)&&t.ref===r.ref)return gr(t,r,u)}return r.flags|=1,t=Hr(h,c),t.ref=r.ref,t.return=r,r.child=t}function _1(t,r,o,c,u){if(t!==null){var h=t.memoizedProps;if(Wa(h,c)&&t.ref===r.ref)if(Jt=!1,r.pendingProps=c=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Jt=!0);else return r.lanes=t.lanes,gr(t,r,u)}return od(t,r,o,c,u)}function C1(t,r,o){var c=r.pendingProps,u=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Xo,hn),hn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,nt(Xo,hn),hn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,nt(Xo,hn),hn|=c}else h!==null?(c=h.baseLanes|o,r.memoizedState=null):c=o,nt(Xo,hn),hn|=c;return Yt(t,r,u,o),r.child}function j1(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function od(t,r,o,c,u){var h=Xt(o)?so:Bt.current;return h=Wo(r,h),Yo(r,u),o=Yc(t,r,o,c,h,u),c=Kc(),t!==null&&!Jt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,gr(t,r,u)):(lt&&c&&Lc(r),r.flags|=1,Yt(t,r,o,u),r.child)}function S1(t,r,o,c,u){if(Xt(o)){var h=!0;cs(r)}else h=!1;if(Yo(r,u),r.stateNode===null)Ms(t,r),f1(r,o,c),td(r,o,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var W=b.context,te=o.contextType;typeof te=="object"&&te!==null?te=jn(te):(te=Xt(o)?so:Bt.current,te=Wo(r,te));var he=o.getDerivedStateFromProps,fe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";fe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||W!==te)&&m1(r,b,c,te),Pr=!1;var pe=r.memoizedState;b.state=pe,xs(r,c,b,u),W=r.memoizedState,I!==c||pe!==W||Zt.current||Pr?(typeof he=="function"&&(ed(r,o,he,c),W=r.memoizedState),(I=Pr||h1(r,o,I,c,pe,W,te))?(fe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=W),b.props=c,b.state=W,b.context=te,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Wh(t,r),I=r.memoizedProps,te=r.type===r.elementType?I:Dn(r.type,I),b.props=te,fe=r.pendingProps,pe=b.context,W=o.contextType,typeof W=="object"&&W!==null?W=jn(W):(W=Xt(o)?so:Bt.current,W=Wo(r,W));var be=o.getDerivedStateFromProps;(he=typeof be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==fe||pe!==W)&&m1(r,b,c,W),Pr=!1,pe=r.memoizedState,b.state=pe,xs(r,c,b,u);var je=r.memoizedState;I!==fe||pe!==je||Zt.current||Pr?(typeof be=="function"&&(ed(r,o,be,c),je=r.memoizedState),(te=Pr||h1(r,o,te,c,pe,je,W)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,W)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&pe===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),b.props=c,b.state=je,b.context=W,c=te):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&pe===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&pe===t.memoizedState||(r.flags|=1024),c=!1)}return ad(t,r,o,c,h,u)}function ad(t,r,o,c,u,h){j1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Lh(r,o,!1),gr(t,r,h);c=r.stateNode,n3.current=r;var I=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=Vo(r,t.child,null,h),r.child=Vo(r,null,I,h)):Yt(t,r,I,h),r.memoizedState=c.state,u&&Lh(r,o,!0),r.child}function M1(t){var r=t.stateNode;r.pendingContext?Nh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Nh(t,r.context,!1),Wc(t,r.containerInfo)}function $1(t,r,o,c,u){return qo(),Ec(u),r.flags|=256,Yt(t,r,o,c),r.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function N1(t,r,o){var c=r.pendingProps,u=ut.current,h=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),nt(ut,u&1),t===null)return Ic(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,h?(c=r.mode,h=r.child,b={mode:"hidden",children:b},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=b):h=Fs(b,c,0,null),t=xo(t,c,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=sd(o),r.memoizedState=id,t):ld(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return r3(t,r,b,c,I,u,o);if(h){h=c.fallback,b=r.mode,u=t.child,I=u.sibling;var W={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=W,r.deletions=null):(c=Hr(u,W),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?h=Hr(I,h):(h=xo(h,b,o,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,b=t.child.memoizedState,b=b===null?sd(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},h.memoizedState=b,h.childLanes=t.childLanes&~o,r.memoizedState=id,c}return h=t.child,t=h.sibling,c=Hr(h,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=c,r.memoizedState=null,c}function ld(t,r){return r=Fs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ss(t,r,o,c){return c!==null&&Ec(c),Vo(r,t.child,null,o),t=ld(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function r3(t,r,o,c,u,h,b){if(o)return r.flags&256?(r.flags&=-257,c=nd(Error(i(422))),Ss(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=c.fallback,u=r.mode,c=Fs({mode:"visible",children:c.children},u,0,null),h=xo(h,u,b,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,(r.mode&1)!==0&&Vo(r,t.child,null,b),r.child.memoizedState=sd(b),r.memoizedState=id,h);if((r.mode&1)===0)return Ss(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,h=Error(i(419)),c=nd(h,c,void 0),Ss(t,r,b,c)}if(I=(b&t.childLanes)!==0,Jt||I){if(c=Nt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,fr(t,u),Hn(c,t,u,-1))}return Cd(),c=nd(Error(i(421))),Ss(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=g3.bind(null,t),u._reactRetry=r,null):(t=h.treeContext,pn=Ar(u.nextSibling),un=r,lt=!0,Fn=null,t!==null&&(_n[Cn++]=pr,_n[Cn++]=hr,_n[Cn++]=lo,pr=t.id,hr=t.overflow,lo=r),r=ld(r,c.children),r.flags|=4096,r)}function R1(t,r,o){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Fc(t.return,r,o)}function cd(t,r,o,c,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=u)}function L1(t,r,o){var c=r.pendingProps,u=c.revealOrder,h=c.tail;if(Yt(t,r,c.children,o),c=ut.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R1(t,o,r);else if(t.tag===19)R1(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(nt(ut,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(o=r.child,u=null;o!==null;)t=o.alternate,t!==null&&ys(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=r.child,r.child=null):(u=o.sibling,o.sibling=null),cd(r,!1,u,o,h);break;case"backwards":for(o=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&ys(t)===null){r.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}cd(r,!0,o,null,h);break;case"together":cd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ms(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function gr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),fo|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,o=Hr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Hr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function o3(t,r,o){switch(r.tag){case 3:M1(r),qo();break;case 5:qh(r);break;case 1:Xt(r.type)&&cs(r);break;case 4:Wc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;nt(ms,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(nt(ut,ut.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?N1(t,r,o):(nt(ut,ut.current&1),t=gr(t,r,o),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(t.flags&128)!==0){if(c)return L1(t,r,o);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),nt(ut,ut.current),c)break;return null;case 22:case 23:return r.lanes=0,C1(t,r,o)}return gr(t,r,o)}var A1,dd,T1,I1;A1=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},dd=function(){},T1=function(t,r,o,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,po(er.current);var h=null;switch(o){case"input":u=ye(t,u),c=ye(t,c),h=[];break;case"select":u=q({},u,{value:void 0}),c=q({},c,{value:void 0}),h=[];break;case"textarea":u=St(t,u),c=St(t,c),h=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=is)}ft(o,c);var b;o=null;for(te in u)if(!c.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var I=u[te];for(b in I)I.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in c){var W=c[te];if(I=u!=null?u[te]:void 0,c.hasOwnProperty(te)&&W!==I&&(W!=null||I!=null))if(te==="style")if(I){for(b in I)!I.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in W)W.hasOwnProperty(b)&&I[b]!==W[b]&&(o||(o={}),o[b]=W[b])}else o||(h||(h=[]),h.push(te,o)),o=W;else te==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,I=I?I.__html:void 0,W!=null&&I!==W&&(h=h||[]).push(te,W)):te==="children"?typeof W!="string"&&typeof W!="number"||(h=h||[]).push(te,""+W):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(W!=null&&te==="onScroll"&&at("scroll",t),h||I===W||(h=[])):(h=h||[]).push(te,W))}o&&(h=h||[]).push("style",o);var te=h;(r.updateQueue=te)&&(r.flags|=4)}},I1=function(t,r,o,c){o!==c&&(r.flags|=4)};function ri(t,r){if(!lt)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Ht(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(r)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=o,r}function a3(t,r,o){var c=r.pendingProps;switch(Ac(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(r),null;case 1:return Xt(r.type)&&ls(),Ht(r),null;case 3:return c=r.stateNode,Ko(),it(Zt),it(Bt),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(hs(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Fn!==null&&(bd(Fn),Fn=null))),dd(t,r),Ht(r),null;case 5:Hc(r);var u=po(Xa.current);if(o=r.type,t!==null&&r.stateNode!=null)T1(t,r,o,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Ht(r),null}if(t=po(er.current),hs(r)){c=r.stateNode,o=r.type;var h=r.memoizedProps;switch(c[Jn]=r,c[Ga]=h,t=(r.mode&1)!==0,o){case"dialog":at("cancel",c),at("close",c);break;case"iframe":case"object":case"embed":at("load",c);break;case"video":case"audio":for(u=0;u<Ua.length;u++)at(Ua[u],c);break;case"source":at("error",c);break;case"img":case"image":case"link":at("error",c),at("load",c);break;case"details":at("toggle",c);break;case"input":Ce(c,h),at("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},at("invalid",c);break;case"textarea":Oe(c,h),at("invalid",c)}ft(o,h),u=null;for(var b in h)if(h.hasOwnProperty(b)){var I=h[b];b==="children"?typeof I=="string"?c.textContent!==I&&(h.suppressHydrationWarning!==!0&&as(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&as(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&at("scroll",c)}switch(o){case"input":ue(c),Pe(c,h,!0);break;case"textarea":ue(c),ht(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=is)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(o,{is:c.is}):(t=b.createElement(o),o==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,o),t[Jn]=r,t[Ga]=c,A1(t,r,!1,!1),r.stateNode=t;e:{switch(b=gt(o,c),o){case"dialog":at("cancel",t),at("close",t),u=c;break;case"iframe":case"object":case"embed":at("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ua.length;u++)at(Ua[u],t);u=c;break;case"source":at("error",t),u=c;break;case"img":case"image":case"link":at("error",t),at("load",t),u=c;break;case"details":at("toggle",t),u=c;break;case"input":Ce(t,c),u=ye(t,c),at("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=q({},c,{value:void 0}),at("invalid",t);break;case"textarea":Oe(t,c),u=St(t,c),at("invalid",t);break;default:u=c}ft(o,u),I=u;for(h in I)if(I.hasOwnProperty(h)){var W=I[h];h==="style"?Te(t,W):h==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Kn(t,W)):h==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&bn(t,W):typeof W=="number"&&bn(t,""+W):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?W!=null&&h==="onScroll"&&at("scroll",t):W!=null&&S(t,h,W,b))}switch(o){case"input":ue(t),Pe(t,c,!1);break;case"textarea":ue(t),ht(t);break;case"option":c.value!=null&&t.setAttribute("value",""+O(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Ge(t,!!c.multiple,h,!1):c.defaultValue!=null&&Ge(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=is)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ht(r),null;case 6:if(t&&r.stateNode!=null)I1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(o=po(Xa.current),po(er.current),hs(r)){if(c=r.stateNode,o=r.memoizedProps,c[Jn]=r,(h=c.nodeValue!==o)&&(t=un,t!==null))switch(t.tag){case 3:as(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&as(c.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Jn]=r,r.stateNode=c}return Ht(r),null;case 13:if(it(ut),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)zh(),qo(),r.flags|=98560,h=!1;else if(h=hs(r),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Jn]=r}else qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ht(r),h=!1}else Fn!==null&&(bd(Fn),Fn=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ut.current&1)!==0?Ct===0&&(Ct=3):Cd())),r.updateQueue!==null&&(r.flags|=4),Ht(r),null);case 4:return Ko(),dd(t,r),t===null&&qa(r.stateNode.containerInfo),Ht(r),null;case 10:return Oc(r.type._context),Ht(r),null;case 17:return Xt(r.type)&&ls(),Ht(r),null;case 19:if(it(ut),h=r.memoizedState,h===null)return Ht(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)ri(h,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=ys(t),b!==null){for(r.flags|=128,ri(h,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)h=o,t=c,h.flags&=14680066,b=h.alternate,b===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=b.childLanes,h.lanes=b.lanes,h.child=b.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=b.memoizedProps,h.memoizedState=b.memoizedState,h.updateQueue=b.updateQueue,h.type=b.type,t=b.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return nt(ut,ut.current&1|2),r.child}t=t.sibling}h.tail!==null&&vt()>Jo&&(r.flags|=128,c=!0,ri(h,!1),r.lanes=4194304)}else{if(!c)if(t=ys(b),t!==null){if(r.flags|=128,c=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ri(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!lt)return Ht(r),null}else 2*vt()-h.renderingStartTime>Jo&&o!==1073741824&&(r.flags|=128,c=!0,ri(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(o=h.last,o!==null?o.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=vt(),r.sibling=null,o=ut.current,nt(ut,c?o&1|2:o&1),r):(Ht(r),null);case 22:case 23:return _d(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(hn&1073741824)!==0&&(Ht(r),r.subtreeFlags&6&&(r.flags|=8192)):Ht(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function i3(t,r){switch(Ac(r),r.tag){case 1:return Xt(r.type)&&ls(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ko(),it(Zt),it(Bt),qc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Hc(r),null;case 13:if(it(ut),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));qo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return it(ut),null;case 4:return Ko(),null;case 10:return Oc(r.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var $s=!1,Ut=!1,s3=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Zo(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){mt(t,r,c)}else o.current=null}function ud(t,r,o){try{o()}catch(c){mt(t,r,c)}}var E1=!1;function l3(t,r){if(_c=Yi,t=hh(),mc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var b=0,I=-1,W=-1,te=0,he=0,fe=t,pe=null;t:for(;;){for(var be;fe!==o||u!==0&&fe.nodeType!==3||(I=b+u),fe!==h||c!==0&&fe.nodeType!==3||(W=b+c),fe.nodeType===3&&(b+=fe.nodeValue.length),(be=fe.firstChild)!==null;)pe=fe,fe=be;for(;;){if(fe===t)break t;if(pe===o&&++te===u&&(I=b),pe===h&&++he===c&&(W=b),(be=fe.nextSibling)!==null)break;fe=pe,pe=fe.parentNode}fe=be}o=I===-1||W===-1?null:{start:I,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cc={focusedElem:t,selectionRange:o},Yi=!1,ke=r;ke!==null;)if(r=ke,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ke=t;else for(;ke!==null;){r=ke;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Se=je.memoizedProps,xt=je.memoizedState,Q=r.stateNode,V=Q.getSnapshotBeforeUpdate(r.elementType===r.type?Se:Dn(r.type,Se),xt);Q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=r.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ve){mt(r,r.return,ve)}if(t=r.sibling,t!==null){t.return=r.return,ke=t;break}ke=r.return}return je=E1,E1=!1,je}function oi(t,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&ud(r,o,h)}u=u.next}while(u!==c)}}function Ns(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function pd(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function P1(t){var r=t.alternate;r!==null&&(t.alternate=null,P1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Jn],delete r[Ga],delete r[$c],delete r[Ux],delete r[qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z1(t){return t.tag===5||t.tag===3||t.tag===4}function O1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,r,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=is));else if(c!==4&&(t=t.child,t!==null))for(hd(t,r,o),t=t.sibling;t!==null;)hd(t,r,o),t=t.sibling}function fd(t,r,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(fd(t,r,o),t=t.sibling;t!==null;)fd(t,r,o),t=t.sibling}var Ot=null,Bn=!1;function Or(t,r,o){for(o=o.child;o!==null;)F1(t,r,o),o=o.sibling}function F1(t,r,o){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Wi,o)}catch{}switch(o.tag){case 5:Ut||Zo(o,r);case 6:var c=Ot,u=Bn;Ot=null,Or(t,r,o),Ot=c,Bn=u,Ot!==null&&(Bn?(t=Ot,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ot.removeChild(o.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,o=o.stateNode,t.nodeType===8?Mc(t.parentNode,o):t.nodeType===1&&Mc(t,o),Pa(t)):Mc(Ot,o.stateNode));break;case 4:c=Ot,u=Bn,Ot=o.stateNode.containerInfo,Bn=!0,Or(t,r,o),Ot=c,Bn=u;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var h=u,b=h.destroy;h=h.tag,b!==void 0&&((h&2)!==0||(h&4)!==0)&&ud(o,r,b),u=u.next}while(u!==c)}Or(t,r,o);break;case 1:if(!Ut&&(Zo(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){mt(o,r,I)}Or(t,r,o);break;case 21:Or(t,r,o);break;case 22:o.mode&1?(Ut=(c=Ut)||o.memoizedState!==null,Or(t,r,o),Ut=c):Or(t,r,o);break;default:Or(t,r,o)}}function D1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new s3),r.forEach(function(c){var u=v3.bind(null,t,c);o.has(c)||(o.add(c),c.then(u,u))})}}function Wn(t,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var h=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Ot=I.stateNode,Bn=!1;break e;case 3:Ot=I.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=I.stateNode.containerInfo,Bn=!0;break e}I=I.return}if(Ot===null)throw Error(i(160));F1(h,b,u),Ot=null,Bn=!1;var W=u.alternate;W!==null&&(W.return=null),u.return=null}catch(te){mt(u,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)B1(r,t),r=r.sibling}function B1(t,r){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(r,t),nr(t),c&4){try{oi(3,t,t.return),Ns(3,t)}catch(Se){mt(t,t.return,Se)}try{oi(5,t,t.return)}catch(Se){mt(t,t.return,Se)}}break;case 1:Wn(r,t),nr(t),c&512&&o!==null&&Zo(o,o.return);break;case 5:if(Wn(r,t),nr(t),c&512&&o!==null&&Zo(o,o.return),t.flags&32){var u=t.stateNode;try{bn(u,"")}catch(Se){mt(t,t.return,Se)}}if(c&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,b=o!==null?o.memoizedProps:h,I=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&Ae(u,h),gt(I,b);var te=gt(I,h);for(b=0;b<W.length;b+=2){var he=W[b],fe=W[b+1];he==="style"?Te(u,fe):he==="dangerouslySetInnerHTML"?Kn(u,fe):he==="children"?bn(u,fe):S(u,he,fe,te)}switch(I){case"input":Ne(u,h);break;case"textarea":ot(u,h);break;case"select":var pe=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?Ge(u,!!h.multiple,be,!1):pe!==!!h.multiple&&(h.defaultValue!=null?Ge(u,!!h.multiple,h.defaultValue,!0):Ge(u,!!h.multiple,h.multiple?[]:"",!1))}u[Ga]=h}catch(Se){mt(t,t.return,Se)}}break;case 6:if(Wn(r,t),nr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Se){mt(t,t.return,Se)}}break;case 3:if(Wn(r,t),nr(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Pa(r.containerInfo)}catch(Se){mt(t,t.return,Se)}break;case 4:Wn(r,t),nr(t);break;case 13:Wn(r,t),nr(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(vd=vt())),c&4&&D1(t);break;case 22:if(he=o!==null&&o.memoizedState!==null,t.mode&1?(Ut=(te=Ut)||he,Wn(r,t),Ut=te):Wn(r,t),nr(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!he&&(t.mode&1)!==0)for(ke=t,he=t.child;he!==null;){for(fe=ke=he;ke!==null;){switch(pe=ke,be=pe.child,pe.tag){case 0:case 11:case 14:case 15:oi(4,pe,pe.return);break;case 1:Zo(pe,pe.return);var je=pe.stateNode;if(typeof je.componentWillUnmount=="function"){c=pe,o=pe.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Se){mt(c,o,Se)}}break;case 5:Zo(pe,pe.return);break;case 22:if(pe.memoizedState!==null){U1(fe);continue}}be!==null?(be.return=pe,ke=be):U1(fe)}he=he.sibling}e:for(he=null,fe=t;;){if(fe.tag===5){if(he===null){he=fe;try{u=fe.stateNode,te?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=fe.stateNode,W=fe.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,I.style.display=Ao("display",b))}catch(Se){mt(t,t.return,Se)}}}else if(fe.tag===6){if(he===null)try{fe.stateNode.nodeValue=te?"":fe.memoizedProps}catch(Se){mt(t,t.return,Se)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===t)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===t)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===t)break e;he===fe&&(he=null),fe=fe.return}he===fe&&(he=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Wn(r,t),nr(t),c&4&&D1(t);break;case 21:break;default:Wn(r,t),nr(t)}}function nr(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(z1(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(bn(u,""),c.flags&=-33);var h=O1(t);fd(t,h,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=O1(t);hd(t,I,b);break;default:throw Error(i(161))}}catch(W){mt(t,t.return,W)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function c3(t,r,o){ke=t,W1(t)}function W1(t,r,o){for(var c=(t.mode&1)!==0;ke!==null;){var u=ke,h=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||$s;if(!b){var I=u.alternate,W=I!==null&&I.memoizedState!==null||Ut;I=$s;var te=Ut;if($s=b,(Ut=W)&&!te)for(ke=u;ke!==null;)b=ke,W=b.child,b.tag===22&&b.memoizedState!==null?q1(u):W!==null?(W.return=b,ke=W):q1(u);for(;h!==null;)ke=h,W1(h),h=h.sibling;ke=u,$s=I,Ut=te}H1(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ke=h):H1(t)}}function H1(t){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ut||Ns(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ut)if(o===null)c.componentDidMount();else{var u=r.elementType===r.type?o.memoizedProps:Dn(r.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Uh(r,h,c);break;case 3:var b=r.updateQueue;if(b!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Uh(r,b,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var he=te.memoizedState;if(he!==null){var fe=he.dehydrated;fe!==null&&Pa(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ut||r.flags&512&&pd(r)}catch(pe){mt(r,r.return,pe)}}if(r===t){ke=null;break}if(o=r.sibling,o!==null){o.return=r.return,ke=o;break}ke=r.return}}function U1(t){for(;ke!==null;){var r=ke;if(r===t){ke=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ke=o;break}ke=r.return}}function q1(t){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ns(4,r)}catch(W){mt(r,o,W)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(W){mt(r,u,W)}}var h=r.return;try{pd(r)}catch(W){mt(r,h,W)}break;case 5:var b=r.return;try{pd(r)}catch(W){mt(r,b,W)}}}catch(W){mt(r,r.return,W)}if(r===t){ke=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ke=I;break}ke=r.return}}var d3=Math.ceil,Rs=P.ReactCurrentDispatcher,md=P.ReactCurrentOwner,Mn=P.ReactCurrentBatchConfig,Ye=0,Nt=null,wt=null,Ft=0,hn=0,Xo=Tr(0),Ct=0,ai=null,fo=0,Ls=0,gd=0,ii=null,en=null,vd=0,Jo=1/0,vr=null,As=!1,xd=null,Fr=null,Ts=!1,Dr=null,Is=0,si=0,yd=null,Es=-1,Ps=0;function Kt(){return(Ye&6)!==0?vt():Es!==-1?Es:Es=vt()}function Br(t){return(t.mode&1)===0?1:(Ye&2)!==0&&Ft!==0?Ft&-Ft:Gx.transition!==null?(Ps===0&&(Ps=Op()),Ps):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Gp(t.type)),t)}function Hn(t,r,o,c){if(50<si)throw si=0,yd=null,Error(i(185));La(t,o,c),((Ye&2)===0||t!==Nt)&&(t===Nt&&((Ye&2)===0&&(Ls|=o),Ct===4&&Wr(t,Ft)),tn(t,c),o===1&&Ye===0&&(r.mode&1)===0&&(Jo=vt()+500,ds&&Er()))}function tn(t,r){var o=t.callbackNode;Gv(t,r);var c=qi(t,t===Nt?Ft:0);if(c===0)o!==null&&Ep(o),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(o!=null&&Ep(o),r===1)t.tag===0?Vx(G1.bind(null,t)):Ah(G1.bind(null,t)),Wx(function(){(Ye&6)===0&&Er()}),o=null;else{switch(Fp(c)){case 1:o=Xl;break;case 4:o=Pp;break;case 16:o=Bi;break;case 536870912:o=zp;break;default:o=Bi}o=tf(o,V1.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function V1(t,r){if(Es=-1,Ps=0,(Ye&6)!==0)throw Error(i(327));var o=t.callbackNode;if(ea()&&t.callbackNode!==o)return null;var c=qi(t,t===Nt?Ft:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=zs(t,c);else{r=c;var u=Ye;Ye|=2;var h=K1();(Nt!==t||Ft!==r)&&(vr=null,Jo=vt()+500,go(t,r));do try{h3();break}catch(I){Y1(t,I)}while(!0);zc(),Rs.current=h,Ye=u,wt!==null?r=0:(Nt=null,Ft=0,r=Ct)}if(r!==0){if(r===2&&(u=Jl(t),u!==0&&(c=u,r=wd(t,u))),r===1)throw o=ai,go(t,0),Wr(t,c),tn(t,vt()),o;if(r===6)Wr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!u3(u)&&(r=zs(t,c),r===2&&(h=Jl(t),h!==0&&(c=h,r=wd(t,h))),r===1))throw o=ai,go(t,0),Wr(t,c),tn(t,vt()),o;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:vo(t,en,vr);break;case 3:if(Wr(t,c),(c&130023424)===c&&(r=vd+500-vt(),10<r)){if(qi(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Kt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Sc(vo.bind(null,t,en,vr),r);break}vo(t,en,vr);break;case 4:if(Wr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-zn(c);h=1<<b,b=r[b],b>u&&(u=b),c&=~h}if(c=u,c=vt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*d3(c/1960))-c,10<c){t.timeoutHandle=Sc(vo.bind(null,t,en,vr),c);break}vo(t,en,vr);break;case 5:vo(t,en,vr);break;default:throw Error(i(329))}}}return tn(t,vt()),t.callbackNode===o?V1.bind(null,t):null}function wd(t,r){var o=ii;return t.current.memoizedState.isDehydrated&&(go(t,r).flags|=256),t=zs(t,r),t!==2&&(r=en,en=o,r!==null&&bd(r)),t}function bd(t){en===null?en=t:en.push.apply(en,t)}function u3(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],h=u.getSnapshot;u=u.value;try{if(!On(h(),u))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(t,r){for(r&=~gd,r&=~Ls,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-zn(r),c=1<<o;t[o]=-1,r&=~c}}function G1(t){if((Ye&6)!==0)throw Error(i(327));ea();var r=qi(t,0);if((r&1)===0)return tn(t,vt()),null;var o=zs(t,r);if(t.tag!==0&&o===2){var c=Jl(t);c!==0&&(r=c,o=wd(t,c))}if(o===1)throw o=ai,go(t,0),Wr(t,r),tn(t,vt()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,vo(t,en,vr),tn(t,vt()),null}function kd(t,r){var o=Ye;Ye|=1;try{return t(r)}finally{Ye=o,Ye===0&&(Jo=vt()+500,ds&&Er())}}function mo(t){Dr!==null&&Dr.tag===0&&(Ye&6)===0&&ea();var r=Ye;Ye|=1;var o=Mn.transition,c=Je;try{if(Mn.transition=null,Je=1,t)return t()}finally{Je=c,Mn.transition=o,Ye=r,(Ye&6)===0&&Er()}}function _d(){hn=Xo.current,it(Xo)}function go(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Bx(o)),wt!==null)for(o=wt.return;o!==null;){var c=o;switch(Ac(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ls();break;case 3:Ko(),it(Zt),it(Bt),qc();break;case 5:Hc(c);break;case 4:Ko();break;case 13:it(ut);break;case 19:it(ut);break;case 10:Oc(c.type._context);break;case 22:case 23:_d()}o=o.return}if(Nt=t,wt=t=Hr(t.current,null),Ft=hn=r,Ct=0,ai=null,gd=Ls=fo=0,en=ii=null,uo!==null){for(r=0;r<uo.length;r++)if(o=uo[r],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,h=o.pending;if(h!==null){var b=h.next;h.next=u,c.next=b}o.pending=c}uo=null}return t}function Y1(t,r){do{var o=wt;try{if(zc(),ws.current=Cs,bs){for(var c=pt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}bs=!1}if(ho=0,$t=_t=pt=null,Ja=!1,ei=0,md.current=null,o===null||o.return===null){Ct=1,ai=r,wt=null;break}e:{var h=t,b=o.return,I=o,W=r;if(r=Ft,I.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var te=W,he=I,fe=he.tag;if((he.mode&1)===0&&(fe===0||fe===11||fe===15)){var pe=he.alternate;pe?(he.updateQueue=pe.updateQueue,he.memoizedState=pe.memoizedState,he.lanes=pe.lanes):(he.updateQueue=null,he.memoizedState=null)}var be=y1(b);if(be!==null){be.flags&=-257,w1(be,b,I,h,r),be.mode&1&&x1(h,te,r),r=be,W=te;var je=r.updateQueue;if(je===null){var Se=new Set;Se.add(W),r.updateQueue=Se}else je.add(W);break e}else{if((r&1)===0){x1(h,te,r),Cd();break e}W=Error(i(426))}}else if(lt&&I.mode&1){var xt=y1(b);if(xt!==null){(xt.flags&65536)===0&&(xt.flags|=256),w1(xt,b,I,h,r),Ec(Qo(W,I));break e}}h=W=Qo(W,I),Ct!==4&&(Ct=2),ii===null?ii=[h]:ii.push(h),h=b;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var Q=g1(h,W,r);Hh(h,Q);break e;case 1:I=W;var V=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Fr===null||!Fr.has(J)))){h.flags|=65536,r&=-r,h.lanes|=r;var ve=v1(h,I,r);Hh(h,ve);break e}}h=h.return}while(h!==null)}Z1(o)}catch(Me){r=Me,wt===o&&o!==null&&(wt=o=o.return);continue}break}while(!0)}function K1(){var t=Rs.current;return Rs.current=Cs,t===null?Cs:t}function Cd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Nt===null||(fo&268435455)===0&&(Ls&268435455)===0||Wr(Nt,Ft)}function zs(t,r){var o=Ye;Ye|=2;var c=K1();(Nt!==t||Ft!==r)&&(vr=null,go(t,r));do try{p3();break}catch(u){Y1(t,u)}while(!0);if(zc(),Ye=o,Rs.current=c,wt!==null)throw Error(i(261));return Nt=null,Ft=0,Ct}function p3(){for(;wt!==null;)Q1(wt)}function h3(){for(;wt!==null&&!Ov();)Q1(wt)}function Q1(t){var r=ef(t.alternate,t,hn);t.memoizedProps=t.pendingProps,r===null?Z1(t):wt=r,md.current=null}function Z1(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=a3(o,r,hn),o!==null){wt=o;return}}else{if(o=i3(o,r),o!==null){o.flags&=32767,wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}if(r=r.sibling,r!==null){wt=r;return}wt=r=t}while(r!==null);Ct===0&&(Ct=5)}function vo(t,r,o){var c=Je,u=Mn.transition;try{Mn.transition=null,Je=1,f3(t,r,o,c)}finally{Mn.transition=u,Je=c}return null}function f3(t,r,o,c){do ea();while(Dr!==null);if((Ye&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Yv(t,h),t===Nt&&(wt=Nt=null,Ft=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ts||(Ts=!0,tf(Bi,function(){return ea(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Mn.transition,Mn.transition=null;var b=Je;Je=1;var I=Ye;Ye|=4,md.current=null,l3(t,o),B1(o,t),Ix(Cc),Yi=!!_c,Cc=_c=null,t.current=o,c3(o),Fv(),Ye=I,Je=b,Mn.transition=h}else t.current=o;if(Ts&&(Ts=!1,Dr=t,Is=u),h=t.pendingLanes,h===0&&(Fr=null),Wv(o.stateNode),tn(t,vt()),r!==null)for(c=t.onRecoverableError,o=0;o<r.length;o++)u=r[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(As)throw As=!1,t=xd,xd=null,t;return(Is&1)!==0&&t.tag!==0&&ea(),h=t.pendingLanes,(h&1)!==0?t===yd?si++:(si=0,yd=t):si=0,Er(),null}function ea(){if(Dr!==null){var t=Fp(Is),r=Mn.transition,o=Je;try{if(Mn.transition=null,Je=16>t?16:t,Dr===null)var c=!1;else{if(t=Dr,Dr=null,Is=0,(Ye&6)!==0)throw Error(i(331));var u=Ye;for(Ye|=4,ke=t.current;ke!==null;){var h=ke,b=h.child;if((ke.flags&16)!==0){var I=h.deletions;if(I!==null){for(var W=0;W<I.length;W++){var te=I[W];for(ke=te;ke!==null;){var he=ke;switch(he.tag){case 0:case 11:case 15:oi(8,he,h)}var fe=he.child;if(fe!==null)fe.return=he,ke=fe;else for(;ke!==null;){he=ke;var pe=he.sibling,be=he.return;if(P1(he),he===te){ke=null;break}if(pe!==null){pe.return=be,ke=pe;break}ke=be}}}var je=h.alternate;if(je!==null){var Se=je.child;if(Se!==null){je.child=null;do{var xt=Se.sibling;Se.sibling=null,Se=xt}while(Se!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&b!==null)b.return=h,ke=b;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:oi(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,ke=Q;break e}ke=h.return}}var V=t.current;for(ke=V;ke!==null;){b=ke;var J=b.child;if((b.subtreeFlags&2064)!==0&&J!==null)J.return=b,ke=J;else e:for(b=V;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ns(9,I)}}catch(Me){mt(I,I.return,Me)}if(I===b){ke=null;break e}var ve=I.sibling;if(ve!==null){ve.return=I.return,ke=ve;break e}ke=I.return}}if(Ye=u,Er(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Wi,t)}catch{}c=!0}return c}finally{Je=o,Mn.transition=r}}return!1}function X1(t,r,o){r=Qo(o,r),r=g1(t,r,1),t=zr(t,r,1),r=Kt(),t!==null&&(La(t,1,r),tn(t,r))}function mt(t,r,o){if(t.tag===3)X1(t,t,o);else for(;r!==null;){if(r.tag===3){X1(r,t,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fr===null||!Fr.has(c))){t=Qo(o,t),t=v1(r,t,1),r=zr(r,t,1),t=Kt(),r!==null&&(La(r,1,t),tn(r,t));break}}r=r.return}}function m3(t,r,o){var c=t.pingCache;c!==null&&c.delete(r),r=Kt(),t.pingedLanes|=t.suspendedLanes&o,Nt===t&&(Ft&o)===o&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>vt()-vd?go(t,0):gd|=o),tn(t,r)}function J1(t,r){r===0&&((t.mode&1)===0?r=1:(r=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var o=Kt();t=fr(t,r),t!==null&&(La(t,r,o),tn(t,o))}function g3(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),J1(t,o)}function v3(t,r){var o=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),J1(t,o)}var ef;ef=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Zt.current)Jt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Jt=!1,o3(t,r,o);Jt=(t.flags&131072)!==0}else Jt=!1,lt&&(r.flags&1048576)!==0&&Th(r,ps,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ms(t,r),t=r.pendingProps;var u=Wo(r,Bt.current);Yo(r,o),u=Yc(null,r,c,t,u,o);var h=Kc();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xt(c)?(h=!0,cs(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Bc(r),u.updater=js,r.stateNode=u,u._reactInternals=r,td(r,c,t,o),r=ad(null,r,c,!0,h,o)):(r.tag=0,lt&&h&&Lc(r),Yt(null,r,u,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Ms(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=y3(c),t=Dn(c,t),u){case 0:r=od(null,r,c,t,o);break e;case 1:r=S1(null,r,c,t,o);break e;case 11:r=b1(null,r,c,t,o);break e;case 14:r=k1(null,r,c,Dn(c.type,t),o);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Dn(c,u),od(t,r,c,u,o);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Dn(c,u),S1(t,r,c,u,o);case 3:e:{if(M1(r),t===null)throw Error(i(387));c=r.pendingProps,h=r.memoizedState,u=h.element,Wh(t,r),xs(r,c,null,o);var b=r.memoizedState;if(c=b.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=Qo(Error(i(423)),r),r=$1(t,r,c,o,u);break e}else if(c!==u){u=Qo(Error(i(424)),r),r=$1(t,r,c,o,u);break e}else for(pn=Ar(r.stateNode.containerInfo.firstChild),un=r,lt=!0,Fn=null,o=Dh(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qo(),c===u){r=gr(t,r,o);break e}Yt(t,r,c,o)}r=r.child}return r;case 5:return qh(r),t===null&&Ic(r),c=r.type,u=r.pendingProps,h=t!==null?t.memoizedProps:null,b=u.children,jc(c,u)?b=null:h!==null&&jc(c,h)&&(r.flags|=32),j1(t,r),Yt(t,r,b,o),r.child;case 6:return t===null&&Ic(r),null;case 13:return N1(t,r,o);case 4:return Wc(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Vo(r,null,c,o):Yt(t,r,c,o),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Dn(c,u),b1(t,r,c,u,o);case 7:return Yt(t,r,r.pendingProps,o),r.child;case 8:return Yt(t,r,r.pendingProps.children,o),r.child;case 12:return Yt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,h=r.memoizedProps,b=u.value,nt(ms,c._currentValue),c._currentValue=b,h!==null)if(On(h.value,b)){if(h.children===u.children&&!Zt.current){r=gr(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var I=h.dependencies;if(I!==null){b=h.child;for(var W=I.firstContext;W!==null;){if(W.context===c){if(h.tag===1){W=mr(-1,o&-o),W.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var he=te.pending;he===null?W.next=W:(W.next=he.next,he.next=W),te.pending=W}}h.lanes|=o,W=h.alternate,W!==null&&(W.lanes|=o),Fc(h.return,o,r),I.lanes|=o;break}W=W.next}}else if(h.tag===10)b=h.type===r.type?null:h.child;else if(h.tag===18){if(b=h.return,b===null)throw Error(i(341));b.lanes|=o,I=b.alternate,I!==null&&(I.lanes|=o),Fc(b,o,r),b=h.sibling}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===r){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}Yt(t,r,u.children,o),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,Yo(r,o),u=jn(u),c=c(u),r.flags|=1,Yt(t,r,c,o),r.child;case 14:return c=r.type,u=Dn(c,r.pendingProps),u=Dn(c.type,u),k1(t,r,c,u,o);case 15:return _1(t,r,r.type,r.pendingProps,o);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Dn(c,u),Ms(t,r),r.tag=1,Xt(c)?(t=!0,cs(r)):t=!1,Yo(r,o),f1(r,c,u),td(r,c,u,o),ad(null,r,c,!0,t,o);case 19:return L1(t,r,o);case 22:return C1(t,r,o)}throw Error(i(156,r.tag))};function tf(t,r){return Ip(t,r)}function x3(t,r,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,r,o,c){return new x3(t,r,o,c)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y3(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===H)return 11;if(t===oe)return 14}return 2}function Hr(t,r){var o=t.alternate;return o===null?(o=$n(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Os(t,r,o,c,u,h){var b=2;if(c=t,typeof t=="function")jd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case A:return xo(o.children,u,h,r);case E:b=8,u|=8;break;case D:return t=$n(12,o,r,u|2),t.elementType=D,t.lanes=h,t;case Y:return t=$n(13,o,r,u),t.elementType=Y,t.lanes=h,t;case ee:return t=$n(19,o,r,u),t.elementType=ee,t.lanes=h,t;case de:return Fs(o,u,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case Z:b=9;break e;case H:b=11;break e;case oe:b=14;break e;case ce:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=$n(b,o,r,u),r.elementType=t,r.type=c,r.lanes=h,r}function xo(t,r,o,c){return t=$n(7,t,c,r),t.lanes=o,t}function Fs(t,r,o,c){return t=$n(22,t,c,r),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function Sd(t,r,o){return t=$n(6,t,null,r),t.lanes=o,t}function Md(t,r,o){return r=$n(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function w3(t,r,o,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function $d(t,r,o,c,u,h,b,I,W){return t=new w3(t,r,o,I,W),r===1?(r=1,h===!0&&(r|=8)):r=0,h=$n(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(h),t}function b3(t,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:t,containerInfo:r,implementation:o}}function nf(t){if(!t)return Ir;t=t._reactInternals;e:{if(ao(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Xt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(Xt(o))return Rh(t,o,r)}return r}function rf(t,r,o,c,u,h,b,I,W){return t=$d(o,c,!0,t,u,h,b,I,W),t.context=nf(null),o=t.current,c=Kt(),u=Br(o),h=mr(c,u),h.callback=r??null,zr(o,h,u),t.current.lanes=u,La(t,u,c),tn(t,c),t}function Ds(t,r,o,c){var u=r.current,h=Kt(),b=Br(u);return o=nf(o),r.context===null?r.context=o:r.pendingContext=o,r=mr(h,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=zr(u,r,b),t!==null&&(Hn(t,u,b,h),vs(t,u,b)),b}function Bs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function of(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Nd(t,r){of(t,r),(t=t.alternate)&&of(t,r)}function k3(){return null}var af=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rd(t){this._internalRoot=t}Ws.prototype.render=Rd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));Ds(t,r,null,null)},Ws.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;mo(function(){Ds(null,t,null,null)}),r[dr]=null}};function Ws(t){this._internalRoot=t}Ws.prototype.unstable_scheduleHydration=function(t){if(t){var r=Wp();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Nr.length&&r!==0&&r<Nr[o].priority;o++);Nr.splice(o,0,t),o===0&&qp(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sf(){}function _3(t,r,o,c,u){if(u){if(typeof c=="function"){var h=c;c=function(){var te=Bs(b);h.call(te)}}var b=rf(r,c,t,0,null,!1,!1,"",sf);return t._reactRootContainer=b,t[dr]=b.current,qa(t.nodeType===8?t.parentNode:t),mo(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var te=Bs(W);I.call(te)}}var W=$d(t,0,!1,null,null,!1,!1,"",sf);return t._reactRootContainer=W,t[dr]=W.current,qa(t.nodeType===8?t.parentNode:t),mo(function(){Ds(r,W,o,c)}),W}function Us(t,r,o,c,u){var h=o._reactRootContainer;if(h){var b=h;if(typeof u=="function"){var I=u;u=function(){var W=Bs(b);I.call(W)}}Ds(r,b,t,u)}else b=_3(o,r,t,u,c);return Bs(b)}Dp=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ra(r.pendingLanes);o!==0&&(tc(r,o|1),tn(r,vt()),(Ye&6)===0&&(Jo=vt()+500,Er()))}break;case 13:mo(function(){var c=fr(t,1);if(c!==null){var u=Kt();Hn(c,t,1,u)}}),Nd(t,1)}},nc=function(t){if(t.tag===13){var r=fr(t,134217728);if(r!==null){var o=Kt();Hn(r,t,134217728,o)}Nd(t,134217728)}},Bp=function(t){if(t.tag===13){var r=Br(t),o=fr(t,r);if(o!==null){var c=Kt();Hn(o,t,r,c)}Nd(t,r)}},Wp=function(){return Je},Hp=function(t,r){var o=Je;try{return Je=t,r()}finally{Je=o}},ro=function(t,r,o){switch(r){case"input":if(Ne(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==t&&c.form===t.form){var u=ss(c);if(!u)throw Error(i(90));xe(c),Ne(c,u)}}}break;case"textarea":ot(t,o);break;case"select":r=o.value,r!=null&&Ge(t,!!o.multiple,r,!1)}},Mt=kd,Di=mo;var C3={usingClientEntryPoint:!1,Events:[Ya,Do,ss,Fi,Qn,kd]},li={findFiberByHostInstance:io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j3={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ap(t),t===null?null:t.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||k3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{Wi=qs.inject(j3),Xn=qs}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C3,nn.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(r))throw Error(i(200));return b3(t,r,null,o)},nn.createRoot=function(t,r){if(!Ld(t))throw Error(i(299));var o=!1,c="",u=af;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=$d(t,1,!1,null,null,o,!1,c,u),t[dr]=r.current,qa(t.nodeType===8?t.parentNode:t),new Rd(r)},nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Ap(r),t=t===null?null:t.stateNode,t},nn.flushSync=function(t){return mo(t)},nn.hydrate=function(t,r,o){if(!Hs(r))throw Error(i(200));return Us(null,t,r,!0,o)},nn.hydrateRoot=function(t,r,o){if(!Ld(t))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,h="",b=af;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),r=rf(r,null,t,1,o??null,u,!1,h,b),t[dr]=r.current,qa(t),c)for(t=0;t<c.length;t++)o=c[t],u=o._getVersion,u=u(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,u]:r.mutableSourceEagerHydrationData.push(o,u);return new Ws(r)},nn.render=function(t,r,o){if(!Hs(r))throw Error(i(200));return Us(null,t,r,!1,o)},nn.unmountComponentAtNode=function(t){if(!Hs(t))throw Error(i(40));return t._reactRootContainer?(mo(function(){Us(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1},nn.unstable_batchedUpdates=kd,nn.unstable_renderSubtreeIntoContainer=function(t,r,o,c){if(!Hs(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Us(t,r,o,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var mf;function S0(){if(mf)return Id.exports;mf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Id.exports=A3(),Id.exports}var gf;function T3(){if(gf)return Vs;gf=1;var e=S0();return Vs.createRoot=e.createRoot,Vs.hydrateRoot=e.hydrateRoot,Vs}var I3=T3();const E3=j0(I3);function M0(e){var a,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(a=0;a<l;a++)e[a]&&(i=M0(e[a]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,a,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(a=M0(e))&&(s&&(s+=" "),s+=a);return s}const No=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};No.displayName="PlusIcon";const P3="_root_7uomf_13",z3="_sm_7uomf_82",O3="_md_7uomf_88",F3="_lg_7uomf_94",D3="_horizontal_7uomf_107",B3="_alignStart_7uomf_121",W3="_vertical_7uomf_125",H3="_inner_7uomf_131",U3="_iconSlot_7uomf_146",q3="_label_7uomf_163",yo={root:P3,sm:z3,md:O3,lg:F3,horizontal:D3,alignStart:B3,vertical:W3,inner:H3,iconSlot:U3,label:q3};function vf(e){return typeof e=="number"?`${e}px`:e}const V3=g.forwardRef(({size:e="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:p,borderRadius:m,className:v,style:x,disabled:y,type:w="button",...k},M)=>{const _=d??n.jsx(No,{size:"100%"}),C={};return p!==void 0&&(C["--area-min-height"]=vf(p)),m!==void 0&&(C["--area-radius"]=vf(m)),n.jsx("button",{ref:M,type:w,className:ie(yo.root,yo[e],yo[a],i==="start"&&yo.alignStart,v),disabled:y,"data-size":e,"data-layout":a,style:{...C,...x},...k,children:n.jsxs("span",{className:yo.inner,children:[n.jsx("span",{className:yo.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&n.jsx("span",{className:yo.label,children:s})]})})});V3.displayName="AreaButton";const G3="_root_b29pw_8",Y3="_image_b29pw_33",K3="_initials_b29pw_40",Q3="_iconSlot_b29pw_52",qr={root:G3,image:Y3,initials:K3,iconSlot:Q3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Z3({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function X3(e){const a=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const Yn=g.forwardRef(({src:e,alt:a,initials:i,name:s,icon:l,size:d="md",color:p="neutral",variant:m="subtle",shape:v="circle",className:x,...y},w)=>{const[k,M]=g.useState(!1),_=!!e&&!k,C=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?X3(s):"");let L;return _?L=n.jsx("img",{src:e,alt:a??"",className:qr.image,onError:()=>M(!0),draggable:!1},e):C?L=n.jsx("span",{className:qr.initials,"aria-hidden":a?void 0:!0,children:C}):L=n.jsx("span",{className:qr.iconSlot,"aria-hidden":"true",children:l??n.jsx(Z3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":p,"data-variant":m,"data-shape":v,className:ie(qr.root,qr[`size-${d}`],qr[`color-${p}`],qr[`variant-${m}`],qr[`shape-${v}`],x),...y,children:L})});Yn.displayName="Avatar";const J3="_root_uqz3u_7",ey={root:J3},Qt=g.forwardRef(({as:e="span",className:a,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(ey.root,a),...s,children:i}));Qt.displayName="Eyebrow";const ty="_root_1tnwf_15",ny={root:ty},ry=g.forwardRef(({scale:e="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:p=!1,className:m,onInput:v,...x},y)=>{const w=i!==void 0,k=g.useRef(null),[M,_]=g.useState(()=>w?!i:!s),C=g.useCallback(S=>{k.current=S,typeof y=="function"?y(S):y&&(y.current=S)},[y]);g.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),g.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const L=S=>{const P=S.currentTarget.textContent??"";_(P===""),l==null||l(P),v==null||v(S)},N=S=>{S.preventDefault();const P=S.clipboardData.getData("text/plain");document.execCommand("insertText",!1,P)},j=!p&&!d;return n.jsx("span",{ref:C,contentEditable:j?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":M||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":d||void 0,className:ie(ny.root,m),onInput:L,onPaste:N,...x})});ry.displayName="TypeBox";const oy="_root_1brpy_12",ay="_ghost_1brpy_27",iy="_path_1brpy_32",di={root:oy,"ai-spin":"_ai-spin_1brpy_1",ghost:ay,"ai-morph":"_ai-morph_1brpy_1",path:iy,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},sy={xs:16,sm:24,md:32,lg:48,xl:64},ly={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},xf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Gs=e=>e==="inverse"||e==="inverse-light",cy=e=>e==="stroke"||e==="stroke-light",Du=g.forwardRef(({size:e="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...p},m)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${v}`,y=`aiglow-${v}`,w=typeof e=="string",k=w?sy[e]:e,M=w?ly[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=a==="gradient-fill"?`url(#${x})`:Gs(a)?"currentColor":"none",C=Gs(a)?"none":cy(a)?"currentColor":`url(#${x})`,L="currentColor",N=a!=="stroke"&&a!=="stroke-light"&&!Gs(a);return n.jsxs("svg",{ref:m,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(di.root,di[`variant-${a}`],di[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!Gs(a)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:xf,stroke:L,strokeWidth:M*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:di.ghost}),n.jsx("path",{d:xf,fill:_,stroke:C==="none"?void 0:C,strokeWidth:C==="none"?void 0:M,strokeLinecap:"round",strokeLinejoin:"round",filter:N?`url(#${y})`:void 0,className:di.path})]})});Du.displayName="AILoader";const dy="_root_10act_14",uy="_hovered_10act_68",py="_loading_10act_69",hy="_sm_10act_90",fy="_md_10act_98",my="_lg_10act_106",gy="_dark_10act_116",vy="_icon_10act_122",ta={root:dy,hovered:uy,loading:py,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:hy,md:fy,lg:my,dark:gy,icon:vy},yf={sm:12,md:14,lg:18};function xy({size:e,light:a}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const $0=g.forwardRef(({size:e="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...p},m)=>{const[v,x]=g.useState(!1);return n.jsx("button",{ref:m,className:ie(ta.root,ta[e],a&&ta.dark,i?ta.loading:v&&ta.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...p,children:n.jsx("span",{className:ta.icon,children:i?n.jsx(Du,{size:yf[e],variant:a?"inverse-light":"gradient-fill"}):n.jsx(xy,{size:yf[e],light:a})})})});$0.displayName="AICoreButton";const yy="_root_1qx4u_9",wy="_star_1qx4u_34",zd={root:yy,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:wy},by="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",N0=g.forwardRef(({size:e="sm",className:a,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(zd.root,zd[`size-${e}`],a),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:zd.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:by,fill:"currentColor"})})}));N0.displayName="AIAvatar";const ky="_shell_lalw3_21",_y="_wrapper_lalw3_58",Cy="_card_lalw3_65",jy="_cardClip_lalw3_94",Sy="_textarea_lalw3_160",My="_actions_lalw3_203",ca={shell:ky,wrapper:_y,card:Cy,cardClip:jy,textarea:Sy,actions:My},R0=g.forwardRef(({className:e,children:a,...i},s)=>n.jsx("div",{ref:s,className:ie(ca.shell,e),...i,children:a}));R0.displayName="AIComposer";function $y(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const L0=g.forwardRef(({value:e,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:p,onKeyDown:m,disabled:v,children:x,style:y,...w},k)=>{const M=g.useRef(null);g.useEffect(()=>{const j=M.current;j&&(j.style.height="auto",j.style.height=`${j.scrollHeight}px`)},[e]);const _=g.useCallback(j=>a(j.target.value),[a]),C=g.useCallback(j=>{m==null||m(j),!j.defaultPrevented&&j.key==="Enter"&&!j.shiftKey&&i&&(j.preventDefault(),i())},[m,i]),L=g.useCallback(j=>{M.current=j,$y(k,j)},[k]),N={...y??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(ca.wrapper,p),"data-radius":l,children:n.jsx("div",{className:ca.card,children:n.jsxs("div",{className:ca.cardClip,children:[n.jsx("textarea",{...w,ref:L,className:ca.textarea,rows:1,value:e,onChange:_,onKeyDown:C,placeholder:d,disabled:v,style:N}),x!=null&&n.jsx("div",{className:ca.actions,children:x})]})})})});L0.displayName="AIComposerInput";const Ny="_root_fv0gc_10",Ry="_simple_fv0gc_28",Ly="_float_fv0gc_83",wf={root:Ny,simple:Ry,float:Ly},Ay=g.forwardRef(({variant:e="simple",className:a,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(wf.root,wf[e],a),...s,children:i}));Ay.displayName="AIConversation";const Ty="_fadeFrame_1l0ib_19",Iy="_scroller_1l0ib_32",Ey="_content_1l0ib_89",Py="_messageBlock_1l0ib_108",zy="_messageBlockAi_1l0ib_116",Oy="_inboundBlock_1l0ib_128",Fy="_inboundLoader_1l0ib_136",Dy="_inboundLoaderLabel_1l0ib_146",By="_outboundBlock_1l0ib_153",Wy="_outboundHeader_1l0ib_161",Hy="_messageBlockUser_1l0ib_168",Uy="_aiThreadOutboundIn_1l0ib_1",qy="_messageBody_1l0ib_182",Vy="_messageBodyAi_1l0ib_193",Gy="_messageBodyUser_1l0ib_200",Yy="_label_1l0ib_159",Ky="_labelAi_1l0ib_221",Qy="_labelUser_1l0ib_159",Zy="_labelAvatar_1l0ib_224",Xy="_labelText_1l0ib_237",Jy="_timestamp_1l0ib_244",e5="_timestampAi_1l0ib_259",t5="_timestampUser_1l0ib_260",n5="_timestampInline_1l0ib_270",r5="_aiThreadOutboundFadeIn_1l0ib_1",We={fadeFrame:Ty,scroller:Iy,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:Ey,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Py,messageBlockAi:zy,inboundBlock:Oy,inboundLoader:Fy,inboundLoaderLabel:Dy,outboundBlock:By,outboundHeader:Wy,messageBlockUser:Hy,aiThreadOutboundIn:Uy,messageBody:qy,messageBodyAi:Vy,messageBodyUser:Gy,label:Yy,labelAi:Ky,labelUser:Qy,labelAvatar:Zy,labelText:Xy,timestamp:Jy,timestampAi:e5,timestampUser:t5,timestampInline:n5,aiThreadOutboundFadeIn:r5},bf=8;function o5(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const a5=g.forwardRef(({density:e="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...p},m)=>{const v=g.useRef(null),x=g.useRef(null),y=g.useRef(!0),[w,k]=g.useState(!1),[M,_]=g.useState(!1),C=g.useCallback(L=>{v.current=L,o5(m,L)},[m]);return g.useEffect(()=>{const L=v.current,N=x.current;if(!L||!N)return;const j=()=>{const{scrollTop:A,scrollHeight:E,clientHeight:D}=L;return E-A-D<s},S=A=>{L.scrollTo({top:L.scrollHeight,behavior:A?"smooth":"auto"})},P=()=>{const{scrollTop:A,scrollHeight:E,clientHeight:D}=L,G=A>bf,Z=E-A-D>bf;k(H=>H===G?H:G),_(H=>H===Z?H:Z)};i&&(S(!1),y.current=!0),P();const $=()=>{y.current=j(),P()};L.addEventListener("scroll",$,{passive:!0});const R=new ResizeObserver(()=>{i&&y.current&&S(!0),P()});return R.observe(N),R.observe(L),()=>{L.removeEventListener("scroll",$),R.disconnect()}},[i,s]),n.jsx("div",{className:We.fadeFrame,"data-fade-top":w,"data-fade-bottom":M,children:n.jsx("div",{ref:C,className:ie(We.scroller,We[`padding-${a}`],l),...p,children:n.jsx("div",{ref:x,className:ie(We.content,We[`density-${e}`]),children:d})})})});a5.displayName="AIThread";const Ll=g.forwardRef(({align:e="ai",avatar:a,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(We.label,e==="user"?We.labelUser:We.labelAi,i),...l,children:[a!=null&&n.jsx("span",{className:We.labelAvatar,children:a}),n.jsx("span",{className:We.labelText,children:s})]}));Ll.displayName="AILabel";const i5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function s5(e,a){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const Ri=g.forwardRef(({value:e,align:a="ai",format:i=i5,inline:s=!1,className:l,...d},p)=>{const m=g.useMemo(()=>s5(e,i),[e,i]);return m?n.jsx("time",{ref:p,className:ie(We.timestamp,s?We.timestampInline:a==="user"?We.timestampUser:We.timestampAi,l),dateTime:m.iso,...d,children:m.text}):null});Ri.displayName="AITimestamp";function l5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ri,{align:"ai",value:e}):e}function c5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Ll,{align:"ai",children:e}):e}const d5=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(We.messageBlock,We.messageBlockAi,i),...l,children:[c5(e),n.jsx("div",{className:ie(We.messageBody,We.messageBodyAi),children:s}),l5(a)]}));d5.displayName="AIAssistantMessage";function u5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ri,{align:"user",value:e}):e}function p5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Ll,{align:"user",children:e}):e}const h5=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(We.messageBlock,We.messageBlockUser,i),...l,children:[p5(e),n.jsx("div",{className:ie(We.messageBody,We.messageBodyUser),children:s}),u5(a)]}));h5.displayName="AIUserMessage";function f5(e){return e===!1?null:e==null||e===!0?n.jsx(N0,{size:"sm"}):e}function m5(e,a){return e==null&&a==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Ll,{align:"ai",avatar:a,children:e}):e}const g5=g.forwardRef(({avatar:e,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:p,children:m,...v},x)=>{const y=f5(e),w=m5(a,y);return n.jsxs("div",{ref:x,"data-author":"ai",className:ie(We.messageBlock,We.messageBlockAi,We.inboundBlock,p),...v,children:[w,i,m!=null&&n.jsx("div",{className:ie(We.messageBody,We.messageBodyAi),children:m}),l&&n.jsxs("div",{className:We.inboundLoader,"aria-live":"polite",children:[n.jsx(Du,{size:"xs"}),d!=null&&n.jsx("span",{className:We.inboundLoaderLabel,children:d})]}),s]})});g5.displayName="AIInboundMessage";function v5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const x5=g.forwardRef(({label:e="You",time:a,timeFormat:i,className:s,children:l,...d},p)=>{const m=a==null?null:v5(a)?n.jsx(Ri,{value:a,format:i,inline:!0}):a,v=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:We.labelText,children:e}):e,x=v!=null||m!=null;return n.jsxs("div",{ref:p,"data-author":"user",className:ie(We.messageBlock,We.messageBlockUser,We.outboundBlock,s),...d,children:[x&&n.jsxs("div",{className:ie(We.label,We.labelUser,We.outboundHeader),children:[v,m]}),n.jsx("div",{className:ie(We.messageBody,We.messageBodyUser),children:l})]})});x5.displayName="AIOutboundMessage";const Tn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Tn.displayName="ChevronDownIcon";const y5="_root_1j4eq_8",w5="_header_1j4eq_17",b5="_headerSummary_1j4eq_53",k5="_aiTrailSummaryFade_1j4eq_1",_5="_aiTrailHeaderAppend_1j4eq_1",C5="_aiTrailEllipsis_1j4eq_1",j5="_headerCurrent_1j4eq_128",S5="_headerChevron_1j4eq_159",M5="_headerChevronExpanded_1j4eq_173",$5="_body_1j4eq_187",N5="_bodyExpanded_1j4eq_200",R5="_bodyCollapsed_1j4eq_201",L5="_bodyInner_1j4eq_203",A5="_bodyContent_1j4eq_187",T5="_step_1j4eq_225",I5="_stepIcon_1j4eq_242",E5="_stepAnimating_1j4eq_256",P5="_aiTrailStepPulse_1j4eq_1",z5="_stepBody_1j4eq_267",O5="_stepHead_1j4eq_282",F5="_stepLabel_1j4eq_286",D5="_stepSeparator_1j4eq_288",B5="_stepDetail_1j4eq_292",W5="_subToggle_1j4eq_302",H5="_subToggleCount_1j4eq_335",U5="_subToggleChevron_1j4eq_339",q5="_subActivityWrap_1j4eq_358",V5="_subActivityExpanded_1j4eq_364",G5="_subActivityCollapsed_1j4eq_365",Y5="_subActivityClip_1j4eq_367",K5="_subActivityList_1j4eq_378",Q5="_subActivity_1j4eq_358",Z5="_aiTrailSubActivityType_1j4eq_1",X5="_aiTrailSubActivityFade_1j4eq_1",et={root:y5,header:w5,headerSummary:b5,aiTrailSummaryFade:k5,aiTrailHeaderAppend:_5,aiTrailEllipsis:C5,headerCurrent:j5,headerChevron:S5,headerChevronExpanded:M5,body:$5,bodyExpanded:N5,bodyCollapsed:R5,bodyInner:L5,bodyContent:A5,step:T5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:I5,stepAnimating:E5,aiTrailStepPulse:P5,stepBody:z5,stepHead:O5,stepLabel:F5,stepSeparator:D5,stepDetail:B5,subToggle:W5,subToggleCount:H5,subToggleChevron:U5,subActivityWrap:q5,subActivityExpanded:V5,subActivityCollapsed:G5,subActivityClip:Y5,subActivityList:K5,subActivity:Q5,aiTrailSubActivityType:Z5,aiTrailSubActivityFade:X5},Bu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Bu.displayName="MessageDotsSquareIcon";function bl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}bl.displayName="SearchMdIcon";function Zr({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Wu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Wu.displayName="Globe01Icon";const A0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};A0.displayName="Code02Icon";function Hu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Hu.displayName="Tool01Icon";const cn=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},ma=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ma.displayName="AlertCircleIcon";const J5={thinking:n.jsx(Bu,{size:14}),tool:n.jsx(Hu,{size:14}),search:n.jsx(bl,{size:14}),file:n.jsx(Zr,{size:14}),web:n.jsx(Wu,{size:14}),code:n.jsx(A0,{size:14}),content:n.jsx(cn,{size:14})},Al=g.forwardRef(({type:e,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:p,children:m,...v},x)=>{const y=a==="active"&&d==="live",w=a==="active"&&d==="live",k=a==="active"||a==="error",[M,_]=g.useState(null),C=M!==null?M:k;g.useEffect(()=>{_(null)},[a]);const L=g.useCallback(()=>_(!C),[C]),N=!!l&&l.length>0,j=(l==null?void 0:l.length)??0,S=a==="error"?n.jsx(ma,{size:14}):s??J5[e];return n.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":a,className:ie(et.step,et[`step-${a}`],y&&et.stepAnimating,p),...v,children:[n.jsx("span",{className:et.stepIcon,"aria-hidden":!0,children:S}),n.jsxs("span",{className:et.stepBody,children:[n.jsxs("span",{className:et.stepHead,children:[n.jsx("span",{className:et.stepLabel,children:m}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:et.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:et.stepDetail,children:i})]}),N&&n.jsxs("button",{type:"button",className:et.subToggle,onClick:L,"aria-expanded":C,"aria-label":C?`Collapse ${j} sub-steps`:`Expand ${j} sub-steps`,"data-expanded":C||void 0,children:[n.jsx("span",{className:et.subToggleCount,children:j}),n.jsx("span",{className:et.subToggleChevron,"aria-hidden":!0,children:n.jsx(Tn,{size:10})})]})]}),N&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(et.subActivityWrap,C?et.subActivityExpanded:et.subActivityCollapsed),"aria-hidden":!C,children:n.jsx("div",{className:et.subActivityClip,children:n.jsx("ul",{className:et.subActivityList,"data-animating":w||void 0,children:l.map((P,$)=>n.jsx("li",{className:et.subActivity,children:P},$))})})})})]})]})});Al.displayName="AIActivityStep";function kf(e){return e==="error"}function e4(e,a,i,s,l,d){if(e==="live")return i.length===0?a===1?"1 step":`${a} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const p=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const m=a===1?"1 step":`${a} steps`;return`${p} · ${m}`}return n.jsxs(n.Fragment,{children:[p,i.map((m,v)=>n.jsxs(g.Fragment,{children:[" · ",m]},v))]})}const Uu=g.forwardRef(({state:e="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:p,children:m,...v},x)=>{const y=a!==void 0,[w,k]=g.useState(i??kf(e)),[M,_]=g.useState(!1);g.useEffect(()=>{y||M||k(kf(e))},[e,y,M]);const C=y?!!a:w,L=g.useCallback(()=>{const R=!C;y||(k(R),_(!0)),s==null||s(R)},[C,y,s]),{enhancedChildren:N,stepCount:j,stepLabels:S,currentLabelIdx:P}=g.useMemo(()=>{let R=0;const A=[];let E=-1;return{enhancedChildren:g.Children.map(m,G=>{if(!g.isValidElement(G))return G;const Z=G.props;if(!("type"in Z||"status"in Z))return G;R+=1;const Y=Z.status??"done";return Y==="pending"?null:(Z.children!=null&&(A.push(Z.children),Y==="active"&&(E=A.length-1)),t4(G,e))}),stepCount:R,stepLabels:A,currentLabelIdx:E>=0?E:A.length-1}},[m,e]),$=d??e4(e,j,S,P,et.headerCurrent,l);return n.jsxs("div",{ref:x,"data-state":e,"data-expanded":C,className:ie(et.root,p),...v,children:[n.jsxs("button",{type:"button",className:et.header,onClick:L,"aria-expanded":C,"aria-label":C?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:et.headerSummary,children:$},`${e}-${P}`),n.jsx("span",{className:ie(et.headerChevron,C&&et.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Tn,{size:14})})]}),n.jsx("div",{className:ie(et.body,C?et.bodyExpanded:et.bodyCollapsed),"aria-hidden":!C,children:n.jsx("div",{className:et.bodyInner,children:n.jsxs("div",{className:et.bodyContent,children:[N,e==="done"&&n.jsx(Al,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Uu.displayName="AIActivityTrail";function t4(e,a){return g.cloneElement(e,{groupState:a})}var ka=S0();const n4="_wrapper_3tqlm_10",r4="_tooltip_3tqlm_22",o4="_portal_3tqlm_23",a4="_top_3tqlm_61",i4="_bottom_3tqlm_71",s4="_left_3tqlm_81",l4="_right_3tqlm_91",Ys={wrapper:n4,tooltip:r4,portal:o4,top:a4,bottom:i4,left:s4,right:l4},_r=({content:e,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:p})=>{const[m,v]=g.useState(!1),[x,y]=g.useState({top:0,left:0}),w=g.useRef(null),k=g.useRef(),M=g.useId(),_=g.useCallback(()=>{if(!w.current)return;const S=w.current.getBoundingClientRect(),P=6+d;let $=0,R=0;switch(a){case"top":$=S.top-P,R=S.left+S.width/2;break;case"bottom":$=S.bottom+P,R=S.left+S.width/2;break;case"left":$=S.top+S.height/2,R=S.left-P;break;case"right":$=S.top+S.height/2,R=S.right+P;break}y({top:$,left:R})},[a,d]),C=g.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,_]),L=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!m)return;const S=()=>_();return window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[m,_]);const N=ln.cloneElement(p,{"aria-describedby":m?M:void 0}),j=n.jsx("span",{id:M,role:"tooltip",className:ie(Ys.tooltip,Ys[a],Ys.portal),"data-visible":m||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:Ys.wrapper,onMouseEnter:C,onMouseLeave:L,onFocus:C,onBlur:L,children:[N,ka.createPortal(j,document.body)]})};_r.displayName="Tooltip";const c4="_root_v8mqg_9",d4="_hover_v8mqg_21",Od={root:c4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:d4};function u4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const T0=g.forwardRef(({visibility:e="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...p},m)=>{const v=i==null?null:u4(i)?n.jsx(Ri,{value:i,format:s,inline:!0}):i,x=w=>{if(!g.isValidElement(w))return w;const k=w;if(k.type===_r)return k;const M=k.props["aria-label"];return M?n.jsx(_r,{content:M,placement:"top",delay:150,children:k}):k},y=g.Children.map(d,w=>{if(g.isValidElement(w)&&w.type===g.Fragment){const k=w.props.children;return g.Children.map(k,x)}return x(w)});return n.jsxs("div",{ref:m,"data-visibility":e,"data-align":a,className:ie(Od.root,Od[`align-${a}`],e==="hover"&&Od.hover,l),...p,children:[y,v]})});T0.displayName="AIMessageActions";const p4="_card_1apq1_17",h4="_header_1apq1_69",f4="_iconBadge_1apq1_74",m4="_iconInner_1apq1_89",g4="_headerText_1apq1_100",v4="_headerTopRow_1apq1_109",x4="_eyebrow_1apq1_115",y4="_title_1apq1_124",w4="_subtitle_1apq1_130",b4="_headerTrailing_1apq1_135",k4="_body_1apq1_141",_4="_footer_1apq1_152",C4="_footerEnd_1apq1_157",j4="_metaRow_1apq1_162",S4="_metaItem_1apq1_170",M4="_resultHero_1apq1_180",$4="_resultHeadline_1apq1_185",N4="_resultDetail_1apq1_191",R4="_clauses_1apq1_205",L4="_clause_1apq1_205",A4="_clauseLabel_1apq1_215",T4="_clauseBody_1apq1_225",I4="_badgeExecuting_1apq1_245",rt={card:p4,header:h4,iconBadge:f4,iconInner:m4,headerText:g4,headerTopRow:v4,eyebrow:x4,title:y4,subtitle:w4,headerTrailing:b4,body:k4,footer:_4,footerEnd:C4,metaRow:j4,metaItem:S4,resultHero:M4,resultHeadline:$4,resultDetail:N4,clauses:R4,clause:L4,clauseLabel:A4,clauseBody:T4,badgeExecuting:I4},ar=g.forwardRef(({tone:e="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:p,trailing:m,footer:v,footerEnd:x=!1,className:y,children:w,...k},M)=>{const _=l!=null||m!=null,C=_||d!=null||p!=null,L=s!=null||C;return n.jsxs("div",{ref:M,"data-tone":e,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(rt.card,y),...k,children:[L&&n.jsxs("div",{className:rt.header,children:[s!=null&&n.jsx("span",{className:ie(rt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:rt.iconInner,children:s})}),C&&n.jsxs("div",{className:rt.headerText,children:[_&&n.jsxs("div",{className:rt.headerTopRow,children:[l!=null&&n.jsx("span",{className:rt.eyebrow,children:l}),m!=null&&n.jsx("span",{className:rt.headerTrailing,children:m})]}),d!=null&&n.jsx("span",{className:rt.title,children:d}),p!=null&&n.jsx("span",{className:rt.subtitle,children:p})]})]}),w!=null&&n.jsx("div",{className:rt.body,children:w}),v!=null&&n.jsx("div",{className:ie(rt.footer,x&&rt.footerEnd),children:v})]})});ar.displayName="UltronCard";const E4="_root_zkkgh_6",P4="_sm_zkkgh_24",z4="_md_zkkgh_33",O4="_lg_zkkgh_42",F4="_neutral_zkkgh_53",D4="_blue_zkkgh_66",B4="_azure_zkkgh_79",W4="_purple_zkkgh_92",H4="_pink_zkkgh_105",U4="_red_zkkgh_118",q4="_orange_zkkgh_131",V4="_yellow_zkkgh_144",G4="_matcha_zkkgh_157",Y4="_green_zkkgh_170",K4="_subtle_zkkgh_184",Q4="_outline_zkkgh_190",Z4="_solid_zkkgh_196",X4="_dot_zkkgh_203",J4="_icon_zkkgh_212",ew="_dismiss_zkkgh_224",wo={root:E4,sm:P4,md:z4,lg:O4,neutral:F4,blue:D4,azure:B4,purple:W4,pink:H4,red:U4,orange:q4,yellow:V4,matcha:G4,green:Y4,subtle:K4,outline:Q4,solid:Z4,dot:X4,icon:J4,dismiss:ew},Li=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},tw={sm:10,md:12,lg:14},An=g.forwardRef(({variant:e="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:p,className:m,children:v,...x},y)=>n.jsxs("span",{ref:y,className:ie(wo.root,wo[i],wo[a],wo[e],m),...x,children:[s&&n.jsx("span",{className:wo.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(wo.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&n.jsx("button",{type:"button",className:wo.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),p==null||p()},children:n.jsx(Li,{size:tw[i]})})]}));An.displayName="Tag";function I0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}I0.displayName="SlashCircle01Icon";const qu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};qu.displayName="EyeIcon";function Tl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Tl.displayName="Target01Icon";function Ln({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ln.displayName="ClockIcon";const Ai=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ai.displayName="RefreshCw04Icon";const yn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};yn.displayName="CheckCircleIcon";function Il({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Il.displayName="Save01Icon";const nw={sm:11,md:12,lg:14},rw={ignored:{label:"Ignored",color:"neutral",Icon:I0},monitored:{label:"Monitored",color:"blue",Icon:qu},recommended:{label:"Recommended",color:"purple",Icon:Tl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Ln},executing:{label:"Executing",color:"azure",Icon:Ai},completed:{label:"Completed",color:"green",Icon:yn},saved:{label:"Saved",color:"matcha",Icon:Il}},Ro=g.forwardRef(({status:e,size:a="sm",label:i,className:s,...l},d)=>{const p=rw[e],m=p.Icon;return n.jsx(An,{ref:d,color:p.color,size:a,variant:"subtle",leadingIcon:n.jsx(m,{size:nw[a]}),className:ie(e==="executing"&&rt.badgeExecuting,s),...l,children:i??p.label})});Ro.displayName="UltronStatusBadge";function El({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}El.displayName="Bell01Icon";const ow=g.forwardRef(({title:e,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:p,...m},v)=>n.jsx(ar,{ref:v,tone:d,eyebrow:i,title:e,icon:a??n.jsx(El,{size:14}),trailing:l?n.jsx(Ro,{status:l}):void 0,...m,children:((s==null?void 0:s.length)||p)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:rt.metaRow,children:s.map((x,y)=>n.jsxs("span",{className:rt.metaItem,children:[x.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,p]})}));ow.displayName="UltronEventCard";const aw=g.forwardRef(({eyebrow:e="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},p)=>n.jsxs(ar,{ref:p,tone:s,eyebrow:e,icon:a??n.jsx(Bu,{size:14}),...d,children:[l,i&&n.jsx("div",{className:rt.metaRow,children:i})]}));aw.displayName="UltronUnderstandingCard";const iw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},sw=g.forwardRef(({eyebrow:e="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},p)=>n.jsxs(ar,{ref:p,tone:s,eyebrow:e,icon:a??n.jsx(Tl,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:rt.metaRow,children:i.map((m,v)=>n.jsx(An,{size:"sm",color:iw[s],variant:"subtle",children:m},v))}):null]}));sw.displayName="UltronDecisionCard";const lw="_root_ou64w_8",cw="_xs_ou64w_75",dw="_sm_ou64w_84",uw="_md_ou64w_93",pw="_lg_ou64w_102",hw="_xl_ou64w_111",fw="_iconOnly_ou64w_122",mw="_primary_ou64w_132",gw="_secondary_ou64w_148",vw="_tertiary_ou64w_167",xw="_ghost_ou64w_185",yw="_destructive_ou64w_203",ww="_destructiveSecondary_ou64w_221",bw="_artwork_ou64w_69",kw="_label_ou64w_254",_w="_spinner_ou64w_69",Cw="_light_ou64w_281",an={root:lw,xs:cw,sm:dw,md:uw,lg:pw,xl:hw,iconOnly:fw,primary:mw,secondary:gw,tertiary:vw,ghost:xw,destructive:yw,destructiveSecondary:ww,artwork:bw,label:kw,spinner:_w,"alloy-spin":"_alloy-spin_ou64w_1",light:Cw},jw={primary:an.primary,secondary:an.secondary,tertiary:an.tertiary,ghost:an.ghost,destructive:an.destructive,"destructive-secondary":an.destructiveSecondary},ze=g.forwardRef(({variant:e="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:p,children:m,disabled:v,...x},y)=>{const w=v||i;return n.jsxs("button",{ref:y,className:ie(an.root,jw[e],an[a],d&&an.iconOnly,p),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":a,...x,children:[i&&n.jsx("span",{className:an.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:m}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),m&&n.jsx("span",{className:an.label,children:m}),l&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});ze.displayName="Button";function E0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}E0.displayName="XCircleIcon";const Sw=g.forwardRef(({eyebrow:e="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:p,...m},v)=>{const x=n.jsxs(n.Fragment,{children:[i.map((y,w)=>n.jsx(ze,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&n.jsx(ze,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(E0,{size:16}),onClick:s,children:l})]});return n.jsx(ar,{ref:v,tone:d,eyebrow:e,icon:a??n.jsx(Tl,{size:14}),footer:x,...m,children:p})});Sw.displayName="UltronRecommendationCard";function Pl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Pl.displayName="Lock01Icon";const Mw=g.forwardRef(({title:e,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:p="Cancel",onCancel:m,editLabel:v="Edit",onEdit:x,tone:y="warning",children:w,...k},M)=>{const _=n.jsxs(n.Fragment,{children:[m&&n.jsx(ze,{size:"md",variant:"ghost",onClick:m,children:p}),x&&n.jsx(ze,{size:"md",variant:"secondary",onClick:x,children:v}),n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(cn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(ar,{ref:M,tone:y,eyebrow:a,title:e,icon:i??n.jsx(Pl,{size:14}),trailing:n.jsx(Ro,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});Mw.displayName="UltronApprovalCard";const $w=g.forwardRef(({eyebrow:e="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...p},m)=>n.jsx(ar,{ref:m,tone:d,eyebrow:e,icon:a??n.jsx(Ai,{size:14}),trailing:n.jsx(Ro,{status:s==="done"?"completed":"executing"}),...p,children:n.jsx(Uu,{state:s,duration:l,children:i.map((v,x)=>n.jsx(Al,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},x))})}));$w.displayName="UltronExecutionCard";const Nw=g.forwardRef(({headline:e,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...p},m)=>n.jsx(ar,{ref:m,tone:l,fill:!0,accent:!1,trailing:n.jsx(Ro,{status:s}),footer:d,...p,children:n.jsxs("div",{className:rt.resultHero,children:[n.jsx("span",{className:ie(rt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(yn,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:rt.resultHeadline,children:e}),a!=null&&n.jsx("div",{className:rt.resultDetail,children:a})]})]})}));Nw.displayName="UltronResultCard";function P0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}P0.displayName="ZapIcon";const Rw=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:p="Not now",onDismiss:m,tone:v="info",children:x,...y},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(Il,{size:18}),loading:d,onClick:l,children:s}),m&&n.jsx(ze,{size:"md",variant:"ghost",onClick:m,children:p})]});return n.jsx(ar,{ref:w,tone:v,fill:!0,accent:!1,eyebrow:a,title:e,icon:i??n.jsx(P0,{size:14}),footer:k,...y,children:x})});Rw.displayName="UltronWorkflowSaveCard";const z0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};z0.displayName="GitBranch01Icon";function Fd({label:e,children:a}){return n.jsxs("div",{className:rt.clause,children:[n.jsx("span",{className:rt.clauseLabel,children:e}),n.jsx("span",{className:rt.clauseBody,children:a})]})}const Lw=g.forwardRef(({name:e,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:p,footer:m,tone:v="info",...x},y)=>n.jsx(ar,{ref:y,tone:v,eyebrow:a,title:e,icon:i??n.jsx(z0,{size:14}),trailing:p?n.jsx(Ro,{status:p}):void 0,footer:m,...x,children:n.jsxs("div",{className:rt.clauses,children:[n.jsx(Fd,{label:"When",children:s}),n.jsx(Fd,{label:"If",children:l}),n.jsx(Fd,{label:"Then",children:d})]})}));Lw.displayName="UltronWorkflowPreviewCard";const Aw="_root_1nyuz_6",Tw="_sm_1nyuz_20",Iw="_md_1nyuz_29",Ew="_lg_1nyuz_38",Pw="_divider_1nyuz_48",zw="_interactive_1nyuz_53",Ow="_disabled_1nyuz_60",Fw="_destructive_1nyuz_64",Dw="_selected_1nyuz_78",Bw="_label_1nyuz_87",Ww="_description_1nyuz_97",Hw="_leadingSlot_1nyuz_101",Uw="_trailingSlot_1nyuz_102",qw="_content_1nyuz_115",Vw="_taSwitch_1nyuz_167",Gw="_taSwitchThumb_1nyuz_188",Yw="_taCheckbox_1nyuz_203",Kw="_taRadio_1nyuz_226",Qw="_taRadioDot_1nyuz_244",Zw="_taExpand_1nyuz_252",Xw="_taStatus_1nyuz_266",Jw="_taStatus_success_1nyuz_273",e6="_taStatus_warning_1nyuz_274",t6="_taStatus_error_1nyuz_275",n6="_taStatus_info_1nyuz_276",bt={root:Aw,sm:Tw,md:Iw,lg:Ew,divider:Pw,interactive:zw,disabled:Ow,destructive:Fw,selected:Dw,label:Bw,description:Ww,leadingSlot:Hw,trailingSlot:Uw,content:qw,taSwitch:Vw,taSwitchThumb:Gw,taCheckbox:Yw,taRadio:Kw,taRadioDot:Qw,taExpand:Zw,taStatus:Xw,taStatus_success:Jw,taStatus_warning:e6,taStatus_error:t6,taStatus_info:n6},wn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};wn.displayName="ChevronRightIcon";const Vu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Vu.displayName="ArrowUpRightIcon";const r6="_root_4qytd_5",o6="_neutral_4qytd_25",a6="_primary_4qytd_30",i6="_success_4qytd_35",s6="_warning_4qytd_40",l6="_error_4qytd_45",c6="_info_4qytd_50",_f={root:r6,neutral:o6,primary:a6,success:i6,warning:s6,error:l6,info:c6},_a=g.forwardRef(({variant:e="neutral",className:a,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(_f.root,_f[e],a),...s,children:i}));_a.displayName="Badge";const d6=({checked:e})=>n.jsx("span",{className:bt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:bt.taSwitchThumb})}),u6=({checked:e})=>n.jsx("span",{className:bt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p6=({checked:e})=>n.jsx("span",{className:bt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:bt.taRadioDot})}),h6=({count:e,label:a})=>{const i=e!==void 0?String(e):a;return i?n.jsx(_a,{"aria-hidden":"true",children:i}):null},f6=({expanded:e})=>n.jsx("span",{className:bt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(wn,{size:16,color:"currentColor"})}),m6=({variant:e})=>n.jsx("span",{className:ie(bt.taStatus,bt[`taStatus_${e}`]),"aria-hidden":"true"}),g6=new Set(["badge","status"]),xn=g.forwardRef(({label:e,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:p=!1,onCheckedChange:m,badgeCount:v,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:M="md",interactive:_,selected:C=!1,destructive:L=!1,disabled:N=!1,className:j,onClick:S,onKeyDown:P,...$},R)=>{const A=l==="switch"||l==="checkbox"||l==="radio",[E,D]=g.useState(p),G=A?d!==void 0?d:E:!1,Z=_||!!S||A||l!==void 0&&!g6.has(l),H=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Z?"button":void 0,Y=g.useCallback(ce=>{if(!N){if(A){const de=!G;d===void 0&&D(de),m==null||m(de)}S==null||S(ce)}},[N,A,G,d,m,S]),ee=g.useCallback(ce=>{Z&&!N&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),Y(ce)),P==null||P(ce)},[Z,N,Y,P]),oe=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(wn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(Vu,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(d6,{checked:G});case"checkbox":return n.jsx(u6,{checked:G});case"radio":return n.jsx(p6,{checked:G});case"badge":return n.jsx(h6,{count:v,label:x});case"expand":return n.jsx(f6,{expanded:y});case"status":return n.jsx(m6,{variant:w});default:return null}})();return n.jsxs("div",{ref:R,role:H,tabIndex:Z&&!N?0:void 0,"aria-checked":A?G:void 0,"aria-selected":C||void 0,"aria-disabled":N||void 0,"data-selected":C||void 0,"data-disabled":N||void 0,"data-destructive":L||void 0,"data-trailing-action":l??void 0,className:ie(bt.root,bt[M],k&&bt.divider,Z&&bt.interactive,C&&bt.selected,L&&bt.destructive,N&&bt.disabled,j),onClick:N?void 0:Y,onKeyDown:ee,...$,children:[i&&n.jsx("div",{className:bt.leadingSlot,children:i}),n.jsxs("div",{className:bt.content,children:[n.jsx("span",{className:bt.label,children:e}),a&&n.jsx("span",{className:bt.description,children:a})]}),oe&&n.jsx("div",{className:bt.trailingSlot,children:oe})]})});xn.displayName="ListItem";const v6=g.forwardRef(({title:e,meta:a,icon:i,status:s,...l},d)=>n.jsx(xn,{ref:d,label:e,description:a,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(Ro,{status:s}),...l}));v6.displayName="UltronActivityStreamItem";const x6="_root_1sz1z_7",y6="_status_1sz1z_50",Dd={root:x6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:y6},Gu=g.forwardRef(({disabled:e=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...p},m)=>{const v=g.useRef(null),[x,y]=g.useState(""),w=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const M=k.props;return g.cloneElement(k,{groupDisabled:e||!!M.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=M=>{M.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>y(k),[]),n.jsxs("div",{ref:m,"data-size":a,className:ie(Dd.root,Dd[`size-${a}`],l),...p,children:[w,n.jsx("span",{ref:v,className:Dd.status,role:"status","aria-live":"polite",children:x})]})});Gu.displayName="ComposerActions";function Bd({size:e=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Yu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Yu.displayName="SearchSmIcon";const ul=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ul.displayName="Trash03Icon";const Ku=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ku.displayName="SunIcon";const Qu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Qu.displayName="ArrowNarrowRightIcon";function Yr({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Cf({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function w6({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const kl=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};kl.displayName="ChevronSelectorVerticalIcon";const Co=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Co.displayName="ClipboardCheckIcon";const O0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};O0.displayName="SettingsGearIcon";const F0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="ChevronLeftIcon";const D0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};D0.displayName="EyeOffIcon";const B0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};B0.displayName="StopIcon";const W0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};W0.displayName="RecordingIcon";const H0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};H0.displayName="BankIcon";function zl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zl.displayName="ArrowNarrowUpIcon";function U0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}U0.displayName="ArrowNarrowDownIcon";function Ol({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ol.displayName="Microphone02Icon";const ga=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ga.displayName="AlertTriangleIcon";const q0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};q0.displayName="BankNote01Icon";const V0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};V0.displayName="CoinsStacked03Icon";function G0({size:e=16,color:a="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Zu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Zu.displayName="Map01Icon";const Xu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Xu.displayName="PackageIcon";const Y0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Y0.displayName="ThumbsUpIcon";const K0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};K0.displayName="ThumbsDownIcon";function ki({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ki.displayName="Building02Icon";function Ju({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ju.displayName="Building05Icon";function Ti({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ti.displayName="CheckVerified01Icon";function Q0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Q0.displayName="Copy01Icon";function Z0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}Z0.displayName="DotsVerticalIcon";function X0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}X0.displayName="Edit02Icon";function J0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}J0.displayName="HomeSmileIcon";function ep({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ep.displayName="Link01Icon";function Fl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Fl.displayName="LinkExternal01Icon";function tp({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tp.displayName="MedicalCrossIcon";function _i({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}_i.displayName="MessageCircle02Icon";function np({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}np.displayName="MinusIcon";function eg({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}eg.displayName="Moon01Icon";function tg({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tg.displayName="Pin01Icon";function ng({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ng.displayName="ReceiptCheckIcon";function rg({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}rg.displayName="Settings02Icon";function og({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}og.displayName="Speedometer02Icon";function ag({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ag.displayName="Trash01Icon";function mu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}mu.displayName="UploadCloud01Icon";function Ci({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ci.displayName="XCloseIcon";const b6="_base_i93xz_11",k6="_icon_i93xz_45",_6="_sendReady_i93xz_65",C6="_sendStreaming_i93xz_66",j6="_sendDisabled_i93xz_67",S6="_sendError_i93xz_68",M6="_attachIdle_i93xz_131",$6="_attachDisabled_i93xz_145",N6="_attachError_i93xz_152",R6="_voiceIdle_i93xz_165",L6="_voiceRecording_i93xz_179",A6="_voiceDisabled_i93xz_189",T6="_iconStack_i93xz_200",I6="_iconLayer_i93xz_209",yt={base:b6,icon:k6,sendReady:_6,sendStreaming:C6,sendDisabled:j6,sendError:S6,attachIdle:M6,attachDisabled:$6,attachError:N6,voiceIdle:R6,voiceRecording:L6,voiceDisabled:A6,iconStack:T6,iconLayer:I6},E6={hidden:void 0,ready:yt.sendReady,"disabled-invalid":yt.sendDisabled,streaming:yt.sendStreaming,error:yt.sendError},P6=(e,a,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Ca=g.forwardRef(({state:e,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:p,className:m,style:v,...x},y)=>{const w=g.useRef(null),k=g.useRef(null),M=g.useCallback(S=>{k.current=S,typeof y=="function"?y(S):y&&(y.current=S)},[y]),_=g.useCallback(()=>{if(e==="ready"){a==null||a();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const S=k.current;S&&(S.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{S.dataset.pressed="false"},140)),s==null||s()}},[e,a,i,s]);if(e==="hidden")return null;const C=!p&&(e==="ready"||e==="streaming"||e==="error"),L=P6(e,l,d),N=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,j=n.jsx("button",{ref:M,type:"button","data-composer-action":"send","data-state":e,className:ie(yt.base,E6[e],m),style:v,"aria-label":L,disabled:!C,onClick:_,...x,children:n.jsxs("span",{className:yt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:yt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(zl,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:yt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(B0,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:yt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Ai,{size:"100%",strokeWidth:2})})]})});return N?n.jsx(_r,{content:N,placement:"top",children:j}):j});Ca.displayName="ComposerSendButton";const z6={idle:yt.attachIdle,disabled:yt.attachDisabled,error:yt.attachError},O6=(e,a,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},ig=g.forwardRef(({state:e,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:p,className:m,style:v,...x},y)=>{const w=g.useRef(null),k=g.useCallback(()=>{var j;(e==="idle"||e==="error")&&((j=w.current)==null||j.click())},[e]),M=g.useCallback(j=>{const S=j.target.files;S&&S.length>0&&(a==null||a(S)),j.target.value=""},[a]),_=!p&&e!=="disabled",C=O6(e,l,d),L=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,N=n.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:ie(yt.base,z6[e],m),style:v,"aria-label":C,disabled:!_,onClick:k,...x,children:[n.jsx("span",{className:yt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(No,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:M,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return L?n.jsx(_r,{content:L,placement:"top",children:N}):N});ig.displayName="ComposerAttachment";const F6={idle:yt.voiceIdle,recording:yt.voiceRecording,disabled:yt.voiceDisabled},D6=(e,a)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},sg=g.forwardRef(({state:e,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:p,...m},v)=>{const x=g.useCallback(()=>{if(e==="idle"){a==null||a();return}if(e==="recording"){i==null||i();return}},[e,a,i]),y=!l&&e!=="disabled",w=D6(e,s),k=e==="disabled"?s??"Voice unavailable":null,M=n.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:ie(yt.base,F6[e],d),style:p,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...m,children:n.jsxs("span",{className:yt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:yt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(Ol,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:yt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(W0,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(_r,{content:k,placement:"top",children:M}):M});sg.displayName="ComposerVoiceButton";const B6=g.forwardRef(({value:e,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:p=!0,maxRows:m=4,radius:v="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(R0,{className:y,style:{flex:"0 0 auto"},children:n.jsx(L0,{ref:w,value:e,onChange:a,onSubmit:i,placeholder:s,maxRows:m,radius:v,disabled:d,children:n.jsxs(Gu,{size:"md",disabled:d,children:[x,p&&n.jsx(sg,{state:d?"disabled":"idle"}),n.jsx(Ca,{state:k,onSend:i,onStop:i})]})})})});B6.displayName="UltronCommandBar";const W6=g.forwardRef(({stages:e,state:a="live",duration:i,...s},l)=>n.jsx(Uu,{ref:l,state:a,duration:i,...s,children:e.map((d,p)=>n.jsx(Al,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},p))}));W6.displayName="UltronThreadTimeline";const H6="_root_ghwhu_10",U6="_badge_ghwhu_27",q6="_badgeIcon_ghwhu_38",V6="_green_ghwhu_59",G6="_yellow_ghwhu_60",Y6="_matcha_ghwhu_61",K6="_purple_ghwhu_62",Q6="_blue_ghwhu_63",Z6="_azure_ghwhu_64",X6="_red_ghwhu_65",J6="_orange_ghwhu_66",e8="_pink_ghwhu_67",t8="_slate_ghwhu_68",n8="_content_ghwhu_73",r8="_label_ghwhu_83",o8="_valueRow_ghwhu_97",a8="_change_ghwhu_106",i8="_value_ghwhu_97",xr={root:H6,badge:U6,badgeIcon:q6,green:V6,yellow:G6,matcha:Y6,purple:K6,blue:Q6,azure:Z6,red:X6,orange:J6,pink:e8,slate:t8,content:n8,label:r8,valueRow:o8,change:a8,value:i8},s8=g.forwardRef(({color:e="slate",icon:a,label:i,value:s,change:l,className:d,...p},m)=>n.jsxs("div",{ref:m,className:ie(xr.root,d),...p,children:[n.jsx("div",{className:ie(xr.badge,xr[e]),"aria-hidden":"true",children:n.jsx("span",{className:xr.badgeIcon,children:a})}),n.jsxs("div",{className:xr.content,children:[n.jsx("span",{className:xr.label,children:i}),n.jsxs("div",{className:xr.valueRow,children:[n.jsx("span",{className:xr.value,children:s}),l!=null&&n.jsx("span",{className:xr.change,children:l})]})]})]}));s8.displayName="DataCard";const l8="_root_d0j6n_7",c8="_icon_d0j6n_21",d8="_text_d0j6n_33",u8="_positive_d0j6n_41",p8="_warning_d0j6n_45",h8="_negative_d0j6n_49",Ks={root:l8,icon:c8,text:d8,positive:u8,warning:p8,negative:h8};function f8(e){return e==="up"?"positive":"negative"}const m8=g.forwardRef((e,a)=>{const{mode:i,value:s,className:l,...d}=e,p=i==="trend"?e.severity??f8(e.trend):e.severity,{severity:m,...v}=d,x=i==="trend"?(({trend:w,severity:k,...M})=>M)(v):v,y=i==="trend"?e.trend==="up"?zl:U0:null;return n.jsxs("span",{ref:a,className:ie(Ks.root,Ks[p],l),...x,children:[n.jsx("span",{className:Ks.text,children:s}),y&&n.jsx("span",{className:Ks.icon,"aria-hidden":"true",children:n.jsx(y,{size:14})})]})});m8.displayName="ValueChangeLabel";const g8="_root_1lq10_1",v8="_horizontal_1lq10_9",x8="_vertical_1lq10_15",y8="_solid_1lq10_32",w8="_dashed_1lq10_36",Qs={root:g8,horizontal:v8,vertical:x8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:y8,dashed:w8},b8=g.forwardRef(({thickness:e=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:ie(Qs.root,Qs[`thickness-${e}`],Qs[a],Qs[i],s),...l}));b8.displayName="Divider";const k8="_overlay_vxgy2_9",_8="_dialogOverlayIn_vxgy2_1",C8="_dialogOverlayOut_vxgy2_1",j8="_dialog_vxgy2_38",S8="_dialogIn_vxgy2_1",M8="_dialogOut_vxgy2_1",$8="_sm_vxgy2_88",N8="_md_vxgy2_89",R8="_lg_vxgy2_90",L8="_header_vxgy2_95",A8="_title_vxgy2_107",T8="_closeBtn_vxgy2_120",I8="_content_vxgy2_152",E8="_footer_vxgy2_163",Xr={overlay:k8,dialogOverlayIn:_8,dialogOverlayOut:C8,dialog:j8,dialogIn:S8,dialogOut:M8,sm:$8,md:N8,lg:R8,header:L8,title:A8,closeBtn:T8,content:I8,footer:E8},lg=g.forwardRef(({onClose:e,children:a,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Xr.header,i),...s,children:[n.jsx("span",{className:Xr.title,children:a}),e&&n.jsx("button",{type:"button",className:Xr.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Li,{size:16})})]}));lg.displayName="DialogHeader";const cg=g.forwardRef(({children:e,className:a,...i},s)=>n.jsx("div",{ref:s,className:ie(Xr.content,a),...i,children:e}));cg.displayName="DialogContent";const dg=g.forwardRef(({children:e,className:a,...i},s)=>n.jsx("div",{ref:s,className:ie(Xr.footer,a),...i,children:e}));dg.displayName="DialogFooter";function ug({open:e,onClose:a,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const p=g.useRef(null),m=180,[v,x]=g.useState(e);return g.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),m);return()=>clearTimeout(y)},[e]),g.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&a()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,a]),g.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),v?ka.createPortal(n.jsx("div",{className:Xr.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&a()},children:n.jsx("div",{ref:p,className:ie(Xr.dialog,Xr[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const P8="_root_1dntq_7",z8="_badge_1dntq_57",O8="_badgeIconSlot_1dntq_74",F8="_content_1dntq_82",D8="_text_1dntq_90",B8="_title_1dntq_99",W8="_description_1dntq_120",H8="_actions_1dntq_131",U8="_dot_1dntq_137",q8="_actionLink_1dntq_144",V8="_primaryAction_1dntq_162",G8="_trailing_1dntq_170",qt={root:P8,badge:z8,badgeIconSlot:O8,content:F8,text:D8,title:B8,description:W8,actions:H8,dot:U8,actionLink:q8,primaryAction:V8,trailing:G8},Y8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),K8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Q8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),jf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Z8={error:Y8,warning:Q8,success:K8,info:jf,feature:jf},pg=g.forwardRef(({status:e="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:p,learnMore:m,onLearnMore:v,onDismiss:x,className:y,...w},k)=>{const M=Z8[e],_=i==="lg",C=x?n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:n.jsx(Li,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(qt.root,y),"data-status":e,"data-variant":a,"data-size":i,...w,children:[n.jsx("span",{className:qt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",qt.badgeIconSlot),children:n.jsx(M,{})})}),_?n.jsxs("div",{className:qt.content,children:[n.jsxs("div",{className:qt.text,children:[n.jsx("p",{className:qt.title,children:s}),l&&n.jsx("p",{className:qt.description,children:l})]}),(d||m)&&n.jsxs("div",{className:qt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(qt.actionLink,qt.primaryAction),onClick:p,children:d}),d&&m&&n.jsx("span",{className:qt.dot,"aria-hidden":"true",children:"·"}),m&&n.jsx("button",{type:"button",className:qt.actionLink,onClick:v,children:m})]})]}):n.jsx("p",{className:qt.title,children:s}),_?C:(d||x)&&n.jsxs("div",{className:qt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(qt.actionLink,qt.primaryAction),onClick:p,children:d}),C]})]})});pg.displayName="Alert";const X8="_stack_x4xl7_11",J8="_item_x4xl7_28",e9="_itemExiting_x4xl7_33",gu={stack:X8,item:J8,itemExiting:e9},t9=g.createContext(null);function n9({id:e,title:a,description:i,status:s,variant:l,size:d,action:p,onAction:m,duration:v,exiting:x,onRemove:y}){const w=g.useCallback(()=>y(e),[e,y]);return n.jsx("div",{className:ie(gu.item,x&&gu.itemExiting),onAnimationEnd:x?w:void 0,children:n.jsx(pg,{status:s,variant:l,size:d,title:a,description:i,action:p,onAction:m,onDismiss:w,style:{width:"100%"}})})}function r9({toasts:e,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,a]),e.length===0?null:ka.createPortal(n.jsx("div",{className:gu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(n9,{...s,onRemove:i},s.id))}),document.body)}function o9({children:e}){const[a,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(m=>{const v=`toast-${++s.current}`;return i(x=>[...x,{id:v,title:m.title,description:m.description,status:m.status??"info",variant:m.variant??"stroke",size:m.size??"sm",action:m.action,onAction:m.onAction,duration:m.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(m=>{i(v=>v.map(x=>x.id===m?{...x,exiting:!0}:x))},[]),p=g.useCallback(m=>{i(v=>v.filter(x=>x.id!==m))},[]);return n.jsxs(t9.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(r9,{toasts:a,onStartExit:d,onRemove:p})]})}const a9="_root_1s0ek_5",i9="_list_1s0ek_11",s9="_item_1s0ek_23",l9="_separator_1s0ek_31",c9="_link_1s0ek_47",d9="_current_1s0ek_68",u9="_iconSlot_1s0ek_76",rr={root:a9,list:i9,item:s9,separator:l9,link:c9,current:d9,iconSlot:u9},p9=()=>n.jsx("span",{className:rr.separator,"aria-hidden":"true",children:"/"}),h9=()=>n.jsx("span",{className:rr.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),f9=g.forwardRef(({items:e,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?h9:p9;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(rr.root,i),...s,children:n.jsx("ol",{className:rr.list,children:e.map((p,m)=>{const v=m===e.length-1,x=!v&&(!!p.href||!!p.onClick);return n.jsxs("li",{className:rr.item,children:[m>0&&n.jsx(d,{}),x?n.jsxs("a",{href:p.href,onClick:p.onClick,className:rr.link,"aria-label":p.label,children:[p.icon&&n.jsx("span",{className:ie(rr.iconSlot,"alloy-icon-slot"),children:p.icon}),n.jsx("span",{children:p.label})]}):n.jsxs("span",{className:ie(rr.link,v&&rr.current),"aria-current":v?"page":void 0,children:[p.icon&&n.jsx("span",{className:ie(rr.iconSlot,"alloy-icon-slot"),children:p.icon}),n.jsx("span",{children:p.label})]})]},m)})})})});f9.displayName="Breadcrumb";const m9="_root_139vz_6",g9="_divider_139vz_14",v9="_item_139vz_19",x9="_label_139vz_25",y9="_description_139vz_26",w9="_chevron_139vz_27",b9="_iconSlot_139vz_28",k9="_hitTarget_139vz_32",_9="_size_sm_139vz_37",C9="_size_md_139vz_43",j9="_size_lg_139vz_49",S9="_header_139vz_59",M9="_headerContent_139vz_59",$9="_checkboxWrap_139vz_60",N9="_labelBlock_139vz_157",R9="_trailingSlot_139vz_60",L9="_body_139vz_199",A9="_bodyInner_139vz_209",T9="_bodyContent_139vz_214",Tt={root:m9,divider:g9,item:v9,label:x9,description:y9,chevron:w9,iconSlot:b9,hitTarget:k9,size_sm:_9,size_md:C9,size_lg:j9,header:S9,headerContent:M9,checkboxWrap:$9,labelBlock:N9,trailingSlot:R9,body:L9,bodyInner:A9,bodyContent:T9},I9="_root_17t97_6",E9="_disabled_17t97_12",P9="_sm_17t97_18",z9="_md_17t97_26",O9="_lg_17t97_34",F9="_controlWrap_17t97_43",D9="_input_17t97_52",B9="_box_17t97_67",W9="_boxChecked_17t97_96",H9="_boxError_17t97_106",U9="_labelWrap_17t97_116",q9="_label_17t97_116",V9="_error_17t97_138",G9="_required_17t97_140",Y9="_description_17t97_145",fn={root:I9,disabled:E9,sm:P9,md:z9,lg:O9,controlWrap:F9,input:D9,box:B9,boxChecked:W9,boxError:H9,labelWrap:U9,label:q9,error:V9,required:G9,description:Y9},hg=g.forwardRef(({checked:e,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:p="md",label:m,description:v,id:x,name:y,value:w,required:k,className:M},_)=>{const C=g.useId(),L=x??C,N=g.useRef(null);g.useEffect(()=>{N.current&&(N.current.indeterminate=i)},[i]);const j=e!==void 0,[S,P]=g.useState(a),$=j?e:S,R=E=>{j||P(E.target.checked),s==null||s(E.target.checked)},A=$||i;return n.jsxs("div",{className:ie(fn.root,fn[p],l&&fn.disabled,d&&fn.error,M),children:[n.jsxs("div",{className:fn.controlWrap,children:[n.jsx("input",{ref:E=>{N.current=E,typeof _=="function"?_(E):_&&(_.current=E)},type:"checkbox",id:L,name:y,value:w,checked:$,disabled:l,required:k,"aria-invalid":d||void 0,onChange:R,className:fn.input}),n.jsx("span",{className:ie(fn.box,A&&fn.boxChecked,d&&fn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):$?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(m||v)&&n.jsxs("div",{className:fn.labelWrap,children:[m&&n.jsxs("label",{htmlFor:L,className:fn.label,children:[m,k&&n.jsx("span",{className:fn.required,"aria-hidden":"true",children:" *"})]}),v&&n.jsx("span",{className:fn.description,children:v})]})]})});hg.displayName="Checkbox";const fg=g.createContext(null),vu=g.createContext(0),mg=g.forwardRef(({type:e="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:p="md",disabled:m=!1,className:v,children:x,...y},w)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[M,_]=g.useState(k),C=i!==void 0,L=g.useMemo(()=>C?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:M,[C,i,M]),N=g.useCallback(P=>L.has(P),[L]),j=g.useCallback(P=>{const $=new Set(L);e==="single"?$.has(P)?a&&$.delete(P):($.clear(),$.add(P)):$.has(P)?$.delete(P):$.add(P),C||_($),l&&l(e==="single"?$.values().next().value??"":Array.from($))},[L,e,a,C,l]),S=g.useMemo(()=>({type:e,collapsible:a,size:p,disabled:m,isExpanded:N,toggle:j}),[e,a,p,m,N,j]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":m||void 0,"data-size":p,className:ie(Tt.root,d&&Tt.divider,v),...y,children:n.jsx(fg.Provider,{value:S,children:n.jsx(vu.Provider,{value:0,children:x})})})});mg.displayName="Accordion";function Zs(e,a){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(m=>m.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let p;switch(a){case"first":p=l[0];break;case"last":p=l[l.length-1];break;case"next":p=l[(d+1)%l.length];break;case"prev":p=l[(d-1+l.length)%l.length];break}p.focus()}const gg=g.forwardRef(({value:e,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:p="leading",selectable:m=!1,checked:v,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:M=!1,onExpandedChange:_,disabled:C=!1,size:L,className:N,children:j,...S},P)=>{const $=g.useContext(fg),R=g.useContext(vu),A=$!==null,E=L??($==null?void 0:$.size)??"md",D=C||($==null?void 0:$.disabled)||!1,[G,Z]=g.useState(M);let H;A?H=e!==void 0?$.isExpanded(e):!1:k!==void 0?H=k:H=G;const Y=g.useCallback(()=>{if(D)return;if(A){if(e===void 0)return;const z=$.isExpanded(e);$.toggle(e);const ne=$.type==="single"&&!$.collapsible&&z?!0:!z;_==null||_(ne);return}const T=!H;k===void 0&&Z(T),_==null||_(T)},[D,A,$,e,H,k,_]),ee=g.useCallback(T=>w==null?void 0:w(T),[w]),oe=g.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),Y();return}if(A)switch(T.key){case"ArrowDown":T.preventDefault(),Zs(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),Zs(T.currentTarget,"prev");break;case"Home":T.preventDefault(),Zs(T.currentTarget,"first");break;case"End":T.preventDefault(),Zs(T.currentTarget,"last");break}},[Y,A]),ce=g.useId(),de=`${ce}-header`,K=`${ce}-body`,F=E==="sm"?16:E==="md"?18:20,q=l??n.jsxs(n.Fragment,{children:[m&&n.jsx("span",{className:Tt.checkboxWrap,children:n.jsx(hg,{size:E,checked:v,defaultChecked:x,indeterminate:y,disabled:D,onChange:ee})}),s&&n.jsx("span",{className:Tt.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:P,"data-accordion-item":"","data-expanded":H||void 0,"data-disabled":D||void 0,"data-size":E,"data-depth":R,className:ie(Tt.item,Tt[`size_${E}`],N),style:{"--accordion-depth":R},...S,children:[n.jsxs("div",{className:Tt.header,children:[n.jsx("button",{type:"button",id:de,"data-accordion-header-button":"","data-accordion-depth":R,className:Tt.hitTarget,"aria-expanded":H,"aria-controls":K,"aria-disabled":D||void 0,disabled:D,onClick:Y,onKeyDown:oe}),n.jsxs("div",{className:Tt.headerContent,children:[p==="leading"&&n.jsx("span",{className:Tt.chevron,"aria-hidden":"true",children:n.jsx(wn,{size:F,color:"currentColor"})}),q,n.jsxs("div",{className:Tt.labelBlock,children:[n.jsx("span",{className:Tt.label,children:a}),i&&n.jsx("span",{className:Tt.description,children:i})]}),d&&n.jsx("div",{className:Tt.trailingSlot,children:d}),p==="trailing"&&n.jsx("span",{className:Tt.chevron,"aria-hidden":"true",children:n.jsx(wn,{size:F,color:"currentColor"})})]})]}),n.jsx("div",{id:K,role:"region","aria-labelledby":de,className:Tt.body,"aria-hidden":!H,children:n.jsx("div",{className:Tt.bodyInner,children:n.jsx("div",{className:Tt.bodyContent,children:n.jsx(vu.Provider,{value:R+1,children:j})})})})]})});gg.displayName="AccordionItem";const K9="_root_1vgip_7",Q9="_fullWidth_1vgip_12",Z9="_panel_1vgip_19",X9="_panelInner_1vgip_73",J9="_item_1vgip_81",eb="_groupHeading_1vgip_87",tb="_groupHeadingSm_1vgip_96",nb="_groupHeadingLabel_1vgip_100",rb="_groupHeadingCollapsible_1vgip_112",ob="_groupChevron_1vgip_125",ab="_groupDivider_1vgip_139",Vn={root:K9,fullWidth:Q9,panel:Z9,panelInner:X9,item:J9,groupHeading:eb,groupHeadingSm:tb,groupHeadingLabel:nb,groupHeadingCollapsible:rb,groupChevron:ob,groupDivider:ab};function ib({group:e,size:a,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Vn.groupHeading,a==="sm"&&Vn.groupHeadingSm,e.collapsible&&Vn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(p=>!p):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Vn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Vn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(wn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((p,m)=>{const v=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return n.jsx(xn,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:Vn.item,onClick:()=>{var x;(x=p.onClick)==null||x.call(p),i&&!v&&s()}},p.id)})})]})}const rp=g.forwardRef(({trigger:e,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:p=!1,onOpenChange:m,disabled:v=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},M)=>{const[_,C]=g.useState(p),L=g.useRef(null),N=d!==void 0?d:_,j=g.useCallback(P=>{L.current=P,M&&(typeof M=="function"?M(P):M.current=P)},[M]),S=g.useCallback(P=>{d===void 0&&C(P),m==null||m(P)},[d,m]);return g.useEffect(()=>{if(!N)return;const P=$=>{var R;(R=L.current)!=null&&R.contains($.target)||S(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[N,S]),g.useEffect(()=>{if(!N)return;const P=$=>{$.key==="Escape"&&S(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[N,S]),n.jsxs("div",{ref:j,className:ie(Vn.root,y&&Vn.fullWidth,w),...k,children:[n.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":N,tabIndex:v?-1:0,onClick:v?void 0:()=>S(!N),onKeyDown:v?void 0:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),S(!N))},children:e}),n.jsx("div",{className:Vn.panel,"data-open":N||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Vn.panelInner,children:a.map((P,$)=>n.jsxs("div",{children:[$>0&&n.jsx("div",{className:Vn.groupDivider,"aria-hidden":"true"}),n.jsx(ib,{group:P,size:i,closeOnSelect:x,onClose:()=>S(!1)})]},P.id))})})]})});rp.displayName="DropdownMenu";const sb="_hiddenInput_8457s_8",lb="_area_8457s_19",cb="_uploadIcon_8457s_53",db="_textBlock_8457s_59",ub="_title_8457s_67",pb="_description_8457s_76",hb="_fileRow_8457s_88",fb="_fileIcon_8457s_96",mb="_fileName_8457s_101",gb="_successIcon_8457s_115",vb="_removeBtn_8457s_121",xb="_progressWrap_8457s_145",yb="_progressBar_8457s_153",wb="_progressFill_8457s_161",bb="_progressLabel_8457s_168",kb="_errorRow_8457s_178",_b="_errorIcon_8457s_186",Cb="_errorText_8457s_192",jb="_areaMulti_8457s_206",Sb="_multiDropZone_8457s_214",Mb="_fileList_8457s_244",$b="_fileListItem_8457s_254",Nb="_inline_8457s_267",Rb="_inlineIcon_8457s_309",Lb="_inlineText_8457s_330",Ab="_inlineProgress_8457s_353",Tb="_inlineProgressFill_8457s_363",Ib="_footerSlot_8457s_429",qe={hiddenInput:sb,area:lb,uploadIcon:cb,textBlock:db,title:ub,description:pb,fileRow:hb,fileIcon:fb,fileName:mb,successIcon:gb,removeBtn:vb,progressWrap:xb,progressBar:yb,progressFill:wb,progressLabel:bb,errorRow:kb,errorIcon:_b,errorText:Cb,areaMulti:jb,multiDropZone:Sb,fileList:Mb,fileListItem:$b,inline:Nb,inlineIcon:Rb,inlineText:Lb,inlineProgress:Ab,inlineProgressFill:Tb,footerSlot:Ib};function Wd(e){const a=e.name.lastIndexOf(".");return a!==-1?e.name.slice(a+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const vg=g.forwardRef(({variant:e="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:p,title:m="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:M,fieldVariant:_="outlined",browseButtonVariant:C="tertiary",footerSlot:L,disabled:N=!1,className:j,...S},P)=>{const $=g.useRef(null),[R,A]=g.useState(!1),E=!N&&(a||i==="empty"),D=g.useCallback(()=>{var K;!N&&(a||i==="empty")&&((K=$.current)==null||K.click())},[N,a,i]),G=g.useCallback(K=>{var F;if(a){const q=K.target.files?Array.from(K.target.files):[];q.length&&(w==null||w(q))}else{const q=(F=K.target.files)==null?void 0:F[0];q&&(y==null||y(q))}K.target.value=""},[a,y,w]),Z=g.useCallback(K=>{K.preventDefault(),E&&A(!0)},[E]),H=g.useCallback(()=>A(!1),[]),Y=g.useCallback(K=>{var F;if(K.preventDefault(),A(!1),!!E)if(a){const q=K.dataTransfer.files?Array.from(K.dataTransfer.files):[];q.length&&(w==null||w(q))}else{const q=(F=K.dataTransfer.files)==null?void 0:F[0];q&&(y==null||y(q))}},[E,a,y,w]),ee=n.jsx("input",{ref:$,type:"file",className:qe.hiddenInput,accept:x,multiple:a,disabled:N,"aria-hidden":"true",tabIndex:-1,onChange:G}),oe=l?n.jsxs("div",{className:qe.fileRow,children:[n.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Zr,{size:16})}),n.jsx("span",{className:qe.fileName,children:l.name}),n.jsx(An,{size:"sm",variant:"subtle",children:Wd(l)}),i==="complete"&&n.jsx("span",{className:`${qe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(yn,{size:16})}),n.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})})]}):null;if(e==="area"){if(a){const K=d??[];return n.jsxs("div",{ref:P,className:ie(qe.areaMulti,j),"data-drag-over":R||void 0,"data-disabled":N||void 0,onDragOver:Z,onDragLeave:H,onDrop:Y,...S,children:[ee,n.jsxs("div",{className:qe.multiDropZone,children:[n.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Bd,{size:24})}),n.jsxs("div",{className:qe.textBlock,children:[n.jsx("p",{className:qe.title,children:m}),n.jsx("p",{className:qe.description,children:v})]}),n.jsx(ze,{variant:C,size:"sm",onClick:D,disabled:N,children:"Browse Files"})]}),K.length>0&&n.jsx("ul",{className:qe.fileList,"aria-label":"Selected files",children:K.map((F,q)=>n.jsxs("li",{className:qe.fileListItem,children:[n.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Zr,{size:16})}),n.jsx("span",{className:qe.fileName,children:F.name}),n.jsx(An,{size:"sm",variant:"subtle",children:Wd(F)}),n.jsx("button",{type:"button",className:qe.removeBtn,onClick:()=>M==null?void 0:M(q),"aria-label":`Remove ${F.name}`,disabled:N,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})})]},`${F.name}-${q}`))})]})}return n.jsxs("div",{ref:P,className:ie(qe.area,j),"data-state":i,"data-drag-over":R||void 0,"data-disabled":N||void 0,onDragOver:Z,onDragLeave:H,onDrop:Y,...S,children:[ee,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Bd,{size:24})}),n.jsxs("div",{className:qe.textBlock,children:[n.jsx("p",{className:qe.title,children:m}),n.jsx("p",{className:qe.description,children:v})]}),n.jsx(ze,{variant:C,size:"sm",onClick:D,disabled:N,children:"Browse File"}),L&&n.jsx("div",{className:qe.footerSlot,children:L})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[oe,n.jsxs("div",{className:qe.progressWrap,children:[n.jsx("div",{className:qe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:qe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:qe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&oe,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:qe.errorRow,children:[n.jsx("span",{className:`${qe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ma,{size:20})}),n.jsx("p",{className:qe.errorText,children:p??"Upload failed. Please try again."})]}),n.jsx(ze,{variant:"tertiary",size:"sm",onClick:D,disabled:N,children:"Try Again"})]})]})}const ce={empty:n.jsx(Bd,{size:16}),uploading:n.jsx(Zr,{size:16}),complete:n.jsx(yn,{size:16}),error:n.jsx(ma,{size:16})}[i],de=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:P,className:ie(qe.inline,j),"data-state":i,"data-field-variant":_,"data-disabled":N||void 0,...S,children:[ee,n.jsx("span",{className:`${qe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ce}),n.jsxs("span",{className:qe.inlineText,"data-has-file":de?"":void 0,children:[i==="empty"&&m,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(p??"Upload failed. Please try again.")]}),de&&n.jsx(An,{size:"sm",variant:"subtle",children:Wd(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})}),i==="empty"&&n.jsx(ze,{variant:C,size:"xs",onClick:D,disabled:N,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:qe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:qe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});vg.displayName="FileUploader";const Eb="_wrapper_127v8_8",Pb="_labelRow_127v8_16",zb="_label_127v8_16",Ob="_required_127v8_28",Fb="_labelIcon_127v8_36",Db="_sm_127v8_46",Bb="_md_127v8_47",Wb="_lg_127v8_48",Hb="_shell_127v8_44",Ub="_outlined_127v8_75",qb="_underlined_127v8_102",Vb="_float_127v8_147",Gb="_leadingSlot_127v8_181",Yb="_trailingSlot_127v8_193",Kb="_trailingActionWrap_127v8_206",Qb="_trailingActionBtn_127v8_213",Zb="_successTrailingSlot_127v8_234",Xb="_errorTrailingSlot_127v8_239",Jb="_control_127v8_251",e7="_selectValue_127v8_297",t7="_selectPlaceholder_127v8_303",n7="_selectChevron_127v8_307",r7="_selectChevronOpen_127v8_312",o7="_textareaShell_127v8_315",a7="_textareaControl_127v8_334",i7="_footer_127v8_351",s7="_footerRow_127v8_363",l7="_footerError_127v8_364",c7="_footerSuccess_127v8_365",d7="_footerIcon_127v8_368",u7="_wrapperHorizontal_127v8_378",p7="_horizontalLabelCol_127v8_384",h7="_horizontalLabelHint_127v8_393",f7="_horizontalControlCol_127v8_402",m7="_msContainer_127v8_416",g7="_msShell_127v8_425",v7="_msOpen_127v8_440",x7="_msDisabled_127v8_447",y7="_msBody_127v8_450",w7="_msPlaceholder_127v8_459",b7="_msChevron_127v8_469",k7="_msChevronOpen_127v8_480",_7="_msPanel_127v8_483",Ee={wrapper:Eb,labelRow:Pb,label:zb,required:Ob,labelIcon:Fb,sm:Db,md:Bb,lg:Wb,shell:Hb,outlined:Ub,underlined:qb,float:Vb,leadingSlot:Gb,trailingSlot:Yb,trailingActionWrap:Kb,trailingActionBtn:Qb,successTrailingSlot:Zb,errorTrailingSlot:Xb,control:Jb,selectValue:e7,selectPlaceholder:t7,selectChevron:n7,selectChevronOpen:r7,textareaShell:o7,textareaControl:a7,footer:i7,footerRow:s7,footerError:l7,footerSuccess:c7,footerIcon:d7,wrapperHorizontal:u7,horizontalLabelCol:p7,horizontalLabelHint:h7,horizontalControlCol:f7,msContainer:m7,msShell:g7,msOpen:v7,msDisabled:x7,msBody:y7,msPlaceholder:w7,msChevron:b7,msChevronOpen:k7,msPanel:_7};function ja({label:e,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:p,htmlFor:m,layout:v="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,M=l?"error":d?"success":"hint",_=k?n.jsxs("p",{className:ie(Ee.footer,M==="error"&&Ee.footerError,M==="success"&&Ee.footerSuccess),role:M==="error"?"alert":void 0,"aria-live":M==="error"?"assertive":void 0,children:[M==="hint"&&n.jsx("span",{className:`${Ee.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ma,{size:12})}),k]}):null,C=e!=null?n.jsxs("div",{className:Ee.labelRow,children:[n.jsx("label",{className:Ee.label,htmlFor:m,children:e}),p&&n.jsx("span",{className:Ee.required,"aria-hidden":"true",children:"*"}),a&&n.jsx("span",{className:`${Ee.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(v==="horizontal"){const L={width:typeof x=="number"?`${x}px`:x};return n.jsxs("div",{className:ie(Ee.wrapper,Ee.wrapperHorizontal,y),children:[(C||i)&&n.jsxs("div",{className:Ee.horizontalLabelCol,style:L,children:[C,i&&n.jsx("p",{className:Ee.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Ee.horizontalControlCol,children:[w,_]})]})}return n.jsxs("div",{className:ie(Ee.wrapper,y),children:[C,w,_]})}function Ii({variant:e="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:p,trailingIcon:m,trailingAction:v,isTextarea:x,focused:y,className:w,children:k}){const M=a==="sm"?14:a==="lg"?18:16,_=s&&!i&&!m&&!v?n.jsx(yn,{size:M}):null,C=i&&!m&&!v?n.jsx(ma,{size:M}):null,L=!!p,N=!!(m||v||_||C);return n.jsxs("div",{className:ie(Ee.shell,Ee[e],Ee[a],x&&Ee.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":L||void 0,"data-has-trailing":N||void 0,children:[p&&n.jsx("span",{className:ie(Ee.leadingSlot,"alloy-icon-slot"),children:p}),k,v?n.jsx("span",{className:Ee.trailingActionWrap,children:v}):m||_||C?n.jsx("span",{className:ie(Ee.trailingSlot,"alloy-icon-slot",_&&Ee.successTrailingSlot,C&&Ee.errorTrailingSlot),children:m??_??C}):null]})}const op=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",type:v="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:M,id:_,disabled:C,readOnly:L,className:N,...j},S)=>{const P=g.useId(),$=_??P;return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:$,layout:w,labelWidth:k,labelDescription:M,className:N,children:n.jsx(Ii,{variant:p,size:m,error:!!s,success:!!l,disabled:C,readOnly:L,leadingIcon:x,trailingIcon:y,children:n.jsx("input",{ref:S,id:$,type:v,disabled:C,readOnly:L,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${$}-footer`:void 0,className:ie(Ee.control),...j})})})});op.displayName="TextField";const C7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:M,disabled:_,readOnly:C,className:L,...N},j)=>{const S=g.useId(),P=M??S;return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:P,layout:y,labelWidth:w,labelDescription:k,className:L,children:n.jsx(Ii,{variant:p,size:m,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:v,trailingIcon:x,isTextarea:!0,children:n.jsx("textarea",{ref:j,id:P,disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,className:ie(Ee.control,Ee.textareaControl),...N})})})});C7.displayName="TextArea";const j7={sm:"sm",md:"md",lg:"lg"},xg=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,layout:x,labelWidth:y,labelDescription:w,options:k,value:M,defaultValue:_="",onChange:C,placeholder:L="Select an option…",disabled:N,readOnly:j,id:S,className:P},$)=>{var F;const R=g.useId(),A=S??R,E=M!==void 0,[D,G]=g.useState(_),Z=E?M:D,H=g.useCallback(q=>{E||G(q),C==null||C(q)},[E,C]),[Y,ee]=g.useState(!1),oe=(F=k.find(q=>q.value===Z))==null?void 0:F.label,ce=m==="sm"?14:m==="lg"?18:16,de=j7[m],K=n.jsx(Ii,{variant:p,size:m,error:!!s,success:!!l,disabled:N,readOnly:j,focused:Y,leadingIcon:v,trailingIcon:n.jsx("span",{className:ie(Ee.selectChevron,Y&&Ee.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Tn,{size:ce})}),children:n.jsx("span",{className:ie(Ee.control,Ee.selectValue,!oe&&Ee.selectPlaceholder),children:oe??L})});return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:A,layout:x,labelWidth:y,labelDescription:w,className:P,children:n.jsx(rp,{ref:$,id:A,fullWidth:!0,trigger:K,groups:[{id:"options",options:k.map(q=>({id:q.value,label:q.label,disabled:q.disabled,selected:q.value===Z,onClick:()=>H(q.value)}))}],size:de,width:"100%",placement:"bottom-start",open:Y,onOpenChange:ee,disabled:N||j})})});xg.displayName="SelectField";const S7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:M,readOnly:_,className:C,...L},N)=>{const j=g.useId(),S=k??j,[P,$]=g.useState(!1),R=m==="sm"?14:m==="lg"?18:16;return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:S,layout:x,labelWidth:y,labelDescription:w,className:C,children:n.jsx(Ii,{variant:p,size:m,error:!!s,success:!!l,disabled:M,readOnly:_,leadingIcon:v,trailingAction:n.jsx("button",{type:"button",className:`${Ee.trailingActionBtn} alloy-icon-slot`,onClick:()=>$(A=>!A),tabIndex:M?-1:0,"aria-label":P?"Hide password":"Show password","aria-pressed":P,children:P?n.jsx(D0,{size:R}):n.jsx(qu,{size:R})}),children:n.jsx("input",{ref:N,id:S,type:P?"text":"password",disabled:M,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Ee.control),...L})})})});S7.displayName="PasswordField";const yg=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",onClear:v,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:M,value:_,defaultValue:C,disabled:L,readOnly:N,className:j,...S},P)=>{const $=g.useId(),R=M??$,A=m==="sm"?14:m==="lg"?18:16,E=_!==void 0?String(_).length>0:void 0,D=g.useCallback(G=>{x==null||x(G)},[x]);return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:R,layout:y,labelWidth:w,labelDescription:k,className:j,children:n.jsx(Ii,{variant:p,size:m,error:!!s,success:!!l,disabled:L,readOnly:N,leadingIcon:n.jsx(Yu,{size:A}),trailingAction:E?n.jsx("button",{type:"button",className:`${Ee.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:L?-1:0,"aria-label":"Clear search",children:n.jsx(Li,{size:A})}):void 0,children:n.jsx("input",{ref:P,id:R,type:"search",value:_,defaultValue:C,disabled:L,readOnly:N,"aria-invalid":s?!0:void 0,onChange:D,className:ie(Ee.control),...S})})})});yg.displayName="SearchField";const wg=g.forwardRef((e,a)=>n.jsx(op,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...e}));wg.displayName="EmailField";const bg=g.forwardRef((e,a)=>n.jsx(op,{ref:a,type:"number",inputMode:"numeric",...e}));bg.displayName="NumberField";const M7={sm:"sm",md:"sm",lg:"md"},$7={sm:"sm",md:"md",lg:"lg"},N7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",layout:v,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:M=[],onChange:_,placeholder:C="Select options…",disabled:L,readOnly:N,id:j,className:S},P)=>{const $=g.useId(),R=j??$,A=`${R}-list`,E=g.useRef(null),D=k!==void 0,[G,Z]=g.useState(M),H=D?k:G,Y=g.useCallback(z=>{D||Z(z),_==null||_(z)},[D,_]),[ee,oe]=g.useState(!1);g.useEffect(()=>{if(!ee)return;const z=U=>{E.current&&!E.current.contains(U.target)&&oe(!1)},ne=U=>{U.key==="Escape"&&oe(!1)};return document.addEventListener("mousedown",z),document.addEventListener("keydown",ne),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("keydown",ne)}},[ee]);const ce=z=>{if(L||N)return;const ne=H.includes(z)?H.filter(U=>U!==z):[...H,z];Y(ne)},de=z=>{L||N||((z.key==="Enter"||z.key===" ")&&(z.preventDefault(),oe(ne=>!ne)),z.key==="Backspace"&&H.length>0&&!ee&&Y(H.slice(0,-1)))},K=m==="sm"?14:m==="lg"?18:16,F=M7[m],q=$7[m],T=Object.fromEntries(w.map(z=>[z.value,z.label]));return n.jsx(ja,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:R,layout:v,labelWidth:x,labelDescription:y,className:S,children:n.jsxs("div",{ref:E,className:Ee.msContainer,children:[n.jsxs("div",{ref:P,id:R,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":A,"aria-disabled":L||void 0,tabIndex:L?-1:0,className:ie(Ee.msShell,Ee[p],Ee[m],ee&&Ee.msOpen,L&&Ee.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":L||void 0,onClick:()=>{!L&&!N&&oe(z=>!z)},onKeyDown:de,children:[n.jsx("div",{className:Ee.msBody,children:H.length===0?n.jsx("span",{className:Ee.msPlaceholder,children:C}):H.map(z=>n.jsx(An,{size:F,variant:"subtle",dismissible:!L&&!N,onDismiss:()=>Y(H.filter(ne=>ne!==z)),children:T[z]??z},z))}),n.jsx("span",{className:ie(Ee.msChevron,"alloy-icon-slot",ee&&Ee.msChevronOpen),children:n.jsx(Tn,{size:K})})]}),ee&&n.jsx("div",{id:A,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ee.msPanel,children:w.map(z=>{const ne=H.includes(z.value);return n.jsx(xn,{label:z.label,size:q,trailingAction:"checkbox",checked:ne,disabled:z.disabled,role:"option","aria-selected":ne,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{z.disabled||ce(z.value)}},z.value)})})]})})});N7.displayName="MultiSelectField";const R7="_root_1249j_6",L7="_pageControls_1249j_14",A7="_pageBtn_1249j_21",T7="_ellipsis_1249j_36",I7="_rowsGroup_1249j_51",E7="_rowsSelect_1249j_58",P7="_countText_1249j_64",z7="_groupLabel_1249j_74",O7="_goToGroup_1249j_84",F7="_goToInput_1249j_91",Un={root:R7,pageControls:L7,pageBtn:A7,ellipsis:T7,rowsGroup:I7,rowsSelect:E7,countText:P7,groupLabel:z7,goToGroup:O7,goToInput:F7};function D7(e,a,i){if(a<=1)return[1];const s=Math.max(2,e-i),l=Math.min(a-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let p=s;p<=l;p++)d.push(p);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const B7=g.forwardRef(({page:e,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:m=!1,totalCount:v,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...M},_)=>{const[C,L]=g.useState(""),N=y,j=y,S=y==="sm"?14:16,P=D7(e,a,x),$=g.useCallback(E=>{const D=Math.min(Math.max(1,E),a);D!==e&&i(D)},[e,a,i]),R=g.useCallback(E=>{if(E.key==="Enter"){const D=parseInt(C,10);isNaN(D)||$(D),L("")}},[C,$]),A=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return n.jsxs("nav",{ref:_,"aria-label":"Pagination",className:ie(Un.root,k),"data-size":y,...M,children:[s&&n.jsxs("div",{className:Un.rowsGroup,children:[n.jsx("span",{className:Un.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Un.rowsSelect,children:n.jsx(xg,{size:j,value:l,disabled:w,"aria-label":"Rows per page",onChange:E=>p==null?void 0:p(Number(E.target.value)),children:d.map(E=>n.jsx("option",{value:E,children:E},E))})})]}),A&&n.jsx("span",{className:Un.countText,"aria-live":"polite",children:A}),n.jsxs("div",{className:Un.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(ze,{variant:"ghost",size:N,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>$(e-1),children:n.jsx(F0,{size:S})}),P.map((E,D)=>E==="ellipsis"?n.jsx("span",{className:Un.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${D}`):n.jsx(ze,{variant:E===e?"secondary":"ghost",size:N,"aria-label":`Page ${E}`,"aria-current":E===e?"page":void 0,disabled:w,onClick:()=>$(E),className:Un.pageBtn,children:E},E)),n.jsx(ze,{variant:"ghost",size:N,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=a,onClick:()=>$(e+1),children:n.jsx(wn,{size:S})})]}),m&&n.jsxs("div",{className:Un.goToGroup,children:[n.jsx("span",{className:Un.groupLabel,children:"Go to"}),n.jsx("div",{className:Un.goToInput,children:n.jsx(bg,{size:j,value:C,placeholder:String(e),min:1,max:a,disabled:w,"aria-label":"Go to page number",onChange:E=>L(E.target.value),onKeyDown:R})})]})]})});B7.displayName="Pagination";const W7="_root_1vx33_6",H7="_fullWidth_1vx33_18",U7="_item_1vx33_23",q7="_indicator_1vx33_28",V7="_sm_1vx33_46",G7="_md_1vx33_54",Y7="_lg_1vx33_62",K7="_itemSelected_1vx33_109",Q7="_itemIcon_1vx33_115",Z7="_itemLabel_1vx33_127",Kr={root:W7,fullWidth:H7,item:U7,indicator:q7,sm:V7,md:G7,lg:Y7,itemSelected:K7,itemIcon:Q7,itemLabel:Z7},kg=g.createContext(null);function X7(e){const a=g.useContext(kg);if(!a)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return a}const _g=g.forwardRef(({value:e,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...p},m)=>{const{value:v,onChange:x,disabled:y,name:w}=X7("SegmentedControl.Item"),k=v===e,M=y||!!l;return n.jsxs("button",{ref:m,type:"button",role:"radio","aria-checked":k,name:w,disabled:M,className:ie(Kr.item,k&&Kr.itemSelected,i),onClick:_=>{M||x(e),d==null||d(_)},...p,children:[a&&n.jsx("span",{className:ie(Kr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&n.jsx("span",{className:Kr.itemLabel,children:s})]})});_g.displayName="SegmentedControl.Item";const Cg=g.forwardRef(({value:e,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:p,children:m,...v},x)=>{const[y,w]=g.useState(a),k=e!==void 0,M=k?e:y,_=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const N=C.current;if(!N)return;const j=N.querySelector('[aria-checked="true"]');j&&(N.style.setProperty("--sc-indicator-x",`${j.offsetLeft}px`),N.style.setProperty("--sc-indicator-w",`${j.offsetWidth}px`))},[M,s]);const L=N=>{k||w(N),i==null||i(N)};return n.jsx(kg.Provider,{value:{value:M,onChange:L,disabled:l,name:_},children:n.jsxs("div",{ref:N=>{C.current=N,typeof x=="function"?x(N):x&&(x.current=N)},role:"radiogroup",className:ie(Kr.root,Kr[s],d&&Kr.fullWidth,p),...v,children:[n.jsx("span",{className:Kr.indicator,"aria-hidden":"true"}),m]})})});Cg.displayName="SegmentedControl";Object.assign(Cg,{Item:_g});const J7="_root_fkv0x_6",ek="_sm_fkv0x_26",tk="_md_fkv0x_33",nk="_lg_fkv0x_40",rk="_dot_fkv0x_49",ok="_success_fkv0x_58",ak="_warning_fkv0x_65",ik="_error_fkv0x_72",sk="_info_fkv0x_79",lk="_neutral_fkv0x_86",ck="_pending_fkv0x_93",Xs={root:J7,sm:ek,md:tk,lg:nk,dot:rk,success:ok,warning:ak,error:ik,info:sk,neutral:lk,pending:ck},ji=g.forwardRef(({status:e="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},p)=>n.jsxs("span",{ref:p,className:ie(Xs.root,Xs[a],Xs[e],s),...d,children:[i&&n.jsx("span",{className:Xs.dot,"aria-hidden":"true"}),l]}));ji.displayName="StatusTag";const dk="_root_1m8t5_6",uk="_underline_1m8t5_15",pk="_background_1m8t5_21",hk="_underlineIndicator_1m8t5_26",fk="_md_1m8t5_43",mk="_lg_1m8t5_44",gk="_tab_1m8t5_42",vk="_tabSelected_1m8t5_77",xk="_tabIcon_1m8t5_99",yk="_tabLabel_1m8t5_111",wk="_tabBadge_1m8t5_116",bk="_tabLabelEditable_1m8t5_123",kk="_tabLabelInput_1m8t5_128",_k="_addTab_1m8t5_147",Ck="_addTabIcon_1m8t5_160",sn={root:dk,underline:uk,background:pk,underlineIndicator:hk,md:fk,lg:mk,tab:gk,tabSelected:vk,tabIcon:xk,tabLabel:yk,tabBadge:wk,tabLabelEditable:bk,tabLabelInput:kk,addTab:_k,addTabIcon:Ck},jg=g.createContext(null);function Sg(e){const a=g.useContext(jg);if(!a)throw new Error(`<${e}> must be rendered inside <Tabs>`);return a}const Mg=g.forwardRef(({value:e,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:p,onClick:m,className:v,children:x,...y},w)=>{const{value:k,onChange:M,disabled:_,name:C}=Sg("Tabs.Tab"),L=k===e,N=_||!!s,j=typeof x=="string"?x:"",[S,P]=g.useState(d&&l),[$,R]=g.useState(j),A=g.useRef(null);g.useEffect(()=>{if(S){const H=A.current;H&&(H.focus(),H.select())}},[S]),g.useEffect(()=>{d&&l&&!S&&(R(typeof x=="string"?x:""),P(!0))},[d,l]);const E=()=>{const H=$.trim();H&&H!==j&&(p==null||p(H)),P(!1)},D=()=>{R(j),P(!1)},G=H=>{!l||N||(H.stopPropagation(),R(j),P(!0))},Z=H=>{H.key==="Enter"?(H.preventDefault(),E()):H.key==="Escape"&&(H.preventDefault(),D())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":L,name:C,disabled:N,className:ie(sn.tab,L&&sn.tabSelected,v),onClick:H=>{S||(N||M(e),m==null||m(H))},...y,children:[a&&n.jsx("span",{className:ie(sn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),S?n.jsx("input",{ref:A,type:"text",value:$,onChange:H=>R(H.target.value),onKeyDown:Z,onBlur:E,onClick:H=>H.stopPropagation(),className:sn.tabLabelInput,"aria-label":"Tab name",size:Math.max($.length,1)}):x!==void 0&&n.jsx("span",{className:ie(sn.tabLabel,l&&sn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!S&&n.jsx("span",{className:sn.tabBadge,children:i})]})});Mg.displayName="Tabs.Tab";const jk=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),$g=g.forwardRef(({className:e,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Sg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(sn.tab,sn.addTab,e),onClick:a,...s,children:n.jsx("span",{className:ie(sn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(jk,{})})})});$g.displayName="Tabs.AddTab";const Ng=g.forwardRef(({variant:e="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:p,children:m,...v},x)=>{const[y,w]=g.useState(s),k=i!==void 0,M=k?i:y,_=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const N=C.current;if(!N||e!=="underline")return;const j=N.querySelector('[aria-selected="true"]');j&&(N.style.setProperty("--tab-indicator-x",`${j.offsetLeft}px`),N.style.setProperty("--tab-indicator-w",`${j.offsetWidth}px`))},[M,e]);const L=N=>{k||w(N),l==null||l(N)};return n.jsx(jg.Provider,{value:{value:M,onChange:L,disabled:d,variant:e,size:a,name:_},children:n.jsxs("div",{ref:N=>{C.current=N,typeof x=="function"?x(N):x&&(x.current=N)},role:"tablist",className:ie(sn.root,sn[e],sn[a],p),...v,children:[e==="underline"&&n.jsx("span",{className:sn.underlineIndicator,"aria-hidden":"true"}),m]})})});Ng.displayName="Tabs";Object.assign(Ng,{Tab:Mg,AddTab:$g});const Sk="_selectedBorder_1ypeg_7",Mk="_selectedFill_1ypeg_12",Sf={selectedBorder:Sk,selectedFill:Mk},$k=g.forwardRef(({selected:e=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...p},m)=>{const v=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?Sf.selectedFill:Sf.selectedBorder:void 0;return n.jsx(ze,{ref:m,variant:a,"aria-pressed":e,className:ie(x,d),onClick:v,...p})});$k.displayName="ToggleButton";const Nk="_root_mcb75_6",Rk="_disabled_mcb75_13",Lk="_sm_mcb75_20",Ak="_md_mcb75_31",Tk="_lg_mcb75_42",Ik="_track_mcb75_54",Ek="_trackChecked_mcb75_90",Pk="_thumb_mcb75_100",zk="_labelWrap_mcb75_117",Ok="_label_mcb75_117",Fk="_description_mcb75_139",yr={root:Nk,disabled:Rk,sm:Lk,md:Ak,lg:Tk,track:Ik,trackChecked:Ek,thumb:Pk,labelWrap:zk,label:Ok,description:Fk},Dk=g.forwardRef(({checked:e,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:p,id:m,name:v,value:x,className:y},w)=>{const k=g.useId(),M=m??k,_=`${M}-label`,C=e!==void 0,[L,N]=g.useState(a),j=C?e:L,S=()=>{if(s)return;const $=!j;C||N($),i==null||i($)},P=$=>{($.key===" "||$.key==="Enter")&&($.preventDefault(),S())};return n.jsxs("div",{className:ie(yr.root,yr[l],s&&yr.disabled,y),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:M,"aria-checked":j,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:x,className:ie(yr.track,j&&yr.trackChecked),"data-checked":j||void 0,"data-disabled":s||void 0,onClick:S,onKeyDown:P,children:n.jsx("span",{className:yr.thumb})}),(d||p)&&n.jsxs("div",{className:yr.labelWrap,children:[d&&n.jsx("label",{id:_,htmlFor:M,className:yr.label,children:d}),p&&n.jsx("span",{className:yr.description,children:p})]})]})});Dk.displayName="Switch";const Bk="_root_104n4_5",Wk="_disabled_104n4_11",Hk="_sm_104n4_17",Uk="_md_104n4_25",qk="_lg_104n4_33",Vk="_controlWrap_104n4_41",Gk="_input_104n4_50",Yk="_ring_104n4_65",Kk="_ringChecked_104n4_90",Qk="_ringError_104n4_94",Zk="_dot_104n4_104",Xk="_labelWrap_104n4_112",Jk="_label_104n4_112",e_="_error_104n4_130",t_="_required_104n4_132",n_="_description_104n4_137",rn={root:Bk,disabled:Wk,sm:Hk,md:Uk,lg:qk,controlWrap:Vk,input:Gk,ring:Yk,ringChecked:Kk,ringError:Qk,dot:Zk,labelWrap:Xk,label:Jk,error:e_,required:t_,description:n_},r_=g.forwardRef(({value:e,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:p,description:m,id:v,name:x,required:y,className:w},k)=>{const M=g.useId(),_=v??M;return n.jsxs("div",{className:ie(rn.root,rn[d],s&&rn.disabled,l&&rn.error,w),children:[n.jsxs("div",{className:rn.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:_,name:x,value:e,checked:a,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:rn.input}),n.jsx("span",{className:ie(rn.ring,a&&rn.ringChecked,l&&rn.ringError),"aria-hidden":"true",children:a&&n.jsx("span",{className:rn.dot})})]}),(p||m)&&n.jsxs("div",{className:rn.labelWrap,children:[p&&n.jsxs("label",{htmlFor:_,className:rn.label,children:[p,y&&n.jsx("span",{className:rn.required,"aria-hidden":"true",children:" *"})]}),m&&n.jsx("span",{className:rn.description,children:m})]})]})});r_.displayName="Radio";const o_="_table_1ad04_8",a_="_sm_1ad04_16",i_="_row_1ad04_30",s_="_head_1ad04_47",l_="_headLabel_1ad04_82",c_="_sortBtn_1ad04_96",d_="_sortIcon_1ad04_119",u_="_cell_1ad04_142",p_="_cellText_1ad04_175",h_="_cellStack_1ad04_203",f_="_cellStackPrimary_1ad04_210",m_="_cellStackSecondary_1ad04_221",g_="_cellActions_1ad04_233",v_="_cellControl_1ad04_240",x_="_addCell_1ad04_251",y_="_addRowCell_1ad04_264",w_="_addRowLabel_1ad04_276",zt={table:o_,sm:a_,row:i_,head:s_,headLabel:l_,sortBtn:c_,sortIcon:d_,cell:u_,cellText:p_,cellStack:h_,cellStackPrimary:f_,cellStackSecondary:m_,cellActions:g_,cellControl:v_,addCell:x_,addRowCell:y_,addRowLabel:w_},Rg=g.createContext({addColumn:!1,addRow:!1}),Lg=()=>g.useContext(Rg),b_=g.forwardRef(({size:e="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:p,children:m,...v},x)=>{const y=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(Rg.Provider,{value:y,children:n.jsx("table",{ref:x,className:ie(zt.table,e==="sm"&&zt.sm,p),"data-interaction":a,...v,children:m})})});b_.displayName="Table";const Ag=g.forwardRef(({align:e="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:p,...m},v)=>{const x=a!==void 0;return n.jsx("th",{ref:v,className:ie(zt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...m,children:x?n.jsxs("button",{type:"button",className:zt.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,n.jsx("span",{className:zt.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:n.jsx(Tn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:zt.headLabel,children:p})})});Ag.displayName="TableHead";const k_=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,onAddColumn:l}=Lg(),d=s?g.Children.map(e,(p,m)=>{if(!g.isValidElement(p)||m!==0)return p;const v=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...v,n.jsx(Ag,{hoverable:!0,onClick:l,className:zt.addCell,"aria-label":"Add column",children:n.jsx(No,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...a,children:d})});k_.displayName="TableHeader";const Tg=g.forwardRef(({hoverable:e=!0,selected:a,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(zt.row,i),"data-hoverable":e||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));Tg.displayName="TableRow";const xu=g.forwardRef(({align:e="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...p},m)=>n.jsx("td",{ref:m,className:ie(zt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...p,children:d}));xu.displayName="TableCell";const __=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=Lg(),p=s?g.Children.map(e,m=>{if(!g.isValidElement(m))return m;const v=g.Children.toArray(m.props.children);return g.cloneElement(m,{},[...v,n.jsx(xu,{"aria-hidden":"true",className:zt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...a,children:[p,l&&n.jsx(Tg,{hoverable:!1,children:n.jsx(xu,{colSpan:999,onClick:d,className:zt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:zt.addRowLabel,children:[n.jsx(No,{size:14,strokeWidth:2}),"Add row"]})})})]})});__.displayName="TableBody";const C_=g.forwardRef(({variant:e="primary",size:a="md",wrap:i,className:s,children:l,...d},p)=>n.jsx("span",{ref:p,className:ie(zt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));C_.displayName="CellText";const j_=g.forwardRef(({primary:e,secondary:a,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(zt.cellStack,i),...s,children:[n.jsx("span",{className:zt.cellStackPrimary,children:e}),a&&n.jsx("span",{className:zt.cellStackSecondary,children:a})]}));j_.displayName="CellStack";const S_=g.forwardRef(({size:e="sm",...a},i)=>n.jsx(An,{ref:i,size:e,...a}));S_.displayName="CellTag";const M_=g.forwardRef(({size:e="sm",...a},i)=>n.jsx(ji,{ref:i,size:e,...a}));M_.displayName="CellStatusTag";const $_=g.forwardRef(({className:e,children:a,...i},s)=>n.jsx("div",{ref:s,className:ie(zt.cellActions,e),...i,children:a}));$_.displayName="CellActions";const N_=g.forwardRef(({className:e,children:a,...i},s)=>n.jsx("div",{ref:s,className:ie(zt.cellControl,e),...i,children:a}));N_.displayName="CellControl";const R_="_root_1afcs_8",L_="_secondary_1afcs_23",A_="_header_1afcs_28",T_="_headerText_1afcs_36",I_="_title_1afcs_43",E_="_subtitle_1afcs_52",P_="_action_1afcs_61",z_="_hero_1afcs_66",O_="_heroValue_1afcs_74",F_="_heroCaption_1afcs_83",D_="_heroChange_1afcs_89",B_="_body_1afcs_95",W_="_legend_1afcs_103",mn={root:R_,secondary:L_,header:A_,headerText:T_,title:I_,subtitle:E_,action:P_,hero:z_,heroValue:O_,heroCaption:F_,heroChange:D_,body:B_,legend:W_},H_=g.forwardRef(({title:e,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:p,secondary:m,children:v,className:x,...y},w)=>n.jsxs("div",{ref:w,className:ie(mn.root,m&&mn.secondary,x),...y,children:[n.jsxs("div",{className:mn.header,children:[n.jsxs("div",{className:mn.headerText,children:[n.jsx("h3",{className:mn.title,children:e}),a&&n.jsx("p",{className:mn.subtitle,children:a})]}),i&&n.jsx("div",{className:mn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:mn.hero,children:[s!==void 0&&n.jsx("span",{className:mn.heroValue,children:s}),l&&n.jsx("span",{className:mn.heroChange,children:l}),d&&n.jsx("span",{className:mn.heroCaption,children:d})]}),n.jsx("div",{className:mn.body,children:v}),p&&n.jsx("div",{className:mn.legend,children:p})]}));H_.displayName="ChartCard";const U_="_root_je8nq_7",q_="_item_je8nq_17",V_="_swatch_je8nq_23",G_="_label_je8nq_29",Y_="_bookend_je8nq_33",na={root:U_,item:q_,swatch:V_,label:G_,bookend:Y_},Ig=g.forwardRef(({items:e,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...p},m)=>n.jsxs("div",{ref:m,className:ie(na.root,d),...p,children:[a&&n.jsx("span",{className:na.bookend,children:a}),e.map((v,x)=>{const y=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return n.jsxs("span",{className:na.item,children:[n.jsx("span",{className:na.swatch,style:y,"aria-hidden":"true"}),v.label!==void 0&&n.jsx("span",{className:na.label,children:v.label})]},x)}),i&&n.jsx("span",{className:na.bookend,children:i})]}));Ig.displayName="ChartLegend";const K_="_root_igkx4_5",Q_="_svgWrap_igkx4_13",Z_="_svg_igkx4_13",X_="_gridLine_igkx4_23",J_="_axisLabel_igkx4_28",eC="_legendWrap_igkx4_43",tC="_legendItem_igkx4_51",nC="_legendDot_igkx4_57",rC="_legendLabel_igkx4_64",oC="_tooltip_igkx4_71",aC="_tooltipLabel_igkx4_85",iC="_tooltipRow_igkx4_95",sC="_tooltipDot_igkx4_101",lC="_tooltipSeries_igkx4_108",cC="_tooltipValue_igkx4_115",De={root:K_,svgWrap:Q_,svg:Z_,gridLine:X_,axisLabel:J_,legendWrap:eC,legendItem:tC,legendDot:nC,legendLabel:rC,tooltip:oC,tooltipLabel:aC,tooltipRow:iC,tooltipDot:sC,tooltipSeries:lC,tooltipValue:cC},dC=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Hd(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function ra(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const uC=g.forwardRef(({series:e,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:p="",barRadius:m=2,colors:v,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:M,className:_,...C},L)=>{var B,O,ae,ge;const N=v&&v.length>0?v:dC,j=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[S,P]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),$=g.useRef(null),[R,A]=g.useState(540);g.useEffect(()=>{const ue=$.current;if(!ue)return;const xe=new ResizeObserver(ye=>{var Ae;const Ce=(Ae=ye[0])==null?void 0:Ae.contentRect.width;Ce>0&&A(Math.floor(Ce))});xe.observe(ue);const le=Math.floor(ue.getBoundingClientRect().width);return le>0&&A(le),()=>xe.disconnect()},[]);const E=44,D=0,G=20,Z=20,H=R,Y=s,ee=H-E-D,oe=Y-G-Z,ce=5,de=e.map((ue,xe)=>ue.color??N[xe%N.length]);let K=0;i==="stacked"?a.forEach((ue,xe)=>{const le=e.reduce((ye,Ce)=>ye+(Ce.data[xe]??0),0);le>K&&(K=le)}):i==="horizontal"?K=Math.max(...((B=e[0])==null?void 0:B.data)??[0]):e.forEach(ue=>ue.data.forEach(xe=>{xe>K&&(K=xe)}));const F=Hd(K),q=Array.from({length:ce+1},(ue,xe)=>F*(xe/ce)).reverse(),T=ue=>Z+oe-ue/F*oe,z=ee/a.length,ne=3,U=i==="grouped"?Math.max(4,(z-ne*(e.length+1))/e.length):z,X=()=>P(ue=>({...ue,visible:!1})),se=g.useCallback(ue=>{const xe=ue.currentTarget.getBoundingClientRect(),le=ue.clientX-xe.left,ye=Math.floor((le-E)/z);if(ye<0||ye>=a.length){X();return}const Ce=e.map((Ae,Ne)=>({color:de[Ne],series:Ae.label,value:Ae.data[ye]??0}));P({visible:!0,x:ue.clientX+12,y:ue.clientY-8,label:a[ye],items:Ce})},[e,a,z,de,E]);if(i==="gradient"){const ue=((O=e[0])==null?void 0:O.data)??[],xe=((ae=e[0])==null?void 0:ae.label)??"",le=44,ye=0,Ce=20,Ae=20,Ne=Math.max(H-le-ye,1),Pe=Y-Ce-Ae,_e=Math.max(0,...ue),Ue=_e>0?Hd(_e):10,Ge=5,St=Array.from({length:Ge+1},(Te,tt)=>Ue*tt/Ge),Oe=Te=>Ce+Pe-Te/Ue*Pe,ot=Ne/Math.max(1,ue.length),ht=Te=>le+ot*Te,Vt=Te=>le+ot*(Te+1),dt=Te=>le+ot*(Te+.5),Gt=ue.length===0?"":ue.map((Te,tt)=>{const ft=Oe(Te);return`M ${ht(tt)} ${ft} L ${Vt(tt)} ${ft}`}).join(" "),Kn=[];ue.forEach((Te,tt)=>{if(Te<=0)return;const ft=Oe(Te);Kn.push({x:ht(tt),y:ft,width:Math.max(Vt(tt)-ht(tt),0),height:Ce+Pe-ft})});const ir=Math.max(1,Math.ceil(45/ot)),En=a.length-1,Ao=w??(Te=>`${ra(Te)}${p}`);return n.jsxs("div",{ref:L,className:ie(De.root,_),...C,children:[n.jsx("div",{ref:$,className:De.svgWrap,children:n.jsxs("svg",{width:H,height:Y,viewBox:`0 0 ${H} ${Y}`,className:De.svg,onMouseLeave:X,onMouseMove:Te=>{const tt=Te.currentTarget.getBoundingClientRect(),ft=Te.clientX-tt.left,gt=Math.floor((ft-le)/ot);if(gt<0||gt>=ue.length){X();return}P({visible:!0,x:Te.clientX+12,y:Te.clientY-8,label:a[gt]??"",items:[{color:y,series:xe,value:ue[gt]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${j}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x}),n.jsx("stop",{offset:"100%",stopColor:y})]}),n.jsxs("linearGradient",{id:`${j}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),St.map((Te,tt)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:H-ye,y1:Oe(Te),y2:Oe(Te),className:De.gridLine}),n.jsxs("text",{x:0,y:Oe(Te)-6,className:De.axisLabel,textAnchor:"start",children:[ra(Te),p]})]},`t-${tt}`)),Kn.map((Te,tt)=>n.jsx("rect",{x:Te.x,y:Te.y,width:Te.width,height:Te.height,fill:`url(#${j}-fill)`},`b-${tt}`)),Gt&&n.jsx("path",{d:Gt,fill:"none",stroke:`url(#${j}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),S.visible&&(()=>{var sr;const Te=(sr=$.current)==null?void 0:sr.getBoundingClientRect();if(!Te)return null;const tt=S.x-12-Te.left,ft=Math.floor((tt-le)/ot);if(ft<0||ft>=ue.length)return null;const gt=ue[ft]??0;return gt<=0?null:n.jsx("circle",{cx:dt(ft),cy:Oe(gt),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Te,tt)=>{const ft=tt===0,gt=tt===En;if(!(ft||gt)&&tt%ir!==0)return null;const lr=ft?le:gt?H-ye:dt(tt),ro=ft?"start":gt?"end":"middle";return n.jsx("text",{x:lr,y:Y-Ae+18,className:De.axisLabel,textAnchor:ro,children:Te},`xl-${tt}`)})]})}),S.visible&&S.items.length>0&&n.jsxs("div",{className:De.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:De.tooltipLabel,children:S.label}),S.items.map(Te=>n.jsxs("div",{className:De.tooltipRow,children:[n.jsx("span",{className:De.tooltipDot,style:{background:Te.color}}),n.jsx("span",{className:De.tooltipSeries,children:Te.series}),n.jsx("span",{className:De.tooltipValue,children:Ao(Te.value)})]},Te.series))]})]})}if(i==="horizontal"){const ue=((ge=e[0])==null?void 0:ge.data)??[],xe=Hd(Math.max(...ue,1)),le=28,ye=10,Ce=120,Ne=H-Ce-44,Pe=a.length*(le+ye)+ye;return n.jsxs("div",{ref:L,className:ie(De.root,_),...C,children:[n.jsx("div",{ref:$,className:De.svgWrap,children:n.jsx("svg",{width:H,height:Pe,viewBox:`0 0 ${H} ${Pe}`,className:De.svg,onMouseLeave:X,onMouseMove:_e=>{var Oe;const Ue=_e.currentTarget.getBoundingClientRect(),Ge=_e.clientY-Ue.top,St=Math.floor(Ge/(le+ye));if(St<0||St>=a.length){X();return}P({visible:!0,x:_e.clientX+12,y:_e.clientY-8,label:a[St],items:[{color:de[0],series:((Oe=e[0])==null?void 0:Oe.label)??"",value:ue[St]??0}]})},children:a.map((_e,Ue)=>{const Ge=ye+Ue*(le+ye),St=ue[Ue]??0,Oe=St/xe*Ne;return n.jsxs("g",{children:[n.jsx("text",{x:Ce-8,y:Ge+le/2+4,className:De.axisLabel,textAnchor:"end",children:_e}),n.jsx("rect",{x:Ce,y:Ge,width:Oe,height:le,rx:m,fill:de[0]}),n.jsxs("text",{x:Ce+Oe+6,y:Ge+le/2+4,className:De.axisLabel,textAnchor:"start",children:[ra(St),p]})]},Ue)})})}),S.visible&&n.jsxs("div",{className:De.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:De.tooltipLabel,children:S.label}),S.items.map(_e=>n.jsxs("div",{className:De.tooltipRow,children:[n.jsx("span",{className:De.tooltipDot,style:{background:_e.color}}),n.jsx("span",{className:De.tooltipSeries,children:_e.series}),n.jsxs("span",{className:De.tooltipValue,children:[ra(_e.value),p]})]},_e.series))]})]})}return n.jsxs("div",{ref:L,className:ie(De.root,_),...C,children:[n.jsx("div",{ref:$,className:De.svgWrap,children:n.jsxs("svg",{width:H,height:Y,viewBox:`0 0 ${H} ${Y}`,className:De.svg,onMouseMove:se,onMouseLeave:X,children:[n.jsx("defs",{children:de.flatMap((ue,xe)=>[n.jsxs("linearGradient",{id:`${j}-fill-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`soft-${xe}`),n.jsxs("linearGradient",{id:`${j}-fill-strong-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`strong-${xe}`)])}),q.map(ue=>{const xe=T(ue);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:xe,x2:H-D,y2:xe,className:De.gridLine}),n.jsxs("text",{x:0,y:xe-6,className:De.axisLabel,textAnchor:"start",children:[ra(ue),p]})]},ue)}),a.map((ue,xe)=>{const le=E+xe*z;if(i==="stacked"){let Ae=0;const Ne=e.map((Oe,ot)=>{const ht=Oe.data[xe]??0,Vt=ht/F*oe,dt=T(Ae+ht);return Ae+=ht,{si:ot,value:ht,barH:Vt,y:dt}}),Pe=le+(z-U)/2,_e=Ne.filter(Oe=>Oe.value>0),Ue=_e.length>0?_e[0].si:-1,Ge=_e.length>0?_e[_e.length-1]:null,St=M??(Ge?de[Ge.si]:"transparent");return n.jsxs("g",{children:[Ne.map(({si:Oe,value:ot,barH:ht,y:Vt})=>{if(ot<=0)return null;if(k==="mono-scale"){const dt=Oe===Ue;return n.jsx("rect",{x:Pe,y:Vt,width:U,height:ht,fill:dt?`url(#${j}-fill-strong-${Oe})`:de[Oe]},`fill-${Oe}`)}return n.jsx("rect",{x:Pe,y:Vt,width:U,height:ht,fill:`url(#${j}-fill-${Oe})`},`fill-${Oe}`)}),k==="mono-scale"?Ge&&n.jsx("line",{x1:Pe,x2:Pe+U,y1:Ge.y,y2:Ge.y,stroke:St,strokeWidth:2,strokeLinecap:"butt"}):Ne.map(({si:Oe,value:ot,y:ht})=>ot>0?n.jsx("line",{x1:Pe,x2:Pe+U,y1:ht,y2:ht,stroke:de[Oe],strokeWidth:2,strokeLinecap:"butt"},`cap-${Oe}`):null)]},xe)}const ye=e.length*U+(e.length-1)*ne,Ce=le+(z-ye)/2;return n.jsx("g",{children:e.map((Ae,Ne)=>{const Pe=Ae.data[xe]??0;if(Pe<=0)return null;const _e=Pe/F*oe,Ue=Ce+Ne*(U+ne),Ge=T(Pe);return n.jsxs("g",{children:[n.jsx("rect",{x:Ue,y:Ge,width:U,height:_e,fill:`url(#${j}-fill-${Ne})`}),n.jsx("line",{x1:Ue,x2:Ue+U,y1:Ge,y2:Ge,stroke:de[Ne],strokeWidth:2,strokeLinecap:"butt"})]},Ne)})},xe)}),(()=>{const xe=Math.max(1,Math.ceil(45/z)),le=a.length-1;return a.map((ye,Ce)=>{const Ae=Ce===0,Ne=Ce===le;if(!(Ae||Ne)&&Ce%xe!==0)return null;const _e=Ae?E:Ne?H-D:E+z*(Ce+.5),Ue=Ae?"start":Ne?"end":"middle";return n.jsx("text",{x:_e,y:Y-G+18,className:De.axisLabel,textAnchor:Ue,children:ye},`xl-${Ce}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:De.legendWrap,children:e.map((ue,xe)=>n.jsxs("div",{className:De.legendItem,children:[n.jsx("span",{className:De.legendDot,style:{background:de[xe]}}),n.jsx("span",{className:De.legendLabel,children:ue.label})]},ue.label))}),S.visible&&n.jsxs("div",{className:De.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:De.tooltipLabel,children:S.label}),S.items.map(ue=>n.jsxs("div",{className:De.tooltipRow,children:[n.jsx("span",{className:De.tooltipDot,style:{background:ue.color}}),n.jsx("span",{className:De.tooltipSeries,children:ue.series}),n.jsxs("span",{className:De.tooltipValue,children:[ra(ue.value),p]})]},ue.series))]})]})});uC.displayName="BarChart";const pC="_root_1crij_5",hC="_svgWrap_1crij_13",fC="_svg_1crij_13",mC="_gridLine_1crij_23",gC="_axisLabelY_1crij_35 _axisLabel_1crij_28",vC="_axisLabelX_1crij_39 _axisLabel_1crij_28",xC="_legendWrap_1crij_51",yC="_tooltip_1crij_76",wC="_tooltipLabel_1crij_95",bC="_tooltipRow_1crij_105",kC="_tooltipDot_1crij_111",_C="_tooltipSeries_1crij_118",CC="_tooltipValue_1crij_125",gn={root:pC,svgWrap:hC,svg:fC,gridLine:mC,axisLabelY:gC,axisLabelX:vC,legendWrap:xC,tooltip:yC,tooltipLabel:wC,tooltipRow:bC,tooltipDot:kC,tooltipSeries:_C,tooltipValue:CC};function jC(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Mf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function SC(e,a=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[p,m]=e[s+1],v=(p-l)*a;i+=` C ${l+v} ${d}, ${p-v} ${m}, ${p} ${m}`}return i}const MC=g.forwardRef(({series:e,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:p="#446cff",yUnit:m="",yTickCount:v=5,className:x,...y},w)=>{const[k,M]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,C=g.useRef(null),[L,N]=g.useState(540);g.useEffect(()=>{const F=C.current;if(!F)return;const q=new ResizeObserver(z=>{var U;const ne=(U=z[0])==null?void 0:U.contentRect.width;ne>0&&N(Math.floor(ne))});q.observe(F);const T=Math.floor(F.getBoundingClientRect().width);return T>0&&N(T),()=>q.disconnect()},[]);const j=44,S=20,P=20,$=L,R=i,A=$-j,E=R-S-P,D=`url(#${_}-stroke)`,G=F=>F.color??D,Z=e.flatMap(F=>F.data),H=jC(Math.max(...Z,1)),Y=Array.from({length:v+1},(F,q)=>H*(q/v)).reverse(),ee=F=>P+E-F/H*E,oe=F=>a.length>1?j+F/(a.length-1)*A:j+A/2,ce=F=>F.map((q,T)=>[oe(T),ee(q)]),de=()=>M(F=>({...F,visible:!1})),K=g.useCallback(F=>{const q=F.currentTarget.getBoundingClientRect(),z=F.clientX-q.left-j,ne=A/Math.max(a.length-1,1),U=Math.round(z/ne),X=Math.max(0,Math.min(U,a.length-1)),se=e.map(B=>({color:B.color??p,series:B.label,value:B.data[X]??0}));M({visible:!0,index:X,x:F.clientX+12,y:F.clientY-8,label:a[X],items:se})},[e,a,p,A,j]);return n.jsxs("div",{ref:w,className:ie(gn.root,x),...y,children:[n.jsx("div",{ref:C,className:gn.svgWrap,children:n.jsxs("svg",{width:$,height:R,viewBox:`0 0 ${$} ${R}`,className:gn.svg,onMouseMove:K,onMouseLeave:de,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:p})]}),n.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:p}),n.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${_}-clip`,children:n.jsx("rect",{x:j,y:P,width:A,height:E,rx:6,ry:6})})]}),Y.map(F=>{const q=ee(F);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:q,x2:$,y2:q,className:gn.gridLine}),n.jsxs("text",{x:0,y:q-6,className:gn.axisLabelY,textAnchor:"start",children:[Mf(F),m]})]},F)}),n.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((F,q)=>{const T=ce(F.data),z=SC(T);return n.jsx("path",{d:z,fill:"none",stroke:G(F),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},q)})}),(()=>{const F=k.index>=0?k.index:0,q=oe(F),T=k.visible&&k.index>=0,z="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${q}px)`,transition:z},children:[n.jsx("line",{x1:0,x2:0,y1:P,y2:P+E,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((ne,U)=>{const X=ne.data[F]??0,se=ee(X),B=ne.color??p;return n.jsx("g",{style:{transform:`translateY(${se}px)`,transition:z},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:B,filter:`url(#${_}-pin-shadow)`})},U)})]})})})(),(()=>{const q=a.length>1?A/(a.length-1):A,T=Math.max(1,Math.ceil(45/Math.max(q,1))),z=a.length-1;return a.map((ne,U)=>{const X=U===0,se=U===z;if(!(X||se)&&U%T!==0)return null;const O=X?j:se?$:oe(U),ae=X?"start":se?"end":"middle";return n.jsx("text",{x:O,y:R-S+14,className:gn.axisLabelX,textAnchor:ae,children:ne},ne)})})()]})}),l&&e.length>0&&n.jsx("div",{className:gn.legendWrap,children:n.jsx(Ig,{variant:"line",items:e.map(F=>({color:F.color??p,label:F.label}))})}),k.visible&&n.jsxs("div",{className:gn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:gn.tooltipLabel,children:k.label}),k.items.map(F=>n.jsxs("div",{className:gn.tooltipRow,children:[n.jsx("span",{className:gn.tooltipDot,style:{background:F.color}}),n.jsx("span",{className:gn.tooltipSeries,children:F.series}),n.jsxs("span",{className:gn.tooltipValue,children:[Mf(F.value),m]})]},F.series))]})]})});MC.displayName="LineChart";const $C="_root_3tq2n_5",NC="_chartWrap_3tq2n_14",RC="_svg_3tq2n_18",LC="_centerText_3tq2n_23",AC="_statLegend_3tq2n_31",TC="_statItem_3tq2n_37",IC="_statBar_3tq2n_44",EC="_statText_3tq2n_50",PC="_statValue_3tq2n_56",zC="_statLabel_3tq2n_65",OC="_listLegend_3tq2n_72",FC="_legendItem_3tq2n_79",DC="_legendDot_3tq2n_85",BC="_legendLabel_3tq2n_92",WC="_legendValue_3tq2n_99",HC="_tooltip_3tq2n_107",UC="_tooltipLabel_3tq2n_118",qC="_tooltipValue_3tq2n_124",Lt={root:$C,chartWrap:NC,svg:RC,centerText:LC,statLegend:AC,statItem:TC,statBar:IC,statText:EC,statValue:PC,statLabel:zC,listLegend:OC,legendItem:FC,legendDot:DC,legendLabel:BC,legendValue:WC,tooltip:HC,tooltipLabel:UC,tooltipValue:qC},$f=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],VC=g.forwardRef(({segments:e,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:p,className:m,...v},x)=>{const[y,w]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map(($,R)=>$.color??$f[R%$f.length]),M=e.reduce(($,R)=>$+R.value,0),_=i/2,C=i/2,L=i*.15,N=(i-L)/2-2,j=2*Math.PI*N;let S=-j/4;const P=e.map(($,R)=>{const E=(M>0?$.value/M:0)*j,D=`${E} ${j-E}`,G=-S;return S+=E,{dashArray:D,dashOffset:G,color:k[R],...$}});return n.jsxs("div",{ref:x,className:ie(Lt.root,m),...v,children:[n.jsx("div",{className:Lt.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Lt.svg,children:[n.jsx("circle",{cx:_,cy:C,r:N,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:L}),P.map(($,R)=>n.jsx("circle",{cx:_,cy:C,r:N,fill:"none",stroke:$.color,strokeWidth:L,strokeDasharray:$.dashArray,strokeDashoffset:$.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:A=>{const E=M>0?Math.round($.value/M*100):0;w({visible:!0,x:A.clientX+12,y:A.clientY-8,label:$.label,value:`${E}${d}`})},onMouseLeave:()=>w(A=>({...A,visible:!1}))},R)),p&&a>0&&n.jsx("text",{x:_,y:C+6,textAnchor:"middle",className:Lt.centerText,children:p})]})}),s&&l==="stat"&&n.jsx("div",{className:Lt.statLegend,children:e.map(($,R)=>{const A=M>0?Math.round($.value/M*100):0;return n.jsxs("div",{className:Lt.statItem,children:[n.jsx("span",{className:Lt.statBar,style:{background:k[R]}}),n.jsxs("div",{className:Lt.statText,children:[n.jsxs("span",{className:Lt.statValue,children:[A,d]}),n.jsx("span",{className:Lt.statLabel,children:$.label})]})]},$.label)})}),s&&l==="list"&&n.jsx("div",{className:Lt.listLegend,children:e.map(($,R)=>{const A=M>0?Math.round($.value/M*100):0;return n.jsxs("div",{className:Lt.legendItem,children:[n.jsx("span",{className:Lt.legendDot,style:{background:k[R]}}),n.jsx("span",{className:Lt.legendLabel,children:$.label}),n.jsxs("span",{className:Lt.legendValue,children:[A,d]})]},$.label)})}),y.visible&&n.jsxs("div",{className:Lt.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("div",{className:Lt.tooltipLabel,children:y.label}),n.jsx("div",{className:Lt.tooltipValue,children:y.value})]})]})});VC.displayName="DonutChart";const GC="_root_bqpf6_5",YC="_svgWrap_bqpf6_10",KC="_svg_bqpf6_10",QC="_axisLabel_bqpf6_19",ZC="_tooltip_bqpf6_25",oa={root:GC,svgWrap:YC,svg:KC,axisLabel:QC,tooltip:ZC};function XC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const JC=g.forwardRef(({cells:e,rows:a,cols:i,colorScale:s=XC,cellRadius:l=4,cellGap:d=4,showTooltip:p=!0,className:m,...v},x)=>{const[y,w]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[M,_]=g.useState(540);g.useEffect(()=>{const R=k.current;if(!R)return;const A=new ResizeObserver(D=>{var Z;const G=(Z=D[0])==null?void 0:Z.contentRect.width;G>0&&_(Math.floor(G))});A.observe(R);const E=Math.floor(R.getBoundingClientRect().width);return E>0&&_(E),()=>A.disconnect()},[]);const C=32,L=16,N=M,j=N-C-d,S=Math.max(4,(j-(i.length-1)*d)/i.length),P=a.length*(L+d)+d+24,$=new Map;return e.forEach(R=>$.set(`${R.row}__${R.col}`,R)),n.jsxs("div",{ref:x,className:ie(oa.root,m),...v,children:[n.jsx("div",{ref:k,className:oa.svgWrap,children:n.jsxs("svg",{width:N,height:P,viewBox:`0 0 ${N} ${P}`,className:oa.svg,onMouseLeave:()=>w(R=>({...R,visible:!1})),children:[i.map((R,A)=>{const E=C+d+A*(S+d)+S/2;return n.jsx("text",{x:E,y:12,className:oa.axisLabel,textAnchor:"middle",children:R},R)}),a.map((R,A)=>{const E=24+A*(L+d);return n.jsxs("g",{children:[n.jsx("text",{x:C-4,y:E+L/2+4,className:oa.axisLabel,textAnchor:"end",children:R}),i.map((D,G)=>{const Z=$.get(`${R}__${D}`),H=(Z==null?void 0:Z.value)??0,Y=s(H),ee=C+d+G*(S+d);return n.jsx("rect",{x:ee,y:E,width:S,height:L,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:oe=>{if(!p)return;const ce=(Z==null?void 0:Z.label)??`${R} / ${D}: ${Math.round(H*100)}%`;w({visible:!0,x:oe.clientX+12,y:oe.clientY-8,content:ce})},onMouseLeave:()=>w(oe=>({...oe,visible:!1}))},D)})]},R)})]})}),y.visible&&n.jsx("div",{className:oa.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});JC.displayName="HeatMap";const ej="_root_18572_6",tj="_gridWrap_18572_14",nj="_grid_18572_14",rj="_cell_18572_27",oj="_legend_18572_33",aj="_legendSquare_18572_43",ij="_tooltip_18572_49",Vr={root:ej,gridWrap:tj,grid:nj,cell:rj,legend:oj,legendSquare:aj,tooltip:ij},sj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function lj(e,a){if(e<=0)return 0;const i=e/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const cj=g.forwardRef(({days:e,levelColors:a=sj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:p=!0,maxCount:m,formatTooltip:v,ariaLabel:x,className:y,...w},k)=>{const[M,_]=g.useState({visible:!1,x:0,y:0,content:""}),C=m??Math.max(1,...e.map(S=>S.count)),L=[];for(let S=0;S<e.length;S+=7)L.push(e.slice(S,S+7));const N=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${L.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},j=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Vr.root,y),...w,children:[n.jsx("div",{className:Vr.gridWrap,children:n.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${C} on the busiest day`,className:Vr.grid,style:N,onMouseLeave:()=>_(S=>({...S,visible:!1})),children:L.map((S,P)=>Array.from({length:7},($,R)=>{const A=S[R];if(!A)return n.jsx("span",{className:Vr.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${P}-${R}`);const E=lj(A.count,C),D=v?v(A,E):`${A.label??A.date}: ${A.count} activation${A.count===1?"":"s"}`;return n.jsx("span",{className:Vr.cell,style:{width:j,height:i,borderRadius:l,background:a[E]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:D}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${P}-${R}`)}))})}),p&&n.jsxs("div",{className:Vr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(S=>n.jsx("span",{className:Vr.legendSquare,style:{background:a[S],borderRadius:l}},S)),n.jsx("span",{children:"More"})]}),M.visible&&n.jsx("div",{className:Vr.tooltip,style:{left:M.x,top:M.y},children:M.content})]})});cj.displayName="ActivityHeatMap";const dj="_root_14edh_5",uj="_track_14edh_17",pj="_segment_14edh_28",hj="_legend_14edh_49",fj="_legendRow_14edh_58",mj="_legendDot_14edh_68",gj="_legendLabel_14edh_74",vj="_legendValue_14edh_78",xj="_tooltip_14edh_84",yj="_tooltipLabel_14edh_100",wj="_tooltipValueRow_14edh_105",bj="_tooltipDot_14edh_114",Nn={root:dj,track:uj,segment:pj,legend:hj,legendRow:fj,legendDot:mj,legendLabel:gj,legendValue:vj,tooltip:xj,tooltipLabel:yj,tooltipValueRow:wj,tooltipDot:bj},kj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],aa={r:140,g:79,b:226},Ud={r:68,g:108,b:255};function Nf(e){const a=Math.max(0,Math.min(100,e))/100,i=Math.round(aa.r+(Ud.r-aa.r)*a),s=Math.round(aa.g+(Ud.g-aa.g)*a),l=Math.round(aa.b+(Ud.b-aa.b)*a);return`rgb(${i}, ${s}, ${l})`}const _j=g.forwardRef(({segments:e,colors:a=kj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:p,className:m,...v},x)=>{const[y,w]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((L,N)=>L+Math.max(0,N.value),0);let M=0;const _=e.map((L,N)=>{const j=Math.max(0,L.value),S=k>0?j/k*100:0,P=k>0?M/k*100:0;M+=j;const $=k>0?M/k*100:0,R=L.color??a[N%a.length],A=d?!0:L.emphasized??N===0;return{...L,pct:S,startPct:P,endPct:$,color:R,emphasized:A}}),C=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:x,className:ie(Nn.root,m),...v,children:[n.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${e.map(L=>`${L.label} ${L.value}`).join(", ")}`,className:Nn.track,style:C,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:_.map(L=>{const N=i?`linear-gradient(to right, ${Nf(L.startPct)}, ${Nf(L.endPct)})`:L.color;return n.jsx("span",{className:Nn.segment,"data-emphasized":L.emphasized||void 0,"data-ai":i||void 0,style:{width:`${L.pct}%`,background:N,"--ratio-hover-bg":L.color},onMouseMove:j=>w({visible:!0,x:j.clientX,y:j.clientY,label:L.label,value:L.value,color:L.color})},L.label)})}),l&&n.jsx("ul",{className:Nn.legend,children:_.map(L=>n.jsxs("li",{className:Nn.legendRow,children:[n.jsx("span",{className:Nn.legendDot,style:{background:L.color}}),n.jsx("span",{className:Nn.legendLabel,children:L.label}),n.jsx("span",{className:Nn.legendValue,children:L.value.toLocaleString("en-US")})]},L.label))}),y.visible&&n.jsxs("div",{className:Nn.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("span",{className:Nn.tooltipLabel,children:y.label}),n.jsxs("span",{className:Nn.tooltipValueRow,children:[n.jsx("span",{className:Nn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});_j.displayName="RatioBar";const Cj="_track_1wmly_6",jj="_fill_1wmly_12",Rf={track:Cj,fill:jj},Sj=g.forwardRef(({value:e,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:p=1,height:m=12,ariaLabel:v,className:x,style:y,...w},k)=>{const M=d+p,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${M}px
    )`,C=Math.max(0,Math.min(a,e)),L=a>0?C/a*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(L)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":C,className:ie(Rf.track,x),style:{height:m,background:`${_}, ${s}`,...y},...w,children:n.jsx("div",{className:Rf.fill,style:{width:`${L}%`,background:`${_}, ${i}`}})})});Sj.displayName="StripedBar";const Mj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],$j=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Lf(e,a="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}Lf(Mj),Lf($j);var st="-ms-",wi="-moz-",Qe="-webkit-",Eg="comm",Dl="rule",ap="decl",Nj="@import",Rj="@namespace",Pg="@keyframes",Lj="@layer",zg=Math.abs,ip=String.fromCharCode,yu=Object.assign;function Aj(e,a){return jt(e,0)^45?(((a<<2^jt(e,0))<<2^jt(e,1))<<2^jt(e,2))<<2^jt(e,3):0}function Og(e){return e.trim()}function wr(e,a){return(e=a.exec(e))?e[0]:e}function Fe(e,a,i){return e.replace(a,i)}function pl(e,a,i){return e.indexOf(a,i)}function jt(e,a){return e.charCodeAt(a)|0}function Mo(e,a,i){return e.slice(a,i)}function qn(e){return e.length}function Fg(e){return e.length}function gi(e,a){return a.push(e),e}function Tj(e,a){return e.map(a).join("")}function Af(e,a){return e.filter(function(i){return!wr(i,a)})}var Bl=1,va=1,Dg=0,In=0,kt=0,Sa="";function Wl(e,a,i,s,l,d,p,m){return{value:e,root:a,parent:i,type:s,props:l,children:d,line:Bl,column:va,length:p,return:"",siblings:m}}function Gr(e,a){return yu(Wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function ia(e){for(;e.root;)e=Gr(e.root,{children:[e]});gi(e,e.siblings)}function Ij(){return kt}function Ej(){return kt=In>0?jt(Sa,--In):0,va--,kt===10&&(va=1,Bl--),kt}function Gn(){return kt=In<Dg?jt(Sa,In++):0,va++,kt===10&&(va=1,Bl++),kt}function Qr(){return jt(Sa,In)}function hl(){return In}function Hl(e,a){return Mo(Sa,e,a)}function Si(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pj(e){return Bl=va=1,Dg=qn(Sa=e),In=0,[]}function zj(e){return Sa="",e}function qd(e){return Og(Hl(In-1,wu(e===91?e+2:e===40?e+1:e)))}function Oj(e){for(;(kt=Qr())&&kt<33;)Gn();return Si(e)>2||Si(kt)>3?"":" "}function Fj(e,a){for(;--a&&Gn()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Hl(e,hl()+(a<6&&Qr()==32&&Gn()==32))}function wu(e){for(;Gn();)switch(kt){case e:return In;case 34:case 39:e!==34&&e!==39&&wu(kt);break;case 40:e===41&&wu(e);break;case 92:Gn();break}return In}function Dj(e,a){for(;Gn()&&e+kt!==57;)if(e+kt===84&&Qr()===47)break;return"/*"+Hl(a,In-1)+"*"+ip(e===47?e:Gn())}function Bj(e){for(;!Si(Qr());)Gn();return Hl(e,In)}function Wj(e){return zj(fl("",null,null,null,[""],e=Pj(e),0,[0],e))}function fl(e,a,i,s,l,d,p,m,v){for(var x=0,y=0,w=p,k=0,M=0,_=0,C=1,L=1,N=1,j=0,S="",P=l,$=d,R=s,A=S;L;)switch(_=j,j=Gn()){case 40:if(_!=108&&jt(A,w-1)==58){pl(A+=Fe(qd(j),"&","&\f"),"&\f",zg(x?m[x-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:A+=qd(j);break;case 9:case 10:case 13:case 32:A+=Oj(_);break;case 92:A+=Fj(hl()-1,7);continue;case 47:switch(Qr()){case 42:case 47:gi(Hj(Dj(Gn(),hl()),a,i,v),v),(Si(_||1)==5||Si(Qr()||1)==5)&&qn(A)&&Mo(A,-1,void 0)!==" "&&(A+=" ");break;default:A+="/"}break;case 123*C:m[x++]=qn(A)*N;case 125*C:case 59:case 0:switch(j){case 0:case 125:L=0;case 59+y:N==-1&&(A=Fe(A,/\f/g,"")),M>0&&(qn(A)-w||C===0&&_===47)&&gi(M>32?If(A+";",s,i,w-1,v):If(Fe(A," ","")+";",s,i,w-2,v),v);break;case 59:A+=";";default:if(gi(R=Tf(A,a,i,x,y,l,m,S,P=[],$=[],w,d),d),j===123)if(y===0)fl(A,a,R,R,P,d,w,m,$);else{switch(k){case 99:if(jt(A,3)===110)break;case 108:if(jt(A,2)===97)break;default:y=0;case 100:case 109:case 115:}y?fl(e,R,R,s&&gi(Tf(e,R,R,0,0,l,m,S,l,P=[],w,$),$),l,$,w,m,s?P:$):fl(A,R,R,R,[""],$,0,m,$)}}x=y=M=0,C=N=1,S=A="",w=p;break;case 58:w=1+qn(A),M=_;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&Ej()==125)continue}switch(A+=ip(j),j*C){case 38:N=y>0?1:(A+="\f",-1);break;case 44:m[x++]=(qn(A)-1)*N,N=1;break;case 64:Qr()===45&&(A+=qd(Gn())),k=Qr(),y=w=qn(S=A+=Bj(hl())),j++;break;case 45:_===45&&qn(A)==2&&(C=0)}}return d}function Tf(e,a,i,s,l,d,p,m,v,x,y,w){for(var k=l-1,M=l===0?d:[""],_=Fg(M),C=0,L=0,N=0;C<s;++C)for(var j=0,S=Mo(e,k+1,k=zg(L=p[C])),P=e;j<_;++j)(P=Og(L>0?M[j]+" "+S:Fe(S,/&\f/g,M[j])))&&(v[N++]=P);return Wl(e,a,i,l===0?Dl:m,v,x,y,w)}function Hj(e,a,i,s){return Wl(e,a,i,Eg,ip(Ij()),Mo(e,2,-2),0,s)}function If(e,a,i,s,l){return Wl(e,a,i,ap,Mo(e,0,s),Mo(e,s+1,-1),s,l)}function Bg(e,a,i){switch(Aj(e,a)){case 5103:return Qe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Qe+e+e;case 4855:return Qe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return wi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+e+wi+e+st+e+e;case 5936:switch(jt(e,a+11)){case 114:return Qe+e+st+Fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Qe+e+st+Fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Qe+e+st+Fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Qe+e+st+e+e;case 6165:return Qe+e+st+"flex-"+e+e;case 5187:return Qe+e+Fe(e,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return Qe+e+st+"flex-item-"+Fe(e,/flex-|-self/g,"")+(wr(e,/flex-|baseline/)?"":st+"grid-row-"+Fe(e,/flex-|-self/g,""))+e;case 4675:return Qe+e+st+"flex-line-pack"+Fe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Qe+e+st+Fe(e,"shrink","negative")+e;case 5292:return Qe+e+st+Fe(e,"basis","preferred-size")+e;case 6060:return Qe+"box-"+Fe(e,"-grow","")+Qe+e+st+Fe(e,"grow","positive")+e;case 4554:return Qe+Fe(e,/([^-])(transform)/g,"$1"+Qe+"$2")+e;case 6187:return Fe(Fe(Fe(e,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),e,"")+e;case 5495:case 3959:return Fe(e,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Fe(Fe(e,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+st+"flex-pack:$3"),/space-between/,"justify")+Qe+e+e;case 4200:if(!wr(e,/flex-|baseline/))return st+"grid-column-align"+Mo(e,a)+e;break;case 2592:case 3360:return st+Fe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,wr(s.props,/grid-\w+-end/)})?~pl(e+(i=i[a].value),"span",0)?e:st+Fe(e,"-start","")+e+st+"grid-row-span:"+(~pl(i,"span",0)?wr(i,/\d+/):+wr(i,/\d+/)-+wr(e,/\d+/))+";":st+Fe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return wr(s.props,/grid-\w+-start/)})?e:st+Fe(Fe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Fe(e,/(.+)-inline(.+)/,Qe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(e)-1-a>6)switch(jt(e,a+1)){case 109:if(jt(e,a+4)!==45)break;case 102:return Fe(e,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+wi+(jt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~pl(e,"stretch",0)?Bg(Fe(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Fe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,p,m,v,x){return st+l+":"+d+x+(p?st+l+"-span:"+(m?v:+v-+d)+x:"")+e});case 4949:if(jt(e,a+6)===121)return Fe(e,":",":"+Qe)+e;break;case 6444:switch(jt(e,jt(e,14)===45?18:11)){case 120:return Fe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(jt(e,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+st+"$2box$3")+e;case 100:return Fe(e,":",":"+st)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(e,"scroll-","scroll-snap-")+e}return e}function _l(e,a){for(var i="",s=0;s<e.length;s++)i+=a(e[s],s,e,a)||"";return i}function Uj(e,a,i,s){switch(e.type){case Lj:if(e.children.length)break;case Nj:case Rj:case ap:return e.return=e.return||e.value;case Eg:return"";case Pg:return e.return=e.value+"{"+_l(e.children,s)+"}";case Dl:if(!qn(e.value=e.props.join(",")))return""}return qn(i=_l(e.children,s))?e.return=e.value+"{"+i+"}":""}function qj(e){var a=Fg(e);return function(i,s,l,d){for(var p="",m=0;m<a;m++)p+=e[m](i,s,l,d)||"";return p}}function Vj(e){return function(a){a.root||(a=a.return)&&e(a)}}function Gj(e,a,i,s){if(e.length>-1&&!e.return)switch(e.type){case ap:e.return=Bg(e.value,e.length,i);return;case Pg:return _l([Gr(e,{value:Fe(e.value,"@","@"+Qe)})],s);case Dl:if(e.length)return Tj(i=e.props,function(l){switch(wr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ia(Gr(e,{props:[Fe(l,/:(read-\w+)/,":"+wi+"$1")]})),ia(Gr(e,{props:[l]})),yu(e,{props:Af(i,s)});break;case"::placeholder":ia(Gr(e,{props:[Fe(l,/:(plac\w+)/,":"+Qe+"input-$1")]})),ia(Gr(e,{props:[Fe(l,/:(plac\w+)/,":"+wi+"$1")]})),ia(Gr(e,{props:[Fe(l,/:(plac\w+)/,st+"input-$1")]})),ia(Gr(e,{props:[l]})),yu(e,{props:Af(i,s)});break}return""})}}var ua={},Vd,Gd;const xa=typeof process<"u"&&ua!==void 0&&(ua.REACT_APP_SC_ATTR||ua.SC_ATTR)||"data-styled",Wg="active",Hg="data-styled-version",Ul="6.4.2",sp=`/*!sc*/
`,bi=typeof window<"u"&&typeof document<"u";function Ef(e){if(typeof process<"u"&&ua!==void 0){const a=ua[e];if(a!==void 0&&a!=="")return a!=="false"}}const Yj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Gd=(Vd=Ef("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vd!==void 0?Vd:Ef("SC_DISABLE_SPEEDY"))!==null&&Gd!==void 0?Gd:typeof process<"u"&&ua!==void 0&&!1),Ug="sc-keyframes-",Kj={};function Ei(e,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let ml=new Map,Cl=new Map,gl=1;const vi=e=>{if(ml.has(e))return ml.get(e);for(;Cl.has(gl);)gl++;const a=gl++;return ml.set(e,a),Cl.set(a,e),a},Qj=e=>Cl.get(e),Zj=(e,a)=>{gl=a+1,ml.set(e,a),Cl.set(a,e)},lp=Object.freeze([]),ya=Object.freeze({});function qg(e,a,i=ya){return e.theme!==i.theme&&e.theme||a||i.theme}const Xj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jj=/(^-|-$)/g;function Vg(e){return e.replace(Xj,"-").replace(Jj,"")}const eS=/(a)(d)/gi,Pf=e=>String.fromCharCode(e+(e>25?39:97));function cp(e){let a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=Pf(a%52)+i;return(Pf(a%52)+i).replace(eS,"$1-$2")}const bu=5381,So=(e,a)=>{let i=a.length;for(;i;)e=33*e^a.charCodeAt(--i);return e},Gg=e=>So(bu,e);function dp(e){return cp(Gg(e)>>>0)}function tS(e){return e.displayName||e.name||"Component"}function ku(e){return typeof e=="string"&&!0}function nS(e){return ku(e)?`styled.${e}`:`Styled(${tS(e)})`}const Yg=Symbol.for("react.memo"),rS=Symbol.for("react.forward_ref"),oS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},aS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iS={[rS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Yg]:Kg};function zf(e){return("type"in(a=e)&&a.type.$$typeof)===Yg?Kg:"$$typeof"in e?iS[e.$$typeof]:oS;var a}const sS=Object.defineProperty,lS=Object.getOwnPropertyNames,cS=Object.getOwnPropertySymbols,dS=Object.getOwnPropertyDescriptor,uS=Object.getPrototypeOf,pS=Object.prototype;function Qg(e,a,i){if(typeof a!="string"){const s=uS(a);s&&s!==pS&&Qg(e,s,i);const l=lS(a).concat(cS(a)),d=zf(e),p=zf(a);for(let m=0;m<l.length;++m){const v=l[m];if(!(v in aS||i&&i[v]||p&&v in p||d&&v in d)){const x=dS(a,v);try{sS(e,v,x)}catch{}}}}return e}function Pi(e){return typeof e=="function"}const hS=Symbol.for("react.forward_ref");function up(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===hS&&"styledComponentId"in e}function xi(e,a){return e&&a?e+" "+a:e||a||""}function jl(e,a){return e.join("")}function Mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _u(e,a,i=!1){if(!i&&!Mi(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)e[s]=_u(e[s],a[s]);else if(Mi(a))for(const s in a)e[s]=_u(e[s],a[s]);return e}function pp(e,a){Object.defineProperty(e,"toString",{value:a})}const fS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let a=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)a-=this.groupSizes[i];return this._cGroup=e,this._cIndex=a,a}insertRules(e,a){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let p=d;for(;e>=p;)if(p<<=1,p<0)throw Ei(16,`${e}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(let m=d;m<p;m++)this.groupSizes[m]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const a=this.groupSizes[e],i=this.indexOfGroup(e),s=i+a;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>e&&(this._cIndex-=a)}}getGroup(e){let a="";if(e>=this.length||this.groupSizes[e]===0)return a;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+sp;return a}},mS=`style[${xa}][${Hg}="${Ul}"]`,gS=new RegExp(`^${xa}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Of=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Cu=e=>{if(!e)return document;if(Of(e))return e;if("getRootNode"in e){const a=e.getRootNode();if(Of(a))return a}return document},vS=(e,a,i)=>{const s=i.split(",");let l;for(let d=0,p=s.length;d<p;d++)(l=s[d])&&e.registerName(a,l)},xS=(e,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(sp),l=[];for(let d=0,p=s.length;d<p;d++){const m=s[d].trim();if(!m)continue;const v=m.match(gS);if(v){const x=0|parseInt(v[1],10),y=v[2];x!==0&&(Zj(y,x),vS(e,y,v[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(m)}},Yd=e=>{const a=Cu(e.options.target).querySelectorAll(mS);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(xa)!==Wg&&(xS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let ui=!1;function yS(){if(ui!==!1)return ui;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ui=e.nonce||e.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return ui=a.getAttribute("content")||void 0}return ui=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Zg=(e,a)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(v=>{const x=Array.from(v.querySelectorAll(`style[${xa}]`));return x[x.length-1]})(s),p=d!==void 0?d.nextSibling:null;l.setAttribute(xa,Wg),l.setAttribute(Hg,Ul);const m=a||yS();return m&&l.setAttribute("nonce",m),s.insertBefore(l,p),l},wS=class{constructor(e,a){this.element=Zg(e,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,p=l.length;d<p;d++){const m=l[d];if(m.ownerNode===i)return m}throw Ei(17)})(this.element),this.length=0}insertRule(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""}},bS=class{constructor(e,a){this.element=Zg(e,a),this.nodes=this.element.childNodes,this.length=0}insertRule(e,a){if(e<=this.length&&e>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Ff=bi;const kS={isServer:!bi,useCSSOMInjection:!Yj};class zi{static registerId(a){return vi(a)}constructor(a=ya,i={},s){this.options=Object.assign(Object.assign({},kS),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&bi&&Ff&&(Ff=!1,Yd(this)),pp(this,()=>(l=>{const d=l.getTag(),{length:p}=d;let m="";for(let v=0;v<p;v++){const x=Qj(v);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(v);if(w.length===0)continue;const k=xa+".g"+v+'[id="'+x+'"]';let M="";for(const _ of y)_.length>0&&(M+=_+",");m+=w+k+'{content:"'+M+'"}'+sp}return m})(this))}rehydrate(){!this.server&&bi&&Yd(this)}reconstructWithOptions(a,i=!0){const s=new zi(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&bi&&a.target!==this.options.target&&Cu(this.options.target)!==Cu(a.target)&&Yd(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new wS(s,l):new bS(s,l))(this.options),new fS(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){vi(a),a.startsWith(Ug)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(vi(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(vi(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Xg=new WeakSet,_S={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function CS(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in _S||e.startsWith("--")?String(a).trim():a+"px"}const _o=47;function Df(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let a="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return a.startsWith("ms-")?"-"+a:a}const Jg=Symbol.for("sc-keyframes");function jS(e){return typeof e=="object"&&e!==null&&Jg in e}function e2(e){return Pi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const t2=e=>e==null||e===!1||e==="",SS=Symbol.for("react.client.reference");function Bf(e){return e.$$typeof===SS}function n2(e,a){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!t2(s)&&(Array.isArray(s)&&Xg.has(s)||Pi(s)?a.push(Df(i)+":",s,";"):Mi(s)?(a.push(i+" {"),n2(s,a),a.push("}")):a.push(Df(i)+": "+CS(i,s)+";"))}}function Jr(e,a,i,s,l=[]){if(t2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Bf(e))return l;if(e2(e)&&a){const p=e(a);return Jr(p,a,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let p=0;p<e.length;p++)Jr(e[p],a,i,s,l);return l}return up(e)?(l.push(`.${e.styledComponentId}`),l):jS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Bf(e)?l:Mi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(n2(e,l),l):(l.push(e.toString()),l)}const MS=Gg(Ul);class $S{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=So(MS,i),this.baseStyle=s,zi.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let p=0;p<this.rules.length;p++){const m=this.rules[p];if(typeof m=="string")d+=m;else if(m)if(e2(m)){const v=m(a);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=jl(Jr(v,a,i,s)))}else d+=jl(Jr(m,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+d:d;let m=this.dynamicNameCache.get(p);if(!m){if(m=cp(So(So(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(p,m)}if(!i.hasNameForId(this.componentId,m)){const v=s(d,"."+m,void 0,this.componentId);i.insertRules(this.componentId,m,v)}l=xi(l,m)}}return l}}const NS=/&/g;function r2(e,a){let i=0;for(;--a>=0&&e.charCodeAt(a)===92;)i++;return!(1&~i)}function Kd(e){const a=e.length;let i="",s=0,l=0,d=0,p=!1,m=!1;for(let v=0;v<a;v++){const x=e.charCodeAt(v);if(d!==0||p||x!==_o||e.charCodeAt(v+1)!==42)if(p)x===42&&e.charCodeAt(v+1)===_o&&(p=!1,v++);else if(x!==34&&x!==39||r2(e,v)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){m=!0;let y=v+1;for(;y<a;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<a&&e.charCodeAt(y)===59&&y++,l=0,v=y-1,s=y;continue}l===0&&(i+=e.substring(s,v+1),s=v+1)}else x===59&&l===0&&(i+=e.substring(s,v+1),s=v+1)}else d===0?d=x:d===x&&(d=0);else p=!0,v++}return m||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=e.substring(s)),i):e}function o2(e,a){const i=a+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const p=d.props,m=[];for(let v=0;v<p.length;v++)m[v]=i+p[v];d.props=m}Array.isArray(d.children)&&d.type!=="@keyframes"&&o2(d.children,a)}return e}function RS({options:e=ya,plugins:a=lp}=ya){let i,s,l;const d=(k,M,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,p=a.slice();p.push(k=>{k.type===Dl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(NS,s).replace(l,d))}),e.prefix&&p.push(Gj),p.push(Uj);let m=[];const v=qj(p.concat(Vj(k=>m.push(k)))),x=(k,M="",_="",C="&")=>{i=C,s=M,l=void 0;const L=(function(j){const S=j.indexOf("//")!==-1,P=j.indexOf("}")!==-1;if(!S&&!P)return j;if(!S)return Kd(j);const $=j.length;let R="",A=0,E=0,D=0,G=0,Z=0,H=!1;for(;E<$;){const Y=j.charCodeAt(E);if(Y!==34&&Y!==39||r2(j,E))if(D===0)if(Y===_o&&E+1<$&&j.charCodeAt(E+1)===42){for(E+=2;E+1<$&&(j.charCodeAt(E)!==42||j.charCodeAt(E+1)!==_o);)E++;E+=2}else if(Y!==40)if(Y!==41)if(G>0)E++;else if(Y===42&&E+1<$&&j.charCodeAt(E+1)===_o)R+=j.substring(A,E),E+=2,A=E,H=!0;else if(Y===_o&&E+1<$&&j.charCodeAt(E+1)===_o){for(R+=j.substring(A,E);E<$&&j.charCodeAt(E)!==10;)E++;A=E,H=!0}else Y===123?Z++:Y===125&&Z--,E++;else G>0&&G--,E++;else G++,E++;else E++;else D===0?D=Y:D===Y&&(D=0),E++}return H?(A<$&&(R+=j.substring(A)),Z===0?R:Kd(R)):Z===0?j:Kd(j)})(k);let N=Wj(_||M?_+" "+M+" { "+L+" }":L);return e.namespace&&(N=o2(N,e.namespace)),m=[],_l(N,v),m},y=e;let w=bu;for(let k=0;k<a.length;k++)a[k].name||Ei(15),w=So(w,a[k].name);return y!=null&&y.namespace&&(w=So(w,y.namespace)),y!=null&&y.prefix&&(w=So(w,"p")),x.hash=w!==bu?w.toString():"",x}const LS=new zi,ju=RS(),a2=ln.createContext({shouldForwardProp:void 0,styleSheet:LS,stylis:ju,stylisPlugins:void 0});a2.Consumer;function i2(){return ln.useContext(a2)}const hp=ln.createContext(void 0);hp.Consumer;const Wf=Object.prototype.hasOwnProperty,Qd={};function AS(e,a){const i=typeof e!="string"?"sc":Vg(e);Qd[i]=(Qd[i]||0)+1;const s=i+"-"+dp(Ul+i+Qd[i]);return a?a+"-"+s:s}function TS(e,a,i){const s=up(e),l=e,d=!ku(e),{attrs:p=lp,componentId:m=AS(a.displayName,a.parentComponentId),displayName:v=nS(e)}=a,x=a.displayName&&a.componentId?Vg(a.displayName)+"-"+a.componentId:a.componentId||m,y=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:w}=a;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(a.shouldForwardProp){const L=a.shouldForwardProp;w=(N,j)=>C(N,j)&&L(N,j)}else w=C}const k=new $S(i,x,s?l.componentStyle:void 0);function M(C,L){return(function(N,j,S){const{attrs:P,componentStyle:$,defaultProps:R,foldedComponentIds:A,styledComponentId:E,target:D}=N,G=ln.useContext(hp),Z=i2(),H=N.shouldForwardProp||Z.shouldForwardProp,Y=qg(j,G,R)||ya;let ee,oe;{const F=ln.useRef(null),q=F.current;if(q!==null&&q[1]===Y&&q[2]===Z.styleSheet&&q[3]===Z.stylis&&q[7]===$&&(function(T,z,ne){const U=T,X=z;let se=0;for(const B in X)if(Wf.call(X,B)&&(se++,U[B]!==X[B]))return!1;return se===ne})(q[0],j,q[4]))ee=q[5],oe=q[6];else{ee=(function(z,ne,U){const X=Object.assign(Object.assign({},ne),{className:void 0,theme:U}),se=z.length>1;for(let B=0;B<z.length;B++){const O=z[B],ae=Pi(O)?O(se?Object.assign({},X):X):O;for(const ge in ae)ge==="className"?X.className=xi(X.className,ae[ge]):ge==="style"?X.style=Object.assign(Object.assign({},X.style),ae[ge]):ge in ne&&ne[ge]===void 0||(X[ge]=ae[ge])}return"className"in ne&&typeof ne.className=="string"&&(X.className=xi(X.className,ne.className)),X})(P,j,Y),oe=(function(z,ne,U,X){return z.generateAndInjectStyles(ne,U,X)})($,ee,Z.styleSheet,Z.stylis);let T=0;for(const z in j)Wf.call(j,z)&&T++;F.current=[j,Y,Z.styleSheet,Z.stylis,T,ee,oe,$]}}const ce=ee.as||D,de=(function(F,q,T,z){const ne={};for(const U in F)F[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&F.theme===T||(U==="forwardedAs"?ne.as=F.forwardedAs:z&&!z(U,q)||(ne[U]=F[U]));return ne})(ee,ce,Y,H);let K=xi(A,E);return oe&&(K+=" "+oe),ee.className&&(K+=" "+ee.className),de[ku(ce)&&ce.includes("-")?"class":"className"]=K,S&&(de.ref=S),g.createElement(ce,de)})(_,C,L)}M.displayName=v;let _=ln.forwardRef(M);return _.attrs=y,_.componentStyle=k,_.displayName=v,_.shouldForwardProp=w,_.foldedComponentIds=s?xi(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=x,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(L,...N){for(const j of N)_u(L,j,!0);return L})({},l.defaultProps,C):C}}),pp(_,()=>`.${_.styledComponentId}`),d&&Qg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var IS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Hf(e,a){const i=[e[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],e[s+1]);return i}const Uf=e=>(Xg.add(e),e);function He(e,...a){if(Pi(e)||Mi(e))return Uf(Jr(Hf(lp,[e,...a])));const i=e;return a.length===0&&i.length===1&&typeof i[0]=="string"?Jr(i):Uf(Jr(Hf(i,a)))}function Su(e,a,i=ya){if(!a)throw Ei(1,a);const s=(l,...d)=>e(a,i,He(l,...d));return s.attrs=l=>Su(e,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Su(e,a,Object.assign(Object.assign({},i),l)),s}const s2=e=>Su(TS,e),f=s2;IS.forEach(e=>{f[e]=s2(e)});class ES{constructor(a,i){this.instanceRules=new Map,this.rules=a,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Pi(d)&&!up(d))return!1}return!0})(a),zi.registerId(this.componentId)}removeStyles(a,i){this.instanceRules.delete(a),this.rebuildGroup(i)}renderStyles(a,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+a))this.instanceRules.has(a)||this.computeRules(a,i,s,l);else{const m=this.computeRules(a,i,s,l);s.insertRules(d,m.name,m.rules)}return}const p=this.instanceRules.get(a);if(this.computeRules(a,i,s,l),!s.server&&p){const m=p.rules,v=this.instanceRules.get(a).rules;if(m.length===v.length){let x=!0;for(let y=0;y<m.length;y++)if(m[y]!==v[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(a,i,s,l){const d=jl(Jr(this.rules,i,s,l)),p={name:this.componentId+a,rules:l(d,"")};return this.instanceRules.set(a,p),p}rebuildGroup(a){const i=this.componentId;a.clearRules(i);for(const s of this.instanceRules.values())a.insertRules(i,s.name,s.rules)}}function PS(e,...a){const i=He(e,...a),s=`sc-global-${dp(JSON.stringify(i))}`,l=new ES(i,s),d=m=>{const v=i2(),x=ln.useContext(hp);let y;{const w=ln.useRef(null);w.current===null&&(w.current=v.styleSheet.allocateGSInstance(s)),y=w.current}v.styleSheet.server&&p(y,m,v.styleSheet,x,v.stylis);{const w=l.isStatic?[y,v.styleSheet,l]:[y,m,v.styleSheet,x,v.stylis,l],k=ln.useRef(l);ln.useLayoutEffect(()=>{v.styleSheet.server||(k.current!==l&&(v.styleSheet.clearRules(s),k.current=l),p(y,m,v.styleSheet,x,v.stylis))},w),ln.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(y,v.styleSheet)},[y,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(y),null};function p(m,v,x,y,w){if(l.isStatic)l.renderStyles(m,Kj,x,w);else{const k=Object.assign(Object.assign({},v),{theme:qg(v,y,d.defaultProps)});l.renderStyles(m,k,x,w)}}return ln.memo(d)}var l2;class zS{constructor(a,i){this[l2]=!0,this.inject=(s,l=ju)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const p=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,p)}},this.name=a,this.id=Ug+a,this.rules=i,vi(this.id),pp(this,()=>{throw Ei(12,String(this.name))})}getName(a=ju){return a.hash?this.name+cp(+a.hash>>>0):this.name}}function $e(e,...a){const i=jl(He(e,...a)),s=dp(i);return new zS(s,i)}l2=Jg;const c2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],OS=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function FS(e){const a=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(a)?a:`https://${a}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return a}}function DS(e){let a=0;for(let i=0;i<e.length;i+=1)a=a*31+e.charCodeAt(i)>>>0;return a%c2.length}function BS(e){const a=FS(e);let i=-1,s=0;return OS.forEach((l,d)=>{const p=l.reduce((m,v)=>a.includes(v)?m+1:m,0);p>s&&(s=p,i=d)}),c2[i>=0?i:DS(a)]}const Pt=(e,a,i)=>Math.max(a,Math.min(i,e)),kr=e=>(e=Pt(e,0,1),e*e*(3-2*e)),to=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function on(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Mu(e){const a=(e||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function qf(e,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Mu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Mu(d);const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function WS(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function HS(e){const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function US(e,a){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const bo=["234,54,38","246,112,44","252,172,54","255,212,76"],qS="176,58,32",VS="198,158,52";function br(e,a,i){const s=e.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,p)=>Math.round(d+(l[p]-d)*i)).join(",")}function no(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=e.size<24,w=Pt(e.alert??0,0,1),k=(j,S)=>j+(S-j)*w,M=.85+.15*Math.sin(a*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const j=s.createRadialGradient(p,m,0,p,m,x*3);j.addColorStop(0,"rgba("+i.core+",0.55)"),j.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=j,s.beginPath(),s.arc(p,m,x*3,0,6.2832),s.fill()}else if(!i.glow){const j=x*k(3.2,3),S=s.createRadialGradient(p,m,0,p,m,j);S.addColorStop(0,"rgba("+br(i.core,bo[1],w)+","+k(.34,.85*M)+")"),S.addColorStop(.5,"rgba("+br(i.core,bo[2],w)+","+k(.13,.42*M)+")"),S.addColorStop(1,"rgba("+br(i.core,bo[3],w)+",0)"),s.fillStyle=S,s.beginPath(),s.arc(p,m,j,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,C=Math.max(.8,x*k(1,1.5)),L=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const N=s.createRadialGradient(p-L,m-L,0,p,m,C);N.addColorStop(0,"rgba("+br(i.core,bo[0],w)+","+k(_,1)+")"),N.addColorStop(.5,"rgba("+br(i.core,bo[1],w)+","+k(_,1)+")"),N.addColorStop(.82,"rgba("+br(i.core,bo[2],w)+","+k(_,.97)+")"),N.addColorStop(1,"rgba("+br(i.core,bo[3],w)+","+k(_,.72)+")"),s.fillStyle=N,s.beginPath(),s.arc(p,m,C,0,6.2832),s.fill(),s.restore()}function d2(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=a*(x?.5:.16),k=.42,M=Math.cos(k),_=Math.sin(k),C=Math.cos(w),L=Math.sin(w),N=v*.96,j=(D,G,Z)=>{const H=D*C+Z*L,Y=-D*L+Z*C,ee=G,oe=ee*M-Y*_,de=(ee*_+Y*M+1)/2,K=.82+.18*de;return{x:p+H*N*K,y:m+oe*N*K,d:de}},S=(D,G,Z)=>{const H=Math.cos(D),Y=Math.sin(D)*Math.cos(G),ee=Math.sin(D)*Math.sin(G);return[H*Math.cos(Z)+ee*Math.sin(Z),Y,-H*Math.sin(Z)+ee*Math.cos(Z)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const P=e.size>=24?64:40,$=x?.9:.3,R=P,A=5.6,E=[];for(let D=0;D<y.length;D++){const G=y[D][0],Z=y[D][1],H=oe=>{const ce=S(oe,G,Z);return j(ce[0],ce[1],ce[2])},Y=D%2?1:-1,ee=D*2+Y*a*$;E.push({ptOf:H,head:ee,dir:Y,hp:H(ee)})}E.sort((D,G)=>D.hp.d-G.hp.d);for(const D of E){const G=Math.max(1.2,v*.05)*(.75+.35*D.hp.d),Z=.66*(.45+.55*D.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let H=D.ptOf(D.head);for(let oe=1;oe<=R;oe++){const ce=oe/R,de=1-ce,K=Z*de*de,F=D.ptOf(D.head-D.dir*ce*A);K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(H.x,H.y),s.lineTo(F.x,F.y),s.stroke()),H=F}s.restore();const Y=Math.max(.9,v*.062*to(e.size)*(.65+.5*D.hp.d)),ee=.45+.55*D.hp.d;if(i.glow){const oe=s.createRadialGradient(D.hp.x,D.hp.y,0,D.hp.x,D.hp.y,Y*4.5);oe.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),oe.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=oe,s.beginPath(),s.arc(D.hp.x,D.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(D.hp.x,D.hp.y,Y,0,6.2832),s.fill()}no(e,a,i),s.restore()}function GS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,x=e.state!=="idle",y=[v*.92],w=y.length,k=1,M=x?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<w;C++){const L=y[C],N=C%2?1:-1,j=6.2832/k,S=Math.min(5.6,j*.92);for(let P=0;P<k;P++){const $=C*2+N*a*M+P*j,R=p+Math.cos($)*L,A=m+Math.sin($)*L;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let E=R,D=A;for(let Z=1;Z<=_;Z++){const H=Z/_,Y=.62*(1-H)*(1-H),ee=$-N*H*S,oe=p+Math.cos(ee)*L,ce=m+Math.sin(ee)*L;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(E,D),s.lineTo(oe,ce),s.stroke()),E=oe,D=ce}s.restore();const G=Math.max(.9,v*.062*to(e.size));if(i.glow){const Z=s.createRadialGradient(R,A,0,R,A,G*4.5);Z.addColorStop(0,"rgba("+i.accent+",0.3)"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(R,A,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(R,A,G,0,6.2832),s.fill()}}no(e,a,i),s.restore()}function Vf(e,a,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,v=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=Pt(e.alert??0,0,1),k=x*.82,M=(F,q)=>br(i.dot,br(qS,VS,Pt(Math.hypot(F-m,q-v)/k,0,1)),w),_=e.size>=120,C=_?22:e.size>=32?10:e.size>=20?7:5,L=y?a*.55:a*.22,N=Math.cos(L),j=Math.sin(L),S=.42,P=Math.cos(S),$=Math.sin(S);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const F=s.createRadialGradient(m,v,0,m,v,x*1.02);F.addColorStop(0,"rgba("+i.accent+",0.10)"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=F,s.beginPath(),s.arc(m,v,x*1.02,0,6.2832),s.fill()}const R=[];for(let F=0;F<C;F++){const q=1-(F+.5)/C*2,T=Math.sqrt(Math.max(0,1-q*q)),z=F*2.39996,ne=Math.cos(z)*T,U=q,X=Math.sin(z)*T,se=ne*N+X*j,B=-ne*j+X*N,O=U*P-B*$,ae=U*$+B*P,ge=(ae+1)/2,ue=.82+.18*ge;R.push({x:m+se*k*ue,y:v+O*k*ue,d:ge,k:F,vec:[se,O,ae]})}R.sort((F,q)=>F.d-q.d);const A=F=>{const q=(F[2]+1)/2,T=.82+.18*q;return{x:m+F[0]*k*T,y:v+F[1]*k*T,d:q}},E=(F,q,T)=>{let z=F[0]*q[0]+F[1]*q[1]+F[2]*q[2];z=Pt(z,-1,1);const ne=Math.acos(z);if(ne<.001)return[F[0],F[1],F[2]];const U=Math.sin(ne),X=Math.sin((1-T)*ne)/U,se=Math.sin(T*ne)/U;return[F[0]*X+q[0]*se,F[1]*X+q[1]*se,F[2]*X+q[2]*se]},D={};for(const F of R)D[F.k]=F;const Z=a*(y?1.4:.5),H=Math.floor(Z),Y=Z-H,ee=5,oe=12;s.lineCap="round",s.lineJoin="round";const ce=[1.7,9.3,21.5,34.8,48.2],de=Pt(Math.round(e.streamCount??(_?5:4)),0,ce.length),K=ce.slice(0,de).map(F=>({seed:F}));for(const F of K){const q=z=>{const ne=Math.sin(z*12.9898+F.seed)*43758.5453;return Math.floor((ne-Math.floor(ne))*C)},T=z=>{let ne=q(z);return ne===q(z-1)&&(ne=(ne+1)%C),D[ne]};for(let z=ee-1;z>=0;z--){const ne=H-z;if(ne<0)continue;const U=T(ne),X=T(ne+1);if(!U||!X||U===X)continue;const se=z===0?Y:1,B=A(E(U.vec,X.vec,se)),O=(U.d+B.d)/2,ae=z===0?1:Pt(1-(z-1+Y)/(ee-1),0,1),ge=(i.glow?.6:.72)*ae*(.4+.6*O);if(ge<.02)continue;const ue=s.createLinearGradient(U.x,U.y,B.x,B.y);ue.addColorStop(0,"rgba("+M(U.x,U.y)+",0)"),ue.addColorStop(1,"rgba("+M(B.x,B.y)+","+ge+")"),s.strokeStyle=ue,s.lineWidth=(_?Math.max(1.1*p,x*.018):Math.max(1.2,x*.045))*(.7+.4*O),s.beginPath();for(let xe=0;xe<=oe;xe++){const le=A(E(U.vec,X.vec,se*(xe/oe)));xe===0?s.moveTo(le.x,le.y):s.lineTo(le.x,le.y)}s.stroke()}}for(const F of R){const q=.5+.5*Math.sin(a*2-F.k*.9),T=(.18+.82*F.d)*(.62+.38*q),z=_?Math.max(.5,(.9+.9*F.d)*p*(.85+.15*q)):x*.058*to(e.size)*(.6+.5*F.d);if(i.glow){const ne=z*4,U=s.createRadialGradient(F.x,F.y,0,F.x,F.y,ne);U.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(F.x,F.y,ne,0,6.2832),s.fill()}s.fillStyle="rgba("+M(F.x,F.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(F.x,F.y,Math.max(.9,z),0,6.2832),s.fill()}_&&fp(e,a,i,M),no(e,a,i),s.restore()}function fp(e,a,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,v=d/2,x=p/2,y=Math.min(d,p)*.39,k=e.state!=="idle"?1:.4;for(let M=0;M<46;M++){const _=on(M*5.1)<.5?-1:1,C=on(M*1.7)*6.2832+a*(.3+on(M*3.1)*.6)*_*k,L=y*(.04+.05*on(M*4.7))*Math.sin(a*(.8+on(M*6)*1)+on(M*7)*6.28),N=y*(.5+on(M*2.3)*.5)+L,j=v+Math.cos(C)*N,S=x+Math.sin(C)*N,P=.3+.7*(.5+.5*Math.sin(a*(1.4+on(M)*2)+on(M*2)*6.28)),$=Math.max(.5,(.4+on(M*8)*1)*m*(.55+.6*P));if(i.glow){const R=$*6,A=l.createRadialGradient(j,S,0,j,S,R);A.addColorStop(0,"rgba("+i.accent+","+P*.18+")"),A.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=A,l.beginPath(),l.arc(j,S,R,0,6.2832),l.fill()}l.fillStyle="rgba("+s(j,S)+","+P*(i.glow?.8:.42)+")",l.beginPath(),l.arc(j,S,$,0,6.2832),l.fill()}}function YS(e,a,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,v=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,M=x*.12,_=kr(.5+.5*Math.sin(a*(y?1:.55))),C=y?.34+.66*_:.5+.12*_,L=Math.max(1*p,x*.052),N=-a*(y?.5:.16),j=Math.cos(N),S=Math.sin(N),P=.42,$=Math.cos(P),R=Math.sin(P);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const A=x*(.52+.44*C),E=Math.max(k+L,A-M),D=[];for(let G=0;G<w;G++){const Z=1-(G+.5)/w*2,H=Math.sqrt(Math.max(0,1-Z*Z)),Y=G*2.39996,ee=Math.cos(Y)*H,oe=Z,ce=Math.sin(Y)*H,de=ee*j+ce*S,K=-ee*S+ce*j,F=oe*$-K*R,T=(oe*R+K*$+1)/2,z=.82+.18*T,ne=.5+.5*Math.sin(a*1.6+G*1.3);D.push({x0:m+de*k*z,y0:v+F*k*z,x1:m+de*E*z,y1:v+F*E*z,cx2:m+de*A*z,cy2:v+F*A*z,d:T,shim:ne})}D.sort((G,Z)=>G.d-Z.d);for(const G of D){const Z=(y?.4+.45*C:.6)*(.4+.6*G.d)*(.78+.22*G.shim),H=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);H.addColorStop(0,"rgba("+i.dot+","+Z+")"),H.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=H,s.lineWidth=L*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*to(e.size)*(.85+.3*C)*(.6+.5*G.d));if(i.glow){const ee=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Z+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Z+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&fp(e,a,i,()=>i.dot),no(e,a,i),s.restore()}function KS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=v*.78,k=x?a*.5:a*.2,M=Math.cos(k),_=Math.sin(k),C=.42,L=Math.cos(C),N=Math.sin(C),j=x?1:.4,S=(H,Y)=>[Math.sin(H)*Math.cos(Y),Math.cos(H),Math.sin(H)*Math.sin(Y)],P=[S(1.4+.5*Math.sin(a*.5*j),a*.6*j),S(1.9+.4*Math.cos(a*.4*j),-a*.5*j+2)],$=.36,R=e.cellCount==null?y:Pt(Math.round(e.cellCount),0,y);let A=null,E=null;(R<y||e.cellBirths)&&(E=Array.from({length:y},(H,Y)=>Y).sort((H,Y)=>on(H)-on(Y)),A=new Array(y),E.forEach((H,Y)=>{A[H]=Y}));const D=.7,G=.16;if(E&&e.cellBirths&&e.emergeNow!=null){let H=0;for(let Y=0;Y<R;Y++){const ee=E[Y];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+H++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Z=[];for(let H=0;H<y;H++){let Y=1;if(A){if(A[H]>=R)continue;if(e.cellBirths){const B=e.cellBirths.get(H);if(B==null||(Y=kr(((e.emergeNow??B+D)-B)/D),Y<=.001))continue}}const ee=1-(H+.5)/y*2,oe=Math.sqrt(Math.max(0,1-ee*ee)),ce=H*2.39996,de=Math.cos(ce)*oe*Y,K=ee*Y,F=Math.sin(ce)*oe*Y;let q=0;for(const B of P){const O=de-B[0],ae=K-B[1],ge=F-B[2];q+=Math.exp(-(O*O+ae*ae+ge*ge)/(2*$*$))}q=Pt(q,0,1);const T=de*M+F*_,z=-de*_+F*M,ne=K*L-z*N,X=(K*N+z*L+1)/2,se=.82+.18*X;Z.push({x:p+T*w*se,y:m+ne*w*se,d:X,inf:q,g:Y})}Z.sort((H,Y)=>H.d-Y.d);for(const H of Z){const Y=kr(H.inf),ee=Math.max(.6,v*(.05+.06*Y)*to(e.size)*(.55+.5*H.d))*(.35+.65*H.g),oe=(.16+.84*H.d)*(.45+.55*Y)*H.g,ce=1-(1-Math.abs(2*H.d-1))*H.g,de=Math.atan2(H.y-m,H.x-p);s.fillStyle="rgba("+i.dot+","+oe+")",s.beginPath(),s.ellipse(H.x,H.y,Math.max(.35,ee*ce),ee,de,0,6.2832),s.fill()}no(e,a,i),s.restore()}function QS(e,a,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,v=d/2,x=p/2,y=Math.min(d,p)*.39,w=e.state!=="idle",k=kr(Pt(s/.55,0,1)),M=kr(Pt((s-.3)/.4,0,1)),_=kr(Pt((s-.5)/.5,0,1)),C=e.size>=32?11:7,L=y*.12,N=y*.12,j=kr(.5+.5*Math.sin(a*(w?1:.55))),S=w?.34+.66*j:.5+.12*j,P=Math.max(1*m,y*.052),$=-a*(w?.5:.16),R=Math.cos($),A=Math.sin($),E=.42,D=Math.cos(E),G=Math.sin(E),Z=y*(.52+.44*S),H=Math.max(L+P,Z-N),Y=[];for(let B=0;B<C;B++){const O=1-(B+.5)/C*2,ae=Math.sqrt(Math.max(0,1-O*O)),ge=B*2.39996,ue=Math.cos(ge)*ae,xe=O,le=Math.sin(ge)*ae,ye=ue*R+le*A,Ce=-ue*A+le*R,Ae=xe*D-Ce*G,Pe=(xe*G+Ce*D+1)/2,_e=.82+.18*Pe,Ue=.5+.5*Math.sin(a*1.6+B*1.3);Y.push({x0:v+ye*L*_e,y0:x+Ae*L*_e,x1:v+ye*H*_e,y1:x+Ae*H*_e,cx2:v+ye*Z*_e,cy2:x+Ae*Z*_e,d:Pe,shim:Ue,ux:ue,uy:xe,uz:le})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...Y].sort((B,O)=>B.d-O.d);for(const B of ee){const O=(w?.4+.45*S:.6)*(.4+.6*B.d)*(.78+.22*B.shim);if(_>.001){const ae=B.x0+(B.x1-B.x0)*_,ge=B.y0+(B.y1-B.y0)*_,ue=l.createLinearGradient(B.x0,B.y0,B.x1,B.y1);ue.addColorStop(0,"rgba("+i.dot+","+O*_+")"),ue.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ue,l.lineWidth=P*(.7+.5*B.d),l.beginPath(),l.moveTo(B.x0,B.y0),l.lineTo(ae,ge),l.stroke()}if(M>.001){const ae=Math.max(.9,y*.058*to(e.size)*(.85+.3*S)*(.6+.5*B.d));if(i.glow){const ge=l.createRadialGradient(B.cx2,B.cy2,0,B.cx2,B.cy2,ae*5);ge.addColorStop(0,"rgba("+i.accent+","+.26*O*M+")"),ge.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ge,l.beginPath(),l.arc(B.cx2,B.cy2,ae*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,O+.1)*M+")",l.beginPath(),l.arc(B.cx2,B.cy2,ae*(.6+.4*M),0,6.2832),l.fill()}}const oe=e.size>=32?58:e.size>=20?32:18,ce=y*.78,de=w?a*.5:a*.2,K=Math.cos(de),F=Math.sin(de),q=w?1:.4,T=(B,O)=>[Math.sin(B)*Math.cos(O),Math.cos(B),Math.sin(B)*Math.sin(O)],z=[T(1.4+.5*Math.sin(a*.5*q),a*.6*q),T(1.9+.4*Math.cos(a*.4*q),-a*.5*q+2)],ne=.36,U=e.cellCount==null?oe:Pt(Math.round(e.cellCount),0,oe);let X=null;if(U<oe){const B=Array.from({length:oe},(O,ae)=>ae).sort((O,ae)=>on(O)-on(ae));X=new Array(oe),B.forEach((O,ae)=>{X[O]=ae})}const se=1-M;if(se>.001||k<1){const B=[];for(let O=0;O<oe;O++){if(X&&X[O]>=U)continue;const ae=1-(O+.5)/oe*2,ge=Math.sqrt(Math.max(0,1-ae*ae)),ue=O*2.39996,xe=Math.cos(ue)*ge,le=ae,ye=Math.sin(ue)*ge;let Ce=0,Ae=-2;for(let dt=0;dt<C;dt++){const Gt=xe*Y[dt].ux+le*Y[dt].uy+ye*Y[dt].uz;Gt>Ae&&(Ae=Gt,Ce=dt)}const Ne=Y[Ce];let Pe=0;for(const dt of z){const Gt=xe-dt[0],Kn=le-dt[1],bn=ye-dt[2];Pe+=Math.exp(-(Gt*Gt+Kn*Kn+bn*bn)/(2*ne*ne))}Pe=Pt(Pe,0,1);const _e=xe*K+ye*F,Ue=-xe*F+ye*K,Ge=le*D-Ue*G,Oe=(le*G+Ue*D+1)/2,ot=.82+.18*Oe,ht=v+_e*ce*ot,Vt=x+Ge*ce*ot;B.push({x:ht+(Ne.cx2-ht)*k,y:Vt+(Ne.cy2-Vt)*k,d:Oe+(Ne.d-Oe)*k,inf:Pe,f:(1-(1-Math.abs(2*Oe-1)))*(1-k)+1*k})}B.sort((O,ae)=>O.d-ae.d);for(const O of B){const ae=kr(O.inf),ge=Math.max(.6,y*(.05+.06*ae)*to(e.size)*(.55+.5*O.d)),ue=(.16+.84*O.d)*(.45+.55*ae)*se;if(ue<=.003)continue;const xe=Math.atan2(O.y-x,O.x-v);l.fillStyle="rgba("+i.dot+","+ue+")",l.beginPath(),l.ellipse(O.x,O.y,Math.max(.35,ge*O.f),ge,xe,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,fp(e,a,i,()=>i.dot),l.globalAlpha=1),no(e,a,i),l.restore()}function ZS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=v*.9,k=x?1:.4,M=a*(x?.3:.12),_=a*1*k,C=-a*.7*k+2.2,L=.72,N=(j,S)=>{const P=((j-S+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(P)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<y;j++){const S=j/y*6.2832+M;let P=Math.exp(-(N(S,_)**2)/(2*L*L))+Math.exp(-(N(S,C)**2)/(2*L*L));P=Pt(P,0,1);const $=kr(P),R=p+Math.cos(S)*w,A=m+Math.sin(S)*w,E=Math.max(.6,v*(.05+.07*$)*to(e.size)),D=.38+.62*$;if(i.glow&&$>.25){const G=s.createRadialGradient(R,A,0,R,A,E*4);G.addColorStop(0,"rgba("+i.accent+","+.24*$+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(R,A,E*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+D+")",s.beginPath(),s.arc(R,A,E,0,6.2832),s.fill()}no(e,a,i),s.restore()}function XS(e,a,i){no(e,a,i)}const JS={orbit:d2,orbit2d:GS,circle:Vf,lines:YS,magnetic:KS,magnetic2d:ZS,pulse:XS,bands:Vf};function ct({mark:e="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:p,coreHalo:m=!0,coreGradient:v=!1,streamCount:x,cellCount:y,className:w,"aria-label":k}){const M=g.useRef(null),_=WS(),C=g.useRef(0),L=g.useRef(0);L.current=v?1:0;const N=g.useRef(new Map),j=g.useRef(null),S=g.useRef(0);return g.useEffect(()=>{const P=M.current;if(!P)return;const $=P.getContext("2d");if(!$)return;const R=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),A=Math.min(2,window.devicePixelRatio||1),E=Math.max(2,Math.round(a*A)),D=E;P.width=E,P.height=D;const G={ctx:$,w:E,h:D,dpr:A,size:a,state:s,coreHalo:m,alert:C.current,streamCount:x,cellCount:y,cellBirths:y!=null&&!R&&s!=="static"?N.current:void 0},Z=i==="auto"?HS(qf($,P,"var(--color-bg-primary)"))<.5?"dark":"light":i,H=US(Z,Mu(d));if(p){const T=qf($,P,p);H.dot=T,H.core=T}const Y=JS[e]??d2,ee=1.15,oe=e==="lines"?1:0,ce=e==="lines"||e==="magnetic";(j.current==null||!ce||R||s==="static")&&(j.current=oe);const de=T=>{if(C.current+=(L.current-C.current)*.06,Math.abs(C.current-L.current)<.001&&(C.current=L.current),G.alert=C.current,G.emergeNow=performance.now()/1e3,ce&&j.current!==oe){const U=G.emergeNow,X=Pt(U-(S.current||U),0,.1);S.current=U;const se=oe>(j.current??0)?1:-1;j.current=Pt((j.current??0)+se*X/ee,0,1)}else S.current=G.emergeNow;$.clearRect(0,0,E,D);const z=s==="static"?.62:T,ne=j.current??oe;ce&&ne>.001&&ne<.999?QS(G,z,H,ne):Y(G,z,H)},K=Pt(l,.4,3);if((R||s==="static")&&(C.current=L.current),de(1.15),R||s==="static")return;let F=0;const q=T=>{de(T/1e3*K),F=requestAnimationFrame(q)};return F=requestAnimationFrame(q),()=>cancelAnimationFrame(F)},[e,a,i,s,l,d,p,m,v,x,y,_]),n.jsx("canvas",{ref:M,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:w,role:"img","aria-label":k})}const wa={high:0,medium:1,low:2,none:3};f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function ql(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function eM(e,a){if(a)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const u2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,p2=e=>/^(review|adjust|revisit|update)\b/i.test(e),tM=["Revisit","Update","Resolve"],nM=e=>/,|\sand\s/.test(e),rM="Approve all",Sl="Yes",h2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};f.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;function oM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function aM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function iM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function sM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function lM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function cM({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function $u({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function dM({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function uM({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function pM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function $o({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function hM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function fM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function mM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Gf({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Yf=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],ba={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},f2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function m2(e){const a=f2[e];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function g2(e){const a=ba[e.id];if(!a||e.title.startsWith(a))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${a} ${l}`}const v2={missed_clockin_james:"james_okoro_2"},mp=e=>`https://i.pravatar.cc/80?u=${v2[e]??e}`,Ma=e=>`https://i.pravatar.cc/80?u=${v2[e]??e}`,gM={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},vM=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],x2=e=>gM[e]??vM,y2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Kf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},gp={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},xM={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},vp={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},yM={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},wM={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Zd={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function w2(e){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return yM[e.id]??e.timeline.map(i=>{var d;const s=((d=Zd[i.state])==null?void 0:d.call(Zd,e))??e.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:wM[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const At=(e,a,i)=>({name:e,match:a,distance:i}),Ve=(e,a,i,s,l,d)=>({seed:e,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Qf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],bM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],kM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],_M=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],b2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",ko=e=>({from:"ultron",text:b2,time:e}),CM={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Qf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[At("Jordan Pierce","4.9 match","3.2 mi"),At("Aisha Karim","4.7 match","5.1 mi"),At("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:b2,total:20,threads:[Ve("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[ko("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ve("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[ko("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ve("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ve("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ve("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ve("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ve("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:bM,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[At("Renee Wallace","4.9 match","2.4 mi"),At("Carl Jensen","4.6 match","4.1 mi"),At("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ve("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ve("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ve("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:kM,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[At("Dane Mercer","4.8 match","2.1 mi"),At("Omar Reyes","4.6 match","3.7 mi"),At("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ve("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ve("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ve("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:_M,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[At("Jamal Carter","4.7 match","1.8 mi"),At("Sara Lindqvist","4.6 match","2.9 mi"),At("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ve("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ve("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ve("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[At("Theo Park","4.7 match","1.9 mi"),At("Gina Holt","4.5 match","3.3 mi"),At("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ve("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ve("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ve("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ve("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[At("Carl Jensen","4.7 match","2.6 mi"),At("Tina Boyd","4.5 match","3.9 mi"),At("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ve("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ve("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ve("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ve("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ve("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ve("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ve("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ve("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ve("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ve("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ve("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ve("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ve("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ve("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Qf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ve("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ve("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},jM={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},SM=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",Zf=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",Xf=e=>e.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),MM={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Nu=e=>{const[a,...i]=e.split(" "),s=MM[a];return s?`Will ${s} ${i.join(" ")}`:e};function $M(e,a){if(e==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${SM(i.name)}", template="shift_offer", to=matched)`,summary:`${Nu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Nu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function NM(e,a,i,s){var M,_,C,L;if(e==="read"){const N=((M=a.update)==null?void 0:M.recordType)??((_=a.updateClose)==null?void 0:_.recordType);if(!N)return null;const j=N.toLowerCase(),S=[{label:"Type",value:N},{label:"Time",value:((C=f2[s])==null?void 0:C.shiftTime)??""},{label:"User",value:ba[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${N}`,description:`Pulled the current ${j} record before planning`,query:`read_data(record="${N}") → current_state`,recordDetails:S,summary:`Read the ${j}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const N=(L=a.policy)==null?void 0:L.eligible;if(!N)return null;const j=N.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${j} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${N.total} ${N.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const S=N.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${N.total}) → suggestion`,summary:S?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:S?{add:!1,amount:"No bonus",rationale:`${N.total} qualified ${j} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${N.total} qualified ${j} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!a.task)return null;const{description:N,query:j,fields:S}=a.task;return{icon:"task",name:"Tasks",description:N,query:j,task:{fields:S}}}if(e==="update"||e==="update-close"){const N=e==="update"?a.update:a.updateClose;if(!N)return null;const{description:j,...S}=N;return{icon:"record",name:"Update Data",description:j,updateData:S}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0,p=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(!(e==="policy"&&a.policy||!!p||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":p.name,x=e==="policy"?a.policy.description:l?d.description:p.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const N=e==="policy"?x:Nu(x),j={icon:y,name:v,description:N,...$M(e,a)};return l?{...j,channel:Xf(d.channel),message:d.message}:p?{...j,channel:Zf(p.name),message:p.message}:e==="policy"?{...j,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:j}if(e==="policy")return{icon:y,name:v,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(p)return{icon:y,name:v,description:x,channel:Zf(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:w,...k}=d;return{icon:y,name:v,description:x,channel:Xf(d.channel),notification:k}}function k2(e,a,i="execution"){const s=CM[e];return s?a.map(l=>NM(l,s,i,e)).filter(l=>l!==null):[]}const RM=e=>e.tools??jM[e.icon]??["policy"],Js=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function LM(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const _2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Jf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function xp(e,a){return Jf[a%Jf.length]}function AM(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function TM(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function C2({record:e}){const a=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?e.meta.filter(l=>l!==a):e.meta;return n.jsxs(IM,{children:[n.jsx(Yn,{size:"md",src:mp(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(EM,{children:[n.jsx(PM,{children:e.title}),n.jsx(zM,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(OM,{"data-tone":TM(i),children:[i,"% match"]}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(Vu,{size:16})})]})}const IM=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,EM=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,PM=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,zM=f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,OM=f.span`
  flex-shrink: 0;
  /* 2px keeps the pill tight vertically; Alloy has no 2px space token, but the
     4px grid still governs the horizontal padding. */
  padding: 2px var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  white-space: nowrap;

  &[data-tone='green']  { background: var(--color-green-bg-tertiary);  border-color: var(--color-green-border-tertiary);  color: var(--color-green-content-primary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-tertiary);   border-color: var(--color-blue-border-tertiary);   color: var(--color-blue-content-primary); }
  &[data-tone='orange'] { background: var(--color-orange-bg-tertiary); border-color: var(--color-orange-border-tertiary); color: var(--color-orange-content-primary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-tertiary);  border-color: var(--color-slate-border-tertiary);  color: var(--color-slate-content-primary); }
`,em=e=>e.id.startsWith("detected_"),tm=5400,nm=1100;function FM(e,a){switch(a.type){case"detect":return e.some(i=>i.id===a.thread.id)?e:[a.thread,...e];case"decide":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:_2[i.id]??i.outcome}:i)}}const DM=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function BM(){const e=g.useMemo(()=>Yf.filter(U=>U.id!=="shift_drop_maria"),[]),[a,i]=g.useReducer(FM,e),[s,l]=g.useState(()=>{var X;const U=e.find(se=>se.status==="needs_approval"||se.status==="recommended");return(U==null?void 0:U.id)??((X=e[0])==null?void 0:X.id)??null}),[d,p]=g.useState([]),m=U=>{l(U),p(X=>X.includes(U)?X:[...X,U])},v=g.useMemo(()=>{const U=a.map((X,se)=>({item:X,index:se}));return DM.map(X=>({id:X.id,label:X.label,threads:U.filter(se=>X.statuses.includes(se.item.status)).sort((se,B)=>(se.item.status==="analyzing"?1:0)-(B.item.status==="analyzing"?1:0)||(em(B.item)?1:0)-(em(se.item)?1:0)||wa[se.item.severity]-wa[B.item.severity]||se.index-B.index).map(se=>se.item)}))},[a]),x=a.find(U=>U.id===s)??null,[y,w]=g.useState({}),k=s?y[s]??0:0,[M,_]=g.useState([]),[C,L]=g.useState({}),[N,j]=g.useState({}),[S,P]=g.useState([]),$=g.useRef({}),[R,A]=g.useState([]),E=U=>{A(X=>X.includes(U)?X.filter(se=>se!==U):[...X,U])},[D,G]=g.useState([]),Z=U=>{G(X=>X.includes(U)?X:[...X,U])},[H,Y]=g.useState([]),ee=U=>Y(X=>X.includes(U)?X:[...X,U]);return{threads:a,groups:v,selectedId:s,selectedThread:x,selectedStage:k,stageById:y,viewedIds:d,analyzedIds:M,outboundByThread:C,chatByThread:N,replyingIds:S,setSelectedId:m,detectRisk:U=>{i({type:"detect",thread:LM(U)})},surfaceDemoThread:U=>{const X=Yf.find(se=>se.id===U);X&&(i({type:"detect",thread:X}),ee(U))},decide:U=>{m(U),_(X=>X.includes(U)?X:[...X,U]),i({type:"decide",threadId:U})},commit:(U,X)=>{m(U),L(se=>({...se,[U]:[...se[U]??[],X]})),i({type:"commit",threadId:U})},completeRun:U=>{const X=y[U]??0,se=gp[U];X===0&&se?(w(B=>({...B,[U]:1})),i({type:"reopen",threadId:U})):(i({type:"resolve",threadId:U}),R.includes(U)&&(Z(U),A(B=>B.filter(O=>O!==U))))},sendMessage:(U,X)=>{const se=X.trim();if(!se)return;m(U),j(O=>({...O,[U]:[...O[U]??[],{role:"operator",text:se}]})),P(O=>O.includes(U)?O:[...O,U]);const B=window.setTimeout(()=>{j(O=>{const ae=O[U]??[],ge=ae.filter(ue=>ue.role==="ultron").length;return{...O,[U]:[...ae,{role:"ultron",text:xp(se,ge)}]}}),P(O=>O.filter(ae=>ae!==U)),delete $.current[U]},nm);$.current[U]=B},stopReply:U=>{const X=$.current[U];X&&(window.clearTimeout(X),delete $.current[U]),P(se=>se.filter(B=>B!==U))},refine:U=>{},saveWorkflow:U=>{const X=U.id;m(X),j(B=>({...B,[X]:[...B[X]??[],{role:"operator",text:"Save as workflow"}]})),P(B=>B.includes(X)?B:[...B,X]);const se=window.setTimeout(()=>{j(B=>({...B,[X]:[...B[X]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Z(X),P(B=>B.filter(O=>O!==X)),delete $.current[X]},nm);$.current[X]=se},pendingWorkflowIds:R,toggleWorkflowSave:E,savedWorkflowIds:D,markWorkflowSaved:Z,revealedNewIds:H,revealNew:ee}}const WM={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function HM(e,a){const i=WM[e];return!i||a==="plan"?e:a==="done"?i.done:i.working}const UM={search:bl,read:bl,message:_i,policy:Co,shield:Co,schedule:Co,analytics:w6,clock:yn,monitor:Ti,bell:_i,record:Zr,task:Co},qM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},VM=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:qM[e.icon]??e.name,GM=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",rm={positive:0,chatting:1,muted:2},YM=f(gg)`
  && {
    --accordion-label-size: var(--text-sm);
    --accordion-desc-size: var(--text-xs);
  }
  & > div:has(> [data-accordion-header-button]) {
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  /* Chevron to the trailing edge, smaller. order:1 reorders it past the order-0
     label block (which is flex: 1), so it lands flush right; the 16px box/glyph
     reads smaller than the 32px tile it occupied before. */
  & [class*='_chevron_'] {
    order: 1;
    width: var(--space-4);
    height: var(--space-4);
    color: var(--color-content-tertiary);
  }
  & [class*='_chevron_'] svg {
    width: var(--space-4);
    height: var(--space-4);
  }
  & [class*='_description_'] {
    color: var(--color-content-disabled);
    /* Alloy clamps the description to a single line (white-space: nowrap +
       ellipsis). Let it wrap and clamp at two lines instead, so a collapsed
       section surfaces more of its context before truncating. */
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }
  /* 12px gap between the leading avatar tile and the label/description block. */
  & [class*='_headerContent_'] {
    gap: var(--space-3);
  }
  & [role='region'] > div > div {
    /* No inset card — the body indents so its sections line up LEFT under the
       title text (header pad + avatar tile + header gap = 12 + 32 + 12 = 56px),
       with a 12px right gutter and 16px below the last section. */
    margin: 0;
    padding: 0 var(--space-3) var(--space-4)
      calc(var(--space-8) + var(--space-3) + var(--space-3));
    background: none;
  }
  /* Inset the inter-item divider 12px on each side. Suppress Alloy's full-bleed
     border (its selector needs &&& to override) and draw the line with a pseudo.
     An expanded section drops its divider — the tinted body card already closes
     the section visually, so a line under it would double the boundary. */
  &&&:not(:last-child) {
    border-bottom: none;
  }
  &:not(:last-child):not([data-expanded='true'])::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    height: 1px;
    background: var(--color-border-opaque);
  }
`,KM=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,yp=240;function QM({open:e,onClose:a,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[p,m]=g.useState(e),[v,x]=g.useState(!1);if(g.useEffect(()=>{if(e){m(!0);let _=0;const C=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(C),cancelAnimationFrame(_)}}x(!1);const M=setTimeout(()=>m(!1),yp);return()=>clearTimeout(M)},[e]),!p)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((M,_)=>({entry:M,index:_}));return ka.createPortal(n.jsxs(s$,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(l$,{$shown:v,onClick:a}),n.jsxs(c$,{$shown:v,children:[n.jsxs(d$,{children:[n.jsxs(u$,{children:[n.jsx(p$,{children:i}),n.jsx(h$,{children:w})]}),n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:n.jsx(Ci,{size:18})})]}),n.jsxs(f$,{children:[n.jsx(m$,{"aria-hidden":"true"}),n.jsx(mg,{type:"single",collapsible:!0,value:l,onValueChange:M=>d(typeof M=="string"?M:""),children:k.map(({entry:M,index:_})=>{const C=M.updateData?X0:UM[M.icon];return n.jsx(YM,{value:String(_),label:VM(M),description:M.description,leadingSlot:n.jsx(KM,{"aria-hidden":"true",children:n.jsx(C,{size:18})}),children:n.jsx(g$,{children:n.jsx(ZM,{entry:M})})},_)})})]})]})]}),document.body)}function ZM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Channel"}),n.jsx(lm,{children:e.channel})]}),e.message&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Message"}),n.jsx(am,{children:e.message})]}),e.recordDetails&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Record details"}),n.jsx(Xd,{children:e.recordDetails.map((a,i)=>n.jsx(xn,{size:"sm",label:a.label,trailingSlot:n.jsx(Jd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.policies&&n.jsxs(vn,{children:[n.jsx(Qt,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(N$,{children:e.policies.items.map((a,i)=>n.jsxs(R$,{children:[n.jsx(L$,{"aria-hidden":"true",children:n.jsx(cn,{size:16})}),n.jsx("span",{children:a})]},i))})]}),e.eligible&&n.jsxs(vn,{children:[n.jsx(Qt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(XM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(vn,{children:[n.jsx(Qt,{children:`Threads · ${e.threads.total}`}),n.jsx(o$,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(vn,{children:[n.jsx(Qt,{children:"Recipient"}),n.jsx(A$,{children:n.jsx(xn,{size:"md",divider:!1,leadingSlot:n.jsx(Yn,{size:"sm",src:Ma(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(Fl,{size:14})})})})]}),n.jsxs(vn,{children:[n.jsx(Qt,{children:"Message"}),n.jsx(am,{children:e.notification.message})]})]}),e.task&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Task"}),n.jsx(Xd,{children:e.task.fields.map((a,i)=>n.jsx(xn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?n.jsx(ji,{status:"success",size:"sm",children:a.value}):n.jsx(Jd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.updateData&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((a,i)=>n.jsx(Xd,{children:a.map((s,l)=>n.jsx(xn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(JM,{children:[n.jsx(e$,{children:s.previousValue}),n.jsx(t$,{"aria-hidden":"true",children:"→"}),n.jsx(n$,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(ji,{status:"success",size:"sm",children:s.value}):n.jsx(Jd,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Recommendation"}),n.jsxs(T$,{children:[n.jsxs(im,{children:[n.jsx(sm,{children:"Incentive?"}),n.jsx(I$,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(im,{children:[n.jsx(sm,{children:"Reason"}),n.jsx(E$,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"Query"}),n.jsx(v$,{children:e.query})]}),e.summary&&n.jsxs(vn,{children:[n.jsx(Qt,{children:"What it does"}),n.jsx(lm,{children:e.summary})]})]})}function XM({candidates:e,total:a,moreNoun:i}){var y;const[s,l]=g.useState(!1),d=e.slice(0,3),p=a-d.length,m=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),v=s?Array.from({length:p},(w,k)=>r$(k,m)):[],x=[...d,...v];return n.jsxs(n.Fragment,{children:[n.jsx(wp,{children:x.map((w,k)=>n.jsx(xn,{size:"sm",leadingSlot:n.jsx(Yn,{size:"sm",src:Ma(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(w$,{children:`${w.match} · ${w.distance}`})},k))}),p>0&&n.jsx(j2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${p} more ${i}`})]})}const wp=f.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;

  & > div {
    --li-px: var(--space-3);
    /* Names use the Label/sm type size. */
    --li-label-size: var(--text-xs);
    /* Draw the row divider inset 12px from each edge (aligned with the row's
       content padding) rather than the default full-width border. */
    position: relative;
    border-bottom-color: transparent;
  }
  & > div::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
  & > div:last-child::after {
    display: none;
  }
`,Xd=f(wp)`
  /* 8px of breathing room inside the card's top/bottom edges — the rows themselves
     stay tight (see --li-py below), so the padding sits on the card, not each row.
     The column gap spaces the rows apart (the rows carry no vertical padding of
     their own). */
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);

  & [class*='_label_'] {
    color: var(--color-content-tertiary);
  }
  /* Condensed key/value block — no inter-row dividers, and the rows shed their
     48/36px min-height so each collapses to just its content plus a tight vertical
     pad, removing the extra height and inter-row gaps. */
  & > div::after {
    display: none;
  }
  & > div {
    --li-py: 0;
    --li-min-height: auto;
    min-height: 0;
  }
`,Jd=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,JM=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,e$=f.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,t$=f.span`
  color: var(--color-content-tertiary);
`,n$=f.span`
  color: var(--color-success-content);
`,Ml=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],$l=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function r$(e,a){const i=Ml[e%Ml.length],s=$l[(e*7+3)%$l.length],l=Math.max(3,a-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const om=3;function o$({threads:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((y,w)=>rm[y.tone]-rm[w.tone]),p=Math.max(0,e.total-d.length),m=[...d,...Array.from({length:p},(y,w)=>i$(w))],v=a?m:m.slice(0,om),x=m.length-om;return n.jsxs(n.Fragment,{children:[n.jsx(wp,{children:v.map((y,w)=>{var C;const k=!!((C=y.conversation)!=null&&C.length),M=`${y.name}-${w}`,_=k&&s===M;return n.jsxs(b$,{"data-open":_||void 0,children:[n.jsx(xn,{size:"md",interactive:k,onClick:k?()=>l(_?null:M):void 0,"aria-expanded":k?_:void 0,leadingSlot:n.jsx(Yn,{size:"sm",src:Ma(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:n.jsxs($$,{children:[n.jsx(ji,{status:GM(y),size:"sm",children:y.status}),k?n.jsx(k$,{"data-open":_||void 0,children:n.jsx(Tn,{size:16})}):n.jsx(wn,{size:16})]})}),_&&n.jsx(a$,{messages:y.conversation})]},M)})}),x>0&&n.jsx(j2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":a,children:a?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function a$({messages:e}){return n.jsx(C$,{children:e.map((a,i)=>n.jsxs(j$,{$from:a.from,children:[n.jsx(S$,{children:a.text}),n.jsx(M$,{children:a.time})]},i))})}function i$(e){const a=Ml[e%Ml.length],i=$l[(e*7+3)%$l.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const s$=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,l$=f.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${yp}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,c$=f.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${e=>e.$shown?"0":"100%"});
  transition: transform ${yp}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,d$=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,u$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,p$=f.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,h$=f.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,f$=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,m$=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,g$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,vn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function v$({children:e}){const[a,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(x$,{children:[n.jsx(y$,{children:e}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?n.jsx(cn,{size:14}):n.jsx(Q0,{size:14})})]})}const x$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);

  /* The copy control is a hover affordance: hidden at rest, revealed when the
     pointer is over the box. Opacity (not display) so it keeps its layout slot
     and stays keyboard-reachable — tabbing to it reveals it too. */
  & > button {
    opacity: 0;
    transition: opacity var(--duration-fast) var(--ease-default);
  }
  &:hover > button,
  & > button:focus-visible {
    opacity: 1;
  }
`,y$=f.pre`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`,w$=f.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,b$=f.div``,k$=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,_$=$e`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,C$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${_$} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,j$=f.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,S$=f.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,M$=f.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,$$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,j2=f.button`
  appearance: none;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: var(--text-sm);
  text-align: left;
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover {
    color: var(--color-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`,N$=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,R$=f.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Condensed 36px rows — a fixed height with horizontal-only padding, so the
     list reads tighter than the default 12px-all-around row. */
  height: 36px;
  padding: 0 var(--space-3);
  box-sizing: border-box;
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
`,L$=f.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,am=f.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,A$=f.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
  overflow: hidden;

  & > div {
    --li-px: var(--space-3);
    --li-py: var(--space-2);
    /* 8px gap between the avatar and the name/role. */
    --li-gap: var(--space-2);
    /* Name uses the Label/sm type size. */
    --li-label-size: var(--text-xs);
  }
`,T$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,im=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,sm=f.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,I$=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,E$=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,lm=f.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function P$({milestones:e}){return n.jsx(q$,{children:e.map((a,i)=>n.jsx(D$,{milestone:a,last:i===e.length-1},i))})}function S2({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:p,animateIn:m,showConnectors:v,reasoning:x}){return n.jsx(z$,{milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:p,defaultCollapsed:l,animateIn:m,showConnectors:v,reasoning:x})}function z$({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:p=!0,showConnectors:m=!0,defaultCollapsed:v=!1,reasoning:x=!1}){const[y,w]=g.useState(!1),_=v||x&&!d?e.length:0,C=_>0,L=C&&!y?_:0,N=e.slice(0,_).map(S=>S.headline).join(" · "),j=e.length>0&&L>=e.length;return n.jsx(G$,{$animate:p,children:n.jsxs(K$,{$compact:j,children:[C&&!y&&n.jsx(um,{$tight:!0,$last:j,$connected:m,children:n.jsxs(N2,{type:"button","aria-expanded":y,onClick:()=>w(S=>!S),children:[n.jsx(fm,{"aria-hidden":"true",children:n.jsx(kl,{size:16})}),n.jsx(lN,{children:N})]})}),e.slice(L).map((S,P)=>{var H,Y;const $=L+P,R=d&&typeof i=="number"&&$>i,A=d&&typeof i=="number"&&$===i,E=R?"plan":A?"working":"done",D=!d||typeof i!="number"||$<i-1?"done":$===i-1?"working":"upcoming",G=!!((H=S.progress)!=null&&H.length),Z=$===e.length-1;return n.jsxs(um,{$tight:!G,$last:Z,$connected:m,children:[m&&!Z&&D!=="upcoming"&&n.jsx(Z$,{"aria-hidden":"true",$state:D,$tight:!G,$superseded:v}),n.jsx($2,{milestone:S,label:HM(S.headline,E),last:!0,collapsible:!0,placeholder:R,focused:A,startOpen:!d&&y,onCollapse:C&&y&&!A?()=>w(!1):void 0,progressBeat:A?s:void 0,superseded:v,typing:$===a,extra:!R&&((Y=S.usage)!=null&&Y.length)?n.jsx(F$,{usage:S.usage,title:S.headline}):void 0,icon:x&&!d&&!R?n.jsx(fm,{"aria-hidden":"true",children:n.jsx(kl,{size:16})}):n.jsx(M2,{icon:S.icon,loading:a===$||A||d&&typeof i!="number"&&$===e.length-1,placeholder:R,muted:v})})]},$)}),!l&&!d&&n.jsx(da,{time:or(e)})]})})}const cm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function O$(){const[e,a]=g.useState(0);return g.useEffect(()=>{if(e>=cm.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[cm[e],n.jsxs(Y$,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function or(e){const i=581+e.reduce((m,v)=>m+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function da({time:e}){const[a,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(X$,{"data-feedback-actions":!0,children:n.jsxs(T0,{visibility:"always",time:e,children:[n.jsx(pm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:n.jsx(Y0,{size:14})}),n.jsx(pm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:n.jsx(K0,{size:14})}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Ai,{size:14})})]})})}function F$({usage:e,title:a}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(J$,{children:[n.jsxs(ze,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(wn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(QM,{open:i,onClose:()=>s(!1),title:a,usage:e})]}):null}function D$({milestone:e,last:a}){return n.jsxs(oN,{children:[n.jsxs(aN,{children:[n.jsx(M2,{icon:e.icon}),!a&&n.jsx(uN,{})]}),n.jsx($2,{milestone:e,last:a})]})}function B$({records:e,initial:a=3}){const[i,s]=g.useState(!1),l=i?e:e.slice(0,a),d=e.length-a;return n.jsxs(MN,{children:[l.map((p,m)=>n.jsx(C2,{record:p},m)),d>0&&n.jsx($N,{type:"button",onClick:()=>s(p=>!p),children:i?"Show less":`Show ${d} more`})]})}function M2({slotRef:e,hidden:a,loading:i,placeholder:s,muted:l}){return s?n.jsx(hm,{ref:e,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:n.jsx(sN,{})}):n.jsx(hm,{ref:e,"aria-hidden":"true",$hidden:a,$loading:i,children:n.jsxs(dN,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function $2({milestone:e,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:p,placeholder:m,focused:v,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var Z,H,Y;const M=a??e.headline;if(m)return n.jsx(gm,{$last:i,$dim:!0,children:n.jsxs($i,{as:"div",children:[l,n.jsx(vm,{children:M})]})});const _=!!((Z=e.blocks)!=null&&Z.length),C=!!p,L=!d||!!e.defaultOpen||!!w,[N,j]=g.useState(null),S=!!k,P=S?!0:N??L,$=d&&(_||C),R=!S&&$&&(!s||!!v),A=R&&!!v&&!!((H=e.progress)!=null&&H.length),E=()=>j(()=>!P),D=_&&(S||!d||P),G=C&&(S||!d||P);return n.jsxs(gm,{$last:i,children:[n.jsxs($i,{as:S||$?"button":"div",type:S||$?"button":void 0,$interactive:S||R,"aria-expanded":S?!0:R?P:void 0,onClick:S?k:R?E:void 0,children:[l,n.jsx(vm,{$focused:!!v,children:M}),R&&!v&&n.jsx(pN,{"data-open":P||void 0,"aria-hidden":"true",children:n.jsx(wn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?n.jsx(mN,{$indent:!!l,children:n.jsxs(hN,{children:[A&&n.jsx(fN,{type:"button","aria-expanded":P,"aria-label":P?"Hide details":"Show details",onClick:E,children:P?n.jsx(np,{size:16}):n.jsx(No,{size:16})}),n.jsx(H$,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:x,superseded:y,showAvatars:P||s||v})]})}):null,D&&n.jsx(_N,{$indent:!!l,children:e.blocks.map((ee,oe)=>n.jsxs(CN,{children:[ee.text&&n.jsx(jN,{children:s?n.jsx(bp,{text:ee.text}):ee.text}),ee.label&&n.jsx(SN,{children:ee.label}),ee.bullets&&n.jsx(NN,{children:ee.bullets.map((ce,de)=>n.jsx("li",{children:ce},de))}),ee.checks&&n.jsx(RN,{children:ee.checks.map((ce,de)=>n.jsxs("li",{children:[n.jsx(LN,{"aria-hidden":"true"}),n.jsx("span",{children:ce})]},de))}),ee.records&&n.jsx(B$,{records:ee.records})]},oe))}),G&&n.jsx(eN,{$indent:!!l,children:p})]})}const W$=1350;function H$({steps:e,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:p,superseded:m}){const v=e.length-1,x=typeof p=="number",[y,w]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),g.useEffect(()=>{if(x||!k.current||y>=v)return;const L=setTimeout(()=>w(N=>Math.min(N+1,v)),W$);return()=>clearTimeout(L)},[y,v,x]),g.useEffect(()=>{typeof p=="number"&&w(Math.min(p,v))},[p,v]);const M=typeof p=="number"?Math.min(p,v):y,_=M>=v,C=_&&!l;return n.jsxs(gN,{children:[n.jsx(xN,{$done:C,$live:l,$superseded:m,"aria-live":"polite",children:l?n.jsx(bp,{text:e[M],caret:!1,speed:26}):e[M]},M),d&&(i?_:_||l)&&(a!=null&&a.length)?n.jsx(U$,{seeds:a,total:s}):null]})}const dm=90;function U$({seeds:e,total:a,max:i=5}){const s=e.slice(0,i),l=Math.max(a??0,e.length),d=l-s.length;return n.jsxs(yN,{"aria-label":`${l} people reached`,children:[s.map((p,m)=>n.jsx(wN,{style:{zIndex:s.length-m,animationDelay:`${m*dm}ms`},children:n.jsx(Yn,{size:"sm",src:Ma(p),name:p,alt:""})},p)),d>0&&n.jsxs(bN,{"aria-hidden":"true",style:{animationDelay:`${s.length*dm}ms`},children:["+",d]})]})}const q$=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,V$=$e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Vl=He`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,G$=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${V$} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${Vl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Y$=f.span``,K$=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,um=f.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,Q$=$e`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,Z$=f.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?He`
        width: 1.5px;
        /* Faint track behind, with a brand-coloured segment sweeping down it. */
        background-color: var(--color-border-opaque);
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          var(--color-success-content) 50%,
          transparent 100%
        );
        background-size: 100% 55%;
        background-repeat: no-repeat;
        animation: ${Q$} 1.25s linear infinite;
      `:e.$state==="upcoming"?He`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:He`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero.
           A superseded group (a newer activity group has triggered below it)
           demotes the line to the slate scale, so the success green stays with
           the latest group. */
        width: 1.5px;
        background-color: ${e.$superseded?"var(--color-slate-border-secondary)":"var(--color-success-content)"};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,X$=f.div`
  padding-top: var(--space-4);
  /* Nudge the action cluster 8px further below the usage toggle. */
  margin-top: var(--space-2);
  /* Sit on the group's left rail — flush with the session summary and the
     activity icon column — rather than indented onto the content rail. */

  /* Hidden at rest — the enclosing message group reveals it on hover/focus (the
     reveal rule is shared by SessionShell, ResponseSet, and the decision turn).
     Opacity (not display) keeps the row's layout box, so the resting agent mark
     still anchors below it. */
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out);

  /* Size the action buttons (thumbs up/down + rerun) to a 24px tap target,
     keeping their icons centered. The min-width override beats the design
     system's icon-only width rule. */
  & button {
    width: 24px;
    min-width: 24px;
    height: 24px;
    padding: 0;
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,J$=f.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,eN=f.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,pm=f(ze)`
  &[data-active] { color: var(--color-content-brand); }
`;function bp({text:e,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const m=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(m)},[l,e,i]);const p=l>=e.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(nN,{$blink:p,"aria-hidden":"true"}),!p&&n.jsx(rN,{"aria-hidden":"true",children:e.slice(l)})]})}const tN=$e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,nN=f.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?tN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rN=f.span`
  opacity: 0;
`,oN=f.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,aN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,hm=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,iN=$e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,sN=f.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${iN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,N2=f.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,fm=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,lN=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  /* Always the quiet disabled tone — the recap line stays out of the way. */
  color: var(--color-content-disabled);
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  ${N2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,cN=$e`
  to { transform: rotate(360deg); }
`,mm=56.5,dN=f.svg`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${e=>e.$loading||e.$muted?"transparent":"var(--color-success-fill)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${mm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?mm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${cN} 2s linear infinite;
    /* Arc closes + fills on one eased settle curve (easeOutCubic) over the same
       duration, so the ring glides shut and colours in rather than braking abruptly. */
    transition:
      stroke-dashoffset 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      fill 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .check {
    fill: none;
    /* White check on the filled green disc; a muted (superseded) step keeps just
       the check glyph in the quiet content-tertiary tone. */
    stroke: ${e=>e.$muted?"var(--color-content-tertiary)":"var(--color-content-inverse-primary)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${e=>e.$loading?15:0};
    opacity: ${e=>e.$loading?0:1};
    transform: ${e=>e.$loading?"scale(0.7)":"scale(1)"};
    transform-box: fill-box;
    transform-origin: center;
    /* Starts ~0.42s in — as the ring finishes closing — so the two motions hand
       off cleanly instead of overlapping. The stroke colour transitions with no
       delay: it carries the white→tertiary demotion when a group is superseded,
       easing alongside the ring's fade rather than waiting on the draw-on beat. */
    transition:
      stroke-dashoffset 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0.42s,
      opacity 0.26s ease 0.42s,
      transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1) 0.42s,
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    .ring { animation: none; }
    .ring, .check { transition: none; }
  }
`,uN=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,gm=f.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,$i=f.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,vm=f.span`
  /* Size to the title text (shrinking if the row is tight) rather than filling the
     row, so the expand chevron sits right after the label instead of at the far edge. */
  flex: 0 1 auto;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${e=>e.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${e=>e.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${$i}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,pN=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${$i}:hover &,
  ${$i}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,hN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,fN=f.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-5);
  height: var(--space-5);
  color: var(--color-content-tertiary);
  cursor: pointer;
  transition: color var(--duration-base) var(--ease-out);

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,mN=f.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,gN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,vN=$e`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,xN=f.div`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-loose);
  letter-spacing: var(--tracking-normal);
  /* Settled (done) sub-text reads in the success green — matching the completed
     step's check — while in-flight beats stay muted. Once a newer activity group
     triggers below, the whole superseded group's sub-text quiets to the disabled
     tone, so the green stays with the latest work. */
  color: ${e=>e.$superseded?"var(--color-content-disabled)":e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running a highlight band sweeps left-to-right across it
     to read as actively-working; a settled line holds solid. */
  ${e=>e.$live&&He`
    background: linear-gradient(
      90deg,
      var(--color-content-tertiary) 0%,
      var(--color-content-tertiary) 45%,
      var(--color-content-primary) 50%,
      var(--color-content-tertiary) 55%,
      var(--color-content-tertiary) 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${vN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,yN=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,R2=$e`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,wN=f.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${R2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,bN=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--space-6);
  min-width: var(--space-6);
  /* Asymmetric padding: a wide left pad (12px, exceeding the 8px overlap) keeps the
     leading "+" clear of the face beside it, with a tighter right pad so the chip
     stays compact. */
  padding: 0 var(--space-2) 0 var(--space-3);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-full);
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  background: var(--color-bg-tertiary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${R2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kN=$e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,_N=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  animation: ${kN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,CN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,jN=f.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,SN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,MN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,$N=f.button`
  align-self: flex-start;
  margin: 0;
  padding: var(--space-1) 0;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,NN=f.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-sm);
    line-height: var(--line-height-normal);
    /* Lighter than the standard tertiary detail tone — the bullets are deep
       sub-context, so they sit a step quieter than the step's other text. */
    color: var(--color-content-disabled);
  }
`,RN=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`,LN=f.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function AN({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const TN=160,L2=g.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},p){const[m,v]=g.useState(""),x=g.useRef(null),y=m.trim().length>0;g.useImperativeHandle(p,()=>({focus:()=>{var C;return(C=x.current)==null?void 0:C.focus()}}),[]);const w=()=>{const C=x.current;C&&(C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,TN)}px`)},k=()=>{!y||i||(a(m),v(""),requestAnimationFrame(()=>{const C=x.current;C&&(C.style.height="auto")}))},M=C=>{C.preventDefault(),k()},_=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),k())};return n.jsxs(IN,{onSubmit:M,$compact:d,children:[n.jsx(EN,{ref:x,rows:1,value:m,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:C=>{v(C.target.value),w()},onKeyDown:_}),i?n.jsx(xm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(AN,{size:d?16:20})}):n.jsx(xm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:n.jsx(zl,{size:d?14:18})})]})}),IN=f.form`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  /* Compact: 5px vertical padding sets the resting bar to 36px (24px xs button
     + 2×5px + 2×1px border), with a tighter 8px radius to match its smaller
     scale. Declared after the base padding/radius so it overrides them. */
  ${e=>e.$compact&&`
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,EN=f.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${e=>e.$compact?"var(--space-6)":"var(--space-8)"} - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  /* Compact bars step the type down with the rest of the control (the 1lh
     padding math above follows the smaller line box automatically). */
  ${e=>e.$compact&&`
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,xm=f(ze)`
  flex-shrink: 0;
  border-radius: var(--radius-full);

  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Disabled (empty draft) — drops to the neutral disabled surface + muted glyph
     rather than a dimmed inverse fill, so it reads clearly as not-yet-sendable. */
  &[data-variant='primary']:disabled {
    background: var(--color-bg-disabled) !important;
    color: var(--color-content-disabled) !important;
  }

  /* Float style — the processing/stop control reads as a quiet inline glyph
     rather than a solid send pill: transparent surface, content-primary icon. */
  ${e=>e.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`,ym=450;function kp(e,a){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=gp[e.id],d=a===1&&!!l,p=d?l.prompt:y2[e.id]??e.recommendation,m=d?l.record:xM[e.id],v=m?Array.isArray(m)?m:[m]:[],x=e.status==="unresolved"?tM:d?l.actions:e.actions,y=i&&(!d&&(((_=vp[e.id])==null?void 0:_.length)??0)>1||nM(p)),w=y?rM:x[x.length-1],k=y?[]:x.slice(0,-1),M=u2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:p,records:v,primaryLabel:w,secondaryLabels:k,purple:M}}function wm({thread:e,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:p,onClose:m,onDecide:v,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,M]=g.useState(!1),[_,C]=g.useState(!1),{actionable:L,prompt:N,records:j,primaryLabel:S,purple:P}=kp(e,a),R=e.status==="analyzing"&&!l,A=e.status==="resolved"||e.status==="auto_resolved",E=!s&&(L||P),D=A&&!d,G=s?R:L||R||E,Z=i&&(G||D),H=ql(e),ee=m2(e.id)||(Z?"":e.assessment),oe=ce=>{p2(ce)?y(ce):x(e.id,ce)};return n.jsxs(YN,{"data-tone":H,$expanded:i,children:[n.jsxs(JN,{children:[n.jsxs(tR,{type:"button","aria-expanded":Z,"aria-label":Z?"Collapse case":"Expand case",onClick:p,children:[n.jsx(Yn,{size:"md",src:mp(e.id),name:ba[e.id],alt:ba[e.id]??""}),n.jsxs(z2,{children:[n.jsx(O2,{children:g2(e)}),ee&&n.jsx(F2,{children:ee})]})]}),n.jsx(eR,{variant:"ghost",size:m?"sm":"xs",iconOnly:!0,"aria-label":m?"Open record":Z?"Collapse case":"Expand case",tabIndex:m?void 0:-1,onClick:m??p,children:m?n.jsx(Fl,{size:20}):Z?n.jsx(kl,{size:16}):n.jsx(np,{size:16})})]}),Z&&D&&n.jsx(nR,{children:n.jsx(rR,{children:n.jsx(P$,{milestones:w2(e)})})}),Z&&G&&n.jsxs(oR,{children:[L&&!s&&n.jsx(Gl,{children:N}),L&&!s&&j.length>0&&n.jsx(wR,{children:j.map((ce,de)=>n.jsx(C2,{record:ce},de))}),R&&n.jsx(D2,{role:"status","aria-live":"polite",children:n.jsx(FN,{thread:e,onDecide:v})}),E&&n.jsxs(_p,{children:[L&&S&&n.jsx(jo,{variant:"primary",size:"sm",onClick:()=>oe(Sl),children:Sl}),L&&n.jsx(jo,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),L&&n.jsx(U2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{C(!0),y("Other")},children:"Other"}),P&&(k?n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(cn,{size:14}),children:"Saved"}):n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx($o,{size:14}),onClick:()=>{w(e),M(!0)},children:"Save as workflow"}))]})]})]})}function bm({text:e,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(bp,{text:e,speed:a,onDone:()=>{d(!0),i==null||i()}})}function A2({thread:e,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:p=!1,onToggleSaveWorkflow:m,savedConversationally:v=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const M=d||p,[_,C]=g.useState(!1),[L,N]=g.useState(!1),[j]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[S,P]=g.useState(!1),[$,R]=g.useState(!1),A=g.useRef(null);g.useEffect(()=>{var q;$&&((q=A.current)==null||q.focus())},[$]);const E=d||v||S,{actionable:D,onFollowUp:G,prompt:Z,records:H,primaryLabel:Y,purple:ee}=kp(e,a),oe=D&&!G?vp[e.id]??h2(Z).map(q=>({label:q})):void 0,ce=e.status==="resolved"||e.status==="auto_resolved",de=ee||ce,K=q=>{p2(q)?s(q):i(e.id,q)},F=D&&!(oe&&oe.length>0)&&H.length>0?H[0]:void 0;if(de&&!D){const q=_2[e.id],T=_||!q,z=d&&!v&&!S;return n.jsxs(LR,{$divided:!0,children:[q&&n.jsx(AR,{children:n.jsx(bm,{text:q,onDone:()=>C(!0),instant:j})}),T&&!z&&n.jsxs(pa,{$saved:E,"data-saved":E||void 0,children:[n.jsxs(q2,{children:[n.jsx(V2,{"aria-hidden":"true",children:n.jsx($o,{size:16})}),n.jsx(G2,{children:n.jsx(bm,{text:"Want me to save this as a reusable workflow?",onDone:()=>N(!0),instant:j})})]}),L&&n.jsx(Y2,{children:E?n.jsx(jo,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(cn,{size:14}),children:"Saved"}):n.jsx(jo,{variant:"primary",size:"sm",onClick:()=>{P(!0),l(e)},children:"Save workflow"})})]}),T&&z&&n.jsx(I2,{})]})}return n.jsxs(XN,{$flat:k,"data-tone":ql(e),children:[D&&n.jsxs(E2,{children:[n.jsx(Gl,{children:Z}),F&&n.jsx(P2,{children:n.jsx(Yn,{size:"md",src:Ma(F.avatarSeed),name:F.title,alt:F.title})})]}),oe&&oe.length>0?n.jsx(T2,{tasks:oe}):null,n.jsxs(_p,{children:[D&&Y&&n.jsx(jo,{variant:$?"secondary":"primary",size:"sm",onClick:()=>K(Sl),children:Sl}),D&&n.jsx(jo,{variant:$?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),D&&n.jsx(U2,{variant:"tertiary",size:"sm","data-selected":$||void 0,onClick:()=>R(!0),children:"Other"}),D&&!G&&n.jsx(RR,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":M,"data-on":M||void 0,leadingArtwork:M?n.jsx(cn,{size:14}):n.jsx($o,{size:14}),onClick:()=>{d||m==null||m(e.id)},children:"Save as future workflow"})]}),D&&$&&n.jsx(NR,{children:n.jsx(L2,{ref:A,compact:!0,onSend:q=>x==null?void 0:x(q),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function PN({thread:e,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m=!1,saved:v=!1}){const x=ql(e),y=m2(e.id)||e.assessment;return n.jsxs(KN,{"data-tone":x,$expanded:i,children:[n.jsxs(QN,{$expanded:i,children:[n.jsx(Yn,{size:"md",src:mp(e.id),name:ba[e.id],alt:ba[e.id]??""}),n.jsxs(z2,{children:[n.jsx(O2,{children:g2(e)}),y&&n.jsx(F2,{children:y})]})]}),i&&n.jsx(ZN,{children:n.jsx(A2,{flat:!0,thread:e,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m,saved:v})})]})}function T2({tasks:e,interactive:a=!0}){return n.jsx(bR,{children:e.map((i,s)=>n.jsx(zN,{task:i,first:s===0,last:s===e.length-1,interactive:a},s))})}function zN({task:e,first:a,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),p=!!e.detail&&s;return n.jsxs(kR,{children:[n.jsx(_R,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(CR,{})}),n.jsxs(jR,{children:[n.jsxs(SR,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?l:void 0,onClick:p?()=>d(m=>!m):void 0,children:[n.jsx(W2,{children:e.label}),p&&n.jsx(MR,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(wn,{size:14})})]}),l&&p&&n.jsx($R,{children:e.detail})]})]})}function ON({steps:e,completed:a}){const[i,s]=g.useState(a?e.length:1);g.useEffect(()=>{if(a){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(p=>p+1),1600);return()=>clearTimeout(d)},[i,e.length,a]);const l=e.slice(0,i);return n.jsx(dR,{role:"status","aria-live":"polite",children:l.map((d,p)=>{const m=!a&&p===i-1,v=p===l.length-1;return n.jsxs(pR,{children:[n.jsxs(hR,{children:[n.jsx(xR,{$done:!m,"aria-hidden":"true",children:m?n.jsx(yR,{children:n.jsx(ct,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(cn,{size:16})}),!v&&n.jsx(fR,{})]}),n.jsxs(mR,{$last:v,children:[n.jsx(gR,{children:d.headline}),n.jsx(vR,{children:d.detail})]})]},p)})})}function FN({thread:e,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,p]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(aR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>p(m=>!m),children:[n.jsx(ct,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(sR,{children:[n.jsx(lR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(cR,{children:e.assessment})]}),n.jsx(iR,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(wn,{size:14})})]}),d&&n.jsx(ON,{steps:x2(e.id),completed:i}),!i&&!l&&n.jsx(B2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})]})}function DN({thread:e,onDecide:a}){return n.jsx(B2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})}function eu(e,a){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:k2(a,RM(e))}}function BN(e,a){const i=k2(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function WN(e,a){const i=w2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[BN(x2(e.id),e.id),...i.slice(0,l)],p=d.length;if(a.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Kf[e.id]??[]).map(k=>eu(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:p}}const m=gp[e.id],v=[(Kf[e.id]??[]).map(w=>eu(w,e.id)),((m==null?void 0:m.working)??[]).map(w=>eu(w,e.id))],x=w=>w===1&&m?m.prompt:y2[e.id]??e.recommendation,y=d.slice(0,p).map(w=>({kind:"activity",milestone:w}));return a.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(v[k]??[]).forEach(M=>y.push({kind:"activity",milestone:M})),y.push({kind:"reply",text:AM(k)})}),{items:y,reasoningCount:p}}function HN({thread:e,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:p,onCompleteRun:m,saveWorkflowFlagged:v=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=WN(e,a),M=l||e.status==="in_progress",[_,C]=g.useState(l?Math.min(1,k):M?k:w.length),[L]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),N=a.length>0||x||y?w.length:k,j=e.status==="in_progress"&&a.length>0,[S,P]=g.useState(0);g.useEffect(()=>{P(0)},[_]),g.useEffect(()=>{if(_>=N)return;const B=w[_],O=w[_-1];if((B==null?void 0:B.kind)==="question"||(B==null?void 0:B.kind)==="message"){const ue=setTimeout(()=>C(xe=>xe+1),0);return()=>clearTimeout(ue)}if((B==null?void 0:B.kind)==="reply"){if(j)return;const ue=setTimeout(()=>C(xe=>xe+1),ym);return()=>clearTimeout(ue)}if(j&&(O==null?void 0:O.kind)!=="message")return;const ae=(O==null?void 0:O.kind)==="message"?ym:tm,ge=setTimeout(()=>C(ue=>ue+1),ae);return()=>clearTimeout(ge)},[_,N,j]),g.useEffect(()=>{if(!j)return;const B=O=>{var le;if(O.key!=="t"&&O.key!=="T"||O.metaKey||O.ctrlKey||O.altKey)return;const ae=O.target instanceof Element?O.target:null;if(ae&&ae.closest('input, textarea, [contenteditable="true"]'))return;const ge=w[_-1],ue=(ge==null?void 0:ge.kind)==="activity"?((le=ge.milestone.progress)==null?void 0:le.length)??0:0;if((ge==null?void 0:ge.kind)==="activity"&&S<ue-1){P(ye=>ye+1);return}const xe=w[_];(xe==null?void 0:xe.kind)==="activity"?(C(ye=>ye+1),P(0)):m==null||m()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[j,_,S,m]);const $=w.slice(0,_),R=[];for(const B of $){if(B.kind==="question"){R.push({type:"question",text:B.text});continue}if(B.kind==="message"){R.push({type:"msg",text:B.text});continue}if(B.kind==="reply"){R.push({type:"reply",text:B.text});continue}const O=R[R.length-1];O&&O.type==="acts"?O.milestones.push(B.milestone):R.push({type:"acts",milestones:[B.milestone]})}const A=_<w.length,E=$.length>0&&$[$.length-1].kind==="activity",D=_>=N,[G,Z]=g.useState(!1);g.useEffect(()=>{if(!(D&&E&&(x||l)&&!y)){Z(!1);return}Z(!0);const B=setTimeout(()=>Z(!1),tm);return()=>clearTimeout(B)},[D,E,_,x,l,y]);const H=(x||l)&&(A||G)&&E;let Y=-1;R.forEach((B,O)=>{B.type==="acts"&&(Y=O)});const ee=[];for(const B of w){if(B.kind!=="activity"){ee.push({type:"other"});continue}const O=ee[ee.length-1];O&&O.type==="acts"?O.milestones.push(B.milestone):ee.push({type:"acts",milestones:[B.milestone]})}let oe=-1;ee.forEach((B,O)=>{B.type==="acts"&&(oe=O)});const ce=R.findIndex(B=>B.type==="acts"),de=(B,O,ae=O)=>{const ge=R[B],ue=(l||e.status==="in_progress")&&B===oe,xe=ee[B],le=ue&&xe&&xe.type==="acts"?xe.milestones:ge.milestones,ye=ue?ge.milestones.length-1:void 0;return n.jsx(S2,{milestones:le,focusIndex:ye,focusBeat:ue&&j?S:void 0,typingIndex:B===oe&&H?ge.milestones.length-1:void 0,collapsed:B<Y,hideActions:ae,running:ue,showConnectors:B!==ce,reasoning:B===ce,animateIn:!O&&!L})},K=[];for(let B=0;B<R.length;B++){const O=R[B];if(O.type==="question"){K.push({kind:"question",text:O.text});continue}if(O.type==="msg"){K.push({kind:"msg",text:O.text});continue}if(O.type==="reply"){K.push({kind:"response",gi:-1,text:O.text});continue}const ae=R[B+1];ae&&ae.type==="reply"?(K.push({kind:"response",gi:B,text:ae.text}),B++):K.push({kind:"acts",gi:B})}const q=(l||e.status==="in_progress")&&Y>=0||s,T=$.length>0,z=s||x,ne=(()=>{for(let B=K.length-1;B>=0;B--){const O=K[B];if(O.kind==="acts"||O.kind==="response"&&O.gi>=0)return B}return-1})(),U=K.findIndex(B=>B.kind==="question"),X=U===ce+1?U:-1,se=B=>B.kind==="acts"?or(R[B.gi].milestones):B.kind==="response"?or(B.gi>=0?R[B.gi].milestones:[]):or([]);return n.jsxs(n.Fragment,{children:[K.map((B,O)=>{var xe,le;const ae=O===ne?d:null;if(B.kind==="question"){if(O===X)return null;const ye=K[O-1],Ce=!!ye&&(ye.kind==="acts"||ye.kind==="response")&&O-1!==ne,Ae=O===U;return n.jsxs(nu,{children:[Ae?n.jsx(km,{thread:e,saveWorkflowFlagged:v}):n.jsx(VN,{text:B.text,animate:!L}),Ce&&n.jsx(da,{time:se(ye)})]},`q${O}`)}if(B.kind==="msg")return n.jsx(GN,{messages:[B.text],animate:!L},`m${O}`);if(B.kind==="acts"){const ye=R[B.gi].milestones,Ce=((xe=K[O+1])==null?void 0:xe.kind)==="question",Ae=de(B.gi,!1,!!ae||Ce),Ne=O===ce,Pe=ae||(Ne&&O+1===X?n.jsx(km,{thread:e,saveWorkflowFlagged:v}):null);return Ne&&Pe?n.jsxs(qR,{children:[Ae,Pe,n.jsx(da,{time:or(ye)})]},`a${O}`):n.jsxs(g.Fragment,{children:[Ae,ae&&n.jsxs(nu,{children:[ae,n.jsx(da,{time:or(ye)})]})]},`a${O}`)}const ge=B.gi>=0,ue=ge?R[B.gi].milestones:[];return n.jsxs(g.Fragment,{children:[n.jsx(Ru,{activity:ge?de(B.gi,!0):void 0,text:B.text,feedbackTime:ae||((le=K[O+1])==null?void 0:le.kind)==="question"?void 0:or(ue),showMark:!1,animateIn:!1}),ae&&n.jsxs(nu,{children:[ae,n.jsx(da,{time:or(ue)})]})]},`resp${O}`)}),n.jsx(UN,{messages:i,replying:s}),p&&ka.createPortal(T?n.jsxs(DR,{role:z?"status":"img","aria-label":s?"Ultron is replying":q?"Ultron is working":"Ultron",children:[n.jsxs(HR,{"aria-hidden":"true",children:[n.jsx(_m,{$show:q,children:n.jsx(ct,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(_m,{$show:!q,children:n.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:z?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),q&&n.jsx(WR,{children:s?"Replying…":n.jsx(O$,{})})]}):null,p),ne<0&&d]})}function Ru({activity:e,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:p=!0}){const m=!!(e||i||s);return n.jsxs(UR,{children:[m&&n.jsxs(VR,{$animate:p,children:[e,i,s&&n.jsx(da,{time:s})]}),d&&n.jsx(GR,{$animate:p,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function tu(){return[{icon:"clock",headline:"Reviewed your message"}]}function UN({messages:e,replying:a=!1}){return!e.length&&!a?null:n.jsx(FR,{children:e.map((i,s)=>i.role==="operator"?n.jsx(K2,{children:n.jsx(Z2,{children:n.jsx(X2,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(Ru,{body:n.jsx(qN,{}),feedbackTime:or(tu()),showMark:!1},s):n.jsx(Ru,{activity:n.jsx(S2,{milestones:tu(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:or(tu()),showMark:!1},s))})}function qN(){return n.jsx(I2,{})}function I2(){return n.jsxs(pa,{children:[n.jsxs(q2,{children:[n.jsx(V2,{"aria-hidden":"true",children:n.jsx($o,{size:16})}),n.jsx(G2,{children:"Workflow saved for future use."})]}),n.jsx(Y2,{children:n.jsx(jo,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(Fl,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function VN({text:e,animate:a=!0}){return n.jsx(IR,{$animate:a,children:e})}function km({thread:e,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=kp(e,0),l=vp[e.id]??h2(i).map(p=>({label:p})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(ER,{"data-tone":ql(e),children:[n.jsxs(E2,{children:[n.jsx(Gl,{children:i}),a?n.jsx(_r,{content:"Saved as workflow",children:n.jsx(PR,{"aria-label":"Saved as workflow",children:n.jsx($o,{size:18})})}):d&&n.jsx(P2,{children:n.jsx(Yn,{size:"md",src:Ma(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(T2,{tasks:l,interactive:!1}):null]})}function GN({messages:e,animate:a=!0}){return e.length?n.jsx(zR,{children:e.map((i,s)=>n.jsx(K2,{children:n.jsx(Z2,{$animate:a,children:n.jsx(X2,{children:i})})},s))}):null}const YN=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${e=>e.$expanded?"transparent":"var(--color-bg-primary)"};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?"":`
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }`}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     actively-working (in_progress / monitoring) → blue, everything else
     (medium / low / none) → slate. Only collapsed cards take the flat tonal
     fill; the expanded event card stays transparent. */
  &[data-tone='orange'] { ${e=>e.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${e=>e.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${e=>e.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${e=>e.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }
`,KN=f.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?He`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:He`
        background: var(--color-bg-primary);
        border: 1px solid transparent;
        &:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-below-md);
        }
      `}

  /* Collapsed cards carry the semantic tonal fill (shared with the feed list
     cards + sidebar dots); the expanded front card stays on the white panel. */
  &[data-tone='orange'] { ${e=>e.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${e=>e.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${e=>e.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${e=>e.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,QN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&He`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,ZN=f.div`
  padding: var(--space-4);
`,XN=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  /* Soft lift on hover — same treatment as the save-as-workflow offer card. */
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }

  /* Flat: the card is embedded inside another surface (the deck's combined
     card), so it drops its own border / shadow / fill / padding and reads as a
     plain block of the host card. */
  ${e=>e.$flat&&He`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,E2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,P2=f.span`
  flex-shrink: 0;
  display: inline-flex;
`,JN=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,eR=f(ze)`
  flex-shrink: 0;
  color: var(--color-content-inverse-tertiary);
  transition: background-color var(--duration-base) var(--ease-out),
              color var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-content-primary);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover { transform: none; }
  }
`,tR=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`,z2=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,O2=f.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,F2=f.span`
  font-family: var(--font-sans);
  /* Matches the title size (14px) — one unified header font, per the design. */
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nR=f.div`
  overflow: hidden;
`,rR=f.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,oR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,D2=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,aR=f.div`
  all: ${e=>e.$interactive?"unset":"revert"};
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,iR=f.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;f(D2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const sR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,lR=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,cR=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,dR=f.div`
  display: flex;
  flex-direction: column;
`,uR=$e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,pR=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${uR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,fR=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,mR=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,gR=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,vR=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,xR=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,yR=f.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,B2=f(ze)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,wR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,bR=f.div`
  display: flex;
  flex-direction: column;
`,Nl="var(--space-8)",kR=f.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,_R=f.div`
  position: relative;
  flex-shrink: 0;
  width: var(--space-5);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: var(--color-slate-border-tertiary);
  }
  /* Clip the thread to the dot's centre (half the header height) at the ends. */
  &[data-first]::before { top: calc(${Nl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Nl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,CR=f.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Nl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,jR=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,SR=f.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Nl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,W2=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,MR=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,$R=f.p`
  margin: 0;
  padding-bottom: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-content-disabled);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Gl=f.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,H2=$e`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,_p=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${H2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NR=f.div`
  animation: ${H2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jo=f(ze)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Primary pill rides the inverse surface token so it flips with the theme
     (dark fill in light mode, light fill in dark mode). !important is needed to
     beat Alloy's higher-specificity dark-scope rule, which otherwise forces the
     fill back to the page surface token. */
  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Disabled primary (the settled "Saved" state) drops to the neutral disabled
     surface + muted content, rather than a dimmed inverse fill. */
  &[data-variant='primary']:disabled {
    background: var(--color-bg-disabled) !important;
    color: var(--color-content-disabled) !important;
  }

  /* Secondary pill rides the neutral secondary surface with primary content — a
     quieter fill than the inverse-primary CTA. */
  &[data-variant='secondary'] {
    background: var(--color-bg-secondary) !important;
    color: var(--color-content-primary) !important;
  }

  /* Outlined (secondary) pills get a strong dark border. */
  &[data-variant='tertiary'] {
    border-color: var(--color-content-primary);
  }
`,U2=f(ze)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Selected: settles to an outlined chip — primary surface, selected border,
     primary content — so the picked "Other" reads as the active choice without
     the heavy inverse fill. */
  &[data-selected] {
    border-style: solid;
    background: var(--color-bg-primary) !important;
    color: var(--color-content-primary) !important;
    border-color: var(--color-border-selected);
  }
`,RR=f(ze)`
  ${e=>e.$trailing&&"margin-left: auto;"}
  border-radius: var(--radius-full);
  /* Match the Yes/No choices' horizontal padding so the pill sits in the same
     rhythm as the rest of the decision row. */
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  /* Default: a quiet outlined chip — the ghost fill plus a hairline opaque border
     so the affordance reads as a bordered control even before it's toggled on. */
  border: 1px solid var(--color-border-opaque);

  /* Toggled on: a mono, outlined chip — white surface with the border warming to
     the selected ring (color-only change, so the label never shifts), content in
     the primary mono tone. The leading glyph swaps to a check in the markup. */
  &[data-on] {
    background: var(--color-bg-primary);
    color: var(--color-content-primary);
    border-color: var(--color-border-selected);
  }
`,LR=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,AR=f.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,pa=f.div`
  align-self: stretch;
  /* Extra air above the card, on top of the turn's 8px column gap — the card
     sits 16px below the resolution recap it follows. */
  margin-top: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  /* Once the play is saved the offer card goes fully inert (its button is
     disabled) — no drop shadow and no hover lift. Every other state (the live
     offer, the confirmation card) keeps the small lift shadow. */
  box-shadow: ${e=>e.$saved?"none":"var(--shadow-below-low)"};
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${e=>!e.$saved&&He`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,q2=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,V2=f.span`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-purple-content-primary);
  transition: color var(--duration-base) var(--ease-out);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    /* Aurora gradient sampled from the design asset (Rectangle 3.svg) — raw hex
       stops because this decorative art has no token equivalent. */
    background:
      radial-gradient(90% 90% at 88% 4%, #F1DB73 0%, rgba(241, 219, 115, 0) 60%),
      radial-gradient(90% 90% at 90% 96%, #77BEEA 0%, rgba(119, 190, 234, 0) 60%),
      radial-gradient(75% 75% at 50% 45%, #3BBF81 0%, rgba(59, 191, 129, 0) 100%),
      #F8E9E0;
    opacity: 0;
    transition: opacity var(--duration-base) var(--ease-out);
  }

  /* Keep the glyph above the gradient overlay. */
  & > svg { position: relative; z-index: 1; }

  /* The hover cross-fade (glyph flips white, aurora gradient fades in) is
     suppressed once the card is saved — a settled card no longer reacts. */
  ${pa}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${pa}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${pa}[data-saved] & { color: var(--color-content-disabled); }
`,G2=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${pa}[data-saved] & { color: var(--color-content-disabled); }
`,Y2=f(_p)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,TR=$e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,IR=f.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${TR} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ER=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Tight lead between the settled prompt and its plan steps — the answered card
     reads as a compact record, so the heading sits close to its steps. */
  gap: var(--space-2);
  /* Tighter vertical padding (12px top and bottom) now the action buttons are
     gone, so the settled record doesn't trail dead space around its content. */
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: none;
  /* No entrance animation — the card was already on screen as the live decision,
     so answering settles it in place rather than popping it back in. */

  /* Dim the prompt and plan labels to the settled/disabled tone. */
  ${Gl} { color: var(--color-content-disabled); }
  ${W2} { color: var(--color-content-disabled); }
`,PR=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,zR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,K2=f.div`
  display: flex;
  justify-content: flex-end;
`,Cp=$e`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,Q2=$e`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,OR=$e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Z2=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Cp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,X2=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,FR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const DR=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${Q2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,BR=$e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,WR=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${BR} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HR=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,_m=f.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade even
     when one renders at a larger size to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,UR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Vl}
`,nu=f.div`
  display: contents;
  ${Vl}
`,qR=f.div`
  display: flex;
  flex-direction: column;
  ${Vl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,VR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${OR} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GR=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${Q2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Cp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${Cp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;f.div`
  --flag-accent: var(--color-orange-content-secondary);
  --flag-badge-bg: var(--color-orange-bg-tertiary);

  display: flex;
  flex-direction: column;
  margin: var(--space-1) 0;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);

  &[data-tone='positive'] {
    --flag-accent: var(--color-green-content-secondary);
    --flag-badge-bg: var(--color-green-bg-tertiary);
  }
  &[data-tone='neutral'] {
    --flag-accent: var(--color-slate-content-secondary);
    --flag-badge-bg: var(--color-slate-bg-tertiary);
  }
`;f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;f.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;f.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;const YR={"Coverage Recovery":Yr,"Fill Optimization":Yr,Recruiting:Yr,Users:Yr,Attendance:Ln,"Attendance Recovery":Ln,"Time Off":Ln,Scheduling:Ln,Compliance:Ti,Onboarding:Co,"Payroll Operations":G0,Invoicing:Zr,Reporting:Cf,"Marketplace Optimization":Cf,Engagement:_i,"Autonomous Operations":El},KR=e=>YR[e]??El,Cm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],QR=2800,ZR=200,XR=6,JR=2200,yi=520;function eL({onDetectRisk:e,deckActive:a=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const p=g.useRef(new Set),[m,v]=g.useState(!1),x=g.useRef(null);g.useEffect(()=>{const $=setInterval(()=>l(R=>(R+1)%Cm.length),QR);return()=>clearInterval($)},[]);const y=Math.min(XR,Js.length),[w,k]=g.useState([]),M=g.useRef(0),_=g.useRef(Js.filter($=>!$.risk)),C=g.useRef(Js.filter($=>$.risk)),L=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),N=()=>5+Math.floor(Math.random()*5),j=()=>{const $=L.current,R=C.current;if(R.length>0&&$.sinceRisk>=$.gap)return $.sinceRisk=0,$.gap=N(),R[$.risk++%R.length];$.sinceRisk+=1;const A=_.current;return A.length>0?A[$.routine++%A.length]:R[$.risk++%R.length]},S=$=>$.risk?"risk":Math.random()<.28?"action":"none",P=g.useRef(null);return g.useEffect(()=>{if(Js.length===0){k([]);return}if(a)return;L.current={routine:0,risk:0,sinceRisk:0,gap:N()},M.current=0;const $=Array.from({length:y},()=>{const E=j();return{key:M.current++,event:E,phase:"in",outcome:S(E),resolved:!0}});if($.length>0){const E=$[$.length-1];E.resolved=!1,P.current={key:E.key,event:E.event,outcome:E.outcome}}else P.current=null;k($);const R=[],A=setInterval(()=>{var H;const E=j(),D=M.current++,G=S(E),Z=P.current;Z&&Z.outcome==="risk"&&(v(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>v(!1),2800),p.current.has(Z.event.id)||(p.current.add(Z.event.id),(H=d.current)==null||H.call(d,Z.event))),P.current={key:D,event:E,outcome:G},k(Y=>{const ee=Y.filter(de=>de.phase!=="leaving"),oe=ee.length>=y?ee[0].key:null;return[...Y.map(de=>de.key===oe?{...de,phase:"leaving"}:Z&&de.key===Z.key&&!de.resolved?{...de,resolved:!0}:de),{key:D,event:E,phase:"entering",outcome:G,resolved:!1}]}),R.push(setTimeout(()=>{k(Y=>Y.map(ee=>ee.key===D?{...ee,phase:"in"}:ee))},40)),R.push(setTimeout(()=>{k(Y=>Y.filter(ee=>ee.phase!=="leaving"))},yi))},JR);return()=>{clearInterval(A),R.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,a]),n.jsxs(tL,{children:[n.jsxs(nL,{children:[n.jsx(rL,{children:n.jsx(ct,{mark:"circle",size:ZR,tone:"auto",state:"active",coreGradient:m,"aria-label":"Ultron"})}),n.jsx(oL,{children:"Ultron"}),n.jsx(aL,{role:"status","aria-live":"polite",children:n.jsxs(sL,{children:[n.jsx(lL,{children:Cm[s]}),n.jsxs(cL,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),a?n.jsx(uL,{children:i},"deck"):w.length>0&&n.jsx(dL,{"aria-label":"Live event feed",children:w.map($=>{const R=KR($.event.capability);return n.jsx(pL,{"data-phase":$.phase,"aria-hidden":$.phase==="leaving"||void 0,children:n.jsx(hL,{children:n.jsxs(fL,{"data-outcome":$.resolved?$.outcome:"pending",children:[n.jsxs(mL,{children:[n.jsx(gL,{"aria-hidden":"true",children:n.jsx(R,{size:16})}),n.jsxs(vL,{children:[n.jsx(kL,{children:$.event.capability}),n.jsx(_L,{children:$.event.title})]})]}),n.jsx(xL,{children:$.resolved?$.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(yL,{children:"Risk detected"})]}):$.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(bL,{children:"Action required"})]}):n.jsx(wL,{children:"No action needed"}):n.jsx(ct,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},$.key)})},"feed")]})}const tL=f.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-10) var(--space-6) 0;
  text-align: center;
  font-family: var(--font-sans);
`,jp=$e`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,nL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${jp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rL=f.div`
  display: grid;
  place-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary, rgba(70, 108, 255, 0.06)) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* Canvas sits above the bloom. */
  & > canvas {
    position: relative;
    z-index: 1;
  }

  @media (max-height: 640px), (max-width: 560px) {
    & > canvas {
      width: 168px !important;
      height: 168px !important;
    }
  }
`,oL=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,aL=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,iL=$e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,sL=f.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${iL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,J2=$e`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,cL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${J2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,dL=f.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 62%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 62%, transparent 100%);
  /* Rises in just after the hero (slight stagger) so the orbit leads and the
     list follows on the landing's entrance. */
  animation: ${jp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,uL=f.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${jp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pL=f.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${yi}ms var(--ease-out, ease),
    opacity ${yi}ms var(--ease-out, ease),
    transform ${yi}ms var(--ease-out, ease);

  &[data-phase='entering'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.92) translateY(var(--space-2));
  }

  &[data-phase='leaving'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity ${yi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,hL=f.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,fL=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  /* The feed is an ambient, passive read-out — the rows recede at a quiet resting
     opacity and don't respond to the cursor (no hover brighten, no interaction). */
  opacity: 0.5;

  /* Risk signals carry a faint orange wash once resolved so they read a touch
     hotter than routine ones (the loader + routine states stay neutral). */
  &[data-outcome='risk'] {
    background: var(--color-orange-bg-tertiary, var(--color-bg-secondary));
  }
`,mL=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,gL=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-slate-content-tertiary);

  [data-outcome='risk'] & {
    background: var(--Alloy-orange-150);
    color: var(--color-orange-content-tertiary);
  }
`,vL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,xL=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;f.span`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;

  & > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-content-tertiary);
    animation: ${J2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const yL=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,wL=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,bL=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,kL=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,_L=f.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,CL=5e3,jL=5,vl=320,SL=e=>e.status==="needs_approval"||e.status==="recommended";function ML({threads:e,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:p,savedWorkflowIds:m,onReveal:v,onClose:x}){const[y]=g.useState(()=>e.filter(SL).map((R,A)=>({t:R,index:A})).sort((R,A)=>wa[R.t.severity]-wa[A.t.severity]||R.index-A.index).slice(0,jL).map(({t:R})=>R.id)),[w,k]=g.useState(1),[M,_]=g.useState(new Set),[C,L]=g.useState(new Set),N=g.useRef(new Map);g.useEffect(()=>{if(w>=y.length)return;const R=setTimeout(()=>k(A=>A+1),CL);return()=>clearTimeout(R)},[w,y.length]),g.useEffect(()=>{const R=A=>{A.key==="Escape"&&x()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[x]),g.useEffect(()=>{const R=N.current;return()=>{R.forEach(A=>clearTimeout(A))}},[]);const j=y.findIndex(R=>!M.has(R));g.useEffect(()=>{if(y.length>0&&j===-1){const R=setTimeout(x,260);return()=>clearTimeout(R)}},[j,y.length,x]);const S=Math.max(w,j+1);g.useEffect(()=>{y.slice(0,S).forEach(R=>v==null?void 0:v(R))},[S]);const P=(R,A)=>{L(D=>new Set(D).add(R.id));const E=setTimeout(()=>{L(D=>{const G=new Set(D);return G.delete(R.id),G}),_(D=>new Set(D).add(R.id)),N.current.delete(R.id),i(R.id,A)},vl);N.current.set(R.id,E)},$=y.length-M.size;return n.jsxs($L,{role:"region","aria-label":"New cases",children:[n.jsxs(RL,{children:[n.jsx(Qt,{children:"Needs your decision"}),n.jsx(_a,{children:$}),n.jsx(LL,{}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:n.jsx(Ci,{size:16})})]}),n.jsx(NL,{children:n.jsx(AL,{children:y.slice(0,S).map((R,A)=>{if(M.has(R))return null;const E=e.find(D=>D.id===R);return E?n.jsx(IL,{"data-exiting":C.has(R)||void 0,children:n.jsx(PN,{thread:E,stage:a[R]??0,expanded:A===j,onAction:(D,G)=>P(E,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:p.includes(R),saved:m.includes(R)})},R):null})})})]})}const $L=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,NL=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,RL=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,LL=f.div`
  flex: 1;
`,AL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,TL=$e`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,IL=f.div`
  animation: ${TL} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${vl}ms var(--ease-out, ease),
    transform ${vl}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${vl}ms linear;
    &[data-exiting] { transform: none; }
  }
`,EL={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},jm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},PL=["new","working","done"],zL=280;function OL({threads:e,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:p,onDecide:m,onAction:v,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:M,savedWorkflowIds:_,onSend:C,replyingIds:L,onStop:N,onClose:j,onDetectRisk:S,onRevealNew:P}){const[$,R]=g.useState(!1),A=()=>{$||(R(!0),window.setTimeout(()=>{R(!1),j()},zL))},[E,D]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){D(!1);return}const O=ae=>{if(ae.key!=="t"&&ae.key!=="T"||ae.metaKey||ae.ctrlKey||ae.altKey)return;const ge=ae.target instanceof Element?ae.target:null;ge&&ge.closest('input, textarea, [contenteditable="true"]')||D(ue=>!ue)};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[i]);const G=(O,ae)=>(O.t.status==="analyzing"?1:0)-(ae.t.status==="analyzing"?1:0)||wa[O.t.severity]-wa[ae.t.severity]||O.index-ae.index,Z=e.map((O,ae)=>({t:O,index:ae})).filter(({t:O})=>EL[i].includes(O.status)).sort(G).map(({t:O})=>O.id),[H,Y]=g.useState(()=>p??null),ee=g.useRef({}),oe=g.useRef(null),ce=O=>{var ae;O==="Other"&&((ae=oe.current)==null||ae.focus()),y(O)},de=g.useRef(null),K=g.useRef(null),[F,q]=g.useState(null),T=g.useRef(void 0);g.useEffect(()=>{var O;if(T.current===void 0){T.current=p;return}!p||p===T.current||(T.current=p,Y(p),(O=ee.current[p])==null||O.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const z=PL.includes(i),ne=z?p&&Z.includes(p)?p:Z[0]??null:null;g.useEffect(()=>{var _e;const O=de.current,ae=K.current;if(!O||!ae)return;const ue=((_e=window.matchMedia)==null?void 0:_e.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",xe=160;let le=!0,ye=O.scrollHeight;const Ce=()=>{le=O.scrollHeight-O.scrollTop-O.clientHeight<=xe};O.addEventListener("scroll",Ce,{passive:!0});let Ae=0;const Ne=()=>{Ae=performance.now()};O.addEventListener("pointerdown",Ne,{passive:!0});const Pe=new ResizeObserver(()=>{const Ue=O.scrollHeight,Ge=performance.now()-Ae<500;Ue>ye+1&&le&&!Ge&&O.scrollTo({top:Ue,behavior:ue}),ye=Ue});return Pe.observe(ae),()=>{O.removeEventListener("scroll",Ce),O.removeEventListener("pointerdown",Ne),Pe.disconnect()}},[ne,i]),g.useEffect(()=>{if(!z||!ne)return;const O=de.current;if(!O)return;const ae=()=>O.scrollTo({top:O.scrollHeight,behavior:"auto"}),ge=requestAnimationFrame(ae),ue=[80,240,480].map(xe=>window.setTimeout(ae,xe));return()=>{cancelAnimationFrame(ge),ue.forEach(clearTimeout)}},[ne,z]);const U=ne?e.find(O=>O.id===ne)??null:null,X=!!U&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(U.status)||u2(U)),se=X&&U?U:null,B=!(X&&U&&["needs_approval","recommended","unresolved","monitoring"].includes(U.status))||!!(U!=null&&U.analysisResult);return i==="live"?n.jsx(Sm,{$static:!0,children:n.jsx(eL,{onDetectRisk:S,deckActive:E,deck:E?n.jsx(ML,{threads:e,stageById:a,onAction:v,onRefinement:ce,onSaveWorkflow:w,onToggleSaveWorkflow:M,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:P,onClose:()=>D(!1)}):null})},"live"):n.jsxs(Sm,{$closing:$,children:[n.jsx(BL,{ref:de,children:z?n.jsx(Mm,{ref:K,children:ne===null?n.jsx($m,{role:"status",children:jm[i]}):(()=>{const O=e.find(Ce=>Ce.id===ne);if(!O)return null;const ae=O.status==="analyzing",ge=O.status==="resolved"||O.status==="auto_resolved",ue=O.status==="in_progress",xe=O.status==="needs_approval"||O.status==="recommended",le=O.status==="monitoring",ye=O.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(VL,{children:n.jsx(wm,{thread:O,stage:a[O.id]??0,expanded:ue?!1:B,detachActionable:X,detachAnalyzing:ae,detachTrail:ge||ye,onToggle:()=>{},onClose:A,onDecide:m,onAction:v,onRefinement:ce,onSaveWorkflow:w},O.id)}),(ae||xe||ue||ge||le||ye)&&n.jsx(HN,{thread:O,outbound:l[O.id]??[],chat:d[O.id]??[],replying:L.includes(O.id),analyzing:ae,footSlot:F,onCompleteRun:()=>x(O.id),saveWorkflowFlagged:k.includes(O.id)||_.includes(O.id),actionCard:se&&se.id===O.id?n.jsx(A2,{thread:se,stage:a[se.id]??0,onAction:v,onRefinement:ce,onSaveWorkflow:w,saveIntent:k.includes(se.id),onToggleSaveWorkflow:M,saved:_.includes(se.id),savedConversationally:(d[se.id]??[]).some(Ce=>Ce.kind==="workflow_saved"),onSend:Ce=>C(se.id,Ce),replying:L.includes(se.id),onStop:()=>N(se.id)},`action-${se.id}`):void 0},O.id)]})})()}):n.jsx(Mm,{ref:K,children:Z.length===0?n.jsx($m,{role:"status",children:jm[i]}):Z.map(O=>{const ae=e.find(ge=>ge.id===O);return ae?n.jsx(qL,{ref:ge=>{ee.current[O]=ge},children:n.jsx(wm,{thread:ae,stage:a[O]??0,expanded:H===O,onToggle:()=>Y(ge=>ge===O?null:O),onDecide:m,onAction:v,onRefinement:y,onSaveWorkflow:w})},O):null})})}),z&&ne&&U&&n.jsx(WL,{children:n.jsxs(HL,{children:[n.jsx(UL,{ref:q}),U.status==="analyzing"&&!s.includes(U.id)&&n.jsx(DN,{thread:U,onDecide:m}),n.jsx(L2,{ref:oe,onSend:O=>C(ne,O),working:L.includes(ne),onStop:()=>N(ne),placeholder:eM(U.status,L.includes(ne))},`composer-${ne}`)]})})]},"feed")}const FL=$e`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,DL=$e`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Sm=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Cancel the shell's ContentMain bottom padding for Ultron only: this page
     owns its full height and snaps the action dock / bottom fade to the very
     foot. Reclaim the 32px the padding carves off the content box, then pull the
     margin box back up by the same amount so it adds no scroll overflow. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
  transform-origin: 50% 30%;
  will-change: opacity, transform;

  ${e=>!e.$static&&!e.$closing&&He`
    animation: ${DL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&He`
    animation: ${FL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,BL=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* No top padding so the pinned event card sits flush at the top (0px); the
     sides + bottom keep the feed's reading inset. */
  padding: 0 var(--space-5) var(--space-5);
  scrollbar-gutter: stable;

  /* Bottom dissolve so thread content fades into the dock / page foot as it
     scrolls out. The top stays solid: the pinned event card's bg-primary panel
     (see StickyEvent) now covers the space above it, so content scrolling up
     disappears behind that surface rather than needing a top fade. */
  --scroll-fade: var(--space-12);
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--scroll-fade)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--scroll-fade)), transparent 100%);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,WL=f.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,HL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,UL=f.div`
  display: flex;
  &:empty { display: none; }
`,Mm=f.div`
  display: flex;
  flex-direction: column;
  /* Inter-group spacing — the gap between conversation turns (event card, activity
     trail, sent bubbles, offer). Kept tight (space-2) so the thread reads as one
     continuous conversation rather than widely-spaced blocks. */
  gap: var(--space-2);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: var(--space-4);
`,qL=f.div`
  scroll-margin-top: var(--space-5);
`,VL=f.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--color-bg-primary);

  /* The pinned header reads as a neutral surface in every tone/state — the
     colored status fill belongs to the scrolling list cards, not the focused
     event header, so flatten any tonal background to the page surface here. */
  & > div[data-tone] {
    background-color: var(--color-bg-primary);
  }

  /* Soft gradient just below the pinned card so content scrolling up dissolves
     into the page background instead of colliding with the card's bottom edge.
     Rides with the sticky card and sits above the scrolling content. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: var(--space-6);
    background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
    pointer-events: none;
  }
`,$m=f.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function GL({messages:e,replying:a,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,a]);const p=s.trim().length>0&&!a,m=e.length===0,v=()=>{const x=s.trim();!x||a||(i(x),l(""))};return n.jsxs(YL,{children:[n.jsx(KL,{children:m?n.jsxs(QL,{children:[n.jsx(ZL,{"aria-hidden":"true",children:n.jsx(ct,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(XL,{children:"New page"}),n.jsx(JL,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(eA,{children:[e.map((x,y)=>n.jsx(Nm,{"data-from":x.role,children:n.jsx(tA,{"data-from":x.role,children:x.text})},y)),a&&n.jsx(Nm,{"data-from":"ultron",children:n.jsxs(rA,{"aria-label":"Ultron is replying",children:[n.jsx(ru,{}),n.jsx(ru,{}),n.jsx(ru,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(oA,{children:n.jsxs(aA,{onSubmit:x=>{x.preventDefault(),v()},children:[n.jsx(iA,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),v())}}),n.jsx(sA,{children:n.jsx(Ca,{state:p?"ready":"disabled-invalid",onSend:v})})]})})]})}const YL=f.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,KL=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,QL=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,ZL=f.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,XL=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,JL=f.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,eA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Nm=f.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,tA=f.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  /* Outbound (operator) — slate bubble, right side. */
  &[data-from='operator'] {
    max-width: 80%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose. */
  &[data-from='ultron'] {
    max-width: 100%;
  }
`,nA=$e`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,rA=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,ru=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${nA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oA=f.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,aA=f.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }
`,iA=f.textarea`
  flex: 1;
  min-width: 0;
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-disabled); }
`,sA=f.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,lA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Rm(e,a){const i=lA[e];return i?a==="done"?i.done:a==="new"?i.new:i.working:e}const Lu=32;function cA({onNew:e}){return n.jsxs(dA,{children:[n.jsx(uA,{"aria-hidden":"true",children:n.jsx(ct,{mark:"circle",size:Lu,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(pA,{children:"Ultron"}),n.jsx(hA,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),e==null||e()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),e==null||e())},children:n.jsx(No,{size:16})})]})}const dA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,uA=f.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Lu}px;
  height: ${Lu}px;
`,pA=f.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,hA=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-md);
  color: var(--color-content-secondary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default),
              color var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,fA=45;function mA({text:e,className:a}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let p=0;const m=setInterval(()=>{p+=1,s(p),p>=e.length&&clearInterval(m)},fA);return()=>clearInterval(m)},[e]);const l=i>=e.length;return n.jsxs(gA,{className:a,children:[e.slice(0,i),!l&&n.jsx(xA,{"aria-hidden":"true",children:"|"})]})}const gA=f.span`
  white-space: nowrap;
`,vA=$e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,xA=f.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${vA} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,ou=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function yA(){const e=g.useMemo(()=>["All",...Array.from(new Set(ou.map(l=>l.tag)))],[]),[a,i]=g.useState("All"),s=a==="All"?ou:ou.filter(l=>l.tag===a);return n.jsx(wA,{children:n.jsxs(bA,{children:[n.jsxs(kA,{children:[n.jsx(ct,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(_A,{children:[n.jsx(CA,{children:"Memory"}),n.jsx(jA,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(SA,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(MA,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),n.jsx($A,{children:s.map((l,d)=>n.jsx(NA,{children:n.jsxs(RA,{children:[n.jsx(LA,{children:l.title}),n.jsx(AA,{children:l.detail})]})},d))})]})})}const wA=f.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,bA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,kA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,_A=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,CA=f.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,jA=f.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,SA=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,MA=f.button`
  flex-shrink: 0;
  padding: var(--space-1) var(--space-3);
  border: 1px solid ${e=>e.$active?"var(--color-content-primary)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  background: ${e=>e.$active?"var(--color-content-primary)":"var(--color-bg-primary)"};
  color: ${e=>e.$active?"var(--color-content-inverse)":"var(--color-content-secondary)"};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              border-color var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover {
    border-color: ${e=>e.$active?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  }
`,$A=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,NA=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,RA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,LA=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,AA=f.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;f.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;f.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const Au=[{id:"employees",label:"Employees",icon:n.jsx(Yr,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(Ln,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(Zu,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(Co,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Ti,{size:16})}];f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;f.span`
  color: var(--color-content-secondary);
`;function TA({collectionId:e}){const a=Au.find(i=>i.id===e)??Au[0];return n.jsxs(IA,{children:[n.jsxs(EA,{children:[n.jsx(PA,{children:a.label}),n.jsx(_a,{children:"Account database"})]}),n.jsxs(zA,{role:"status",children:[n.jsx(OA,{"aria-hidden":"true",children:n.jsx(H0,{size:24})}),n.jsxs(FA,{children:[a.label," — demo stub"]}),n.jsxs(DA,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const IA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-4);
  @media (min-width: 1001px) {
    padding-left: 120px;
    padding-right: 120px;
  }
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,EA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,PA=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,zA=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,OA=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,FA=f.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,DA=f.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Lm=72,Am=.58;function Rn(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Tm(e,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const m=d.slice(1),v=parseInt(m.length===3?m.split("").map(x=>x+x).join(""):m,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:s}const BA=e=>{const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function ev({links:e=0}){const a=g.useRef(null),i=g.useRef(0),s=g.useRef(e);return s.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const p=Math.min(2,window.devicePixelRatio||1);let m=0,v=0;const x=()=>{m=l.clientWidth,v=l.clientHeight,l.width=Math.max(2,Math.round(m*p)),l.height=Math.max(2,Math.round(v*p)),d.setTransform(p,0,0,p,0,0)};x();const y=new ResizeObserver(x);y.observe(l);const w=Tm(d,l,"--color-bg-primary","255,255,255"),k=BA(w)<.5,M=Tm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Lm},($,R)=>{const A=R%3===0,E=A?1-.5*Math.pow(Rn(R*3.1),1.6):Rn(R*3.1),D=A?.5*Math.pow(Rn(R*5.7),1.6):Rn(R*5.7);return{bx:E,by:D,vx:(Rn(R*7.3)-.5)*.008,vy:(Rn(R*9.9)-.5)*.008,wA:6+Rn(R*4.7)*10,wS:.25+Rn(R*6.1)*.5,wP:Rn(R*8.2)*6.2832,r:.8+Rn(R*2.3)*1.6,twS:.8+Rn(R)*1.4,twP:Rn(R*11.4)*6.2832}}),C=($,R)=>{const A=(($.bx+$.vx*R)%1+1)%1,E=(($.by+$.vy*R)%1+1)%1,D=A-.5,G=Math.abs(D)*2,Z=G<1e-4?1:(Am+(1-Am)*G)/G;return{x:(.5+D*Z)*m+Math.cos(R*$.wS+$.wP)*$.wA,y:E*v+Math.sin(R*$.wS*.8+$.wP)*$.wA}},L=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),N=$=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,m,v);const R=_.map(A=>C(A,$));for(let A=0;A<Lm;A++){const E=_[A],D=.35+.65*(.5+.5*Math.sin($*E.twS+E.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+M+","+D*G*(k?.55:.42)+")",d.beginPath(),d.arc(R[A].x,R[A].y,E.r*(.7+.3*D),0,6.2832),d.fill()}};if(L)return i.current=s.current,N(1.15),()=>y.disconnect();N(1.15);let j=0;const S=performance.now(),P=$=>{N(1.15+($-S)/1e3),j=requestAnimationFrame(P)};return j=requestAnimationFrame(P),()=>{cancelAnimationFrame(j),y.disconnect()}},[]),n.jsx(WA,{"aria-hidden":"true",children:n.jsx("canvas",{ref:a})})}const WA=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  --aurora-mint: hsl(170 72% 64%);
  --aurora-sky: hsl(202 82% 64%);
  --aurora-blue: hsl(228 84% 64%);
  --aurora-violet: hsl(252 78% 64%);
  --aurora-pink: hsl(330 82% 68%);
  --aurora-peach: hsl(32 88% 66%);
  --aurora-core: 18%;
  --aurora-rim: 12%;

  background:
    radial-gradient(34% 30% at 40% 24%, color-mix(in srgb, var(--aurora-mint) var(--aurora-core), transparent), transparent 72%),
    radial-gradient(44% 40% at 52% 40%, color-mix(in srgb, var(--aurora-sky) var(--aurora-core), transparent), transparent 74%),
    radial-gradient(42% 44% at 36% 60%, color-mix(in srgb, var(--aurora-blue) var(--aurora-core), transparent), transparent 74%),
    radial-gradient(36% 40% at 26% 42%, color-mix(in srgb, var(--aurora-violet) var(--aurora-rim), transparent), transparent 72%),
    radial-gradient(30% 34% at 70% 32%, color-mix(in srgb, var(--aurora-pink) var(--aurora-rim), transparent), transparent 70%),
    radial-gradient(26% 28% at 68% 62%, color-mix(in srgb, var(--aurora-peach) var(--aurora-rim), transparent), transparent 70%),
    radial-gradient(120% 90% at 100% 0%, var(--color-bg-secondary) 0%, transparent 55%);

  @media (prefers-color-scheme: dark) {
    html:not(.light) & {
      --aurora-mint: hsl(170 70% 56%);
      --aurora-sky: hsl(202 78% 56%);
      --aurora-blue: hsl(228 80% 58%);
      --aurora-violet: hsl(252 74% 58%);
      --aurora-pink: hsl(330 76% 60%);
      --aurora-peach: hsl(32 82% 58%);
      --aurora-core: 14%;
      --aurora-rim: 9%;
    }
  }
  html.dark & {
    --aurora-mint: hsl(170 70% 56%);
    --aurora-sky: hsl(202 78% 56%);
    --aurora-blue: hsl(228 80% 58%);
    --aurora-violet: hsl(252 74% 58%);
    --aurora-pink: hsl(330 76% 60%);
    --aurora-peach: hsl(32 82% 58%);
    --aurora-core: 14%;
    --aurora-rim: 9%;
  }

  & > canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`,HA=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,el=f.div`
  position: absolute;
  top: 0;
  left: 0;

  /* Holographic pastel light sampled from the reference art — decorative glow,
     not UI color, so no semantic token exists for these hues. The rAF loop
     writes only the wandering hue numbers (--glow-ha/--glow-hb cool stops,
     --glow-hc warm pink→peach rim); saturation and lightness are theme knobs
     here so dark mode deepens the light instead of branching in JS. */
  --glow-sat: 86%;
  --glow-lit: 66%;
  --glow-rim-lit: 72%;

  background: radial-gradient(
    circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
    hsl(var(--glow-ha, 200) var(--glow-sat) var(--glow-lit) / 0.9),
    hsl(var(--glow-hb, 245) var(--glow-sat) var(--glow-lit) / 0.8) 62%,
    hsl(var(--glow-hc, 330) var(--glow-sat) var(--glow-rim-lit) / 0.5) 88%
  );
  filter: blur(48px);
  will-change: transform, opacity, border-radius;

  /* Dark mode: the same palette read as emitted light — a touch deeper and
     less milky so the pastels don't wash grey over dark surfaces. Mirrors
     Alloy's theming (media query + .dark/.light class overrides on <html>). */
  @media (prefers-color-scheme: dark) {
    html:not(.light) & {
      --glow-sat: 78%;
      --glow-lit: 58%;
      --glow-rim-lit: 63%;
    }
  }
  html.dark & {
    --glow-sat: 78%;
    --glow-lit: 58%;
    --glow-rim-lit: 63%;
  }
`,Im=.025,pi=560,hi=480,UA=260,qA=.08,VA=.18,GA=.06,YA=350,KA=9,tl=[168,197,224,250,285,330,390],QA=e=>{const a=tl.length-1,i=Math.abs((e%2+2)%2-1)*a,s=Math.min(a-1,Math.floor(i));return(tl[s]+(tl[s+1]-tl[s])*(i-s))%360},xl=5,Em=360,ZA=560,XA=.055,JA=.03,fi=320,eT=.84,Tu=xl+1,yl=[];for(let e=0;e<Tu;e++)for(let a=e+1;a<Tu;a++)yl.push([e,a]);const Pm=(e,a)=>QA((e*KA+80*Math.sin(e*.23+a)+50*Math.sin(e*.071+a*1.7))/360),nl=(e,a)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+a)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},zm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),au=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function tv(){const e=g.useRef(null),a=g.useRef(null),i=g.useRef([]),s=g.useRef([]),l=g.useRef([]);return g.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),p=e.current,m=a.current;if(!p||!m)return;const v=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,y=Array.from({length:xl},()=>({size:Em+Math.random()*(ZA-Em),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));y.forEach((A,E)=>{const D=s.current[E];D&&(D.style.width=`${A.size.toFixed(0)}px`,D.style.height=`${A.size.toFixed(0)}px`)});const w=(A,E,D)=>{A.style.setProperty("--glow-ha",Pm(E,v[0]+D).toFixed(1)),A.style.setProperty("--glow-hb",Pm(E,v[1]+D*1.3).toFixed(1)),A.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(E*.17+v[2]*1.9+D)))%360).toFixed(1)),A.style.setProperty("--glow-cx",`${(35+14*Math.sin(E*.4+v[2]+D)).toFixed(1)}%`),A.style.setProperty("--glow-cy",`${(35+14*Math.cos(E*.31+v[3]+D)).toFixed(1)}%`)},k=(A,E,D)=>{const G=new Array(Tu).fill(null);for(let Z=0;Z<xl;Z++){const H=y[Z],Y=s.current[Z];if(!Y)continue;const ee=E*(.5+H.ax*(.68*Math.sin(A*H.sx1+H.px1)+.32*Math.sin(A*H.sx2+H.px2))),oe=D*(.5+H.ay*(.68*Math.sin(A*H.sy1+H.py1)+.32*Math.sin(A*H.sy2+H.py2))),ce=XA+JA*(.5+.5*Math.sin(A*H.bs+H.bp));Y.style.transform=`translate(${(ee-H.size/2).toFixed(1)}px, ${(oe-H.size/2).toFixed(1)}px)`,Y.style.opacity=ce.toFixed(3),Y.style.borderRadius=nl(A,H.mp),w(Y,A,H.cs),G[Z+1]={x:ee,y:oe,size:H.size,o:ce}}return G},M=(A,E)=>{for(let D=0;D<yl.length;D++){const G=l.current[D];if(!G)continue;const[Z,H]=yl[D],Y=E[Z],ee=E[H],oe=Y&&ee?Math.min(Y.o,ee.o):0;if(!Y||!ee||oe<=.005){G.style.opacity="0";continue}const ce=ee.x-Y.x,de=ee.y-Y.y,K=Math.hypot(ce,de),F=(Y.size+ee.size)/2*eT,q=zm(1-K/F);if(q<=.001){G.style.opacity="0";continue}const T=Math.max(.35,K*.9/fi),z=.3+.4*q;G.style.transform=`translate(${((Y.x+ee.x)/2-fi/2).toFixed(1)}px, ${((Y.y+ee.y)/2-fi/2).toFixed(1)}px) rotate(${Math.atan2(de,ce).toFixed(3)}rad) scale(${T.toFixed(3)}, ${z.toFixed(3)})`,G.style.opacity=(oe*q).toFixed(3),G.style.borderRadius=nl(A,1.1*(D+1)),w(G,A,.23*(D+1))}};if(d){const E=k(2.4,p.clientWidth,p.clientHeight);M(2.4,E);return}let _=null,C=null,L=-1/0,N=0,j=0,S=0;const P=A=>{const E=p.getBoundingClientRect(),D=_===null;_=A.clientX-E.left,C=A.clientY-E.top,L=A.timeStamp,D&&(N=_,j=C)};window.addEventListener("pointermove",P,{passive:!0});let $=0;const R=A=>{$=requestAnimationFrame(R);const E=A/1e3,D=p.clientWidth,G=p.clientHeight,Z=k(E,D,G);if(_!==null&&C!==null){N+=(_-N)*Im,j+=(C-j)*Im;const H=A-L<YA?VA:qA;S+=(H-S)*GA,m.style.transform=`translate(${N-pi/2}px, ${j-pi/2}px)`,m.style.opacity=S.toFixed(3),m.style.borderRadius=nl(E,0),w(m,E,0),Z[0]={x:N,y:j,size:pi,o:S};for(let Y=0;Y<au.length;Y++){const ee=i.current[Y];if(!ee)continue;const{nx:oe,ny:ce}=au[Y],de=oe<0?N:oe>0?D-N:ce<0?j:G-j,K=zm(1-de/UA);if(K<=.001){ee.style.opacity="0";continue}const F=oe!==0?oe<0?0:D:N,q=ce!==0?ce<0?0:G:j,T=hi*(.5-.22*K),z=.55+.45*K;ee.style.transform=`translate(${F+oe*T-hi/2}px, ${q+ce*T-hi/2}px) scale(${z.toFixed(3)})`,ee.style.opacity=(S*K).toFixed(3),ee.style.borderRadius=nl(E,.9*(Y+1)),w(ee,E,.35*(Y+1))}}M(E,Z)};return $=requestAnimationFrame(R),()=>{cancelAnimationFrame($),window.removeEventListener("pointermove",P)}},[]),n.jsxs(HA,{ref:e,"aria-hidden":"true",children:[yl.map((d,p)=>n.jsx(el,{ref:m=>{l.current[p]=m},style:{width:fi,height:fi,opacity:0}},`bridge-${p}`)),Array.from({length:xl},(d,p)=>n.jsx(el,{ref:m=>{s.current[p]=m},style:{opacity:0}},`ambient-${p}`)),au.map((d,p)=>n.jsx(el,{ref:m=>{i.current[p]=m},style:{width:hi,height:hi,opacity:0}},p)),n.jsx(el,{ref:a,style:{width:pi,height:pi,opacity:0}})]})}function nv({size:e=22,className:a}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Cr=He`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,rv=He`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;He`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, white 24%, transparent) 0%,
      transparent 46%
    );
    pointer-events: none;
  }
`;const tT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",nT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",rT="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",oT="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",aT="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",iT="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",sT="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",lT=560,ov=320,eo="cubic-bezier(0.22, 1, 0.36, 1)",av=140,iv={landing:0,workplace:20,loading:40,questions:58},mi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:q0,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:ng,title:"1099",caption:"Independent contractors."},{id:"both",icon:V0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:Ln,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:G0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:tg,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:ki,title:"One location",caption:"A single site."},{id:"multi",icon:Ju,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Zu,title:"Client sites",caption:"Out at client locations."}]}];function cT({onComplete:e}){const[a,i]=g.useState("landing"),[s,l]=g.useState({}),[d,p]=g.useState(!1),[m,v]=g.useState(!1),x=Yl(),y=g.useRef(null),w=g.useCallback($=>{y.current===null&&(v(!0),y.current=window.setTimeout(()=>{$(),v(!1),y.current=null},x?0:ov))},[x]);g.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),p(!1)}),M=()=>w(()=>i("workplace")),_=$=>{l(R=>({...R,...$})),p(!0),w(()=>i("loading"))},C=$=>{const R={...s,...$};if(l(R),R.companyWebsite){e(R);return}w(()=>i("questions"))},L=$=>e({...s,...$}),N=d?1:a==="landing"?0:.4,[j,S]=g.useState(!1),P=j;return n.jsxs(PT,{children:[n.jsx(ev,{links:N}),n.jsx(tv,{}),n.jsx(zT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(nv,{size:22})}),n.jsx(OT,{children:n.jsxs(FT,{children:[a!=="landing"&&n.jsx(DT,{children:n.jsx(sv,{children:n.jsx(ct,{mark:P?"lines":"magnetic",size:av,tone:"auto",state:"active",motionSpeed:P?1.7:1,cellCount:iv[a],"aria-label":"Ultron"})})}),n.jsxs(WT,{$exiting:m,children:[a==="landing"&&n.jsx(yT,{onNext:M}),a==="workplace"&&n.jsx(Kl,{children:n.jsx(kT,{onAnswer:_})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(CT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:C,onProcessingChange:S}),a==="questions"&&n.jsx(AT,{onComplete:L})]})]})})]})}const dT="Lead the work that matters.",uT="Show us your company and we'll set up the work.",pT=41e3,Om=[{name:"Levi's Stadium",src:tT},{name:"ProCare HR",src:nT},{name:"Florida Panthers",src:rT},{name:"Express Healthcare",src:oT},{name:"ModSquad",src:aT},{name:"Titan Medical Group",src:iT},{name:"United Staffing Solutions",src:sT}],Fm=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],hT=6e3;function fT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function mT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function gT(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const vT=[{id:"google",label:"Continue with Google",mark:fT},{id:"microsoft",label:"Continue with Microsoft",mark:mT},{id:"apple",label:"Continue with Apple",mark:gT}];function xT(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function yT({onNext:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(""),[d,p]=g.useState(null),m=g.useRef(null),v=Yl();return g.useEffect(()=>{const x=window.setTimeout(()=>i(!0),v?0:500);return()=>window.clearTimeout(x)},[v]),g.useEffect(()=>{var x;d&&((x=m.current)==null||x.focus())},[d]),n.jsxs(HT,{children:[n.jsx(qT,{children:n.jsxs(VT,{children:[n.jsx(sv,{children:n.jsx(ct,{mark:"magnetic",size:av,tone:"auto",state:"active",cellCount:iv.landing,"aria-label":"Ultron"})}),n.jsx(_I,{children:dT}),a&&n.jsxs(GT,{children:[n.jsx(CI,{children:uT}),n.jsxs(YT,{"aria-label":"Get started",children:[n.jsx(KT,{children:vT.map(x=>{const y=x.mark;return n.jsx(QT,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(y,{}),onClick:e,children:x.label},x.id)})}),n.jsx(ZT,{"aria-hidden":"true",children:n.jsx(XT,{children:"or start with email"})}),n.jsxs(JT,{noValidate:!0,onSubmit:x=>{x.preventDefault(),s.trim()===""||xT(s)?e():p({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(_r,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:n.jsx(tI,{ref:m,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:x=>{l(x.target.value),d&&p(null)}})}),n.jsx(eI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(nI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(UT,{"aria-hidden":"true"}),a&&n.jsx(wT,{})]})}function wT(){const[e,a]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>a(l=>(l+1)%Fm.length),hT);return()=>clearInterval(s)},[]);const i=Fm[e];return n.jsx(rI,{children:n.jsxs(oI,{children:[n.jsx(bT,{}),n.jsxs(vI,{children:[n.jsx(xI,{children:`“${i.quote}”`}),n.jsxs(yI,{children:[n.jsx(Yn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(wI,{children:[n.jsx(bI,{children:i.name}),n.jsx(kI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(pI,{children:[n.jsx(hI,{children:"Trusted by frontline operators"}),n.jsxs(mI,{"aria-label":"Operators using Teambridge",children:[n.jsx(Dm,{children:Om.map(s=>n.jsx(Bm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(Dm,{"aria-hidden":"true",children:Om.map(s=>n.jsx(Bm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function bT(){const e=ET(pT,1600);return n.jsxs(aI,{children:[n.jsxs(iI,{children:[n.jsx(lI,{"aria-hidden":"true"}),n.jsx(cI,{children:"Ultron Index · Live"})]}),n.jsx(dI,{children:e.toLocaleString("en-US")}),n.jsx(uI,{children:"pieces of work Ultron performed this week"})]})}function kT({onAnswer:e}){const[a,i]=g.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&e(TT(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(Ql,{children:"Where do you work?"}),n.jsx(MI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(dv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(uv,{children:[n.jsx(fE,{"aria-hidden":"true",children:n.jsx(ep,{size:18})}),n.jsx(pv,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(hv,{children:n.jsx(Ca,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(mE,{children:n.jsx(fv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const iu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],_T=820;function CT({website:e,failedWebsite:a,onDone:i,onProcessingChange:s}){return e?n.jsx(ST,{website:e,onDone:i,onProcessingChange:s}):n.jsx(LT,{failedWebsite:a,onDone:i})}const jT=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function ST({website:e,onDone:a,onProcessingChange:i}){const{name:s,host:l}=IT(e),d=iu.length,[p,m]=g.useState(1),[v,x]=g.useState(!1);g.useEffect(()=>{i==null||i(!v)},[v,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const y=g.useMemo(()=>BS(e),[e]),w=g.useMemo(()=>jT.reduce((_,C)=>_+y[C].length,0),[y]),k=g.useCallback(()=>{v?a({}):p>=d?x(!0):m(_=>Math.min(_+1,d))},[p,v,d,a]);g.useEffect(()=>{const _=C=>{C.key.toLowerCase()==="t"&&(C.preventDefault(),k())};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[k]);const M=iu[p-1];return n.jsx(n.Fragment,{children:n.jsxs(Kl,{$wide:!0,onClick:()=>{v||k()},children:[n.jsx(Ql,{children:v?"Nearly there! Your free account is taking shape.":`${M}…`},v?"done":M),n.jsx(Zl,{children:v?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(EI,{role:"status","aria-live":"polite",$complete:v,children:[n.jsxs(FI,{$running:!v,children:[n.jsx(ep,{size:14}),l,v&&n.jsxs(n.Fragment,{children:[n.jsx(DI,{"aria-hidden":"true",children:"·"}),n.jsxs(BI,{children:[n.jsx(yn,{size:13})," read ",w," signals"]})]})]}),n.jsx(PI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":v?d:p-1,"aria-label":`Step ${Math.min(p,d)} of ${d}`,$complete:v,children:iu.map((_,C)=>{const L=v||C+1<p?"done":C+1===p?"working":"pending";return n.jsx(zI,{"data-status":L,children:L!=="pending"&&n.jsx(OI,{$working:L==="working"})},_)})})]}),v&&n.jsx(iE,{children:n.jsx(ze,{variant:"primary",size:"md",onClick:()=>a({}),trailingArtwork:n.jsx(Qu,{size:16}),children:"Looks good, continue"})}),n.jsx(NT,{learned:y,host:l,completed:v?d:p-1,done:v}),v&&n.jsxs(n.Fragment,{children:[n.jsx(rE,{children:n.jsx(oE,{children:"Consider it handled."})}),n.jsx(sE,{children:n.jsx(fv,{type:"button",onClick:()=>{m(1),x(!1)},children:"Start over"})})]})]})})}const MT={"Healthcare / Clinical Staffing":tp,"Skilled Trades / Construction Labor":Hu,"Warehouse / Logistics & Light Industrial":Xu,"Security / Guarding Services":Pl,"Home Care / In-Home Support":J0,"Agriculture / Seasonal Labor":Ku,"Hospitality / Events Staffing":Ol,"Call Center / BPO Staffing":_i},$T={Business:{icon:ki,color:"blue"},Workforce:{icon:Yr,color:"purple"},Operations:{icon:og,color:"orange"},Compliance:{icon:Ti,color:"green"}};function NT({learned:e,host:a,completed:i,done:s}){const{company:l}=e,d=i<1,[p,m]=g.useState(!1),v=MT[e.workforce_type]??Ju;return n.jsxs(HI,{children:[n.jsxs(UI,{children:[n.jsx(qI,{children:n.jsxs(GI,{children:[n.jsx(YI,{"aria-hidden":"true",children:d?n.jsx(Dt,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!p&&n.jsx(v,{size:20}),n.jsx(KI,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(a)}&sz=64`,alt:"",$visible:p,onLoad:x=>m(x.currentTarget.naturalWidth>=32),onError:()=>m(!1)})]})}),n.jsxs(QI,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Dt,{$w:"240px",$h:"1em"}),n.jsx(Dt,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(ZI,{children:e.workforce_type}),n.jsx(XI,{children:l.name})]}),n.jsx(JI,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Dt,{$w:"110px",$h:"0.9em"}),n.jsx(Dt,{$w:"150px",$h:"0.9em"}),n.jsx(Dt,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(su,{children:[n.jsx(Ln,{size:14}),n.jsxs(lu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(su,{children:[n.jsx(ki,{size:14}),n.jsxs(lu,{children:["Part of ",l.parent]})]}),n.jsxs(su,{children:[n.jsx(Wu,{size:14}),n.jsx(lu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((x,y)=>{const w=i<2,{icon:k,color:M}=$T[x.label]??{icon:ki,color:"neutral"};return n.jsx(VI,{style:{"--group-i":w?y+1:y},children:w?n.jsxs(n.Fragment,{children:[n.jsxs(Wm,{as:"div",children:[n.jsx(Dt,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Dt,{$w:"112px",$h:"0.95em"})]}),n.jsxs(Hm,{children:[n.jsx(Dt,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Dt,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Dt,{$w:"64px",$h:"20px",$round:!0})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Wm,{children:[n.jsx(k,{size:16}),x.label]}),n.jsx(Hm,{children:x.tags.map(_=>n.jsx(An,{size:"sm",variant:"subtle",color:M,children:_},_))})]})},`${x.label}-${w?"loading":"ready"}`)})]}),n.jsx(eE,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(Um,{children:[n.jsx(rg,{size:16}),"Configured for you"]}),n.jsx(tE,{children:e.configured.map(x=>n.jsxs(nE,{children:[n.jsx(cn,{size:16}),x]},x))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Um,{as:"div",children:[n.jsx(Dt,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Dt,{$w:"132px",$h:"0.95em"})]}),n.jsxs(WI,{children:[n.jsx(Dt,{$h:"0.85em",$w:"84%"}),n.jsx(Dt,{$h:"0.85em",$w:"72%"}),n.jsx(Dt,{$h:"0.85em",$w:"78%"}),n.jsx(Dt,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const RT=[{icon:tp,label:"Travel nurses"},{icon:Ol,label:"Event staff"},{icon:Pl,label:"Security guards"},{icon:Xu,label:"Warehouse temps"}];function LT({failedWebsite:e,onDone:a}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const p=i.trim();p&&a({workforceType:p})};return n.jsxs(Kl,{children:[e&&n.jsx(aE,{children:"No problem — let's set it up together."}),n.jsx(Ql,{children:"What workforce do you need help with?"}),n.jsx(Zl,{children:"Say it in your own words — or grab one of these."}),n.jsx($I,{children:RT.map(({icon:p,label:m})=>n.jsxs(NI,{type:"button",onClick:()=>a({workforceType:m}),children:[n.jsx(p,{size:16}),m]},m))}),n.jsx(dv,{onSubmit:p=>{p.preventDefault(),d()},children:n.jsxs(uv,{children:[n.jsx(pv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:p=>s(p.target.value),onKeyDown:p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),d())}}),n.jsx(hv,{children:n.jsx(Ca,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function AT({onComplete:e}){const a=Yl(),[i,s]=g.useState(0),l=g.useRef({}),d=mi[i],p=m=>{l.current={...l.current,[d.key]:m.title};const v=i+1;v>=mi.length?e(l.current):s(v)};return n.jsxs(Kl,{children:[n.jsx(lE,{role:"progressbar","aria-valuemin":1,"aria-valuemax":mi.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${mi.length}`,children:mi.map((m,v)=>n.jsx(cE,{"data-filled":v<=i||void 0},m.key))}),n.jsx(Ql,{children:d.prompt}),n.jsx(Zl,{children:d.sub}),n.jsx(dE,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((m,v)=>{const x=m.icon;return n.jsxs(uE,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${v*70}ms`},onClick:()=>p(m),children:[n.jsx(lv,{"aria-hidden":"true",children:n.jsx(x,{size:20})}),n.jsxs(pE,{children:[n.jsx(RI,{children:m.title}),n.jsx(LI,{children:m.caption})]})]},m.id)})})]},d.key)}function TT(e){const a=e.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function IT(e){const a=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s,host:s}}function ET(e,a){const i=Yl(),[s,l]=g.useState(i?e:0);return g.useEffect(()=>{if(i){l(e);return}let d=0,p=null;const m=v=>{p===null&&(p=v);const x=Math.min(1,(v-p)/a),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(m))};return d=window.requestAnimationFrame(m),()=>window.cancelAnimationFrame(d)},[e,a,i]),s}function Yl(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const PT=f.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,zT=f.button`
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  z-index: 2;
  width: calc(var(--space-8) + var(--space-1));
  height: calc(var(--space-8) + var(--space-1));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-content-primary);
  cursor: pointer;
  border-radius: var(--radius-md);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,OT=f.main`
  /* Above the backdrop layer. */
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  /* The augment canvas fills the frame as a fixed two-column split — its panes
     scroll internally, so the frame itself doesn't scroll. */
  overflow-y: ${e=>e.$augment?"hidden":"auto"};
  /* When a turn is snapped to the top (see the scroll effect), stop below the
     sticky build header rather than tucking under it — plus an 8px breath so the
     snapped turn sits a touch below the header edge, not flush against it. */
  scroll-padding-top: calc(var(--space-20) + var(--space-2));
  display: flex;
  flex-direction: column;
`,FT=f.div`
  min-height: 100%;
  box-sizing: border-box;
  /* Don't let the flex parent shrink this below its content, or the bottom
     padding gets squeezed out and tall content (the build cards) scrolls flush
     against the viewport edge. */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  /* The build step carries its own compact header lockup in-flow, so it starts
     near the top; the intro steps keep the taller hero spacing. */
  padding: ${e=>e.$build?"var(--space-8)":"var(--space-24)"} var(--space-6);
  padding-bottom: var(--space-24);

  /* The augment canvas fills the frame edge-to-edge (no centered column, no
     padding) so its two panes can carry their own chrome. */
  ${e=>e.$augment&&He`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,DT=f.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,sv=f.span`
  display: inline-flex;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -24%;
    border-radius: 50%;
    background: radial-gradient(circle, var(--color-bg-secondary) 0%, transparent 70%);
    pointer-events: none;
  }

  & > canvas {
    position: relative;
    z-index: 1;
  }
`,BT=$e`
  from { opacity: 1; }
  to   { opacity: 0; }
`,WT=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&He`
      animation: ${BT} ${ov}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&He`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,HT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,UT=f.div`
  display: none;

  @media (min-width: 801px) {
    display: block;
    position: fixed;
    top: var(--space-12);
    bottom: var(--space-12);
    left: 50vw;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(--color-border-opaque) 18%,
      var(--color-border-opaque) 82%,
      transparent 100%
    );
  }
`,qT=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-8);

  @media (min-width: 801px) {
    position: fixed;
    top: var(--space-5);
    left: var(--space-5);
    bottom: var(--space-5);
    right: calc(50vw + var(--space-3));
    z-index: 1;
    overflow-y: auto;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
  }
`,VT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Sp=$e`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,GT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Sp} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YT=f.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,KT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,QT=f(ze)`
  && {
    width: 100%;
    ${Cr}
  }
`,ZT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border-opaque);
  }
`,XT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,JT=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,eI=f(ze)`
  && {
    width: 100%;
  }
`,tI=f(wg)`
  && [class*='shell'] {
    ${Cr}
  }
  && input {
    background: transparent;
  }
`,nI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,rI=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Sp} var(--duration-slow) var(--ease-out) both;

  /* Wide: full-height panel filling the right half. Logo-aligned outer margin
     (space-5); its inner edge stops just past the centre line, leaving a small
     gutter so the two halves don't collide. */
  @media (min-width: 801px) {
    position: fixed;
    top: var(--space-5);
    right: var(--space-5);
    bottom: var(--space-5);
    left: calc(50vw + var(--space-3));
    z-index: 1;
    overflow-y: auto;
    /* The full-height panel can afford more breathing room than the card. */
    padding: var(--space-12);
  }

  /* Narrow: an ordinary card in the stacked flow. */
  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  width: 100%;
  /* Match the left column's content measure (LeftInner) so the two halves read
     as the same-width column, just mirrored across the centre line. */
  max-width: 400px;

  /* Wide: cluster the three blocks together and center them vertically in the
     panel, rather than spreading them to the top/middle/bottom edges. */
  @media (min-width: 801px) {
    flex: 1;
    justify-content: center;
  }
`,aI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,iI=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,sI=$e`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,lI=f.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${sI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,dI=f.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,uI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,pI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,hI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,fI=$e`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,mI=f.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 var(--space-5),
    #000 calc(100% - var(--space-5)),
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 var(--space-5),
    #000 calc(100% - var(--space-5)),
    transparent
  );

  /* Pause on hover so a reader can settle on a name. */
  &:hover > * {
    animation-play-state: paused;
  }
`,Dm=f.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${fI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Bm=f.img`
  height: 30px;
  width: auto;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
  opacity: 0.62;
  filter: grayscale(1) brightness(0.55) sepia(0.12) hue-rotate(180deg);
  transition: opacity var(--duration-fast, 150ms) var(--ease-out, ease),
    filter var(--duration-fast, 150ms) var(--ease-out, ease);

  /* On hover the marquee pauses (see LogoMarquee); lift the logo the pointer is
     over back to its full-color self. */
  &:hover {
    opacity: 1;
    filter: none;
  }
`,gI=$e`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,vI=f.figure`
  ${Cr}
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
  /* Card treatment — a subtle glass surface with a 20px inset (var(--space-5)),
     borderless (the fill alone carries the card). */
  padding: var(--space-5);
  border: none;
  border-radius: var(--radius-lg);
  /* Room for the tallest card (four relaxed text-md lines plus the byline) —
     raw px deliberately, so rotating cards of different lengths never reflow
     the spread panel around them. */
  min-height: 152px;
  animation: ${gI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xI=f.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,yI=f.figcaption`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border-opaque) 18%,
      var(--color-border-opaque) 82%,
      transparent
    );
  }
`,wI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,bI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,kI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,_I=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Sp} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,CI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,jI=$e`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Kl=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${jI} ${lT}ms ${eo} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ql=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,Zl=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,SI=$e`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,MI=f(Zl)`
  animation: ${SI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$I=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,NI=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Cr}
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  /* Leading icon reads a step quieter than the label. */
  svg {
    color: var(--color-content-tertiary);
    flex-shrink: 0;
  }

  &:hover {
    ${rv}
    color: var(--color-content-primary);
    transform: translateY(-1px);

    svg {
      color: var(--color-content-primary);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:active {
      transform: none;
    }
  }
`,lv=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,RI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,LI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,cv=$e`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,AI=$e`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,TI=$e`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,II=$e`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,EI=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
  overflow: hidden;
  max-height: 96px;
  transition:
    opacity 400ms ${eo} 950ms,
    max-height 400ms ${eo} 950ms,
    margin-top 400ms ${eo} 950ms;

  ${e=>e.$complete&&He`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,PI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&He`
    & > * > * {
      animation: ${II} 900ms ${eo};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,zI=f.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,OI=f.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&He`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${TI} ${_T+380}ms ${eo} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,FI=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,DI=f.span`
  color: var(--color-content-tertiary);
`,BI=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,Dt=f.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$w??"100%"};
  height: ${e=>e.$h??"0.9em"};
  border-radius: ${e=>e.$round?"var(--radius-full)":"var(--radius-sm)"};
  /* Wide, soft highlight so the sweep reads as a smooth sheen rather than a
     hard band; paired with skeletonSweep it moves at a constant speed and loops
     seamlessly (no blink). Bands are content-color mixes (not opaque bg fills)
     so the shimmer stays clearly visible on the translucent glass in BOTH
     themes — bg-tertiary all but vanished in light mode. */
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 0%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 30%,
    color-mix(in srgb, var(--color-content-primary) 28%, transparent) 50%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 70%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 100%
  );
  background-size: 200% 100%;
  animation: ${AI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 10%, transparent);
    animation: none;
  }
`,WI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,HI=f.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Oi=He`
  animation: ${cv} var(--duration-base) ${eo} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UI=f.div`
  ${Cr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Oi}
`,qI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Oi}
`,VI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Oi}
`,GI=f.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,YI=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
  /* Clip the full-bleed favicon to the mark's rounded corners. */
  overflow: hidden;
`,KI=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,QI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,ZI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,XI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,JI=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,su=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,lu=f.span`
  color: var(--color-content-primary);
`,eE=f.div`
  ${Cr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Oi}
`,Wm=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Hm=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,Um=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,tE=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,nE=f.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--color-success-content);
  }
`,rE=f.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Oi}
`,oE=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,aE=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,iE=f.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,sE=f.div`
  display: flex;
  justify-content: center;
`,lE=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,cE=f.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,dE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,uE=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Cr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${cv} var(--duration-base) ${eo} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${lv} {
    margin-bottom: 0;
  }

  &:hover {
    ${rv}
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-below-low);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &:hover,
    &:active {
      transform: none;
    }
  }
`,pE=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,dv=f.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Cr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,uv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,hE=$e`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,fE=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${hE} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pv=f.textarea`
  flex: 1;
  min-width: 0;
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &::placeholder {
    color: var(--color-content-disabled);
  }
`,hv=f(Gu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,mE=f.div`
  margin-top: var(--space-3);
`,fv=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--space-6);
  border: none;
  background: transparent;
  padding: 0 var(--space-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
  transition: color var(--duration-fast) var(--ease-default);

  &:hover {
    color: var(--color-content-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;function gE({onEnterApp:e}){return n.jsx(cT,{onComplete:a=>e==null?void 0:e(a)})}const vE=768,xE=`(max-width: ${vE-1}px)`;function Mp(e){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),a}function yE(){return Mp(xE)}const wE="48px",bE="240px",qm="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",kE=f.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?bE:wE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?He`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:He`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,_E=f.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,CE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,jE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,SE=f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 32px;
  background: var(--color-bg-primary, white);
  border: 0.5px solid var(--color-border-transparent, rgba(21, 21, 21, 0.05));
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,ME=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);

  img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
`,$E=f.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Vm=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--color-content-secondary, #1c222a);
  opacity: 0.6;

  svg {
    width: 16px;
    height: 16px;
  }
`,cu=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,NE="var(--gradient-ai)",mv=f.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&He`
      background: var(--color-bg-primary, white);
      box-shadow: ${qm}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&He`
      background: ${NE};
      box-shadow: ${qm}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,gv=f.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: ${e=>e.$disabled?"default":"pointer"};
  /* Color cascades to icon (currentColor) and label (inherit) */
  color: ${e=>e.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${e=>e.$disabled?.32:e.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${e=>e.$disabled||e.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: ${e=>e.$disabled?.32:1};
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,vv=f.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xv=f.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg, img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,RE=f.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,du=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px 2px 8px;
  border-radius: 16px;
  background: linear-gradient(
    to bottom,
    rgba(227, 25, 254, 0.18),
    rgba(255, 46, 146, 0.18)
  );
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.03);
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #B01786;
  white-space: nowrap;
  flex-shrink: 0;
`;const LE=f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  padding: ${e=>e.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,AE=f.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${e=>e.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,TE=f.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-secondary, #1c222a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;f.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function uu({item:e,isExpanded:a,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(mv,{$isActive:l,$isAi:s,children:n.jsxs(gv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:a?void 0:e.label,children:[n.jsxs(xv,{children:[e.hasUnread&&n.jsx(RE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),a&&n.jsx(vv,{children:e.label}),a&&i&&n.jsx(_a,{variant:"primary",children:"New"})]})})}function IE({items:e,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:x}){const[y,w]=g.useState(!1);return n.jsx(kE,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(_E,{$isExpanded:y,children:[n.jsxs(CE,{children:[n.jsxs(SE,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[n.jsx(ME,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&n.jsxs(n.Fragment,{children:[n.jsx($E,{children:s.name}),n.jsx(Vm,{children:n.jsx(Gf,{})})]})]}),n.jsx(cu,{children:e.map(k=>n.jsx(uu,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),a.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(du,{}),n.jsx(cu,{children:a.map(k=>n.jsx(uu,{item:k,isExpanded:y,showNewBadge:k.id===v,isAi:k.id===x},k.id))})]})]}),n.jsxs(jE,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(du,{}),n.jsx(cu,{children:i.map(k=>n.jsx(uu,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),n.jsx(du,{}),n.jsx(mv,{$isActive:!1,children:n.jsxs(gv,{$isActive:!1,onClick:m,"aria-label":"Settings",title:y?void 0:"Settings",children:[n.jsx(xv,{children:n.jsx(mM,{})}),y&&n.jsx(vv,{children:"Settings"})]})}),n.jsxs(LE,{$isExpanded:y,onClick:p,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[n.jsx(AE,{$color:l.avatarColor,children:l.initials}),y&&n.jsxs(n.Fragment,{children:[n.jsx(TE,{children:l.name}),n.jsx(Vm,{children:n.jsx(Gf,{})})]})]})]})]})})}const EE=270,PE=f.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${e=>e.$isVisible?`${e.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${e=>e.$isResizing?"none":"width 200ms ease"};
`,zE=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,OE=f.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,FE=f.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,DE=f.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0 12px 8px;

  /* The SearchField root sits in the first slot — flex it so the input
     fills whatever room is left after the fixed-size filter button,
     even when the secondary nav is dragged down to its min width. */
  > div {
    flex: 1;
    min-width: 0;
  }
`,BE=f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  background: var(--color-bg-primary, white);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  color: var(--color-content-secondary, #1c222a);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,WE=f.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,HE=f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 4px;
  /* Chevron→label gap matches the menu rows' --li-gap so group labels and child
     labels share one indentation. */
  gap: 12px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-content-tertiary, #475569);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
    border-radius: 6px;
  }
`;f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;const UE=f.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qE=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* 32px chevron slot — same width as the menu-item icon slot (SecNavIconSlot)
     so the chevron column and the case-row icon column align, and group labels
     land at the same x as menu-item labels (one shared indentation). */
  width: 32px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`,VE=$e`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,GE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${VE} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,YE=$e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,KE=$e`
  from { opacity: 0; transform: translate(8px, -50%); }
  to   { opacity: 1; transform: translate(0, -50%); }
`,QE=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  background: rgb(2 6 12 / 78%);
  backdrop-filter: blur(2px);
  animation: ${YE} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZE=f.div`
  width: 100%;
  min-height: 32px;
`,XE=f.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
`,JE=f.div`
  position: fixed;
  z-index: 1002;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  width: max-content;
  max-width: min(360px, calc(100vw - 32px));
  transform: translateY(-50%);
  pointer-events: none;
  /* Sits on the dimmed scrim in both themes, so the white stays literal — a
     theme-flipping token would go dark-on-dark. Type follows the Alloy scale. */
  color: #fff;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-md, 16px);
  font-weight: var(--font-weight-semibold, 600);
  line-height: var(--line-height-normal, 1.3);
  text-wrap: balance;
  text-shadow: 0 2px 12px rgb(0 0 0 / 65%);
  animation: ${KE} 360ms 100ms var(--ease-out, ease-out) both;

  /* The cue points back at the spotlit row; Alloy ships the narrow arrow
     pointing right only, so it's flipped rather than drawn locally. */
  & > svg {
    flex: 0 0 auto;
    transform: rotate(180deg);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Gm=f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  /* Left inset aligns the toggle text under the child labels (li-px 4 + icon
     slot 32 + --li-gap 12). */
  padding: 0 8px 0 48px;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-inverse-tertiary, #87919f);
  transition: background 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
    color: var(--color-content-tertiary, #475569);
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`,eP=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&He`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,tP=f.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,nP=f.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rP=f.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  /* Translate half the width over the border so the cursor zone straddles
     the existing 1px border-right. */
  transform: translateX(3px);
  background: ${e=>e.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,oP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,aP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,iP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,yv=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  /* Centered, no horizontal padding: the 8px inset that gives the hover/selected
     background breathing room comes from the row's --li-px, so the icon centers
     in the full 32px slot and aligns with the group chevron column. */
  padding: 8px 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;f.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-content-tertiary, #475569);
  }
`;function sP({prompt:e,children:a}){const i=g.useRef(null),[s,l]=g.useState(null);return g.useLayoutEffect(()=>{const d=i.current;if(!d)return;const p=()=>{const v=d.getBoundingClientRect();l({left:v.left,top:v.top,width:v.width,height:v.height})};p();const m=new ResizeObserver(p);return m.observe(d),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{m.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(ZE,{ref:i,"aria-hidden":"true"}),s&&ka.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(QE,{"aria-hidden":"true"}),n.jsx(XE,{style:{left:s.left,top:s.top,width:s.width,height:s.height},children:a}),n.jsxs(JE,{role:"status","aria-live":"polite",style:{left:s.left+s.width+20,top:s.top+s.height/2},children:[n.jsx(Qu,{size:22,"aria-hidden":"true"}),e]})]}),document.body)]})}function wv(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function lP(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const $p={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function cP({item:e}){return n.jsx(xn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(yv,{children:e.icon??n.jsx(wv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:$p})}function dP({group:e}){const[a,i]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,m=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-m.length;return n.jsxs(eP,{$outlined:e.outlined,children:[n.jsxs(HE,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[n.jsx(qE,{children:a?n.jsx(Tn,{size:16}):n.jsx(wn,{size:16})}),n.jsx(UE,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),a&&n.jsxs(GE,{children:[m.map(x=>{const y=n.jsx(xn,{label:n.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:n.jsx(yv,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:$p});return x.spotlightPrompt?n.jsx(sP,{prompt:x.spotlightPrompt,children:y},x.id):n.jsx(g.Fragment,{children:y},x.id)}),v>0&&n.jsxs(Gm,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(Gm,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function uP({heading:e,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:p="",onSearchChange:m,onFilterClick:v,headerSlot:x,bodyContent:y,width:w=EE,onWidthChange:k,minWidth:M=220,maxWidth:_=520}){const C=y!==void 0,L=g.useRef(null),[N,j]=g.useState(!1);return g.useEffect(()=>{if(!N||!k)return;const S=L.current;if(!S)return;const P=S.getBoundingClientRect().left,$=E=>{const D=Math.min(_,Math.max(M,E.clientX-P));k(D)},R=()=>j(!1);window.addEventListener("mousemove",$),window.addEventListener("mouseup",R);const A=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",R),document.body.style.userSelect=A,document.body.style.cursor=""}},[N,k,M,_]),n.jsxs(PE,{ref:L,$isVisible:a,$width:w,$isResizing:N,"aria-label":"Secondary navigation",children:[n.jsxs(zE,{children:[(e||x)&&n.jsxs(OE,{children:[n.jsx(FE,{children:e}),x]}),d&&!C&&n.jsxs(DE,{children:[n.jsx(yg,{size:"sm",placeholder:"Search...",value:p,onChange:S=>m==null?void 0:m(S.target.value)}),n.jsx(BE,{onClick:v,"aria-label":"Filter",children:n.jsx(lP,{})})]})]}),C?y:n.jsxs(WE,{children:[s,i.map(S=>S.type==="single"?n.jsx(cP,{item:S.item},S.item.id):S.type==="group"?n.jsx(dP,{group:S.group},S.group.id):S.type==="divider"?n.jsx(aP,{},S.id):n.jsx(tP,{children:S.label.label},S.label.id))]}),l.length>0&&n.jsxs(nP,{children:[n.jsx(oP,{}),l.map(S=>n.jsx(xn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:S.label}),leadingSlot:n.jsx(iP,{children:S.icon??n.jsx(wv,{})}),onClick:S.onClick,selected:S.isActive??!1,divider:!1,size:"md","aria-current":S.isActive?"page":void 0,style:$p},S.id))]}),k&&a&&n.jsx(rP,{$isResizing:N,onMouseDown:S=>{S.preventDefault(),j(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const pP=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,hP=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  /* Prevent Alloy Breadcrumb .list from wrapping inside the 48px TopNav */
  ol, ul {
    flex-wrap: nowrap !important;
    overflow: hidden;
  }
`,bv=f.div`
  margin: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fP=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,mP=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function gP(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Ym(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Km(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function vP(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function xP({heading:e,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:p,onDotsClick:m}){const v=a.filter(w=>w.variant==="secondary"),x=a.filter(w=>w.variant==="primary"),y=Mp("(prefers-color-scheme: dark)");return n.jsxs(pP,{$noBorder:l,children:[n.jsx(hP,{children:typeof e=="string"?n.jsx(bv,{children:e}):e}),n.jsxs(fP,{children:[n.jsxs(mP,{children:[n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:m,"aria-label":"More options",title:"More options",children:n.jsx(gP,{})}),v.map(w=>n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Km,{}),trailingArtwork:n.jsx(Ym,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>n.jsx(ze,{variant:"primary",size:"sm",leadingArtwork:n.jsx(Km,{}),trailingArtwork:n.jsx(Ym,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(vP,{})}),s&&n.jsx($0,{dark:y,onClick:p,"aria-label":"Ponder AI"})]})]})}const yP=f.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,wP=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,bP=f.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,kP=f.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--color-bg-primary, white);
  padding-bottom: var(--space-8, 32px);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,Qm="tb:secondary-nav-width",Zm=270,Xm=220,Jm=520;function _P({items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:M,showSearch:_,searchValue:C,onSearchChange:L,onFilterClick:N,headerSlot:j,bodyContent:S,heading:P,actions:$,showActivityButton:R,showPonderButton:A,noBorder:E,onActivityClick:D,onPonderClick:G,onDotsClick:Z,children:H,showSecondaryNav:Y=!0,showTopNav:ee=!0}){const[oe,ce]=g.useState(()=>{if(typeof window>"u")return Zm;const de=window.localStorage.getItem(Qm),K=de?parseInt(de,10):NaN;return Number.isFinite(K)?Math.min(Jm,Math.max(Xm,K)):Zm});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Qm,String(oe))},[oe]),n.jsxs(yP,{children:[n.jsx(IE,{items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:x}),n.jsxs(wP,{children:[Y&&n.jsx(uP,{heading:y,menuEntries:w,menuHeader:k,pageEntries:M,isVisible:!0,showSearch:_,searchValue:C,onSearchChange:L,onFilterClick:N,headerSlot:j,bodyContent:S,width:oe,onWidthChange:ce,minWidth:Xm,maxWidth:Jm}),n.jsxs(bP,{children:[ee&&n.jsx(xP,{heading:P,actions:$,showActivityButton:R,showPonderButton:A,noBorder:E,onActivityClick:D,onPonderClick:G,onDotsClick:Z}),n.jsx(kP,{children:H})]})]})]})}function CP({deadZonePx:e=8,topThresholdPx:a=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(0);return g.useEffect(()=>{var x;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=p();const m=()=>{const y=p(),w=y-d.current;Math.abs(w)<e||(w>0&&y>a?l("down"):w<0&&l("up"),d.current=y)},v=i??(typeof window<"u"?window:{});return(x=v.addEventListener)==null||x.call(v,"scroll",m,{passive:!0}),()=>{var y;(y=v.removeEventListener)==null||y.call(v,"scroll",m)}},[e,a,i]),s}const jP=f.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
  padding: 0 var(--space-1, 4px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-content-primary, #151515);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  height: 32px;
  box-sizing: border-box;

  background: ${e=>e.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,SP=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,MP=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function e0({label:e,isOpen:a,onClick:i,ariaLabel:s}){return n.jsxs(jP,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[n.jsx(SP,{children:e}),n.jsx(MP,{children:n.jsx(Tn,{size:14})})]})}const $P=f.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,NP=f.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,RP=f.button`
  all: unset;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-secondary, #475569);
  cursor: pointer;
  flex: 0 0 auto;
  &:hover { background: var(--color-bg-tertiary, #eceef1); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,LP=f.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,AP=f.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function TP({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const IP=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:p,onSecondaryClick:m,onTertiaryClick:v},x){return n.jsx($P,{ref:x,$hidden:d,children:n.jsxs(NP,{children:[n.jsx(RP,{onClick:p,"aria-label":"Open navigation",children:n.jsx(TP,{size:18})}),n.jsxs(LP,{children:[n.jsx(e0,{label:i??a,isOpen:l==="secondary",onClick:m,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(AP,{"aria-hidden":"true",children:"›"}),n.jsx(e0,{label:s,isOpen:l==="persona",onClick:v??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),EP=$e`
  from { opacity: 0; }
  to { opacity: 1; }
`,PP=f.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${EP} 160ms ease-out;
`;function zP({onDismiss:e}){return g.useEffect(()=>{const a=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[e]),n.jsx(PP,{onClick:e,"aria-hidden":"true"})}const OP=$e`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,FP=f.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  border-top-left-radius: var(--radius-lg, 12px);
  border-top-right-radius: var(--radius-lg, 12px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.12);
  animation: ${OP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,DP=f.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,BP=f.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,WP=f.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,HP=f.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function kv({title:e,children:a,ariaLabel:i}){return n.jsxs(FP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[n.jsx(DP,{children:n.jsx(BP,{"aria-hidden":"true"})}),e&&n.jsx(WP,{children:e}),n.jsx(HP,{children:a})]})}const Np=f.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,wl=f.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ha=f.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${e=>e.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${e=>e.$active?600:400};
  background: ${e=>e.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,Rl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,fa=f.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ni=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function UP({moduleLabel:e,entries:a,onSelect:i}){return n.jsx(kv,{title:e,ariaLabel:`${e} sections`,children:n.jsx(Np,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return n.jsxs(ha,{$active:d.isActive,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Rl,{children:d.icon}),n.jsx(fa,{children:d.label}),d.isActive&&n.jsx(Ni,{"aria-hidden":"true",children:n.jsx(cn,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return n.jsxs("div",{children:[n.jsx(wl,{children:l.label}),l.children.map(d=>n.jsxs(ha,{$active:d.isActive,$indent:!0,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Rl,{children:d.icon}),n.jsx(fa,{children:d.label}),d.isActive&&n.jsx(Ni,{"aria-hidden":"true",children:n.jsx(cn,{size:16})})]},d.id))]},l.id)})})})}const qP=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,VP=f.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,GP=f.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function YP({personas:e,activeId:a,onSelect:i}){return n.jsx(kv,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Np,{children:e.map(s=>{const l=s.id===a;return n.jsxs(ha,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(fa,{as:"span",children:n.jsxs(qP,{children:[n.jsx(VP,{children:s.name}),n.jsx(GP,{children:s.role})]})}),l&&n.jsx(Ni,{"aria-hidden":"true",children:n.jsx(cn,{size:16})})]},s.id)})})})}const KP=$e`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,QP=f.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 84vw;
  max-width: 360px;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  display: flex;
  flex-direction: column;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.12);
  animation: ${KP} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,ZP=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,XP=f.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,JP=f.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  color: var(--color-content-secondary, #475569);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
`,ez=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,tz=60;function nz({title:e,onDismiss:a,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const p=v=>{const x=v.touches[0];l.current={x:x.clientX,y:x.clientY}},m=v=>{if(!l.current)return;const x=v.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<tz&&a()};return d.addEventListener("touchstart",p,{passive:!0}),d.addEventListener("touchend",m),()=>{d.removeEventListener("touchstart",p),d.removeEventListener("touchend",m)}},[a]),n.jsxs(QP,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(ZP,{children:[n.jsx(XP,{children:e??"Navigation"}),n.jsx(JP,{onClick:a,"aria-label":"Close navigation",children:n.jsx(Li,{size:18})})]}),n.jsx(ez,{children:i})]})}const rz=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin: var(--space-3, 12px) var(--space-4, 16px) var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
  height: 40px;
  border-radius: var(--radius-md, 8px);
  background: var(--color-bg-secondary, #f6f7f9);
  color: var(--color-content-tertiary, #87919f);

  &:focus-within {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -1px;
  }
`,oz=f.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  color: var(--color-content-primary, #151515);

  &::placeholder {
    color: var(--color-content-tertiary, #87919f);
  }
`,az=f.span`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${e=>e.$color??"var(--color-bg-tertiary, #eceef1)"};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  flex: 0 0 auto;
`,iz=f.div`
  margin: var(--space-2, 8px) 0 0;
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
`;function sz({activeId:e,groups:a,currentMenuEntries:i,user:s,onUserClick:l,onSelectModule:d,onDismiss:p}){const[m,v]=g.useState(""),x=m.trim().toLowerCase(),y=M=>M.toLowerCase().includes(x),w=M=>typeof M=="string"?y(M):!0,k=M=>n.jsxs(ha,{$active:M.isActive,$indent:!0,onClick:()=>{var _;(_=M.onClick)==null||_.call(M),p()},"aria-pressed":!!M.isActive,children:[n.jsx(Rl,{children:M.icon}),n.jsx(fa,{children:M.label}),M.isActive&&n.jsx(Ni,{"aria-hidden":"true",children:n.jsx(cn,{size:16})})]},M.id);return n.jsxs(nz,{title:"Navigation",onDismiss:p,children:[n.jsxs(rz,{children:[n.jsx(Yu,{size:16}),n.jsx(oz,{type:"search",placeholder:"Search","aria-label":"Search navigation",value:m,onChange:M=>v(M.target.value)})]}),n.jsxs(Np,{children:[a.map(M=>{const _=x?M.items.filter(C=>y(C.label)):M.items;return x&&_.length===0?null:n.jsxs("div",{children:[n.jsx(wl,{children:M.label}),_.map(C=>{const L=C.id===e;return n.jsxs("div",{children:[n.jsxs(ha,{$active:L,onClick:()=>{d(C.id),p()},"aria-pressed":L,children:[n.jsx(Rl,{children:C.icon}),n.jsx(fa,{children:C.label}),L&&n.jsx(Ni,{"aria-hidden":"true",children:n.jsx(cn,{size:16})})]}),L&&i.length>0&&n.jsx("div",{children:i.map(N=>{if(N.type==="single")return x&&!w(N.item.label)?null:k(N.item);if(N.type!=="group")return null;const j=N.group,S=x?j.children.filter(P=>w(P.label)):j.children;return x&&S.length===0?null:n.jsxs("div",{children:[n.jsx(wl,{children:j.label}),S.map(k)]},j.id)})})]},C.id)})]},M.id)}),n.jsx(iz,{"aria-hidden":"true"}),n.jsx(wl,{children:"Account"}),n.jsxs(ha,{onClick:()=>{l==null||l(),p()},"aria-label":`User: ${s.name}`,children:[n.jsx(az,{$color:s.avatarColor,"aria-hidden":"true",children:s.initials}),n.jsx(fa,{children:s.name})]})]})]})}const t0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],lz=f.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,cz=f.main`
  flex: 1 1 auto;
  min-width: 0;
  /* Stretch the page to the shell's remaining height. Pages size themselves
     with percentage heights (e.g. the welcome thread's Root), which don't
     resolve against a flex item without a definite height — so pass the height
     down through flex instead. Short pages fill the viewport (no white gap
     under their backdrop); tall ones still grow and scroll. */
  display: flex;
  flex-direction: column;

  & > * {
    flex: 1 1 auto;
    min-width: 0;
  }
`;function dz(e){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:p,user:m,onUserClick:v,onMobileNavigate:x,onSelectPersona:y,children:w}=e,[k,M]=g.useState(null),_=CP({deadZonePx:8,topThresholdPx:20}),C=k===null&&_==="down",L=g.useMemo(()=>{if(!i)return null;const P=t0.find($=>$.id===i);return(P==null?void 0:P.name)??null},[i]),N=()=>M(null),j=P=>M(P),S=k!==null;return n.jsxs(lz,{children:[n.jsx(IP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:L,openOverlay:k,hidden:C,onHamburgerClick:()=>j("drawer"),onSecondaryClick:()=>{j(p.length>0?"secondary":"drawer")},onTertiaryClick:L?()=>j("persona"):void 0}),n.jsx(cz,{children:w}),S&&n.jsx(zP,{onDismiss:N}),k==="secondary"&&n.jsx(UP,{moduleLabel:l,entries:p,onSelect:N}),k==="persona"&&n.jsx(YP,{personas:t0,activeId:i,onSelect:P=>{y(P),N()}}),k==="drawer"&&n.jsx(sz,{activeId:a,groups:s,currentMenuEntries:p,user:m,onUserClick:v,onSelectModule:P=>x(P),onDismiss:N})]})}function uz(e){if(yE()&&e.mobileNav){const i=e.mobileNav;return n.jsx(dz,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return n.jsx(_P,{...e})}const pz="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",hz="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",fz=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],mz=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],gz={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},vz=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],xz=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],yz=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function wz(e){let a=e>>>0;return()=>{a|=0,a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function _v(e){let a=2166136261;for(let i=0;i<e.length;i++)a^=e.charCodeAt(i),a=Math.imul(a,16777619);return a>>>0}function bz(e){const a=mz.find(i=>i.match.test(e));return a?a.profile:gz}function Cv(e,a){const i=bz(e),s=wz(_v(e||"teambridge")^a),l=m=>m[Math.floor(s()*m.length)],d=[],p=new Set;for(;d.length<a;){const m=`${l(vz)} ${l(xz)}`;if(p.has(m))continue;p.add(m);const v=s()<.16;d.push({name:m,role:l(i.roles),location:l(i.locations),tenure:l(yz),credential:l(i.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const kz=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],_z=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function Cz(e){var a;return((a=kz.find(i=>i.match.test(e)))==null?void 0:a.shapes)??_z}function jz(e){const a=Cv(e,8),[i,s,l,d]=a,p=4+_v(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${p} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const Sz=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],n0=["6a–2p","2p–10p","10p–6a"],Mz=[4,3,3,4,4,3,3];function $z(e){var l,d;const a=Cv(e,12);let i=0;const s=Sz.map((p,m)=>{const v=[];for(let x=0;x<Mz[m];x++){const y=a[i%a.length].name.split(" ")[0];i++,v.push({time:n0[x%n0.length],who:y})}return{label:p,shifts:v}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const Nz=1100,Rz=440,Lz=4,pu=320,Az=720,hu=2e3,Tz=950,r0=1600,jv=84,Iu=81,Eu=48,o0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],Iz=7,Ez=24,a0=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],Pz="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",zz='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',i0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",Oz=`Time for a test run, so you can see how I work? Let's simulate a last minute call out.

If you provide your cell number we can make sure everything is hooked up and test things live together.`,Fz="Perfect — I’ll text you there. And here’s Ultron live: Maria Ellis just dropped her 2:00 PM shift at Riverside Clinic. I opened it under New and found 8 qualified RNs who can cover it.";function Pu(e){if(!e)return null;const a=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s}function s0(e){return e.includes("	")||e.trim().includes(`
`)}function Dz(e){var l;const a=e.trim().split(/\s+/),i=((l=a[0])==null?void 0:l[0])??"",s=a.length>1?a[a.length-1][0]:"";return(i+s).toUpperCase()}function Bz(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}const Wz={};function Hz({answers:e=Wz,onContinued:a,onPhoneSubmitted:i}){const[s,l]=g.useState([]),[d,p]=g.useState(""),[m,v]=g.useState([]),[x,y]=g.useState(null),[w,k]=g.useState("roster"),[M,_]=g.useState(!1),[C,L]=g.useState(!1),[N,j]=g.useState(null),[S,P]=g.useState(null),[$,R]=g.useState(null),[A,E]=g.useState(""),[D,G]=g.useState(!1),[Z,H]=g.useState(!1),[Y,ee]=g.useState(!1),[oe,ce]=g.useState("grant"),[de,K]=g.useState(!1),[F,q]=g.useState(!1),[T,z]=g.useState("delivering"),[ne,U]=g.useState(0),[X,se]=g.useState(-1),[B,O]=g.useState(""),[ae,ge]=g.useState(!1),[ue]=g.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(prefers-reduced-motion: reduce)").matches)}),[xe,le]=g.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(max-width: 600px)").matches)}),ye=g.useRef([]),Ce=g.useRef(null),Ae=g.useRef(null),Ne=g.useRef(null),Pe=g.useRef(null),_e=g.useRef(null),Ue=g.useRef(null),Ge=g.useMemo(()=>{var re;return((re=e.workforceType)==null?void 0:re.trim())||Pu(e.companyWebsite)||""},[e]),St=g.useMemo(()=>Cz(Ge),[Ge]),Oe=g.useMemo(()=>{const re=Pu(e.companyWebsite),we=[{kind:"text",text:`Welcome to your ${re?`${re} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return we.push({kind:"text",text:Pz}),we.push({kind:"rosterCta"}),we},[e]),ot=(re,me)=>{ye.current.push(window.setTimeout(me,re))};g.useEffect(()=>()=>{ye.current.forEach(re=>window.clearTimeout(re)),Ce.current&&window.clearTimeout(Ce.current)},[]),g.useEffect(()=>{var we;const re=(we=window.matchMedia)==null?void 0:we.call(window,"(max-width: 600px)");if(!re)return;const me=()=>le(re.matches);return me(),re.addEventListener("change",me),()=>re.removeEventListener("change",me)},[]);const ht=re=>{if(j({file:re,state:"uploading",progress:8}),ue){j({file:re,state:"uploading",progress:92});return}ot(180,()=>j({file:re,state:"uploading",progress:38})),ot(460,()=>j({file:re,state:"uploading",progress:74})),ot(780,()=>j({file:re,state:"uploading",progress:92}))},Vt=re=>{if(P({file:re,state:"uploading",progress:8}),ue){P({file:re,state:"complete",progress:100});return}ot(180,()=>P({file:re,state:"uploading",progress:38})),ot(460,()=>P({file:re,state:"uploading",progress:74})),ot(780,()=>P({file:re,state:"complete",progress:100}))};g.useEffect(()=>{if(ue){U(Oe.length),se(-1),z("ready");return}const re=[];let me=null;const we=(Xe,kn)=>{re.push(window.setTimeout(kn,Xe))},Ze=Xe=>{if(Xe>=Oe.length){ge(!1),z("ready");return}ge(!0),we(Rz,()=>{ge(!1),se(Xe);const kn=Oe[Xe];if(kn.kind!=="text"){we(Az,()=>{U(Xe+1),se(-1),we(pu,()=>Ze(Xe+1))});return}O("");const Pn=kn.text;let Zn=0;me=window.setInterval(()=>{Zn+=1,O(Pn.slice(0,Zn)),Zn>=Pn.length&&(me&&window.clearInterval(me),me=null,we(pu,()=>{U(Xe+1),se(-1),O(""),we(pu,()=>Ze(Xe+1))}))},Lz)})};return z("delivering"),Ze(0),()=>{re.forEach(Xe=>window.clearTimeout(Xe)),me&&window.clearInterval(me)}},[Oe,ue]),g.useEffect(()=>{const re=me=>{const we=me.target;we!=null&&we.isContentEditable||(we==null?void 0:we.tagName)==="INPUT"||(we==null?void 0:we.tagName)==="TEXTAREA"||(we==null?void 0:we.tagName)==="SELECT"||me.metaKey||me.ctrlKey||me.altKey||me.key.toLowerCase()!=="m"||(me.preventDefault(),K(!0))};return document.addEventListener("keydown",re),()=>document.removeEventListener("keydown",re)},[]);const dt=()=>{H(!0),Ne.current&&window.clearTimeout(Ne.current),Ne.current=window.setTimeout(()=>K(!1),r0)},Gt=()=>{ee(!0),Ne.current&&window.clearTimeout(Ne.current),Ne.current=window.setTimeout(()=>K(!1),r0)};g.useEffect(()=>{var re;(re=Pe.current)==null||re.scrollIntoView({block:"end",behavior:"smooth"})},[s,x,T,ne,X,B,ae]);const Kn=(d.trim().length>0||m.length>0)&&x===null,bn=re=>{const me=Array.from(re,we=>we.name);v(we=>[...we,...me.filter(Ze=>!we.includes(Ze))])},ir=re=>v(me=>me.filter(we=>we!==re)),En=(re,me={})=>{const we=ue?300:me.workingMs??Nz,Ze=ue?200:Tz;y(me.workingLabel??"");let Xe=0;const kn=()=>{var oo;Ce.current&&(window.clearTimeout(Ce.current),Ce.current=null);const Pn=re[Xe];if(!Pn)return;const Zn=Xe===re.length-1;if(Xe+=1,l(Na=>[...Na,Pn]),Zn){y(null),Ae.current=null,(oo=me.then)==null||oo.call(me);return}y(""),Ce.current=window.setTimeout(kn,Ze)};Ae.current=kn,Ce.current=window.setTimeout(kn,we)},Ao=()=>{var re;xe&&((re=Ae.current)==null||re.call(Ae))},Te=(re,me=[])=>{s.some(we=>we.role==="operator")||a==null||a(),l(we=>[...we,{role:"operator",text:re,...me.length?{attachments:me}:{}}])},tt=(re,me)=>{_(!1),L(!0),me&&ht(me),En([{role:"ultron",text:`Got it — read ${re}: ${jv} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Iu} people in. ${i0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:hu,then:()=>k("schedule")})},ft=()=>{_(!0),L(!0),En([{role:"ultron",text:`Done — I spun up ${Eu} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:i0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:hu,then:()=>k("schedule")})},gt=re=>{re.file&&Vt(re.file),R({problems:jz(Ge),week:$z(Ge)});const me=re.fileName?`Read ${re.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${re.shape.toLowerCase()}. Here's what's in it.`;En([{role:"ultron",text:me},{role:"ultron",text:"",card:"week"},{role:"ultron",text:Oz}],{workingLabel:re.fileName?"Turning it into shifts…":"Building your week…",workingMs:hu,then:()=>k("done")})},sr=(re,me=[])=>{if(!re&&me.length===0||x!==null)return;if(Te(re,me),w==="roster"){me.length>0?tt(me[0],{name:me[0]}):s0(re)?tt("your pasted roster"):En([{role:"ultron",text:zz}]);return}if(w==="schedule"){me.length>0?gt({fileName:me[0],file:{name:me[0]}}):s0(re)?gt({fileName:"your pasted schedule"}):gt({shape:re});return}if(!D){const Ze=re.replace(/\D/g,"");Ze.length>=7&&Ze.length<=15?(G(!0),E(Ze),i==null||i(Ze),En([{role:"ultron",text:Fz}])):En([{role:"ultron",text:"Send me the best mobile number to reach you — any normal format is fine."}]);return}const we=s.filter(Ze=>Ze.role==="ultron").length;En([{role:"ultron",text:xp(re,we)}])},lr=()=>{const re=d.trim();!re&&m.length===0||x!==null||(sr(re,m),p(""),v([]))},ro=re=>{if(!re||re.length===0||w!=="roster"||x!==null)return;const me=Array.from(re),we=me.map(Ze=>Ze.name);Te("",we),tt(we[0],{name:me[0].name,type:me[0].type,size:me[0].size})},jr=re=>{if(!re||re.length===0||w!=="schedule"||x!==null)return;const me=Array.from(re),we=me.map(Ze=>Ze.name);Te("",we),gt({fileName:we[0],file:{name:me[0].name,type:me[0].type,size:me[0].size}})},cr=x!==null?[]:w==="roster"?[{icon:Yr,label:"No roster handy? Use sample teammates",onTap:()=>{Te("Use sample teammates"),ft()}}]:w==="schedule"?St.map(re=>({icon:Ln,label:re,onTap:()=>{Te(re),gt({shape:re})}})):[],$a=w!=="done"&&cr.length>0?n.jsx(MF,{"aria-label":"Suggestions",children:cr.map(({icon:re,label:me,onTap:we})=>n.jsxs($F,{type:"button",onClick:we,children:[re&&n.jsx(re,{size:14}),me]},me))}):null,Fi=w==="roster"?"Attach your roster, or ask Ultron anything…":w==="schedule"?"Attach your schedule, or describe your week…":D?"Tell Ultron what to take on next…":"Enter your cell number…",Qn=w==="done"&&!D,Mt=oe==="waitlist",Di=Mt?Y:Z;return n.jsxs(Vz,{children:[n.jsx(ev,{links:1}),n.jsx(tv,{}),n.jsx(Gz,{$condensed:F,children:n.jsxs(Yz,{$condensed:F,children:[n.jsxs(Kz,{$condensed:F,role:"img","aria-label":"Ultron",children:[n.jsx(l0,{$show:!F,"aria-hidden":"true",children:n.jsx(ct,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(l0,{$show:F,$compact:!0,"aria-hidden":"true",children:n.jsx(ct,{mark:"magnetic",size:36,tone:"auto",state:"active"})})]}),n.jsxs(Qz,{$condensed:F,children:[n.jsx(Zz,{$condensed:F,children:"Welcome"}),n.jsx(Xz,{$condensed:F,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(Jz,{onWheel:re=>{if(re.deltaY===0)return;const me=re.deltaY>0?"down":"up";if(me==="up"&&re.currentTarget.scrollTop<=8){_e.current=null,q(!1);return}_e.current=me},onTouchStart:re=>{var me;Ue.current=((me=re.touches[0])==null?void 0:me.clientY)??null},onTouchMove:re=>{var Xe;const me=(Xe=re.touches[0])==null?void 0:Xe.clientY,we=Ue.current;if(me==null||we==null||me===we)return;const Ze=me<we?"down":"up";if(Ue.current=me,Ze==="up"&&re.currentTarget.scrollTop<=8){_e.current=null,q(!1);return}_e.current=Ze},onTouchEnd:()=>{Ue.current=null},onScroll:re=>{const me=_e.current;if(!me)return;_e.current=null;const we=re.currentTarget.scrollTop;me==="down"&&we>56&&q(!0),me==="up"&&we<=8&&q(!1)},children:n.jsxs(cO,{children:[n.jsx(ol,{"data-from":"ultron",children:n.jsxs(d0,{children:[Oe.slice(0,X>=0?X+1:ne).map((re,me)=>{if(re.kind==="rosterCta"){const Ze=w==="roster"&&!C;return n.jsx(g.Fragment,{children:n.jsx(c0,{children:C?w==="roster"?N?n.jsx(rl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:N.state,progress:N.progress,file:N.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(al,{children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(Yr,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Roster"}),n.jsx(cl,{children:x||"Generating sample teammates…"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(p0,{})})]}):n.jsxs(al,{$done:!0,children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(mu,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Roster"}),n.jsx(cl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(yn,{size:18})})]}):n.jsxs(nO,{children:[Ze&&!N&&n.jsx(rO,{"aria-hidden":"true",children:n.jsx(oO,{children:[...o0,...o0].map((Xe,kn)=>n.jsx(aO,{children:n.jsx("img",{src:Xe.photo,alt:""})},`${Xe.name}-${kn}`))})}),n.jsx(rl,{"data-roster-flow":Ze&&!N?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(N==null?void 0:N.state)??"empty",progress:(N==null?void 0:N.progress)??0,file:(N==null?void 0:N.file)??null,disabled:x!==null&&!N,footerSlot:Ze&&T==="ready"?$a:void 0,onFileSelect:Xe=>ro([Xe]),onClear:()=>{}})]})})},`beat-${me}`)}const we=me===X;return n.jsxs(u0,{"data-from":"ultron",children:[we?B:re.text,we&&n.jsx(lO,{"aria-hidden":"true"})]},`beat-${me}`)}),ae&&n.jsx(iO,{children:n.jsxs(g0,{"aria-label":"Ultron is typing",children:[n.jsx(la,{}),n.jsx(la,{}),n.jsx(la,{})]})})]})}),s.map((re,me)=>re.card?n.jsx(ol,{"data-from":"ultron",children:n.jsx(d0,{children:n.jsx(c0,{children:re.card==="roster"?n.jsx(Uz,{sample:M}):re.card==="scheduleCta"?w==="schedule"?S?n.jsx(rl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:S.state,progress:S.progress,file:S.file,onFileSelect:()=>{},onClear:()=>{}}):x!==null?n.jsxs(al,{children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(Ln,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Schedule"}),n.jsx(cl,{children:x||"Building your week…"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(p0,{})})]}):n.jsx(rl,{variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:$a,onFileSelect:we=>jr([we]),onClear:()=>{}}):n.jsxs(al,{$done:!0,children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(mu,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Schedule"}),n.jsx(cl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(yn,{size:18})})]}):$?n.jsx(qz,{problems:$.problems,week:$.week}):null})})},me):n.jsx(ol,{"data-from":re.role,children:n.jsxs(TF,{"data-from":re.role,children:[re.text&&n.jsx(u0,{"data-from":re.role,children:re.text}),re.attachments&&n.jsx(IF,{children:re.attachments.map(we=>n.jsxs(x0,{children:[n.jsx(Zr,{size:14}),we]},we))})]})},me)),x!==null&&n.jsx(ol,{"data-from":"ultron",children:n.jsx(wF,{type:"button",onClick:Ao,disabled:!xe,"aria-label":x?`${x} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(yF,{children:[n.jsxs(g0,{"aria-hidden":"true",children:[n.jsx(la,{}),n.jsx(la,{}),n.jsx(la,{})]}),x&&n.jsx(_F,{role:"status","aria-live":"polite",children:x}),n.jsx(bF,{"aria-hidden":"true",children:"Tap to continue"})]})})}),n.jsx("div",{ref:Pe})]})}),T==="ready"&&n.jsxs(CF,{children:[n.jsx(jF,{role:x!==null?"status":"img","aria-label":x!==null?"Ultron is working":"Ultron",children:n.jsxs(SF,{"aria-hidden":"true",children:[n.jsx(v0,{$show:x!==null,children:n.jsx(ct,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(v0,{$show:x===null,children:n.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]})}),n.jsxs(NF,{$phoneMode:Qn,onSubmit:re=>{re.preventDefault(),lr()},children:[m.length>0&&n.jsx(LF,{"aria-label":"Files to send",children:m.map(re=>n.jsxs(x0,{children:[n.jsx(Zr,{size:14}),re,n.jsx(AF,{type:"button","aria-label":`Remove ${re}`,onClick:()=>ir(re),children:n.jsx(Ci,{size:12})})]},re))}),n.jsxs(RF,{children:[!Qn&&n.jsx(y0,{children:n.jsx(ig,{state:"idle",onSelect:bn})}),n.jsx(EF,{$phoneMode:Qn,rows:1,value:d,placeholder:Fi,"aria-label":Qn?"Cell phone number":"Message Ultron",inputMode:Qn?"tel":"text",autoComplete:Qn?"tel":"off",onChange:re=>{const me=re.target.value;p(Qn?me.replace(/[^\d+().\-\s]/g,""):me)},onKeyDown:re=>{re.key==="Enter"&&!re.shiftKey&&(re.preventDefault(),lr())},onPaste:re=>{var we;const me=(we=re.clipboardData)==null?void 0:we.files;me&&me.length>0&&(re.preventDefault(),bn(me))}}),n.jsx(y0,{children:n.jsx(Ca,{state:Kn?"ready":"disabled-invalid",onSend:lr})})]})]})]}),n.jsx(ZO,{}),n.jsxs(ug,{open:de,onClose:()=>K(!1),size:"lg","aria-label":`${Mt?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(XO,{children:[n.jsx(eF,{"aria-hidden":"true",children:n.jsx(nv,{size:300})}),n.jsx(tF,{type:"button","aria-label":"Close",onClick:()=>K(!1),children:n.jsx(Ci,{size:18})}),n.jsxs(nF,{children:[n.jsx(rF,{"aria-hidden":"true"}),Mt?"Ultron early access":"Your welcome grant"]}),!Mt&&n.jsxs(oF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(aF,{children:[n.jsx(iF,{children:"$"}),"1,000"]}),n.jsxs(sF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(lF,{$prominent:Mt,children:Mt?"Be first when access opens.":"Turn Ultron loose."}),n.jsx(cF,{children:Mt?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),n.jsx(dF,{"aria-label":Mt?"Waitlist benefits":"Grant benefits",children:Mt?n.jsxs(n.Fragment,{children:[n.jsx(sa,{children:"Priority access"}),n.jsx(sa,{children:"One text when ready"}),n.jsx(sa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(sa,{children:"100,000 credits"}),n.jsx(sa,{children:"Up to 3 months"}),n.jsx(sa,{children:"You approve every action"})]})}),Di?n.jsxs(gF,{role:"status",children:[n.jsx(yn,{size:20}),Mt?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):n.jsxs(uF,{onSubmit:re=>{re.preventDefault(),A.trim()&&(Mt?Gt():dt())},children:[n.jsx(pF,{htmlFor:"welcome-grant-phone",children:Mt?"Where should we send your access text?":"Where should Ultron send proposals?"}),n.jsxs(hF,{children:[n.jsx(fF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:A,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:re=>E(re.target.value.replace(/\D/g,""))}),n.jsx(mF,{type:"submit",variant:"tertiary",size:"lg",disabled:!A.trim(),children:Mt?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(vF,{children:Mt?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(JO,{type:"button",onClick:()=>{Ne.current&&window.clearTimeout(Ne.current),ce(re=>re==="grant"?"waitlist":"grant")},children:["Demo: show ",Mt?"welcome grant":"waitlist"]})]})]})}function Uz({sample:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(!0),d=fz.slice(0,6),p=(e?Eu:Iu)-d.length;return n.jsxs(Nv,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(uO,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(m=>!m),children:[e?n.jsx(pO,{children:n.jsxs(hO,{children:[Eu," sample teammates, ready to run a full week"]})}):n.jsxs(fO,{children:[n.jsxs(mO,{children:[Iu," ",n.jsxs(gO,{children:["/",jv]})]}),n.jsxs(vO,{children:[n.jsx(yn,{size:16})," imported clean"]})]}),n.jsx(zu,{$open:s,"aria-hidden":"true",children:n.jsx(Tn,{size:16})})]}),s&&n.jsxs(xO,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((m,v)=>n.jsxs(yO,{$i:v,children:[n.jsxs(wO,{"aria-hidden":"true",children:[Dz(m.name),n.jsx("img",{src:Bz(v),alt:"",loading:"lazy",onError:x=>{x.currentTarget.style.display="none"}})]}),n.jsxs(bO,{children:[n.jsx(kO,{children:m.name}),n.jsxs(_O,{children:[m.role," · ",m.location," · ",m.tenure]})]}),m.credentialStatus==="expiring"?n.jsxs(An,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[m.credential," · ",m.expiresInDays,"d"]}):n.jsx(An,{size:"sm",variant:"subtle",color:"green",children:m.credential}),e&&n.jsx(An,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},m.name)),n.jsx(CO,{children:e?`+ ${p} more · every one tagged “Sample”`:`+ ${p} more imported clean`})]}),!e&&n.jsxs(jO,{children:[n.jsxs(SO,{type:"button","aria-expanded":a,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(m=>!m),children:[n.jsxs(MO,{children:[a0.length," rows kept for review"]}),n.jsxs($O,{children:[n.jsx(Rv,{"aria-hidden":"true",children:n.jsx(ga,{size:15})}),n.jsx(zu,{$open:a,"aria-hidden":"true",children:n.jsx(Tn,{size:16})})]})]}),a&&n.jsx(Lv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:a0.map(m=>n.jsxs(Av,{children:[n.jsx(RO,{"aria-hidden":"true",children:n.jsx(ga,{size:15})}),n.jsxs(Tv,{children:[n.jsx(LO,{children:m.where}),n.jsx(AO,{children:m.reason})]})]},m.where))})]})]})}function qz({problems:e,week:a}){const[i,s]=g.useState(!1);return n.jsxs(Nv,{"aria-label":"Your week",children:[n.jsxs(TO,{children:[n.jsxs(EO,{children:[n.jsxs(h0,{children:[n.jsx(f0,{children:Iz})," days"]}),n.jsx(PO,{"aria-hidden":"true",children:"·"}),n.jsxs(h0,{children:[n.jsx(f0,{children:Ez})," shifts"]})]}),n.jsxs(IO,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(l=>!l),children:[n.jsx(Rv,{"aria-hidden":"true",children:n.jsx(ga,{size:15})}),n.jsx(zu,{$open:i,"aria-hidden":"true",children:n.jsx(Tn,{size:16})})]})]}),i&&n.jsx(NO,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((l,d)=>n.jsxs(Av,{children:[n.jsx(zO,{$kind:l.kind,"aria-hidden":"true",children:l.kind==="missing"?n.jsx(Ln,{size:15}):n.jsx(ga,{size:15})}),n.jsxs(Tv,{children:[n.jsxs(OO,{children:[l.worker," · ",l.role]}),n.jsx(FO,{children:l.detail})]})]},`${l.worker}-${d}`))}),n.jsx(DO,{children:n.jsx(BO,{role:"table","aria-label":"Next week's shifts",children:a.map(l=>n.jsxs(WO,{role:"column",children:[n.jsx(HO,{children:l.label}),l.shifts.map((d,p)=>n.jsxs(UO,{$flag:d.flag,children:[n.jsx(qO,{children:d.time}),n.jsx(VO,{children:d.who})]},`${l.label}-${p}`))]},l.label))})})]})}const Vz=f.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,Sv="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",Mv=He`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${Sv};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,$v=e=>He`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${Sv}, transparent);
  pointer-events: none;
`,Gz=f.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  /* The glass bar only exists in the condensed state: the large welcome lockup
     floats directly on the scene with no frost or fade, and the bar eases in
     as the header condenses over scrolling content. */
  &::before {
    ${Mv}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${$v("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,It="320ms",Et="cubic-bezier(0.22, 1, 0.36, 1)",Yz=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?"68px":"249px"};
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${It} ${Et};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?"47px":"229px"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Kz=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  top: ${e=>e.$condensed?"20px":"24px"};
  left: ${e=>e.$condensed?"var(--space-6)":"50%"};
  width: ${e=>e.$condensed?"36px":"140px"};
  height: ${e=>e.$condensed?"36px":"140px"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  opacity: 1;
  visibility: visible;
  transition:
    top ${It} ${Et},
    left ${It} ${Et},
    width ${It} ${Et},
    height ${It} ${Et},
    transform ${It} ${Et};

  &::before {
    content: '';
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary) 0%,
      transparent 72%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"10px":"16px"};
    left: ${e=>e.$condensed?"var(--space-4)":"50%"};
    width: ${e=>e.$condensed?"32px":"140px"};
    height: ${e=>e.$condensed?"32px":"140px"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,l0=f.span`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  display: block;
  opacity: ${e=>e.$show?1:0};
  transform: translate(-50%, -50%);
  transform-origin: center;
  pointer-events: none;
  transition: opacity ${e=>e.$show?"190ms 55ms":"130ms"} var(--ease-out);
  will-change: opacity;

  @media (max-width: 600px) {
    transform: translate(-50%, -50%) scale(${e=>e.$compact?.8889:1});
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Qz=f.div`
  display: contents;
`,Zz=f.span`
  position: absolute;
  top: ${e=>e.$condensed?"15px":"180px"};
  left: ${e=>e.$condensed?"72px":"50%"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  max-width: ${e=>e.$condensed?"calc(100% - 96px)":"calc(100% - 48px)"};
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"clamp(24px, 3vw, 30px)"};
  font-weight: ${e=>e.$condensed?"var(--font-weight-medium)":"var(--font-weight-bold)"};
  line-height: ${e=>e.$condensed?"var(--line-height-relaxed)":"var(--line-height-tight)"};
  letter-spacing: ${e=>e.$condensed?"var(--tracking-wide)":"var(--tracking-tight)"};
  color: var(--color-content-primary);
  white-space: nowrap;
  transition:
    top ${It} ${Et},
    left ${It} ${Et},
    transform ${It} ${Et},
    font-size ${It} ${Et},
    font-weight ${It} ${Et},
    line-height ${It} ${Et},
    letter-spacing ${It} ${Et};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"7px":"168px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,Xz=f.span`
  position: absolute;
  top: ${e=>e.$condensed?"36px":"213px"};
  left: ${e=>e.$condensed?"72px":"50%"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  max-width: ${e=>e.$condensed?"calc(100% - 96px)":"calc(100% - 48px)"};
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"var(--text-md)"};
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    top ${It} ${Et},
    left ${It} ${Et},
    transform ${It} ${Et},
    font-size ${It} ${Et},
    line-height ${It} ${Et};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"27px":"197px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-xs)":"var(--text-sm)"};
    line-height: ${e=>e.$condensed?"var(--line-height-snug)":"var(--line-height-relaxed)"};
  }

  @media (max-width: 600px) and (max-height: 700px) {
    display: ${e=>e.$condensed?"none":"block"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,Jz=f.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Lo=$e`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,c0=f.div`
  animation: ${Lo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eO=$e`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,tO=$e`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,nO=f.div`
  position: relative;
  width: 100%;
`,rO=f.div`
  position: absolute;
  z-index: 2;
  top: var(--space-10);
  left: 50%;
  width: 184px;
  height: 44px;
  overflow: hidden;
  transform: translateX(-50%);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    rgb(0 0 0 / 10%) 8%,
    rgb(0 0 0 / 35%) 16%,
    rgb(0 0 0 / 70%) 24%,
    black 34%,
    black 66%,
    rgb(0 0 0 / 70%) 76%,
    rgb(0 0 0 / 35%) 84%,
    rgb(0 0 0 / 10%) 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    rgb(0 0 0 / 10%) 8%,
    rgb(0 0 0 / 35%) 16%,
    rgb(0 0 0 / 70%) 24%,
    black 34%,
    black 66%,
    rgb(0 0 0 / 70%) 76%,
    rgb(0 0 0 / 35%) 84%,
    rgb(0 0 0 / 10%) 92%,
    transparent 100%
  );

  @media (max-width: 600px) {
    top: var(--space-6);
  }
`,oO=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${tO} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,aO=f.span`
  display: block;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  overflow: hidden;
  border: 2px solid var(--color-bg-primary);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  box-shadow: 0 2px 8px rgb(15 23 42 / 14%);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,rl=f(vg)`
  && {
    min-height: 164px;
    overflow: hidden;
    transition:
      min-height 420ms var(--ease-out),
      padding 420ms var(--ease-out),
      gap 420ms var(--ease-out),
      border-color var(--duration-base) var(--ease-out),
      border-style var(--duration-base) var(--ease-out),
      background var(--duration-base) var(--ease-out);
  }

  &&[data-roster-flow][data-state='empty'] {
    min-height: 208px;
    /* Clears the absolutely-positioned people flow above the text block, plus
       a fuller breath beneath it (avatars occupy ~24-68px of the surface). */
    padding-top: 104px;
    gap: var(--space-4);
  }

  /* The roster-specific people flow replaces Alloy's upload-cloud glyph. */
  &&[data-roster-flow][data-state='empty'] > span.alloy-icon-slot {
    display: none;
  }

  &&[data-state='uploading'] {
    min-height: 104px;
    padding: var(--space-5);
    gap: var(--space-3);
    border-style: solid;
  }

  &&[data-state='complete'] {
    min-height: 64px;
    padding: var(--space-4);
    gap: var(--space-2);
    border-style: solid;
    border-color: var(--color-success-border);
  }

  /* The drop zone's headline carries the ask, so it leads at body size rather
     than Alloy's default caption scale. */
  &&[data-state='empty'] p:first-of-type {
    font-size: var(--text-md);
    font-weight: var(--font-weight-semibold);
  }

  /* Keep the welcome intake action visually consistent with the rounded
     suggestion controls below it without affecting footer actions. Alloy's
     primary fill (--color-bg-inverse-primary) resolves to the page surface
     inside this card, so the button disappears against the dark drop zone —
     pin the inverse pair to the content/bg tokens, which flip correctly with
     the theme (white fill on dark, dark fill on light). */
  &&[data-state='empty'] > button {
    min-width: 112px;
    padding-inline: var(--space-4);
    border-radius: var(--radius-full);
    background: var(--color-content-primary);
    color: var(--color-bg-primary);
  }

  &&[data-state='empty'] > button:hover:not(:disabled) {
    background: var(--color-content-secondary);
  }

  & > *:not(input) {
    animation: ${eO} 300ms var(--ease-out) both;
  }

  /* Processing begins immediately in this guided flow, so removing the file
     after selection would be misleading. The completed check remains visible. */
  button[aria-label='Remove file'] {
    display: none;
  }

  @media (max-width: 600px) {
    && {
      min-height: 144px;
      padding: var(--space-5) var(--space-4);
      gap: var(--space-3);
    }

    &&[data-roster-flow][data-state='empty'] {
      min-height: 166px;
      padding: 76px var(--space-4) var(--space-4);
      gap: var(--space-2);
    }

    &&[data-state='uploading'] {
      min-height: 88px;
      padding: var(--space-4);
      gap: var(--space-2);
    }

    &&[data-state='complete'] {
      min-height: 56px;
      padding: var(--space-3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    && {
      transition: none;
    }

    & > *:not(input) {
      animation: none;
    }
  }
`,iO=f.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sO=$e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,lO=f.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${sO} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4) var(--space-4);
  }
`,ol=f.div`
  display: flex;
  animation: ${Lo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,d0=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,u0=f.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
  white-space: pre-line;

  /* Outbound (operator) — slate bubble, right side (matches the event page).
     Width is capped by the enclosing MsgGroup. */
  &[data-from='operator'] {
    max-width: 100%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose (matches the event page). */
  &[data-from='ultron'] {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: var(--text-xs);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,al=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out),
              opacity var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  /* Settled state — the step is done, so the row recedes: liquid glass instead
     of the opaque fill, dimmed, and no lift on hover. It stays legible as a
     record of what happened without competing with the live beat below it.
     Declared after the base :hover so it wins at equal specificity. */
  ${e=>e.$done&&He`
    ${Cr}
    opacity: 0.6;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
      opacity: 1;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: opacity var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,il=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,sl=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,ll=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,cl=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,dO=$e`
  to { transform: rotate(360deg); }
`,p0=f.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${dO} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,dl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,Nv=f.div`
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: left;
`,uO=f.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: var(--radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,pO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,hO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,fO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,mO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,gO=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,vO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,xO=f.div`
  display: flex;
  flex-direction: column;
`,yO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wO=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-bg-tertiary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-secondary);

  & > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,bO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,kO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,_O=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,CO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jO=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,SO=f.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,MO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,$O=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,Rv=f.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,zu=f.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,Lv=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NO=f(Lv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,Av=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,RO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,Tv=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,LO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,AO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,TO=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,IO=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-secondary); }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`,EO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,h0=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,f0=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,PO=f.span`
  color: var(--color-content-tertiary);
`,zO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&He`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&He`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&He`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,OO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,FO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,DO=f.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,BO=f.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,WO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,HO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,UO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

  ${e=>e.$flag==="open"&&He`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&He`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }
`,qO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,VO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,m0="cubic-bezier(0.22, 1, 0.36, 1)",GO=$e`
  from {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`,YO=$e`
  from {
    opacity: 1;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
  to {
    opacity: 0;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`,KO=$e`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,QO=$e`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,ZO=PS`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${GO} 440ms ${m0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${KO} 560ms ${m0} both;
    }
  }

  @media (max-width: 620px) {
    [role='dialog'][aria-label$='Ultron access'][data-state] {
      padding:
        max(var(--space-4), env(safe-area-inset-top))
        max(var(--space-4), env(safe-area-inset-right))
        max(var(--space-4), env(safe-area-inset-bottom))
        max(var(--space-4), env(safe-area-inset-left));

      & > div {
        width: 100%;
        max-height: calc(
          100dvh
          - max(var(--space-4), env(safe-area-inset-top))
          - max(var(--space-4), env(safe-area-inset-bottom))
          - 40px
        );
        border-radius: var(--radius-xl);
      }
    }
  }

  [role='dialog'][aria-label$='Ultron access'][data-state='closed'] {
    animation: ${YO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${QO} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,XO=f.section`
  position: relative;
  width: 100%;
  min-height: 0;
  padding: var(--space-10);
  overflow-x: hidden;
  overflow-y: auto;
  background:
    radial-gradient(75% 90% at 100% 0%, color-mix(in srgb, var(--Alloy-blue-500) 38%, transparent), transparent 68%),
    radial-gradient(70% 80% at 0% 100%, color-mix(in srgb, var(--Alloy-purple-500) 30%, transparent), transparent 72%),
    linear-gradient(145deg, var(--Alloy-slate-950), var(--Alloy-purple-950));
  border: none;
  border-radius: var(--radius-xl);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 620px) {
    padding:
      var(--space-8)
      var(--space-6)
      max(var(--space-6), env(safe-area-inset-bottom));
    gap: var(--space-4);
  }
`,JO=f.button`
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-full);
  background: rgba(15, 23, 42, 0.72);
  color: var(--Alloy-slate-200);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  cursor: pointer;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(30, 41, 59, 0.9);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,eF=f.div`
  && {
    position: absolute;
    right: -74px;
    bottom: -44px;
    z-index: 0;
    color: var(--Alloy-blue-100);
    opacity: 0.075;
    transform: rotate(-8deg);
    filter: drop-shadow(0 0 32px color-mix(in srgb, var(--Alloy-blue-300) 30%, transparent));
    pointer-events: none;
  }

  @media (max-width: 620px) {
    && {
      right: -112px;
      bottom: -34px;
      opacity: 0.06;
      transform: rotate(-8deg) scale(0.82);
    }
  }
`,tF=f.button`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  color: var(--Alloy-slate-200);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: var(--color-bg-always-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`,nF=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  width: fit-content;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--Alloy-blue-200);
`,rF=f.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,oF=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,aF=f.div`
  font-family: 'Geist', var(--font-sans), sans-serif;
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.05em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;

  @media (max-width: 620px) {
    font-size: clamp(48px, 17vw, 64px);
  }
`,iF=f.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,sF=f.span`
  padding-bottom: var(--space-1);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  color: var(--Alloy-slate-300);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);

  strong {
    color: var(--Alloy-matcha-400);
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 620px) {
    font-size: var(--text-xs);
  }
`,lF=f.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: ${e=>e.$prominent?"clamp(36px, 6vw, 48px)":"var(--text-3xl)"};
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);

  @media (max-width: 620px) {
    font-size: ${e=>e.$prominent?"clamp(32px, 10vw, 40px)":"var(--text-3xl)"};
  }
`,cF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,dF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,sa=f.span`
  display: inline-flex;
  align-items: center;
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.065);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--Alloy-slate-200);
`,uF=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,pF=f.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,hF=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,fF=f.input`
  flex: 1;
  min-width: 200px;
  height: var(--space-12);
  padding: 0 var(--space-4);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  color: var(--color-bg-always-light);
  outline: none;
  transition:
    border-color var(--duration-fast) var(--ease-default),
    background var(--duration-fast) var(--ease-default);

  &::placeholder { color: var(--Alloy-slate-400); }
  &:focus-visible {
    border-color: var(--Alloy-blue-300);
    background: rgba(255, 255, 255, 0.11);
  }

  @media (max-width: 520px) {
    width: 100%;
    min-width: 0;
  }
`,mF=f(ze)`
  && {
    min-width: 156px;
    color: var(--Alloy-slate-950);
    background: var(--Alloy-matcha-400);
    border-color: transparent;
    font-weight: var(--font-weight-bold);
    box-shadow: 0 8px 28px color-mix(in srgb, var(--Alloy-matcha-400) 24%, transparent);
  }

  &&:hover:not(:disabled) {
    background: var(--Alloy-matcha-300);
    transform: translateY(-1px);
  }

  &&:disabled {
    color: var(--Alloy-slate-600);
    background: var(--Alloy-slate-300);
    box-shadow: none;
  }

  @media (max-width: 520px) {
    && {
      width: 100%;
    }
  }
`,gF=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-12);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-bg-always-light);

  & svg {
    flex-shrink: 0;
    color: var(--Alloy-matcha-400);
  }
`,vF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,xF=$e`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,g0=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);

  @media (max-width: 600px) {
    padding: 0;
    background: transparent;
  }
`,la=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${xF} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yF=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);

  @media (max-width: 600px) {
    width: 100%;
    gap: var(--space-2);
  }
`,wF=f.button`
  display: inline-flex;
  padding: 0;
  border: 0;
  border-radius: var(--radius-lg);
  background: transparent;
  color: inherit;
  text-align: left;
  pointer-events: none;

  @media (max-width: 600px) {
    width: 100%;
    min-height: 44px;
    padding: var(--space-2) var(--space-3);
    border: 1px solid var(--color-border-opaque);
    background: var(--color-bg-secondary);
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;

    &:active {
      background: var(--color-bg-tertiary);
      transform: scale(0.995);
    }

    &:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
  }
`,bF=f.span`
  display: none;

  @media (max-width: 600px) {
    display: inline;
    margin-left: auto;
    flex-shrink: 0;
    font-family: var(--font-sans);
    font-size: 11px;
    font-weight: var(--font-weight-medium);
    color: var(--color-content-tertiary);
  }
`,kF=$e`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,_F=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  background: linear-gradient(
    90deg,
    var(--color-content-tertiary) 0%,
    var(--color-content-primary) 50%,
    var(--color-content-tertiary) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${kF} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,CF=f.div`
  position: relative;
  isolation: isolate;
  z-index: 1;
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);

  /* The same glass surface as the page header, mirrored — the frost sits
     behind both pills and composer, and the tint fades upward over the thread. */
  &::before {
    ${Mv}
  }
  &::after {
    ${$v("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Lo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jF=f.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,SF=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,v0=f.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade
     even when one renders larger to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,MF=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,$F=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  /* Leading icon reads a step quieter than the label. */
  svg {
    color: var(--color-content-tertiary);
    flex-shrink: 0;
  }

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);

    svg {
      color: var(--color-content-primary);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    min-height: 28px;
    padding: 0 var(--space-2);
    gap: var(--space-1);
    flex: 0 0 auto;
    font-size: var(--text-xs);
    white-space: nowrap;
  }
`,NF=f.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  /* Mirror the ambient backdrop palette while the composer is collecting the
     phone number, so the live-test handoff reads as a distinct action. */
  --phone-aurora-mint: hsl(170 72% 64%);
  --phone-aurora-sky: hsl(202 82% 64%);
  --phone-aurora-blue: hsl(228 84% 64%);
  --phone-aurora-violet: hsl(252 78% 64%);
  --phone-aurora-pink: hsl(330 82% 68%);
  --phone-aurora-peach: hsl(32 88% 66%);
  background: ${e=>e.$phoneMode?`linear-gradient(var(--color-bg-primary), var(--color-bg-primary)) padding-box,
       linear-gradient(
         110deg,
         var(--phone-aurora-mint),
         var(--phone-aurora-sky) 25%,
         var(--phone-aurora-blue) 44%,
         var(--phone-aurora-violet) 62%,
         var(--phone-aurora-pink) 82%,
         var(--phone-aurora-peach)
       ) border-box`:"var(--color-bg-primary)"};
  border: 1px solid ${e=>e.$phoneMode?"transparent":"var(--color-border-opaque)"};
  border-radius: var(--radius-xl);
  box-shadow: ${e=>e.$phoneMode?`0 0 0 1px color-mix(in srgb, var(--phone-aurora-blue) 18%, transparent),
       -18px 2px 38px color-mix(in srgb, var(--phone-aurora-sky) 14%, transparent),
       16px 4px 42px color-mix(in srgb, var(--phone-aurora-violet) 16%, transparent),
       0 12px 48px color-mix(in srgb, var(--phone-aurora-pink) 10%, transparent)`:"var(--shadow-below-low)"};
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);

  &:focus-within {
    border-color: ${e=>e.$phoneMode?"transparent":"var(--color-border-focus)"};
    box-shadow: ${e=>e.$phoneMode?`0 0 0 2px color-mix(in srgb, var(--phone-aurora-sky) 38%, transparent),
         -20px 2px 44px color-mix(in srgb, var(--phone-aurora-sky) 20%, transparent),
         18px 4px 48px color-mix(in srgb, var(--phone-aurora-violet) 22%, transparent),
         0 14px 54px color-mix(in srgb, var(--phone-aurora-pink) 14%, transparent)`:"var(--shadow-below-low)"};
  }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);

  @media (max-width: 600px) {
    gap: var(--space-1);
    padding: var(--space-1);
    border-radius: var(--radius-lg);
  }
`,RF=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,LF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,x0=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  white-space: nowrap;
`,AF=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--radius-sm);
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`,TF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,IF=f.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,EF=f.textarea`
  flex: 1;
  min-width: 0;
  /* Phone mode drops the attachment button, so the field carries its own left
     inset instead of sitting flush against the composer's edge. */
  padding: calc((var(--space-8) - 1lh) / 2) 0
           calc((var(--space-8) - 1lh) / 2) ${e=>e.$phoneMode?"var(--space-3)":"0"};
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  /* Phone mode keeps the composer's own type — only the digits get tabular
     figures, so entered numbers align without the placeholder reading as a
     different typeface from the rest of the app. */
  font-variant-numeric: ${e=>e.$phoneMode?"tabular-nums":"normal"};
  color: var(--color-content-primary);
  caret-color: ${e=>e.$phoneMode?"var(--phone-aurora-sky)":"auto"};

  &::placeholder {
    color: var(--color-content-disabled);
  }

  @media (max-width: 600px) {
    font-size: var(--text-sm);
    line-height: var(--line-height-snug);
  }
`,y0=f.div`
  flex-shrink: 0;
`;function PF(e){const a=[e.activeId,e.secActiveId];return e.selectedPersonaId&&a.push("persona",e.selectedPersonaId),e.activePageId&&a.push("page",e.activePageId),"#"+a.map(encodeURIComponent).join("/")}function zF(e){const a=e.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],p=i[l+1];d==="persona"?s.selectedPersonaId=p:d==="page"&&(s.activePageId=p)}return s}function OF(e,a){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=zF(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=PF(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Ou="ultron-theme";function FF(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Ou);return e==="light"||e==="dark"?e:null}function DF(e){const a=document.documentElement;a.classList.toggle("dark",e==="dark"),a.classList.toggle("light",e==="light")}function BF(){const e=Mp("(prefers-color-scheme: dark)"),[a,i]=g.useState(FF);g.useEffect(()=>{DF(a),!(typeof window>"u")&&(a?window.localStorage.setItem(Ou,a):window.localStorage.removeItem(Ou))},[a]);const s=a??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const WF=f.button`
  position: fixed;
  top: var(--space-3);
  right: var(--space-3);
  z-index: var(--z-sticky);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;

  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  color: var(--color-content-secondary);
  box-shadow: var(--shadow-below-low);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default),
    border-color var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);
    border-color: var(--color-border-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  & svg {
    display: block;
  }
`;function HF(){const{theme:e,toggle:a}=BF(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(WF,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(Ku,{size:18}):n.jsx(eg,{size:18})})}const w0=[{id:"ultron",label:"Ultron",icon:n.jsx(ct,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(oM,{})},{id:"engaged",label:"Engaged",icon:n.jsx(aM,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(iM,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(sM,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(lM,{})}],b0=[{id:"apps",label:"Apps",icon:n.jsx(cM,{})}],k0=[{id:"docs",label:"Document Studio",icon:n.jsx($u,{})},{id:"form",label:"Form",icon:n.jsx(dM,{})},{id:"tasks",label:"Tasks",icon:n.jsx(uM,{})},{id:"policy",label:"Policy",icon:n.jsx(pM,{}),activeIcon:n.jsx("img",{src:pz,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:n.jsx($o,{}),activeIcon:n.jsx("img",{src:hz,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(hM,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(fM,{})}],UF=f.button`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state.
     12px sides align the text with the group rows below. */
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${e=>e.$active?"var(--color-bg-secondary, rgba(70, 108, 255, 0.06))":"transparent"};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`,qF=$e`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,VF=$e`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,GF=$e`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,YF=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-content-disabled);

  & svg {
    width: 16px;
    height: 16px;
    transform-origin: center;
    /* Spring the rings in while flashing green then settling muted; the "both"
       fill holds the muted end colour once the flash finishes. */
    animation:
      ${qF} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${VF} 1100ms var(--ease-out, ease-out) both;
  }

  /* Radiating halo behind the glyph — the ripple that lands with the pop. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: var(--space-6);
    height: var(--space-6);
    border-radius: var(--radius-full);
    background: var(--color-success-content);
    pointer-events: none;
    animation: ${GF} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,KF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,QF=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-6);
  height: var(--space-6);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  color: var(--color-content-tertiary);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              color var(--duration-fast) var(--ease-default);

  /* Reveal on row hover / keyboard focus within the row, and hold visible while
     the menu is open. */
  [role='button']:hover &,
  [role='button']:focus-within &,
  [aria-expanded='true'] & {
    opacity: 1;
  }

  /* Touch (no hover): always visible — there's no hover to reveal it. */
  @media (hover: none) {
    opacity: 1;
  }

  &:hover { background: var(--color-bg-tertiary); color: var(--color-content-primary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; opacity: 1; }
`;function ZF({onDelete:e}){const a=i=>i.stopPropagation();return n.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:n.jsx(rp,{placement:"bottom-end",width:168,trigger:n.jsx(QF,{type:"button","aria-label":"Page options",children:n.jsx(Z0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(ag,{size:16}),onClick:e}]}]})})}const XF={needs_attention:n.jsx(ga,{size:16}),live:n.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(yn,{size:16})},JF={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function eD({introAnswers:e,onRestartOnboarding:a}={}){const[i,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[p,m]=g.useState(null),[v,x]=g.useState(null),[y,w]=g.useState("ultron"),[k,M]=g.useState("employees"),_=BM(),[C,L]=g.useState(!!e),[N,j]=g.useState(!1),[S,P]=g.useState(!1),[$,R]=g.useState(!e),[A,E]=g.useState([]),[D,G]=g.useState(null),Z=g.useRef(0),H=le=>{w("ultron"),L(!1),R(!1),G(le)},Y=()=>{w("ultron"),R(!1),G(null),L(!0)},ee=()=>{const le=`page-${Z.current++}`;E(ye=>[...ye,{id:le,title:"New page"}]),H(le)},[oe,ce]=g.useState({}),[de,K]=g.useState({}),F=g.useRef({}),q=(le,ye)=>{const Ce=ye.trim();if(!Ce)return;const Ae=(oe[le]??[]).filter(Ne=>Ne.role==="ultron").length;ce(Ne=>({...Ne,[le]:[...Ne[le]??[],{role:"operator",text:Ce}]})),K(Ne=>({...Ne,[le]:!0})),F.current[le]=window.setTimeout(()=>{ce(Ne=>({...Ne,[le]:[...Ne[le]??[],{role:"ultron",text:xp(Ce,Ae)}]})),K(Ne=>({...Ne,[le]:!1})),delete F.current[le]},1100)},T=le=>{F.current[le]&&(window.clearTimeout(F.current[le]),delete F.current[le]),E(ye=>ye.filter(Ce=>Ce.id!==le)),ce(ye=>{const{[le]:Ce,...Ae}=ye;return Ae}),K(ye=>{const{[le]:Ce,...Ae}=ye;return Ae}),D===le&&(G(null),R(!0))},z=$?"live":_.selectedThread?JF[_.selectedThread.status]:"new";OF({activeId:i,secActiveId:l,selectedPersonaId:p,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:m,setActivePageId:x});const[ne,U]=g.useState(!1),X=le=>le.map(ye=>({...ye,isActive:ye.id===i,disabled:ye.id!=="ultron",onClick:ye.id==="ultron"?()=>s("ultron"):()=>U(!0)})),se=[{id:"memory",label:"Memory",icon:n.jsx(Il,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(O0,{size:16})}],B=n.jsx(bv,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),O=Pu(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,ae={id:"welcome",label:O?`${O} account setup`:"Account setup",icon:n.jsx($u,{}),isActive:C,onClick:Y},ge=A.map(le=>({id:le.id,label:le.title,icon:n.jsx($u,{}),isActive:D===le.id,onClick:()=>H(le.id),trailingSlot:n.jsx(ZF,{onDelete:()=>T(le.id)})})),ue=y==="account"?Au.map(le=>({type:"single",item:{id:le.id,label:le.label,icon:le.icon,isActive:k===le.id,onClick:()=>M(le.id)}})):_.groups.flatMap(le=>{const ye=le.id==="needs_attention"?"new":le.id==="resolved"?"done":"working",Ce=le.id==="needs_attention"?le.threads.filter(_e=>_e.status==="analyzing"||_.revealedNewIds.includes(_e.id)):le.threads,Ae=le.id==="needs_attention"&&!N||le.id==="live"&&N,Ne=le.id==="needs_attention"?ge:[],Pe={type:"group",group:{id:le.id,label:le.id==="needs_attention"?"New":le.label,icon:XF[le.id],trailingBadge:n.jsx(_a,{children:Ce.length+(Ae?1:0)+Ne.length}),defaultExpanded:!0,outlined:!1,children:[...Ae?[ae]:[],...Ne,...Ce.map(_e=>({id:_e.id,label:_e.id.startsWith("detected_")?n.jsx(mA,{text:Rm(_e.name,ye)}):Rm(_e.name,ye),icon:ye==="new"?_e.status==="analyzing"?n.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ye==="working"?n.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:_e.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:_e.status==="unresolved"?"idle":"static",color:_e.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(_e.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!$&&!D&&z===ye&&_.selectedId===_e.id,onClick:()=>{_e.id==="shift_drop_maria"&&P(!1),w("ultron"),L(!1),R(!1),G(null),_.setSelectedId(_e.id)},spotlightPrompt:S&&_e.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,trailingSlot:_.savedWorkflowIds.includes(_e.id)?n.jsx(_r,{content:"Saved as workflow",placement:"top",children:n.jsx(YF,{"aria-label":"Saved as workflow",children:n.jsx($o,{})})}):void 0}))]}};return le.id==="resolved"?[{type:"divider",id:"done-divider"},Pe]:le.id==="live"?[{type:"divider",id:"working-divider"},Pe]:[Pe]}),xe=[{id:"main",label:"Workspace",items:X(w0)},{id:"tools",label:"Tools",items:X(b0)},{id:"bottom",label:"Apps",items:X(k0)}];return n.jsxs(n.Fragment,{children:[n.jsx(HF,{}),n.jsx(uz,{items:X(w0),toolItems:X(b0),bottomItems:X(k0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:a,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:ue,menuHeader:y==="ultron"?n.jsx(UF,{$active:$&&!D,onClick:()=>{w("ultron"),L(!1),R(!0),G(null)},"aria-label":"Live — Ultron presence","aria-current":$&&!D?"page":void 0,children:n.jsx(cA,{onNew:ee})}):void 0,pageEntries:se,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:B,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:v,selectedPersonaId:p,moduleGroups:xe,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:le=>{le==="ultron"&&s("ultron")},onSelectPersona:m},children:y==="memory"?n.jsx(yA,{}):y==="account"?n.jsx(TA,{collectionId:k}):C?n.jsx(Hz,{answers:e,onContinued:()=>j(!0),onPhoneSubmitted:()=>{_.surfaceDemoThread("shift_drop_maria"),P(!0)}}):D?n.jsx(GL,{messages:oe[D]??[],replying:de[D]??!1,onSend:le=>q(D,le)},D):n.jsx(OL,{threads:_.threads,stageById:_.stageById,section:z,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),L(!1),R(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})}),n.jsxs(ug,{open:ne,onClose:()=>U(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(lg,{onClose:()=>U(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(cg,{children:n.jsx(KF,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(dg,{children:n.jsx(ze,{variant:"primary",onClick:()=>U(!1),children:"Got it"})})]})]})}const _0="cubic-bezier(0.22, 1, 0.36, 1)",C0=$e`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,tD=$e`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,nD=f.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${C0} 460ms ${_0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${C0} 500ms ${_0} 90ms both;
  }
  main {
    animation: ${tD} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,fu="tb:onboarding-complete";function rD(){const[e,a]=g.useState(()=>{try{return window.sessionStorage.getItem(fu)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=p=>{try{window.sessionStorage.setItem(fu,"1")}catch{}s(p),a(!0)},d=()=>{try{window.sessionStorage.removeItem(fu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(nD,{children:n.jsx(eD,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(gE,{onEnterApp:l})}E3.createRoot(document.getElementById("root")).render(n.jsx(ln.StrictMode,{children:n.jsx(o9,{children:n.jsx(rD,{})})}));
