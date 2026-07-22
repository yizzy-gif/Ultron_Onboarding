(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function m0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},Za={},xd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function lx(){if(Z1)return Ae;Z1=1;var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,N={};function L(E,$,D){this.props=E,this.context=$,this.refs=N,this.updater=D||T}L.prototype.isReactComponent={},L.prototype.setState=function(E,$){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,$,"setState")},L.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function A(){}A.prototype=L.prototype;function R(E,$,D){this.props=E,this.context=$,this.refs=N,this.updater=D||T}var C=R.prototype=new A;C.constructor=R,_(C,L.prototype),C.isPureReactComponent=!0;var O=Array.isArray,j=Object.prototype.hasOwnProperty,M={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function I(E,$,D){var V,ne={},le=null,J=null;if($!=null)for(V in $.ref!==void 0&&(J=$.ref),$.key!==void 0&&(le=""+$.key),$)j.call($,V)&&!S.hasOwnProperty(V)&&(ne[V]=$[V]);var F=arguments.length-2;if(F===1)ne.children=D;else if(1<F){for(var ie=Array(F),me=0;me<F;me++)ie[me]=arguments[me+2];ne.children=ie}if(E&&E.defaultProps)for(V in F=E.defaultProps,F)ne[V]===void 0&&(ne[V]=F[V]);return{$$typeof:e,type:E,key:le,ref:J,props:ne,_owner:M.current}}function P(E,$){return{$$typeof:e,type:E.type,key:$,ref:E.ref,props:E.props,_owner:E._owner}}function W(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function Y(E){var $={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(D){return $[D]})}var q=/\/+/g;function K(E,$){return typeof E=="object"&&E!==null&&E.key!=null?Y(""+E.key):$.toString(36)}function ee(E,$,D,V,ne){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var J=!1;if(E===null)J=!0;else switch(le){case"string":case"number":J=!0;break;case"object":switch(E.$$typeof){case e:case a:J=!0}}if(J)return J=E,ne=ne(J),E=V===""?"."+K(J,0):V,O(ne)?(D="",E!=null&&(D=E.replace(q,"$&/")+"/"),ee(ne,$,D,"",function(me){return me})):ne!=null&&(W(ne)&&(ne=P(ne,D+(!ne.key||J&&J.key===ne.key?"":(""+ne.key).replace(q,"$&/")+"/")+E)),$.push(ne)),1;if(J=0,V=V===""?".":V+":",O(E))for(var F=0;F<E.length;F++){le=E[F];var ie=V+K(le,F);J+=ee(le,$,D,ie,ne)}else if(ie=k(E),typeof ie=="function")for(E=ie.call(E),F=0;!(le=E.next()).done;)le=le.value,ie=V+K(le,F++),J+=ee(le,$,D,ie,ne);else if(le==="object")throw $=String(E),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return J}function ae(E,$,D){if(E==null)return E;var V=[],ne=0;return ee(E,V,"","",function(le){return $.call(D,le,ne++)}),V}function re(E){if(E._status===-1){var $=E._result;$=$(),$.then(function(D){(E._status===0||E._status===-1)&&(E._status=1,E._result=D)},function(D){(E._status===0||E._status===-1)&&(E._status=2,E._result=D)}),E._status===-1&&(E._status=0,E._result=$)}if(E._status===1)return E._result.default;throw E._result}var se={current:null},Z={transition:null},U={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Z,ReactCurrentOwner:M};function G(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:ae,forEach:function(E,$,D){ae(E,function(){$.apply(this,arguments)},D)},count:function(E){var $=0;return ae(E,function(){$++}),$},toArray:function(E){return ae(E,function($){return $})||[]},only:function(E){if(!W(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ae.Component=L,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=R,Ae.StrictMode=s,Ae.Suspense=v,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Ae.act=G,Ae.cloneElement=function(E,$,D){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var V=_({},E.props),ne=E.key,le=E.ref,J=E._owner;if($!=null){if($.ref!==void 0&&(le=$.ref,J=M.current),$.key!==void 0&&(ne=""+$.key),E.type&&E.type.defaultProps)var F=E.type.defaultProps;for(ie in $)j.call($,ie)&&!S.hasOwnProperty(ie)&&(V[ie]=$[ie]===void 0&&F!==void 0?F[ie]:$[ie])}var ie=arguments.length-2;if(ie===1)V.children=D;else if(1<ie){F=Array(ie);for(var me=0;me<ie;me++)F[me]=arguments[me+2];V.children=F}return{$$typeof:e,type:E.type,key:ne,ref:le,props:V,_owner:J}},Ae.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},Ae.createElement=I,Ae.createFactory=function(E){var $=I.bind(null,E);return $.type=E,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(E){return{$$typeof:f,render:E}},Ae.isValidElement=W,Ae.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:re}},Ae.memo=function(E,$){return{$$typeof:y,type:E,compare:$===void 0?null:$}},Ae.startTransition=function(E){var $=Z.transition;Z.transition={};try{E()}finally{Z.transition=$}},Ae.unstable_act=G,Ae.useCallback=function(E,$){return se.current.useCallback(E,$)},Ae.useContext=function(E){return se.current.useContext(E)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(E){return se.current.useDeferredValue(E)},Ae.useEffect=function(E,$){return se.current.useEffect(E,$)},Ae.useId=function(){return se.current.useId()},Ae.useImperativeHandle=function(E,$,D){return se.current.useImperativeHandle(E,$,D)},Ae.useInsertionEffect=function(E,$){return se.current.useInsertionEffect(E,$)},Ae.useLayoutEffect=function(E,$){return se.current.useLayoutEffect(E,$)},Ae.useMemo=function(E,$){return se.current.useMemo(E,$)},Ae.useReducer=function(E,$,D){return se.current.useReducer(E,$,D)},Ae.useRef=function(E){return se.current.useRef(E)},Ae.useState=function(E){return se.current.useState(E)},Ae.useSyncExternalStore=function(E,$,D){return se.current.useSyncExternalStore(E,$,D)},Ae.useTransition=function(){return se.current.useTransition()},Ae.version="18.3.1",Ae}var X1;function _u(){return X1||(X1=1,xd.exports=lx()),xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function cx(){if(J1)return Za;J1=1;var e=_u(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,v,y){var x,w={},k=null,T=null;y!==void 0&&(k=""+y),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(T=v.ref);for(x in v)s.call(v,x)&&!d.hasOwnProperty(x)&&(w[x]=v[x]);if(f&&f.defaultProps)for(x in v=f.defaultProps,v)w[x]===void 0&&(w[x]=v[x]);return{$$typeof:a,type:f,key:k,ref:T,props:w,_owner:l.current}}return Za.Fragment=i,Za.jsx=h,Za.jsxs=h,Za}var ef;function dx(){return ef||(ef=1,vd.exports=cx()),vd.exports}var r=dx(),g=_u();const Qt=m0(g);var Ps={},yd={exports:{}},qt={},wd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function ux(){return tf||(tf=1,(function(e){function a(Z,U){var G=Z.length;Z.push(U);e:for(;0<G;){var E=G-1>>>1,$=Z[E];if(0<l($,U))Z[E]=U,Z[G]=$,G=E;else break e}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var U=Z[0],G=Z.pop();if(G!==U){Z[0]=G;e:for(var E=0,$=Z.length,D=$>>>1;E<D;){var V=2*(E+1)-1,ne=Z[V],le=V+1,J=Z[le];if(0>l(ne,G))le<$&&0>l(J,ne)?(Z[E]=J,Z[le]=G,E=le):(Z[E]=ne,Z[V]=G,E=V);else if(le<$&&0>l(J,G))Z[E]=J,Z[le]=G,E=le;else break e}}return U}function l(Z,U){var G=Z.sortIndex-U.sortIndex;return G!==0?G:Z.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var v=[],y=[],x=1,w=null,k=3,T=!1,_=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Z){for(var U=i(y);U!==null;){if(U.callback===null)s(y);else if(U.startTime<=Z)s(y),U.sortIndex=U.expirationTime,a(v,U);else break;U=i(y)}}function O(Z){if(N=!1,C(Z),!_)if(i(v)!==null)_=!0,re(j);else{var U=i(y);U!==null&&se(O,U.startTime-Z)}}function j(Z,U){_=!1,N&&(N=!1,A(I),I=-1),T=!0;var G=k;try{for(C(U),w=i(v);w!==null&&(!(w.expirationTime>U)||Z&&!Y());){var E=w.callback;if(typeof E=="function"){w.callback=null,k=w.priorityLevel;var $=E(w.expirationTime<=U);U=e.unstable_now(),typeof $=="function"?w.callback=$:w===i(v)&&s(v),C(U)}else s(v);w=i(v)}if(w!==null)var D=!0;else{var V=i(y);V!==null&&se(O,V.startTime-U),D=!1}return D}finally{w=null,k=G,T=!1}}var M=!1,S=null,I=-1,P=5,W=-1;function Y(){return!(e.unstable_now()-W<P)}function q(){if(S!==null){var Z=e.unstable_now();W=Z;var U=!0;try{U=S(!0,Z)}finally{U?K():(M=!1,S=null)}}else M=!1}var K;if(typeof R=="function")K=function(){R(q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=q,K=function(){ae.postMessage(null)}}else K=function(){L(q,0)};function re(Z){S=Z,M||(M=!0,K())}function se(Z,U){I=L(function(){Z(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){_||T||(_=!0,re(j))},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(v)},e.unstable_next=function(Z){switch(k){case 1:case 2:case 3:var U=3;break;default:U=k}var G=k;k=U;try{return Z()}finally{k=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Z,U){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var G=k;k=Z;try{return U()}finally{k=G}},e.unstable_scheduleCallback=function(Z,U,G){var E=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?E+G:E):G=E,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=G+$,Z={id:x++,callback:U,priorityLevel:Z,startTime:G,expirationTime:$,sortIndex:-1},G>E?(Z.sortIndex=G,a(y,Z),i(v)===null&&Z===i(y)&&(N?(A(I),I=-1):N=!0,se(O,G-E))):(Z.sortIndex=$,a(v,Z),_||T||(_=!0,re(j))),Z},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(Z){var U=k;return function(){var G=k;k=U;try{return Z.apply(this,arguments)}finally{k=G}}}})(bd)),bd}var nf;function hx(){return nf||(nf=1,wd.exports=ux()),wd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function px(){if(rf)return qt;rf=1;var e=_u(),a=hx();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function k(t){return v.call(w,t)?!0:v.call(x,t)?!1:y.test(t)?w[t]=!0:(x[t]=!0,!1)}function T(t,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,n,o,c){if(n===null||typeof n>"u"||T(t,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(t,n,o,c,u,p,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=b}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){L[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];L[n]=new N(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){L[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){L[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){L[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){L[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){L[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){L[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){L[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(A,R);L[n]=new N(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(A,R);L[n]=new N(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(A,R);L[n]=new N(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){L[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),L.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){L[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,n,o,c){var u=L.hasOwnProperty(n)?L[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_(n,o,u,c)&&(o=null),c||u===null?k(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,c=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?t.setAttributeNS(c,n,o):t.setAttribute(n,o))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),M=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),Y=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Z=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,E;function $(t){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+t}var D=!1;function V(t,n){if(!t||D)return"";D=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(te){var c=te}Reflect.construct(t,[],n)}else{try{n.call()}catch(te){c=te}t.call(n.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),p=c.stack.split(`
`),b=u.length-1,z=p.length-1;1<=b&&0<=z&&u[b]!==p[z];)z--;for(;1<=b&&0<=z;b--,z--)if(u[b]!==p[z]){if(b!==1||z!==1)do if(b--,z--,0>z||u[b]!==p[z]){var B=`
`+u[b].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=b&&0<=z);break}}}finally{D=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?$(t):""}function ne(t){switch(t.tag){case 5:return $(t.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return t=V(t.type,!1),t;case 11:return t=V(t.type.render,!1),t;case 1:return t=V(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case M:return"Portal";case P:return"Profiler";case I:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case re:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}function J(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function F(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ie(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function me(t){var n=ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,p.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ue(t){t._valueTracker||(t._valueTracker=me(t))}function fe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return t&&(c=ie(t)?t.checked?"true":"false":t.value),t=c,t!==o?(n.setValue(t),!0):!1}function _e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ye(t,n){var o=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function $e(t,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=F(n.value!=null?n.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function We(t,n){n=n.checked,n!=null&&C(t,"checked",n,!1)}function Ve(t,n){We(t,n);var o=F(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Fe(t,n.type,o):n.hasOwnProperty("defaultValue")&&Fe(t,n.type,F(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Ge(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Fe(t,n,o){(n!=="number"||_e(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function Ye(t,n,o,c){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&c&&(t[o].defaultSelected=!0)}else{for(o=""+F(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function At(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function He(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Qe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:F(o)}}function It(t,n){var o=F(n.value),c=F(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Ct(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function En(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pn(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?En(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ir,ha=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,c,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function go(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Al=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(t){Al.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Er[n]=Er[t]})});function Ri(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Er.hasOwnProperty(t)&&Er[t]?(""+n).trim():n+"px"}function Me(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=Ri(o,n[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,u):t[o]=u}}var tt=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,n){if(n){if(tt[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Et(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pr=null;function pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fa=null,vo=null,xo=null;function fh(t){if(t=Pa(t)){if(typeof fa!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Zi(n),fa(t.stateNode,t.type,n))}}function mh(t){vo?xo?xo.push(t):xo=[t]:vo=t}function gh(){if(vo){var t=vo,n=xo;if(xo=vo=null,fh(t),n)for(t=0;t<n.length;t++)fh(n[t])}}function vh(t,n){return t(n)}function xh(){}var Il=!1;function yh(t,n,o){if(Il)return t(n,o);Il=!0;try{return vh(t,n,o)}finally{Il=!1,(vo!==null||xo!==null)&&(xh(),gh())}}function ma(t,n){var o=t.stateNode;if(o===null)return null;var c=Zi(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var El=!1;if(f)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){El=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{El=!1}function fv(t,n,o,c,u,p,b,z,B){var te=Array.prototype.slice.call(arguments,3);try{n.apply(o,te)}catch(de){this.onError(de)}}var va=!1,Mi=null,Li=!1,Pl=null,mv={onError:function(t){va=!0,Mi=t}};function gv(t,n,o,c,u,p,b,z,B){va=!1,Mi=null,fv.apply(mv,arguments)}function vv(t,n,o,c,u,p,b,z,B){if(gv.apply(this,arguments),va){if(va){var te=Mi;va=!1,Mi=null}else throw Error(i(198));Li||(Li=!0,Pl=te)}}function zr(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function wh(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function bh(t){if(zr(t)!==t)throw Error(i(188))}function xv(t){var n=t.alternate;if(!n){if(n=zr(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,c=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return bh(u),t;if(p===c)return bh(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=p;else{for(var b=!1,z=u.child;z;){if(z===o){b=!0,o=u,c=p;break}if(z===c){b=!0,c=u,o=p;break}z=z.sibling}if(!b){for(z=p.child;z;){if(z===o){b=!0,o=p,c=u;break}if(z===c){b=!0,c=p,o=u;break}z=z.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function kh(t){return t=xv(t),t!==null?_h(t):null}function _h(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=_h(t);if(n!==null)return n;t=t.sibling}return null}var Ch=a.unstable_scheduleCallback,jh=a.unstable_cancelCallback,yv=a.unstable_shouldYield,wv=a.unstable_requestPaint,it=a.unstable_now,bv=a.unstable_getCurrentPriorityLevel,zl=a.unstable_ImmediatePriority,Sh=a.unstable_UserBlockingPriority,$i=a.unstable_NormalPriority,kv=a.unstable_LowPriority,Nh=a.unstable_IdlePriority,Ti=null,zn=null;function _v(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Ti,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Sv,Cv=Math.log,jv=Math.LN2;function Sv(t){return t>>>=0,t===0?32:31-(Cv(t)/jv|0)|0}var Ai=64,Ii=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ei(t,n){var o=t.pendingLanes;if(o===0)return 0;var c=0,u=t.suspendedLanes,p=t.pingedLanes,b=o&268435455;if(b!==0){var z=b&~u;z!==0?c=xa(z):(p&=b,p!==0&&(c=xa(p)))}else b=o&~u,b!==0?c=xa(b):p!==0&&(c=xa(p));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((c&4)!==0&&(c|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)o=31-bn(n),u=1<<o,c|=t[o],n&=~u;return c}function Nv(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,n){for(var o=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var b=31-bn(p),z=1<<b,B=u[b];B===-1?((z&o)===0||(z&c)!==0)&&(u[b]=Nv(z,n)):B<=n&&(t.expiredLanes|=z),p&=~z}}function Ol(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rh(){var t=Ai;return Ai<<=1,(Ai&4194240)===0&&(Ai=64),t}function Dl(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function ya(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-bn(n),t[n]=o}function Mv(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-bn(o),p=1<<u;n[u]=0,c[u]=-1,t[u]=-1,o&=~p}}function Fl(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var c=31-bn(o),u=1<<c;u&n|t[c]&n&&(t[c]|=n),o&=~u}}var Ue=0;function Mh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lh,Bl,$h,Th,Ah,Wl=!1,Pi=[],sr=null,lr=null,cr=null,wa=new Map,ba=new Map,dr=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(n.pointerId)}}function ka(t,n,o,c,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Pa(n),n!==null&&Bl(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $v(t,n,o,c,u){switch(n){case"focusin":return sr=ka(sr,t,n,o,c,u),!0;case"dragenter":return lr=ka(lr,t,n,o,c,u),!0;case"mouseover":return cr=ka(cr,t,n,o,c,u),!0;case"pointerover":var p=u.pointerId;return wa.set(p,ka(wa.get(p)||null,t,n,o,c,u)),!0;case"gotpointercapture":return p=u.pointerId,ba.set(p,ka(ba.get(p)||null,t,n,o,c,u)),!0}return!1}function Eh(t){var n=Or(t.target);if(n!==null){var o=zr(n);if(o!==null){if(n=o.tag,n===13){if(n=wh(o),n!==null){t.blockedOn=n,Ah(t.priority,function(){$h(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zi(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=Ul(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Pr=c,o.target.dispatchEvent(c),Pr=null}else return n=Pa(o),n!==null&&Bl(n),t.blockedOn=o,!1;n.shift()}return!0}function Ph(t,n,o){zi(t)&&o.delete(n)}function Tv(){Wl=!1,sr!==null&&zi(sr)&&(sr=null),lr!==null&&zi(lr)&&(lr=null),cr!==null&&zi(cr)&&(cr=null),wa.forEach(Ph),ba.forEach(Ph)}function _a(t,n){t.blockedOn===n&&(t.blockedOn=null,Wl||(Wl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Tv)))}function Ca(t){function n(u){return _a(u,t)}if(0<Pi.length){_a(Pi[0],t);for(var o=1;o<Pi.length;o++){var c=Pi[o];c.blockedOn===t&&(c.blockedOn=null)}}for(sr!==null&&_a(sr,t),lr!==null&&_a(lr,t),cr!==null&&_a(cr,t),wa.forEach(n),ba.forEach(n),o=0;o<dr.length;o++)c=dr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)Eh(o),o.blockedOn===null&&dr.shift()}var yo=O.ReactCurrentBatchConfig,Oi=!0;function Av(t,n,o,c){var u=Ue,p=yo.transition;yo.transition=null;try{Ue=1,Hl(t,n,o,c)}finally{Ue=u,yo.transition=p}}function Iv(t,n,o,c){var u=Ue,p=yo.transition;yo.transition=null;try{Ue=4,Hl(t,n,o,c)}finally{Ue=u,yo.transition=p}}function Hl(t,n,o,c){if(Oi){var u=Ul(t,n,o,c);if(u===null)sc(t,n,c,Di,o),Ih(t,c);else if($v(u,t,n,o,c))c.stopPropagation();else if(Ih(t,c),n&4&&-1<Lv.indexOf(t)){for(;u!==null;){var p=Pa(u);if(p!==null&&Lh(p),p=Ul(t,n,o,c),p===null&&sc(t,n,c,Di,o),p===u)break;u=p}u!==null&&c.stopPropagation()}else sc(t,n,c,null,o)}}var Di=null;function Ul(t,n,o,c){if(Di=null,t=pa(c),t=Or(t),t!==null)if(n=zr(t),n===null)t=null;else if(o=n.tag,o===13){if(t=wh(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Di=t,null}function zh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bv()){case zl:return 1;case Sh:return 4;case $i:case kv:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var ur=null,ql=null,Fi=null;function Oh(){if(Fi)return Fi;var t,n=ql,o=n.length,c,u="value"in ur?ur.value:ur.textContent,p=u.length;for(t=0;t<o&&n[t]===u[t];t++);var b=o-t;for(c=1;c<=b&&n[o-c]===u[p-c];c++);return Fi=u.slice(t,1<c?1-c:void 0)}function Bi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wi(){return!0}function Dh(){return!1}function Kt(t){function n(o,c,u,p,b){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var z in t)t.hasOwnProperty(z)&&(o=t[z],this[z]=o?o(p):p[z]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wi:Dh,this.isPropagationStopped=Dh,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),n}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Kt(wo),ja=G({},wo,{view:0,detail:0}),Ev=Kt(ja),Gl,Yl,Sa,Hi=G({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(Gl=t.screenX-Sa.screenX,Yl=t.screenY-Sa.screenY):Yl=Gl=0,Sa=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),Fh=Kt(Hi),Pv=G({},Hi,{dataTransfer:0}),zv=Kt(Pv),Ov=G({},ja,{relatedTarget:0}),Ql=Kt(Ov),Dv=G({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Kt(Dv),Bv=G({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=Kt(Bv),Hv=G({},wo,{data:0}),Bh=Kt(Hv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vv[t])?!!n[t]:!1}function Kl(){return Gv}var Yv=G({},ja,{key:function(t){if(t.key){var n=Uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?Bi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=Kt(Yv),Kv=G({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Kt(Kv),Zv=G({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Xv=Kt(Zv),Jv=G({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),e3=Kt(Jv),t3=G({},Hi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n3=Kt(t3),r3=[9,13,27,32],Zl=f&&"CompositionEvent"in window,Na=null;f&&"documentMode"in document&&(Na=document.documentMode);var o3=f&&"TextEvent"in window&&!Na,Hh=f&&(!Zl||Na&&8<Na&&11>=Na),Uh=" ",qh=!1;function Vh(t,n){switch(t){case"keyup":return r3.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function a3(t,n){switch(t){case"compositionend":return Gh(n);case"keypress":return n.which!==32?null:(qh=!0,Uh);case"textInput":return t=n.data,t===Uh&&qh?null:t;default:return null}}function i3(t,n){if(bo)return t==="compositionend"||!Zl&&Vh(t,n)?(t=Oh(),Fi=ql=ur=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hh&&n.locale!=="ko"?null:n.data;default:return null}}var s3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!s3[t.type]:n==="textarea"}function Qh(t,n,o,c){mh(c),n=Yi(n,"onChange"),0<n.length&&(o=new Vl("onChange","change",null,o,c),t.push({event:o,listeners:n}))}var Ra=null,Ma=null;function l3(t){pp(t,0)}function Ui(t){var n=So(t);if(fe(n))return t}function c3(t,n){if(t==="change")return n}var Kh=!1;if(f){var Xl;if(f){var Jl="oninput"in document;if(!Jl){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Jl=typeof Zh.oninput=="function"}Xl=Jl}else Xl=!1;Kh=Xl&&(!document.documentMode||9<document.documentMode)}function Xh(){Ra&&(Ra.detachEvent("onpropertychange",Jh),Ma=Ra=null)}function Jh(t){if(t.propertyName==="value"&&Ui(Ma)){var n=[];Qh(n,Ma,t,pa(t)),yh(l3,n)}}function d3(t,n,o){t==="focusin"?(Xh(),Ra=n,Ma=o,Ra.attachEvent("onpropertychange",Jh)):t==="focusout"&&Xh()}function u3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ui(Ma)}function h3(t,n){if(t==="click")return Ui(n)}function p3(t,n){if(t==="input"||t==="change")return Ui(n)}function f3(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:f3;function La(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!v.call(n,u)||!kn(t[u],n[u]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,n){var o=ep(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=n&&c>=n)return{node:o,offset:n-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ep(o)}}function np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(){for(var t=window,n=_e();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=_e(t.document)}return n}function ec(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function m3(t){var n=rp(),o=t.focusedElem,c=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&np(o.ownerDocument.documentElement,o)){if(c!==null&&ec(o)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!t.extend&&p>c&&(u=c,c=p,p=u),u=tp(o,p);var b=tp(o,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),p>c?(t.addRange(n),t.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g3=f&&"documentMode"in document&&11>=document.documentMode,ko=null,tc=null,$a=null,nc=!1;function op(t,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nc||ko==null||ko!==_e(c)||(c=ko,"selectionStart"in c&&ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),$a&&La($a,c)||($a=c,c=Yi(tc,"onSelect"),0<c.length&&(n=new Vl("onSelect","select",null,n,o),t.push({event:n,listeners:c}),n.target=ko)))}function qi(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var _o={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},rc={},ap={};f&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Vi(t){if(rc[t])return rc[t];if(!_o[t])return t;var n=_o[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in ap)return rc[t]=n[o];return t}var ip=Vi("animationend"),sp=Vi("animationiteration"),lp=Vi("animationstart"),cp=Vi("transitionend"),dp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,n){dp.set(t,n),d(n,[t])}for(var oc=0;oc<up.length;oc++){var ac=up[oc],v3=ac.toLowerCase(),x3=ac[0].toUpperCase()+ac.slice(1);hr(v3,"on"+x3)}hr(ip,"onAnimationEnd"),hr(sp,"onAnimationIteration"),hr(lp,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function hp(t,n,o){var c=t.type||"unknown-event";t.currentTarget=o,vv(c,n,void 0,t),t.currentTarget=null}function pp(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],u=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var b=c.length-1;0<=b;b--){var z=c[b],B=z.instance,te=z.currentTarget;if(z=z.listener,B!==p&&u.isPropagationStopped())break e;hp(u,z,te),p=B}else for(b=0;b<c.length;b++){if(z=c[b],B=z.instance,te=z.currentTarget,z=z.listener,B!==p&&u.isPropagationStopped())break e;hp(u,z,te),p=B}}}if(Li)throw t=Pl,Li=!1,Pl=null,t}function Xe(t,n){var o=n[pc];o===void 0&&(o=n[pc]=new Set);var c=t+"__bubble";o.has(c)||(fp(n,t,2,!1),o.add(c))}function ic(t,n,o){var c=0;n&&(c|=4),fp(o,t,c,n)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[Gi]){t[Gi]=!0,s.forEach(function(o){o!=="selectionchange"&&(y3.has(o)||ic(o,!1,t),ic(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Gi]||(n[Gi]=!0,ic("selectionchange",!1,n))}}function fp(t,n,o,c){switch(zh(n)){case 1:var u=Av;break;case 4:u=Iv;break;default:u=Hl}o=u.bind(null,n,o,t),u=void 0,!El||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function sc(t,n,o,c,u){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var z=c.stateNode.containerInfo;if(z===u||z.nodeType===8&&z.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===u||B.nodeType===8&&B.parentNode===u))return;b=b.return}for(;z!==null;){if(b=Or(z),b===null)return;if(B=b.tag,B===5||B===6){c=p=b;continue e}z=z.parentNode}}c=c.return}yh(function(){var te=p,de=pa(o),he=[];e:{var ce=dp.get(t);if(ce!==void 0){var ge=Vl,xe=t;switch(t){case"keypress":if(Bi(o)===0)break e;case"keydown":case"keyup":ge=Qv;break;case"focusin":xe="focus",ge=Ql;break;case"focusout":xe="blur",ge=Ql;break;case"beforeblur":case"afterblur":ge=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Xv;break;case ip:case sp:case lp:ge=Fv;break;case cp:ge=e3;break;case"scroll":ge=Ev;break;case"wheel":ge=n3;break;case"copy":case"cut":case"paste":ge=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Wh}var we=(n&4)!==0,st=!we&&t==="scroll",Q=we?ce!==null?ce+"Capture":null:ce;we=[];for(var H=te,X;H!==null;){X=H;var pe=X.stateNode;if(X.tag===5&&pe!==null&&(X=pe,Q!==null&&(pe=ma(H,Q),pe!=null&&we.push(Ia(H,pe,X)))),st)break;H=H.return}0<we.length&&(ce=new ge(ce,xe,null,o,de),he.push({event:ce,listeners:we}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",ce&&o!==Pr&&(xe=o.relatedTarget||o.fromElement)&&(Or(xe)||xe[Yn]))break e;if((ge||ce)&&(ce=de.window===de?de:(ce=de.ownerDocument)?ce.defaultView||ce.parentWindow:window,ge?(xe=o.relatedTarget||o.toElement,ge=te,xe=xe?Or(xe):null,xe!==null&&(st=zr(xe),xe!==st||xe.tag!==5&&xe.tag!==6)&&(xe=null)):(ge=null,xe=te),ge!==xe)){if(we=Fh,pe="onMouseLeave",Q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(we=Wh,pe="onPointerLeave",Q="onPointerEnter",H="pointer"),st=ge==null?ce:So(ge),X=xe==null?ce:So(xe),ce=new we(pe,H+"leave",ge,o,de),ce.target=st,ce.relatedTarget=X,pe=null,Or(de)===te&&(we=new we(Q,H+"enter",xe,o,de),we.target=X,we.relatedTarget=st,pe=we),st=pe,ge&&xe)t:{for(we=ge,Q=xe,H=0,X=we;X;X=Co(X))H++;for(X=0,pe=Q;pe;pe=Co(pe))X++;for(;0<H-X;)we=Co(we),H--;for(;0<X-H;)Q=Co(Q),X--;for(;H--;){if(we===Q||Q!==null&&we===Q.alternate)break t;we=Co(we),Q=Co(Q)}we=null}else we=null;ge!==null&&mp(he,ce,ge,we,!1),xe!==null&&st!==null&&mp(he,st,xe,we,!0)}}e:{if(ce=te?So(te):window,ge=ce.nodeName&&ce.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ce.type==="file")var be=c3;else if(Yh(ce))if(Kh)be=p3;else{be=u3;var Ce=d3}else(ge=ce.nodeName)&&ge.toLowerCase()==="input"&&(ce.type==="checkbox"||ce.type==="radio")&&(be=h3);if(be&&(be=be(t,te))){Qh(he,be,o,de);break e}Ce&&Ce(t,ce,te),t==="focusout"&&(Ce=ce._wrapperState)&&Ce.controlled&&ce.type==="number"&&Fe(ce,"number",ce.value)}switch(Ce=te?So(te):window,t){case"focusin":(Yh(Ce)||Ce.contentEditable==="true")&&(ko=Ce,tc=te,$a=null);break;case"focusout":$a=tc=ko=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,op(he,o,de);break;case"selectionchange":if(g3)break;case"keydown":case"keyup":op(he,o,de)}var je;if(Zl)e:{switch(t){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else bo?Vh(t,o)&&(Se="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(Hh&&o.locale!=="ko"&&(bo||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&bo&&(je=Oh()):(ur=de,ql="value"in ur?ur.value:ur.textContent,bo=!0)),Ce=Yi(te,Se),0<Ce.length&&(Se=new Bh(Se,t,null,o,de),he.push({event:Se,listeners:Ce}),je?Se.data=je:(je=Gh(o),je!==null&&(Se.data=je)))),(je=o3?a3(t,o):i3(t,o))&&(te=Yi(te,"onBeforeInput"),0<te.length&&(de=new Bh("onBeforeInput","beforeinput",null,o,de),he.push({event:de,listeners:te}),de.data=je))}pp(he,n)})}function Ia(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Yi(t,n){for(var o=n+"Capture",c=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=ma(t,o),p!=null&&c.unshift(Ia(t,p,u)),p=ma(t,n),p!=null&&c.push(Ia(t,p,u))),t=t.return}return c}function Co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,n,o,c,u){for(var p=n._reactName,b=[];o!==null&&o!==c;){var z=o,B=z.alternate,te=z.stateNode;if(B!==null&&B===c)break;z.tag===5&&te!==null&&(z=te,u?(B=ma(o,p),B!=null&&b.unshift(Ia(o,B,z))):u||(B=ma(o,p),B!=null&&b.push(Ia(o,B,z)))),o=o.return}b.length!==0&&t.push({event:n,listeners:b})}var w3=/\r\n?/g,b3=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(w3,`
`).replace(b3,"")}function Qi(t,n,o){if(n=gp(n),gp(t)!==n&&o)throw Error(i(425))}function Ki(){}var lc=null,cc=null;function dc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,k3=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,_3=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(C3)}:uc;function C3(t){setTimeout(function(){throw t})}function hc(t,n){var o=n,c=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){t.removeChild(u),Ca(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);Ca(n)}function pr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function xp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),On="__reactFiber$"+jo,Ea="__reactProps$"+jo,Yn="__reactContainer$"+jo,pc="__reactEvents$"+jo,j3="__reactListeners$"+jo,S3="__reactHandles$"+jo;function Or(t){var n=t[On];if(n)return n;for(var o=t.parentNode;o;){if(n=o[Yn]||o[On]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=xp(t);t!==null;){if(o=t[On])return o;t=xp(t)}return n}t=o,o=t.parentNode}return null}function Pa(t){return t=t[On]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Zi(t){return t[Ea]||null}var fc=[],No=-1;function fr(t){return{current:t}}function Je(t){0>No||(t.current=fc[No],fc[No]=null,No--)}function Ke(t,n){No++,fc[No]=t.current,t.current=n}var mr={},Nt=fr(mr),Ft=fr(!1),Dr=mr;function Ro(t,n){var o=t.type.contextTypes;if(!o)return mr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Bt(t){return t=t.childContextTypes,t!=null}function Xi(){Je(Ft),Je(Nt)}function yp(t,n,o){if(Nt.current!==mr)throw Error(i(168));Ke(Nt,n),Ke(Ft,o)}function wp(t,n,o){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,J(t)||"Unknown",u));return G({},o,c)}function Ji(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Dr=Nt.current,Ke(Nt,t),Ke(Ft,Ft.current),!0}function bp(t,n,o){var c=t.stateNode;if(!c)throw Error(i(169));o?(t=wp(t,n,Dr),c.__reactInternalMemoizedMergedChildContext=t,Je(Ft),Je(Nt),Ke(Nt,t)):Je(Ft),Ke(Ft,o)}var Qn=null,es=!1,mc=!1;function kp(t){Qn===null?Qn=[t]:Qn.push(t)}function N3(t){es=!0,kp(t)}function gr(){if(!mc&&Qn!==null){mc=!0;var t=0,n=Ue;try{var o=Qn;for(Ue=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Qn=null,es=!1}catch(u){throw Qn!==null&&(Qn=Qn.slice(t+1)),Ch(zl,gr),u}finally{Ue=n,mc=!1}}return null}var Mo=[],Lo=0,ts=null,ns=0,hn=[],pn=0,Fr=null,Kn=1,Zn="";function Br(t,n){Mo[Lo++]=ns,Mo[Lo++]=ts,ts=t,ns=n}function _p(t,n,o){hn[pn++]=Kn,hn[pn++]=Zn,hn[pn++]=Fr,Fr=t;var c=Kn;t=Zn;var u=32-bn(c)-1;c&=~(1<<u),o+=1;var p=32-bn(n)+u;if(30<p){var b=u-u%5;p=(c&(1<<b)-1).toString(32),c>>=b,u-=b,Kn=1<<32-bn(n)+u|o<<u|c,Zn=p+t}else Kn=1<<p|o<<u|c,Zn=t}function gc(t){t.return!==null&&(Br(t,1),_p(t,1,0))}function vc(t){for(;t===ts;)ts=Mo[--Lo],Mo[Lo]=null,ns=Mo[--Lo],Mo[Lo]=null;for(;t===Fr;)Fr=hn[--pn],hn[pn]=null,Zn=hn[--pn],hn[pn]=null,Kn=hn[--pn],hn[pn]=null}var Zt=null,Xt=null,nt=!1,_n=null;function Cp(t,n){var o=vn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function jp(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Zt=t,Xt=pr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Zt=t,Xt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Fr!==null?{id:Kn,overflow:Zn}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=vn(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Zt=t,Xt=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(nt){var n=Xt;if(n){var o=n;if(!jp(t,n)){if(xc(t))throw Error(i(418));n=pr(o.nextSibling);var c=Zt;n&&jp(t,n)?Cp(c,o):(t.flags=t.flags&-4097|2,nt=!1,Zt=t)}}else{if(xc(t))throw Error(i(418));t.flags=t.flags&-4097|2,nt=!1,Zt=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function rs(t){if(t!==Zt)return!1;if(!nt)return Sp(t),nt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!dc(t.type,t.memoizedProps)),n&&(n=Xt)){if(xc(t))throw Np(),Error(i(418));for(;n;)Cp(t,n),n=pr(n.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){Xt=pr(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}Xt=null}}else Xt=Zt?pr(t.stateNode.nextSibling):null;return!0}function Np(){for(var t=Xt;t;)t=pr(t.nextSibling)}function $o(){Xt=Zt=null,nt=!1}function wc(t){_n===null?_n=[t]:_n.push(t)}var R3=O.ReactCurrentBatchConfig;function za(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,t));var u=c,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(b){var z=u.refs;b===null?delete z[p]:z[p]=b},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function os(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Rp(t){var n=t._init;return n(t._payload)}function Mp(t){function n(Q,H){if(t){var X=Q.deletions;X===null?(Q.deletions=[H],Q.flags|=16):X.push(H)}}function o(Q,H){if(!t)return null;for(;H!==null;)n(Q,H),H=H.sibling;return null}function c(Q,H){for(Q=new Map;H!==null;)H.key!==null?Q.set(H.key,H):Q.set(H.index,H),H=H.sibling;return Q}function u(Q,H){return Q=Cr(Q,H),Q.index=0,Q.sibling=null,Q}function p(Q,H,X){return Q.index=X,t?(X=Q.alternate,X!==null?(X=X.index,X<H?(Q.flags|=2,H):X):(Q.flags|=2,H)):(Q.flags|=1048576,H)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function z(Q,H,X,pe){return H===null||H.tag!==6?(H=ud(X,Q.mode,pe),H.return=Q,H):(H=u(H,X),H.return=Q,H)}function B(Q,H,X,pe){var be=X.type;return be===S?de(Q,H,X.props.children,pe,X.key):H!==null&&(H.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===re&&Rp(be)===H.type)?(pe=u(H,X.props),pe.ref=za(Q,H,X),pe.return=Q,pe):(pe=Rs(X.type,X.key,X.props,null,Q.mode,pe),pe.ref=za(Q,H,X),pe.return=Q,pe)}function te(Q,H,X,pe){return H===null||H.tag!==4||H.stateNode.containerInfo!==X.containerInfo||H.stateNode.implementation!==X.implementation?(H=hd(X,Q.mode,pe),H.return=Q,H):(H=u(H,X.children||[]),H.return=Q,H)}function de(Q,H,X,pe,be){return H===null||H.tag!==7?(H=Qr(X,Q.mode,pe,be),H.return=Q,H):(H=u(H,X),H.return=Q,H)}function he(Q,H,X){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ud(""+H,Q.mode,X),H.return=Q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case j:return X=Rs(H.type,H.key,H.props,null,Q.mode,X),X.ref=za(Q,null,H),X.return=Q,X;case M:return H=hd(H,Q.mode,X),H.return=Q,H;case re:var pe=H._init;return he(Q,pe(H._payload),X)}if(Qe(H)||U(H))return H=Qr(H,Q.mode,X,null),H.return=Q,H;os(Q,H)}return null}function ce(Q,H,X,pe){var be=H!==null?H.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return be!==null?null:z(Q,H,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case j:return X.key===be?B(Q,H,X,pe):null;case M:return X.key===be?te(Q,H,X,pe):null;case re:return be=X._init,ce(Q,H,be(X._payload),pe)}if(Qe(X)||U(X))return be!==null?null:de(Q,H,X,pe,null);os(Q,X)}return null}function ge(Q,H,X,pe,be){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return Q=Q.get(X)||null,z(H,Q,""+pe,be);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case j:return Q=Q.get(pe.key===null?X:pe.key)||null,B(H,Q,pe,be);case M:return Q=Q.get(pe.key===null?X:pe.key)||null,te(H,Q,pe,be);case re:var Ce=pe._init;return ge(Q,H,X,Ce(pe._payload),be)}if(Qe(pe)||U(pe))return Q=Q.get(X)||null,de(H,Q,pe,be,null);os(H,pe)}return null}function xe(Q,H,X,pe){for(var be=null,Ce=null,je=H,Se=H=0,yt=null;je!==null&&Se<X.length;Se++){je.index>Se?(yt=je,je=null):yt=je.sibling;var De=ce(Q,je,X[Se],pe);if(De===null){je===null&&(je=yt);break}t&&je&&De.alternate===null&&n(Q,je),H=p(De,H,Se),Ce===null?be=De:Ce.sibling=De,Ce=De,je=yt}if(Se===X.length)return o(Q,je),nt&&Br(Q,Se),be;if(je===null){for(;Se<X.length;Se++)je=he(Q,X[Se],pe),je!==null&&(H=p(je,H,Se),Ce===null?be=je:Ce.sibling=je,Ce=je);return nt&&Br(Q,Se),be}for(je=c(Q,je);Se<X.length;Se++)yt=ge(je,Q,Se,X[Se],pe),yt!==null&&(t&&yt.alternate!==null&&je.delete(yt.key===null?Se:yt.key),H=p(yt,H,Se),Ce===null?be=yt:Ce.sibling=yt,Ce=yt);return t&&je.forEach(function(jr){return n(Q,jr)}),nt&&Br(Q,Se),be}function we(Q,H,X,pe){var be=U(X);if(typeof be!="function")throw Error(i(150));if(X=be.call(X),X==null)throw Error(i(151));for(var Ce=be=null,je=H,Se=H=0,yt=null,De=X.next();je!==null&&!De.done;Se++,De=X.next()){je.index>Se?(yt=je,je=null):yt=je.sibling;var jr=ce(Q,je,De.value,pe);if(jr===null){je===null&&(je=yt);break}t&&je&&jr.alternate===null&&n(Q,je),H=p(jr,H,Se),Ce===null?be=jr:Ce.sibling=jr,Ce=jr,je=yt}if(De.done)return o(Q,je),nt&&Br(Q,Se),be;if(je===null){for(;!De.done;Se++,De=X.next())De=he(Q,De.value,pe),De!==null&&(H=p(De,H,Se),Ce===null?be=De:Ce.sibling=De,Ce=De);return nt&&Br(Q,Se),be}for(je=c(Q,je);!De.done;Se++,De=X.next())De=ge(je,Q,Se,De.value,pe),De!==null&&(t&&De.alternate!==null&&je.delete(De.key===null?Se:De.key),H=p(De,H,Se),Ce===null?be=De:Ce.sibling=De,Ce=De);return t&&je.forEach(function(sx){return n(Q,sx)}),nt&&Br(Q,Se),be}function st(Q,H,X,pe){if(typeof X=="object"&&X!==null&&X.type===S&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case j:e:{for(var be=X.key,Ce=H;Ce!==null;){if(Ce.key===be){if(be=X.type,be===S){if(Ce.tag===7){o(Q,Ce.sibling),H=u(Ce,X.props.children),H.return=Q,Q=H;break e}}else if(Ce.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===re&&Rp(be)===Ce.type){o(Q,Ce.sibling),H=u(Ce,X.props),H.ref=za(Q,Ce,X),H.return=Q,Q=H;break e}o(Q,Ce);break}else n(Q,Ce);Ce=Ce.sibling}X.type===S?(H=Qr(X.props.children,Q.mode,pe,X.key),H.return=Q,Q=H):(pe=Rs(X.type,X.key,X.props,null,Q.mode,pe),pe.ref=za(Q,H,X),pe.return=Q,Q=pe)}return b(Q);case M:e:{for(Ce=X.key;H!==null;){if(H.key===Ce)if(H.tag===4&&H.stateNode.containerInfo===X.containerInfo&&H.stateNode.implementation===X.implementation){o(Q,H.sibling),H=u(H,X.children||[]),H.return=Q,Q=H;break e}else{o(Q,H);break}else n(Q,H);H=H.sibling}H=hd(X,Q.mode,pe),H.return=Q,Q=H}return b(Q);case re:return Ce=X._init,st(Q,H,Ce(X._payload),pe)}if(Qe(X))return xe(Q,H,X,pe);if(U(X))return we(Q,H,X,pe);os(Q,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,H!==null&&H.tag===6?(o(Q,H.sibling),H=u(H,X),H.return=Q,Q=H):(o(Q,H),H=ud(X,Q.mode,pe),H.return=Q,Q=H),b(Q)):o(Q,H)}return st}var To=Mp(!0),Lp=Mp(!1),as=fr(null),is=null,Ao=null,bc=null;function kc(){bc=Ao=is=null}function _c(t){var n=as.current;Je(as),t._currentValue=n}function Cc(t,n,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===o)break;t=t.return}}function Io(t,n){is=t,bc=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Wt=!0),t.firstContext=null)}function fn(t){var n=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:n,next:null},Ao===null){if(is===null)throw Error(i(308));Ao=t,is.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return n}var Wr=null;function jc(t){Wr===null?Wr=[t]:Wr.push(t)}function $p(t,n,o,c){var u=n.interleaved;return u===null?(o.next=o,jc(n)):(o.next=u.next,u.next=o),n.interleaved=o,Xn(t,c)}function Xn(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var vr=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function xr(t,n,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,Xn(t,o)}return u=c.interleaved,u===null?(n.next=n,jc(c)):(n.next=u.next,u.next=n),c.interleaved=n,Xn(t,o)}function ss(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,Fl(t,o)}}function Ap(t,n){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=b:p=p.next=b,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function ls(t,n,o,c){var u=t.updateQueue;vr=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,z=u.shared.pending;if(z!==null){u.shared.pending=null;var B=z,te=B.next;B.next=null,b===null?p=te:b.next=te,b=B;var de=t.alternate;de!==null&&(de=de.updateQueue,z=de.lastBaseUpdate,z!==b&&(z===null?de.firstBaseUpdate=te:z.next=te,de.lastBaseUpdate=B))}if(p!==null){var he=u.baseState;b=0,de=te=B=null,z=p;do{var ce=z.lane,ge=z.eventTime;if((c&ce)===ce){de!==null&&(de=de.next={eventTime:ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var xe=t,we=z;switch(ce=n,ge=o,we.tag){case 1:if(xe=we.payload,typeof xe=="function"){he=xe.call(ge,he,ce);break e}he=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=we.payload,ce=typeof xe=="function"?xe.call(ge,he,ce):xe,ce==null)break e;he=G({},he,ce);break e;case 2:vr=!0}}z.callback!==null&&z.lane!==0&&(t.flags|=64,ce=u.effects,ce===null?u.effects=[z]:ce.push(z))}else ge={eventTime:ge,lane:ce,tag:z.tag,payload:z.payload,callback:z.callback,next:null},de===null?(te=de=ge,B=he):de=de.next=ge,b|=ce;if(z=z.next,z===null){if(z=u.shared.pending,z===null)break;ce=z,z=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);if(de===null&&(B=he),u.baseState=B,u.firstBaseUpdate=te,u.lastBaseUpdate=de,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);qr|=b,t.lanes=b,t.memoizedState=he}}function Ip(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Oa={},Dn=fr(Oa),Da=fr(Oa),Fa=fr(Oa);function Hr(t){if(t===Oa)throw Error(i(174));return t}function Nc(t,n){switch(Ke(Fa,n),Ke(Da,t),Ke(Dn,Oa),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Pn(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Pn(n,t)}Je(Dn),Ke(Dn,n)}function Eo(){Je(Dn),Je(Da),Je(Fa)}function Ep(t){Hr(Fa.current);var n=Hr(Dn.current),o=Pn(n,t.type);n!==o&&(Ke(Da,t),Ke(Dn,o))}function Rc(t){Da.current===t&&(Je(Dn),Je(Da))}var rt=fr(0);function cs(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Mc=[];function Lc(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var ds=O.ReactCurrentDispatcher,$c=O.ReactCurrentBatchConfig,Ur=0,ot=null,ft=null,vt=null,us=!1,Ba=!1,Wa=0,M3=0;function Rt(){throw Error(i(321))}function Tc(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!kn(t[o],n[o]))return!1;return!0}function Ac(t,n,o,c,u,p){if(Ur=p,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ds.current=t===null||t.memoizedState===null?A3:I3,t=o(c,u),Ba){p=0;do{if(Ba=!1,Wa=0,25<=p)throw Error(i(301));p+=1,vt=ft=null,n.updateQueue=null,ds.current=E3,t=o(c,u)}while(Ba)}if(ds.current=fs,n=ft!==null&&ft.next!==null,Ur=0,vt=ft=ot=null,us=!1,n)throw Error(i(300));return t}function Ic(){var t=Wa!==0;return Wa=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?ot.memoizedState=vt=t:vt=vt.next=t,vt}function mn(){if(ft===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var n=vt===null?ot.memoizedState:vt.next;if(n!==null)vt=n,ft=t;else{if(t===null)throw Error(i(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?ot.memoizedState=vt=t:vt=vt.next=t}return vt}function Ha(t,n){return typeof n=="function"?n(t):n}function Ec(t){var n=mn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=ft,u=c.baseQueue,p=o.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}c.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,c=c.baseState;var z=b=null,B=null,te=p;do{var de=te.lane;if((Ur&de)===de)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var he={lane:de,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(z=B=he,b=c):B=B.next=he,ot.lanes|=de,qr|=de}te=te.next}while(te!==null&&te!==p);B===null?b=c:B.next=z,kn(c,n.memoizedState)||(Wt=!0),n.memoizedState=c,n.baseState=b,n.baseQueue=B,o.lastRenderedState=c}if(t=o.interleaved,t!==null){u=t;do p=u.lane,ot.lanes|=p,qr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Pc(t){var n=mn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do p=t(p,b.action),b=b.next;while(b!==u);kn(p,n.memoizedState)||(Wt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,c]}function Pp(){}function zp(t,n){var o=ot,c=mn(),u=n(),p=!kn(c.memoizedState,u);if(p&&(c.memoizedState=u,Wt=!0),c=c.queue,zc(Fp.bind(null,o,c,t),[t]),c.getSnapshot!==n||p||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,Ua(9,Dp.bind(null,o,c,u,n),void 0,null),xt===null)throw Error(i(349));(Ur&30)!==0||Op(o,n,u)}return u}function Op(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Dp(t,n,o,c){n.value=o,n.getSnapshot=c,Bp(n)&&Wp(t)}function Fp(t,n,o){return o(function(){Bp(n)&&Wp(t)})}function Bp(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!kn(t,o)}catch{return!0}}function Wp(t){var n=Xn(t,1);n!==null&&Nn(n,t,1,-1)}function Hp(t){var n=Fn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},n.queue=t,t=t.dispatch=T3.bind(null,ot,t),[n.memoizedState,t]}function Ua(t,n,o,c){return t={tag:t,create:n,destroy:o,deps:c,next:null},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,n.lastEffect=t)),t}function Up(){return mn().memoizedState}function hs(t,n,o,c){var u=Fn();ot.flags|=t,u.memoizedState=Ua(1|n,o,void 0,c===void 0?null:c)}function ps(t,n,o,c){var u=mn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var b=ft.memoizedState;if(p=b.destroy,c!==null&&Tc(c,b.deps)){u.memoizedState=Ua(n,o,p,c);return}}ot.flags|=t,u.memoizedState=Ua(1|n,o,p,c)}function qp(t,n){return hs(8390656,8,t,n)}function zc(t,n){return ps(2048,8,t,n)}function Vp(t,n){return ps(4,2,t,n)}function Gp(t,n){return ps(4,4,t,n)}function Yp(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qp(t,n,o){return o=o!=null?o.concat([t]):null,ps(4,4,Yp.bind(null,n,t),o)}function Oc(){}function Kp(t,n){var o=mn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Tc(n,c[1])?c[0]:(o.memoizedState=[t,n],t)}function Zp(t,n){var o=mn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Tc(n,c[1])?c[0]:(t=t(),o.memoizedState=[t,n],t)}function Xp(t,n,o){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=o):(kn(o,n)||(o=Rh(),ot.lanes|=o,qr|=o,t.baseState=!0),n)}function L3(t,n){var o=Ue;Ue=o!==0&&4>o?o:4,t(!0);var c=$c.transition;$c.transition={};try{t(!1),n()}finally{Ue=o,$c.transition=c}}function Jp(){return mn().memoizedState}function $3(t,n,o){var c=kr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},e1(t))t1(n,o);else if(o=$p(t,n,o,c),o!==null){var u=zt();Nn(o,t,c,u),n1(o,n,c)}}function T3(t,n,o){var c=kr(t),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(e1(t))t1(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var b=n.lastRenderedState,z=p(b,o);if(u.hasEagerState=!0,u.eagerState=z,kn(z,b)){var B=n.interleaved;B===null?(u.next=u,jc(n)):(u.next=B.next,B.next=u),n.interleaved=u;return}}catch{}finally{}o=$p(t,n,u,c),o!==null&&(u=zt(),Nn(o,t,c,u),n1(o,n,c))}}function e1(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function t1(t,n){Ba=us=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function n1(t,n,o){if((o&4194240)!==0){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,Fl(t,o)}}var fs={readContext:fn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},A3={readContext:fn,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:fn,useEffect:qp,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,hs(4194308,4,Yp.bind(null,n,t),o)},useLayoutEffect:function(t,n){return hs(4194308,4,t,n)},useInsertionEffect:function(t,n){return hs(4,2,t,n)},useMemo:function(t,n){var o=Fn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var c=Fn();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=$3.bind(null,ot,t),[c.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:Hp,useDebugValue:Oc,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=Hp(!1),n=t[0];return t=L3.bind(null,t[1]),Fn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var c=ot,u=Fn();if(nt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),xt===null)throw Error(i(349));(Ur&30)!==0||Op(c,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,qp(Fp.bind(null,c,p,t),[t]),c.flags|=2048,Ua(9,Dp.bind(null,c,p,o,n),void 0,null),o},useId:function(){var t=Fn(),n=xt.identifierPrefix;if(nt){var o=Zn,c=Kn;o=(c&~(1<<32-bn(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=Wa++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=M3++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},I3={readContext:fn,useCallback:Kp,useContext:fn,useEffect:zc,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Zp,useReducer:Ec,useRef:Up,useState:function(){return Ec(Ha)},useDebugValue:Oc,useDeferredValue:function(t){var n=mn();return Xp(n,ft.memoizedState,t)},useTransition:function(){var t=Ec(Ha)[0],n=mn().memoizedState;return[t,n]},useMutableSource:Pp,useSyncExternalStore:zp,useId:Jp,unstable_isNewReconciler:!1},E3={readContext:fn,useCallback:Kp,useContext:fn,useEffect:zc,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Zp,useReducer:Pc,useRef:Up,useState:function(){return Pc(Ha)},useDebugValue:Oc,useDeferredValue:function(t){var n=mn();return ft===null?n.memoizedState=t:Xp(n,ft.memoizedState,t)},useTransition:function(){var t=Pc(Ha)[0],n=mn().memoizedState;return[t,n]},useMutableSource:Pp,useSyncExternalStore:zp,useId:Jp,unstable_isNewReconciler:!1};function Cn(t,n){if(t&&t.defaultProps){n=G({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function Dc(t,n,o,c){n=t.memoizedState,o=o(c,n),o=o==null?n:G({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ms={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var c=zt(),u=kr(t),p=Jn(c,u);p.payload=n,o!=null&&(p.callback=o),n=xr(t,p,u),n!==null&&(Nn(n,t,u,c),ss(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var c=zt(),u=kr(t),p=Jn(c,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=xr(t,p,u),n!==null&&(Nn(n,t,u,c),ss(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=zt(),c=kr(t),u=Jn(o,c);u.tag=2,n!=null&&(u.callback=n),n=xr(t,u,c),n!==null&&(Nn(n,t,c,o),ss(n,t,c))}};function r1(t,n,o,c,u,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,b):n.prototype&&n.prototype.isPureReactComponent?!La(o,c)||!La(u,p):!0}function o1(t,n,o){var c=!1,u=mr,p=n.contextType;return typeof p=="object"&&p!==null?p=fn(p):(u=Bt(n)?Dr:Nt.current,c=n.contextTypes,p=(c=c!=null)?Ro(t,u):mr),n=new n(o,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ms,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),n}function a1(t,n,o,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==t&&ms.enqueueReplaceState(n,n.state,null)}function Fc(t,n,o,c){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Sc(t);var p=n.contextType;typeof p=="object"&&p!==null?u.context=fn(p):(p=Bt(n)?Dr:Nt.current,u.context=Ro(t,p)),u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Dc(t,n,p,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&ms.enqueueReplaceState(u,u.state,null),ls(t,o,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,n){try{var o="",c=n;do o+=ne(c),c=c.return;while(c);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:u,digest:null}}function Bc(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function Wc(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var P3=typeof WeakMap=="function"?WeakMap:Map;function i1(t,n,o){o=Jn(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){ks||(ks=!0,rd=c),Wc(t,n)},o}function s1(t,n,o){o=Jn(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;o.payload=function(){return c(u)},o.callback=function(){Wc(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Wc(t,n),typeof c!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),o}function l1(t,n,o){var c=t.pingCache;if(c===null){c=t.pingCache=new P3;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(o)||(u.add(o),t=K3.bind(null,t,n,o),n.then(t,t))}function c1(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function d1(t,n,o,c,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Jn(-1,1),n.tag=2,xr(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var z3=O.ReactCurrentOwner,Wt=!1;function Pt(t,n,o,c){n.child=t===null?Lp(n,null,o,c):To(n,t.child,o,c)}function u1(t,n,o,c,u){o=o.render;var p=n.ref;return Io(n,u),c=Ac(t,n,o,c,p,u),o=Ic(),t!==null&&!Wt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,er(t,n,u)):(nt&&o&&gc(n),n.flags|=1,Pt(t,n,c,u),n.child)}function h1(t,n,o,c,u){if(t===null){var p=o.type;return typeof p=="function"&&!dd(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,p1(t,n,p,c,u)):(t=Rs(o.type,null,c,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&u)===0){var b=p.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(b,c)&&t.ref===n.ref)return er(t,n,u)}return n.flags|=1,t=Cr(p,c),t.ref=n.ref,t.return=n,n.child=t}function p1(t,n,o,c,u){if(t!==null){var p=t.memoizedProps;if(La(p,c)&&t.ref===n.ref)if(Wt=!1,n.pendingProps=c=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Wt=!0);else return n.lanes=t.lanes,er(t,n,u)}return Hc(t,n,o,c,u)}function f1(t,n,o){var c=n.pendingProps,u=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Oo,Jt),Jt|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Ke(Oo,Jt),Jt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Ke(Oo,Jt),Jt|=c}else p!==null?(c=p.baseLanes|o,n.memoizedState=null):c=o,Ke(Oo,Jt),Jt|=c;return Pt(t,n,u,o),n.child}function m1(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Hc(t,n,o,c,u){var p=Bt(o)?Dr:Nt.current;return p=Ro(n,p),Io(n,u),o=Ac(t,n,o,c,p,u),c=Ic(),t!==null&&!Wt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,er(t,n,u)):(nt&&c&&gc(n),n.flags|=1,Pt(t,n,o,u),n.child)}function g1(t,n,o,c,u){if(Bt(o)){var p=!0;Ji(n)}else p=!1;if(Io(n,u),n.stateNode===null)vs(t,n),o1(n,o,c),Fc(n,o,c,u),c=!0;else if(t===null){var b=n.stateNode,z=n.memoizedProps;b.props=z;var B=b.context,te=o.contextType;typeof te=="object"&&te!==null?te=fn(te):(te=Bt(o)?Dr:Nt.current,te=Ro(n,te));var de=o.getDerivedStateFromProps,he=typeof de=="function"||typeof b.getSnapshotBeforeUpdate=="function";he||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==c||B!==te)&&a1(n,b,c,te),vr=!1;var ce=n.memoizedState;b.state=ce,ls(n,c,b,u),B=n.memoizedState,z!==c||ce!==B||Ft.current||vr?(typeof de=="function"&&(Dc(n,o,de,c),B=n.memoizedState),(z=vr||r1(n,o,z,c,ce,B,te))?(he||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=B),b.props=c,b.state=B,b.context=te,c=z):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{b=n.stateNode,Tp(t,n),z=n.memoizedProps,te=n.type===n.elementType?z:Cn(n.type,z),b.props=te,he=n.pendingProps,ce=b.context,B=o.contextType,typeof B=="object"&&B!==null?B=fn(B):(B=Bt(o)?Dr:Nt.current,B=Ro(n,B));var ge=o.getDerivedStateFromProps;(de=typeof ge=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==he||ce!==B)&&a1(n,b,c,B),vr=!1,ce=n.memoizedState,b.state=ce,ls(n,c,b,u);var xe=n.memoizedState;z!==he||ce!==xe||Ft.current||vr?(typeof ge=="function"&&(Dc(n,o,ge,c),xe=n.memoizedState),(te=vr||r1(n,o,te,c,ce,xe,B)||!1)?(de||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,xe,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,xe,B)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=xe),b.props=c,b.state=xe,b.context=B,c=te):(typeof b.componentDidUpdate!="function"||z===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),c=!1)}return Uc(t,n,o,c,p,u)}function Uc(t,n,o,c,u,p){m1(t,n);var b=(n.flags&128)!==0;if(!c&&!b)return u&&bp(n,o,!1),er(t,n,p);c=n.stateNode,z3.current=n;var z=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&b?(n.child=To(n,t.child,null,p),n.child=To(n,null,z,p)):Pt(t,n,z,p),n.memoizedState=c.state,u&&bp(n,o,!0),n.child}function v1(t){var n=t.stateNode;n.pendingContext?yp(t,n.pendingContext,n.pendingContext!==n.context):n.context&&yp(t,n.context,!1),Nc(t,n.containerInfo)}function x1(t,n,o,c,u){return $o(),wc(u),n.flags|=256,Pt(t,n,o,c),n.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function y1(t,n,o){var c=n.pendingProps,u=rt.current,p=!1,b=(n.flags&128)!==0,z;if((z=b)||(z=t!==null&&t.memoizedState===null?!1:(u&2)!==0),z?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ke(rt,u&1),t===null)return yc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=c.children,t=c.fallback,p?(c=n.mode,p=n.child,b={mode:"hidden",children:b},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=b):p=Ms(b,c,0,null),t=Qr(t,c,o,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=Vc(o),n.memoizedState=qc,t):Gc(n,b));if(u=t.memoizedState,u!==null&&(z=u.dehydrated,z!==null))return O3(t,n,b,c,z,u,o);if(p){p=c.fallback,b=n.mode,u=t.child,z=u.sibling;var B={mode:"hidden",children:c.children};return(b&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=B,n.deletions=null):(c=Cr(u,B),c.subtreeFlags=u.subtreeFlags&14680064),z!==null?p=Cr(z,p):(p=Qr(p,b,o,null),p.flags|=2),p.return=n,c.return=n,c.sibling=p,n.child=c,c=p,p=n.child,b=t.child.memoizedState,b=b===null?Vc(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=t.childLanes&~o,n.memoizedState=qc,c}return p=t.child,t=p.sibling,c=Cr(p,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=o),c.return=n,c.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=c,n.memoizedState=null,c}function Gc(t,n){return n=Ms({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function gs(t,n,o,c){return c!==null&&wc(c),To(n,t.child,null,o),t=Gc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function O3(t,n,o,c,u,p,b){if(o)return n.flags&256?(n.flags&=-257,c=Bc(Error(i(422))),gs(t,n,b,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=c.fallback,u=n.mode,c=Ms({mode:"visible",children:c.children},u,0,null),p=Qr(p,u,b,null),p.flags|=2,c.return=n,p.return=n,c.sibling=p,n.child=c,(n.mode&1)!==0&&To(n,t.child,null,b),n.child.memoizedState=Vc(b),n.memoizedState=qc,p);if((n.mode&1)===0)return gs(t,n,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var z=c.dgst;return c=z,p=Error(i(419)),c=Bc(p,c,void 0),gs(t,n,b,c)}if(z=(b&t.childLanes)!==0,Wt||z){if(c=xt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Xn(t,u),Nn(c,t,u,-1))}return cd(),c=Bc(Error(i(421))),gs(t,n,b,c)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=Z3.bind(null,t),u._reactRetry=n,null):(t=p.treeContext,Xt=pr(u.nextSibling),Zt=n,nt=!0,_n=null,t!==null&&(hn[pn++]=Kn,hn[pn++]=Zn,hn[pn++]=Fr,Kn=t.id,Zn=t.overflow,Fr=n),n=Gc(n,c.children),n.flags|=4096,n)}function w1(t,n,o){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),Cc(t.return,n,o)}function Yc(t,n,o,c,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=u)}function b1(t,n,o){var c=n.pendingProps,u=c.revealOrder,p=c.tail;if(Pt(t,n,c.children,o),c=rt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w1(t,o,n);else if(t.tag===19)w1(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ke(rt,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&cs(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Yc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cs(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Yc(n,!0,o,null,p);break;case"together":Yc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vs(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function er(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),qr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Cr(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Cr(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function D3(t,n,o){switch(n.tag){case 3:v1(n),$o();break;case 5:Ep(n);break;case 1:Bt(n.type)&&Ji(n);break;case 4:Nc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;Ke(as,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(Ke(rt,rt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?y1(t,n,o):(Ke(rt,rt.current&1),t=er(t,n,o),t!==null?t.sibling:null);Ke(rt,rt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,(t.flags&128)!==0){if(c)return b1(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ke(rt,rt.current),c)break;return null;case 22:case 23:return n.lanes=0,f1(t,n,o)}return er(t,n,o)}var k1,Qc,_1,C1;k1=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qc=function(){},_1=function(t,n,o,c){var u=t.memoizedProps;if(u!==c){t=n.stateNode,Hr(Dn.current);var p=null;switch(o){case"input":u=ye(t,u),c=ye(t,c),p=[];break;case"select":u=G({},u,{value:void 0}),c=G({},c,{value:void 0}),p=[];break;case"textarea":u=At(t,u),c=At(t,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ki)}dt(o,c);var b;o=null;for(te in u)if(!c.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var z=u[te];for(b in z)z.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in c){var B=c[te];if(z=u!=null?u[te]:void 0,c.hasOwnProperty(te)&&B!==z&&(B!=null||z!=null))if(te==="style")if(z){for(b in z)!z.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in B)B.hasOwnProperty(b)&&z[b]!==B[b]&&(o||(o={}),o[b]=B[b])}else o||(p||(p=[]),p.push(te,o)),o=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,z=z?z.__html:void 0,B!=null&&z!==B&&(p=p||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Xe("scroll",t),p||z===B||(p=[])):(p=p||[]).push(te,B))}o&&(p=p||[]).push("style",o);var te=p;(n.updateQueue=te)&&(n.flags|=4)}},C1=function(t,n,o,c){o!==c&&(n.flags|=4)};function qa(t,n){if(!nt)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Mt(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=o,n}function F3(t,n,o){var c=n.pendingProps;switch(vc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(n),null;case 1:return Bt(n.type)&&Xi(),Mt(n),null;case 3:return c=n.stateNode,Eo(),Je(Ft),Je(Nt),Lc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(rs(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_n!==null&&(id(_n),_n=null))),Qc(t,n),Mt(n),null;case 5:Rc(n);var u=Hr(Fa.current);if(o=n.type,t!==null&&n.stateNode!=null)_1(t,n,o,c,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return Mt(n),null}if(t=Hr(Dn.current),rs(n)){c=n.stateNode,o=n.type;var p=n.memoizedProps;switch(c[On]=n,c[Ea]=p,t=(n.mode&1)!==0,o){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(u=0;u<Ta.length;u++)Xe(Ta[u],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":$e(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":He(c,p),Xe("invalid",c)}dt(o,p),u=null;for(var b in p)if(p.hasOwnProperty(b)){var z=p[b];b==="children"?typeof z=="string"?c.textContent!==z&&(p.suppressHydrationWarning!==!0&&Qi(c.textContent,z,t),u=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(p.suppressHydrationWarning!==!0&&Qi(c.textContent,z,t),u=["children",""+z]):l.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&Xe("scroll",c)}switch(o){case"input":ue(c),Ge(c,p,!0);break;case"textarea":ue(c),Ct(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ki)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=En(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(o,{is:c.is}):(t=b.createElement(o),o==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,o),t[On]=n,t[Ea]=c,k1(t,n,!1,!1),n.stateNode=t;e:{switch(b=Et(o,c),o){case"dialog":Xe("cancel",t),Xe("close",t),u=c;break;case"iframe":case"object":case"embed":Xe("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ta.length;u++)Xe(Ta[u],t);u=c;break;case"source":Xe("error",t),u=c;break;case"img":case"image":case"link":Xe("error",t),Xe("load",t),u=c;break;case"details":Xe("toggle",t),u=c;break;case"input":$e(t,c),u=ye(t,c),Xe("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=G({},c,{value:void 0}),Xe("invalid",t);break;case"textarea":He(t,c),u=At(t,c),Xe("invalid",t);break;default:u=c}dt(o,u),z=u;for(p in z)if(z.hasOwnProperty(p)){var B=z[p];p==="style"?Me(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ha(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&go(t,B):typeof B=="number"&&go(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Xe("scroll",t):B!=null&&C(t,p,B,b))}switch(o){case"input":ue(t),Ge(t,c,!1);break;case"textarea":ue(t),Ct(t);break;case"option":c.value!=null&&t.setAttribute("value",""+F(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?Ye(t,!!c.multiple,p,!1):c.defaultValue!=null&&Ye(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Ki)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Mt(n),null;case 6:if(t&&n.stateNode!=null)C1(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(o=Hr(Fa.current),Hr(Dn.current),rs(n)){if(c=n.stateNode,o=n.memoizedProps,c[On]=n,(p=c.nodeValue!==o)&&(t=Zt,t!==null))switch(t.tag){case 3:Qi(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qi(c.nodeValue,o,(t.mode&1)!==0)}p&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[On]=n,n.stateNode=c}return Mt(n),null;case 13:if(Je(rt),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&Xt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Np(),$o(),n.flags|=98560,p=!1;else if(p=rs(n),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[On]=n}else $o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mt(n),p=!1}else _n!==null&&(id(_n),_n=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(rt.current&1)!==0?mt===0&&(mt=3):cd())),n.updateQueue!==null&&(n.flags|=4),Mt(n),null);case 4:return Eo(),Qc(t,n),t===null&&Aa(n.stateNode.containerInfo),Mt(n),null;case 10:return _c(n.type._context),Mt(n),null;case 17:return Bt(n.type)&&Xi(),Mt(n),null;case 19:if(Je(rt),p=n.memoizedState,p===null)return Mt(n),null;if(c=(n.flags&128)!==0,b=p.rendering,b===null)if(c)qa(p,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(b=cs(t),b!==null){for(n.flags|=128,qa(p,!1),c=b.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)p=o,t=c,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,t=b.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ke(rt,rt.current&1|2),n.child}t=t.sibling}p.tail!==null&&it()>Do&&(n.flags|=128,c=!0,qa(p,!1),n.lanes=4194304)}else{if(!c)if(t=cs(b),t!==null){if(n.flags|=128,c=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),qa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!nt)return Mt(n),null}else 2*it()-p.renderingStartTime>Do&&o!==1073741824&&(n.flags|=128,c=!0,qa(p,!1),n.lanes=4194304);p.isBackwards?(b.sibling=n.child,n.child=b):(o=p.last,o!==null?o.sibling=b:n.child=b,p.last=b)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=it(),n.sibling=null,o=rt.current,Ke(rt,c?o&1|2:o&1),n):(Mt(n),null);case 22:case 23:return ld(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(Jt&1073741824)!==0&&(Mt(n),n.subtreeFlags&6&&(n.flags|=8192)):Mt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function B3(t,n){switch(vc(n),n.tag){case 1:return Bt(n.type)&&Xi(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Eo(),Je(Ft),Je(Nt),Lc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Rc(n),null;case 13:if(Je(rt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));$o()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Je(rt),null;case 4:return Eo(),null;case 10:return _c(n.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var xs=!1,Lt=!1,W3=typeof WeakSet=="function"?WeakSet:Set,ve=null;function zo(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){at(t,n,c)}else o.current=null}function Kc(t,n,o){try{o()}catch(c){at(t,n,c)}}var j1=!1;function H3(t,n){if(lc=Oi,t=rp(),ec(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var b=0,z=-1,B=-1,te=0,de=0,he=t,ce=null;t:for(;;){for(var ge;he!==o||u!==0&&he.nodeType!==3||(z=b+u),he!==p||c!==0&&he.nodeType!==3||(B=b+c),he.nodeType===3&&(b+=he.nodeValue.length),(ge=he.firstChild)!==null;)ce=he,he=ge;for(;;){if(he===t)break t;if(ce===o&&++te===u&&(z=b),ce===p&&++de===c&&(B=b),(ge=he.nextSibling)!==null)break;he=ce,ce=he.parentNode}he=ge}o=z===-1||B===-1?null:{start:z,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(cc={focusedElem:t,selectionRange:o},Oi=!1,ve=n;ve!==null;)if(n=ve,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ve=t;else for(;ve!==null;){n=ve;try{var xe=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(xe!==null){var we=xe.memoizedProps,st=xe.memoizedState,Q=n.stateNode,H=Q.getSnapshotBeforeUpdate(n.elementType===n.type?we:Cn(n.type,we),st);Q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var X=n.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(pe){at(n,n.return,pe)}if(t=n.sibling,t!==null){t.return=n.return,ve=t;break}ve=n.return}return xe=j1,j1=!1,xe}function Va(t,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Kc(n,o,p)}u=u.next}while(u!==c)}}function ys(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function Zc(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function S1(t){var n=t.alternate;n!==null&&(t.alternate=null,S1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[On],delete n[Ea],delete n[pc],delete n[j3],delete n[S3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N1(t){return t.tag===5||t.tag===3||t.tag===4}function R1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ki));else if(c!==4&&(t=t.child,t!==null))for(Xc(t,n,o),t=t.sibling;t!==null;)Xc(t,n,o),t=t.sibling}function Jc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Jc(t,n,o),t=t.sibling;t!==null;)Jc(t,n,o),t=t.sibling}var jt=null,jn=!1;function yr(t,n,o){for(o=o.child;o!==null;)M1(t,n,o),o=o.sibling}function M1(t,n,o){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Ti,o)}catch{}switch(o.tag){case 5:Lt||zo(o,n);case 6:var c=jt,u=jn;jt=null,yr(t,n,o),jt=c,jn=u,jt!==null&&(jn?(t=jt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):jt.removeChild(o.stateNode));break;case 18:jt!==null&&(jn?(t=jt,o=o.stateNode,t.nodeType===8?hc(t.parentNode,o):t.nodeType===1&&hc(t,o),Ca(t)):hc(jt,o.stateNode));break;case 4:c=jt,u=jn,jt=o.stateNode.containerInfo,jn=!0,yr(t,n,o),jt=c,jn=u;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,b=p.destroy;p=p.tag,b!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(o,n,b),u=u.next}while(u!==c)}yr(t,n,o);break;case 1:if(!Lt&&(zo(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(z){at(o,n,z)}yr(t,n,o);break;case 21:yr(t,n,o);break;case 22:o.mode&1?(Lt=(c=Lt)||o.memoizedState!==null,yr(t,n,o),Lt=c):yr(t,n,o);break;default:yr(t,n,o)}}function L1(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new W3),n.forEach(function(c){var u=X3.bind(null,t,c);o.has(c)||(o.add(c),c.then(u,u))})}}function Sn(t,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var p=t,b=n,z=b;e:for(;z!==null;){switch(z.tag){case 5:jt=z.stateNode,jn=!1;break e;case 3:jt=z.stateNode.containerInfo,jn=!0;break e;case 4:jt=z.stateNode.containerInfo,jn=!0;break e}z=z.return}if(jt===null)throw Error(i(160));M1(p,b,u),jt=null,jn=!1;var B=u.alternate;B!==null&&(B.return=null),u.return=null}catch(te){at(u,n,te)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)$1(n,t),n=n.sibling}function $1(t,n){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(n,t),Bn(t),c&4){try{Va(3,t,t.return),ys(3,t)}catch(we){at(t,t.return,we)}try{Va(5,t,t.return)}catch(we){at(t,t.return,we)}}break;case 1:Sn(n,t),Bn(t),c&512&&o!==null&&zo(o,o.return);break;case 5:if(Sn(n,t),Bn(t),c&512&&o!==null&&zo(o,o.return),t.flags&32){var u=t.stateNode;try{go(u,"")}catch(we){at(t,t.return,we)}}if(c&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,b=o!==null?o.memoizedProps:p,z=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{z==="input"&&p.type==="radio"&&p.name!=null&&We(u,p),Et(z,b);var te=Et(z,p);for(b=0;b<B.length;b+=2){var de=B[b],he=B[b+1];de==="style"?Me(u,he):de==="dangerouslySetInnerHTML"?ha(u,he):de==="children"?go(u,he):C(u,de,he,te)}switch(z){case"input":Ve(u,p);break;case"textarea":It(u,p);break;case"select":var ce=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ge=p.value;ge!=null?Ye(u,!!p.multiple,ge,!1):ce!==!!p.multiple&&(p.defaultValue!=null?Ye(u,!!p.multiple,p.defaultValue,!0):Ye(u,!!p.multiple,p.multiple?[]:"",!1))}u[Ea]=p}catch(we){at(t,t.return,we)}}break;case 6:if(Sn(n,t),Bn(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(we){at(t,t.return,we)}}break;case 3:if(Sn(n,t),Bn(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ca(n.containerInfo)}catch(we){at(t,t.return,we)}break;case 4:Sn(n,t),Bn(t);break;case 13:Sn(n,t),Bn(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(nd=it())),c&4&&L1(t);break;case 22:if(de=o!==null&&o.memoizedState!==null,t.mode&1?(Lt=(te=Lt)||de,Sn(n,t),Lt=te):Sn(n,t),Bn(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!de&&(t.mode&1)!==0)for(ve=t,de=t.child;de!==null;){for(he=ve=de;ve!==null;){switch(ce=ve,ge=ce.child,ce.tag){case 0:case 11:case 14:case 15:Va(4,ce,ce.return);break;case 1:zo(ce,ce.return);var xe=ce.stateNode;if(typeof xe.componentWillUnmount=="function"){c=ce,o=ce.return;try{n=c,xe.props=n.memoizedProps,xe.state=n.memoizedState,xe.componentWillUnmount()}catch(we){at(c,o,we)}}break;case 5:zo(ce,ce.return);break;case 22:if(ce.memoizedState!==null){I1(he);continue}}ge!==null?(ge.return=ce,ve=ge):I1(he)}de=de.sibling}e:for(de=null,he=t;;){if(he.tag===5){if(de===null){de=he;try{u=he.stateNode,te?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(z=he.stateNode,B=he.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,z.style.display=Ri("display",b))}catch(we){at(t,t.return,we)}}}else if(he.tag===6){if(de===null)try{he.stateNode.nodeValue=te?"":he.memoizedProps}catch(we){at(t,t.return,we)}}else if((he.tag!==22&&he.tag!==23||he.memoizedState===null||he===t)&&he.child!==null){he.child.return=he,he=he.child;continue}if(he===t)break e;for(;he.sibling===null;){if(he.return===null||he.return===t)break e;de===he&&(de=null),he=he.return}de===he&&(de=null),he.sibling.return=he.return,he=he.sibling}}break;case 19:Sn(n,t),Bn(t),c&4&&L1(t);break;case 21:break;default:Sn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(N1(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(go(u,""),c.flags&=-33);var p=R1(t);Jc(t,p,u);break;case 3:case 4:var b=c.stateNode.containerInfo,z=R1(t);Xc(t,z,b);break;default:throw Error(i(161))}}catch(B){at(t,t.return,B)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function U3(t,n,o){ve=t,T1(t)}function T1(t,n,o){for(var c=(t.mode&1)!==0;ve!==null;){var u=ve,p=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||xs;if(!b){var z=u.alternate,B=z!==null&&z.memoizedState!==null||Lt;z=xs;var te=Lt;if(xs=b,(Lt=B)&&!te)for(ve=u;ve!==null;)b=ve,B=b.child,b.tag===22&&b.memoizedState!==null?E1(u):B!==null?(B.return=b,ve=B):E1(u);for(;p!==null;)ve=p,T1(p),p=p.sibling;ve=u,xs=z,Lt=te}A1(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,ve=p):A1(t)}}function A1(t){for(;ve!==null;){var n=ve;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Lt||ys(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Lt)if(o===null)c.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Cn(n.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Ip(n,p,c);break;case 3:var b=n.updateQueue;if(b!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Ip(n,b,o)}break;case 5:var z=n.stateNode;if(o===null&&n.flags&4){o=z;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var te=n.alternate;if(te!==null){var de=te.memoizedState;if(de!==null){var he=de.dehydrated;he!==null&&Ca(he)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Lt||n.flags&512&&Zc(n)}catch(ce){at(n,n.return,ce)}}if(n===t){ve=null;break}if(o=n.sibling,o!==null){o.return=n.return,ve=o;break}ve=n.return}}function I1(t){for(;ve!==null;){var n=ve;if(n===t){ve=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ve=o;break}ve=n.return}}function E1(t){for(;ve!==null;){var n=ve;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{ys(4,n)}catch(B){at(n,o,B)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(B){at(n,u,B)}}var p=n.return;try{Zc(n)}catch(B){at(n,p,B)}break;case 5:var b=n.return;try{Zc(n)}catch(B){at(n,b,B)}}}catch(B){at(n,n.return,B)}if(n===t){ve=null;break}var z=n.sibling;if(z!==null){z.return=n.return,ve=z;break}ve=n.return}}var q3=Math.ceil,ws=O.ReactCurrentDispatcher,ed=O.ReactCurrentOwner,gn=O.ReactCurrentBatchConfig,Oe=0,xt=null,ut=null,St=0,Jt=0,Oo=fr(0),mt=0,Ga=null,qr=0,bs=0,td=0,Ya=null,Ht=null,nd=0,Do=1/0,tr=null,ks=!1,rd=null,wr=null,_s=!1,br=null,Cs=0,Qa=0,od=null,js=-1,Ss=0;function zt(){return(Oe&6)!==0?it():js!==-1?js:js=it()}function kr(t){return(t.mode&1)===0?1:(Oe&2)!==0&&St!==0?St&-St:R3.transition!==null?(Ss===0&&(Ss=Rh()),Ss):(t=Ue,t!==0||(t=window.event,t=t===void 0?16:zh(t.type)),t)}function Nn(t,n,o,c){if(50<Qa)throw Qa=0,od=null,Error(i(185));ya(t,o,c),((Oe&2)===0||t!==xt)&&(t===xt&&((Oe&2)===0&&(bs|=o),mt===4&&_r(t,St)),Ut(t,c),o===1&&Oe===0&&(n.mode&1)===0&&(Do=it()+500,es&&gr()))}function Ut(t,n){var o=t.callbackNode;Rv(t,n);var c=Ei(t,t===xt?St:0);if(c===0)o!==null&&jh(o),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(o!=null&&jh(o),n===1)t.tag===0?N3(z1.bind(null,t)):kp(z1.bind(null,t)),_3(function(){(Oe&6)===0&&gr()}),o=null;else{switch(Mh(c)){case 1:o=zl;break;case 4:o=Sh;break;case 16:o=$i;break;case 536870912:o=Nh;break;default:o=$i}o=q1(o,P1.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function P1(t,n){if(js=-1,Ss=0,(Oe&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Fo()&&t.callbackNode!==o)return null;var c=Ei(t,t===xt?St:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||n)n=Ns(t,c);else{n=c;var u=Oe;Oe|=2;var p=D1();(xt!==t||St!==n)&&(tr=null,Do=it()+500,Gr(t,n));do try{Y3();break}catch(z){O1(t,z)}while(!0);kc(),ws.current=p,Oe=u,ut!==null?n=0:(xt=null,St=0,n=mt)}if(n!==0){if(n===2&&(u=Ol(t),u!==0&&(c=u,n=ad(t,u))),n===1)throw o=Ga,Gr(t,0),_r(t,c),Ut(t,it()),o;if(n===6)_r(t,c);else{if(u=t.current.alternate,(c&30)===0&&!V3(u)&&(n=Ns(t,c),n===2&&(p=Ol(t),p!==0&&(c=p,n=ad(t,p))),n===1))throw o=Ga,Gr(t,0),_r(t,c),Ut(t,it()),o;switch(t.finishedWork=u,t.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:Yr(t,Ht,tr);break;case 3:if(_r(t,c),(c&130023424)===c&&(n=nd+500-it(),10<n)){if(Ei(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){zt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=uc(Yr.bind(null,t,Ht,tr),n);break}Yr(t,Ht,tr);break;case 4:if(_r(t,c),(c&4194240)===c)break;for(n=t.eventTimes,u=-1;0<c;){var b=31-bn(c);p=1<<b,b=n[b],b>u&&(u=b),c&=~p}if(c=u,c=it()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*q3(c/1960))-c,10<c){t.timeoutHandle=uc(Yr.bind(null,t,Ht,tr),c);break}Yr(t,Ht,tr);break;case 5:Yr(t,Ht,tr);break;default:throw Error(i(329))}}}return Ut(t,it()),t.callbackNode===o?P1.bind(null,t):null}function ad(t,n){var o=Ya;return t.current.memoizedState.isDehydrated&&(Gr(t,n).flags|=256),t=Ns(t,n),t!==2&&(n=Ht,Ht=o,n!==null&&id(n)),t}function id(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function V3(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],p=u.getSnapshot;u=u.value;try{if(!kn(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _r(t,n){for(n&=~td,n&=~bs,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-bn(n),c=1<<o;t[o]=-1,n&=~c}}function z1(t){if((Oe&6)!==0)throw Error(i(327));Fo();var n=Ei(t,0);if((n&1)===0)return Ut(t,it()),null;var o=Ns(t,n);if(t.tag!==0&&o===2){var c=Ol(t);c!==0&&(n=c,o=ad(t,c))}if(o===1)throw o=Ga,Gr(t,0),_r(t,n),Ut(t,it()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Yr(t,Ht,tr),Ut(t,it()),null}function sd(t,n){var o=Oe;Oe|=1;try{return t(n)}finally{Oe=o,Oe===0&&(Do=it()+500,es&&gr())}}function Vr(t){br!==null&&br.tag===0&&(Oe&6)===0&&Fo();var n=Oe;Oe|=1;var o=gn.transition,c=Ue;try{if(gn.transition=null,Ue=1,t)return t()}finally{Ue=c,gn.transition=o,Oe=n,(Oe&6)===0&&gr()}}function ld(){Jt=Oo.current,Je(Oo)}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,k3(o)),ut!==null)for(o=ut.return;o!==null;){var c=o;switch(vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Xi();break;case 3:Eo(),Je(Ft),Je(Nt),Lc();break;case 5:Rc(c);break;case 4:Eo();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:_c(c.type._context);break;case 22:case 23:ld()}o=o.return}if(xt=t,ut=t=Cr(t.current,null),St=Jt=n,mt=0,Ga=null,td=bs=qr=0,Ht=Ya=null,Wr!==null){for(n=0;n<Wr.length;n++)if(o=Wr[n],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,p=o.pending;if(p!==null){var b=p.next;p.next=u,c.next=b}o.pending=c}Wr=null}return t}function O1(t,n){do{var o=ut;try{if(kc(),ds.current=fs,us){for(var c=ot.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}us=!1}if(Ur=0,vt=ft=ot=null,Ba=!1,Wa=0,ed.current=null,o===null||o.return===null){mt=1,Ga=n,ut=null;break}e:{var p=t,b=o.return,z=o,B=n;if(n=St,z.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,de=z,he=de.tag;if((de.mode&1)===0&&(he===0||he===11||he===15)){var ce=de.alternate;ce?(de.updateQueue=ce.updateQueue,de.memoizedState=ce.memoizedState,de.lanes=ce.lanes):(de.updateQueue=null,de.memoizedState=null)}var ge=c1(b);if(ge!==null){ge.flags&=-257,d1(ge,b,z,p,n),ge.mode&1&&l1(p,te,n),n=ge,B=te;var xe=n.updateQueue;if(xe===null){var we=new Set;we.add(B),n.updateQueue=we}else xe.add(B);break e}else{if((n&1)===0){l1(p,te,n),cd();break e}B=Error(i(426))}}else if(nt&&z.mode&1){var st=c1(b);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),d1(st,b,z,p,n),wc(Po(B,z));break e}}p=B=Po(B,z),mt!==4&&(mt=2),Ya===null?Ya=[p]:Ya.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var Q=i1(p,B,n);Ap(p,Q);break e;case 1:z=B;var H=p.type,X=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(wr===null||!wr.has(X)))){p.flags|=65536,n&=-n,p.lanes|=n;var pe=s1(p,z,n);Ap(p,pe);break e}}p=p.return}while(p!==null)}B1(o)}catch(be){n=be,ut===o&&o!==null&&(ut=o=o.return);continue}break}while(!0)}function D1(){var t=ws.current;return ws.current=fs,t===null?fs:t}function cd(){(mt===0||mt===3||mt===2)&&(mt=4),xt===null||(qr&268435455)===0&&(bs&268435455)===0||_r(xt,St)}function Ns(t,n){var o=Oe;Oe|=2;var c=D1();(xt!==t||St!==n)&&(tr=null,Gr(t,n));do try{G3();break}catch(u){O1(t,u)}while(!0);if(kc(),Oe=o,ws.current=c,ut!==null)throw Error(i(261));return xt=null,St=0,mt}function G3(){for(;ut!==null;)F1(ut)}function Y3(){for(;ut!==null&&!yv();)F1(ut)}function F1(t){var n=U1(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,n===null?B1(t):ut=n,ed.current=null}function B1(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=F3(o,n,Jt),o!==null){ut=o;return}}else{if(o=B3(o,n),o!==null){o.flags&=32767,ut=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,ut=null;return}}if(n=n.sibling,n!==null){ut=n;return}ut=n=t}while(n!==null);mt===0&&(mt=5)}function Yr(t,n,o){var c=Ue,u=gn.transition;try{gn.transition=null,Ue=1,Q3(t,n,o,c)}finally{gn.transition=u,Ue=c}return null}function Q3(t,n,o,c){do Fo();while(br!==null);if((Oe&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Mv(t,p),t===xt&&(ut=xt=null,St=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||_s||(_s=!0,q1($i,function(){return Fo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var b=Ue;Ue=1;var z=Oe;Oe|=4,ed.current=null,H3(t,o),$1(o,t),m3(cc),Oi=!!lc,cc=lc=null,t.current=o,U3(o),wv(),Oe=z,Ue=b,gn.transition=p}else t.current=o;if(_s&&(_s=!1,br=t,Cs=u),p=t.pendingLanes,p===0&&(wr=null),_v(o.stateNode),Ut(t,it()),n!==null)for(c=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(ks)throw ks=!1,t=rd,rd=null,t;return(Cs&1)!==0&&t.tag!==0&&Fo(),p=t.pendingLanes,(p&1)!==0?t===od?Qa++:(Qa=0,od=t):Qa=0,gr(),null}function Fo(){if(br!==null){var t=Mh(Cs),n=gn.transition,o=Ue;try{if(gn.transition=null,Ue=16>t?16:t,br===null)var c=!1;else{if(t=br,br=null,Cs=0,(Oe&6)!==0)throw Error(i(331));var u=Oe;for(Oe|=4,ve=t.current;ve!==null;){var p=ve,b=p.child;if((ve.flags&16)!==0){var z=p.deletions;if(z!==null){for(var B=0;B<z.length;B++){var te=z[B];for(ve=te;ve!==null;){var de=ve;switch(de.tag){case 0:case 11:case 15:Va(8,de,p)}var he=de.child;if(he!==null)he.return=de,ve=he;else for(;ve!==null;){de=ve;var ce=de.sibling,ge=de.return;if(S1(de),de===te){ve=null;break}if(ce!==null){ce.return=ge,ve=ce;break}ve=ge}}}var xe=p.alternate;if(xe!==null){var we=xe.child;if(we!==null){xe.child=null;do{var st=we.sibling;we.sibling=null,we=st}while(we!==null)}}ve=p}}if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,ve=b;else e:for(;ve!==null;){if(p=ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Va(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,ve=Q;break e}ve=p.return}}var H=t.current;for(ve=H;ve!==null;){b=ve;var X=b.child;if((b.subtreeFlags&2064)!==0&&X!==null)X.return=b,ve=X;else e:for(b=H;ve!==null;){if(z=ve,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:ys(9,z)}}catch(be){at(z,z.return,be)}if(z===b){ve=null;break e}var pe=z.sibling;if(pe!==null){pe.return=z.return,ve=pe;break e}ve=z.return}}if(Oe=u,gr(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Ti,t)}catch{}c=!0}return c}finally{Ue=o,gn.transition=n}}return!1}function W1(t,n,o){n=Po(o,n),n=i1(t,n,1),t=xr(t,n,1),n=zt(),t!==null&&(ya(t,1,n),Ut(t,n))}function at(t,n,o){if(t.tag===3)W1(t,t,o);else for(;n!==null;){if(n.tag===3){W1(n,t,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(wr===null||!wr.has(c))){t=Po(o,t),t=s1(n,t,1),n=xr(n,t,1),t=zt(),n!==null&&(ya(n,1,t),Ut(n,t));break}}n=n.return}}function K3(t,n,o){var c=t.pingCache;c!==null&&c.delete(n),n=zt(),t.pingedLanes|=t.suspendedLanes&o,xt===t&&(St&o)===o&&(mt===4||mt===3&&(St&130023424)===St&&500>it()-nd?Gr(t,0):td|=o),Ut(t,n)}function H1(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var o=zt();t=Xn(t,n),t!==null&&(ya(t,n,o),Ut(t,o))}function Z3(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),H1(t,o)}function X3(t,n){var o=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),H1(t,o)}var U1;U1=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||Ft.current)Wt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return Wt=!1,D3(t,n,o);Wt=(t.flags&131072)!==0}else Wt=!1,nt&&(n.flags&1048576)!==0&&_p(n,ns,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;vs(t,n),t=n.pendingProps;var u=Ro(n,Nt.current);Io(n,o),u=Ac(null,n,c,t,u,o);var p=Ic();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Bt(c)?(p=!0,Ji(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(n),u.updater=ms,n.stateNode=u,u._reactInternals=n,Fc(n,c,t,o),n=Uc(null,n,c,!0,p,o)):(n.tag=0,nt&&p&&gc(n),Pt(null,n,u,o),n=n.child),n;case 16:c=n.elementType;e:{switch(vs(t,n),t=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=ex(c),t=Cn(c,t),u){case 0:n=Hc(null,n,c,t,o);break e;case 1:n=g1(null,n,c,t,o);break e;case 11:n=u1(null,n,c,t,o);break e;case 14:n=h1(null,n,c,Cn(c.type,t),o);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Cn(c,u),Hc(t,n,c,u,o);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Cn(c,u),g1(t,n,c,u,o);case 3:e:{if(v1(n),t===null)throw Error(i(387));c=n.pendingProps,p=n.memoizedState,u=p.element,Tp(t,n),ls(n,c,null,o);var b=n.memoizedState;if(c=b.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Po(Error(i(423)),n),n=x1(t,n,c,o,u);break e}else if(c!==u){u=Po(Error(i(424)),n),n=x1(t,n,c,o,u);break e}else for(Xt=pr(n.stateNode.containerInfo.firstChild),Zt=n,nt=!0,_n=null,o=Lp(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if($o(),c===u){n=er(t,n,o);break e}Pt(t,n,c,o)}n=n.child}return n;case 5:return Ep(n),t===null&&yc(n),c=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,b=u.children,dc(c,u)?b=null:p!==null&&dc(c,p)&&(n.flags|=32),m1(t,n),Pt(t,n,b,o),n.child;case 6:return t===null&&yc(n),null;case 13:return y1(t,n,o);case 4:return Nc(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=To(n,null,c,o):Pt(t,n,c,o),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Cn(c,u),u1(t,n,c,u,o);case 7:return Pt(t,n,n.pendingProps,o),n.child;case 8:return Pt(t,n,n.pendingProps.children,o),n.child;case 12:return Pt(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,p=n.memoizedProps,b=u.value,Ke(as,c._currentValue),c._currentValue=b,p!==null)if(kn(p.value,b)){if(p.children===u.children&&!Ft.current){n=er(t,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var z=p.dependencies;if(z!==null){b=p.child;for(var B=z.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=Jn(-1,o&-o),B.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var de=te.pending;de===null?B.next=B:(B.next=de.next,de.next=B),te.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Cc(p.return,o,n),z.lanes|=o;break}B=B.next}}else if(p.tag===10)b=p.type===n.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(i(341));b.lanes|=o,z=b.alternate,z!==null&&(z.lanes|=o),Cc(b,o,n),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Pt(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,Io(n,o),u=fn(u),c=c(u),n.flags|=1,Pt(t,n,c,o),n.child;case 14:return c=n.type,u=Cn(c,n.pendingProps),u=Cn(c.type,u),h1(t,n,c,u,o);case 15:return p1(t,n,n.type,n.pendingProps,o);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Cn(c,u),vs(t,n),n.tag=1,Bt(c)?(t=!0,Ji(n)):t=!1,Io(n,o),o1(n,c,u),Fc(n,c,u,o),Uc(null,n,c,!0,t,o);case 19:return b1(t,n,o);case 22:return f1(t,n,o)}throw Error(i(156,n.tag))};function q1(t,n){return Ch(t,n)}function J3(t,n,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,n,o,c){return new J3(t,n,o,c)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===ae)return 14}return 2}function Cr(t,n){var o=t.alternate;return o===null?(o=vn(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Rs(t,n,o,c,u,p){var b=2;if(c=t,typeof t=="function")dd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case S:return Qr(o.children,u,p,n);case I:b=8,u|=8;break;case P:return t=vn(12,o,n,u|2),t.elementType=P,t.lanes=p,t;case K:return t=vn(13,o,n,u),t.elementType=K,t.lanes=p,t;case ee:return t=vn(19,o,n,u),t.elementType=ee,t.lanes=p,t;case se:return Ms(o,u,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:b=10;break e;case Y:b=9;break e;case q:b=11;break e;case ae:b=14;break e;case re:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=vn(b,o,n,u),n.elementType=t,n.type=c,n.lanes=p,n}function Qr(t,n,o,c){return t=vn(7,t,c,n),t.lanes=o,t}function Ms(t,n,o,c){return t=vn(22,t,c,n),t.elementType=se,t.lanes=o,t.stateNode={isHidden:!1},t}function ud(t,n,o){return t=vn(6,t,null,n),t.lanes=o,t}function hd(t,n,o){return n=vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function tx(t,n,o,c,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function pd(t,n,o,c,u,p,b,z,B){return t=new tx(t,n,o,z,B),n===1?(n=1,p===!0&&(n|=8)):n=0,p=vn(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(p),t}function nx(t,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:c==null?null:""+c,children:t,containerInfo:n,implementation:o}}function V1(t){if(!t)return mr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Bt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(Bt(o))return wp(t,o,n)}return n}function G1(t,n,o,c,u,p,b,z,B){return t=pd(o,c,!0,t,u,p,b,z,B),t.context=V1(null),o=t.current,c=zt(),u=kr(o),p=Jn(c,u),p.callback=n??null,xr(o,p,u),t.current.lanes=u,ya(t,u,c),Ut(t,c),t}function Ls(t,n,o,c){var u=n.current,p=zt(),b=kr(u);return o=V1(o),n.context===null?n.context=o:n.pendingContext=o,n=Jn(p,b),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=xr(u,n,b),t!==null&&(Nn(t,u,b,p),ss(t,u,b)),b}function $s(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function fd(t,n){Y1(t,n),(t=t.alternate)&&Y1(t,n)}function rx(){return null}var Q1=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}Ts.prototype.render=md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Ls(t,n,null,null)},Ts.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vr(function(){Ls(null,t,null,null)}),n[Yn]=null}};function Ts(t){this._internalRoot=t}Ts.prototype.unstable_scheduleHydration=function(t){if(t){var n=Th();t={blockedOn:null,target:t,priority:n};for(var o=0;o<dr.length&&n!==0&&n<dr[o].priority;o++);dr.splice(o,0,t),o===0&&Eh(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function As(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function K1(){}function ox(t,n,o,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var te=$s(b);p.call(te)}}var b=G1(n,c,t,0,null,!1,!1,"",K1);return t._reactRootContainer=b,t[Yn]=b.current,Aa(t.nodeType===8?t.parentNode:t),Vr(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var z=c;c=function(){var te=$s(B);z.call(te)}}var B=pd(t,0,!1,null,null,!1,!1,"",K1);return t._reactRootContainer=B,t[Yn]=B.current,Aa(t.nodeType===8?t.parentNode:t),Vr(function(){Ls(n,B,o,c)}),B}function Is(t,n,o,c,u){var p=o._reactRootContainer;if(p){var b=p;if(typeof u=="function"){var z=u;u=function(){var B=$s(b);z.call(B)}}Ls(n,b,t,u)}else b=ox(o,n,t,u,c);return $s(b)}Lh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=xa(n.pendingLanes);o!==0&&(Fl(n,o|1),Ut(n,it()),(Oe&6)===0&&(Do=it()+500,gr()))}break;case 13:Vr(function(){var c=Xn(t,1);if(c!==null){var u=zt();Nn(c,t,1,u)}}),fd(t,1)}},Bl=function(t){if(t.tag===13){var n=Xn(t,134217728);if(n!==null){var o=zt();Nn(n,t,134217728,o)}fd(t,134217728)}},$h=function(t){if(t.tag===13){var n=kr(t),o=Xn(t,n);if(o!==null){var c=zt();Nn(o,t,n,c)}fd(t,n)}},Th=function(){return Ue},Ah=function(t,n){var o=Ue;try{return Ue=t,n()}finally{Ue=o}},fa=function(t,n,o){switch(n){case"input":if(Ve(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==t&&c.form===t.form){var u=Zi(c);if(!u)throw Error(i(90));fe(c),Ve(c,u)}}}break;case"textarea":It(t,o);break;case"select":n=o.value,n!=null&&Ye(t,!!o.multiple,n,!1)}},vh=sd,xh=Vr;var ax={usingClientEntryPoint:!1,Events:[Pa,So,Zi,mh,gh,sd]},Ka={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ix={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Ti=Es.inject(ix),zn=Es}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax,qt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(n))throw Error(i(200));return nx(t,n,null,o)},qt.createRoot=function(t,n){if(!gd(t))throw Error(i(299));var o=!1,c="",u=Q1;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=pd(t,1,!1,null,null,o,!1,c,u),t[Yn]=n.current,Aa(t.nodeType===8?t.parentNode:t),new md(n)},qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=kh(n),t=t===null?null:t.stateNode,t},qt.flushSync=function(t){return Vr(t)},qt.hydrate=function(t,n,o){if(!As(n))throw Error(i(200));return Is(null,t,n,!0,o)},qt.hydrateRoot=function(t,n,o){if(!gd(t))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,p="",b=Q1;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),n=G1(n,null,t,1,o??null,u,!1,p,b),t[Yn]=n.current,Aa(t),c)for(t=0;t<c.length;t++)o=c[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Ts(n)},qt.render=function(t,n,o){if(!As(n))throw Error(i(200));return Is(null,t,n,!1,o)},qt.unmountComponentAtNode=function(t){if(!As(t))throw Error(i(40));return t._reactRootContainer?(Vr(function(){Is(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1},qt.unstable_batchedUpdates=sd,qt.unstable_renderSubtreeIntoContainer=function(t,n,o,c){if(!As(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Is(t,n,o,!1,c)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var of;function g0(){if(of)return yd.exports;of=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),yd.exports=px(),yd.exports}var af;function fx(){if(af)return Ps;af=1;var e=g0();return Ps.createRoot=e.createRoot,Ps.hydrateRoot=e.hydrateRoot,Ps}var mx=fx();const gx=m0(mx);function v0(e){var a,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(a=0;a<l;a++)e[a]&&(i=v0(e[a]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function oe(){for(var e,a,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(a=v0(e))&&(s&&(s+=" "),s+=a);return s}const uo=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};uo.displayName="PlusIcon";const vx="_root_7uomf_13",xx="_sm_7uomf_82",yx="_md_7uomf_88",wx="_lg_7uomf_94",bx="_horizontal_7uomf_107",kx="_alignStart_7uomf_121",_x="_vertical_7uomf_125",Cx="_inner_7uomf_131",jx="_iconSlot_7uomf_146",Sx="_label_7uomf_163",Kr={root:vx,sm:xx,md:yx,lg:wx,horizontal:bx,alignStart:kx,vertical:_x,inner:Cx,iconSlot:jx,label:Sx};function sf(e){return typeof e=="number"?`${e}px`:e}const Nx=g.forwardRef(({size:e="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:v,style:y,disabled:x,type:w="button",...k},T)=>{const _=d??r.jsx(uo,{size:"100%"}),N={};return h!==void 0&&(N["--area-min-height"]=sf(h)),f!==void 0&&(N["--area-radius"]=sf(f)),r.jsx("button",{ref:T,type:w,className:oe(Kr.root,Kr[e],Kr[a],i==="start"&&Kr.alignStart,v),disabled:x,"data-size":e,"data-layout":a,style:{...N,...y},...k,children:r.jsxs("span",{className:Kr.inner,children:[r.jsx("span",{className:Kr.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&r.jsx("span",{className:Kr.label,children:s})]})})});Nx.displayName="AreaButton";const Rx="_root_b29pw_8",Mx="_image_b29pw_33",Lx="_initials_b29pw_40",$x="_iconSlot_b29pw_52",Sr={root:Rx,image:Mx,initials:Lx,iconSlot:$x,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Tx({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ax(e){const a=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const An=g.forwardRef(({src:e,alt:a,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:v="circle",className:y,...x},w)=>{const[k,T]=g.useState(!1),_=!!e&&!k,N=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Ax(s):"");let L;return _?L=r.jsx("img",{src:e,alt:a??"",className:Sr.image,onError:()=>T(!0),draggable:!1},e):N?L=r.jsx("span",{className:Sr.initials,"aria-hidden":a?void 0:!0,children:N}):L=r.jsx("span",{className:Sr.iconSlot,"aria-hidden":"true",children:l??r.jsx(Tx,{})}),r.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":v,className:oe(Sr.root,Sr[`size-${d}`],Sr[`color-${h}`],Sr[`variant-${f}`],Sr[`shape-${v}`],y),...x,children:L})});An.displayName="Avatar";const Ix="_root_uqz3u_7",Ex={root:Ix},Ot=g.forwardRef(({as:e="span",className:a,children:i,...s},l)=>r.jsx(e,{ref:l,className:oe(Ex.root,a),...s,children:i}));Ot.displayName="Eyebrow";const Px="_root_1tnwf_15",zx={root:Px},Ox=g.forwardRef(({scale:e="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:v,...y},x)=>{const w=i!==void 0,k=g.useRef(null),[T,_]=g.useState(()=>w?!i:!s),N=g.useCallback(C=>{k.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]);g.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),g.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const L=C=>{const O=C.currentTarget.textContent??"";_(O===""),l==null||l(O),v==null||v(C)},A=C=>{C.preventDefault();const O=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,O)},R=!h&&!d;return r.jsx("span",{ref:N,contentEditable:R?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":T||void 0,"data-placeholder":a,"data-disabled":h||void 0,"data-readonly":d||void 0,className:oe(zx.root,f),onInput:L,onPaste:A,...y})});Ox.displayName="TypeBox";const Dx="_root_1brpy_12",Fx="_ghost_1brpy_27",Bx="_path_1brpy_32",Xa={root:Dx,"ai-spin":"_ai-spin_1brpy_1",ghost:Fx,"ai-morph":"_ai-morph_1brpy_1",path:Bx,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Wx={xs:16,sm:24,md:32,lg:48,xl:64},Hx={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},lf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",zs=e=>e==="inverse"||e==="inverse-light",Ux=e=>e==="stroke"||e==="stroke-light",Cu=g.forwardRef(({size:e="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${v}`,x=`aiglow-${v}`,w=typeof e=="string",k=w?Wx[e]:e,T=w?Hx[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=a==="gradient-fill"?`url(#${y})`:zs(a)?"currentColor":"none",N=zs(a)?"none":Ux(a)?"currentColor":`url(#${y})`,L="currentColor",A=a!=="stroke"&&a!=="stroke-light"&&!zs(a);return r.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:oe(Xa.root,Xa[`variant-${a}`],Xa[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!zs(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:lf,stroke:L,strokeWidth:T*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Xa.ghost}),r.jsx("path",{d:lf,fill:_,stroke:N==="none"?void 0:N,strokeWidth:N==="none"?void 0:T,strokeLinecap:"round",strokeLinejoin:"round",filter:A?`url(#${x})`:void 0,className:Xa.path})]})});Cu.displayName="AILoader";const qx="_root_10act_14",Vx="_hovered_10act_68",Gx="_loading_10act_69",Yx="_sm_10act_90",Qx="_md_10act_98",Kx="_lg_10act_106",Zx="_dark_10act_116",Xx="_icon_10act_122",Bo={root:qx,hovered:Vx,loading:Gx,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Yx,md:Qx,lg:Kx,dark:Zx,icon:Xx},cf={sm:12,md:14,lg:18};function Jx({size:e,light:a}){return r.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const x0=g.forwardRef(({size:e="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[v,y]=g.useState(!1);return r.jsx("button",{ref:f,className:oe(Bo.root,Bo[e],a&&Bo.dark,i?Bo.loading:v&&Bo.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...h,children:r.jsx("span",{className:Bo.icon,children:i?r.jsx(Cu,{size:cf[e],variant:a?"inverse-light":"gradient-fill"}):r.jsx(Jx,{size:cf[e],light:a})})})});x0.displayName="AICoreButton";const ey="_root_1qx4u_9",ty="_star_1qx4u_34",kd={root:ey,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:ty},ny="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",y0=g.forwardRef(({size:e="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:oe(kd.root,kd[`size-${e}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:kd.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:ny,fill:"currentColor"})})}));y0.displayName="AIAvatar";const ry="_shell_lalw3_21",oy="_wrapper_lalw3_58",ay="_card_lalw3_65",iy="_cardClip_lalw3_94",sy="_textarea_lalw3_160",ly="_actions_lalw3_203",Yo={shell:ry,wrapper:oy,card:ay,cardClip:iy,textarea:sy,actions:ly},w0=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:oe(Yo.shell,e),...i,children:a}));w0.displayName="AIComposer";function cy(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const b0=g.forwardRef(({value:e,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:v,children:y,style:x,...w},k)=>{const T=g.useRef(null);g.useEffect(()=>{const R=T.current;R&&(R.style.height="auto",R.style.height=`${R.scrollHeight}px`)},[e]);const _=g.useCallback(R=>a(R.target.value),[a]),N=g.useCallback(R=>{f==null||f(R),!R.defaultPrevented&&R.key==="Enter"&&!R.shiftKey&&i&&(R.preventDefault(),i())},[f,i]),L=g.useCallback(R=>{T.current=R,cy(k,R)},[k]),A={...x??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:oe(Yo.wrapper,h),"data-radius":l,children:r.jsx("div",{className:Yo.card,children:r.jsxs("div",{className:Yo.cardClip,children:[r.jsx("textarea",{...w,ref:L,className:Yo.textarea,rows:1,value:e,onChange:_,onKeyDown:N,placeholder:d,disabled:v,style:A}),y!=null&&r.jsx("div",{className:Yo.actions,children:y})]})})})});b0.displayName="AIComposerInput";const dy="_root_fv0gc_10",uy="_simple_fv0gc_28",hy="_float_fv0gc_83",df={root:dy,simple:uy,float:hy},py=g.forwardRef(({variant:e="simple",className:a,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":e,className:oe(df.root,df[e],a),...s,children:i}));py.displayName="AIConversation";const fy="_fadeFrame_1l0ib_19",my="_scroller_1l0ib_32",gy="_content_1l0ib_89",vy="_messageBlock_1l0ib_108",xy="_messageBlockAi_1l0ib_116",yy="_inboundBlock_1l0ib_128",wy="_inboundLoader_1l0ib_136",by="_inboundLoaderLabel_1l0ib_146",ky="_outboundBlock_1l0ib_153",_y="_outboundHeader_1l0ib_161",Cy="_messageBlockUser_1l0ib_168",jy="_aiThreadOutboundIn_1l0ib_1",Sy="_messageBody_1l0ib_182",Ny="_messageBodyAi_1l0ib_193",Ry="_messageBodyUser_1l0ib_200",My="_label_1l0ib_159",Ly="_labelAi_1l0ib_221",$y="_labelUser_1l0ib_159",Ty="_labelAvatar_1l0ib_224",Ay="_labelText_1l0ib_237",Iy="_timestamp_1l0ib_244",Ey="_timestampAi_1l0ib_259",Py="_timestampUser_1l0ib_260",zy="_timestampInline_1l0ib_270",Oy="_aiThreadOutboundFadeIn_1l0ib_1",Ie={fadeFrame:fy,scroller:my,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:gy,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:vy,messageBlockAi:xy,inboundBlock:yy,inboundLoader:wy,inboundLoaderLabel:by,outboundBlock:ky,outboundHeader:_y,messageBlockUser:Cy,aiThreadOutboundIn:jy,messageBody:Sy,messageBodyAi:Ny,messageBodyUser:Ry,label:My,labelAi:Ly,labelUser:$y,labelAvatar:Ty,labelText:Ay,timestamp:Iy,timestampAi:Ey,timestampUser:Py,timestampInline:zy,aiThreadOutboundFadeIn:Oy},uf=8;function Dy(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const Fy=g.forwardRef(({density:e="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const v=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[w,k]=g.useState(!1),[T,_]=g.useState(!1),N=g.useCallback(L=>{v.current=L,Dy(f,L)},[f]);return g.useEffect(()=>{const L=v.current,A=y.current;if(!L||!A)return;const R=()=>{const{scrollTop:S,scrollHeight:I,clientHeight:P}=L;return I-S-P<s},C=S=>{L.scrollTo({top:L.scrollHeight,behavior:S?"smooth":"auto"})},O=()=>{const{scrollTop:S,scrollHeight:I,clientHeight:P}=L,W=S>uf,Y=I-S-P>uf;k(q=>q===W?q:W),_(q=>q===Y?q:Y)};i&&(C(!1),x.current=!0),O();const j=()=>{x.current=R(),O()};L.addEventListener("scroll",j,{passive:!0});const M=new ResizeObserver(()=>{i&&x.current&&C(!0),O()});return M.observe(A),M.observe(L),()=>{L.removeEventListener("scroll",j),M.disconnect()}},[i,s]),r.jsx("div",{className:Ie.fadeFrame,"data-fade-top":w,"data-fade-bottom":T,children:r.jsx("div",{ref:N,className:oe(Ie.scroller,Ie[`padding-${a}`],l),...h,children:r.jsx("div",{ref:y,className:oe(Ie.content,Ie[`density-${e}`]),children:d})})})});Fy.displayName="AIThread";const vl=g.forwardRef(({align:e="ai",avatar:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:oe(Ie.label,e==="user"?Ie.labelUser:Ie.labelAi,i),...l,children:[a!=null&&r.jsx("span",{className:Ie.labelAvatar,children:a}),r.jsx("span",{className:Ie.labelText,children:s})]}));vl.displayName="AILabel";const By=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Wy(e,a){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const vi=g.forwardRef(({value:e,align:a="ai",format:i=By,inline:s=!1,className:l,...d},h)=>{const f=g.useMemo(()=>Wy(e,i),[e,i]);return f?r.jsx("time",{ref:h,className:oe(Ie.timestamp,s?Ie.timestampInline:a==="user"?Ie.timestampUser:Ie.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});vi.displayName="AITimestamp";function Hy(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(vi,{align:"ai",value:e}):e}function Uy(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(vl,{align:"ai",children:e}):e}const qy=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:oe(Ie.messageBlock,Ie.messageBlockAi,i),...l,children:[Uy(e),r.jsx("div",{className:oe(Ie.messageBody,Ie.messageBodyAi),children:s}),Hy(a)]}));qy.displayName="AIAssistantMessage";function Vy(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(vi,{align:"user",value:e}):e}function Gy(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(vl,{align:"user",children:e}):e}const Yy=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:oe(Ie.messageBlock,Ie.messageBlockUser,i),...l,children:[Gy(e),r.jsx("div",{className:oe(Ie.messageBody,Ie.messageBodyUser),children:s}),Vy(a)]}));Yy.displayName="AIUserMessage";function Qy(e){return e===!1?null:e==null||e===!0?r.jsx(y0,{size:"sm"}):e}function Ky(e,a){return e==null&&a==null?null:typeof e=="string"||typeof e=="number"||e==null?r.jsx(vl,{align:"ai",avatar:a,children:e}):e}const Zy=g.forwardRef(({avatar:e,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...v},y)=>{const x=Qy(e),w=Ky(a,x);return r.jsxs("div",{ref:y,"data-author":"ai",className:oe(Ie.messageBlock,Ie.messageBlockAi,Ie.inboundBlock,h),...v,children:[w,i,f!=null&&r.jsx("div",{className:oe(Ie.messageBody,Ie.messageBodyAi),children:f}),l&&r.jsxs("div",{className:Ie.inboundLoader,"aria-live":"polite",children:[r.jsx(Cu,{size:"xs"}),d!=null&&r.jsx("span",{className:Ie.inboundLoaderLabel,children:d})]}),s]})});Zy.displayName="AIInboundMessage";function Xy(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const Jy=g.forwardRef(({label:e="You",time:a,timeFormat:i,className:s,children:l,...d},h)=>{const f=a==null?null:Xy(a)?r.jsx(vi,{value:a,format:i,inline:!0}):a,v=e==null?null:typeof e=="string"||typeof e=="number"?r.jsx("span",{className:Ie.labelText,children:e}):e,y=v!=null||f!=null;return r.jsxs("div",{ref:h,"data-author":"user",className:oe(Ie.messageBlock,Ie.messageBlockUser,Ie.outboundBlock,s),...d,children:[y&&r.jsxs("div",{className:oe(Ie.label,Ie.labelUser,Ie.outboundHeader),children:[v,f]}),r.jsx("div",{className:oe(Ie.messageBody,Ie.messageBodyUser),children:l})]})});Jy.displayName="AIOutboundMessage";const In=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};In.displayName="ChevronDownIcon";const e5="_root_1j4eq_8",t5="_header_1j4eq_17",n5="_headerSummary_1j4eq_53",r5="_aiTrailSummaryFade_1j4eq_1",o5="_aiTrailHeaderAppend_1j4eq_1",a5="_aiTrailEllipsis_1j4eq_1",i5="_headerCurrent_1j4eq_128",s5="_headerChevron_1j4eq_159",l5="_headerChevronExpanded_1j4eq_173",c5="_body_1j4eq_187",d5="_bodyExpanded_1j4eq_200",u5="_bodyCollapsed_1j4eq_201",h5="_bodyInner_1j4eq_203",p5="_bodyContent_1j4eq_187",f5="_step_1j4eq_225",m5="_stepIcon_1j4eq_242",g5="_stepAnimating_1j4eq_256",v5="_aiTrailStepPulse_1j4eq_1",x5="_stepBody_1j4eq_267",y5="_stepHead_1j4eq_282",w5="_stepLabel_1j4eq_286",b5="_stepSeparator_1j4eq_288",k5="_stepDetail_1j4eq_292",_5="_subToggle_1j4eq_302",C5="_subToggleCount_1j4eq_335",j5="_subToggleChevron_1j4eq_339",S5="_subActivityWrap_1j4eq_358",N5="_subActivityExpanded_1j4eq_364",R5="_subActivityCollapsed_1j4eq_365",M5="_subActivityClip_1j4eq_367",L5="_subActivityList_1j4eq_378",$5="_subActivity_1j4eq_358",T5="_aiTrailSubActivityType_1j4eq_1",A5="_aiTrailSubActivityFade_1j4eq_1",qe={root:e5,header:t5,headerSummary:n5,aiTrailSummaryFade:r5,aiTrailHeaderAppend:o5,aiTrailEllipsis:a5,headerCurrent:i5,headerChevron:s5,headerChevronExpanded:l5,body:c5,bodyExpanded:d5,bodyCollapsed:u5,bodyInner:h5,bodyContent:p5,step:f5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:m5,stepAnimating:g5,aiTrailStepPulse:v5,stepBody:x5,stepHead:y5,stepLabel:w5,stepSeparator:b5,stepDetail:k5,subToggle:_5,subToggleCount:C5,subToggleChevron:j5,subActivityWrap:S5,subActivityExpanded:N5,subActivityCollapsed:R5,subActivityClip:M5,subActivityList:L5,subActivity:$5,aiTrailSubActivityType:T5,aiTrailSubActivityFade:A5},ju=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ju.displayName="MessageDotsSquareIcon";function nl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}nl.displayName="SearchMdIcon";function $r({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const k0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};k0.displayName="Globe01Icon";const _0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};_0.displayName="Code02Icon";function C0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}C0.displayName="Tool01Icon";const Dt=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Jo=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Jo.displayName="AlertCircleIcon";const I5={thinking:r.jsx(ju,{size:14}),tool:r.jsx(C0,{size:14}),search:r.jsx(nl,{size:14}),file:r.jsx($r,{size:14}),web:r.jsx(k0,{size:14}),code:r.jsx(_0,{size:14}),content:r.jsx(Dt,{size:14})},xl=g.forwardRef(({type:e,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...v},y)=>{const x=a==="active"&&d==="live",w=a==="active"&&d==="live",k=a==="active"||a==="error",[T,_]=g.useState(null),N=T!==null?T:k;g.useEffect(()=>{_(null)},[a]);const L=g.useCallback(()=>_(!N),[N]),A=!!l&&l.length>0,R=(l==null?void 0:l.length)??0,C=a==="error"?r.jsx(Jo,{size:14}):s??I5[e];return r.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":a,className:oe(qe.step,qe[`step-${a}`],x&&qe.stepAnimating,h),...v,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:C}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:i})]}),A&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:L,"aria-expanded":N,"aria-label":N?`Collapse ${R} sub-steps`:`Expand ${R} sub-steps`,"data-expanded":N||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:R}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(In,{size:10})})]})]}),A&&r.jsx(r.Fragment,{children:r.jsx("div",{className:oe(qe.subActivityWrap,N?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!N,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":w||void 0,children:l.map((O,j)=>r.jsx("li",{className:qe.subActivity,children:O},j))})})})})]})]})});xl.displayName="AIActivityStep";function hf(e){return e==="error"}function E5(e,a,i,s,l,d){if(e==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${h} · ${f}`}return r.jsxs(r.Fragment,{children:[h,i.map((f,v)=>r.jsxs(g.Fragment,{children:[" · ",f]},v))]})}const Su=g.forwardRef(({state:e="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...v},y)=>{const x=a!==void 0,[w,k]=g.useState(i??hf(e)),[T,_]=g.useState(!1);g.useEffect(()=>{x||T||k(hf(e))},[e,x,T]);const N=x?!!a:w,L=g.useCallback(()=>{const M=!N;x||(k(M),_(!0)),s==null||s(M)},[N,x,s]),{enhancedChildren:A,stepCount:R,stepLabels:C,currentLabelIdx:O}=g.useMemo(()=>{let M=0;const S=[];let I=-1;return{enhancedChildren:g.Children.map(f,W=>{if(!g.isValidElement(W))return W;const Y=W.props;if(!("type"in Y||"status"in Y))return W;M+=1;const K=Y.status??"done";return K==="pending"?null:(Y.children!=null&&(S.push(Y.children),K==="active"&&(I=S.length-1)),P5(W,e))}),stepCount:M,stepLabels:S,currentLabelIdx:I>=0?I:S.length-1}},[f,e]),j=d??E5(e,R,C,O,qe.headerCurrent,l);return r.jsxs("div",{ref:y,"data-state":e,"data-expanded":N,className:oe(qe.root,h),...v,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:L,"aria-expanded":N,"aria-label":N?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:j},`${e}-${O}`),r.jsx("span",{className:oe(qe.headerChevron,N&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(In,{size:14})})]}),r.jsx("div",{className:oe(qe.body,N?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!N,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[A,e==="done"&&r.jsx(xl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Su.displayName="AIActivityTrail";function P5(e,a){return g.cloneElement(e,{groupState:a})}var xi=g0();const z5="_wrapper_3tqlm_10",O5="_tooltip_3tqlm_22",D5="_portal_3tqlm_23",F5="_top_3tqlm_61",B5="_bottom_3tqlm_71",W5="_left_3tqlm_81",H5="_right_3tqlm_91",Os={wrapper:z5,tooltip:O5,portal:D5,top:F5,bottom:B5,left:W5,right:H5},Vn=({content:e,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,v]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),w=g.useRef(null),k=g.useRef(),T=g.useId(),_=g.useCallback(()=>{if(!w.current)return;const C=w.current.getBoundingClientRect(),O=6+d;let j=0,M=0;switch(a){case"top":j=C.top-O,M=C.left+C.width/2;break;case"bottom":j=C.bottom+O,M=C.left+C.width/2;break;case"left":j=C.top+C.height/2,M=C.left-O;break;case"right":j=C.top+C.height/2,M=C.right+O;break}x({top:j,left:M})},[a,d]),N=g.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,_]),L=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!f)return;const C=()=>_();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,_]);const A=Qt.cloneElement(h,{"aria-describedby":f?T:void 0}),R=r.jsx("span",{id:T,role:"tooltip",className:oe(Os.tooltip,Os[a],Os.portal),"data-visible":f||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return r.jsxs("span",{ref:w,className:Os.wrapper,onMouseEnter:N,onMouseLeave:L,onFocus:N,onBlur:L,children:[A,xi.createPortal(R,document.body)]})};Vn.displayName="Tooltip";const U5="_root_v8mqg_9",q5="_hover_v8mqg_21",_d={root:U5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:q5};function V5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const j0=g.forwardRef(({visibility:e="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const v=i==null?null:V5(i)?r.jsx(vi,{value:i,format:s,inline:!0}):i,y=w=>{if(!g.isValidElement(w))return w;const k=w;if(k.type===Vn)return k;const T=k.props["aria-label"];return T?r.jsx(Vn,{content:T,placement:"top",delay:150,children:k}):k},x=g.Children.map(d,w=>{if(g.isValidElement(w)&&w.type===g.Fragment){const k=w.props.children;return g.Children.map(k,y)}return y(w)});return r.jsxs("div",{ref:f,"data-visibility":e,"data-align":a,className:oe(_d.root,_d[`align-${a}`],e==="hover"&&_d.hover,l),...h,children:[x,v]})});j0.displayName="AIMessageActions";const G5="_card_1apq1_17",Y5="_header_1apq1_69",Q5="_iconBadge_1apq1_74",K5="_iconInner_1apq1_89",Z5="_headerText_1apq1_100",X5="_headerTopRow_1apq1_109",J5="_eyebrow_1apq1_115",e4="_title_1apq1_124",t4="_subtitle_1apq1_130",n4="_headerTrailing_1apq1_135",r4="_body_1apq1_141",o4="_footer_1apq1_152",a4="_footerEnd_1apq1_157",i4="_metaRow_1apq1_162",s4="_metaItem_1apq1_170",l4="_resultHero_1apq1_180",c4="_resultHeadline_1apq1_185",d4="_resultDetail_1apq1_191",u4="_clauses_1apq1_205",h4="_clause_1apq1_205",p4="_clauseLabel_1apq1_215",f4="_clauseBody_1apq1_225",m4="_badgeExecuting_1apq1_245",Ze={card:G5,header:Y5,iconBadge:Q5,iconInner:K5,headerText:Z5,headerTopRow:X5,eyebrow:J5,title:e4,subtitle:t4,headerTrailing:n4,body:r4,footer:o4,footerEnd:a4,metaRow:i4,metaItem:s4,resultHero:l4,resultHeadline:c4,resultDetail:d4,clauses:u4,clause:h4,clauseLabel:p4,clauseBody:f4,badgeExecuting:m4},Gn=g.forwardRef(({tone:e="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:v,footerEnd:y=!1,className:x,children:w,...k},T)=>{const _=l!=null||f!=null,N=_||d!=null||h!=null,L=s!=null||N;return r.jsxs("div",{ref:T,"data-tone":e,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:oe(Ze.card,x),...k,children:[L&&r.jsxs("div",{className:Ze.header,children:[s!=null&&r.jsx("span",{className:oe(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ze.iconInner,children:s})}),N&&r.jsxs("div",{className:Ze.headerText,children:[_&&r.jsxs("div",{className:Ze.headerTopRow,children:[l!=null&&r.jsx("span",{className:Ze.eyebrow,children:l}),f!=null&&r.jsx("span",{className:Ze.headerTrailing,children:f})]}),d!=null&&r.jsx("span",{className:Ze.title,children:d}),h!=null&&r.jsx("span",{className:Ze.subtitle,children:h})]})]}),w!=null&&r.jsx("div",{className:Ze.body,children:w}),v!=null&&r.jsx("div",{className:oe(Ze.footer,y&&Ze.footerEnd),children:v})]})});Gn.displayName="UltronCard";const g4="_root_zkkgh_6",v4="_sm_zkkgh_24",x4="_md_zkkgh_33",y4="_lg_zkkgh_42",w4="_neutral_zkkgh_53",b4="_blue_zkkgh_66",k4="_azure_zkkgh_79",_4="_purple_zkkgh_92",C4="_pink_zkkgh_105",j4="_red_zkkgh_118",S4="_orange_zkkgh_131",N4="_yellow_zkkgh_144",R4="_matcha_zkkgh_157",M4="_green_zkkgh_170",L4="_subtle_zkkgh_184",$4="_outline_zkkgh_190",T4="_solid_zkkgh_196",A4="_dot_zkkgh_203",I4="_icon_zkkgh_212",E4="_dismiss_zkkgh_224",Zr={root:g4,sm:v4,md:x4,lg:y4,neutral:w4,blue:b4,azure:k4,purple:_4,pink:C4,red:j4,orange:S4,yellow:N4,matcha:R4,green:M4,subtle:L4,outline:$4,solid:T4,dot:A4,icon:I4,dismiss:E4},yi=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},P4={sm:10,md:12,lg:14},on=g.forwardRef(({variant:e="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:v,...y},x)=>r.jsxs("span",{ref:x,className:oe(Zr.root,Zr[i],Zr[a],Zr[e],f),...y,children:[s&&r.jsx("span",{className:Zr.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:oe(Zr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&r.jsx("button",{type:"button",className:Zr.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:r.jsx(yi,{size:P4[i]})})]}));on.displayName="Tag";function S0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}S0.displayName="SlashCircle01Icon";const Nu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Nu.displayName="EyeIcon";function yl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}yl.displayName="Target01Icon";function $n({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$n.displayName="ClockIcon";const wi=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};wi.displayName="RefreshCw04Icon";const yn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};yn.displayName="CheckCircleIcon";function wl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}wl.displayName="Save01Icon";const z4={sm:11,md:12,lg:14},O4={ignored:{label:"Ignored",color:"neutral",Icon:S0},monitored:{label:"Monitored",color:"blue",Icon:Nu},recommended:{label:"Recommended",color:"purple",Icon:yl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:$n},executing:{label:"Executing",color:"azure",Icon:wi},completed:{label:"Completed",color:"green",Icon:yn},saved:{label:"Saved",color:"matcha",Icon:wl}},ho=g.forwardRef(({status:e,size:a="sm",label:i,className:s,...l},d)=>{const h=O4[e],f=h.Icon;return r.jsx(on,{ref:d,color:h.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:z4[a]}),className:oe(e==="executing"&&Ze.badgeExecuting,s),...l,children:i??h.label})});ho.displayName="UltronStatusBadge";function bl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}bl.displayName="Bell01Icon";const D4=g.forwardRef(({title:e,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},v)=>r.jsx(Gn,{ref:v,tone:d,eyebrow:i,title:e,icon:a??r.jsx(bl,{size:14}),trailing:l?r.jsx(ho,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:Ze.metaRow,children:s.map((y,x)=>r.jsxs("span",{className:Ze.metaItem,children:[y.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,h]})}));D4.displayName="UltronEventCard";const F4=g.forwardRef(({eyebrow:e="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},h)=>r.jsxs(Gn,{ref:h,tone:s,eyebrow:e,icon:a??r.jsx(ju,{size:14}),...d,children:[l,i&&r.jsx("div",{className:Ze.metaRow,children:i})]}));F4.displayName="UltronUnderstandingCard";const B4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},W4=g.forwardRef(({eyebrow:e="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},h)=>r.jsxs(Gn,{ref:h,tone:s,eyebrow:e,icon:a??r.jsx(yl,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:Ze.metaRow,children:i.map((f,v)=>r.jsx(on,{size:"sm",color:B4[s],variant:"subtle",children:f},v))}):null]}));W4.displayName="UltronDecisionCard";const H4="_root_ou64w_8",U4="_xs_ou64w_75",q4="_sm_ou64w_84",V4="_md_ou64w_93",G4="_lg_ou64w_102",Y4="_xl_ou64w_111",Q4="_iconOnly_ou64w_122",K4="_primary_ou64w_132",Z4="_secondary_ou64w_148",X4="_tertiary_ou64w_167",J4="_ghost_ou64w_185",ew="_destructive_ou64w_203",tw="_destructiveSecondary_ou64w_221",nw="_artwork_ou64w_69",rw="_label_ou64w_254",ow="_spinner_ou64w_69",aw="_light_ou64w_281",Gt={root:H4,xs:U4,sm:q4,md:V4,lg:G4,xl:Y4,iconOnly:Q4,primary:K4,secondary:Z4,tertiary:X4,ghost:J4,destructive:ew,destructiveSecondary:tw,artwork:nw,label:rw,spinner:ow,"alloy-spin":"_alloy-spin_ou64w_1",light:aw},iw={primary:Gt.primary,secondary:Gt.secondary,tertiary:Gt.tertiary,ghost:Gt.ghost,destructive:Gt.destructive,"destructive-secondary":Gt.destructiveSecondary},Re=g.forwardRef(({variant:e="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:v,...y},x)=>{const w=v||i;return r.jsxs("button",{ref:x,className:oe(Gt.root,iw[e],Gt[a],d&&Gt.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":a,...y,children:[i&&r.jsx("span",{className:Gt.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:oe(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:oe(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:Gt.label,children:f}),l&&r.jsx("span",{className:oe(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Re.displayName="Button";function N0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}N0.displayName="XCircleIcon";const sw=g.forwardRef(({eyebrow:e="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},v)=>{const y=r.jsxs(r.Fragment,{children:[i.map((x,w)=>r.jsx(Re,{size:"sm",variant:x.variant??(w===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},w)),s&&r.jsx(Re,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(N0,{size:16}),onClick:s,children:l})]});return r.jsx(Gn,{ref:v,tone:d,eyebrow:e,icon:a??r.jsx(yl,{size:14}),footer:y,...f,children:h})});sw.displayName="UltronRecommendationCard";function Ru({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ru.displayName="Lock01Icon";const lw=g.forwardRef(({title:e,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:v="Edit",onEdit:y,tone:x="warning",children:w,...k},T)=>{const _=r.jsxs(r.Fragment,{children:[f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h}),y&&r.jsx(Re,{size:"md",variant:"secondary",onClick:y,children:v}),r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(Dt,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Gn,{ref:T,tone:x,eyebrow:a,title:e,icon:i??r.jsx(Ru,{size:14}),trailing:r.jsx(ho,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});lw.displayName="UltronApprovalCard";const cw=g.forwardRef(({eyebrow:e="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>r.jsx(Gn,{ref:f,tone:d,eyebrow:e,icon:a??r.jsx(wi,{size:14}),trailing:r.jsx(ho,{status:s==="done"?"completed":"executing"}),...h,children:r.jsx(Su,{state:s,duration:l,children:i.map((v,y)=>r.jsx(xl,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},y))})}));cw.displayName="UltronExecutionCard";const dw=g.forwardRef(({headline:e,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>r.jsx(Gn,{ref:f,tone:l,fill:!0,accent:!1,trailing:r.jsx(ho,{status:s}),footer:d,...h,children:r.jsxs("div",{className:Ze.resultHero,children:[r.jsx("span",{className:oe(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(yn,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ze.resultHeadline,children:e}),a!=null&&r.jsx("div",{className:Ze.resultDetail,children:a})]})]})}));dw.displayName="UltronResultCard";function R0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}R0.displayName="ZapIcon";const uw=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:v="info",children:y,...x},w)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(wl,{size:18}),loading:d,onClick:l,children:s}),f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h})]});return r.jsx(Gn,{ref:w,tone:v,fill:!0,accent:!1,eyebrow:a,title:e,icon:i??r.jsx(R0,{size:14}),footer:k,...x,children:y})});uw.displayName="UltronWorkflowSaveCard";const M0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};M0.displayName="GitBranch01Icon";function Cd({label:e,children:a}){return r.jsxs("div",{className:Ze.clause,children:[r.jsx("span",{className:Ze.clauseLabel,children:e}),r.jsx("span",{className:Ze.clauseBody,children:a})]})}const hw=g.forwardRef(({name:e,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:v="info",...y},x)=>r.jsx(Gn,{ref:x,tone:v,eyebrow:a,title:e,icon:i??r.jsx(M0,{size:14}),trailing:h?r.jsx(ho,{status:h}):void 0,footer:f,...y,children:r.jsxs("div",{className:Ze.clauses,children:[r.jsx(Cd,{label:"When",children:s}),r.jsx(Cd,{label:"If",children:l}),r.jsx(Cd,{label:"Then",children:d})]})}));hw.displayName="UltronWorkflowPreviewCard";const pw="_root_1nyuz_6",fw="_sm_1nyuz_20",mw="_md_1nyuz_29",gw="_lg_1nyuz_38",vw="_divider_1nyuz_48",xw="_interactive_1nyuz_53",yw="_disabled_1nyuz_60",ww="_destructive_1nyuz_64",bw="_selected_1nyuz_78",kw="_label_1nyuz_87",_w="_description_1nyuz_97",Cw="_leadingSlot_1nyuz_101",jw="_trailingSlot_1nyuz_102",Sw="_content_1nyuz_115",Nw="_taSwitch_1nyuz_167",Rw="_taSwitchThumb_1nyuz_188",Mw="_taCheckbox_1nyuz_203",Lw="_taRadio_1nyuz_226",$w="_taRadioDot_1nyuz_244",Tw="_taExpand_1nyuz_252",Aw="_taStatus_1nyuz_266",Iw="_taStatus_success_1nyuz_273",Ew="_taStatus_warning_1nyuz_274",Pw="_taStatus_error_1nyuz_275",zw="_taStatus_info_1nyuz_276",ht={root:pw,sm:fw,md:mw,lg:gw,divider:vw,interactive:xw,disabled:yw,destructive:ww,selected:bw,label:kw,description:_w,leadingSlot:Cw,trailingSlot:jw,content:Sw,taSwitch:Nw,taSwitchThumb:Rw,taCheckbox:Mw,taRadio:Lw,taRadioDot:$w,taExpand:Tw,taStatus:Aw,taStatus_success:Iw,taStatus_warning:Ew,taStatus_error:Pw,taStatus_info:zw},dn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};dn.displayName="ChevronRightIcon";const Mu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Mu.displayName="ArrowUpRightIcon";const Ow="_root_4qytd_5",Dw="_neutral_4qytd_25",Fw="_primary_4qytd_30",Bw="_success_4qytd_35",Ww="_warning_4qytd_40",Hw="_error_4qytd_45",Uw="_info_4qytd_50",pf={root:Ow,neutral:Dw,primary:Fw,success:Bw,warning:Ww,error:Hw,info:Uw},ia=g.forwardRef(({variant:e="neutral",className:a,children:i,...s},l)=>r.jsx("span",{ref:l,className:oe(pf.root,pf[e],a),...s,children:i}));ia.displayName="Badge";const qw=({checked:e})=>r.jsx("span",{className:ht.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:r.jsx("span",{className:ht.taSwitchThumb})}),Vw=({checked:e})=>r.jsx("span",{className:ht.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Gw=({checked:e})=>r.jsx("span",{className:ht.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("span",{className:ht.taRadioDot})}),Yw=({count:e,label:a})=>{const i=e!==void 0?String(e):a;return i?r.jsx(ia,{"aria-hidden":"true",children:i}):null},Qw=({expanded:e})=>r.jsx("span",{className:ht.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:r.jsx(dn,{size:16,color:"currentColor"})}),Kw=({variant:e})=>r.jsx("span",{className:oe(ht.taStatus,ht[`taStatus_${e}`]),"aria-hidden":"true"}),Zw=new Set(["badge","status"]),cn=g.forwardRef(({label:e,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:v,badgeLabel:y,expanded:x=!1,statusVariant:w="success",divider:k=!0,size:T="md",interactive:_,selected:N=!1,destructive:L=!1,disabled:A=!1,className:R,onClick:C,onKeyDown:O,...j},M)=>{const S=l==="switch"||l==="checkbox"||l==="radio",[I,P]=g.useState(h),W=S?d!==void 0?d:I:!1,Y=_||!!C||S||l!==void 0&&!Zw.has(l),q=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Y?"button":void 0,K=g.useCallback(re=>{if(!A){if(S){const se=!W;d===void 0&&P(se),f==null||f(se)}C==null||C(re)}},[A,S,W,d,f,C]),ee=g.useCallback(re=>{Y&&!A&&(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),K(re)),O==null||O(re)},[Y,A,K,O]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(dn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Mu,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(qw,{checked:W});case"checkbox":return r.jsx(Vw,{checked:W});case"radio":return r.jsx(Gw,{checked:W});case"badge":return r.jsx(Yw,{count:v,label:y});case"expand":return r.jsx(Qw,{expanded:x});case"status":return r.jsx(Kw,{variant:w});default:return null}})();return r.jsxs("div",{ref:M,role:q,tabIndex:Y&&!A?0:void 0,"aria-checked":S?W:void 0,"aria-selected":N||void 0,"aria-disabled":A||void 0,"data-selected":N||void 0,"data-disabled":A||void 0,"data-destructive":L||void 0,"data-trailing-action":l??void 0,className:oe(ht.root,ht[T],k&&ht.divider,Y&&ht.interactive,N&&ht.selected,L&&ht.destructive,A&&ht.disabled,R),onClick:A?void 0:K,onKeyDown:ee,...j,children:[i&&r.jsx("div",{className:ht.leadingSlot,children:i}),r.jsxs("div",{className:ht.content,children:[r.jsx("span",{className:ht.label,children:e}),a&&r.jsx("span",{className:ht.description,children:a})]}),ae&&r.jsx("div",{className:ht.trailingSlot,children:ae})]})});cn.displayName="ListItem";const Xw=g.forwardRef(({title:e,meta:a,icon:i,status:s,...l},d)=>r.jsx(cn,{ref:d,label:e,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(ho,{status:s}),...l}));Xw.displayName="UltronActivityStreamItem";const Jw="_root_1sz1z_7",e6="_status_1sz1z_50",jd={root:Jw,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:e6},Lu=g.forwardRef(({disabled:e=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const v=g.useRef(null),[y,x]=g.useState(""),w=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const T=k.props;return g.cloneElement(k,{groupDisabled:e||!!T.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=T=>{T.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>x(k),[]),r.jsxs("div",{ref:f,"data-size":a,className:oe(jd.root,jd[`size-${a}`],l),...h,children:[w,r.jsx("span",{ref:v,className:jd.status,role:"status","aria-live":"polite",children:y})]})});Lu.displayName="ComposerActions";function Sd({size:e=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const $u=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$u.displayName="SearchSmIcon";const Gs=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Gs.displayName="Trash03Icon";const L0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};L0.displayName="SunIcon";const rl=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};rl.displayName="ArrowNarrowRightIcon";function to({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function ff({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function t6({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const ol=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ol.displayName="ChevronSelectorVerticalIcon";const no=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};no.displayName="ClipboardCheckIcon";const $0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};$0.displayName="SettingsGearIcon";const T0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};T0.displayName="ChevronLeftIcon";const A0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};A0.displayName="EyeOffIcon";const I0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="StopIcon";const E0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};E0.displayName="RecordingIcon";const P0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};P0.displayName="BankIcon";function kl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}kl.displayName="ArrowNarrowUpIcon";function z0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}z0.displayName="ArrowNarrowDownIcon";function Tu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Tu.displayName="Microphone02Icon";const ea=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ea.displayName="AlertTriangleIcon";const Au=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Au.displayName="BankNote01Icon";const O0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};O0.displayName="CoinsStacked03Icon";function D0({size:e=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Iu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Iu.displayName="Map01Icon";const F0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};F0.displayName="PackageIcon";const B0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};B0.displayName="ThumbsUpIcon";const W0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};W0.displayName="ThumbsDownIcon";function al({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}al.displayName="Building02Icon";function Eu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Eu.displayName="Building05Icon";function bi({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}bi.displayName="CheckVerified01Icon";function H0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}H0.displayName="Copy01Icon";function U0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}U0.displayName="DotsVerticalIcon";function q0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}q0.displayName="Edit02Icon";function V0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}V0.displayName="Link01Icon";function _l({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}_l.displayName="LinkExternal01Icon";function G0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}G0.displayName="MedicalCrossIcon";function il({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}il.displayName="MessageCircle02Icon";function Pu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Pu.displayName="MinusIcon";function Y0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Y0.displayName="Moon01Icon";function Q0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Q0.displayName="Pin01Icon";function zu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zu.displayName="ReceiptCheckIcon";function K0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}K0.displayName="Trash01Icon";function ui({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ui.displayName="XCloseIcon";const n6="_base_i93xz_11",r6="_icon_i93xz_45",o6="_sendReady_i93xz_65",a6="_sendStreaming_i93xz_66",i6="_sendDisabled_i93xz_67",s6="_sendError_i93xz_68",l6="_attachIdle_i93xz_131",c6="_attachDisabled_i93xz_145",d6="_attachError_i93xz_152",u6="_voiceIdle_i93xz_165",h6="_voiceRecording_i93xz_179",p6="_voiceDisabled_i93xz_189",f6="_iconStack_i93xz_200",m6="_iconLayer_i93xz_209",lt={base:n6,icon:r6,sendReady:o6,sendStreaming:a6,sendDisabled:i6,sendError:s6,attachIdle:l6,attachDisabled:c6,attachError:d6,voiceIdle:u6,voiceRecording:h6,voiceDisabled:p6,iconStack:f6,iconLayer:m6},g6={hidden:void 0,ready:lt.sendReady,"disabled-invalid":lt.sendDisabled,streaming:lt.sendStreaming,error:lt.sendError},v6=(e,a,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},sa=g.forwardRef(({state:e,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),k=g.useRef(null),T=g.useCallback(C=>{k.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]),_=g.useCallback(()=>{if(e==="ready"){a==null||a();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const C=k.current;C&&(C.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[e,a,i,s]);if(e==="hidden")return null;const N=!h&&(e==="ready"||e==="streaming"||e==="error"),L=v6(e,l,d),A=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,R=r.jsx("button",{ref:T,type:"button","data-composer-action":"send","data-state":e,className:oe(lt.base,g6[e],f),style:v,"aria-label":L,disabled:!N,onClick:_,...y,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:r.jsx(kl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:lt.iconLayer,"data-active":e==="streaming"?"true":"false",children:r.jsx(I0,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:lt.iconLayer,"data-active":e==="error"?"true":"false",children:r.jsx(wi,{size:"100%",strokeWidth:2})})]})});return A?r.jsx(Vn,{content:A,placement:"top",children:R}):R});sa.displayName="ComposerSendButton";const x6={idle:lt.attachIdle,disabled:lt.attachDisabled,error:lt.attachError},y6=(e,a,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Z0=g.forwardRef(({state:e,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),k=g.useCallback(()=>{var R;(e==="idle"||e==="error")&&((R=w.current)==null||R.click())},[e]),T=g.useCallback(R=>{const C=R.target.files;C&&C.length>0&&(a==null||a(C)),R.target.value=""},[a]),_=!h&&e!=="disabled",N=y6(e,l,d),L=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,A=r.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:oe(lt.base,x6[e],f),style:v,"aria-label":N,disabled:!_,onClick:k,...y,children:[r.jsx("span",{className:lt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(uo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:T,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return L?r.jsx(Vn,{content:L,placement:"top",children:A}):A});Z0.displayName="ComposerAttachment";const w6={idle:lt.voiceIdle,recording:lt.voiceRecording,disabled:lt.voiceDisabled},b6=(e,a)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},X0=g.forwardRef(({state:e,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},v)=>{const y=g.useCallback(()=>{if(e==="idle"){a==null||a();return}if(e==="recording"){i==null||i();return}},[e,a,i]),x=!l&&e!=="disabled",w=b6(e,s),k=e==="disabled"?s??"Voice unavailable":null,T=r.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:oe(lt.base,w6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...f,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":e!=="recording"?"true":"false",children:r.jsx(Tu,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:lt.iconLayer,"data-active":e==="recording"?"true":"false",children:r.jsx(E0,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(Vn,{content:k,placement:"top",children:T}):T});X0.displayName="ComposerVoiceButton";const k6=g.forwardRef(({value:e,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:v="lg",leadingActions:y,className:x},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return r.jsx(w0,{className:x,style:{flex:"0 0 auto"},children:r.jsx(b0,{ref:w,value:e,onChange:a,onSubmit:i,placeholder:s,maxRows:f,radius:v,disabled:d,children:r.jsxs(Lu,{size:"md",disabled:d,children:[y,h&&r.jsx(X0,{state:d?"disabled":"idle"}),r.jsx(sa,{state:k,onSend:i,onStop:i})]})})})});k6.displayName="UltronCommandBar";const _6=g.forwardRef(({stages:e,state:a="live",duration:i,...s},l)=>r.jsx(Su,{ref:l,state:a,duration:i,...s,children:e.map((d,h)=>r.jsx(xl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));_6.displayName="UltronThreadTimeline";const C6="_root_ghwhu_10",j6="_badge_ghwhu_27",S6="_badgeIcon_ghwhu_38",N6="_green_ghwhu_59",R6="_yellow_ghwhu_60",M6="_matcha_ghwhu_61",L6="_purple_ghwhu_62",$6="_blue_ghwhu_63",T6="_azure_ghwhu_64",A6="_red_ghwhu_65",I6="_orange_ghwhu_66",E6="_pink_ghwhu_67",P6="_slate_ghwhu_68",z6="_content_ghwhu_73",O6="_label_ghwhu_83",D6="_valueRow_ghwhu_97",F6="_change_ghwhu_106",B6="_value_ghwhu_97",nr={root:C6,badge:j6,badgeIcon:S6,green:N6,yellow:R6,matcha:M6,purple:L6,blue:$6,azure:T6,red:A6,orange:I6,pink:E6,slate:P6,content:z6,label:O6,valueRow:D6,change:F6,value:B6},W6=g.forwardRef(({color:e="slate",icon:a,label:i,value:s,change:l,className:d,...h},f)=>r.jsxs("div",{ref:f,className:oe(nr.root,d),...h,children:[r.jsx("div",{className:oe(nr.badge,nr[e]),"aria-hidden":"true",children:r.jsx("span",{className:nr.badgeIcon,children:a})}),r.jsxs("div",{className:nr.content,children:[r.jsx("span",{className:nr.label,children:i}),r.jsxs("div",{className:nr.valueRow,children:[r.jsx("span",{className:nr.value,children:s}),l!=null&&r.jsx("span",{className:nr.change,children:l})]})]})]}));W6.displayName="DataCard";const H6="_root_d0j6n_7",U6="_icon_d0j6n_21",q6="_text_d0j6n_33",V6="_positive_d0j6n_41",G6="_warning_d0j6n_45",Y6="_negative_d0j6n_49",Ds={root:H6,icon:U6,text:q6,positive:V6,warning:G6,negative:Y6};function Q6(e){return e==="up"?"positive":"negative"}const K6=g.forwardRef((e,a)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Q6(e.trend):e.severity,{severity:f,...v}=d,y=i==="trend"?(({trend:w,severity:k,...T})=>T)(v):v,x=i==="trend"?e.trend==="up"?kl:z0:null;return r.jsxs("span",{ref:a,className:oe(Ds.root,Ds[h],l),...y,children:[r.jsx("span",{className:Ds.text,children:s}),x&&r.jsx("span",{className:Ds.icon,"aria-hidden":"true",children:r.jsx(x,{size:14})})]})});K6.displayName="ValueChangeLabel";const Z6="_root_1lq10_1",X6="_horizontal_1lq10_9",J6="_vertical_1lq10_15",e9="_solid_1lq10_32",t9="_dashed_1lq10_36",Fs={root:Z6,horizontal:X6,vertical:J6,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:e9,dashed:t9},n9=g.forwardRef(({thickness:e=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:oe(Fs.root,Fs[`thickness-${e}`],Fs[a],Fs[i],s),...l}));n9.displayName="Divider";const r9="_overlay_vxgy2_9",o9="_dialogOverlayIn_vxgy2_1",a9="_dialogOverlayOut_vxgy2_1",i9="_dialog_vxgy2_38",s9="_dialogIn_vxgy2_1",l9="_dialogOut_vxgy2_1",c9="_sm_vxgy2_88",d9="_md_vxgy2_89",u9="_lg_vxgy2_90",h9="_header_vxgy2_95",p9="_title_vxgy2_107",f9="_closeBtn_vxgy2_120",m9="_content_vxgy2_152",g9="_footer_vxgy2_163",Tr={overlay:r9,dialogOverlayIn:o9,dialogOverlayOut:a9,dialog:i9,dialogIn:s9,dialogOut:l9,sm:c9,md:d9,lg:u9,header:h9,title:p9,closeBtn:f9,content:m9,footer:g9},v9=g.forwardRef(({onClose:e,children:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:oe(Tr.header,i),...s,children:[r.jsx("span",{className:Tr.title,children:a}),e&&r.jsx("button",{type:"button",className:Tr.closeBtn,onClick:e,"aria-label":"Close",children:r.jsx(yi,{size:16})})]}));v9.displayName="DialogHeader";const x9=g.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:oe(Tr.content,a),...i,children:e}));x9.displayName="DialogContent";const y9=g.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:oe(Tr.footer,a),...i,children:e}));y9.displayName="DialogFooter";function w9({open:e,onClose:a,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=g.useRef(null),f=180,[v,y]=g.useState(e);return g.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),f);return()=>clearTimeout(x)},[e]),g.useEffect(()=>{if(!e)return;const x=w=>{w.key==="Escape"&&a()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,a]),g.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),v?xi.createPortal(r.jsx("div",{className:Tr.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&a()},children:r.jsx("div",{ref:h,className:oe(Tr.dialog,Tr[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const b9="_root_1dntq_7",k9="_badge_1dntq_57",_9="_badgeIconSlot_1dntq_74",C9="_content_1dntq_82",j9="_text_1dntq_90",S9="_title_1dntq_99",N9="_description_1dntq_120",R9="_actions_1dntq_131",M9="_dot_1dntq_137",L9="_actionLink_1dntq_144",$9="_primaryAction_1dntq_162",T9="_trailing_1dntq_170",$t={root:b9,badge:k9,badgeIconSlot:_9,content:C9,text:j9,title:S9,description:N9,actions:R9,dot:M9,actionLink:L9,primaryAction:$9,trailing:T9},A9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),I9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),E9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),mf=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),P9={error:A9,warning:E9,success:I9,info:mf,feature:mf},J0=g.forwardRef(({status:e="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:v,onDismiss:y,className:x,...w},k)=>{const T=P9[e],_=i==="lg",N=y?r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:r.jsx(yi,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:oe($t.root,x),"data-status":e,"data-variant":a,"data-size":i,...w,children:[r.jsx("span",{className:$t.badge,"aria-hidden":"true",children:r.jsx("span",{className:oe("alloy-icon-slot",$t.badgeIconSlot),children:r.jsx(T,{})})}),_?r.jsxs("div",{className:$t.content,children:[r.jsxs("div",{className:$t.text,children:[r.jsx("p",{className:$t.title,children:s}),l&&r.jsx("p",{className:$t.description,children:l})]}),(d||f)&&r.jsxs("div",{className:$t.actions,children:[d&&r.jsx("button",{type:"button",className:oe($t.actionLink,$t.primaryAction),onClick:h,children:d}),d&&f&&r.jsx("span",{className:$t.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:$t.actionLink,onClick:v,children:f})]})]}):r.jsx("p",{className:$t.title,children:s}),_?N:(d||y)&&r.jsxs("div",{className:$t.trailing,children:[d&&r.jsx("button",{type:"button",className:oe($t.actionLink,$t.primaryAction),onClick:h,children:d}),N]})]})});J0.displayName="Alert";const z9="_stack_x4xl7_11",O9="_item_x4xl7_28",D9="_itemExiting_x4xl7_33",nu={stack:z9,item:O9,itemExiting:D9},F9=g.createContext(null);function B9({id:e,title:a,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:v,exiting:y,onRemove:x}){const w=g.useCallback(()=>x(e),[e,x]);return r.jsx("div",{className:oe(nu.item,y&&nu.itemExiting),onAnimationEnd:y?w:void 0,children:r.jsx(J0,{status:s,variant:l,size:d,title:a,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function W9({toasts:e,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,a]),e.length===0?null:xi.createPortal(r.jsx("div",{className:nu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>r.jsx(B9,{...s,onRemove:i},s.id))}),document.body)}function H9({children:e}){const[a,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(f=>{const v=`toast-${++s.current}`;return i(y=>[...y,{id:v,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(f=>{i(v=>v.map(y=>y.id===f?{...y,exiting:!0}:y))},[]),h=g.useCallback(f=>{i(v=>v.filter(y=>y.id!==f))},[]);return r.jsxs(F9.Provider,{value:{addToast:l,removeToast:d},children:[e,r.jsx(W9,{toasts:a,onStartExit:d,onRemove:h})]})}const U9="_root_1s0ek_5",q9="_list_1s0ek_11",V9="_item_1s0ek_23",G9="_separator_1s0ek_31",Y9="_link_1s0ek_47",Q9="_current_1s0ek_68",K9="_iconSlot_1s0ek_76",Hn={root:U9,list:q9,item:V9,separator:G9,link:Y9,current:Q9,iconSlot:K9},Z9=()=>r.jsx("span",{className:Hn.separator,"aria-hidden":"true",children:"/"}),X9=()=>r.jsx("span",{className:Hn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),J9=g.forwardRef(({items:e,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?X9:Z9;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:oe(Hn.root,i),...s,children:r.jsx("ol",{className:Hn.list,children:e.map((h,f)=>{const v=f===e.length-1,y=!v&&(!!h.href||!!h.onClick);return r.jsxs("li",{className:Hn.item,children:[f>0&&r.jsx(d,{}),y?r.jsxs("a",{href:h.href,onClick:h.onClick,className:Hn.link,"aria-label":h.label,children:[h.icon&&r.jsx("span",{className:oe(Hn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]}):r.jsxs("span",{className:oe(Hn.link,v&&Hn.current),"aria-current":v?"page":void 0,children:[h.icon&&r.jsx("span",{className:oe(Hn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]})]},f)})})})});J9.displayName="Breadcrumb";const e8="_root_139vz_6",t8="_divider_139vz_14",n8="_item_139vz_19",r8="_label_139vz_25",o8="_description_139vz_26",a8="_chevron_139vz_27",i8="_iconSlot_139vz_28",s8="_hitTarget_139vz_32",l8="_size_sm_139vz_37",c8="_size_md_139vz_43",d8="_size_lg_139vz_49",u8="_header_139vz_59",h8="_headerContent_139vz_59",p8="_checkboxWrap_139vz_60",f8="_labelBlock_139vz_157",m8="_trailingSlot_139vz_60",g8="_body_139vz_199",v8="_bodyInner_139vz_209",x8="_bodyContent_139vz_214",kt={root:e8,divider:t8,item:n8,label:r8,description:o8,chevron:a8,iconSlot:i8,hitTarget:s8,size_sm:l8,size_md:c8,size_lg:d8,header:u8,headerContent:h8,checkboxWrap:p8,labelBlock:f8,trailingSlot:m8,body:g8,bodyInner:v8,bodyContent:x8},y8="_root_17t97_6",w8="_disabled_17t97_12",b8="_sm_17t97_18",k8="_md_17t97_26",_8="_lg_17t97_34",C8="_controlWrap_17t97_43",j8="_input_17t97_52",S8="_box_17t97_67",N8="_boxChecked_17t97_96",R8="_boxError_17t97_106",M8="_labelWrap_17t97_116",L8="_label_17t97_116",$8="_error_17t97_138",T8="_required_17t97_140",A8="_description_17t97_145",en={root:y8,disabled:w8,sm:b8,md:k8,lg:_8,controlWrap:C8,input:j8,box:S8,boxChecked:N8,boxError:R8,labelWrap:M8,label:L8,error:$8,required:T8,description:A8},eg=g.forwardRef(({checked:e,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:v,id:y,name:x,value:w,required:k,className:T},_)=>{const N=g.useId(),L=y??N,A=g.useRef(null);g.useEffect(()=>{A.current&&(A.current.indeterminate=i)},[i]);const R=e!==void 0,[C,O]=g.useState(a),j=R?e:C,M=I=>{R||O(I.target.checked),s==null||s(I.target.checked)},S=j||i;return r.jsxs("div",{className:oe(en.root,en[h],l&&en.disabled,d&&en.error,T),children:[r.jsxs("div",{className:en.controlWrap,children:[r.jsx("input",{ref:I=>{A.current=I,typeof _=="function"?_(I):_&&(_.current=I)},type:"checkbox",id:L,name:x,value:w,checked:j,disabled:l,required:k,"aria-invalid":d||void 0,onChange:M,className:en.input}),r.jsx("span",{className:oe(en.box,S&&en.boxChecked,d&&en.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):j?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||v)&&r.jsxs("div",{className:en.labelWrap,children:[f&&r.jsxs("label",{htmlFor:L,className:en.label,children:[f,k&&r.jsx("span",{className:en.required,"aria-hidden":"true",children:" *"})]}),v&&r.jsx("span",{className:en.description,children:v})]})]})});eg.displayName="Checkbox";const tg=g.createContext(null),ru=g.createContext(0),ng=g.forwardRef(({type:e="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:v,children:y,...x},w)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[T,_]=g.useState(k),N=i!==void 0,L=g.useMemo(()=>N?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:T,[N,i,T]),A=g.useCallback(O=>L.has(O),[L]),R=g.useCallback(O=>{const j=new Set(L);e==="single"?j.has(O)?a&&j.delete(O):(j.clear(),j.add(O)):j.has(O)?j.delete(O):j.add(O),N||_(j),l&&l(e==="single"?j.values().next().value??"":Array.from(j))},[L,e,a,N,l]),C=g.useMemo(()=>({type:e,collapsible:a,size:h,disabled:f,isExpanded:A,toggle:R}),[e,a,h,f,A,R]);return r.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:oe(kt.root,d&&kt.divider,v),...x,children:r.jsx(tg.Provider,{value:C,children:r.jsx(ru.Provider,{value:0,children:y})})})});ng.displayName="Accordion";function Bs(e,a){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(a){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const rg=g.forwardRef(({value:e,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:v,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:w,expanded:k,defaultExpanded:T=!1,onExpandedChange:_,disabled:N=!1,size:L,className:A,children:R,...C},O)=>{const j=g.useContext(tg),M=g.useContext(ru),S=j!==null,I=L??(j==null?void 0:j.size)??"md",P=N||(j==null?void 0:j.disabled)||!1,[W,Y]=g.useState(T);let q;S?q=e!==void 0?j.isExpanded(e):!1:k!==void 0?q=k:q=W;const K=g.useCallback(()=>{if(P)return;if(S){if(e===void 0)return;const $=j.isExpanded(e);j.toggle(e);const D=j.type==="single"&&!j.collapsible&&$?!0:!$;_==null||_(D);return}const E=!q;k===void 0&&Y(E),_==null||_(E)},[P,S,j,e,q,k,_]),ee=g.useCallback(E=>w==null?void 0:w(E),[w]),ae=g.useCallback(E=>{if(E.key==="Enter"||E.key===" "){E.preventDefault(),K();return}if(S)switch(E.key){case"ArrowDown":E.preventDefault(),Bs(E.currentTarget,"next");break;case"ArrowUp":E.preventDefault(),Bs(E.currentTarget,"prev");break;case"Home":E.preventDefault(),Bs(E.currentTarget,"first");break;case"End":E.preventDefault(),Bs(E.currentTarget,"last");break}},[K,S]),re=g.useId(),se=`${re}-header`,Z=`${re}-body`,U=I==="sm"?16:I==="md"?18:20,G=l??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:kt.checkboxWrap,children:r.jsx(eg,{size:I,checked:v,defaultChecked:y,indeterminate:x,disabled:P,onChange:ee})}),s&&r.jsx("span",{className:kt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:O,"data-accordion-item":"","data-expanded":q||void 0,"data-disabled":P||void 0,"data-size":I,"data-depth":M,className:oe(kt.item,kt[`size_${I}`],A),style:{"--accordion-depth":M},...C,children:[r.jsxs("div",{className:kt.header,children:[r.jsx("button",{type:"button",id:se,"data-accordion-header-button":"","data-accordion-depth":M,className:kt.hitTarget,"aria-expanded":q,"aria-controls":Z,"aria-disabled":P||void 0,disabled:P,onClick:K,onKeyDown:ae}),r.jsxs("div",{className:kt.headerContent,children:[h==="leading"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(dn,{size:U,color:"currentColor"})}),G,r.jsxs("div",{className:kt.labelBlock,children:[r.jsx("span",{className:kt.label,children:a}),i&&r.jsx("span",{className:kt.description,children:i})]}),d&&r.jsx("div",{className:kt.trailingSlot,children:d}),h==="trailing"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(dn,{size:U,color:"currentColor"})})]})]}),r.jsx("div",{id:Z,role:"region","aria-labelledby":se,className:kt.body,"aria-hidden":!q,children:r.jsx("div",{className:kt.bodyInner,children:r.jsx("div",{className:kt.bodyContent,children:r.jsx(ru.Provider,{value:M+1,children:R})})})})]})});rg.displayName="AccordionItem";const I8="_root_1vgip_7",E8="_fullWidth_1vgip_12",P8="_panel_1vgip_19",z8="_panelInner_1vgip_73",O8="_item_1vgip_81",D8="_groupHeading_1vgip_87",F8="_groupHeadingSm_1vgip_96",B8="_groupHeadingLabel_1vgip_100",W8="_groupHeadingCollapsible_1vgip_112",H8="_groupChevron_1vgip_125",U8="_groupDivider_1vgip_139",Ln={root:I8,fullWidth:E8,panel:P8,panelInner:z8,item:O8,groupHeading:D8,groupHeadingSm:F8,groupHeadingLabel:B8,groupHeadingCollapsible:W8,groupChevron:H8,groupDivider:U8};function q8({group:e,size:a,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return r.jsxs("div",{children:[e.heading&&r.jsxs("div",{className:oe(Ln.groupHeading,a==="sm"&&Ln.groupHeadingSm,e.collapsible&&Ln.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[r.jsx("span",{className:Ln.groupHeadingLabel,children:e.heading}),e.collapsible&&r.jsx("span",{className:Ln.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(dn,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const v=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return r.jsx(cn,{role:"menuitem",size:a,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Ln.item,onClick:()=>{var y;(y=h.onClick)==null||y.call(h),i&&!v&&s()}},h.id)})})]})}const Ou=g.forwardRef(({trigger:e,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:v=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:w,...k},T)=>{const[_,N]=g.useState(h),L=g.useRef(null),A=d!==void 0?d:_,R=g.useCallback(O=>{L.current=O,T&&(typeof T=="function"?T(O):T.current=O)},[T]),C=g.useCallback(O=>{d===void 0&&N(O),f==null||f(O)},[d,f]);return g.useEffect(()=>{if(!A)return;const O=j=>{var M;(M=L.current)!=null&&M.contains(j.target)||C(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[A,C]),g.useEffect(()=>{if(!A)return;const O=j=>{j.key==="Escape"&&C(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[A,C]),r.jsxs("div",{ref:R,className:oe(Ln.root,x&&Ln.fullWidth,w),...k,children:[r.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":A,tabIndex:v?-1:0,onClick:v?void 0:()=>C(!A),onKeyDown:v?void 0:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),C(!A))},children:e}),r.jsx("div",{className:Ln.panel,"data-open":A||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:Ln.panelInner,children:a.map((O,j)=>r.jsxs("div",{children:[j>0&&r.jsx("div",{className:Ln.groupDivider,"aria-hidden":"true"}),r.jsx(q8,{group:O,size:i,closeOnSelect:y,onClose:()=>C(!1)})]},O.id))})})]})});Ou.displayName="DropdownMenu";const V8="_hiddenInput_7w2s5_8",G8="_area_7w2s5_19",Y8="_uploadIcon_7w2s5_53",Q8="_textBlock_7w2s5_59",K8="_title_7w2s5_67",Z8="_description_7w2s5_76",X8="_fileRow_7w2s5_88",J8="_fileIcon_7w2s5_96",e7="_fileName_7w2s5_101",t7="_successIcon_7w2s5_115",n7="_removeBtn_7w2s5_121",r7="_progressWrap_7w2s5_145",o7="_progressBar_7w2s5_153",a7="_progressFill_7w2s5_161",i7="_progressLabel_7w2s5_168",s7="_errorRow_7w2s5_178",l7="_errorIcon_7w2s5_186",c7="_errorText_7w2s5_192",d7="_areaMulti_7w2s5_206",u7="_multiDropZone_7w2s5_214",h7="_fileList_7w2s5_244",p7="_fileListItem_7w2s5_254",f7="_inline_7w2s5_267",m7="_inlineIcon_7w2s5_309",g7="_inlineText_7w2s5_330",v7="_inlineProgress_7w2s5_353",x7="_inlineProgressFill_7w2s5_363",ze={hiddenInput:V8,area:G8,uploadIcon:Y8,textBlock:Q8,title:K8,description:Z8,fileRow:X8,fileIcon:J8,fileName:e7,successIcon:t7,removeBtn:n7,progressWrap:r7,progressBar:o7,progressFill:a7,progressLabel:i7,errorRow:s7,errorIcon:l7,errorText:c7,areaMulti:d7,multiDropZone:u7,fileList:h7,fileListItem:p7,inline:f7,inlineIcon:m7,inlineText:g7,inlineProgress:v7,inlineProgressFill:x7};function Nd(e){const a=e.name.lastIndexOf(".");return a!==-1?e.name.slice(a+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Du=g.forwardRef(({variant:e="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:w,onClear:k,onRemoveFile:T,fieldVariant:_="outlined",disabled:N=!1,className:L,...A},R)=>{const C=g.useRef(null),[O,j]=g.useState(!1),M=!N&&(a||i==="empty"),S=g.useCallback(()=>{var re;!N&&(a||i==="empty")&&((re=C.current)==null||re.click())},[N,a,i]),I=g.useCallback(re=>{var se;if(a){const Z=re.target.files?Array.from(re.target.files):[];Z.length&&(w==null||w(Z))}else{const Z=(se=re.target.files)==null?void 0:se[0];Z&&(x==null||x(Z))}re.target.value=""},[a,x,w]),P=g.useCallback(re=>{re.preventDefault(),M&&j(!0)},[M]),W=g.useCallback(()=>j(!1),[]),Y=g.useCallback(re=>{var se;if(re.preventDefault(),j(!1),!!M)if(a){const Z=re.dataTransfer.files?Array.from(re.dataTransfer.files):[];Z.length&&(w==null||w(Z))}else{const Z=(se=re.dataTransfer.files)==null?void 0:se[0];Z&&(x==null||x(Z))}},[M,a,x,w]),q=r.jsx("input",{ref:C,type:"file",className:ze.hiddenInput,accept:y,multiple:a,disabled:N,"aria-hidden":"true",tabIndex:-1,onChange:I}),K=l?r.jsxs("div",{className:ze.fileRow,children:[r.jsx("span",{className:`${ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx($r,{size:16})}),r.jsx("span",{className:ze.fileName,children:l.name}),r.jsx(on,{size:"sm",variant:"subtle",children:Nd(l)}),i==="complete"&&r.jsx("span",{className:`${ze.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(yn,{size:16})}),r.jsx("button",{type:"button",className:ze.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Gs,{size:14})})})]}):null;if(e==="area"){if(a){const re=d??[];return r.jsxs("div",{ref:R,className:oe(ze.areaMulti,L),"data-drag-over":O||void 0,"data-disabled":N||void 0,onDragOver:P,onDragLeave:W,onDrop:Y,...A,children:[q,r.jsxs("div",{className:ze.multiDropZone,children:[r.jsx("span",{className:`${ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Sd,{size:24})}),r.jsxs("div",{className:ze.textBlock,children:[r.jsx("p",{className:ze.title,children:f}),r.jsx("p",{className:ze.description,children:v})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:S,disabled:N,children:"Browse Files"})]}),re.length>0&&r.jsx("ul",{className:ze.fileList,"aria-label":"Selected files",children:re.map((se,Z)=>r.jsxs("li",{className:ze.fileListItem,children:[r.jsx("span",{className:`${ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx($r,{size:16})}),r.jsx("span",{className:ze.fileName,children:se.name}),r.jsx(on,{size:"sm",variant:"subtle",children:Nd(se)}),r.jsx("button",{type:"button",className:ze.removeBtn,onClick:()=>T==null?void 0:T(Z),"aria-label":`Remove ${se.name}`,disabled:N,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Gs,{size:14})})})]},`${se.name}-${Z}`))})]})}return r.jsxs("div",{ref:R,className:oe(ze.area,L),"data-state":i,"data-drag-over":O||void 0,"data-disabled":N||void 0,onDragOver:P,onDragLeave:W,onDrop:Y,...A,children:[q,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Sd,{size:24})}),r.jsxs("div",{className:ze.textBlock,children:[r.jsx("p",{className:ze.title,children:f}),r.jsx("p",{className:ze.description,children:v})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:S,disabled:N,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[K,r.jsxs("div",{className:ze.progressWrap,children:[r.jsx("div",{className:ze.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:ze.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:ze.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&K,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:ze.errorRow,children:[r.jsx("span",{className:`${ze.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Jo,{size:20})}),r.jsx("p",{className:ze.errorText,children:h??"Upload failed. Please try again."})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:S,disabled:N,children:"Try Again"})]})]})}const ee={empty:r.jsx(Sd,{size:16}),uploading:r.jsx($r,{size:16}),complete:r.jsx(yn,{size:16}),error:r.jsx(Jo,{size:16})}[i],ae=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:R,className:oe(ze.inline,L),"data-state":i,"data-field-variant":_,"data-disabled":N||void 0,...A,children:[q,r.jsx("span",{className:`${ze.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ee}),r.jsxs("span",{className:ze.inlineText,"data-has-file":ae?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),ae&&r.jsx(on,{size:"sm",variant:"subtle",children:Nd(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:ze.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Gs,{size:14})})}),i==="empty"&&r.jsx(Re,{variant:"tertiary",size:"xs",onClick:S,disabled:N,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:ze.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:ze.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Du.displayName="FileUploader";const y7="_wrapper_127v8_8",w7="_labelRow_127v8_16",b7="_label_127v8_16",k7="_required_127v8_28",_7="_labelIcon_127v8_36",C7="_sm_127v8_46",j7="_md_127v8_47",S7="_lg_127v8_48",N7="_shell_127v8_44",R7="_outlined_127v8_75",M7="_underlined_127v8_102",L7="_float_127v8_147",$7="_leadingSlot_127v8_181",T7="_trailingSlot_127v8_193",A7="_trailingActionWrap_127v8_206",I7="_trailingActionBtn_127v8_213",E7="_successTrailingSlot_127v8_234",P7="_errorTrailingSlot_127v8_239",z7="_control_127v8_251",O7="_selectValue_127v8_297",D7="_selectPlaceholder_127v8_303",F7="_selectChevron_127v8_307",B7="_selectChevronOpen_127v8_312",W7="_textareaShell_127v8_315",H7="_textareaControl_127v8_334",U7="_footer_127v8_351",q7="_footerRow_127v8_363",V7="_footerError_127v8_364",G7="_footerSuccess_127v8_365",Y7="_footerIcon_127v8_368",Q7="_wrapperHorizontal_127v8_378",K7="_horizontalLabelCol_127v8_384",Z7="_horizontalLabelHint_127v8_393",X7="_horizontalControlCol_127v8_402",J7="_msContainer_127v8_416",eb="_msShell_127v8_425",tb="_msOpen_127v8_440",nb="_msDisabled_127v8_447",rb="_msBody_127v8_450",ob="_msPlaceholder_127v8_459",ab="_msChevron_127v8_469",ib="_msChevronOpen_127v8_480",sb="_msPanel_127v8_483",Ne={wrapper:y7,labelRow:w7,label:b7,required:k7,labelIcon:_7,sm:C7,md:j7,lg:S7,shell:N7,outlined:R7,underlined:M7,float:L7,leadingSlot:$7,trailingSlot:T7,trailingActionWrap:A7,trailingActionBtn:I7,successTrailingSlot:E7,errorTrailingSlot:P7,control:z7,selectValue:O7,selectPlaceholder:D7,selectChevron:F7,selectChevronOpen:B7,textareaShell:W7,textareaControl:H7,footer:U7,footerRow:q7,footerError:V7,footerSuccess:G7,footerIcon:Y7,wrapperHorizontal:Q7,horizontalLabelCol:K7,horizontalLabelHint:Z7,horizontalControlCol:X7,msContainer:J7,msShell:eb,msOpen:tb,msDisabled:nb,msBody:rb,msPlaceholder:ob,msChevron:ab,msChevronOpen:ib,msPanel:sb};function la({label:e,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:v="vertical",labelWidth:y=160,className:x,children:w}){const k=l??d??s,T=l?"error":d?"success":"hint",_=k?r.jsxs("p",{className:oe(Ne.footer,T==="error"&&Ne.footerError,T==="success"&&Ne.footerSuccess),role:T==="error"?"alert":void 0,"aria-live":T==="error"?"assertive":void 0,children:[T==="hint"&&r.jsx("span",{className:`${Ne.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Jo,{size:12})}),k]}):null,N=e!=null?r.jsxs("div",{className:Ne.labelRow,children:[r.jsx("label",{className:Ne.label,htmlFor:f,children:e}),h&&r.jsx("span",{className:Ne.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ne.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(v==="horizontal"){const L={width:typeof y=="number"?`${y}px`:y};return r.jsxs("div",{className:oe(Ne.wrapper,Ne.wrapperHorizontal,x),children:[(N||i)&&r.jsxs("div",{className:Ne.horizontalLabelCol,style:L,children:[N,i&&r.jsx("p",{className:Ne.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ne.horizontalControlCol,children:[w,_]})]})}return r.jsxs("div",{className:oe(Ne.wrapper,x),children:[N,w,_]})}function ki({variant:e="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:v,isTextarea:y,focused:x,className:w,children:k}){const T=a==="sm"?14:a==="lg"?18:16,_=s&&!i&&!f&&!v?r.jsx(yn,{size:T}):null,N=i&&!f&&!v?r.jsx(Jo,{size:T}):null,L=!!h,A=!!(f||v||_||N);return r.jsxs("div",{className:oe(Ne.shell,Ne[e],Ne[a],y&&Ne.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":L||void 0,"data-has-trailing":A||void 0,children:[h&&r.jsx("span",{className:oe(Ne.leadingSlot,"alloy-icon-slot"),children:h}),k,v?r.jsx("span",{className:Ne.trailingActionWrap,children:v}):f||_||N?r.jsx("span",{className:oe(Ne.trailingSlot,"alloy-icon-slot",_&&Ne.successTrailingSlot,N&&Ne.errorTrailingSlot),children:f??_??N}):null]})}const Fu=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:v="text",leadingIcon:y,trailingIcon:x,layout:w,labelWidth:k,labelDescription:T,id:_,disabled:N,readOnly:L,className:A,...R},C)=>{const O=g.useId(),j=_??O;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:j,layout:w,labelWidth:k,labelDescription:T,className:A,children:r.jsx(ki,{variant:h,size:f,error:!!s,success:!!l,disabled:N,readOnly:L,leadingIcon:y,trailingIcon:x,children:r.jsx("input",{ref:C,id:j,type:v,disabled:N,readOnly:L,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${j}-footer`:void 0,className:oe(Ne.control),...R})})})});Fu.displayName="TextField";const lb=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,trailingIcon:y,layout:x,labelWidth:w,labelDescription:k,id:T,disabled:_,readOnly:N,className:L,...A},R)=>{const C=g.useId(),O=T??C;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:O,layout:x,labelWidth:w,labelDescription:k,className:L,children:r.jsx(ki,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:N,leadingIcon:v,trailingIcon:y,isTextarea:!0,children:r.jsx("textarea",{ref:R,id:O,disabled:_,readOnly:N,"aria-invalid":s?!0:void 0,className:oe(Ne.control,Ne.textareaControl),...A})})})});lb.displayName="TextArea";const cb={sm:"sm",md:"md",lg:"lg"},og=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,options:k,value:T,defaultValue:_="",onChange:N,placeholder:L="Select an option…",disabled:A,readOnly:R,id:C,className:O},j)=>{var U;const M=g.useId(),S=C??M,I=T!==void 0,[P,W]=g.useState(_),Y=I?T:P,q=g.useCallback(G=>{I||W(G),N==null||N(G)},[I,N]),[K,ee]=g.useState(!1),ae=(U=k.find(G=>G.value===Y))==null?void 0:U.label,re=f==="sm"?14:f==="lg"?18:16,se=cb[f],Z=r.jsx(ki,{variant:h,size:f,error:!!s,success:!!l,disabled:A,readOnly:R,focused:K,leadingIcon:v,trailingIcon:r.jsx("span",{className:oe(Ne.selectChevron,K&&Ne.selectChevronOpen),"aria-hidden":"true",children:r.jsx(In,{size:re})}),children:r.jsx("span",{className:oe(Ne.control,Ne.selectValue,!ae&&Ne.selectPlaceholder),children:ae??L})});return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:S,layout:y,labelWidth:x,labelDescription:w,className:O,children:r.jsx(Ou,{ref:j,id:S,fullWidth:!0,trigger:Z,groups:[{id:"options",options:k.map(G=>({id:G.value,label:G.label,disabled:G.disabled,selected:G.value===Y,onClick:()=>q(G.value)}))}],size:se,width:"100%",placement:"bottom-start",open:K,onOpenChange:ee,disabled:A||R})})});og.displayName="SelectField";const db=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,id:k,disabled:T,readOnly:_,className:N,...L},A)=>{const R=g.useId(),C=k??R,[O,j]=g.useState(!1),M=f==="sm"?14:f==="lg"?18:16;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:C,layout:y,labelWidth:x,labelDescription:w,className:N,children:r.jsx(ki,{variant:h,size:f,error:!!s,success:!!l,disabled:T,readOnly:_,leadingIcon:v,trailingAction:r.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:()=>j(S=>!S),tabIndex:T?-1:0,"aria-label":O?"Hide password":"Show password","aria-pressed":O,children:O?r.jsx(A0,{size:M}):r.jsx(Nu,{size:M})}),children:r.jsx("input",{ref:A,id:C,type:O?"text":"password",disabled:T,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:oe(Ne.control),...L})})})});db.displayName="PasswordField";const ag=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:v,onChange:y,layout:x,labelWidth:w,labelDescription:k,id:T,value:_,defaultValue:N,disabled:L,readOnly:A,className:R,...C},O)=>{const j=g.useId(),M=T??j,S=f==="sm"?14:f==="lg"?18:16,I=_!==void 0?String(_).length>0:void 0,P=g.useCallback(W=>{y==null||y(W)},[y]);return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:M,layout:x,labelWidth:w,labelDescription:k,className:R,children:r.jsx(ki,{variant:h,size:f,error:!!s,success:!!l,disabled:L,readOnly:A,leadingIcon:r.jsx($u,{size:S}),trailingAction:I?r.jsx("button",{type:"button",className:`${Ne.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:L?-1:0,"aria-label":"Clear search",children:r.jsx(yi,{size:S})}):void 0,children:r.jsx("input",{ref:O,id:M,type:"search",value:_,defaultValue:N,disabled:L,readOnly:A,"aria-invalid":s?!0:void 0,onChange:P,className:oe(Ne.control),...C})})})});ag.displayName="SearchField";const ig=g.forwardRef((e,a)=>r.jsx(Fu,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...e}));ig.displayName="EmailField";const sg=g.forwardRef((e,a)=>r.jsx(Fu,{ref:a,type:"number",inputMode:"numeric",...e}));sg.displayName="NumberField";const ub={sm:"sm",md:"sm",lg:"md"},hb={sm:"sm",md:"md",lg:"lg"},pb=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:v,labelWidth:y,labelDescription:x,options:w,value:k,defaultValue:T=[],onChange:_,placeholder:N="Select options…",disabled:L,readOnly:A,id:R,className:C},O)=>{const j=g.useId(),M=R??j,S=`${M}-list`,I=g.useRef(null),P=k!==void 0,[W,Y]=g.useState(T),q=P?k:W,K=g.useCallback($=>{P||Y($),_==null||_($)},[P,_]),[ee,ae]=g.useState(!1);g.useEffect(()=>{if(!ee)return;const $=V=>{I.current&&!I.current.contains(V.target)&&ae(!1)},D=V=>{V.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",$),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",$),document.removeEventListener("keydown",D)}},[ee]);const re=$=>{if(L||A)return;const D=q.includes($)?q.filter(V=>V!==$):[...q,$];K(D)},se=$=>{L||A||(($.key==="Enter"||$.key===" ")&&($.preventDefault(),ae(D=>!D)),$.key==="Backspace"&&q.length>0&&!ee&&K(q.slice(0,-1)))},Z=f==="sm"?14:f==="lg"?18:16,U=ub[f],G=hb[f],E=Object.fromEntries(w.map($=>[$.value,$.label]));return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:M,layout:v,labelWidth:y,labelDescription:x,className:C,children:r.jsxs("div",{ref:I,className:Ne.msContainer,children:[r.jsxs("div",{ref:O,id:M,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":S,"aria-disabled":L||void 0,tabIndex:L?-1:0,className:oe(Ne.msShell,Ne[h],Ne[f],ee&&Ne.msOpen,L&&Ne.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":L||void 0,onClick:()=>{!L&&!A&&ae($=>!$)},onKeyDown:se,children:[r.jsx("div",{className:Ne.msBody,children:q.length===0?r.jsx("span",{className:Ne.msPlaceholder,children:N}):q.map($=>r.jsx(on,{size:U,variant:"subtle",dismissible:!L&&!A,onDismiss:()=>K(q.filter(D=>D!==$)),children:E[$]??$},$))}),r.jsx("span",{className:oe(Ne.msChevron,"alloy-icon-slot",ee&&Ne.msChevronOpen),children:r.jsx(In,{size:Z})})]}),ee&&r.jsx("div",{id:S,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ne.msPanel,children:w.map($=>{const D=q.includes($.value);return r.jsx(cn,{label:$.label,size:G,trailingAction:"checkbox",checked:D,disabled:$.disabled,role:"option","aria-selected":D,onMouseDown:V=>{V.preventDefault()},onCheckedChange:()=>{$.disabled||re($.value)}},$.value)})})]})})});pb.displayName="MultiSelectField";const fb="_root_1249j_6",mb="_pageControls_1249j_14",gb="_pageBtn_1249j_21",vb="_ellipsis_1249j_36",xb="_rowsGroup_1249j_51",yb="_rowsSelect_1249j_58",wb="_countText_1249j_64",bb="_groupLabel_1249j_74",kb="_goToGroup_1249j_84",_b="_goToInput_1249j_91",Rn={root:fb,pageControls:mb,pageBtn:gb,ellipsis:vb,rowsGroup:xb,rowsSelect:yb,countText:wb,groupLabel:bb,goToGroup:kb,goToInput:_b};function Cb(e,a,i){if(a<=1)return[1];const s=Math.max(2,e-i),l=Math.min(a-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const jb=g.forwardRef(({page:e,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:v,siblingCount:y=1,size:x="sm",disabled:w=!1,className:k,...T},_)=>{const[N,L]=g.useState(""),A=x,R=x,C=x==="sm"?14:16,O=Cb(e,a,y),j=g.useCallback(I=>{const P=Math.min(Math.max(1,I),a);P!==e&&i(P)},[e,a,i]),M=g.useCallback(I=>{if(I.key==="Enter"){const P=parseInt(N,10);isNaN(P)||j(P),L("")}},[N,j]),S=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return r.jsxs("nav",{ref:_,"aria-label":"Pagination",className:oe(Rn.root,k),"data-size":x,...T,children:[s&&r.jsxs("div",{className:Rn.rowsGroup,children:[r.jsx("span",{className:Rn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:Rn.rowsSelect,children:r.jsx(og,{size:R,value:l,disabled:w,"aria-label":"Rows per page",onChange:I=>h==null?void 0:h(Number(I.target.value)),children:d.map(I=>r.jsx("option",{value:I,children:I},I))})})]}),S&&r.jsx("span",{className:Rn.countText,"aria-live":"polite",children:S}),r.jsxs("div",{className:Rn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Re,{variant:"ghost",size:A,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>j(e-1),children:r.jsx(T0,{size:C})}),O.map((I,P)=>I==="ellipsis"?r.jsx("span",{className:Rn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${P}`):r.jsx(Re,{variant:I===e?"secondary":"ghost",size:A,"aria-label":`Page ${I}`,"aria-current":I===e?"page":void 0,disabled:w,onClick:()=>j(I),className:Rn.pageBtn,children:I},I)),r.jsx(Re,{variant:"ghost",size:A,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=a,onClick:()=>j(e+1),children:r.jsx(dn,{size:C})})]}),f&&r.jsxs("div",{className:Rn.goToGroup,children:[r.jsx("span",{className:Rn.groupLabel,children:"Go to"}),r.jsx("div",{className:Rn.goToInput,children:r.jsx(sg,{size:R,value:N,placeholder:String(e),min:1,max:a,disabled:w,"aria-label":"Go to page number",onChange:I=>L(I.target.value),onKeyDown:M})})]})]})});jb.displayName="Pagination";const Sb="_root_1vx33_6",Nb="_fullWidth_1vx33_18",Rb="_item_1vx33_23",Mb="_indicator_1vx33_28",Lb="_sm_1vx33_46",$b="_md_1vx33_54",Tb="_lg_1vx33_62",Ab="_itemSelected_1vx33_109",Ib="_itemIcon_1vx33_115",Eb="_itemLabel_1vx33_127",Mr={root:Sb,fullWidth:Nb,item:Rb,indicator:Mb,sm:Lb,md:$b,lg:Tb,itemSelected:Ab,itemIcon:Ib,itemLabel:Eb},lg=g.createContext(null);function Pb(e){const a=g.useContext(lg);if(!a)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return a}const cg=g.forwardRef(({value:e,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:v,onChange:y,disabled:x,name:w}=Pb("SegmentedControl.Item"),k=v===e,T=x||!!l;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:T,className:oe(Mr.item,k&&Mr.itemSelected,i),onClick:_=>{T||y(e),d==null||d(_)},...h,children:[a&&r.jsx("span",{className:oe(Mr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:Mr.itemLabel,children:s})]})});cg.displayName="SegmentedControl.Item";const dg=g.forwardRef(({value:e,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(a),k=e!==void 0,T=k?e:x,_=g.useId(),N=g.useRef(null);g.useLayoutEffect(()=>{const A=N.current;if(!A)return;const R=A.querySelector('[aria-checked="true"]');R&&(A.style.setProperty("--sc-indicator-x",`${R.offsetLeft}px`),A.style.setProperty("--sc-indicator-w",`${R.offsetWidth}px`))},[T,s]);const L=A=>{k||w(A),i==null||i(A)};return r.jsx(lg.Provider,{value:{value:T,onChange:L,disabled:l,name:_},children:r.jsxs("div",{ref:A=>{N.current=A,typeof y=="function"?y(A):y&&(y.current=A)},role:"radiogroup",className:oe(Mr.root,Mr[s],d&&Mr.fullWidth,h),...v,children:[r.jsx("span",{className:Mr.indicator,"aria-hidden":"true"}),f]})})});dg.displayName="SegmentedControl";Object.assign(dg,{Item:cg});const zb="_root_fkv0x_6",Ob="_sm_fkv0x_26",Db="_md_fkv0x_33",Fb="_lg_fkv0x_40",Bb="_dot_fkv0x_49",Wb="_success_fkv0x_58",Hb="_warning_fkv0x_65",Ub="_error_fkv0x_72",qb="_info_fkv0x_79",Vb="_neutral_fkv0x_86",Gb="_pending_fkv0x_93",Ws={root:zb,sm:Ob,md:Db,lg:Fb,dot:Bb,success:Wb,warning:Hb,error:Ub,info:qb,neutral:Vb,pending:Gb},hi=g.forwardRef(({status:e="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},h)=>r.jsxs("span",{ref:h,className:oe(Ws.root,Ws[a],Ws[e],s),...d,children:[i&&r.jsx("span",{className:Ws.dot,"aria-hidden":"true"}),l]}));hi.displayName="StatusTag";const Yb="_root_1m8t5_6",Qb="_underline_1m8t5_15",Kb="_background_1m8t5_21",Zb="_underlineIndicator_1m8t5_26",Xb="_md_1m8t5_43",Jb="_lg_1m8t5_44",ek="_tab_1m8t5_42",tk="_tabSelected_1m8t5_77",nk="_tabIcon_1m8t5_99",rk="_tabLabel_1m8t5_111",ok="_tabBadge_1m8t5_116",ak="_tabLabelEditable_1m8t5_123",ik="_tabLabelInput_1m8t5_128",sk="_addTab_1m8t5_147",lk="_addTabIcon_1m8t5_160",Yt={root:Yb,underline:Qb,background:Kb,underlineIndicator:Zb,md:Xb,lg:Jb,tab:ek,tabSelected:tk,tabIcon:nk,tabLabel:rk,tabBadge:ok,tabLabelEditable:ak,tabLabelInput:ik,addTab:sk,addTabIcon:lk},ug=g.createContext(null);function hg(e){const a=g.useContext(ug);if(!a)throw new Error(`<${e}> must be rendered inside <Tabs>`);return a}const pg=g.forwardRef(({value:e,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:v,children:y,...x},w)=>{const{value:k,onChange:T,disabled:_,name:N}=hg("Tabs.Tab"),L=k===e,A=_||!!s,R=typeof y=="string"?y:"",[C,O]=g.useState(d&&l),[j,M]=g.useState(R),S=g.useRef(null);g.useEffect(()=>{if(C){const q=S.current;q&&(q.focus(),q.select())}},[C]),g.useEffect(()=>{d&&l&&!C&&(M(typeof y=="string"?y:""),O(!0))},[d,l]);const I=()=>{const q=j.trim();q&&q!==R&&(h==null||h(q)),O(!1)},P=()=>{M(R),O(!1)},W=q=>{!l||A||(q.stopPropagation(),M(R),O(!0))},Y=q=>{q.key==="Enter"?(q.preventDefault(),I()):q.key==="Escape"&&(q.preventDefault(),P())};return r.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":L,name:N,disabled:A,className:oe(Yt.tab,L&&Yt.tabSelected,v),onClick:q=>{C||(A||T(e),f==null||f(q))},...x,children:[a&&r.jsx("span",{className:oe(Yt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),C?r.jsx("input",{ref:S,type:"text",value:j,onChange:q=>M(q.target.value),onKeyDown:Y,onBlur:I,onClick:q=>q.stopPropagation(),className:Yt.tabLabelInput,"aria-label":"Tab name",size:Math.max(j.length,1)}):y!==void 0&&r.jsx("span",{className:oe(Yt.tabLabel,l&&Yt.tabLabelEditable),onDoubleClick:W,children:y}),i&&!C&&r.jsx("span",{className:Yt.tabBadge,children:i})]})});pg.displayName="Tabs.Tab";const ck=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),fg=g.forwardRef(({className:e,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=hg("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:oe(Yt.tab,Yt.addTab,e),onClick:a,...s,children:r.jsx("span",{className:oe(Yt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(ck,{})})})});fg.displayName="Tabs.AddTab";const mg=g.forwardRef(({variant:e="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(s),k=i!==void 0,T=k?i:x,_=g.useId(),N=g.useRef(null);g.useLayoutEffect(()=>{const A=N.current;if(!A||e!=="underline")return;const R=A.querySelector('[aria-selected="true"]');R&&(A.style.setProperty("--tab-indicator-x",`${R.offsetLeft}px`),A.style.setProperty("--tab-indicator-w",`${R.offsetWidth}px`))},[T,e]);const L=A=>{k||w(A),l==null||l(A)};return r.jsx(ug.Provider,{value:{value:T,onChange:L,disabled:d,variant:e,size:a,name:_},children:r.jsxs("div",{ref:A=>{N.current=A,typeof y=="function"?y(A):y&&(y.current=A)},role:"tablist",className:oe(Yt.root,Yt[e],Yt[a],h),...v,children:[e==="underline"&&r.jsx("span",{className:Yt.underlineIndicator,"aria-hidden":"true"}),f]})})});mg.displayName="Tabs";Object.assign(mg,{Tab:pg,AddTab:fg});const dk="_selectedBorder_1ypeg_7",uk="_selectedFill_1ypeg_12",gf={selectedBorder:dk,selectedFill:uk},hk=g.forwardRef(({selected:e=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const v=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?gf.selectedFill:gf.selectedBorder:void 0;return r.jsx(Re,{ref:f,variant:a,"aria-pressed":e,className:oe(y,d),onClick:v,...h})});hk.displayName="ToggleButton";const pk="_root_mcb75_6",fk="_disabled_mcb75_13",mk="_sm_mcb75_20",gk="_md_mcb75_31",vk="_lg_mcb75_42",xk="_track_mcb75_54",yk="_trackChecked_mcb75_90",wk="_thumb_mcb75_100",bk="_labelWrap_mcb75_117",kk="_label_mcb75_117",_k="_description_mcb75_139",rr={root:pk,disabled:fk,sm:mk,md:gk,lg:vk,track:xk,trackChecked:yk,thumb:wk,labelWrap:bk,label:kk,description:_k},Ck=g.forwardRef(({checked:e,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:v,value:y,className:x},w)=>{const k=g.useId(),T=f??k,_=`${T}-label`,N=e!==void 0,[L,A]=g.useState(a),R=N?e:L,C=()=>{if(s)return;const j=!R;N||A(j),i==null||i(j)},O=j=>{(j.key===" "||j.key==="Enter")&&(j.preventDefault(),C())};return r.jsxs("div",{className:oe(rr.root,rr[l],s&&rr.disabled,x),children:[r.jsx("button",{ref:w,type:"button",role:"switch",id:T,"aria-checked":R,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:y,className:oe(rr.track,R&&rr.trackChecked),"data-checked":R||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:O,children:r.jsx("span",{className:rr.thumb})}),(d||h)&&r.jsxs("div",{className:rr.labelWrap,children:[d&&r.jsx("label",{id:_,htmlFor:T,className:rr.label,children:d}),h&&r.jsx("span",{className:rr.description,children:h})]})]})});Ck.displayName="Switch";const jk="_root_104n4_5",Sk="_disabled_104n4_11",Nk="_sm_104n4_17",Rk="_md_104n4_25",Mk="_lg_104n4_33",Lk="_controlWrap_104n4_41",$k="_input_104n4_50",Tk="_ring_104n4_65",Ak="_ringChecked_104n4_90",Ik="_ringError_104n4_94",Ek="_dot_104n4_104",Pk="_labelWrap_104n4_112",zk="_label_104n4_112",Ok="_error_104n4_130",Dk="_required_104n4_132",Fk="_description_104n4_137",Vt={root:jk,disabled:Sk,sm:Nk,md:Rk,lg:Mk,controlWrap:Lk,input:$k,ring:Tk,ringChecked:Ak,ringError:Ik,dot:Ek,labelWrap:Pk,label:zk,error:Ok,required:Dk,description:Fk},Bk=g.forwardRef(({value:e,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:v,name:y,required:x,className:w},k)=>{const T=g.useId(),_=v??T;return r.jsxs("div",{className:oe(Vt.root,Vt[d],s&&Vt.disabled,l&&Vt.error,w),children:[r.jsxs("div",{className:Vt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:_,name:y,value:e,checked:a,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:Vt.input}),r.jsx("span",{className:oe(Vt.ring,a&&Vt.ringChecked,l&&Vt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Vt.dot})})]}),(h||f)&&r.jsxs("div",{className:Vt.labelWrap,children:[h&&r.jsxs("label",{htmlFor:_,className:Vt.label,children:[h,x&&r.jsx("span",{className:Vt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Vt.description,children:f})]})]})});Bk.displayName="Radio";const Wk="_table_1ad04_8",Hk="_sm_1ad04_16",Uk="_row_1ad04_30",qk="_head_1ad04_47",Vk="_headLabel_1ad04_82",Gk="_sortBtn_1ad04_96",Yk="_sortIcon_1ad04_119",Qk="_cell_1ad04_142",Kk="_cellText_1ad04_175",Zk="_cellStack_1ad04_203",Xk="_cellStackPrimary_1ad04_210",Jk="_cellStackSecondary_1ad04_221",e_="_cellActions_1ad04_233",t_="_cellControl_1ad04_240",n_="_addCell_1ad04_251",r_="_addRowCell_1ad04_264",o_="_addRowLabel_1ad04_276",_t={table:Wk,sm:Hk,row:Uk,head:qk,headLabel:Vk,sortBtn:Gk,sortIcon:Yk,cell:Qk,cellText:Kk,cellStack:Zk,cellStackPrimary:Xk,cellStackSecondary:Jk,cellActions:e_,cellControl:t_,addCell:n_,addRowCell:r_,addRowLabel:o_},gg=g.createContext({addColumn:!1,addRow:!1}),vg=()=>g.useContext(gg),a_=g.forwardRef(({size:e="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...v},y)=>{const x=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(gg.Provider,{value:x,children:r.jsx("table",{ref:y,className:oe(_t.table,e==="sm"&&_t.sm,h),"data-interaction":a,...v,children:f})})});a_.displayName="Table";const xg=g.forwardRef(({align:e="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},v)=>{const y=a!==void 0;return r.jsx("th",{ref:v,className:oe(_t.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":y?"none":void 0,...f,children:y?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(In,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:h})})});xg.displayName="TableHead";const i_=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,onAddColumn:l}=vg(),d=s?g.Children.map(e,(h,f)=>{if(!g.isValidElement(h)||f!==0)return h;const v=g.Children.toArray(h.props.children);return g.cloneElement(h,{},[...v,r.jsx(xg,{hoverable:!0,onClick:l,className:_t.addCell,"aria-label":"Add column",children:r.jsx(uo,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return r.jsx("thead",{ref:i,...a,children:d})});i_.displayName="TableHeader";const yg=g.forwardRef(({hoverable:e=!0,selected:a,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:oe(_t.row,i),"data-hoverable":e||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));yg.displayName="TableRow";const ou=g.forwardRef(({align:e="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>r.jsx("td",{ref:f,className:oe(_t.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));ou.displayName="TableCell";const s_=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=vg(),h=s?g.Children.map(e,f=>{if(!g.isValidElement(f))return f;const v=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...v,r.jsx(ou,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):e;return r.jsxs("tbody",{ref:i,...a,children:[h,l&&r.jsx(yg,{hoverable:!1,children:r.jsx(ou,{colSpan:999,onClick:d,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(uo,{size:14,strokeWidth:2}),"Add row"]})})})]})});s_.displayName="TableBody";const l_=g.forwardRef(({variant:e="primary",size:a="md",wrap:i,className:s,children:l,...d},h)=>r.jsx("span",{ref:h,className:oe(_t.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));l_.displayName="CellText";const c_=g.forwardRef(({primary:e,secondary:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:oe(_t.cellStack,i),...s,children:[r.jsx("span",{className:_t.cellStackPrimary,children:e}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));c_.displayName="CellStack";const d_=g.forwardRef(({size:e="sm",...a},i)=>r.jsx(on,{ref:i,size:e,...a}));d_.displayName="CellTag";const u_=g.forwardRef(({size:e="sm",...a},i)=>r.jsx(hi,{ref:i,size:e,...a}));u_.displayName="CellStatusTag";const h_=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:oe(_t.cellActions,e),...i,children:a}));h_.displayName="CellActions";const p_=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:oe(_t.cellControl,e),...i,children:a}));p_.displayName="CellControl";const f_="_root_1afcs_8",m_="_secondary_1afcs_23",g_="_header_1afcs_28",v_="_headerText_1afcs_36",x_="_title_1afcs_43",y_="_subtitle_1afcs_52",w_="_action_1afcs_61",b_="_hero_1afcs_66",k_="_heroValue_1afcs_74",__="_heroCaption_1afcs_83",C_="_heroChange_1afcs_89",j_="_body_1afcs_95",S_="_legend_1afcs_103",tn={root:f_,secondary:m_,header:g_,headerText:v_,title:x_,subtitle:y_,action:w_,hero:b_,heroValue:k_,heroCaption:__,heroChange:C_,body:j_,legend:S_},N_=g.forwardRef(({title:e,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:v,className:y,...x},w)=>r.jsxs("div",{ref:w,className:oe(tn.root,f&&tn.secondary,y),...x,children:[r.jsxs("div",{className:tn.header,children:[r.jsxs("div",{className:tn.headerText,children:[r.jsx("h3",{className:tn.title,children:e}),a&&r.jsx("p",{className:tn.subtitle,children:a})]}),i&&r.jsx("div",{className:tn.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:tn.hero,children:[s!==void 0&&r.jsx("span",{className:tn.heroValue,children:s}),l&&r.jsx("span",{className:tn.heroChange,children:l}),d&&r.jsx("span",{className:tn.heroCaption,children:d})]}),r.jsx("div",{className:tn.body,children:v}),h&&r.jsx("div",{className:tn.legend,children:h})]}));N_.displayName="ChartCard";const R_="_root_je8nq_7",M_="_item_je8nq_17",L_="_swatch_je8nq_23",$_="_label_je8nq_29",T_="_bookend_je8nq_33",Wo={root:R_,item:M_,swatch:L_,label:$_,bookend:T_},wg=g.forwardRef(({items:e,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>r.jsxs("div",{ref:f,className:oe(Wo.root,d),...h,children:[a&&r.jsx("span",{className:Wo.bookend,children:a}),e.map((v,y)=>{const x=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return r.jsxs("span",{className:Wo.item,children:[r.jsx("span",{className:Wo.swatch,style:x,"aria-hidden":"true"}),v.label!==void 0&&r.jsx("span",{className:Wo.label,children:v.label})]},y)}),i&&r.jsx("span",{className:Wo.bookend,children:i})]}));wg.displayName="ChartLegend";const A_="_root_igkx4_5",I_="_svgWrap_igkx4_13",E_="_svg_igkx4_13",P_="_gridLine_igkx4_23",z_="_axisLabel_igkx4_28",O_="_legendWrap_igkx4_43",D_="_legendItem_igkx4_51",F_="_legendDot_igkx4_57",B_="_legendLabel_igkx4_64",W_="_tooltip_igkx4_71",H_="_tooltipLabel_igkx4_85",U_="_tooltipRow_igkx4_95",q_="_tooltipDot_igkx4_101",V_="_tooltipSeries_igkx4_108",G_="_tooltipValue_igkx4_115",Te={root:A_,svgWrap:I_,svg:E_,gridLine:P_,axisLabel:z_,legendWrap:O_,legendItem:D_,legendDot:F_,legendLabel:B_,tooltip:W_,tooltipLabel:H_,tooltipRow:U_,tooltipDot:q_,tooltipSeries:V_,tooltipValue:G_},Y_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Rd(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Ho(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const Q_=g.forwardRef(({series:e,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:v,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:T,className:_,...N},L)=>{var J,F,ie,me;const A=v&&v.length>0?v:Y_,R=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,O]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),j=g.useRef(null),[M,S]=g.useState(540);g.useEffect(()=>{const ue=j.current;if(!ue)return;const fe=new ResizeObserver(ye=>{var We;const $e=(We=ye[0])==null?void 0:We.contentRect.width;$e>0&&S(Math.floor($e))});fe.observe(ue);const _e=Math.floor(ue.getBoundingClientRect().width);return _e>0&&S(_e),()=>fe.disconnect()},[]);const I=44,P=0,W=20,Y=20,q=M,K=s,ee=q-I-P,ae=K-W-Y,re=5,se=e.map((ue,fe)=>ue.color??A[fe%A.length]);let Z=0;i==="stacked"?a.forEach((ue,fe)=>{const _e=e.reduce((ye,$e)=>ye+($e.data[fe]??0),0);_e>Z&&(Z=_e)}):i==="horizontal"?Z=Math.max(...((J=e[0])==null?void 0:J.data)??[0]):e.forEach(ue=>ue.data.forEach(fe=>{fe>Z&&(Z=fe)}));const U=Rd(Z),G=Array.from({length:re+1},(ue,fe)=>U*(fe/re)).reverse(),E=ue=>Y+ae-ue/U*ae,$=ee/a.length,D=3,V=i==="grouped"?Math.max(4,($-D*(e.length+1))/e.length):$,ne=()=>O(ue=>({...ue,visible:!1})),le=g.useCallback(ue=>{const fe=ue.currentTarget.getBoundingClientRect(),_e=ue.clientX-fe.left,ye=Math.floor((_e-I)/$);if(ye<0||ye>=a.length){ne();return}const $e=e.map((We,Ve)=>({color:se[Ve],series:We.label,value:We.data[ye]??0}));O({visible:!0,x:ue.clientX+12,y:ue.clientY-8,label:a[ye],items:$e})},[e,a,$,se,I]);if(i==="gradient"){const ue=((F=e[0])==null?void 0:F.data)??[],fe=((ie=e[0])==null?void 0:ie.label)??"",_e=44,ye=0,$e=20,We=20,Ve=Math.max(q-_e-ye,1),Ge=K-$e-We,Fe=Math.max(0,...ue),Qe=Fe>0?Rd(Fe):10,Ye=5,At=Array.from({length:Ye+1},(Me,tt)=>Qe*tt/Ye),He=Me=>$e+Ge-Me/Qe*Ge,It=Ve/Math.max(1,ue.length),Ct=Me=>_e+It*Me,En=Me=>_e+It*(Me+1),Pn=Me=>_e+It*(Me+.5),Ir=ue.length===0?"":ue.map((Me,tt)=>{const dt=He(Me);return`M ${Ct(tt)} ${dt} L ${En(tt)} ${dt}`}).join(" "),ha=[];ue.forEach((Me,tt)=>{if(Me<=0)return;const dt=He(Me);ha.push({x:Ct(tt),y:dt,width:Math.max(En(tt)-Ct(tt),0),height:$e+Ge-dt})});const Er=Math.max(1,Math.ceil(45/It)),Al=a.length-1,Ri=w??(Me=>`${Ho(Me)}${h}`);return r.jsxs("div",{ref:L,className:oe(Te.root,_),...N,children:[r.jsx("div",{ref:j,className:Te.svgWrap,children:r.jsxs("svg",{width:q,height:K,viewBox:`0 0 ${q} ${K}`,className:Te.svg,onMouseLeave:ne,onMouseMove:Me=>{const tt=Me.currentTarget.getBoundingClientRect(),dt=Me.clientX-tt.left,Et=Math.floor((dt-_e)/It);if(Et<0||Et>=ue.length){ne();return}O({visible:!0,x:Me.clientX+12,y:Me.clientY-8,label:a[Et]??"",items:[{color:x,series:fe,value:ue[Et]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${R}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y}),r.jsx("stop",{offset:"100%",stopColor:x})]}),r.jsxs("linearGradient",{id:`${R}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),At.map((Me,tt)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:q-ye,y1:He(Me),y2:He(Me),className:Te.gridLine}),r.jsxs("text",{x:0,y:He(Me)-6,className:Te.axisLabel,textAnchor:"start",children:[Ho(Me),h]})]},`t-${tt}`)),ha.map((Me,tt)=>r.jsx("rect",{x:Me.x,y:Me.y,width:Me.width,height:Me.height,fill:`url(#${R}-fill)`},`b-${tt}`)),Ir&&r.jsx("path",{d:Ir,fill:"none",stroke:`url(#${R}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var Pr;const Me=(Pr=j.current)==null?void 0:Pr.getBoundingClientRect();if(!Me)return null;const tt=C.x-12-Me.left,dt=Math.floor((tt-_e)/It);if(dt<0||dt>=ue.length)return null;const Et=ue[dt]??0;return Et<=0?null:r.jsx("circle",{cx:Pn(dt),cy:He(Et),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Me,tt)=>{const dt=tt===0,Et=tt===Al;if(!(dt||Et)&&tt%Er!==0)return null;const pa=dt?_e:Et?q-ye:Pn(tt),fa=dt?"start":Et?"end":"middle";return r.jsx("text",{x:pa,y:K-We+18,className:Te.axisLabel,textAnchor:fa,children:Me},`xl-${tt}`)})]})}),C.visible&&C.items.length>0&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(Me=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:Me.color}}),r.jsx("span",{className:Te.tooltipSeries,children:Me.series}),r.jsx("span",{className:Te.tooltipValue,children:Ri(Me.value)})]},Me.series))]})]})}if(i==="horizontal"){const ue=((me=e[0])==null?void 0:me.data)??[],fe=Rd(Math.max(...ue,1)),_e=28,ye=10,$e=120,Ve=q-$e-44,Ge=a.length*(_e+ye)+ye;return r.jsxs("div",{ref:L,className:oe(Te.root,_),...N,children:[r.jsx("div",{ref:j,className:Te.svgWrap,children:r.jsx("svg",{width:q,height:Ge,viewBox:`0 0 ${q} ${Ge}`,className:Te.svg,onMouseLeave:ne,onMouseMove:Fe=>{var He;const Qe=Fe.currentTarget.getBoundingClientRect(),Ye=Fe.clientY-Qe.top,At=Math.floor(Ye/(_e+ye));if(At<0||At>=a.length){ne();return}O({visible:!0,x:Fe.clientX+12,y:Fe.clientY-8,label:a[At],items:[{color:se[0],series:((He=e[0])==null?void 0:He.label)??"",value:ue[At]??0}]})},children:a.map((Fe,Qe)=>{const Ye=ye+Qe*(_e+ye),At=ue[Qe]??0,He=At/fe*Ve;return r.jsxs("g",{children:[r.jsx("text",{x:$e-8,y:Ye+_e/2+4,className:Te.axisLabel,textAnchor:"end",children:Fe}),r.jsx("rect",{x:$e,y:Ye,width:He,height:_e,rx:f,fill:se[0]}),r.jsxs("text",{x:$e+He+6,y:Ye+_e/2+4,className:Te.axisLabel,textAnchor:"start",children:[Ho(At),h]})]},Qe)})})}),C.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(Fe=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:Fe.color}}),r.jsx("span",{className:Te.tooltipSeries,children:Fe.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Ho(Fe.value),h]})]},Fe.series))]})]})}return r.jsxs("div",{ref:L,className:oe(Te.root,_),...N,children:[r.jsx("div",{ref:j,className:Te.svgWrap,children:r.jsxs("svg",{width:q,height:K,viewBox:`0 0 ${q} ${K}`,className:Te.svg,onMouseMove:le,onMouseLeave:ne,children:[r.jsx("defs",{children:se.flatMap((ue,fe)=>[r.jsxs("linearGradient",{id:`${R}-fill-${fe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`soft-${fe}`),r.jsxs("linearGradient",{id:`${R}-fill-strong-${fe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`strong-${fe}`)])}),G.map(ue=>{const fe=E(ue);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:fe,x2:q-P,y2:fe,className:Te.gridLine}),r.jsxs("text",{x:0,y:fe-6,className:Te.axisLabel,textAnchor:"start",children:[Ho(ue),h]})]},ue)}),a.map((ue,fe)=>{const _e=I+fe*$;if(i==="stacked"){let We=0;const Ve=e.map((He,It)=>{const Ct=He.data[fe]??0,En=Ct/U*ae,Pn=E(We+Ct);return We+=Ct,{si:It,value:Ct,barH:En,y:Pn}}),Ge=_e+($-V)/2,Fe=Ve.filter(He=>He.value>0),Qe=Fe.length>0?Fe[0].si:-1,Ye=Fe.length>0?Fe[Fe.length-1]:null,At=T??(Ye?se[Ye.si]:"transparent");return r.jsxs("g",{children:[Ve.map(({si:He,value:It,barH:Ct,y:En})=>{if(It<=0)return null;if(k==="mono-scale"){const Pn=He===Qe;return r.jsx("rect",{x:Ge,y:En,width:V,height:Ct,fill:Pn?`url(#${R}-fill-strong-${He})`:se[He]},`fill-${He}`)}return r.jsx("rect",{x:Ge,y:En,width:V,height:Ct,fill:`url(#${R}-fill-${He})`},`fill-${He}`)}),k==="mono-scale"?Ye&&r.jsx("line",{x1:Ge,x2:Ge+V,y1:Ye.y,y2:Ye.y,stroke:At,strokeWidth:2,strokeLinecap:"butt"}):Ve.map(({si:He,value:It,y:Ct})=>It>0?r.jsx("line",{x1:Ge,x2:Ge+V,y1:Ct,y2:Ct,stroke:se[He],strokeWidth:2,strokeLinecap:"butt"},`cap-${He}`):null)]},fe)}const ye=e.length*V+(e.length-1)*D,$e=_e+($-ye)/2;return r.jsx("g",{children:e.map((We,Ve)=>{const Ge=We.data[fe]??0;if(Ge<=0)return null;const Fe=Ge/U*ae,Qe=$e+Ve*(V+D),Ye=E(Ge);return r.jsxs("g",{children:[r.jsx("rect",{x:Qe,y:Ye,width:V,height:Fe,fill:`url(#${R}-fill-${Ve})`}),r.jsx("line",{x1:Qe,x2:Qe+V,y1:Ye,y2:Ye,stroke:se[Ve],strokeWidth:2,strokeLinecap:"butt"})]},Ve)})},fe)}),(()=>{const fe=Math.max(1,Math.ceil(45/$)),_e=a.length-1;return a.map((ye,$e)=>{const We=$e===0,Ve=$e===_e;if(!(We||Ve)&&$e%fe!==0)return null;const Fe=We?I:Ve?q-P:I+$*($e+.5),Qe=We?"start":Ve?"end":"middle";return r.jsx("text",{x:Fe,y:K-W+18,className:Te.axisLabel,textAnchor:Qe,children:ye},`xl-${$e}`)})})()]})}),d&&e.length>1&&r.jsx("div",{className:Te.legendWrap,children:e.map((ue,fe)=>r.jsxs("div",{className:Te.legendItem,children:[r.jsx("span",{className:Te.legendDot,style:{background:se[fe]}}),r.jsx("span",{className:Te.legendLabel,children:ue.label})]},ue.label))}),C.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:C.label}),C.items.map(ue=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:ue.color}}),r.jsx("span",{className:Te.tooltipSeries,children:ue.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Ho(ue.value),h]})]},ue.series))]})]})});Q_.displayName="BarChart";const K_="_root_1crij_5",Z_="_svgWrap_1crij_13",X_="_svg_1crij_13",J_="_gridLine_1crij_23",eC="_axisLabelY_1crij_35 _axisLabel_1crij_28",tC="_axisLabelX_1crij_39 _axisLabel_1crij_28",nC="_legendWrap_1crij_51",rC="_tooltip_1crij_76",oC="_tooltipLabel_1crij_95",aC="_tooltipRow_1crij_105",iC="_tooltipDot_1crij_111",sC="_tooltipSeries_1crij_118",lC="_tooltipValue_1crij_125",nn={root:K_,svgWrap:Z_,svg:X_,gridLine:J_,axisLabelY:eC,axisLabelX:tC,legendWrap:nC,tooltip:rC,tooltipLabel:oC,tooltipRow:aC,tooltipDot:iC,tooltipSeries:sC,tooltipValue:lC};function cC(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function vf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function dC(e,a=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],v=(h-l)*a;i+=` C ${l+v} ${d}, ${h-v} ${f}, ${h} ${f}`}return i}const uC=g.forwardRef(({series:e,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:v=5,className:y,...x},w)=>{const[k,T]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,N=g.useRef(null),[L,A]=g.useState(540);g.useEffect(()=>{const U=N.current;if(!U)return;const G=new ResizeObserver($=>{var V;const D=(V=$[0])==null?void 0:V.contentRect.width;D>0&&A(Math.floor(D))});G.observe(U);const E=Math.floor(U.getBoundingClientRect().width);return E>0&&A(E),()=>G.disconnect()},[]);const R=44,C=20,O=20,j=L,M=i,S=j-R,I=M-C-O,P=`url(#${_}-stroke)`,W=U=>U.color??P,Y=e.flatMap(U=>U.data),q=cC(Math.max(...Y,1)),K=Array.from({length:v+1},(U,G)=>q*(G/v)).reverse(),ee=U=>O+I-U/q*I,ae=U=>a.length>1?R+U/(a.length-1)*S:R+S/2,re=U=>U.map((G,E)=>[ae(E),ee(G)]),se=()=>T(U=>({...U,visible:!1})),Z=g.useCallback(U=>{const G=U.currentTarget.getBoundingClientRect(),$=U.clientX-G.left-R,D=S/Math.max(a.length-1,1),V=Math.round($/D),ne=Math.max(0,Math.min(V,a.length-1)),le=e.map(J=>({color:J.color??h,series:J.label,value:J.data[ne]??0}));T({visible:!0,index:ne,x:U.clientX+12,y:U.clientY-8,label:a[ne],items:le})},[e,a,h,S,R]);return r.jsxs("div",{ref:w,className:oe(nn.root,y),...x,children:[r.jsx("div",{ref:N,className:nn.svgWrap,children:r.jsxs("svg",{width:j,height:M,viewBox:`0 0 ${j} ${M}`,className:nn.svg,onMouseMove:Z,onMouseLeave:se,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:h})]}),r.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:h}),r.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${_}-clip`,children:r.jsx("rect",{x:R,y:O,width:S,height:I,rx:6,ry:6})})]}),K.map(U=>{const G=ee(U);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:G,x2:j,y2:G,className:nn.gridLine}),r.jsxs("text",{x:0,y:G-6,className:nn.axisLabelY,textAnchor:"start",children:[vf(U),f]})]},U)}),r.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((U,G)=>{const E=re(U.data),$=dC(E);return r.jsx("path",{d:$,fill:"none",stroke:W(U),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},G)})}),(()=>{const U=k.index>=0?k.index:0,G=ae(U),E=k.visible&&k.index>=0,$="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:E?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${G}px)`,transition:$},children:[r.jsx("line",{x1:0,x2:0,y1:O,y2:O+I,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((D,V)=>{const ne=D.data[U]??0,le=ee(ne),J=D.color??h;return r.jsx("g",{style:{transform:`translateY(${le}px)`,transition:$},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:J,filter:`url(#${_}-pin-shadow)`})},V)})]})})})(),(()=>{const G=a.length>1?S/(a.length-1):S,E=Math.max(1,Math.ceil(45/Math.max(G,1))),$=a.length-1;return a.map((D,V)=>{const ne=V===0,le=V===$;if(!(ne||le)&&V%E!==0)return null;const F=ne?R:le?j:ae(V),ie=ne?"start":le?"end":"middle";return r.jsx("text",{x:F,y:M-C+14,className:nn.axisLabelX,textAnchor:ie,children:D},D)})})()]})}),l&&e.length>0&&r.jsx("div",{className:nn.legendWrap,children:r.jsx(wg,{variant:"line",items:e.map(U=>({color:U.color??h,label:U.label}))})}),k.visible&&r.jsxs("div",{className:nn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:nn.tooltipLabel,children:k.label}),k.items.map(U=>r.jsxs("div",{className:nn.tooltipRow,children:[r.jsx("span",{className:nn.tooltipDot,style:{background:U.color}}),r.jsx("span",{className:nn.tooltipSeries,children:U.series}),r.jsxs("span",{className:nn.tooltipValue,children:[vf(U.value),f]})]},U.series))]})]})});uC.displayName="LineChart";const hC="_root_3tq2n_5",pC="_chartWrap_3tq2n_14",fC="_svg_3tq2n_18",mC="_centerText_3tq2n_23",gC="_statLegend_3tq2n_31",vC="_statItem_3tq2n_37",xC="_statBar_3tq2n_44",yC="_statText_3tq2n_50",wC="_statValue_3tq2n_56",bC="_statLabel_3tq2n_65",kC="_listLegend_3tq2n_72",_C="_legendItem_3tq2n_79",CC="_legendDot_3tq2n_85",jC="_legendLabel_3tq2n_92",SC="_legendValue_3tq2n_99",NC="_tooltip_3tq2n_107",RC="_tooltipLabel_3tq2n_118",MC="_tooltipValue_3tq2n_124",wt={root:hC,chartWrap:pC,svg:fC,centerText:mC,statLegend:gC,statItem:vC,statBar:xC,statText:yC,statValue:wC,statLabel:bC,listLegend:kC,legendItem:_C,legendDot:CC,legendLabel:jC,legendValue:SC,tooltip:NC,tooltipLabel:RC,tooltipValue:MC},xf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],LC=g.forwardRef(({segments:e,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((j,M)=>j.color??xf[M%xf.length]),T=e.reduce((j,M)=>j+M.value,0),_=i/2,N=i/2,L=i*.15,A=(i-L)/2-2,R=2*Math.PI*A;let C=-R/4;const O=e.map((j,M)=>{const I=(T>0?j.value/T:0)*R,P=`${I} ${R-I}`,W=-C;return C+=I,{dashArray:P,dashOffset:W,color:k[M],...j}});return r.jsxs("div",{ref:y,className:oe(wt.root,f),...v,children:[r.jsx("div",{className:wt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:wt.svg,children:[r.jsx("circle",{cx:_,cy:N,r:A,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:L}),O.map((j,M)=>r.jsx("circle",{cx:_,cy:N,r:A,fill:"none",stroke:j.color,strokeWidth:L,strokeDasharray:j.dashArray,strokeDashoffset:j.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:S=>{const I=T>0?Math.round(j.value/T*100):0;w({visible:!0,x:S.clientX+12,y:S.clientY-8,label:j.label,value:`${I}${d}`})},onMouseLeave:()=>w(S=>({...S,visible:!1}))},M)),h&&a>0&&r.jsx("text",{x:_,y:N+6,textAnchor:"middle",className:wt.centerText,children:h})]})}),s&&l==="stat"&&r.jsx("div",{className:wt.statLegend,children:e.map((j,M)=>{const S=T>0?Math.round(j.value/T*100):0;return r.jsxs("div",{className:wt.statItem,children:[r.jsx("span",{className:wt.statBar,style:{background:k[M]}}),r.jsxs("div",{className:wt.statText,children:[r.jsxs("span",{className:wt.statValue,children:[S,d]}),r.jsx("span",{className:wt.statLabel,children:j.label})]})]},j.label)})}),s&&l==="list"&&r.jsx("div",{className:wt.listLegend,children:e.map((j,M)=>{const S=T>0?Math.round(j.value/T*100):0;return r.jsxs("div",{className:wt.legendItem,children:[r.jsx("span",{className:wt.legendDot,style:{background:k[M]}}),r.jsx("span",{className:wt.legendLabel,children:j.label}),r.jsxs("span",{className:wt.legendValue,children:[S,d]})]},j.label)})}),x.visible&&r.jsxs("div",{className:wt.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("div",{className:wt.tooltipLabel,children:x.label}),r.jsx("div",{className:wt.tooltipValue,children:x.value})]})]})});LC.displayName="DonutChart";const $C="_root_bqpf6_5",TC="_svgWrap_bqpf6_10",AC="_svg_bqpf6_10",IC="_axisLabel_bqpf6_19",EC="_tooltip_bqpf6_25",Uo={root:$C,svgWrap:TC,svg:AC,axisLabel:IC,tooltip:EC};function PC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const zC=g.forwardRef(({cells:e,rows:a,cols:i,colorScale:s=PC,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[T,_]=g.useState(540);g.useEffect(()=>{const M=k.current;if(!M)return;const S=new ResizeObserver(P=>{var Y;const W=(Y=P[0])==null?void 0:Y.contentRect.width;W>0&&_(Math.floor(W))});S.observe(M);const I=Math.floor(M.getBoundingClientRect().width);return I>0&&_(I),()=>S.disconnect()},[]);const N=32,L=16,A=T,R=A-N-d,C=Math.max(4,(R-(i.length-1)*d)/i.length),O=a.length*(L+d)+d+24,j=new Map;return e.forEach(M=>j.set(`${M.row}__${M.col}`,M)),r.jsxs("div",{ref:y,className:oe(Uo.root,f),...v,children:[r.jsx("div",{ref:k,className:Uo.svgWrap,children:r.jsxs("svg",{width:A,height:O,viewBox:`0 0 ${A} ${O}`,className:Uo.svg,onMouseLeave:()=>w(M=>({...M,visible:!1})),children:[i.map((M,S)=>{const I=N+d+S*(C+d)+C/2;return r.jsx("text",{x:I,y:12,className:Uo.axisLabel,textAnchor:"middle",children:M},M)}),a.map((M,S)=>{const I=24+S*(L+d);return r.jsxs("g",{children:[r.jsx("text",{x:N-4,y:I+L/2+4,className:Uo.axisLabel,textAnchor:"end",children:M}),i.map((P,W)=>{const Y=j.get(`${M}__${P}`),q=(Y==null?void 0:Y.value)??0,K=s(q),ee=N+d+W*(C+d);return r.jsx("rect",{x:ee,y:I,width:C,height:L,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const re=(Y==null?void 0:Y.label)??`${M} / ${P}: ${Math.round(q*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:re})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},P)})]},M)})]})}),x.visible&&r.jsx("div",{className:Uo.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});zC.displayName="HeatMap";const OC="_root_18572_6",DC="_gridWrap_18572_14",FC="_grid_18572_14",BC="_cell_18572_27",WC="_legend_18572_33",HC="_legendSquare_18572_43",UC="_tooltip_18572_49",Nr={root:OC,gridWrap:DC,grid:FC,cell:BC,legend:WC,legendSquare:HC,tooltip:UC},qC=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function VC(e,a){if(e<=0)return 0;const i=e/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const GC=g.forwardRef(({days:e,levelColors:a=qC,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:v,ariaLabel:y,className:x,...w},k)=>{const[T,_]=g.useState({visible:!1,x:0,y:0,content:""}),N=f??Math.max(1,...e.map(C=>C.count)),L=[];for(let C=0;C<e.length;C+=7)L.push(e.slice(C,C+7));const A=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${L.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},R=d?"100%":i;return r.jsxs("div",{ref:k,className:oe(Nr.root,x),...w,children:[r.jsx("div",{className:Nr.gridWrap,children:r.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${N} on the busiest day`,className:Nr.grid,style:A,onMouseLeave:()=>_(C=>({...C,visible:!1})),children:L.map((C,O)=>Array.from({length:7},(j,M)=>{const S=C[M];if(!S)return r.jsx("span",{className:Nr.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${O}-${M}`);const I=VC(S.count,N),P=v?v(S,I):`${S.label??S.date}: ${S.count} activation${S.count===1?"":"s"}`;return r.jsx("span",{className:Nr.cell,style:{width:R,height:i,borderRadius:l,background:a[I]},onMouseMove:W=>_({visible:!0,x:W.clientX,y:W.clientY,content:P}),onMouseLeave:()=>_(W=>({...W,visible:!1}))},`${O}-${M}`)}))})}),h&&r.jsxs("div",{className:Nr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>r.jsx("span",{className:Nr.legendSquare,style:{background:a[C],borderRadius:l}},C)),r.jsx("span",{children:"More"})]}),T.visible&&r.jsx("div",{className:Nr.tooltip,style:{left:T.x,top:T.y},children:T.content})]})});GC.displayName="ActivityHeatMap";const YC="_root_14edh_5",QC="_track_14edh_17",KC="_segment_14edh_28",ZC="_legend_14edh_49",XC="_legendRow_14edh_58",JC="_legendDot_14edh_68",ej="_legendLabel_14edh_74",tj="_legendValue_14edh_78",nj="_tooltip_14edh_84",rj="_tooltipLabel_14edh_100",oj="_tooltipValueRow_14edh_105",aj="_tooltipDot_14edh_114",xn={root:YC,track:QC,segment:KC,legend:ZC,legendRow:XC,legendDot:JC,legendLabel:ej,legendValue:tj,tooltip:nj,tooltipLabel:rj,tooltipValueRow:oj,tooltipDot:aj},ij=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],qo={r:140,g:79,b:226},Md={r:68,g:108,b:255};function yf(e){const a=Math.max(0,Math.min(100,e))/100,i=Math.round(qo.r+(Md.r-qo.r)*a),s=Math.round(qo.g+(Md.g-qo.g)*a),l=Math.round(qo.b+(Md.b-qo.b)*a);return`rgb(${i}, ${s}, ${l})`}const sj=g.forwardRef(({segments:e,colors:a=ij,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((L,A)=>L+Math.max(0,A.value),0);let T=0;const _=e.map((L,A)=>{const R=Math.max(0,L.value),C=k>0?R/k*100:0,O=k>0?T/k*100:0;T+=R;const j=k>0?T/k*100:0,M=L.color??a[A%a.length],S=d?!0:L.emphasized??A===0;return{...L,pct:C,startPct:O,endPct:j,color:M,emphasized:S}}),N=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:y,className:oe(xn.root,f),...v,children:[r.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(L=>`${L.label} ${L.value}`).join(", ")}`,className:xn.track,style:N,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:_.map(L=>{const A=i?`linear-gradient(to right, ${yf(L.startPct)}, ${yf(L.endPct)})`:L.color;return r.jsx("span",{className:xn.segment,"data-emphasized":L.emphasized||void 0,"data-ai":i||void 0,style:{width:`${L.pct}%`,background:A,"--ratio-hover-bg":L.color},onMouseMove:R=>w({visible:!0,x:R.clientX,y:R.clientY,label:L.label,value:L.value,color:L.color})},L.label)})}),l&&r.jsx("ul",{className:xn.legend,children:_.map(L=>r.jsxs("li",{className:xn.legendRow,children:[r.jsx("span",{className:xn.legendDot,style:{background:L.color}}),r.jsx("span",{className:xn.legendLabel,children:L.label}),r.jsx("span",{className:xn.legendValue,children:L.value.toLocaleString("en-US")})]},L.label))}),x.visible&&r.jsxs("div",{className:xn.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("span",{className:xn.tooltipLabel,children:x.label}),r.jsxs("span",{className:xn.tooltipValueRow,children:[r.jsx("span",{className:xn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});sj.displayName="RatioBar";const lj="_track_1wmly_6",cj="_fill_1wmly_12",wf={track:lj,fill:cj},dj=g.forwardRef(({value:e,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:v,className:y,style:x,...w},k)=>{const T=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${T}px
    )`,N=Math.max(0,Math.min(a,e)),L=a>0?N/a*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(L)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":N,className:oe(wf.track,y),style:{height:f,background:`${_}, ${s}`,...x},...w,children:r.jsx("div",{className:wf.fill,style:{width:`${L}%`,background:`${_}, ${i}`}})})});dj.displayName="StripedBar";const uj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],hj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function bf(e,a="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}bf(uj),bf(hj);var et="-ms-",ci="-moz-",Be="-webkit-",bg="comm",Cl="rule",Bu="decl",pj="@import",fj="@namespace",kg="@keyframes",mj="@layer",_g=Math.abs,Wu=String.fromCharCode,au=Object.assign;function gj(e,a){return gt(e,0)^45?(((a<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}function Cg(e){return e.trim()}function or(e,a){return(e=a.exec(e))?e[0]:e}function Le(e,a,i){return e.replace(a,i)}function Ys(e,a,i){return e.indexOf(a,i)}function gt(e,a){return e.charCodeAt(a)|0}function lo(e,a,i){return e.slice(a,i)}function Mn(e){return e.length}function jg(e){return e.length}function ai(e,a){return a.push(e),e}function vj(e,a){return e.map(a).join("")}function kf(e,a){return e.filter(function(i){return!or(i,a)})}var jl=1,ta=1,Sg=0,wn=0,pt=0,ca="";function Sl(e,a,i,s,l,d,h,f){return{value:e,root:a,parent:i,type:s,props:l,children:d,line:jl,column:ta,length:h,return:"",siblings:f}}function Rr(e,a){return au(Sl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Vo(e){for(;e.root;)e=Rr(e.root,{children:[e]});ai(e,e.siblings)}function xj(){return pt}function yj(){return pt=wn>0?gt(ca,--wn):0,ta--,pt===10&&(ta=1,jl--),pt}function Tn(){return pt=wn<Sg?gt(ca,wn++):0,ta++,pt===10&&(ta=1,jl++),pt}function Lr(){return gt(ca,wn)}function Qs(){return wn}function Nl(e,a){return lo(ca,e,a)}function pi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wj(e){return jl=ta=1,Sg=Mn(ca=e),wn=0,[]}function bj(e){return ca="",e}function Ld(e){return Cg(Nl(wn-1,iu(e===91?e+2:e===40?e+1:e)))}function kj(e){for(;(pt=Lr())&&pt<33;)Tn();return pi(e)>2||pi(pt)>3?"":" "}function _j(e,a){for(;--a&&Tn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return Nl(e,Qs()+(a<6&&Lr()==32&&Tn()==32))}function iu(e){for(;Tn();)switch(pt){case e:return wn;case 34:case 39:e!==34&&e!==39&&iu(pt);break;case 40:e===41&&iu(e);break;case 92:Tn();break}return wn}function Cj(e,a){for(;Tn()&&e+pt!==57;)if(e+pt===84&&Lr()===47)break;return"/*"+Nl(a,wn-1)+"*"+Wu(e===47?e:Tn())}function jj(e){for(;!pi(Lr());)Tn();return Nl(e,wn)}function Sj(e){return bj(Ks("",null,null,null,[""],e=wj(e),0,[0],e))}function Ks(e,a,i,s,l,d,h,f,v){for(var y=0,x=0,w=h,k=0,T=0,_=0,N=1,L=1,A=1,R=0,C="",O=l,j=d,M=s,S=C;L;)switch(_=R,R=Tn()){case 40:if(_!=108&&gt(S,w-1)==58){Ys(S+=Le(Ld(R),"&","&\f"),"&\f",_g(y?f[y-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:S+=Ld(R);break;case 9:case 10:case 13:case 32:S+=kj(_);break;case 92:S+=_j(Qs()-1,7);continue;case 47:switch(Lr()){case 42:case 47:ai(Nj(Cj(Tn(),Qs()),a,i,v),v),(pi(_||1)==5||pi(Lr()||1)==5)&&Mn(S)&&lo(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*N:f[y++]=Mn(S)*A;case 125*N:case 59:case 0:switch(R){case 0:case 125:L=0;case 59+x:A==-1&&(S=Le(S,/\f/g,"")),T>0&&(Mn(S)-w||N===0&&_===47)&&ai(T>32?Cf(S+";",s,i,w-1,v):Cf(Le(S," ","")+";",s,i,w-2,v),v);break;case 59:S+=";";default:if(ai(M=_f(S,a,i,y,x,l,f,C,O=[],j=[],w,d),d),R===123)if(x===0)Ks(S,a,M,M,O,d,w,f,j);else{switch(k){case 99:if(gt(S,3)===110)break;case 108:if(gt(S,2)===97)break;default:x=0;case 100:case 109:case 115:}x?Ks(e,M,M,s&&ai(_f(e,M,M,0,0,l,f,C,l,O=[],w,j),j),l,j,w,f,s?O:j):Ks(S,M,M,M,[""],j,0,f,j)}}y=x=T=0,N=A=1,C=S="",w=h;break;case 58:w=1+Mn(S),T=_;default:if(N<1){if(R==123)--N;else if(R==125&&N++==0&&yj()==125)continue}switch(S+=Wu(R),R*N){case 38:A=x>0?1:(S+="\f",-1);break;case 44:f[y++]=(Mn(S)-1)*A,A=1;break;case 64:Lr()===45&&(S+=Ld(Tn())),k=Lr(),x=w=Mn(C=S+=jj(Qs())),R++;break;case 45:_===45&&Mn(S)==2&&(N=0)}}return d}function _f(e,a,i,s,l,d,h,f,v,y,x,w){for(var k=l-1,T=l===0?d:[""],_=jg(T),N=0,L=0,A=0;N<s;++N)for(var R=0,C=lo(e,k+1,k=_g(L=h[N])),O=e;R<_;++R)(O=Cg(L>0?T[R]+" "+C:Le(C,/&\f/g,T[R])))&&(v[A++]=O);return Sl(e,a,i,l===0?Cl:f,v,y,x,w)}function Nj(e,a,i,s){return Sl(e,a,i,bg,Wu(xj()),lo(e,2,-2),0,s)}function Cf(e,a,i,s,l){return Sl(e,a,i,Bu,lo(e,0,s),lo(e,s+1,-1),s,l)}function Ng(e,a,i){switch(gj(e,a)){case 5103:return Be+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Be+e+e;case 4855:return Be+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+e+ci+e+et+e+e;case 5936:switch(gt(e,a+11)){case 114:return Be+e+et+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Be+e+et+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Be+e+et+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Be+e+et+e+e;case 6165:return Be+e+et+"flex-"+e+e;case 5187:return Be+e+Le(e,/(\w+).+(:[^]+)/,Be+"box-$1$2"+et+"flex-$1$2")+e;case 5443:return Be+e+et+"flex-item-"+Le(e,/flex-|-self/g,"")+(or(e,/flex-|baseline/)?"":et+"grid-row-"+Le(e,/flex-|-self/g,""))+e;case 4675:return Be+e+et+"flex-line-pack"+Le(e,/align-content|flex-|-self/g,"")+e;case 5548:return Be+e+et+Le(e,"shrink","negative")+e;case 5292:return Be+e+et+Le(e,"basis","preferred-size")+e;case 6060:return Be+"box-"+Le(e,"-grow","")+Be+e+et+Le(e,"grow","positive")+e;case 4554:return Be+Le(e,/([^-])(transform)/g,"$1"+Be+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+et+"flex-pack:$3"),/space-between/,"justify")+Be+e+e;case 4200:if(!or(e,/flex-|baseline/))return et+"grid-column-align"+lo(e,a)+e;break;case 2592:case 3360:return et+Le(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,or(s.props,/grid-\w+-end/)})?~Ys(e+(i=i[a].value),"span",0)?e:et+Le(e,"-start","")+e+et+"grid-row-span:"+(~Ys(i,"span",0)?or(i,/\d+/):+or(i,/\d+/)-+or(e,/\d+/))+";":et+Le(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return or(s.props,/grid-\w+-start/)})?e:et+Le(Le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Be+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(e)-1-a>6)switch(gt(e,a+1)){case 109:if(gt(e,a+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+ci+(gt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~Ys(e,"stretch",0)?Ng(Le(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,v,y){return et+l+":"+d+y+(h?et+l+"-span:"+(f?v:+v-+d)+y:"")+e});case 4949:if(gt(e,a+6)===121)return Le(e,":",":"+Be)+e;break;case 6444:switch(gt(e,gt(e,14)===45?18:11)){case 120:return Le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(gt(e,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+et+"$2box$3")+e;case 100:return Le(e,":",":"+et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(e,"scroll-","scroll-snap-")+e}return e}function sl(e,a){for(var i="",s=0;s<e.length;s++)i+=a(e[s],s,e,a)||"";return i}function Rj(e,a,i,s){switch(e.type){case mj:if(e.children.length)break;case pj:case fj:case Bu:return e.return=e.return||e.value;case bg:return"";case kg:return e.return=e.value+"{"+sl(e.children,s)+"}";case Cl:if(!Mn(e.value=e.props.join(",")))return""}return Mn(i=sl(e.children,s))?e.return=e.value+"{"+i+"}":""}function Mj(e){var a=jg(e);return function(i,s,l,d){for(var h="",f=0;f<a;f++)h+=e[f](i,s,l,d)||"";return h}}function Lj(e){return function(a){a.root||(a=a.return)&&e(a)}}function $j(e,a,i,s){if(e.length>-1&&!e.return)switch(e.type){case Bu:e.return=Ng(e.value,e.length,i);return;case kg:return sl([Rr(e,{value:Le(e.value,"@","@"+Be)})],s);case Cl:if(e.length)return vj(i=e.props,function(l){switch(or(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vo(Rr(e,{props:[Le(l,/:(read-\w+)/,":"+ci+"$1")]})),Vo(Rr(e,{props:[l]})),au(e,{props:kf(i,s)});break;case"::placeholder":Vo(Rr(e,{props:[Le(l,/:(plac\w+)/,":"+Be+"input-$1")]})),Vo(Rr(e,{props:[Le(l,/:(plac\w+)/,":"+ci+"$1")]})),Vo(Rr(e,{props:[Le(l,/:(plac\w+)/,et+"input-$1")]})),Vo(Rr(e,{props:[l]})),au(e,{props:kf(i,s)});break}return""})}}var Ko={},$d,Td;const na=typeof process<"u"&&Ko!==void 0&&(Ko.REACT_APP_SC_ATTR||Ko.SC_ATTR)||"data-styled",Rg="active",Mg="data-styled-version",Rl="6.4.2",Hu=`/*!sc*/
`,di=typeof window<"u"&&typeof document<"u";function jf(e){if(typeof process<"u"&&Ko!==void 0){const a=Ko[e];if(a!==void 0&&a!=="")return a!=="false"}}const Tj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Td=($d=jf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&$d!==void 0?$d:jf("SC_DISABLE_SPEEDY"))!==null&&Td!==void 0?Td:typeof process<"u"&&Ko!==void 0&&!1),Lg="sc-keyframes-",Aj={};function _i(e,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let Zs=new Map,ll=new Map,Xs=1;const ii=e=>{if(Zs.has(e))return Zs.get(e);for(;ll.has(Xs);)Xs++;const a=Xs++;return Zs.set(e,a),ll.set(a,e),a},Ij=e=>ll.get(e),Ej=(e,a)=>{Xs=a+1,Zs.set(e,a),ll.set(a,e)},Uu=Object.freeze([]),ra=Object.freeze({});function $g(e,a,i=ra){return e.theme!==i.theme&&e.theme||a||i.theme}const Pj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zj=/(^-|-$)/g;function Tg(e){return e.replace(Pj,"-").replace(zj,"")}const Oj=/(a)(d)/gi,Sf=e=>String.fromCharCode(e+(e>25?39:97));function qu(e){let a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=Sf(a%52)+i;return(Sf(a%52)+i).replace(Oj,"$1-$2")}const su=5381,oo=(e,a)=>{let i=a.length;for(;i;)e=33*e^a.charCodeAt(--i);return e},Ag=e=>oo(su,e);function Vu(e){return qu(Ag(e)>>>0)}function Dj(e){return e.displayName||e.name||"Component"}function lu(e){return typeof e=="string"&&!0}function Fj(e){return lu(e)?`styled.${e}`:`Styled(${Dj(e)})`}const Ig=Symbol.for("react.memo"),Bj=Symbol.for("react.forward_ref"),Wj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Hj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uj={[Bj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ig]:Eg};function Nf(e){return("type"in(a=e)&&a.type.$$typeof)===Ig?Eg:"$$typeof"in e?Uj[e.$$typeof]:Wj;var a}const qj=Object.defineProperty,Vj=Object.getOwnPropertyNames,Gj=Object.getOwnPropertySymbols,Yj=Object.getOwnPropertyDescriptor,Qj=Object.getPrototypeOf,Kj=Object.prototype;function Pg(e,a,i){if(typeof a!="string"){const s=Qj(a);s&&s!==Kj&&Pg(e,s,i);const l=Vj(a).concat(Gj(a)),d=Nf(e),h=Nf(a);for(let f=0;f<l.length;++f){const v=l[f];if(!(v in Hj||i&&i[v]||h&&v in h||d&&v in d)){const y=Yj(a,v);try{qj(e,v,y)}catch{}}}}return e}function Ci(e){return typeof e=="function"}const Zj=Symbol.for("react.forward_ref");function Gu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Zj&&"styledComponentId"in e}function si(e,a){return e&&a?e+" "+a:e||a||""}function cl(e,a){return e.join("")}function fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cu(e,a,i=!1){if(!i&&!fi(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)e[s]=cu(e[s],a[s]);else if(fi(a))for(const s in a)e[s]=cu(e[s],a[s]);return e}function Yu(e,a){Object.defineProperty(e,"toString",{value:a})}const Xj=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let a=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)a-=this.groupSizes[i];return this._cGroup=e,this._cIndex=a,a}insertRules(e,a){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw _i(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const a=this.groupSizes[e],i=this.indexOfGroup(e),s=i+a;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>e&&(this._cIndex-=a)}}getGroup(e){let a="";if(e>=this.length||this.groupSizes[e]===0)return a;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+Hu;return a}},Jj=`style[${na}][${Mg}="${Rl}"]`,eS=new RegExp(`^${na}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Rf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,du=e=>{if(!e)return document;if(Rf(e))return e;if("getRootNode"in e){const a=e.getRootNode();if(Rf(a))return a}return document},tS=(e,a,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(a,l)},nS=(e,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(Hu),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const v=f.match(eS);if(v){const y=0|parseInt(v[1],10),x=v[2];y!==0&&(Ej(x,y),tS(e,x,v[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(f)}},Ad=e=>{const a=du(e.options.target).querySelectorAll(Jj);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(na)!==Rg&&(nS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let Ja=!1;function rS(){if(Ja!==!1)return Ja;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ja=e.nonce||e.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Ja=a.getAttribute("content")||void 0}return Ja=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const zg=(e,a)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(v=>{const y=Array.from(v.querySelectorAll(`style[${na}]`));return y[y.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(na,Rg),l.setAttribute(Mg,Rl);const f=a||rS();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},oS=class{constructor(e,a){this.element=zg(e,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw _i(17)})(this.element),this.length=0}insertRule(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""}},aS=class{constructor(e,a){this.element=zg(e,a),this.nodes=this.element.childNodes,this.length=0}insertRule(e,a){if(e<=this.length&&e>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Mf=di;const iS={isServer:!di,useCSSOMInjection:!Tj};class ji{static registerId(a){return ii(a)}constructor(a=ra,i={},s){this.options=Object.assign(Object.assign({},iS),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&di&&Mf&&(Mf=!1,Ad(this)),Yu(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let v=0;v<h;v++){const y=Ij(v);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const w=d.getGroup(v);if(w.length===0)continue;const k=na+".g"+v+'[id="'+y+'"]';let T="";for(const _ of x)_.length>0&&(T+=_+",");f+=w+k+'{content:"'+T+'"}'+Hu}return f})(this))}rehydrate(){!this.server&&di&&Ad(this)}reconstructWithOptions(a,i=!0){const s=new ji(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&di&&a.target!==this.options.target&&du(this.options.target)!==du(a.target)&&Ad(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new oS(s,l):new aS(s,l))(this.options),new Xj(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){ii(a),a.startsWith(Lg)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(ii(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(ii(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Og=new WeakSet,sS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function lS(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in sS||e.startsWith("--")?String(a).trim():a+"px"}const eo=47;function Lf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let a="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return a.startsWith("ms-")?"-"+a:a}const Dg=Symbol.for("sc-keyframes");function cS(e){return typeof e=="object"&&e!==null&&Dg in e}function Fg(e){return Ci(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Bg=e=>e==null||e===!1||e==="",dS=Symbol.for("react.client.reference");function $f(e){return e.$$typeof===dS}function Wg(e,a){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!Bg(s)&&(Array.isArray(s)&&Og.has(s)||Ci(s)?a.push(Lf(i)+":",s,";"):fi(s)?(a.push(i+" {"),Wg(s,a),a.push("}")):a.push(Lf(i)+": "+lS(i,s)+";"))}}function Ar(e,a,i,s,l=[]){if(Bg(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if($f(e))return l;if(Fg(e)&&a){const h=e(a);return Ar(h,a,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)Ar(e[h],a,i,s,l);return l}return Gu(e)?(l.push(`.${e.styledComponentId}`),l):cS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):$f(e)?l:fi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Wg(e,l),l):(l.push(e.toString()),l)}const uS=Ag(Rl);class hS{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=oo(uS,i),this.baseStyle=s,ji.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(Fg(f)){const v=f(a);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=cl(Ar(v,a,i,s)))}else d+=cl(Ar(f,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=qu(oo(oo(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const v=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,v)}l=si(l,f)}}return l}}const pS=/&/g;function Hg(e,a){let i=0;for(;--a>=0&&e.charCodeAt(a)===92;)i++;return!(1&~i)}function Id(e){const a=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let v=0;v<a;v++){const y=e.charCodeAt(v);if(d!==0||h||y!==eo||e.charCodeAt(v+1)!==42)if(h)y===42&&e.charCodeAt(v+1)===eo&&(h=!1,v++);else if(y!==34&&y!==39||Hg(e,v)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){f=!0;let x=v+1;for(;x<a;){const w=e.charCodeAt(x);if(w===59||w===10)break;x++}x<a&&e.charCodeAt(x)===59&&x++,l=0,v=x-1,s=x;continue}l===0&&(i+=e.substring(s,v+1),s=v+1)}else y===59&&l===0&&(i+=e.substring(s,v+1),s=v+1)}else d===0?d=y:d===y&&(d=0);else h=!0,v++}return f||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=e.substring(s)),i):e}function Ug(e,a){const i=a+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let v=0;v<h.length;v++)f[v]=i+h[v];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&Ug(d.children,a)}return e}function fS({options:e=ra,plugins:a=Uu}=ra){let i,s,l;const d=(k,T,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=a.slice();h.push(k=>{k.type===Cl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(pS,s).replace(l,d))}),e.prefix&&h.push($j),h.push(Rj);let f=[];const v=Mj(h.concat(Lj(k=>f.push(k)))),y=(k,T="",_="",N="&")=>{i=N,s=T,l=void 0;const L=(function(R){const C=R.indexOf("//")!==-1,O=R.indexOf("}")!==-1;if(!C&&!O)return R;if(!C)return Id(R);const j=R.length;let M="",S=0,I=0,P=0,W=0,Y=0,q=!1;for(;I<j;){const K=R.charCodeAt(I);if(K!==34&&K!==39||Hg(R,I))if(P===0)if(K===eo&&I+1<j&&R.charCodeAt(I+1)===42){for(I+=2;I+1<j&&(R.charCodeAt(I)!==42||R.charCodeAt(I+1)!==eo);)I++;I+=2}else if(K!==40)if(K!==41)if(W>0)I++;else if(K===42&&I+1<j&&R.charCodeAt(I+1)===eo)M+=R.substring(S,I),I+=2,S=I,q=!0;else if(K===eo&&I+1<j&&R.charCodeAt(I+1)===eo){for(M+=R.substring(S,I);I<j&&R.charCodeAt(I)!==10;)I++;S=I,q=!0}else K===123?Y++:K===125&&Y--,I++;else W>0&&W--,I++;else W++,I++;else I++;else P===0?P=K:P===K&&(P=0),I++}return q?(S<j&&(M+=R.substring(S)),Y===0?M:Id(M)):Y===0?R:Id(R)})(k);let A=Sj(_||T?_+" "+T+" { "+L+" }":L);return e.namespace&&(A=Ug(A,e.namespace)),f=[],sl(A,v),f},x=e;let w=su;for(let k=0;k<a.length;k++)a[k].name||_i(15),w=oo(w,a[k].name);return x!=null&&x.namespace&&(w=oo(w,x.namespace)),x!=null&&x.prefix&&(w=oo(w,"p")),y.hash=w!==su?w.toString():"",y}const mS=new ji,uu=fS(),qg=Qt.createContext({shouldForwardProp:void 0,styleSheet:mS,stylis:uu,stylisPlugins:void 0});qg.Consumer;function Vg(){return Qt.useContext(qg)}const Qu=Qt.createContext(void 0);Qu.Consumer;const Tf=Object.prototype.hasOwnProperty,Ed={};function gS(e,a){const i=typeof e!="string"?"sc":Tg(e);Ed[i]=(Ed[i]||0)+1;const s=i+"-"+Vu(Rl+i+Ed[i]);return a?a+"-"+s:s}function vS(e,a,i){const s=Gu(e),l=e,d=!lu(e),{attrs:h=Uu,componentId:f=gS(a.displayName,a.parentComponentId),displayName:v=Fj(e)}=a,y=a.displayName&&a.componentId?Tg(a.displayName)+"-"+a.componentId:a.componentId||f,x=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=a;if(s&&l.shouldForwardProp){const N=l.shouldForwardProp;if(a.shouldForwardProp){const L=a.shouldForwardProp;w=(A,R)=>N(A,R)&&L(A,R)}else w=N}const k=new hS(i,y,s?l.componentStyle:void 0);function T(N,L){return(function(A,R,C){const{attrs:O,componentStyle:j,defaultProps:M,foldedComponentIds:S,styledComponentId:I,target:P}=A,W=Qt.useContext(Qu),Y=Vg(),q=A.shouldForwardProp||Y.shouldForwardProp,K=$g(R,W,M)||ra;let ee,ae;{const U=Qt.useRef(null),G=U.current;if(G!==null&&G[1]===K&&G[2]===Y.styleSheet&&G[3]===Y.stylis&&G[7]===j&&(function(E,$,D){const V=E,ne=$;let le=0;for(const J in ne)if(Tf.call(ne,J)&&(le++,V[J]!==ne[J]))return!1;return le===D})(G[0],R,G[4]))ee=G[5],ae=G[6];else{ee=(function($,D,V){const ne=Object.assign(Object.assign({},D),{className:void 0,theme:V}),le=$.length>1;for(let J=0;J<$.length;J++){const F=$[J],ie=Ci(F)?F(le?Object.assign({},ne):ne):F;for(const me in ie)me==="className"?ne.className=si(ne.className,ie[me]):me==="style"?ne.style=Object.assign(Object.assign({},ne.style),ie[me]):me in D&&D[me]===void 0||(ne[me]=ie[me])}return"className"in D&&typeof D.className=="string"&&(ne.className=si(ne.className,D.className)),ne})(O,R,K),ae=(function($,D,V,ne){return $.generateAndInjectStyles(D,V,ne)})(j,ee,Y.styleSheet,Y.stylis);let E=0;for(const $ in R)Tf.call(R,$)&&E++;U.current=[R,K,Y.styleSheet,Y.stylis,E,ee,ae,j]}}const re=ee.as||P,se=(function(U,G,E,$){const D={};for(const V in U)U[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&U.theme===E||(V==="forwardedAs"?D.as=U.forwardedAs:$&&!$(V,G)||(D[V]=U[V]));return D})(ee,re,K,q);let Z=si(S,I);return ae&&(Z+=" "+ae),ee.className&&(Z+=" "+ee.className),se[lu(re)&&re.includes("-")?"class":"className"]=Z,C&&(se.ref=C),g.createElement(re,se)})(_,N,L)}T.displayName=v;let _=Qt.forwardRef(T);return _.attrs=x,_.componentStyle=k,_.displayName=v,_.shouldForwardProp=w,_.foldedComponentIds=s?si(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=y,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(N){this._foldedDefaultProps=s?(function(L,...A){for(const R of A)cu(L,R,!0);return L})({},l.defaultProps,N):N}}),Yu(_,()=>`.${_.styledComponentId}`),d&&Pg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var xS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Af(e,a){const i=[e[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],e[s+1]);return i}const If=e=>(Og.add(e),e);function Pe(e,...a){if(Ci(e)||fi(e))return If(Ar(Af(Uu,[e,...a])));const i=e;return a.length===0&&i.length===1&&typeof i[0]=="string"?Ar(i):If(Ar(Af(i,a)))}function hu(e,a,i=ra){if(!a)throw _i(1,a);const s=(l,...d)=>e(a,i,Pe(l,...d));return s.attrs=l=>hu(e,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>hu(e,a,Object.assign(Object.assign({},i),l)),s}const Gg=e=>hu(vS,e),m=Gg;xS.forEach(e=>{m[e]=Gg(e)});class yS{constructor(a,i){this.instanceRules=new Map,this.rules=a,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Ci(d)&&!Gu(d))return!1}return!0})(a),ji.registerId(this.componentId)}removeStyles(a,i){this.instanceRules.delete(a),this.rebuildGroup(i)}renderStyles(a,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+a))this.instanceRules.has(a)||this.computeRules(a,i,s,l);else{const f=this.computeRules(a,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(a);if(this.computeRules(a,i,s,l),!s.server&&h){const f=h.rules,v=this.instanceRules.get(a).rules;if(f.length===v.length){let y=!0;for(let x=0;x<f.length;x++)if(f[x]!==v[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(a,i,s,l){const d=cl(Ar(this.rules,i,s,l)),h={name:this.componentId+a,rules:l(d,"")};return this.instanceRules.set(a,h),h}rebuildGroup(a){const i=this.componentId;a.clearRules(i);for(const s of this.instanceRules.values())a.insertRules(i,s.name,s.rules)}}function wS(e,...a){const i=Pe(e,...a),s=`sc-global-${Vu(JSON.stringify(i))}`,l=new yS(i,s),d=f=>{const v=Vg(),y=Qt.useContext(Qu);let x;{const w=Qt.useRef(null);w.current===null&&(w.current=v.styleSheet.allocateGSInstance(s)),x=w.current}v.styleSheet.server&&h(x,f,v.styleSheet,y,v.stylis);{const w=l.isStatic?[x,v.styleSheet,l]:[x,f,v.styleSheet,y,v.stylis,l],k=Qt.useRef(l);Qt.useLayoutEffect(()=>{v.styleSheet.server||(k.current!==l&&(v.styleSheet.clearRules(s),k.current=l),h(x,f,v.styleSheet,y,v.stylis))},w),Qt.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(x,v.styleSheet)},[x,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(x),null};function h(f,v,y,x,w){if(l.isStatic)l.renderStyles(f,Aj,y,w);else{const k=Object.assign(Object.assign({},v),{theme:$g(v,x,d.defaultProps)});l.renderStyles(f,k,y,w)}}return Qt.memo(d)}var Yg;class bS{constructor(a,i){this[Yg]=!0,this.inject=(s,l=uu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=a,this.id=Lg+a,this.rules=i,ii(this.id),Yu(this,()=>{throw _i(12,String(this.name))})}getName(a=uu){return a.hash?this.name+qu(+a.hash>>>0):this.name}}function ke(e,...a){const i=cl(Pe(e,...a)),s=Vu(i);return new bS(s,i)}Yg=Dg;const Ef=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],kS=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],_S={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},CS=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],jS=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],SS=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function NS(e){let a=e>>>0;return()=>{a|=0,a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Qg(e){let a=2166136261;for(let i=0;i<e.length;i++)a^=e.charCodeAt(i),a=Math.imul(a,16777619);return a>>>0}function RS(e){const a=kS.find(i=>i.match.test(e));return a?a.profile:_S}function Ku(e,a){const i=RS(e),s=NS(Qg(e||"teambridge")^a),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<a;){const f=`${l(CS)} ${l(jS)}`;if(h.has(f))continue;h.add(f);const v=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(SS),credential:l(i.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const MS=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],LS=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function $S(e){var a;return((a=MS.find(i=>i.match.test(e)))==null?void 0:a.shapes)??LS}function Pf(e){const a=Ku(e,8),[i,s,l,d]=a,h=4+Qg(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${h} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const TS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],zf=["6a–2p","2p–10p","10p–6a"],AS=[4,3,3,4,4,3,3];function Of(e){var l,d;const a=Ku(e,12);let i=0;const s=TS.map((h,f)=>{const v=[];for(let y=0;y<AS[f];y++){const x=a[i%a.length].name.split(" ")[0];i++,v.push({time:zf[y%zf.length],who:x})}return{label:h,shifts:v}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const qn=(e,a,i)=>Math.max(a,Math.min(i,e)),Zu=e=>(e=qn(e,0,1),e*e*(3-2*e)),da=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function Wn(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function pu(e){const a=(e||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function Df(e,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return pu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return pu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function IS(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function ES(e){const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function PS(e,a){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Xr=["234,54,38","246,112,44","252,172,54","255,212,76"],zS="176,58,32",OS="198,158,52";function ar(e,a,i){const s=e.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function po(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),x=e.size<24,w=qn(e.alert??0,0,1),k=(R,C)=>R+(C-R)*w,T=.85+.15*Math.sin(a*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const R=s.createRadialGradient(h,f,0,h,f,y*3);R.addColorStop(0,"rgba("+i.core+",0.55)"),R.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=R,s.beginPath(),s.arc(h,f,y*3,0,6.2832),s.fill()}else if(!i.glow){const R=y*k(3.2,3),C=s.createRadialGradient(h,f,0,h,f,R);C.addColorStop(0,"rgba("+ar(i.core,Xr[1],w)+","+k(.34,.85*T)+")"),C.addColorStop(.5,"rgba("+ar(i.core,Xr[2],w)+","+k(.13,.42*T)+")"),C.addColorStop(1,"rgba("+ar(i.core,Xr[3],w)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,f,R,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,N=Math.max(.8,y*k(1,1.5)),L=y*.1*w;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const A=s.createRadialGradient(h-L,f-L,0,h,f,N);A.addColorStop(0,"rgba("+ar(i.core,Xr[0],w)+","+k(_,1)+")"),A.addColorStop(.5,"rgba("+ar(i.core,Xr[1],w)+","+k(_,1)+")"),A.addColorStop(.82,"rgba("+ar(i.core,Xr[2],w)+","+k(_,.97)+")"),A.addColorStop(1,"rgba("+ar(i.core,Xr[3],w)+","+k(_,.72)+")"),s.fillStyle=A,s.beginPath(),s.arc(h,f,N,0,6.2832),s.fill(),s.restore()}function Kg(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],w=a*(y?.5:.16),k=.42,T=Math.cos(k),_=Math.sin(k),N=Math.cos(w),L=Math.sin(w),A=v*.96,R=(P,W,Y)=>{const q=P*N+Y*L,K=-P*L+Y*N,ee=W,ae=ee*T-K*_,se=(ee*_+K*T+1)/2,Z=.82+.18*se;return{x:h+q*A*Z,y:f+ae*A*Z,d:se}},C=(P,W,Y)=>{const q=Math.cos(P),K=Math.sin(P)*Math.cos(W),ee=Math.sin(P)*Math.sin(W);return[q*Math.cos(Y)+ee*Math.sin(Y),K,-q*Math.sin(Y)+ee*Math.cos(Y)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const O=e.size>=24?64:40,j=y?.9:.3,M=O,S=5.6,I=[];for(let P=0;P<x.length;P++){const W=x[P][0],Y=x[P][1],q=ae=>{const re=C(ae,W,Y);return R(re[0],re[1],re[2])},K=P%2?1:-1,ee=P*2+K*a*j;I.push({ptOf:q,head:ee,dir:K,hp:q(ee)})}I.sort((P,W)=>P.hp.d-W.hp.d);for(const P of I){const W=Math.max(1.2,v*.05)*(.75+.35*P.hp.d),Y=.66*(.45+.55*P.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=W;let q=P.ptOf(P.head);for(let ae=1;ae<=M;ae++){const re=ae/M,se=1-re,Z=Y*se*se,U=P.ptOf(P.head-P.dir*re*S);Z>.004&&(s.strokeStyle="rgba("+i.dot+","+Z+")",s.beginPath(),s.moveTo(q.x,q.y),s.lineTo(U.x,U.y),s.stroke()),q=U}s.restore();const K=Math.max(.9,v*.062*da(e.size)*(.65+.5*P.hp.d)),ee=.45+.55*P.hp.d;if(i.glow){const ae=s.createRadialGradient(P.hp.x,P.hp.y,0,P.hp.x,P.hp.y,K*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(P.hp.x,P.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(P.hp.x,P.hp.y,K,0,6.2832),s.fill()}po(e,a,i),s.restore()}function DS(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[v*.92],w=x.length,k=1,T=y?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let N=0;N<w;N++){const L=x[N],A=N%2?1:-1,R=6.2832/k,C=Math.min(5.6,R*.92);for(let O=0;O<k;O++){const j=N*2+A*a*T+O*R,M=h+Math.cos(j)*L,S=f+Math.sin(j)*L;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let I=M,P=S;for(let Y=1;Y<=_;Y++){const q=Y/_,K=.62*(1-q)*(1-q),ee=j-A*q*C,ae=h+Math.cos(ee)*L,re=f+Math.sin(ee)*L;K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(I,P),s.lineTo(ae,re),s.stroke()),I=ae,P=re}s.restore();const W=Math.max(.9,v*.062*da(e.size));if(i.glow){const Y=s.createRadialGradient(M,S,0,M,S,W*4.5);Y.addColorStop(0,"rgba("+i.accent+",0.3)"),Y.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Y,s.beginPath(),s.arc(M,S,W*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(M,S,W,0,6.2832),s.fill()}}po(e,a,i),s.restore()}function Ff(e,a,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=qn(e.alert??0,0,1),k=y*.82,T=(U,G)=>ar(i.dot,ar(zS,OS,qn(Math.hypot(U-f,G-v)/k,0,1)),w),_=e.size>=120,N=_?22:e.size>=32?10:e.size>=20?7:5,L=x?a*.55:a*.22,A=Math.cos(L),R=Math.sin(L),C=.42,O=Math.cos(C),j=Math.sin(C);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const U=s.createRadialGradient(f,v,0,f,v,y*1.02);U.addColorStop(0,"rgba("+i.accent+",0.10)"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(f,v,y*1.02,0,6.2832),s.fill()}const M=[];for(let U=0;U<N;U++){const G=1-(U+.5)/N*2,E=Math.sqrt(Math.max(0,1-G*G)),$=U*2.39996,D=Math.cos($)*E,V=G,ne=Math.sin($)*E,le=D*A+ne*R,J=-D*R+ne*A,F=V*O-J*j,ie=V*j+J*O,me=(ie+1)/2,ue=.82+.18*me;M.push({x:f+le*k*ue,y:v+F*k*ue,d:me,k:U,vec:[le,F,ie]})}M.sort((U,G)=>U.d-G.d);const S=U=>{const G=(U[2]+1)/2,E=.82+.18*G;return{x:f+U[0]*k*E,y:v+U[1]*k*E,d:G}},I=(U,G,E)=>{let $=U[0]*G[0]+U[1]*G[1]+U[2]*G[2];$=qn($,-1,1);const D=Math.acos($);if(D<.001)return[U[0],U[1],U[2]];const V=Math.sin(D),ne=Math.sin((1-E)*D)/V,le=Math.sin(E*D)/V;return[U[0]*ne+G[0]*le,U[1]*ne+G[1]*le,U[2]*ne+G[2]*le]},P={};for(const U of M)P[U.k]=U;const Y=a*(x?1.4:.5),q=Math.floor(Y),K=Y-q,ee=5,ae=12;s.lineCap="round",s.lineJoin="round";const re=[1.7,9.3,21.5,34.8,48.2],se=qn(Math.round(e.streamCount??(_?5:4)),0,re.length),Z=re.slice(0,se).map(U=>({seed:U}));for(const U of Z){const G=$=>{const D=Math.sin($*12.9898+U.seed)*43758.5453;return Math.floor((D-Math.floor(D))*N)},E=$=>{let D=G($);return D===G($-1)&&(D=(D+1)%N),P[D]};for(let $=ee-1;$>=0;$--){const D=q-$;if(D<0)continue;const V=E(D),ne=E(D+1);if(!V||!ne||V===ne)continue;const le=$===0?K:1,J=S(I(V.vec,ne.vec,le)),F=(V.d+J.d)/2,ie=$===0?1:qn(1-($-1+K)/(ee-1),0,1),me=(i.glow?.6:.72)*ie*(.4+.6*F);if(me<.02)continue;const ue=s.createLinearGradient(V.x,V.y,J.x,J.y);ue.addColorStop(0,"rgba("+T(V.x,V.y)+",0)"),ue.addColorStop(1,"rgba("+T(J.x,J.y)+","+me+")"),s.strokeStyle=ue,s.lineWidth=(_?Math.max(1.1*h,y*.018):Math.max(1.2,y*.045))*(.7+.4*F),s.beginPath();for(let fe=0;fe<=ae;fe++){const _e=S(I(V.vec,ne.vec,le*(fe/ae)));fe===0?s.moveTo(_e.x,_e.y):s.lineTo(_e.x,_e.y)}s.stroke()}}for(const U of M){const G=.5+.5*Math.sin(a*2-U.k*.9),E=(.18+.82*U.d)*(.62+.38*G),$=_?Math.max(.5,(.9+.9*U.d)*h*(.85+.15*G)):y*.058*da(e.size)*(.6+.5*U.d);if(i.glow){const D=$*4,V=s.createRadialGradient(U.x,U.y,0,U.x,U.y,D);V.addColorStop(0,"rgba("+i.accent+","+.24*E+")"),V.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=V,s.beginPath(),s.arc(U.x,U.y,D,0,6.2832),s.fill()}s.fillStyle="rgba("+T(U.x,U.y)+","+(.32+.68*E)+")",s.beginPath(),s.arc(U.x,U.y,Math.max(.9,$),0,6.2832),s.fill()}_&&Zg(e,a,i,T),po(e,a,i),s.restore()}function Zg(e,a,i,s){const{ctx:l,w:d,h,dpr:f}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let T=0;T<46;T++){const _=Wn(T*5.1)<.5?-1:1,N=Wn(T*1.7)*6.2832+a*(.3+Wn(T*3.1)*.6)*_*k,L=x*(.04+.05*Wn(T*4.7))*Math.sin(a*(.8+Wn(T*6)*1)+Wn(T*7)*6.28),A=x*(.5+Wn(T*2.3)*.5)+L,R=v+Math.cos(N)*A,C=y+Math.sin(N)*A,O=.3+.7*(.5+.5*Math.sin(a*(1.4+Wn(T)*2)+Wn(T*2)*6.28)),j=Math.max(.5,(.4+Wn(T*8)*1)*f*(.55+.6*O));if(i.glow){const M=j*6,S=l.createRadialGradient(R,C,0,R,C,M);S.addColorStop(0,"rgba("+i.accent+","+O*.18+")"),S.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=S,l.beginPath(),l.arc(R,C,M,0,6.2832),l.fill()}l.fillStyle="rgba("+s(R,C)+","+O*(i.glow?.8:.42)+")",l.beginPath(),l.arc(R,C,j,0,6.2832),l.fill()}}function FS(e,a,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=e.size>=32?11:7,k=y*.12,T=y*.12,_=Zu(.5+.5*Math.sin(a*(x?1:.55))),N=x?.34+.66*_:.5+.12*_,L=Math.max(1*h,y*.052),A=-a*(x?.5:.16),R=Math.cos(A),C=Math.sin(A),O=.42,j=Math.cos(O),M=Math.sin(O);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const S=y*(.52+.44*N),I=Math.max(k+L,S-T),P=[];for(let W=0;W<w;W++){const Y=1-(W+.5)/w*2,q=Math.sqrt(Math.max(0,1-Y*Y)),K=W*2.39996,ee=Math.cos(K)*q,ae=Y,re=Math.sin(K)*q,se=ee*R+re*C,Z=-ee*C+re*R,U=ae*j-Z*M,E=(ae*M+Z*j+1)/2,$=.82+.18*E,D=.5+.5*Math.sin(a*1.6+W*1.3);P.push({x0:f+se*k*$,y0:v+U*k*$,x1:f+se*I*$,y1:v+U*I*$,cx2:f+se*S*$,cy2:v+U*S*$,d:E,shim:D})}P.sort((W,Y)=>W.d-Y.d);for(const W of P){const Y=(x?.4+.45*N:.6)*(.4+.6*W.d)*(.78+.22*W.shim),q=s.createLinearGradient(W.x0,W.y0,W.x1,W.y1);q.addColorStop(0,"rgba("+i.dot+","+Y+")"),q.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=q,s.lineWidth=L*(.7+.5*W.d),s.beginPath(),s.moveTo(W.x0,W.y0),s.lineTo(W.x1,W.y1),s.stroke();const K=Math.max(.9,y*.058*da(e.size)*(.85+.3*N)*(.6+.5*W.d));if(i.glow){const ee=s.createRadialGradient(W.cx2,W.cy2,0,W.cx2,W.cy2,K*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Y+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(W.cx2,W.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Y+.1)+")",s.beginPath(),s.arc(W.cx2,W.cy2,K,0,6.2832),s.fill()}e.size>=120&&Zg(e,a,i,()=>i.dot),po(e,a,i),s.restore()}function BS(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,w=v*.78,k=y?a*.5:a*.2,T=Math.cos(k),_=Math.sin(k),N=.42,L=Math.cos(N),A=Math.sin(N),R=y?1:.4,C=(S,I)=>[Math.sin(S)*Math.cos(I),Math.cos(S),Math.sin(S)*Math.sin(I)],O=[C(1.4+.5*Math.sin(a*.5*R),a*.6*R),C(1.9+.4*Math.cos(a*.4*R),-a*.5*R+2)],j=.36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const M=[];for(let S=0;S<x;S++){const I=1-(S+.5)/x*2,P=Math.sqrt(Math.max(0,1-I*I)),W=S*2.39996,Y=Math.cos(W)*P,q=I,K=Math.sin(W)*P;let ee=0;for(const E of O){const $=Y-E[0],D=q-E[1],V=K-E[2];ee+=Math.exp(-($*$+D*D+V*V)/(2*j*j))}ee=qn(ee,0,1);const ae=Y*T+K*_,re=-Y*_+K*T,se=q*L-re*A,U=(q*A+re*L+1)/2,G=.82+.18*U;M.push({x:h+ae*w*G,y:f+se*w*G,d:U,inf:ee})}M.sort((S,I)=>S.d-I.d);for(const S of M){const I=Zu(S.inf),P=Math.max(.6,v*(.05+.06*I)*da(e.size)*(.55+.5*S.d)),W=(.16+.84*S.d)*(.45+.55*I),Y=Math.abs(2*S.d-1),q=Math.atan2(S.y-f,S.x-h);s.fillStyle="rgba("+i.dot+","+W+")",s.beginPath(),s.ellipse(S.x,S.y,Math.max(.35,P*Y),P,q,0,6.2832),s.fill()}po(e,a,i),s.restore()}function WS(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,w=v*.9,k=y?1:.4,T=a*(y?.3:.12),_=a*1*k,N=-a*.7*k+2.2,L=.72,A=(R,C)=>{const O=((R-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(O)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let R=0;R<x;R++){const C=R/x*6.2832+T;let O=Math.exp(-(A(C,_)**2)/(2*L*L))+Math.exp(-(A(C,N)**2)/(2*L*L));O=qn(O,0,1);const j=Zu(O),M=h+Math.cos(C)*w,S=f+Math.sin(C)*w,I=Math.max(.6,v*(.05+.07*j)*da(e.size)),P=.38+.62*j;if(i.glow&&j>.25){const W=s.createRadialGradient(M,S,0,M,S,I*4);W.addColorStop(0,"rgba("+i.accent+","+.24*j+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(M,S,I*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+P+")",s.beginPath(),s.arc(M,S,I,0,6.2832),s.fill()}po(e,a,i),s.restore()}function HS(e,a,i){po(e,a,i)}const US={orbit:Kg,orbit2d:DS,circle:Ff,lines:FS,magnetic:BS,magnetic2d:WS,pulse:HS,bands:Ff};function ct({mark:e="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:f=!0,coreGradient:v=!1,streamCount:y,className:x,"aria-label":w}){const k=g.useRef(null),T=IS(),_=g.useRef(0),N=g.useRef(0);return N.current=v?1:0,g.useEffect(()=>{const L=k.current;if(!L)return;const A=L.getContext("2d");if(!A)return;const R=Math.min(2,window.devicePixelRatio||1),C=Math.max(2,Math.round(a*R)),O=C;L.width=C,L.height=O;const j={ctx:A,w:C,h:O,dpr:R,size:a,state:s,coreHalo:f,alert:_.current,streamCount:y},M=i==="auto"?ES(Df(A,L,"var(--color-bg-primary)"))<.5?"dark":"light":i,S=PS(M,pu(d));if(h){const ee=Df(A,L,h);S.dot=ee,S.core=ee}const I=US[e]??Kg,P=ee=>{_.current+=(N.current-_.current)*.06,Math.abs(_.current-N.current)<.001&&(_.current=N.current),j.alert=_.current,A.clearRect(0,0,C,O),I(j,s==="static"?.62:ee,S)},W=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),Y=qn(l,.4,3);if((W||s==="static")&&(_.current=N.current),P(1.15),W||s==="static")return;let q=0;const K=ee=>{P(ee/1e3*Y),q=requestAnimationFrame(K)};return q=requestAnimationFrame(K),()=>cancelAnimationFrame(q)},[e,a,i,s,l,d,h,f,v,y,T]),r.jsx("canvas",{ref:k,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:x,role:"img","aria-label":w})}const oa={high:0,medium:1,low:2,none:3};m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Ml(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function qS(e,a){if(a)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const Xg=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,Jg=e=>/^(review|adjust|revisit|update)\b/i.test(e),VS=["Revisit","Update","Resolve"],GS=e=>/,|\sand\s/.test(e),YS="Approve all",dl="Yes",e2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};m.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;function QS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function KS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function ZS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function XS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function JS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function eN({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ul({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function tN({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function nN({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function rN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function co({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function oN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function aN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function iN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Bf({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Pd=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],aa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},t2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function n2(e){const a=t2[e];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function r2(e){const a=aa[e.id];if(!a||e.title.startsWith(a))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${a} ${l}`}const o2={missed_clockin_james:"james_okoro_2"},Xu=e=>`https://i.pravatar.cc/80?u=${o2[e]??e}`,ua=e=>`https://i.pravatar.cc/80?u=${o2[e]??e}`,sN={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},lN=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],a2=e=>sN[e]??lN,i2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Wf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Ju={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},cN={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},eh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},dN={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},uN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},zd={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function s2(e){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return dN[e.id]??e.timeline.map(i=>{var d;const s=((d=zd[i.state])==null?void 0:d.call(zd,e))??e.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:uN[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const bt=(e,a,i)=>({name:e,match:a,distance:i}),Ee=(e,a,i,s,l,d)=>({seed:e,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Hf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],hN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],pN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],fN=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],l2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",Jr=e=>({from:"ultron",text:l2,time:e}),mN={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Hf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[bt("Jordan Pierce","4.9 match","3.2 mi"),bt("Aisha Karim","4.7 match","5.1 mi"),bt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:l2,total:20,threads:[Ee("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[Jr("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ee("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[Jr("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ee("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[Jr("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ee("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[Jr("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ee("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[Jr("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ee("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[Jr("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ee("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[Jr("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:hN,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[bt("Renee Wallace","4.9 match","2.4 mi"),bt("Carl Jensen","4.6 match","4.1 mi"),bt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ee("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ee("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:pN,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[bt("Dane Mercer","4.8 match","2.1 mi"),bt("Omar Reyes","4.6 match","3.7 mi"),bt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ee("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ee("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ee("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:fN,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Jamal Carter","4.7 match","1.8 mi"),bt("Sara Lindqvist","4.6 match","2.9 mi"),bt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ee("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ee("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ee("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Theo Park","4.7 match","1.9 mi"),bt("Gina Holt","4.5 match","3.3 mi"),bt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ee("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ee("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ee("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ee("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[bt("Carl Jensen","4.7 match","2.6 mi"),bt("Tina Boyd","4.5 match","3.9 mi"),bt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ee("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ee("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ee("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ee("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ee("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ee("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ee("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ee("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ee("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ee("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ee("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ee("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ee("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Hf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ee("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ee("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},gN={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},vN=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",Uf=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",qf=e=>e.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),xN={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},fu=e=>{const[a,...i]=e.split(" "),s=xN[a];return s?`Will ${s} ${i.join(" ")}`:e};function yN(e,a){if(e==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${vN(i.name)}", template="shift_offer", to=matched)`,summary:`${fu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${fu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function wN(e,a,i,s){var T,_,N,L;if(e==="read"){const A=((T=a.update)==null?void 0:T.recordType)??((_=a.updateClose)==null?void 0:_.recordType);if(!A)return null;const R=A.toLowerCase(),C=[{label:"Type",value:A},{label:"Time",value:((N=t2[s])==null?void 0:N.shiftTime)??""},{label:"User",value:aa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${A}`,description:`Pulled the current ${R} record before planning`,query:`read_data(record="${A}") → current_state`,recordDetails:C,summary:`Read the ${R}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const A=(L=a.policy)==null?void 0:L.eligible;if(!A)return null;const R=A.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${R} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${A.total} ${A.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=A.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${A.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${A.total} qualified ${R} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${A.total} qualified ${R} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!a.task)return null;const{description:A,query:R,fields:C}=a.task;return{icon:"task",name:"Tasks",description:A,query:R,task:{fields:C}}}if(e==="update"||e==="update-close"){const A=e==="update"?a.update:a.updateClose;if(!A)return null;const{description:R,...C}=A;return{icon:"record",name:"Update Data",description:R,updateData:C}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0,h=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(!(e==="policy"&&a.policy||!!h||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,y=e==="policy"?a.policy.description:l?d.description:h.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const A=e==="policy"?y:fu(y),R={icon:x,name:v,description:A,...yN(e,a)};return l?{...R,channel:qf(d.channel),message:d.message}:h?{...R,channel:Uf(h.name),message:h.message}:e==="policy"?{...R,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:R}if(e==="policy")return{icon:x,name:v,description:y,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(h)return{icon:x,name:v,description:y,channel:Uf(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:x,name:v,description:y,channel:qf(d.channel),notification:k}}function c2(e,a,i="execution"){const s=mN[e];return s?a.map(l=>wN(l,s,i,e)).filter(l=>l!==null):[]}const bN=e=>e.tools??gN[e.icon]??["policy"],Hs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function kN(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const d2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Vf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function th(e,a){return Vf[a%Vf.length]}function _N(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function CN(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function u2({record:e}){const a=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?e.meta.filter(l=>l!==a):e.meta;return r.jsxs(jN,{children:[r.jsx(An,{size:"md",src:Xu(e.avatarSeed),name:e.title,alt:e.title}),r.jsxs(SN,{children:[r.jsx(NN,{children:e.title}),r.jsx(RN,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(MN,{"data-tone":CN(i),children:[i,"% match"]}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Mu,{size:16})})]})}const jN=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,SN=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,NN=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,RN=m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,MN=m.span`
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
`,Gf=e=>e.id.startsWith("detected_"),Yf=5400,Qf=1100;function LN(e,a){switch(a.type){case"detect":return e.some(i=>i.id===a.thread.id)?e:[a.thread,...e];case"decide":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:d2[i.id]??i.outcome}:i)}}const $N=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function TN(){const[e,a]=g.useReducer(LN,Pd),[i,s]=g.useState(()=>{var D;const $=Pd.find(V=>V.status==="needs_approval"||V.status==="recommended");return($==null?void 0:$.id)??((D=Pd[0])==null?void 0:D.id)??null}),[l,d]=g.useState([]),h=$=>{s($),d(D=>D.includes($)?D:[...D,$])},f=g.useMemo(()=>{const $=e.map((D,V)=>({item:D,index:V}));return $N.map(D=>({id:D.id,label:D.label,threads:$.filter(V=>D.statuses.includes(V.item.status)).sort((V,ne)=>(V.item.status==="analyzing"?1:0)-(ne.item.status==="analyzing"?1:0)||(Gf(ne.item)?1:0)-(Gf(V.item)?1:0)||oa[V.item.severity]-oa[ne.item.severity]||V.index-ne.index).map(V=>V.item)}))},[e]),v=e.find($=>$.id===i)??null,[y,x]=g.useState({}),w=i?y[i]??0:0,[k,T]=g.useState([]),[_,N]=g.useState({}),[L,A]=g.useState({}),[R,C]=g.useState([]),O=g.useRef({}),[j,M]=g.useState([]),S=$=>{M(D=>D.includes($)?D.filter(V=>V!==$):[...D,$])},[I,P]=g.useState([]),W=$=>{P(D=>D.includes($)?D:[...D,$])},[Y,q]=g.useState([]);return{threads:e,groups:f,selectedId:i,selectedThread:v,selectedStage:w,stageById:y,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:L,replyingIds:R,setSelectedId:h,detectRisk:$=>{a({type:"detect",thread:kN($)})},decide:$=>{h($),T(D=>D.includes($)?D:[...D,$]),a({type:"decide",threadId:$})},commit:($,D)=>{h($),N(V=>({...V,[$]:[...V[$]??[],D]})),a({type:"commit",threadId:$})},completeRun:$=>{const D=y[$]??0,V=Ju[$];D===0&&V?(x(ne=>({...ne,[$]:1})),a({type:"reopen",threadId:$})):(a({type:"resolve",threadId:$}),j.includes($)&&(W($),M(ne=>ne.filter(le=>le!==$))))},sendMessage:($,D)=>{const V=D.trim();if(!V)return;h($),A(le=>({...le,[$]:[...le[$]??[],{role:"operator",text:V}]})),C(le=>le.includes($)?le:[...le,$]);const ne=window.setTimeout(()=>{A(le=>{const J=le[$]??[],F=J.filter(ie=>ie.role==="ultron").length;return{...le,[$]:[...J,{role:"ultron",text:th(V,F)}]}}),C(le=>le.filter(J=>J!==$)),delete O.current[$]},Qf);O.current[$]=ne},stopReply:$=>{const D=O.current[$];D&&(window.clearTimeout(D),delete O.current[$]),C(V=>V.filter(ne=>ne!==$))},refine:$=>{},saveWorkflow:$=>{const D=$.id;h(D),A(ne=>({...ne,[D]:[...ne[D]??[],{role:"operator",text:"Save as workflow"}]})),C(ne=>ne.includes(D)?ne:[...ne,D]);const V=window.setTimeout(()=>{A(ne=>({...ne,[D]:[...ne[D]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),W(D),C(ne=>ne.filter(le=>le!==D)),delete O.current[D]},Qf);O.current[D]=V},pendingWorkflowIds:j,toggleWorkflowSave:S,savedWorkflowIds:I,markWorkflowSaved:W,revealedNewIds:Y,revealNew:$=>q(D=>D.includes($)?D:[...D,$])}}const AN={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function IN(e,a){const i=AN[e];return!i||a==="plan"?e:a==="done"?i.done:i.working}const EN={search:nl,read:nl,message:il,policy:no,shield:no,schedule:no,analytics:t6,clock:yn,monitor:bi,bell:il,record:$r,task:no},PN={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},zN=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:PN[e.icon]??e.name,ON=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",Kf={positive:0,chatting:1,muted:2},DN=m(rg)`
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
`,FN=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,nh=240;function BN({open:e,onClose:a,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[h,f]=g.useState(e),[v,y]=g.useState(!1);if(g.useEffect(()=>{if(e){f(!0);let _=0;const N=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(N),cancelAnimationFrame(_)}}y(!1);const T=setTimeout(()=>f(!1),nh);return()=>clearTimeout(T)},[e]),!h)return null;const x=s.length,w=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((T,_)=>({entry:T,index:_}));return xi.createPortal(r.jsxs(XN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(JN,{$shown:v,onClick:a}),r.jsxs(eR,{$shown:v,children:[r.jsxs(tR,{children:[r.jsxs(nR,{children:[r.jsx(rR,{children:i}),r.jsx(oR,{children:w})]}),r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(ui,{size:18})})]}),r.jsxs(aR,{children:[r.jsx(iR,{"aria-hidden":"true"}),r.jsx(ng,{type:"single",collapsible:!0,value:l,onValueChange:T=>d(typeof T=="string"?T:""),children:k.map(({entry:T,index:_})=>{const N=T.updateData?q0:EN[T.icon];return r.jsx(DN,{value:String(_),label:zN(T),description:T.description,leadingSlot:r.jsx(FN,{"aria-hidden":"true",children:r.jsx(N,{size:18})}),children:r.jsx(sR,{children:r.jsx(WN,{entry:T})})},_)})})]})]})]}),document.body)}function WN({entry:e}){return r.jsxs(r.Fragment,{children:[e.channel&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Channel"}),r.jsx(tm,{children:e.channel})]}),e.message&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(Xf,{children:e.message})]}),e.recordDetails&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Record details"}),r.jsx(Od,{children:e.recordDetails.map((a,i)=>r.jsx(cn,{size:"sm",label:a.label,trailingSlot:r.jsx(Dd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.policies&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Policies evaluated · ${e.policies.total}`}),r.jsx(wR,{children:e.policies.items.map((a,i)=>r.jsxs(bR,{children:[r.jsx(kR,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),e.eligible&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),r.jsx(HN,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&r.jsxs(rn,{children:[r.jsx(Ot,{children:`Threads · ${e.threads.total}`}),r.jsx(QN,{threads:e.threads})]}),e.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(rn,{children:[r.jsx(Ot,{children:"Recipient"}),r.jsx(_R,{children:r.jsx(cn,{size:"md",divider:!1,leadingSlot:r.jsx(An,{size:"sm",src:ua(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:r.jsx(_l,{size:14})})})})]}),r.jsxs(rn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(Xf,{children:e.notification.message})]})]}),e.task&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Task"}),r.jsx(Od,{children:e.task.fields.map((a,i)=>r.jsx(cn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(hi,{status:"success",size:"sm",children:a.value}):r.jsx(Dd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.updateData&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((a,i)=>r.jsx(Od,{children:a.map((s,l)=>r.jsx(cn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(UN,{children:[r.jsx(qN,{children:s.previousValue}),r.jsx(VN,{"aria-hidden":"true",children:"→"}),r.jsx(GN,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(hi,{status:"success",size:"sm",children:s.value}):r.jsx(Dd,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Recommendation"}),r.jsxs(CR,{children:[r.jsxs(Jf,{children:[r.jsx(em,{children:"Incentive?"}),r.jsx(jR,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),r.jsxs(Jf,{children:[r.jsx(em,{children:"Reason"}),r.jsx(SR,{children:e.recommendation.rationale})]})]})]}),e.query&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"Query"}),r.jsx(lR,{children:e.query})]}),e.summary&&r.jsxs(rn,{children:[r.jsx(Ot,{children:"What it does"}),r.jsx(tm,{children:e.summary})]})]})}function HN({candidates:e,total:a,moreNoun:i}){var x;const[s,l]=g.useState(!1),d=e.slice(0,3),h=a-d.length,f=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),v=s?Array.from({length:h},(w,k)=>YN(k,f)):[],y=[...d,...v];return r.jsxs(r.Fragment,{children:[r.jsx(rh,{children:y.map((w,k)=>r.jsx(cn,{size:"sm",leadingSlot:r.jsx(An,{size:"sm",src:ua(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:r.jsx(uR,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&r.jsx(h2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const rh=m.div`
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
`,Od=m(rh)`
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
`,Dd=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,UN=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,qN=m.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,VN=m.span`
  color: var(--color-content-tertiary);
`,GN=m.span`
  color: var(--color-success-content);
`,hl=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],pl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function YN(e,a){const i=hl[e%hl.length],s=pl[(e*7+3)%pl.length],l=Math.max(3,a-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const Zf=3;function QN({threads:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((x,w)=>Kf[x.tone]-Kf[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(x,w)=>ZN(w))],v=a?f:f.slice(0,Zf),y=f.length-Zf;return r.jsxs(r.Fragment,{children:[r.jsx(rh,{children:v.map((x,w)=>{var N;const k=!!((N=x.conversation)!=null&&N.length),T=`${x.name}-${w}`,_=k&&s===T;return r.jsxs(hR,{"data-open":_||void 0,children:[r.jsx(cn,{size:"md",interactive:k,onClick:k?()=>l(_?null:T):void 0,"aria-expanded":k?_:void 0,leadingSlot:r.jsx(An,{size:"sm",src:ua(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:r.jsxs(yR,{children:[r.jsx(hi,{status:ON(x),size:"sm",children:x.status}),k?r.jsx(pR,{"data-open":_||void 0,children:r.jsx(In,{size:16})}):r.jsx(dn,{size:16})]})}),_&&r.jsx(KN,{messages:x.conversation})]},T)})}),y>0&&r.jsx(h2,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":a,children:a?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function KN({messages:e}){return r.jsx(mR,{children:e.map((a,i)=>r.jsxs(gR,{$from:a.from,children:[r.jsx(vR,{children:a.text}),r.jsx(xR,{children:a.time})]},i))})}function ZN(e){const a=hl[e%hl.length],i=pl[(e*7+3)%pl.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const XN=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,JN=m.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${nh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,eR=m.div`
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
  transition: transform ${nh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,tR=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,nR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rR=m.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,oR=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,aR=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,iR=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,sR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,rn=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function lR({children:e}){const[a,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(cR,{children:[r.jsx(dR,{children:e}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(Dt,{size:14}):r.jsx(H0,{size:14})})]})}const cR=m.div`
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
`,dR=m.pre`
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
`,uR=m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,hR=m.div``,pR=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,fR=ke`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,mR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${fR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gR=m.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,vR=m.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,xR=m.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,yR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,h2=m.button`
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
`,wR=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,bR=m.li`
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
`,kR=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,Xf=m.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,_R=m.div`
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
`,CR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Jf=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,em=m.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,jR=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,SR=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,tm=m.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function NR({milestones:e}){return r.jsx(PR,{children:e.map((a,i)=>r.jsx($R,{milestone:a,last:i===e.length-1},i))})}function p2({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:v,reasoning:y}){return r.jsx(RR,{milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:v,reasoning:y})}function RR({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:v=!1,reasoning:y=!1}){const[x,w]=g.useState(!1),_=v||y&&!d?e.length:0,N=_>0,L=N&&!x?_:0,A=e.slice(0,_).map(C=>C.headline).join(" · "),R=e.length>0&&L>=e.length;return r.jsx(OR,{$animate:h,children:r.jsxs(FR,{$compact:R,children:[N&&!x&&r.jsx(om,{$tight:!0,$last:R,$connected:f,children:r.jsxs(g2,{type:"button","aria-expanded":x,onClick:()=>w(C=>!C),children:[r.jsx(sm,{"aria-hidden":"true",children:r.jsx(ol,{size:16})}),r.jsx(JR,{children:A})]})}),e.slice(L).map((C,O)=>{var q,K;const j=L+O,M=d&&typeof i=="number"&&j>i,S=d&&typeof i=="number"&&j===i,I=M?"plan":S?"working":"done",P=!d||typeof i!="number"||j<i-1?"done":j===i-1?"working":"upcoming",W=!!((q=C.progress)!=null&&q.length),Y=j===e.length-1;return r.jsxs(om,{$tight:!W,$last:Y,$connected:f,children:[f&&!Y&&P!=="upcoming"&&r.jsx(WR,{"aria-hidden":"true",$state:P,$tight:!W,$superseded:v}),r.jsx(m2,{milestone:C,label:IN(C.headline,I),last:!0,collapsible:!0,placeholder:M,focused:S,startOpen:!d&&x,onCollapse:N&&x&&!S?()=>w(!1):void 0,progressBeat:S?s:void 0,superseded:v,typing:j===a,extra:!M&&((K=C.usage)!=null&&K.length)?r.jsx(LR,{usage:C.usage,title:C.headline}):void 0,icon:y&&!d&&!M?r.jsx(sm,{"aria-hidden":"true",children:r.jsx(ol,{size:16})}):r.jsx(f2,{icon:C.icon,loading:a===j||S||d&&typeof i!="number"&&j===e.length-1,placeholder:M,muted:v})})]},j)}),!l&&!d&&r.jsx(Qo,{time:Un(e)})]})})}const nm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function MR(){const[e,a]=g.useState(0);return g.useEffect(()=>{if(e>=nm.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[e]),r.jsxs(r.Fragment,{children:[nm[e],r.jsxs(DR,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Un(e){const i=581+e.reduce((f,v)=>f+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Qo({time:e}){const[a,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(HR,{"data-feedback-actions":!0,children:r.jsxs(j0,{visibility:"always",time:e,children:[r.jsx(am,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(B0,{size:14})}),r.jsx(am,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(W0,{size:14})}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(wi,{size:14})})]})})}function LR({usage:e,title:a}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?r.jsxs(UR,{children:[r.jsxs(Re,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(dn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),r.jsx(BN,{open:i,onClose:()=>s(!1),title:a,usage:e})]}):null}function $R({milestone:e,last:a}){return r.jsxs(QR,{children:[r.jsxs(KR,{children:[r.jsx(f2,{icon:e.icon}),!a&&r.jsx(nM,{})]}),r.jsx(m2,{milestone:e,last:a})]})}function TR({records:e,initial:a=3}){const[i,s]=g.useState(!1),l=i?e:e.slice(0,a),d=e.length-a;return r.jsxs(xM,{children:[l.map((h,f)=>r.jsx(u2,{record:h},f)),d>0&&r.jsx(yM,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function f2({slotRef:e,hidden:a,loading:i,placeholder:s,muted:l}){return s?r.jsx(im,{ref:e,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(XR,{})}):r.jsx(im,{ref:e,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(tM,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function m2({milestone:e,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:v,progressBeat:y,superseded:x,startOpen:w,onCollapse:k}){var Y,q,K;const T=a??e.headline;if(f)return r.jsx(cm,{$last:i,$dim:!0,children:r.jsxs(mi,{as:"div",children:[l,r.jsx(dm,{children:T})]})});const _=!!((Y=e.blocks)!=null&&Y.length),N=!!h,L=!d||!!e.defaultOpen||!!w,[A,R]=g.useState(null),C=!!k,O=C?!0:A??L,j=d&&(_||N),M=!C&&j&&(!s||!!v),S=M&&!!v&&!!((q=e.progress)!=null&&q.length),I=()=>R(()=>!O),P=_&&(C||!d||O),W=N&&(C||!d||O);return r.jsxs(cm,{$last:i,children:[r.jsxs(mi,{as:C||j?"button":"div",type:C||j?"button":void 0,$interactive:C||M,"aria-expanded":C?!0:M?O:void 0,onClick:C?k:M?I:void 0,children:[l,r.jsx(dm,{$focused:!!v,children:T}),M&&!v&&r.jsx(rM,{"data-open":O||void 0,"aria-hidden":"true",children:r.jsx(dn,{size:14})})]}),(K=e.progress)!=null&&K.length?r.jsx(iM,{$indent:!!l,children:r.jsxs(oM,{children:[S&&r.jsx(aM,{type:"button","aria-expanded":O,"aria-label":O?"Hide details":"Show details",onClick:I,children:O?r.jsx(Pu,{size:16}):r.jsx(uo,{size:16})}),r.jsx(IR,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:y,superseded:x,showAvatars:O||s||v})]})}):null,P&&r.jsx(fM,{$indent:!!l,children:e.blocks.map((ee,ae)=>r.jsxs(mM,{children:[ee.text&&r.jsx(gM,{children:s?r.jsx(oh,{text:ee.text}):ee.text}),ee.label&&r.jsx(vM,{children:ee.label}),ee.bullets&&r.jsx(wM,{children:ee.bullets.map((re,se)=>r.jsx("li",{children:re},se))}),ee.checks&&r.jsx(bM,{children:ee.checks.map((re,se)=>r.jsxs("li",{children:[r.jsx(kM,{"aria-hidden":"true"}),r.jsx("span",{children:re})]},se))}),ee.records&&r.jsx(TR,{records:ee.records})]},ae))}),W&&r.jsx(qR,{$indent:!!l,children:h})]})}const AR=1350;function IR({steps:e,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const v=e.length-1,y=typeof h=="number",[x,w]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),g.useEffect(()=>{if(y||!k.current||x>=v)return;const L=setTimeout(()=>w(A=>Math.min(A+1,v)),AR);return()=>clearTimeout(L)},[x,v,y]),g.useEffect(()=>{typeof h=="number"&&w(Math.min(h,v))},[h,v]);const T=typeof h=="number"?Math.min(h,v):x,_=T>=v,N=_&&!l;return r.jsxs(sM,{children:[r.jsx(cM,{$done:N,$live:l,$superseded:f,"aria-live":"polite",children:l?r.jsx(oh,{text:e[T],caret:!1,speed:26}):e[T]},T),d&&(i?_:_||l)&&(a!=null&&a.length)?r.jsx(ER,{seeds:a,total:s}):null]})}const rm=90;function ER({seeds:e,total:a,max:i=5}){const s=e.slice(0,i),l=Math.max(a??0,e.length),d=l-s.length;return r.jsxs(dM,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>r.jsx(uM,{style:{zIndex:s.length-f,animationDelay:`${f*rm}ms`},children:r.jsx(An,{size:"sm",src:ua(h),name:h,alt:""})},h)),d>0&&r.jsxs(hM,{"aria-hidden":"true",style:{animationDelay:`${s.length*rm}ms`},children:["+",d]})]})}const PR=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,zR=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Ll=Pe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,OR=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${zR} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${Ll}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,DR=m.span``,FR=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,om=m.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,BR=ke`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,WR=m.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?Pe`
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
        animation: ${BR} 1.25s linear infinite;
      `:e.$state==="upcoming"?Pe`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Pe`
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
`,HR=m.div`
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
`,UR=m.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,qR=m.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,am=m(Re)`
  &[data-active] { color: var(--color-content-brand); }
`;function oh({text:e,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return g.useEffect(()=>{h&&(a==null||a())},[h]),r.jsxs(r.Fragment,{children:[e.slice(0,l),s&&r.jsx(GR,{$blink:h,"aria-hidden":"true"}),!h&&r.jsx(YR,{"aria-hidden":"true",children:e.slice(l)})]})}const VR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,GR=m.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?VR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YR=m.span`
  opacity: 0;
`,QR=m.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,KR=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,im=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,ZR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,XR=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${ZR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,g2=m.button`
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
`,sm=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,JR=m.span`
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

  ${g2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,eM=ke`
  to { transform: rotate(360deg); }
`,lm=56.5,tM=m.svg`
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
    stroke-dasharray: ${lm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?lm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${eM} 2s linear infinite;
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
`,nM=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,cm=m.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,mi=m.div`
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
`,dm=m.span`
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

  ${mi}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,rM=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${mi}:hover &,
  ${mi}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,oM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,aM=m.button`
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
`,iM=m.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,sM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,lM=ke`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,cM=m.div`
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
  ${e=>e.$live&&Pe`
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
    animation: ${lM} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,dM=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,v2=ke`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,uM=m.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${v2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hM=m.span`
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
  animation: ${v2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pM=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,fM=m.div`
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
  animation: ${pM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,gM=m.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,vM=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,xM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,yM=m.button`
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
`,wM=m.ul`
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
`,bM=m.ul`
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
`,kM=m.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function _M({size:e=20}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const CM=160,x2=g.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,v]=g.useState(""),y=g.useRef(null),x=f.trim().length>0;g.useImperativeHandle(h,()=>({focus:()=>{var N;return(N=y.current)==null?void 0:N.focus()}}),[]);const w=()=>{const N=y.current;N&&(N.style.height="auto",N.style.height=`${Math.min(N.scrollHeight,CM)}px`)},k=()=>{!x||i||(a(f),v(""),requestAnimationFrame(()=>{const N=y.current;N&&(N.style.height="auto")}))},T=N=>{N.preventDefault(),k()},_=N=>{N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),k())};return r.jsxs(jM,{onSubmit:T,$compact:d,children:[r.jsx(SM,{ref:y,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:N=>{v(N.target.value),w()},onKeyDown:_}),i?r.jsx(um,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(_M,{size:d?16:20})}):r.jsx(um,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:r.jsx(kl,{size:d?14:18})})]})}),jM=m.form`
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
`,SM=m.textarea`
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
`,um=m(Re)`
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
`,hm=450;function ah(e,a){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Ju[e.id],d=a===1&&!!l,h=d?l.prompt:i2[e.id]??e.recommendation,f=d?l.record:cN[e.id],v=f?Array.isArray(f)?f:[f]:[],y=e.status==="unresolved"?VS:d?l.actions:e.actions,x=i&&(!d&&(((_=eh[e.id])==null?void 0:_.length)??0)>1||GS(h)),w=x?YS:y[y.length-1],k=x?[]:y.slice(0,-1),T=Xg(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:v,primaryLabel:w,secondaryLabels:k,purple:T}}function pm({thread:e,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:v,onAction:y,onRefinement:x,onSaveWorkflow:w}){const[k,T]=g.useState(!1),[_,N]=g.useState(!1),{actionable:L,prompt:A,records:R,primaryLabel:C,purple:O}=ah(e,a),M=e.status==="analyzing"&&!l,S=e.status==="resolved"||e.status==="auto_resolved",I=!s&&(L||O),P=S&&!d,W=s?M:L||M||I,Y=i&&(W||P),q=Ml(e),ee=n2(e.id)||(Y?"":e.assessment),ae=re=>{Jg(re)?x(re):y(e.id,re)};return r.jsxs(DM,{"data-tone":q,$expanded:i,children:[r.jsxs(UM,{children:[r.jsxs(VM,{type:"button","aria-expanded":Y,"aria-label":Y?"Collapse case":"Expand case",onClick:h,children:[r.jsx(An,{size:"md",src:Xu(e.id),name:aa[e.id],alt:aa[e.id]??""}),r.jsxs(C2,{children:[r.jsx(j2,{children:r2(e)}),ee&&r.jsx(S2,{children:ee})]})]}),r.jsx(qM,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":Y?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?r.jsx(_l,{size:20}):Y?r.jsx(ol,{size:16}):r.jsx(Pu,{size:16})})]}),Y&&P&&r.jsx(GM,{children:r.jsx(YM,{children:r.jsx(NR,{milestones:s2(e)})})}),Y&&W&&r.jsxs(QM,{children:[L&&!s&&r.jsx($l,{children:A}),L&&!s&&R.length>0&&r.jsx(uL,{children:R.map((re,se)=>r.jsx(u2,{record:re},se))}),M&&r.jsx(N2,{role:"status","aria-live":"polite",children:r.jsx(LM,{thread:e,onDecide:v})}),I&&r.jsxs(ih,{children:[L&&C&&r.jsx(ro,{variant:"primary",size:"sm",onClick:()=>ae(dl),children:dl}),L&&r.jsx(ro,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),L&&r.jsx($2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{N(!0),x("Other")},children:"Other"}),O&&(k?r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(co,{size:14}),onClick:()=>{w(e),T(!0)},children:"Save as workflow"}))]})]})]})}function fm({text:e,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:e}):r.jsx(oh,{text:e,speed:a,onDone:()=>{d(!0),i==null||i()}})}function y2({thread:e,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:v=!1,onSend:y,replying:x=!1,onStop:w,flat:k=!1}){const T=d||h,[_,N]=g.useState(!1),[L,A]=g.useState(!1),[R]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[C,O]=g.useState(!1),[j,M]=g.useState(!1),S=g.useRef(null);g.useEffect(()=>{var G;j&&((G=S.current)==null||G.focus())},[j]);const I=d||v||C,{actionable:P,onFollowUp:W,prompt:Y,records:q,primaryLabel:K,purple:ee}=ah(e,a),ae=P&&!W?eh[e.id]??e2(Y).map(G=>({label:G})):void 0,re=e.status==="resolved"||e.status==="auto_resolved",se=ee||re,Z=G=>{Jg(G)?s(G):i(e.id,G)},U=P&&!(ae&&ae.length>0)&&q.length>0?q[0]:void 0;if(se&&!P){const G=d2[e.id],E=_||!G,$=d&&!v&&!C;return r.jsxs(kL,{$divided:!0,children:[G&&r.jsx(_L,{children:r.jsx(fm,{text:G,onDone:()=>N(!0),instant:R})}),E&&!$&&r.jsxs(Zo,{$saved:I,"data-saved":I||void 0,children:[r.jsxs(T2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(co,{size:16})}),r.jsx(I2,{children:r.jsx(fm,{text:"Want me to save this as a reusable workflow?",onDone:()=>A(!0),instant:R})})]}),L&&r.jsx(E2,{children:I?r.jsx(ro,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(ro,{variant:"primary",size:"sm",onClick:()=>{O(!0),l(e)},children:"Save workflow"})})]}),E&&$&&r.jsx(b2,{})]})}return r.jsxs(HM,{$flat:k,"data-tone":Ml(e),children:[P&&r.jsxs(k2,{children:[r.jsx($l,{children:Y}),U&&r.jsx(_2,{children:r.jsx(An,{size:"md",src:ua(U.avatarSeed),name:U.title,alt:U.title})})]}),ae&&ae.length>0?r.jsx(w2,{tasks:ae}):null,r.jsxs(ih,{children:[P&&K&&r.jsx(ro,{variant:j?"secondary":"primary",size:"sm",onClick:()=>Z(dl),children:dl}),P&&r.jsx(ro,{variant:j?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),P&&r.jsx($2,{variant:"tertiary",size:"sm","data-selected":j||void 0,onClick:()=>M(!0),children:"Other"}),P&&!W&&r.jsx(bL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":T,"data-on":T||void 0,leadingArtwork:T?r.jsx(Dt,{size:14}):r.jsx(co,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),P&&j&&r.jsx(wL,{children:r.jsx(x2,{ref:S,compact:!0,onSend:G=>y==null?void 0:y(G),working:x,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function NM({thread:e,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:v=!1}){const y=Ml(e),x=n2(e.id)||e.assessment;return r.jsxs(FM,{"data-tone":y,$expanded:i,children:[r.jsxs(BM,{$expanded:i,children:[r.jsx(An,{size:"md",src:Xu(e.id),name:aa[e.id],alt:aa[e.id]??""}),r.jsxs(C2,{children:[r.jsx(j2,{children:r2(e)}),x&&r.jsx(S2,{children:x})]})]}),i&&r.jsx(WM,{children:r.jsx(y2,{flat:!0,thread:e,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:v})})]})}function w2({tasks:e,interactive:a=!0}){return r.jsx(hL,{children:e.map((i,s)=>r.jsx(RM,{task:i,first:s===0,last:s===e.length-1,interactive:a},s))})}function RM({task:e,first:a,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),h=!!e.detail&&s;return r.jsxs(pL,{children:[r.jsx(fL,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(mL,{})}),r.jsxs(gL,{children:[r.jsxs(vL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[r.jsx(M2,{children:e.label}),h&&r.jsx(xL,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(dn,{size:14})})]}),l&&h&&r.jsx(yL,{children:e.detail})]})]})}function MM({steps:e,completed:a}){const[i,s]=g.useState(a?e.length:1);g.useEffect(()=>{if(a){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,a]);const l=e.slice(0,i);return r.jsx(tL,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!a&&h===i-1,v=h===l.length-1;return r.jsxs(rL,{children:[r.jsxs(oL,{children:[r.jsx(cL,{$done:!f,"aria-hidden":"true",children:f?r.jsx(dL,{children:r.jsx(ct,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Dt,{size:16})}),!v&&r.jsx(aL,{})]}),r.jsxs(iL,{$last:v,children:[r.jsx(sL,{children:d.headline}),r.jsx(lL,{children:d.detail})]})]},h)})})}function LM({thread:e,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(KM,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[r.jsx(ct,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(XM,{children:[r.jsx(JM,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(eL,{children:e.assessment})]}),r.jsx(ZM,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(dn,{size:14})})]}),d&&r.jsx(MM,{steps:a2(e.id),completed:i}),!i&&!l&&r.jsx(R2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})]})}function $M({thread:e,onDecide:a}){return r.jsx(R2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})}function Fd(e,a){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:c2(a,bN(e))}}function TM(e,a){const i=c2(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function AM(e,a){const i=s2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[TM(a2(e.id),e.id),...i.slice(0,l)],h=d.length;if(a.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Wf[e.id]??[]).map(k=>Fd(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Ju[e.id],v=[(Wf[e.id]??[]).map(w=>Fd(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>Fd(w,e.id))],y=w=>w===1&&f?f.prompt:i2[e.id]??e.recommendation,x=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return a.forEach((w,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:w}),(v[k]??[]).forEach(T=>x.push({kind:"activity",milestone:T})),x.push({kind:"reply",text:_N(k)})}),{items:x,reasoningCount:h}}function IM({thread:e,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:v=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=AM(e,a),T=l||e.status==="in_progress",[_,N]=g.useState(l?Math.min(1,k):T?k:w.length),[L]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),A=a.length>0||y||x?w.length:k,R=e.status==="in_progress"&&a.length>0,[C,O]=g.useState(0);g.useEffect(()=>{O(0)},[_]),g.useEffect(()=>{if(_>=A)return;const J=w[_],F=w[_-1];if((J==null?void 0:J.kind)==="question"||(J==null?void 0:J.kind)==="message"){const ue=setTimeout(()=>N(fe=>fe+1),0);return()=>clearTimeout(ue)}if((J==null?void 0:J.kind)==="reply"){if(R)return;const ue=setTimeout(()=>N(fe=>fe+1),hm);return()=>clearTimeout(ue)}if(R&&(F==null?void 0:F.kind)!=="message")return;const ie=(F==null?void 0:F.kind)==="message"?hm:Yf,me=setTimeout(()=>N(ue=>ue+1),ie);return()=>clearTimeout(me)},[_,A,R]),g.useEffect(()=>{if(!R)return;const J=F=>{var _e;if(F.key!=="t"&&F.key!=="T"||F.metaKey||F.ctrlKey||F.altKey)return;const ie=F.target instanceof Element?F.target:null;if(ie&&ie.closest('input, textarea, [contenteditable="true"]'))return;const me=w[_-1],ue=(me==null?void 0:me.kind)==="activity"?((_e=me.milestone.progress)==null?void 0:_e.length)??0:0;if((me==null?void 0:me.kind)==="activity"&&C<ue-1){O(ye=>ye+1);return}const fe=w[_];(fe==null?void 0:fe.kind)==="activity"?(N(ye=>ye+1),O(0)):f==null||f()};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[R,_,C,f]);const j=w.slice(0,_),M=[];for(const J of j){if(J.kind==="question"){M.push({type:"question",text:J.text});continue}if(J.kind==="message"){M.push({type:"msg",text:J.text});continue}if(J.kind==="reply"){M.push({type:"reply",text:J.text});continue}const F=M[M.length-1];F&&F.type==="acts"?F.milestones.push(J.milestone):M.push({type:"acts",milestones:[J.milestone]})}const S=_<w.length,I=j.length>0&&j[j.length-1].kind==="activity",P=_>=A,[W,Y]=g.useState(!1);g.useEffect(()=>{if(!(P&&I&&(y||l)&&!x)){Y(!1);return}Y(!0);const J=setTimeout(()=>Y(!1),Yf);return()=>clearTimeout(J)},[P,I,_,y,l,x]);const q=(y||l)&&(S||W)&&I;let K=-1;M.forEach((J,F)=>{J.type==="acts"&&(K=F)});const ee=[];for(const J of w){if(J.kind!=="activity"){ee.push({type:"other"});continue}const F=ee[ee.length-1];F&&F.type==="acts"?F.milestones.push(J.milestone):ee.push({type:"acts",milestones:[J.milestone]})}let ae=-1;ee.forEach((J,F)=>{J.type==="acts"&&(ae=F)});const re=M.findIndex(J=>J.type==="acts"),se=(J,F,ie=F)=>{const me=M[J],ue=(l||e.status==="in_progress")&&J===ae,fe=ee[J],_e=ue&&fe&&fe.type==="acts"?fe.milestones:me.milestones,ye=ue?me.milestones.length-1:void 0;return r.jsx(p2,{milestones:_e,focusIndex:ye,focusBeat:ue&&R?C:void 0,typingIndex:J===ae&&q?me.milestones.length-1:void 0,collapsed:J<K,hideActions:ie,running:ue,showConnectors:J!==re,reasoning:J===re,animateIn:!F&&!L})},Z=[];for(let J=0;J<M.length;J++){const F=M[J];if(F.type==="question"){Z.push({kind:"question",text:F.text});continue}if(F.type==="msg"){Z.push({kind:"msg",text:F.text});continue}if(F.type==="reply"){Z.push({kind:"response",gi:-1,text:F.text});continue}const ie=M[J+1];ie&&ie.type==="reply"?(Z.push({kind:"response",gi:J,text:ie.text}),J++):Z.push({kind:"acts",gi:J})}const G=(l||e.status==="in_progress")&&K>=0||s,E=j.length>0,$=s||y,D=(()=>{for(let J=Z.length-1;J>=0;J--){const F=Z[J];if(F.kind==="acts"||F.kind==="response"&&F.gi>=0)return J}return-1})(),V=Z.findIndex(J=>J.kind==="question"),ne=V===re+1?V:-1,le=J=>J.kind==="acts"?Un(M[J.gi].milestones):J.kind==="response"?Un(J.gi>=0?M[J.gi].milestones:[]):Un([]);return r.jsxs(r.Fragment,{children:[Z.map((J,F)=>{var fe,_e;const ie=F===D?d:null;if(J.kind==="question"){if(F===ne)return null;const ye=Z[F-1],$e=!!ye&&(ye.kind==="acts"||ye.kind==="response")&&F-1!==D,We=F===V;return r.jsxs(Wd,{children:[We?r.jsx(mm,{thread:e,saveWorkflowFlagged:v}):r.jsx(zM,{text:J.text,animate:!L}),$e&&r.jsx(Qo,{time:le(ye)})]},`q${F}`)}if(J.kind==="msg")return r.jsx(OM,{messages:[J.text],animate:!L},`m${F}`);if(J.kind==="acts"){const ye=M[J.gi].milestones,$e=((fe=Z[F+1])==null?void 0:fe.kind)==="question",We=se(J.gi,!1,!!ie||$e),Ve=F===re,Ge=ie||(Ve&&F+1===ne?r.jsx(mm,{thread:e,saveWorkflowFlagged:v}):null);return Ve&&Ge?r.jsxs(PL,{children:[We,Ge,r.jsx(Qo,{time:Un(ye)})]},`a${F}`):r.jsxs(g.Fragment,{children:[We,ie&&r.jsxs(Wd,{children:[ie,r.jsx(Qo,{time:Un(ye)})]})]},`a${F}`)}const me=J.gi>=0,ue=me?M[J.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(mu,{activity:me?se(J.gi,!0):void 0,text:J.text,feedbackTime:ie||((_e=Z[F+1])==null?void 0:_e.kind)==="question"?void 0:Un(ue),showMark:!1,animateIn:!1}),ie&&r.jsxs(Wd,{children:[ie,r.jsx(Qo,{time:Un(ue)})]})]},`resp${F}`)}),r.jsx(EM,{messages:i,replying:s}),h&&xi.createPortal(E?r.jsxs($L,{role:$?"status":"img","aria-label":s?"Ultron is replying":G?"Ultron is working":"Ultron",children:[r.jsxs(IL,{"aria-hidden":"true",children:[r.jsx(gm,{$show:G,children:r.jsx(ct,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(gm,{$show:!G,children:r.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:$?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),G&&r.jsx(AL,{children:s?"Replying…":r.jsx(MR,{})})]}):null,h),D<0&&d]})}function mu({activity:e,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return r.jsxs(EL,{children:[f&&r.jsxs(zL,{$animate:h,children:[e,i,s&&r.jsx(Qo,{time:s})]}),d&&r.jsx(OL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Bd(){return[{icon:"clock",headline:"Reviewed your message"}]}function EM({messages:e,replying:a=!1}){return!e.length&&!a?null:r.jsx(LL,{children:e.map((i,s)=>i.role==="operator"?r.jsx(P2,{children:r.jsx(O2,{children:r.jsx(D2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(mu,{body:r.jsx(PM,{}),feedbackTime:Un(Bd()),showMark:!1},s):r.jsx(mu,{activity:r.jsx(p2,{milestones:Bd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Un(Bd()),showMark:!1},s))})}function PM(){return r.jsx(b2,{})}function b2(){return r.jsxs(Zo,{children:[r.jsxs(T2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(co,{size:16})}),r.jsx(I2,{children:"Workflow saved for future use."})]}),r.jsx(E2,{children:r.jsx(ro,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(_l,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function zM({text:e,animate:a=!0}){return r.jsx(jL,{$animate:a,children:e})}function mm({thread:e,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=ah(e,0),l=eh[e.id]??e2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(SL,{"data-tone":Ml(e),children:[r.jsxs(k2,{children:[r.jsx($l,{children:i}),a?r.jsx(Vn,{content:"Saved as workflow",children:r.jsx(NL,{"aria-label":"Saved as workflow",children:r.jsx(co,{size:18})})}):d&&r.jsx(_2,{children:r.jsx(An,{size:"md",src:ua(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(w2,{tasks:l,interactive:!1}):null]})}function OM({messages:e,animate:a=!0}){return e.length?r.jsx(RL,{children:e.map((i,s)=>r.jsx(P2,{children:r.jsx(O2,{$animate:a,children:r.jsx(D2,{children:i})})},s))}):null}const DM=m.div`
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
`,FM=m.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?Pe`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Pe`
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
`,BM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Pe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,WM=m.div`
  padding: var(--space-4);
`,HM=m.div`
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
  ${e=>e.$flat&&Pe`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,k2=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,_2=m.span`
  flex-shrink: 0;
  display: inline-flex;
`,UM=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,qM=m(Re)`
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
`,VM=m.button`
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
`,C2=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,j2=m.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,S2=m.span`
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
`,GM=m.div`
  overflow: hidden;
`,YM=m.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,QM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,N2=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,KM=m.div`
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
`,ZM=m.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;m(N2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const XM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,JM=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,eL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,tL=m.div`
  display: flex;
  flex-direction: column;
`,nL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,rL=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${nL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,aL=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,iL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,sL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,lL=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,cL=m.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,dL=m.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,R2=m(Re)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,uL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,hL=m.div`
  display: flex;
  flex-direction: column;
`,fl="var(--space-8)",pL=m.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,fL=m.div`
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
  &[data-first]::before { top: calc(${fl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${fl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,mL=m.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${fl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,gL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,vL=m.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${fl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,M2=m.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,xL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,yL=m.p`
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
`,$l=m.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,L2=ke`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,ih=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${L2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wL=m.div`
  animation: ${L2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ro=m(Re)`
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
`,$2=m(Re)`
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
`,bL=m(Re)`
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
`,kL=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,_L=m.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Zo=m.div`
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

  ${e=>!e.$saved&&Pe`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,T2=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,A2=m.span`
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
  ${Zo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Zo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Zo}[data-saved] & { color: var(--color-content-disabled); }
`,I2=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Zo}[data-saved] & { color: var(--color-content-disabled); }
`,E2=m(ih)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,CL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,jL=m.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${CL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SL=m.div`
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
  ${$l} { color: var(--color-content-disabled); }
  ${M2} { color: var(--color-content-disabled); }
`,NL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,RL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,P2=m.div`
  display: flex;
  justify-content: flex-end;
`,sh=ke`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,z2=ke`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,ML=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,O2=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,D2=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,LL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const $L=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${z2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,TL=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,AL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${TL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IL=m.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,gm=m.span`
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
`,EL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Ll}
`,Wd=m.div`
  display: contents;
  ${Ll}
`,PL=m.div`
  display: flex;
  flex-direction: column;
  ${Ll}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,zL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${ML} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,OL=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${z2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;m.div`
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
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;m.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;m.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;const DL={"Coverage Recovery":to,"Fill Optimization":to,Recruiting:to,Users:to,Attendance:$n,"Attendance Recovery":$n,"Time Off":$n,Scheduling:$n,Compliance:bi,Onboarding:no,"Payroll Operations":D0,Invoicing:$r,Reporting:ff,"Marketplace Optimization":ff,Engagement:il,"Autonomous Operations":bl},FL=e=>DL[e]??bl,vm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],BL=2800,WL=200,HL=6,UL=2200,li=520;function qL({onDetectRisk:e,deckActive:a=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const h=g.useRef(new Set),[f,v]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const j=setInterval(()=>l(M=>(M+1)%vm.length),BL);return()=>clearInterval(j)},[]);const x=Math.min(HL,Hs.length),[w,k]=g.useState([]),T=g.useRef(0),_=g.useRef(Hs.filter(j=>!j.risk)),N=g.useRef(Hs.filter(j=>j.risk)),L=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),A=()=>5+Math.floor(Math.random()*5),R=()=>{const j=L.current,M=N.current;if(M.length>0&&j.sinceRisk>=j.gap)return j.sinceRisk=0,j.gap=A(),M[j.risk++%M.length];j.sinceRisk+=1;const S=_.current;return S.length>0?S[j.routine++%S.length]:M[j.risk++%M.length]},C=j=>j.risk?"risk":Math.random()<.28?"action":"none",O=g.useRef(null);return g.useEffect(()=>{if(Hs.length===0){k([]);return}if(a)return;L.current={routine:0,risk:0,sinceRisk:0,gap:A()},T.current=0;const j=Array.from({length:x},()=>{const I=R();return{key:T.current++,event:I,phase:"in",outcome:C(I),resolved:!0}});if(j.length>0){const I=j[j.length-1];I.resolved=!1,O.current={key:I.key,event:I.event,outcome:I.outcome}}else O.current=null;k(j);const M=[],S=setInterval(()=>{var q;const I=R(),P=T.current++,W=C(I),Y=O.current;Y&&Y.outcome==="risk"&&(v(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>v(!1),2800),h.current.has(Y.event.id)||(h.current.add(Y.event.id),(q=d.current)==null||q.call(d,Y.event))),O.current={key:P,event:I,outcome:W},k(K=>{const ee=K.filter(se=>se.phase!=="leaving"),ae=ee.length>=x?ee[0].key:null;return[...K.map(se=>se.key===ae?{...se,phase:"leaving"}:Y&&se.key===Y.key&&!se.resolved?{...se,resolved:!0}:se),{key:P,event:I,phase:"entering",outcome:W,resolved:!1}]}),M.push(setTimeout(()=>{k(K=>K.map(ee=>ee.key===P?{...ee,phase:"in"}:ee))},40)),M.push(setTimeout(()=>{k(K=>K.filter(ee=>ee.phase!=="leaving"))},li))},UL);return()=>{clearInterval(S),M.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,a]),r.jsxs(VL,{children:[r.jsxs(GL,{children:[r.jsx(YL,{children:r.jsx(ct,{mark:"circle",size:WL,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(QL,{children:"Ultron"}),r.jsx(KL,{role:"status","aria-live":"polite",children:r.jsxs(XL,{children:[r.jsx(JL,{children:vm[s]}),r.jsxs(e$,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(n$,{children:i},"deck"):w.length>0&&r.jsx(t$,{"aria-label":"Live event feed",children:w.map(j=>{const M=FL(j.event.capability);return r.jsx(r$,{"data-phase":j.phase,"aria-hidden":j.phase==="leaving"||void 0,children:r.jsx(o$,{children:r.jsxs(a$,{"data-outcome":j.resolved?j.outcome:"pending",children:[r.jsxs(i$,{children:[r.jsx(s$,{"aria-hidden":"true",children:r.jsx(M,{size:16})}),r.jsxs(l$,{children:[r.jsx(p$,{children:j.event.capability}),r.jsx(f$,{children:j.event.title})]})]}),r.jsx(c$,{children:j.resolved?j.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(d$,{children:"Risk detected"})]}):j.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(h$,{children:"Action required"})]}):r.jsx(u$,{children:"No action needed"}):r.jsx(ct,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},j.key)})},"feed")]})}const VL=m.div`
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
`,lh=ke`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,GL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${lh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YL=m.div`
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
`,QL=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,KL=m.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,ZL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,XL=m.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${ZL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,JL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,F2=ke`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,e$=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${F2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,t$=m.div`
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
  animation: ${lh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,n$=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${lh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,r$=m.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${li}ms var(--ease-out, ease),
    opacity ${li}ms var(--ease-out, ease),
    transform ${li}ms var(--ease-out, ease);

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
    transition: opacity ${li}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,o$=m.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,a$=m.div`
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
`,i$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,s$=m.span`
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
`,l$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,c$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;m.span`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;

  & > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-content-tertiary);
    animation: ${F2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const d$=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,u$=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,h$=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,p$=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,f$=m.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,m$=5e3,g$=5,Js=320,v$=e=>e.status==="needs_approval"||e.status==="recommended";function x$({threads:e,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:v,onClose:y}){const[x]=g.useState(()=>e.filter(v$).map((M,S)=>({t:M,index:S})).sort((M,S)=>oa[M.t.severity]-oa[S.t.severity]||M.index-S.index).slice(0,g$).map(({t:M})=>M.id)),[w,k]=g.useState(1),[T,_]=g.useState(new Set),[N,L]=g.useState(new Set),A=g.useRef(new Map);g.useEffect(()=>{if(w>=x.length)return;const M=setTimeout(()=>k(S=>S+1),m$);return()=>clearTimeout(M)},[w,x.length]),g.useEffect(()=>{const M=S=>{S.key==="Escape"&&y()};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[y]),g.useEffect(()=>{const M=A.current;return()=>{M.forEach(S=>clearTimeout(S))}},[]);const R=x.findIndex(M=>!T.has(M));g.useEffect(()=>{if(x.length>0&&R===-1){const M=setTimeout(y,260);return()=>clearTimeout(M)}},[R,x.length,y]);const C=Math.max(w,R+1);g.useEffect(()=>{x.slice(0,C).forEach(M=>v==null?void 0:v(M))},[C]);const O=(M,S)=>{L(P=>new Set(P).add(M.id));const I=setTimeout(()=>{L(P=>{const W=new Set(P);return W.delete(M.id),W}),_(P=>new Set(P).add(M.id)),A.current.delete(M.id),i(M.id,S)},Js);A.current.set(M.id,I)},j=x.length-T.size;return r.jsxs(y$,{role:"region","aria-label":"New cases",children:[r.jsxs(b$,{children:[r.jsx(Ot,{children:"Needs your decision"}),r.jsx(ia,{children:j}),r.jsx(k$,{}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:r.jsx(ui,{size:16})})]}),r.jsx(w$,{children:r.jsx(_$,{children:x.slice(0,C).map((M,S)=>{if(T.has(M))return null;const I=e.find(P=>P.id===M);return I?r.jsx(j$,{"data-exiting":N.has(M)||void 0,children:r.jsx(NM,{thread:I,stage:a[M]??0,expanded:S===R,onAction:(P,W)=>O(I,W),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(M),saved:f.includes(M)})},M):null})})})]})}const y$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,w$=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,b$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,k$=m.div`
  flex: 1;
`,_$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,C$=ke`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,j$=m.div`
  animation: ${C$} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Js}ms var(--ease-out, ease),
    transform ${Js}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Js}ms linear;
    &[data-exiting] { transform: none; }
  }
`,S$={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},xm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},N$=["new","working","done"],R$=280;function M$({threads:e,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:v,onCompleteRun:y,onRefinement:x,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:T,savedWorkflowIds:_,onSend:N,replyingIds:L,onStop:A,onClose:R,onDetectRisk:C,onRevealNew:O}){const[j,M]=g.useState(!1),S=()=>{j||(M(!0),window.setTimeout(()=>{M(!1),R()},R$))},[I,P]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){P(!1);return}const F=ie=>{if(ie.key!=="t"&&ie.key!=="T"||ie.metaKey||ie.ctrlKey||ie.altKey)return;const me=ie.target instanceof Element?ie.target:null;me&&me.closest('input, textarea, [contenteditable="true"]')||P(ue=>!ue)};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[i]);const W=(F,ie)=>(F.t.status==="analyzing"?1:0)-(ie.t.status==="analyzing"?1:0)||oa[F.t.severity]-oa[ie.t.severity]||F.index-ie.index,Y=e.map((F,ie)=>({t:F,index:ie})).filter(({t:F})=>S$[i].includes(F.status)).sort(W).map(({t:F})=>F.id),[q,K]=g.useState(()=>h??null),ee=g.useRef({}),ae=g.useRef(null),re=F=>{var ie;F==="Other"&&((ie=ae.current)==null||ie.focus()),x(F)},se=g.useRef(null),Z=g.useRef(null),[U,G]=g.useState(null),E=g.useRef(void 0);g.useEffect(()=>{var F;if(E.current===void 0){E.current=h;return}!h||h===E.current||(E.current=h,K(h),(F=ee.current[h])==null||F.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const $=N$.includes(i),D=$?h&&Y.includes(h)?h:Y[0]??null:null;g.useEffect(()=>{var Fe;const F=se.current,ie=Z.current;if(!F||!ie)return;const ue=((Fe=window.matchMedia)==null?void 0:Fe.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",fe=160;let _e=!0,ye=F.scrollHeight;const $e=()=>{_e=F.scrollHeight-F.scrollTop-F.clientHeight<=fe};F.addEventListener("scroll",$e,{passive:!0});let We=0;const Ve=()=>{We=performance.now()};F.addEventListener("pointerdown",Ve,{passive:!0});const Ge=new ResizeObserver(()=>{const Qe=F.scrollHeight,Ye=performance.now()-We<500;Qe>ye+1&&_e&&!Ye&&F.scrollTo({top:Qe,behavior:ue}),ye=Qe});return Ge.observe(ie),()=>{F.removeEventListener("scroll",$e),F.removeEventListener("pointerdown",Ve),Ge.disconnect()}},[D,i]),g.useEffect(()=>{if(!$||!D)return;const F=se.current;if(!F)return;const ie=()=>F.scrollTo({top:F.scrollHeight,behavior:"auto"}),me=requestAnimationFrame(ie),ue=[80,240,480].map(fe=>window.setTimeout(ie,fe));return()=>{cancelAnimationFrame(me),ue.forEach(clearTimeout)}},[D,$]);const V=D?e.find(F=>F.id===D)??null:null,ne=!!V&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(V.status)||Xg(V)),le=ne&&V?V:null,J=!(ne&&V&&["needs_approval","recommended","unresolved","monitoring"].includes(V.status))||!!(V!=null&&V.analysisResult);return i==="live"?r.jsx(ym,{$static:!0,children:r.jsx(qL,{onDetectRisk:C,deckActive:I,deck:I?r.jsx(x$,{threads:e,stageById:a,onAction:v,onRefinement:re,onSaveWorkflow:w,onToggleSaveWorkflow:T,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:O,onClose:()=>P(!1)}):null})},"live"):r.jsxs(ym,{$closing:j,children:[r.jsx(T$,{ref:se,children:$?r.jsx(wm,{ref:Z,children:D===null?r.jsx(bm,{role:"status",children:xm[i]}):(()=>{const F=e.find($e=>$e.id===D);if(!F)return null;const ie=F.status==="analyzing",me=F.status==="resolved"||F.status==="auto_resolved",ue=F.status==="in_progress",fe=F.status==="needs_approval"||F.status==="recommended",_e=F.status==="monitoring",ye=F.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(z$,{children:r.jsx(pm,{thread:F,stage:a[F.id]??0,expanded:ue?!1:J,detachActionable:ne,detachAnalyzing:ie,detachTrail:me||ye,onToggle:()=>{},onClose:S,onDecide:f,onAction:v,onRefinement:re,onSaveWorkflow:w},F.id)}),(ie||fe||ue||me||_e||ye)&&r.jsx(IM,{thread:F,outbound:l[F.id]??[],chat:d[F.id]??[],replying:L.includes(F.id),analyzing:ie,footSlot:U,onCompleteRun:()=>y(F.id),saveWorkflowFlagged:k.includes(F.id)||_.includes(F.id),actionCard:le&&le.id===F.id?r.jsx(y2,{thread:le,stage:a[le.id]??0,onAction:v,onRefinement:re,onSaveWorkflow:w,saveIntent:k.includes(le.id),onToggleSaveWorkflow:T,saved:_.includes(le.id),savedConversationally:(d[le.id]??[]).some($e=>$e.kind==="workflow_saved"),onSend:$e=>N(le.id,$e),replying:L.includes(le.id),onStop:()=>A(le.id)},`action-${le.id}`):void 0},F.id)]})})()}):r.jsx(wm,{ref:Z,children:Y.length===0?r.jsx(bm,{role:"status",children:xm[i]}):Y.map(F=>{const ie=e.find(me=>me.id===F);return ie?r.jsx(P$,{ref:me=>{ee.current[F]=me},children:r.jsx(pm,{thread:ie,stage:a[F]??0,expanded:q===F,onToggle:()=>K(me=>me===F?null:F),onDecide:f,onAction:v,onRefinement:x,onSaveWorkflow:w})},F):null})})}),$&&D&&V&&r.jsx(A$,{children:r.jsxs(I$,{children:[r.jsx(E$,{ref:G}),V.status==="analyzing"&&!s.includes(V.id)&&r.jsx($M,{thread:V,onDecide:f}),r.jsx(x2,{ref:ae,onSend:F=>N(D,F),working:L.includes(D),onStop:()=>A(D),placeholder:qS(V.status,L.includes(D))},`composer-${D}`)]})})]},"feed")}const L$=ke`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,$$=ke`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,ym=m.div`
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

  ${e=>!e.$static&&!e.$closing&&Pe`
    animation: ${$$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Pe`
    animation: ${L$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,T$=m.div`
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
`,A$=m.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,I$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,E$=m.div`
  display: flex;
  &:empty { display: none; }
`,wm=m.div`
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
`,P$=m.div`
  scroll-margin-top: var(--space-5);
`,z$=m.div`
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
`,bm=m.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function O$({messages:e,replying:a,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,a]);const h=s.trim().length>0&&!a,f=e.length===0,v=()=>{const y=s.trim();!y||a||(i(y),l(""))};return r.jsxs(D$,{children:[r.jsx(F$,{children:f?r.jsxs(B$,{children:[r.jsx(W$,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(H$,{children:"New page"}),r.jsx(U$,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(q$,{children:[e.map((y,x)=>r.jsx(km,{"data-from":y.role,children:r.jsx(V$,{"data-from":y.role,children:y.text})},x)),a&&r.jsx(km,{"data-from":"ultron",children:r.jsxs(Y$,{"aria-label":"Ultron is replying",children:[r.jsx(Hd,{}),r.jsx(Hd,{}),r.jsx(Hd,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(Q$,{children:r.jsxs(K$,{onSubmit:y=>{y.preventDefault(),v()},children:[r.jsx(Z$,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),v())}}),r.jsx(X$,{children:r.jsx(sa,{state:h?"ready":"disabled-invalid",onSend:v})})]})})]})}const D$=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,F$=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,B$=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,W$=m.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,H$=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,U$=m.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,q$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,km=m.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,V$=m.div`
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
`,G$=ke`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,Y$=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Hd=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${G$} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Q$=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,K$=m.form`
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
`,Z$=m.textarea`
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
`,X$=m.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,J$={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function _m(e,a){const i=J$[e];return i?a==="done"?i.done:a==="new"?i.new:i.working:e}const gu=32;function eT({onNew:e}){return r.jsxs(tT,{children:[r.jsx(nT,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:gu,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(rT,{children:"Ultron"}),r.jsx(oT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),e==null||e()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),e==null||e())},children:r.jsx(uo,{size:16})})]})}const tT=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,nT=m.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${gu}px;
  height: ${gu}px;
`,rT=m.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,oT=m.span`
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
`,aT=45;function iT({text:e,className:a}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},aT);return()=>clearInterval(f)},[e]);const l=i>=e.length;return r.jsxs(sT,{className:a,children:[e.slice(0,i),!l&&r.jsx(cT,{"aria-hidden":"true",children:"|"})]})}const sT=m.span`
  white-space: nowrap;
`,lT=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,cT=m.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${lT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Ud=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function dT(){const e=g.useMemo(()=>["All",...Array.from(new Set(Ud.map(l=>l.tag)))],[]),[a,i]=g.useState("All"),s=a==="All"?Ud:Ud.filter(l=>l.tag===a);return r.jsx(uT,{children:r.jsxs(hT,{children:[r.jsxs(pT,{children:[r.jsx(ct,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(fT,{children:[r.jsx(mT,{children:"Memory"}),r.jsx(gT,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(vT,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>r.jsx(xT,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),r.jsx(yT,{children:s.map((l,d)=>r.jsx(wT,{children:r.jsxs(bT,{children:[r.jsx(kT,{children:l.title}),r.jsx(_T,{children:l.detail})]})},d))})]})})}const uT=m.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,hT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,pT=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,fT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,mT=m.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,gT=m.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,vT=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,xT=m.button`
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
`,yT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,wT=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,bT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,kT=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,_T=m.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;m.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;m.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const vu=[{id:"employees",label:"Employees",icon:r.jsx(to,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx($n,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(Iu,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(no,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(bi,{size:16})}];m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;m.span`
  color: var(--color-content-secondary);
`;function CT({collectionId:e}){const a=vu.find(i=>i.id===e)??vu[0];return r.jsxs(jT,{children:[r.jsxs(ST,{children:[r.jsx(NT,{children:a.label}),r.jsx(ia,{children:"Account database"})]}),r.jsxs(RT,{role:"status",children:[r.jsx(MT,{"aria-hidden":"true",children:r.jsx(P0,{size:24})}),r.jsxs(LT,{children:[a.label," — demo stub"]}),r.jsxs($T,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const jT=m.div`
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
`,ST=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,NT=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,RT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,MT=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,LT=m.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,$T=m.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Us=72,TT=240,AT=640,IT=.13,Cm=.58;function Tt(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function ET(e){return e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)}function jm(e,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),v=parseInt(f.length===3?f.split("").map(y=>y+y).join(""):f,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const PT=e=>{const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function zT({links:e=0}){const a=g.useRef(null),i=g.useRef(0),s=g.useRef(e);return s.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let f=0,v=0;const y=()=>{f=l.clientWidth,v=l.clientHeight,l.width=Math.max(2,Math.round(f*h)),l.height=Math.max(2,Math.round(v*h)),d.setTransform(h,0,0,h,0,0)};y();const x=new ResizeObserver(y);x.observe(l);const w=jm(d,l,"--color-bg-primary","255,255,255"),k=PT(w)<.5,T=jm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Us},(j,M)=>{const S=M%3===0,I=S?1-.5*Math.pow(Tt(M*3.1),1.6):Tt(M*3.1),P=S?.5*Math.pow(Tt(M*5.7),1.6):Tt(M*5.7);return{bx:I,by:P,vx:(Tt(M*7.3)-.5)*.008,vy:(Tt(M*9.9)-.5)*.008,wA:6+Tt(M*4.7)*10,wS:.25+Tt(M*6.1)*.5,wP:Tt(M*8.2)*6.2832,r:.8+Tt(M*2.3)*1.6,twS:.8+Tt(M)*1.4,twP:Tt(M*11.4)*6.2832}}),N=(j,M)=>{const S=((j.bx+j.vx*M)%1+1)%1,I=((j.by+j.vy*M)%1+1)%1,P=S-.5,W=Math.abs(P)*2,Y=W<1e-4?1:(Cm+(1-Cm)*W)/W;return{x:(.5+P*Y)*f+Math.cos(M*j.wS+j.wP)*j.wA,y:I*v+Math.sin(M*j.wS*.8+j.wP)*j.wA}},L=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),A=j=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current);const M=i.current;d.clearRect(0,0,f,v);const S=_.map(I=>N(I,j));if(M>.01){d.lineWidth=1,d.lineCap="round";for(let I=0;I<Us;I++)for(let P=I+1;P<Us;P++){if(Tt(I*97.7+P*13.3)>M*.5)continue;const Y=S[I],q=S[P],K=q.x-Y.x,ee=q.y-Y.y,ae=Math.hypot(K,ee),re=Tt(I*5.1+P*23.9)<IT,se=re?AT:TT;if(ae>se||ae<1)continue;const Z=Math.abs(K)/ae;if(Z<.55)continue;const U=7+Tt(I*3.3+P*41.1)*6,G=L?.5:(j/U+Tt(I*17.9+P*7.7))%1;let E=1,$=1;if(G>=.78)continue;G<.3?E=ET(G/.3):G>.62&&($=1-(G-.62)/.16);const D=1-ae/se,V=re?D:D*D,ne=(k?.45:.34)*(re?.62:1),le=V*ne*M*$*Z;if(le<.01||E<.02)continue;const J=Y.x+K*E,F=Y.y+ee*E,ie=d.createLinearGradient(Y.x,Y.y,J,F);ie.addColorStop(0,"rgba("+T+",0)"),ie.addColorStop(1,"rgba("+T+","+le+")"),d.strokeStyle=ie,d.beginPath(),d.moveTo(Y.x,Y.y),d.lineTo(J,F),d.stroke(),E<1&&(d.fillStyle="rgba("+T+","+Math.min(1,le*2.4)+")",d.beginPath(),d.arc(J,F,1.4,0,6.2832),d.fill())}}for(let I=0;I<Us;I++){const P=_[I],W=.35+.65*(.5+.5*Math.sin(j*P.twS+P.twP));d.fillStyle="rgba("+T+","+W*(k?.55:.42)+")",d.beginPath(),d.arc(S[I].x,S[I].y,P.r*(.7+.3*W),0,6.2832),d.fill()}};if(L)return i.current=s.current,A(1.15),()=>x.disconnect();A(1.15);let R=0;const C=performance.now(),O=j=>{A(1.15+(j-C)/1e3),R=requestAnimationFrame(O)};return R=requestAnimationFrame(O),()=>{cancelAnimationFrame(R),x.disconnect()}},[]),r.jsx(OT,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const OT=m.div`
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
`,DT=m.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,qs=m.div`
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
`,Sm=.025,ei=560,ti=480,FT=260,BT=.08,WT=.18,HT=.06,UT=350,qT=9,el=5,Nm=360,VT=560,GT=.055,YT=.03,ni=320,QT=.84,xu=el+1,tl=[];for(let e=0;e<xu;e++)for(let a=e+1;a<xu;a++)tl.push([e,a]);const Rm=(e,a)=>(e*qT+80*Math.sin(e*.23+a)+50*Math.sin(e*.071+a*1.7)+720)%360,Vs=(e,a)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+a)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Mm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),qd=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function KT(){const e=g.useRef(null),a=g.useRef(null),i=g.useRef([]),s=g.useRef([]),l=g.useRef([]);return g.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),h=e.current,f=a.current;if(!h||!f)return;const v=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,x=Array.from({length:el},()=>({size:Nm+Math.random()*(VT-Nm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));x.forEach((S,I)=>{const P=s.current[I];P&&(P.style.width=`${S.size.toFixed(0)}px`,P.style.height=`${S.size.toFixed(0)}px`)});const w=(S,I,P)=>{S.style.setProperty("--glow-a",`hsl(${Rm(I,v[0]+P).toFixed(1)} 85% 62% / 0.9)`),S.style.setProperty("--glow-b",`hsl(${Rm(I,v[1]+P*1.3).toFixed(1)} 85% 58% / 0.8)`),S.style.setProperty("--glow-cx",`${(35+14*Math.sin(I*.4+v[2]+P)).toFixed(1)}%`),S.style.setProperty("--glow-cy",`${(35+14*Math.cos(I*.31+v[3]+P)).toFixed(1)}%`)},k=(S,I,P)=>{const W=new Array(xu).fill(null);for(let Y=0;Y<el;Y++){const q=x[Y],K=s.current[Y];if(!K)continue;const ee=I*(.5+q.ax*(.68*Math.sin(S*q.sx1+q.px1)+.32*Math.sin(S*q.sx2+q.px2))),ae=P*(.5+q.ay*(.68*Math.sin(S*q.sy1+q.py1)+.32*Math.sin(S*q.sy2+q.py2))),re=GT+YT*(.5+.5*Math.sin(S*q.bs+q.bp));K.style.transform=`translate(${(ee-q.size/2).toFixed(1)}px, ${(ae-q.size/2).toFixed(1)}px)`,K.style.opacity=re.toFixed(3),K.style.borderRadius=Vs(S,q.mp),w(K,S,q.cs),W[Y+1]={x:ee,y:ae,size:q.size,o:re}}return W},T=(S,I)=>{for(let P=0;P<tl.length;P++){const W=l.current[P];if(!W)continue;const[Y,q]=tl[P],K=I[Y],ee=I[q],ae=K&&ee?Math.min(K.o,ee.o):0;if(!K||!ee||ae<=.005){W.style.opacity="0";continue}const re=ee.x-K.x,se=ee.y-K.y,Z=Math.hypot(re,se),U=(K.size+ee.size)/2*QT,G=Mm(1-Z/U);if(G<=.001){W.style.opacity="0";continue}const E=Math.max(.35,Z*.9/ni),$=.3+.4*G;W.style.transform=`translate(${((K.x+ee.x)/2-ni/2).toFixed(1)}px, ${((K.y+ee.y)/2-ni/2).toFixed(1)}px) rotate(${Math.atan2(se,re).toFixed(3)}rad) scale(${E.toFixed(3)}, ${$.toFixed(3)})`,W.style.opacity=(ae*G).toFixed(3),W.style.borderRadius=Vs(S,1.1*(P+1)),w(W,S,.23*(P+1))}};if(d){const I=k(2.4,h.clientWidth,h.clientHeight);T(2.4,I);return}let _=null,N=null,L=-1/0,A=0,R=0,C=0;const O=S=>{const I=h.getBoundingClientRect(),P=_===null;_=S.clientX-I.left,N=S.clientY-I.top,L=S.timeStamp,P&&(A=_,R=N)};window.addEventListener("pointermove",O,{passive:!0});let j=0;const M=S=>{j=requestAnimationFrame(M);const I=S/1e3,P=h.clientWidth,W=h.clientHeight,Y=k(I,P,W);if(_!==null&&N!==null){A+=(_-A)*Sm,R+=(N-R)*Sm;const q=S-L<UT?WT:BT;C+=(q-C)*HT,f.style.transform=`translate(${A-ei/2}px, ${R-ei/2}px)`,f.style.opacity=C.toFixed(3),f.style.borderRadius=Vs(I,0),w(f,I,0),Y[0]={x:A,y:R,size:ei,o:C};for(let K=0;K<qd.length;K++){const ee=i.current[K];if(!ee)continue;const{nx:ae,ny:re}=qd[K],se=ae<0?A:ae>0?P-A:re<0?R:W-R,Z=Mm(1-se/FT);if(Z<=.001){ee.style.opacity="0";continue}const U=ae!==0?ae<0?0:P:A,G=re!==0?re<0?0:W:R,E=ti*(.5-.22*Z),$=.55+.45*Z;ee.style.transform=`translate(${U+ae*E-ti/2}px, ${G+re*E-ti/2}px) scale(${$.toFixed(3)})`,ee.style.opacity=(C*Z).toFixed(3),ee.style.borderRadius=Vs(I,.9*(K+1)),w(ee,I,.35*(K+1))}}T(I,Y)};return j=requestAnimationFrame(M),()=>{cancelAnimationFrame(j),window.removeEventListener("pointermove",O)}},[]),r.jsxs(DT,{ref:e,"aria-hidden":"true",children:[tl.map((d,h)=>r.jsx(qs,{ref:f=>{l.current[h]=f},style:{width:ni,height:ni,opacity:0}},`bridge-${h}`)),Array.from({length:el},(d,h)=>r.jsx(qs,{ref:f=>{s.current[h]=f},style:{opacity:0}},`ambient-${h}`)),qd.map((d,h)=>r.jsx(qs,{ref:f=>{i.current[h]=f},style:{width:ti,height:ti,opacity:0}},h)),r.jsx(qs,{ref:a,style:{width:ei,height:ei,opacity:0}})]})}function ZT({size:e=22,className:a}){return r.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const ir=Pe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Si=Pe`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Pe`
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
`;const XT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",JT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",eA="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",tA="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",nA="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",rA="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",oA="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",aA=560,B2=320,un="cubic-bezier(0.22, 1, 0.36, 1)",W2=140,ri=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:Au,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:zu,title:"1099",caption:"Independent contractors."},{id:"both",icon:O0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:$n,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:D0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:Q0,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:al,title:"One location",caption:"A single site."},{id:"multi",icon:Eu,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Iu,title:"Client sites",caption:"Out at client locations."}]}];function iA({onComplete:e}){const[a,i]=g.useState("landing"),[s,l]=g.useState({}),[d,h]=g.useState(!1),[f,v]=g.useState(!1),y=fo(),x=g.useRef(null),w=g.useCallback(P=>{x.current===null&&(v(!0),x.current=window.setTimeout(()=>{P(),v(!1),x.current=null},y?0:B2))},[y]);g.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),T=()=>w(()=>i("auth")),_=()=>w(()=>i("workplace")),N=P=>{l(W=>({...W,...P})),h(!0),w(()=>i("loading"))},L=P=>{l(W=>({...W,...P})),w(()=>i(s.companyWebsite?"roster":"questions"))},A=P=>{l(W=>({...W,...P})),w(()=>i("roster"))},R=P=>{P&&l(W=>({...W,rosterFile:P})),w(()=>i("schedule"))},C=P=>e({...s,...P?{scheduleFile:P}:{}}),O=d?1:a==="landing"?0:.4,j=a==="roster"||a==="schedule"?2:d?1:0,[M,S]=g.useState(!1),I=a==="loading"&&!!s.companyWebsite||M;return r.jsxs(AA,{children:[r.jsx(zT,{links:O}),r.jsx(KT,{}),r.jsx(IA,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:r.jsx(ZT,{size:22})}),r.jsx(EA,{children:r.jsxs(PA,{children:[a!=="landing"&&r.jsx(zA,{children:r.jsx(q2,{children:r.jsx(ct,{mark:I?"lines":"circle",size:W2,tone:"auto",state:"active",...I?{}:{streamCount:j},"aria-label":"Ultron"})})}),r.jsxs(DA,{$exiting:f,children:[a==="landing"&&r.jsx(mA,{onNext:T}),a==="auth"&&r.jsx(an,{children:r.jsx(gA,{onNext:_})}),a==="workplace"&&r.jsx(an,{children:r.jsx(yA,{onAnswer:N})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(wA,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:L}),a==="questions"&&r.jsx(CA,{onComplete:A}),a==="roster"&&r.jsx(NA,{answers:s,onDone:R,onProcessingChange:S}),a==="schedule"&&r.jsx(LA,{answers:s,onDone:C,onProcessingChange:S})]})]})})]})}const sA="Lead the work that matters.",lA="Show us your company and we'll set up the work.",cA=41e3,Lm=[{name:"Levi's Stadium",src:XT},{name:"ProCare HR",src:JT},{name:"Florida Panthers",src:eA},{name:"Express Healthcare",src:tA},{name:"ModSquad",src:nA},{name:"Titan Medical Group",src:rA},{name:"United Staffing Solutions",src:oA}],$m=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure"}],dA=6e3;function uA(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function hA(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function pA(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const fA=[{id:"google",label:"Continue with Google",mark:uA},{id:"microsoft",label:"Continue with Microsoft",mark:hA},{id:"apple",label:"Continue with Apple",mark:pA}];function H2(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function mA({onNext:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(""),[d,h]=g.useState(null),f=g.useRef(null),v=fo();return g.useEffect(()=>{const y=window.setTimeout(()=>i(!0),v?0:500);return()=>window.clearTimeout(y)},[v]),g.useEffect(()=>{var y;d&&((y=f.current)==null||y.focus())},[d]),r.jsxs(FA,{children:[r.jsx(BA,{children:r.jsxs(WA,{children:[r.jsx(q2,{children:r.jsx(ct,{mark:"circle",size:W2,tone:"auto",state:"active",streamCount:0,"aria-label":"Ultron"})}),r.jsx(wI,{children:sA}),a&&r.jsxs(HA,{children:[r.jsx(bI,{children:lA}),r.jsx(V2,{"aria-label":"Get started",children:r.jsxs(YA,{noValidate:!0,onSubmit:y=>{y.preventDefault(),s.trim()===""||H2(s)?e():h({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(Vn,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:r.jsx(G2,{ref:f,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:y=>{l(y.target.value),d&&h(null)}})}),r.jsx(QA,{variant:"primary",size:"lg",type:"submit",children:"Get started free"}),r.jsx(Y2,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})})]})]})}),a&&r.jsx(vA,{})]})}function gA({onNext:e}){const[a,i]=g.useState(""),[s,l]=g.useState(null),d=g.useRef(null);return g.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),r.jsxs(r.Fragment,{children:[r.jsx(sn,{children:"Create your account"}),r.jsx(ln,{children:"Continue with your work account, or log in with email."}),r.jsxs(KA,{"aria-label":"Create your account",children:[r.jsx(UA,{children:fA.map(h=>{const f=h.mark;return r.jsx(qA,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(f,{}),onClick:e,children:h.label},h.id)})}),r.jsx(VA,{"aria-hidden":"true",children:r.jsx(GA,{children:"or log in with email"})}),r.jsxs(ZA,{noValidate:!0,onSubmit:h=>{h.preventDefault(),a.trim()===""||H2(a)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(XA,{children:r.jsx(Vn,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:r.jsx(G2,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:a,onChange:h=>{i(h.target.value),s&&l(null)}})})}),r.jsx(JA,{variant:"primary",size:"md",type:"submit",iconOnly:!0,"aria-label":"Continue",children:r.jsx(rl,{size:16})})]}),r.jsx(Y2,{children:"Creating an account means you agree to Teambridge's Terms and Privacy Policy."})]})]})}function vA(){const[e,a]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>a(l=>(l+1)%$m.length),dA);return()=>clearInterval(s)},[]);const i=$m[e];return r.jsx(eI,{children:r.jsxs(tI,{children:[r.jsx(xA,{}),r.jsxs(fI,{children:[r.jsx(mI,{children:`“${i.quote}”`}),r.jsxs(gI,{children:[r.jsx(An,{name:i.name,color:i.avatarColor,size:"sm"}),r.jsxs(vI,{children:[r.jsx(xI,{children:i.name}),r.jsx(yI,{children:`${i.role} · ${i.org}`})]})]})]},e),r.jsxs(cI,{children:[r.jsx(dI,{children:"Trusted by frontline operators"}),r.jsxs(hI,{"aria-label":"Operators using Teambridge",children:[r.jsx(Em,{children:Lm.map(s=>r.jsx(Pm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),r.jsx(Em,{"aria-hidden":"true",children:Lm.map(s=>r.jsx(Pm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function xA(){const e=TA(cA,1600);return r.jsxs(nI,{children:[r.jsxs(rI,{children:[r.jsx(aI,{"aria-hidden":"true"}),r.jsx(iI,{children:"Ultron Index · Live"})]}),r.jsx(sI,{children:e.toLocaleString("en-US")}),r.jsx(lI,{children:"pieces of work Ultron performed this week"})]})}function yA({onAnswer:e}){const[a,i]=g.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&e($A(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(sn,{children:"Where do you work?"}),r.jsx(CI,{children:"Paste your company website and I'll get a head start on turning things on."}),r.jsx(rv,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(ov,{children:[r.jsx(RE,{"aria-hidden":"true",children:r.jsx(V0,{size:18})}),r.jsx(av,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(iv,{children:r.jsx(sa,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(ME,{children:r.jsx(gl,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead."})})]})}const Vd=["Turning on scheduling","Setting up pay","Activating compliance","Handing off the busywork"],U2=820;function wA({website:e,failedWebsite:a,onDone:i}){return e?r.jsx(bA,{website:e,onDone:i}):r.jsx(_A,{failedWebsite:a,onDone:i})}function bA({website:e,onDone:a}){const i=fo(),{name:s}=ch(e),l=Vd.length,[d,h]=g.useState(1),[f,v]=g.useState(!1);g.useEffect(()=>{if(f){const w=window.setTimeout(()=>a({}),i?400:1600);return()=>window.clearTimeout(w)}const x=window.setTimeout(()=>d>=l?v(!0):h(w=>w+1),i?140:U2);return()=>window.clearTimeout(x)},[d,f,i]);const y=f?"All set.":Vd[d-1];return r.jsxs(an,{children:[r.jsx(sn,{children:`Turning on ${s}`}),r.jsx(ln,{children:"Hang tight — I'm getting your workspace ready."}),r.jsxs(TI,{role:"status","aria-live":"polite",children:[r.jsx(AI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":l,"aria-valuenow":f?l:d-1,"aria-label":`Step ${Math.min(d,l)} of ${l}`,$complete:f,children:Vd.map((x,w)=>{const k=f||w+1<d?"done":w+1===d?"working":"pending";return r.jsx(II,{"data-status":k,children:k!=="pending"&&r.jsx(EI,{$working:k==="working"})},x)})}),r.jsxs(PI,{children:[r.jsxs(ml,{$working:!f,children:[f&&r.jsx(yn,{size:14}),y]},y),r.jsx(zI,{children:`${f?l:d} of ${l}`})]})]})]})}const kA=[{icon:G0,label:"Travel nurses"},{icon:Tu,label:"Event staff"},{icon:Ru,label:"Security guards"},{icon:F0,label:"Warehouse temps"}];function _A({failedWebsite:e,onDone:a}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&a({workforceType:h})};return r.jsxs(an,{children:[e&&r.jsx(OI,{children:"No problem — let's set it up together."}),r.jsx(sn,{children:"What kind of workforce are you running?"}),r.jsx(ln,{children:"Say it in your own words — or grab one of these."}),r.jsx(jI,{children:kA.map(({icon:h,label:f})=>r.jsxs(SI,{type:"button",onClick:()=>a({workforceType:f}),children:[r.jsx(h,{size:16}),f]},f))}),r.jsx(rv,{onSubmit:h=>{h.preventDefault(),d()},children:r.jsxs(ov,{children:[r.jsx(av,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),r.jsx(iv,{children:r.jsx(sa,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function CA({onComplete:e}){const a=fo(),[i,s]=g.useState(0),l=g.useRef({}),d=ri[i],h=f=>{l.current={...l.current,[d.key]:f.title};const v=i+1;v>=ri.length?e(l.current):s(v)};return r.jsxs(an,{children:[r.jsx(kE,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ri.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ri.length}`,children:ri.map((f,v)=>r.jsx(_E,{"data-filled":v<=i||void 0},f.key))}),r.jsx(sn,{children:d.prompt}),r.jsx(ln,{children:d.sub}),r.jsx(CE,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,v)=>{const y=f.icon;return r.jsxs(jE,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${v*70}ms`},onClick:()=>h(f),children:[r.jsx(Q2,{"aria-hidden":"true",children:r.jsx(y,{size:20})}),r.jsxs(SE,{children:[r.jsx(NI,{children:f.title}),r.jsx(RI,{children:f.caption})]})]},f.id)})})]},d.key)}const Tm=84,oi=81,Am=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],jA=48,SA=12;function NA({answers:e,onDone:a,onProcessingChange:i}){var O;const s=fo(),[l,d]=g.useState("intake"),[h,f]=g.useState(null),[v,y]=g.useState([]),[x,w]=g.useState(!1),[k,T]=g.useState(!1),_=g.useRef(!1),N=((O=e.workforceType)==null?void 0:O.trim())||(e.companyWebsite?ch(e.companyWebsite).name:"")||"";g.useEffect(()=>{i==null||i(l==="reading"||l==="sampling")},[l,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const L=g.useCallback(j=>{_.current||(_.current=!0,f(j),d("reading"),window.setTimeout(()=>{d("mapped"),_.current=!1},s?300:1300))},[s]);g.useEffect(()=>{if(l!=="intake")return;const j=M=>{var P,W,Y;const S=(W=(P=M.clipboardData)==null?void 0:P.files)==null?void 0:W[0];if(S){M.preventDefault(),L({name:S.name,type:S.type});return}(((Y=M.clipboardData)==null?void 0:Y.getData("text"))??"").trim().length>12&&(M.preventDefault(),L({name:"Pasted roster",type:"text/plain"}))};return window.addEventListener("paste",j),()=>window.removeEventListener("paste",j)},[l,L]);const A=(j,M)=>{_.current||(_.current=!0,w(M),d("sampling"),y(Ku(N,j)),window.setTimeout(()=>{d("sampled"),_.current=!1},s?300:1200))};if(l==="intake")return r.jsxs(an,{children:[r.jsx(sn,{children:"Upload your roster"}),r.jsx(ln,{children:"Drop in your team roster and I'll bring your people in for you."}),r.jsx(K2,{children:r.jsx(Du,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",state:"empty",title:"Choose your roster or drag & drop it here.",description:"Spreadsheet, PDF, or a photo of a printed one.",onFileSelect:j=>L({name:j.name,type:j.type})})}),r.jsxs(DI,{children:[r.jsx(FI,{type:"button",onClick:()=>A(jA,!1),children:"No roster handy? Start with sample teammates"}),r.jsx(gl,{type:"button",onClick:()=>a(null),children:"Skip for now"})]})]});if(l==="reading")return r.jsxs(an,{children:[r.jsx(sn,{children:"Got the file"}),r.jsxs(ln,{children:["Reading ",(h==null?void 0:h.name)??"your roster"," — one sec."]}),r.jsxs(wu,{role:"status","aria-live":"polite",children:[r.jsx(bu,{"aria-hidden":"true"}),r.jsx(ml,{$working:!0,children:"Bringing your people in"})]})]});if(l==="mapped"){const j=Ef.slice(0,6),M=oi-j.length;return r.jsxs(an,{children:[r.jsx(sn,{children:"Here's what came in"}),r.jsxs(ln,{children:["Got it — ",Tm," people, licenses, home locations. 3 columns we didn't recognize; we kept them so nothing's lost."]}),r.jsxs(Om,{$padTop:!0,children:[r.jsxs(WI,{children:[r.jsxs(HI,{children:[oi," ",r.jsxs(UI,{children:["/",Tm]})]}),r.jsxs(qI,{children:[r.jsx(yn,{size:16})," imported clean"]})]}),r.jsxs(Dm,{"aria-label":"Imported teammates",children:[j.map((S,I)=>r.jsxs(Fm,{$i:I,children:[r.jsx(Bm,{"aria-hidden":"true",children:Im(S.name)}),r.jsxs(Wm,{children:[r.jsx(Hm,{children:S.name}),r.jsxs(Um,{children:[S.role," · ",S.location," · ",S.tenure]})]}),S.credentialStatus==="expiring"?r.jsxs(on,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[S.credential," · ",S.expiresInDays,"d"]}):r.jsx(on,{size:"sm",variant:"subtle",color:"green",children:S.credential})]},S.name)),r.jsxs(qm,{children:["+ ",M," more imported clean"]})]}),r.jsxs(VI,{children:[r.jsxs(X2,{type:"button","aria-expanded":k,"aria-controls":"roster-review-rows",onClick:()=>T(S=>!S),children:[r.jsxs(J2,{children:[Am.length," rows kept for review"]}),r.jsxs(ev,{children:[r.jsx(tv,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsx(nv,{$open:k,"aria-hidden":"true",children:r.jsx(In,{size:16})})]})]}),k&&r.jsx(GI,{id:"roster-review-rows","aria-label":"Rows held for review",children:Am.map(S=>r.jsxs(YI,{children:[r.jsx(QI,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsxs(KI,{children:[r.jsx(ZI,{children:S.where}),r.jsx(XI,{children:S.reason})]})]},S.where))})]})]}),r.jsx(yu,{children:r.jsxs(Re,{variant:"primary",size:"lg",onClick:()=>a({name:(h==null?void 0:h.name)??"your roster"}),trailingArtwork:r.jsx(rl,{size:18}),children:["Bring in ",oi," people"]})}),oi<SA]})}if(l==="sampling")return r.jsxs(an,{children:[r.jsx(sn,{children:"Building a sample crew"}),r.jsx(ln,{children:"Spinning up teammates that look like your operation."}),r.jsxs(wu,{role:"status","aria-live":"polite",children:[r.jsx(bu,{"aria-hidden":"true"}),r.jsx(ml,{$working:!0,children:"Generating sample teammates"})]})]});const R=Ef.slice(0,6),C=`${v.length} sample teammates`;return r.jsxs(an,{children:[r.jsx(sn,{children:x?"Rounded out your week":"Your sample crew is ready"}),r.jsx(ln,{children:x?`Added ${v.length} sample teammates alongside your ${oi} — clearly marked, one tap to remove.`:`${v.length} teammates, ready to run a full week — clearly marked, one tap to remove.`}),r.jsx(Om,{children:r.jsxs(Dm,{"aria-label":"Sample teammates",children:[R.map((j,M)=>r.jsxs(Fm,{$i:M,children:[r.jsx(Bm,{"aria-hidden":"true",children:Im(j.name)}),r.jsxs(Wm,{children:[r.jsx(Hm,{children:j.name}),r.jsxs(Um,{children:[j.role," · ",j.location," · ",j.tenure]})]}),j.credentialStatus==="expiring"?r.jsxs(on,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[j.credential," · ",j.expiresInDays,"d"]}):r.jsx(on,{size:"sm",variant:"subtle",color:"green",children:j.credential}),r.jsx(on,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},j.name)),r.jsxs(qm,{children:["+ ",v.length-R.length," more · every one tagged “Sample”"]})]})}),r.jsx(yu,{children:r.jsx(Re,{variant:"primary",size:"lg",onClick:()=>a({name:C}),trailingArtwork:r.jsx(rl,{size:18}),children:"Bring them in"})}),!x&&r.jsx(Z2,{children:r.jsx(gl,{type:"button",onClick:()=>a(null),children:"Skip for now"})})]})}function Im(e){var l;const a=e.trim().split(/\s+/),i=((l=a[0])==null?void 0:l[0])??"",s=a.length>1?a[a.length-1][0]:"";return(i+s).toUpperCase()}const RA=7,MA=24;function LA({answers:e,onDone:a,onProcessingChange:i}){var I;const s=fo(),[l,d]=g.useState("intake"),[h,f]=g.useState(null),[v,y]=g.useState(""),[x,w]=g.useState(""),[k,T]=g.useState([]),[_,N]=g.useState([]),[L,A]=g.useState(!1),R=g.useRef(!1),C=((I=e.workforceType)==null?void 0:I.trim())||(e.companyWebsite?ch(e.companyWebsite).name:"")||"",O=$S(C);g.useEffect(()=>{i==null||i(l==="reading"||l==="building")},[l,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const j=g.useCallback(P=>{R.current||(R.current=!0,f(P),T(Pf(C)),N(Of(C)),d("reading"),window.setTimeout(()=>{d("built"),R.current=!1},s?300:1300))},[s,C]),M=P=>{const W=P.trim();!W||R.current||(R.current=!0,y(W),T(Pf(C)),N(Of(C)),d("building"),window.setTimeout(()=>{d("built"),R.current=!1},s?300:1200))};if(g.useEffect(()=>{if(l!=="intake")return;const P=W=>{var K,ee,ae;const Y=(ee=(K=W.clipboardData)==null?void 0:K.files)==null?void 0:ee[0];if(Y){W.preventDefault(),j({name:Y.name});return}(((ae=W.clipboardData)==null?void 0:ae.getData("text"))??"").trim().length>12&&(W.preventDefault(),j({name:"Pasted schedule"}))};return window.addEventListener("paste",P),()=>window.removeEventListener("paste",P)},[l,j]),l==="intake")return r.jsxs(an,{children:[r.jsx(sn,{children:"Upload your schedule"}),r.jsx(ln,{children:"Drop in your current schedule — any format — and I'll turn it into shifts."}),r.jsx(K2,{children:r.jsx(Du,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",state:"empty",title:"Choose your schedule or drag & drop it here.",description:"Spreadsheet, PDF, or a photo of a printed one.",onFileSelect:P=>j({name:P.name})})}),r.jsxs(JI,{children:[r.jsx(eE,{children:"Or tell me the shape of your week and I'll build one:"}),r.jsx(tE,{children:O.map(P=>r.jsx(nE,{type:"button",onClick:()=>M(P),children:P},P))}),r.jsxs(rE,{onSubmit:P=>{P.preventDefault(),M(x)},children:[r.jsx(oE,{value:x,placeholder:"e.g. 12-hour shifts, around the clock","aria-label":"Describe the shape of your week",onChange:P=>w(P.target.value)}),r.jsx(aE,{variant:"secondary",size:"md",type:"submit",disabled:!x.trim(),children:"Build week"})]})]}),r.jsx(Z2,{children:r.jsx(gl,{type:"button",onClick:()=>a(null),children:"Skip for now"})})]});if(l==="reading"||l==="building"){const P=l==="reading";return r.jsxs(an,{children:[r.jsx(sn,{children:P?"Got the file":"Building your week"}),r.jsx(ln,{children:P?`Reading ${(h==null?void 0:h.name)??"your schedule"} — turning it into shifts.`:`Laying out a realistic week — ${v.toLowerCase()}.`}),r.jsxs(wu,{role:"status","aria-live":"polite",children:[r.jsx(bu,{"aria-hidden":"true"}),r.jsx(ml,{$working:!0,children:P?"Turning it into shifts":"Building the week"})]})]})}const S=!!h;return r.jsxs(an,{$wide:!0,children:[r.jsx(sn,{children:"Your week is ready"}),r.jsx(ln,{children:S?`Read ${h==null?void 0:h.name} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built a realistic week — ${v.toLowerCase()}. Here's what it looks like.`}),r.jsxs(bE,{children:[r.jsxs(X2,{type:"button","aria-expanded":L,"aria-controls":"schedule-waiting-rows",onClick:()=>A(P=>!P),children:[r.jsxs(J2,{children:[k.length," things waiting in your week"]}),r.jsxs(ev,{children:[r.jsx(tv,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsx(nv,{$open:L,"aria-hidden":"true",children:r.jsx(In,{size:16})})]})]}),L&&r.jsx(sE,{id:"schedule-waiting-rows","aria-label":"Waiting in your week",children:k.map((P,W)=>r.jsxs(lE,{children:[r.jsx(cE,{$kind:P.kind,"aria-hidden":"true",children:P.kind==="missing"?r.jsx($n,{size:15}):r.jsx(ea,{size:15})}),r.jsxs(dE,{children:[r.jsxs(uE,{children:[P.worker," · ",P.role]}),r.jsx(hE,{children:P.detail})]})]},`${P.worker}-${W}`))})]}),r.jsxs(pE,{children:[r.jsxs(iE,{children:[r.jsxs(Gd,{children:[r.jsx(Yd,{children:RA})," days"]}),r.jsx(Vm,{"aria-hidden":"true",children:"·"}),r.jsxs(Gd,{children:[r.jsx(Yd,{children:MA})," shifts"]}),r.jsx(Vm,{"aria-hidden":"true",children:"·"}),r.jsxs(Gd,{children:[r.jsx(Yd,{children:k.length})," to handle"]})]}),r.jsx(fE,{children:r.jsx(mE,{role:"table","aria-label":"Next week's shifts",children:_.map(P=>r.jsxs(gE,{role:"column",children:[r.jsx(vE,{children:P.label}),P.shifts.map((W,Y)=>r.jsxs(xE,{$flag:W.flag,children:[r.jsx(yE,{children:W.time}),r.jsx(wE,{children:W.who})]},`${P.label}-${Y}`))]},P.label))})})]}),r.jsx(yu,{children:r.jsx(Re,{variant:"primary",size:"lg",onClick:()=>a({name:(h==null?void 0:h.name)??`${v} week`}),children:"Take me in"})})]})}function $A(e){const a=e.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function ch(e){const a=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function TA(e,a){const i=fo(),[s,l]=g.useState(i?e:0);return g.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=v=>{h===null&&(h=v);const y=Math.min(1,(v-h)/a),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,a,i]),s}function fo(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const AA=m.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,IA=m.button`
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
`,EA=m.main`
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
`,PA=m.div`
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
  ${e=>e.$augment&&Pe`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,zA=m.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,q2=m.span`
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
`,OA=ke`
  from { opacity: 1; }
  to   { opacity: 0; }
`,DA=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Pe`
      animation: ${OA} ${B2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&Pe`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FA=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,BA=m.div`
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
`,WA=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,dh=ke`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,HA=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${dh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,V2=m.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,UA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,qA=m(Re)`
  && {
    width: 100%;
    ${ir}
  }
`,VA=m.div`
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
`,GA=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,YA=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,QA=m(Re)`
  && {
    width: 100%;
  }
`,KA=m(V2)`
  margin-top: var(--space-2);
`,ZA=m.form`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  width: 100%;
`,XA=m.div`
  flex: 1;
  min-width: 0;
  /* Flex so the Alloy Tooltip's inline-flex wrapper stretches to fill, keeping
     the email field full-width beside the submit button. */
  display: flex;
  & > * { flex: 1; min-width: 0; }
`,G2=m(ig)`
  && [class*='shell'] {
    ${ir}
  }
  && input {
    background: transparent;
  }
`,JA=m(Re)`
  && {
    flex-shrink: 0;
    width: var(--space-10);
    height: var(--space-10);
  }
`,Y2=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,eI=m.div`
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
  animation: ${dh} var(--duration-slow) var(--ease-out) both;

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
`,tI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;

  @media (min-width: 801px) {
    flex: 1;
    justify-content: space-between;
  }
`,nI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,rI=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,oI=ke`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,aI=m.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${oI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,sI=m.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,lI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,cI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
`,dI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,uI=ke`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,hI=m.div`
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
`,Em=m.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${uI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Pm=m.img`
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
`,pI=ke`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,fI=m.figure`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
  /* Room for the tallest card (four relaxed text-md lines plus the byline) —
     raw px deliberately, so rotating cards of different lengths never reflow
     the spread panel around them. */
  min-height: 152px;
  animation: ${pI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,mI=m.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,gI=m.figcaption`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,vI=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,xI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,yI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,wI=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${dh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,bI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,kI=ke`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,an=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${kI} ${aA}ms ${un} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sn=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,ln=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,_I=ke`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,CI=m(ln)`
  animation: ${_I} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jI=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,SI=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${ir}
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
    ${Si}
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
`,Q2=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,NI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,RI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,mo=ke`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,MI=ke`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,LI=ke`
  from { width: 0; }
  to   { width: 100%; }
`,$I=ke`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,zm=ke`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,TI=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,AI=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Pe`
    & > * > * {
      animation: ${$I} 900ms ${un};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,II=m.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,EI=m.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Pe`
    animation: ${LI} ${U2}ms ${un} both;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,PI=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
`,zI=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,ml=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${zm} var(--duration-base) ${un} both;

  /* The settled state's check reads as the finish line. */
  svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }

  ${e=>e.$working&&Pe`
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
    animation: ${zm} var(--duration-base) ${un} both,
      ${MI} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    ${e=>e.$working&&Pe`
      color: var(--color-content-secondary);
      background: none;
    `}
  }
`,OI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,K2=m.div`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  text-align: left;

  & [class*='area']:not([data-drag-over]) {
    ${ir}
    border-style: dashed;
  }
`,DI=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-3);
`,FI=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  ${ir}
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
    transform var(--duration-fast) var(--ease-default);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }

  &:hover {
    color: var(--color-content-primary);
    transform: translateY(-1px);
  }
  &:hover svg { color: var(--color-content-primary); }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color var(--duration-fast) var(--ease-default);
    &:hover { transform: none; }
  }
`,yu=m.div`
  margin-top: var(--space-5);
`,Z2=m.div`
  margin-top: var(--space-3);
`,BI=ke`
  to { transform: rotate(360deg); }
`,wu=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-5);
`,bu=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-primary);
  animation: ${BI} 720ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,Om=m.div`
  ${Si}
  border-radius: var(--radius-lg);
  padding: var(--space-1) var(--space-5) var(--space-4);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-4);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  animation: ${mo} var(--duration-base) ${un} both;

  /* The import result leads with the big "81 of 84" stat, which wants room to
     breathe above it; the sample preview leads with a list and keeps the tighter
     top edge. */
  ${e=>e.$padTop&&Pe`padding-top: var(--space-5);`}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WI=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,HI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,UI=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,qI=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,VI=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,X2=m.button`
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
`,J2=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,ev=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,tv=m.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,nv=m.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) ${un};
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,GI=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${mo} var(--duration-base) ${un} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YI=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,QI=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,KI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,ZI=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,XI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,Dm=m.div`
  display: flex;
  flex-direction: column;
`,Fm=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${mo} var(--duration-base) ${un} both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Bm=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-secondary);
`,Wm=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,Hm=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,Um=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qm=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${mo} var(--duration-base) ${un} both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,JI=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-5);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border-opaque);
`,eE=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  text-align: center;
`,tE=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,nE=m.button`
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  ${ir}
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default),
    transform var(--duration-fast) var(--ease-default);

  &:hover {
    color: var(--color-content-primary);
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover { transform: none; }
  }
`,rE=m.form`
  display: flex;
  gap: var(--space-2);
  width: 100%;
`,oE=m.input`
  flex: 1;
  min-width: 0;
  ${ir}
  border-radius: var(--radius-md);
  padding: 0 var(--space-3);
  height: var(--space-10);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-tertiary); }
  &:focus-visible {
    outline: none;
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`,aE=m(Re)`
  && {
    flex-shrink: 0;
    height: var(--space-10);
  }
`,iE=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,Gd=m.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,Yd=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,Vm=m.span`
  color: var(--color-content-tertiary);
`,sE=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,lE=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,cE=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&Pe`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&Pe`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&Pe`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,dE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,uE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,hE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,pE=m.div`
  ${Si}
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  width: 100%;
  max-width: 920px;
  margin-top: var(--space-4);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  animation: ${mo} var(--duration-base) ${un} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fE=m.div`
  overflow-x: auto;
  margin: 0 calc(-1 * var(--space-1));
  padding: 0 var(--space-1) var(--space-1);
`,mE=m.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(112px, 1fr));
  gap: var(--space-2);
`,gE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,vE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,xE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

  ${e=>e.$flag==="open"&&Pe`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Pe`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}
`,yE=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
`,wE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bE=m.div`
  ${Si}
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  width: 100%;
  max-width: 920px;
  margin-top: var(--space-4);
  text-align: left;
  display: flex;
  flex-direction: column;
  animation: ${mo} var(--duration-base) ${un} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kE=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,_E=m.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,CE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,jE=m.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${ir}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${mo} var(--duration-base) ${un} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Q2} {
    margin-bottom: 0;
  }

  &:hover {
    ${Si}
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
`,SE=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rv=m.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${ir}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,ov=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,NE=ke`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,RE=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${NE} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,av=m.textarea`
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
`,iv=m(Lu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,ME=m.div`
  margin-top: var(--space-3);
`,gl=m.button`
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
`;function LE({onEnterApp:e}){return r.jsx(iA,{onComplete:a=>e==null?void 0:e(a)})}const $E=768,TE=`(max-width: ${$E-1}px)`;function uh(e){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),a}function AE(){return uh(TE)}const IE="48px",EE="240px",Gm="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",PE=m.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?EE:IE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Pe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Pe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,zE=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,OE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,DE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,FE=m.button`
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
`,BE=m.div`
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
`,WE=m.span`
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
`,Ym=m.div`
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
`,Qd=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,HE="var(--gradient-ai)",sv=m.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Pe`
      background: var(--color-bg-primary, white);
      box-shadow: ${Gm}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Pe`
      background: ${HE};
      box-shadow: ${Gm}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,lv=m.button`
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
`,cv=m.span`
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
`,dv=m.div`
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
`,UE=m.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Kd=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;m.span`
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
`;const qE=m.button`
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
`,VE=m.div`
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
`,GE=m.span`
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
`;m.span`
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
`;m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function Zd({item:e,isExpanded:a,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return r.jsx(sv,{$isActive:l,$isAi:s,children:r.jsxs(lv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:e.onClick,"aria-current":l?"page":void 0,title:a?void 0:e.label,children:[r.jsxs(dv,{children:[e.hasUnread&&r.jsx(UE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),a&&r.jsx(cv,{children:e.label}),a&&i&&r.jsx(ia,{variant:"primary",children:"New"})]})})}function YE({items:e,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}){const[x,w]=g.useState(!1);return r.jsx(PE,{$isExpanded:x,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:r.jsxs(zE,{$isExpanded:x,children:[r.jsxs(OE,{children:[r.jsxs(FE,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[r.jsx(BE,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&r.jsxs(r.Fragment,{children:[r.jsx(WE,{children:s.name}),r.jsx(Ym,{children:r.jsx(Bf,{})})]})]}),r.jsx(Qd,{children:e.map(k=>r.jsx(Zd,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Kd,{}),r.jsx(Qd,{children:a.map(k=>r.jsx(Zd,{item:k,isExpanded:x,showNewBadge:k.id===v,isAi:k.id===y},k.id))})]})]}),r.jsxs(DE,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Kd,{}),r.jsx(Qd,{children:i.map(k=>r.jsx(Zd,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),r.jsx(Kd,{}),r.jsx(sv,{$isActive:!1,children:r.jsxs(lv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:x?void 0:"Settings",children:[r.jsx(dv,{children:r.jsx(iN,{})}),x&&r.jsx(cv,{children:"Settings"})]})}),r.jsxs(qE,{$isExpanded:x,onClick:h,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[r.jsx(VE,{$color:l.avatarColor,children:l.initials}),x&&r.jsxs(r.Fragment,{children:[r.jsx(GE,{children:l.name}),r.jsx(Ym,{children:r.jsx(Bf,{})})]})]})]})]})})}const QE=270,KE=m.nav`
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
`,ZE=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,XE=m.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,JE=m.h2`
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
`,eP=m.div`
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
`,tP=m.button`
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
`,nP=m.div`
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
`,rP=m.button`
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
`;m.div`
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
`;const oP=m.span`
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
`,aP=m.div`
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
`,iP=ke`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,sP=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${iP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Qm=m.button`
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
`,lP=m.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Pe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,cP=m.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,dP=m.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uP=m.div`
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
`,hP=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,pP=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,fP=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,uv=m.div`
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
`;m.button`
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
`;function hv(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function mP(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const hh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function gP({item:e}){return r.jsx(cn,{label:r.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:r.jsx(uv,{children:e.icon??r.jsx(hv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:hh})}function vP({group:e}){const[a,i]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-f.length;return r.jsxs(lP,{$outlined:e.outlined,children:[r.jsxs(rP,{onClick:()=>i(y=>!y),"aria-expanded":a,children:[r.jsx(aP,{children:a?r.jsx(In,{size:16}):r.jsx(dn,{size:16})}),r.jsx(oP,{children:e.label}),e.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),a&&r.jsxs(sP,{children:[f.map(y=>r.jsx(cn,{label:r.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:r.jsx(uv,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:hh},y.id)),v>0&&r.jsxs(Qm,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&r.jsx(Qm,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function xP({heading:e,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:v,headerSlot:y,bodyContent:x,width:w=QE,onWidthChange:k,minWidth:T=220,maxWidth:_=520}){const N=x!==void 0,L=g.useRef(null),[A,R]=g.useState(!1);return g.useEffect(()=>{if(!A||!k)return;const C=L.current;if(!C)return;const O=C.getBoundingClientRect().left,j=I=>{const P=Math.min(_,Math.max(T,I.clientX-O));k(P)},M=()=>R(!1);window.addEventListener("mousemove",j),window.addEventListener("mouseup",M);const S=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",M),document.body.style.userSelect=S,document.body.style.cursor=""}},[A,k,T,_]),r.jsxs(KE,{ref:L,$isVisible:a,$width:w,$isResizing:A,"aria-label":"Secondary navigation",children:[r.jsxs(ZE,{children:[(e||y)&&r.jsxs(XE,{children:[r.jsx(JE,{children:e}),y]}),d&&!N&&r.jsxs(eP,{children:[r.jsx(ag,{size:"sm",placeholder:"Search...",value:h,onChange:C=>f==null?void 0:f(C.target.value)}),r.jsx(tP,{onClick:v,"aria-label":"Filter",children:r.jsx(mP,{})})]})]}),N?x:r.jsxs(nP,{children:[s,i.map(C=>C.type==="single"?r.jsx(gP,{item:C.item},C.item.id):C.type==="group"?r.jsx(vP,{group:C.group},C.group.id):C.type==="divider"?r.jsx(pP,{},C.id):r.jsx(cP,{children:C.label.label},C.label.id))]}),l.length>0&&r.jsxs(dP,{children:[r.jsx(hP,{}),l.map(C=>r.jsx(cn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:r.jsx(fP,{children:C.icon??r.jsx(hv,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:hh},C.id))]}),k&&a&&r.jsx(uP,{$isResizing:A,onMouseDown:C=>{C.preventDefault(),R(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const yP=m.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,wP=m.div`
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
`,pv=m.div`
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
`,bP=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,kP=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function _P(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Km(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Zm(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function CP(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function jP({heading:e,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const v=a.filter(w=>w.variant==="secondary"),y=a.filter(w=>w.variant==="primary"),x=uh("(prefers-color-scheme: dark)");return r.jsxs(yP,{$noBorder:l,children:[r.jsx(wP,{children:typeof e=="string"?r.jsx(pv,{children:e}):e}),r.jsxs(bP,{children:[r.jsxs(kP,{children:[r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(_P,{})}),v.map(w=>r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Zm,{}),trailingArtwork:r.jsx(Km,{}),onClick:w.onClick,children:w.label},w.id)),y.map(w=>r.jsx(Re,{variant:"primary",size:"sm",leadingArtwork:r.jsx(Zm,{}),trailingArtwork:r.jsx(Km,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(CP,{})}),s&&r.jsx(x0,{dark:x,onClick:h,"aria-label":"Ponder AI"})]})]})}const SP=m.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,NP=m.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,RP=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,MP=m.main`
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
`,Xm="tb:secondary-nav-width",Jm=270,e0=220,t0=520;function LP({items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y,secNavHeading:x,menuEntries:w,menuHeader:k,pageEntries:T,showSearch:_,searchValue:N,onSearchChange:L,onFilterClick:A,headerSlot:R,bodyContent:C,heading:O,actions:j,showActivityButton:M,showPonderButton:S,noBorder:I,onActivityClick:P,onPonderClick:W,onDotsClick:Y,children:q,showSecondaryNav:K=!0,showTopNav:ee=!0}){const[ae,re]=g.useState(()=>{if(typeof window>"u")return Jm;const se=window.localStorage.getItem(Xm),Z=se?parseInt(se,10):NaN;return Number.isFinite(Z)?Math.min(t0,Math.max(e0,Z)):Jm});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Xm,String(ae))},[ae]),r.jsxs(SP,{children:[r.jsx(YE,{items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}),r.jsxs(NP,{children:[K&&r.jsx(xP,{heading:x,menuEntries:w,menuHeader:k,pageEntries:T,isVisible:!0,showSearch:_,searchValue:N,onSearchChange:L,onFilterClick:A,headerSlot:R,bodyContent:C,width:ae,onWidthChange:re,minWidth:e0,maxWidth:t0}),r.jsxs(RP,{children:[ee&&r.jsx(jP,{heading:O,actions:j,showActivityButton:M,showPonderButton:S,noBorder:I,onActivityClick:P,onPonderClick:W,onDotsClick:Y}),r.jsx(MP,{children:q})]})]})]})}function $P({deadZonePx:e=8,topThresholdPx:a=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(0);return g.useEffect(()=>{var y;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const x=h(),w=x-d.current;Math.abs(w)<e||(w>0&&x>a?l("down"):w<0&&l("up"),d.current=x)},v=i??(typeof window<"u"?window:{});return(y=v.addEventListener)==null||y.call(v,"scroll",f,{passive:!0}),()=>{var x;(x=v.removeEventListener)==null||x.call(v,"scroll",f)}},[e,a,i]),s}const TP=m.button`
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
`,AP=m.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,IP=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Xd({label:e,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(TP,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(AP,{children:e}),r.jsx(IP,{children:r.jsx(In,{size:14})})]})}const EP=m.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,PP=m.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,n0=m.button`
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
`,zP=m.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,r0=m.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,OP=m.button`
  all: unset;
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
  cursor: pointer;
  flex: 0 0 auto;
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;function DP({size:e=18}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const FP=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,user:d,hidden:h,onHamburgerClick:f,onPrimaryClick:v,onSecondaryClick:y,onTertiaryClick:x,onSearchClick:w,onUserClick:k},T){return r.jsx(EP,{ref:T,$hidden:h,children:r.jsxs(PP,{children:[r.jsx(n0,{onClick:f,"aria-label":"Open navigation",children:r.jsx(DP,{size:18})}),r.jsxs(zP,{children:[r.jsx(Xd,{label:a,isOpen:l==="primary",onClick:v,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(r0,{"aria-hidden":"true",children:"›"}),r.jsx(Xd,{label:i,isOpen:l==="secondary",onClick:y,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(r0,{"aria-hidden":"true",children:"›"}),r.jsx(Xd,{label:s,isOpen:l==="persona",onClick:x??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(n0,{onClick:w,"aria-label":"Search",children:r.jsx($u,{size:18})}),r.jsx(OP,{onClick:k,$color:d.avatarColor,"aria-label":`User: ${d.name}`,children:d.initials})]})})}),BP=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,WP=m.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${BP} 160ms ease-out;
`;function HP({onDismiss:e}){return g.useEffect(()=>{const a=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[e]),r.jsx(WP,{onClick:e,"aria-hidden":"true"})}const UP=ke`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,qP=m.div`
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
  animation: ${UP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,VP=m.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,GP=m.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,YP=m.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,QP=m.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function ph({title:e,children:a,ariaLabel:i}){return r.jsxs(qP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[r.jsx(VP,{children:r.jsx(GP,{"aria-hidden":"true"})}),e&&r.jsx(YP,{children:e}),r.jsx(QP,{children:a})]})}const Tl=m.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,gi=m.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ao=m.button`
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
`,Xo=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,io=m.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,so=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function KP({activeId:e,groups:a,onSelect:i}){return r.jsx(ph,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Tl,{children:a.map((s,l)=>r.jsxs("div",{children:[l>0&&r.jsx(gi,{children:s.label}),l===0&&r.jsx(gi,{children:s.label}),s.items.map(d=>{const h=d.id===e;return r.jsxs(ao,{$active:h,onClick:()=>i(d.id),"aria-pressed":h,children:[r.jsx(Xo,{children:d.icon}),r.jsx(io,{children:d.label}),h&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)})]},s.id))})})}function ZP({moduleLabel:e,entries:a,onSelect:i}){return r.jsx(ph,{title:e,ariaLabel:`${e} sections`,children:r.jsx(Tl,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(ao,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Xo,{children:d.icon}),r.jsx(io,{children:d.label}),d.isActive&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(gi,{children:l.label}),l.children.map(d=>r.jsxs(ao,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Xo,{children:d.icon}),r.jsx(io,{children:d.label}),d.isActive&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id))]},l.id)})})})}const XP=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,JP=m.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ez=m.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function tz({personas:e,activeId:a,onSelect:i}){return r.jsx(ph,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Tl,{children:e.map(s=>{const l=s.id===a;return r.jsxs(ao,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(io,{as:"span",children:r.jsxs(XP,{children:[r.jsx(JP,{children:s.name}),r.jsx(ez,{children:s.role})]})}),l&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},s.id)})})})}const nz=ke`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,rz=m.aside`
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
  animation: ${nz} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,oz=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,az=m.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,iz=m.button`
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
`,sz=m.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,lz=60;function cz({title:e,onDismiss:a,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const h=v=>{const y=v.touches[0];l.current={x:y.clientX,y:y.clientY}},f=v=>{if(!l.current)return;const y=v.changedTouches[0],x=y.clientX-l.current.x,w=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(w)<lz&&a()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[a]),r.jsxs(rz,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[r.jsxs(oz,{children:[r.jsx(az,{children:e??"Navigation"}),r.jsx(iz,{onClick:a,"aria-label":"Close navigation",children:r.jsx(yi,{size:18})})]}),r.jsx(sz,{children:i})]})}function dz({activeId:e,groups:a,currentMenuEntries:i,onSelectModule:s,onDismiss:l}){return r.jsx(cz,{title:"Navigation",onDismiss:l,children:r.jsx(Tl,{children:a.map(d=>r.jsxs("div",{children:[r.jsx(gi,{children:d.label}),d.items.map(h=>{const f=h.id===e;return r.jsxs("div",{children:[r.jsxs(ao,{$active:f,onClick:()=>{s(h.id),l()},"aria-pressed":f,children:[r.jsx(Xo,{children:h.icon}),r.jsx(io,{children:h.label}),f&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(v=>{if(v.type==="single"){const x=v.item;return r.jsxs(ao,{$active:x.isActive,$indent:!0,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),l()},"aria-pressed":!!x.isActive,children:[r.jsx(Xo,{children:x.icon}),r.jsx(io,{children:x.label}),x.isActive&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},x.id)}if(v.type!=="group")return null;const y=v.group;return r.jsxs("div",{children:[r.jsx(gi,{children:y.label}),y.children.map(x=>r.jsxs(ao,{$active:x.isActive,$indent:!0,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),l()},"aria-pressed":!!x.isActive,children:[r.jsx(Xo,{children:x.icon}),r.jsx(io,{children:x.label}),x.isActive&&r.jsx(so,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},x.id))]},y.id)})})]},h.id)})]},d.id))})})}const o0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],uz=m.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,hz=m.main`
  flex: 1 1 auto;
  min-width: 0;
`;function pz(e){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:v,onMobileNavigate:y,onSelectPersona:x,children:w}=e,[k,T]=g.useState(null),_=$P({deadZonePx:8,topThresholdPx:20}),N=k===null&&_==="down",L=g.useMemo(()=>{if(!i)return null;const O=o0.find(j=>j.id===i);return(O==null?void 0:O.name)??null},[i]),A=()=>T(null),R=O=>T(O),C=k!==null;return r.jsxs(uz,{children:[r.jsx(FP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:L,openOverlay:k,user:f,hidden:N,onHamburgerClick:()=>R("drawer"),onPrimaryClick:()=>R("primary"),onSecondaryClick:()=>R("secondary"),onTertiaryClick:L?()=>R("persona"):void 0,onSearchClick:()=>{R("drawer")},onUserClick:()=>v==null?void 0:v()}),r.jsx(hz,{children:w}),C&&r.jsx(HP,{onDismiss:A}),k==="primary"&&r.jsx(KP,{activeId:a,groups:s,onSelect:O=>{y(O),A()}}),k==="secondary"&&r.jsx(ZP,{moduleLabel:l,entries:h,onSelect:A}),k==="persona"&&r.jsx(tz,{personas:o0,activeId:i,onSelect:O=>{x(O),A()}}),k==="drawer"&&r.jsx(dz,{activeId:a,groups:s,currentMenuEntries:h,onSelectModule:O=>y(O),onDismiss:A})]})}function fz(e){if(AE()&&e.mobileNav){const i=e.mobileNav;return r.jsx(pz,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return r.jsx(LP,{...e})}const mz="/Ultron_Onboarding/assets/policy-icon-active-CqCS8_ex.svg",gz="/Ultron_Onboarding/assets/automation-icon-active-DlguOjgR.svg",vz=1100,xz=2e3,yz=440,wz=26,Jd=320,bz=720,kz=[{icon:to,label:"Build out coverage"},{icon:$n,label:"Chase open shifts"},{icon:bi,label:"Tidy compliance"}],_z=600,Cz=1600;function jz(e){if(!e)return null;const a=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function Sz(e){const a=[],i=jz(e.companyWebsite);return i?a.push({icon:al,label:"Workspace",detail:`${i} is set up and ready`}):e.workforceType&&a.push({icon:al,label:"Workspace",detail:`Set up for ${e.workforceType.toLowerCase()}`}),e.pay&&a.push({icon:Au,label:"Pay",detail:`Turned on for ${e.pay} workers`}),e.billing&&a.push({icon:zu,label:"Billing",detail:`Set to bill ${e.billing.toLowerCase()}`}),e.worksite&&a.push({icon:Eu,label:"Sites",detail:e.worksite}),e.rosterFile&&a.push({icon:to,label:"Roster",detail:`Brought your people in from ${e.rosterFile.name}`}),e.scheduleFile&&a.push({icon:$n,label:"Schedule",detail:`Turned ${e.scheduleFile.name} into shifts`}),a}function Nz(e){const a=!e.rosterFile,i=!e.scheduleFile;return a&&i?"Two things I still need: your roster and your current schedule. Drop them into this chat whenever you’re ready — I’ll bring your people in and turn the schedule into shifts.":a?"One thing I still need: your roster. Drop it into this chat whenever you’re ready and I’ll bring your people in.":i?"One thing I still need: your current schedule. Drop it into this chat whenever you’re ready and I’ll turn it into shifts.":null}const Rz={};function Mz({answers:e=Rz,onContinued:a}){const[i,s]=g.useState([]),[l,d]=g.useState(""),[h,f]=g.useState([]),[v,y]=g.useState(!1),[x,w]=g.useState(""),[k,T]=g.useState(!1),[_,N]=g.useState(!1),[L,A]=g.useState("processing"),[R,C]=g.useState(0),[O,j]=g.useState(-1),[M,S]=g.useState(""),[I,P]=g.useState(!1),[W]=g.useState(()=>{var D;return typeof window<"u"&&!!((D=window.matchMedia)!=null&&D.call(window,"(prefers-reduced-motion: reduce)").matches)}),Y=g.useRef(null),q=g.useRef(null),K=g.useRef(null),ee=g.useMemo(()=>Sz(e),[e]),ae=g.useMemo(()=>Nz(e),[e]),re=g.useMemo(()=>{const D=[{kind:"text",text:"Your workspace is live — I turned on the essentials from what you shared."}];return ee.length>0&&D.push({kind:"summary"}),ae&&D.push({kind:"text",text:ae}),D.push({kind:"text",text:"What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate."}),D},[ee,ae]);g.useEffect(()=>()=>{Y.current&&window.clearTimeout(Y.current)},[]),g.useEffect(()=>{if(W){C(re.length),j(-1),A("ready");return}const D=[];let V=null;const ne=(J,F)=>{D.push(window.setTimeout(F,J))},le=J=>{if(J>=re.length){P(!1),A("ready");return}P(!0),ne(yz,()=>{P(!1),j(J);const F=re[J];if(F.kind==="summary"){ne(bz,()=>{C(J+1),j(-1),ne(Jd,()=>le(J+1))});return}S("");const ie=F.text;let me=0;V=window.setInterval(()=>{me+=1,S(ie.slice(0,me)),me>=ie.length&&(V&&window.clearInterval(V),V=null,ne(Jd,()=>{C(J+1),j(-1),S(""),ne(Jd,()=>le(J+1))}))},wz)})};return A("processing"),ne(xz,()=>{A("delivering"),le(0)}),()=>{D.forEach(J=>window.clearTimeout(J)),V&&window.clearInterval(V)}},[re,W]),g.useEffect(()=>{if(L==="ready")return q.current=window.setTimeout(()=>N(!0),_z),()=>{q.current&&window.clearTimeout(q.current)}},[L]);const se=()=>{T(!0),q.current&&window.clearTimeout(q.current),q.current=window.setTimeout(()=>N(!1),Cz)};g.useEffect(()=>{var D;(D=K.current)==null||D.scrollIntoView({block:"end",behavior:"smooth"})},[i,v,L,R,O,M,I]);const Z=(l.trim().length>0||h.length>0)&&!v,U=D=>{const V=Array.from(D,ne=>ne.name);f(ne=>[...ne,...V.filter(le=>!ne.includes(le))])},G=D=>f(V=>V.filter(ne=>ne!==D)),E=(D,V=[])=>{if(!D&&V.length===0||v)return;i.some(le=>le.role==="operator")||a==null||a();const ne=i.filter(le=>le.role==="ultron").length;s(le=>[...le,{role:"operator",text:D,...V.length?{attachments:V}:{}}]),y(!0),Y.current=window.setTimeout(()=>{s(le=>[...le,{role:"ultron",text:th(D,ne)}]),y(!1),Y.current=null},vz)},$=()=>{const D=l.trim();!D&&h.length===0||v||(E(D,h),d(""),f([]))};return r.jsxs(Lz,{children:[r.jsx($z,{children:r.jsxs(Tz,{children:[r.jsx(Az,{"aria-hidden":"true",children:r.jsx(ul,{})}),r.jsxs(Iz,{children:[r.jsx(Ez,{children:"Welcome"}),r.jsx(Pz,{children:"Your workspace setup, recapped"})]})]})}),r.jsx(zz,{children:L==="processing"?r.jsxs(Oz,{role:"status","aria-live":"polite",children:[r.jsx(Dz,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:132,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(Bz,{children:"Preparing your workspace…"})]}):r.jsxs(Vz,{children:[r.jsx(eu,{"data-from":"ultron",children:r.jsxs(Gz,{children:[re.slice(0,O>=0?O+1:R).map((D,V)=>{if(D.kind==="summary")return r.jsx(Wz,{children:r.jsxs(Yz,{"aria-label":"What Ultron set up",children:[r.jsx(Qz,{children:r.jsx(Kz,{children:"Here’s what I set up"})}),r.jsx(Zz,{children:ee.map(le=>{const J=le.icon;return r.jsxs(Xz,{children:[r.jsx(Jz,{"aria-hidden":"true",children:r.jsx(J,{size:16})}),r.jsxs(eO,{children:[r.jsx(tO,{children:le.label}),r.jsx(nO,{children:le.detail})]}),r.jsx(rO,{"aria-hidden":"true",children:r.jsx(yn,{size:18})})]},le.label)})})]})},`beat-${V}`);const ne=V===O;return r.jsxs(a0,{"data-from":"ultron",children:[ne?M:D.text,ne&&r.jsx(qz,{"aria-hidden":"true"})]},`beat-${V}`)}),I&&r.jsx(Hz,{children:r.jsxs(s0,{"aria-label":"Ultron is typing",children:[r.jsx(Go,{}),r.jsx(Go,{}),r.jsx(Go,{})]})})]})}),i.map((D,V)=>r.jsx(eu,{"data-from":D.role,children:r.jsxs(jO,{"data-from":D.role,children:[D.text&&r.jsx(a0,{"data-from":D.role,children:D.text}),D.attachments&&r.jsx(SO,{children:D.attachments.map(ne=>r.jsxs(l0,{children:[r.jsx($r,{size:14}),ne]},ne))})]})},V)),v&&r.jsx(eu,{"data-from":"ultron",children:r.jsxs(s0,{"aria-label":"Ultron is replying",children:[r.jsx(Go,{}),r.jsx(Go,{}),r.jsx(Go,{})]})}),r.jsx("div",{ref:K})]})}),L==="ready"&&r.jsxs(xO,{children:[i.length===0&&r.jsx(yO,{"aria-label":"Suggested next steps",children:kz.map(({icon:D,label:V})=>r.jsxs(wO,{type:"button",onClick:()=>E(V),children:[r.jsx(D,{size:14}),V]},V))}),r.jsxs(bO,{onSubmit:D=>{D.preventDefault(),$()},children:[h.length>0&&r.jsx(_O,{"aria-label":"Files to send",children:h.map(D=>r.jsxs(l0,{children:[r.jsx($r,{size:14}),D,r.jsx(CO,{type:"button","aria-label":`Remove ${D}`,onClick:()=>G(D),children:r.jsx(ui,{size:12})})]},D))}),r.jsxs(kO,{children:[r.jsx(c0,{children:r.jsx(Z0,{state:"idle",onSelect:U})}),r.jsx(NO,{rows:1,value:l,placeholder:"Tell Ultron what to take on next…","aria-label":"Message Ultron",onChange:D=>d(D.target.value),onKeyDown:D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),$())}}),r.jsx(c0,{children:r.jsx(sa,{state:Z?"ready":"disabled-invalid",onSend:$})})]})]})]}),r.jsx(lO,{}),r.jsx(w9,{open:_,onClose:()=>N(!1),size:"md","aria-label":"Unlock your grant",children:r.jsxs(cO,{children:[r.jsx(dO,{type:"button","aria-label":"Close",onClick:()=>N(!1),children:r.jsx(ui,{size:18})}),r.jsx(uO,{children:"Turn it on and your first $1,000 of work is free."}),r.jsx(hO,{children:"Give me one number to reach you. I propose before I act — you always say go — and confirming your number unlocks your grant."}),k?r.jsxs(mO,{role:"status",children:[r.jsx(yn,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(pO,{onSubmit:D=>{D.preventDefault(),x.trim()&&se()},children:[r.jsx(fO,{type:"tel",value:x,placeholder:"(214) 555-0148","aria-label":"Mobile number",autoComplete:"tel",onChange:D=>w(D.target.value)}),r.jsx(Re,{type:"submit",variant:"tertiary",size:"lg",disabled:!x.trim(),children:"Unlock & turn on"})]}),r.jsx(gO,{children:"You’ll get 100,000 credits — 3 months of work performed, on us. Ultron only texts when it has a proposal. Msg & data rates may apply. Reply STOP to opt out."})]})})]})}const Lz=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,$z=m.header`
  flex-shrink: 0;
`,Tz=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  /* Same rhythm as the event card header — air above, tight to the body. */
  padding: var(--space-4) var(--space-6) var(--space-2);
`,Az=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Iz=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Ez=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,Pz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zz=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Ni=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Oz=m.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
  padding: var(--space-8);
  animation: ${Ni} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Dz=m.div`
  display: grid;
  place-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -24%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary, rgba(70, 108, 255, 0.06)) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  & > canvas {
    position: relative;
    z-index: 1;
  }
`,Fz=ke`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,Bz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight, -0.01em);
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
  animation: ${Fz} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-primary);
    -webkit-text-fill-color: currentColor;
  }
`,Wz=m.div`
  animation: ${Ni} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Hz=m.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Ni} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Uz=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,qz=m.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${Uz} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Vz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,eu=m.div`
  display: flex;
  animation: ${Ni} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Gz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,a0=m.div`
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
`,Yz=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,Qz=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Kz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Zz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,Xz=m.div`
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
`,Jz=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,eO=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,tO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,nO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,rO=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,i0="cubic-bezier(0.22, 1, 0.36, 1)",oO=ke`
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
`,aO=ke`
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
`,iO=ke`
  from { opacity: 0; transform: scale(0.96) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,sO=ke`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,lO=wS`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${oO} 440ms ${i0} both;

    & > div {
      animation: ${iO} 560ms ${i0} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${aO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${sO} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`,cO=m.section`
  position: relative;
  width: 100%;
  padding: var(--space-8);
  background: var(--color-bg-inverse-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`,dO=m.button`
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
`,uO=m.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-content-inverse-primary);
`,hO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-secondary);
`,pO=m.form`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: var(--space-3);
`,fO=m.input`
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
`,mO=m.div`
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
`,gO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-tertiary);
`,vO=ke`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,s0=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`,Go=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${vO} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xO=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Ni} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yO=m.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,wO=m.button`
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
`,bO=m.form`
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
`,kO=m.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,_O=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,l0=m.span`
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
`,CO=m.button`
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
`,jO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,SO=m.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,NO=m.textarea`
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
`,c0=m.div`
  flex-shrink: 0;
`;function RO(e){const a=[e.activeId,e.secActiveId];return e.selectedPersonaId&&a.push("persona",e.selectedPersonaId),e.activePageId&&a.push("page",e.activePageId),"#"+a.map(encodeURIComponent).join("/")}function MO(e){const a=e.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function LO(e,a){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=MO(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=RO(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const ku="ultron-theme";function $O(){if(typeof window>"u")return null;const e=window.localStorage.getItem(ku);return e==="light"||e==="dark"?e:null}function TO(e){const a=document.documentElement;a.classList.toggle("dark",e==="dark"),a.classList.toggle("light",e==="light")}function AO(){const e=uh("(prefers-color-scheme: dark)"),[a,i]=g.useState($O);g.useEffect(()=>{TO(a),!(typeof window>"u")&&(a?window.localStorage.setItem(ku,a):window.localStorage.removeItem(ku))},[a]);const s=a??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const IO=m.button`
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
`;function EO(){const{theme:e,toggle:a}=AO(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(IO,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(L0,{size:18}):r.jsx(Y0,{size:18})})}const d0=[{id:"ultron",label:"Ultron",icon:r.jsx(ct,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(QS,{})},{id:"engaged",label:"Engaged",icon:r.jsx(KS,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(ZS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(XS,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(JS,{})}],u0=[{id:"apps",label:"Apps",icon:r.jsx(eN,{})}],h0=[{id:"docs",label:"Document Studio",icon:r.jsx(ul,{})},{id:"form",label:"Form",icon:r.jsx(tN,{})},{id:"tasks",label:"Tasks",icon:r.jsx(nN,{})},{id:"policy",label:"Policy",icon:r.jsx(rN,{}),activeIcon:r.jsx("img",{src:mz,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(co,{}),activeIcon:r.jsx("img",{src:gz,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(oN,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(aN,{})}],PO=m.button`
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
`,zO=ke`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,OO=ke`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,DO=ke`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,FO=m.span`
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
      ${zO} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${OO} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${DO} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,BO=m.button`
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
`;function WO({onDelete:e}){const a=i=>i.stopPropagation();return r.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:r.jsx(Ou,{placement:"bottom-end",width:168,trigger:r.jsx(BO,{type:"button","aria-label":"Page options",children:r.jsx(U0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(K0,{size:16}),onClick:e}]}]})})}const HO={needs_attention:r.jsx(ea,{size:16}),live:r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(yn,{size:16})},UO={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function qO({introAnswers:e,onRestartOnboarding:a}={}){const[i,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[h,f]=g.useState(null),[v,y]=g.useState(null),[x,w]=g.useState("ultron"),[k,T]=g.useState("employees"),_=TN(),[N,L]=g.useState(!!e),[A,R]=g.useState(!1),[C,O]=g.useState(!e),[j,M]=g.useState([]),[S,I]=g.useState(null),P=g.useRef(0),W=F=>{w("ultron"),L(!1),O(!1),I(F)},Y=()=>{w("ultron"),O(!1),I(null),L(!0)},q=()=>{const F=`page-${P.current++}`;M(ie=>[...ie,{id:F,title:"New page"}]),W(F)},[K,ee]=g.useState({}),[ae,re]=g.useState({}),se=g.useRef({}),Z=(F,ie)=>{const me=ie.trim();if(!me)return;const ue=(K[F]??[]).filter(fe=>fe.role==="ultron").length;ee(fe=>({...fe,[F]:[...fe[F]??[],{role:"operator",text:me}]})),re(fe=>({...fe,[F]:!0})),se.current[F]=window.setTimeout(()=>{ee(fe=>({...fe,[F]:[...fe[F]??[],{role:"ultron",text:th(me,ue)}]})),re(fe=>({...fe,[F]:!1})),delete se.current[F]},1100)},U=F=>{se.current[F]&&(window.clearTimeout(se.current[F]),delete se.current[F]),M(ie=>ie.filter(me=>me.id!==F)),ee(ie=>{const{[F]:me,...ue}=ie;return ue}),re(ie=>{const{[F]:me,...ue}=ie;return ue}),S===F&&(I(null),O(!0))},G=C?"live":_.selectedThread?UO[_.selectedThread.status]:"new";LO({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:y});const E=F=>F.map(ie=>({...ie,isActive:ie.id===i,disabled:ie.id!=="ultron",onClick:ie.id==="ultron"?()=>s("ultron"):void 0})),$=[{id:"memory",label:"Memory",icon:r.jsx(wl,{size:16}),isActive:x==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:r.jsx($0,{size:16})}],D=r.jsx(pv,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),V={id:"welcome",label:"Welcome",icon:r.jsx(ul,{}),isActive:N,onClick:Y},ne=j.map(F=>({id:F.id,label:F.title,icon:r.jsx(ul,{}),isActive:S===F.id,onClick:()=>W(F.id),trailingSlot:r.jsx(WO,{onDelete:()=>U(F.id)})})),le=x==="account"?vu.map(F=>({type:"single",item:{id:F.id,label:F.label,icon:F.icon,isActive:k===F.id,onClick:()=>T(F.id)}})):_.groups.flatMap(F=>{const ie=F.id==="needs_attention"?"new":F.id==="resolved"?"done":"working",me=F.id==="needs_attention"?F.threads.filter(ye=>ye.status==="analyzing"||_.revealedNewIds.includes(ye.id)):F.threads,ue=F.id==="needs_attention"&&!A||F.id==="live"&&A,fe=F.id==="needs_attention"?ne:[],_e={type:"group",group:{id:F.id,label:F.id==="needs_attention"?"New":F.label,icon:HO[F.id],trailingBadge:r.jsx(ia,{children:me.length+(ue?1:0)+fe.length}),defaultExpanded:!0,outlined:!1,children:[...ue?[V]:[],...fe,...me.map(ye=>({id:ye.id,label:ye.id.startsWith("detected_")?r.jsx(iT,{text:_m(ye.name,ie)}):_m(ye.name,ie),icon:ie==="new"?ye.status==="analyzing"?r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ie==="working"?r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:ye.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:ye.status==="unresolved"?"idle":"static",color:ye.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(ye.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!C&&!S&&G===ie&&_.selectedId===ye.id,onClick:()=>{w("ultron"),L(!1),O(!1),I(null),_.setSelectedId(ye.id)},trailingSlot:_.savedWorkflowIds.includes(ye.id)?r.jsx(Vn,{content:"Saved as workflow",placement:"top",children:r.jsx(FO,{"aria-label":"Saved as workflow",children:r.jsx(co,{})})}):void 0}))]}};return F.id==="resolved"?[{type:"divider",id:"done-divider"},_e]:F.id==="live"?[{type:"divider",id:"working-divider"},_e]:[_e]}),J=[{id:"main",label:"Workspace",items:E(d0)},{id:"tools",label:"Tools",items:E(u0)},{id:"bottom",label:"Apps",items:E(h0)}];return r.jsxs(r.Fragment,{children:[r.jsx(EO,{}),r.jsx(fz,{items:E(d0),toolItems:E(u0),bottomItems:E(h0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:a,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:le,menuHeader:x==="ultron"?r.jsx(PO,{$active:C&&!S,onClick:()=>{w("ultron"),L(!1),O(!0),I(null)},"aria-label":"Live — Ultron presence","aria-current":C&&!S?"page":void 0,children:r.jsx(eT,{onNew:q})}):void 0,pageEntries:$,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:D,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:v,selectedPersonaId:h,moduleGroups:J,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:F=>{F==="ultron"&&s("ultron")},onSelectPersona:f},children:x==="memory"?r.jsx(dT,{}):x==="account"?r.jsx(CT,{collectionId:k}):N?r.jsx(Mz,{answers:e,onContinued:()=>R(!0)}):S?r.jsx(O$,{messages:K[S]??[],replying:ae[S]??!1,onSend:F=>Z(S,F)},S):r.jsx(M$,{threads:_.threads,stageById:_.stageById,section:G,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),L(!1),O(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const p0="cubic-bezier(0.22, 1, 0.36, 1)",f0=ke`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,VO=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,GO=m.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${f0} 460ms ${p0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${f0} 500ms ${p0} 90ms both;
  }
  main {
    animation: ${VO} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,tu="tb:onboarding-complete";function YO(){const[e,a]=g.useState(()=>{try{return window.sessionStorage.getItem(tu)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=h=>{try{window.sessionStorage.setItem(tu,"1")}catch{}s(h),a(!0)},d=()=>{try{window.sessionStorage.removeItem(tu)}catch{}window.location.hash="",window.location.reload()};return e?r.jsx(GO,{children:r.jsx(qO,{introAnswers:i??void 0,onRestartOnboarding:d})}):r.jsx(LE,{onEnterApp:l})}gx.createRoot(document.getElementById("root")).render(r.jsx(Qt.StrictMode,{children:r.jsx(H9,{children:r.jsx(YO,{})})}));
