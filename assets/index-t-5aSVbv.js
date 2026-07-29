(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function X0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},xi={},ru={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function c3(){if(_f)return Ge;_f=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function N(T,O,ne){this.props=T,this.context=O,this.refs=M,this.updater=ne||_}N.prototype.isReactComponent={},N.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function $(){}$.prototype=N.prototype;function S(T,O,ne){this.props=T,this.context=O,this.refs=M,this.updater=ne||_}var j=S.prototype=new $;j.constructor=S,C(j,N.prototype),j.isPureReactComponent=!0;var z=Array.isArray,A=Object.prototype.hasOwnProperty,R={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function L(T,O,ne){var U,Z={},ce=null,B=null;if(O!=null)for(U in O.ref!==void 0&&(B=O.ref),O.key!==void 0&&(ce=""+O.key),O)A.call(O,U)&&!E.hasOwnProperty(U)&&(Z[U]=O[U]);var P=arguments.length-2;if(P===1)Z.children=ne;else if(1<P){for(var oe=Array(P),fe=0;fe<P;fe++)oe[fe]=arguments[fe+2];Z.children=oe}if(T&&T.defaultProps)for(U in P=T.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return{$$typeof:e,type:T,key:ce,ref:B,props:Z,_owner:R.current}}function F(T,O){return{$$typeof:e,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function q(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function V(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return O[ne]})}var H=/\/+/g;function K(T,O){return typeof T=="object"&&T!==null&&T.key!=null?V(""+T.key):O.toString(36)}function ee(T,O,ne,U,Z){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var B=!1;if(T===null)B=!0;else switch(ce){case"string":case"number":B=!0;break;case"object":switch(T.$$typeof){case e:case o:B=!0}}if(B)return B=T,Z=Z(B),T=U===""?"."+K(B,0):U,z(Z)?(ne="",T!=null&&(ne=T.replace(H,"$&/")+"/"),ee(Z,O,ne,"",function(fe){return fe})):Z!=null&&(q(Z)&&(Z=F(Z,ne+(!Z.key||B&&B.key===Z.key?"":(""+Z.key).replace(H,"$&/")+"/")+T)),O.push(Z)),1;if(B=0,U=U===""?".":U+":",z(T))for(var P=0;P<T.length;P++){ce=T[P];var oe=U+K(ce,P);B+=ee(ce,O,ne,oe,Z)}else if(oe=k(T),typeof oe=="function")for(T=oe.call(T),P=0;!(ce=T.next()).done;)ce=ce.value,oe=U+K(ce,P++),B+=ee(ce,O,ne,oe,Z);else if(ce==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return B}function ae(T,O,ne){if(T==null)return T;var U=[],Z=0;return ee(T,U,"","",function(ce){return O.call(ne,ce,Z++)}),U}function se(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var le={current:null},Q={transition:null},D={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Q,ReactCurrentOwner:R};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ge.Children={map:ae,forEach:function(T,O,ne){ae(T,function(){O.apply(this,arguments)},ne)},count:function(T){var O=0;return ae(T,function(){O++}),O},toArray:function(T){return ae(T,function(O){return O})||[]},only:function(T){if(!q(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ge.Component=N,Ge.Fragment=i,Ge.Profiler=l,Ge.PureComponent=S,Ge.StrictMode=s,Ge.Suspense=g,Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,Ge.act=Y,Ge.cloneElement=function(T,O,ne){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var U=C({},T.props),Z=T.key,ce=T.ref,B=T._owner;if(O!=null){if(O.ref!==void 0&&(ce=O.ref,B=R.current),O.key!==void 0&&(Z=""+O.key),T.type&&T.type.defaultProps)var P=T.type.defaultProps;for(oe in O)A.call(O,oe)&&!E.hasOwnProperty(oe)&&(U[oe]=O[oe]===void 0&&P!==void 0?P[oe]:O[oe])}var oe=arguments.length-2;if(oe===1)U.children=ne;else if(1<oe){P=Array(oe);for(var fe=0;fe<oe;fe++)P[fe]=arguments[fe+2];U.children=P}return{$$typeof:e,type:T.type,key:Z,ref:ce,props:U,_owner:B}},Ge.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},Ge.createElement=L,Ge.createFactory=function(T){var O=L.bind(null,T);return O.type=T,O},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(T){return{$$typeof:f,render:T}},Ge.isValidElement=q,Ge.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:se}},Ge.memo=function(T,O){return{$$typeof:y,type:T,compare:O===void 0?null:O}},Ge.startTransition=function(T){var O=Q.transition;Q.transition={};try{T()}finally{Q.transition=O}},Ge.unstable_act=Y,Ge.useCallback=function(T,O){return le.current.useCallback(T,O)},Ge.useContext=function(T){return le.current.useContext(T)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(T){return le.current.useDeferredValue(T)},Ge.useEffect=function(T,O){return le.current.useEffect(T,O)},Ge.useId=function(){return le.current.useId()},Ge.useImperativeHandle=function(T,O,ne){return le.current.useImperativeHandle(T,O,ne)},Ge.useInsertionEffect=function(T,O){return le.current.useInsertionEffect(T,O)},Ge.useLayoutEffect=function(T,O){return le.current.useLayoutEffect(T,O)},Ge.useMemo=function(T,O){return le.current.useMemo(T,O)},Ge.useReducer=function(T,O,ne){return le.current.useReducer(T,O,ne)},Ge.useRef=function(T){return le.current.useRef(T)},Ge.useState=function(T){return le.current.useState(T)},Ge.useSyncExternalStore=function(T,O,ne){return le.current.useSyncExternalStore(T,O,ne)},Ge.useTransition=function(){return le.current.useTransition()},Ge.version="18.3.1",Ge}var jf;function sh(){return jf||(jf=1,ru.exports=c3()),ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function d3(){if(Sf)return xi;Sf=1;var e=sh(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var x,w={},k=null,_=null;y!==void 0&&(k=""+y),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(_=g.ref);for(x in g)s.call(g,x)&&!d.hasOwnProperty(x)&&(w[x]=g[x]);if(f&&f.defaultProps)for(x in g=f.defaultProps,g)w[x]===void 0&&(w[x]=g[x]);return{$$typeof:o,type:f,key:k,ref:_,props:w,_owner:l.current}}return xi.Fragment=i,xi.jsx=h,xi.jsxs=h,xi}var $f;function u3(){return $f||($f=1,nu.exports=d3()),nu.exports}var n=u3(),v=sh();const pn=X0(v);var sl={},ou={exports:{}},ln={},au={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function h3(){return Mf||(Mf=1,(function(e){function o(Q,D){var Y=Q.length;Q.push(D);e:for(;0<Y;){var T=Y-1>>>1,O=Q[T];if(0<l(O,D))Q[T]=D,Q[Y]=O,Y=T;else break e}}function i(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var D=Q[0],Y=Q.pop();if(Y!==D){Q[0]=Y;e:for(var T=0,O=Q.length,ne=O>>>1;T<ne;){var U=2*(T+1)-1,Z=Q[U],ce=U+1,B=Q[ce];if(0>l(Z,Y))ce<O&&0>l(B,Z)?(Q[T]=B,Q[ce]=Y,T=ce):(Q[T]=Z,Q[U]=Y,T=U);else if(ce<O&&0>l(B,Y))Q[T]=B,Q[ce]=Y,T=ce;else break e}}return D}function l(Q,D){var Y=Q.sortIndex-D.sortIndex;return Y!==0?Y:Q.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var g=[],y=[],x=1,w=null,k=3,_=!1,C=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(Q){for(var D=i(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=Q)s(y),D.sortIndex=D.expirationTime,o(g,D);else break;D=i(y)}}function z(Q){if(M=!1,j(Q),!C)if(i(g)!==null)C=!0,se(A);else{var D=i(y);D!==null&&le(z,D.startTime-Q)}}function A(Q,D){C=!1,M&&(M=!1,$(L),L=-1),_=!0;var Y=k;try{for(j(D),w=i(g);w!==null&&(!(w.expirationTime>D)||Q&&!V());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var O=T(w.expirationTime<=D);D=e.unstable_now(),typeof O=="function"?w.callback=O:w===i(g)&&s(g),j(D)}else s(g);w=i(g)}if(w!==null)var ne=!0;else{var U=i(y);U!==null&&le(z,U.startTime-D),ne=!1}return ne}finally{w=null,k=Y,_=!1}}var R=!1,E=null,L=-1,F=5,q=-1;function V(){return!(e.unstable_now()-q<F)}function H(){if(E!==null){var Q=e.unstable_now();q=Q;var D=!0;try{D=E(!0,Q)}finally{D?K():(R=!1,E=null)}}else R=!1}var K;if(typeof S=="function")K=function(){S(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=H,K=function(){ae.postMessage(null)}}else K=function(){N(H,0)};function se(Q){E=Q,R||(R=!0,K())}function le(Q,D){L=N(function(){Q(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){C||_||(C=!0,se(A))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var D=3;break;default:D=k}var Y=k;k=D;try{return Q()}finally{k=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,D){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var Y=k;k=Q;try{return D()}finally{k=Y}},e.unstable_scheduleCallback=function(Q,D,Y){var T=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?T+Y:T):Y=T,Q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,Q={id:x++,callback:D,priorityLevel:Q,startTime:Y,expirationTime:O,sortIndex:-1},Y>T?(Q.sortIndex=Y,o(y,Q),i(g)===null&&Q===i(y)&&(M?($(L),L=-1):M=!0,le(z,Y-T))):(Q.sortIndex=O,o(g,Q),C||_||(C=!0,se(A))),Q},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(Q){var D=k;return function(){var Y=k;k=D;try{return Q.apply(this,arguments)}finally{k=Y}}}})(iu)),iu}var Nf;function p3(){return Nf||(Nf=1,au.exports=h3()),au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function f3(){if(Rf)return ln;Rf=1;var e=sh(),o=p3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function k(t){return g.call(w,t)?!0:g.call(x,t)?!1:y.test(t)?w[t]=!0:(x[t]=!0,!1)}function _(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,r,a,c){if(r===null||typeof r>"u"||_(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,a,c,u,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function S(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace($,S);N[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace($,S);N[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace($,S);N[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(C(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var z=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),R=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),V=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Q=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,T;function O(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var ne=!1;function U(t,r){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),b=u.length-1,I=m.length-1;1<=b&&0<=I&&u[b]!==m[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==m[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==m[I]){var W=`
`+u[b].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=b&&0<=I);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function Z(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case R:return"Portal";case F:return"Profiler";case L:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case q:return(t._context.displayName||"Context")+".Provider";case H:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:ce(t.type)||"Memo";case se:r=t._payload,t=t._init;try{return ce(t(r))}catch{}}return null}function B(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(r);case 8:return r===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function P(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function de(t){t._valueTracker||(t._valueTracker=fe(t))}function ve(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=oe(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Se(t,r){var a=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Me(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=P(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Le(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function De(t,r){Le(t,r);var a=P(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ze(t,r.type,a):r.hasOwnProperty("defaultValue")&&ze(t,r.type,P(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Be(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ze(t,r,a){(r!=="number"||ke(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ke=Array.isArray;function Je(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+P(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function ut(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qe(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Ke(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:P(a)}}function xe(t,r){var a=P(r.value),c=P(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Ae(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var He,Qt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(He=He||document.createElement("div"),He.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=He.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function tt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fo=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(t){Fo.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Hn[r]=Hn[t]})});function Lr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Hn.hasOwnProperty(t)&&Hn[t]?(""+r).trim():r+"px"}function Ee(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=Lr(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var lt=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(t,r){if(r){if(lt[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function ht(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var or=null;function ar(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wn=null,mn=null,Ar=null;function Yi(t){if(t=ri(t)){if(typeof Wn!="function")throw Error(i(280));var r=t.stateNode;r&&(r=ks(r),Wn(t.stateNode,t.type,r))}}function Ki(t){mn?Ar?Ar.push(t):Ar=[t]:mn=t}function Qi(){if(mn){var t=mn,r=Ar;if(Ar=mn=null,Yi(t),r)for(t=0;t<r.length;t++)Yi(r[t])}}function Zi(t,r){return t(r)}function Xi(){}var Bo=!1;function Ji(t,r,a){if(Bo)return t(r,a);Bo=!0;try{return Zi(t,r,a)}finally{Bo=!1,(mn!==null||Ar!==null)&&(Xi(),Qi())}}function $n(t,r){var a=t.stateNode;if(a===null)return null;var c=ks(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var Ea=!1;if(f)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ea=!1}function Ia(t,r,a,c,u,m,b,I,W){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(pe){this.onError(pe)}}var ho=!1,Ho=null,ir=!1,Pa=null,bc={onError:function(t){ho=!0,Ho=t}};function za(t,r,a,c,u,m,b,I,W){ho=!1,Ho=null,Ia.apply(bc,arguments)}function kc(t,r,a,c,u,m,b,I,W){if(za.apply(this,arguments),ho){if(ho){var re=Ho;ho=!1,Ho=null}else throw Error(i(198));ir||(ir=!0,Pa=re)}}function fr(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function po(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function mr(t){if(fr(t)!==t)throw Error(i(188))}function es(t){var r=t.alternate;if(!r){if(r=fr(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===a)return mr(u),t;if(m===c)return mr(u),r;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=m;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=m;break}if(I===c){b=!0,c=u,a=m;break}I=I.sibling}if(!b){for(I=m.child;I;){if(I===a){b=!0,a=m,c=u;break}if(I===c){b=!0,c=m,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function Oa(t){return t=es(t),t!==null?ts(t):null}function ts(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=ts(t);if(r!==null)return r;t=t.sibling}return null}var Lt=o.unstable_scheduleCallback,ns=o.unstable_cancelCallback,rs=o.unstable_shouldYield,J=o.unstable_requestPaint,he=o.unstable_now,Ce=o.unstable_getCurrentPriorityLevel,rt=o.unstable_ImmediatePriority,Fe=o.unstable_UserBlockingPriority,St=o.unstable_NormalPriority,Nn=o.unstable_LowPriority,At=o.unstable_IdlePriority,tn=null,Rn=null;function _x(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(tn,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:$x,jx=Math.log,Sx=Math.LN2;function $x(t){return t>>>=0,t===0?32:31-(jx(t)/Sx|0)|0}var os=64,as=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function is(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=Da(I):(m&=b,m!==0&&(c=Da(m)))}else b=a&~u,b!==0?c=Da(b):m!==0&&(c=Da(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Un(r),u=1<<a,c|=t[a],r&=~u;return c}function Mx(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nx(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-Un(m),I=1<<b,W=u[b];W===-1?((I&a)===0||(I&c)!==0)&&(u[b]=Mx(I,r)):W<=r&&(t.expiredLanes|=I),m&=~I}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ep(){var t=os;return os<<=1,(os&4194240)===0&&(os=64),t}function _c(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Fa(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Un(r),t[r]=a}function Rx(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Un(a),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~m}}function jc(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Un(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var at=0;function tp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var np,Sc,rp,op,ap,$c=!1,ss=[],Tr=null,Er=null,Ir=null,Ba=new Map,Ha=new Map,Pr=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,r){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ba.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(r.pointerId)}}function Wa(t,r,a,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=ri(r),r!==null&&Sc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Ax(t,r,a,c,u){switch(r){case"focusin":return Tr=Wa(Tr,t,r,a,c,u),!0;case"dragenter":return Er=Wa(Er,t,r,a,c,u),!0;case"mouseover":return Ir=Wa(Ir,t,r,a,c,u),!0;case"pointerover":var m=u.pointerId;return Ba.set(m,Wa(Ba.get(m)||null,t,r,a,c,u)),!0;case"gotpointercapture":return m=u.pointerId,Ha.set(m,Wa(Ha.get(m)||null,t,r,a,c,u)),!0}return!1}function sp(t){var r=fo(t.target);if(r!==null){var a=fr(r);if(a!==null){if(r=a.tag,r===13){if(r=po(a),r!==null){t.blockedOn=r,ap(t.priority,function(){rp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ls(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Nc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);or=c,a.target.dispatchEvent(c),or=null}else return r=ri(a),r!==null&&Sc(r),t.blockedOn=a,!1;r.shift()}return!0}function lp(t,r,a){ls(t)&&a.delete(r)}function Tx(){$c=!1,Tr!==null&&ls(Tr)&&(Tr=null),Er!==null&&ls(Er)&&(Er=null),Ir!==null&&ls(Ir)&&(Ir=null),Ba.forEach(lp),Ha.forEach(lp)}function Ua(t,r){t.blockedOn===r&&(t.blockedOn=null,$c||($c=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Tx)))}function qa(t){function r(u){return Ua(u,t)}if(0<ss.length){Ua(ss[0],t);for(var a=1;a<ss.length;a++){var c=ss[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Tr!==null&&Ua(Tr,t),Er!==null&&Ua(Er,t),Ir!==null&&Ua(Ir,t),Ba.forEach(r),Ha.forEach(r),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)sp(a),a.blockedOn===null&&Pr.shift()}var Wo=z.ReactCurrentBatchConfig,cs=!0;function Ex(t,r,a,c){var u=at,m=Wo.transition;Wo.transition=null;try{at=1,Mc(t,r,a,c)}finally{at=u,Wo.transition=m}}function Ix(t,r,a,c){var u=at,m=Wo.transition;Wo.transition=null;try{at=4,Mc(t,r,a,c)}finally{at=u,Wo.transition=m}}function Mc(t,r,a,c){if(cs){var u=Nc(t,r,a,c);if(u===null)Vc(t,r,c,ds,a),ip(t,c);else if(Ax(u,t,r,a,c))c.stopPropagation();else if(ip(t,c),r&4&&-1<Lx.indexOf(t)){for(;u!==null;){var m=ri(u);if(m!==null&&np(m),m=Nc(t,r,a,c),m===null&&Vc(t,r,c,ds,a),m===u)break;u=m}u!==null&&c.stopPropagation()}else Vc(t,r,c,null,a)}}var ds=null;function Nc(t,r,a,c){if(ds=null,t=ar(c),t=fo(t),t!==null)if(r=fr(t),r===null)t=null;else if(a=r.tag,a===13){if(t=po(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ds=t,null}function cp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ce()){case rt:return 1;case Fe:return 4;case St:case Nn:return 16;case At:return 536870912;default:return 16}default:return 16}}var zr=null,Rc=null,us=null;function dp(){if(us)return us;var t,r=Rc,a=r.length,c,u="value"in zr?zr.value:zr.textContent,m=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[m-c];c++);return us=u.slice(t,1<c?1-c:void 0)}function hs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ps(){return!0}function up(){return!1}function gn(t){function r(a,c,u,m,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ps:up,this.isPropagationStopped=up,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),r}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=gn(Uo),Va=Y({},Uo,{view:0,detail:0}),Px=gn(Va),Ac,Tc,Ga,fs=Y({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ga&&(Ga&&t.type==="mousemove"?(Ac=t.screenX-Ga.screenX,Tc=t.screenY-Ga.screenY):Tc=Ac=0,Ga=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),hp=gn(fs),zx=Y({},fs,{dataTransfer:0}),Ox=gn(zx),Dx=Y({},Va,{relatedTarget:0}),Ec=gn(Dx),Fx=Y({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=gn(Fx),Hx=Y({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=gn(Hx),Ux=Y({},Uo,{data:0}),pp=gn(Ux),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Gx[t])?!!r[t]:!1}function Ic(){return Yx}var Kx=Y({},Va,{key:function(t){if(t.key){var r=qx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qx=gn(Kx),Zx=Y({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=gn(Zx),Xx=Y({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Jx=gn(Xx),ey=Y({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=gn(ey),ny=Y({},fs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=gn(ny),oy=[9,13,27,32],Pc=f&&"CompositionEvent"in window,Ya=null;f&&"documentMode"in document&&(Ya=document.documentMode);var ay=f&&"TextEvent"in window&&!Ya,mp=f&&(!Pc||Ya&&8<Ya&&11>=Ya),gp=" ",vp=!1;function xp(t,r){switch(t){case"keyup":return oy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qo=!1;function iy(t,r){switch(t){case"compositionend":return yp(r);case"keypress":return r.which!==32?null:(vp=!0,gp);case"textInput":return t=r.data,t===gp&&vp?null:t;default:return null}}function sy(t,r){if(qo)return t==="compositionend"||!Pc&&xp(t,r)?(t=dp(),us=Rc=zr=null,qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mp&&r.locale!=="ko"?null:r.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ly[t.type]:r==="textarea"}function bp(t,r,a,c){Ki(c),r=ys(r,"onChange"),0<r.length&&(a=new Lc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Ka=null,Qa=null;function cy(t){Dp(t,0)}function ms(t){var r=Qo(t);if(ve(r))return t}function dy(t,r){if(t==="change")return r}var kp=!1;if(f){var zc;if(f){var Oc="oninput"in document;if(!Oc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Oc=typeof Cp.oninput=="function"}zc=Oc}else zc=!1;kp=zc&&(!document.documentMode||9<document.documentMode)}function _p(){Ka&&(Ka.detachEvent("onpropertychange",jp),Qa=Ka=null)}function jp(t){if(t.propertyName==="value"&&ms(Qa)){var r=[];bp(r,Qa,t,ar(t)),Ji(cy,r)}}function uy(t,r,a){t==="focusin"?(_p(),Ka=r,Qa=a,Ka.attachEvent("onpropertychange",jp)):t==="focusout"&&_p()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ms(Qa)}function py(t,r){if(t==="click")return ms(r)}function fy(t,r){if(t==="input"||t==="change")return ms(r)}function my(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var qn=typeof Object.is=="function"?Object.is:my;function Za(t,r){if(qn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(r,u)||!qn(t[u],r[u]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,r){var a=Sp(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Mp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Mp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Np(){for(var t=window,r=ke();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=ke(t.document)}return r}function Dc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function gy(t){var r=Np(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mp(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=$p(a,m);var b=$p(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vy=f&&"documentMode"in document&&11>=document.documentMode,Vo=null,Fc=null,Xa=null,Bc=!1;function Rp(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||Vo==null||Vo!==ke(c)||(c=Vo,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xa&&Za(Xa,c)||(Xa=c,c=ys(Fc,"onSelect"),0<c.length&&(r=new Lc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Vo)))}function gs(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Go={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionend:gs("Transition","TransitionEnd")},Hc={},Lp={};f&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function vs(t){if(Hc[t])return Hc[t];if(!Go[t])return t;var r=Go[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Lp)return Hc[t]=r[a];return t}var Ap=vs("animationend"),Tp=vs("animationiteration"),Ep=vs("animationstart"),Ip=vs("transitionend"),Pp=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,r){Pp.set(t,r),d(r,[t])}for(var Wc=0;Wc<zp.length;Wc++){var Uc=zp[Wc],xy=Uc.toLowerCase(),yy=Uc[0].toUpperCase()+Uc.slice(1);Or(xy,"on"+yy)}Or(Ap,"onAnimationEnd"),Or(Tp,"onAnimationIteration"),Or(Ep,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Ip,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Op(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,kc(c,r,void 0,t),t.currentTarget=null}function Dp(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],W=I.instance,re=I.currentTarget;if(I=I.listener,W!==m&&u.isPropagationStopped())break e;Op(u,I,re),m=W}else for(b=0;b<c.length;b++){if(I=c[b],W=I.instance,re=I.currentTarget,I=I.listener,W!==m&&u.isPropagationStopped())break e;Op(u,I,re),m=W}}}if(ir)throw t=Pa,ir=!1,Pa=null,t}function pt(t,r){var a=r[Xc];a===void 0&&(a=r[Xc]=new Set);var c=t+"__bubble";a.has(c)||(Fp(r,t,2,!1),a.add(c))}function qc(t,r,a){var c=0;r&&(c|=4),Fp(a,t,c,r)}var xs="_reactListening"+Math.random().toString(36).slice(2);function ei(t){if(!t[xs]){t[xs]=!0,s.forEach(function(a){a!=="selectionchange"&&(wy.has(a)||qc(a,!1,t),qc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[xs]||(r[xs]=!0,qc("selectionchange",!1,r))}}function Fp(t,r,a,c){switch(cp(r)){case 1:var u=Ex;break;case 4:u=Ix;break;default:u=Mc}a=u.bind(null,r,a,t),u=void 0,!Ea||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Vc(t,r,a,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===u||W.nodeType===8&&W.parentNode===u))return;b=b.return}for(;I!==null;){if(b=fo(I),b===null)return;if(W=b.tag,W===5||W===6){c=m=b;continue e}I=I.parentNode}}c=c.return}Ji(function(){var re=m,pe=ar(a),me=[];e:{var ue=Pp.get(t);if(ue!==void 0){var ye=Lc,_e=t;switch(t){case"keypress":if(hs(a)===0)break e;case"keydown":case"keyup":ye=Qx;break;case"focusin":_e="focus",ye=Ec;break;case"focusout":_e="blur",ye=Ec;break;case"beforeblur":case"afterblur":ye=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Jx;break;case Ap:case Tp:case Ep:ye=Bx;break;case Ip:ye=ty;break;case"scroll":ye=Px;break;case"wheel":ye=ry;break;case"copy":case"cut":case"paste":ye=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=fp}var je=(r&4)!==0,bt=!je&&t==="scroll",X=je?ue!==null?ue+"Capture":null:ue;je=[];for(var G=re,te;G!==null;){te=G;var ge=te.stateNode;if(te.tag===5&&ge!==null&&(te=ge,X!==null&&(ge=$n(G,X),ge!=null&&je.push(ti(G,ge,te)))),bt)break;G=G.return}0<je.length&&(ue=new ye(ue,_e,null,a,pe),me.push({event:ue,listeners:je}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==or&&(_e=a.relatedTarget||a.fromElement)&&(fo(_e)||_e[gr]))break e;if((ye||ue)&&(ue=pe.window===pe?pe:(ue=pe.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(_e=a.relatedTarget||a.toElement,ye=re,_e=_e?fo(_e):null,_e!==null&&(bt=fr(_e),_e!==bt||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(ye=null,_e=re),ye!==_e)){if(je=hp,ge="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=fp,ge="onPointerLeave",X="onPointerEnter",G="pointer"),bt=ye==null?ue:Qo(ye),te=_e==null?ue:Qo(_e),ue=new je(ge,G+"leave",ye,a,pe),ue.target=bt,ue.relatedTarget=te,ge=null,fo(pe)===re&&(je=new je(X,G+"enter",_e,a,pe),je.target=te,je.relatedTarget=bt,ge=je),bt=ge,ye&&_e)t:{for(je=ye,X=_e,G=0,te=je;te;te=Yo(te))G++;for(te=0,ge=X;ge;ge=Yo(ge))te++;for(;0<G-te;)je=Yo(je),G--;for(;0<te-G;)X=Yo(X),te--;for(;G--;){if(je===X||X!==null&&je===X.alternate)break t;je=Yo(je),X=Yo(X)}je=null}else je=null;ye!==null&&Bp(me,ue,ye,je,!1),_e!==null&&bt!==null&&Bp(me,bt,_e,je,!0)}}e:{if(ue=re?Qo(re):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var $e=dy;else if(wp(ue))if(kp)$e=fy;else{$e=hy;var Ne=uy}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&($e=py);if($e&&($e=$e(t,re))){bp(me,$e,a,pe);break e}Ne&&Ne(t,ue,re),t==="focusout"&&(Ne=ue._wrapperState)&&Ne.controlled&&ue.type==="number"&&ze(ue,"number",ue.value)}switch(Ne=re?Qo(re):window,t){case"focusin":(wp(Ne)||Ne.contentEditable==="true")&&(Vo=Ne,Fc=re,Xa=null);break;case"focusout":Xa=Fc=Vo=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Rp(me,a,pe);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Rp(me,a,pe)}var Re;if(Pc)e:{switch(t){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else qo?xp(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(mp&&a.locale!=="ko"&&(qo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&qo&&(Re=dp()):(zr=pe,Rc="value"in zr?zr.value:zr.textContent,qo=!0)),Ne=ys(re,Te),0<Ne.length&&(Te=new pp(Te,t,null,a,pe),me.push({event:Te,listeners:Ne}),Re?Te.data=Re:(Re=yp(a),Re!==null&&(Te.data=Re)))),(Re=ay?iy(t,a):sy(t,a))&&(re=ys(re,"onBeforeInput"),0<re.length&&(pe=new pp("onBeforeInput","beforeinput",null,a,pe),me.push({event:pe,listeners:re}),pe.data=Re))}Dp(me,r)})}function ti(t,r,a){return{instance:t,listener:r,currentTarget:a}}function ys(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=$n(t,a),m!=null&&c.unshift(ti(t,m,u)),m=$n(t,r),m!=null&&c.push(ti(t,m,u))),t=t.return}return c}function Yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,r,a,c,u){for(var m=r._reactName,b=[];a!==null&&a!==c;){var I=a,W=I.alternate,re=I.stateNode;if(W!==null&&W===c)break;I.tag===5&&re!==null&&(I=re,u?(W=$n(a,m),W!=null&&b.unshift(ti(a,W,I))):u||(W=$n(a,m),W!=null&&b.push(ti(a,W,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var by=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(ky,"")}function ws(t,r,a){if(r=Hp(r),Hp(t)!==r&&a)throw Error(i(425))}function bs(){}var Gc=null,Yc=null;function Kc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(jy)}:Qc;function jy(t){setTimeout(function(){throw t})}function Zc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),qa(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);qa(r)}function Dr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Up(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),sr="__reactFiber$"+Ko,ni="__reactProps$"+Ko,gr="__reactContainer$"+Ko,Xc="__reactEvents$"+Ko,Sy="__reactListeners$"+Ko,$y="__reactHandles$"+Ko;function fo(t){var r=t[sr];if(r)return r;for(var a=t.parentNode;a;){if(r=a[gr]||a[sr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Up(t);t!==null;){if(a=t[sr])return a;t=Up(t)}return r}t=a,a=t.parentNode}return null}function ri(t){return t=t[sr]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ks(t){return t[ni]||null}var Jc=[],Zo=-1;function Fr(t){return{current:t}}function ft(t){0>Zo||(t.current=Jc[Zo],Jc[Zo]=null,Zo--)}function ct(t,r){Zo++,Jc[Zo]=t.current,t.current=r}var Br={},qt=Fr(Br),nn=Fr(!1),mo=Br;function Xo(t,r){var a=t.type.contextTypes;if(!a)return Br;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in a)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function rn(t){return t=t.childContextTypes,t!=null}function Cs(){ft(nn),ft(qt)}function qp(t,r,a){if(qt.current!==Br)throw Error(i(168));ct(qt,r),ct(nn,a)}function Vp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,B(t)||"Unknown",u));return Y({},a,c)}function _s(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,mo=qt.current,ct(qt,t),ct(nn,nn.current),!0}function Gp(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Vp(t,r,mo),c.__reactInternalMemoizedMergedChildContext=t,ft(nn),ft(qt),ct(qt,t)):ft(nn),ct(nn,a)}var vr=null,js=!1,ed=!1;function Yp(t){vr===null?vr=[t]:vr.push(t)}function My(t){js=!0,Yp(t)}function Hr(){if(!ed&&vr!==null){ed=!0;var t=0,r=at;try{var a=vr;for(at=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}vr=null,js=!1}catch(u){throw vr!==null&&(vr=vr.slice(t+1)),Lt(rt,Hr),u}finally{at=r,ed=!1}}return null}var Jo=[],ea=0,Ss=null,$s=0,Ln=[],An=0,go=null,xr=1,yr="";function vo(t,r){Jo[ea++]=$s,Jo[ea++]=Ss,Ss=t,$s=r}function Kp(t,r,a){Ln[An++]=xr,Ln[An++]=yr,Ln[An++]=go,go=t;var c=xr;t=yr;var u=32-Un(c)-1;c&=~(1<<u),a+=1;var m=32-Un(r)+u;if(30<m){var b=u-u%5;m=(c&(1<<b)-1).toString(32),c>>=b,u-=b,xr=1<<32-Un(r)+u|a<<u|c,yr=m+t}else xr=1<<m|a<<u|c,yr=t}function td(t){t.return!==null&&(vo(t,1),Kp(t,1,0))}function nd(t){for(;t===Ss;)Ss=Jo[--ea],Jo[ea]=null,$s=Jo[--ea],Jo[ea]=null;for(;t===go;)go=Ln[--An],Ln[An]=null,yr=Ln[--An],Ln[An]=null,xr=Ln[--An],Ln[An]=null}var vn=null,xn=null,gt=!1,Vn=null;function Qp(t,r){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Zp(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,vn=t,xn=Dr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,vn=t,xn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=go!==null?{id:xr,overflow:yr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,vn=t,xn=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(gt){var r=xn;if(r){var a=r;if(!Zp(t,r)){if(rd(t))throw Error(i(418));r=Dr(a.nextSibling);var c=vn;r&&Zp(t,r)?Qp(c,a):(t.flags=t.flags&-4097|2,gt=!1,vn=t)}}else{if(rd(t))throw Error(i(418));t.flags=t.flags&-4097|2,gt=!1,vn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ms(t){if(t!==vn)return!1;if(!gt)return Xp(t),gt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Kc(t.type,t.memoizedProps)),r&&(r=xn)){if(rd(t))throw Jp(),Error(i(418));for(;r;)Qp(t,r),r=Dr(r.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){xn=Dr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}xn=null}}else xn=vn?Dr(t.stateNode.nextSibling):null;return!0}function Jp(){for(var t=xn;t;)t=Dr(t.nextSibling)}function ta(){xn=vn=null,gt=!1}function ad(t){Vn===null?Vn=[t]:Vn.push(t)}var Ny=z.ReactCurrentBatchConfig;function oi(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var I=u.refs;b===null?delete I[m]:I[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Ns(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function e1(t){var r=t._init;return r(t._payload)}function t1(t){function r(X,G){if(t){var te=X.deletions;te===null?(X.deletions=[G],X.flags|=16):te.push(G)}}function a(X,G){if(!t)return null;for(;G!==null;)r(X,G),G=G.sibling;return null}function c(X,G){for(X=new Map;G!==null;)G.key!==null?X.set(G.key,G):X.set(G.index,G),G=G.sibling;return X}function u(X,G){return X=Qr(X,G),X.index=0,X.sibling=null,X}function m(X,G,te){return X.index=te,t?(te=X.alternate,te!==null?(te=te.index,te<G?(X.flags|=2,G):te):(X.flags|=2,G)):(X.flags|=1048576,G)}function b(X){return t&&X.alternate===null&&(X.flags|=2),X}function I(X,G,te,ge){return G===null||G.tag!==6?(G=Qd(te,X.mode,ge),G.return=X,G):(G=u(G,te),G.return=X,G)}function W(X,G,te,ge){var $e=te.type;return $e===E?pe(X,G,te.props.children,ge,te.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===se&&e1($e)===G.type)?(ge=u(G,te.props),ge.ref=oi(X,G,te),ge.return=X,ge):(ge=Js(te.type,te.key,te.props,null,X.mode,ge),ge.ref=oi(X,G,te),ge.return=X,ge)}function re(X,G,te,ge){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Zd(te,X.mode,ge),G.return=X,G):(G=u(G,te.children||[]),G.return=X,G)}function pe(X,G,te,ge,$e){return G===null||G.tag!==7?(G=jo(te,X.mode,ge,$e),G.return=X,G):(G=u(G,te),G.return=X,G)}function me(X,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Qd(""+G,X.mode,te),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return te=Js(G.type,G.key,G.props,null,X.mode,te),te.ref=oi(X,null,G),te.return=X,te;case R:return G=Zd(G,X.mode,te),G.return=X,G;case se:var ge=G._init;return me(X,ge(G._payload),te)}if(Ke(G)||D(G))return G=jo(G,X.mode,te,null),G.return=X,G;Ns(X,G)}return null}function ue(X,G,te,ge){var $e=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:I(X,G,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case A:return te.key===$e?W(X,G,te,ge):null;case R:return te.key===$e?re(X,G,te,ge):null;case se:return $e=te._init,ue(X,G,$e(te._payload),ge)}if(Ke(te)||D(te))return $e!==null?null:pe(X,G,te,ge,null);Ns(X,te)}return null}function ye(X,G,te,ge,$e){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return X=X.get(te)||null,I(G,X,""+ge,$e);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case A:return X=X.get(ge.key===null?te:ge.key)||null,W(G,X,ge,$e);case R:return X=X.get(ge.key===null?te:ge.key)||null,re(G,X,ge,$e);case se:var Ne=ge._init;return ye(X,G,te,Ne(ge._payload),$e)}if(Ke(ge)||D(ge))return X=X.get(te)||null,pe(G,X,ge,$e,null);Ns(G,ge)}return null}function _e(X,G,te,ge){for(var $e=null,Ne=null,Re=G,Te=G=0,It=null;Re!==null&&Te<te.length;Te++){Re.index>Te?(It=Re,Re=null):It=Re.sibling;var nt=ue(X,Re,te[Te],ge);if(nt===null){Re===null&&(Re=It);break}t&&Re&&nt.alternate===null&&r(X,Re),G=m(nt,G,Te),Ne===null?$e=nt:Ne.sibling=nt,Ne=nt,Re=It}if(Te===te.length)return a(X,Re),gt&&vo(X,Te),$e;if(Re===null){for(;Te<te.length;Te++)Re=me(X,te[Te],ge),Re!==null&&(G=m(Re,G,Te),Ne===null?$e=Re:Ne.sibling=Re,Ne=Re);return gt&&vo(X,Te),$e}for(Re=c(X,Re);Te<te.length;Te++)It=ye(Re,X,Te,te[Te],ge),It!==null&&(t&&It.alternate!==null&&Re.delete(It.key===null?Te:It.key),G=m(It,G,Te),Ne===null?$e=It:Ne.sibling=It,Ne=It);return t&&Re.forEach(function(Zr){return r(X,Zr)}),gt&&vo(X,Te),$e}function je(X,G,te,ge){var $e=D(te);if(typeof $e!="function")throw Error(i(150));if(te=$e.call(te),te==null)throw Error(i(151));for(var Ne=$e=null,Re=G,Te=G=0,It=null,nt=te.next();Re!==null&&!nt.done;Te++,nt=te.next()){Re.index>Te?(It=Re,Re=null):It=Re.sibling;var Zr=ue(X,Re,nt.value,ge);if(Zr===null){Re===null&&(Re=It);break}t&&Re&&Zr.alternate===null&&r(X,Re),G=m(Zr,G,Te),Ne===null?$e=Zr:Ne.sibling=Zr,Ne=Zr,Re=It}if(nt.done)return a(X,Re),gt&&vo(X,Te),$e;if(Re===null){for(;!nt.done;Te++,nt=te.next())nt=me(X,nt.value,ge),nt!==null&&(G=m(nt,G,Te),Ne===null?$e=nt:Ne.sibling=nt,Ne=nt);return gt&&vo(X,Te),$e}for(Re=c(X,Re);!nt.done;Te++,nt=te.next())nt=ye(Re,X,Te,nt.value,ge),nt!==null&&(t&&nt.alternate!==null&&Re.delete(nt.key===null?Te:nt.key),G=m(nt,G,Te),Ne===null?$e=nt:Ne.sibling=nt,Ne=nt);return t&&Re.forEach(function(l3){return r(X,l3)}),gt&&vo(X,Te),$e}function bt(X,G,te,ge){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case A:e:{for(var $e=te.key,Ne=G;Ne!==null;){if(Ne.key===$e){if($e=te.type,$e===E){if(Ne.tag===7){a(X,Ne.sibling),G=u(Ne,te.props.children),G.return=X,X=G;break e}}else if(Ne.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===se&&e1($e)===Ne.type){a(X,Ne.sibling),G=u(Ne,te.props),G.ref=oi(X,Ne,te),G.return=X,X=G;break e}a(X,Ne);break}else r(X,Ne);Ne=Ne.sibling}te.type===E?(G=jo(te.props.children,X.mode,ge,te.key),G.return=X,X=G):(ge=Js(te.type,te.key,te.props,null,X.mode,ge),ge.ref=oi(X,G,te),ge.return=X,X=ge)}return b(X);case R:e:{for(Ne=te.key;G!==null;){if(G.key===Ne)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(X,G.sibling),G=u(G,te.children||[]),G.return=X,X=G;break e}else{a(X,G);break}else r(X,G);G=G.sibling}G=Zd(te,X.mode,ge),G.return=X,X=G}return b(X);case se:return Ne=te._init,bt(X,G,Ne(te._payload),ge)}if(Ke(te))return _e(X,G,te,ge);if(D(te))return je(X,G,te,ge);Ns(X,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(X,G.sibling),G=u(G,te),G.return=X,X=G):(a(X,G),G=Qd(te,X.mode,ge),G.return=X,X=G),b(X)):a(X,G)}return bt}var na=t1(!0),n1=t1(!1),Rs=Fr(null),Ls=null,ra=null,id=null;function sd(){id=ra=Ls=null}function ld(t){var r=Rs.current;ft(Rs),t._currentValue=r}function cd(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function oa(t,r){Ls=t,id=ra=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(on=!0),t.firstContext=null)}function Tn(t){var r=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:r,next:null},ra===null){if(Ls===null)throw Error(i(308));ra=t,Ls.dependencies={lanes:0,firstContext:t}}else ra=ra.next=t;return r}var xo=null;function dd(t){xo===null?xo=[t]:xo.push(t)}function r1(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,dd(r)):(a.next=u.next,u.next=a),r.interleaved=a,wr(t,c)}function wr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Wr=!1;function ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o1(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Ur(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(et&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,wr(t,a)}return u=c.interleaved,u===null?(r.next=r,dd(c)):(r.next=u.next,u.next=r),c.interleaved=r,wr(t,a)}function As(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,jc(t,a)}}function a1(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?u=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?u=m=r:m=m.next=r}else u=m=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Ts(t,r,a,c){var u=t.updateQueue;Wr=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var W=I,re=W.next;W.next=null,b===null?m=re:b.next=re,b=W;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,I=pe.lastBaseUpdate,I!==b&&(I===null?pe.firstBaseUpdate=re:I.next=re,pe.lastBaseUpdate=W))}if(m!==null){var me=u.baseState;b=0,pe=re=W=null,I=m;do{var ue=I.lane,ye=I.eventTime;if((c&ue)===ue){pe!==null&&(pe=pe.next={eventTime:ye,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var _e=t,je=I;switch(ue=r,ye=a,je.tag){case 1:if(_e=je.payload,typeof _e=="function"){me=_e.call(ye,me,ue);break e}me=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=je.payload,ue=typeof _e=="function"?_e.call(ye,me,ue):_e,ue==null)break e;me=Y({},me,ue);break e;case 2:Wr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else ye={eventTime:ye,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},pe===null?(re=pe=ye,W=me):pe=pe.next=ye,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(pe===null&&(W=me),u.baseState=W,u.firstBaseUpdate=re,u.lastBaseUpdate=pe,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);bo|=b,t.lanes=b,t.memoizedState=me}}function i1(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var ai={},lr=Fr(ai),ii=Fr(ai),si=Fr(ai);function yo(t){if(t===ai)throw Error(i(174));return t}function hd(t,r){switch(ct(si,r),ct(ii,t),ct(lr,ai),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Ve(r,t)}ft(lr),ct(lr,r)}function aa(){ft(lr),ft(ii),ft(si)}function s1(t){yo(si.current);var r=yo(lr.current),a=Ve(r,t.type);r!==a&&(ct(ii,t),ct(lr,a))}function pd(t){ii.current===t&&(ft(lr),ft(ii))}var vt=Fr(0);function Es(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var fd=[];function md(){for(var t=0;t<fd.length;t++)fd[t]._workInProgressVersionPrimary=null;fd.length=0}var Is=z.ReactCurrentDispatcher,gd=z.ReactCurrentBatchConfig,wo=0,xt=null,$t=null,Tt=null,Ps=!1,li=!1,ci=0,Ry=0;function Vt(){throw Error(i(321))}function vd(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!qn(t[a],r[a]))return!1;return!0}function xd(t,r,a,c,u,m){if(wo=m,xt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Is.current=t===null||t.memoizedState===null?Ey:Iy,t=a(c,u),li){m=0;do{if(li=!1,ci=0,25<=m)throw Error(i(301));m+=1,Tt=$t=null,r.updateQueue=null,Is.current=Py,t=a(c,u)}while(li)}if(Is.current=Ds,r=$t!==null&&$t.next!==null,wo=0,Tt=$t=xt=null,Ps=!1,r)throw Error(i(300));return t}function yd(){var t=ci!==0;return ci=0,t}function cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?xt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function En(){if($t===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var r=Tt===null?xt.memoizedState:Tt.next;if(r!==null)Tt=r,$t=t;else{if(t===null)throw Error(i(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Tt===null?xt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function di(t,r){return typeof r=="function"?r(t):r}function wd(t){var r=En(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=$t,u=c.baseQueue,m=a.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}c.baseQueue=u=m,a.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=b=null,W=null,re=m;do{var pe=re.lane;if((wo&pe)===pe)W!==null&&(W=W.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var me={lane:pe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};W===null?(I=W=me,b=c):W=W.next=me,xt.lanes|=pe,bo|=pe}re=re.next}while(re!==null&&re!==m);W===null?b=c:W.next=I,qn(c,r.memoizedState)||(on=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=W,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do m=u.lane,xt.lanes|=m,bo|=m,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function bd(t){var r=En(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,m=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do m=t(m,b.action),b=b.next;while(b!==u);qn(m,r.memoizedState)||(on=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function l1(){}function c1(t,r){var a=xt,c=En(),u=r(),m=!qn(c.memoizedState,u);if(m&&(c.memoizedState=u,on=!0),c=c.queue,kd(h1.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ui(9,u1.bind(null,a,c,u,r),void 0,null),Et===null)throw Error(i(349));(wo&30)!==0||d1(a,r,u)}return u}function d1(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=xt.updateQueue,r===null?(r={lastEffect:null,stores:null},xt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function u1(t,r,a,c){r.value=a,r.getSnapshot=c,p1(r)&&f1(t)}function h1(t,r,a){return a(function(){p1(r)&&f1(t)})}function p1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!qn(t,a)}catch{return!0}}function f1(t){var r=wr(t,1);r!==null&&Qn(r,t,1,-1)}function m1(t){var r=cr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},r.queue=t,t=t.dispatch=Ty.bind(null,xt,t),[r.memoizedState,t]}function ui(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=xt.updateQueue,r===null?(r={lastEffect:null,stores:null},xt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function g1(){return En().memoizedState}function zs(t,r,a,c){var u=cr();xt.flags|=t,u.memoizedState=ui(1|r,a,void 0,c===void 0?null:c)}function Os(t,r,a,c){var u=En();c=c===void 0?null:c;var m=void 0;if($t!==null){var b=$t.memoizedState;if(m=b.destroy,c!==null&&vd(c,b.deps)){u.memoizedState=ui(r,a,m,c);return}}xt.flags|=t,u.memoizedState=ui(1|r,a,m,c)}function v1(t,r){return zs(8390656,8,t,r)}function kd(t,r){return Os(2048,8,t,r)}function x1(t,r){return Os(4,2,t,r)}function y1(t,r){return Os(4,4,t,r)}function w1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function b1(t,r,a){return a=a!=null?a.concat([t]):null,Os(4,4,w1.bind(null,r,t),a)}function Cd(){}function k1(t,r){var a=En();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&vd(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function C1(t,r){var a=En();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&vd(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function _1(t,r,a){return(wo&21)===0?(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=a):(qn(a,r)||(a=ep(),xt.lanes|=a,bo|=a,t.baseState=!0),r)}function Ly(t,r){var a=at;at=a!==0&&4>a?a:4,t(!0);var c=gd.transition;gd.transition={};try{t(!1),r()}finally{at=a,gd.transition=c}}function j1(){return En().memoizedState}function Ay(t,r,a){var c=Yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},S1(t))$1(r,a);else if(a=r1(t,r,a,c),a!==null){var u=Xt();Qn(a,t,c,u),M1(a,r,c)}}function Ty(t,r,a){var c=Yr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(S1(t))$1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,I=m(b,a);if(u.hasEagerState=!0,u.eagerState=I,qn(I,b)){var W=r.interleaved;W===null?(u.next=u,dd(r)):(u.next=W.next,W.next=u),r.interleaved=u;return}}catch{}finally{}a=r1(t,r,u,c),a!==null&&(u=Xt(),Qn(a,t,c,u),M1(a,r,c))}}function S1(t){var r=t.alternate;return t===xt||r!==null&&r===xt}function $1(t,r){li=Ps=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function M1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,jc(t,a)}}var Ds={readContext:Tn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Ey={readContext:Tn,useCallback:function(t,r){return cr().memoizedState=[t,r===void 0?null:r],t},useContext:Tn,useEffect:v1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,zs(4194308,4,w1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return zs(4194308,4,t,r)},useInsertionEffect:function(t,r){return zs(4,2,t,r)},useMemo:function(t,r){var a=cr();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=cr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Ay.bind(null,xt,t),[c.memoizedState,t]},useRef:function(t){var r=cr();return t={current:t},r.memoizedState=t},useState:m1,useDebugValue:Cd,useDeferredValue:function(t){return cr().memoizedState=t},useTransition:function(){var t=m1(!1),r=t[0];return t=Ly.bind(null,t[1]),cr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=xt,u=cr();if(gt){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Et===null)throw Error(i(349));(wo&30)!==0||d1(c,r,a)}u.memoizedState=a;var m={value:a,getSnapshot:r};return u.queue=m,v1(h1.bind(null,c,m,t),[t]),c.flags|=2048,ui(9,u1.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=cr(),r=Et.identifierPrefix;if(gt){var a=yr,c=xr;a=(c&~(1<<32-Un(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ci++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Ry++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Iy={readContext:Tn,useCallback:k1,useContext:Tn,useEffect:kd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:C1,useReducer:wd,useRef:g1,useState:function(){return wd(di)},useDebugValue:Cd,useDeferredValue:function(t){var r=En();return _1(r,$t.memoizedState,t)},useTransition:function(){var t=wd(di)[0],r=En().memoizedState;return[t,r]},useMutableSource:l1,useSyncExternalStore:c1,useId:j1,unstable_isNewReconciler:!1},Py={readContext:Tn,useCallback:k1,useContext:Tn,useEffect:kd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:C1,useReducer:bd,useRef:g1,useState:function(){return bd(di)},useDebugValue:Cd,useDeferredValue:function(t){var r=En();return $t===null?r.memoizedState=t:_1(r,$t.memoizedState,t)},useTransition:function(){var t=bd(di)[0],r=En().memoizedState;return[t,r]},useMutableSource:l1,useSyncExternalStore:c1,useId:j1,unstable_isNewReconciler:!1};function Gn(t,r){if(t&&t.defaultProps){r=Y({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function _d(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:Y({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fs={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Xt(),u=Yr(t),m=br(c,u);m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Qn(r,t,u,c),As(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Xt(),u=Yr(t),m=br(c,u);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Qn(r,t,u,c),As(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Xt(),c=Yr(t),u=br(a,c);u.tag=2,r!=null&&(u.callback=r),r=Ur(t,u,c),r!==null&&(Qn(r,t,c,a),As(r,t,c))}};function N1(t,r,a,c,u,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!Za(a,c)||!Za(u,m):!0}function R1(t,r,a){var c=!1,u=Br,m=r.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(u=rn(r)?mo:qt.current,c=r.contextTypes,m=(c=c!=null)?Xo(t,u):Br),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fs,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function L1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Fs.enqueueReplaceState(r,r.state,null)}function jd(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},ud(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=Tn(m):(m=rn(r)?mo:qt.current,u.context=Xo(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(_d(t,r,m,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Fs.enqueueReplaceState(u,u.state,null),Ts(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,r){try{var a="",c=r;do a+=Z(c),c=c.return;while(c);var u=a}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function Sd(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function $d(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function A1(t,r,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Gs||(Gs=!0,Hd=c),$d(t,r)},a}function T1(t,r,a){a=br(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){$d(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){$d(t,r),typeof c!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function E1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new zy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=Zy.bind(null,t,r,a),r.then(t,t))}function I1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function P1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=br(-1,1),r.tag=2,Ur(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Oy=z.ReactCurrentOwner,on=!1;function Zt(t,r,a,c){r.child=t===null?n1(r,null,a,c):na(r,t.child,a,c)}function z1(t,r,a,c,u){a=a.render;var m=r.ref;return oa(r,u),c=xd(t,r,a,c,m,u),a=yd(),t!==null&&!on?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,kr(t,r,u)):(gt&&a&&td(r),r.flags|=1,Zt(t,r,c,u),r.child)}function O1(t,r,a,c,u){if(t===null){var m=a.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,D1(t,r,m,c,u)):(t=Js(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Za,a(b,c)&&t.ref===r.ref)return kr(t,r,u)}return r.flags|=1,t=Qr(m,c),t.ref=r.ref,t.return=r,r.child=t}function D1(t,r,a,c,u){if(t!==null){var m=t.memoizedProps;if(Za(m,c)&&t.ref===r.ref)if(on=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(on=!0);else return r.lanes=t.lanes,kr(t,r,u)}return Md(t,r,a,c,u)}function F1(t,r,a){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(la,yn),yn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(la,yn),yn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ct(la,yn),yn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,ct(la,yn),yn|=c;return Zt(t,r,u,a),r.child}function B1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Md(t,r,a,c,u){var m=rn(a)?mo:qt.current;return m=Xo(r,m),oa(r,u),a=xd(t,r,a,c,m,u),c=yd(),t!==null&&!on?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,kr(t,r,u)):(gt&&c&&td(r),r.flags|=1,Zt(t,r,a,u),r.child)}function H1(t,r,a,c,u){if(rn(a)){var m=!0;_s(r)}else m=!1;if(oa(r,u),r.stateNode===null)Hs(t,r),R1(r,a,c),jd(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var W=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=Tn(re):(re=rn(a)?mo:qt.current,re=Xo(r,re));var pe=a.getDerivedStateFromProps,me=typeof pe=="function"||typeof b.getSnapshotBeforeUpdate=="function";me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||W!==re)&&L1(r,b,c,re),Wr=!1;var ue=r.memoizedState;b.state=ue,Ts(r,c,b,u),W=r.memoizedState,I!==c||ue!==W||nn.current||Wr?(typeof pe=="function"&&(_d(r,a,pe,c),W=r.memoizedState),(I=Wr||N1(r,a,I,c,ue,W,re))?(me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=W),b.props=c,b.state=W,b.context=re,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,o1(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:Gn(r.type,I),b.props=re,me=r.pendingProps,ue=b.context,W=a.contextType,typeof W=="object"&&W!==null?W=Tn(W):(W=rn(a)?mo:qt.current,W=Xo(r,W));var ye=a.getDerivedStateFromProps;(pe=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==me||ue!==W)&&L1(r,b,c,W),Wr=!1,ue=r.memoizedState,b.state=ue,Ts(r,c,b,u);var _e=r.memoizedState;I!==me||ue!==_e||nn.current||Wr?(typeof ye=="function"&&(_d(r,a,ye,c),_e=r.memoizedState),(re=Wr||N1(r,a,re,c,ue,_e,W)||!1)?(pe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,_e,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,_e,W)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=_e),b.props=c,b.state=_e,b.context=W,c=re):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return Nd(t,r,a,c,m,u)}function Nd(t,r,a,c,u,m){B1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Gp(r,a,!1),kr(t,r,m);c=r.stateNode,Oy.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=na(r,t.child,null,m),r.child=na(r,null,I,m)):Zt(t,r,I,m),r.memoizedState=c.state,u&&Gp(r,a,!0),r.child}function W1(t){var r=t.stateNode;r.pendingContext?qp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&qp(t,r.context,!1),hd(t,r.containerInfo)}function U1(t,r,a,c,u){return ta(),ad(u),r.flags|=256,Zt(t,r,a,c),r.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function q1(t,r,a){var c=r.pendingProps,u=vt.current,m=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),ct(vt,u&1),t===null)return od(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=el(b,c,0,null),t=jo(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=Ld(a),r.memoizedState=Rd,t):Ad(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Dy(t,r,b,c,I,u,a);if(m){m=c.fallback,b=r.mode,u=t.child,I=u.sibling;var W={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=W,r.deletions=null):(c=Qr(u,W),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Qr(I,m):(m=jo(m,b,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?Ld(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=Rd,c}return m=t.child,t=m.sibling,c=Qr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Ad(t,r){return r=el({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Bs(t,r,a,c){return c!==null&&ad(c),na(r,t.child,null,a),t=Ad(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Dy(t,r,a,c,u,m,b){if(a)return r.flags&256?(r.flags&=-257,c=Sd(Error(i(422))),Bs(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=el({mode:"visible",children:c.children},u,0,null),m=jo(m,u,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&na(r,t.child,null,b),r.child.memoizedState=Ld(b),r.memoizedState=Rd,m);if((r.mode&1)===0)return Bs(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(i(419)),c=Sd(m,c,void 0),Bs(t,r,b,c)}if(I=(b&t.childLanes)!==0,on||I){if(c=Et,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,wr(t,u),Qn(c,t,u,-1))}return Yd(),c=Sd(Error(i(421))),Bs(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=Xy.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,xn=Dr(u.nextSibling),vn=r,gt=!0,Vn=null,t!==null&&(Ln[An++]=xr,Ln[An++]=yr,Ln[An++]=go,xr=t.id,yr=t.overflow,go=r),r=Ad(r,c.children),r.flags|=4096,r)}function V1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),cd(t.return,r,a)}function Td(t,r,a,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=u)}function G1(t,r,a){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(Zt(t,r,c.children,a),c=vt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V1(t,a,r);else if(t.tag===19)V1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(ct(vt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&Es(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Td(r,!1,u,a,m);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Es(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Td(r,!0,a,null,m);break;case"together":Td(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hs(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function kr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),bo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Qr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Fy(t,r,a){switch(r.tag){case 3:W1(r),ta();break;case 5:s1(r);break;case 1:rn(r.type)&&_s(r);break;case 4:hd(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;ct(Rs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ct(vt,vt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?q1(t,r,a):(ct(vt,vt.current&1),t=kr(t,r,a),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return G1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(vt,vt.current),c)break;return null;case 22:case 23:return r.lanes=0,F1(t,r,a)}return kr(t,r,a)}var Y1,Ed,K1,Q1;Y1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ed=function(){},K1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,yo(lr.current);var m=null;switch(a){case"input":u=Se(t,u),c=Se(t,c),m=[];break;case"select":u=Y({},u,{value:void 0}),c=Y({},c,{value:void 0}),m=[];break;case"textarea":u=ut(t,u),c=ut(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=bs)}yt(a,c);var b;a=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var W=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&W!==I&&(W!=null||I!=null))if(re==="style")if(I){for(b in I)!I.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in W)W.hasOwnProperty(b)&&I[b]!==W[b]&&(a||(a={}),a[b]=W[b])}else a||(m||(m=[]),m.push(re,a)),a=W;else re==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,I=I?I.__html:void 0,W!=null&&I!==W&&(m=m||[]).push(re,W)):re==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(re,""+W):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(W!=null&&re==="onScroll"&&pt("scroll",t),m||I===W||(m=[])):(m=m||[]).push(re,W))}a&&(m=m||[]).push("style",a);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},Q1=function(t,r,a,c){a!==c&&(r.flags|=4)};function hi(t,r){if(!gt)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Gt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function By(t,r,a){var c=r.pendingProps;switch(nd(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(r),null;case 1:return rn(r.type)&&Cs(),Gt(r),null;case 3:return c=r.stateNode,aa(),ft(nn),ft(qt),md(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ms(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(qd(Vn),Vn=null))),Ed(t,r),Gt(r),null;case 5:pd(r);var u=yo(si.current);if(a=r.type,t!==null&&r.stateNode!=null)K1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Gt(r),null}if(t=yo(lr.current),Ms(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[sr]=r,c[ni]=m,t=(r.mode&1)!==0,a){case"dialog":pt("cancel",c),pt("close",c);break;case"iframe":case"object":case"embed":pt("load",c);break;case"video":case"audio":for(u=0;u<Ja.length;u++)pt(Ja[u],c);break;case"source":pt("error",c);break;case"img":case"image":case"link":pt("error",c),pt("load",c);break;case"details":pt("toggle",c);break;case"input":Me(c,m),pt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},pt("invalid",c);break;case"textarea":qe(c,m),pt("invalid",c)}yt(a,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var I=m[b];b==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&ws(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ws(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&pt("scroll",c)}switch(a){case"input":de(c),Be(c,m,!0);break;case"textarea":de(c),Ae(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bs)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[sr]=r,t[ni]=c,Y1(t,r,!1,!1),r.stateNode=t;e:{switch(b=ht(a,c),a){case"dialog":pt("cancel",t),pt("close",t),u=c;break;case"iframe":case"object":case"embed":pt("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ja.length;u++)pt(Ja[u],t);u=c;break;case"source":pt("error",t),u=c;break;case"img":case"image":case"link":pt("error",t),pt("load",t),u=c;break;case"details":pt("toggle",t),u=c;break;case"input":Me(t,c),u=Se(t,c),pt("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=Y({},c,{value:void 0}),pt("invalid",t);break;case"textarea":qe(t,c),u=ut(t,c),pt("invalid",t);break;default:u=c}yt(a,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var W=I[m];m==="style"?Ee(t,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Qt(t,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&tt(t,W):typeof W=="number"&&tt(t,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?W!=null&&m==="onScroll"&&pt("scroll",t):W!=null&&j(t,m,W,b))}switch(a){case"input":de(t),Be(t,c,!1);break;case"textarea":de(t),Ae(t);break;case"option":c.value!=null&&t.setAttribute("value",""+P(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Je(t,!!c.multiple,m,!1):c.defaultValue!=null&&Je(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=bs)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Gt(r),null;case 6:if(t&&r.stateNode!=null)Q1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=yo(si.current),yo(lr.current),Ms(r)){if(c=r.stateNode,a=r.memoizedProps,c[sr]=r,(m=c.nodeValue!==a)&&(t=vn,t!==null))switch(t.tag){case 3:ws(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ws(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[sr]=r,r.stateNode=c}return Gt(r),null;case 13:if(ft(vt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&xn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Jp(),ta(),r.flags|=98560,m=!1;else if(m=Ms(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(i(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[sr]=r}else ta(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Gt(r),m=!1}else Vn!==null&&(qd(Vn),Vn=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(vt.current&1)!==0?Mt===0&&(Mt=3):Yd())),r.updateQueue!==null&&(r.flags|=4),Gt(r),null);case 4:return aa(),Ed(t,r),t===null&&ei(r.stateNode.containerInfo),Gt(r),null;case 10:return ld(r.type._context),Gt(r),null;case 17:return rn(r.type)&&Cs(),Gt(r),null;case 19:if(ft(vt),m=r.memoizedState,m===null)return Gt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)hi(m,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=Es(t),b!==null){for(r.flags|=128,hi(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return ct(vt,vt.current&1|2),r.child}t=t.sibling}m.tail!==null&&he()>ca&&(r.flags|=128,c=!0,hi(m,!1),r.lanes=4194304)}else{if(!c)if(t=Es(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),hi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!gt)return Gt(r),null}else 2*he()-m.renderingStartTime>ca&&a!==1073741824&&(r.flags|=128,c=!0,hi(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=he(),r.sibling=null,a=vt.current,ct(vt,c?a&1|2:a&1),r):(Gt(r),null);case 22:case 23:return Gd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(yn&1073741824)!==0&&(Gt(r),r.subtreeFlags&6&&(r.flags|=8192)):Gt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Hy(t,r){switch(nd(r),r.tag){case 1:return rn(r.type)&&Cs(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return aa(),ft(nn),ft(qt),md(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return pd(r),null;case 13:if(ft(vt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));ta()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ft(vt),null;case 4:return aa(),null;case 10:return ld(r.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Ws=!1,Yt=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,be=null;function sa(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){wt(t,r,c)}else a.current=null}function Id(t,r,a){try{a()}catch(c){wt(t,r,c)}}var Z1=!1;function Uy(t,r){if(Gc=cs,t=Np(),Dc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,I=-1,W=-1,re=0,pe=0,me=t,ue=null;t:for(;;){for(var ye;me!==a||u!==0&&me.nodeType!==3||(I=b+u),me!==m||c!==0&&me.nodeType!==3||(W=b+c),me.nodeType===3&&(b+=me.nodeValue.length),(ye=me.firstChild)!==null;)ue=me,me=ye;for(;;){if(me===t)break t;if(ue===a&&++re===u&&(I=b),ue===m&&++pe===c&&(W=b),(ye=me.nextSibling)!==null)break;me=ue,ue=me.parentNode}me=ye}a=I===-1||W===-1?null:{start:I,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:t,selectionRange:a},cs=!1,be=r;be!==null;)if(r=be,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,be=t;else for(;be!==null;){r=be;try{var _e=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var je=_e.memoizedProps,bt=_e.memoizedState,X=r.stateNode,G=X.getSnapshotBeforeUpdate(r.elementType===r.type?je:Gn(r.type,je),bt);X.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ge){wt(r,r.return,ge)}if(t=r.sibling,t!==null){t.return=r.return,be=t;break}be=r.return}return _e=Z1,Z1=!1,_e}function pi(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Id(r,a,m)}u=u.next}while(u!==c)}}function Us(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Pd(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function X1(t){var r=t.alternate;r!==null&&(t.alternate=null,X1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[sr],delete r[ni],delete r[Xc],delete r[Sy],delete r[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J1(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=bs));else if(c!==4&&(t=t.child,t!==null))for(zd(t,r,a),t=t.sibling;t!==null;)zd(t,r,a),t=t.sibling}function Od(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Od(t,r,a),t=t.sibling;t!==null;)Od(t,r,a),t=t.sibling}var Ft=null,Yn=!1;function qr(t,r,a){for(a=a.child;a!==null;)tf(t,r,a),a=a.sibling}function tf(t,r,a){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(tn,a)}catch{}switch(a.tag){case 5:Yt||sa(a,r);case 6:var c=Ft,u=Yn;Ft=null,qr(t,r,a),Ft=c,Yn=u,Ft!==null&&(Yn?(t=Ft,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ft.removeChild(a.stateNode));break;case 18:Ft!==null&&(Yn?(t=Ft,a=a.stateNode,t.nodeType===8?Zc(t.parentNode,a):t.nodeType===1&&Zc(t,a),qa(t)):Zc(Ft,a.stateNode));break;case 4:c=Ft,u=Yn,Ft=a.stateNode.containerInfo,Yn=!0,qr(t,r,a),Ft=c,Yn=u;break;case 0:case 11:case 14:case 15:if(!Yt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Id(a,r,b),u=u.next}while(u!==c)}qr(t,r,a);break;case 1:if(!Yt&&(sa(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){wt(a,r,I)}qr(t,r,a);break;case 21:qr(t,r,a);break;case 22:a.mode&1?(Yt=(c=Yt)||a.memoizedState!==null,qr(t,r,a),Yt=c):qr(t,r,a);break;default:qr(t,r,a)}}function nf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Wy),r.forEach(function(c){var u=Jy.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Kn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var m=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Ft=I.stateNode,Yn=!1;break e;case 3:Ft=I.stateNode.containerInfo,Yn=!0;break e;case 4:Ft=I.stateNode.containerInfo,Yn=!0;break e}I=I.return}if(Ft===null)throw Error(i(160));tf(m,b,u),Ft=null,Yn=!1;var W=u.alternate;W!==null&&(W.return=null),u.return=null}catch(re){wt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rf(r,t),r=r.sibling}function rf(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(r,t),dr(t),c&4){try{pi(3,t,t.return),Us(3,t)}catch(je){wt(t,t.return,je)}try{pi(5,t,t.return)}catch(je){wt(t,t.return,je)}}break;case 1:Kn(r,t),dr(t),c&512&&a!==null&&sa(a,a.return);break;case 5:if(Kn(r,t),dr(t),c&512&&a!==null&&sa(a,a.return),t.flags&32){var u=t.stateNode;try{tt(u,"")}catch(je){wt(t,t.return,je)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,I=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Le(u,m),ht(I,b);var re=ht(I,m);for(b=0;b<W.length;b+=2){var pe=W[b],me=W[b+1];pe==="style"?Ee(u,me):pe==="dangerouslySetInnerHTML"?Qt(u,me):pe==="children"?tt(u,me):j(u,pe,me,re)}switch(I){case"input":De(u,m);break;case"textarea":xe(u,m);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ye=m.value;ye!=null?Je(u,!!m.multiple,ye,!1):ue!==!!m.multiple&&(m.defaultValue!=null?Je(u,!!m.multiple,m.defaultValue,!0):Je(u,!!m.multiple,m.multiple?[]:"",!1))}u[ni]=m}catch(je){wt(t,t.return,je)}}break;case 6:if(Kn(r,t),dr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch(je){wt(t,t.return,je)}}break;case 3:if(Kn(r,t),dr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{qa(r.containerInfo)}catch(je){wt(t,t.return,je)}break;case 4:Kn(r,t),dr(t);break;case 13:Kn(r,t),dr(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Bd=he())),c&4&&nf(t);break;case 22:if(pe=a!==null&&a.memoizedState!==null,t.mode&1?(Yt=(re=Yt)||pe,Kn(r,t),Yt=re):Kn(r,t),dr(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!pe&&(t.mode&1)!==0)for(be=t,pe=t.child;pe!==null;){for(me=be=pe;be!==null;){switch(ue=be,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:pi(4,ue,ue.return);break;case 1:sa(ue,ue.return);var _e=ue.stateNode;if(typeof _e.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,_e.props=r.memoizedProps,_e.state=r.memoizedState,_e.componentWillUnmount()}catch(je){wt(c,a,je)}}break;case 5:sa(ue,ue.return);break;case 22:if(ue.memoizedState!==null){sf(me);continue}}ye!==null?(ye.return=ue,be=ye):sf(me)}pe=pe.sibling}e:for(pe=null,me=t;;){if(me.tag===5){if(pe===null){pe=me;try{u=me.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=me.stateNode,W=me.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,I.style.display=Lr("display",b))}catch(je){wt(t,t.return,je)}}}else if(me.tag===6){if(pe===null)try{me.stateNode.nodeValue=re?"":me.memoizedProps}catch(je){wt(t,t.return,je)}}else if((me.tag!==22&&me.tag!==23||me.memoizedState===null||me===t)&&me.child!==null){me.child.return=me,me=me.child;continue}if(me===t)break e;for(;me.sibling===null;){if(me.return===null||me.return===t)break e;pe===me&&(pe=null),me=me.return}pe===me&&(pe=null),me.sibling.return=me.return,me=me.sibling}}break;case 19:Kn(r,t),dr(t),c&4&&nf(t);break;case 21:break;default:Kn(r,t),dr(t)}}function dr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(J1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(tt(u,""),c.flags&=-33);var m=ef(t);Od(t,m,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=ef(t);zd(t,I,b);break;default:throw Error(i(161))}}catch(W){wt(t,t.return,W)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function qy(t,r,a){be=t,of(t)}function of(t,r,a){for(var c=(t.mode&1)!==0;be!==null;){var u=be,m=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Ws;if(!b){var I=u.alternate,W=I!==null&&I.memoizedState!==null||Yt;I=Ws;var re=Yt;if(Ws=b,(Yt=W)&&!re)for(be=u;be!==null;)b=be,W=b.child,b.tag===22&&b.memoizedState!==null?lf(u):W!==null?(W.return=b,be=W):lf(u);for(;m!==null;)be=m,of(m),m=m.sibling;be=u,Ws=I,Yt=re}af(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,be=m):af(t)}}function af(t){for(;be!==null;){var r=be;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yt||Us(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Yt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Gn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&i1(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}i1(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var pe=re.memoizedState;if(pe!==null){var me=pe.dehydrated;me!==null&&qa(me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Yt||r.flags&512&&Pd(r)}catch(ue){wt(r,r.return,ue)}}if(r===t){be=null;break}if(a=r.sibling,a!==null){a.return=r.return,be=a;break}be=r.return}}function sf(t){for(;be!==null;){var r=be;if(r===t){be=null;break}var a=r.sibling;if(a!==null){a.return=r.return,be=a;break}be=r.return}}function lf(t){for(;be!==null;){var r=be;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Us(4,r)}catch(W){wt(r,a,W)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(W){wt(r,u,W)}}var m=r.return;try{Pd(r)}catch(W){wt(r,m,W)}break;case 5:var b=r.return;try{Pd(r)}catch(W){wt(r,b,W)}}}catch(W){wt(r,r.return,W)}if(r===t){be=null;break}var I=r.sibling;if(I!==null){I.return=r.return,be=I;break}be=r.return}}var Vy=Math.ceil,qs=z.ReactCurrentDispatcher,Dd=z.ReactCurrentOwner,In=z.ReactCurrentBatchConfig,et=0,Et=null,Ct=null,Bt=0,yn=0,la=Fr(0),Mt=0,fi=null,bo=0,Vs=0,Fd=0,mi=null,an=null,Bd=0,ca=1/0,Cr=null,Gs=!1,Hd=null,Vr=null,Ys=!1,Gr=null,Ks=0,gi=0,Wd=null,Qs=-1,Zs=0;function Xt(){return(et&6)!==0?he():Qs!==-1?Qs:Qs=he()}function Yr(t){return(t.mode&1)===0?1:(et&2)!==0&&Bt!==0?Bt&-Bt:Ny.transition!==null?(Zs===0&&(Zs=ep()),Zs):(t=at,t!==0||(t=window.event,t=t===void 0?16:cp(t.type)),t)}function Qn(t,r,a,c){if(50<gi)throw gi=0,Wd=null,Error(i(185));Fa(t,a,c),((et&2)===0||t!==Et)&&(t===Et&&((et&2)===0&&(Vs|=a),Mt===4&&Kr(t,Bt)),sn(t,c),a===1&&et===0&&(r.mode&1)===0&&(ca=he()+500,js&&Hr()))}function sn(t,r){var a=t.callbackNode;Nx(t,r);var c=is(t,t===Et?Bt:0);if(c===0)a!==null&&ns(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&ns(a),r===1)t.tag===0?My(df.bind(null,t)):Yp(df.bind(null,t)),_y(function(){(et&6)===0&&Hr()}),a=null;else{switch(tp(c)){case 1:a=rt;break;case 4:a=Fe;break;case 16:a=St;break;case 536870912:a=At;break;default:a=St}a=xf(a,cf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function cf(t,r){if(Qs=-1,Zs=0,(et&6)!==0)throw Error(i(327));var a=t.callbackNode;if(da()&&t.callbackNode!==a)return null;var c=is(t,t===Et?Bt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Xs(t,c);else{r=c;var u=et;et|=2;var m=hf();(Et!==t||Bt!==r)&&(Cr=null,ca=he()+500,Co(t,r));do try{Ky();break}catch(I){uf(t,I)}while(!0);sd(),qs.current=m,et=u,Ct!==null?r=0:(Et=null,Bt=0,r=Mt)}if(r!==0){if(r===2&&(u=Cc(t),u!==0&&(c=u,r=Ud(t,u))),r===1)throw a=fi,Co(t,0),Kr(t,c),sn(t,he()),a;if(r===6)Kr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Gy(u)&&(r=Xs(t,c),r===2&&(m=Cc(t),m!==0&&(c=m,r=Ud(t,m))),r===1))throw a=fi,Co(t,0),Kr(t,c),sn(t,he()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:_o(t,an,Cr);break;case 3:if(Kr(t,c),(c&130023424)===c&&(r=Bd+500-he(),10<r)){if(is(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Xt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Qc(_o.bind(null,t,an,Cr),r);break}_o(t,an,Cr);break;case 4:if(Kr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-Un(c);m=1<<b,b=r[b],b>u&&(u=b),c&=~m}if(c=u,c=he()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Vy(c/1960))-c,10<c){t.timeoutHandle=Qc(_o.bind(null,t,an,Cr),c);break}_o(t,an,Cr);break;case 5:_o(t,an,Cr);break;default:throw Error(i(329))}}}return sn(t,he()),t.callbackNode===a?cf.bind(null,t):null}function Ud(t,r){var a=mi;return t.current.memoizedState.isDehydrated&&(Co(t,r).flags|=256),t=Xs(t,r),t!==2&&(r=an,an=a,r!==null&&qd(r)),t}function qd(t){an===null?an=t:an.push.apply(an,t)}function Gy(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],m=u.getSnapshot;u=u.value;try{if(!qn(m(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(t,r){for(r&=~Fd,r&=~Vs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Un(r),c=1<<a;t[a]=-1,r&=~c}}function df(t){if((et&6)!==0)throw Error(i(327));da();var r=is(t,0);if((r&1)===0)return sn(t,he()),null;var a=Xs(t,r);if(t.tag!==0&&a===2){var c=Cc(t);c!==0&&(r=c,a=Ud(t,c))}if(a===1)throw a=fi,Co(t,0),Kr(t,r),sn(t,he()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,_o(t,an,Cr),sn(t,he()),null}function Vd(t,r){var a=et;et|=1;try{return t(r)}finally{et=a,et===0&&(ca=he()+500,js&&Hr())}}function ko(t){Gr!==null&&Gr.tag===0&&(et&6)===0&&da();var r=et;et|=1;var a=In.transition,c=at;try{if(In.transition=null,at=1,t)return t()}finally{at=c,In.transition=a,et=r,(et&6)===0&&Hr()}}function Gd(){yn=la.current,ft(la)}function Co(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Cy(a)),Ct!==null)for(a=Ct.return;a!==null;){var c=a;switch(nd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cs();break;case 3:aa(),ft(nn),ft(qt),md();break;case 5:pd(c);break;case 4:aa();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:ld(c.type._context);break;case 22:case 23:Gd()}a=a.return}if(Et=t,Ct=t=Qr(t.current,null),Bt=yn=r,Mt=0,fi=null,Fd=Vs=bo=0,an=mi=null,xo!==null){for(r=0;r<xo.length;r++)if(a=xo[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=u,c.next=b}a.pending=c}xo=null}return t}function uf(t,r){do{var a=Ct;try{if(sd(),Is.current=Ds,Ps){for(var c=xt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Ps=!1}if(wo=0,Tt=$t=xt=null,li=!1,ci=0,Dd.current=null,a===null||a.return===null){Mt=1,fi=r,Ct=null;break}e:{var m=t,b=a.return,I=a,W=r;if(r=Bt,I.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var re=W,pe=I,me=pe.tag;if((pe.mode&1)===0&&(me===0||me===11||me===15)){var ue=pe.alternate;ue?(pe.updateQueue=ue.updateQueue,pe.memoizedState=ue.memoizedState,pe.lanes=ue.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var ye=I1(b);if(ye!==null){ye.flags&=-257,P1(ye,b,I,m,r),ye.mode&1&&E1(m,re,r),r=ye,W=re;var _e=r.updateQueue;if(_e===null){var je=new Set;je.add(W),r.updateQueue=je}else _e.add(W);break e}else{if((r&1)===0){E1(m,re,r),Yd();break e}W=Error(i(426))}}else if(gt&&I.mode&1){var bt=I1(b);if(bt!==null){(bt.flags&65536)===0&&(bt.flags|=256),P1(bt,b,I,m,r),ad(ia(W,I));break e}}m=W=ia(W,I),Mt!==4&&(Mt=2),mi===null?mi=[m]:mi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var X=A1(m,W,r);a1(m,X);break e;case 1:I=W;var G=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Vr===null||!Vr.has(te)))){m.flags|=65536,r&=-r,m.lanes|=r;var ge=T1(m,I,r);a1(m,ge);break e}}m=m.return}while(m!==null)}ff(a)}catch($e){r=$e,Ct===a&&a!==null&&(Ct=a=a.return);continue}break}while(!0)}function hf(){var t=qs.current;return qs.current=Ds,t===null?Ds:t}function Yd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Et===null||(bo&268435455)===0&&(Vs&268435455)===0||Kr(Et,Bt)}function Xs(t,r){var a=et;et|=2;var c=hf();(Et!==t||Bt!==r)&&(Cr=null,Co(t,r));do try{Yy();break}catch(u){uf(t,u)}while(!0);if(sd(),et=a,qs.current=c,Ct!==null)throw Error(i(261));return Et=null,Bt=0,Mt}function Yy(){for(;Ct!==null;)pf(Ct)}function Ky(){for(;Ct!==null&&!rs();)pf(Ct)}function pf(t){var r=vf(t.alternate,t,yn);t.memoizedProps=t.pendingProps,r===null?ff(t):Ct=r,Dd.current=null}function ff(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=By(a,r,yn),a!==null){Ct=a;return}}else{if(a=Hy(a,r),a!==null){a.flags&=32767,Ct=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,Ct=null;return}}if(r=r.sibling,r!==null){Ct=r;return}Ct=r=t}while(r!==null);Mt===0&&(Mt=5)}function _o(t,r,a){var c=at,u=In.transition;try{In.transition=null,at=1,Qy(t,r,a,c)}finally{In.transition=u,at=c}return null}function Qy(t,r,a,c){do da();while(Gr!==null);if((et&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Rx(t,m),t===Et&&(Ct=Et=null,Bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ys||(Ys=!0,xf(St,function(){return da(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=In.transition,In.transition=null;var b=at;at=1;var I=et;et|=4,Dd.current=null,Uy(t,a),rf(a,t),gy(Yc),cs=!!Gc,Yc=Gc=null,t.current=a,qy(a),J(),et=I,at=b,In.transition=m}else t.current=a;if(Ys&&(Ys=!1,Gr=t,Ks=u),m=t.pendingLanes,m===0&&(Vr=null),_x(a.stateNode),sn(t,he()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Gs)throw Gs=!1,t=Hd,Hd=null,t;return(Ks&1)!==0&&t.tag!==0&&da(),m=t.pendingLanes,(m&1)!==0?t===Wd?gi++:(gi=0,Wd=t):gi=0,Hr(),null}function da(){if(Gr!==null){var t=tp(Ks),r=In.transition,a=at;try{if(In.transition=null,at=16>t?16:t,Gr===null)var c=!1;else{if(t=Gr,Gr=null,Ks=0,(et&6)!==0)throw Error(i(331));var u=et;for(et|=4,be=t.current;be!==null;){var m=be,b=m.child;if((be.flags&16)!==0){var I=m.deletions;if(I!==null){for(var W=0;W<I.length;W++){var re=I[W];for(be=re;be!==null;){var pe=be;switch(pe.tag){case 0:case 11:case 15:pi(8,pe,m)}var me=pe.child;if(me!==null)me.return=pe,be=me;else for(;be!==null;){pe=be;var ue=pe.sibling,ye=pe.return;if(X1(pe),pe===re){be=null;break}if(ue!==null){ue.return=ye,be=ue;break}be=ye}}}var _e=m.alternate;if(_e!==null){var je=_e.child;if(je!==null){_e.child=null;do{var bt=je.sibling;je.sibling=null,je=bt}while(je!==null)}}be=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,be=b;else e:for(;be!==null;){if(m=be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:pi(9,m,m.return)}var X=m.sibling;if(X!==null){X.return=m.return,be=X;break e}be=m.return}}var G=t.current;for(be=G;be!==null;){b=be;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,be=te;else e:for(b=G;be!==null;){if(I=be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Us(9,I)}}catch($e){wt(I,I.return,$e)}if(I===b){be=null;break e}var ge=I.sibling;if(ge!==null){ge.return=I.return,be=ge;break e}be=I.return}}if(et=u,Hr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(tn,t)}catch{}c=!0}return c}finally{at=a,In.transition=r}}return!1}function mf(t,r,a){r=ia(a,r),r=A1(t,r,1),t=Ur(t,r,1),r=Xt(),t!==null&&(Fa(t,1,r),sn(t,r))}function wt(t,r,a){if(t.tag===3)mf(t,t,a);else for(;r!==null;){if(r.tag===3){mf(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){t=ia(a,t),t=T1(r,t,1),r=Ur(r,t,1),t=Xt(),r!==null&&(Fa(r,1,t),sn(r,t));break}}r=r.return}}function Zy(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Xt(),t.pingedLanes|=t.suspendedLanes&a,Et===t&&(Bt&a)===a&&(Mt===4||Mt===3&&(Bt&130023424)===Bt&&500>he()-Bd?Co(t,0):Fd|=a),sn(t,r)}function gf(t,r){r===0&&((t.mode&1)===0?r=1:(r=as,as<<=1,(as&130023424)===0&&(as=4194304)));var a=Xt();t=wr(t,r),t!==null&&(Fa(t,r,a),sn(t,a))}function Xy(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),gf(t,a)}function Jy(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),gf(t,a)}var vf;vf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||nn.current)on=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return on=!1,Fy(t,r,a);on=(t.flags&131072)!==0}else on=!1,gt&&(r.flags&1048576)!==0&&Kp(r,$s,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hs(t,r),t=r.pendingProps;var u=Xo(r,qt.current);oa(r,a),u=xd(null,r,c,t,u,a);var m=yd();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,rn(c)?(m=!0,_s(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ud(r),u.updater=Fs,r.stateNode=u,u._reactInternals=r,jd(r,c,t,a),r=Nd(null,r,c,!0,m,a)):(r.tag=0,gt&&m&&td(r),Zt(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Hs(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=t3(c),t=Gn(c,t),u){case 0:r=Md(null,r,c,t,a);break e;case 1:r=H1(null,r,c,t,a);break e;case 11:r=z1(null,r,c,t,a);break e;case 14:r=O1(null,r,c,Gn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Gn(c,u),Md(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Gn(c,u),H1(t,r,c,u,a);case 3:e:{if(W1(r),t===null)throw Error(i(387));c=r.pendingProps,m=r.memoizedState,u=m.element,o1(t,r),Ts(r,c,null,a);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=ia(Error(i(423)),r),r=U1(t,r,c,a,u);break e}else if(c!==u){u=ia(Error(i(424)),r),r=U1(t,r,c,a,u);break e}else for(xn=Dr(r.stateNode.containerInfo.firstChild),vn=r,gt=!0,Vn=null,a=n1(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ta(),c===u){r=kr(t,r,a);break e}Zt(t,r,c,a)}r=r.child}return r;case 5:return s1(r),t===null&&od(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,b=u.children,Kc(c,u)?b=null:m!==null&&Kc(c,m)&&(r.flags|=32),B1(t,r),Zt(t,r,b,a),r.child;case 6:return t===null&&od(r),null;case 13:return q1(t,r,a);case 4:return hd(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=na(r,null,c,a):Zt(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Gn(c,u),z1(t,r,c,u,a);case 7:return Zt(t,r,r.pendingProps,a),r.child;case 8:return Zt(t,r,r.pendingProps.children,a),r.child;case 12:return Zt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,b=u.value,ct(Rs,c._currentValue),c._currentValue=b,m!==null)if(qn(m.value,b)){if(m.children===u.children&&!nn.current){r=kr(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){b=m.child;for(var W=I.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=br(-1,a&-a),W.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var pe=re.pending;pe===null?W.next=W:(W.next=pe.next,pe.next=W),re.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),cd(m.return,a,r),I.lanes|=a;break}W=W.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),cd(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Zt(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,oa(r,a),u=Tn(u),c=c(u),r.flags|=1,Zt(t,r,c,a),r.child;case 14:return c=r.type,u=Gn(c,r.pendingProps),u=Gn(c.type,u),O1(t,r,c,u,a);case 15:return D1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Gn(c,u),Hs(t,r),r.tag=1,rn(c)?(t=!0,_s(r)):t=!1,oa(r,a),R1(r,c,u),jd(r,c,u,a),Nd(null,r,c,!0,t,a);case 19:return G1(t,r,a);case 22:return F1(t,r,a)}throw Error(i(156,r.tag))};function xf(t,r){return Lt(t,r)}function e3(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,r,a,c){return new e3(t,r,a,c)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t3(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===H)return 11;if(t===ae)return 14}return 2}function Qr(t,r){var a=t.alternate;return a===null?(a=Pn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Js(t,r,a,c,u,m){var b=2;if(c=t,typeof t=="function")Kd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case E:return jo(a.children,u,m,r);case L:b=8,u|=8;break;case F:return t=Pn(12,a,r,u|2),t.elementType=F,t.lanes=m,t;case K:return t=Pn(13,a,r,u),t.elementType=K,t.lanes=m,t;case ee:return t=Pn(19,a,r,u),t.elementType=ee,t.lanes=m,t;case le:return el(a,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:b=10;break e;case V:b=9;break e;case H:b=11;break e;case ae:b=14;break e;case se:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=Pn(b,a,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function jo(t,r,a,c){return t=Pn(7,t,c,r),t.lanes=a,t}function el(t,r,a,c){return t=Pn(22,t,c,r),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function Qd(t,r,a){return t=Pn(6,t,null,r),t.lanes=a,t}function Zd(t,r,a){return r=Pn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function n3(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Xd(t,r,a,c,u,m,b,I,W){return t=new n3(t,r,a,I,W),r===1?(r=1,m===!0&&(r|=8)):r=0,m=Pn(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(m),t}function r3(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function yf(t){if(!t)return Br;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(rn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(rn(a))return Vp(t,a,r)}return r}function wf(t,r,a,c,u,m,b,I,W){return t=Xd(a,c,!0,t,u,m,b,I,W),t.context=yf(null),a=t.current,c=Xt(),u=Yr(a),m=br(c,u),m.callback=r??null,Ur(a,m,u),t.current.lanes=u,Fa(t,u,c),sn(t,c),t}function tl(t,r,a,c){var u=r.current,m=Xt(),b=Yr(u);return a=yf(a),r.context===null?r.context=a:r.pendingContext=a,r=br(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Ur(u,r,b),t!==null&&(Qn(t,u,b,m),As(t,u,b)),b}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Jd(t,r){bf(t,r),(t=t.alternate)&&bf(t,r)}function o3(){return null}var kf=typeof reportError=="function"?reportError:function(t){console.error(t)};function eu(t){this._internalRoot=t}rl.prototype.render=eu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));tl(t,r,null,null)},rl.prototype.unmount=eu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ko(function(){tl(null,t,null,null)}),r[gr]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var r=op();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Pr.length&&r!==0&&r<Pr[a].priority;a++);Pr.splice(a,0,t),a===0&&sp(t)}};function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cf(){}function a3(t,r,a,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=nl(b);m.call(re)}}var b=wf(r,c,t,0,null,!1,!1,"",Cf);return t._reactRootContainer=b,t[gr]=b.current,ei(t.nodeType===8?t.parentNode:t),ko(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=nl(W);I.call(re)}}var W=Xd(t,0,!1,null,null,!1,!1,"",Cf);return t._reactRootContainer=W,t[gr]=W.current,ei(t.nodeType===8?t.parentNode:t),ko(function(){tl(r,W,a,c)}),W}function al(t,r,a,c,u){var m=a._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var I=u;u=function(){var W=nl(b);I.call(W)}}tl(r,b,t,u)}else b=a3(a,r,t,u,c);return nl(b)}np=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Da(r.pendingLanes);a!==0&&(jc(r,a|1),sn(r,he()),(et&6)===0&&(ca=he()+500,Hr()))}break;case 13:ko(function(){var c=wr(t,1);if(c!==null){var u=Xt();Qn(c,t,1,u)}}),Jd(t,1)}},Sc=function(t){if(t.tag===13){var r=wr(t,134217728);if(r!==null){var a=Xt();Qn(r,t,134217728,a)}Jd(t,134217728)}},rp=function(t){if(t.tag===13){var r=Yr(t),a=wr(t,r);if(a!==null){var c=Xt();Qn(a,t,r,c)}Jd(t,r)}},op=function(){return at},ap=function(t,r){var a=at;try{return at=t,r()}finally{at=a}},Wn=function(t,r,a){switch(r){case"input":if(De(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=ks(c);if(!u)throw Error(i(90));ve(c),De(c,u)}}}break;case"textarea":xe(t,a);break;case"select":r=a.value,r!=null&&Je(t,!!a.multiple,r,!1)}},Zi=Vd,Xi=ko;var i3={usingClientEntryPoint:!1,Events:[ri,Qo,ks,Ki,Qi,Vd]},vi={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s3={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Oa(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||o3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{tn=il.inject(s3),Rn=il}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i3,ln.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(r))throw Error(i(200));return r3(t,r,null,a)},ln.createRoot=function(t,r){if(!tu(t))throw Error(i(299));var a=!1,c="",u=kf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Xd(t,1,!1,null,null,a,!1,c,u),t[gr]=r.current,ei(t.nodeType===8?t.parentNode:t),new eu(r)},ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Oa(r),t=t===null?null:t.stateNode,t},ln.flushSync=function(t){return ko(t)},ln.hydrate=function(t,r,a){if(!ol(r))throw Error(i(200));return al(null,t,r,!0,a)},ln.hydrateRoot=function(t,r,a){if(!tu(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,m="",b=kf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=wf(r,null,t,1,a??null,u,!1,m,b),t[gr]=r.current,ei(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new rl(r)},ln.render=function(t,r,a){if(!ol(r))throw Error(i(200));return al(null,t,r,!1,a)},ln.unmountComponentAtNode=function(t){if(!ol(t))throw Error(i(40));return t._reactRootContainer?(ko(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1},ln.unstable_batchedUpdates=Vd,ln.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!ol(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return al(t,r,a,!1,c)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var Lf;function J0(){if(Lf)return ou.exports;Lf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),ou.exports=f3(),ou.exports}var Af;function m3(){if(Af)return sl;Af=1;var e=J0();return sl.createRoot=e.createRoot,sl.hydrateRoot=e.hydrateRoot,sl}var g3=m3();const v3=X0(g3);function eg(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=eg(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=eg(e))&&(s&&(s+=" "),s+=o);return s}const Ma=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ma.displayName="PlusIcon";const x3="_root_7uomf_13",y3="_sm_7uomf_82",w3="_md_7uomf_88",b3="_lg_7uomf_94",k3="_horizontal_7uomf_107",C3="_alignStart_7uomf_121",_3="_vertical_7uomf_125",j3="_inner_7uomf_131",S3="_iconSlot_7uomf_146",$3="_label_7uomf_163",So={root:x3,sm:y3,md:w3,lg:b3,horizontal:k3,alignStart:C3,vertical:_3,inner:j3,iconSlot:S3,label:$3};function Tf(e){return typeof e=="number"?`${e}px`:e}const M3=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:g,style:y,disabled:x,type:w="button",...k},_)=>{const C=d??n.jsx(Ma,{size:"100%"}),M={};return h!==void 0&&(M["--area-min-height"]=Tf(h)),f!==void 0&&(M["--area-radius"]=Tf(f)),n.jsx("button",{ref:_,type:w,className:ie(So.root,So[e],So[o],i==="start"&&So.alignStart,g),disabled:x,"data-size":e,"data-layout":o,style:{...M,...y},...k,children:n.jsxs("span",{className:So.inner,children:[n.jsx("span",{className:So.iconSlot,"aria-hidden":"true",children:C}),!l&&s&&n.jsx("span",{className:So.label,children:s})]})})});M3.displayName="AreaButton";const N3="_root_b29pw_8",R3="_image_b29pw_33",L3="_initials_b29pw_40",A3="_iconSlot_b29pw_52",Xr={root:N3,image:R3,initials:L3,iconSlot:A3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function T3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function E3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const rr=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:g="circle",className:y,...x},w)=>{const[k,_]=v.useState(!1),C=!!e&&!k,M=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?E3(s):"");let N;return C?N=n.jsx("img",{src:e,alt:o??"",className:Xr.image,onError:()=>_(!0),draggable:!1},e):M?N=n.jsx("span",{className:Xr.initials,"aria-hidden":o?void 0:!0,children:M}):N=n.jsx("span",{className:Xr.iconSlot,"aria-hidden":"true",children:l??n.jsx(T3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":g,className:ie(Xr.root,Xr[`size-${d}`],Xr[`color-${h}`],Xr[`variant-${f}`],Xr[`shape-${g}`],y),...x,children:N})});rr.displayName="Avatar";const I3="_root_uqz3u_7",P3={root:I3},Jt=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(P3.root,o),...s,children:i}));Jt.displayName="Eyebrow";const z3="_root_1tnwf_15",O3={root:z3},D3=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:g,...y},x)=>{const w=i!==void 0,k=v.useRef(null),[_,C]=v.useState(()=>w?!i:!s),M=v.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,C(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",C(!(i??"")))},[i,w]);const N=j=>{const z=j.currentTarget.textContent??"";C(z===""),l==null||l(z),g==null||g(j)},$=j=>{j.preventDefault();const z=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,z)},S=!h&&!d;return n.jsx("span",{ref:M,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":_||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(O3.root,f),onInput:N,onPaste:$,...y})});D3.displayName="TypeBox";const F3="_root_1brpy_12",B3="_ghost_1brpy_27",H3="_path_1brpy_32",yi={root:F3,"ai-spin":"_ai-spin_1brpy_1",ghost:B3,"ai-morph":"_ai-morph_1brpy_1",path:H3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},W3={xs:16,sm:24,md:32,lg:48,xl:64},U3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Ef="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",ll=e=>e==="inverse"||e==="inverse-light",q3=e=>e==="stroke"||e==="stroke-light",lh=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${g}`,x=`aiglow-${g}`,w=typeof e=="string",k=w?W3[e]:e,_=w?U3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,C=o==="gradient-fill"?`url(#${y})`:ll(o)?"currentColor":"none",M=ll(o)?"none":q3(o)?"currentColor":`url(#${y})`,N="currentColor",$=o!=="stroke"&&o!=="stroke-light"&&!ll(o);return n.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(yi.root,yi[`variant-${o}`],yi[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!ll(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Ef,stroke:N,strokeWidth:_*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:yi.ghost}),n.jsx("path",{d:Ef,fill:C,stroke:M==="none"?void 0:M,strokeWidth:M==="none"?void 0:_,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${x})`:void 0,className:yi.path})]})});lh.displayName="AILoader";const V3="_root_10act_14",G3="_hovered_10act_68",Y3="_loading_10act_69",K3="_sm_10act_90",Q3="_md_10act_98",Z3="_lg_10act_106",X3="_dark_10act_116",J3="_icon_10act_122",ua={root:V3,hovered:G3,loading:Y3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:K3,md:Q3,lg:Z3,dark:X3,icon:J3},If={sm:12,md:14,lg:18};function e5({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const tg=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[g,y]=v.useState(!1);return n.jsx("button",{ref:f,className:ie(ua.root,ua[e],o&&ua.dark,i?ua.loading:g&&ua.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...h,children:n.jsx("span",{className:ua.icon,children:i?n.jsx(lh,{size:If[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(e5,{size:If[e],light:o})})})});tg.displayName="AICoreButton";const t5="_root_1qx4u_9",n5="_star_1qx4u_34",su={root:t5,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:n5},r5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",ng=v.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(su.root,su[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:su.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:r5,fill:"currentColor"})})}));ng.displayName="AIAvatar";const o5="_shell_lalw3_21",a5="_wrapper_lalw3_58",i5="_card_lalw3_65",s5="_cardClip_lalw3_94",l5="_textarea_lalw3_160",c5="_actions_lalw3_203",xa={shell:o5,wrapper:a5,card:i5,cardClip:s5,textarea:l5,actions:c5},rg=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(xa.shell,e),...i,children:o}));rg.displayName="AIComposer";function d5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const og=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:g,children:y,style:x,...w},k)=>{const _=v.useRef(null);v.useEffect(()=>{const S=_.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[e]);const C=v.useCallback(S=>o(S.target.value),[o]),M=v.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),N=v.useCallback(S=>{_.current=S,d5(k,S)},[k]),$={...x??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(xa.wrapper,h),"data-radius":l,children:n.jsx("div",{className:xa.card,children:n.jsxs("div",{className:xa.cardClip,children:[n.jsx("textarea",{...w,ref:N,className:xa.textarea,rows:1,value:e,onChange:C,onKeyDown:M,placeholder:d,disabled:g,style:$}),y!=null&&n.jsx("div",{className:xa.actions,children:y})]})})})});og.displayName="AIComposerInput";const u5="_root_fv0gc_10",h5="_simple_fv0gc_28",p5="_float_fv0gc_83",Pf={root:u5,simple:h5,float:p5},f5=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(Pf.root,Pf[e],o),...s,children:i}));f5.displayName="AIConversation";const m5="_fadeFrame_1l0ib_19",g5="_scroller_1l0ib_32",v5="_content_1l0ib_89",x5="_messageBlock_1l0ib_108",y5="_messageBlockAi_1l0ib_116",w5="_inboundBlock_1l0ib_128",b5="_inboundLoader_1l0ib_136",k5="_inboundLoaderLabel_1l0ib_146",C5="_outboundBlock_1l0ib_153",_5="_outboundHeader_1l0ib_161",j5="_messageBlockUser_1l0ib_168",S5="_aiThreadOutboundIn_1l0ib_1",$5="_messageBody_1l0ib_182",M5="_messageBodyAi_1l0ib_193",N5="_messageBodyUser_1l0ib_200",R5="_label_1l0ib_159",L5="_labelAi_1l0ib_221",A5="_labelUser_1l0ib_159",T5="_labelAvatar_1l0ib_224",E5="_labelText_1l0ib_237",I5="_timestamp_1l0ib_244",P5="_timestampAi_1l0ib_259",z5="_timestampUser_1l0ib_260",O5="_timestampInline_1l0ib_270",D5="_aiThreadOutboundFadeIn_1l0ib_1",Ye={fadeFrame:m5,scroller:g5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:v5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:x5,messageBlockAi:y5,inboundBlock:w5,inboundLoader:b5,inboundLoaderLabel:k5,outboundBlock:C5,outboundHeader:_5,messageBlockUser:j5,aiThreadOutboundIn:S5,messageBody:$5,messageBodyAi:M5,messageBodyUser:N5,label:R5,labelAi:L5,labelUser:A5,labelAvatar:T5,labelText:E5,timestamp:I5,timestampAi:P5,timestampUser:z5,timestampInline:O5,aiThreadOutboundFadeIn:D5},zf=8;function F5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const B5=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const g=v.useRef(null),y=v.useRef(null),x=v.useRef(!0),[w,k]=v.useState(!1),[_,C]=v.useState(!1),M=v.useCallback(N=>{g.current=N,F5(f,N)},[f]);return v.useEffect(()=>{const N=g.current,$=y.current;if(!N||!$)return;const S=()=>{const{scrollTop:E,scrollHeight:L,clientHeight:F}=N;return L-E-F<s},j=E=>{N.scrollTo({top:N.scrollHeight,behavior:E?"smooth":"auto"})},z=()=>{const{scrollTop:E,scrollHeight:L,clientHeight:F}=N,q=E>zf,V=L-E-F>zf;k(H=>H===q?H:q),C(H=>H===V?H:V)};i&&(j(!1),x.current=!0),z();const A=()=>{x.current=S(),z()};N.addEventListener("scroll",A,{passive:!0});const R=new ResizeObserver(()=>{i&&x.current&&j(!0),z()});return R.observe($),R.observe(N),()=>{N.removeEventListener("scroll",A),R.disconnect()}},[i,s]),n.jsx("div",{className:Ye.fadeFrame,"data-fade-top":w,"data-fade-bottom":_,children:n.jsx("div",{ref:M,className:ie(Ye.scroller,Ye[`padding-${o}`],l),...h,children:n.jsx("div",{ref:y,className:ie(Ye.content,Ye[`density-${e}`]),children:d})})})});B5.displayName="AIThread";const Jl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ye.label,e==="user"?Ye.labelUser:Ye.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ye.labelAvatar,children:o}),n.jsx("span",{className:Ye.labelText,children:s})]}));Jl.displayName="AILabel";const H5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function W5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Oi=v.forwardRef(({value:e,align:o="ai",format:i=H5,inline:s=!1,className:l,...d},h)=>{const f=v.useMemo(()=>W5(e,i),[e,i]);return f?n.jsx("time",{ref:h,className:ie(Ye.timestamp,s?Ye.timestampInline:o==="user"?Ye.timestampUser:Ye.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});Oi.displayName="AITimestamp";function U5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Oi,{align:"ai",value:e}):e}function q5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Jl,{align:"ai",children:e}):e}const V5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ye.messageBlock,Ye.messageBlockAi,i),...l,children:[q5(e),n.jsx("div",{className:ie(Ye.messageBody,Ye.messageBodyAi),children:s}),U5(o)]}));V5.displayName="AIAssistantMessage";function G5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Oi,{align:"user",value:e}):e}function Y5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Jl,{align:"user",children:e}):e}const K5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ye.messageBlock,Ye.messageBlockUser,i),...l,children:[Y5(e),n.jsx("div",{className:ie(Ye.messageBody,Ye.messageBodyUser),children:s}),G5(o)]}));K5.displayName="AIUserMessage";function Q5(e){return e===!1?null:e==null||e===!0?n.jsx(ng,{size:"sm"}):e}function Z5(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Jl,{align:"ai",avatar:o,children:e}):e}const X5=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...g},y)=>{const x=Q5(e),w=Z5(o,x);return n.jsxs("div",{ref:y,"data-author":"ai",className:ie(Ye.messageBlock,Ye.messageBlockAi,Ye.inboundBlock,h),...g,children:[w,i,f!=null&&n.jsx("div",{className:ie(Ye.messageBody,Ye.messageBodyAi),children:f}),l&&n.jsxs("div",{className:Ye.inboundLoader,"aria-live":"polite",children:[n.jsx(lh,{size:"xs"}),d!=null&&n.jsx("span",{className:Ye.inboundLoaderLabel,children:d})]}),s]})});X5.displayName="AIInboundMessage";function J5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const e4=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const f=o==null?null:J5(o)?n.jsx(Oi,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ye.labelText,children:e}):e,y=g!=null||f!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ye.messageBlock,Ye.messageBlockUser,Ye.outboundBlock,s),...d,children:[y&&n.jsxs("div",{className:ie(Ye.label,Ye.labelUser,Ye.outboundHeader),children:[g,f]}),n.jsx("div",{className:ie(Ye.messageBody,Ye.messageBodyUser),children:l})]})});e4.displayName="AIOutboundMessage";const Fn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Fn.displayName="ChevronDownIcon";const t4="_root_1j4eq_8",n4="_header_1j4eq_17",r4="_headerSummary_1j4eq_53",o4="_aiTrailSummaryFade_1j4eq_1",a4="_aiTrailHeaderAppend_1j4eq_1",i4="_aiTrailEllipsis_1j4eq_1",s4="_headerCurrent_1j4eq_128",l4="_headerChevron_1j4eq_159",c4="_headerChevronExpanded_1j4eq_173",d4="_body_1j4eq_187",u4="_bodyExpanded_1j4eq_200",h4="_bodyCollapsed_1j4eq_201",p4="_bodyInner_1j4eq_203",f4="_bodyContent_1j4eq_187",m4="_step_1j4eq_225",g4="_stepIcon_1j4eq_242",v4="_stepAnimating_1j4eq_256",x4="_aiTrailStepPulse_1j4eq_1",y4="_stepBody_1j4eq_267",w4="_stepHead_1j4eq_282",b4="_stepLabel_1j4eq_286",k4="_stepSeparator_1j4eq_288",C4="_stepDetail_1j4eq_292",_4="_subToggle_1j4eq_302",j4="_subToggleCount_1j4eq_335",S4="_subToggleChevron_1j4eq_339",$4="_subActivityWrap_1j4eq_358",M4="_subActivityExpanded_1j4eq_364",N4="_subActivityCollapsed_1j4eq_365",R4="_subActivityClip_1j4eq_367",L4="_subActivityList_1j4eq_378",A4="_subActivity_1j4eq_358",T4="_aiTrailSubActivityType_1j4eq_1",E4="_aiTrailSubActivityFade_1j4eq_1",it={root:t4,header:n4,headerSummary:r4,aiTrailSummaryFade:o4,aiTrailHeaderAppend:a4,aiTrailEllipsis:i4,headerCurrent:s4,headerChevron:l4,headerChevronExpanded:c4,body:d4,bodyExpanded:u4,bodyCollapsed:h4,bodyInner:p4,bodyContent:f4,step:m4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:g4,stepAnimating:v4,aiTrailStepPulse:x4,stepBody:y4,stepHead:w4,stepLabel:b4,stepSeparator:k4,stepDetail:C4,subToggle:_4,subToggleCount:j4,subToggleChevron:S4,subActivityWrap:$4,subActivityExpanded:M4,subActivityCollapsed:N4,subActivityClip:R4,subActivityList:L4,subActivity:A4,aiTrailSubActivityType:T4,aiTrailSubActivityFade:E4},ch=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ch.displayName="MessageDotsSquareIcon";function Ol({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ol.displayName="SearchMdIcon";function io({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const dh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dh.displayName="Globe01Icon";const ag=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ag.displayName="Code02Icon";function uh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}uh.displayName="Tool01Icon";const en=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},ka=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ka.displayName="AlertCircleIcon";const I4={thinking:n.jsx(ch,{size:14}),tool:n.jsx(uh,{size:14}),search:n.jsx(Ol,{size:14}),file:n.jsx(io,{size:14}),web:n.jsx(dh,{size:14}),code:n.jsx(ag,{size:14}),content:n.jsx(en,{size:14})},ec=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...g},y)=>{const x=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[_,C]=v.useState(null),M=_!==null?_:k;v.useEffect(()=>{C(null)},[o]);const N=v.useCallback(()=>C(!M),[M]),$=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,j=o==="error"?n.jsx(ka,{size:14}):s??I4[e];return n.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":o,className:ie(it.step,it[`step-${o}`],x&&it.stepAnimating,h),...g,children:[n.jsx("span",{className:it.stepIcon,"aria-hidden":!0,children:j}),n.jsxs("span",{className:it.stepBody,children:[n.jsxs("span",{className:it.stepHead,children:[n.jsx("span",{className:it.stepLabel,children:f}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:it.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:it.stepDetail,children:i})]}),$&&n.jsxs("button",{type:"button",className:it.subToggle,onClick:N,"aria-expanded":M,"aria-label":M?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":M||void 0,children:[n.jsx("span",{className:it.subToggleCount,children:S}),n.jsx("span",{className:it.subToggleChevron,"aria-hidden":!0,children:n.jsx(Fn,{size:10})})]})]}),$&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(it.subActivityWrap,M?it.subActivityExpanded:it.subActivityCollapsed),"aria-hidden":!M,children:n.jsx("div",{className:it.subActivityClip,children:n.jsx("ul",{className:it.subActivityList,"data-animating":w||void 0,children:l.map((z,A)=>n.jsx("li",{className:it.subActivity,children:z},A))})})})})]})]})});ec.displayName="AIActivityStep";function Of(e){return e==="error"}function P4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=o===1?"1 step":`${o} steps`;return`${h} · ${f}`}return n.jsxs(n.Fragment,{children:[h,i.map((f,g)=>n.jsxs(v.Fragment,{children:[" · ",f]},g))]})}const hh=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...g},y)=>{const x=o!==void 0,[w,k]=v.useState(i??Of(e)),[_,C]=v.useState(!1);v.useEffect(()=>{x||_||k(Of(e))},[e,x,_]);const M=x?!!o:w,N=v.useCallback(()=>{const R=!M;x||(k(R),C(!0)),s==null||s(R)},[M,x,s]),{enhancedChildren:$,stepCount:S,stepLabels:j,currentLabelIdx:z}=v.useMemo(()=>{let R=0;const E=[];let L=-1;return{enhancedChildren:v.Children.map(f,q=>{if(!v.isValidElement(q))return q;const V=q.props;if(!("type"in V||"status"in V))return q;R+=1;const K=V.status??"done";return K==="pending"?null:(V.children!=null&&(E.push(V.children),K==="active"&&(L=E.length-1)),z4(q,e))}),stepCount:R,stepLabels:E,currentLabelIdx:L>=0?L:E.length-1}},[f,e]),A=d??P4(e,S,j,z,it.headerCurrent,l);return n.jsxs("div",{ref:y,"data-state":e,"data-expanded":M,className:ie(it.root,h),...g,children:[n.jsxs("button",{type:"button",className:it.header,onClick:N,"aria-expanded":M,"aria-label":M?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:it.headerSummary,children:A},`${e}-${z}`),n.jsx("span",{className:ie(it.headerChevron,M&&it.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Fn,{size:14})})]}),n.jsx("div",{className:ie(it.body,M?it.bodyExpanded:it.bodyCollapsed),"aria-hidden":!M,children:n.jsx("div",{className:it.bodyInner,children:n.jsxs("div",{className:it.bodyContent,children:[$,e==="done"&&n.jsx(ec,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});hh.displayName="AIActivityTrail";function z4(e,o){return v.cloneElement(e,{groupState:o})}var Po=J0();const O4="_wrapper_3tqlm_10",D4="_tooltip_3tqlm_22",F4="_portal_3tqlm_23",B4="_top_3tqlm_61",H4="_bottom_3tqlm_71",W4="_left_3tqlm_81",U4="_right_3tqlm_91",cl={wrapper:O4,tooltip:D4,portal:F4,top:B4,bottom:H4,left:W4,right:U4},Rr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,g]=v.useState(!1),[y,x]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),_=v.useId(),C=v.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),z=6+d;let A=0,R=0;switch(o){case"top":A=j.top-z,R=j.left+j.width/2;break;case"bottom":A=j.bottom+z,R=j.left+j.width/2;break;case"left":A=j.top+j.height/2,R=j.left-z;break;case"right":A=j.top+j.height/2,R=j.right+z;break}x({top:A,left:R})},[o,d]),M=v.useCallback(()=>{s||(C(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,C]),N=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!f)return;const j=()=>C();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[f,C]);const $=pn.cloneElement(h,{"aria-describedby":f?_:void 0}),S=n.jsx("span",{id:_,role:"tooltip",className:ie(cl.tooltip,cl[o],cl.portal),"data-visible":f||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:cl.wrapper,onMouseEnter:M,onMouseLeave:N,onFocus:M,onBlur:N,children:[$,Po.createPortal(S,document.body)]})};Rr.displayName="Tooltip";const q4="_root_v8mqg_9",V4="_hover_v8mqg_21",lu={root:q4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:V4};function G4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const ig=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const g=i==null?null:G4(i)?n.jsx(Oi,{value:i,format:s,inline:!0}):i,y=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===Rr)return k;const _=k.props["aria-label"];return _?n.jsx(Rr,{content:_,placement:"top",delay:150,children:k}):k},x=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,y)}return y(w)});return n.jsxs("div",{ref:f,"data-visibility":e,"data-align":o,className:ie(lu.root,lu[`align-${o}`],e==="hover"&&lu.hover,l),...h,children:[x,g]})});ig.displayName="AIMessageActions";const Y4="_card_1apq1_17",K4="_header_1apq1_69",Q4="_iconBadge_1apq1_74",Z4="_iconInner_1apq1_89",X4="_headerText_1apq1_100",J4="_headerTopRow_1apq1_109",ew="_eyebrow_1apq1_115",tw="_title_1apq1_124",nw="_subtitle_1apq1_130",rw="_headerTrailing_1apq1_135",ow="_body_1apq1_141",aw="_footer_1apq1_152",iw="_footerEnd_1apq1_157",sw="_metaRow_1apq1_162",lw="_metaItem_1apq1_170",cw="_resultHero_1apq1_180",dw="_resultHeadline_1apq1_185",uw="_resultDetail_1apq1_191",hw="_clauses_1apq1_205",pw="_clause_1apq1_205",fw="_clauseLabel_1apq1_215",mw="_clauseBody_1apq1_225",gw="_badgeExecuting_1apq1_245",dt={card:Y4,header:K4,iconBadge:Q4,iconInner:Z4,headerText:X4,headerTopRow:J4,eyebrow:ew,title:tw,subtitle:nw,headerTrailing:rw,body:ow,footer:aw,footerEnd:iw,metaRow:sw,metaItem:lw,resultHero:cw,resultHeadline:dw,resultDetail:uw,clauses:hw,clause:pw,clauseLabel:fw,clauseBody:mw,badgeExecuting:gw},pr=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:g,footerEnd:y=!1,className:x,children:w,...k},_)=>{const C=l!=null||f!=null,M=C||d!=null||h!=null,N=s!=null||M;return n.jsxs("div",{ref:_,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(dt.card,x),...k,children:[N&&n.jsxs("div",{className:dt.header,children:[s!=null&&n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:dt.iconInner,children:s})}),M&&n.jsxs("div",{className:dt.headerText,children:[C&&n.jsxs("div",{className:dt.headerTopRow,children:[l!=null&&n.jsx("span",{className:dt.eyebrow,children:l}),f!=null&&n.jsx("span",{className:dt.headerTrailing,children:f})]}),d!=null&&n.jsx("span",{className:dt.title,children:d}),h!=null&&n.jsx("span",{className:dt.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:dt.body,children:w}),g!=null&&n.jsx("div",{className:ie(dt.footer,y&&dt.footerEnd),children:g})]})});pr.displayName="UltronCard";const vw="_root_zkkgh_6",xw="_sm_zkkgh_24",yw="_md_zkkgh_33",ww="_lg_zkkgh_42",bw="_neutral_zkkgh_53",kw="_blue_zkkgh_66",Cw="_azure_zkkgh_79",_w="_purple_zkkgh_92",jw="_pink_zkkgh_105",Sw="_red_zkkgh_118",$w="_orange_zkkgh_131",Mw="_yellow_zkkgh_144",Nw="_matcha_zkkgh_157",Rw="_green_zkkgh_170",Lw="_subtle_zkkgh_184",Aw="_outline_zkkgh_190",Tw="_solid_zkkgh_196",Ew="_dot_zkkgh_203",Iw="_icon_zkkgh_212",Pw="_dismiss_zkkgh_224",$o={root:vw,sm:xw,md:yw,lg:ww,neutral:bw,blue:kw,azure:Cw,purple:_w,pink:jw,red:Sw,orange:$w,yellow:Mw,matcha:Nw,green:Rw,subtle:Lw,outline:Aw,solid:Tw,dot:Ew,icon:Iw,dismiss:Pw},Di=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},zw={sm:10,md:12,lg:14},tr=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:g,...y},x)=>n.jsxs("span",{ref:x,className:ie($o.root,$o[i],$o[o],$o[e],f),...y,children:[s&&n.jsx("span",{className:$o.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie($o.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&n.jsx("button",{type:"button",className:$o.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Di,{size:zw[i]})})]}));tr.displayName="Tag";function sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}sg.displayName="SlashCircle01Icon";const ph=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};ph.displayName="EyeIcon";function tc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tc.displayName="Target01Icon";function _n({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}_n.displayName="ClockIcon";const Fi=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Fi.displayName="RefreshCw04Icon";const fn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};fn.displayName="CheckCircleIcon";function nc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nc.displayName="Save01Icon";const Ow={sm:11,md:12,lg:14},Dw={ignored:{label:"Ignored",color:"neutral",Icon:sg},monitored:{label:"Monitored",color:"blue",Icon:ph},recommended:{label:"Recommended",color:"purple",Icon:tc},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:_n},executing:{label:"Executing",color:"azure",Icon:Fi},completed:{label:"Completed",color:"green",Icon:fn},saved:{label:"Saved",color:"matcha",Icon:nc}},zo=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=Dw[e],f=h.Icon;return n.jsx(tr,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(f,{size:Ow[o]}),className:ie(e==="executing"&&dt.badgeExecuting,s),...l,children:i??h.label})});zo.displayName="UltronStatusBadge";function rc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rc.displayName="Bell01Icon";const Fw=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},g)=>n.jsx(pr,{ref:g,tone:d,eyebrow:i,title:e,icon:o??n.jsx(rc,{size:14}),trailing:l?n.jsx(zo,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:dt.metaRow,children:s.map((y,x)=>n.jsxs("span",{className:dt.metaItem,children:[y.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,h]})}));Fw.displayName="UltronEventCard";const Bw=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(pr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(ch,{size:14}),...d,children:[l,i&&n.jsx("div",{className:dt.metaRow,children:i})]}));Bw.displayName="UltronUnderstandingCard";const Hw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Ww=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(pr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(tc,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:dt.metaRow,children:i.map((f,g)=>n.jsx(tr,{size:"sm",color:Hw[s],variant:"subtle",children:f},g))}):null]}));Ww.displayName="UltronDecisionCard";const Uw="_root_1dj39_8",qw="_xs_1dj39_75",Vw="_sm_1dj39_84",Gw="_md_1dj39_93",Yw="_lg_1dj39_102",Kw="_xl_1dj39_111",Qw="_iconOnly_1dj39_122",Zw="_primary_1dj39_132",Xw="_secondary_1dj39_148",Jw="_tertiary_1dj39_167",eb="_ghost_1dj39_185",tb="_destructive_1dj39_203",nb="_destructiveSecondary_1dj39_221",rb="_artwork_1dj39_69",ob="_label_1dj39_254",ab="_spinner_1dj39_69",ib="_light_1dj39_285",un={root:Uw,xs:qw,sm:Vw,md:Gw,lg:Yw,xl:Kw,iconOnly:Qw,primary:Zw,secondary:Xw,tertiary:Jw,ghost:eb,destructive:tb,destructiveSecondary:nb,artwork:rb,label:ob,spinner:ab,"alloy-spin":"_alloy-spin_1dj39_1",light:ib},sb={primary:un.primary,secondary:un.secondary,tertiary:un.tertiary,ghost:un.ghost,destructive:un.destructive,"destructive-secondary":un.destructiveSecondary},Oe=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:g,...y},x)=>{const w=g||i;return n.jsxs("button",{ref:x,className:ie(un.root,sb[e],un[o],d&&un.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...y,children:[i&&n.jsx("span",{className:un.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&n.jsx("span",{className:un.label,children:f}),l&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Oe.displayName="Button";function lg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}lg.displayName="XCircleIcon";const lb=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},g)=>{const y=n.jsxs(n.Fragment,{children:[i.map((x,w)=>n.jsx(Oe,{size:"sm",variant:x.variant??(w===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},w)),s&&n.jsx(Oe,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(lg,{size:16}),onClick:s,children:l})]});return n.jsx(pr,{ref:g,tone:d,eyebrow:e,icon:o??n.jsx(tc,{size:14}),footer:y,...f,children:h})});lb.displayName="UltronRecommendationCard";function oc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oc.displayName="Lock01Icon";const cb=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:g="Edit",onEdit:y,tone:x="warning",children:w,...k},_)=>{const C=n.jsxs(n.Fragment,{children:[f&&n.jsx(Oe,{size:"md",variant:"ghost",onClick:f,children:h}),y&&n.jsx(Oe,{size:"md",variant:"secondary",onClick:y,children:g}),n.jsx(Oe,{size:"md",variant:"primary",leadingArtwork:n.jsx(en,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(pr,{ref:_,tone:x,eyebrow:o,title:e,icon:i??n.jsx(oc,{size:14}),trailing:n.jsx(zo,{status:"awaiting-approval"}),footer:C,footerEnd:!0,...k,children:w})});cb.displayName="UltronApprovalCard";const db=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>n.jsx(pr,{ref:f,tone:d,eyebrow:e,icon:o??n.jsx(Fi,{size:14}),trailing:n.jsx(zo,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(hh,{state:s,duration:l,children:i.map((g,y)=>n.jsx(ec,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},y))})}));db.displayName="UltronExecutionCard";const ub=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>n.jsx(pr,{ref:f,tone:l,fill:!0,accent:!1,trailing:n.jsx(zo,{status:s}),footer:d,...h,children:n.jsxs("div",{className:dt.resultHero,children:[n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(fn,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:dt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:dt.resultDetail,children:o})]})]})}));ub.displayName="UltronResultCard";function cg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}cg.displayName="ZapIcon";const hb=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:g="info",children:y,...x},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(Oe,{size:"md",variant:"primary",leadingArtwork:n.jsx(nc,{size:18}),loading:d,onClick:l,children:s}),f&&n.jsx(Oe,{size:"md",variant:"ghost",onClick:f,children:h})]});return n.jsx(pr,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(cg,{size:14}),footer:k,...x,children:y})});hb.displayName="UltronWorkflowSaveCard";const dg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dg.displayName="GitBranch01Icon";function cu({label:e,children:o}){return n.jsxs("div",{className:dt.clause,children:[n.jsx("span",{className:dt.clauseLabel,children:e}),n.jsx("span",{className:dt.clauseBody,children:o})]})}const pb=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:g="info",...y},x)=>n.jsx(pr,{ref:x,tone:g,eyebrow:o,title:e,icon:i??n.jsx(dg,{size:14}),trailing:h?n.jsx(zo,{status:h}):void 0,footer:f,...y,children:n.jsxs("div",{className:dt.clauses,children:[n.jsx(cu,{label:"When",children:s}),n.jsx(cu,{label:"If",children:l}),n.jsx(cu,{label:"Then",children:d})]})}));pb.displayName="UltronWorkflowPreviewCard";const fb="_root_1nyuz_6",mb="_sm_1nyuz_20",gb="_md_1nyuz_29",vb="_lg_1nyuz_38",xb="_divider_1nyuz_48",yb="_interactive_1nyuz_53",wb="_disabled_1nyuz_60",bb="_destructive_1nyuz_64",kb="_selected_1nyuz_78",Cb="_label_1nyuz_87",_b="_description_1nyuz_97",jb="_leadingSlot_1nyuz_101",Sb="_trailingSlot_1nyuz_102",$b="_content_1nyuz_115",Mb="_taSwitch_1nyuz_167",Nb="_taSwitchThumb_1nyuz_188",Rb="_taCheckbox_1nyuz_203",Lb="_taRadio_1nyuz_226",Ab="_taRadioDot_1nyuz_244",Tb="_taExpand_1nyuz_252",Eb="_taStatus_1nyuz_266",Ib="_taStatus_success_1nyuz_273",Pb="_taStatus_warning_1nyuz_274",zb="_taStatus_error_1nyuz_275",Ob="_taStatus_info_1nyuz_276",_t={root:fb,sm:mb,md:gb,lg:vb,divider:xb,interactive:yb,disabled:wb,destructive:bb,selected:kb,label:Cb,description:_b,leadingSlot:jb,trailingSlot:Sb,content:$b,taSwitch:Mb,taSwitchThumb:Nb,taCheckbox:Rb,taRadio:Lb,taRadioDot:Ab,taExpand:Tb,taStatus:Eb,taStatus_success:Ib,taStatus_warning:Pb,taStatus_error:zb,taStatus_info:Ob},Sn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Sn.displayName="ChevronRightIcon";const fh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fh.displayName="ArrowUpRightIcon";const Db="_root_4qytd_5",Fb="_neutral_4qytd_25",Bb="_primary_4qytd_30",Hb="_success_4qytd_35",Wb="_warning_4qytd_40",Ub="_error_4qytd_45",qb="_info_4qytd_50",Df={root:Db,neutral:Fb,primary:Bb,success:Hb,warning:Wb,error:Ub,info:qb},Oo=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(Df.root,Df[e],o),...s,children:i}));Oo.displayName="Badge";const Vb=({checked:e})=>n.jsx("span",{className:_t.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:_t.taSwitchThumb})}),Gb=({checked:e})=>n.jsx("span",{className:_t.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Yb=({checked:e})=>n.jsx("span",{className:_t.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:_t.taRadioDot})}),Kb=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(Oo,{"aria-hidden":"true",children:i}):null},Qb=({expanded:e})=>n.jsx("span",{className:_t.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Sn,{size:16,color:"currentColor"})}),Zb=({variant:e})=>n.jsx("span",{className:ie(_t.taStatus,_t[`taStatus_${e}`]),"aria-hidden":"true"}),Xb=new Set(["badge","status"]),jn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:g,badgeLabel:y,expanded:x=!1,statusVariant:w="success",divider:k=!0,size:_="md",interactive:C,selected:M=!1,destructive:N=!1,disabled:$=!1,className:S,onClick:j,onKeyDown:z,...A},R)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[L,F]=v.useState(h),q=E?d!==void 0?d:L:!1,V=C||!!j||E||l!==void 0&&!Xb.has(l),H=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":V?"button":void 0,K=v.useCallback(se=>{if(!$){if(E){const le=!q;d===void 0&&F(le),f==null||f(le)}j==null||j(se)}},[$,E,q,d,f,j]),ee=v.useCallback(se=>{V&&!$&&(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),K(se)),z==null||z(se)},[V,$,K,z]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Sn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(fh,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(Vb,{checked:q});case"checkbox":return n.jsx(Gb,{checked:q});case"radio":return n.jsx(Yb,{checked:q});case"badge":return n.jsx(Kb,{count:g,label:y});case"expand":return n.jsx(Qb,{expanded:x});case"status":return n.jsx(Zb,{variant:w});default:return null}})();return n.jsxs("div",{ref:R,role:H,tabIndex:V&&!$?0:void 0,"aria-checked":E?q:void 0,"aria-selected":M||void 0,"aria-disabled":$||void 0,"data-selected":M||void 0,"data-disabled":$||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:ie(_t.root,_t[_],k&&_t.divider,V&&_t.interactive,M&&_t.selected,N&&_t.destructive,$&&_t.disabled,S),onClick:$?void 0:K,onKeyDown:ee,...A,children:[i&&n.jsx("div",{className:_t.leadingSlot,children:i}),n.jsxs("div",{className:_t.content,children:[n.jsx("span",{className:_t.label,children:e}),o&&n.jsx("span",{className:_t.description,children:o})]}),ae&&n.jsx("div",{className:_t.trailingSlot,children:ae})]})});jn.displayName="ListItem";const Jb=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(jn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(zo,{status:s}),...l}));Jb.displayName="UltronActivityStreamItem";const e6="_root_1sz1z_7",t6="_status_1sz1z_50",du={root:e6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:t6},mh=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const g=v.useRef(null),[y,x]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const _=k.props;return v.cloneElement(k,{groupDisabled:e||!!_.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=_=>{_.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>x(k),[]),n.jsxs("div",{ref:f,"data-size":o,className:ie(du.root,du[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:g,className:du.status,role:"status","aria-live":"polite",children:y})]})});mh.displayName="ComposerActions";function uu({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const ug=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ug.displayName="SearchSmIcon";const $l=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$l.displayName="Trash03Icon";const gh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gh.displayName="SunIcon";const hg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="ArrowNarrowRightIcon";function no({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ff({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function n6({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Dl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Dl.displayName="ChevronSelectorVerticalIcon";const Lo=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Lo.displayName="ClipboardCheckIcon";const pg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};pg.displayName="SettingsGearIcon";const fg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fg.displayName="ChevronLeftIcon";const mg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};mg.displayName="EyeOffIcon";const gg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gg.displayName="StopIcon";const vg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vg.displayName="RecordingIcon";const xg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};xg.displayName="BankIcon";function ac({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ac.displayName="ArrowNarrowUpIcon";function yg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yg.displayName="ArrowNarrowDownIcon";function ic({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ic.displayName="Microphone02Icon";const Fl=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Fl.displayName="AlertTriangleIcon";const wg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};wg.displayName="BankNote01Icon";const bg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};bg.displayName="CoinsStacked03Icon";function kg({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const vh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vh.displayName="Map01Icon";const xh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};xh.displayName="PackageIcon";const Cg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Cg.displayName="ThumbsUpIcon";const _g=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};_g.displayName="ThumbsDownIcon";function Li({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Li.displayName="Building02Icon";function yh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yh.displayName="Building05Icon";function Bi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Bi.displayName="CheckVerified01Icon";function jg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jg.displayName="Copy01Icon";function Sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}Sg.displayName="DotsVerticalIcon";function sc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}sc.displayName="Edit02Icon";function $g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}$g.displayName="HomeSmileIcon";function wh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}wh.displayName="Link01Icon";function lc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}lc.displayName="LinkExternal01Icon";function bh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bh.displayName="MedicalCrossIcon";function Ai({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ai.displayName="MessageCircle02Icon";function kh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}kh.displayName="MinusIcon";function Mg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Mg.displayName="Moon01Icon";function Ng({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ng.displayName="Pin01Icon";function Rg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Rg.displayName="ReceiptCheckIcon";function Lg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}Lg.displayName="Settings02Icon";function Ag({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ag.displayName="Speedometer02Icon";function Tg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Tg.displayName="Trash01Icon";function Bu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Bu.displayName="UploadCloud01Icon";function To({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}To.displayName="XCloseIcon";const r6="_base_i93xz_11",o6="_icon_i93xz_45",a6="_sendReady_i93xz_65",i6="_sendStreaming_i93xz_66",s6="_sendDisabled_i93xz_67",l6="_sendError_i93xz_68",c6="_attachIdle_i93xz_131",d6="_attachDisabled_i93xz_145",u6="_attachError_i93xz_152",h6="_voiceIdle_i93xz_165",p6="_voiceRecording_i93xz_179",f6="_voiceDisabled_i93xz_189",m6="_iconStack_i93xz_200",g6="_iconLayer_i93xz_209",kt={base:r6,icon:o6,sendReady:a6,sendStreaming:i6,sendDisabled:s6,sendError:l6,attachIdle:c6,attachDisabled:d6,attachError:u6,voiceIdle:h6,voiceRecording:p6,voiceDisabled:f6,iconStack:m6,iconLayer:g6},v6={hidden:void 0,ready:kt.sendReady,"disabled-invalid":kt.sendDisabled,streaming:kt.sendStreaming,error:kt.sendError},x6=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Na=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...y},x)=>{const w=v.useRef(null),k=v.useRef(null),_=v.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]),C=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const M=!h&&(e==="ready"||e==="streaming"||e==="error"),N=x6(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,S=n.jsx("button",{ref:_,type:"button","data-composer-action":"send","data-state":e,className:ie(kt.base,v6[e],f),style:g,"aria-label":N,disabled:!M,onClick:C,...y,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(ac,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(gg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Fi,{size:"100%",strokeWidth:2})})]})});return $?n.jsx(Rr,{content:$,placement:"top",children:S}):S});Na.displayName="ComposerSendButton";const y6={idle:kt.attachIdle,disabled:kt.attachDisabled,error:kt.attachError},w6=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Eg=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...y},x)=>{const w=v.useRef(null),k=v.useCallback(()=>{var S;(e==="idle"||e==="error")&&((S=w.current)==null||S.click())},[e]),_=v.useCallback(S=>{const j=S.target.files;j&&j.length>0&&(o==null||o(j)),S.target.value=""},[o]),C=!h&&e!=="disabled",M=w6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=n.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:ie(kt.base,y6[e],f),style:g,"aria-label":M,disabled:!C,onClick:k,...y,children:[n.jsx("span",{className:kt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(Ma,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:_,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx(Rr,{content:N,placement:"top",children:$}):$});Eg.displayName="ComposerAttachment";const b6={idle:kt.voiceIdle,recording:kt.voiceRecording,disabled:kt.voiceDisabled},k6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Ig=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},g)=>{const y=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),x=!l&&e!=="disabled",w=k6(e,s),k=e==="disabled"?s??"Voice unavailable":null,_=n.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:ie(kt.base,b6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...f,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(ic,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(vg,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(Rr,{content:k,placement:"top",children:_}):_});Ig.displayName="ComposerVoiceButton";const C6=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:g="lg",leadingActions:y,className:x},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(rg,{className:x,style:{flex:"0 0 auto"},children:n.jsx(og,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:f,radius:g,disabled:d,children:n.jsxs(mh,{size:"md",disabled:d,children:[y,h&&n.jsx(Ig,{state:d?"disabled":"idle"}),n.jsx(Na,{state:k,onSend:i,onStop:i})]})})})});C6.displayName="UltronCommandBar";const _6=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(hh,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(ec,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));_6.displayName="UltronThreadTimeline";const j6="_root_ghwhu_10",S6="_badge_ghwhu_27",$6="_badgeIcon_ghwhu_38",M6="_green_ghwhu_59",N6="_yellow_ghwhu_60",R6="_matcha_ghwhu_61",L6="_purple_ghwhu_62",A6="_blue_ghwhu_63",T6="_azure_ghwhu_64",E6="_red_ghwhu_65",I6="_orange_ghwhu_66",P6="_pink_ghwhu_67",z6="_slate_ghwhu_68",O6="_content_ghwhu_73",D6="_label_ghwhu_83",F6="_valueRow_ghwhu_97",B6="_change_ghwhu_106",H6="_value_ghwhu_97",_r={root:j6,badge:S6,badgeIcon:$6,green:M6,yellow:N6,matcha:R6,purple:L6,blue:A6,azure:T6,red:E6,orange:I6,pink:P6,slate:z6,content:O6,label:D6,valueRow:F6,change:B6,value:H6},W6=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(_r.root,d),...h,children:[n.jsx("div",{className:ie(_r.badge,_r[e]),"aria-hidden":"true",children:n.jsx("span",{className:_r.badgeIcon,children:o})}),n.jsxs("div",{className:_r.content,children:[n.jsx("span",{className:_r.label,children:i}),n.jsxs("div",{className:_r.valueRow,children:[n.jsx("span",{className:_r.value,children:s}),l!=null&&n.jsx("span",{className:_r.change,children:l})]})]})]}));W6.displayName="DataCard";const U6="_root_d0j6n_7",q6="_icon_d0j6n_21",V6="_text_d0j6n_33",G6="_positive_d0j6n_41",Y6="_warning_d0j6n_45",K6="_negative_d0j6n_49",dl={root:U6,icon:q6,text:V6,positive:G6,warning:Y6,negative:K6};function Q6(e){return e==="up"?"positive":"negative"}const Z6=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Q6(e.trend):e.severity,{severity:f,...g}=d,y=i==="trend"?(({trend:w,severity:k,..._})=>_)(g):g,x=i==="trend"?e.trend==="up"?ac:yg:null;return n.jsxs("span",{ref:o,className:ie(dl.root,dl[h],l),...y,children:[n.jsx("span",{className:dl.text,children:s}),x&&n.jsx("span",{className:dl.icon,"aria-hidden":"true",children:n.jsx(x,{size:14})})]})});Z6.displayName="ValueChangeLabel";const X6="_root_1lq10_1",J6="_horizontal_1lq10_9",e8="_vertical_1lq10_15",t8="_solid_1lq10_32",n8="_dashed_1lq10_36",ul={root:X6,horizontal:J6,vertical:e8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:t8,dashed:n8},r8=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(ul.root,ul[`thickness-${e}`],ul[o],ul[i],s),...l}));r8.displayName="Divider";const o8="_overlay_vxgy2_9",a8="_dialogOverlayIn_vxgy2_1",i8="_dialogOverlayOut_vxgy2_1",s8="_dialog_vxgy2_38",l8="_dialogIn_vxgy2_1",c8="_dialogOut_vxgy2_1",d8="_sm_vxgy2_88",u8="_md_vxgy2_89",h8="_lg_vxgy2_90",p8="_header_vxgy2_95",f8="_title_vxgy2_107",m8="_closeBtn_vxgy2_120",g8="_content_vxgy2_152",v8="_footer_vxgy2_163",so={overlay:o8,dialogOverlayIn:a8,dialogOverlayOut:i8,dialog:s8,dialogIn:l8,dialogOut:c8,sm:d8,md:u8,lg:h8,header:p8,title:f8,closeBtn:m8,content:g8,footer:v8},Pg=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(so.header,i),...s,children:[n.jsx("span",{className:so.title,children:o}),e&&n.jsx("button",{type:"button",className:so.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Di,{size:16})})]}));Pg.displayName="DialogHeader";const zg=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(so.content,o),...i,children:e}));zg.displayName="DialogContent";const Og=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(so.footer,o),...i,children:e}));Og.displayName="DialogFooter";function Dg({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),f=180,[g,y]=v.useState(e);return v.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),f);return()=>clearTimeout(x)},[e]),v.useEffect(()=>{if(!e)return;const x=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,o]),v.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),g?Po.createPortal(n.jsx("div",{className:so.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(so.dialog,so[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const x8="_root_1dntq_7",y8="_badge_1dntq_57",w8="_badgeIconSlot_1dntq_74",b8="_content_1dntq_82",k8="_text_1dntq_90",C8="_title_1dntq_99",_8="_description_1dntq_120",j8="_actions_1dntq_131",S8="_dot_1dntq_137",$8="_actionLink_1dntq_144",M8="_primaryAction_1dntq_162",N8="_trailing_1dntq_170",Kt={root:x8,badge:y8,badgeIconSlot:w8,content:b8,text:k8,title:C8,description:_8,actions:j8,dot:S8,actionLink:$8,primaryAction:M8,trailing:N8},R8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),L8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),A8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Bf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),T8={error:R8,warning:A8,success:L8,info:Bf,feature:Bf},Fg=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:g,onDismiss:y,className:x,...w},k)=>{const _=T8[e],C=i==="lg",M=y?n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:n.jsx(Di,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Kt.root,x),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Kt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Kt.badgeIconSlot),children:n.jsx(_,{})})}),C?n.jsxs("div",{className:Kt.content,children:[n.jsxs("div",{className:Kt.text,children:[n.jsx("p",{className:Kt.title,children:s}),l&&n.jsx("p",{className:Kt.description,children:l})]}),(d||f)&&n.jsxs("div",{className:Kt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Kt.actionLink,Kt.primaryAction),onClick:h,children:d}),d&&f&&n.jsx("span",{className:Kt.dot,"aria-hidden":"true",children:"·"}),f&&n.jsx("button",{type:"button",className:Kt.actionLink,onClick:g,children:f})]})]}):n.jsx("p",{className:Kt.title,children:s}),C?M:(d||y)&&n.jsxs("div",{className:Kt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Kt.actionLink,Kt.primaryAction),onClick:h,children:d}),M]})]})});Fg.displayName="Alert";const E8="_stack_x4xl7_11",I8="_item_x4xl7_28",P8="_itemExiting_x4xl7_33",Hu={stack:E8,item:I8,itemExiting:P8},z8=v.createContext(null);function O8({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:g,exiting:y,onRemove:x}){const w=v.useCallback(()=>x(e),[e,x]);return n.jsx("div",{className:ie(Hu.item,y&&Hu.itemExiting),onAnimationEnd:y?w:void 0,children:n.jsx(Fg,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function D8({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:Po.createPortal(n.jsx("div",{className:Hu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(O8,{...s,onRemove:i},s.id))}),document.body)}function F8({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(f=>{const g=`toast-${++s.current}`;return i(y=>[...y,{id:g,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(f=>{i(g=>g.map(y=>y.id===f?{...y,exiting:!0}:y))},[]),h=v.useCallback(f=>{i(g=>g.filter(y=>y.id!==f))},[]);return n.jsxs(z8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(D8,{toasts:o,onStartExit:d,onRemove:h})]})}const B8="_root_1s0ek_5",H8="_list_1s0ek_11",W8="_item_1s0ek_23",U8="_separator_1s0ek_31",q8="_link_1s0ek_47",V8="_current_1s0ek_68",G8="_iconSlot_1s0ek_76",ur={root:B8,list:H8,item:W8,separator:U8,link:q8,current:V8,iconSlot:G8},Y8=()=>n.jsx("span",{className:ur.separator,"aria-hidden":"true",children:"/"}),K8=()=>n.jsx("span",{className:ur.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Q8=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?K8:Y8;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(ur.root,i),...s,children:n.jsx("ol",{className:ur.list,children:e.map((h,f)=>{const g=f===e.length-1,y=!g&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:ur.item,children:[f>0&&n.jsx(d,{}),y?n.jsxs("a",{href:h.href,onClick:h.onClick,className:ur.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(ur.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(ur.link,g&&ur.current),"aria-current":g?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(ur.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},f)})})})});Q8.displayName="Breadcrumb";const Z8="_root_139vz_6",X8="_divider_139vz_14",J8="_item_139vz_19",e9="_label_139vz_25",t9="_description_139vz_26",n9="_chevron_139vz_27",r9="_iconSlot_139vz_28",o9="_hitTarget_139vz_32",a9="_size_sm_139vz_37",i9="_size_md_139vz_43",s9="_size_lg_139vz_49",l9="_header_139vz_59",c9="_headerContent_139vz_59",d9="_checkboxWrap_139vz_60",u9="_labelBlock_139vz_157",h9="_trailingSlot_139vz_60",p9="_body_139vz_199",f9="_bodyInner_139vz_209",m9="_bodyContent_139vz_214",Ot={root:Z8,divider:X8,item:J8,label:e9,description:t9,chevron:n9,iconSlot:r9,hitTarget:o9,size_sm:a9,size_md:i9,size_lg:s9,header:l9,headerContent:c9,checkboxWrap:d9,labelBlock:u9,trailingSlot:h9,body:p9,bodyInner:f9,bodyContent:m9},g9="_root_17t97_6",v9="_disabled_17t97_12",x9="_sm_17t97_18",y9="_md_17t97_26",w9="_lg_17t97_34",b9="_controlWrap_17t97_43",k9="_input_17t97_52",C9="_box_17t97_67",_9="_boxChecked_17t97_96",j9="_boxError_17t97_106",S9="_labelWrap_17t97_116",$9="_label_17t97_116",M9="_error_17t97_138",N9="_required_17t97_140",R9="_description_17t97_145",wn={root:g9,disabled:v9,sm:x9,md:y9,lg:w9,controlWrap:b9,input:k9,box:C9,boxChecked:_9,boxError:j9,labelWrap:S9,label:$9,error:M9,required:N9,description:R9},Bg=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:g,id:y,name:x,value:w,required:k,className:_},C)=>{const M=v.useId(),N=y??M,$=v.useRef(null);v.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const S=e!==void 0,[j,z]=v.useState(o),A=S?e:j,R=L=>{S||z(L.target.checked),s==null||s(L.target.checked)},E=A||i;return n.jsxs("div",{className:ie(wn.root,wn[h],l&&wn.disabled,d&&wn.error,_),children:[n.jsxs("div",{className:wn.controlWrap,children:[n.jsx("input",{ref:L=>{$.current=L,typeof C=="function"?C(L):C&&(C.current=L)},type:"checkbox",id:N,name:x,value:w,checked:A,disabled:l,required:k,"aria-invalid":d||void 0,onChange:R,className:wn.input}),n.jsx("span",{className:ie(wn.box,E&&wn.boxChecked,d&&wn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):A?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||g)&&n.jsxs("div",{className:wn.labelWrap,children:[f&&n.jsxs("label",{htmlFor:N,className:wn.label,children:[f,k&&n.jsx("span",{className:wn.required,"aria-hidden":"true",children:" *"})]}),g&&n.jsx("span",{className:wn.description,children:g})]})]})});Bg.displayName="Checkbox";const Hg=v.createContext(null),Wu=v.createContext(0),Wg=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:g,children:y,...x},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[_,C]=v.useState(k),M=i!==void 0,N=v.useMemo(()=>M?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:_,[M,i,_]),$=v.useCallback(z=>N.has(z),[N]),S=v.useCallback(z=>{const A=new Set(N);e==="single"?A.has(z)?o&&A.delete(z):(A.clear(),A.add(z)):A.has(z)?A.delete(z):A.add(z),M||C(A),l&&l(e==="single"?A.values().next().value??"":Array.from(A))},[N,e,o,M,l]),j=v.useMemo(()=>({type:e,collapsible:o,size:h,disabled:f,isExpanded:$,toggle:S}),[e,o,h,f,$,S]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:ie(Ot.root,d&&Ot.divider,g),...x,children:n.jsx(Hg.Provider,{value:j,children:n.jsx(Wu.Provider,{value:0,children:y})})})});Wg.displayName="Accordion";function hl(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Ug=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:g,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:w,expanded:k,defaultExpanded:_=!1,onExpandedChange:C,disabled:M=!1,size:N,className:$,children:S,...j},z)=>{const A=v.useContext(Hg),R=v.useContext(Wu),E=A!==null,L=N??(A==null?void 0:A.size)??"md",F=M||(A==null?void 0:A.disabled)||!1,[q,V]=v.useState(_);let H;E?H=e!==void 0?A.isExpanded(e):!1:k!==void 0?H=k:H=q;const K=v.useCallback(()=>{if(F)return;if(E){if(e===void 0)return;const O=A.isExpanded(e);A.toggle(e);const ne=A.type==="single"&&!A.collapsible&&O?!0:!O;C==null||C(ne);return}const T=!H;k===void 0&&V(T),C==null||C(T)},[F,E,A,e,H,k,C]),ee=v.useCallback(T=>w==null?void 0:w(T),[w]),ae=v.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),K();return}if(E)switch(T.key){case"ArrowDown":T.preventDefault(),hl(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),hl(T.currentTarget,"prev");break;case"Home":T.preventDefault(),hl(T.currentTarget,"first");break;case"End":T.preventDefault(),hl(T.currentTarget,"last");break}},[K,E]),se=v.useId(),le=`${se}-header`,Q=`${se}-body`,D=L==="sm"?16:L==="md"?18:20,Y=l??n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:Ot.checkboxWrap,children:n.jsx(Bg,{size:L,checked:g,defaultChecked:y,indeterminate:x,disabled:F,onChange:ee})}),s&&n.jsx("span",{className:Ot.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:z,"data-accordion-item":"","data-expanded":H||void 0,"data-disabled":F||void 0,"data-size":L,"data-depth":R,className:ie(Ot.item,Ot[`size_${L}`],$),style:{"--accordion-depth":R},...j,children:[n.jsxs("div",{className:Ot.header,children:[n.jsx("button",{type:"button",id:le,"data-accordion-header-button":"","data-accordion-depth":R,className:Ot.hitTarget,"aria-expanded":H,"aria-controls":Q,"aria-disabled":F||void 0,disabled:F,onClick:K,onKeyDown:ae}),n.jsxs("div",{className:Ot.headerContent,children:[h==="leading"&&n.jsx("span",{className:Ot.chevron,"aria-hidden":"true",children:n.jsx(Sn,{size:D,color:"currentColor"})}),Y,n.jsxs("div",{className:Ot.labelBlock,children:[n.jsx("span",{className:Ot.label,children:o}),i&&n.jsx("span",{className:Ot.description,children:i})]}),d&&n.jsx("div",{className:Ot.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Ot.chevron,"aria-hidden":"true",children:n.jsx(Sn,{size:D,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":le,className:Ot.body,"aria-hidden":!H,children:n.jsx("div",{className:Ot.bodyInner,children:n.jsx("div",{className:Ot.bodyContent,children:n.jsx(Wu.Provider,{value:R+1,children:S})})})})]})});Ug.displayName="AccordionItem";const L9="_root_1vgip_7",A9="_fullWidth_1vgip_12",T9="_panel_1vgip_19",E9="_panelInner_1vgip_73",I9="_item_1vgip_81",P9="_groupHeading_1vgip_87",z9="_groupHeadingSm_1vgip_96",O9="_groupHeadingLabel_1vgip_100",D9="_groupHeadingCollapsible_1vgip_112",F9="_groupChevron_1vgip_125",B9="_groupDivider_1vgip_139",er={root:L9,fullWidth:A9,panel:T9,panelInner:E9,item:I9,groupHeading:P9,groupHeadingSm:z9,groupHeadingLabel:O9,groupHeadingCollapsible:D9,groupChevron:F9,groupDivider:B9};function H9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(er.groupHeading,o==="sm"&&er.groupHeadingSm,e.collapsible&&er.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:er.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:er.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Sn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(jn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:er.item,onClick:()=>{var y;(y=h.onClick)==null||y.call(h),i&&!g&&s()}},h.id)})})]})}const Ch=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:g=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:w,...k},_)=>{const[C,M]=v.useState(h),N=v.useRef(null),$=d!==void 0?d:C,S=v.useCallback(z=>{N.current=z,_&&(typeof _=="function"?_(z):_.current=z)},[_]),j=v.useCallback(z=>{d===void 0&&M(z),f==null||f(z)},[d,f]);return v.useEffect(()=>{if(!$)return;const z=A=>{var R;(R=N.current)!=null&&R.contains(A.target)||j(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[$,j]),v.useEffect(()=>{if(!$)return;const z=A=>{A.key==="Escape"&&j(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[$,j]),n.jsxs("div",{ref:S,className:ie(er.root,x&&er.fullWidth,w),...k,children:[n.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:g?-1:0,onClick:g?void 0:()=>j(!$),onKeyDown:g?void 0:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),j(!$))},children:e}),n.jsx("div",{className:er.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:er.panelInner,children:o.map((z,A)=>n.jsxs("div",{children:[A>0&&n.jsx("div",{className:er.groupDivider,"aria-hidden":"true"}),n.jsx(H9,{group:z,size:i,closeOnSelect:y,onClose:()=>j(!1)})]},z.id))})})]})});Ch.displayName="DropdownMenu";const W9="_hiddenInput_8457s_8",U9="_area_8457s_19",q9="_uploadIcon_8457s_53",V9="_textBlock_8457s_59",G9="_title_8457s_67",Y9="_description_8457s_76",K9="_fileRow_8457s_88",Q9="_fileIcon_8457s_96",Z9="_fileName_8457s_101",X9="_successIcon_8457s_115",J9="_removeBtn_8457s_121",e7="_progressWrap_8457s_145",t7="_progressBar_8457s_153",n7="_progressFill_8457s_161",r7="_progressLabel_8457s_168",o7="_errorRow_8457s_178",a7="_errorIcon_8457s_186",i7="_errorText_8457s_192",s7="_areaMulti_8457s_206",l7="_multiDropZone_8457s_214",c7="_fileList_8457s_244",d7="_fileListItem_8457s_254",u7="_inline_8457s_267",h7="_inlineIcon_8457s_309",p7="_inlineText_8457s_330",f7="_inlineProgress_8457s_353",m7="_inlineProgressFill_8457s_363",g7="_footerSlot_8457s_429",Qe={hiddenInput:W9,area:U9,uploadIcon:q9,textBlock:V9,title:G9,description:Y9,fileRow:K9,fileIcon:Q9,fileName:Z9,successIcon:X9,removeBtn:J9,progressWrap:e7,progressBar:t7,progressFill:n7,progressLabel:r7,errorRow:o7,errorIcon:a7,errorText:i7,areaMulti:s7,multiDropZone:l7,fileList:c7,fileListItem:d7,inline:u7,inlineIcon:h7,inlineText:p7,inlineProgress:f7,inlineProgressFill:m7,footerSlot:g7};function hu(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const qg=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:w,onClear:k,onRemoveFile:_,fieldVariant:C="outlined",browseButtonVariant:M="tertiary",footerSlot:N,disabled:$=!1,className:S,...j},z)=>{const A=v.useRef(null),[R,E]=v.useState(!1),L=!$&&(o||i==="empty"),F=v.useCallback(()=>{var Q;!$&&(o||i==="empty")&&((Q=A.current)==null||Q.click())},[$,o,i]),q=v.useCallback(Q=>{var D;if(o){const Y=Q.target.files?Array.from(Q.target.files):[];Y.length&&(w==null||w(Y))}else{const Y=(D=Q.target.files)==null?void 0:D[0];Y&&(x==null||x(Y))}Q.target.value=""},[o,x,w]),V=v.useCallback(Q=>{Q.preventDefault(),L&&E(!0)},[L]),H=v.useCallback(()=>E(!1),[]),K=v.useCallback(Q=>{var D;if(Q.preventDefault(),E(!1),!!L)if(o){const Y=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];Y.length&&(w==null||w(Y))}else{const Y=(D=Q.dataTransfer.files)==null?void 0:D[0];Y&&(x==null||x(Y))}},[L,o,x,w]),ee=n.jsx("input",{ref:A,type:"file",className:Qe.hiddenInput,accept:y,multiple:o,disabled:$,"aria-hidden":"true",tabIndex:-1,onChange:q}),ae=l?n.jsxs("div",{className:Qe.fileRow,children:[n.jsx("span",{className:`${Qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(io,{size:16})}),n.jsx("span",{className:Qe.fileName,children:l.name}),n.jsx(tr,{size:"sm",variant:"subtle",children:hu(l)}),i==="complete"&&n.jsx("span",{className:`${Qe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(fn,{size:16})}),n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx($l,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:z,className:ie(Qe.areaMulti,S),"data-drag-over":R||void 0,"data-disabled":$||void 0,onDragOver:V,onDragLeave:H,onDrop:K,...j,children:[ee,n.jsxs("div",{className:Qe.multiDropZone,children:[n.jsx("span",{className:`${Qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(uu,{size:24})}),n.jsxs("div",{className:Qe.textBlock,children:[n.jsx("p",{className:Qe.title,children:f}),n.jsx("p",{className:Qe.description,children:g})]}),n.jsx(Oe,{variant:M,size:"sm",onClick:F,disabled:$,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:Qe.fileList,"aria-label":"Selected files",children:Q.map((D,Y)=>n.jsxs("li",{className:Qe.fileListItem,children:[n.jsx("span",{className:`${Qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(io,{size:16})}),n.jsx("span",{className:Qe.fileName,children:D.name}),n.jsx(tr,{size:"sm",variant:"subtle",children:hu(D)}),n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:()=>_==null?void 0:_(Y),"aria-label":`Remove ${D.name}`,disabled:$,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx($l,{size:14})})})]},`${D.name}-${Y}`))})]})}return n.jsxs("div",{ref:z,className:ie(Qe.area,S),"data-state":i,"data-drag-over":R||void 0,"data-disabled":$||void 0,onDragOver:V,onDragLeave:H,onDrop:K,...j,children:[ee,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(uu,{size:24})}),n.jsxs("div",{className:Qe.textBlock,children:[n.jsx("p",{className:Qe.title,children:f}),n.jsx("p",{className:Qe.description,children:g})]}),n.jsx(Oe,{variant:M,size:"sm",onClick:F,disabled:$,children:"Browse File"}),N&&n.jsx("div",{className:Qe.footerSlot,children:N})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Qe.progressWrap,children:[n.jsx("div",{className:Qe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Qe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Qe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Qe.errorRow,children:[n.jsx("span",{className:`${Qe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ka,{size:20})}),n.jsx("p",{className:Qe.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(Oe,{variant:"tertiary",size:"sm",onClick:F,disabled:$,children:"Try Again"})]})]})}const se={empty:n.jsx(uu,{size:16}),uploading:n.jsx(io,{size:16}),complete:n.jsx(fn,{size:16}),error:n.jsx(ka,{size:16})}[i],le=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:z,className:ie(Qe.inline,S),"data-state":i,"data-field-variant":C,"data-disabled":$||void 0,...j,children:[ee,n.jsx("span",{className:`${Qe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:se}),n.jsxs("span",{className:Qe.inlineText,"data-has-file":le?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),le&&n.jsx(tr,{size:"sm",variant:"subtle",children:hu(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx($l,{size:14})})}),i==="empty"&&n.jsx(Oe,{variant:M,size:"xs",onClick:F,disabled:$,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Qe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Qe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});qg.displayName="FileUploader";const v7="_wrapper_127v8_8",x7="_labelRow_127v8_16",y7="_label_127v8_16",w7="_required_127v8_28",b7="_labelIcon_127v8_36",k7="_sm_127v8_46",C7="_md_127v8_47",_7="_lg_127v8_48",j7="_shell_127v8_44",S7="_outlined_127v8_75",$7="_underlined_127v8_102",M7="_float_127v8_147",N7="_leadingSlot_127v8_181",R7="_trailingSlot_127v8_193",L7="_trailingActionWrap_127v8_206",A7="_trailingActionBtn_127v8_213",T7="_successTrailingSlot_127v8_234",E7="_errorTrailingSlot_127v8_239",I7="_control_127v8_251",P7="_selectValue_127v8_297",z7="_selectPlaceholder_127v8_303",O7="_selectChevron_127v8_307",D7="_selectChevronOpen_127v8_312",F7="_textareaShell_127v8_315",B7="_textareaControl_127v8_334",H7="_footer_127v8_351",W7="_footerRow_127v8_363",U7="_footerError_127v8_364",q7="_footerSuccess_127v8_365",V7="_footerIcon_127v8_368",G7="_wrapperHorizontal_127v8_378",Y7="_horizontalLabelCol_127v8_384",K7="_horizontalLabelHint_127v8_393",Q7="_horizontalControlCol_127v8_402",Z7="_msContainer_127v8_416",X7="_msShell_127v8_425",J7="_msOpen_127v8_440",ek="_msDisabled_127v8_447",tk="_msBody_127v8_450",nk="_msPlaceholder_127v8_459",rk="_msChevron_127v8_469",ok="_msChevronOpen_127v8_480",ak="_msPanel_127v8_483",Ie={wrapper:v7,labelRow:x7,label:y7,required:w7,labelIcon:b7,sm:k7,md:C7,lg:_7,shell:j7,outlined:S7,underlined:$7,float:M7,leadingSlot:N7,trailingSlot:R7,trailingActionWrap:L7,trailingActionBtn:A7,successTrailingSlot:T7,errorTrailingSlot:E7,control:I7,selectValue:P7,selectPlaceholder:z7,selectChevron:O7,selectChevronOpen:D7,textareaShell:F7,textareaControl:B7,footer:H7,footerRow:W7,footerError:U7,footerSuccess:q7,footerIcon:V7,wrapperHorizontal:G7,horizontalLabelCol:Y7,horizontalLabelHint:K7,horizontalControlCol:Q7,msContainer:Z7,msShell:X7,msOpen:J7,msDisabled:ek,msBody:tk,msPlaceholder:nk,msChevron:rk,msChevronOpen:ok,msPanel:ak};function Ra({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:g="vertical",labelWidth:y=160,className:x,children:w}){const k=l??d??s,_=l?"error":d?"success":"hint",C=k?n.jsxs("p",{className:ie(Ie.footer,_==="error"&&Ie.footerError,_==="success"&&Ie.footerSuccess),role:_==="error"?"alert":void 0,"aria-live":_==="error"?"assertive":void 0,children:[_==="hint"&&n.jsx("span",{className:`${Ie.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ka,{size:12})}),k]}):null,M=e!=null?n.jsxs("div",{className:Ie.labelRow,children:[n.jsx("label",{className:Ie.label,htmlFor:f,children:e}),h&&n.jsx("span",{className:Ie.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Ie.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return n.jsxs("div",{className:ie(Ie.wrapper,Ie.wrapperHorizontal,x),children:[(M||i)&&n.jsxs("div",{className:Ie.horizontalLabelCol,style:N,children:[M,i&&n.jsx("p",{className:Ie.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Ie.horizontalControlCol,children:[w,C]})]})}return n.jsxs("div",{className:ie(Ie.wrapper,x),children:[M,w,C]})}function Hi({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:g,isTextarea:y,focused:x,className:w,children:k}){const _=o==="sm"?14:o==="lg"?18:16,C=s&&!i&&!f&&!g?n.jsx(fn,{size:_}):null,M=i&&!f&&!g?n.jsx(ka,{size:_}):null,N=!!h,$=!!(f||g||C||M);return n.jsxs("div",{className:ie(Ie.shell,Ie[e],Ie[o],y&&Ie.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":$||void 0,children:[h&&n.jsx("span",{className:ie(Ie.leadingSlot,"alloy-icon-slot"),children:h}),k,g?n.jsx("span",{className:Ie.trailingActionWrap,children:g}):f||C||M?n.jsx("span",{className:ie(Ie.trailingSlot,"alloy-icon-slot",C&&Ie.successTrailingSlot,M&&Ie.errorTrailingSlot),children:f??C??M}):null]})}const _h=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:g="text",leadingIcon:y,trailingIcon:x,layout:w,labelWidth:k,labelDescription:_,id:C,disabled:M,readOnly:N,className:$,...S},j)=>{const z=v.useId(),A=C??z;return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:A,layout:w,labelWidth:k,labelDescription:_,className:$,children:n.jsx(Hi,{variant:h,size:f,error:!!s,success:!!l,disabled:M,readOnly:N,leadingIcon:y,trailingIcon:x,children:n.jsx("input",{ref:j,id:A,type:g,disabled:M,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${A}-footer`:void 0,className:ie(Ie.control),...S})})})});_h.displayName="TextField";const ik=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,trailingIcon:y,layout:x,labelWidth:w,labelDescription:k,id:_,disabled:C,readOnly:M,className:N,...$},S)=>{const j=v.useId(),z=_??j;return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:z,layout:x,labelWidth:w,labelDescription:k,className:N,children:n.jsx(Hi,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:M,leadingIcon:g,trailingIcon:y,isTextarea:!0,children:n.jsx("textarea",{ref:S,id:z,disabled:C,readOnly:M,"aria-invalid":s?!0:void 0,className:ie(Ie.control,Ie.textareaControl),...$})})})});ik.displayName="TextArea";const sk={sm:"sm",md:"md",lg:"lg"},Vg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:y,labelWidth:x,labelDescription:w,options:k,value:_,defaultValue:C="",onChange:M,placeholder:N="Select an option…",disabled:$,readOnly:S,id:j,className:z},A)=>{var D;const R=v.useId(),E=j??R,L=_!==void 0,[F,q]=v.useState(C),V=L?_:F,H=v.useCallback(Y=>{L||q(Y),M==null||M(Y)},[L,M]),[K,ee]=v.useState(!1),ae=(D=k.find(Y=>Y.value===V))==null?void 0:D.label,se=f==="sm"?14:f==="lg"?18:16,le=sk[f],Q=n.jsx(Hi,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:S,focused:K,leadingIcon:g,trailingIcon:n.jsx("span",{className:ie(Ie.selectChevron,K&&Ie.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Fn,{size:se})}),children:n.jsx("span",{className:ie(Ie.control,Ie.selectValue,!ae&&Ie.selectPlaceholder),children:ae??N})});return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:E,layout:y,labelWidth:x,labelDescription:w,className:z,children:n.jsx(Ch,{ref:A,id:E,fullWidth:!0,trigger:Q,groups:[{id:"options",options:k.map(Y=>({id:Y.value,label:Y.label,disabled:Y.disabled,selected:Y.value===V,onClick:()=>H(Y.value)}))}],size:le,width:"100%",placement:"bottom-start",open:K,onOpenChange:ee,disabled:$||S})})});Vg.displayName="SelectField";const lk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:y,labelWidth:x,labelDescription:w,id:k,disabled:_,readOnly:C,className:M,...N},$)=>{const S=v.useId(),j=k??S,[z,A]=v.useState(!1),R=f==="sm"?14:f==="lg"?18:16;return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:j,layout:y,labelWidth:x,labelDescription:w,className:M,children:n.jsx(Hi,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:g,trailingAction:n.jsx("button",{type:"button",className:`${Ie.trailingActionBtn} alloy-icon-slot`,onClick:()=>A(E=>!E),tabIndex:_?-1:0,"aria-label":z?"Hide password":"Show password","aria-pressed":z,children:z?n.jsx(mg,{size:R}):n.jsx(ph,{size:R})}),children:n.jsx("input",{ref:$,id:j,type:z?"text":"password",disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Ie.control),...N})})})});lk.displayName="PasswordField";const Gg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:g,onChange:y,layout:x,labelWidth:w,labelDescription:k,id:_,value:C,defaultValue:M,disabled:N,readOnly:$,className:S,...j},z)=>{const A=v.useId(),R=_??A,E=f==="sm"?14:f==="lg"?18:16,L=C!==void 0?String(C).length>0:void 0,F=v.useCallback(q=>{y==null||y(q)},[y]);return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:R,layout:x,labelWidth:w,labelDescription:k,className:S,children:n.jsx(Hi,{variant:h,size:f,error:!!s,success:!!l,disabled:N,readOnly:$,leadingIcon:n.jsx(ug,{size:E}),trailingAction:L?n.jsx("button",{type:"button",className:`${Ie.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(Di,{size:E})}):void 0,children:n.jsx("input",{ref:z,id:R,type:"search",value:C,defaultValue:M,disabled:N,readOnly:$,"aria-invalid":s?!0:void 0,onChange:F,className:ie(Ie.control),...j})})})});Gg.displayName="SearchField";const Yg=v.forwardRef((e,o)=>n.jsx(_h,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));Yg.displayName="EmailField";const Kg=v.forwardRef((e,o)=>n.jsx(_h,{ref:o,type:"number",inputMode:"numeric",...e}));Kg.displayName="NumberField";const ck={sm:"sm",md:"sm",lg:"md"},dk={sm:"sm",md:"md",lg:"lg"},uk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:g,labelWidth:y,labelDescription:x,options:w,value:k,defaultValue:_=[],onChange:C,placeholder:M="Select options…",disabled:N,readOnly:$,id:S,className:j},z)=>{const A=v.useId(),R=S??A,E=`${R}-list`,L=v.useRef(null),F=k!==void 0,[q,V]=v.useState(_),H=F?k:q,K=v.useCallback(O=>{F||V(O),C==null||C(O)},[F,C]),[ee,ae]=v.useState(!1);v.useEffect(()=>{if(!ee)return;const O=U=>{L.current&&!L.current.contains(U.target)&&ae(!1)},ne=U=>{U.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",ne),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",ne)}},[ee]);const se=O=>{if(N||$)return;const ne=H.includes(O)?H.filter(U=>U!==O):[...H,O];K(ne)},le=O=>{N||$||((O.key==="Enter"||O.key===" ")&&(O.preventDefault(),ae(ne=>!ne)),O.key==="Backspace"&&H.length>0&&!ee&&K(H.slice(0,-1)))},Q=f==="sm"?14:f==="lg"?18:16,D=ck[f],Y=dk[f],T=Object.fromEntries(w.map(O=>[O.value,O.label]));return n.jsx(Ra,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:R,layout:g,labelWidth:y,labelDescription:x,className:j,children:n.jsxs("div",{ref:L,className:Ie.msContainer,children:[n.jsxs("div",{ref:z,id:R,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":E,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:ie(Ie.msShell,Ie[h],Ie[f],ee&&Ie.msOpen,N&&Ie.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!$&&ae(O=>!O)},onKeyDown:le,children:[n.jsx("div",{className:Ie.msBody,children:H.length===0?n.jsx("span",{className:Ie.msPlaceholder,children:M}):H.map(O=>n.jsx(tr,{size:D,variant:"subtle",dismissible:!N&&!$,onDismiss:()=>K(H.filter(ne=>ne!==O)),children:T[O]??O},O))}),n.jsx("span",{className:ie(Ie.msChevron,"alloy-icon-slot",ee&&Ie.msChevronOpen),children:n.jsx(Fn,{size:Q})})]}),ee&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ie.msPanel,children:w.map(O=>{const ne=H.includes(O.value);return n.jsx(jn,{label:O.label,size:Y,trailingAction:"checkbox",checked:ne,disabled:O.disabled,role:"option","aria-selected":ne,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{O.disabled||se(O.value)}},O.value)})})]})})});uk.displayName="MultiSelectField";const hk="_root_1249j_6",pk="_pageControls_1249j_14",fk="_pageBtn_1249j_21",mk="_ellipsis_1249j_36",gk="_rowsGroup_1249j_51",vk="_rowsSelect_1249j_58",xk="_countText_1249j_64",yk="_groupLabel_1249j_74",wk="_goToGroup_1249j_84",bk="_goToInput_1249j_91",Zn={root:hk,pageControls:pk,pageBtn:fk,ellipsis:mk,rowsGroup:gk,rowsSelect:vk,countText:xk,groupLabel:yk,goToGroup:wk,goToInput:bk};function kk(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Ck=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:g,siblingCount:y=1,size:x="sm",disabled:w=!1,className:k,..._},C)=>{const[M,N]=v.useState(""),$=x,S=x,j=x==="sm"?14:16,z=kk(e,o,y),A=v.useCallback(L=>{const F=Math.min(Math.max(1,L),o);F!==e&&i(F)},[e,o,i]),R=v.useCallback(L=>{if(L.key==="Enter"){const F=parseInt(M,10);isNaN(F)||A(F),N("")}},[M,A]),E=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return n.jsxs("nav",{ref:C,"aria-label":"Pagination",className:ie(Zn.root,k),"data-size":x,..._,children:[s&&n.jsxs("div",{className:Zn.rowsGroup,children:[n.jsx("span",{className:Zn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Zn.rowsSelect,children:n.jsx(Vg,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:L=>h==null?void 0:h(Number(L.target.value)),children:d.map(L=>n.jsx("option",{value:L,children:L},L))})})]}),E&&n.jsx("span",{className:Zn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Zn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(Oe,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>A(e-1),children:n.jsx(fg,{size:j})}),z.map((L,F)=>L==="ellipsis"?n.jsx("span",{className:Zn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${F}`):n.jsx(Oe,{variant:L===e?"secondary":"ghost",size:$,"aria-label":`Page ${L}`,"aria-current":L===e?"page":void 0,disabled:w,onClick:()=>A(L),className:Zn.pageBtn,children:L},L)),n.jsx(Oe,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>A(e+1),children:n.jsx(Sn,{size:j})})]}),f&&n.jsxs("div",{className:Zn.goToGroup,children:[n.jsx("span",{className:Zn.groupLabel,children:"Go to"}),n.jsx("div",{className:Zn.goToInput,children:n.jsx(Kg,{size:S,value:M,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:L=>N(L.target.value),onKeyDown:R})})]})]})});Ck.displayName="Pagination";const _k="_root_1vx33_6",jk="_fullWidth_1vx33_18",Sk="_item_1vx33_23",$k="_indicator_1vx33_28",Mk="_sm_1vx33_46",Nk="_md_1vx33_54",Rk="_lg_1vx33_62",Lk="_itemSelected_1vx33_109",Ak="_itemIcon_1vx33_115",Tk="_itemLabel_1vx33_127",ro={root:_k,fullWidth:jk,item:Sk,indicator:$k,sm:Mk,md:Nk,lg:Rk,itemSelected:Lk,itemIcon:Ak,itemLabel:Tk},Qg=v.createContext(null);function Ek(e){const o=v.useContext(Qg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Zg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:g,onChange:y,disabled:x,name:w}=Ek("SegmentedControl.Item"),k=g===e,_=x||!!l;return n.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:_,className:ie(ro.item,k&&ro.itemSelected,i),onClick:C=>{_||y(e),d==null||d(C)},...h,children:[o&&n.jsx("span",{className:ie(ro.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:ro.itemLabel,children:s})]})});Zg.displayName="SegmentedControl.Item";const Xg=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...g},y)=>{const[x,w]=v.useState(o),k=e!==void 0,_=k?e:x,C=v.useId(),M=v.useRef(null);v.useLayoutEffect(()=>{const $=M.current;if(!$)return;const S=$.querySelector('[aria-checked="true"]');S&&($.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[_,s]);const N=$=>{k||w($),i==null||i($)};return n.jsx(Qg.Provider,{value:{value:_,onChange:N,disabled:l,name:C},children:n.jsxs("div",{ref:$=>{M.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"radiogroup",className:ie(ro.root,ro[s],d&&ro.fullWidth,h),...g,children:[n.jsx("span",{className:ro.indicator,"aria-hidden":"true"}),f]})})});Xg.displayName="SegmentedControl";Object.assign(Xg,{Item:Zg});const Ik="_root_fkv0x_6",Pk="_sm_fkv0x_26",zk="_md_fkv0x_33",Ok="_lg_fkv0x_40",Dk="_dot_fkv0x_49",Fk="_success_fkv0x_58",Bk="_warning_fkv0x_65",Hk="_error_fkv0x_72",Wk="_info_fkv0x_79",Uk="_neutral_fkv0x_86",qk="_pending_fkv0x_93",pl={root:Ik,sm:Pk,md:zk,lg:Ok,dot:Dk,success:Fk,warning:Bk,error:Hk,info:Wk,neutral:Uk,pending:qk},Ti=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(pl.root,pl[o],pl[e],s),...d,children:[i&&n.jsx("span",{className:pl.dot,"aria-hidden":"true"}),l]}));Ti.displayName="StatusTag";const Vk="_root_1m8t5_6",Gk="_underline_1m8t5_15",Yk="_background_1m8t5_21",Kk="_underlineIndicator_1m8t5_26",Qk="_md_1m8t5_43",Zk="_lg_1m8t5_44",Xk="_tab_1m8t5_42",Jk="_tabSelected_1m8t5_77",eC="_tabIcon_1m8t5_99",tC="_tabLabel_1m8t5_111",nC="_tabBadge_1m8t5_116",rC="_tabLabelEditable_1m8t5_123",oC="_tabLabelInput_1m8t5_128",aC="_addTab_1m8t5_147",iC="_addTabIcon_1m8t5_160",hn={root:Vk,underline:Gk,background:Yk,underlineIndicator:Kk,md:Qk,lg:Zk,tab:Xk,tabSelected:Jk,tabIcon:eC,tabLabel:tC,tabBadge:nC,tabLabelEditable:rC,tabLabelInput:oC,addTab:aC,addTabIcon:iC},Jg=v.createContext(null);function e2(e){const o=v.useContext(Jg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const t2=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:g,children:y,...x},w)=>{const{value:k,onChange:_,disabled:C,name:M}=e2("Tabs.Tab"),N=k===e,$=C||!!s,S=typeof y=="string"?y:"",[j,z]=v.useState(d&&l),[A,R]=v.useState(S),E=v.useRef(null);v.useEffect(()=>{if(j){const H=E.current;H&&(H.focus(),H.select())}},[j]),v.useEffect(()=>{d&&l&&!j&&(R(typeof y=="string"?y:""),z(!0))},[d,l]);const L=()=>{const H=A.trim();H&&H!==S&&(h==null||h(H)),z(!1)},F=()=>{R(S),z(!1)},q=H=>{!l||$||(H.stopPropagation(),R(S),z(!0))},V=H=>{H.key==="Enter"?(H.preventDefault(),L()):H.key==="Escape"&&(H.preventDefault(),F())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":N,name:M,disabled:$,className:ie(hn.tab,N&&hn.tabSelected,g),onClick:H=>{j||($||_(e),f==null||f(H))},...x,children:[o&&n.jsx("span",{className:ie(hn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),j?n.jsx("input",{ref:E,type:"text",value:A,onChange:H=>R(H.target.value),onKeyDown:V,onBlur:L,onClick:H=>H.stopPropagation(),className:hn.tabLabelInput,"aria-label":"Tab name",size:Math.max(A.length,1)}):y!==void 0&&n.jsx("span",{className:ie(hn.tabLabel,l&&hn.tabLabelEditable),onDoubleClick:q,children:y}),i&&!j&&n.jsx("span",{className:hn.tabBadge,children:i})]})});t2.displayName="Tabs.Tab";const sC=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n2=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=e2("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(hn.tab,hn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(hn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(sC,{})})})});n2.displayName="Tabs.AddTab";const r2=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...g},y)=>{const[x,w]=v.useState(s),k=i!==void 0,_=k?i:x,C=v.useId(),M=v.useRef(null);v.useLayoutEffect(()=>{const $=M.current;if(!$||e!=="underline")return;const S=$.querySelector('[aria-selected="true"]');S&&($.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[_,e]);const N=$=>{k||w($),l==null||l($)};return n.jsx(Jg.Provider,{value:{value:_,onChange:N,disabled:d,variant:e,size:o,name:C},children:n.jsxs("div",{ref:$=>{M.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"tablist",className:ie(hn.root,hn[e],hn[o],h),...g,children:[e==="underline"&&n.jsx("span",{className:hn.underlineIndicator,"aria-hidden":"true"}),f]})})});r2.displayName="Tabs";Object.assign(r2,{Tab:t2,AddTab:n2});const lC="_selectedBorder_1ypeg_7",cC="_selectedFill_1ypeg_12",Hf={selectedBorder:lC,selectedFill:cC},dC=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const g=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?Hf.selectedFill:Hf.selectedBorder:void 0;return n.jsx(Oe,{ref:f,variant:o,"aria-pressed":e,className:ie(y,d),onClick:g,...h})});dC.displayName="ToggleButton";const uC="_root_mcb75_6",hC="_disabled_mcb75_13",pC="_sm_mcb75_20",fC="_md_mcb75_31",mC="_lg_mcb75_42",gC="_track_mcb75_54",vC="_trackChecked_mcb75_90",xC="_thumb_mcb75_100",yC="_labelWrap_mcb75_117",wC="_label_mcb75_117",bC="_description_mcb75_139",jr={root:uC,disabled:hC,sm:pC,md:fC,lg:mC,track:gC,trackChecked:vC,thumb:xC,labelWrap:yC,label:wC,description:bC},kC=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:g,value:y,className:x},w)=>{const k=v.useId(),_=f??k,C=`${_}-label`,M=e!==void 0,[N,$]=v.useState(o),S=M?e:N,j=()=>{if(s)return;const A=!S;M||$(A),i==null||i(A)},z=A=>{(A.key===" "||A.key==="Enter")&&(A.preventDefault(),j())};return n.jsxs("div",{className:ie(jr.root,jr[l],s&&jr.disabled,x),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:_,"aria-checked":S,"aria-labelledby":d?C:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:y,className:ie(jr.track,S&&jr.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:z,children:n.jsx("span",{className:jr.thumb})}),(d||h)&&n.jsxs("div",{className:jr.labelWrap,children:[d&&n.jsx("label",{id:C,htmlFor:_,className:jr.label,children:d}),h&&n.jsx("span",{className:jr.description,children:h})]})]})});kC.displayName="Switch";const CC="_root_104n4_5",_C="_disabled_104n4_11",jC="_sm_104n4_17",SC="_md_104n4_25",$C="_lg_104n4_33",MC="_controlWrap_104n4_41",NC="_input_104n4_50",RC="_ring_104n4_65",LC="_ringChecked_104n4_90",AC="_ringError_104n4_94",TC="_dot_104n4_104",EC="_labelWrap_104n4_112",IC="_label_104n4_112",PC="_error_104n4_130",zC="_required_104n4_132",OC="_description_104n4_137",cn={root:CC,disabled:_C,sm:jC,md:SC,lg:$C,controlWrap:MC,input:NC,ring:RC,ringChecked:LC,ringError:AC,dot:TC,labelWrap:EC,label:IC,error:PC,required:zC,description:OC},DC=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:g,name:y,required:x,className:w},k)=>{const _=v.useId(),C=g??_;return n.jsxs("div",{className:ie(cn.root,cn[d],s&&cn.disabled,l&&cn.error,w),children:[n.jsxs("div",{className:cn.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:C,name:y,value:e,checked:o,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:cn.input}),n.jsx("span",{className:ie(cn.ring,o&&cn.ringChecked,l&&cn.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:cn.dot})})]}),(h||f)&&n.jsxs("div",{className:cn.labelWrap,children:[h&&n.jsxs("label",{htmlFor:C,className:cn.label,children:[h,x&&n.jsx("span",{className:cn.required,"aria-hidden":"true",children:" *"})]}),f&&n.jsx("span",{className:cn.description,children:f})]})]})});DC.displayName="Radio";const FC="_table_1ad04_8",BC="_sm_1ad04_16",HC="_row_1ad04_30",WC="_head_1ad04_47",UC="_headLabel_1ad04_82",qC="_sortBtn_1ad04_96",VC="_sortIcon_1ad04_119",GC="_cell_1ad04_142",YC="_cellText_1ad04_175",KC="_cellStack_1ad04_203",QC="_cellStackPrimary_1ad04_210",ZC="_cellStackSecondary_1ad04_221",XC="_cellActions_1ad04_233",JC="_cellControl_1ad04_240",e_="_addCell_1ad04_251",t_="_addRowCell_1ad04_264",n_="_addRowLabel_1ad04_276",Dt={table:FC,sm:BC,row:HC,head:WC,headLabel:UC,sortBtn:qC,sortIcon:VC,cell:GC,cellText:YC,cellStack:KC,cellStackPrimary:QC,cellStackSecondary:ZC,cellActions:XC,cellControl:JC,addCell:e_,addRowCell:t_,addRowLabel:n_},o2=v.createContext({addColumn:!1,addRow:!1}),a2=()=>v.useContext(o2),r_=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...g},y)=>{const x=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(o2.Provider,{value:x,children:n.jsx("table",{ref:y,className:ie(Dt.table,e==="sm"&&Dt.sm,h),"data-interaction":o,...g,children:f})})});r_.displayName="Table";const i2=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},g)=>{const y=o!==void 0;return n.jsx("th",{ref:g,className:ie(Dt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":y?"none":void 0,...f,children:y?n.jsxs("button",{type:"button",className:Dt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Dt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Fn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Dt.headLabel,children:h})})});i2.displayName="TableHead";const o_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=a2(),d=s?v.Children.map(e,(h,f)=>{if(!v.isValidElement(h)||f!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,n.jsx(i2,{hoverable:!0,onClick:l,className:Dt.addCell,"aria-label":"Add column",children:n.jsx(Ma,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});o_.displayName="TableHeader";const s2=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Dt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));s2.displayName="TableRow";const Uu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>n.jsx("td",{ref:f,className:ie(Dt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Uu.displayName="TableCell";const a_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=a2(),h=s?v.Children.map(e,f=>{if(!v.isValidElement(f))return f;const g=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...g,n.jsx(Uu,{"aria-hidden":"true",className:Dt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(s2,{hoverable:!1,children:n.jsx(Uu,{colSpan:999,onClick:d,className:Dt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Dt.addRowLabel,children:[n.jsx(Ma,{size:14,strokeWidth:2}),"Add row"]})})})]})});a_.displayName="TableBody";const i_=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(Dt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));i_.displayName="CellText";const s_=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Dt.cellStack,i),...s,children:[n.jsx("span",{className:Dt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Dt.cellStackSecondary,children:o})]}));s_.displayName="CellStack";const l_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(tr,{ref:i,size:e,...o}));l_.displayName="CellTag";const c_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Ti,{ref:i,size:e,...o}));c_.displayName="CellStatusTag";const d_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellActions,e),...i,children:o}));d_.displayName="CellActions";const u_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellControl,e),...i,children:o}));u_.displayName="CellControl";const h_="_root_1afcs_8",p_="_secondary_1afcs_23",f_="_header_1afcs_28",m_="_headerText_1afcs_36",g_="_title_1afcs_43",v_="_subtitle_1afcs_52",x_="_action_1afcs_61",y_="_hero_1afcs_66",w_="_heroValue_1afcs_74",b_="_heroCaption_1afcs_83",k_="_heroChange_1afcs_89",C_="_body_1afcs_95",__="_legend_1afcs_103",bn={root:h_,secondary:p_,header:f_,headerText:m_,title:g_,subtitle:v_,action:x_,hero:y_,heroValue:w_,heroCaption:b_,heroChange:k_,body:C_,legend:__},j_=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:g,className:y,...x},w)=>n.jsxs("div",{ref:w,className:ie(bn.root,f&&bn.secondary,y),...x,children:[n.jsxs("div",{className:bn.header,children:[n.jsxs("div",{className:bn.headerText,children:[n.jsx("h3",{className:bn.title,children:e}),o&&n.jsx("p",{className:bn.subtitle,children:o})]}),i&&n.jsx("div",{className:bn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:bn.hero,children:[s!==void 0&&n.jsx("span",{className:bn.heroValue,children:s}),l&&n.jsx("span",{className:bn.heroChange,children:l}),d&&n.jsx("span",{className:bn.heroCaption,children:d})]}),n.jsx("div",{className:bn.body,children:g}),h&&n.jsx("div",{className:bn.legend,children:h})]}));j_.displayName="ChartCard";const S_="_root_je8nq_7",$_="_item_je8nq_17",M_="_swatch_je8nq_23",N_="_label_je8nq_29",R_="_bookend_je8nq_33",ha={root:S_,item:$_,swatch:M_,label:N_,bookend:R_},l2=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(ha.root,d),...h,children:[o&&n.jsx("span",{className:ha.bookend,children:o}),e.map((g,y)=>{const x=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return n.jsxs("span",{className:ha.item,children:[n.jsx("span",{className:ha.swatch,style:x,"aria-hidden":"true"}),g.label!==void 0&&n.jsx("span",{className:ha.label,children:g.label})]},y)}),i&&n.jsx("span",{className:ha.bookend,children:i})]}));l2.displayName="ChartLegend";const L_="_root_igkx4_5",A_="_svgWrap_igkx4_13",T_="_svg_igkx4_13",E_="_gridLine_igkx4_23",I_="_axisLabel_igkx4_28",P_="_legendWrap_igkx4_43",z_="_legendItem_igkx4_51",O_="_legendDot_igkx4_57",D_="_legendLabel_igkx4_64",F_="_tooltip_igkx4_71",B_="_tooltipLabel_igkx4_85",H_="_tooltipRow_igkx4_95",W_="_tooltipDot_igkx4_101",U_="_tooltipSeries_igkx4_108",q_="_tooltipValue_igkx4_115",Ue={root:L_,svgWrap:A_,svg:T_,gridLine:E_,axisLabel:I_,legendWrap:P_,legendItem:z_,legendDot:O_,legendLabel:D_,tooltip:F_,tooltipLabel:B_,tooltipRow:H_,tooltipDot:W_,tooltipSeries:U_,tooltipValue:q_},V_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function pu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function pa(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const G_=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:g,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:_,className:C,...M},N)=>{var B,P,oe,fe;const $=g&&g.length>0?g:V_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,z]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),A=v.useRef(null),[R,E]=v.useState(540);v.useEffect(()=>{const de=A.current;if(!de)return;const ve=new ResizeObserver(Se=>{var Le;const Me=(Le=Se[0])==null?void 0:Le.contentRect.width;Me>0&&E(Math.floor(Me))});ve.observe(de);const ke=Math.floor(de.getBoundingClientRect().width);return ke>0&&E(ke),()=>ve.disconnect()},[]);const L=44,F=0,q=20,V=20,H=R,K=s,ee=H-L-F,ae=K-q-V,se=5,le=e.map((de,ve)=>de.color??$[ve%$.length]);let Q=0;i==="stacked"?o.forEach((de,ve)=>{const ke=e.reduce((Se,Me)=>Se+(Me.data[ve]??0),0);ke>Q&&(Q=ke)}):i==="horizontal"?Q=Math.max(...((B=e[0])==null?void 0:B.data)??[0]):e.forEach(de=>de.data.forEach(ve=>{ve>Q&&(Q=ve)}));const D=pu(Q),Y=Array.from({length:se+1},(de,ve)=>D*(ve/se)).reverse(),T=de=>V+ae-de/D*ae,O=ee/o.length,ne=3,U=i==="grouped"?Math.max(4,(O-ne*(e.length+1))/e.length):O,Z=()=>z(de=>({...de,visible:!1})),ce=v.useCallback(de=>{const ve=de.currentTarget.getBoundingClientRect(),ke=de.clientX-ve.left,Se=Math.floor((ke-L)/O);if(Se<0||Se>=o.length){Z();return}const Me=e.map((Le,De)=>({color:le[De],series:Le.label,value:Le.data[Se]??0}));z({visible:!0,x:de.clientX+12,y:de.clientY-8,label:o[Se],items:Me})},[e,o,O,le,L]);if(i==="gradient"){const de=((P=e[0])==null?void 0:P.data)??[],ve=((oe=e[0])==null?void 0:oe.label)??"",ke=44,Se=0,Me=20,Le=20,De=Math.max(H-ke-Se,1),Be=K-Me-Le,ze=Math.max(0,...de),Ke=ze>0?pu(ze):10,Je=5,ut=Array.from({length:Je+1},(Ee,lt)=>Ke*lt/Je),qe=Ee=>Me+Be-Ee/Ke*Be,xe=De/Math.max(1,de.length),Ae=Ee=>ke+xe*Ee,Xe=Ee=>ke+xe*(Ee+1),Ve=Ee=>ke+xe*(Ee+.5),He=de.length===0?"":de.map((Ee,lt)=>{const yt=qe(Ee);return`M ${Ae(lt)} ${yt} L ${Xe(lt)} ${yt}`}).join(" "),Qt=[];de.forEach((Ee,lt)=>{if(Ee<=0)return;const yt=qe(Ee);Qt.push({x:Ae(lt),y:yt,width:Math.max(Xe(lt)-Ae(lt),0),height:Me+Be-yt})});const Hn=Math.max(1,Math.ceil(45/xe)),Fo=o.length-1,Lr=w??(Ee=>`${pa(Ee)}${h}`);return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:A,className:Ue.svgWrap,children:n.jsxs("svg",{width:H,height:K,viewBox:`0 0 ${H} ${K}`,className:Ue.svg,onMouseLeave:Z,onMouseMove:Ee=>{const lt=Ee.currentTarget.getBoundingClientRect(),yt=Ee.clientX-lt.left,ht=Math.floor((yt-ke)/xe);if(ht<0||ht>=de.length){Z();return}z({visible:!0,x:Ee.clientX+12,y:Ee.clientY-8,label:o[ht]??"",items:[{color:x,series:ve,value:de[ht]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y}),n.jsx("stop",{offset:"100%",stopColor:x})]}),n.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),ut.map((Ee,lt)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:H-Se,y1:qe(Ee),y2:qe(Ee),className:Ue.gridLine}),n.jsxs("text",{x:0,y:qe(Ee)-6,className:Ue.axisLabel,textAnchor:"start",children:[pa(Ee),h]})]},`t-${lt}`)),Qt.map((Ee,lt)=>n.jsx("rect",{x:Ee.x,y:Ee.y,width:Ee.width,height:Ee.height,fill:`url(#${S}-fill)`},`b-${lt}`)),He&&n.jsx("path",{d:He,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var or;const Ee=(or=A.current)==null?void 0:or.getBoundingClientRect();if(!Ee)return null;const lt=j.x-12-Ee.left,yt=Math.floor((lt-ke)/xe);if(yt<0||yt>=de.length)return null;const ht=de[yt]??0;return ht<=0?null:n.jsx("circle",{cx:Ve(yt),cy:qe(ht),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ee,lt)=>{const yt=lt===0,ht=lt===Fo;if(!(yt||ht)&&lt%Hn!==0)return null;const ar=yt?ke:ht?H-Se:Ve(lt),Wn=yt?"start":ht?"end":"middle";return n.jsx("text",{x:ar,y:K-Le+18,className:Ue.axisLabel,textAnchor:Wn,children:Ee},`xl-${lt}`)})]})}),j.visible&&j.items.length>0&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(Ee=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Ee.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Ee.series}),n.jsx("span",{className:Ue.tooltipValue,children:Lr(Ee.value)})]},Ee.series))]})]})}if(i==="horizontal"){const de=((fe=e[0])==null?void 0:fe.data)??[],ve=pu(Math.max(...de,1)),ke=28,Se=10,Me=120,De=H-Me-44,Be=o.length*(ke+Se)+Se;return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:A,className:Ue.svgWrap,children:n.jsx("svg",{width:H,height:Be,viewBox:`0 0 ${H} ${Be}`,className:Ue.svg,onMouseLeave:Z,onMouseMove:ze=>{var qe;const Ke=ze.currentTarget.getBoundingClientRect(),Je=ze.clientY-Ke.top,ut=Math.floor(Je/(ke+Se));if(ut<0||ut>=o.length){Z();return}z({visible:!0,x:ze.clientX+12,y:ze.clientY-8,label:o[ut],items:[{color:le[0],series:((qe=e[0])==null?void 0:qe.label)??"",value:de[ut]??0}]})},children:o.map((ze,Ke)=>{const Je=Se+Ke*(ke+Se),ut=de[Ke]??0,qe=ut/ve*De;return n.jsxs("g",{children:[n.jsx("text",{x:Me-8,y:Je+ke/2+4,className:Ue.axisLabel,textAnchor:"end",children:ze}),n.jsx("rect",{x:Me,y:Je,width:qe,height:ke,rx:f,fill:le[0]}),n.jsxs("text",{x:Me+qe+6,y:Je+ke/2+4,className:Ue.axisLabel,textAnchor:"start",children:[pa(ut),h]})]},Ke)})})}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(ze=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:ze.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:ze.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[pa(ze.value),h]})]},ze.series))]})]})}return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:A,className:Ue.svgWrap,children:n.jsxs("svg",{width:H,height:K,viewBox:`0 0 ${H} ${K}`,className:Ue.svg,onMouseMove:ce,onMouseLeave:Z,children:[n.jsx("defs",{children:le.flatMap((de,ve)=>[n.jsxs("linearGradient",{id:`${S}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`soft-${ve}`),n.jsxs("linearGradient",{id:`${S}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`strong-${ve}`)])}),Y.map(de=>{const ve=T(de);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ve,x2:H-F,y2:ve,className:Ue.gridLine}),n.jsxs("text",{x:0,y:ve-6,className:Ue.axisLabel,textAnchor:"start",children:[pa(de),h]})]},de)}),o.map((de,ve)=>{const ke=L+ve*O;if(i==="stacked"){let Le=0;const De=e.map((qe,xe)=>{const Ae=qe.data[ve]??0,Xe=Ae/D*ae,Ve=T(Le+Ae);return Le+=Ae,{si:xe,value:Ae,barH:Xe,y:Ve}}),Be=ke+(O-U)/2,ze=De.filter(qe=>qe.value>0),Ke=ze.length>0?ze[0].si:-1,Je=ze.length>0?ze[ze.length-1]:null,ut=_??(Je?le[Je.si]:"transparent");return n.jsxs("g",{children:[De.map(({si:qe,value:xe,barH:Ae,y:Xe})=>{if(xe<=0)return null;if(k==="mono-scale"){const Ve=qe===Ke;return n.jsx("rect",{x:Be,y:Xe,width:U,height:Ae,fill:Ve?`url(#${S}-fill-strong-${qe})`:le[qe]},`fill-${qe}`)}return n.jsx("rect",{x:Be,y:Xe,width:U,height:Ae,fill:`url(#${S}-fill-${qe})`},`fill-${qe}`)}),k==="mono-scale"?Je&&n.jsx("line",{x1:Be,x2:Be+U,y1:Je.y,y2:Je.y,stroke:ut,strokeWidth:2,strokeLinecap:"butt"}):De.map(({si:qe,value:xe,y:Ae})=>xe>0?n.jsx("line",{x1:Be,x2:Be+U,y1:Ae,y2:Ae,stroke:le[qe],strokeWidth:2,strokeLinecap:"butt"},`cap-${qe}`):null)]},ve)}const Se=e.length*U+(e.length-1)*ne,Me=ke+(O-Se)/2;return n.jsx("g",{children:e.map((Le,De)=>{const Be=Le.data[ve]??0;if(Be<=0)return null;const ze=Be/D*ae,Ke=Me+De*(U+ne),Je=T(Be);return n.jsxs("g",{children:[n.jsx("rect",{x:Ke,y:Je,width:U,height:ze,fill:`url(#${S}-fill-${De})`}),n.jsx("line",{x1:Ke,x2:Ke+U,y1:Je,y2:Je,stroke:le[De],strokeWidth:2,strokeLinecap:"butt"})]},De)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/O)),ke=o.length-1;return o.map((Se,Me)=>{const Le=Me===0,De=Me===ke;if(!(Le||De)&&Me%ve!==0)return null;const ze=Le?L:De?H-F:L+O*(Me+.5),Ke=Le?"start":De?"end":"middle";return n.jsx("text",{x:ze,y:K-q+18,className:Ue.axisLabel,textAnchor:Ke,children:Se},`xl-${Me}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Ue.legendWrap,children:e.map((de,ve)=>n.jsxs("div",{className:Ue.legendItem,children:[n.jsx("span",{className:Ue.legendDot,style:{background:le[ve]}}),n.jsx("span",{className:Ue.legendLabel,children:de.label})]},de.label))}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(de=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:de.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:de.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[pa(de.value),h]})]},de.series))]})]})});G_.displayName="BarChart";const Y_="_root_1crij_5",K_="_svgWrap_1crij_13",Q_="_svg_1crij_13",Z_="_gridLine_1crij_23",X_="_axisLabelY_1crij_35 _axisLabel_1crij_28",J_="_axisLabelX_1crij_39 _axisLabel_1crij_28",ej="_legendWrap_1crij_51",tj="_tooltip_1crij_76",nj="_tooltipLabel_1crij_95",rj="_tooltipRow_1crij_105",oj="_tooltipDot_1crij_111",aj="_tooltipSeries_1crij_118",ij="_tooltipValue_1crij_125",kn={root:Y_,svgWrap:K_,svg:Q_,gridLine:Z_,axisLabelY:X_,axisLabelX:J_,legendWrap:ej,tooltip:tj,tooltipLabel:nj,tooltipRow:rj,tooltipDot:oj,tooltipSeries:aj,tooltipValue:ij};function sj(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Wf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function lj(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],g=(h-l)*o;i+=` C ${l+g} ${d}, ${h-g} ${f}, ${h} ${f}`}return i}const cj=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:g=5,className:y,...x},w)=>{const[k,_]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),C=`line-grad-${Math.random().toString(36).slice(2,9)}`,M=v.useRef(null),[N,$]=v.useState(540);v.useEffect(()=>{const D=M.current;if(!D)return;const Y=new ResizeObserver(O=>{var U;const ne=(U=O[0])==null?void 0:U.contentRect.width;ne>0&&$(Math.floor(ne))});Y.observe(D);const T=Math.floor(D.getBoundingClientRect().width);return T>0&&$(T),()=>Y.disconnect()},[]);const S=44,j=20,z=20,A=N,R=i,E=A-S,L=R-j-z,F=`url(#${C}-stroke)`,q=D=>D.color??F,V=e.flatMap(D=>D.data),H=sj(Math.max(...V,1)),K=Array.from({length:g+1},(D,Y)=>H*(Y/g)).reverse(),ee=D=>z+L-D/H*L,ae=D=>o.length>1?S+D/(o.length-1)*E:S+E/2,se=D=>D.map((Y,T)=>[ae(T),ee(Y)]),le=()=>_(D=>({...D,visible:!1})),Q=v.useCallback(D=>{const Y=D.currentTarget.getBoundingClientRect(),O=D.clientX-Y.left-S,ne=E/Math.max(o.length-1,1),U=Math.round(O/ne),Z=Math.max(0,Math.min(U,o.length-1)),ce=e.map(B=>({color:B.color??h,series:B.label,value:B.data[Z]??0}));_({visible:!0,index:Z,x:D.clientX+12,y:D.clientY-8,label:o[Z],items:ce})},[e,o,h,E,S]);return n.jsxs("div",{ref:w,className:ie(kn.root,y),...x,children:[n.jsx("div",{ref:M,className:kn.svgWrap,children:n.jsxs("svg",{width:A,height:R,viewBox:`0 0 ${A} ${R}`,className:kn.svg,onMouseMove:Q,onMouseLeave:le,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${C}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${C}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${C}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${C}-clip`,children:n.jsx("rect",{x:S,y:z,width:E,height:L,rx:6,ry:6})})]}),K.map(D=>{const Y=ee(D);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:Y,x2:A,y2:Y,className:kn.gridLine}),n.jsxs("text",{x:0,y:Y-6,className:kn.axisLabelY,textAnchor:"start",children:[Wf(D),f]})]},D)}),n.jsx("g",{clipPath:`url(#${C}-clip)`,children:e.map((D,Y)=>{const T=se(D.data),O=lj(T);return n.jsx("path",{d:O,fill:"none",stroke:q(D),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},Y)})}),(()=>{const D=k.index>=0?k.index:0,Y=ae(D),T=k.visible&&k.index>=0,O="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${Y}px)`,transition:O},children:[n.jsx("line",{x1:0,x2:0,y1:z,y2:z+L,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((ne,U)=>{const Z=ne.data[D]??0,ce=ee(Z),B=ne.color??h;return n.jsx("g",{style:{transform:`translateY(${ce}px)`,transition:O},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:B,filter:`url(#${C}-pin-shadow)`})},U)})]})})})(),(()=>{const Y=o.length>1?E/(o.length-1):E,T=Math.max(1,Math.ceil(45/Math.max(Y,1))),O=o.length-1;return o.map((ne,U)=>{const Z=U===0,ce=U===O;if(!(Z||ce)&&U%T!==0)return null;const P=Z?S:ce?A:ae(U),oe=Z?"start":ce?"end":"middle";return n.jsx("text",{x:P,y:R-j+14,className:kn.axisLabelX,textAnchor:oe,children:ne},ne)})})()]})}),l&&e.length>0&&n.jsx("div",{className:kn.legendWrap,children:n.jsx(l2,{variant:"line",items:e.map(D=>({color:D.color??h,label:D.label}))})}),k.visible&&n.jsxs("div",{className:kn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:kn.tooltipLabel,children:k.label}),k.items.map(D=>n.jsxs("div",{className:kn.tooltipRow,children:[n.jsx("span",{className:kn.tooltipDot,style:{background:D.color}}),n.jsx("span",{className:kn.tooltipSeries,children:D.series}),n.jsxs("span",{className:kn.tooltipValue,children:[Wf(D.value),f]})]},D.series))]})]})});cj.displayName="LineChart";const dj="_root_3tq2n_5",uj="_chartWrap_3tq2n_14",hj="_svg_3tq2n_18",pj="_centerText_3tq2n_23",fj="_statLegend_3tq2n_31",mj="_statItem_3tq2n_37",gj="_statBar_3tq2n_44",vj="_statText_3tq2n_50",xj="_statValue_3tq2n_56",yj="_statLabel_3tq2n_65",wj="_listLegend_3tq2n_72",bj="_legendItem_3tq2n_79",kj="_legendDot_3tq2n_85",Cj="_legendLabel_3tq2n_92",_j="_legendValue_3tq2n_99",jj="_tooltip_3tq2n_107",Sj="_tooltipLabel_3tq2n_118",$j="_tooltipValue_3tq2n_124",Pt={root:dj,chartWrap:uj,svg:hj,centerText:pj,statLegend:fj,statItem:mj,statBar:gj,statText:vj,statValue:xj,statLabel:yj,listLegend:wj,legendItem:bj,legendDot:kj,legendLabel:Cj,legendValue:_j,tooltip:jj,tooltipLabel:Sj,tooltipValue:$j},Uf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Mj=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...g},y)=>{const[x,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((A,R)=>A.color??Uf[R%Uf.length]),_=e.reduce((A,R)=>A+R.value,0),C=i/2,M=i/2,N=i*.15,$=(i-N)/2-2,S=2*Math.PI*$;let j=-S/4;const z=e.map((A,R)=>{const L=(_>0?A.value/_:0)*S,F=`${L} ${S-L}`,q=-j;return j+=L,{dashArray:F,dashOffset:q,color:k[R],...A}});return n.jsxs("div",{ref:y,className:ie(Pt.root,f),...g,children:[n.jsx("div",{className:Pt.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Pt.svg,children:[n.jsx("circle",{cx:C,cy:M,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),z.map((A,R)=>n.jsx("circle",{cx:C,cy:M,r:$,fill:"none",stroke:A.color,strokeWidth:N,strokeDasharray:A.dashArray,strokeDashoffset:A.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const L=_>0?Math.round(A.value/_*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:A.label,value:`${L}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},R)),h&&o>0&&n.jsx("text",{x:C,y:M+6,textAnchor:"middle",className:Pt.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Pt.statLegend,children:e.map((A,R)=>{const E=_>0?Math.round(A.value/_*100):0;return n.jsxs("div",{className:Pt.statItem,children:[n.jsx("span",{className:Pt.statBar,style:{background:k[R]}}),n.jsxs("div",{className:Pt.statText,children:[n.jsxs("span",{className:Pt.statValue,children:[E,d]}),n.jsx("span",{className:Pt.statLabel,children:A.label})]})]},A.label)})}),s&&l==="list"&&n.jsx("div",{className:Pt.listLegend,children:e.map((A,R)=>{const E=_>0?Math.round(A.value/_*100):0;return n.jsxs("div",{className:Pt.legendItem,children:[n.jsx("span",{className:Pt.legendDot,style:{background:k[R]}}),n.jsx("span",{className:Pt.legendLabel,children:A.label}),n.jsxs("span",{className:Pt.legendValue,children:[E,d]})]},A.label)})}),x.visible&&n.jsxs("div",{className:Pt.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("div",{className:Pt.tooltipLabel,children:x.label}),n.jsx("div",{className:Pt.tooltipValue,children:x.value})]})]})});Mj.displayName="DonutChart";const Nj="_root_bqpf6_5",Rj="_svgWrap_bqpf6_10",Lj="_svg_bqpf6_10",Aj="_axisLabel_bqpf6_19",Tj="_tooltip_bqpf6_25",fa={root:Nj,svgWrap:Rj,svg:Lj,axisLabel:Aj,tooltip:Tj};function Ej(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Ij=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=Ej,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...g},y)=>{const[x,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[_,C]=v.useState(540);v.useEffect(()=>{const R=k.current;if(!R)return;const E=new ResizeObserver(F=>{var V;const q=(V=F[0])==null?void 0:V.contentRect.width;q>0&&C(Math.floor(q))});E.observe(R);const L=Math.floor(R.getBoundingClientRect().width);return L>0&&C(L),()=>E.disconnect()},[]);const M=32,N=16,$=_,S=$-M-d,j=Math.max(4,(S-(i.length-1)*d)/i.length),z=o.length*(N+d)+d+24,A=new Map;return e.forEach(R=>A.set(`${R.row}__${R.col}`,R)),n.jsxs("div",{ref:y,className:ie(fa.root,f),...g,children:[n.jsx("div",{ref:k,className:fa.svgWrap,children:n.jsxs("svg",{width:$,height:z,viewBox:`0 0 ${$} ${z}`,className:fa.svg,onMouseLeave:()=>w(R=>({...R,visible:!1})),children:[i.map((R,E)=>{const L=M+d+E*(j+d)+j/2;return n.jsx("text",{x:L,y:12,className:fa.axisLabel,textAnchor:"middle",children:R},R)}),o.map((R,E)=>{const L=24+E*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:M-4,y:L+N/2+4,className:fa.axisLabel,textAnchor:"end",children:R}),i.map((F,q)=>{const V=A.get(`${R}__${F}`),H=(V==null?void 0:V.value)??0,K=s(H),ee=M+d+q*(j+d);return n.jsx("rect",{x:ee,y:L,width:j,height:N,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const se=(V==null?void 0:V.label)??`${R} / ${F}: ${Math.round(H*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:se})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},F)})]},R)})]})}),x.visible&&n.jsx("div",{className:fa.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});Ij.displayName="HeatMap";const Pj="_root_18572_6",zj="_gridWrap_18572_14",Oj="_grid_18572_14",Dj="_cell_18572_27",Fj="_legend_18572_33",Bj="_legendSquare_18572_43",Hj="_tooltip_18572_49",Jr={root:Pj,gridWrap:zj,grid:Oj,cell:Dj,legend:Fj,legendSquare:Bj,tooltip:Hj},Wj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Uj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const qj=v.forwardRef(({days:e,levelColors:o=Wj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:g,ariaLabel:y,className:x,...w},k)=>{const[_,C]=v.useState({visible:!1,x:0,y:0,content:""}),M=f??Math.max(1,...e.map(j=>j.count)),N=[];for(let j=0;j<e.length;j+=7)N.push(e.slice(j,j+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},S=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Jr.root,x),...w,children:[n.jsx("div",{className:Jr.gridWrap,children:n.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${M} on the busiest day`,className:Jr.grid,style:$,onMouseLeave:()=>C(j=>({...j,visible:!1})),children:N.map((j,z)=>Array.from({length:7},(A,R)=>{const E=j[R];if(!E)return n.jsx("span",{className:Jr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${z}-${R}`);const L=Uj(E.count,M),F=g?g(E,L):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Jr.cell,style:{width:S,height:i,borderRadius:l,background:o[L]},onMouseMove:q=>C({visible:!0,x:q.clientX,y:q.clientY,content:F}),onMouseLeave:()=>C(q=>({...q,visible:!1}))},`${z}-${R}`)}))})}),h&&n.jsxs("div",{className:Jr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>n.jsx("span",{className:Jr.legendSquare,style:{background:o[j],borderRadius:l}},j)),n.jsx("span",{children:"More"})]}),_.visible&&n.jsx("div",{className:Jr.tooltip,style:{left:_.x,top:_.y},children:_.content})]})});qj.displayName="ActivityHeatMap";const Vj="_root_14edh_5",Gj="_track_14edh_17",Yj="_segment_14edh_28",Kj="_legend_14edh_49",Qj="_legendRow_14edh_58",Zj="_legendDot_14edh_68",Xj="_legendLabel_14edh_74",Jj="_legendValue_14edh_78",eS="_tooltip_14edh_84",tS="_tooltipLabel_14edh_100",nS="_tooltipValueRow_14edh_105",rS="_tooltipDot_14edh_114",zn={root:Vj,track:Gj,segment:Yj,legend:Kj,legendRow:Qj,legendDot:Zj,legendLabel:Xj,legendValue:Jj,tooltip:eS,tooltipLabel:tS,tooltipValueRow:nS,tooltipDot:rS},oS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],ma={r:140,g:79,b:226},fu={r:68,g:108,b:255};function qf(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(ma.r+(fu.r-ma.r)*o),s=Math.round(ma.g+(fu.g-ma.g)*o),l=Math.round(ma.b+(fu.b-ma.b)*o);return`rgb(${i}, ${s}, ${l})`}const aS=v.forwardRef(({segments:e,colors:o=oS,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...g},y)=>{const[x,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,$)=>N+Math.max(0,$.value),0);let _=0;const C=e.map((N,$)=>{const S=Math.max(0,N.value),j=k>0?S/k*100:0,z=k>0?_/k*100:0;_+=S;const A=k>0?_/k*100:0,R=N.color??o[$%o.length],E=d?!0:N.emphasized??$===0;return{...N,pct:j,startPct:z,endPct:A,color:R,emphasized:E}}),M=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:y,className:ie(zn.root,f),...g,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:zn.track,style:M,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:C.map(N=>{const $=i?`linear-gradient(to right, ${qf(N.startPct)}, ${qf(N.endPct)})`:N.color;return n.jsx("span",{className:zn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:$,"--ratio-hover-bg":N.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:zn.legend,children:C.map(N=>n.jsxs("li",{className:zn.legendRow,children:[n.jsx("span",{className:zn.legendDot,style:{background:N.color}}),n.jsx("span",{className:zn.legendLabel,children:N.label}),n.jsx("span",{className:zn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&n.jsxs("div",{className:zn.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("span",{className:zn.tooltipLabel,children:x.label}),n.jsxs("span",{className:zn.tooltipValueRow,children:[n.jsx("span",{className:zn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});aS.displayName="RatioBar";const iS="_track_1wmly_6",sS="_fill_1wmly_12",Vf={track:iS,fill:sS},lS=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:g,className:y,style:x,...w},k)=>{const _=d+h,C=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${_}px
    )`,M=Math.max(0,Math.min(o,e)),N=o>0?M/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":M,className:ie(Vf.track,y),style:{height:f,background:`${C}, ${s}`,...x},...w,children:n.jsx("div",{className:Vf.fill,style:{width:`${N}%`,background:`${C}, ${i}`}})})});lS.displayName="StripedBar";const cS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],dS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Gf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}Gf(cS),Gf(dS);var mt="-ms-",Ni="-moz-",ot="-webkit-",c2="comm",cc="rule",jh="decl",uS="@import",hS="@namespace",d2="@keyframes",pS="@layer",u2=Math.abs,Sh=String.fromCharCode,qu=Object.assign;function fS(e,o){return Nt(e,0)^45?(((o<<2^Nt(e,0))<<2^Nt(e,1))<<2^Nt(e,2))<<2^Nt(e,3):0}function h2(e){return e.trim()}function $r(e,o){return(e=o.exec(e))?e[0]:e}function We(e,o,i){return e.replace(o,i)}function Ml(e,o,i){return e.indexOf(o,i)}function Nt(e,o){return e.charCodeAt(o)|0}function Eo(e,o,i){return e.slice(o,i)}function Xn(e){return e.length}function p2(e){return e.length}function ji(e,o){return o.push(e),e}function mS(e,o){return e.map(o).join("")}function Yf(e,o){return e.filter(function(i){return!$r(i,o)})}var dc=1,Ca=1,f2=0,Dn=0,jt=0,La="";function uc(e,o,i,s,l,d,h,f){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:dc,column:Ca,length:h,return:"",siblings:f}}function eo(e,o){return qu(uc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function ga(e){for(;e.root;)e=eo(e.root,{children:[e]});ji(e,e.siblings)}function gS(){return jt}function vS(){return jt=Dn>0?Nt(La,--Dn):0,Ca--,jt===10&&(Ca=1,dc--),jt}function nr(){return jt=Dn<f2?Nt(La,Dn++):0,Ca++,jt===10&&(Ca=1,dc++),jt}function oo(){return Nt(La,Dn)}function Nl(){return Dn}function hc(e,o){return Eo(La,e,o)}function Ei(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xS(e){return dc=Ca=1,f2=Xn(La=e),Dn=0,[]}function yS(e){return La="",e}function mu(e){return h2(hc(Dn-1,Vu(e===91?e+2:e===40?e+1:e)))}function wS(e){for(;(jt=oo())&&jt<33;)nr();return Ei(e)>2||Ei(jt)>3?"":" "}function bS(e,o){for(;--o&&nr()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return hc(e,Nl()+(o<6&&oo()==32&&nr()==32))}function Vu(e){for(;nr();)switch(jt){case e:return Dn;case 34:case 39:e!==34&&e!==39&&Vu(jt);break;case 40:e===41&&Vu(e);break;case 92:nr();break}return Dn}function kS(e,o){for(;nr()&&e+jt!==57;)if(e+jt===84&&oo()===47)break;return"/*"+hc(o,Dn-1)+"*"+Sh(e===47?e:nr())}function CS(e){for(;!Ei(oo());)nr();return hc(e,Dn)}function _S(e){return yS(Rl("",null,null,null,[""],e=xS(e),0,[0],e))}function Rl(e,o,i,s,l,d,h,f,g){for(var y=0,x=0,w=h,k=0,_=0,C=0,M=1,N=1,$=1,S=0,j="",z=l,A=d,R=s,E=j;N;)switch(C=S,S=nr()){case 40:if(C!=108&&Nt(E,w-1)==58){Ml(E+=We(mu(S),"&","&\f"),"&\f",u2(y?f[y-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:E+=mu(S);break;case 9:case 10:case 13:case 32:E+=wS(C);break;case 92:E+=bS(Nl()-1,7);continue;case 47:switch(oo()){case 42:case 47:ji(jS(kS(nr(),Nl()),o,i,g),g),(Ei(C||1)==5||Ei(oo()||1)==5)&&Xn(E)&&Eo(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*M:f[y++]=Xn(E)*$;case 125*M:case 59:case 0:switch(S){case 0:case 125:N=0;case 59+x:$==-1&&(E=We(E,/\f/g,"")),_>0&&(Xn(E)-w||M===0&&C===47)&&ji(_>32?Qf(E+";",s,i,w-1,g):Qf(We(E," ","")+";",s,i,w-2,g),g);break;case 59:E+=";";default:if(ji(R=Kf(E,o,i,y,x,l,f,j,z=[],A=[],w,d),d),S===123)if(x===0)Rl(E,o,R,R,z,d,w,f,A);else{switch(k){case 99:if(Nt(E,3)===110)break;case 108:if(Nt(E,2)===97)break;default:x=0;case 100:case 109:case 115:}x?Rl(e,R,R,s&&ji(Kf(e,R,R,0,0,l,f,j,l,z=[],w,A),A),l,A,w,f,s?z:A):Rl(E,R,R,R,[""],A,0,f,A)}}y=x=_=0,M=$=1,j=E="",w=h;break;case 58:w=1+Xn(E),_=C;default:if(M<1){if(S==123)--M;else if(S==125&&M++==0&&vS()==125)continue}switch(E+=Sh(S),S*M){case 38:$=x>0?1:(E+="\f",-1);break;case 44:f[y++]=(Xn(E)-1)*$,$=1;break;case 64:oo()===45&&(E+=mu(nr())),k=oo(),x=w=Xn(j=E+=CS(Nl())),S++;break;case 45:C===45&&Xn(E)==2&&(M=0)}}return d}function Kf(e,o,i,s,l,d,h,f,g,y,x,w){for(var k=l-1,_=l===0?d:[""],C=p2(_),M=0,N=0,$=0;M<s;++M)for(var S=0,j=Eo(e,k+1,k=u2(N=h[M])),z=e;S<C;++S)(z=h2(N>0?_[S]+" "+j:We(j,/&\f/g,_[S])))&&(g[$++]=z);return uc(e,o,i,l===0?cc:f,g,y,x,w)}function jS(e,o,i,s){return uc(e,o,i,c2,Sh(gS()),Eo(e,2,-2),0,s)}function Qf(e,o,i,s,l){return uc(e,o,i,jh,Eo(e,0,s),Eo(e,s+1,-1),s,l)}function m2(e,o,i){switch(fS(e,o)){case 5103:return ot+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ot+e+e;case 4855:return ot+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+e+Ni+e+mt+e+e;case 5936:switch(Nt(e,o+11)){case 114:return ot+e+mt+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ot+e+mt+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ot+e+mt+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ot+e+mt+e+e;case 6165:return ot+e+mt+"flex-"+e+e;case 5187:return ot+e+We(e,/(\w+).+(:[^]+)/,ot+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return ot+e+mt+"flex-item-"+We(e,/flex-|-self/g,"")+($r(e,/flex-|baseline/)?"":mt+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return ot+e+mt+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return ot+e+mt+We(e,"shrink","negative")+e;case 5292:return ot+e+mt+We(e,"basis","preferred-size")+e;case 6060:return ot+"box-"+We(e,"-grow","")+ot+e+mt+We(e,"grow","positive")+e;case 4554:return ot+We(e,/([^-])(transform)/g,"$1"+ot+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+mt+"flex-pack:$3"),/space-between/,"justify")+ot+e+e;case 4200:if(!$r(e,/flex-|baseline/))return mt+"grid-column-align"+Eo(e,o)+e;break;case 2592:case 3360:return mt+We(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,$r(s.props,/grid-\w+-end/)})?~Ml(e+(i=i[o].value),"span",0)?e:mt+We(e,"-start","")+e+mt+"grid-row-span:"+(~Ml(i,"span",0)?$r(i,/\d+/):+$r(i,/\d+/)-+$r(e,/\d+/))+";":mt+We(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return $r(s.props,/grid-\w+-start/)})?e:mt+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,ot+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-o>6)switch(Nt(e,o+1)){case 109:if(Nt(e,o+4)!==45)break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+Ni+(Nt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~Ml(e,"stretch",0)?m2(We(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,g,y){return mt+l+":"+d+y+(h?mt+l+"-span:"+(f?g:+g-+d)+y:"")+e});case 4949:if(Nt(e,o+6)===121)return We(e,":",":"+ot)+e;break;case 6444:switch(Nt(e,Nt(e,14)===45?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(Nt(e,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+mt+"$2box$3")+e;case 100:return We(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function Bl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function SS(e,o,i,s){switch(e.type){case pS:if(e.children.length)break;case uS:case hS:case jh:return e.return=e.return||e.value;case c2:return"";case d2:return e.return=e.value+"{"+Bl(e.children,s)+"}";case cc:if(!Xn(e.value=e.props.join(",")))return""}return Xn(i=Bl(e.children,s))?e.return=e.value+"{"+i+"}":""}function $S(e){var o=p2(e);return function(i,s,l,d){for(var h="",f=0;f<o;f++)h+=e[f](i,s,l,d)||"";return h}}function MS(e){return function(o){o.root||(o=o.return)&&e(o)}}function NS(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case jh:e.return=m2(e.value,e.length,i);return;case d2:return Bl([eo(e,{value:We(e.value,"@","@"+ot)})],s);case cc:if(e.length)return mS(i=e.props,function(l){switch($r(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ga(eo(e,{props:[We(l,/:(read-\w+)/,":"+Ni+"$1")]})),ga(eo(e,{props:[l]})),qu(e,{props:Yf(i,s)});break;case"::placeholder":ga(eo(e,{props:[We(l,/:(plac\w+)/,":"+ot+"input-$1")]})),ga(eo(e,{props:[We(l,/:(plac\w+)/,":"+Ni+"$1")]})),ga(eo(e,{props:[We(l,/:(plac\w+)/,mt+"input-$1")]})),ga(eo(e,{props:[l]})),qu(e,{props:Yf(i,s)});break}return""})}}var wa={},gu,vu;const _a=typeof process<"u"&&wa!==void 0&&(wa.REACT_APP_SC_ATTR||wa.SC_ATTR)||"data-styled",g2="active",v2="data-styled-version",pc="6.4.2",$h=`/*!sc*/
`,Ri=typeof window<"u"&&typeof document<"u";function Zf(e){if(typeof process<"u"&&wa!==void 0){const o=wa[e];if(o!==void 0&&o!=="")return o!=="false"}}const RS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(vu=(gu=Zf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&gu!==void 0?gu:Zf("SC_DISABLE_SPEEDY"))!==null&&vu!==void 0?vu:typeof process<"u"&&wa!==void 0&&!1),x2="sc-keyframes-",LS={};function Wi(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let Ll=new Map,Hl=new Map,Al=1;const Si=e=>{if(Ll.has(e))return Ll.get(e);for(;Hl.has(Al);)Al++;const o=Al++;return Ll.set(e,o),Hl.set(o,e),o},AS=e=>Hl.get(e),TS=(e,o)=>{Al=o+1,Ll.set(e,o),Hl.set(o,e)},Mh=Object.freeze([]),ja=Object.freeze({});function y2(e,o,i=ja){return e.theme!==i.theme&&e.theme||o||i.theme}const ES=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,IS=/(^-|-$)/g;function w2(e){return e.replace(ES,"-").replace(IS,"")}const PS=/(a)(d)/gi,Xf=e=>String.fromCharCode(e+(e>25?39:97));function Nh(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Xf(o%52)+i;return(Xf(o%52)+i).replace(PS,"$1-$2")}const Gu=5381,Ao=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},b2=e=>Ao(Gu,e);function Rh(e){return Nh(b2(e)>>>0)}function zS(e){return e.displayName||e.name||"Component"}function Yu(e){return typeof e=="string"&&!0}function OS(e){return Yu(e)?`styled.${e}`:`Styled(${zS(e)})`}const k2=Symbol.for("react.memo"),DS=Symbol.for("react.forward_ref"),FS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},BS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HS={[DS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[k2]:C2};function Jf(e){return("type"in(o=e)&&o.type.$$typeof)===k2?C2:"$$typeof"in e?HS[e.$$typeof]:FS;var o}const WS=Object.defineProperty,US=Object.getOwnPropertyNames,qS=Object.getOwnPropertySymbols,VS=Object.getOwnPropertyDescriptor,GS=Object.getPrototypeOf,YS=Object.prototype;function _2(e,o,i){if(typeof o!="string"){const s=GS(o);s&&s!==YS&&_2(e,s,i);const l=US(o).concat(qS(o)),d=Jf(e),h=Jf(o);for(let f=0;f<l.length;++f){const g=l[f];if(!(g in BS||i&&i[g]||h&&g in h||d&&g in d)){const y=VS(o,g);try{WS(e,g,y)}catch{}}}}return e}function Ui(e){return typeof e=="function"}const KS=Symbol.for("react.forward_ref");function Lh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===KS&&"styledComponentId"in e}function $i(e,o){return e&&o?e+" "+o:e||o||""}function Wl(e,o){return e.join("")}function Ii(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ku(e,o,i=!1){if(!i&&!Ii(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Ku(e[s],o[s]);else if(Ii(o))for(const s in o)e[s]=Ku(e[s],o[s]);return e}function Ah(e,o){Object.defineProperty(e,"toString",{value:o})}const QS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Wi(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+$h;return o}},ZS=`style[${_a}][${v2}="${pc}"]`,XS=new RegExp(`^${_a}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),em=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Qu=e=>{if(!e)return document;if(em(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(em(o))return o}return document},JS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},e$=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split($h),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const g=f.match(XS);if(g){const y=0|parseInt(g[1],10),x=g[2];y!==0&&(TS(x,y),JS(e,x,g[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(f)}},xu=e=>{const o=Qu(e.options.target).querySelectorAll(ZS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(_a)!==g2&&(e$(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let wi=!1;function t$(){if(wi!==!1)return wi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return wi=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return wi=o.getAttribute("content")||void 0}return wi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const j2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const y=Array.from(g.querySelectorAll(`style[${_a}]`));return y[y.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(_a,g2),l.setAttribute(v2,pc);const f=o||t$();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},n$=class{constructor(e,o){this.element=j2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw Wi(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},r$=class{constructor(e,o){this.element=j2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let tm=Ri;const o$={isServer:!Ri,useCSSOMInjection:!RS};class qi{static registerId(o){return Si(o)}constructor(o=ja,i={},s){this.options=Object.assign(Object.assign({},o$),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Ri&&tm&&(tm=!1,xu(this)),Ah(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let g=0;g<h;g++){const y=AS(g);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=_a+".g"+g+'[id="'+y+'"]';let _="";for(const C of x)C.length>0&&(_+=C+",");f+=w+k+'{content:"'+_+'"}'+$h}return f})(this))}rehydrate(){!this.server&&Ri&&xu(this)}reconstructWithOptions(o,i=!0){const s=new qi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Ri&&o.target!==this.options.target&&Qu(this.options.target)!==Qu(o.target)&&xu(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new n$(s,l):new r$(s,l))(this.options),new QS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){Si(o),o.startsWith(x2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(Si(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(Si(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const S2=new WeakSet,a$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i$(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in a$||e.startsWith("--")?String(o).trim():o+"px"}const Ro=47;function nm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const $2=Symbol.for("sc-keyframes");function s$(e){return typeof e=="object"&&e!==null&&$2 in e}function M2(e){return Ui(e)&&!(e.prototype&&e.prototype.isReactComponent)}const N2=e=>e==null||e===!1||e==="",l$=Symbol.for("react.client.reference");function rm(e){return e.$$typeof===l$}function R2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!N2(s)&&(Array.isArray(s)&&S2.has(s)||Ui(s)?o.push(nm(i)+":",s,";"):Ii(s)?(o.push(i+" {"),R2(s,o),o.push("}")):o.push(nm(i)+": "+i$(i,s)+";"))}}function lo(e,o,i,s,l=[]){if(N2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(rm(e))return l;if(M2(e)&&o){const h=e(o);return lo(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)lo(e[h],o,i,s,l);return l}return Lh(e)?(l.push(`.${e.styledComponentId}`),l):s$(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):rm(e)?l:Ii(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(R2(e,l),l):(l.push(e.toString()),l)}const c$=b2(pc);class d${constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=Ao(c$,i),this.baseStyle=s,qi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(M2(f)){const g=f(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=Wl(lo(g,o,i,s)))}else d+=Wl(lo(f,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=Nh(Ao(Ao(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const g=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,g)}l=$i(l,f)}}return l}}const u$=/&/g;function L2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function yu(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let g=0;g<o;g++){const y=e.charCodeAt(g);if(d!==0||h||y!==Ro||e.charCodeAt(g+1)!==42)if(h)y===42&&e.charCodeAt(g+1)===Ro&&(h=!1,g++);else if(y!==34&&y!==39||L2(e,g)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){f=!0;let x=g+1;for(;x<o;){const w=e.charCodeAt(x);if(w===59||w===10)break;x++}x<o&&e.charCodeAt(x)===59&&x++,l=0,g=x-1,s=x;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else y===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=y:d===y&&(d=0);else h=!0,g++}return f||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function A2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let g=0;g<h.length;g++)f[g]=i+h[g];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&A2(d.children,o)}return e}function h$({options:e=ja,plugins:o=Mh}=ja){let i,s,l;const d=(k,_,C)=>C.startsWith(s)&&C.endsWith(s)&&C.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===cc&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(u$,s).replace(l,d))}),e.prefix&&h.push(NS),h.push(SS);let f=[];const g=$S(h.concat(MS(k=>f.push(k)))),y=(k,_="",C="",M="&")=>{i=M,s=_,l=void 0;const N=(function(S){const j=S.indexOf("//")!==-1,z=S.indexOf("}")!==-1;if(!j&&!z)return S;if(!j)return yu(S);const A=S.length;let R="",E=0,L=0,F=0,q=0,V=0,H=!1;for(;L<A;){const K=S.charCodeAt(L);if(K!==34&&K!==39||L2(S,L))if(F===0)if(K===Ro&&L+1<A&&S.charCodeAt(L+1)===42){for(L+=2;L+1<A&&(S.charCodeAt(L)!==42||S.charCodeAt(L+1)!==Ro);)L++;L+=2}else if(K!==40)if(K!==41)if(q>0)L++;else if(K===42&&L+1<A&&S.charCodeAt(L+1)===Ro)R+=S.substring(E,L),L+=2,E=L,H=!0;else if(K===Ro&&L+1<A&&S.charCodeAt(L+1)===Ro){for(R+=S.substring(E,L);L<A&&S.charCodeAt(L)!==10;)L++;E=L,H=!0}else K===123?V++:K===125&&V--,L++;else q>0&&q--,L++;else q++,L++;else L++;else F===0?F=K:F===K&&(F=0),L++}return H?(E<A&&(R+=S.substring(E)),V===0?R:yu(R)):V===0?S:yu(S)})(k);let $=_S(C||_?C+" "+_+" { "+N+" }":N);return e.namespace&&($=A2($,e.namespace)),f=[],Bl($,g),f},x=e;let w=Gu;for(let k=0;k<o.length;k++)o[k].name||Wi(15),w=Ao(w,o[k].name);return x!=null&&x.namespace&&(w=Ao(w,x.namespace)),x!=null&&x.prefix&&(w=Ao(w,"p")),y.hash=w!==Gu?w.toString():"",y}const p$=new qi,Zu=h$(),T2=pn.createContext({shouldForwardProp:void 0,styleSheet:p$,stylis:Zu,stylisPlugins:void 0});T2.Consumer;function E2(){return pn.useContext(T2)}const Th=pn.createContext(void 0);Th.Consumer;const om=Object.prototype.hasOwnProperty,wu={};function f$(e,o){const i=typeof e!="string"?"sc":w2(e);wu[i]=(wu[i]||0)+1;const s=i+"-"+Rh(pc+i+wu[i]);return o?o+"-"+s:s}function m$(e,o,i){const s=Lh(e),l=e,d=!Yu(e),{attrs:h=Mh,componentId:f=f$(o.displayName,o.parentComponentId),displayName:g=OS(e)}=o,y=o.displayName&&o.componentId?w2(o.displayName)+"-"+o.componentId:o.componentId||f,x=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const M=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;w=($,S)=>M($,S)&&N($,S)}else w=M}const k=new d$(i,y,s?l.componentStyle:void 0);function _(M,N){return(function($,S,j){const{attrs:z,componentStyle:A,defaultProps:R,foldedComponentIds:E,styledComponentId:L,target:F}=$,q=pn.useContext(Th),V=E2(),H=$.shouldForwardProp||V.shouldForwardProp,K=y2(S,q,R)||ja;let ee,ae;{const D=pn.useRef(null),Y=D.current;if(Y!==null&&Y[1]===K&&Y[2]===V.styleSheet&&Y[3]===V.stylis&&Y[7]===A&&(function(T,O,ne){const U=T,Z=O;let ce=0;for(const B in Z)if(om.call(Z,B)&&(ce++,U[B]!==Z[B]))return!1;return ce===ne})(Y[0],S,Y[4]))ee=Y[5],ae=Y[6];else{ee=(function(O,ne,U){const Z=Object.assign(Object.assign({},ne),{className:void 0,theme:U}),ce=O.length>1;for(let B=0;B<O.length;B++){const P=O[B],oe=Ui(P)?P(ce?Object.assign({},Z):Z):P;for(const fe in oe)fe==="className"?Z.className=$i(Z.className,oe[fe]):fe==="style"?Z.style=Object.assign(Object.assign({},Z.style),oe[fe]):fe in ne&&ne[fe]===void 0||(Z[fe]=oe[fe])}return"className"in ne&&typeof ne.className=="string"&&(Z.className=$i(Z.className,ne.className)),Z})(z,S,K),ae=(function(O,ne,U,Z){return O.generateAndInjectStyles(ne,U,Z)})(A,ee,V.styleSheet,V.stylis);let T=0;for(const O in S)om.call(S,O)&&T++;D.current=[S,K,V.styleSheet,V.stylis,T,ee,ae,A]}}const se=ee.as||F,le=(function(D,Y,T,O){const ne={};for(const U in D)D[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&D.theme===T||(U==="forwardedAs"?ne.as=D.forwardedAs:O&&!O(U,Y)||(ne[U]=D[U]));return ne})(ee,se,K,H);let Q=$i(E,L);return ae&&(Q+=" "+ae),ee.className&&(Q+=" "+ee.className),le[Yu(se)&&se.includes("-")?"class":"className"]=Q,j&&(le.ref=j),v.createElement(se,le)})(C,M,N)}_.displayName=g;let C=pn.forwardRef(_);return C.attrs=x,C.componentStyle=k,C.displayName=g,C.shouldForwardProp=w,C.foldedComponentIds=s?$i(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=y,C.target=s?l.target:e,Object.defineProperty(C,"defaultProps",{get(){return this._foldedDefaultProps},set(M){this._foldedDefaultProps=s?(function(N,...$){for(const S of $)Ku(N,S,!0);return N})({},l.defaultProps,M):M}}),Ah(C,()=>`.${C.styledComponentId}`),d&&_2(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}var g$=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function am(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const im=e=>(S2.add(e),e);function Pe(e,...o){if(Ui(e)||Ii(e))return im(lo(am(Mh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?lo(i):im(lo(am(i,o)))}function Xu(e,o,i=ja){if(!o)throw Wi(1,o);const s=(l,...d)=>e(o,i,Pe(l,...d));return s.attrs=l=>Xu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Xu(e,o,Object.assign(Object.assign({},i),l)),s}const I2=e=>Xu(m$,e),p=I2;g$.forEach(e=>{p[e]=I2(e)});class v${constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Ui(d)&&!Lh(d))return!1}return!0})(o),qi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const f=this.computeRules(o,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const f=h.rules,g=this.instanceRules.get(o).rules;if(f.length===g.length){let y=!0;for(let x=0;x<f.length;x++)if(f[x]!==g[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Wl(lo(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function P2(e,...o){const i=Pe(e,...o),s=`sc-global-${Rh(JSON.stringify(i))}`,l=new v$(i,s),d=f=>{const g=E2(),y=pn.useContext(Th);let x;{const w=pn.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),x=w.current}g.styleSheet.server&&h(x,f,g.styleSheet,y,g.stylis);{const w=l.isStatic?[x,g.styleSheet,l]:[x,f,g.styleSheet,y,g.stylis,l],k=pn.useRef(l);pn.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(x,f,g.styleSheet,y,g.stylis))},w),pn.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(x,g.styleSheet)},[x,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(x),null};function h(f,g,y,x,w){if(l.isStatic)l.renderStyles(f,LS,y,w);else{const k=Object.assign(Object.assign({},g),{theme:y2(g,x,d.defaultProps)});l.renderStyles(f,k,y,w)}}return pn.memo(d)}var z2;class x${constructor(o,i){this[z2]=!0,this.inject=(s,l=Zu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=x2+o,this.rules=i,Si(this.id),Ah(this,()=>{throw Wi(12,String(this.name))})}getName(o=Zu){return o.hash?this.name+Nh(+o.hash>>>0):this.name}}function we(e,...o){const i=Wl(Pe(e,...o)),s=Rh(i);return new x$(s,i)}z2=$2;const O2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],y$=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function w$(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function b$(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%O2.length}function k$(e){const o=w$(e);let i=-1,s=0;return y$.forEach((l,d)=>{const h=l.reduce((f,g)=>o.includes(g)?f+1:f,0);h>s&&(s=h,i=d)}),O2[i>=0?i:b$(o)]}const Rt=(e,o,i)=>Math.max(o,Math.min(i,e)),Mr=e=>(e=Rt(e,0,1),e*e*(3-2*e)),co=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function dn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Ju(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function fl(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Ju(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Ju(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function C$(){const[e,o]=v.useState(0);return v.useEffect(()=>{var d;const i=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",i);const l=new MutationObserver(i);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",i),l.disconnect()}},[]),e}function _$(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function j$(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const Mo=["234,54,38","246,112,44","252,172,54","255,212,76"],S$="176,58,32",$$="198,158,52";function Jn(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function Sr(e,o,i){if(!(e!=null&&e.length))return i;if(e.length===1)return e[0];const s=Rt(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return Jn(e[l],e[d],s-l)}function uo(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),x=e.size<24,w=Rt(e.alert??0,0,1),k=(S,j)=>S+(j-S)*w,_=.85+.15*Math.sin(o*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,y*3);S.addColorStop(0,"rgba("+Sr(e.corePalette,.42,i.core)+",0.55)"),S.addColorStop(1,"rgba("+Sr(e.corePalette,.86,i.accent)+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,y*3,0,6.2832),s.fill()}else if(!i.glow){const S=y*k(3.2,3),j=s.createRadialGradient(h,f,0,h,f,S);j.addColorStop(0,"rgba("+Jn(Sr(e.corePalette,.35,i.core),Mo[1],w)+","+k(.34,.85*_)+")"),j.addColorStop(.5,"rgba("+Jn(Sr(e.corePalette,.68,i.core),Mo[2],w)+","+k(.13,.42*_)+")"),j.addColorStop(1,"rgba("+Jn(Sr(e.corePalette,1,i.core),Mo[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const C=i.glow?1:.95,M=Math.max(.8,y*k(1,1.5)),N=y*.1*w;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(h-N,f-N,0,h,f,M);$.addColorStop(0,"rgba("+Jn(Sr(e.corePalette,.08,i.core),Mo[0],w)+","+k(C,1)+")"),$.addColorStop(.5,"rgba("+Jn(Sr(e.corePalette,.42,i.core),Mo[1],w)+","+k(C,1)+")"),$.addColorStop(.82,"rgba("+Jn(Sr(e.corePalette,.72,i.core),Mo[2],w)+","+k(C,.97)+")"),$.addColorStop(1,"rgba("+Jn(Sr(e.corePalette,1,i.core),Mo[3],w)+","+k(C,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(h,f,M,0,6.2832),s.fill(),s.restore()}function D2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],w=o*(y?.5:.16),k=.42,_=Math.cos(k),C=Math.sin(k),M=Math.cos(w),N=Math.sin(w),$=g*.96,S=(F,q,V)=>{const H=F*M+V*N,K=-F*N+V*M,ee=q,ae=ee*_-K*C,le=(ee*C+K*_+1)/2,Q=.82+.18*le;return{x:h+H*$*Q,y:f+ae*$*Q,d:le}},j=(F,q,V)=>{const H=Math.cos(F),K=Math.sin(F)*Math.cos(q),ee=Math.sin(F)*Math.sin(q);return[H*Math.cos(V)+ee*Math.sin(V),K,-H*Math.sin(V)+ee*Math.cos(V)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const z=e.size>=24?64:40,A=y?.9:.3,R=z,E=5.6,L=[];for(let F=0;F<x.length;F++){const q=x[F][0],V=x[F][1],H=ae=>{const se=j(ae,q,V);return S(se[0],se[1],se[2])},K=F%2?1:-1,ee=F*2+K*o*A;L.push({ptOf:H,head:ee,dir:K,hp:H(ee)})}L.sort((F,q)=>F.hp.d-q.hp.d);for(const F of L){const q=Math.max(1.2,g*.05)*(.75+.35*F.hp.d),V=.66*(.45+.55*F.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=q;let H=F.ptOf(F.head);for(let ae=1;ae<=R;ae++){const se=ae/R,le=1-se,Q=V*le*le,D=F.ptOf(F.head-F.dir*se*E);Q>.004&&(s.strokeStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.moveTo(H.x,H.y),s.lineTo(D.x,D.y),s.stroke()),H=D}s.restore();const K=Math.max(.9,g*.062*co(e.size)*(.65+.5*F.hp.d)),ee=.45+.55*F.hp.d;if(i.glow){const ae=s.createRadialGradient(F.hp.x,F.hp.y,0,F.hp.x,F.hp.y,K*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(F.hp.x,F.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(F.hp.x,F.hp.y,K,0,6.2832),s.fill()}uo(e,o,i),s.restore()}function M$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=[g*.92],w=x.length,k=1,_=y?.9:.3,C=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let M=0;M<w;M++){const N=x[M],$=M%2?1:-1,S=6.2832/k,j=Math.min(5.6,S*.92);for(let z=0;z<k;z++){const A=M*2+$*o*_+z*S,R=h+Math.cos(A)*N,E=f+Math.sin(A)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let L=R,F=E;for(let V=1;V<=C;V++){const H=V/C,K=.62*(1-H)*(1-H),ee=A-$*H*j,ae=h+Math.cos(ee)*N,se=f+Math.sin(ee)*N;K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(L,F),s.lineTo(ae,se),s.stroke()),L=ae,F=se}s.restore();const q=Math.max(.9,g*.062*co(e.size));if(i.glow){const V=s.createRadialGradient(R,E,0,R,E,q*4.5);V.addColorStop(0,"rgba("+i.accent+",0.3)"),V.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=V,s.beginPath(),s.arc(R,E,q*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(R,E,q,0,6.2832),s.fill()}}uo(e,o,i),s.restore()}function sm(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=Rt(e.alert??0,0,1),k=y*.82,_=(D,Y)=>Jn(i.dot,Jn(S$,$$,Rt(Math.hypot(D-f,Y-g)/k,0,1)),w),C=e.size>=120,M=C?22:e.size>=32?10:e.size>=20?7:5,N=x?o*.55:o*.22,$=Math.cos(N),S=Math.sin(N),j=.42,z=Math.cos(j),A=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",C&&i.glow){const D=s.createRadialGradient(f,g,0,f,g,y*1.02);D.addColorStop(0,"rgba("+i.accent+",0.10)"),D.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=D,s.beginPath(),s.arc(f,g,y*1.02,0,6.2832),s.fill()}const R=[];for(let D=0;D<M;D++){const Y=1-(D+.5)/M*2,T=Math.sqrt(Math.max(0,1-Y*Y)),O=D*2.39996,ne=Math.cos(O)*T,U=Y,Z=Math.sin(O)*T,ce=ne*$+Z*S,B=-ne*S+Z*$,P=U*z-B*A,oe=U*A+B*z,fe=(oe+1)/2,de=.82+.18*fe;R.push({x:f+ce*k*de,y:g+P*k*de,d:fe,k:D,vec:[ce,P,oe]})}R.sort((D,Y)=>D.d-Y.d);const E=D=>{const Y=(D[2]+1)/2,T=.82+.18*Y;return{x:f+D[0]*k*T,y:g+D[1]*k*T,d:Y}},L=(D,Y,T)=>{let O=D[0]*Y[0]+D[1]*Y[1]+D[2]*Y[2];O=Rt(O,-1,1);const ne=Math.acos(O);if(ne<.001)return[D[0],D[1],D[2]];const U=Math.sin(ne),Z=Math.sin((1-T)*ne)/U,ce=Math.sin(T*ne)/U;return[D[0]*Z+Y[0]*ce,D[1]*Z+Y[1]*ce,D[2]*Z+Y[2]*ce]},F={};for(const D of R)F[D.k]=D;const V=o*(x?1.4:.5),H=Math.floor(V),K=V-H,ee=5,ae=12;s.lineCap="round",s.lineJoin="round";const se=[1.7,9.3,21.5,34.8,48.2],le=Rt(Math.round(e.streamCount??(C?5:4)),0,se.length),Q=se.slice(0,le).map(D=>({seed:D}));for(const D of Q){const Y=O=>{const ne=Math.sin(O*12.9898+D.seed)*43758.5453;return Math.floor((ne-Math.floor(ne))*M)},T=O=>{let ne=Y(O);return ne===Y(O-1)&&(ne=(ne+1)%M),F[ne]};for(let O=ee-1;O>=0;O--){const ne=H-O;if(ne<0)continue;const U=T(ne),Z=T(ne+1);if(!U||!Z||U===Z)continue;const ce=O===0?K:1,B=E(L(U.vec,Z.vec,ce)),P=(U.d+B.d)/2,oe=O===0?1:Rt(1-(O-1+K)/(ee-1),0,1),fe=(i.glow?.6:.72)*oe*(.4+.6*P);if(fe<.02)continue;const de=s.createLinearGradient(U.x,U.y,B.x,B.y);de.addColorStop(0,"rgba("+_(U.x,U.y)+",0)"),de.addColorStop(1,"rgba("+_(B.x,B.y)+","+fe+")"),s.strokeStyle=de,s.lineWidth=(C?Math.max(1.1*h,y*.018):Math.max(1.2,y*.045))*(.7+.4*P),s.beginPath();for(let ve=0;ve<=ae;ve++){const ke=E(L(U.vec,Z.vec,ce*(ve/ae)));ve===0?s.moveTo(ke.x,ke.y):s.lineTo(ke.x,ke.y)}s.stroke()}}for(const D of R){const Y=.5+.5*Math.sin(o*2-D.k*.9),T=(.18+.82*D.d)*(.62+.38*Y),O=C?Math.max(.5,(.9+.9*D.d)*h*(.85+.15*Y)):y*.058*co(e.size)*(.6+.5*D.d);if(i.glow){const ne=O*4,U=s.createRadialGradient(D.x,D.y,0,D.x,D.y,ne);U.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(D.x,D.y,ne,0,6.2832),s.fill()}s.fillStyle="rgba("+_(D.x,D.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(D.x,D.y,Math.max(.9,O),0,6.2832),s.fill()}C&&Eh(e,o,i,_),uo(e,o,i),s.restore()}function Eh(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,y=h/2,x=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let _=0;_<46;_++){const C=dn(_*5.1)<.5?-1:1,M=dn(_*1.7)*6.2832+o*(.3+dn(_*3.1)*.6)*C*k,N=x*(.04+.05*dn(_*4.7))*Math.sin(o*(.8+dn(_*6)*1)+dn(_*7)*6.28),$=x*(.5+dn(_*2.3)*.5)+N,S=g+Math.cos(M)*$,j=y+Math.sin(M)*$,z=.3+.7*(.5+.5*Math.sin(o*(1.4+dn(_)*2)+dn(_*2)*6.28)),A=Math.max(.5,(.4+dn(_*8)*1)*f*(.55+.6*z));if(i.glow){const R=A*6,E=l.createRadialGradient(S,j,0,S,j,R);E.addColorStop(0,"rgba("+i.accent+","+z*.18+")"),E.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(S,j,R,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,j)+","+z*(i.glow?.8:.42)+")",l.beginPath(),l.arc(S,j,A,0,6.2832),l.fill()}}function N$(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=e.size>=32?11:7,k=y*.12,_=y*.12,C=Mr(.5+.5*Math.sin(o*(x?1:.55))),M=x?.34+.66*C:.5+.12*C,N=Math.max(1*h,y*.052),$=-o*(x?.5:.16),S=Math.cos($),j=Math.sin($),z=.42,A=Math.cos(z),R=Math.sin(z);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=y*(.52+.44*M),L=Math.max(k+N,E-_),F=[];for(let q=0;q<w;q++){const V=1-(q+.5)/w*2,H=Math.sqrt(Math.max(0,1-V*V)),K=q*2.39996,ee=Math.cos(K)*H,ae=V,se=Math.sin(K)*H,le=ee*S+se*j,Q=-ee*j+se*S,D=ae*A-Q*R,T=(ae*R+Q*A+1)/2,O=.82+.18*T,ne=.5+.5*Math.sin(o*1.6+q*1.3);F.push({x0:f+le*k*O,y0:g+D*k*O,x1:f+le*L*O,y1:g+D*L*O,cx2:f+le*E*O,cy2:g+D*E*O,d:T,shim:ne})}F.sort((q,V)=>q.d-V.d);for(const q of F){const V=(x?.4+.45*M:.6)*(.4+.6*q.d)*(.78+.22*q.shim),H=s.createLinearGradient(q.x0,q.y0,q.x1,q.y1);H.addColorStop(0,"rgba("+i.dot+","+V+")"),H.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=H,s.lineWidth=N*(.7+.5*q.d),s.beginPath(),s.moveTo(q.x0,q.y0),s.lineTo(q.x1,q.y1),s.stroke();const K=Math.max(.9,y*.058*co(e.size)*(.85+.3*M)*(.6+.5*q.d));if(i.glow){const ee=s.createRadialGradient(q.cx2,q.cy2,0,q.cx2,q.cy2,K*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*V+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(q.cx2,q.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,V+.1)+")",s.beginPath(),s.arc(q.cx2,q.cy2,K,0,6.2832),s.fill()}e.size>=120&&Eh(e,o,i,()=>i.dot),uo(e,o,i),s.restore()}function R$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=y?o*.5:o*.2,_=Math.cos(k),C=Math.sin(k),M=.42,N=Math.cos(M),$=Math.sin(M),S=y?1:.4,j=(H,K)=>[Math.sin(H)*Math.cos(K),Math.cos(H),Math.sin(H)*Math.sin(K)],z=[j(1.4+.5*Math.sin(o*.5*S),o*.6*S),j(1.9+.4*Math.cos(o*.4*S),-o*.5*S+2)],A=.36,R=e.cellCount==null?x:Rt(Math.round(e.cellCount),0,x);let E=null,L=null;(R<x||e.cellBirths)&&(L=Array.from({length:x},(H,K)=>K).sort((H,K)=>dn(H)-dn(K)),E=new Array(x),L.forEach((H,K)=>{E[H]=K}));const F=.7,q=.16;if(L&&e.cellBirths&&e.emergeNow!=null){let H=0;for(let K=0;K<R;K++){const ee=L[K];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+H++*q)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const V=[];for(let H=0;H<x;H++){let K=1;if(E){if(E[H]>=R)continue;if(e.cellBirths){const P=e.cellBirths.get(H);if(P==null||(K=Mr(((e.emergeNow??P+F)-P)/F),K<=.001))continue}}const ee=1-(H+.5)/x*2,ae=Math.sqrt(Math.max(0,1-ee*ee)),se=H*2.39996,le=Math.cos(se)*ae*K,Q=ee*K,D=Math.sin(se)*ae*K;let Y=0;for(const P of z){const oe=le-P[0],fe=Q-P[1],de=D-P[2];Y+=Math.exp(-(oe*oe+fe*fe+de*de)/(2*A*A))}Y=Rt(Y,0,1);const T=le*_+D*C,O=-le*C+D*_,ne=Q*N-O*$,Z=(Q*$+O*N+1)/2,ce=.82+.18*Z;let B=i.dot;if(e.dotPalette&&e.dotPalette.length){const oe=(se/6.2832+(ee+1)*.07+1)%1*e.dotPalette.length,fe=Math.floor(oe)%e.dotPalette.length,de=(fe+1)%e.dotPalette.length;B=Jn(e.dotPalette[fe],e.dotPalette[de],oe-Math.floor(oe))}V.push({x:h+T*w*ce,y:f+ne*w*ce,d:Z,inf:Y,g:K,color:B})}V.sort((H,K)=>H.d-K.d);for(const H of V){const K=Mr(H.inf),ee=Math.max(.6,g*(.05+.06*K)*co(e.size)*(.55+.5*H.d))*(.35+.65*H.g),ae=(.16+.84*H.d)*(.45+.55*K)*H.g,se=1-(1-Math.abs(2*H.d-1))*H.g,le=Math.atan2(H.y-f,H.x-h);s.fillStyle="rgba("+H.color+","+ae+")",s.beginPath(),s.ellipse(H.x,H.y,Math.max(.35,ee*se),ee,le,0,6.2832),s.fill()}uo(e,o,i),s.restore()}function L$(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,y=h/2,x=Math.min(d,h)*.39,w=e.state!=="idle",k=Mr(Rt(s/.55,0,1)),_=Mr(Rt((s-.3)/.4,0,1)),C=Mr(Rt((s-.5)/.5,0,1)),M=e.size>=32?11:7,N=x*.12,$=x*.12,S=Mr(.5+.5*Math.sin(o*(w?1:.55))),j=w?.34+.66*S:.5+.12*S,z=Math.max(1*f,x*.052),A=-o*(w?.5:.16),R=Math.cos(A),E=Math.sin(A),L=.42,F=Math.cos(L),q=Math.sin(L),V=x*(.52+.44*j),H=Math.max(N+z,V-$),K=[];for(let B=0;B<M;B++){const P=1-(B+.5)/M*2,oe=Math.sqrt(Math.max(0,1-P*P)),fe=B*2.39996,de=Math.cos(fe)*oe,ve=P,ke=Math.sin(fe)*oe,Se=de*R+ke*E,Me=-de*E+ke*R,Le=ve*F-Me*q,Be=(ve*q+Me*F+1)/2,ze=.82+.18*Be,Ke=.5+.5*Math.sin(o*1.6+B*1.3);K.push({x0:g+Se*N*ze,y0:y+Le*N*ze,x1:g+Se*H*ze,y1:y+Le*H*ze,cx2:g+Se*V*ze,cy2:y+Le*V*ze,d:Be,shim:Ke,ux:de,uy:ve,uz:ke})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...K].sort((B,P)=>B.d-P.d);for(const B of ee){const P=(w?.4+.45*j:.6)*(.4+.6*B.d)*(.78+.22*B.shim);if(C>.001){const oe=B.x0+(B.x1-B.x0)*C,fe=B.y0+(B.y1-B.y0)*C,de=l.createLinearGradient(B.x0,B.y0,B.x1,B.y1);de.addColorStop(0,"rgba("+i.dot+","+P*C+")"),de.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=de,l.lineWidth=z*(.7+.5*B.d),l.beginPath(),l.moveTo(B.x0,B.y0),l.lineTo(oe,fe),l.stroke()}if(_>.001){const oe=Math.max(.9,x*.058*co(e.size)*(.85+.3*j)*(.6+.5*B.d));if(i.glow){const fe=l.createRadialGradient(B.cx2,B.cy2,0,B.cx2,B.cy2,oe*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*P*_+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(B.cx2,B.cy2,oe*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,P+.1)*_+")",l.beginPath(),l.arc(B.cx2,B.cy2,oe*(.6+.4*_),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,se=x*.78,le=w?o*.5:o*.2,Q=Math.cos(le),D=Math.sin(le),Y=w?1:.4,T=(B,P)=>[Math.sin(B)*Math.cos(P),Math.cos(B),Math.sin(B)*Math.sin(P)],O=[T(1.4+.5*Math.sin(o*.5*Y),o*.6*Y),T(1.9+.4*Math.cos(o*.4*Y),-o*.5*Y+2)],ne=.36,U=e.cellCount==null?ae:Rt(Math.round(e.cellCount),0,ae);let Z=null;if(U<ae){const B=Array.from({length:ae},(P,oe)=>oe).sort((P,oe)=>dn(P)-dn(oe));Z=new Array(ae),B.forEach((P,oe)=>{Z[P]=oe})}const ce=1-_;if(ce>.001||k<1){const B=[];for(let P=0;P<ae;P++){if(Z&&Z[P]>=U)continue;const oe=1-(P+.5)/ae*2,fe=Math.sqrt(Math.max(0,1-oe*oe)),de=P*2.39996,ve=Math.cos(de)*fe,ke=oe,Se=Math.sin(de)*fe;let Me=0,Le=-2;for(let Ve=0;Ve<M;Ve++){const He=ve*K[Ve].ux+ke*K[Ve].uy+Se*K[Ve].uz;He>Le&&(Le=He,Me=Ve)}const De=K[Me];let Be=0;for(const Ve of O){const He=ve-Ve[0],Qt=ke-Ve[1],tt=Se-Ve[2];Be+=Math.exp(-(He*He+Qt*Qt+tt*tt)/(2*ne*ne))}Be=Rt(Be,0,1);const ze=ve*Q+Se*D,Ke=-ve*D+Se*Q,Je=ke*F-Ke*q,qe=(ke*q+Ke*F+1)/2,xe=.82+.18*qe,Ae=g+ze*se*xe,Xe=y+Je*se*xe;B.push({x:Ae+(De.cx2-Ae)*k,y:Xe+(De.cy2-Xe)*k,d:qe+(De.d-qe)*k,inf:Be,f:(1-(1-Math.abs(2*qe-1)))*(1-k)+1*k})}B.sort((P,oe)=>P.d-oe.d);for(const P of B){const oe=Mr(P.inf),fe=Math.max(.6,x*(.05+.06*oe)*co(e.size)*(.55+.5*P.d)),de=(.16+.84*P.d)*(.45+.55*oe)*ce;if(de<=.003)continue;const ve=Math.atan2(P.y-y,P.x-g);l.fillStyle="rgba("+i.dot+","+de+")",l.beginPath(),l.ellipse(P.x,P.y,Math.max(.35,fe*P.f),fe,ve,0,6.2832),l.fill()}}e.size>=120&&C>.001&&(l.globalAlpha=C,Eh(e,o,i,()=>i.dot),l.globalAlpha=1),uo(e,o,i),l.restore()}function A$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=y?1:.4,_=o*(y?.3:.12),C=o*1*k,M=-o*.7*k+2.2,N=.72,$=(S,j)=>{const z=((S-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(z)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<x;S++){const j=S/x*6.2832+_;let z=Math.exp(-($(j,C)**2)/(2*N*N))+Math.exp(-($(j,M)**2)/(2*N*N));z=Rt(z,0,1);const A=Mr(z),R=h+Math.cos(j)*w,E=f+Math.sin(j)*w,L=Math.max(.6,g*(.05+.07*A)*co(e.size)),F=.38+.62*A;if(i.glow&&A>.25){const q=s.createRadialGradient(R,E,0,R,E,L*4);q.addColorStop(0,"rgba("+i.accent+","+.24*A+")"),q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=q,s.beginPath(),s.arc(R,E,L*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+F+")",s.beginPath(),s.arc(R,E,L,0,6.2832),s.fill()}uo(e,o,i),s.restore()}function T$(e,o,i){uo(e,o,i)}const E$={orbit:D2,orbit2d:M$,circle:sm,lines:N$,magnetic:R$,magnetic2d:A$,pulse:T$,bands:sm};function st({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:f,corePalette:g,coreHalo:y=!0,coreGradient:x=!1,streamCount:w,cellCount:k,className:_,"aria-label":C}){const M=v.useRef(null),N=C$(),$=v.useRef(0),S=v.useRef(0);S.current=x?1:0;const j=v.useRef(new Map),z=v.useRef(null),A=v.useRef(0);return v.useEffect(()=>{const R=M.current;if(!R)return;const E=R.getContext("2d");if(!E)return;const L=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),F=Math.min(2,window.devicePixelRatio||1),q=Math.max(2,Math.round(o*F)),V=q;R.width=q,R.height=V;const H={ctx:E,w:q,h:V,dpr:F,size:o,state:s,coreHalo:y,alert:$.current,streamCount:w,cellCount:k,cellBirths:k!=null&&!L&&s!=="static"?j.current:void 0},K=i==="auto"?_$(fl(E,R,"var(--color-bg-primary)"))<.5?"dark":"light":i,ee=j$(K,Ju(d));if(H.dotPalette=h||f==null?void 0:f.map(ne=>fl(E,R,ne)),H.corePalette=h||g==null?void 0:g.map(ne=>fl(E,R,ne)),h){const ne=fl(E,R,h);ee.dot=ne,ee.core=ne}const ae=E$[e]??D2,se=1.15,le=e==="lines"?1:0,Q=e==="lines"||e==="magnetic";(z.current==null||!Q||L||s==="static")&&(z.current=le);const D=ne=>{if($.current+=(S.current-$.current)*.06,Math.abs($.current-S.current)<.001&&($.current=S.current),H.alert=$.current,H.emergeNow=performance.now()/1e3,Q&&z.current!==le){const ce=H.emergeNow,B=Rt(ce-(A.current||ce),0,.1);A.current=ce;const P=le>(z.current??0)?1:-1;z.current=Rt((z.current??0)+P*B/se,0,1)}else A.current=H.emergeNow;E.clearRect(0,0,q,V);const U=s==="static"?.62:ne,Z=z.current??le;Q&&Z>.001&&Z<.999?L$(H,U,ee,Z):ae(H,U,ee)},Y=Rt(l,.4,3);if((L||s==="static")&&($.current=S.current),D(1.15),L||s==="static")return;let T=0;const O=ne=>{D(ne/1e3*Y),T=requestAnimationFrame(O)};return T=requestAnimationFrame(O),()=>cancelAnimationFrame(T)},[e,o,i,s,l,d,h,f,g,y,x,w,k,N]),n.jsx("canvas",{ref:M,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:_,role:"img","aria-label":C})}const Sa={high:0,medium:1,low:2,none:3};p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function fc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function I$(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const F2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,B2=e=>/^(review|adjust|revisit|update)\b/i.test(e),P$=["Revisit","Update","Resolve"],z$=e=>/,|\sand\s/.test(e),O$="Approve all",Ul="Yes",H2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};p.section`
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
`;function D$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function F$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function B$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function H$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function W$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function U$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function W2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function q$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function V$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function G$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Io({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function Y$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function K$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function U2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function lm({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const cm=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],$a={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},q2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function V2(e){const o=q2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function G2(e){const o=$a[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const Y2={missed_clockin_james:"james_okoro_2"},Ih=e=>`https://i.pravatar.cc/80?u=${Y2[e]??e}`,Aa=e=>`https://i.pravatar.cc/80?u=${Y2[e]??e}`,Q$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},Z$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],K2=e=>Q$[e]??Z$,Q2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},dm={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Ph={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},X$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},zh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},J$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},eM={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},bu={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function Z2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return J$[e.id]??e.timeline.map(i=>{var d;const s=((d=bu[i.state])==null?void 0:d.call(bu,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:eM[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const zt=(e,o,i)=>({name:e,match:o,distance:i}),Ze=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),um=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],tM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],nM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],rM=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],X2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",No=e=>({from:"ultron",text:X2,time:e}),oM={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:um,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[zt("Jordan Pierce","4.9 match","3.2 mi"),zt("Aisha Karim","4.7 match","5.1 mi"),zt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:X2,total:20,threads:[Ze("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[No("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ze("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[No("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ze("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[No("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ze("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[No("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ze("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[No("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ze("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[No("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ze("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[No("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:tM,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[zt("Renee Wallace","4.9 match","2.4 mi"),zt("Carl Jensen","4.6 match","4.1 mi"),zt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ze("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ze("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:nM,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[zt("Dane Mercer","4.8 match","2.1 mi"),zt("Omar Reyes","4.6 match","3.7 mi"),zt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ze("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ze("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ze("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:rM,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[zt("Jamal Carter","4.7 match","1.8 mi"),zt("Sara Lindqvist","4.6 match","2.9 mi"),zt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ze("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ze("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ze("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[zt("Theo Park","4.7 match","1.9 mi"),zt("Gina Holt","4.5 match","3.3 mi"),zt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ze("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ze("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ze("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ze("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[zt("Carl Jensen","4.7 match","2.6 mi"),zt("Tina Boyd","4.5 match","3.9 mi"),zt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ze("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ze("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ze("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ze("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ze("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ze("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ze("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ze("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ze("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ze("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ze("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ze("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ze("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:um,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ze("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ze("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},aM={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},iM=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",hm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",pm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),sM={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},eh=e=>{const[o,...i]=e.split(" "),s=sM[o];return s?`Will ${s} ${i.join(" ")}`:e};function lM(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${iM(i.name)}", template="shift_offer", to=matched)`,summary:`${eh(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${eh(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function cM(e,o,i,s){var _,C,M,N;if(e==="read"){const $=((_=o.update)==null?void 0:_.recordType)??((C=o.updateClose)==null?void 0:C.recordType);if(!$)return null;const S=$.toLowerCase(),j=[{label:"Type",value:$},{label:"Time",value:((M=q2[s])==null?void 0:M.shiftTime)??""},{label:"User",value:$a[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:j,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(N=o.policy)==null?void 0:N.eligible;if(!$)return null;const S=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:$,query:S,fields:j}=o.task;return{icon:"task",name:"Tasks",description:$,query:S,task:{fields:j}}}if(e==="update"||e==="update-close"){const $=e==="update"?o.update:o.updateClose;if(!$)return null;const{description:S,...j}=$;return{icon:"record",name:"Update Data",description:S,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,y=e==="policy"?o.policy.description:l?d.description:h.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?y:eh(y),S={icon:x,name:g,description:$,...lM(e,o)};return l?{...S,channel:pm(d.channel),message:d.message}:h?{...S,channel:hm(h.name),message:h.message}:e==="policy"?{...S,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:S}if(e==="policy")return{icon:x,name:g,description:y,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:x,name:g,description:y,channel:hm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:x,name:g,description:y,channel:pm(d.channel),notification:k}}function J2(e,o,i="execution"){const s=oM[e];return s?o.map(l=>cM(l,s,i,e)).filter(l=>l!==null):[]}const dM=e=>e.tools??aM[e.icon]??["policy"],ml=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function uM(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??(e.risk?"high":"medium"),event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const ev={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},fm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Oh(e,o){return fm[o%fm.length]}function hM(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function pM(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function tv({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(fM,{children:[n.jsx(rr,{size:"md",src:Ih(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(mM,{children:[n.jsx(gM,{children:e.title}),n.jsx(vM,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(xM,{"data-tone":pM(i),children:[i,"% match"]}),n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(fh,{size:16})})]})}const fM=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,mM=p.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,gM=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,vM=p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,xM=p.span`
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
`,mm=e=>e.id.startsWith("detected_"),gm=5400,vm=1100;function yM(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:ev[i.id]??i.outcome}:i)}}const wM=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function bM(){const e=v.useMemo(()=>cm.filter(U=>U.id!=="shift_drop_maria"),[]),[o,i]=v.useReducer(yM,e),[s,l]=v.useState(()=>{var Z;const U=e.find(ce=>ce.status==="needs_approval"||ce.status==="recommended");return(U==null?void 0:U.id)??((Z=e[0])==null?void 0:Z.id)??null}),[d,h]=v.useState([]),f=U=>{l(U),h(Z=>Z.includes(U)?Z:[...Z,U])},g=v.useMemo(()=>{const U=o.map((Z,ce)=>({item:Z,index:ce}));return wM.map(Z=>({id:Z.id,label:Z.label,threads:U.filter(ce=>Z.statuses.includes(ce.item.status)).sort((ce,B)=>(ce.item.status==="analyzing"?1:0)-(B.item.status==="analyzing"?1:0)||(mm(B.item)?1:0)-(mm(ce.item)?1:0)||Sa[ce.item.severity]-Sa[B.item.severity]||ce.index-B.index).map(ce=>ce.item)}))},[o]),y=o.find(U=>U.id===s)??null,[x,w]=v.useState({}),k=s?x[s]??0:0,[_,C]=v.useState([]),[M,N]=v.useState({}),[$,S]=v.useState({}),[j,z]=v.useState([]),A=v.useRef({}),[R,E]=v.useState([]),L=U=>{E(Z=>Z.includes(U)?Z.filter(ce=>ce!==U):[...Z,U])},[F,q]=v.useState([]),V=U=>{q(Z=>Z.includes(U)?Z:[...Z,U])},[H,K]=v.useState([]),ee=U=>K(Z=>Z.includes(U)?Z:[...Z,U]);return{threads:o,groups:g,selectedId:s,selectedThread:y,selectedStage:k,stageById:x,viewedIds:d,analyzedIds:_,outboundByThread:M,chatByThread:$,replyingIds:j,setSelectedId:f,detectEvent:U=>{const Z=uM(U);i({type:"detect",thread:Z}),ee(Z.id)},surfaceDemoThread:U=>{const Z=cm.find(ce=>ce.id===U);Z&&(i({type:"detect",thread:Z}),ee(U))},decide:U=>{f(U),C(Z=>Z.includes(U)?Z:[...Z,U]),i({type:"decide",threadId:U})},commit:(U,Z)=>{f(U),N(ce=>({...ce,[U]:[...ce[U]??[],Z]})),i({type:"commit",threadId:U})},completeRun:U=>{const Z=x[U]??0,ce=Ph[U];Z===0&&ce?(w(B=>({...B,[U]:1})),i({type:"reopen",threadId:U})):(i({type:"resolve",threadId:U}),R.includes(U)&&(V(U),E(B=>B.filter(P=>P!==U))))},sendMessage:(U,Z)=>{const ce=Z.trim();if(!ce)return;f(U),S(P=>({...P,[U]:[...P[U]??[],{role:"operator",text:ce}]})),z(P=>P.includes(U)?P:[...P,U]);const B=window.setTimeout(()=>{S(P=>{const oe=P[U]??[],fe=oe.filter(de=>de.role==="ultron").length;return{...P,[U]:[...oe,{role:"ultron",text:Oh(ce,fe)}]}}),z(P=>P.filter(oe=>oe!==U)),delete A.current[U]},vm);A.current[U]=B},stopReply:U=>{const Z=A.current[U];Z&&(window.clearTimeout(Z),delete A.current[U]),z(ce=>ce.filter(B=>B!==U))},refine:U=>{},saveWorkflow:U=>{const Z=U.id;f(Z),S(B=>({...B,[Z]:[...B[Z]??[],{role:"operator",text:"Save as workflow"}]})),z(B=>B.includes(Z)?B:[...B,Z]);const ce=window.setTimeout(()=>{S(B=>({...B,[Z]:[...B[Z]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),V(Z),z(B=>B.filter(P=>P!==Z)),delete A.current[Z]},vm);A.current[Z]=ce},pendingWorkflowIds:R,toggleWorkflowSave:L,savedWorkflowIds:F,markWorkflowSaved:V,revealedNewIds:H,revealNew:ee}}const kM={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function CM(e,o){const i=kM[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const _M={search:Ol,read:Ol,message:Ai,policy:Lo,shield:Lo,schedule:Lo,analytics:n6,clock:fn,monitor:Bi,bell:Ai,record:io,task:Lo},jM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},SM=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:jM[e.icon]??e.name,$M=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",xm={positive:0,chatting:1,muted:2},MM=p(Ug)`
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
`,NM=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Dh=240;function RM({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,f]=v.useState(e),[g,y]=v.useState(!1);if(v.useEffect(()=>{if(e){f(!0);let C=0;const M=requestAnimationFrame(()=>{C=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(M),cancelAnimationFrame(C)}}y(!1);const _=setTimeout(()=>f(!1),Dh);return()=>clearTimeout(_)},[e]),!h)return null;const x=s.length,w=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((_,C)=>({entry:_,index:C}));return Po.createPortal(n.jsxs(BM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(HM,{$shown:g,onClick:o}),n.jsxs(WM,{$shown:g,children:[n.jsxs(UM,{children:[n.jsxs(qM,{children:[n.jsx(VM,{children:i}),n.jsx(GM,{children:w})]}),n.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(To,{size:18})})]}),n.jsxs(YM,{children:[n.jsx(KM,{"aria-hidden":"true"}),n.jsx(Wg,{type:"single",collapsible:!0,value:l,onValueChange:_=>d(typeof _=="string"?_:""),children:k.map(({entry:_,index:C})=>{const M=_.updateData?sc:_M[_.icon];return n.jsx(MM,{value:String(C),label:SM(_),description:_.description,leadingSlot:n.jsx(NM,{"aria-hidden":"true",children:n.jsx(M,{size:18})}),children:n.jsx(QM,{children:n.jsx(LM,{entry:_})})},C)})})]})]})]}),document.body)}function LM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Channel"}),n.jsx(Cm,{children:e.channel})]}),e.message&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Message"}),n.jsx(wm,{children:e.message})]}),e.recordDetails&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Record details"}),n.jsx(ku,{children:e.recordDetails.map((o,i)=>n.jsx(jn,{size:"sm",label:o.label,trailingSlot:n.jsx(Cu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(cN,{children:e.policies.items.map((o,i)=>n.jsxs(dN,{children:[n.jsx(uN,{"aria-hidden":"true",children:n.jsx(en,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(AM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:`Threads · ${e.threads.total}`}),n.jsx(OM,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Recipient"}),n.jsx(hN,{children:n.jsx(jn,{size:"md",divider:!1,leadingSlot:n.jsx(rr,{size:"sm",src:Aa(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(lc,{size:14})})})})]}),n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Message"}),n.jsx(wm,{children:e.notification.message})]})]}),e.task&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Task"}),n.jsx(ku,{children:e.task.fields.map((o,i)=>n.jsx(jn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Ti,{status:"success",size:"sm",children:o.value}):n.jsx(Cu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(ku,{children:o.map((s,l)=>n.jsx(jn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(TM,{children:[n.jsx(EM,{children:s.previousValue}),n.jsx(IM,{"aria-hidden":"true",children:"→"}),n.jsx(PM,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Ti,{status:"success",size:"sm",children:s.value}):n.jsx(Cu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Recommendation"}),n.jsxs(pN,{children:[n.jsxs(bm,{children:[n.jsx(km,{children:"Incentive?"}),n.jsx(fN,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(bm,{children:[n.jsx(km,{children:"Reason"}),n.jsx(mN,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"Query"}),n.jsx(ZM,{children:e.query})]}),e.summary&&n.jsxs(Cn,{children:[n.jsx(Jt,{children:"What it does"}),n.jsx(Cm,{children:e.summary})]})]})}function AM({candidates:e,total:o,moreNoun:i}){var x;const[s,l]=v.useState(!1),d=e.slice(0,3),h=o-d.length,f=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>zM(k,f)):[],y=[...d,...g];return n.jsxs(n.Fragment,{children:[n.jsx(Fh,{children:y.map((w,k)=>n.jsx(jn,{size:"sm",leadingSlot:n.jsx(rr,{size:"sm",src:Aa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(eN,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(nv,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Fh=p.div`
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
`,ku=p(Fh)`
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
`,Cu=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,TM=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,EM=p.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,IM=p.span`
  color: var(--color-content-tertiary);
`,PM=p.span`
  color: var(--color-success-content);
`,ql=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Vl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function zM(e,o){const i=ql[e%ql.length],s=Vl[(e*7+3)%Vl.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const ym=3;function OM({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((x,w)=>xm[x.tone]-xm[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(x,w)=>FM(w))],g=o?f:f.slice(0,ym),y=f.length-ym;return n.jsxs(n.Fragment,{children:[n.jsx(Fh,{children:g.map((x,w)=>{var M;const k=!!((M=x.conversation)!=null&&M.length),_=`${x.name}-${w}`,C=k&&s===_;return n.jsxs(tN,{"data-open":C||void 0,children:[n.jsx(jn,{size:"md",interactive:k,onClick:k?()=>l(C?null:_):void 0,"aria-expanded":k?C:void 0,leadingSlot:n.jsx(rr,{size:"sm",src:Aa(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:n.jsxs(lN,{children:[n.jsx(Ti,{status:$M(x),size:"sm",children:x.status}),k?n.jsx(nN,{"data-open":C||void 0,children:n.jsx(Fn,{size:16})}):n.jsx(Sn,{size:16})]})}),C&&n.jsx(DM,{messages:x.conversation})]},_)})}),y>0&&n.jsx(nv,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function DM({messages:e}){return n.jsx(oN,{children:e.map((o,i)=>n.jsxs(aN,{$from:o.from,children:[n.jsx(iN,{children:o.text}),n.jsx(sN,{children:o.time})]},i))})}function FM(e){const o=ql[e%ql.length],i=Vl[(e*7+3)%Vl.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const BM=p.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,HM=p.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Dh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,WM=p.div`
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
  transition: transform ${Dh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,UM=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,qM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,VM=p.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,GM=p.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,YM=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,KM=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,QM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,Cn=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function ZM({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(XM,{children:[n.jsx(JM,{children:e}),n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(en,{size:14}):n.jsx(jg,{size:14})})]})}const XM=p.div`
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
`,JM=p.pre`
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
`,eN=p.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,tN=p.div``,nN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,rN=we`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,oN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${rN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,aN=p.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,iN=p.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,sN=p.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,lN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,nv=p.button`
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
`,cN=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,dN=p.li`
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
`,uN=p.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,wm=p.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,hN=p.div`
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
`,pN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,bm=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,km=p.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,fN=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,mN=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Cm=p.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function gN({milestones:e}){return n.jsx(jN,{children:e.map((o,i)=>n.jsx(wN,{milestone:o,last:i===e.length-1},i))})}function Gl({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:g,reasoning:y}){return n.jsx(vN,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:g,reasoning:y})}function vN({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:g=!1,reasoning:y=!1}){const[x,w]=v.useState(!1),C=g||y&&!d?e.length:0,M=C>0,N=M&&!x?C:0,$=e.slice(0,C).map(j=>j.headline).join(" · "),S=e.length>0&&N>=e.length;return n.jsx($N,{$animate:h,children:n.jsxs(NN,{$compact:S,children:[M&&!x&&n.jsx(Sm,{$tight:!0,$last:S,$connected:f,children:n.jsxs(av,{type:"button","aria-expanded":x,onClick:()=>w(j=>!j),children:[n.jsx(Nm,{"aria-hidden":"true",children:n.jsx(Dl,{size:16})}),n.jsx(HN,{children:$})]})}),e.slice(N).map((j,z)=>{var H,K;const A=N+z,R=d&&typeof i=="number"&&A>i,E=d&&typeof i=="number"&&A===i,L=R?"plan":E?"working":"done",F=!d||typeof i!="number"||A<i-1?"done":A===i-1?"working":"upcoming",q=!!((H=j.progress)!=null&&H.length),V=A===e.length-1;return n.jsxs(Sm,{$tight:!q,$last:V,$connected:f,children:[f&&!V&&F!=="upcoming"&&n.jsx(LN,{"aria-hidden":"true",$state:F,$tight:!q,$superseded:g}),n.jsx(ov,{milestone:j,label:CM(j.headline,L),last:!0,collapsible:!0,placeholder:R,focused:E,startOpen:!d&&x,onCollapse:M&&x&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:g,typing:A===o,extra:!R&&((K=j.usage)!=null&&K.length)?n.jsx(yN,{usage:j.usage,title:j.headline}):void 0,icon:y&&!d&&!R?n.jsx(Nm,{"aria-hidden":"true",children:n.jsx(Dl,{size:16})}):n.jsx(rv,{icon:j.icon,loading:o===A||E||d&&typeof i!="number"&&A===e.length-1,placeholder:R,muted:g})})]},A)}),!l&&!d&&n.jsx(ya,{time:hr(e)})]})})}const _m=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function xN(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=_m.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[_m[e],n.jsxs(MN,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function hr(e){const i=581+e.reduce((f,g)=>f+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function ya({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(AN,{"data-feedback-actions":!0,children:n.jsxs(ig,{visibility:"always",time:e,children:[n.jsx($m,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(Cg,{size:14})}),n.jsx($m,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(_g,{size:14})}),n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Fi,{size:14})})]})})}function yN({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(TN,{children:[n.jsxs(Oe,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Sn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(RM,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function wN({milestone:e,last:o}){return n.jsxs(ON,{children:[n.jsxs(DN,{children:[n.jsx(rv,{icon:e.icon}),!o&&n.jsx(qN,{})]}),n.jsx(ov,{milestone:e,last:o})]})}function bN({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(sR,{children:[l.map((h,f)=>n.jsx(tv,{record:h},f)),d>0&&n.jsx(lR,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function rv({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(Mm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(BN,{})}):n.jsx(Mm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(UN,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function ov({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:g,progressBeat:y,superseded:x,startOpen:w,onCollapse:k}){var V,H,K;const _=o??e.headline;if(f)return n.jsx(Lm,{$last:i,$dim:!0,children:n.jsxs(Pi,{as:"div",children:[l,n.jsx(Am,{children:_})]})});const C=!!((V=e.blocks)!=null&&V.length),M=!!h,N=!d||!!e.defaultOpen||!!w,[$,S]=v.useState(null),j=!!k,z=j?!0:$??N,A=d&&(C||M),R=!j&&A&&(!s||!!g),E=R&&!!g&&!!((H=e.progress)!=null&&H.length),L=()=>S(()=>!z),F=C&&(j||!d||z),q=M&&(j||!d||z);return n.jsxs(Lm,{$last:i,children:[n.jsxs(Pi,{as:j||A?"button":"div",type:j||A?"button":void 0,$interactive:j||R,"aria-expanded":j?!0:R?z:void 0,onClick:j?k:R?L:void 0,children:[l,n.jsx(Am,{$focused:!!g,children:_}),R&&!g&&n.jsx(VN,{"data-open":z||void 0,"aria-hidden":"true",children:n.jsx(Sn,{size:14})})]}),(K=e.progress)!=null&&K.length?n.jsx(KN,{$indent:!!l,children:n.jsxs(GN,{children:[E&&n.jsx(YN,{type:"button","aria-expanded":z,"aria-label":z?"Hide details":"Show details",onClick:L,children:z?n.jsx(kh,{size:16}):n.jsx(Ma,{size:16})}),n.jsx(CN,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:y,superseded:x,showAvatars:z||s||g})]})}):null,F&&n.jsx(rR,{$indent:!!l,children:e.blocks.map((ee,ae)=>n.jsxs(oR,{children:[ee.text&&n.jsx(aR,{children:s?n.jsx(Bh,{text:ee.text}):ee.text}),ee.label&&n.jsx(iR,{children:ee.label}),ee.bullets&&n.jsx(cR,{children:ee.bullets.map((se,le)=>n.jsx("li",{children:se},le))}),ee.checks&&n.jsx(dR,{children:ee.checks.map((se,le)=>n.jsxs("li",{children:[n.jsx(uR,{"aria-hidden":"true"}),n.jsx("span",{children:se})]},le))}),ee.records&&n.jsx(bN,{records:ee.records})]},ae))}),q&&n.jsx(EN,{$indent:!!l,children:h})]})}const kN=1350;function CN({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const g=e.length-1,y=typeof h=="number",[x,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(y||!k.current||x>=g)return;const N=setTimeout(()=>w($=>Math.min($+1,g)),kN);return()=>clearTimeout(N)},[x,g,y]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const _=typeof h=="number"?Math.min(h,g):x,C=_>=g,M=C&&!l;return n.jsxs(QN,{children:[n.jsx(XN,{$done:M,$live:l,$superseded:f,"aria-live":"polite",children:l?n.jsx(Bh,{text:e[_],caret:!1,speed:26}):e[_]},_),d&&(i?C:C||l)&&(o!=null&&o.length)?n.jsx(_N,{seeds:o,total:s}):null]})}const jm=90;function _N({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(JN,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>n.jsx(eR,{style:{zIndex:s.length-f,animationDelay:`${f*jm}ms`},children:n.jsx(rr,{size:"sm",src:Aa(h),name:h,alt:""})},h)),d>0&&n.jsxs(tR,{"aria-hidden":"true",style:{animationDelay:`${s.length*jm}ms`},children:["+",d]})]})}const jN=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,SN=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,mc=Pe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,$N=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${SN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${mc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MN=p.span``,NN=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Ta="var(--space-4)",Sm=p.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,RN=we`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,LN=p.span`
  position: absolute;
  /* Centered on the icon column — i.e. on the glyph itself. */
  left: calc(${Ta} / 2);
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
        animation: ${RN} 1.25s linear infinite;
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
`,AN=p.div`
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
`,TN=p.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,EN=p.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?`calc(${Ta} + var(--space-2))`:"0"};
`,$m=p(Oe)`
  &[data-active] { color: var(--color-content-brand); }
`;function Bh({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(PN,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(zN,{"aria-hidden":"true",children:e.slice(l)})]})}const IN=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,PN=p.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?IN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zN=p.span`
  opacity: 0;
`,ON=p.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,DN=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Mm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Width hugs the glyph so the marker lands on the row's left edge; height
     stays the 32px row pitch, which is what sets the trail's vertical rhythm. */
  width: ${Ta};
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,FN=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,BN=p.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${FN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,av=p.button`
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
`,iv=Pe`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,Nm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* The same column as every other leading marker in the trail (see ICON_COL),
     so the chevron sits on the row's left edge whether the group is folded to
     this one line or heading the steps below it — and either way shares the
     left margin of the cards the trail runs between. */
  width: ${Ta};
  height: var(--space-8);
  ${iv}
`,HN=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${iv}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${av}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,WN=we`
  to { transform: rotate(360deg); }
`,Rm=56.5,UN=p.svg`
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
    stroke-dasharray: ${Rm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?Rm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${WN} 2s linear infinite;
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
`,qN=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Lm=p.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Pi=p.div`
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
`,Am=p.span`
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

  ${Pi}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,VN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Pi}:hover &,
  ${Pi}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,GN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,YN=p.button`
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
`,KN=p.div`
  padding-left: ${e=>e.$indent?`calc(${Ta} + var(--space-2))`:"0"};
`,QN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,ZN=we`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,XN=p.div`
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
    animation: ${ZN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,JN=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,sv=we`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,eR=p.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${sv} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tR=p.span`
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
  animation: ${sv} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nR=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,rR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (ICON_COL + the header's --space-2 gap). */
  padding-left: ${e=>e.$indent?`calc(${Ta} + var(--space-2))`:"0"};
  animation: ${nR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,aR=p.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,iR=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,sR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,lR=p.button`
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
`,cR=p.ul`
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
`,dR=p.ul`
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
`,uR=p.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function hR({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const pR=160;function fR({captured:e=!1,onSubmit:o,onDismiss:i}){const[s,l]=v.useState(""),d=v.useRef(null),h=s.length>=10;v.useEffect(()=>{if(e)return;const g=window.requestAnimationFrame(()=>{var y;return(y=d.current)==null?void 0:y.focus()});return()=>window.cancelAnimationFrame(g)},[e]);const f=g=>{g.preventDefault(),!(!h||e)&&o(s)};return n.jsxs(vR,{onSubmit:f,"aria-label":"See Ultron handle real work",children:[n.jsx(xR,{"aria-hidden":"true"}),e&&n.jsx(yR,{type:"button","aria-label":"Close phone number confirmation",onClick:i,children:n.jsx(To,{size:18})}),n.jsxs(wR,{children:[n.jsxs(bR,{children:[n.jsx(kR,{"aria-hidden":"true"})," YOUR SETUP IS READY"]}),n.jsx(CR,{children:"Ready to see the real work?"}),n.jsx(_R,{children:"Add your mobile number to launch a live Ultron event and watch it work from detection through resolution."})]}),e?n.jsxs(LR,{role:"status",children:[n.jsx(fn,{size:22}),n.jsxs("span",{children:[n.jsx("strong",{children:"You’re in."})," Your live event is arriving now."]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(jR,{children:[n.jsxs(SR,{children:[n.jsx($R,{"aria-hidden":"true",children:"+1"}),n.jsx(MR,{ref:d,type:"tel",inputMode:"numeric",autoComplete:"tel",pattern:"[0-9]*",minLength:10,maxLength:15,value:s,placeholder:"Mobile number","aria-label":"Mobile number",onChange:g=>l(g.target.value.replace(/\D/g,""))})]}),n.jsx(NR,{type:"submit",variant:"tertiary",size:"lg",disabled:!h,children:"Launch"})]}),n.jsx(RR,{children:"One setup text, never spam. Msg & data rates may apply. Reply STOP to opt out."})]})]})}const lv=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,g]=v.useState(""),y=v.useRef(null),x=f.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var M;return(M=y.current)==null?void 0:M.focus()}}),[]);const w=()=>{const M=y.current;M&&(M.style.height="auto",M.style.height=`${Math.min(M.scrollHeight,pR)}px`)},k=()=>{!x||i||(o(f),g(""),requestAnimationFrame(()=>{const M=y.current;M&&(M.style.height="auto")}))},_=M=>{M.preventDefault(),k()},C=M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),k())};return n.jsxs(AR,{onSubmit:_,$compact:d,children:[n.jsx(TR,{ref:y,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:M=>{g(M.target.value),w()},onKeyDown:C}),i?n.jsx(Tm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(hR,{size:d?16:20})}):n.jsx(Tm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:n.jsx(ac,{size:d?14:18})})]})}),mR=we`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,gR=we`
  0%, 100% { opacity: 0.55; transform: scale(0.82); box-shadow: 0 0 0 0 rgb(110 231 183 / 0%); }
  50% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 7px rgb(110 231 183 / 0%); }
`,vR=p.form`
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
  animation: ${mR} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 600px) {
    gap: var(--space-3);
    padding: var(--space-5);
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xR=p.span`
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
`,yR=p.button`
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
`,wR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-right: var(--space-8);
`,bR=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: 0.08em;
  color: #a7f3d0;
`,kR=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6ee7b7;
  box-shadow: 0 0 14px rgb(110 231 183 / 78%);
  animation: ${gR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,CR=p.h2`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: var(--font-weight-semibold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #fff;
`,_R=p.p`
  max-width: 620px;
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 78%);
`,jR=p.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-2);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,SR=p.label`
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
`,$R=p.span`
  flex: 0 0 auto;
  padding-right: var(--space-3);
  margin-right: var(--space-3);
  border-right: 1px solid rgb(255 255 255 / 22%);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: rgb(226 232 255 / 64%);
`,MR=p.input`
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
`,NR=p(Oe)`
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
`,RR=p.p`
  margin: calc(var(--space-2) * -1) 0 0;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 48%);
`,LR=p.div`
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
`,AR=p.form`
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
`,TR=p.textarea`
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
`,Tm=p(Oe)`
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
`,ER=768,cv=`(max-width: ${ER-1}px)`;function Hh(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function Wh(){return Hh(cv)}const Em=450;function Uh(e,o){var C;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Ph[e.id],d=o===1&&!!l,h=d?l.prompt:Q2[e.id]??e.recommendation,f=d?l.record:X$[e.id],g=f?Array.isArray(f)?f:[f]:[],y=e.status==="unresolved"?P$:d?l.actions:e.actions,x=i&&(!d&&(((C=zh[e.id])==null?void 0:C.length)??0)>1||z$(h)),w=x?O$:y[y.length-1],k=x?[]:y.slice(0,-1),_=F2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:_}}function Im({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:g,onAction:y,onRefinement:x,onSaveWorkflow:w}){const[k,_]=v.useState(!1),[C,M]=v.useState(!1),{actionable:N,prompt:$,records:S,primaryLabel:j,purple:z}=Uh(e,o),R=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",L=!s&&(N||z),F=E&&!d,q=s?R:N||R||L,V=i&&(q||F),H=fc(e),ee=V2(e.id)||(V?"":e.assessment),ae=se=>{B2(se)?x(se):y(e.id,se)};return n.jsxs(GR,{"data-tone":H,$expanded:i,children:[n.jsxs(XR,{children:[n.jsxs(eL,{type:"button","aria-expanded":V,"aria-label":V?"Collapse case":"Expand case",onClick:h,children:[n.jsx(rr,{size:"md",src:Ih(e.id),name:$a[e.id],alt:$a[e.id]??""}),n.jsxs(mv,{children:[n.jsx(gv,{children:G2(e)}),ee&&n.jsx(vv,{children:ee})]})]}),n.jsx(JR,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":V?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?n.jsx(lc,{size:20}):V?n.jsx(Dl,{size:16}):n.jsx(kh,{size:16})})]}),V&&F&&n.jsx(tL,{children:n.jsx(nL,{children:n.jsx(gN,{milestones:Z2(e)})})}),V&&q&&n.jsxs(rL,{children:[N&&!s&&n.jsx(gc,{children:$}),N&&!s&&S.length>0&&n.jsx(yL,{children:S.map((se,le)=>n.jsx(tv,{record:se},le))}),R&&n.jsx(xv,{role:"status","aria-live":"polite",children:n.jsx(OR,{thread:e,onDecide:g})}),L&&n.jsxs(Vi,{children:[N&&j&&n.jsx(ao,{variant:"primary",size:"sm",onClick:()=>ae(Ul),children:Ul}),N&&n.jsx(ao,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&n.jsx(kv,{variant:"tertiary",size:"sm","data-selected":C||void 0,onClick:()=>{M(!0),x("Other")},children:"Other"}),z&&(k?n.jsx(Oe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(en,{size:14}),children:"Saved"}):n.jsx(Oe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Io,{size:14}),onClick:()=>{w(e),_(!0)},children:"Save as workflow"}))]})]})]})}function Pm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Bh,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function dv({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:g=!1,onSend:y,replying:x=!1,onStop:w,flat:k=!1}){const _=Wh(),C=d||h,[M,N]=v.useState(!1),[$,S]=v.useState(!1),[j]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[z,A]=v.useState(!1),[R,E]=v.useState(!1),L=v.useRef(null);v.useEffect(()=>{var T;R&&((T=L.current)==null||T.focus())},[R]);const F=d||g||z,{actionable:q,onFollowUp:V,prompt:H,records:K,primaryLabel:ee,purple:ae}=Uh(e,o),se=q&&!V?zh[e.id]??H2(H).map(T=>({label:T})):void 0,le=e.status==="resolved"||e.status==="auto_resolved",Q=ae||le,D=T=>{B2(T)?s(T):i(e.id,T)},Y=q&&!(se&&se.length>0)&&K.length>0?K[0]:void 0;if(Q&&!q){const T=ev[e.id],O=M||!T,ne=d&&!g&&!z;return n.jsxs(RL,{$divided:!0,children:[T&&n.jsx(LL,{children:n.jsx(Pm,{text:T,onDone:()=>N(!0),instant:j})}),O&&!ne&&n.jsxs(to,{$saved:F,"data-saved":F||void 0,children:[n.jsxs(Cv,{children:[n.jsx(_v,{"aria-hidden":"true",children:n.jsx(Io,{size:16})}),n.jsx(jv,{children:n.jsx(Pm,{text:"Want me to save this as a reusable workflow?",onDone:()=>S(!0),instant:j})})]}),$&&n.jsx(Sv,{children:F?_?n.jsx(Om,{variant:"primary",size:"sm",disabled:!0,iconOnly:!0,"aria-label":"Saved",children:n.jsx(en,{size:14})}):n.jsx(ao,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(en,{size:14}),children:"Saved"}):_?n.jsx(Om,{variant:"primary",size:"sm",iconOnly:!0,"aria-label":"Save workflow",onClick:()=>{A(!0),l(e)},children:n.jsx(en,{size:14})}):n.jsx(ao,{variant:"primary",size:"sm",onClick:()=>{A(!0),l(e)},children:"Save workflow"})})]}),O&&ne&&n.jsx(hv,{})]})}return n.jsxs(ZR,{$flat:k,"data-tone":fc(e),children:[q&&n.jsxs(pv,{children:[n.jsx(gc,{children:H}),Y&&n.jsx(fv,{children:n.jsx(rr,{size:"md",src:Aa(Y.avatarSeed),name:Y.title,alt:Y.title})})]}),se&&se.length>0?n.jsx(uv,{tasks:se}):null,n.jsxs(Vi,{children:[q&&ee&&n.jsx(ao,{variant:R?"secondary":"primary",size:"sm",onClick:()=>D(Ul),children:Ul}),q&&n.jsx(ao,{variant:R?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),q&&n.jsx(kv,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>E(!0),children:"Other"}),q&&!V&&n.jsx(NL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":C,"data-on":C||void 0,leadingArtwork:C?n.jsx(en,{size:14}):n.jsx(Io,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),q&&R&&n.jsx(ML,{children:n.jsx(lv,{ref:L,compact:!0,onSend:T=>y==null?void 0:y(T),working:x,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function IR({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:g=!1}){const y=fc(e),x=V2(e.id)||e.assessment;return n.jsxs(YR,{"data-tone":y,$expanded:i,children:[n.jsxs(KR,{$expanded:i,children:[n.jsx(rr,{size:"md",src:Ih(e.id),name:$a[e.id],alt:$a[e.id]??""}),n.jsxs(mv,{children:[n.jsx(gv,{children:G2(e)}),x&&n.jsx(vv,{children:x})]})]}),i&&n.jsx(QR,{children:n.jsx(dv,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:g})})]})}function uv({tasks:e,interactive:o=!0}){return n.jsx(wL,{children:e.map((i,s)=>n.jsx(PR,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function PR({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return n.jsxs(bL,{children:[n.jsx(kL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(CL,{})}),n.jsxs(_L,{children:[n.jsxs(jL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[n.jsx(wv,{children:e.label}),h&&n.jsx(SL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Sn,{size:14})})]}),l&&h&&n.jsx($L,{children:e.detail})]})]})}function zR({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(cL,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!o&&h===i-1,g=h===l.length-1;return n.jsxs(uL,{children:[n.jsxs(hL,{children:[n.jsx(vL,{$done:!f,"aria-hidden":"true",children:f?n.jsx(xL,{children:n.jsx(st,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(en,{size:16})}),!g&&n.jsx(pL,{})]}),n.jsxs(fL,{$last:g,children:[n.jsx(mL,{children:d.headline}),n.jsx(gL,{children:d.detail})]})]},h)})})}function OR({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(oL,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[n.jsx(st,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(iL,{children:[n.jsx(sL,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(lL,{children:e.assessment})]}),n.jsx(aL,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Sn,{size:14})})]}),d&&n.jsx(zR,{steps:K2(e.id),completed:i}),!i&&!l&&n.jsx(yv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function DR({thread:e,onDecide:o}){return n.jsx(yv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function _u(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:J2(o,dM(e))}}function FR(e,o){const i=J2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function BR(e,o){const i=Z2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[FR(K2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(dm[e.id]??[]).map(k=>_u(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Ph[e.id],g=[(dm[e.id]??[]).map(w=>_u(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>_u(w,e.id))],y=w=>w===1&&f?f.prompt:Q2[e.id]??e.recommendation,x=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:w}),(g[k]??[]).forEach(_=>x.push({kind:"activity",milestone:_})),x.push({kind:"reply",text:hM(k)})}),{items:x,reasoningCount:h}}function HR({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:g=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=BR(e,o),_=l||e.status==="in_progress",[C,M]=v.useState(l?Math.min(1,k):_?k:w.length),[N]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=o.length>0||y||x?w.length:k,S=e.status==="in_progress"&&o.length>0,[j,z]=v.useState(0);v.useEffect(()=>{z(0)},[C]),v.useEffect(()=>{if(C>=$)return;const B=w[C],P=w[C-1];if((B==null?void 0:B.kind)==="question"||(B==null?void 0:B.kind)==="message"){const de=setTimeout(()=>M(ve=>ve+1),0);return()=>clearTimeout(de)}if((B==null?void 0:B.kind)==="reply"){if(S)return;const de=setTimeout(()=>M(ve=>ve+1),Em);return()=>clearTimeout(de)}if(S&&(P==null?void 0:P.kind)!=="message")return;const oe=(P==null?void 0:P.kind)==="message"?Em:gm,fe=setTimeout(()=>M(de=>de+1),oe);return()=>clearTimeout(fe)},[C,$,S]),v.useEffect(()=>{if(!S)return;const B=P=>{var ke;if(P.key!=="t"&&P.key!=="T"||P.metaKey||P.ctrlKey||P.altKey)return;const oe=P.target instanceof Element?P.target:null;if(oe&&oe.closest('input, textarea, [contenteditable="true"]'))return;const fe=w[C-1],de=(fe==null?void 0:fe.kind)==="activity"?((ke=fe.milestone.progress)==null?void 0:ke.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&j<de-1){z(Se=>Se+1);return}const ve=w[C];(ve==null?void 0:ve.kind)==="activity"?(M(Se=>Se+1),z(0)):f==null||f()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[S,C,j,f]);const A=w.slice(0,C),R=[];for(const B of A){if(B.kind==="question"){R.push({type:"question",text:B.text});continue}if(B.kind==="message"){R.push({type:"msg",text:B.text});continue}if(B.kind==="reply"){R.push({type:"reply",text:B.text});continue}const P=R[R.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):R.push({type:"acts",milestones:[B.milestone]})}const E=C<w.length,L=A.length>0&&A[A.length-1].kind==="activity",F=C>=$,[q,V]=v.useState(!1);v.useEffect(()=>{if(!(F&&L&&(y||l)&&!x)){V(!1);return}V(!0);const B=setTimeout(()=>V(!1),gm);return()=>clearTimeout(B)},[F,L,C,y,l,x]);const H=(y||l)&&(E||q)&&L;let K=-1;R.forEach((B,P)=>{B.type==="acts"&&(K=P)});const ee=[];for(const B of w){if(B.kind!=="activity"){ee.push({type:"other"});continue}const P=ee[ee.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):ee.push({type:"acts",milestones:[B.milestone]})}let ae=-1;ee.forEach((B,P)=>{B.type==="acts"&&(ae=P)});const se=R.findIndex(B=>B.type==="acts"),le=(B,P,oe=P)=>{const fe=R[B],de=(l||e.status==="in_progress")&&B===ae,ve=ee[B],ke=de&&ve&&ve.type==="acts"?ve.milestones:fe.milestones,Se=de?fe.milestones.length-1:void 0;return n.jsx(Gl,{milestones:ke,focusIndex:Se,focusBeat:de&&S?j:void 0,typingIndex:B===ae&&H?fe.milestones.length-1:void 0,collapsed:B<K,hideActions:oe,running:de,showConnectors:B!==se,reasoning:B===se,animateIn:!P&&!N})},Q=[];for(let B=0;B<R.length;B++){const P=R[B];if(P.type==="question"){Q.push({kind:"question",text:P.text});continue}if(P.type==="msg"){Q.push({kind:"msg",text:P.text});continue}if(P.type==="reply"){Q.push({kind:"response",gi:-1,text:P.text});continue}const oe=R[B+1];oe&&oe.type==="reply"?(Q.push({kind:"response",gi:B,text:oe.text}),B++):Q.push({kind:"acts",gi:B})}const Y=(l||e.status==="in_progress")&&K>=0||s,T=A.length>0,O=s||y,ne=(()=>{for(let B=Q.length-1;B>=0;B--){const P=Q[B];if(P.kind==="acts"||P.kind==="response"&&P.gi>=0)return B}return-1})(),U=Q.findIndex(B=>B.kind==="question"),Z=U===se+1?U:-1,ce=B=>B.kind==="acts"?hr(R[B.gi].milestones):B.kind==="response"?hr(B.gi>=0?R[B.gi].milestones:[]):hr([]);return n.jsxs(n.Fragment,{children:[Q.map((B,P)=>{var ve,ke;const oe=P===ne?d:null;if(B.kind==="question"){if(P===Z)return null;const Se=Q[P-1],Me=!!Se&&(Se.kind==="acts"||Se.kind==="response")&&P-1!==ne,Le=P===U;return n.jsxs(Su,{children:[Le?n.jsx(zm,{thread:e,saveWorkflowFlagged:g}):n.jsx(qR,{text:B.text,animate:!N}),Me&&n.jsx(ya,{time:ce(Se)})]},`q${P}`)}if(B.kind==="msg")return n.jsx(VR,{messages:[B.text],animate:!N},`m${P}`);if(B.kind==="acts"){const Se=R[B.gi].milestones,Me=((ve=Q[P+1])==null?void 0:ve.kind)==="question",Le=le(B.gi,!1,!!oe||Me),De=P===se,Be=oe||(De&&P+1===Z?n.jsx(zm,{thread:e,saveWorkflowFlagged:g}):null);return De&&Be?n.jsxs(UL,{children:[Le,Be,n.jsx(ya,{time:hr(Se)})]},`a${P}`):n.jsxs(v.Fragment,{children:[Le,oe&&n.jsxs(Su,{children:[oe,n.jsx(ya,{time:hr(Se)})]})]},`a${P}`)}const fe=B.gi>=0,de=fe?R[B.gi].milestones:[];return n.jsxs(v.Fragment,{children:[n.jsx(th,{activity:fe?le(B.gi,!0):void 0,text:B.text,feedbackTime:oe||((ke=Q[P+1])==null?void 0:ke.kind)==="question"?void 0:hr(de),showMark:!1,animateIn:!1}),oe&&n.jsxs(Su,{children:[oe,n.jsx(ya,{time:hr(de)})]})]},`resp${P}`)}),n.jsx(WR,{messages:i,replying:s}),h&&Po.createPortal(T?n.jsxs(DL,{role:O?"status":"img","aria-label":s?"Ultron is replying":Y?"Ultron is working":"Ultron",children:[n.jsxs(HL,{"aria-hidden":"true",children:[n.jsx(Dm,{$show:Y,children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Dm,{$show:!Y,children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:O?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),Y&&n.jsx(BL,{children:s?"Replying…":n.jsx(xN,{})})]}):null,h),ne<0&&d]})}function th({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return n.jsxs(WL,{children:[f&&n.jsxs(qL,{$animate:h,children:[e,i,s&&n.jsx(ya,{time:s})]}),d&&n.jsx(VL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function ju(){return[{icon:"clock",headline:"Reviewed your message"}]}function WR({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(OL,{children:e.map((i,s)=>i.role==="operator"?n.jsx($v,{children:n.jsx(Nv,{children:n.jsx(Rv,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(th,{body:n.jsx(UR,{}),feedbackTime:hr(ju()),showMark:!1},s):n.jsx(th,{activity:n.jsx(Gl,{milestones:ju(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:hr(ju()),showMark:!1},s))})}function UR(){return n.jsx(hv,{})}function hv(){return n.jsxs(to,{children:[n.jsxs(Cv,{children:[n.jsx(_v,{"aria-hidden":"true",children:n.jsx(Io,{size:16})}),n.jsx(jv,{children:"Workflow saved for future use."})]}),n.jsx(Sv,{children:n.jsx(ao,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(lc,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function qR({text:e,animate:o=!0}){return n.jsx(TL,{$animate:o,children:e})}function zm({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Uh(e,0),l=zh[e.id]??H2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(EL,{"data-tone":fc(e),children:[n.jsxs(pv,{children:[n.jsx(gc,{children:i}),o?n.jsx(Rr,{content:"Saved as workflow",children:n.jsx(IL,{"aria-label":"Saved as workflow",children:n.jsx(Io,{size:18})})}):d&&n.jsx(fv,{children:n.jsx(rr,{size:"md",src:Aa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(uv,{tasks:l,interactive:!1}):null]})}function VR({messages:e,animate:o=!0}){return e.length?n.jsx(PL,{children:e.map((i,s)=>n.jsx($v,{children:n.jsx(Nv,{$animate:o,children:n.jsx(Rv,{children:i})})},s))}):null}const GR=p.div`
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
`,YR=p.div`
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
`,KR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Pe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,QR=p.div`
  padding: var(--space-4);
`,ZR=p.div`
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
`,pv=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,fv=p.span`
  flex-shrink: 0;
  display: inline-flex;
`,XR=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,JR=p(Oe)`
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
`,eL=p.button`
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
`,mv=p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,gv=p.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,vv=p.span`
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
`,tL=p.div`
  overflow: hidden;
`,nL=p.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,rL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,xv=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,oL=p.div`
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
`,aL=p.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;p(xv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const iL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,sL=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,lL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,cL=p.div`
  display: flex;
  flex-direction: column;
`,dL=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,uL=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${dL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hL=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,pL=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,fL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,mL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,gL=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,vL=p.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,xL=p.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,yv=p(Oe)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,yL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,wL=p.div`
  display: flex;
  flex-direction: column;
`,Yl="var(--space-8)",bL=p.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,kL=p.div`
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
  &[data-first]::before { top: calc(${Yl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Yl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,CL=p.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Yl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,_L=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,jL=p.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Yl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,wv=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,SL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,$L=p.p`
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
`,bv=we`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Vi=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${bv} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=p.div`
  animation: ${bv} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ao=p(Oe)`
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
    ${Vi} > & {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`,kv=p(Oe)`
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
    ${Vi} > & {
      flex: 0 0 100%;
    }
  }
`,NL=p(Oe)`
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
`,RL=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,LL=p.p`
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

  ${e=>!e.$saved&&Pe`
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
`,_v=p.span`
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
`,jv=p.p`
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
`,Sv=p(Vi)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,Om=p(ao)`
  && {
    width: 44px;
    height: 44px;
    min-height: 44px;
    padding: 0;
  }
  align-self: center;
  flex-shrink: 0;
`,AL=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,TL=p.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${AL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EL=p.div`
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
  ${wv} { color: var(--color-content-disabled); }
`,IL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,PL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,$v=p.div`
  display: flex;
  justify-content: flex-end;
`,qh=we`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,Mv=we`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,zL=we`
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
  animation: ${qh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Rv=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,OL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;p.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const DL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${Mv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FL=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,BL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${FL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HL=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Dm=p.span`
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
`,WL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${mc}
`,Su=p.div`
  display: contents;
  ${mc}
`,UL=p.div`
  display: flex;
  flex-direction: column;
  ${mc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,qL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${zL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,VL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${Mv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${qh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${qh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const Fm=72,Bm=.58;function On(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Hm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),g=parseInt(f.length===3?f.split("").map(y=>y+y).join(""):f,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const GL=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function Vh({links:e=0,tone:o="aurora",cornerTone:i="default"}){const s=v.useRef(null),l=v.useRef(0),d=v.useRef(e);return d.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const h=s.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const g=Math.min(2,window.devicePixelRatio||1);let y=0,x=0;const w=()=>{y=h.clientWidth,x=h.clientHeight,h.width=Math.max(2,Math.round(y*g)),h.height=Math.max(2,Math.round(x*g)),f.setTransform(g,0,0,g,0,0)};w();const k=new ResizeObserver(w);k.observe(h);const _=Hm(f,h,"--color-bg-primary","255,255,255"),C=GL(_)<.5,M=Hm(f,h,"--color-content-tertiary",C?"148,163,184":"71,85,105"),N=Array.from({length:Fm},(E,L)=>{const F=L%3===0,q=F?1-.5*Math.pow(On(L*3.1),1.6):On(L*3.1),V=F?.5*Math.pow(On(L*5.7),1.6):On(L*5.7);return{bx:q,by:V,vx:(On(L*7.3)-.5)*.008,vy:(On(L*9.9)-.5)*.008,wA:6+On(L*4.7)*10,wS:.25+On(L*6.1)*.5,wP:On(L*8.2)*6.2832,r:.8+On(L*2.3)*1.6,twS:.8+On(L)*1.4,twP:On(L*11.4)*6.2832}}),$=(E,L)=>{const F=((E.bx+E.vx*L)%1+1)%1,q=((E.by+E.vy*L)%1+1)%1,V=F-.5,H=Math.abs(V)*2,K=H<1e-4?1:(Bm+(1-Bm)*H)/H;return{x:(.5+V*K)*y+Math.cos(L*E.wS+E.wP)*E.wA,y:q*x+Math.sin(L*E.wS*.8+E.wP)*E.wA}},S=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),j=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),f.clearRect(0,0,y,x);const L=N.map(F=>$(F,E));for(let F=0;F<Fm;F++){const q=N[F],V=.35+.65*(.5+.5*Math.sin(E*q.twS+q.twP)),H=.82+l.current*.18;f.fillStyle="rgba("+M+","+V*H*(C?.55:.42)+")",f.beginPath(),f.arc(L[F].x,L[F].y,q.r*(.7+.3*V),0,6.2832),f.fill()}};if(S)return l.current=d.current,j(1.15),()=>k.disconnect();j(1.15);let z=0;const A=performance.now(),R=E=>{j(1.15+(E-A)/1e3),z=requestAnimationFrame(R)};return z=requestAnimationFrame(R),()=>{cancelAnimationFrame(z),k.disconnect()}},[]),n.jsx(YL,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:i==="risk",children:n.jsx("canvas",{ref:s})})}const YL=p.div`
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
  ${e=>e.$neutral&&Pe`
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
`,Bn=Pe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Lv=Pe`
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
`;const KL=p.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,gl=p.div`
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
`,Wm=.025,bi=560,ki=480,QL=260,ZL=.08,XL=.18,JL=.06,eA=350,tA=9,vl=[168,197,224,250,285,330,390],nA=e=>{const o=vl.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(vl[s]+(vl[s+1]-vl[s])*(i-s))%360},Tl=5,Um=360,rA=560,oA=.055,aA=.03,Ci=320,iA=.84,nh=Tl+1,El=[];for(let e=0;e<nh;e++)for(let o=e+1;o<nh;o++)El.push([e,o]);const qm=(e,o)=>nA((e*tA+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),xl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Vm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),$u=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function Gh({tone:e="color"}={}){const o=v.useRef(null),i=v.useRef(null),s=v.useRef([]),l=v.useRef([]),d=v.useRef([]);return v.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),f=o.current,g=i.current;if(!f||!g)return;const y=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,w=Array.from({length:Tl},()=>({size:Um+Math.random()*(rA-Um),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));w.forEach((L,F)=>{const q=l.current[F];q&&(q.style.width=`${L.size.toFixed(0)}px`,q.style.height=`${L.size.toFixed(0)}px`)});const k=(L,F,q)=>{L.style.setProperty("--glow-ha",qm(F,y[0]+q).toFixed(1)),L.style.setProperty("--glow-hb",qm(F,y[1]+q*1.3).toFixed(1)),L.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(F*.17+y[2]*1.9+q)))%360).toFixed(1)),L.style.setProperty("--glow-cx",`${(35+14*Math.sin(F*.4+y[2]+q)).toFixed(1)}%`),L.style.setProperty("--glow-cy",`${(35+14*Math.cos(F*.31+y[3]+q)).toFixed(1)}%`)},_=(L,F,q)=>{const V=new Array(nh).fill(null);for(let H=0;H<Tl;H++){const K=w[H],ee=l.current[H];if(!ee)continue;const ae=F*(.5+K.ax*(.68*Math.sin(L*K.sx1+K.px1)+.32*Math.sin(L*K.sx2+K.px2))),se=q*(.5+K.ay*(.68*Math.sin(L*K.sy1+K.py1)+.32*Math.sin(L*K.sy2+K.py2))),le=oA+aA*(.5+.5*Math.sin(L*K.bs+K.bp));ee.style.transform=`translate(${(ae-K.size/2).toFixed(1)}px, ${(se-K.size/2).toFixed(1)}px)`,ee.style.opacity=le.toFixed(3),ee.style.borderRadius=xl(L,K.mp),k(ee,L,K.cs),V[H+1]={x:ae,y:se,size:K.size,o:le}}return V},C=(L,F)=>{for(let q=0;q<El.length;q++){const V=d.current[q];if(!V)continue;const[H,K]=El[q],ee=F[H],ae=F[K],se=ee&&ae?Math.min(ee.o,ae.o):0;if(!ee||!ae||se<=.005){V.style.opacity="0";continue}const le=ae.x-ee.x,Q=ae.y-ee.y,D=Math.hypot(le,Q),Y=(ee.size+ae.size)/2*iA,T=Vm(1-D/Y);if(T<=.001){V.style.opacity="0";continue}const O=Math.max(.35,D*.9/Ci),ne=.3+.4*T;V.style.transform=`translate(${((ee.x+ae.x)/2-Ci/2).toFixed(1)}px, ${((ee.y+ae.y)/2-Ci/2).toFixed(1)}px) rotate(${Math.atan2(Q,le).toFixed(3)}rad) scale(${O.toFixed(3)}, ${ne.toFixed(3)})`,V.style.opacity=(se*T).toFixed(3),V.style.borderRadius=xl(L,1.1*(q+1)),k(V,L,.23*(q+1))}};if(h){const F=_(2.4,f.clientWidth,f.clientHeight);C(2.4,F);return}let M=null,N=null,$=-1/0,S=0,j=0,z=0;const A=L=>{const F=f.getBoundingClientRect(),q=M===null;M=L.clientX-F.left,N=L.clientY-F.top,$=L.timeStamp,q&&(S=M,j=N)};window.addEventListener("pointermove",A,{passive:!0});let R=0;const E=L=>{R=requestAnimationFrame(E);const F=L/1e3,q=f.clientWidth,V=f.clientHeight,H=_(F,q,V);if(M!==null&&N!==null){S+=(M-S)*Wm,j+=(N-j)*Wm;const K=L-$<eA?XL:ZL;z+=(K-z)*JL,g.style.transform=`translate(${S-bi/2}px, ${j-bi/2}px)`,g.style.opacity=z.toFixed(3),g.style.borderRadius=xl(F,0),k(g,F,0),H[0]={x:S,y:j,size:bi,o:z};for(let ee=0;ee<$u.length;ee++){const ae=s.current[ee];if(!ae)continue;const{nx:se,ny:le}=$u[ee],Q=se<0?S:se>0?q-S:le<0?j:V-j,D=Vm(1-Q/QL);if(D<=.001){ae.style.opacity="0";continue}const Y=se!==0?se<0?0:q:S,T=le!==0?le<0?0:V:j,O=ki*(.5-.22*D),ne=.55+.45*D;ae.style.transform=`translate(${Y+se*O-ki/2}px, ${T+le*O-ki/2}px) scale(${ne.toFixed(3)})`,ae.style.opacity=(z*D).toFixed(3),ae.style.borderRadius=xl(F,.9*(ee+1)),k(ae,F,.35*(ee+1))}}C(F,H)};return R=requestAnimationFrame(E),()=>{cancelAnimationFrame(R),window.removeEventListener("pointermove",A)}},[]),n.jsxs(KL,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[El.map((h,f)=>n.jsx(gl,{ref:g=>{d.current[f]=g},style:{width:Ci,height:Ci,opacity:0}},`bridge-${f}`)),Array.from({length:Tl},(h,f)=>n.jsx(gl,{ref:g=>{l.current[f]=g},style:{opacity:0}},`ambient-${f}`)),$u.map((h,f)=>n.jsx(gl,{ref:g=>{s.current[f]=g},style:{width:ki,height:ki,opacity:0}},f)),n.jsx(gl,{ref:i,style:{width:bi,height:bi,opacity:0}})]})}const Gm=.71,Av=.24,Tv=Pe`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${Av}em;
`,sA={"Coverage Recovery":no,"Fill Optimization":no,Recruiting:no,Users:no,Attendance:_n,"Attendance Recovery":_n,"Time Off":_n,Scheduling:_n,Compliance:Bi,Onboarding:Lo,"Payroll Operations":kg,Invoicing:io,Reporting:Ff,"Marketplace Optimization":Ff,Engagement:Ai,"Autonomous Operations":rc},lA=e=>sA[e]??rc,Ym=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],cA=2800,dA=200,uA=6,hA=2200,Mi=520;function pA({onDetectEvent:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[f,g]=v.useState(!1),y=v.useRef(null);v.useEffect(()=>{const A=setInterval(()=>l(R=>(R+1)%Ym.length),cA);return()=>clearInterval(A)},[]);const x=Math.min(uA,ml.length),[w,k]=v.useState([]),_=v.useRef(0),C=v.useRef(ml.filter(A=>!A.risk)),M=v.useRef(ml.filter(A=>A.risk)),N=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),S=()=>{const A=N.current,R=M.current;if(R.length>0&&A.sinceRisk>=A.gap)return A.sinceRisk=0,A.gap=$(),R[A.risk++%R.length];A.sinceRisk+=1;const E=C.current;return E.length>0?E[A.routine++%E.length]:R[A.risk++%R.length]},j=A=>A.risk?"risk":Math.random()<.28?"action":"none",z=v.useRef(null);return v.useEffect(()=>{if(ml.length===0){k([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:$()},_.current=0;const A=Array.from({length:x},()=>{const L=S();return{key:_.current++,event:L,phase:"in",outcome:j(L),resolved:!0}});if(A.length>0){const L=A[A.length-1];L.resolved=!1,z.current={key:L.key,event:L.event,outcome:L.outcome}}else z.current=null;k(A),A.forEach(L=>{var F;L.resolved&&L.outcome!=="none"&&!h.current.has(L.event.id)&&(h.current.add(L.event.id),(F=d.current)==null||F.call(d,L.event))});const R=[],E=setInterval(()=>{var H;const L=S(),F=_.current++,q=j(L),V=z.current;V&&V.outcome==="risk"&&(g(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>g(!1),2800)),V&&V.outcome!=="none"&&(h.current.has(V.event.id)||(h.current.add(V.event.id),(H=d.current)==null||H.call(d,V.event))),z.current={key:F,event:L,outcome:q},k(K=>{const ee=K.filter(le=>le.phase!=="leaving"),ae=ee.length>=x?ee[0].key:null;return[...K.map(le=>le.key===ae?{...le,phase:"leaving"}:V&&le.key===V.key&&!le.resolved?{...le,resolved:!0}:le),{key:F,event:L,phase:"entering",outcome:q,resolved:!1}]}),R.push(setTimeout(()=>{k(K=>K.map(ee=>ee.key===F?{...ee,phase:"in"}:ee))},40)),R.push(setTimeout(()=>{k(K=>K.filter(ee=>ee.phase!=="leaving"))},Mi))},hA);return()=>{clearInterval(E),R.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,o]),n.jsxs(fA,{children:[n.jsx(Vh,{links:0,tone:"neutral",cornerTone:f?"risk":"default"}),n.jsx(Gh,{tone:"neutral"}),n.jsx(mA,{$riskActive:f,"aria-hidden":"true"}),n.jsxs(gA,{children:[n.jsx(vA,{children:n.jsx(st,{mark:"circle",size:dA,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),n.jsx(xA,{children:"Ultron"}),n.jsx(yA,{role:"status","aria-live":"polite",children:n.jsxs(bA,{children:[n.jsx(kA,{children:Ym[s]}),n.jsxs(CA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(jA,{children:i},"deck"):w.length>0&&n.jsx(_A,{"aria-label":"Live event feed",children:w.map(A=>{const R=lA(A.event.capability);return n.jsx(SA,{"data-phase":A.phase,"aria-hidden":A.phase==="leaving"||void 0,children:n.jsx($A,{children:n.jsxs(MA,{"data-outcome":A.resolved?A.outcome:"pending",children:[n.jsxs(NA,{children:[n.jsx(RA,{"aria-hidden":"true",children:n.jsx(R,{size:16})}),n.jsxs(LA,{children:[n.jsx(PA,{children:A.event.capability}),n.jsx(zA,{children:A.event.title})]})]}),n.jsx(AA,{children:A.resolved?A.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(st,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(TA,{children:"Risk detected"})]}):A.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(st,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(IA,{children:"Action required"})]}):n.jsx(EA,{children:"No action needed"}):n.jsx(st,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},A.key)})},"feed")]})}const fA=p.div`
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
`,mA=p.div`
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
`,Yh=we`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,gA=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Yh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vA=p.div`
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
`,xA=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Tv}
  color: var(--color-content-primary);
`,yA=p.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,wA=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,bA=p.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${wA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,Ev=we`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,CA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Ev} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,_A=p.div`
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
  animation: ${Yh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jA=p.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Yh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SA=p.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Mi}ms var(--ease-out, ease),
    opacity ${Mi}ms var(--ease-out, ease),
    transform ${Mi}ms var(--ease-out, ease);

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
    transition: opacity ${Mi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,$A=p.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,MA=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  /* Glass rather than a flat fill, so the backdrop and glow behind the feed
     refract through each row. */
  ${Bn}
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
`,NA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,RA=p.span`
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
`,LA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,AA=p.div`
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
    animation: ${Ev} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const TA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,EA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,IA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,PA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,zA=p.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,OA=5e3,DA=5,Il=320,FA=e=>e.status==="needs_approval"||e.status==="recommended";function BA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:g,onClose:y}){const[x]=v.useState(()=>e.filter(FA).map((R,E)=>({t:R,index:E})).sort((R,E)=>Sa[R.t.severity]-Sa[E.t.severity]||R.index-E.index).slice(0,DA).map(({t:R})=>R.id)),[w,k]=v.useState(1),[_,C]=v.useState(new Set),[M,N]=v.useState(new Set),$=v.useRef(new Map);v.useEffect(()=>{if(w>=x.length)return;const R=setTimeout(()=>k(E=>E+1),OA);return()=>clearTimeout(R)},[w,x.length]),v.useEffect(()=>{const R=E=>{E.key==="Escape"&&y()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[y]),v.useEffect(()=>{const R=$.current;return()=>{R.forEach(E=>clearTimeout(E))}},[]);const S=x.findIndex(R=>!_.has(R));v.useEffect(()=>{if(x.length>0&&S===-1){const R=setTimeout(y,260);return()=>clearTimeout(R)}},[S,x.length,y]);const j=Math.max(w,S+1);v.useEffect(()=>{x.slice(0,j).forEach(R=>g==null?void 0:g(R))},[j]);const z=(R,E)=>{N(F=>new Set(F).add(R.id));const L=setTimeout(()=>{N(F=>{const q=new Set(F);return q.delete(R.id),q}),C(F=>new Set(F).add(R.id)),$.current.delete(R.id),i(R.id,E)},Il);$.current.set(R.id,L)},A=x.length-_.size;return n.jsxs(HA,{role:"region","aria-label":"New cases",children:[n.jsxs(UA,{children:[n.jsx(Jt,{children:"Needs your decision"}),n.jsx(Oo,{children:A}),n.jsx(qA,{}),n.jsx(Oe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:n.jsx(To,{size:16})})]}),n.jsx(WA,{children:n.jsx(VA,{children:x.slice(0,j).map((R,E)=>{if(_.has(R))return null;const L=e.find(F=>F.id===R);return L?n.jsx(YA,{"data-exiting":M.has(R)||void 0,children:n.jsx(IR,{thread:L,stage:o[R]??0,expanded:E===S,onAction:(F,q)=>z(L,q),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(R),saved:f.includes(R)})},R):null})})})]})}const HA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,WA=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,UA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,qA=p.div`
  flex: 1;
`,VA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,GA=we`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,YA=p.div`
  animation: ${GA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Il}ms var(--ease-out, ease),
    transform ${Il}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Il}ms linear;
    &[data-exiting] { transform: none; }
  }
`,KA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Km={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},QA=["new","working","done"],ZA=280;function XA({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:g,onCompleteRun:y,onRefinement:x,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:_,savedWorkflowIds:C,onSend:M,replyingIds:N,onStop:$,onClose:S,onDetectEvent:j,onRevealNew:z}){const[A,R]=v.useState(!1),E=()=>{A||(R(!0),window.setTimeout(()=>{R(!1),S()},ZA))},[L,F]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){F(!1);return}const P=oe=>{if(oe.key!=="t"&&oe.key!=="T"||oe.metaKey||oe.ctrlKey||oe.altKey)return;const fe=oe.target instanceof Element?oe.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||F(de=>!de)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[i]);const q=(P,oe)=>(P.t.status==="analyzing"?1:0)-(oe.t.status==="analyzing"?1:0)||Sa[P.t.severity]-Sa[oe.t.severity]||P.index-oe.index,V=e.map((P,oe)=>({t:P,index:oe})).filter(({t:P})=>KA[i].includes(P.status)).sort(q).map(({t:P})=>P.id),[H,K]=v.useState(()=>h??null),ee=v.useRef({}),ae=v.useRef(null),se=P=>{var oe;P==="Other"&&((oe=ae.current)==null||oe.focus()),x(P)},le=v.useRef(null),Q=v.useRef(null),[D,Y]=v.useState(null),T=v.useRef(void 0);v.useEffect(()=>{var P;if(T.current===void 0){T.current=h;return}!h||h===T.current||(T.current=h,K(h),(P=ee.current[h])==null||P.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const O=QA.includes(i),ne=O?h&&V.includes(h)?h:V[0]??null:null;v.useEffect(()=>{var ze;const P=le.current,oe=Q.current;if(!P||!oe)return;const de=((ze=window.matchMedia)==null?void 0:ze.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ve=160;let ke=!0,Se=P.scrollHeight;const Me=()=>{ke=P.scrollHeight-P.scrollTop-P.clientHeight<=ve};P.addEventListener("scroll",Me,{passive:!0});let Le=0;const De=()=>{Le=performance.now()};P.addEventListener("pointerdown",De,{passive:!0});const Be=new ResizeObserver(()=>{const Ke=P.scrollHeight,Je=performance.now()-Le<500;Ke>Se+1&&ke&&!Je&&P.scrollTo({top:Ke,behavior:de}),Se=Ke});return Be.observe(oe),()=>{P.removeEventListener("scroll",Me),P.removeEventListener("pointerdown",De),Be.disconnect()}},[ne,i]),v.useEffect(()=>{if(!O||!ne)return;const P=le.current;if(!P)return;const oe=()=>P.scrollTo({top:P.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(oe),de=[80,240,480].map(ve=>window.setTimeout(oe,ve));return()=>{cancelAnimationFrame(fe),de.forEach(clearTimeout)}},[ne,O]);const U=ne?e.find(P=>P.id===ne)??null:null,Z=!!U&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(U.status)||F2(U)),ce=Z&&U?U:null,B=!(Z&&U&&["needs_approval","recommended","unresolved","monitoring"].includes(U.status))||!!(U!=null&&U.analysisResult);return i==="live"?n.jsx(Qm,{$static:!0,children:n.jsx(pA,{onDetectEvent:j,deckActive:L,deck:L?n.jsx(BA,{threads:e,stageById:o,onAction:g,onRefinement:se,onSaveWorkflow:w,onToggleSaveWorkflow:_,pendingWorkflowIds:k,savedWorkflowIds:C,onReveal:z,onClose:()=>F(!1)}):null})},"live"):n.jsxs(Qm,{$closing:A,children:[n.jsx(tT,{ref:le,children:O?n.jsx(Zm,{ref:Q,children:ne===null?n.jsx(Xm,{role:"status",children:Km[i]}):(()=>{const P=e.find(Me=>Me.id===ne);if(!P)return null;const oe=P.status==="analyzing",fe=P.status==="resolved"||P.status==="auto_resolved",de=P.status==="in_progress",ve=P.status==="needs_approval"||P.status==="recommended",ke=P.status==="monitoring",Se=P.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(iT,{children:n.jsx(Im,{thread:P,stage:o[P.id]??0,expanded:de?!1:B,detachActionable:Z,detachAnalyzing:oe,detachTrail:fe||Se,onToggle:()=>{},onClose:E,onDecide:f,onAction:g,onRefinement:se,onSaveWorkflow:w},P.id)}),(oe||ve||de||fe||ke||Se)&&n.jsx(HR,{thread:P,outbound:l[P.id]??[],chat:d[P.id]??[],replying:N.includes(P.id),analyzing:oe,footSlot:D,onCompleteRun:()=>y(P.id),saveWorkflowFlagged:k.includes(P.id)||C.includes(P.id),actionCard:ce&&ce.id===P.id?n.jsx(dv,{thread:ce,stage:o[ce.id]??0,onAction:g,onRefinement:se,onSaveWorkflow:w,saveIntent:k.includes(ce.id),onToggleSaveWorkflow:_,saved:C.includes(ce.id),savedConversationally:(d[ce.id]??[]).some(Me=>Me.kind==="workflow_saved"),onSend:Me=>M(ce.id,Me),replying:N.includes(ce.id),onStop:()=>$(ce.id)},`action-${ce.id}`):void 0},P.id)]})})()}):n.jsx(Zm,{ref:Q,children:V.length===0?n.jsx(Xm,{role:"status",children:Km[i]}):V.map(P=>{const oe=e.find(fe=>fe.id===P);return oe?n.jsx(aT,{ref:fe=>{ee.current[P]=fe},children:n.jsx(Im,{thread:oe,stage:o[P]??0,expanded:H===P,onToggle:()=>K(fe=>fe===P?null:P),onDecide:f,onAction:g,onRefinement:x,onSaveWorkflow:w})},P):null})})}),O&&ne&&U&&n.jsx(nT,{children:n.jsxs(rT,{children:[n.jsx(oT,{ref:Y}),U.status==="analyzing"&&!s.includes(U.id)&&n.jsx(DR,{thread:U,onDecide:f}),n.jsx(lv,{ref:ae,onSend:P=>M(ne,P),working:N.includes(ne),onStop:()=>$(ne),placeholder:I$(U.status,N.includes(ne))},`composer-${ne}`)]})})]},"feed")}const JA=we`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,eT=we`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Qm=p.div`
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
    animation: ${eT} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Pe`
    animation: ${JA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tT=p.div`
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
`,nT=p.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);

  /* Mobile shell: the dock's screen-edge insets follow the scroller down to
     12px; the top keeps its full gap — it separates dock from feed, not dock
     from screen. */
  @media (max-width: 767px) {
    padding: var(--space-6) var(--space-3) var(--space-3);
  }
`,rT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,oT=p.div`
  display: flex;
  &:empty { display: none; }
`,Zm=p.div`
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
`,aT=p.div`
  scroll-margin-top: var(--space-5);
`,iT=p.div`
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
`,Xm=p.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function sT({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,f=e.length===0,g=()=>{const y=s.trim();!y||o||(i(y),l(""))};return n.jsxs(lT,{children:[n.jsx(cT,{children:f?n.jsxs(dT,{children:[n.jsx(uT,{"aria-hidden":"true",children:n.jsx(st,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(hT,{children:"New page"}),n.jsx(pT,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(fT,{children:[e.map((y,x)=>n.jsx(Jm,{"data-from":y.role,children:n.jsx(mT,{"data-from":y.role,children:y.text})},x)),o&&n.jsx(Jm,{"data-from":"ultron",children:n.jsxs(vT,{"aria-label":"Ultron is replying",children:[n.jsx(Mu,{}),n.jsx(Mu,{}),n.jsx(Mu,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(xT,{children:n.jsxs(yT,{onSubmit:y=>{y.preventDefault(),g()},children:[n.jsx(wT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),g())}}),n.jsx(bT,{children:n.jsx(Na,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const lT=p.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,cT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,dT=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,uT=p.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,hT=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,pT=p.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,fT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Jm=p.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,mT=p.div`
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
`,gT=we`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,vT=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Mu=p.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${gT} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xT=p.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,yT=p.form`
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
`,wT=p.textarea`
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
`,bT=p.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,kT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function e0(e,o){const i=kT[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const CT=24,t0=.25,_T=Av-.03;function Kh({className:e}){return n.jsxs(jT,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(ST,{children:n.jsx(st,{mark:"circle",size:CT,tone:"auto",state:"active"})}),"n"]})}const jT=p.span`
  ${Tv}
`,ST=p.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${Gm}em;
  height: ${Gm}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${t0}em;
  margin-right: ${t0+_T}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function $T({onNew:e}){return n.jsxs(MT,{children:[n.jsx(NT,{}),n.jsx(RT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(sc,{size:16})})]})}const MT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,NT=p(Kh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,RT=p.span`
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
`,LT=45;function AT({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},LT);return()=>clearInterval(f)},[e]);const l=i>=e.length;return n.jsxs(TT,{className:o,children:[e.slice(0,i),!l&&n.jsx(IT,{"aria-hidden":"true",children:"|"})]})}const TT=p.span`
  white-space: nowrap;
`,ET=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,IT=p.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${ET} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Nu=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function PT(){const e=v.useMemo(()=>["All",...Array.from(new Set(Nu.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?Nu:Nu.filter(l=>l.tag===o);return n.jsx(zT,{children:n.jsxs(OT,{children:[n.jsxs(DT,{children:[n.jsx(st,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(FT,{children:[n.jsx(BT,{children:"Memory"}),n.jsx(HT,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(WT,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(UT,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(qT,{children:s.map((l,d)=>n.jsx(VT,{children:n.jsxs(GT,{children:[n.jsx(YT,{children:l.title}),n.jsx(KT,{children:l.detail})]})},d))})]})})}const zT=p.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,OT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,DT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,FT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,BT=p.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,HT=p.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,WT=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,UT=p.button`
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
`,qT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,VT=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,GT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,YT=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,KT=p.span`
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
`;const rh=[{id:"employees",label:"Employees",icon:n.jsx(no,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(_n,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(vh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(Lo,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Bi,{size:16})}];p.div`
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
`;function QT({collectionId:e}){const o=rh.find(i=>i.id===e)??rh[0];return n.jsxs(ZT,{children:[n.jsxs(XT,{children:[n.jsx(JT,{children:o.label}),n.jsx(Oo,{children:"Account database"})]}),n.jsxs(eE,{role:"status",children:[n.jsx(tE,{"aria-hidden":"true",children:n.jsx(xg,{size:24})}),n.jsxs(nE,{children:[o.label," — demo stub"]}),n.jsxs(rE,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const ZT=p.div`
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
`,XT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,JT=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,eE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,tE=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,nE=p.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,rE=p.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function Iv({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const oE="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",aE="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",iE="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",sE="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",lE="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",cE="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",dE="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",uE=560,Pv=320,Nr="cubic-bezier(0.22, 1, 0.36, 1)",zv=140,Ov={landing:0,workplace:20,loading:40,questions:58},_i=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:wg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:Rg,title:"1099",caption:"Independent contractors."},{id:"both",icon:bg,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:_n,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:kg,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:Ng,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Li,title:"One location",caption:"A single site."},{id:"multi",icon:yh,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:vh,title:"Client sites",caption:"Out at client locations."}]}];function hE({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[f,g]=v.useState(!1),y=vc(),x=v.useRef(null),w=v.useCallback(A=>{x.current===null&&(g(!0),x.current=window.setTimeout(()=>{A(),g(!1),x.current=null},y?0:Pv))},[y]);v.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),_=()=>w(()=>i("workplace")),C=A=>{l(R=>({...R,...A})),h(!0),w(()=>i("loading"))},M=A=>{const R={...s,...A};if(l(R),R.companyWebsite){e(R);return}w(()=>i("questions"))},N=A=>e({...s,...A}),$=d?1:o==="landing"?0:.4,[S,j]=v.useState(!1),z=S;return n.jsxs(DE,{children:[n.jsx(Vh,{links:$}),n.jsx(Gh,{}),n.jsx(FE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(Iv,{size:22})}),n.jsx(BE,{children:n.jsxs(HE,{children:[o!=="landing"&&n.jsx(WE,{children:n.jsx(Dv,{children:n.jsx(st,{mark:z?"lines":"magnetic",size:zv,tone:"auto",state:"active",motionSpeed:z?1.7:1,cellCount:Ov[o],"aria-label":"Ultron"})})}),n.jsxs(qE,{$exiting:f,children:[o==="landing"&&n.jsx(kE,{onNext:_}),o==="workplace"&&n.jsx(xc,{children:n.jsx(jE,{onAnswer:C})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx($E,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:M,onProcessingChange:j}),o==="questions"&&n.jsx(IE,{onComplete:N})]})]})})]})}const pE="Lead the work that matters.",fE="Show us your company and we'll set up the work.",mE=41e3,n0=[{name:"Levi's Stadium",src:oE},{name:"ProCare HR",src:aE},{name:"Florida Panthers",src:iE},{name:"Express Healthcare",src:sE},{name:"ModSquad",src:lE},{name:"Titan Medical Group",src:cE},{name:"United Staffing Solutions",src:dE}],r0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],gE=6e3;function vE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function xE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function yE(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const wE=[{id:"google",label:"Continue with Google",mark:vE},{id:"microsoft",label:"Continue with Microsoft",mark:xE},{id:"apple",label:"Continue with Apple",mark:yE}];function bE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function kE({onNext:e}){const[o,i]=v.useState(""),[s,l]=v.useState(null),d=v.useRef(null);return v.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(GE,{children:[n.jsx(KE,{children:n.jsxs(QE,{children:[n.jsx(Dv,{children:n.jsx(st,{mark:"magnetic",size:zv,tone:"auto",state:"active",cellCount:Ov.landing,"aria-label":"Ultron"})}),n.jsx($I,{children:pE}),n.jsxs(ZE,{children:[n.jsx(MI,{children:fE}),n.jsxs(XE,{"aria-label":"Get started",children:[n.jsx(JE,{children:wE.map(h=>{const f=h.mark;return n.jsx(eI,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(f,{}),onClick:e,children:h.label},h.id)})}),n.jsx(tI,{"aria-hidden":"true",children:n.jsx(nI,{children:"or start with email"})}),n.jsxs(rI,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||bE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(Rr,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(aI,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(oI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(iI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(YE,{"aria-hidden":"true"}),n.jsx(CE,{})]})}function CE(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%r0.length),gE);return()=>clearInterval(s)},[]);const i=r0[e];return n.jsx(sI,{children:n.jsxs(lI,{children:[n.jsx(_E,{}),n.jsxs(bI,{children:[n.jsx(kI,{children:`“${i.quote}”`}),n.jsxs(CI,{children:[n.jsx(rr,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(_I,{children:[n.jsx(jI,{children:i.name}),n.jsx(SI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(gI,{children:[n.jsx(vI,{children:"Trusted by frontline operators"}),n.jsxs(yI,{"aria-label":"Operators using Teambridge",children:[n.jsx(o0,{children:n0.map(s=>n.jsx(a0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(o0,{"aria-hidden":"true",children:n0.map(s=>n.jsx(a0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function _E(){const e=OE(mE,1600);return n.jsxs(cI,{children:[n.jsxs(dI,{children:[n.jsx(hI,{"aria-hidden":"true"}),n.jsx(pI,{children:"Ultron Index · Live"})]}),n.jsx(fI,{children:e.toLocaleString("en-US")}),n.jsx(mI,{children:"pieces of work Ultron performed this week"})]})}function jE({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(PE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(yc,{children:"Where do you work?"}),n.jsx(LI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(Hv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(Wv,{children:[n.jsx(yP,{"aria-hidden":"true",children:n.jsx(wh,{size:18})}),n.jsx(Uv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(qv,{children:n.jsx(Na,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(wP,{children:n.jsx(Vv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Ru=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],SE=820;function $E({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(NE,{website:e,onDone:i,onProcessingChange:s}):n.jsx(EE,{failedWebsite:o,onDone:i})}const ME=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function NE({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=zE(e),d=Ru.length,[h,f]=v.useState(1),[g,y]=v.useState(!1),x=v.useRef(null),w=vc();v.useEffect(()=>{if(!g)return;const N=window.requestAnimationFrame(()=>{const $=x.current,S=$==null?void 0:$.closest("main");S?S.scrollTo({top:S.scrollHeight,behavior:w?"auto":"smooth"}):$==null||$.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame(N)},[g,w]),v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=v.useMemo(()=>k$(e),[e]),_=v.useMemo(()=>ME.reduce((N,$)=>N+k[$].length,0),[k]),C=v.useCallback(()=>{g?o({}):h>=d?y(!0):f(N=>Math.min(N+1,d))},[h,g,d,o]);v.useEffect(()=>{const N=$=>{$.key.toLowerCase()==="t"&&($.preventDefault(),C())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[C]);const M=Ru[h-1];return n.jsx(n.Fragment,{children:n.jsxs(xc,{$wide:!0,onClick:()=>{g||C()},children:[n.jsx(yc,{children:g?"Nearly there! Your free account is taking shape.":`${M}…`},g?"done":M),n.jsx(wc,{children:g?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(DI,{role:"status","aria-live":"polite",$complete:g,children:[n.jsxs(WI,{$running:!g,children:[n.jsx(wh,{size:14}),l,g&&n.jsxs(n.Fragment,{children:[n.jsx(UI,{"aria-hidden":"true",children:"·"}),n.jsxs(qI,{children:[n.jsx(fn,{size:13})," read ",_," signals"]})]})]}),n.jsx(FI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:Ru.map((N,$)=>{const S=g||$+1<h?"done":$+1===h?"working":"pending";return n.jsx(BI,{"data-status":S,children:S!=="pending"&&n.jsx(HI,{$working:S==="working"})},N)})})]}),n.jsx(AE,{learned:k,host:l,completed:g?d:h-1,done:g}),g&&n.jsxs(n.Fragment,{children:[n.jsx(sP,{children:n.jsx(lP,{children:"Consider it handled."})}),n.jsx(dP,{children:n.jsx(Oe,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(hg,{size:16}),children:"Looks good, continue"})}),n.jsx(uP,{children:n.jsx(Vv,{type:"button",onClick:()=>{f(1),y(!1)},children:"Start over"})}),n.jsx(hP,{ref:x,"aria-hidden":"true"})]})]})})}const RE={"Healthcare / Clinical Staffing":bh,"Skilled Trades / Construction Labor":uh,"Warehouse / Logistics & Light Industrial":xh,"Security / Guarding Services":oc,"Home Care / In-Home Support":$g,"Agriculture / Seasonal Labor":gh,"Hospitality / Events Staffing":ic,"Call Center / BPO Staffing":Ai},LE={Business:{icon:Li,color:"blue"},Workforce:{icon:no,color:"purple"},Operations:{icon:Ag,color:"orange"},Compliance:{icon:Bi,color:"green"}};function AE({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,f]=v.useState(!1),g=RE[e.workforce_type]??yh;return n.jsxs(GI,{children:[n.jsxs(YI,{children:[n.jsx(KI,{children:n.jsxs(ZI,{children:[n.jsx(XI,{"aria-hidden":"true",children:d?n.jsx(Ht,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(g,{size:20}),n.jsx(JI,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:y=>f(y.currentTarget.naturalWidth>=32),onError:()=>f(!1)})]})}),n.jsxs(eP,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"240px",$h:"1em"}),n.jsx(Ht,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(tP,{children:e.workforce_type}),n.jsx(nP,{children:l.name})]}),n.jsx(rP,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"110px",$h:"0.9em"}),n.jsx(Ht,{$w:"150px",$h:"0.9em"}),n.jsx(Ht,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Lu,{children:[n.jsx(_n,{size:14}),n.jsxs(Au,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(Lu,{children:[n.jsx(Li,{size:14}),n.jsxs(Au,{children:["Part of ",l.parent]})]}),n.jsxs(Lu,{children:[n.jsx(dh,{size:14}),n.jsx(Au,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((y,x)=>{const w=i<2,{icon:k,color:_}=LE[y.label]??{icon:Li,color:"neutral"};return n.jsx(QI,{style:{"--group-i":w?x+1:x},children:w?n.jsxs(n.Fragment,{children:[n.jsx(i0,{"aria-hidden":"true",children:n.jsx(Ht,{$w:"20px",$h:"20px",$round:!0})}),n.jsxs(s0,{children:[n.jsx(l0,{as:"div",children:n.jsx(Ht,{$w:"112px",$h:"0.95em"})}),n.jsxs(c0,{children:[n.jsx(Ht,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"64px",$h:"20px",$round:!0})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(i0,{"aria-hidden":"true",children:n.jsx(k,{size:20})}),n.jsxs(s0,{children:[n.jsx(l0,{children:y.label}),n.jsx(c0,{children:y.tags.map(C=>n.jsx(tr,{size:"sm",variant:"subtle",color:_,children:C},C))})]})]})},`${y.label}-${w?"loading":"ready"}`)})]}),n.jsx(oP,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(d0,{children:[n.jsx(Lg,{size:16}),"Configured for you"]}),n.jsx(aP,{children:e.configured.map(y=>n.jsxs(iP,{children:[n.jsx(en,{size:16}),y]},y))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(d0,{as:"div",children:[n.jsx(Ht,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ht,{$w:"132px",$h:"0.95em"})]}),n.jsxs(VI,{children:[n.jsx(Ht,{$h:"0.85em",$w:"84%"}),n.jsx(Ht,{$h:"0.85em",$w:"72%"}),n.jsx(Ht,{$h:"0.85em",$w:"78%"}),n.jsx(Ht,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const TE=[{icon:bh,label:"Travel nurses"},{icon:ic,label:"Event staff"},{icon:oc,label:"Security guards"},{icon:xh,label:"Warehouse temps"}];function EE({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(xc,{children:[e&&n.jsx(cP,{children:"No problem — let's set it up together."}),n.jsx(yc,{children:"What workforce do you need help with?"}),n.jsx(wc,{children:"Say it in your own words — or grab one of these."}),n.jsx(AI,{children:TE.map(({icon:h,label:f})=>n.jsxs(TI,{type:"button",onClick:()=>o({workforceType:f}),children:[n.jsx(h,{size:16}),f]},f))}),n.jsx(Hv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(Wv,{children:[n.jsx(Uv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(qv,{children:n.jsx(Na,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function IE({onComplete:e}){const o=vc(),[i,s]=v.useState(0),l=v.useRef({}),d=_i[i],h=f=>{l.current={...l.current,[d.key]:f.title};const g=i+1;g>=_i.length?e(l.current):s(g)};return n.jsxs(xc,{children:[n.jsx(pP,{role:"progressbar","aria-valuemin":1,"aria-valuemax":_i.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${_i.length}`,children:_i.map((f,g)=>n.jsx(fP,{"data-filled":g<=i||void 0},f.key))}),n.jsx(yc,{children:d.prompt}),n.jsx(wc,{children:d.sub}),n.jsx(mP,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,g)=>{const y=f.icon;return n.jsxs(gP,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>h(f),children:[n.jsx(Fv,{"aria-hidden":"true",children:n.jsx(y,{size:20})}),n.jsxs(vP,{children:[n.jsx(EI,{children:f.title}),n.jsx(II,{children:f.caption})]})]},f.id)})})]},d.key)}function PE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function zE(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function OE(e,o){const i=vc(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=g=>{h===null&&(h=g);const y=Math.min(1,(g-h)/o),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function vc(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const DE=p.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,FE=p.button`
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
`,BE=p.main`
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
`,HE=p.div`
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
`,WE=p.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Dv=p.span`
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
`,UE=we`
  from { opacity: 1; }
  to   { opacity: 0; }
`,qE=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Pe`
      animation: ${UE} ${Pv}ms var(--ease-in) forwards;
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
`,VE=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,GE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${VE} 560ms ${Nr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YE=p.div`
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
`,KE=p.div`
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
`,QE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Qh=we`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ZE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Qh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,XE=p.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,JE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,eI=p(Oe)`
  && {
    width: 100%;
    ${Bn}
  }
`,tI=p.div`
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
`,nI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,rI=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,oI=p(Oe)`
  && {
    width: 100%;
  }
`,aI=p(Yg)`
  && [class*='shell'] {
    ${Bn}
  }
  && input {
    background: transparent;
  }
`,iI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,sI=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Qh} var(--duration-slow) var(--ease-out) both;

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
`,lI=p.div`
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
`,cI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,dI=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,uI=we`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,hI=p.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${uI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,fI=p.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,mI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,gI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,vI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,xI=we`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,yI=p.div`
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
`,o0=p.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${xI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,a0=p.img`
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
`,wI=we`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,bI=p.figure`
  ${Bn}
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
  animation: ${wI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kI=p.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,CI=p.figcaption`
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
`,_I=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,jI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,SI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,$I=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Qh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,NI=we`
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
  animation: ${NI} ${uE}ms ${Nr} both;

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
`,RI=we`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,LI=p(wc)`
  animation: ${RI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AI=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,TI=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Bn}
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
    ${Lv}
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
`,Fv=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,EI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,II=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Bv=we`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,PI=we`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,zI=we`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,OI=we`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,DI=p.div`
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
    opacity 400ms ${Nr} 950ms,
    max-height 400ms ${Nr} 950ms,
    margin-top 400ms ${Nr} 950ms;

  ${e=>e.$complete&&Pe`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,FI=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Pe`
    & > * > * {
      animation: ${OI} 900ms ${Nr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,BI=p.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,HI=p.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Pe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${zI} ${SE+380}ms ${Nr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,WI=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,UI=p.span`
  color: var(--color-content-tertiary);
`,qI=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,Ht=p.span`
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
  animation: ${PI} 2.2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 7%, transparent);
    animation: none;
  }
`,VI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,GI=p.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Gi=Pe`
  animation: ${Bv} var(--duration-base) ${Nr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YI=p.div`
  ${Bn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Gi}
`,KI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Gi}
`,QI=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Gi}
`,i0=p.span`
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
`,s0=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`,ZI=p.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,XI=p.span`
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
`,JI=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,eP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,tP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,nP=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,rP=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,Lu=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Au=p.span`
  color: var(--color-content-primary);
`,oP=p.div`
  ${Bn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Gi}
`,l0=p.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,c0=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,d0=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,aP=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,iP=p.li`
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
`,sP=p.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Gi}
`,lP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,cP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,dP=p.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,uP=p.div`
  display: flex;
  justify-content: center;
`,hP=p.div`
  width: 100%;
  height: 0;
`,pP=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,fP=p.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,mP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,gP=p.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Bn}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Bv} var(--duration-base) ${Nr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Fv} {
    margin-bottom: 0;
  }

  &:hover {
    ${Lv}
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
`,vP=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Hv=p.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Bn}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Wv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,xP=we`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,yP=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${xP} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Uv=p.textarea`
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
`,qv=p(mh)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,wP=p.div`
  margin-top: var(--space-3);
`,Vv=p.button`
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
`;function bP({onEnterApp:e}){return n.jsx(hE,{onComplete:o=>e==null?void 0:e(o)})}const kP="48px",CP="240px",u0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",_P=p.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?CP:kP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Pe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Pe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,jP=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,SP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,$P=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,MP=p.button`
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
`,NP=p.div`
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
`,RP=p.span`
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
`,h0=p.div`
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
`,Tu=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,LP="var(--gradient-ai)",Gv=p.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Pe`
      background: var(--color-bg-primary, white);
      box-shadow: ${u0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Pe`
      background: ${LP};
      box-shadow: ${u0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Yv=p.button`
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
`,Kv=p.span`
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
`,Qv=p.div`
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
`,AP=p.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Eu=p.hr`
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
`;const TP=p.button`
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
`,EP=p.div`
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
`,IP=p.span`
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
`;function Iu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(Gv,{$isActive:l,$isAi:s,children:n.jsxs(Yv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(Qv,{children:[e.hasUnread&&n.jsx(AP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(Kv,{children:e.label}),o&&i&&n.jsx(Oo,{variant:"primary",children:"New"})]})})}function PP({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:y}){const[x,w]=v.useState(!1);return n.jsx(_P,{$isExpanded:x,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(jP,{$isExpanded:x,children:[n.jsxs(SP,{children:[n.jsxs(MP,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[n.jsx(NP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&n.jsxs(n.Fragment,{children:[n.jsx(RP,{children:s.name}),n.jsx(h0,{children:n.jsx(lm,{})})]})]}),n.jsx(Tu,{children:e.map(k=>n.jsx(Iu,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Eu,{}),n.jsx(Tu,{children:o.map(k=>n.jsx(Iu,{item:k,isExpanded:x,showNewBadge:k.id===g,isAi:k.id===y},k.id))})]})]}),n.jsxs($P,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Eu,{}),n.jsx(Tu,{children:i.map(k=>n.jsx(Iu,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),n.jsx(Eu,{}),n.jsx(Gv,{$isActive:!1,children:n.jsxs(Yv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:x?void 0:"Settings",children:[n.jsx(Qv,{children:n.jsx(U2,{})}),x&&n.jsx(Kv,{children:"Settings"})]})}),n.jsxs(TP,{$isExpanded:x,onClick:h,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[n.jsx(EP,{$color:l.avatarColor,children:l.initials}),x&&n.jsxs(n.Fragment,{children:[n.jsx(IP,{children:l.name}),n.jsx(h0,{children:n.jsx(lm,{})})]})]})]})]})})}const zP=270,OP=p.nav`
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
`,DP=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,FP=p.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,BP=p.h2`
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
`,HP=p.div`
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
`,WP=p.button`
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
`,UP=p.div`
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
`,qP=p.button`
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
`;const VP=p.span`
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
`,GP=p.div`
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
`,YP=we`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,KP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${YP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Zv=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,QP=we`
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
`,ZP=we`
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
`,XP=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,JP=we`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,ez=we`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,oh=420,tz=180,nz=oh-60,rz=p.button`
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
  animation: ${Zv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oz=p.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,az=p.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${QP} 2.4s ease-in-out infinite;

  /* The measured mobile rectangle already includes the row's selected-state
     inset. Remove the copied button's own outer margin inside the portal so its
     icon, label, radius, width, and height land exactly over the original. */
  ${e=>e.$mobile&&Pe`
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
    animation: ${ZP} 2.4s ease-out infinite;
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
`,iz=p.div`
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
  font-family: ${XP};
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
`,Xv=p.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${JP} ${oh}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${tz}ms;
    animation-delay: ${oh-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,p0=p.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${ez} 420ms ${nz}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Zv} 200ms both;
    transform: none;
  }
`,f0=p.button`
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
`,sz=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Pe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,lz=p.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,cz=p.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dz=p.div`
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
`,uz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,hz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,pz=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Jv=p.div`
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
`;function fz(){return n.jsxs(Xv,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function mz(){return n.jsxs(Xv,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function ex({prompt:e,onDismiss:o,placement:i="right",children:s}){const l=v.useRef(null),[d,h]=v.useState(null);return v.useLayoutEffect(()=>{const f=l.current;if(!f)return;let g=null;const y=()=>{const C=(f.firstElementChild??f).getBoundingClientRect();h({left:C.left,top:C.top,width:C.width,height:C.height})},x=performance.now(),w=_=>{y(),_-x<360?g=window.requestAnimationFrame(w):g=null};g=window.requestAnimationFrame(w);const k=new ResizeObserver(y);return k.observe(f),window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{g!==null&&window.cancelAnimationFrame(g),k.disconnect(),window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(oz,{ref:l,"aria-hidden":"true",children:s}),d&&Po.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(rz,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(az,{$mobile:i==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(iz,{$placement:i,role:"status","aria-live":"polite",style:i==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:i==="above"?n.jsxs(n.Fragment,{children:[n.jsx(p0,{children:e}),n.jsx(mz,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(fz,{}),n.jsx(p0,{children:e})]})})]}),document.body)]})}function tx(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function gz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Zh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function vz({item:e}){return n.jsx(jn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(Jv,{children:e.icon??n.jsx(tx,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Zh})}function xz({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-f.length;return n.jsxs(sz,{$outlined:e.outlined,children:[n.jsxs(qP,{onClick:()=>i(y=>!y),"aria-expanded":o,children:[n.jsx(GP,{children:o?n.jsx(Fn,{size:16}):n.jsx(Sn,{size:16})}),n.jsx(VP,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(KP,{children:[f.map(y=>{const x=n.jsx(jn,{label:n.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:n.jsx(Jv,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:Zh});return y.spotlightPrompt?n.jsx(ex,{prompt:y.spotlightPrompt,onDismiss:y.spotlightDismiss,children:x},y.id):n.jsx(v.Fragment,{children:x},y.id)}),g>0&&n.jsxs(f0,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(f0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function yz({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:g,headerSlot:y,bodyContent:x,width:w=zP,onWidthChange:k,minWidth:_=220,maxWidth:C=520}){const M=x!==void 0,N=v.useRef(null),[$,S]=v.useState(!1);return v.useEffect(()=>{if(!$||!k)return;const j=N.current;if(!j)return;const z=j.getBoundingClientRect().left,A=L=>{const F=Math.min(C,Math.max(_,L.clientX-z));k(F)},R=()=>S(!1);window.addEventListener("mousemove",A),window.addEventListener("mouseup",R);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",R),document.body.style.userSelect=E,document.body.style.cursor=""}},[$,k,_,C]),n.jsxs(OP,{ref:N,$isVisible:o,$width:w,$isResizing:$,"aria-label":"Secondary navigation",children:[n.jsxs(DP,{children:[(e||y)&&n.jsxs(FP,{children:[n.jsx(BP,{children:e}),y]}),d&&!M&&n.jsxs(HP,{children:[n.jsx(Gg,{size:"sm",placeholder:"Search...",value:h,onChange:j=>f==null?void 0:f(j.target.value)}),n.jsx(WP,{onClick:g,"aria-label":"Filter",children:n.jsx(gz,{})})]})]}),M?x:n.jsxs(UP,{children:[s,i.map(j=>j.type==="single"?n.jsx(vz,{item:j.item},j.item.id):j.type==="group"?n.jsx(xz,{group:j.group},j.group.id):j.type==="divider"?n.jsx(hz,{},j.id):n.jsx(lz,{children:j.label.label},j.label.id))]}),l.length>0&&n.jsxs(cz,{children:[n.jsx(uz,{}),l.map(j=>n.jsx(jn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:n.jsx(pz,{children:j.icon??n.jsx(tx,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:Zh},j.id))]}),k&&o&&n.jsx(dz,{$isResizing:$,onMouseDown:j=>{j.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const wz=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,bz=p.div`
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
`,nx=p.div`
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
`,kz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Cz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function _z(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function m0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function g0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function jz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Sz({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const g=o.filter(w=>w.variant==="secondary"),y=o.filter(w=>w.variant==="primary"),x=Hh("(prefers-color-scheme: dark)");return n.jsxs(wz,{$noBorder:l,children:[n.jsx(bz,{children:typeof e=="string"?n.jsx(nx,{children:e}):e}),n.jsxs(kz,{children:[n.jsxs(Cz,{children:[n.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:n.jsx(_z,{})}),g.map(w=>n.jsx(Oe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(g0,{}),trailingArtwork:n.jsx(m0,{}),onClick:w.onClick,children:w.label},w.id)),y.map(w=>n.jsx(Oe,{variant:"primary",size:"sm",leadingArtwork:n.jsx(g0,{}),trailingArtwork:n.jsx(m0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(Oe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(jz,{})}),s&&n.jsx(tg,{dark:x,onClick:h,"aria-label":"Ponder AI"})]})]})}const $z=p.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,Mz=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,Nz=p.div`
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
`,Rz=p.main`
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
`,v0="tb:secondary-nav-width",x0=270,y0=220,w0=520;function Lz({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:y,secNavHeading:x,menuEntries:w,menuHeader:k,pageEntries:_,showSearch:C,searchValue:M,onSearchChange:N,onFilterClick:$,headerSlot:S,bodyContent:j,heading:z,actions:A,showActivityButton:R,showPonderButton:E,noBorder:L,onActivityClick:F,onPonderClick:q,onDotsClick:V,children:H,showSecondaryNav:K=!0,showTopNav:ee=!0}){const[ae,se]=v.useState(()=>{if(typeof window>"u")return x0;const le=window.localStorage.getItem(v0),Q=le?parseInt(le,10):NaN;return Number.isFinite(Q)?Math.min(w0,Math.max(y0,Q)):x0});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(v0,String(ae))},[ae]),n.jsxs($z,{children:[n.jsx(PP,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:y}),n.jsxs(Mz,{children:[K&&n.jsx(yz,{heading:x,menuEntries:w,menuHeader:k,pageEntries:_,isVisible:!0,showSearch:C,searchValue:M,onSearchChange:N,onFilterClick:$,headerSlot:S,bodyContent:j,width:ae,onWidthChange:se,minWidth:y0,maxWidth:w0}),n.jsxs(Nz,{children:[ee&&n.jsx(Sz,{heading:z,actions:A,showActivityButton:R,showPonderButton:E,noBorder:L,onActivityClick:F,onPonderClick:q,onDotsClick:V}),n.jsx(Rz,{children:H})]})]})]})}function Az({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(new WeakMap);return v.useEffect(()=>{const h=d.current,f=y=>{var x;return y===document||y===window?((x=document.scrollingElement)==null?void 0:x.scrollTop)??0:y.scrollTop??0},g=y=>{const x=i??y.target;if(!x)return;const w=f(x);if(!h.has(x)){h.set(x,w);return}const k=w-h.get(x);Math.abs(k)<e||(k>0&&w>o?l("down"):k<0&&l("up"),h.set(x,w))};if(i)return i.addEventListener("scroll",g,{passive:!0}),()=>i.removeEventListener("scroll",g);if(!(typeof document>"u"))return document.addEventListener("scroll",g,{passive:!0,capture:!0}),()=>document.removeEventListener("scroll",g,{capture:!0})},[e,o,i]),s}const Tz=p.button`
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
`,Ez=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,Iz=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function b0({label:e,trailingSlot:o,isOpen:i,onClick:s,ariaLabel:l}){return n.jsxs(Tz,{type:"button",$active:i,onClick:s,"aria-haspopup":"dialog","aria-expanded":!!i,"aria-label":l,children:[n.jsx(Ez,{children:e}),o,n.jsx(Iz,{children:n.jsx(Fn,{size:14})})]})}const Pz=p.header`
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
  transition: transform 180ms ease-out;
`,zz=p.div`
  height: 48px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,Oz=p.button`
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
`,Dz=p.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Fz=p(Kh)`
  font-size: var(--text-lg, 1.125rem);
`,Bz=p(Oo)`
  min-width: 20px;
  height: 20px;
  padding-inline: 6px;
`,Hz=p.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function Wz({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const Uz=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,unreadEventCount:h=0,onHamburgerClick:f,onSecondaryClick:g,onTertiaryClick:y},x){return n.jsx(Pz,{ref:x,$hidden:d,$foreground:h>0&&l==="secondary",children:n.jsxs(zz,{children:[n.jsx(Oz,{onClick:f,"aria-label":"Open navigation",children:n.jsx(Wz,{size:18})}),n.jsxs(Dz,{children:[n.jsx(b0,{label:i??(o==="Ultron"?n.jsx(Fz,{}):o),trailingSlot:h>0?n.jsx(Bz,{variant:"warning","aria-hidden":"true",children:h>99?"99+":h}):void 0,isOpen:l==="secondary",onClick:g,ariaLabel:h>0?`Choose a section, ${h} new unread ${h===1?"event":"events"}`:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(Hz,{"aria-hidden":"true",children:"›"}),n.jsx(b0,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),qz=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,Vz=p.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${qz} 160ms ease-out;
`;function Gz({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(Vz,{onClick:e,"aria-hidden":"true"})}const Yz=we`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Kz=p.div`
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
  animation: ${Yz} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Qz=p.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,Zz=p.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,Xz=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,Jz=p.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,eO=p.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function rx({title:e,children:o,ariaLabel:i,titleAction:s}){return n.jsxs(Kz,{role:"dialog","aria-modal":"true","aria-label":i??(typeof e=="string"?e:void 0),children:[n.jsx(Qz,{children:n.jsx(Zz,{"aria-hidden":"true"})}),e&&n.jsxs(Xz,{children:[n.jsx(Jz,{children:e}),s]}),n.jsx(eO,{children:o})]})}const Xh=p.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,tO=p.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Kl=p.button`
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
`,k0=p.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Ql=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,ba=p.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function nO({moduleLabel:e,entries:o,onSelect:i,onHome:s,onNewPage:l,spotlightEnabled:d=!0}){const h=e==="Ultron",f=h&&s?n.jsx(rO,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),i()},children:n.jsx(C0,{})}):n.jsx(C0,{});return n.jsx(rx,{title:h?f:e,ariaLabel:`${e} sections`,titleAction:h&&l?n.jsx(oO,{type:"button","aria-label":"New page",onClick:()=>{l(),i()},children:n.jsx(sc,{size:16})}):void 0,children:n.jsx(Xh,{children:o.map(g=>{if(g.type==="single"){const x=g.item;return n.jsxs(Kl,{$active:x.isActive,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Ql,{children:x.icon}),n.jsx(ba,{children:x.label}),x.isActive&&n.jsx(Zl,{"aria-hidden":"true",children:n.jsx(en,{size:16})})]},x.id)}if(g.type!=="group")return null;const y=g.group;return n.jsxs("div",{children:[n.jsx(tO,{children:y.label}),y.children.map(x=>{const w=n.jsxs(Kl,{$active:x.isActive,$indent:!0,onClick:()=>{var k;(k=x.onClick)==null||k.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Ql,{children:x.icon}),n.jsx(ba,{children:x.label}),x.isActive&&n.jsx(Zl,{"aria-hidden":"true",children:n.jsx(en,{size:16})})]});return d&&x.spotlightPrompt?n.jsx(ex,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:w},x.id):n.jsx("div",{children:w},x.id)})]},y.id)})})})}const C0=p(Kh)`
  font-size: var(--text-lg, 1.125rem);
`,Pl="44px",rO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  /* all: unset resets box-sizing to content-box, which would add the padding
     below on top of the minimum instead of inside it. */
  box-sizing: border-box;
  min-height: ${Pl};
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
`,oO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Pl};
  height: ${Pl};
  /* Half the growth clawed back off the trailing edge, so the pencil stays on
     the same optical inset it sat on at 32px while the target around it grows
     outward into the row's padding. */
  margin-right: calc((${Pl} - var(--space-8, 32px)) / -2);
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
`,aO=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,iO=p.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,sO=p.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function lO({personas:e,activeId:o,onSelect:i}){return n.jsx(rx,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Xh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(Kl,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(ba,{as:"span",children:n.jsxs(aO,{children:[n.jsx(iO,{children:s.name}),n.jsx(sO,{children:s.role})]})}),l&&n.jsx(Zl,{"aria-hidden":"true",children:n.jsx(en,{size:16})})]},s.id)})})})}const cO=we`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,dO=p.aside`
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
  animation: ${cO} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,uO=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,hO=p.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,pO=p.button`
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
`,fO=p.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,mO=60;function gO({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const y=g.touches[0];l.current={x:y.clientX,y:y.clientY}},f=g=>{if(!l.current)return;const y=g.changedTouches[0],x=y.clientX-l.current.x,w=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(w)<mO&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[o]),n.jsxs(dO,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(uO,{children:[n.jsx(hO,{children:e??"Navigation"}),n.jsx(pO,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Di,{size:18})})]}),n.jsx(fO,{children:i})]})}const vO=p.span`
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
`,Pu=p(Kl)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function xO({activeId:e,groups:o,user:i,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(gO,{title:"Navigation",onDismiss:h,children:n.jsxs(Xh,{children:[o.map((f,g)=>n.jsxs("div",{children:[g>0&&n.jsx(k0,{"aria-hidden":"true"}),f.items.map(y=>{const x=y.id===e;return n.jsxs(Pu,{$active:x,$disabled:y.disabled,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),d(y.id),h()},"aria-pressed":x,"aria-disabled":y.disabled||void 0,children:[n.jsx(Ql,{children:y.icon}),n.jsx(ba,{children:y.label}),x&&n.jsx(Zl,{"aria-hidden":"true",children:n.jsx(en,{size:16})})]},y.id)})]},f.id)),n.jsx(k0,{"aria-hidden":"true"}),n.jsxs(Pu,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Ql,{children:n.jsx(U2,{})}),n.jsx(ba,{children:"Settings"})]}),n.jsxs(Pu,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${i.name}`,children:[n.jsx(vO,{$color:i.avatarColor,"aria-hidden":"true",children:i.initials}),n.jsx(ba,{children:"Account"})]})]})})}const _0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],yO=340,wO=p.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,bO=p.main`
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
`;function kO(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:g,onSettingsClick:y,onMobileNavigate:x,onSelectPersona:w,onHome:k,onNewPage:_,openSecondaryNav:C,unreadEventCount:M,children:N}=e,[$,S]=v.useState(null),[j,z]=v.useState(!1),A=Az({deadZonePx:8,topThresholdPx:20}),R=$===null&&A==="down",E=v.useMemo(()=>{if(!i)return null;const V=_0.find(H=>H.id===i);return(V==null?void 0:V.name)??null},[i]),L=()=>S(null),F=V=>S(V);v.useEffect(()=>{if(!C){z(!1);return}z(!1),S("secondary");const V=window.setTimeout(()=>{z(!0)},yO);return()=>window.clearTimeout(V)},[C]);const q=$!==null;return n.jsxs(wO,{children:[n.jsx(Uz,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:E,openOverlay:$,hidden:R,unreadEventCount:M,onHamburgerClick:()=>F("drawer"),onSecondaryClick:()=>{F(h.length>0?"secondary":"drawer")},onTertiaryClick:E?()=>F("persona"):void 0}),n.jsx(bO,{children:N}),q&&n.jsx(Gz,{onDismiss:L}),$==="secondary"&&n.jsx(nO,{moduleLabel:l,entries:h,onSelect:L,onHome:k,onNewPage:_,spotlightEnabled:j}),$==="persona"&&n.jsx(lO,{personas:_0,activeId:i,onSelect:V=>{w(V),L()}}),$==="drawer"&&n.jsx(xO,{activeId:o,groups:s,user:f,onUserClick:g,onSettingsClick:y,onSelectModule:V=>x(V),onDismiss:L})]})}function CO(e){if(Wh()&&e.mobileNav){const i=e.mobileNav;return n.jsx(kO,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,onHome:i.onHome,onNewPage:i.onNewPage,openSecondaryNav:i.openSecondaryNav,unreadEventCount:i.unreadEventCount,children:e.children})}return n.jsx(Lz,{...e})}const _O="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",jO="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",SO=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],$O=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],MO={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},NO=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],RO=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],LO=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function AO(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function ox(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function TO(e){const o=$O.find(i=>i.match.test(e));return o?o.profile:MO}function ax(e,o){const i=TO(e),s=AO(ox(e||"teambridge")^o),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<o;){const f=`${l(NO)} ${l(RO)}`;if(h.has(f))continue;h.add(f);const g=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(LO),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const ix=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],sx=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],EO="Team coverage";function IO(e){var o;return((o=ix.find(i=>i.match.test(e)))==null?void 0:o.shapes)??sx}function j0(e,o="Saturday"){const i=ax(e,8),[s,l,d,h]=i,f=4+ox(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${f} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const PO=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],lx=["6a–2p","2p–10p","10p–6a"],zO=[4,3,3,4,4,3,3],OO=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],$0={bands:lx,perDay:zO};function DO(e){var o;return e?((o=OO.find(i=>i.match.test(e)))==null?void 0:o.shape)??$0:$0}function ah(e,o){var y;const i=ax(e,12),{bands:s,perDay:l}=DO(o);let d=0;const h=PO.map((x,w)=>{const k=[];for(let _=0;_<l[w];_++){const C=i[d%i.length].name.split(" ")[0];d++,k.push({time:s[_%s.length],who:C})}return{label:x,shifts:k}}),f=cx(h);f>=0&&(h[f].shifts[0]={...h[f].shifts[0],who:"Open",flag:"open"});const g=(y=h[1])!=null&&y.shifts.length?1:h.findIndex(x=>x.shifts.length);return g>=0&&g!==f&&(h[g].shifts[0]={...h[g].shifts[0],flag:"watch"}),h}function FO(e){const o=ix.find(d=>d.match.test(e)),i=(o==null?void 0:o.shapes[0])??sx[0],l=ah(e,i).map((d,h)=>{const f=d.shifts.slice(0,3);for(;f.length<3;){const g=f.length;f.push({time:lx[g],who:`Coverage ${h+1}-${g+1}`})}return{...d,shifts:f}});return{label:(o==null?void 0:o.label)??EO,shape:"Full-week shift coverage",week:l}}function cx(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let i=e.length-1;i>=0;i--)if(e[i].shifts.length)return i;return-1}function M0(e){const o=cx(e);return o>=0?S0[o]:S0[5]}const BO=1100,HO=440,dx=4,ux=4,hx=150,WO=Math.ceil(hx/dx)*ux,zu=320,UO=720,Ou=2e3,qO=950,N0=1600,px=249,VO=68,GO=229,YO=47,KO=56,QO=8,ZO=px,XO=8,Jh=84,zi=81,Xl=48,R0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],JO=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],eD="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",tD='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',L0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",nD="Time for a test run, so you can see how I work? Let's simulate a last minute call out.";function rD(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function oD(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Jh-zi} rows`,blocks:[{label:"Held for you, none dropped",bullets:JO.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${zi} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function aD(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Xl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function iD(e,o,i,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},fx(i,s),mx(o)]}function sD(e,o,i,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},fx(i,s),mx(o)]}function fx(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function mx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function lD(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function cD(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function zl(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function A0(e){return e.includes("	")||e.trim().includes(`
`)}function dD(e){return e.scrollHeight-e.clientHeight>ZO}function uD(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function hD(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function pD({text:e}){const o=Math.max(0,e.length-WO);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(i,s)=>n.jsx(KD,{children:i},o+s))]})}function T0({active:e,open:o,closeLabel:i,onClose:s,onScrollToEnd:l,showScrollCue:d=!1,onInsetChange:h,children:f}){const g=e&&o,y=v.useRef(null);v.useEffect(()=>{const w=y.current;if(!g||!w||!h)return;const k=()=>h(w.getBoundingClientRect().height);k();const _=new ResizeObserver(k);return _.observe(w),()=>{_.disconnect(),h(0)}},[g,h]);const x=n.jsxs(TD,{ref:y,$open:o,children:[g&&d&&l&&n.jsx(ED,{type:"button","aria-label":"Scroll to the end of the conversation",onClick:l,children:n.jsx(Fn,{size:18})}),n.jsxs(ID,{$open:o,children:[g&&n.jsx(PD,{type:"button","aria-label":i,onClick:s,children:n.jsx(To,{size:18})}),f]})]});return g&&typeof document<"u"?Po.createPortal(x,document.body):x}const fD={};function mD({active:e=!0,answers:o=fD,onContinued:i,onPhoneSubmitted:s}){const l=Wh(),[d,h]=v.useState([]),[f,g]=v.useState(""),[y,x]=v.useState([]),[w,k]=v.useState(null),[_,C]=v.useState("roster"),[M,N]=v.useState(!1),[$,S]=v.useState(!1),[j,z]=v.useState(!1),[A,R]=v.useState(!1),[E,L]=v.useState(null),[F,q]=v.useState(null),[V,H]=v.useState(null),[K,ee]=v.useState(null),[ae,se]=v.useState(""),[le,Q]=v.useState(!1),[D,Y]=v.useState(!1),[T,O]=v.useState("grant"),[ne,U]=v.useState(!1),[Z,ce]=v.useState(!1),[B,P]=v.useState("delivering"),[oe,fe]=v.useState(0),[de,ve]=v.useState(-1),[ke,Se]=v.useState(""),[Me,Le]=v.useState(!1),[De]=v.useState(()=>{var J;return typeof window<"u"&&!!((J=window.matchMedia)!=null&&J.call(window,"(prefers-reduced-motion: reduce)").matches)}),[Be,ze]=v.useState(()=>{var J;return typeof window<"u"&&!!((J=window.matchMedia)!=null&&J.call(window,"(max-width: 600px)").matches)}),[Ke,Je]=v.useState({roster:!1,schedule:!1}),ut=J=>Je(he=>({...he,[J]:!0})),qe=_==="roster"?Ke.roster:_==="schedule"?Ke.schedule:!0,xe=Be&&B==="ready"&&_!=="done"&&!qe,Ae=v.useRef([]),Xe=v.useRef(null),Ve=v.useRef(null),He=v.useRef(null),Qt=v.useRef(null),tt=v.useRef(null),[Hn,Fo]=v.useState(0),Lr=()=>{const J=tt.current;J==null||J.scrollTo({top:J.scrollHeight,behavior:"smooth"})},[Ee,lt]=v.useState(!0),yt=J=>{lt(J.scrollHeight-J.scrollTop-J.clientHeight<=XO)},ht=v.useMemo(()=>{var J;return((J=o.workforceType)==null?void 0:J.trim())||zl(o.companyWebsite)||""},[o]),or=v.useMemo(()=>IO(ht),[ht]),ar=v.useMemo(()=>FO(ht),[ht]),Wn=v.useMemo(()=>{const J=zl(o.companyWebsite),Ce=[{kind:"text",text:`Welcome to your ${J?`${J} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return Ce.push({kind:"text",text:eD}),Ce.push({kind:"rosterCta"}),Ce},[o]),mn=(J,he)=>{Ae.current.push(window.setTimeout(he,J))};v.useEffect(()=>()=>{Ae.current.forEach(J=>window.clearTimeout(J)),Xe.current&&window.clearTimeout(Xe.current),He.current&&window.clearTimeout(He.current)},[]);const Ar=J=>{const he=J.scrollTop;ce(Ce=>Ce?he>QO:he>KO&&dD(J))};v.useEffect(()=>{var Ce;const J=(Ce=window.matchMedia)==null?void 0:Ce.call(window,"(max-width: 600px)");if(!J)return;const he=()=>ze(J.matches);return he(),J.addEventListener("change",he),()=>J.removeEventListener("change",he)},[]);const Yi=J=>{if(L({file:J,state:"uploading",progress:8}),De){L({file:J,state:"uploading",progress:92});return}mn(180,()=>L({file:J,state:"uploading",progress:38})),mn(460,()=>L({file:J,state:"uploading",progress:74})),mn(780,()=>L({file:J,state:"uploading",progress:92}))},Ki=J=>{if(q({file:J,state:"uploading",progress:8}),De){q({file:J,state:"complete",progress:100});return}mn(180,()=>q({file:J,state:"uploading",progress:38})),mn(460,()=>q({file:J,state:"uploading",progress:74})),mn(780,()=>q({file:J,state:"complete",progress:100}))};v.useEffect(()=>{if(De){fe(Wn.length),ve(-1),P("ready");return}const J=[];let he=null;const Ce=(Fe,St)=>{J.push(window.setTimeout(St,Fe))},rt=Fe=>{if(Fe>=Wn.length){Le(!1),P("ready");return}Le(!0),Ce(HO,()=>{Le(!1),ve(Fe);const St=Wn[Fe];if(St.kind!=="text"){Ce(UO,()=>{fe(Fe+1),ve(-1),Ce(zu,()=>rt(Fe+1))});return}Se("");const Nn=St.text;let At=0;he=window.setInterval(()=>{At=Math.min(Nn.length,At+ux),Se(Nn.slice(0,At)),At>=Nn.length&&(he&&window.clearInterval(he),he=null,Ce(zu,()=>{fe(Fe+1),ve(-1),Se(""),Ce(zu,()=>rt(Fe+1))}))},dx)})};return P("delivering"),rt(0),()=>{J.forEach(Fe=>window.clearTimeout(Fe)),he&&window.clearInterval(he)}},[Wn,De]),v.useEffect(()=>{const J=he=>{const Ce=he.target,rt=(Ce==null?void 0:Ce.isContentEditable)||(Ce==null?void 0:Ce.tagName)==="INPUT"||(Ce==null?void 0:Ce.tagName)==="TEXTAREA"||(Ce==null?void 0:Ce.tagName)==="SELECT";!e||rt||he.metaKey||he.ctrlKey||he.altKey||he.key.toLowerCase()!=="m"||(he.preventDefault(),U(!0))};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[e]);const Qi=()=>{Q(!0),He.current&&window.clearTimeout(He.current),He.current=window.setTimeout(()=>U(!1),N0)},Zi=()=>{Y(!0),He.current&&window.clearTimeout(He.current),He.current=window.setTimeout(()=>U(!1),N0)};v.useEffect(()=>{var J;e&&(Hn>0?Lr():(J=Qt.current)==null||J.scrollIntoView({block:"end",behavior:"smooth"}))},[e,d,w,B,oe,de,ke,Me,Hn]),v.useEffect(()=>{e||U(!1)},[e]);const Xi=(f.trim().length>0||y.length>0)&&w===null,Bo=J=>{const he=Array.from(J,Ce=>Ce.name);x(Ce=>[...Ce,...he.filter(rt=>!Ce.includes(rt))])},Ji=J=>x(he=>he.filter(Ce=>Ce!==J)),$n=(J,he={})=>{const Ce=De?300:he.workingMs??BO,rt=De?200:qO;k(he.workingLabel??"");let Fe=0;const St=()=>{var tn;Xe.current&&(window.clearTimeout(Xe.current),Xe.current=null);const Nn=J[Fe];if(!Nn)return;const At=Fe===J.length-1;if(Fe+=1,h(Rn=>[...Rn,Nn]),At){k(null),Ve.current=null,(tn=he.then)==null||tn.call(he);return}k(""),Xe.current=window.setTimeout(St,rt)};Ve.current=St,Xe.current=window.setTimeout(St,Ce)},Ea=()=>{var J;Be&&((J=Ve.current)==null||J.call(Ve))},Mn=(J,he=[])=>{d.some(Ce=>Ce.role==="operator")||i==null||i(),h(Ce=>[...Ce,{role:"operator",text:J,...he.length?{attachments:he}:{}}])},Ia=(J,he)=>{z(!1),R(!0),ut("roster"),he&&Yi(he),$n([{role:"ultron",activity:oD(J),text:`Got it — read ${J}: ${Jh} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${zi} people in. ${L0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Ou,then:()=>C("schedule")})},ho=()=>{z(!0),R(!0),ut("roster"),$n([{role:"ultron",activity:aD(ht),text:`Done — I spun up ${Xl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:L0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Ou,then:()=>C("schedule")})},Ho=J=>{const he=ah(ht,J);H({problems:j0(ht,M0(he)),week:he}),ee(J)},ir=J=>{ut("schedule"),J.cardFile&&Ki(J.cardFile);const he=ah(ht,J.shape),Ce=j0(ht,M0(he));H({problems:Ce,week:he}),ee(J.shape??null);const rt=he.reduce((At,tn)=>At+tn.shifts.length,0),Fe=he.filter(At=>At.shifts.length>0).length,St=J.fileName?`Read ${J.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${J.shape.toLowerCase()}. Here's what's in it.`,Nn=J.fileName?iD(J.fileName,Ce.length,rt,Fe):sD(J.shape.toLowerCase(),Ce.length,rt,Fe);$n([{role:"ultron",activity:Nn,text:St},{role:"ultron",text:"",card:"week"},{role:"ultron",text:nD}],{workingLabel:J.fileName?"Turning it into shifts…":"Building your week…",workingMs:Ou,then:()=>C("done")})},Pa=()=>{ut("schedule"),Mn("Skip the schedule for now"),$n([{role:"ultron",text:"No problem — we’ll skip the schedule for now. You can add it anytime. Your setup is ready; add your mobile number below to launch a live Ultron event."}],{workingLabel:"Skipping the schedule for now…",then:()=>C("done")})},bc=(J,he=[])=>{if(!J&&he.length===0||w!==null)return;if(Mn(J,he),_==="roster"){he.length>0?Ia(he[0]):A0(J)?Ia("your pasted roster"):$n([{role:"ultron",activity:lD("roster"),text:tD}]);return}if(_==="schedule"){he.length>0?ir({fileName:he[0]}):A0(J)?ir({fileName:"your pasted schedule"}):ir({shape:J});return}const Ce=d.filter(rt=>rt.role==="ultron").length;$n([{role:"ultron",activity:cD(),text:Oh(J,Ce)}])},za=()=>{const J=f.trim();!J&&y.length===0||w!==null||(bc(J,y),g(""),x([]))},kc=J=>{if(!J||J.length===0||_!=="roster"||w!==null)return;const he=Array.from(J),Ce=he.map(rt=>rt.name);Mn("",Ce),Ia(Ce[0],{name:he[0].name,type:he[0].type,size:he[0].size})},fr=J=>{if(!J||J.length===0||_!=="schedule"||w!==null)return;const he=Array.from(J),Ce=he.map(rt=>rt.name);Mn("",Ce),ir({fileName:Ce[0],cardFile:{name:he[0].name,type:he[0].type,size:he[0].size}})},po=w!==null?[]:_==="roster"?[{icon:no,label:"No roster handy? Use sample teammates",mobileLabel:"Use sample teammates",mobileCta:!0,onTap:()=>{Mn("Use sample teammates"),ho()}}]:_==="schedule"?[...or.map(J=>({icon:_n,label:J,onTap:()=>{Mn(J),ir({shape:J})}})),{label:"Skip for now",onTap:Pa,secondary:!0,mobileCta:!0}]:[],mr=l?po.find(J=>J.mobileCta):void 0,es=mr?po.filter(J=>J!==mr):po,Oa=_!=="done"&&po.length>0?n.jsxs(hB,{children:[es.length>0&&n.jsx(uB,{"aria-label":_==="schedule"?"Schedule options":"Suggestions",children:es.map(({icon:J,label:he,onTap:Ce,secondary:rt})=>n.jsxs(W0,{type:"button",$browseSized:!0,$secondary:rt,onClick:Ce,children:[J&&n.jsx(J,{size:14}),he]},he))}),mr&&n.jsx(pB,{type:"button",variant:"secondary",size:"sm",onClick:mr.onTap,children:mr.mobileLabel??mr.label})]}):null,ts=_==="roster"?"Attach your roster, or ask Ultron anything…":_==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…",Lt=T==="waitlist",ns=Lt?D:le,rs=ae.length>=10;return n.jsxs(wD,{children:[!l&&n.jsxs(n.Fragment,{children:[n.jsx(Vh,{links:1}),n.jsx(Gh,{})]}),n.jsx(bD,{$condensed:Z,children:n.jsxs(kD,{$condensed:Z,children:[n.jsxs(CD,{$condensed:Z,role:"img","aria-label":"Ultron",children:[n.jsx(E0,{$show:!Z,"aria-hidden":"true",children:n.jsx(st,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(E0,{$show:Z,$compact:!0,"aria-hidden":"true",children:n.jsx(st,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(_D,{$condensed:Z,children:[n.jsx(jD,{$condensed:Z,children:"Welcome"}),n.jsx(SD,{$condensed:Z,children:"Finish your setup, right in the chat"})]})]})}),n.jsx($D,{ref:tt,onScroll:J=>{Ar(J.currentTarget),yt(J.currentTarget)},children:n.jsxs(QD,{$bottomInset:Hn,children:[n.jsx(wl,{"data-from":"ultron",children:n.jsxs(Du,{children:[(de>=0||oe>0)&&n.jsx(P0,{children:n.jsx(Gl,{milestones:rD(zl(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),Wn.slice(0,de>=0?de+1:oe).map((J,he)=>{if(J.kind==="rosterCta"){const rt=_==="roster"&&!A;return n.jsx(v.Fragment,{children:n.jsx(I0,{children:n.jsx(T0,{active:e&&_==="roster",open:xe&&_==="roster",closeLabel:"Close roster uploader",onClose:()=>ut("roster"),onScrollToEnd:Lr,showScrollCue:!Ee,onInsetChange:Fo,children:A?_==="roster"?E?n.jsx(yl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:E.state,progress:E.progress,file:E.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(bl,{children:[n.jsx(kl,{"aria-hidden":"true",children:n.jsx(no,{size:16})}),n.jsxs(Cl,{children:[n.jsx(_l,{children:"Roster"}),n.jsx(jl,{children:w||(j?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(Sl,{"aria-hidden":"true",children:n.jsx(O0,{})})]}):n.jsxs(bl,{$done:!0,children:[n.jsx(kl,{"aria-hidden":"true",children:n.jsx(Bu,{size:16})}),n.jsxs(Cl,{children:[n.jsx(_l,{children:"Roster"}),n.jsx(jl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(Sl,{"aria-hidden":"true",children:n.jsx(fn,{size:18})})]}):n.jsxs(wx,{children:[rt&&!E&&n.jsx(zD,{"aria-hidden":"true",children:n.jsx(OD,{children:[...R0,...R0].map((Fe,St)=>n.jsx(DD,{children:n.jsx("img",{src:Fe.photo,alt:""})},`${Fe.name}-${St}`))})}),n.jsx(yl,{"data-roster-flow":rt&&!E?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(E==null?void 0:E.state)??"empty",progress:(E==null?void 0:E.progress)??0,file:(E==null?void 0:E.file)??null,disabled:w!==null&&!E,footerSlot:rt&&B==="ready"?Oa:void 0,onFileSelect:Fe=>kc([Fe]),onClear:()=>{}})]})})})},`beat-${he}`)}const Ce=he===de;return n.jsx(z0,{"data-from":"ultron",children:Ce?n.jsx(pD,{text:ke}):J.text},`beat-${he}`)}),Me&&n.jsx(GD,{children:n.jsx(H0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),d.map((J,he)=>{const Ce=J.activity?n.jsx(P0,{children:n.jsx(Gl,{milestones:J.activity,collapsed:!0,hideActions:!0})}):null;if(J.card)return n.jsx(wl,{"data-from":"ultron",children:n.jsxs(Du,{children:[Ce,n.jsx(I0,{$pop:J.card==="week",children:J.card==="roster"?n.jsx(xD,{sample:j}):J.card==="scheduleCta"?n.jsx(T0,{active:e&&_==="schedule",open:xe&&_==="schedule",closeLabel:"Close schedule uploader",onClose:()=>ut("schedule"),onScrollToEnd:Lr,showScrollCue:!Ee,onInsetChange:Fo,children:_==="schedule"?F?n.jsx(yl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:F.state,progress:F.progress,file:F.file,onFileSelect:()=>{},onClear:()=>{}}):w!==null?n.jsx(ND,{children:n.jsxs(bl,{children:[n.jsx(kl,{"aria-hidden":"true",children:n.jsx(_n,{size:16})}),n.jsxs(Cl,{children:[n.jsx(_l,{children:"Schedule"}),n.jsx(jl,{children:w||"Building your week…"})]}),n.jsx(Sl,{"aria-hidden":"true",children:n.jsx(O0,{})})]})}):n.jsxs(AD,{children:[n.jsx(BD,{role:"img","aria-label":`${ar.label}: ${ar.shape}`,children:n.jsx(HD,{children:ar.week.map((Fe,St)=>{const Nn=ar.week.slice(0,St).reduce((At,tn)=>At+tn.shifts.length,0);return n.jsxs(WD,{children:[n.jsx(UD,{children:Fe.label.slice(0,1)}),Fe.shifts.length?Fe.shifts.map((At,tn)=>n.jsx(qD,{$sequence:Nn+tn,$flag:At.flag},`${At.time}-${tn}`)):n.jsx(VD,{})]},Fe.label)})})}),n.jsx(yl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:Oa,onFileSelect:Fe=>fr([Fe]),onClear:()=>{}})]}):n.jsxs(bl,{$done:!0,children:[n.jsx(kl,{"aria-hidden":"true",children:n.jsx(Bu,{size:16})}),n.jsxs(Cl,{children:[n.jsx(_l,{children:"Schedule"}),n.jsx(jl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(Sl,{"aria-hidden":"true",children:n.jsx(fn,{size:18})})]})}):V?n.jsxs(n.Fragment,{children:[n.jsx(yD,{problems:V.problems,week:V.week}),n.jsx(dB,{"aria-label":"Try another schedule",children:or.map(Fe=>n.jsxs(W0,{type:"button",$active:Fe===K,"aria-pressed":Fe===K,onClick:()=>Ho(Fe),children:[n.jsx(_n,{size:14}),Fe]},Fe))})]}):null})]})},he);const rt=n.jsxs(xB,{"data-from":J.role,children:[J.text&&n.jsx(z0,{"data-from":J.role,children:J.text}),J.attachments&&n.jsx(yB,{children:J.attachments.map(Fe=>n.jsxs(U0,{children:[n.jsx(io,{size:14}),Fe]},Fe))})]});return n.jsx(wl,{"data-from":J.role,children:Ce?n.jsxs(Du,{children:[Ce,rt]}):rt},he)}),w!==null&&n.jsx(wl,{"data-from":"ultron",children:n.jsx(rB,{type:"button",onClick:Ea,disabled:!Be,"aria-label":w?`${w} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(nB,{children:[n.jsx(H0,{"aria-hidden":"true",children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),w&&n.jsx(aB,{role:"status","aria-live":"polite",children:w})]})})}),n.jsx("div",{ref:Qt})]})}),B==="ready"&&!xe&&n.jsxs(iB,{children:[n.jsx(sB,{role:"img","aria-label":"Ultron","aria-hidden":w!==null,children:n.jsx(lB,{"aria-hidden":"true",children:n.jsx(cB,{$show:w===null,children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),_==="done"&&!$?n.jsx(fR,{captured:M,onSubmit:J=>{N(!0),s==null||s(J)},onDismiss:()=>S(!0)}):n.jsxs(fB,{onSubmit:J=>{J.preventDefault(),za()},children:[y.length>0&&n.jsx(gB,{"aria-label":"Files to send",children:y.map(J=>n.jsxs(U0,{children:[n.jsx(io,{size:14}),J,n.jsx(vB,{type:"button","aria-label":`Remove ${J}`,onClick:()=>Ji(J),children:n.jsx(To,{size:12})})]},J))}),n.jsxs(mB,{children:[n.jsx(q0,{children:n.jsx(Eg,{state:"idle",onSelect:Bo})}),n.jsx(wB,{rows:1,value:f,placeholder:ts,"aria-label":"Message Ultron",inputMode:"text",autoComplete:"off",onChange:J=>g(J.target.value),onKeyDown:J=>{J.key==="Enter"&&!J.shiftKey&&(J.preventDefault(),za())},onPaste:J=>{var Ce;const he=(Ce=J.clipboardData)==null?void 0:Ce.files;he&&he.length>0&&(J.preventDefault(),Bo(he))}}),n.jsx(q0,{children:n.jsx(Na,{state:Xi?"ready":"disabled-invalid",onSend:za})})]})]})]}),n.jsx(IF,{}),n.jsxs(Dg,{open:ne,onClose:()=>U(!1),size:"lg","aria-label":`${Lt?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(PF,{children:[n.jsx(OF,{"aria-hidden":"true",children:n.jsx(Iv,{size:300})}),n.jsx(DF,{type:"button","aria-label":"Close",onClick:()=>U(!1),children:n.jsx(To,{size:18})}),n.jsxs(FF,{children:[n.jsx(BF,{"aria-hidden":"true"}),Lt?"Ultron early access":"Your welcome grant"]}),!Lt&&n.jsxs(HF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(WF,{children:[n.jsx(UF,{children:"$"}),"1,000"]}),n.jsxs(qF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(VF,{$prominent:Lt,children:Lt?"Be first when access opens.":"Ready to see the real work?"}),n.jsx(GF,{children:Lt?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered."}),n.jsx(YF,{"aria-label":Lt?"Waitlist benefits":"Grant benefits",children:Lt?n.jsxs(n.Fragment,{children:[n.jsx(va,{children:"Priority access"}),n.jsx(va,{children:"One text when ready"}),n.jsx(va,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(va,{children:"100,000 credits"}),n.jsx(va,{children:"Up to 3 months"}),n.jsx(va,{children:"You approve every action"})]})}),ns?n.jsxs(eB,{role:"status",children:[n.jsx(fn,{size:20}),Lt?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live."]}):n.jsxs(KF,{onSubmit:J=>{J.preventDefault(),rs&&(Lt?Zi():Qi())},children:[n.jsx(QF,{htmlFor:"welcome-grant-phone",children:Lt?"Where should we send your access text?":"Where should we text your invite?"}),n.jsxs(ZF,{children:[n.jsx(XF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",minLength:10,maxLength:15,value:ae,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:J=>se(J.target.value.replace(/\D/g,""))}),n.jsx(JF,{type:"submit",variant:"tertiary",size:"lg",disabled:!rs,children:Lt?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(tB,{children:Lt?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(zF,{type:"button",onClick:()=>{He.current&&window.clearTimeout(He.current),O(J=>J==="grant"?"waitlist":"grant")},children:["Demo: show ",Lt?"welcome grant":"waitlist"]})]})]})}const gD={"Registered Nurse":{short:"RN",color:"blue"},"Charge Nurse":{short:"Charge RN",color:"pink"},"Licensed Practical Nurse":{short:"LPN",color:"azure"},"Licensed Vocational Nurse":{short:"LVN",color:"azure"},"Certified Nursing Assistant":{short:"CNA",color:"green"},RN:{short:"RN",color:"blue"},LPN:{short:"LPN",color:"azure"},CNA:{short:"CNA",color:"green"},Caregiver:{short:"Caregiver",color:"matcha"},"Med Aide":{short:"Med Aide",color:"purple"}};function vD(e){return gD[e]??{short:e,color:"neutral"}}function xD({sample:e}){const[o,i]=v.useState(!0),s=SO.slice(0,6),l=(e?Xl:zi)-s.length;return n.jsxs(kx,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(XD,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-people",onClick:()=>i(d=>!d),children:[e?n.jsx(JD,{children:n.jsxs(eF,{children:[Xl," sample teammates, ready to run a full week"]})}):n.jsxs(tF,{children:[n.jsxs(nF,{children:[zi," ",n.jsxs(rF,{children:["/",Jh]})]}),n.jsxs(oF,{children:[n.jsx(fn,{size:16})," imported clean"]})]}),n.jsx(Cx,{$open:o,"aria-hidden":"true",children:n.jsx(Fn,{size:16})})]}),o&&n.jsxs(aF,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[s.map((d,h)=>{const f=vD(d.role);return n.jsxs(iF,{$i:h,children:[n.jsxs(sF,{"aria-hidden":"true",children:[uD(d.name),n.jsx("img",{src:hD(h),alt:"",loading:"lazy",onError:g=>{g.currentTarget.style.display="none"}})]}),n.jsxs(lF,{children:[n.jsx(cF,{children:d.name}),n.jsxs(dF,{children:[d.location," · ",d.tenure]})]}),n.jsx(tr,{size:"sm",variant:"subtle",color:f.color,children:f.short}),e&&n.jsx(tr,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},d.name)}),n.jsx(uF,{children:e?`+ ${l} more · every one tagged “Sample”`:`+ ${l} more imported clean`})]})]})}function yD({problems:e,week:o}){const[i,s]=v.useState(!1),l=o.map((f,g)=>o.slice(0,g).reduce((y,x)=>y+x.shifts.length,0)),d=o.filter(f=>f.shifts.length>0).length,h=o.reduce((f,g)=>f+g.shifts.length,0);return n.jsxs(kx,{"aria-label":"Your week",children:[n.jsxs(vF,{children:[n.jsxs(yF,{children:[n.jsxs(D0,{children:[n.jsx(F0,{children:d})," days"]}),n.jsx(wF,{"aria-hidden":"true",children:"·"}),n.jsxs(D0,{children:[n.jsx(F0,{children:h})," shifts"]})]}),n.jsxs(xF,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(f=>!f),children:[n.jsx(hF,{"aria-hidden":"true",children:n.jsx(Fl,{size:15})}),n.jsx(Cx,{$open:i,"aria-hidden":"true",children:n.jsx(Fn,{size:16})})]})]}),i&&n.jsx(fF,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((f,g)=>n.jsxs(mF,{children:[n.jsx(bF,{$kind:f.kind,"aria-hidden":"true",children:f.kind==="missing"?n.jsx(_n,{size:15}):n.jsx(Fl,{size:15})}),n.jsxs(gF,{children:[n.jsxs(kF,{children:[f.worker," · ",f.role]}),n.jsx(CF,{children:f.detail})]})]},`${f.worker}-${g}`))}),n.jsx(_F,{children:n.jsx(jF,{role:"table","aria-label":"Next week's shifts",children:o.map((f,g)=>n.jsxs(SF,{role:"column",children:[n.jsx($F,{children:f.label}),f.shifts.map((y,x)=>n.jsxs(MF,{$flag:y.flag,$sequence:l[g]+x,children:[n.jsx(NF,{children:y.time}),n.jsx(RF,{children:y.who})]},`${f.label}-${x}`))]},f.label))})})]})}const wD=p.div`
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
`,gx="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",vx=Pe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${gx};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,xx=e=>Pe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${gx}, transparent);
  pointer-events: none;
`,bD=p.header`
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
    ${vx}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${xx("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,Wt="320ms",Ut="cubic-bezier(0.22, 1, 0.36, 1)",kD=p.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?VO:px}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${Wt} ${Ut};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?YO:GO}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,CD=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  /* Condensed: centred on the text lockup rather than on the bar, since the
     lockup itself sits slightly below the bar's middle. The block runs from the
     title's top (15) through the subtitle's bottom (15 + 14×1.5 + 14×1.5 = 57),
     so its centre is 36 and a 36px mark starts at 18. */
  top: ${e=>e.$condensed?"18px":"24px"};
  left: ${e=>e.$condensed?"var(--space-6)":"50%"};
  width: ${e=>e.$condensed?"36px":"140px"};
  height: ${e=>e.$condensed?"36px":"140px"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  opacity: 1;
  visibility: visible;
  transition:
    top ${Wt} ${Ut},
    left ${Wt} ${Ut},
    width ${Wt} ${Ut},
    height ${Wt} ${Ut},
    transform ${Wt} ${Ut};

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
    top: ${e=>e.$condensed?"8px":"16px"};
    left: ${e=>e.$condensed?"var(--space-4)":"50%"};
    width: ${e=>e.$condensed?"32px":"140px"};
    height: ${e=>e.$condensed?"32px":"140px"};
  }

  /* Short viewports drop the condensed subtitle (see PageHeaderSubtitle), which
     leaves the title alone as the lockup — a 7 → 28 block, centre 17.5. */
  @media (max-width: 600px) and (max-height: 700px) {
    top: ${e=>e.$condensed?"1.5px":"16px"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,E0=p.span`
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
`,_D=p.div`
  display: contents;
`,jD=p.span`
  position: absolute;
  top: ${e=>e.$condensed?"15px":"180px"};
  left: ${e=>e.$condensed?"72px":"50%"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  max-width: ${e=>e.$condensed?"calc(100% - 96px)":"calc(100% - 48px)"};
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"clamp(24px, 3vw, 30px)"};
  line-height: ${e=>e.$condensed?"var(--line-height-relaxed)":"var(--line-height-tight)"};
  font-weight: var(--font-weight-semibold);
  letter-spacing: ${e=>e.$condensed?"var(--tracking-wide)":"var(--tracking-tight)"};
  color: var(--color-content-primary);
  white-space: nowrap;
  transition:
    top ${Wt} ${Ut},
    left ${Wt} ${Ut},
    transform ${Wt} ${Ut},
    font-size ${Wt} ${Ut},
    line-height ${Wt} ${Ut},
    letter-spacing ${Wt} ${Ut};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"7px":"168px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,SD=p.span`
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
    top ${Wt} ${Ut},
    left ${Wt} ${Ut},
    transform ${Wt} ${Ut},
    font-size ${Wt} ${Ut},
    line-height ${Wt} ${Ut};

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
`,$D=p.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Do=we`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,yx=we`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,MD=we`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,I0=p.div`
  animation: ${e=>e.$pop?yx:Do}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ND=p.div`
  transform-origin: center bottom;
  animation: ${yx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,RD=we`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,LD=we`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,wx=p.div`
  position: relative;
  width: 100%;
`,AD=p(wx)``,bx=we`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,TD=p.div`
  display: contents;

  @media (max-width: 600px) {
    ${e=>e.$open&&Pe`
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
`,ED=p.button`
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
  ${Bn}
  /* Denser than the sheet's own glass. The card is large enough that a 50% fill
     still reads as a surface, but at 44px the thread's prose runs straight
     behind the chevron and turns it to mud — this stays glass (same blur, same
     edge) while giving the glyph a field to sit on. */
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  /* Rises with the card rather than with a shared wrapper — see the shell. */
  animation: ${bx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

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
`,ID=p.div`
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    /* Dismissing the sheet doesn't dismiss the intake — the card just stops
       being a sheet and settles back into the thread, where it stays reachable
       as the ordinary inline uploader (its desktop placement). Only one copy
       exists either way: while open, the surface is portaled to body instead of
       rendering here. */
    display: block;

    ${e=>e.$open&&Pe`
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
      ${Bn}
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
      animation: ${bx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,PD=p.button`
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
`,zD=p.div`
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
`,OD=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${LD} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,DD=p.span`
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
`,FD=we`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,BD=p.div`
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
`,HD=p.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,WD=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,UD=p.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,qD=p.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${FD} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,VD=p.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,yl=p(qg)`
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
    animation: ${RD} 300ms var(--ease-out) both;
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
`,GD=p.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Do} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YD=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,KD=p.span`
  animation: ${YD} ${hx}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,P0=p.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,QD=p.div`
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

    /* Scrollable room the height of the open intake sheet, so the conversation
       can be pulled out from under it (the sheet's own scroll cue does exactly
       that). Without this the thread simply ends behind the card and its last
       turns are unreachable. Only while a sheet stands — 0 collapses it. */
    ${e=>e.$bottomInset?Pe`
      padding-bottom: calc(${e.$bottomInset}px + var(--space-4));
    `:""}
  }
`,wl=p.div`
  display: flex;
  animation: ${Do} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Du=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,z0=p.div`
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
`,bl=p.div`
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
  ${e=>e.$done&&Pe`
    ${Bn}
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
`,kl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Cl=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,_l=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,jl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,ZD=we`
  to { transform: rotate(360deg); }
`,O0=p.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${ZD} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,Sl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,kx=p.div`
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
`,XD=p.button`
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
`,JD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,eF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,tF=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,nF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,rF=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,oF=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,aF=p.div`
  display: flex;
  flex-direction: column;
`,iF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Do} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sF=p.span`
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
`,lF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,cF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,uF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Do} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hF=p.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Cx=p.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,pF=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Do} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fF=p(pF)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,mF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,gF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,vF=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,xF=p.button`
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
`,yF=p.div`
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
`,F0=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,wF=p.span`
  color: var(--color-content-tertiary);
`,bF=p.span`
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
`,kF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,CF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,_F=p.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,jF=p.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,SF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,$F=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,MF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${MD} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + ${e=>e.$sequence} * 70ms);

  ${e=>e.$flag==="open"&&Pe`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Pe`
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
`,NF=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,RF=p.span`
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
`,B0="cubic-bezier(0.22, 1, 0.36, 1)",LF=we`
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
`,AF=we`
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
`,TF=we`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,EF=we`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,IF=P2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${LF} 440ms ${B0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${TF} 560ms ${B0} both;
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
    animation: ${AF} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${EF} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,PF=p.section`
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
`,zF=p.button`
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
`,OF=p.div`
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
`,DF=p.button`
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
`,FF=p.span`
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
`,BF=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,HF=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,WF=p.div`
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
`,UF=p.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,qF=p.span`
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
`,VF=p.h2`
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
`,GF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,YF=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,va=p.span`
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
`,KF=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,QF=p.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,ZF=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,XF=p.input`
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
`,JF=p(Oe)`
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
`,eB=p.div`
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
`,tB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,H0=p.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,nB=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,rB=p.button`
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
`,oB=we`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,aB=p.span`
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
  animation: ${oB} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,iB=p.div`
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
    ${vx}
  }
  &::after {
    ${xx("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Do} var(--duration-slow, 420ms) var(--ease-out) both;

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
`,sB=p.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,lB=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,cB=p.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,dB=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,uB=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,hB=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,pB=p(Oe)`
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
  ${e=>e.$secondary&&Pe`
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
`,fB=p.form`
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
`,mB=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,gB=p.div`
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
`,vB=p.button`
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
`,xB=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,yB=p.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,wB=p.textarea`
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
`;function bB(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function kB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function CB(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=kB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=bB(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const ih="ultron-theme";function _B(){if(typeof window>"u")return null;const e=window.localStorage.getItem(ih);return e==="light"||e==="dark"?e:null}function jB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function SB(){const e=Hh("(prefers-color-scheme: dark)"),[o,i]=v.useState(_B);v.useEffect(()=>{jB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(ih,o):window.localStorage.removeItem(ih))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const $B="calc(env(safe-area-inset-top, 0px) + 49px)",MB=p.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${cv} {
    top: calc(${$B} + var(--space-3));
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
`;function NB(){const{theme:e,toggle:o}=SB(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(MB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(gh,{size:18}):n.jsx(Mg,{size:18})})}const V0=[{id:"ultron",label:"Ultron",icon:n.jsx(st,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(D$,{})},{id:"engaged",label:"Engage",icon:n.jsx(F$,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(B$,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(H$,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(W$,{})}],G0=[{id:"apps",label:"Apps",icon:n.jsx(U$,{})}],Y0=[{id:"docs",label:"Document Studio",icon:n.jsx(W2,{})},{id:"form",label:"Form",icon:n.jsx(q$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(V$,{})},{id:"policy",label:"Policy",icon:n.jsx(G$,{}),activeIcon:n.jsx("img",{src:_O,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(Io,{}),activeIcon:n.jsx("img",{src:jO,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(Y$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(K$,{})}],RB=3e3,LB=4e3,AB=p.button`
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
`,TB=we`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,EB=we`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,IB=we`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,PB=p.span`
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
      ${TB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${EB} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${IB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,zB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,OB=p(Pg)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,DB=p(zg)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,FB=p(Og)`
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
`,BB=P2`
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
`,HB=p.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,WB=p.button`
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
`;function UB({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(Ch,{placement:"bottom-end",width:168,trigger:n.jsx(WB,{type:"button","aria-label":"Page options",children:n.jsx(Sg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(Tg,{size:16}),onClick:e}]}]})})}const qB={needs_attention:n.jsx(Fl,{size:16}),live:n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(fn,{size:16})},K0={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function VB({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[h,f]=v.useState(null),[g,y]=v.useState(null),[x,w]=v.useState("ultron"),[k,_]=v.useState("employees"),C=bM(),M=C.revealedNewIds.reduce((xe,Ae)=>{const Xe=C.threads.find(He=>He.id===Ae),Ve=!!(Xe&&K0[Xe.status]==="new"&&!C.viewedIds.includes(Ae));return xe+(Ve?1:0)},0),[N,$]=v.useState(!!e),[S,j]=v.useState(!1),[z,A]=v.useState(!!e),[R,E]=v.useState(!1),L=v.useRef(null),[F,q]=v.useState(!1),V=v.useRef(null);v.useEffect(()=>()=>{L.current!==null&&window.clearTimeout(L.current),V.current!==null&&window.clearTimeout(V.current)},[]);const H=()=>{L.current!==null&&(window.clearTimeout(L.current),L.current=null),E(!1)},K=()=>{H(),L.current=window.setTimeout(()=>{L.current=null,C.surfaceDemoThread("shift_drop_maria"),ee(),E(!0)},RB)},ee=()=>{V.current!==null&&window.clearTimeout(V.current),q(!0),V.current=window.setTimeout(()=>{V.current=null,q(!1)},LB)},[ae,se]=v.useState(!e),[le,Q]=v.useState([]),[D,Y]=v.useState(null),T=v.useRef(0),O=xe=>{w("ultron"),$(!1),se(!1),Y(xe)},ne=()=>{A(!0),w("ultron"),se(!1),Y(null),$(!0)},U=()=>{w("ultron"),$(!1),se(!0),Y(null)},Z=()=>{const xe=`page-${T.current++}`;Q(Ae=>[...Ae,{id:xe,title:"New page"}]),O(xe)},[ce,B]=v.useState({}),[P,oe]=v.useState({}),fe=v.useRef({}),de=(xe,Ae)=>{const Xe=Ae.trim();if(!Xe)return;const Ve=(ce[xe]??[]).filter(He=>He.role==="ultron").length;B(He=>({...He,[xe]:[...He[xe]??[],{role:"operator",text:Xe}]})),oe(He=>({...He,[xe]:!0})),fe.current[xe]=window.setTimeout(()=>{B(He=>({...He,[xe]:[...He[xe]??[],{role:"ultron",text:Oh(Xe,Ve)}]})),oe(He=>({...He,[xe]:!1})),delete fe.current[xe]},1100)},ve=xe=>{fe.current[xe]&&(window.clearTimeout(fe.current[xe]),delete fe.current[xe]),Q(Ae=>Ae.filter(Xe=>Xe.id!==xe)),B(Ae=>{const{[xe]:Xe,...Ve}=Ae;return Ve}),oe(Ae=>{const{[xe]:Xe,...Ve}=Ae;return Ve}),D===xe&&(Y(null),se(!0))},ke=ae?"live":C.selectedThread?K0[C.selectedThread.status]:"new";CB({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:y});const[Se,Me]=v.useState(!1),Le=xe=>xe.map(Ae=>({...Ae,isActive:Ae.id===i,disabled:Ae.id!=="ultron",onClick:Ae.id==="ultron"?()=>s("ultron"):()=>Me(!0)})),De=[{id:"memory",label:"Memory",icon:n.jsx(nc,{size:16}),isActive:x==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(pg,{size:16})}],Be=n.jsx(nx,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),ze=zl(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,Ke={id:"welcome",label:ze?`${ze} account setup`:"Account setup",icon:n.jsx(st,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"}),isActive:N,onClick:ne},Je=le.map(xe=>({id:xe.id,label:xe.title,icon:n.jsx(W2,{}),isActive:D===xe.id,onClick:()=>O(xe.id),trailingSlot:n.jsx(UB,{onDelete:()=>ve(xe.id)})})),ut=x==="account"?rh.map(xe=>({type:"single",item:{id:xe.id,label:xe.label,icon:xe.icon,isActive:k===xe.id,onClick:()=>_(xe.id)}})):C.groups.flatMap(xe=>{const Ae=xe.id==="needs_attention"?"new":xe.id==="resolved"?"done":"working",Xe=xe.id==="needs_attention"?xe.threads.filter(tt=>tt.status==="analyzing"||C.revealedNewIds.includes(tt.id)):xe.threads,Ve=xe.id==="needs_attention"&&!S||xe.id==="live"&&S,He=xe.id==="needs_attention"?Je:[],Qt={type:"group",group:{id:xe.id,label:xe.id==="needs_attention"?"New":xe.label,icon:qB[xe.id],trailingBadge:n.jsx(Oo,{children:Xe.length+(Ve?1:0)+He.length}),defaultExpanded:!0,outlined:!1,children:[...Ve?[Ke]:[],...He,...Xe.map(tt=>({id:tt.id,label:tt.id.startsWith("detected_")?n.jsx(AT,{text:e0(tt.name,Ae)}):e0(tt.name,Ae),icon:tt.id==="shift_drop_maria"&&F?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Ae==="new"?tt.status==="analyzing"?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(st,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Ae==="working"?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:tt.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(st,{mark:"pulse",size:32,tone:"auto",state:tt.status==="unresolved"?"idle":"static",color:tt.status==="unresolved"?"var(--color-orange-content-tertiary)":C.viewedIds.includes(tt.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!ae&&!D&&ke===Ae&&C.selectedId===tt.id,onClick:()=>{tt.id==="shift_drop_maria"&&H(),w("ultron"),$(!1),se(!1),Y(null),C.setSelectedId(tt.id)},spotlightPrompt:R&&tt.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:tt.id==="shift_drop_maria"?H:void 0,trailingSlot:C.savedWorkflowIds.includes(tt.id)?n.jsx(Rr,{content:"Saved as workflow",placement:"top",children:n.jsx(PB,{"aria-label":"Saved as workflow",children:n.jsx(Io,{})})}):void 0}))]}};return xe.id==="resolved"?[{type:"divider",id:"done-divider"},Qt]:xe.id==="live"?[{type:"divider",id:"working-divider"},Qt]:[Qt]}),qe=[{id:"main",label:"Workspace",items:Le(V0)},{id:"tools",label:"Tools",items:Le(G0)},{id:"bottom",label:"Apps",items:Le(Y0)}];return n.jsxs(n.Fragment,{children:[n.jsx(NB,{}),n.jsx(BB,{}),n.jsxs(CO,{items:Le(V0),toolItems:Le(G0),bottomItems:Le(Y0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:ut,menuHeader:x==="ultron"?n.jsx(AB,{$active:ae&&!D,onClick:U,"aria-label":"Live — Ultron presence","aria-current":ae&&!D?"page":void 0,children:n.jsx($T,{onNew:Z})}):void 0,pageEntries:De,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:Be,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:qe,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:xe=>{xe==="ultron"&&s("ultron")},onSelectPersona:f,onHome:U,onNewPage:Z,openSecondaryNav:R,unreadEventCount:M},children:[z&&n.jsx(HB,{$visible:x==="ultron"&&N,"aria-hidden":x!=="ultron"||!N,children:n.jsx(mD,{active:x==="ultron"&&N,answers:e,onContinued:()=>j(!0),onPhoneSubmitted:K})}),x==="memory"?n.jsx(PT,{}):x==="account"?n.jsx(QT,{collectionId:k}):N?null:D?n.jsx(sT,{messages:ce[D]??[],replying:P[D]??!1,onSend:xe=>de(D,xe)},D):n.jsx(XA,{threads:C.threads,stageById:C.stageById,section:ke,analyzedIds:C.analyzedIds,outboundByThread:C.outboundByThread,chatByThread:C.chatByThread,selectedId:C.selectedId,onDecide:C.decide,onAction:C.commit,onCompleteRun:C.completeRun,onRefinement:C.refine,onSaveWorkflow:C.saveWorkflow,pendingWorkflowIds:C.pendingWorkflowIds,onToggleSaveWorkflow:C.toggleWorkflowSave,savedWorkflowIds:C.savedWorkflowIds,onSend:C.sendMessage,replyingIds:C.replyingIds,onStop:C.stopReply,onClose:()=>{w("ultron"),$(!1),se(!0)},onDetectEvent:C.detectEvent,onRevealNew:C.revealNew})]}),n.jsxs(Dg,{open:Se,onClose:()=>Me(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(OB,{onClose:()=>Me(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(DB,{children:n.jsx(zB,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(FB,{children:n.jsx(Oe,{variant:"primary",onClick:()=>Me(!1),children:"Got it"})})]})]})}const Q0="cubic-bezier(0.22, 1, 0.36, 1)",Z0=we`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,GB=we`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,YB=p.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${Z0} 460ms ${Q0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${Z0} 500ms ${Q0} 90ms both;
  }
  main {
    animation: ${GB} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Fu="tb:onboarding-complete";function KB(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(Fu)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(Fu,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Fu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(YB,{children:n.jsx(VB,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(bP,{onEnterApp:l})}v3.createRoot(document.getElementById("root")).render(n.jsx(pn.StrictMode,{children:n.jsx(F8,{children:n.jsx(KB,{})})}));
