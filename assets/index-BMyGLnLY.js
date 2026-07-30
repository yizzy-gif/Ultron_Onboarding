(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function ag(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var au={exports:{}},bi={},iu={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function v3(){if($f)return Ve;$f=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function k(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function N(A,O,ne){this.props=A,this.context=O,this.refs=R,this.updater=ne||_}N.prototype.isReactComponent={},N.prototype.setState=function(A,O){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,O,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function $(){}$.prototype=N.prototype;function M(A,O,ne){this.props=A,this.context=O,this.refs=R,this.updater=ne||_}var j=M.prototype=new $;j.constructor=M,C(j,N.prototype),j.isPureReactComponent=!0;var z=Array.isArray,L=Object.prototype.hasOwnProperty,T={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(A,O,ne){var U,J={},ce=null,H=null;if(O!=null)for(U in O.ref!==void 0&&(H=O.ref),O.key!==void 0&&(ce=""+O.key),O)L.call(O,U)&&!E.hasOwnProperty(U)&&(J[U]=O[U]);var P=arguments.length-2;if(P===1)J.children=ne;else if(1<P){for(var oe=Array(P),pe=0;pe<P;pe++)oe[pe]=arguments[pe+2];J.children=oe}if(A&&A.defaultProps)for(U in P=A.defaultProps,P)J[U]===void 0&&(J[U]=P[U]);return{$$typeof:e,type:A,key:ce,ref:H,props:J,_owner:T.current}}function D(A,O){return{$$typeof:e,type:A.type,key:O,ref:A.ref,props:A.props,_owner:A._owner}}function V(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function q(A){var O={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ne){return O[ne]})}var B=/\/+/g;function K(A,O){return typeof A=="object"&&A!==null&&A.key!=null?q(""+A.key):O.toString(36)}function ee(A,O,ne,U,J){var ce=typeof A;(ce==="undefined"||ce==="boolean")&&(A=null);var H=!1;if(A===null)H=!0;else switch(ce){case"string":case"number":H=!0;break;case"object":switch(A.$$typeof){case e:case o:H=!0}}if(H)return H=A,J=J(H),A=U===""?"."+K(H,0):U,z(J)?(ne="",A!=null&&(ne=A.replace(B,"$&/")+"/"),ee(J,O,ne,"",function(pe){return pe})):J!=null&&(V(J)&&(J=D(J,ne+(!J.key||H&&H.key===J.key?"":(""+J.key).replace(B,"$&/")+"/")+A)),O.push(J)),1;if(H=0,U=U===""?".":U+":",z(A))for(var P=0;P<A.length;P++){ce=A[P];var oe=U+K(ce,P);H+=ee(ce,O,ne,oe,J)}else if(oe=k(A),typeof oe=="function")for(A=oe.call(A),P=0;!(ce=A.next()).done;)ce=ce.value,oe=U+K(ce,P++),H+=ee(ce,O,ne,oe,J);else if(ce==="object")throw O=String(A),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return H}function ae(A,O,ne){if(A==null)return A;var U=[],J=0;return ee(A,U,"","",function(ce){return O.call(ne,ce,J++)}),U}function se(A){if(A._status===-1){var O=A._result;O=O(),O.then(function(ne){(A._status===0||A._status===-1)&&(A._status=1,A._result=ne)},function(ne){(A._status===0||A._status===-1)&&(A._status=2,A._result=ne)}),A._status===-1&&(A._status=0,A._result=O)}if(A._status===1)return A._result.default;throw A._result}var le={current:null},Z={transition:null},F={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Z,ReactCurrentOwner:T};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:ae,forEach:function(A,O,ne){ae(A,function(){O.apply(this,arguments)},ne)},count:function(A){var O=0;return ae(A,function(){O++}),O},toArray:function(A){return ae(A,function(O){return O})||[]},only:function(A){if(!V(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ve.Component=N,Ve.Fragment=i,Ve.Profiler=l,Ve.PureComponent=M,Ve.StrictMode=s,Ve.Suspense=v,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Ve.act=Y,Ve.cloneElement=function(A,O,ne){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var U=C({},A.props),J=A.key,ce=A.ref,H=A._owner;if(O!=null){if(O.ref!==void 0&&(ce=O.ref,H=T.current),O.key!==void 0&&(J=""+O.key),A.type&&A.type.defaultProps)var P=A.type.defaultProps;for(oe in O)L.call(O,oe)&&!E.hasOwnProperty(oe)&&(U[oe]=O[oe]===void 0&&P!==void 0?P[oe]:O[oe])}var oe=arguments.length-2;if(oe===1)U.children=ne;else if(1<oe){P=Array(oe);for(var pe=0;pe<oe;pe++)P[pe]=arguments[pe+2];U.children=P}return{$$typeof:e,type:A.type,key:J,ref:ce,props:U,_owner:H}},Ve.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},Ve.createElement=S,Ve.createFactory=function(A){var O=S.bind(null,A);return O.type=A,O},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(A){return{$$typeof:f,render:A}},Ve.isValidElement=V,Ve.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:se}},Ve.memo=function(A,O){return{$$typeof:y,type:A,compare:O===void 0?null:O}},Ve.startTransition=function(A){var O=Z.transition;Z.transition={};try{A()}finally{Z.transition=O}},Ve.unstable_act=Y,Ve.useCallback=function(A,O){return le.current.useCallback(A,O)},Ve.useContext=function(A){return le.current.useContext(A)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(A){return le.current.useDeferredValue(A)},Ve.useEffect=function(A,O){return le.current.useEffect(A,O)},Ve.useId=function(){return le.current.useId()},Ve.useImperativeHandle=function(A,O,ne){return le.current.useImperativeHandle(A,O,ne)},Ve.useInsertionEffect=function(A,O){return le.current.useInsertionEffect(A,O)},Ve.useLayoutEffect=function(A,O){return le.current.useLayoutEffect(A,O)},Ve.useMemo=function(A,O){return le.current.useMemo(A,O)},Ve.useReducer=function(A,O,ne){return le.current.useReducer(A,O,ne)},Ve.useRef=function(A){return le.current.useRef(A)},Ve.useState=function(A){return le.current.useState(A)},Ve.useSyncExternalStore=function(A,O,ne){return le.current.useSyncExternalStore(A,O,ne)},Ve.useTransition=function(){return le.current.useTransition()},Ve.version="18.3.1",Ve}var Rf;function dh(){return Rf||(Rf=1,iu.exports=v3()),iu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function x3(){if(Nf)return bi;Nf=1;var e=dh(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,v,y){var x,w={},k=null,_=null;y!==void 0&&(k=""+y),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(_=v.ref);for(x in v)s.call(v,x)&&!d.hasOwnProperty(x)&&(w[x]=v[x]);if(f&&f.defaultProps)for(x in v=f.defaultProps,v)w[x]===void 0&&(w[x]=v[x]);return{$$typeof:o,type:f,key:k,ref:_,props:w,_owner:l.current}}return bi.Fragment=i,bi.jsx=h,bi.jsxs=h,bi}var Lf;function y3(){return Lf||(Lf=1,au.exports=x3()),au.exports}var n=y3(),g=dh();const mn=ag(g);var il={},su={exports:{}},dn={},lu={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function w3(){return Af||(Af=1,(function(e){function o(Z,F){var Y=Z.length;Z.push(F);e:for(;0<Y;){var A=Y-1>>>1,O=Z[A];if(0<l(O,F))Z[A]=F,Z[Y]=O,Y=A;else break e}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var F=Z[0],Y=Z.pop();if(Y!==F){Z[0]=Y;e:for(var A=0,O=Z.length,ne=O>>>1;A<ne;){var U=2*(A+1)-1,J=Z[U],ce=U+1,H=Z[ce];if(0>l(J,Y))ce<O&&0>l(H,J)?(Z[A]=H,Z[ce]=Y,A=ce):(Z[A]=J,Z[U]=Y,A=U);else if(ce<O&&0>l(H,Y))Z[A]=H,Z[ce]=Y,A=ce;else break e}}return F}function l(Z,F){var Y=Z.sortIndex-F.sortIndex;return Y!==0?Y:Z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var v=[],y=[],x=1,w=null,k=3,_=!1,C=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(Z){for(var F=i(y);F!==null;){if(F.callback===null)s(y);else if(F.startTime<=Z)s(y),F.sortIndex=F.expirationTime,o(v,F);else break;F=i(y)}}function z(Z){if(R=!1,j(Z),!C)if(i(v)!==null)C=!0,se(L);else{var F=i(y);F!==null&&le(z,F.startTime-Z)}}function L(Z,F){C=!1,R&&(R=!1,$(S),S=-1),_=!0;var Y=k;try{for(j(F),w=i(v);w!==null&&(!(w.expirationTime>F)||Z&&!q());){var A=w.callback;if(typeof A=="function"){w.callback=null,k=w.priorityLevel;var O=A(w.expirationTime<=F);F=e.unstable_now(),typeof O=="function"?w.callback=O:w===i(v)&&s(v),j(F)}else s(v);w=i(v)}if(w!==null)var ne=!0;else{var U=i(y);U!==null&&le(z,U.startTime-F),ne=!1}return ne}finally{w=null,k=Y,_=!1}}var T=!1,E=null,S=-1,D=5,V=-1;function q(){return!(e.unstable_now()-V<D)}function B(){if(E!==null){var Z=e.unstable_now();V=Z;var F=!0;try{F=E(!0,Z)}finally{F?K():(T=!1,E=null)}}else T=!1}var K;if(typeof M=="function")K=function(){M(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=B,K=function(){ae.postMessage(null)}}else K=function(){N(B,0)};function se(Z){E=Z,T||(T=!0,K())}function le(Z,F){S=N(function(){Z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){C||_||(C=!0,se(L))},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(v)},e.unstable_next=function(Z){switch(k){case 1:case 2:case 3:var F=3;break;default:F=k}var Y=k;k=F;try{return Z()}finally{k=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Z,F){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var Y=k;k=Z;try{return F()}finally{k=Y}},e.unstable_scheduleCallback=function(Z,F,Y){var A=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?A+Y:A):Y=A,Z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,Z={id:x++,callback:F,priorityLevel:Z,startTime:Y,expirationTime:O,sortIndex:-1},Y>A?(Z.sortIndex=Y,o(y,Z),i(v)===null&&Z===i(y)&&(R?($(S),S=-1):R=!0,le(z,Y-A))):(Z.sortIndex=O,o(v,Z),C||_||(C=!0,se(L))),Z},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(Z){var F=k;return function(){var Y=k;k=F;try{return Z.apply(this,arguments)}finally{k=Y}}}})(cu)),cu}var Tf;function b3(){return Tf||(Tf=1,lu.exports=w3()),lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function k3(){if(Ef)return dn;Ef=1;var e=dh(),o=b3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function k(t){return v.call(w,t)?!0:v.call(x,t)?!1:y.test(t)?w[t]=!0:(x[t]=!0,!1)}function _(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,r,a,c){if(r===null||typeof r>"u"||_(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(t,r,a,c,u,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new R(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace($,M);N[r]=new R(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace($,M);N[r]=new R(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace($,M);N[r]=new R(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(C(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var z=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),q=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Z=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,A;function O(t){if(A===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);A=r&&r[1]||""}return`
`+A+t}var ne=!1;function U(t,r){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),b=u.length-1,I=m.length-1;1<=b&&0<=I&&u[b]!==m[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==m[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==m[I]){var W=`
`+u[b].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=b&&0<=I);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function J(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case T:return"Portal";case D:return"Profiler";case S:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case V:return(t._context.displayName||"Context")+".Provider";case B:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:ce(t.type)||"Memo";case se:r=t._payload,t=t._init;try{return ce(t(r))}catch{}}return null}function H(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function P(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pe(t){var r=oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function de(t){t._valueTracker||(t._valueTracker=pe(t))}function ve(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=oe(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Se(t,r){var a=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function $e(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=P(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ie(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function Ue(t,r){Ie(t,r);var a=P(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ae(t,r.type,a):r.hasOwnProperty("defaultValue")&&Ae(t,r.type,P(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function De(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ae(t,r,a){(r!=="number"||be(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ze=Array.isArray;function Xe(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+P(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function St(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Be(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Ze(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:P(a)}}function xe(t,r){var a=P(r.value),c=P(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Le(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function ot(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?ot(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ye,gt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ye=Ye||document.createElement("div"),Ye.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ye.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function nt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},po=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(t){po.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),$n[r]=$n[t]})});function fo(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||$n.hasOwnProperty(t)&&$n[t]?(""+r).trim():r+"px"}function Te(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=fo(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var st=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wt(t,r){if(r){if(st[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Mt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cr=null;function Jt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,Bn=null,Rn=null;function dr(t){if(t=ii(t)){if(typeof Rr!="function")throw Error(i(280));var r=t.stateNode;r&&(r=bs(r),Rr(t.stateNode,t.type,r))}}function Nr(t){Bn?Rn?Rn.push(t):Rn=[t]:Bn=t}function Zi(){if(Bn){var t=Bn,r=Rn;if(Rn=Bn=null,dr(t),r)for(t=0;t<r.length;t++)dr(r[t])}}function Xi(t,r){return t(r)}function Ji(){}var Oa=!1;function es(t,r,a){if(Oa)return t(r,a);Oa=!0;try{return Xi(t,r,a)}finally{Oa=!1,(Bn!==null||Rn!==null)&&(Ji(),Zi())}}function mo(t,r){var a=t.stateNode;if(a===null)return null;var c=bs(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var qo=!1;if(f)try{var go={};Object.defineProperty(go,"passive",{get:function(){qo=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{qo=!1}function Lr(t,r,a,c,u,m,b,I,W){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(he){this.onError(he)}}var vo=!1,Hn=null,Ar=!1,Da=null,bc={onError:function(t){vo=!0,Hn=t}};function xo(t,r,a,c,u,m,b,I,W){vo=!1,Hn=null,Lr.apply(bc,arguments)}function kc(t,r,a,c,u,m,b,I,W){if(xo.apply(this,arguments),vo){if(vo){var re=Hn;vo=!1,Hn=null}else throw Error(i(198));Ar||(Ar=!0,Da=re)}}function ur(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Vo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function ts(t){if(ur(t)!==t)throw Error(i(188))}function Cc(t){var r=t.alternate;if(!r){if(r=ur(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===a)return ts(u),t;if(m===c)return ts(u),r;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=m;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=m;break}if(I===c){b=!0,c=u,a=m;break}I=I.sibling}if(!b){for(I=m.child;I;){if(I===a){b=!0,a=m,c=u;break}if(I===c){b=!0,c=m,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function yo(t){return t=Cc(t),t!==null?hr(t):null}function hr(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=hr(t);if(r!==null)return r;t=t.sibling}return null}var Fa=o.unstable_scheduleCallback,Ba=o.unstable_cancelCallback,_c=o.unstable_shouldYield,Ut=o.unstable_requestPaint,vt=o.unstable_now,ns=o.unstable_getCurrentPriorityLevel,Q=o.unstable_ImmediatePriority,me=o.unstable_UserBlockingPriority,ye=o.unstable_NormalPriority,Je=o.unstable_LowPriority,Pe=o.unstable_IdlePriority,kt=null,ft=null;function $t(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(kt,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Ix,jc=Math.log,Ex=Math.LN2;function Ix(t){return t>>>=0,t===0?32:31-(jc(t)/Ex|0)|0}var rs=64,os=4194304;function Ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function as(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=Ha(I):(m&=b,m!==0&&(c=Ha(m)))}else b=a&~u,b!==0?c=Ha(b):m!==0&&(c=Ha(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Ct(r),u=1<<a,c|=t[a],r&=~u;return c}function Px(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zx(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-Ct(m),I=1<<b,W=u[b];W===-1?((I&a)===0||(I&c)!==0)&&(u[b]=Px(I,r)):W<=r&&(t.expiredLanes|=I),m&=~I}}function Sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function op(){var t=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),t}function Mc(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Wa(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Ct(r),t[r]=a}function Ox(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Ct(a),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~m}}function $c(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Ct(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var at=0;function ap(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ip,Rc,sp,lp,cp,Nc=!1,is=[],Tr=null,Er=null,Ir=null,Ua=new Map,qa=new Map,Pr=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(t,r){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ua.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(r.pointerId)}}function Va(t,r,a,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=ii(r),r!==null&&Rc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Fx(t,r,a,c,u){switch(r){case"focusin":return Tr=Va(Tr,t,r,a,c,u),!0;case"dragenter":return Er=Va(Er,t,r,a,c,u),!0;case"mouseover":return Ir=Va(Ir,t,r,a,c,u),!0;case"pointerover":var m=u.pointerId;return Ua.set(m,Va(Ua.get(m)||null,t,r,a,c,u)),!0;case"gotpointercapture":return m=u.pointerId,qa.set(m,Va(qa.get(m)||null,t,r,a,c,u)),!0}return!1}function up(t){var r=wo(t.target);if(r!==null){var a=ur(r);if(a!==null){if(r=a.tag,r===13){if(r=Vo(a),r!==null){t.blockedOn=r,cp(t.priority,function(){sp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ss(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Ac(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);cr=c,a.target.dispatchEvent(c),cr=null}else return r=ii(a),r!==null&&Rc(r),t.blockedOn=a,!1;r.shift()}return!0}function hp(t,r,a){ss(t)&&a.delete(r)}function Bx(){Nc=!1,Tr!==null&&ss(Tr)&&(Tr=null),Er!==null&&ss(Er)&&(Er=null),Ir!==null&&ss(Ir)&&(Ir=null),Ua.forEach(hp),qa.forEach(hp)}function Ga(t,r){t.blockedOn===r&&(t.blockedOn=null,Nc||(Nc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bx)))}function Ya(t){function r(u){return Ga(u,t)}if(0<is.length){Ga(is[0],t);for(var a=1;a<is.length;a++){var c=is[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Tr!==null&&Ga(Tr,t),Er!==null&&Ga(Er,t),Ir!==null&&Ga(Ir,t),Ua.forEach(r),qa.forEach(r),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)up(a),a.blockedOn===null&&Pr.shift()}var Go=z.ReactCurrentBatchConfig,ls=!0;function Hx(t,r,a,c){var u=at,m=Go.transition;Go.transition=null;try{at=1,Lc(t,r,a,c)}finally{at=u,Go.transition=m}}function Wx(t,r,a,c){var u=at,m=Go.transition;Go.transition=null;try{at=4,Lc(t,r,a,c)}finally{at=u,Go.transition=m}}function Lc(t,r,a,c){if(ls){var u=Ac(t,r,a,c);if(u===null)Kc(t,r,c,cs,a),dp(t,c);else if(Fx(u,t,r,a,c))c.stopPropagation();else if(dp(t,c),r&4&&-1<Dx.indexOf(t)){for(;u!==null;){var m=ii(u);if(m!==null&&ip(m),m=Ac(t,r,a,c),m===null&&Kc(t,r,c,cs,a),m===u)break;u=m}u!==null&&c.stopPropagation()}else Kc(t,r,c,null,a)}}var cs=null;function Ac(t,r,a,c){if(cs=null,t=Jt(c),t=wo(t),t!==null)if(r=ur(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Vo(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return cs=t,null}function pp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ns()){case Q:return 1;case me:return 4;case ye:case Je:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var zr=null,Tc=null,ds=null;function fp(){if(ds)return ds;var t,r=Tc,a=r.length,c,u="value"in zr?zr.value:zr.textContent,m=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[m-c];c++);return ds=u.slice(t,1<c?1-c:void 0)}function us(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function hs(){return!0}function mp(){return!1}function vn(t){function r(a,c,u,m,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?hs:mp,this.isPropagationStopped=mp,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),r}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=vn(Yo),Ka=Y({},Yo,{view:0,detail:0}),Ux=vn(Ka),Ic,Pc,Qa,ps=Y({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Ic=t.screenX-Qa.screenX,Pc=t.screenY-Qa.screenY):Pc=Ic=0,Qa=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),gp=vn(ps),qx=Y({},ps,{dataTransfer:0}),Vx=vn(qx),Gx=Y({},Ka,{relatedTarget:0}),zc=vn(Gx),Yx=Y({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=vn(Yx),Qx=Y({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=vn(Qx),Xx=Y({},Yo,{data:0}),vp=vn(Xx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ty[t])?!!r[t]:!1}function Oc(){return ny}var ry=Y({},Ka,{key:function(t){if(t.key){var r=Jx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oy=vn(ry),ay=Y({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=vn(ay),iy=Y({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),sy=vn(iy),ly=Y({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=vn(ly),dy=Y({},ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=vn(dy),hy=[9,13,27,32],Dc=f&&"CompositionEvent"in window,Za=null;f&&"documentMode"in document&&(Za=document.documentMode);var py=f&&"TextEvent"in window&&!Za,yp=f&&(!Dc||Za&&8<Za&&11>=Za),wp=" ",bp=!1;function kp(t,r){switch(t){case"keyup":return hy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ko=!1;function fy(t,r){switch(t){case"compositionend":return Cp(r);case"keypress":return r.which!==32?null:(bp=!0,wp);case"textInput":return t=r.data,t===wp&&bp?null:t;default:return null}}function my(t,r){if(Ko)return t==="compositionend"||!Dc&&kp(t,r)?(t=fp(),ds=Tc=zr=null,Ko=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yp&&r.locale!=="ko"?null:r.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!gy[t.type]:r==="textarea"}function jp(t,r,a,c){Nr(c),r=xs(r,"onChange"),0<r.length&&(a=new Ec("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Xa=null,Ja=null;function vy(t){Wp(t,0)}function fs(t){var r=ea(t);if(ve(r))return t}function xy(t,r){if(t==="change")return r}var Sp=!1;if(f){var Fc;if(f){var Bc="oninput"in document;if(!Bc){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),Bc=typeof Mp.oninput=="function"}Fc=Bc}else Fc=!1;Sp=Fc&&(!document.documentMode||9<document.documentMode)}function $p(){Xa&&(Xa.detachEvent("onpropertychange",Rp),Ja=Xa=null)}function Rp(t){if(t.propertyName==="value"&&fs(Ja)){var r=[];jp(r,Ja,t,Jt(t)),es(vy,r)}}function yy(t,r,a){t==="focusin"?($p(),Xa=r,Ja=a,Xa.attachEvent("onpropertychange",Rp)):t==="focusout"&&$p()}function wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fs(Ja)}function by(t,r){if(t==="click")return fs(r)}function ky(t,r){if(t==="input"||t==="change")return fs(r)}function Cy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Wn=typeof Object.is=="function"?Object.is:Cy;function ei(t,r){if(Wn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!v.call(r,u)||!Wn(t[u],r[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,r){var a=Np(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Ap(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ap(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Tp(){for(var t=window,r=be();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=be(t.document)}return r}function Hc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function _y(t){var r=Tp(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ap(a.ownerDocument.documentElement,a)){if(c!==null&&Hc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=Lp(a,m);var b=Lp(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=f&&"documentMode"in document&&11>=document.documentMode,Qo=null,Wc=null,ti=null,Uc=!1;function Ep(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Qo==null||Qo!==be(c)||(c=Qo,"selectionStart"in c&&Hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ti&&ei(ti,c)||(ti=c,c=xs(Wc,"onSelect"),0<c.length&&(r=new Ec("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Qo)))}function ms(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Zo={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},qc={},Ip={};f&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function gs(t){if(qc[t])return qc[t];if(!Zo[t])return t;var r=Zo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ip)return qc[t]=r[a];return t}var Pp=gs("animationend"),zp=gs("animationiteration"),Op=gs("animationstart"),Dp=gs("transitionend"),Fp=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,r){Fp.set(t,r),d(r,[t])}for(var Vc=0;Vc<Bp.length;Vc++){var Gc=Bp[Vc],Sy=Gc.toLowerCase(),My=Gc[0].toUpperCase()+Gc.slice(1);Or(Sy,"on"+My)}Or(Pp,"onAnimationEnd"),Or(zp,"onAnimationIteration"),Or(Op,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Dp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Hp(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,kc(c,r,void 0,t),t.currentTarget=null}function Wp(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],W=I.instance,re=I.currentTarget;if(I=I.listener,W!==m&&u.isPropagationStopped())break e;Hp(u,I,re),m=W}else for(b=0;b<c.length;b++){if(I=c[b],W=I.instance,re=I.currentTarget,I=I.listener,W!==m&&u.isPropagationStopped())break e;Hp(u,I,re),m=W}}}if(Ar)throw t=Da,Ar=!1,Da=null,t}function ut(t,r){var a=r[td];a===void 0&&(a=r[td]=new Set);var c=t+"__bubble";a.has(c)||(Up(r,t,2,!1),a.add(c))}function Yc(t,r,a){var c=0;r&&(c|=4),Up(a,t,c,r)}var vs="_reactListening"+Math.random().toString(36).slice(2);function ri(t){if(!t[vs]){t[vs]=!0,s.forEach(function(a){a!=="selectionchange"&&($y.has(a)||Yc(a,!1,t),Yc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[vs]||(r[vs]=!0,Yc("selectionchange",!1,r))}}function Up(t,r,a,c){switch(pp(r)){case 1:var u=Hx;break;case 4:u=Wx;break;default:u=Lc}a=u.bind(null,r,a,t),u=void 0,!qo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Kc(t,r,a,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===u||W.nodeType===8&&W.parentNode===u))return;b=b.return}for(;I!==null;){if(b=wo(I),b===null)return;if(W=b.tag,W===5||W===6){c=m=b;continue e}I=I.parentNode}}c=c.return}es(function(){var re=m,he=Jt(a),fe=[];e:{var ue=Fp.get(t);if(ue!==void 0){var we=Ec,_e=t;switch(t){case"keypress":if(us(a)===0)break e;case"keydown":case"keyup":we=oy;break;case"focusin":_e="focus",we=zc;break;case"focusout":_e="blur",we=zc;break;case"beforeblur":case"afterblur":we=zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=sy;break;case Pp:case zp:case Op:we=Kx;break;case Dp:we=cy;break;case"scroll":we=Ux;break;case"wheel":we=uy;break;case"copy":case"cut":case"paste":we=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=xp}var je=(r&4)!==0,_t=!je&&t==="scroll",X=je?ue!==null?ue+"Capture":null:ue;je=[];for(var G=re,te;G!==null;){te=G;var ge=te.stateNode;if(te.tag===5&&ge!==null&&(te=ge,X!==null&&(ge=mo(G,X),ge!=null&&je.push(oi(G,ge,te)))),_t)break;G=G.return}0<je.length&&(ue=new we(ue,_e,null,a,he),fe.push({event:ue,listeners:je}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",we=t==="mouseout"||t==="pointerout",ue&&a!==cr&&(_e=a.relatedTarget||a.fromElement)&&(wo(_e)||_e[pr]))break e;if((we||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,we?(_e=a.relatedTarget||a.toElement,we=re,_e=_e?wo(_e):null,_e!==null&&(_t=ur(_e),_e!==_t||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(we=null,_e=re),we!==_e)){if(je=gp,ge="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=xp,ge="onPointerLeave",X="onPointerEnter",G="pointer"),_t=we==null?ue:ea(we),te=_e==null?ue:ea(_e),ue=new je(ge,G+"leave",we,a,he),ue.target=_t,ue.relatedTarget=te,ge=null,wo(he)===re&&(je=new je(X,G+"enter",_e,a,he),je.target=te,je.relatedTarget=_t,ge=je),_t=ge,we&&_e)t:{for(je=we,X=_e,G=0,te=je;te;te=Xo(te))G++;for(te=0,ge=X;ge;ge=Xo(ge))te++;for(;0<G-te;)je=Xo(je),G--;for(;0<te-G;)X=Xo(X),te--;for(;G--;){if(je===X||X!==null&&je===X.alternate)break t;je=Xo(je),X=Xo(X)}je=null}else je=null;we!==null&&qp(fe,ue,we,je,!1),_e!==null&&_t!==null&&qp(fe,_t,_e,je,!0)}}e:{if(ue=re?ea(re):window,we=ue.nodeName&&ue.nodeName.toLowerCase(),we==="select"||we==="input"&&ue.type==="file")var Me=xy;else if(_p(ue))if(Sp)Me=ky;else{Me=wy;var Re=yy}else(we=ue.nodeName)&&we.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Me=by);if(Me&&(Me=Me(t,re))){jp(fe,Me,a,he);break e}Re&&Re(t,ue,re),t==="focusout"&&(Re=ue._wrapperState)&&Re.controlled&&ue.type==="number"&&Ae(ue,"number",ue.value)}switch(Re=re?ea(re):window,t){case"focusin":(_p(Re)||Re.contentEditable==="true")&&(Qo=Re,Wc=re,ti=null);break;case"focusout":ti=Wc=Qo=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Ep(fe,a,he);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Ep(fe,a,he)}var Ne;if(Dc)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ko?kp(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(yp&&a.locale!=="ko"&&(Ko||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ko&&(Ne=fp()):(zr=he,Tc="value"in zr?zr.value:zr.textContent,Ko=!0)),Re=xs(re,Ee),0<Re.length&&(Ee=new vp(Ee,t,null,a,he),fe.push({event:Ee,listeners:Re}),Ne?Ee.data=Ne:(Ne=Cp(a),Ne!==null&&(Ee.data=Ne)))),(Ne=py?fy(t,a):my(t,a))&&(re=xs(re,"onBeforeInput"),0<re.length&&(he=new vp("onBeforeInput","beforeinput",null,a,he),fe.push({event:he,listeners:re}),he.data=Ne))}Wp(fe,r)})}function oi(t,r,a){return{instance:t,listener:r,currentTarget:a}}function xs(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=mo(t,a),m!=null&&c.unshift(oi(t,m,u)),m=mo(t,r),m!=null&&c.push(oi(t,m,u))),t=t.return}return c}function Xo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qp(t,r,a,c,u){for(var m=r._reactName,b=[];a!==null&&a!==c;){var I=a,W=I.alternate,re=I.stateNode;if(W!==null&&W===c)break;I.tag===5&&re!==null&&(I=re,u?(W=mo(a,m),W!=null&&b.unshift(oi(a,W,I))):u||(W=mo(a,m),W!=null&&b.push(oi(a,W,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var Ry=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Ny,"")}function ys(t,r,a){if(r=Vp(r),Vp(t)!==r&&a)throw Error(i(425))}function ws(){}var Qc=null,Zc=null;function Xc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,Ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(Ty)}:Jc;function Ty(t){setTimeout(function(){throw t})}function ed(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Ya(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Ya(r)}function Dr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),nr="__reactFiber$"+Jo,ai="__reactProps$"+Jo,pr="__reactContainer$"+Jo,td="__reactEvents$"+Jo,Ey="__reactListeners$"+Jo,Iy="__reactHandles$"+Jo;function wo(t){var r=t[nr];if(r)return r;for(var a=t.parentNode;a;){if(r=a[pr]||a[nr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Yp(t);t!==null;){if(a=t[nr])return a;t=Yp(t)}return r}t=a,a=t.parentNode}return null}function ii(t){return t=t[nr]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ea(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function bs(t){return t[ai]||null}var nd=[],ta=-1;function Fr(t){return{current:t}}function ht(t){0>ta||(t.current=nd[ta],nd[ta]=null,ta--)}function ct(t,r){ta++,nd[ta]=t.current,t.current=r}var Br={},Yt=Fr(Br),on=Fr(!1),bo=Br;function na(t,r){var a=t.type.contextTypes;if(!a)return Br;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in a)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function an(t){return t=t.childContextTypes,t!=null}function ks(){ht(on),ht(Yt)}function Kp(t,r,a){if(Yt.current!==Br)throw Error(i(168));ct(Yt,r),ct(on,a)}function Qp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,H(t)||"Unknown",u));return Y({},a,c)}function Cs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,bo=Yt.current,ct(Yt,t),ct(on,on.current),!0}function Zp(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Qp(t,r,bo),c.__reactInternalMemoizedMergedChildContext=t,ht(on),ht(Yt),ct(Yt,t)):ht(on),ct(on,a)}var fr=null,_s=!1,rd=!1;function Xp(t){fr===null?fr=[t]:fr.push(t)}function Py(t){_s=!0,Xp(t)}function Hr(){if(!rd&&fr!==null){rd=!0;var t=0,r=at;try{var a=fr;for(at=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}fr=null,_s=!1}catch(u){throw fr!==null&&(fr=fr.slice(t+1)),Fa(Q,Hr),u}finally{at=r,rd=!1}}return null}var ra=[],oa=0,js=null,Ss=0,Nn=[],Ln=0,ko=null,mr=1,gr="";function Co(t,r){ra[oa++]=Ss,ra[oa++]=js,js=t,Ss=r}function Jp(t,r,a){Nn[Ln++]=mr,Nn[Ln++]=gr,Nn[Ln++]=ko,ko=t;var c=mr;t=gr;var u=32-Ct(c)-1;c&=~(1<<u),a+=1;var m=32-Ct(r)+u;if(30<m){var b=u-u%5;m=(c&(1<<b)-1).toString(32),c>>=b,u-=b,mr=1<<32-Ct(r)+u|a<<u|c,gr=m+t}else mr=1<<m|a<<u|c,gr=t}function od(t){t.return!==null&&(Co(t,1),Jp(t,1,0))}function ad(t){for(;t===js;)js=ra[--oa],ra[oa]=null,Ss=ra[--oa],ra[oa]=null;for(;t===ko;)ko=Nn[--Ln],Nn[Ln]=null,gr=Nn[--Ln],Nn[Ln]=null,mr=Nn[--Ln],Nn[Ln]=null}var xn=null,yn=null,mt=!1,Un=null;function e1(t,r){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function t1(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xn=t,yn=Dr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xn=t,yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ko!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,xn=t,yn=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(mt){var r=yn;if(r){var a=r;if(!t1(t,r)){if(id(t))throw Error(i(418));r=Dr(a.nextSibling);var c=xn;r&&t1(t,r)?e1(c,a):(t.flags=t.flags&-4097|2,mt=!1,xn=t)}}else{if(id(t))throw Error(i(418));t.flags=t.flags&-4097|2,mt=!1,xn=t}}}function n1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ms(t){if(t!==xn)return!1;if(!mt)return n1(t),mt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Xc(t.type,t.memoizedProps)),r&&(r=yn)){if(id(t))throw r1(),Error(i(418));for(;r;)e1(t,r),r=Dr(r.nextSibling)}if(n1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){yn=Dr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}yn=null}}else yn=xn?Dr(t.stateNode.nextSibling):null;return!0}function r1(){for(var t=yn;t;)t=Dr(t.nextSibling)}function aa(){yn=xn=null,mt=!1}function ld(t){Un===null?Un=[t]:Un.push(t)}var zy=z.ReactCurrentBatchConfig;function si(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var I=u.refs;b===null?delete I[m]:I[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function $s(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function o1(t){var r=t._init;return r(t._payload)}function a1(t){function r(X,G){if(t){var te=X.deletions;te===null?(X.deletions=[G],X.flags|=16):te.push(G)}}function a(X,G){if(!t)return null;for(;G!==null;)r(X,G),G=G.sibling;return null}function c(X,G){for(X=new Map;G!==null;)G.key!==null?X.set(G.key,G):X.set(G.index,G),G=G.sibling;return X}function u(X,G){return X=Qr(X,G),X.index=0,X.sibling=null,X}function m(X,G,te){return X.index=te,t?(te=X.alternate,te!==null?(te=te.index,te<G?(X.flags|=2,G):te):(X.flags|=2,G)):(X.flags|=1048576,G)}function b(X){return t&&X.alternate===null&&(X.flags|=2),X}function I(X,G,te,ge){return G===null||G.tag!==6?(G=Jd(te,X.mode,ge),G.return=X,G):(G=u(G,te),G.return=X,G)}function W(X,G,te,ge){var Me=te.type;return Me===E?he(X,G,te.props.children,ge,te.key):G!==null&&(G.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===se&&o1(Me)===G.type)?(ge=u(G,te.props),ge.ref=si(X,G,te),ge.return=X,ge):(ge=Xs(te.type,te.key,te.props,null,X.mode,ge),ge.ref=si(X,G,te),ge.return=X,ge)}function re(X,G,te,ge){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=eu(te,X.mode,ge),G.return=X,G):(G=u(G,te.children||[]),G.return=X,G)}function he(X,G,te,ge,Me){return G===null||G.tag!==7?(G=Lo(te,X.mode,ge,Me),G.return=X,G):(G=u(G,te),G.return=X,G)}function fe(X,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Jd(""+G,X.mode,te),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return te=Xs(G.type,G.key,G.props,null,X.mode,te),te.ref=si(X,null,G),te.return=X,te;case T:return G=eu(G,X.mode,te),G.return=X,G;case se:var ge=G._init;return fe(X,ge(G._payload),te)}if(Ze(G)||F(G))return G=Lo(G,X.mode,te,null),G.return=X,G;$s(X,G)}return null}function ue(X,G,te,ge){var Me=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Me!==null?null:I(X,G,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case L:return te.key===Me?W(X,G,te,ge):null;case T:return te.key===Me?re(X,G,te,ge):null;case se:return Me=te._init,ue(X,G,Me(te._payload),ge)}if(Ze(te)||F(te))return Me!==null?null:he(X,G,te,ge,null);$s(X,te)}return null}function we(X,G,te,ge,Me){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return X=X.get(te)||null,I(G,X,""+ge,Me);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case L:return X=X.get(ge.key===null?te:ge.key)||null,W(G,X,ge,Me);case T:return X=X.get(ge.key===null?te:ge.key)||null,re(G,X,ge,Me);case se:var Re=ge._init;return we(X,G,te,Re(ge._payload),Me)}if(Ze(ge)||F(ge))return X=X.get(te)||null,he(G,X,ge,Me,null);$s(G,ge)}return null}function _e(X,G,te,ge){for(var Me=null,Re=null,Ne=G,Ee=G=0,Dt=null;Ne!==null&&Ee<te.length;Ee++){Ne.index>Ee?(Dt=Ne,Ne=null):Dt=Ne.sibling;var tt=ue(X,Ne,te[Ee],ge);if(tt===null){Ne===null&&(Ne=Dt);break}t&&Ne&&tt.alternate===null&&r(X,Ne),G=m(tt,G,Ee),Re===null?Me=tt:Re.sibling=tt,Re=tt,Ne=Dt}if(Ee===te.length)return a(X,Ne),mt&&Co(X,Ee),Me;if(Ne===null){for(;Ee<te.length;Ee++)Ne=fe(X,te[Ee],ge),Ne!==null&&(G=m(Ne,G,Ee),Re===null?Me=Ne:Re.sibling=Ne,Re=Ne);return mt&&Co(X,Ee),Me}for(Ne=c(X,Ne);Ee<te.length;Ee++)Dt=we(Ne,X,Ee,te[Ee],ge),Dt!==null&&(t&&Dt.alternate!==null&&Ne.delete(Dt.key===null?Ee:Dt.key),G=m(Dt,G,Ee),Re===null?Me=Dt:Re.sibling=Dt,Re=Dt);return t&&Ne.forEach(function(Zr){return r(X,Zr)}),mt&&Co(X,Ee),Me}function je(X,G,te,ge){var Me=F(te);if(typeof Me!="function")throw Error(i(150));if(te=Me.call(te),te==null)throw Error(i(151));for(var Re=Me=null,Ne=G,Ee=G=0,Dt=null,tt=te.next();Ne!==null&&!tt.done;Ee++,tt=te.next()){Ne.index>Ee?(Dt=Ne,Ne=null):Dt=Ne.sibling;var Zr=ue(X,Ne,tt.value,ge);if(Zr===null){Ne===null&&(Ne=Dt);break}t&&Ne&&Zr.alternate===null&&r(X,Ne),G=m(Zr,G,Ee),Re===null?Me=Zr:Re.sibling=Zr,Re=Zr,Ne=Dt}if(tt.done)return a(X,Ne),mt&&Co(X,Ee),Me;if(Ne===null){for(;!tt.done;Ee++,tt=te.next())tt=fe(X,tt.value,ge),tt!==null&&(G=m(tt,G,Ee),Re===null?Me=tt:Re.sibling=tt,Re=tt);return mt&&Co(X,Ee),Me}for(Ne=c(X,Ne);!tt.done;Ee++,tt=te.next())tt=we(Ne,X,Ee,tt.value,ge),tt!==null&&(t&&tt.alternate!==null&&Ne.delete(tt.key===null?Ee:tt.key),G=m(tt,G,Ee),Re===null?Me=tt:Re.sibling=tt,Re=tt);return t&&Ne.forEach(function(g3){return r(X,g3)}),mt&&Co(X,Ee),Me}function _t(X,G,te,ge){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case L:e:{for(var Me=te.key,Re=G;Re!==null;){if(Re.key===Me){if(Me=te.type,Me===E){if(Re.tag===7){a(X,Re.sibling),G=u(Re,te.props.children),G.return=X,X=G;break e}}else if(Re.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===se&&o1(Me)===Re.type){a(X,Re.sibling),G=u(Re,te.props),G.ref=si(X,Re,te),G.return=X,X=G;break e}a(X,Re);break}else r(X,Re);Re=Re.sibling}te.type===E?(G=Lo(te.props.children,X.mode,ge,te.key),G.return=X,X=G):(ge=Xs(te.type,te.key,te.props,null,X.mode,ge),ge.ref=si(X,G,te),ge.return=X,X=ge)}return b(X);case T:e:{for(Re=te.key;G!==null;){if(G.key===Re)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(X,G.sibling),G=u(G,te.children||[]),G.return=X,X=G;break e}else{a(X,G);break}else r(X,G);G=G.sibling}G=eu(te,X.mode,ge),G.return=X,X=G}return b(X);case se:return Re=te._init,_t(X,G,Re(te._payload),ge)}if(Ze(te))return _e(X,G,te,ge);if(F(te))return je(X,G,te,ge);$s(X,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(X,G.sibling),G=u(G,te),G.return=X,X=G):(a(X,G),G=Jd(te,X.mode,ge),G.return=X,X=G),b(X)):a(X,G)}return _t}var ia=a1(!0),i1=a1(!1),Rs=Fr(null),Ns=null,sa=null,cd=null;function dd(){cd=sa=Ns=null}function ud(t){var r=Rs.current;ht(Rs),t._currentValue=r}function hd(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function la(t,r){Ns=t,cd=sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(sn=!0),t.firstContext=null)}function An(t){var r=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:r,next:null},sa===null){if(Ns===null)throw Error(i(308));sa=t,Ns.dependencies={lanes:0,firstContext:t}}else sa=sa.next=t;return r}var _o=null;function pd(t){_o===null?_o=[t]:_o.push(t)}function s1(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,pd(r)):(a.next=u.next,u.next=a),r.interleaved=a,vr(t,c)}function vr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Wr=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l1(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Ur(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(et&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,vr(t,a)}return u=c.interleaved,u===null?(r.next=r,pd(c)):(r.next=u.next,u.next=r),c.interleaved=r,vr(t,a)}function Ls(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,$c(t,a)}}function c1(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?u=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?u=m=r:m=m.next=r}else u=m=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function As(t,r,a,c){var u=t.updateQueue;Wr=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var W=I,re=W.next;W.next=null,b===null?m=re:b.next=re,b=W;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=re:I.next=re,he.lastBaseUpdate=W))}if(m!==null){var fe=u.baseState;b=0,he=re=W=null,I=m;do{var ue=I.lane,we=I.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:we,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var _e=t,je=I;switch(ue=r,we=a,je.tag){case 1:if(_e=je.payload,typeof _e=="function"){fe=_e.call(we,fe,ue);break e}fe=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=je.payload,ue=typeof _e=="function"?_e.call(we,fe,ue):_e,ue==null)break e;fe=Y({},fe,ue);break e;case 2:Wr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else we={eventTime:we,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(re=he=we,W=fe):he=he.next=we,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(W=fe),u.baseState=W,u.firstBaseUpdate=re,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);Mo|=b,t.lanes=b,t.memoizedState=fe}}function d1(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var li={},rr=Fr(li),ci=Fr(li),di=Fr(li);function jo(t){if(t===li)throw Error(i(174));return t}function md(t,r){switch(ct(di,r),ct(ci,t),ct(rr,li),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=He(r,t)}ht(rr),ct(rr,r)}function ca(){ht(rr),ht(ci),ht(di)}function u1(t){jo(di.current);var r=jo(rr.current),a=He(r,t.type);r!==a&&(ct(ci,t),ct(rr,a))}function gd(t){ci.current===t&&(ht(rr),ht(ci))}var xt=Fr(0);function Ts(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var vd=[];function xd(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var Es=z.ReactCurrentDispatcher,yd=z.ReactCurrentBatchConfig,So=0,yt=null,Tt=null,zt=null,Is=!1,ui=!1,hi=0,Oy=0;function Kt(){throw Error(i(321))}function wd(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Wn(t[a],r[a]))return!1;return!0}function bd(t,r,a,c,u,m){if(So=m,yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Es.current=t===null||t.memoizedState===null?Hy:Wy,t=a(c,u),ui){m=0;do{if(ui=!1,hi=0,25<=m)throw Error(i(301));m+=1,zt=Tt=null,r.updateQueue=null,Es.current=Uy,t=a(c,u)}while(ui)}if(Es.current=Os,r=Tt!==null&&Tt.next!==null,So=0,zt=Tt=yt=null,Is=!1,r)throw Error(i(300));return t}function kd(){var t=hi!==0;return hi=0,t}function or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?yt.memoizedState=zt=t:zt=zt.next=t,zt}function Tn(){if(Tt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var r=zt===null?yt.memoizedState:zt.next;if(r!==null)zt=r,Tt=t;else{if(t===null)throw Error(i(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},zt===null?yt.memoizedState=zt=t:zt=zt.next=t}return zt}function pi(t,r){return typeof r=="function"?r(t):r}function Cd(t){var r=Tn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=Tt,u=c.baseQueue,m=a.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}c.baseQueue=u=m,a.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=b=null,W=null,re=m;do{var he=re.lane;if((So&he)===he)W!==null&&(W=W.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var fe={lane:he,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};W===null?(I=W=fe,b=c):W=W.next=fe,yt.lanes|=he,Mo|=he}re=re.next}while(re!==null&&re!==m);W===null?b=c:W.next=I,Wn(c,r.memoizedState)||(sn=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=W,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do m=u.lane,yt.lanes|=m,Mo|=m,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function _d(t){var r=Tn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,m=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do m=t(m,b.action),b=b.next;while(b!==u);Wn(m,r.memoizedState)||(sn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function h1(){}function p1(t,r){var a=yt,c=Tn(),u=r(),m=!Wn(c.memoizedState,u);if(m&&(c.memoizedState=u,sn=!0),c=c.queue,jd(g1.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,fi(9,m1.bind(null,a,c,u,r),void 0,null),Ot===null)throw Error(i(349));(So&30)!==0||f1(a,r,u)}return u}function f1(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=yt.updateQueue,r===null?(r={lastEffect:null,stores:null},yt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function m1(t,r,a,c){r.value=a,r.getSnapshot=c,v1(r)&&x1(t)}function g1(t,r,a){return a(function(){v1(r)&&x1(t)})}function v1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Wn(t,a)}catch{return!0}}function x1(t){var r=vr(t,1);r!==null&&Yn(r,t,1,-1)}function y1(t){var r=or();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:t},r.queue=t,t=t.dispatch=By.bind(null,yt,t),[r.memoizedState,t]}function fi(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=yt.updateQueue,r===null?(r={lastEffect:null,stores:null},yt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function w1(){return Tn().memoizedState}function Ps(t,r,a,c){var u=or();yt.flags|=t,u.memoizedState=fi(1|r,a,void 0,c===void 0?null:c)}function zs(t,r,a,c){var u=Tn();c=c===void 0?null:c;var m=void 0;if(Tt!==null){var b=Tt.memoizedState;if(m=b.destroy,c!==null&&wd(c,b.deps)){u.memoizedState=fi(r,a,m,c);return}}yt.flags|=t,u.memoizedState=fi(1|r,a,m,c)}function b1(t,r){return Ps(8390656,8,t,r)}function jd(t,r){return zs(2048,8,t,r)}function k1(t,r){return zs(4,2,t,r)}function C1(t,r){return zs(4,4,t,r)}function _1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function j1(t,r,a){return a=a!=null?a.concat([t]):null,zs(4,4,_1.bind(null,r,t),a)}function Sd(){}function S1(t,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&wd(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function M1(t,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&wd(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function $1(t,r,a){return(So&21)===0?(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=a):(Wn(a,r)||(a=op(),yt.lanes|=a,Mo|=a,t.baseState=!0),r)}function Dy(t,r){var a=at;at=a!==0&&4>a?a:4,t(!0);var c=yd.transition;yd.transition={};try{t(!1),r()}finally{at=a,yd.transition=c}}function R1(){return Tn().memoizedState}function Fy(t,r,a){var c=Yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},N1(t))L1(r,a);else if(a=s1(t,r,a,c),a!==null){var u=tn();Yn(a,t,c,u),A1(a,r,c)}}function By(t,r,a){var c=Yr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(N1(t))L1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,I=m(b,a);if(u.hasEagerState=!0,u.eagerState=I,Wn(I,b)){var W=r.interleaved;W===null?(u.next=u,pd(r)):(u.next=W.next,W.next=u),r.interleaved=u;return}}catch{}finally{}a=s1(t,r,u,c),a!==null&&(u=tn(),Yn(a,t,c,u),A1(a,r,c))}}function N1(t){var r=t.alternate;return t===yt||r!==null&&r===yt}function L1(t,r){ui=Is=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function A1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,$c(t,a)}}var Os={readContext:An,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Hy={readContext:An,useCallback:function(t,r){return or().memoizedState=[t,r===void 0?null:r],t},useContext:An,useEffect:b1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ps(4194308,4,_1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ps(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ps(4,2,t,r)},useMemo:function(t,r){var a=or();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=or();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Fy.bind(null,yt,t),[c.memoizedState,t]},useRef:function(t){var r=or();return t={current:t},r.memoizedState=t},useState:y1,useDebugValue:Sd,useDeferredValue:function(t){return or().memoizedState=t},useTransition:function(){var t=y1(!1),r=t[0];return t=Dy.bind(null,t[1]),or().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=yt,u=or();if(mt){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Ot===null)throw Error(i(349));(So&30)!==0||f1(c,r,a)}u.memoizedState=a;var m={value:a,getSnapshot:r};return u.queue=m,b1(g1.bind(null,c,m,t),[t]),c.flags|=2048,fi(9,m1.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=or(),r=Ot.identifierPrefix;if(mt){var a=gr,c=mr;a=(c&~(1<<32-Ct(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=hi++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Oy++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Wy={readContext:An,useCallback:S1,useContext:An,useEffect:jd,useImperativeHandle:j1,useInsertionEffect:k1,useLayoutEffect:C1,useMemo:M1,useReducer:Cd,useRef:w1,useState:function(){return Cd(pi)},useDebugValue:Sd,useDeferredValue:function(t){var r=Tn();return $1(r,Tt.memoizedState,t)},useTransition:function(){var t=Cd(pi)[0],r=Tn().memoizedState;return[t,r]},useMutableSource:h1,useSyncExternalStore:p1,useId:R1,unstable_isNewReconciler:!1},Uy={readContext:An,useCallback:S1,useContext:An,useEffect:jd,useImperativeHandle:j1,useInsertionEffect:k1,useLayoutEffect:C1,useMemo:M1,useReducer:_d,useRef:w1,useState:function(){return _d(pi)},useDebugValue:Sd,useDeferredValue:function(t){var r=Tn();return Tt===null?r.memoizedState=t:$1(r,Tt.memoizedState,t)},useTransition:function(){var t=_d(pi)[0],r=Tn().memoizedState;return[t,r]},useMutableSource:h1,useSyncExternalStore:p1,useId:R1,unstable_isNewReconciler:!1};function qn(t,r){if(t&&t.defaultProps){r=Y({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Md(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:Y({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ds={isMounted:function(t){return(t=t._reactInternals)?ur(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=tn(),u=Yr(t),m=xr(c,u);m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Yn(r,t,u,c),Ls(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=tn(),u=Yr(t),m=xr(c,u);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Yn(r,t,u,c),Ls(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=tn(),c=Yr(t),u=xr(a,c);u.tag=2,r!=null&&(u.callback=r),r=Ur(t,u,c),r!==null&&(Yn(r,t,c,a),Ls(r,t,c))}};function T1(t,r,a,c,u,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!ei(a,c)||!ei(u,m):!0}function E1(t,r,a){var c=!1,u=Br,m=r.contextType;return typeof m=="object"&&m!==null?m=An(m):(u=an(r)?bo:Yt.current,c=r.contextTypes,m=(c=c!=null)?na(t,u):Br),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ds,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function I1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Ds.enqueueReplaceState(r,r.state,null)}function $d(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},fd(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=An(m):(m=an(r)?bo:Yt.current,u.context=na(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(Md(t,r,m,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Ds.enqueueReplaceState(u,u.state,null),As(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function da(t,r){try{var a="",c=r;do a+=J(c),c=c.return;while(c);var u=a}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function Rd(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Nd(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function P1(t,r,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Vs||(Vs=!0,qd=c),Nd(t,r)},a}function z1(t,r,a){a=xr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){Nd(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Nd(t,r),typeof c!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function O1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new qy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=a3.bind(null,t,r,a),r.then(t,t))}function D1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function F1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=xr(-1,1),r.tag=2,Ur(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Vy=z.ReactCurrentOwner,sn=!1;function en(t,r,a,c){r.child=t===null?i1(r,null,a,c):ia(r,t.child,a,c)}function B1(t,r,a,c,u){a=a.render;var m=r.ref;return la(r,u),c=bd(t,r,a,c,m,u),a=kd(),t!==null&&!sn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(mt&&a&&od(r),r.flags|=1,en(t,r,c,u),r.child)}function H1(t,r,a,c,u){if(t===null){var m=a.type;return typeof m=="function"&&!Xd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,W1(t,r,m,c,u)):(t=Xs(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:ei,a(b,c)&&t.ref===r.ref)return yr(t,r,u)}return r.flags|=1,t=Qr(m,c),t.ref=r.ref,t.return=r,r.child=t}function W1(t,r,a,c,u){if(t!==null){var m=t.memoizedProps;if(ei(m,c)&&t.ref===r.ref)if(sn=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(sn=!0);else return r.lanes=t.lanes,yr(t,r,u)}return Ld(t,r,a,c,u)}function U1(t,r,a){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ha,wn),wn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(ha,wn),wn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ct(ha,wn),wn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,ct(ha,wn),wn|=c;return en(t,r,u,a),r.child}function q1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ld(t,r,a,c,u){var m=an(a)?bo:Yt.current;return m=na(r,m),la(r,u),a=bd(t,r,a,c,m,u),c=kd(),t!==null&&!sn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(mt&&c&&od(r),r.flags|=1,en(t,r,a,u),r.child)}function V1(t,r,a,c,u){if(an(a)){var m=!0;Cs(r)}else m=!1;if(la(r,u),r.stateNode===null)Bs(t,r),E1(r,a,c),$d(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var W=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=An(re):(re=an(a)?bo:Yt.current,re=na(r,re));var he=a.getDerivedStateFromProps,fe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";fe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||W!==re)&&I1(r,b,c,re),Wr=!1;var ue=r.memoizedState;b.state=ue,As(r,c,b,u),W=r.memoizedState,I!==c||ue!==W||on.current||Wr?(typeof he=="function"&&(Md(r,a,he,c),W=r.memoizedState),(I=Wr||T1(r,a,I,c,ue,W,re))?(fe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=W),b.props=c,b.state=W,b.context=re,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,l1(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:qn(r.type,I),b.props=re,fe=r.pendingProps,ue=b.context,W=a.contextType,typeof W=="object"&&W!==null?W=An(W):(W=an(a)?bo:Yt.current,W=na(r,W));var we=a.getDerivedStateFromProps;(he=typeof we=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==fe||ue!==W)&&I1(r,b,c,W),Wr=!1,ue=r.memoizedState,b.state=ue,As(r,c,b,u);var _e=r.memoizedState;I!==fe||ue!==_e||on.current||Wr?(typeof we=="function"&&(Md(r,a,we,c),_e=r.memoizedState),(re=Wr||T1(r,a,re,c,ue,_e,W)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,_e,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,_e,W)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=_e),b.props=c,b.state=_e,b.context=W,c=re):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return Ad(t,r,a,c,m,u)}function Ad(t,r,a,c,u,m){q1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Zp(r,a,!1),yr(t,r,m);c=r.stateNode,Vy.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=ia(r,t.child,null,m),r.child=ia(r,null,I,m)):en(t,r,I,m),r.memoizedState=c.state,u&&Zp(r,a,!0),r.child}function G1(t){var r=t.stateNode;r.pendingContext?Kp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Kp(t,r.context,!1),md(t,r.containerInfo)}function Y1(t,r,a,c,u){return aa(),ld(u),r.flags|=256,en(t,r,a,c),r.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function K1(t,r,a){var c=r.pendingProps,u=xt.current,m=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),ct(xt,u&1),t===null)return sd(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Js(b,c,0,null),t=Lo(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=Ed(a),r.memoizedState=Td,t):Id(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Gy(t,r,b,c,I,u,a);if(m){m=c.fallback,b=r.mode,u=t.child,I=u.sibling;var W={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=W,r.deletions=null):(c=Qr(u,W),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Qr(I,m):(m=Lo(m,b,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?Ed(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=Td,c}return m=t.child,t=m.sibling,c=Qr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Id(t,r){return r=Js({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Fs(t,r,a,c){return c!==null&&ld(c),ia(r,t.child,null,a),t=Id(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Gy(t,r,a,c,u,m,b){if(a)return r.flags&256?(r.flags&=-257,c=Rd(Error(i(422))),Fs(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=Js({mode:"visible",children:c.children},u,0,null),m=Lo(m,u,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&ia(r,t.child,null,b),r.child.memoizedState=Ed(b),r.memoizedState=Td,m);if((r.mode&1)===0)return Fs(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(i(419)),c=Rd(m,c,void 0),Fs(t,r,b,c)}if(I=(b&t.childLanes)!==0,sn||I){if(c=Ot,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,vr(t,u),Yn(c,t,u,-1))}return Zd(),c=Rd(Error(i(421))),Fs(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=i3.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,yn=Dr(u.nextSibling),xn=r,mt=!0,Un=null,t!==null&&(Nn[Ln++]=mr,Nn[Ln++]=gr,Nn[Ln++]=ko,mr=t.id,gr=t.overflow,ko=r),r=Id(r,c.children),r.flags|=4096,r)}function Q1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),hd(t.return,r,a)}function Pd(t,r,a,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=u)}function Z1(t,r,a){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(en(t,r,c.children,a),c=xt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q1(t,a,r);else if(t.tag===19)Q1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(ct(xt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&Ts(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Pd(r,!1,u,a,m);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Ts(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pd(r,!0,a,null,m);break;case"together":Pd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bs(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function yr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Mo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Qr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Yy(t,r,a){switch(r.tag){case 3:G1(r),aa();break;case 5:u1(r);break;case 1:an(r.type)&&Cs(r);break;case 4:md(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;ct(Rs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ct(xt,xt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?K1(t,r,a):(ct(xt,xt.current&1),t=yr(t,r,a),t!==null?t.sibling:null);ct(xt,xt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return Z1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(xt,xt.current),c)break;return null;case 22:case 23:return r.lanes=0,U1(t,r,a)}return yr(t,r,a)}var X1,zd,J1,ef;X1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zd=function(){},J1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,jo(rr.current);var m=null;switch(a){case"input":u=Se(t,u),c=Se(t,c),m=[];break;case"select":u=Y({},u,{value:void 0}),c=Y({},c,{value:void 0}),m=[];break;case"textarea":u=St(t,u),c=St(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ws)}wt(a,c);var b;a=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var W=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&W!==I&&(W!=null||I!=null))if(re==="style")if(I){for(b in I)!I.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in W)W.hasOwnProperty(b)&&I[b]!==W[b]&&(a||(a={}),a[b]=W[b])}else a||(m||(m=[]),m.push(re,a)),a=W;else re==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,I=I?I.__html:void 0,W!=null&&I!==W&&(m=m||[]).push(re,W)):re==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(re,""+W):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(W!=null&&re==="onScroll"&&ut("scroll",t),m||I===W||(m=[])):(m=m||[]).push(re,W))}a&&(m=m||[]).push("style",a);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},ef=function(t,r,a,c){a!==c&&(r.flags|=4)};function mi(t,r){if(!mt)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Qt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Ky(t,r,a){var c=r.pendingProps;switch(ad(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(r),null;case 1:return an(r.type)&&ks(),Qt(r),null;case 3:return c=r.stateNode,ca(),ht(on),ht(Yt),xd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ms(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Un!==null&&(Yd(Un),Un=null))),zd(t,r),Qt(r),null;case 5:gd(r);var u=jo(di.current);if(a=r.type,t!==null&&r.stateNode!=null)J1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Qt(r),null}if(t=jo(rr.current),Ms(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[nr]=r,c[ai]=m,t=(r.mode&1)!==0,a){case"dialog":ut("cancel",c),ut("close",c);break;case"iframe":case"object":case"embed":ut("load",c);break;case"video":case"audio":for(u=0;u<ni.length;u++)ut(ni[u],c);break;case"source":ut("error",c);break;case"img":case"image":case"link":ut("error",c),ut("load",c);break;case"details":ut("toggle",c);break;case"input":$e(c,m),ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},ut("invalid",c);break;case"textarea":Be(c,m),ut("invalid",c)}wt(a,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var I=m[b];b==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&ys(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ys(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&ut("scroll",c)}switch(a){case"input":de(c),De(c,m,!0);break;case"textarea":de(c),Le(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ws)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ot(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[nr]=r,t[ai]=c,X1(t,r,!1,!1),r.stateNode=t;e:{switch(b=Mt(a,c),a){case"dialog":ut("cancel",t),ut("close",t),u=c;break;case"iframe":case"object":case"embed":ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<ni.length;u++)ut(ni[u],t);u=c;break;case"source":ut("error",t),u=c;break;case"img":case"image":case"link":ut("error",t),ut("load",t),u=c;break;case"details":ut("toggle",t),u=c;break;case"input":$e(t,c),u=Se(t,c),ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=Y({},c,{value:void 0}),ut("invalid",t);break;case"textarea":Be(t,c),u=St(t,c),ut("invalid",t);break;default:u=c}wt(a,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var W=I[m];m==="style"?Te(t,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&gt(t,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&nt(t,W):typeof W=="number"&&nt(t,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?W!=null&&m==="onScroll"&&ut("scroll",t):W!=null&&j(t,m,W,b))}switch(a){case"input":de(t),De(t,c,!1);break;case"textarea":de(t),Le(t);break;case"option":c.value!=null&&t.setAttribute("value",""+P(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Xe(t,!!c.multiple,m,!1):c.defaultValue!=null&&Xe(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ws)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Qt(r),null;case 6:if(t&&r.stateNode!=null)ef(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=jo(di.current),jo(rr.current),Ms(r)){if(c=r.stateNode,a=r.memoizedProps,c[nr]=r,(m=c.nodeValue!==a)&&(t=xn,t!==null))switch(t.tag){case 3:ys(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ys(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=r,r.stateNode=c}return Qt(r),null;case 13:if(ht(xt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)r1(),aa(),r.flags|=98560,m=!1;else if(m=Ms(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(i(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[nr]=r}else aa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qt(r),m=!1}else Un!==null&&(Yd(Un),Un=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(xt.current&1)!==0?Et===0&&(Et=3):Zd())),r.updateQueue!==null&&(r.flags|=4),Qt(r),null);case 4:return ca(),zd(t,r),t===null&&ri(r.stateNode.containerInfo),Qt(r),null;case 10:return ud(r.type._context),Qt(r),null;case 17:return an(r.type)&&ks(),Qt(r),null;case 19:if(ht(xt),m=r.memoizedState,m===null)return Qt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)mi(m,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=Ts(t),b!==null){for(r.flags|=128,mi(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return ct(xt,xt.current&1|2),r.child}t=t.sibling}m.tail!==null&&vt()>pa&&(r.flags|=128,c=!0,mi(m,!1),r.lanes=4194304)}else{if(!c)if(t=Ts(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),mi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!mt)return Qt(r),null}else 2*vt()-m.renderingStartTime>pa&&a!==1073741824&&(r.flags|=128,c=!0,mi(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=vt(),r.sibling=null,a=xt.current,ct(xt,c?a&1|2:a&1),r):(Qt(r),null);case 22:case 23:return Qd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(wn&1073741824)!==0&&(Qt(r),r.subtreeFlags&6&&(r.flags|=8192)):Qt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Qy(t,r){switch(ad(r),r.tag){case 1:return an(r.type)&&ks(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ca(),ht(on),ht(Yt),xd(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return gd(r),null;case 13:if(ht(xt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));aa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ht(xt),null;case 4:return ca(),null;case 10:return ud(r.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Hs=!1,Zt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function ua(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){bt(t,r,c)}else a.current=null}function Od(t,r,a){try{a()}catch(c){bt(t,r,c)}}var tf=!1;function Xy(t,r){if(Qc=ls,t=Tp(),Hc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,I=-1,W=-1,re=0,he=0,fe=t,ue=null;t:for(;;){for(var we;fe!==a||u!==0&&fe.nodeType!==3||(I=b+u),fe!==m||c!==0&&fe.nodeType!==3||(W=b+c),fe.nodeType===3&&(b+=fe.nodeValue.length),(we=fe.firstChild)!==null;)ue=fe,fe=we;for(;;){if(fe===t)break t;if(ue===a&&++re===u&&(I=b),ue===m&&++he===c&&(W=b),(we=fe.nextSibling)!==null)break;fe=ue,ue=fe.parentNode}fe=we}a=I===-1||W===-1?null:{start:I,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zc={focusedElem:t,selectionRange:a},ls=!1,Ce=r;Ce!==null;)if(r=Ce,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Ce=t;else for(;Ce!==null;){r=Ce;try{var _e=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var je=_e.memoizedProps,_t=_e.memoizedState,X=r.stateNode,G=X.getSnapshotBeforeUpdate(r.elementType===r.type?je:qn(r.type,je),_t);X.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ge){bt(r,r.return,ge)}if(t=r.sibling,t!==null){t.return=r.return,Ce=t;break}Ce=r.return}return _e=tf,tf=!1,_e}function gi(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Od(r,a,m)}u=u.next}while(u!==c)}}function Ws(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Dd(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function nf(t){var r=t.alternate;r!==null&&(t.alternate=null,nf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[nr],delete r[ai],delete r[td],delete r[Ey],delete r[Iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rf(t){return t.tag===5||t.tag===3||t.tag===4}function of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ws));else if(c!==4&&(t=t.child,t!==null))for(Fd(t,r,a),t=t.sibling;t!==null;)Fd(t,r,a),t=t.sibling}function Bd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Bd(t,r,a),t=t.sibling;t!==null;)Bd(t,r,a),t=t.sibling}var qt=null,Vn=!1;function qr(t,r,a){for(a=a.child;a!==null;)af(t,r,a),a=a.sibling}function af(t,r,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(kt,a)}catch{}switch(a.tag){case 5:Zt||ua(a,r);case 6:var c=qt,u=Vn;qt=null,qr(t,r,a),qt=c,Vn=u,qt!==null&&(Vn?(t=qt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):qt.removeChild(a.stateNode));break;case 18:qt!==null&&(Vn?(t=qt,a=a.stateNode,t.nodeType===8?ed(t.parentNode,a):t.nodeType===1&&ed(t,a),Ya(t)):ed(qt,a.stateNode));break;case 4:c=qt,u=Vn,qt=a.stateNode.containerInfo,Vn=!0,qr(t,r,a),qt=c,Vn=u;break;case 0:case 11:case 14:case 15:if(!Zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Od(a,r,b),u=u.next}while(u!==c)}qr(t,r,a);break;case 1:if(!Zt&&(ua(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){bt(a,r,I)}qr(t,r,a);break;case 21:qr(t,r,a);break;case 22:a.mode&1?(Zt=(c=Zt)||a.memoizedState!==null,qr(t,r,a),Zt=c):qr(t,r,a);break;default:qr(t,r,a)}}function sf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Zy),r.forEach(function(c){var u=s3.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Gn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var m=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:qt=I.stateNode,Vn=!1;break e;case 3:qt=I.stateNode.containerInfo,Vn=!0;break e;case 4:qt=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(qt===null)throw Error(i(160));af(m,b,u),qt=null,Vn=!1;var W=u.alternate;W!==null&&(W.return=null),u.return=null}catch(re){bt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)lf(r,t),r=r.sibling}function lf(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(r,t),ar(t),c&4){try{gi(3,t,t.return),Ws(3,t)}catch(je){bt(t,t.return,je)}try{gi(5,t,t.return)}catch(je){bt(t,t.return,je)}}break;case 1:Gn(r,t),ar(t),c&512&&a!==null&&ua(a,a.return);break;case 5:if(Gn(r,t),ar(t),c&512&&a!==null&&ua(a,a.return),t.flags&32){var u=t.stateNode;try{nt(u,"")}catch(je){bt(t,t.return,je)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,I=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Ie(u,m),Mt(I,b);var re=Mt(I,m);for(b=0;b<W.length;b+=2){var he=W[b],fe=W[b+1];he==="style"?Te(u,fe):he==="dangerouslySetInnerHTML"?gt(u,fe):he==="children"?nt(u,fe):j(u,he,fe,re)}switch(I){case"input":Ue(u,m);break;case"textarea":xe(u,m);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var we=m.value;we!=null?Xe(u,!!m.multiple,we,!1):ue!==!!m.multiple&&(m.defaultValue!=null?Xe(u,!!m.multiple,m.defaultValue,!0):Xe(u,!!m.multiple,m.multiple?[]:"",!1))}u[ai]=m}catch(je){bt(t,t.return,je)}}break;case 6:if(Gn(r,t),ar(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch(je){bt(t,t.return,je)}}break;case 3:if(Gn(r,t),ar(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ya(r.containerInfo)}catch(je){bt(t,t.return,je)}break;case 4:Gn(r,t),ar(t);break;case 13:Gn(r,t),ar(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Ud=vt())),c&4&&sf(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Zt=(re=Zt)||he,Gn(r,t),Zt=re):Gn(r,t),ar(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!he&&(t.mode&1)!==0)for(Ce=t,he=t.child;he!==null;){for(fe=Ce=he;Ce!==null;){switch(ue=Ce,we=ue.child,ue.tag){case 0:case 11:case 14:case 15:gi(4,ue,ue.return);break;case 1:ua(ue,ue.return);var _e=ue.stateNode;if(typeof _e.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,_e.props=r.memoizedProps,_e.state=r.memoizedState,_e.componentWillUnmount()}catch(je){bt(c,a,je)}}break;case 5:ua(ue,ue.return);break;case 22:if(ue.memoizedState!==null){uf(fe);continue}}we!==null?(we.return=ue,Ce=we):uf(fe)}he=he.sibling}e:for(he=null,fe=t;;){if(fe.tag===5){if(he===null){he=fe;try{u=fe.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=fe.stateNode,W=fe.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,I.style.display=fo("display",b))}catch(je){bt(t,t.return,je)}}}else if(fe.tag===6){if(he===null)try{fe.stateNode.nodeValue=re?"":fe.memoizedProps}catch(je){bt(t,t.return,je)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===t)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===t)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===t)break e;he===fe&&(he=null),fe=fe.return}he===fe&&(he=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Gn(r,t),ar(t),c&4&&sf(t);break;case 21:break;default:Gn(r,t),ar(t)}}function ar(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(rf(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(nt(u,""),c.flags&=-33);var m=of(t);Bd(t,m,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=of(t);Fd(t,I,b);break;default:throw Error(i(161))}}catch(W){bt(t,t.return,W)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Jy(t,r,a){Ce=t,cf(t)}function cf(t,r,a){for(var c=(t.mode&1)!==0;Ce!==null;){var u=Ce,m=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Hs;if(!b){var I=u.alternate,W=I!==null&&I.memoizedState!==null||Zt;I=Hs;var re=Zt;if(Hs=b,(Zt=W)&&!re)for(Ce=u;Ce!==null;)b=Ce,W=b.child,b.tag===22&&b.memoizedState!==null?hf(u):W!==null?(W.return=b,Ce=W):hf(u);for(;m!==null;)Ce=m,cf(m),m=m.sibling;Ce=u,Hs=I,Zt=re}df(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,Ce=m):df(t)}}function df(t){for(;Ce!==null;){var r=Ce;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Zt||Ws(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Zt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:qn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&d1(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}d1(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var he=re.memoizedState;if(he!==null){var fe=he.dehydrated;fe!==null&&Ya(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Zt||r.flags&512&&Dd(r)}catch(ue){bt(r,r.return,ue)}}if(r===t){Ce=null;break}if(a=r.sibling,a!==null){a.return=r.return,Ce=a;break}Ce=r.return}}function uf(t){for(;Ce!==null;){var r=Ce;if(r===t){Ce=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Ce=a;break}Ce=r.return}}function hf(t){for(;Ce!==null;){var r=Ce;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ws(4,r)}catch(W){bt(r,a,W)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(W){bt(r,u,W)}}var m=r.return;try{Dd(r)}catch(W){bt(r,m,W)}break;case 5:var b=r.return;try{Dd(r)}catch(W){bt(r,b,W)}}}catch(W){bt(r,r.return,W)}if(r===t){Ce=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ce=I;break}Ce=r.return}}var e3=Math.ceil,Us=z.ReactCurrentDispatcher,Hd=z.ReactCurrentOwner,En=z.ReactCurrentBatchConfig,et=0,Ot=null,Rt=null,Vt=0,wn=0,ha=Fr(0),Et=0,vi=null,Mo=0,qs=0,Wd=0,xi=null,ln=null,Ud=0,pa=1/0,wr=null,Vs=!1,qd=null,Vr=null,Gs=!1,Gr=null,Ys=0,yi=0,Vd=null,Ks=-1,Qs=0;function tn(){return(et&6)!==0?vt():Ks!==-1?Ks:Ks=vt()}function Yr(t){return(t.mode&1)===0?1:(et&2)!==0&&Vt!==0?Vt&-Vt:zy.transition!==null?(Qs===0&&(Qs=op()),Qs):(t=at,t!==0||(t=window.event,t=t===void 0?16:pp(t.type)),t)}function Yn(t,r,a,c){if(50<yi)throw yi=0,Vd=null,Error(i(185));Wa(t,a,c),((et&2)===0||t!==Ot)&&(t===Ot&&((et&2)===0&&(qs|=a),Et===4&&Kr(t,Vt)),cn(t,c),a===1&&et===0&&(r.mode&1)===0&&(pa=vt()+500,_s&&Hr()))}function cn(t,r){var a=t.callbackNode;zx(t,r);var c=as(t,t===Ot?Vt:0);if(c===0)a!==null&&Ba(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&Ba(a),r===1)t.tag===0?Py(ff.bind(null,t)):Xp(ff.bind(null,t)),Ay(function(){(et&6)===0&&Hr()}),a=null;else{switch(ap(c)){case 1:a=Q;break;case 4:a=me;break;case 16:a=ye;break;case 536870912:a=Pe;break;default:a=ye}a=kf(a,pf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function pf(t,r){if(Ks=-1,Qs=0,(et&6)!==0)throw Error(i(327));var a=t.callbackNode;if(fa()&&t.callbackNode!==a)return null;var c=as(t,t===Ot?Vt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Zs(t,c);else{r=c;var u=et;et|=2;var m=gf();(Ot!==t||Vt!==r)&&(wr=null,pa=vt()+500,Ro(t,r));do try{r3();break}catch(I){mf(t,I)}while(!0);dd(),Us.current=m,et=u,Rt!==null?r=0:(Ot=null,Vt=0,r=Et)}if(r!==0){if(r===2&&(u=Sc(t),u!==0&&(c=u,r=Gd(t,u))),r===1)throw a=vi,Ro(t,0),Kr(t,c),cn(t,vt()),a;if(r===6)Kr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!t3(u)&&(r=Zs(t,c),r===2&&(m=Sc(t),m!==0&&(c=m,r=Gd(t,m))),r===1))throw a=vi,Ro(t,0),Kr(t,c),cn(t,vt()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:No(t,ln,wr);break;case 3:if(Kr(t,c),(c&130023424)===c&&(r=Ud+500-vt(),10<r)){if(as(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){tn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Jc(No.bind(null,t,ln,wr),r);break}No(t,ln,wr);break;case 4:if(Kr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-Ct(c);m=1<<b,b=r[b],b>u&&(u=b),c&=~m}if(c=u,c=vt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*e3(c/1960))-c,10<c){t.timeoutHandle=Jc(No.bind(null,t,ln,wr),c);break}No(t,ln,wr);break;case 5:No(t,ln,wr);break;default:throw Error(i(329))}}}return cn(t,vt()),t.callbackNode===a?pf.bind(null,t):null}function Gd(t,r){var a=xi;return t.current.memoizedState.isDehydrated&&(Ro(t,r).flags|=256),t=Zs(t,r),t!==2&&(r=ln,ln=a,r!==null&&Yd(r)),t}function Yd(t){ln===null?ln=t:ln.push.apply(ln,t)}function t3(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],m=u.getSnapshot;u=u.value;try{if(!Wn(m(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(t,r){for(r&=~Wd,r&=~qs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Ct(r),c=1<<a;t[a]=-1,r&=~c}}function ff(t){if((et&6)!==0)throw Error(i(327));fa();var r=as(t,0);if((r&1)===0)return cn(t,vt()),null;var a=Zs(t,r);if(t.tag!==0&&a===2){var c=Sc(t);c!==0&&(r=c,a=Gd(t,c))}if(a===1)throw a=vi,Ro(t,0),Kr(t,r),cn(t,vt()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,No(t,ln,wr),cn(t,vt()),null}function Kd(t,r){var a=et;et|=1;try{return t(r)}finally{et=a,et===0&&(pa=vt()+500,_s&&Hr())}}function $o(t){Gr!==null&&Gr.tag===0&&(et&6)===0&&fa();var r=et;et|=1;var a=En.transition,c=at;try{if(En.transition=null,at=1,t)return t()}finally{at=c,En.transition=a,et=r,(et&6)===0&&Hr()}}function Qd(){wn=ha.current,ht(ha)}function Ro(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ly(a)),Rt!==null)for(a=Rt.return;a!==null;){var c=a;switch(ad(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ks();break;case 3:ca(),ht(on),ht(Yt),xd();break;case 5:gd(c);break;case 4:ca();break;case 13:ht(xt);break;case 19:ht(xt);break;case 10:ud(c.type._context);break;case 22:case 23:Qd()}a=a.return}if(Ot=t,Rt=t=Qr(t.current,null),Vt=wn=r,Et=0,vi=null,Wd=qs=Mo=0,ln=xi=null,_o!==null){for(r=0;r<_o.length;r++)if(a=_o[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=u,c.next=b}a.pending=c}_o=null}return t}function mf(t,r){do{var a=Rt;try{if(dd(),Es.current=Os,Is){for(var c=yt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Is=!1}if(So=0,zt=Tt=yt=null,ui=!1,hi=0,Hd.current=null,a===null||a.return===null){Et=1,vi=r,Rt=null;break}e:{var m=t,b=a.return,I=a,W=r;if(r=Vt,I.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var re=W,he=I,fe=he.tag;if((he.mode&1)===0&&(fe===0||fe===11||fe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var we=D1(b);if(we!==null){we.flags&=-257,F1(we,b,I,m,r),we.mode&1&&O1(m,re,r),r=we,W=re;var _e=r.updateQueue;if(_e===null){var je=new Set;je.add(W),r.updateQueue=je}else _e.add(W);break e}else{if((r&1)===0){O1(m,re,r),Zd();break e}W=Error(i(426))}}else if(mt&&I.mode&1){var _t=D1(b);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),F1(_t,b,I,m,r),ld(da(W,I));break e}}m=W=da(W,I),Et!==4&&(Et=2),xi===null?xi=[m]:xi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var X=P1(m,W,r);c1(m,X);break e;case 1:I=W;var G=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Vr===null||!Vr.has(te)))){m.flags|=65536,r&=-r,m.lanes|=r;var ge=z1(m,I,r);c1(m,ge);break e}}m=m.return}while(m!==null)}xf(a)}catch(Me){r=Me,Rt===a&&a!==null&&(Rt=a=a.return);continue}break}while(!0)}function gf(){var t=Us.current;return Us.current=Os,t===null?Os:t}function Zd(){(Et===0||Et===3||Et===2)&&(Et=4),Ot===null||(Mo&268435455)===0&&(qs&268435455)===0||Kr(Ot,Vt)}function Zs(t,r){var a=et;et|=2;var c=gf();(Ot!==t||Vt!==r)&&(wr=null,Ro(t,r));do try{n3();break}catch(u){mf(t,u)}while(!0);if(dd(),et=a,Us.current=c,Rt!==null)throw Error(i(261));return Ot=null,Vt=0,Et}function n3(){for(;Rt!==null;)vf(Rt)}function r3(){for(;Rt!==null&&!_c();)vf(Rt)}function vf(t){var r=bf(t.alternate,t,wn);t.memoizedProps=t.pendingProps,r===null?xf(t):Rt=r,Hd.current=null}function xf(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Ky(a,r,wn),a!==null){Rt=a;return}}else{if(a=Qy(a,r),a!==null){a.flags&=32767,Rt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,Rt=null;return}}if(r=r.sibling,r!==null){Rt=r;return}Rt=r=t}while(r!==null);Et===0&&(Et=5)}function No(t,r,a){var c=at,u=En.transition;try{En.transition=null,at=1,o3(t,r,a,c)}finally{En.transition=u,at=c}return null}function o3(t,r,a,c){do fa();while(Gr!==null);if((et&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ox(t,m),t===Ot&&(Rt=Ot=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gs||(Gs=!0,kf(ye,function(){return fa(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=En.transition,En.transition=null;var b=at;at=1;var I=et;et|=4,Hd.current=null,Xy(t,a),lf(a,t),_y(Zc),ls=!!Qc,Zc=Qc=null,t.current=a,Jy(a),Ut(),et=I,at=b,En.transition=m}else t.current=a;if(Gs&&(Gs=!1,Gr=t,Ys=u),m=t.pendingLanes,m===0&&(Vr=null),$t(a.stateNode),cn(t,vt()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Vs)throw Vs=!1,t=qd,qd=null,t;return(Ys&1)!==0&&t.tag!==0&&fa(),m=t.pendingLanes,(m&1)!==0?t===Vd?yi++:(yi=0,Vd=t):yi=0,Hr(),null}function fa(){if(Gr!==null){var t=ap(Ys),r=En.transition,a=at;try{if(En.transition=null,at=16>t?16:t,Gr===null)var c=!1;else{if(t=Gr,Gr=null,Ys=0,(et&6)!==0)throw Error(i(331));var u=et;for(et|=4,Ce=t.current;Ce!==null;){var m=Ce,b=m.child;if((Ce.flags&16)!==0){var I=m.deletions;if(I!==null){for(var W=0;W<I.length;W++){var re=I[W];for(Ce=re;Ce!==null;){var he=Ce;switch(he.tag){case 0:case 11:case 15:gi(8,he,m)}var fe=he.child;if(fe!==null)fe.return=he,Ce=fe;else for(;Ce!==null;){he=Ce;var ue=he.sibling,we=he.return;if(nf(he),he===re){Ce=null;break}if(ue!==null){ue.return=we,Ce=ue;break}Ce=we}}}var _e=m.alternate;if(_e!==null){var je=_e.child;if(je!==null){_e.child=null;do{var _t=je.sibling;je.sibling=null,je=_t}while(je!==null)}}Ce=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,Ce=b;else e:for(;Ce!==null;){if(m=Ce,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:gi(9,m,m.return)}var X=m.sibling;if(X!==null){X.return=m.return,Ce=X;break e}Ce=m.return}}var G=t.current;for(Ce=G;Ce!==null;){b=Ce;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,Ce=te;else e:for(b=G;Ce!==null;){if(I=Ce,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ws(9,I)}}catch(Me){bt(I,I.return,Me)}if(I===b){Ce=null;break e}var ge=I.sibling;if(ge!==null){ge.return=I.return,Ce=ge;break e}Ce=I.return}}if(et=u,Hr(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(kt,t)}catch{}c=!0}return c}finally{at=a,En.transition=r}}return!1}function yf(t,r,a){r=da(a,r),r=P1(t,r,1),t=Ur(t,r,1),r=tn(),t!==null&&(Wa(t,1,r),cn(t,r))}function bt(t,r,a){if(t.tag===3)yf(t,t,a);else for(;r!==null;){if(r.tag===3){yf(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){t=da(a,t),t=z1(r,t,1),r=Ur(r,t,1),t=tn(),r!==null&&(Wa(r,1,t),cn(r,t));break}}r=r.return}}function a3(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=tn(),t.pingedLanes|=t.suspendedLanes&a,Ot===t&&(Vt&a)===a&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>vt()-Ud?Ro(t,0):Wd|=a),cn(t,r)}function wf(t,r){r===0&&((t.mode&1)===0?r=1:(r=os,os<<=1,(os&130023424)===0&&(os=4194304)));var a=tn();t=vr(t,r),t!==null&&(Wa(t,r,a),cn(t,a))}function i3(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),wf(t,a)}function s3(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),wf(t,a)}var bf;bf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||on.current)sn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return sn=!1,Yy(t,r,a);sn=(t.flags&131072)!==0}else sn=!1,mt&&(r.flags&1048576)!==0&&Jp(r,Ss,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Bs(t,r),t=r.pendingProps;var u=na(r,Yt.current);la(r,a),u=bd(null,r,c,t,u,a);var m=kd();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,an(c)?(m=!0,Cs(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,fd(r),u.updater=Ds,r.stateNode=u,u._reactInternals=r,$d(r,c,t,a),r=Ad(null,r,c,!0,m,a)):(r.tag=0,mt&&m&&od(r),en(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Bs(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=c3(c),t=qn(c,t),u){case 0:r=Ld(null,r,c,t,a);break e;case 1:r=V1(null,r,c,t,a);break e;case 11:r=B1(null,r,c,t,a);break e;case 14:r=H1(null,r,c,qn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:qn(c,u),Ld(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:qn(c,u),V1(t,r,c,u,a);case 3:e:{if(G1(r),t===null)throw Error(i(387));c=r.pendingProps,m=r.memoizedState,u=m.element,l1(t,r),As(r,c,null,a);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=da(Error(i(423)),r),r=Y1(t,r,c,a,u);break e}else if(c!==u){u=da(Error(i(424)),r),r=Y1(t,r,c,a,u);break e}else for(yn=Dr(r.stateNode.containerInfo.firstChild),xn=r,mt=!0,Un=null,a=i1(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(aa(),c===u){r=yr(t,r,a);break e}en(t,r,c,a)}r=r.child}return r;case 5:return u1(r),t===null&&sd(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,b=u.children,Xc(c,u)?b=null:m!==null&&Xc(c,m)&&(r.flags|=32),q1(t,r),en(t,r,b,a),r.child;case 6:return t===null&&sd(r),null;case 13:return K1(t,r,a);case 4:return md(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=ia(r,null,c,a):en(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:qn(c,u),B1(t,r,c,u,a);case 7:return en(t,r,r.pendingProps,a),r.child;case 8:return en(t,r,r.pendingProps.children,a),r.child;case 12:return en(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,b=u.value,ct(Rs,c._currentValue),c._currentValue=b,m!==null)if(Wn(m.value,b)){if(m.children===u.children&&!on.current){r=yr(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){b=m.child;for(var W=I.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=xr(-1,a&-a),W.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var he=re.pending;he===null?W.next=W:(W.next=he.next,he.next=W),re.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),hd(m.return,a,r),I.lanes|=a;break}W=W.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),hd(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}en(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,la(r,a),u=An(u),c=c(u),r.flags|=1,en(t,r,c,a),r.child;case 14:return c=r.type,u=qn(c,r.pendingProps),u=qn(c.type,u),H1(t,r,c,u,a);case 15:return W1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:qn(c,u),Bs(t,r),r.tag=1,an(c)?(t=!0,Cs(r)):t=!1,la(r,a),E1(r,c,u),$d(r,c,u,a),Ad(null,r,c,!0,t,a);case 19:return Z1(t,r,a);case 22:return U1(t,r,a)}throw Error(i(156,r.tag))};function kf(t,r){return Fa(t,r)}function l3(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,r,a,c){return new l3(t,r,a,c)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c3(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===B)return 11;if(t===ae)return 14}return 2}function Qr(t,r){var a=t.alternate;return a===null?(a=In(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xs(t,r,a,c,u,m){var b=2;if(c=t,typeof t=="function")Xd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case E:return Lo(a.children,u,m,r);case S:b=8,u|=8;break;case D:return t=In(12,a,r,u|2),t.elementType=D,t.lanes=m,t;case K:return t=In(13,a,r,u),t.elementType=K,t.lanes=m,t;case ee:return t=In(19,a,r,u),t.elementType=ee,t.lanes=m,t;case le:return Js(a,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:b=10;break e;case q:b=9;break e;case B:b=11;break e;case ae:b=14;break e;case se:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=In(b,a,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function Lo(t,r,a,c){return t=In(7,t,c,r),t.lanes=a,t}function Js(t,r,a,c){return t=In(22,t,c,r),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function Jd(t,r,a){return t=In(6,t,null,r),t.lanes=a,t}function eu(t,r,a){return r=In(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function d3(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function tu(t,r,a,c,u,m,b,I,W){return t=new d3(t,r,a,I,W),r===1?(r=1,m===!0&&(r|=8)):r=0,m=In(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(m),t}function u3(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function Cf(t){if(!t)return Br;t=t._reactInternals;e:{if(ur(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(an(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(an(a))return Qp(t,a,r)}return r}function _f(t,r,a,c,u,m,b,I,W){return t=tu(a,c,!0,t,u,m,b,I,W),t.context=Cf(null),a=t.current,c=tn(),u=Yr(a),m=xr(c,u),m.callback=r??null,Ur(a,m,u),t.current.lanes=u,Wa(t,u,c),cn(t,c),t}function el(t,r,a,c){var u=r.current,m=tn(),b=Yr(u);return a=Cf(a),r.context===null?r.context=a:r.pendingContext=a,r=xr(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Ur(u,r,b),t!==null&&(Yn(t,u,b,m),Ls(t,u,b)),b}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function nu(t,r){jf(t,r),(t=t.alternate)&&jf(t,r)}function h3(){return null}var Sf=typeof reportError=="function"?reportError:function(t){console.error(t)};function ru(t){this._internalRoot=t}nl.prototype.render=ru.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));el(t,r,null,null)},nl.prototype.unmount=ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;$o(function(){el(null,t,null,null)}),r[pr]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var r=lp();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Pr.length&&r!==0&&r<Pr[a].priority;a++);Pr.splice(a,0,t),a===0&&up(t)}};function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mf(){}function p3(t,r,a,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=tl(b);m.call(re)}}var b=_f(r,c,t,0,null,!1,!1,"",Mf);return t._reactRootContainer=b,t[pr]=b.current,ri(t.nodeType===8?t.parentNode:t),$o(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=tl(W);I.call(re)}}var W=tu(t,0,!1,null,null,!1,!1,"",Mf);return t._reactRootContainer=W,t[pr]=W.current,ri(t.nodeType===8?t.parentNode:t),$o(function(){el(r,W,a,c)}),W}function ol(t,r,a,c,u){var m=a._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var I=u;u=function(){var W=tl(b);I.call(W)}}el(r,b,t,u)}else b=p3(a,r,t,u,c);return tl(b)}ip=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ha(r.pendingLanes);a!==0&&($c(r,a|1),cn(r,vt()),(et&6)===0&&(pa=vt()+500,Hr()))}break;case 13:$o(function(){var c=vr(t,1);if(c!==null){var u=tn();Yn(c,t,1,u)}}),nu(t,1)}},Rc=function(t){if(t.tag===13){var r=vr(t,134217728);if(r!==null){var a=tn();Yn(r,t,134217728,a)}nu(t,134217728)}},sp=function(t){if(t.tag===13){var r=Yr(t),a=vr(t,r);if(a!==null){var c=tn();Yn(a,t,r,c)}nu(t,r)}},lp=function(){return at},cp=function(t,r){var a=at;try{return at=t,r()}finally{at=a}},Rr=function(t,r,a){switch(r){case"input":if(Ue(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=bs(c);if(!u)throw Error(i(90));ve(c),Ue(c,u)}}}break;case"textarea":xe(t,a);break;case"select":r=a.value,r!=null&&Xe(t,!!a.multiple,r,!1)}},Xi=Kd,Ji=$o;var f3={usingClientEntryPoint:!1,Events:[ii,ea,bs,Nr,Zi,Kd]},wi={findFiberByHostInstance:wo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m3={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yo(t),t===null?null:t.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||h3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{kt=al.inject(m3),ft=al}catch{}}return dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f3,dn.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(r))throw Error(i(200));return u3(t,r,null,a)},dn.createRoot=function(t,r){if(!ou(t))throw Error(i(299));var a=!1,c="",u=Sf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=tu(t,1,!1,null,null,a,!1,c,u),t[pr]=r.current,ri(t.nodeType===8?t.parentNode:t),new ru(r)},dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=yo(r),t=t===null?null:t.stateNode,t},dn.flushSync=function(t){return $o(t)},dn.hydrate=function(t,r,a){if(!rl(r))throw Error(i(200));return ol(null,t,r,!0,a)},dn.hydrateRoot=function(t,r,a){if(!ou(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,m="",b=Sf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=_f(r,null,t,1,a??null,u,!1,m,b),t[pr]=r.current,ri(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new nl(r)},dn.render=function(t,r,a){if(!rl(r))throw Error(i(200));return ol(null,t,r,!1,a)},dn.unmountComponentAtNode=function(t){if(!rl(t))throw Error(i(40));return t._reactRootContainer?($o(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1},dn.unstable_batchedUpdates=Kd,dn.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!rl(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return ol(t,r,a,!1,c)},dn.version="18.3.1-next-f1338f8080-20240426",dn}var If;function ig(){if(If)return su.exports;If=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),su.exports=k3(),su.exports}var Pf;function C3(){if(Pf)return il;Pf=1;var e=ig();return il.createRoot=e.createRoot,il.hydrateRoot=e.hydrateRoot,il}var _3=C3();const j3=ag(_3);function sg(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=sg(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=sg(e))&&(s&&(s+=" "),s+=o);return s}const Aa=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Aa.displayName="PlusIcon";const S3="_root_7uomf_13",M3="_sm_7uomf_82",$3="_md_7uomf_88",R3="_lg_7uomf_94",N3="_horizontal_7uomf_107",L3="_alignStart_7uomf_121",A3="_vertical_7uomf_125",T3="_inner_7uomf_131",E3="_iconSlot_7uomf_146",I3="_label_7uomf_163",Ao={root:S3,sm:M3,md:$3,lg:R3,horizontal:N3,alignStart:L3,vertical:A3,inner:T3,iconSlot:E3,label:I3};function zf(e){return typeof e=="number"?`${e}px`:e}const P3=g.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:v,style:y,disabled:x,type:w="button",...k},_)=>{const C=d??n.jsx(Aa,{size:"100%"}),R={};return h!==void 0&&(R["--area-min-height"]=zf(h)),f!==void 0&&(R["--area-radius"]=zf(f)),n.jsx("button",{ref:_,type:w,className:ie(Ao.root,Ao[e],Ao[o],i==="start"&&Ao.alignStart,v),disabled:x,"data-size":e,"data-layout":o,style:{...R,...y},...k,children:n.jsxs("span",{className:Ao.inner,children:[n.jsx("span",{className:Ao.iconSlot,"aria-hidden":"true",children:C}),!l&&s&&n.jsx("span",{className:Ao.label,children:s})]})})});P3.displayName="AreaButton";const z3="_root_b29pw_8",O3="_image_b29pw_33",D3="_initials_b29pw_40",F3="_iconSlot_b29pw_52",Xr={root:z3,image:O3,initials:D3,iconSlot:F3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function B3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function H3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const tr=g.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:v="circle",className:y,...x},w)=>{const[k,_]=g.useState(!1),C=!!e&&!k,R=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?H3(s):"");let N;return C?N=n.jsx("img",{src:e,alt:o??"",className:Xr.image,onError:()=>_(!0),draggable:!1},e):R?N=n.jsx("span",{className:Xr.initials,"aria-hidden":o?void 0:!0,children:R}):N=n.jsx("span",{className:Xr.iconSlot,"aria-hidden":"true",children:l??n.jsx(B3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":v,className:ie(Xr.root,Xr[`size-${d}`],Xr[`color-${h}`],Xr[`variant-${f}`],Xr[`shape-${v}`],y),...x,children:N})});tr.displayName="Avatar";const W3="_root_uqz3u_7",U3={root:W3},nn=g.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(U3.root,o),...s,children:i}));nn.displayName="Eyebrow";const q3="_root_1tnwf_15",V3={root:q3},G3=g.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:v,...y},x)=>{const w=i!==void 0,k=g.useRef(null),[_,C]=g.useState(()=>w?!i:!s),R=g.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]);g.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,C(!s))},[]),g.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",C(!(i??"")))},[i,w]);const N=j=>{const z=j.currentTarget.textContent??"";C(z===""),l==null||l(z),v==null||v(j)},$=j=>{j.preventDefault();const z=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,z)},M=!h&&!d;return n.jsx("span",{ref:R,contentEditable:M?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":_||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(V3.root,f),onInput:N,onPaste:$,...y})});G3.displayName="TypeBox";const Y3="_root_1brpy_12",K3="_ghost_1brpy_27",Q3="_path_1brpy_32",ki={root:Y3,"ai-spin":"_ai-spin_1brpy_1",ghost:K3,"ai-morph":"_ai-morph_1brpy_1",path:Q3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Z3={xs:16,sm:24,md:32,lg:48,xl:64},X3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Of="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",sl=e=>e==="inverse"||e==="inverse-light",J3=e=>e==="stroke"||e==="stroke-light",uh=g.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${v}`,x=`aiglow-${v}`,w=typeof e=="string",k=w?Z3[e]:e,_=w?X3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,C=o==="gradient-fill"?`url(#${y})`:sl(o)?"currentColor":"none",R=sl(o)?"none":J3(o)?"currentColor":`url(#${y})`,N="currentColor",$=o!=="stroke"&&o!=="stroke-light"&&!sl(o);return n.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(ki.root,ki[`variant-${o}`],ki[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!sl(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Of,stroke:N,strokeWidth:_*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:ki.ghost}),n.jsx("path",{d:Of,fill:C,stroke:R==="none"?void 0:R,strokeWidth:R==="none"?void 0:_,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${x})`:void 0,className:ki.path})]})});uh.displayName="AILoader";const e5="_root_10act_14",t5="_hovered_10act_68",n5="_loading_10act_69",r5="_sm_10act_90",o5="_md_10act_98",a5="_lg_10act_106",i5="_dark_10act_116",s5="_icon_10act_122",ma={root:e5,hovered:t5,loading:n5,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:r5,md:o5,lg:a5,dark:i5,icon:s5},Df={sm:12,md:14,lg:18};function l5({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const lg=g.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[v,y]=g.useState(!1);return n.jsx("button",{ref:f,className:ie(ma.root,ma[e],o&&ma.dark,i?ma.loading:v&&ma.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...h,children:n.jsx("span",{className:ma.icon,children:i?n.jsx(uh,{size:Df[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(l5,{size:Df[e],light:o})})})});lg.displayName="AICoreButton";const c5="_root_1qx4u_9",d5="_star_1qx4u_34",du={root:c5,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:d5},u5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",cg=g.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(du.root,du[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:du.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:u5,fill:"currentColor"})})}));cg.displayName="AIAvatar";const h5="_shell_lalw3_21",p5="_wrapper_lalw3_58",f5="_card_lalw3_65",m5="_cardClip_lalw3_94",g5="_textarea_lalw3_160",v5="_actions_lalw3_203",ka={shell:h5,wrapper:p5,card:f5,cardClip:m5,textarea:g5,actions:v5},dg=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(ka.shell,e),...i,children:o}));dg.displayName="AIComposer";function x5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const ug=g.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:v,children:y,style:x,...w},k)=>{const _=g.useRef(null);g.useEffect(()=>{const M=_.current;M&&(M.style.height="auto",M.style.height=`${M.scrollHeight}px`)},[e]);const C=g.useCallback(M=>o(M.target.value),[o]),R=g.useCallback(M=>{f==null||f(M),!M.defaultPrevented&&M.key==="Enter"&&!M.shiftKey&&i&&(M.preventDefault(),i())},[f,i]),N=g.useCallback(M=>{_.current=M,x5(k,M)},[k]),$={...x??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(ka.wrapper,h),"data-radius":l,children:n.jsx("div",{className:ka.card,children:n.jsxs("div",{className:ka.cardClip,children:[n.jsx("textarea",{...w,ref:N,className:ka.textarea,rows:1,value:e,onChange:C,onKeyDown:R,placeholder:d,disabled:v,style:$}),y!=null&&n.jsx("div",{className:ka.actions,children:y})]})})})});ug.displayName="AIComposerInput";const y5="_root_fv0gc_10",w5="_simple_fv0gc_28",b5="_float_fv0gc_83",Ff={root:y5,simple:w5,float:b5},k5=g.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(Ff.root,Ff[e],o),...s,children:i}));k5.displayName="AIConversation";const C5="_fadeFrame_1l0ib_19",_5="_scroller_1l0ib_32",j5="_content_1l0ib_89",S5="_messageBlock_1l0ib_108",M5="_messageBlockAi_1l0ib_116",$5="_inboundBlock_1l0ib_128",R5="_inboundLoader_1l0ib_136",N5="_inboundLoaderLabel_1l0ib_146",L5="_outboundBlock_1l0ib_153",A5="_outboundHeader_1l0ib_161",T5="_messageBlockUser_1l0ib_168",E5="_aiThreadOutboundIn_1l0ib_1",I5="_messageBody_1l0ib_182",P5="_messageBodyAi_1l0ib_193",z5="_messageBodyUser_1l0ib_200",O5="_label_1l0ib_159",D5="_labelAi_1l0ib_221",F5="_labelUser_1l0ib_159",B5="_labelAvatar_1l0ib_224",H5="_labelText_1l0ib_237",W5="_timestamp_1l0ib_244",U5="_timestampAi_1l0ib_259",q5="_timestampUser_1l0ib_260",V5="_timestampInline_1l0ib_270",G5="_aiThreadOutboundFadeIn_1l0ib_1",Ge={fadeFrame:C5,scroller:_5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:j5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:S5,messageBlockAi:M5,inboundBlock:$5,inboundLoader:R5,inboundLoaderLabel:N5,outboundBlock:L5,outboundHeader:A5,messageBlockUser:T5,aiThreadOutboundIn:E5,messageBody:I5,messageBodyAi:P5,messageBodyUser:z5,label:O5,labelAi:D5,labelUser:F5,labelAvatar:B5,labelText:H5,timestamp:W5,timestampAi:U5,timestampUser:q5,timestampInline:V5,aiThreadOutboundFadeIn:G5},Bf=8;function Y5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const K5=g.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const v=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[w,k]=g.useState(!1),[_,C]=g.useState(!1),R=g.useCallback(N=>{v.current=N,Y5(f,N)},[f]);return g.useEffect(()=>{const N=v.current,$=y.current;if(!N||!$)return;const M=()=>{const{scrollTop:E,scrollHeight:S,clientHeight:D}=N;return S-E-D<s},j=E=>{N.scrollTo({top:N.scrollHeight,behavior:E?"smooth":"auto"})},z=()=>{const{scrollTop:E,scrollHeight:S,clientHeight:D}=N,V=E>Bf,q=S-E-D>Bf;k(B=>B===V?B:V),C(B=>B===q?B:q)};i&&(j(!1),x.current=!0),z();const L=()=>{x.current=M(),z()};N.addEventListener("scroll",L,{passive:!0});const T=new ResizeObserver(()=>{i&&x.current&&j(!0),z()});return T.observe($),T.observe(N),()=>{N.removeEventListener("scroll",L),T.disconnect()}},[i,s]),n.jsx("div",{className:Ge.fadeFrame,"data-fade-top":w,"data-fade-bottom":_,children:n.jsx("div",{ref:R,className:ie(Ge.scroller,Ge[`padding-${o}`],l),...h,children:n.jsx("div",{ref:y,className:ie(Ge.content,Ge[`density-${e}`]),children:d})})})});K5.displayName="AIThread";const Xl=g.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ge.label,e==="user"?Ge.labelUser:Ge.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ge.labelAvatar,children:o}),n.jsx("span",{className:Ge.labelText,children:s})]}));Xl.displayName="AILabel";const Q5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Z5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Bi=g.forwardRef(({value:e,align:o="ai",format:i=Q5,inline:s=!1,className:l,...d},h)=>{const f=g.useMemo(()=>Z5(e,i),[e,i]);return f?n.jsx("time",{ref:h,className:ie(Ge.timestamp,s?Ge.timestampInline:o==="user"?Ge.timestampUser:Ge.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});Bi.displayName="AITimestamp";function X5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Bi,{align:"ai",value:e}):e}function J5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Xl,{align:"ai",children:e}):e}const e4=g.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ge.messageBlock,Ge.messageBlockAi,i),...l,children:[J5(e),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyAi),children:s}),X5(o)]}));e4.displayName="AIAssistantMessage";function t4(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Bi,{align:"user",value:e}):e}function n4(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Xl,{align:"user",children:e}):e}const r4=g.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ge.messageBlock,Ge.messageBlockUser,i),...l,children:[n4(e),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyUser),children:s}),t4(o)]}));r4.displayName="AIUserMessage";function o4(e){return e===!1?null:e==null||e===!0?n.jsx(cg,{size:"sm"}):e}function a4(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Xl,{align:"ai",avatar:o,children:e}):e}const i4=g.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...v},y)=>{const x=o4(e),w=a4(o,x);return n.jsxs("div",{ref:y,"data-author":"ai",className:ie(Ge.messageBlock,Ge.messageBlockAi,Ge.inboundBlock,h),...v,children:[w,i,f!=null&&n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyAi),children:f}),l&&n.jsxs("div",{className:Ge.inboundLoader,"aria-live":"polite",children:[n.jsx(uh,{size:"xs"}),d!=null&&n.jsx("span",{className:Ge.inboundLoaderLabel,children:d})]}),s]})});i4.displayName="AIInboundMessage";function s4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const l4=g.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const f=o==null?null:s4(o)?n.jsx(Bi,{value:o,format:i,inline:!0}):o,v=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ge.labelText,children:e}):e,y=v!=null||f!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ge.messageBlock,Ge.messageBlockUser,Ge.outboundBlock,s),...d,children:[y&&n.jsxs("div",{className:ie(Ge.label,Ge.labelUser,Ge.outboundHeader),children:[v,f]}),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyUser),children:l})]})});l4.displayName="AIOutboundMessage";const Dn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Dn.displayName="ChevronDownIcon";const c4="_root_1j4eq_8",d4="_header_1j4eq_17",u4="_headerSummary_1j4eq_53",h4="_aiTrailSummaryFade_1j4eq_1",p4="_aiTrailHeaderAppend_1j4eq_1",f4="_aiTrailEllipsis_1j4eq_1",m4="_headerCurrent_1j4eq_128",g4="_headerChevron_1j4eq_159",v4="_headerChevronExpanded_1j4eq_173",x4="_body_1j4eq_187",y4="_bodyExpanded_1j4eq_200",w4="_bodyCollapsed_1j4eq_201",b4="_bodyInner_1j4eq_203",k4="_bodyContent_1j4eq_187",C4="_step_1j4eq_225",_4="_stepIcon_1j4eq_242",j4="_stepAnimating_1j4eq_256",S4="_aiTrailStepPulse_1j4eq_1",M4="_stepBody_1j4eq_267",$4="_stepHead_1j4eq_282",R4="_stepLabel_1j4eq_286",N4="_stepSeparator_1j4eq_288",L4="_stepDetail_1j4eq_292",A4="_subToggle_1j4eq_302",T4="_subToggleCount_1j4eq_335",E4="_subToggleChevron_1j4eq_339",I4="_subActivityWrap_1j4eq_358",P4="_subActivityExpanded_1j4eq_364",z4="_subActivityCollapsed_1j4eq_365",O4="_subActivityClip_1j4eq_367",D4="_subActivityList_1j4eq_378",F4="_subActivity_1j4eq_358",B4="_aiTrailSubActivityType_1j4eq_1",H4="_aiTrailSubActivityFade_1j4eq_1",it={root:c4,header:d4,headerSummary:u4,aiTrailSummaryFade:h4,aiTrailHeaderAppend:p4,aiTrailEllipsis:f4,headerCurrent:m4,headerChevron:g4,headerChevronExpanded:v4,body:x4,bodyExpanded:y4,bodyCollapsed:w4,bodyInner:b4,bodyContent:k4,step:C4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:_4,stepAnimating:j4,aiTrailStepPulse:S4,stepBody:M4,stepHead:$4,stepLabel:R4,stepSeparator:N4,stepDetail:L4,subToggle:A4,subToggleCount:T4,subToggleChevron:E4,subActivityWrap:I4,subActivityExpanded:P4,subActivityCollapsed:z4,subActivityClip:O4,subActivityList:D4,subActivity:F4,aiTrailSubActivityType:B4,aiTrailSubActivityFade:H4},hh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hh.displayName="MessageDotsSquareIcon";function zl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}zl.displayName="SearchMdIcon";function io({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const ph=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ph.displayName="Globe01Icon";const hg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="Code02Icon";function fh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}fh.displayName="Tool01Icon";const rn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},Sa=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Sa.displayName="AlertCircleIcon";const W4={thinking:n.jsx(hh,{size:14}),tool:n.jsx(fh,{size:14}),search:n.jsx(zl,{size:14}),file:n.jsx(io,{size:14}),web:n.jsx(ph,{size:14}),code:n.jsx(hg,{size:14}),content:n.jsx(rn,{size:14})},Jl=g.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...v},y)=>{const x=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[_,C]=g.useState(null),R=_!==null?_:k;g.useEffect(()=>{C(null)},[o]);const N=g.useCallback(()=>C(!R),[R]),$=!!l&&l.length>0,M=(l==null?void 0:l.length)??0,j=o==="error"?n.jsx(Sa,{size:14}):s??W4[e];return n.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":o,className:ie(it.step,it[`step-${o}`],x&&it.stepAnimating,h),...v,children:[n.jsx("span",{className:it.stepIcon,"aria-hidden":!0,children:j}),n.jsxs("span",{className:it.stepBody,children:[n.jsxs("span",{className:it.stepHead,children:[n.jsx("span",{className:it.stepLabel,children:f}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:it.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:it.stepDetail,children:i})]}),$&&n.jsxs("button",{type:"button",className:it.subToggle,onClick:N,"aria-expanded":R,"aria-label":R?`Collapse ${M} sub-steps`:`Expand ${M} sub-steps`,"data-expanded":R||void 0,children:[n.jsx("span",{className:it.subToggleCount,children:M}),n.jsx("span",{className:it.subToggleChevron,"aria-hidden":!0,children:n.jsx(Dn,{size:10})})]})]}),$&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(it.subActivityWrap,R?it.subActivityExpanded:it.subActivityCollapsed),"aria-hidden":!R,children:n.jsx("div",{className:it.subActivityClip,children:n.jsx("ul",{className:it.subActivityList,"data-animating":w||void 0,children:l.map((z,L)=>n.jsx("li",{className:it.subActivity,children:z},L))})})})})]})]})});Jl.displayName="AIActivityStep";function Hf(e){return e==="error"}function U4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=o===1?"1 step":`${o} steps`;return`${h} · ${f}`}return n.jsxs(n.Fragment,{children:[h,i.map((f,v)=>n.jsxs(g.Fragment,{children:[" · ",f]},v))]})}const mh=g.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...v},y)=>{const x=o!==void 0,[w,k]=g.useState(i??Hf(e)),[_,C]=g.useState(!1);g.useEffect(()=>{x||_||k(Hf(e))},[e,x,_]);const R=x?!!o:w,N=g.useCallback(()=>{const T=!R;x||(k(T),C(!0)),s==null||s(T)},[R,x,s]),{enhancedChildren:$,stepCount:M,stepLabels:j,currentLabelIdx:z}=g.useMemo(()=>{let T=0;const E=[];let S=-1;return{enhancedChildren:g.Children.map(f,V=>{if(!g.isValidElement(V))return V;const q=V.props;if(!("type"in q||"status"in q))return V;T+=1;const K=q.status??"done";return K==="pending"?null:(q.children!=null&&(E.push(q.children),K==="active"&&(S=E.length-1)),q4(V,e))}),stepCount:T,stepLabels:E,currentLabelIdx:S>=0?S:E.length-1}},[f,e]),L=d??U4(e,M,j,z,it.headerCurrent,l);return n.jsxs("div",{ref:y,"data-state":e,"data-expanded":R,className:ie(it.root,h),...v,children:[n.jsxs("button",{type:"button",className:it.header,onClick:N,"aria-expanded":R,"aria-label":R?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:it.headerSummary,children:L},`${e}-${z}`),n.jsx("span",{className:ie(it.headerChevron,R&&it.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Dn,{size:14})})]}),n.jsx("div",{className:ie(it.body,R?it.bodyExpanded:it.bodyCollapsed),"aria-hidden":!R,children:n.jsx("div",{className:it.bodyInner,children:n.jsxs("div",{className:it.bodyContent,children:[$,e==="done"&&n.jsx(Jl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});mh.displayName="AIActivityTrail";function q4(e,o){return g.cloneElement(e,{groupState:o})}var uo=ig();const V4="_wrapper_3tqlm_10",G4="_tooltip_3tqlm_22",Y4="_portal_3tqlm_23",K4="_top_3tqlm_61",Q4="_bottom_3tqlm_71",Z4="_left_3tqlm_81",X4="_right_3tqlm_91",ll={wrapper:V4,tooltip:G4,portal:Y4,top:K4,bottom:Q4,left:Z4,right:X4},$r=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,v]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),w=g.useRef(null),k=g.useRef(),_=g.useId(),C=g.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),z=6+d;let L=0,T=0;switch(o){case"top":L=j.top-z,T=j.left+j.width/2;break;case"bottom":L=j.bottom+z,T=j.left+j.width/2;break;case"left":L=j.top+j.height/2,T=j.left-z;break;case"right":L=j.top+j.height/2,T=j.right+z;break}x({top:L,left:T})},[o,d]),R=g.useCallback(()=>{s||(C(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,C]),N=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!f)return;const j=()=>C();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[f,C]);const $=mn.cloneElement(h,{"aria-describedby":f?_:void 0}),M=n.jsx("span",{id:_,role:"tooltip",className:ie(ll.tooltip,ll[o],ll.portal),"data-visible":f||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:ll.wrapper,onMouseEnter:R,onMouseLeave:N,onFocus:R,onBlur:N,children:[$,uo.createPortal(M,document.body)]})};$r.displayName="Tooltip";const J4="_root_v8mqg_9",ew="_hover_v8mqg_21",uu={root:J4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:ew};function tw(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const pg=g.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const v=i==null?null:tw(i)?n.jsx(Bi,{value:i,format:s,inline:!0}):i,y=w=>{if(!g.isValidElement(w))return w;const k=w;if(k.type===$r)return k;const _=k.props["aria-label"];return _?n.jsx($r,{content:_,placement:"top",delay:150,children:k}):k},x=g.Children.map(d,w=>{if(g.isValidElement(w)&&w.type===g.Fragment){const k=w.props.children;return g.Children.map(k,y)}return y(w)});return n.jsxs("div",{ref:f,"data-visibility":e,"data-align":o,className:ie(uu.root,uu[`align-${o}`],e==="hover"&&uu.hover,l),...h,children:[x,v]})});pg.displayName="AIMessageActions";const nw="_card_1apq1_17",rw="_header_1apq1_69",ow="_iconBadge_1apq1_74",aw="_iconInner_1apq1_89",iw="_headerText_1apq1_100",sw="_headerTopRow_1apq1_109",lw="_eyebrow_1apq1_115",cw="_title_1apq1_124",dw="_subtitle_1apq1_130",uw="_headerTrailing_1apq1_135",hw="_body_1apq1_141",pw="_footer_1apq1_152",fw="_footerEnd_1apq1_157",mw="_metaRow_1apq1_162",gw="_metaItem_1apq1_170",vw="_resultHero_1apq1_180",xw="_resultHeadline_1apq1_185",yw="_resultDetail_1apq1_191",ww="_clauses_1apq1_205",bw="_clause_1apq1_205",kw="_clauseLabel_1apq1_215",Cw="_clauseBody_1apq1_225",_w="_badgeExecuting_1apq1_245",dt={card:nw,header:rw,iconBadge:ow,iconInner:aw,headerText:iw,headerTopRow:sw,eyebrow:lw,title:cw,subtitle:dw,headerTrailing:uw,body:hw,footer:pw,footerEnd:fw,metaRow:mw,metaItem:gw,resultHero:vw,resultHeadline:xw,resultDetail:yw,clauses:ww,clause:bw,clauseLabel:kw,clauseBody:Cw,badgeExecuting:_w},lr=g.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:v,footerEnd:y=!1,className:x,children:w,...k},_)=>{const C=l!=null||f!=null,R=C||d!=null||h!=null,N=s!=null||R;return n.jsxs("div",{ref:_,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(dt.card,x),...k,children:[N&&n.jsxs("div",{className:dt.header,children:[s!=null&&n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:dt.iconInner,children:s})}),R&&n.jsxs("div",{className:dt.headerText,children:[C&&n.jsxs("div",{className:dt.headerTopRow,children:[l!=null&&n.jsx("span",{className:dt.eyebrow,children:l}),f!=null&&n.jsx("span",{className:dt.headerTrailing,children:f})]}),d!=null&&n.jsx("span",{className:dt.title,children:d}),h!=null&&n.jsx("span",{className:dt.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:dt.body,children:w}),v!=null&&n.jsx("div",{className:ie(dt.footer,y&&dt.footerEnd),children:v})]})});lr.displayName="UltronCard";const jw="_root_zkkgh_6",Sw="_sm_zkkgh_24",Mw="_md_zkkgh_33",$w="_lg_zkkgh_42",Rw="_neutral_zkkgh_53",Nw="_blue_zkkgh_66",Lw="_azure_zkkgh_79",Aw="_purple_zkkgh_92",Tw="_pink_zkkgh_105",Ew="_red_zkkgh_118",Iw="_orange_zkkgh_131",Pw="_yellow_zkkgh_144",zw="_matcha_zkkgh_157",Ow="_green_zkkgh_170",Dw="_subtle_zkkgh_184",Fw="_outline_zkkgh_190",Bw="_solid_zkkgh_196",Hw="_dot_zkkgh_203",Ww="_icon_zkkgh_212",Uw="_dismiss_zkkgh_224",To={root:jw,sm:Sw,md:Mw,lg:$w,neutral:Rw,blue:Nw,azure:Lw,purple:Aw,pink:Tw,red:Ew,orange:Iw,yellow:Pw,matcha:zw,green:Ow,subtle:Dw,outline:Fw,solid:Bw,dot:Hw,icon:Ww,dismiss:Uw},Hi=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},qw={sm:10,md:12,lg:14},Jn=g.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:v,...y},x)=>n.jsxs("span",{ref:x,className:ie(To.root,To[i],To[o],To[e],f),...y,children:[s&&n.jsx("span",{className:To.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(To.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&n.jsx("button",{type:"button",className:To.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Hi,{size:qw[i]})})]}));Jn.displayName="Tag";function fg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}fg.displayName="SlashCircle01Icon";const gh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};gh.displayName="EyeIcon";function ec({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ec.displayName="Target01Icon";function jn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jn.displayName="ClockIcon";const Wi=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Wi.displayName="RefreshCw04Icon";const gn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};gn.displayName="CheckCircleIcon";function tc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tc.displayName="Save01Icon";const Vw={sm:11,md:12,lg:14},Gw={ignored:{label:"Ignored",color:"neutral",Icon:fg},monitored:{label:"Monitored",color:"blue",Icon:gh},recommended:{label:"Recommended",color:"purple",Icon:ec},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:jn},executing:{label:"Executing",color:"azure",Icon:Wi},completed:{label:"Completed",color:"green",Icon:gn},saved:{label:"Saved",color:"matcha",Icon:tc}},Ho=g.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=Gw[e],f=h.Icon;return n.jsx(Jn,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(f,{size:Vw[o]}),className:ie(e==="executing"&&dt.badgeExecuting,s),...l,children:i??h.label})});Ho.displayName="UltronStatusBadge";function nc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nc.displayName="Bell01Icon";const Yw=g.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},v)=>n.jsx(lr,{ref:v,tone:d,eyebrow:i,title:e,icon:o??n.jsx(nc,{size:14}),trailing:l?n.jsx(Ho,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:dt.metaRow,children:s.map((y,x)=>n.jsxs("span",{className:dt.metaItem,children:[y.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,h]})}));Yw.displayName="UltronEventCard";const Kw=g.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(lr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(hh,{size:14}),...d,children:[l,i&&n.jsx("div",{className:dt.metaRow,children:i})]}));Kw.displayName="UltronUnderstandingCard";const Qw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Zw=g.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(lr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(ec,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:dt.metaRow,children:i.map((f,v)=>n.jsx(Jn,{size:"sm",color:Qw[s],variant:"subtle",children:f},v))}):null]}));Zw.displayName="UltronDecisionCard";const Xw="_root_1dj39_8",Jw="_xs_1dj39_75",eb="_sm_1dj39_84",tb="_md_1dj39_93",nb="_lg_1dj39_102",rb="_xl_1dj39_111",ob="_iconOnly_1dj39_122",ab="_primary_1dj39_132",ib="_secondary_1dj39_148",sb="_tertiary_1dj39_167",lb="_ghost_1dj39_185",cb="_destructive_1dj39_203",db="_destructiveSecondary_1dj39_221",ub="_artwork_1dj39_69",hb="_label_1dj39_254",pb="_spinner_1dj39_69",fb="_light_1dj39_285",pn={root:Xw,xs:Jw,sm:eb,md:tb,lg:nb,xl:rb,iconOnly:ob,primary:ab,secondary:ib,tertiary:sb,ghost:lb,destructive:cb,destructiveSecondary:db,artwork:ub,label:hb,spinner:pb,"alloy-spin":"_alloy-spin_1dj39_1",light:fb},mb={primary:pn.primary,secondary:pn.secondary,tertiary:pn.tertiary,ghost:pn.ghost,destructive:pn.destructive,"destructive-secondary":pn.destructiveSecondary},Fe=g.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:v,...y},x)=>{const w=v||i;return n.jsxs("button",{ref:x,className:ie(pn.root,mb[e],pn[o],d&&pn.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...y,children:[i&&n.jsx("span",{className:pn.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&n.jsx("span",{className:pn.label,children:f}),l&&n.jsx("span",{className:ie(pn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Fe.displayName="Button";function mg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}mg.displayName="XCircleIcon";const gb=g.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},v)=>{const y=n.jsxs(n.Fragment,{children:[i.map((x,w)=>n.jsx(Fe,{size:"sm",variant:x.variant??(w===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},w)),s&&n.jsx(Fe,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(mg,{size:16}),onClick:s,children:l})]});return n.jsx(lr,{ref:v,tone:d,eyebrow:e,icon:o??n.jsx(ec,{size:14}),footer:y,...f,children:h})});gb.displayName="UltronRecommendationCard";function rc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rc.displayName="Lock01Icon";const vb=g.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:v="Edit",onEdit:y,tone:x="warning",children:w,...k},_)=>{const C=n.jsxs(n.Fragment,{children:[f&&n.jsx(Fe,{size:"md",variant:"ghost",onClick:f,children:h}),y&&n.jsx(Fe,{size:"md",variant:"secondary",onClick:y,children:v}),n.jsx(Fe,{size:"md",variant:"primary",leadingArtwork:n.jsx(rn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(lr,{ref:_,tone:x,eyebrow:o,title:e,icon:i??n.jsx(rc,{size:14}),trailing:n.jsx(Ho,{status:"awaiting-approval"}),footer:C,footerEnd:!0,...k,children:w})});vb.displayName="UltronApprovalCard";const xb=g.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>n.jsx(lr,{ref:f,tone:d,eyebrow:e,icon:o??n.jsx(Wi,{size:14}),trailing:n.jsx(Ho,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(mh,{state:s,duration:l,children:i.map((v,y)=>n.jsx(Jl,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},y))})}));xb.displayName="UltronExecutionCard";const yb=g.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>n.jsx(lr,{ref:f,tone:l,fill:!0,accent:!1,trailing:n.jsx(Ho,{status:s}),footer:d,...h,children:n.jsxs("div",{className:dt.resultHero,children:[n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(gn,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:dt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:dt.resultDetail,children:o})]})]})}));yb.displayName="UltronResultCard";function gg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}gg.displayName="ZapIcon";const wb=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:v="info",children:y,...x},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(Fe,{size:"md",variant:"primary",leadingArtwork:n.jsx(tc,{size:18}),loading:d,onClick:l,children:s}),f&&n.jsx(Fe,{size:"md",variant:"ghost",onClick:f,children:h})]});return n.jsx(lr,{ref:w,tone:v,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(gg,{size:14}),footer:k,...x,children:y})});wb.displayName="UltronWorkflowSaveCard";const vg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vg.displayName="GitBranch01Icon";function hu({label:e,children:o}){return n.jsxs("div",{className:dt.clause,children:[n.jsx("span",{className:dt.clauseLabel,children:e}),n.jsx("span",{className:dt.clauseBody,children:o})]})}const bb=g.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:v="info",...y},x)=>n.jsx(lr,{ref:x,tone:v,eyebrow:o,title:e,icon:i??n.jsx(vg,{size:14}),trailing:h?n.jsx(Ho,{status:h}):void 0,footer:f,...y,children:n.jsxs("div",{className:dt.clauses,children:[n.jsx(hu,{label:"When",children:s}),n.jsx(hu,{label:"If",children:l}),n.jsx(hu,{label:"Then",children:d})]})}));bb.displayName="UltronWorkflowPreviewCard";const kb="_root_1nyuz_6",Cb="_sm_1nyuz_20",_b="_md_1nyuz_29",jb="_lg_1nyuz_38",Sb="_divider_1nyuz_48",Mb="_interactive_1nyuz_53",$b="_disabled_1nyuz_60",Rb="_destructive_1nyuz_64",Nb="_selected_1nyuz_78",Lb="_label_1nyuz_87",Ab="_description_1nyuz_97",Tb="_leadingSlot_1nyuz_101",Eb="_trailingSlot_1nyuz_102",Ib="_content_1nyuz_115",Pb="_taSwitch_1nyuz_167",zb="_taSwitchThumb_1nyuz_188",Ob="_taCheckbox_1nyuz_203",Db="_taRadio_1nyuz_226",Fb="_taRadioDot_1nyuz_244",Bb="_taExpand_1nyuz_252",Hb="_taStatus_1nyuz_266",Wb="_taStatus_success_1nyuz_273",Ub="_taStatus_warning_1nyuz_274",qb="_taStatus_error_1nyuz_275",Vb="_taStatus_info_1nyuz_276",Nt={root:kb,sm:Cb,md:_b,lg:jb,divider:Sb,interactive:Mb,disabled:$b,destructive:Rb,selected:Nb,label:Lb,description:Ab,leadingSlot:Tb,trailingSlot:Eb,content:Ib,taSwitch:Pb,taSwitchThumb:zb,taCheckbox:Ob,taRadio:Db,taRadioDot:Fb,taExpand:Bb,taStatus:Hb,taStatus_success:Wb,taStatus_warning:Ub,taStatus_error:qb,taStatus_info:Vb},Mn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Mn.displayName="ChevronRightIcon";const vh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vh.displayName="ArrowUpRightIcon";const Gb="_root_4qytd_5",Yb="_neutral_4qytd_25",Kb="_primary_4qytd_30",Qb="_success_4qytd_35",Zb="_warning_4qytd_40",Xb="_error_4qytd_45",Jb="_info_4qytd_50",Wf={root:Gb,neutral:Yb,primary:Kb,success:Qb,warning:Zb,error:Xb,info:Jb},Wo=g.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(Wf.root,Wf[e],o),...s,children:i}));Wo.displayName="Badge";const e6=({checked:e})=>n.jsx("span",{className:Nt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:Nt.taSwitchThumb})}),t6=({checked:e})=>n.jsx("span",{className:Nt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),n6=({checked:e})=>n.jsx("span",{className:Nt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:Nt.taRadioDot})}),r6=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(Wo,{"aria-hidden":"true",children:i}):null},o6=({expanded:e})=>n.jsx("span",{className:Nt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:16,color:"currentColor"})}),a6=({variant:e})=>n.jsx("span",{className:ie(Nt.taStatus,Nt[`taStatus_${e}`]),"aria-hidden":"true"}),i6=new Set(["badge","status"]),Sn=g.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:v,badgeLabel:y,expanded:x=!1,statusVariant:w="success",divider:k=!0,size:_="md",interactive:C,selected:R=!1,destructive:N=!1,disabled:$=!1,className:M,onClick:j,onKeyDown:z,...L},T)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[S,D]=g.useState(h),V=E?d!==void 0?d:S:!1,q=C||!!j||E||l!==void 0&&!i6.has(l),B=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":q?"button":void 0,K=g.useCallback(se=>{if(!$){if(E){const le=!V;d===void 0&&D(le),f==null||f(le)}j==null||j(se)}},[$,E,V,d,f,j]),ee=g.useCallback(se=>{q&&!$&&(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),K(se)),z==null||z(se)},[q,$,K,z]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Mn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(vh,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(e6,{checked:V});case"checkbox":return n.jsx(t6,{checked:V});case"radio":return n.jsx(n6,{checked:V});case"badge":return n.jsx(r6,{count:v,label:y});case"expand":return n.jsx(o6,{expanded:x});case"status":return n.jsx(a6,{variant:w});default:return null}})();return n.jsxs("div",{ref:T,role:B,tabIndex:q&&!$?0:void 0,"aria-checked":E?V:void 0,"aria-selected":R||void 0,"aria-disabled":$||void 0,"data-selected":R||void 0,"data-disabled":$||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:ie(Nt.root,Nt[_],k&&Nt.divider,q&&Nt.interactive,R&&Nt.selected,N&&Nt.destructive,$&&Nt.disabled,M),onClick:$?void 0:K,onKeyDown:ee,...L,children:[i&&n.jsx("div",{className:Nt.leadingSlot,children:i}),n.jsxs("div",{className:Nt.content,children:[n.jsx("span",{className:Nt.label,children:e}),o&&n.jsx("span",{className:Nt.description,children:o})]}),ae&&n.jsx("div",{className:Nt.trailingSlot,children:ae})]})});Sn.displayName="ListItem";const s6=g.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(Sn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(Ho,{status:s}),...l}));s6.displayName="UltronActivityStreamItem";const l6="_root_1sz1z_7",c6="_status_1sz1z_50",pu={root:l6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:c6},xh=g.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const v=g.useRef(null),[y,x]=g.useState(""),w=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const _=k.props;return g.cloneElement(k,{groupDisabled:e||!!_.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=_=>{_.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>x(k),[]),n.jsxs("div",{ref:f,"data-size":o,className:ie(pu.root,pu[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:v,className:pu.status,role:"status","aria-live":"polite",children:y})]})});xh.displayName="ComposerActions";function fu({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const xg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};xg.displayName="SearchSmIcon";const Sl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Sl.displayName="Trash03Icon";const yh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};yh.displayName="SunIcon";const yg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};yg.displayName="ArrowNarrowRightIcon";function no({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function Uf({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function d6({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Ol=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ol.displayName="ChevronSelectorVerticalIcon";const zo=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};zo.displayName="ClipboardCheckIcon";const wg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};wg.displayName="SettingsGearIcon";const bg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};bg.displayName="ChevronLeftIcon";const kg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};kg.displayName="EyeOffIcon";const Cg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Cg.displayName="StopIcon";const _g=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};_g.displayName="RecordingIcon";const jg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};jg.displayName="BankIcon";function oc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oc.displayName="ArrowNarrowUpIcon";function Sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Sg.displayName="ArrowNarrowDownIcon";function ac({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ac.displayName="Microphone02Icon";const Dl=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Dl.displayName="AlertTriangleIcon";const Mg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Mg.displayName="BankNote01Icon";const $g=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$g.displayName="CoinsStacked03Icon";function Rg({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const wh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};wh.displayName="Map01Icon";const bh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};bh.displayName="PackageIcon";const Ng=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ng.displayName="ThumbsUpIcon";const Lg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Lg.displayName="ThumbsDownIcon";function Ei({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ei.displayName="Building02Icon";function kh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}kh.displayName="Building05Icon";function Ui({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ui.displayName="CheckVerified01Icon";function Ag({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ag.displayName="Copy01Icon";function Tg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}Tg.displayName="DotsVerticalIcon";function ic({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ic.displayName="Edit02Icon";function Eg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Eg.displayName="HomeSmileIcon";function Ch({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ch.displayName="Link01Icon";function sc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}sc.displayName="LinkExternal01Icon";function _h({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}_h.displayName="MedicalCrossIcon";function Ii({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ii.displayName="MessageCircle02Icon";function jh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jh.displayName="MinusIcon";function Ig({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ig.displayName="Moon01Icon";function Pg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Pg.displayName="Pin01Icon";function zg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}zg.displayName="ReceiptCheckIcon";function Og({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}Og.displayName="Settings02Icon";function Dg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Dg.displayName="Speedometer02Icon";function Fg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Fg.displayName="Trash01Icon";function Uu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Uu.displayName="UploadCloud01Icon";function Do({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Do.displayName="XCloseIcon";const u6="_base_i93xz_11",h6="_icon_i93xz_45",p6="_sendReady_i93xz_65",f6="_sendStreaming_i93xz_66",m6="_sendDisabled_i93xz_67",g6="_sendError_i93xz_68",v6="_attachIdle_i93xz_131",x6="_attachDisabled_i93xz_145",y6="_attachError_i93xz_152",w6="_voiceIdle_i93xz_165",b6="_voiceRecording_i93xz_179",k6="_voiceDisabled_i93xz_189",C6="_iconStack_i93xz_200",_6="_iconLayer_i93xz_209",jt={base:u6,icon:h6,sendReady:p6,sendStreaming:f6,sendDisabled:m6,sendError:g6,attachIdle:v6,attachDisabled:x6,attachError:y6,voiceIdle:w6,voiceRecording:b6,voiceDisabled:k6,iconStack:C6,iconLayer:_6},j6={hidden:void 0,ready:jt.sendReady,"disabled-invalid":jt.sendDisabled,streaming:jt.sendStreaming,error:jt.sendError},S6=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Ta=g.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),k=g.useRef(null),_=g.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]),C=g.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const R=!h&&(e==="ready"||e==="streaming"||e==="error"),N=S6(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,M=n.jsx("button",{ref:_,type:"button","data-composer-action":"send","data-state":e,className:ie(jt.base,j6[e],f),style:v,"aria-label":N,disabled:!R,onClick:C,...y,children:n.jsxs("span",{className:jt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:jt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(oc,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:jt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(Cg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:jt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Wi,{size:"100%",strokeWidth:2})})]})});return $?n.jsx($r,{content:$,placement:"top",children:M}):M});Ta.displayName="ComposerSendButton";const M6={idle:jt.attachIdle,disabled:jt.attachDisabled,error:jt.attachError},$6=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Bg=g.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...y},x)=>{const w=g.useRef(null),k=g.useCallback(()=>{var M;(e==="idle"||e==="error")&&((M=w.current)==null||M.click())},[e]),_=g.useCallback(M=>{const j=M.target.files;j&&j.length>0&&(o==null||o(j)),M.target.value=""},[o]),C=!h&&e!=="disabled",R=$6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=n.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:ie(jt.base,M6[e],f),style:v,"aria-label":R,disabled:!C,onClick:k,...y,children:[n.jsx("span",{className:jt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(Aa,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:_,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx($r,{content:N,placement:"top",children:$}):$});Bg.displayName="ComposerAttachment";const R6={idle:jt.voiceIdle,recording:jt.voiceRecording,disabled:jt.voiceDisabled},N6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Hg=g.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},v)=>{const y=g.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),x=!l&&e!=="disabled",w=N6(e,s),k=e==="disabled"?s??"Voice unavailable":null,_=n.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:ie(jt.base,R6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...f,children:n.jsxs("span",{className:jt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:jt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(ac,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:jt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(_g,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx($r,{content:k,placement:"top",children:_}):_});Hg.displayName="ComposerVoiceButton";const L6=g.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:v="lg",leadingActions:y,className:x},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(dg,{className:x,style:{flex:"0 0 auto"},children:n.jsx(ug,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:f,radius:v,disabled:d,children:n.jsxs(xh,{size:"md",disabled:d,children:[y,h&&n.jsx(Hg,{state:d?"disabled":"idle"}),n.jsx(Ta,{state:k,onSend:i,onStop:i})]})})})});L6.displayName="UltronCommandBar";const A6=g.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(mh,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(Jl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));A6.displayName="UltronThreadTimeline";const T6="_root_ghwhu_10",E6="_badge_ghwhu_27",I6="_badgeIcon_ghwhu_38",P6="_green_ghwhu_59",z6="_yellow_ghwhu_60",O6="_matcha_ghwhu_61",D6="_purple_ghwhu_62",F6="_blue_ghwhu_63",B6="_azure_ghwhu_64",H6="_red_ghwhu_65",W6="_orange_ghwhu_66",U6="_pink_ghwhu_67",q6="_slate_ghwhu_68",V6="_content_ghwhu_73",G6="_label_ghwhu_83",Y6="_valueRow_ghwhu_97",K6="_change_ghwhu_106",Q6="_value_ghwhu_97",br={root:T6,badge:E6,badgeIcon:I6,green:P6,yellow:z6,matcha:O6,purple:D6,blue:F6,azure:B6,red:H6,orange:W6,pink:U6,slate:q6,content:V6,label:G6,valueRow:Y6,change:K6,value:Q6},Z6=g.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(br.root,d),...h,children:[n.jsx("div",{className:ie(br.badge,br[e]),"aria-hidden":"true",children:n.jsx("span",{className:br.badgeIcon,children:o})}),n.jsxs("div",{className:br.content,children:[n.jsx("span",{className:br.label,children:i}),n.jsxs("div",{className:br.valueRow,children:[n.jsx("span",{className:br.value,children:s}),l!=null&&n.jsx("span",{className:br.change,children:l})]})]})]}));Z6.displayName="DataCard";const X6="_root_d0j6n_7",J6="_icon_d0j6n_21",e8="_text_d0j6n_33",t8="_positive_d0j6n_41",n8="_warning_d0j6n_45",r8="_negative_d0j6n_49",cl={root:X6,icon:J6,text:e8,positive:t8,warning:n8,negative:r8};function o8(e){return e==="up"?"positive":"negative"}const a8=g.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??o8(e.trend):e.severity,{severity:f,...v}=d,y=i==="trend"?(({trend:w,severity:k,..._})=>_)(v):v,x=i==="trend"?e.trend==="up"?oc:Sg:null;return n.jsxs("span",{ref:o,className:ie(cl.root,cl[h],l),...y,children:[n.jsx("span",{className:cl.text,children:s}),x&&n.jsx("span",{className:cl.icon,"aria-hidden":"true",children:n.jsx(x,{size:14})})]})});a8.displayName="ValueChangeLabel";const i8="_root_1lq10_1",s8="_horizontal_1lq10_9",l8="_vertical_1lq10_15",c8="_solid_1lq10_32",d8="_dashed_1lq10_36",dl={root:i8,horizontal:s8,vertical:l8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:c8,dashed:d8},u8=g.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(dl.root,dl[`thickness-${e}`],dl[o],dl[i],s),...l}));u8.displayName="Divider";const h8="_overlay_vxgy2_9",p8="_dialogOverlayIn_vxgy2_1",f8="_dialogOverlayOut_vxgy2_1",m8="_dialog_vxgy2_38",g8="_dialogIn_vxgy2_1",v8="_dialogOut_vxgy2_1",x8="_sm_vxgy2_88",y8="_md_vxgy2_89",w8="_lg_vxgy2_90",b8="_header_vxgy2_95",k8="_title_vxgy2_107",C8="_closeBtn_vxgy2_120",_8="_content_vxgy2_152",j8="_footer_vxgy2_163",so={overlay:h8,dialogOverlayIn:p8,dialogOverlayOut:f8,dialog:m8,dialogIn:g8,dialogOut:v8,sm:x8,md:y8,lg:w8,header:b8,title:k8,closeBtn:C8,content:_8,footer:j8},Wg=g.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(so.header,i),...s,children:[n.jsx("span",{className:so.title,children:o}),e&&n.jsx("button",{type:"button",className:so.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Hi,{size:16})})]}));Wg.displayName="DialogHeader";const Ug=g.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(so.content,o),...i,children:e}));Ug.displayName="DialogContent";const qg=g.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(so.footer,o),...i,children:e}));qg.displayName="DialogFooter";function Vg({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=g.useRef(null),f=180,[v,y]=g.useState(e);return g.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),f);return()=>clearTimeout(x)},[e]),g.useEffect(()=>{if(!e)return;const x=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,o]),g.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),v?uo.createPortal(n.jsx("div",{className:so.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(so.dialog,so[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const S8="_root_1dntq_7",M8="_badge_1dntq_57",$8="_badgeIconSlot_1dntq_74",R8="_content_1dntq_82",N8="_text_1dntq_90",L8="_title_1dntq_99",A8="_description_1dntq_120",T8="_actions_1dntq_131",E8="_dot_1dntq_137",I8="_actionLink_1dntq_144",P8="_primaryAction_1dntq_162",z8="_trailing_1dntq_170",Xt={root:S8,badge:M8,badgeIconSlot:$8,content:R8,text:N8,title:L8,description:A8,actions:T8,dot:E8,actionLink:I8,primaryAction:P8,trailing:z8},O8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),D8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),F8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),qf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),B8={error:O8,warning:F8,success:D8,info:qf,feature:qf},Gg=g.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:v,onDismiss:y,className:x,...w},k)=>{const _=B8[e],C=i==="lg",R=y?n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:n.jsx(Hi,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Xt.root,x),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Xt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Xt.badgeIconSlot),children:n.jsx(_,{})})}),C?n.jsxs("div",{className:Xt.content,children:[n.jsxs("div",{className:Xt.text,children:[n.jsx("p",{className:Xt.title,children:s}),l&&n.jsx("p",{className:Xt.description,children:l})]}),(d||f)&&n.jsxs("div",{className:Xt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Xt.actionLink,Xt.primaryAction),onClick:h,children:d}),d&&f&&n.jsx("span",{className:Xt.dot,"aria-hidden":"true",children:"·"}),f&&n.jsx("button",{type:"button",className:Xt.actionLink,onClick:v,children:f})]})]}):n.jsx("p",{className:Xt.title,children:s}),C?R:(d||y)&&n.jsxs("div",{className:Xt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Xt.actionLink,Xt.primaryAction),onClick:h,children:d}),R]})]})});Gg.displayName="Alert";const H8="_stack_x4xl7_11",W8="_item_x4xl7_28",U8="_itemExiting_x4xl7_33",qu={stack:H8,item:W8,itemExiting:U8},q8=g.createContext(null);function V8({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:v,exiting:y,onRemove:x}){const w=g.useCallback(()=>x(e),[e,x]);return n.jsx("div",{className:ie(qu.item,y&&qu.itemExiting),onAnimationEnd:y?w:void 0,children:n.jsx(Gg,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function G8({toasts:e,onStartExit:o,onRemove:i}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:uo.createPortal(n.jsx("div",{className:qu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(V8,{...s,onRemove:i},s.id))}),document.body)}function Y8({children:e}){const[o,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(f=>{const v=`toast-${++s.current}`;return i(y=>[...y,{id:v,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(f=>{i(v=>v.map(y=>y.id===f?{...y,exiting:!0}:y))},[]),h=g.useCallback(f=>{i(v=>v.filter(y=>y.id!==f))},[]);return n.jsxs(q8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(G8,{toasts:o,onStartExit:d,onRemove:h})]})}const K8="_root_1s0ek_5",Q8="_list_1s0ek_11",Z8="_item_1s0ek_23",X8="_separator_1s0ek_31",J8="_link_1s0ek_47",e9="_current_1s0ek_68",t9="_iconSlot_1s0ek_76",ir={root:K8,list:Q8,item:Z8,separator:X8,link:J8,current:e9,iconSlot:t9},n9=()=>n.jsx("span",{className:ir.separator,"aria-hidden":"true",children:"/"}),r9=()=>n.jsx("span",{className:ir.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),o9=g.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?r9:n9;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(ir.root,i),...s,children:n.jsx("ol",{className:ir.list,children:e.map((h,f)=>{const v=f===e.length-1,y=!v&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:ir.item,children:[f>0&&n.jsx(d,{}),y?n.jsxs("a",{href:h.href,onClick:h.onClick,className:ir.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(ir.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(ir.link,v&&ir.current),"aria-current":v?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(ir.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},f)})})})});o9.displayName="Breadcrumb";const a9="_root_139vz_6",i9="_divider_139vz_14",s9="_item_139vz_19",l9="_label_139vz_25",c9="_description_139vz_26",d9="_chevron_139vz_27",u9="_iconSlot_139vz_28",h9="_hitTarget_139vz_32",p9="_size_sm_139vz_37",f9="_size_md_139vz_43",m9="_size_lg_139vz_49",g9="_header_139vz_59",v9="_headerContent_139vz_59",x9="_checkboxWrap_139vz_60",y9="_labelBlock_139vz_157",w9="_trailingSlot_139vz_60",b9="_body_139vz_199",k9="_bodyInner_139vz_209",C9="_bodyContent_139vz_214",Ht={root:a9,divider:i9,item:s9,label:l9,description:c9,chevron:d9,iconSlot:u9,hitTarget:h9,size_sm:p9,size_md:f9,size_lg:m9,header:g9,headerContent:v9,checkboxWrap:x9,labelBlock:y9,trailingSlot:w9,body:b9,bodyInner:k9,bodyContent:C9},_9="_root_17t97_6",j9="_disabled_17t97_12",S9="_sm_17t97_18",M9="_md_17t97_26",$9="_lg_17t97_34",R9="_controlWrap_17t97_43",N9="_input_17t97_52",L9="_box_17t97_67",A9="_boxChecked_17t97_96",T9="_boxError_17t97_106",E9="_labelWrap_17t97_116",I9="_label_17t97_116",P9="_error_17t97_138",z9="_required_17t97_140",O9="_description_17t97_145",bn={root:_9,disabled:j9,sm:S9,md:M9,lg:$9,controlWrap:R9,input:N9,box:L9,boxChecked:A9,boxError:T9,labelWrap:E9,label:I9,error:P9,required:z9,description:O9},Yg=g.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:v,id:y,name:x,value:w,required:k,className:_},C)=>{const R=g.useId(),N=y??R,$=g.useRef(null);g.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const M=e!==void 0,[j,z]=g.useState(o),L=M?e:j,T=S=>{M||z(S.target.checked),s==null||s(S.target.checked)},E=L||i;return n.jsxs("div",{className:ie(bn.root,bn[h],l&&bn.disabled,d&&bn.error,_),children:[n.jsxs("div",{className:bn.controlWrap,children:[n.jsx("input",{ref:S=>{$.current=S,typeof C=="function"?C(S):C&&(C.current=S)},type:"checkbox",id:N,name:x,value:w,checked:L,disabled:l,required:k,"aria-invalid":d||void 0,onChange:T,className:bn.input}),n.jsx("span",{className:ie(bn.box,E&&bn.boxChecked,d&&bn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):L?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||v)&&n.jsxs("div",{className:bn.labelWrap,children:[f&&n.jsxs("label",{htmlFor:N,className:bn.label,children:[f,k&&n.jsx("span",{className:bn.required,"aria-hidden":"true",children:" *"})]}),v&&n.jsx("span",{className:bn.description,children:v})]})]})});Yg.displayName="Checkbox";const Kg=g.createContext(null),Vu=g.createContext(0),Qg=g.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:v,children:y,...x},w)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[_,C]=g.useState(k),R=i!==void 0,N=g.useMemo(()=>R?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:_,[R,i,_]),$=g.useCallback(z=>N.has(z),[N]),M=g.useCallback(z=>{const L=new Set(N);e==="single"?L.has(z)?o&&L.delete(z):(L.clear(),L.add(z)):L.has(z)?L.delete(z):L.add(z),R||C(L),l&&l(e==="single"?L.values().next().value??"":Array.from(L))},[N,e,o,R,l]),j=g.useMemo(()=>({type:e,collapsible:o,size:h,disabled:f,isExpanded:$,toggle:M}),[e,o,h,f,$,M]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:ie(Ht.root,d&&Ht.divider,v),...x,children:n.jsx(Kg.Provider,{value:j,children:n.jsx(Vu.Provider,{value:0,children:y})})})});Qg.displayName="Accordion";function ul(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Zg=g.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:v,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:w,expanded:k,defaultExpanded:_=!1,onExpandedChange:C,disabled:R=!1,size:N,className:$,children:M,...j},z)=>{const L=g.useContext(Kg),T=g.useContext(Vu),E=L!==null,S=N??(L==null?void 0:L.size)??"md",D=R||(L==null?void 0:L.disabled)||!1,[V,q]=g.useState(_);let B;E?B=e!==void 0?L.isExpanded(e):!1:k!==void 0?B=k:B=V;const K=g.useCallback(()=>{if(D)return;if(E){if(e===void 0)return;const O=L.isExpanded(e);L.toggle(e);const ne=L.type==="single"&&!L.collapsible&&O?!0:!O;C==null||C(ne);return}const A=!B;k===void 0&&q(A),C==null||C(A)},[D,E,L,e,B,k,C]),ee=g.useCallback(A=>w==null?void 0:w(A),[w]),ae=g.useCallback(A=>{if(A.key==="Enter"||A.key===" "){A.preventDefault(),K();return}if(E)switch(A.key){case"ArrowDown":A.preventDefault(),ul(A.currentTarget,"next");break;case"ArrowUp":A.preventDefault(),ul(A.currentTarget,"prev");break;case"Home":A.preventDefault(),ul(A.currentTarget,"first");break;case"End":A.preventDefault(),ul(A.currentTarget,"last");break}},[K,E]),se=g.useId(),le=`${se}-header`,Z=`${se}-body`,F=S==="sm"?16:S==="md"?18:20,Y=l??n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:Ht.checkboxWrap,children:n.jsx(Yg,{size:S,checked:v,defaultChecked:y,indeterminate:x,disabled:D,onChange:ee})}),s&&n.jsx("span",{className:Ht.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:z,"data-accordion-item":"","data-expanded":B||void 0,"data-disabled":D||void 0,"data-size":S,"data-depth":T,className:ie(Ht.item,Ht[`size_${S}`],$),style:{"--accordion-depth":T},...j,children:[n.jsxs("div",{className:Ht.header,children:[n.jsx("button",{type:"button",id:le,"data-accordion-header-button":"","data-accordion-depth":T,className:Ht.hitTarget,"aria-expanded":B,"aria-controls":Z,"aria-disabled":D||void 0,disabled:D,onClick:K,onKeyDown:ae}),n.jsxs("div",{className:Ht.headerContent,children:[h==="leading"&&n.jsx("span",{className:Ht.chevron,"aria-hidden":"true",children:n.jsx(Mn,{size:F,color:"currentColor"})}),Y,n.jsxs("div",{className:Ht.labelBlock,children:[n.jsx("span",{className:Ht.label,children:o}),i&&n.jsx("span",{className:Ht.description,children:i})]}),d&&n.jsx("div",{className:Ht.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Ht.chevron,"aria-hidden":"true",children:n.jsx(Mn,{size:F,color:"currentColor"})})]})]}),n.jsx("div",{id:Z,role:"region","aria-labelledby":le,className:Ht.body,"aria-hidden":!B,children:n.jsx("div",{className:Ht.bodyInner,children:n.jsx("div",{className:Ht.bodyContent,children:n.jsx(Vu.Provider,{value:T+1,children:M})})})})]})});Zg.displayName="AccordionItem";const D9="_root_1vgip_7",F9="_fullWidth_1vgip_12",B9="_panel_1vgip_19",H9="_panelInner_1vgip_73",W9="_item_1vgip_81",U9="_groupHeading_1vgip_87",q9="_groupHeadingSm_1vgip_96",V9="_groupHeadingLabel_1vgip_100",G9="_groupHeadingCollapsible_1vgip_112",Y9="_groupChevron_1vgip_125",K9="_groupDivider_1vgip_139",Xn={root:D9,fullWidth:F9,panel:B9,panelInner:H9,item:W9,groupHeading:U9,groupHeadingSm:q9,groupHeadingLabel:V9,groupHeadingCollapsible:G9,groupChevron:Y9,groupDivider:K9};function Q9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Xn.groupHeading,o==="sm"&&Xn.groupHeadingSm,e.collapsible&&Xn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Xn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Xn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const v=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(Sn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Xn.item,onClick:()=>{var y;(y=h.onClick)==null||y.call(h),i&&!v&&s()}},h.id)})})]})}const Sh=g.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:v=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:w,...k},_)=>{const[C,R]=g.useState(h),N=g.useRef(null),$=d!==void 0?d:C,M=g.useCallback(z=>{N.current=z,_&&(typeof _=="function"?_(z):_.current=z)},[_]),j=g.useCallback(z=>{d===void 0&&R(z),f==null||f(z)},[d,f]);return g.useEffect(()=>{if(!$)return;const z=L=>{var T;(T=N.current)!=null&&T.contains(L.target)||j(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[$,j]),g.useEffect(()=>{if(!$)return;const z=L=>{L.key==="Escape"&&j(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[$,j]),n.jsxs("div",{ref:M,className:ie(Xn.root,x&&Xn.fullWidth,w),...k,children:[n.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:v?-1:0,onClick:v?void 0:()=>j(!$),onKeyDown:v?void 0:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),j(!$))},children:e}),n.jsx("div",{className:Xn.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Xn.panelInner,children:o.map((z,L)=>n.jsxs("div",{children:[L>0&&n.jsx("div",{className:Xn.groupDivider,"aria-hidden":"true"}),n.jsx(Q9,{group:z,size:i,closeOnSelect:y,onClose:()=>j(!1)})]},z.id))})})]})});Sh.displayName="DropdownMenu";const Z9="_hiddenInput_8457s_8",X9="_area_8457s_19",J9="_uploadIcon_8457s_53",e7="_textBlock_8457s_59",t7="_title_8457s_67",n7="_description_8457s_76",r7="_fileRow_8457s_88",o7="_fileIcon_8457s_96",a7="_fileName_8457s_101",i7="_successIcon_8457s_115",s7="_removeBtn_8457s_121",l7="_progressWrap_8457s_145",c7="_progressBar_8457s_153",d7="_progressFill_8457s_161",u7="_progressLabel_8457s_168",h7="_errorRow_8457s_178",p7="_errorIcon_8457s_186",f7="_errorText_8457s_192",m7="_areaMulti_8457s_206",g7="_multiDropZone_8457s_214",v7="_fileList_8457s_244",x7="_fileListItem_8457s_254",y7="_inline_8457s_267",w7="_inlineIcon_8457s_309",b7="_inlineText_8457s_330",k7="_inlineProgress_8457s_353",C7="_inlineProgressFill_8457s_363",_7="_footerSlot_8457s_429",Ke={hiddenInput:Z9,area:X9,uploadIcon:J9,textBlock:e7,title:t7,description:n7,fileRow:r7,fileIcon:o7,fileName:a7,successIcon:i7,removeBtn:s7,progressWrap:l7,progressBar:c7,progressFill:d7,progressLabel:u7,errorRow:h7,errorIcon:p7,errorText:f7,areaMulti:m7,multiDropZone:g7,fileList:v7,fileListItem:x7,inline:y7,inlineIcon:w7,inlineText:b7,inlineProgress:k7,inlineProgressFill:C7,footerSlot:_7};function mu(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Xg=g.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:w,onClear:k,onRemoveFile:_,fieldVariant:C="outlined",browseButtonVariant:R="tertiary",footerSlot:N,disabled:$=!1,className:M,...j},z)=>{const L=g.useRef(null),[T,E]=g.useState(!1),S=!$&&(o||i==="empty"),D=g.useCallback(()=>{var Z;!$&&(o||i==="empty")&&((Z=L.current)==null||Z.click())},[$,o,i]),V=g.useCallback(Z=>{var F;if(o){const Y=Z.target.files?Array.from(Z.target.files):[];Y.length&&(w==null||w(Y))}else{const Y=(F=Z.target.files)==null?void 0:F[0];Y&&(x==null||x(Y))}Z.target.value=""},[o,x,w]),q=g.useCallback(Z=>{Z.preventDefault(),S&&E(!0)},[S]),B=g.useCallback(()=>E(!1),[]),K=g.useCallback(Z=>{var F;if(Z.preventDefault(),E(!1),!!S)if(o){const Y=Z.dataTransfer.files?Array.from(Z.dataTransfer.files):[];Y.length&&(w==null||w(Y))}else{const Y=(F=Z.dataTransfer.files)==null?void 0:F[0];Y&&(x==null||x(Y))}},[S,o,x,w]),ee=n.jsx("input",{ref:L,type:"file",className:Ke.hiddenInput,accept:y,multiple:o,disabled:$,"aria-hidden":"true",tabIndex:-1,onChange:V}),ae=l?n.jsxs("div",{className:Ke.fileRow,children:[n.jsx("span",{className:`${Ke.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(io,{size:16})}),n.jsx("span",{className:Ke.fileName,children:l.name}),n.jsx(Jn,{size:"sm",variant:"subtle",children:mu(l)}),i==="complete"&&n.jsx("span",{className:`${Ke.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(gn,{size:16})}),n.jsx("button",{type:"button",className:Ke.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})})]}):null;if(e==="area"){if(o){const Z=d??[];return n.jsxs("div",{ref:z,className:ie(Ke.areaMulti,M),"data-drag-over":T||void 0,"data-disabled":$||void 0,onDragOver:q,onDragLeave:B,onDrop:K,...j,children:[ee,n.jsxs("div",{className:Ke.multiDropZone,children:[n.jsx("span",{className:`${Ke.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(fu,{size:24})}),n.jsxs("div",{className:Ke.textBlock,children:[n.jsx("p",{className:Ke.title,children:f}),n.jsx("p",{className:Ke.description,children:v})]}),n.jsx(Fe,{variant:R,size:"sm",onClick:D,disabled:$,children:"Browse Files"})]}),Z.length>0&&n.jsx("ul",{className:Ke.fileList,"aria-label":"Selected files",children:Z.map((F,Y)=>n.jsxs("li",{className:Ke.fileListItem,children:[n.jsx("span",{className:`${Ke.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(io,{size:16})}),n.jsx("span",{className:Ke.fileName,children:F.name}),n.jsx(Jn,{size:"sm",variant:"subtle",children:mu(F)}),n.jsx("button",{type:"button",className:Ke.removeBtn,onClick:()=>_==null?void 0:_(Y),"aria-label":`Remove ${F.name}`,disabled:$,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})})]},`${F.name}-${Y}`))})]})}return n.jsxs("div",{ref:z,className:ie(Ke.area,M),"data-state":i,"data-drag-over":T||void 0,"data-disabled":$||void 0,onDragOver:q,onDragLeave:B,onDrop:K,...j,children:[ee,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Ke.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(fu,{size:24})}),n.jsxs("div",{className:Ke.textBlock,children:[n.jsx("p",{className:Ke.title,children:f}),n.jsx("p",{className:Ke.description,children:v})]}),n.jsx(Fe,{variant:R,size:"sm",onClick:D,disabled:$,children:"Browse File"}),N&&n.jsx("div",{className:Ke.footerSlot,children:N})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Ke.progressWrap,children:[n.jsx("div",{className:Ke.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ke.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Ke.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Ke.errorRow,children:[n.jsx("span",{className:`${Ke.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Sa,{size:20})}),n.jsx("p",{className:Ke.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(Fe,{variant:"tertiary",size:"sm",onClick:D,disabled:$,children:"Try Again"})]})]})}const se={empty:n.jsx(fu,{size:16}),uploading:n.jsx(io,{size:16}),complete:n.jsx(gn,{size:16}),error:n.jsx(Sa,{size:16})}[i],le=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:z,className:ie(Ke.inline,M),"data-state":i,"data-field-variant":C,"data-disabled":$||void 0,...j,children:[ee,n.jsx("span",{className:`${Ke.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:se}),n.jsxs("span",{className:Ke.inlineText,"data-has-file":le?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),le&&n.jsx(Jn,{size:"sm",variant:"subtle",children:mu(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Ke.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})}),i==="empty"&&n.jsx(Fe,{variant:R,size:"xs",onClick:D,disabled:$,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Ke.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ke.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Xg.displayName="FileUploader";const j7="_wrapper_127v8_8",S7="_labelRow_127v8_16",M7="_label_127v8_16",$7="_required_127v8_28",R7="_labelIcon_127v8_36",N7="_sm_127v8_46",L7="_md_127v8_47",A7="_lg_127v8_48",T7="_shell_127v8_44",E7="_outlined_127v8_75",I7="_underlined_127v8_102",P7="_float_127v8_147",z7="_leadingSlot_127v8_181",O7="_trailingSlot_127v8_193",D7="_trailingActionWrap_127v8_206",F7="_trailingActionBtn_127v8_213",B7="_successTrailingSlot_127v8_234",H7="_errorTrailingSlot_127v8_239",W7="_control_127v8_251",U7="_selectValue_127v8_297",q7="_selectPlaceholder_127v8_303",V7="_selectChevron_127v8_307",G7="_selectChevronOpen_127v8_312",Y7="_textareaShell_127v8_315",K7="_textareaControl_127v8_334",Q7="_footer_127v8_351",Z7="_footerRow_127v8_363",X7="_footerError_127v8_364",J7="_footerSuccess_127v8_365",ek="_footerIcon_127v8_368",tk="_wrapperHorizontal_127v8_378",nk="_horizontalLabelCol_127v8_384",rk="_horizontalLabelHint_127v8_393",ok="_horizontalControlCol_127v8_402",ak="_msContainer_127v8_416",ik="_msShell_127v8_425",sk="_msOpen_127v8_440",lk="_msDisabled_127v8_447",ck="_msBody_127v8_450",dk="_msPlaceholder_127v8_459",uk="_msChevron_127v8_469",hk="_msChevronOpen_127v8_480",pk="_msPanel_127v8_483",ze={wrapper:j7,labelRow:S7,label:M7,required:$7,labelIcon:R7,sm:N7,md:L7,lg:A7,shell:T7,outlined:E7,underlined:I7,float:P7,leadingSlot:z7,trailingSlot:O7,trailingActionWrap:D7,trailingActionBtn:F7,successTrailingSlot:B7,errorTrailingSlot:H7,control:W7,selectValue:U7,selectPlaceholder:q7,selectChevron:V7,selectChevronOpen:G7,textareaShell:Y7,textareaControl:K7,footer:Q7,footerRow:Z7,footerError:X7,footerSuccess:J7,footerIcon:ek,wrapperHorizontal:tk,horizontalLabelCol:nk,horizontalLabelHint:rk,horizontalControlCol:ok,msContainer:ak,msShell:ik,msOpen:sk,msDisabled:lk,msBody:ck,msPlaceholder:dk,msChevron:uk,msChevronOpen:hk,msPanel:pk};function Ea({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:v="vertical",labelWidth:y=160,className:x,children:w}){const k=l??d??s,_=l?"error":d?"success":"hint",C=k?n.jsxs("p",{className:ie(ze.footer,_==="error"&&ze.footerError,_==="success"&&ze.footerSuccess),role:_==="error"?"alert":void 0,"aria-live":_==="error"?"assertive":void 0,children:[_==="hint"&&n.jsx("span",{className:`${ze.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Sa,{size:12})}),k]}):null,R=e!=null?n.jsxs("div",{className:ze.labelRow,children:[n.jsx("label",{className:ze.label,htmlFor:f,children:e}),h&&n.jsx("span",{className:ze.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${ze.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(v==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return n.jsxs("div",{className:ie(ze.wrapper,ze.wrapperHorizontal,x),children:[(R||i)&&n.jsxs("div",{className:ze.horizontalLabelCol,style:N,children:[R,i&&n.jsx("p",{className:ze.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:ze.horizontalControlCol,children:[w,C]})]})}return n.jsxs("div",{className:ie(ze.wrapper,x),children:[R,w,C]})}function qi({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:v,isTextarea:y,focused:x,className:w,children:k}){const _=o==="sm"?14:o==="lg"?18:16,C=s&&!i&&!f&&!v?n.jsx(gn,{size:_}):null,R=i&&!f&&!v?n.jsx(Sa,{size:_}):null,N=!!h,$=!!(f||v||C||R);return n.jsxs("div",{className:ie(ze.shell,ze[e],ze[o],y&&ze.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":$||void 0,children:[h&&n.jsx("span",{className:ie(ze.leadingSlot,"alloy-icon-slot"),children:h}),k,v?n.jsx("span",{className:ze.trailingActionWrap,children:v}):f||C||R?n.jsx("span",{className:ie(ze.trailingSlot,"alloy-icon-slot",C&&ze.successTrailingSlot,R&&ze.errorTrailingSlot),children:f??C??R}):null]})}const Mh=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:v="text",leadingIcon:y,trailingIcon:x,layout:w,labelWidth:k,labelDescription:_,id:C,disabled:R,readOnly:N,className:$,...M},j)=>{const z=g.useId(),L=C??z;return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:w,labelWidth:k,labelDescription:_,className:$,children:n.jsx(qi,{variant:h,size:f,error:!!s,success:!!l,disabled:R,readOnly:N,leadingIcon:y,trailingIcon:x,children:n.jsx("input",{ref:j,id:L,type:v,disabled:R,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${L}-footer`:void 0,className:ie(ze.control),...M})})})});Mh.displayName="TextField";const fk=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,trailingIcon:y,layout:x,labelWidth:w,labelDescription:k,id:_,disabled:C,readOnly:R,className:N,...$},M)=>{const j=g.useId(),z=_??j;return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:z,layout:x,labelWidth:w,labelDescription:k,className:N,children:n.jsx(qi,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:R,leadingIcon:v,trailingIcon:y,isTextarea:!0,children:n.jsx("textarea",{ref:M,id:z,disabled:C,readOnly:R,"aria-invalid":s?!0:void 0,className:ie(ze.control,ze.textareaControl),...$})})})});fk.displayName="TextArea";const mk={sm:"sm",md:"md",lg:"lg"},Jg=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,options:k,value:_,defaultValue:C="",onChange:R,placeholder:N="Select an option…",disabled:$,readOnly:M,id:j,className:z},L)=>{var F;const T=g.useId(),E=j??T,S=_!==void 0,[D,V]=g.useState(C),q=S?_:D,B=g.useCallback(Y=>{S||V(Y),R==null||R(Y)},[S,R]),[K,ee]=g.useState(!1),ae=(F=k.find(Y=>Y.value===q))==null?void 0:F.label,se=f==="sm"?14:f==="lg"?18:16,le=mk[f],Z=n.jsx(qi,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:M,focused:K,leadingIcon:v,trailingIcon:n.jsx("span",{className:ie(ze.selectChevron,K&&ze.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Dn,{size:se})}),children:n.jsx("span",{className:ie(ze.control,ze.selectValue,!ae&&ze.selectPlaceholder),children:ae??N})});return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:E,layout:y,labelWidth:x,labelDescription:w,className:z,children:n.jsx(Sh,{ref:L,id:E,fullWidth:!0,trigger:Z,groups:[{id:"options",options:k.map(Y=>({id:Y.value,label:Y.label,disabled:Y.disabled,selected:Y.value===q,onClick:()=>B(Y.value)}))}],size:le,width:"100%",placement:"bottom-start",open:K,onOpenChange:ee,disabled:$||M})})});Jg.displayName="SelectField";const gk=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,id:k,disabled:_,readOnly:C,className:R,...N},$)=>{const M=g.useId(),j=k??M,[z,L]=g.useState(!1),T=f==="sm"?14:f==="lg"?18:16;return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:j,layout:y,labelWidth:x,labelDescription:w,className:R,children:n.jsx(qi,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:v,trailingAction:n.jsx("button",{type:"button",className:`${ze.trailingActionBtn} alloy-icon-slot`,onClick:()=>L(E=>!E),tabIndex:_?-1:0,"aria-label":z?"Hide password":"Show password","aria-pressed":z,children:z?n.jsx(kg,{size:T}):n.jsx(gh,{size:T})}),children:n.jsx("input",{ref:$,id:j,type:z?"text":"password",disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(ze.control),...N})})})});gk.displayName="PasswordField";const e2=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:v,onChange:y,layout:x,labelWidth:w,labelDescription:k,id:_,value:C,defaultValue:R,disabled:N,readOnly:$,className:M,...j},z)=>{const L=g.useId(),T=_??L,E=f==="sm"?14:f==="lg"?18:16,S=C!==void 0?String(C).length>0:void 0,D=g.useCallback(V=>{y==null||y(V)},[y]);return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:T,layout:x,labelWidth:w,labelDescription:k,className:M,children:n.jsx(qi,{variant:h,size:f,error:!!s,success:!!l,disabled:N,readOnly:$,leadingIcon:n.jsx(xg,{size:E}),trailingAction:S?n.jsx("button",{type:"button",className:`${ze.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(Hi,{size:E})}):void 0,children:n.jsx("input",{ref:z,id:T,type:"search",value:C,defaultValue:R,disabled:N,readOnly:$,"aria-invalid":s?!0:void 0,onChange:D,className:ie(ze.control),...j})})})});e2.displayName="SearchField";const t2=g.forwardRef((e,o)=>n.jsx(Mh,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));t2.displayName="EmailField";const n2=g.forwardRef((e,o)=>n.jsx(Mh,{ref:o,type:"number",inputMode:"numeric",...e}));n2.displayName="NumberField";const vk={sm:"sm",md:"sm",lg:"md"},xk={sm:"sm",md:"md",lg:"lg"},yk=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:v,labelWidth:y,labelDescription:x,options:w,value:k,defaultValue:_=[],onChange:C,placeholder:R="Select options…",disabled:N,readOnly:$,id:M,className:j},z)=>{const L=g.useId(),T=M??L,E=`${T}-list`,S=g.useRef(null),D=k!==void 0,[V,q]=g.useState(_),B=D?k:V,K=g.useCallback(O=>{D||q(O),C==null||C(O)},[D,C]),[ee,ae]=g.useState(!1);g.useEffect(()=>{if(!ee)return;const O=U=>{S.current&&!S.current.contains(U.target)&&ae(!1)},ne=U=>{U.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",ne),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",ne)}},[ee]);const se=O=>{if(N||$)return;const ne=B.includes(O)?B.filter(U=>U!==O):[...B,O];K(ne)},le=O=>{N||$||((O.key==="Enter"||O.key===" ")&&(O.preventDefault(),ae(ne=>!ne)),O.key==="Backspace"&&B.length>0&&!ee&&K(B.slice(0,-1)))},Z=f==="sm"?14:f==="lg"?18:16,F=vk[f],Y=xk[f],A=Object.fromEntries(w.map(O=>[O.value,O.label]));return n.jsx(Ea,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:T,layout:v,labelWidth:y,labelDescription:x,className:j,children:n.jsxs("div",{ref:S,className:ze.msContainer,children:[n.jsxs("div",{ref:z,id:T,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":E,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:ie(ze.msShell,ze[h],ze[f],ee&&ze.msOpen,N&&ze.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!$&&ae(O=>!O)},onKeyDown:le,children:[n.jsx("div",{className:ze.msBody,children:B.length===0?n.jsx("span",{className:ze.msPlaceholder,children:R}):B.map(O=>n.jsx(Jn,{size:F,variant:"subtle",dismissible:!N&&!$,onDismiss:()=>K(B.filter(ne=>ne!==O)),children:A[O]??O},O))}),n.jsx("span",{className:ie(ze.msChevron,"alloy-icon-slot",ee&&ze.msChevronOpen),children:n.jsx(Dn,{size:Z})})]}),ee&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:ze.msPanel,children:w.map(O=>{const ne=B.includes(O.value);return n.jsx(Sn,{label:O.label,size:Y,trailingAction:"checkbox",checked:ne,disabled:O.disabled,role:"option","aria-selected":ne,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{O.disabled||se(O.value)}},O.value)})})]})})});yk.displayName="MultiSelectField";const wk="_root_1249j_6",bk="_pageControls_1249j_14",kk="_pageBtn_1249j_21",Ck="_ellipsis_1249j_36",_k="_rowsGroup_1249j_51",jk="_rowsSelect_1249j_58",Sk="_countText_1249j_64",Mk="_groupLabel_1249j_74",$k="_goToGroup_1249j_84",Rk="_goToInput_1249j_91",Kn={root:wk,pageControls:bk,pageBtn:kk,ellipsis:Ck,rowsGroup:_k,rowsSelect:jk,countText:Sk,groupLabel:Mk,goToGroup:$k,goToInput:Rk};function Nk(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Lk=g.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:v,siblingCount:y=1,size:x="sm",disabled:w=!1,className:k,..._},C)=>{const[R,N]=g.useState(""),$=x,M=x,j=x==="sm"?14:16,z=Nk(e,o,y),L=g.useCallback(S=>{const D=Math.min(Math.max(1,S),o);D!==e&&i(D)},[e,o,i]),T=g.useCallback(S=>{if(S.key==="Enter"){const D=parseInt(R,10);isNaN(D)||L(D),N("")}},[R,L]),E=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return n.jsxs("nav",{ref:C,"aria-label":"Pagination",className:ie(Kn.root,k),"data-size":x,..._,children:[s&&n.jsxs("div",{className:Kn.rowsGroup,children:[n.jsx("span",{className:Kn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Kn.rowsSelect,children:n.jsx(Jg,{size:M,value:l,disabled:w,"aria-label":"Rows per page",onChange:S=>h==null?void 0:h(Number(S.target.value)),children:d.map(S=>n.jsx("option",{value:S,children:S},S))})})]}),E&&n.jsx("span",{className:Kn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Kn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(Fe,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>L(e-1),children:n.jsx(bg,{size:j})}),z.map((S,D)=>S==="ellipsis"?n.jsx("span",{className:Kn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${D}`):n.jsx(Fe,{variant:S===e?"secondary":"ghost",size:$,"aria-label":`Page ${S}`,"aria-current":S===e?"page":void 0,disabled:w,onClick:()=>L(S),className:Kn.pageBtn,children:S},S)),n.jsx(Fe,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>L(e+1),children:n.jsx(Mn,{size:j})})]}),f&&n.jsxs("div",{className:Kn.goToGroup,children:[n.jsx("span",{className:Kn.groupLabel,children:"Go to"}),n.jsx("div",{className:Kn.goToInput,children:n.jsx(n2,{size:M,value:R,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:S=>N(S.target.value),onKeyDown:T})})]})]})});Lk.displayName="Pagination";const Ak="_root_1vx33_6",Tk="_fullWidth_1vx33_18",Ek="_item_1vx33_23",Ik="_indicator_1vx33_28",Pk="_sm_1vx33_46",zk="_md_1vx33_54",Ok="_lg_1vx33_62",Dk="_itemSelected_1vx33_109",Fk="_itemIcon_1vx33_115",Bk="_itemLabel_1vx33_127",ro={root:Ak,fullWidth:Tk,item:Ek,indicator:Ik,sm:Pk,md:zk,lg:Ok,itemSelected:Dk,itemIcon:Fk,itemLabel:Bk},r2=g.createContext(null);function Hk(e){const o=g.useContext(r2);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const o2=g.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:v,onChange:y,disabled:x,name:w}=Hk("SegmentedControl.Item"),k=v===e,_=x||!!l;return n.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:_,className:ie(ro.item,k&&ro.itemSelected,i),onClick:C=>{_||y(e),d==null||d(C)},...h,children:[o&&n.jsx("span",{className:ie(ro.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:ro.itemLabel,children:s})]})});o2.displayName="SegmentedControl.Item";const a2=g.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(o),k=e!==void 0,_=k?e:x,C=g.useId(),R=g.useRef(null);g.useLayoutEffect(()=>{const $=R.current;if(!$)return;const M=$.querySelector('[aria-checked="true"]');M&&($.style.setProperty("--sc-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${M.offsetWidth}px`))},[_,s]);const N=$=>{k||w($),i==null||i($)};return n.jsx(r2.Provider,{value:{value:_,onChange:N,disabled:l,name:C},children:n.jsxs("div",{ref:$=>{R.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"radiogroup",className:ie(ro.root,ro[s],d&&ro.fullWidth,h),...v,children:[n.jsx("span",{className:ro.indicator,"aria-hidden":"true"}),f]})})});a2.displayName="SegmentedControl";Object.assign(a2,{Item:o2});const Wk="_root_fkv0x_6",Uk="_sm_fkv0x_26",qk="_md_fkv0x_33",Vk="_lg_fkv0x_40",Gk="_dot_fkv0x_49",Yk="_success_fkv0x_58",Kk="_warning_fkv0x_65",Qk="_error_fkv0x_72",Zk="_info_fkv0x_79",Xk="_neutral_fkv0x_86",Jk="_pending_fkv0x_93",hl={root:Wk,sm:Uk,md:qk,lg:Vk,dot:Gk,success:Yk,warning:Kk,error:Qk,info:Zk,neutral:Xk,pending:Jk},Pi=g.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(hl.root,hl[o],hl[e],s),...d,children:[i&&n.jsx("span",{className:hl.dot,"aria-hidden":"true"}),l]}));Pi.displayName="StatusTag";const eC="_root_1m8t5_6",tC="_underline_1m8t5_15",nC="_background_1m8t5_21",rC="_underlineIndicator_1m8t5_26",oC="_md_1m8t5_43",aC="_lg_1m8t5_44",iC="_tab_1m8t5_42",sC="_tabSelected_1m8t5_77",lC="_tabIcon_1m8t5_99",cC="_tabLabel_1m8t5_111",dC="_tabBadge_1m8t5_116",uC="_tabLabelEditable_1m8t5_123",hC="_tabLabelInput_1m8t5_128",pC="_addTab_1m8t5_147",fC="_addTabIcon_1m8t5_160",fn={root:eC,underline:tC,background:nC,underlineIndicator:rC,md:oC,lg:aC,tab:iC,tabSelected:sC,tabIcon:lC,tabLabel:cC,tabBadge:dC,tabLabelEditable:uC,tabLabelInput:hC,addTab:pC,addTabIcon:fC},i2=g.createContext(null);function s2(e){const o=g.useContext(i2);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const l2=g.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:v,children:y,...x},w)=>{const{value:k,onChange:_,disabled:C,name:R}=s2("Tabs.Tab"),N=k===e,$=C||!!s,M=typeof y=="string"?y:"",[j,z]=g.useState(d&&l),[L,T]=g.useState(M),E=g.useRef(null);g.useEffect(()=>{if(j){const B=E.current;B&&(B.focus(),B.select())}},[j]),g.useEffect(()=>{d&&l&&!j&&(T(typeof y=="string"?y:""),z(!0))},[d,l]);const S=()=>{const B=L.trim();B&&B!==M&&(h==null||h(B)),z(!1)},D=()=>{T(M),z(!1)},V=B=>{!l||$||(B.stopPropagation(),T(M),z(!0))},q=B=>{B.key==="Enter"?(B.preventDefault(),S()):B.key==="Escape"&&(B.preventDefault(),D())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":N,name:R,disabled:$,className:ie(fn.tab,N&&fn.tabSelected,v),onClick:B=>{j||($||_(e),f==null||f(B))},...x,children:[o&&n.jsx("span",{className:ie(fn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),j?n.jsx("input",{ref:E,type:"text",value:L,onChange:B=>T(B.target.value),onKeyDown:q,onBlur:S,onClick:B=>B.stopPropagation(),className:fn.tabLabelInput,"aria-label":"Tab name",size:Math.max(L.length,1)}):y!==void 0&&n.jsx("span",{className:ie(fn.tabLabel,l&&fn.tabLabelEditable),onDoubleClick:V,children:y}),i&&!j&&n.jsx("span",{className:fn.tabBadge,children:i})]})});l2.displayName="Tabs.Tab";const mC=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c2=g.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=s2("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(fn.tab,fn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(fn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(mC,{})})})});c2.displayName="Tabs.AddTab";const d2=g.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...v},y)=>{const[x,w]=g.useState(s),k=i!==void 0,_=k?i:x,C=g.useId(),R=g.useRef(null);g.useLayoutEffect(()=>{const $=R.current;if(!$||e!=="underline")return;const M=$.querySelector('[aria-selected="true"]');M&&($.style.setProperty("--tab-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${M.offsetWidth}px`))},[_,e]);const N=$=>{k||w($),l==null||l($)};return n.jsx(i2.Provider,{value:{value:_,onChange:N,disabled:d,variant:e,size:o,name:C},children:n.jsxs("div",{ref:$=>{R.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"tablist",className:ie(fn.root,fn[e],fn[o],h),...v,children:[e==="underline"&&n.jsx("span",{className:fn.underlineIndicator,"aria-hidden":"true"}),f]})})});d2.displayName="Tabs";Object.assign(d2,{Tab:l2,AddTab:c2});const gC="_selectedBorder_1ypeg_7",vC="_selectedFill_1ypeg_12",Vf={selectedBorder:gC,selectedFill:vC},xC=g.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const v=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?Vf.selectedFill:Vf.selectedBorder:void 0;return n.jsx(Fe,{ref:f,variant:o,"aria-pressed":e,className:ie(y,d),onClick:v,...h})});xC.displayName="ToggleButton";const yC="_root_mcb75_6",wC="_disabled_mcb75_13",bC="_sm_mcb75_20",kC="_md_mcb75_31",CC="_lg_mcb75_42",_C="_track_mcb75_54",jC="_trackChecked_mcb75_90",SC="_thumb_mcb75_100",MC="_labelWrap_mcb75_117",$C="_label_mcb75_117",RC="_description_mcb75_139",kr={root:yC,disabled:wC,sm:bC,md:kC,lg:CC,track:_C,trackChecked:jC,thumb:SC,labelWrap:MC,label:$C,description:RC},NC=g.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:v,value:y,className:x},w)=>{const k=g.useId(),_=f??k,C=`${_}-label`,R=e!==void 0,[N,$]=g.useState(o),M=R?e:N,j=()=>{if(s)return;const L=!M;R||$(L),i==null||i(L)},z=L=>{(L.key===" "||L.key==="Enter")&&(L.preventDefault(),j())};return n.jsxs("div",{className:ie(kr.root,kr[l],s&&kr.disabled,x),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:_,"aria-checked":M,"aria-labelledby":d?C:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:y,className:ie(kr.track,M&&kr.trackChecked),"data-checked":M||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:z,children:n.jsx("span",{className:kr.thumb})}),(d||h)&&n.jsxs("div",{className:kr.labelWrap,children:[d&&n.jsx("label",{id:C,htmlFor:_,className:kr.label,children:d}),h&&n.jsx("span",{className:kr.description,children:h})]})]})});NC.displayName="Switch";const LC="_root_104n4_5",AC="_disabled_104n4_11",TC="_sm_104n4_17",EC="_md_104n4_25",IC="_lg_104n4_33",PC="_controlWrap_104n4_41",zC="_input_104n4_50",OC="_ring_104n4_65",DC="_ringChecked_104n4_90",FC="_ringError_104n4_94",BC="_dot_104n4_104",HC="_labelWrap_104n4_112",WC="_label_104n4_112",UC="_error_104n4_130",qC="_required_104n4_132",VC="_description_104n4_137",un={root:LC,disabled:AC,sm:TC,md:EC,lg:IC,controlWrap:PC,input:zC,ring:OC,ringChecked:DC,ringError:FC,dot:BC,labelWrap:HC,label:WC,error:UC,required:qC,description:VC},GC=g.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:v,name:y,required:x,className:w},k)=>{const _=g.useId(),C=v??_;return n.jsxs("div",{className:ie(un.root,un[d],s&&un.disabled,l&&un.error,w),children:[n.jsxs("div",{className:un.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:C,name:y,value:e,checked:o,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:un.input}),n.jsx("span",{className:ie(un.ring,o&&un.ringChecked,l&&un.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:un.dot})})]}),(h||f)&&n.jsxs("div",{className:un.labelWrap,children:[h&&n.jsxs("label",{htmlFor:C,className:un.label,children:[h,x&&n.jsx("span",{className:un.required,"aria-hidden":"true",children:" *"})]}),f&&n.jsx("span",{className:un.description,children:f})]})]})});GC.displayName="Radio";const YC="_table_1ad04_8",KC="_sm_1ad04_16",QC="_row_1ad04_30",ZC="_head_1ad04_47",XC="_headLabel_1ad04_82",JC="_sortBtn_1ad04_96",e_="_sortIcon_1ad04_119",t_="_cell_1ad04_142",n_="_cellText_1ad04_175",r_="_cellStack_1ad04_203",o_="_cellStackPrimary_1ad04_210",a_="_cellStackSecondary_1ad04_221",i_="_cellActions_1ad04_233",s_="_cellControl_1ad04_240",l_="_addCell_1ad04_251",c_="_addRowCell_1ad04_264",d_="_addRowLabel_1ad04_276",Wt={table:YC,sm:KC,row:QC,head:ZC,headLabel:XC,sortBtn:JC,sortIcon:e_,cell:t_,cellText:n_,cellStack:r_,cellStackPrimary:o_,cellStackSecondary:a_,cellActions:i_,cellControl:s_,addCell:l_,addRowCell:c_,addRowLabel:d_},u2=g.createContext({addColumn:!1,addRow:!1}),h2=()=>g.useContext(u2),u_=g.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...v},y)=>{const x=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(u2.Provider,{value:x,children:n.jsx("table",{ref:y,className:ie(Wt.table,e==="sm"&&Wt.sm,h),"data-interaction":o,...v,children:f})})});u_.displayName="Table";const p2=g.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},v)=>{const y=o!==void 0;return n.jsx("th",{ref:v,className:ie(Wt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":y?"none":void 0,...f,children:y?n.jsxs("button",{type:"button",className:Wt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Wt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Dn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Wt.headLabel,children:h})})});p2.displayName="TableHead";const h_=g.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=h2(),d=s?g.Children.map(e,(h,f)=>{if(!g.isValidElement(h)||f!==0)return h;const v=g.Children.toArray(h.props.children);return g.cloneElement(h,{},[...v,n.jsx(p2,{hoverable:!0,onClick:l,className:Wt.addCell,"aria-label":"Add column",children:n.jsx(Aa,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});h_.displayName="TableHeader";const f2=g.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Wt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));f2.displayName="TableRow";const Gu=g.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>n.jsx("td",{ref:f,className:ie(Wt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Gu.displayName="TableCell";const p_=g.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=h2(),h=s?g.Children.map(e,f=>{if(!g.isValidElement(f))return f;const v=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...v,n.jsx(Gu,{"aria-hidden":"true",className:Wt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(f2,{hoverable:!1,children:n.jsx(Gu,{colSpan:999,onClick:d,className:Wt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Wt.addRowLabel,children:[n.jsx(Aa,{size:14,strokeWidth:2}),"Add row"]})})})]})});p_.displayName="TableBody";const f_=g.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(Wt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));f_.displayName="CellText";const m_=g.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Wt.cellStack,i),...s,children:[n.jsx("span",{className:Wt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Wt.cellStackSecondary,children:o})]}));m_.displayName="CellStack";const g_=g.forwardRef(({size:e="sm",...o},i)=>n.jsx(Jn,{ref:i,size:e,...o}));g_.displayName="CellTag";const v_=g.forwardRef(({size:e="sm",...o},i)=>n.jsx(Pi,{ref:i,size:e,...o}));v_.displayName="CellStatusTag";const x_=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Wt.cellActions,e),...i,children:o}));x_.displayName="CellActions";const y_=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Wt.cellControl,e),...i,children:o}));y_.displayName="CellControl";const w_="_root_1afcs_8",b_="_secondary_1afcs_23",k_="_header_1afcs_28",C_="_headerText_1afcs_36",__="_title_1afcs_43",j_="_subtitle_1afcs_52",S_="_action_1afcs_61",M_="_hero_1afcs_66",$_="_heroValue_1afcs_74",R_="_heroCaption_1afcs_83",N_="_heroChange_1afcs_89",L_="_body_1afcs_95",A_="_legend_1afcs_103",kn={root:w_,secondary:b_,header:k_,headerText:C_,title:__,subtitle:j_,action:S_,hero:M_,heroValue:$_,heroCaption:R_,heroChange:N_,body:L_,legend:A_},T_=g.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:v,className:y,...x},w)=>n.jsxs("div",{ref:w,className:ie(kn.root,f&&kn.secondary,y),...x,children:[n.jsxs("div",{className:kn.header,children:[n.jsxs("div",{className:kn.headerText,children:[n.jsx("h3",{className:kn.title,children:e}),o&&n.jsx("p",{className:kn.subtitle,children:o})]}),i&&n.jsx("div",{className:kn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:kn.hero,children:[s!==void 0&&n.jsx("span",{className:kn.heroValue,children:s}),l&&n.jsx("span",{className:kn.heroChange,children:l}),d&&n.jsx("span",{className:kn.heroCaption,children:d})]}),n.jsx("div",{className:kn.body,children:v}),h&&n.jsx("div",{className:kn.legend,children:h})]}));T_.displayName="ChartCard";const E_="_root_je8nq_7",I_="_item_je8nq_17",P_="_swatch_je8nq_23",z_="_label_je8nq_29",O_="_bookend_je8nq_33",ga={root:E_,item:I_,swatch:P_,label:z_,bookend:O_},m2=g.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(ga.root,d),...h,children:[o&&n.jsx("span",{className:ga.bookend,children:o}),e.map((v,y)=>{const x=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return n.jsxs("span",{className:ga.item,children:[n.jsx("span",{className:ga.swatch,style:x,"aria-hidden":"true"}),v.label!==void 0&&n.jsx("span",{className:ga.label,children:v.label})]},y)}),i&&n.jsx("span",{className:ga.bookend,children:i})]}));m2.displayName="ChartLegend";const D_="_root_igkx4_5",F_="_svgWrap_igkx4_13",B_="_svg_igkx4_13",H_="_gridLine_igkx4_23",W_="_axisLabel_igkx4_28",U_="_legendWrap_igkx4_43",q_="_legendItem_igkx4_51",V_="_legendDot_igkx4_57",G_="_legendLabel_igkx4_64",Y_="_tooltip_igkx4_71",K_="_tooltipLabel_igkx4_85",Q_="_tooltipRow_igkx4_95",Z_="_tooltipDot_igkx4_101",X_="_tooltipSeries_igkx4_108",J_="_tooltipValue_igkx4_115",qe={root:D_,svgWrap:F_,svg:B_,gridLine:H_,axisLabel:W_,legendWrap:U_,legendItem:q_,legendDot:V_,legendLabel:G_,tooltip:Y_,tooltipLabel:K_,tooltipRow:Q_,tooltipDot:Z_,tooltipSeries:X_,tooltipValue:J_},ej=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function gu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function va(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const tj=g.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:v,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:_,className:C,...R},N)=>{var H,P,oe,pe;const $=v&&v.length>0?v:ej,M=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,z]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),L=g.useRef(null),[T,E]=g.useState(540);g.useEffect(()=>{const de=L.current;if(!de)return;const ve=new ResizeObserver(Se=>{var Ie;const $e=(Ie=Se[0])==null?void 0:Ie.contentRect.width;$e>0&&E(Math.floor($e))});ve.observe(de);const be=Math.floor(de.getBoundingClientRect().width);return be>0&&E(be),()=>ve.disconnect()},[]);const S=44,D=0,V=20,q=20,B=T,K=s,ee=B-S-D,ae=K-V-q,se=5,le=e.map((de,ve)=>de.color??$[ve%$.length]);let Z=0;i==="stacked"?o.forEach((de,ve)=>{const be=e.reduce((Se,$e)=>Se+($e.data[ve]??0),0);be>Z&&(Z=be)}):i==="horizontal"?Z=Math.max(...((H=e[0])==null?void 0:H.data)??[0]):e.forEach(de=>de.data.forEach(ve=>{ve>Z&&(Z=ve)}));const F=gu(Z),Y=Array.from({length:se+1},(de,ve)=>F*(ve/se)).reverse(),A=de=>q+ae-de/F*ae,O=ee/o.length,ne=3,U=i==="grouped"?Math.max(4,(O-ne*(e.length+1))/e.length):O,J=()=>z(de=>({...de,visible:!1})),ce=g.useCallback(de=>{const ve=de.currentTarget.getBoundingClientRect(),be=de.clientX-ve.left,Se=Math.floor((be-S)/O);if(Se<0||Se>=o.length){J();return}const $e=e.map((Ie,Ue)=>({color:le[Ue],series:Ie.label,value:Ie.data[Se]??0}));z({visible:!0,x:de.clientX+12,y:de.clientY-8,label:o[Se],items:$e})},[e,o,O,le,S]);if(i==="gradient"){const de=((P=e[0])==null?void 0:P.data)??[],ve=((oe=e[0])==null?void 0:oe.label)??"",be=44,Se=0,$e=20,Ie=20,Ue=Math.max(B-be-Se,1),De=K-$e-Ie,Ae=Math.max(0,...de),Ze=Ae>0?gu(Ae):10,Xe=5,St=Array.from({length:Xe+1},(Te,st)=>Ze*st/Xe),Be=Te=>$e+De-Te/Ze*De,xe=Ue/Math.max(1,de.length),Le=Te=>be+xe*Te,ot=Te=>be+xe*(Te+1),He=Te=>be+xe*(Te+.5),Ye=de.length===0?"":de.map((Te,st)=>{const wt=Be(Te);return`M ${Le(st)} ${wt} L ${ot(st)} ${wt}`}).join(" "),gt=[];de.forEach((Te,st)=>{if(Te<=0)return;const wt=Be(Te);gt.push({x:Le(st),y:wt,width:Math.max(ot(st)-Le(st),0),height:$e+De-wt})});const $n=Math.max(1,Math.ceil(45/xe)),po=o.length-1,fo=w??(Te=>`${va(Te)}${h}`);return n.jsxs("div",{ref:N,className:ie(qe.root,C),...R,children:[n.jsx("div",{ref:L,className:qe.svgWrap,children:n.jsxs("svg",{width:B,height:K,viewBox:`0 0 ${B} ${K}`,className:qe.svg,onMouseLeave:J,onMouseMove:Te=>{const st=Te.currentTarget.getBoundingClientRect(),wt=Te.clientX-st.left,Mt=Math.floor((wt-be)/xe);if(Mt<0||Mt>=de.length){J();return}z({visible:!0,x:Te.clientX+12,y:Te.clientY-8,label:o[Mt]??"",items:[{color:x,series:ve,value:de[Mt]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${M}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y}),n.jsx("stop",{offset:"100%",stopColor:x})]}),n.jsxs("linearGradient",{id:`${M}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),St.map((Te,st)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:B-Se,y1:Be(Te),y2:Be(Te),className:qe.gridLine}),n.jsxs("text",{x:0,y:Be(Te)-6,className:qe.axisLabel,textAnchor:"start",children:[va(Te),h]})]},`t-${st}`)),gt.map((Te,st)=>n.jsx("rect",{x:Te.x,y:Te.y,width:Te.width,height:Te.height,fill:`url(#${M}-fill)`},`b-${st}`)),Ye&&n.jsx("path",{d:Ye,fill:"none",stroke:`url(#${M}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var cr;const Te=(cr=L.current)==null?void 0:cr.getBoundingClientRect();if(!Te)return null;const st=j.x-12-Te.left,wt=Math.floor((st-be)/xe);if(wt<0||wt>=de.length)return null;const Mt=de[wt]??0;return Mt<=0?null:n.jsx("circle",{cx:He(wt),cy:Be(Mt),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Te,st)=>{const wt=st===0,Mt=st===po;if(!(wt||Mt)&&st%$n!==0)return null;const Jt=wt?be:Mt?B-Se:He(st),Rr=wt?"start":Mt?"end":"middle";return n.jsx("text",{x:Jt,y:K-Ie+18,className:qe.axisLabel,textAnchor:Rr,children:Te},`xl-${st}`)})]})}),j.visible&&j.items.length>0&&n.jsxs("div",{className:qe.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:qe.tooltipLabel,children:j.label}),j.items.map(Te=>n.jsxs("div",{className:qe.tooltipRow,children:[n.jsx("span",{className:qe.tooltipDot,style:{background:Te.color}}),n.jsx("span",{className:qe.tooltipSeries,children:Te.series}),n.jsx("span",{className:qe.tooltipValue,children:fo(Te.value)})]},Te.series))]})]})}if(i==="horizontal"){const de=((pe=e[0])==null?void 0:pe.data)??[],ve=gu(Math.max(...de,1)),be=28,Se=10,$e=120,Ue=B-$e-44,De=o.length*(be+Se)+Se;return n.jsxs("div",{ref:N,className:ie(qe.root,C),...R,children:[n.jsx("div",{ref:L,className:qe.svgWrap,children:n.jsx("svg",{width:B,height:De,viewBox:`0 0 ${B} ${De}`,className:qe.svg,onMouseLeave:J,onMouseMove:Ae=>{var Be;const Ze=Ae.currentTarget.getBoundingClientRect(),Xe=Ae.clientY-Ze.top,St=Math.floor(Xe/(be+Se));if(St<0||St>=o.length){J();return}z({visible:!0,x:Ae.clientX+12,y:Ae.clientY-8,label:o[St],items:[{color:le[0],series:((Be=e[0])==null?void 0:Be.label)??"",value:de[St]??0}]})},children:o.map((Ae,Ze)=>{const Xe=Se+Ze*(be+Se),St=de[Ze]??0,Be=St/ve*Ue;return n.jsxs("g",{children:[n.jsx("text",{x:$e-8,y:Xe+be/2+4,className:qe.axisLabel,textAnchor:"end",children:Ae}),n.jsx("rect",{x:$e,y:Xe,width:Be,height:be,rx:f,fill:le[0]}),n.jsxs("text",{x:$e+Be+6,y:Xe+be/2+4,className:qe.axisLabel,textAnchor:"start",children:[va(St),h]})]},Ze)})})}),j.visible&&n.jsxs("div",{className:qe.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:qe.tooltipLabel,children:j.label}),j.items.map(Ae=>n.jsxs("div",{className:qe.tooltipRow,children:[n.jsx("span",{className:qe.tooltipDot,style:{background:Ae.color}}),n.jsx("span",{className:qe.tooltipSeries,children:Ae.series}),n.jsxs("span",{className:qe.tooltipValue,children:[va(Ae.value),h]})]},Ae.series))]})]})}return n.jsxs("div",{ref:N,className:ie(qe.root,C),...R,children:[n.jsx("div",{ref:L,className:qe.svgWrap,children:n.jsxs("svg",{width:B,height:K,viewBox:`0 0 ${B} ${K}`,className:qe.svg,onMouseMove:ce,onMouseLeave:J,children:[n.jsx("defs",{children:le.flatMap((de,ve)=>[n.jsxs("linearGradient",{id:`${M}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`soft-${ve}`),n.jsxs("linearGradient",{id:`${M}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`strong-${ve}`)])}),Y.map(de=>{const ve=A(de);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ve,x2:B-D,y2:ve,className:qe.gridLine}),n.jsxs("text",{x:0,y:ve-6,className:qe.axisLabel,textAnchor:"start",children:[va(de),h]})]},de)}),o.map((de,ve)=>{const be=S+ve*O;if(i==="stacked"){let Ie=0;const Ue=e.map((Be,xe)=>{const Le=Be.data[ve]??0,ot=Le/F*ae,He=A(Ie+Le);return Ie+=Le,{si:xe,value:Le,barH:ot,y:He}}),De=be+(O-U)/2,Ae=Ue.filter(Be=>Be.value>0),Ze=Ae.length>0?Ae[0].si:-1,Xe=Ae.length>0?Ae[Ae.length-1]:null,St=_??(Xe?le[Xe.si]:"transparent");return n.jsxs("g",{children:[Ue.map(({si:Be,value:xe,barH:Le,y:ot})=>{if(xe<=0)return null;if(k==="mono-scale"){const He=Be===Ze;return n.jsx("rect",{x:De,y:ot,width:U,height:Le,fill:He?`url(#${M}-fill-strong-${Be})`:le[Be]},`fill-${Be}`)}return n.jsx("rect",{x:De,y:ot,width:U,height:Le,fill:`url(#${M}-fill-${Be})`},`fill-${Be}`)}),k==="mono-scale"?Xe&&n.jsx("line",{x1:De,x2:De+U,y1:Xe.y,y2:Xe.y,stroke:St,strokeWidth:2,strokeLinecap:"butt"}):Ue.map(({si:Be,value:xe,y:Le})=>xe>0?n.jsx("line",{x1:De,x2:De+U,y1:Le,y2:Le,stroke:le[Be],strokeWidth:2,strokeLinecap:"butt"},`cap-${Be}`):null)]},ve)}const Se=e.length*U+(e.length-1)*ne,$e=be+(O-Se)/2;return n.jsx("g",{children:e.map((Ie,Ue)=>{const De=Ie.data[ve]??0;if(De<=0)return null;const Ae=De/F*ae,Ze=$e+Ue*(U+ne),Xe=A(De);return n.jsxs("g",{children:[n.jsx("rect",{x:Ze,y:Xe,width:U,height:Ae,fill:`url(#${M}-fill-${Ue})`}),n.jsx("line",{x1:Ze,x2:Ze+U,y1:Xe,y2:Xe,stroke:le[Ue],strokeWidth:2,strokeLinecap:"butt"})]},Ue)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/O)),be=o.length-1;return o.map((Se,$e)=>{const Ie=$e===0,Ue=$e===be;if(!(Ie||Ue)&&$e%ve!==0)return null;const Ae=Ie?S:Ue?B-D:S+O*($e+.5),Ze=Ie?"start":Ue?"end":"middle";return n.jsx("text",{x:Ae,y:K-V+18,className:qe.axisLabel,textAnchor:Ze,children:Se},`xl-${$e}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:qe.legendWrap,children:e.map((de,ve)=>n.jsxs("div",{className:qe.legendItem,children:[n.jsx("span",{className:qe.legendDot,style:{background:le[ve]}}),n.jsx("span",{className:qe.legendLabel,children:de.label})]},de.label))}),j.visible&&n.jsxs("div",{className:qe.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:qe.tooltipLabel,children:j.label}),j.items.map(de=>n.jsxs("div",{className:qe.tooltipRow,children:[n.jsx("span",{className:qe.tooltipDot,style:{background:de.color}}),n.jsx("span",{className:qe.tooltipSeries,children:de.series}),n.jsxs("span",{className:qe.tooltipValue,children:[va(de.value),h]})]},de.series))]})]})});tj.displayName="BarChart";const nj="_root_1crij_5",rj="_svgWrap_1crij_13",oj="_svg_1crij_13",aj="_gridLine_1crij_23",ij="_axisLabelY_1crij_35 _axisLabel_1crij_28",sj="_axisLabelX_1crij_39 _axisLabel_1crij_28",lj="_legendWrap_1crij_51",cj="_tooltip_1crij_76",dj="_tooltipLabel_1crij_95",uj="_tooltipRow_1crij_105",hj="_tooltipDot_1crij_111",pj="_tooltipSeries_1crij_118",fj="_tooltipValue_1crij_125",Cn={root:nj,svgWrap:rj,svg:oj,gridLine:aj,axisLabelY:ij,axisLabelX:sj,legendWrap:lj,tooltip:cj,tooltipLabel:dj,tooltipRow:uj,tooltipDot:hj,tooltipSeries:pj,tooltipValue:fj};function mj(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Gf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function gj(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],v=(h-l)*o;i+=` C ${l+v} ${d}, ${h-v} ${f}, ${h} ${f}`}return i}const vj=g.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:v=5,className:y,...x},w)=>{const[k,_]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),C=`line-grad-${Math.random().toString(36).slice(2,9)}`,R=g.useRef(null),[N,$]=g.useState(540);g.useEffect(()=>{const F=R.current;if(!F)return;const Y=new ResizeObserver(O=>{var U;const ne=(U=O[0])==null?void 0:U.contentRect.width;ne>0&&$(Math.floor(ne))});Y.observe(F);const A=Math.floor(F.getBoundingClientRect().width);return A>0&&$(A),()=>Y.disconnect()},[]);const M=44,j=20,z=20,L=N,T=i,E=L-M,S=T-j-z,D=`url(#${C}-stroke)`,V=F=>F.color??D,q=e.flatMap(F=>F.data),B=mj(Math.max(...q,1)),K=Array.from({length:v+1},(F,Y)=>B*(Y/v)).reverse(),ee=F=>z+S-F/B*S,ae=F=>o.length>1?M+F/(o.length-1)*E:M+E/2,se=F=>F.map((Y,A)=>[ae(A),ee(Y)]),le=()=>_(F=>({...F,visible:!1})),Z=g.useCallback(F=>{const Y=F.currentTarget.getBoundingClientRect(),O=F.clientX-Y.left-M,ne=E/Math.max(o.length-1,1),U=Math.round(O/ne),J=Math.max(0,Math.min(U,o.length-1)),ce=e.map(H=>({color:H.color??h,series:H.label,value:H.data[J]??0}));_({visible:!0,index:J,x:F.clientX+12,y:F.clientY-8,label:o[J],items:ce})},[e,o,h,E,M]);return n.jsxs("div",{ref:w,className:ie(Cn.root,y),...x,children:[n.jsx("div",{ref:R,className:Cn.svgWrap,children:n.jsxs("svg",{width:L,height:T,viewBox:`0 0 ${L} ${T}`,className:Cn.svg,onMouseMove:Z,onMouseLeave:le,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${C}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${C}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${C}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${C}-clip`,children:n.jsx("rect",{x:M,y:z,width:E,height:S,rx:6,ry:6})})]}),K.map(F=>{const Y=ee(F);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:Y,x2:L,y2:Y,className:Cn.gridLine}),n.jsxs("text",{x:0,y:Y-6,className:Cn.axisLabelY,textAnchor:"start",children:[Gf(F),f]})]},F)}),n.jsx("g",{clipPath:`url(#${C}-clip)`,children:e.map((F,Y)=>{const A=se(F.data),O=gj(A);return n.jsx("path",{d:O,fill:"none",stroke:V(F),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},Y)})}),(()=>{const F=k.index>=0?k.index:0,Y=ae(F),A=k.visible&&k.index>=0,O="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:A?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${Y}px)`,transition:O},children:[n.jsx("line",{x1:0,x2:0,y1:z,y2:z+S,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((ne,U)=>{const J=ne.data[F]??0,ce=ee(J),H=ne.color??h;return n.jsx("g",{style:{transform:`translateY(${ce}px)`,transition:O},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:H,filter:`url(#${C}-pin-shadow)`})},U)})]})})})(),(()=>{const Y=o.length>1?E/(o.length-1):E,A=Math.max(1,Math.ceil(45/Math.max(Y,1))),O=o.length-1;return o.map((ne,U)=>{const J=U===0,ce=U===O;if(!(J||ce)&&U%A!==0)return null;const P=J?M:ce?L:ae(U),oe=J?"start":ce?"end":"middle";return n.jsx("text",{x:P,y:T-j+14,className:Cn.axisLabelX,textAnchor:oe,children:ne},ne)})})()]})}),l&&e.length>0&&n.jsx("div",{className:Cn.legendWrap,children:n.jsx(m2,{variant:"line",items:e.map(F=>({color:F.color??h,label:F.label}))})}),k.visible&&n.jsxs("div",{className:Cn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:Cn.tooltipLabel,children:k.label}),k.items.map(F=>n.jsxs("div",{className:Cn.tooltipRow,children:[n.jsx("span",{className:Cn.tooltipDot,style:{background:F.color}}),n.jsx("span",{className:Cn.tooltipSeries,children:F.series}),n.jsxs("span",{className:Cn.tooltipValue,children:[Gf(F.value),f]})]},F.series))]})]})});vj.displayName="LineChart";const xj="_root_3tq2n_5",yj="_chartWrap_3tq2n_14",wj="_svg_3tq2n_18",bj="_centerText_3tq2n_23",kj="_statLegend_3tq2n_31",Cj="_statItem_3tq2n_37",_j="_statBar_3tq2n_44",jj="_statText_3tq2n_50",Sj="_statValue_3tq2n_56",Mj="_statLabel_3tq2n_65",$j="_listLegend_3tq2n_72",Rj="_legendItem_3tq2n_79",Nj="_legendDot_3tq2n_85",Lj="_legendLabel_3tq2n_92",Aj="_legendValue_3tq2n_99",Tj="_tooltip_3tq2n_107",Ej="_tooltipLabel_3tq2n_118",Ij="_tooltipValue_3tq2n_124",Ft={root:xj,chartWrap:yj,svg:wj,centerText:bj,statLegend:kj,statItem:Cj,statBar:_j,statText:jj,statValue:Sj,statLabel:Mj,listLegend:$j,legendItem:Rj,legendDot:Nj,legendLabel:Lj,legendValue:Aj,tooltip:Tj,tooltipLabel:Ej,tooltipValue:Ij},Yf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Pj=g.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((L,T)=>L.color??Yf[T%Yf.length]),_=e.reduce((L,T)=>L+T.value,0),C=i/2,R=i/2,N=i*.15,$=(i-N)/2-2,M=2*Math.PI*$;let j=-M/4;const z=e.map((L,T)=>{const S=(_>0?L.value/_:0)*M,D=`${S} ${M-S}`,V=-j;return j+=S,{dashArray:D,dashOffset:V,color:k[T],...L}});return n.jsxs("div",{ref:y,className:ie(Ft.root,f),...v,children:[n.jsx("div",{className:Ft.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Ft.svg,children:[n.jsx("circle",{cx:C,cy:R,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),z.map((L,T)=>n.jsx("circle",{cx:C,cy:R,r:$,fill:"none",stroke:L.color,strokeWidth:N,strokeDasharray:L.dashArray,strokeDashoffset:L.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const S=_>0?Math.round(L.value/_*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:L.label,value:`${S}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},T)),h&&o>0&&n.jsx("text",{x:C,y:R+6,textAnchor:"middle",className:Ft.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Ft.statLegend,children:e.map((L,T)=>{const E=_>0?Math.round(L.value/_*100):0;return n.jsxs("div",{className:Ft.statItem,children:[n.jsx("span",{className:Ft.statBar,style:{background:k[T]}}),n.jsxs("div",{className:Ft.statText,children:[n.jsxs("span",{className:Ft.statValue,children:[E,d]}),n.jsx("span",{className:Ft.statLabel,children:L.label})]})]},L.label)})}),s&&l==="list"&&n.jsx("div",{className:Ft.listLegend,children:e.map((L,T)=>{const E=_>0?Math.round(L.value/_*100):0;return n.jsxs("div",{className:Ft.legendItem,children:[n.jsx("span",{className:Ft.legendDot,style:{background:k[T]}}),n.jsx("span",{className:Ft.legendLabel,children:L.label}),n.jsxs("span",{className:Ft.legendValue,children:[E,d]})]},L.label)})}),x.visible&&n.jsxs("div",{className:Ft.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("div",{className:Ft.tooltipLabel,children:x.label}),n.jsx("div",{className:Ft.tooltipValue,children:x.value})]})]})});Pj.displayName="DonutChart";const zj="_root_bqpf6_5",Oj="_svgWrap_bqpf6_10",Dj="_svg_bqpf6_10",Fj="_axisLabel_bqpf6_19",Bj="_tooltip_bqpf6_25",xa={root:zj,svgWrap:Oj,svg:Dj,axisLabel:Fj,tooltip:Bj};function Hj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Wj=g.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=Hj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[_,C]=g.useState(540);g.useEffect(()=>{const T=k.current;if(!T)return;const E=new ResizeObserver(D=>{var q;const V=(q=D[0])==null?void 0:q.contentRect.width;V>0&&C(Math.floor(V))});E.observe(T);const S=Math.floor(T.getBoundingClientRect().width);return S>0&&C(S),()=>E.disconnect()},[]);const R=32,N=16,$=_,M=$-R-d,j=Math.max(4,(M-(i.length-1)*d)/i.length),z=o.length*(N+d)+d+24,L=new Map;return e.forEach(T=>L.set(`${T.row}__${T.col}`,T)),n.jsxs("div",{ref:y,className:ie(xa.root,f),...v,children:[n.jsx("div",{ref:k,className:xa.svgWrap,children:n.jsxs("svg",{width:$,height:z,viewBox:`0 0 ${$} ${z}`,className:xa.svg,onMouseLeave:()=>w(T=>({...T,visible:!1})),children:[i.map((T,E)=>{const S=R+d+E*(j+d)+j/2;return n.jsx("text",{x:S,y:12,className:xa.axisLabel,textAnchor:"middle",children:T},T)}),o.map((T,E)=>{const S=24+E*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:R-4,y:S+N/2+4,className:xa.axisLabel,textAnchor:"end",children:T}),i.map((D,V)=>{const q=L.get(`${T}__${D}`),B=(q==null?void 0:q.value)??0,K=s(B),ee=R+d+V*(j+d);return n.jsx("rect",{x:ee,y:S,width:j,height:N,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const se=(q==null?void 0:q.label)??`${T} / ${D}: ${Math.round(B*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:se})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},D)})]},T)})]})}),x.visible&&n.jsx("div",{className:xa.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});Wj.displayName="HeatMap";const Uj="_root_18572_6",qj="_gridWrap_18572_14",Vj="_grid_18572_14",Gj="_cell_18572_27",Yj="_legend_18572_33",Kj="_legendSquare_18572_43",Qj="_tooltip_18572_49",Jr={root:Uj,gridWrap:qj,grid:Vj,cell:Gj,legend:Yj,legendSquare:Kj,tooltip:Qj},Zj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Xj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Jj=g.forwardRef(({days:e,levelColors:o=Zj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:v,ariaLabel:y,className:x,...w},k)=>{const[_,C]=g.useState({visible:!1,x:0,y:0,content:""}),R=f??Math.max(1,...e.map(j=>j.count)),N=[];for(let j=0;j<e.length;j+=7)N.push(e.slice(j,j+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},M=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Jr.root,x),...w,children:[n.jsx("div",{className:Jr.gridWrap,children:n.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${R} on the busiest day`,className:Jr.grid,style:$,onMouseLeave:()=>C(j=>({...j,visible:!1})),children:N.map((j,z)=>Array.from({length:7},(L,T)=>{const E=j[T];if(!E)return n.jsx("span",{className:Jr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${z}-${T}`);const S=Xj(E.count,R),D=v?v(E,S):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Jr.cell,style:{width:M,height:i,borderRadius:l,background:o[S]},onMouseMove:V=>C({visible:!0,x:V.clientX,y:V.clientY,content:D}),onMouseLeave:()=>C(V=>({...V,visible:!1}))},`${z}-${T}`)}))})}),h&&n.jsxs("div",{className:Jr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>n.jsx("span",{className:Jr.legendSquare,style:{background:o[j],borderRadius:l}},j)),n.jsx("span",{children:"More"})]}),_.visible&&n.jsx("div",{className:Jr.tooltip,style:{left:_.x,top:_.y},children:_.content})]})});Jj.displayName="ActivityHeatMap";const eS="_root_14edh_5",tS="_track_14edh_17",nS="_segment_14edh_28",rS="_legend_14edh_49",oS="_legendRow_14edh_58",aS="_legendDot_14edh_68",iS="_legendLabel_14edh_74",sS="_legendValue_14edh_78",lS="_tooltip_14edh_84",cS="_tooltipLabel_14edh_100",dS="_tooltipValueRow_14edh_105",uS="_tooltipDot_14edh_114",Pn={root:eS,track:tS,segment:nS,legend:rS,legendRow:oS,legendDot:aS,legendLabel:iS,legendValue:sS,tooltip:lS,tooltipLabel:cS,tooltipValueRow:dS,tooltipDot:uS},hS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],ya={r:140,g:79,b:226},vu={r:68,g:108,b:255};function Kf(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(ya.r+(vu.r-ya.r)*o),s=Math.round(ya.g+(vu.g-ya.g)*o),l=Math.round(ya.b+(vu.b-ya.b)*o);return`rgb(${i}, ${s}, ${l})`}const pS=g.forwardRef(({segments:e,colors:o=hS,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,$)=>N+Math.max(0,$.value),0);let _=0;const C=e.map((N,$)=>{const M=Math.max(0,N.value),j=k>0?M/k*100:0,z=k>0?_/k*100:0;_+=M;const L=k>0?_/k*100:0,T=N.color??o[$%o.length],E=d?!0:N.emphasized??$===0;return{...N,pct:j,startPct:z,endPct:L,color:T,emphasized:E}}),R=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:y,className:ie(Pn.root,f),...v,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Pn.track,style:R,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:C.map(N=>{const $=i?`linear-gradient(to right, ${Kf(N.startPct)}, ${Kf(N.endPct)})`:N.color;return n.jsx("span",{className:Pn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:$,"--ratio-hover-bg":N.color},onMouseMove:M=>w({visible:!0,x:M.clientX,y:M.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:Pn.legend,children:C.map(N=>n.jsxs("li",{className:Pn.legendRow,children:[n.jsx("span",{className:Pn.legendDot,style:{background:N.color}}),n.jsx("span",{className:Pn.legendLabel,children:N.label}),n.jsx("span",{className:Pn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&n.jsxs("div",{className:Pn.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("span",{className:Pn.tooltipLabel,children:x.label}),n.jsxs("span",{className:Pn.tooltipValueRow,children:[n.jsx("span",{className:Pn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});pS.displayName="RatioBar";const fS="_track_1wmly_6",mS="_fill_1wmly_12",Qf={track:fS,fill:mS},gS=g.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:v,className:y,style:x,...w},k)=>{const _=d+h,C=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${_}px
    )`,R=Math.max(0,Math.min(o,e)),N=o>0?R/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":R,className:ie(Qf.track,y),style:{height:f,background:`${C}, ${s}`,...x},...w,children:n.jsx("div",{className:Qf.fill,style:{width:`${N}%`,background:`${C}, ${i}`}})})});gS.displayName="StripedBar";const vS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],xS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Zf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}Zf(vS),Zf(xS);var pt="-ms-",Ai="-moz-",rt="-webkit-",g2="comm",lc="rule",$h="decl",yS="@import",wS="@namespace",v2="@keyframes",bS="@layer",x2=Math.abs,Rh=String.fromCharCode,Yu=Object.assign;function kS(e,o){return It(e,0)^45?(((o<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}function y2(e){return e.trim()}function _r(e,o){return(e=o.exec(e))?e[0]:e}function We(e,o,i){return e.replace(o,i)}function Ml(e,o,i){return e.indexOf(o,i)}function It(e,o){return e.charCodeAt(o)|0}function Fo(e,o,i){return e.slice(o,i)}function Qn(e){return e.length}function w2(e){return e.length}function $i(e,o){return o.push(e),e}function CS(e,o){return e.map(o).join("")}function Xf(e,o){return e.filter(function(i){return!_r(i,o)})}var cc=1,Ma=1,b2=0,On=0,At=0,Ia="";function dc(e,o,i,s,l,d,h,f){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:cc,column:Ma,length:h,return:"",siblings:f}}function eo(e,o){return Yu(dc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function wa(e){for(;e.root;)e=eo(e.root,{children:[e]});$i(e,e.siblings)}function _S(){return At}function jS(){return At=On>0?It(Ia,--On):0,Ma--,At===10&&(Ma=1,cc--),At}function er(){return At=On<b2?It(Ia,On++):0,Ma++,At===10&&(Ma=1,cc++),At}function oo(){return It(Ia,On)}function $l(){return On}function uc(e,o){return Fo(Ia,e,o)}function zi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SS(e){return cc=Ma=1,b2=Qn(Ia=e),On=0,[]}function MS(e){return Ia="",e}function xu(e){return y2(uc(On-1,Ku(e===91?e+2:e===40?e+1:e)))}function $S(e){for(;(At=oo())&&At<33;)er();return zi(e)>2||zi(At)>3?"":" "}function RS(e,o){for(;--o&&er()&&!(At<48||At>102||At>57&&At<65||At>70&&At<97););return uc(e,$l()+(o<6&&oo()==32&&er()==32))}function Ku(e){for(;er();)switch(At){case e:return On;case 34:case 39:e!==34&&e!==39&&Ku(At);break;case 40:e===41&&Ku(e);break;case 92:er();break}return On}function NS(e,o){for(;er()&&e+At!==57;)if(e+At===84&&oo()===47)break;return"/*"+uc(o,On-1)+"*"+Rh(e===47?e:er())}function LS(e){for(;!zi(oo());)er();return uc(e,On)}function AS(e){return MS(Rl("",null,null,null,[""],e=SS(e),0,[0],e))}function Rl(e,o,i,s,l,d,h,f,v){for(var y=0,x=0,w=h,k=0,_=0,C=0,R=1,N=1,$=1,M=0,j="",z=l,L=d,T=s,E=j;N;)switch(C=M,M=er()){case 40:if(C!=108&&It(E,w-1)==58){Ml(E+=We(xu(M),"&","&\f"),"&\f",x2(y?f[y-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:E+=xu(M);break;case 9:case 10:case 13:case 32:E+=$S(C);break;case 92:E+=RS($l()-1,7);continue;case 47:switch(oo()){case 42:case 47:$i(TS(NS(er(),$l()),o,i,v),v),(zi(C||1)==5||zi(oo()||1)==5)&&Qn(E)&&Fo(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*R:f[y++]=Qn(E)*$;case 125*R:case 59:case 0:switch(M){case 0:case 125:N=0;case 59+x:$==-1&&(E=We(E,/\f/g,"")),_>0&&(Qn(E)-w||R===0&&C===47)&&$i(_>32?em(E+";",s,i,w-1,v):em(We(E," ","")+";",s,i,w-2,v),v);break;case 59:E+=";";default:if($i(T=Jf(E,o,i,y,x,l,f,j,z=[],L=[],w,d),d),M===123)if(x===0)Rl(E,o,T,T,z,d,w,f,L);else{switch(k){case 99:if(It(E,3)===110)break;case 108:if(It(E,2)===97)break;default:x=0;case 100:case 109:case 115:}x?Rl(e,T,T,s&&$i(Jf(e,T,T,0,0,l,f,j,l,z=[],w,L),L),l,L,w,f,s?z:L):Rl(E,T,T,T,[""],L,0,f,L)}}y=x=_=0,R=$=1,j=E="",w=h;break;case 58:w=1+Qn(E),_=C;default:if(R<1){if(M==123)--R;else if(M==125&&R++==0&&jS()==125)continue}switch(E+=Rh(M),M*R){case 38:$=x>0?1:(E+="\f",-1);break;case 44:f[y++]=(Qn(E)-1)*$,$=1;break;case 64:oo()===45&&(E+=xu(er())),k=oo(),x=w=Qn(j=E+=LS($l())),M++;break;case 45:C===45&&Qn(E)==2&&(R=0)}}return d}function Jf(e,o,i,s,l,d,h,f,v,y,x,w){for(var k=l-1,_=l===0?d:[""],C=w2(_),R=0,N=0,$=0;R<s;++R)for(var M=0,j=Fo(e,k+1,k=x2(N=h[R])),z=e;M<C;++M)(z=y2(N>0?_[M]+" "+j:We(j,/&\f/g,_[M])))&&(v[$++]=z);return dc(e,o,i,l===0?lc:f,v,y,x,w)}function TS(e,o,i,s){return dc(e,o,i,g2,Rh(_S()),Fo(e,2,-2),0,s)}function em(e,o,i,s,l){return dc(e,o,i,$h,Fo(e,0,s),Fo(e,s+1,-1),s,l)}function k2(e,o,i){switch(kS(e,o)){case 5103:return rt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return rt+e+e;case 4855:return rt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+e+Ai+e+pt+e+e;case 5936:switch(It(e,o+11)){case 114:return rt+e+pt+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rt+e+pt+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rt+e+pt+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return rt+e+pt+e+e;case 6165:return rt+e+pt+"flex-"+e+e;case 5187:return rt+e+We(e,/(\w+).+(:[^]+)/,rt+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return rt+e+pt+"flex-item-"+We(e,/flex-|-self/g,"")+(_r(e,/flex-|baseline/)?"":pt+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return rt+e+pt+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return rt+e+pt+We(e,"shrink","negative")+e;case 5292:return rt+e+pt+We(e,"basis","preferred-size")+e;case 6060:return rt+"box-"+We(e,"-grow","")+rt+e+pt+We(e,"grow","positive")+e;case 4554:return rt+We(e,/([^-])(transform)/g,"$1"+rt+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+rt+e+e;case 4200:if(!_r(e,/flex-|baseline/))return pt+"grid-column-align"+Fo(e,o)+e;break;case 2592:case 3360:return pt+We(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,_r(s.props,/grid-\w+-end/)})?~Ml(e+(i=i[o].value),"span",0)?e:pt+We(e,"-start","")+e+pt+"grid-row-span:"+(~Ml(i,"span",0)?_r(i,/\d+/):+_r(i,/\d+/)-+_r(e,/\d+/))+";":pt+We(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return _r(s.props,/grid-\w+-start/)})?e:pt+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,rt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qn(e)-1-o>6)switch(It(e,o+1)){case 109:if(It(e,o+4)!==45)break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+Ai+(It(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~Ml(e,"stretch",0)?k2(We(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,v,y){return pt+l+":"+d+y+(h?pt+l+"-span:"+(f?v:+v-+d)+y:"")+e});case 4949:if(It(e,o+6)===121)return We(e,":",":"+rt)+e;break;case 6444:switch(It(e,It(e,14)===45?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(It(e,14)===45?"inline-":"")+"box$3$1"+rt+"$2$3$1"+pt+"$2box$3")+e;case 100:return We(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function Fl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function ES(e,o,i,s){switch(e.type){case bS:if(e.children.length)break;case yS:case wS:case $h:return e.return=e.return||e.value;case g2:return"";case v2:return e.return=e.value+"{"+Fl(e.children,s)+"}";case lc:if(!Qn(e.value=e.props.join(",")))return""}return Qn(i=Fl(e.children,s))?e.return=e.value+"{"+i+"}":""}function IS(e){var o=w2(e);return function(i,s,l,d){for(var h="",f=0;f<o;f++)h+=e[f](i,s,l,d)||"";return h}}function PS(e){return function(o){o.root||(o=o.return)&&e(o)}}function zS(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case $h:e.return=k2(e.value,e.length,i);return;case v2:return Fl([eo(e,{value:We(e.value,"@","@"+rt)})],s);case lc:if(e.length)return CS(i=e.props,function(l){switch(_r(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wa(eo(e,{props:[We(l,/:(read-\w+)/,":"+Ai+"$1")]})),wa(eo(e,{props:[l]})),Yu(e,{props:Xf(i,s)});break;case"::placeholder":wa(eo(e,{props:[We(l,/:(plac\w+)/,":"+rt+"input-$1")]})),wa(eo(e,{props:[We(l,/:(plac\w+)/,":"+Ai+"$1")]})),wa(eo(e,{props:[We(l,/:(plac\w+)/,pt+"input-$1")]})),wa(eo(e,{props:[l]})),Yu(e,{props:Xf(i,s)});break}return""})}}var _a={},yu,wu;const $a=typeof process<"u"&&_a!==void 0&&(_a.REACT_APP_SC_ATTR||_a.SC_ATTR)||"data-styled",C2="active",_2="data-styled-version",hc="6.4.2",Nh=`/*!sc*/
`,Ti=typeof window<"u"&&typeof document<"u";function tm(e){if(typeof process<"u"&&_a!==void 0){const o=_a[e];if(o!==void 0&&o!=="")return o!=="false"}}const OS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(wu=(yu=tm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&yu!==void 0?yu:tm("SC_DISABLE_SPEEDY"))!==null&&wu!==void 0?wu:typeof process<"u"&&_a!==void 0&&!1),j2="sc-keyframes-",DS={};function Vi(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let Nl=new Map,Bl=new Map,Ll=1;const Ri=e=>{if(Nl.has(e))return Nl.get(e);for(;Bl.has(Ll);)Ll++;const o=Ll++;return Nl.set(e,o),Bl.set(o,e),o},FS=e=>Bl.get(e),BS=(e,o)=>{Ll=o+1,Nl.set(e,o),Bl.set(o,e)},Lh=Object.freeze([]),Ra=Object.freeze({});function S2(e,o,i=Ra){return e.theme!==i.theme&&e.theme||o||i.theme}const HS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WS=/(^-|-$)/g;function M2(e){return e.replace(HS,"-").replace(WS,"")}const US=/(a)(d)/gi,nm=e=>String.fromCharCode(e+(e>25?39:97));function Ah(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=nm(o%52)+i;return(nm(o%52)+i).replace(US,"$1-$2")}const Qu=5381,Oo=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},$2=e=>Oo(Qu,e);function Th(e){return Ah($2(e)>>>0)}function qS(e){return e.displayName||e.name||"Component"}function Zu(e){return typeof e=="string"&&!0}function VS(e){return Zu(e)?`styled.${e}`:`Styled(${qS(e)})`}const R2=Symbol.for("react.memo"),GS=Symbol.for("react.forward_ref"),YS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},KS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},N2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},QS={[GS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[R2]:N2};function rm(e){return("type"in(o=e)&&o.type.$$typeof)===R2?N2:"$$typeof"in e?QS[e.$$typeof]:YS;var o}const ZS=Object.defineProperty,XS=Object.getOwnPropertyNames,JS=Object.getOwnPropertySymbols,eM=Object.getOwnPropertyDescriptor,tM=Object.getPrototypeOf,nM=Object.prototype;function L2(e,o,i){if(typeof o!="string"){const s=tM(o);s&&s!==nM&&L2(e,s,i);const l=XS(o).concat(JS(o)),d=rm(e),h=rm(o);for(let f=0;f<l.length;++f){const v=l[f];if(!(v in KS||i&&i[v]||h&&v in h||d&&v in d)){const y=eM(o,v);try{ZS(e,v,y)}catch{}}}}return e}function Gi(e){return typeof e=="function"}const rM=Symbol.for("react.forward_ref");function Eh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===rM&&"styledComponentId"in e}function Ni(e,o){return e&&o?e+" "+o:e||o||""}function Hl(e,o){return e.join("")}function Oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xu(e,o,i=!1){if(!i&&!Oi(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Xu(e[s],o[s]);else if(Oi(o))for(const s in o)e[s]=Xu(e[s],o[s]);return e}function Ih(e,o){Object.defineProperty(e,"toString",{value:o})}const oM=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Vi(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+Nh;return o}},aM=`style[${$a}][${_2}="${hc}"]`,iM=new RegExp(`^${$a}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),om=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ju=e=>{if(!e)return document;if(om(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(om(o))return o}return document},sM=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},lM=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(Nh),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const v=f.match(iM);if(v){const y=0|parseInt(v[1],10),x=v[2];y!==0&&(BS(x,y),sM(e,x,v[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(f)}},bu=e=>{const o=Ju(e.options.target).querySelectorAll(aM);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute($a)!==C2&&(lM(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let Ci=!1;function cM(){if(Ci!==!1)return Ci;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ci=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return Ci=o.getAttribute("content")||void 0}return Ci=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const A2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(v=>{const y=Array.from(v.querySelectorAll(`style[${$a}]`));return y[y.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute($a,C2),l.setAttribute(_2,hc);const f=o||cM();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},dM=class{constructor(e,o){this.element=A2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw Vi(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},uM=class{constructor(e,o){this.element=A2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let am=Ti;const hM={isServer:!Ti,useCSSOMInjection:!OS};class Yi{static registerId(o){return Ri(o)}constructor(o=Ra,i={},s){this.options=Object.assign(Object.assign({},hM),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Ti&&am&&(am=!1,bu(this)),Ih(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let v=0;v<h;v++){const y=FS(v);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const w=d.getGroup(v);if(w.length===0)continue;const k=$a+".g"+v+'[id="'+y+'"]';let _="";for(const C of x)C.length>0&&(_+=C+",");f+=w+k+'{content:"'+_+'"}'+Nh}return f})(this))}rehydrate(){!this.server&&Ti&&bu(this)}reconstructWithOptions(o,i=!0){const s=new Yi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Ti&&o.target!==this.options.target&&Ju(this.options.target)!==Ju(o.target)&&bu(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new dM(s,l):new uM(s,l))(this.options),new oM(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){Ri(o),o.startsWith(j2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(Ri(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(Ri(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const T2=new WeakSet,pM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fM(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in pM||e.startsWith("--")?String(o).trim():o+"px"}const Po=47;function im(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const E2=Symbol.for("sc-keyframes");function mM(e){return typeof e=="object"&&e!==null&&E2 in e}function I2(e){return Gi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const P2=e=>e==null||e===!1||e==="",gM=Symbol.for("react.client.reference");function sm(e){return e.$$typeof===gM}function z2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!P2(s)&&(Array.isArray(s)&&T2.has(s)||Gi(s)?o.push(im(i)+":",s,";"):Oi(s)?(o.push(i+" {"),z2(s,o),o.push("}")):o.push(im(i)+": "+fM(i,s)+";"))}}function lo(e,o,i,s,l=[]){if(P2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(sm(e))return l;if(I2(e)&&o){const h=e(o);return lo(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)lo(e[h],o,i,s,l);return l}return Eh(e)?(l.push(`.${e.styledComponentId}`),l):mM(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):sm(e)?l:Oi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(z2(e,l),l):(l.push(e.toString()),l)}const vM=$2(hc);class xM{constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=Oo(vM,i),this.baseStyle=s,Yi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(I2(f)){const v=f(o);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=Hl(lo(v,o,i,s)))}else d+=Hl(lo(f,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=Ah(Oo(Oo(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const v=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,v)}l=Ni(l,f)}}return l}}const yM=/&/g;function O2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function ku(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let v=0;v<o;v++){const y=e.charCodeAt(v);if(d!==0||h||y!==Po||e.charCodeAt(v+1)!==42)if(h)y===42&&e.charCodeAt(v+1)===Po&&(h=!1,v++);else if(y!==34&&y!==39||O2(e,v)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){f=!0;let x=v+1;for(;x<o;){const w=e.charCodeAt(x);if(w===59||w===10)break;x++}x<o&&e.charCodeAt(x)===59&&x++,l=0,v=x-1,s=x;continue}l===0&&(i+=e.substring(s,v+1),s=v+1)}else y===59&&l===0&&(i+=e.substring(s,v+1),s=v+1)}else d===0?d=y:d===y&&(d=0);else h=!0,v++}return f||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function D2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let v=0;v<h.length;v++)f[v]=i+h[v];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&D2(d.children,o)}return e}function wM({options:e=Ra,plugins:o=Lh}=Ra){let i,s,l;const d=(k,_,C)=>C.startsWith(s)&&C.endsWith(s)&&C.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===lc&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(yM,s).replace(l,d))}),e.prefix&&h.push(zS),h.push(ES);let f=[];const v=IS(h.concat(PS(k=>f.push(k)))),y=(k,_="",C="",R="&")=>{i=R,s=_,l=void 0;const N=(function(M){const j=M.indexOf("//")!==-1,z=M.indexOf("}")!==-1;if(!j&&!z)return M;if(!j)return ku(M);const L=M.length;let T="",E=0,S=0,D=0,V=0,q=0,B=!1;for(;S<L;){const K=M.charCodeAt(S);if(K!==34&&K!==39||O2(M,S))if(D===0)if(K===Po&&S+1<L&&M.charCodeAt(S+1)===42){for(S+=2;S+1<L&&(M.charCodeAt(S)!==42||M.charCodeAt(S+1)!==Po);)S++;S+=2}else if(K!==40)if(K!==41)if(V>0)S++;else if(K===42&&S+1<L&&M.charCodeAt(S+1)===Po)T+=M.substring(E,S),S+=2,E=S,B=!0;else if(K===Po&&S+1<L&&M.charCodeAt(S+1)===Po){for(T+=M.substring(E,S);S<L&&M.charCodeAt(S)!==10;)S++;E=S,B=!0}else K===123?q++:K===125&&q--,S++;else V>0&&V--,S++;else V++,S++;else S++;else D===0?D=K:D===K&&(D=0),S++}return B?(E<L&&(T+=M.substring(E)),q===0?T:ku(T)):q===0?M:ku(M)})(k);let $=AS(C||_?C+" "+_+" { "+N+" }":N);return e.namespace&&($=D2($,e.namespace)),f=[],Fl($,v),f},x=e;let w=Qu;for(let k=0;k<o.length;k++)o[k].name||Vi(15),w=Oo(w,o[k].name);return x!=null&&x.namespace&&(w=Oo(w,x.namespace)),x!=null&&x.prefix&&(w=Oo(w,"p")),y.hash=w!==Qu?w.toString():"",y}const bM=new Yi,eh=wM(),F2=mn.createContext({shouldForwardProp:void 0,styleSheet:bM,stylis:eh,stylisPlugins:void 0});F2.Consumer;function B2(){return mn.useContext(F2)}const Ph=mn.createContext(void 0);Ph.Consumer;const lm=Object.prototype.hasOwnProperty,Cu={};function kM(e,o){const i=typeof e!="string"?"sc":M2(e);Cu[i]=(Cu[i]||0)+1;const s=i+"-"+Th(hc+i+Cu[i]);return o?o+"-"+s:s}function CM(e,o,i){const s=Eh(e),l=e,d=!Zu(e),{attrs:h=Lh,componentId:f=kM(o.displayName,o.parentComponentId),displayName:v=VS(e)}=o,y=o.displayName&&o.componentId?M2(o.displayName)+"-"+o.componentId:o.componentId||f,x=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const R=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;w=($,M)=>R($,M)&&N($,M)}else w=R}const k=new xM(i,y,s?l.componentStyle:void 0);function _(R,N){return(function($,M,j){const{attrs:z,componentStyle:L,defaultProps:T,foldedComponentIds:E,styledComponentId:S,target:D}=$,V=mn.useContext(Ph),q=B2(),B=$.shouldForwardProp||q.shouldForwardProp,K=S2(M,V,T)||Ra;let ee,ae;{const F=mn.useRef(null),Y=F.current;if(Y!==null&&Y[1]===K&&Y[2]===q.styleSheet&&Y[3]===q.stylis&&Y[7]===L&&(function(A,O,ne){const U=A,J=O;let ce=0;for(const H in J)if(lm.call(J,H)&&(ce++,U[H]!==J[H]))return!1;return ce===ne})(Y[0],M,Y[4]))ee=Y[5],ae=Y[6];else{ee=(function(O,ne,U){const J=Object.assign(Object.assign({},ne),{className:void 0,theme:U}),ce=O.length>1;for(let H=0;H<O.length;H++){const P=O[H],oe=Gi(P)?P(ce?Object.assign({},J):J):P;for(const pe in oe)pe==="className"?J.className=Ni(J.className,oe[pe]):pe==="style"?J.style=Object.assign(Object.assign({},J.style),oe[pe]):pe in ne&&ne[pe]===void 0||(J[pe]=oe[pe])}return"className"in ne&&typeof ne.className=="string"&&(J.className=Ni(J.className,ne.className)),J})(z,M,K),ae=(function(O,ne,U,J){return O.generateAndInjectStyles(ne,U,J)})(L,ee,q.styleSheet,q.stylis);let A=0;for(const O in M)lm.call(M,O)&&A++;F.current=[M,K,q.styleSheet,q.stylis,A,ee,ae,L]}}const se=ee.as||D,le=(function(F,Y,A,O){const ne={};for(const U in F)F[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&F.theme===A||(U==="forwardedAs"?ne.as=F.forwardedAs:O&&!O(U,Y)||(ne[U]=F[U]));return ne})(ee,se,K,B);let Z=Ni(E,S);return ae&&(Z+=" "+ae),ee.className&&(Z+=" "+ee.className),le[Zu(se)&&se.includes("-")?"class":"className"]=Z,j&&(le.ref=j),g.createElement(se,le)})(C,R,N)}_.displayName=v;let C=mn.forwardRef(_);return C.attrs=x,C.componentStyle=k,C.displayName=v,C.shouldForwardProp=w,C.foldedComponentIds=s?Ni(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=y,C.target=s?l.target:e,Object.defineProperty(C,"defaultProps",{get(){return this._foldedDefaultProps},set(R){this._foldedDefaultProps=s?(function(N,...$){for(const M of $)Xu(N,M,!0);return N})({},l.defaultProps,R):R}}),Ih(C,()=>`.${C.styledComponentId}`),d&&L2(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}var _M=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function cm(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const dm=e=>(T2.add(e),e);function Oe(e,...o){if(Gi(e)||Oi(e))return dm(lo(cm(Lh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?lo(i):dm(lo(cm(i,o)))}function th(e,o,i=Ra){if(!o)throw Vi(1,o);const s=(l,...d)=>e(o,i,Oe(l,...d));return s.attrs=l=>th(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>th(e,o,Object.assign(Object.assign({},i),l)),s}const H2=e=>th(CM,e),p=H2;_M.forEach(e=>{p[e]=H2(e)});class jM{constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Gi(d)&&!Eh(d))return!1}return!0})(o),Yi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const f=this.computeRules(o,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const f=h.rules,v=this.instanceRules.get(o).rules;if(f.length===v.length){let y=!0;for(let x=0;x<f.length;x++)if(f[x]!==v[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Hl(lo(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function W2(e,...o){const i=Oe(e,...o),s=`sc-global-${Th(JSON.stringify(i))}`,l=new jM(i,s),d=f=>{const v=B2(),y=mn.useContext(Ph);let x;{const w=mn.useRef(null);w.current===null&&(w.current=v.styleSheet.allocateGSInstance(s)),x=w.current}v.styleSheet.server&&h(x,f,v.styleSheet,y,v.stylis);{const w=l.isStatic?[x,v.styleSheet,l]:[x,f,v.styleSheet,y,v.stylis,l],k=mn.useRef(l);mn.useLayoutEffect(()=>{v.styleSheet.server||(k.current!==l&&(v.styleSheet.clearRules(s),k.current=l),h(x,f,v.styleSheet,y,v.stylis))},w),mn.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(x,v.styleSheet)},[x,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(x),null};function h(f,v,y,x,w){if(l.isStatic)l.renderStyles(f,DS,y,w);else{const k=Object.assign(Object.assign({},v),{theme:S2(v,x,d.defaultProps)});l.renderStyles(f,k,y,w)}}return mn.memo(d)}var U2;class SM{constructor(o,i){this[U2]=!0,this.inject=(s,l=eh)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=j2+o,this.rules=i,Ri(this.id),Ih(this,()=>{throw Vi(12,String(this.name))})}getName(o=eh){return o.hash?this.name+Ah(+o.hash>>>0):this.name}}function ke(e,...o){const i=Hl(Oe(e,...o)),s=Th(i);return new SM(s,i)}U2=E2;const q2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],MM=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function $M(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function RM(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%q2.length}function NM(e){const o=$M(e);let i=-1,s=0;return MM.forEach((l,d)=>{const h=l.reduce((f,v)=>o.includes(v)?f+1:f,0);h>s&&(s=h,i=d)}),q2[i>=0?i:RM(o)]}const Pt=(e,o,i)=>Math.max(o,Math.min(i,e)),jr=e=>(e=Pt(e,0,1),e*e*(3-2*e)),co=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function hn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function nh(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function pl(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return nh(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return nh(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function LM(){const[e,o]=g.useState(0);return g.useEffect(()=>{var d;const i=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",i);const l=new MutationObserver(i);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",i),l.disconnect()}},[]),e}function AM(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function TM(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const Eo=["234,54,38","246,112,44","252,172,54","255,212,76"],EM="176,58,32",IM="198,158,52";function Zn(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function Cr(e,o,i){if(!(e!=null&&e.length))return i;if(e.length===1)return e[0];const s=Pt(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return Zn(e[l],e[d],s-l)}function ho(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),x=e.size<24,w=Pt(e.alert??0,0,1),k=(M,j)=>M+(j-M)*w,_=.85+.15*Math.sin(o*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const M=s.createRadialGradient(h,f,0,h,f,y*3);M.addColorStop(0,"rgba("+Cr(e.corePalette,.42,i.core)+",0.55)"),M.addColorStop(1,"rgba("+Cr(e.corePalette,.86,i.accent)+",0)"),s.fillStyle=M,s.beginPath(),s.arc(h,f,y*3,0,6.2832),s.fill()}else if(!i.glow){const M=y*k(3.2,3),j=s.createRadialGradient(h,f,0,h,f,M);j.addColorStop(0,"rgba("+Zn(Cr(e.corePalette,.35,i.core),Eo[1],w)+","+k(.34,.85*_)+")"),j.addColorStop(.5,"rgba("+Zn(Cr(e.corePalette,.68,i.core),Eo[2],w)+","+k(.13,.42*_)+")"),j.addColorStop(1,"rgba("+Zn(Cr(e.corePalette,1,i.core),Eo[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,f,M,0,6.2832),s.fill()}s.restore()}const C=i.glow?1:.95,R=Math.max(.8,y*k(1,1.5)),N=y*.1*w;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(h-N,f-N,0,h,f,R);$.addColorStop(0,"rgba("+Zn(Cr(e.corePalette,.08,i.core),Eo[0],w)+","+k(C,1)+")"),$.addColorStop(.5,"rgba("+Zn(Cr(e.corePalette,.42,i.core),Eo[1],w)+","+k(C,1)+")"),$.addColorStop(.82,"rgba("+Zn(Cr(e.corePalette,.72,i.core),Eo[2],w)+","+k(C,.97)+")"),$.addColorStop(1,"rgba("+Zn(Cr(e.corePalette,1,i.core),Eo[3],w)+","+k(C,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(h,f,R,0,6.2832),s.fill(),s.restore()}function V2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],w=o*(y?.5:.16),k=.42,_=Math.cos(k),C=Math.sin(k),R=Math.cos(w),N=Math.sin(w),$=v*.96,M=(D,V,q)=>{const B=D*R+q*N,K=-D*N+q*R,ee=V,ae=ee*_-K*C,le=(ee*C+K*_+1)/2,Z=.82+.18*le;return{x:h+B*$*Z,y:f+ae*$*Z,d:le}},j=(D,V,q)=>{const B=Math.cos(D),K=Math.sin(D)*Math.cos(V),ee=Math.sin(D)*Math.sin(V);return[B*Math.cos(q)+ee*Math.sin(q),K,-B*Math.sin(q)+ee*Math.cos(q)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const z=e.size>=24?64:40,L=y?.9:.3,T=z,E=5.6,S=[];for(let D=0;D<x.length;D++){const V=x[D][0],q=x[D][1],B=ae=>{const se=j(ae,V,q);return M(se[0],se[1],se[2])},K=D%2?1:-1,ee=D*2+K*o*L;S.push({ptOf:B,head:ee,dir:K,hp:B(ee)})}S.sort((D,V)=>D.hp.d-V.hp.d);for(const D of S){const V=Math.max(1.2,v*.05)*(.75+.35*D.hp.d),q=.66*(.45+.55*D.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=V;let B=D.ptOf(D.head);for(let ae=1;ae<=T;ae++){const se=ae/T,le=1-se,Z=q*le*le,F=D.ptOf(D.head-D.dir*se*E);Z>.004&&(s.strokeStyle="rgba("+i.dot+","+Z+")",s.beginPath(),s.moveTo(B.x,B.y),s.lineTo(F.x,F.y),s.stroke()),B=F}s.restore();const K=Math.max(.9,v*.062*co(e.size)*(.65+.5*D.hp.d)),ee=.45+.55*D.hp.d;if(i.glow){const ae=s.createRadialGradient(D.hp.x,D.hp.y,0,D.hp.x,D.hp.y,K*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(D.hp.x,D.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(D.hp.x,D.hp.y,K,0,6.2832),s.fill()}ho(e,o,i),s.restore()}function PM(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[v*.92],w=x.length,k=1,_=y?.9:.3,C=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let R=0;R<w;R++){const N=x[R],$=R%2?1:-1,M=6.2832/k,j=Math.min(5.6,M*.92);for(let z=0;z<k;z++){const L=R*2+$*o*_+z*M,T=h+Math.cos(L)*N,E=f+Math.sin(L)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let S=T,D=E;for(let q=1;q<=C;q++){const B=q/C,K=.62*(1-B)*(1-B),ee=L-$*B*j,ae=h+Math.cos(ee)*N,se=f+Math.sin(ee)*N;K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(S,D),s.lineTo(ae,se),s.stroke()),S=ae,D=se}s.restore();const V=Math.max(.9,v*.062*co(e.size));if(i.glow){const q=s.createRadialGradient(T,E,0,T,E,V*4.5);q.addColorStop(0,"rgba("+i.accent+",0.3)"),q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=q,s.beginPath(),s.arc(T,E,V*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(T,E,V,0,6.2832),s.fill()}}ho(e,o,i),s.restore()}function um(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=Pt(e.alert??0,0,1),k=y*.82,_=(F,Y)=>Zn(i.dot,Zn(EM,IM,Pt(Math.hypot(F-f,Y-v)/k,0,1)),w),C=e.size>=120,R=C?22:e.size>=32?10:e.size>=20?7:5,N=x?o*.55:o*.22,$=Math.cos(N),M=Math.sin(N),j=.42,z=Math.cos(j),L=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",C&&i.glow){const F=s.createRadialGradient(f,v,0,f,v,y*1.02);F.addColorStop(0,"rgba("+i.accent+",0.10)"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=F,s.beginPath(),s.arc(f,v,y*1.02,0,6.2832),s.fill()}const T=[];for(let F=0;F<R;F++){const Y=1-(F+.5)/R*2,A=Math.sqrt(Math.max(0,1-Y*Y)),O=F*2.39996,ne=Math.cos(O)*A,U=Y,J=Math.sin(O)*A,ce=ne*$+J*M,H=-ne*M+J*$,P=U*z-H*L,oe=U*L+H*z,pe=(oe+1)/2,de=.82+.18*pe;T.push({x:f+ce*k*de,y:v+P*k*de,d:pe,k:F,vec:[ce,P,oe]})}T.sort((F,Y)=>F.d-Y.d);const E=F=>{const Y=(F[2]+1)/2,A=.82+.18*Y;return{x:f+F[0]*k*A,y:v+F[1]*k*A,d:Y}},S=(F,Y,A)=>{let O=F[0]*Y[0]+F[1]*Y[1]+F[2]*Y[2];O=Pt(O,-1,1);const ne=Math.acos(O);if(ne<.001)return[F[0],F[1],F[2]];const U=Math.sin(ne),J=Math.sin((1-A)*ne)/U,ce=Math.sin(A*ne)/U;return[F[0]*J+Y[0]*ce,F[1]*J+Y[1]*ce,F[2]*J+Y[2]*ce]},D={};for(const F of T)D[F.k]=F;const q=o*(x?1.4:.5),B=Math.floor(q),K=q-B,ee=5,ae=12;s.lineCap="round",s.lineJoin="round";const se=[1.7,9.3,21.5,34.8,48.2],le=Pt(Math.round(e.streamCount??(C?5:4)),0,se.length),Z=se.slice(0,le).map(F=>({seed:F}));for(const F of Z){const Y=O=>{const ne=Math.sin(O*12.9898+F.seed)*43758.5453;return Math.floor((ne-Math.floor(ne))*R)},A=O=>{let ne=Y(O);return ne===Y(O-1)&&(ne=(ne+1)%R),D[ne]};for(let O=ee-1;O>=0;O--){const ne=B-O;if(ne<0)continue;const U=A(ne),J=A(ne+1);if(!U||!J||U===J)continue;const ce=O===0?K:1,H=E(S(U.vec,J.vec,ce)),P=(U.d+H.d)/2,oe=O===0?1:Pt(1-(O-1+K)/(ee-1),0,1),pe=(i.glow?.6:.72)*oe*(.4+.6*P);if(pe<.02)continue;const de=s.createLinearGradient(U.x,U.y,H.x,H.y);de.addColorStop(0,"rgba("+_(U.x,U.y)+",0)"),de.addColorStop(1,"rgba("+_(H.x,H.y)+","+pe+")"),s.strokeStyle=de,s.lineWidth=(C?Math.max(1.1*h,y*.018):Math.max(1.2,y*.045))*(.7+.4*P),s.beginPath();for(let ve=0;ve<=ae;ve++){const be=E(S(U.vec,J.vec,ce*(ve/ae)));ve===0?s.moveTo(be.x,be.y):s.lineTo(be.x,be.y)}s.stroke()}}for(const F of T){const Y=.5+.5*Math.sin(o*2-F.k*.9),A=(.18+.82*F.d)*(.62+.38*Y),O=C?Math.max(.5,(.9+.9*F.d)*h*(.85+.15*Y)):y*.058*co(e.size)*(.6+.5*F.d);if(i.glow){const ne=O*4,U=s.createRadialGradient(F.x,F.y,0,F.x,F.y,ne);U.addColorStop(0,"rgba("+i.accent+","+.24*A+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(F.x,F.y,ne,0,6.2832),s.fill()}s.fillStyle="rgba("+_(F.x,F.y)+","+(.32+.68*A)+")",s.beginPath(),s.arc(F.x,F.y,Math.max(.9,O),0,6.2832),s.fill()}C&&zh(e,o,i,_),ho(e,o,i),s.restore()}function zh(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let _=0;_<46;_++){const C=hn(_*5.1)<.5?-1:1,R=hn(_*1.7)*6.2832+o*(.3+hn(_*3.1)*.6)*C*k,N=x*(.04+.05*hn(_*4.7))*Math.sin(o*(.8+hn(_*6)*1)+hn(_*7)*6.28),$=x*(.5+hn(_*2.3)*.5)+N,M=v+Math.cos(R)*$,j=y+Math.sin(R)*$,z=.3+.7*(.5+.5*Math.sin(o*(1.4+hn(_)*2)+hn(_*2)*6.28)),L=Math.max(.5,(.4+hn(_*8)*1)*f*(.55+.6*z));if(i.glow){const T=L*6,E=l.createRadialGradient(M,j,0,M,j,T);E.addColorStop(0,"rgba("+i.accent+","+z*.18+")"),E.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(M,j,T,0,6.2832),l.fill()}l.fillStyle="rgba("+s(M,j)+","+z*(i.glow?.8:.42)+")",l.beginPath(),l.arc(M,j,L,0,6.2832),l.fill()}}function zM(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=e.size>=32?11:7,k=y*.12,_=y*.12,C=jr(.5+.5*Math.sin(o*(x?1:.55))),R=x?.34+.66*C:.5+.12*C,N=Math.max(1*h,y*.052),$=-o*(x?.5:.16),M=Math.cos($),j=Math.sin($),z=.42,L=Math.cos(z),T=Math.sin(z);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=y*(.52+.44*R),S=Math.max(k+N,E-_),D=[];for(let V=0;V<w;V++){const q=1-(V+.5)/w*2,B=Math.sqrt(Math.max(0,1-q*q)),K=V*2.39996,ee=Math.cos(K)*B,ae=q,se=Math.sin(K)*B,le=ee*M+se*j,Z=-ee*j+se*M,F=ae*L-Z*T,A=(ae*T+Z*L+1)/2,O=.82+.18*A,ne=.5+.5*Math.sin(o*1.6+V*1.3);D.push({x0:f+le*k*O,y0:v+F*k*O,x1:f+le*S*O,y1:v+F*S*O,cx2:f+le*E*O,cy2:v+F*E*O,d:A,shim:ne})}D.sort((V,q)=>V.d-q.d);for(const V of D){const q=(x?.4+.45*R:.6)*(.4+.6*V.d)*(.78+.22*V.shim),B=s.createLinearGradient(V.x0,V.y0,V.x1,V.y1);B.addColorStop(0,"rgba("+i.dot+","+q+")"),B.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=B,s.lineWidth=N*(.7+.5*V.d),s.beginPath(),s.moveTo(V.x0,V.y0),s.lineTo(V.x1,V.y1),s.stroke();const K=Math.max(.9,y*.058*co(e.size)*(.85+.3*R)*(.6+.5*V.d));if(i.glow){const ee=s.createRadialGradient(V.cx2,V.cy2,0,V.cx2,V.cy2,K*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*q+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(V.cx2,V.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,q+.1)+")",s.beginPath(),s.arc(V.cx2,V.cy2,K,0,6.2832),s.fill()}e.size>=120&&zh(e,o,i,()=>i.dot),ho(e,o,i),s.restore()}function OM(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,w=v*.78,k=y?o*.5:o*.2,_=Math.cos(k),C=Math.sin(k),R=.42,N=Math.cos(R),$=Math.sin(R),M=y?1:.4,j=(B,K)=>[Math.sin(B)*Math.cos(K),Math.cos(B),Math.sin(B)*Math.sin(K)],z=[j(1.4+.5*Math.sin(o*.5*M),o*.6*M),j(1.9+.4*Math.cos(o*.4*M),-o*.5*M+2)],L=.36,T=e.cellCount==null?x:Pt(Math.round(e.cellCount),0,x);let E=null,S=null;(T<x||e.cellBirths)&&(S=Array.from({length:x},(B,K)=>K).sort((B,K)=>hn(B)-hn(K)),E=new Array(x),S.forEach((B,K)=>{E[B]=K}));const D=.7,V=.16;if(S&&e.cellBirths&&e.emergeNow!=null){let B=0;for(let K=0;K<T;K++){const ee=S[K];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+B++*V)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const q=[];for(let B=0;B<x;B++){let K=1;if(E){if(E[B]>=T)continue;if(e.cellBirths){const P=e.cellBirths.get(B);if(P==null||(K=jr(((e.emergeNow??P+D)-P)/D),K<=.001))continue}}const ee=1-(B+.5)/x*2,ae=Math.sqrt(Math.max(0,1-ee*ee)),se=B*2.39996,le=Math.cos(se)*ae*K,Z=ee*K,F=Math.sin(se)*ae*K;let Y=0;for(const P of z){const oe=le-P[0],pe=Z-P[1],de=F-P[2];Y+=Math.exp(-(oe*oe+pe*pe+de*de)/(2*L*L))}Y=Pt(Y,0,1);const A=le*_+F*C,O=-le*C+F*_,ne=Z*N-O*$,J=(Z*$+O*N+1)/2,ce=.82+.18*J;let H=i.dot;if(e.dotPalette&&e.dotPalette.length){const oe=(se/6.2832+(ee+1)*.07+1)%1*e.dotPalette.length,pe=Math.floor(oe)%e.dotPalette.length,de=(pe+1)%e.dotPalette.length;H=Zn(e.dotPalette[pe],e.dotPalette[de],oe-Math.floor(oe))}q.push({x:h+A*w*ce,y:f+ne*w*ce,d:J,inf:Y,g:K,color:H})}q.sort((B,K)=>B.d-K.d);for(const B of q){const K=jr(B.inf),ee=Math.max(.6,v*(.05+.06*K)*co(e.size)*(.55+.5*B.d))*(.35+.65*B.g),ae=(.16+.84*B.d)*(.45+.55*K)*B.g,se=1-(1-Math.abs(2*B.d-1))*B.g,le=Math.atan2(B.y-f,B.x-h);s.fillStyle="rgba("+B.color+","+ae+")",s.beginPath(),s.ellipse(B.x,B.y,Math.max(.35,ee*se),ee,le,0,6.2832),s.fill()}ho(e,o,i),s.restore()}function DM(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,w=e.state!=="idle",k=jr(Pt(s/.55,0,1)),_=jr(Pt((s-.3)/.4,0,1)),C=jr(Pt((s-.5)/.5,0,1)),R=e.size>=32?11:7,N=x*.12,$=x*.12,M=jr(.5+.5*Math.sin(o*(w?1:.55))),j=w?.34+.66*M:.5+.12*M,z=Math.max(1*f,x*.052),L=-o*(w?.5:.16),T=Math.cos(L),E=Math.sin(L),S=.42,D=Math.cos(S),V=Math.sin(S),q=x*(.52+.44*j),B=Math.max(N+z,q-$),K=[];for(let H=0;H<R;H++){const P=1-(H+.5)/R*2,oe=Math.sqrt(Math.max(0,1-P*P)),pe=H*2.39996,de=Math.cos(pe)*oe,ve=P,be=Math.sin(pe)*oe,Se=de*T+be*E,$e=-de*E+be*T,Ie=ve*D-$e*V,De=(ve*V+$e*D+1)/2,Ae=.82+.18*De,Ze=.5+.5*Math.sin(o*1.6+H*1.3);K.push({x0:v+Se*N*Ae,y0:y+Ie*N*Ae,x1:v+Se*B*Ae,y1:y+Ie*B*Ae,cx2:v+Se*q*Ae,cy2:y+Ie*q*Ae,d:De,shim:Ze,ux:de,uy:ve,uz:be})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...K].sort((H,P)=>H.d-P.d);for(const H of ee){const P=(w?.4+.45*j:.6)*(.4+.6*H.d)*(.78+.22*H.shim);if(C>.001){const oe=H.x0+(H.x1-H.x0)*C,pe=H.y0+(H.y1-H.y0)*C,de=l.createLinearGradient(H.x0,H.y0,H.x1,H.y1);de.addColorStop(0,"rgba("+i.dot+","+P*C+")"),de.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=de,l.lineWidth=z*(.7+.5*H.d),l.beginPath(),l.moveTo(H.x0,H.y0),l.lineTo(oe,pe),l.stroke()}if(_>.001){const oe=Math.max(.9,x*.058*co(e.size)*(.85+.3*j)*(.6+.5*H.d));if(i.glow){const pe=l.createRadialGradient(H.cx2,H.cy2,0,H.cx2,H.cy2,oe*5);pe.addColorStop(0,"rgba("+i.accent+","+.26*P*_+")"),pe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=pe,l.beginPath(),l.arc(H.cx2,H.cy2,oe*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,P+.1)*_+")",l.beginPath(),l.arc(H.cx2,H.cy2,oe*(.6+.4*_),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,se=x*.78,le=w?o*.5:o*.2,Z=Math.cos(le),F=Math.sin(le),Y=w?1:.4,A=(H,P)=>[Math.sin(H)*Math.cos(P),Math.cos(H),Math.sin(H)*Math.sin(P)],O=[A(1.4+.5*Math.sin(o*.5*Y),o*.6*Y),A(1.9+.4*Math.cos(o*.4*Y),-o*.5*Y+2)],ne=.36,U=e.cellCount==null?ae:Pt(Math.round(e.cellCount),0,ae);let J=null;if(U<ae){const H=Array.from({length:ae},(P,oe)=>oe).sort((P,oe)=>hn(P)-hn(oe));J=new Array(ae),H.forEach((P,oe)=>{J[P]=oe})}const ce=1-_;if(ce>.001||k<1){const H=[];for(let P=0;P<ae;P++){if(J&&J[P]>=U)continue;const oe=1-(P+.5)/ae*2,pe=Math.sqrt(Math.max(0,1-oe*oe)),de=P*2.39996,ve=Math.cos(de)*pe,be=oe,Se=Math.sin(de)*pe;let $e=0,Ie=-2;for(let He=0;He<R;He++){const Ye=ve*K[He].ux+be*K[He].uy+Se*K[He].uz;Ye>Ie&&(Ie=Ye,$e=He)}const Ue=K[$e];let De=0;for(const He of O){const Ye=ve-He[0],gt=be-He[1],nt=Se-He[2];De+=Math.exp(-(Ye*Ye+gt*gt+nt*nt)/(2*ne*ne))}De=Pt(De,0,1);const Ae=ve*Z+Se*F,Ze=-ve*F+Se*Z,Xe=be*D-Ze*V,Be=(be*V+Ze*D+1)/2,xe=.82+.18*Be,Le=v+Ae*se*xe,ot=y+Xe*se*xe;H.push({x:Le+(Ue.cx2-Le)*k,y:ot+(Ue.cy2-ot)*k,d:Be+(Ue.d-Be)*k,inf:De,f:(1-(1-Math.abs(2*Be-1)))*(1-k)+1*k})}H.sort((P,oe)=>P.d-oe.d);for(const P of H){const oe=jr(P.inf),pe=Math.max(.6,x*(.05+.06*oe)*co(e.size)*(.55+.5*P.d)),de=(.16+.84*P.d)*(.45+.55*oe)*ce;if(de<=.003)continue;const ve=Math.atan2(P.y-y,P.x-v);l.fillStyle="rgba("+i.dot+","+de+")",l.beginPath(),l.ellipse(P.x,P.y,Math.max(.35,pe*P.f),pe,ve,0,6.2832),l.fill()}}e.size>=120&&C>.001&&(l.globalAlpha=C,zh(e,o,i,()=>i.dot),l.globalAlpha=1),ho(e,o,i),l.restore()}function FM(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,w=v*.9,k=y?1:.4,_=o*(y?.3:.12),C=o*1*k,R=-o*.7*k+2.2,N=.72,$=(M,j)=>{const z=((M-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(z)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let M=0;M<x;M++){const j=M/x*6.2832+_;let z=Math.exp(-($(j,C)**2)/(2*N*N))+Math.exp(-($(j,R)**2)/(2*N*N));z=Pt(z,0,1);const L=jr(z),T=h+Math.cos(j)*w,E=f+Math.sin(j)*w,S=Math.max(.6,v*(.05+.07*L)*co(e.size)),D=.38+.62*L;if(i.glow&&L>.25){const V=s.createRadialGradient(T,E,0,T,E,S*4);V.addColorStop(0,"rgba("+i.accent+","+.24*L+")"),V.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=V,s.beginPath(),s.arc(T,E,S*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+D+")",s.beginPath(),s.arc(T,E,S,0,6.2832),s.fill()}ho(e,o,i),s.restore()}function BM(e,o,i){ho(e,o,i)}const HM={orbit:V2,orbit2d:PM,circle:um,lines:zM,magnetic:OM,magnetic2d:FM,pulse:BM,bands:um};function lt({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:f,corePalette:v,coreHalo:y=!0,coreGradient:x=!1,streamCount:w,cellCount:k,className:_,"aria-label":C}){const R=g.useRef(null),N=LM(),$=g.useRef(0),M=g.useRef(0);M.current=x?1:0;const j=g.useRef(new Map),z=g.useRef(null),L=g.useRef(0);return g.useEffect(()=>{const T=R.current;if(!T)return;const E=T.getContext("2d");if(!E)return;const S=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),D=Math.min(2,window.devicePixelRatio||1),V=Math.max(2,Math.round(o*D)),q=V;T.width=V,T.height=q;const B={ctx:E,w:V,h:q,dpr:D,size:o,state:s,coreHalo:y,alert:$.current,streamCount:w,cellCount:k,cellBirths:k!=null&&!S&&s!=="static"?j.current:void 0},K=i==="auto"?AM(pl(E,T,"var(--color-bg-primary)"))<.5?"dark":"light":i,ee=TM(K,nh(d));if(B.dotPalette=h||f==null?void 0:f.map(ne=>pl(E,T,ne)),B.corePalette=h||v==null?void 0:v.map(ne=>pl(E,T,ne)),h){const ne=pl(E,T,h);ee.dot=ne,ee.core=ne}const ae=HM[e]??V2,se=1.15,le=e==="lines"?1:0,Z=e==="lines"||e==="magnetic";(z.current==null||!Z||S||s==="static")&&(z.current=le);const F=ne=>{if($.current+=(M.current-$.current)*.06,Math.abs($.current-M.current)<.001&&($.current=M.current),B.alert=$.current,B.emergeNow=performance.now()/1e3,Z&&z.current!==le){const ce=B.emergeNow,H=Pt(ce-(L.current||ce),0,.1);L.current=ce;const P=le>(z.current??0)?1:-1;z.current=Pt((z.current??0)+P*H/se,0,1)}else L.current=B.emergeNow;E.clearRect(0,0,V,q);const U=s==="static"?.62:ne,J=z.current??le;Z&&J>.001&&J<.999?DM(B,U,ee,J):ae(B,U,ee)},Y=Pt(l,.4,3);if((S||s==="static")&&($.current=M.current),F(1.15),S||s==="static")return;let A=0;const O=ne=>{F(ne/1e3*Y),A=requestAnimationFrame(O)};return A=requestAnimationFrame(O),()=>cancelAnimationFrame(A)},[e,o,i,s,l,d,h,f,v,y,x,w,k,N]),n.jsx("canvas",{ref:R,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:_,role:"img","aria-label":C})}const Na={high:0,medium:1,low:2,none:3};p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function pc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function WM(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const G2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,Y2=e=>/^(review|adjust|revisit|update)\b/i.test(e),UM=["Revisit","Update","Resolve"],qM=e=>/,|\sand\s/.test(e),VM="Approve all",Wl="Yes",K2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};p.section`
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
`;function GM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function YM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function KM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function QM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function ZM({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function XM({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Q2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function JM({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function e$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function t$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Bo({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function n$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function r$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function Z2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function hm({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const pm=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],La={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},X2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function J2(e){const o=X2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function ev(e){const o=La[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const tv={missed_clockin_james:"james_okoro_2"},Oh=e=>`https://i.pravatar.cc/80?u=${tv[e]??e}`,Pa=e=>`https://i.pravatar.cc/80?u=${tv[e]??e}`,o$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},a$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],nv=e=>o$[e]??a$,rv={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},fm={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Dh={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},i$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Fh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},s$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},l$={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},_u={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function ov(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return s$[e.id]??e.timeline.map(i=>{var d;const s=((d=_u[i.state])==null?void 0:d.call(_u,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:l$[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Bt=(e,o,i)=>({name:e,match:o,distance:i}),Qe=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),mm=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],c$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],d$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],u$=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],av="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",Io=e=>({from:"ultron",text:av,time:e}),h$={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:mm,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Bt("Jordan Pierce","4.9 match","3.2 mi"),Bt("Aisha Karim","4.7 match","5.1 mi"),Bt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:av,total:20,threads:[Qe("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[Io("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Qe("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[Io("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Qe("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[Io("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Qe("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[Io("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Qe("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[Io("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Qe("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[Io("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Qe("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[Io("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:c$,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Bt("Renee Wallace","4.9 match","2.4 mi"),Bt("Carl Jensen","4.6 match","4.1 mi"),Bt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Qe("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Qe("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Qe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:d$,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Bt("Dane Mercer","4.8 match","2.1 mi"),Bt("Omar Reyes","4.6 match","3.7 mi"),Bt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Qe("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Qe("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Qe("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:u$,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Bt("Jamal Carter","4.7 match","1.8 mi"),Bt("Sara Lindqvist","4.6 match","2.9 mi"),Bt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Qe("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Qe("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Qe("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Bt("Theo Park","4.7 match","1.9 mi"),Bt("Gina Holt","4.5 match","3.3 mi"),Bt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Qe("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Qe("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Qe("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Qe("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Bt("Carl Jensen","4.7 match","2.6 mi"),Bt("Tina Boyd","4.5 match","3.9 mi"),Bt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Qe("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Qe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Qe("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Qe("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Qe("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Qe("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Qe("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Qe("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Qe("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Qe("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Qe("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Qe("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Qe("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Qe("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:mm,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Qe("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Qe("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},p$={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},f$=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",gm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",vm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),m$={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},rh=e=>{const[o,...i]=e.split(" "),s=m$[o];return s?`Will ${s} ${i.join(" ")}`:e};function g$(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${f$(i.name)}", template="shift_offer", to=matched)`,summary:`${rh(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${rh(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function v$(e,o,i,s){var _,C,R,N;if(e==="read"){const $=((_=o.update)==null?void 0:_.recordType)??((C=o.updateClose)==null?void 0:C.recordType);if(!$)return null;const M=$.toLowerCase(),j=[{label:"Type",value:$},{label:"Time",value:((R=X2[s])==null?void 0:R.shiftTime)??""},{label:"User",value:La[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${M} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:j,summary:`Read the ${M}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(N=o.policy)==null?void 0:N.eligible;if(!$)return null;const M=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${M} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${M} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${M} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:$,query:M,fields:j}=o.task;return{icon:"task",name:"Tasks",description:$,query:M,task:{fields:j}}}if(e==="update"||e==="update-close"){const $=e==="update"?o.update:o.updateClose;if(!$)return null;const{description:M,...j}=$;return{icon:"record",name:"Update Data",description:M,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,y=e==="policy"?o.policy.description:l?d.description:h.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?y:rh(y),M={icon:x,name:v,description:$,...g$(e,o)};return l?{...M,channel:vm(d.channel),message:d.message}:h?{...M,channel:gm(h.name),message:h.message}:e==="policy"?{...M,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:M}if(e==="policy")return{icon:x,name:v,description:y,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:x,name:v,description:y,channel:gm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:x,name:v,description:y,channel:vm(d.channel),notification:k}}function iv(e,o,i="execution"){const s=h$[e];return s?o.map(l=>v$(l,s,i,e)).filter(l=>l!==null):[]}const x$=e=>e.tools??p$[e.icon]??["policy"],fl=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function y$(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??(e.risk?"high":"medium"),event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const sv={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},xm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Bh(e,o){return xm[o%xm.length]}function w$(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function b$(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function lv({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(k$,{children:[n.jsx(tr,{size:"md",src:Oh(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(C$,{children:[n.jsx(_$,{children:e.title}),n.jsx(j$,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(S$,{"data-tone":b$(i),children:[i,"% match"]}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(vh,{size:16})})]})}const k$=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,C$=p.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,_$=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,j$=p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,S$=p.span`
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
`,ym=e=>e.id.startsWith("detected_"),wm=5400,bm=1100;function M$(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:sv[i.id]??i.outcome}:i)}}const $$=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function R$(){const e=g.useMemo(()=>pm.filter(U=>U.id!=="shift_drop_maria"),[]),[o,i]=g.useReducer(M$,e),[s,l]=g.useState(()=>{var J;const U=e.find(ce=>ce.status==="needs_approval"||ce.status==="recommended");return(U==null?void 0:U.id)??((J=e[0])==null?void 0:J.id)??null}),[d,h]=g.useState([]),f=U=>{l(U),h(J=>J.includes(U)?J:[...J,U])},v=g.useMemo(()=>{const U=o.map((J,ce)=>({item:J,index:ce}));return $$.map(J=>({id:J.id,label:J.label,threads:U.filter(ce=>J.statuses.includes(ce.item.status)).sort((ce,H)=>(ce.item.status==="analyzing"?1:0)-(H.item.status==="analyzing"?1:0)||(ym(H.item)?1:0)-(ym(ce.item)?1:0)||Na[ce.item.severity]-Na[H.item.severity]||ce.index-H.index).map(ce=>ce.item)}))},[o]),y=o.find(U=>U.id===s)??null,[x,w]=g.useState({}),k=s?x[s]??0:0,[_,C]=g.useState([]),[R,N]=g.useState({}),[$,M]=g.useState({}),[j,z]=g.useState([]),L=g.useRef({}),[T,E]=g.useState([]),S=U=>{E(J=>J.includes(U)?J.filter(ce=>ce!==U):[...J,U])},[D,V]=g.useState([]),q=U=>{V(J=>J.includes(U)?J:[...J,U])},[B,K]=g.useState([]),ee=U=>K(J=>J.includes(U)?J:[...J,U]);return{threads:o,groups:v,selectedId:s,selectedThread:y,selectedStage:k,stageById:x,viewedIds:d,analyzedIds:_,outboundByThread:R,chatByThread:$,replyingIds:j,setSelectedId:f,detectEvent:U=>{const J=y$(U);i({type:"detect",thread:J}),ee(J.id)},surfaceDemoThread:U=>{const J=pm.find(ce=>ce.id===U);J&&(i({type:"detect",thread:J}),ee(U))},decide:U=>{f(U),C(J=>J.includes(U)?J:[...J,U]),i({type:"decide",threadId:U})},commit:(U,J)=>{f(U),N(ce=>({...ce,[U]:[...ce[U]??[],J]})),i({type:"commit",threadId:U})},completeRun:U=>{const J=x[U]??0,ce=Dh[U];J===0&&ce?(w(H=>({...H,[U]:1})),i({type:"reopen",threadId:U})):(i({type:"resolve",threadId:U}),T.includes(U)&&(q(U),E(H=>H.filter(P=>P!==U))))},sendMessage:(U,J)=>{const ce=J.trim();if(!ce)return;f(U),M(P=>({...P,[U]:[...P[U]??[],{role:"operator",text:ce}]})),z(P=>P.includes(U)?P:[...P,U]);const H=window.setTimeout(()=>{M(P=>{const oe=P[U]??[],pe=oe.filter(de=>de.role==="ultron").length;return{...P,[U]:[...oe,{role:"ultron",text:Bh(ce,pe)}]}}),z(P=>P.filter(oe=>oe!==U)),delete L.current[U]},bm);L.current[U]=H},stopReply:U=>{const J=L.current[U];J&&(window.clearTimeout(J),delete L.current[U]),z(ce=>ce.filter(H=>H!==U))},refine:U=>{},saveWorkflow:U=>{const J=U.id;f(J),M(H=>({...H,[J]:[...H[J]??[],{role:"operator",text:"Save as workflow"}]})),z(H=>H.includes(J)?H:[...H,J]);const ce=window.setTimeout(()=>{M(H=>({...H,[J]:[...H[J]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),q(J),z(H=>H.filter(P=>P!==J)),delete L.current[J]},bm);L.current[J]=ce},pendingWorkflowIds:T,toggleWorkflowSave:S,savedWorkflowIds:D,markWorkflowSaved:q,revealedNewIds:B,revealNew:ee}}const N$={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function L$(e,o){const i=N$[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const A$={search:zl,read:zl,message:Ii,policy:zo,shield:zo,schedule:zo,analytics:d6,clock:gn,monitor:Ui,bell:Ii,record:io,task:zo},T$={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},E$=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:T$[e.icon]??e.name,I$=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",km={positive:0,chatting:1,muted:2},P$=p(Zg)`
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
`,z$=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Hh=240;function O$({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[h,f]=g.useState(e),[v,y]=g.useState(!1);if(g.useEffect(()=>{if(e){f(!0);let C=0;const R=requestAnimationFrame(()=>{C=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(R),cancelAnimationFrame(C)}}y(!1);const _=setTimeout(()=>f(!1),Hh);return()=>clearTimeout(_)},[e]),!h)return null;const x=s.length,w=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((_,C)=>({entry:_,index:C}));return uo.createPortal(n.jsxs(K$,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(Q$,{$shown:v,onClick:o}),n.jsxs(Z$,{$shown:v,children:[n.jsxs(X$,{children:[n.jsxs(J$,{children:[n.jsx(eR,{children:i}),n.jsx(tR,{children:w})]}),n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(Do,{size:18})})]}),n.jsxs(nR,{children:[n.jsx(rR,{"aria-hidden":"true"}),n.jsx(Qg,{type:"single",collapsible:!0,value:l,onValueChange:_=>d(typeof _=="string"?_:""),children:k.map(({entry:_,index:C})=>{const R=_.updateData?ic:A$[_.icon];return n.jsx(P$,{value:String(C),label:E$(_),description:_.description,leadingSlot:n.jsx(z$,{"aria-hidden":"true",children:n.jsx(R,{size:18})}),children:n.jsx(oR,{children:n.jsx(D$,{entry:_})})},C)})})]})]})]}),document.body)}function D$({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Channel"}),n.jsx(Mm,{children:e.channel})]}),e.message&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Message"}),n.jsx(_m,{children:e.message})]}),e.recordDetails&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Record details"}),n.jsx(ju,{children:e.recordDetails.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:n.jsx(Su,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(_n,{children:[n.jsx(nn,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(vR,{children:e.policies.items.map((o,i)=>n.jsxs(xR,{children:[n.jsx(yR,{"aria-hidden":"true",children:n.jsx(rn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(_n,{children:[n.jsx(nn,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(F$,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(_n,{children:[n.jsx(nn,{children:`Threads · ${e.threads.total}`}),n.jsx(V$,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(_n,{children:[n.jsx(nn,{children:"Recipient"}),n.jsx(wR,{children:n.jsx(Sn,{size:"md",divider:!1,leadingSlot:n.jsx(tr,{size:"sm",src:Pa(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(sc,{size:14})})})})]}),n.jsxs(_n,{children:[n.jsx(nn,{children:"Message"}),n.jsx(_m,{children:e.notification.message})]})]}),e.task&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Task"}),n.jsx(ju,{children:e.task.fields.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Pi,{status:"success",size:"sm",children:o.value}):n.jsx(Su,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(ju,{children:o.map((s,l)=>n.jsx(Sn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(B$,{children:[n.jsx(H$,{children:s.previousValue}),n.jsx(W$,{"aria-hidden":"true",children:"→"}),n.jsx(U$,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Pi,{status:"success",size:"sm",children:s.value}):n.jsx(Su,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Recommendation"}),n.jsxs(bR,{children:[n.jsxs(jm,{children:[n.jsx(Sm,{children:"Incentive?"}),n.jsx(kR,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(jm,{children:[n.jsx(Sm,{children:"Reason"}),n.jsx(CR,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(_n,{children:[n.jsx(nn,{children:"Query"}),n.jsx(aR,{children:e.query})]}),e.summary&&n.jsxs(_n,{children:[n.jsx(nn,{children:"What it does"}),n.jsx(Mm,{children:e.summary})]})]})}function F$({candidates:e,total:o,moreNoun:i}){var x;const[s,l]=g.useState(!1),d=e.slice(0,3),h=o-d.length,f=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),v=s?Array.from({length:h},(w,k)=>q$(k,f)):[],y=[...d,...v];return n.jsxs(n.Fragment,{children:[n.jsx(Wh,{children:y.map((w,k)=>n.jsx(Sn,{size:"sm",leadingSlot:n.jsx(tr,{size:"sm",src:Pa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(lR,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(cv,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Wh=p.div`
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
`,ju=p(Wh)`
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
`,Su=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,B$=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,H$=p.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,W$=p.span`
  color: var(--color-content-tertiary);
`,U$=p.span`
  color: var(--color-success-content);
`,Ul=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],ql=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function q$(e,o){const i=Ul[e%Ul.length],s=ql[(e*7+3)%ql.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const Cm=3;function V$({threads:e}){const[o,i]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((x,w)=>km[x.tone]-km[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(x,w)=>Y$(w))],v=o?f:f.slice(0,Cm),y=f.length-Cm;return n.jsxs(n.Fragment,{children:[n.jsx(Wh,{children:v.map((x,w)=>{var R;const k=!!((R=x.conversation)!=null&&R.length),_=`${x.name}-${w}`,C=k&&s===_;return n.jsxs(cR,{"data-open":C||void 0,children:[n.jsx(Sn,{size:"md",interactive:k,onClick:k?()=>l(C?null:_):void 0,"aria-expanded":k?C:void 0,leadingSlot:n.jsx(tr,{size:"sm",src:Pa(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:n.jsxs(gR,{children:[n.jsx(Pi,{status:I$(x),size:"sm",children:x.status}),k?n.jsx(dR,{"data-open":C||void 0,children:n.jsx(Dn,{size:16})}):n.jsx(Mn,{size:16})]})}),C&&n.jsx(G$,{messages:x.conversation})]},_)})}),y>0&&n.jsx(cv,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function G$({messages:e}){return n.jsx(hR,{children:e.map((o,i)=>n.jsxs(pR,{$from:o.from,children:[n.jsx(fR,{children:o.text}),n.jsx(mR,{children:o.time})]},i))})}function Y$(e){const o=Ul[e%Ul.length],i=ql[(e*7+3)%ql.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const K$=p.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,Q$=p.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Hh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,Z$=p.div`
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
  transition: transform ${Hh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,X$=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,J$=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,eR=p.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,tR=p.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,nR=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,rR=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,oR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,_n=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function aR({children:e}){const[o,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(iR,{children:[n.jsx(sR,{children:e}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(rn,{size:14}):n.jsx(Ag,{size:14})})]})}const iR=p.div`
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
`,sR=p.pre`
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
`,lR=p.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,cR=p.div``,dR=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,uR=ke`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,hR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${uR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pR=p.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,fR=p.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,mR=p.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,gR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,cv=p.button`
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
`,vR=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,xR=p.li`
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
`,yR=p.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,_m=p.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,wR=p.div`
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
`,bR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,jm=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Sm=p.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,kR=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,CR=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Mm=p.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function _R({milestones:e}){return n.jsx(TR,{children:e.map((o,i)=>n.jsx($R,{milestone:o,last:i===e.length-1},i))})}function Vl({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:v,reasoning:y}){return n.jsx(jR,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:v,reasoning:y})}function jR({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:v=!1,reasoning:y=!1}){const[x,w]=g.useState(!1),C=v||y&&!d?e.length:0,R=C>0,N=R&&!x?C:0,$=e.slice(0,C).map(j=>j.headline).join(" · "),M=e.length>0&&N>=e.length;return n.jsx(IR,{$animate:h,children:n.jsxs(zR,{$compact:M,children:[R&&!x&&n.jsx(Nm,{$tight:!0,$last:M,$connected:f,children:n.jsxs(hv,{type:"button","aria-expanded":x,onClick:()=>w(j=>!j),children:[n.jsx(Tm,{"aria-hidden":"true",children:n.jsx(Ol,{size:16})}),n.jsx(QR,{children:$})]})}),e.slice(N).map((j,z)=>{var B,K;const L=N+z,T=d&&typeof i=="number"&&L>i,E=d&&typeof i=="number"&&L===i,S=T?"plan":E?"working":"done",D=!d||typeof i!="number"||L<i-1?"done":L===i-1?"working":"upcoming",V=!!((B=j.progress)!=null&&B.length),q=L===e.length-1;return n.jsxs(Nm,{$tight:!V,$last:q,$connected:f,children:[f&&!q&&D!=="upcoming"&&n.jsx(DR,{"aria-hidden":"true",$state:D,$tight:!V,$superseded:v}),n.jsx(uv,{milestone:j,label:L$(j.headline,S),last:!0,collapsible:!0,placeholder:T,focused:E,startOpen:!d&&x,onCollapse:R&&x&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:v,typing:L===o,extra:!T&&((K=j.usage)!=null&&K.length)?n.jsx(MR,{usage:j.usage,title:j.headline}):void 0,icon:y&&!d&&!T?n.jsx(Tm,{"aria-hidden":"true",children:n.jsx(Ol,{size:16})}):n.jsx(dv,{icon:j.icon,loading:o===L||E||d&&typeof i!="number"&&L===e.length-1,placeholder:T,muted:v})})]},L)}),!l&&!d&&n.jsx(Ca,{time:sr(e)})]})})}const $m=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function SR(){const[e,o]=g.useState(0);return g.useEffect(()=>{if(e>=$m.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[$m[e],n.jsxs(PR,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function sr(e){const i=581+e.reduce((f,v)=>f+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Ca({time:e}){const[o,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(FR,{"data-feedback-actions":!0,children:n.jsxs(pg,{visibility:"always",time:e,children:[n.jsx(Lm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(Ng,{size:14})}),n.jsx(Lm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(Lg,{size:14})}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Wi,{size:14})})]})})}function MR({usage:e,title:o}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(BR,{children:[n.jsxs(Fe,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Mn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(O$,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function $R({milestone:e,last:o}){return n.jsxs(VR,{children:[n.jsxs(GR,{children:[n.jsx(dv,{icon:e.icon}),!o&&n.jsx(JR,{})]}),n.jsx(uv,{milestone:e,last:o})]})}function RR({records:e,initial:o=3}){const[i,s]=g.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(mN,{children:[l.map((h,f)=>n.jsx(lv,{record:h},f)),d>0&&n.jsx(gN,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function dv({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(Am,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(KR,{})}):n.jsx(Am,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(XR,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function uv({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:v,progressBeat:y,superseded:x,startOpen:w,onCollapse:k}){var q,B,K;const _=o??e.headline;if(f)return n.jsx(Im,{$last:i,$dim:!0,children:n.jsxs(Di,{as:"div",children:[l,n.jsx(Pm,{children:_})]})});const C=!!((q=e.blocks)!=null&&q.length),R=!!h,N=!d||!!e.defaultOpen||!!w,[$,M]=g.useState(null),j=!!k,z=j?!0:$??N,L=d&&(C||R),T=!j&&L&&(!s||!!v),E=T&&!!v&&!!((B=e.progress)!=null&&B.length),S=()=>M(()=>!z),D=C&&(j||!d||z),V=R&&(j||!d||z);return n.jsxs(Im,{$last:i,children:[n.jsxs(Di,{as:j||L?"button":"div",type:j||L?"button":void 0,$interactive:j||T,"aria-expanded":j?!0:T?z:void 0,onClick:j?k:T?S:void 0,children:[l,n.jsx(Pm,{$focused:!!v,children:_}),T&&!v&&n.jsx(eN,{"data-open":z||void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:14})})]}),(K=e.progress)!=null&&K.length?n.jsx(rN,{$indent:!!l,children:n.jsxs(tN,{children:[E&&n.jsx(nN,{type:"button","aria-expanded":z,"aria-label":z?"Hide details":"Show details",onClick:S,children:z?n.jsx(jh,{size:16}):n.jsx(Aa,{size:16})}),n.jsx(LR,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:y,superseded:x,showAvatars:z||s||v})]})}):null,D&&n.jsx(uN,{$indent:!!l,children:e.blocks.map((ee,ae)=>n.jsxs(hN,{children:[ee.text&&n.jsx(pN,{children:s?n.jsx(Uh,{text:ee.text}):ee.text}),ee.label&&n.jsx(fN,{children:ee.label}),ee.bullets&&n.jsx(vN,{children:ee.bullets.map((se,le)=>n.jsx("li",{children:se},le))}),ee.checks&&n.jsx(xN,{children:ee.checks.map((se,le)=>n.jsxs("li",{children:[n.jsx(yN,{"aria-hidden":"true"}),n.jsx("span",{children:se})]},le))}),ee.records&&n.jsx(RR,{records:ee.records})]},ae))}),V&&n.jsx(HR,{$indent:!!l,children:h})]})}const NR=1350;function LR({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const v=e.length-1,y=typeof h=="number",[x,w]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),g.useEffect(()=>{if(y||!k.current||x>=v)return;const N=setTimeout(()=>w($=>Math.min($+1,v)),NR);return()=>clearTimeout(N)},[x,v,y]),g.useEffect(()=>{typeof h=="number"&&w(Math.min(h,v))},[h,v]);const _=typeof h=="number"?Math.min(h,v):x,C=_>=v,R=C&&!l;return n.jsxs(oN,{children:[n.jsx(iN,{$done:R,$live:l,$superseded:f,"aria-live":"polite",children:l?n.jsx(Uh,{text:e[_],caret:!1,speed:26}):e[_]},_),d&&(i?C:C||l)&&(o!=null&&o.length)?n.jsx(AR,{seeds:o,total:s}):null]})}const Rm=90;function AR({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(sN,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>n.jsx(lN,{style:{zIndex:s.length-f,animationDelay:`${f*Rm}ms`},children:n.jsx(tr,{size:"sm",src:Pa(h),name:h,alt:""})},h)),d>0&&n.jsxs(cN,{"aria-hidden":"true",style:{animationDelay:`${s.length*Rm}ms`},children:["+",d]})]})}const TR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,ER=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,fc=Oe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,IR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${ER} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${fc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PR=p.span``,zR=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,za="var(--space-4)",Nm=p.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,OR=ke`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,DR=p.span`
  position: absolute;
  /* Centered on the icon column — i.e. on the glyph itself. */
  left: calc(${za} / 2);
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
        animation: ${OR} 1.25s linear infinite;
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
`,FR=p.div`
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
`,BR=p.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,HR=p.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?`calc(${za} + var(--space-2))`:"0"};
`,Lm=p(Fe)`
  &[data-active] { color: var(--color-content-brand); }
`;function Uh({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return g.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(UR,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(qR,{"aria-hidden":"true",children:e.slice(l)})]})}const WR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,UR=p.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?WR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qR=p.span`
  opacity: 0;
`,VR=p.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,GR=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Am=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Width hugs the glyph so the marker lands on the row's left edge; height
     stays the 32px row pitch, which is what sets the trail's vertical rhythm. */
  width: ${za};
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,YR=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,KR=p.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${YR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hv=p.button`
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
`,pv=Oe`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,Tm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* The same column as every other leading marker in the trail (see ICON_COL),
     so the chevron sits on the row's left edge whether the group is folded to
     this one line or heading the steps below it — and either way shares the
     left margin of the cards the trail runs between. */
  width: ${za};
  height: var(--space-8);
  ${pv}
`,QR=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${pv}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${hv}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,ZR=ke`
  to { transform: rotate(360deg); }
`,Em=56.5,XR=p.svg`
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
    stroke-dasharray: ${Em};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?Em*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${ZR} 2s linear infinite;
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
`,JR=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Im=p.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Di=p.div`
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
`,Pm=p.span`
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

  ${Di}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,eN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Di}:hover &,
  ${Di}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,tN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,nN=p.button`
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
`,rN=p.div`
  padding-left: ${e=>e.$indent?`calc(${za} + var(--space-2))`:"0"};
`,oN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,aN=ke`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,iN=p.div`
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
    animation: ${aN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,sN=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,fv=ke`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,lN=p.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${fv} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cN=p.span`
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
  animation: ${fv} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dN=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,uN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (ICON_COL + the header's --space-2 gap). */
  padding-left: ${e=>e.$indent?`calc(${za} + var(--space-2))`:"0"};
  animation: ${dN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,pN=p.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,fN=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,mN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,gN=p.button`
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
`,vN=p.ul`
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
`,xN=p.ul`
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
`,yN=p.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function wN({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const bN=160;function kN({captured:e=!1,onSubmit:o,onDismiss:i}){const[s,l]=g.useState(""),d=g.useRef(null),h=s.length>=10;g.useEffect(()=>{if(e)return;const v=window.requestAnimationFrame(()=>{var y;return(y=d.current)==null?void 0:y.focus()});return()=>window.cancelAnimationFrame(v)},[e]);const f=v=>{v.preventDefault(),!(!h||e)&&o(s)};return n.jsxs(jN,{onSubmit:f,"aria-label":"See Ultron handle real work",children:[n.jsx(SN,{"aria-hidden":"true"}),e&&n.jsx(MN,{type:"button","aria-label":"Close phone number confirmation",onClick:i,children:n.jsx(Do,{size:18})}),n.jsxs($N,{children:[n.jsxs(RN,{children:[n.jsx(NN,{"aria-hidden":"true"})," YOUR SETUP IS READY"]}),n.jsx(LN,{children:"Ready to see the real work?"}),n.jsx(AN,{children:"Add your mobile number to launch a live Ultron event and watch it work from detection through resolution."})]}),e?n.jsxs(DN,{role:"status",children:[n.jsx(gn,{size:22}),n.jsxs("span",{children:[n.jsx("strong",{children:"You’re in."})," Your live event is arriving now."]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(TN,{children:[n.jsxs(EN,{children:[n.jsx(IN,{"aria-hidden":"true",children:"+1"}),n.jsx(PN,{ref:d,type:"tel",inputMode:"numeric",autoComplete:"tel",pattern:"[0-9]*",minLength:10,maxLength:15,value:s,placeholder:"Mobile number","aria-label":"Mobile number",onChange:v=>l(v.target.value.replace(/\D/g,""))})]}),n.jsx(zN,{type:"submit",variant:"tertiary",size:"lg",disabled:!h,children:"Launch"})]}),n.jsx(ON,{children:"One setup text, never spam. Msg & data rates may apply. Reply STOP to opt out."})]})]})}const mv=g.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,v]=g.useState(""),y=g.useRef(null),x=f.trim().length>0;g.useImperativeHandle(h,()=>({focus:()=>{var R;return(R=y.current)==null?void 0:R.focus()}}),[]);const w=()=>{const R=y.current;R&&(R.style.height="auto",R.style.height=`${Math.min(R.scrollHeight,bN)}px`)},k=()=>{!x||i||(o(f),v(""),requestAnimationFrame(()=>{const R=y.current;R&&(R.style.height="auto")}))},_=R=>{R.preventDefault(),k()},C=R=>{R.key==="Enter"&&!R.shiftKey&&(R.preventDefault(),k())};return n.jsxs(FN,{onSubmit:_,$compact:d,children:[n.jsx(BN,{ref:y,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:R=>{v(R.target.value),w()},onKeyDown:C}),i?n.jsx(zm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(wN,{size:d?16:20})}):n.jsx(zm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:n.jsx(oc,{size:d?14:18})})]})}),CN=ke`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,_N=ke`
  0%, 100% { opacity: 0.55; transform: scale(0.82); box-shadow: 0 0 0 0 rgb(110 231 183 / 0%); }
  50% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 7px rgb(110 231 183 / 0%); }
`,jN=p.form`
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
  animation: ${CN} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 600px) {
    gap: var(--space-3);
    padding: var(--space-5);
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SN=p.span`
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
`,MN=p.button`
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
`,$N=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-right: var(--space-8);
`,RN=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: 0.08em;
  color: #a7f3d0;
`,NN=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6ee7b7;
  box-shadow: 0 0 14px rgb(110 231 183 / 78%);
  animation: ${_N} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,LN=p.h2`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: var(--font-weight-semibold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #fff;
`,AN=p.p`
  max-width: 620px;
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 78%);
`,TN=p.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-2);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,EN=p.label`
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
`,IN=p.span`
  flex: 0 0 auto;
  padding-right: var(--space-3);
  margin-right: var(--space-3);
  border-right: 1px solid rgb(255 255 255 / 22%);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: rgb(226 232 255 / 64%);
`,PN=p.input`
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
`,zN=p(Fe)`
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
`,ON=p.p`
  margin: calc(var(--space-2) * -1) 0 0;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 48%);
`,DN=p.div`
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
`,FN=p.form`
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
`,BN=p.textarea`
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
`,zm=p(Fe)`
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
`,HN=768,gv=`(max-width: ${HN-1}px)`;function qh(e){const[o,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function mc(){return qh(gv)}const Om=450;function Vh(e,o){var C;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Dh[e.id],d=o===1&&!!l,h=d?l.prompt:rv[e.id]??e.recommendation,f=d?l.record:i$[e.id],v=f?Array.isArray(f)?f:[f]:[],y=e.status==="unresolved"?UM:d?l.actions:e.actions,x=i&&(!d&&(((C=Fh[e.id])==null?void 0:C.length)??0)>1||qM(h)),w=x?VM:y[y.length-1],k=x?[]:y.slice(0,-1),_=G2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:v,primaryLabel:w,secondaryLabels:k,purple:_}}function Dm({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:v,onAction:y,onRefinement:x,onSaveWorkflow:w}){const[k,_]=g.useState(!1),[C,R]=g.useState(!1),{actionable:N,prompt:$,records:M,primaryLabel:j,purple:z}=Vh(e,o),T=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",S=!s&&(N||z),D=E&&!d,V=s?T:N||T||S,q=i&&(V||D),B=pc(e),ee=J2(e.id)||(q?"":e.assessment),ae=se=>{Y2(se)?x(se):y(e.id,se)};return n.jsxs(tL,{"data-tone":B,$expanded:i,children:[n.jsxs(iL,{children:[n.jsxs(lL,{type:"button","aria-expanded":q,"aria-label":q?"Collapse case":"Expand case",onClick:h,children:[n.jsx(tr,{size:"md",src:Oh(e.id),name:La[e.id],alt:La[e.id]??""}),n.jsxs(kv,{children:[n.jsx(Cv,{children:ev(e)}),ee&&n.jsx(_v,{children:ee})]})]}),n.jsx(sL,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":q?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?n.jsx(sc,{size:20}):q?n.jsx(Ol,{size:16}):n.jsx(jh,{size:16})})]}),q&&D&&n.jsx(cL,{children:n.jsx(dL,{children:n.jsx(_R,{milestones:ov(e)})})}),q&&V&&n.jsxs(uL,{children:[N&&!s&&n.jsx(gc,{children:$}),N&&!s&&M.length>0&&n.jsx(ML,{children:M.map((se,le)=>n.jsx(lv,{record:se},le))}),T&&n.jsx(jv,{role:"status","aria-live":"polite",children:n.jsx(VN,{thread:e,onDecide:v})}),S&&n.jsxs(Ki,{children:[N&&j&&n.jsx(ao,{variant:"primary",size:"sm",onClick:()=>ae(Wl),children:Wl}),N&&n.jsx(ao,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&n.jsx(Rv,{variant:"tertiary",size:"sm","data-selected":C||void 0,onClick:()=>{R(!0),x("Other")},children:"Other"}),z&&(k?n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(rn,{size:14}),children:"Saved"}):n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Bo,{size:14}),onClick:()=>{w(e),_(!0)},children:"Save as workflow"}))]})]})]})}function Fm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Uh,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function vv({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:v=!1,onSend:y,replying:x=!1,onStop:w,flat:k=!1}){const _=mc(),C=d||h,[R,N]=g.useState(!1),[$,M]=g.useState(!1),[j]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[z,L]=g.useState(!1),[T,E]=g.useState(!1),S=g.useRef(null);g.useEffect(()=>{var A;T&&((A=S.current)==null||A.focus())},[T]);const D=d||v||z,{actionable:V,onFollowUp:q,prompt:B,records:K,primaryLabel:ee,purple:ae}=Vh(e,o),se=V&&!q?Fh[e.id]??K2(B).map(A=>({label:A})):void 0,le=e.status==="resolved"||e.status==="auto_resolved",Z=ae||le,F=A=>{Y2(A)?s(A):i(e.id,A)},Y=V&&!(se&&se.length>0)&&K.length>0?K[0]:void 0;if(Z&&!V){const A=sv[e.id],O=R||!A,ne=d&&!v&&!z;return n.jsxs(OL,{$divided:!0,children:[A&&n.jsx(DL,{children:n.jsx(Fm,{text:A,onDone:()=>N(!0),instant:j})}),O&&!ne&&n.jsxs(to,{$saved:D,"data-saved":D||void 0,children:[n.jsxs(Nv,{children:[n.jsx(Lv,{"aria-hidden":"true",children:n.jsx(Bo,{size:16})}),n.jsx(Av,{children:n.jsx(Fm,{text:"Want me to save this as a reusable workflow?",onDone:()=>M(!0),instant:j})})]}),$&&n.jsx(Tv,{children:D?_?n.jsx(Hm,{variant:"primary",size:"sm",disabled:!0,iconOnly:!0,"aria-label":"Saved",children:n.jsx(rn,{size:14})}):n.jsx(ao,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(rn,{size:14}),children:"Saved"}):_?n.jsx(Hm,{variant:"primary",size:"sm",iconOnly:!0,"aria-label":"Save workflow",onClick:()=>{L(!0),l(e)},children:n.jsx(rn,{size:14})}):n.jsx(ao,{variant:"primary",size:"sm",onClick:()=>{L(!0),l(e)},children:"Save workflow"})})]}),O&&ne&&n.jsx(yv,{})]})}return n.jsxs(aL,{$flat:k,"data-tone":pc(e),children:[V&&n.jsxs(wv,{children:[n.jsx(gc,{children:B}),Y&&n.jsx(bv,{children:n.jsx(tr,{size:"md",src:Pa(Y.avatarSeed),name:Y.title,alt:Y.title})})]}),se&&se.length>0?n.jsx(xv,{tasks:se}):null,n.jsxs(Ki,{children:[V&&ee&&n.jsx(ao,{variant:T?"secondary":"primary",size:"sm",onClick:()=>F(Wl),children:Wl}),V&&n.jsx(ao,{variant:T?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),V&&n.jsx(Rv,{variant:"tertiary",size:"sm","data-selected":T||void 0,onClick:()=>E(!0),children:"Other"}),V&&!q&&n.jsx(zL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":C,"data-on":C||void 0,leadingArtwork:C?n.jsx(rn,{size:14}):n.jsx(Bo,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),V&&T&&n.jsx(PL,{children:n.jsx(mv,{ref:S,compact:!0,onSend:A=>y==null?void 0:y(A),working:x,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function WN({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:v=!1}){const y=pc(e),x=J2(e.id)||e.assessment;return n.jsxs(nL,{"data-tone":y,$expanded:i,children:[n.jsxs(rL,{$expanded:i,children:[n.jsx(tr,{size:"md",src:Oh(e.id),name:La[e.id],alt:La[e.id]??""}),n.jsxs(kv,{children:[n.jsx(Cv,{children:ev(e)}),x&&n.jsx(_v,{children:x})]})]}),i&&n.jsx(oL,{children:n.jsx(vv,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:v})})]})}function xv({tasks:e,interactive:o=!0}){return n.jsx($L,{children:e.map((i,s)=>n.jsx(UN,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function UN({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),h=!!e.detail&&s;return n.jsxs(RL,{children:[n.jsx(NL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(LL,{})}),n.jsxs(AL,{children:[n.jsxs(TL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[n.jsx(Mv,{children:e.label}),h&&n.jsx(EL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:14})})]}),l&&h&&n.jsx(IL,{children:e.detail})]})]})}function qN({steps:e,completed:o}){const[i,s]=g.useState(o?e.length:1);g.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(vL,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!o&&h===i-1,v=h===l.length-1;return n.jsxs(yL,{children:[n.jsxs(wL,{children:[n.jsx(jL,{$done:!f,"aria-hidden":"true",children:f?n.jsx(SL,{children:n.jsx(lt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(rn,{size:16})}),!v&&n.jsx(bL,{})]}),n.jsxs(kL,{$last:v,children:[n.jsx(CL,{children:d.headline}),n.jsx(_L,{children:d.detail})]})]},h)})})}function VN({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(hL,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[n.jsx(lt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(fL,{children:[n.jsx(mL,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(gL,{children:e.assessment})]}),n.jsx(pL,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:14})})]}),d&&n.jsx(qN,{steps:nv(e.id),completed:i}),!i&&!l&&n.jsx(Sv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function GN({thread:e,onDecide:o}){return n.jsx(Sv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function Mu(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:iv(o,x$(e))}}function YN(e,o){const i=iv(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function KN(e,o){const i=ov(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[YN(nv(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(fm[e.id]??[]).map(k=>Mu(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Dh[e.id],v=[(fm[e.id]??[]).map(w=>Mu(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>Mu(w,e.id))],y=w=>w===1&&f?f.prompt:rv[e.id]??e.recommendation,x=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:w}),(v[k]??[]).forEach(_=>x.push({kind:"activity",milestone:_})),x.push({kind:"reply",text:w$(k)})}),{items:x,reasoningCount:h}}function QN({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:v=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=KN(e,o),_=l||e.status==="in_progress",[C,R]=g.useState(l?Math.min(1,k):_?k:w.length),[N]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=o.length>0||y||x?w.length:k,M=e.status==="in_progress"&&o.length>0,[j,z]=g.useState(0);g.useEffect(()=>{z(0)},[C]),g.useEffect(()=>{if(C>=$)return;const H=w[C],P=w[C-1];if((H==null?void 0:H.kind)==="question"||(H==null?void 0:H.kind)==="message"){const de=setTimeout(()=>R(ve=>ve+1),0);return()=>clearTimeout(de)}if((H==null?void 0:H.kind)==="reply"){if(M)return;const de=setTimeout(()=>R(ve=>ve+1),Om);return()=>clearTimeout(de)}if(M&&(P==null?void 0:P.kind)!=="message")return;const oe=(P==null?void 0:P.kind)==="message"?Om:wm,pe=setTimeout(()=>R(de=>de+1),oe);return()=>clearTimeout(pe)},[C,$,M]),g.useEffect(()=>{if(!M)return;const H=P=>{var be;if(P.key!=="t"&&P.key!=="T"||P.metaKey||P.ctrlKey||P.altKey)return;const oe=P.target instanceof Element?P.target:null;if(oe&&oe.closest('input, textarea, [contenteditable="true"]'))return;const pe=w[C-1],de=(pe==null?void 0:pe.kind)==="activity"?((be=pe.milestone.progress)==null?void 0:be.length)??0:0;if((pe==null?void 0:pe.kind)==="activity"&&j<de-1){z(Se=>Se+1);return}const ve=w[C];(ve==null?void 0:ve.kind)==="activity"?(R(Se=>Se+1),z(0)):f==null||f()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[M,C,j,f]);const L=w.slice(0,C),T=[];for(const H of L){if(H.kind==="question"){T.push({type:"question",text:H.text});continue}if(H.kind==="message"){T.push({type:"msg",text:H.text});continue}if(H.kind==="reply"){T.push({type:"reply",text:H.text});continue}const P=T[T.length-1];P&&P.type==="acts"?P.milestones.push(H.milestone):T.push({type:"acts",milestones:[H.milestone]})}const E=C<w.length,S=L.length>0&&L[L.length-1].kind==="activity",D=C>=$,[V,q]=g.useState(!1);g.useEffect(()=>{if(!(D&&S&&(y||l)&&!x)){q(!1);return}q(!0);const H=setTimeout(()=>q(!1),wm);return()=>clearTimeout(H)},[D,S,C,y,l,x]);const B=(y||l)&&(E||V)&&S;let K=-1;T.forEach((H,P)=>{H.type==="acts"&&(K=P)});const ee=[];for(const H of w){if(H.kind!=="activity"){ee.push({type:"other"});continue}const P=ee[ee.length-1];P&&P.type==="acts"?P.milestones.push(H.milestone):ee.push({type:"acts",milestones:[H.milestone]})}let ae=-1;ee.forEach((H,P)=>{H.type==="acts"&&(ae=P)});const se=T.findIndex(H=>H.type==="acts"),le=(H,P,oe=P)=>{const pe=T[H],de=(l||e.status==="in_progress")&&H===ae,ve=ee[H],be=de&&ve&&ve.type==="acts"?ve.milestones:pe.milestones,Se=de?pe.milestones.length-1:void 0;return n.jsx(Vl,{milestones:be,focusIndex:Se,focusBeat:de&&M?j:void 0,typingIndex:H===ae&&B?pe.milestones.length-1:void 0,collapsed:H<K,hideActions:oe,running:de,showConnectors:H!==se,reasoning:H===se,animateIn:!P&&!N})},Z=[];for(let H=0;H<T.length;H++){const P=T[H];if(P.type==="question"){Z.push({kind:"question",text:P.text});continue}if(P.type==="msg"){Z.push({kind:"msg",text:P.text});continue}if(P.type==="reply"){Z.push({kind:"response",gi:-1,text:P.text});continue}const oe=T[H+1];oe&&oe.type==="reply"?(Z.push({kind:"response",gi:H,text:oe.text}),H++):Z.push({kind:"acts",gi:H})}const Y=(l||e.status==="in_progress")&&K>=0||s,A=L.length>0,O=s||y,ne=(()=>{for(let H=Z.length-1;H>=0;H--){const P=Z[H];if(P.kind==="acts"||P.kind==="response"&&P.gi>=0)return H}return-1})(),U=Z.findIndex(H=>H.kind==="question"),J=U===se+1?U:-1,ce=H=>H.kind==="acts"?sr(T[H.gi].milestones):H.kind==="response"?sr(H.gi>=0?T[H.gi].milestones:[]):sr([]);return n.jsxs(n.Fragment,{children:[Z.map((H,P)=>{var ve,be;const oe=P===ne?d:null;if(H.kind==="question"){if(P===J)return null;const Se=Z[P-1],$e=!!Se&&(Se.kind==="acts"||Se.kind==="response")&&P-1!==ne,Ie=P===U;return n.jsxs(Ru,{children:[Ie?n.jsx(Bm,{thread:e,saveWorkflowFlagged:v}):n.jsx(JN,{text:H.text,animate:!N}),$e&&n.jsx(Ca,{time:ce(Se)})]},`q${P}`)}if(H.kind==="msg")return n.jsx(eL,{messages:[H.text],animate:!N},`m${P}`);if(H.kind==="acts"){const Se=T[H.gi].milestones,$e=((ve=Z[P+1])==null?void 0:ve.kind)==="question",Ie=le(H.gi,!1,!!oe||$e),Ue=P===se,De=oe||(Ue&&P+1===J?n.jsx(Bm,{thread:e,saveWorkflowFlagged:v}):null);return Ue&&De?n.jsxs(XL,{children:[Ie,De,n.jsx(Ca,{time:sr(Se)})]},`a${P}`):n.jsxs(g.Fragment,{children:[Ie,oe&&n.jsxs(Ru,{children:[oe,n.jsx(Ca,{time:sr(Se)})]})]},`a${P}`)}const pe=H.gi>=0,de=pe?T[H.gi].milestones:[];return n.jsxs(g.Fragment,{children:[n.jsx(oh,{activity:pe?le(H.gi,!0):void 0,text:H.text,feedbackTime:oe||((be=Z[P+1])==null?void 0:be.kind)==="question"?void 0:sr(de),showMark:!1,animateIn:!1}),oe&&n.jsxs(Ru,{children:[oe,n.jsx(Ca,{time:sr(de)})]})]},`resp${P}`)}),n.jsx(ZN,{messages:i,replying:s}),h&&uo.createPortal(A?n.jsxs(GL,{role:O?"status":"img","aria-label":s?"Ultron is replying":Y?"Ultron is working":"Ultron",children:[n.jsxs(QL,{"aria-hidden":"true",children:[n.jsx(Wm,{$show:Y,children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Wm,{$show:!Y,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:O?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),Y&&n.jsx(KL,{children:s?"Replying…":n.jsx(SR,{})})]}):null,h),ne<0&&d]})}function oh({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return n.jsxs(ZL,{children:[f&&n.jsxs(JL,{$animate:h,children:[e,i,s&&n.jsx(Ca,{time:s})]}),d&&n.jsx(eA,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function $u(){return[{icon:"clock",headline:"Reviewed your message"}]}function ZN({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(VL,{children:e.map((i,s)=>i.role==="operator"?n.jsx(Ev,{children:n.jsx(Pv,{children:n.jsx(zv,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(oh,{body:n.jsx(XN,{}),feedbackTime:sr($u()),showMark:!1},s):n.jsx(oh,{activity:n.jsx(Vl,{milestones:$u(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:sr($u()),showMark:!1},s))})}function XN(){return n.jsx(yv,{})}function yv(){return n.jsxs(to,{children:[n.jsxs(Nv,{children:[n.jsx(Lv,{"aria-hidden":"true",children:n.jsx(Bo,{size:16})}),n.jsx(Av,{children:"Workflow saved for future use."})]}),n.jsx(Tv,{children:n.jsx(ao,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(sc,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function JN({text:e,animate:o=!0}){return n.jsx(BL,{$animate:o,children:e})}function Bm({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Vh(e,0),l=Fh[e.id]??K2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(HL,{"data-tone":pc(e),children:[n.jsxs(wv,{children:[n.jsx(gc,{children:i}),o?n.jsx($r,{content:"Saved as workflow",children:n.jsx(WL,{"aria-label":"Saved as workflow",children:n.jsx(Bo,{size:18})})}):d&&n.jsx(bv,{children:n.jsx(tr,{size:"md",src:Pa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(xv,{tasks:l,interactive:!1}):null]})}function eL({messages:e,animate:o=!0}){return e.length?n.jsx(UL,{children:e.map((i,s)=>n.jsx(Ev,{children:n.jsx(Pv,{$animate:o,children:n.jsx(zv,{children:i})})},s))}):null}const tL=p.div`
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
`,nL=p.div`
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
`,rL=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Oe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,oL=p.div`
  padding: var(--space-4);
`,aL=p.div`
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
`,wv=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,bv=p.span`
  flex-shrink: 0;
  display: inline-flex;
`,iL=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,sL=p(Fe)`
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
`,lL=p.button`
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
`,kv=p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Cv=p.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,_v=p.span`
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
`,cL=p.div`
  overflow: hidden;
`,dL=p.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,uL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,jv=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,hL=p.div`
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
`,pL=p.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;p(jv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const fL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,mL=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,gL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,vL=p.div`
  display: flex;
  flex-direction: column;
`,xL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,yL=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${xL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wL=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,bL=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,kL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,CL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,_L=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,jL=p.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,SL=p.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,Sv=p(Fe)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,ML=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,$L=p.div`
  display: flex;
  flex-direction: column;
`,Gl="var(--space-8)",RL=p.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,NL=p.div`
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
  &[data-first]::before { top: calc(${Gl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Gl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,LL=p.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Gl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,AL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,TL=p.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Gl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Mv=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,EL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,IL=p.p`
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
`,gc=p.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,$v=ke`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ki=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${$v} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PL=p.div`
  animation: ${$v} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ao=p(Fe)`
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
    ${Ki} > & {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`,Rv=p(Fe)`
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
    ${Ki} > & {
      flex: 0 0 100%;
    }
  }
`,zL=p(Fe)`
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
`,OL=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,DL=p.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,to=p.div`
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
`,Nv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,Lv=p.span`
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
  ${to}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${to}:not([data-saved]):hover &::after { opacity: 1; }

  /* Mobile shell: there's no hover to reveal the aurora, so a live offer wears
     it outright — the badge is the card's one point of colour either way. The
     saved card still stands down below. */
  @media (max-width: 767px) {
    ${to}:not([data-saved]) & { color: var(--color-content-inverse); }
    ${to}:not([data-saved]) &::after { opacity: 1; }
  }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${to}[data-saved] & { color: var(--color-content-disabled); }
`,Av=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${to}[data-saved] & { color: var(--color-content-disabled); }
`,Tv=p(Ki)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,Hm=p(ao)`
  && {
    width: 44px;
    height: 44px;
    min-height: 44px;
    padding: 0;
  }
  align-self: center;
  flex-shrink: 0;
`,FL=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,BL=p.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${FL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HL=p.div`
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
  ${gc} { color: var(--color-content-disabled); }
  ${Mv} { color: var(--color-content-disabled); }
`,WL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,UL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,Ev=p.div`
  display: flex;
  justify-content: flex-end;
`,Gh=ke`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,Iv=ke`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,qL=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Pv=p.div`
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
  animation: ${Gh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zv=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,VL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;p.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const GL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${Iv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YL=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,KL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${YL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QL=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Wm=p.span`
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
`,ZL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${fc}
`,Ru=p.div`
  display: contents;
  ${fc}
`,XL=p.div`
  display: flex;
  flex-direction: column;
  ${fc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,JL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${qL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eA=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${Iv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Gh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Gh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const Um=72,qm=.58;function zn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Vm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),v=parseInt(f.length===3?f.split("").map(y=>y+y).join(""):f,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const tA=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function Yh({links:e=0,tone:o="aurora",cornerTone:i="default"}){const s=g.useRef(null),l=g.useRef(0),d=g.useRef(e);return d.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const h=s.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const v=Math.min(2,window.devicePixelRatio||1);let y=0,x=0;const w=()=>{y=h.clientWidth,x=h.clientHeight,h.width=Math.max(2,Math.round(y*v)),h.height=Math.max(2,Math.round(x*v)),f.setTransform(v,0,0,v,0,0)};w();const k=new ResizeObserver(w);k.observe(h);const _=Vm(f,h,"--color-bg-primary","255,255,255"),C=tA(_)<.5,R=Vm(f,h,"--color-content-tertiary",C?"148,163,184":"71,85,105"),N=Array.from({length:Um},(E,S)=>{const D=S%3===0,V=D?1-.5*Math.pow(zn(S*3.1),1.6):zn(S*3.1),q=D?.5*Math.pow(zn(S*5.7),1.6):zn(S*5.7);return{bx:V,by:q,vx:(zn(S*7.3)-.5)*.008,vy:(zn(S*9.9)-.5)*.008,wA:6+zn(S*4.7)*10,wS:.25+zn(S*6.1)*.5,wP:zn(S*8.2)*6.2832,r:.8+zn(S*2.3)*1.6,twS:.8+zn(S)*1.4,twP:zn(S*11.4)*6.2832}}),$=(E,S)=>{const D=((E.bx+E.vx*S)%1+1)%1,V=((E.by+E.vy*S)%1+1)%1,q=D-.5,B=Math.abs(q)*2,K=B<1e-4?1:(qm+(1-qm)*B)/B;return{x:(.5+q*K)*y+Math.cos(S*E.wS+E.wP)*E.wA,y:V*x+Math.sin(S*E.wS*.8+E.wP)*E.wA}},M=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),j=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),f.clearRect(0,0,y,x);const S=N.map(D=>$(D,E));for(let D=0;D<Um;D++){const V=N[D],q=.35+.65*(.5+.5*Math.sin(E*V.twS+V.twP)),B=.82+l.current*.18;f.fillStyle="rgba("+R+","+q*B*(C?.55:.42)+")",f.beginPath(),f.arc(S[D].x,S[D].y,V.r*(.7+.3*q),0,6.2832),f.fill()}};if(M)return l.current=d.current,j(1.15),()=>k.disconnect();j(1.15);let z=0;const L=performance.now(),T=E=>{j(1.15+(E-L)/1e3),z=requestAnimationFrame(T)};return z=requestAnimationFrame(T),()=>{cancelAnimationFrame(z),k.disconnect()}},[]),n.jsx(nA,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:i==="risk",children:n.jsx("canvas",{ref:s})})}const nA=p.div`
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
`,Fn=Oe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Ov=Oe`
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
`;const rA=p.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,ml=p.div`
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
`,Gm=.025,_i=560,ji=480,oA=260,aA=.08,iA=.18,sA=.06,lA=350,cA=9,gl=[168,197,224,250,285,330,390],dA=e=>{const o=gl.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(gl[s]+(gl[s+1]-gl[s])*(i-s))%360},Al=5,Ym=360,uA=560,hA=.055,pA=.03,Si=320,fA=.84,ah=Al+1,Tl=[];for(let e=0;e<ah;e++)for(let o=e+1;o<ah;o++)Tl.push([e,o]);const Km=(e,o)=>dA((e*cA+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),vl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Qm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),Nu=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function Kh({tone:e="color"}={}){const o=g.useRef(null),i=g.useRef(null),s=g.useRef([]),l=g.useRef([]),d=g.useRef([]);return g.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),f=o.current,v=i.current;if(!f||!v)return;const y=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,w=Array.from({length:Al},()=>({size:Ym+Math.random()*(uA-Ym),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));w.forEach((S,D)=>{const V=l.current[D];V&&(V.style.width=`${S.size.toFixed(0)}px`,V.style.height=`${S.size.toFixed(0)}px`)});const k=(S,D,V)=>{S.style.setProperty("--glow-ha",Km(D,y[0]+V).toFixed(1)),S.style.setProperty("--glow-hb",Km(D,y[1]+V*1.3).toFixed(1)),S.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(D*.17+y[2]*1.9+V)))%360).toFixed(1)),S.style.setProperty("--glow-cx",`${(35+14*Math.sin(D*.4+y[2]+V)).toFixed(1)}%`),S.style.setProperty("--glow-cy",`${(35+14*Math.cos(D*.31+y[3]+V)).toFixed(1)}%`)},_=(S,D,V)=>{const q=new Array(ah).fill(null);for(let B=0;B<Al;B++){const K=w[B],ee=l.current[B];if(!ee)continue;const ae=D*(.5+K.ax*(.68*Math.sin(S*K.sx1+K.px1)+.32*Math.sin(S*K.sx2+K.px2))),se=V*(.5+K.ay*(.68*Math.sin(S*K.sy1+K.py1)+.32*Math.sin(S*K.sy2+K.py2))),le=hA+pA*(.5+.5*Math.sin(S*K.bs+K.bp));ee.style.transform=`translate(${(ae-K.size/2).toFixed(1)}px, ${(se-K.size/2).toFixed(1)}px)`,ee.style.opacity=le.toFixed(3),ee.style.borderRadius=vl(S,K.mp),k(ee,S,K.cs),q[B+1]={x:ae,y:se,size:K.size,o:le}}return q},C=(S,D)=>{for(let V=0;V<Tl.length;V++){const q=d.current[V];if(!q)continue;const[B,K]=Tl[V],ee=D[B],ae=D[K],se=ee&&ae?Math.min(ee.o,ae.o):0;if(!ee||!ae||se<=.005){q.style.opacity="0";continue}const le=ae.x-ee.x,Z=ae.y-ee.y,F=Math.hypot(le,Z),Y=(ee.size+ae.size)/2*fA,A=Qm(1-F/Y);if(A<=.001){q.style.opacity="0";continue}const O=Math.max(.35,F*.9/Si),ne=.3+.4*A;q.style.transform=`translate(${((ee.x+ae.x)/2-Si/2).toFixed(1)}px, ${((ee.y+ae.y)/2-Si/2).toFixed(1)}px) rotate(${Math.atan2(Z,le).toFixed(3)}rad) scale(${O.toFixed(3)}, ${ne.toFixed(3)})`,q.style.opacity=(se*A).toFixed(3),q.style.borderRadius=vl(S,1.1*(V+1)),k(q,S,.23*(V+1))}};if(h){const D=_(2.4,f.clientWidth,f.clientHeight);C(2.4,D);return}let R=null,N=null,$=-1/0,M=0,j=0,z=0;const L=S=>{const D=f.getBoundingClientRect(),V=R===null;R=S.clientX-D.left,N=S.clientY-D.top,$=S.timeStamp,V&&(M=R,j=N)};window.addEventListener("pointermove",L,{passive:!0});let T=0;const E=S=>{T=requestAnimationFrame(E);const D=S/1e3,V=f.clientWidth,q=f.clientHeight,B=_(D,V,q);if(R!==null&&N!==null){M+=(R-M)*Gm,j+=(N-j)*Gm;const K=S-$<lA?iA:aA;z+=(K-z)*sA,v.style.transform=`translate(${M-_i/2}px, ${j-_i/2}px)`,v.style.opacity=z.toFixed(3),v.style.borderRadius=vl(D,0),k(v,D,0),B[0]={x:M,y:j,size:_i,o:z};for(let ee=0;ee<Nu.length;ee++){const ae=s.current[ee];if(!ae)continue;const{nx:se,ny:le}=Nu[ee],Z=se<0?M:se>0?V-M:le<0?j:q-j,F=Qm(1-Z/oA);if(F<=.001){ae.style.opacity="0";continue}const Y=se!==0?se<0?0:V:M,A=le!==0?le<0?0:q:j,O=ji*(.5-.22*F),ne=.55+.45*F;ae.style.transform=`translate(${Y+se*O-ji/2}px, ${A+le*O-ji/2}px) scale(${ne.toFixed(3)})`,ae.style.opacity=(z*F).toFixed(3),ae.style.borderRadius=vl(D,.9*(ee+1)),k(ae,D,.35*(ee+1))}}C(D,B)};return T=requestAnimationFrame(E),()=>{cancelAnimationFrame(T),window.removeEventListener("pointermove",L)}},[]),n.jsxs(rA,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[Tl.map((h,f)=>n.jsx(ml,{ref:v=>{d.current[f]=v},style:{width:Si,height:Si,opacity:0}},`bridge-${f}`)),Array.from({length:Al},(h,f)=>n.jsx(ml,{ref:v=>{l.current[f]=v},style:{opacity:0}},`ambient-${f}`)),Nu.map((h,f)=>n.jsx(ml,{ref:v=>{s.current[f]=v},style:{width:ji,height:ji,opacity:0}},f)),n.jsx(ml,{ref:i,style:{width:_i,height:_i,opacity:0}})]})}const Zm=.71,Dv=.24,Fv=Oe`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${Dv}em;
`,mA={"Coverage Recovery":no,"Fill Optimization":no,Recruiting:no,Users:no,Attendance:jn,"Attendance Recovery":jn,"Time Off":jn,Scheduling:jn,Compliance:Ui,Onboarding:zo,"Payroll Operations":Rg,Invoicing:io,Reporting:Uf,"Marketplace Optimization":Uf,Engagement:Ii,"Autonomous Operations":nc},gA=e=>mA[e]??nc,Xm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],vA=2800,xA=200,yA=6,wA=2200,Li=520;function bA({onDetectEvent:e,deckActive:o=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const h=g.useRef(new Set),[f,v]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const L=setInterval(()=>l(T=>(T+1)%Xm.length),vA);return()=>clearInterval(L)},[]);const x=Math.min(yA,fl.length),[w,k]=g.useState([]),_=g.useRef(0),C=g.useRef(fl.filter(L=>!L.risk)),R=g.useRef(fl.filter(L=>L.risk)),N=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),M=()=>{const L=N.current,T=R.current;if(T.length>0&&L.sinceRisk>=L.gap)return L.sinceRisk=0,L.gap=$(),T[L.risk++%T.length];L.sinceRisk+=1;const E=C.current;return E.length>0?E[L.routine++%E.length]:T[L.risk++%T.length]},j=L=>L.risk?"risk":Math.random()<.28?"action":"none",z=g.useRef(null);return g.useEffect(()=>{if(fl.length===0){k([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:$()},_.current=0;const L=Array.from({length:x},()=>{const S=M();return{key:_.current++,event:S,phase:"in",outcome:j(S),resolved:!0}});if(L.length>0){const S=L[L.length-1];S.resolved=!1,z.current={key:S.key,event:S.event,outcome:S.outcome}}else z.current=null;k(L),L.forEach(S=>{var D;S.resolved&&S.outcome!=="none"&&!h.current.has(S.event.id)&&(h.current.add(S.event.id),(D=d.current)==null||D.call(d,S.event))});const T=[],E=setInterval(()=>{var B;const S=M(),D=_.current++,V=j(S),q=z.current;q&&q.outcome==="risk"&&(v(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>v(!1),2800)),q&&q.outcome!=="none"&&(h.current.has(q.event.id)||(h.current.add(q.event.id),(B=d.current)==null||B.call(d,q.event))),z.current={key:D,event:S,outcome:V},k(K=>{const ee=K.filter(le=>le.phase!=="leaving"),ae=ee.length>=x?ee[0].key:null;return[...K.map(le=>le.key===ae?{...le,phase:"leaving"}:q&&le.key===q.key&&!le.resolved?{...le,resolved:!0}:le),{key:D,event:S,phase:"entering",outcome:V,resolved:!1}]}),T.push(setTimeout(()=>{k(K=>K.map(ee=>ee.key===D?{...ee,phase:"in"}:ee))},40)),T.push(setTimeout(()=>{k(K=>K.filter(ee=>ee.phase!=="leaving"))},Li))},wA);return()=>{clearInterval(E),T.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,o]),n.jsxs(kA,{children:[n.jsx(Yh,{links:0,tone:"neutral",cornerTone:f?"risk":"default"}),n.jsx(Kh,{tone:"neutral"}),n.jsx(CA,{$riskActive:f,"aria-hidden":"true"}),n.jsxs(_A,{children:[n.jsx(jA,{children:n.jsx(lt,{mark:"circle",size:xA,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),n.jsx(SA,{children:"Ultron"}),n.jsx(MA,{role:"status","aria-live":"polite",children:n.jsxs(RA,{children:[n.jsx(NA,{children:Xm[s]}),n.jsxs(LA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(TA,{children:i},"deck"):w.length>0&&n.jsx(AA,{"aria-label":"Live event feed",children:w.map(L=>{const T=gA(L.event.capability);return n.jsx(EA,{"data-phase":L.phase,"aria-hidden":L.phase==="leaving"||void 0,children:n.jsx(IA,{children:n.jsxs(PA,{"data-outcome":L.resolved?L.outcome:"pending",children:[n.jsxs(zA,{children:[n.jsx(OA,{"aria-hidden":"true",children:n.jsx(T,{size:16})}),n.jsxs(DA,{children:[n.jsx(UA,{children:L.event.capability}),n.jsx(qA,{children:L.event.title})]})]}),n.jsx(FA,{children:L.resolved?L.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(BA,{children:"Risk detected"})]}):L.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(WA,{children:"Action required"})]}):n.jsx(HA,{children:"No action needed"}):n.jsx(lt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},L.key)})},"feed")]})}const kA=p.div`
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
`,CA=p.div`
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
`,Qh=ke`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,_A=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Qh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jA=p.div`
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
`,SA=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Fv}
  color: var(--color-content-primary);
`,MA=p.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,$A=ke`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,RA=p.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${$A} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,NA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,Bv=ke`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,LA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Bv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,AA=p.div`
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
  animation: ${Qh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,TA=p.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Qh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EA=p.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Li}ms var(--ease-out, ease),
    opacity ${Li}ms var(--ease-out, ease),
    transform ${Li}ms var(--ease-out, ease);

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
    transition: opacity ${Li}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,IA=p.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,PA=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  /* Glass rather than a flat fill, so the backdrop and glow behind the feed
     refract through each row. */
  ${Fn}
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
`,zA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,OA=p.span`
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
`,DA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,FA=p.div`
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
    animation: ${Bv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const BA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,HA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,WA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,UA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,qA=p.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,VA=5e3,GA=5,El=320,YA=e=>e.status==="needs_approval"||e.status==="recommended";function KA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:v,onClose:y}){const x=mc(),[w]=g.useState(()=>e.filter(YA).map((S,D)=>({t:S,index:D})).sort((S,D)=>Na[S.t.severity]-Na[D.t.severity]||S.index-D.index).slice(0,GA).map(({t:S})=>S.id)),[k,_]=g.useState(1),[C,R]=g.useState(new Set),[N,$]=g.useState(new Set),M=g.useRef(new Map);g.useEffect(()=>{if(k>=w.length)return;const S=setTimeout(()=>_(D=>D+1),VA);return()=>clearTimeout(S)},[k,w.length]),g.useEffect(()=>{const S=D=>{D.key==="Escape"&&y()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[y]),g.useEffect(()=>{const S=M.current;return()=>{S.forEach(D=>clearTimeout(D))}},[]);const j=w.findIndex(S=>!C.has(S));g.useEffect(()=>{if(w.length>0&&j===-1){const S=setTimeout(y,260);return()=>clearTimeout(S)}},[j,w.length,y]);const z=Math.max(k,j+1);g.useEffect(()=>{w.slice(0,z).forEach(S=>v==null?void 0:v(S))},[z]);const L=(S,D)=>{$(q=>new Set(q).add(S.id));const V=setTimeout(()=>{$(q=>{const B=new Set(q);return B.delete(S.id),B}),R(q=>new Set(q).add(S.id)),M.current.delete(S.id),i(S.id,D)},El);M.current.set(S.id,V)},T=w.length-C.size,E=n.jsxs(ZA,{role:x?"dialog":"region","aria-modal":x||void 0,"aria-label":"New cases",$overlay:x,children:[n.jsxs(JA,{children:[n.jsx(nn,{children:"Needs your decision"}),n.jsx(Wo,{children:T}),n.jsx(eT,{}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:n.jsx(Do,{size:16})})]}),n.jsx(XA,{children:n.jsx(tT,{children:w.slice(0,z).map((S,D)=>{if(C.has(S))return null;const V=e.find(q=>q.id===S);return V?n.jsx(rT,{"data-exiting":N.has(S)||void 0,children:n.jsx(WN,{thread:V,stage:o[S]??0,expanded:D===j,onAction:(q,B)=>L(V,B),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(S),saved:f.includes(S)})},S):null})})})]});return x?uo.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(QA,{onClick:y,"aria-hidden":"true"}),E]}),document.body):E}const Hv=900,QA=p.div`
  position: fixed;
  inset: 0;
  z-index: ${Hv};
  background: color-mix(in srgb, var(--color-bg-primary) 55%, transparent);
  backdrop-filter: blur(18px) saturate(115%);
  -webkit-backdrop-filter: blur(18px) saturate(115%);
  animation: fadeIn var(--duration-base, 200ms) var(--ease-out, ease) both;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ZA=p.div`
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
    z-index: ${Hv+1};
    /* The screen's own margin, plus whatever the hardware needs on top of it —
       the layer covers the status bar and home indicator, so both insets are the
       deck's to respect. */
    padding:
      calc(var(--space-4) + env(safe-area-inset-top))
      var(--space-4)
      calc(var(--space-4) + env(safe-area-inset-bottom));
  `}
`,XA=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,JA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,eT=p.div`
  flex: 1;
`,tT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,nT=ke`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,rT=p.div`
  animation: ${nT} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${El}ms var(--ease-out, ease),
    transform ${El}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${El}ms linear;
    &[data-exiting] { transform: none; }
  }
`,oT={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Jm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},aT=["new","working","done"],iT=280;function sT({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:v,onCompleteRun:y,onRefinement:x,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:_,savedWorkflowIds:C,onSend:R,replyingIds:N,onStop:$,onClose:M,onDetectEvent:j,onRevealNew:z}){const[L,T]=g.useState(!1),E=()=>{L||(T(!0),window.setTimeout(()=>{T(!1),M()},iT))},[S,D]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){D(!1);return}const P=oe=>{if(oe.key!=="t"&&oe.key!=="T"||oe.metaKey||oe.ctrlKey||oe.altKey)return;const pe=oe.target instanceof Element?oe.target:null;pe&&pe.closest('input, textarea, [contenteditable="true"]')||D(de=>!de)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[i]);const V=(P,oe)=>(P.t.status==="analyzing"?1:0)-(oe.t.status==="analyzing"?1:0)||Na[P.t.severity]-Na[oe.t.severity]||P.index-oe.index,q=e.map((P,oe)=>({t:P,index:oe})).filter(({t:P})=>oT[i].includes(P.status)).sort(V).map(({t:P})=>P.id),[B,K]=g.useState(()=>h??null),ee=g.useRef({}),ae=g.useRef(null),se=P=>{var oe;P==="Other"&&((oe=ae.current)==null||oe.focus()),x(P)},le=g.useRef(null),Z=g.useRef(null),[F,Y]=g.useState(null),A=g.useRef(void 0);g.useEffect(()=>{var P;if(A.current===void 0){A.current=h;return}!h||h===A.current||(A.current=h,K(h),(P=ee.current[h])==null||P.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const O=aT.includes(i),ne=O?h&&q.includes(h)?h:q[0]??null:null;g.useEffect(()=>{var Ae;const P=le.current,oe=Z.current;if(!P||!oe)return;const de=((Ae=window.matchMedia)==null?void 0:Ae.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ve=160;let be=!0,Se=P.scrollHeight;const $e=()=>{be=P.scrollHeight-P.scrollTop-P.clientHeight<=ve};P.addEventListener("scroll",$e,{passive:!0});let Ie=0;const Ue=()=>{Ie=performance.now()};P.addEventListener("pointerdown",Ue,{passive:!0});const De=new ResizeObserver(()=>{const Ze=P.scrollHeight,Xe=performance.now()-Ie<500;Ze>Se+1&&be&&!Xe&&P.scrollTo({top:Ze,behavior:de}),Se=Ze});return De.observe(oe),()=>{P.removeEventListener("scroll",$e),P.removeEventListener("pointerdown",Ue),De.disconnect()}},[ne,i]),g.useEffect(()=>{if(!O||!ne)return;const P=le.current;if(!P)return;const oe=()=>P.scrollTo({top:P.scrollHeight,behavior:"auto"}),pe=requestAnimationFrame(oe),de=[80,240,480].map(ve=>window.setTimeout(oe,ve));return()=>{cancelAnimationFrame(pe),de.forEach(clearTimeout)}},[ne,O]);const U=ne?e.find(P=>P.id===ne)??null:null,J=!!U&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(U.status)||G2(U)),ce=J&&U?U:null,H=!(J&&U&&["needs_approval","recommended","unresolved","monitoring"].includes(U.status))||!!(U!=null&&U.analysisResult);return i==="live"?n.jsx(e0,{$static:!0,children:n.jsx(bA,{onDetectEvent:j,deckActive:S,deck:S?n.jsx(KA,{threads:e,stageById:o,onAction:v,onRefinement:se,onSaveWorkflow:w,onToggleSaveWorkflow:_,pendingWorkflowIds:k,savedWorkflowIds:C,onReveal:z,onClose:()=>D(!1)}):null})},"live"):n.jsxs(e0,{$closing:L,children:[n.jsx(dT,{ref:le,children:O?n.jsx(t0,{ref:Z,children:ne===null?n.jsx(n0,{role:"status",children:Jm[i]}):(()=>{const P=e.find($e=>$e.id===ne);if(!P)return null;const oe=P.status==="analyzing",pe=P.status==="resolved"||P.status==="auto_resolved",de=P.status==="in_progress",ve=P.status==="needs_approval"||P.status==="recommended",be=P.status==="monitoring",Se=P.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(mT,{children:n.jsx(Dm,{thread:P,stage:o[P.id]??0,expanded:de?!1:H,detachActionable:J,detachAnalyzing:oe,detachTrail:pe||Se,onToggle:()=>{},onClose:E,onDecide:f,onAction:v,onRefinement:se,onSaveWorkflow:w},P.id)}),(oe||ve||de||pe||be||Se)&&n.jsx(QN,{thread:P,outbound:l[P.id]??[],chat:d[P.id]??[],replying:N.includes(P.id),analyzing:oe,footSlot:F,onCompleteRun:()=>y(P.id),saveWorkflowFlagged:k.includes(P.id)||C.includes(P.id),actionCard:ce&&ce.id===P.id?n.jsx(vv,{thread:ce,stage:o[ce.id]??0,onAction:v,onRefinement:se,onSaveWorkflow:w,saveIntent:k.includes(ce.id),onToggleSaveWorkflow:_,saved:C.includes(ce.id),savedConversationally:(d[ce.id]??[]).some($e=>$e.kind==="workflow_saved"),onSend:$e=>R(ce.id,$e),replying:N.includes(ce.id),onStop:()=>$(ce.id)},`action-${ce.id}`):void 0},P.id)]})})()}):n.jsx(t0,{ref:Z,children:q.length===0?n.jsx(n0,{role:"status",children:Jm[i]}):q.map(P=>{const oe=e.find(pe=>pe.id===P);return oe?n.jsx(fT,{ref:pe=>{ee.current[P]=pe},children:n.jsx(Dm,{thread:oe,stage:o[P]??0,expanded:B===P,onToggle:()=>K(pe=>pe===P?null:P),onDecide:f,onAction:v,onRefinement:x,onSaveWorkflow:w})},P):null})})}),O&&ne&&U&&n.jsx(uT,{children:n.jsxs(hT,{children:[n.jsx(pT,{ref:Y}),U.status==="analyzing"&&!s.includes(U.id)&&n.jsx(GN,{thread:U,onDecide:f}),n.jsx(mv,{ref:ae,onSend:P=>R(ne,P),working:N.includes(ne),onStop:()=>$(ne),placeholder:WM(U.status,N.includes(ne))},`composer-${ne}`)]})})]},"feed")}const lT=ke`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,cT=ke`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,e0=p.div`
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
    animation: ${cT} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Oe`
    animation: ${lT} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dT=p.div`
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
`,uT=p.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);

  /* Mobile shell: the dock's screen-edge insets follow the scroller down to
     12px; the top keeps its full gap — it separates dock from feed, not dock
     from screen. */
  @media (max-width: 767px) {
    padding: var(--space-6) var(--space-3) var(--space-3);
  }
`,hT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,pT=p.div`
  display: flex;
  &:empty { display: none; }
`,t0=p.div`
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
`,fT=p.div`
  scroll-margin-top: var(--space-5);
`,mT=p.div`
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
`,n0=p.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function gT({messages:e,replying:o,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,f=e.length===0,v=()=>{const y=s.trim();!y||o||(i(y),l(""))};return n.jsxs(vT,{children:[n.jsx(xT,{children:f?n.jsxs(yT,{children:[n.jsx(wT,{"aria-hidden":"true",children:n.jsx(lt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(bT,{children:"New page"}),n.jsx(kT,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(CT,{children:[e.map((y,x)=>n.jsx(r0,{"data-from":y.role,children:n.jsx(_T,{"data-from":y.role,children:y.text})},x)),o&&n.jsx(r0,{"data-from":"ultron",children:n.jsxs(ST,{"aria-label":"Ultron is replying",children:[n.jsx(Lu,{}),n.jsx(Lu,{}),n.jsx(Lu,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(MT,{children:n.jsxs($T,{onSubmit:y=>{y.preventDefault(),v()},children:[n.jsx(RT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),v())}}),n.jsx(NT,{children:n.jsx(Ta,{state:h?"ready":"disabled-invalid",onSend:v})})]})})]})}const vT=p.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,xT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,yT=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,wT=p.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,bT=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,kT=p.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,CT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,r0=p.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,_T=p.div`
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
`,jT=ke`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,ST=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Lu=p.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${jT} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MT=p.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,$T=p.form`
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
`,RT=p.textarea`
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
`,NT=p.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,LT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function o0(e,o){const i=LT[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const AT=24,a0=.25,TT=Dv-.03;function Zh({className:e}){return n.jsxs(ET,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(IT,{children:n.jsx(lt,{mark:"circle",size:AT,tone:"auto",state:"active"})}),"n"]})}const ET=p.span`
  ${Fv}
`,IT=p.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${Zm}em;
  height: ${Zm}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${a0}em;
  margin-right: ${a0+TT}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function PT({onNew:e}){return n.jsxs(zT,{children:[n.jsx(OT,{}),n.jsx(DT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(ic,{size:16})})]})}const zT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,OT=p(Zh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,DT=p.span`
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
`,FT=45;function BT({text:e,className:o}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},FT);return()=>clearInterval(f)},[e]);const l=i>=e.length;return n.jsxs(HT,{className:o,children:[e.slice(0,i),!l&&n.jsx(UT,{"aria-hidden":"true",children:"|"})]})}const HT=p.span`
  white-space: nowrap;
`,WT=ke`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,UT=p.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${WT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Au=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function qT(){const e=g.useMemo(()=>["All",...Array.from(new Set(Au.map(l=>l.tag)))],[]),[o,i]=g.useState("All"),s=o==="All"?Au:Au.filter(l=>l.tag===o);return n.jsx(VT,{children:n.jsxs(GT,{children:[n.jsxs(YT,{children:[n.jsx(lt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(KT,{children:[n.jsx(QT,{children:"Memory"}),n.jsx(ZT,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(XT,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(JT,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(eE,{children:s.map((l,d)=>n.jsx(tE,{children:n.jsxs(nE,{children:[n.jsx(rE,{children:l.title}),n.jsx(oE,{children:l.detail})]})},d))})]})})}const VT=p.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,GT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,YT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,KT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,QT=p.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,ZT=p.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,XT=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,JT=p.button`
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
`,eE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,tE=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,nE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rE=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,oE=p.span`
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
`;const ih=[{id:"employees",label:"Employees",icon:n.jsx(no,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(jn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(wh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(zo,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Ui,{size:16})}];p.div`
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
`;function aE({collectionId:e}){const o=ih.find(i=>i.id===e)??ih[0];return n.jsxs(iE,{children:[n.jsxs(sE,{children:[n.jsx(lE,{children:o.label}),n.jsx(Wo,{children:"Account database"})]}),n.jsxs(cE,{role:"status",children:[n.jsx(dE,{"aria-hidden":"true",children:n.jsx(jg,{size:24})}),n.jsxs(uE,{children:[o.label," — demo stub"]}),n.jsxs(hE,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const iE=p.div`
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
`,sE=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,lE=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,cE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,dE=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,uE=p.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,hE=p.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function Wv({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const pE="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",fE="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",mE="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",gE="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",vE="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",xE="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",yE="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",wE=560,Uv=320,Sr="cubic-bezier(0.22, 1, 0.36, 1)",qv=140,Vv={landing:0,workplace:20,loading:40,questions:58},Mi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:Mg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:zg,title:"1099",caption:"Independent contractors."},{id:"both",icon:$g,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:jn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:Rg,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:Pg,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Ei,title:"One location",caption:"A single site."},{id:"multi",icon:kh,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:wh,title:"Client sites",caption:"Out at client locations."}]}];function bE({onComplete:e}){const[o,i]=g.useState("landing"),[s,l]=g.useState({}),[d,h]=g.useState(!1),[f,v]=g.useState(!1),y=vc(),x=g.useRef(null),w=g.useCallback(L=>{x.current===null&&(v(!0),x.current=window.setTimeout(()=>{L(),v(!1),x.current=null},y?0:Uv))},[y]);g.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),_=()=>w(()=>i("workplace")),C=L=>{l(T=>({...T,...L})),h(!0),w(()=>i("loading"))},R=L=>{const T={...s,...L};if(l(T),T.companyWebsite){e(T);return}w(()=>i("questions"))},N=L=>e({...s,...L}),$=d?1:o==="landing"?0:.4,[M,j]=g.useState(!1),z=M;return n.jsxs(YE,{children:[n.jsx(Yh,{links:$}),n.jsx(Kh,{}),n.jsx(KE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(Wv,{size:22})}),n.jsx(QE,{children:n.jsxs(ZE,{children:[o!=="landing"&&n.jsx(XE,{children:n.jsx(Gv,{children:n.jsx(lt,{mark:z?"lines":"magnetic",size:qv,tone:"auto",state:"active",motionSpeed:z?1.7:1,cellCount:Vv[o],"aria-label":"Ultron"})})}),n.jsxs(eI,{$exiting:f,children:[o==="landing"&&n.jsx(LE,{onNext:_}),o==="workplace"&&n.jsx(xc,{children:n.jsx(EE,{onAnswer:C})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(PE,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:R,onProcessingChange:j}),o==="questions"&&n.jsx(UE,{onComplete:N})]})]})})]})}const kE="Lead the work that matters.",CE="Show us your company and we'll set up the work.",_E=41e3,i0=[{name:"Levi's Stadium",src:pE},{name:"ProCare HR",src:fE},{name:"Florida Panthers",src:mE},{name:"Express Healthcare",src:gE},{name:"ModSquad",src:vE},{name:"Titan Medical Group",src:xE},{name:"United Staffing Solutions",src:yE}],s0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],jE=6e3;function SE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function ME(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function $E(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const RE=[{id:"google",label:"Continue with Google",mark:SE},{id:"microsoft",label:"Continue with Microsoft",mark:ME},{id:"apple",label:"Continue with Apple",mark:$E}];function NE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function LE({onNext:e}){const[o,i]=g.useState(""),[s,l]=g.useState(null),d=g.useRef(null);return g.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(nI,{children:[n.jsx(oI,{children:n.jsxs(aI,{children:[n.jsx(Gv,{children:n.jsx(lt,{mark:"magnetic",size:qv,tone:"auto",state:"active",cellCount:Vv.landing,"aria-label":"Ultron"})}),n.jsx(PI,{children:kE}),n.jsxs(iI,{children:[n.jsx(zI,{children:CE}),n.jsxs(sI,{"aria-label":"Get started",children:[n.jsx(lI,{children:RE.map(h=>{const f=h.mark;return n.jsx(cI,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(f,{}),onClick:e,children:h.label},h.id)})}),n.jsx(dI,{"aria-hidden":"true",children:n.jsx(uI,{children:"or start with email"})}),n.jsxs(hI,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||NE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx($r,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(fI,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(pI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(mI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(rI,{"aria-hidden":"true"}),n.jsx(AE,{})]})}function AE(){const[e,o]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%s0.length),jE);return()=>clearInterval(s)},[]);const i=s0[e];return n.jsx(gI,{children:n.jsxs(vI,{children:[n.jsx(TE,{}),n.jsxs(NI,{children:[n.jsx(LI,{children:`“${i.quote}”`}),n.jsxs(AI,{children:[n.jsx(tr,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(TI,{children:[n.jsx(EI,{children:i.name}),n.jsx(II,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(jI,{children:[n.jsx(SI,{children:"Trusted by frontline operators"}),n.jsxs($I,{"aria-label":"Operators using Teambridge",children:[n.jsx(l0,{children:i0.map(s=>n.jsx(c0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(l0,{"aria-hidden":"true",children:i0.map(s=>n.jsx(c0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function TE(){const e=GE(_E,1600);return n.jsxs(xI,{children:[n.jsxs(yI,{children:[n.jsx(bI,{"aria-hidden":"true"}),n.jsx(kI,{children:"Ultron Index · Live"})]}),n.jsx(CI,{children:e.toLocaleString("en-US")}),n.jsx(_I,{children:"pieces of work Ultron performed this week"})]})}function EE({onAnswer:e}){const[o,i]=g.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(qE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(yc,{children:"Where do you work?"}),n.jsx(FI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(Qv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(Zv,{children:[n.jsx($P,{"aria-hidden":"true",children:n.jsx(Ch,{size:18})}),n.jsx(Xv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(Jv,{children:n.jsx(Ta,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(RP,{children:n.jsx(ex,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Tu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],IE=820;function PE({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(OE,{website:e,onDone:i,onProcessingChange:s}):n.jsx(WE,{failedWebsite:o,onDone:i})}const zE=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function OE({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=VE(e),d=Tu.length,[h,f]=g.useState(1),[v,y]=g.useState(!1),x=g.useRef(null),w=vc();g.useEffect(()=>{if(!v)return;const N=window.requestAnimationFrame(()=>{const $=x.current,M=$==null?void 0:$.closest("main");M?M.scrollTo({top:M.scrollHeight,behavior:w?"auto":"smooth"}):$==null||$.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame(N)},[v,w]),g.useEffect(()=>{i==null||i(!v)},[v,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=g.useMemo(()=>NM(e),[e]),_=g.useMemo(()=>zE.reduce((N,$)=>N+k[$].length,0),[k]),C=g.useCallback(()=>{v?o({}):h>=d?y(!0):f(N=>Math.min(N+1,d))},[h,v,d,o]);g.useEffect(()=>{const N=$=>{$.key.toLowerCase()==="t"&&($.preventDefault(),C())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[C]);const R=Tu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(xc,{$wide:!0,onClick:()=>{v||C()},children:[n.jsx(yc,{children:v?"Nearly there! Your free account is taking shape.":`${R}…`},v?"done":R),n.jsx(wc,{children:v?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(YI,{role:"status","aria-live":"polite",$complete:v,children:[n.jsxs(XI,{$running:!v,children:[n.jsx(Ch,{size:14}),l,v&&n.jsxs(n.Fragment,{children:[n.jsx(JI,{"aria-hidden":"true",children:"·"}),n.jsxs(eP,{children:[n.jsx(gn,{size:13})," read ",_," signals"]})]})]}),n.jsx(KI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":v?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:v,children:Tu.map((N,$)=>{const M=v||$+1<h?"done":$+1===h?"working":"pending";return n.jsx(QI,{"data-status":M,children:M!=="pending"&&n.jsx(ZI,{$working:M==="working"})},N)})})]}),n.jsx(BE,{learned:k,host:l,completed:v?d:h-1,done:v}),v&&n.jsxs(n.Fragment,{children:[n.jsx(gP,{children:n.jsx(vP,{children:"Consider it handled."})}),n.jsx(yP,{children:n.jsx(Fe,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(yg,{size:16}),children:"Looks good, continue"})}),n.jsx(wP,{children:n.jsx(ex,{type:"button",onClick:()=>{f(1),y(!1)},children:"Start over"})}),n.jsx(bP,{ref:x,"aria-hidden":"true"})]})]})})}const DE={"Healthcare / Clinical Staffing":_h,"Skilled Trades / Construction Labor":fh,"Warehouse / Logistics & Light Industrial":bh,"Security / Guarding Services":rc,"Home Care / In-Home Support":Eg,"Agriculture / Seasonal Labor":yh,"Hospitality / Events Staffing":ac,"Call Center / BPO Staffing":Ii},FE={Business:{icon:Ei,color:"blue"},Workforce:{icon:no,color:"purple"},Operations:{icon:Dg,color:"orange"},Compliance:{icon:Ui,color:"green"}};function BE({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,f]=g.useState(!1),v=DE[e.workforce_type]??kh;return n.jsxs(nP,{children:[n.jsxs(rP,{children:[n.jsx(oP,{children:n.jsxs(iP,{children:[n.jsx(sP,{"aria-hidden":"true",children:d?n.jsx(Gt,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(v,{size:20}),n.jsx(lP,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:y=>f(y.currentTarget.naturalWidth>=32),onError:()=>f(!1)})]})}),n.jsxs(cP,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Gt,{$w:"240px",$h:"1em"}),n.jsx(Gt,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(dP,{children:e.workforce_type}),n.jsx(uP,{children:l.name})]}),n.jsx(hP,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Gt,{$w:"110px",$h:"0.9em"}),n.jsx(Gt,{$w:"150px",$h:"0.9em"}),n.jsx(Gt,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Eu,{children:[n.jsx(jn,{size:14}),n.jsxs(Iu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(Eu,{children:[n.jsx(Ei,{size:14}),n.jsxs(Iu,{children:["Part of ",l.parent]})]}),n.jsxs(Eu,{children:[n.jsx(ph,{size:14}),n.jsx(Iu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((y,x)=>{const w=i<2,{icon:k,color:_}=FE[y.label]??{icon:Ei,color:"neutral"};return n.jsx(aP,{style:{"--group-i":w?x+1:x},children:w?n.jsxs(n.Fragment,{children:[n.jsx(d0,{"aria-hidden":"true",children:n.jsx(Gt,{$w:"20px",$h:"20px",$round:!0})}),n.jsxs(u0,{children:[n.jsx(h0,{as:"div",children:n.jsx(Gt,{$w:"112px",$h:"0.95em"})}),n.jsxs(p0,{children:[n.jsx(Gt,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Gt,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Gt,{$w:"64px",$h:"20px",$round:!0})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(d0,{"aria-hidden":"true",children:n.jsx(k,{size:20})}),n.jsxs(u0,{children:[n.jsx(h0,{children:y.label}),n.jsx(p0,{children:y.tags.map(C=>n.jsx(Jn,{size:"sm",variant:"subtle",color:_,children:C},C))})]})]})},`${y.label}-${w?"loading":"ready"}`)})]}),n.jsx(pP,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(f0,{children:[n.jsx(Og,{size:16}),"Configured for you"]}),n.jsx(fP,{children:e.configured.map(y=>n.jsxs(mP,{children:[n.jsx(rn,{size:16}),y]},y))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(f0,{as:"div",children:[n.jsx(Gt,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Gt,{$w:"132px",$h:"0.95em"})]}),n.jsxs(tP,{children:[n.jsx(Gt,{$h:"0.85em",$w:"84%"}),n.jsx(Gt,{$h:"0.85em",$w:"72%"}),n.jsx(Gt,{$h:"0.85em",$w:"78%"}),n.jsx(Gt,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const HE=[{icon:_h,label:"Travel nurses"},{icon:ac,label:"Event staff"},{icon:rc,label:"Security guards"},{icon:bh,label:"Warehouse temps"}];function WE({failedWebsite:e,onDone:o}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(xc,{children:[e&&n.jsx(xP,{children:"No problem — let's set it up together."}),n.jsx(yc,{children:"What workforce do you need help with?"}),n.jsx(wc,{children:"Say it in your own words — or grab one of these."}),n.jsx(BI,{children:HE.map(({icon:h,label:f})=>n.jsxs(HI,{type:"button",onClick:()=>o({workforceType:f}),children:[n.jsx(h,{size:16}),f]},f))}),n.jsx(Qv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(Zv,{children:[n.jsx(Xv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(Jv,{children:n.jsx(Ta,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function UE({onComplete:e}){const o=vc(),[i,s]=g.useState(0),l=g.useRef({}),d=Mi[i],h=f=>{l.current={...l.current,[d.key]:f.title};const v=i+1;v>=Mi.length?e(l.current):s(v)};return n.jsxs(xc,{children:[n.jsx(kP,{role:"progressbar","aria-valuemin":1,"aria-valuemax":Mi.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${Mi.length}`,children:Mi.map((f,v)=>n.jsx(CP,{"data-filled":v<=i||void 0},f.key))}),n.jsx(yc,{children:d.prompt}),n.jsx(wc,{children:d.sub}),n.jsx(_P,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,v)=>{const y=f.icon;return n.jsxs(jP,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${v*70}ms`},onClick:()=>h(f),children:[n.jsx(Yv,{"aria-hidden":"true",children:n.jsx(y,{size:20})}),n.jsxs(SP,{children:[n.jsx(WI,{children:f.title}),n.jsx(UI,{children:f.caption})]})]},f.id)})})]},d.key)}function qE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function VE(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function GE(e,o){const i=vc(),[s,l]=g.useState(i?e:0);return g.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=v=>{h===null&&(h=v);const y=Math.min(1,(v-h)/o),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function vc(){const[e,o]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const YE=p.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,KE=p.button`
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
`,QE=p.main`
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
`,ZE=p.div`
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
`,XE=p.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Gv=p.span`
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
`,JE=ke`
  from { opacity: 1; }
  to   { opacity: 0; }
`,eI=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Oe`
      animation: ${JE} ${Uv}ms var(--ease-in) forwards;
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
`,tI=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,nI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${tI} 560ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rI=p.div`
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
`,oI=p.div`
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
`,aI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Xh=ke`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,iI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Xh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sI=p.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,lI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,cI=p(Fe)`
  && {
    width: 100%;
    ${Fn}
  }
`,dI=p.div`
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
`,uI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,hI=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,pI=p(Fe)`
  && {
    width: 100%;
  }
`,fI=p(t2)`
  && [class*='shell'] {
    ${Fn}
  }
  && input {
    background: transparent;
  }
`,mI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,gI=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Xh} var(--duration-slow) var(--ease-out) both;

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
`,vI=p.div`
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
`,xI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,yI=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,wI=ke`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,bI=p.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${wI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,CI=p.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,_I=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,jI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,SI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,MI=ke`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,$I=p.div`
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
`,l0=p.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${MI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,c0=p.img`
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
`,RI=ke`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,NI=p.figure`
  ${Fn}
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
  animation: ${RI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,LI=p.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,AI=p.figcaption`
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
`,TI=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,EI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,II=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,PI=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Xh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,zI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,OI=ke`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,xc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${OI} ${wE}ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yc=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,wc=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,DI=ke`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,FI=p(wc)`
  animation: ${DI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,BI=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,HI=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Fn}
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
    ${Ov}
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
`,Yv=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,WI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,UI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Kv=ke`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,qI=ke`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,VI=ke`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,GI=ke`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,YI=p.div`
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
`,KI=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Oe`
    & > * > * {
      animation: ${GI} 900ms ${Sr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,QI=p.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,ZI=p.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Oe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${VI} ${IE+380}ms ${Sr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,XI=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,JI=p.span`
  color: var(--color-content-tertiary);
`,eP=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,Gt=p.span`
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
  animation: ${qI} 2.2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 7%, transparent);
    animation: none;
  }
`,tP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,nP=p.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Qi=Oe`
  animation: ${Kv} var(--duration-base) ${Sr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rP=p.div`
  ${Fn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Qi}
`,oP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Qi}
`,aP=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Qi}
`,d0=p.span`
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
`,u0=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`,iP=p.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,sP=p.span`
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
`,lP=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,cP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,dP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,uP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,hP=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,Eu=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Iu=p.span`
  color: var(--color-content-primary);
`,pP=p.div`
  ${Fn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Qi}
`,h0=p.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,p0=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,f0=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,fP=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,mP=p.li`
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
`,gP=p.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Qi}
`,vP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,xP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,yP=p.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,wP=p.div`
  display: flex;
  justify-content: center;
`,bP=p.div`
  width: 100%;
  height: 0;
`,kP=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,CP=p.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,_P=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,jP=p.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Fn}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Kv} var(--duration-base) ${Sr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Yv} {
    margin-bottom: 0;
  }

  &:hover {
    ${Ov}
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
`,SP=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Qv=p.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Fn}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Zv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,MP=ke`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,$P=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${MP} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xv=p.textarea`
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
`,Jv=p(xh)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,RP=p.div`
  margin-top: var(--space-3);
`,ex=p.button`
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
`;function NP({onEnterApp:e}){return n.jsx(bE,{onComplete:o=>e==null?void 0:e(o)})}const LP="48px",AP="240px",m0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",TP=p.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?AP:LP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Oe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Oe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,EP=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,IP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,PP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,zP=p.button`
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
`,OP=p.div`
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
`,DP=p.span`
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
`,g0=p.div`
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
`,Pu=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,FP="var(--gradient-ai)",tx=p.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Oe`
      background: var(--color-bg-primary, white);
      box-shadow: ${m0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Oe`
      background: ${FP};
      box-shadow: ${m0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,nx=p.button`
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
`,rx=p.span`
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
`,ox=p.div`
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
`,BP=p.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,zu=p.hr`
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
`;const HP=p.button`
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
`,WP=p.div`
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
`,UP=p.span`
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
`;function Ou({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(tx,{$isActive:l,$isAi:s,children:n.jsxs(nx,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(ox,{children:[e.hasUnread&&n.jsx(BP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(rx,{children:e.label}),o&&i&&n.jsx(Wo,{variant:"primary",children:"New"})]})})}function qP({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}){const[x,w]=g.useState(!1);return n.jsx(TP,{$isExpanded:x,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(EP,{$isExpanded:x,children:[n.jsxs(IP,{children:[n.jsxs(zP,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[n.jsx(OP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&n.jsxs(n.Fragment,{children:[n.jsx(DP,{children:s.name}),n.jsx(g0,{children:n.jsx(hm,{})})]})]}),n.jsx(Pu,{children:e.map(k=>n.jsx(Ou,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(zu,{}),n.jsx(Pu,{children:o.map(k=>n.jsx(Ou,{item:k,isExpanded:x,showNewBadge:k.id===v,isAi:k.id===y},k.id))})]})]}),n.jsxs(PP,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(zu,{}),n.jsx(Pu,{children:i.map(k=>n.jsx(Ou,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),n.jsx(zu,{}),n.jsx(tx,{$isActive:!1,children:n.jsxs(nx,{$isActive:!1,onClick:f,"aria-label":"Settings",title:x?void 0:"Settings",children:[n.jsx(ox,{children:n.jsx(Z2,{})}),x&&n.jsx(rx,{children:"Settings"})]})}),n.jsxs(HP,{$isExpanded:x,onClick:h,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[n.jsx(WP,{$color:l.avatarColor,children:l.initials}),x&&n.jsxs(n.Fragment,{children:[n.jsx(UP,{children:l.name}),n.jsx(g0,{children:n.jsx(hm,{})})]})]})]})]})})}const VP=270,GP=p.nav`
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
`,YP=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,KP=p.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,QP=p.h2`
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
`,ZP=p.div`
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
`,XP=p.button`
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
`,JP=p.div`
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
`,ez=p.button`
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
`;const tz=p.span`
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
`,nz=p.div`
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
`,rz=ke`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,oz=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${rz} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,ax=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,az=ke`
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
`,iz=ke`
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
`,sz=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,lz=ke`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,cz=ke`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,sh=420,dz=180,uz=sh-60,hz=p.button`
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
  animation: ${ax} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pz=p.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,fz=p.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${az} 2.4s ease-in-out infinite;

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
    animation: ${iz} 2.4s ease-out infinite;
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
`,mz=p.div`
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
  font-family: ${sz};
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
`,ix=p.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${lz} ${sh}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${dz}ms;
    animation-delay: ${sh-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,v0=p.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${cz} 420ms ${uz}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${ax} 200ms both;
    transform: none;
  }
`,x0=p.button`
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
`,gz=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Oe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,vz=p.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,xz=p.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,yz=p.div`
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
`,wz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,bz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,kz=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,sx=p.div`
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
`;function Cz(){return n.jsxs(ix,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function _z(){return n.jsxs(ix,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function lx({prompt:e,onDismiss:o,placement:i="right",children:s}){const l=g.useRef(null),[d,h]=g.useState(null);return g.useLayoutEffect(()=>{const f=l.current;if(!f)return;let v=null;const y=()=>{const C=(f.firstElementChild??f).getBoundingClientRect();h({left:C.left,top:C.top,width:C.width,height:C.height})},x=performance.now(),w=_=>{y(),_-x<360?v=window.requestAnimationFrame(w):v=null};v=window.requestAnimationFrame(w);const k=new ResizeObserver(y);return k.observe(f),window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{v!==null&&window.cancelAnimationFrame(v),k.disconnect(),window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(pz,{ref:l,"aria-hidden":"true",children:s}),d&&uo.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(hz,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(fz,{$mobile:i==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(mz,{$placement:i,role:"status","aria-live":"polite",style:i==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:i==="above"?n.jsxs(n.Fragment,{children:[n.jsx(v0,{children:e}),n.jsx(_z,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(Cz,{}),n.jsx(v0,{children:e})]})})]}),document.body)]})}function cx(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function jz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Jh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function Sz({item:e}){return n.jsx(Sn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(sx,{children:e.icon??n.jsx(cx,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Jh})}function Mz({group:e}){const[o,i]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-f.length;return n.jsxs(gz,{$outlined:e.outlined,children:[n.jsxs(ez,{onClick:()=>i(y=>!y),"aria-expanded":o,children:[n.jsx(nz,{children:o?n.jsx(Dn,{size:16}):n.jsx(Mn,{size:16})}),n.jsx(tz,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(oz,{children:[f.map(y=>{const x=n.jsx(Sn,{label:n.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:n.jsx(sx,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:Jh});return y.spotlightPrompt?n.jsx(lx,{prompt:y.spotlightPrompt,onDismiss:y.spotlightDismiss,children:x},y.id):n.jsx(g.Fragment,{children:x},y.id)}),v>0&&n.jsxs(x0,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(x0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function $z({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:v,headerSlot:y,bodyContent:x,width:w=VP,onWidthChange:k,minWidth:_=220,maxWidth:C=520}){const R=x!==void 0,N=g.useRef(null),[$,M]=g.useState(!1);return g.useEffect(()=>{if(!$||!k)return;const j=N.current;if(!j)return;const z=j.getBoundingClientRect().left,L=S=>{const D=Math.min(C,Math.max(_,S.clientX-z));k(D)},T=()=>M(!1);window.addEventListener("mousemove",L),window.addEventListener("mouseup",T);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",T),document.body.style.userSelect=E,document.body.style.cursor=""}},[$,k,_,C]),n.jsxs(GP,{ref:N,$isVisible:o,$width:w,$isResizing:$,"aria-label":"Secondary navigation",children:[n.jsxs(YP,{children:[(e||y)&&n.jsxs(KP,{children:[n.jsx(QP,{children:e}),y]}),d&&!R&&n.jsxs(ZP,{children:[n.jsx(e2,{size:"sm",placeholder:"Search...",value:h,onChange:j=>f==null?void 0:f(j.target.value)}),n.jsx(XP,{onClick:v,"aria-label":"Filter",children:n.jsx(jz,{})})]})]}),R?x:n.jsxs(JP,{children:[s,i.map(j=>j.type==="single"?n.jsx(Sz,{item:j.item},j.item.id):j.type==="group"?n.jsx(Mz,{group:j.group},j.group.id):j.type==="divider"?n.jsx(bz,{},j.id):n.jsx(vz,{children:j.label.label},j.label.id))]}),l.length>0&&n.jsxs(xz,{children:[n.jsx(wz,{}),l.map(j=>n.jsx(Sn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:n.jsx(kz,{children:j.icon??n.jsx(cx,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:Jh},j.id))]}),k&&o&&n.jsx(yz,{$isResizing:$,onMouseDown:j=>{j.preventDefault(),M(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const Rz=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,Nz=p.div`
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
`,dx=p.div`
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
`,Lz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Az=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function Tz(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function y0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function w0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Ez(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Iz({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const v=o.filter(w=>w.variant==="secondary"),y=o.filter(w=>w.variant==="primary"),x=qh("(prefers-color-scheme: dark)");return n.jsxs(Rz,{$noBorder:l,children:[n.jsx(Nz,{children:typeof e=="string"?n.jsx(dx,{children:e}):e}),n.jsxs(Lz,{children:[n.jsxs(Az,{children:[n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:n.jsx(Tz,{})}),v.map(w=>n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(w0,{}),trailingArtwork:n.jsx(y0,{}),onClick:w.onClick,children:w.label},w.id)),y.map(w=>n.jsx(Fe,{variant:"primary",size:"sm",leadingArtwork:n.jsx(w0,{}),trailingArtwork:n.jsx(y0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(Ez,{})}),s&&n.jsx(lg,{dark:x,onClick:h,"aria-label":"Ponder AI"})]})]})}const Pz=p.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,zz=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,Oz=p.div`
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
`,Dz=p.main`
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
`,b0="tb:secondary-nav-width",k0=270,C0=220,_0=520;function Fz({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y,secNavHeading:x,menuEntries:w,menuHeader:k,pageEntries:_,showSearch:C,searchValue:R,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:j,heading:z,actions:L,showActivityButton:T,showPonderButton:E,noBorder:S,onActivityClick:D,onPonderClick:V,onDotsClick:q,children:B,showSecondaryNav:K=!0,showTopNav:ee=!0}){const[ae,se]=g.useState(()=>{if(typeof window>"u")return k0;const le=window.localStorage.getItem(b0),Z=le?parseInt(le,10):NaN;return Number.isFinite(Z)?Math.min(_0,Math.max(C0,Z)):k0});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(b0,String(ae))},[ae]),n.jsxs(Pz,{children:[n.jsx(qP,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:y}),n.jsxs(zz,{children:[K&&n.jsx($z,{heading:x,menuEntries:w,menuHeader:k,pageEntries:_,isVisible:!0,showSearch:C,searchValue:R,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:j,width:ae,onWidthChange:se,minWidth:C0,maxWidth:_0}),n.jsxs(Oz,{children:[ee&&n.jsx(Iz,{heading:z,actions:L,showActivityButton:T,showPonderButton:E,noBorder:S,onActivityClick:D,onPonderClick:V,onDotsClick:q}),n.jsx(Dz,{children:B})]})]})]})}const j0=2;function Bz({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(new WeakMap);return g.useEffect(()=>{const h=d.current,f=x=>x===document||x===window?document.scrollingElement:x,v=x=>{const w=f(x);return w?{y:w.scrollTop,max:w.scrollHeight-w.clientHeight}:{y:0,max:0}},y=x=>{const w=i??x.target;if(!w)return;const k=v(w),_=h.get(w);if(!_){h.set(w,k);return}const C=k.y-_.y;if(Math.abs(C)<e)return;if(C<0&&k.y>=k.max-j0&&_.max-k.max>=-C-j0){h.set(w,k);return}C>0&&k.y>o?l("down"):C<0&&l("up"),h.set(w,k)};if(i)return i.addEventListener("scroll",y,{passive:!0}),()=>i.removeEventListener("scroll",y);if(!(typeof document>"u"))return document.addEventListener("scroll",y,{passive:!0,capture:!0}),()=>document.removeEventListener("scroll",y,{capture:!0})},[e,o,i]),s}const Hz=p.button`
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
`,Wz=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,Uz=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function S0({label:e,trailingSlot:o,isOpen:i,onClick:s,ariaLabel:l}){return n.jsxs(Hz,{type:"button",$active:i,onClick:s,"aria-haspopup":"dialog","aria-expanded":!!i,"aria-label":l,children:[n.jsx(Wz,{children:e}),o,n.jsx(Uz,{children:n.jsx(Dn,{size:14})})]})}const ux=48,qz=`calc(${ux+1}px + env(safe-area-inset-top))`,Vz=p.header`
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
  margin-bottom: ${e=>e.$hidden?`calc(-1 * ${qz})`:"0px"};
  transition:
    transform 180ms ease-out,
    margin-bottom 180ms ease-out;
`,Gz=p.div`
  height: ${ux}px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,Yz=p.button`
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
`,Kz=p.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Qz=p(Zh)`
  font-size: var(--text-lg, 1.125rem);
`,Zz=p(Wo)`
  min-width: 20px;
  height: 20px;
  padding-inline: 6px;
`,Xz=p.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function Jz({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const eO=g.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,unreadEventCount:h=0,onHamburgerClick:f,onSecondaryClick:v,onTertiaryClick:y},x){return n.jsx(Vz,{ref:x,$hidden:d,$foreground:h>0&&l==="secondary",children:n.jsxs(Gz,{children:[n.jsx(Yz,{onClick:f,"aria-label":"Open navigation",children:n.jsx(Jz,{size:18})}),n.jsxs(Kz,{children:[n.jsx(S0,{label:i??(o==="Ultron"?n.jsx(Qz,{}):o),trailingSlot:h>0?n.jsx(Zz,{variant:"warning","aria-hidden":"true",children:h>99?"99+":h}):void 0,isOpen:l==="secondary",onClick:v,ariaLabel:h>0?`Choose a section, ${h} new unread ${h===1?"event":"events"}`:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(Xz,{"aria-hidden":"true",children:"›"}),n.jsx(S0,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),tO=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,nO=p.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${tO} 160ms ease-out;
`;function rO({onDismiss:e}){return g.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(nO,{onClick:e,"aria-hidden":"true"})}const oO=ke`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,aO=p.div`
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
  animation: ${oO} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,iO=p.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,sO=p.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,lO=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,cO=p.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,dO=p.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function hx({title:e,children:o,ariaLabel:i,titleAction:s}){return n.jsxs(aO,{role:"dialog","aria-modal":"true","aria-label":i??(typeof e=="string"?e:void 0),children:[n.jsx(iO,{children:n.jsx(sO,{"aria-hidden":"true"})}),e&&n.jsxs(lO,{children:[n.jsx(cO,{children:e}),s]}),n.jsx(dO,{children:o})]})}const ep=p.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,uO=p.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Yl=p.button`
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
`,M0=p.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Kl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,ja=p.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ql=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function hO({moduleLabel:e,entries:o,onSelect:i,onHome:s,onNewPage:l,spotlightEnabled:d=!0}){const h=e==="Ultron",f=h&&s?n.jsx(pO,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),i()},children:n.jsx($0,{})}):n.jsx($0,{});return n.jsx(hx,{title:h?f:e,ariaLabel:`${e} sections`,titleAction:h&&l?n.jsx(fO,{type:"button","aria-label":"New page",onClick:()=>{l(),i()},children:n.jsx(ic,{size:16})}):void 0,children:n.jsx(ep,{children:o.map(v=>{if(v.type==="single"){const x=v.item;return n.jsxs(Yl,{$active:x.isActive,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Kl,{children:x.icon}),n.jsx(ja,{children:x.label}),x.isActive&&n.jsx(Ql,{"aria-hidden":"true",children:n.jsx(rn,{size:16})})]},x.id)}if(v.type!=="group")return null;const y=v.group;return n.jsxs("div",{children:[n.jsx(uO,{children:y.label}),y.children.map(x=>{const w=n.jsxs(Yl,{$active:x.isActive,$indent:!0,onClick:()=>{var k;(k=x.onClick)==null||k.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Kl,{children:x.icon}),n.jsx(ja,{children:x.label}),x.isActive&&n.jsx(Ql,{"aria-hidden":"true",children:n.jsx(rn,{size:16})})]});return d&&x.spotlightPrompt?n.jsx(lx,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:w},x.id):n.jsx("div",{children:w},x.id)})]},y.id)})})})}const $0=p(Zh)`
  font-size: var(--text-lg, 1.125rem);
`,Il="44px",pO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  /* all: unset resets box-sizing to content-box, which would add the padding
     below on top of the minimum instead of inside it. */
  box-sizing: border-box;
  min-height: ${Il};
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
`,fO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Il};
  height: ${Il};
  /* Half the growth clawed back off the trailing edge, so the pencil stays on
     the same optical inset it sat on at 32px while the target around it grows
     outward into the row's padding. */
  margin-right: calc((${Il} - var(--space-8, 32px)) / -2);
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
`,mO=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,gO=p.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,vO=p.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function xO({personas:e,activeId:o,onSelect:i}){return n.jsx(hx,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(ep,{children:e.map(s=>{const l=s.id===o;return n.jsxs(Yl,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(ja,{as:"span",children:n.jsxs(mO,{children:[n.jsx(gO,{children:s.name}),n.jsx(vO,{children:s.role})]})}),l&&n.jsx(Ql,{"aria-hidden":"true",children:n.jsx(rn,{size:16})})]},s.id)})})})}const yO=ke`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,wO=p.aside`
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
  animation: ${yO} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,bO=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,kO=p.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,CO=p.button`
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
`,_O=p.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,jO=60;function SO({title:e,onDismiss:o,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const h=v=>{const y=v.touches[0];l.current={x:y.clientX,y:y.clientY}},f=v=>{if(!l.current)return;const y=v.changedTouches[0],x=y.clientX-l.current.x,w=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(w)<jO&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[o]),n.jsxs(wO,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(bO,{children:[n.jsx(kO,{children:e??"Navigation"}),n.jsx(CO,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Hi,{size:18})})]}),n.jsx(_O,{children:i})]})}const MO=p.span`
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
`,Du=p(Yl)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function $O({activeId:e,groups:o,user:i,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(SO,{title:"Navigation",onDismiss:h,children:n.jsxs(ep,{children:[o.map((f,v)=>n.jsxs("div",{children:[v>0&&n.jsx(M0,{"aria-hidden":"true"}),f.items.map(y=>{const x=y.id===e;return n.jsxs(Du,{$active:x,$disabled:y.disabled,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),d(y.id),h()},"aria-pressed":x,"aria-disabled":y.disabled||void 0,children:[n.jsx(Kl,{children:y.icon}),n.jsx(ja,{children:y.label}),x&&n.jsx(Ql,{"aria-hidden":"true",children:n.jsx(rn,{size:16})})]},y.id)})]},f.id)),n.jsx(M0,{"aria-hidden":"true"}),n.jsxs(Du,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Kl,{children:n.jsx(Z2,{})}),n.jsx(ja,{children:"Settings"})]}),n.jsxs(Du,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${i.name}`,children:[n.jsx(MO,{$color:i.avatarColor,"aria-hidden":"true",children:i.initials}),n.jsx(ja,{children:"Account"})]})]})})}const R0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],RO=340,NO=p.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,LO=p.main`
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
`;function AO(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:v,onSettingsClick:y,onMobileNavigate:x,onSelectPersona:w,onHome:k,onNewPage:_,openSecondaryNav:C,unreadEventCount:R,children:N}=e,[$,M]=g.useState(null),[j,z]=g.useState(!1),L=Bz({deadZonePx:8,topThresholdPx:20}),T=$===null&&L==="down",E=g.useMemo(()=>{if(!i)return null;const q=R0.find(B=>B.id===i);return(q==null?void 0:q.name)??null},[i]),S=()=>M(null),D=q=>M(q);g.useEffect(()=>{if(!C){z(!1);return}z(!1),M("secondary");const q=window.setTimeout(()=>{z(!0)},RO);return()=>window.clearTimeout(q)},[C]);const V=$!==null;return n.jsxs(NO,{children:[n.jsx(eO,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:E,openOverlay:$,hidden:T,unreadEventCount:R,onHamburgerClick:()=>D("drawer"),onSecondaryClick:()=>{D(h.length>0?"secondary":"drawer")},onTertiaryClick:E?()=>D("persona"):void 0}),n.jsx(LO,{children:N}),V&&n.jsx(rO,{onDismiss:S}),$==="secondary"&&n.jsx(hO,{moduleLabel:l,entries:h,onSelect:S,onHome:k,onNewPage:_,spotlightEnabled:j}),$==="persona"&&n.jsx(xO,{personas:R0,activeId:i,onSelect:q=>{w(q),S()}}),$==="drawer"&&n.jsx($O,{activeId:o,groups:s,user:f,onUserClick:v,onSettingsClick:y,onSelectModule:q=>x(q),onDismiss:S})]})}function TO(e){if(mc()&&e.mobileNav){const i=e.mobileNav;return n.jsx(AO,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,onHome:i.onHome,onNewPage:i.onNewPage,openSecondaryNav:i.openSecondaryNav,unreadEventCount:i.unreadEventCount,children:e.children})}return n.jsx(Fz,{...e})}const EO="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",IO="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",PO=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],zO=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],OO={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},DO=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],FO=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],BO=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function HO(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function px(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function WO(e){const o=zO.find(i=>i.match.test(e));return o?o.profile:OO}function fx(e,o){const i=WO(e),s=HO(px(e||"teambridge")^o),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<o;){const f=`${l(DO)} ${l(FO)}`;if(h.has(f))continue;h.add(f);const v=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(BO),credential:l(i.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const mx=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],gx=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],UO="Team coverage";function qO(e){var o;return((o=mx.find(i=>i.match.test(e)))==null?void 0:o.shapes)??gx}function N0(e,o="Saturday"){const i=fx(e,8),[s,l,d,h]=i,f=4+px(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${f} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const VO=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],L0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],vx=["6a–2p","2p–10p","10p–6a"],GO=[4,3,3,4,4,3,3],YO=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],A0={bands:vx,perDay:GO};function KO(e){var o;return e?((o=YO.find(i=>i.match.test(e)))==null?void 0:o.shape)??A0:A0}function lh(e,o){var y;const i=fx(e,12),{bands:s,perDay:l}=KO(o);let d=0;const h=VO.map((x,w)=>{const k=[];for(let _=0;_<l[w];_++){const C=i[d%i.length].name.split(" ")[0];d++,k.push({time:s[_%s.length],who:C})}return{label:x,shifts:k}}),f=xx(h);f>=0&&(h[f].shifts[0]={...h[f].shifts[0],who:"Open",flag:"open"});const v=(y=h[1])!=null&&y.shifts.length?1:h.findIndex(x=>x.shifts.length);return v>=0&&v!==f&&(h[v].shifts[0]={...h[v].shifts[0],flag:"watch"}),h}function QO(e){const o=mx.find(d=>d.match.test(e)),i=(o==null?void 0:o.shapes[0])??gx[0],l=lh(e,i).map((d,h)=>{const f=d.shifts.slice(0,3);for(;f.length<3;){const v=f.length;f.push({time:vx[v],who:`Coverage ${h+1}-${v+1}`})}return{...d,shifts:f}});return{label:(o==null?void 0:o.label)??UO,shape:"Full-week shift coverage",week:l}}function xx(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let i=e.length-1;i>=0;i--)if(e[i].shifts.length)return i;return-1}function T0(e){const o=xx(e);return o>=0?L0[o]:L0[5]}const ZO=1100,XO=440,yx=4,wx=4,bx=150,JO=Math.ceil(bx/yx)*wx,Fu=320,eD=720,Bu=2e3,tD=950,E0=1600,tp=249,kx=68,np=229,Cx=47,I0=tp-kx,P0=np-Cx,nD=8,rp=84,Fi=81,Zl=48,z0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],rD=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],oD="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",aD='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',O0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",iD="Time for a test run, so you can see how I work? Let's simulate a last minute call out.";function sD(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function lD(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${rp-Fi} rows`,blocks:[{label:"Held for you, none dropped",bullets:rD.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Fi} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function cD(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Zl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function dD(e,o,i,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},_x(i,s),jx(o)]}function uD(e,o,i,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},_x(i,s),jx(o)]}function _x(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function jx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function hD(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function pD(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function Pl(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function D0(e){return e.includes("	")||e.trim().includes(`
`)}function fD(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function mD(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function gD({text:e}){const o=Math.max(0,e.length-JO);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(i,s)=>n.jsx(JD,{children:i},o+s))]})}function F0({active:e,open:o,closeLabel:i,onClose:s,onScrollToEnd:l,showScrollCue:d=!1,onInsetChange:h,children:f}){const v=e&&o,y=g.useRef(null);g.useEffect(()=>{const w=y.current;if(!v||!w||!h)return;const k=()=>h(w.getBoundingClientRect().height);k();const _=new ResizeObserver(k);return _.observe(w),()=>{_.disconnect(),h(0)}},[v,h]);const x=n.jsxs(zD,{ref:y,$open:o,children:[v&&d&&l&&n.jsx(OD,{type:"button","aria-label":"Scroll to the end of the conversation",onClick:l,children:n.jsx(Dn,{size:18})}),n.jsxs(DD,{$open:o,children:[v&&n.jsx(FD,{type:"button","aria-label":i,onClick:s,children:n.jsx(Do,{size:18})}),f]})]});return v&&typeof document<"u"?uo.createPortal(x,document.body):x}const vD={};function xD({active:e=!0,answers:o=vD,onContinued:i,onPhoneSubmitted:s}){const l=mc(),[d,h]=g.useState([]),[f,v]=g.useState(""),[y,x]=g.useState([]),[w,k]=g.useState(null),[_,C]=g.useState("roster"),[R,N]=g.useState(!1),[$,M]=g.useState(!1),[j,z]=g.useState(!1),[L,T]=g.useState(!1),[E,S]=g.useState(null),[D,V]=g.useState(null),[q,B]=g.useState(null),[K,ee]=g.useState(null),[ae,se]=g.useState(""),[le,Z]=g.useState(!1),[F,Y]=g.useState(!1),[A,O]=g.useState("grant"),[ne,U]=g.useState(!1),J=g.useRef(null),[ce,H]=g.useState(0),[P,oe]=g.useState("delivering"),[pe,de]=g.useState(0),[ve,be]=g.useState(-1),[Se,$e]=g.useState(""),[Ie,Ue]=g.useState(!1),[De]=g.useState(()=>{var Q;return typeof window<"u"&&!!((Q=window.matchMedia)!=null&&Q.call(window,"(prefers-reduced-motion: reduce)").matches)}),[Ae,Ze]=g.useState(()=>{var Q;return typeof window<"u"&&!!((Q=window.matchMedia)!=null&&Q.call(window,"(max-width: 600px)").matches)}),[Xe,St]=g.useState({roster:!1,schedule:!1}),Be=Q=>St(me=>({...me,[Q]:!0})),xe=_==="roster"?Xe.roster:_==="schedule"?Xe.schedule:!0,Le=Ae&&P==="ready"&&_!=="done"&&!xe,ot=g.useRef([]),He=g.useRef(null),Ye=g.useRef(null),gt=g.useRef(null),nt=g.useRef(null),$n=g.useRef(null),[po,fo]=g.useState(0),Te=()=>{const Q=$n.current;Mt.current=!0,Q==null||Q.scrollTo({top:Q.scrollHeight,behavior:"smooth"})},[st,wt]=g.useState(!0),Mt=g.useRef(!0),cr=Q=>{const me=Q.scrollHeight-Q.scrollTop-Q.clientHeight<=nD;Mt.current=me,wt(me)},Jt=g.useMemo(()=>{var Q;return((Q=o.workforceType)==null?void 0:Q.trim())||Pl(o.companyWebsite)||""},[o]),Rr=g.useMemo(()=>qO(Jt),[Jt]),Bn=g.useMemo(()=>QO(Jt),[Jt]),Rn=g.useMemo(()=>{const Q=Pl(o.companyWebsite),ye=[{kind:"text",text:`Welcome to your ${Q?`${Q} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return ye.push({kind:"text",text:oD}),ye.push({kind:"rosterCta"}),ye},[o]),dr=(Q,me)=>{ot.current.push(window.setTimeout(me,Q))};g.useEffect(()=>()=>{ot.current.forEach(Q=>window.clearTimeout(Q)),He.current&&window.clearTimeout(He.current),gt.current&&window.clearTimeout(gt.current)},[]);const Nr=g.useRef(null),Zi=Q=>{Nr.current===null&&(Nr.current=window.requestAnimationFrame(()=>{Nr.current=null;const me=J.current;if(!me)return;const ye=window.matchMedia("(max-width: 600px)").matches?P0:I0,Je=Math.min(ye,Q.scrollHeight-Q.clientHeight)||ye,Pe=Math.min(1,Math.max(0,Q.scrollTop/Je));me.style.setProperty("--morph",Pe.toFixed(4))}))};g.useEffect(()=>()=>{Nr.current!==null&&window.cancelAnimationFrame(Nr.current)},[]),g.useEffect(()=>{const Q=$n.current;if(!Q)return;const me=()=>{const Pe=window.matchMedia("(max-width: 600px)").matches?P0:I0,kt=Q.scrollHeight-ce-Q.clientHeight,ft=Math.max(0,Pe-kt);H($t=>Math.abs($t-ft)>1?ft:$t)};me();const ye=new ResizeObserver(me);ye.observe(Q,{box:"border-box"});const Je=Q.firstElementChild;return Je&&ye.observe(Je,{box:"border-box"}),window.addEventListener("resize",me),()=>{ye.disconnect(),window.removeEventListener("resize",me)}},[ce,po]),g.useEffect(()=>{const Q=$n.current;!Q||!Mt.current||(Q.scrollTop=Q.scrollHeight)},[ce]),g.useEffect(()=>{var ye;const Q=(ye=window.matchMedia)==null?void 0:ye.call(window,"(max-width: 600px)");if(!Q)return;const me=()=>Ze(Q.matches);return me(),Q.addEventListener("change",me),()=>Q.removeEventListener("change",me)},[]);const Xi=Q=>{if(S({file:Q,state:"uploading",progress:8}),De){S({file:Q,state:"uploading",progress:92});return}dr(180,()=>S({file:Q,state:"uploading",progress:38})),dr(460,()=>S({file:Q,state:"uploading",progress:74})),dr(780,()=>S({file:Q,state:"uploading",progress:92}))},Ji=Q=>{if(V({file:Q,state:"uploading",progress:8}),De){V({file:Q,state:"complete",progress:100});return}dr(180,()=>V({file:Q,state:"uploading",progress:38})),dr(460,()=>V({file:Q,state:"uploading",progress:74})),dr(780,()=>V({file:Q,state:"complete",progress:100}))};g.useEffect(()=>{if(De){de(Rn.length),be(-1),oe("ready");return}const Q=[];let me=null;const ye=(Pe,kt)=>{Q.push(window.setTimeout(kt,Pe))},Je=Pe=>{if(Pe>=Rn.length){Ue(!1),oe("ready");return}Ue(!0),ye(XO,()=>{Ue(!1),be(Pe);const kt=Rn[Pe];if(kt.kind!=="text"){ye(eD,()=>{de(Pe+1),be(-1),ye(Fu,()=>Je(Pe+1))});return}$e("");const ft=kt.text;let $t=0;me=window.setInterval(()=>{$t=Math.min(ft.length,$t+wx),$e(ft.slice(0,$t)),$t>=ft.length&&(me&&window.clearInterval(me),me=null,ye(Fu,()=>{de(Pe+1),be(-1),$e(""),ye(Fu,()=>Je(Pe+1))}))},yx)})};return oe("delivering"),Je(0),()=>{Q.forEach(Pe=>window.clearTimeout(Pe)),me&&window.clearInterval(me)}},[Rn,De]),g.useEffect(()=>{const Q=me=>{const ye=me.target,Je=(ye==null?void 0:ye.isContentEditable)||(ye==null?void 0:ye.tagName)==="INPUT"||(ye==null?void 0:ye.tagName)==="TEXTAREA"||(ye==null?void 0:ye.tagName)==="SELECT";!e||Je||me.metaKey||me.ctrlKey||me.altKey||me.key.toLowerCase()!=="m"||(me.preventDefault(),U(!0))};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[e]);const Oa=()=>{Z(!0),gt.current&&window.clearTimeout(gt.current),gt.current=window.setTimeout(()=>U(!1),E0)},es=()=>{Y(!0),gt.current&&window.clearTimeout(gt.current),gt.current=window.setTimeout(()=>U(!1),E0)};g.useEffect(()=>{e&&Mt.current&&Te()},[e,d,w,P,pe,ve,Se,Ie,po]),g.useEffect(()=>{e||U(!1)},[e]);const mo=(f.trim().length>0||y.length>0)&&w===null,qo=Q=>{const me=Array.from(Q,ye=>ye.name);x(ye=>[...ye,...me.filter(Je=>!ye.includes(Je))])},go=Q=>x(me=>me.filter(ye=>ye!==Q)),Lr=(Q,me={})=>{const ye=De?300:me.workingMs??ZO,Je=De?200:tD;k(me.workingLabel??"");let Pe=0;const kt=()=>{var Ct;He.current&&(window.clearTimeout(He.current),He.current=null);const ft=Q[Pe];if(!ft)return;const $t=Pe===Q.length-1;if(Pe+=1,h(jc=>[...jc,ft]),$t){k(null),Ye.current=null,(Ct=me.then)==null||Ct.call(me);return}k(""),He.current=window.setTimeout(kt,Je)};Ye.current=kt,He.current=window.setTimeout(kt,ye)},vo=()=>{var Q;Ae&&((Q=Ye.current)==null||Q.call(Ye))},Hn=(Q,me=[])=>{d.some(ye=>ye.role==="operator")||i==null||i(),h(ye=>[...ye,{role:"operator",text:Q,...me.length?{attachments:me}:{}}])},Ar=(Q,me)=>{z(!1),T(!0),Be("roster"),me&&Xi(me),Lr([{role:"ultron",activity:lD(Q),text:`Got it — read ${Q}: ${rp} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Fi} people in. ${O0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Bu,then:()=>C("schedule")})},Da=()=>{z(!0),T(!0),Be("roster"),Lr([{role:"ultron",activity:cD(Jt),text:`Done — I spun up ${Zl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:O0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Bu,then:()=>C("schedule")})},bc=Q=>{const me=lh(Jt,Q);B({problems:N0(Jt,T0(me)),week:me}),ee(Q)},xo=Q=>{Be("schedule"),Q.cardFile&&Ji(Q.cardFile);const me=lh(Jt,Q.shape),ye=N0(Jt,T0(me));B({problems:ye,week:me}),ee(Q.shape??null);const Je=me.reduce(($t,Ct)=>$t+Ct.shifts.length,0),Pe=me.filter($t=>$t.shifts.length>0).length,kt=Q.fileName?`Read ${Q.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${Q.shape.toLowerCase()}. Here's what's in it.`,ft=Q.fileName?dD(Q.fileName,ye.length,Je,Pe):uD(Q.shape.toLowerCase(),ye.length,Je,Pe);Lr([{role:"ultron",activity:ft,text:kt},{role:"ultron",text:"",card:"week"},{role:"ultron",text:iD}],{workingLabel:Q.fileName?"Turning it into shifts…":"Building your week…",workingMs:Bu,then:()=>C("done")})},kc=()=>{Be("schedule"),Hn("Skip the schedule for now"),Lr([{role:"ultron",text:"No problem — we’ll skip the schedule for now. You can add it anytime. Your setup is ready; add your mobile number below to launch a live Ultron event."}],{workingLabel:"Skipping the schedule for now…",then:()=>C("done")})},ur=(Q,me=[])=>{if(!Q&&me.length===0||w!==null)return;if(Hn(Q,me),_==="roster"){me.length>0?Ar(me[0]):D0(Q)?Ar("your pasted roster"):Lr([{role:"ultron",activity:hD("roster"),text:aD}]);return}if(_==="schedule"){me.length>0?xo({fileName:me[0]}):D0(Q)?xo({fileName:"your pasted schedule"}):xo({shape:Q});return}const ye=d.filter(Je=>Je.role==="ultron").length;Lr([{role:"ultron",activity:pD(),text:Bh(Q,ye)}])},Vo=()=>{const Q=f.trim();!Q&&y.length===0||w!==null||(ur(Q,y),v(""),x([]))},ts=Q=>{if(!Q||Q.length===0||_!=="roster"||w!==null)return;const me=Array.from(Q),ye=me.map(Je=>Je.name);Hn("",ye),Ar(ye[0],{name:me[0].name,type:me[0].type,size:me[0].size})},Cc=Q=>{if(!Q||Q.length===0||_!=="schedule"||w!==null)return;const me=Array.from(Q),ye=me.map(Je=>Je.name);Hn("",ye),xo({fileName:ye[0],cardFile:{name:me[0].name,type:me[0].type,size:me[0].size}})},yo=w!==null?[]:_==="roster"?[{icon:no,label:"No roster handy? Use sample teammates",mobileLabel:"Use sample teammates",mobileCta:!0,onTap:()=>{Hn("Use sample teammates"),Da()}}]:_==="schedule"?[...Rr.map(Q=>({icon:jn,label:Q,onTap:()=>{Hn(Q),xo({shape:Q})}})),{label:"Skip for now",onTap:kc,secondary:!0,mobileCta:!0}]:[],hr=l?yo.find(Q=>Q.mobileCta):void 0,Fa=hr?yo.filter(Q=>Q!==hr):yo,Ba=_!=="done"&&yo.length>0?n.jsxs(gB,{children:[Fa.length>0&&n.jsx(mB,{"aria-label":_==="schedule"?"Schedule options":"Suggestions",children:Fa.map(({icon:Q,label:me,onTap:ye,secondary:Je})=>n.jsxs(Q0,{type:"button",$browseSized:!0,$secondary:Je,onClick:ye,children:[Q&&n.jsx(Q,{size:14}),me]},me))}),hr&&n.jsx(vB,{type:"button",variant:"secondary",size:"sm",onClick:hr.onTap,children:hr.mobileLabel??hr.label})]}):null,_c=_==="roster"?"Attach your roster, or ask Ultron anything…":_==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…",Ut=A==="waitlist",vt=Ut?F:le,ns=ae.length>=10;return n.jsxs(CD,{children:[!l&&n.jsxs(n.Fragment,{children:[n.jsx(Yh,{links:1}),n.jsx(Kh,{})]}),n.jsx(_D,{ref:J,style:{"--morph":0},children:n.jsxs(jD,{children:[n.jsxs(SD,{role:"img","aria-label":"Ultron",children:[n.jsx(B0,{"aria-hidden":"true",children:n.jsx(lt,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(B0,{$compact:!0,"aria-hidden":"true",children:n.jsx(lt,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(MD,{children:[n.jsx($D,{children:"Welcome"}),n.jsx(RD,{children:"Finish your setup, right in the chat"})]})]})}),n.jsxs(ND,{ref:$n,onScroll:Q=>{Zi(Q.currentTarget),cr(Q.currentTarget)},children:[n.jsxs(eF,{$bottomInset:po,children:[n.jsx(yl,{"data-from":"ultron",children:n.jsxs(Hu,{children:[(ve>=0||pe>0)&&n.jsx(W0,{children:n.jsx(Vl,{milestones:sD(Pl(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),Rn.slice(0,ve>=0?ve+1:pe).map((Q,me)=>{if(Q.kind==="rosterCta"){const Je=_==="roster"&&!L;return n.jsx(g.Fragment,{children:n.jsx(H0,{children:n.jsx(F0,{active:e&&_==="roster",open:Le&&_==="roster",closeLabel:"Close roster uploader",onClose:()=>Be("roster"),onScrollToEnd:Te,showScrollCue:!st,onInsetChange:fo,children:L?_==="roster"?E?n.jsx(xl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:E.state,progress:E.progress,file:E.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(wl,{children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(no,{size:16})}),n.jsxs(kl,{children:[n.jsx(Cl,{children:"Roster"}),n.jsx(_l,{children:w||(j?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(q0,{})})]}):n.jsxs(wl,{$done:!0,children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(Uu,{size:16})}),n.jsxs(kl,{children:[n.jsx(Cl,{children:"Roster"}),n.jsx(_l,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(gn,{size:18})})]}):n.jsxs(Nx,{children:[Je&&!E&&n.jsx(BD,{"aria-hidden":"true",children:n.jsx(HD,{children:[...z0,...z0].map((Pe,kt)=>n.jsx(WD,{children:n.jsx("img",{src:Pe.photo,alt:""})},`${Pe.name}-${kt}`))})}),n.jsx(xl,{"data-roster-flow":Je&&!E?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(E==null?void 0:E.state)??"empty",progress:(E==null?void 0:E.progress)??0,file:(E==null?void 0:E.file)??null,disabled:w!==null&&!E,footerSlot:Je&&P==="ready"?Ba:void 0,onFileSelect:Pe=>ts([Pe]),onClear:()=>{}})]})})})},`beat-${me}`)}const ye=me===ve;return n.jsx(U0,{"data-from":"ultron",children:ye?n.jsx(gD,{text:Se}):Q.text},`beat-${me}`)}),Ie&&n.jsx(ZD,{children:n.jsx(K0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),d.map((Q,me)=>{const ye=Q.activity?n.jsx(W0,{children:n.jsx(Vl,{milestones:Q.activity,collapsed:!0,hideActions:!0})}):null;if(Q.card)return n.jsx(yl,{"data-from":"ultron",children:n.jsxs(Hu,{children:[ye,n.jsx(H0,{$pop:Q.card==="week",children:Q.card==="roster"?n.jsx(bD,{sample:j}):Q.card==="scheduleCta"?n.jsx(F0,{active:e&&_==="schedule",open:Le&&_==="schedule",closeLabel:"Close schedule uploader",onClose:()=>Be("schedule"),onScrollToEnd:Te,showScrollCue:!st,onInsetChange:fo,children:_==="schedule"?D?n.jsx(xl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:D.state,progress:D.progress,file:D.file,onFileSelect:()=>{},onClear:()=>{}}):w!==null?n.jsx(TD,{children:n.jsxs(wl,{children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(jn,{size:16})}),n.jsxs(kl,{children:[n.jsx(Cl,{children:"Schedule"}),n.jsx(_l,{children:w||"Building your week…"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(q0,{})})]})}):n.jsxs(PD,{children:[n.jsx(qD,{role:"img","aria-label":`${Bn.label}: ${Bn.shape}`,children:n.jsx(VD,{children:Bn.week.map((Pe,kt)=>{const ft=Bn.week.slice(0,kt).reduce(($t,Ct)=>$t+Ct.shifts.length,0);return n.jsxs(GD,{children:[n.jsx(YD,{children:Pe.label.slice(0,1)}),Pe.shifts.length?Pe.shifts.map(($t,Ct)=>n.jsx(KD,{$sequence:ft+Ct,$flag:$t.flag},`${$t.time}-${Ct}`)):n.jsx(QD,{})]},Pe.label)})})}),n.jsx(xl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:Ba,onFileSelect:Pe=>Cc([Pe]),onClear:()=>{}})]}):n.jsxs(wl,{$done:!0,children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(Uu,{size:16})}),n.jsxs(kl,{children:[n.jsx(Cl,{children:"Schedule"}),n.jsx(_l,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(gn,{size:18})})]})}):q?n.jsxs(n.Fragment,{children:[n.jsx(kD,{problems:q.problems,week:q.week}),n.jsx(fB,{"aria-label":"Try another schedule",children:Rr.map(Pe=>n.jsxs(Q0,{type:"button",$active:Pe===K,"aria-pressed":Pe===K,onClick:()=>bc(Pe),children:[n.jsx(jn,{size:14}),Pe]},Pe))})]}):null})]})},me);const Je=n.jsxs(kB,{"data-from":Q.role,children:[Q.text&&n.jsx(U0,{"data-from":Q.role,children:Q.text}),Q.attachments&&n.jsx(CB,{children:Q.attachments.map(Pe=>n.jsxs(Z0,{children:[n.jsx(io,{size:14}),Pe]},Pe))})]});return n.jsx(yl,{"data-from":Q.role,children:ye?n.jsxs(Hu,{children:[ye,Je]}):Je},me)}),w!==null&&n.jsx(yl,{"data-from":"ultron",children:n.jsx(sB,{type:"button",onClick:vo,disabled:!Ae,"aria-label":w?`${w} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(iB,{children:[n.jsx(K0,{"aria-hidden":"true",children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),w&&n.jsx(cB,{role:"status","aria-live":"polite",children:w})]})})}),n.jsx("div",{ref:nt})]}),n.jsx(LD,{style:{height:ce},"aria-hidden":"true"})]}),P==="ready"&&!Le&&n.jsxs(dB,{children:[n.jsx(uB,{role:"img","aria-label":"Ultron","aria-hidden":w!==null,children:n.jsx(hB,{"aria-hidden":"true",children:n.jsx(pB,{$show:w===null,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),_==="done"&&!$?n.jsx(kN,{captured:R,onSubmit:Q=>{N(!0),s==null||s(Q)},onDismiss:()=>M(!0)}):n.jsxs(xB,{onSubmit:Q=>{Q.preventDefault(),Vo()},children:[y.length>0&&n.jsx(wB,{"aria-label":"Files to send",children:y.map(Q=>n.jsxs(Z0,{children:[n.jsx(io,{size:14}),Q,n.jsx(bB,{type:"button","aria-label":`Remove ${Q}`,onClick:()=>go(Q),children:n.jsx(Do,{size:12})})]},Q))}),n.jsxs(yB,{children:[n.jsx(X0,{children:n.jsx(Bg,{state:"idle",onSelect:qo})}),n.jsx(_B,{rows:1,value:f,placeholder:_c,"aria-label":"Message Ultron",inputMode:"text",autoComplete:"off",onChange:Q=>v(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),Vo())},onPaste:Q=>{var ye;const me=(ye=Q.clipboardData)==null?void 0:ye.files;me&&me.length>0&&(Q.preventDefault(),qo(me))}}),n.jsx(X0,{children:n.jsx(Ta,{state:mo?"ready":"disabled-invalid",onSend:Vo})})]})]})]}),n.jsx(DF,{}),n.jsxs(Vg,{open:ne,onClose:()=>U(!1),size:"lg","aria-label":`${Ut?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(FF,{children:[n.jsx(HF,{"aria-hidden":"true",children:n.jsx(Wv,{size:300})}),n.jsx(WF,{type:"button","aria-label":"Close",onClick:()=>U(!1),children:n.jsx(Do,{size:18})}),n.jsxs(UF,{children:[n.jsx(qF,{"aria-hidden":"true"}),Ut?"Ultron early access":"Your welcome grant"]}),!Ut&&n.jsxs(VF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(GF,{children:[n.jsx(YF,{children:"$"}),"1,000"]}),n.jsxs(KF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(QF,{$prominent:Ut,children:Ut?"Be first when access opens.":"Ready to see the real work?"}),n.jsx(ZF,{children:Ut?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered."}),n.jsx(XF,{"aria-label":Ut?"Waitlist benefits":"Grant benefits",children:Ut?n.jsxs(n.Fragment,{children:[n.jsx(ba,{children:"Priority access"}),n.jsx(ba,{children:"One text when ready"}),n.jsx(ba,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(ba,{children:"100,000 credits"}),n.jsx(ba,{children:"Up to 3 months"}),n.jsx(ba,{children:"You approve every action"})]})}),vt?n.jsxs(oB,{role:"status",children:[n.jsx(gn,{size:20}),Ut?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live."]}):n.jsxs(JF,{onSubmit:Q=>{Q.preventDefault(),ns&&(Ut?es():Oa())},children:[n.jsx(eB,{htmlFor:"welcome-grant-phone",children:Ut?"Where should we send your access text?":"Where should we text your invite?"}),n.jsxs(tB,{children:[n.jsx(nB,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",minLength:10,maxLength:15,value:ae,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:Q=>se(Q.target.value.replace(/\D/g,""))}),n.jsx(rB,{type:"submit",variant:"tertiary",size:"lg",disabled:!ns,children:Ut?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(aB,{children:Ut?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(BF,{type:"button",onClick:()=>{gt.current&&window.clearTimeout(gt.current),O(Q=>Q==="grant"?"waitlist":"grant")},children:["Demo: show ",Ut?"welcome grant":"waitlist"]})]})]})}const yD={"Registered Nurse":{short:"RN",color:"blue"},"Charge Nurse":{short:"Charge RN",color:"pink"},"Licensed Practical Nurse":{short:"LPN",color:"azure"},"Licensed Vocational Nurse":{short:"LVN",color:"azure"},"Certified Nursing Assistant":{short:"CNA",color:"green"},RN:{short:"RN",color:"blue"},LPN:{short:"LPN",color:"azure"},CNA:{short:"CNA",color:"green"},Caregiver:{short:"Caregiver",color:"matcha"},"Med Aide":{short:"Med Aide",color:"purple"}};function wD(e){return yD[e]??{short:e,color:"neutral"}}function bD({sample:e}){const[o,i]=g.useState(!0),s=PO.slice(0,6),l=(e?Zl:Fi)-s.length;return n.jsxs(Ax,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(nF,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-people",onClick:()=>i(d=>!d),children:[e?n.jsx(rF,{children:n.jsxs(oF,{children:[Zl," sample teammates, ready to run a full week"]})}):n.jsxs(aF,{children:[n.jsxs(iF,{children:[Fi," ",n.jsxs(sF,{children:["/",rp]})]}),n.jsxs(lF,{children:[n.jsx(gn,{size:16})," imported clean"]})]}),n.jsx(Tx,{$open:o,"aria-hidden":"true",children:n.jsx(Dn,{size:16})})]}),o&&n.jsxs(cF,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[s.map((d,h)=>{const f=wD(d.role);return n.jsxs(dF,{$i:h,children:[n.jsxs(uF,{"aria-hidden":"true",children:[fD(d.name),n.jsx("img",{src:mD(h),alt:"",loading:"lazy",onError:v=>{v.currentTarget.style.display="none"}})]}),n.jsxs(hF,{children:[n.jsx(pF,{children:d.name}),n.jsxs(fF,{children:[d.location," · ",d.tenure]})]}),n.jsx(Jn,{size:"sm",variant:"subtle",color:f.color,children:f.short}),e&&n.jsx(Jn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},d.name)}),n.jsx(mF,{children:e?`+ ${l} more · every one tagged “Sample”`:`+ ${l} more imported clean`})]})]})}function kD({problems:e,week:o}){const[i,s]=g.useState(!1),l=o.map((f,v)=>o.slice(0,v).reduce((y,x)=>y+x.shifts.length,0)),d=o.filter(f=>f.shifts.length>0).length,h=o.reduce((f,v)=>f+v.shifts.length,0);return n.jsxs(Ax,{"aria-label":"Your week",children:[n.jsxs(bF,{children:[n.jsxs(CF,{children:[n.jsxs(V0,{children:[n.jsx(G0,{children:d})," days"]}),n.jsx(_F,{"aria-hidden":"true",children:"·"}),n.jsxs(V0,{children:[n.jsx(G0,{children:h})," shifts"]})]}),n.jsxs(kF,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(f=>!f),children:[n.jsx(gF,{"aria-hidden":"true",children:n.jsx(Dl,{size:15})}),n.jsx(Tx,{$open:i,"aria-hidden":"true",children:n.jsx(Dn,{size:16})})]})]}),i&&n.jsx(xF,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((f,v)=>n.jsxs(yF,{children:[n.jsx(jF,{$kind:f.kind,"aria-hidden":"true",children:f.kind==="missing"?n.jsx(jn,{size:15}):n.jsx(Dl,{size:15})}),n.jsxs(wF,{children:[n.jsxs(SF,{children:[f.worker," · ",f.role]}),n.jsx(MF,{children:f.detail})]})]},`${f.worker}-${v}`))}),n.jsx($F,{children:n.jsx(RF,{role:"table","aria-label":"Next week's shifts",children:o.map((f,v)=>n.jsxs(NF,{role:"column",children:[n.jsx(LF,{children:f.label}),f.shifts.map((y,x)=>n.jsxs(AF,{$flag:y.flag,$sequence:l[v]+x,children:[n.jsx(TF,{children:y.time}),n.jsx(EF,{children:y.who})]},`${f.label}-${x}`))]},f.label))})})]})}const CD=p.div`
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
`,Sx="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",Mx=Oe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${Sx};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,$x=e=>Oe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${Sx}, transparent);
  pointer-events: none;
`,_D=p.header`
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
    ${Mx}
    opacity: calc(var(--morph) * var(--morph));
  }
  &::after {
    ${$x("down")}
    opacity: calc(var(--morph) * var(--morph));
  }
`,Lt=(e,o)=>`calc(${e} * (1 - var(--morph)) + ${o} * var(--morph))`,Mr=(e,o)=>Lt(`${e}px`,`${o}px`),jD=p.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${Mr(tp,kx)};
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;

  @media (max-width: 600px) {
    height: ${Mr(np,Cx)};
  }
`,SD=p.span`
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
  --icon-n: ${Lt("140","36")};
  top: ${Mr(24,18)};
  left: ${Lt("50%","var(--space-6)")};
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
    --icon-n: ${Lt("140","32")};
    top: ${Mr(16,8)};
    left: ${Lt("50%","var(--space-4)")};
  }

  /* Short viewports fade the subtitle out as the bar arrives (see
     PageHeaderSubtitle), which leaves the title alone as the lockup — a 7 → 28
     block, centre 17.5. */
  @media (max-width: 600px) and (max-height: 700px) {
    top: ${Mr(16,1.5)};
  }
`,B0=p.span`
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
`,MD=p.div`
  display: contents;
`,$D=p.span`
  position: absolute;
  top: ${Mr(180,15)};
  left: ${Lt("50%","72px")};
  transform: translateX(calc(-50% * (1 - var(--morph))));
  max-width: ${Lt("calc(100% - 48px)","calc(100% - 96px)")};
  font-family: var(--font-sans);
  font-size: ${Lt("clamp(24px, 3vw, 30px)","var(--text-sm)")};
  line-height: ${Lt("var(--line-height-tight)","var(--line-height-relaxed)")};
  font-weight: var(--font-weight-semibold);
  letter-spacing: ${Lt("var(--tracking-tight)","var(--tracking-wide)")};
  color: var(--color-content-primary);
  white-space: nowrap;

  @media (max-width: 600px) {
    top: ${Mr(168,7)};
    left: ${Lt("50%","56px")};
    max-width: ${Lt("calc(100% - 32px)","calc(100% - 72px)")};
    font-size: ${Lt("24px","var(--text-sm)")};
  }
`,RD=p.span`
  position: absolute;
  top: ${Mr(213,36)};
  left: ${Lt("50%","72px")};
  transform: translateX(calc(-50% * (1 - var(--morph))));
  max-width: ${Lt("calc(100% - 48px)","calc(100% - 96px)")};
  font-family: var(--font-sans);
  /* 16px, not --text-md: that token isn't defined, so this declaration was being
     dropped and the size fell through to the inherited 16px. Stating it keeps the
     rendered size exactly as it was while giving the interpolation two real ends
     to work between — a calc() with one invalid term drops the whole property. */
  font-size: ${Lt("16px","var(--text-sm)")};
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    top: ${Mr(197,27)};
    left: ${Lt("50%","56px")};
    max-width: ${Lt("calc(100% - 32px)","calc(100% - 72px)")};
    font-size: ${Lt("var(--text-sm)","var(--text-xs)")};
    line-height: ${Lt("var(--line-height-relaxed)","var(--line-height-snug)")};
  }

  /* Short viewports have no room for the subtitle once the bar arrives. Fading it
     over the first half of the collapse (rather than switching display) keeps the
     morph continuous — display has no in-between to interpolate through. */
  @media (max-width: 600px) and (max-height: 700px) {
    opacity: clamp(0, calc(1 - var(--morph) * 2), 1);
  }
`,ND=p.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,LD=p.div`
  flex-shrink: 0;
`,Uo=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Rx=ke`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,AD=ke`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,H0=p.div`
  animation: ${e=>e.$pop?Rx:Uo}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,TD=p.div`
  transform-origin: center bottom;
  animation: ${Rx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ED=ke`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,ID=ke`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,Nx=p.div`
  position: relative;
  width: 100%;
`,PD=p(Nx)``,Lx=ke`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,zD=p.div`
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
`,OD=p.button`
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
  ${Fn}
  /* Denser than the sheet's own glass. The card is large enough that a 50% fill
     still reads as a surface, but at 44px the thread's prose runs straight
     behind the chevron and turns it to mud — this stays glass (same blur, same
     edge) while giving the glyph a field to sit on. */
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  /* Rises with the card rather than with a shared wrapper — see the shell. */
  animation: ${Lx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

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
`,DD=p.div`
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
      ${Fn}
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
      animation: ${Lx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FD=p.button`
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
`,BD=p.div`
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
`,HD=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${ID} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WD=p.span`
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
`,UD=ke`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,qD=p.div`
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
`,VD=p.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,GD=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,YD=p.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,KD=p.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${UD} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,QD=p.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,xl=p(Xg)`
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
    animation: ${ED} 300ms var(--ease-out) both;
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
`,ZD=p.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Uo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,XD=ke`
  from { opacity: 0; }
  to   { opacity: 1; }
`,JD=p.span`
  animation: ${XD} ${bx}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,W0=p.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,eF=p.div`
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
  padding: calc(${tp}px + var(--space-8)) var(--space-6) var(--space-8);

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding: calc(${np}px + var(--space-3)) var(--space-4) var(--space-4);

    /* Scrollable room the height of the open intake sheet, so the conversation
       can be pulled out from under it (the sheet's own scroll cue does exactly
       that). Without this the thread simply ends behind the card and its last
       turns are unreachable. Only while a sheet stands — 0 collapses it. */
    ${e=>e.$bottomInset?Oe`
      padding-bottom: calc(${e.$bottomInset}px + var(--space-4));
    `:""}
  }
`,yl=p.div`
  display: flex;
  animation: ${Uo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Hu=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,U0=p.div`
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
`,wl=p.div`
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
    ${Fn}
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
`,bl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,kl=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Cl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,_l=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,tF=ke`
  to { transform: rotate(360deg); }
`,q0=p.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${tF} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,jl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,Ax=p.div`
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
`,nF=p.button`
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
`,rF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,oF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,aF=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,iF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,sF=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,lF=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,cF=p.div`
  display: flex;
  flex-direction: column;
`,dF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Uo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uF=p.span`
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
`,hF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,pF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,mF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Uo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gF=p.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Tx=p.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,vF=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Uo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xF=p(vF)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,yF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,wF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,bF=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,kF=p.button`
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
`,CF=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,V0=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,G0=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,_F=p.span`
  color: var(--color-content-tertiary);
`,jF=p.span`
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
`,SF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,MF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,$F=p.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,RF=p.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,NF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,LF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,AF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${AD} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
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
`,TF=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,EF=p.span`
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
`,Y0="cubic-bezier(0.22, 1, 0.36, 1)",IF=ke`
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
`,PF=ke`
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
`,zF=ke`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,OF=ke`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,DF=W2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${IF} 440ms ${Y0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${zF} 560ms ${Y0} both;
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
    animation: ${PF} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${OF} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,FF=p.section`
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
`,BF=p.button`
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
`,HF=p.div`
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
`,WF=p.button`
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
`,UF=p.span`
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
`,qF=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,VF=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,GF=p.div`
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
`,YF=p.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,KF=p.span`
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
`,QF=p.h2`
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
`,ZF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,XF=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,ba=p.span`
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
`,JF=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,eB=p.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,tB=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,nB=p.input`
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
`,rB=p(Fe)`
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
`,oB=p.div`
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
`,aB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,K0=p.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,iB=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,sB=p.button`
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
`,lB=ke`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,cB=p.span`
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
  animation: ${lB} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,dB=p.div`
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
    ${Mx}
  }
  &::after {
    ${$x("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Uo} var(--duration-slow, 420ms) var(--ease-out) both;

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
`,uB=p.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,hB=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,pB=p.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,fB=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,mB=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,gB=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,vB=p(Fe)`
  width: 100%;
  min-height: 44px;
  font-size: var(--text-sm);

  &:not(:first-child) {
    margin-top: var(--space-2);
  }
`,Q0=p.button`
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
`,xB=p.form`
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
`,yB=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,wB=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,Z0=p.span`
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
`,bB=p.button`
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
`,kB=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,CB=p.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,_B=p.textarea`
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
`,X0=p.div`
  flex-shrink: 0;
`;function jB(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function SB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function MB(e,o){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=SB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=jB(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const ch="ultron-theme";function $B(){if(typeof window>"u")return null;const e=window.localStorage.getItem(ch);return e==="light"||e==="dark"?e:null}function RB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function NB(){const e=qh("(prefers-color-scheme: dark)"),[o,i]=g.useState($B);g.useEffect(()=>{RB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(ch,o):window.localStorage.removeItem(ch))},[o]);const s=o??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const LB="calc(env(safe-area-inset-top, 0px) + 49px)",AB=p.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${gv} {
    top: calc(${LB} + var(--space-3));
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
`;function TB(){const{theme:e,toggle:o}=NB(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(AB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(yh,{size:18}):n.jsx(Ig,{size:18})})}const J0=[{id:"ultron",label:"Ultron",icon:n.jsx(lt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(GM,{})},{id:"engaged",label:"Engage",icon:n.jsx(YM,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(KM,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(QM,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(ZM,{})}],eg=[{id:"apps",label:"Apps",icon:n.jsx(XM,{})}],tg=[{id:"docs",label:"Document Studio",icon:n.jsx(Q2,{})},{id:"form",label:"Form",icon:n.jsx(JM,{})},{id:"tasks",label:"Tasks",icon:n.jsx(e$,{})},{id:"policy",label:"Policy",icon:n.jsx(t$,{}),activeIcon:n.jsx("img",{src:EO,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(Bo,{}),activeIcon:n.jsx("img",{src:IO,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(n$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(r$,{})}],EB=3e3,IB=4e3,PB=p.button`
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
`,zB=ke`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,OB=ke`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,DB=ke`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,FB=p.span`
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
      ${zB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${OB} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${DB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,BB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,HB=p(Wg)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,WB=p(Ug)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,UB=p(qg)`
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
`,qB=W2`
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
`,VB=p.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,GB=p.button`
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
`;function YB({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(Sh,{placement:"bottom-end",width:168,trigger:n.jsx(GB,{type:"button","aria-label":"Page options",children:n.jsx(Tg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(Fg,{size:16}),onClick:e}]}]})})}const KB={needs_attention:n.jsx(Dl,{size:16}),live:n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(gn,{size:16})},ng={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function QB({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[h,f]=g.useState(null),[v,y]=g.useState(null),[x,w]=g.useState("ultron"),[k,_]=g.useState("employees"),C=R$(),R=C.revealedNewIds.reduce((xe,Le)=>{const ot=C.threads.find(Ye=>Ye.id===Le),He=!!(ot&&ng[ot.status]==="new"&&!C.viewedIds.includes(Le));return xe+(He?1:0)},0),[N,$]=g.useState(!!e),[M,j]=g.useState(!1),[z,L]=g.useState(!!e),[T,E]=g.useState(!1),S=g.useRef(null),[D,V]=g.useState(!1),q=g.useRef(null);g.useEffect(()=>()=>{S.current!==null&&window.clearTimeout(S.current),q.current!==null&&window.clearTimeout(q.current)},[]);const B=()=>{S.current!==null&&(window.clearTimeout(S.current),S.current=null),E(!1)},K=()=>{B(),S.current=window.setTimeout(()=>{S.current=null,C.surfaceDemoThread("shift_drop_maria"),ee(),E(!0)},EB)},ee=()=>{q.current!==null&&window.clearTimeout(q.current),V(!0),q.current=window.setTimeout(()=>{q.current=null,V(!1)},IB)},[ae,se]=g.useState(!e),[le,Z]=g.useState([]),[F,Y]=g.useState(null),A=g.useRef(0),O=xe=>{w("ultron"),$(!1),se(!1),Y(xe)},ne=()=>{L(!0),w("ultron"),se(!1),Y(null),$(!0)},U=()=>{w("ultron"),$(!1),se(!0),Y(null)},J=()=>{const xe=`page-${A.current++}`;Z(Le=>[...Le,{id:xe,title:"New page"}]),O(xe)},[ce,H]=g.useState({}),[P,oe]=g.useState({}),pe=g.useRef({}),de=(xe,Le)=>{const ot=Le.trim();if(!ot)return;const He=(ce[xe]??[]).filter(Ye=>Ye.role==="ultron").length;H(Ye=>({...Ye,[xe]:[...Ye[xe]??[],{role:"operator",text:ot}]})),oe(Ye=>({...Ye,[xe]:!0})),pe.current[xe]=window.setTimeout(()=>{H(Ye=>({...Ye,[xe]:[...Ye[xe]??[],{role:"ultron",text:Bh(ot,He)}]})),oe(Ye=>({...Ye,[xe]:!1})),delete pe.current[xe]},1100)},ve=xe=>{pe.current[xe]&&(window.clearTimeout(pe.current[xe]),delete pe.current[xe]),Z(Le=>Le.filter(ot=>ot.id!==xe)),H(Le=>{const{[xe]:ot,...He}=Le;return He}),oe(Le=>{const{[xe]:ot,...He}=Le;return He}),F===xe&&(Y(null),se(!0))},be=ae?"live":C.selectedThread?ng[C.selectedThread.status]:"new";MB({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:y});const[Se,$e]=g.useState(!1),Ie=xe=>xe.map(Le=>({...Le,isActive:Le.id===i,disabled:Le.id!=="ultron",onClick:Le.id==="ultron"?()=>s("ultron"):()=>$e(!0)})),Ue=[{id:"memory",label:"Memory",icon:n.jsx(tc,{size:16}),isActive:x==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(wg,{size:16})}],De=n.jsx(dx,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),Ae=Pl(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,Ze={id:"welcome",label:Ae?`${Ae} account setup`:"Account setup",icon:n.jsx(lt,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"}),isActive:N,onClick:ne},Xe=le.map(xe=>({id:xe.id,label:xe.title,icon:n.jsx(Q2,{}),isActive:F===xe.id,onClick:()=>O(xe.id),trailingSlot:n.jsx(YB,{onDelete:()=>ve(xe.id)})})),St=x==="account"?ih.map(xe=>({type:"single",item:{id:xe.id,label:xe.label,icon:xe.icon,isActive:k===xe.id,onClick:()=>_(xe.id)}})):C.groups.flatMap(xe=>{const Le=xe.id==="needs_attention"?"new":xe.id==="resolved"?"done":"working",ot=xe.id==="needs_attention"?xe.threads.filter(nt=>nt.status==="analyzing"||C.revealedNewIds.includes(nt.id)):xe.threads,He=xe.id==="needs_attention"&&!M||xe.id==="live"&&M,Ye=xe.id==="needs_attention"?Xe:[],gt={type:"group",group:{id:xe.id,label:xe.id==="needs_attention"?"New":xe.label,icon:KB[xe.id],trailingBadge:n.jsx(Wo,{children:ot.length+(He?1:0)+Ye.length}),defaultExpanded:!0,outlined:!1,children:[...He?[Ze]:[],...Ye,...ot.map(nt=>({id:nt.id,label:nt.id.startsWith("detected_")?n.jsx(BT,{text:o0(nt.name,Le)}):o0(nt.name,Le),icon:nt.id==="shift_drop_maria"&&D?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Le==="new"?nt.status==="analyzing"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Le==="working"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:nt.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:nt.status==="unresolved"?"idle":"static",color:nt.status==="unresolved"?"var(--color-orange-content-tertiary)":C.viewedIds.includes(nt.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!ae&&!F&&be===Le&&C.selectedId===nt.id,onClick:()=>{nt.id==="shift_drop_maria"&&B(),w("ultron"),$(!1),se(!1),Y(null),C.setSelectedId(nt.id)},spotlightPrompt:T&&nt.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:nt.id==="shift_drop_maria"?B:void 0,trailingSlot:C.savedWorkflowIds.includes(nt.id)?n.jsx($r,{content:"Saved as workflow",placement:"top",children:n.jsx(FB,{"aria-label":"Saved as workflow",children:n.jsx(Bo,{})})}):void 0}))]}};return xe.id==="resolved"?[{type:"divider",id:"done-divider"},gt]:xe.id==="live"?[{type:"divider",id:"working-divider"},gt]:[gt]}),Be=[{id:"main",label:"Workspace",items:Ie(J0)},{id:"tools",label:"Tools",items:Ie(eg)},{id:"bottom",label:"Apps",items:Ie(tg)}];return n.jsxs(n.Fragment,{children:[n.jsx(TB,{}),n.jsx(qB,{}),n.jsxs(TO,{items:Ie(J0),toolItems:Ie(eg),bottomItems:Ie(tg),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:St,menuHeader:x==="ultron"?n.jsx(PB,{$active:ae&&!F,onClick:U,"aria-label":"Live — Ultron presence","aria-current":ae&&!F?"page":void 0,children:n.jsx(PT,{onNew:J})}):void 0,pageEntries:Ue,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:De,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:v,selectedPersonaId:h,moduleGroups:Be,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:xe=>{xe==="ultron"&&s("ultron")},onSelectPersona:f,onHome:U,onNewPage:J,openSecondaryNav:T,unreadEventCount:R},children:[z&&n.jsx(VB,{$visible:x==="ultron"&&N,"aria-hidden":x!=="ultron"||!N,children:n.jsx(xD,{active:x==="ultron"&&N,answers:e,onContinued:()=>j(!0),onPhoneSubmitted:K})}),x==="memory"?n.jsx(qT,{}):x==="account"?n.jsx(aE,{collectionId:k}):N?null:F?n.jsx(gT,{messages:ce[F]??[],replying:P[F]??!1,onSend:xe=>de(F,xe)},F):n.jsx(sT,{threads:C.threads,stageById:C.stageById,section:be,analyzedIds:C.analyzedIds,outboundByThread:C.outboundByThread,chatByThread:C.chatByThread,selectedId:C.selectedId,onDecide:C.decide,onAction:C.commit,onCompleteRun:C.completeRun,onRefinement:C.refine,onSaveWorkflow:C.saveWorkflow,pendingWorkflowIds:C.pendingWorkflowIds,onToggleSaveWorkflow:C.toggleWorkflowSave,savedWorkflowIds:C.savedWorkflowIds,onSend:C.sendMessage,replyingIds:C.replyingIds,onStop:C.stopReply,onClose:()=>{w("ultron"),$(!1),se(!0)},onDetectEvent:C.detectEvent,onRevealNew:C.revealNew})]}),n.jsxs(Vg,{open:Se,onClose:()=>$e(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(HB,{onClose:()=>$e(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(WB,{children:n.jsx(BB,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(UB,{children:n.jsx(Fe,{variant:"primary",onClick:()=>$e(!1),children:"Got it"})})]})]})}const rg="cubic-bezier(0.22, 1, 0.36, 1)",og=ke`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,ZB=ke`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,XB=p.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${og} 460ms ${rg} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${og} 500ms ${rg} 90ms both;
  }
  main {
    animation: ${ZB} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Wu="tb:onboarding-complete";function JB(){const[e,o]=g.useState(()=>{try{return window.sessionStorage.getItem(Wu)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=h=>{try{window.sessionStorage.setItem(Wu,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Wu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(XB,{children:n.jsx(QB,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(NP,{onEnterApp:l})}j3.createRoot(document.getElementById("root")).render(n.jsx(mn.StrictMode,{children:n.jsx(Y8,{children:n.jsx(JB,{})})}));
