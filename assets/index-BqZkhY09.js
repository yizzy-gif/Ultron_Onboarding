(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function P0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cd={exports:{}},Ya={},dd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function S3(){if(Ep)return Ae;Ep=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,j={};function R(E,$,q){this.props=E,this.context=$,this.refs=j,this.updater=q||A}R.prototype.isReactComponent={},R.prototype.setState=function(E,$){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,$,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function T(){}T.prototype=R.prototype;function S(E,$,q){this.props=E,this.context=$,this.refs=j,this.updater=q||A}var C=S.prototype=new T;C.constructor=S,_(C,R.prototype),C.isPureReactComponent=!0;var z=Array.isArray,L=Object.prototype.hasOwnProperty,M={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(E,$,q){var K,ie={},he=null,te=null;if($!=null)for(K in $.ref!==void 0&&(te=$.ref),$.key!==void 0&&(he=""+$.key),$)L.call($,K)&&!N.hasOwnProperty(K)&&(ie[K]=$[K]);var O=arguments.length-2;if(O===1)ie.children=q;else if(1<O){for(var ae=Array(O),me=0;me<O;me++)ae[me]=arguments[me+2];ie.children=ae}if(E&&E.defaultProps)for(K in O=E.defaultProps,O)ie[K]===void 0&&(ie[K]=O[K]);return{$$typeof:t,type:E,key:he,ref:te,props:ie,_owner:M.current}}function D(E,$){return{$$typeof:t,type:E.type,key:$,ref:E.ref,props:E.props,_owner:E._owner}}function G(E){return typeof E=="object"&&E!==null&&E.$$typeof===t}function F(E){var $={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(q){return $[q]})}var H=/\/+/g;function Y(E,$){return typeof E=="object"&&E!==null&&E.key!=null?F(""+E.key):$.toString(36)}function Z(E,$,q,K,ie){var he=typeof E;(he==="undefined"||he==="boolean")&&(E=null);var te=!1;if(E===null)te=!0;else switch(he){case"string":case"number":te=!0;break;case"object":switch(E.$$typeof){case t:case a:te=!0}}if(te)return te=E,ie=ie(te),E=K===""?"."+Y(te,0):K,z(ie)?(q="",E!=null&&(q=E.replace(H,"$&/")+"/"),Z(ie,$,q,"",function(me){return me})):ie!=null&&(G(ie)&&(ie=D(ie,q+(!ie.key||te&&te.key===ie.key?"":(""+ie.key).replace(H,"$&/")+"/")+E)),$.push(ie)),1;if(te=0,K=K===""?".":K+":",z(E))for(var O=0;O<E.length;O++){he=E[O];var ae=K+Y(he,O);te+=Z(he,$,q,ae,ie)}else if(ae=k(E),typeof ae=="function")for(E=ae.call(E),O=0;!(he=E.next()).done;)he=he.value,ae=K+Y(he,O++),te+=Z(he,$,q,ae,ie);else if(he==="object")throw $=String(E),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return te}function se(E,$,q){if(E==null)return E;var K=[],ie=0;return Z(E,K,"","",function(he){return $.call(q,he,ie++)}),K}function ne(E){if(E._status===-1){var $=E._result;$=$(),$.then(function(q){(E._status===0||E._status===-1)&&(E._status=1,E._result=q)},function(q){(E._status===0||E._status===-1)&&(E._status=2,E._result=q)}),E._status===-1&&(E._status=0,E._result=$)}if(E._status===1)return E._result.default;throw E._result}var oe={current:null},J={transition:null},U={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:J,ReactCurrentOwner:M};function V(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:se,forEach:function(E,$,q){se(E,function(){$.apply(this,arguments)},q)},count:function(E){var $=0;return se(E,function(){$++}),$},toArray:function(E){return se(E,function($){return $})||[]},only:function(E){if(!G(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ae.Component=R,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=S,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Ae.act=V,Ae.cloneElement=function(E,$,q){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var K=_({},E.props),ie=E.key,he=E.ref,te=E._owner;if($!=null){if($.ref!==void 0&&(he=$.ref,te=M.current),$.key!==void 0&&(ie=""+$.key),E.type&&E.type.defaultProps)var O=E.type.defaultProps;for(ae in $)L.call($,ae)&&!N.hasOwnProperty(ae)&&(K[ae]=$[ae]===void 0&&O!==void 0?O[ae]:$[ae])}var ae=arguments.length-2;if(ae===1)K.children=q;else if(1<ae){O=Array(ae);for(var me=0;me<ae;me++)O[me]=arguments[me+2];K.children=O}return{$$typeof:t,type:E.type,key:ie,ref:he,props:K,_owner:te}},Ae.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},Ae.createElement=I,Ae.createFactory=function(E){var $=I.bind(null,E);return $.type=E,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(E){return{$$typeof:f,render:E}},Ae.isValidElement=G,Ae.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ne}},Ae.memo=function(E,$){return{$$typeof:x,type:E,compare:$===void 0?null:$}},Ae.startTransition=function(E){var $=J.transition;J.transition={};try{E()}finally{J.transition=$}},Ae.unstable_act=V,Ae.useCallback=function(E,$){return oe.current.useCallback(E,$)},Ae.useContext=function(E){return oe.current.useContext(E)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(E){return oe.current.useDeferredValue(E)},Ae.useEffect=function(E,$){return oe.current.useEffect(E,$)},Ae.useId=function(){return oe.current.useId()},Ae.useImperativeHandle=function(E,$,q){return oe.current.useImperativeHandle(E,$,q)},Ae.useInsertionEffect=function(E,$){return oe.current.useInsertionEffect(E,$)},Ae.useLayoutEffect=function(E,$){return oe.current.useLayoutEffect(E,$)},Ae.useMemo=function(E,$){return oe.current.useMemo(E,$)},Ae.useReducer=function(E,$,q){return oe.current.useReducer(E,$,q)},Ae.useRef=function(E){return oe.current.useRef(E)},Ae.useState=function(E){return oe.current.useState(E)},Ae.useSyncExternalStore=function(E,$,q){return oe.current.useSyncExternalStore(E,$,q)},Ae.useTransition=function(){return oe.current.useTransition()},Ae.version="18.3.1",Ae}var Pp;function du(){return Pp||(Pp=1,dd.exports=S3()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function N3(){if(zp)return Ya;zp=1;var t=du(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,x){var y,w={},k=null,A=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(A=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:a,type:f,key:k,ref:A,props:w,_owner:l.current}}return Ya.Fragment=i,Ya.jsx=h,Ya.jsxs=h,Ya}var Op;function M3(){return Op||(Op=1,cd.exports=N3()),cd.exports}var r=M3(),m=du();const Qt=P0(m);var Ls={},ud={exports:{}},qt={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function R3(){return Dp||(Dp=1,(function(t){function a(J,U){var V=J.length;J.push(U);e:for(;0<V;){var E=V-1>>>1,$=J[E];if(0<l($,U))J[E]=U,J[V]=$,V=E;else break e}}function i(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var U=J[0],V=J.pop();if(V!==U){J[0]=V;e:for(var E=0,$=J.length,q=$>>>1;E<q;){var K=2*(E+1)-1,ie=J[K],he=K+1,te=J[he];if(0>l(ie,V))he<$&&0>l(te,ie)?(J[E]=te,J[he]=V,E=he):(J[E]=ie,J[K]=V,E=K);else if(he<$&&0>l(te,V))J[E]=te,J[he]=V,E=he;else break e}}return U}function l(J,U){var V=J.sortIndex-U.sortIndex;return V!==0?V:J.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();t.unstable_now=function(){return h.now()-f}}var g=[],x=[],y=1,w=null,k=3,A=!1,_=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(J){for(var U=i(x);U!==null;){if(U.callback===null)s(x);else if(U.startTime<=J)s(x),U.sortIndex=U.expirationTime,a(g,U);else break;U=i(x)}}function z(J){if(j=!1,C(J),!_)if(i(g)!==null)_=!0,ne(L);else{var U=i(x);U!==null&&oe(z,U.startTime-J)}}function L(J,U){_=!1,j&&(j=!1,T(I),I=-1),A=!0;var V=k;try{for(C(U),w=i(g);w!==null&&(!(w.expirationTime>U)||J&&!F());){var E=w.callback;if(typeof E=="function"){w.callback=null,k=w.priorityLevel;var $=E(w.expirationTime<=U);U=t.unstable_now(),typeof $=="function"?w.callback=$:w===i(g)&&s(g),C(U)}else s(g);w=i(g)}if(w!==null)var q=!0;else{var K=i(x);K!==null&&oe(z,K.startTime-U),q=!1}return q}finally{w=null,k=V,A=!1}}var M=!1,N=null,I=-1,D=5,G=-1;function F(){return!(t.unstable_now()-G<D)}function H(){if(N!==null){var J=t.unstable_now();G=J;var U=!0;try{U=N(!0,J)}finally{U?Y():(M=!1,N=null)}}else M=!1}var Y;if(typeof S=="function")Y=function(){S(H)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=H,Y=function(){se.postMessage(null)}}else Y=function(){R(H,0)};function ne(J){N=J,M||(M=!0,Y())}function oe(J,U){I=R(function(){J(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){J.callback=null},t.unstable_continueExecution=function(){_||A||(_=!0,ne(L))},t.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<J?Math.floor(1e3/J):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return i(g)},t.unstable_next=function(J){switch(k){case 1:case 2:case 3:var U=3;break;default:U=k}var V=k;k=U;try{return J()}finally{k=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(J,U){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var V=k;k=J;try{return U()}finally{k=V}},t.unstable_scheduleCallback=function(J,U,V){var E=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?E+V:E):V=E,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=V+$,J={id:y++,callback:U,priorityLevel:J,startTime:V,expirationTime:$,sortIndex:-1},V>E?(J.sortIndex=V,a(x,J),i(g)===null&&J===i(x)&&(j?(T(I),I=-1):j=!0,oe(z,V-E))):(J.sortIndex=$,a(g,J),_||A||(_=!0,ne(L))),J},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(J){var U=k;return function(){var V=k;k=U;try{return J.apply(this,arguments)}finally{k=V}}}})(pd)),pd}var Fp;function L3(){return Fp||(Fp=1,hd.exports=R3()),hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function $3(){if(Bp)return qt;Bp=1;var t=du(),a=L3();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(l[e]=n,e=0;e<n.length;e++)s.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(e){return g.call(w,e)?!0:g.call(y,e)?!1:x.test(e)?w[e]=!0:(y[e]=!0,!1)}function A(e,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,n,o,c){if(n===null||typeof n>"u"||A(e,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function j(e,n,o,c,u,p,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=b}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new j(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(T,S);R[n]=new j(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(T,S);R[n]=new j(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(T,S);R[n]=new j(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function C(e,n,o,c){var u=R.hasOwnProperty(n)?R[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_(n,o,u,c)&&(o=null),c||u===null?k(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,c=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?e.setAttributeNS(c,n,o):e.setAttribute(n,o))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),M=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),F=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),J=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,E;function $(e){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+e}var q=!1;function K(e,n){if(!e||q)return"";q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ee){var c=ee}Reflect.construct(e,[],n)}else{try{n.call()}catch(ee){c=ee}e.call(n.prototype)}else{try{throw Error()}catch(ee){c=ee}e()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var u=ee.stack.split(`
`),p=c.stack.split(`
`),b=u.length-1,P=p.length-1;1<=b&&0<=P&&u[b]!==p[P];)P--;for(;1<=b&&0<=P;b--,P--)if(u[b]!==p[P]){if(b!==1||P!==1)do if(b--,P--,0>P||u[b]!==p[P]){var B=`
`+u[b].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=b&&0<=P);break}}}finally{q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?$(e):""}function ie(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case M:return"Portal";case D:return"Profiler";case I:return"StrictMode";case Y:return"Suspense";case Z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case H:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function O(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function me(e){var n=ae(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),c=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,p.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function de(e){e._valueTracker||(e._valueTracker=me(e))}function fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return e&&(c=ae(e)?e.checked?"true":"false":e.value),e=c,e!==o?(n.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,n){var o=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function $e(e,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=O(n.value!=null?n.value:o),e._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function We(e,n){n=n.checked,n!=null&&C(e,"checked",n,!1)}function Ve(e,n){We(e,n);var o=O(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(c==="submit"||c==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?De(e,n.type,o):n.hasOwnProperty("defaultValue")&&De(e,n.type,O(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ge(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function De(e,n,o){(n!=="number"||ke(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Qe=Array.isArray;function Ye(e,n,o,c){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&c&&(e[o].defaultSelected=!0)}else{for(o=""+O(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,c&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function At(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function He(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Qe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:O(o)}}function It(e,n){var o=O(n.value),c=O(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),c!=null&&(e.defaultValue=""+c)}function Ct(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Mn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Mn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,ca=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,c,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lo(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jl=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){jl.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Lr[n]=Lr[e]})});function ki(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+n).trim():n+"px"}function Me(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=ki(o,n[o],c);o==="float"&&(o="cssFloat"),c?e.setProperty(o,u):e[o]=u}}var tt=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(e,n){if(n){if(tt[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Et(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $r=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,co=null,uo=null;function Xu(e){if(e=Aa(e)){if(typeof ua!="function")throw Error(i(280));var n=e.stateNode;n&&(n=qi(n),ua(e.stateNode,e.type,n))}}function Ju(e){co?uo?uo.push(e):uo=[e]:co=e}function eh(){if(co){var e=co,n=uo;if(uo=co=null,Xu(e),n)for(e=0;e<n.length;e++)Xu(n[e])}}function th(e,n){return e(n)}function nh(){}var Sl=!1;function rh(e,n,o){if(Sl)return e(n,o);Sl=!0;try{return th(e,n,o)}finally{Sl=!1,(co!==null||uo!==null)&&(nh(),eh())}}function ha(e,n){var o=e.stateNode;if(o===null)return null;var c=qi(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Nl=!1;if(f)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Nl=!1}function T2(e,n,o,c,u,p,b,P,B){var ee=Array.prototype.slice.call(arguments,3);try{n.apply(o,ee)}catch(ce){this.onError(ce)}}var fa=!1,_i=null,Ci=!1,Ml=null,A2={onError:function(e){fa=!0,_i=e}};function I2(e,n,o,c,u,p,b,P,B){fa=!1,_i=null,T2.apply(A2,arguments)}function E2(e,n,o,c,u,p,b,P,B){if(I2.apply(this,arguments),fa){if(fa){var ee=_i;fa=!1,_i=null}else throw Error(i(198));Ci||(Ci=!0,Ml=ee)}}function Tr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function oh(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ah(e){if(Tr(e)!==e)throw Error(i(188))}function P2(e){var n=e.alternate;if(!n){if(n=Tr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,c=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return ah(u),e;if(p===c)return ah(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=p;else{for(var b=!1,P=u.child;P;){if(P===o){b=!0,o=u,c=p;break}if(P===c){b=!0,c=u,o=p;break}P=P.sibling}if(!b){for(P=p.child;P;){if(P===o){b=!0,o=p,c=u;break}if(P===c){b=!0,c=p,o=u;break}P=P.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function ih(e){return e=P2(e),e!==null?sh(e):null}function sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=sh(e);if(n!==null)return n;e=e.sibling}return null}var lh=a.unstable_scheduleCallback,ch=a.unstable_cancelCallback,z2=a.unstable_shouldYield,O2=a.unstable_requestPaint,it=a.unstable_now,D2=a.unstable_getCurrentPriorityLevel,Rl=a.unstable_ImmediatePriority,dh=a.unstable_UserBlockingPriority,ji=a.unstable_NormalPriority,F2=a.unstable_LowPriority,uh=a.unstable_IdlePriority,Si=null,Ln=null;function B2(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Si,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:U2,W2=Math.log,H2=Math.LN2;function U2(e){return e>>>=0,e===0?32:31-(W2(e)/H2|0)|0}var Ni=64,Mi=4194304;function ma(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,n){var o=e.pendingLanes;if(o===0)return 0;var c=0,u=e.suspendedLanes,p=e.pingedLanes,b=o&268435455;if(b!==0){var P=b&~u;P!==0?c=ma(P):(p&=b,p!==0&&(c=ma(p)))}else b=o&~u,b!==0?c=ma(b):p!==0&&(c=ma(p));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((c&4)!==0&&(c|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=c;0<n;)o=31-mn(n),u=1<<o,c|=e[o],n&=~u;return c}function q2(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V2(e,n){for(var o=e.suspendedLanes,c=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes;0<p;){var b=31-mn(p),P=1<<b,B=u[b];B===-1?((P&o)===0||(P&c)!==0)&&(u[b]=q2(P,n)):B<=n&&(e.expiredLanes|=P),p&=~P}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hh(){var e=Ni;return Ni<<=1,(Ni&4194240)===0&&(Ni=64),e}function $l(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function ga(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=o}function G2(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var c=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-mn(o),p=1<<u;n[u]=0,c[u]=-1,e[u]=-1,o&=~p}}function Tl(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var c=31-mn(o),u=1<<c;u&n|e[c]&n&&(e[c]|=n),o&=~u}}var Ue=0;function ph(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fh,Al,mh,gh,vh,Il=!1,Li=[],tr=null,nr=null,rr=null,va=new Map,ya=new Map,or=[],Y2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(e,n){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":va.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(n.pointerId)}}function xa(e,n,o,c,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Al(n)),e):(e.eventSystemFlags|=c,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Q2(e,n,o,c,u){switch(n){case"focusin":return tr=xa(tr,e,n,o,c,u),!0;case"dragenter":return nr=xa(nr,e,n,o,c,u),!0;case"mouseover":return rr=xa(rr,e,n,o,c,u),!0;case"pointerover":var p=u.pointerId;return va.set(p,xa(va.get(p)||null,e,n,o,c,u)),!0;case"gotpointercapture":return p=u.pointerId,ya.set(p,xa(ya.get(p)||null,e,n,o,c,u)),!0}return!1}function xh(e){var n=Ar(e.target);if(n!==null){var o=Tr(n);if(o!==null){if(n=o.tag,n===13){if(n=oh(o),n!==null){e.blockedOn=n,vh(e.priority,function(){mh(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Pl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var c=new o.constructor(o.type,o);$r=c,o.target.dispatchEvent(c),$r=null}else return n=Aa(o),n!==null&&Al(n),e.blockedOn=o,!1;n.shift()}return!0}function wh(e,n,o){$i(e)&&o.delete(n)}function K2(){Il=!1,tr!==null&&$i(tr)&&(tr=null),nr!==null&&$i(nr)&&(nr=null),rr!==null&&$i(rr)&&(rr=null),va.forEach(wh),ya.forEach(wh)}function wa(e,n){e.blockedOn===n&&(e.blockedOn=null,Il||(Il=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,K2)))}function ba(e){function n(u){return wa(u,e)}if(0<Li.length){wa(Li[0],e);for(var o=1;o<Li.length;o++){var c=Li[o];c.blockedOn===e&&(c.blockedOn=null)}}for(tr!==null&&wa(tr,e),nr!==null&&wa(nr,e),rr!==null&&wa(rr,e),va.forEach(n),ya.forEach(n),o=0;o<or.length;o++)c=or[o],c.blockedOn===e&&(c.blockedOn=null);for(;0<or.length&&(o=or[0],o.blockedOn===null);)xh(o),o.blockedOn===null&&or.shift()}var ho=z.ReactCurrentBatchConfig,Ti=!0;function Z2(e,n,o,c){var u=Ue,p=ho.transition;ho.transition=null;try{Ue=1,El(e,n,o,c)}finally{Ue=u,ho.transition=p}}function X2(e,n,o,c){var u=Ue,p=ho.transition;ho.transition=null;try{Ue=4,El(e,n,o,c)}finally{Ue=u,ho.transition=p}}function El(e,n,o,c){if(Ti){var u=Pl(e,n,o,c);if(u===null)Jl(e,n,c,Ai,o),yh(e,c);else if(Q2(u,e,n,o,c))c.stopPropagation();else if(yh(e,c),n&4&&-1<Y2.indexOf(e)){for(;u!==null;){var p=Aa(u);if(p!==null&&fh(p),p=Pl(e,n,o,c),p===null&&Jl(e,n,c,Ai,o),p===u)break;u=p}u!==null&&c.stopPropagation()}else Jl(e,n,c,null,o)}}var Ai=null;function Pl(e,n,o,c){if(Ai=null,e=da(c),e=Ar(e),e!==null)if(n=Tr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=oh(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ai=e,null}function bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D2()){case Rl:return 1;case dh:return 4;case ji:case F2:return 16;case uh:return 536870912;default:return 16}default:return 16}}var ar=null,zl=null,Ii=null;function kh(){if(Ii)return Ii;var e,n=zl,o=n.length,c,u="value"in ar?ar.value:ar.textContent,p=u.length;for(e=0;e<o&&n[e]===u[e];e++);var b=o-e;for(c=1;c<=b&&n[o-c]===u[p-c];c++);return Ii=u.slice(e,1<c?1-c:void 0)}function Ei(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function _h(){return!1}function Kt(e){function n(o,c,u,p,b){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(o=e[P],this[P]=o?o(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pi:_h,this.isPropagationStopped=_h,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),n}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Kt(po),ka=V({},po,{view:0,detail:0}),J2=Kt(ka),Dl,Fl,_a,zi=V({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&e.type==="mousemove"?(Dl=e.screenX-_a.screenX,Fl=e.screenY-_a.screenY):Fl=Dl=0,_a=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),Ch=Kt(zi),ev=V({},zi,{dataTransfer:0}),tv=Kt(ev),nv=V({},ka,{relatedTarget:0}),Bl=Kt(nv),rv=V({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Kt(rv),av=V({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=Kt(av),sv=V({},po,{data:0}),jh=Kt(sv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dv[e])?!!n[e]:!1}function Wl(){return uv}var hv=V({},ka,{key:function(e){if(e.key){var n=lv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pv=Kt(hv),fv=V({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Kt(fv),mv=V({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),gv=Kt(mv),vv=V({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Kt(vv),xv=V({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Kt(xv),bv=[9,13,27,32],Hl=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var kv=f&&"TextEvent"in window&&!Ca,Nh=f&&(!Hl||Ca&&8<Ca&&11>=Ca),Mh=" ",Rh=!1;function Lh(e,n){switch(e){case"keyup":return bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function _v(e,n){switch(e){case"compositionend":return $h(n);case"keypress":return n.which!==32?null:(Rh=!0,Mh);case"textInput":return e=n.data,e===Mh&&Rh?null:e;default:return null}}function Cv(e,n){if(fo)return e==="compositionend"||!Hl&&Lh(e,n)?(e=kh(),Ii=zl=ar=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jv[e.type]:n==="textarea"}function Ah(e,n,o,c){Ju(c),n=Wi(n,"onChange"),0<n.length&&(o=new Ol("onChange","change",null,o,c),e.push({event:o,listeners:n}))}var ja=null,Sa=null;function Sv(e){Zh(e,0)}function Oi(e){var n=xo(e);if(fe(n))return e}function Nv(e,n){if(e==="change")return n}var Ih=!1;if(f){var Ul;if(f){var ql="oninput"in document;if(!ql){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),ql=typeof Eh.oninput=="function"}Ul=ql}else Ul=!1;Ih=Ul&&(!document.documentMode||9<document.documentMode)}function Ph(){ja&&(ja.detachEvent("onpropertychange",zh),Sa=ja=null)}function zh(e){if(e.propertyName==="value"&&Oi(Sa)){var n=[];Ah(n,Sa,e,da(e)),rh(Sv,n)}}function Mv(e,n,o){e==="focusin"?(Ph(),ja=n,Sa=o,ja.attachEvent("onpropertychange",zh)):e==="focusout"&&Ph()}function Rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(Sa)}function Lv(e,n){if(e==="click")return Oi(n)}function $v(e,n){if(e==="input"||e==="change")return Oi(n)}function Tv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:Tv;function Na(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!g.call(n,u)||!gn(e[u],n[u]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dh(e,n){var o=Oh(e);e=0;for(var c;o;){if(o.nodeType===3){if(c=e+o.textContent.length,e<=n&&c>=n)return{node:o,offset:n-e};e=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function Fh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bh(){for(var e=window,n=ke();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=ke(e.document)}return n}function Vl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Av(e){var n=Bh(),o=e.focusedElem,c=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Fh(o.ownerDocument.documentElement,o)){if(c!==null&&Vl(o)){if(n=c.start,e=c.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!e.extend&&p>c&&(u=c,c=p,p=u),u=Dh(o,p);var b=Dh(o,c);u&&b&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),p>c?(e.addRange(n),e.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iv=f&&"documentMode"in document&&11>=document.documentMode,mo=null,Gl=null,Ma=null,Yl=!1;function Wh(e,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yl||mo==null||mo!==ke(c)||(c=mo,"selectionStart"in c&&Vl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ma&&Na(Ma,c)||(Ma=c,c=Wi(Gl,"onSelect"),0<c.length&&(n=new Ol("onSelect","select",null,n,o),e.push({event:n,listeners:c}),n.target=mo)))}function Di(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var go={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Ql={},Hh={};f&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function Fi(e){if(Ql[e])return Ql[e];if(!go[e])return e;var n=go[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Hh)return Ql[e]=n[o];return e}var Uh=Fi("animationend"),qh=Fi("animationiteration"),Vh=Fi("animationstart"),Gh=Fi("transitionend"),Yh=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,n){Yh.set(e,n),d(n,[e])}for(var Kl=0;Kl<Qh.length;Kl++){var Zl=Qh[Kl],Ev=Zl.toLowerCase(),Pv=Zl[0].toUpperCase()+Zl.slice(1);ir(Ev,"on"+Pv)}ir(Uh,"onAnimationEnd"),ir(qh,"onAnimationIteration"),ir(Vh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Gh,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Kh(e,n,o){var c=e.type||"unknown-event";e.currentTarget=o,E2(c,n,void 0,e),e.currentTarget=null}function Zh(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var c=e[o],u=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var b=c.length-1;0<=b;b--){var P=c[b],B=P.instance,ee=P.currentTarget;if(P=P.listener,B!==p&&u.isPropagationStopped())break e;Kh(u,P,ee),p=B}else for(b=0;b<c.length;b++){if(P=c[b],B=P.instance,ee=P.currentTarget,P=P.listener,B!==p&&u.isPropagationStopped())break e;Kh(u,P,ee),p=B}}}if(Ci)throw e=Ml,Ci=!1,Ml=null,e}function Xe(e,n){var o=n[ac];o===void 0&&(o=n[ac]=new Set);var c=e+"__bubble";o.has(c)||(Xh(n,e,2,!1),o.add(c))}function Xl(e,n,o){var c=0;n&&(c|=4),Xh(o,e,c,n)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function La(e){if(!e[Bi]){e[Bi]=!0,s.forEach(function(o){o!=="selectionchange"&&(zv.has(o)||Xl(o,!1,e),Xl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bi]||(n[Bi]=!0,Xl("selectionchange",!1,n))}}function Xh(e,n,o,c){switch(bh(n)){case 1:var u=Z2;break;case 4:u=X2;break;default:u=El}o=u.bind(null,n,o,e),u=void 0,!Nl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function Jl(e,n,o,c,u){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===u||B.nodeType===8&&B.parentNode===u))return;b=b.return}for(;P!==null;){if(b=Ar(P),b===null)return;if(B=b.tag,B===5||B===6){c=p=b;continue e}P=P.parentNode}}c=c.return}rh(function(){var ee=p,ce=da(o),ue=[];e:{var le=Yh.get(e);if(le!==void 0){var ge=Ol,ye=e;switch(e){case"keypress":if(Ei(o)===0)break e;case"keydown":case"keyup":ge=pv;break;case"focusin":ye="focus",ge=Bl;break;case"focusout":ye="blur",ge=Bl;break;case"beforeblur":case"afterblur":ge=Bl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=gv;break;case Uh:case qh:case Vh:ge=ov;break;case Gh:ge=yv;break;case"scroll":ge=J2;break;case"wheel":ge=wv;break;case"copy":case"cut":case"paste":ge=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Sh}var we=(n&4)!==0,st=!we&&e==="scroll",Q=we?le!==null?le+"Capture":null:le;we=[];for(var W=ee,X;W!==null;){X=W;var pe=X.stateNode;if(X.tag===5&&pe!==null&&(X=pe,Q!==null&&(pe=ha(W,Q),pe!=null&&we.push($a(W,pe,X)))),st)break;W=W.return}0<we.length&&(le=new ge(le,ye,null,o,ce),ue.push({event:le,listeners:we}))}}if((n&7)===0){e:{if(le=e==="mouseover"||e==="pointerover",ge=e==="mouseout"||e==="pointerout",le&&o!==$r&&(ye=o.relatedTarget||o.fromElement)&&(Ar(ye)||ye[Wn]))break e;if((ge||le)&&(le=ce.window===ce?ce:(le=ce.ownerDocument)?le.defaultView||le.parentWindow:window,ge?(ye=o.relatedTarget||o.toElement,ge=ee,ye=ye?Ar(ye):null,ye!==null&&(st=Tr(ye),ye!==st||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(ge=null,ye=ee),ge!==ye)){if(we=Ch,pe="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(we=Sh,pe="onPointerLeave",Q="onPointerEnter",W="pointer"),st=ge==null?le:xo(ge),X=ye==null?le:xo(ye),le=new we(pe,W+"leave",ge,o,ce),le.target=st,le.relatedTarget=X,pe=null,Ar(ce)===ee&&(we=new we(Q,W+"enter",ye,o,ce),we.target=X,we.relatedTarget=st,pe=we),st=pe,ge&&ye)t:{for(we=ge,Q=ye,W=0,X=we;X;X=vo(X))W++;for(X=0,pe=Q;pe;pe=vo(pe))X++;for(;0<W-X;)we=vo(we),W--;for(;0<X-W;)Q=vo(Q),X--;for(;W--;){if(we===Q||Q!==null&&we===Q.alternate)break t;we=vo(we),Q=vo(Q)}we=null}else we=null;ge!==null&&Jh(ue,le,ge,we,!1),ye!==null&&st!==null&&Jh(ue,st,ye,we,!0)}}e:{if(le=ee?xo(ee):window,ge=le.nodeName&&le.nodeName.toLowerCase(),ge==="select"||ge==="input"&&le.type==="file")var be=Nv;else if(Th(le))if(Ih)be=$v;else{be=Rv;var _e=Mv}else(ge=le.nodeName)&&ge.toLowerCase()==="input"&&(le.type==="checkbox"||le.type==="radio")&&(be=Lv);if(be&&(be=be(e,ee))){Ah(ue,be,o,ce);break e}_e&&_e(e,le,ee),e==="focusout"&&(_e=le._wrapperState)&&_e.controlled&&le.type==="number"&&De(le,"number",le.value)}switch(_e=ee?xo(ee):window,e){case"focusin":(Th(_e)||_e.contentEditable==="true")&&(mo=_e,Gl=ee,Ma=null);break;case"focusout":Ma=Gl=mo=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Wh(ue,o,ce);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Wh(ue,o,ce)}var Ce;if(Hl)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else fo?Lh(e,o)&&(Se="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(Nh&&o.locale!=="ko"&&(fo||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&fo&&(Ce=kh()):(ar=ce,zl="value"in ar?ar.value:ar.textContent,fo=!0)),_e=Wi(ee,Se),0<_e.length&&(Se=new jh(Se,e,null,o,ce),ue.push({event:Se,listeners:_e}),Ce?Se.data=Ce:(Ce=$h(o),Ce!==null&&(Se.data=Ce)))),(Ce=kv?_v(e,o):Cv(e,o))&&(ee=Wi(ee,"onBeforeInput"),0<ee.length&&(ce=new jh("onBeforeInput","beforeinput",null,o,ce),ue.push({event:ce,listeners:ee}),ce.data=Ce))}Zh(ue,n)})}function $a(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Wi(e,n){for(var o=n+"Capture",c=[];e!==null;){var u=e,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=ha(e,o),p!=null&&c.unshift($a(e,p,u)),p=ha(e,n),p!=null&&c.push($a(e,p,u))),e=e.return}return c}function vo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jh(e,n,o,c,u){for(var p=n._reactName,b=[];o!==null&&o!==c;){var P=o,B=P.alternate,ee=P.stateNode;if(B!==null&&B===c)break;P.tag===5&&ee!==null&&(P=ee,u?(B=ha(o,p),B!=null&&b.unshift($a(o,B,P))):u||(B=ha(o,p),B!=null&&b.push($a(o,B,P)))),o=o.return}b.length!==0&&e.push({event:n,listeners:b})}var Ov=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function e1(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(Dv,"")}function Hi(e,n,o){if(n=e1(n),e1(e)!==n&&o)throw Error(i(425))}function Ui(){}var ec=null,tc=null;function nc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(e){return t1.resolve(null).then(e).catch(Wv)}:rc;function Wv(e){setTimeout(function(){throw e})}function oc(e,n){var o=n,c=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){e.removeChild(u),ba(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);ba(n)}function sr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function n1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var yo=Math.random().toString(36).slice(2),$n="__reactFiber$"+yo,Ta="__reactProps$"+yo,Wn="__reactContainer$"+yo,ac="__reactEvents$"+yo,Hv="__reactListeners$"+yo,Uv="__reactHandles$"+yo;function Ar(e){var n=e[$n];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Wn]||o[$n]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=n1(e);e!==null;){if(o=e[$n])return o;e=n1(e)}return n}e=o,o=e.parentNode}return null}function Aa(e){return e=e[$n]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function qi(e){return e[Ta]||null}var ic=[],wo=-1;function lr(e){return{current:e}}function Je(e){0>wo||(e.current=ic[wo],ic[wo]=null,wo--)}function Ke(e,n){wo++,ic[wo]=e.current,e.current=n}var cr={},Nt=lr(cr),Ft=lr(!1),Ir=cr;function bo(e,n){var o=e.type.contextTypes;if(!o)return cr;var c=e.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Bt(e){return e=e.childContextTypes,e!=null}function Vi(){Je(Ft),Je(Nt)}function r1(e,n,o){if(Nt.current!==cr)throw Error(i(168));Ke(Nt,n),Ke(Ft,o)}function o1(e,n,o){var c=e.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,te(e)||"Unknown",u));return V({},o,c)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Ir=Nt.current,Ke(Nt,e),Ke(Ft,Ft.current),!0}function a1(e,n,o){var c=e.stateNode;if(!c)throw Error(i(169));o?(e=o1(e,n,Ir),c.__reactInternalMemoizedMergedChildContext=e,Je(Ft),Je(Nt),Ke(Nt,e)):Je(Ft),Ke(Ft,o)}var Hn=null,Yi=!1,sc=!1;function i1(e){Hn===null?Hn=[e]:Hn.push(e)}function qv(e){Yi=!0,i1(e)}function dr(){if(!sc&&Hn!==null){sc=!0;var e=0,n=Ue;try{var o=Hn;for(Ue=1;e<o.length;e++){var c=o[e];do c=c(!0);while(c!==null)}Hn=null,Yi=!1}catch(u){throw Hn!==null&&(Hn=Hn.slice(e+1)),lh(Rl,dr),u}finally{Ue=n,sc=!1}}return null}var ko=[],_o=0,Qi=null,Ki=0,sn=[],ln=0,Er=null,Un=1,qn="";function Pr(e,n){ko[_o++]=Ki,ko[_o++]=Qi,Qi=e,Ki=n}function s1(e,n,o){sn[ln++]=Un,sn[ln++]=qn,sn[ln++]=Er,Er=e;var c=Un;e=qn;var u=32-mn(c)-1;c&=~(1<<u),o+=1;var p=32-mn(n)+u;if(30<p){var b=u-u%5;p=(c&(1<<b)-1).toString(32),c>>=b,u-=b,Un=1<<32-mn(n)+u|o<<u|c,qn=p+e}else Un=1<<p|o<<u|c,qn=e}function lc(e){e.return!==null&&(Pr(e,1),s1(e,1,0))}function cc(e){for(;e===Qi;)Qi=ko[--_o],ko[_o]=null,Ki=ko[--_o],ko[_o]=null;for(;e===Er;)Er=sn[--ln],sn[ln]=null,qn=sn[--ln],sn[ln]=null,Un=sn[--ln],sn[ln]=null}var Zt=null,Xt=null,nt=!1,vn=null;function l1(e,n){var o=hn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function c1(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Zt=e,Xt=sr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Zt=e,Xt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Er!==null?{id:Un,overflow:qn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=hn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Zt=e,Xt=null,!0):!1;default:return!1}}function dc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uc(e){if(nt){var n=Xt;if(n){var o=n;if(!c1(e,n)){if(dc(e))throw Error(i(418));n=sr(o.nextSibling);var c=Zt;n&&c1(e,n)?l1(c,o):(e.flags=e.flags&-4097|2,nt=!1,Zt=e)}}else{if(dc(e))throw Error(i(418));e.flags=e.flags&-4097|2,nt=!1,Zt=e}}}function d1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function Zi(e){if(e!==Zt)return!1;if(!nt)return d1(e),nt=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!nc(e.type,e.memoizedProps)),n&&(n=Xt)){if(dc(e))throw u1(),Error(i(418));for(;n;)l1(e,n),n=sr(n.nextSibling)}if(d1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Xt=sr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Xt=null}}else Xt=Zt?sr(e.stateNode.nextSibling):null;return!0}function u1(){for(var e=Xt;e;)e=sr(e.nextSibling)}function Co(){Xt=Zt=null,nt=!1}function hc(e){vn===null?vn=[e]:vn.push(e)}var Vv=z.ReactCurrentBatchConfig;function Ia(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,e));var u=c,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(b){var P=u.refs;b===null?delete P[p]:P[p]=b},n._stringRef=p,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Xi(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function h1(e){var n=e._init;return n(e._payload)}function p1(e){function n(Q,W){if(e){var X=Q.deletions;X===null?(Q.deletions=[W],Q.flags|=16):X.push(W)}}function o(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function c(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function u(Q,W){return Q=yr(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,X){return Q.index=X,e?(X=Q.alternate,X!==null?(X=X.index,X<W?(Q.flags|=2,W):X):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function b(Q){return e&&Q.alternate===null&&(Q.flags|=2),Q}function P(Q,W,X,pe){return W===null||W.tag!==6?(W=rd(X,Q.mode,pe),W.return=Q,W):(W=u(W,X),W.return=Q,W)}function B(Q,W,X,pe){var be=X.type;return be===N?ce(Q,W,X.props.children,pe,X.key):W!==null&&(W.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ne&&h1(be)===W.type)?(pe=u(W,X.props),pe.ref=Ia(Q,W,X),pe.return=Q,pe):(pe=ks(X.type,X.key,X.props,null,Q.mode,pe),pe.ref=Ia(Q,W,X),pe.return=Q,pe)}function ee(Q,W,X,pe){return W===null||W.tag!==4||W.stateNode.containerInfo!==X.containerInfo||W.stateNode.implementation!==X.implementation?(W=od(X,Q.mode,pe),W.return=Q,W):(W=u(W,X.children||[]),W.return=Q,W)}function ce(Q,W,X,pe,be){return W===null||W.tag!==7?(W=Ur(X,Q.mode,pe,be),W.return=Q,W):(W=u(W,X),W.return=Q,W)}function ue(Q,W,X){if(typeof W=="string"&&W!==""||typeof W=="number")return W=rd(""+W,Q.mode,X),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case L:return X=ks(W.type,W.key,W.props,null,Q.mode,X),X.ref=Ia(Q,null,W),X.return=Q,X;case M:return W=od(W,Q.mode,X),W.return=Q,W;case ne:var pe=W._init;return ue(Q,pe(W._payload),X)}if(Qe(W)||U(W))return W=Ur(W,Q.mode,X,null),W.return=Q,W;Xi(Q,W)}return null}function le(Q,W,X,pe){var be=W!==null?W.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return be!==null?null:P(Q,W,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return X.key===be?B(Q,W,X,pe):null;case M:return X.key===be?ee(Q,W,X,pe):null;case ne:return be=X._init,le(Q,W,be(X._payload),pe)}if(Qe(X)||U(X))return be!==null?null:ce(Q,W,X,pe,null);Xi(Q,X)}return null}function ge(Q,W,X,pe,be){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return Q=Q.get(X)||null,P(W,Q,""+pe,be);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case L:return Q=Q.get(pe.key===null?X:pe.key)||null,B(W,Q,pe,be);case M:return Q=Q.get(pe.key===null?X:pe.key)||null,ee(W,Q,pe,be);case ne:var _e=pe._init;return ge(Q,W,X,_e(pe._payload),be)}if(Qe(pe)||U(pe))return Q=Q.get(X)||null,ce(W,Q,pe,be,null);Xi(W,pe)}return null}function ye(Q,W,X,pe){for(var be=null,_e=null,Ce=W,Se=W=0,xt=null;Ce!==null&&Se<X.length;Se++){Ce.index>Se?(xt=Ce,Ce=null):xt=Ce.sibling;var Oe=le(Q,Ce,X[Se],pe);if(Oe===null){Ce===null&&(Ce=xt);break}e&&Ce&&Oe.alternate===null&&n(Q,Ce),W=p(Oe,W,Se),_e===null?be=Oe:_e.sibling=Oe,_e=Oe,Ce=xt}if(Se===X.length)return o(Q,Ce),nt&&Pr(Q,Se),be;if(Ce===null){for(;Se<X.length;Se++)Ce=ue(Q,X[Se],pe),Ce!==null&&(W=p(Ce,W,Se),_e===null?be=Ce:_e.sibling=Ce,_e=Ce);return nt&&Pr(Q,Se),be}for(Ce=c(Q,Ce);Se<X.length;Se++)xt=ge(Ce,Q,Se,X[Se],pe),xt!==null&&(e&&xt.alternate!==null&&Ce.delete(xt.key===null?Se:xt.key),W=p(xt,W,Se),_e===null?be=xt:_e.sibling=xt,_e=xt);return e&&Ce.forEach(function(xr){return n(Q,xr)}),nt&&Pr(Q,Se),be}function we(Q,W,X,pe){var be=U(X);if(typeof be!="function")throw Error(i(150));if(X=be.call(X),X==null)throw Error(i(151));for(var _e=be=null,Ce=W,Se=W=0,xt=null,Oe=X.next();Ce!==null&&!Oe.done;Se++,Oe=X.next()){Ce.index>Se?(xt=Ce,Ce=null):xt=Ce.sibling;var xr=le(Q,Ce,Oe.value,pe);if(xr===null){Ce===null&&(Ce=xt);break}e&&Ce&&xr.alternate===null&&n(Q,Ce),W=p(xr,W,Se),_e===null?be=xr:_e.sibling=xr,_e=xr,Ce=xt}if(Oe.done)return o(Q,Ce),nt&&Pr(Q,Se),be;if(Ce===null){for(;!Oe.done;Se++,Oe=X.next())Oe=ue(Q,Oe.value,pe),Oe!==null&&(W=p(Oe,W,Se),_e===null?be=Oe:_e.sibling=Oe,_e=Oe);return nt&&Pr(Q,Se),be}for(Ce=c(Q,Ce);!Oe.done;Se++,Oe=X.next())Oe=ge(Ce,Q,Se,Oe.value,pe),Oe!==null&&(e&&Oe.alternate!==null&&Ce.delete(Oe.key===null?Se:Oe.key),W=p(Oe,W,Se),_e===null?be=Oe:_e.sibling=Oe,_e=Oe);return e&&Ce.forEach(function(j3){return n(Q,j3)}),nt&&Pr(Q,Se),be}function st(Q,W,X,pe){if(typeof X=="object"&&X!==null&&X.type===N&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case L:e:{for(var be=X.key,_e=W;_e!==null;){if(_e.key===be){if(be=X.type,be===N){if(_e.tag===7){o(Q,_e.sibling),W=u(_e,X.props.children),W.return=Q,Q=W;break e}}else if(_e.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ne&&h1(be)===_e.type){o(Q,_e.sibling),W=u(_e,X.props),W.ref=Ia(Q,_e,X),W.return=Q,Q=W;break e}o(Q,_e);break}else n(Q,_e);_e=_e.sibling}X.type===N?(W=Ur(X.props.children,Q.mode,pe,X.key),W.return=Q,Q=W):(pe=ks(X.type,X.key,X.props,null,Q.mode,pe),pe.ref=Ia(Q,W,X),pe.return=Q,Q=pe)}return b(Q);case M:e:{for(_e=X.key;W!==null;){if(W.key===_e)if(W.tag===4&&W.stateNode.containerInfo===X.containerInfo&&W.stateNode.implementation===X.implementation){o(Q,W.sibling),W=u(W,X.children||[]),W.return=Q,Q=W;break e}else{o(Q,W);break}else n(Q,W);W=W.sibling}W=od(X,Q.mode,pe),W.return=Q,Q=W}return b(Q);case ne:return _e=X._init,st(Q,W,_e(X._payload),pe)}if(Qe(X))return ye(Q,W,X,pe);if(U(X))return we(Q,W,X,pe);Xi(Q,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,W!==null&&W.tag===6?(o(Q,W.sibling),W=u(W,X),W.return=Q,Q=W):(o(Q,W),W=rd(X,Q.mode,pe),W.return=Q,Q=W),b(Q)):o(Q,W)}return st}var jo=p1(!0),f1=p1(!1),Ji=lr(null),es=null,So=null,pc=null;function fc(){pc=So=es=null}function mc(e){var n=Ji.current;Je(Ji),e._currentValue=n}function gc(e,n,o){for(;e!==null;){var c=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),e===o)break;e=e.return}}function No(e,n){es=e,pc=So=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Wt=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:n,next:null},So===null){if(es===null)throw Error(i(308));So=e,es.dependencies={lanes:0,firstContext:e}}else So=So.next=e;return n}var zr=null;function vc(e){zr===null?zr=[e]:zr.push(e)}function m1(e,n,o,c){var u=n.interleaved;return u===null?(o.next=o,vc(n)):(o.next=u.next,u.next=o),n.interleaved=o,Vn(e,c)}function Vn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ur=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hr(e,n,o){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,Vn(e,o)}return u=c.interleaved,u===null?(n.next=n,vc(c)):(n.next=u.next,u.next=n),c.interleaved=n,Vn(e,o)}function ts(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,Tl(e,o)}}function v1(e,n){var o=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=b:p=p.next=b,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function ns(e,n,o,c){var u=e.updateQueue;ur=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var B=P,ee=B.next;B.next=null,b===null?p=ee:b.next=ee,b=B;var ce=e.alternate;ce!==null&&(ce=ce.updateQueue,P=ce.lastBaseUpdate,P!==b&&(P===null?ce.firstBaseUpdate=ee:P.next=ee,ce.lastBaseUpdate=B))}if(p!==null){var ue=u.baseState;b=0,ce=ee=B=null,P=p;do{var le=P.lane,ge=P.eventTime;if((c&le)===le){ce!==null&&(ce=ce.next={eventTime:ge,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ye=e,we=P;switch(le=n,ge=o,we.tag){case 1:if(ye=we.payload,typeof ye=="function"){ue=ye.call(ge,ue,le);break e}ue=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=we.payload,le=typeof ye=="function"?ye.call(ge,ue,le):ye,le==null)break e;ue=V({},ue,le);break e;case 2:ur=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,le=u.effects,le===null?u.effects=[P]:le.push(P))}else ge={eventTime:ge,lane:le,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ce===null?(ee=ce=ge,B=ue):ce=ce.next=ge,b|=le;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;le=P,P=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);if(ce===null&&(B=ue),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=ce,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);Fr|=b,e.lanes=b,e.memoizedState=ue}}function y1(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var c=e[n],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Ea={},Tn=lr(Ea),Pa=lr(Ea),za=lr(Ea);function Or(e){if(e===Ea)throw Error(i(174));return e}function xc(e,n){switch(Ke(za,n),Ke(Pa,e),Ke(Tn,Ea),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rn(n,e)}Je(Tn),Ke(Tn,n)}function Mo(){Je(Tn),Je(Pa),Je(za)}function x1(e){Or(za.current);var n=Or(Tn.current),o=Rn(n,e.type);n!==o&&(Ke(Pa,e),Ke(Tn,o))}function wc(e){Pa.current===e&&(Je(Tn),Je(Pa))}var rt=lr(0);function rs(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bc=[];function kc(){for(var e=0;e<bc.length;e++)bc[e]._workInProgressVersionPrimary=null;bc.length=0}var os=z.ReactCurrentDispatcher,_c=z.ReactCurrentBatchConfig,Dr=0,ot=null,ft=null,vt=null,as=!1,Oa=!1,Da=0,Gv=0;function Mt(){throw Error(i(321))}function Cc(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!gn(e[o],n[o]))return!1;return!0}function jc(e,n,o,c,u,p){if(Dr=p,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,os.current=e===null||e.memoizedState===null?Zv:Xv,e=o(c,u),Oa){p=0;do{if(Oa=!1,Da=0,25<=p)throw Error(i(301));p+=1,vt=ft=null,n.updateQueue=null,os.current=Jv,e=o(c,u)}while(Oa)}if(os.current=ls,n=ft!==null&&ft.next!==null,Dr=0,vt=ft=ot=null,as=!1,n)throw Error(i(300));return e}function Sc(){var e=Da!==0;return Da=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?ot.memoizedState=vt=e:vt=vt.next=e,vt}function dn(){if(ft===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var n=vt===null?ot.memoizedState:vt.next;if(n!==null)vt=n,ft=e;else{if(e===null)throw Error(i(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?ot.memoizedState=vt=e:vt=vt.next=e}return vt}function Fa(e,n){return typeof n=="function"?n(e):n}function Nc(e){var n=dn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var c=ft,u=c.baseQueue,p=o.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}c.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,c=c.baseState;var P=b=null,B=null,ee=p;do{var ce=ee.lane;if((Dr&ce)===ce)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:e(c,ee.action);else{var ue={lane:ce,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(P=B=ue,b=c):B=B.next=ue,ot.lanes|=ce,Fr|=ce}ee=ee.next}while(ee!==null&&ee!==p);B===null?b=c:B.next=P,gn(c,n.memoizedState)||(Wt=!0),n.memoizedState=c,n.baseState=b,n.baseQueue=B,o.lastRenderedState=c}if(e=o.interleaved,e!==null){u=e;do p=u.lane,ot.lanes|=p,Fr|=p,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Mc(e){var n=dn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var c=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do p=e(p,b.action),b=b.next;while(b!==u);gn(p,n.memoizedState)||(Wt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,c]}function w1(){}function b1(e,n){var o=ot,c=dn(),u=n(),p=!gn(c.memoizedState,u);if(p&&(c.memoizedState=u,Wt=!0),c=c.queue,Rc(C1.bind(null,o,c,e),[e]),c.getSnapshot!==n||p||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,Ba(9,_1.bind(null,o,c,u,n),void 0,null),yt===null)throw Error(i(349));(Dr&30)!==0||k1(o,n,u)}return u}function k1(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function _1(e,n,o,c){n.value=o,n.getSnapshot=c,j1(n)&&S1(e)}function C1(e,n,o){return o(function(){j1(n)&&S1(e)})}function j1(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!gn(e,o)}catch{return!0}}function S1(e){var n=Vn(e,1);n!==null&&bn(n,e,1,-1)}function N1(e){var n=An();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},n.queue=e,e=e.dispatch=Kv.bind(null,ot,e),[n.memoizedState,e]}function Ba(e,n,o,c){return e={tag:e,create:n,destroy:o,deps:c,next:null},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(c=o.next,o.next=e,e.next=c,n.lastEffect=e)),e}function M1(){return dn().memoizedState}function is(e,n,o,c){var u=An();ot.flags|=e,u.memoizedState=Ba(1|n,o,void 0,c===void 0?null:c)}function ss(e,n,o,c){var u=dn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var b=ft.memoizedState;if(p=b.destroy,c!==null&&Cc(c,b.deps)){u.memoizedState=Ba(n,o,p,c);return}}ot.flags|=e,u.memoizedState=Ba(1|n,o,p,c)}function R1(e,n){return is(8390656,8,e,n)}function Rc(e,n){return ss(2048,8,e,n)}function L1(e,n){return ss(4,2,e,n)}function $1(e,n){return ss(4,4,e,n)}function T1(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function A1(e,n,o){return o=o!=null?o.concat([e]):null,ss(4,4,T1.bind(null,n,e),o)}function Lc(){}function I1(e,n){var o=dn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Cc(n,c[1])?c[0]:(o.memoizedState=[e,n],e)}function E1(e,n){var o=dn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Cc(n,c[1])?c[0]:(e=e(),o.memoizedState=[e,n],e)}function P1(e,n,o){return(Dr&21)===0?(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=o):(gn(o,n)||(o=hh(),ot.lanes|=o,Fr|=o,e.baseState=!0),n)}function Yv(e,n){var o=Ue;Ue=o!==0&&4>o?o:4,e(!0);var c=_c.transition;_c.transition={};try{e(!1),n()}finally{Ue=o,_c.transition=c}}function z1(){return dn().memoizedState}function Qv(e,n,o){var c=gr(e);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},O1(e))D1(n,o);else if(o=m1(e,n,o,c),o!==null){var u=zt();bn(o,e,c,u),F1(o,n,c)}}function Kv(e,n,o){var c=gr(e),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(O1(e))D1(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var b=n.lastRenderedState,P=p(b,o);if(u.hasEagerState=!0,u.eagerState=P,gn(P,b)){var B=n.interleaved;B===null?(u.next=u,vc(n)):(u.next=B.next,B.next=u),n.interleaved=u;return}}catch{}finally{}o=m1(e,n,u,c),o!==null&&(u=zt(),bn(o,e,c,u),F1(o,n,c))}}function O1(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function D1(e,n){Oa=as=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function F1(e,n,o){if((o&4194240)!==0){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,Tl(e,o)}}var ls={readContext:cn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},Zv={readContext:cn,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:R1,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,is(4194308,4,T1.bind(null,n,e),o)},useLayoutEffect:function(e,n){return is(4194308,4,e,n)},useInsertionEffect:function(e,n){return is(4,2,e,n)},useMemo:function(e,n){var o=An();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var c=An();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},c.queue=e,e=e.dispatch=Qv.bind(null,ot,e),[c.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:N1,useDebugValue:Lc,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=N1(!1),n=e[0];return e=Yv.bind(null,e[1]),An().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var c=ot,u=An();if(nt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),yt===null)throw Error(i(349));(Dr&30)!==0||k1(c,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,R1(C1.bind(null,c,p,e),[e]),c.flags|=2048,Ba(9,_1.bind(null,c,p,o,n),void 0,null),o},useId:function(){var e=An(),n=yt.identifierPrefix;if(nt){var o=qn,c=Un;o=(c&~(1<<32-mn(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=Da++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Gv++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Xv={readContext:cn,useCallback:I1,useContext:cn,useEffect:Rc,useImperativeHandle:A1,useInsertionEffect:L1,useLayoutEffect:$1,useMemo:E1,useReducer:Nc,useRef:M1,useState:function(){return Nc(Fa)},useDebugValue:Lc,useDeferredValue:function(e){var n=dn();return P1(n,ft.memoizedState,e)},useTransition:function(){var e=Nc(Fa)[0],n=dn().memoizedState;return[e,n]},useMutableSource:w1,useSyncExternalStore:b1,useId:z1,unstable_isNewReconciler:!1},Jv={readContext:cn,useCallback:I1,useContext:cn,useEffect:Rc,useImperativeHandle:A1,useInsertionEffect:L1,useLayoutEffect:$1,useMemo:E1,useReducer:Mc,useRef:M1,useState:function(){return Mc(Fa)},useDebugValue:Lc,useDeferredValue:function(e){var n=dn();return ft===null?n.memoizedState=e:P1(n,ft.memoizedState,e)},useTransition:function(){var e=Mc(Fa)[0],n=dn().memoizedState;return[e,n]},useMutableSource:w1,useSyncExternalStore:b1,useId:z1,unstable_isNewReconciler:!1};function yn(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function $c(e,n,o,c){n=e.memoizedState,o=o(c,n),o=o==null?n:V({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var cs={isMounted:function(e){return(e=e._reactInternals)?Tr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var c=zt(),u=gr(e),p=Gn(c,u);p.payload=n,o!=null&&(p.callback=o),n=hr(e,p,u),n!==null&&(bn(n,e,u,c),ts(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var c=zt(),u=gr(e),p=Gn(c,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=hr(e,p,u),n!==null&&(bn(n,e,u,c),ts(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=zt(),c=gr(e),u=Gn(o,c);u.tag=2,n!=null&&(u.callback=n),n=hr(e,u,c),n!==null&&(bn(n,e,c,o),ts(n,e,c))}};function B1(e,n,o,c,u,p,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,p,b):n.prototype&&n.prototype.isPureReactComponent?!Na(o,c)||!Na(u,p):!0}function W1(e,n,o){var c=!1,u=cr,p=n.contextType;return typeof p=="object"&&p!==null?p=cn(p):(u=Bt(n)?Ir:Nt.current,c=n.contextTypes,p=(c=c!=null)?bo(e,u):cr),n=new n(o,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cs,e.stateNode=n,n._reactInternals=e,c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=p),n}function H1(e,n,o,c){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==e&&cs.enqueueReplaceState(n,n.state,null)}function Tc(e,n,o,c){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},yc(e);var p=n.contextType;typeof p=="object"&&p!==null?u.context=cn(p):(p=Bt(n)?Ir:Nt.current,u.context=bo(e,p)),u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&($c(e,n,p,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&cs.enqueueReplaceState(u,u.state,null),ns(e,o,u,c),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Ro(e,n){try{var o="",c=n;do o+=ie(c),c=c.return;while(c);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:u,digest:null}}function Ac(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function Ic(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var e3=typeof WeakMap=="function"?WeakMap:Map;function U1(e,n,o){o=Gn(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){gs||(gs=!0,Qc=c),Ic(e,n)},o}function q1(e,n,o){o=Gn(-1,o),o.tag=3;var c=e.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;o.payload=function(){return c(u)},o.callback=function(){Ic(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ic(e,n),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),o}function V1(e,n,o){var c=e.pingCache;if(c===null){c=e.pingCache=new e3;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(o)||(u.add(o),e=f3.bind(null,e,n,o),n.then(e,e))}function G1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Y1(e,n,o,c,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Gn(-1,1),n.tag=2,hr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var t3=z.ReactCurrentOwner,Wt=!1;function Pt(e,n,o,c){n.child=e===null?f1(n,null,o,c):jo(n,e.child,o,c)}function Q1(e,n,o,c,u){o=o.render;var p=n.ref;return No(n,u),c=jc(e,n,o,c,p,u),o=Sc(),e!==null&&!Wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Yn(e,n,u)):(nt&&o&&lc(n),n.flags|=1,Pt(e,n,c,u),n.child)}function K1(e,n,o,c,u){if(e===null){var p=o.type;return typeof p=="function"&&!nd(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,Z1(e,n,p,c,u)):(e=ks(o.type,null,c,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&u)===0){var b=p.memoizedProps;if(o=o.compare,o=o!==null?o:Na,o(b,c)&&e.ref===n.ref)return Yn(e,n,u)}return n.flags|=1,e=yr(p,c),e.ref=n.ref,e.return=n,n.child=e}function Z1(e,n,o,c,u){if(e!==null){var p=e.memoizedProps;if(Na(p,c)&&e.ref===n.ref)if(Wt=!1,n.pendingProps=c=p,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Wt=!0);else return n.lanes=e.lanes,Yn(e,n,u)}return Ec(e,n,o,c,u)}function X1(e,n,o){var c=n.pendingProps,u=c.children,p=e!==null?e.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke($o,Jt),Jt|=o;else{if((o&1073741824)===0)return e=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ke($o,Jt),Jt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Ke($o,Jt),Jt|=c}else p!==null?(c=p.baseLanes|o,n.memoizedState=null):c=o,Ke($o,Jt),Jt|=c;return Pt(e,n,u,o),n.child}function J1(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Ec(e,n,o,c,u){var p=Bt(o)?Ir:Nt.current;return p=bo(n,p),No(n,u),o=jc(e,n,o,c,p,u),c=Sc(),e!==null&&!Wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Yn(e,n,u)):(nt&&c&&lc(n),n.flags|=1,Pt(e,n,o,u),n.child)}function ep(e,n,o,c,u){if(Bt(o)){var p=!0;Gi(n)}else p=!1;if(No(n,u),n.stateNode===null)us(e,n),W1(n,o,c),Tc(n,o,c,u),c=!0;else if(e===null){var b=n.stateNode,P=n.memoizedProps;b.props=P;var B=b.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=cn(ee):(ee=Bt(o)?Ir:Nt.current,ee=bo(n,ee));var ce=o.getDerivedStateFromProps,ue=typeof ce=="function"||typeof b.getSnapshotBeforeUpdate=="function";ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==c||B!==ee)&&H1(n,b,c,ee),ur=!1;var le=n.memoizedState;b.state=le,ns(n,c,b,u),B=n.memoizedState,P!==c||le!==B||Ft.current||ur?(typeof ce=="function"&&($c(n,o,ce,c),B=n.memoizedState),(P=ur||B1(n,o,P,c,le,B,ee))?(ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=B),b.props=c,b.state=B,b.context=ee,c=P):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{b=n.stateNode,g1(e,n),P=n.memoizedProps,ee=n.type===n.elementType?P:yn(n.type,P),b.props=ee,ue=n.pendingProps,le=b.context,B=o.contextType,typeof B=="object"&&B!==null?B=cn(B):(B=Bt(o)?Ir:Nt.current,B=bo(n,B));var ge=o.getDerivedStateFromProps;(ce=typeof ge=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==ue||le!==B)&&H1(n,b,c,B),ur=!1,le=n.memoizedState,b.state=le,ns(n,c,b,u);var ye=n.memoizedState;P!==ue||le!==ye||Ft.current||ur?(typeof ge=="function"&&($c(n,o,ge,c),ye=n.memoizedState),(ee=ur||B1(n,o,ee,c,le,ye,B)||!1)?(ce||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,ye,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,ye,B)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||P===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=ye),b.props=c,b.state=ye,b.context=B,c=ee):(typeof b.componentDidUpdate!="function"||P===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),c=!1)}return Pc(e,n,o,c,p,u)}function Pc(e,n,o,c,u,p){J1(e,n);var b=(n.flags&128)!==0;if(!c&&!b)return u&&a1(n,o,!1),Yn(e,n,p);c=n.stateNode,t3.current=n;var P=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,e!==null&&b?(n.child=jo(n,e.child,null,p),n.child=jo(n,null,P,p)):Pt(e,n,P,p),n.memoizedState=c.state,u&&a1(n,o,!0),n.child}function tp(e){var n=e.stateNode;n.pendingContext?r1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&r1(e,n.context,!1),xc(e,n.containerInfo)}function np(e,n,o,c,u){return Co(),hc(u),n.flags|=256,Pt(e,n,o,c),n.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Oc(e){return{baseLanes:e,cachePool:null,transitions:null}}function rp(e,n,o){var c=n.pendingProps,u=rt.current,p=!1,b=(n.flags&128)!==0,P;if((P=b)||(P=e!==null&&e.memoizedState===null?!1:(u&2)!==0),P?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ke(rt,u&1),e===null)return uc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=c.children,e=c.fallback,p?(c=n.mode,p=n.child,b={mode:"hidden",children:b},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=b):p=_s(b,c,0,null),e=Ur(e,c,o,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Oc(o),n.memoizedState=zc,e):Dc(n,b));if(u=e.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return n3(e,n,b,c,P,u,o);if(p){p=c.fallback,b=n.mode,u=e.child,P=u.sibling;var B={mode:"hidden",children:c.children};return(b&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=B,n.deletions=null):(c=yr(u,B),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?p=yr(P,p):(p=Ur(p,b,o,null),p.flags|=2),p.return=n,c.return=n,c.sibling=p,n.child=c,c=p,p=n.child,b=e.child.memoizedState,b=b===null?Oc(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=e.childLanes&~o,n.memoizedState=zc,c}return p=e.child,e=p.sibling,c=yr(p,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=o),c.return=n,c.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=c,n.memoizedState=null,c}function Dc(e,n){return n=_s({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ds(e,n,o,c){return c!==null&&hc(c),jo(n,e.child,null,o),e=Dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function n3(e,n,o,c,u,p,b){if(o)return n.flags&256?(n.flags&=-257,c=Ac(Error(i(422))),ds(e,n,b,c)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=c.fallback,u=n.mode,c=_s({mode:"visible",children:c.children},u,0,null),p=Ur(p,u,b,null),p.flags|=2,c.return=n,p.return=n,c.sibling=p,n.child=c,(n.mode&1)!==0&&jo(n,e.child,null,b),n.child.memoizedState=Oc(b),n.memoizedState=zc,p);if((n.mode&1)===0)return ds(e,n,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,p=Error(i(419)),c=Ac(p,c,void 0),ds(e,n,b,c)}if(P=(b&e.childLanes)!==0,Wt||P){if(c=yt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Vn(e,u),bn(c,e,u,-1))}return td(),c=Ac(Error(i(421))),ds(e,n,b,c)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=m3.bind(null,e),u._reactRetry=n,null):(e=p.treeContext,Xt=sr(u.nextSibling),Zt=n,nt=!0,vn=null,e!==null&&(sn[ln++]=Un,sn[ln++]=qn,sn[ln++]=Er,Un=e.id,qn=e.overflow,Er=n),n=Dc(n,c.children),n.flags|=4096,n)}function op(e,n,o){e.lanes|=n;var c=e.alternate;c!==null&&(c.lanes|=n),gc(e.return,n,o)}function Fc(e,n,o,c,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=u)}function ap(e,n,o){var c=n.pendingProps,u=c.revealOrder,p=c.tail;if(Pt(e,n,c.children,o),c=rt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,o,n);else if(e.tag===19)op(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}c&=1}if(Ke(rt,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&rs(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Fc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&rs(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Fc(n,!0,o,null,p);break;case"together":Fc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function us(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Yn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Fr|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=yr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=yr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function r3(e,n,o){switch(n.tag){case 3:tp(n),Co();break;case 5:x1(n);break;case 1:Bt(n.type)&&Gi(n);break;case 4:xc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;Ke(Ji,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(Ke(rt,rt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?rp(e,n,o):(Ke(rt,rt.current&1),e=Yn(e,n,o),e!==null?e.sibling:null);Ke(rt,rt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,(e.flags&128)!==0){if(c)return ap(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ke(rt,rt.current),c)break;return null;case 22:case 23:return n.lanes=0,X1(e,n,o)}return Yn(e,n,o)}var ip,Bc,sp,lp;ip=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bc=function(){},sp=function(e,n,o,c){var u=e.memoizedProps;if(u!==c){e=n.stateNode,Or(Tn.current);var p=null;switch(o){case"input":u=xe(e,u),c=xe(e,c),p=[];break;case"select":u=V({},u,{value:void 0}),c=V({},c,{value:void 0}),p=[];break;case"textarea":u=At(e,u),c=At(e,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(e.onclick=Ui)}ct(o,c);var b;o=null;for(ee in u)if(!c.hasOwnProperty(ee)&&u.hasOwnProperty(ee)&&u[ee]!=null)if(ee==="style"){var P=u[ee];for(b in P)P.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(l.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in c){var B=c[ee];if(P=u!=null?u[ee]:void 0,c.hasOwnProperty(ee)&&B!==P&&(B!=null||P!=null))if(ee==="style")if(P){for(b in P)!P.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in B)B.hasOwnProperty(b)&&P[b]!==B[b]&&(o||(o={}),o[b]=B[b])}else o||(p||(p=[]),p.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,P=P?P.__html:void 0,B!=null&&P!==B&&(p=p||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(l.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Xe("scroll",e),p||P===B||(p=[])):(p=p||[]).push(ee,B))}o&&(p=p||[]).push("style",o);var ee=p;(n.updateQueue=ee)&&(n.flags|=4)}},lp=function(e,n,o,c){o!==c&&(n.flags|=4)};function Wa(e,n){if(!nt)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function Rt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,c=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=c,e.childLanes=o,n}function o3(e,n,o){var c=n.pendingProps;switch(cc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(n),null;case 1:return Bt(n.type)&&Vi(),Rt(n),null;case 3:return c=n.stateNode,Mo(),Je(Ft),Je(Nt),kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vn!==null&&(Xc(vn),vn=null))),Bc(e,n),Rt(n),null;case 5:wc(n);var u=Or(za.current);if(o=n.type,e!==null&&n.stateNode!=null)sp(e,n,o,c,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return Rt(n),null}if(e=Or(Tn.current),Zi(n)){c=n.stateNode,o=n.type;var p=n.memoizedProps;switch(c[$n]=n,c[Ta]=p,e=(n.mode&1)!==0,o){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(u=0;u<Ra.length;u++)Xe(Ra[u],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":$e(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":He(c,p),Xe("invalid",c)}ct(o,p),u=null;for(var b in p)if(p.hasOwnProperty(b)){var P=p[b];b==="children"?typeof P=="string"?c.textContent!==P&&(p.suppressHydrationWarning!==!0&&Hi(c.textContent,P,e),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&Hi(c.textContent,P,e),u=["children",""+P]):l.hasOwnProperty(b)&&P!=null&&b==="onScroll"&&Xe("scroll",c)}switch(o){case"input":de(c),Ge(c,p,!0);break;case"textarea":de(c),Ct(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ui)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof c.is=="string"?e=b.createElement(o,{is:c.is}):(e=b.createElement(o),o==="select"&&(b=e,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):e=b.createElementNS(e,o),e[$n]=n,e[Ta]=c,ip(e,n,!1,!1),n.stateNode=e;e:{switch(b=Et(o,c),o){case"dialog":Xe("cancel",e),Xe("close",e),u=c;break;case"iframe":case"object":case"embed":Xe("load",e),u=c;break;case"video":case"audio":for(u=0;u<Ra.length;u++)Xe(Ra[u],e);u=c;break;case"source":Xe("error",e),u=c;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),u=c;break;case"details":Xe("toggle",e),u=c;break;case"input":$e(e,c),u=xe(e,c),Xe("invalid",e);break;case"option":u=c;break;case"select":e._wrapperState={wasMultiple:!!c.multiple},u=V({},c,{value:void 0}),Xe("invalid",e);break;case"textarea":He(e,c),u=At(e,c),Xe("invalid",e);break;default:u=c}ct(o,u),P=u;for(p in P)if(P.hasOwnProperty(p)){var B=P[p];p==="style"?Me(e,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ca(e,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&lo(e,B):typeof B=="number"&&lo(e,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Xe("scroll",e):B!=null&&C(e,p,B,b))}switch(o){case"input":de(e),Ge(e,c,!1);break;case"textarea":de(e),Ct(e);break;case"option":c.value!=null&&e.setAttribute("value",""+O(c.value));break;case"select":e.multiple=!!c.multiple,p=c.value,p!=null?Ye(e,!!c.multiple,p,!1):c.defaultValue!=null&&Ye(e,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ui)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Rt(n),null;case 6:if(e&&n.stateNode!=null)lp(e,n,e.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(o=Or(za.current),Or(Tn.current),Zi(n)){if(c=n.stateNode,o=n.memoizedProps,c[$n]=n,(p=c.nodeValue!==o)&&(e=Zt,e!==null))switch(e.tag){case 3:Hi(c.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(c.nodeValue,o,(e.mode&1)!==0)}p&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[$n]=n,n.stateNode=c}return Rt(n),null;case 13:if(Je(rt),c=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(nt&&Xt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)u1(),Co(),n.flags|=98560,p=!1;else if(p=Zi(n),c!==null&&c.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[$n]=n}else Co(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Rt(n),p=!1}else vn!==null&&(Xc(vn),vn=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(c=c!==null,c!==(e!==null&&e.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(rt.current&1)!==0?mt===0&&(mt=3):td())),n.updateQueue!==null&&(n.flags|=4),Rt(n),null);case 4:return Mo(),Bc(e,n),e===null&&La(n.stateNode.containerInfo),Rt(n),null;case 10:return mc(n.type._context),Rt(n),null;case 17:return Bt(n.type)&&Vi(),Rt(n),null;case 19:if(Je(rt),p=n.memoizedState,p===null)return Rt(n),null;if(c=(n.flags&128)!==0,b=p.rendering,b===null)if(c)Wa(p,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(b=rs(e),b!==null){for(n.flags|=128,Wa(p,!1),c=b.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)p=o,e=c,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,e=b.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ke(rt,rt.current&1|2),n.child}e=e.sibling}p.tail!==null&&it()>To&&(n.flags|=128,c=!0,Wa(p,!1),n.lanes=4194304)}else{if(!c)if(e=rs(b),e!==null){if(n.flags|=128,c=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Wa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!nt)return Rt(n),null}else 2*it()-p.renderingStartTime>To&&o!==1073741824&&(n.flags|=128,c=!0,Wa(p,!1),n.lanes=4194304);p.isBackwards?(b.sibling=n.child,n.child=b):(o=p.last,o!==null?o.sibling=b:n.child=b,p.last=b)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=it(),n.sibling=null,o=rt.current,Ke(rt,c?o&1|2:o&1),n):(Rt(n),null);case 22:case 23:return ed(),c=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(Jt&1073741824)!==0&&(Rt(n),n.subtreeFlags&6&&(n.flags|=8192)):Rt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function a3(e,n){switch(cc(n),n.tag){case 1:return Bt(n.type)&&Vi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mo(),Je(Ft),Je(Nt),kc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return wc(n),null;case 13:if(Je(rt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Co()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Je(rt),null;case 4:return Mo(),null;case 10:return mc(n.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var hs=!1,Lt=!1,i3=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Lo(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){at(e,n,c)}else o.current=null}function Wc(e,n,o){try{o()}catch(c){at(e,n,c)}}var cp=!1;function s3(e,n){if(ec=Ti,e=Bh(),Vl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var b=0,P=-1,B=-1,ee=0,ce=0,ue=e,le=null;t:for(;;){for(var ge;ue!==o||u!==0&&ue.nodeType!==3||(P=b+u),ue!==p||c!==0&&ue.nodeType!==3||(B=b+c),ue.nodeType===3&&(b+=ue.nodeValue.length),(ge=ue.firstChild)!==null;)le=ue,ue=ge;for(;;){if(ue===e)break t;if(le===o&&++ee===u&&(P=b),le===p&&++ce===c&&(B=b),(ge=ue.nextSibling)!==null)break;ue=le,le=ue.parentNode}ue=ge}o=P===-1||B===-1?null:{start:P,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(tc={focusedElem:e,selectionRange:o},Ti=!1,ve=n;ve!==null;)if(n=ve,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ve=e;else for(;ve!==null;){n=ve;try{var ye=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var we=ye.memoizedProps,st=ye.memoizedState,Q=n.stateNode,W=Q.getSnapshotBeforeUpdate(n.elementType===n.type?we:yn(n.type,we),st);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var X=n.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(pe){at(n,n.return,pe)}if(e=n.sibling,e!==null){e.return=n.return,ve=e;break}ve=n.return}return ye=cp,cp=!1,ye}function Ha(e,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&e)===e){var p=u.destroy;u.destroy=void 0,p!==void 0&&Wc(n,o,p)}u=u.next}while(u!==c)}}function ps(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function Hc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function dp(e){var n=e.alternate;n!==null&&(e.alternate=null,dp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$n],delete n[Ta],delete n[ac],delete n[Hv],delete n[Uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function up(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ui));else if(c!==4&&(e=e.child,e!==null))for(Uc(e,n,o),e=e.sibling;e!==null;)Uc(e,n,o),e=e.sibling}function qc(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(c!==4&&(e=e.child,e!==null))for(qc(e,n,o),e=e.sibling;e!==null;)qc(e,n,o),e=e.sibling}var jt=null,xn=!1;function pr(e,n,o){for(o=o.child;o!==null;)pp(e,n,o),o=o.sibling}function pp(e,n,o){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Si,o)}catch{}switch(o.tag){case 5:Lt||Lo(o,n);case 6:var c=jt,u=xn;jt=null,pr(e,n,o),jt=c,xn=u,jt!==null&&(xn?(e=jt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):jt.removeChild(o.stateNode));break;case 18:jt!==null&&(xn?(e=jt,o=o.stateNode,e.nodeType===8?oc(e.parentNode,o):e.nodeType===1&&oc(e,o),ba(e)):oc(jt,o.stateNode));break;case 4:c=jt,u=xn,jt=o.stateNode.containerInfo,xn=!0,pr(e,n,o),jt=c,xn=u;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,b=p.destroy;p=p.tag,b!==void 0&&((p&2)!==0||(p&4)!==0)&&Wc(o,n,b),u=u.next}while(u!==c)}pr(e,n,o);break;case 1:if(!Lt&&(Lo(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(P){at(o,n,P)}pr(e,n,o);break;case 21:pr(e,n,o);break;case 22:o.mode&1?(Lt=(c=Lt)||o.memoizedState!==null,pr(e,n,o),Lt=c):pr(e,n,o);break;default:pr(e,n,o)}}function fp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new i3),n.forEach(function(c){var u=g3.bind(null,e,c);o.has(c)||(o.add(c),c.then(u,u))})}}function wn(e,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var p=e,b=n,P=b;e:for(;P!==null;){switch(P.tag){case 5:jt=P.stateNode,xn=!1;break e;case 3:jt=P.stateNode.containerInfo,xn=!0;break e;case 4:jt=P.stateNode.containerInfo,xn=!0;break e}P=P.return}if(jt===null)throw Error(i(160));pp(p,b,u),jt=null,xn=!1;var B=u.alternate;B!==null&&(B.return=null),u.return=null}catch(ee){at(u,n,ee)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mp(n,e),n=n.sibling}function mp(e,n){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),In(e),c&4){try{Ha(3,e,e.return),ps(3,e)}catch(we){at(e,e.return,we)}try{Ha(5,e,e.return)}catch(we){at(e,e.return,we)}}break;case 1:wn(n,e),In(e),c&512&&o!==null&&Lo(o,o.return);break;case 5:if(wn(n,e),In(e),c&512&&o!==null&&Lo(o,o.return),e.flags&32){var u=e.stateNode;try{lo(u,"")}catch(we){at(e,e.return,we)}}if(c&4&&(u=e.stateNode,u!=null)){var p=e.memoizedProps,b=o!==null?o.memoizedProps:p,P=e.type,B=e.updateQueue;if(e.updateQueue=null,B!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&We(u,p),Et(P,b);var ee=Et(P,p);for(b=0;b<B.length;b+=2){var ce=B[b],ue=B[b+1];ce==="style"?Me(u,ue):ce==="dangerouslySetInnerHTML"?ca(u,ue):ce==="children"?lo(u,ue):C(u,ce,ue,ee)}switch(P){case"input":Ve(u,p);break;case"textarea":It(u,p);break;case"select":var le=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ge=p.value;ge!=null?Ye(u,!!p.multiple,ge,!1):le!==!!p.multiple&&(p.defaultValue!=null?Ye(u,!!p.multiple,p.defaultValue,!0):Ye(u,!!p.multiple,p.multiple?[]:"",!1))}u[Ta]=p}catch(we){at(e,e.return,we)}}break;case 6:if(wn(n,e),In(e),c&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,p=e.memoizedProps;try{u.nodeValue=p}catch(we){at(e,e.return,we)}}break;case 3:if(wn(n,e),In(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ba(n.containerInfo)}catch(we){at(e,e.return,we)}break;case 4:wn(n,e),In(e);break;case 13:wn(n,e),In(e),u=e.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Yc=it())),c&4&&fp(e);break;case 22:if(ce=o!==null&&o.memoizedState!==null,e.mode&1?(Lt=(ee=Lt)||ce,wn(n,e),Lt=ee):wn(n,e),In(e),c&8192){if(ee=e.memoizedState!==null,(e.stateNode.isHidden=ee)&&!ce&&(e.mode&1)!==0)for(ve=e,ce=e.child;ce!==null;){for(ue=ve=ce;ve!==null;){switch(le=ve,ge=le.child,le.tag){case 0:case 11:case 14:case 15:Ha(4,le,le.return);break;case 1:Lo(le,le.return);var ye=le.stateNode;if(typeof ye.componentWillUnmount=="function"){c=le,o=le.return;try{n=c,ye.props=n.memoizedProps,ye.state=n.memoizedState,ye.componentWillUnmount()}catch(we){at(c,o,we)}}break;case 5:Lo(le,le.return);break;case 22:if(le.memoizedState!==null){yp(ue);continue}}ge!==null?(ge.return=le,ve=ge):yp(ue)}ce=ce.sibling}e:for(ce=null,ue=e;;){if(ue.tag===5){if(ce===null){ce=ue;try{u=ue.stateNode,ee?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=ue.stateNode,B=ue.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,P.style.display=ki("display",b))}catch(we){at(e,e.return,we)}}}else if(ue.tag===6){if(ce===null)try{ue.stateNode.nodeValue=ee?"":ue.memoizedProps}catch(we){at(e,e.return,we)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;ce===ue&&(ce=null),ue=ue.return}ce===ue&&(ce=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:wn(n,e),In(e),c&4&&fp(e);break;case 21:break;default:wn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(up(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(lo(u,""),c.flags&=-33);var p=hp(e);qc(e,p,u);break;case 3:case 4:var b=c.stateNode.containerInfo,P=hp(e);Uc(e,P,b);break;default:throw Error(i(161))}}catch(B){at(e,e.return,B)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function l3(e,n,o){ve=e,gp(e)}function gp(e,n,o){for(var c=(e.mode&1)!==0;ve!==null;){var u=ve,p=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||hs;if(!b){var P=u.alternate,B=P!==null&&P.memoizedState!==null||Lt;P=hs;var ee=Lt;if(hs=b,(Lt=B)&&!ee)for(ve=u;ve!==null;)b=ve,B=b.child,b.tag===22&&b.memoizedState!==null?xp(u):B!==null?(B.return=b,ve=B):xp(u);for(;p!==null;)ve=p,gp(p),p=p.sibling;ve=u,hs=P,Lt=ee}vp(e)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,ve=p):vp(e)}}function vp(e){for(;ve!==null;){var n=ve;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Lt||ps(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Lt)if(o===null)c.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:yn(n.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&y1(n,p,c);break;case 3:var b=n.updateQueue;if(b!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}y1(n,b,o)}break;case 5:var P=n.stateNode;if(o===null&&n.flags&4){o=P;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ee=n.alternate;if(ee!==null){var ce=ee.memoizedState;if(ce!==null){var ue=ce.dehydrated;ue!==null&&ba(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Lt||n.flags&512&&Hc(n)}catch(le){at(n,n.return,le)}}if(n===e){ve=null;break}if(o=n.sibling,o!==null){o.return=n.return,ve=o;break}ve=n.return}}function yp(e){for(;ve!==null;){var n=ve;if(n===e){ve=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ve=o;break}ve=n.return}}function xp(e){for(;ve!==null;){var n=ve;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{ps(4,n)}catch(B){at(n,o,B)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(B){at(n,u,B)}}var p=n.return;try{Hc(n)}catch(B){at(n,p,B)}break;case 5:var b=n.return;try{Hc(n)}catch(B){at(n,b,B)}}}catch(B){at(n,n.return,B)}if(n===e){ve=null;break}var P=n.sibling;if(P!==null){P.return=n.return,ve=P;break}ve=n.return}}var c3=Math.ceil,fs=z.ReactCurrentDispatcher,Vc=z.ReactCurrentOwner,un=z.ReactCurrentBatchConfig,ze=0,yt=null,dt=null,St=0,Jt=0,$o=lr(0),mt=0,Ua=null,Fr=0,ms=0,Gc=0,qa=null,Ht=null,Yc=0,To=1/0,Qn=null,gs=!1,Qc=null,fr=null,vs=!1,mr=null,ys=0,Va=0,Kc=null,xs=-1,ws=0;function zt(){return(ze&6)!==0?it():xs!==-1?xs:xs=it()}function gr(e){return(e.mode&1)===0?1:(ze&2)!==0&&St!==0?St&-St:Vv.transition!==null?(ws===0&&(ws=hh()),ws):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:bh(e.type)),e)}function bn(e,n,o,c){if(50<Va)throw Va=0,Kc=null,Error(i(185));ga(e,o,c),((ze&2)===0||e!==yt)&&(e===yt&&((ze&2)===0&&(ms|=o),mt===4&&vr(e,St)),Ut(e,c),o===1&&ze===0&&(n.mode&1)===0&&(To=it()+500,Yi&&dr()))}function Ut(e,n){var o=e.callbackNode;V2(e,n);var c=Ri(e,e===yt?St:0);if(c===0)o!==null&&ch(o),e.callbackNode=null,e.callbackPriority=0;else if(n=c&-c,e.callbackPriority!==n){if(o!=null&&ch(o),n===1)e.tag===0?qv(bp.bind(null,e)):i1(bp.bind(null,e)),Bv(function(){(ze&6)===0&&dr()}),o=null;else{switch(ph(c)){case 1:o=Rl;break;case 4:o=dh;break;case 16:o=ji;break;case 536870912:o=uh;break;default:o=ji}o=Rp(o,wp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function wp(e,n){if(xs=-1,ws=0,(ze&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Ao()&&e.callbackNode!==o)return null;var c=Ri(e,e===yt?St:0);if(c===0)return null;if((c&30)!==0||(c&e.expiredLanes)!==0||n)n=bs(e,c);else{n=c;var u=ze;ze|=2;var p=_p();(yt!==e||St!==n)&&(Qn=null,To=it()+500,Wr(e,n));do try{h3();break}catch(P){kp(e,P)}while(!0);fc(),fs.current=p,ze=u,dt!==null?n=0:(yt=null,St=0,n=mt)}if(n!==0){if(n===2&&(u=Ll(e),u!==0&&(c=u,n=Zc(e,u))),n===1)throw o=Ua,Wr(e,0),vr(e,c),Ut(e,it()),o;if(n===6)vr(e,c);else{if(u=e.current.alternate,(c&30)===0&&!d3(u)&&(n=bs(e,c),n===2&&(p=Ll(e),p!==0&&(c=p,n=Zc(e,p))),n===1))throw o=Ua,Wr(e,0),vr(e,c),Ut(e,it()),o;switch(e.finishedWork=u,e.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:Hr(e,Ht,Qn);break;case 3:if(vr(e,c),(c&130023424)===c&&(n=Yc+500-it(),10<n)){if(Ri(e,0)!==0)break;if(u=e.suspendedLanes,(u&c)!==c){zt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=rc(Hr.bind(null,e,Ht,Qn),n);break}Hr(e,Ht,Qn);break;case 4:if(vr(e,c),(c&4194240)===c)break;for(n=e.eventTimes,u=-1;0<c;){var b=31-mn(c);p=1<<b,b=n[b],b>u&&(u=b),c&=~p}if(c=u,c=it()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*c3(c/1960))-c,10<c){e.timeoutHandle=rc(Hr.bind(null,e,Ht,Qn),c);break}Hr(e,Ht,Qn);break;case 5:Hr(e,Ht,Qn);break;default:throw Error(i(329))}}}return Ut(e,it()),e.callbackNode===o?wp.bind(null,e):null}function Zc(e,n){var o=qa;return e.current.memoizedState.isDehydrated&&(Wr(e,n).flags|=256),e=bs(e,n),e!==2&&(n=Ht,Ht=o,n!==null&&Xc(n)),e}function Xc(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function d3(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],p=u.getSnapshot;u=u.value;try{if(!gn(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vr(e,n){for(n&=~Gc,n&=~ms,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-mn(n),c=1<<o;e[o]=-1,n&=~c}}function bp(e){if((ze&6)!==0)throw Error(i(327));Ao();var n=Ri(e,0);if((n&1)===0)return Ut(e,it()),null;var o=bs(e,n);if(e.tag!==0&&o===2){var c=Ll(e);c!==0&&(n=c,o=Zc(e,c))}if(o===1)throw o=Ua,Wr(e,0),vr(e,n),Ut(e,it()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hr(e,Ht,Qn),Ut(e,it()),null}function Jc(e,n){var o=ze;ze|=1;try{return e(n)}finally{ze=o,ze===0&&(To=it()+500,Yi&&dr())}}function Br(e){mr!==null&&mr.tag===0&&(ze&6)===0&&Ao();var n=ze;ze|=1;var o=un.transition,c=Ue;try{if(un.transition=null,Ue=1,e)return e()}finally{Ue=c,un.transition=o,ze=n,(ze&6)===0&&dr()}}function ed(){Jt=$o.current,Je($o)}function Wr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Fv(o)),dt!==null)for(o=dt.return;o!==null;){var c=o;switch(cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vi();break;case 3:Mo(),Je(Ft),Je(Nt),kc();break;case 5:wc(c);break;case 4:Mo();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:mc(c.type._context);break;case 22:case 23:ed()}o=o.return}if(yt=e,dt=e=yr(e.current,null),St=Jt=n,mt=0,Ua=null,Gc=ms=Fr=0,Ht=qa=null,zr!==null){for(n=0;n<zr.length;n++)if(o=zr[n],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,p=o.pending;if(p!==null){var b=p.next;p.next=u,c.next=b}o.pending=c}zr=null}return e}function kp(e,n){do{var o=dt;try{if(fc(),os.current=ls,as){for(var c=ot.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}as=!1}if(Dr=0,vt=ft=ot=null,Oa=!1,Da=0,Vc.current=null,o===null||o.return===null){mt=1,Ua=n,dt=null;break}e:{var p=e,b=o.return,P=o,B=n;if(n=St,P.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ce=P,ue=ce.tag;if((ce.mode&1)===0&&(ue===0||ue===11||ue===15)){var le=ce.alternate;le?(ce.updateQueue=le.updateQueue,ce.memoizedState=le.memoizedState,ce.lanes=le.lanes):(ce.updateQueue=null,ce.memoizedState=null)}var ge=G1(b);if(ge!==null){ge.flags&=-257,Y1(ge,b,P,p,n),ge.mode&1&&V1(p,ee,n),n=ge,B=ee;var ye=n.updateQueue;if(ye===null){var we=new Set;we.add(B),n.updateQueue=we}else ye.add(B);break e}else{if((n&1)===0){V1(p,ee,n),td();break e}B=Error(i(426))}}else if(nt&&P.mode&1){var st=G1(b);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Y1(st,b,P,p,n),hc(Ro(B,P));break e}}p=B=Ro(B,P),mt!==4&&(mt=2),qa===null?qa=[p]:qa.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var Q=U1(p,B,n);v1(p,Q);break e;case 1:P=B;var W=p.type,X=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(fr===null||!fr.has(X)))){p.flags|=65536,n&=-n,p.lanes|=n;var pe=q1(p,P,n);v1(p,pe);break e}}p=p.return}while(p!==null)}jp(o)}catch(be){n=be,dt===o&&o!==null&&(dt=o=o.return);continue}break}while(!0)}function _p(){var e=fs.current;return fs.current=ls,e===null?ls:e}function td(){(mt===0||mt===3||mt===2)&&(mt=4),yt===null||(Fr&268435455)===0&&(ms&268435455)===0||vr(yt,St)}function bs(e,n){var o=ze;ze|=2;var c=_p();(yt!==e||St!==n)&&(Qn=null,Wr(e,n));do try{u3();break}catch(u){kp(e,u)}while(!0);if(fc(),ze=o,fs.current=c,dt!==null)throw Error(i(261));return yt=null,St=0,mt}function u3(){for(;dt!==null;)Cp(dt)}function h3(){for(;dt!==null&&!z2();)Cp(dt)}function Cp(e){var n=Mp(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,n===null?jp(e):dt=n,Vc.current=null}function jp(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=o3(o,n,Jt),o!==null){dt=o;return}}else{if(o=a3(o,n),o!==null){o.flags&=32767,dt=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,dt=null;return}}if(n=n.sibling,n!==null){dt=n;return}dt=n=e}while(n!==null);mt===0&&(mt=5)}function Hr(e,n,o){var c=Ue,u=un.transition;try{un.transition=null,Ue=1,p3(e,n,o,c)}finally{un.transition=u,Ue=c}return null}function p3(e,n,o,c){do Ao();while(mr!==null);if((ze&6)!==0)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=o.lanes|o.childLanes;if(G2(e,p),e===yt&&(dt=yt=null,St=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vs||(vs=!0,Rp(ji,function(){return Ao(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=un.transition,un.transition=null;var b=Ue;Ue=1;var P=ze;ze|=4,Vc.current=null,s3(e,o),mp(o,e),Av(tc),Ti=!!ec,tc=ec=null,e.current=o,l3(o),O2(),ze=P,Ue=b,un.transition=p}else e.current=o;if(vs&&(vs=!1,mr=e,ys=u),p=e.pendingLanes,p===0&&(fr=null),B2(o.stateNode),Ut(e,it()),n!==null)for(c=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(gs)throw gs=!1,e=Qc,Qc=null,e;return(ys&1)!==0&&e.tag!==0&&Ao(),p=e.pendingLanes,(p&1)!==0?e===Kc?Va++:(Va=0,Kc=e):Va=0,dr(),null}function Ao(){if(mr!==null){var e=ph(ys),n=un.transition,o=Ue;try{if(un.transition=null,Ue=16>e?16:e,mr===null)var c=!1;else{if(e=mr,mr=null,ys=0,(ze&6)!==0)throw Error(i(331));var u=ze;for(ze|=4,ve=e.current;ve!==null;){var p=ve,b=p.child;if((ve.flags&16)!==0){var P=p.deletions;if(P!==null){for(var B=0;B<P.length;B++){var ee=P[B];for(ve=ee;ve!==null;){var ce=ve;switch(ce.tag){case 0:case 11:case 15:Ha(8,ce,p)}var ue=ce.child;if(ue!==null)ue.return=ce,ve=ue;else for(;ve!==null;){ce=ve;var le=ce.sibling,ge=ce.return;if(dp(ce),ce===ee){ve=null;break}if(le!==null){le.return=ge,ve=le;break}ve=ge}}}var ye=p.alternate;if(ye!==null){var we=ye.child;if(we!==null){ye.child=null;do{var st=we.sibling;we.sibling=null,we=st}while(we!==null)}}ve=p}}if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,ve=b;else e:for(;ve!==null;){if(p=ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ha(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,ve=Q;break e}ve=p.return}}var W=e.current;for(ve=W;ve!==null;){b=ve;var X=b.child;if((b.subtreeFlags&2064)!==0&&X!==null)X.return=b,ve=X;else e:for(b=W;ve!==null;){if(P=ve,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:ps(9,P)}}catch(be){at(P,P.return,be)}if(P===b){ve=null;break e}var pe=P.sibling;if(pe!==null){pe.return=P.return,ve=pe;break e}ve=P.return}}if(ze=u,dr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Si,e)}catch{}c=!0}return c}finally{Ue=o,un.transition=n}}return!1}function Sp(e,n,o){n=Ro(o,n),n=U1(e,n,1),e=hr(e,n,1),n=zt(),e!==null&&(ga(e,1,n),Ut(e,n))}function at(e,n,o){if(e.tag===3)Sp(e,e,o);else for(;n!==null;){if(n.tag===3){Sp(n,e,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){e=Ro(o,e),e=q1(n,e,1),n=hr(n,e,1),e=zt(),n!==null&&(ga(n,1,e),Ut(n,e));break}}n=n.return}}function f3(e,n,o){var c=e.pingCache;c!==null&&c.delete(n),n=zt(),e.pingedLanes|=e.suspendedLanes&o,yt===e&&(St&o)===o&&(mt===4||mt===3&&(St&130023424)===St&&500>it()-Yc?Wr(e,0):Gc|=o),Ut(e,n)}function Np(e,n){n===0&&((e.mode&1)===0?n=1:(n=Mi,Mi<<=1,(Mi&130023424)===0&&(Mi=4194304)));var o=zt();e=Vn(e,n),e!==null&&(ga(e,n,o),Ut(e,o))}function m3(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Np(e,o)}function g3(e,n){var o=0;switch(e.tag){case 13:var c=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=e.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),Np(e,o)}var Mp;Mp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ft.current)Wt=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Wt=!1,r3(e,n,o);Wt=(e.flags&131072)!==0}else Wt=!1,nt&&(n.flags&1048576)!==0&&s1(n,Ki,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;us(e,n),e=n.pendingProps;var u=bo(n,Nt.current);No(n,o),u=jc(null,n,c,e,u,o);var p=Sc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Bt(c)?(p=!0,Gi(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,yc(n),u.updater=cs,n.stateNode=u,u._reactInternals=n,Tc(n,c,e,o),n=Pc(null,n,c,!0,p,o)):(n.tag=0,nt&&p&&lc(n),Pt(null,n,u,o),n=n.child),n;case 16:c=n.elementType;e:{switch(us(e,n),e=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=y3(c),e=yn(c,e),u){case 0:n=Ec(null,n,c,e,o);break e;case 1:n=ep(null,n,c,e,o);break e;case 11:n=Q1(null,n,c,e,o);break e;case 14:n=K1(null,n,c,yn(c.type,e),o);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:yn(c,u),Ec(e,n,c,u,o);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:yn(c,u),ep(e,n,c,u,o);case 3:e:{if(tp(n),e===null)throw Error(i(387));c=n.pendingProps,p=n.memoizedState,u=p.element,g1(e,n),ns(n,c,null,o);var b=n.memoizedState;if(c=b.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Ro(Error(i(423)),n),n=np(e,n,c,o,u);break e}else if(c!==u){u=Ro(Error(i(424)),n),n=np(e,n,c,o,u);break e}else for(Xt=sr(n.stateNode.containerInfo.firstChild),Zt=n,nt=!0,vn=null,o=f1(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Co(),c===u){n=Yn(e,n,o);break e}Pt(e,n,c,o)}n=n.child}return n;case 5:return x1(n),e===null&&uc(n),c=n.type,u=n.pendingProps,p=e!==null?e.memoizedProps:null,b=u.children,nc(c,u)?b=null:p!==null&&nc(c,p)&&(n.flags|=32),J1(e,n),Pt(e,n,b,o),n.child;case 6:return e===null&&uc(n),null;case 13:return rp(e,n,o);case 4:return xc(n,n.stateNode.containerInfo),c=n.pendingProps,e===null?n.child=jo(n,null,c,o):Pt(e,n,c,o),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:yn(c,u),Q1(e,n,c,u,o);case 7:return Pt(e,n,n.pendingProps,o),n.child;case 8:return Pt(e,n,n.pendingProps.children,o),n.child;case 12:return Pt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,p=n.memoizedProps,b=u.value,Ke(Ji,c._currentValue),c._currentValue=b,p!==null)if(gn(p.value,b)){if(p.children===u.children&&!Ft.current){n=Yn(e,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){b=p.child;for(var B=P.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=Gn(-1,o&-o),B.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ce=ee.pending;ce===null?B.next=B:(B.next=ce.next,ce.next=B),ee.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),gc(p.return,o,n),P.lanes|=o;break}B=B.next}}else if(p.tag===10)b=p.type===n.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(i(341));b.lanes|=o,P=b.alternate,P!==null&&(P.lanes|=o),gc(b,o,n),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Pt(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,No(n,o),u=cn(u),c=c(u),n.flags|=1,Pt(e,n,c,o),n.child;case 14:return c=n.type,u=yn(c,n.pendingProps),u=yn(c.type,u),K1(e,n,c,u,o);case 15:return Z1(e,n,n.type,n.pendingProps,o);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:yn(c,u),us(e,n),n.tag=1,Bt(c)?(e=!0,Gi(n)):e=!1,No(n,o),W1(n,c,u),Tc(n,c,u,o),Pc(null,n,c,!0,e,o);case 19:return ap(e,n,o);case 22:return X1(e,n,o)}throw Error(i(156,n.tag))};function Rp(e,n){return lh(e,n)}function v3(e,n,o,c){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,o,c){return new v3(e,n,o,c)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y3(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===H)return 11;if(e===se)return 14}return 2}function yr(e,n){var o=e.alternate;return o===null?(o=hn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ks(e,n,o,c,u,p){var b=2;if(c=e,typeof e=="function")nd(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case N:return Ur(o.children,u,p,n);case I:b=8,u|=8;break;case D:return e=hn(12,o,n,u|2),e.elementType=D,e.lanes=p,e;case Y:return e=hn(13,o,n,u),e.elementType=Y,e.lanes=p,e;case Z:return e=hn(19,o,n,u),e.elementType=Z,e.lanes=p,e;case oe:return _s(o,u,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:b=10;break e;case F:b=9;break e;case H:b=11;break e;case se:b=14;break e;case ne:b=16,c=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=hn(b,o,n,u),n.elementType=e,n.type=c,n.lanes=p,n}function Ur(e,n,o,c){return e=hn(7,e,c,n),e.lanes=o,e}function _s(e,n,o,c){return e=hn(22,e,c,n),e.elementType=oe,e.lanes=o,e.stateNode={isHidden:!1},e}function rd(e,n,o){return e=hn(6,e,null,n),e.lanes=o,e}function od(e,n,o){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function x3(e,n,o,c,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ad(e,n,o,c,u,p,b,P,B){return e=new x3(e,n,o,P,B),n===1?(n=1,p===!0&&(n|=8)):n=0,p=hn(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(p),e}function w3(e,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:c==null?null:""+c,children:e,containerInfo:n,implementation:o}}function Lp(e){if(!e)return cr;e=e._reactInternals;e:{if(Tr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Bt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Bt(o))return o1(e,o,n)}return n}function $p(e,n,o,c,u,p,b,P,B){return e=ad(o,c,!0,e,u,p,b,P,B),e.context=Lp(null),o=e.current,c=zt(),u=gr(o),p=Gn(c,u),p.callback=n??null,hr(o,p,u),e.current.lanes=u,ga(e,u,c),Ut(e,c),e}function Cs(e,n,o,c){var u=n.current,p=zt(),b=gr(u);return o=Lp(o),n.context===null?n.context=o:n.pendingContext=o,n=Gn(p,b),n.payload={element:e},c=c===void 0?null:c,c!==null&&(n.callback=c),e=hr(u,n,b),e!==null&&(bn(e,u,b,p),ts(e,u,b)),b}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function id(e,n){Tp(e,n),(e=e.alternate)&&Tp(e,n)}function b3(){return null}var Ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function sd(e){this._internalRoot=e}Ss.prototype.render=sd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Cs(e,n,null,null)},Ss.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Br(function(){Cs(null,e,null,null)}),n[Wn]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var n=gh();e={blockedOn:null,target:e,priority:n};for(var o=0;o<or.length&&n!==0&&n<or[o].priority;o++);or.splice(o,0,e),o===0&&xh(e)}};function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function k3(e,n,o,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var ee=js(b);p.call(ee)}}var b=$p(n,c,e,0,null,!1,!1,"",Ip);return e._reactRootContainer=b,e[Wn]=b.current,La(e.nodeType===8?e.parentNode:e),Br(),b}for(;u=e.lastChild;)e.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var ee=js(B);P.call(ee)}}var B=ad(e,0,!1,null,null,!1,!1,"",Ip);return e._reactRootContainer=B,e[Wn]=B.current,La(e.nodeType===8?e.parentNode:e),Br(function(){Cs(n,B,o,c)}),B}function Ms(e,n,o,c,u){var p=o._reactRootContainer;if(p){var b=p;if(typeof u=="function"){var P=u;u=function(){var B=js(b);P.call(B)}}Cs(n,b,e,u)}else b=k3(o,n,e,u,c);return js(b)}fh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=ma(n.pendingLanes);o!==0&&(Tl(n,o|1),Ut(n,it()),(ze&6)===0&&(To=it()+500,dr()))}break;case 13:Br(function(){var c=Vn(e,1);if(c!==null){var u=zt();bn(c,e,1,u)}}),id(e,1)}},Al=function(e){if(e.tag===13){var n=Vn(e,134217728);if(n!==null){var o=zt();bn(n,e,134217728,o)}id(e,134217728)}},mh=function(e){if(e.tag===13){var n=gr(e),o=Vn(e,n);if(o!==null){var c=zt();bn(o,e,n,c)}id(e,n)}},gh=function(){return Ue},vh=function(e,n){var o=Ue;try{return Ue=e,n()}finally{Ue=o}},ua=function(e,n,o){switch(n){case"input":if(Ve(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==e&&c.form===e.form){var u=qi(c);if(!u)throw Error(i(90));fe(c),Ve(c,u)}}}break;case"textarea":It(e,o);break;case"select":n=o.value,n!=null&&Ye(e,!!o.multiple,n,!1)}},th=Jc,nh=Br;var _3={usingClientEntryPoint:!1,Events:[Aa,xo,qi,Ju,eh,Jc]},Ga={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C3={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ih(e),e===null?null:e.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||b3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Si=Rs.inject(C3),Ln=Rs}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_3,qt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(n))throw Error(i(200));return w3(e,n,null,o)},qt.createRoot=function(e,n){if(!ld(e))throw Error(i(299));var o=!1,c="",u=Ap;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ad(e,1,!1,null,null,o,!1,c,u),e[Wn]=n.current,La(e.nodeType===8?e.parentNode:e),new sd(n)},qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=ih(n),e=e===null?null:e.stateNode,e},qt.flushSync=function(e){return Br(e)},qt.hydrate=function(e,n,o){if(!Ns(n))throw Error(i(200));return Ms(null,e,n,!0,o)},qt.hydrateRoot=function(e,n,o){if(!ld(e))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,p="",b=Ap;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),n=$p(n,null,e,1,o??null,u,!1,p,b),e[Wn]=n.current,La(e),c)for(e=0;e<c.length;e++)o=c[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Ss(n)},qt.render=function(e,n,o){if(!Ns(n))throw Error(i(200));return Ms(null,e,n,!1,o)},qt.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(i(40));return e._reactRootContainer?(Br(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1},qt.unstable_batchedUpdates=Jc,qt.unstable_renderSubtreeIntoContainer=function(e,n,o,c){if(!Ns(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ms(e,n,o,!1,c)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var Wp;function z0(){if(Wp)return ud.exports;Wp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),ud.exports=$3(),ud.exports}var Hp;function T3(){if(Hp)return Ls;Hp=1;var t=z0();return Ls.createRoot=t.createRoot,Ls.hydrateRoot=t.hydrateRoot,Ls}var A3=T3();const I3=P0(A3);function O0(t){var a,i,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(a=0;a<l;a++)t[a]&&(i=O0(t[a]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function re(){for(var t,a,i=0,s="",l=arguments.length;i<l;i++)(t=arguments[i])&&(a=O0(t))&&(s&&(s+=" "),s+=a);return s}const ao=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ao.displayName="PlusIcon";const E3="_root_7uomf_13",P3="_sm_7uomf_82",z3="_md_7uomf_88",O3="_lg_7uomf_94",D3="_horizontal_7uomf_107",F3="_alignStart_7uomf_121",B3="_vertical_7uomf_125",W3="_inner_7uomf_131",H3="_iconSlot_7uomf_146",U3="_label_7uomf_163",qr={root:E3,sm:P3,md:z3,lg:O3,horizontal:D3,alignStart:F3,vertical:B3,inner:W3,iconSlot:H3,label:U3};function Up(t){return typeof t=="number"?`${t}px`:t}const q3=m.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:g,style:x,disabled:y,type:w="button",...k},A)=>{const _=d??r.jsx(ao,{size:"100%"}),j={};return h!==void 0&&(j["--area-min-height"]=Up(h)),f!==void 0&&(j["--area-radius"]=Up(f)),r.jsx("button",{ref:A,type:w,className:re(qr.root,qr[t],qr[a],i==="start"&&qr.alignStart,g),disabled:y,"data-size":t,"data-layout":a,style:{...j,...x},...k,children:r.jsxs("span",{className:qr.inner,children:[r.jsx("span",{className:qr.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&r.jsx("span",{className:qr.label,children:s})]})})});q3.displayName="AreaButton";const V3="_root_b29pw_8",G3="_image_b29pw_33",Y3="_initials_b29pw_40",Q3="_iconSlot_b29pw_52",wr={root:V3,image:G3,initials:Y3,iconSlot:Q3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function K3({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Z3(t){const a=t.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const Nn=m.forwardRef(({src:t,alt:a,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:g="circle",className:x,...y},w)=>{const[k,A]=m.useState(!1),_=!!t&&!k,j=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Z3(s):"");let R;return _?R=r.jsx("img",{src:t,alt:a??"",className:wr.image,onError:()=>A(!0),draggable:!1},t):j?R=r.jsx("span",{className:wr.initials,"aria-hidden":a?void 0:!0,children:j}):R=r.jsx("span",{className:wr.iconSlot,"aria-hidden":"true",children:l??r.jsx(K3,{})}),r.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":g,className:re(wr.root,wr[`size-${d}`],wr[`color-${h}`],wr[`variant-${f}`],wr[`shape-${g}`],x),...y,children:R})});Nn.displayName="Avatar";const X3="_root_uqz3u_7",J3={root:X3},Ot=m.forwardRef(({as:t="span",className:a,children:i,...s},l)=>r.jsx(t,{ref:l,className:re(J3.root,a),...s,children:i}));Ot.displayName="Eyebrow";const ey="_root_1tnwf_15",ty={root:ey},ny=m.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:g,...x},y)=>{const w=i!==void 0,k=m.useRef(null),[A,_]=m.useState(()=>w?!i:!s),j=m.useCallback(C=>{k.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]);m.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),m.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const R=C=>{const z=C.currentTarget.textContent??"";_(z===""),l==null||l(z),g==null||g(C)},T=C=>{C.preventDefault();const z=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,z)},S=!h&&!d;return r.jsx("span",{ref:j,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":t,"data-empty":A||void 0,"data-placeholder":a,"data-disabled":h||void 0,"data-readonly":d||void 0,className:re(ty.root,f),onInput:R,onPaste:T,...x})});ny.displayName="TypeBox";const ry="_root_1brpy_12",oy="_ghost_1brpy_27",ay="_path_1brpy_32",Qa={root:ry,"ai-spin":"_ai-spin_1brpy_1",ghost:oy,"ai-morph":"_ai-morph_1brpy_1",path:ay,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},iy={xs:16,sm:24,md:32,lg:48,xl:64},sy={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},qp="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",$s=t=>t==="inverse"||t==="inverse-light",ly=t=>t==="stroke"||t==="stroke-light",uu=m.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const g=m.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof t=="string",k=w?iy[t]:t,A=w?sy[t]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=a==="gradient-fill"?`url(#${x})`:$s(a)?"currentColor":"none",j=$s(a)?"none":ly(a)?"currentColor":`url(#${x})`,R="currentColor",T=a!=="stroke"&&a!=="stroke-light"&&!$s(a);return r.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:re(Qa.root,Qa[`variant-${a}`],Qa[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!$s(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:qp,stroke:R,strokeWidth:A*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Qa.ghost}),r.jsx("path",{d:qp,fill:_,stroke:j==="none"?void 0:j,strokeWidth:j==="none"?void 0:A,strokeLinecap:"round",strokeLinejoin:"round",filter:T?`url(#${y})`:void 0,className:Qa.path})]})});uu.displayName="AILoader";const cy="_root_10act_14",dy="_hovered_10act_68",uy="_loading_10act_69",hy="_sm_10act_90",py="_md_10act_98",fy="_lg_10act_106",my="_dark_10act_116",gy="_icon_10act_122",Io={root:cy,hovered:dy,loading:uy,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:hy,md:py,lg:fy,dark:my,icon:gy},Vp={sm:12,md:14,lg:18};function vy({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const D0=m.forwardRef(({size:t="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[g,x]=m.useState(!1);return r.jsx("button",{ref:f,className:re(Io.root,Io[t],a&&Io.dark,i?Io.loading:g&&Io.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:r.jsx("span",{className:Io.icon,children:i?r.jsx(uu,{size:Vp[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(vy,{size:Vp[t],light:a})})})});D0.displayName="AICoreButton";const yy="_root_1qx4u_9",xy="_star_1qx4u_34",fd={root:yy,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:xy},wy="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",F0=m.forwardRef(({size:t="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":t,"aria-hidden":"true",className:re(fd.root,fd[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:fd.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:wy,fill:"currentColor"})})}));F0.displayName="AIAvatar";const by="_shell_lalw3_21",ky="_wrapper_lalw3_58",_y="_card_lalw3_65",Cy="_cardClip_lalw3_94",jy="_textarea_lalw3_160",Sy="_actions_lalw3_203",Fo={shell:by,wrapper:ky,card:_y,cardClip:Cy,textarea:jy,actions:Sy},B0=m.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(Fo.shell,t),...i,children:a}));B0.displayName="AIComposer";function Ny(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const W0=m.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:g,children:x,style:y,...w},k)=>{const A=m.useRef(null);m.useEffect(()=>{const S=A.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[t]);const _=m.useCallback(S=>a(S.target.value),[a]),j=m.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),R=m.useCallback(S=>{A.current=S,Ny(k,S)},[k]),T={...y??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:re(Fo.wrapper,h),"data-radius":l,children:r.jsx("div",{className:Fo.card,children:r.jsxs("div",{className:Fo.cardClip,children:[r.jsx("textarea",{...w,ref:R,className:Fo.textarea,rows:1,value:t,onChange:_,onKeyDown:j,placeholder:d,disabled:g,style:T}),x!=null&&r.jsx("div",{className:Fo.actions,children:x})]})})})});W0.displayName="AIComposerInput";const My="_root_fv0gc_10",Ry="_simple_fv0gc_28",Ly="_float_fv0gc_83",Gp={root:My,simple:Ry,float:Ly},$y=m.forwardRef(({variant:t="simple",className:a,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":t,className:re(Gp.root,Gp[t],a),...s,children:i}));$y.displayName="AIConversation";const Ty="_fadeFrame_1l0ib_19",Ay="_scroller_1l0ib_32",Iy="_content_1l0ib_89",Ey="_messageBlock_1l0ib_108",Py="_messageBlockAi_1l0ib_116",zy="_inboundBlock_1l0ib_128",Oy="_inboundLoader_1l0ib_136",Dy="_inboundLoaderLabel_1l0ib_146",Fy="_outboundBlock_1l0ib_153",By="_outboundHeader_1l0ib_161",Wy="_messageBlockUser_1l0ib_168",Hy="_aiThreadOutboundIn_1l0ib_1",Uy="_messageBody_1l0ib_182",qy="_messageBodyAi_1l0ib_193",Vy="_messageBodyUser_1l0ib_200",Gy="_label_1l0ib_159",Yy="_labelAi_1l0ib_221",Qy="_labelUser_1l0ib_159",Ky="_labelAvatar_1l0ib_224",Zy="_labelText_1l0ib_237",Xy="_timestamp_1l0ib_244",Jy="_timestampAi_1l0ib_259",ex="_timestampUser_1l0ib_260",tx="_timestampInline_1l0ib_270",nx="_aiThreadOutboundFadeIn_1l0ib_1",Ie={fadeFrame:Ty,scroller:Ay,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:Iy,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Ey,messageBlockAi:Py,inboundBlock:zy,inboundLoader:Oy,inboundLoaderLabel:Dy,outboundBlock:Fy,outboundHeader:By,messageBlockUser:Wy,aiThreadOutboundIn:Hy,messageBody:Uy,messageBodyAi:qy,messageBodyUser:Vy,label:Gy,labelAi:Yy,labelUser:Qy,labelAvatar:Ky,labelText:Zy,timestamp:Xy,timestampAi:Jy,timestampUser:ex,timestampInline:tx,aiThreadOutboundFadeIn:nx},Yp=8;function rx(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const ox=m.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const g=m.useRef(null),x=m.useRef(null),y=m.useRef(!0),[w,k]=m.useState(!1),[A,_]=m.useState(!1),j=m.useCallback(R=>{g.current=R,rx(f,R)},[f]);return m.useEffect(()=>{const R=g.current,T=x.current;if(!R||!T)return;const S=()=>{const{scrollTop:N,scrollHeight:I,clientHeight:D}=R;return I-N-D<s},C=N=>{R.scrollTo({top:R.scrollHeight,behavior:N?"smooth":"auto"})},z=()=>{const{scrollTop:N,scrollHeight:I,clientHeight:D}=R,G=N>Yp,F=I-N-D>Yp;k(H=>H===G?H:G),_(H=>H===F?H:F)};i&&(C(!1),y.current=!0),z();const L=()=>{y.current=S(),z()};R.addEventListener("scroll",L,{passive:!0});const M=new ResizeObserver(()=>{i&&y.current&&C(!0),z()});return M.observe(T),M.observe(R),()=>{R.removeEventListener("scroll",L),M.disconnect()}},[i,s]),r.jsx("div",{className:Ie.fadeFrame,"data-fade-top":w,"data-fade-bottom":A,children:r.jsx("div",{ref:j,className:re(Ie.scroller,Ie[`padding-${a}`],l),...h,children:r.jsx("div",{ref:x,className:re(Ie.content,Ie[`density-${t}`]),children:d})})})});ox.displayName="AIThread";const cl=m.forwardRef(({align:t="ai",avatar:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:re(Ie.label,t==="user"?Ie.labelUser:Ie.labelAi,i),...l,children:[a!=null&&r.jsx("span",{className:Ie.labelAvatar,children:a}),r.jsx("span",{className:Ie.labelText,children:s})]}));cl.displayName="AILabel";const ax=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function ix(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const pi=m.forwardRef(({value:t,align:a="ai",format:i=ax,inline:s=!1,className:l,...d},h)=>{const f=m.useMemo(()=>ix(t,i),[t,i]);return f?r.jsx("time",{ref:h,className:re(Ie.timestamp,s?Ie.timestampInline:a==="user"?Ie.timestampUser:Ie.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});pi.displayName="AITimestamp";function sx(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(pi,{align:"ai",value:t}):t}function lx(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(cl,{align:"ai",children:t}):t}const cx=m.forwardRef(({label:t,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:re(Ie.messageBlock,Ie.messageBlockAi,i),...l,children:[lx(t),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyAi),children:s}),sx(a)]}));cx.displayName="AIAssistantMessage";function dx(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(pi,{align:"user",value:t}):t}function ux(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(cl,{align:"user",children:t}):t}const hx=m.forwardRef(({label:t,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:re(Ie.messageBlock,Ie.messageBlockUser,i),...l,children:[ux(t),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyUser),children:s}),dx(a)]}));hx.displayName="AIUserMessage";function px(t){return t===!1?null:t==null||t===!0?r.jsx(F0,{size:"sm"}):t}function fx(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(cl,{align:"ai",avatar:a,children:t}):t}const mx=m.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...g},x)=>{const y=px(t),w=fx(a,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:re(Ie.messageBlock,Ie.messageBlockAi,Ie.inboundBlock,h),...g,children:[w,i,f!=null&&r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyAi),children:f}),l&&r.jsxs("div",{className:Ie.inboundLoader,"aria-live":"polite",children:[r.jsx(uu,{size:"xs"}),d!=null&&r.jsx("span",{className:Ie.inboundLoaderLabel,children:d})]}),s]})});mx.displayName="AIInboundMessage";function gx(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const vx=m.forwardRef(({label:t="You",time:a,timeFormat:i,className:s,children:l,...d},h)=>{const f=a==null?null:gx(a)?r.jsx(pi,{value:a,format:i,inline:!0}):a,g=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:Ie.labelText,children:t}):t,x=g!=null||f!=null;return r.jsxs("div",{ref:h,"data-author":"user",className:re(Ie.messageBlock,Ie.messageBlockUser,Ie.outboundBlock,s),...d,children:[x&&r.jsxs("div",{className:re(Ie.label,Ie.labelUser,Ie.outboundHeader),children:[g,f]}),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyUser),children:l})]})});vx.displayName="AIOutboundMessage";const er=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};er.displayName="ChevronDownIcon";const yx="_root_1j4eq_8",xx="_header_1j4eq_17",wx="_headerSummary_1j4eq_53",bx="_aiTrailSummaryFade_1j4eq_1",kx="_aiTrailHeaderAppend_1j4eq_1",_x="_aiTrailEllipsis_1j4eq_1",Cx="_headerCurrent_1j4eq_128",jx="_headerChevron_1j4eq_159",Sx="_headerChevronExpanded_1j4eq_173",Nx="_body_1j4eq_187",Mx="_bodyExpanded_1j4eq_200",Rx="_bodyCollapsed_1j4eq_201",Lx="_bodyInner_1j4eq_203",$x="_bodyContent_1j4eq_187",Tx="_step_1j4eq_225",Ax="_stepIcon_1j4eq_242",Ix="_stepAnimating_1j4eq_256",Ex="_aiTrailStepPulse_1j4eq_1",Px="_stepBody_1j4eq_267",zx="_stepHead_1j4eq_282",Ox="_stepLabel_1j4eq_286",Dx="_stepSeparator_1j4eq_288",Fx="_stepDetail_1j4eq_292",Bx="_subToggle_1j4eq_302",Wx="_subToggleCount_1j4eq_335",Hx="_subToggleChevron_1j4eq_339",Ux="_subActivityWrap_1j4eq_358",qx="_subActivityExpanded_1j4eq_364",Vx="_subActivityCollapsed_1j4eq_365",Gx="_subActivityClip_1j4eq_367",Yx="_subActivityList_1j4eq_378",Qx="_subActivity_1j4eq_358",Kx="_aiTrailSubActivityType_1j4eq_1",Zx="_aiTrailSubActivityFade_1j4eq_1",qe={root:yx,header:xx,headerSummary:wx,aiTrailSummaryFade:bx,aiTrailHeaderAppend:kx,aiTrailEllipsis:_x,headerCurrent:Cx,headerChevron:jx,headerChevronExpanded:Sx,body:Nx,bodyExpanded:Mx,bodyCollapsed:Rx,bodyInner:Lx,bodyContent:$x,step:Tx,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:Ax,stepAnimating:Ix,aiTrailStepPulse:Ex,stepBody:Px,stepHead:zx,stepLabel:Ox,stepSeparator:Dx,stepDetail:Fx,subToggle:Bx,subToggleCount:Wx,subToggleChevron:Hx,subActivityWrap:Ux,subActivityExpanded:qx,subActivityCollapsed:Vx,subActivityClip:Gx,subActivityList:Yx,subActivity:Qx,aiTrailSubActivityType:Kx,aiTrailSubActivityFade:Zx},hu=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};hu.displayName="MessageDotsSquareIcon";function Zs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Zs.displayName="SearchMdIcon";function jr({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const H0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};H0.displayName="Globe01Icon";const U0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};U0.displayName="Code02Icon";function q0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}q0.displayName="Tool01Icon";const Dt=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},qo=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};qo.displayName="AlertCircleIcon";const Xx={thinking:r.jsx(hu,{size:14}),tool:r.jsx(q0,{size:14}),search:r.jsx(Zs,{size:14}),file:r.jsx(jr,{size:14}),web:r.jsx(H0,{size:14}),code:r.jsx(U0,{size:14}),content:r.jsx(Dt,{size:14})},dl=m.forwardRef(({type:t,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...g},x)=>{const y=a==="active"&&d==="live",w=a==="active"&&d==="live",k=a==="active"||a==="error",[A,_]=m.useState(null),j=A!==null?A:k;m.useEffect(()=>{_(null)},[a]);const R=m.useCallback(()=>_(!j),[j]),T=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,C=a==="error"?r.jsx(qo,{size:14}):s??Xx[t];return r.jsxs("div",{ref:x,"data-step-type":t,"data-step-status":a,className:re(qe.step,qe[`step-${a}`],y&&qe.stepAnimating,h),...g,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:C}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:i})]}),T&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:R,"aria-expanded":j,"aria-label":j?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":j||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:S}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(er,{size:10})})]})]}),T&&r.jsx(r.Fragment,{children:r.jsx("div",{className:re(qe.subActivityWrap,j?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":w||void 0,children:l.map((z,L)=>r.jsx("li",{className:qe.subActivity,children:z},L))})})})})]})]})});dl.displayName="AIActivityStep";function Qp(t){return t==="error"}function Jx(t,a,i,s,l,d){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=t==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${h} · ${f}`}return r.jsxs(r.Fragment,{children:[h,i.map((f,g)=>r.jsxs(m.Fragment,{children:[" · ",f]},g))]})}const pu=m.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...g},x)=>{const y=a!==void 0,[w,k]=m.useState(i??Qp(t)),[A,_]=m.useState(!1);m.useEffect(()=>{y||A||k(Qp(t))},[t,y,A]);const j=y?!!a:w,R=m.useCallback(()=>{const M=!j;y||(k(M),_(!0)),s==null||s(M)},[j,y,s]),{enhancedChildren:T,stepCount:S,stepLabels:C,currentLabelIdx:z}=m.useMemo(()=>{let M=0;const N=[];let I=-1;return{enhancedChildren:m.Children.map(f,G=>{if(!m.isValidElement(G))return G;const F=G.props;if(!("type"in F||"status"in F))return G;M+=1;const Y=F.status??"done";return Y==="pending"?null:(F.children!=null&&(N.push(F.children),Y==="active"&&(I=N.length-1)),e5(G,t))}),stepCount:M,stepLabels:N,currentLabelIdx:I>=0?I:N.length-1}},[f,t]),L=d??Jx(t,S,C,z,qe.headerCurrent,l);return r.jsxs("div",{ref:x,"data-state":t,"data-expanded":j,className:re(qe.root,h),...g,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:R,"aria-expanded":j,"aria-label":j?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:L},`${t}-${z}`),r.jsx("span",{className:re(qe.headerChevron,j&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(er,{size:14})})]}),r.jsx("div",{className:re(qe.body,j?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[T,t==="done"&&r.jsx(dl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});pu.displayName="AIActivityTrail";function e5(t,a){return m.cloneElement(t,{groupState:a})}var fi=z0();const t5="_wrapper_3tqlm_10",n5="_tooltip_3tqlm_22",r5="_portal_3tqlm_23",o5="_top_3tqlm_61",a5="_bottom_3tqlm_71",i5="_left_3tqlm_81",s5="_right_3tqlm_91",Ts={wrapper:t5,tooltip:n5,portal:r5,top:o5,bottom:a5,left:i5,right:s5},Fn=({content:t,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,g]=m.useState(!1),[x,y]=m.useState({top:0,left:0}),w=m.useRef(null),k=m.useRef(),A=m.useId(),_=m.useCallback(()=>{if(!w.current)return;const C=w.current.getBoundingClientRect(),z=6+d;let L=0,M=0;switch(a){case"top":L=C.top-z,M=C.left+C.width/2;break;case"bottom":L=C.bottom+z,M=C.left+C.width/2;break;case"left":L=C.top+C.height/2,M=C.left-z;break;case"right":L=C.top+C.height/2,M=C.right+z;break}y({top:L,left:M})},[a,d]),j=m.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,_]),R=m.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);m.useEffect(()=>{if(!f)return;const C=()=>_();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,_]);const T=Qt.cloneElement(h,{"aria-describedby":f?A:void 0}),S=r.jsx("span",{id:A,role:"tooltip",className:re(Ts.tooltip,Ts[a],Ts.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:t});return r.jsxs("span",{ref:w,className:Ts.wrapper,onMouseEnter:j,onMouseLeave:R,onFocus:j,onBlur:R,children:[T,fi.createPortal(S,document.body)]})};Fn.displayName="Tooltip";const l5="_root_v8mqg_9",c5="_hover_v8mqg_21",md={root:l5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:c5};function d5(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const V0=m.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const g=i==null?null:d5(i)?r.jsx(pi,{value:i,format:s,inline:!0}):i,x=w=>{if(!m.isValidElement(w))return w;const k=w;if(k.type===Fn)return k;const A=k.props["aria-label"];return A?r.jsx(Fn,{content:A,placement:"top",delay:150,children:k}):k},y=m.Children.map(d,w=>{if(m.isValidElement(w)&&w.type===m.Fragment){const k=w.props.children;return m.Children.map(k,x)}return x(w)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:re(md.root,md[`align-${a}`],t==="hover"&&md.hover,l),...h,children:[y,g]})});V0.displayName="AIMessageActions";const u5="_card_1apq1_17",h5="_header_1apq1_69",p5="_iconBadge_1apq1_74",f5="_iconInner_1apq1_89",m5="_headerText_1apq1_100",g5="_headerTopRow_1apq1_109",v5="_eyebrow_1apq1_115",y5="_title_1apq1_124",x5="_subtitle_1apq1_130",w5="_headerTrailing_1apq1_135",b5="_body_1apq1_141",k5="_footer_1apq1_152",_5="_footerEnd_1apq1_157",C5="_metaRow_1apq1_162",j5="_metaItem_1apq1_170",S5="_resultHero_1apq1_180",N5="_resultHeadline_1apq1_185",M5="_resultDetail_1apq1_191",R5="_clauses_1apq1_205",L5="_clause_1apq1_205",$5="_clauseLabel_1apq1_215",T5="_clauseBody_1apq1_225",A5="_badgeExecuting_1apq1_245",Ze={card:u5,header:h5,iconBadge:p5,iconInner:f5,headerText:m5,headerTopRow:g5,eyebrow:v5,title:y5,subtitle:x5,headerTrailing:w5,body:b5,footer:k5,footerEnd:_5,metaRow:C5,metaItem:j5,resultHero:S5,resultHeadline:N5,resultDetail:M5,clauses:R5,clause:L5,clauseLabel:$5,clauseBody:T5,badgeExecuting:A5},Bn=m.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:g,footerEnd:x=!1,className:y,children:w,...k},A)=>{const _=l!=null||f!=null,j=_||d!=null||h!=null,R=s!=null||j;return r.jsxs("div",{ref:A,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:re(Ze.card,y),...k,children:[R&&r.jsxs("div",{className:Ze.header,children:[s!=null&&r.jsx("span",{className:re(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ze.iconInner,children:s})}),j&&r.jsxs("div",{className:Ze.headerText,children:[_&&r.jsxs("div",{className:Ze.headerTopRow,children:[l!=null&&r.jsx("span",{className:Ze.eyebrow,children:l}),f!=null&&r.jsx("span",{className:Ze.headerTrailing,children:f})]}),d!=null&&r.jsx("span",{className:Ze.title,children:d}),h!=null&&r.jsx("span",{className:Ze.subtitle,children:h})]})]}),w!=null&&r.jsx("div",{className:Ze.body,children:w}),g!=null&&r.jsx("div",{className:re(Ze.footer,x&&Ze.footerEnd),children:g})]})});Bn.displayName="UltronCard";const I5="_root_zkkgh_6",E5="_sm_zkkgh_24",P5="_md_zkkgh_33",z5="_lg_zkkgh_42",O5="_neutral_zkkgh_53",D5="_blue_zkkgh_66",F5="_azure_zkkgh_79",B5="_purple_zkkgh_92",W5="_pink_zkkgh_105",H5="_red_zkkgh_118",U5="_orange_zkkgh_131",q5="_yellow_zkkgh_144",V5="_matcha_zkkgh_157",G5="_green_zkkgh_170",Y5="_subtle_zkkgh_184",Q5="_outline_zkkgh_190",K5="_solid_zkkgh_196",Z5="_dot_zkkgh_203",X5="_icon_zkkgh_212",J5="_dismiss_zkkgh_224",Vr={root:I5,sm:E5,md:P5,lg:z5,neutral:O5,blue:D5,azure:F5,purple:B5,pink:W5,red:H5,orange:U5,yellow:q5,matcha:V5,green:G5,subtle:Y5,outline:Q5,solid:K5,dot:Z5,icon:X5,dismiss:J5},mi=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},e4={sm:10,md:12,lg:14},Sr=m.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:g,...x},y)=>r.jsxs("span",{ref:y,className:re(Vr.root,Vr[i],Vr[a],Vr[t],f),...x,children:[s&&r.jsx("span",{className:Vr.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:re(Vr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&r.jsx("button",{type:"button",className:Vr.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:r.jsx(mi,{size:e4[i]})})]}));Sr.displayName="Tag";function G0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}G0.displayName="SlashCircle01Icon";const fu=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};fu.displayName="EyeIcon";function ul({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ul.displayName="Target01Icon";function Dn({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Dn.displayName="ClockIcon";const gi=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};gi.displayName="RefreshCw04Icon";const Sn=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Sn.displayName="CheckCircleIcon";function hl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}hl.displayName="Save01Icon";const t4={sm:11,md:12,lg:14},n4={ignored:{label:"Ignored",color:"neutral",Icon:G0},monitored:{label:"Monitored",color:"blue",Icon:fu},recommended:{label:"Recommended",color:"purple",Icon:ul},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Dn},executing:{label:"Executing",color:"azure",Icon:gi},completed:{label:"Completed",color:"green",Icon:Sn},saved:{label:"Saved",color:"matcha",Icon:hl}},io=m.forwardRef(({status:t,size:a="sm",label:i,className:s,...l},d)=>{const h=n4[t],f=h.Icon;return r.jsx(Sr,{ref:d,color:h.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:t4[a]}),className:re(t==="executing"&&Ze.badgeExecuting,s),...l,children:i??h.label})});io.displayName="UltronStatusBadge";function pl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}pl.displayName="Bell01Icon";const r4=m.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},g)=>r.jsx(Bn,{ref:g,tone:d,eyebrow:i,title:t,icon:a??r.jsx(pl,{size:14}),trailing:l?r.jsx(io,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:Ze.metaRow,children:s.map((x,y)=>r.jsxs("span",{className:Ze.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));r4.displayName="UltronEventCard";const o4=m.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},h)=>r.jsxs(Bn,{ref:h,tone:s,eyebrow:t,icon:a??r.jsx(hu,{size:14}),...d,children:[l,i&&r.jsx("div",{className:Ze.metaRow,children:i})]}));o4.displayName="UltronUnderstandingCard";const a4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},i4=m.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},h)=>r.jsxs(Bn,{ref:h,tone:s,eyebrow:t,icon:a??r.jsx(ul,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:Ze.metaRow,children:i.map((f,g)=>r.jsx(Sr,{size:"sm",color:a4[s],variant:"subtle",children:f},g))}):null]}));i4.displayName="UltronDecisionCard";const s4="_root_ou64w_8",l4="_xs_ou64w_75",c4="_sm_ou64w_84",d4="_md_ou64w_93",u4="_lg_ou64w_102",h4="_xl_ou64w_111",p4="_iconOnly_ou64w_122",f4="_primary_ou64w_132",m4="_secondary_ou64w_148",g4="_tertiary_ou64w_167",v4="_ghost_ou64w_185",y4="_destructive_ou64w_203",x4="_destructiveSecondary_ou64w_221",w4="_artwork_ou64w_69",b4="_label_ou64w_254",k4="_spinner_ou64w_69",_4="_light_ou64w_281",Gt={root:s4,xs:l4,sm:c4,md:d4,lg:u4,xl:h4,iconOnly:p4,primary:f4,secondary:m4,tertiary:g4,ghost:v4,destructive:y4,destructiveSecondary:x4,artwork:w4,label:b4,spinner:k4,"alloy-spin":"_alloy-spin_ou64w_1",light:_4},C4={primary:Gt.primary,secondary:Gt.secondary,tertiary:Gt.tertiary,ghost:Gt.ghost,destructive:Gt.destructive,"destructive-secondary":Gt.destructiveSecondary},Re=m.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:g,...x},y)=>{const w=g||i;return r.jsxs("button",{ref:y,className:re(Gt.root,C4[t],Gt[a],d&&Gt.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...x,children:[i&&r.jsx("span",{className:Gt.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:Gt.label,children:f}),l&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Re.displayName="Button";function Y0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Y0.displayName="XCircleIcon";const j4=m.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},g)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,w)=>r.jsx(Re,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&r.jsx(Re,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(Y0,{size:16}),onClick:s,children:l})]});return r.jsx(Bn,{ref:g,tone:d,eyebrow:t,icon:a??r.jsx(ul,{size:14}),footer:x,...f,children:h})});j4.displayName="UltronRecommendationCard";function mu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}mu.displayName="Lock01Icon";const S4=m.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},A)=>{const _=r.jsxs(r.Fragment,{children:[f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h}),x&&r.jsx(Re,{size:"md",variant:"secondary",onClick:x,children:g}),r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(Dt,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Bn,{ref:A,tone:y,eyebrow:a,title:t,icon:i??r.jsx(mu,{size:14}),trailing:r.jsx(io,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});S4.displayName="UltronApprovalCard";const N4=m.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>r.jsx(Bn,{ref:f,tone:d,eyebrow:t,icon:a??r.jsx(gi,{size:14}),trailing:r.jsx(io,{status:s==="done"?"completed":"executing"}),...h,children:r.jsx(pu,{state:s,duration:l,children:i.map((g,x)=>r.jsx(dl,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));N4.displayName="UltronExecutionCard";const M4=m.forwardRef(({headline:t,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>r.jsx(Bn,{ref:f,tone:l,fill:!0,accent:!1,trailing:r.jsx(io,{status:s}),footer:d,...h,children:r.jsxs("div",{className:Ze.resultHero,children:[r.jsx("span",{className:re(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(Sn,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ze.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ze.resultDetail,children:a})]})]})}));M4.displayName="UltronResultCard";function Q0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Q0.displayName="ZapIcon";const R4=m.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:g="info",children:x,...y},w)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(hl,{size:18}),loading:d,onClick:l,children:s}),f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h})]});return r.jsx(Bn,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx(Q0,{size:14}),footer:k,...y,children:x})});R4.displayName="UltronWorkflowSaveCard";const K0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};K0.displayName="GitBranch01Icon";function gd({label:t,children:a}){return r.jsxs("div",{className:Ze.clause,children:[r.jsx("span",{className:Ze.clauseLabel,children:t}),r.jsx("span",{className:Ze.clauseBody,children:a})]})}const L4=m.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:g="info",...x},y)=>r.jsx(Bn,{ref:y,tone:g,eyebrow:a,title:t,icon:i??r.jsx(K0,{size:14}),trailing:h?r.jsx(io,{status:h}):void 0,footer:f,...x,children:r.jsxs("div",{className:Ze.clauses,children:[r.jsx(gd,{label:"When",children:s}),r.jsx(gd,{label:"If",children:l}),r.jsx(gd,{label:"Then",children:d})]})}));L4.displayName="UltronWorkflowPreviewCard";const $4="_root_1nyuz_6",T4="_sm_1nyuz_20",A4="_md_1nyuz_29",I4="_lg_1nyuz_38",E4="_divider_1nyuz_48",P4="_interactive_1nyuz_53",z4="_disabled_1nyuz_60",O4="_destructive_1nyuz_64",D4="_selected_1nyuz_78",F4="_label_1nyuz_87",B4="_description_1nyuz_97",W4="_leadingSlot_1nyuz_101",H4="_trailingSlot_1nyuz_102",U4="_content_1nyuz_115",q4="_taSwitch_1nyuz_167",V4="_taSwitchThumb_1nyuz_188",G4="_taCheckbox_1nyuz_203",Y4="_taRadio_1nyuz_226",Q4="_taRadioDot_1nyuz_244",K4="_taExpand_1nyuz_252",Z4="_taStatus_1nyuz_266",X4="_taStatus_success_1nyuz_273",J4="_taStatus_warning_1nyuz_274",e6="_taStatus_error_1nyuz_275",t6="_taStatus_info_1nyuz_276",ut={root:$4,sm:T4,md:A4,lg:I4,divider:E4,interactive:P4,disabled:z4,destructive:O4,selected:D4,label:F4,description:B4,leadingSlot:W4,trailingSlot:H4,content:U4,taSwitch:q4,taSwitchThumb:V4,taCheckbox:G4,taRadio:Y4,taRadioDot:Q4,taExpand:K4,taStatus:Z4,taStatus_success:X4,taStatus_warning:J4,taStatus_error:e6,taStatus_info:t6},an=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};an.displayName="ChevronRightIcon";const gu=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};gu.displayName="ArrowUpRightIcon";const n6="_root_4qytd_5",r6="_neutral_4qytd_25",o6="_primary_4qytd_30",a6="_success_4qytd_35",i6="_warning_4qytd_40",s6="_error_4qytd_45",l6="_info_4qytd_50",Kp={root:n6,neutral:r6,primary:o6,success:a6,warning:i6,error:s6,info:l6},Jo=m.forwardRef(({variant:t="neutral",className:a,children:i,...s},l)=>r.jsx("span",{ref:l,className:re(Kp.root,Kp[t],a),...s,children:i}));Jo.displayName="Badge";const c6=({checked:t})=>r.jsx("span",{className:ut.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:ut.taSwitchThumb})}),d6=({checked:t})=>r.jsx("span",{className:ut.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),u6=({checked:t})=>r.jsx("span",{className:ut.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:ut.taRadioDot})}),h6=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(Jo,{"aria-hidden":"true",children:i}):null},p6=({expanded:t})=>r.jsx("span",{className:ut.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(an,{size:16,color:"currentColor"})}),f6=({variant:t})=>r.jsx("span",{className:re(ut.taStatus,ut[`taStatus_${t}`]),"aria-hidden":"true"}),m6=new Set(["badge","status"]),on=m.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:A="md",interactive:_,selected:j=!1,destructive:R=!1,disabled:T=!1,className:S,onClick:C,onKeyDown:z,...L},M)=>{const N=l==="switch"||l==="checkbox"||l==="radio",[I,D]=m.useState(h),G=N?d!==void 0?d:I:!1,F=_||!!C||N||l!==void 0&&!m6.has(l),H=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":F?"button":void 0,Y=m.useCallback(ne=>{if(!T){if(N){const oe=!G;d===void 0&&D(oe),f==null||f(oe)}C==null||C(ne)}},[T,N,G,d,f,C]),Z=m.useCallback(ne=>{F&&!T&&(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),Y(ne)),z==null||z(ne)},[F,T,Y,z]),se=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(an,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(gu,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(c6,{checked:G});case"checkbox":return r.jsx(d6,{checked:G});case"radio":return r.jsx(u6,{checked:G});case"badge":return r.jsx(h6,{count:g,label:x});case"expand":return r.jsx(p6,{expanded:y});case"status":return r.jsx(f6,{variant:w});default:return null}})();return r.jsxs("div",{ref:M,role:H,tabIndex:F&&!T?0:void 0,"aria-checked":N?G:void 0,"aria-selected":j||void 0,"aria-disabled":T||void 0,"data-selected":j||void 0,"data-disabled":T||void 0,"data-destructive":R||void 0,"data-trailing-action":l??void 0,className:re(ut.root,ut[A],k&&ut.divider,F&&ut.interactive,j&&ut.selected,R&&ut.destructive,T&&ut.disabled,S),onClick:T?void 0:Y,onKeyDown:Z,...L,children:[i&&r.jsx("div",{className:ut.leadingSlot,children:i}),r.jsxs("div",{className:ut.content,children:[r.jsx("span",{className:ut.label,children:t}),a&&r.jsx("span",{className:ut.description,children:a})]}),se&&r.jsx("div",{className:ut.trailingSlot,children:se})]})});on.displayName="ListItem";const g6=m.forwardRef(({title:t,meta:a,icon:i,status:s,...l},d)=>r.jsx(on,{ref:d,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(io,{status:s}),...l}));g6.displayName="UltronActivityStreamItem";const v6="_root_1sz1z_7",y6="_status_1sz1z_50",vd={root:v6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:y6},vu=m.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const g=m.useRef(null),[x,y]=m.useState(""),w=m.Children.map(d,k=>{if(!m.isValidElement(k))return k;const A=k.props;return m.cloneElement(k,{groupDisabled:t||!!A.groupDisabled})});return m.useEffect(()=>{if(!i||!s)return;const k=A=>{A.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),m.useCallback(k=>y(k),[]),r.jsxs("div",{ref:f,"data-size":a,className:re(vd.root,vd[`size-${a}`],l),...h,children:[w,r.jsx("span",{ref:g,className:vd.status,role:"status","aria-live":"polite",children:x})]})});vu.displayName="ComposerActions";function yd({size:t=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const yu=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};yu.displayName="SearchSmIcon";const Ws=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ws.displayName="Trash03Icon";const Z0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Z0.displayName="SunIcon";const X0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};X0.displayName="ArrowNarrowRightIcon";function Kr({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Zp({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function x6({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Xs=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Xs.displayName="ChevronSelectorVerticalIcon";const Zr=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Zr.displayName="ClipboardCheckIcon";const J0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};J0.displayName="SettingsGearIcon";const em=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};em.displayName="ChevronLeftIcon";const tm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};tm.displayName="EyeOffIcon";const nm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};nm.displayName="StopIcon";const rm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};rm.displayName="RecordingIcon";const om=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};om.displayName="BankIcon";function fl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}fl.displayName="ArrowNarrowUpIcon";function am({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}am.displayName="ArrowNarrowDownIcon";function xu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}xu.displayName="Microphone02Icon";const im=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};im.displayName="AlertTriangleIcon";const wu=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};wu.displayName="BankNote01Icon";const sm=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};sm.displayName="CoinsStacked03Icon";function lm({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const bu=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};bu.displayName="Map01Icon";const cm=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};cm.displayName="PackageIcon";const dm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};dm.displayName="ThumbsUpIcon";const um=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};um.displayName="ThumbsDownIcon";function Js({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Js.displayName="Building02Icon";function ku({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ku.displayName="Building05Icon";function vi({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}vi.displayName="CheckVerified01Icon";function hm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}hm.displayName="Copy01Icon";function pm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}pm.displayName="DotsVerticalIcon";function fm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}fm.displayName="Edit02Icon";function mm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}mm.displayName="Link01Icon";function ml({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ml.displayName="LinkExternal01Icon";function gm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}gm.displayName="MedicalCrossIcon";function el({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}el.displayName="MessageCircle02Icon";function _u({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}_u.displayName="MinusIcon";function vm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}vm.displayName="Moon01Icon";function ym({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ym.displayName="Pin01Icon";function Cu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cu.displayName="ReceiptCheckIcon";function xm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}xm.displayName="Trash01Icon";function si({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}si.displayName="XCloseIcon";const w6="_base_i93xz_11",b6="_icon_i93xz_45",k6="_sendReady_i93xz_65",_6="_sendStreaming_i93xz_66",C6="_sendDisabled_i93xz_67",j6="_sendError_i93xz_68",S6="_attachIdle_i93xz_131",N6="_attachDisabled_i93xz_145",M6="_attachError_i93xz_152",R6="_voiceIdle_i93xz_165",L6="_voiceRecording_i93xz_179",$6="_voiceDisabled_i93xz_189",T6="_iconStack_i93xz_200",A6="_iconLayer_i93xz_209",lt={base:w6,icon:b6,sendReady:k6,sendStreaming:_6,sendDisabled:C6,sendError:j6,attachIdle:S6,attachDisabled:N6,attachError:M6,voiceIdle:R6,voiceRecording:L6,voiceDisabled:$6,iconStack:T6,iconLayer:A6},I6={hidden:void 0,ready:lt.sendReady,"disabled-invalid":lt.sendDisabled,streaming:lt.sendStreaming,error:lt.sendError},E6=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},ea=m.forwardRef(({state:t,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=m.useRef(null),k=m.useRef(null),A=m.useCallback(C=>{k.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]),_=m.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const C=k.current;C&&(C.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[t,a,i,s]);if(t==="hidden")return null;const j=!h&&(t==="ready"||t==="streaming"||t==="error"),R=E6(t,l,d),T=t==="disabled-invalid"?l??"Cannot send":t==="error"?d??"Send failed — click to retry":null,S=r.jsx("button",{ref:A,type:"button","data-composer-action":"send","data-state":t,className:re(lt.base,I6[t],f),style:g,"aria-label":R,disabled:!j,onClick:_,...x,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(fl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(nm,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(gi,{size:"100%",strokeWidth:2})})]})});return T?r.jsx(Fn,{content:T,placement:"top",children:S}):S});ea.displayName="ComposerSendButton";const P6={idle:lt.attachIdle,disabled:lt.attachDisabled,error:lt.attachError},z6=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},wm=m.forwardRef(({state:t,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=m.useRef(null),k=m.useCallback(()=>{var S;(t==="idle"||t==="error")&&((S=w.current)==null||S.click())},[t]),A=m.useCallback(S=>{const C=S.target.files;C&&C.length>0&&(a==null||a(C)),S.target.value=""},[a]),_=!h&&t!=="disabled",j=z6(t,l,d),R=t==="disabled"?l??"Attachments unavailable":t==="error"?d??"Attachment failed":null,T=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":t,className:re(lt.base,P6[t],f),style:g,"aria-label":j,disabled:!_,onClick:k,...x,children:[r.jsx("span",{className:lt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(ao,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:A,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return R?r.jsx(Fn,{content:R,placement:"top",children:T}):T});wm.displayName="ComposerAttachment";const O6={idle:lt.voiceIdle,recording:lt.voiceRecording,disabled:lt.voiceDisabled},D6=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},bm=m.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},g)=>{const x=m.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),y=!l&&t!=="disabled",w=D6(t,s),k=t==="disabled"?s??"Voice unavailable":null,A=r.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":t,className:re(lt.base,O6[t],d),style:h,"aria-label":w,"aria-pressed":t==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(xu,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(rm,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(Fn,{content:k,placement:"top",children:A}):A});bm.displayName="ComposerVoiceButton";const F6=m.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(B0,{className:y,style:{flex:"0 0 auto"},children:r.jsx(W0,{ref:w,value:t,onChange:a,onSubmit:i,placeholder:s,maxRows:f,radius:g,disabled:d,children:r.jsxs(vu,{size:"md",disabled:d,children:[x,h&&r.jsx(bm,{state:d?"disabled":"idle"}),r.jsx(ea,{state:k,onSend:i,onStop:i})]})})})});F6.displayName="UltronCommandBar";const B6=m.forwardRef(({stages:t,state:a="live",duration:i,...s},l)=>r.jsx(pu,{ref:l,state:a,duration:i,...s,children:t.map((d,h)=>r.jsx(dl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));B6.displayName="UltronThreadTimeline";const W6="_root_ghwhu_10",H6="_badge_ghwhu_27",U6="_badgeIcon_ghwhu_38",q6="_green_ghwhu_59",V6="_yellow_ghwhu_60",G6="_matcha_ghwhu_61",Y6="_purple_ghwhu_62",Q6="_blue_ghwhu_63",K6="_azure_ghwhu_64",Z6="_red_ghwhu_65",X6="_orange_ghwhu_66",J6="_pink_ghwhu_67",e9="_slate_ghwhu_68",t9="_content_ghwhu_73",n9="_label_ghwhu_83",r9="_valueRow_ghwhu_97",o9="_change_ghwhu_106",a9="_value_ghwhu_97",Kn={root:W6,badge:H6,badgeIcon:U6,green:q6,yellow:V6,matcha:G6,purple:Y6,blue:Q6,azure:K6,red:Z6,orange:X6,pink:J6,slate:e9,content:t9,label:n9,valueRow:r9,change:o9,value:a9},i9=m.forwardRef(({color:t="slate",icon:a,label:i,value:s,change:l,className:d,...h},f)=>r.jsxs("div",{ref:f,className:re(Kn.root,d),...h,children:[r.jsx("div",{className:re(Kn.badge,Kn[t]),"aria-hidden":"true",children:r.jsx("span",{className:Kn.badgeIcon,children:a})}),r.jsxs("div",{className:Kn.content,children:[r.jsx("span",{className:Kn.label,children:i}),r.jsxs("div",{className:Kn.valueRow,children:[r.jsx("span",{className:Kn.value,children:s}),l!=null&&r.jsx("span",{className:Kn.change,children:l})]})]})]}));i9.displayName="DataCard";const s9="_root_d0j6n_7",l9="_icon_d0j6n_21",c9="_text_d0j6n_33",d9="_positive_d0j6n_41",u9="_warning_d0j6n_45",h9="_negative_d0j6n_49",As={root:s9,icon:l9,text:c9,positive:d9,warning:u9,negative:h9};function p9(t){return t==="up"?"positive":"negative"}const f9=m.forwardRef((t,a)=>{const{mode:i,value:s,className:l,...d}=t,h=i==="trend"?t.severity??p9(t.trend):t.severity,{severity:f,...g}=d,x=i==="trend"?(({trend:w,severity:k,...A})=>A)(g):g,y=i==="trend"?t.trend==="up"?fl:am:null;return r.jsxs("span",{ref:a,className:re(As.root,As[h],l),...x,children:[r.jsx("span",{className:As.text,children:s}),y&&r.jsx("span",{className:As.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});f9.displayName="ValueChangeLabel";const m9="_root_1lq10_1",g9="_horizontal_1lq10_9",v9="_vertical_1lq10_15",y9="_solid_1lq10_32",x9="_dashed_1lq10_36",Is={root:m9,horizontal:g9,vertical:v9,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:y9,dashed:x9},w9=m.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:re(Is.root,Is[`thickness-${t}`],Is[a],Is[i],s),...l}));w9.displayName="Divider";const b9="_overlay_vxgy2_9",k9="_dialogOverlayIn_vxgy2_1",_9="_dialogOverlayOut_vxgy2_1",C9="_dialog_vxgy2_38",j9="_dialogIn_vxgy2_1",S9="_dialogOut_vxgy2_1",N9="_sm_vxgy2_88",M9="_md_vxgy2_89",R9="_lg_vxgy2_90",L9="_header_vxgy2_95",$9="_title_vxgy2_107",T9="_closeBtn_vxgy2_120",A9="_content_vxgy2_152",I9="_footer_vxgy2_163",Nr={overlay:b9,dialogOverlayIn:k9,dialogOverlayOut:_9,dialog:C9,dialogIn:j9,dialogOut:S9,sm:N9,md:M9,lg:R9,header:L9,title:$9,closeBtn:T9,content:A9,footer:I9},E9=m.forwardRef(({onClose:t,children:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:re(Nr.header,i),...s,children:[r.jsx("span",{className:Nr.title,children:a}),t&&r.jsx("button",{type:"button",className:Nr.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(mi,{size:16})})]}));E9.displayName="DialogHeader";const P9=m.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:re(Nr.content,a),...i,children:t}));P9.displayName="DialogContent";const z9=m.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:re(Nr.footer,a),...i,children:t}));z9.displayName="DialogFooter";function O9({open:t,onClose:a,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=m.useRef(null),f=180,[g,x]=m.useState(t);return m.useEffect(()=>{if(t){x(!0);return}const y=setTimeout(()=>x(!1),f);return()=>clearTimeout(y)},[t]),m.useEffect(()=>{if(!t)return;const y=w=>{w.key==="Escape"&&a()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[t,a]),m.useEffect(()=>{if(!t)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[t]),g?fi.createPortal(r.jsx("div",{className:Nr.overlay,"data-state":t?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&a()},children:r.jsx("div",{ref:h,className:re(Nr.dialog,Nr[i]),"data-state":t?"open":"closed",children:s})}),document.body):null}const D9="_root_1dntq_7",F9="_badge_1dntq_57",B9="_badgeIconSlot_1dntq_74",W9="_content_1dntq_82",H9="_text_1dntq_90",U9="_title_1dntq_99",q9="_description_1dntq_120",V9="_actions_1dntq_131",G9="_dot_1dntq_137",Y9="_actionLink_1dntq_144",Q9="_primaryAction_1dntq_162",K9="_trailing_1dntq_170",$t={root:D9,badge:F9,badgeIconSlot:B9,content:W9,text:H9,title:U9,description:q9,actions:V9,dot:G9,actionLink:Y9,primaryAction:Q9,trailing:K9},Z9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),X9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),J9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Xp=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),ew={error:Z9,warning:J9,success:X9,info:Xp,feature:Xp},km=m.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const A=ew[t],_=i==="lg",j=x?r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(mi,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:re($t.root,y),"data-status":t,"data-variant":a,"data-size":i,...w,children:[r.jsx("span",{className:$t.badge,"aria-hidden":"true",children:r.jsx("span",{className:re("alloy-icon-slot",$t.badgeIconSlot),children:r.jsx(A,{})})}),_?r.jsxs("div",{className:$t.content,children:[r.jsxs("div",{className:$t.text,children:[r.jsx("p",{className:$t.title,children:s}),l&&r.jsx("p",{className:$t.description,children:l})]}),(d||f)&&r.jsxs("div",{className:$t.actions,children:[d&&r.jsx("button",{type:"button",className:re($t.actionLink,$t.primaryAction),onClick:h,children:d}),d&&f&&r.jsx("span",{className:$t.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:$t.actionLink,onClick:g,children:f})]})]}):r.jsx("p",{className:$t.title,children:s}),_?j:(d||x)&&r.jsxs("div",{className:$t.trailing,children:[d&&r.jsx("button",{type:"button",className:re($t.actionLink,$t.primaryAction),onClick:h,children:d}),j]})]})});km.displayName="Alert";const tw="_stack_x4xl7_11",nw="_item_x4xl7_28",rw="_itemExiting_x4xl7_33",Vd={stack:tw,item:nw,itemExiting:rw},ow=m.createContext(null);function aw({id:t,title:a,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:g,exiting:x,onRemove:y}){const w=m.useCallback(()=>y(t),[t,y]);return r.jsx("div",{className:re(Vd.item,x&&Vd.itemExiting),onAnimationEnd:x?w:void 0,children:r.jsx(km,{status:s,variant:l,size:d,title:a,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function iw({toasts:t,onStartExit:a,onRemove:i}){return m.useEffect(()=>{const s=[];return t.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[t,a]),t.length===0?null:fi.createPortal(r.jsx("div",{className:Vd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(s=>r.jsx(aw,{...s,onRemove:i},s.id))}),document.body)}function sw({children:t}){const[a,i]=m.useState([]),s=m.useRef(0),l=m.useCallback(f=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),g},[]),d=m.useCallback(f=>{i(g=>g.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),h=m.useCallback(f=>{i(g=>g.filter(x=>x.id!==f))},[]);return r.jsxs(ow.Provider,{value:{addToast:l,removeToast:d},children:[t,r.jsx(iw,{toasts:a,onStartExit:d,onRemove:h})]})}const lw="_root_1s0ek_5",cw="_list_1s0ek_11",dw="_item_1s0ek_23",uw="_separator_1s0ek_31",hw="_link_1s0ek_47",pw="_current_1s0ek_68",fw="_iconSlot_1s0ek_76",Pn={root:lw,list:cw,item:dw,separator:uw,link:hw,current:pw,iconSlot:fw},mw=()=>r.jsx("span",{className:Pn.separator,"aria-hidden":"true",children:"/"}),gw=()=>r.jsx("span",{className:Pn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),vw=m.forwardRef(({items:t,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?gw:mw;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:re(Pn.root,i),...s,children:r.jsx("ol",{className:Pn.list,children:t.map((h,f)=>{const g=f===t.length-1,x=!g&&(!!h.href||!!h.onClick);return r.jsxs("li",{className:Pn.item,children:[f>0&&r.jsx(d,{}),x?r.jsxs("a",{href:h.href,onClick:h.onClick,className:Pn.link,"aria-label":h.label,children:[h.icon&&r.jsx("span",{className:re(Pn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]}):r.jsxs("span",{className:re(Pn.link,g&&Pn.current),"aria-current":g?"page":void 0,children:[h.icon&&r.jsx("span",{className:re(Pn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]})]},f)})})})});vw.displayName="Breadcrumb";const yw="_root_139vz_6",xw="_divider_139vz_14",ww="_item_139vz_19",bw="_label_139vz_25",kw="_description_139vz_26",_w="_chevron_139vz_27",Cw="_iconSlot_139vz_28",jw="_hitTarget_139vz_32",Sw="_size_sm_139vz_37",Nw="_size_md_139vz_43",Mw="_size_lg_139vz_49",Rw="_header_139vz_59",Lw="_headerContent_139vz_59",$w="_checkboxWrap_139vz_60",Tw="_labelBlock_139vz_157",Aw="_trailingSlot_139vz_60",Iw="_body_139vz_199",Ew="_bodyInner_139vz_209",Pw="_bodyContent_139vz_214",kt={root:yw,divider:xw,item:ww,label:bw,description:kw,chevron:_w,iconSlot:Cw,hitTarget:jw,size_sm:Sw,size_md:Nw,size_lg:Mw,header:Rw,headerContent:Lw,checkboxWrap:$w,labelBlock:Tw,trailingSlot:Aw,body:Iw,bodyInner:Ew,bodyContent:Pw},zw="_root_17t97_6",Ow="_disabled_17t97_12",Dw="_sm_17t97_18",Fw="_md_17t97_26",Bw="_lg_17t97_34",Ww="_controlWrap_17t97_43",Hw="_input_17t97_52",Uw="_box_17t97_67",qw="_boxChecked_17t97_96",Vw="_boxError_17t97_106",Gw="_labelWrap_17t97_116",Yw="_label_17t97_116",Qw="_error_17t97_138",Kw="_required_17t97_140",Zw="_description_17t97_145",en={root:zw,disabled:Ow,sm:Dw,md:Fw,lg:Bw,controlWrap:Ww,input:Hw,box:Uw,boxChecked:qw,boxError:Vw,labelWrap:Gw,label:Yw,error:Qw,required:Kw,description:Zw},_m=m.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:g,id:x,name:y,value:w,required:k,className:A},_)=>{const j=m.useId(),R=x??j,T=m.useRef(null);m.useEffect(()=>{T.current&&(T.current.indeterminate=i)},[i]);const S=t!==void 0,[C,z]=m.useState(a),L=S?t:C,M=I=>{S||z(I.target.checked),s==null||s(I.target.checked)},N=L||i;return r.jsxs("div",{className:re(en.root,en[h],l&&en.disabled,d&&en.error,A),children:[r.jsxs("div",{className:en.controlWrap,children:[r.jsx("input",{ref:I=>{T.current=I,typeof _=="function"?_(I):_&&(_.current=I)},type:"checkbox",id:R,name:y,value:w,checked:L,disabled:l,required:k,"aria-invalid":d||void 0,onChange:M,className:en.input}),r.jsx("span",{className:re(en.box,N&&en.boxChecked,d&&en.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):L?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||g)&&r.jsxs("div",{className:en.labelWrap,children:[f&&r.jsxs("label",{htmlFor:R,className:en.label,children:[f,k&&r.jsx("span",{className:en.required,"aria-hidden":"true",children:" *"})]}),g&&r.jsx("span",{className:en.description,children:g})]})]})});_m.displayName="Checkbox";const Cm=m.createContext(null),Gd=m.createContext(0),jm=m.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:g,children:x,...y},w)=>{const k=m.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[A,_]=m.useState(k),j=i!==void 0,R=m.useMemo(()=>j?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:A,[j,i,A]),T=m.useCallback(z=>R.has(z),[R]),S=m.useCallback(z=>{const L=new Set(R);t==="single"?L.has(z)?a&&L.delete(z):(L.clear(),L.add(z)):L.has(z)?L.delete(z):L.add(z),j||_(L),l&&l(t==="single"?L.values().next().value??"":Array.from(L))},[R,t,a,j,l]),C=m.useMemo(()=>({type:t,collapsible:a,size:h,disabled:f,isExpanded:T,toggle:S}),[t,a,h,f,T,S]);return r.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:re(kt.root,d&&kt.divider,g),...y,children:r.jsx(Cm.Provider,{value:C,children:r.jsx(Gd.Provider,{value:0,children:x})})})});jm.displayName="Accordion";function Es(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const s=t.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(t);let h;switch(a){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Sm=m.forwardRef(({value:t,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:A=!1,onExpandedChange:_,disabled:j=!1,size:R,className:T,children:S,...C},z)=>{const L=m.useContext(Cm),M=m.useContext(Gd),N=L!==null,I=R??(L==null?void 0:L.size)??"md",D=j||(L==null?void 0:L.disabled)||!1,[G,F]=m.useState(A);let H;N?H=t!==void 0?L.isExpanded(t):!1:k!==void 0?H=k:H=G;const Y=m.useCallback(()=>{if(D)return;if(N){if(t===void 0)return;const $=L.isExpanded(t);L.toggle(t);const q=L.type==="single"&&!L.collapsible&&$?!0:!$;_==null||_(q);return}const E=!H;k===void 0&&F(E),_==null||_(E)},[D,N,L,t,H,k,_]),Z=m.useCallback(E=>w==null?void 0:w(E),[w]),se=m.useCallback(E=>{if(E.key==="Enter"||E.key===" "){E.preventDefault(),Y();return}if(N)switch(E.key){case"ArrowDown":E.preventDefault(),Es(E.currentTarget,"next");break;case"ArrowUp":E.preventDefault(),Es(E.currentTarget,"prev");break;case"Home":E.preventDefault(),Es(E.currentTarget,"first");break;case"End":E.preventDefault(),Es(E.currentTarget,"last");break}},[Y,N]),ne=m.useId(),oe=`${ne}-header`,J=`${ne}-body`,U=I==="sm"?16:I==="md"?18:20,V=l??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:kt.checkboxWrap,children:r.jsx(_m,{size:I,checked:g,defaultChecked:x,indeterminate:y,disabled:D,onChange:Z})}),s&&r.jsx("span",{className:kt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:z,"data-accordion-item":"","data-expanded":H||void 0,"data-disabled":D||void 0,"data-size":I,"data-depth":M,className:re(kt.item,kt[`size_${I}`],T),style:{"--accordion-depth":M},...C,children:[r.jsxs("div",{className:kt.header,children:[r.jsx("button",{type:"button",id:oe,"data-accordion-header-button":"","data-accordion-depth":M,className:kt.hitTarget,"aria-expanded":H,"aria-controls":J,"aria-disabled":D||void 0,disabled:D,onClick:Y,onKeyDown:se}),r.jsxs("div",{className:kt.headerContent,children:[h==="leading"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(an,{size:U,color:"currentColor"})}),V,r.jsxs("div",{className:kt.labelBlock,children:[r.jsx("span",{className:kt.label,children:a}),i&&r.jsx("span",{className:kt.description,children:i})]}),d&&r.jsx("div",{className:kt.trailingSlot,children:d}),h==="trailing"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(an,{size:U,color:"currentColor"})})]})]}),r.jsx("div",{id:J,role:"region","aria-labelledby":oe,className:kt.body,"aria-hidden":!H,children:r.jsx("div",{className:kt.bodyInner,children:r.jsx("div",{className:kt.bodyContent,children:r.jsx(Gd.Provider,{value:M+1,children:S})})})})]})});Sm.displayName="AccordionItem";const Xw="_root_1vgip_7",Jw="_fullWidth_1vgip_12",e8="_panel_1vgip_19",t8="_panelInner_1vgip_73",n8="_item_1vgip_81",r8="_groupHeading_1vgip_87",o8="_groupHeadingSm_1vgip_96",a8="_groupHeadingLabel_1vgip_100",i8="_groupHeadingCollapsible_1vgip_112",s8="_groupChevron_1vgip_125",l8="_groupDivider_1vgip_139",Cn={root:Xw,fullWidth:Jw,panel:e8,panelInner:t8,item:n8,groupHeading:r8,groupHeadingSm:o8,groupHeadingLabel:a8,groupHeadingCollapsible:i8,groupChevron:s8,groupDivider:l8};function c8({group:t,size:a,closeOnSelect:i,onClose:s}){const[l,d]=m.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:re(Cn.groupHeading,a==="sm"&&Cn.groupHeadingSm,t.collapsible&&Cn.groupHeadingCollapsible),onClick:t.collapsible?()=>d(h=>!h):void 0,"aria-expanded":t.collapsible?l:void 0,children:[r.jsx("span",{className:Cn.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:Cn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(an,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((h,f)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return r.jsx(on,{role:"menuitem",size:a,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Cn.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const ju=m.forwardRef(({trigger:t,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},A)=>{const[_,j]=m.useState(h),R=m.useRef(null),T=d!==void 0?d:_,S=m.useCallback(z=>{R.current=z,A&&(typeof A=="function"?A(z):A.current=z)},[A]),C=m.useCallback(z=>{d===void 0&&j(z),f==null||f(z)},[d,f]);return m.useEffect(()=>{if(!T)return;const z=L=>{var M;(M=R.current)!=null&&M.contains(L.target)||C(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[T,C]),m.useEffect(()=>{if(!T)return;const z=L=>{L.key==="Escape"&&C(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[T,C]),r.jsxs("div",{ref:S,className:re(Cn.root,y&&Cn.fullWidth,w),...k,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":T,tabIndex:g?-1:0,onClick:g?void 0:()=>C(!T),onKeyDown:g?void 0:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),C(!T))},children:t}),r.jsx("div",{className:Cn.panel,"data-open":T||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:Cn.panelInner,children:a.map((z,L)=>r.jsxs("div",{children:[L>0&&r.jsx("div",{className:Cn.groupDivider,"aria-hidden":"true"}),r.jsx(c8,{group:z,size:i,closeOnSelect:x,onClose:()=>C(!1)})]},z.id))})})]})});ju.displayName="DropdownMenu";const d8="_hiddenInput_7w2s5_8",u8="_area_7w2s5_19",h8="_uploadIcon_7w2s5_53",p8="_textBlock_7w2s5_59",f8="_title_7w2s5_67",m8="_description_7w2s5_76",g8="_fileRow_7w2s5_88",v8="_fileIcon_7w2s5_96",y8="_fileName_7w2s5_101",x8="_successIcon_7w2s5_115",w8="_removeBtn_7w2s5_121",b8="_progressWrap_7w2s5_145",k8="_progressBar_7w2s5_153",_8="_progressFill_7w2s5_161",C8="_progressLabel_7w2s5_168",j8="_errorRow_7w2s5_178",S8="_errorIcon_7w2s5_186",N8="_errorText_7w2s5_192",M8="_areaMulti_7w2s5_206",R8="_multiDropZone_7w2s5_214",L8="_fileList_7w2s5_244",$8="_fileListItem_7w2s5_254",T8="_inline_7w2s5_267",A8="_inlineIcon_7w2s5_309",I8="_inlineText_7w2s5_330",E8="_inlineProgress_7w2s5_353",P8="_inlineProgressFill_7w2s5_363",Pe={hiddenInput:d8,area:u8,uploadIcon:h8,textBlock:p8,title:f8,description:m8,fileRow:g8,fileIcon:v8,fileName:y8,successIcon:x8,removeBtn:w8,progressWrap:b8,progressBar:k8,progressFill:_8,progressLabel:C8,errorRow:j8,errorIcon:S8,errorText:N8,areaMulti:M8,multiDropZone:R8,fileList:L8,fileListItem:$8,inline:T8,inlineIcon:A8,inlineText:I8,inlineProgress:E8,inlineProgressFill:P8};function xd(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Nm=m.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:A,fieldVariant:_="outlined",disabled:j=!1,className:R,...T},S)=>{const C=m.useRef(null),[z,L]=m.useState(!1),M=!j&&(a||i==="empty"),N=m.useCallback(()=>{var ne;!j&&(a||i==="empty")&&((ne=C.current)==null||ne.click())},[j,a,i]),I=m.useCallback(ne=>{var oe;if(a){const J=ne.target.files?Array.from(ne.target.files):[];J.length&&(w==null||w(J))}else{const J=(oe=ne.target.files)==null?void 0:oe[0];J&&(y==null||y(J))}ne.target.value=""},[a,y,w]),D=m.useCallback(ne=>{ne.preventDefault(),M&&L(!0)},[M]),G=m.useCallback(()=>L(!1),[]),F=m.useCallback(ne=>{var oe;if(ne.preventDefault(),L(!1),!!M)if(a){const J=ne.dataTransfer.files?Array.from(ne.dataTransfer.files):[];J.length&&(w==null||w(J))}else{const J=(oe=ne.dataTransfer.files)==null?void 0:oe[0];J&&(y==null||y(J))}},[M,a,y,w]),H=r.jsx("input",{ref:C,type:"file",className:Pe.hiddenInput,accept:x,multiple:a,disabled:j,"aria-hidden":"true",tabIndex:-1,onChange:I}),Y=l?r.jsxs("div",{className:Pe.fileRow,children:[r.jsx("span",{className:`${Pe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(jr,{size:16})}),r.jsx("span",{className:Pe.fileName,children:l.name}),r.jsx(Sr,{size:"sm",variant:"subtle",children:xd(l)}),i==="complete"&&r.jsx("span",{className:`${Pe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Sn,{size:16})}),r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})})]}):null;if(t==="area"){if(a){const ne=d??[];return r.jsxs("div",{ref:S,className:re(Pe.areaMulti,R),"data-drag-over":z||void 0,"data-disabled":j||void 0,onDragOver:D,onDragLeave:G,onDrop:F,...T,children:[H,r.jsxs("div",{className:Pe.multiDropZone,children:[r.jsx("span",{className:`${Pe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(yd,{size:24})}),r.jsxs("div",{className:Pe.textBlock,children:[r.jsx("p",{className:Pe.title,children:f}),r.jsx("p",{className:Pe.description,children:g})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:N,disabled:j,children:"Browse Files"})]}),ne.length>0&&r.jsx("ul",{className:Pe.fileList,"aria-label":"Selected files",children:ne.map((oe,J)=>r.jsxs("li",{className:Pe.fileListItem,children:[r.jsx("span",{className:`${Pe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(jr,{size:16})}),r.jsx("span",{className:Pe.fileName,children:oe.name}),r.jsx(Sr,{size:"sm",variant:"subtle",children:xd(oe)}),r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:()=>A==null?void 0:A(J),"aria-label":`Remove ${oe.name}`,disabled:j,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})})]},`${oe.name}-${J}`))})]})}return r.jsxs("div",{ref:S,className:re(Pe.area,R),"data-state":i,"data-drag-over":z||void 0,"data-disabled":j||void 0,onDragOver:D,onDragLeave:G,onDrop:F,...T,children:[H,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Pe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(yd,{size:24})}),r.jsxs("div",{className:Pe.textBlock,children:[r.jsx("p",{className:Pe.title,children:f}),r.jsx("p",{className:Pe.description,children:g})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:N,disabled:j,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[Y,r.jsxs("div",{className:Pe.progressWrap,children:[r.jsx("div",{className:Pe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Pe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:Pe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&Y,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Pe.errorRow,children:[r.jsx("span",{className:`${Pe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(qo,{size:20})}),r.jsx("p",{className:Pe.errorText,children:h??"Upload failed. Please try again."})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:N,disabled:j,children:"Try Again"})]})]})}const Z={empty:r.jsx(yd,{size:16}),uploading:r.jsx(jr,{size:16}),complete:r.jsx(Sn,{size:16}),error:r.jsx(qo,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:S,className:re(Pe.inline,R),"data-state":i,"data-field-variant":_,"data-disabled":j||void 0,...T,children:[H,r.jsx("span",{className:`${Pe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:Z}),r.jsxs("span",{className:Pe.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),se&&r.jsx(Sr,{size:"sm",variant:"subtle",children:xd(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})}),i==="empty"&&r.jsx(Re,{variant:"tertiary",size:"xs",onClick:N,disabled:j,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Pe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Pe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Nm.displayName="FileUploader";const z8="_wrapper_127v8_8",O8="_labelRow_127v8_16",D8="_label_127v8_16",F8="_required_127v8_28",B8="_labelIcon_127v8_36",W8="_sm_127v8_46",H8="_md_127v8_47",U8="_lg_127v8_48",q8="_shell_127v8_44",V8="_outlined_127v8_75",G8="_underlined_127v8_102",Y8="_float_127v8_147",Q8="_leadingSlot_127v8_181",K8="_trailingSlot_127v8_193",Z8="_trailingActionWrap_127v8_206",X8="_trailingActionBtn_127v8_213",J8="_successTrailingSlot_127v8_234",e7="_errorTrailingSlot_127v8_239",t7="_control_127v8_251",n7="_selectValue_127v8_297",r7="_selectPlaceholder_127v8_303",o7="_selectChevron_127v8_307",a7="_selectChevronOpen_127v8_312",i7="_textareaShell_127v8_315",s7="_textareaControl_127v8_334",l7="_footer_127v8_351",c7="_footerRow_127v8_363",d7="_footerError_127v8_364",u7="_footerSuccess_127v8_365",h7="_footerIcon_127v8_368",p7="_wrapperHorizontal_127v8_378",f7="_horizontalLabelCol_127v8_384",m7="_horizontalLabelHint_127v8_393",g7="_horizontalControlCol_127v8_402",v7="_msContainer_127v8_416",y7="_msShell_127v8_425",x7="_msOpen_127v8_440",w7="_msDisabled_127v8_447",b7="_msBody_127v8_450",k7="_msPlaceholder_127v8_459",_7="_msChevron_127v8_469",C7="_msChevronOpen_127v8_480",j7="_msPanel_127v8_483",Ne={wrapper:z8,labelRow:O8,label:D8,required:F8,labelIcon:B8,sm:W8,md:H8,lg:U8,shell:q8,outlined:V8,underlined:G8,float:Y8,leadingSlot:Q8,trailingSlot:K8,trailingActionWrap:Z8,trailingActionBtn:X8,successTrailingSlot:J8,errorTrailingSlot:e7,control:t7,selectValue:n7,selectPlaceholder:r7,selectChevron:o7,selectChevronOpen:a7,textareaShell:i7,textareaControl:s7,footer:l7,footerRow:c7,footerError:d7,footerSuccess:u7,footerIcon:h7,wrapperHorizontal:p7,horizontalLabelCol:f7,horizontalLabelHint:m7,horizontalControlCol:g7,msContainer:v7,msShell:y7,msOpen:x7,msDisabled:w7,msBody:b7,msPlaceholder:k7,msChevron:_7,msChevronOpen:C7,msPanel:j7};function ta({label:t,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,A=l?"error":d?"success":"hint",_=k?r.jsxs("p",{className:re(Ne.footer,A==="error"&&Ne.footerError,A==="success"&&Ne.footerSuccess),role:A==="error"?"alert":void 0,"aria-live":A==="error"?"assertive":void 0,children:[A==="hint"&&r.jsx("span",{className:`${Ne.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(qo,{size:12})}),k]}):null,j=t!=null?r.jsxs("div",{className:Ne.labelRow,children:[r.jsx("label",{className:Ne.label,htmlFor:f,children:t}),h&&r.jsx("span",{className:Ne.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ne.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(g==="horizontal"){const R={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:re(Ne.wrapper,Ne.wrapperHorizontal,y),children:[(j||i)&&r.jsxs("div",{className:Ne.horizontalLabelCol,style:R,children:[j,i&&r.jsx("p",{className:Ne.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ne.horizontalControlCol,children:[w,_]})]})}return r.jsxs("div",{className:re(Ne.wrapper,y),children:[j,w,_]})}function yi({variant:t="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const A=a==="sm"?14:a==="lg"?18:16,_=s&&!i&&!f&&!g?r.jsx(Sn,{size:A}):null,j=i&&!f&&!g?r.jsx(qo,{size:A}):null,R=!!h,T=!!(f||g||_||j);return r.jsxs("div",{className:re(Ne.shell,Ne[t],Ne[a],x&&Ne.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":R||void 0,"data-has-trailing":T||void 0,children:[h&&r.jsx("span",{className:re(Ne.leadingSlot,"alloy-icon-slot"),children:h}),k,g?r.jsx("span",{className:Ne.trailingActionWrap,children:g}):f||_||j?r.jsx("span",{className:re(Ne.trailingSlot,"alloy-icon-slot",_&&Ne.successTrailingSlot,j&&Ne.errorTrailingSlot),children:f??_??j}):null]})}const Su=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:A,id:_,disabled:j,readOnly:R,className:T,...S},C)=>{const z=m.useId(),L=_??z;return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:L,layout:w,labelWidth:k,labelDescription:A,className:T,children:r.jsx(yi,{variant:h,size:f,error:!!s,success:!!l,disabled:j,readOnly:R,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:C,id:L,type:g,disabled:j,readOnly:R,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${L}-footer`:void 0,className:re(Ne.control),...S})})})});Su.displayName="TextField";const S7=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:A,disabled:_,readOnly:j,className:R,...T},S)=>{const C=m.useId(),z=A??C;return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:z,layout:y,labelWidth:w,labelDescription:k,className:R,children:r.jsx(yi,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:j,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:S,id:z,disabled:_,readOnly:j,"aria-invalid":s?!0:void 0,className:re(Ne.control,Ne.textareaControl),...T})})})});S7.displayName="TextArea";const N7={sm:"sm",md:"md",lg:"lg"},Mm=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:A,defaultValue:_="",onChange:j,placeholder:R="Select an option…",disabled:T,readOnly:S,id:C,className:z},L)=>{var U;const M=m.useId(),N=C??M,I=A!==void 0,[D,G]=m.useState(_),F=I?A:D,H=m.useCallback(V=>{I||G(V),j==null||j(V)},[I,j]),[Y,Z]=m.useState(!1),se=(U=k.find(V=>V.value===F))==null?void 0:U.label,ne=f==="sm"?14:f==="lg"?18:16,oe=N7[f],J=r.jsx(yi,{variant:h,size:f,error:!!s,success:!!l,disabled:T,readOnly:S,focused:Y,leadingIcon:g,trailingIcon:r.jsx("span",{className:re(Ne.selectChevron,Y&&Ne.selectChevronOpen),"aria-hidden":"true",children:r.jsx(er,{size:ne})}),children:r.jsx("span",{className:re(Ne.control,Ne.selectValue,!se&&Ne.selectPlaceholder),children:se??R})});return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:N,layout:x,labelWidth:y,labelDescription:w,className:z,children:r.jsx(ju,{ref:L,id:N,fullWidth:!0,trigger:J,groups:[{id:"options",options:k.map(V=>({id:V.value,label:V.label,disabled:V.disabled,selected:V.value===F,onClick:()=>H(V.value)}))}],size:oe,width:"100%",placement:"bottom-start",open:Y,onOpenChange:Z,disabled:T||S})})});Mm.displayName="SelectField";const M7=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:A,readOnly:_,className:j,...R},T)=>{const S=m.useId(),C=k??S,[z,L]=m.useState(!1),M=f==="sm"?14:f==="lg"?18:16;return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:C,layout:x,labelWidth:y,labelDescription:w,className:j,children:r.jsx(yi,{variant:h,size:f,error:!!s,success:!!l,disabled:A,readOnly:_,leadingIcon:g,trailingAction:r.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:()=>L(N=>!N),tabIndex:A?-1:0,"aria-label":z?"Hide password":"Show password","aria-pressed":z,children:z?r.jsx(tm,{size:M}):r.jsx(fu,{size:M})}),children:r.jsx("input",{ref:T,id:C,type:z?"text":"password",disabled:A,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:re(Ne.control),...R})})})});M7.displayName="PasswordField";const Rm=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:A,value:_,defaultValue:j,disabled:R,readOnly:T,className:S,...C},z)=>{const L=m.useId(),M=A??L,N=f==="sm"?14:f==="lg"?18:16,I=_!==void 0?String(_).length>0:void 0,D=m.useCallback(G=>{x==null||x(G)},[x]);return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:M,layout:y,labelWidth:w,labelDescription:k,className:S,children:r.jsx(yi,{variant:h,size:f,error:!!s,success:!!l,disabled:R,readOnly:T,leadingIcon:r.jsx(yu,{size:N}),trailingAction:I?r.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:R?-1:0,"aria-label":"Clear search",children:r.jsx(mi,{size:N})}):void 0,children:r.jsx("input",{ref:z,id:M,type:"search",value:_,defaultValue:j,disabled:R,readOnly:T,"aria-invalid":s?!0:void 0,onChange:D,className:re(Ne.control),...C})})})});Rm.displayName="SearchField";const Lm=m.forwardRef((t,a)=>r.jsx(Su,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));Lm.displayName="EmailField";const $m=m.forwardRef((t,a)=>r.jsx(Su,{ref:a,type:"number",inputMode:"numeric",...t}));$m.displayName="NumberField";const R7={sm:"sm",md:"sm",lg:"md"},L7={sm:"sm",md:"md",lg:"lg"},$7=m.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:A=[],onChange:_,placeholder:j="Select options…",disabled:R,readOnly:T,id:S,className:C},z)=>{const L=m.useId(),M=S??L,N=`${M}-list`,I=m.useRef(null),D=k!==void 0,[G,F]=m.useState(A),H=D?k:G,Y=m.useCallback($=>{D||F($),_==null||_($)},[D,_]),[Z,se]=m.useState(!1);m.useEffect(()=>{if(!Z)return;const $=K=>{I.current&&!I.current.contains(K.target)&&se(!1)},q=K=>{K.key==="Escape"&&se(!1)};return document.addEventListener("mousedown",$),document.addEventListener("keydown",q),()=>{document.removeEventListener("mousedown",$),document.removeEventListener("keydown",q)}},[Z]);const ne=$=>{if(R||T)return;const q=H.includes($)?H.filter(K=>K!==$):[...H,$];Y(q)},oe=$=>{R||T||(($.key==="Enter"||$.key===" ")&&($.preventDefault(),se(q=>!q)),$.key==="Backspace"&&H.length>0&&!Z&&Y(H.slice(0,-1)))},J=f==="sm"?14:f==="lg"?18:16,U=R7[f],V=L7[f],E=Object.fromEntries(w.map($=>[$.value,$.label]));return r.jsx(ta,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:M,layout:g,labelWidth:x,labelDescription:y,className:C,children:r.jsxs("div",{ref:I,className:Ne.msContainer,children:[r.jsxs("div",{ref:z,id:M,role:"combobox","aria-haspopup":"listbox","aria-expanded":Z,"aria-controls":N,"aria-disabled":R||void 0,tabIndex:R?-1:0,className:re(Ne.msShell,Ne[h],Ne[f],Z&&Ne.msOpen,R&&Ne.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":R||void 0,onClick:()=>{!R&&!T&&se($=>!$)},onKeyDown:oe,children:[r.jsx("div",{className:Ne.msBody,children:H.length===0?r.jsx("span",{className:Ne.msPlaceholder,children:j}):H.map($=>r.jsx(Sr,{size:U,variant:"subtle",dismissible:!R&&!T,onDismiss:()=>Y(H.filter(q=>q!==$)),children:E[$]??$},$))}),r.jsx("span",{className:re(Ne.msChevron,"alloy-icon-slot",Z&&Ne.msChevronOpen),children:r.jsx(er,{size:J})})]}),Z&&r.jsx("div",{id:N,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:Ne.msPanel,children:w.map($=>{const q=H.includes($.value);return r.jsx(on,{label:$.label,size:V,trailingAction:"checkbox",checked:q,disabled:$.disabled,role:"option","aria-selected":q,onMouseDown:K=>{K.preventDefault()},onCheckedChange:()=>{$.disabled||ne($.value)}},$.value)})})]})})});$7.displayName="MultiSelectField";const T7="_root_1249j_6",A7="_pageControls_1249j_14",I7="_pageBtn_1249j_21",E7="_ellipsis_1249j_36",P7="_rowsGroup_1249j_51",z7="_rowsSelect_1249j_58",O7="_countText_1249j_64",D7="_groupLabel_1249j_74",F7="_goToGroup_1249j_84",B7="_goToInput_1249j_91",kn={root:T7,pageControls:A7,pageBtn:I7,ellipsis:E7,rowsGroup:P7,rowsSelect:z7,countText:O7,groupLabel:D7,goToGroup:F7,goToInput:B7};function W7(t,a,i){if(a<=1)return[1];const s=Math.max(2,t-i),l=Math.min(a-1,t+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const H7=m.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...A},_)=>{const[j,R]=m.useState(""),T=y,S=y,C=y==="sm"?14:16,z=W7(t,a,x),L=m.useCallback(I=>{const D=Math.min(Math.max(1,I),a);D!==t&&i(D)},[t,a,i]),M=m.useCallback(I=>{if(I.key==="Enter"){const D=parseInt(j,10);isNaN(D)||L(D),R("")}},[j,L]),N=g!=null&&l!=null?`${(t-1)*l+1}–${Math.min(t*l,g)} of ${g}`:null;return r.jsxs("nav",{ref:_,"aria-label":"Pagination",className:re(kn.root,k),"data-size":y,...A,children:[s&&r.jsxs("div",{className:kn.rowsGroup,children:[r.jsx("span",{className:kn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:kn.rowsSelect,children:r.jsx(Mm,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:I=>h==null?void 0:h(Number(I.target.value)),children:d.map(I=>r.jsx("option",{value:I,children:I},I))})})]}),N&&r.jsx("span",{className:kn.countText,"aria-live":"polite",children:N}),r.jsxs("div",{className:kn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Re,{variant:"ghost",size:T,iconOnly:!0,"aria-label":"Previous page",disabled:w||t<=1,onClick:()=>L(t-1),children:r.jsx(em,{size:C})}),z.map((I,D)=>I==="ellipsis"?r.jsx("span",{className:kn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${D}`):r.jsx(Re,{variant:I===t?"secondary":"ghost",size:T,"aria-label":`Page ${I}`,"aria-current":I===t?"page":void 0,disabled:w,onClick:()=>L(I),className:kn.pageBtn,children:I},I)),r.jsx(Re,{variant:"ghost",size:T,iconOnly:!0,"aria-label":"Next page",disabled:w||t>=a,onClick:()=>L(t+1),children:r.jsx(an,{size:C})})]}),f&&r.jsxs("div",{className:kn.goToGroup,children:[r.jsx("span",{className:kn.groupLabel,children:"Go to"}),r.jsx("div",{className:kn.goToInput,children:r.jsx($m,{size:S,value:j,placeholder:String(t),min:1,max:a,disabled:w,"aria-label":"Go to page number",onChange:I=>R(I.target.value),onKeyDown:M})})]})]})});H7.displayName="Pagination";const U7="_root_1vx33_6",q7="_fullWidth_1vx33_18",V7="_item_1vx33_23",G7="_indicator_1vx33_28",Y7="_sm_1vx33_46",Q7="_md_1vx33_54",K7="_lg_1vx33_62",Z7="_itemSelected_1vx33_109",X7="_itemIcon_1vx33_115",J7="_itemLabel_1vx33_127",_r={root:U7,fullWidth:q7,item:V7,indicator:G7,sm:Y7,md:Q7,lg:K7,itemSelected:Z7,itemIcon:X7,itemLabel:J7},Tm=m.createContext(null);function eb(t){const a=m.useContext(Tm);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const Am=m.forwardRef(({value:t,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:g,onChange:x,disabled:y,name:w}=eb("SegmentedControl.Item"),k=g===t,A=y||!!l;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:A,className:re(_r.item,k&&_r.itemSelected,i),onClick:_=>{A||x(t),d==null||d(_)},...h,children:[a&&r.jsx("span",{className:re(_r.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:_r.itemLabel,children:s})]})});Am.displayName="SegmentedControl.Item";const Im=m.forwardRef(({value:t,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...g},x)=>{const[y,w]=m.useState(a),k=t!==void 0,A=k?t:y,_=m.useId(),j=m.useRef(null);m.useLayoutEffect(()=>{const T=j.current;if(!T)return;const S=T.querySelector('[aria-checked="true"]');S&&(T.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),T.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[A,s]);const R=T=>{k||w(T),i==null||i(T)};return r.jsx(Tm.Provider,{value:{value:A,onChange:R,disabled:l,name:_},children:r.jsxs("div",{ref:T=>{j.current=T,typeof x=="function"?x(T):x&&(x.current=T)},role:"radiogroup",className:re(_r.root,_r[s],d&&_r.fullWidth,h),...g,children:[r.jsx("span",{className:_r.indicator,"aria-hidden":"true"}),f]})})});Im.displayName="SegmentedControl";Object.assign(Im,{Item:Am});const tb="_root_fkv0x_6",nb="_sm_fkv0x_26",rb="_md_fkv0x_33",ob="_lg_fkv0x_40",ab="_dot_fkv0x_49",ib="_success_fkv0x_58",sb="_warning_fkv0x_65",lb="_error_fkv0x_72",cb="_info_fkv0x_79",db="_neutral_fkv0x_86",ub="_pending_fkv0x_93",Ps={root:tb,sm:nb,md:rb,lg:ob,dot:ab,success:ib,warning:sb,error:lb,info:cb,neutral:db,pending:ub},li=m.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},h)=>r.jsxs("span",{ref:h,className:re(Ps.root,Ps[a],Ps[t],s),...d,children:[i&&r.jsx("span",{className:Ps.dot,"aria-hidden":"true"}),l]}));li.displayName="StatusTag";const hb="_root_1m8t5_6",pb="_underline_1m8t5_15",fb="_background_1m8t5_21",mb="_underlineIndicator_1m8t5_26",gb="_md_1m8t5_43",vb="_lg_1m8t5_44",yb="_tab_1m8t5_42",xb="_tabSelected_1m8t5_77",wb="_tabIcon_1m8t5_99",bb="_tabLabel_1m8t5_111",kb="_tabBadge_1m8t5_116",_b="_tabLabelEditable_1m8t5_123",Cb="_tabLabelInput_1m8t5_128",jb="_addTab_1m8t5_147",Sb="_addTabIcon_1m8t5_160",Yt={root:hb,underline:pb,background:fb,underlineIndicator:mb,md:gb,lg:vb,tab:yb,tabSelected:xb,tabIcon:wb,tabLabel:bb,tabBadge:kb,tabLabelEditable:_b,tabLabelInput:Cb,addTab:jb,addTabIcon:Sb},Em=m.createContext(null);function Pm(t){const a=m.useContext(Em);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const zm=m.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:g,children:x,...y},w)=>{const{value:k,onChange:A,disabled:_,name:j}=Pm("Tabs.Tab"),R=k===t,T=_||!!s,S=typeof x=="string"?x:"",[C,z]=m.useState(d&&l),[L,M]=m.useState(S),N=m.useRef(null);m.useEffect(()=>{if(C){const H=N.current;H&&(H.focus(),H.select())}},[C]),m.useEffect(()=>{d&&l&&!C&&(M(typeof x=="string"?x:""),z(!0))},[d,l]);const I=()=>{const H=L.trim();H&&H!==S&&(h==null||h(H)),z(!1)},D=()=>{M(S),z(!1)},G=H=>{!l||T||(H.stopPropagation(),M(S),z(!0))},F=H=>{H.key==="Enter"?(H.preventDefault(),I()):H.key==="Escape"&&(H.preventDefault(),D())};return r.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":R,name:j,disabled:T,className:re(Yt.tab,R&&Yt.tabSelected,g),onClick:H=>{C||(T||A(t),f==null||f(H))},...y,children:[a&&r.jsx("span",{className:re(Yt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),C?r.jsx("input",{ref:N,type:"text",value:L,onChange:H=>M(H.target.value),onKeyDown:F,onBlur:I,onClick:H=>H.stopPropagation(),className:Yt.tabLabelInput,"aria-label":"Tab name",size:Math.max(L.length,1)}):x!==void 0&&r.jsx("span",{className:re(Yt.tabLabel,l&&Yt.tabLabelEditable),onDoubleClick:G,children:x}),i&&!C&&r.jsx("span",{className:Yt.tabBadge,children:i})]})});zm.displayName="Tabs.Tab";const Nb=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Om=m.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Pm("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:re(Yt.tab,Yt.addTab,t),onClick:a,...s,children:r.jsx("span",{className:re(Yt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(Nb,{})})})});Om.displayName="Tabs.AddTab";const Dm=m.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...g},x)=>{const[y,w]=m.useState(s),k=i!==void 0,A=k?i:y,_=m.useId(),j=m.useRef(null);m.useLayoutEffect(()=>{const T=j.current;if(!T||t!=="underline")return;const S=T.querySelector('[aria-selected="true"]');S&&(T.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),T.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[A,t]);const R=T=>{k||w(T),l==null||l(T)};return r.jsx(Em.Provider,{value:{value:A,onChange:R,disabled:d,variant:t,size:a,name:_},children:r.jsxs("div",{ref:T=>{j.current=T,typeof x=="function"?x(T):x&&(x.current=T)},role:"tablist",className:re(Yt.root,Yt[t],Yt[a],h),...g,children:[t==="underline"&&r.jsx("span",{className:Yt.underlineIndicator,"aria-hidden":"true"}),f]})})});Dm.displayName="Tabs";Object.assign(Dm,{Tab:zm,AddTab:Om});const Mb="_selectedBorder_1ypeg_7",Rb="_selectedFill_1ypeg_12",Jp={selectedBorder:Mb,selectedFill:Rb},Lb=m.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const g=y=>{s==null||s(!t),l==null||l(y)},x=t?i==="fill"?Jp.selectedFill:Jp.selectedBorder:void 0;return r.jsx(Re,{ref:f,variant:a,"aria-pressed":t,className:re(x,d),onClick:g,...h})});Lb.displayName="ToggleButton";const $b="_root_mcb75_6",Tb="_disabled_mcb75_13",Ab="_sm_mcb75_20",Ib="_md_mcb75_31",Eb="_lg_mcb75_42",Pb="_track_mcb75_54",zb="_trackChecked_mcb75_90",Ob="_thumb_mcb75_100",Db="_labelWrap_mcb75_117",Fb="_label_mcb75_117",Bb="_description_mcb75_139",Zn={root:$b,disabled:Tb,sm:Ab,md:Ib,lg:Eb,track:Pb,trackChecked:zb,thumb:Ob,labelWrap:Db,label:Fb,description:Bb},Wb=m.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:g,value:x,className:y},w)=>{const k=m.useId(),A=f??k,_=`${A}-label`,j=t!==void 0,[R,T]=m.useState(a),S=j?t:R,C=()=>{if(s)return;const L=!S;j||T(L),i==null||i(L)},z=L=>{(L.key===" "||L.key==="Enter")&&(L.preventDefault(),C())};return r.jsxs("div",{className:re(Zn.root,Zn[l],s&&Zn.disabled,y),children:[r.jsx("button",{ref:w,type:"button",role:"switch",id:A,"aria-checked":S,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:re(Zn.track,S&&Zn.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:z,children:r.jsx("span",{className:Zn.thumb})}),(d||h)&&r.jsxs("div",{className:Zn.labelWrap,children:[d&&r.jsx("label",{id:_,htmlFor:A,className:Zn.label,children:d}),h&&r.jsx("span",{className:Zn.description,children:h})]})]})});Wb.displayName="Switch";const Hb="_root_104n4_5",Ub="_disabled_104n4_11",qb="_sm_104n4_17",Vb="_md_104n4_25",Gb="_lg_104n4_33",Yb="_controlWrap_104n4_41",Qb="_input_104n4_50",Kb="_ring_104n4_65",Zb="_ringChecked_104n4_90",Xb="_ringError_104n4_94",Jb="_dot_104n4_104",ek="_labelWrap_104n4_112",tk="_label_104n4_112",nk="_error_104n4_130",rk="_required_104n4_132",ok="_description_104n4_137",Vt={root:Hb,disabled:Ub,sm:qb,md:Vb,lg:Gb,controlWrap:Yb,input:Qb,ring:Kb,ringChecked:Zb,ringError:Xb,dot:Jb,labelWrap:ek,label:tk,error:nk,required:rk,description:ok},ak=m.forwardRef(({value:t,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:g,name:x,required:y,className:w},k)=>{const A=m.useId(),_=g??A;return r.jsxs("div",{className:re(Vt.root,Vt[d],s&&Vt.disabled,l&&Vt.error,w),children:[r.jsxs("div",{className:Vt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:_,name:x,value:t,checked:a,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(t),className:Vt.input}),r.jsx("span",{className:re(Vt.ring,a&&Vt.ringChecked,l&&Vt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Vt.dot})})]}),(h||f)&&r.jsxs("div",{className:Vt.labelWrap,children:[h&&r.jsxs("label",{htmlFor:_,className:Vt.label,children:[h,y&&r.jsx("span",{className:Vt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Vt.description,children:f})]})]})});ak.displayName="Radio";const ik="_table_1ad04_8",sk="_sm_1ad04_16",lk="_row_1ad04_30",ck="_head_1ad04_47",dk="_headLabel_1ad04_82",uk="_sortBtn_1ad04_96",hk="_sortIcon_1ad04_119",pk="_cell_1ad04_142",fk="_cellText_1ad04_175",mk="_cellStack_1ad04_203",gk="_cellStackPrimary_1ad04_210",vk="_cellStackSecondary_1ad04_221",yk="_cellActions_1ad04_233",xk="_cellControl_1ad04_240",wk="_addCell_1ad04_251",bk="_addRowCell_1ad04_264",kk="_addRowLabel_1ad04_276",_t={table:ik,sm:sk,row:lk,head:ck,headLabel:dk,sortBtn:uk,sortIcon:hk,cell:pk,cellText:fk,cellStack:mk,cellStackPrimary:gk,cellStackSecondary:vk,cellActions:yk,cellControl:xk,addCell:wk,addRowCell:bk,addRowLabel:kk},Fm=m.createContext({addColumn:!1,addRow:!1}),Bm=()=>m.useContext(Fm),_k=m.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...g},x)=>{const y=m.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(Fm.Provider,{value:y,children:r.jsx("table",{ref:x,className:re(_t.table,t==="sm"&&_t.sm,h),"data-interaction":a,...g,children:f})})});_k.displayName="Table";const Wm=m.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},g)=>{const x=a!==void 0;return r.jsx("th",{ref:g,className:re(_t.head,d),"data-align":t!=="left"?t:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(er,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:h})})});Wm.displayName="TableHead";const Ck=m.forwardRef(({children:t,...a},i)=>{const{addColumn:s,onAddColumn:l}=Bm(),d=s?m.Children.map(t,(h,f)=>{if(!m.isValidElement(h)||f!==0)return h;const g=m.Children.toArray(h.props.children);return m.cloneElement(h,{},[...g,r.jsx(Wm,{hoverable:!0,onClick:l,className:_t.addCell,"aria-label":"Add column",children:r.jsx(ao,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:d})});Ck.displayName="TableHeader";const Hm=m.forwardRef(({hoverable:t=!0,selected:a,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:re(_t.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));Hm.displayName="TableRow";const Yd=m.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>r.jsx("td",{ref:f,className:re(_t.cell,l),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Yd.displayName="TableCell";const jk=m.forwardRef(({children:t,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=Bm(),h=s?m.Children.map(t,f=>{if(!m.isValidElement(f))return f;const g=m.Children.toArray(f.props.children);return m.cloneElement(f,{},[...g,r.jsx(Yd,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[h,l&&r.jsx(Hm,{hoverable:!1,children:r.jsx(Yd,{colSpan:999,onClick:d,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(ao,{size:14,strokeWidth:2}),"Add row"]})})})]})});jk.displayName="TableBody";const Sk=m.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:s,children:l,...d},h)=>r.jsx("span",{ref:h,className:re(_t.cellText,s),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));Sk.displayName="CellText";const Nk=m.forwardRef(({primary:t,secondary:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:re(_t.cellStack,i),...s,children:[r.jsx("span",{className:_t.cellStackPrimary,children:t}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));Nk.displayName="CellStack";const Mk=m.forwardRef(({size:t="sm",...a},i)=>r.jsx(Sr,{ref:i,size:t,...a}));Mk.displayName="CellTag";const Rk=m.forwardRef(({size:t="sm",...a},i)=>r.jsx(li,{ref:i,size:t,...a}));Rk.displayName="CellStatusTag";const Lk=m.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(_t.cellActions,t),...i,children:a}));Lk.displayName="CellActions";const $k=m.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(_t.cellControl,t),...i,children:a}));$k.displayName="CellControl";const Tk="_root_1afcs_8",Ak="_secondary_1afcs_23",Ik="_header_1afcs_28",Ek="_headerText_1afcs_36",Pk="_title_1afcs_43",zk="_subtitle_1afcs_52",Ok="_action_1afcs_61",Dk="_hero_1afcs_66",Fk="_heroValue_1afcs_74",Bk="_heroCaption_1afcs_83",Wk="_heroChange_1afcs_89",Hk="_body_1afcs_95",Uk="_legend_1afcs_103",tn={root:Tk,secondary:Ak,header:Ik,headerText:Ek,title:Pk,subtitle:zk,action:Ok,hero:Dk,heroValue:Fk,heroCaption:Bk,heroChange:Wk,body:Hk,legend:Uk},qk=m.forwardRef(({title:t,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:g,className:x,...y},w)=>r.jsxs("div",{ref:w,className:re(tn.root,f&&tn.secondary,x),...y,children:[r.jsxs("div",{className:tn.header,children:[r.jsxs("div",{className:tn.headerText,children:[r.jsx("h3",{className:tn.title,children:t}),a&&r.jsx("p",{className:tn.subtitle,children:a})]}),i&&r.jsx("div",{className:tn.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:tn.hero,children:[s!==void 0&&r.jsx("span",{className:tn.heroValue,children:s}),l&&r.jsx("span",{className:tn.heroChange,children:l}),d&&r.jsx("span",{className:tn.heroCaption,children:d})]}),r.jsx("div",{className:tn.body,children:g}),h&&r.jsx("div",{className:tn.legend,children:h})]}));qk.displayName="ChartCard";const Vk="_root_je8nq_7",Gk="_item_je8nq_17",Yk="_swatch_je8nq_23",Qk="_label_je8nq_29",Kk="_bookend_je8nq_33",Eo={root:Vk,item:Gk,swatch:Yk,label:Qk,bookend:Kk},Um=m.forwardRef(({items:t,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>r.jsxs("div",{ref:f,className:re(Eo.root,d),...h,children:[a&&r.jsx("span",{className:Eo.bookend,children:a}),t.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return r.jsxs("span",{className:Eo.item,children:[r.jsx("span",{className:Eo.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&r.jsx("span",{className:Eo.label,children:g.label})]},x)}),i&&r.jsx("span",{className:Eo.bookend,children:i})]}));Um.displayName="ChartLegend";const Zk="_root_igkx4_5",Xk="_svgWrap_igkx4_13",Jk="_svg_igkx4_13",e_="_gridLine_igkx4_23",t_="_axisLabel_igkx4_28",n_="_legendWrap_igkx4_43",r_="_legendItem_igkx4_51",o_="_legendDot_igkx4_57",a_="_legendLabel_igkx4_64",i_="_tooltip_igkx4_71",s_="_tooltipLabel_igkx4_85",l_="_tooltipRow_igkx4_95",c_="_tooltipDot_igkx4_101",d_="_tooltipSeries_igkx4_108",u_="_tooltipValue_igkx4_115",Te={root:Zk,svgWrap:Xk,svg:Jk,gridLine:e_,axisLabel:t_,legendWrap:n_,legendItem:r_,legendDot:o_,legendLabel:a_,tooltip:i_,tooltipLabel:s_,tooltipRow:l_,tooltipDot:c_,tooltipSeries:d_,tooltipValue:u_},h_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function wd(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Po(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const p_=m.forwardRef(({series:t,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:A,className:_,...j},R)=>{var te,O,ae,me;const T=g&&g.length>0?g:h_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,z]=m.useState({visible:!1,x:0,y:0,label:"",items:[]}),L=m.useRef(null),[M,N]=m.useState(540);m.useEffect(()=>{const de=L.current;if(!de)return;const fe=new ResizeObserver(xe=>{var We;const $e=(We=xe[0])==null?void 0:We.contentRect.width;$e>0&&N(Math.floor($e))});fe.observe(de);const ke=Math.floor(de.getBoundingClientRect().width);return ke>0&&N(ke),()=>fe.disconnect()},[]);const I=44,D=0,G=20,F=20,H=M,Y=s,Z=H-I-D,se=Y-G-F,ne=5,oe=t.map((de,fe)=>de.color??T[fe%T.length]);let J=0;i==="stacked"?a.forEach((de,fe)=>{const ke=t.reduce((xe,$e)=>xe+($e.data[fe]??0),0);ke>J&&(J=ke)}):i==="horizontal"?J=Math.max(...((te=t[0])==null?void 0:te.data)??[0]):t.forEach(de=>de.data.forEach(fe=>{fe>J&&(J=fe)}));const U=wd(J),V=Array.from({length:ne+1},(de,fe)=>U*(fe/ne)).reverse(),E=de=>F+se-de/U*se,$=Z/a.length,q=3,K=i==="grouped"?Math.max(4,($-q*(t.length+1))/t.length):$,ie=()=>z(de=>({...de,visible:!1})),he=m.useCallback(de=>{const fe=de.currentTarget.getBoundingClientRect(),ke=de.clientX-fe.left,xe=Math.floor((ke-I)/$);if(xe<0||xe>=a.length){ie();return}const $e=t.map((We,Ve)=>({color:oe[Ve],series:We.label,value:We.data[xe]??0}));z({visible:!0,x:de.clientX+12,y:de.clientY-8,label:a[xe],items:$e})},[t,a,$,oe,I]);if(i==="gradient"){const de=((O=t[0])==null?void 0:O.data)??[],fe=((ae=t[0])==null?void 0:ae.label)??"",ke=44,xe=0,$e=20,We=20,Ve=Math.max(H-ke-xe,1),Ge=Y-$e-We,De=Math.max(0,...de),Qe=De>0?wd(De):10,Ye=5,At=Array.from({length:Ye+1},(Me,tt)=>Qe*tt/Ye),He=Me=>$e+Ge-Me/Qe*Ge,It=Ve/Math.max(1,de.length),Ct=Me=>ke+It*Me,Mn=Me=>ke+It*(Me+1),Rn=Me=>ke+It*(Me+.5),Rr=de.length===0?"":de.map((Me,tt)=>{const ct=He(Me);return`M ${Ct(tt)} ${ct} L ${Mn(tt)} ${ct}`}).join(" "),ca=[];de.forEach((Me,tt)=>{if(Me<=0)return;const ct=He(Me);ca.push({x:Ct(tt),y:ct,width:Math.max(Mn(tt)-Ct(tt),0),height:$e+Ge-ct})});const Lr=Math.max(1,Math.ceil(45/It)),jl=a.length-1,ki=w??(Me=>`${Po(Me)}${h}`);return r.jsxs("div",{ref:R,className:re(Te.root,_),...j,children:[r.jsx("div",{ref:L,className:Te.svgWrap,children:r.jsxs("svg",{width:H,height:Y,viewBox:`0 0 ${H} ${Y}`,className:Te.svg,onMouseLeave:ie,onMouseMove:Me=>{const tt=Me.currentTarget.getBoundingClientRect(),ct=Me.clientX-tt.left,Et=Math.floor((ct-ke)/It);if(Et<0||Et>=de.length){ie();return}z({visible:!0,x:Me.clientX+12,y:Me.clientY-8,label:a[Et]??"",items:[{color:y,series:fe,value:de[Et]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),At.map((Me,tt)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:H-xe,y1:He(Me),y2:He(Me),className:Te.gridLine}),r.jsxs("text",{x:0,y:He(Me)-6,className:Te.axisLabel,textAnchor:"start",children:[Po(Me),h]})]},`t-${tt}`)),ca.map((Me,tt)=>r.jsx("rect",{x:Me.x,y:Me.y,width:Me.width,height:Me.height,fill:`url(#${S}-fill)`},`b-${tt}`)),Rr&&r.jsx("path",{d:Rr,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var $r;const Me=($r=L.current)==null?void 0:$r.getBoundingClientRect();if(!Me)return null;const tt=C.x-12-Me.left,ct=Math.floor((tt-ke)/It);if(ct<0||ct>=de.length)return null;const Et=de[ct]??0;return Et<=0?null:r.jsx("circle",{cx:Rn(ct),cy:He(Et),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Me,tt)=>{const ct=tt===0,Et=tt===jl;if(!(ct||Et)&&tt%Lr!==0)return null;const da=ct?ke:Et?H-xe:Rn(tt),ua=ct?"start":Et?"end":"middle";return r.jsx("text",{x:da,y:Y-We+18,className:Te.axisLabel,textAnchor:ua,children:Me},`xl-${tt}`)})]})}),C.visible&&C.items.length>0&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(Me=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:Me.color}}),r.jsx("span",{className:Te.tooltipSeries,children:Me.series}),r.jsx("span",{className:Te.tooltipValue,children:ki(Me.value)})]},Me.series))]})]})}if(i==="horizontal"){const de=((me=t[0])==null?void 0:me.data)??[],fe=wd(Math.max(...de,1)),ke=28,xe=10,$e=120,Ve=H-$e-44,Ge=a.length*(ke+xe)+xe;return r.jsxs("div",{ref:R,className:re(Te.root,_),...j,children:[r.jsx("div",{ref:L,className:Te.svgWrap,children:r.jsx("svg",{width:H,height:Ge,viewBox:`0 0 ${H} ${Ge}`,className:Te.svg,onMouseLeave:ie,onMouseMove:De=>{var He;const Qe=De.currentTarget.getBoundingClientRect(),Ye=De.clientY-Qe.top,At=Math.floor(Ye/(ke+xe));if(At<0||At>=a.length){ie();return}z({visible:!0,x:De.clientX+12,y:De.clientY-8,label:a[At],items:[{color:oe[0],series:((He=t[0])==null?void 0:He.label)??"",value:de[At]??0}]})},children:a.map((De,Qe)=>{const Ye=xe+Qe*(ke+xe),At=de[Qe]??0,He=At/fe*Ve;return r.jsxs("g",{children:[r.jsx("text",{x:$e-8,y:Ye+ke/2+4,className:Te.axisLabel,textAnchor:"end",children:De}),r.jsx("rect",{x:$e,y:Ye,width:He,height:ke,rx:f,fill:oe[0]}),r.jsxs("text",{x:$e+He+6,y:Ye+ke/2+4,className:Te.axisLabel,textAnchor:"start",children:[Po(At),h]})]},Qe)})})}),C.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(De=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:De.color}}),r.jsx("span",{className:Te.tooltipSeries,children:De.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Po(De.value),h]})]},De.series))]})]})}return r.jsxs("div",{ref:R,className:re(Te.root,_),...j,children:[r.jsx("div",{ref:L,className:Te.svgWrap,children:r.jsxs("svg",{width:H,height:Y,viewBox:`0 0 ${H} ${Y}`,className:Te.svg,onMouseMove:he,onMouseLeave:ie,children:[r.jsx("defs",{children:oe.flatMap((de,fe)=>[r.jsxs("linearGradient",{id:`${S}-fill-${fe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`soft-${fe}`),r.jsxs("linearGradient",{id:`${S}-fill-strong-${fe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`strong-${fe}`)])}),V.map(de=>{const fe=E(de);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:fe,x2:H-D,y2:fe,className:Te.gridLine}),r.jsxs("text",{x:0,y:fe-6,className:Te.axisLabel,textAnchor:"start",children:[Po(de),h]})]},de)}),a.map((de,fe)=>{const ke=I+fe*$;if(i==="stacked"){let We=0;const Ve=t.map((He,It)=>{const Ct=He.data[fe]??0,Mn=Ct/U*se,Rn=E(We+Ct);return We+=Ct,{si:It,value:Ct,barH:Mn,y:Rn}}),Ge=ke+($-K)/2,De=Ve.filter(He=>He.value>0),Qe=De.length>0?De[0].si:-1,Ye=De.length>0?De[De.length-1]:null,At=A??(Ye?oe[Ye.si]:"transparent");return r.jsxs("g",{children:[Ve.map(({si:He,value:It,barH:Ct,y:Mn})=>{if(It<=0)return null;if(k==="mono-scale"){const Rn=He===Qe;return r.jsx("rect",{x:Ge,y:Mn,width:K,height:Ct,fill:Rn?`url(#${S}-fill-strong-${He})`:oe[He]},`fill-${He}`)}return r.jsx("rect",{x:Ge,y:Mn,width:K,height:Ct,fill:`url(#${S}-fill-${He})`},`fill-${He}`)}),k==="mono-scale"?Ye&&r.jsx("line",{x1:Ge,x2:Ge+K,y1:Ye.y,y2:Ye.y,stroke:At,strokeWidth:2,strokeLinecap:"butt"}):Ve.map(({si:He,value:It,y:Ct})=>It>0?r.jsx("line",{x1:Ge,x2:Ge+K,y1:Ct,y2:Ct,stroke:oe[He],strokeWidth:2,strokeLinecap:"butt"},`cap-${He}`):null)]},fe)}const xe=t.length*K+(t.length-1)*q,$e=ke+($-xe)/2;return r.jsx("g",{children:t.map((We,Ve)=>{const Ge=We.data[fe]??0;if(Ge<=0)return null;const De=Ge/U*se,Qe=$e+Ve*(K+q),Ye=E(Ge);return r.jsxs("g",{children:[r.jsx("rect",{x:Qe,y:Ye,width:K,height:De,fill:`url(#${S}-fill-${Ve})`}),r.jsx("line",{x1:Qe,x2:Qe+K,y1:Ye,y2:Ye,stroke:oe[Ve],strokeWidth:2,strokeLinecap:"butt"})]},Ve)})},fe)}),(()=>{const fe=Math.max(1,Math.ceil(45/$)),ke=a.length-1;return a.map((xe,$e)=>{const We=$e===0,Ve=$e===ke;if(!(We||Ve)&&$e%fe!==0)return null;const De=We?I:Ve?H-D:I+$*($e+.5),Qe=We?"start":Ve?"end":"middle";return r.jsx("text",{x:De,y:Y-G+18,className:Te.axisLabel,textAnchor:Qe,children:xe},`xl-${$e}`)})})()]})}),d&&t.length>1&&r.jsx("div",{className:Te.legendWrap,children:t.map((de,fe)=>r.jsxs("div",{className:Te.legendItem,children:[r.jsx("span",{className:Te.legendDot,style:{background:oe[fe]}}),r.jsx("span",{className:Te.legendLabel,children:de.label})]},de.label))}),C.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(de=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:de.color}}),r.jsx("span",{className:Te.tooltipSeries,children:de.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Po(de.value),h]})]},de.series))]})]})});p_.displayName="BarChart";const f_="_root_1crij_5",m_="_svgWrap_1crij_13",g_="_svg_1crij_13",v_="_gridLine_1crij_23",y_="_axisLabelY_1crij_35 _axisLabel_1crij_28",x_="_axisLabelX_1crij_39 _axisLabel_1crij_28",w_="_legendWrap_1crij_51",b_="_tooltip_1crij_76",k_="_tooltipLabel_1crij_95",__="_tooltipRow_1crij_105",C_="_tooltipDot_1crij_111",j_="_tooltipSeries_1crij_118",S_="_tooltipValue_1crij_125",nn={root:f_,svgWrap:m_,svg:g_,gridLine:v_,axisLabelY:y_,axisLabelX:x_,legendWrap:w_,tooltip:b_,tooltipLabel:k_,tooltipRow:__,tooltipDot:C_,tooltipSeries:j_,tooltipValue:S_};function N_(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function ef(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function M_(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let s=0;s<t.length-1;s++){const[l,d]=t[s],[h,f]=t[s+1],g=(h-l)*a;i+=` C ${l+g} ${d}, ${h-g} ${f}, ${h} ${f}`}return i}const R_=m.forwardRef(({series:t,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:g=5,className:x,...y},w)=>{const[k,A]=m.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,j=m.useRef(null),[R,T]=m.useState(540);m.useEffect(()=>{const U=j.current;if(!U)return;const V=new ResizeObserver($=>{var K;const q=(K=$[0])==null?void 0:K.contentRect.width;q>0&&T(Math.floor(q))});V.observe(U);const E=Math.floor(U.getBoundingClientRect().width);return E>0&&T(E),()=>V.disconnect()},[]);const S=44,C=20,z=20,L=R,M=i,N=L-S,I=M-C-z,D=`url(#${_}-stroke)`,G=U=>U.color??D,F=t.flatMap(U=>U.data),H=N_(Math.max(...F,1)),Y=Array.from({length:g+1},(U,V)=>H*(V/g)).reverse(),Z=U=>z+I-U/H*I,se=U=>a.length>1?S+U/(a.length-1)*N:S+N/2,ne=U=>U.map((V,E)=>[se(E),Z(V)]),oe=()=>A(U=>({...U,visible:!1})),J=m.useCallback(U=>{const V=U.currentTarget.getBoundingClientRect(),$=U.clientX-V.left-S,q=N/Math.max(a.length-1,1),K=Math.round($/q),ie=Math.max(0,Math.min(K,a.length-1)),he=t.map(te=>({color:te.color??h,series:te.label,value:te.data[ie]??0}));A({visible:!0,index:ie,x:U.clientX+12,y:U.clientY-8,label:a[ie],items:he})},[t,a,h,N,S]);return r.jsxs("div",{ref:w,className:re(nn.root,x),...y,children:[r.jsx("div",{ref:j,className:nn.svgWrap,children:r.jsxs("svg",{width:L,height:M,viewBox:`0 0 ${L} ${M}`,className:nn.svg,onMouseMove:J,onMouseLeave:oe,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:h})]}),r.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:h}),r.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${_}-clip`,children:r.jsx("rect",{x:S,y:z,width:N,height:I,rx:6,ry:6})})]}),Y.map(U=>{const V=Z(U);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:V,x2:L,y2:V,className:nn.gridLine}),r.jsxs("text",{x:0,y:V-6,className:nn.axisLabelY,textAnchor:"start",children:[ef(U),f]})]},U)}),r.jsx("g",{clipPath:`url(#${_}-clip)`,children:t.map((U,V)=>{const E=ne(U.data),$=M_(E);return r.jsx("path",{d:$,fill:"none",stroke:G(U),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},V)})}),(()=>{const U=k.index>=0?k.index:0,V=se(U),E=k.visible&&k.index>=0,$="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:E?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${V}px)`,transition:$},children:[r.jsx("line",{x1:0,x2:0,y1:z,y2:z+I,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((q,K)=>{const ie=q.data[U]??0,he=Z(ie),te=q.color??h;return r.jsx("g",{style:{transform:`translateY(${he}px)`,transition:$},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:te,filter:`url(#${_}-pin-shadow)`})},K)})]})})})(),(()=>{const V=a.length>1?N/(a.length-1):N,E=Math.max(1,Math.ceil(45/Math.max(V,1))),$=a.length-1;return a.map((q,K)=>{const ie=K===0,he=K===$;if(!(ie||he)&&K%E!==0)return null;const O=ie?S:he?L:se(K),ae=ie?"start":he?"end":"middle";return r.jsx("text",{x:O,y:M-C+14,className:nn.axisLabelX,textAnchor:ae,children:q},q)})})()]})}),l&&t.length>0&&r.jsx("div",{className:nn.legendWrap,children:r.jsx(Um,{variant:"line",items:t.map(U=>({color:U.color??h,label:U.label}))})}),k.visible&&r.jsxs("div",{className:nn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:nn.tooltipLabel,children:k.label}),k.items.map(U=>r.jsxs("div",{className:nn.tooltipRow,children:[r.jsx("span",{className:nn.tooltipDot,style:{background:U.color}}),r.jsx("span",{className:nn.tooltipSeries,children:U.series}),r.jsxs("span",{className:nn.tooltipValue,children:[ef(U.value),f]})]},U.series))]})]})});R_.displayName="LineChart";const L_="_root_3tq2n_5",$_="_chartWrap_3tq2n_14",T_="_svg_3tq2n_18",A_="_centerText_3tq2n_23",I_="_statLegend_3tq2n_31",E_="_statItem_3tq2n_37",P_="_statBar_3tq2n_44",z_="_statText_3tq2n_50",O_="_statValue_3tq2n_56",D_="_statLabel_3tq2n_65",F_="_listLegend_3tq2n_72",B_="_legendItem_3tq2n_79",W_="_legendDot_3tq2n_85",H_="_legendLabel_3tq2n_92",U_="_legendValue_3tq2n_99",q_="_tooltip_3tq2n_107",V_="_tooltipLabel_3tq2n_118",G_="_tooltipValue_3tq2n_124",wt={root:L_,chartWrap:$_,svg:T_,centerText:A_,statLegend:I_,statItem:E_,statBar:P_,statText:z_,statValue:O_,statLabel:D_,listLegend:F_,legendItem:B_,legendDot:W_,legendLabel:H_,legendValue:U_,tooltip:q_,tooltipLabel:V_,tooltipValue:G_},tf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Y_=m.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...g},x)=>{const[y,w]=m.useState({visible:!1,x:0,y:0,label:"",value:""}),k=t.map((L,M)=>L.color??tf[M%tf.length]),A=t.reduce((L,M)=>L+M.value,0),_=i/2,j=i/2,R=i*.15,T=(i-R)/2-2,S=2*Math.PI*T;let C=-S/4;const z=t.map((L,M)=>{const I=(A>0?L.value/A:0)*S,D=`${I} ${S-I}`,G=-C;return C+=I,{dashArray:D,dashOffset:G,color:k[M],...L}});return r.jsxs("div",{ref:x,className:re(wt.root,f),...g,children:[r.jsx("div",{className:wt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:wt.svg,children:[r.jsx("circle",{cx:_,cy:j,r:T,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:R}),z.map((L,M)=>r.jsx("circle",{cx:_,cy:j,r:T,fill:"none",stroke:L.color,strokeWidth:R,strokeDasharray:L.dashArray,strokeDashoffset:L.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:N=>{const I=A>0?Math.round(L.value/A*100):0;w({visible:!0,x:N.clientX+12,y:N.clientY-8,label:L.label,value:`${I}${d}`})},onMouseLeave:()=>w(N=>({...N,visible:!1}))},M)),h&&a>0&&r.jsx("text",{x:_,y:j+6,textAnchor:"middle",className:wt.centerText,children:h})]})}),s&&l==="stat"&&r.jsx("div",{className:wt.statLegend,children:t.map((L,M)=>{const N=A>0?Math.round(L.value/A*100):0;return r.jsxs("div",{className:wt.statItem,children:[r.jsx("span",{className:wt.statBar,style:{background:k[M]}}),r.jsxs("div",{className:wt.statText,children:[r.jsxs("span",{className:wt.statValue,children:[N,d]}),r.jsx("span",{className:wt.statLabel,children:L.label})]})]},L.label)})}),s&&l==="list"&&r.jsx("div",{className:wt.listLegend,children:t.map((L,M)=>{const N=A>0?Math.round(L.value/A*100):0;return r.jsxs("div",{className:wt.legendItem,children:[r.jsx("span",{className:wt.legendDot,style:{background:k[M]}}),r.jsx("span",{className:wt.legendLabel,children:L.label}),r.jsxs("span",{className:wt.legendValue,children:[N,d]})]},L.label)})}),y.visible&&r.jsxs("div",{className:wt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:wt.tooltipLabel,children:y.label}),r.jsx("div",{className:wt.tooltipValue,children:y.value})]})]})});Y_.displayName="DonutChart";const Q_="_root_bqpf6_5",K_="_svgWrap_bqpf6_10",Z_="_svg_bqpf6_10",X_="_axisLabel_bqpf6_19",J_="_tooltip_bqpf6_25",zo={root:Q_,svgWrap:K_,svg:Z_,axisLabel:X_,tooltip:J_};function eC(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const tC=m.forwardRef(({cells:t,rows:a,cols:i,colorScale:s=eC,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...g},x)=>{const[y,w]=m.useState({visible:!1,x:0,y:0,content:""}),k=m.useRef(null),[A,_]=m.useState(540);m.useEffect(()=>{const M=k.current;if(!M)return;const N=new ResizeObserver(D=>{var F;const G=(F=D[0])==null?void 0:F.contentRect.width;G>0&&_(Math.floor(G))});N.observe(M);const I=Math.floor(M.getBoundingClientRect().width);return I>0&&_(I),()=>N.disconnect()},[]);const j=32,R=16,T=A,S=T-j-d,C=Math.max(4,(S-(i.length-1)*d)/i.length),z=a.length*(R+d)+d+24,L=new Map;return t.forEach(M=>L.set(`${M.row}__${M.col}`,M)),r.jsxs("div",{ref:x,className:re(zo.root,f),...g,children:[r.jsx("div",{ref:k,className:zo.svgWrap,children:r.jsxs("svg",{width:T,height:z,viewBox:`0 0 ${T} ${z}`,className:zo.svg,onMouseLeave:()=>w(M=>({...M,visible:!1})),children:[i.map((M,N)=>{const I=j+d+N*(C+d)+C/2;return r.jsx("text",{x:I,y:12,className:zo.axisLabel,textAnchor:"middle",children:M},M)}),a.map((M,N)=>{const I=24+N*(R+d);return r.jsxs("g",{children:[r.jsx("text",{x:j-4,y:I+R/2+4,className:zo.axisLabel,textAnchor:"end",children:M}),i.map((D,G)=>{const F=L.get(`${M}__${D}`),H=(F==null?void 0:F.value)??0,Y=s(H),Z=j+d+G*(C+d);return r.jsx("rect",{x:Z,y:I,width:C,height:R,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:se=>{if(!h)return;const ne=(F==null?void 0:F.label)??`${M} / ${D}: ${Math.round(H*100)}%`;w({visible:!0,x:se.clientX+12,y:se.clientY-8,content:ne})},onMouseLeave:()=>w(se=>({...se,visible:!1}))},D)})]},M)})]})}),y.visible&&r.jsx("div",{className:zo.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});tC.displayName="HeatMap";const nC="_root_18572_6",rC="_gridWrap_18572_14",oC="_grid_18572_14",aC="_cell_18572_27",iC="_legend_18572_33",sC="_legendSquare_18572_43",lC="_tooltip_18572_49",br={root:nC,gridWrap:rC,grid:oC,cell:aC,legend:iC,legendSquare:sC,tooltip:lC},cC=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function dC(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const uC=m.forwardRef(({days:t,levelColors:a=cC,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[A,_]=m.useState({visible:!1,x:0,y:0,content:""}),j=f??Math.max(1,...t.map(C=>C.count)),R=[];for(let C=0;C<t.length;C+=7)R.push(t.slice(C,C+7));const T=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${R.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},S=d?"100%":i;return r.jsxs("div",{ref:k,className:re(br.root,y),...w,children:[r.jsx("div",{className:br.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${j} on the busiest day`,className:br.grid,style:T,onMouseLeave:()=>_(C=>({...C,visible:!1})),children:R.map((C,z)=>Array.from({length:7},(L,M)=>{const N=C[M];if(!N)return r.jsx("span",{className:br.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${z}-${M}`);const I=dC(N.count,j),D=g?g(N,I):`${N.label??N.date}: ${N.count} activation${N.count===1?"":"s"}`;return r.jsx("span",{className:br.cell,style:{width:S,height:i,borderRadius:l,background:a[I]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:D}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${z}-${M}`)}))})}),h&&r.jsxs("div",{className:br.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>r.jsx("span",{className:br.legendSquare,style:{background:a[C],borderRadius:l}},C)),r.jsx("span",{children:"More"})]}),A.visible&&r.jsx("div",{className:br.tooltip,style:{left:A.x,top:A.y},children:A.content})]})});uC.displayName="ActivityHeatMap";const hC="_root_14edh_5",pC="_track_14edh_17",fC="_segment_14edh_28",mC="_legend_14edh_49",gC="_legendRow_14edh_58",vC="_legendDot_14edh_68",yC="_legendLabel_14edh_74",xC="_legendValue_14edh_78",wC="_tooltip_14edh_84",bC="_tooltipLabel_14edh_100",kC="_tooltipValueRow_14edh_105",_C="_tooltipDot_14edh_114",pn={root:hC,track:pC,segment:fC,legend:mC,legendRow:gC,legendDot:vC,legendLabel:yC,legendValue:xC,tooltip:wC,tooltipLabel:bC,tooltipValueRow:kC,tooltipDot:_C},CC=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Oo={r:140,g:79,b:226},bd={r:68,g:108,b:255};function nf(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(Oo.r+(bd.r-Oo.r)*a),s=Math.round(Oo.g+(bd.g-Oo.g)*a),l=Math.round(Oo.b+(bd.b-Oo.b)*a);return`rgb(${i}, ${s}, ${l})`}const jC=m.forwardRef(({segments:t,colors:a=CC,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...g},x)=>{const[y,w]=m.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=t.reduce((R,T)=>R+Math.max(0,T.value),0);let A=0;const _=t.map((R,T)=>{const S=Math.max(0,R.value),C=k>0?S/k*100:0,z=k>0?A/k*100:0;A+=S;const L=k>0?A/k*100:0,M=R.color??a[T%a.length],N=d?!0:R.emphasized??T===0;return{...R,pct:C,startPct:z,endPct:L,color:M,emphasized:N}}),j=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:x,className:re(pn.root,f),...g,children:[r.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${t.map(R=>`${R.label} ${R.value}`).join(", ")}`,className:pn.track,style:j,onMouseLeave:()=>w(R=>({...R,visible:!1})),children:_.map(R=>{const T=i?`linear-gradient(to right, ${nf(R.startPct)}, ${nf(R.endPct)})`:R.color;return r.jsx("span",{className:pn.segment,"data-emphasized":R.emphasized||void 0,"data-ai":i||void 0,style:{width:`${R.pct}%`,background:T,"--ratio-hover-bg":R.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:R.label,value:R.value,color:R.color})},R.label)})}),l&&r.jsx("ul",{className:pn.legend,children:_.map(R=>r.jsxs("li",{className:pn.legendRow,children:[r.jsx("span",{className:pn.legendDot,style:{background:R.color}}),r.jsx("span",{className:pn.legendLabel,children:R.label}),r.jsx("span",{className:pn.legendValue,children:R.value.toLocaleString("en-US")})]},R.label))}),y.visible&&r.jsxs("div",{className:pn.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:pn.tooltipLabel,children:y.label}),r.jsxs("span",{className:pn.tooltipValueRow,children:[r.jsx("span",{className:pn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});jC.displayName="RatioBar";const SC="_track_1wmly_6",NC="_fill_1wmly_12",rf={track:SC,fill:NC},MC=m.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:g,className:x,style:y,...w},k)=>{const A=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${A}px
    )`,j=Math.max(0,Math.min(a,t)),R=a>0?j/a*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(R)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":j,className:re(rf.track,x),style:{height:f,background:`${_}, ${s}`,...y},...w,children:r.jsx("div",{className:rf.fill,style:{width:`${R}%`,background:`${_}, ${i}`}})})});MC.displayName="StripedBar";const RC=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],LC=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function of(t,a="to right"){const i=t.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}of(RC),of(LC);var et="-ms-",ai="-moz-",Fe="-webkit-",qm="comm",gl="rule",Nu="decl",$C="@import",TC="@namespace",Vm="@keyframes",AC="@layer",Gm=Math.abs,Mu=String.fromCharCode,Qd=Object.assign;function IC(t,a){return gt(t,0)^45?(((a<<2^gt(t,0))<<2^gt(t,1))<<2^gt(t,2))<<2^gt(t,3):0}function Ym(t){return t.trim()}function Xn(t,a){return(t=a.exec(t))?t[0]:t}function Le(t,a,i){return t.replace(a,i)}function Hs(t,a,i){return t.indexOf(a,i)}function gt(t,a){return t.charCodeAt(a)|0}function ro(t,a,i){return t.slice(a,i)}function _n(t){return t.length}function Qm(t){return t.length}function ti(t,a){return a.push(t),t}function EC(t,a){return t.map(a).join("")}function af(t,a){return t.filter(function(i){return!Xn(i,a)})}var vl=1,Vo=1,Km=0,fn=0,ht=0,na="";function yl(t,a,i,s,l,d,h,f){return{value:t,root:a,parent:i,type:s,props:l,children:d,line:vl,column:Vo,length:h,return:"",siblings:f}}function kr(t,a){return Qd(yl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Do(t){for(;t.root;)t=kr(t.root,{children:[t]});ti(t,t.siblings)}function PC(){return ht}function zC(){return ht=fn>0?gt(na,--fn):0,Vo--,ht===10&&(Vo=1,vl--),ht}function jn(){return ht=fn<Km?gt(na,fn++):0,Vo++,ht===10&&(Vo=1,vl++),ht}function Cr(){return gt(na,fn)}function Us(){return fn}function xl(t,a){return ro(na,t,a)}function ci(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OC(t){return vl=Vo=1,Km=_n(na=t),fn=0,[]}function DC(t){return na="",t}function kd(t){return Ym(xl(fn-1,Kd(t===91?t+2:t===40?t+1:t)))}function FC(t){for(;(ht=Cr())&&ht<33;)jn();return ci(t)>2||ci(ht)>3?"":" "}function BC(t,a){for(;--a&&jn()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return xl(t,Us()+(a<6&&Cr()==32&&jn()==32))}function Kd(t){for(;jn();)switch(ht){case t:return fn;case 34:case 39:t!==34&&t!==39&&Kd(ht);break;case 40:t===41&&Kd(t);break;case 92:jn();break}return fn}function WC(t,a){for(;jn()&&t+ht!==57;)if(t+ht===84&&Cr()===47)break;return"/*"+xl(a,fn-1)+"*"+Mu(t===47?t:jn())}function HC(t){for(;!ci(Cr());)jn();return xl(t,fn)}function UC(t){return DC(qs("",null,null,null,[""],t=OC(t),0,[0],t))}function qs(t,a,i,s,l,d,h,f,g){for(var x=0,y=0,w=h,k=0,A=0,_=0,j=1,R=1,T=1,S=0,C="",z=l,L=d,M=s,N=C;R;)switch(_=S,S=jn()){case 40:if(_!=108&&gt(N,w-1)==58){Hs(N+=Le(kd(S),"&","&\f"),"&\f",Gm(x?f[x-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:N+=kd(S);break;case 9:case 10:case 13:case 32:N+=FC(_);break;case 92:N+=BC(Us()-1,7);continue;case 47:switch(Cr()){case 42:case 47:ti(qC(WC(jn(),Us()),a,i,g),g),(ci(_||1)==5||ci(Cr()||1)==5)&&_n(N)&&ro(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*j:f[x++]=_n(N)*T;case 125*j:case 59:case 0:switch(S){case 0:case 125:R=0;case 59+y:T==-1&&(N=Le(N,/\f/g,"")),A>0&&(_n(N)-w||j===0&&_===47)&&ti(A>32?lf(N+";",s,i,w-1,g):lf(Le(N," ","")+";",s,i,w-2,g),g);break;case 59:N+=";";default:if(ti(M=sf(N,a,i,x,y,l,f,C,z=[],L=[],w,d),d),S===123)if(y===0)qs(N,a,M,M,z,d,w,f,L);else{switch(k){case 99:if(gt(N,3)===110)break;case 108:if(gt(N,2)===97)break;default:y=0;case 100:case 109:case 115:}y?qs(t,M,M,s&&ti(sf(t,M,M,0,0,l,f,C,l,z=[],w,L),L),l,L,w,f,s?z:L):qs(N,M,M,M,[""],L,0,f,L)}}x=y=A=0,j=T=1,C=N="",w=h;break;case 58:w=1+_n(N),A=_;default:if(j<1){if(S==123)--j;else if(S==125&&j++==0&&zC()==125)continue}switch(N+=Mu(S),S*j){case 38:T=y>0?1:(N+="\f",-1);break;case 44:f[x++]=(_n(N)-1)*T,T=1;break;case 64:Cr()===45&&(N+=kd(jn())),k=Cr(),y=w=_n(C=N+=HC(Us())),S++;break;case 45:_===45&&_n(N)==2&&(j=0)}}return d}function sf(t,a,i,s,l,d,h,f,g,x,y,w){for(var k=l-1,A=l===0?d:[""],_=Qm(A),j=0,R=0,T=0;j<s;++j)for(var S=0,C=ro(t,k+1,k=Gm(R=h[j])),z=t;S<_;++S)(z=Ym(R>0?A[S]+" "+C:Le(C,/&\f/g,A[S])))&&(g[T++]=z);return yl(t,a,i,l===0?gl:f,g,x,y,w)}function qC(t,a,i,s){return yl(t,a,i,qm,Mu(PC()),ro(t,2,-2),0,s)}function lf(t,a,i,s,l){return yl(t,a,i,Nu,ro(t,0,s),ro(t,s+1,-1),s,l)}function Zm(t,a,i){switch(IC(t,a)){case 5103:return Fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Fe+t+t;case 4855:return Fe+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return ai+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+t+ai+t+et+t+t;case 5936:switch(gt(t,a+11)){case 114:return Fe+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Fe+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Fe+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Fe+t+et+t+t;case 6165:return Fe+t+et+"flex-"+t+t;case 5187:return Fe+t+Le(t,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+et+"flex-$1$2")+t;case 5443:return Fe+t+et+"flex-item-"+Le(t,/flex-|-self/g,"")+(Xn(t,/flex-|baseline/)?"":et+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return Fe+t+et+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Fe+t+et+Le(t,"shrink","negative")+t;case 5292:return Fe+t+et+Le(t,"basis","preferred-size")+t;case 6060:return Fe+"box-"+Le(t,"-grow","")+Fe+t+et+Le(t,"grow","positive")+t;case 4554:return Fe+Le(t,/([^-])(transform)/g,"$1"+Fe+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+et+"flex-pack:$3"),/space-between/,"justify")+Fe+t+t;case 4200:if(!Xn(t,/flex-|baseline/))return et+"grid-column-align"+ro(t,a)+t;break;case 2592:case 3360:return et+Le(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,Xn(s.props,/grid-\w+-end/)})?~Hs(t+(i=i[a].value),"span",0)?t:et+Le(t,"-start","")+t+et+"grid-row-span:"+(~Hs(i,"span",0)?Xn(i,/\d+/):+Xn(i,/\d+/)-+Xn(t,/\d+/))+";":et+Le(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(s){return Xn(s.props,/grid-\w+-start/)})?t:et+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,Fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(t)-1-a>6)switch(gt(t,a+1)){case 109:if(gt(t,a+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+ai+(gt(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~Hs(t,"stretch",0)?Zm(Le(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,g,x){return et+l+":"+d+x+(h?et+l+"-span:"+(f?g:+g-+d)+x:"")+t});case 4949:if(gt(t,a+6)===121)return Le(t,":",":"+Fe)+t;break;case 6444:switch(gt(t,gt(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(gt(t,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+et+"$2box$3")+t;case 100:return Le(t,":",":"+et)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function tl(t,a){for(var i="",s=0;s<t.length;s++)i+=a(t[s],s,t,a)||"";return i}function VC(t,a,i,s){switch(t.type){case AC:if(t.children.length)break;case $C:case TC:case Nu:return t.return=t.return||t.value;case qm:return"";case Vm:return t.return=t.value+"{"+tl(t.children,s)+"}";case gl:if(!_n(t.value=t.props.join(",")))return""}return _n(i=tl(t.children,s))?t.return=t.value+"{"+i+"}":""}function GC(t){var a=Qm(t);return function(i,s,l,d){for(var h="",f=0;f<a;f++)h+=t[f](i,s,l,d)||"";return h}}function YC(t){return function(a){a.root||(a=a.return)&&t(a)}}function QC(t,a,i,s){if(t.length>-1&&!t.return)switch(t.type){case Nu:t.return=Zm(t.value,t.length,i);return;case Vm:return tl([kr(t,{value:Le(t.value,"@","@"+Fe)})],s);case gl:if(t.length)return EC(i=t.props,function(l){switch(Xn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Do(kr(t,{props:[Le(l,/:(read-\w+)/,":"+ai+"$1")]})),Do(kr(t,{props:[l]})),Qd(t,{props:af(i,s)});break;case"::placeholder":Do(kr(t,{props:[Le(l,/:(plac\w+)/,":"+Fe+"input-$1")]})),Do(kr(t,{props:[Le(l,/:(plac\w+)/,":"+ai+"$1")]})),Do(kr(t,{props:[Le(l,/:(plac\w+)/,et+"input-$1")]})),Do(kr(t,{props:[l]})),Qd(t,{props:af(i,s)});break}return""})}}var Wo={},_d,Cd;const Go=typeof process<"u"&&Wo!==void 0&&(Wo.REACT_APP_SC_ATTR||Wo.SC_ATTR)||"data-styled",Xm="active",Jm="data-styled-version",wl="6.4.2",Ru=`/*!sc*/
`,ii=typeof window<"u"&&typeof document<"u";function cf(t){if(typeof process<"u"&&Wo!==void 0){const a=Wo[t];if(a!==void 0&&a!=="")return a!=="false"}}const KC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Cd=(_d=cf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&_d!==void 0?_d:cf("SC_DISABLE_SPEEDY"))!==null&&Cd!==void 0?Cd:typeof process<"u"&&Wo!==void 0&&!1),eg="sc-keyframes-",ZC={};function xi(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let Vs=new Map,nl=new Map,Gs=1;const ni=t=>{if(Vs.has(t))return Vs.get(t);for(;nl.has(Gs);)Gs++;const a=Gs++;return Vs.set(t,a),nl.set(a,t),a},XC=t=>nl.get(t),JC=(t,a)=>{Gs=a+1,Vs.set(t,a),nl.set(a,t)},Lu=Object.freeze([]),Yo=Object.freeze({});function tg(t,a,i=Yo){return t.theme!==i.theme&&t.theme||a||i.theme}const ej=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tj=/(^-|-$)/g;function ng(t){return t.replace(ej,"-").replace(tj,"")}const nj=/(a)(d)/gi,df=t=>String.fromCharCode(t+(t>25?39:97));function $u(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=df(a%52)+i;return(df(a%52)+i).replace(nj,"$1-$2")}const Zd=5381,Jr=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},rg=t=>Jr(Zd,t);function Tu(t){return $u(rg(t)>>>0)}function rj(t){return t.displayName||t.name||"Component"}function Xd(t){return typeof t=="string"&&!0}function oj(t){return Xd(t)?`styled.${t}`:`Styled(${rj(t)})`}const og=Symbol.for("react.memo"),aj=Symbol.for("react.forward_ref"),ij={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},sj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lj={[aj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[og]:ag};function uf(t){return("type"in(a=t)&&a.type.$$typeof)===og?ag:"$$typeof"in t?lj[t.$$typeof]:ij;var a}const cj=Object.defineProperty,dj=Object.getOwnPropertyNames,uj=Object.getOwnPropertySymbols,hj=Object.getOwnPropertyDescriptor,pj=Object.getPrototypeOf,fj=Object.prototype;function ig(t,a,i){if(typeof a!="string"){const s=pj(a);s&&s!==fj&&ig(t,s,i);const l=dj(a).concat(uj(a)),d=uf(t),h=uf(a);for(let f=0;f<l.length;++f){const g=l[f];if(!(g in sj||i&&i[g]||h&&g in h||d&&g in d)){const x=hj(a,g);try{cj(t,g,x)}catch{}}}}return t}function wi(t){return typeof t=="function"}const mj=Symbol.for("react.forward_ref");function Au(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===mj&&"styledComponentId"in t}function ri(t,a){return t&&a?t+" "+a:t||a||""}function rl(t,a){return t.join("")}function di(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Jd(t,a,i=!1){if(!i&&!di(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)t[s]=Jd(t[s],a[s]);else if(di(a))for(const s in a)t[s]=Jd(t[s],a[s]);return t}function Iu(t,a){Object.defineProperty(t,"toString",{value:a})}const gj=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;t>=h;)if(h<<=1,h<0)throw xi(16,`${t}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[t]++,i++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),s=i+a;this.groupSizes[t]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],s=this.indexOfGroup(t),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+Ru;return a}},vj=`style[${Go}][${Jm}="${wl}"]`,yj=new RegExp(`^${Go}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),hf=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,eu=t=>{if(!t)return document;if(hf(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(hf(a))return a}return document},xj=(t,a,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&t.registerName(a,l)},wj=(t,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(Ru),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const g=f.match(yj);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(JC(y,x),xj(t,y,g[3]),t.getTag().insertRules(x,l)),l.length=0}else l.push(f)}},jd=t=>{const a=eu(t.options.target).querySelectorAll(vj);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(Go)!==Xm&&(wj(t,l),l.parentNode&&l.parentNode.removeChild(l))}};let Ka=!1;function bj(){if(Ka!==!1)return Ka;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Ka=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Ka=a.getAttribute("content")||void 0}return Ka=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const sg=(t,a)=>{const i=document.head,s=t||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${Go}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(Go,Xm),l.setAttribute(Jm,wl);const f=a||bj();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},kj=class{constructor(t,a){this.element=sg(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw xi(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},_j=class{constructor(t,a){this.element=sg(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let pf=ii;const Cj={isServer:!ii,useCSSOMInjection:!KC};class bi{static registerId(a){return ni(a)}constructor(a=Yo,i={},s){this.options=Object.assign(Object.assign({},Cj),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&ii&&pf&&(pf=!1,jd(this)),Iu(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let g=0;g<h;g++){const x=XC(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=Go+".g"+g+'[id="'+x+'"]';let A="";for(const _ of y)_.length>0&&(A+=_+",");f+=w+k+'{content:"'+A+'"}'+Ru}return f})(this))}rehydrate(){!this.server&&ii&&jd(this)}reconstructWithOptions(a,i=!0){const s=new bi(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&ii&&a.target!==this.options.target&&eu(this.options.target)!==eu(a.target)&&jd(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new kj(s,l):new _j(s,l))(this.options),new gj(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){ni(a),a.startsWith(eg)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(ni(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(ni(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const lg=new WeakSet,jj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Sj(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in jj||t.startsWith("--")?String(a).trim():a+"px"}const Qr=47;function ff(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const cg=Symbol.for("sc-keyframes");function Nj(t){return typeof t=="object"&&t!==null&&cg in t}function dg(t){return wi(t)&&!(t.prototype&&t.prototype.isReactComponent)}const ug=t=>t==null||t===!1||t==="",Mj=Symbol.for("react.client.reference");function mf(t){return t.$$typeof===Mj}function hg(t,a){for(const i in t){const s=t[i];t.hasOwnProperty(i)&&!ug(s)&&(Array.isArray(s)&&lg.has(s)||wi(s)?a.push(ff(i)+":",s,";"):di(s)?(a.push(i+" {"),hg(s,a),a.push("}")):a.push(ff(i)+": "+Sj(i,s)+";"))}}function Mr(t,a,i,s,l=[]){if(ug(t))return l;const d=typeof t;if(d==="string")return l.push(t),l;if(d==="function"){if(mf(t))return l;if(dg(t)&&a){const h=t(a);return Mr(h,a,i,s,l)}return l.push(t),l}if(Array.isArray(t)){for(let h=0;h<t.length;h++)Mr(t[h],a,i,s,l);return l}return Au(t)?(l.push(`.${t.styledComponentId}`),l):Nj(t)?(i?(t.inject(i,s),l.push(t.getName(s))):l.push(t),l):mf(t)?l:di(t)?t.toString!==Object.prototype.toString?(l.push(t.toString()),l):(hg(t,l),l):(l.push(t.toString()),l)}const Rj=rg(wl);class Lj{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=Jr(Rj,i),this.baseStyle=s,bi.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(dg(f)){const g=f(a);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=rl(Mr(g,a,i,s)))}else d+=rl(Mr(f,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=$u(Jr(Jr(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const g=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,g)}l=ri(l,f)}}return l}}const $j=/&/g;function pg(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function Sd(t){const a=t.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let g=0;g<a;g++){const x=t.charCodeAt(g);if(d!==0||h||x!==Qr||t.charCodeAt(g+1)!==42)if(h)x===42&&t.charCodeAt(g+1)===Qr&&(h=!1,g++);else if(x!==34&&x!==39||pg(t,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){f=!0;let y=g+1;for(;y<a;){const w=t.charCodeAt(y);if(w===59||w===10)break;y++}y<a&&t.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=t.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=t.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return f||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=t.substring(s)),i):t}function fg(t,a){const i=a+" ",s=","+i;for(let l=0;l<t.length;l++){const d=t[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let g=0;g<h.length;g++)f[g]=i+h[g];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&fg(d.children,a)}return t}function Tj({options:t=Yo,plugins:a=Lu}=Yo){let i,s,l;const d=(k,A,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=a.slice();h.push(k=>{k.type===gl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace($j,s).replace(l,d))}),t.prefix&&h.push(QC),h.push(VC);let f=[];const g=GC(h.concat(YC(k=>f.push(k)))),x=(k,A="",_="",j="&")=>{i=j,s=A,l=void 0;const R=(function(S){const C=S.indexOf("//")!==-1,z=S.indexOf("}")!==-1;if(!C&&!z)return S;if(!C)return Sd(S);const L=S.length;let M="",N=0,I=0,D=0,G=0,F=0,H=!1;for(;I<L;){const Y=S.charCodeAt(I);if(Y!==34&&Y!==39||pg(S,I))if(D===0)if(Y===Qr&&I+1<L&&S.charCodeAt(I+1)===42){for(I+=2;I+1<L&&(S.charCodeAt(I)!==42||S.charCodeAt(I+1)!==Qr);)I++;I+=2}else if(Y!==40)if(Y!==41)if(G>0)I++;else if(Y===42&&I+1<L&&S.charCodeAt(I+1)===Qr)M+=S.substring(N,I),I+=2,N=I,H=!0;else if(Y===Qr&&I+1<L&&S.charCodeAt(I+1)===Qr){for(M+=S.substring(N,I);I<L&&S.charCodeAt(I)!==10;)I++;N=I,H=!0}else Y===123?F++:Y===125&&F--,I++;else G>0&&G--,I++;else G++,I++;else I++;else D===0?D=Y:D===Y&&(D=0),I++}return H?(N<L&&(M+=S.substring(N)),F===0?M:Sd(M)):F===0?S:Sd(S)})(k);let T=UC(_||A?_+" "+A+" { "+R+" }":R);return t.namespace&&(T=fg(T,t.namespace)),f=[],tl(T,g),f},y=t;let w=Zd;for(let k=0;k<a.length;k++)a[k].name||xi(15),w=Jr(w,a[k].name);return y!=null&&y.namespace&&(w=Jr(w,y.namespace)),y!=null&&y.prefix&&(w=Jr(w,"p")),x.hash=w!==Zd?w.toString():"",x}const Aj=new bi,tu=Tj(),mg=Qt.createContext({shouldForwardProp:void 0,styleSheet:Aj,stylis:tu,stylisPlugins:void 0});mg.Consumer;function gg(){return Qt.useContext(mg)}const Eu=Qt.createContext(void 0);Eu.Consumer;const gf=Object.prototype.hasOwnProperty,Nd={};function Ij(t,a){const i=typeof t!="string"?"sc":ng(t);Nd[i]=(Nd[i]||0)+1;const s=i+"-"+Tu(wl+i+Nd[i]);return a?a+"-"+s:s}function Ej(t,a,i){const s=Au(t),l=t,d=!Xd(t),{attrs:h=Lu,componentId:f=Ij(a.displayName,a.parentComponentId),displayName:g=oj(t)}=a,x=a.displayName&&a.componentId?ng(a.displayName)+"-"+a.componentId:a.componentId||f,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=a;if(s&&l.shouldForwardProp){const j=l.shouldForwardProp;if(a.shouldForwardProp){const R=a.shouldForwardProp;w=(T,S)=>j(T,S)&&R(T,S)}else w=j}const k=new Lj(i,x,s?l.componentStyle:void 0);function A(j,R){return(function(T,S,C){const{attrs:z,componentStyle:L,defaultProps:M,foldedComponentIds:N,styledComponentId:I,target:D}=T,G=Qt.useContext(Eu),F=gg(),H=T.shouldForwardProp||F.shouldForwardProp,Y=tg(S,G,M)||Yo;let Z,se;{const U=Qt.useRef(null),V=U.current;if(V!==null&&V[1]===Y&&V[2]===F.styleSheet&&V[3]===F.stylis&&V[7]===L&&(function(E,$,q){const K=E,ie=$;let he=0;for(const te in ie)if(gf.call(ie,te)&&(he++,K[te]!==ie[te]))return!1;return he===q})(V[0],S,V[4]))Z=V[5],se=V[6];else{Z=(function($,q,K){const ie=Object.assign(Object.assign({},q),{className:void 0,theme:K}),he=$.length>1;for(let te=0;te<$.length;te++){const O=$[te],ae=wi(O)?O(he?Object.assign({},ie):ie):O;for(const me in ae)me==="className"?ie.className=ri(ie.className,ae[me]):me==="style"?ie.style=Object.assign(Object.assign({},ie.style),ae[me]):me in q&&q[me]===void 0||(ie[me]=ae[me])}return"className"in q&&typeof q.className=="string"&&(ie.className=ri(ie.className,q.className)),ie})(z,S,Y),se=(function($,q,K,ie){return $.generateAndInjectStyles(q,K,ie)})(L,Z,F.styleSheet,F.stylis);let E=0;for(const $ in S)gf.call(S,$)&&E++;U.current=[S,Y,F.styleSheet,F.stylis,E,Z,se,L]}}const ne=Z.as||D,oe=(function(U,V,E,$){const q={};for(const K in U)U[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&U.theme===E||(K==="forwardedAs"?q.as=U.forwardedAs:$&&!$(K,V)||(q[K]=U[K]));return q})(Z,ne,Y,H);let J=ri(N,I);return se&&(J+=" "+se),Z.className&&(J+=" "+Z.className),oe[Xd(ne)&&ne.includes("-")?"class":"className"]=J,C&&(oe.ref=C),m.createElement(ne,oe)})(_,j,R)}A.displayName=g;let _=Qt.forwardRef(A);return _.attrs=y,_.componentStyle=k,_.displayName=g,_.shouldForwardProp=w,_.foldedComponentIds=s?ri(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=x,_.target=s?l.target:t,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=s?(function(R,...T){for(const S of T)Jd(R,S,!0);return R})({},l.defaultProps,j):j}}),Iu(_,()=>`.${_.styledComponentId}`),d&&ig(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var Pj=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function vf(t,a){const i=[t[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],t[s+1]);return i}const yf=t=>(lg.add(t),t);function Be(t,...a){if(wi(t)||di(t))return yf(Mr(vf(Lu,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Mr(i):yf(Mr(vf(i,a)))}function nu(t,a,i=Yo){if(!a)throw xi(1,a);const s=(l,...d)=>t(a,i,Be(l,...d));return s.attrs=l=>nu(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>nu(t,a,Object.assign(Object.assign({},i),l)),s}const vg=t=>nu(Ej,t),v=vg;Pj.forEach(t=>{v[t]=vg(t)});class zj{constructor(a,i){this.instanceRules=new Map,this.rules=a,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(wi(d)&&!Au(d))return!1}return!0})(a),bi.registerId(this.componentId)}removeStyles(a,i){this.instanceRules.delete(a),this.rebuildGroup(i)}renderStyles(a,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+a))this.instanceRules.has(a)||this.computeRules(a,i,s,l);else{const f=this.computeRules(a,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(a);if(this.computeRules(a,i,s,l),!s.server&&h){const f=h.rules,g=this.instanceRules.get(a).rules;if(f.length===g.length){let x=!0;for(let y=0;y<f.length;y++)if(f[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(a,i,s,l){const d=rl(Mr(this.rules,i,s,l)),h={name:this.componentId+a,rules:l(d,"")};return this.instanceRules.set(a,h),h}rebuildGroup(a){const i=this.componentId;a.clearRules(i);for(const s of this.instanceRules.values())a.insertRules(i,s.name,s.rules)}}function Oj(t,...a){const i=Be(t,...a),s=`sc-global-${Tu(JSON.stringify(i))}`,l=new zj(i,s),d=f=>{const g=gg(),x=Qt.useContext(Eu);let y;{const w=Qt.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,f,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,f,g.styleSheet,x,g.stylis,l],k=Qt.useRef(l);Qt.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,f,g.styleSheet,x,g.stylis))},w),Qt.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(f,g,x,y,w){if(l.isStatic)l.renderStyles(f,ZC,x,w);else{const k=Object.assign(Object.assign({},g),{theme:tg(g,y,d.defaultProps)});l.renderStyles(f,k,x,w)}}return Qt.memo(d)}var yg;class Dj{constructor(a,i){this[yg]=!0,this.inject=(s,l=tu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=a,this.id=eg+a,this.rules=i,ni(this.id),Iu(this,()=>{throw xi(12,String(this.name))})}getName(a=tu){return a.hash?this.name+$u(+a.hash>>>0):this.name}}function je(t,...a){const i=rl(Be(t,...a)),s=Tu(i);return new Dj(s,i)}yg=cg;const On=(t,a,i)=>Math.max(a,Math.min(i,t)),Pu=t=>(t=On(t,0,1),t*t*(3-2*t)),ra=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function En(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function ru(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function xf(t,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return ru(s);t.fillStyle="#000",t.fillStyle=s;const d=t.fillStyle;if(d.startsWith("#"))return ru(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function Fj(){const[t,a]=m.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return m.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),t}function Bj(t){const[a,i,s]=t.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function Wj(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Gr=["234,54,38","246,112,44","252,172,54","255,212,76"],Hj="176,58,32",Uj="198,158,52";function Jn(t,a,i){const s=t.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function so(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=t.size<24,w=On(t.alert??0,0,1),k=(S,C)=>S+(C-S)*w,A=.85+.15*Math.sin(a*2.2);if(!y&&t.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,x*3);S.addColorStop(0,"rgba("+i.core+",0.55)"),S.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const S=x*k(3.2,3),C=s.createRadialGradient(h,f,0,h,f,S);C.addColorStop(0,"rgba("+Jn(i.core,Gr[1],w)+","+k(.34,.85*A)+")"),C.addColorStop(.5,"rgba("+Jn(i.core,Gr[2],w)+","+k(.13,.42*A)+")"),C.addColorStop(1,"rgba("+Jn(i.core,Gr[3],w)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,j=Math.max(.8,x*k(1,1.5)),R=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const T=s.createRadialGradient(h-R,f-R,0,h,f,j);T.addColorStop(0,"rgba("+Jn(i.core,Gr[0],w)+","+k(_,1)+")"),T.addColorStop(.5,"rgba("+Jn(i.core,Gr[1],w)+","+k(_,1)+")"),T.addColorStop(.82,"rgba("+Jn(i.core,Gr[2],w)+","+k(_,.97)+")"),T.addColorStop(1,"rgba("+Jn(i.core,Gr[3],w)+","+k(_,.72)+")"),s.fillStyle=T,s.beginPath(),s.arc(h,f,j,0,6.2832),s.fill(),s.restore()}function xg(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=t.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=a*(x?.5:.16),k=.42,A=Math.cos(k),_=Math.sin(k),j=Math.cos(w),R=Math.sin(w),T=g*.96,S=(D,G,F)=>{const H=D*j+F*R,Y=-D*R+F*j,Z=G,se=Z*A-Y*_,oe=(Z*_+Y*A+1)/2,J=.82+.18*oe;return{x:h+H*T*J,y:f+se*T*J,d:oe}},C=(D,G,F)=>{const H=Math.cos(D),Y=Math.sin(D)*Math.cos(G),Z=Math.sin(D)*Math.sin(G);return[H*Math.cos(F)+Z*Math.sin(F),Y,-H*Math.sin(F)+Z*Math.cos(F)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const z=t.size>=24?64:40,L=x?.9:.3,M=z,N=5.6,I=[];for(let D=0;D<y.length;D++){const G=y[D][0],F=y[D][1],H=se=>{const ne=C(se,G,F);return S(ne[0],ne[1],ne[2])},Y=D%2?1:-1,Z=D*2+Y*a*L;I.push({ptOf:H,head:Z,dir:Y,hp:H(Z)})}I.sort((D,G)=>D.hp.d-G.hp.d);for(const D of I){const G=Math.max(1.2,g*.05)*(.75+.35*D.hp.d),F=.66*(.45+.55*D.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let H=D.ptOf(D.head);for(let se=1;se<=M;se++){const ne=se/M,oe=1-ne,J=F*oe*oe,U=D.ptOf(D.head-D.dir*ne*N);J>.004&&(s.strokeStyle="rgba("+i.dot+","+J+")",s.beginPath(),s.moveTo(H.x,H.y),s.lineTo(U.x,U.y),s.stroke()),H=U}s.restore();const Y=Math.max(.9,g*.062*ra(t.size)*(.65+.5*D.hp.d)),Z=.45+.55*D.hp.d;if(i.glow){const se=s.createRadialGradient(D.hp.x,D.hp.y,0,D.hp.x,D.hp.y,Y*4.5);se.addColorStop(0,"rgba("+i.accent+","+.3*Z+")"),se.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=se,s.beginPath(),s.arc(D.hp.x,D.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Z+.1)+")",s.beginPath(),s.arc(D.hp.x,D.hp.y,Y,0,6.2832),s.fill()}so(t,a,i),s.restore()}function qj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=t.state!=="idle",y=[g*.92],w=y.length,k=1,A=x?.9:.3,_=t.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<w;j++){const R=y[j],T=j%2?1:-1,S=6.2832/k,C=Math.min(5.6,S*.92);for(let z=0;z<k;z++){const L=j*2+T*a*A+z*S,M=h+Math.cos(L)*R,N=f+Math.sin(L)*R;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let I=M,D=N;for(let F=1;F<=_;F++){const H=F/_,Y=.62*(1-H)*(1-H),Z=L-T*H*C,se=h+Math.cos(Z)*R,ne=f+Math.sin(Z)*R;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(I,D),s.lineTo(se,ne),s.stroke()),I=se,D=ne}s.restore();const G=Math.max(.9,g*.062*ra(t.size));if(i.glow){const F=s.createRadialGradient(M,N,0,M,N,G*4.5);F.addColorStop(0,"rgba("+i.accent+",0.3)"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=F,s.beginPath(),s.arc(M,N,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(M,N,G,0,6.2832),s.fill()}}so(t,a,i),s.restore()}function wf(t,a,i){const{ctx:s,w:l,h:d,dpr:h}=t,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=t.state!=="idle",w=On(t.alert??0,0,1),k=x*.82,A=(U,V)=>Jn(i.dot,Jn(Hj,Uj,On(Math.hypot(U-f,V-g)/k,0,1)),w),_=t.size>=120,j=_?22:t.size>=32?10:t.size>=20?7:5,R=y?a*.55:a*.22,T=Math.cos(R),S=Math.sin(R),C=.42,z=Math.cos(C),L=Math.sin(C);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const U=s.createRadialGradient(f,g,0,f,g,x*1.02);U.addColorStop(0,"rgba("+i.accent+",0.10)"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(f,g,x*1.02,0,6.2832),s.fill()}const M=[];for(let U=0;U<j;U++){const V=1-(U+.5)/j*2,E=Math.sqrt(Math.max(0,1-V*V)),$=U*2.39996,q=Math.cos($)*E,K=V,ie=Math.sin($)*E,he=q*T+ie*S,te=-q*S+ie*T,O=K*z-te*L,ae=K*L+te*z,me=(ae+1)/2,de=.82+.18*me;M.push({x:f+he*k*de,y:g+O*k*de,d:me,k:U,vec:[he,O,ae]})}M.sort((U,V)=>U.d-V.d);const N=U=>{const V=(U[2]+1)/2,E=.82+.18*V;return{x:f+U[0]*k*E,y:g+U[1]*k*E,d:V}},I=(U,V,E)=>{let $=U[0]*V[0]+U[1]*V[1]+U[2]*V[2];$=On($,-1,1);const q=Math.acos($);if(q<.001)return[U[0],U[1],U[2]];const K=Math.sin(q),ie=Math.sin((1-E)*q)/K,he=Math.sin(E*q)/K;return[U[0]*ie+V[0]*he,U[1]*ie+V[1]*he,U[2]*ie+V[2]*he]},D={};for(const U of M)D[U.k]=U;const F=a*(y?1.4:.5),H=Math.floor(F),Y=F-H,Z=5,se=12;s.lineCap="round",s.lineJoin="round";const ne=[1.7,9.3,21.5,34.8,48.2],oe=On(Math.round(t.streamCount??(_?5:4)),0,ne.length),J=ne.slice(0,oe).map(U=>({seed:U}));for(const U of J){const V=$=>{const q=Math.sin($*12.9898+U.seed)*43758.5453;return Math.floor((q-Math.floor(q))*j)},E=$=>{let q=V($);return q===V($-1)&&(q=(q+1)%j),D[q]};for(let $=Z-1;$>=0;$--){const q=H-$;if(q<0)continue;const K=E(q),ie=E(q+1);if(!K||!ie||K===ie)continue;const he=$===0?Y:1,te=N(I(K.vec,ie.vec,he)),O=(K.d+te.d)/2,ae=$===0?1:On(1-($-1+Y)/(Z-1),0,1),me=(i.glow?.6:.72)*ae*(.4+.6*O);if(me<.02)continue;const de=s.createLinearGradient(K.x,K.y,te.x,te.y);de.addColorStop(0,"rgba("+A(K.x,K.y)+",0)"),de.addColorStop(1,"rgba("+A(te.x,te.y)+","+me+")"),s.strokeStyle=de,s.lineWidth=(_?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*O),s.beginPath();for(let fe=0;fe<=se;fe++){const ke=N(I(K.vec,ie.vec,he*(fe/se)));fe===0?s.moveTo(ke.x,ke.y):s.lineTo(ke.x,ke.y)}s.stroke()}}for(const U of M){const V=.5+.5*Math.sin(a*2-U.k*.9),E=(.18+.82*U.d)*(.62+.38*V),$=_?Math.max(.5,(.9+.9*U.d)*h*(.85+.15*V)):x*.058*ra(t.size)*(.6+.5*U.d);if(i.glow){const q=$*4,K=s.createRadialGradient(U.x,U.y,0,U.x,U.y,q);K.addColorStop(0,"rgba("+i.accent+","+.24*E+")"),K.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=K,s.beginPath(),s.arc(U.x,U.y,q,0,6.2832),s.fill()}s.fillStyle="rgba("+A(U.x,U.y)+","+(.32+.68*E)+")",s.beginPath(),s.arc(U.x,U.y,Math.max(.9,$),0,6.2832),s.fill()}_&&wg(t,a,i,A),so(t,a,i),s.restore()}function wg(t,a,i,s){const{ctx:l,w:d,h,dpr:f}=t,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=t.state!=="idle"?1:.4;for(let A=0;A<46;A++){const _=En(A*5.1)<.5?-1:1,j=En(A*1.7)*6.2832+a*(.3+En(A*3.1)*.6)*_*k,R=y*(.04+.05*En(A*4.7))*Math.sin(a*(.8+En(A*6)*1)+En(A*7)*6.28),T=y*(.5+En(A*2.3)*.5)+R,S=g+Math.cos(j)*T,C=x+Math.sin(j)*T,z=.3+.7*(.5+.5*Math.sin(a*(1.4+En(A)*2)+En(A*2)*6.28)),L=Math.max(.5,(.4+En(A*8)*1)*f*(.55+.6*z));if(i.glow){const M=L*6,N=l.createRadialGradient(S,C,0,S,C,M);N.addColorStop(0,"rgba("+i.accent+","+z*.18+")"),N.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=N,l.beginPath(),l.arc(S,C,M,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,C)+","+z*(i.glow?.8:.42)+")",l.beginPath(),l.arc(S,C,L,0,6.2832),l.fill()}}function Vj(t,a,i){const{ctx:s,w:l,h:d,dpr:h}=t,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=t.state!=="idle",w=t.size>=32?11:7,k=x*.12,A=x*.12,_=Pu(.5+.5*Math.sin(a*(y?1:.55))),j=y?.34+.66*_:.5+.12*_,R=Math.max(1*h,x*.052),T=-a*(y?.5:.16),S=Math.cos(T),C=Math.sin(T),z=.42,L=Math.cos(z),M=Math.sin(z);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const N=x*(.52+.44*j),I=Math.max(k+R,N-A),D=[];for(let G=0;G<w;G++){const F=1-(G+.5)/w*2,H=Math.sqrt(Math.max(0,1-F*F)),Y=G*2.39996,Z=Math.cos(Y)*H,se=F,ne=Math.sin(Y)*H,oe=Z*S+ne*C,J=-Z*C+ne*S,U=se*L-J*M,E=(se*M+J*L+1)/2,$=.82+.18*E,q=.5+.5*Math.sin(a*1.6+G*1.3);D.push({x0:f+oe*k*$,y0:g+U*k*$,x1:f+oe*I*$,y1:g+U*I*$,cx2:f+oe*N*$,cy2:g+U*N*$,d:E,shim:q})}D.sort((G,F)=>G.d-F.d);for(const G of D){const F=(y?.4+.45*j:.6)*(.4+.6*G.d)*(.78+.22*G.shim),H=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);H.addColorStop(0,"rgba("+i.dot+","+F+")"),H.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=H,s.lineWidth=R*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*ra(t.size)*(.85+.3*j)*(.6+.5*G.d));if(i.glow){const Z=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);Z.addColorStop(0,"rgba("+i.accent+","+.26*F+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,F+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}t.size>=120&&wg(t,a,i,()=>i.dot),so(t,a,i),s.restore()}function Gj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=t.state!=="idle",y=t.size>=32?58:t.size>=20?32:18,w=g*.78,k=x?a*.5:a*.2,A=Math.cos(k),_=Math.sin(k),j=.42,R=Math.cos(j),T=Math.sin(j),S=x?1:.4,C=(N,I)=>[Math.sin(N)*Math.cos(I),Math.cos(N),Math.sin(N)*Math.sin(I)],z=[C(1.4+.5*Math.sin(a*.5*S),a*.6*S),C(1.9+.4*Math.cos(a*.4*S),-a*.5*S+2)],L=.36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const M=[];for(let N=0;N<y;N++){const I=1-(N+.5)/y*2,D=Math.sqrt(Math.max(0,1-I*I)),G=N*2.39996,F=Math.cos(G)*D,H=I,Y=Math.sin(G)*D;let Z=0;for(const E of z){const $=F-E[0],q=H-E[1],K=Y-E[2];Z+=Math.exp(-($*$+q*q+K*K)/(2*L*L))}Z=On(Z,0,1);const se=F*A+Y*_,ne=-F*_+Y*A,oe=H*R-ne*T,U=(H*T+ne*R+1)/2,V=.82+.18*U;M.push({x:h+se*w*V,y:f+oe*w*V,d:U,inf:Z})}M.sort((N,I)=>N.d-I.d);for(const N of M){const I=Pu(N.inf),D=Math.max(.6,g*(.05+.06*I)*ra(t.size)*(.55+.5*N.d)),G=(.16+.84*N.d)*(.45+.55*I),F=Math.abs(2*N.d-1),H=Math.atan2(N.y-f,N.x-h);s.fillStyle="rgba("+i.dot+","+G+")",s.beginPath(),s.ellipse(N.x,N.y,Math.max(.35,D*F),D,H,0,6.2832),s.fill()}so(t,a,i),s.restore()}function Yj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=t.state!=="idle",y=t.size>=32?8:t.size>=20?6:5,w=g*.9,k=x?1:.4,A=a*(x?.3:.12),_=a*1*k,j=-a*.7*k+2.2,R=.72,T=(S,C)=>{const z=((S-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(z)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<y;S++){const C=S/y*6.2832+A;let z=Math.exp(-(T(C,_)**2)/(2*R*R))+Math.exp(-(T(C,j)**2)/(2*R*R));z=On(z,0,1);const L=Pu(z),M=h+Math.cos(C)*w,N=f+Math.sin(C)*w,I=Math.max(.6,g*(.05+.07*L)*ra(t.size)),D=.38+.62*L;if(i.glow&&L>.25){const G=s.createRadialGradient(M,N,0,M,N,I*4);G.addColorStop(0,"rgba("+i.accent+","+.24*L+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(M,N,I*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+D+")",s.beginPath(),s.arc(M,N,I,0,6.2832),s.fill()}so(t,a,i),s.restore()}function Qj(t,a,i){so(t,a,i)}const Kj={orbit:xg,orbit2d:qj,circle:wf,lines:Vj,magnetic:Gj,magnetic2d:Yj,pulse:Qj,bands:wf};function pt({mark:t="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:f=!0,coreGradient:g=!1,streamCount:x,className:y,"aria-label":w}){const k=m.useRef(null),A=Fj(),_=m.useRef(0),j=m.useRef(0);return j.current=g?1:0,m.useEffect(()=>{const R=k.current;if(!R)return;const T=R.getContext("2d");if(!T)return;const S=Math.min(2,window.devicePixelRatio||1),C=Math.max(2,Math.round(a*S)),z=C;R.width=C,R.height=z;const L={ctx:T,w:C,h:z,dpr:S,size:a,state:s,coreHalo:f,alert:_.current,streamCount:x},M=i==="auto"?Bj(xf(T,R,"var(--color-bg-primary)"))<.5?"dark":"light":i,N=Wj(M,ru(d));if(h){const Z=xf(T,R,h);N.dot=Z,N.core=Z}const I=Kj[t]??xg,D=Z=>{_.current+=(j.current-_.current)*.06,Math.abs(_.current-j.current)<.001&&(_.current=j.current),L.alert=_.current,T.clearRect(0,0,C,z),I(L,s==="static"?.62:Z,N)},G=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),F=On(l,.4,3);if((G||s==="static")&&(_.current=j.current),D(1.15),G||s==="static")return;let H=0;const Y=Z=>{D(Z/1e3*F),H=requestAnimationFrame(Y)};return H=requestAnimationFrame(Y),()=>cancelAnimationFrame(H)},[t,a,i,s,l,d,h,f,g,x,A]),r.jsx("canvas",{ref:k,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:y,role:"img","aria-label":w})}const Qo={high:0,medium:1,low:2,none:3};v.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function bl(t){return t.status==="resolved"||t.status==="auto_resolved"||t.status==="workflow_available"?"green":t.status==="analyzing"?"slate":t.status==="in_progress"||t.status==="monitoring"?"blue":t.severity==="high"?"orange":"slate"}v.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function Zj(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const bg=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,kg=t=>/^(review|adjust|revisit|update)\b/i.test(t),Xj=["Revisit","Update","Resolve"],Jj=t=>/,|\sand\s/.test(t),eS="Approve all",ol="Yes",_g=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};v.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;function tS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function nS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function rS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function oS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function aS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function iS({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function al({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function sS({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function lS({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function cS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function oo({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function dS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function uS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function hS({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function bf({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Md=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Ko={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},Cg={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function jg(t){const a=Cg[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function Sg(t){const a=Ko[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",l=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${l}`}const Ng={missed_clockin_james:"james_okoro_2"},zu=t=>`https://i.pravatar.cc/80?u=${Ng[t]??t}`,oa=t=>`https://i.pravatar.cc/80?u=${Ng[t]??t}`,pS={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},fS=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],Mg=t=>pS[t]??fS,Rg={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},kf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Ou={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},mS={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Du={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},gS={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},vS={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Rd={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function Lg(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return gS[t.id]??t.timeline.map(i=>{var d;const s=((d=Rd[i.state])==null?void 0:d.call(Rd,t))??t.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:vS[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const bt=(t,a,i)=>({name:t,match:a,distance:i}),Ee=(t,a,i,s,l,d)=>({seed:t,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),_f=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],yS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],xS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],wS=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],$g="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",Yr=t=>({from:"ultron",text:$g,time:t}),bS={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:_f,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[bt("Jordan Pierce","4.9 match","3.2 mi"),bt("Aisha Karim","4.7 match","5.1 mi"),bt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:$g,total:20,threads:[Ee("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[Yr("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ee("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[Yr("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ee("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[Yr("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ee("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[Yr("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ee("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[Yr("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ee("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[Yr("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ee("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[Yr("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:yS,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[bt("Renee Wallace","4.9 match","2.4 mi"),bt("Carl Jensen","4.6 match","4.1 mi"),bt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ee("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ee("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:xS,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[bt("Dane Mercer","4.8 match","2.1 mi"),bt("Omar Reyes","4.6 match","3.7 mi"),bt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ee("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ee("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ee("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:wS,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Jamal Carter","4.7 match","1.8 mi"),bt("Sara Lindqvist","4.6 match","2.9 mi"),bt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ee("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ee("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ee("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Theo Park","4.7 match","1.9 mi"),bt("Gina Holt","4.5 match","3.3 mi"),bt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ee("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ee("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ee("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ee("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[bt("Carl Jensen","4.7 match","2.6 mi"),bt("Tina Boyd","4.5 match","3.9 mi"),bt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ee("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ee("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ee("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ee("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ee("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ee("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ee("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ee("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ee("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ee("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ee("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ee("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ee("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:_f,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ee("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ee("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},kS={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},_S=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",Cf=t=>/in-app/i.test(t)?"In-app":/sms/i.test(t)?"SMS":"Preferred channel",jf=t=>t.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),CS={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},ou=t=>{const[a,...i]=t.split(" "),s=CS[a];return s?`Will ${s} ${i.join(" ")}`:t};function jS(t,a){if(t==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${_S(i.name)}", template="shift_offer", to=matched)`,summary:`${ou(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${ou(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function SS(t,a,i,s){var A,_,j,R;if(t==="read"){const T=((A=a.update)==null?void 0:A.recordType)??((_=a.updateClose)==null?void 0:_.recordType);if(!T)return null;const S=T.toLowerCase(),C=[{label:"Type",value:T},{label:"Time",value:((j=Cg[s])==null?void 0:j.shiftTime)??""},{label:"User",value:Ko[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${T}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${T}") → current_state`,recordDetails:C,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(t==="match"||t==="credential"||t==="incentive"){const T=(R=a.policy)==null?void 0:R.eligible;if(!T)return null;const S=T.unit.replace(/^eligible\s+/i,"");if(t==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${T.total} ${T.unit}.`};if(t==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=T.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${T.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${T.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${T.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(t==="task"){if(!a.task)return null;const{description:T,query:S,fields:C}=a.task;return{icon:"task",name:"Tasks",description:T,query:S,task:{fields:C}}}if(t==="update"||t==="update-close"){const T=t==="update"?a.update:a.updateClose;if(!T)return null;const{description:S,...C}=T;return{icon:"record",name:"Update Data",description:S,updateData:C}}const l=t==="notify"||t==="notify-scheduler",d=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,h=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!h||!!d))return null;const g=t==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=t==="policy"?a.policy.description:l?d.description:h.description,y=t==="policy"?"shield":l?"bell":"message";if(i==="planning"){const T=t==="policy"?x:ou(x),S={icon:y,name:g,description:T,...jS(t,a)};return l?{...S,channel:jf(d.channel),message:d.message}:h?{...S,channel:Cf(h.name),message:h.message}:t==="policy"?{...S,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:S}if(t==="policy")return{icon:y,name:g,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:Cf(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:jf(d.channel),notification:k}}function Tg(t,a,i="execution"){const s=bS[t];return s?a.map(l=>SS(l,s,i,t)).filter(l=>l!==null):[]}const NS=t=>t.tools??kS[t.icon]??["policy"],zs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function MS(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const Ag={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Sf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Fu(t,a){return Sf[a%Sf.length]}function RS(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function LS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function Ig({record:t}){const a=t.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?t.meta.filter(l=>l!==a):t.meta;return r.jsxs($S,{children:[r.jsx(Nn,{size:"md",src:zu(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(TS,{children:[r.jsx(AS,{children:t.title}),r.jsx(IS,{children:[t.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(ES,{"data-tone":LS(i),children:[i,"% match"]}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(gu,{size:16})})]})}const $S=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,TS=v.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,AS=v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,IS=v.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,ES=v.span`
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
`,Nf=t=>t.id.startsWith("detected_"),Mf=5400,Rf=1100;function PS(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:Ag[i.id]??i.outcome}:i)}}const zS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function OS(){const[t,a]=m.useReducer(PS,Md),[i,s]=m.useState(()=>{var q;const $=Md.find(K=>K.status==="needs_approval"||K.status==="recommended");return($==null?void 0:$.id)??((q=Md[0])==null?void 0:q.id)??null}),[l,d]=m.useState([]),h=$=>{s($),d(q=>q.includes($)?q:[...q,$])},f=m.useMemo(()=>{const $=t.map((q,K)=>({item:q,index:K}));return zS.map(q=>({id:q.id,label:q.label,threads:$.filter(K=>q.statuses.includes(K.item.status)).sort((K,ie)=>(K.item.status==="analyzing"?1:0)-(ie.item.status==="analyzing"?1:0)||(Nf(ie.item)?1:0)-(Nf(K.item)?1:0)||Qo[K.item.severity]-Qo[ie.item.severity]||K.index-ie.index).map(K=>K.item)}))},[t]),g=t.find($=>$.id===i)??null,[x,y]=m.useState({}),w=i?x[i]??0:0,[k,A]=m.useState([]),[_,j]=m.useState({}),[R,T]=m.useState({}),[S,C]=m.useState([]),z=m.useRef({}),[L,M]=m.useState([]),N=$=>{M(q=>q.includes($)?q.filter(K=>K!==$):[...q,$])},[I,D]=m.useState([]),G=$=>{D(q=>q.includes($)?q:[...q,$])},[F,H]=m.useState([]);return{threads:t,groups:f,selectedId:i,selectedThread:g,selectedStage:w,stageById:x,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:R,replyingIds:S,setSelectedId:h,detectRisk:$=>{a({type:"detect",thread:MS($)})},decide:$=>{h($),A(q=>q.includes($)?q:[...q,$]),a({type:"decide",threadId:$})},commit:($,q)=>{h($),j(K=>({...K,[$]:[...K[$]??[],q]})),a({type:"commit",threadId:$})},completeRun:$=>{const q=x[$]??0,K=Ou[$];q===0&&K?(y(ie=>({...ie,[$]:1})),a({type:"reopen",threadId:$})):(a({type:"resolve",threadId:$}),L.includes($)&&(G($),M(ie=>ie.filter(he=>he!==$))))},sendMessage:($,q)=>{const K=q.trim();if(!K)return;h($),T(he=>({...he,[$]:[...he[$]??[],{role:"operator",text:K}]})),C(he=>he.includes($)?he:[...he,$]);const ie=window.setTimeout(()=>{T(he=>{const te=he[$]??[],O=te.filter(ae=>ae.role==="ultron").length;return{...he,[$]:[...te,{role:"ultron",text:Fu(K,O)}]}}),C(he=>he.filter(te=>te!==$)),delete z.current[$]},Rf);z.current[$]=ie},stopReply:$=>{const q=z.current[$];q&&(window.clearTimeout(q),delete z.current[$]),C(K=>K.filter(ie=>ie!==$))},refine:$=>{},saveWorkflow:$=>{const q=$.id;h(q),T(ie=>({...ie,[q]:[...ie[q]??[],{role:"operator",text:"Save as workflow"}]})),C(ie=>ie.includes(q)?ie:[...ie,q]);const K=window.setTimeout(()=>{T(ie=>({...ie,[q]:[...ie[q]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(q),C(ie=>ie.filter(he=>he!==q)),delete z.current[q]},Rf);z.current[q]=K},pendingWorkflowIds:L,toggleWorkflowSave:N,savedWorkflowIds:I,markWorkflowSaved:G,revealedNewIds:F,revealNew:$=>H(q=>q.includes($)?q:[...q,$])}}const DS={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function FS(t,a){const i=DS[t];return!i||a==="plan"?t:a==="done"?i.done:i.working}const BS={search:Zs,read:Zs,message:el,policy:Zr,shield:Zr,schedule:Zr,analytics:x6,clock:Sn,monitor:vi,bell:el,record:jr,task:Zr},WS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},HS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:WS[t.icon]??t.name,US=t=>t.tone==="positive"?"success":t.tone==="chatting"?"info":"neutral",Lf={positive:0,chatting:1,muted:2},qS=v(Sm)`
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
`,VS=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Bu=240;function GS({open:t,onClose:a,title:i="Run details",usage:s}){const[l,d]=m.useState(()=>s.length?"0":""),[h,f]=m.useState(t),[g,x]=m.useState(!1);if(m.useEffect(()=>{if(t){f(!0);let _=0;const j=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(j),cancelAnimationFrame(_)}}x(!1);const A=setTimeout(()=>f(!1),Bu);return()=>clearTimeout(A)},[t]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((A,_)=>({entry:A,index:_}));return fi.createPortal(r.jsxs(oN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(aN,{$shown:g,onClick:a}),r.jsxs(iN,{$shown:g,children:[r.jsxs(sN,{children:[r.jsxs(lN,{children:[r.jsx(cN,{children:i}),r.jsx(dN,{children:w})]}),r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(si,{size:18})})]}),r.jsxs(uN,{children:[r.jsx(hN,{"aria-hidden":"true"}),r.jsx(jm,{type:"single",collapsible:!0,value:l,onValueChange:A=>d(typeof A=="string"?A:""),children:k.map(({entry:A,index:_})=>{const j=A.updateData?fm:BS[A.icon];return r.jsx(qS,{value:String(_),label:HS(A),description:A.description,leadingSlot:r.jsx(VS,{"aria-hidden":"true",children:r.jsx(j,{size:18})}),children:r.jsx(pN,{children:r.jsx(YS,{entry:A})})},_)})})]})]})]}),document.body)}function YS({entry:t}){return r.jsxs(r.Fragment,{children:[t.channel&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Channel"}),r.jsx(Ef,{children:t.channel})]}),t.message&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(Tf,{children:t.message})]}),t.recordDetails&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Record details"}),r.jsx(Ld,{children:t.recordDetails.map((a,i)=>r.jsx(on,{size:"sm",label:a.label,trailingSlot:r.jsx($d,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.policies&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(SN,{children:t.policies.items.map((a,i)=>r.jsxs(NN,{children:[r.jsx(MN,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(QS,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Threads · ${t.threads.total}`}),r.jsx(tN,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(rn,{children:[r.jsx(Ot,{children:"Recipient"}),r.jsx(RN,{children:r.jsx(on,{size:"md",divider:!1,leadingSlot:r.jsx(Nn,{size:"sm",src:oa(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:t.notification.role,trailingSlot:r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(ml,{size:14})})})})]}),r.jsxs(rn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(Tf,{children:t.notification.message})]})]}),t.task&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Task"}),r.jsx(Ld,{children:t.task.fields.map((a,i)=>r.jsx(on,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(li,{status:"success",size:"sm",children:a.value}):r.jsx($d,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.updateData&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Record details"}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(Ld,{children:a.map((s,l)=>r.jsx(on,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(KS,{children:[r.jsx(ZS,{children:s.previousValue}),r.jsx(XS,{"aria-hidden":"true",children:"→"}),r.jsx(JS,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(li,{status:"success",size:"sm",children:s.value}):r.jsx($d,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),t.recommendation&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Recommendation"}),r.jsxs(LN,{children:[r.jsxs(Af,{children:[r.jsx(If,{children:"Incentive?"}),r.jsx($N,{$add:t.recommendation.add,children:t.recommendation.add?t.recommendation.amount:"No bonus"})]}),r.jsxs(Af,{children:[r.jsx(If,{children:"Reason"}),r.jsx(TN,{children:t.recommendation.rationale})]})]})]}),t.query&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Query"}),r.jsx(fN,{children:t.query})]}),t.summary&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"What it does"}),r.jsx(Ef,{children:t.summary})]})]})}function QS({candidates:t,total:a,moreNoun:i}){var y;const[s,l]=m.useState(!1),d=t.slice(0,3),h=a-d.length,f=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>eN(k,f)):[],x=[...d,...g];return r.jsxs(r.Fragment,{children:[r.jsx(Wu,{children:x.map((w,k)=>r.jsx(on,{size:"sm",leadingSlot:r.jsx(Nn,{size:"sm",src:oa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:r.jsx(vN,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&r.jsx(Eg,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Wu=v.div`
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
`,Ld=v(Wu)`
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
`,$d=v.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${t=>t.$placeholder?"var(--color-content-disabled)":t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,KS=v.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,ZS=v.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,XS=v.span`
  color: var(--color-content-tertiary);
`,JS=v.span`
  color: var(--color-success-content);
`,il=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],sl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function eN(t,a){const i=il[t%il.length],s=sl[(t*7+3)%sl.length],l=Math.max(3,a-(t+1)*.1),d=(4+t*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const $f=3;function tN({threads:t}){const[a,i]=m.useState(!1),[s,l]=m.useState(null),d=[...t.items].sort((y,w)=>Lf[y.tone]-Lf[w.tone]),h=Math.max(0,t.total-d.length),f=[...d,...Array.from({length:h},(y,w)=>rN(w))],g=a?f:f.slice(0,$f),x=f.length-$f;return r.jsxs(r.Fragment,{children:[r.jsx(Wu,{children:g.map((y,w)=>{var j;const k=!!((j=y.conversation)!=null&&j.length),A=`${y.name}-${w}`,_=k&&s===A;return r.jsxs(yN,{"data-open":_||void 0,children:[r.jsx(on,{size:"md",interactive:k,onClick:k?()=>l(_?null:A):void 0,"aria-expanded":k?_:void 0,leadingSlot:r.jsx(Nn,{size:"sm",src:oa(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:r.jsxs(jN,{children:[r.jsx(li,{status:US(y),size:"sm",children:y.status}),k?r.jsx(xN,{"data-open":_||void 0,children:r.jsx(er,{size:16})}):r.jsx(an,{size:16})]})}),_&&r.jsx(nN,{messages:y.conversation})]},A)})}),x>0&&r.jsx(Eg,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${x} more ${t.moreNoun}`})]})}function nN({messages:t}){return r.jsx(bN,{children:t.map((a,i)=>r.jsxs(kN,{$from:a.from,children:[r.jsx(_N,{children:a.text}),r.jsx(CN,{children:a.time})]},i))})}function rN(t){const a=il[t%il.length],i=sl[(t*7+3)%sl.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const oN=v.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,aN=v.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${t=>t.$shown?.45:0};
  transition: opacity ${Bu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,iN=v.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${t=>t.$shown?"0":"100%"});
  transition: transform ${Bu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,sN=v.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,lN=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,cN=v.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,dN=v.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,uN=v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,hN=v.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,pN=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,rn=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function fN({children:t}){const[a,i]=m.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(t),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(mN,{children:[r.jsx(gN,{children:t}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(Dt,{size:14}):r.jsx(hm,{size:14})})]})}const mN=v.div`
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
`,gN=v.pre`
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
`,vN=v.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,yN=v.div``,xN=v.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,wN=je`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,bN=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${wN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kN=v.div`
  max-width: 80%;
  align-self: ${t=>t.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${t=>t.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${t=>t.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${t=>t.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,_N=v.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,CN=v.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,jN=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,Eg=v.button`
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
`,SN=v.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,NN=v.li`
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
`,MN=v.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,Tf=v.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,RN=v.div`
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
`,LN=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Af=v.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,If=v.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,$N=v.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${t=>t.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,TN=v.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Ef=v.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function AN({milestones:t}){return r.jsx(WN,{children:t.map((a,i)=>r.jsx(zN,{milestone:a,last:i===t.length-1},i))})}function Pg({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:g,reasoning:x}){return r.jsx(IN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:g,reasoning:x})}function IN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=m.useState(!1),_=g||x&&!d?t.length:0,j=_>0,R=j&&!y?_:0,T=t.slice(0,_).map(C=>C.headline).join(" · "),S=t.length>0&&R>=t.length;return r.jsx(UN,{$animate:h,children:r.jsxs(VN,{$compact:S,children:[j&&!y&&r.jsx(Of,{$tight:!0,$last:S,$connected:f,children:r.jsxs(Dg,{type:"button","aria-expanded":y,onClick:()=>w(C=>!C),children:[r.jsx(Bf,{"aria-hidden":"true",children:r.jsx(Xs,{size:16})}),r.jsx(aM,{children:T})]})}),t.slice(R).map((C,z)=>{var H,Y;const L=R+z,M=d&&typeof i=="number"&&L>i,N=d&&typeof i=="number"&&L===i,I=M?"plan":N?"working":"done",D=!d||typeof i!="number"||L<i-1?"done":L===i-1?"working":"upcoming",G=!!((H=C.progress)!=null&&H.length),F=L===t.length-1;return r.jsxs(Of,{$tight:!G,$last:F,$connected:f,children:[f&&!F&&D!=="upcoming"&&r.jsx(YN,{"aria-hidden":"true",$state:D,$tight:!G,$superseded:g}),r.jsx(Og,{milestone:C,label:FS(C.headline,I),last:!0,collapsible:!0,placeholder:M,focused:N,startOpen:!d&&y,onCollapse:j&&y&&!N?()=>w(!1):void 0,progressBeat:N?s:void 0,superseded:g,typing:L===a,extra:!M&&((Y=C.usage)!=null&&Y.length)?r.jsx(PN,{usage:C.usage,title:C.headline}):void 0,icon:x&&!d&&!M?r.jsx(Bf,{"aria-hidden":"true",children:r.jsx(Xs,{size:16})}):r.jsx(zg,{icon:C.icon,loading:a===L||N||d&&typeof i!="number"&&L===t.length-1,placeholder:M,muted:g})})]},L)}),!l&&!d&&r.jsx(Bo,{time:zn(t)})]})})}const Pf=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function EN(){const[t,a]=m.useState(0);return m.useEffect(()=>{if(t>=Pf.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[Pf[t],r.jsxs(qN,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function zn(t){const i=581+t.reduce((f,g)=>f+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Bo({time:t}){const[a,i]=m.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(QN,{"data-feedback-actions":!0,children:r.jsxs(V0,{visibility:"always",time:t,children:[r.jsx(Df,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(dm,{size:14})}),r.jsx(Df,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(um,{size:14})}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(gi,{size:14})})]})})}function PN({usage:t,title:a}){const[i,s]=m.useState(!1);return m.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),t.length?r.jsxs(KN,{children:[r.jsxs(Re,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(an,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(GS,{open:i,onClose:()=>s(!1),title:a,usage:t})]}):null}function zN({milestone:t,last:a}){return r.jsxs(tM,{children:[r.jsxs(nM,{children:[r.jsx(zg,{icon:t.icon}),!a&&r.jsx(lM,{})]}),r.jsx(Og,{milestone:t,last:a})]})}function ON({records:t,initial:a=3}){const[i,s]=m.useState(!1),l=i?t:t.slice(0,a),d=t.length-a;return r.jsxs(CM,{children:[l.map((h,f)=>r.jsx(Ig,{record:h},f)),d>0&&r.jsx(jM,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function zg({slotRef:t,hidden:a,loading:i,placeholder:s,muted:l}){return s?r.jsx(Ff,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(oM,{})}):r.jsx(Ff,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(sM,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function Og({milestone:t,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var F,H,Y;const A=a??t.headline;if(f)return r.jsx(Hf,{$last:i,$dim:!0,children:r.jsxs(ui,{as:"div",children:[l,r.jsx(Uf,{children:A})]})});const _=!!((F=t.blocks)!=null&&F.length),j=!!h,R=!d||!!t.defaultOpen||!!w,[T,S]=m.useState(null),C=!!k,z=C?!0:T??R,L=d&&(_||j),M=!C&&L&&(!s||!!g),N=M&&!!g&&!!((H=t.progress)!=null&&H.length),I=()=>S(()=>!z),D=_&&(C||!d||z),G=j&&(C||!d||z);return r.jsxs(Hf,{$last:i,children:[r.jsxs(ui,{as:C||L?"button":"div",type:C||L?"button":void 0,$interactive:C||M,"aria-expanded":C?!0:M?z:void 0,onClick:C?k:M?I:void 0,children:[l,r.jsx(Uf,{$focused:!!g,children:A}),M&&!g&&r.jsx(cM,{"data-open":z||void 0,"aria-hidden":"true",children:r.jsx(an,{size:14})})]}),(Y=t.progress)!=null&&Y.length?r.jsx(hM,{$indent:!!l,children:r.jsxs(dM,{children:[N&&r.jsx(uM,{type:"button","aria-expanded":z,"aria-label":z?"Hide details":"Show details",onClick:I,children:z?r.jsx(_u,{size:16}):r.jsx(ao,{size:16})}),r.jsx(FN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:z||s||g})]})}):null,D&&r.jsx(wM,{$indent:!!l,children:t.blocks.map((Z,se)=>r.jsxs(bM,{children:[Z.text&&r.jsx(kM,{children:s?r.jsx(Hu,{text:Z.text}):Z.text}),Z.label&&r.jsx(_M,{children:Z.label}),Z.bullets&&r.jsx(SM,{children:Z.bullets.map((ne,oe)=>r.jsx("li",{children:ne},oe))}),Z.checks&&r.jsx(NM,{children:Z.checks.map((ne,oe)=>r.jsxs("li",{children:[r.jsx(MM,{"aria-hidden":"true"}),r.jsx("span",{children:ne})]},oe))}),Z.records&&r.jsx(ON,{records:Z.records})]},se))}),G&&r.jsx(ZN,{$indent:!!l,children:h})]})}const DN=1350;function FN({steps:t,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const g=t.length-1,x=typeof h=="number",[y,w]=m.useState(l?0:g),k=m.useRef(l);m.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),m.useEffect(()=>{if(x||!k.current||y>=g)return;const R=setTimeout(()=>w(T=>Math.min(T+1,g)),DN);return()=>clearTimeout(R)},[y,g,x]),m.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const A=typeof h=="number"?Math.min(h,g):y,_=A>=g,j=_&&!l;return r.jsxs(pM,{children:[r.jsx(mM,{$done:j,$live:l,$superseded:f,"aria-live":"polite",children:l?r.jsx(Hu,{text:t[A],caret:!1,speed:26}):t[A]},A),d&&(i?_:_||l)&&(a!=null&&a.length)?r.jsx(BN,{seeds:a,total:s}):null]})}const zf=90;function BN({seeds:t,total:a,max:i=5}){const s=t.slice(0,i),l=Math.max(a??0,t.length),d=l-s.length;return r.jsxs(gM,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>r.jsx(vM,{style:{zIndex:s.length-f,animationDelay:`${f*zf}ms`},children:r.jsx(Nn,{size:"sm",src:oa(h),name:h,alt:""})},h)),d>0&&r.jsxs(yM,{"aria-hidden":"true",style:{animationDelay:`${s.length*zf}ms`},children:["+",d]})]})}const WN=v.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,HN=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,kl=Be`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,UN=v.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${HN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${kl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qN=v.span``,VN=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
`,Of=v.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,GN=je`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,YN=v.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${t=>t.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${t=>t.$state==="working"?Be`
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
        animation: ${GN} 1.25s linear infinite;
      `:t.$state==="upcoming"?Be`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Be`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero.
           A superseded group (a newer activity group has triggered below it)
           demotes the line to the slate scale, so the success green stays with
           the latest group. */
        width: 1.5px;
        background-color: ${t.$superseded?"var(--color-slate-border-secondary)":"var(--color-success-content)"};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QN=v.div`
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
`,KN=v.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,ZN=v.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,Df=v(Re)`
  &[data-active] { color: var(--color-content-brand); }
`;function Hu({text:t,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=m.useState(0);m.useEffect(()=>{d(0)},[t]),m.useEffect(()=>{if(l>=t.length)return;const f=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(f)},[l,t,i]);const h=l>=t.length;return m.useEffect(()=>{h&&(a==null||a())},[h]),r.jsxs(r.Fragment,{children:[t.slice(0,l),s&&r.jsx(JN,{$blink:h,"aria-hidden":"true"}),!h&&r.jsx(eM,{"aria-hidden":"true",children:t.slice(l)})]})}const XN=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,JN=v.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?XN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eM=v.span`
  opacity: 0;
`,tM=v.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,nM=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Ff=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,rM=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,oM=v.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${rM} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Dg=v.button`
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
`,Bf=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,aM=v.span`
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

  ${Dg}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,iM=je`
  to { transform: rotate(360deg); }
`,Wf=56.5,sM=v.svg`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${t=>t.$loading||t.$muted?"transparent":"var(--color-success-fill)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${Wf};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?Wf*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${iM} 2s linear infinite;
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
    stroke: ${t=>t.$muted?"var(--color-content-tertiary)":"var(--color-content-inverse-primary)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${t=>t.$loading?15:0};
    opacity: ${t=>t.$loading?0:1};
    transform: ${t=>t.$loading?"scale(0.7)":"scale(1)"};
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
`,lM=v.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Hf=v.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${t=>t.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,ui=v.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Uf=v.span`
  /* Size to the title text (shrinking if the row is tight) rather than filling the
     row, so the expand chevron sits right after the label instead of at the far edge. */
  flex: 0 1 auto;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${t=>t.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${t=>t.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${ui}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,cM=v.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${ui}:hover &,
  ${ui}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,dM=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,uM=v.button`
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
`,hM=v.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,pM=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,fM=je`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,mM=v.div`
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
  color: ${t=>t.$superseded?"var(--color-content-disabled)":t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running a highlight band sweeps left-to-right across it
     to read as actively-working; a settled line holds solid. */
  ${t=>t.$live&&Be`
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
    animation: ${fM} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,gM=v.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,Fg=je`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,vM=v.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${Fg} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yM=v.span`
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
  animation: ${Fg} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xM=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,wM=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  animation: ${xM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,bM=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,kM=v.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,_M=v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,CM=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,jM=v.button`
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
`,SM=v.ul`
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
`,NM=v.ul`
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
`,MM=v.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function RM({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const LM=160,Bg=m.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,g]=m.useState(""),x=m.useRef(null),y=f.trim().length>0;m.useImperativeHandle(h,()=>({focus:()=>{var j;return(j=x.current)==null?void 0:j.focus()}}),[]);const w=()=>{const j=x.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,LM)}px`)},k=()=>{!y||i||(a(f),g(""),requestAnimationFrame(()=>{const j=x.current;j&&(j.style.height="auto")}))},A=j=>{j.preventDefault(),k()},_=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),k())};return r.jsxs($M,{onSubmit:A,$compact:d,children:[r.jsx(TM,{ref:x,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:j=>{g(j.target.value),w()},onKeyDown:_}),i?r.jsx(qf,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(RM,{size:d?16:20})}):r.jsx(qf,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:r.jsx(fl,{size:d?14:18})})]})}),$M=v.form`
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
  ${t=>t.$compact&&`
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,TM=v.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${t=>t.$compact?"var(--space-6)":"var(--space-8)"} - 1lh) / 2) 0;
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
  ${t=>t.$compact&&`
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,qf=v(Re)`
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
  ${t=>t.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`,Vf=450;function Uu(t,a){var _;const i=t.status==="needs_approval"||t.status==="recommended",s=i||t.status==="unresolved"||t.status==="monitoring",l=Ou[t.id],d=a===1&&!!l,h=d?l.prompt:Rg[t.id]??t.recommendation,f=d?l.record:mS[t.id],g=f?Array.isArray(f)?f:[f]:[],x=t.status==="unresolved"?Xj:d?l.actions:t.actions,y=i&&(!d&&(((_=Du[t.id])==null?void 0:_.length)??0)>1||Jj(h)),w=y?eS:x[x.length-1],k=y?[]:x.slice(0,-1),A=bg(t);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:A}}function Gf({thread:t,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,A]=m.useState(!1),[_,j]=m.useState(!1),{actionable:R,prompt:T,records:S,primaryLabel:C,purple:z}=Uu(t,a),M=t.status==="analyzing"&&!l,N=t.status==="resolved"||t.status==="auto_resolved",I=!s&&(R||z),D=N&&!d,G=s?M:R||M||I,F=i&&(G||D),H=bl(t),Z=jg(t.id)||(F?"":t.assessment),se=ne=>{kg(ne)?y(ne):x(t.id,ne)};return r.jsxs(qM,{"data-tone":H,$expanded:i,children:[r.jsxs(KM,{children:[r.jsxs(XM,{type:"button","aria-expanded":F,"aria-label":F?"Collapse case":"Expand case",onClick:h,children:[r.jsx(Nn,{size:"md",src:zu(t.id),name:Ko[t.id],alt:Ko[t.id]??""}),r.jsxs(Gg,{children:[r.jsx(Yg,{children:Sg(t)}),Z&&r.jsx(Qg,{children:Z})]})]}),r.jsx(ZM,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":F?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?r.jsx(ml,{size:20}):F?r.jsx(Xs,{size:16}):r.jsx(_u,{size:16})})]}),F&&D&&r.jsx(JM,{children:r.jsx(eR,{children:r.jsx(AN,{milestones:Lg(t)})})}),F&&G&&r.jsxs(tR,{children:[R&&!s&&r.jsx(_l,{children:T}),R&&!s&&S.length>0&&r.jsx(vR,{children:S.map((ne,oe)=>r.jsx(Ig,{record:ne},oe))}),M&&r.jsx(Kg,{role:"status","aria-live":"polite",children:r.jsx(PM,{thread:t,onDecide:g})}),I&&r.jsxs(qu,{children:[R&&C&&r.jsx(Xr,{variant:"primary",size:"sm",onClick:()=>se(ol),children:ol}),R&&r.jsx(Xr,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),R&&r.jsx(e2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{j(!0),y("Other")},children:"Other"}),z&&(k?r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(oo,{size:14}),onClick:()=>{w(t),A(!0)},children:"Save as workflow"}))]})]})]})}function Yf({text:t,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=m.useState(!1);return m.useEffect(()=>{d(!1)},[t]),m.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:t}):r.jsx(Hu,{text:t,speed:a,onDone:()=>{d(!0),i==null||i()}})}function Wg({thread:t,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const A=d||h,[_,j]=m.useState(!1),[R,T]=m.useState(!1),[S]=m.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[C,z]=m.useState(!1),[L,M]=m.useState(!1),N=m.useRef(null);m.useEffect(()=>{var V;L&&((V=N.current)==null||V.focus())},[L]);const I=d||g||C,{actionable:D,onFollowUp:G,prompt:F,records:H,primaryLabel:Y,purple:Z}=Uu(t,a),se=D&&!G?Du[t.id]??_g(F).map(V=>({label:V})):void 0,ne=t.status==="resolved"||t.status==="auto_resolved",oe=Z||ne,J=V=>{kg(V)?s(V):i(t.id,V)},U=D&&!(se&&se.length>0)&&H.length>0?H[0]:void 0;if(oe&&!D){const V=Ag[t.id],E=_||!V,$=d&&!g&&!C;return r.jsxs(MR,{$divided:!0,children:[V&&r.jsx(RR,{children:r.jsx(Yf,{text:V,onDone:()=>j(!0),instant:S})}),E&&!$&&r.jsxs(Ho,{$saved:I,"data-saved":I||void 0,children:[r.jsxs(t2,{children:[r.jsx(n2,{"aria-hidden":"true",children:r.jsx(oo,{size:16})}),r.jsx(r2,{children:r.jsx(Yf,{text:"Want me to save this as a reusable workflow?",onDone:()=>T(!0),instant:S})})]}),R&&r.jsx(o2,{children:I?r.jsx(Xr,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(Xr,{variant:"primary",size:"sm",onClick:()=>{z(!0),l(t)},children:"Save workflow"})})]}),E&&$&&r.jsx(Ug,{})]})}return r.jsxs(QM,{$flat:k,"data-tone":bl(t),children:[D&&r.jsxs(qg,{children:[r.jsx(_l,{children:F}),U&&r.jsx(Vg,{children:r.jsx(Nn,{size:"md",src:oa(U.avatarSeed),name:U.title,alt:U.title})})]}),se&&se.length>0?r.jsx(Hg,{tasks:se}):null,r.jsxs(qu,{children:[D&&Y&&r.jsx(Xr,{variant:L?"secondary":"primary",size:"sm",onClick:()=>J(ol),children:ol}),D&&r.jsx(Xr,{variant:L?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),D&&r.jsx(e2,{variant:"tertiary",size:"sm","data-selected":L||void 0,onClick:()=>M(!0),children:"Other"}),D&&!G&&r.jsx(NR,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":A,"data-on":A||void 0,leadingArtwork:A?r.jsx(Dt,{size:14}):r.jsx(oo,{size:14}),onClick:()=>{d||f==null||f(t.id)},children:"Save as future workflow"})]}),D&&L&&r.jsx(SR,{children:r.jsx(Bg,{ref:N,compact:!0,onSend:V=>x==null?void 0:x(V),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function AM({thread:t,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:g=!1}){const x=bl(t),y=jg(t.id)||t.assessment;return r.jsxs(VM,{"data-tone":x,$expanded:i,children:[r.jsxs(GM,{$expanded:i,children:[r.jsx(Nn,{size:"md",src:zu(t.id),name:Ko[t.id],alt:Ko[t.id]??""}),r.jsxs(Gg,{children:[r.jsx(Yg,{children:Sg(t)}),y&&r.jsx(Qg,{children:y})]})]}),i&&r.jsx(YM,{children:r.jsx(Wg,{flat:!0,thread:t,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:g})})]})}function Hg({tasks:t,interactive:a=!0}){return r.jsx(yR,{children:t.map((i,s)=>r.jsx(IM,{task:i,first:s===0,last:s===t.length-1,interactive:a},s))})}function IM({task:t,first:a,last:i,interactive:s=!0}){const[l,d]=m.useState(!1),h=!!t.detail&&s;return r.jsxs(xR,{children:[r.jsx(wR,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(bR,{})}),r.jsxs(kR,{children:[r.jsxs(_R,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[r.jsx(Xg,{children:t.label}),h&&r.jsx(CR,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(an,{size:14})})]}),l&&h&&r.jsx(jR,{children:t.detail})]})]})}function EM({steps:t,completed:a}){const[i,s]=m.useState(a?t.length:1);m.useEffect(()=>{if(a){s(t.length);return}if(i>=t.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,t.length,a]);const l=t.slice(0,i);return r.jsx(sR,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!a&&h===i-1,g=h===l.length-1;return r.jsxs(cR,{children:[r.jsxs(dR,{children:[r.jsx(mR,{$done:!f,"aria-hidden":"true",children:f?r.jsx(gR,{children:r.jsx(pt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Dt,{size:16})}),!g&&r.jsx(uR,{})]}),r.jsxs(hR,{$last:g,children:[r.jsx(pR,{children:d.headline}),r.jsx(fR,{children:d.detail})]})]},h)})})}function PM({thread:t,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=m.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(nR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[r.jsx(pt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(oR,{children:[r.jsx(aR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(iR,{children:t.assessment})]}),r.jsx(rR,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(an,{size:14})})]}),d&&r.jsx(EM,{steps:Mg(t.id),completed:i}),!i&&!l&&r.jsx(Zg,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function zM({thread:t,onDecide:a}){return r.jsx(Zg,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function Td(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:Tg(a,NS(t))}}function OM(t,a){const i=Tg(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function DM(t,a){const i=Lg(t),s=t.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[OM(Mg(t.id),t.id),...i.slice(0,l)],h=d.length;if(a.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(t.status==="in_progress"||t.status==="monitoring")&&(kf[t.id]??[]).map(k=>Td(k,t.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Ou[t.id],g=[(kf[t.id]??[]).map(w=>Td(w,t.id)),((f==null?void 0:f.working)??[]).map(w=>Td(w,t.id))],x=w=>w===1&&f?f.prompt:Rg[t.id]??t.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return a.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(A=>y.push({kind:"activity",milestone:A})),y.push({kind:"reply",text:RS(k)})}),{items:y,reasoningCount:h}}function FM({thread:t,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:g=!1}){const x=t.status==="in_progress"||t.status==="monitoring",y=t.status==="resolved"||t.status==="auto_resolved",{items:w,reasoningCount:k}=DM(t,a),A=l||t.status==="in_progress",[_,j]=m.useState(l?Math.min(1,k):A?k:w.length),[R]=m.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),T=a.length>0||x||y?w.length:k,S=t.status==="in_progress"&&a.length>0,[C,z]=m.useState(0);m.useEffect(()=>{z(0)},[_]),m.useEffect(()=>{if(_>=T)return;const te=w[_],O=w[_-1];if((te==null?void 0:te.kind)==="question"||(te==null?void 0:te.kind)==="message"){const de=setTimeout(()=>j(fe=>fe+1),0);return()=>clearTimeout(de)}if((te==null?void 0:te.kind)==="reply"){if(S)return;const de=setTimeout(()=>j(fe=>fe+1),Vf);return()=>clearTimeout(de)}if(S&&(O==null?void 0:O.kind)!=="message")return;const ae=(O==null?void 0:O.kind)==="message"?Vf:Mf,me=setTimeout(()=>j(de=>de+1),ae);return()=>clearTimeout(me)},[_,T,S]),m.useEffect(()=>{if(!S)return;const te=O=>{var ke;if(O.key!=="t"&&O.key!=="T"||O.metaKey||O.ctrlKey||O.altKey)return;const ae=O.target instanceof Element?O.target:null;if(ae&&ae.closest('input, textarea, [contenteditable="true"]'))return;const me=w[_-1],de=(me==null?void 0:me.kind)==="activity"?((ke=me.milestone.progress)==null?void 0:ke.length)??0:0;if((me==null?void 0:me.kind)==="activity"&&C<de-1){z(xe=>xe+1);return}const fe=w[_];(fe==null?void 0:fe.kind)==="activity"?(j(xe=>xe+1),z(0)):f==null||f()};return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[S,_,C,f]);const L=w.slice(0,_),M=[];for(const te of L){if(te.kind==="question"){M.push({type:"question",text:te.text});continue}if(te.kind==="message"){M.push({type:"msg",text:te.text});continue}if(te.kind==="reply"){M.push({type:"reply",text:te.text});continue}const O=M[M.length-1];O&&O.type==="acts"?O.milestones.push(te.milestone):M.push({type:"acts",milestones:[te.milestone]})}const N=_<w.length,I=L.length>0&&L[L.length-1].kind==="activity",D=_>=T,[G,F]=m.useState(!1);m.useEffect(()=>{if(!(D&&I&&(x||l)&&!y)){F(!1);return}F(!0);const te=setTimeout(()=>F(!1),Mf);return()=>clearTimeout(te)},[D,I,_,x,l,y]);const H=(x||l)&&(N||G)&&I;let Y=-1;M.forEach((te,O)=>{te.type==="acts"&&(Y=O)});const Z=[];for(const te of w){if(te.kind!=="activity"){Z.push({type:"other"});continue}const O=Z[Z.length-1];O&&O.type==="acts"?O.milestones.push(te.milestone):Z.push({type:"acts",milestones:[te.milestone]})}let se=-1;Z.forEach((te,O)=>{te.type==="acts"&&(se=O)});const ne=M.findIndex(te=>te.type==="acts"),oe=(te,O,ae=O)=>{const me=M[te],de=(l||t.status==="in_progress")&&te===se,fe=Z[te],ke=de&&fe&&fe.type==="acts"?fe.milestones:me.milestones,xe=de?me.milestones.length-1:void 0;return r.jsx(Pg,{milestones:ke,focusIndex:xe,focusBeat:de&&S?C:void 0,typingIndex:te===se&&H?me.milestones.length-1:void 0,collapsed:te<Y,hideActions:ae,running:de,showConnectors:te!==ne,reasoning:te===ne,animateIn:!O&&!R})},J=[];for(let te=0;te<M.length;te++){const O=M[te];if(O.type==="question"){J.push({kind:"question",text:O.text});continue}if(O.type==="msg"){J.push({kind:"msg",text:O.text});continue}if(O.type==="reply"){J.push({kind:"response",gi:-1,text:O.text});continue}const ae=M[te+1];ae&&ae.type==="reply"?(J.push({kind:"response",gi:te,text:ae.text}),te++):J.push({kind:"acts",gi:te})}const V=(l||t.status==="in_progress")&&Y>=0||s,E=L.length>0,$=s||x,q=(()=>{for(let te=J.length-1;te>=0;te--){const O=J[te];if(O.kind==="acts"||O.kind==="response"&&O.gi>=0)return te}return-1})(),K=J.findIndex(te=>te.kind==="question"),ie=K===ne+1?K:-1,he=te=>te.kind==="acts"?zn(M[te.gi].milestones):te.kind==="response"?zn(te.gi>=0?M[te.gi].milestones:[]):zn([]);return r.jsxs(r.Fragment,{children:[J.map((te,O)=>{var fe,ke;const ae=O===q?d:null;if(te.kind==="question"){if(O===ie)return null;const xe=J[O-1],$e=!!xe&&(xe.kind==="acts"||xe.kind==="response")&&O-1!==q,We=O===K;return r.jsxs(Id,{children:[We?r.jsx(Qf,{thread:t,saveWorkflowFlagged:g}):r.jsx(HM,{text:te.text,animate:!R}),$e&&r.jsx(Bo,{time:he(xe)})]},`q${O}`)}if(te.kind==="msg")return r.jsx(UM,{messages:[te.text],animate:!R},`m${O}`);if(te.kind==="acts"){const xe=M[te.gi].milestones,$e=((fe=J[O+1])==null?void 0:fe.kind)==="question",We=oe(te.gi,!1,!!ae||$e),Ve=O===ne,Ge=ae||(Ve&&O+1===ie?r.jsx(Qf,{thread:t,saveWorkflowFlagged:g}):null);return Ve&&Ge?r.jsxs(WR,{children:[We,Ge,r.jsx(Bo,{time:zn(xe)})]},`a${O}`):r.jsxs(m.Fragment,{children:[We,ae&&r.jsxs(Id,{children:[ae,r.jsx(Bo,{time:zn(xe)})]})]},`a${O}`)}const me=te.gi>=0,de=me?M[te.gi].milestones:[];return r.jsxs(m.Fragment,{children:[r.jsx(au,{activity:me?oe(te.gi,!0):void 0,text:te.text,feedbackTime:ae||((ke=J[O+1])==null?void 0:ke.kind)==="question"?void 0:zn(de),showMark:!1,animateIn:!1}),ae&&r.jsxs(Id,{children:[ae,r.jsx(Bo,{time:zn(de)})]})]},`resp${O}`)}),r.jsx(BM,{messages:i,replying:s}),h&&fi.createPortal(E?r.jsxs(zR,{role:$?"status":"img","aria-label":s?"Ultron is replying":V?"Ultron is working":"Ultron",children:[r.jsxs(FR,{"aria-hidden":"true",children:[r.jsx(Kf,{$show:V,children:r.jsx(pt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(Kf,{$show:!V,children:r.jsx(pt,{mark:"magnetic2d",size:24,tone:"auto",state:$?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),V&&r.jsx(DR,{children:s?"Replying…":r.jsx(EN,{})})]}):null,h),q<0&&d]})}function au({activity:t,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(t||i||s);return r.jsxs(BR,{children:[f&&r.jsxs(HR,{$animate:h,children:[t,i,s&&r.jsx(Bo,{time:s})]}),d&&r.jsx(UR,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(pt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Ad(){return[{icon:"clock",headline:"Reviewed your message"}]}function BM({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(PR,{children:t.map((i,s)=>i.role==="operator"?r.jsx(a2,{children:r.jsx(s2,{children:r.jsx(l2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(au,{body:r.jsx(WM,{}),feedbackTime:zn(Ad()),showMark:!1},s):r.jsx(au,{activity:r.jsx(Pg,{milestones:Ad(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:zn(Ad()),showMark:!1},s))})}function WM(){return r.jsx(Ug,{})}function Ug(){return r.jsxs(Ho,{children:[r.jsxs(t2,{children:[r.jsx(n2,{"aria-hidden":"true",children:r.jsx(oo,{size:16})}),r.jsx(r2,{children:"Workflow saved for future use."})]}),r.jsx(o2,{children:r.jsx(Xr,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(ml,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function HM({text:t,animate:a=!0}){return r.jsx($R,{$animate:a,children:t})}function Qf({thread:t,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=Uu(t,0),l=Du[t.id]??_g(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(TR,{"data-tone":bl(t),children:[r.jsxs(qg,{children:[r.jsx(_l,{children:i}),a?r.jsx(Fn,{content:"Saved as workflow",children:r.jsx(AR,{"aria-label":"Saved as workflow",children:r.jsx(oo,{size:18})})}):d&&r.jsx(Vg,{children:r.jsx(Nn,{size:"md",src:oa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(Hg,{tasks:l,interactive:!1}):null]})}function UM({messages:t,animate:a=!0}){return t.length?r.jsx(IR,{children:t.map((i,s)=>r.jsx(a2,{children:r.jsx(s2,{$animate:a,children:r.jsx(l2,{children:i})})},s))}):null}const qM=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${t=>t.$expanded?"transparent":"var(--color-bg-primary)"};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?"":`
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
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }
`,VM=v.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?Be`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Be`
        background: var(--color-bg-primary);
        border: 1px solid transparent;
        &:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-below-md);
        }
      `}

  /* Collapsed cards carry the semantic tonal fill (shared with the feed list
     cards + sidebar dots); the expanded front card stays on the white panel. */
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,GM=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${t=>t.$expanded&&Be`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,YM=v.div`
  padding: var(--space-4);
`,QM=v.div`
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
  ${t=>t.$flat&&Be`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,qg=v.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,Vg=v.span`
  flex-shrink: 0;
  display: inline-flex;
`,KM=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,ZM=v(Re)`
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
`,XM=v.button`
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
`,Gg=v.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Yg=v.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,Qg=v.span`
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
`,JM=v.div`
  overflow: hidden;
`,eR=v.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,tR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,Kg=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,nR=v.div`
  all: ${t=>t.$interactive?"unset":"revert"};
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,rR=v.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;v(Kg)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const oR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aR=v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,iR=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,sR=v.div`
  display: flex;
  flex-direction: column;
`,lR=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,cR=v.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${lR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dR=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,uR=v.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,hR=v.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,pR=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,fR=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,mR=v.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,gR=v.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,Zg=v(Re)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,vR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,yR=v.div`
  display: flex;
  flex-direction: column;
`,ll="var(--space-8)",xR=v.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,wR=v.div`
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
  &[data-first]::before { top: calc(${ll} / 2); }
  &[data-last]::before { bottom: calc(100% - ${ll} / 2); }
  &[data-first][data-last]::before { display: none; }
`,bR=v.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${ll} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,kR=v.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,_R=v.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${ll};
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Xg=v.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,CR=v.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,jR=v.p`
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
`,_l=v.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Jg=je`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,qu=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${Jg} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SR=v.div`
  animation: ${Jg} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Xr=v(Re)`
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
`,e2=v(Re)`
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
`,NR=v(Re)`
  ${t=>t.$trailing&&"margin-left: auto;"}
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
`,MR=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,RR=v.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Ho=v.div`
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
  box-shadow: ${t=>t.$saved?"none":"var(--shadow-below-low)"};
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>!t.$saved&&Be`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,t2=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,n2=v.span`
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
  ${Ho}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Ho}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Ho}[data-saved] & { color: var(--color-content-disabled); }
`,r2=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Ho}[data-saved] & { color: var(--color-content-disabled); }
`,o2=v(qu)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,LR=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,$R=v.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${LR} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,TR=v.div`
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
  ${_l} { color: var(--color-content-disabled); }
  ${Xg} { color: var(--color-content-disabled); }
`,AR=v.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,IR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,a2=v.div`
  display: flex;
  justify-content: flex-end;
`,Vu=je`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,i2=je`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,ER=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,s2=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Vu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,l2=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,PR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;v.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const zR=v.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${i2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,OR=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,DR=v.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${OR} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FR=v.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Kf=v.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade even
     when one renders at a larger size to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${t=>t.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,BR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${kl}
`,Id=v.div`
  display: contents;
  ${kl}
`,WR=v.div`
  display: flex;
  flex-direction: column;
  ${kl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,HR=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${ER} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UR=v.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${i2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Vu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${Vu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;v.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;v.div`
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
`;v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;v.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;v.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;v.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;v.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;v.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;const qR={"Coverage Recovery":Kr,"Fill Optimization":Kr,Recruiting:Kr,Users:Kr,Attendance:Dn,"Attendance Recovery":Dn,"Time Off":Dn,Scheduling:Dn,Compliance:vi,Onboarding:Zr,"Payroll Operations":lm,Invoicing:jr,Reporting:Zp,"Marketplace Optimization":Zp,Engagement:el,"Autonomous Operations":pl},VR=t=>qR[t]??pl,Zf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],GR=2800,YR=200,QR=6,KR=2200,oi=520;function ZR({onDetectRisk:t,deckActive:a=!1,deck:i}){const[s,l]=m.useState(0),d=m.useRef(t);d.current=t;const h=m.useRef(new Set),[f,g]=m.useState(!1),x=m.useRef(null);m.useEffect(()=>{const L=setInterval(()=>l(M=>(M+1)%Zf.length),GR);return()=>clearInterval(L)},[]);const y=Math.min(QR,zs.length),[w,k]=m.useState([]),A=m.useRef(0),_=m.useRef(zs.filter(L=>!L.risk)),j=m.useRef(zs.filter(L=>L.risk)),R=m.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),T=()=>5+Math.floor(Math.random()*5),S=()=>{const L=R.current,M=j.current;if(M.length>0&&L.sinceRisk>=L.gap)return L.sinceRisk=0,L.gap=T(),M[L.risk++%M.length];L.sinceRisk+=1;const N=_.current;return N.length>0?N[L.routine++%N.length]:M[L.risk++%M.length]},C=L=>L.risk?"risk":Math.random()<.28?"action":"none",z=m.useRef(null);return m.useEffect(()=>{if(zs.length===0){k([]);return}if(a)return;R.current={routine:0,risk:0,sinceRisk:0,gap:T()},A.current=0;const L=Array.from({length:y},()=>{const I=S();return{key:A.current++,event:I,phase:"in",outcome:C(I),resolved:!0}});if(L.length>0){const I=L[L.length-1];I.resolved=!1,z.current={key:I.key,event:I.event,outcome:I.outcome}}else z.current=null;k(L);const M=[],N=setInterval(()=>{var H;const I=S(),D=A.current++,G=C(I),F=z.current;F&&F.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(F.event.id)||(h.current.add(F.event.id),(H=d.current)==null||H.call(d,F.event))),z.current={key:D,event:I,outcome:G},k(Y=>{const Z=Y.filter(oe=>oe.phase!=="leaving"),se=Z.length>=y?Z[0].key:null;return[...Y.map(oe=>oe.key===se?{...oe,phase:"leaving"}:F&&oe.key===F.key&&!oe.resolved?{...oe,resolved:!0}:oe),{key:D,event:I,phase:"entering",outcome:G,resolved:!1}]}),M.push(setTimeout(()=>{k(Y=>Y.map(Z=>Z.key===D?{...Z,phase:"in"}:Z))},40)),M.push(setTimeout(()=>{k(Y=>Y.filter(Z=>Z.phase!=="leaving"))},oi))},KR);return()=>{clearInterval(N),M.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,a]),r.jsxs(XR,{children:[r.jsxs(JR,{children:[r.jsx(eL,{children:r.jsx(pt,{mark:"circle",size:YR,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(tL,{children:"Ultron"}),r.jsx(nL,{role:"status","aria-live":"polite",children:r.jsxs(oL,{children:[r.jsx(aL,{children:Zf[s]}),r.jsxs(iL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(lL,{children:i},"deck"):w.length>0&&r.jsx(sL,{"aria-label":"Live event feed",children:w.map(L=>{const M=VR(L.event.capability);return r.jsx(cL,{"data-phase":L.phase,"aria-hidden":L.phase==="leaving"||void 0,children:r.jsx(dL,{children:r.jsxs(uL,{"data-outcome":L.resolved?L.outcome:"pending",children:[r.jsxs(hL,{children:[r.jsx(pL,{"aria-hidden":"true",children:r.jsx(M,{size:16})}),r.jsxs(fL,{children:[r.jsx(xL,{children:L.event.capability}),r.jsx(wL,{children:L.event.title})]})]}),r.jsx(mL,{children:L.resolved?L.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(pt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(gL,{children:"Risk detected"})]}):L.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(pt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(yL,{children:"Action required"})]}):r.jsx(vL,{children:"No action needed"}):r.jsx(pt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},L.key)})},"feed")]})}const XR=v.div`
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
`,Gu=je`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,JR=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Gu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,eL=v.div`
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
`,tL=v.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,nL=v.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,rL=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,oL=v.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${rL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,aL=v.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,c2=je`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,iL=v.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${c2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,sL=v.div`
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
  animation: ${Gu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lL=v.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Gu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cL=v.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${oi}ms var(--ease-out, ease),
    opacity ${oi}ms var(--ease-out, ease),
    transform ${oi}ms var(--ease-out, ease);

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
    transition: opacity ${oi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,dL=v.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,uL=v.div`
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
`,hL=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,pL=v.span`
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
`,fL=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,mL=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;

  & > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-content-tertiary);
    animation: ${c2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const gL=v.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,vL=v.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,yL=v.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,xL=v.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,wL=v.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,bL=5e3,kL=5,Ys=320,_L=t=>t.status==="needs_approval"||t.status==="recommended";function CL({threads:t,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:g,onClose:x}){const[y]=m.useState(()=>t.filter(_L).map((M,N)=>({t:M,index:N})).sort((M,N)=>Qo[M.t.severity]-Qo[N.t.severity]||M.index-N.index).slice(0,kL).map(({t:M})=>M.id)),[w,k]=m.useState(1),[A,_]=m.useState(new Set),[j,R]=m.useState(new Set),T=m.useRef(new Map);m.useEffect(()=>{if(w>=y.length)return;const M=setTimeout(()=>k(N=>N+1),bL);return()=>clearTimeout(M)},[w,y.length]),m.useEffect(()=>{const M=N=>{N.key==="Escape"&&x()};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[x]),m.useEffect(()=>{const M=T.current;return()=>{M.forEach(N=>clearTimeout(N))}},[]);const S=y.findIndex(M=>!A.has(M));m.useEffect(()=>{if(y.length>0&&S===-1){const M=setTimeout(x,260);return()=>clearTimeout(M)}},[S,y.length,x]);const C=Math.max(w,S+1);m.useEffect(()=>{y.slice(0,C).forEach(M=>g==null?void 0:g(M))},[C]);const z=(M,N)=>{R(D=>new Set(D).add(M.id));const I=setTimeout(()=>{R(D=>{const G=new Set(D);return G.delete(M.id),G}),_(D=>new Set(D).add(M.id)),T.current.delete(M.id),i(M.id,N)},Ys);T.current.set(M.id,I)},L=y.length-A.size;return r.jsxs(jL,{role:"region","aria-label":"New cases",children:[r.jsxs(NL,{children:[r.jsx(Ot,{children:"Needs your decision"}),r.jsx(Jo,{children:L}),r.jsx(ML,{}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:r.jsx(si,{size:16})})]}),r.jsx(SL,{children:r.jsx(RL,{children:y.slice(0,C).map((M,N)=>{if(A.has(M))return null;const I=t.find(D=>D.id===M);return I?r.jsx($L,{"data-exiting":j.has(M)||void 0,children:r.jsx(AM,{thread:I,stage:a[M]??0,expanded:N===S,onAction:(D,G)=>z(I,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(M),saved:f.includes(M)})},M):null})})})]})}const jL=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,SL=v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,NL=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,ML=v.div`
  flex: 1;
`,RL=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,LL=je`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,$L=v.div`
  animation: ${LL} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Ys}ms var(--ease-out, ease),
    transform ${Ys}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Ys}ms linear;
    &[data-exiting] { transform: none; }
  }
`,TL={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Xf={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},AL=["new","working","done"],IL=280;function EL({threads:t,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:A,savedWorkflowIds:_,onSend:j,replyingIds:R,onStop:T,onClose:S,onDetectRisk:C,onRevealNew:z}){const[L,M]=m.useState(!1),N=()=>{L||(M(!0),window.setTimeout(()=>{M(!1),S()},IL))},[I,D]=m.useState(!1);m.useEffect(()=>{if(i!=="live"){D(!1);return}const O=ae=>{if(ae.key!=="t"&&ae.key!=="T"||ae.metaKey||ae.ctrlKey||ae.altKey)return;const me=ae.target instanceof Element?ae.target:null;me&&me.closest('input, textarea, [contenteditable="true"]')||D(de=>!de)};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[i]);const G=(O,ae)=>(O.t.status==="analyzing"?1:0)-(ae.t.status==="analyzing"?1:0)||Qo[O.t.severity]-Qo[ae.t.severity]||O.index-ae.index,F=t.map((O,ae)=>({t:O,index:ae})).filter(({t:O})=>TL[i].includes(O.status)).sort(G).map(({t:O})=>O.id),[H,Y]=m.useState(()=>h??null),Z=m.useRef({}),se=m.useRef(null),ne=O=>{var ae;O==="Other"&&((ae=se.current)==null||ae.focus()),y(O)},oe=m.useRef(null),J=m.useRef(null),[U,V]=m.useState(null),E=m.useRef(void 0);m.useEffect(()=>{var O;if(E.current===void 0){E.current=h;return}!h||h===E.current||(E.current=h,Y(h),(O=Z.current[h])==null||O.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const $=AL.includes(i),q=$?h&&F.includes(h)?h:F[0]??null:null;m.useEffect(()=>{var De;const O=oe.current,ae=J.current;if(!O||!ae)return;const de=((De=window.matchMedia)==null?void 0:De.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",fe=160;let ke=!0,xe=O.scrollHeight;const $e=()=>{ke=O.scrollHeight-O.scrollTop-O.clientHeight<=fe};O.addEventListener("scroll",$e,{passive:!0});let We=0;const Ve=()=>{We=performance.now()};O.addEventListener("pointerdown",Ve,{passive:!0});const Ge=new ResizeObserver(()=>{const Qe=O.scrollHeight,Ye=performance.now()-We<500;Qe>xe+1&&ke&&!Ye&&O.scrollTo({top:Qe,behavior:de}),xe=Qe});return Ge.observe(ae),()=>{O.removeEventListener("scroll",$e),O.removeEventListener("pointerdown",Ve),Ge.disconnect()}},[q,i]),m.useEffect(()=>{if(!$||!q)return;const O=oe.current;if(!O)return;const ae=()=>O.scrollTo({top:O.scrollHeight,behavior:"auto"}),me=requestAnimationFrame(ae),de=[80,240,480].map(fe=>window.setTimeout(ae,fe));return()=>{cancelAnimationFrame(me),de.forEach(clearTimeout)}},[q,$]);const K=q?t.find(O=>O.id===q)??null:null,ie=!!K&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(K.status)||bg(K)),he=ie&&K?K:null,te=!(ie&&K&&["needs_approval","recommended","unresolved","monitoring"].includes(K.status))||!!(K!=null&&K.analysisResult);return i==="live"?r.jsx(Jf,{$static:!0,children:r.jsx(ZR,{onDetectRisk:C,deckActive:I,deck:I?r.jsx(CL,{threads:t,stageById:a,onAction:g,onRefinement:ne,onSaveWorkflow:w,onToggleSaveWorkflow:A,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:z,onClose:()=>D(!1)}):null})},"live"):r.jsxs(Jf,{$closing:L,children:[r.jsx(OL,{ref:oe,children:$?r.jsx(e0,{ref:J,children:q===null?r.jsx(t0,{role:"status",children:Xf[i]}):(()=>{const O=t.find($e=>$e.id===q);if(!O)return null;const ae=O.status==="analyzing",me=O.status==="resolved"||O.status==="auto_resolved",de=O.status==="in_progress",fe=O.status==="needs_approval"||O.status==="recommended",ke=O.status==="monitoring",xe=O.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(HL,{children:r.jsx(Gf,{thread:O,stage:a[O.id]??0,expanded:de?!1:te,detachActionable:ie,detachAnalyzing:ae,detachTrail:me||xe,onToggle:()=>{},onClose:N,onDecide:f,onAction:g,onRefinement:ne,onSaveWorkflow:w},O.id)}),(ae||fe||de||me||ke||xe)&&r.jsx(FM,{thread:O,outbound:l[O.id]??[],chat:d[O.id]??[],replying:R.includes(O.id),analyzing:ae,footSlot:U,onCompleteRun:()=>x(O.id),saveWorkflowFlagged:k.includes(O.id)||_.includes(O.id),actionCard:he&&he.id===O.id?r.jsx(Wg,{thread:he,stage:a[he.id]??0,onAction:g,onRefinement:ne,onSaveWorkflow:w,saveIntent:k.includes(he.id),onToggleSaveWorkflow:A,saved:_.includes(he.id),savedConversationally:(d[he.id]??[]).some($e=>$e.kind==="workflow_saved"),onSend:$e=>j(he.id,$e),replying:R.includes(he.id),onStop:()=>T(he.id)},`action-${he.id}`):void 0},O.id)]})})()}):r.jsx(e0,{ref:J,children:F.length===0?r.jsx(t0,{role:"status",children:Xf[i]}):F.map(O=>{const ae=t.find(me=>me.id===O);return ae?r.jsx(WL,{ref:me=>{Z.current[O]=me},children:r.jsx(Gf,{thread:ae,stage:a[O]??0,expanded:H===O,onToggle:()=>Y(me=>me===O?null:O),onDecide:f,onAction:g,onRefinement:y,onSaveWorkflow:w})},O):null})})}),$&&q&&K&&r.jsx(DL,{children:r.jsxs(FL,{children:[r.jsx(BL,{ref:V}),K.status==="analyzing"&&!s.includes(K.id)&&r.jsx(zM,{thread:K,onDecide:f}),r.jsx(Bg,{ref:se,onSend:O=>j(q,O),working:R.includes(q),onStop:()=>T(q),placeholder:Zj(K.status,R.includes(q))},`composer-${q}`)]})})]},"feed")}const PL=je`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,zL=je`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Jf=v.div`
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

  ${t=>!t.$static&&!t.$closing&&Be`
    animation: ${zL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&Be`
    animation: ${PL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,OL=v.div`
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
`,DL=v.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,FL=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,BL=v.div`
  display: flex;
  &:empty { display: none; }
`,e0=v.div`
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
`,WL=v.div`
  scroll-margin-top: var(--space-5);
`,HL=v.div`
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
`,t0=v.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function UL({messages:t,replying:a,onSend:i}){const[s,l]=m.useState(""),d=m.useRef(null);m.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[t,a]);const h=s.trim().length>0&&!a,f=t.length===0,g=()=>{const x=s.trim();!x||a||(i(x),l(""))};return r.jsxs(qL,{children:[r.jsx(VL,{children:f?r.jsxs(GL,{children:[r.jsx(YL,{"aria-hidden":"true",children:r.jsx(pt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(QL,{children:"New page"}),r.jsx(KL,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(ZL,{children:[t.map((x,y)=>r.jsx(n0,{"data-from":x.role,children:r.jsx(XL,{"data-from":x.role,children:x.text})},y)),a&&r.jsx(n0,{"data-from":"ultron",children:r.jsxs(e$,{"aria-label":"Ultron is replying",children:[r.jsx(Ed,{}),r.jsx(Ed,{}),r.jsx(Ed,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(t$,{children:r.jsxs(n$,{onSubmit:x=>{x.preventDefault(),g()},children:[r.jsx(r$,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),r.jsx(o$,{children:r.jsx(ea,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const qL=v.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,VL=v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,GL=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,YL=v.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,QL=v.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,KL=v.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,ZL=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,n0=v.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,XL=v.div`
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
`,JL=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,e$=v.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Ed=v.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${JL} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,t$=v.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,n$=v.form`
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
`,r$=v.textarea`
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
`,o$=v.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,a$={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function r0(t,a){const i=a$[t];return i?a==="done"?i.done:a==="new"?i.new:i.working:t}const iu=32;function i$({onNew:t}){return r.jsxs(s$,{children:[r.jsx(l$,{"aria-hidden":"true",children:r.jsx(pt,{mark:"circle",size:iu,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(c$,{children:"Ultron"}),r.jsx(d$,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),t==null||t()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),t==null||t())},children:r.jsx(ao,{size:16})})]})}const s$=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,l$=v.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${iu}px;
  height: ${iu}px;
`,c$=v.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,d$=v.span`
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
`,u$=45;function h$({text:t,className:a}){const[i,s]=m.useState(0);m.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(t.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=t.length&&clearInterval(f)},u$);return()=>clearInterval(f)},[t]);const l=i>=t.length;return r.jsxs(p$,{className:a,children:[t.slice(0,i),!l&&r.jsx(m$,{"aria-hidden":"true",children:"|"})]})}const p$=v.span`
  white-space: nowrap;
`,f$=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,m$=v.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${f$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Pd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function g$(){const t=m.useMemo(()=>["All",...Array.from(new Set(Pd.map(l=>l.tag)))],[]),[a,i]=m.useState("All"),s=a==="All"?Pd:Pd.filter(l=>l.tag===a);return r.jsx(v$,{children:r.jsxs(y$,{children:[r.jsxs(x$,{children:[r.jsx(pt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(w$,{children:[r.jsx(b$,{children:"Memory"}),r.jsx(k$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(_$,{role:"tablist","aria-label":"Filter memories by category",children:t.map(l=>r.jsx(C$,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),r.jsx(j$,{children:s.map((l,d)=>r.jsx(S$,{children:r.jsxs(N$,{children:[r.jsx(M$,{children:l.title}),r.jsx(R$,{children:l.detail})]})},d))})]})})}const v$=v.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,y$=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,x$=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,w$=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,b$=v.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,k$=v.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,_$=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,C$=v.button`
  flex-shrink: 0;
  padding: var(--space-1) var(--space-3);
  border: 1px solid ${t=>t.$active?"var(--color-content-primary)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  background: ${t=>t.$active?"var(--color-content-primary)":"var(--color-bg-primary)"};
  color: ${t=>t.$active?"var(--color-content-inverse)":"var(--color-content-secondary)"};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              border-color var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover {
    border-color: ${t=>t.$active?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  }
`,j$=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,S$=v.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,N$=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,M$=v.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,R$=v.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;v.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;v.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;v.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const su=[{id:"employees",label:"Employees",icon:r.jsx(Kr,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(Dn,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(bu,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Zr,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(vi,{size:16})}];v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;v.span`
  color: var(--color-content-secondary);
`;function L$({collectionId:t}){const a=su.find(i=>i.id===t)??su[0];return r.jsxs($$,{children:[r.jsxs(T$,{children:[r.jsx(A$,{children:a.label}),r.jsx(Jo,{children:"Account database"})]}),r.jsxs(I$,{role:"status",children:[r.jsx(E$,{"aria-hidden":"true",children:r.jsx(om,{size:24})}),r.jsxs(P$,{children:[a.label," — demo stub"]}),r.jsxs(z$,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const $$=v.div`
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
`,T$=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,A$=v.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,I$=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,E$=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,P$=v.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,z$=v.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Os=72,O$=240,D$=640,F$=.13,o0=.58;function Tt(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function B$(t){return t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)}function a0(t,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;t.fillStyle="#000",t.fillStyle=l;const d=t.fillStyle;if(d.startsWith("#")){const f=d.slice(1),g=parseInt(f.length===3?f.split("").map(x=>x+x).join(""):f,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const W$=t=>{const[a,i,s]=t.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function H$({links:t=0}){const a=m.useRef(null),i=m.useRef(0),s=m.useRef(t);return s.current=Math.max(0,Math.min(1,t)),m.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let f=0,g=0;const x=()=>{f=l.clientWidth,g=l.clientHeight,l.width=Math.max(2,Math.round(f*h)),l.height=Math.max(2,Math.round(g*h)),d.setTransform(h,0,0,h,0,0)};x();const y=new ResizeObserver(x);y.observe(l);const w=a0(d,l,"--color-bg-primary","255,255,255"),k=W$(w)<.5,A=a0(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Os},(L,M)=>{const N=M%3===0,I=N?1-.5*Math.pow(Tt(M*3.1),1.6):Tt(M*3.1),D=N?.5*Math.pow(Tt(M*5.7),1.6):Tt(M*5.7);return{bx:I,by:D,vx:(Tt(M*7.3)-.5)*.008,vy:(Tt(M*9.9)-.5)*.008,wA:6+Tt(M*4.7)*10,wS:.25+Tt(M*6.1)*.5,wP:Tt(M*8.2)*6.2832,r:.8+Tt(M*2.3)*1.6,twS:.8+Tt(M)*1.4,twP:Tt(M*11.4)*6.2832}}),j=(L,M)=>{const N=((L.bx+L.vx*M)%1+1)%1,I=((L.by+L.vy*M)%1+1)%1,D=N-.5,G=Math.abs(D)*2,F=G<1e-4?1:(o0+(1-o0)*G)/G;return{x:(.5+D*F)*f+Math.cos(M*L.wS+L.wP)*L.wA,y:I*g+Math.sin(M*L.wS*.8+L.wP)*L.wA}},R=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),T=L=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current);const M=i.current;d.clearRect(0,0,f,g);const N=_.map(I=>j(I,L));if(M>.01){d.lineWidth=1,d.lineCap="round";for(let I=0;I<Os;I++)for(let D=I+1;D<Os;D++){if(Tt(I*97.7+D*13.3)>M*.5)continue;const F=N[I],H=N[D],Y=H.x-F.x,Z=H.y-F.y,se=Math.hypot(Y,Z),ne=Tt(I*5.1+D*23.9)<F$,oe=ne?D$:O$;if(se>oe||se<1)continue;const J=Math.abs(Y)/se;if(J<.55)continue;const U=7+Tt(I*3.3+D*41.1)*6,V=R?.5:(L/U+Tt(I*17.9+D*7.7))%1;let E=1,$=1;if(V>=.78)continue;V<.3?E=B$(V/.3):V>.62&&($=1-(V-.62)/.16);const q=1-se/oe,K=ne?q:q*q,ie=(k?.45:.34)*(ne?.62:1),he=K*ie*M*$*J;if(he<.01||E<.02)continue;const te=F.x+Y*E,O=F.y+Z*E,ae=d.createLinearGradient(F.x,F.y,te,O);ae.addColorStop(0,"rgba("+A+",0)"),ae.addColorStop(1,"rgba("+A+","+he+")"),d.strokeStyle=ae,d.beginPath(),d.moveTo(F.x,F.y),d.lineTo(te,O),d.stroke(),E<1&&(d.fillStyle="rgba("+A+","+Math.min(1,he*2.4)+")",d.beginPath(),d.arc(te,O,1.4,0,6.2832),d.fill())}}for(let I=0;I<Os;I++){const D=_[I],G=.35+.65*(.5+.5*Math.sin(L*D.twS+D.twP));d.fillStyle="rgba("+A+","+G*(k?.55:.42)+")",d.beginPath(),d.arc(N[I].x,N[I].y,D.r*(.7+.3*G),0,6.2832),d.fill()}};if(R)return i.current=s.current,T(1.15),()=>y.disconnect();T(1.15);let S=0;const C=performance.now(),z=L=>{T(1.15+(L-C)/1e3),S=requestAnimationFrame(z)};return S=requestAnimationFrame(z),()=>{cancelAnimationFrame(S),y.disconnect()}},[]),r.jsx(U$,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const U$=v.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(
    120% 90% at 100% 0%,
    var(--color-bg-secondary) 0%,
    transparent 55%
  );

  & > canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`,q$=v.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Ds=v.div`
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
    var(--glow-a, hsl(210 85% 62% / 0.9)),
    var(--glow-b, hsl(250 85% 60% / 0.8)) 78%
  );
  filter: blur(48px);
  will-change: transform, opacity, border-radius;
`,i0=.025,Za=560,Xa=480,V$=260,G$=.08,Y$=.18,Q$=.06,K$=350,Z$=9,Qs=5,s0=360,X$=560,J$=.055,eT=.03,Ja=320,tT=.84,lu=Qs+1,Ks=[];for(let t=0;t<lu;t++)for(let a=t+1;a<lu;a++)Ks.push([t,a]);const l0=(t,a)=>(t*Z$+80*Math.sin(t*.23+a)+50*Math.sin(t*.071+a*1.7)+720)%360,Fs=(t,a)=>{const i=(s,l)=>`${(50+16*Math.sin(t*s+l+a)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},c0=t=>(t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)),zd=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function nT(){const t=m.useRef(null),a=m.useRef(null),i=m.useRef([]),s=m.useRef([]),l=m.useRef([]);return m.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),h=t.current,f=a.current;if(!h||!f)return;const g=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,y=Array.from({length:Qs},()=>({size:s0+Math.random()*(X$-s0),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));y.forEach((N,I)=>{const D=s.current[I];D&&(D.style.width=`${N.size.toFixed(0)}px`,D.style.height=`${N.size.toFixed(0)}px`)});const w=(N,I,D)=>{N.style.setProperty("--glow-a",`hsl(${l0(I,g[0]+D).toFixed(1)} 85% 62% / 0.9)`),N.style.setProperty("--glow-b",`hsl(${l0(I,g[1]+D*1.3).toFixed(1)} 85% 58% / 0.8)`),N.style.setProperty("--glow-cx",`${(35+14*Math.sin(I*.4+g[2]+D)).toFixed(1)}%`),N.style.setProperty("--glow-cy",`${(35+14*Math.cos(I*.31+g[3]+D)).toFixed(1)}%`)},k=(N,I,D)=>{const G=new Array(lu).fill(null);for(let F=0;F<Qs;F++){const H=y[F],Y=s.current[F];if(!Y)continue;const Z=I*(.5+H.ax*(.68*Math.sin(N*H.sx1+H.px1)+.32*Math.sin(N*H.sx2+H.px2))),se=D*(.5+H.ay*(.68*Math.sin(N*H.sy1+H.py1)+.32*Math.sin(N*H.sy2+H.py2))),ne=J$+eT*(.5+.5*Math.sin(N*H.bs+H.bp));Y.style.transform=`translate(${(Z-H.size/2).toFixed(1)}px, ${(se-H.size/2).toFixed(1)}px)`,Y.style.opacity=ne.toFixed(3),Y.style.borderRadius=Fs(N,H.mp),w(Y,N,H.cs),G[F+1]={x:Z,y:se,size:H.size,o:ne}}return G},A=(N,I)=>{for(let D=0;D<Ks.length;D++){const G=l.current[D];if(!G)continue;const[F,H]=Ks[D],Y=I[F],Z=I[H],se=Y&&Z?Math.min(Y.o,Z.o):0;if(!Y||!Z||se<=.005){G.style.opacity="0";continue}const ne=Z.x-Y.x,oe=Z.y-Y.y,J=Math.hypot(ne,oe),U=(Y.size+Z.size)/2*tT,V=c0(1-J/U);if(V<=.001){G.style.opacity="0";continue}const E=Math.max(.35,J*.9/Ja),$=.3+.4*V;G.style.transform=`translate(${((Y.x+Z.x)/2-Ja/2).toFixed(1)}px, ${((Y.y+Z.y)/2-Ja/2).toFixed(1)}px) rotate(${Math.atan2(oe,ne).toFixed(3)}rad) scale(${E.toFixed(3)}, ${$.toFixed(3)})`,G.style.opacity=(se*V).toFixed(3),G.style.borderRadius=Fs(N,1.1*(D+1)),w(G,N,.23*(D+1))}};if(d){const I=k(2.4,h.clientWidth,h.clientHeight);A(2.4,I);return}let _=null,j=null,R=-1/0,T=0,S=0,C=0;const z=N=>{const I=h.getBoundingClientRect(),D=_===null;_=N.clientX-I.left,j=N.clientY-I.top,R=N.timeStamp,D&&(T=_,S=j)};window.addEventListener("pointermove",z,{passive:!0});let L=0;const M=N=>{L=requestAnimationFrame(M);const I=N/1e3,D=h.clientWidth,G=h.clientHeight,F=k(I,D,G);if(_!==null&&j!==null){T+=(_-T)*i0,S+=(j-S)*i0;const H=N-R<K$?Y$:G$;C+=(H-C)*Q$,f.style.transform=`translate(${T-Za/2}px, ${S-Za/2}px)`,f.style.opacity=C.toFixed(3),f.style.borderRadius=Fs(I,0),w(f,I,0),F[0]={x:T,y:S,size:Za,o:C};for(let Y=0;Y<zd.length;Y++){const Z=i.current[Y];if(!Z)continue;const{nx:se,ny:ne}=zd[Y],oe=se<0?T:se>0?D-T:ne<0?S:G-S,J=c0(1-oe/V$);if(J<=.001){Z.style.opacity="0";continue}const U=se!==0?se<0?0:D:T,V=ne!==0?ne<0?0:G:S,E=Xa*(.5-.22*J),$=.55+.45*J;Z.style.transform=`translate(${U+se*E-Xa/2}px, ${V+ne*E-Xa/2}px) scale(${$.toFixed(3)})`,Z.style.opacity=(C*J).toFixed(3),Z.style.borderRadius=Fs(I,.9*(Y+1)),w(Z,I,.35*(Y+1))}}A(I,F)};return L=requestAnimationFrame(M),()=>{cancelAnimationFrame(L),window.removeEventListener("pointermove",z)}},[]),r.jsxs(q$,{ref:t,"aria-hidden":"true",children:[Ks.map((d,h)=>r.jsx(Ds,{ref:f=>{l.current[h]=f},style:{width:Ja,height:Ja,opacity:0}},`bridge-${h}`)),Array.from({length:Qs},(d,h)=>r.jsx(Ds,{ref:f=>{s.current[h]=f},style:{opacity:0}},`ambient-${h}`)),zd.map((d,h)=>r.jsx(Ds,{ref:f=>{i.current[h]=f},style:{width:Xa,height:Xa,opacity:0}},h)),r.jsx(Ds,{ref:a,style:{width:Za,height:Za,opacity:0}})]})}function rT({size:t=22,className:a}){return r.jsxs("svg",{width:t,height:t*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const aa=Be`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,d2=Be`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Be`
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
`;const oT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",aT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",iT="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",sT="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",lT="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",cT="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",dT="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",uT=560,u2=320,Zo="cubic-bezier(0.22, 1, 0.36, 1)",h2=140,ei=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:wu,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:Cu,title:"1099",caption:"Independent contractors."},{id:"both",icon:sm,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:Dn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:lm,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:ym,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Js,title:"One location",caption:"A single site."},{id:"multi",icon:ku,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:bu,title:"Client sites",caption:"Out at client locations."}]}];function hT({onComplete:t}){const[a,i]=m.useState("landing"),[s,l]=m.useState({}),[d,h]=m.useState(!1),[f,g]=m.useState(!1),x=ia(),y=m.useRef(null),w=m.useCallback(N=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{N(),g(!1),y.current=null},x?0:u2))},[x]);m.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),A=()=>w(()=>i("auth")),_=()=>w(()=>i("workplace")),j=N=>{l(I=>({...I,...N})),h(!0),w(()=>i("loading"))},R=N=>{l(I=>({...I,...N})),w(()=>i(s.companyWebsite?"roster":"questions"))},T=N=>{l(I=>({...I,...N})),w(()=>i("roster"))},S=N=>{N&&l(I=>({...I,rosterFile:N})),w(()=>i("schedule"))},C=N=>t({...s,...N?{scheduleFile:N}:{}}),z=d?1:a==="landing"?0:.4,L=a==="roster"||a==="schedule"?2:d?1:0,M=a==="loading"&&!!s.companyWebsite;return r.jsxs(ET,{children:[r.jsx(H$,{links:z}),r.jsx(nT,{}),r.jsx(PT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:r.jsx(rT,{size:22})}),r.jsx(zT,{children:r.jsxs(OT,{children:[a!=="landing"&&r.jsx(DT,{children:r.jsx(m2,{children:r.jsx(pt,{mark:M?"lines":"circle",size:h2,tone:"auto",state:"active",...M?{}:{streamCount:L},"aria-label":"Ultron"})})}),r.jsxs(BT,{$exiting:f,children:[a==="landing"&&r.jsx(bT,{onNext:A}),a==="auth"&&r.jsx(Xo,{children:r.jsx(kT,{onNext:_})}),a==="workplace"&&r.jsx(Xo,{children:r.jsx(jT,{onAnswer:j})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(ST,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:R}),a==="questions"&&r.jsx(LT,{onComplete:T}),a==="roster"&&r.jsx(h0,{kind:"roster",onDone:S}),a==="schedule"&&r.jsx(h0,{kind:"schedule",onDone:C})]})]})})]})}const pT="Lead the work that matters.",fT="Show us your company and we'll set up the work.",mT=41e3,d0=[{name:"Levi's Stadium",src:oT},{name:"ProCare HR",src:aT},{name:"Florida Panthers",src:iT},{name:"Express Healthcare",src:sT},{name:"ModSquad",src:lT},{name:"Titan Medical Group",src:cT},{name:"United Staffing Solutions",src:dT}],u0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure"}],gT=6e3;function vT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function yT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function xT(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const wT=[{id:"google",label:"Continue with Google",mark:vT},{id:"microsoft",label:"Continue with Microsoft",mark:yT},{id:"apple",label:"Continue with Apple",mark:xT}];function p2(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim())}function bT({onNext:t}){const[a,i]=m.useState(!1),[s,l]=m.useState(""),[d,h]=m.useState(null),f=m.useRef(null),g=ia();return m.useEffect(()=>{const x=window.setTimeout(()=>i(!0),g?0:500);return()=>window.clearTimeout(x)},[g]),m.useEffect(()=>{var x;d&&((x=f.current)==null||x.focus())},[d]),r.jsxs(WT,{children:[r.jsx(HT,{children:r.jsxs(UT,{children:[r.jsx(m2,{children:r.jsx(pt,{mark:"circle",size:h2,tone:"auto",state:"active",streamCount:0,"aria-label":"Ultron"})}),r.jsx(_A,{children:pT}),a&&r.jsxs(qT,{children:[r.jsx(CA,{children:fT}),r.jsx(g2,{"aria-label":"Get started",children:r.jsxs(KT,{noValidate:!0,onSubmit:x=>{x.preventDefault(),s.trim()===""||p2(s)?t():h({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(Fn,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:r.jsx(v2,{ref:f,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:x=>{l(x.target.value),d&&h(null)}})}),r.jsx(ZT,{variant:"primary",size:"lg",type:"submit",children:"Get started free"})]})})]})]})}),a&&r.jsx(_T,{})]})}function kT({onNext:t}){const[a,i]=m.useState(""),[s,l]=m.useState(null),d=m.useRef(null);return m.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),r.jsxs(r.Fragment,{children:[r.jsx(sa,{children:"Create your account"}),r.jsx(la,{children:"Continue with your work account, or log in with email."}),r.jsxs(XT,{"aria-label":"Create your account",children:[r.jsx(VT,{children:wT.map(h=>{const f=h.mark;return r.jsx(GT,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(f,{}),onClick:t,children:h.label},h.id)})}),r.jsx(YT,{"aria-hidden":"true",children:r.jsx(QT,{children:"or log in with email"})}),r.jsxs(JT,{noValidate:!0,onSubmit:h=>{h.preventDefault(),a.trim()===""||p2(a)?t():l({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(eA,{children:r.jsx(Fn,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:r.jsx(v2,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:a,onChange:h=>{i(h.target.value),s&&l(null)}})})}),r.jsx(tA,{variant:"primary",size:"md",type:"submit",iconOnly:!0,"aria-label":"Continue",children:r.jsx(X0,{size:16})})]}),r.jsx(nA,{children:"Creating an account means you agree to Teambridge's Terms and Privacy Policy."})]})]})}function _T(){const[t,a]=m.useState(0);m.useEffect(()=>{const s=setInterval(()=>a(l=>(l+1)%u0.length),gT);return()=>clearInterval(s)},[]);const i=u0[t];return r.jsx(rA,{children:r.jsxs(oA,{children:[r.jsx(CT,{}),r.jsxs(vA,{children:[r.jsx(yA,{children:`“${i.quote}”`}),r.jsxs(xA,{children:[r.jsx(Nn,{name:i.name,color:i.avatarColor,size:"sm"}),r.jsxs(wA,{children:[r.jsx(bA,{children:i.name}),r.jsx(kA,{children:`${i.role} · ${i.org}`})]})]})]},t),r.jsxs(hA,{children:[r.jsx(pA,{children:"Trusted by frontline operators"}),r.jsxs(mA,{"aria-label":"Operators using Teambridge",children:[r.jsx(p0,{children:d0.map(s=>r.jsx(f0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),r.jsx(p0,{"aria-hidden":"true",children:d0.map(s=>r.jsx(f0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function CT(){const t=IT(mT,1600);return r.jsxs(aA,{children:[r.jsxs(iA,{children:[r.jsx(lA,{"aria-hidden":"true"}),r.jsx(cA,{children:"Ultron Index · Live"})]}),r.jsx(dA,{children:t.toLocaleString("en-US")}),r.jsx(uA,{children:"pieces of work Ultron performed this week"})]})}function jT({onAnswer:t}){const[a,i]=m.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&t(TT(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(sa,{children:"Where do you work?"}),r.jsx(NA,{children:"Paste your company website and I'll get a head start on turning things on."}),r.jsx(x2,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(w2,{children:[r.jsx(ZA,{"aria-hidden":"true",children:r.jsx(mm,{size:18})}),r.jsx(b2,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(k2,{children:r.jsx(ea,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(_2,{children:r.jsx(C2,{type:"button",onClick:()=>t({noWebsite:!0}),children:"No website? Pick a workforce instead."})})]})}const Od=["Turning on scheduling","Setting up pay","Activating compliance","Handing off the busywork"],f2=820;function ST({website:t,failedWebsite:a,onDone:i}){return t?r.jsx(NT,{website:t,onDone:i}):r.jsx(RT,{failedWebsite:a,onDone:i})}function NT({website:t,onDone:a}){const i=ia(),{name:s}=AT(t),l=Od.length,[d,h]=m.useState(1),[f,g]=m.useState(!1);m.useEffect(()=>{if(f){const w=window.setTimeout(()=>a({}),i?400:1600);return()=>window.clearTimeout(w)}const y=window.setTimeout(()=>d>=l?g(!0):h(w=>w+1),i?140:f2);return()=>window.clearTimeout(y)},[d,f,i]);const x=f?"All set.":Od[d-1];return r.jsxs(Xo,{children:[r.jsx(sa,{children:`Turning on ${s}`}),r.jsx(la,{children:"Hang tight — I'm getting your workspace ready."}),r.jsxs(PA,{role:"status","aria-live":"polite",children:[r.jsx(zA,{role:"progressbar","aria-valuemin":0,"aria-valuemax":l,"aria-valuenow":f?l:d-1,"aria-label":`Step ${Math.min(d,l)} of ${l}`,$complete:f,children:Od.map((y,w)=>{const k=f||w+1<d?"done":w+1===d?"working":"pending";return r.jsx(OA,{"data-status":k,children:k!=="pending"&&r.jsx(DA,{$working:k==="working"})},y)})}),r.jsxs(FA,{children:[r.jsxs(WA,{$working:!f,children:[f&&r.jsx(Sn,{size:14}),x]},x),r.jsx(BA,{children:`${f?l:d} of ${l}`})]})]})]})}const MT=[{icon:gm,label:"Travel nurses"},{icon:xu,label:"Event staff"},{icon:mu,label:"Security guards"},{icon:cm,label:"Warehouse temps"}];function RT({failedWebsite:t,onDone:a}){const[i,s]=m.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&a({workforceType:h})};return r.jsxs(Xo,{children:[t&&r.jsx(HA,{children:"No problem — let's set it up together."}),r.jsx(sa,{children:"What kind of workforce are you running?"}),r.jsx(la,{children:"Say it in your own words — or grab one of these."}),r.jsx(MA,{children:MT.map(({icon:h,label:f})=>r.jsxs(RA,{type:"button",onClick:()=>a({workforceType:f}),children:[r.jsx(h,{size:16}),f]},f))}),r.jsx(x2,{onSubmit:h=>{h.preventDefault(),d()},children:r.jsxs(w2,{children:[r.jsx(b2,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),r.jsx(k2,{children:r.jsx(ea,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function LT({onComplete:t}){const a=ia(),[i,s]=m.useState(0),l=m.useRef({}),d=ei[i],h=f=>{l.current={...l.current,[d.key]:f.title};const g=i+1;g>=ei.length?t(l.current):s(g)};return r.jsxs(Xo,{children:[r.jsx(qA,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ei.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ei.length}`,children:ei.map((f,g)=>r.jsx(VA,{"data-filled":g<=i||void 0},f.key))}),r.jsx(sa,{children:d.prompt}),r.jsx(la,{children:d.sub}),r.jsx(GA,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,g)=>{const x=f.icon;return r.jsxs(YA,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${g*70}ms`},onClick:()=>h(f),children:[r.jsx(y2,{"aria-hidden":"true",children:r.jsx(x,{size:20})}),r.jsxs(QA,{children:[r.jsx(LA,{children:f.title}),r.jsx($A,{children:f.caption})]})]},f.id)})})]},d.key)}const $T={roster:{prompt:"Upload your roster",sub:"Drop in your team roster and I'll bring your people in for you.",title:"Choose your roster or drag & drop it here.",description:"Any spreadsheet or document works.",accept:".csv,.xlsx,.xls,.pdf"},schedule:{prompt:"Upload your schedule",sub:"Drop in your current schedule and I'll turn it into shifts for you.",title:"Choose your schedule or drag & drop it here.",description:"Any spreadsheet or document works.",accept:".csv,.xlsx,.xls,.pdf"}};function h0({kind:t,onDone:a}){const i=$T[t],s=ia(),[l,d]=m.useState(null),h=m.useRef(!1),f=g=>{h.current||(h.current=!0,d({name:g.name,type:g.type}),window.setTimeout(()=>a({name:g.name}),s?250:1100))};return r.jsxs(Xo,{children:[r.jsx(sa,{children:i.prompt}),r.jsx(la,{children:i.sub}),r.jsx(UA,{children:r.jsx(Nm,{variant:"area",accept:i.accept,state:l?"complete":"empty",file:l,title:i.title,description:i.description,onFileSelect:f})}),r.jsx(_2,{children:r.jsx(C2,{type:"button",onClick:()=>a(null),children:"Skip for now"})})]},t)}function TT(t){const a=t.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function AT(t){const a=t.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function IT(t,a){const i=ia(),[s,l]=m.useState(i?t:0);return m.useEffect(()=>{if(i){l(t);return}let d=0,h=null;const f=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/a),y=1-Math.pow(1-x,3);l(Math.round(t*y)),x<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[t,a,i]),s}function ia(){const[t,a]=m.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return m.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),t}const ET=v.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,PT=v.button`
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
`,zT=v.main`
  /* Above the backdrop layer. */
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  /* The augment canvas fills the frame as a fixed two-column split — its panes
     scroll internally, so the frame itself doesn't scroll. */
  overflow-y: ${t=>t.$augment?"hidden":"auto"};
  /* When a turn is snapped to the top (see the scroll effect), stop below the
     sticky build header rather than tucking under it — plus an 8px breath so the
     snapped turn sits a touch below the header edge, not flush against it. */
  scroll-padding-top: calc(var(--space-20) + var(--space-2));
  display: flex;
  flex-direction: column;
`,OT=v.div`
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
  padding: ${t=>t.$build?"var(--space-8)":"var(--space-24)"} var(--space-6);
  padding-bottom: var(--space-24);

  /* The augment canvas fills the frame edge-to-edge (no centered column, no
     padding) so its two panes can carry their own chrome. */
  ${t=>t.$augment&&Be`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,DT=v.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,m2=v.span`
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
`,FT=je`
  from { opacity: 1; }
  to   { opacity: 0; }
`,BT=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${t=>t.$exiting&&Be`
      animation: ${FT} ${u2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${t=>t.$augment&&Be`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WT=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,HT=v.div`
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
`,UT=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Yu=je`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,qT=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Yu} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,g2=v.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,VT=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,GT=v(Re)`
  && {
    width: 100%;
    ${aa}
  }
`,YT=v.div`
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
`,QT=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,KT=v.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,ZT=v(Re)`
  && {
    width: 100%;
  }
`,XT=v(g2)`
  margin-top: var(--space-2);
`,JT=v.form`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  width: 100%;
`,eA=v.div`
  flex: 1;
  min-width: 0;
  /* Flex so the Alloy Tooltip's inline-flex wrapper stretches to fill, keeping
     the email field full-width beside the submit button. */
  display: flex;
  & > * { flex: 1; min-width: 0; }
`,v2=v(Lm)`
  && [class*='shell'] {
    ${aa}
  }
  && input {
    background: transparent;
  }
`,tA=v(Re)`
  && {
    flex-shrink: 0;
    width: var(--space-10);
    height: var(--space-10);
  }
`,nA=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,rA=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Frosted-glass wrapper: a translucent tint of the surface (theme-aware via
     color-mix on the semantic token) plus a backdrop blur, so the ambient
     particles show through softly. */
  padding: var(--space-10);
  background: color-mix(in srgb, var(--color-bg-primary) 72%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-border-transparent);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
  animation: ${Yu} var(--duration-slow) var(--ease-out) both;

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
`,oA=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;

  @media (min-width: 801px) {
    flex: 1;
    justify-content: space-between;
  }
`,aA=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,iA=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,sA=je`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,lA=v.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${sA} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,dA=v.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,uA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,hA=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
`,pA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,fA=je`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,mA=v.div`
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
`,p0=v.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${fA} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,f0=v.img`
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
`,gA=je`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,vA=v.figure`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
  /* Room for the tallest card (four relaxed text-md lines plus the byline) —
     raw px deliberately, so rotating cards of different lengths never reflow
     the spread panel around them. */
  min-height: 152px;
  animation: ${gA} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yA=v.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,xA=v.figcaption`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,wA=v.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,bA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,kA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,_A=v.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Yu} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,CA=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,jA=je`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Xo=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${t=>t.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${jA} ${uT}ms ${Zo} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sa=v.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,la=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,SA=je`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,NA=v(la)`
  animation: ${SA} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MA=v.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,RA=v.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${aa}
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
    ${d2}
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
`,y2=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,LA=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,$A=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,TA=je`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,AA=je`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,IA=je`
  from { width: 0; }
  to   { width: 100%; }
`,EA=je`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,m0=je`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,PA=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,zA=v.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${t=>t.$complete&&Be`
    & > * > * {
      animation: ${EA} 900ms ${Zo};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,OA=v.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,DA=v.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${t=>t.$working&&Be`
    animation: ${IA} ${f2}ms ${Zo} both;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FA=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
`,BA=v.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,WA=v.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${m0} var(--duration-base) ${Zo} both;

  /* The settled state's check reads as the finish line. */
  svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }

  ${t=>t.$working&&Be`
    /* Working shimmer — a light band sweeping through the muted label. Both
       gradient stops are semantic tokens, so light and dark themes track. */
    color: transparent;
    background: linear-gradient(
      90deg,
      var(--color-content-tertiary) 0%,
      var(--color-content-primary) 50%,
      var(--color-content-tertiary) 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: ${m0} var(--duration-base) ${Zo} both,
      ${AA} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    ${t=>t.$working&&Be`
      color: var(--color-content-secondary);
      background: none;
    `}
  }
`,HA=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,UA=v.div`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  text-align: left;

  & [class*='area']:not([data-drag-over]) {
    ${aa}
    border-style: dashed;
  }
`,qA=v.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,VA=v.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,GA=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,YA=v.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${aa}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${TA} var(--duration-base) ${Zo} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${y2} {
    margin-bottom: 0;
  }

  &:hover {
    ${d2}
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
`,QA=v.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,x2=v.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${aa}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,w2=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,KA=je`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,ZA=v.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${KA} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,b2=v.textarea`
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
`,k2=v(vu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,_2=v.div`
  margin-top: var(--space-3);
`,C2=v.button`
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
`;function XA({onEnterApp:t}){return r.jsx(hT,{onComplete:a=>t==null?void 0:t(a)})}const JA=768,eI=`(max-width: ${JA-1}px)`;function Qu(t){const[a,i]=m.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return m.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(t),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[t]),a}function tI(){return Qu(eI)}const nI="48px",rI="240px",g0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",oI=v.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?rI:nI};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?Be`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Be`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,aI=v.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,iI=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,sI=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,lI=v.button`
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
`,cI=v.div`
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
`,dI=v.span`
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
`,v0=v.div`
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
`,Dd=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uI="var(--gradient-ai)",j2=v.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&Be`
      background: var(--color-bg-primary, white);
      box-shadow: ${g0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&Be`
      background: ${uI};
      box-shadow: ${g0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,S2=v.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: ${t=>t.$disabled?"default":"pointer"};
  /* Color cascades to icon (currentColor) and label (inherit) */
  color: ${t=>t.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${t=>t.$disabled?.32:t.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${t=>t.$disabled||t.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: ${t=>t.$disabled?.32:1};
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,N2=v.span`
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
`,M2=v.div`
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
`,hI=v.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Fd=v.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;v.span`
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
`;const pI=v.button`
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
  padding: ${t=>t.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,fI=v.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${t=>t.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,mI=v.span`
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
`;v.span`
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
`;v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function Bd({item:t,isExpanded:a,showNewBadge:i,isAi:s}){const l=t.isActive??!1,d=t.disabled??!1;return r.jsx(j2,{$isActive:l,$isAi:s,children:r.jsxs(S2,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:t.onClick,"aria-current":l?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(M2,{children:[t.hasUnread&&r.jsx(hI,{}),l&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(N2,{children:t.label}),a&&i&&r.jsx(Jo,{variant:"primary",children:"New"})]})})}function gI({items:t,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}){const[y,w]=m.useState(!1);return r.jsx(oI,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:r.jsxs(aI,{$isExpanded:y,children:[r.jsxs(iI,{children:[r.jsxs(lI,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[r.jsx(cI,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(dI,{children:s.name}),r.jsx(v0,{children:r.jsx(bf,{})})]})]}),r.jsx(Dd,{children:t.map(k=>r.jsx(Bd,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Fd,{}),r.jsx(Dd,{children:a.map(k=>r.jsx(Bd,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),r.jsxs(sI,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Fd,{}),r.jsx(Dd,{children:i.map(k=>r.jsx(Bd,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),r.jsx(Fd,{}),r.jsx(j2,{$isActive:!1,children:r.jsxs(S2,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(M2,{children:r.jsx(hS,{})}),y&&r.jsx(N2,{children:"Settings"})]})}),r.jsxs(pI,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(fI,{$color:l.avatarColor,children:l.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(mI,{children:l.name}),r.jsx(v0,{children:r.jsx(bf,{})})]})]})]})]})})}const vI=270,yI=v.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${t=>t.$isVisible?`${t.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${t=>t.$isResizing?"none":"width 200ms ease"};
`,xI=v.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,wI=v.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,bI=v.h2`
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
`,kI=v.div`
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
`,_I=v.button`
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
`,CI=v.div`
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
`,jI=v.button`
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
`;v.div`
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
`;const SI=v.span`
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
`,NI=v.div`
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
`,MI=je`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,RI=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${MI} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,y0=v.button`
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
`,LI=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&Be`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,$I=v.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,TI=v.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,AI=v.div`
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
  background: ${t=>t.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,II=v.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,EI=v.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,PI=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,R2=v.div`
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
`;v.button`
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
`;function L2(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function zI(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Ku={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function OI({item:t}){return r.jsx(on,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(R2,{children:t.icon??r.jsx(L2,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Ku})}function DI({group:t}){const[a,i]=m.useState(t.defaultExpanded??!0),[s,l]=m.useState(!1),d=t.maxVisible,f=d!=null&&!s&&t.children.length>d?t.children.slice(0,d):t.children,g=t.children.length-f.length;return r.jsxs(LI,{$outlined:t.outlined,children:[r.jsxs(jI,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(NI,{children:a?r.jsx(er,{size:16}):r.jsx(an,{size:16})}),r.jsx(SI,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs(RI,{children:[f.map(x=>r.jsx(on,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(R2,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Ku},x.id)),g>0&&r.jsxs(y0,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&t.children.length>d&&r.jsx(y0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function FI({heading:t,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=vI,onWidthChange:k,minWidth:A=220,maxWidth:_=520}){const j=y!==void 0,R=m.useRef(null),[T,S]=m.useState(!1);return m.useEffect(()=>{if(!T||!k)return;const C=R.current;if(!C)return;const z=C.getBoundingClientRect().left,L=I=>{const D=Math.min(_,Math.max(A,I.clientX-z));k(D)},M=()=>S(!1);window.addEventListener("mousemove",L),window.addEventListener("mouseup",M);const N=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",M),document.body.style.userSelect=N,document.body.style.cursor=""}},[T,k,A,_]),r.jsxs(yI,{ref:R,$isVisible:a,$width:w,$isResizing:T,"aria-label":"Secondary navigation",children:[r.jsxs(xI,{children:[(t||x)&&r.jsxs(wI,{children:[r.jsx(bI,{children:t}),x]}),d&&!j&&r.jsxs(kI,{children:[r.jsx(Rm,{size:"sm",placeholder:"Search...",value:h,onChange:C=>f==null?void 0:f(C.target.value)}),r.jsx(_I,{onClick:g,"aria-label":"Filter",children:r.jsx(zI,{})})]})]}),j?y:r.jsxs(CI,{children:[s,i.map(C=>C.type==="single"?r.jsx(OI,{item:C.item},C.item.id):C.type==="group"?r.jsx(DI,{group:C.group},C.group.id):C.type==="divider"?r.jsx(EI,{},C.id):r.jsx($I,{children:C.label.label},C.label.id))]}),l.length>0&&r.jsxs(TI,{children:[r.jsx(II,{}),l.map(C=>r.jsx(on,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:r.jsx(PI,{children:C.icon??r.jsx(L2,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Ku},C.id))]}),k&&a&&r.jsx(AI,{$isResizing:T,onMouseDown:C=>{C.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const BI=v.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,WI=v.div`
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
`,$2=v.div`
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
`,HI=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,UI=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function qI(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function x0(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function w0(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function VI(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function GI({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const g=a.filter(w=>w.variant==="secondary"),x=a.filter(w=>w.variant==="primary"),y=Qu("(prefers-color-scheme: dark)");return r.jsxs(BI,{$noBorder:l,children:[r.jsx(WI,{children:typeof t=="string"?r.jsx($2,{children:t}):t}),r.jsxs(HI,{children:[r.jsxs(UI,{children:[r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(qI,{})}),g.map(w=>r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(w0,{}),trailingArtwork:r.jsx(x0,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>r.jsx(Re,{variant:"primary",size:"sm",leadingArtwork:r.jsx(w0,{}),trailingArtwork:r.jsx(x0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(VI,{})}),s&&r.jsx(D0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const YI=v.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,QI=v.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,KI=v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,ZI=v.main`
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
`,b0="tb:secondary-nav-width",k0=270,_0=220,C0=520;function XI({items:t,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:A,showSearch:_,searchValue:j,onSearchChange:R,onFilterClick:T,headerSlot:S,bodyContent:C,heading:z,actions:L,showActivityButton:M,showPonderButton:N,noBorder:I,onActivityClick:D,onPonderClick:G,onDotsClick:F,children:H,showSecondaryNav:Y=!0,showTopNav:Z=!0}){const[se,ne]=m.useState(()=>{if(typeof window>"u")return k0;const oe=window.localStorage.getItem(b0),J=oe?parseInt(oe,10):NaN;return Number.isFinite(J)?Math.min(C0,Math.max(_0,J)):k0});return m.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(b0,String(se))},[se]),r.jsxs(YI,{children:[r.jsx(gI,{items:t,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}),r.jsxs(QI,{children:[Y&&r.jsx(FI,{heading:y,menuEntries:w,menuHeader:k,pageEntries:A,isVisible:!0,showSearch:_,searchValue:j,onSearchChange:R,onFilterClick:T,headerSlot:S,bodyContent:C,width:se,onWidthChange:ne,minWidth:_0,maxWidth:C0}),r.jsxs(KI,{children:[Z&&r.jsx(GI,{heading:z,actions:L,showActivityButton:M,showPonderButton:N,noBorder:I,onActivityClick:D,onPonderClick:G,onDotsClick:F}),r.jsx(ZI,{children:H})]})]})]})}function JI({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[s,l]=m.useState(null),d=m.useRef(0);return m.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const y=h(),w=y-d.current;Math.abs(w)<t||(w>0&&y>a?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",f,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",f)}},[t,a,i]),s}const eE=v.button`
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

  background: ${t=>t.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,tE=v.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,nE=v.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Wd({label:t,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(eE,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(tE,{children:t}),r.jsx(nE,{children:r.jsx(er,{size:14})})]})}const rE=v.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,oE=v.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,j0=v.button`
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
`,aE=v.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,S0=v.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,iE=v.button`
  all: unset;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${t=>t.$color??"var(--color-bg-tertiary, #eceef1)"};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  flex: 0 0 auto;
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;function sE({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const lE=m.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,user:d,hidden:h,onHamburgerClick:f,onPrimaryClick:g,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:w,onUserClick:k},A){return r.jsx(rE,{ref:A,$hidden:h,children:r.jsxs(oE,{children:[r.jsx(j0,{onClick:f,"aria-label":"Open navigation",children:r.jsx(sE,{size:18})}),r.jsxs(aE,{children:[r.jsx(Wd,{label:a,isOpen:l==="primary",onClick:g,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(S0,{"aria-hidden":"true",children:"›"}),r.jsx(Wd,{label:i,isOpen:l==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(S0,{"aria-hidden":"true",children:"›"}),r.jsx(Wd,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(j0,{onClick:w,"aria-label":"Search",children:r.jsx(yu,{size:18})}),r.jsx(iE,{onClick:k,$color:d.avatarColor,"aria-label":`User: ${d.name}`,children:d.initials})]})})}),cE=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,dE=v.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${cE} 160ms ease-out;
`;function uE({onDismiss:t}){return m.useEffect(()=>{const a=s=>{s.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx(dE,{onClick:t,"aria-hidden":"true"})}const hE=je`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,pE=v.div`
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
  animation: ${hE} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,fE=v.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,mE=v.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,gE=v.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,vE=v.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Zu({title:t,children:a,ariaLabel:i}){return r.jsxs(pE,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(fE,{children:r.jsx(mE,{"aria-hidden":"true"})}),t&&r.jsx(gE,{children:t}),r.jsx(vE,{children:a})]})}const Cl=v.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,hi=v.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,eo=v.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${t=>t.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${t=>t.$active?600:400};
  background: ${t=>t.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,Uo=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,to=v.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,no=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function yE({activeId:t,groups:a,onSelect:i}){return r.jsx(Zu,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Cl,{children:a.map((s,l)=>r.jsxs("div",{children:[l>0&&r.jsx(hi,{children:s.label}),l===0&&r.jsx(hi,{children:s.label}),s.items.map(d=>{const h=d.id===t;return r.jsxs(eo,{$active:h,onClick:()=>i(d.id),"aria-pressed":h,children:[r.jsx(Uo,{children:d.icon}),r.jsx(to,{children:d.label}),h&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)})]},s.id))})})}function xE({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(Zu,{title:t,ariaLabel:`${t} sections`,children:r.jsx(Cl,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(eo,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Uo,{children:d.icon}),r.jsx(to,{children:d.label}),d.isActive&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(hi,{children:l.label}),l.children.map(d=>r.jsxs(eo,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Uo,{children:d.icon}),r.jsx(to,{children:d.label}),d.isActive&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id))]},l.id)})})})}const wE=v.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,bE=v.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,kE=v.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function _E({personas:t,activeId:a,onSelect:i}){return r.jsx(Zu,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Cl,{children:t.map(s=>{const l=s.id===a;return r.jsxs(eo,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(to,{as:"span",children:r.jsxs(wE,{children:[r.jsx(bE,{children:s.name}),r.jsx(kE,{children:s.role})]})}),l&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},s.id)})})})}const CE=je`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,jE=v.aside`
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
  animation: ${CE} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,SE=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,NE=v.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,ME=v.button`
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
`,RE=v.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,LE=60;function $E({title:t,onDismiss:a,children:i}){const s=m.useRef(null),l=m.useRef(null);return m.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},f=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<LE&&a()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[a]),r.jsxs(jE,{ref:s,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(SE,{children:[r.jsx(NE,{children:t??"Navigation"}),r.jsx(ME,{onClick:a,"aria-label":"Close navigation",children:r.jsx(mi,{size:18})})]}),r.jsx(RE,{children:i})]})}function TE({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:s,onDismiss:l}){return r.jsx($E,{title:"Navigation",onDismiss:l,children:r.jsx(Cl,{children:a.map(d=>r.jsxs("div",{children:[r.jsx(hi,{children:d.label}),d.items.map(h=>{const f=h.id===t;return r.jsxs("div",{children:[r.jsxs(eo,{$active:f,onClick:()=>{s(h.id),l()},"aria-pressed":f,children:[r.jsx(Uo,{children:h.icon}),r.jsx(to,{children:h.label}),f&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(g=>{if(g.type==="single"){const y=g.item;return r.jsxs(eo,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(Uo,{children:y.icon}),r.jsx(to,{children:y.label}),y.isActive&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},y.id)}if(g.type!=="group")return null;const x=g.group;return r.jsxs("div",{children:[r.jsx(hi,{children:x.label}),x.children.map(y=>r.jsxs(eo,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(Uo,{children:y.icon}),r.jsx(to,{children:y.label}),y.isActive&&r.jsx(no,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},y.id))]},x.id)})})]},h.id)})]},d.id))})})}const N0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],AE=v.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,IE=v.main`
  flex: 1 1 auto;
  min-width: 0;
`;function EE(t){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:g,onMobileNavigate:x,onSelectPersona:y,children:w}=t,[k,A]=m.useState(null),_=JI({deadZonePx:8,topThresholdPx:20}),j=k===null&&_==="down",R=m.useMemo(()=>{if(!i)return null;const z=N0.find(L=>L.id===i);return(z==null?void 0:z.name)??null},[i]),T=()=>A(null),S=z=>A(z),C=k!==null;return r.jsxs(AE,{children:[r.jsx(lE,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:R,openOverlay:k,user:f,hidden:j,onHamburgerClick:()=>S("drawer"),onPrimaryClick:()=>S("primary"),onSecondaryClick:()=>S("secondary"),onTertiaryClick:R?()=>S("persona"):void 0,onSearchClick:()=>{S("drawer")},onUserClick:()=>g==null?void 0:g()}),r.jsx(IE,{children:w}),C&&r.jsx(uE,{onDismiss:T}),k==="primary"&&r.jsx(yE,{activeId:a,groups:s,onSelect:z=>{x(z),T()}}),k==="secondary"&&r.jsx(xE,{moduleLabel:l,entries:h,onSelect:T}),k==="persona"&&r.jsx(_E,{personas:N0,activeId:i,onSelect:z=>{y(z),T()}}),k==="drawer"&&r.jsx(TE,{activeId:a,groups:s,currentMenuEntries:h,onSelectModule:z=>x(z),onDismiss:T})]})}function PE(t){if(tI()&&t.mobileNav){const i=t.mobileNav;return r.jsx(EE,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(XI,{...t})}const zE="/Ultron_Onboarding/assets/policy-icon-active-CqCS8_ex.svg",OE="/Ultron_Onboarding/assets/automation-icon-active-DlguOjgR.svg",DE=1100,FE=[{icon:Kr,label:"Build out coverage"},{icon:Dn,label:"Chase open shifts"},{icon:vi,label:"Tidy compliance"}],BE=1200,WE=1600;function HE(t){if(!t)return null;const a=t.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function UE(t){const a=[],i=HE(t.companyWebsite);return i?a.push({icon:Js,label:"Workspace",detail:`${i} is set up and ready`}):t.workforceType&&a.push({icon:Js,label:"Workspace",detail:`Set up for ${t.workforceType.toLowerCase()}`}),t.pay&&a.push({icon:wu,label:"Pay",detail:`Turned on for ${t.pay} workers`}),t.billing&&a.push({icon:Cu,label:"Billing",detail:`Set to bill ${t.billing.toLowerCase()}`}),t.worksite&&a.push({icon:ku,label:"Sites",detail:t.worksite}),t.rosterFile&&a.push({icon:Kr,label:"Roster",detail:`Brought your people in from ${t.rosterFile.name}`}),t.scheduleFile&&a.push({icon:Dn,label:"Schedule",detail:`Turned ${t.scheduleFile.name} into shifts`}),a}function qE(t){const a=!t.rosterFile,i=!t.scheduleFile;return a&&i?"Two things I still need: your roster and your current schedule. Drop them into this chat whenever you’re ready — I’ll bring your people in and turn the schedule into shifts.":a?"One thing I still need: your roster. Drop it into this chat whenever you’re ready and I’ll bring your people in.":i?"One thing I still need: your current schedule. Drop it into this chat whenever you’re ready and I’ll turn it into shifts.":null}function VE({answers:t={},onContinued:a}){const[i,s]=m.useState([]),[l,d]=m.useState(""),[h,f]=m.useState([]),[g,x]=m.useState(!1),[y,w]=m.useState(""),[k,A]=m.useState(!1),[_,j]=m.useState(!1),R=m.useRef(null),T=m.useRef(null),S=m.useRef(null),C=UE(t),z=qE(t);m.useEffect(()=>()=>{R.current&&window.clearTimeout(R.current)},[]),m.useEffect(()=>(T.current=window.setTimeout(()=>j(!0),BE),()=>{T.current&&window.clearTimeout(T.current)}),[]);const L=()=>{A(!0),T.current&&window.clearTimeout(T.current),T.current=window.setTimeout(()=>j(!1),WE)};m.useEffect(()=>{var F;(F=S.current)==null||F.scrollIntoView({block:"end",behavior:"smooth"})},[i,g]);const M=(l.trim().length>0||h.length>0)&&!g,N=F=>{const H=Array.from(F,Y=>Y.name);f(Y=>[...Y,...H.filter(Z=>!Y.includes(Z))])},I=F=>f(H=>H.filter(Y=>Y!==F)),D=(F,H=[])=>{if(!F&&H.length===0||g)return;i.some(Z=>Z.role==="operator")||a==null||a();const Y=i.filter(Z=>Z.role==="ultron").length;s(Z=>[...Z,{role:"operator",text:F,...H.length?{attachments:H}:{}}]),x(!0),R.current=window.setTimeout(()=>{s(Z=>[...Z,{role:"ultron",text:Fu(F,Y)}]),x(!1),R.current=null},DE)},G=()=>{const F=l.trim();!F&&h.length===0||g||(D(F,h),d(""),f([]))};return r.jsxs(GE,{children:[r.jsx(YE,{children:r.jsxs(QE,{children:[r.jsx(KE,{"aria-hidden":"true",children:r.jsx(al,{})}),r.jsxs(ZE,{children:[r.jsx(XE,{children:"Welcome"}),r.jsx(JE,{children:"Your workspace setup, recapped"})]})]})}),r.jsx(eP,{children:r.jsxs(nP,{children:[r.jsx(Hd,{"data-from":"ultron",children:r.jsxs(rP,{children:[r.jsx(Bs,{"data-from":"ultron",children:"Your workspace is live — I turned on the essentials from what you shared."}),C.length>0&&r.jsxs(oP,{"aria-label":"What Ultron set up",children:[r.jsx(aP,{children:r.jsx(iP,{children:"Here’s what I set up"})}),r.jsx(sP,{children:C.map(F=>{const H=F.icon;return r.jsxs(lP,{children:[r.jsx(cP,{"aria-hidden":"true",children:r.jsx(H,{size:16})}),r.jsxs(dP,{children:[r.jsx(uP,{children:F.label}),r.jsx(hP,{children:F.detail})]}),r.jsx(pP,{"aria-hidden":"true",children:r.jsx(Sn,{size:18})})]},F.label)})})]}),z&&r.jsx(Bs,{"data-from":"ultron",children:z}),r.jsx(Bs,{"data-from":"ultron",children:"What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate."})]})}),i.map((F,H)=>r.jsx(Hd,{"data-from":F.role,children:r.jsxs(PP,{"data-from":F.role,children:[F.text&&r.jsx(Bs,{"data-from":F.role,children:F.text}),F.attachments&&r.jsx(zP,{children:F.attachments.map(Y=>r.jsxs(R0,{children:[r.jsx(jr,{size:14}),Y]},Y))})]})},H)),g&&r.jsx(Hd,{"data-from":"ultron",children:r.jsxs(MP,{"aria-label":"Ultron is replying",children:[r.jsx(Ud,{}),r.jsx(Ud,{}),r.jsx(Ud,{})]})}),r.jsx("div",{ref:S})]})}),r.jsxs(RP,{children:[i.length===0&&r.jsx(LP,{"aria-label":"Suggested next steps",children:FE.map(({icon:F,label:H})=>r.jsxs($P,{type:"button",onClick:()=>D(H),children:[r.jsx(F,{size:14}),H]},H))}),r.jsxs(TP,{onSubmit:F=>{F.preventDefault(),G()},children:[h.length>0&&r.jsx(IP,{"aria-label":"Files to send",children:h.map(F=>r.jsxs(R0,{children:[r.jsx(jr,{size:14}),F,r.jsx(EP,{type:"button","aria-label":`Remove ${F}`,onClick:()=>I(F),children:r.jsx(si,{size:12})})]},F))}),r.jsxs(AP,{children:[r.jsx(L0,{children:r.jsx(wm,{state:"idle",onSelect:N})}),r.jsx(OP,{rows:1,value:l,placeholder:"Tell Ultron what to take on next…","aria-label":"Message Ultron",onChange:F=>d(F.target.value),onKeyDown:F=>{F.key==="Enter"&&!F.shiftKey&&(F.preventDefault(),G())}}),r.jsx(L0,{children:r.jsx(ea,{state:M?"ready":"disabled-invalid",onSend:G})})]})]})]}),r.jsx(yP,{}),r.jsx(O9,{open:_,onClose:()=>j(!1),size:"md","aria-label":"Unlock your grant",children:r.jsxs(xP,{children:[r.jsx(wP,{type:"button","aria-label":"Close",onClick:()=>j(!1),children:r.jsx(si,{size:18})}),r.jsx(bP,{children:"Turn it on and your first $1,000 of work is free."}),r.jsx(kP,{children:"Give me one number to reach you. I propose before I act — you always say go — and confirming your number unlocks your grant."}),k?r.jsxs(jP,{role:"status",children:[r.jsx(Sn,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(_P,{onSubmit:F=>{F.preventDefault(),y.trim()&&L()},children:[r.jsx(CP,{type:"tel",value:y,placeholder:"(214) 555-0148","aria-label":"Mobile number",autoComplete:"tel",onChange:F=>w(F.target.value)}),r.jsx(Re,{type:"submit",variant:"tertiary",size:"lg",disabled:!y.trim(),children:"Unlock & turn on"})]}),r.jsx(SP,{children:"You’ll get 100,000 credits — 3 months of work performed, on us. Ultron only texts when it has a proposal. Msg & data rates may apply. Reply STOP to opt out."})]})})]})}const GE=v.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,YE=v.header`
  flex-shrink: 0;
`,QE=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  /* Same rhythm as the event card header — air above, tight to the body. */
  padding: var(--space-4) var(--space-6) var(--space-2);
`,KE=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,ZE=v.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,XE=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,JE=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eP=v.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,tP=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,nP=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Hd=v.div`
  display: flex;
  animation: ${tP} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rP=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,Bs=v.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

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
`,oP=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,aP=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,iP=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,sP=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,lP=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
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
`,cP=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,dP=v.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,uP=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,hP=v.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,pP=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,M0="cubic-bezier(0.22, 1, 0.36, 1)",fP=je`
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
`,mP=je`
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
`,gP=je`
  from { opacity: 0; transform: scale(0.96) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,vP=je`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,yP=Oj`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${fP} 440ms ${M0} both;

    & > div {
      animation: ${gP} 560ms ${M0} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${mP} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${vP} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`,xP=v.section`
  position: relative;
  width: 100%;
  padding: var(--space-8);
  background: var(--color-bg-inverse-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`,wP=v.button`
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
  background: transparent;
  color: var(--color-content-inverse-tertiary);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);

  &:hover {
    background: color-mix(in srgb, var(--color-content-inverse-primary) 10%, transparent);
    color: var(--color-content-inverse-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`,bP=v.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-content-inverse-primary);
`,kP=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-secondary);
`,_P=v.form`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: var(--space-3);
`,CP=v.input`
  flex: 1;
  min-width: 200px;
  height: var(--space-12);
  padding: 0 var(--space-4);
  background: var(--color-bg-inverse-tertiary);
  border: 1px solid color-mix(in srgb, var(--color-content-inverse-tertiary) 35%, transparent);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  color: var(--color-content-inverse-primary);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-default);

  &::placeholder { color: var(--color-content-inverse-tertiary); }
  &:focus-visible { border-color: var(--color-border-focus); }
`,jP=v.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-12);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-inverse-primary);

  & svg {
    flex-shrink: 0;
    color: var(--color-matcha-content-tertiary);
  }
`,SP=v.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-tertiary);
`,NP=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,MP=v.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`,Ud=v.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${NP} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,RP=v.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
`,LP=v.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,$P=v.button`
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
`,TP=v.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within { border-color: var(--color-border-focus); }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,AP=v.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,IP=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,R0=v.span`
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
`,EP=v.button`
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
`,PP=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,zP=v.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,OP=v.textarea`
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
`,L0=v.div`
  flex-shrink: 0;
`;function DP(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function FP(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function BP(t,a){const i=m.useRef("");m.useEffect(()=>{const s=()=>{const d=FP(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),m.useEffect(()=>{const s=DP(t);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const cu="ultron-theme";function WP(){if(typeof window>"u")return null;const t=window.localStorage.getItem(cu);return t==="light"||t==="dark"?t:null}function HP(t){const a=document.documentElement;a.classList.toggle("dark",t==="dark"),a.classList.toggle("light",t==="light")}function UP(){const t=Qu("(prefers-color-scheme: dark)"),[a,i]=m.useState(WP);m.useEffect(()=>{HP(a),!(typeof window>"u")&&(a?window.localStorage.setItem(cu,a):window.localStorage.removeItem(cu))},[a]);const s=a??(t?"dark":"light"),l=m.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(t?"dark":"light")?null:d)},[s,t]);return{theme:s,toggle:l}}const qP=v.button`
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
`;function VP(){const{theme:t,toggle:a}=UP(),i=t==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(qP,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(Z0,{size:18}):r.jsx(vm,{size:18})})}const $0=[{id:"ultron",label:"Ultron",icon:r.jsx(pt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(tS,{})},{id:"engaged",label:"Engaged",icon:r.jsx(nS,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(rS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(oS,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(aS,{})}],T0=[{id:"apps",label:"Apps",icon:r.jsx(iS,{})}],A0=[{id:"docs",label:"Document Studio",icon:r.jsx(al,{})},{id:"form",label:"Form",icon:r.jsx(sS,{})},{id:"tasks",label:"Tasks",icon:r.jsx(lS,{})},{id:"policy",label:"Policy",icon:r.jsx(cS,{}),activeIcon:r.jsx("img",{src:zE,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(oo,{}),activeIcon:r.jsx("img",{src:OE,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(dS,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(uS,{})}],GP=v.button`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state.
     12px sides align the text with the group rows below. */
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${t=>t.$active?"var(--color-bg-secondary, rgba(70, 108, 255, 0.06))":"transparent"};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`,YP=je`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,QP=je`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,KP=je`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,ZP=v.span`
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
      ${YP} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${QP} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${KP} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,XP=v.button`
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
`;function JP({onDelete:t}){const a=i=>i.stopPropagation();return r.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:r.jsx(ju,{placement:"bottom-end",width:168,trigger:r.jsx(XP,{type:"button","aria-label":"Page options",children:r.jsx(pm,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(xm,{size:16}),onClick:t}]}]})})}const ez={needs_attention:r.jsx(im,{size:16}),live:r.jsx(pt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(Sn,{size:16})},tz={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function nz({introAnswers:t,onRestartOnboarding:a}={}){const[i,s]=m.useState("ultron"),[l,d]=m.useState("home-overview"),[h,f]=m.useState(null),[g,x]=m.useState(null),[y,w]=m.useState("ultron"),[k,A]=m.useState("employees"),_=OS(),[j,R]=m.useState(!!t),[T,S]=m.useState(!1),[C,z]=m.useState(!t),[L,M]=m.useState([]),[N,I]=m.useState(null),D=m.useRef(0),G=O=>{w("ultron"),R(!1),z(!1),I(O)},F=()=>{w("ultron"),z(!1),I(null),R(!0)},H=()=>{const O=`page-${D.current++}`;M(ae=>[...ae,{id:O,title:"New page"}]),G(O)},[Y,Z]=m.useState({}),[se,ne]=m.useState({}),oe=m.useRef({}),J=(O,ae)=>{const me=ae.trim();if(!me)return;const de=(Y[O]??[]).filter(fe=>fe.role==="ultron").length;Z(fe=>({...fe,[O]:[...fe[O]??[],{role:"operator",text:me}]})),ne(fe=>({...fe,[O]:!0})),oe.current[O]=window.setTimeout(()=>{Z(fe=>({...fe,[O]:[...fe[O]??[],{role:"ultron",text:Fu(me,de)}]})),ne(fe=>({...fe,[O]:!1})),delete oe.current[O]},1100)},U=O=>{oe.current[O]&&(window.clearTimeout(oe.current[O]),delete oe.current[O]),M(ae=>ae.filter(me=>me.id!==O)),Z(ae=>{const{[O]:me,...de}=ae;return de}),ne(ae=>{const{[O]:me,...de}=ae;return de}),N===O&&(I(null),z(!0))},V=C?"live":_.selectedThread?tz[_.selectedThread.status]:"new";BP({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:x});const E=O=>O.map(ae=>({...ae,isActive:ae.id===i,disabled:ae.id!=="ultron",onClick:ae.id==="ultron"?()=>s("ultron"):void 0})),$=[{id:"memory",label:"Memory",icon:r.jsx(hl,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:r.jsx(J0,{size:16})}],q=r.jsx($2,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),K={id:"welcome",label:"Welcome",icon:r.jsx(al,{}),isActive:j,onClick:F},ie=L.map(O=>({id:O.id,label:O.title,icon:r.jsx(al,{}),isActive:N===O.id,onClick:()=>G(O.id),trailingSlot:r.jsx(JP,{onDelete:()=>U(O.id)})})),he=y==="account"?su.map(O=>({type:"single",item:{id:O.id,label:O.label,icon:O.icon,isActive:k===O.id,onClick:()=>A(O.id)}})):_.groups.flatMap(O=>{const ae=O.id==="needs_attention"?"new":O.id==="resolved"?"done":"working",me=O.id==="needs_attention"?O.threads.filter(xe=>xe.status==="analyzing"||_.revealedNewIds.includes(xe.id)):O.threads,de=O.id==="needs_attention"&&!T||O.id==="live"&&T,fe=O.id==="needs_attention"?ie:[],ke={type:"group",group:{id:O.id,label:O.id==="needs_attention"?"New":O.label,icon:ez[O.id],trailingBadge:r.jsx(Jo,{children:me.length+(de?1:0)+fe.length}),defaultExpanded:!0,outlined:!1,children:[...de?[K]:[],...fe,...me.map(xe=>({id:xe.id,label:xe.id.startsWith("detected_")?r.jsx(h$,{text:r0(xe.name,ae)}):r0(xe.name,ae),icon:ae==="new"?xe.status==="analyzing"?r.jsx(pt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(pt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ae==="working"?r.jsx(pt,{mark:"orbit2d",size:32,tone:"auto",state:xe.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(pt,{mark:"pulse",size:32,tone:"auto",state:xe.status==="unresolved"?"idle":"static",color:xe.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(xe.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!C&&!N&&V===ae&&_.selectedId===xe.id,onClick:()=>{w("ultron"),R(!1),z(!1),I(null),_.setSelectedId(xe.id)},trailingSlot:_.savedWorkflowIds.includes(xe.id)?r.jsx(Fn,{content:"Saved as workflow",placement:"top",children:r.jsx(ZP,{"aria-label":"Saved as workflow",children:r.jsx(oo,{})})}):void 0}))]}};return O.id==="resolved"?[{type:"divider",id:"done-divider"},ke]:O.id==="live"?[{type:"divider",id:"working-divider"},ke]:[ke]}),te=[{id:"main",label:"Workspace",items:E($0)},{id:"tools",label:"Tools",items:E(T0)},{id:"bottom",label:"Apps",items:E(A0)}];return r.jsxs(r.Fragment,{children:[r.jsx(VP,{}),r.jsx(PE,{items:E($0),toolItems:E(T0),bottomItems:E(A0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:a,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:he,menuHeader:y==="ultron"?r.jsx(GP,{$active:C&&!N,onClick:()=>{w("ultron"),R(!1),z(!0),I(null)},"aria-label":"Live — Ultron presence","aria-current":C&&!N?"page":void 0,children:r.jsx(i$,{onNew:H})}):void 0,pageEntries:$,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:q,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:te,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:O=>{O==="ultron"&&s("ultron")},onSelectPersona:f},children:y==="memory"?r.jsx(g$,{}):y==="account"?r.jsx(L$,{collectionId:k}):j?r.jsx(VE,{answers:t,onContinued:()=>S(!0)}):N?r.jsx(UL,{messages:Y[N]??[],replying:se[N]??!1,onSend:O=>J(N,O)},N):r.jsx(EL,{threads:_.threads,stageById:_.stageById,section:V,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),R(!1),z(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const I0="cubic-bezier(0.22, 1, 0.36, 1)",E0=je`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,rz=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,oz=v.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${E0} 460ms ${I0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${E0} 500ms ${I0} 90ms both;
  }
  main {
    animation: ${rz} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,qd="tb:onboarding-complete";function az(){const[t,a]=m.useState(()=>{try{return window.sessionStorage.getItem(qd)==="1"}catch{return!1}}),[i,s]=m.useState(null),l=h=>{try{window.sessionStorage.setItem(qd,"1")}catch{}s(h),a(!0)},d=()=>{try{window.sessionStorage.removeItem(qd)}catch{}window.location.hash="",window.location.reload()};return t?r.jsx(oz,{children:r.jsx(nz,{introAnswers:i??void 0,onRestartOnboarding:d})}):r.jsx(XA,{onEnterApp:l})}I3.createRoot(document.getElementById("root")).render(r.jsx(Qt.StrictMode,{children:r.jsx(sw,{children:r.jsx(az,{})})}));
