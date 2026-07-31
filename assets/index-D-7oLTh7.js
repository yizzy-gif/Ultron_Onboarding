(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=a(l);fetch(l.href,d)}})();function J0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qd={exports:{}},ui={},Vd={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function y3(){if(bf)return Ye;bf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,$={};function N(A,z,ne){this.props=A,this.context=z,this.refs=$,this.updater=ne||j}N.prototype.isReactComponent={},N.prototype.setState=function(A,z){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,z,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function R(){}R.prototype=N.prototype;function S(A,z,ne){this.props=A,this.context=z,this.refs=$,this.updater=ne||j}var C=S.prototype=new R;C.constructor=S,_(C,N.prototype),C.isPureReactComponent=!0;var P=Array.isArray,L=Object.prototype.hasOwnProperty,T={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function M(A,z,ne){var U,ee={},de=null,O=null;if(z!=null)for(U in z.ref!==void 0&&(O=z.ref),z.key!==void 0&&(de=""+z.key),z)L.call(z,U)&&!E.hasOwnProperty(U)&&(ee[U]=z[U]);var Y=arguments.length-2;if(Y===1)ee.children=ne;else if(1<Y){for(var ie=Array(Y),xe=0;xe<Y;xe++)ie[xe]=arguments[xe+2];ee.children=ie}if(A&&A.defaultProps)for(U in Y=A.defaultProps,Y)ee[U]===void 0&&(ee[U]=Y[U]);return{$$typeof:e,type:A,key:de,ref:O,props:ee,_owner:T.current}}function F(A,z){return{$$typeof:e,type:A.type,key:z,ref:A.ref,props:A.props,_owner:A._owner}}function V(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function W(A){var z={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ne){return z[ne]})}var B=/\/+/g;function K(A,z){return typeof A=="object"&&A!==null&&A.key!=null?W(""+A.key):z.toString(36)}function X(A,z,ne,U,ee){var de=typeof A;(de==="undefined"||de==="boolean")&&(A=null);var O=!1;if(A===null)O=!0;else switch(de){case"string":case"number":O=!0;break;case"object":switch(A.$$typeof){case e:case o:O=!0}}if(O)return O=A,ee=ee(O),A=U===""?"."+K(O,0):U,P(ee)?(ne="",A!=null&&(ne=A.replace(B,"$&/")+"/"),X(ee,z,ne,"",function(xe){return xe})):ee!=null&&(V(ee)&&(ee=F(ee,ne+(!ee.key||O&&O.key===ee.key?"":(""+ee.key).replace(B,"$&/")+"/")+A)),z.push(ee)),1;if(O=0,U=U===""?".":U+":",P(A))for(var Y=0;Y<A.length;Y++){de=A[Y];var ie=U+K(de,Y);O+=X(de,z,ne,ie,ee)}else if(ie=b(A),typeof ie=="function")for(A=ie.call(A),Y=0;!(de=A.next()).done;)de=de.value,ie=U+K(de,Y++),O+=X(de,z,ne,ie,ee);else if(de==="object")throw z=String(A),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return O}function ae(A,z,ne){if(A==null)return A;var U=[],ee=0;return X(A,U,"","",function(de){return z.call(ne,de,ee++)}),U}function ce(A){if(A._status===-1){var z=A._result;z=z(),z.then(function(ne){(A._status===0||A._status===-1)&&(A._status=1,A._result=ne)},function(ne){(A._status===0||A._status===-1)&&(A._status=2,A._result=ne)}),A._status===-1&&(A._status=0,A._result=z)}if(A._status===1)return A._result.default;throw A._result}var oe={current:null},Q={transition:null},D={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:T};function G(){throw Error("act(...) is not supported in production builds of React.")}return Ye.Children={map:ae,forEach:function(A,z,ne){ae(A,function(){z.apply(this,arguments)},ne)},count:function(A){var z=0;return ae(A,function(){z++}),z},toArray:function(A){return ae(A,function(z){return z})||[]},only:function(A){if(!V(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ye.Component=N,Ye.Fragment=a,Ye.Profiler=l,Ye.PureComponent=S,Ye.StrictMode=s,Ye.Suspense=v,Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,Ye.act=G,Ye.cloneElement=function(A,z,ne){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var U=_({},A.props),ee=A.key,de=A.ref,O=A._owner;if(z!=null){if(z.ref!==void 0&&(de=z.ref,O=T.current),z.key!==void 0&&(ee=""+z.key),A.type&&A.type.defaultProps)var Y=A.type.defaultProps;for(ie in z)L.call(z,ie)&&!E.hasOwnProperty(ie)&&(U[ie]=z[ie]===void 0&&Y!==void 0?Y[ie]:z[ie])}var ie=arguments.length-2;if(ie===1)U.children=ne;else if(1<ie){Y=Array(ie);for(var xe=0;xe<ie;xe++)Y[xe]=arguments[xe+2];U.children=Y}return{$$typeof:e,type:A.type,key:ee,ref:de,props:U,_owner:O}},Ye.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},Ye.createElement=M,Ye.createFactory=function(A){var z=M.bind(null,A);return z.type=A,z},Ye.createRef=function(){return{current:null}},Ye.forwardRef=function(A){return{$$typeof:f,render:A}},Ye.isValidElement=V,Ye.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:ce}},Ye.memo=function(A,z){return{$$typeof:y,type:A,compare:z===void 0?null:z}},Ye.startTransition=function(A){var z=Q.transition;Q.transition={};try{A()}finally{Q.transition=z}},Ye.unstable_act=G,Ye.useCallback=function(A,z){return oe.current.useCallback(A,z)},Ye.useContext=function(A){return oe.current.useContext(A)},Ye.useDebugValue=function(){},Ye.useDeferredValue=function(A){return oe.current.useDeferredValue(A)},Ye.useEffect=function(A,z){return oe.current.useEffect(A,z)},Ye.useId=function(){return oe.current.useId()},Ye.useImperativeHandle=function(A,z,ne){return oe.current.useImperativeHandle(A,z,ne)},Ye.useInsertionEffect=function(A,z){return oe.current.useInsertionEffect(A,z)},Ye.useLayoutEffect=function(A,z){return oe.current.useLayoutEffect(A,z)},Ye.useMemo=function(A,z){return oe.current.useMemo(A,z)},Ye.useReducer=function(A,z,ne){return oe.current.useReducer(A,z,ne)},Ye.useRef=function(A){return oe.current.useRef(A)},Ye.useState=function(A){return oe.current.useState(A)},Ye.useSyncExternalStore=function(A,z,ne){return oe.current.useSyncExternalStore(A,z,ne)},Ye.useTransition=function(){return oe.current.useTransition()},Ye.version="18.3.1",Ye}var kf;function Zu(){return kf||(kf=1,Vd.exports=y3()),Vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function w3(){if(_f)return ui;_f=1;var e=Zu(),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,v,y){var x,w={},b=null,j=null;y!==void 0&&(b=""+y),v.key!==void 0&&(b=""+v.key),v.ref!==void 0&&(j=v.ref);for(x in v)s.call(v,x)&&!d.hasOwnProperty(x)&&(w[x]=v[x]);if(f&&f.defaultProps)for(x in v=f.defaultProps,v)w[x]===void 0&&(w[x]=v[x]);return{$$typeof:o,type:f,key:b,ref:j,props:w,_owner:l.current}}return ui.Fragment=a,ui.jsx=h,ui.jsxs=h,ui}var Cf;function b3(){return Cf||(Cf=1,qd.exports=w3()),qd.exports}var n=b3(),g=Zu();const vn=J0(g);var Ks={},Gd={exports:{}},hn={},Yd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function k3(){return jf||(jf=1,(function(e){function o(Q,D){var G=Q.length;Q.push(D);e:for(;0<G;){var A=G-1>>>1,z=Q[A];if(0<l(z,D))Q[A]=D,Q[G]=z,G=A;else break e}}function a(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var D=Q[0],G=Q.pop();if(G!==D){Q[0]=G;e:for(var A=0,z=Q.length,ne=z>>>1;A<ne;){var U=2*(A+1)-1,ee=Q[U],de=U+1,O=Q[de];if(0>l(ee,G))de<z&&0>l(O,ee)?(Q[A]=O,Q[de]=G,A=de):(Q[A]=ee,Q[U]=G,A=U);else if(de<z&&0>l(O,G))Q[A]=O,Q[de]=G,A=de;else break e}}return D}function l(Q,D){var G=Q.sortIndex-D.sortIndex;return G!==0?G:Q.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var v=[],y=[],x=1,w=null,b=3,j=!1,_=!1,$=!1,N=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Q){for(var D=a(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=Q)s(y),D.sortIndex=D.expirationTime,o(v,D);else break;D=a(y)}}function P(Q){if($=!1,C(Q),!_)if(a(v)!==null)_=!0,ce(L);else{var D=a(y);D!==null&&oe(P,D.startTime-Q)}}function L(Q,D){_=!1,$&&($=!1,R(M),M=-1),j=!0;var G=b;try{for(C(D),w=a(v);w!==null&&(!(w.expirationTime>D)||Q&&!W());){var A=w.callback;if(typeof A=="function"){w.callback=null,b=w.priorityLevel;var z=A(w.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?w.callback=z:w===a(v)&&s(v),C(D)}else s(v);w=a(v)}if(w!==null)var ne=!0;else{var U=a(y);U!==null&&oe(P,U.startTime-D),ne=!1}return ne}finally{w=null,b=G,j=!1}}var T=!1,E=null,M=-1,F=5,V=-1;function W(){return!(e.unstable_now()-V<F)}function B(){if(E!==null){var Q=e.unstable_now();V=Q;var D=!0;try{D=E(!0,Q)}finally{D?K():(T=!1,E=null)}}else T=!1}var K;if(typeof S=="function")K=function(){S(B)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=B,K=function(){ae.postMessage(null)}}else K=function(){N(B,0)};function ce(Q){E=Q,T||(T=!0,K())}function oe(Q,D){M=N(function(){Q(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){_||j||(_=!0,ce(L))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return a(v)},e.unstable_next=function(Q){switch(b){case 1:case 2:case 3:var D=3;break;default:D=b}var G=b;b=D;try{return Q()}finally{b=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,D){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var G=b;b=Q;try{return D()}finally{b=G}},e.unstable_scheduleCallback=function(Q,D,G){var A=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?A+G:A):G=A,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,Q={id:x++,callback:D,priorityLevel:Q,startTime:G,expirationTime:z,sortIndex:-1},G>A?(Q.sortIndex=G,o(y,Q),a(v)===null&&Q===a(y)&&($?(R(M),M=-1):$=!0,oe(P,G-A))):(Q.sortIndex=z,o(v,Q),_||j||(_=!0,ce(L))),Q},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(Q){var D=b;return function(){var G=b;b=D;try{return Q.apply(this,arguments)}finally{b=G}}}})(Kd)),Kd}var Sf;function _3(){return Sf||(Sf=1,Yd.exports=k3()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function C3(){if(Mf)return hn;Mf=1;var e=Zu(),o=_3();function a(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function b(t){return v.call(w,t)?!0:v.call(x,t)?!1:y.test(t)?w[t]=!0:(x[t]=!0,!1)}function j(t,r,i,c){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,r,i,c){if(r===null||typeof r>"u"||j(t,r,i,c))return!0;if(c)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function $(t,r,i,c,u,m,k){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=k}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new $(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function S(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(R,S);N[r]=new $(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(R,S);N[r]=new $(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(R,S);N[r]=new $(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,r,i,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,i,u,c)&&(i=null),c||u===null?b(r)&&(i===null?t.removeAttribute(r):t.setAttribute(r,""+i)):u.mustUseProperty?t[u.propertyName]=i===null?u.type===3?!1:"":i:(r=u.attributeName,c=u.attributeNamespace,i===null?t.removeAttribute(r):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,c?t.setAttributeNS(c,r,i):t.setAttribute(r,i))))}var P=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),W=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,A;function z(t){if(A===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return`
`+A+t}var ne=!1;function U(t,r){if(!t||ne)return"";ne=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),k=u.length-1,I=m.length-1;1<=k&&0<=I&&u[k]!==m[I];)I--;for(;1<=k&&0<=I;k--,I--)if(u[k]!==m[I]){if(k!==1||I!==1)do if(k--,I--,0>I||u[k]!==m[I]){var H=`
`+u[k].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=k&&0<=I);break}}}finally{ne=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?z(t):""}function ee(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case T:return"Portal";case F:return"Profiler";case M:return"StrictMode";case K:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W:return(t.displayName||"Context")+".Consumer";case V:return(t._context.displayName||"Context")+".Provider";case B:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:de(t.type)||"Memo";case ce:r=t._payload,t=t._init;try{return de(t(r))}catch{}}return null}function O(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(r);case 8:return r===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Y(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ie(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function xe(t){var r=ie(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,m=i.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(k){c=""+k,m.call(this,k)}}),Object.defineProperty(t,r,{enumerable:i.enumerable}),{getValue:function(){return c},setValue:function(k){c=""+k},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function le(t){t._valueTracker||(t._valueTracker=xe(t))}function we(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var i=r.getValue(),c="";return t&&(c=ie(t)?t.checked?"true":"false":t.value),t=c,t!==i?(r.setValue(t),!0):!1}function ye(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Se(t,r){var i=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function De(t,r){var i=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;i=Y(r.value!=null?r.value:i),t._wrapperState={initialChecked:c,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ue(t,r){r=r.checked,r!=null&&C(t,"checked",r,!1)}function _e(t,r){ue(t,r);var i=Y(r.value),c=r.type;if(i!=null)c==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Le(t,r.type,i):r.hasOwnProperty("defaultValue")&&Le(t,r.type,Y(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ne(t,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,i||r===t.value||(t.value=r),t.defaultValue=r}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Le(t,r,i){(r!=="number"||ye(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Ue=Array.isArray;function Ge(t,r,i,c){if(t=t.options,r){r={};for(var u=0;u<i.length;u++)r["$"+i[u]]=!0;for(i=0;i<t.length;i++)u=r.hasOwnProperty("$"+t[i].value),t[i].selected!==u&&(t[i].selected=u),u&&c&&(t[i].defaultSelected=!0)}else{for(i=""+Y(i),r=null,u=0;u<t.length;u++){if(t[u].value===i){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function ot(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ee(t,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(a(92));if(Ue(i)){if(1<i.length)throw Error(a(93));i=i[0]}r=i}r==null&&(r=""),i=r}t._wrapperState={initialValue:Y(i)}}function Qe(t,r){var i=Y(r.value),c=Y(r.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),r.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),c!=null&&(t.defaultValue=""+c)}function lt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function bt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function et(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?bt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ut,Ot=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,i,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(ut=ut||document.createElement("div"),ut.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ut.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ct(t,r){if(r){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=r;return}}t.textContent=r}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uo=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(t){uo.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Un[r]=Un[t]})});function Rr(t,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||Un.hasOwnProperty(t)&&Un[t]?(""+r).trim():r+"px"}function Ie(t,r){t=t.style;for(var i in r)if(r.hasOwnProperty(i)){var c=i.indexOf("--")===0,u=Rr(i,r[i],c);i==="float"&&(i="cssFloat"),c?t.setProperty(i,u):t[i]=u}}var at=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(t,r){if(r){if(at[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function me(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var He=null;function qe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var St=null,mt=null,Nn=null;function ct(t){if(t=Qa(t)){if(typeof St!="function")throw Error(a(280));var r=t.stateNode;r&&(r=ds(r),St(t.stateNode,t.type,r))}}function Di(t){mt?Nn?Nn.push(t):Nn=[t]:mt=t}function Bi(){if(mt){var t=mt,r=Nn;if(Nn=mt=null,ct(t),r)for(t=0;t<r.length;t++)ct(r[t])}}function Oo(t,r){return t(r)}function Hi(){}var La=!1;function ho(t,r,i){if(La)return t(r,i);La=!0;try{return Oo(t,r,i)}finally{La=!1,(mt!==null||Nn!==null)&&(Hi(),Bi())}}function Ln(t,r){var i=t.stateNode;if(i===null)return null;var c=ds(i);if(c===null)return null;i=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(a(231,r,typeof i));return i}var Fo=!1;if(f)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Fo=!1}function dc(t,r,i,c,u,m,k,I,H){var re=Array.prototype.slice.call(arguments,3);try{r.apply(i,re)}catch(pe){this.onError(pe)}}var J=!1,ve=null,$e=!1,Je=null,Fe={onError:function(t){J=!0,ve=t}};function Ft(t,r,i,c,u,m,k,I,H){J=!1,ve=null,dc.apply(Fe,arguments)}function tn(t,r,i,c,u,m,k,I,H){if(Ft.apply(this,arguments),J){if(J){var re=ve;J=!1,ve=null}else throw Error(a(198));$e||($e=!0,Je=re)}}function ht(t){var r=t,i=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(i=r.return),t=r.return;while(t)}return r.tag===3?i:null}function An(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Wi(t){if(ht(t)!==t)throw Error(a(188))}function Rx(t){var r=t.alternate;if(!r){if(r=ht(t),r===null)throw Error(a(188));return r!==t?null:t}for(var i=t,c=r;;){var u=i.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){i=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===i)return Wi(u),t;if(m===c)return Wi(u),r;m=m.sibling}throw Error(a(188))}if(i.return!==c.return)i=u,c=m;else{for(var k=!1,I=u.child;I;){if(I===i){k=!0,i=u,c=m;break}if(I===c){k=!0,c=u,i=m;break}I=I.sibling}if(!k){for(I=m.child;I;){if(I===i){k=!0,i=m,c=u;break}if(I===c){k=!0,c=m,i=u;break}I=I.sibling}if(!k)throw Error(a(189))}}if(i.alternate!==c)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?t:r}function qh(t){return t=Rx(t),t!==null?Vh(t):null}function Vh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Vh(t);if(r!==null)return r;t=t.sibling}return null}var Gh=o.unstable_scheduleCallback,Yh=o.unstable_cancelCallback,Nx=o.unstable_shouldYield,Lx=o.unstable_requestPaint,Mt=o.unstable_now,Ax=o.unstable_getCurrentPriorityLevel,uc=o.unstable_ImmediatePriority,Kh=o.unstable_UserBlockingPriority,Ui=o.unstable_NormalPriority,Tx=o.unstable_LowPriority,Qh=o.unstable_IdlePriority,qi=null,ar=null;function Ex(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(qi,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:zx,Ix=Math.log,Px=Math.LN2;function zx(t){return t>>>=0,t===0?32:31-(Ix(t)/Px|0)|0}var Vi=64,Gi=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yi(t,r){var i=t.pendingLanes;if(i===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,k=i&268435455;if(k!==0){var I=k&~u;I!==0?c=Aa(I):(m&=k,m!==0&&(c=Aa(m)))}else k=i&~u,k!==0?c=Aa(k):m!==0&&(c=Aa(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=i&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)i=31-qn(r),u=1<<i,c|=t[i],r&=~u;return c}function Ox(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(t,r){for(var i=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var k=31-qn(m),I=1<<k,H=u[k];H===-1?((I&i)===0||(I&c)!==0)&&(u[k]=Ox(I,r)):H<=r&&(t.expiredLanes|=I),m&=~I}}function hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zh(){var t=Vi;return Vi<<=1,(Vi&4194240)===0&&(Vi=64),t}function pc(t){for(var r=[],i=0;31>i;i++)r.push(t);return r}function Ta(t,r,i){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-qn(r),t[r]=i}function Dx(t,r){var i=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<i;){var u=31-qn(i),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,i&=~m}}function fc(t,r){var i=t.entangledLanes|=r;for(t=t.entanglements;i;){var c=31-qn(i),u=1<<c;u&r|t[c]&r&&(t[c]|=r),i&=~u}}var it=0;function Xh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jh,mc,ep,tp,np,gc=!1,Ki=[],Lr=null,Ar=null,Tr=null,Ea=new Map,Ia=new Map,Er=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,r){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ea.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(r.pointerId)}}function Pa(t,r,i,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:i,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=Qa(r),r!==null&&mc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Hx(t,r,i,c,u){switch(r){case"focusin":return Lr=Pa(Lr,t,r,i,c,u),!0;case"dragenter":return Ar=Pa(Ar,t,r,i,c,u),!0;case"mouseover":return Tr=Pa(Tr,t,r,i,c,u),!0;case"pointerover":var m=u.pointerId;return Ea.set(m,Pa(Ea.get(m)||null,t,r,i,c,u)),!0;case"gotpointercapture":return m=u.pointerId,Ia.set(m,Pa(Ia.get(m)||null,t,r,i,c,u)),!0}return!1}function op(t){var r=po(t.target);if(r!==null){var i=ht(r);if(i!==null){if(r=i.tag,r===13){if(r=An(i),r!==null){t.blockedOn=r,np(t.priority,function(){ep(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var i=xc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var c=new i.constructor(i.type,i);He=c,i.target.dispatchEvent(c),He=null}else return r=Qa(i),r!==null&&mc(r),t.blockedOn=i,!1;r.shift()}return!0}function ap(t,r,i){Qi(t)&&i.delete(r)}function Wx(){gc=!1,Lr!==null&&Qi(Lr)&&(Lr=null),Ar!==null&&Qi(Ar)&&(Ar=null),Tr!==null&&Qi(Tr)&&(Tr=null),Ea.forEach(ap),Ia.forEach(ap)}function za(t,r){t.blockedOn===r&&(t.blockedOn=null,gc||(gc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wx)))}function Oa(t){function r(u){return za(u,t)}if(0<Ki.length){za(Ki[0],t);for(var i=1;i<Ki.length;i++){var c=Ki[i];c.blockedOn===t&&(c.blockedOn=null)}}for(Lr!==null&&za(Lr,t),Ar!==null&&za(Ar,t),Tr!==null&&za(Tr,t),Ea.forEach(r),Ia.forEach(r),i=0;i<Er.length;i++)c=Er[i],c.blockedOn===t&&(c.blockedOn=null);for(;0<Er.length&&(i=Er[0],i.blockedOn===null);)op(i),i.blockedOn===null&&Er.shift()}var Do=P.ReactCurrentBatchConfig,Zi=!0;function Ux(t,r,i,c){var u=it,m=Do.transition;Do.transition=null;try{it=1,vc(t,r,i,c)}finally{it=u,Do.transition=m}}function qx(t,r,i,c){var u=it,m=Do.transition;Do.transition=null;try{it=4,vc(t,r,i,c)}finally{it=u,Do.transition=m}}function vc(t,r,i,c){if(Zi){var u=xc(t,r,i,c);if(u===null)Ic(t,r,c,Xi,i),rp(t,c);else if(Hx(u,t,r,i,c))c.stopPropagation();else if(rp(t,c),r&4&&-1<Bx.indexOf(t)){for(;u!==null;){var m=Qa(u);if(m!==null&&Jh(m),m=xc(t,r,i,c),m===null&&Ic(t,r,c,Xi,i),m===u)break;u=m}u!==null&&c.stopPropagation()}else Ic(t,r,c,null,i)}}var Xi=null;function xc(t,r,i,c){if(Xi=null,t=qe(c),t=po(t),t!==null)if(r=ht(t),r===null)t=null;else if(i=r.tag,i===13){if(t=An(r),t!==null)return t;t=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Xi=t,null}function ip(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ax()){case uc:return 1;case Kh:return 4;case Ui:case Tx:return 16;case Qh:return 536870912;default:return 16}default:return 16}}var Ir=null,yc=null,Ji=null;function sp(){if(Ji)return Ji;var t,r=yc,i=r.length,c,u="value"in Ir?Ir.value:Ir.textContent,m=u.length;for(t=0;t<i&&r[t]===u[t];t++);var k=i-t;for(c=1;c<=k&&r[i-c]===u[m-c];c++);return Ji=u.slice(t,1<c?1-c:void 0)}function es(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ts(){return!0}function lp(){return!1}function yn(t){function r(i,c,u,m,k){this._reactName=i,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=k,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(i=t[I],this[I]=i?i(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ts:lp,this.isPropagationStopped=lp,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),r}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=yn(Bo),Fa=G({},Bo,{view:0,detail:0}),Vx=yn(Fa),bc,kc,Da,ns=G({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(bc=t.screenX-Da.screenX,kc=t.screenY-Da.screenY):kc=bc=0,Da=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),cp=yn(ns),Gx=G({},ns,{dataTransfer:0}),Yx=yn(Gx),Kx=G({},Fa,{relatedTarget:0}),_c=yn(Kx),Qx=G({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=yn(Qx),Xx=G({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jx=yn(Xx),ey=G({},Bo,{data:0}),dp=yn(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ry[t])?!!r[t]:!1}function Cc(){return oy}var ay=G({},Fa,{key:function(t){if(t.key){var r=ty[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=es(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?es(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?es(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iy=yn(ay),sy=G({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=yn(sy),ly=G({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),cy=yn(ly),dy=G({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=yn(dy),hy=G({},ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),py=yn(hy),fy=[9,13,27,32],jc=f&&"CompositionEvent"in window,Ba=null;f&&"documentMode"in document&&(Ba=document.documentMode);var my=f&&"TextEvent"in window&&!Ba,hp=f&&(!jc||Ba&&8<Ba&&11>=Ba),pp=" ",fp=!1;function mp(t,r){switch(t){case"keyup":return fy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function gy(t,r){switch(t){case"compositionend":return gp(r);case"keypress":return r.which!==32?null:(fp=!0,pp);case"textInput":return t=r.data,t===pp&&fp?null:t;default:return null}}function vy(t,r){if(Ho)return t==="compositionend"||!jc&&mp(t,r)?(t=sp(),Ji=yc=Ir=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hp&&r.locale!=="ko"?null:r.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!xy[t.type]:r==="textarea"}function xp(t,r,i,c){Di(c),r=ss(r,"onChange"),0<r.length&&(i=new wc("onChange","change",null,i,c),t.push({event:i,listeners:r}))}var Ha=null,Wa=null;function yy(t){Pp(t,0)}function rs(t){var r=Go(t);if(we(r))return t}function wy(t,r){if(t==="change")return r}var yp=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Mc=typeof wp.oninput=="function"}Sc=Mc}else Sc=!1;yp=Sc&&(!document.documentMode||9<document.documentMode)}function bp(){Ha&&(Ha.detachEvent("onpropertychange",kp),Wa=Ha=null)}function kp(t){if(t.propertyName==="value"&&rs(Wa)){var r=[];xp(r,Wa,t,qe(t)),ho(yy,r)}}function by(t,r,i){t==="focusin"?(bp(),Ha=r,Wa=i,Ha.attachEvent("onpropertychange",kp)):t==="focusout"&&bp()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rs(Wa)}function _y(t,r){if(t==="click")return rs(r)}function Cy(t,r){if(t==="input"||t==="change")return rs(r)}function jy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Vn=typeof Object.is=="function"?Object.is:jy;function Ua(t,r){if(Vn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var i=Object.keys(t),c=Object.keys(r);if(i.length!==c.length)return!1;for(c=0;c<i.length;c++){var u=i[c];if(!v.call(r,u)||!Vn(t[u],r[u]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,r){var i=_p(t);t=0;for(var c;i;){if(i.nodeType===3){if(c=t+i.textContent.length,t<=r&&c>=r)return{node:i,offset:r-t};t=c}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=_p(i)}}function jp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?jp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Sp(){for(var t=window,r=ye();r instanceof t.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)t=r.contentWindow;else break;r=ye(t.document)}return r}function $c(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Sy(t){var r=Sp(),i=t.focusedElem,c=t.selectionRange;if(r!==i&&i&&i.ownerDocument&&jp(i.ownerDocument.documentElement,i)){if(c!==null&&$c(i)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(t,i.value.length);else if(t=(r=i.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=i.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=Cp(i,m);var k=Cp(i,c);u&&k&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==k.node||t.focusOffset!==k.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(k.node,k.offset)):(r.setEnd(k.node,k.offset),t.addRange(r)))}}for(r=[],t=i;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)t=r[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=f&&"documentMode"in document&&11>=document.documentMode,Wo=null,Rc=null,qa=null,Nc=!1;function Mp(t,r,i){var c=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Nc||Wo==null||Wo!==ye(c)||(c=Wo,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qa&&Ua(qa,c)||(qa=c,c=ss(Rc,"onSelect"),0<c.length&&(r=new wc("onSelect","select",null,r,i),t.push({event:r,listeners:c}),r.target=Wo)))}function os(t,r){var i={};return i[t.toLowerCase()]=r.toLowerCase(),i["Webkit"+t]="webkit"+r,i["Moz"+t]="moz"+r,i}var Uo={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionend:os("Transition","TransitionEnd")},Lc={},$p={};f&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function as(t){if(Lc[t])return Lc[t];if(!Uo[t])return t;var r=Uo[t],i;for(i in r)if(r.hasOwnProperty(i)&&i in $p)return Lc[t]=r[i];return t}var Rp=as("animationend"),Np=as("animationiteration"),Lp=as("animationstart"),Ap=as("transitionend"),Tp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,r){Tp.set(t,r),d(r,[t])}for(var Ac=0;Ac<Ep.length;Ac++){var Tc=Ep[Ac],$y=Tc.toLowerCase(),Ry=Tc[0].toUpperCase()+Tc.slice(1);Pr($y,"on"+Ry)}Pr(Rp,"onAnimationEnd"),Pr(Np,"onAnimationIteration"),Pr(Lp,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Ip(t,r,i){var c=t.type||"unknown-event";t.currentTarget=i,tn(c,r,void 0,t),t.currentTarget=null}function Pp(t,r){r=(r&4)!==0;for(var i=0;i<t.length;i++){var c=t[i],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var k=c.length-1;0<=k;k--){var I=c[k],H=I.instance,re=I.currentTarget;if(I=I.listener,H!==m&&u.isPropagationStopped())break e;Ip(u,I,re),m=H}else for(k=0;k<c.length;k++){if(I=c[k],H=I.instance,re=I.currentTarget,I=I.listener,H!==m&&u.isPropagationStopped())break e;Ip(u,I,re),m=H}}}if($e)throw t=Je,$e=!1,Je=null,t}function gt(t,r){var i=r[Bc];i===void 0&&(i=r[Bc]=new Set);var c=t+"__bubble";i.has(c)||(zp(r,t,2,!1),i.add(c))}function Ec(t,r,i){var c=0;r&&(c|=4),zp(i,t,c,r)}var is="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[is]){t[is]=!0,s.forEach(function(i){i!=="selectionchange"&&(Ny.has(i)||Ec(i,!1,t),Ec(i,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[is]||(r[is]=!0,Ec("selectionchange",!1,r))}}function zp(t,r,i,c){switch(ip(r)){case 1:var u=Ux;break;case 4:u=qx;break;default:u=vc}i=u.bind(null,r,i,t),u=void 0,!Fo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,i,{capture:!0,passive:u}):t.addEventListener(r,i,!0):u!==void 0?t.addEventListener(r,i,{passive:u}):t.addEventListener(r,i,!1)}function Ic(t,r,i,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var k=c.tag;if(k===3||k===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(k===4)for(k=c.return;k!==null;){var H=k.tag;if((H===3||H===4)&&(H=k.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;k=k.return}for(;I!==null;){if(k=po(I),k===null)return;if(H=k.tag,H===5||H===6){c=m=k;continue e}I=I.parentNode}}c=c.return}ho(function(){var re=m,pe=qe(i),fe=[];e:{var he=Tp.get(t);if(he!==void 0){var be=wc,je=t;switch(t){case"keypress":if(es(i)===0)break e;case"keydown":case"keyup":be=iy;break;case"focusin":je="focus",be=_c;break;case"focusout":je="blur",be=_c;break;case"beforeblur":case"afterblur":be=_c;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=cy;break;case Rp:case Np:case Lp:be=Zx;break;case Ap:be=uy;break;case"scroll":be=Vx;break;case"wheel":be=py;break;case"copy":case"cut":case"paste":be=Jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=up}var Me=(r&4)!==0,$t=!Me&&t==="scroll",Z=Me?he!==null?he+"Capture":null:he;Me=[];for(var q=re,te;q!==null;){te=q;var ge=te.stateNode;if(te.tag===5&&ge!==null&&(te=ge,Z!==null&&(ge=Ln(q,Z),ge!=null&&Me.push(Ya(q,ge,te)))),$t)break;q=q.return}0<Me.length&&(he=new be(he,je,null,i,pe),fe.push({event:he,listeners:Me}))}}if((r&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",he&&i!==He&&(je=i.relatedTarget||i.fromElement)&&(po(je)||je[pr]))break e;if((be||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,be?(je=i.relatedTarget||i.toElement,be=re,je=je?po(je):null,je!==null&&($t=ht(je),je!==$t||je.tag!==5&&je.tag!==6)&&(je=null)):(be=null,je=re),be!==je)){if(Me=cp,ge="onMouseLeave",Z="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Me=up,ge="onPointerLeave",Z="onPointerEnter",q="pointer"),$t=be==null?he:Go(be),te=je==null?he:Go(je),he=new Me(ge,q+"leave",be,i,pe),he.target=$t,he.relatedTarget=te,ge=null,po(pe)===re&&(Me=new Me(Z,q+"enter",je,i,pe),Me.target=te,Me.relatedTarget=$t,ge=Me),$t=ge,be&&je)t:{for(Me=be,Z=je,q=0,te=Me;te;te=qo(te))q++;for(te=0,ge=Z;ge;ge=qo(ge))te++;for(;0<q-te;)Me=qo(Me),q--;for(;0<te-q;)Z=qo(Z),te--;for(;q--;){if(Me===Z||Z!==null&&Me===Z.alternate)break t;Me=qo(Me),Z=qo(Z)}Me=null}else Me=null;be!==null&&Op(fe,he,be,Me,!1),je!==null&&$t!==null&&Op(fe,$t,je,Me,!0)}}e:{if(he=re?Go(re):window,be=he.nodeName&&he.nodeName.toLowerCase(),be==="select"||be==="input"&&he.type==="file")var Re=wy;else if(vp(he))if(yp)Re=Cy;else{Re=ky;var Ae=by}else(be=he.nodeName)&&be.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Re=_y);if(Re&&(Re=Re(t,re))){xp(fe,Re,i,pe);break e}Ae&&Ae(t,he,re),t==="focusout"&&(Ae=he._wrapperState)&&Ae.controlled&&he.type==="number"&&Le(he,"number",he.value)}switch(Ae=re?Go(re):window,t){case"focusin":(vp(Ae)||Ae.contentEditable==="true")&&(Wo=Ae,Rc=re,qa=null);break;case"focusout":qa=Rc=Wo=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Mp(fe,i,pe);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Mp(fe,i,pe)}var Te;if(jc)e:{switch(t){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Ho?mp(t,i)&&(Pe="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Pe="onCompositionStart");Pe&&(hp&&i.locale!=="ko"&&(Ho||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Ho&&(Te=sp()):(Ir=pe,yc="value"in Ir?Ir.value:Ir.textContent,Ho=!0)),Ae=ss(re,Pe),0<Ae.length&&(Pe=new dp(Pe,t,null,i,pe),fe.push({event:Pe,listeners:Ae}),Te?Pe.data=Te:(Te=gp(i),Te!==null&&(Pe.data=Te)))),(Te=my?gy(t,i):vy(t,i))&&(re=ss(re,"onBeforeInput"),0<re.length&&(pe=new dp("onBeforeInput","beforeinput",null,i,pe),fe.push({event:pe,listeners:re}),pe.data=Te))}Pp(fe,r)})}function Ya(t,r,i){return{instance:t,listener:r,currentTarget:i}}function ss(t,r){for(var i=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=Ln(t,i),m!=null&&c.unshift(Ya(t,m,u)),m=Ln(t,r),m!=null&&c.push(Ya(t,m,u))),t=t.return}return c}function qo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Op(t,r,i,c,u){for(var m=r._reactName,k=[];i!==null&&i!==c;){var I=i,H=I.alternate,re=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&re!==null&&(I=re,u?(H=Ln(i,m),H!=null&&k.unshift(Ya(i,H,I))):u||(H=Ln(i,m),H!=null&&k.push(Ya(i,H,I)))),i=i.return}k.length!==0&&t.push({event:r,listeners:k})}var Ly=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(Ly,`
`).replace(Ay,"")}function ls(t,r,i){if(r=Fp(r),Fp(t)!==r&&i)throw Error(a(425))}function cs(){}var Pc=null,zc=null;function Oc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(Iy)}:Fc;function Iy(t){setTimeout(function(){throw t})}function Dc(t,r){var i=r,c=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(c===0){t.removeChild(u),Oa(r);return}c--}else i!=="$"&&i!=="$?"&&i!=="$!"||c++;i=u}while(i);Oa(r)}function zr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Bp(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return t;r--}else i==="/$"&&r++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),ir="__reactFiber$"+Vo,Ka="__reactProps$"+Vo,pr="__reactContainer$"+Vo,Bc="__reactEvents$"+Vo,Py="__reactListeners$"+Vo,zy="__reactHandles$"+Vo;function po(t){var r=t[ir];if(r)return r;for(var i=t.parentNode;i;){if(r=i[pr]||i[ir]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(t=Bp(t);t!==null;){if(i=t[ir])return i;t=Bp(t)}return r}t=i,i=t.parentNode}return null}function Qa(t){return t=t[ir]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(a(33))}function ds(t){return t[Ka]||null}var Hc=[],Yo=-1;function Or(t){return{current:t}}function vt(t){0>Yo||(t.current=Hc[Yo],Hc[Yo]=null,Yo--)}function pt(t,r){Yo++,Hc[Yo]=t.current,t.current=r}var Fr={},Qt=Or(Fr),sn=Or(!1),fo=Fr;function Ko(t,r){var i=t.type.contextTypes;if(!i)return Fr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in i)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function ln(t){return t=t.childContextTypes,t!=null}function us(){vt(sn),vt(Qt)}function Hp(t,r,i){if(Qt.current!==Fr)throw Error(a(168));pt(Qt,r),pt(sn,i)}function Wp(t,r,i){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return i;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(a(108,O(t)||"Unknown",u));return G({},i,c)}function hs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,fo=Qt.current,pt(Qt,t),pt(sn,sn.current),!0}function Up(t,r,i){var c=t.stateNode;if(!c)throw Error(a(169));i?(t=Wp(t,r,fo),c.__reactInternalMemoizedMergedChildContext=t,vt(sn),vt(Qt),pt(Qt,t)):vt(sn),pt(sn,i)}var fr=null,ps=!1,Wc=!1;function qp(t){fr===null?fr=[t]:fr.push(t)}function Oy(t){ps=!0,qp(t)}function Dr(){if(!Wc&&fr!==null){Wc=!0;var t=0,r=it;try{var i=fr;for(it=1;t<i.length;t++){var c=i[t];do c=c(!0);while(c!==null)}fr=null,ps=!1}catch(u){throw fr!==null&&(fr=fr.slice(t+1)),Gh(uc,Dr),u}finally{it=r,Wc=!1}}return null}var Qo=[],Zo=0,fs=null,ms=0,Tn=[],En=0,mo=null,mr=1,gr="";function go(t,r){Qo[Zo++]=ms,Qo[Zo++]=fs,fs=t,ms=r}function Vp(t,r,i){Tn[En++]=mr,Tn[En++]=gr,Tn[En++]=mo,mo=t;var c=mr;t=gr;var u=32-qn(c)-1;c&=~(1<<u),i+=1;var m=32-qn(r)+u;if(30<m){var k=u-u%5;m=(c&(1<<k)-1).toString(32),c>>=k,u-=k,mr=1<<32-qn(r)+u|i<<u|c,gr=m+t}else mr=1<<m|i<<u|c,gr=t}function Uc(t){t.return!==null&&(go(t,1),Vp(t,1,0))}function qc(t){for(;t===fs;)fs=Qo[--Zo],Qo[Zo]=null,ms=Qo[--Zo],Qo[Zo]=null;for(;t===mo;)mo=Tn[--En],Tn[En]=null,gr=Tn[--En],Tn[En]=null,mr=Tn[--En],Tn[En]=null}var wn=null,bn=null,wt=!1,Gn=null;function Gp(t,r){var i=On(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=t,r=t.deletions,r===null?(t.deletions=[i],t.flags|=16):r.push(i)}function Yp(t,r){switch(t.tag){case 5:var i=t.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,wn=t,bn=zr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,wn=t,bn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=mo!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=On(18,null,null,0),i.stateNode=r,i.return=t,t.child=i,wn=t,bn=null,!0):!1;default:return!1}}function Vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(wt){var r=bn;if(r){var i=r;if(!Yp(t,r)){if(Vc(t))throw Error(a(418));r=zr(i.nextSibling);var c=wn;r&&Yp(t,r)?Gp(c,i):(t.flags=t.flags&-4097|2,wt=!1,wn=t)}}else{if(Vc(t))throw Error(a(418));t.flags=t.flags&-4097|2,wt=!1,wn=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function gs(t){if(t!==wn)return!1;if(!wt)return Kp(t),wt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Oc(t.type,t.memoizedProps)),r&&(r=bn)){if(Vc(t))throw Qp(),Error(a(418));for(;r;)Gp(t,r),r=zr(r.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(r===0){bn=zr(t.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}t=t.nextSibling}bn=null}}else bn=wn?zr(t.stateNode.nextSibling):null;return!0}function Qp(){for(var t=bn;t;)t=zr(t.nextSibling)}function Xo(){bn=wn=null,wt=!1}function Yc(t){Gn===null?Gn=[t]:Gn.push(t)}var Fy=P.ReactCurrentBatchConfig;function Za(t,r,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(a(309));var c=i.stateNode}if(!c)throw Error(a(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(k){var I=u.refs;k===null?delete I[m]:I[m]=k},r._stringRef=m,r)}if(typeof t!="string")throw Error(a(284));if(!i._owner)throw Error(a(290,t))}return t}function vs(t,r){throw t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Zp(t){var r=t._init;return r(t._payload)}function Xp(t){function r(Z,q){if(t){var te=Z.deletions;te===null?(Z.deletions=[q],Z.flags|=16):te.push(q)}}function i(Z,q){if(!t)return null;for(;q!==null;)r(Z,q),q=q.sibling;return null}function c(Z,q){for(Z=new Map;q!==null;)q.key!==null?Z.set(q.key,q):Z.set(q.index,q),q=q.sibling;return Z}function u(Z,q){return Z=Yr(Z,q),Z.index=0,Z.sibling=null,Z}function m(Z,q,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<q?(Z.flags|=2,q):te):(Z.flags|=2,q)):(Z.flags|=1048576,q)}function k(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,q,te,ge){return q===null||q.tag!==6?(q=Fd(te,Z.mode,ge),q.return=Z,q):(q=u(q,te),q.return=Z,q)}function H(Z,q,te,ge){var Re=te.type;return Re===E?pe(Z,q,te.props.children,ge,te.key):q!==null&&(q.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===ce&&Zp(Re)===q.type)?(ge=u(q,te.props),ge.ref=Za(Z,q,te),ge.return=Z,ge):(ge=Bs(te.type,te.key,te.props,null,Z.mode,ge),ge.ref=Za(Z,q,te),ge.return=Z,ge)}function re(Z,q,te,ge){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=Dd(te,Z.mode,ge),q.return=Z,q):(q=u(q,te.children||[]),q.return=Z,q)}function pe(Z,q,te,ge,Re){return q===null||q.tag!==7?(q=Co(te,Z.mode,ge,Re),q.return=Z,q):(q=u(q,te),q.return=Z,q)}function fe(Z,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Fd(""+q,Z.mode,te),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return te=Bs(q.type,q.key,q.props,null,Z.mode,te),te.ref=Za(Z,null,q),te.return=Z,te;case T:return q=Dd(q,Z.mode,te),q.return=Z,q;case ce:var ge=q._init;return fe(Z,ge(q._payload),te)}if(Ue(q)||D(q))return q=Co(q,Z.mode,te,null),q.return=Z,q;vs(Z,q)}return null}function he(Z,q,te,ge){var Re=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Re!==null?null:I(Z,q,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case L:return te.key===Re?H(Z,q,te,ge):null;case T:return te.key===Re?re(Z,q,te,ge):null;case ce:return Re=te._init,he(Z,q,Re(te._payload),ge)}if(Ue(te)||D(te))return Re!==null?null:pe(Z,q,te,ge,null);vs(Z,te)}return null}function be(Z,q,te,ge,Re){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return Z=Z.get(te)||null,I(q,Z,""+ge,Re);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case L:return Z=Z.get(ge.key===null?te:ge.key)||null,H(q,Z,ge,Re);case T:return Z=Z.get(ge.key===null?te:ge.key)||null,re(q,Z,ge,Re);case ce:var Ae=ge._init;return be(Z,q,te,Ae(ge._payload),Re)}if(Ue(ge)||D(ge))return Z=Z.get(te)||null,pe(q,Z,ge,Re,null);vs(q,ge)}return null}function je(Z,q,te,ge){for(var Re=null,Ae=null,Te=q,Pe=q=0,Ht=null;Te!==null&&Pe<te.length;Pe++){Te.index>Pe?(Ht=Te,Te=null):Ht=Te.sibling;var nt=he(Z,Te,te[Pe],ge);if(nt===null){Te===null&&(Te=Ht);break}t&&Te&&nt.alternate===null&&r(Z,Te),q=m(nt,q,Pe),Ae===null?Re=nt:Ae.sibling=nt,Ae=nt,Te=Ht}if(Pe===te.length)return i(Z,Te),wt&&go(Z,Pe),Re;if(Te===null){for(;Pe<te.length;Pe++)Te=fe(Z,te[Pe],ge),Te!==null&&(q=m(Te,q,Pe),Ae===null?Re=Te:Ae.sibling=Te,Ae=Te);return wt&&go(Z,Pe),Re}for(Te=c(Z,Te);Pe<te.length;Pe++)Ht=be(Te,Z,Pe,te[Pe],ge),Ht!==null&&(t&&Ht.alternate!==null&&Te.delete(Ht.key===null?Pe:Ht.key),q=m(Ht,q,Pe),Ae===null?Re=Ht:Ae.sibling=Ht,Ae=Ht);return t&&Te.forEach(function(Kr){return r(Z,Kr)}),wt&&go(Z,Pe),Re}function Me(Z,q,te,ge){var Re=D(te);if(typeof Re!="function")throw Error(a(150));if(te=Re.call(te),te==null)throw Error(a(151));for(var Ae=Re=null,Te=q,Pe=q=0,Ht=null,nt=te.next();Te!==null&&!nt.done;Pe++,nt=te.next()){Te.index>Pe?(Ht=Te,Te=null):Ht=Te.sibling;var Kr=he(Z,Te,nt.value,ge);if(Kr===null){Te===null&&(Te=Ht);break}t&&Te&&Kr.alternate===null&&r(Z,Te),q=m(Kr,q,Pe),Ae===null?Re=Kr:Ae.sibling=Kr,Ae=Kr,Te=Ht}if(nt.done)return i(Z,Te),wt&&go(Z,Pe),Re;if(Te===null){for(;!nt.done;Pe++,nt=te.next())nt=fe(Z,nt.value,ge),nt!==null&&(q=m(nt,q,Pe),Ae===null?Re=nt:Ae.sibling=nt,Ae=nt);return wt&&go(Z,Pe),Re}for(Te=c(Z,Te);!nt.done;Pe++,nt=te.next())nt=be(Te,Z,Pe,nt.value,ge),nt!==null&&(t&&nt.alternate!==null&&Te.delete(nt.key===null?Pe:nt.key),q=m(nt,q,Pe),Ae===null?Re=nt:Ae.sibling=nt,Ae=nt);return t&&Te.forEach(function(x3){return r(Z,x3)}),wt&&go(Z,Pe),Re}function $t(Z,q,te,ge){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case L:e:{for(var Re=te.key,Ae=q;Ae!==null;){if(Ae.key===Re){if(Re=te.type,Re===E){if(Ae.tag===7){i(Z,Ae.sibling),q=u(Ae,te.props.children),q.return=Z,Z=q;break e}}else if(Ae.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===ce&&Zp(Re)===Ae.type){i(Z,Ae.sibling),q=u(Ae,te.props),q.ref=Za(Z,Ae,te),q.return=Z,Z=q;break e}i(Z,Ae);break}else r(Z,Ae);Ae=Ae.sibling}te.type===E?(q=Co(te.props.children,Z.mode,ge,te.key),q.return=Z,Z=q):(ge=Bs(te.type,te.key,te.props,null,Z.mode,ge),ge.ref=Za(Z,q,te),ge.return=Z,Z=ge)}return k(Z);case T:e:{for(Ae=te.key;q!==null;){if(q.key===Ae)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){i(Z,q.sibling),q=u(q,te.children||[]),q.return=Z,Z=q;break e}else{i(Z,q);break}else r(Z,q);q=q.sibling}q=Dd(te,Z.mode,ge),q.return=Z,Z=q}return k(Z);case ce:return Ae=te._init,$t(Z,q,Ae(te._payload),ge)}if(Ue(te))return je(Z,q,te,ge);if(D(te))return Me(Z,q,te,ge);vs(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,q!==null&&q.tag===6?(i(Z,q.sibling),q=u(q,te),q.return=Z,Z=q):(i(Z,q),q=Fd(te,Z.mode,ge),q.return=Z,Z=q),k(Z)):i(Z,q)}return $t}var Jo=Xp(!0),Jp=Xp(!1),xs=Or(null),ys=null,ea=null,Kc=null;function Qc(){Kc=ea=ys=null}function Zc(t){var r=xs.current;vt(xs),t._currentValue=r}function Xc(t,r,i){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===i)break;t=t.return}}function ta(t,r){ys=t,Kc=ea=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(cn=!0),t.firstContext=null)}function In(t){var r=t._currentValue;if(Kc!==t)if(t={context:t,memoizedValue:r,next:null},ea===null){if(ys===null)throw Error(a(308));ea=t,ys.dependencies={lanes:0,firstContext:t}}else ea=ea.next=t;return r}var vo=null;function Jc(t){vo===null?vo=[t]:vo.push(t)}function e1(t,r,i,c){var u=r.interleaved;return u===null?(i.next=i,Jc(r)):(i.next=u.next,u.next=i),r.interleaved=i,vr(t,c)}function vr(t,r){t.lanes|=r;var i=t.alternate;for(i!==null&&(i.lanes|=r),i=t,t=t.return;t!==null;)t.childLanes|=r,i=t.alternate,i!==null&&(i.childLanes|=r),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Br=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t1(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(t,r,i){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,vr(t,i)}return u=c.interleaved,u===null?(r.next=r,Jc(c)):(r.next=u.next,u.next=r),c.interleaved=r,vr(t,i)}function ws(t,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,i|=c,r.lanes=i,fc(t,i)}}function n1(t,r){var i=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,i===c)){var u=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var k={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};m===null?u=m=k:m=m.next=k,i=i.next}while(i!==null);m===null?u=m=r:m=m.next=r}else u=m=r;i={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=r:t.next=r,i.lastBaseUpdate=r}function bs(t,r,i,c){var u=t.updateQueue;Br=!1;var m=u.firstBaseUpdate,k=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,re=H.next;H.next=null,k===null?m=re:k.next=re,k=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,I=pe.lastBaseUpdate,I!==k&&(I===null?pe.firstBaseUpdate=re:I.next=re,pe.lastBaseUpdate=H))}if(m!==null){var fe=u.baseState;k=0,pe=re=H=null,I=m;do{var he=I.lane,be=I.eventTime;if((c&he)===he){pe!==null&&(pe=pe.next={eventTime:be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Me=I;switch(he=r,be=i,Me.tag){case 1:if(je=Me.payload,typeof je=="function"){fe=je.call(be,fe,he);break e}fe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Me.payload,he=typeof je=="function"?je.call(be,fe,he):je,he==null)break e;fe=G({},fe,he);break e;case 2:Br=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,he=u.effects,he===null?u.effects=[I]:he.push(I))}else be={eventTime:be,lane:he,tag:I.tag,payload:I.payload,callback:I.callback,next:null},pe===null?(re=pe=be,H=fe):pe=pe.next=be,k|=he;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;he=I,I=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);if(pe===null&&(H=fe),u.baseState=H,u.firstBaseUpdate=re,u.lastBaseUpdate=pe,r=u.shared.interleaved,r!==null){u=r;do k|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);wo|=k,t.lanes=k,t.memoizedState=fe}}function r1(t,r,i){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=i,typeof u!="function")throw Error(a(191,u));u.call(c)}}}var Xa={},sr=Or(Xa),Ja=Or(Xa),ei=Or(Xa);function xo(t){if(t===Xa)throw Error(a(174));return t}function td(t,r){switch(pt(ei,r),pt(Ja,t),pt(sr,Xa),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:et(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=et(r,t)}vt(sr),pt(sr,r)}function na(){vt(sr),vt(Ja),vt(ei)}function o1(t){xo(ei.current);var r=xo(sr.current),i=et(r,t.type);r!==i&&(pt(Ja,t),pt(sr,i))}function nd(t){Ja.current===t&&(vt(sr),vt(Ja))}var kt=Or(0);function ks(t){for(var r=t;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rd=[];function od(){for(var t=0;t<rd.length;t++)rd[t]._workInProgressVersionPrimary=null;rd.length=0}var _s=P.ReactCurrentDispatcher,ad=P.ReactCurrentBatchConfig,yo=0,_t=null,Et=null,Dt=null,Cs=!1,ti=!1,ni=0,Dy=0;function Zt(){throw Error(a(321))}function id(t,r){if(r===null)return!1;for(var i=0;i<r.length&&i<t.length;i++)if(!Vn(t[i],r[i]))return!1;return!0}function sd(t,r,i,c,u,m){if(yo=m,_t=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_s.current=t===null||t.memoizedState===null?Uy:qy,t=i(c,u),ti){m=0;do{if(ti=!1,ni=0,25<=m)throw Error(a(301));m+=1,Dt=Et=null,r.updateQueue=null,_s.current=Vy,t=i(c,u)}while(ti)}if(_s.current=Ms,r=Et!==null&&Et.next!==null,yo=0,Dt=Et=_t=null,Cs=!1,r)throw Error(a(300));return t}function ld(){var t=ni!==0;return ni=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Pn(){if(Et===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var r=Dt===null?_t.memoizedState:Dt.next;if(r!==null)Dt=r,Et=t;else{if(t===null)throw Error(a(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ri(t,r){return typeof r=="function"?r(t):r}function cd(t){var r=Pn(),i=r.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var c=Et,u=c.baseQueue,m=i.pending;if(m!==null){if(u!==null){var k=u.next;u.next=m.next,m.next=k}c.baseQueue=u=m,i.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=k=null,H=null,re=m;do{var pe=re.lane;if((yo&pe)===pe)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var fe={lane:pe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(I=H=fe,k=c):H=H.next=fe,_t.lanes|=pe,wo|=pe}re=re.next}while(re!==null&&re!==m);H===null?k=c:H.next=I,Vn(c,r.memoizedState)||(cn=!0),r.memoizedState=c,r.baseState=k,r.baseQueue=H,i.lastRenderedState=c}if(t=i.interleaved,t!==null){u=t;do m=u.lane,_t.lanes|=m,wo|=m,u=u.next;while(u!==t)}else u===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function dd(t){var r=Pn(),i=r.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var c=i.dispatch,u=i.pending,m=r.memoizedState;if(u!==null){i.pending=null;var k=u=u.next;do m=t(m,k.action),k=k.next;while(k!==u);Vn(m,r.memoizedState)||(cn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),i.lastRenderedState=m}return[m,c]}function a1(){}function i1(t,r){var i=_t,c=Pn(),u=r(),m=!Vn(c.memoizedState,u);if(m&&(c.memoizedState=u,cn=!0),c=c.queue,ud(c1.bind(null,i,c,t),[t]),c.getSnapshot!==r||m||Dt!==null&&Dt.memoizedState.tag&1){if(i.flags|=2048,oi(9,l1.bind(null,i,c,u,r),void 0,null),Bt===null)throw Error(a(349));(yo&30)!==0||s1(i,r,u)}return u}function s1(t,r,i){t.flags|=16384,t={getSnapshot:r,value:i},r=_t.updateQueue,r===null?(r={lastEffect:null,stores:null},_t.updateQueue=r,r.stores=[t]):(i=r.stores,i===null?r.stores=[t]:i.push(t))}function l1(t,r,i,c){r.value=i,r.getSnapshot=c,d1(r)&&u1(t)}function c1(t,r,i){return i(function(){d1(r)&&u1(t)})}function d1(t){var r=t.getSnapshot;t=t.value;try{var i=r();return!Vn(t,i)}catch{return!0}}function u1(t){var r=vr(t,1);r!==null&&Zn(r,t,1,-1)}function h1(t){var r=lr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:t},r.queue=t,t=t.dispatch=Wy.bind(null,_t,t),[r.memoizedState,t]}function oi(t,r,i,c){return t={tag:t,create:r,destroy:i,deps:c,next:null},r=_t.updateQueue,r===null?(r={lastEffect:null,stores:null},_t.updateQueue=r,r.lastEffect=t.next=t):(i=r.lastEffect,i===null?r.lastEffect=t.next=t:(c=i.next,i.next=t,t.next=c,r.lastEffect=t)),t}function p1(){return Pn().memoizedState}function js(t,r,i,c){var u=lr();_t.flags|=t,u.memoizedState=oi(1|r,i,void 0,c===void 0?null:c)}function Ss(t,r,i,c){var u=Pn();c=c===void 0?null:c;var m=void 0;if(Et!==null){var k=Et.memoizedState;if(m=k.destroy,c!==null&&id(c,k.deps)){u.memoizedState=oi(r,i,m,c);return}}_t.flags|=t,u.memoizedState=oi(1|r,i,m,c)}function f1(t,r){return js(8390656,8,t,r)}function ud(t,r){return Ss(2048,8,t,r)}function m1(t,r){return Ss(4,2,t,r)}function g1(t,r){return Ss(4,4,t,r)}function v1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function x1(t,r,i){return i=i!=null?i.concat([t]):null,Ss(4,4,v1.bind(null,r,t),i)}function hd(){}function y1(t,r){var i=Pn();r=r===void 0?null:r;var c=i.memoizedState;return c!==null&&r!==null&&id(r,c[1])?c[0]:(i.memoizedState=[t,r],t)}function w1(t,r){var i=Pn();r=r===void 0?null:r;var c=i.memoizedState;return c!==null&&r!==null&&id(r,c[1])?c[0]:(t=t(),i.memoizedState=[t,r],t)}function b1(t,r,i){return(yo&21)===0?(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=i):(Vn(i,r)||(i=Zh(),_t.lanes|=i,wo|=i,t.baseState=!0),r)}function By(t,r){var i=it;it=i!==0&&4>i?i:4,t(!0);var c=ad.transition;ad.transition={};try{t(!1),r()}finally{it=i,ad.transition=c}}function k1(){return Pn().memoizedState}function Hy(t,r,i){var c=Vr(t);if(i={lane:c,action:i,hasEagerState:!1,eagerState:null,next:null},_1(t))C1(r,i);else if(i=e1(t,r,i,c),i!==null){var u=rn();Zn(i,t,c,u),j1(i,r,c)}}function Wy(t,r,i){var c=Vr(t),u={lane:c,action:i,hasEagerState:!1,eagerState:null,next:null};if(_1(t))C1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var k=r.lastRenderedState,I=m(k,i);if(u.hasEagerState=!0,u.eagerState=I,Vn(I,k)){var H=r.interleaved;H===null?(u.next=u,Jc(r)):(u.next=H.next,H.next=u),r.interleaved=u;return}}catch{}finally{}i=e1(t,r,u,c),i!==null&&(u=rn(),Zn(i,t,c,u),j1(i,r,c))}}function _1(t){var r=t.alternate;return t===_t||r!==null&&r===_t}function C1(t,r){ti=Cs=!0;var i=t.pending;i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r}function j1(t,r,i){if((i&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,i|=c,r.lanes=i,fc(t,i)}}var Ms={readContext:In,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Uy={readContext:In,useCallback:function(t,r){return lr().memoizedState=[t,r===void 0?null:r],t},useContext:In,useEffect:f1,useImperativeHandle:function(t,r,i){return i=i!=null?i.concat([t]):null,js(4194308,4,v1.bind(null,r,t),i)},useLayoutEffect:function(t,r){return js(4194308,4,t,r)},useInsertionEffect:function(t,r){return js(4,2,t,r)},useMemo:function(t,r){var i=lr();return r=r===void 0?null:r,t=t(),i.memoizedState=[t,r],t},useReducer:function(t,r,i){var c=lr();return r=i!==void 0?i(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Hy.bind(null,_t,t),[c.memoizedState,t]},useRef:function(t){var r=lr();return t={current:t},r.memoizedState=t},useState:h1,useDebugValue:hd,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=h1(!1),r=t[0];return t=By.bind(null,t[1]),lr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,i){var c=_t,u=lr();if(wt){if(i===void 0)throw Error(a(407));i=i()}else{if(i=r(),Bt===null)throw Error(a(349));(yo&30)!==0||s1(c,r,i)}u.memoizedState=i;var m={value:i,getSnapshot:r};return u.queue=m,f1(c1.bind(null,c,m,t),[t]),c.flags|=2048,oi(9,l1.bind(null,c,m,i,r),void 0,null),i},useId:function(){var t=lr(),r=Bt.identifierPrefix;if(wt){var i=gr,c=mr;i=(c&~(1<<32-qn(c)-1)).toString(32)+i,r=":"+r+"R"+i,i=ni++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=Dy++,r=":"+r+"r"+i.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},qy={readContext:In,useCallback:y1,useContext:In,useEffect:ud,useImperativeHandle:x1,useInsertionEffect:m1,useLayoutEffect:g1,useMemo:w1,useReducer:cd,useRef:p1,useState:function(){return cd(ri)},useDebugValue:hd,useDeferredValue:function(t){var r=Pn();return b1(r,Et.memoizedState,t)},useTransition:function(){var t=cd(ri)[0],r=Pn().memoizedState;return[t,r]},useMutableSource:a1,useSyncExternalStore:i1,useId:k1,unstable_isNewReconciler:!1},Vy={readContext:In,useCallback:y1,useContext:In,useEffect:ud,useImperativeHandle:x1,useInsertionEffect:m1,useLayoutEffect:g1,useMemo:w1,useReducer:dd,useRef:p1,useState:function(){return dd(ri)},useDebugValue:hd,useDeferredValue:function(t){var r=Pn();return Et===null?r.memoizedState=t:b1(r,Et.memoizedState,t)},useTransition:function(){var t=dd(ri)[0],r=Pn().memoizedState;return[t,r]},useMutableSource:a1,useSyncExternalStore:i1,useId:k1,unstable_isNewReconciler:!1};function Yn(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var i in t)r[i]===void 0&&(r[i]=t[i]);return r}return r}function pd(t,r,i,c){r=t.memoizedState,i=i(c,r),i=i==null?r:G({},r,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var $s={isMounted:function(t){return(t=t._reactInternals)?ht(t)===t:!1},enqueueSetState:function(t,r,i){t=t._reactInternals;var c=rn(),u=Vr(t),m=xr(c,u);m.payload=r,i!=null&&(m.callback=i),r=Hr(t,m,u),r!==null&&(Zn(r,t,u,c),ws(r,t,u))},enqueueReplaceState:function(t,r,i){t=t._reactInternals;var c=rn(),u=Vr(t),m=xr(c,u);m.tag=1,m.payload=r,i!=null&&(m.callback=i),r=Hr(t,m,u),r!==null&&(Zn(r,t,u,c),ws(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var i=rn(),c=Vr(t),u=xr(i,c);u.tag=2,r!=null&&(u.callback=r),r=Hr(t,u,c),r!==null&&(Zn(r,t,c,i),ws(r,t,c))}};function S1(t,r,i,c,u,m,k){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,k):r.prototype&&r.prototype.isPureReactComponent?!Ua(i,c)||!Ua(u,m):!0}function M1(t,r,i){var c=!1,u=Fr,m=r.contextType;return typeof m=="object"&&m!==null?m=In(m):(u=ln(r)?fo:Qt.current,c=r.contextTypes,m=(c=c!=null)?Ko(t,u):Fr),r=new r(i,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$s,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function $1(t,r,i,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,c),r.state!==t&&$s.enqueueReplaceState(r,r.state,null)}function fd(t,r,i,c){var u=t.stateNode;u.props=i,u.state=t.memoizedState,u.refs={},ed(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=In(m):(m=ln(r)?fo:Qt.current,u.context=Ko(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(pd(t,r,m,i),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&$s.enqueueReplaceState(u,u.state,null),bs(t,i,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ra(t,r){try{var i="",c=r;do i+=ee(c),c=c.return;while(c);var u=i}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function md(t,r,i){return{value:t,source:null,stack:i??null,digest:r??null}}function gd(t,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function R1(t,r,i){i=xr(-1,i),i.tag=3,i.payload={element:null};var c=r.value;return i.callback=function(){Is||(Is=!0,Ld=c),gd(t,r)},i}function N1(t,r,i){i=xr(-1,i),i.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;i.payload=function(){return c(u)},i.callback=function(){gd(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(i.callback=function(){gd(t,r),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var k=r.stack;this.componentDidCatch(r.value,{componentStack:k!==null?k:""})}),i}function L1(t,r,i){var c=t.pingCache;if(c===null){c=t.pingCache=new Gy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(i)||(u.add(i),t=s3.bind(null,t,r,i),r.then(t,t))}function A1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function T1(t,r,i,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=xr(-1,1),r.tag=2,Hr(i,r,1))),i.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Yy=P.ReactCurrentOwner,cn=!1;function nn(t,r,i,c){r.child=t===null?Jp(r,null,i,c):Jo(r,t.child,i,c)}function E1(t,r,i,c,u){i=i.render;var m=r.ref;return ta(r,u),c=sd(t,r,i,c,m,u),i=ld(),t!==null&&!cn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(wt&&i&&Uc(r),r.flags|=1,nn(t,r,c,u),r.child)}function I1(t,r,i,c,u){if(t===null){var m=i.type;return typeof m=="function"&&!Od(m)&&m.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=m,P1(t,r,m,c,u)):(t=Bs(i.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var k=m.memoizedProps;if(i=i.compare,i=i!==null?i:Ua,i(k,c)&&t.ref===r.ref)return yr(t,r,u)}return r.flags|=1,t=Yr(m,c),t.ref=r.ref,t.return=r,r.child=t}function P1(t,r,i,c,u){if(t!==null){var m=t.memoizedProps;if(Ua(m,c)&&t.ref===r.ref)if(cn=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(cn=!0);else return r.lanes=t.lanes,yr(t,r,u)}return vd(t,r,i,c,u)}function z1(t,r,i){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(aa,kn),kn|=i;else{if((i&1073741824)===0)return t=m!==null?m.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,pt(aa,kn),kn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:i,pt(aa,kn),kn|=c}else m!==null?(c=m.baseLanes|i,r.memoizedState=null):c=i,pt(aa,kn),kn|=c;return nn(t,r,u,i),r.child}function O1(t,r){var i=r.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function vd(t,r,i,c,u){var m=ln(i)?fo:Qt.current;return m=Ko(r,m),ta(r,u),i=sd(t,r,i,c,m,u),c=ld(),t!==null&&!cn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(wt&&c&&Uc(r),r.flags|=1,nn(t,r,i,u),r.child)}function F1(t,r,i,c,u){if(ln(i)){var m=!0;hs(r)}else m=!1;if(ta(r,u),r.stateNode===null)Ns(t,r),M1(r,i,c),fd(r,i,c,u),c=!0;else if(t===null){var k=r.stateNode,I=r.memoizedProps;k.props=I;var H=k.context,re=i.contextType;typeof re=="object"&&re!==null?re=In(re):(re=ln(i)?fo:Qt.current,re=Ko(r,re));var pe=i.getDerivedStateFromProps,fe=typeof pe=="function"||typeof k.getSnapshotBeforeUpdate=="function";fe||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(I!==c||H!==re)&&$1(r,k,c,re),Br=!1;var he=r.memoizedState;k.state=he,bs(r,c,k,u),H=r.memoizedState,I!==c||he!==H||sn.current||Br?(typeof pe=="function"&&(pd(r,i,pe,c),H=r.memoizedState),(I=Br||S1(r,i,I,c,he,H,re))?(fe||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(r.flags|=4194308)):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),k.props=c,k.state=H,k.context=re,c=I):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{k=r.stateNode,t1(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:Yn(r.type,I),k.props=re,fe=r.pendingProps,he=k.context,H=i.contextType,typeof H=="object"&&H!==null?H=In(H):(H=ln(i)?fo:Qt.current,H=Ko(r,H));var be=i.getDerivedStateFromProps;(pe=typeof be=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(I!==fe||he!==H)&&$1(r,k,c,H),Br=!1,he=r.memoizedState,k.state=he,bs(r,c,k,u);var je=r.memoizedState;I!==fe||he!==je||sn.current||Br?(typeof be=="function"&&(pd(r,i,be,c),je=r.memoizedState),(re=Br||S1(r,i,re,c,he,je,H)||!1)?(pe||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(c,je,H),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(c,je,H)),typeof k.componentDidUpdate=="function"&&(r.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof k.componentDidUpdate!="function"||I===t.memoizedProps&&he===t.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&he===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),k.props=c,k.state=je,k.context=H,c=re):(typeof k.componentDidUpdate!="function"||I===t.memoizedProps&&he===t.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&he===t.memoizedState||(r.flags|=1024),c=!1)}return xd(t,r,i,c,m,u)}function xd(t,r,i,c,u,m){O1(t,r);var k=(r.flags&128)!==0;if(!c&&!k)return u&&Up(r,i,!1),yr(t,r,m);c=r.stateNode,Yy.current=r;var I=k&&typeof i.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&k?(r.child=Jo(r,t.child,null,m),r.child=Jo(r,null,I,m)):nn(t,r,I,m),r.memoizedState=c.state,u&&Up(r,i,!0),r.child}function D1(t){var r=t.stateNode;r.pendingContext?Hp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Hp(t,r.context,!1),td(t,r.containerInfo)}function B1(t,r,i,c,u){return Xo(),Yc(u),r.flags|=256,nn(t,r,i,c),r.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H1(t,r,i){var c=r.pendingProps,u=kt.current,m=!1,k=(r.flags&128)!==0,I;if((I=k)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),pt(kt,u&1),t===null)return Gc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(k=c.children,t=c.fallback,m?(c=r.mode,m=r.child,k={mode:"hidden",children:k},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=k):m=Hs(k,c,0,null),t=Co(t,c,i,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=wd(i),r.memoizedState=yd,t):bd(r,k));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Ky(t,r,k,c,I,u,i);if(m){m=c.fallback,k=r.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:c.children};return(k&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Yr(u,H),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Yr(I,m):(m=Co(m,k,i,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,k=t.child.memoizedState,k=k===null?wd(i):{baseLanes:k.baseLanes|i,cachePool:null,transitions:k.transitions},m.memoizedState=k,m.childLanes=t.childLanes&~i,r.memoizedState=yd,c}return m=t.child,t=m.sibling,c=Yr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=i),c.return=r,c.sibling=null,t!==null&&(i=r.deletions,i===null?(r.deletions=[t],r.flags|=16):i.push(t)),r.child=c,r.memoizedState=null,c}function bd(t,r){return r=Hs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Rs(t,r,i,c){return c!==null&&Yc(c),Jo(r,t.child,null,i),t=bd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ky(t,r,i,c,u,m,k){if(i)return r.flags&256?(r.flags&=-257,c=md(Error(a(422))),Rs(t,r,k,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=Hs({mode:"visible",children:c.children},u,0,null),m=Co(m,u,k,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&Jo(r,t.child,null,k),r.child.memoizedState=wd(k),r.memoizedState=yd,m);if((r.mode&1)===0)return Rs(t,r,k,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(a(419)),c=md(m,c,void 0),Rs(t,r,k,c)}if(I=(k&t.childLanes)!==0,cn||I){if(c=Bt,c!==null){switch(k&-k){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|k))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,vr(t,u),Zn(c,t,u,-1))}return zd(),c=md(Error(a(421))),Rs(t,r,k,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=l3.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,bn=zr(u.nextSibling),wn=r,wt=!0,Gn=null,t!==null&&(Tn[En++]=mr,Tn[En++]=gr,Tn[En++]=mo,mr=t.id,gr=t.overflow,mo=r),r=bd(r,c.children),r.flags|=4096,r)}function W1(t,r,i){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Xc(t.return,r,i)}function kd(t,r,i,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:i,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=i,m.tailMode=u)}function U1(t,r,i){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(nn(t,r,c.children,i),c=kt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&W1(t,i,r);else if(t.tag===19)W1(t,i,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(pt(kt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(i=r.child,u=null;i!==null;)t=i.alternate,t!==null&&ks(t)===null&&(u=i),i=i.sibling;i=u,i===null?(u=r.child,r.child=null):(u=i.sibling,i.sibling=null),kd(r,!1,u,i,m);break;case"backwards":for(i=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&ks(t)===null){r.child=u;break}t=u.sibling,u.sibling=i,i=u,u=t}kd(r,!0,i,null,m);break;case"together":kd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ns(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function yr(t,r,i){if(t!==null&&(r.dependencies=t.dependencies),wo|=r.lanes,(i&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,i=Yr(t,t.pendingProps),r.child=i,i.return=r;t.sibling!==null;)t=t.sibling,i=i.sibling=Yr(t,t.pendingProps),i.return=r;i.sibling=null}return r.child}function Qy(t,r,i){switch(r.tag){case 3:D1(r),Xo();break;case 5:o1(r);break;case 1:ln(r.type)&&hs(r);break;case 4:td(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;pt(xs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(pt(kt,kt.current&1),r.flags|=128,null):(i&r.child.childLanes)!==0?H1(t,r,i):(pt(kt,kt.current&1),t=yr(t,r,i),t!==null?t.sibling:null);pt(kt,kt.current&1);break;case 19:if(c=(i&r.childLanes)!==0,(t.flags&128)!==0){if(c)return U1(t,r,i);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(kt,kt.current),c)break;return null;case 22:case 23:return r.lanes=0,z1(t,r,i)}return yr(t,r,i)}var q1,_d,V1,G1;q1=function(t,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},_d=function(){},V1=function(t,r,i,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,xo(sr.current);var m=null;switch(i){case"input":u=Se(t,u),c=Se(t,c),m=[];break;case"select":u=G({},u,{value:void 0}),c=G({},c,{value:void 0}),m=[];break;case"textarea":u=ot(t,u),c=ot(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=cs)}yt(i,c);var k;i=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(k in I)I.hasOwnProperty(k)&&(i||(i={}),i[k]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var H=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&H!==I&&(H!=null||I!=null))if(re==="style")if(I){for(k in I)!I.hasOwnProperty(k)||H&&H.hasOwnProperty(k)||(i||(i={}),i[k]="");for(k in H)H.hasOwnProperty(k)&&I[k]!==H[k]&&(i||(i={}),i[k]=H[k])}else i||(m||(m=[]),m.push(re,i)),i=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&gt("scroll",t),m||I===H||(m=[])):(m=m||[]).push(re,H))}i&&(m=m||[]).push("style",i);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},G1=function(t,r,i,c){i!==c&&(r.flags|=4)};function ai(t,r){if(!wt)switch(t.tailMode){case"hidden":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var c=null;i!==null;)i.alternate!==null&&(c=i),i=i.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Xt(t){var r=t.alternate!==null&&t.alternate.child===t.child,i=0,c=0;if(r)for(var u=t.child;u!==null;)i|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)i|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=i,r}function Zy(t,r,i){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(r),null;case 1:return ln(r.type)&&us(),Xt(r),null;case 3:return c=r.stateNode,na(),vt(sn),vt(Qt),od(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(gs(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gn!==null&&(Ed(Gn),Gn=null))),_d(t,r),Xt(r),null;case 5:nd(r);var u=xo(ei.current);if(i=r.type,t!==null&&r.stateNode!=null)V1(t,r,i,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Xt(r),null}if(t=xo(sr.current),gs(r)){c=r.stateNode,i=r.type;var m=r.memoizedProps;switch(c[ir]=r,c[Ka]=m,t=(r.mode&1)!==0,i){case"dialog":gt("cancel",c),gt("close",c);break;case"iframe":case"object":case"embed":gt("load",c);break;case"video":case"audio":for(u=0;u<Va.length;u++)gt(Va[u],c);break;case"source":gt("error",c);break;case"img":case"image":case"link":gt("error",c),gt("load",c);break;case"details":gt("toggle",c);break;case"input":De(c,m),gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},gt("invalid",c);break;case"textarea":Ee(c,m),gt("invalid",c)}yt(i,m),u=null;for(var k in m)if(m.hasOwnProperty(k)){var I=m[k];k==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&ls(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ls(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(k)&&I!=null&&k==="onScroll"&&gt("scroll",c)}switch(i){case"input":le(c),Ne(c,m,!0);break;case"textarea":le(c),lt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=cs)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{k=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bt(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=k.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=k.createElement(i,{is:c.is}):(t=k.createElement(i),i==="select"&&(k=t,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):t=k.createElementNS(t,i),t[ir]=r,t[Ka]=c,q1(t,r,!1,!1),r.stateNode=t;e:{switch(k=me(i,c),i){case"dialog":gt("cancel",t),gt("close",t),u=c;break;case"iframe":case"object":case"embed":gt("load",t),u=c;break;case"video":case"audio":for(u=0;u<Va.length;u++)gt(Va[u],t);u=c;break;case"source":gt("error",t),u=c;break;case"img":case"image":case"link":gt("error",t),gt("load",t),u=c;break;case"details":gt("toggle",t),u=c;break;case"input":De(t,c),u=Se(t,c),gt("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=G({},c,{value:void 0}),gt("invalid",t);break;case"textarea":Ee(t,c),u=ot(t,c),gt("invalid",t);break;default:u=c}yt(i,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?Ie(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ot(t,H)):m==="children"?typeof H=="string"?(i!=="textarea"||H!=="")&&Ct(t,H):typeof H=="number"&&Ct(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?H!=null&&m==="onScroll"&&gt("scroll",t):H!=null&&C(t,m,H,k))}switch(i){case"input":le(t),Ne(t,c,!1);break;case"textarea":le(t),lt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Y(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Ge(t,!!c.multiple,m,!1):c.defaultValue!=null&&Ge(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=cs)}switch(i){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xt(r),null;case 6:if(t&&r.stateNode!=null)G1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=xo(ei.current),xo(sr.current),gs(r)){if(c=r.stateNode,i=r.memoizedProps,c[ir]=r,(m=c.nodeValue!==i)&&(t=wn,t!==null))switch(t.tag){case 3:ls(c.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ls(c.nodeValue,i,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(i.nodeType===9?i:i.ownerDocument).createTextNode(c),c[ir]=r,r.stateNode=c}return Xt(r),null;case 13:if(vt(kt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&bn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Qp(),Xo(),r.flags|=98560,m=!1;else if(m=gs(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(a(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(a(317));m[ir]=r}else Xo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Xt(r),m=!1}else Gn!==null&&(Ed(Gn),Gn=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=i,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(kt.current&1)!==0?It===0&&(It=3):zd())),r.updateQueue!==null&&(r.flags|=4),Xt(r),null);case 4:return na(),_d(t,r),t===null&&Ga(r.stateNode.containerInfo),Xt(r),null;case 10:return Zc(r.type._context),Xt(r),null;case 17:return ln(r.type)&&us(),Xt(r),null;case 19:if(vt(kt),m=r.memoizedState,m===null)return Xt(r),null;if(c=(r.flags&128)!==0,k=m.rendering,k===null)if(c)ai(m,!1);else{if(It!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(k=ks(t),k!==null){for(r.flags|=128,ai(m,!1),c=k.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=i,i=r.child;i!==null;)m=i,t=c,m.flags&=14680066,k=m.alternate,k===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=k.childLanes,m.lanes=k.lanes,m.child=k.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=k.memoizedProps,m.memoizedState=k.memoizedState,m.updateQueue=k.updateQueue,m.type=k.type,t=k.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return pt(kt,kt.current&1|2),r.child}t=t.sibling}m.tail!==null&&Mt()>ia&&(r.flags|=128,c=!0,ai(m,!1),r.lanes=4194304)}else{if(!c)if(t=ks(k),t!==null){if(r.flags|=128,c=!0,i=t.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),ai(m,!0),m.tail===null&&m.tailMode==="hidden"&&!k.alternate&&!wt)return Xt(r),null}else 2*Mt()-m.renderingStartTime>ia&&i!==1073741824&&(r.flags|=128,c=!0,ai(m,!1),r.lanes=4194304);m.isBackwards?(k.sibling=r.child,r.child=k):(i=m.last,i!==null?i.sibling=k:r.child=k,m.last=k)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Mt(),r.sibling=null,i=kt.current,pt(kt,c?i&1|2:i&1),r):(Xt(r),null);case 22:case 23:return Pd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(kn&1073741824)!==0&&(Xt(r),r.subtreeFlags&6&&(r.flags|=8192)):Xt(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function Xy(t,r){switch(qc(r),r.tag){case 1:return ln(r.type)&&us(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return na(),vt(sn),vt(Qt),od(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return nd(r),null;case 13:if(vt(kt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Xo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return vt(kt),null;case 4:return na(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Ls=!1,Jt=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function oa(t,r){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(c){jt(t,r,c)}else i.current=null}function Cd(t,r,i){try{i()}catch(c){jt(t,r,c)}}var Y1=!1;function e3(t,r){if(Pc=Zi,t=Sp(),$c(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var c=i.getSelection&&i.getSelection();if(c&&c.rangeCount!==0){i=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var k=0,I=-1,H=-1,re=0,pe=0,fe=t,he=null;t:for(;;){for(var be;fe!==i||u!==0&&fe.nodeType!==3||(I=k+u),fe!==m||c!==0&&fe.nodeType!==3||(H=k+c),fe.nodeType===3&&(k+=fe.nodeValue.length),(be=fe.firstChild)!==null;)he=fe,fe=be;for(;;){if(fe===t)break t;if(he===i&&++re===u&&(I=k),he===m&&++pe===c&&(H=k),(be=fe.nextSibling)!==null)break;fe=he,he=fe.parentNode}fe=be}i=I===-1||H===-1?null:{start:I,end:H}}else i=null}i=i||{start:0,end:0}}else i=null;for(zc={focusedElem:t,selectionRange:i},Zi=!1,Ce=r;Ce!==null;)if(r=Ce,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Ce=t;else for(;Ce!==null;){r=Ce;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Me=je.memoizedProps,$t=je.memoizedState,Z=r.stateNode,q=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Me:Yn(r.type,Me),$t);Z.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(ge){jt(r,r.return,ge)}if(t=r.sibling,t!==null){t.return=r.return,Ce=t;break}Ce=r.return}return je=Y1,Y1=!1,je}function ii(t,r,i){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Cd(r,i,m)}u=u.next}while(u!==c)}}function As(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var c=i.create;i.destroy=c()}i=i.next}while(i!==r)}}function jd(t){var r=t.ref;if(r!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof r=="function"?r(t):r.current=t}}function K1(t){var r=t.alternate;r!==null&&(t.alternate=null,K1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ir],delete r[Ka],delete r[Bc],delete r[Py],delete r[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q1(t){return t.tag===5||t.tag===3||t.tag===4}function Z1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,r,i){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(t,r):i.insertBefore(t,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(t,i)):(r=i,r.appendChild(t)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=cs));else if(c!==4&&(t=t.child,t!==null))for(Sd(t,r,i),t=t.sibling;t!==null;)Sd(t,r,i),t=t.sibling}function Md(t,r,i){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?i.insertBefore(t,r):i.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Md(t,r,i),t=t.sibling;t!==null;)Md(t,r,i),t=t.sibling}var Gt=null,Kn=!1;function Wr(t,r,i){for(i=i.child;i!==null;)X1(t,r,i),i=i.sibling}function X1(t,r,i){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(qi,i)}catch{}switch(i.tag){case 5:Jt||oa(i,r);case 6:var c=Gt,u=Kn;Gt=null,Wr(t,r,i),Gt=c,Kn=u,Gt!==null&&(Kn?(t=Gt,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Gt.removeChild(i.stateNode));break;case 18:Gt!==null&&(Kn?(t=Gt,i=i.stateNode,t.nodeType===8?Dc(t.parentNode,i):t.nodeType===1&&Dc(t,i),Oa(t)):Dc(Gt,i.stateNode));break;case 4:c=Gt,u=Kn,Gt=i.stateNode.containerInfo,Kn=!0,Wr(t,r,i),Gt=c,Kn=u;break;case 0:case 11:case 14:case 15:if(!Jt&&(c=i.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,k=m.destroy;m=m.tag,k!==void 0&&((m&2)!==0||(m&4)!==0)&&Cd(i,r,k),u=u.next}while(u!==c)}Wr(t,r,i);break;case 1:if(!Jt&&(oa(i,r),c=i.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=i.memoizedProps,c.state=i.memoizedState,c.componentWillUnmount()}catch(I){jt(i,r,I)}Wr(t,r,i);break;case 21:Wr(t,r,i);break;case 22:i.mode&1?(Jt=(c=Jt)||i.memoizedState!==null,Wr(t,r,i),Jt=c):Wr(t,r,i);break;default:Wr(t,r,i)}}function J1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new Jy),r.forEach(function(c){var u=c3.bind(null,t,c);i.has(c)||(i.add(c),c.then(u,u))})}}function Qn(t,r){var i=r.deletions;if(i!==null)for(var c=0;c<i.length;c++){var u=i[c];try{var m=t,k=r,I=k;e:for(;I!==null;){switch(I.tag){case 5:Gt=I.stateNode,Kn=!1;break e;case 3:Gt=I.stateNode.containerInfo,Kn=!0;break e;case 4:Gt=I.stateNode.containerInfo,Kn=!0;break e}I=I.return}if(Gt===null)throw Error(a(160));X1(m,k,u),Gt=null,Kn=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(re){jt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ef(r,t),r=r.sibling}function ef(t,r){var i=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(r,t),cr(t),c&4){try{ii(3,t,t.return),As(3,t)}catch(Me){jt(t,t.return,Me)}try{ii(5,t,t.return)}catch(Me){jt(t,t.return,Me)}}break;case 1:Qn(r,t),cr(t),c&512&&i!==null&&oa(i,i.return);break;case 5:if(Qn(r,t),cr(t),c&512&&i!==null&&oa(i,i.return),t.flags&32){var u=t.stateNode;try{Ct(u,"")}catch(Me){jt(t,t.return,Me)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,k=i!==null?i.memoizedProps:m,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ue(u,m),me(I,k);var re=me(I,m);for(k=0;k<H.length;k+=2){var pe=H[k],fe=H[k+1];pe==="style"?Ie(u,fe):pe==="dangerouslySetInnerHTML"?Ot(u,fe):pe==="children"?Ct(u,fe):C(u,pe,fe,re)}switch(I){case"input":_e(u,m);break;case"textarea":Qe(u,m);break;case"select":var he=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var be=m.value;be!=null?Ge(u,!!m.multiple,be,!1):he!==!!m.multiple&&(m.defaultValue!=null?Ge(u,!!m.multiple,m.defaultValue,!0):Ge(u,!!m.multiple,m.multiple?[]:"",!1))}u[Ka]=m}catch(Me){jt(t,t.return,Me)}}break;case 6:if(Qn(r,t),cr(t),c&4){if(t.stateNode===null)throw Error(a(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch(Me){jt(t,t.return,Me)}}break;case 3:if(Qn(r,t),cr(t),c&4&&i!==null&&i.memoizedState.isDehydrated)try{Oa(r.containerInfo)}catch(Me){jt(t,t.return,Me)}break;case 4:Qn(r,t),cr(t);break;case 13:Qn(r,t),cr(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Nd=Mt())),c&4&&J1(t);break;case 22:if(pe=i!==null&&i.memoizedState!==null,t.mode&1?(Jt=(re=Jt)||pe,Qn(r,t),Jt=re):Qn(r,t),cr(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!pe&&(t.mode&1)!==0)for(Ce=t,pe=t.child;pe!==null;){for(fe=Ce=pe;Ce!==null;){switch(he=Ce,be=he.child,he.tag){case 0:case 11:case 14:case 15:ii(4,he,he.return);break;case 1:oa(he,he.return);var je=he.stateNode;if(typeof je.componentWillUnmount=="function"){c=he,i=he.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Me){jt(c,i,Me)}}break;case 5:oa(he,he.return);break;case 22:if(he.memoizedState!==null){rf(fe);continue}}be!==null?(be.return=he,Ce=be):rf(fe)}pe=pe.sibling}e:for(pe=null,fe=t;;){if(fe.tag===5){if(pe===null){pe=fe;try{u=fe.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=fe.stateNode,H=fe.memoizedProps.style,k=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Rr("display",k))}catch(Me){jt(t,t.return,Me)}}}else if(fe.tag===6){if(pe===null)try{fe.stateNode.nodeValue=re?"":fe.memoizedProps}catch(Me){jt(t,t.return,Me)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===t)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===t)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===t)break e;pe===fe&&(pe=null),fe=fe.return}pe===fe&&(pe=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Qn(r,t),cr(t),c&4&&J1(t);break;case 21:break;default:Qn(r,t),cr(t)}}function cr(t){var r=t.flags;if(r&2){try{e:{for(var i=t.return;i!==null;){if(Q1(i)){var c=i;break e}i=i.return}throw Error(a(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(Ct(u,""),c.flags&=-33);var m=Z1(t);Md(t,m,u);break;case 3:case 4:var k=c.stateNode.containerInfo,I=Z1(t);Sd(t,I,k);break;default:throw Error(a(161))}}catch(H){jt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function t3(t,r,i){Ce=t,tf(t)}function tf(t,r,i){for(var c=(t.mode&1)!==0;Ce!==null;){var u=Ce,m=u.child;if(u.tag===22&&c){var k=u.memoizedState!==null||Ls;if(!k){var I=u.alternate,H=I!==null&&I.memoizedState!==null||Jt;I=Ls;var re=Jt;if(Ls=k,(Jt=H)&&!re)for(Ce=u;Ce!==null;)k=Ce,H=k.child,k.tag===22&&k.memoizedState!==null?of(u):H!==null?(H.return=k,Ce=H):of(u);for(;m!==null;)Ce=m,tf(m),m=m.sibling;Ce=u,Ls=I,Jt=re}nf(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,Ce=m):nf(t)}}function nf(t){for(;Ce!==null;){var r=Ce;if((r.flags&8772)!==0){var i=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Jt||As(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Jt)if(i===null)c.componentDidMount();else{var u=r.elementType===r.type?i.memoizedProps:Yn(r.type,i.memoizedProps);c.componentDidUpdate(u,i.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&r1(r,m,c);break;case 3:var k=r.updateQueue;if(k!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}r1(r,k,i)}break;case 5:var I=r.stateNode;if(i===null&&r.flags&4){i=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&i.focus();break;case"img":H.src&&(i.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var pe=re.memoizedState;if(pe!==null){var fe=pe.dehydrated;fe!==null&&Oa(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Jt||r.flags&512&&jd(r)}catch(he){jt(r,r.return,he)}}if(r===t){Ce=null;break}if(i=r.sibling,i!==null){i.return=r.return,Ce=i;break}Ce=r.return}}function rf(t){for(;Ce!==null;){var r=Ce;if(r===t){Ce=null;break}var i=r.sibling;if(i!==null){i.return=r.return,Ce=i;break}Ce=r.return}}function of(t){for(;Ce!==null;){var r=Ce;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{As(4,r)}catch(H){jt(r,i,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(H){jt(r,u,H)}}var m=r.return;try{jd(r)}catch(H){jt(r,m,H)}break;case 5:var k=r.return;try{jd(r)}catch(H){jt(r,k,H)}}}catch(H){jt(r,r.return,H)}if(r===t){Ce=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ce=I;break}Ce=r.return}}var n3=Math.ceil,Ts=P.ReactCurrentDispatcher,$d=P.ReactCurrentOwner,zn=P.ReactCurrentBatchConfig,tt=0,Bt=null,Nt=null,Yt=0,kn=0,aa=Or(0),It=0,si=null,wo=0,Es=0,Rd=0,li=null,dn=null,Nd=0,ia=1/0,wr=null,Is=!1,Ld=null,Ur=null,Ps=!1,qr=null,zs=0,ci=0,Ad=null,Os=-1,Fs=0;function rn(){return(tt&6)!==0?Mt():Os!==-1?Os:Os=Mt()}function Vr(t){return(t.mode&1)===0?1:(tt&2)!==0&&Yt!==0?Yt&-Yt:Fy.transition!==null?(Fs===0&&(Fs=Zh()),Fs):(t=it,t!==0||(t=window.event,t=t===void 0?16:ip(t.type)),t)}function Zn(t,r,i,c){if(50<ci)throw ci=0,Ad=null,Error(a(185));Ta(t,i,c),((tt&2)===0||t!==Bt)&&(t===Bt&&((tt&2)===0&&(Es|=i),It===4&&Gr(t,Yt)),un(t,c),i===1&&tt===0&&(r.mode&1)===0&&(ia=Mt()+500,ps&&Dr()))}function un(t,r){var i=t.callbackNode;Fx(t,r);var c=Yi(t,t===Bt?Yt:0);if(c===0)i!==null&&Yh(i),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(i!=null&&Yh(i),r===1)t.tag===0?Oy(sf.bind(null,t)):qp(sf.bind(null,t)),Ey(function(){(tt&6)===0&&Dr()}),i=null;else{switch(Xh(c)){case 1:i=uc;break;case 4:i=Kh;break;case 16:i=Ui;break;case 536870912:i=Qh;break;default:i=Ui}i=mf(i,af.bind(null,t))}t.callbackPriority=r,t.callbackNode=i}}function af(t,r){if(Os=-1,Fs=0,(tt&6)!==0)throw Error(a(327));var i=t.callbackNode;if(sa()&&t.callbackNode!==i)return null;var c=Yi(t,t===Bt?Yt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Ds(t,c);else{r=c;var u=tt;tt|=2;var m=cf();(Bt!==t||Yt!==r)&&(wr=null,ia=Mt()+500,ko(t,r));do try{a3();break}catch(I){lf(t,I)}while(!0);Qc(),Ts.current=m,tt=u,Nt!==null?r=0:(Bt=null,Yt=0,r=It)}if(r!==0){if(r===2&&(u=hc(t),u!==0&&(c=u,r=Td(t,u))),r===1)throw i=si,ko(t,0),Gr(t,c),un(t,Mt()),i;if(r===6)Gr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!r3(u)&&(r=Ds(t,c),r===2&&(m=hc(t),m!==0&&(c=m,r=Td(t,m))),r===1))throw i=si,ko(t,0),Gr(t,c),un(t,Mt()),i;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(a(345));case 2:_o(t,dn,wr);break;case 3:if(Gr(t,c),(c&130023424)===c&&(r=Nd+500-Mt(),10<r)){if(Yi(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){rn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Fc(_o.bind(null,t,dn,wr),r);break}_o(t,dn,wr);break;case 4:if(Gr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var k=31-qn(c);m=1<<k,k=r[k],k>u&&(u=k),c&=~m}if(c=u,c=Mt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*n3(c/1960))-c,10<c){t.timeoutHandle=Fc(_o.bind(null,t,dn,wr),c);break}_o(t,dn,wr);break;case 5:_o(t,dn,wr);break;default:throw Error(a(329))}}}return un(t,Mt()),t.callbackNode===i?af.bind(null,t):null}function Td(t,r){var i=li;return t.current.memoizedState.isDehydrated&&(ko(t,r).flags|=256),t=Ds(t,r),t!==2&&(r=dn,dn=i,r!==null&&Ed(r)),t}function Ed(t){dn===null?dn=t:dn.push.apply(dn,t)}function r3(t){for(var r=t;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var c=0;c<i.length;c++){var u=i[c],m=u.getSnapshot;u=u.value;try{if(!Vn(m(),u))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(t,r){for(r&=~Rd,r&=~Es,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var i=31-qn(r),c=1<<i;t[i]=-1,r&=~c}}function sf(t){if((tt&6)!==0)throw Error(a(327));sa();var r=Yi(t,0);if((r&1)===0)return un(t,Mt()),null;var i=Ds(t,r);if(t.tag!==0&&i===2){var c=hc(t);c!==0&&(r=c,i=Td(t,c))}if(i===1)throw i=si,ko(t,0),Gr(t,r),un(t,Mt()),i;if(i===6)throw Error(a(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,_o(t,dn,wr),un(t,Mt()),null}function Id(t,r){var i=tt;tt|=1;try{return t(r)}finally{tt=i,tt===0&&(ia=Mt()+500,ps&&Dr())}}function bo(t){qr!==null&&qr.tag===0&&(tt&6)===0&&sa();var r=tt;tt|=1;var i=zn.transition,c=it;try{if(zn.transition=null,it=1,t)return t()}finally{it=c,zn.transition=i,tt=r,(tt&6)===0&&Dr()}}function Pd(){kn=aa.current,vt(aa)}function ko(t,r){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,Ty(i)),Nt!==null)for(i=Nt.return;i!==null;){var c=i;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&us();break;case 3:na(),vt(sn),vt(Qt),od();break;case 5:nd(c);break;case 4:na();break;case 13:vt(kt);break;case 19:vt(kt);break;case 10:Zc(c.type._context);break;case 22:case 23:Pd()}i=i.return}if(Bt=t,Nt=t=Yr(t.current,null),Yt=kn=r,It=0,si=null,Rd=Es=wo=0,dn=li=null,vo!==null){for(r=0;r<vo.length;r++)if(i=vo[r],c=i.interleaved,c!==null){i.interleaved=null;var u=c.next,m=i.pending;if(m!==null){var k=m.next;m.next=u,c.next=k}i.pending=c}vo=null}return t}function lf(t,r){do{var i=Nt;try{if(Qc(),_s.current=Ms,Cs){for(var c=_t.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Cs=!1}if(yo=0,Dt=Et=_t=null,ti=!1,ni=0,$d.current=null,i===null||i.return===null){It=1,si=r,Nt=null;break}e:{var m=t,k=i.return,I=i,H=r;if(r=Yt,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,pe=I,fe=pe.tag;if((pe.mode&1)===0&&(fe===0||fe===11||fe===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var be=A1(k);if(be!==null){be.flags&=-257,T1(be,k,I,m,r),be.mode&1&&L1(m,re,r),r=be,H=re;var je=r.updateQueue;if(je===null){var Me=new Set;Me.add(H),r.updateQueue=Me}else je.add(H);break e}else{if((r&1)===0){L1(m,re,r),zd();break e}H=Error(a(426))}}else if(wt&&I.mode&1){var $t=A1(k);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),T1($t,k,I,m,r),Yc(ra(H,I));break e}}m=H=ra(H,I),It!==4&&(It=2),li===null?li=[m]:li.push(m),m=k;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var Z=R1(m,H,r);n1(m,Z);break e;case 1:I=H;var q=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Ur===null||!Ur.has(te)))){m.flags|=65536,r&=-r,m.lanes|=r;var ge=N1(m,I,r);n1(m,ge);break e}}m=m.return}while(m!==null)}uf(i)}catch(Re){r=Re,Nt===i&&i!==null&&(Nt=i=i.return);continue}break}while(!0)}function cf(){var t=Ts.current;return Ts.current=Ms,t===null?Ms:t}function zd(){(It===0||It===3||It===2)&&(It=4),Bt===null||(wo&268435455)===0&&(Es&268435455)===0||Gr(Bt,Yt)}function Ds(t,r){var i=tt;tt|=2;var c=cf();(Bt!==t||Yt!==r)&&(wr=null,ko(t,r));do try{o3();break}catch(u){lf(t,u)}while(!0);if(Qc(),tt=i,Ts.current=c,Nt!==null)throw Error(a(261));return Bt=null,Yt=0,It}function o3(){for(;Nt!==null;)df(Nt)}function a3(){for(;Nt!==null&&!Nx();)df(Nt)}function df(t){var r=ff(t.alternate,t,kn);t.memoizedProps=t.pendingProps,r===null?uf(t):Nt=r,$d.current=null}function uf(t){var r=t;do{var i=r.alternate;if(t=r.return,(r.flags&32768)===0){if(i=Zy(i,r,kn),i!==null){Nt=i;return}}else{if(i=Xy(i,r),i!==null){i.flags&=32767,Nt=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Nt=null;return}}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=t}while(r!==null);It===0&&(It=5)}function _o(t,r,i){var c=it,u=zn.transition;try{zn.transition=null,it=1,i3(t,r,i,c)}finally{zn.transition=u,it=c}return null}function i3(t,r,i,c){do sa();while(qr!==null);if((tt&6)!==0)throw Error(a(327));i=t.finishedWork;var u=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0;var m=i.lanes|i.childLanes;if(Dx(t,m),t===Bt&&(Nt=Bt=null,Yt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Ps||(Ps=!0,mf(Ui,function(){return sa(),null})),m=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||m){m=zn.transition,zn.transition=null;var k=it;it=1;var I=tt;tt|=4,$d.current=null,e3(t,i),ef(i,t),Sy(zc),Zi=!!Pc,zc=Pc=null,t.current=i,t3(i),Lx(),tt=I,it=k,zn.transition=m}else t.current=i;if(Ps&&(Ps=!1,qr=t,zs=u),m=t.pendingLanes,m===0&&(Ur=null),Ex(i.stateNode),un(t,Mt()),r!==null)for(c=t.onRecoverableError,i=0;i<r.length;i++)u=r[i],c(u.value,{componentStack:u.stack,digest:u.digest});if(Is)throw Is=!1,t=Ld,Ld=null,t;return(zs&1)!==0&&t.tag!==0&&sa(),m=t.pendingLanes,(m&1)!==0?t===Ad?ci++:(ci=0,Ad=t):ci=0,Dr(),null}function sa(){if(qr!==null){var t=Xh(zs),r=zn.transition,i=it;try{if(zn.transition=null,it=16>t?16:t,qr===null)var c=!1;else{if(t=qr,qr=null,zs=0,(tt&6)!==0)throw Error(a(331));var u=tt;for(tt|=4,Ce=t.current;Ce!==null;){var m=Ce,k=m.child;if((Ce.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var re=I[H];for(Ce=re;Ce!==null;){var pe=Ce;switch(pe.tag){case 0:case 11:case 15:ii(8,pe,m)}var fe=pe.child;if(fe!==null)fe.return=pe,Ce=fe;else for(;Ce!==null;){pe=Ce;var he=pe.sibling,be=pe.return;if(K1(pe),pe===re){Ce=null;break}if(he!==null){he.return=be,Ce=he;break}Ce=be}}}var je=m.alternate;if(je!==null){var Me=je.child;if(Me!==null){je.child=null;do{var $t=Me.sibling;Me.sibling=null,Me=$t}while(Me!==null)}}Ce=m}}if((m.subtreeFlags&2064)!==0&&k!==null)k.return=m,Ce=k;else e:for(;Ce!==null;){if(m=Ce,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ii(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Ce=Z;break e}Ce=m.return}}var q=t.current;for(Ce=q;Ce!==null;){k=Ce;var te=k.child;if((k.subtreeFlags&2064)!==0&&te!==null)te.return=k,Ce=te;else e:for(k=q;Ce!==null;){if(I=Ce,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:As(9,I)}}catch(Re){jt(I,I.return,Re)}if(I===k){Ce=null;break e}var ge=I.sibling;if(ge!==null){ge.return=I.return,Ce=ge;break e}Ce=I.return}}if(tt=u,Dr(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(qi,t)}catch{}c=!0}return c}finally{it=i,zn.transition=r}}return!1}function hf(t,r,i){r=ra(i,r),r=R1(t,r,1),t=Hr(t,r,1),r=rn(),t!==null&&(Ta(t,1,r),un(t,r))}function jt(t,r,i){if(t.tag===3)hf(t,t,i);else for(;r!==null;){if(r.tag===3){hf(r,t,i);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){t=ra(i,t),t=N1(r,t,1),r=Hr(r,t,1),t=rn(),r!==null&&(Ta(r,1,t),un(r,t));break}}r=r.return}}function s3(t,r,i){var c=t.pingCache;c!==null&&c.delete(r),r=rn(),t.pingedLanes|=t.suspendedLanes&i,Bt===t&&(Yt&i)===i&&(It===4||It===3&&(Yt&130023424)===Yt&&500>Mt()-Nd?ko(t,0):Rd|=i),un(t,r)}function pf(t,r){r===0&&((t.mode&1)===0?r=1:(r=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var i=rn();t=vr(t,r),t!==null&&(Ta(t,r,i),un(t,i))}function l3(t){var r=t.memoizedState,i=0;r!==null&&(i=r.retryLane),pf(t,i)}function c3(t,r){var i=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(i=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(a(314))}c!==null&&c.delete(r),pf(t,i)}var ff;ff=function(t,r,i){if(t!==null)if(t.memoizedProps!==r.pendingProps||sn.current)cn=!0;else{if((t.lanes&i)===0&&(r.flags&128)===0)return cn=!1,Qy(t,r,i);cn=(t.flags&131072)!==0}else cn=!1,wt&&(r.flags&1048576)!==0&&Vp(r,ms,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ns(t,r),t=r.pendingProps;var u=Ko(r,Qt.current);ta(r,i),u=sd(null,r,c,t,u,i);var m=ld();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ln(c)?(m=!0,hs(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ed(r),u.updater=$s,r.stateNode=u,u._reactInternals=r,fd(r,c,t,i),r=xd(null,r,c,!0,m,i)):(r.tag=0,wt&&m&&Uc(r),nn(null,r,u,i),r=r.child),r;case 16:c=r.elementType;e:{switch(Ns(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=u3(c),t=Yn(c,t),u){case 0:r=vd(null,r,c,t,i);break e;case 1:r=F1(null,r,c,t,i);break e;case 11:r=E1(null,r,c,t,i);break e;case 14:r=I1(null,r,c,Yn(c.type,t),i);break e}throw Error(a(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),vd(t,r,c,u,i);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),F1(t,r,c,u,i);case 3:e:{if(D1(r),t===null)throw Error(a(387));c=r.pendingProps,m=r.memoizedState,u=m.element,t1(t,r),bs(r,c,null,i);var k=r.memoizedState;if(c=k.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=ra(Error(a(423)),r),r=B1(t,r,c,i,u);break e}else if(c!==u){u=ra(Error(a(424)),r),r=B1(t,r,c,i,u);break e}else for(bn=zr(r.stateNode.containerInfo.firstChild),wn=r,wt=!0,Gn=null,i=Jp(r,null,c,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Xo(),c===u){r=yr(t,r,i);break e}nn(t,r,c,i)}r=r.child}return r;case 5:return o1(r),t===null&&Gc(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,k=u.children,Oc(c,u)?k=null:m!==null&&Oc(c,m)&&(r.flags|=32),O1(t,r),nn(t,r,k,i),r.child;case 6:return t===null&&Gc(r),null;case 13:return H1(t,r,i);case 4:return td(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Jo(r,null,c,i):nn(t,r,c,i),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),E1(t,r,c,u,i);case 7:return nn(t,r,r.pendingProps,i),r.child;case 8:return nn(t,r,r.pendingProps.children,i),r.child;case 12:return nn(t,r,r.pendingProps.children,i),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,k=u.value,pt(xs,c._currentValue),c._currentValue=k,m!==null)if(Vn(m.value,k)){if(m.children===u.children&&!sn.current){r=yr(t,r,i);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){k=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=xr(-1,i&-i),H.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var pe=re.pending;pe===null?H.next=H:(H.next=pe.next,pe.next=H),re.pending=H}}m.lanes|=i,H=m.alternate,H!==null&&(H.lanes|=i),Xc(m.return,i,r),I.lanes|=i;break}H=H.next}}else if(m.tag===10)k=m.type===r.type?null:m.child;else if(m.tag===18){if(k=m.return,k===null)throw Error(a(341));k.lanes|=i,I=k.alternate,I!==null&&(I.lanes|=i),Xc(k,i,r),k=m.sibling}else k=m.child;if(k!==null)k.return=m;else for(k=m;k!==null;){if(k===r){k=null;break}if(m=k.sibling,m!==null){m.return=k.return,k=m;break}k=k.return}m=k}nn(t,r,u.children,i),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,ta(r,i),u=In(u),c=c(u),r.flags|=1,nn(t,r,c,i),r.child;case 14:return c=r.type,u=Yn(c,r.pendingProps),u=Yn(c.type,u),I1(t,r,c,u,i);case 15:return P1(t,r,r.type,r.pendingProps,i);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),Ns(t,r),r.tag=1,ln(c)?(t=!0,hs(r)):t=!1,ta(r,i),M1(r,c,u),fd(r,c,u,i),xd(null,r,c,!0,t,i);case 19:return U1(t,r,i);case 22:return z1(t,r,i)}throw Error(a(156,r.tag))};function mf(t,r){return Gh(t,r)}function d3(t,r,i,c){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,r,i,c){return new d3(t,r,i,c)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u3(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===B)return 11;if(t===ae)return 14}return 2}function Yr(t,r){var i=t.alternate;return i===null?(i=On(t.tag,r,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=r,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,r=t.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Bs(t,r,i,c,u,m){var k=2;if(c=t,typeof t=="function")Od(t)&&(k=1);else if(typeof t=="string")k=5;else e:switch(t){case E:return Co(i.children,u,m,r);case M:k=8,u|=8;break;case F:return t=On(12,i,r,u|2),t.elementType=F,t.lanes=m,t;case K:return t=On(13,i,r,u),t.elementType=K,t.lanes=m,t;case X:return t=On(19,i,r,u),t.elementType=X,t.lanes=m,t;case oe:return Hs(i,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:k=10;break e;case W:k=9;break e;case B:k=11;break e;case ae:k=14;break e;case ce:k=16,c=null;break e}throw Error(a(130,t==null?t:typeof t,""))}return r=On(k,i,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function Co(t,r,i,c){return t=On(7,t,c,r),t.lanes=i,t}function Hs(t,r,i,c){return t=On(22,t,c,r),t.elementType=oe,t.lanes=i,t.stateNode={isHidden:!1},t}function Fd(t,r,i){return t=On(6,t,null,r),t.lanes=i,t}function Dd(t,r,i){return r=On(4,t.children!==null?t.children:[],t.key,r),r.lanes=i,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function h3(t,r,i,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Bd(t,r,i,c,u,m,k,I,H){return t=new h3(t,r,i,I,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=On(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(m),t}function p3(t,r,i){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:c==null?null:""+c,children:t,containerInfo:r,implementation:i}}function gf(t){if(!t)return Fr;t=t._reactInternals;e:{if(ht(t)!==t||t.tag!==1)throw Error(a(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ln(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(t.tag===1){var i=t.type;if(ln(i))return Wp(t,i,r)}return r}function vf(t,r,i,c,u,m,k,I,H){return t=Bd(i,c,!0,t,u,m,k,I,H),t.context=gf(null),i=t.current,c=rn(),u=Vr(i),m=xr(c,u),m.callback=r??null,Hr(i,m,u),t.current.lanes=u,Ta(t,u,c),un(t,c),t}function Ws(t,r,i,c){var u=r.current,m=rn(),k=Vr(u);return i=gf(i),r.context===null?r.context=i:r.pendingContext=i,r=xr(m,k),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Hr(u,r,k),t!==null&&(Zn(t,u,k,m),ws(t,u,k)),k}function Us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<r?i:r}}function Hd(t,r){xf(t,r),(t=t.alternate)&&xf(t,r)}function f3(){return null}var yf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}qs.prototype.render=Wd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));Ws(t,r,null,null)},qs.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;bo(function(){Ws(null,t,null,null)}),r[pr]=null}};function qs(t){this._internalRoot=t}qs.prototype.unstable_scheduleHydration=function(t){if(t){var r=tp();t={blockedOn:null,target:t,priority:r};for(var i=0;i<Er.length&&r!==0&&r<Er[i].priority;i++);Er.splice(i,0,t),i===0&&op(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wf(){}function m3(t,r,i,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=Us(k);m.call(re)}}var k=vf(r,c,t,0,null,!1,!1,"",wf);return t._reactRootContainer=k,t[pr]=k.current,Ga(t.nodeType===8?t.parentNode:t),bo(),k}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=Us(H);I.call(re)}}var H=Bd(t,0,!1,null,null,!1,!1,"",wf);return t._reactRootContainer=H,t[pr]=H.current,Ga(t.nodeType===8?t.parentNode:t),bo(function(){Ws(r,H,i,c)}),H}function Gs(t,r,i,c,u){var m=i._reactRootContainer;if(m){var k=m;if(typeof u=="function"){var I=u;u=function(){var H=Us(k);I.call(H)}}Ws(r,k,t,u)}else k=m3(i,r,t,u,c);return Us(k)}Jh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var i=Aa(r.pendingLanes);i!==0&&(fc(r,i|1),un(r,Mt()),(tt&6)===0&&(ia=Mt()+500,Dr()))}break;case 13:bo(function(){var c=vr(t,1);if(c!==null){var u=rn();Zn(c,t,1,u)}}),Hd(t,1)}},mc=function(t){if(t.tag===13){var r=vr(t,134217728);if(r!==null){var i=rn();Zn(r,t,134217728,i)}Hd(t,134217728)}},ep=function(t){if(t.tag===13){var r=Vr(t),i=vr(t,r);if(i!==null){var c=rn();Zn(i,t,r,c)}Hd(t,r)}},tp=function(){return it},np=function(t,r){var i=it;try{return it=t,r()}finally{it=i}},St=function(t,r,i){switch(r){case"input":if(_e(t,i),r=i.name,i.type==="radio"&&r!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var c=i[r];if(c!==t&&c.form===t.form){var u=ds(c);if(!u)throw Error(a(90));we(c),_e(c,u)}}}break;case"textarea":Qe(t,i);break;case"select":r=i.value,r!=null&&Ge(t,!!i.multiple,r,!1)}},Oo=Id,Hi=bo;var g3={usingClientEntryPoint:!1,Events:[Qa,Go,ds,Di,Bi,Id]},di={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v3={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qh(t),t===null?null:t.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||f3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{qi=Ys.inject(v3),ar=Ys}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g3,hn.createPortal=function(t,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(r))throw Error(a(200));return p3(t,r,null,i)},hn.createRoot=function(t,r){if(!Ud(t))throw Error(a(299));var i=!1,c="",u=yf;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Bd(t,1,!1,null,null,i,!1,c,u),t[pr]=r.current,Ga(t.nodeType===8?t.parentNode:t),new Wd(r)},hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=qh(r),t=t===null?null:t.stateNode,t},hn.flushSync=function(t){return bo(t)},hn.hydrate=function(t,r,i){if(!Vs(r))throw Error(a(200));return Gs(null,t,r,!0,i)},hn.hydrateRoot=function(t,r,i){if(!Ud(t))throw Error(a(405));var c=i!=null&&i.hydratedSources||null,u=!1,m="",k=yf;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(m=i.identifierPrefix),i.onRecoverableError!==void 0&&(k=i.onRecoverableError)),r=vf(r,null,t,1,i??null,u,!1,m,k),t[pr]=r.current,Ga(t),c)for(t=0;t<c.length;t++)i=c[t],u=i._getVersion,u=u(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,u]:r.mutableSourceEagerHydrationData.push(i,u);return new qs(r)},hn.render=function(t,r,i){if(!Vs(r))throw Error(a(200));return Gs(null,t,r,!1,i)},hn.unmountComponentAtNode=function(t){if(!Vs(t))throw Error(a(40));return t._reactRootContainer?(bo(function(){Gs(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1},hn.unstable_batchedUpdates=Id,hn.unstable_renderSubtreeIntoContainer=function(t,r,i,c){if(!Vs(i))throw Error(a(200));if(t==null||t._reactInternals===void 0)throw Error(a(38));return Gs(t,r,i,!1,c)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var $f;function eg(){if($f)return Gd.exports;$f=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),Gd.exports=C3(),Gd.exports}var Rf;function j3(){if(Rf)return Ks;Rf=1;var e=eg();return Ks.createRoot=e.createRoot,Ks.hydrateRoot=e.hydrateRoot,Ks}var S3=j3();const M3=J0(S3);function tg(e){var o,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(a=tg(e[o]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function se(){for(var e,o,a=0,s="",l=arguments.length;a<l;a++)(e=arguments[a])&&(o=tg(e))&&(s&&(s+=" "),s+=o);return s}const ja=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ja.displayName="PlusIcon";const $3="_root_7uomf_13",R3="_sm_7uomf_82",N3="_md_7uomf_88",L3="_lg_7uomf_94",A3="_horizontal_7uomf_107",T3="_alignStart_7uomf_121",E3="_vertical_7uomf_125",I3="_inner_7uomf_131",P3="_iconSlot_7uomf_146",z3="_label_7uomf_163",jo={root:$3,sm:R3,md:N3,lg:L3,horizontal:A3,alignStart:T3,vertical:E3,inner:I3,iconSlot:P3,label:z3};function Nf(e){return typeof e=="number"?`${e}px`:e}const O3=g.forwardRef(({size:e="md",layout:o="horizontal",align:a="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:v,style:y,disabled:x,type:w="button",...b},j)=>{const _=d??n.jsx(ja,{size:"100%"}),$={};return h!==void 0&&($["--area-min-height"]=Nf(h)),f!==void 0&&($["--area-radius"]=Nf(f)),n.jsx("button",{ref:j,type:w,className:se(jo.root,jo[e],jo[o],a==="start"&&jo.alignStart,v),disabled:x,"data-size":e,"data-layout":o,style:{...$,...y},...b,children:n.jsxs("span",{className:jo.inner,children:[n.jsx("span",{className:jo.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&n.jsx("span",{className:jo.label,children:s})]})})});O3.displayName="AreaButton";const F3="_root_b29pw_8",D3="_image_b29pw_33",B3="_initials_b29pw_40",H3="_iconSlot_b29pw_52",Qr={root:F3,image:D3,initials:B3,iconSlot:H3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function W3({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function U3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const a=o[0].charAt(0),s=o[o.length-1].charAt(0);return(a+s).toUpperCase()}const or=g.forwardRef(({src:e,alt:o,initials:a,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:v="circle",className:y,...x},w)=>{const[b,j]=g.useState(!1),_=!!e&&!b,$=(a==null?void 0:a.slice(0,2).toUpperCase())??(s?U3(s):"");let N;return _?N=n.jsx("img",{src:e,alt:o??"",className:Qr.image,onError:()=>j(!0),draggable:!1},e):$?N=n.jsx("span",{className:Qr.initials,"aria-hidden":o?void 0:!0,children:$}):N=n.jsx("span",{className:Qr.iconSlot,"aria-hidden":"true",children:l??n.jsx(W3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":v,className:se(Qr.root,Qr[`size-${d}`],Qr[`color-${h}`],Qr[`variant-${f}`],Qr[`shape-${v}`],y),...x,children:N})});or.displayName="Avatar";const q3="_root_uqz3u_7",V3={root:q3},on=g.forwardRef(({as:e="span",className:o,children:a,...s},l)=>n.jsx(e,{ref:l,className:se(V3.root,o),...s,children:a}));on.displayName="Eyebrow";const G3="_root_1tnwf_15",Y3={root:G3},K3=g.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:a,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:v,...y},x)=>{const w=a!==void 0,b=g.useRef(null),[j,_]=g.useState(()=>w?!a:!s),$=g.useCallback(C=>{b.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]);g.useEffect(()=>{!w&&b.current&&s&&(b.current.textContent=s,_(!s))},[]),g.useEffect(()=>{w&&b.current&&(b.current.textContent??"")!==a&&(b.current.textContent=a??"",_(!(a??"")))},[a,w]);const N=C=>{const P=C.currentTarget.textContent??"";_(P===""),l==null||l(P),v==null||v(C)},R=C=>{C.preventDefault();const P=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,P)},S=!h&&!d;return n.jsx("span",{ref:$,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":j||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:se(Y3.root,f),onInput:N,onPaste:R,...y})});K3.displayName="TypeBox";const Q3="_root_1brpy_12",Z3="_ghost_1brpy_27",X3="_path_1brpy_32",hi={root:Q3,"ai-spin":"_ai-spin_1brpy_1",ghost:Z3,"ai-morph":"_ai-morph_1brpy_1",path:X3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},J3={xs:16,sm:24,md:32,lg:48,xl:64},e5={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Lf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Qs=e=>e==="inverse"||e==="inverse-light",t5=e=>e==="stroke"||e==="stroke-light",Xu=g.forwardRef(({size:e="md",variant:o="gradient-fill",state:a="loading",className:s,style:l,"aria-label":d,...h},f)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${v}`,x=`aiglow-${v}`,w=typeof e=="string",b=w?J3[e]:e,j=w?e5[e]:b<=16?1.75:b<=24?1.5:b<=32?1.25:1.1,_=o==="gradient-fill"?`url(#${y})`:Qs(o)?"currentColor":"none",$=Qs(o)?"none":t5(o)?"currentColor":`url(#${y})`,N="currentColor",R=o!=="stroke"&&o!=="stroke-light"&&!Qs(o);return n.jsxs("svg",{ref:f,width:b,height:b,viewBox:"0 0 24 24",fill:"none",className:se(hi.root,hi[`variant-${o}`],hi[`state-${a}`],s),style:l,"data-state":a,"aria-label":d??(a==="ready"?"AI ready for input":"Loading"),"aria-live":a==="ready"?"polite":void 0,role:"status",...h,children:[!Qs(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Lf,stroke:N,strokeWidth:j*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:hi.ghost}),n.jsx("path",{d:Lf,fill:_,stroke:$==="none"?void 0:$,strokeWidth:$==="none"?void 0:j,strokeLinecap:"round",strokeLinejoin:"round",filter:R?`url(#${x})`:void 0,className:hi.path})]})});Xu.displayName="AILoader";const n5="_root_10act_14",r5="_hovered_10act_68",o5="_loading_10act_69",a5="_sm_10act_90",i5="_md_10act_98",s5="_lg_10act_106",l5="_dark_10act_116",c5="_icon_10act_122",la={root:n5,hovered:r5,loading:o5,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:a5,md:i5,lg:s5,dark:l5,icon:c5},Af={sm:12,md:14,lg:18};function d5({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const ng=g.forwardRef(({size:e="md",dark:o,loading:a,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[v,y]=g.useState(!1);return n.jsx("button",{ref:f,className:se(la.root,la[e],o&&la.dark,a?la.loading:v&&la.hovered,s),"aria-busy":a||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...h,children:n.jsx("span",{className:la.icon,children:a?n.jsx(Xu,{size:Af[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(d5,{size:Af[e],light:o})})})});ng.displayName="AICoreButton";const u5="_root_1qx4u_9",h5="_star_1qx4u_34",Qd={root:u5,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:h5},p5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",rg=g.forwardRef(({size:e="sm",className:o,...a},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:se(Qd.root,Qd[`size-${e}`],o),...a,children:n.jsx("svg",{viewBox:"0 0 24 24",className:Qd.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:p5,fill:"currentColor"})})}));rg.displayName="AIAvatar";const f5="_shell_lalw3_21",m5="_wrapper_lalw3_58",g5="_card_lalw3_65",v5="_cardClip_lalw3_94",x5="_textarea_lalw3_160",y5="_actions_lalw3_203",ma={shell:f5,wrapper:m5,card:g5,cardClip:v5,textarea:x5,actions:y5},og=g.forwardRef(({className:e,children:o,...a},s)=>n.jsx("div",{ref:s,className:se(ma.shell,e),...a,children:o}));og.displayName="AIComposer";function w5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const ag=g.forwardRef(({value:e,onChange:o,onSubmit:a,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:v,children:y,style:x,...w},b)=>{const j=g.useRef(null);g.useEffect(()=>{const S=j.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[e]);const _=g.useCallback(S=>o(S.target.value),[o]),$=g.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&a&&(S.preventDefault(),a())},[f,a]),N=g.useCallback(S=>{j.current=S,w5(b,S)},[b]),R={...x??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:se(ma.wrapper,h),"data-radius":l,children:n.jsx("div",{className:ma.card,children:n.jsxs("div",{className:ma.cardClip,children:[n.jsx("textarea",{...w,ref:N,className:ma.textarea,rows:1,value:e,onChange:_,onKeyDown:$,placeholder:d,disabled:v,style:R}),y!=null&&n.jsx("div",{className:ma.actions,children:y})]})})})});ag.displayName="AIComposerInput";const b5="_root_fv0gc_10",k5="_simple_fv0gc_28",_5="_float_fv0gc_83",Tf={root:b5,simple:k5,float:_5},C5=g.forwardRef(({variant:e="simple",className:o,children:a,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:se(Tf.root,Tf[e],o),...s,children:a}));C5.displayName="AIConversation";const j5="_fadeFrame_1l0ib_19",S5="_scroller_1l0ib_32",M5="_content_1l0ib_89",$5="_messageBlock_1l0ib_108",R5="_messageBlockAi_1l0ib_116",N5="_inboundBlock_1l0ib_128",L5="_inboundLoader_1l0ib_136",A5="_inboundLoaderLabel_1l0ib_146",T5="_outboundBlock_1l0ib_153",E5="_outboundHeader_1l0ib_161",I5="_messageBlockUser_1l0ib_168",P5="_aiThreadOutboundIn_1l0ib_1",z5="_messageBody_1l0ib_182",O5="_messageBodyAi_1l0ib_193",F5="_messageBodyUser_1l0ib_200",D5="_label_1l0ib_159",B5="_labelAi_1l0ib_221",H5="_labelUser_1l0ib_159",W5="_labelAvatar_1l0ib_224",U5="_labelText_1l0ib_237",q5="_timestamp_1l0ib_244",V5="_timestampAi_1l0ib_259",G5="_timestampUser_1l0ib_260",Y5="_timestampInline_1l0ib_270",K5="_aiThreadOutboundFadeIn_1l0ib_1",Ke={fadeFrame:j5,scroller:S5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:M5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:$5,messageBlockAi:R5,inboundBlock:N5,inboundLoader:L5,inboundLoaderLabel:A5,outboundBlock:T5,outboundHeader:E5,messageBlockUser:I5,aiThreadOutboundIn:P5,messageBody:z5,messageBodyAi:O5,messageBodyUser:F5,label:D5,labelAi:B5,labelUser:H5,labelAvatar:W5,labelText:U5,timestamp:q5,timestampAi:V5,timestampUser:G5,timestampInline:Y5,aiThreadOutboundFadeIn:K5},Ef=8;function Q5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const Z5=g.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:a=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const v=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[w,b]=g.useState(!1),[j,_]=g.useState(!1),$=g.useCallback(N=>{v.current=N,Q5(f,N)},[f]);return g.useEffect(()=>{const N=v.current,R=y.current;if(!N||!R)return;const S=()=>{const{scrollTop:E,scrollHeight:M,clientHeight:F}=N;return M-E-F<s},C=E=>{N.scrollTo({top:N.scrollHeight,behavior:E?"smooth":"auto"})},P=()=>{const{scrollTop:E,scrollHeight:M,clientHeight:F}=N,V=E>Ef,W=M-E-F>Ef;b(B=>B===V?B:V),_(B=>B===W?B:W)};a&&(C(!1),x.current=!0),P();const L=()=>{x.current=S(),P()};N.addEventListener("scroll",L,{passive:!0});const T=new ResizeObserver(()=>{a&&x.current&&C(!0),P()});return T.observe(R),T.observe(N),()=>{N.removeEventListener("scroll",L),T.disconnect()}},[a,s]),n.jsx("div",{className:Ke.fadeFrame,"data-fade-top":w,"data-fade-bottom":j,children:n.jsx("div",{ref:$,className:se(Ke.scroller,Ke[`padding-${o}`],l),...h,children:n.jsx("div",{ref:y,className:se(Ke.content,Ke[`density-${e}`]),children:d})})})});Z5.displayName="AIThread";const Bl=g.forwardRef(({align:e="ai",avatar:o,className:a,children:s,...l},d)=>n.jsxs("div",{ref:d,className:se(Ke.label,e==="user"?Ke.labelUser:Ke.labelAi,a),...l,children:[o!=null&&n.jsx("span",{className:Ke.labelAvatar,children:o}),n.jsx("span",{className:Ke.labelText,children:s})]}));Bl.displayName="AILabel";const X5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function J5(e,o){if(typeof e=="string")return{text:e};const a=e instanceof Date?e:new Date(e);return Number.isNaN(a.getTime())?null:{text:o(a),iso:a.toISOString()}}const Ni=g.forwardRef(({value:e,align:o="ai",format:a=X5,inline:s=!1,className:l,...d},h)=>{const f=g.useMemo(()=>J5(e,a),[e,a]);return f?n.jsx("time",{ref:h,className:se(Ke.timestamp,s?Ke.timestampInline:o==="user"?Ke.timestampUser:Ke.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});Ni.displayName="AITimestamp";function e4(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ni,{align:"ai",value:e}):e}function t4(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Bl,{align:"ai",children:e}):e}const n4=g.forwardRef(({label:e,time:o,className:a,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:se(Ke.messageBlock,Ke.messageBlockAi,a),...l,children:[t4(e),n.jsx("div",{className:se(Ke.messageBody,Ke.messageBodyAi),children:s}),e4(o)]}));n4.displayName="AIAssistantMessage";function r4(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ni,{align:"user",value:e}):e}function o4(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Bl,{align:"user",children:e}):e}const a4=g.forwardRef(({label:e,time:o,className:a,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:se(Ke.messageBlock,Ke.messageBlockUser,a),...l,children:[o4(e),n.jsx("div",{className:se(Ke.messageBody,Ke.messageBodyUser),children:s}),r4(o)]}));a4.displayName="AIUserMessage";function i4(e){return e===!1?null:e==null||e===!0?n.jsx(rg,{size:"sm"}):e}function s4(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Bl,{align:"ai",avatar:o,children:e}):e}const l4=g.forwardRef(({avatar:e,label:o="Teambridge AI",activity:a,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...v},y)=>{const x=i4(e),w=s4(o,x);return n.jsxs("div",{ref:y,"data-author":"ai",className:se(Ke.messageBlock,Ke.messageBlockAi,Ke.inboundBlock,h),...v,children:[w,a,f!=null&&n.jsx("div",{className:se(Ke.messageBody,Ke.messageBodyAi),children:f}),l&&n.jsxs("div",{className:Ke.inboundLoader,"aria-live":"polite",children:[n.jsx(Xu,{size:"xs"}),d!=null&&n.jsx("span",{className:Ke.inboundLoaderLabel,children:d})]}),s]})});l4.displayName="AIInboundMessage";function c4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const d4=g.forwardRef(({label:e="You",time:o,timeFormat:a,className:s,children:l,...d},h)=>{const f=o==null?null:c4(o)?n.jsx(Ni,{value:o,format:a,inline:!0}):o,v=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ke.labelText,children:e}):e,y=v!=null||f!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:se(Ke.messageBlock,Ke.messageBlockUser,Ke.outboundBlock,s),...d,children:[y&&n.jsxs("div",{className:se(Ke.label,Ke.labelUser,Ke.outboundHeader),children:[v,f]}),n.jsx("div",{className:se(Ke.messageBody,Ke.messageBodyUser),children:l})]})});d4.displayName="AIOutboundMessage";const Hn=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Hn.displayName="ChevronDownIcon";const u4="_root_1j4eq_8",h4="_header_1j4eq_17",p4="_headerSummary_1j4eq_53",f4="_aiTrailSummaryFade_1j4eq_1",m4="_aiTrailHeaderAppend_1j4eq_1",g4="_aiTrailEllipsis_1j4eq_1",v4="_headerCurrent_1j4eq_128",x4="_headerChevron_1j4eq_159",y4="_headerChevronExpanded_1j4eq_173",w4="_body_1j4eq_187",b4="_bodyExpanded_1j4eq_200",k4="_bodyCollapsed_1j4eq_201",_4="_bodyInner_1j4eq_203",C4="_bodyContent_1j4eq_187",j4="_step_1j4eq_225",S4="_stepIcon_1j4eq_242",M4="_stepAnimating_1j4eq_256",$4="_aiTrailStepPulse_1j4eq_1",R4="_stepBody_1j4eq_267",N4="_stepHead_1j4eq_282",L4="_stepLabel_1j4eq_286",A4="_stepSeparator_1j4eq_288",T4="_stepDetail_1j4eq_292",E4="_subToggle_1j4eq_302",I4="_subToggleCount_1j4eq_335",P4="_subToggleChevron_1j4eq_339",z4="_subActivityWrap_1j4eq_358",O4="_subActivityExpanded_1j4eq_364",F4="_subActivityCollapsed_1j4eq_365",D4="_subActivityClip_1j4eq_367",B4="_subActivityList_1j4eq_378",H4="_subActivity_1j4eq_358",W4="_aiTrailSubActivityType_1j4eq_1",U4="_aiTrailSubActivityFade_1j4eq_1",st={root:u4,header:h4,headerSummary:p4,aiTrailSummaryFade:f4,aiTrailHeaderAppend:m4,aiTrailEllipsis:g4,headerCurrent:v4,headerChevron:x4,headerChevronExpanded:y4,body:w4,bodyExpanded:b4,bodyCollapsed:k4,bodyInner:_4,bodyContent:C4,step:j4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:S4,stepAnimating:M4,aiTrailStepPulse:$4,stepBody:R4,stepHead:N4,stepLabel:L4,stepSeparator:A4,stepDetail:T4,subToggle:E4,subToggleCount:I4,subToggleChevron:P4,subActivityWrap:z4,subActivityExpanded:O4,subActivityCollapsed:F4,subActivityClip:D4,subActivityList:B4,subActivity:H4,aiTrailSubActivityType:W4,aiTrailSubActivityFade:U4},Ju=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ju.displayName="MessageDotsSquareIcon";function jl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jl.displayName="SearchMdIcon";function oo({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const eh=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};eh.displayName="Globe01Icon";const ig=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ig.displayName="Code02Icon";function th({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}th.displayName="Tool01Icon";const an=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},ya=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ya.displayName="AlertCircleIcon";const q4={thinking:n.jsx(Ju,{size:14}),tool:n.jsx(th,{size:14}),search:n.jsx(jl,{size:14}),file:n.jsx(oo,{size:14}),web:n.jsx(eh,{size:14}),code:n.jsx(ig,{size:14}),content:n.jsx(an,{size:14})},Hl=g.forwardRef(({type:e,status:o="done",detail:a,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...v},y)=>{const x=o==="active"&&d==="live",w=o==="active"&&d==="live",b=o==="active"||o==="error",[j,_]=g.useState(null),$=j!==null?j:b;g.useEffect(()=>{_(null)},[o]);const N=g.useCallback(()=>_(!$),[$]),R=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,C=o==="error"?n.jsx(ya,{size:14}):s??q4[e];return n.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":o,className:se(st.step,st[`step-${o}`],x&&st.stepAnimating,h),...v,children:[n.jsx("span",{className:st.stepIcon,"aria-hidden":!0,children:C}),n.jsxs("span",{className:st.stepBody,children:[n.jsxs("span",{className:st.stepHead,children:[n.jsx("span",{className:st.stepLabel,children:f}),a!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:st.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:st.stepDetail,children:a})]}),R&&n.jsxs("button",{type:"button",className:st.subToggle,onClick:N,"aria-expanded":$,"aria-label":$?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":$||void 0,children:[n.jsx("span",{className:st.subToggleCount,children:S}),n.jsx("span",{className:st.subToggleChevron,"aria-hidden":!0,children:n.jsx(Hn,{size:10})})]})]}),R&&n.jsx(n.Fragment,{children:n.jsx("div",{className:se(st.subActivityWrap,$?st.subActivityExpanded:st.subActivityCollapsed),"aria-hidden":!$,children:n.jsx("div",{className:st.subActivityClip,children:n.jsx("ul",{className:st.subActivityList,"data-animating":w||void 0,children:l.map((P,L)=>n.jsx("li",{className:st.subActivity,children:P},L))})})})})]})]})});Hl.displayName="AIActivityStep";function If(e){return e==="error"}function V4(e,o,a,s,l,d){if(e==="live")return a.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:a[s]??a[a.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(a.length===0){const f=o===1?"1 step":`${o} steps`;return`${h} · ${f}`}return n.jsxs(n.Fragment,{children:[h,a.map((f,v)=>n.jsxs(g.Fragment,{children:[" · ",f]},v))]})}const nh=g.forwardRef(({state:e="live",expanded:o,defaultExpanded:a,onToggle:s,duration:l,summary:d,className:h,children:f,...v},y)=>{const x=o!==void 0,[w,b]=g.useState(a??If(e)),[j,_]=g.useState(!1);g.useEffect(()=>{x||j||b(If(e))},[e,x,j]);const $=x?!!o:w,N=g.useCallback(()=>{const T=!$;x||(b(T),_(!0)),s==null||s(T)},[$,x,s]),{enhancedChildren:R,stepCount:S,stepLabels:C,currentLabelIdx:P}=g.useMemo(()=>{let T=0;const E=[];let M=-1;return{enhancedChildren:g.Children.map(f,V=>{if(!g.isValidElement(V))return V;const W=V.props;if(!("type"in W||"status"in W))return V;T+=1;const K=W.status??"done";return K==="pending"?null:(W.children!=null&&(E.push(W.children),K==="active"&&(M=E.length-1)),G4(V,e))}),stepCount:T,stepLabels:E,currentLabelIdx:M>=0?M:E.length-1}},[f,e]),L=d??V4(e,S,C,P,st.headerCurrent,l);return n.jsxs("div",{ref:y,"data-state":e,"data-expanded":$,className:se(st.root,h),...v,children:[n.jsxs("button",{type:"button",className:st.header,onClick:N,"aria-expanded":$,"aria-label":$?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:st.headerSummary,children:L},`${e}-${P}`),n.jsx("span",{className:se(st.headerChevron,$&&st.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Hn,{size:14})})]}),n.jsx("div",{className:se(st.body,$?st.bodyExpanded:st.bodyCollapsed),"aria-hidden":!$,children:n.jsx("div",{className:st.bodyInner,children:n.jsxs("div",{className:st.bodyContent,children:[R,e==="done"&&n.jsx(Hl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});nh.displayName="AIActivityTrail";function G4(e,o){return g.cloneElement(e,{groupState:o})}var lo=eg();const Y4="_wrapper_3tqlm_10",K4="_tooltip_3tqlm_22",Q4="_portal_3tqlm_23",Z4="_top_3tqlm_61",X4="_bottom_3tqlm_71",J4="_left_3tqlm_81",ew="_right_3tqlm_91",Zs={wrapper:Y4,tooltip:K4,portal:Q4,top:Z4,bottom:X4,left:J4,right:ew},$r=({content:e,placement:o="top",delay:a=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,v]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),w=g.useRef(null),b=g.useRef(),j=g.useId(),_=g.useCallback(()=>{if(!w.current)return;const C=w.current.getBoundingClientRect(),P=6+d;let L=0,T=0;switch(o){case"top":L=C.top-P,T=C.left+C.width/2;break;case"bottom":L=C.bottom+P,T=C.left+C.width/2;break;case"left":L=C.top+C.height/2,T=C.left-P;break;case"right":L=C.top+C.height/2,T=C.right+P;break}x({top:L,left:T})},[o,d]),$=g.useCallback(()=>{s||(_(),clearTimeout(b.current),a>0?b.current=setTimeout(()=>v(!0),a):v(!0))},[s,a,_]),N=g.useCallback(()=>{clearTimeout(b.current),v(!1)},[]);g.useEffect(()=>{if(!f)return;const C=()=>_();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,_]);const R=vn.cloneElement(h,{"aria-describedby":f?j:void 0}),S=n.jsx("span",{id:j,role:"tooltip",className:se(Zs.tooltip,Zs[o],Zs.portal),"data-visible":f||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:Zs.wrapper,onMouseEnter:$,onMouseLeave:N,onFocus:$,onBlur:N,children:[R,lo.createPortal(S,document.body)]})};$r.displayName="Tooltip";const tw="_root_v8mqg_9",nw="_hover_v8mqg_21",Zd={root:tw,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:nw};function rw(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const sg=g.forwardRef(({visibility:e="always",align:o="start",time:a,timeFormat:s,className:l,children:d,...h},f)=>{const v=a==null?null:rw(a)?n.jsx(Ni,{value:a,format:s,inline:!0}):a,y=w=>{if(!g.isValidElement(w))return w;const b=w;if(b.type===$r)return b;const j=b.props["aria-label"];return j?n.jsx($r,{content:j,placement:"top",delay:150,children:b}):b},x=g.Children.map(d,w=>{if(g.isValidElement(w)&&w.type===g.Fragment){const b=w.props.children;return g.Children.map(b,y)}return y(w)});return n.jsxs("div",{ref:f,"data-visibility":e,"data-align":o,className:se(Zd.root,Zd[`align-${o}`],e==="hover"&&Zd.hover,l),...h,children:[x,v]})});sg.displayName="AIMessageActions";const ow="_card_1apq1_17",aw="_header_1apq1_69",iw="_iconBadge_1apq1_74",sw="_iconInner_1apq1_89",lw="_headerText_1apq1_100",cw="_headerTopRow_1apq1_109",dw="_eyebrow_1apq1_115",uw="_title_1apq1_124",hw="_subtitle_1apq1_130",pw="_headerTrailing_1apq1_135",fw="_body_1apq1_141",mw="_footer_1apq1_152",gw="_footerEnd_1apq1_157",vw="_metaRow_1apq1_162",xw="_metaItem_1apq1_170",yw="_resultHero_1apq1_180",ww="_resultHeadline_1apq1_185",bw="_resultDetail_1apq1_191",kw="_clauses_1apq1_205",_w="_clause_1apq1_205",Cw="_clauseLabel_1apq1_215",jw="_clauseBody_1apq1_225",Sw="_badgeExecuting_1apq1_245",ft={card:ow,header:aw,iconBadge:iw,iconInner:sw,headerText:lw,headerTopRow:cw,eyebrow:dw,title:uw,subtitle:hw,headerTrailing:pw,body:fw,footer:mw,footerEnd:gw,metaRow:vw,metaItem:xw,resultHero:yw,resultHeadline:ww,resultDetail:bw,clauses:kw,clause:_w,clauseLabel:Cw,clauseBody:jw,badgeExecuting:Sw},hr=g.forwardRef(({tone:e="neutral",accent:o=!0,fill:a=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:v,footerEnd:y=!1,className:x,children:w,...b},j)=>{const _=l!=null||f!=null,$=_||d!=null||h!=null,N=s!=null||$;return n.jsxs("div",{ref:j,"data-tone":e,"data-accent":o||void 0,"data-fill":a||void 0,"data-icon":s!=null||void 0,className:se(ft.card,x),...b,children:[N&&n.jsxs("div",{className:ft.header,children:[s!=null&&n.jsx("span",{className:se(ft.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:ft.iconInner,children:s})}),$&&n.jsxs("div",{className:ft.headerText,children:[_&&n.jsxs("div",{className:ft.headerTopRow,children:[l!=null&&n.jsx("span",{className:ft.eyebrow,children:l}),f!=null&&n.jsx("span",{className:ft.headerTrailing,children:f})]}),d!=null&&n.jsx("span",{className:ft.title,children:d}),h!=null&&n.jsx("span",{className:ft.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:ft.body,children:w}),v!=null&&n.jsx("div",{className:se(ft.footer,y&&ft.footerEnd),children:v})]})});hr.displayName="UltronCard";const Mw="_root_zkkgh_6",$w="_sm_zkkgh_24",Rw="_md_zkkgh_33",Nw="_lg_zkkgh_42",Lw="_neutral_zkkgh_53",Aw="_blue_zkkgh_66",Tw="_azure_zkkgh_79",Ew="_purple_zkkgh_92",Iw="_pink_zkkgh_105",Pw="_red_zkkgh_118",zw="_orange_zkkgh_131",Ow="_yellow_zkkgh_144",Fw="_matcha_zkkgh_157",Dw="_green_zkkgh_170",Bw="_subtle_zkkgh_184",Hw="_outline_zkkgh_190",Ww="_solid_zkkgh_196",Uw="_dot_zkkgh_203",qw="_icon_zkkgh_212",Vw="_dismiss_zkkgh_224",So={root:Mw,sm:$w,md:Rw,lg:Nw,neutral:Lw,blue:Aw,azure:Tw,purple:Ew,pink:Iw,red:Pw,orange:zw,yellow:Ow,matcha:Fw,green:Dw,subtle:Bw,outline:Hw,solid:Ww,dot:Uw,icon:qw,dismiss:Vw},Li=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},Gw={sm:10,md:12,lg:14},nr=g.forwardRef(({variant:e="subtle",color:o="neutral",size:a="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:v,...y},x)=>n.jsxs("span",{ref:x,className:se(So.root,So[a],So[o],So[e],f),...y,children:[s&&n.jsx("span",{className:So.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:se(So.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&n.jsx("button",{type:"button",className:So.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Li,{size:Gw[a]})})]}));nr.displayName="Tag";function lg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}lg.displayName="SlashCircle01Icon";const rh=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};rh.displayName="EyeIcon";function Wl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Wl.displayName="Target01Icon";function Mn({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Mn.displayName="ClockIcon";const Ai=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ai.displayName="RefreshCw04Icon";const xn=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};xn.displayName="CheckCircleIcon";function Ul({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ul.displayName="Save01Icon";const Yw={sm:11,md:12,lg:14},Kw={ignored:{label:"Ignored",color:"neutral",Icon:lg},monitored:{label:"Monitored",color:"blue",Icon:rh},recommended:{label:"Recommended",color:"purple",Icon:Wl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Mn},executing:{label:"Executing",color:"azure",Icon:Ai},completed:{label:"Completed",color:"green",Icon:xn},saved:{label:"Saved",color:"matcha",Icon:Ul}},Eo=g.forwardRef(({status:e,size:o="sm",label:a,className:s,...l},d)=>{const h=Kw[e],f=h.Icon;return n.jsx(nr,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(f,{size:Yw[o]}),className:se(e==="executing"&&ft.badgeExecuting,s),...l,children:a??h.label})});Eo.displayName="UltronStatusBadge";function ql({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ql.displayName="Bell01Icon";const Qw=g.forwardRef(({title:e,icon:o,eyebrow:a="Event",meta:s,status:l,tone:d="neutral",children:h,...f},v)=>n.jsx(hr,{ref:v,tone:d,eyebrow:a,title:e,icon:o??n.jsx(ql,{size:14}),trailing:l?n.jsx(Eo,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:ft.metaRow,children:s.map((y,x)=>n.jsxs("span",{className:ft.metaItem,children:[y.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,h]})}));Qw.displayName="UltronEventCard";const Zw=g.forwardRef(({eyebrow:e="Understanding",icon:o,entities:a,tone:s="info",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Ju,{size:14}),...d,children:[l,a&&n.jsx("div",{className:ft.metaRow,children:a})]}));Zw.displayName="UltronUnderstandingCard";const Xw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Jw=g.forwardRef(({eyebrow:e="Decision",icon:o,factors:a,tone:s="warning",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Wl,{size:14}),...d,children:[l,a!=null&&a.length?n.jsx("div",{className:ft.metaRow,children:a.map((f,v)=>n.jsx(nr,{size:"sm",color:Xw[s],variant:"subtle",children:f},v))}):null]}));Jw.displayName="UltronDecisionCard";const eb="_root_1dj39_8",tb="_xs_1dj39_75",nb="_sm_1dj39_84",rb="_md_1dj39_93",ob="_lg_1dj39_102",ab="_xl_1dj39_111",ib="_iconOnly_1dj39_122",sb="_primary_1dj39_132",lb="_secondary_1dj39_148",cb="_tertiary_1dj39_167",db="_ghost_1dj39_185",ub="_destructive_1dj39_203",hb="_destructiveSecondary_1dj39_221",pb="_artwork_1dj39_69",fb="_label_1dj39_254",mb="_spinner_1dj39_69",gb="_light_1dj39_285",mn={root:eb,xs:tb,sm:nb,md:rb,lg:ob,xl:ab,iconOnly:ib,primary:sb,secondary:lb,tertiary:cb,ghost:db,destructive:ub,destructiveSecondary:hb,artwork:pb,label:fb,spinner:mb,"alloy-spin":"_alloy-spin_1dj39_1",light:gb},vb={primary:mn.primary,secondary:mn.secondary,tertiary:mn.tertiary,ghost:mn.ghost,destructive:mn.destructive,"destructive-secondary":mn.destructiveSecondary},Be=g.forwardRef(({variant:e="primary",size:o="md",loading:a=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:v,...y},x)=>{const w=v||a;return n.jsxs("button",{ref:x,className:se(mn.root,vb[e],mn[o],d&&mn.iconOnly,h),disabled:w,"aria-busy":a||void 0,"data-loading":a||void 0,"data-variant":e,"data-size":o,...y,children:[a&&n.jsx("span",{className:mn.spinner,"aria-hidden":"true"}),!a&&d&&n.jsx("span",{className:se(mn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!a&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:se(mn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&n.jsx("span",{className:mn.label,children:f}),l&&n.jsx("span",{className:se(mn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Be.displayName="Button";function cg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}cg.displayName="XCircleIcon";const xb=g.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:a,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},v)=>{const y=n.jsxs(n.Fragment,{children:[a.map((x,w)=>n.jsx(Be,{size:"sm",variant:x.variant??(w===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},w)),s&&n.jsx(Be,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(cg,{size:16}),onClick:s,children:l})]});return n.jsx(hr,{ref:v,tone:d,eyebrow:e,icon:o??n.jsx(Wl,{size:14}),footer:y,...f,children:h})});xb.displayName="UltronRecommendationCard";function Vl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Vl.displayName="Lock01Icon";const yb=g.forwardRef(({title:e,eyebrow:o="Approval required",icon:a,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:v="Edit",onEdit:y,tone:x="warning",children:w,...b},j)=>{const _=n.jsxs(n.Fragment,{children:[f&&n.jsx(Be,{size:"md",variant:"ghost",onClick:f,children:h}),y&&n.jsx(Be,{size:"md",variant:"secondary",onClick:y,children:v}),n.jsx(Be,{size:"md",variant:"primary",leadingArtwork:n.jsx(an,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(hr,{ref:j,tone:x,eyebrow:o,title:e,icon:a??n.jsx(Vl,{size:14}),trailing:n.jsx(Eo,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...b,children:w})});yb.displayName="UltronApprovalCard";const wb=g.forwardRef(({eyebrow:e="Working",icon:o,steps:a,state:s="live",duration:l,tone:d="info",...h},f)=>n.jsx(hr,{ref:f,tone:d,eyebrow:e,icon:o??n.jsx(Ai,{size:14}),trailing:n.jsx(Eo,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(nh,{state:s,duration:l,children:a.map((v,y)=>n.jsx(Hl,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},y))})}));wb.displayName="UltronExecutionCard";const bb=g.forwardRef(({headline:e,detail:o,avatar:a,status:s="completed",tone:l="success",footer:d,...h},f)=>n.jsx(hr,{ref:f,tone:l,fill:!0,accent:!1,trailing:n.jsx(Eo,{status:s}),footer:d,...h,children:n.jsxs("div",{className:ft.resultHero,children:[n.jsx("span",{className:se(ft.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:a??n.jsx(xn,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:ft.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:ft.resultDetail,children:o})]})]})}));bb.displayName="UltronResultCard";function dg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}dg.displayName="ZapIcon";const kb=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:a,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:v="info",children:y,...x},w)=>{const b=n.jsxs(n.Fragment,{children:[n.jsx(Be,{size:"md",variant:"primary",leadingArtwork:n.jsx(Ul,{size:18}),loading:d,onClick:l,children:s}),f&&n.jsx(Be,{size:"md",variant:"ghost",onClick:f,children:h})]});return n.jsx(hr,{ref:w,tone:v,fill:!0,accent:!1,eyebrow:o,title:e,icon:a??n.jsx(dg,{size:14}),footer:b,...x,children:y})});kb.displayName="UltronWorkflowSaveCard";const ug=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ug.displayName="GitBranch01Icon";function Xd({label:e,children:o}){return n.jsxs("div",{className:ft.clause,children:[n.jsx("span",{className:ft.clauseLabel,children:e}),n.jsx("span",{className:ft.clauseBody,children:o})]})}const _b=g.forwardRef(({name:e,eyebrow:o="Workflow",icon:a,when:s,conditions:l,actions:d,status:h,footer:f,tone:v="info",...y},x)=>n.jsx(hr,{ref:x,tone:v,eyebrow:o,title:e,icon:a??n.jsx(ug,{size:14}),trailing:h?n.jsx(Eo,{status:h}):void 0,footer:f,...y,children:n.jsxs("div",{className:ft.clauses,children:[n.jsx(Xd,{label:"When",children:s}),n.jsx(Xd,{label:"If",children:l}),n.jsx(Xd,{label:"Then",children:d})]})}));_b.displayName="UltronWorkflowPreviewCard";const Cb="_root_1nyuz_6",jb="_sm_1nyuz_20",Sb="_md_1nyuz_29",Mb="_lg_1nyuz_38",$b="_divider_1nyuz_48",Rb="_interactive_1nyuz_53",Nb="_disabled_1nyuz_60",Lb="_destructive_1nyuz_64",Ab="_selected_1nyuz_78",Tb="_label_1nyuz_87",Eb="_description_1nyuz_97",Ib="_leadingSlot_1nyuz_101",Pb="_trailingSlot_1nyuz_102",zb="_content_1nyuz_115",Ob="_taSwitch_1nyuz_167",Fb="_taSwitchThumb_1nyuz_188",Db="_taCheckbox_1nyuz_203",Bb="_taRadio_1nyuz_226",Hb="_taRadioDot_1nyuz_244",Wb="_taExpand_1nyuz_252",Ub="_taStatus_1nyuz_266",qb="_taStatus_success_1nyuz_273",Vb="_taStatus_warning_1nyuz_274",Gb="_taStatus_error_1nyuz_275",Yb="_taStatus_info_1nyuz_276",Lt={root:Cb,sm:jb,md:Sb,lg:Mb,divider:$b,interactive:Rb,disabled:Nb,destructive:Lb,selected:Ab,label:Tb,description:Eb,leadingSlot:Ib,trailingSlot:Pb,content:zb,taSwitch:Ob,taSwitchThumb:Fb,taCheckbox:Db,taRadio:Bb,taRadioDot:Hb,taExpand:Wb,taStatus:Ub,taStatus_success:qb,taStatus_warning:Vb,taStatus_error:Gb,taStatus_info:Yb},Rn=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Rn.displayName="ChevronRightIcon";const oh=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};oh.displayName="ArrowUpRightIcon";const Kb="_root_4qytd_5",Qb="_neutral_4qytd_25",Zb="_primary_4qytd_30",Xb="_success_4qytd_35",Jb="_warning_4qytd_40",e6="_error_4qytd_45",t6="_info_4qytd_50",Pf={root:Kb,neutral:Qb,primary:Zb,success:Xb,warning:Jb,error:e6,info:t6},Io=g.forwardRef(({variant:e="neutral",className:o,children:a,...s},l)=>n.jsx("span",{ref:l,className:se(Pf.root,Pf[e],o),...s,children:a}));Io.displayName="Badge";const n6=({checked:e})=>n.jsx("span",{className:Lt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:Lt.taSwitchThumb})}),r6=({checked:e})=>n.jsx("span",{className:Lt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),o6=({checked:e})=>n.jsx("span",{className:Lt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:Lt.taRadioDot})}),a6=({count:e,label:o})=>{const a=e!==void 0?String(e):o;return a?n.jsx(Io,{"aria-hidden":"true",children:a}):null},i6=({expanded:e})=>n.jsx("span",{className:Lt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:16,color:"currentColor"})}),s6=({variant:e})=>n.jsx("span",{className:se(Lt.taStatus,Lt[`taStatus_${e}`]),"aria-hidden":"true"}),l6=new Set(["badge","status"]),$n=g.forwardRef(({label:e,description:o,leadingSlot:a,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:v,badgeLabel:y,expanded:x=!1,statusVariant:w="success",divider:b=!0,size:j="md",interactive:_,selected:$=!1,destructive:N=!1,disabled:R=!1,className:S,onClick:C,onKeyDown:P,...L},T)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[M,F]=g.useState(h),V=E?d!==void 0?d:M:!1,W=_||!!C||E||l!==void 0&&!l6.has(l),B=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":W?"button":void 0,K=g.useCallback(ce=>{if(!R){if(E){const oe=!V;d===void 0&&F(oe),f==null||f(oe)}C==null||C(ce)}},[R,E,V,d,f,C]),X=g.useCallback(ce=>{W&&!R&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),K(ce)),P==null||P(ce)},[W,R,K,P]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Rn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(oh,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(n6,{checked:V});case"checkbox":return n.jsx(r6,{checked:V});case"radio":return n.jsx(o6,{checked:V});case"badge":return n.jsx(a6,{count:v,label:y});case"expand":return n.jsx(i6,{expanded:x});case"status":return n.jsx(s6,{variant:w});default:return null}})();return n.jsxs("div",{ref:T,role:B,tabIndex:W&&!R?0:void 0,"aria-checked":E?V:void 0,"aria-selected":$||void 0,"aria-disabled":R||void 0,"data-selected":$||void 0,"data-disabled":R||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:se(Lt.root,Lt[j],b&&Lt.divider,W&&Lt.interactive,$&&Lt.selected,N&&Lt.destructive,R&&Lt.disabled,S),onClick:R?void 0:K,onKeyDown:X,...L,children:[a&&n.jsx("div",{className:Lt.leadingSlot,children:a}),n.jsxs("div",{className:Lt.content,children:[n.jsx("span",{className:Lt.label,children:e}),o&&n.jsx("span",{className:Lt.description,children:o})]}),ae&&n.jsx("div",{className:Lt.trailingSlot,children:ae})]})});$n.displayName="ListItem";const c6=g.forwardRef(({title:e,meta:o,icon:a,status:s,...l},d)=>n.jsx($n,{ref:d,label:e,description:o,leadingSlot:a?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:a}):void 0,trailingSlot:n.jsx(Eo,{status:s}),...l}));c6.displayName="UltronActivityStreamItem";const d6="_root_1sz1z_7",u6="_status_1sz1z_50",Jd={root:d6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:u6},ah=g.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:a,onEscape:s,className:l,children:d,...h},f)=>{const v=g.useRef(null),[y,x]=g.useState(""),w=g.Children.map(d,b=>{if(!g.isValidElement(b))return b;const j=b.props;return g.cloneElement(b,{groupDisabled:e||!!j.groupDisabled})});return g.useEffect(()=>{if(!a||!s)return;const b=j=>{j.key==="Escape"&&s()};return a.addEventListener("keydown",b),()=>a.removeEventListener("keydown",b)},[a,s]),g.useCallback(b=>x(b),[]),n.jsxs("div",{ref:f,"data-size":o,className:se(Jd.root,Jd[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:v,className:Jd.status,role:"status","aria-live":"polite",children:y})]})});ah.displayName="ComposerActions";function eu({size:e=24,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const hg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="SearchSmIcon";const ml=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ml.displayName="Trash03Icon";const ih=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ih.displayName="SunIcon";const pg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};pg.displayName="ArrowNarrowRightIcon";function eo({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function zf({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function h6({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Sl=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Sl.displayName="ChevronSelectorVerticalIcon";const No=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};No.displayName="ClipboardCheckIcon";const fg=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};fg.displayName="SettingsGearIcon";const mg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};mg.displayName="ChevronLeftIcon";const gg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};gg.displayName="EyeOffIcon";const vg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vg.displayName="StopIcon";const xg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};xg.displayName="RecordingIcon";const yg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};yg.displayName="BankIcon";function Gl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Gl.displayName="ArrowNarrowUpIcon";function wg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}wg.displayName="ArrowNarrowDownIcon";function Yl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Yl.displayName="Microphone02Icon";const Ml=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ml.displayName="AlertTriangleIcon";const bg=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};bg.displayName="BankNote01Icon";const kg=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};kg.displayName="CoinsStacked03Icon";function _g({size:e=16,color:o="currentColor",...a}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const sh=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};sh.displayName="Map01Icon";const lh=({size:e=16,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};lh.displayName="PackageIcon";const Cg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Cg.displayName="ThumbsUpIcon";const jg=({size:e=24,color:o="currentColor",strokeWidth:a,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};jg.displayName="ThumbsDownIcon";function Ci({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ci.displayName="Building02Icon";function ch({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ch.displayName="Building05Icon";function Ti({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ti.displayName="CheckVerified01Icon";function Sg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Sg.displayName="Copy01Icon";function Mg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}Mg.displayName="DotsVerticalIcon";function Kl({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Kl.displayName="Edit02Icon";function $g({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}$g.displayName="HomeSmileIcon";function dh({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}dh.displayName="Link01Icon";function Ql({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ql.displayName="LinkExternal01Icon";function uh({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}uh.displayName="MedicalCrossIcon";function ji({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ji.displayName="MessageCircle02Icon";function hh({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}hh.displayName="MinusIcon";function Rg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Rg.displayName="Moon01Icon";function Ng({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ng.displayName="Pin01Icon";function Lg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Lg.displayName="ReceiptCheckIcon";function Ag({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}Ag.displayName="Settings02Icon";function Tg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Tg.displayName="Speedometer02Icon";function Eg({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Eg.displayName="Trash01Icon";function Lu({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Lu.displayName="UploadCloud01Icon";function Po({size:e=16,color:o="currentColor",strokeWidth:a,...s}){const l=typeof e=="number"?e:parseFloat(e),d=a??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Po.displayName="XCloseIcon";const p6="_base_i93xz_11",f6="_icon_i93xz_45",m6="_sendReady_i93xz_65",g6="_sendStreaming_i93xz_66",v6="_sendDisabled_i93xz_67",x6="_sendError_i93xz_68",y6="_attachIdle_i93xz_131",w6="_attachDisabled_i93xz_145",b6="_attachError_i93xz_152",k6="_voiceIdle_i93xz_165",_6="_voiceRecording_i93xz_179",C6="_voiceDisabled_i93xz_189",j6="_iconStack_i93xz_200",S6="_iconLayer_i93xz_209",Rt={base:p6,icon:f6,sendReady:m6,sendStreaming:g6,sendDisabled:v6,sendError:x6,attachIdle:y6,attachDisabled:w6,attachError:b6,voiceIdle:k6,voiceRecording:_6,voiceDisabled:C6,iconStack:j6,iconLayer:S6},M6={hidden:void 0,ready:Rt.sendReady,"disabled-invalid":Rt.sendDisabled,streaming:Rt.sendStreaming,error:Rt.sendError},$6=(e,o,a)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return a?`Retry sending: ${a}`:"Retry sending";case"hidden":return""}},Sa=g.forwardRef(({state:e,onSend:o,onStop:a,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),b=g.useRef(null),j=g.useCallback(C=>{b.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]),_=g.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){a==null||a();return}if(e==="error"){const C=b.current;C&&(C.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[e,o,a,s]);if(e==="hidden")return null;const $=!h&&(e==="ready"||e==="streaming"||e==="error"),N=$6(e,l,d),R=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,S=n.jsx("button",{ref:j,type:"button","data-composer-action":"send","data-state":e,className:se(Rt.base,M6[e],f),style:v,"aria-label":N,disabled:!$,onClick:_,...y,children:n.jsxs("span",{className:Rt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:Rt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(Gl,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:Rt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(vg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:Rt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Ai,{size:"100%",strokeWidth:2})})]})});return R?n.jsx($r,{content:R,placement:"top",children:S}):S});Sa.displayName="ComposerSendButton";const R6={idle:Rt.attachIdle,disabled:Rt.attachDisabled,error:Rt.attachError},N6=(e,o,a)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return a?`Attachment failed: ${a}`:"Attachment failed"}},Ig=g.forwardRef(({state:e,onSelect:o,accept:a,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),b=g.useCallback(()=>{var S;(e==="idle"||e==="error")&&((S=w.current)==null||S.click())},[e]),j=g.useCallback(S=>{const C=S.target.files;C&&C.length>0&&(o==null||o(C)),S.target.value=""},[o]),_=!h&&e!=="disabled",$=N6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,R=n.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:se(Rt.base,R6[e],f),style:v,"aria-label":$,disabled:!_,onClick:b,...y,children:[n.jsx("span",{className:Rt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(ja,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:a,multiple:s,onChange:j,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx($r,{content:N,placement:"top",children:R}):R});Ig.displayName="ComposerAttachment";const L6={idle:Rt.voiceIdle,recording:Rt.voiceRecording,disabled:Rt.voiceDisabled},A6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Pg=g.forwardRef(({state:e,onStartRecording:o,onStopRecording:a,disabledReason:s,groupDisabled:l,className:d,style:h,...f},v)=>{const y=g.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){a==null||a();return}},[e,o,a]),x=!l&&e!=="disabled",w=A6(e,s),b=e==="disabled"?s??"Voice unavailable":null,j=n.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:se(Rt.base,L6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...f,children:n.jsxs("span",{className:Rt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:Rt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(Yl,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:Rt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(xg,{size:"100%",strokeWidth:1.5})})]})});return b?n.jsx($r,{content:b,placement:"top",children:j}):j});Pg.displayName="ComposerVoiceButton";const T6=g.forwardRef(({value:e,onChange:o,onSubmit:a,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:v="lg",leadingActions:y,className:x},w)=>{const b=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(og,{className:x,style:{flex:"0 0 auto"},children:n.jsx(ag,{ref:w,value:e,onChange:o,onSubmit:a,placeholder:s,maxRows:f,radius:v,disabled:d,children:n.jsxs(ah,{size:"md",disabled:d,children:[y,h&&n.jsx(Pg,{state:d?"disabled":"idle"}),n.jsx(Sa,{state:b,onSend:a,onStop:a})]})})})});T6.displayName="UltronCommandBar";const E6=g.forwardRef(({stages:e,state:o="live",duration:a,...s},l)=>n.jsx(nh,{ref:l,state:o,duration:a,...s,children:e.map((d,h)=>n.jsx(Hl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));E6.displayName="UltronThreadTimeline";const I6="_root_ghwhu_10",P6="_badge_ghwhu_27",z6="_badgeIcon_ghwhu_38",O6="_green_ghwhu_59",F6="_yellow_ghwhu_60",D6="_matcha_ghwhu_61",B6="_purple_ghwhu_62",H6="_blue_ghwhu_63",W6="_azure_ghwhu_64",U6="_red_ghwhu_65",q6="_orange_ghwhu_66",V6="_pink_ghwhu_67",G6="_slate_ghwhu_68",Y6="_content_ghwhu_73",K6="_label_ghwhu_83",Q6="_valueRow_ghwhu_97",Z6="_change_ghwhu_106",X6="_value_ghwhu_97",br={root:I6,badge:P6,badgeIcon:z6,green:O6,yellow:F6,matcha:D6,purple:B6,blue:H6,azure:W6,red:U6,orange:q6,pink:V6,slate:G6,content:Y6,label:K6,valueRow:Q6,change:Z6,value:X6},J6=g.forwardRef(({color:e="slate",icon:o,label:a,value:s,change:l,className:d,...h},f)=>n.jsxs("div",{ref:f,className:se(br.root,d),...h,children:[n.jsx("div",{className:se(br.badge,br[e]),"aria-hidden":"true",children:n.jsx("span",{className:br.badgeIcon,children:o})}),n.jsxs("div",{className:br.content,children:[n.jsx("span",{className:br.label,children:a}),n.jsxs("div",{className:br.valueRow,children:[n.jsx("span",{className:br.value,children:s}),l!=null&&n.jsx("span",{className:br.change,children:l})]})]})]}));J6.displayName="DataCard";const e8="_root_d0j6n_7",t8="_icon_d0j6n_21",n8="_text_d0j6n_33",r8="_positive_d0j6n_41",o8="_warning_d0j6n_45",a8="_negative_d0j6n_49",Xs={root:e8,icon:t8,text:n8,positive:r8,warning:o8,negative:a8};function i8(e){return e==="up"?"positive":"negative"}const s8=g.forwardRef((e,o)=>{const{mode:a,value:s,className:l,...d}=e,h=a==="trend"?e.severity??i8(e.trend):e.severity,{severity:f,...v}=d,y=a==="trend"?(({trend:w,severity:b,...j})=>j)(v):v,x=a==="trend"?e.trend==="up"?Gl:wg:null;return n.jsxs("span",{ref:o,className:se(Xs.root,Xs[h],l),...y,children:[n.jsx("span",{className:Xs.text,children:s}),x&&n.jsx("span",{className:Xs.icon,"aria-hidden":"true",children:n.jsx(x,{size:14})})]})});s8.displayName="ValueChangeLabel";const l8="_root_1lq10_1",c8="_horizontal_1lq10_9",d8="_vertical_1lq10_15",u8="_solid_1lq10_32",h8="_dashed_1lq10_36",Js={root:l8,horizontal:c8,vertical:d8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:u8,dashed:h8},p8=g.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:a="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:se(Js.root,Js[`thickness-${e}`],Js[o],Js[a],s),...l}));p8.displayName="Divider";const f8="_overlay_vxgy2_9",m8="_dialogOverlayIn_vxgy2_1",g8="_dialogOverlayOut_vxgy2_1",v8="_dialog_vxgy2_38",x8="_dialogIn_vxgy2_1",y8="_dialogOut_vxgy2_1",w8="_sm_vxgy2_88",b8="_md_vxgy2_89",k8="_lg_vxgy2_90",_8="_header_vxgy2_95",C8="_title_vxgy2_107",j8="_closeBtn_vxgy2_120",S8="_content_vxgy2_152",M8="_footer_vxgy2_163",ao={overlay:f8,dialogOverlayIn:m8,dialogOverlayOut:g8,dialog:v8,dialogIn:x8,dialogOut:y8,sm:w8,md:b8,lg:k8,header:_8,title:C8,closeBtn:j8,content:S8,footer:M8},zg=g.forwardRef(({onClose:e,children:o,className:a,...s},l)=>n.jsxs("div",{ref:l,className:se(ao.header,a),...s,children:[n.jsx("span",{className:ao.title,children:o}),e&&n.jsx("button",{type:"button",className:ao.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Li,{size:16})})]}));zg.displayName="DialogHeader";const Og=g.forwardRef(({children:e,className:o,...a},s)=>n.jsx("div",{ref:s,className:se(ao.content,o),...a,children:e}));Og.displayName="DialogContent";const Fg=g.forwardRef(({children:e,className:o,...a},s)=>n.jsx("div",{ref:s,className:se(ao.footer,o),...a,children:e}));Fg.displayName="DialogFooter";function Dg({open:e,onClose:o,size:a="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=g.useRef(null),f=180,[v,y]=g.useState(e);return g.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),f);return()=>clearTimeout(x)},[e]),g.useEffect(()=>{if(!e)return;const x=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,o]),g.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),v?lo.createPortal(n.jsx("div",{className:ao.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&o()},children:n.jsx("div",{ref:h,className:se(ao.dialog,ao[a]),"data-state":e?"open":"closed",children:s})}),document.body):null}const $8="_root_1dntq_7",R8="_badge_1dntq_57",N8="_badgeIconSlot_1dntq_74",L8="_content_1dntq_82",A8="_text_1dntq_90",T8="_title_1dntq_99",E8="_description_1dntq_120",I8="_actions_1dntq_131",P8="_dot_1dntq_137",z8="_actionLink_1dntq_144",O8="_primaryAction_1dntq_162",F8="_trailing_1dntq_170",en={root:$8,badge:R8,badgeIconSlot:N8,content:L8,text:A8,title:T8,description:E8,actions:I8,dot:P8,actionLink:z8,primaryAction:O8,trailing:F8},D8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),B8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),H8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Of=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),W8={error:D8,warning:H8,success:B8,info:Of,feature:Of},Bg=g.forwardRef(({status:e="info",variant:o="lighter",size:a="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:v,onDismiss:y,className:x,...w},b)=>{const j=W8[e],_=a==="lg",$=y?n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:n.jsx(Li,{size:12})}):null;return n.jsxs("div",{ref:b,role:"alert",className:se(en.root,x),"data-status":e,"data-variant":o,"data-size":a,...w,children:[n.jsx("span",{className:en.badge,"aria-hidden":"true",children:n.jsx("span",{className:se("alloy-icon-slot",en.badgeIconSlot),children:n.jsx(j,{})})}),_?n.jsxs("div",{className:en.content,children:[n.jsxs("div",{className:en.text,children:[n.jsx("p",{className:en.title,children:s}),l&&n.jsx("p",{className:en.description,children:l})]}),(d||f)&&n.jsxs("div",{className:en.actions,children:[d&&n.jsx("button",{type:"button",className:se(en.actionLink,en.primaryAction),onClick:h,children:d}),d&&f&&n.jsx("span",{className:en.dot,"aria-hidden":"true",children:"·"}),f&&n.jsx("button",{type:"button",className:en.actionLink,onClick:v,children:f})]})]}):n.jsx("p",{className:en.title,children:s}),_?$:(d||y)&&n.jsxs("div",{className:en.trailing,children:[d&&n.jsx("button",{type:"button",className:se(en.actionLink,en.primaryAction),onClick:h,children:d}),$]})]})});Bg.displayName="Alert";const U8="_stack_x4xl7_11",q8="_item_x4xl7_28",V8="_itemExiting_x4xl7_33",Au={stack:U8,item:q8,itemExiting:V8},G8=g.createContext(null);function Y8({id:e,title:o,description:a,status:s,variant:l,size:d,action:h,onAction:f,duration:v,exiting:y,onRemove:x}){const w=g.useCallback(()=>x(e),[e,x]);return n.jsx("div",{className:se(Au.item,y&&Au.itemExiting),onAnimationEnd:y?w:void 0,children:n.jsx(Bg,{status:s,variant:l,size:d,title:o,description:a,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function K8({toasts:e,onStartExit:o,onRemove:a}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:lo.createPortal(n.jsx("div",{className:Au.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(Y8,{...s,onRemove:a},s.id))}),document.body)}function Q8({children:e}){const[o,a]=g.useState([]),s=g.useRef(0),l=g.useCallback(f=>{const v=`toast-${++s.current}`;return a(y=>[...y,{id:v,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(f=>{a(v=>v.map(y=>y.id===f?{...y,exiting:!0}:y))},[]),h=g.useCallback(f=>{a(v=>v.filter(y=>y.id!==f))},[]);return n.jsxs(G8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(K8,{toasts:o,onStartExit:d,onRemove:h})]})}const Z8="_root_1s0ek_5",X8="_list_1s0ek_11",J8="_item_1s0ek_23",e9="_separator_1s0ek_31",t9="_link_1s0ek_47",n9="_current_1s0ek_68",r9="_iconSlot_1s0ek_76",dr={root:Z8,list:X8,item:J8,separator:e9,link:t9,current:n9,iconSlot:r9},o9=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:"/"}),a9=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),i9=g.forwardRef(({items:e,separator:o="slash",className:a,...s},l)=>{const d=o==="chevron"?a9:o9;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:se(dr.root,a),...s,children:n.jsx("ol",{className:dr.list,children:e.map((h,f)=>{const v=f===e.length-1,y=!v&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:dr.item,children:[f>0&&n.jsx(d,{}),y?n.jsxs("a",{href:h.href,onClick:h.onClick,className:dr.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:se(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:se(dr.link,v&&dr.current),"aria-current":v?"page":void 0,children:[h.icon&&n.jsx("span",{className:se(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},f)})})})});i9.displayName="Breadcrumb";const s9="_root_139vz_6",l9="_divider_139vz_14",c9="_item_139vz_19",d9="_label_139vz_25",u9="_description_139vz_26",h9="_chevron_139vz_27",p9="_iconSlot_139vz_28",f9="_hitTarget_139vz_32",m9="_size_sm_139vz_37",g9="_size_md_139vz_43",v9="_size_lg_139vz_49",x9="_header_139vz_59",y9="_headerContent_139vz_59",w9="_checkboxWrap_139vz_60",b9="_labelBlock_139vz_157",k9="_trailingSlot_139vz_60",_9="_body_139vz_199",C9="_bodyInner_139vz_209",j9="_bodyContent_139vz_214",qt={root:s9,divider:l9,item:c9,label:d9,description:u9,chevron:h9,iconSlot:p9,hitTarget:f9,size_sm:m9,size_md:g9,size_lg:v9,header:x9,headerContent:y9,checkboxWrap:w9,labelBlock:b9,trailingSlot:k9,body:_9,bodyInner:C9,bodyContent:j9},S9="_root_17t97_6",M9="_disabled_17t97_12",$9="_sm_17t97_18",R9="_md_17t97_26",N9="_lg_17t97_34",L9="_controlWrap_17t97_43",A9="_input_17t97_52",T9="_box_17t97_67",E9="_boxChecked_17t97_96",I9="_boxError_17t97_106",P9="_labelWrap_17t97_116",z9="_label_17t97_116",O9="_error_17t97_138",F9="_required_17t97_140",D9="_description_17t97_145",_n={root:S9,disabled:M9,sm:$9,md:R9,lg:N9,controlWrap:L9,input:A9,box:T9,boxChecked:E9,boxError:I9,labelWrap:P9,label:z9,error:O9,required:F9,description:D9},Hg=g.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:a=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:v,id:y,name:x,value:w,required:b,className:j},_)=>{const $=g.useId(),N=y??$,R=g.useRef(null);g.useEffect(()=>{R.current&&(R.current.indeterminate=a)},[a]);const S=e!==void 0,[C,P]=g.useState(o),L=S?e:C,T=M=>{S||P(M.target.checked),s==null||s(M.target.checked)},E=L||a;return n.jsxs("div",{className:se(_n.root,_n[h],l&&_n.disabled,d&&_n.error,j),children:[n.jsxs("div",{className:_n.controlWrap,children:[n.jsx("input",{ref:M=>{R.current=M,typeof _=="function"?_(M):_&&(_.current=M)},type:"checkbox",id:N,name:x,value:w,checked:L,disabled:l,required:b,"aria-invalid":d||void 0,onChange:T,className:_n.input}),n.jsx("span",{className:se(_n.box,E&&_n.boxChecked,d&&_n.boxError),"aria-hidden":"true",children:a?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):L?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||v)&&n.jsxs("div",{className:_n.labelWrap,children:[f&&n.jsxs("label",{htmlFor:N,className:_n.label,children:[f,b&&n.jsx("span",{className:_n.required,"aria-hidden":"true",children:" *"})]}),v&&n.jsx("span",{className:_n.description,children:v})]})]})});Hg.displayName="Checkbox";const Wg=g.createContext(null),Tu=g.createContext(0),Ug=g.forwardRef(({type:e="multiple",collapsible:o=!0,value:a,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:v,children:y,...x},w)=>{const b=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[j,_]=g.useState(b),$=a!==void 0,N=g.useMemo(()=>$?Array.isArray(a)?new Set(a):typeof a=="string"?new Set([a]):new Set:j,[$,a,j]),R=g.useCallback(P=>N.has(P),[N]),S=g.useCallback(P=>{const L=new Set(N);e==="single"?L.has(P)?o&&L.delete(P):(L.clear(),L.add(P)):L.has(P)?L.delete(P):L.add(P),$||_(L),l&&l(e==="single"?L.values().next().value??"":Array.from(L))},[N,e,o,$,l]),C=g.useMemo(()=>({type:e,collapsible:o,size:h,disabled:f,isExpanded:R,toggle:S}),[e,o,h,f,R,S]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:se(qt.root,d&&qt.divider,v),...x,children:n.jsx(Wg.Provider,{value:C,children:n.jsx(Tu.Provider,{value:0,children:y})})})});Ug.displayName="Accordion";function el(e,o){const a=e.closest("[data-accordion-root]");if(!a)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(a.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===a);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const qg=g.forwardRef(({value:e,label:o,description:a,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:v,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:w,expanded:b,defaultExpanded:j=!1,onExpandedChange:_,disabled:$=!1,size:N,className:R,children:S,...C},P)=>{const L=g.useContext(Wg),T=g.useContext(Tu),E=L!==null,M=N??(L==null?void 0:L.size)??"md",F=$||(L==null?void 0:L.disabled)||!1,[V,W]=g.useState(j);let B;E?B=e!==void 0?L.isExpanded(e):!1:b!==void 0?B=b:B=V;const K=g.useCallback(()=>{if(F)return;if(E){if(e===void 0)return;const z=L.isExpanded(e);L.toggle(e);const ne=L.type==="single"&&!L.collapsible&&z?!0:!z;_==null||_(ne);return}const A=!B;b===void 0&&W(A),_==null||_(A)},[F,E,L,e,B,b,_]),X=g.useCallback(A=>w==null?void 0:w(A),[w]),ae=g.useCallback(A=>{if(A.key==="Enter"||A.key===" "){A.preventDefault(),K();return}if(E)switch(A.key){case"ArrowDown":A.preventDefault(),el(A.currentTarget,"next");break;case"ArrowUp":A.preventDefault(),el(A.currentTarget,"prev");break;case"Home":A.preventDefault(),el(A.currentTarget,"first");break;case"End":A.preventDefault(),el(A.currentTarget,"last");break}},[K,E]),ce=g.useId(),oe=`${ce}-header`,Q=`${ce}-body`,D=M==="sm"?16:M==="md"?18:20,G=l??n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:qt.checkboxWrap,children:n.jsx(Hg,{size:M,checked:v,defaultChecked:y,indeterminate:x,disabled:F,onChange:X})}),s&&n.jsx("span",{className:qt.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:P,"data-accordion-item":"","data-expanded":B||void 0,"data-disabled":F||void 0,"data-size":M,"data-depth":T,className:se(qt.item,qt[`size_${M}`],R),style:{"--accordion-depth":T},...C,children:[n.jsxs("div",{className:qt.header,children:[n.jsx("button",{type:"button",id:oe,"data-accordion-header-button":"","data-accordion-depth":T,className:qt.hitTarget,"aria-expanded":B,"aria-controls":Q,"aria-disabled":F||void 0,disabled:F,onClick:K,onKeyDown:ae}),n.jsxs("div",{className:qt.headerContent,children:[h==="leading"&&n.jsx("span",{className:qt.chevron,"aria-hidden":"true",children:n.jsx(Rn,{size:D,color:"currentColor"})}),G,n.jsxs("div",{className:qt.labelBlock,children:[n.jsx("span",{className:qt.label,children:o}),a&&n.jsx("span",{className:qt.description,children:a})]}),d&&n.jsx("div",{className:qt.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:qt.chevron,"aria-hidden":"true",children:n.jsx(Rn,{size:D,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":oe,className:qt.body,"aria-hidden":!B,children:n.jsx("div",{className:qt.bodyInner,children:n.jsx("div",{className:qt.bodyContent,children:n.jsx(Tu.Provider,{value:T+1,children:S})})})})]})});qg.displayName="AccordionItem";const B9="_root_1vgip_7",H9="_fullWidth_1vgip_12",W9="_panel_1vgip_19",U9="_panelInner_1vgip_73",q9="_item_1vgip_81",V9="_groupHeading_1vgip_87",G9="_groupHeadingSm_1vgip_96",Y9="_groupHeadingLabel_1vgip_100",K9="_groupHeadingCollapsible_1vgip_112",Q9="_groupChevron_1vgip_125",Z9="_groupDivider_1vgip_139",tr={root:B9,fullWidth:H9,panel:W9,panelInner:U9,item:q9,groupHeading:V9,groupHeadingSm:G9,groupHeadingLabel:Y9,groupHeadingCollapsible:K9,groupChevron:Q9,groupDivider:Z9};function X9({group:e,size:o,closeOnSelect:a,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:se(tr.groupHeading,o==="sm"&&tr.groupHeadingSm,e.collapsible&&tr.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:tr.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:tr.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const v=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx($n,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:tr.item,onClick:()=>{var y;(y=h.onClick)==null||y.call(h),a&&!v&&s()}},h.id)})})]})}const ph=g.forwardRef(({trigger:e,groups:o,size:a="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:v=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:w,...b},j)=>{const[_,$]=g.useState(h),N=g.useRef(null),R=d!==void 0?d:_,S=g.useCallback(P=>{N.current=P,j&&(typeof j=="function"?j(P):j.current=P)},[j]),C=g.useCallback(P=>{d===void 0&&$(P),f==null||f(P)},[d,f]);return g.useEffect(()=>{if(!R)return;const P=L=>{var T;(T=N.current)!=null&&T.contains(L.target)||C(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[R,C]),g.useEffect(()=>{if(!R)return;const P=L=>{L.key==="Escape"&&C(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[R,C]),n.jsxs("div",{ref:S,className:se(tr.root,x&&tr.fullWidth,w),...b,children:[n.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":R,tabIndex:v?-1:0,onClick:v?void 0:()=>C(!R),onKeyDown:v?void 0:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),C(!R))},children:e}),n.jsx("div",{className:tr.panel,"data-open":R||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:tr.panelInner,children:o.map((P,L)=>n.jsxs("div",{children:[L>0&&n.jsx("div",{className:tr.groupDivider,"aria-hidden":"true"}),n.jsx(X9,{group:P,size:a,closeOnSelect:y,onClose:()=>C(!1)})]},P.id))})})]})});ph.displayName="DropdownMenu";const J9="_hiddenInput_8457s_8",e7="_area_8457s_19",t7="_uploadIcon_8457s_53",n7="_textBlock_8457s_59",r7="_title_8457s_67",o7="_description_8457s_76",a7="_fileRow_8457s_88",i7="_fileIcon_8457s_96",s7="_fileName_8457s_101",l7="_successIcon_8457s_115",c7="_removeBtn_8457s_121",d7="_progressWrap_8457s_145",u7="_progressBar_8457s_153",h7="_progressFill_8457s_161",p7="_progressLabel_8457s_168",f7="_errorRow_8457s_178",m7="_errorIcon_8457s_186",g7="_errorText_8457s_192",v7="_areaMulti_8457s_206",x7="_multiDropZone_8457s_214",y7="_fileList_8457s_244",w7="_fileListItem_8457s_254",b7="_inline_8457s_267",k7="_inlineIcon_8457s_309",_7="_inlineText_8457s_330",C7="_inlineProgress_8457s_353",j7="_inlineProgressFill_8457s_363",S7="_footerSlot_8457s_429",Ze={hiddenInput:J9,area:e7,uploadIcon:t7,textBlock:n7,title:r7,description:o7,fileRow:a7,fileIcon:i7,fileName:s7,successIcon:l7,removeBtn:c7,progressWrap:d7,progressBar:u7,progressFill:h7,progressLabel:p7,errorRow:f7,errorIcon:m7,errorText:g7,areaMulti:v7,multiDropZone:x7,fileList:y7,fileListItem:w7,inline:b7,inlineIcon:k7,inlineText:_7,inlineProgress:C7,inlineProgressFill:j7,footerSlot:S7};function tu(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Vg=g.forwardRef(({variant:e="area",multiple:o=!1,state:a="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:w,onClear:b,onRemoveFile:j,fieldVariant:_="outlined",browseButtonVariant:$="tertiary",footerSlot:N,disabled:R=!1,className:S,...C},P)=>{const L=g.useRef(null),[T,E]=g.useState(!1),M=!R&&(o||a==="empty"),F=g.useCallback(()=>{var Q;!R&&(o||a==="empty")&&((Q=L.current)==null||Q.click())},[R,o,a]),V=g.useCallback(Q=>{var D;if(o){const G=Q.target.files?Array.from(Q.target.files):[];G.length&&(w==null||w(G))}else{const G=(D=Q.target.files)==null?void 0:D[0];G&&(x==null||x(G))}Q.target.value=""},[o,x,w]),W=g.useCallback(Q=>{Q.preventDefault(),M&&E(!0)},[M]),B=g.useCallback(()=>E(!1),[]),K=g.useCallback(Q=>{var D;if(Q.preventDefault(),E(!1),!!M)if(o){const G=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];G.length&&(w==null||w(G))}else{const G=(D=Q.dataTransfer.files)==null?void 0:D[0];G&&(x==null||x(G))}},[M,o,x,w]),X=n.jsx("input",{ref:L,type:"file",className:Ze.hiddenInput,accept:y,multiple:o,disabled:R,"aria-hidden":"true",tabIndex:-1,onChange:V}),ae=l?n.jsxs("div",{className:Ze.fileRow,children:[n.jsx("span",{className:`${Ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(oo,{size:16})}),n.jsx("span",{className:Ze.fileName,children:l.name}),n.jsx(nr,{size:"sm",variant:"subtle",children:tu(l)}),a==="complete"&&n.jsx("span",{className:`${Ze.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(xn,{size:16})}),n.jsx("button",{type:"button",className:Ze.removeBtn,onClick:b,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ml,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:P,className:se(Ze.areaMulti,S),"data-drag-over":T||void 0,"data-disabled":R||void 0,onDragOver:W,onDragLeave:B,onDrop:K,...C,children:[X,n.jsxs("div",{className:Ze.multiDropZone,children:[n.jsx("span",{className:`${Ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(eu,{size:24})}),n.jsxs("div",{className:Ze.textBlock,children:[n.jsx("p",{className:Ze.title,children:f}),n.jsx("p",{className:Ze.description,children:v})]}),n.jsx(Be,{variant:$,size:"sm",onClick:F,disabled:R,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:Ze.fileList,"aria-label":"Selected files",children:Q.map((D,G)=>n.jsxs("li",{className:Ze.fileListItem,children:[n.jsx("span",{className:`${Ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(oo,{size:16})}),n.jsx("span",{className:Ze.fileName,children:D.name}),n.jsx(nr,{size:"sm",variant:"subtle",children:tu(D)}),n.jsx("button",{type:"button",className:Ze.removeBtn,onClick:()=>j==null?void 0:j(G),"aria-label":`Remove ${D.name}`,disabled:R,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ml,{size:14})})})]},`${D.name}-${G}`))})]})}return n.jsxs("div",{ref:P,className:se(Ze.area,S),"data-state":a,"data-drag-over":T||void 0,"data-disabled":R||void 0,onDragOver:W,onDragLeave:B,onDrop:K,...C,children:[X,a==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(eu,{size:24})}),n.jsxs("div",{className:Ze.textBlock,children:[n.jsx("p",{className:Ze.title,children:f}),n.jsx("p",{className:Ze.description,children:v})]}),n.jsx(Be,{variant:$,size:"sm",onClick:F,disabled:R,children:"Browse File"}),N&&n.jsx("div",{className:Ze.footerSlot,children:N})]}),a==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Ze.progressWrap,children:[n.jsx("div",{className:Ze.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ze.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Ze.progressLabel,children:[s,"% uploaded"]})]})]}),a==="complete"&&ae,a==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Ze.errorRow,children:[n.jsx("span",{className:`${Ze.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:20})}),n.jsx("p",{className:Ze.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(Be,{variant:"tertiary",size:"sm",onClick:F,disabled:R,children:"Try Again"})]})]})}const ce={empty:n.jsx(eu,{size:16}),uploading:n.jsx(oo,{size:16}),complete:n.jsx(xn,{size:16}),error:n.jsx(ya,{size:16})}[a],oe=(a==="uploading"||a==="complete")&&!!l;return n.jsxs("div",{ref:P,className:se(Ze.inline,S),"data-state":a,"data-field-variant":_,"data-disabled":R||void 0,...C,children:[X,n.jsx("span",{className:`${Ze.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ce}),n.jsxs("span",{className:Ze.inlineText,"data-has-file":oe?"":void 0,children:[a==="empty"&&f,a==="uploading"&&(l==null?void 0:l.name),a==="complete"&&(l==null?void 0:l.name),a==="error"&&(h??"Upload failed. Please try again.")]}),oe&&n.jsx(nr,{size:"sm",variant:"subtle",children:tu(l)}),(a==="uploading"||a==="complete"||a==="error")&&n.jsx("button",{type:"button",className:Ze.removeBtn,onClick:b,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ml,{size:14})})}),a==="empty"&&n.jsx(Be,{variant:$,size:"xs",onClick:F,disabled:R,children:"Browse"}),a==="uploading"&&n.jsx("div",{className:Ze.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ze.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Vg.displayName="FileUploader";const M7="_wrapper_127v8_8",$7="_labelRow_127v8_16",R7="_label_127v8_16",N7="_required_127v8_28",L7="_labelIcon_127v8_36",A7="_sm_127v8_46",T7="_md_127v8_47",E7="_lg_127v8_48",I7="_shell_127v8_44",P7="_outlined_127v8_75",z7="_underlined_127v8_102",O7="_float_127v8_147",F7="_leadingSlot_127v8_181",D7="_trailingSlot_127v8_193",B7="_trailingActionWrap_127v8_206",H7="_trailingActionBtn_127v8_213",W7="_successTrailingSlot_127v8_234",U7="_errorTrailingSlot_127v8_239",q7="_control_127v8_251",V7="_selectValue_127v8_297",G7="_selectPlaceholder_127v8_303",Y7="_selectChevron_127v8_307",K7="_selectChevronOpen_127v8_312",Q7="_textareaShell_127v8_315",Z7="_textareaControl_127v8_334",X7="_footer_127v8_351",J7="_footerRow_127v8_363",ek="_footerError_127v8_364",tk="_footerSuccess_127v8_365",nk="_footerIcon_127v8_368",rk="_wrapperHorizontal_127v8_378",ok="_horizontalLabelCol_127v8_384",ak="_horizontalLabelHint_127v8_393",ik="_horizontalControlCol_127v8_402",sk="_msContainer_127v8_416",lk="_msShell_127v8_425",ck="_msOpen_127v8_440",dk="_msDisabled_127v8_447",uk="_msBody_127v8_450",hk="_msPlaceholder_127v8_459",pk="_msChevron_127v8_469",fk="_msChevronOpen_127v8_480",mk="_msPanel_127v8_483",ze={wrapper:M7,labelRow:$7,label:R7,required:N7,labelIcon:L7,sm:A7,md:T7,lg:E7,shell:I7,outlined:P7,underlined:z7,float:O7,leadingSlot:F7,trailingSlot:D7,trailingActionWrap:B7,trailingActionBtn:H7,successTrailingSlot:W7,errorTrailingSlot:U7,control:q7,selectValue:V7,selectPlaceholder:G7,selectChevron:Y7,selectChevronOpen:K7,textareaShell:Q7,textareaControl:Z7,footer:X7,footerRow:J7,footerError:ek,footerSuccess:tk,footerIcon:nk,wrapperHorizontal:rk,horizontalLabelCol:ok,horizontalLabelHint:ak,horizontalControlCol:ik,msContainer:sk,msShell:lk,msOpen:ck,msDisabled:dk,msBody:uk,msPlaceholder:hk,msChevron:pk,msChevronOpen:fk,msPanel:mk};function Ma({label:e,labelIcon:o,labelDescription:a,hint:s,error:l,success:d,required:h,htmlFor:f,layout:v="vertical",labelWidth:y=160,className:x,children:w}){const b=l??d??s,j=l?"error":d?"success":"hint",_=b?n.jsxs("p",{className:se(ze.footer,j==="error"&&ze.footerError,j==="success"&&ze.footerSuccess),role:j==="error"?"alert":void 0,"aria-live":j==="error"?"assertive":void 0,children:[j==="hint"&&n.jsx("span",{className:`${ze.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:12})}),b]}):null,$=e!=null?n.jsxs("div",{className:ze.labelRow,children:[n.jsx("label",{className:ze.label,htmlFor:f,children:e}),h&&n.jsx("span",{className:ze.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${ze.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(v==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return n.jsxs("div",{className:se(ze.wrapper,ze.wrapperHorizontal,x),children:[($||a)&&n.jsxs("div",{className:ze.horizontalLabelCol,style:N,children:[$,a&&n.jsx("p",{className:ze.horizontalLabelHint,children:a})]}),n.jsxs("div",{className:ze.horizontalControlCol,children:[w,_]})]})}return n.jsxs("div",{className:se(ze.wrapper,x),children:[$,w,_]})}function Ei({variant:e="outlined",size:o="md",error:a,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:v,isTextarea:y,focused:x,className:w,children:b}){const j=o==="sm"?14:o==="lg"?18:16,_=s&&!a&&!f&&!v?n.jsx(xn,{size:j}):null,$=a&&!f&&!v?n.jsx(ya,{size:j}):null,N=!!h,R=!!(f||v||_||$);return n.jsxs("div",{className:se(ze.shell,ze[e],ze[o],y&&ze.textareaShell,w),"data-error":a||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":R||void 0,children:[h&&n.jsx("span",{className:se(ze.leadingSlot,"alloy-icon-slot"),children:h}),b,v?n.jsx("span",{className:ze.trailingActionWrap,children:v}):f||_||$?n.jsx("span",{className:se(ze.trailingSlot,"alloy-icon-slot",_&&ze.successTrailingSlot,$&&ze.errorTrailingSlot),children:f??_??$}):null]})}const fh=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:v="text",leadingIcon:y,trailingIcon:x,layout:w,labelWidth:b,labelDescription:j,id:_,disabled:$,readOnly:N,className:R,...S},C)=>{const P=g.useId(),L=_??P;return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:L,layout:w,labelWidth:b,labelDescription:j,className:R,children:n.jsx(Ei,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:N,leadingIcon:y,trailingIcon:x,children:n.jsx("input",{ref:C,id:L,type:v,disabled:$,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":a||s||l?`${L}-footer`:void 0,className:se(ze.control),...S})})})});fh.displayName="TextField";const gk=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,trailingIcon:y,layout:x,labelWidth:w,labelDescription:b,id:j,disabled:_,readOnly:$,className:N,...R},S)=>{const C=g.useId(),P=j??C;return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:P,layout:x,labelWidth:w,labelDescription:b,className:N,children:n.jsx(Ei,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:$,leadingIcon:v,trailingIcon:y,isTextarea:!0,children:n.jsx("textarea",{ref:S,id:P,disabled:_,readOnly:$,"aria-invalid":s?!0:void 0,className:se(ze.control,ze.textareaControl),...R})})})});gk.displayName="TextArea";const vk={sm:"sm",md:"md",lg:"lg"},Gg=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,options:b,value:j,defaultValue:_="",onChange:$,placeholder:N="Select an option…",disabled:R,readOnly:S,id:C,className:P},L)=>{var D;const T=g.useId(),E=C??T,M=j!==void 0,[F,V]=g.useState(_),W=M?j:F,B=g.useCallback(G=>{M||V(G),$==null||$(G)},[M,$]),[K,X]=g.useState(!1),ae=(D=b.find(G=>G.value===W))==null?void 0:D.label,ce=f==="sm"?14:f==="lg"?18:16,oe=vk[f],Q=n.jsx(Ei,{variant:h,size:f,error:!!s,success:!!l,disabled:R,readOnly:S,focused:K,leadingIcon:v,trailingIcon:n.jsx("span",{className:se(ze.selectChevron,K&&ze.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Hn,{size:ce})}),children:n.jsx("span",{className:se(ze.control,ze.selectValue,!ae&&ze.selectPlaceholder),children:ae??N})});return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:E,layout:y,labelWidth:x,labelDescription:w,className:P,children:n.jsx(ph,{ref:L,id:E,fullWidth:!0,trigger:Q,groups:[{id:"options",options:b.map(G=>({id:G.value,label:G.label,disabled:G.disabled,selected:G.value===W,onClick:()=>B(G.value)}))}],size:oe,width:"100%",placement:"bottom-start",open:K,onOpenChange:X,disabled:R||S})})});Gg.displayName="SelectField";const xk=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,id:b,disabled:j,readOnly:_,className:$,...N},R)=>{const S=g.useId(),C=b??S,[P,L]=g.useState(!1),T=f==="sm"?14:f==="lg"?18:16;return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:C,layout:y,labelWidth:x,labelDescription:w,className:$,children:n.jsx(Ei,{variant:h,size:f,error:!!s,success:!!l,disabled:j,readOnly:_,leadingIcon:v,trailingAction:n.jsx("button",{type:"button",className:`${ze.trailingActionBtn} alloy-icon-slot`,onClick:()=>L(E=>!E),tabIndex:j?-1:0,"aria-label":P?"Hide password":"Show password","aria-pressed":P,children:P?n.jsx(gg,{size:T}):n.jsx(rh,{size:T})}),children:n.jsx("input",{ref:R,id:C,type:P?"text":"password",disabled:j,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:se(ze.control),...N})})})});xk.displayName="PasswordField";const Yg=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:v,onChange:y,layout:x,labelWidth:w,labelDescription:b,id:j,value:_,defaultValue:$,disabled:N,readOnly:R,className:S,...C},P)=>{const L=g.useId(),T=j??L,E=f==="sm"?14:f==="lg"?18:16,M=_!==void 0?String(_).length>0:void 0,F=g.useCallback(V=>{y==null||y(V)},[y]);return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:T,layout:x,labelWidth:w,labelDescription:b,className:S,children:n.jsx(Ei,{variant:h,size:f,error:!!s,success:!!l,disabled:N,readOnly:R,leadingIcon:n.jsx(hg,{size:E}),trailingAction:M?n.jsx("button",{type:"button",className:`${ze.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(Li,{size:E})}):void 0,children:n.jsx("input",{ref:P,id:T,type:"search",value:_,defaultValue:$,disabled:N,readOnly:R,"aria-invalid":s?!0:void 0,onChange:F,className:se(ze.control),...C})})})});Yg.displayName="SearchField";const Kg=g.forwardRef((e,o)=>n.jsx(fh,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));Kg.displayName="EmailField";const Qg=g.forwardRef((e,o)=>n.jsx(fh,{ref:o,type:"number",inputMode:"numeric",...e}));Qg.displayName="NumberField";const yk={sm:"sm",md:"sm",lg:"md"},wk={sm:"sm",md:"md",lg:"lg"},bk=g.forwardRef(({label:e,labelIcon:o,hint:a,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:v,labelWidth:y,labelDescription:x,options:w,value:b,defaultValue:j=[],onChange:_,placeholder:$="Select options…",disabled:N,readOnly:R,id:S,className:C},P)=>{const L=g.useId(),T=S??L,E=`${T}-list`,M=g.useRef(null),F=b!==void 0,[V,W]=g.useState(j),B=F?b:V,K=g.useCallback(z=>{F||W(z),_==null||_(z)},[F,_]),[X,ae]=g.useState(!1);g.useEffect(()=>{if(!X)return;const z=U=>{M.current&&!M.current.contains(U.target)&&ae(!1)},ne=U=>{U.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",z),document.addEventListener("keydown",ne),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("keydown",ne)}},[X]);const ce=z=>{if(N||R)return;const ne=B.includes(z)?B.filter(U=>U!==z):[...B,z];K(ne)},oe=z=>{N||R||((z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ae(ne=>!ne)),z.key==="Backspace"&&B.length>0&&!X&&K(B.slice(0,-1)))},Q=f==="sm"?14:f==="lg"?18:16,D=yk[f],G=wk[f],A=Object.fromEntries(w.map(z=>[z.value,z.label]));return n.jsx(Ma,{label:e,labelIcon:o,hint:a,error:s,success:l,required:d,htmlFor:T,layout:v,labelWidth:y,labelDescription:x,className:C,children:n.jsxs("div",{ref:M,className:ze.msContainer,children:[n.jsxs("div",{ref:P,id:T,role:"combobox","aria-haspopup":"listbox","aria-expanded":X,"aria-controls":E,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:se(ze.msShell,ze[h],ze[f],X&&ze.msOpen,N&&ze.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!R&&ae(z=>!z)},onKeyDown:oe,children:[n.jsx("div",{className:ze.msBody,children:B.length===0?n.jsx("span",{className:ze.msPlaceholder,children:$}):B.map(z=>n.jsx(nr,{size:D,variant:"subtle",dismissible:!N&&!R,onDismiss:()=>K(B.filter(ne=>ne!==z)),children:A[z]??z},z))}),n.jsx("span",{className:se(ze.msChevron,"alloy-icon-slot",X&&ze.msChevronOpen),children:n.jsx(Hn,{size:Q})})]}),X&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:ze.msPanel,children:w.map(z=>{const ne=B.includes(z.value);return n.jsx($n,{label:z.label,size:G,trailingAction:"checkbox",checked:ne,disabled:z.disabled,role:"option","aria-selected":ne,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{z.disabled||ce(z.value)}},z.value)})})]})})});bk.displayName="MultiSelectField";const kk="_root_1249j_6",_k="_pageControls_1249j_14",Ck="_pageBtn_1249j_21",jk="_ellipsis_1249j_36",Sk="_rowsGroup_1249j_51",Mk="_rowsSelect_1249j_58",$k="_countText_1249j_64",Rk="_groupLabel_1249j_74",Nk="_goToGroup_1249j_84",Lk="_goToInput_1249j_91",Xn={root:kk,pageControls:_k,pageBtn:Ck,ellipsis:jk,rowsGroup:Sk,rowsSelect:Mk,countText:$k,groupLabel:Rk,goToGroup:Nk,goToInput:Lk};function Ak(e,o,a){if(o<=1)return[1];const s=Math.max(2,e-a),l=Math.min(o-1,e+a),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Tk=g.forwardRef(({page:e,totalPages:o,onPageChange:a,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:v,siblingCount:y=1,size:x="sm",disabled:w=!1,className:b,...j},_)=>{const[$,N]=g.useState(""),R=x,S=x,C=x==="sm"?14:16,P=Ak(e,o,y),L=g.useCallback(M=>{const F=Math.min(Math.max(1,M),o);F!==e&&a(F)},[e,o,a]),T=g.useCallback(M=>{if(M.key==="Enter"){const F=parseInt($,10);isNaN(F)||L(F),N("")}},[$,L]),E=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return n.jsxs("nav",{ref:_,"aria-label":"Pagination",className:se(Xn.root,b),"data-size":x,...j,children:[s&&n.jsxs("div",{className:Xn.rowsGroup,children:[n.jsx("span",{className:Xn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Xn.rowsSelect,children:n.jsx(Gg,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:M=>h==null?void 0:h(Number(M.target.value)),children:d.map(M=>n.jsx("option",{value:M,children:M},M))})})]}),E&&n.jsx("span",{className:Xn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Xn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(Be,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>L(e-1),children:n.jsx(mg,{size:C})}),P.map((M,F)=>M==="ellipsis"?n.jsx("span",{className:Xn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${F}`):n.jsx(Be,{variant:M===e?"secondary":"ghost",size:R,"aria-label":`Page ${M}`,"aria-current":M===e?"page":void 0,disabled:w,onClick:()=>L(M),className:Xn.pageBtn,children:M},M)),n.jsx(Be,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>L(e+1),children:n.jsx(Rn,{size:C})})]}),f&&n.jsxs("div",{className:Xn.goToGroup,children:[n.jsx("span",{className:Xn.groupLabel,children:"Go to"}),n.jsx("div",{className:Xn.goToInput,children:n.jsx(Qg,{size:S,value:$,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:M=>N(M.target.value),onKeyDown:T})})]})]})});Tk.displayName="Pagination";const Ek="_root_1vx33_6",Ik="_fullWidth_1vx33_18",Pk="_item_1vx33_23",zk="_indicator_1vx33_28",Ok="_sm_1vx33_46",Fk="_md_1vx33_54",Dk="_lg_1vx33_62",Bk="_itemSelected_1vx33_109",Hk="_itemIcon_1vx33_115",Wk="_itemLabel_1vx33_127",to={root:Ek,fullWidth:Ik,item:Pk,indicator:zk,sm:Ok,md:Fk,lg:Dk,itemSelected:Bk,itemIcon:Hk,itemLabel:Wk},Zg=g.createContext(null);function Uk(e){const o=g.useContext(Zg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Xg=g.forwardRef(({value:e,leadingIcon:o,className:a,children:s,disabled:l,onClick:d,...h},f)=>{const{value:v,onChange:y,disabled:x,name:w}=Uk("SegmentedControl.Item"),b=v===e,j=x||!!l;return n.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":b,name:w,disabled:j,className:se(to.item,b&&to.itemSelected,a),onClick:_=>{j||y(e),d==null||d(_)},...h,children:[o&&n.jsx("span",{className:se(to.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:to.itemLabel,children:s})]})});Xg.displayName="SegmentedControl.Item";const Jg=g.forwardRef(({value:e,defaultValue:o="",onChange:a,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(o),b=e!==void 0,j=b?e:x,_=g.useId(),$=g.useRef(null);g.useLayoutEffect(()=>{const R=$.current;if(!R)return;const S=R.querySelector('[aria-checked="true"]');S&&(R.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),R.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[j,s]);const N=R=>{b||w(R),a==null||a(R)};return n.jsx(Zg.Provider,{value:{value:j,onChange:N,disabled:l,name:_},children:n.jsxs("div",{ref:R=>{$.current=R,typeof y=="function"?y(R):y&&(y.current=R)},role:"radiogroup",className:se(to.root,to[s],d&&to.fullWidth,h),...v,children:[n.jsx("span",{className:to.indicator,"aria-hidden":"true"}),f]})})});Jg.displayName="SegmentedControl";Object.assign(Jg,{Item:Xg});const qk="_root_fkv0x_6",Vk="_sm_fkv0x_26",Gk="_md_fkv0x_33",Yk="_lg_fkv0x_40",Kk="_dot_fkv0x_49",Qk="_success_fkv0x_58",Zk="_warning_fkv0x_65",Xk="_error_fkv0x_72",Jk="_info_fkv0x_79",e_="_neutral_fkv0x_86",t_="_pending_fkv0x_93",tl={root:qk,sm:Vk,md:Gk,lg:Yk,dot:Kk,success:Qk,warning:Zk,error:Xk,info:Jk,neutral:e_,pending:t_},Si=g.forwardRef(({status:e="neutral",size:o="md",dot:a=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:se(tl.root,tl[o],tl[e],s),...d,children:[a&&n.jsx("span",{className:tl.dot,"aria-hidden":"true"}),l]}));Si.displayName="StatusTag";const n_="_root_1m8t5_6",r_="_underline_1m8t5_15",o_="_background_1m8t5_21",a_="_underlineIndicator_1m8t5_26",i_="_md_1m8t5_43",s_="_lg_1m8t5_44",l_="_tab_1m8t5_42",c_="_tabSelected_1m8t5_77",d_="_tabIcon_1m8t5_99",u_="_tabLabel_1m8t5_111",h_="_tabBadge_1m8t5_116",p_="_tabLabelEditable_1m8t5_123",f_="_tabLabelInput_1m8t5_128",m_="_addTab_1m8t5_147",g_="_addTabIcon_1m8t5_160",gn={root:n_,underline:r_,background:o_,underlineIndicator:a_,md:i_,lg:s_,tab:l_,tabSelected:c_,tabIcon:d_,tabLabel:u_,tabBadge:h_,tabLabelEditable:p_,tabLabelInput:f_,addTab:m_,addTabIcon:g_},e2=g.createContext(null);function t2(e){const o=g.useContext(e2);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const n2=g.forwardRef(({value:e,leadingIcon:o,trailingBadge:a,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:v,children:y,...x},w)=>{const{value:b,onChange:j,disabled:_,name:$}=t2("Tabs.Tab"),N=b===e,R=_||!!s,S=typeof y=="string"?y:"",[C,P]=g.useState(d&&l),[L,T]=g.useState(S),E=g.useRef(null);g.useEffect(()=>{if(C){const B=E.current;B&&(B.focus(),B.select())}},[C]),g.useEffect(()=>{d&&l&&!C&&(T(typeof y=="string"?y:""),P(!0))},[d,l]);const M=()=>{const B=L.trim();B&&B!==S&&(h==null||h(B)),P(!1)},F=()=>{T(S),P(!1)},V=B=>{!l||R||(B.stopPropagation(),T(S),P(!0))},W=B=>{B.key==="Enter"?(B.preventDefault(),M()):B.key==="Escape"&&(B.preventDefault(),F())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":N,name:$,disabled:R,className:se(gn.tab,N&&gn.tabSelected,v),onClick:B=>{C||(R||j(e),f==null||f(B))},...x,children:[o&&n.jsx("span",{className:se(gn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),C?n.jsx("input",{ref:E,type:"text",value:L,onChange:B=>T(B.target.value),onKeyDown:W,onBlur:M,onClick:B=>B.stopPropagation(),className:gn.tabLabelInput,"aria-label":"Tab name",size:Math.max(L.length,1)}):y!==void 0&&n.jsx("span",{className:se(gn.tabLabel,l&&gn.tabLabelEditable),onDoubleClick:V,children:y}),a&&!C&&n.jsx("span",{className:gn.tabBadge,children:a})]})});n2.displayName="Tabs.Tab";const v_=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r2=g.forwardRef(({className:e,onClick:o,"aria-label":a="Add tab",...s},l)=>{const{disabled:d}=t2("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":a,disabled:d,className:se(gn.tab,gn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:se(gn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(v_,{})})})});r2.displayName="Tabs.AddTab";const o2=g.forwardRef(({variant:e="underline",size:o="md",value:a,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(s),b=a!==void 0,j=b?a:x,_=g.useId(),$=g.useRef(null);g.useLayoutEffect(()=>{const R=$.current;if(!R||e!=="underline")return;const S=R.querySelector('[aria-selected="true"]');S&&(R.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),R.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[j,e]);const N=R=>{b||w(R),l==null||l(R)};return n.jsx(e2.Provider,{value:{value:j,onChange:N,disabled:d,variant:e,size:o,name:_},children:n.jsxs("div",{ref:R=>{$.current=R,typeof y=="function"?y(R):y&&(y.current=R)},role:"tablist",className:se(gn.root,gn[e],gn[o],h),...v,children:[e==="underline"&&n.jsx("span",{className:gn.underlineIndicator,"aria-hidden":"true"}),f]})})});o2.displayName="Tabs";Object.assign(o2,{Tab:n2,AddTab:r2});const x_="_selectedBorder_1ypeg_7",y_="_selectedFill_1ypeg_12",Ff={selectedBorder:x_,selectedFill:y_},w_=g.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:a="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const v=x=>{s==null||s(!e),l==null||l(x)},y=e?a==="fill"?Ff.selectedFill:Ff.selectedBorder:void 0;return n.jsx(Be,{ref:f,variant:o,"aria-pressed":e,className:se(y,d),onClick:v,...h})});w_.displayName="ToggleButton";const b_="_root_mcb75_6",k_="_disabled_mcb75_13",__="_sm_mcb75_20",C_="_md_mcb75_31",j_="_lg_mcb75_42",S_="_track_mcb75_54",M_="_trackChecked_mcb75_90",$_="_thumb_mcb75_100",R_="_labelWrap_mcb75_117",N_="_label_mcb75_117",L_="_description_mcb75_139",kr={root:b_,disabled:k_,sm:__,md:C_,lg:j_,track:S_,trackChecked:M_,thumb:$_,labelWrap:R_,label:N_,description:L_},A_=g.forwardRef(({checked:e,defaultChecked:o=!1,onChange:a,disabled:s,size:l="md",label:d,description:h,id:f,name:v,value:y,className:x},w)=>{const b=g.useId(),j=f??b,_=`${j}-label`,$=e!==void 0,[N,R]=g.useState(o),S=$?e:N,C=()=>{if(s)return;const L=!S;$||R(L),a==null||a(L)},P=L=>{(L.key===" "||L.key==="Enter")&&(L.preventDefault(),C())};return n.jsxs("div",{className:se(kr.root,kr[l],s&&kr.disabled,x),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:j,"aria-checked":S,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:y,className:se(kr.track,S&&kr.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:P,children:n.jsx("span",{className:kr.thumb})}),(d||h)&&n.jsxs("div",{className:kr.labelWrap,children:[d&&n.jsx("label",{id:_,htmlFor:j,className:kr.label,children:d}),h&&n.jsx("span",{className:kr.description,children:h})]})]})});A_.displayName="Switch";const T_="_root_104n4_5",E_="_disabled_104n4_11",I_="_sm_104n4_17",P_="_md_104n4_25",z_="_lg_104n4_33",O_="_controlWrap_104n4_41",F_="_input_104n4_50",D_="_ring_104n4_65",B_="_ringChecked_104n4_90",H_="_ringError_104n4_94",W_="_dot_104n4_104",U_="_labelWrap_104n4_112",q_="_label_104n4_112",V_="_error_104n4_130",G_="_required_104n4_132",Y_="_description_104n4_137",pn={root:T_,disabled:E_,sm:I_,md:P_,lg:z_,controlWrap:O_,input:F_,ring:D_,ringChecked:B_,ringError:H_,dot:W_,labelWrap:U_,label:q_,error:V_,required:G_,description:Y_},K_=g.forwardRef(({value:e,checked:o,onChange:a,disabled:s,error:l,size:d="md",label:h,description:f,id:v,name:y,required:x,className:w},b)=>{const j=g.useId(),_=v??j;return n.jsxs("div",{className:se(pn.root,pn[d],s&&pn.disabled,l&&pn.error,w),children:[n.jsxs("div",{className:pn.controlWrap,children:[n.jsx("input",{ref:b,type:"radio",id:_,name:y,value:e,checked:o,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>a==null?void 0:a(e),className:pn.input}),n.jsx("span",{className:se(pn.ring,o&&pn.ringChecked,l&&pn.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:pn.dot})})]}),(h||f)&&n.jsxs("div",{className:pn.labelWrap,children:[h&&n.jsxs("label",{htmlFor:_,className:pn.label,children:[h,x&&n.jsx("span",{className:pn.required,"aria-hidden":"true",children:" *"})]}),f&&n.jsx("span",{className:pn.description,children:f})]})]})});K_.displayName="Radio";const Q_="_table_1ad04_8",Z_="_sm_1ad04_16",X_="_row_1ad04_30",J_="_head_1ad04_47",eC="_headLabel_1ad04_82",tC="_sortBtn_1ad04_96",nC="_sortIcon_1ad04_119",rC="_cell_1ad04_142",oC="_cellText_1ad04_175",aC="_cellStack_1ad04_203",iC="_cellStackPrimary_1ad04_210",sC="_cellStackSecondary_1ad04_221",lC="_cellActions_1ad04_233",cC="_cellControl_1ad04_240",dC="_addCell_1ad04_251",uC="_addRowCell_1ad04_264",hC="_addRowLabel_1ad04_276",Vt={table:Q_,sm:Z_,row:X_,head:J_,headLabel:eC,sortBtn:tC,sortIcon:nC,cell:rC,cellText:oC,cellStack:aC,cellStackPrimary:iC,cellStackSecondary:sC,cellActions:lC,cellControl:cC,addCell:dC,addRowCell:uC,addRowLabel:hC},a2=g.createContext({addColumn:!1,addRow:!1}),i2=()=>g.useContext(a2),pC=g.forwardRef(({size:e="md",interaction:o="row",addColumn:a=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...v},y)=>{const x=g.useMemo(()=>({addColumn:a,addRow:s,onAddColumn:l,onAddRow:d}),[a,s,l,d]);return n.jsx(a2.Provider,{value:x,children:n.jsx("table",{ref:y,className:se(Vt.table,e==="sm"&&Vt.sm,h),"data-interaction":o,...v,children:f})})});pC.displayName="Table";const s2=g.forwardRef(({align:e="left",sort:o,onSort:a,hoverable:s,selected:l,className:d,children:h,...f},v)=>{const y=o!==void 0;return n.jsx("th",{ref:v,className:se(Vt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":y?"none":void 0,...f,children:y?n.jsxs("button",{type:"button",className:Vt.sortBtn,onClick:a,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Vt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Hn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Vt.headLabel,children:h})})});s2.displayName="TableHead";const fC=g.forwardRef(({children:e,...o},a)=>{const{addColumn:s,onAddColumn:l}=i2(),d=s?g.Children.map(e,(h,f)=>{if(!g.isValidElement(h)||f!==0)return h;const v=g.Children.toArray(h.props.children);return g.cloneElement(h,{},[...v,n.jsx(s2,{hoverable:!0,onClick:l,className:Vt.addCell,"aria-label":"Add column",children:n.jsx(ja,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:a,...o,children:d})});fC.displayName="TableHeader";const l2=g.forwardRef(({hoverable:e=!0,selected:o,className:a,children:s,...l},d)=>n.jsx("tr",{ref:d,className:se(Vt.row,a),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));l2.displayName="TableRow";const Eu=g.forwardRef(({align:e="left",compact:o,hoverable:a=!0,selected:s,className:l,children:d,...h},f)=>n.jsx("td",{ref:f,className:se(Vt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":a||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Eu.displayName="TableCell";const mC=g.forwardRef(({children:e,...o},a)=>{const{addColumn:s,addRow:l,onAddRow:d}=i2(),h=s?g.Children.map(e,f=>{if(!g.isValidElement(f))return f;const v=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...v,n.jsx(Eu,{"aria-hidden":"true",className:Vt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:a,...o,children:[h,l&&n.jsx(l2,{hoverable:!1,children:n.jsx(Eu,{colSpan:999,onClick:d,className:Vt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Vt.addRowLabel,children:[n.jsx(ja,{size:14,strokeWidth:2}),"Add row"]})})})]})});mC.displayName="TableBody";const gC=g.forwardRef(({variant:e="primary",size:o="md",wrap:a,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:se(Vt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":a||void 0,...d,children:l}));gC.displayName="CellText";const vC=g.forwardRef(({primary:e,secondary:o,className:a,...s},l)=>n.jsxs("div",{ref:l,className:se(Vt.cellStack,a),...s,children:[n.jsx("span",{className:Vt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Vt.cellStackSecondary,children:o})]}));vC.displayName="CellStack";const xC=g.forwardRef(({size:e="sm",...o},a)=>n.jsx(nr,{ref:a,size:e,...o}));xC.displayName="CellTag";const yC=g.forwardRef(({size:e="sm",...o},a)=>n.jsx(Si,{ref:a,size:e,...o}));yC.displayName="CellStatusTag";const wC=g.forwardRef(({className:e,children:o,...a},s)=>n.jsx("div",{ref:s,className:se(Vt.cellActions,e),...a,children:o}));wC.displayName="CellActions";const bC=g.forwardRef(({className:e,children:o,...a},s)=>n.jsx("div",{ref:s,className:se(Vt.cellControl,e),...a,children:o}));bC.displayName="CellControl";const kC="_root_1afcs_8",_C="_secondary_1afcs_23",CC="_header_1afcs_28",jC="_headerText_1afcs_36",SC="_title_1afcs_43",MC="_subtitle_1afcs_52",$C="_action_1afcs_61",RC="_hero_1afcs_66",NC="_heroValue_1afcs_74",LC="_heroCaption_1afcs_83",AC="_heroChange_1afcs_89",TC="_body_1afcs_95",EC="_legend_1afcs_103",Cn={root:kC,secondary:_C,header:CC,headerText:jC,title:SC,subtitle:MC,action:$C,hero:RC,heroValue:NC,heroCaption:LC,heroChange:AC,body:TC,legend:EC},IC=g.forwardRef(({title:e,subtitle:o,action:a,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:v,className:y,...x},w)=>n.jsxs("div",{ref:w,className:se(Cn.root,f&&Cn.secondary,y),...x,children:[n.jsxs("div",{className:Cn.header,children:[n.jsxs("div",{className:Cn.headerText,children:[n.jsx("h3",{className:Cn.title,children:e}),o&&n.jsx("p",{className:Cn.subtitle,children:o})]}),a&&n.jsx("div",{className:Cn.action,children:a})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:Cn.hero,children:[s!==void 0&&n.jsx("span",{className:Cn.heroValue,children:s}),l&&n.jsx("span",{className:Cn.heroChange,children:l}),d&&n.jsx("span",{className:Cn.heroCaption,children:d})]}),n.jsx("div",{className:Cn.body,children:v}),h&&n.jsx("div",{className:Cn.legend,children:h})]}));IC.displayName="ChartCard";const PC="_root_je8nq_7",zC="_item_je8nq_17",OC="_swatch_je8nq_23",FC="_label_je8nq_29",DC="_bookend_je8nq_33",ca={root:PC,item:zC,swatch:OC,label:FC,bookend:DC},c2=g.forwardRef(({items:e,before:o,after:a,variant:s="square",swatchSize:l=12,className:d,...h},f)=>n.jsxs("div",{ref:f,className:se(ca.root,d),...h,children:[o&&n.jsx("span",{className:ca.bookend,children:o}),e.map((v,y)=>{const x=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return n.jsxs("span",{className:ca.item,children:[n.jsx("span",{className:ca.swatch,style:x,"aria-hidden":"true"}),v.label!==void 0&&n.jsx("span",{className:ca.label,children:v.label})]},y)}),a&&n.jsx("span",{className:ca.bookend,children:a})]}));c2.displayName="ChartLegend";const BC="_root_igkx4_5",HC="_svgWrap_igkx4_13",WC="_svg_igkx4_13",UC="_gridLine_igkx4_23",qC="_axisLabel_igkx4_28",VC="_legendWrap_igkx4_43",GC="_legendItem_igkx4_51",YC="_legendDot_igkx4_57",KC="_legendLabel_igkx4_64",QC="_tooltip_igkx4_71",ZC="_tooltipLabel_igkx4_85",XC="_tooltipRow_igkx4_95",JC="_tooltipDot_igkx4_101",ej="_tooltipSeries_igkx4_108",tj="_tooltipValue_igkx4_115",Ve={root:BC,svgWrap:HC,svg:WC,gridLine:UC,axisLabel:qC,legendWrap:VC,legendItem:GC,legendDot:YC,legendLabel:KC,tooltip:QC,tooltipLabel:ZC,tooltipRow:XC,tooltipDot:JC,tooltipSeries:ej,tooltipValue:tj},nj=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function nu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),a=e/o;return a<=1?o:a<=2?2*o:a<=5?5*o:10*o}function da(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const rj=g.forwardRef(({series:e,labels:o,variant:a="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:v,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:w,stackStyle:b="gradient-each",capColor:j,className:_,...$},N)=>{var O,Y,ie,xe;const R=v&&v.length>0?v:nj,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,P]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),L=g.useRef(null),[T,E]=g.useState(540);g.useEffect(()=>{const le=L.current;if(!le)return;const we=new ResizeObserver(Se=>{var ue;const De=(ue=Se[0])==null?void 0:ue.contentRect.width;De>0&&E(Math.floor(De))});we.observe(le);const ye=Math.floor(le.getBoundingClientRect().width);return ye>0&&E(ye),()=>we.disconnect()},[]);const M=44,F=0,V=20,W=20,B=T,K=s,X=B-M-F,ae=K-V-W,ce=5,oe=e.map((le,we)=>le.color??R[we%R.length]);let Q=0;a==="stacked"?o.forEach((le,we)=>{const ye=e.reduce((Se,De)=>Se+(De.data[we]??0),0);ye>Q&&(Q=ye)}):a==="horizontal"?Q=Math.max(...((O=e[0])==null?void 0:O.data)??[0]):e.forEach(le=>le.data.forEach(we=>{we>Q&&(Q=we)}));const D=nu(Q),G=Array.from({length:ce+1},(le,we)=>D*(we/ce)).reverse(),A=le=>W+ae-le/D*ae,z=X/o.length,ne=3,U=a==="grouped"?Math.max(4,(z-ne*(e.length+1))/e.length):z,ee=()=>P(le=>({...le,visible:!1})),de=g.useCallback(le=>{const we=le.currentTarget.getBoundingClientRect(),ye=le.clientX-we.left,Se=Math.floor((ye-M)/z);if(Se<0||Se>=o.length){ee();return}const De=e.map((ue,_e)=>({color:oe[_e],series:ue.label,value:ue.data[Se]??0}));P({visible:!0,x:le.clientX+12,y:le.clientY-8,label:o[Se],items:De})},[e,o,z,oe,M]);if(a==="gradient"){const le=((Y=e[0])==null?void 0:Y.data)??[],we=((ie=e[0])==null?void 0:ie.label)??"",ye=44,Se=0,De=20,ue=20,_e=Math.max(B-ye-Se,1),Ne=K-De-ue,Le=Math.max(0,...le),Ue=Le>0?nu(Le):10,Ge=5,ot=Array.from({length:Ge+1},(Ie,at)=>Ue*at/Ge),Ee=Ie=>De+Ne-Ie/Ue*Ne,Qe=_e/Math.max(1,le.length),lt=Ie=>ye+Qe*Ie,bt=Ie=>ye+Qe*(Ie+1),et=Ie=>ye+Qe*(Ie+.5),ut=le.length===0?"":le.map((Ie,at)=>{const yt=Ee(Ie);return`M ${lt(at)} ${yt} L ${bt(at)} ${yt}`}).join(" "),Ot=[];le.forEach((Ie,at)=>{if(Ie<=0)return;const yt=Ee(Ie);Ot.push({x:lt(at),y:yt,width:Math.max(bt(at)-lt(at),0),height:De+Ne-yt})});const Un=Math.max(1,Math.ceil(45/Qe)),uo=o.length-1,Rr=w??(Ie=>`${da(Ie)}${h}`);return n.jsxs("div",{ref:N,className:se(Ve.root,_),...$,children:[n.jsx("div",{ref:L,className:Ve.svgWrap,children:n.jsxs("svg",{width:B,height:K,viewBox:`0 0 ${B} ${K}`,className:Ve.svg,onMouseLeave:ee,onMouseMove:Ie=>{const at=Ie.currentTarget.getBoundingClientRect(),yt=Ie.clientX-at.left,me=Math.floor((yt-ye)/Qe);if(me<0||me>=le.length){ee();return}P({visible:!0,x:Ie.clientX+12,y:Ie.clientY-8,label:o[me]??"",items:[{color:x,series:we,value:le[me]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y}),n.jsx("stop",{offset:"100%",stopColor:x})]}),n.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),ot.map((Ie,at)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:B-Se,y1:Ee(Ie),y2:Ee(Ie),className:Ve.gridLine}),n.jsxs("text",{x:0,y:Ee(Ie)-6,className:Ve.axisLabel,textAnchor:"start",children:[da(Ie),h]})]},`t-${at}`)),Ot.map((Ie,at)=>n.jsx("rect",{x:Ie.x,y:Ie.y,width:Ie.width,height:Ie.height,fill:`url(#${S}-fill)`},`b-${at}`)),ut&&n.jsx("path",{d:ut,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var He;const Ie=(He=L.current)==null?void 0:He.getBoundingClientRect();if(!Ie)return null;const at=C.x-12-Ie.left,yt=Math.floor((at-ye)/Qe);if(yt<0||yt>=le.length)return null;const me=le[yt]??0;return me<=0?null:n.jsx("circle",{cx:et(yt),cy:Ee(me),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ie,at)=>{const yt=at===0,me=at===uo;if(!(yt||me)&&at%Un!==0)return null;const qe=yt?ye:me?B-Se:et(at),St=yt?"start":me?"end":"middle";return n.jsx("text",{x:qe,y:K-ue+18,className:Ve.axisLabel,textAnchor:St,children:Ie},`xl-${at}`)})]})}),C.visible&&C.items.length>0&&n.jsxs("div",{className:Ve.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ve.tooltipLabel,children:C.label}),C.items.map(Ie=>n.jsxs("div",{className:Ve.tooltipRow,children:[n.jsx("span",{className:Ve.tooltipDot,style:{background:Ie.color}}),n.jsx("span",{className:Ve.tooltipSeries,children:Ie.series}),n.jsx("span",{className:Ve.tooltipValue,children:Rr(Ie.value)})]},Ie.series))]})]})}if(a==="horizontal"){const le=((xe=e[0])==null?void 0:xe.data)??[],we=nu(Math.max(...le,1)),ye=28,Se=10,De=120,_e=B-De-44,Ne=o.length*(ye+Se)+Se;return n.jsxs("div",{ref:N,className:se(Ve.root,_),...$,children:[n.jsx("div",{ref:L,className:Ve.svgWrap,children:n.jsx("svg",{width:B,height:Ne,viewBox:`0 0 ${B} ${Ne}`,className:Ve.svg,onMouseLeave:ee,onMouseMove:Le=>{var Ee;const Ue=Le.currentTarget.getBoundingClientRect(),Ge=Le.clientY-Ue.top,ot=Math.floor(Ge/(ye+Se));if(ot<0||ot>=o.length){ee();return}P({visible:!0,x:Le.clientX+12,y:Le.clientY-8,label:o[ot],items:[{color:oe[0],series:((Ee=e[0])==null?void 0:Ee.label)??"",value:le[ot]??0}]})},children:o.map((Le,Ue)=>{const Ge=Se+Ue*(ye+Se),ot=le[Ue]??0,Ee=ot/we*_e;return n.jsxs("g",{children:[n.jsx("text",{x:De-8,y:Ge+ye/2+4,className:Ve.axisLabel,textAnchor:"end",children:Le}),n.jsx("rect",{x:De,y:Ge,width:Ee,height:ye,rx:f,fill:oe[0]}),n.jsxs("text",{x:De+Ee+6,y:Ge+ye/2+4,className:Ve.axisLabel,textAnchor:"start",children:[da(ot),h]})]},Ue)})})}),C.visible&&n.jsxs("div",{className:Ve.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ve.tooltipLabel,children:C.label}),C.items.map(Le=>n.jsxs("div",{className:Ve.tooltipRow,children:[n.jsx("span",{className:Ve.tooltipDot,style:{background:Le.color}}),n.jsx("span",{className:Ve.tooltipSeries,children:Le.series}),n.jsxs("span",{className:Ve.tooltipValue,children:[da(Le.value),h]})]},Le.series))]})]})}return n.jsxs("div",{ref:N,className:se(Ve.root,_),...$,children:[n.jsx("div",{ref:L,className:Ve.svgWrap,children:n.jsxs("svg",{width:B,height:K,viewBox:`0 0 ${B} ${K}`,className:Ve.svg,onMouseMove:de,onMouseLeave:ee,children:[n.jsx("defs",{children:oe.flatMap((le,we)=>[n.jsxs("linearGradient",{id:`${S}-fill-${we}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:le,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:le,stopOpacity:"0"})]},`soft-${we}`),n.jsxs("linearGradient",{id:`${S}-fill-strong-${we}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:le,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:le,stopOpacity:"0"})]},`strong-${we}`)])}),G.map(le=>{const we=A(le);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:we,x2:B-F,y2:we,className:Ve.gridLine}),n.jsxs("text",{x:0,y:we-6,className:Ve.axisLabel,textAnchor:"start",children:[da(le),h]})]},le)}),o.map((le,we)=>{const ye=M+we*z;if(a==="stacked"){let ue=0;const _e=e.map((Ee,Qe)=>{const lt=Ee.data[we]??0,bt=lt/D*ae,et=A(ue+lt);return ue+=lt,{si:Qe,value:lt,barH:bt,y:et}}),Ne=ye+(z-U)/2,Le=_e.filter(Ee=>Ee.value>0),Ue=Le.length>0?Le[0].si:-1,Ge=Le.length>0?Le[Le.length-1]:null,ot=j??(Ge?oe[Ge.si]:"transparent");return n.jsxs("g",{children:[_e.map(({si:Ee,value:Qe,barH:lt,y:bt})=>{if(Qe<=0)return null;if(b==="mono-scale"){const et=Ee===Ue;return n.jsx("rect",{x:Ne,y:bt,width:U,height:lt,fill:et?`url(#${S}-fill-strong-${Ee})`:oe[Ee]},`fill-${Ee}`)}return n.jsx("rect",{x:Ne,y:bt,width:U,height:lt,fill:`url(#${S}-fill-${Ee})`},`fill-${Ee}`)}),b==="mono-scale"?Ge&&n.jsx("line",{x1:Ne,x2:Ne+U,y1:Ge.y,y2:Ge.y,stroke:ot,strokeWidth:2,strokeLinecap:"butt"}):_e.map(({si:Ee,value:Qe,y:lt})=>Qe>0?n.jsx("line",{x1:Ne,x2:Ne+U,y1:lt,y2:lt,stroke:oe[Ee],strokeWidth:2,strokeLinecap:"butt"},`cap-${Ee}`):null)]},we)}const Se=e.length*U+(e.length-1)*ne,De=ye+(z-Se)/2;return n.jsx("g",{children:e.map((ue,_e)=>{const Ne=ue.data[we]??0;if(Ne<=0)return null;const Le=Ne/D*ae,Ue=De+_e*(U+ne),Ge=A(Ne);return n.jsxs("g",{children:[n.jsx("rect",{x:Ue,y:Ge,width:U,height:Le,fill:`url(#${S}-fill-${_e})`}),n.jsx("line",{x1:Ue,x2:Ue+U,y1:Ge,y2:Ge,stroke:oe[_e],strokeWidth:2,strokeLinecap:"butt"})]},_e)})},we)}),(()=>{const we=Math.max(1,Math.ceil(45/z)),ye=o.length-1;return o.map((Se,De)=>{const ue=De===0,_e=De===ye;if(!(ue||_e)&&De%we!==0)return null;const Le=ue?M:_e?B-F:M+z*(De+.5),Ue=ue?"start":_e?"end":"middle";return n.jsx("text",{x:Le,y:K-V+18,className:Ve.axisLabel,textAnchor:Ue,children:Se},`xl-${De}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Ve.legendWrap,children:e.map((le,we)=>n.jsxs("div",{className:Ve.legendItem,children:[n.jsx("span",{className:Ve.legendDot,style:{background:oe[we]}}),n.jsx("span",{className:Ve.legendLabel,children:le.label})]},le.label))}),C.visible&&n.jsxs("div",{className:Ve.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ve.tooltipLabel,children:C.label}),C.items.map(le=>n.jsxs("div",{className:Ve.tooltipRow,children:[n.jsx("span",{className:Ve.tooltipDot,style:{background:le.color}}),n.jsx("span",{className:Ve.tooltipSeries,children:le.series}),n.jsxs("span",{className:Ve.tooltipValue,children:[da(le.value),h]})]},le.series))]})]})});rj.displayName="BarChart";const oj="_root_1crij_5",aj="_svgWrap_1crij_13",ij="_svg_1crij_13",sj="_gridLine_1crij_23",lj="_axisLabelY_1crij_35 _axisLabel_1crij_28",cj="_axisLabelX_1crij_39 _axisLabel_1crij_28",dj="_legendWrap_1crij_51",uj="_tooltip_1crij_76",hj="_tooltipLabel_1crij_95",pj="_tooltipRow_1crij_105",fj="_tooltipDot_1crij_111",mj="_tooltipSeries_1crij_118",gj="_tooltipValue_1crij_125",jn={root:oj,svgWrap:aj,svg:ij,gridLine:sj,axisLabelY:lj,axisLabelX:cj,legendWrap:dj,tooltip:uj,tooltipLabel:hj,tooltipRow:pj,tooltipDot:fj,tooltipSeries:mj,tooltipValue:gj};function vj(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),a=e/o;return a<=1?o:a<=2?2*o:a<=5?5*o:10*o}function Df(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function xj(e,o=.35){if(e.length<2)return"";let a=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],v=(h-l)*o;a+=` C ${l+v} ${d}, ${h-v} ${f}, ${h} ${f}`}return a}const yj=g.forwardRef(({series:e,labels:o,height:a=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:v=5,className:y,...x},w)=>{const[b,j]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,$=g.useRef(null),[N,R]=g.useState(540);g.useEffect(()=>{const D=$.current;if(!D)return;const G=new ResizeObserver(z=>{var U;const ne=(U=z[0])==null?void 0:U.contentRect.width;ne>0&&R(Math.floor(ne))});G.observe(D);const A=Math.floor(D.getBoundingClientRect().width);return A>0&&R(A),()=>G.disconnect()},[]);const S=44,C=20,P=20,L=N,T=a,E=L-S,M=T-C-P,F=`url(#${_}-stroke)`,V=D=>D.color??F,W=e.flatMap(D=>D.data),B=vj(Math.max(...W,1)),K=Array.from({length:v+1},(D,G)=>B*(G/v)).reverse(),X=D=>P+M-D/B*M,ae=D=>o.length>1?S+D/(o.length-1)*E:S+E/2,ce=D=>D.map((G,A)=>[ae(A),X(G)]),oe=()=>j(D=>({...D,visible:!1})),Q=g.useCallback(D=>{const G=D.currentTarget.getBoundingClientRect(),z=D.clientX-G.left-S,ne=E/Math.max(o.length-1,1),U=Math.round(z/ne),ee=Math.max(0,Math.min(U,o.length-1)),de=e.map(O=>({color:O.color??h,series:O.label,value:O.data[ee]??0}));j({visible:!0,index:ee,x:D.clientX+12,y:D.clientY-8,label:o[ee],items:de})},[e,o,h,E,S]);return n.jsxs("div",{ref:w,className:se(jn.root,y),...x,children:[n.jsx("div",{ref:$,className:jn.svgWrap,children:n.jsxs("svg",{width:L,height:T,viewBox:`0 0 ${L} ${T}`,className:jn.svg,onMouseMove:Q,onMouseLeave:oe,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${_}-clip`,children:n.jsx("rect",{x:S,y:P,width:E,height:M,rx:6,ry:6})})]}),K.map(D=>{const G=X(D);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:G,x2:L,y2:G,className:jn.gridLine}),n.jsxs("text",{x:0,y:G-6,className:jn.axisLabelY,textAnchor:"start",children:[Df(D),f]})]},D)}),n.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((D,G)=>{const A=ce(D.data),z=xj(A);return n.jsx("path",{d:z,fill:"none",stroke:V(D),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},G)})}),(()=>{const D=b.index>=0?b.index:0,G=ae(D),A=b.visible&&b.index>=0,z="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:A?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${G}px)`,transition:z},children:[n.jsx("line",{x1:0,x2:0,y1:P,y2:P+M,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((ne,U)=>{const ee=ne.data[D]??0,de=X(ee),O=ne.color??h;return n.jsx("g",{style:{transform:`translateY(${de}px)`,transition:z},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:O,filter:`url(#${_}-pin-shadow)`})},U)})]})})})(),(()=>{const G=o.length>1?E/(o.length-1):E,A=Math.max(1,Math.ceil(45/Math.max(G,1))),z=o.length-1;return o.map((ne,U)=>{const ee=U===0,de=U===z;if(!(ee||de)&&U%A!==0)return null;const Y=ee?S:de?L:ae(U),ie=ee?"start":de?"end":"middle";return n.jsx("text",{x:Y,y:T-C+14,className:jn.axisLabelX,textAnchor:ie,children:ne},ne)})})()]})}),l&&e.length>0&&n.jsx("div",{className:jn.legendWrap,children:n.jsx(c2,{variant:"line",items:e.map(D=>({color:D.color??h,label:D.label}))})}),b.visible&&n.jsxs("div",{className:jn.tooltip,style:{left:b.x,top:b.y},children:[n.jsx("div",{className:jn.tooltipLabel,children:b.label}),b.items.map(D=>n.jsxs("div",{className:jn.tooltipRow,children:[n.jsx("span",{className:jn.tooltipDot,style:{background:D.color}}),n.jsx("span",{className:jn.tooltipSeries,children:D.series}),n.jsxs("span",{className:jn.tooltipValue,children:[Df(D.value),f]})]},D.series))]})]})});yj.displayName="LineChart";const wj="_root_3tq2n_5",bj="_chartWrap_3tq2n_14",kj="_svg_3tq2n_18",_j="_centerText_3tq2n_23",Cj="_statLegend_3tq2n_31",jj="_statItem_3tq2n_37",Sj="_statBar_3tq2n_44",Mj="_statText_3tq2n_50",$j="_statValue_3tq2n_56",Rj="_statLabel_3tq2n_65",Nj="_listLegend_3tq2n_72",Lj="_legendItem_3tq2n_79",Aj="_legendDot_3tq2n_85",Tj="_legendLabel_3tq2n_92",Ej="_legendValue_3tq2n_99",Ij="_tooltip_3tq2n_107",Pj="_tooltipLabel_3tq2n_118",zj="_tooltipValue_3tq2n_124",Wt={root:wj,chartWrap:bj,svg:kj,centerText:_j,statLegend:Cj,statItem:jj,statBar:Sj,statText:Mj,statValue:$j,statLabel:Rj,listLegend:Nj,legendItem:Lj,legendDot:Aj,legendLabel:Tj,legendValue:Ej,tooltip:Ij,tooltipLabel:Pj,tooltipValue:zj},Bf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Oj=g.forwardRef(({segments:e,innerRadius:o=60,size:a=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),b=e.map((L,T)=>L.color??Bf[T%Bf.length]),j=e.reduce((L,T)=>L+T.value,0),_=a/2,$=a/2,N=a*.15,R=(a-N)/2-2,S=2*Math.PI*R;let C=-S/4;const P=e.map((L,T)=>{const M=(j>0?L.value/j:0)*S,F=`${M} ${S-M}`,V=-C;return C+=M,{dashArray:F,dashOffset:V,color:b[T],...L}});return n.jsxs("div",{ref:y,className:se(Wt.root,f),...v,children:[n.jsx("div",{className:Wt.chartWrap,children:n.jsxs("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,className:Wt.svg,children:[n.jsx("circle",{cx:_,cy:$,r:R,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),P.map((L,T)=>n.jsx("circle",{cx:_,cy:$,r:R,fill:"none",stroke:L.color,strokeWidth:N,strokeDasharray:L.dashArray,strokeDashoffset:L.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const M=j>0?Math.round(L.value/j*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:L.label,value:`${M}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},T)),h&&o>0&&n.jsx("text",{x:_,y:$+6,textAnchor:"middle",className:Wt.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Wt.statLegend,children:e.map((L,T)=>{const E=j>0?Math.round(L.value/j*100):0;return n.jsxs("div",{className:Wt.statItem,children:[n.jsx("span",{className:Wt.statBar,style:{background:b[T]}}),n.jsxs("div",{className:Wt.statText,children:[n.jsxs("span",{className:Wt.statValue,children:[E,d]}),n.jsx("span",{className:Wt.statLabel,children:L.label})]})]},L.label)})}),s&&l==="list"&&n.jsx("div",{className:Wt.listLegend,children:e.map((L,T)=>{const E=j>0?Math.round(L.value/j*100):0;return n.jsxs("div",{className:Wt.legendItem,children:[n.jsx("span",{className:Wt.legendDot,style:{background:b[T]}}),n.jsx("span",{className:Wt.legendLabel,children:L.label}),n.jsxs("span",{className:Wt.legendValue,children:[E,d]})]},L.label)})}),x.visible&&n.jsxs("div",{className:Wt.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("div",{className:Wt.tooltipLabel,children:x.label}),n.jsx("div",{className:Wt.tooltipValue,children:x.value})]})]})});Oj.displayName="DonutChart";const Fj="_root_bqpf6_5",Dj="_svgWrap_bqpf6_10",Bj="_svg_bqpf6_10",Hj="_axisLabel_bqpf6_19",Wj="_tooltip_bqpf6_25",ua={root:Fj,svgWrap:Dj,svg:Bj,axisLabel:Hj,tooltip:Wj};function Uj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const qj=g.forwardRef(({cells:e,rows:o,cols:a,colorScale:s=Uj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,content:""}),b=g.useRef(null),[j,_]=g.useState(540);g.useEffect(()=>{const T=b.current;if(!T)return;const E=new ResizeObserver(F=>{var W;const V=(W=F[0])==null?void 0:W.contentRect.width;V>0&&_(Math.floor(V))});E.observe(T);const M=Math.floor(T.getBoundingClientRect().width);return M>0&&_(M),()=>E.disconnect()},[]);const $=32,N=16,R=j,S=R-$-d,C=Math.max(4,(S-(a.length-1)*d)/a.length),P=o.length*(N+d)+d+24,L=new Map;return e.forEach(T=>L.set(`${T.row}__${T.col}`,T)),n.jsxs("div",{ref:y,className:se(ua.root,f),...v,children:[n.jsx("div",{ref:b,className:ua.svgWrap,children:n.jsxs("svg",{width:R,height:P,viewBox:`0 0 ${R} ${P}`,className:ua.svg,onMouseLeave:()=>w(T=>({...T,visible:!1})),children:[a.map((T,E)=>{const M=$+d+E*(C+d)+C/2;return n.jsx("text",{x:M,y:12,className:ua.axisLabel,textAnchor:"middle",children:T},T)}),o.map((T,E)=>{const M=24+E*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:$-4,y:M+N/2+4,className:ua.axisLabel,textAnchor:"end",children:T}),a.map((F,V)=>{const W=L.get(`${T}__${F}`),B=(W==null?void 0:W.value)??0,K=s(B),X=$+d+V*(C+d);return n.jsx("rect",{x:X,y:M,width:C,height:N,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const ce=(W==null?void 0:W.label)??`${T} / ${F}: ${Math.round(B*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:ce})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},F)})]},T)})]})}),x.visible&&n.jsx("div",{className:ua.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});qj.displayName="HeatMap";const Vj="_root_18572_6",Gj="_gridWrap_18572_14",Yj="_grid_18572_14",Kj="_cell_18572_27",Qj="_legend_18572_33",Zj="_legendSquare_18572_43",Xj="_tooltip_18572_49",Zr={root:Vj,gridWrap:Gj,grid:Yj,cell:Kj,legend:Qj,legendSquare:Zj,tooltip:Xj},Jj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function eS(e,o){if(e<=0)return 0;const a=e/Math.max(1,o);return a<=.25?1:a<=.5?2:a<=.75?3:4}const tS=g.forwardRef(({days:e,levelColors:o=Jj,cellSize:a=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:v,ariaLabel:y,className:x,...w},b)=>{const[j,_]=g.useState({visible:!1,x:0,y:0,content:""}),$=f??Math.max(1,...e.map(C=>C.count)),N=[];for(let C=0;C<e.length;C+=7)N.push(e.slice(C,C+7));const R=d?{gridTemplateRows:`repeat(7, ${a}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${a}px)`,gridAutoColumns:`${a}px`,gap:`${s}px`},S=d?"100%":a;return n.jsxs("div",{ref:b,className:se(Zr.root,x),...w,children:[n.jsx("div",{className:Zr.gridWrap,children:n.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${$} on the busiest day`,className:Zr.grid,style:R,onMouseLeave:()=>_(C=>({...C,visible:!1})),children:N.map((C,P)=>Array.from({length:7},(L,T)=>{const E=C[T];if(!E)return n.jsx("span",{className:Zr.cell,style:{width:a,height:a,borderRadius:l,background:o[0]}},`${P}-${T}`);const M=eS(E.count,$),F=v?v(E,M):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Zr.cell,style:{width:S,height:a,borderRadius:l,background:o[M]},onMouseMove:V=>_({visible:!0,x:V.clientX,y:V.clientY,content:F}),onMouseLeave:()=>_(V=>({...V,visible:!1}))},`${P}-${T}`)}))})}),h&&n.jsxs("div",{className:Zr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>n.jsx("span",{className:Zr.legendSquare,style:{background:o[C],borderRadius:l}},C)),n.jsx("span",{children:"More"})]}),j.visible&&n.jsx("div",{className:Zr.tooltip,style:{left:j.x,top:j.y},children:j.content})]})});tS.displayName="ActivityHeatMap";const nS="_root_14edh_5",rS="_track_14edh_17",oS="_segment_14edh_28",aS="_legend_14edh_49",iS="_legendRow_14edh_58",sS="_legendDot_14edh_68",lS="_legendLabel_14edh_74",cS="_legendValue_14edh_78",dS="_tooltip_14edh_84",uS="_tooltipLabel_14edh_100",hS="_tooltipValueRow_14edh_105",pS="_tooltipDot_14edh_114",Fn={root:nS,track:rS,segment:oS,legend:aS,legendRow:iS,legendDot:sS,legendLabel:lS,legendValue:cS,tooltip:dS,tooltipLabel:uS,tooltipValueRow:hS,tooltipDot:pS},fS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],ha={r:140,g:79,b:226},ru={r:68,g:108,b:255};function Hf(e){const o=Math.max(0,Math.min(100,e))/100,a=Math.round(ha.r+(ru.r-ha.r)*o),s=Math.round(ha.g+(ru.g-ha.g)*o),l=Math.round(ha.b+(ru.b-ha.b)*o);return`rgb(${a}, ${s}, ${l})`}const mS=g.forwardRef(({segments:e,colors:o=fS,aiGradient:a=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),b=e.reduce((N,R)=>N+Math.max(0,R.value),0);let j=0;const _=e.map((N,R)=>{const S=Math.max(0,N.value),C=b>0?S/b*100:0,P=b>0?j/b*100:0;j+=S;const L=b>0?j/b*100:0,T=N.color??o[R%o.length],E=d?!0:N.emphasized??R===0;return{...N,pct:C,startPct:P,endPct:L,color:T,emphasized:E}}),$=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:y,className:se(Fn.root,f),...v,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Fn.track,style:$,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:_.map(N=>{const R=a?`linear-gradient(to right, ${Hf(N.startPct)}, ${Hf(N.endPct)})`:N.color;return n.jsx("span",{className:Fn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":a||void 0,style:{width:`${N.pct}%`,background:R,"--ratio-hover-bg":N.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:Fn.legend,children:_.map(N=>n.jsxs("li",{className:Fn.legendRow,children:[n.jsx("span",{className:Fn.legendDot,style:{background:N.color}}),n.jsx("span",{className:Fn.legendLabel,children:N.label}),n.jsx("span",{className:Fn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&n.jsxs("div",{className:Fn.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("span",{className:Fn.tooltipLabel,children:x.label}),n.jsxs("span",{className:Fn.tooltipValueRow,children:[n.jsx("span",{className:Fn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});mS.displayName="RatioBar";const gS="_track_1wmly_6",vS="_fill_1wmly_12",Wf={track:gS,fill:vS},xS=g.forwardRef(({value:e,max:o=100,fill:a="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:v,className:y,style:x,...w},b)=>{const j=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${j}px
    )`,$=Math.max(0,Math.min(o,e)),N=o>0?$/o*100:0;return n.jsx("div",{ref:b,role:"progressbar","aria-label":v??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":$,className:se(Wf.track,y),style:{height:f,background:`${_}, ${s}`,...x},...w,children:n.jsx("div",{className:Wf.fill,style:{width:`${N}%`,background:`${_}, ${a}`}})})});xS.displayName="StripedBar";const yS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],wS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Uf(e,o="to right"){const a=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${a})`}Uf(yS),Uf(wS);var xt="-ms-",ki="-moz-",rt="-webkit-",d2="comm",Zl="rule",mh="decl",bS="@import",kS="@namespace",u2="@keyframes",_S="@layer",h2=Math.abs,gh=String.fromCharCode,Iu=Object.assign;function CS(e,o){return Pt(e,0)^45?(((o<<2^Pt(e,0))<<2^Pt(e,1))<<2^Pt(e,2))<<2^Pt(e,3):0}function p2(e){return e.trim()}function Cr(e,o){return(e=o.exec(e))?e[0]:e}function We(e,o,a){return e.replace(o,a)}function gl(e,o,a){return e.indexOf(o,a)}function Pt(e,o){return e.charCodeAt(o)|0}function Ao(e,o,a){return e.slice(o,a)}function Jn(e){return e.length}function f2(e){return e.length}function xi(e,o){return o.push(e),e}function jS(e,o){return e.map(o).join("")}function qf(e,o){return e.filter(function(a){return!Cr(a,o)})}var Xl=1,wa=1,m2=0,Bn=0,Tt=0,$a="";function Jl(e,o,a,s,l,d,h,f){return{value:e,root:o,parent:a,type:s,props:l,children:d,line:Xl,column:wa,length:h,return:"",siblings:f}}function Xr(e,o){return Iu(Jl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function pa(e){for(;e.root;)e=Xr(e.root,{children:[e]});xi(e,e.siblings)}function SS(){return Tt}function MS(){return Tt=Bn>0?Pt($a,--Bn):0,wa--,Tt===10&&(wa=1,Xl--),Tt}function rr(){return Tt=Bn<m2?Pt($a,Bn++):0,wa++,Tt===10&&(wa=1,Xl++),Tt}function no(){return Pt($a,Bn)}function vl(){return Bn}function ec(e,o){return Ao($a,e,o)}function Mi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $S(e){return Xl=wa=1,m2=Jn($a=e),Bn=0,[]}function RS(e){return $a="",e}function ou(e){return p2(ec(Bn-1,Pu(e===91?e+2:e===40?e+1:e)))}function NS(e){for(;(Tt=no())&&Tt<33;)rr();return Mi(e)>2||Mi(Tt)>3?"":" "}function LS(e,o){for(;--o&&rr()&&!(Tt<48||Tt>102||Tt>57&&Tt<65||Tt>70&&Tt<97););return ec(e,vl()+(o<6&&no()==32&&rr()==32))}function Pu(e){for(;rr();)switch(Tt){case e:return Bn;case 34:case 39:e!==34&&e!==39&&Pu(Tt);break;case 40:e===41&&Pu(e);break;case 92:rr();break}return Bn}function AS(e,o){for(;rr()&&e+Tt!==57;)if(e+Tt===84&&no()===47)break;return"/*"+ec(o,Bn-1)+"*"+gh(e===47?e:rr())}function TS(e){for(;!Mi(no());)rr();return ec(e,Bn)}function ES(e){return RS(xl("",null,null,null,[""],e=$S(e),0,[0],e))}function xl(e,o,a,s,l,d,h,f,v){for(var y=0,x=0,w=h,b=0,j=0,_=0,$=1,N=1,R=1,S=0,C="",P=l,L=d,T=s,E=C;N;)switch(_=S,S=rr()){case 40:if(_!=108&&Pt(E,w-1)==58){gl(E+=We(ou(S),"&","&\f"),"&\f",h2(y?f[y-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:E+=ou(S);break;case 9:case 10:case 13:case 32:E+=NS(_);break;case 92:E+=LS(vl()-1,7);continue;case 47:switch(no()){case 42:case 47:xi(IS(AS(rr(),vl()),o,a,v),v),(Mi(_||1)==5||Mi(no()||1)==5)&&Jn(E)&&Ao(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*$:f[y++]=Jn(E)*R;case 125*$:case 59:case 0:switch(S){case 0:case 125:N=0;case 59+x:R==-1&&(E=We(E,/\f/g,"")),j>0&&(Jn(E)-w||$===0&&_===47)&&xi(j>32?Gf(E+";",s,a,w-1,v):Gf(We(E," ","")+";",s,a,w-2,v),v);break;case 59:E+=";";default:if(xi(T=Vf(E,o,a,y,x,l,f,C,P=[],L=[],w,d),d),S===123)if(x===0)xl(E,o,T,T,P,d,w,f,L);else{switch(b){case 99:if(Pt(E,3)===110)break;case 108:if(Pt(E,2)===97)break;default:x=0;case 100:case 109:case 115:}x?xl(e,T,T,s&&xi(Vf(e,T,T,0,0,l,f,C,l,P=[],w,L),L),l,L,w,f,s?P:L):xl(E,T,T,T,[""],L,0,f,L)}}y=x=j=0,$=R=1,C=E="",w=h;break;case 58:w=1+Jn(E),j=_;default:if($<1){if(S==123)--$;else if(S==125&&$++==0&&MS()==125)continue}switch(E+=gh(S),S*$){case 38:R=x>0?1:(E+="\f",-1);break;case 44:f[y++]=(Jn(E)-1)*R,R=1;break;case 64:no()===45&&(E+=ou(rr())),b=no(),x=w=Jn(C=E+=TS(vl())),S++;break;case 45:_===45&&Jn(E)==2&&($=0)}}return d}function Vf(e,o,a,s,l,d,h,f,v,y,x,w){for(var b=l-1,j=l===0?d:[""],_=f2(j),$=0,N=0,R=0;$<s;++$)for(var S=0,C=Ao(e,b+1,b=h2(N=h[$])),P=e;S<_;++S)(P=p2(N>0?j[S]+" "+C:We(C,/&\f/g,j[S])))&&(v[R++]=P);return Jl(e,o,a,l===0?Zl:f,v,y,x,w)}function IS(e,o,a,s){return Jl(e,o,a,d2,gh(SS()),Ao(e,2,-2),0,s)}function Gf(e,o,a,s,l){return Jl(e,o,a,mh,Ao(e,0,s),Ao(e,s+1,-1),s,l)}function g2(e,o,a){switch(CS(e,o)){case 5103:return rt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return rt+e+e;case 4855:return rt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ki+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+e+ki+e+xt+e+e;case 5936:switch(Pt(e,o+11)){case 114:return rt+e+xt+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rt+e+xt+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rt+e+xt+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return rt+e+xt+e+e;case 6165:return rt+e+xt+"flex-"+e+e;case 5187:return rt+e+We(e,/(\w+).+(:[^]+)/,rt+"box-$1$2"+xt+"flex-$1$2")+e;case 5443:return rt+e+xt+"flex-item-"+We(e,/flex-|-self/g,"")+(Cr(e,/flex-|baseline/)?"":xt+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return rt+e+xt+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return rt+e+xt+We(e,"shrink","negative")+e;case 5292:return rt+e+xt+We(e,"basis","preferred-size")+e;case 6060:return rt+"box-"+We(e,"-grow","")+rt+e+xt+We(e,"grow","positive")+e;case 4554:return rt+We(e,/([^-])(transform)/g,"$1"+rt+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+xt+"flex-pack:$3"),/space-between/,"justify")+rt+e+e;case 4200:if(!Cr(e,/flex-|baseline/))return xt+"grid-column-align"+Ao(e,o)+e;break;case 2592:case 3360:return xt+We(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(s,l){return o=l,Cr(s.props,/grid-\w+-end/)})?~gl(e+(a=a[o].value),"span",0)?e:xt+We(e,"-start","")+e+xt+"grid-row-span:"+(~gl(a,"span",0)?Cr(a,/\d+/):+Cr(a,/\d+/)-+Cr(e,/\d+/))+";":xt+We(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(s){return Cr(s.props,/grid-\w+-start/)})?e:xt+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,rt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(e)-1-o>6)switch(Pt(e,o+1)){case 109:if(Pt(e,o+4)!==45)break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+ki+(Pt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~gl(e,"stretch",0)?g2(We(e,"stretch","fill-available"),o,a)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,v,y){return xt+l+":"+d+y+(h?xt+l+"-span:"+(f?v:+v-+d)+y:"")+e});case 4949:if(Pt(e,o+6)===121)return We(e,":",":"+rt)+e;break;case 6444:switch(Pt(e,Pt(e,14)===45?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(Pt(e,14)===45?"inline-":"")+"box$3$1"+rt+"$2$3$1"+xt+"$2box$3")+e;case 100:return We(e,":",":"+xt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function $l(e,o){for(var a="",s=0;s<e.length;s++)a+=o(e[s],s,e,o)||"";return a}function PS(e,o,a,s){switch(e.type){case _S:if(e.children.length)break;case bS:case kS:case mh:return e.return=e.return||e.value;case d2:return"";case u2:return e.return=e.value+"{"+$l(e.children,s)+"}";case Zl:if(!Jn(e.value=e.props.join(",")))return""}return Jn(a=$l(e.children,s))?e.return=e.value+"{"+a+"}":""}function zS(e){var o=f2(e);return function(a,s,l,d){for(var h="",f=0;f<o;f++)h+=e[f](a,s,l,d)||"";return h}}function OS(e){return function(o){o.root||(o=o.return)&&e(o)}}function FS(e,o,a,s){if(e.length>-1&&!e.return)switch(e.type){case mh:e.return=g2(e.value,e.length,a);return;case u2:return $l([Xr(e,{value:We(e.value,"@","@"+rt)})],s);case Zl:if(e.length)return jS(a=e.props,function(l){switch(Cr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pa(Xr(e,{props:[We(l,/:(read-\w+)/,":"+ki+"$1")]})),pa(Xr(e,{props:[l]})),Iu(e,{props:qf(a,s)});break;case"::placeholder":pa(Xr(e,{props:[We(l,/:(plac\w+)/,":"+rt+"input-$1")]})),pa(Xr(e,{props:[We(l,/:(plac\w+)/,":"+ki+"$1")]})),pa(Xr(e,{props:[We(l,/:(plac\w+)/,xt+"input-$1")]})),pa(Xr(e,{props:[l]})),Iu(e,{props:qf(a,s)});break}return""})}}var va={},au,iu;const ba=typeof process<"u"&&va!==void 0&&(va.REACT_APP_SC_ATTR||va.SC_ATTR)||"data-styled",v2="active",x2="data-styled-version",tc="6.4.2",vh=`/*!sc*/
`,_i=typeof window<"u"&&typeof document<"u";function Yf(e){if(typeof process<"u"&&va!==void 0){const o=va[e];if(o!==void 0&&o!=="")return o!=="false"}}const DS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(iu=(au=Yf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&au!==void 0?au:Yf("SC_DISABLE_SPEEDY"))!==null&&iu!==void 0?iu:typeof process<"u"&&va!==void 0&&!1),y2="sc-keyframes-",BS={};function Ii(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let yl=new Map,Rl=new Map,wl=1;const yi=e=>{if(yl.has(e))return yl.get(e);for(;Rl.has(wl);)wl++;const o=wl++;return yl.set(e,o),Rl.set(o,e),o},HS=e=>Rl.get(e),WS=(e,o)=>{wl=o+1,yl.set(e,o),Rl.set(o,e)},xh=Object.freeze([]),ka=Object.freeze({});function w2(e,o,a=ka){return e.theme!==a.theme&&e.theme||o||a.theme}const US=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qS=/(^-|-$)/g;function b2(e){return e.replace(US,"-").replace(qS,"")}const VS=/(a)(d)/gi,Kf=e=>String.fromCharCode(e+(e>25?39:97));function yh(e){let o,a="";for(o=Math.abs(e);o>52;o=o/52|0)a=Kf(o%52)+a;return(Kf(o%52)+a).replace(VS,"$1-$2")}const zu=5381,Lo=(e,o)=>{let a=o.length;for(;a;)e=33*e^o.charCodeAt(--a);return e},k2=e=>Lo(zu,e);function wh(e){return yh(k2(e)>>>0)}function GS(e){return e.displayName||e.name||"Component"}function Ou(e){return typeof e=="string"&&!0}function YS(e){return Ou(e)?`styled.${e}`:`Styled(${GS(e)})`}const _2=Symbol.for("react.memo"),KS=Symbol.for("react.forward_ref"),QS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ZS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XS={[KS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[_2]:C2};function Qf(e){return("type"in(o=e)&&o.type.$$typeof)===_2?C2:"$$typeof"in e?XS[e.$$typeof]:QS;var o}const JS=Object.defineProperty,eM=Object.getOwnPropertyNames,tM=Object.getOwnPropertySymbols,nM=Object.getOwnPropertyDescriptor,rM=Object.getPrototypeOf,oM=Object.prototype;function j2(e,o,a){if(typeof o!="string"){const s=rM(o);s&&s!==oM&&j2(e,s,a);const l=eM(o).concat(tM(o)),d=Qf(e),h=Qf(o);for(let f=0;f<l.length;++f){const v=l[f];if(!(v in ZS||a&&a[v]||h&&v in h||d&&v in d)){const y=nM(o,v);try{JS(e,v,y)}catch{}}}}return e}function Pi(e){return typeof e=="function"}const aM=Symbol.for("react.forward_ref");function bh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===aM&&"styledComponentId"in e}function wi(e,o){return e&&o?e+" "+o:e||o||""}function Nl(e,o){return e.join("")}function $i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fu(e,o,a=!1){if(!a&&!$i(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Fu(e[s],o[s]);else if($i(o))for(const s in o)e[s]=Fu(e[s],o[s]);return e}function kh(e,o){Object.defineProperty(e,"toString",{value:o})}const iM=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)o+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)o-=this.groupSizes[a];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Ii(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let a=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(a,o[l])&&(this.groupSizes[e]++,a++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],a=this.indexOfGroup(e),s=a+o;this.groupSizes[e]=0;for(let l=a;l<s;l++)this.tag.deleteRule(a);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const a=this.groupSizes[e],s=this.indexOfGroup(e),l=s+a;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+vh;return o}},sM=`style[${ba}][${x2}="${tc}"]`,lM=new RegExp(`^${ba}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Zf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Du=e=>{if(!e)return document;if(Zf(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Zf(o))return o}return document},cM=(e,o,a)=>{const s=a.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},dM=(e,o)=>{var a;const s=((a=o.textContent)!==null&&a!==void 0?a:"").split(vh),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const v=f.match(lM);if(v){const y=0|parseInt(v[1],10),x=v[2];y!==0&&(WS(x,y),cM(e,x,v[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(f)}},su=e=>{const o=Du(e.options.target).querySelectorAll(sM);for(let a=0,s=o.length;a<s;a++){const l=o[a];l&&l.getAttribute(ba)!==v2&&(dM(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let pi=!1;function uM(){if(pi!==!1)return pi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return pi=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return pi=o.getAttribute("content")||void 0}return pi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const S2=(e,o)=>{const a=document.head,s=e||a,l=document.createElement("style"),d=(v=>{const y=Array.from(v.querySelectorAll(`style[${ba}]`));return y[y.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(ba,v2),l.setAttribute(x2,tc);const f=o||uM();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},hM=class{constructor(e,o){this.element=S2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var s;if(a.sheet)return a.sheet;const l=(s=a.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===a)return f}throw Ii(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},pM=class{constructor(e,o){this.element=S2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const a=document.createTextNode(o);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Xf=_i;const fM={isServer:!_i,useCSSOMInjection:!DS};class zi{static registerId(o){return yi(o)}constructor(o=ka,a={},s){this.options=Object.assign(Object.assign({},fM),o),this.gs=a,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&_i&&Xf&&(Xf=!1,su(this)),kh(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let v=0;v<h;v++){const y=HS(v);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const w=d.getGroup(v);if(w.length===0)continue;const b=ba+".g"+v+'[id="'+y+'"]';let j="";for(const _ of x)_.length>0&&(j+=_+",");f+=w+b+'{content:"'+j+'"}'+vh}return f})(this))}rehydrate(){!this.server&&_i&&su(this)}reconstructWithOptions(o,a=!0){const s=new zi(Object.assign(Object.assign({},this.options),o),this.gs,a&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&_i&&o.target!==this.options.target&&Du(this.options.target)!==Du(o.target)&&su(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:a,target:s,nonce:l})=>a?new hM(s,l):new pM(s,l))(this.options),new iM(o)));var o}hasNameForId(o,a){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(a))!==null&&l!==void 0&&l}registerName(o,a){yi(o),o.startsWith(y2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(a):this.names.set(o,new Set([a]))}insertRules(o,a,s){this.registerName(o,a),this.getTag().insertRules(yi(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(yi(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const M2=new WeakSet,mM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function gM(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in mM||e.startsWith("--")?String(o).trim():o+"px"}const Ro=47;function Jf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let a=0;a<e.length;a++){const s=e.charCodeAt(a);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[a]}return o.startsWith("ms-")?"-"+o:o}const $2=Symbol.for("sc-keyframes");function vM(e){return typeof e=="object"&&e!==null&&$2 in e}function R2(e){return Pi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const N2=e=>e==null||e===!1||e==="",xM=Symbol.for("react.client.reference");function em(e){return e.$$typeof===xM}function L2(e,o){for(const a in e){const s=e[a];e.hasOwnProperty(a)&&!N2(s)&&(Array.isArray(s)&&M2.has(s)||Pi(s)?o.push(Jf(a)+":",s,";"):$i(s)?(o.push(a+" {"),L2(s,o),o.push("}")):o.push(Jf(a)+": "+gM(a,s)+";"))}}function io(e,o,a,s,l=[]){if(N2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(em(e))return l;if(R2(e)&&o){const h=e(o);return io(h,o,a,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)io(e[h],o,a,s,l);return l}return bh(e)?(l.push(`.${e.styledComponentId}`),l):vM(e)?(a?(e.inject(a,s),l.push(e.getName(s))):l.push(e),l):em(e)?l:$i(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(L2(e,l),l):(l.push(e.toString()),l)}const yM=k2(tc);class wM{constructor(o,a,s){this.rules=o,this.componentId=a,this.baseHash=Lo(yM,a),this.baseStyle=s,zi.registerId(a)}generateAndInjectStyles(o,a,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,a,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(R2(f)){const v=f(o);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=Nl(io(v,o,a,s)))}else d+=Nl(io(f,o,a,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=yh(Lo(Lo(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(h,f)}if(!a.hasNameForId(this.componentId,f)){const v=s(d,"."+f,void 0,this.componentId);a.insertRules(this.componentId,f,v)}l=wi(l,f)}}return l}}const bM=/&/g;function A2(e,o){let a=0;for(;--o>=0&&e.charCodeAt(o)===92;)a++;return!(1&~a)}function lu(e){const o=e.length;let a="",s=0,l=0,d=0,h=!1,f=!1;for(let v=0;v<o;v++){const y=e.charCodeAt(v);if(d!==0||h||y!==Ro||e.charCodeAt(v+1)!==42)if(h)y===42&&e.charCodeAt(v+1)===Ro&&(h=!1,v++);else if(y!==34&&y!==39||A2(e,v)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){f=!0;let x=v+1;for(;x<o;){const w=e.charCodeAt(x);if(w===59||w===10)break;x++}x<o&&e.charCodeAt(x)===59&&x++,l=0,v=x-1,s=x;continue}l===0&&(a+=e.substring(s,v+1),s=v+1)}else y===59&&l===0&&(a+=e.substring(s,v+1),s=v+1)}else d===0?d=y:d===y&&(d=0);else h=!0,v++}return f||l!==0||d!==0?(s<o&&l===0&&d===0&&(a+=e.substring(s)),a):e}function T2(e,o){const a=o+" ",s=","+a;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(a+d.value).replaceAll(",",s);const h=d.props,f=[];for(let v=0;v<h.length;v++)f[v]=a+h[v];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&T2(d.children,o)}return e}function kM({options:e=ka,plugins:o=xh}=ka){let a,s,l;const d=(b,j,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${a}`:b,h=o.slice();h.push(b=>{b.type===Zl&&b.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),b.props[0]=b.props[0].replace(bM,s).replace(l,d))}),e.prefix&&h.push(FS),h.push(PS);let f=[];const v=zS(h.concat(OS(b=>f.push(b)))),y=(b,j="",_="",$="&")=>{a=$,s=j,l=void 0;const N=(function(S){const C=S.indexOf("//")!==-1,P=S.indexOf("}")!==-1;if(!C&&!P)return S;if(!C)return lu(S);const L=S.length;let T="",E=0,M=0,F=0,V=0,W=0,B=!1;for(;M<L;){const K=S.charCodeAt(M);if(K!==34&&K!==39||A2(S,M))if(F===0)if(K===Ro&&M+1<L&&S.charCodeAt(M+1)===42){for(M+=2;M+1<L&&(S.charCodeAt(M)!==42||S.charCodeAt(M+1)!==Ro);)M++;M+=2}else if(K!==40)if(K!==41)if(V>0)M++;else if(K===42&&M+1<L&&S.charCodeAt(M+1)===Ro)T+=S.substring(E,M),M+=2,E=M,B=!0;else if(K===Ro&&M+1<L&&S.charCodeAt(M+1)===Ro){for(T+=S.substring(E,M);M<L&&S.charCodeAt(M)!==10;)M++;E=M,B=!0}else K===123?W++:K===125&&W--,M++;else V>0&&V--,M++;else V++,M++;else M++;else F===0?F=K:F===K&&(F=0),M++}return B?(E<L&&(T+=S.substring(E)),W===0?T:lu(T)):W===0?S:lu(S)})(b);let R=ES(_||j?_+" "+j+" { "+N+" }":N);return e.namespace&&(R=T2(R,e.namespace)),f=[],$l(R,v),f},x=e;let w=zu;for(let b=0;b<o.length;b++)o[b].name||Ii(15),w=Lo(w,o[b].name);return x!=null&&x.namespace&&(w=Lo(w,x.namespace)),x!=null&&x.prefix&&(w=Lo(w,"p")),y.hash=w!==zu?w.toString():"",y}const _M=new zi,Bu=kM(),E2=vn.createContext({shouldForwardProp:void 0,styleSheet:_M,stylis:Bu,stylisPlugins:void 0});E2.Consumer;function I2(){return vn.useContext(E2)}const _h=vn.createContext(void 0);_h.Consumer;const tm=Object.prototype.hasOwnProperty,cu={};function CM(e,o){const a=typeof e!="string"?"sc":b2(e);cu[a]=(cu[a]||0)+1;const s=a+"-"+wh(tc+a+cu[a]);return o?o+"-"+s:s}function jM(e,o,a){const s=bh(e),l=e,d=!Ou(e),{attrs:h=xh,componentId:f=CM(o.displayName,o.parentComponentId),displayName:v=YS(e)}=o,y=o.displayName&&o.componentId?b2(o.displayName)+"-"+o.componentId:o.componentId||f,x=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const $=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;w=(R,S)=>$(R,S)&&N(R,S)}else w=$}const b=new wM(a,y,s?l.componentStyle:void 0);function j($,N){return(function(R,S,C){const{attrs:P,componentStyle:L,defaultProps:T,foldedComponentIds:E,styledComponentId:M,target:F}=R,V=vn.useContext(_h),W=I2(),B=R.shouldForwardProp||W.shouldForwardProp,K=w2(S,V,T)||ka;let X,ae;{const D=vn.useRef(null),G=D.current;if(G!==null&&G[1]===K&&G[2]===W.styleSheet&&G[3]===W.stylis&&G[7]===L&&(function(A,z,ne){const U=A,ee=z;let de=0;for(const O in ee)if(tm.call(ee,O)&&(de++,U[O]!==ee[O]))return!1;return de===ne})(G[0],S,G[4]))X=G[5],ae=G[6];else{X=(function(z,ne,U){const ee=Object.assign(Object.assign({},ne),{className:void 0,theme:U}),de=z.length>1;for(let O=0;O<z.length;O++){const Y=z[O],ie=Pi(Y)?Y(de?Object.assign({},ee):ee):Y;for(const xe in ie)xe==="className"?ee.className=wi(ee.className,ie[xe]):xe==="style"?ee.style=Object.assign(Object.assign({},ee.style),ie[xe]):xe in ne&&ne[xe]===void 0||(ee[xe]=ie[xe])}return"className"in ne&&typeof ne.className=="string"&&(ee.className=wi(ee.className,ne.className)),ee})(P,S,K),ae=(function(z,ne,U,ee){return z.generateAndInjectStyles(ne,U,ee)})(L,X,W.styleSheet,W.stylis);let A=0;for(const z in S)tm.call(S,z)&&A++;D.current=[S,K,W.styleSheet,W.stylis,A,X,ae,L]}}const ce=X.as||F,oe=(function(D,G,A,z){const ne={};for(const U in D)D[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&D.theme===A||(U==="forwardedAs"?ne.as=D.forwardedAs:z&&!z(U,G)||(ne[U]=D[U]));return ne})(X,ce,K,B);let Q=wi(E,M);return ae&&(Q+=" "+ae),X.className&&(Q+=" "+X.className),oe[Ou(ce)&&ce.includes("-")?"class":"className"]=Q,C&&(oe.ref=C),g.createElement(ce,oe)})(_,$,N)}j.displayName=v;let _=vn.forwardRef(j);return _.attrs=x,_.componentStyle=b,_.displayName=v,_.shouldForwardProp=w,_.foldedComponentIds=s?wi(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=y,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=s?(function(N,...R){for(const S of R)Fu(N,S,!0);return N})({},l.defaultProps,$):$}}),kh(_,()=>`.${_.styledComponentId}`),d&&j2(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var SM=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function nm(e,o){const a=[e[0]];for(let s=0,l=o.length;s<l;s+=1)a.push(o[s],e[s+1]);return a}const rm=e=>(M2.add(e),e);function Oe(e,...o){if(Pi(e)||$i(e))return rm(io(nm(xh,[e,...o])));const a=e;return o.length===0&&a.length===1&&typeof a[0]=="string"?io(a):rm(io(nm(a,o)))}function Hu(e,o,a=ka){if(!o)throw Ii(1,o);const s=(l,...d)=>e(o,a,Oe(l,...d));return s.attrs=l=>Hu(e,o,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,l).filter(Boolean)})),s.withConfig=l=>Hu(e,o,Object.assign(Object.assign({},a),l)),s}const P2=e=>Hu(jM,e),p=P2;SM.forEach(e=>{p[e]=P2(e)});class MM{constructor(o,a){this.instanceRules=new Map,this.rules=o,this.componentId=a,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Pi(d)&&!bh(d))return!1}return!0})(o),zi.registerId(this.componentId)}removeStyles(o,a){this.instanceRules.delete(o),this.rebuildGroup(a)}renderStyles(o,a,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,a,s,l);else{const f=this.computeRules(o,a,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,a,s,l),!s.server&&h){const f=h.rules,v=this.instanceRules.get(o).rules;if(f.length===v.length){let y=!0;for(let x=0;x<f.length;x++)if(f[x]!==v[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(o,a,s,l){const d=Nl(io(this.rules,a,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const a=this.componentId;o.clearRules(a);for(const s of this.instanceRules.values())o.insertRules(a,s.name,s.rules)}}function z2(e,...o){const a=Oe(e,...o),s=`sc-global-${wh(JSON.stringify(a))}`,l=new MM(a,s),d=f=>{const v=I2(),y=vn.useContext(_h);let x;{const w=vn.useRef(null);w.current===null&&(w.current=v.styleSheet.allocateGSInstance(s)),x=w.current}v.styleSheet.server&&h(x,f,v.styleSheet,y,v.stylis);{const w=l.isStatic?[x,v.styleSheet,l]:[x,f,v.styleSheet,y,v.stylis,l],b=vn.useRef(l);vn.useLayoutEffect(()=>{v.styleSheet.server||(b.current!==l&&(v.styleSheet.clearRules(s),b.current=l),h(x,f,v.styleSheet,y,v.stylis))},w),vn.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(x,v.styleSheet)},[x,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(x),null};function h(f,v,y,x,w){if(l.isStatic)l.renderStyles(f,BS,y,w);else{const b=Object.assign(Object.assign({},v),{theme:w2(v,x,d.defaultProps)});l.renderStyles(f,b,y,w)}}return vn.memo(d)}var O2;class $M{constructor(o,a){this[O2]=!0,this.inject=(s,l=Bu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=y2+o,this.rules=a,yi(this.id),kh(this,()=>{throw Ii(12,String(this.name))})}getName(o=Bu){return o.hash?this.name+yh(+o.hash>>>0):this.name}}function ke(e,...o){const a=Nl(Oe(e,...o)),s=wh(a);return new $M(s,a)}O2=$2;const F2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],RM=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function NM(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),a=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(a).hostname.replace(/^www\./,"")}catch{return o}}function LM(e){let o=0;for(let a=0;a<e.length;a+=1)o=o*31+e.charCodeAt(a)>>>0;return o%F2.length}function AM(e){const o=NM(e);let a=-1,s=0;return RM.forEach((l,d)=>{const h=l.reduce((f,v)=>o.includes(v)?f+1:f,0);h>s&&(s=h,a=d)}),F2[a>=0?a:LM(o)]}const zt=(e,o,a)=>Math.max(o,Math.min(a,e)),jr=e=>(e=zt(e,0,1),e*e*(3-2*e)),so=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function fn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Wu(e){const o=(e||"#96B9FF").replace("#",""),a=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(a>>16&255)+","+(a>>8&255)+","+(a&255)}function nl(e,o,a){let s=a.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Wu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Wu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function TM(){const[e,o]=g.useState(0);return g.useEffect(()=>{var d;const a=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",a);const l=new MutationObserver(a);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",a),l.disconnect()}},[]),e}function EM(e){const[o,a,s]=e.split(",").map(Number);return(.299*o+.587*a+.114*s)/255}function IM(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const Mo=["234,54,38","246,112,44","252,172,54","255,212,76"],PM="176,58,32",zM="198,158,52";function er(e,o,a){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*a)).join(",")}function _r(e,o,a){if(!(e!=null&&e.length))return a;if(e.length===1)return e[0];const s=zt(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return er(e[l],e[d],s-l)}function co(e,o,a){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),x=e.size<24,w=zt(e.alert??0,0,1),b=(S,C)=>S+(C-S)*w,j=.85+.15*Math.sin(o*2.2);if(!x&&e.coreHalo){if(s.save(),a.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,y*3);S.addColorStop(0,"rgba("+_r(e.corePalette,.42,a.core)+",0.55)"),S.addColorStop(1,"rgba("+_r(e.corePalette,.86,a.accent)+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,y*3,0,6.2832),s.fill()}else if(!a.glow){const S=y*b(3.2,3),C=s.createRadialGradient(h,f,0,h,f,S);C.addColorStop(0,"rgba("+er(_r(e.corePalette,.35,a.core),Mo[1],w)+","+b(.34,.85*j)+")"),C.addColorStop(.5,"rgba("+er(_r(e.corePalette,.68,a.core),Mo[2],w)+","+b(.13,.42*j)+")"),C.addColorStop(1,"rgba("+er(_r(e.corePalette,1,a.core),Mo[3],w)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const _=a.glow?1:.95,$=Math.max(.8,y*b(1,1.5)),N=y*.1*w;s.save(),s.filter="blur("+Math.max(.4,y*b(.22,.3)).toFixed(2)+"px)";const R=s.createRadialGradient(h-N,f-N,0,h,f,$);R.addColorStop(0,"rgba("+er(_r(e.corePalette,.08,a.core),Mo[0],w)+","+b(_,1)+")"),R.addColorStop(.5,"rgba("+er(_r(e.corePalette,.42,a.core),Mo[1],w)+","+b(_,1)+")"),R.addColorStop(.82,"rgba("+er(_r(e.corePalette,.72,a.core),Mo[2],w)+","+b(_,.97)+")"),R.addColorStop(1,"rgba("+er(_r(e.corePalette,1,a.core),Mo[3],w)+","+b(_,.72)+")"),s.fillStyle=R,s.beginPath(),s.arc(h,f,$,0,6.2832),s.fill(),s.restore()}function D2(e,o,a){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],w=o*(y?.5:.16),b=.42,j=Math.cos(b),_=Math.sin(b),$=Math.cos(w),N=Math.sin(w),R=v*.96,S=(F,V,W)=>{const B=F*$+W*N,K=-F*N+W*$,X=V,ae=X*j-K*_,oe=(X*_+K*j+1)/2,Q=.82+.18*oe;return{x:h+B*R*Q,y:f+ae*R*Q,d:oe}},C=(F,V,W)=>{const B=Math.cos(F),K=Math.sin(F)*Math.cos(V),X=Math.sin(F)*Math.sin(V);return[B*Math.cos(W)+X*Math.sin(W),K,-B*Math.sin(W)+X*Math.cos(W)]};s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const P=e.size>=24?64:40,L=y?.9:.3,T=P,E=5.6,M=[];for(let F=0;F<x.length;F++){const V=x[F][0],W=x[F][1],B=ae=>{const ce=C(ae,V,W);return S(ce[0],ce[1],ce[2])},K=F%2?1:-1,X=F*2+K*o*L;M.push({ptOf:B,head:X,dir:K,hp:B(X)})}M.sort((F,V)=>F.hp.d-V.hp.d);for(const F of M){const V=Math.max(1.2,v*.05)*(.75+.35*F.hp.d),W=.66*(.45+.55*F.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=V;let B=F.ptOf(F.head);for(let ae=1;ae<=T;ae++){const ce=ae/T,oe=1-ce,Q=W*oe*oe,D=F.ptOf(F.head-F.dir*ce*E);Q>.004&&(s.strokeStyle="rgba("+a.dot+","+Q+")",s.beginPath(),s.moveTo(B.x,B.y),s.lineTo(D.x,D.y),s.stroke()),B=D}s.restore();const K=Math.max(.9,v*.062*so(e.size)*(.65+.5*F.hp.d)),X=.45+.55*F.hp.d;if(a.glow){const ae=s.createRadialGradient(F.hp.x,F.hp.y,0,F.hp.x,F.hp.y,K*4.5);ae.addColorStop(0,"rgba("+a.accent+","+.3*X+")"),ae.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(F.hp.x,F.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+a.dot+","+Math.min(1,X+.1)+")",s.beginPath(),s.arc(F.hp.x,F.hp.y,K,0,6.2832),s.fill()}co(e,o,a),s.restore()}function OM(e,o,a){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[v*.92],w=x.length,b=1,j=y?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over";for(let $=0;$<w;$++){const N=x[$],R=$%2?1:-1,S=6.2832/b,C=Math.min(5.6,S*.92);for(let P=0;P<b;P++){const L=$*2+R*o*j+P*S,T=h+Math.cos(L)*N,E=f+Math.sin(L)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let M=T,F=E;for(let W=1;W<=_;W++){const B=W/_,K=.62*(1-B)*(1-B),X=L-R*B*C,ae=h+Math.cos(X)*N,ce=f+Math.sin(X)*N;K>.004&&(s.strokeStyle="rgba("+a.dot+","+K+")",s.beginPath(),s.moveTo(M,F),s.lineTo(ae,ce),s.stroke()),M=ae,F=ce}s.restore();const V=Math.max(.9,v*.062*so(e.size));if(a.glow){const W=s.createRadialGradient(T,E,0,T,E,V*4.5);W.addColorStop(0,"rgba("+a.accent+",0.3)"),W.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(T,E,V*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+a.dot+",1)",s.beginPath(),s.arc(T,E,V,0,6.2832),s.fill()}}co(e,o,a),s.restore()}function om(e,o,a){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=zt(e.alert??0,0,1),b=y*.82,j=(D,G)=>er(a.dot,er(PM,zM,zt(Math.hypot(D-f,G-v)/b,0,1)),w),_=e.size>=120,$=_?22:e.size>=32?10:e.size>=20?7:5,N=x?o*.55:o*.22,R=Math.cos(N),S=Math.sin(N),C=.42,P=Math.cos(C),L=Math.sin(C);if(s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over",_&&a.glow){const D=s.createRadialGradient(f,v,0,f,v,y*1.02);D.addColorStop(0,"rgba("+a.accent+",0.10)"),D.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=D,s.beginPath(),s.arc(f,v,y*1.02,0,6.2832),s.fill()}const T=[];for(let D=0;D<$;D++){const G=1-(D+.5)/$*2,A=Math.sqrt(Math.max(0,1-G*G)),z=D*2.39996,ne=Math.cos(z)*A,U=G,ee=Math.sin(z)*A,de=ne*R+ee*S,O=-ne*S+ee*R,Y=U*P-O*L,ie=U*L+O*P,xe=(ie+1)/2,le=.82+.18*xe;T.push({x:f+de*b*le,y:v+Y*b*le,d:xe,k:D,vec:[de,Y,ie]})}T.sort((D,G)=>D.d-G.d);const E=D=>{const G=(D[2]+1)/2,A=.82+.18*G;return{x:f+D[0]*b*A,y:v+D[1]*b*A,d:G}},M=(D,G,A)=>{let z=D[0]*G[0]+D[1]*G[1]+D[2]*G[2];z=zt(z,-1,1);const ne=Math.acos(z);if(ne<.001)return[D[0],D[1],D[2]];const U=Math.sin(ne),ee=Math.sin((1-A)*ne)/U,de=Math.sin(A*ne)/U;return[D[0]*ee+G[0]*de,D[1]*ee+G[1]*de,D[2]*ee+G[2]*de]},F={};for(const D of T)F[D.k]=D;const W=o*(x?1.4:.5),B=Math.floor(W),K=W-B,X=5,ae=12;s.lineCap="round",s.lineJoin="round";const ce=[1.7,9.3,21.5,34.8,48.2],oe=zt(Math.round(e.streamCount??(_?5:4)),0,ce.length),Q=ce.slice(0,oe).map(D=>({seed:D}));for(const D of Q){const G=z=>{const ne=Math.sin(z*12.9898+D.seed)*43758.5453;return Math.floor((ne-Math.floor(ne))*$)},A=z=>{let ne=G(z);return ne===G(z-1)&&(ne=(ne+1)%$),F[ne]};for(let z=X-1;z>=0;z--){const ne=B-z;if(ne<0)continue;const U=A(ne),ee=A(ne+1);if(!U||!ee||U===ee)continue;const de=z===0?K:1,O=E(M(U.vec,ee.vec,de)),Y=(U.d+O.d)/2,ie=z===0?1:zt(1-(z-1+K)/(X-1),0,1),xe=(a.glow?.6:.72)*ie*(.4+.6*Y);if(xe<.02)continue;const le=s.createLinearGradient(U.x,U.y,O.x,O.y);le.addColorStop(0,"rgba("+j(U.x,U.y)+",0)"),le.addColorStop(1,"rgba("+j(O.x,O.y)+","+xe+")"),s.strokeStyle=le,s.lineWidth=(_?Math.max(1.1*h,y*.018):Math.max(1.2,y*.045))*(.7+.4*Y),s.beginPath();for(let we=0;we<=ae;we++){const ye=E(M(U.vec,ee.vec,de*(we/ae)));we===0?s.moveTo(ye.x,ye.y):s.lineTo(ye.x,ye.y)}s.stroke()}}for(const D of T){const G=.5+.5*Math.sin(o*2-D.k*.9),A=(.18+.82*D.d)*(.62+.38*G),z=_?Math.max(.5,(.9+.9*D.d)*h*(.85+.15*G)):y*.058*so(e.size)*(.6+.5*D.d);if(a.glow){const ne=z*4,U=s.createRadialGradient(D.x,D.y,0,D.x,D.y,ne);U.addColorStop(0,"rgba("+a.accent+","+.24*A+")"),U.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(D.x,D.y,ne,0,6.2832),s.fill()}s.fillStyle="rgba("+j(D.x,D.y)+","+(.32+.68*A)+")",s.beginPath(),s.arc(D.x,D.y,Math.max(.9,z),0,6.2832),s.fill()}_&&Ch(e,o,a,j),co(e,o,a),s.restore()}function Ch(e,o,a,s){const{ctx:l,w:d,h,dpr:f}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,b=e.state!=="idle"?1:.4;for(let j=0;j<46;j++){const _=fn(j*5.1)<.5?-1:1,$=fn(j*1.7)*6.2832+o*(.3+fn(j*3.1)*.6)*_*b,N=x*(.04+.05*fn(j*4.7))*Math.sin(o*(.8+fn(j*6)*1)+fn(j*7)*6.28),R=x*(.5+fn(j*2.3)*.5)+N,S=v+Math.cos($)*R,C=y+Math.sin($)*R,P=.3+.7*(.5+.5*Math.sin(o*(1.4+fn(j)*2)+fn(j*2)*6.28)),L=Math.max(.5,(.4+fn(j*8)*1)*f*(.55+.6*P));if(a.glow){const T=L*6,E=l.createRadialGradient(S,C,0,S,C,T);E.addColorStop(0,"rgba("+a.accent+","+P*.18+")"),E.addColorStop(1,"rgba("+a.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(S,C,T,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,C)+","+P*(a.glow?.8:.42)+")",l.beginPath(),l.arc(S,C,L,0,6.2832),l.fill()}}function FM(e,o,a){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=e.size>=32?11:7,b=y*.12,j=y*.12,_=jr(.5+.5*Math.sin(o*(x?1:.55))),$=x?.34+.66*_:.5+.12*_,N=Math.max(1*h,y*.052),R=-o*(x?.5:.16),S=Math.cos(R),C=Math.sin(R),P=.42,L=Math.cos(P),T=Math.sin(P);s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over",s.lineCap="round";const E=y*(.52+.44*$),M=Math.max(b+N,E-j),F=[];for(let V=0;V<w;V++){const W=1-(V+.5)/w*2,B=Math.sqrt(Math.max(0,1-W*W)),K=V*2.39996,X=Math.cos(K)*B,ae=W,ce=Math.sin(K)*B,oe=X*S+ce*C,Q=-X*C+ce*S,D=ae*L-Q*T,A=(ae*T+Q*L+1)/2,z=.82+.18*A,ne=.5+.5*Math.sin(o*1.6+V*1.3);F.push({x0:f+oe*b*z,y0:v+D*b*z,x1:f+oe*M*z,y1:v+D*M*z,cx2:f+oe*E*z,cy2:v+D*E*z,d:A,shim:ne})}F.sort((V,W)=>V.d-W.d);for(const V of F){const W=(x?.4+.45*$:.6)*(.4+.6*V.d)*(.78+.22*V.shim),B=s.createLinearGradient(V.x0,V.y0,V.x1,V.y1);B.addColorStop(0,"rgba("+a.dot+","+W+")"),B.addColorStop(1,"rgba("+a.accent+",0)"),s.strokeStyle=B,s.lineWidth=N*(.7+.5*V.d),s.beginPath(),s.moveTo(V.x0,V.y0),s.lineTo(V.x1,V.y1),s.stroke();const K=Math.max(.9,y*.058*so(e.size)*(.85+.3*$)*(.6+.5*V.d));if(a.glow){const X=s.createRadialGradient(V.cx2,V.cy2,0,V.cx2,V.cy2,K*5);X.addColorStop(0,"rgba("+a.accent+","+.26*W+")"),X.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=X,s.beginPath(),s.arc(V.cx2,V.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+a.dot+","+Math.min(1,W+.1)+")",s.beginPath(),s.arc(V.cx2,V.cy2,K,0,6.2832),s.fill()}e.size>=120&&Ch(e,o,a,()=>a.dot),co(e,o,a),s.restore()}function DM(e,o,a){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,w=v*.78,b=y?o*.5:o*.2,j=Math.cos(b),_=Math.sin(b),$=.42,N=Math.cos($),R=Math.sin($),S=y?1:.4,C=(B,K)=>[Math.sin(B)*Math.cos(K),Math.cos(B),Math.sin(B)*Math.sin(K)],P=[C(1.4+.5*Math.sin(o*.5*S),o*.6*S),C(1.9+.4*Math.cos(o*.4*S),-o*.5*S+2)],L=.36,T=e.cellCount==null?x:zt(Math.round(e.cellCount),0,x);let E=null,M=null;(T<x||e.cellBirths)&&(M=Array.from({length:x},(B,K)=>K).sort((B,K)=>fn(B)-fn(K)),E=new Array(x),M.forEach((B,K)=>{E[B]=K}));const F=.7,V=.16;if(M&&e.cellBirths&&e.emergeNow!=null){let B=0;for(let K=0;K<T;K++){const X=M[K];e.cellBirths.has(X)||e.cellBirths.set(X,e.emergeNow+B++*V)}}s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over";const W=[];for(let B=0;B<x;B++){let K=1;if(E){if(E[B]>=T)continue;if(e.cellBirths){const Y=e.cellBirths.get(B);if(Y==null||(K=jr(((e.emergeNow??Y+F)-Y)/F),K<=.001))continue}}const X=1-(B+.5)/x*2,ae=Math.sqrt(Math.max(0,1-X*X)),ce=B*2.39996,oe=Math.cos(ce)*ae*K,Q=X*K,D=Math.sin(ce)*ae*K;let G=0;for(const Y of P){const ie=oe-Y[0],xe=Q-Y[1],le=D-Y[2];G+=Math.exp(-(ie*ie+xe*xe+le*le)/(2*L*L))}G=zt(G,0,1);const A=oe*j+D*_,z=-oe*_+D*j,ne=Q*N-z*R,ee=(Q*R+z*N+1)/2,de=.82+.18*ee;let O=a.dot;if(e.dotPalette&&e.dotPalette.length){const ie=(ce/6.2832+(X+1)*.07+1)%1*e.dotPalette.length,xe=Math.floor(ie)%e.dotPalette.length,le=(xe+1)%e.dotPalette.length;O=er(e.dotPalette[xe],e.dotPalette[le],ie-Math.floor(ie))}W.push({x:h+A*w*de,y:f+ne*w*de,d:ee,inf:G,g:K,color:O})}W.sort((B,K)=>B.d-K.d);for(const B of W){const K=jr(B.inf),X=Math.max(.6,v*(.05+.06*K)*so(e.size)*(.55+.5*B.d))*(.35+.65*B.g),ae=(.16+.84*B.d)*(.45+.55*K)*B.g,ce=1-(1-Math.abs(2*B.d-1))*B.g,oe=Math.atan2(B.y-f,B.x-h);s.fillStyle="rgba("+B.color+","+ae+")",s.beginPath(),s.ellipse(B.x,B.y,Math.max(.35,X*ce),X,oe,0,6.2832),s.fill()}co(e,o,a),s.restore()}function BM(e,o,a,s){const{ctx:l,w:d,h,dpr:f}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,w=e.state!=="idle",b=jr(zt(s/.55,0,1)),j=jr(zt((s-.3)/.4,0,1)),_=jr(zt((s-.5)/.5,0,1)),$=e.size>=32?11:7,N=x*.12,R=x*.12,S=jr(.5+.5*Math.sin(o*(w?1:.55))),C=w?.34+.66*S:.5+.12*S,P=Math.max(1*f,x*.052),L=-o*(w?.5:.16),T=Math.cos(L),E=Math.sin(L),M=.42,F=Math.cos(M),V=Math.sin(M),W=x*(.52+.44*C),B=Math.max(N+P,W-R),K=[];for(let O=0;O<$;O++){const Y=1-(O+.5)/$*2,ie=Math.sqrt(Math.max(0,1-Y*Y)),xe=O*2.39996,le=Math.cos(xe)*ie,we=Y,ye=Math.sin(xe)*ie,Se=le*T+ye*E,De=-le*E+ye*T,ue=we*F-De*V,Ne=(we*V+De*F+1)/2,Le=.82+.18*Ne,Ue=.5+.5*Math.sin(o*1.6+O*1.3);K.push({x0:v+Se*N*Le,y0:y+ue*N*Le,x1:v+Se*B*Le,y1:y+ue*B*Le,cx2:v+Se*W*Le,cy2:y+ue*W*Le,d:Ne,shim:Ue,ux:le,uy:we,uz:ye})}l.save(),l.globalCompositeOperation=a.glow?"lighter":"source-over",l.lineCap="round";const X=[...K].sort((O,Y)=>O.d-Y.d);for(const O of X){const Y=(w?.4+.45*C:.6)*(.4+.6*O.d)*(.78+.22*O.shim);if(_>.001){const ie=O.x0+(O.x1-O.x0)*_,xe=O.y0+(O.y1-O.y0)*_,le=l.createLinearGradient(O.x0,O.y0,O.x1,O.y1);le.addColorStop(0,"rgba("+a.dot+","+Y*_+")"),le.addColorStop(1,"rgba("+a.accent+",0)"),l.strokeStyle=le,l.lineWidth=P*(.7+.5*O.d),l.beginPath(),l.moveTo(O.x0,O.y0),l.lineTo(ie,xe),l.stroke()}if(j>.001){const ie=Math.max(.9,x*.058*so(e.size)*(.85+.3*C)*(.6+.5*O.d));if(a.glow){const xe=l.createRadialGradient(O.cx2,O.cy2,0,O.cx2,O.cy2,ie*5);xe.addColorStop(0,"rgba("+a.accent+","+.26*Y*j+")"),xe.addColorStop(1,"rgba("+a.accent+",0)"),l.fillStyle=xe,l.beginPath(),l.arc(O.cx2,O.cy2,ie*5,0,6.2832),l.fill()}l.fillStyle="rgba("+a.dot+","+Math.min(1,Y+.1)*j+")",l.beginPath(),l.arc(O.cx2,O.cy2,ie*(.6+.4*j),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,ce=x*.78,oe=w?o*.5:o*.2,Q=Math.cos(oe),D=Math.sin(oe),G=w?1:.4,A=(O,Y)=>[Math.sin(O)*Math.cos(Y),Math.cos(O),Math.sin(O)*Math.sin(Y)],z=[A(1.4+.5*Math.sin(o*.5*G),o*.6*G),A(1.9+.4*Math.cos(o*.4*G),-o*.5*G+2)],ne=.36,U=e.cellCount==null?ae:zt(Math.round(e.cellCount),0,ae);let ee=null;if(U<ae){const O=Array.from({length:ae},(Y,ie)=>ie).sort((Y,ie)=>fn(Y)-fn(ie));ee=new Array(ae),O.forEach((Y,ie)=>{ee[Y]=ie})}const de=1-j;if(de>.001||b<1){const O=[];for(let Y=0;Y<ae;Y++){if(ee&&ee[Y]>=U)continue;const ie=1-(Y+.5)/ae*2,xe=Math.sqrt(Math.max(0,1-ie*ie)),le=Y*2.39996,we=Math.cos(le)*xe,ye=ie,Se=Math.sin(le)*xe;let De=0,ue=-2;for(let et=0;et<$;et++){const ut=we*K[et].ux+ye*K[et].uy+Se*K[et].uz;ut>ue&&(ue=ut,De=et)}const _e=K[De];let Ne=0;for(const et of z){const ut=we-et[0],Ot=ye-et[1],Ct=Se-et[2];Ne+=Math.exp(-(ut*ut+Ot*Ot+Ct*Ct)/(2*ne*ne))}Ne=zt(Ne,0,1);const Le=we*Q+Se*D,Ue=-we*D+Se*Q,Ge=ye*F-Ue*V,Ee=(ye*V+Ue*F+1)/2,Qe=.82+.18*Ee,lt=v+Le*ce*Qe,bt=y+Ge*ce*Qe;O.push({x:lt+(_e.cx2-lt)*b,y:bt+(_e.cy2-bt)*b,d:Ee+(_e.d-Ee)*b,inf:Ne,f:(1-(1-Math.abs(2*Ee-1)))*(1-b)+1*b})}O.sort((Y,ie)=>Y.d-ie.d);for(const Y of O){const ie=jr(Y.inf),xe=Math.max(.6,x*(.05+.06*ie)*so(e.size)*(.55+.5*Y.d)),le=(.16+.84*Y.d)*(.45+.55*ie)*de;if(le<=.003)continue;const we=Math.atan2(Y.y-y,Y.x-v);l.fillStyle="rgba("+a.dot+","+le+")",l.beginPath(),l.ellipse(Y.x,Y.y,Math.max(.35,xe*Y.f),xe,we,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,Ch(e,o,a,()=>a.dot),l.globalAlpha=1),co(e,o,a),l.restore()}function HM(e,o,a){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,w=v*.9,b=y?1:.4,j=o*(y?.3:.12),_=o*1*b,$=-o*.7*b+2.2,N=.72,R=(S,C)=>{const P=((S-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(P)};s.save(),s.globalCompositeOperation=a.glow?"lighter":"source-over";for(let S=0;S<x;S++){const C=S/x*6.2832+j;let P=Math.exp(-(R(C,_)**2)/(2*N*N))+Math.exp(-(R(C,$)**2)/(2*N*N));P=zt(P,0,1);const L=jr(P),T=h+Math.cos(C)*w,E=f+Math.sin(C)*w,M=Math.max(.6,v*(.05+.07*L)*so(e.size)),F=.38+.62*L;if(a.glow&&L>.25){const V=s.createRadialGradient(T,E,0,T,E,M*4);V.addColorStop(0,"rgba("+a.accent+","+.24*L+")"),V.addColorStop(1,"rgba("+a.accent+",0)"),s.fillStyle=V,s.beginPath(),s.arc(T,E,M*4,0,6.2832),s.fill()}s.fillStyle="rgba("+a.dot+","+F+")",s.beginPath(),s.arc(T,E,M,0,6.2832),s.fill()}co(e,o,a),s.restore()}function WM(e,o,a){co(e,o,a)}const UM={orbit:D2,orbit2d:OM,circle:om,lines:FM,magnetic:DM,magnetic2d:HM,pulse:WM,bands:om};function dt({mark:e="orbit",size:o=16,tone:a="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:f,corePalette:v,coreHalo:y=!0,coreGradient:x=!1,streamCount:w,cellCount:b,className:j,"aria-label":_}){const $=g.useRef(null),N=TM(),R=g.useRef(0),S=g.useRef(0);S.current=x?1:0;const C=g.useRef(new Map),P=g.useRef(null),L=g.useRef(0);return g.useEffect(()=>{const T=$.current;if(!T)return;const E=T.getContext("2d");if(!E)return;const M=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),F=Math.min(2,window.devicePixelRatio||1),V=Math.max(2,Math.round(o*F)),W=V;T.width=V,T.height=W;const B={ctx:E,w:V,h:W,dpr:F,size:o,state:s,coreHalo:y,alert:R.current,streamCount:w,cellCount:b,cellBirths:b!=null&&!M&&s!=="static"?C.current:void 0},K=a==="auto"?EM(nl(E,T,"var(--color-bg-primary)"))<.5?"dark":"light":a,X=IM(K,Wu(d));if(B.dotPalette=h||f==null?void 0:f.map(ne=>nl(E,T,ne)),B.corePalette=h||v==null?void 0:v.map(ne=>nl(E,T,ne)),h){const ne=nl(E,T,h);X.dot=ne,X.core=ne}const ae=UM[e]??D2,ce=1.15,oe=e==="lines"?1:0,Q=e==="lines"||e==="magnetic";(P.current==null||!Q||M||s==="static")&&(P.current=oe);const D=ne=>{if(R.current+=(S.current-R.current)*.06,Math.abs(R.current-S.current)<.001&&(R.current=S.current),B.alert=R.current,B.emergeNow=performance.now()/1e3,Q&&P.current!==oe){const de=B.emergeNow,O=zt(de-(L.current||de),0,.1);L.current=de;const Y=oe>(P.current??0)?1:-1;P.current=zt((P.current??0)+Y*O/ce,0,1)}else L.current=B.emergeNow;E.clearRect(0,0,V,W);const U=s==="static"?.62:ne,ee=P.current??oe;Q&&ee>.001&&ee<.999?BM(B,U,X,ee):ae(B,U,X)},G=zt(l,.4,3);if((M||s==="static")&&(R.current=S.current),D(1.15),M||s==="static")return;let A=0;const z=ne=>{D(ne/1e3*G),A=requestAnimationFrame(z)};return A=requestAnimationFrame(z),()=>cancelAnimationFrame(A)},[e,o,a,s,l,d,h,f,v,y,x,w,b,N]),n.jsx("canvas",{ref:$,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:j,role:"img","aria-label":_})}const _a={high:0,medium:1,low:2,none:3};p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function nc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function qM(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const B2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,H2=e=>/^(review|adjust|revisit|update)\b/i.test(e),VM=["Revisit","Update","Resolve"],GM=e=>/,|\sand\s/.test(e),YM="Approve all",Ll="Yes",W2=e=>{const a=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return a.length<2?[]:a.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};p.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;function KM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function QM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function ZM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function XM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function JM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function e$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function U2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function t$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function n$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function To({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function o$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function a$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function q2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function am({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const im=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Ca={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},V2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function G2(e){const o=V2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function Y2(e){const o=Ca[e.id];if(!o||e.title.startsWith(o))return e.title;const a=e.title.split(" ")[0]??"",l=a===a.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const K2={missed_clockin_james:"james_okoro_2"},jh=e=>`https://i.pravatar.cc/80?u=${K2[e]??e}`,Ra=e=>`https://i.pravatar.cc/80?u=${K2[e]??e}`,i$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},s$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],Q2=e=>i$[e]??s$,Z2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},sm={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Sh={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},l$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Mh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},c$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},d$={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},du={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function X2(e){const o=a=>a.trim().replace(/[.\s]+$/,"").toLowerCase();return c$[e.id]??e.timeline.map(a=>{var d;const s=((d=du[a.state])==null?void 0:d.call(du,e))??e.assessment,l=s!=null&&o(s)===o(a.headline);return{icon:d$[a.state]??"clock",headline:a.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Ut=(e,o,a)=>({name:e,match:o,distance:a}),Xe=(e,o,a,s,l,d)=>({seed:e,name:o,preview:a,status:s,tone:l,...d?{conversation:d}:{}}),lm=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],u$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],h$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],p$=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],J2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",$o=e=>({from:"ultron",text:J2,time:e}),f$={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:lm,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Ut("Jordan Pierce","4.9 match","3.2 mi"),Ut("Aisha Karim","4.7 match","5.1 mi"),Ut("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:J2,total:20,threads:[Xe("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[$o("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Xe("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[$o("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Xe("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[$o("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Xe("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[$o("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Xe("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[$o("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Xe("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[$o("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Xe("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[$o("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:u$,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Ut("Renee Wallace","4.9 match","2.4 mi"),Ut("Carl Jensen","4.6 match","4.1 mi"),Ut("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Xe("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Xe("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Xe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:h$,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Ut("Dane Mercer","4.8 match","2.1 mi"),Ut("Omar Reyes","4.6 match","3.7 mi"),Ut("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Xe("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Xe("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Xe("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:p$,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Ut("Jamal Carter","4.7 match","1.8 mi"),Ut("Sara Lindqvist","4.6 match","2.9 mi"),Ut("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Xe("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Xe("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Xe("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Ut("Theo Park","4.7 match","1.9 mi"),Ut("Gina Holt","4.5 match","3.3 mi"),Ut("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Xe("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Xe("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Xe("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Xe("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Ut("Carl Jensen","4.7 match","2.6 mi"),Ut("Tina Boyd","4.5 match","3.9 mi"),Ut("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Xe("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Xe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Xe("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Xe("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Xe("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Xe("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Xe("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Xe("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Xe("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Xe("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Xe("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Xe("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Xe("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Xe("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:lm,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Xe("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Xe("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},m$={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},g$=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",cm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",dm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,a=>a.toUpperCase())).join(", "),v$={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Uu=e=>{const[o,...a]=e.split(" "),s=v$[o];return s?`Will ${s} ${a.join(" ")}`:e};function x$(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const a=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(a)return{query:`engage.send(channel="${g$(a.name)}", template="shift_offer", to=matched)`,summary:`${Uu(a.description)} — ${a.total} ${a.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Uu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function y$(e,o,a,s){var j,_,$,N;if(e==="read"){const R=((j=o.update)==null?void 0:j.recordType)??((_=o.updateClose)==null?void 0:_.recordType);if(!R)return null;const S=R.toLowerCase(),C=[{label:"Type",value:R},{label:"Time",value:(($=V2[s])==null?void 0:$.shiftTime)??""},{label:"User",value:Ca[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${R}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${R}") → current_state`,recordDetails:C,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const R=(N=o.policy)==null?void 0:N.eligible;if(!R)return null;const S=R.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${R.total} ${R.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=R.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${R.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${R.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${R.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:R,query:S,fields:C}=o.task;return{icon:"task",name:"Tasks",description:R,query:S,task:{fields:C}}}if(e==="update"||e==="update-close"){const R=e==="update"?o.update:o.updateClose;if(!R)return null;const{description:S,...C}=R;return{icon:"record",name:"Update Data",description:S,updateData:C}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,y=e==="policy"?o.policy.description:l?d.description:h.description,x=e==="policy"?"shield":l?"bell":"message";if(a==="planning"){const R=e==="policy"?y:Uu(y),S={icon:x,name:v,description:R,...x$(e,o)};return l?{...S,channel:dm(d.channel),message:d.message}:h?{...S,channel:cm(h.name),message:h.message}:e==="policy"?{...S,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:S}if(e==="policy")return{icon:x,name:v,description:y,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:x,name:v,description:y,channel:cm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...b}=d;return{icon:x,name:v,description:y,channel:dm(d.channel),notification:b}}function ev(e,o,a="execution"){const s=f$[e];return s?o.map(l=>y$(l,s,a,e)).filter(l=>l!==null):[]}const w$=e=>e.tools??m$[e.icon]??["policy"],rl=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function b$(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??(e.risk?"high":"medium"),event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const tv={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},um=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function $h(e,o){return um[o%um.length]}function k$(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function _$(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function nv({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),a=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(C$,{children:[n.jsx(or,{size:"md",src:jh(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(j$,{children:[n.jsx(S$,{children:e.title}),n.jsx(M$,{children:[e.eyebrow,...s].join(" · ")})]}),a!=null&&n.jsxs($$,{"data-tone":_$(a),children:[a,"% match"]}),n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(oh,{size:16})})]})}const C$=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,j$=p.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,S$=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,M$=p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,$$=p.span`
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
`,hm=e=>e.id.startsWith("detected_"),pm=5400,fm=1100;function R$(e,o){switch(o.type){case"detect":return e.some(a=>a.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(a=>a.id===o.threadId?{...a,status:"needs_approval"}:a);case"commit":return e.map(a=>a.id===o.threadId?{...a,status:"in_progress"}:a);case"reopen":return e.map(a=>a.id===o.threadId?{...a,status:"needs_approval"}:a);case"resolve":return e.map(a=>a.id===o.threadId?{...a,status:"resolved",outcome:tv[a.id]??a.outcome}:a)}}const N$=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function L$(){const e=g.useMemo(()=>im.filter(U=>U.id!=="shift_drop_maria"),[]),[o,a]=g.useReducer(R$,e),[s,l]=g.useState(()=>{var ee;const U=e.find(de=>de.status==="needs_approval"||de.status==="recommended");return(U==null?void 0:U.id)??((ee=e[0])==null?void 0:ee.id)??null}),[d,h]=g.useState([]),f=U=>{l(U),h(ee=>ee.includes(U)?ee:[...ee,U])},v=g.useMemo(()=>{const U=o.map((ee,de)=>({item:ee,index:de}));return N$.map(ee=>({id:ee.id,label:ee.label,threads:U.filter(de=>ee.statuses.includes(de.item.status)).sort((de,O)=>(de.item.status==="analyzing"?1:0)-(O.item.status==="analyzing"?1:0)||(hm(O.item)?1:0)-(hm(de.item)?1:0)||_a[de.item.severity]-_a[O.item.severity]||de.index-O.index).map(de=>de.item)}))},[o]),y=o.find(U=>U.id===s)??null,[x,w]=g.useState({}),b=s?x[s]??0:0,[j,_]=g.useState([]),[$,N]=g.useState({}),[R,S]=g.useState({}),[C,P]=g.useState([]),L=g.useRef({}),[T,E]=g.useState([]),M=U=>{E(ee=>ee.includes(U)?ee.filter(de=>de!==U):[...ee,U])},[F,V]=g.useState([]),W=U=>{V(ee=>ee.includes(U)?ee:[...ee,U])},[B,K]=g.useState([]),X=U=>K(ee=>ee.includes(U)?ee:[...ee,U]);return{threads:o,groups:v,selectedId:s,selectedThread:y,selectedStage:b,stageById:x,viewedIds:d,analyzedIds:j,outboundByThread:$,chatByThread:R,replyingIds:C,setSelectedId:f,detectEvent:U=>{const ee=b$(U);a({type:"detect",thread:ee}),X(ee.id)},surfaceDemoThread:U=>{const ee=im.find(de=>de.id===U);ee&&(a({type:"detect",thread:ee}),X(U))},decide:U=>{f(U),_(ee=>ee.includes(U)?ee:[...ee,U]),a({type:"decide",threadId:U})},commit:(U,ee)=>{f(U),N(de=>({...de,[U]:[...de[U]??[],ee]})),a({type:"commit",threadId:U})},completeRun:U=>{const ee=x[U]??0,de=Sh[U];ee===0&&de?(w(O=>({...O,[U]:1})),a({type:"reopen",threadId:U})):(a({type:"resolve",threadId:U}),T.includes(U)&&(W(U),E(O=>O.filter(Y=>Y!==U))))},sendMessage:(U,ee)=>{const de=ee.trim();if(!de)return;f(U),S(Y=>({...Y,[U]:[...Y[U]??[],{role:"operator",text:de}]})),P(Y=>Y.includes(U)?Y:[...Y,U]);const O=window.setTimeout(()=>{S(Y=>{const ie=Y[U]??[],xe=ie.filter(le=>le.role==="ultron").length;return{...Y,[U]:[...ie,{role:"ultron",text:$h(de,xe)}]}}),P(Y=>Y.filter(ie=>ie!==U)),delete L.current[U]},fm);L.current[U]=O},stopReply:U=>{const ee=L.current[U];ee&&(window.clearTimeout(ee),delete L.current[U]),P(de=>de.filter(O=>O!==U))},refine:U=>{},saveWorkflow:U=>{const ee=U.id;f(ee),S(O=>({...O,[ee]:[...O[ee]??[],{role:"operator",text:"Save as workflow"}]})),P(O=>O.includes(ee)?O:[...O,ee]);const de=window.setTimeout(()=>{S(O=>({...O,[ee]:[...O[ee]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),W(ee),P(O=>O.filter(Y=>Y!==ee)),delete L.current[ee]},fm);L.current[ee]=de},pendingWorkflowIds:T,toggleWorkflowSave:M,savedWorkflowIds:F,markWorkflowSaved:W,revealedNewIds:B,revealNew:X}}const A$={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function T$(e,o){const a=A$[e];return!a||o==="plan"?e:o==="done"?a.done:a.working}const E$={search:jl,read:jl,message:ji,policy:No,shield:No,schedule:No,analytics:h6,clock:xn,monitor:Ti,bell:ji,record:oo,task:No},I$={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},P$=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:I$[e.icon]??e.name,z$=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",mm={positive:0,chatting:1,muted:2},O$=p(qg)`
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
`,F$=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Rh=240;function D$({open:e,onClose:o,title:a="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[h,f]=g.useState(e),[v,y]=g.useState(!1);if(g.useEffect(()=>{if(e){f(!0);let _=0;const $=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame($),cancelAnimationFrame(_)}}y(!1);const j=setTimeout(()=>f(!1),Rh);return()=>clearTimeout(j)},[e]),!h)return null;const x=s.length,w=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,b=s.map((j,_)=>({entry:j,index:_}));return lo.createPortal(n.jsxs(Z$,{role:"dialog","aria-modal":"true","aria-label":a,children:[n.jsx(X$,{$shown:v,onClick:o}),n.jsxs(J$,{$shown:v,children:[n.jsxs(eR,{children:[n.jsxs(tR,{children:[n.jsx(nR,{children:a}),n.jsx(rR,{children:w})]}),n.jsx(Be,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(Po,{size:18})})]}),n.jsxs(oR,{children:[n.jsx(aR,{"aria-hidden":"true"}),n.jsx(Ug,{type:"single",collapsible:!0,value:l,onValueChange:j=>d(typeof j=="string"?j:""),children:b.map(({entry:j,index:_})=>{const $=j.updateData?Kl:E$[j.icon];return n.jsx(O$,{value:String(_),label:P$(j),description:j.description,leadingSlot:n.jsx(F$,{"aria-hidden":"true",children:n.jsx($,{size:18})}),children:n.jsx(iR,{children:n.jsx(B$,{entry:j})})},_)})})]})]})]}),document.body)}function B$({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Channel"}),n.jsx(wm,{children:e.channel})]}),e.message&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Message"}),n.jsx(vm,{children:e.message})]}),e.recordDetails&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Record details"}),n.jsx(uu,{children:e.recordDetails.map((o,a)=>n.jsx($n,{size:"sm",label:o.label,trailingSlot:n.jsx(hu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},a))})]}),e.policies&&n.jsxs(Sn,{children:[n.jsx(on,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(yR,{children:e.policies.items.map((o,a)=>n.jsxs(wR,{children:[n.jsx(bR,{"aria-hidden":"true",children:n.jsx(an,{size:16})}),n.jsx("span",{children:o})]},a))})]}),e.eligible&&n.jsxs(Sn,{children:[n.jsx(on,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(H$,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(Sn,{children:[n.jsx(on,{children:`Threads · ${e.threads.total}`}),n.jsx(Y$,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(Sn,{children:[n.jsx(on,{children:"Recipient"}),n.jsx(kR,{children:n.jsx($n,{size:"md",divider:!1,leadingSlot:n.jsx(or,{size:"sm",src:Ra(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(Ql,{size:14})})})})]}),n.jsxs(Sn,{children:[n.jsx(on,{children:"Message"}),n.jsx(vm,{children:e.notification.message})]})]}),e.task&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Task"}),n.jsx(uu,{children:e.task.fields.map((o,a)=>n.jsx($n,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Si,{status:"success",size:"sm",children:o.value}):n.jsx(hu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},a))})]}),e.updateData&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,a)=>n.jsx(uu,{children:o.map((s,l)=>n.jsx($n,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(W$,{children:[n.jsx(U$,{children:s.previousValue}),n.jsx(q$,{"aria-hidden":"true",children:"→"}),n.jsx(V$,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Si,{status:"success",size:"sm",children:s.value}):n.jsx(hu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},a))]}),e.recommendation&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Recommendation"}),n.jsxs(_R,{children:[n.jsxs(xm,{children:[n.jsx(ym,{children:"Incentive?"}),n.jsx(CR,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(xm,{children:[n.jsx(ym,{children:"Reason"}),n.jsx(jR,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(Sn,{children:[n.jsx(on,{children:"Query"}),n.jsx(sR,{children:e.query})]}),e.summary&&n.jsxs(Sn,{children:[n.jsx(on,{children:"What it does"}),n.jsx(wm,{children:e.summary})]})]})}function H$({candidates:e,total:o,moreNoun:a}){var x;const[s,l]=g.useState(!1),d=e.slice(0,3),h=o-d.length,f=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),v=s?Array.from({length:h},(w,b)=>G$(b,f)):[],y=[...d,...v];return n.jsxs(n.Fragment,{children:[n.jsx(Nh,{children:y.map((w,b)=>n.jsx($n,{size:"sm",leadingSlot:n.jsx(or,{size:"sm",src:Ra(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(dR,{children:`${w.match} · ${w.distance}`})},b))}),h>0&&n.jsx(rv,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${a}`:`+${h} more ${a}`})]})}const Nh=p.div`
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
`,uu=p(Nh)`
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
`,hu=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,W$=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,U$=p.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,q$=p.span`
  color: var(--color-content-tertiary);
`,V$=p.span`
  color: var(--color-success-content);
`,Al=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Tl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function G$(e,o){const a=Al[e%Al.length],s=Tl[(e*7+3)%Tl.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${a} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const gm=3;function Y$({threads:e}){const[o,a]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((x,w)=>mm[x.tone]-mm[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(x,w)=>Q$(w))],v=o?f:f.slice(0,gm),y=f.length-gm;return n.jsxs(n.Fragment,{children:[n.jsx(Nh,{children:v.map((x,w)=>{var $;const b=!!(($=x.conversation)!=null&&$.length),j=`${x.name}-${w}`,_=b&&s===j;return n.jsxs(uR,{"data-open":_||void 0,children:[n.jsx($n,{size:"md",interactive:b,onClick:b?()=>l(_?null:j):void 0,"aria-expanded":b?_:void 0,leadingSlot:n.jsx(or,{size:"sm",src:Ra(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:n.jsxs(xR,{children:[n.jsx(Si,{status:z$(x),size:"sm",children:x.status}),b?n.jsx(hR,{"data-open":_||void 0,children:n.jsx(Hn,{size:16})}):n.jsx(Rn,{size:16})]})}),_&&n.jsx(K$,{messages:x.conversation})]},j)})}),y>0&&n.jsx(rv,{type:"button",onClick:()=>a(x=>!x),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function K$({messages:e}){return n.jsx(fR,{children:e.map((o,a)=>n.jsxs(mR,{$from:o.from,children:[n.jsx(gR,{children:o.text}),n.jsx(vR,{children:o.time})]},a))})}function Q$(e){const o=Al[e%Al.length],a=Tl[(e*7+3)%Tl.length],s=`${o} ${a}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const Z$=p.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,X$=p.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Rh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,J$=p.div`
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
  transition: transform ${Rh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,eR=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,tR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,nR=p.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,rR=p.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,oR=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,aR=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,iR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,Sn=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function sR({children:e}){const[o,a]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),a(!0),window.setTimeout(()=>a(!1),1600)};return n.jsxs(lR,{children:[n.jsx(cR,{children:e}),n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(an,{size:14}):n.jsx(Sg,{size:14})})]})}const lR=p.div`
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
`,cR=p.pre`
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
`,dR=p.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,uR=p.div``,hR=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,pR=ke`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,fR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${pR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mR=p.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,gR=p.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,vR=p.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,xR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,rv=p.button`
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
`,yR=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,wR=p.li`
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
`,bR=p.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,vm=p.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,kR=p.div`
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
`,_R=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,xm=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,ym=p.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,CR=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,jR=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,wm=p.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function SR({milestones:e}){return n.jsx(IR,{children:e.map((o,a)=>n.jsx(NR,{milestone:o,last:a===e.length-1},a))})}function El({milestones:e,typingIndex:o,focusIndex:a,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:v,reasoning:y}){return n.jsx(MR,{milestones:e,typingIndex:o,focusIndex:a,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:v,reasoning:y})}function MR({milestones:e,typingIndex:o,focusIndex:a,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:v=!1,reasoning:y=!1}){const[x,w]=g.useState(!1),_=v||y&&!d?e.length:0,$=_>0,N=$&&!x?_:0,R=e.slice(0,_).map(C=>C.headline).join(" · "),S=e.length>0&&N>=e.length;return n.jsx(zR,{$animate:h,children:n.jsxs(FR,{$compact:S,children:[$&&!x&&n.jsx(_m,{$tight:!0,$last:S,$connected:f,children:n.jsxs(iv,{type:"button","aria-expanded":x,onClick:()=>w(C=>!C),children:[n.jsx(Sm,{"aria-hidden":"true",children:n.jsx(Sl,{size:16})}),n.jsx(XR,{children:R})]})}),e.slice(N).map((C,P)=>{var B,K;const L=N+P,T=d&&typeof a=="number"&&L>a,E=d&&typeof a=="number"&&L===a,M=T?"plan":E?"working":"done",F=!d||typeof a!="number"||L<a-1?"done":L===a-1?"working":"upcoming",V=!!((B=C.progress)!=null&&B.length),W=L===e.length-1;return n.jsxs(_m,{$tight:!V,$last:W,$connected:f,children:[f&&!W&&F!=="upcoming"&&n.jsx(BR,{"aria-hidden":"true",$state:F,$tight:!V,$superseded:v}),n.jsx(av,{milestone:C,label:T$(C.headline,M),last:!0,collapsible:!0,placeholder:T,focused:E,startOpen:!d&&x,onCollapse:$&&x&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:v,typing:L===o,extra:!T&&((K=C.usage)!=null&&K.length)?n.jsx(RR,{usage:C.usage,title:C.headline}):void 0,icon:y&&!d&&!T?n.jsx(Sm,{"aria-hidden":"true",children:n.jsx(Sl,{size:16})}):n.jsx(ov,{icon:C.icon,loading:o===L||E||d&&typeof a!="number"&&L===e.length-1,placeholder:T,muted:v})})]},L)}),!l&&!d&&n.jsx(ga,{time:ur(e)})]})})}const bm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function $R(){const[e,o]=g.useState(0);return g.useEffect(()=>{if(e>=bm.length-1)return;const a=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(a)},[e]),n.jsxs(n.Fragment,{children:[bm[e],n.jsxs(OR,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function ur(e){const a=581+e.reduce((f,v)=>f+v.headline.length,0)%200,s=Math.floor(a/60)%24,l=a%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function ga({time:e}){const[o,a]=g.useState(null),s=l=>a(d=>d===l?null:l);return n.jsx(HR,{"data-feedback-actions":!0,children:n.jsxs(sg,{visibility:"always",time:e,children:[n.jsx(Cm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(Cg,{size:14})}),n.jsx(Cm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(jg,{size:14})}),n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Ai,{size:14})})]})})}function RR({usage:e,title:o}){const[a,s]=g.useState(!1);return g.useEffect(()=>{if(!a)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[a]),e.length?n.jsxs(WR,{children:[n.jsxs(Be,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Rn,{size:12}),"aria-haspopup":"dialog","aria-expanded":a,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(D$,{open:a,onClose:()=>s(!1),title:o,usage:e})]}):null}function NR({milestone:e,last:o}){return n.jsxs(YR,{children:[n.jsxs(KR,{children:[n.jsx(ov,{icon:e.icon}),!o&&n.jsx(tN,{})]}),n.jsx(av,{milestone:e,last:o})]})}function LR({records:e,initial:o=3}){const[a,s]=g.useState(!1),l=a?e:e.slice(0,o),d=e.length-o;return n.jsxs(vN,{children:[l.map((h,f)=>n.jsx(nv,{record:h},f)),d>0&&n.jsx(xN,{type:"button",onClick:()=>s(h=>!h),children:a?"Show less":`Show ${d} more`})]})}function ov({slotRef:e,hidden:o,loading:a,placeholder:s,muted:l}){return s?n.jsx(jm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(ZR,{})}):n.jsx(jm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:a,children:n.jsxs(eN,{viewBox:"0 0 24 24",$loading:a,$muted:l&&!a,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function av({milestone:e,label:o,last:a,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:v,progressBeat:y,superseded:x,startOpen:w,onCollapse:b}){var W,B,K;const j=o??e.headline;if(f)return n.jsx($m,{$last:a,$dim:!0,children:n.jsxs(Rm,{as:"div",children:[l,n.jsx(Nm,{children:j})]})});const _=!!((W=e.blocks)!=null&&W.length),$=!!h,N=!d||!!e.defaultOpen||!!w,[R,S]=g.useState(null),C=!!b,P=C?!0:R??N,L=d&&(_||$),T=!C&&L&&(!s||!!v),E=T&&!!v&&!!((B=e.progress)!=null&&B.length),M=()=>S(()=>!P),F=_&&(C||!d||P),V=$&&(C||!d||P);return n.jsxs($m,{$last:a,children:[n.jsxs(Il,{as:C||L?"button":"div",type:C||L?"button":void 0,$interactive:C||T,"aria-expanded":C?!0:T?P:void 0,onClick:C?b:T?M:void 0,children:[n.jsxs(Rm,{children:[l,n.jsx(Nm,{$focused:!!v,children:j}),T&&!v&&n.jsx(nN,{"data-open":P||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),(K=e.progress)!=null&&K.length?n.jsx(aN,{$indent:!!l,children:n.jsxs(rN,{children:[E&&n.jsx(oN,{as:"span","aria-hidden":"true",children:P?n.jsx(hh,{size:16}):n.jsx(ja,{size:16})}),n.jsx(TR,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:y,superseded:x,showAvatars:P||s||v})]})}):null]}),F&&n.jsx(pN,{$indent:!!l,children:e.blocks.map((X,ae)=>n.jsxs(fN,{children:[X.text&&n.jsx(mN,{children:s?n.jsx(Lh,{text:X.text}):X.text}),X.label&&n.jsx(gN,{children:X.label}),X.bullets&&n.jsx(yN,{children:X.bullets.map((ce,oe)=>n.jsx("li",{children:ce},oe))}),X.checks&&n.jsx(wN,{children:X.checks.map((ce,oe)=>n.jsxs("li",{children:[n.jsx(bN,{"aria-hidden":"true"}),n.jsx("span",{children:ce})]},oe))}),X.records&&n.jsx(LR,{records:X.records})]},ae))}),V&&n.jsx(UR,{$indent:!!l,children:h})]})}const AR=1350;function TR({steps:e,avatars:o,avatarsOnSettle:a,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const v=e.length-1,y=typeof h=="number",[x,w]=g.useState(l?0:v),b=g.useRef(l);g.useEffect(()=>{l&&!b.current&&(b.current=!0,w(0))},[l]),g.useEffect(()=>{if(y||!b.current||x>=v)return;const N=setTimeout(()=>w(R=>Math.min(R+1,v)),AR);return()=>clearTimeout(N)},[x,v,y]),g.useEffect(()=>{typeof h=="number"&&w(Math.min(h,v))},[h,v]);const j=typeof h=="number"?Math.min(h,v):x,_=j>=v,$=_&&!l;return n.jsxs(iN,{children:[n.jsx(lN,{$done:$,$live:l,$superseded:f,"aria-live":"polite",children:l?n.jsx(Lh,{text:e[j],caret:!1,speed:26}):e[j]},j),d&&(a?_:_||l)&&(o!=null&&o.length)?n.jsx(ER,{seeds:o,total:s}):null]})}const km=90;function ER({seeds:e,total:o,max:a=5}){const s=e.slice(0,a),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(cN,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>n.jsx(dN,{style:{zIndex:s.length-f,animationDelay:`${f*km}ms`},children:n.jsx(or,{size:"sm",src:Ra(h),name:h,alt:""})},h)),d>0&&n.jsxs(uN,{"aria-hidden":"true",style:{animationDelay:`${s.length*km}ms`},children:["+",d]})]})}const IR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,PR=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,rc=Oe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,zR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${PR} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${rc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,OR=p.span``,FR=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Na="var(--space-4)",_m=p.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,DR=ke`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,BR=p.span`
  position: absolute;
  /* Centered on the icon column — i.e. on the glyph itself. */
  left: calc(${Na} / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?Oe`
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
        animation: ${DR} 1.25s linear infinite;
      `:e.$state==="upcoming"?Oe`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Oe`
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
`,HR=p.div`
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
`,WR=p.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,UR=p.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?`calc(${Na} + var(--space-2))`:"0"};
`,Cm=p(Be)`
  &[data-active] { color: var(--color-content-brand); }
`;function Lh({text:e,onDone:o,speed:a=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(v=>v+1),a);return()=>clearTimeout(f)},[l,e,a]);const h=l>=e.length;return g.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(VR,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(GR,{"aria-hidden":"true",children:e.slice(l)})]})}const qR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,VR=p.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?qR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GR=p.span`
  opacity: 0;
`,YR=p.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,KR=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,jm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Width hugs the glyph so the marker lands on the row's left edge; height
     stays the 32px row pitch, which is what sets the trail's vertical rhythm. */
  width: ${Na};
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,QR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,ZR=p.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${QR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iv=p.button`
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
`,sv=Oe`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,Sm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* The same column as every other leading marker in the trail (see ICON_COL),
     so the chevron sits on the row's left edge whether the group is folded to
     this one line or heading the steps below it — and either way shares the
     left margin of the cards the trail runs between. */
  width: ${Na};
  height: var(--space-8);
  ${sv}
`,XR=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${sv}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${iv}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,JR=ke`
  to { transform: rotate(360deg); }
`,Mm=56.5,eN=p.svg`
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
    stroke-dasharray: ${Mm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?Mm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${JR} 2s linear infinite;
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
`,tN=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,$m=p.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Rm=p.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
`,Il=p.div`
  all: unset;
  display: block;
  width: 100%;
  box-sizing: border-box;
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Nm=p.span`
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

  /* Keyed to the whole press target, not the title row: hovering the status line
     is hovering the same control, so the title has to warm with it. */
  ${Il}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,nN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Il}:hover &,
  ${Il}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,rN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,oN=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-5);
  height: var(--space-5);
  /* The box is a touch wider than its glyph so there's something to press, which
     centring would leave the glyph inset from the row's left edge — visibly adrift
     of the headline directly above, since that starts on the edge itself. Pull the
     box back by exactly that inset: the glyph lands on the headline's edge while
     the pressable area keeps its size. */
  margin-left: calc((var(--space-5) - var(--space-4)) / -2);
  color: var(--color-content-tertiary);
  cursor: pointer;
  transition: color var(--duration-base) var(--ease-out);

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,aN=p.div`
  padding-left: ${e=>e.$indent?`calc(${Na} + var(--space-2))`:"0"};
`,iN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,sN=ke`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,lN=p.div`
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
  ${e=>e.$live&&Oe`
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
    animation: ${sN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,cN=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,lv=ke`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,dN=p.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${lv} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uN=p.span`
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
  animation: ${lv} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hN=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,pN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (ICON_COL + the header's --space-2 gap). */
  padding-left: ${e=>e.$indent?`calc(${Na} + var(--space-2))`:"0"};
  animation: ${hN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,mN=p.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,gN=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,vN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,xN=p.button`
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
`,yN=p.ul`
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
`,wN=p.ul`
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
`,bN=p.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function kN({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const _N=160;function CN({captured:e=!1,onSubmit:o,onDismiss:a}){const[s,l]=g.useState(""),d=g.useRef(null),h=s.length>=10;g.useEffect(()=>{var y;if(e||(y=window.matchMedia)!=null&&y.call(window,"(max-width: 600px)").matches)return;const v=window.requestAnimationFrame(()=>{var x;return(x=d.current)==null?void 0:x.focus()});return()=>window.cancelAnimationFrame(v)},[e]);const f=v=>{v.preventDefault(),!(!h||e)&&o(s)};return n.jsxs(MN,{onSubmit:f,"aria-label":"See Ultron handle real work",children:[n.jsx($N,{"aria-hidden":"true"}),n.jsx(RN,{type:"button","aria-label":e?"Close phone number confirmation":"Close — go straight to the event",onClick:a,children:n.jsx(Po,{size:18})}),n.jsxs(NN,{children:[n.jsxs(LN,{children:[n.jsx(AN,{"aria-hidden":"true"})," YOUR FIRST LIVE EVENT"]}),n.jsx(TN,{children:e?"Activating demo event now":"Ready to see the real work?"}),n.jsx(EN,{children:"Ultron just caught a last-minute callout. Add your mobile number to follow it from detection through resolution — and to get the next one wherever you are."})]}),e?n.jsxs(BN,{role:"status",children:[n.jsx(xn,{size:22}),n.jsxs("span",{children:[n.jsx("strong",{children:"You’re in."})," Here’s the event as Ultron works it."]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(IN,{children:[n.jsxs(PN,{children:[n.jsx(zN,{"aria-hidden":"true",children:"+1"}),n.jsx(ON,{ref:d,type:"tel",inputMode:"numeric",autoComplete:"tel",pattern:"[0-9]*",minLength:10,maxLength:15,value:s,placeholder:"Mobile number","aria-label":"Mobile number",onChange:v=>l(v.target.value.replace(/\D/g,""))})]}),n.jsx(FN,{type:"submit",variant:"tertiary",size:"lg",disabled:!h,children:"Launch"})]}),n.jsx(DN,{children:"One setup text, never spam. Msg & data rates may apply. Reply STOP to opt out."})]})]})}const cv=g.forwardRef(function({onSend:o,working:a=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,v]=g.useState(""),y=g.useRef(null),x=f.trim().length>0;g.useImperativeHandle(h,()=>({focus:()=>{var $;return($=y.current)==null?void 0:$.focus()}}),[]);const w=()=>{const $=y.current;$&&($.style.height="auto",$.style.height=`${Math.min($.scrollHeight,_N)}px`)},b=()=>{!x||a||(o(f),v(""),requestAnimationFrame(()=>{const $=y.current;$&&($.style.height="auto")}))},j=$=>{$.preventDefault(),b()},_=$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),b())};return n.jsxs(HN,{onSubmit:j,$compact:d,children:[n.jsx(WN,{ref:y,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:$=>{v($.target.value),w()},onKeyDown:_}),a?n.jsx(Lm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(kN,{size:d?16:20})}):n.jsx(Lm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:n.jsx(Gl,{size:d?14:18})})]})}),jN=ke`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,SN=ke`
  0%, 100% { opacity: 0.55; transform: scale(0.82); box-shadow: 0 0 0 0 rgb(110 231 183 / 0%); }
  50% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 7px rgb(110 231 183 / 0%); }
`,MN=p.form`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  padding: var(--space-6);
  overflow: hidden;
  color: var(--color-bg-always-light);
  background:
    radial-gradient(90% 180% at 100% 0%, rgb(86 112 255 / 52%), transparent 62%),
    radial-gradient(85% 140% at 0% 115%, rgb(173 70 255 / 38%), transparent 68%),
    linear-gradient(135deg, #08111f 0%, #111936 55%, #24133f 100%);
  border: 1px solid rgb(175 196 255 / 35%);
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgb(116 148 255 / 14%),
    0 -14px 48px rgb(68 83 255 / 20%),
    0 24px 60px rgb(4 8 24 / 35%);
  animation: ${jN} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 600px) {
    gap: var(--space-3);
    padding: var(--space-5);
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$N=p.span`
  position: absolute;
  z-index: -1;
  top: -80px;
  right: -40px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgb(132 157 255 / 28%);
  filter: blur(38px);
  pointer-events: none;
`,RN=p.button`
  position: absolute;
  z-index: 1;
  top: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  color: rgb(226 232 255 / 76%);
  background: rgb(255 255 255 / 10%);
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 50%;
  cursor: pointer;
  transition:
    color var(--duration-base) var(--ease-out),
    background var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out);

  &:hover {
    color: #fff;
    background: rgb(255 255 255 / 18%);
    border-color: rgb(255 255 255 / 32%);
  }

  &:focus-visible {
    outline: 2px solid #a7f3d0;
    outline-offset: 2px;
  }
`,NN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-right: var(--space-8);
`,LN=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: 0.08em;
  color: #a7f3d0;
`,AN=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6ee7b7;
  box-shadow: 0 0 14px rgb(110 231 183 / 78%);
  animation: ${SN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,TN=p.h2`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: var(--font-weight-semibold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #fff;
`,EN=p.p`
  max-width: 620px;
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 78%);
`,IN=p.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-2);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,PN=p.label`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 48px;
  padding: 0 var(--space-4);
  background: rgb(255 255 255 / 12%);
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(12px);
  transition: border-color var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:focus-within {
    border-color: rgb(191 219 254 / 92%);
    box-shadow: 0 0 0 3px rgb(96 165 250 / 22%);
  }
`,zN=p.span`
  flex: 0 0 auto;
  padding-right: var(--space-3);
  margin-right: var(--space-3);
  border-right: 1px solid rgb(255 255 255 / 22%);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: rgb(226 232 255 / 64%);
`,ON=p.input`
  flex: 1;
  min-width: 0;
  padding: var(--space-3) 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-variant-numeric: tabular-nums;
  color: #fff;
  caret-color: #a7f3d0;

  &::placeholder { color: rgb(226 232 255 / 46%); }
`,FN=p(Be)`
  && {
    min-height: 48px;
    padding-inline: var(--space-5);
    border-radius: var(--radius-lg);
    background: #fff;
    color: #111827;
    box-shadow: 0 8px 28px rgb(4 8 24 / 30%);
  }

  &&:hover:not(:disabled) {
    background: #eef2ff;
  }

  &&:disabled {
    background: rgb(255 255 255 / 16%);
    color: rgb(226 232 255 / 38%);
    opacity: 1;
  }

  @media (max-width: 520px) {
    && { width: 100%; }
  }
`,DN=p.p`
  margin: calc(var(--space-2) * -1) 0 0;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 48%);
`,BN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 56px;
  padding: var(--space-3) var(--space-4);
  background: rgb(110 231 183 / 12%);
  border: 1px solid rgb(110 231 183 / 34%);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: #d1fae5;

  & svg { flex: 0 0 auto; color: #6ee7b7; }
  & strong { color: #fff; }
`,HN=p.form`
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
`,WN=p.textarea`
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
`,Lm=p(Be)`
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
`,UN=768,dv=`(max-width: ${UN-1}px)`;function Ah(e){const[o,a]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>a(d.matches);return a(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function oc(){return Ah(dv)}const Am=450;function Th(e,o){var _;const a=e.status==="needs_approval"||e.status==="recommended",s=a||e.status==="unresolved"||e.status==="monitoring",l=Sh[e.id],d=o===1&&!!l,h=d?l.prompt:Z2[e.id]??e.recommendation,f=d?l.record:l$[e.id],v=f?Array.isArray(f)?f:[f]:[],y=e.status==="unresolved"?VM:d?l.actions:e.actions,x=a&&(!d&&(((_=Mh[e.id])==null?void 0:_.length)??0)>1||GM(h)),w=x?YM:y[y.length-1],b=x?[]:y.slice(0,-1),j=B2(e);return{needsDecision:a,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:v,primaryLabel:w,secondaryLabels:b,purple:j}}function Tm({thread:e,stage:o,expanded:a,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:v,onAction:y,onRefinement:x,onSaveWorkflow:w}){const[b,j]=g.useState(!1),[_,$]=g.useState(!1),{actionable:N,prompt:R,records:S,primaryLabel:C,purple:P}=Th(e,o),T=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",M=!s&&(N||P),F=E&&!d,V=s?T:N||T||M,W=a&&(V||F),B=nc(e),X=G2(e.id)||(W?"":e.assessment),ae=ce=>{H2(ce)?x(ce):y(e.id,ce)};return n.jsxs(rL,{"data-tone":B,$expanded:a,children:[n.jsxs(lL,{children:[n.jsxs(dL,{type:"button","aria-expanded":W,"aria-label":W?"Collapse case":"Expand case",onClick:h,children:[n.jsx(or,{size:"md",src:jh(e.id),name:Ca[e.id],alt:Ca[e.id]??""}),n.jsxs(gv,{children:[n.jsx(vv,{children:Y2(e)}),X&&n.jsx(xv,{children:X})]})]}),n.jsx(cL,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":W?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?n.jsx(Ql,{size:20}):W?n.jsx(Sl,{size:16}):n.jsx(hh,{size:16})})]}),W&&F&&n.jsx(uL,{children:n.jsx(hL,{children:n.jsx(SR,{milestones:X2(e)})})}),W&&V&&n.jsxs(pL,{children:[N&&!s&&n.jsx(ac,{children:R}),N&&!s&&S.length>0&&n.jsx(RL,{children:S.map((ce,oe)=>n.jsx(nv,{record:ce},oe))}),T&&n.jsx(yv,{role:"status","aria-live":"polite",children:n.jsx(YN,{thread:e,onDecide:v})}),M&&n.jsxs(Oi,{children:[N&&C&&n.jsx(ro,{variant:"primary",size:"sm",onClick:()=>ae(Ll),children:Ll}),N&&n.jsx(ro,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&n.jsx(_v,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{$(!0),x("Other")},children:"Other"}),P&&(b?n.jsx(Be,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(an,{size:14}),children:"Saved"}):n.jsx(Be,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(To,{size:14}),onClick:()=>{w(e),j(!0)},children:"Save as workflow"}))]})]})]})}function Em({text:e,speed:o=16,onDone:a,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(a==null||a())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Lh,{text:e,speed:o,onDone:()=>{d(!0),a==null||a()}})}function uv({thread:e,stage:o,onAction:a,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:v=!1,onSend:y,replying:x=!1,onStop:w,flat:b=!1,onOfferShown:j}){const _=oc(),$=d||h,[N,R]=g.useState(!1),[S,C]=g.useState(!1),[P]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[L,T]=g.useState(!1),[E,M]=g.useState(!1),F=g.useRef(null);g.useEffect(()=>{var O;E&&((O=F.current)==null||O.focus())},[E]);const V=d||v||L,{actionable:W,onFollowUp:B,prompt:K,records:X,primaryLabel:ae,purple:ce}=Th(e,o),oe=W&&!B?Mh[e.id]??W2(K).map(O=>({label:O})):void 0,Q=e.status==="resolved"||e.status==="auto_resolved",D=ce||Q,G=O=>{H2(O)?s(O):a(e.id,O)},A=W&&!(oe&&oe.length>0)&&X.length>0?X[0]:void 0,z=tv[e.id],ne=N||!z,U=d&&!v&&!L,ee=D&&!W&&ne&&(U||S),de=g.useRef(!1);return g.useEffect(()=>{!ee||de.current||(de.current=!0,j==null||j())},[ee,j]),D&&!W?n.jsxs(DL,{$divided:!0,children:[z&&n.jsx(BL,{children:n.jsx(Em,{text:z,onDone:()=>R(!0),instant:P})}),ne&&!U&&n.jsxs(Jr,{$saved:V,"data-saved":V||void 0,children:[n.jsxs(Cv,{children:[n.jsx(jv,{"aria-hidden":"true",children:n.jsx(To,{size:16})}),n.jsx(Sv,{children:n.jsx(Em,{text:"Want me to save this as a reusable workflow?",onDone:()=>C(!0),instant:P})})]}),S&&n.jsx(Mv,{children:V?_?n.jsx(Pm,{variant:"primary",size:"sm",disabled:!0,iconOnly:!0,"aria-label":"Saved",children:n.jsx(an,{size:14})}):n.jsx(ro,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(an,{size:14}),children:"Saved"}):_?n.jsx(Pm,{variant:"primary",size:"sm",iconOnly:!0,"aria-label":"Save workflow",onClick:()=>{T(!0),l(e)},children:n.jsx(an,{size:14})}):n.jsx(ro,{variant:"primary",size:"sm",onClick:()=>{T(!0),l(e)},children:"Save workflow"})})]}),ne&&U&&n.jsx(pv,{})]}):n.jsxs(sL,{$flat:b,"data-tone":nc(e),children:[W&&n.jsxs(fv,{children:[n.jsx(ac,{children:K}),A&&n.jsx(mv,{children:n.jsx(or,{size:"md",src:Ra(A.avatarSeed),name:A.title,alt:A.title})})]}),oe&&oe.length>0?n.jsx(hv,{tasks:oe}):null,n.jsxs(Oi,{children:[W&&ae&&n.jsx(ro,{variant:E?"secondary":"primary",size:"sm",onClick:()=>G(Ll),children:Ll}),W&&n.jsx(ro,{variant:E?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),W&&n.jsx(_v,{variant:"tertiary",size:"sm","data-selected":E||void 0,onClick:()=>M(!0),children:"Other"}),W&&!B&&n.jsx(FL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":$,"data-on":$||void 0,leadingArtwork:$?n.jsx(an,{size:14}):n.jsx(To,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),W&&E&&n.jsx(OL,{children:n.jsx(cv,{ref:F,compact:!0,onSend:O=>y==null?void 0:y(O),working:x,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function qN({thread:e,stage:o,expanded:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:v=!1}){const y=nc(e),x=G2(e.id)||e.assessment;return n.jsxs(oL,{"data-tone":y,$expanded:a,children:[n.jsxs(aL,{$expanded:a,children:[n.jsx(or,{size:"md",src:jh(e.id),name:Ca[e.id],alt:Ca[e.id]??""}),n.jsxs(gv,{children:[n.jsx(vv,{children:Y2(e)}),x&&n.jsx(xv,{children:x})]})]}),a&&n.jsx(iL,{children:n.jsx(uv,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:v})})]})}function hv({tasks:e,interactive:o=!0}){return n.jsx(NL,{children:e.map((a,s)=>n.jsx(VN,{task:a,first:s===0,last:s===e.length-1,interactive:o},s))})}function VN({task:e,first:o,last:a,interactive:s=!0}){const[l,d]=g.useState(!1),h=!!e.detail&&s;return n.jsxs(LL,{children:[n.jsx(AL,{"data-first":o||void 0,"data-last":a||void 0,"aria-hidden":"true",children:n.jsx(TL,{})}),n.jsxs(EL,{children:[n.jsxs(IL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[n.jsx(bv,{children:e.label}),h&&n.jsx(PL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),l&&h&&n.jsx(zL,{children:e.detail})]})]})}function GN({steps:e,completed:o}){const[a,s]=g.useState(o?e.length:1);g.useEffect(()=>{if(o){s(e.length);return}if(a>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[a,e.length,o]);const l=e.slice(0,a);return n.jsx(yL,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!o&&h===a-1,v=h===l.length-1;return n.jsxs(bL,{children:[n.jsxs(kL,{children:[n.jsx(ML,{$done:!f,"aria-hidden":"true",children:f?n.jsx($L,{children:n.jsx(dt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(an,{size:16})}),!v&&n.jsx(_L,{})]}),n.jsxs(CL,{$last:v,children:[n.jsx(jL,{children:d.headline}),n.jsx(SL,{children:d.detail})]})]},h)})})}function YN({thread:e,onDecide:o,analyzed:a,hideDetail:s,hideTrigger:l}){const[d,h]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(fL,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[n.jsx(dt,{mark:"orbit",size:40,tone:"auto",state:a?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(gL,{children:[n.jsx(vL,{children:a?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(xL,{children:e.assessment})]}),n.jsx(mL,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),d&&n.jsx(GN,{steps:Q2(e.id),completed:a}),!a&&!l&&n.jsx(wv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function KN({thread:e,onDecide:o}){return n.jsx(wv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function pu(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:ev(o,w$(e))}}function QN(e,o){const a=ev(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:a}}function ZN(e,o){const a=X2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,a.length):a.length,d=[QN(Q2(e.id),e.id),...a.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(b=>({kind:"activity",milestone:b}));return(e.status==="in_progress"||e.status==="monitoring")&&(sm[e.id]??[]).map(b=>pu(b,e.id)).forEach(b=>w.push({kind:"activity",milestone:b})),{items:w,reasoningCount:h}}const f=Sh[e.id],v=[(sm[e.id]??[]).map(w=>pu(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>pu(w,e.id))],y=w=>w===1&&f?f.prompt:Z2[e.id]??e.recommendation,x=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,b)=>{x.push({kind:"question",text:y(b)}),x.push({kind:"message",text:w}),(v[b]??[]).forEach(j=>x.push({kind:"activity",milestone:j})),x.push({kind:"reply",text:k$(b)})}),{items:x,reasoningCount:h}}function XN({thread:e,outbound:o=[],chat:a=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:v=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:b}=ZN(e,o),j=l||e.status==="in_progress",[_,$]=g.useState(l?Math.min(1,b):j?b:w.length),[N]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),R=o.length>0||y||x?w.length:b,S=e.status==="in_progress"&&o.length>0,[C,P]=g.useState(0);g.useEffect(()=>{P(0)},[_]),g.useEffect(()=>{if(_>=R)return;const O=w[_],Y=w[_-1];if((O==null?void 0:O.kind)==="question"||(O==null?void 0:O.kind)==="message"){const le=setTimeout(()=>$(we=>we+1),0);return()=>clearTimeout(le)}if((O==null?void 0:O.kind)==="reply"){if(S)return;const le=setTimeout(()=>$(we=>we+1),Am);return()=>clearTimeout(le)}if(S&&(Y==null?void 0:Y.kind)!=="message")return;const ie=(Y==null?void 0:Y.kind)==="message"?Am:pm,xe=setTimeout(()=>$(le=>le+1),ie);return()=>clearTimeout(xe)},[_,R,S]),g.useEffect(()=>{if(!S)return;const O=Y=>{var ye;if(Y.key!=="t"&&Y.key!=="T"||Y.metaKey||Y.ctrlKey||Y.altKey)return;const ie=Y.target instanceof Element?Y.target:null;if(ie&&ie.closest('input, textarea, [contenteditable="true"]'))return;const xe=w[_-1],le=(xe==null?void 0:xe.kind)==="activity"?((ye=xe.milestone.progress)==null?void 0:ye.length)??0:0;if((xe==null?void 0:xe.kind)==="activity"&&C<le-1){P(Se=>Se+1);return}const we=w[_];(we==null?void 0:we.kind)==="activity"?($(Se=>Se+1),P(0)):f==null||f()};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[S,_,C,f]);const L=w.slice(0,_),T=[];for(const O of L){if(O.kind==="question"){T.push({type:"question",text:O.text});continue}if(O.kind==="message"){T.push({type:"msg",text:O.text});continue}if(O.kind==="reply"){T.push({type:"reply",text:O.text});continue}const Y=T[T.length-1];Y&&Y.type==="acts"?Y.milestones.push(O.milestone):T.push({type:"acts",milestones:[O.milestone]})}const E=_<w.length,M=L.length>0&&L[L.length-1].kind==="activity",F=_>=R,[V,W]=g.useState(!1);g.useEffect(()=>{if(!(F&&M&&(y||l)&&!x)){W(!1);return}W(!0);const O=setTimeout(()=>W(!1),pm);return()=>clearTimeout(O)},[F,M,_,y,l,x]);const B=(y||l)&&(E||V)&&M;let K=-1;T.forEach((O,Y)=>{O.type==="acts"&&(K=Y)});const X=[];for(const O of w){if(O.kind!=="activity"){X.push({type:"other"});continue}const Y=X[X.length-1];Y&&Y.type==="acts"?Y.milestones.push(O.milestone):X.push({type:"acts",milestones:[O.milestone]})}let ae=-1;X.forEach((O,Y)=>{O.type==="acts"&&(ae=Y)});const ce=T.findIndex(O=>O.type==="acts"),oe=(O,Y,ie=Y)=>{const xe=T[O],le=(l||e.status==="in_progress")&&O===ae,we=X[O],ye=le&&we&&we.type==="acts"?we.milestones:xe.milestones,Se=le?xe.milestones.length-1:void 0;return n.jsx(El,{milestones:ye,focusIndex:Se,focusBeat:le&&S?C:void 0,typingIndex:O===ae&&B?xe.milestones.length-1:void 0,collapsed:O<K,hideActions:ie,running:le,showConnectors:O!==ce,reasoning:O===ce,animateIn:!Y&&!N})},Q=[];for(let O=0;O<T.length;O++){const Y=T[O];if(Y.type==="question"){Q.push({kind:"question",text:Y.text});continue}if(Y.type==="msg"){Q.push({kind:"msg",text:Y.text});continue}if(Y.type==="reply"){Q.push({kind:"response",gi:-1,text:Y.text});continue}const ie=T[O+1];ie&&ie.type==="reply"?(Q.push({kind:"response",gi:O,text:ie.text}),O++):Q.push({kind:"acts",gi:O})}const G=(l||e.status==="in_progress")&&K>=0||s,A=L.length>0,z=s||y,ne=(()=>{for(let O=Q.length-1;O>=0;O--){const Y=Q[O];if(Y.kind==="acts"||Y.kind==="response"&&Y.gi>=0)return O}return-1})(),U=Q.findIndex(O=>O.kind==="question"),ee=U===ce+1?U:-1,de=O=>O.kind==="acts"?ur(T[O.gi].milestones):O.kind==="response"?ur(O.gi>=0?T[O.gi].milestones:[]):ur([]);return n.jsxs(n.Fragment,{children:[Q.map((O,Y)=>{var we,ye;const ie=Y===ne?d:null;if(O.kind==="question"){if(Y===ee)return null;const Se=Q[Y-1],De=!!Se&&(Se.kind==="acts"||Se.kind==="response")&&Y-1!==ne,ue=Y===U;return n.jsxs(mu,{children:[ue?n.jsx(Im,{thread:e,saveWorkflowFlagged:v}):n.jsx(tL,{text:O.text,animate:!N}),De&&n.jsx(ga,{time:de(Se)})]},`q${Y}`)}if(O.kind==="msg")return n.jsx(nL,{messages:[O.text],animate:!N},`m${Y}`);if(O.kind==="acts"){const Se=T[O.gi].milestones,De=((we=Q[Y+1])==null?void 0:we.kind)==="question",ue=oe(O.gi,!1,!!ie||De),_e=Y===ce,Ne=ie||(_e&&Y+1===ee?n.jsx(Im,{thread:e,saveWorkflowFlagged:v}):null);return _e&&Ne?n.jsxs(eA,{children:[ue,Ne,n.jsx(ga,{time:ur(Se)})]},`a${Y}`):n.jsxs(g.Fragment,{children:[ue,ie&&n.jsxs(mu,{children:[ie,n.jsx(ga,{time:ur(Se)})]})]},`a${Y}`)}const xe=O.gi>=0,le=xe?T[O.gi].milestones:[];return n.jsxs(g.Fragment,{children:[n.jsx(qu,{activity:xe?oe(O.gi,!0):void 0,text:O.text,feedbackTime:ie||((ye=Q[Y+1])==null?void 0:ye.kind)==="question"?void 0:ur(le),showMark:!1,animateIn:!1}),ie&&n.jsxs(mu,{children:[ie,n.jsx(ga,{time:ur(le)})]})]},`resp${Y}`)}),n.jsx(JN,{messages:a,replying:s}),h&&lo.createPortal(A?n.jsxs(KL,{role:z?"status":"img","aria-label":s?"Ultron is replying":G?"Ultron is working":"Ultron",children:[n.jsxs(XL,{"aria-hidden":"true",children:[n.jsx(zm,{$show:G,children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(zm,{$show:!G,children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:z?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),G&&n.jsx(ZL,{children:s?"Replying…":n.jsx($R,{})})]}):null,h),ne<0&&d]})}function qu({activity:e,text:o,body:a,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||a||s);return n.jsxs(JL,{children:[f&&n.jsxs(tA,{$animate:h,children:[e,a,s&&n.jsx(ga,{time:s})]}),d&&n.jsx(nA,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function fu(){return[{icon:"clock",headline:"Reviewed your message"}]}function JN({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(YL,{children:e.map((a,s)=>a.role==="operator"?n.jsx($v,{children:n.jsx(Nv,{children:n.jsx(Lv,{children:a.text})})},s):a.kind==="workflow_saved"?n.jsx(qu,{body:n.jsx(eL,{}),feedbackTime:ur(fu()),showMark:!1},s):n.jsx(qu,{activity:n.jsx(El,{milestones:fu(),collapsed:!0,hideActions:!0}),text:a.text,feedbackTime:ur(fu()),showMark:!1},s))})}function eL(){return n.jsx(pv,{})}function pv(){return n.jsxs(Jr,{children:[n.jsxs(Cv,{children:[n.jsx(jv,{"aria-hidden":"true",children:n.jsx(To,{size:16})}),n.jsx(Sv,{children:"Workflow saved for future use."})]}),n.jsx(Mv,{children:n.jsx(ro,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(Ql,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function tL({text:e,animate:o=!0}){return n.jsx(WL,{$animate:o,children:e})}function Im({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:a,records:s}=Th(e,0),l=Mh[e.id]??W2(a).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(UL,{"data-tone":nc(e),children:[n.jsxs(fv,{children:[n.jsx(ac,{children:a}),o?n.jsx($r,{content:"Saved as workflow",children:n.jsx(qL,{"aria-label":"Saved as workflow",children:n.jsx(To,{size:18})})}):d&&n.jsx(mv,{children:n.jsx(or,{size:"md",src:Ra(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(hv,{tasks:l,interactive:!1}):null]})}function nL({messages:e,animate:o=!0}){return e.length?n.jsx(VL,{children:e.map((a,s)=>n.jsx($v,{children:n.jsx(Nv,{$animate:o,children:n.jsx(Lv,{children:a})})},s))}):null}const rL=p.div`
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
`,oL=p.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?Oe`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Oe`
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
`,aL=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Oe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,iL=p.div`
  padding: var(--space-4);
`,sL=p.div`
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
  ${e=>e.$flat&&Oe`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,fv=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,mv=p.span`
  flex-shrink: 0;
  display: inline-flex;
`,lL=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,cL=p(Be)`
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
`,dL=p.button`
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
`,gv=p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,vv=p.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,xv=p.span`
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
`,uL=p.div`
  overflow: hidden;
`,hL=p.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,pL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,yv=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,fL=p.div`
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
`,mL=p.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;p(yv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const gL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,vL=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,xL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,yL=p.div`
  display: flex;
  flex-direction: column;
`,wL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,bL=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${wL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kL=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,_L=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,CL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,jL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,SL=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,ML=p.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,$L=p.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,wv=p(Be)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,RL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,NL=p.div`
  display: flex;
  flex-direction: column;
`,Pl="var(--space-8)",LL=p.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,AL=p.div`
  position: relative;
  flex-shrink: 0;
  /* The dot's own width, not a padded column around it. At --space-5 (20px) the
     8px dot centred to 6px in from the row's edge, which put the plan's thread
     6px adrift of the prompt sitting directly above it. Sizing the rail to the
     dot lands the two on one line. The thread below is drawn at left: 50% of
     this box, so it stays centred on the dot either way. */
  width: var(--space-2);
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
  &[data-first]::before { top: calc(${Pl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Pl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,TL=p.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Pl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,EL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,IL=p.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Pl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,bv=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,PL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,zL=p.p`
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
`,ac=p.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,kv=ke`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Oi=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${kv} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,OL=p.div`
  animation: ${kv} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ro=p(Be)`
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

  /* Touch targets on a phone: the sm pill's ~32px is fine under a cursor but
     short for a thumb, and leaving these at 32 beside the full-width save pill
     would read as two different rows. */
  @media (max-width: 600px) {
    min-height: 44px;

    /* Yes and No split the card's width between them. Scoped to the decision
       row so the same pill used as a lone CTA elsewhere (the offer card's
       "Save workflow" / "View workflow") keeps hugging its label. */
    ${Oi} > & {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`,_v=p(Be)`
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

  /* Same touch height as the Yes/No choices it sits above. */
  @media (max-width: 600px) {
    min-height: 44px;

    /* Its own row under the Yes/No pair — a 100% basis can't share their line,
       so the wrap is automatic. "Other" is the odd one out of the three, and
       giving it the full width says so, rather than leaving it as a stub
       trailing a half-width pair. */
    ${Oi} > & {
      flex: 0 0 100%;
    }
  }
`,FL=p(Be)`
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

  /* On a phone the label is too wide to share the line with the choices, so the
     row wraps and the auto left margin above strands this pill against the right
     edge, detached from everything it belongs to. Take the whole row instead —
     the wrap is a given at this width, so own it: left edge lined up with Yes/No
     and a full-width target that clears the 44px touch minimum. */
  @media (max-width: 600px) {
    ${e=>e.$trailing&&"margin-left: 0;"}
    flex: 0 0 100%;
    min-height: 44px;
  }
`,DL=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,BL=p.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Jr=p.div`
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

  ${e=>!e.$saved&&Oe`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  /* Mobile: the CTA compresses to a circled check, so it rides the question's
     own row — wrapping would drop a 32px circle onto its own line for no gain. */
  @media (max-width: 767px) {
    flex-wrap: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,Cv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,jv=p.span`
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
  ${Jr}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Jr}:not([data-saved]):hover &::after { opacity: 1; }

  /* Mobile shell: there's no hover to reveal the aurora, so a live offer wears
     it outright — the badge is the card's one point of colour either way. The
     saved card still stands down below. */
  @media (max-width: 767px) {
    ${Jr}:not([data-saved]) & { color: var(--color-content-inverse); }
    ${Jr}:not([data-saved]) &::after { opacity: 1; }
  }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Jr}[data-saved] & { color: var(--color-content-disabled); }
`,Sv=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Jr}[data-saved] & { color: var(--color-content-disabled); }
`,Mv=p(Oi)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,Pm=p(ro)`
  && {
    width: 44px;
    height: 44px;
    min-height: 44px;
    padding: 0;
  }
  align-self: center;
  flex-shrink: 0;
`,HL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,WL=p.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${HL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UL=p.div`
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
  ${ac} { color: var(--color-content-disabled); }
  ${bv} { color: var(--color-content-disabled); }
`,qL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,VL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,$v=p.div`
  display: flex;
  justify-content: flex-end;
`,Eh=ke`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,Rv=ke`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,GL=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Nv=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;

  /* Dark: lifted a couple of steps off bg-secondary so the bubble stands off
     the page — kept in step with the Welcome thread's operator bubble. */
  @media (prefers-color-scheme: dark) {
    :root:not(.light) & {
      background: color-mix(in srgb, var(--color-content-primary) 10%, var(--color-bg-secondary));
    }
  }
  :root.dark & {
    background: color-mix(in srgb, var(--color-content-primary) 10%, var(--color-bg-secondary));
  }
  animation: ${Eh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Lv=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,YL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;p.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const KL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${Rv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QL=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,ZL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${QL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,XL=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,zm=p.span`
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
`,JL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${rc}
`,mu=p.div`
  display: contents;
  ${rc}
`,eA=p.div`
  display: flex;
  flex-direction: column;
  ${rc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,tA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${GL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nA=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${Rv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Eh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${Eh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;p.div`
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
`;p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;p.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;p.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;const Om=72,Fm=.58;function Dn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Dm(e,o,a,s){const l=getComputedStyle(o).getPropertyValue(a).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),v=parseInt(f.length===3?f.split("").map(y=>y+y).join(""):f,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const rA=e=>{const[o,a,s]=e.split(",").map(Number);return(.299*o+.587*a+.114*s)/255};function Ih({links:e=0,tone:o="aurora",cornerTone:a="default"}){const s=g.useRef(null),l=g.useRef(0),d=g.useRef(e);return d.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const h=s.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const v=Math.min(2,window.devicePixelRatio||1);let y=0,x=0;const w=()=>{y=h.clientWidth,x=h.clientHeight,h.width=Math.max(2,Math.round(y*v)),h.height=Math.max(2,Math.round(x*v)),f.setTransform(v,0,0,v,0,0)};w();const b=new ResizeObserver(w);b.observe(h);const j=Dm(f,h,"--color-bg-primary","255,255,255"),_=rA(j)<.5,$=Dm(f,h,"--color-content-tertiary",_?"148,163,184":"71,85,105"),N=Array.from({length:Om},(E,M)=>{const F=M%3===0,V=F?1-.5*Math.pow(Dn(M*3.1),1.6):Dn(M*3.1),W=F?.5*Math.pow(Dn(M*5.7),1.6):Dn(M*5.7);return{bx:V,by:W,vx:(Dn(M*7.3)-.5)*.008,vy:(Dn(M*9.9)-.5)*.008,wA:6+Dn(M*4.7)*10,wS:.25+Dn(M*6.1)*.5,wP:Dn(M*8.2)*6.2832,r:.8+Dn(M*2.3)*1.6,twS:.8+Dn(M)*1.4,twP:Dn(M*11.4)*6.2832}}),R=(E,M)=>{const F=((E.bx+E.vx*M)%1+1)%1,V=((E.by+E.vy*M)%1+1)%1,W=F-.5,B=Math.abs(W)*2,K=B<1e-4?1:(Fm+(1-Fm)*B)/B;return{x:(.5+W*K)*y+Math.cos(M*E.wS+E.wP)*E.wA,y:V*x+Math.sin(M*E.wS*.8+E.wP)*E.wA}},S=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),C=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),f.clearRect(0,0,y,x);const M=N.map(F=>R(F,E));for(let F=0;F<Om;F++){const V=N[F],W=.35+.65*(.5+.5*Math.sin(E*V.twS+V.twP)),B=.82+l.current*.18;f.fillStyle="rgba("+$+","+W*B*(_?.55:.42)+")",f.beginPath(),f.arc(M[F].x,M[F].y,V.r*(.7+.3*W),0,6.2832),f.fill()}};if(S)return l.current=d.current,C(1.15),()=>b.disconnect();C(1.15);let P=0;const L=performance.now(),T=E=>{C(1.15+(E-L)/1e3),P=requestAnimationFrame(T)};return P=requestAnimationFrame(T),()=>{cancelAnimationFrame(P),b.disconnect()}},[]),n.jsx(oA,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:a==="risk",children:n.jsx("canvas",{ref:s})})}const oA=p.div`
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
    radial-gradient(26% 28% at 68% 62%, color-mix(in srgb, var(--aurora-peach) var(--aurora-rim), transparent), transparent 70%);

  /* The top-right corner wash uses two identical-strength layers so the
     neutral-to-risk palette change can cross-fade without brightening. */
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: opacity 560ms var(--ease-out, ease-out);
  }

  &::before {
    background: radial-gradient(
      120% 90% at 100% 0%,
      var(--color-bg-secondary) 0%,
      transparent 55%
    );
    opacity: ${e=>e.$riskActive?0:1};
  }

  &::after {
    background: radial-gradient(
      120% 90% at 100% 0%,
      color-mix(
        in srgb,
        var(--color-bg-secondary) 72%,
        var(--color-orange-content-tertiary) 28%
      ) 0%,
      transparent 55%
    );
    opacity: ${e=>e.$riskActive?1:0};
  }

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

  /* Neutral wash — every aurora stop collapsed onto the page's own secondary
     surface at half strength (the rim keeps the palette's ~2:1 falloff). Same
     gradient geometry, no hue. Declared after the theme blocks above so it wins
     in both light and dark, where those re-tint the aurora. */
  ${e=>e.$neutral&&Oe`
    --aurora-mint: var(--color-bg-secondary);
    --aurora-sky: var(--color-bg-secondary);
    --aurora-blue: var(--color-bg-secondary);
    --aurora-violet: var(--color-bg-secondary);
    --aurora-pink: var(--color-bg-secondary);
    --aurora-peach: var(--color-bg-secondary);
    --aurora-core: 50%;
    --aurora-rim: 25%;
  `}

  & > canvas {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after { transition: none; }
  }
`,Wn=Oe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Av=Oe`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Oe`
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
`;const aA=p.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,ol=p.div`
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

  /* Neutral tone — the field rendered in the page's own secondary surface at
     half strength instead of the holographic palette, for scenes that want the
     motion without the colour. Keyed off an attribute on the layer rather than
     a prop on every blob, and it overrides the whole gradient, so the rAF loop's
     wandering hue variables simply go unread. */
  [data-glow-tone='neutral'] & {
    background: radial-gradient(
      circle at var(--glow-cx, 35%) var(--glow-cy, 35%),
      color-mix(in srgb, var(--color-bg-secondary) 50%, transparent),
      color-mix(in srgb, var(--color-bg-secondary) 50%, transparent) 62%,
      color-mix(in srgb, var(--color-bg-secondary) 25%, transparent) 88%
    );
  }
`,Bm=.025,fi=560,mi=480,iA=260,sA=.08,lA=.18,cA=.06,dA=350,uA=9,al=[168,197,224,250,285,330,390],hA=e=>{const o=al.length-1,a=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(a));return(al[s]+(al[s+1]-al[s])*(a-s))%360},bl=5,Hm=360,pA=560,fA=.055,mA=.03,gi=320,gA=.84,Vu=bl+1,kl=[];for(let e=0;e<Vu;e++)for(let o=e+1;o<Vu;o++)kl.push([e,o]);const Wm=(e,o)=>hA((e*uA+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),il=(e,o)=>{const a=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${a(.9,0)} ${a(1.3,2.1)} ${a(1.1,4.2)} ${a(.8,1.3)} / ${a(1.2,3.1)} ${a(.7,.6)} ${a(1.4,5)} ${a(1,2.4)}`},Um=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),gu=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function Ph({tone:e="color"}={}){const o=g.useRef(null),a=g.useRef(null),s=g.useRef([]),l=g.useRef([]),d=g.useRef([]);return g.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),f=o.current,v=a.current;if(!f||!v)return;const y=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,w=Array.from({length:bl},()=>({size:Hm+Math.random()*(pA-Hm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));w.forEach((M,F)=>{const V=l.current[F];V&&(V.style.width=`${M.size.toFixed(0)}px`,V.style.height=`${M.size.toFixed(0)}px`)});const b=(M,F,V)=>{M.style.setProperty("--glow-ha",Wm(F,y[0]+V).toFixed(1)),M.style.setProperty("--glow-hb",Wm(F,y[1]+V*1.3).toFixed(1)),M.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(F*.17+y[2]*1.9+V)))%360).toFixed(1)),M.style.setProperty("--glow-cx",`${(35+14*Math.sin(F*.4+y[2]+V)).toFixed(1)}%`),M.style.setProperty("--glow-cy",`${(35+14*Math.cos(F*.31+y[3]+V)).toFixed(1)}%`)},j=(M,F,V)=>{const W=new Array(Vu).fill(null);for(let B=0;B<bl;B++){const K=w[B],X=l.current[B];if(!X)continue;const ae=F*(.5+K.ax*(.68*Math.sin(M*K.sx1+K.px1)+.32*Math.sin(M*K.sx2+K.px2))),ce=V*(.5+K.ay*(.68*Math.sin(M*K.sy1+K.py1)+.32*Math.sin(M*K.sy2+K.py2))),oe=fA+mA*(.5+.5*Math.sin(M*K.bs+K.bp));X.style.transform=`translate(${(ae-K.size/2).toFixed(1)}px, ${(ce-K.size/2).toFixed(1)}px)`,X.style.opacity=oe.toFixed(3),X.style.borderRadius=il(M,K.mp),b(X,M,K.cs),W[B+1]={x:ae,y:ce,size:K.size,o:oe}}return W},_=(M,F)=>{for(let V=0;V<kl.length;V++){const W=d.current[V];if(!W)continue;const[B,K]=kl[V],X=F[B],ae=F[K],ce=X&&ae?Math.min(X.o,ae.o):0;if(!X||!ae||ce<=.005){W.style.opacity="0";continue}const oe=ae.x-X.x,Q=ae.y-X.y,D=Math.hypot(oe,Q),G=(X.size+ae.size)/2*gA,A=Um(1-D/G);if(A<=.001){W.style.opacity="0";continue}const z=Math.max(.35,D*.9/gi),ne=.3+.4*A;W.style.transform=`translate(${((X.x+ae.x)/2-gi/2).toFixed(1)}px, ${((X.y+ae.y)/2-gi/2).toFixed(1)}px) rotate(${Math.atan2(Q,oe).toFixed(3)}rad) scale(${z.toFixed(3)}, ${ne.toFixed(3)})`,W.style.opacity=(ce*A).toFixed(3),W.style.borderRadius=il(M,1.1*(V+1)),b(W,M,.23*(V+1))}};if(h){const F=j(2.4,f.clientWidth,f.clientHeight);_(2.4,F);return}let $=null,N=null,R=-1/0,S=0,C=0,P=0;const L=M=>{const F=f.getBoundingClientRect(),V=$===null;$=M.clientX-F.left,N=M.clientY-F.top,R=M.timeStamp,V&&(S=$,C=N)};window.addEventListener("pointermove",L,{passive:!0});let T=0;const E=M=>{T=requestAnimationFrame(E);const F=M/1e3,V=f.clientWidth,W=f.clientHeight,B=j(F,V,W);if($!==null&&N!==null){S+=($-S)*Bm,C+=(N-C)*Bm;const K=M-R<dA?lA:sA;P+=(K-P)*cA,v.style.transform=`translate(${S-fi/2}px, ${C-fi/2}px)`,v.style.opacity=P.toFixed(3),v.style.borderRadius=il(F,0),b(v,F,0),B[0]={x:S,y:C,size:fi,o:P};for(let X=0;X<gu.length;X++){const ae=s.current[X];if(!ae)continue;const{nx:ce,ny:oe}=gu[X],Q=ce<0?S:ce>0?V-S:oe<0?C:W-C,D=Um(1-Q/iA);if(D<=.001){ae.style.opacity="0";continue}const G=ce!==0?ce<0?0:V:S,A=oe!==0?oe<0?0:W:C,z=mi*(.5-.22*D),ne=.55+.45*D;ae.style.transform=`translate(${G+ce*z-mi/2}px, ${A+oe*z-mi/2}px) scale(${ne.toFixed(3)})`,ae.style.opacity=(P*D).toFixed(3),ae.style.borderRadius=il(F,.9*(X+1)),b(ae,F,.35*(X+1))}}_(F,B)};return T=requestAnimationFrame(E),()=>{cancelAnimationFrame(T),window.removeEventListener("pointermove",L)}},[]),n.jsxs(aA,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[kl.map((h,f)=>n.jsx(ol,{ref:v=>{d.current[f]=v},style:{width:gi,height:gi,opacity:0}},`bridge-${f}`)),Array.from({length:bl},(h,f)=>n.jsx(ol,{ref:v=>{l.current[f]=v},style:{opacity:0}},`ambient-${f}`)),gu.map((h,f)=>n.jsx(ol,{ref:v=>{s.current[f]=v},style:{width:mi,height:mi,opacity:0}},f)),n.jsx(ol,{ref:a,style:{width:fi,height:fi,opacity:0}})]})}const qm=.71,Tv=.24,Ev=Oe`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${Tv}em;
`,vA={"Coverage Recovery":eo,"Fill Optimization":eo,Recruiting:eo,Users:eo,Attendance:Mn,"Attendance Recovery":Mn,"Time Off":Mn,Scheduling:Mn,Compliance:Ti,Onboarding:No,"Payroll Operations":_g,Invoicing:oo,Reporting:zf,"Marketplace Optimization":zf,Engagement:ji,"Autonomous Operations":ql},xA=e=>vA[e]??ql,Vm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],yA=2800,wA=200,bA=6,kA=2200,bi=520;function _A({onDetectEvent:e,deckActive:o=!1,deck:a}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const h=g.useRef(new Set),[f,v]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const L=setInterval(()=>l(T=>(T+1)%Vm.length),yA);return()=>clearInterval(L)},[]);const x=Math.min(bA,rl.length),[w,b]=g.useState([]),j=g.useRef(0),_=g.useRef(rl.filter(L=>!L.risk)),$=g.useRef(rl.filter(L=>L.risk)),N=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),R=()=>5+Math.floor(Math.random()*5),S=()=>{const L=N.current,T=$.current;if(T.length>0&&L.sinceRisk>=L.gap)return L.sinceRisk=0,L.gap=R(),T[L.risk++%T.length];L.sinceRisk+=1;const E=_.current;return E.length>0?E[L.routine++%E.length]:T[L.risk++%T.length]},C=L=>L.risk?"risk":Math.random()<.28?"action":"none",P=g.useRef(null);return g.useEffect(()=>{if(rl.length===0){b([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:R()},j.current=0;const L=Array.from({length:x},()=>{const M=S();return{key:j.current++,event:M,phase:"in",outcome:C(M),resolved:!0}});if(L.length>0){const M=L[L.length-1];M.resolved=!1,P.current={key:M.key,event:M.event,outcome:M.outcome}}else P.current=null;b(L),L.forEach(M=>{var F;M.resolved&&M.outcome!=="none"&&!h.current.has(M.event.id)&&(h.current.add(M.event.id),(F=d.current)==null||F.call(d,M.event))});const T=[],E=setInterval(()=>{var B;const M=S(),F=j.current++,V=C(M),W=P.current;W&&W.outcome==="risk"&&(v(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>v(!1),2800)),W&&W.outcome!=="none"&&(h.current.has(W.event.id)||(h.current.add(W.event.id),(B=d.current)==null||B.call(d,W.event))),P.current={key:F,event:M,outcome:V},b(K=>{const X=K.filter(oe=>oe.phase!=="leaving"),ae=X.length>=x?X[0].key:null;return[...K.map(oe=>oe.key===ae?{...oe,phase:"leaving"}:W&&oe.key===W.key&&!oe.resolved?{...oe,resolved:!0}:oe),{key:F,event:M,phase:"entering",outcome:V,resolved:!1}]}),T.push(setTimeout(()=>{b(K=>K.map(X=>X.key===F?{...X,phase:"in"}:X))},40)),T.push(setTimeout(()=>{b(K=>K.filter(X=>X.phase!=="leaving"))},bi))},kA);return()=>{clearInterval(E),T.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,o]),n.jsxs(CA,{children:[n.jsx(Ih,{links:0,tone:"neutral",cornerTone:f?"risk":"default"}),n.jsx(Ph,{tone:"neutral"}),n.jsx(jA,{$riskActive:f,"aria-hidden":"true"}),n.jsxs(SA,{children:[n.jsx(MA,{children:n.jsx(dt,{mark:"circle",size:wA,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),n.jsx($A,{children:"Ultron"}),n.jsx(RA,{role:"status","aria-live":"polite",children:n.jsxs(LA,{children:[n.jsx(AA,{children:Vm[s]}),n.jsxs(TA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(IA,{children:a},"deck"):w.length>0&&n.jsx(EA,{"aria-label":"Live event feed",children:w.map(L=>{const T=xA(L.event.capability);return n.jsx(PA,{"data-phase":L.phase,"aria-hidden":L.phase==="leaving"||void 0,children:n.jsx(zA,{children:n.jsxs(OA,{"data-outcome":L.resolved?L.outcome:"pending",children:[n.jsxs(FA,{children:[n.jsx(DA,{"aria-hidden":"true",children:n.jsx(T,{size:16})}),n.jsxs(BA,{children:[n.jsx(VA,{children:L.event.capability}),n.jsx(GA,{children:L.event.title})]})]}),n.jsx(HA,{children:L.resolved?L.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(dt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(WA,{children:"Risk detected"})]}):L.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(dt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(qA,{children:"Action required"})]}):n.jsx(UA,{children:"No action needed"}):n.jsx(dt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},L.key)})},"feed")]})}const CA=p.div`
  /* Positioned + isolated so the decorative backdrop and glow layers (both
     absolute, inset 0) sit inside this scene, beneath the content above them. */
  position: relative;
  isolation: isolate;
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
`,jA=p.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transition: opacity 560ms var(--ease-out, ease-out);
  }

  /* Exact mirror of IntroBackdrop's quiet top-right secondary-surface wash. */
  &::before {
    background: radial-gradient(
      120% 90% at 0% 100%,
      var(--color-bg-secondary) 0%,
      transparent 55%
    );
    opacity: ${e=>e.$riskActive?0:1};
  }

  /* Risk state — tint the existing secondary-surface light toward orange while
     preserving the default gradient's geometry and strength. This reads as the
     slate wash changing colour, not as a second, stronger glow appearing. */
  &::after {
    background: radial-gradient(
      120% 90% at 0% 100%,
      color-mix(
        in srgb,
        var(--color-bg-secondary) 72%,
        var(--color-orange-content-tertiary) 28%
      ) 0%,
      transparent 55%
    );
    opacity: ${e=>e.$riskActive?1:0};
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after { transition: none; }
  }
`,zh=ke`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,SA=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${zh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MA=p.div`
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
`,$A=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Ev}
  color: var(--color-content-primary);
`,RA=p.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,NA=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,LA=p.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${NA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,Iv=ke`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,TA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Iv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,EA=p.div`
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
  animation: ${zh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,IA=p.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${zh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PA=p.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${bi}ms var(--ease-out, ease),
    opacity ${bi}ms var(--ease-out, ease),
    transform ${bi}ms var(--ease-out, ease);

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
    transition: opacity ${bi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,zA=p.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,OA=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  /* Glass rather than a flat fill, so the backdrop and glow behind the feed
     refract through each row. */
  ${Wn}
  border-radius: var(--radius-lg);
  /* The feed is an ambient, passive read-out — the rows recede at a quiet resting
     opacity and don't respond to the cursor (no hover brighten, no interaction).
     Unchanged by the glass: the treatment swaps the fill, not the presence. */
  opacity: 0.5;

  /* Risk signals carry a faint orange wash once resolved so they read a touch
     hotter than routine ones (the loader + routine states stay neutral). Mixed
     toward transparent rather than set opaque, or it would seal off the blur
     the rest of the card is built on. */
  &[data-outcome='risk'] {
    background: color-mix(in srgb, var(--color-orange-bg-tertiary) 60%, transparent);
  }
`,FA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,DA=p.span`
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
    /* A step up from the card's own orange wash, so the chip still reads as a
       chip against it. Derived from the semantic pair rather than named as a
       raw --Alloy-orange-150: raw palette values are fixed, so that one stayed
       a light beige on the dark surface. Mixing the theme's orange ink into the
       theme's orange surface moves the right way in both — it darkens the light
       wash and lightens the dark one. */
    background: color-mix(
      in srgb,
      var(--color-orange-content-tertiary) 18%,
      var(--color-orange-bg-tertiary)
    );
    color: var(--color-orange-content-tertiary);
  }
`,BA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,HA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;p.span`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;

  & > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-content-tertiary);
    animation: ${Iv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const WA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,UA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,qA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,VA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,GA=p.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,YA=5e3,KA=5,_l=320,QA=e=>e.status==="needs_approval"||e.status==="recommended";function ZA({threads:e,stageById:o,onAction:a,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:v,onClose:y}){const x=oc(),[w]=g.useState(()=>e.filter(QA).map((M,F)=>({t:M,index:F})).sort((M,F)=>_a[M.t.severity]-_a[F.t.severity]||M.index-F.index).slice(0,KA).map(({t:M})=>M.id)),[b,j]=g.useState(1),[_,$]=g.useState(new Set),[N,R]=g.useState(new Set),S=g.useRef(new Map);g.useEffect(()=>{if(b>=w.length)return;const M=setTimeout(()=>j(F=>F+1),YA);return()=>clearTimeout(M)},[b,w.length]),g.useEffect(()=>{const M=F=>{F.key==="Escape"&&y()};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[y]),g.useEffect(()=>{const M=S.current;return()=>{M.forEach(F=>clearTimeout(F))}},[]);const C=w.findIndex(M=>!_.has(M));g.useEffect(()=>{if(w.length>0&&C===-1){const M=setTimeout(y,260);return()=>clearTimeout(M)}},[C,w.length,y]);const P=Math.max(b,C+1);g.useEffect(()=>{w.slice(0,P).forEach(M=>v==null?void 0:v(M))},[P]);const L=(M,F)=>{R(W=>new Set(W).add(M.id));const V=setTimeout(()=>{R(W=>{const B=new Set(W);return B.delete(M.id),B}),$(W=>new Set(W).add(M.id)),S.current.delete(M.id),a(M.id,F)},_l);S.current.set(M.id,V)},T=w.length-_.size,E=n.jsxs(JA,{role:x?"dialog":"region","aria-modal":x||void 0,"aria-label":"New cases",$overlay:x,children:[n.jsxs(tT,{children:[n.jsx(on,{children:"Needs your decision"}),n.jsx(Io,{children:T}),n.jsx(nT,{}),n.jsx(Be,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:n.jsx(Po,{size:16})})]}),n.jsx(eT,{children:n.jsx(rT,{children:w.slice(0,P).map((M,F)=>{if(_.has(M))return null;const V=e.find(W=>W.id===M);return V?n.jsx(aT,{"data-exiting":N.has(M)||void 0,children:n.jsx(qN,{thread:V,stage:o[M]??0,expanded:F===C,onAction:(W,B)=>L(V,B),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(M),saved:f.includes(M)})},M):null})})})]});return x?lo.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(XA,{onClick:y,"aria-hidden":"true"}),E]}),document.body):E}const Pv=900,XA=p.div`
  position: fixed;
  inset: 0;
  z-index: ${Pv};
  background: color-mix(in srgb, var(--color-bg-primary) 55%, transparent);
  backdrop-filter: blur(18px) saturate(115%);
  -webkit-backdrop-filter: blur(18px) saturate(115%);
  animation: fadeIn var(--duration-base, 200ms) var(--ease-out, ease) both;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;

  ${e=>e.$overlay&&`
    position: fixed;
    inset: 0;
    z-index: ${Pv+1};
    /* The screen's own margin, plus whatever the hardware needs on top of it —
       the layer covers the status bar and home indicator, so both insets are the
       deck's to respect. */
    padding:
      calc(var(--space-4) + env(safe-area-inset-top))
      var(--space-4)
      calc(var(--space-4) + env(safe-area-inset-bottom));
  `}
`,eT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,tT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,nT=p.div`
  flex: 1;
`,rT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,oT=ke`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,aT=p.div`
  animation: ${oT} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${_l}ms var(--ease-out, ease),
    transform ${_l}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${_l}ms linear;
    &[data-exiting] { transform: none; }
  }
`,iT={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Gm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},sT=["new","working","done"],lT=280,cT=620;function dT({threads:e,stageById:o,section:a,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:v,onCompleteRun:y,onRefinement:x,onSaveWorkflow:w,pendingWorkflowIds:b,onToggleSaveWorkflow:j,savedWorkflowIds:_,onSend:$,replyingIds:N,onStop:R,onClose:S,onDetectEvent:C,onRevealNew:P,onRunCompleted:L,phoneGateThreadId:T=null,phoneGateCaptured:E=!1,onPhoneGateSubmit:M,onPhoneGateClose:F}){const[V,W]=g.useState(!1),B=()=>{V||(W(!0),window.setTimeout(()=>{W(!1),S()},lT))},[K,X]=g.useState(!1);g.useEffect(()=>{if(a!=="live"){X(!1);return}const ue=_e=>{if(_e.key!=="t"&&_e.key!=="T"||_e.metaKey||_e.ctrlKey||_e.altKey)return;const Ne=_e.target instanceof Element?_e.target:null;Ne&&Ne.closest('input, textarea, [contenteditable="true"]')||X(Le=>!Le)};return window.addEventListener("keydown",ue),()=>window.removeEventListener("keydown",ue)},[a]);const ae=(ue,_e)=>(ue.t.status==="analyzing"?1:0)-(_e.t.status==="analyzing"?1:0)||_a[ue.t.severity]-_a[_e.t.severity]||ue.index-_e.index,ce=e.map((ue,_e)=>({t:ue,index:_e})).filter(({t:ue})=>iT[a].includes(ue.status)).sort(ae).map(({t:ue})=>ue.id),[oe,Q]=g.useState(()=>h??null),D=g.useRef({}),G=g.useRef(null),A=ue=>{var _e;ue==="Other"&&((_e=G.current)==null||_e.focus()),x(ue)},z=g.useRef(null),ne=g.useRef(null),[U,ee]=g.useState(null),de=g.useRef(void 0);g.useEffect(()=>{var ue;if(de.current===void 0){de.current=h;return}!h||h===de.current||(de.current=h,Q(h),(ue=D.current[h])==null||ue.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const O=sT.includes(a),Y=O?h&&ce.includes(h)?h:ce[0]??null:null;g.useEffect(()=>{var et;const ue=z.current,_e=ne.current;if(!ue||!_e)return;const Le=((et=window.matchMedia)==null?void 0:et.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",Ue=160;let Ge=!0,ot=ue.scrollHeight;const Ee=()=>{Ge=ue.scrollHeight-ue.scrollTop-ue.clientHeight<=Ue};ue.addEventListener("scroll",Ee,{passive:!0});let Qe=0;const lt=()=>{Qe=performance.now()};ue.addEventListener("pointerdown",lt,{passive:!0});const bt=new ResizeObserver(()=>{const ut=ue.scrollHeight,Ot=performance.now()-Qe<500;ut>ot+1&&Ge&&!Ot&&ue.scrollTo({top:ut,behavior:Le}),ot=ut});return bt.observe(_e),()=>{ue.removeEventListener("scroll",Ee),ue.removeEventListener("pointerdown",lt),bt.disconnect()}},[Y,a]),g.useEffect(()=>{if(!O||!Y)return;const ue=z.current;if(!ue)return;const _e=()=>ue.scrollTo({top:ue.scrollHeight,behavior:"auto"}),Ne=requestAnimationFrame(_e),Le=[80,240,480].map(Ue=>window.setTimeout(_e,Ue));return()=>{cancelAnimationFrame(Ne),Le.forEach(clearTimeout)}},[Y,O]);const ie=Y?e.find(ue=>ue.id===Y)??null:null,xe=!!ie&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(ie.status)||B2(ie)),le=xe&&ie?ie:null,we=!(xe&&ie&&["needs_approval","recommended","unresolved","monitoring"].includes(ie.status))||!!(ie!=null&&ie.analysisResult),ye=O&&!!T&&Y===T,[Se,De]=g.useState(!1);return g.useEffect(()=>{if(!ye){De(!1);return}if(E){De(!0);return}const ue=window.setTimeout(()=>De(!0),cT);return()=>window.clearTimeout(ue)},[ye,E]),a==="live"?n.jsx(Ym,{$static:!0,children:n.jsx(_A,{onDetectEvent:C,deckActive:K,deck:K?n.jsx(ZA,{threads:e,stageById:o,onAction:v,onRefinement:A,onSaveWorkflow:w,onToggleSaveWorkflow:j,pendingWorkflowIds:b,savedWorkflowIds:_,onReveal:P,onClose:()=>X(!1)}):null})},"live"):n.jsxs(Ym,{$closing:V,children:[n.jsx(pT,{ref:z,children:O?n.jsx(Km,{ref:ne,children:Y===null?n.jsx(Qm,{role:"status",children:Gm[a]}):(()=>{const ue=e.find(Ee=>Ee.id===Y);if(!ue)return null;const _e=ue.status==="analyzing",Ne=ue.status==="resolved"||ue.status==="auto_resolved",Le=ue.status==="in_progress",Ue=ue.status==="needs_approval"||ue.status==="recommended",Ge=ue.status==="monitoring",ot=ue.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(xT,{children:n.jsx(Tm,{thread:ue,stage:o[ue.id]??0,expanded:Le?!1:we,detachActionable:xe,detachAnalyzing:_e,detachTrail:Ne||ot,onToggle:()=>{},onClose:B,onDecide:f,onAction:v,onRefinement:A,onSaveWorkflow:w},ue.id)}),ye?Se&&n.jsx(yT,{children:n.jsx(CN,{captured:E,onSubmit:Ee=>M==null?void 0:M(Ee),onDismiss:()=>F==null?void 0:F()})}):null,!ye&&(_e||Ue||Le||Ne||Ge||ot)&&n.jsx(XN,{thread:ue,outbound:l[ue.id]??[],chat:d[ue.id]??[],replying:N.includes(ue.id),analyzing:_e,footSlot:U,onCompleteRun:()=>y(ue.id),saveWorkflowFlagged:b.includes(ue.id)||_.includes(ue.id),actionCard:le&&le.id===ue.id?n.jsx(uv,{thread:le,stage:o[le.id]??0,onAction:v,onRefinement:A,onSaveWorkflow:w,saveIntent:b.includes(le.id),onToggleSaveWorkflow:j,saved:_.includes(le.id),savedConversationally:(d[le.id]??[]).some(Ee=>Ee.kind==="workflow_saved"),onSend:Ee=>$(le.id,Ee),replying:N.includes(le.id),onStop:()=>R(le.id),onOfferShown:()=>L==null?void 0:L(le.id)},`action-${le.id}`):void 0},ue.id)]})})()}):n.jsx(Km,{ref:ne,children:ce.length===0?n.jsx(Qm,{role:"status",children:Gm[a]}):ce.map(ue=>{const _e=e.find(Ne=>Ne.id===ue);return _e?n.jsx(vT,{ref:Ne=>{D.current[ue]=Ne},children:n.jsx(Tm,{thread:_e,stage:o[ue]??0,expanded:oe===ue,onToggle:()=>Q(Ne=>Ne===ue?null:ue),onDecide:f,onAction:v,onRefinement:x,onSaveWorkflow:w})},ue):null})})}),O&&Y&&ie&&!ye&&n.jsx(fT,{children:n.jsxs(mT,{children:[n.jsx(gT,{ref:ee}),ie.status==="analyzing"&&!s.includes(ie.id)&&n.jsx(KN,{thread:ie,onDecide:f}),n.jsx(cv,{ref:G,onSend:ue=>$(Y,ue),working:N.includes(Y),onStop:()=>R(Y),placeholder:qM(ie.status,N.includes(Y))},`composer-${Y}`)]})})]},"feed")}const uT=ke`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,hT=ke`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Ym=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;

  /* Cancel the desktop shell's ContentMain bottom padding for Ultron only: this
     page owns its full height and snaps the action dock / bottom fade to the
     very foot. Reclaim the 32px the padding carves off the content box, then
     pull the margin box back up by the same amount so it adds no scroll
     overflow. Desktop-only because only that shell carries the padding — on the
     mobile shell the same 32px made the page taller than the viewport, letting
     the whole app scroll under the sticky header. */
  @media (min-width: 768px) {
    height: calc(100% + var(--space-8));
    margin-bottom: calc(-1 * var(--space-8));
  }
  overflow: hidden;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
  transform-origin: 50% 30%;
  will-change: opacity, transform;

  ${e=>!e.$static&&!e.$closing&&Oe`
    animation: ${hT} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Oe`
    animation: ${uT} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* No top padding so the pinned event card sits flush at the top (0px); the
     sides + bottom keep the feed's reading inset. */
  padding: 0 var(--space-5) var(--space-5);
  scrollbar-gutter: stable;

  /* Mobile shell: a phone has no room to spend on a 20px gutter — pull the
     inset to 12px so the cards keep their measure. */
  @media (max-width: 767px) {
    padding: 0 var(--space-3) var(--space-3);
  }

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
`,fT=p.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);

  /* Mobile shell: the dock's screen-edge insets follow the scroller down to
     12px; the top keeps its full gap — it separates dock from feed, not dock
     from screen. */
  @media (max-width: 767px) {
    padding: var(--space-6) var(--space-3) var(--space-3);
  }
`,mT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,gT=p.div`
  display: flex;
  &:empty { display: none; }
`,Km=p.div`
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
`,vT=p.div`
  scroll-margin-top: var(--space-5);
`,xT=p.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--color-bg-primary);

  /* The pinned header reads as a neutral surface in every tone/state — the
     colored status fill belongs to the scrolling list cards, not the focused
     event header, so flatten any tonal background to the page surface here.
     It doesn't lift under the pointer either: the hover rise + shadow is a list
     row's "open me" affordance, and this card is already open and pinned (its
     toggle is a no-op), so the movement promised something it can't do. */
  & > div[data-tone] {
    background-color: var(--color-bg-primary);

    &:hover {
      transform: none;
      box-shadow: none;
    }
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
`,yT=p.div`
  display: flex;
  margin-top: var(--space-4);
`,Qm=p.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function wT({messages:e,replying:o,onSend:a}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,f=e.length===0,v=()=>{const y=s.trim();!y||o||(a(y),l(""))};return n.jsxs(bT,{children:[n.jsx(kT,{children:f?n.jsxs(_T,{children:[n.jsx(CT,{"aria-hidden":"true",children:n.jsx(dt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(jT,{children:"New page"}),n.jsx(ST,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(MT,{children:[e.map((y,x)=>n.jsx(Zm,{"data-from":y.role,children:n.jsx($T,{"data-from":y.role,children:y.text})},x)),o&&n.jsx(Zm,{"data-from":"ultron",children:n.jsxs(NT,{"aria-label":"Ultron is replying",children:[n.jsx(vu,{}),n.jsx(vu,{}),n.jsx(vu,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(LT,{children:n.jsxs(AT,{onSubmit:y=>{y.preventDefault(),v()},children:[n.jsx(TT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),v())}}),n.jsx(ET,{children:n.jsx(Sa,{state:h?"ready":"disabled-invalid",onSend:v})})]})})]})}const bT=p.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,kT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,_T=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,CT=p.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,jT=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,ST=p.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,MT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Zm=p.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,$T=p.div`
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
`,RT=ke`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,NT=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,vu=p.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${RT} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LT=p.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,AT=p.form`
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
`,TT=p.textarea`
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
`,ET=p.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,IT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Xm(e,o){const a=IT[e];return a?o==="done"?a.done:o==="new"?a.new:a.working:e}const PT=24,Jm=.25,zT=Tv-.03;function Oh({className:e}){return n.jsxs(OT,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(FT,{children:n.jsx(dt,{mark:"circle",size:PT,tone:"auto",state:"active"})}),"n"]})}const OT=p.span`
  ${Ev}
`,FT=p.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${qm}em;
  height: ${qm}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${Jm}em;
  margin-right: ${Jm+zT}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function DT({onNew:e}){return n.jsxs(BT,{children:[n.jsx(HT,{}),n.jsx(WT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(Kl,{size:16})})]})}const BT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,HT=p(Oh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,WT=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-6);
  height: var(--space-6);
  border-radius: var(--radius-md);
  /* Rests a step lighter than supporting text — it's a quiet affordance on the
     identity card, not a peer of the wordmark. Hover still takes it to primary,
     so dropping the resting tone widens that step rather than flattening it. */
  color: var(--color-content-tertiary);
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
`,UT=45;function qT({text:e,className:o}){const[a,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},UT);return()=>clearInterval(f)},[e]);const l=a>=e.length;return n.jsxs(VT,{className:o,children:[e.slice(0,a),!l&&n.jsx(YT,{"aria-hidden":"true",children:"|"})]})}const VT=p.span`
  white-space: nowrap;
`,GT=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,YT=p.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${GT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,xu=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function KT(){const e=g.useMemo(()=>["All",...Array.from(new Set(xu.map(l=>l.tag)))],[]),[o,a]=g.useState("All"),s=o==="All"?xu:xu.filter(l=>l.tag===o);return n.jsx(QT,{children:n.jsxs(ZT,{children:[n.jsxs(XT,{children:[n.jsx(dt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(JT,{children:[n.jsx(eE,{children:"Memory"}),n.jsx(tE,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(nE,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(rE,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>a(l),children:l},l))}),n.jsx(oE,{children:s.map((l,d)=>n.jsx(aE,{children:n.jsxs(iE,{children:[n.jsx(sE,{children:l.title}),n.jsx(lE,{children:l.detail})]})},d))})]})})}const QT=p.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,ZT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,XT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,JT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,eE=p.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,tE=p.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,nE=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,rE=p.button`
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
`,oE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,aE=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,iE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,sE=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,lE=p.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;p.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;p.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const Gu=[{id:"employees",label:"Employees",icon:n.jsx(eo,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(Mn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(sh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(No,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Ti,{size:16})}];p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;p.span`
  color: var(--color-content-secondary);
`;function cE({collectionId:e}){const o=Gu.find(a=>a.id===e)??Gu[0];return n.jsxs(dE,{children:[n.jsxs(uE,{children:[n.jsx(hE,{children:o.label}),n.jsx(Io,{children:"Account database"})]}),n.jsxs(pE,{role:"status",children:[n.jsx(fE,{"aria-hidden":"true",children:n.jsx(yg,{size:24})}),n.jsxs(mE,{children:[o.label," — demo stub"]}),n.jsxs(gE,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const dE=p.div`
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
`,uE=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,hE=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,pE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,fE=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,mE=p.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,gE=p.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function zv({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const vE="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",xE="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",yE="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",wE="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",bE="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",kE="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",_E="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",CE=560,Ov=320,Sr="cubic-bezier(0.22, 1, 0.36, 1)",Fv=140,Dv={landing:0,workplace:20,loading:40,questions:58},vi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:bg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:Lg,title:"1099",caption:"Independent contractors."},{id:"both",icon:kg,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:Mn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:_g,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:Ng,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Ci,title:"One location",caption:"A single site."},{id:"multi",icon:ch,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:sh,title:"Client sites",caption:"Out at client locations."}]}];function jE({onComplete:e}){const[o,a]=g.useState("landing"),[s,l]=g.useState({}),[d,h]=g.useState(!1),[f,v]=g.useState(!1),y=ic(),x=g.useRef(null),w=g.useCallback(L=>{x.current===null&&(v(!0),x.current=window.setTimeout(()=>{L(),v(!1),x.current=null},y?0:Ov))},[y]);g.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const b=()=>w(()=>{a("landing"),l({}),h(!1)}),j=()=>w(()=>a("workplace")),_=L=>{l(T=>({...T,...L})),h(!0),w(()=>a("loading"))},$=L=>{const T={...s,...L};if(l(T),T.companyWebsite){e(T);return}w(()=>a("questions"))},N=L=>e({...s,...L}),R=d?1:o==="landing"?0:.4,[S,C]=g.useState(!1),P=S;return n.jsxs(XE,{children:[n.jsx(Ih,{links:R}),n.jsx(Ph,{}),n.jsx(JE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:b,children:n.jsx(zv,{size:22})}),n.jsx(eI,{children:n.jsxs(tI,{children:[o!=="landing"&&n.jsx(nI,{children:n.jsx(Bv,{children:n.jsx(dt,{mark:P?"lines":"magnetic",size:Fv,tone:"auto",state:"active",motionSpeed:P?1.7:1,cellCount:Dv[o],"aria-label":"Ultron"})})}),n.jsxs(oI,{$exiting:f,children:[o==="landing"&&n.jsx(IE,{onNext:j}),o==="workplace"&&n.jsx(sc,{children:n.jsx(OE,{onAnswer:_})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(DE,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:$,onProcessingChange:C}),o==="questions"&&n.jsx(YE,{onComplete:N})]})]})})]})}const SE="Lead the work that matters.",ME="Show us your company and we'll set up the work.",$E=41e3,e0=[{name:"Levi's Stadium",src:vE},{name:"ProCare HR",src:xE},{name:"Florida Panthers",src:yE},{name:"Express Healthcare",src:wE},{name:"ModSquad",src:bE},{name:"Titan Medical Group",src:kE},{name:"United Staffing Solutions",src:_E}],t0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],RE=6e3;function NE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function LE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function AE(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.09-.026-3.23-1.234-3.26-4.883-.026-3.053 2.52-4.516 2.65-4.588-1.44-2.117-3.663-2.357-4.417-2.396-2.104-.152-3.87 1.166-4.596 1.166zm3-3.87c.65-.78 1.09-1.87.97-2.95-.94.04-2.07.63-2.75 1.4-.61.68-1.14 1.79-1 2.85 1.05.09 2.13-.53 2.78-1.3"})})}const TE=[{id:"google",label:"Continue with Google",mark:NE},{id:"microsoft",label:"Continue with Microsoft",mark:LE},{id:"apple",label:"Continue with Apple",mark:AE}];function EE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function IE({onNext:e}){const[o,a]=g.useState(""),[s,l]=g.useState(null),d=g.useRef(null);return g.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(iI,{children:[n.jsx(lI,{children:n.jsxs(cI,{children:[n.jsx(Bv,{children:n.jsx(dt,{mark:"magnetic",size:Fv,tone:"auto",state:"active",cellCount:Dv.landing,"aria-label":"Ultron"})}),n.jsx(DI,{children:SE}),n.jsxs(dI,{children:[n.jsx(BI,{children:ME}),n.jsxs(uI,{"aria-label":"Get started",children:[n.jsx(hI,{children:TE.map(h=>{const f=h.mark;return n.jsx(pI,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(f,{}),onClick:e,children:h.label},h.id)})}),n.jsx(fI,{"aria-hidden":"true",children:n.jsx(mI,{children:"or start with email"})}),n.jsxs(gI,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||EE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx($r,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(xI,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{a(h.target.value),s&&l(null)}})}),n.jsx(vI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(yI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(sI,{"aria-hidden":"true"}),n.jsx(PE,{})]})}function PE(){const[e,o]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%t0.length),RE);return()=>clearInterval(s)},[]);const a=t0[e];return n.jsx(wI,{children:n.jsxs(bI,{children:[n.jsx(zE,{}),n.jsxs(EI,{children:[n.jsx(II,{children:`“${a.quote}”`}),n.jsxs(PI,{children:[n.jsx(or,{name:a.name,src:a.photo,alt:a.name,color:a.avatarColor,size:"lg"}),n.jsxs(zI,{children:[n.jsx(OI,{children:a.name}),n.jsx(FI,{children:`${a.role} · ${a.org}`})]})]})]},e),n.jsxs(RI,{children:[n.jsx(NI,{children:"Trusted by frontline operators"}),n.jsxs(AI,{"aria-label":"Operators using Teambridge",children:[n.jsx(n0,{children:e0.map(s=>n.jsx(r0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(n0,{"aria-hidden":"true",children:e0.map(s=>n.jsx(r0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function zE(){const e=ZE($E,1600);return n.jsxs(kI,{children:[n.jsxs(_I,{children:[n.jsx(jI,{"aria-hidden":"true"}),n.jsx(SI,{children:"Ultron Index · Live"})]}),n.jsx(MI,{children:e.toLocaleString("en-US")}),n.jsx($I,{children:"pieces of work Ultron performed this week"})]})}function OE({onAnswer:e}){const[o,a]=g.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(KE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(lc,{children:"Where do you work?"}),n.jsx(UI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(Uv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(qv,{children:[n.jsx(AP,{"aria-hidden":"true",children:n.jsx(dh,{size:18})}),n.jsx(Vv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>a(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(Gv,{children:n.jsx(Sa,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(TP,{children:n.jsx(Yv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const yu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],FE=820;function DE({website:e,failedWebsite:o,onDone:a,onProcessingChange:s}){return e?n.jsx(HE,{website:e,onDone:a,onProcessingChange:s}):n.jsx(GE,{failedWebsite:o,onDone:a})}const BE=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function HE({website:e,onDone:o,onProcessingChange:a}){const{name:s,host:l}=QE(e),d=yu.length,[h,f]=g.useState(1),[v,y]=g.useState(!1),x=g.useRef(null),w=ic();g.useEffect(()=>{if(!v)return;const N=window.requestAnimationFrame(()=>{const R=x.current,S=R==null?void 0:R.closest("main");S?S.scrollTo({top:S.scrollHeight,behavior:w?"auto":"smooth"}):R==null||R.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame(N)},[v,w]),g.useEffect(()=>{a==null||a(!v)},[v,a]),g.useEffect(()=>()=>a==null?void 0:a(!1),[a]);const b=g.useMemo(()=>AM(e),[e]),j=g.useMemo(()=>BE.reduce((N,R)=>N+b[R].length,0),[b]),_=g.useCallback(()=>{v?o({}):h>=d?y(!0):f(N=>Math.min(N+1,d))},[h,v,d,o]);g.useEffect(()=>{const N=R=>{R.key.toLowerCase()==="t"&&(R.preventDefault(),_())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[_]);const $=yu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(sc,{$wide:!0,onClick:()=>{v||_()},children:[n.jsx(lc,{children:v?"Nearly there! Your free account is taking shape.":`${$}…`},v?"done":$),n.jsx(cc,{children:v?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(XI,{role:"status","aria-live":"polite",$complete:v,children:[n.jsxs(nP,{$running:!v,children:[n.jsx(dh,{size:14}),l,v&&n.jsxs(n.Fragment,{children:[n.jsx(rP,{"aria-hidden":"true",children:"·"}),n.jsxs(oP,{children:[n.jsx(xn,{size:13})," read ",j," signals"]})]})]}),n.jsx(JI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":v?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:v,children:yu.map((N,R)=>{const S=v||R+1<h?"done":R+1===h?"working":"pending";return n.jsx(eP,{"data-status":S,children:S!=="pending"&&n.jsx(tP,{$working:S==="working"})},N)})})]}),n.jsx(qE,{learned:b,host:l,completed:v?d:h-1,done:v}),v&&n.jsxs(n.Fragment,{children:[n.jsx(wP,{children:n.jsx(bP,{children:"Consider it handled."})}),n.jsx(_P,{children:n.jsx(Be,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(pg,{size:16}),children:"Looks good, continue"})}),n.jsx(CP,{children:n.jsx(Yv,{type:"button",onClick:()=>{f(1),y(!1)},children:"Start over"})}),n.jsx(jP,{ref:x,"aria-hidden":"true"})]})]})})}const WE={"Healthcare / Clinical Staffing":uh,"Skilled Trades / Construction Labor":th,"Warehouse / Logistics & Light Industrial":lh,"Security / Guarding Services":Vl,"Home Care / In-Home Support":$g,"Agriculture / Seasonal Labor":ih,"Hospitality / Events Staffing":Yl,"Call Center / BPO Staffing":ji},UE={Business:{icon:Ci,color:"blue"},Workforce:{icon:eo,color:"purple"},Operations:{icon:Tg,color:"orange"},Compliance:{icon:Ti,color:"green"}};function qE({learned:e,host:o,completed:a,done:s}){const{company:l}=e,d=a<1,[h,f]=g.useState(!1),v=WE[e.workforce_type]??ch;return n.jsxs(iP,{children:[n.jsxs(sP,{children:[n.jsx(lP,{children:n.jsxs(dP,{children:[n.jsx(uP,{"aria-hidden":"true",children:d?n.jsx(Kt,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(v,{size:20}),n.jsx(hP,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:y=>f(y.currentTarget.naturalWidth>=32),onError:()=>f(!1)})]})}),n.jsxs(pP,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Kt,{$w:"240px",$h:"1em"}),n.jsx(Kt,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(fP,{children:e.workforce_type}),n.jsx(mP,{children:l.name})]}),n.jsx(gP,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Kt,{$w:"110px",$h:"0.9em"}),n.jsx(Kt,{$w:"150px",$h:"0.9em"}),n.jsx(Kt,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(wu,{children:[n.jsx(Mn,{size:14}),n.jsxs(bu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(wu,{children:[n.jsx(Ci,{size:14}),n.jsxs(bu,{children:["Part of ",l.parent]})]}),n.jsxs(wu,{children:[n.jsx(eh,{size:14}),n.jsx(bu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((y,x)=>{const w=a<2,{icon:b,color:j}=UE[y.label]??{icon:Ci,color:"neutral"};return n.jsx(cP,{style:{"--group-i":w?x+1:x},children:w?n.jsxs(n.Fragment,{children:[n.jsx(o0,{"aria-hidden":"true",children:n.jsx(Kt,{$w:"20px",$h:"20px",$round:!0})}),n.jsxs(a0,{children:[n.jsx(i0,{as:"div",children:n.jsx(Kt,{$w:"112px",$h:"0.95em"})}),n.jsxs(s0,{children:[n.jsx(Kt,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Kt,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Kt,{$w:"64px",$h:"20px",$round:!0})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(o0,{"aria-hidden":"true",children:n.jsx(b,{size:20})}),n.jsxs(a0,{children:[n.jsx(i0,{children:y.label}),n.jsx(s0,{children:y.tags.map(_=>n.jsx(nr,{size:"sm",variant:"subtle",color:j,children:_},_))})]})]})},`${y.label}-${w?"loading":"ready"}`)})]}),n.jsx(vP,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(l0,{children:[n.jsx(Ag,{size:16}),"Configured for you"]}),n.jsx(xP,{children:e.configured.map(y=>n.jsxs(yP,{children:[n.jsx(an,{size:16}),y]},y))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(l0,{as:"div",children:[n.jsx(Kt,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Kt,{$w:"132px",$h:"0.95em"})]}),n.jsxs(aP,{children:[n.jsx(Kt,{$h:"0.85em",$w:"84%"}),n.jsx(Kt,{$h:"0.85em",$w:"72%"}),n.jsx(Kt,{$h:"0.85em",$w:"78%"}),n.jsx(Kt,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const VE=[{icon:uh,label:"Travel nurses"},{icon:Yl,label:"Event staff"},{icon:Vl,label:"Security guards"},{icon:lh,label:"Warehouse temps"}];function GE({failedWebsite:e,onDone:o}){const[a,s]=g.useState(""),l=a.trim().length>0,d=()=>{const h=a.trim();h&&o({workforceType:h})};return n.jsxs(sc,{children:[e&&n.jsx(kP,{children:"No problem — let's set it up together."}),n.jsx(lc,{children:"What workforce do you need help with?"}),n.jsx(cc,{children:"Say it in your own words — or grab one of these."}),n.jsx(qI,{children:VE.map(({icon:h,label:f})=>n.jsxs(VI,{type:"button",onClick:()=>o({workforceType:f}),children:[n.jsx(h,{size:16}),f]},f))}),n.jsx(Uv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(qv,{children:[n.jsx(Vv,{rows:1,value:a,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(Gv,{children:n.jsx(Sa,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function YE({onComplete:e}){const o=ic(),[a,s]=g.useState(0),l=g.useRef({}),d=vi[a],h=f=>{l.current={...l.current,[d.key]:f.title};const v=a+1;v>=vi.length?e(l.current):s(v)};return n.jsxs(sc,{children:[n.jsx(SP,{role:"progressbar","aria-valuemin":1,"aria-valuemax":vi.length,"aria-valuenow":a+1,"aria-label":`Question ${a+1} of ${vi.length}`,children:vi.map((f,v)=>n.jsx(MP,{"data-filled":v<=a||void 0},f.key))}),n.jsx(lc,{children:d.prompt}),n.jsx(cc,{children:d.sub}),n.jsx($P,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,v)=>{const y=f.icon;return n.jsxs(RP,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${v*70}ms`},onClick:()=>h(f),children:[n.jsx(Hv,{"aria-hidden":"true",children:n.jsx(y,{size:20})}),n.jsxs(NP,{children:[n.jsx(GI,{children:f.title}),n.jsx(YI,{children:f.caption})]})]},f.id)})})]},d.key)}function KE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const a=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(a).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function QE(e){const o=e.replace(/\s+/g,""),a=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(a).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function ZE(e,o){const a=ic(),[s,l]=g.useState(a?e:0);return g.useEffect(()=>{if(a){l(e);return}let d=0,h=null;const f=v=>{h===null&&(h=v);const y=Math.min(1,(v-h)/o),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,o,a]),s}function ic(){const[e,o]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let a;try{a=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=a.addEventListener)==null||l.call(a,"change",s),()=>{var d;return(d=a.removeEventListener)==null?void 0:d.call(a,"change",s)}},[]),e}const XE=p.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,JE=p.button`
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
`,eI=p.main`
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
`,tI=p.div`
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
  ${e=>e.$augment&&Oe`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,nI=p.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Bv=p.span`
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
`,rI=ke`
  from { opacity: 1; }
  to   { opacity: 0; }
`,oI=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Oe`
      animation: ${rI} ${Ov}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&Oe`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,aI=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,iI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${aI} 560ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sI=p.div`
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
`,lI=p.div`
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
`,cI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Fh=ke`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,dI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,uI=p.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,hI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,pI=p(Be)`
  && {
    width: 100%;
    ${Wn}
  }
`,fI=p.div`
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
`,mI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,gI=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,vI=p(Be)`
  && {
    width: 100%;
  }
`,xI=p(Kg)`
  && [class*='shell'] {
    ${Wn}
  }
  && input {
    background: transparent;
  }
`,yI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,wI=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

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
`,bI=p.div`
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
`,kI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,_I=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,CI=ke`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,jI=p.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${CI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,MI=p.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,$I=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,RI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,NI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,LI=ke`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,AI=p.div`
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
`,n0=p.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${LI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,r0=p.img`
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
`,TI=ke`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,EI=p.figure`
  ${Wn}
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
  animation: ${TI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,II=p.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,PI=p.figcaption`
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
`,zI=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,OI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,FI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,DI=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,BI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,HI=ke`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,sc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${HI} ${CE}ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lc=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,cc=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,WI=ke`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,UI=p(cc)`
  animation: ${WI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qI=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,VI=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Wn}
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
    ${Av}
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
`,Hv=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,GI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,YI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Wv=ke`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,KI=ke`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,QI=ke`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,ZI=ke`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,XI=p.div`
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
    opacity 400ms ${Sr} 950ms,
    max-height 400ms ${Sr} 950ms,
    margin-top 400ms ${Sr} 950ms;

  ${e=>e.$complete&&Oe`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,JI=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Oe`
    & > * > * {
      animation: ${ZI} 900ms ${Sr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,eP=p.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,tP=p.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Oe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${QI} ${FE+380}ms ${Sr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,nP=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,rP=p.span`
  color: var(--color-content-tertiary);
`,oP=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,Kt=p.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$w??"100%"};
  height: ${e=>e.$h??"0.9em"};
  border-radius: ${e=>e.$round?"var(--radius-full)":"var(--radius-sm)"};
  /* Keep the reading state present without letting it compete with the progress
     bar: a low-contrast, unhurried sheen across the translucent card surface. */
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-content-primary) 7%, transparent) 0%,
    color-mix(in srgb, var(--color-content-primary) 7%, transparent) 30%,
    color-mix(in srgb, var(--color-content-primary) 16%, transparent) 50%,
    color-mix(in srgb, var(--color-content-primary) 7%, transparent) 70%,
    color-mix(in srgb, var(--color-content-primary) 7%, transparent) 100%
  );
  background-size: 200% 100%;
  animation: ${KI} 2.2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 7%, transparent);
    animation: none;
  }
`,aP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,iP=p.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Fi=Oe`
  animation: ${Wv} var(--duration-base) ${Sr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sP=p.div`
  ${Wn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Fi}
`,lP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Fi}
`,cP=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Fi}
`,o0=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Same slot as the company's LeadMark above — the two read as one family of
     badge down the read-out, rather than the group rows carrying a smaller
     variant of it. The glyph scales with the box (16 → 20) to hold the lead
     mark's ratio; the tone stays one step quieter, which is what separates
     these rows from the lead. */
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  /* Half-opaque white rather than a solid token: the read-out sits on
     translucent glass, so letting the card through keeps the mark a lift in the
     surface instead of a patch laid over it. */
  background: rgb(255 255 255 / 0.5);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; }
`,a0=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`,dP=p.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,uP=p.span`
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
`,hP=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,pP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,fP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,mP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,gP=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,wu=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,bu=p.span`
  color: var(--color-content-primary);
`,vP=p.div`
  ${Wn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Fi}
`,i0=p.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,s0=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,l0=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,xP=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,yP=p.li`
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
`,wP=p.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Fi}
`,bP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,kP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,_P=p.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,CP=p.div`
  display: flex;
  justify-content: center;
`,jP=p.div`
  width: 100%;
  height: 0;
`,SP=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,MP=p.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,$P=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,RP=p.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Wn}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Wv} var(--duration-base) ${Sr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Hv} {
    margin-bottom: 0;
  }

  &:hover {
    ${Av}
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
`,NP=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Uv=p.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Wn}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,qv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,LP=ke`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,AP=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${LP} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Vv=p.textarea`
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
`,Gv=p(ah)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,TP=p.div`
  margin-top: var(--space-3);
`,Yv=p.button`
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
`;function EP({onEnterApp:e}){return n.jsx(jE,{onComplete:o=>e==null?void 0:e(o)})}const IP="48px",PP="240px",c0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",zP=p.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?PP:IP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Oe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Oe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,OP=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,FP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,DP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,BP=p.button`
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
`,HP=p.div`
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
`,WP=p.span`
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
`,d0=p.div`
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
`,ku=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,UP="var(--gradient-ai)",Kv=p.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Oe`
      background: var(--color-bg-primary, white);
      box-shadow: ${c0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Oe`
      background: ${UP};
      box-shadow: ${c0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Qv=p.button`
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
`,Zv=p.span`
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
`,Xv=p.div`
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
`,qP=p.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,_u=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;p.span`
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
`;const VP=p.button`
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
`,GP=p.div`
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
`,YP=p.span`
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
`;p.span`
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
`;p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function Cu({item:e,isExpanded:o,showNewBadge:a,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(Kv,{$isActive:l,$isAi:s,children:n.jsxs(Qv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(Xv,{children:[e.hasUnread&&n.jsx(qP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(Zv,{children:e.label}),o&&a&&n.jsx(Io,{variant:"primary",children:"New"})]})})}function KP({items:e,toolItems:o=[],bottomItems:a=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}){const[x,w]=g.useState(!1);return n.jsx(zP,{$isExpanded:x,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(OP,{$isExpanded:x,children:[n.jsxs(FP,{children:[n.jsxs(BP,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[n.jsx(HP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&n.jsxs(n.Fragment,{children:[n.jsx(WP,{children:s.name}),n.jsx(d0,{children:n.jsx(am,{})})]})]}),n.jsx(ku,{children:e.map(b=>n.jsx(Cu,{item:b,isExpanded:x,isAi:b.id===y},b.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(_u,{}),n.jsx(ku,{children:o.map(b=>n.jsx(Cu,{item:b,isExpanded:x,showNewBadge:b.id===v,isAi:b.id===y},b.id))})]})]}),n.jsxs(DP,{children:[a.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(_u,{}),n.jsx(ku,{children:a.map(b=>n.jsx(Cu,{item:b,isExpanded:x,isAi:b.id===y},b.id))})]}),n.jsx(_u,{}),n.jsx(Kv,{$isActive:!1,children:n.jsxs(Qv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:x?void 0:"Settings",children:[n.jsx(Xv,{children:n.jsx(q2,{})}),x&&n.jsx(Zv,{children:"Settings"})]})}),n.jsxs(VP,{$isExpanded:x,onClick:h,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[n.jsx(GP,{$color:l.avatarColor,children:l.initials}),x&&n.jsxs(n.Fragment,{children:[n.jsx(YP,{children:l.name}),n.jsx(d0,{children:n.jsx(am,{})})]})]})]})]})})}const QP=270,ZP=p.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${e=>e.$isVisible?`${e.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${e=>e.$isResizing?"none":"width 200ms ease"};
`,XP=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,JP=p.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,ez=p.h2`
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
`,tz=p.div`
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
`,nz=p.button`
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
`,rz=p.div`
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
`,oz=p.button`
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
`;p.div`
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
`;const az=p.span`
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
`,iz=p.div`
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
`,sz=ke`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,lz=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${sz} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Jv=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,cz=ke`
  0%, 100% {
    box-shadow:
      0 0 0 2px rgb(255 255 255 / 92%),
      0 0 24px rgb(255 255 255 / 28%);
  }
  50% {
    box-shadow:
      0 0 0 2px rgb(255 255 255 / 100%),
      0 0 0 5px color-mix(in srgb, var(--color-orange-content-tertiary, #f97316) 30%, transparent),
      0 0 38px color-mix(in srgb, var(--color-orange-content-tertiary, #f97316) 46%, transparent);
  }
`,dz=ke`
  0% {
    opacity: 0.72;
    box-shadow: 0 0 0 0 color-mix(
      in srgb,
      var(--color-orange-content-tertiary, #f97316) 72%,
      white
    );
  }
  72%, 100% {
    opacity: 0;
    box-shadow: 0 0 0 14px transparent;
  }
`,uz=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,hz=ke`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,pz=ke`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,Yu=420,fz=180,mz=Yu-60,gz=p.button`
  appearance: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: default;
  background: rgb(2 6 12 / 78%);
  backdrop-filter: blur(2px);
  animation: ${Jv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vz=p.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,xz=p.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${cz} 2.4s ease-in-out infinite;

  /* The measured mobile rectangle already includes the row's selected-state
     inset. Remove the copied button's own outer margin inside the portal so its
     icon, label, radius, width, and height land exactly over the original. */
  ${e=>e.$mobile&&Oe`
    & > button {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  `}

  /* Two evenly spreading rings keep the surfaced event gently radiating until
     the user opens it. Shadow spread moves every edge by the same distance, so
     the row itself never scales or stretches. */
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    animation: ${dz} 2.4s ease-out infinite;
  }

  &::after {
    animation-delay: 1.2s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::before,
    &::after {
      display: none;
    }
  }
`,yz=p.div`
  position: fixed;
  z-index: 1002;
  display: flex;
  flex-direction: ${e=>e.$placement==="above"?"column":"row"};
  align-items: center;
  gap: ${e=>e.$placement==="above"?"var(--space-1, 4px)":"var(--space-2, 8px)"};
  width: max-content;
  max-width: min(360px, calc(100vw - 32px));
  /* The sketched arrow leads in from the left and the note sits beside it, so
     the two align on the arrow's shaft rather than on their boxes. */
  align-items: center;
  transform: ${e=>e.$placement==="above"?"translateY(-100%)":"translateY(-50%)"};
  text-align: ${e=>e.$placement==="above"?"center":"left"};
  pointer-events: none;
  /* Sits on the dimmed scrim in both themes, so the white stays literal — a
     theme-flipping token would go dark-on-dark. */
  color: #fff;
  /* Handwritten rather than the UI sans — this is an aside to the operator, not
     part of the interface. Handwriting faces run small and loose for their point
     size, so it takes a step up the scale and a tighter line height to hold
     together against the sans around it. */
  font-family: ${uz};
  font-size: var(--text-lg, 18px);
  font-weight: var(--font-weight-bold, 700);
  line-height: var(--line-height-snug, 1.25);
  letter-spacing: 0.01em;
  text-wrap: balance;
  text-shadow: 0 2px 12px rgb(0 0 0 / 65%);
  /* The container only positions — the arrow and the note carry their own
     entrances (see SpotlightArrow / SpotlightNote), so the translateY that
     centres this on the row stays put and never fights their transforms. */

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ex=p.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${hz} ${Yu}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${fz}ms;
    animation-delay: ${Yu-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,u0=p.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${pz} 420ms ${mz}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Jv} 200ms both;
    transform: none;
  }
`,h0=p.button`
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
`,wz=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Oe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,bz=p.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,kz=p.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_z=p.div`
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
`,Cz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,jz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,Sz=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,tx=p.div`
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
`;p.button`
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
`;function Mz(){return n.jsxs(ex,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function $z(){return n.jsxs(ex,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function nx({prompt:e,onDismiss:o,placement:a="right",children:s}){const l=g.useRef(null),[d,h]=g.useState(null);return g.useLayoutEffect(()=>{const f=l.current;if(!f)return;let v=null;const y=()=>{const _=(f.firstElementChild??f).getBoundingClientRect();h({left:_.left,top:_.top,width:_.width,height:_.height})},x=performance.now(),w=j=>{y(),j-x<360?v=window.requestAnimationFrame(w):v=null};v=window.requestAnimationFrame(w);const b=new ResizeObserver(y);return b.observe(f),window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{v!==null&&window.cancelAnimationFrame(v),b.disconnect(),window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(vz,{ref:l,"aria-hidden":"true",children:s}),d&&lo.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(gz,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(xz,{$mobile:a==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(yz,{$placement:a,role:"status","aria-live":"polite",style:a==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:a==="above"?n.jsxs(n.Fragment,{children:[n.jsx(u0,{children:e}),n.jsx($z,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(Mz,{}),n.jsx(u0,{children:e})]})})]}),document.body)]})}function rx(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function Rz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Dh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function Nz({item:e}){return n.jsx($n,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(tx,{children:e.icon??n.jsx(rx,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Dh})}function Lz({group:e}){const[o,a]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-f.length;return n.jsxs(wz,{$outlined:e.outlined,children:[n.jsxs(oz,{onClick:()=>a(y=>!y),"aria-expanded":o,children:[n.jsx(iz,{children:o?n.jsx(Hn,{size:16}):n.jsx(Rn,{size:16})}),n.jsx(az,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(lz,{children:[f.map(y=>{const x=n.jsx($n,{label:n.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:n.jsx(tx,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:Dh});return y.spotlightPrompt?n.jsx(nx,{prompt:y.spotlightPrompt,onDismiss:y.spotlightDismiss,children:x},y.id):n.jsx(g.Fragment,{children:x},y.id)}),v>0&&n.jsxs(h0,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(h0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function Az({heading:e,isVisible:o,menuEntries:a=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:v,headerSlot:y,bodyContent:x,width:w=QP,onWidthChange:b,minWidth:j=220,maxWidth:_=520}){const $=x!==void 0,N=g.useRef(null),[R,S]=g.useState(!1);return g.useEffect(()=>{if(!R||!b)return;const C=N.current;if(!C)return;const P=C.getBoundingClientRect().left,L=M=>{const F=Math.min(_,Math.max(j,M.clientX-P));b(F)},T=()=>S(!1);window.addEventListener("mousemove",L),window.addEventListener("mouseup",T);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",T),document.body.style.userSelect=E,document.body.style.cursor=""}},[R,b,j,_]),n.jsxs(ZP,{ref:N,$isVisible:o,$width:w,$isResizing:R,"aria-label":"Secondary navigation",children:[n.jsxs(XP,{children:[(e||y)&&n.jsxs(JP,{children:[n.jsx(ez,{children:e}),y]}),d&&!$&&n.jsxs(tz,{children:[n.jsx(Yg,{size:"sm",placeholder:"Search...",value:h,onChange:C=>f==null?void 0:f(C.target.value)}),n.jsx(nz,{onClick:v,"aria-label":"Filter",children:n.jsx(Rz,{})})]})]}),$?x:n.jsxs(rz,{children:[s,a.map(C=>C.type==="single"?n.jsx(Nz,{item:C.item},C.item.id):C.type==="group"?n.jsx(Lz,{group:C.group},C.group.id):C.type==="divider"?n.jsx(jz,{},C.id):n.jsx(bz,{children:C.label.label},C.label.id))]}),l.length>0&&n.jsxs(kz,{children:[n.jsx(Cz,{}),l.map(C=>n.jsx($n,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:n.jsx(Sz,{children:C.icon??n.jsx(rx,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Dh},C.id))]}),b&&o&&n.jsx(_z,{$isResizing:R,onMouseDown:C=>{C.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const Tz=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,Ez=p.div`
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
`,ox=p.div`
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
`,Iz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Pz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function zz(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function p0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function f0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Oz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Fz({heading:e,actions:o=[],showActivityButton:a=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const v=o.filter(w=>w.variant==="secondary"),y=o.filter(w=>w.variant==="primary"),x=Ah("(prefers-color-scheme: dark)");return n.jsxs(Tz,{$noBorder:l,children:[n.jsx(Ez,{children:typeof e=="string"?n.jsx(ox,{children:e}):e}),n.jsxs(Iz,{children:[n.jsxs(Pz,{children:[n.jsx(Be,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:n.jsx(zz,{})}),v.map(w=>n.jsx(Be,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(f0,{}),trailingArtwork:n.jsx(p0,{}),onClick:w.onClick,children:w.label},w.id)),y.map(w=>n.jsx(Be,{variant:"primary",size:"sm",leadingArtwork:n.jsx(f0,{}),trailingArtwork:n.jsx(p0,{}),onClick:w.onClick,children:w.label},w.id))]}),a&&n.jsx(Be,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(Oz,{})}),s&&n.jsx(ng,{dark:x,onClick:h,"aria-label":"Ponder AI"})]})]})}const Dz=p.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,Bz=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,Hz=p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  /* No left margin — the pane sits flush against the secondary nav, and only
     lifts off the top, right and bottom window edges. */
  margin: var(--space-3, 12px) var(--space-3, 12px) var(--space-3, 12px) 0;
  border-radius: var(--radius-lg, 12px);
  overflow: hidden;
`,Wz=p.main`
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
`,m0="tb:secondary-nav-width",g0=270,v0=220,x0=520;function Uz({items:e,toolItems:o,bottomItems:a,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y,secNavHeading:x,menuEntries:w,menuHeader:b,pageEntries:j,showSearch:_,searchValue:$,onSearchChange:N,onFilterClick:R,headerSlot:S,bodyContent:C,heading:P,actions:L,showActivityButton:T,showPonderButton:E,noBorder:M,onActivityClick:F,onPonderClick:V,onDotsClick:W,children:B,showSecondaryNav:K=!0,showTopNav:X=!0}){const[ae,ce]=g.useState(()=>{if(typeof window>"u")return g0;const oe=window.localStorage.getItem(m0),Q=oe?parseInt(oe,10):NaN;return Number.isFinite(Q)?Math.min(x0,Math.max(v0,Q)):g0});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(m0,String(ae))},[ae]),n.jsxs(Dz,{children:[n.jsx(KP,{items:e,toolItems:o,bottomItems:a,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}),n.jsxs(Bz,{children:[K&&n.jsx(Az,{heading:x,menuEntries:w,menuHeader:b,pageEntries:j,isVisible:!0,showSearch:_,searchValue:$,onSearchChange:N,onFilterClick:R,headerSlot:S,bodyContent:C,width:ae,onWidthChange:ce,minWidth:v0,maxWidth:x0}),n.jsxs(Hz,{children:[X&&n.jsx(Fz,{heading:P,actions:L,showActivityButton:T,showPonderButton:E,noBorder:M,onActivityClick:F,onPonderClick:V,onDotsClick:W}),n.jsx(Wz,{children:B})]})]})]})}const y0=2;function qz({deadZonePx:e=8,topThresholdPx:o=20,target:a}={}){const[s,l]=g.useState(null),d=g.useRef(new WeakMap);return g.useEffect(()=>{const h=d.current,f=x=>x===document||x===window?document.scrollingElement:x,v=x=>{const w=f(x);return w?{y:w.scrollTop,max:w.scrollHeight-w.clientHeight}:{y:0,max:0}},y=x=>{const w=a??x.target;if(!w)return;const b=v(w),j=h.get(w);if(!j){h.set(w,b);return}const _=b.y-j.y;if(Math.abs(_)<e)return;if(_<0&&b.y>=b.max-y0&&j.max-b.max>=-_-y0){h.set(w,b);return}_>0&&b.y>o?l("down"):_<0&&l("up"),h.set(w,b)};if(a)return a.addEventListener("scroll",y,{passive:!0}),()=>a.removeEventListener("scroll",y);if(!(typeof document>"u"))return document.addEventListener("scroll",y,{passive:!0,capture:!0}),()=>document.removeEventListener("scroll",y,{capture:!0})},[e,o,a]),s}const Vz=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
  /* Even insets — the caret sits in from the trailing edge by the same amount
     the label sits in from the leading one. The row's own 4px gap already sets
     the label off the hamburger, so the leading inset doesn't have to. */
  padding: 0 var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-content-primary, #151515);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  /* Matches the hamburger's 36px square, so the two sit on one line in the row. */
  height: 36px;
  box-sizing: border-box;

  background: ${e=>e.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,Gz=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,Yz=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function w0({label:e,trailingSlot:o,isOpen:a,onClick:s,ariaLabel:l}){return n.jsxs(Vz,{type:"button",$active:a,onClick:s,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":l,children:[n.jsx(Gz,{children:e}),o,n.jsx(Yz,{children:n.jsx(Hn,{size:14})})]})}const ax=48,Kz=`calc(${ax+1}px + env(safe-area-inset-top))`,Qz=p.header`
  position: sticky;
  top: 0;
  /* Keep the selector and its unread count visible during the guided event
     spotlight. The spotlight scrim sits at 1000; once the unread event is
     opened (or the sheet closes), the header returns to its normal shell layer. */
  z-index: ${e=>e.$foreground?1003:800};
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  /* The shell is a flex column, not a scroller, so a transform alone slides the
     header out of sight while its box stays in flow — stranding a blank strip
     the height of the header above the page. Take that box back as it leaves, on
     the same curve, so the page rises with the header instead of behind it. */
  margin-bottom: ${e=>e.$hidden?`calc(-1 * ${Kz})`:"0px"};
  transition:
    transform 180ms ease-out,
    margin-bottom 180ms ease-out;
`,Zz=p.div`
  height: ${ax}px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,Xz=p.button`
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
`,Jz=p.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,eO=p(Oh)`
  font-size: var(--text-lg, 1.125rem);
`,tO=p(Io)`
  min-width: 20px;
  height: 20px;
  padding-inline: 6px;
`,nO=p.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function rO({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const oO=g.forwardRef(function({primaryLabel:o,secondaryLabel:a,tertiaryLabel:s,openOverlay:l,hidden:d,unreadEventCount:h=0,onHamburgerClick:f,onSecondaryClick:v,onTertiaryClick:y},x){return n.jsx(Qz,{ref:x,$hidden:d,$foreground:h>0&&l==="secondary",children:n.jsxs(Zz,{children:[n.jsx(Xz,{onClick:f,"aria-label":"Open navigation",children:n.jsx(rO,{size:18})}),n.jsxs(Jz,{children:[n.jsx(w0,{label:a??(o==="Ultron"?n.jsx(eO,{}):o),trailingSlot:h>0?n.jsx(tO,{variant:"warning","aria-hidden":"true",children:h>99?"99+":h}):void 0,isOpen:l==="secondary",onClick:v,ariaLabel:h>0?`Choose a section, ${h} new unread ${h===1?"event":"events"}`:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(nO,{"aria-hidden":"true",children:"›"}),n.jsx(w0,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),aO=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,iO=p.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${aO} 160ms ease-out;
`;function sO({onDismiss:e}){return g.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=a}},[e]),n.jsx(iO,{onClick:e,"aria-hidden":"true"})}const lO=ke`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,cO=p.div`
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
  animation: ${lO} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,dO=p.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,uO=p.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,hO=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,pO=p.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,fO=p.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function ix({title:e,children:o,ariaLabel:a,titleAction:s}){return n.jsxs(cO,{role:"dialog","aria-modal":"true","aria-label":a??(typeof e=="string"?e:void 0),children:[n.jsx(dO,{children:n.jsx(uO,{"aria-hidden":"true"})}),e&&n.jsxs(hO,{children:[n.jsx(pO,{children:e}),s]}),n.jsx(fO,{children:o})]})}const Bh=p.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,mO=p.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,zl=p.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  /* Inset from the sheet's edges so the rounded active/hover background reads as
     a pill rather than a full-bleed band clipped by the sheet.

     The width has to stay explicit: all:unset leaves the button intrinsically
     sized, so it shrink-wraps its label rather than filling the row. Subtracting
     the margins keeps the total back at 100% — a plain width:100% alongside them
     would overflow by 16px. (Grouped rows sit inside a plain div, not the flex
     list, so align-self:stretch wouldn't reach them either.)

     The horizontal padding drops by the same 8px the margin adds, so the text
     still sits 20px from the sheet edge and stays aligned with GroupLabel above
     it; the indented variant likewise still totals 44px. */
  width: calc(100% - var(--space-2, 8px) * 2);
  margin: 0 var(--space-2, 8px);
  padding: var(--space-3, 12px);
  padding-left: ${e=>e.$indent?"calc(var(--space-3, 12px) + 24px)":"var(--space-3, 12px)"};
  border-radius: var(--radius-md, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: ${e=>e.$disabled?"default":"pointer"};
  opacity: ${e=>e.$disabled?.32:1};
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${e=>e.$active?600:400};
  background: ${e=>e.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: ${e=>e.$disabled?"transparent":"var(--color-bg-tertiary, #eceef1)"};
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,b0=p.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Ol=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,xa=p.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function gO({moduleLabel:e,entries:o,onSelect:a,onHome:s,onNewPage:l,spotlightEnabled:d=!0}){const h=e==="Ultron",f=h&&s?n.jsx(vO,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),a()},children:n.jsx(k0,{})}):n.jsx(k0,{});return n.jsx(ix,{title:h?f:e,ariaLabel:`${e} sections`,titleAction:h&&l?n.jsx(xO,{type:"button","aria-label":"New page",onClick:()=>{l(),a()},children:n.jsx(Kl,{size:16})}):void 0,children:n.jsx(Bh,{children:o.map(v=>{if(v.type==="single"){const x=v.item;return n.jsxs(zl,{$active:x.isActive,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),a()},"aria-pressed":!!x.isActive,children:[n.jsx(Ol,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(an,{size:16})})]},x.id)}if(v.type!=="group")return null;const y=v.group;return n.jsxs("div",{children:[n.jsx(mO,{children:y.label}),y.children.map(x=>{const w=n.jsxs(zl,{$active:x.isActive,$indent:!0,onClick:()=>{var b;(b=x.onClick)==null||b.call(x),a()},"aria-pressed":!!x.isActive,children:[n.jsx(Ol,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(an,{size:16})})]});return d&&x.spotlightPrompt?n.jsx(nx,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:w},x.id):n.jsx("div",{children:w},x.id)})]},y.id)})})})}const k0=p(Oh)`
  font-size: var(--text-lg, 1.125rem);
`,Cl="44px",vO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  /* all: unset resets box-sizing to content-box, which would add the padding
     below on top of the minimum instead of inside it. */
  box-sizing: border-box;
  min-height: ${Cl};
  margin: 0 calc(var(--space-2, 8px) * -1);
  padding: var(--space-1, 4px) var(--space-2, 8px);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:active {
    opacity: 0.6;
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,xO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Cl};
  height: ${Cl};
  /* Half the growth clawed back off the trailing edge, so the pencil stays on
     the same optical inset it sat on at 32px while the target around it grows
     outward into the row's padding. */
  margin-right: calc((${Cl} - var(--space-8, 32px)) / -2);
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-tertiary, #87919f);
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,yO=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,wO=p.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bO=p.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function kO({personas:e,activeId:o,onSelect:a}){return n.jsx(ix,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Bh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(zl,{$active:l,onClick:()=>a(s.id),"aria-pressed":l,children:[n.jsx(xa,{as:"span",children:n.jsxs(yO,{children:[n.jsx(wO,{children:s.name}),n.jsx(bO,{children:s.role})]})}),l&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(an,{size:16})})]},s.id)})})})}const _O=ke`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,CO=p.aside`
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
  animation: ${_O} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,jO=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,SO=p.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,MO=p.button`
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
`,$O=p.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,RO=60;function NO({title:e,onDismiss:o,children:a}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const h=v=>{const y=v.touches[0];l.current={x:y.clientX,y:y.clientY}},f=v=>{if(!l.current)return;const y=v.changedTouches[0],x=y.clientX-l.current.x,w=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(w)<RO&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[o]),n.jsxs(CO,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(jO,{children:[n.jsx(SO,{children:e??"Navigation"}),n.jsx(MO,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Li,{size:18})})]}),n.jsx($O,{children:a})]})}const LO=p.span`
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
`,ju=p(zl)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function AO({activeId:e,groups:o,user:a,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(NO,{title:"Navigation",onDismiss:h,children:n.jsxs(Bh,{children:[o.map((f,v)=>n.jsxs("div",{children:[v>0&&n.jsx(b0,{"aria-hidden":"true"}),f.items.map(y=>{const x=y.id===e;return n.jsxs(ju,{$active:x,$disabled:y.disabled,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),d(y.id),h()},"aria-pressed":x,"aria-disabled":y.disabled||void 0,children:[n.jsx(Ol,{children:y.icon}),n.jsx(xa,{children:y.label}),x&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(an,{size:16})})]},y.id)})]},f.id)),n.jsx(b0,{"aria-hidden":"true"}),n.jsxs(ju,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Ol,{children:n.jsx(q2,{})}),n.jsx(xa,{children:"Settings"})]}),n.jsxs(ju,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${a.name}`,children:[n.jsx(LO,{$color:a.avatarColor,"aria-hidden":"true",children:a.initials}),n.jsx(xa,{children:"Account"})]})]})})}const _0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],TO=340,EO=p.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,IO=p.main`
  flex: 1 1 auto;
  min-width: 0;
  /* Stretch the page to the shell's remaining height. Pages size themselves
     with percentage heights (e.g. the welcome thread's Root), which don't
     resolve against a flex item without a definite height — so pass the height
     down through flex instead. Short pages fill the viewport (no white gap
     under their backdrop). */
  display: flex;
  flex-direction: column;
  /* And no taller: without this the automatic minimum size pins this column to
     its content, so a long thread would push the page past the viewport instead
     of scrolling inside itself. */
  min-height: 0;

  & > * {
    flex: 1 1 auto;
    min-width: 0;
  }
`;function PO(e){const{activeId:o,selectedPersonaId:a,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:v,onSettingsClick:y,onMobileNavigate:x,onSelectPersona:w,onHome:b,onNewPage:j,openSecondaryNav:_,unreadEventCount:$,children:N}=e,[R,S]=g.useState(null),[C,P]=g.useState(!1),L=qz({deadZonePx:8,topThresholdPx:20}),T=R===null&&L==="down",E=g.useMemo(()=>{if(!a)return null;const W=_0.find(B=>B.id===a);return(W==null?void 0:W.name)??null},[a]),M=()=>S(null),F=W=>S(W);g.useEffect(()=>{if(!_){P(!1);return}P(!1),S("secondary");const W=window.setTimeout(()=>{P(!0)},TO);return()=>window.clearTimeout(W)},[_]);const V=R!==null;return n.jsxs(EO,{children:[n.jsx(oO,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:E,openOverlay:R,hidden:T,unreadEventCount:$,onHamburgerClick:()=>F("drawer"),onSecondaryClick:()=>{F(h.length>0?"secondary":"drawer")},onTertiaryClick:E?()=>F("persona"):void 0}),n.jsx(IO,{children:N}),V&&n.jsx(sO,{onDismiss:M}),R==="secondary"&&n.jsx(gO,{moduleLabel:l,entries:h,onSelect:M,onHome:b,onNewPage:j,spotlightEnabled:C}),R==="persona"&&n.jsx(kO,{personas:_0,activeId:a,onSelect:W=>{w(W),M()}}),R==="drawer"&&n.jsx(AO,{activeId:o,groups:s,user:f,onUserClick:v,onSettingsClick:y,onSelectModule:W=>x(W),onDismiss:M})]})}function zO(e){if(oc()&&e.mobileNav){const a=e.mobileNav;return n.jsx(PO,{activeId:a.activeId,secActiveId:a.secActiveId,activePageId:a.activePageId,selectedPersonaId:a.selectedPersonaId,moduleGroups:a.moduleGroups,primaryLabel:a.primaryLabel,secondaryLabel:a.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:a.onMobileNavigate,onSelectPersona:a.onSelectPersona,onHome:a.onHome,onNewPage:a.onNewPage,openSecondaryNav:a.openSecondaryNav,unreadEventCount:a.unreadEventCount,children:e.children})}return n.jsx(Uz,{...e})}const OO="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",FO="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",DO=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],BO=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],HO={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},WO=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],UO=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],qO=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function VO(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let a=Math.imul(o^o>>>15,1|o);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function sx(e){let o=2166136261;for(let a=0;a<e.length;a++)o^=e.charCodeAt(a),o=Math.imul(o,16777619);return o>>>0}function GO(e){const o=BO.find(a=>a.match.test(e));return o?o.profile:HO}function lx(e,o){const a=GO(e),s=VO(sx(e||"teambridge")^o),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<o;){const f=`${l(WO)} ${l(UO)}`;if(h.has(f))continue;h.add(f);const v=s()<.16;d.push({name:f,role:l(a.roles),location:l(a.locations),tenure:l(qO),credential:l(a.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const cx=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],dx=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],YO="Team coverage";function KO(e){var o;return((o=cx.find(a=>a.match.test(e)))==null?void 0:o.shapes)??dx}function C0(e,o="Saturday"){const a=lx(e,8),[s,l,d,h]=a,f=4+sx(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${f} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const QO=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],j0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ux=["6a–2p","2p–10p","10p–6a"],ZO=[4,3,3,4,4,3,3],XO=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],S0={bands:ux,perDay:ZO};function JO(e){var o;return e?((o=XO.find(a=>a.match.test(e)))==null?void 0:o.shape)??S0:S0}function Ku(e,o){var y;const a=lx(e,12),{bands:s,perDay:l}=JO(o);let d=0;const h=QO.map((x,w)=>{const b=[];for(let j=0;j<l[w];j++){const _=a[d%a.length].name.split(" ")[0];d++,b.push({time:s[j%s.length],who:_})}return{label:x,shifts:b}}),f=hx(h);f>=0&&(h[f].shifts[0]={...h[f].shifts[0],who:"Open",flag:"open"});const v=(y=h[1])!=null&&y.shifts.length?1:h.findIndex(x=>x.shifts.length);return v>=0&&v!==f&&(h[v].shifts[0]={...h[v].shifts[0],flag:"watch"}),h}function eF(e){const o=cx.find(d=>d.match.test(e)),a=(o==null?void 0:o.shapes[0])??dx[0],l=Ku(e,a).map((d,h)=>{const f=d.shifts.slice(0,3);for(;f.length<3;){const v=f.length;f.push({time:ux[v],who:`Coverage ${h+1}-${v+1}`})}return{...d,shifts:f}});return{label:(o==null?void 0:o.label)??YO,shape:"Full-week shift coverage",week:l}}function hx(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let a=e.length-1;a>=0;a--)if(e[a].shifts.length)return a;return-1}function M0(e){const o=hx(e);return o>=0?j0[o]:j0[5]}const tF=1100,nF=440,px=4,fx=4,mx=150,rF=Math.ceil(mx/px)*fx,Su=320,oF=720,Mu=2e3,aF=950,Hh=249,gx=68,Wh=229,vx=47,$0=Hh-gx,R0=Wh-vx,iF=8,Uh=84,Ri=81,Dl=48,N0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],sF=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],lF="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",cF='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',L0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",A0="Time for a test run, so you can see how I work? Let's simulate a last minute call out.";function dF(e,o){const a=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:a.length?[{label:"What I settled on",bullets:a}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function uF(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Uh-Ri} rows`,blocks:[{label:"Held for you, none dropped",bullets:sF.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Ri} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function hF(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Dl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function pF(e,o,a,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},xx(a,s),yx(o)]}function fF(e,o,a,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},xx(a,s),yx(o)]}function xx(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function yx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function mF(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function gF(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function wx(e){if(!e)return null;const o=e.trim().replace(/\s+/g,"");if(!o)return null;const a=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(a).hostname}catch{}return s.replace(/^www\./,"")||null}function $u(e){const o=wx(e);return o?(o.split(".")[0]||o).split(/[-_]/).map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(" ")||o:null}function T0(e){return e.includes("	")||e.trim().includes(`
`)}function vF(e){var l;const o=e.trim().split(/\s+/),a=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(a+s).toUpperCase()}function xF(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function yF({text:e}){const o=Math.max(0,e.length-rF);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(a,s)=>n.jsx(nD,{children:a},o+s))]})}function E0({active:e,open:o,closeLabel:a,onClose:s,onScrollToEnd:l,showScrollCue:d=!1,onInsetChange:h,children:f}){const v=e&&o,y=g.useRef(null);g.useEffect(()=>{const w=y.current;if(!v||!w||!h)return;const b=()=>h(w.getBoundingClientRect().height);b();const j=new ResizeObserver(b);return j.observe(w),()=>{j.disconnect(),h(0)}},[v,h]);const x=n.jsxs(DF,{ref:y,$open:o,children:[v&&d&&l&&n.jsx(BF,{type:"button","aria-label":"Scroll to the end of the conversation",onClick:l,children:n.jsx(Hn,{size:18})}),n.jsxs(HF,{$open:o,children:[v&&n.jsx(WF,{type:"button","aria-label":a,onClick:s,children:n.jsx(Po,{size:18})}),f]})]});return v&&typeof document<"u"?lo.createPortal(x,document.body):x}const wF={};function bF({active:e=!0,answers:o=wF,onContinued:a,onSetupComplete:s}){const l=oc(),[d,h]=g.useState([]),[f,v]=g.useState(""),[y,x]=g.useState([]),[w,b]=g.useState(null),[j,_]=g.useState("roster"),[$,N]=g.useState(!1),[R,S]=g.useState(!1),[C,P]=g.useState(null),[L,T]=g.useState(null),[E,M]=g.useState(null),[F,V]=g.useState(null),W=g.useRef(null),[B,K]=g.useState(0),[X,ae]=g.useState("delivering"),[ce,oe]=g.useState(0),[Q,D]=g.useState(-1),[G,A]=g.useState(""),[z,ne]=g.useState(!1),[U]=g.useState(()=>{var J;return typeof window<"u"&&!!((J=window.matchMedia)!=null&&J.call(window,"(prefers-reduced-motion: reduce)").matches)}),[ee,de]=g.useState(()=>{var J;return typeof window<"u"&&!!((J=window.matchMedia)!=null&&J.call(window,"(max-width: 600px)").matches)}),[O,Y]=g.useState({roster:!1,schedule:!1}),ie=J=>Y(ve=>({...ve,[J]:!0})),xe=j==="roster"?O.roster:j==="schedule"?O.schedule:!0,le=ee&&j!=="done"&&!xe,we=g.useRef([]),ye=g.useRef(null),Se=g.useRef(null),De=g.useRef(null),ue=g.useRef(null),[_e,Ne]=g.useState(0),Le=()=>{const J=ue.current;ot.current=!0,J==null||J.scrollTo({top:J.scrollHeight,behavior:"smooth"})},[Ue,Ge]=g.useState(!0),ot=g.useRef(!0),Ee=J=>{const ve=J.scrollHeight-J.scrollTop-J.clientHeight<=iF;ot.current=ve,Ge(ve)},Qe=g.useMemo(()=>{var J;return((J=o.workforceType)==null?void 0:J.trim())||$u(o.companyWebsite)||""},[o]),lt=g.useMemo(()=>KO(Qe),[Qe]),bt=g.useMemo(()=>eF(Qe),[Qe]),et=g.useMemo(()=>{const J=$u(o.companyWebsite),$e=[{kind:"text",text:`Welcome to your ${J?`${J} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return $e.push({kind:"text",text:lF}),$e.push({kind:"rosterCta"}),$e},[o]),ut=(J,ve)=>{we.current.push(window.setTimeout(ve,J))};g.useEffect(()=>()=>{we.current.forEach(J=>window.clearTimeout(J)),ye.current&&window.clearTimeout(ye.current)},[]);const Ot=g.useRef(!1);g.useEffect(()=>{j!=="done"||Ot.current||(Ot.current=!0,s==null||s())},[j,s]);const Ct=g.useRef(null),Un=J=>{Ct.current===null&&(Ct.current=window.requestAnimationFrame(()=>{Ct.current=null;const ve=W.current;if(!ve)return;const $e=window.matchMedia("(max-width: 600px)").matches?R0:$0,Je=Math.min($e,J.scrollHeight-J.clientHeight)||$e,Fe=Math.min(1,Math.max(0,J.scrollTop/Je));ve.style.setProperty("--morph",Fe.toFixed(4))}))};g.useEffect(()=>()=>{Ct.current!==null&&window.cancelAnimationFrame(Ct.current)},[]),g.useEffect(()=>{const J=ue.current;if(!J)return;const ve=J.firstElementChild,$e=()=>{if(!ve||J.clientHeight===0)return;const Fe=window.matchMedia("(max-width: 600px)").matches?R0:$0,Ft=ve.getBoundingClientRect().height-J.clientHeight,tn=Math.max(0,Fe-Ft);K(ht=>Math.abs(ht-tn)>1?tn:ht)};$e();const Je=new ResizeObserver($e);return Je.observe(J,{box:"border-box"}),ve&&Je.observe(ve,{box:"border-box"}),window.addEventListener("resize",$e),()=>{Je.disconnect(),window.removeEventListener("resize",$e)}},[_e]),g.useEffect(()=>{const J=ue.current;!J||!ot.current||(J.scrollTop=J.scrollHeight)},[B]),g.useEffect(()=>{var $e;const J=($e=window.matchMedia)==null?void 0:$e.call(window,"(max-width: 600px)");if(!J)return;const ve=()=>de(J.matches);return ve(),J.addEventListener("change",ve),()=>J.removeEventListener("change",ve)},[]);const uo=J=>{if(P({file:J,state:"uploading",progress:8}),U){P({file:J,state:"uploading",progress:92});return}ut(180,()=>P({file:J,state:"uploading",progress:38})),ut(460,()=>P({file:J,state:"uploading",progress:74})),ut(780,()=>P({file:J,state:"uploading",progress:92}))},Rr=J=>{if(T({file:J,state:"uploading",progress:8}),U){T({file:J,state:"complete",progress:100});return}ut(180,()=>T({file:J,state:"uploading",progress:38})),ut(460,()=>T({file:J,state:"uploading",progress:74})),ut(780,()=>T({file:J,state:"complete",progress:100}))};g.useEffect(()=>{if(U){oe(et.length),D(-1),ae("ready");return}const J=[];let ve=null;const $e=(Fe,Ft)=>{J.push(window.setTimeout(Ft,Fe))},Je=Fe=>{if(Fe>=et.length){ne(!1),ae("ready");return}ne(!0),$e(nF,()=>{ne(!1),D(Fe);const Ft=et[Fe];if(Ft.kind!=="text"){$e(oF,()=>{oe(Fe+1),D(-1),$e(Su,()=>Je(Fe+1))});return}A("");const tn=Ft.text;let ht=0;ve=window.setInterval(()=>{ht=Math.min(tn.length,ht+fx),A(tn.slice(0,ht)),ht>=tn.length&&(ve&&window.clearInterval(ve),ve=null,$e(Su,()=>{oe(Fe+1),D(-1),A(""),$e(Su,()=>Je(Fe+1))}))},px)})};return ae("delivering"),Je(0),()=>{J.forEach(Fe=>window.clearTimeout(Fe)),ve&&window.clearInterval(ve)}},[et,U]),g.useEffect(()=>{e&&ot.current&&Le()},[e,d,w,X,ce,Q,G,z,_e]);const Ie=(f.trim().length>0||y.length>0)&&w===null,at=J=>{const ve=Array.from(J,$e=>$e.name);x($e=>[...$e,...ve.filter(Je=>!$e.includes(Je))])},yt=J=>x(ve=>ve.filter($e=>$e!==J)),me=(J,ve={})=>{const $e=U?300:ve.workingMs??tF,Je=U?200:aF;b(ve.workingLabel??"");let Fe=0;const Ft=()=>{var An;ye.current&&(window.clearTimeout(ye.current),ye.current=null);const tn=J[Fe];if(!tn)return;const ht=Fe===J.length-1;if(Fe+=1,h(Wi=>[...Wi,tn]),ht){b(null),Se.current=null,(An=ve.then)==null||An.call(ve);return}b(""),ye.current=window.setTimeout(Ft,Je)};Se.current=Ft,ye.current=window.setTimeout(Ft,$e)},He=()=>{var J;ee&&((J=Se.current)==null||J.call(Se))},qe=(J,ve=[])=>{d.some($e=>$e.role==="operator")||a==null||a(),h($e=>[...$e,{role:"operator",text:J,...ve.length?{attachments:ve}:{}}])},St=(J,ve)=>{N(!1),S(!0),ie("roster"),ve&&uo(ve),me([{role:"ultron",activity:uF(J),text:`Got it — read ${J}: ${Uh} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ri} people in. ${L0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Mu,then:()=>_("schedule")})},mt=()=>{N(!0),S(!0),ie("roster"),me([{role:"ultron",activity:hF(Qe),text:`Done — I spun up ${Dl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:L0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Mu,then:()=>_("schedule")})},Nn=J=>{const ve=Ku(Qe,J);M({problems:C0(Qe,M0(ve)),week:ve}),V(J)},ct=J=>{ie("schedule"),J.cardFile&&Rr(J.cardFile);const ve=Ku(Qe,J.shape),$e=C0(Qe,M0(ve));M({problems:$e,week:ve}),V(J.shape??null);const Je=ve.reduce((ht,An)=>ht+An.shifts.length,0),Fe=ve.filter(ht=>ht.shifts.length>0).length,Ft=J.fileName?`Read ${J.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${J.shape.toLowerCase()}. Here's what's in it.`,tn=J.fileName?pF(J.fileName,$e.length,Je,Fe):fF(J.shape.toLowerCase(),$e.length,Je,Fe);me([{role:"ultron",activity:tn,text:Ft},{role:"ultron",text:"",card:"week"},{role:"ultron",text:A0}],{workingLabel:J.fileName?"Turning it into shifts…":"Building your week…",workingMs:Mu,then:()=>_("done")})},Di=()=>{ie("schedule"),qe("Skip the schedule for now"),me([{role:"ultron",text:`No problem — we’ll skip the schedule for now. You can add it anytime. Your setup is ready. ${A0}`}],{workingLabel:"Skipping the schedule for now…",then:()=>_("done")})},Bi=(J,ve=[])=>{if(!J&&ve.length===0||w!==null)return;if(qe(J,ve),j==="roster"){ve.length>0?St(ve[0]):T0(J)?St("your pasted roster"):me([{role:"ultron",activity:mF("roster"),text:cF}]);return}if(j==="schedule"){ve.length>0?ct({fileName:ve[0]}):T0(J)?ct({fileName:"your pasted schedule"}):ct({shape:J});return}const $e=d.filter(Je=>Je.role==="ultron").length;me([{role:"ultron",activity:gF(),text:$h(J,$e)}])},Oo=()=>{const J=f.trim();!J&&y.length===0||w!==null||(Bi(J,y),v(""),x([]))},Hi=J=>{if(!J||J.length===0||j!=="roster"||w!==null)return;const ve=Array.from(J),$e=ve.map(Je=>Je.name);qe("",$e),St($e[0],{name:ve[0].name,type:ve[0].type,size:ve[0].size})},La=J=>{if(!J||J.length===0||j!=="schedule"||w!==null)return;const ve=Array.from(J),$e=ve.map(Je=>Je.name);qe("",$e),ct({fileName:$e[0],cardFile:{name:ve[0].name,type:ve[0].type,size:ve[0].size}})},ho=w!==null?[]:j==="roster"?[{icon:eo,label:"No roster handy? Use sample teammates",mobileLabel:"Use sample teammates",mobileCta:!0,onTap:()=>{qe("Use sample teammates"),mt()}}]:j==="schedule"?[...lt.map(J=>({icon:Mn,label:J,onTap:()=>{qe(J),ct({shape:J})}})),{label:"Skip for now",onTap:Di,secondary:!0,mobileCta:!0}]:[],Ln=l?ho.find(J=>J.mobileCta):void 0,Fo=Ln?ho.filter(J=>J!==Ln):ho,Nr=j!=="done"&&ho.length>0?n.jsxs(YD,{children:[Fo.length>0&&n.jsx(GD,{"aria-label":j==="schedule"?"Schedule options":"Suggestions",children:Fo.map(({icon:J,label:ve,onTap:$e,secondary:Je})=>n.jsxs(W0,{type:"button",$browseSized:!0,$secondary:Je,onClick:$e,children:[J&&n.jsx(J,{size:14}),ve]},ve))}),Ln&&n.jsx(KD,{type:"button",variant:"secondary",size:"sm",onClick:Ln.onTap,children:Ln.mobileLabel??Ln.label})]}):null,dc=j==="roster"?"Attach your roster, or ask Ultron anything…":j==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…";return n.jsxs(SF,{children:[!l&&n.jsxs(n.Fragment,{children:[n.jsx(Ih,{links:1}),n.jsx(Ph,{})]}),n.jsx(MF,{ref:W,style:{"--morph":0},children:n.jsxs($F,{children:[n.jsxs(RF,{role:"img","aria-label":"Ultron",children:[n.jsx(I0,{"aria-hidden":"true",children:n.jsx(dt,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(I0,{$compact:!0,"aria-hidden":"true",children:n.jsx(dt,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(NF,{children:[n.jsx(LF,{children:"Welcome"}),n.jsx(AF,{children:"Finish your setup, right in the chat"})]})]})}),n.jsxs(TF,{ref:ue,onScroll:J=>{Un(J.currentTarget),Ee(J.currentTarget)},children:[n.jsxs(rD,{$bottomInset:_e,children:[n.jsx(ll,{"data-from":"ultron",children:n.jsxs(Ru,{children:[(Q>=0||ce>0)&&n.jsx(z0,{children:n.jsx(El,{milestones:dF($u(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),et.slice(0,Q>=0?Q+1:ce).map((J,ve)=>{if(J.kind==="rosterCta"){const Je=j==="roster"&&!R;return n.jsx(g.Fragment,{children:n.jsx(P0,{children:n.jsx(E0,{active:e&&j==="roster",open:le&&j==="roster",closeLabel:"Close roster uploader",onClose:()=>ie("roster"),onScrollToEnd:Le,showScrollCue:!Ue,onInsetChange:Ne,children:R?j==="roster"?C?n.jsx(sl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:C.state,progress:C.progress,file:C.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(cl,{children:[n.jsx(dl,{"aria-hidden":"true",children:n.jsx(eo,{size:16})}),n.jsxs(ul,{children:[n.jsx(hl,{children:"Roster"}),n.jsx(pl,{children:w||($?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(fl,{"aria-hidden":"true",children:n.jsx(F0,{})})]}):n.jsxs(cl,{$done:!0,children:[n.jsx(dl,{"aria-hidden":"true",children:n.jsx(Lu,{size:16})}),n.jsxs(ul,{children:[n.jsx(hl,{children:"Roster"}),n.jsx(pl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(fl,{"aria-hidden":"true",children:n.jsx(xn,{size:18})})]}):n.jsxs(jx,{children:[Je&&!C&&n.jsx(UF,{"aria-hidden":"true",children:n.jsx(qF,{children:[...N0,...N0].map((Fe,Ft)=>n.jsx(VF,{children:n.jsx("img",{src:Fe.photo,alt:""})},`${Fe.name}-${Ft}`))})}),n.jsx(sl,{"data-roster-flow":Je&&!C?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(C==null?void 0:C.state)??"empty",progress:(C==null?void 0:C.progress)??0,file:(C==null?void 0:C.file)??null,disabled:w!==null&&!C,footerSlot:Je&&(X==="ready"||le)?Nr:void 0,onFileSelect:Fe=>Hi([Fe]),onClear:()=>{}})]})})})},`beat-${ve}`)}const $e=ve===Q;return n.jsx(O0,{"data-from":"ultron",children:$e?n.jsx(yF,{text:G}):J.text},`beat-${ve}`)}),z&&n.jsx(eD,{children:n.jsx(H0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),d.map((J,ve)=>{const $e=J.activity?n.jsx(z0,{children:n.jsx(El,{milestones:J.activity,collapsed:!0,hideActions:!0})}):null;if(J.card)return n.jsx(ll,{"data-from":"ultron",children:n.jsxs(Ru,{children:[$e,n.jsx(P0,{$pop:J.card==="week",children:J.card==="roster"?n.jsx(CF,{sample:$}):J.card==="scheduleCta"?n.jsx(E0,{active:e&&j==="schedule",open:le&&j==="schedule",closeLabel:"Close schedule uploader",onClose:()=>ie("schedule"),onScrollToEnd:Le,showScrollCue:!Ue,onInsetChange:Ne,children:j==="schedule"?L?n.jsx(sl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:L.state,progress:L.progress,file:L.file,onFileSelect:()=>{},onClear:()=>{}}):w!==null?n.jsx(PF,{children:n.jsxs(cl,{children:[n.jsx(dl,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})}),n.jsxs(ul,{children:[n.jsx(hl,{children:"Schedule"}),n.jsx(pl,{children:w||"Building your week…"})]}),n.jsx(fl,{"aria-hidden":"true",children:n.jsx(F0,{})})]})}):n.jsxs(FF,{children:[n.jsx(YF,{role:"img","aria-label":`${bt.label}: ${bt.shape}`,children:n.jsx(KF,{children:bt.week.map((Fe,Ft)=>{const tn=bt.week.slice(0,Ft).reduce((ht,An)=>ht+An.shifts.length,0);return n.jsxs(QF,{children:[n.jsx(ZF,{children:Fe.label.slice(0,1)}),Fe.shifts.length?Fe.shifts.map((ht,An)=>n.jsx(XF,{$sequence:tn+An,$flag:ht.flag},`${ht.time}-${An}`)):n.jsx(JF,{})]},Fe.label)})})}),n.jsx(sl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:Nr,onFileSelect:Fe=>La([Fe]),onClear:()=>{}})]}):n.jsxs(cl,{$done:!0,children:[n.jsx(dl,{"aria-hidden":"true",children:n.jsx(Lu,{size:16})}),n.jsxs(ul,{children:[n.jsx(hl,{children:"Schedule"}),n.jsx(pl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(fl,{"aria-hidden":"true",children:n.jsx(xn,{size:18})})]})}):E?n.jsxs(n.Fragment,{children:[n.jsx(jF,{problems:E.problems,week:E.week}),n.jsx(VD,{"aria-label":"Try another schedule",children:lt.map(Fe=>n.jsxs(W0,{type:"button",$active:Fe===F,"aria-pressed":Fe===F,onClick:()=>Nn(Fe),children:[n.jsx(Mn,{size:14}),Fe]},Fe))})]}):null})]})},ve);const Je=n.jsxs(eB,{"data-from":J.role,children:[J.text&&n.jsx(O0,{"data-from":J.role,children:J.text}),J.attachments&&n.jsx(tB,{children:J.attachments.map(Fe=>n.jsxs(U0,{children:[n.jsx(oo,{size:14}),Fe]},Fe))})]});return n.jsx(ll,{"data-from":J.role,children:$e?n.jsxs(Ru,{children:[$e,Je]}):Je},ve)}),w!==null&&n.jsx(ll,{"data-from":"ultron",children:n.jsx(FD,{type:"button",onClick:He,disabled:!ee,"aria-label":w?`${w} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(OD,{children:[n.jsx(H0,{"aria-hidden":"true",children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),w&&n.jsx(BD,{role:"status","aria-live":"polite",children:w})]})})}),n.jsx("div",{ref:De})]}),n.jsx(EF,{style:{height:B},"aria-hidden":"true"})]}),X==="ready"&&!le&&n.jsxs(HD,{children:[n.jsx(WD,{role:"img","aria-label":"Ultron","aria-hidden":w!==null,children:n.jsx(UD,{"aria-hidden":"true",children:n.jsx(qD,{$show:w===null,children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),n.jsxs(QD,{onSubmit:J=>{J.preventDefault(),Oo()},children:[y.length>0&&n.jsx(XD,{"aria-label":"Files to send",children:y.map(J=>n.jsxs(U0,{children:[n.jsx(oo,{size:14}),J,n.jsx(JD,{type:"button","aria-label":`Remove ${J}`,onClick:()=>yt(J),children:n.jsx(Po,{size:12})})]},J))}),n.jsxs(ZD,{children:[n.jsx(q0,{children:n.jsx(Ig,{state:"idle",onSelect:at})}),n.jsx(nB,{rows:1,value:f,placeholder:dc,"aria-label":"Message Ultron",inputMode:"text",autoComplete:"off",onChange:J=>v(J.target.value),onKeyDown:J=>{J.key==="Enter"&&!J.shiftKey&&(J.preventDefault(),Oo())},onPaste:J=>{var $e;const ve=($e=J.clipboardData)==null?void 0:$e.files;ve&&ve.length>0&&(J.preventDefault(),at(ve))}}),n.jsx(q0,{children:n.jsx(Sa,{state:Ie?"ready":"disabled-invalid",onSend:Oo})})]})]})]})]})}const kF={"Registered Nurse":{short:"RN",color:"blue"},"Charge Nurse":{short:"Charge RN",color:"pink"},"Licensed Practical Nurse":{short:"LPN",color:"azure"},"Licensed Vocational Nurse":{short:"LVN",color:"azure"},"Certified Nursing Assistant":{short:"CNA",color:"green"},RN:{short:"RN",color:"blue"},LPN:{short:"LPN",color:"azure"},CNA:{short:"CNA",color:"green"},Caregiver:{short:"Caregiver",color:"matcha"},"Med Aide":{short:"Med Aide",color:"purple"}};function _F(e){return kF[e]??{short:e,color:"neutral"}}function CF({sample:e}){const[o,a]=g.useState(!0),s=DO.slice(0,6),l=(e?Dl:Ri)-s.length;return n.jsxs(Mx,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(aD,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-people",onClick:()=>a(d=>!d),children:[e?n.jsx(iD,{children:n.jsxs(sD,{children:[Dl," sample teammates, ready to run a full week"]})}):n.jsxs(lD,{children:[n.jsxs(cD,{children:[Ri," ",n.jsxs(dD,{children:["/",Uh]})]}),n.jsxs(uD,{children:[n.jsx(xn,{size:16})," imported clean"]})]}),n.jsx($x,{$open:o,"aria-hidden":"true",children:n.jsx(Hn,{size:16})})]}),o&&n.jsxs(hD,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[s.map((d,h)=>{const f=_F(d.role);return n.jsxs(pD,{$i:h,children:[n.jsxs(fD,{"aria-hidden":"true",children:[vF(d.name),n.jsx("img",{src:xF(h),alt:"",loading:"lazy",onError:v=>{v.currentTarget.style.display="none"}})]}),n.jsxs(mD,{children:[n.jsx(gD,{children:d.name}),n.jsxs(vD,{children:[d.location," · ",d.tenure]})]}),n.jsx(nr,{size:"sm",variant:"subtle",color:f.color,children:f.short}),e&&n.jsx(nr,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},d.name)}),n.jsx(xD,{children:e?`+ ${l} more · every one tagged “Sample”`:`+ ${l} more imported clean`})]})]})}function jF({problems:e,week:o}){const[a,s]=g.useState(!1),l=o.map((f,v)=>o.slice(0,v).reduce((y,x)=>y+x.shifts.length,0)),d=o.filter(f=>f.shifts.length>0).length,h=o.reduce((f,v)=>f+v.shifts.length,0);return n.jsxs(Mx,{"aria-label":"Your week",children:[n.jsxs(CD,{children:[n.jsxs(SD,{children:[n.jsxs(D0,{children:[n.jsx(B0,{children:d})," days"]}),n.jsx(MD,{"aria-hidden":"true",children:"·"}),n.jsxs(D0,{children:[n.jsx(B0,{children:h})," shifts"]})]}),n.jsxs(jD,{type:"button","aria-expanded":a,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(f=>!f),children:[n.jsx(yD,{"aria-hidden":"true",children:n.jsx(Ml,{size:15})}),n.jsx($x,{$open:a,"aria-hidden":"true",children:n.jsx(Hn,{size:16})})]})]}),a&&n.jsx(bD,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((f,v)=>n.jsxs(kD,{children:[n.jsx($D,{$kind:f.kind,"aria-hidden":"true",children:f.kind==="missing"?n.jsx(Mn,{size:15}):n.jsx(Ml,{size:15})}),n.jsxs(_D,{children:[n.jsxs(RD,{children:[f.worker," · ",f.role]}),n.jsx(ND,{children:f.detail})]})]},`${f.worker}-${v}`))}),n.jsx(LD,{children:n.jsx(AD,{role:"table","aria-label":"Next week's shifts",children:o.map((f,v)=>n.jsxs(TD,{role:"column",children:[n.jsx(ED,{children:f.label}),f.shifts.map((y,x)=>n.jsxs(ID,{$flag:y.flag,$sequence:l[v]+x,children:[n.jsx(PD,{children:y.time}),n.jsx(zD,{children:y.who})]},`${f.label}-${x}`))]},f.label))})})]})}const SF=p.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  /* Grow as well as measure. On the mobile shell this page's ancestors take
     their height from flex rather than from a definite value, so the percentage
     above falls back to content height and the backdrop would stop at the last
     message instead of covering the viewport. Growing fills the column whatever
     the parent's height came from; on desktop the percentage already resolves,
     the free space is zero, and this changes nothing. */
  flex: 1 1 auto;
  min-height: 0;

  /* The mobile shell's content column has no bottom padding to cancel, so the
     bleed above would just hang 32px past the viewport as stray scroll. */
  @media (max-width: 767px) {
    height: 100%;
    margin-bottom: 0;
  }
  overflow: hidden;
  background: var(--color-bg-primary);
`,bx="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",kx=Oe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${bx};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,_x=e=>Oe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${bx}, transparent);
  pointer-events: none;
`,MF=p.header`
  /* An overlay, not a row in the column: the thread scrolls the full height of
     the page behind it and reserves the hero's height as its own top padding
     (see Thread). Taking the header out of flow is what makes the morph smooth —
     in flow, every size change reflowed the scroller, shunted the content and
     clamped the scroll position. */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;
  pointer-events: none;
  /* The hero end of the morph, and the declared floor for it: the scroll handler
     writes this variable on the element, and every rule below is a calc() that
     reads it — one invalid term drops the whole property, so it must never be
     unset, including on the first paint before any scroll has happened. */
  --morph: 0;

  /* The glass bar arrives with the collapse, on the same scroll-driven value: at
     the very top the content's first line sits exactly at the hero's lower edge,
     so there is nothing behind the header and it floats on the bare scene; from
     the first scrolled pixel there is, and the frost fades in as the prose slides
     under it. No transition — --morph is already continuous, and easing it here
     would only lag the scroll. Squared so the tint stays out of the way through
     the early part of the collapse, where the content is still below the edge. */
  &::before {
    ${kx}
    opacity: calc(var(--morph) * var(--morph));
  }
  &::after {
    ${_x("down")}
    opacity: calc(var(--morph) * var(--morph));
  }
`,At=(e,o)=>`calc(${e} * (1 - var(--morph)) + ${o} * var(--morph))`,Mr=(e,o)=>At(`${e}px`,`${o}px`),$F=p.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${Mr(Hh,gx)};
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;

  @media (max-width: 600px) {
    height: ${Mr(Wh,vx)};
  }
`,RF=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  /* Bar end: centred on the text lockup rather than on the bar, since the lockup
     itself sits slightly below the bar's middle. The block runs from the title's
     top (15) through the subtitle's bottom (15 + 14×1.5 + 14×1.5 = 57), so its
     centre is 36 and a 36px mark starts at 18. */
  /* Carried as a bare number so the mark layers can divide by it for their own
     scale (a length over a number is a length, which transform: scale won't
     take). The px form is derived right below. */
  --icon-n: ${At("140","36")};
  top: ${Mr(24,18)};
  left: ${At("50%","var(--space-6)")};
  width: calc(var(--icon-n) * 1px);
  height: calc(var(--icon-n) * 1px);
  /* The hero's -50% has to unwind alongside the left value, or the mark would
     drift half its own width as it crosses to the leading edge. */
  transform: translateX(calc(-50% * (1 - var(--morph))));
  opacity: 1;
  visibility: visible;

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
    /* Same centring at the small scale: a 7 → 41 block (14×1.5 title over a
       12×1.2 subtitle) against a 32px mark. */
    --icon-n: ${At("140","32")};
    top: ${Mr(16,8)};
    left: ${At("50%","var(--space-4)")};
  }

  /* Short viewports fade the subtitle out as the bar arrives (see
     PageHeaderSubtitle), which leaves the title alone as the lockup — a 7 → 28
     block, centre 17.5. */
  @media (max-width: 600px) and (max-height: 700px) {
    top: ${Mr(16,1.5)};
  }
`,I0=p.span`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  display: block;
  opacity: ${e=>e.$compact?"clamp(0, calc((var(--morph) - 0.76) / 0.12), 1)":"clamp(0, calc((0.9 - var(--morph)) / 0.12), 1)"};
  transform: translate(-50%, -50%)
    scale(calc(var(--icon-n) / ${e=>e.$compact?36:140}));
  transform-origin: center;
  pointer-events: none;
`,NF=p.div`
  display: contents;
`,LF=p.span`
  position: absolute;
  top: ${Mr(180,15)};
  left: ${At("50%","72px")};
  transform: translateX(calc(-50% * (1 - var(--morph))));
  max-width: ${At("calc(100% - 48px)","calc(100% - 96px)")};
  font-family: var(--font-sans);
  font-size: ${At("clamp(24px, 3vw, 30px)","var(--text-sm)")};
  line-height: ${At("var(--line-height-tight)","var(--line-height-relaxed)")};
  font-weight: var(--font-weight-semibold);
  letter-spacing: ${At("var(--tracking-tight)","var(--tracking-wide)")};
  color: var(--color-content-primary);
  white-space: nowrap;

  @media (max-width: 600px) {
    top: ${Mr(168,7)};
    left: ${At("50%","56px")};
    max-width: ${At("calc(100% - 32px)","calc(100% - 72px)")};
    font-size: ${At("24px","var(--text-sm)")};
  }
`,AF=p.span`
  position: absolute;
  top: ${Mr(213,36)};
  left: ${At("50%","72px")};
  transform: translateX(calc(-50% * (1 - var(--morph))));
  max-width: ${At("calc(100% - 48px)","calc(100% - 96px)")};
  font-family: var(--font-sans);
  /* 16px, not --text-md: that token isn't defined, so this declaration was being
     dropped and the size fell through to the inherited 16px. Stating it keeps the
     rendered size exactly as it was while giving the interpolation two real ends
     to work between — a calc() with one invalid term drops the whole property. */
  font-size: ${At("16px","var(--text-sm)")};
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    top: ${Mr(197,27)};
    left: ${At("50%","56px")};
    max-width: ${At("calc(100% - 32px)","calc(100% - 72px)")};
    font-size: ${At("var(--text-sm)","var(--text-xs)")};
    line-height: ${At("var(--line-height-relaxed)","var(--line-height-snug)")};
  }

  /* Short viewports have no room for the subtitle once the bar arrives. Fading it
     over the first half of the collapse (rather than switching display) keeps the
     morph continuous — display has no in-between to interpolate through. */
  @media (max-width: 600px) and (max-height: 700px) {
    opacity: clamp(0, calc(1 - var(--morph) * 2), 1);
  }
`,TF=p.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,EF=p.div`
  flex-shrink: 0;
`,zo=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Cx=ke`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,IF=ke`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,P0=p.div`
  animation: ${e=>e.$pop?Cx:zo}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PF=p.div`
  transform-origin: center bottom;
  animation: ${Cx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zF=ke`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,OF=ke`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,jx=p.div`
  position: relative;
  width: 100%;
`,FF=p(jx)``,Sx=ke`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,DF=p.div`
  display: contents;

  @media (max-width: 600px) {
    ${e=>e.$open&&Oe`
      position: fixed;
      z-index: 30;
      /* Inset a uniform 12px rather than sitting flush: the sheet reads as a
         card lifted off the page, so it carries a border and a radius on all
         four sides. The bottom offset takes the larger of that margin and the
         home-indicator inset, which also means the inner padding no longer has
         to clear the safe area itself. */
      left: var(--space-3);
      right: var(--space-3);
      bottom: max(var(--space-3), env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* The gap the cue keeps above the card. */
      gap: var(--space-2);
      /* Deliberately no transform here — the entrance animation lives on the
         two children instead. A transformed element becomes the backdrop root
         for everything inside it, so animating this wrapper would leave the
         card's backdrop-filter with nothing but the wrapper's own (empty)
         backdrop to blur, and the thread behind it would read sharp. */
    `}
  }
`,BF=p.button`
  align-self: center;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: var(--color-content-secondary);
  border-radius: var(--radius-full);
  cursor: pointer;
  ${Wn}
  /* Denser than the sheet's own glass. The card is large enough that a 50% fill
     still reads as a surface, but at 44px the thread's prose runs straight
     behind the chevron and turns it to mud — this stays glass (same blur, same
     edge) while giving the glyph a field to sit on. */
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  /* Rises with the card rather than with a shared wrapper — see the shell. */
  animation: ${Sx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

  &:hover {
    color: var(--color-content-primary);
  }

  /* Opacity, not a transform: the entrance animation above owns this element's
     transform for the life of the sheet (fill mode "both"), so a pressed state
     written as translateY would never paint. */
  &:active {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,HF=p.div`
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    /* Dismissing the sheet doesn't dismiss the intake — the card just stops
       being a sheet and settles back into the thread, where it stays reachable
       as the ordinary inline uploader (its desktop placement). Only one copy
       exists either way: while open, the surface is portaled to body instead of
       rendering here. */
    display: block;

    ${e=>e.$open&&Oe`
      /* Placement is the shell's; the card only sizes itself. min-height: 0 so
         the flex column can shrink it to the cap below rather than to content. */
      min-height: 0;
      max-height: min(82dvh, 680px);
      overflow-y: auto;
      overscroll-behavior: contain;
      /* Top padding is derived from the close button rather than picked off the
         scale: the button is absolutely positioned, so it takes no space of its
         own, and a flat --space-10 (40px) landed the card exactly on its lower
         edge. Clear its inset plus its height, then add the card's own 12px
         gutter — so the gap under the button matches the inset on every other
         side of the content. Keep in step with MobileUploaderClose below. */
      padding: calc(var(--space-2) + var(--space-8) + var(--space-3)) var(--space-3) var(--space-3);
      /* The sheet is the onboarding flow's glass, carried into the handoff: a
         translucent pane that blurs the thread running underneath it rather than
         an opaque card that hides it. Brings its own tint, border, and edge
         highlight — the fill is deliberately see-through, and legibility comes
         from the blur, not from opacity. */
      ${Wn}
      border-radius: var(--radius-2xl);
      /* Lighter than the slab shadow this replaced (was 0 -16px 48px / 24%):
         the glass already separates itself from the page, so the shadow only has
         to seat the sheet rather than do the lifting on its own. Still cast
         upward — it rises from the bottom edge, so there is no light below it.
         Declared after the mixin, whose own box-shadow this supersedes; the
         inset edge highlight is restated here so it isn't lost. */
      box-shadow:
        inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
        0 -8px 28px rgb(0 0 0 / 10%);
      animation: ${Sx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WF=p.button`
  display: none;

  @media (max-width: 600px) {
    position: absolute;
    z-index: 4;
    top: var(--space-2);
    right: var(--space-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--space-8);
    height: var(--space-8);
    padding: 0;
    color: var(--color-content-secondary);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-opaque);
    border-radius: var(--radius-full);
    cursor: pointer;

    &:hover {
      color: var(--color-content-primary);
      background: var(--color-bg-tertiary);
    }

    &:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
  }
`,UF=p.div`
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
`,qF=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${OF} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,VF=p.span`
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
`,GF=ke`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,YF=p.div`
  position: absolute;
  z-index: 2;
  /* Matches the drop zone's own (space-8) padding, so the art sits as far off
     the card's top edge as the footer pills sit off its bottom. */
  top: var(--space-8);
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 236px;
  /* No min-height: the card hugs the week. The grid holds the floor (its own
     min-height reserves the day columns while the shift bars are still drawing
     themselves in), so nothing collapses mid-animation. */
  padding: 7px 10px 8px;
  overflow: hidden;
  transform: translateX(-50%);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  box-shadow: var(--shadow-below-low);
  pointer-events: none;

  @media (max-width: 600px) {
    /* Same rule as above at the sheet's scale: the art's offset matches the
       sheet's (space-4) bottom inset rather than hugging the top edge. */
    top: var(--space-4);
    width: 218px;
    padding: 6px 8px 7px;
  }
`,KF=p.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,QF=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,ZF=p.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,XF=p.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${GF} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,JF=p.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,sl=p(Vg)`
  && {
    min-height: 164px;
    /* One step up from Alloy's default 6px (--radius-button, which suits the
       controls this component usually sits among). This drop zone is a card in
       the thread, not a control, so it takes the card radius. */
    border-radius: var(--radius-md);
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

  &&[data-schedule-flow][data-state='empty'] {
    /* Both track the week art's 16px move down to the space-8 inset — the
       reserved band above the text block and the card's floor grow with it. */
    min-height: 220px;
    padding-top: 98px;
    gap: var(--space-4);
  }

  /* The custom roster and schedule previews replace Alloy's upload glyph. */
  &&:is([data-roster-flow], [data-schedule-flow])[data-state='empty'] > span.alloy-icon-slot {
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

  /* Only sizing here — the browse action keeps Alloy's own primary style (fill,
     radius, hover). It used to pin the fill to the content/bg tokens because
     Alloy's dark mode forced primary onto a surface token, which made the button
     vanish against this dark card; that override is gone from Alloy, so its
     inverse pair now flips correctly on its own and re-stating it here would
     only drift from the design system. */
  &&[data-state='empty'] > button {
    min-width: 112px;
    padding-inline: var(--space-4);
    /* On the web view, a pill rather than Alloy's control radius: at this width
       the action is a compact 112px chip sitting inside a card in the thread,
       among the intake's own rounded surfaces and the message bubbles above it,
       so the fully round form reads as part of the conversation.
       Desktop-only, and stated as a min-width query rather than something the
       phone branch below has to undo — on mobile the button stretches to a
       full-width thumb target, where a pill of that length stops reading as a
       chip and starts looking like a stadium bar. There it keeps Alloy's own
       button radius, untouched: no value restated here, nothing to drift. */
    @media (min-width: 768px) {
      border-radius: var(--radius-full);
    }
  }

  /* On phones the browse action closes the uploader's stack: alternatives stay
     above it, and the primary action stretches to a full-width thumb target —
     full width and a 44px floor only, so it still reads as an Alloy button.
     CSS order changes only the visual layout; the native file input and desktop
     DOM order remain untouched. */
  @media (max-width: 767px) {
    &&[data-state='empty'] > button {
      order: 2;
      align-self: stretch;
      width: 100%;
      min-width: 0;
      min-height: 44px;
      padding-inline: var(--space-5);
      font-size: var(--text-sm);
    }

    &&[data-state='empty'] > button + div {
      order: 1;
    }
  }

  & > *:not(input) {
    animation: ${zF} 300ms var(--ease-out) both;
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

    /* When alternatives are present, preserve a little extra separation before
       the final full-width action. */
    &&[data-state='empty']:has(> button + div) > button {
      margin-top: var(--space-2);
    }

    /* Except in the guided flows, where the alternative is itself a full-width
       button sitting immediately above browse: the two are one button group, so
       the column's own 8px gap is the whole distance between them. */
    &&:is([data-roster-flow], [data-schedule-flow])[data-state='empty']:has(> button + div) > button {
      margin-top: 0;
    }

    /* That same 8px is too tight above the group, though — one gap value is doing
       two jobs here, and they want different answers: 8px between the two actions
       reads as one button group, but 8px under the description reads as cramped.
       So the extra space goes on whichever action LEADS the group, leaving the
       distance between them alone: the alternatives row when it's there (order
       lifts it above browse — see the 767px block), otherwise browse itself.
       Lands the ask-to-action distance on the same 16px the wider layout already
       gets from its own column gap. */
    &&:is([data-roster-flow], [data-schedule-flow])[data-state='empty'] > button + div {
      margin-top: var(--space-2);
    }

    &&:is([data-roster-flow], [data-schedule-flow])[data-state='empty']:not(:has(> button + div)) > button {
      margin-top: var(--space-2);
    }

    &&[data-roster-flow][data-state='empty'] {
      min-height: 166px;
      padding: 76px var(--space-4) var(--space-4);
      gap: var(--space-2);
    }

    &&[data-schedule-flow][data-state='empty'] {
      /* Tracks the week art's 8px move down to the space-4 inset. */
      min-height: 184px;
      padding: 78px var(--space-4) var(--space-4);
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
`,eD=p.div`
  display: flex;
  justify-content: flex-start;
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tD=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,nD=p.span`
  animation: ${tD} ${mx}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,z0=p.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,rD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  /* The header is an overlay (see PageHeader), so the thread carries the hero's
     height as padding — the space the header used to hold in the flow. Fixed at
     the hero size and never animated: this is the padding whose changing would
     move the content, which is the whole reason the morph used to jump. As the
     header sheds height the content rises past it at the same rate, so the first
     line stays on its lower edge. */
  padding: calc(${Hh}px + var(--space-8)) var(--space-6) var(--space-8);

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding: calc(${Wh}px + var(--space-3)) var(--space-4) var(--space-4);

    /* Scrollable room the height of the open intake sheet, so the conversation
       can be pulled out from under it (the sheet's own scroll cue does exactly
       that). Without this the thread simply ends behind the card and its last
       turns are unreachable. Only while a sheet stands — 0 collapses it. */
    ${e=>e.$bottomInset?Oe`
      padding-bottom: calc(${e.$bottomInset}px + var(--space-4));
    `:""}
  }
`,ll=p.div`
  display: flex;
  animation: ${zo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Ru=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,O0=p.div`
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

    /* Dark: bg-secondary sits one step off the page, which reads as mud rather
       than a bubble. Lift it a couple of steps by folding a tenth of the text
       colour into the fill — quieter than an interactive pill, but unmistakably
       a bubble. (Mirrored on the event page's OutboundBubble.) */
    @media (prefers-color-scheme: dark) {
      :root:not(.light) & {
        background: color-mix(in srgb, var(--color-content-primary) 10%, var(--color-bg-secondary));
      }
    }
    :root.dark & {
      background: color-mix(in srgb, var(--color-content-primary) 10%, var(--color-bg-secondary));
    }
  }

  /* Inbound (Ultron) — no bubble wrap, just prose (matches the event page). */
  &[data-from='ultron'] {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    /* Match the app's mobile-shell breakpoint. Message prose is general reading
       content here, so keep every inbound and outbound turn at a definite 16px
       throughout the full mobile range instead of falling back to the 14px
       desktop UI size between 601px and 767px. */
    font-size: 16px;
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,cl=p.div`
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
  ${e=>e.$done&&Oe`
    ${Wn}
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
`,dl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,ul=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,hl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,pl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,oD=ke`
  to { transform: rotate(360deg); }
`,F0=p.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${oD} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,fl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,Mx=p.div`
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
`,aD=p.button`
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
`,iD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,sD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,lD=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,cD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,dD=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,uD=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,hD=p.div`
  display: flex;
  flex-direction: column;
`,pD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fD=p.span`
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
`,mD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,gD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,vD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yD=p.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,$x=p.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,wD=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,bD=p(wD)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,kD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,_D=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,CD=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,jD=p.button`
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
`,SD=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,D0=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,B0=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,MD=p.span`
  color: var(--color-content-tertiary);
`,$D=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&Oe`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&Oe`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&Oe`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,RD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,ND=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,LD=p.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,AD=p.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,TD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,ED=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,ID=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${IF} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + ${e=>e.$sequence} * 70ms);

  ${e=>e.$flag==="open"&&Oe`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Oe`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,PD=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,zD=p.span`
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
`,H0=p.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,OD=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,FD=p.button`
  display: inline-flex;
  padding: 0;
  border: 0;
  border-radius: var(--radius-lg);
  background: transparent;
  color: inherit;
  text-align: left;
  pointer-events: none;

  /* Mobile still advances the turn on tap, but wears no chrome for it: the
     mark + working label read exactly as they do on desktop. Only the hit
     target comes back, sized to the row rather than drawn as a card. */
  @media (max-width: 600px) {
    min-height: 44px;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;

    &:active {
      opacity: 0.6;
    }

    &:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: 2px;
    }
  }
`,DD=ke`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,BD=p.span`
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
  animation: ${DD} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,HD=p.div`
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
    ${kx}
  }
  &::after {
    ${_x("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${zo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    /* Bottom matches the sides, so the dock's content sits centred in its own
       chrome rather than tight against the screen edge; the safe-area inset
       still wins on hardware that needs more. */
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-4), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,WD=p.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,UD=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,qD=p.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,VD=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,GD=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,YD=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,KD=p(Be)`
  width: 100%;
  min-height: 44px;
  font-size: var(--text-sm);

  &:not(:first-child) {
    margin-top: var(--space-2);
  }
`,W0=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 ${e=>e.$browseSized?"var(--space-4)":"var(--space-3)"};
  background: ${e=>e.$active?"var(--color-bg-secondary)":"var(--color-bg-primary)"};
  border: 1px solid ${e=>e.$active?"var(--color-border-focus)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: ${e=>e.$browseSized?"var(--text-xs)":"var(--text-sm)"};
  font-weight: var(--font-weight-medium);
  color: ${e=>e.$active?"var(--color-content-primary)":"var(--color-content-secondary)"};
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

  /* Alloy's secondary emphasis — filled, borderless, full-strength label. The
     default pill above is Alloy's tertiary (white + border), so this reads as
     the medium-emphasis sibling in the same row rather than another outline.
     Written after the base hover so it wins on both rest and hover. */
  ${e=>e.$secondary&&Oe`
    background: var(--color-bg-secondary);
    border-color: transparent;
    color: var(--color-content-primary);

    &:hover {
      background: var(--color-bg-tertiary);
      border-color: var(--color-border-hover);
      color: var(--color-content-primary);
    }

    /* Dark: bg-secondary flips to a near-page dark, sinking the fill into the
       card behind it. Mirror the Alloy Button's own dark secondary — a slate
       mid-fill that stands forward of the surface — via the slate semantic
       aliases, which resolve to that same fill (and its hover step) in dark. */
    @media (prefers-color-scheme: dark) {
      :root:not(.light) & {
        background: var(--color-slate-bg-secondary);
        &:hover { background: var(--color-slate-bg-primary); }
      }
    }
    :root.dark & {
      background: var(--color-slate-bg-secondary);
      &:hover { background: var(--color-slate-bg-primary); }
    }
  `}

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    /* The compact pill tightens on narrow screens; a browse-sized one holds its
       dimensions, because the Browse button it sits under doesn't shrink. */
    min-height: ${e=>e.$browseSized?"var(--space-8)":"28px"};
    padding: 0 ${e=>e.$browseSized?"var(--space-4)":"var(--space-2)"};
    gap: var(--space-1);
    flex: 0 0 auto;
    font-size: var(--text-xs);
    white-space: nowrap;
  }
`,QD=p.form`
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
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);

  &:focus-within {
    border-color: var(--color-border-focus);
    box-shadow: var(--shadow-below-low);
  }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);

  @media (max-width: 600px) {
    --composer-btn-size: var(--space-10);
    --composer-btn-icon-attach: var(--space-5);
    --composer-btn-icon-send: var(--space-5);
    gap: var(--space-2);
    padding: var(--space-2);
    border-radius: var(--radius-xl);
  }
`,ZD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,XD=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,U0=p.span`
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
`,JD=p.button`
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
`,eB=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,tB=p.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,nB=p.textarea`
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

  @media (max-width: 600px) {
    font-size: var(--text-md);
    line-height: var(--line-height-relaxed);
  }
`,q0=p.div`
  flex-shrink: 0;
`,rB=1600,oB=()=>{};function aB({open:e,onClose:o,locked:a=!1}){const[s,l]=g.useState("waitlist"),[d,h]=g.useState(""),[f,v]=g.useState(!1),[y,x]=g.useState(!1),w=g.useRef(null);g.useEffect(()=>()=>{w.current&&window.clearTimeout(w.current)},[]),g.useEffect(()=>{e&&(h(""),v(!1),x(!1))},[e]);const b=a||s==="waitlist",j=b?y:f,_=d.length>=10,$=()=>{a||(w.current&&window.clearTimeout(w.current),w.current=window.setTimeout(o,rB))},N=()=>{v(!0),$()},R=()=>{x(!0),$()};return n.jsxs(n.Fragment,{children:[n.jsx(dB,{}),n.jsxs(Dg,{open:e,onClose:a?oB:o,size:"lg","aria-label":`${b?"Waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(uB,{children:[n.jsx(pB,{"aria-hidden":"true",children:n.jsx(zv,{size:300})}),!a&&n.jsx(fB,{type:"button","aria-label":"Close",onClick:o,children:n.jsx(Po,{size:18})}),n.jsxs(mB,{children:[n.jsx(gB,{"aria-hidden":"true"}),b?"You’re on the waitlist":"Your welcome grant"]}),!b&&n.jsxs(vB,{"aria-label":"$1,000 of work on us",children:[n.jsxs(xB,{children:[n.jsx(yB,{children:"$"}),"1,000"]}),n.jsxs(wB,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(bB,{$prominent:b,children:b?"Thanks for setting up your account!":"Ready to see the real work?"}),n.jsx(kB,{children:b?"Your account is looking good, but with our first of its kind full-service AI and new free pricing, we currently are experiencing high demand for Ultron. You’ve been added to the waitlist for full access.":"Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered."}),n.jsx(_B,{"aria-label":b?"What you’re waiting for":"Grant benefits",children:b?n.jsxs(n.Fragment,{children:[n.jsx(fa,{children:"Full-service AI"}),n.jsx(fa,{children:"New free pricing"}),n.jsx(fa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(fa,{children:"100,000 credits"}),n.jsx(fa,{children:"Up to 3 months"}),n.jsx(fa,{children:"You approve every action"})]})}),j?n.jsxs(RB,{role:"status",children:[n.jsx(xn,{size:20}),b?"You’re moving up — we’ll text you to set a time with our team.":"You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live."]}):n.jsxs(CB,{onSubmit:S=>{S.preventDefault(),_&&(b?R():N())},children:[n.jsx(jB,{htmlFor:"ultron-access-phone",children:b?"Set up time with our team to get expedited to the front of the list.":"Where should we text your invite?"}),n.jsxs(SB,{children:[n.jsx(MB,{id:"ultron-access-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",minLength:10,maxLength:15,value:d,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:S=>h(S.target.value.replace(/\D/g,""))}),n.jsx($B,{type:"submit",variant:"tertiary",size:"lg",disabled:!_,children:b?"Set up time":"Unlock $1,000"})]})]}),n.jsx(NB,{children:b?"Scheduling and access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),!a&&n.jsxs(hB,{type:"button",onClick:()=>{w.current&&window.clearTimeout(w.current),l(S=>S==="grant"?"waitlist":"grant")},children:["Demo: show ",b?"welcome grant":"waitlist"]})]})]})}const V0="cubic-bezier(0.22, 1, 0.36, 1)",iB=ke`
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
`,sB=ke`
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
`,lB=ke`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,cB=ke`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,dB=z2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${iB} 440ms ${V0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${lB} 560ms ${V0} both;
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
    animation: ${sB} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${cB} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,uB=p.section`
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
`,hB=p.button`
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
`,pB=p.div`
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
`,fB=p.button`
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
`,mB=p.span`
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
`,gB=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,vB=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,xB=p.div`
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
`,yB=p.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,wB=p.span`
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
`,bB=p.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: ${e=>e.$prominent?"clamp(32px, 5vw, 42px)":"var(--text-3xl)"};
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);

  @media (max-width: 620px) {
    font-size: ${e=>e.$prominent?"clamp(28px, 8vw, 36px)":"var(--text-3xl)"};
  }
`,kB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,_B=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,fa=p.span`
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
`,CB=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,jB=p.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,SB=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,MB=p.input`
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
`,$B=p(Be)`
  && {
    min-width: 156px;
    color: var(--Alloy-slate-950);
    background: var(--color-bg-always-light);
    border-color: transparent;
    font-weight: var(--font-weight-bold);
    /* A pale lift rather than a coloured glow — a dark shadow would vanish into
       the card it sits on. */
    box-shadow: 0 8px 28px rgba(255, 255, 255, 0.14);
  }

  &&:hover:not(:disabled) {
    background: var(--Alloy-slate-100);
    transform: translateY(-1px);
  }

  /* Waiting on a number: a translucent pane of the card rather than a pale grey
     fill, which now that the live state is white would read as another white
     button. Same treatment the phone card's own Launch button uses. */
  &&:disabled {
    color: rgba(226, 232, 255, 0.38);
    background: rgba(255, 255, 255, 0.16);
    box-shadow: none;
  }

  @media (max-width: 520px) {
    && {
      width: 100%;
    }
  }
`,RB=p.div`
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
`,NB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`;function LB(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function AB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const a=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};a[0]&&(s.activeId=a[0]),a[1]&&(s.secActiveId=a[1]);for(let l=2;l<a.length-1;l+=2){const d=a[l],h=a[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function TB(e,o){const a=g.useRef("");g.useEffect(()=>{const s=()=>{const d=AB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==a.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=LB(e);s!==window.location.hash&&(a.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Qu="ultron-theme";function EB(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Qu);return e==="light"||e==="dark"?e:null}function IB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function PB(){const e=Ah("(prefers-color-scheme: dark)"),[o,a]=g.useState(EB);g.useEffect(()=>{IB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(Qu,o):window.localStorage.removeItem(Qu))},[o]);const s=o??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";a(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const zB="calc(env(safe-area-inset-top, 0px) + 49px)",OB=p.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${dv} {
    top: calc(${zB} + var(--space-3));
    right: var(--space-3);
  }

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
`;function FB(){const{theme:e,toggle:o}=PB(),a=e==="dark",s=a?"Switch to light mode":"Switch to dark mode";return n.jsx(OB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":a,title:s,children:a?n.jsx(ih,{size:18}):n.jsx(Rg,{size:18})})}const G0=[{id:"ultron",label:"Ultron",icon:n.jsx(dt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(KM,{})},{id:"engaged",label:"Engage",icon:n.jsx(QM,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(ZM,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(XM,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(JM,{})}],Y0=[{id:"apps",label:"Apps",icon:n.jsx(e$,{})}],K0=[{id:"docs",label:"Document Studio",icon:n.jsx(U2,{})},{id:"form",label:"Form",icon:n.jsx(t$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(n$,{})},{id:"policy",label:"Policy",icon:n.jsx(r$,{}),activeIcon:n.jsx("img",{src:OO,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(To,{}),activeIcon:n.jsx("img",{src:FO,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(o$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(a$,{})}],DB=3e3,BB=4e3,HB=1900,WB=p.button`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state. */
  padding: var(--space-2);
  /* The card no longer leads with an icon — the mark moved inside the wordmark
     (see UltronIdentityCard) — so the left inset is set for the logotype itself
     rather than to line a mark up with the rows' icon column. */
  padding-left: var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${e=>e.$active?"var(--color-bg-secondary, rgba(70, 108, 255, 0.06))":"transparent"};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`,UB=ke`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,qB=ke`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,VB=ke`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,GB=p.span`
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
      ${UB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${qB} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${VB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,YB=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-sm);
  overflow: hidden;
`,KB=p.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: ${e=>e.$visible?"block":"none"};
`;function QB({host:e}){const[o,a]=g.useState(!1),s=n.jsx(dt,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"});return e?n.jsxs(YB,{children:[!o&&s,n.jsx(KB,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(e)}&sz=64`,alt:"",$visible:o,onLoad:l=>a(l.currentTarget.naturalWidth>=32),onError:()=>a(!1)})]}):s}const ZB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,XB=p(zg)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,JB=p(Og)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,eH=p(Fg)`
  && {
    border-top: none;
    padding-top: 0;
  }

  @media (max-width: 767px) {
    && {
      padding: var(--space-3) var(--space-4) var(--space-4);
    }

    & > button {
      width: 100%;
      min-height: 44px;
    }
  }
`,tH=z2`
  @media (max-width: 767px) {
    body > div[role='dialog'][aria-labelledby='waitlist-title'] {
      align-items: flex-end;
      padding: var(--space-3);
      padding-bottom: max(var(--space-3), env(safe-area-inset-bottom));
    }

    body > div[role='dialog'][aria-labelledby='waitlist-title'] > div {
      max-width: none;
      max-height: min(80vh, 520px);
      border-radius: var(--radius-xl) var(--radius-xl) var(--radius-lg) var(--radius-lg);
    }
  }
`,nH=p.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,rH=p.button`
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
`;function oH({onDelete:e}){const o=a=>a.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(ph,{placement:"bottom-end",width:168,trigger:n.jsx(rH,{type:"button","aria-label":"Page options",children:n.jsx(Mg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(Eg,{size:16}),onClick:e}]}]})})}const aH={needs_attention:n.jsx(Ml,{size:16}),live:n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(xn,{size:16})},Q0={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function iH({introAnswers:e,onRestartOnboarding:o}={}){const[a,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[h,f]=g.useState(null),[v,y]=g.useState(null),[x,w]=g.useState("ultron"),[b,j]=g.useState("employees"),_=L$(),[$,N]=g.useState(!1),[R,S]=g.useState(!1),C=g.useRef(new Set),P=me=>{C.current.add(me),_.completeRun(me)},L=me=>{C.current.has(me)&&S(!0)};g.useEffect(()=>{const me=He=>{const qe=He.target;qe!=null&&qe.isContentEditable||(qe==null?void 0:qe.tagName)==="INPUT"||(qe==null?void 0:qe.tagName)==="TEXTAREA"||(qe==null?void 0:qe.tagName)==="SELECT"||He.metaKey||He.ctrlKey||He.altKey||He.key.toLowerCase()==="m"&&(He.preventDefault(),N(!0))};return document.addEventListener("keydown",me),()=>document.removeEventListener("keydown",me)},[]);const T=_.revealedNewIds.reduce((me,He)=>{const qe=_.threads.find(mt=>mt.id===He),St=!!(qe&&Q0[qe.status]==="new"&&!_.viewedIds.includes(He));return me+(St?1:0)},0),[E,M]=g.useState(!!e),[F,V]=g.useState(!1),[W,B]=g.useState(!1),[K,X]=g.useState(!!e),[ae,ce]=g.useState(!1),oe=g.useRef(null),[Q,D]=g.useState(!1),G=g.useRef(null),[A,z]=g.useState("off"),ne=g.useRef(null);g.useEffect(()=>()=>{oe.current!==null&&window.clearTimeout(oe.current),G.current!==null&&window.clearTimeout(G.current),ne.current!==null&&window.clearTimeout(ne.current)},[]);const U=()=>{ne.current!==null&&(window.clearTimeout(ne.current),ne.current=null),z("off")},ee=()=>{z("captured"),ne.current=window.setTimeout(()=>{ne.current=null,z("off")},HB)},de=()=>{oe.current!==null&&(window.clearTimeout(oe.current),oe.current=null),ce(!1)},O=()=>{B(!0),de(),oe.current=window.setTimeout(()=>{oe.current=null,_.surfaceDemoThread("shift_drop_maria"),Y(),ce(!0),z("pending")},DB)},Y=()=>{G.current!==null&&window.clearTimeout(G.current),D(!0),G.current=window.setTimeout(()=>{G.current=null,D(!1)},BB)},[ie,xe]=g.useState(!e),[le,we]=g.useState([]),[ye,Se]=g.useState(null),De=g.useRef(0),ue=me=>{w("ultron"),M(!1),xe(!1),Se(me)},_e=()=>{X(!0),w("ultron"),xe(!1),Se(null),M(!0)},Ne=()=>{w("ultron"),M(!1),xe(!0),Se(null)},Le=()=>{const me=`page-${De.current++}`;we(He=>[...He,{id:me,title:"New page"}]),ue(me)},[Ue,Ge]=g.useState({}),[ot,Ee]=g.useState({}),Qe=g.useRef({}),lt=(me,He)=>{const qe=He.trim();if(!qe)return;const St=(Ue[me]??[]).filter(mt=>mt.role==="ultron").length;Ge(mt=>({...mt,[me]:[...mt[me]??[],{role:"operator",text:qe}]})),Ee(mt=>({...mt,[me]:!0})),Qe.current[me]=window.setTimeout(()=>{Ge(mt=>({...mt,[me]:[...mt[me]??[],{role:"ultron",text:$h(qe,St)}]})),Ee(mt=>({...mt,[me]:!1})),delete Qe.current[me]},1100)},bt=me=>{Qe.current[me]&&(window.clearTimeout(Qe.current[me]),delete Qe.current[me]),we(He=>He.filter(qe=>qe.id!==me)),Ge(He=>{const{[me]:qe,...St}=He;return St}),Ee(He=>{const{[me]:qe,...St}=He;return St}),ye===me&&(Se(null),xe(!0))},et=ie?"live":_.selectedThread?Q0[_.selectedThread.status]:"new";TB({activeId:a,secActiveId:l,selectedPersonaId:h,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:y});const[ut,Ot]=g.useState(!1),Ct=me=>me.map(He=>({...He,isActive:He.id===a,disabled:He.id!=="ultron",onClick:He.id==="ultron"?()=>s("ultron"):()=>Ot(!0)})),Un=[{id:"memory",label:"Memory",icon:n.jsx(Ul,{size:16}),isActive:x==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(fg,{size:16})}],uo=n.jsx(ox,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),Rr={id:"welcome",label:"Account Setup",icon:n.jsx(QB,{host:wx(e==null?void 0:e.companyWebsite)}),isActive:E,onClick:_e},Ie=le.map(me=>({id:me.id,label:me.title,icon:n.jsx(U2,{}),isActive:ye===me.id,onClick:()=>ue(me.id),trailingSlot:n.jsx(oH,{onDelete:()=>bt(me.id)})})),at=x==="account"?Gu.map(me=>({type:"single",item:{id:me.id,label:me.label,icon:me.icon,isActive:b===me.id,onClick:()=>j(me.id)}})):_.groups.flatMap(me=>{const He=me.id==="needs_attention"?"new":me.id==="resolved"?"done":"working",qe=me.id==="needs_attention"?me.threads.filter(ct=>ct.status==="analyzing"||_.revealedNewIds.includes(ct.id)):me.threads,St=W?me.id==="resolved":F?me.id==="live":me.id==="needs_attention",mt=me.id==="needs_attention"?Ie:[],Nn={type:"group",group:{id:me.id,label:me.id==="needs_attention"?"New":me.label,icon:aH[me.id],trailingBadge:n.jsx(Io,{children:qe.length+(St?1:0)+mt.length}),defaultExpanded:!0,outlined:!1,children:[...St?[Rr]:[],...mt,...qe.map(ct=>({id:ct.id,label:ct.id.startsWith("detected_")?n.jsx(qT,{text:Xm(ct.name,He)}):Xm(ct.name,He),icon:ct.id==="shift_drop_maria"&&Q?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):He==="new"?ct.status==="analyzing"?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(dt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):He==="working"?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:ct.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(dt,{mark:"pulse",size:32,tone:"auto",state:ct.status==="unresolved"?"idle":"static",color:ct.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(ct.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!ie&&!ye&&et===He&&_.selectedId===ct.id,onClick:()=>{ct.id==="shift_drop_maria"&&de(),w("ultron"),M(!1),xe(!1),Se(null),_.setSelectedId(ct.id)},spotlightPrompt:ae&&ct.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:ct.id==="shift_drop_maria"?de:void 0,trailingSlot:_.savedWorkflowIds.includes(ct.id)?n.jsx($r,{content:"Saved as workflow",placement:"top",children:n.jsx(GB,{"aria-label":"Saved as workflow",children:n.jsx(To,{})})}):void 0}))]}};return me.id==="resolved"?[{type:"divider",id:"done-divider"},Nn]:me.id==="live"?[{type:"divider",id:"working-divider"},Nn]:[Nn]}),yt=[{id:"main",label:"Workspace",items:Ct(G0)},{id:"tools",label:"Tools",items:Ct(Y0)},{id:"bottom",label:"Apps",items:Ct(K0)}];return n.jsxs(n.Fragment,{children:[n.jsx(FB,{}),n.jsx(tH,{}),n.jsxs(zO,{items:Ct(G0),toolItems:Ct(Y0),bottomItems:Ct(K0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:at,menuHeader:x==="ultron"?n.jsx(WB,{$active:ie&&!ye,onClick:Ne,"aria-label":"Live — Ultron presence","aria-current":ie&&!ye?"page":void 0,children:n.jsx(DT,{onNew:Le})}):void 0,pageEntries:Un,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:uo,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:a,secActiveId:l,activePageId:v,selectedPersonaId:h,moduleGroups:yt,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:me=>{me==="ultron"&&s("ultron")},onSelectPersona:f,onHome:Ne,onNewPage:Le,openSecondaryNav:ae,unreadEventCount:T},children:[K&&n.jsx(nH,{$visible:x==="ultron"&&E,"aria-hidden":x!=="ultron"||!E,children:n.jsx(bF,{active:x==="ultron"&&E,answers:e,onContinued:()=>V(!0),onSetupComplete:O})}),x==="memory"?n.jsx(KT,{}):x==="account"?n.jsx(cE,{collectionId:b}):E?null:ye?n.jsx(wT,{messages:Ue[ye]??[],replying:ot[ye]??!1,onSend:me=>lt(ye,me)},ye):n.jsx(dT,{threads:_.threads,stageById:_.stageById,section:et,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:P,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),M(!1),xe(!0)},onDetectEvent:_.detectEvent,onRevealNew:_.revealNew,onRunCompleted:L,phoneGateThreadId:A==="off"?null:"shift_drop_maria",phoneGateCaptured:A==="captured",onPhoneGateSubmit:ee,onPhoneGateClose:U})]}),n.jsx(aB,{open:R||$,locked:R,onClose:()=>N(!1)}),n.jsxs(Dg,{open:ut,onClose:()=>Ot(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(XB,{onClose:()=>Ot(!1),children:n.jsx("span",{id:"waitlist-title",children:"Account setup in progress"})}),n.jsx(JB,{children:n.jsx(ZB,{children:"Please finish your account setup and Ultron introduction to unlock the rest of your dashboard"})}),n.jsx(eH,{children:n.jsx(Be,{variant:"primary",onClick:()=>Ot(!1),children:"Got it"})})]})]})}const Z0="cubic-bezier(0.22, 1, 0.36, 1)",X0=ke`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,sH=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,lH=p.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${X0} 460ms ${Z0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${X0} 500ms ${Z0} 90ms both;
  }
  main {
    animation: ${sH} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Nu="tb:onboarding-complete";function cH(){const[e,o]=g.useState(()=>{try{return window.sessionStorage.getItem(Nu)==="1"}catch{return!1}}),[a,s]=g.useState(null),l=h=>{try{window.sessionStorage.setItem(Nu,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Nu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(lH,{children:n.jsx(iH,{introAnswers:a??void 0,onRestartOnboarding:d})}):n.jsx(EP,{onEnterApp:l})}M3.createRoot(document.getElementById("root")).render(n.jsx(vn.StrictMode,{children:n.jsx(Q8,{children:n.jsx(cH,{})})}));
