(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function Q0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},mi={},tu={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function h3(){if(Cf)return qe;Cf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,S={};function $(T,O,X){this.props=T,this.context=O,this.refs=S,this.updater=X||M}$.prototype.isReactComponent={},$.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},$.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function R(){}R.prototype=$.prototype;function j(T,O,X){this.props=T,this.context=O,this.refs=S,this.updater=X||M}var C=j.prototype=new R;C.constructor=j,_(C,$.prototype),C.isPureReactComponent=!0;var P=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function A(T,O,X){var W,ee={},le=null,B=null;if(O!=null)for(W in O.ref!==void 0&&(B=O.ref),O.key!==void 0&&(le=""+O.key),O)N.call(O,W)&&!E.hasOwnProperty(W)&&(ee[W]=O[W]);var z=arguments.length-2;if(z===1)ee.children=X;else if(1<z){for(var oe=Array(z),fe=0;fe<z;fe++)oe[fe]=arguments[fe+2];ee.children=oe}if(T&&T.defaultProps)for(W in z=T.defaultProps,z)ee[W]===void 0&&(ee[W]=z[W]);return{$$typeof:e,type:T,key:le,ref:B,props:ee,_owner:L.current}}function D(T,O){return{$$typeof:e,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function K(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(X){return O[X]})}var U=/\/+/g;function Y(T,O){return typeof T=="object"&&T!==null&&T.key!=null?K(""+T.key):O.toString(36)}function J(T,O,X,W,ee){var le=typeof T;(le==="undefined"||le==="boolean")&&(T=null);var B=!1;if(T===null)B=!0;else switch(le){case"string":case"number":B=!0;break;case"object":switch(T.$$typeof){case e:case o:B=!0}}if(B)return B=T,ee=ee(B),T=W===""?"."+Y(B,0):W,P(ee)?(X="",T!=null&&(X=T.replace(U,"$&/")+"/"),J(ee,O,X,"",function(fe){return fe})):ee!=null&&(G(ee)&&(ee=D(ee,X+(!ee.key||B&&B.key===ee.key?"":(""+ee.key).replace(U,"$&/")+"/")+T)),O.push(ee)),1;if(B=0,W=W===""?".":W+":",P(T))for(var z=0;z<T.length;z++){le=T[z];var oe=W+Y(le,z);B+=J(le,O,X,oe,ee)}else if(oe=k(T),typeof oe=="function")for(T=oe.call(T),z=0;!(le=T.next()).done;)le=le.value,oe=W+Y(le,z++),B+=J(le,O,X,oe,ee);else if(le==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return B}function ae(T,O,X){if(T==null)return T;var W=[],ee=0;return J(T,W,"","",function(le){return O.call(X,le,ee++)}),W}function de(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(X){(T._status===0||T._status===-1)&&(T._status=1,T._result=X)},function(X){(T._status===0||T._status===-1)&&(T._status=2,T._result=X)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var se={current:null},Q={transition:null},F={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Q,ReactCurrentOwner:L};function q(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:ae,forEach:function(T,O,X){ae(T,function(){O.apply(this,arguments)},X)},count:function(T){var O=0;return ae(T,function(){O++}),O},toArray:function(T){return ae(T,function(O){return O})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},qe.Component=$,qe.Fragment=i,qe.Profiler=l,qe.PureComponent=j,qe.StrictMode=s,qe.Suspense=g,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,qe.act=q,qe.cloneElement=function(T,O,X){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var W=_({},T.props),ee=T.key,le=T.ref,B=T._owner;if(O!=null){if(O.ref!==void 0&&(le=O.ref,B=L.current),O.key!==void 0&&(ee=""+O.key),T.type&&T.type.defaultProps)var z=T.type.defaultProps;for(oe in O)N.call(O,oe)&&!E.hasOwnProperty(oe)&&(W[oe]=O[oe]===void 0&&z!==void 0?z[oe]:O[oe])}var oe=arguments.length-2;if(oe===1)W.children=X;else if(1<oe){z=Array(oe);for(var fe=0;fe<oe;fe++)z[fe]=arguments[fe+2];W.children=z}return{$$typeof:e,type:T.type,key:ee,ref:le,props:W,_owner:B}},qe.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},qe.createElement=A,qe.createFactory=function(T){var O=A.bind(null,T);return O.type=T,O},qe.createRef=function(){return{current:null}},qe.forwardRef=function(T){return{$$typeof:p,render:T}},qe.isValidElement=G,qe.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:de}},qe.memo=function(T,O){return{$$typeof:x,type:T,compare:O===void 0?null:O}},qe.startTransition=function(T){var O=Q.transition;Q.transition={};try{T()}finally{Q.transition=O}},qe.unstable_act=q,qe.useCallback=function(T,O){return se.current.useCallback(T,O)},qe.useContext=function(T){return se.current.useContext(T)},qe.useDebugValue=function(){},qe.useDeferredValue=function(T){return se.current.useDeferredValue(T)},qe.useEffect=function(T,O){return se.current.useEffect(T,O)},qe.useId=function(){return se.current.useId()},qe.useImperativeHandle=function(T,O,X){return se.current.useImperativeHandle(T,O,X)},qe.useInsertionEffect=function(T,O){return se.current.useInsertionEffect(T,O)},qe.useLayoutEffect=function(T,O){return se.current.useLayoutEffect(T,O)},qe.useMemo=function(T,O){return se.current.useMemo(T,O)},qe.useReducer=function(T,O,X){return se.current.useReducer(T,O,X)},qe.useRef=function(T){return se.current.useRef(T)},qe.useState=function(T){return se.current.useState(T)},qe.useSyncExternalStore=function(T,O,X){return se.current.useSyncExternalStore(T,O,X)},qe.useTransition=function(){return se.current.useTransition()},qe.version="18.3.1",qe}var jf;function sh(){return jf||(jf=1,tu.exports=h3()),tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function p3(){if(Sf)return mi;Sf=1;var e=sh(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,x){var y,w={},k=null,M=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(M=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(p&&p.defaultProps)for(y in g=p.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:o,type:p,key:k,ref:M,props:w,_owner:l.current}}return mi.Fragment=i,mi.jsx=h,mi.jsxs=h,mi}var $f;function f3(){return $f||($f=1,eu.exports=p3()),eu.exports}var n=f3(),v=sh();const fn=Q0(v);var il={},nu={exports:{}},cn={},ru={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function m3(){return Mf||(Mf=1,(function(e){function o(Q,F){var q=Q.length;Q.push(F);e:for(;0<q;){var T=q-1>>>1,O=Q[T];if(0<l(O,F))Q[T]=F,Q[q]=O,q=T;else break e}}function i(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var F=Q[0],q=Q.pop();if(q!==F){Q[0]=q;e:for(var T=0,O=Q.length,X=O>>>1;T<X;){var W=2*(T+1)-1,ee=Q[W],le=W+1,B=Q[le];if(0>l(ee,q))le<O&&0>l(B,ee)?(Q[T]=B,Q[le]=q,T=le):(Q[T]=ee,Q[W]=q,T=W);else if(le<O&&0>l(B,q))Q[T]=B,Q[le]=q,T=le;else break e}}return F}function l(Q,F){var q=Q.sortIndex-F.sortIndex;return q!==0?q:Q.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();e.unstable_now=function(){return h.now()-p}}var g=[],x=[],y=1,w=null,k=3,M=!1,_=!1,S=!1,$=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Q){for(var F=i(x);F!==null;){if(F.callback===null)s(x);else if(F.startTime<=Q)s(x),F.sortIndex=F.expirationTime,o(g,F);else break;F=i(x)}}function P(Q){if(S=!1,C(Q),!_)if(i(g)!==null)_=!0,de(N);else{var F=i(x);F!==null&&se(P,F.startTime-Q)}}function N(Q,F){_=!1,S&&(S=!1,R(A),A=-1),M=!0;var q=k;try{for(C(F),w=i(g);w!==null&&(!(w.expirationTime>F)||Q&&!K());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var O=T(w.expirationTime<=F);F=e.unstable_now(),typeof O=="function"?w.callback=O:w===i(g)&&s(g),C(F)}else s(g);w=i(g)}if(w!==null)var X=!0;else{var W=i(x);W!==null&&se(P,W.startTime-F),X=!1}return X}finally{w=null,k=q,M=!1}}var L=!1,E=null,A=-1,D=5,G=-1;function K(){return!(e.unstable_now()-G<D)}function U(){if(E!==null){var Q=e.unstable_now();G=Q;var F=!0;try{F=E(!0,Q)}finally{F?Y():(L=!1,E=null)}}else L=!1}var Y;if(typeof j=="function")Y=function(){j(U)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ae=J.port2;J.port1.onmessage=U,Y=function(){ae.postMessage(null)}}else Y=function(){$(U,0)};function de(Q){E=Q,L||(L=!0,Y())}function se(Q,F){A=$(function(){Q(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){_||M||(_=!0,de(N))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var F=3;break;default:F=k}var q=k;k=F;try{return Q()}finally{k=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,F){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var q=k;k=Q;try{return F()}finally{k=q}},e.unstable_scheduleCallback=function(Q,F,q){var T=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?T+q:T):q=T,Q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,Q={id:y++,callback:F,priorityLevel:Q,startTime:q,expirationTime:O,sortIndex:-1},q>T?(Q.sortIndex=q,o(x,Q),i(g)===null&&Q===i(x)&&(S?(R(A),A=-1):S=!0,se(P,q-T))):(Q.sortIndex=O,o(g,Q),_||M||(_=!0,de(N))),Q},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(Q){var F=k;return function(){var q=k;k=F;try{return Q.apply(this,arguments)}finally{k=q}}}})(ou)),ou}var Rf;function g3(){return Rf||(Rf=1,ru.exports=m3()),ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function v3(){if(Nf)return cn;Nf=1;var e=sh(),o=g3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return g.call(w,t)?!0:g.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function M(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,r,a,c){if(r===null||typeof r>"u"||M(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function S(t,r,a,c,u,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new S(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new S(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new S(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new S(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new S(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new S(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new S(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new S(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new S(t,5,!1,t.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function j(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(R,j);$[r]=new S(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(R,j);$[r]=new S(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(R,j);$[r]=new S(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new S(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new S(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,r,a,c){var u=$.hasOwnProperty(r)?$[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var P=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),K=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Q=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,T;function O(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var X=!1;function W(t,r){if(!t||X)return"";X=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),b=u.length-1,I=m.length-1;1<=b&&0<=I&&u[b]!==m[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==m[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==m[I]){var H=`
`+u[b].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=b&&0<=I);break}}}finally{X=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function ee(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=W(t.type,!1),t;case 11:return t=W(t.type.render,!1),t;case 1:return t=W(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case L:return"Portal";case D:return"Profiler";case A:return"StrictMode";case Y:return"Suspense";case J:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case U:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case de:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}function B(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function z(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ce(t){t._valueTracker||(t._valueTracker=fe(t))}function ve(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=oe(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function we(t,r){var a=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Le(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=z(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function De(t,r){r=r.checked,r!=null&&C(t,"checked",r,!1)}function He(t,r){De(t,r);var a=z(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ae(t,r.type,a):r.hasOwnProperty("defaultValue")&&Ae(t,r.type,z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function We(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ae(t,r,a){(r!=="number"||be(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Fe=Array.isArray;function Ke(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+z(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function wt(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ie(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Fe(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:z(a)}}function st(t,r){var a=z(r.value),c=z(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Qe(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Tt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Tt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xe,Ze=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(xe=xe||document.createElement("div"),xe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function mt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bt=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(t){bt.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ct[r]=Ct[t]})});function or(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ct.hasOwnProperty(t)&&Ct[t]?(""+r).trim():r+"px"}function Ce(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=or(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var Xe=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(t,r){if(r){if(Xe[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function jt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mn=null;function Ln(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var co=null,Nr=null,Lr=null;function qi(t){if(t=ei(t)){if(typeof co!="function")throw Error(i(280));var r=t.stateNode;r&&(r=bs(r),co(t.stateNode,t.type,r))}}function Vi(t){Nr?Lr?Lr.push(t):Lr=[t]:Nr=t}function Gi(){if(Nr){var t=Nr,r=Lr;if(Lr=Nr=null,qi(t),r)for(t=0;t<r.length;t++)qi(r[t])}}function Ea(t,r){return t(r)}function Yi(){}var pr=!1;function Ki(t,r,a){if(pr)return t(r,a);pr=!0;try{return Ea(t,r,a)}finally{pr=!1,(Nr!==null||Lr!==null)&&(Yi(),Gi())}}function Wn(t,r){var a=t.stateNode;if(a===null)return null;var c=bs(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var uo=!1;if(p)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){uo=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{uo=!1}function yc(t,r,a,c,u,m,b,I,H){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(he){this.onError(he)}}var Un=!1,Oo=null,Ar=!1,Ia=null,wc={onError:function(t){Un=!0,Oo=t}};function Qi(t,r,a,c,u,m,b,I,H){Un=!1,Oo=null,yc.apply(wc,arguments)}function Zi(t,r,a,c,u,m,b,I,H){if(Qi.apply(this,arguments),Un){if(Un){var re=Oo;Un=!1,Oo=null}else throw Error(i(198));Ar||(Ar=!0,Ia=re)}}function fr(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Et(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Xi(t){if(fr(t)!==t)throw Error(i(188))}function Ji(t){var r=t.alternate;if(!r){if(r=fr(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===a)return Xi(u),t;if(m===c)return Xi(u),r;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=m;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=m;break}if(I===c){b=!0,c=u,a=m;break}I=I.sibling}if(!b){for(I=m.child;I;){if(I===a){b=!0,a=m,c=u;break}if(I===c){b=!0,c=m,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function ne(t){return t=Ji(t),t!==null?ge(t):null}function ge(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=ge(t);if(r!==null)return r;t=t.sibling}return null}var ke=o.unstable_scheduleCallback,at=o.unstable_cancelCallback,Oe=o.unstable_shouldYield,Yt=o.unstable_requestPaint,et=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,gn=o.unstable_ImmediatePriority,es=o.unstable_UserBlockingPriority,ts=o.unstable_NormalPriority,Sx=o.unstable_LowPriority,Jh=o.unstable_IdlePriority,ns=null,ar=null;function $x(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(ns,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Nx,Mx=Math.log,Rx=Math.LN2;function Nx(t){return t>>>=0,t===0?32:31-(Mx(t)/Rx|0)|0}var rs=64,os=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function as(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=Pa(I):(m&=b,m!==0&&(c=Pa(m)))}else b=a&~u,b!==0?c=Pa(b):m!==0&&(c=Pa(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-qn(r),u=1<<a,c|=t[a],r&=~u;return c}function Lx(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ax(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-qn(m),I=1<<b,H=u[b];H===-1?((I&a)===0||(I&c)!==0)&&(u[b]=Lx(I,r)):H<=r&&(t.expiredLanes|=I),m&=~I}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ep(){var t=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),t}function kc(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function za(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-qn(r),t[r]=a}function Tx(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-qn(a),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~m}}function _c(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-qn(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var rt=0;function tp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var np,Cc,rp,op,ap,jc=!1,is=[],Tr=null,Er=null,Ir=null,Oa=new Map,Da=new Map,Pr=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,r){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Oa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(r.pointerId)}}function Fa(t,r,a,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=ei(r),r!==null&&Cc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Ix(t,r,a,c,u){switch(r){case"focusin":return Tr=Fa(Tr,t,r,a,c,u),!0;case"dragenter":return Er=Fa(Er,t,r,a,c,u),!0;case"mouseover":return Ir=Fa(Ir,t,r,a,c,u),!0;case"pointerover":var m=u.pointerId;return Oa.set(m,Fa(Oa.get(m)||null,t,r,a,c,u)),!0;case"gotpointercapture":return m=u.pointerId,Da.set(m,Fa(Da.get(m)||null,t,r,a,c,u)),!0}return!1}function sp(t){var r=po(t.target);if(r!==null){var a=fr(r);if(a!==null){if(r=a.tag,r===13){if(r=Et(a),r!==null){t.blockedOn=r,ap(t.priority,function(){rp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ss(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$c(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);mn=c,a.target.dispatchEvent(c),mn=null}else return r=ei(a),r!==null&&Cc(r),t.blockedOn=a,!1;r.shift()}return!0}function lp(t,r,a){ss(t)&&a.delete(r)}function Px(){jc=!1,Tr!==null&&ss(Tr)&&(Tr=null),Er!==null&&ss(Er)&&(Er=null),Ir!==null&&ss(Ir)&&(Ir=null),Oa.forEach(lp),Da.forEach(lp)}function Ba(t,r){t.blockedOn===r&&(t.blockedOn=null,jc||(jc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Px)))}function Ha(t){function r(u){return Ba(u,t)}if(0<is.length){Ba(is[0],t);for(var a=1;a<is.length;a++){var c=is[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Tr!==null&&Ba(Tr,t),Er!==null&&Ba(Er,t),Ir!==null&&Ba(Ir,t),Oa.forEach(r),Da.forEach(r),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)sp(a),a.blockedOn===null&&Pr.shift()}var Do=P.ReactCurrentBatchConfig,ls=!0;function zx(t,r,a,c){var u=rt,m=Do.transition;Do.transition=null;try{rt=1,Sc(t,r,a,c)}finally{rt=u,Do.transition=m}}function Ox(t,r,a,c){var u=rt,m=Do.transition;Do.transition=null;try{rt=4,Sc(t,r,a,c)}finally{rt=u,Do.transition=m}}function Sc(t,r,a,c){if(ls){var u=$c(t,r,a,c);if(u===null)Uc(t,r,c,cs,a),ip(t,c);else if(Ix(u,t,r,a,c))c.stopPropagation();else if(ip(t,c),r&4&&-1<Ex.indexOf(t)){for(;u!==null;){var m=ei(u);if(m!==null&&np(m),m=$c(t,r,a,c),m===null&&Uc(t,r,c,cs,a),m===u)break;u=m}u!==null&&c.stopPropagation()}else Uc(t,r,c,null,a)}}var cs=null;function $c(t,r,a,c){if(cs=null,t=Ln(c),t=po(t),t!==null)if(r=fr(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Et(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return cs=t,null}function cp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ht()){case gn:return 1;case es:return 4;case ts:case Sx:return 16;case Jh:return 536870912;default:return 16}default:return 16}}var zr=null,Mc=null,ds=null;function dp(){if(ds)return ds;var t,r=Mc,a=r.length,c,u="value"in zr?zr.value:zr.textContent,m=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[m-c];c++);return ds=u.slice(t,1<c?1-c:void 0)}function us(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function hs(){return!0}function up(){return!1}function vn(t){function r(a,c,u,m,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?hs:up,this.isPropagationStopped=up,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),r}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=vn(Fo),Wa=q({},Fo,{view:0,detail:0}),Dx=vn(Wa),Nc,Lc,Ua,ps=q({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(Nc=t.screenX-Ua.screenX,Lc=t.screenY-Ua.screenY):Lc=Nc=0,Ua=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),hp=vn(ps),Fx=q({},ps,{dataTransfer:0}),Bx=vn(Fx),Hx=q({},Wa,{relatedTarget:0}),Ac=vn(Hx),Wx=q({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=vn(Wx),qx=q({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=vn(qx),Gx=q({},Fo,{data:0}),pp=vn(Gx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Qx[t])?!!r[t]:!1}function Tc(){return Zx}var Xx=q({},Wa,{key:function(t){if(t.key){var r=Yx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=vn(Xx),ey=q({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=vn(ey),ty=q({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),ny=vn(ty),ry=q({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=vn(ry),ay=q({},ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=vn(ay),sy=[9,13,27,32],Ec=p&&"CompositionEvent"in window,qa=null;p&&"documentMode"in document&&(qa=document.documentMode);var ly=p&&"TextEvent"in window&&!qa,mp=p&&(!Ec||qa&&8<qa&&11>=qa),gp=" ",vp=!1;function xp(t,r){switch(t){case"keyup":return sy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bo=!1;function cy(t,r){switch(t){case"compositionend":return yp(r);case"keypress":return r.which!==32?null:(vp=!0,gp);case"textInput":return t=r.data,t===gp&&vp?null:t;default:return null}}function dy(t,r){if(Bo)return t==="compositionend"||!Ec&&xp(t,r)?(t=dp(),ds=Mc=zr=null,Bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mp&&r.locale!=="ko"?null:r.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!uy[t.type]:r==="textarea"}function bp(t,r,a,c){Vi(c),r=xs(r,"onChange"),0<r.length&&(a=new Rc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Va=null,Ga=null;function hy(t){Dp(t,0)}function fs(t){var r=Vo(t);if(ve(r))return t}function py(t,r){if(t==="change")return r}var kp=!1;if(p){var Ic;if(p){var Pc="oninput"in document;if(!Pc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Pc=typeof _p.oninput=="function"}Ic=Pc}else Ic=!1;kp=Ic&&(!document.documentMode||9<document.documentMode)}function Cp(){Va&&(Va.detachEvent("onpropertychange",jp),Ga=Va=null)}function jp(t){if(t.propertyName==="value"&&fs(Ga)){var r=[];bp(r,Ga,t,Ln(t)),Ki(hy,r)}}function fy(t,r,a){t==="focusin"?(Cp(),Va=r,Ga=a,Va.attachEvent("onpropertychange",jp)):t==="focusout"&&Cp()}function my(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fs(Ga)}function gy(t,r){if(t==="click")return fs(r)}function vy(t,r){if(t==="input"||t==="change")return fs(r)}function xy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Vn=typeof Object.is=="function"?Object.is:xy;function Ya(t,r){if(Vn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(r,u)||!Vn(t[u],r[u]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,r){var a=Sp(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Mp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Mp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Rp(){for(var t=window,r=be();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=be(t.document)}return r}function zc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function yy(t){var r=Rp(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mp(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=$p(a,m);var b=$p(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wy=p&&"documentMode"in document&&11>=document.documentMode,Ho=null,Oc=null,Ka=null,Dc=!1;function Np(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Ho==null||Ho!==be(c)||(c=Ho,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ka&&Ya(Ka,c)||(Ka=c,c=xs(Oc,"onSelect"),0<c.length&&(r=new Rc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Ho)))}function ms(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Wo={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},Fc={},Lp={};p&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function gs(t){if(Fc[t])return Fc[t];if(!Wo[t])return t;var r=Wo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Lp)return Fc[t]=r[a];return t}var Ap=gs("animationend"),Tp=gs("animationiteration"),Ep=gs("animationstart"),Ip=gs("transitionend"),Pp=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,r){Pp.set(t,r),d(r,[t])}for(var Bc=0;Bc<zp.length;Bc++){var Hc=zp[Bc],by=Hc.toLowerCase(),ky=Hc[0].toUpperCase()+Hc.slice(1);Or(by,"on"+ky)}Or(Ap,"onAnimationEnd"),Or(Tp,"onAnimationIteration"),Or(Ep,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Ip,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Op(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,Zi(c,r,void 0,t),t.currentTarget=null}function Dp(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],H=I.instance,re=I.currentTarget;if(I=I.listener,H!==m&&u.isPropagationStopped())break e;Op(u,I,re),m=H}else for(b=0;b<c.length;b++){if(I=c[b],H=I.instance,re=I.currentTarget,I=I.listener,H!==m&&u.isPropagationStopped())break e;Op(u,I,re),m=H}}}if(Ar)throw t=Ia,Ar=!1,Ia=null,t}function ut(t,r){var a=r[Qc];a===void 0&&(a=r[Qc]=new Set);var c=t+"__bubble";a.has(c)||(Fp(r,t,2,!1),a.add(c))}function Wc(t,r,a){var c=0;r&&(c|=4),Fp(a,t,c,r)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[vs]){t[vs]=!0,s.forEach(function(a){a!=="selectionchange"&&(_y.has(a)||Wc(a,!1,t),Wc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[vs]||(r[vs]=!0,Wc("selectionchange",!1,r))}}function Fp(t,r,a,c){switch(cp(r)){case 1:var u=zx;break;case 4:u=Ox;break;default:u=Sc}a=u.bind(null,r,a,t),u=void 0,!uo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Uc(t,r,a,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;b=b.return}for(;I!==null;){if(b=po(I),b===null)return;if(H=b.tag,H===5||H===6){c=m=b;continue e}I=I.parentNode}}c=c.return}Ki(function(){var re=m,he=Ln(a),pe=[];e:{var ue=Pp.get(t);if(ue!==void 0){var ye=Rc,Se=t;switch(t){case"keypress":if(us(a)===0)break e;case"keydown":case"keyup":ye=Jx;break;case"focusin":Se="focus",ye=Ac;break;case"focusout":Se="blur",ye=Ac;break;case"beforeblur":case"afterblur":ye=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=ny;break;case Ap:case Tp:case Ep:ye=Ux;break;case Ip:ye=oy;break;case"scroll":ye=Dx;break;case"wheel":ye=iy;break;case"copy":case"cut":case"paste":ye=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=fp}var $e=(r&4)!==0,kt=!$e&&t==="scroll",Z=$e?ue!==null?ue+"Capture":null:ue;$e=[];for(var V=re,te;V!==null;){te=V;var me=te.stateNode;if(te.tag===5&&me!==null&&(te=me,Z!==null&&(me=Wn(V,Z),me!=null&&$e.push(Xa(V,me,te)))),kt)break;V=V.return}0<$e.length&&(ue=new ye(ue,Se,null,a,he),pe.push({event:ue,listeners:$e}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==mn&&(Se=a.relatedTarget||a.fromElement)&&(po(Se)||Se[mr]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(Se=a.relatedTarget||a.toElement,ye=re,Se=Se?po(Se):null,Se!==null&&(kt=fr(Se),Se!==kt||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(ye=null,Se=re),ye!==Se)){if($e=hp,me="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=fp,me="onPointerLeave",Z="onPointerEnter",V="pointer"),kt=ye==null?ue:Vo(ye),te=Se==null?ue:Vo(Se),ue=new $e(me,V+"leave",ye,a,he),ue.target=kt,ue.relatedTarget=te,me=null,po(he)===re&&($e=new $e(Z,V+"enter",Se,a,he),$e.target=te,$e.relatedTarget=kt,me=$e),kt=me,ye&&Se)t:{for($e=ye,Z=Se,V=0,te=$e;te;te=Uo(te))V++;for(te=0,me=Z;me;me=Uo(me))te++;for(;0<V-te;)$e=Uo($e),V--;for(;0<te-V;)Z=Uo(Z),te--;for(;V--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=Uo($e),Z=Uo(Z)}$e=null}else $e=null;ye!==null&&Bp(pe,ue,ye,$e,!1),Se!==null&&kt!==null&&Bp(pe,kt,Se,$e,!0)}}e:{if(ue=re?Vo(re):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var Me=py;else if(wp(ue))if(kp)Me=vy;else{Me=my;var Re=fy}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Me=gy);if(Me&&(Me=Me(t,re))){bp(pe,Me,a,he);break e}Re&&Re(t,ue,re),t==="focusout"&&(Re=ue._wrapperState)&&Re.controlled&&ue.type==="number"&&Ae(ue,"number",ue.value)}switch(Re=re?Vo(re):window,t){case"focusin":(wp(Re)||Re.contentEditable==="true")&&(Ho=Re,Oc=re,Ka=null);break;case"focusout":Ka=Oc=Ho=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Np(pe,a,he);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Np(pe,a,he)}var Ne;if(Ec)e:{switch(t){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Bo?xp(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(mp&&a.locale!=="ko"&&(Bo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Bo&&(Ne=dp()):(zr=he,Mc="value"in zr?zr.value:zr.textContent,Bo=!0)),Re=xs(re,Te),0<Re.length&&(Te=new pp(Te,t,null,a,he),pe.push({event:Te,listeners:Re}),Ne?Te.data=Ne:(Ne=yp(a),Ne!==null&&(Te.data=Ne)))),(Ne=ly?cy(t,a):dy(t,a))&&(re=xs(re,"onBeforeInput"),0<re.length&&(he=new pp("onBeforeInput","beforeinput",null,a,he),pe.push({event:he,listeners:re}),he.data=Ne))}Dp(pe,r)})}function Xa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function xs(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=Wn(t,a),m!=null&&c.unshift(Xa(t,m,u)),m=Wn(t,r),m!=null&&c.push(Xa(t,m,u))),t=t.return}return c}function Uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,r,a,c,u){for(var m=r._reactName,b=[];a!==null&&a!==c;){var I=a,H=I.alternate,re=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&re!==null&&(I=re,u?(H=Wn(a,m),H!=null&&b.unshift(Xa(a,H,I))):u||(H=Wn(a,m),H!=null&&b.push(Xa(a,H,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var Cy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(Cy,`
`).replace(jy,"")}function ys(t,r,a){if(r=Hp(r),Hp(t)!==r&&a)throw Error(i(425))}function ws(){}var qc=null,Vc=null;function Gc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(My)}:Yc;function My(t){setTimeout(function(){throw t})}function Kc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Ha(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Ha(r)}function Dr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Up(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),ir="__reactFiber$"+qo,Ja="__reactProps$"+qo,mr="__reactContainer$"+qo,Qc="__reactEvents$"+qo,Ry="__reactListeners$"+qo,Ny="__reactHandles$"+qo;function po(t){var r=t[ir];if(r)return r;for(var a=t.parentNode;a;){if(r=a[mr]||a[ir]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Up(t);t!==null;){if(a=t[ir])return a;t=Up(t)}return r}t=a,a=t.parentNode}return null}function ei(t){return t=t[ir]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function bs(t){return t[Ja]||null}var Zc=[],Go=-1;function Fr(t){return{current:t}}function ht(t){0>Go||(t.current=Zc[Go],Zc[Go]=null,Go--)}function ct(t,r){Go++,Zc[Go]=t.current,t.current=r}var Br={},Kt=Fr(Br),rn=Fr(!1),fo=Br;function Yo(t,r){var a=t.type.contextTypes;if(!a)return Br;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in a)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function on(t){return t=t.childContextTypes,t!=null}function ks(){ht(rn),ht(Kt)}function qp(t,r,a){if(Kt.current!==Br)throw Error(i(168));ct(Kt,r),ct(rn,a)}function Vp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,B(t)||"Unknown",u));return q({},a,c)}function _s(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,fo=Kt.current,ct(Kt,t),ct(rn,rn.current),!0}function Gp(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Vp(t,r,fo),c.__reactInternalMemoizedMergedChildContext=t,ht(rn),ht(Kt),ct(Kt,t)):ht(rn),ct(rn,a)}var gr=null,Cs=!1,Xc=!1;function Yp(t){gr===null?gr=[t]:gr.push(t)}function Ly(t){Cs=!0,Yp(t)}function Hr(){if(!Xc&&gr!==null){Xc=!0;var t=0,r=rt;try{var a=gr;for(rt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}gr=null,Cs=!1}catch(u){throw gr!==null&&(gr=gr.slice(t+1)),ke(gn,Hr),u}finally{rt=r,Xc=!1}}return null}var Ko=[],Qo=0,js=null,Ss=0,An=[],Tn=0,mo=null,vr=1,xr="";function go(t,r){Ko[Qo++]=Ss,Ko[Qo++]=js,js=t,Ss=r}function Kp(t,r,a){An[Tn++]=vr,An[Tn++]=xr,An[Tn++]=mo,mo=t;var c=vr;t=xr;var u=32-qn(c)-1;c&=~(1<<u),a+=1;var m=32-qn(r)+u;if(30<m){var b=u-u%5;m=(c&(1<<b)-1).toString(32),c>>=b,u-=b,vr=1<<32-qn(r)+u|a<<u|c,xr=m+t}else vr=1<<m|a<<u|c,xr=t}function Jc(t){t.return!==null&&(go(t,1),Kp(t,1,0))}function ed(t){for(;t===js;)js=Ko[--Qo],Ko[Qo]=null,Ss=Ko[--Qo],Ko[Qo]=null;for(;t===mo;)mo=An[--Tn],An[Tn]=null,xr=An[--Tn],An[Tn]=null,vr=An[--Tn],An[Tn]=null}var xn=null,yn=null,ft=!1,Gn=null;function Qp(t,r){var a=zn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Zp(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xn=t,yn=Dr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xn=t,yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=mo!==null?{id:vr,overflow:xr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=zn(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,xn=t,yn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(ft){var r=yn;if(r){var a=r;if(!Zp(t,r)){if(td(t))throw Error(i(418));r=Dr(a.nextSibling);var c=xn;r&&Zp(t,r)?Qp(c,a):(t.flags=t.flags&-4097|2,ft=!1,xn=t)}}else{if(td(t))throw Error(i(418));t.flags=t.flags&-4097|2,ft=!1,xn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function $s(t){if(t!==xn)return!1;if(!ft)return Xp(t),ft=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Gc(t.type,t.memoizedProps)),r&&(r=yn)){if(td(t))throw Jp(),Error(i(418));for(;r;)Qp(t,r),r=Dr(r.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){yn=Dr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}yn=null}}else yn=xn?Dr(t.stateNode.nextSibling):null;return!0}function Jp(){for(var t=yn;t;)t=Dr(t.nextSibling)}function Zo(){yn=xn=null,ft=!1}function rd(t){Gn===null?Gn=[t]:Gn.push(t)}var Ay=P.ReactCurrentBatchConfig;function ti(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var I=u.refs;b===null?delete I[m]:I[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Ms(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function e1(t){var r=t._init;return r(t._payload)}function t1(t){function r(Z,V){if(t){var te=Z.deletions;te===null?(Z.deletions=[V],Z.flags|=16):te.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)r(Z,V),V=V.sibling;return null}function c(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function u(Z,V){return Z=Qr(Z,V),Z.index=0,Z.sibling=null,Z}function m(Z,V,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<V?(Z.flags|=2,V):te):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,te,me){return V===null||V.tag!==6?(V=Yd(te,Z.mode,me),V.return=Z,V):(V=u(V,te),V.return=Z,V)}function H(Z,V,te,me){var Me=te.type;return Me===E?he(Z,V,te.props.children,me,te.key):V!==null&&(V.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===de&&e1(Me)===V.type)?(me=u(V,te.props),me.ref=ti(Z,V,te),me.return=Z,me):(me=Xs(te.type,te.key,te.props,null,Z.mode,me),me.ref=ti(Z,V,te),me.return=Z,me)}function re(Z,V,te,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=Kd(te,Z.mode,me),V.return=Z,V):(V=u(V,te.children||[]),V.return=Z,V)}function he(Z,V,te,me,Me){return V===null||V.tag!==7?(V=Co(te,Z.mode,me,Me),V.return=Z,V):(V=u(V,te),V.return=Z,V)}function pe(Z,V,te){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Yd(""+V,Z.mode,te),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return te=Xs(V.type,V.key,V.props,null,Z.mode,te),te.ref=ti(Z,null,V),te.return=Z,te;case L:return V=Kd(V,Z.mode,te),V.return=Z,V;case de:var me=V._init;return pe(Z,me(V._payload),te)}if(Fe(V)||F(V))return V=Co(V,Z.mode,te,null),V.return=Z,V;Ms(Z,V)}return null}function ue(Z,V,te,me){var Me=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Me!==null?null:I(Z,V,""+te,me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===Me?H(Z,V,te,me):null;case L:return te.key===Me?re(Z,V,te,me):null;case de:return Me=te._init,ue(Z,V,Me(te._payload),me)}if(Fe(te)||F(te))return Me!==null?null:he(Z,V,te,me,null);Ms(Z,te)}return null}function ye(Z,V,te,me,Me){if(typeof me=="string"&&me!==""||typeof me=="number")return Z=Z.get(te)||null,I(V,Z,""+me,Me);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case N:return Z=Z.get(me.key===null?te:me.key)||null,H(V,Z,me,Me);case L:return Z=Z.get(me.key===null?te:me.key)||null,re(V,Z,me,Me);case de:var Re=me._init;return ye(Z,V,te,Re(me._payload),Me)}if(Fe(me)||F(me))return Z=Z.get(te)||null,he(V,Z,me,Me,null);Ms(V,me)}return null}function Se(Z,V,te,me){for(var Me=null,Re=null,Ne=V,Te=V=0,zt=null;Ne!==null&&Te<te.length;Te++){Ne.index>Te?(zt=Ne,Ne=null):zt=Ne.sibling;var tt=ue(Z,Ne,te[Te],me);if(tt===null){Ne===null&&(Ne=zt);break}t&&Ne&&tt.alternate===null&&r(Z,Ne),V=m(tt,V,Te),Re===null?Me=tt:Re.sibling=tt,Re=tt,Ne=zt}if(Te===te.length)return a(Z,Ne),ft&&go(Z,Te),Me;if(Ne===null){for(;Te<te.length;Te++)Ne=pe(Z,te[Te],me),Ne!==null&&(V=m(Ne,V,Te),Re===null?Me=Ne:Re.sibling=Ne,Re=Ne);return ft&&go(Z,Te),Me}for(Ne=c(Z,Ne);Te<te.length;Te++)zt=ye(Ne,Z,Te,te[Te],me),zt!==null&&(t&&zt.alternate!==null&&Ne.delete(zt.key===null?Te:zt.key),V=m(zt,V,Te),Re===null?Me=zt:Re.sibling=zt,Re=zt);return t&&Ne.forEach(function(Zr){return r(Z,Zr)}),ft&&go(Z,Te),Me}function $e(Z,V,te,me){var Me=F(te);if(typeof Me!="function")throw Error(i(150));if(te=Me.call(te),te==null)throw Error(i(151));for(var Re=Me=null,Ne=V,Te=V=0,zt=null,tt=te.next();Ne!==null&&!tt.done;Te++,tt=te.next()){Ne.index>Te?(zt=Ne,Ne=null):zt=Ne.sibling;var Zr=ue(Z,Ne,tt.value,me);if(Zr===null){Ne===null&&(Ne=zt);break}t&&Ne&&Zr.alternate===null&&r(Z,Ne),V=m(Zr,V,Te),Re===null?Me=Zr:Re.sibling=Zr,Re=Zr,Ne=zt}if(tt.done)return a(Z,Ne),ft&&go(Z,Te),Me;if(Ne===null){for(;!tt.done;Te++,tt=te.next())tt=pe(Z,tt.value,me),tt!==null&&(V=m(tt,V,Te),Re===null?Me=tt:Re.sibling=tt,Re=tt);return ft&&go(Z,Te),Me}for(Ne=c(Z,Ne);!tt.done;Te++,tt=te.next())tt=ye(Ne,Z,Te,tt.value,me),tt!==null&&(t&&tt.alternate!==null&&Ne.delete(tt.key===null?Te:tt.key),V=m(tt,V,Te),Re===null?Me=tt:Re.sibling=tt,Re=tt);return t&&Ne.forEach(function(u3){return r(Z,u3)}),ft&&go(Z,Te),Me}function kt(Z,V,te,me){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var Me=te.key,Re=V;Re!==null;){if(Re.key===Me){if(Me=te.type,Me===E){if(Re.tag===7){a(Z,Re.sibling),V=u(Re,te.props.children),V.return=Z,Z=V;break e}}else if(Re.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===de&&e1(Me)===Re.type){a(Z,Re.sibling),V=u(Re,te.props),V.ref=ti(Z,Re,te),V.return=Z,Z=V;break e}a(Z,Re);break}else r(Z,Re);Re=Re.sibling}te.type===E?(V=Co(te.props.children,Z.mode,me,te.key),V.return=Z,Z=V):(me=Xs(te.type,te.key,te.props,null,Z.mode,me),me.ref=ti(Z,V,te),me.return=Z,Z=me)}return b(Z);case L:e:{for(Re=te.key;V!==null;){if(V.key===Re)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(Z,V.sibling),V=u(V,te.children||[]),V.return=Z,Z=V;break e}else{a(Z,V);break}else r(Z,V);V=V.sibling}V=Kd(te,Z.mode,me),V.return=Z,Z=V}return b(Z);case de:return Re=te._init,kt(Z,V,Re(te._payload),me)}if(Fe(te))return Se(Z,V,te,me);if(F(te))return $e(Z,V,te,me);Ms(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,V!==null&&V.tag===6?(a(Z,V.sibling),V=u(V,te),V.return=Z,Z=V):(a(Z,V),V=Yd(te,Z.mode,me),V.return=Z,Z=V),b(Z)):a(Z,V)}return kt}var Xo=t1(!0),n1=t1(!1),Rs=Fr(null),Ns=null,Jo=null,od=null;function ad(){od=Jo=Ns=null}function id(t){var r=Rs.current;ht(Rs),t._currentValue=r}function sd(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function ea(t,r){Ns=t,od=Jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(an=!0),t.firstContext=null)}function En(t){var r=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:r,next:null},Jo===null){if(Ns===null)throw Error(i(308));Jo=t,Ns.dependencies={lanes:0,firstContext:t}}else Jo=Jo.next=t;return r}var vo=null;function ld(t){vo===null?vo=[t]:vo.push(t)}function r1(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,ld(r)):(a.next=u.next,u.next=a),r.interleaved=a,yr(t,c)}function yr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Wr=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o1(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Ur(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Je&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,yr(t,a)}return u=c.interleaved,u===null?(r.next=r,ld(c)):(r.next=u.next,u.next=r),c.interleaved=r,yr(t,a)}function Ls(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,_c(t,a)}}function a1(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?u=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?u=m=r:m=m.next=r}else u=m=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function As(t,r,a,c){var u=t.updateQueue;Wr=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,re=H.next;H.next=null,b===null?m=re:b.next=re,b=H;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=re:I.next=re,he.lastBaseUpdate=H))}if(m!==null){var pe=u.baseState;b=0,he=re=H=null,I=m;do{var ue=I.lane,ye=I.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Se=t,$e=I;switch(ue=r,ye=a,$e.tag){case 1:if(Se=$e.payload,typeof Se=="function"){pe=Se.call(ye,pe,ue);break e}pe=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=$e.payload,ue=typeof Se=="function"?Se.call(ye,pe,ue):Se,ue==null)break e;pe=q({},pe,ue);break e;case 2:Wr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else ye={eventTime:ye,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(re=he=ye,H=pe):he=he.next=ye,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(H=pe),u.baseState=H,u.firstBaseUpdate=re,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);wo|=b,t.lanes=b,t.memoizedState=pe}}function i1(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var ni={},sr=Fr(ni),ri=Fr(ni),oi=Fr(ni);function xo(t){if(t===ni)throw Error(i(174));return t}function dd(t,r){switch(ct(oi,r),ct(ri,t),ct(sr,ni),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=lt(r,t)}ht(sr),ct(sr,r)}function ta(){ht(sr),ht(ri),ht(oi)}function s1(t){xo(oi.current);var r=xo(sr.current),a=lt(r,t.type);r!==a&&(ct(ri,t),ct(sr,a))}function ud(t){ri.current===t&&(ht(sr),ht(ri))}var vt=Fr(0);function Ts(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hd=[];function pd(){for(var t=0;t<hd.length;t++)hd[t]._workInProgressVersionPrimary=null;hd.length=0}var Es=P.ReactCurrentDispatcher,fd=P.ReactCurrentBatchConfig,yo=0,xt=null,Rt=null,It=null,Is=!1,ai=!1,ii=0,Ty=0;function Qt(){throw Error(i(321))}function md(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Vn(t[a],r[a]))return!1;return!0}function gd(t,r,a,c,u,m){if(yo=m,xt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Es.current=t===null||t.memoizedState===null?zy:Oy,t=a(c,u),ai){m=0;do{if(ai=!1,ii=0,25<=m)throw Error(i(301));m+=1,It=Rt=null,r.updateQueue=null,Es.current=Dy,t=a(c,u)}while(ai)}if(Es.current=Os,r=Rt!==null&&Rt.next!==null,yo=0,It=Rt=xt=null,Is=!1,r)throw Error(i(300));return t}function vd(){var t=ii!==0;return ii=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?xt.memoizedState=It=t:It=It.next=t,It}function In(){if(Rt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var r=It===null?xt.memoizedState:It.next;if(r!==null)It=r,Rt=t;else{if(t===null)throw Error(i(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?xt.memoizedState=It=t:It=It.next=t}return It}function si(t,r){return typeof r=="function"?r(t):r}function xd(t){var r=In(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=Rt,u=c.baseQueue,m=a.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}c.baseQueue=u=m,a.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=b=null,H=null,re=m;do{var he=re.lane;if((yo&he)===he)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var pe={lane:he,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(I=H=pe,b=c):H=H.next=pe,xt.lanes|=he,wo|=he}re=re.next}while(re!==null&&re!==m);H===null?b=c:H.next=I,Vn(c,r.memoizedState)||(an=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do m=u.lane,xt.lanes|=m,wo|=m,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function yd(t){var r=In(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,m=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do m=t(m,b.action),b=b.next;while(b!==u);Vn(m,r.memoizedState)||(an=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function l1(){}function c1(t,r){var a=xt,c=In(),u=r(),m=!Vn(c.memoizedState,u);if(m&&(c.memoizedState=u,an=!0),c=c.queue,wd(h1.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,li(9,u1.bind(null,a,c,u,r),void 0,null),Pt===null)throw Error(i(349));(yo&30)!==0||d1(a,r,u)}return u}function d1(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=xt.updateQueue,r===null?(r={lastEffect:null,stores:null},xt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function u1(t,r,a,c){r.value=a,r.getSnapshot=c,p1(r)&&f1(t)}function h1(t,r,a){return a(function(){p1(r)&&f1(t)})}function p1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Vn(t,a)}catch{return!0}}function f1(t){var r=yr(t,1);r!==null&&Zn(r,t,1,-1)}function m1(t){var r=lr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},r.queue=t,t=t.dispatch=Py.bind(null,xt,t),[r.memoizedState,t]}function li(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=xt.updateQueue,r===null?(r={lastEffect:null,stores:null},xt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function g1(){return In().memoizedState}function Ps(t,r,a,c){var u=lr();xt.flags|=t,u.memoizedState=li(1|r,a,void 0,c===void 0?null:c)}function zs(t,r,a,c){var u=In();c=c===void 0?null:c;var m=void 0;if(Rt!==null){var b=Rt.memoizedState;if(m=b.destroy,c!==null&&md(c,b.deps)){u.memoizedState=li(r,a,m,c);return}}xt.flags|=t,u.memoizedState=li(1|r,a,m,c)}function v1(t,r){return Ps(8390656,8,t,r)}function wd(t,r){return zs(2048,8,t,r)}function x1(t,r){return zs(4,2,t,r)}function y1(t,r){return zs(4,4,t,r)}function w1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function b1(t,r,a){return a=a!=null?a.concat([t]):null,zs(4,4,w1.bind(null,r,t),a)}function bd(){}function k1(t,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&md(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function _1(t,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&md(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function C1(t,r,a){return(yo&21)===0?(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=a):(Vn(a,r)||(a=ep(),xt.lanes|=a,wo|=a,t.baseState=!0),r)}function Ey(t,r){var a=rt;rt=a!==0&&4>a?a:4,t(!0);var c=fd.transition;fd.transition={};try{t(!1),r()}finally{rt=a,fd.transition=c}}function j1(){return In().memoizedState}function Iy(t,r,a){var c=Yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},S1(t))$1(r,a);else if(a=r1(t,r,a,c),a!==null){var u=tn();Zn(a,t,c,u),M1(a,r,c)}}function Py(t,r,a){var c=Yr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(S1(t))$1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,I=m(b,a);if(u.hasEagerState=!0,u.eagerState=I,Vn(I,b)){var H=r.interleaved;H===null?(u.next=u,ld(r)):(u.next=H.next,H.next=u),r.interleaved=u;return}}catch{}finally{}a=r1(t,r,u,c),a!==null&&(u=tn(),Zn(a,t,c,u),M1(a,r,c))}}function S1(t){var r=t.alternate;return t===xt||r!==null&&r===xt}function $1(t,r){ai=Is=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function M1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,_c(t,a)}}var Os={readContext:En,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},zy={readContext:En,useCallback:function(t,r){return lr().memoizedState=[t,r===void 0?null:r],t},useContext:En,useEffect:v1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ps(4194308,4,w1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ps(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ps(4,2,t,r)},useMemo:function(t,r){var a=lr();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=lr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Iy.bind(null,xt,t),[c.memoizedState,t]},useRef:function(t){var r=lr();return t={current:t},r.memoizedState=t},useState:m1,useDebugValue:bd,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=m1(!1),r=t[0];return t=Ey.bind(null,t[1]),lr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=xt,u=lr();if(ft){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Pt===null)throw Error(i(349));(yo&30)!==0||d1(c,r,a)}u.memoizedState=a;var m={value:a,getSnapshot:r};return u.queue=m,v1(h1.bind(null,c,m,t),[t]),c.flags|=2048,li(9,u1.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=lr(),r=Pt.identifierPrefix;if(ft){var a=xr,c=vr;a=(c&~(1<<32-qn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ii++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Ty++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Oy={readContext:En,useCallback:k1,useContext:En,useEffect:wd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:_1,useReducer:xd,useRef:g1,useState:function(){return xd(si)},useDebugValue:bd,useDeferredValue:function(t){var r=In();return C1(r,Rt.memoizedState,t)},useTransition:function(){var t=xd(si)[0],r=In().memoizedState;return[t,r]},useMutableSource:l1,useSyncExternalStore:c1,useId:j1,unstable_isNewReconciler:!1},Dy={readContext:En,useCallback:k1,useContext:En,useEffect:wd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:_1,useReducer:yd,useRef:g1,useState:function(){return yd(si)},useDebugValue:bd,useDeferredValue:function(t){var r=In();return Rt===null?r.memoizedState=t:C1(r,Rt.memoizedState,t)},useTransition:function(){var t=yd(si)[0],r=In().memoizedState;return[t,r]},useMutableSource:l1,useSyncExternalStore:c1,useId:j1,unstable_isNewReconciler:!1};function Yn(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function kd(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:q({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ds={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=tn(),u=Yr(t),m=wr(c,u);m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Zn(r,t,u,c),Ls(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=tn(),u=Yr(t),m=wr(c,u);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Ur(t,m,u),r!==null&&(Zn(r,t,u,c),Ls(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=tn(),c=Yr(t),u=wr(a,c);u.tag=2,r!=null&&(u.callback=r),r=Ur(t,u,c),r!==null&&(Zn(r,t,c,a),Ls(r,t,c))}};function R1(t,r,a,c,u,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!Ya(a,c)||!Ya(u,m):!0}function N1(t,r,a){var c=!1,u=Br,m=r.contextType;return typeof m=="object"&&m!==null?m=En(m):(u=on(r)?fo:Kt.current,c=r.contextTypes,m=(c=c!=null)?Yo(t,u):Br),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ds,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function L1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Ds.enqueueReplaceState(r,r.state,null)}function _d(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},cd(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=En(m):(m=on(r)?fo:Kt.current,u.context=Yo(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(kd(t,r,m,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Ds.enqueueReplaceState(u,u.state,null),As(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,r){try{var a="",c=r;do a+=ee(c),c=c.return;while(c);var u=a}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function Cd(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function jd(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function A1(t,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Vs||(Vs=!0,Fd=c),jd(t,r)},a}function T1(t,r,a){a=wr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){jd(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){jd(t,r),typeof c!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function E1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Fy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=e3.bind(null,t,r,a),r.then(t,t))}function I1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function P1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,Ur(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var By=P.ReactCurrentOwner,an=!1;function en(t,r,a,c){r.child=t===null?n1(r,null,a,c):Xo(r,t.child,a,c)}function z1(t,r,a,c,u){a=a.render;var m=r.ref;return ea(r,u),c=gd(t,r,a,c,m,u),a=vd(),t!==null&&!an?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,br(t,r,u)):(ft&&a&&Jc(r),r.flags|=1,en(t,r,c,u),r.child)}function O1(t,r,a,c,u){if(t===null){var m=a.type;return typeof m=="function"&&!Gd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,D1(t,r,m,c,u)):(t=Xs(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ya,a(b,c)&&t.ref===r.ref)return br(t,r,u)}return r.flags|=1,t=Qr(m,c),t.ref=r.ref,t.return=r,r.child=t}function D1(t,r,a,c,u){if(t!==null){var m=t.memoizedProps;if(Ya(m,c)&&t.ref===r.ref)if(an=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(an=!0);else return r.lanes=t.lanes,br(t,r,u)}return Sd(t,r,a,c,u)}function F1(t,r,a){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(oa,wn),wn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(oa,wn),wn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ct(oa,wn),wn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,ct(oa,wn),wn|=c;return en(t,r,u,a),r.child}function B1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Sd(t,r,a,c,u){var m=on(a)?fo:Kt.current;return m=Yo(r,m),ea(r,u),a=gd(t,r,a,c,m,u),c=vd(),t!==null&&!an?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,br(t,r,u)):(ft&&c&&Jc(r),r.flags|=1,en(t,r,a,u),r.child)}function H1(t,r,a,c,u){if(on(a)){var m=!0;_s(r)}else m=!1;if(ea(r,u),r.stateNode===null)Bs(t,r),N1(r,a,c),_d(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var H=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=En(re):(re=on(a)?fo:Kt.current,re=Yo(r,re));var he=a.getDerivedStateFromProps,pe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||H!==re)&&L1(r,b,c,re),Wr=!1;var ue=r.memoizedState;b.state=ue,As(r,c,b,u),H=r.memoizedState,I!==c||ue!==H||rn.current||Wr?(typeof he=="function"&&(kd(r,a,he,c),H=r.memoizedState),(I=Wr||R1(r,a,I,c,ue,H,re))?(pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),b.props=c,b.state=H,b.context=re,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,o1(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:Yn(r.type,I),b.props=re,pe=r.pendingProps,ue=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=En(H):(H=on(a)?fo:Kt.current,H=Yo(r,H));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==pe||ue!==H)&&L1(r,b,c,H),Wr=!1,ue=r.memoizedState,b.state=ue,As(r,c,b,u);var Se=r.memoizedState;I!==pe||ue!==Se||rn.current||Wr?(typeof ye=="function"&&(kd(r,a,ye,c),Se=r.memoizedState),(re=Wr||R1(r,a,re,c,ue,Se,H)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Se,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Se,H)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Se),b.props=c,b.state=Se,b.context=H,c=re):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return $d(t,r,a,c,m,u)}function $d(t,r,a,c,u,m){B1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Gp(r,a,!1),br(t,r,m);c=r.stateNode,By.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=Xo(r,t.child,null,m),r.child=Xo(r,null,I,m)):en(t,r,I,m),r.memoizedState=c.state,u&&Gp(r,a,!0),r.child}function W1(t){var r=t.stateNode;r.pendingContext?qp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&qp(t,r.context,!1),dd(t,r.containerInfo)}function U1(t,r,a,c,u){return Zo(),rd(u),r.flags|=256,en(t,r,a,c),r.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function q1(t,r,a){var c=r.pendingProps,u=vt.current,m=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),ct(vt,u&1),t===null)return nd(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Js(b,c,0,null),t=Co(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=Rd(a),r.memoizedState=Md,t):Nd(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Hy(t,r,b,c,I,u,a);if(m){m=c.fallback,b=r.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Qr(u,H),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Qr(I,m):(m=Co(m,b,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?Rd(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=Md,c}return m=t.child,t=m.sibling,c=Qr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Nd(t,r){return r=Js({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Fs(t,r,a,c){return c!==null&&rd(c),Xo(r,t.child,null,a),t=Nd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hy(t,r,a,c,u,m,b){if(a)return r.flags&256?(r.flags&=-257,c=Cd(Error(i(422))),Fs(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=Js({mode:"visible",children:c.children},u,0,null),m=Co(m,u,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&Xo(r,t.child,null,b),r.child.memoizedState=Rd(b),r.memoizedState=Md,m);if((r.mode&1)===0)return Fs(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(i(419)),c=Cd(m,c,void 0),Fs(t,r,b,c)}if(I=(b&t.childLanes)!==0,an||I){if(c=Pt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,yr(t,u),Zn(c,t,u,-1))}return Vd(),c=Cd(Error(i(421))),Fs(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=t3.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,yn=Dr(u.nextSibling),xn=r,ft=!0,Gn=null,t!==null&&(An[Tn++]=vr,An[Tn++]=xr,An[Tn++]=mo,vr=t.id,xr=t.overflow,mo=r),r=Nd(r,c.children),r.flags|=4096,r)}function V1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),sd(t.return,r,a)}function Ld(t,r,a,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=u)}function G1(t,r,a){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(en(t,r,c.children,a),c=vt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V1(t,a,r);else if(t.tag===19)V1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(ct(vt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&Ts(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Ld(r,!1,u,a,m);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Ts(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ld(r,!0,a,null,m);break;case"together":Ld(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bs(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function br(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),wo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Qr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Wy(t,r,a){switch(r.tag){case 3:W1(r),Zo();break;case 5:s1(r);break;case 1:on(r.type)&&_s(r);break;case 4:dd(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;ct(Rs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ct(vt,vt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?q1(t,r,a):(ct(vt,vt.current&1),t=br(t,r,a),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return G1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(vt,vt.current),c)break;return null;case 22:case 23:return r.lanes=0,F1(t,r,a)}return br(t,r,a)}var Y1,Ad,K1,Q1;Y1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ad=function(){},K1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,xo(sr.current);var m=null;switch(a){case"input":u=we(t,u),c=we(t,c),m=[];break;case"select":u=q({},u,{value:void 0}),c=q({},c,{value:void 0}),m=[];break;case"textarea":u=wt(t,u),c=wt(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ws)}gt(a,c);var b;a=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var H=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&H!==I&&(H!=null||I!=null))if(re==="style")if(I){for(b in I)!I.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&I[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(m||(m=[]),m.push(re,a)),a=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&ut("scroll",t),m||I===H||(m=[])):(m=m||[]).push(re,H))}a&&(m=m||[]).push("style",a);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},Q1=function(t,r,a,c){a!==c&&(r.flags|=4)};function ci(t,r){if(!ft)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Zt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Uy(t,r,a){var c=r.pendingProps;switch(ed(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(r),null;case 1:return on(r.type)&&ks(),Zt(r),null;case 3:return c=r.stateNode,ta(),ht(rn),ht(Kt),pd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&($s(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gn!==null&&(Wd(Gn),Gn=null))),Ad(t,r),Zt(r),null;case 5:ud(r);var u=xo(oi.current);if(a=r.type,t!==null&&r.stateNode!=null)K1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Zt(r),null}if(t=xo(sr.current),$s(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[ir]=r,c[Ja]=m,t=(r.mode&1)!==0,a){case"dialog":ut("cancel",c),ut("close",c);break;case"iframe":case"object":case"embed":ut("load",c);break;case"video":case"audio":for(u=0;u<Qa.length;u++)ut(Qa[u],c);break;case"source":ut("error",c);break;case"img":case"image":case"link":ut("error",c),ut("load",c);break;case"details":ut("toggle",c);break;case"input":Le(c,m),ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},ut("invalid",c);break;case"textarea":Ie(c,m),ut("invalid",c)}gt(a,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var I=m[b];b==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&ys(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ys(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&ut("scroll",c)}switch(a){case"input":ce(c),We(c,m,!0);break;case"textarea":ce(c),Qe(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ws)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tt(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[ir]=r,t[Ja]=c,Y1(t,r,!1,!1),r.stateNode=t;e:{switch(b=jt(a,c),a){case"dialog":ut("cancel",t),ut("close",t),u=c;break;case"iframe":case"object":case"embed":ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<Qa.length;u++)ut(Qa[u],t);u=c;break;case"source":ut("error",t),u=c;break;case"img":case"image":case"link":ut("error",t),ut("load",t),u=c;break;case"details":ut("toggle",t),u=c;break;case"input":Le(t,c),u=we(t,c),ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=q({},c,{value:void 0}),ut("invalid",t);break;case"textarea":Ie(t,c),u=wt(t,c),ut("invalid",t);break;default:u=c}gt(a,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?Ce(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ze(t,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&mt(t,H):typeof H=="number"&&mt(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?H!=null&&m==="onScroll"&&ut("scroll",t):H!=null&&C(t,m,H,b))}switch(a){case"input":ce(t),We(t,c,!1);break;case"textarea":ce(t),Qe(t);break;case"option":c.value!=null&&t.setAttribute("value",""+z(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Ke(t,!!c.multiple,m,!1):c.defaultValue!=null&&Ke(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ws)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Zt(r),null;case 6:if(t&&r.stateNode!=null)Q1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=xo(oi.current),xo(sr.current),$s(r)){if(c=r.stateNode,a=r.memoizedProps,c[ir]=r,(m=c.nodeValue!==a)&&(t=xn,t!==null))switch(t.tag){case 3:ys(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ys(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ir]=r,r.stateNode=c}return Zt(r),null;case 13:if(ht(vt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Jp(),Zo(),r.flags|=98560,m=!1;else if(m=$s(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(i(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[ir]=r}else Zo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Zt(r),m=!1}else Gn!==null&&(Wd(Gn),Gn=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(vt.current&1)!==0?Nt===0&&(Nt=3):Vd())),r.updateQueue!==null&&(r.flags|=4),Zt(r),null);case 4:return ta(),Ad(t,r),t===null&&Za(r.stateNode.containerInfo),Zt(r),null;case 10:return id(r.type._context),Zt(r),null;case 17:return on(r.type)&&ks(),Zt(r),null;case 19:if(ht(vt),m=r.memoizedState,m===null)return Zt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)ci(m,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=Ts(t),b!==null){for(r.flags|=128,ci(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return ct(vt,vt.current&1|2),r.child}t=t.sibling}m.tail!==null&&et()>aa&&(r.flags|=128,c=!0,ci(m,!1),r.lanes=4194304)}else{if(!c)if(t=Ts(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ci(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!ft)return Zt(r),null}else 2*et()-m.renderingStartTime>aa&&a!==1073741824&&(r.flags|=128,c=!0,ci(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=et(),r.sibling=null,a=vt.current,ct(vt,c?a&1|2:a&1),r):(Zt(r),null);case 22:case 23:return qd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(wn&1073741824)!==0&&(Zt(r),r.subtreeFlags&6&&(r.flags|=8192)):Zt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function qy(t,r){switch(ed(r),r.tag){case 1:return on(r.type)&&ks(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ta(),ht(rn),ht(Kt),pd(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ud(r),null;case 13:if(ht(vt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Zo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ht(vt),null;case 4:return ta(),null;case 10:return id(r.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Hs=!1,Xt=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ra(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){yt(t,r,c)}else a.current=null}function Td(t,r,a){try{a()}catch(c){yt(t,r,c)}}var Z1=!1;function Gy(t,r){if(qc=ls,t=Rp(),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,I=-1,H=-1,re=0,he=0,pe=t,ue=null;t:for(;;){for(var ye;pe!==a||u!==0&&pe.nodeType!==3||(I=b+u),pe!==m||c!==0&&pe.nodeType!==3||(H=b+c),pe.nodeType===3&&(b+=pe.nodeValue.length),(ye=pe.firstChild)!==null;)ue=pe,pe=ye;for(;;){if(pe===t)break t;if(ue===a&&++re===u&&(I=b),ue===m&&++he===c&&(H=b),(ye=pe.nextSibling)!==null)break;pe=ue,ue=pe.parentNode}pe=ye}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:t,selectionRange:a},ls=!1,_e=r;_e!==null;)if(r=_e,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,_e=t;else for(;_e!==null;){r=_e;try{var Se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var $e=Se.memoizedProps,kt=Se.memoizedState,Z=r.stateNode,V=Z.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Yn(r.type,$e),kt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(me){yt(r,r.return,me)}if(t=r.sibling,t!==null){t.return=r.return,_e=t;break}_e=r.return}return Se=Z1,Z1=!1,Se}function di(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Td(r,a,m)}u=u.next}while(u!==c)}}function Ws(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ed(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function X1(t){var r=t.alternate;r!==null&&(t.alternate=null,X1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ir],delete r[Ja],delete r[Qc],delete r[Ry],delete r[Ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J1(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ws));else if(c!==4&&(t=t.child,t!==null))for(Id(t,r,a),t=t.sibling;t!==null;)Id(t,r,a),t=t.sibling}function Pd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Pd(t,r,a),t=t.sibling;t!==null;)Pd(t,r,a),t=t.sibling}var Wt=null,Kn=!1;function qr(t,r,a){for(a=a.child;a!==null;)tf(t,r,a),a=a.sibling}function tf(t,r,a){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(ns,a)}catch{}switch(a.tag){case 5:Xt||ra(a,r);case 6:var c=Wt,u=Kn;Wt=null,qr(t,r,a),Wt=c,Kn=u,Wt!==null&&(Kn?(t=Wt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Wt.removeChild(a.stateNode));break;case 18:Wt!==null&&(Kn?(t=Wt,a=a.stateNode,t.nodeType===8?Kc(t.parentNode,a):t.nodeType===1&&Kc(t,a),Ha(t)):Kc(Wt,a.stateNode));break;case 4:c=Wt,u=Kn,Wt=a.stateNode.containerInfo,Kn=!0,qr(t,r,a),Wt=c,Kn=u;break;case 0:case 11:case 14:case 15:if(!Xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Td(a,r,b),u=u.next}while(u!==c)}qr(t,r,a);break;case 1:if(!Xt&&(ra(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){yt(a,r,I)}qr(t,r,a);break;case 21:qr(t,r,a);break;case 22:a.mode&1?(Xt=(c=Xt)||a.memoizedState!==null,qr(t,r,a),Xt=c):qr(t,r,a);break;default:qr(t,r,a)}}function nf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Vy),r.forEach(function(c){var u=n3.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Qn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var m=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Wt=I.stateNode,Kn=!1;break e;case 3:Wt=I.stateNode.containerInfo,Kn=!0;break e;case 4:Wt=I.stateNode.containerInfo,Kn=!0;break e}I=I.return}if(Wt===null)throw Error(i(160));tf(m,b,u),Wt=null,Kn=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(re){yt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rf(r,t),r=r.sibling}function rf(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(r,t),cr(t),c&4){try{di(3,t,t.return),Ws(3,t)}catch($e){yt(t,t.return,$e)}try{di(5,t,t.return)}catch($e){yt(t,t.return,$e)}}break;case 1:Qn(r,t),cr(t),c&512&&a!==null&&ra(a,a.return);break;case 5:if(Qn(r,t),cr(t),c&512&&a!==null&&ra(a,a.return),t.flags&32){var u=t.stateNode;try{mt(u,"")}catch($e){yt(t,t.return,$e)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&De(u,m),jt(I,b);var re=jt(I,m);for(b=0;b<H.length;b+=2){var he=H[b],pe=H[b+1];he==="style"?Ce(u,pe):he==="dangerouslySetInnerHTML"?Ze(u,pe):he==="children"?mt(u,pe):C(u,he,pe,re)}switch(I){case"input":He(u,m);break;case"textarea":st(u,m);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ye=m.value;ye!=null?Ke(u,!!m.multiple,ye,!1):ue!==!!m.multiple&&(m.defaultValue!=null?Ke(u,!!m.multiple,m.defaultValue,!0):Ke(u,!!m.multiple,m.multiple?[]:"",!1))}u[Ja]=m}catch($e){yt(t,t.return,$e)}}break;case 6:if(Qn(r,t),cr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch($e){yt(t,t.return,$e)}}break;case 3:if(Qn(r,t),cr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ha(r.containerInfo)}catch($e){yt(t,t.return,$e)}break;case 4:Qn(r,t),cr(t);break;case 13:Qn(r,t),cr(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Dd=et())),c&4&&nf(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Xt=(re=Xt)||he,Qn(r,t),Xt=re):Qn(r,t),cr(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!he&&(t.mode&1)!==0)for(_e=t,he=t.child;he!==null;){for(pe=_e=he;_e!==null;){switch(ue=_e,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:di(4,ue,ue.return);break;case 1:ra(ue,ue.return);var Se=ue.stateNode;if(typeof Se.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,Se.props=r.memoizedProps,Se.state=r.memoizedState,Se.componentWillUnmount()}catch($e){yt(c,a,$e)}}break;case 5:ra(ue,ue.return);break;case 22:if(ue.memoizedState!==null){sf(pe);continue}}ye!==null?(ye.return=ue,_e=ye):sf(pe)}he=he.sibling}e:for(he=null,pe=t;;){if(pe.tag===5){if(he===null){he=pe;try{u=pe.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=pe.stateNode,H=pe.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=or("display",b))}catch($e){yt(t,t.return,$e)}}}else if(pe.tag===6){if(he===null)try{pe.stateNode.nodeValue=re?"":pe.memoizedProps}catch($e){yt(t,t.return,$e)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;he===pe&&(he=null),pe=pe.return}he===pe&&(he=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Qn(r,t),cr(t),c&4&&nf(t);break;case 21:break;default:Qn(r,t),cr(t)}}function cr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(J1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(mt(u,""),c.flags&=-33);var m=ef(t);Pd(t,m,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=ef(t);Id(t,I,b);break;default:throw Error(i(161))}}catch(H){yt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Yy(t,r,a){_e=t,of(t)}function of(t,r,a){for(var c=(t.mode&1)!==0;_e!==null;){var u=_e,m=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Hs;if(!b){var I=u.alternate,H=I!==null&&I.memoizedState!==null||Xt;I=Hs;var re=Xt;if(Hs=b,(Xt=H)&&!re)for(_e=u;_e!==null;)b=_e,H=b.child,b.tag===22&&b.memoizedState!==null?lf(u):H!==null?(H.return=b,_e=H):lf(u);for(;m!==null;)_e=m,of(m),m=m.sibling;_e=u,Hs=I,Xt=re}af(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,_e=m):af(t)}}function af(t){for(;_e!==null;){var r=_e;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Xt||Ws(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Xt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Yn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&i1(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}i1(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var he=re.memoizedState;if(he!==null){var pe=he.dehydrated;pe!==null&&Ha(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Xt||r.flags&512&&Ed(r)}catch(ue){yt(r,r.return,ue)}}if(r===t){_e=null;break}if(a=r.sibling,a!==null){a.return=r.return,_e=a;break}_e=r.return}}function sf(t){for(;_e!==null;){var r=_e;if(r===t){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}function lf(t){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ws(4,r)}catch(H){yt(r,a,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(H){yt(r,u,H)}}var m=r.return;try{Ed(r)}catch(H){yt(r,m,H)}break;case 5:var b=r.return;try{Ed(r)}catch(H){yt(r,b,H)}}}catch(H){yt(r,r.return,H)}if(r===t){_e=null;break}var I=r.sibling;if(I!==null){I.return=r.return,_e=I;break}_e=r.return}}var Ky=Math.ceil,Us=P.ReactCurrentDispatcher,zd=P.ReactCurrentOwner,Pn=P.ReactCurrentBatchConfig,Je=0,Pt=null,St=null,Ut=0,wn=0,oa=Fr(0),Nt=0,ui=null,wo=0,qs=0,Od=0,hi=null,sn=null,Dd=0,aa=1/0,kr=null,Vs=!1,Fd=null,Vr=null,Gs=!1,Gr=null,Ys=0,pi=0,Bd=null,Ks=-1,Qs=0;function tn(){return(Je&6)!==0?et():Ks!==-1?Ks:Ks=et()}function Yr(t){return(t.mode&1)===0?1:(Je&2)!==0&&Ut!==0?Ut&-Ut:Ay.transition!==null?(Qs===0&&(Qs=ep()),Qs):(t=rt,t!==0||(t=window.event,t=t===void 0?16:cp(t.type)),t)}function Zn(t,r,a,c){if(50<pi)throw pi=0,Bd=null,Error(i(185));za(t,a,c),((Je&2)===0||t!==Pt)&&(t===Pt&&((Je&2)===0&&(qs|=a),Nt===4&&Kr(t,Ut)),ln(t,c),a===1&&Je===0&&(r.mode&1)===0&&(aa=et()+500,Cs&&Hr()))}function ln(t,r){var a=t.callbackNode;Ax(t,r);var c=as(t,t===Pt?Ut:0);if(c===0)a!==null&&at(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&at(a),r===1)t.tag===0?Ly(df.bind(null,t)):Yp(df.bind(null,t)),$y(function(){(Je&6)===0&&Hr()}),a=null;else{switch(tp(c)){case 1:a=gn;break;case 4:a=es;break;case 16:a=ts;break;case 536870912:a=Jh;break;default:a=ts}a=xf(a,cf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function cf(t,r){if(Ks=-1,Qs=0,(Je&6)!==0)throw Error(i(327));var a=t.callbackNode;if(ia()&&t.callbackNode!==a)return null;var c=as(t,t===Pt?Ut:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Zs(t,c);else{r=c;var u=Je;Je|=2;var m=hf();(Pt!==t||Ut!==r)&&(kr=null,aa=et()+500,ko(t,r));do try{Xy();break}catch(I){uf(t,I)}while(!0);ad(),Us.current=m,Je=u,St!==null?r=0:(Pt=null,Ut=0,r=Nt)}if(r!==0){if(r===2&&(u=bc(t),u!==0&&(c=u,r=Hd(t,u))),r===1)throw a=ui,ko(t,0),Kr(t,c),ln(t,et()),a;if(r===6)Kr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Qy(u)&&(r=Zs(t,c),r===2&&(m=bc(t),m!==0&&(c=m,r=Hd(t,m))),r===1))throw a=ui,ko(t,0),Kr(t,c),ln(t,et()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:_o(t,sn,kr);break;case 3:if(Kr(t,c),(c&130023424)===c&&(r=Dd+500-et(),10<r)){if(as(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){tn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Yc(_o.bind(null,t,sn,kr),r);break}_o(t,sn,kr);break;case 4:if(Kr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-qn(c);m=1<<b,b=r[b],b>u&&(u=b),c&=~m}if(c=u,c=et()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ky(c/1960))-c,10<c){t.timeoutHandle=Yc(_o.bind(null,t,sn,kr),c);break}_o(t,sn,kr);break;case 5:_o(t,sn,kr);break;default:throw Error(i(329))}}}return ln(t,et()),t.callbackNode===a?cf.bind(null,t):null}function Hd(t,r){var a=hi;return t.current.memoizedState.isDehydrated&&(ko(t,r).flags|=256),t=Zs(t,r),t!==2&&(r=sn,sn=a,r!==null&&Wd(r)),t}function Wd(t){sn===null?sn=t:sn.push.apply(sn,t)}function Qy(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],m=u.getSnapshot;u=u.value;try{if(!Vn(m(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(t,r){for(r&=~Od,r&=~qs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-qn(r),c=1<<a;t[a]=-1,r&=~c}}function df(t){if((Je&6)!==0)throw Error(i(327));ia();var r=as(t,0);if((r&1)===0)return ln(t,et()),null;var a=Zs(t,r);if(t.tag!==0&&a===2){var c=bc(t);c!==0&&(r=c,a=Hd(t,c))}if(a===1)throw a=ui,ko(t,0),Kr(t,r),ln(t,et()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,_o(t,sn,kr),ln(t,et()),null}function Ud(t,r){var a=Je;Je|=1;try{return t(r)}finally{Je=a,Je===0&&(aa=et()+500,Cs&&Hr())}}function bo(t){Gr!==null&&Gr.tag===0&&(Je&6)===0&&ia();var r=Je;Je|=1;var a=Pn.transition,c=rt;try{if(Pn.transition=null,rt=1,t)return t()}finally{rt=c,Pn.transition=a,Je=r,(Je&6)===0&&Hr()}}function qd(){wn=oa.current,ht(oa)}function ko(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Sy(a)),St!==null)for(a=St.return;a!==null;){var c=a;switch(ed(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ks();break;case 3:ta(),ht(rn),ht(Kt),pd();break;case 5:ud(c);break;case 4:ta();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:id(c.type._context);break;case 22:case 23:qd()}a=a.return}if(Pt=t,St=t=Qr(t.current,null),Ut=wn=r,Nt=0,ui=null,Od=qs=wo=0,sn=hi=null,vo!==null){for(r=0;r<vo.length;r++)if(a=vo[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=u,c.next=b}a.pending=c}vo=null}return t}function uf(t,r){do{var a=St;try{if(ad(),Es.current=Os,Is){for(var c=xt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Is=!1}if(yo=0,It=Rt=xt=null,ai=!1,ii=0,zd.current=null,a===null||a.return===null){Nt=1,ui=r,St=null;break}e:{var m=t,b=a.return,I=a,H=r;if(r=Ut,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,he=I,pe=he.tag;if((he.mode&1)===0&&(pe===0||pe===11||pe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=I1(b);if(ye!==null){ye.flags&=-257,P1(ye,b,I,m,r),ye.mode&1&&E1(m,re,r),r=ye,H=re;var Se=r.updateQueue;if(Se===null){var $e=new Set;$e.add(H),r.updateQueue=$e}else Se.add(H);break e}else{if((r&1)===0){E1(m,re,r),Vd();break e}H=Error(i(426))}}else if(ft&&I.mode&1){var kt=I1(b);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),P1(kt,b,I,m,r),rd(na(H,I));break e}}m=H=na(H,I),Nt!==4&&(Nt=2),hi===null?hi=[m]:hi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var Z=A1(m,H,r);a1(m,Z);break e;case 1:I=H;var V=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Vr===null||!Vr.has(te)))){m.flags|=65536,r&=-r,m.lanes|=r;var me=T1(m,I,r);a1(m,me);break e}}m=m.return}while(m!==null)}ff(a)}catch(Me){r=Me,St===a&&a!==null&&(St=a=a.return);continue}break}while(!0)}function hf(){var t=Us.current;return Us.current=Os,t===null?Os:t}function Vd(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Pt===null||(wo&268435455)===0&&(qs&268435455)===0||Kr(Pt,Ut)}function Zs(t,r){var a=Je;Je|=2;var c=hf();(Pt!==t||Ut!==r)&&(kr=null,ko(t,r));do try{Zy();break}catch(u){uf(t,u)}while(!0);if(ad(),Je=a,Us.current=c,St!==null)throw Error(i(261));return Pt=null,Ut=0,Nt}function Zy(){for(;St!==null;)pf(St)}function Xy(){for(;St!==null&&!Oe();)pf(St)}function pf(t){var r=vf(t.alternate,t,wn);t.memoizedProps=t.pendingProps,r===null?ff(t):St=r,zd.current=null}function ff(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Uy(a,r,wn),a!==null){St=a;return}}else{if(a=qy(a,r),a!==null){a.flags&=32767,St=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,St=null;return}}if(r=r.sibling,r!==null){St=r;return}St=r=t}while(r!==null);Nt===0&&(Nt=5)}function _o(t,r,a){var c=rt,u=Pn.transition;try{Pn.transition=null,rt=1,Jy(t,r,a,c)}finally{Pn.transition=u,rt=c}return null}function Jy(t,r,a,c){do ia();while(Gr!==null);if((Je&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Tx(t,m),t===Pt&&(St=Pt=null,Ut=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gs||(Gs=!0,xf(ts,function(){return ia(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Pn.transition,Pn.transition=null;var b=rt;rt=1;var I=Je;Je|=4,zd.current=null,Gy(t,a),rf(a,t),yy(Vc),ls=!!qc,Vc=qc=null,t.current=a,Yy(a),Yt(),Je=I,rt=b,Pn.transition=m}else t.current=a;if(Gs&&(Gs=!1,Gr=t,Ys=u),m=t.pendingLanes,m===0&&(Vr=null),$x(a.stateNode),ln(t,et()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Vs)throw Vs=!1,t=Fd,Fd=null,t;return(Ys&1)!==0&&t.tag!==0&&ia(),m=t.pendingLanes,(m&1)!==0?t===Bd?pi++:(pi=0,Bd=t):pi=0,Hr(),null}function ia(){if(Gr!==null){var t=tp(Ys),r=Pn.transition,a=rt;try{if(Pn.transition=null,rt=16>t?16:t,Gr===null)var c=!1;else{if(t=Gr,Gr=null,Ys=0,(Je&6)!==0)throw Error(i(331));var u=Je;for(Je|=4,_e=t.current;_e!==null;){var m=_e,b=m.child;if((_e.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var re=I[H];for(_e=re;_e!==null;){var he=_e;switch(he.tag){case 0:case 11:case 15:di(8,he,m)}var pe=he.child;if(pe!==null)pe.return=he,_e=pe;else for(;_e!==null;){he=_e;var ue=he.sibling,ye=he.return;if(X1(he),he===re){_e=null;break}if(ue!==null){ue.return=ye,_e=ue;break}_e=ye}}}var Se=m.alternate;if(Se!==null){var $e=Se.child;if($e!==null){Se.child=null;do{var kt=$e.sibling;$e.sibling=null,$e=kt}while($e!==null)}}_e=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,_e=b;else e:for(;_e!==null;){if(m=_e,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:di(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,_e=Z;break e}_e=m.return}}var V=t.current;for(_e=V;_e!==null;){b=_e;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,_e=te;else e:for(b=V;_e!==null;){if(I=_e,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ws(9,I)}}catch(Me){yt(I,I.return,Me)}if(I===b){_e=null;break e}var me=I.sibling;if(me!==null){me.return=I.return,_e=me;break e}_e=I.return}}if(Je=u,Hr(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(ns,t)}catch{}c=!0}return c}finally{rt=a,Pn.transition=r}}return!1}function mf(t,r,a){r=na(a,r),r=A1(t,r,1),t=Ur(t,r,1),r=tn(),t!==null&&(za(t,1,r),ln(t,r))}function yt(t,r,a){if(t.tag===3)mf(t,t,a);else for(;r!==null;){if(r.tag===3){mf(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){t=na(a,t),t=T1(r,t,1),r=Ur(r,t,1),t=tn(),r!==null&&(za(r,1,t),ln(r,t));break}}r=r.return}}function e3(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=tn(),t.pingedLanes|=t.suspendedLanes&a,Pt===t&&(Ut&a)===a&&(Nt===4||Nt===3&&(Ut&130023424)===Ut&&500>et()-Dd?ko(t,0):Od|=a),ln(t,r)}function gf(t,r){r===0&&((t.mode&1)===0?r=1:(r=os,os<<=1,(os&130023424)===0&&(os=4194304)));var a=tn();t=yr(t,r),t!==null&&(za(t,r,a),ln(t,a))}function t3(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),gf(t,a)}function n3(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),gf(t,a)}var vf;vf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||rn.current)an=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return an=!1,Wy(t,r,a);an=(t.flags&131072)!==0}else an=!1,ft&&(r.flags&1048576)!==0&&Kp(r,Ss,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Bs(t,r),t=r.pendingProps;var u=Yo(r,Kt.current);ea(r,a),u=gd(null,r,c,t,u,a);var m=vd();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,on(c)?(m=!0,_s(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,cd(r),u.updater=Ds,r.stateNode=u,u._reactInternals=r,_d(r,c,t,a),r=$d(null,r,c,!0,m,a)):(r.tag=0,ft&&m&&Jc(r),en(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Bs(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=o3(c),t=Yn(c,t),u){case 0:r=Sd(null,r,c,t,a);break e;case 1:r=H1(null,r,c,t,a);break e;case 11:r=z1(null,r,c,t,a);break e;case 14:r=O1(null,r,c,Yn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),Sd(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),H1(t,r,c,u,a);case 3:e:{if(W1(r),t===null)throw Error(i(387));c=r.pendingProps,m=r.memoizedState,u=m.element,o1(t,r),As(r,c,null,a);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=na(Error(i(423)),r),r=U1(t,r,c,a,u);break e}else if(c!==u){u=na(Error(i(424)),r),r=U1(t,r,c,a,u);break e}else for(yn=Dr(r.stateNode.containerInfo.firstChild),xn=r,ft=!0,Gn=null,a=n1(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zo(),c===u){r=br(t,r,a);break e}en(t,r,c,a)}r=r.child}return r;case 5:return s1(r),t===null&&nd(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,b=u.children,Gc(c,u)?b=null:m!==null&&Gc(c,m)&&(r.flags|=32),B1(t,r),en(t,r,b,a),r.child;case 6:return t===null&&nd(r),null;case 13:return q1(t,r,a);case 4:return dd(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Xo(r,null,c,a):en(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),z1(t,r,c,u,a);case 7:return en(t,r,r.pendingProps,a),r.child;case 8:return en(t,r,r.pendingProps.children,a),r.child;case 12:return en(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,b=u.value,ct(Rs,c._currentValue),c._currentValue=b,m!==null)if(Vn(m.value,b)){if(m.children===u.children&&!rn.current){r=br(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){b=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=wr(-1,a&-a),H.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var he=re.pending;he===null?H.next=H:(H.next=he.next,he.next=H),re.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),sd(m.return,a,r),I.lanes|=a;break}H=H.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),sd(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}en(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,ea(r,a),u=En(u),c=c(u),r.flags|=1,en(t,r,c,a),r.child;case 14:return c=r.type,u=Yn(c,r.pendingProps),u=Yn(c.type,u),O1(t,r,c,u,a);case 15:return D1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Yn(c,u),Bs(t,r),r.tag=1,on(c)?(t=!0,_s(r)):t=!1,ea(r,a),N1(r,c,u),_d(r,c,u,a),$d(null,r,c,!0,t,a);case 19:return G1(t,r,a);case 22:return F1(t,r,a)}throw Error(i(156,r.tag))};function xf(t,r){return ke(t,r)}function r3(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,r,a,c){return new r3(t,r,a,c)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o3(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===U)return 11;if(t===ae)return 14}return 2}function Qr(t,r){var a=t.alternate;return a===null?(a=zn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xs(t,r,a,c,u,m){var b=2;if(c=t,typeof t=="function")Gd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case E:return Co(a.children,u,m,r);case A:b=8,u|=8;break;case D:return t=zn(12,a,r,u|2),t.elementType=D,t.lanes=m,t;case Y:return t=zn(13,a,r,u),t.elementType=Y,t.lanes=m,t;case J:return t=zn(19,a,r,u),t.elementType=J,t.lanes=m,t;case se:return Js(a,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case K:b=9;break e;case U:b=11;break e;case ae:b=14;break e;case de:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=zn(b,a,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function Co(t,r,a,c){return t=zn(7,t,c,r),t.lanes=a,t}function Js(t,r,a,c){return t=zn(22,t,c,r),t.elementType=se,t.lanes=a,t.stateNode={isHidden:!1},t}function Yd(t,r,a){return t=zn(6,t,null,r),t.lanes=a,t}function Kd(t,r,a){return r=zn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function a3(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Qd(t,r,a,c,u,m,b,I,H){return t=new a3(t,r,a,I,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=zn(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(m),t}function i3(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function yf(t){if(!t)return Br;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(on(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(on(a))return Vp(t,a,r)}return r}function wf(t,r,a,c,u,m,b,I,H){return t=Qd(a,c,!0,t,u,m,b,I,H),t.context=yf(null),a=t.current,c=tn(),u=Yr(a),m=wr(c,u),m.callback=r??null,Ur(a,m,u),t.current.lanes=u,za(t,u,c),ln(t,c),t}function el(t,r,a,c){var u=r.current,m=tn(),b=Yr(u);return a=yf(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Ur(u,r,b),t!==null&&(Zn(t,u,b,m),Ls(t,u,b)),b}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Zd(t,r){bf(t,r),(t=t.alternate)&&bf(t,r)}function s3(){return null}var kf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xd(t){this._internalRoot=t}nl.prototype.render=Xd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));el(t,r,null,null)},nl.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;bo(function(){el(null,t,null,null)}),r[mr]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var r=op();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Pr.length&&r!==0&&r<Pr[a].priority;a++);Pr.splice(a,0,t),a===0&&sp(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _f(){}function l3(t,r,a,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=tl(b);m.call(re)}}var b=wf(r,c,t,0,null,!1,!1,"",_f);return t._reactRootContainer=b,t[mr]=b.current,Za(t.nodeType===8?t.parentNode:t),bo(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=tl(H);I.call(re)}}var H=Qd(t,0,!1,null,null,!1,!1,"",_f);return t._reactRootContainer=H,t[mr]=H.current,Za(t.nodeType===8?t.parentNode:t),bo(function(){el(r,H,a,c)}),H}function ol(t,r,a,c,u){var m=a._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var I=u;u=function(){var H=tl(b);I.call(H)}}el(r,b,t,u)}else b=l3(a,r,t,u,c);return tl(b)}np=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Pa(r.pendingLanes);a!==0&&(_c(r,a|1),ln(r,et()),(Je&6)===0&&(aa=et()+500,Hr()))}break;case 13:bo(function(){var c=yr(t,1);if(c!==null){var u=tn();Zn(c,t,1,u)}}),Zd(t,1)}},Cc=function(t){if(t.tag===13){var r=yr(t,134217728);if(r!==null){var a=tn();Zn(r,t,134217728,a)}Zd(t,134217728)}},rp=function(t){if(t.tag===13){var r=Yr(t),a=yr(t,r);if(a!==null){var c=tn();Zn(a,t,r,c)}Zd(t,r)}},op=function(){return rt},ap=function(t,r){var a=rt;try{return rt=t,r()}finally{rt=a}},co=function(t,r,a){switch(r){case"input":if(He(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=bs(c);if(!u)throw Error(i(90));ve(c),He(c,u)}}}break;case"textarea":st(t,a);break;case"select":r=a.value,r!=null&&Ke(t,!!a.multiple,r,!1)}},Ea=Ud,Yi=bo;var c3={usingClientEntryPoint:!1,Events:[ei,Vo,bs,Vi,Gi,Ud]},fi={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d3={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ne(t),t===null?null:t.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||s3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{ns=al.inject(d3),ar=al}catch{}}return cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c3,cn.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(r))throw Error(i(200));return i3(t,r,null,a)},cn.createRoot=function(t,r){if(!Jd(t))throw Error(i(299));var a=!1,c="",u=kf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Qd(t,1,!1,null,null,a,!1,c,u),t[mr]=r.current,Za(t.nodeType===8?t.parentNode:t),new Xd(r)},cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=ne(r),t=t===null?null:t.stateNode,t},cn.flushSync=function(t){return bo(t)},cn.hydrate=function(t,r,a){if(!rl(r))throw Error(i(200));return ol(null,t,r,!0,a)},cn.hydrateRoot=function(t,r,a){if(!Jd(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,m="",b=kf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=wf(r,null,t,1,a??null,u,!1,m,b),t[mr]=r.current,Za(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new nl(r)},cn.render=function(t,r,a){if(!rl(r))throw Error(i(200));return ol(null,t,r,!1,a)},cn.unmountComponentAtNode=function(t){if(!rl(t))throw Error(i(40));return t._reactRootContainer?(bo(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1},cn.unstable_batchedUpdates=Ud,cn.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!rl(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return ol(t,r,a,!1,c)},cn.version="18.3.1-next-f1338f8080-20240426",cn}var Lf;function Z0(){if(Lf)return nu.exports;Lf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),nu.exports=v3(),nu.exports}var Af;function x3(){if(Af)return il;Af=1;var e=Z0();return il.createRoot=e.createRoot,il.hydrateRoot=e.hydrateRoot,il}var y3=x3();const w3=Q0(y3);function X0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=X0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=X0(e))&&(s&&(s+=" "),s+=o);return s}const $a=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$a.displayName="PlusIcon";const b3="_root_7uomf_13",k3="_sm_7uomf_82",_3="_md_7uomf_88",C3="_lg_7uomf_94",j3="_horizontal_7uomf_107",S3="_alignStart_7uomf_121",$3="_vertical_7uomf_125",M3="_inner_7uomf_131",R3="_iconSlot_7uomf_146",N3="_label_7uomf_163",jo={root:b3,sm:k3,md:_3,lg:C3,horizontal:j3,alignStart:S3,vertical:$3,inner:M3,iconSlot:R3,label:N3};function Tf(e){return typeof e=="number"?`${e}px`:e}const L3=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:p,className:g,style:x,disabled:y,type:w="button",...k},M)=>{const _=d??n.jsx($a,{size:"100%"}),S={};return h!==void 0&&(S["--area-min-height"]=Tf(h)),p!==void 0&&(S["--area-radius"]=Tf(p)),n.jsx("button",{ref:M,type:w,className:ie(jo.root,jo[e],jo[o],i==="start"&&jo.alignStart,g),disabled:y,"data-size":e,"data-layout":o,style:{...S,...x},...k,children:n.jsxs("span",{className:jo.inner,children:[n.jsx("span",{className:jo.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&n.jsx("span",{className:jo.label,children:s})]})})});L3.displayName="AreaButton";const A3="_root_b29pw_8",T3="_image_b29pw_33",E3="_initials_b29pw_40",I3="_iconSlot_b29pw_52",Xr={root:A3,image:T3,initials:E3,iconSlot:I3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function P3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function z3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const rr=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:p="subtle",shape:g="circle",className:x,...y},w)=>{const[k,M]=v.useState(!1),_=!!e&&!k,S=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?z3(s):"");let $;return _?$=n.jsx("img",{src:e,alt:o??"",className:Xr.image,onError:()=>M(!0),draggable:!1},e):S?$=n.jsx("span",{className:Xr.initials,"aria-hidden":o?void 0:!0,children:S}):$=n.jsx("span",{className:Xr.iconSlot,"aria-hidden":"true",children:l??n.jsx(P3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":p,"data-shape":g,className:ie(Xr.root,Xr[`size-${d}`],Xr[`color-${h}`],Xr[`variant-${p}`],Xr[`shape-${g}`],x),...y,children:$})});rr.displayName="Avatar";const O3="_root_uqz3u_7",D3={root:O3},nn=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(D3.root,o),...s,children:i}));nn.displayName="Eyebrow";const F3="_root_1tnwf_15",B3={root:F3},H3=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:p,onInput:g,...x},y)=>{const w=i!==void 0,k=v.useRef(null),[M,_]=v.useState(()=>w?!i:!s),S=v.useCallback(C=>{k.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const $=C=>{const P=C.currentTarget.textContent??"";_(P===""),l==null||l(P),g==null||g(C)},R=C=>{C.preventDefault();const P=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,P)},j=!h&&!d;return n.jsx("span",{ref:S,contentEditable:j?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":M||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(B3.root,p),onInput:$,onPaste:R,...x})});H3.displayName="TypeBox";const W3="_root_1brpy_12",U3="_ghost_1brpy_27",q3="_path_1brpy_32",gi={root:W3,"ai-spin":"_ai-spin_1brpy_1",ghost:U3,"ai-morph":"_ai-morph_1brpy_1",path:q3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},V3={xs:16,sm:24,md:32,lg:48,xl:64},G3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Ef="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",sl=e=>e==="inverse"||e==="inverse-light",Y3=e=>e==="stroke"||e==="stroke-light",lh=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},p)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof e=="string",k=w?V3[e]:e,M=w?G3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=o==="gradient-fill"?`url(#${x})`:sl(o)?"currentColor":"none",S=sl(o)?"none":Y3(o)?"currentColor":`url(#${x})`,$="currentColor",R=o!=="stroke"&&o!=="stroke-light"&&!sl(o);return n.jsxs("svg",{ref:p,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(gi.root,gi[`variant-${o}`],gi[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!sl(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Ef,stroke:$,strokeWidth:M*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:gi.ghost}),n.jsx("path",{d:Ef,fill:_,stroke:S==="none"?void 0:S,strokeWidth:S==="none"?void 0:M,strokeLinecap:"round",strokeLinejoin:"round",filter:R?`url(#${y})`:void 0,className:gi.path})]})});lh.displayName="AILoader";const K3="_root_10act_14",Q3="_hovered_10act_68",Z3="_loading_10act_69",X3="_sm_10act_90",J3="_md_10act_98",e5="_lg_10act_106",t5="_dark_10act_116",n5="_icon_10act_122",sa={root:K3,hovered:Q3,loading:Z3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:X3,md:J3,lg:e5,dark:t5,icon:n5},If={sm:12,md:14,lg:18};function r5({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const J0=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},p)=>{const[g,x]=v.useState(!1);return n.jsx("button",{ref:p,className:ie(sa.root,sa[e],o&&sa.dark,i?sa.loading:g&&sa.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:n.jsx("span",{className:sa.icon,children:i?n.jsx(lh,{size:If[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(r5,{size:If[e],light:o})})})});J0.displayName="AICoreButton";const o5="_root_1qx4u_9",a5="_star_1qx4u_34",au={root:o5,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:a5},i5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",eg=v.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(au.root,au[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:au.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:i5,fill:"currentColor"})})}));eg.displayName="AIAvatar";const s5="_shell_lalw3_21",l5="_wrapper_lalw3_58",c5="_card_lalw3_65",d5="_cardClip_lalw3_94",u5="_textarea_lalw3_160",h5="_actions_lalw3_203",fa={shell:s5,wrapper:l5,card:c5,cardClip:d5,textarea:u5,actions:h5},tg=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(fa.shell,e),...i,children:o}));tg.displayName="AIComposer";function p5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const ng=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:p,disabled:g,children:x,style:y,...w},k)=>{const M=v.useRef(null);v.useEffect(()=>{const j=M.current;j&&(j.style.height="auto",j.style.height=`${j.scrollHeight}px`)},[e]);const _=v.useCallback(j=>o(j.target.value),[o]),S=v.useCallback(j=>{p==null||p(j),!j.defaultPrevented&&j.key==="Enter"&&!j.shiftKey&&i&&(j.preventDefault(),i())},[p,i]),$=v.useCallback(j=>{M.current=j,p5(k,j)},[k]),R={...y??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(fa.wrapper,h),"data-radius":l,children:n.jsx("div",{className:fa.card,children:n.jsxs("div",{className:fa.cardClip,children:[n.jsx("textarea",{...w,ref:$,className:fa.textarea,rows:1,value:e,onChange:_,onKeyDown:S,placeholder:d,disabled:g,style:R}),x!=null&&n.jsx("div",{className:fa.actions,children:x})]})})})});ng.displayName="AIComposerInput";const f5="_root_fv0gc_10",m5="_simple_fv0gc_28",g5="_float_fv0gc_83",Pf={root:f5,simple:m5,float:g5},v5=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(Pf.root,Pf[e],o),...s,children:i}));v5.displayName="AIConversation";const x5="_fadeFrame_1l0ib_19",y5="_scroller_1l0ib_32",w5="_content_1l0ib_89",b5="_messageBlock_1l0ib_108",k5="_messageBlockAi_1l0ib_116",_5="_inboundBlock_1l0ib_128",C5="_inboundLoader_1l0ib_136",j5="_inboundLoaderLabel_1l0ib_146",S5="_outboundBlock_1l0ib_153",$5="_outboundHeader_1l0ib_161",M5="_messageBlockUser_1l0ib_168",R5="_aiThreadOutboundIn_1l0ib_1",N5="_messageBody_1l0ib_182",L5="_messageBodyAi_1l0ib_193",A5="_messageBodyUser_1l0ib_200",T5="_label_1l0ib_159",E5="_labelAi_1l0ib_221",I5="_labelUser_1l0ib_159",P5="_labelAvatar_1l0ib_224",z5="_labelText_1l0ib_237",O5="_timestamp_1l0ib_244",D5="_timestampAi_1l0ib_259",F5="_timestampUser_1l0ib_260",B5="_timestampInline_1l0ib_270",H5="_aiThreadOutboundFadeIn_1l0ib_1",Ve={fadeFrame:x5,scroller:y5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:w5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:b5,messageBlockAi:k5,inboundBlock:_5,inboundLoader:C5,inboundLoaderLabel:j5,outboundBlock:S5,outboundHeader:$5,messageBlockUser:M5,aiThreadOutboundIn:R5,messageBody:N5,messageBodyAi:L5,messageBodyUser:A5,label:T5,labelAi:E5,labelUser:I5,labelAvatar:P5,labelText:z5,timestamp:O5,timestampAi:D5,timestampUser:F5,timestampInline:B5,aiThreadOutboundFadeIn:H5},zf=8;function W5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const U5=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},p)=>{const g=v.useRef(null),x=v.useRef(null),y=v.useRef(!0),[w,k]=v.useState(!1),[M,_]=v.useState(!1),S=v.useCallback($=>{g.current=$,W5(p,$)},[p]);return v.useEffect(()=>{const $=g.current,R=x.current;if(!$||!R)return;const j=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:D}=$;return A-E-D<s},C=E=>{$.scrollTo({top:$.scrollHeight,behavior:E?"smooth":"auto"})},P=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:D}=$,G=E>zf,K=A-E-D>zf;k(U=>U===G?U:G),_(U=>U===K?U:K)};i&&(C(!1),y.current=!0),P();const N=()=>{y.current=j(),P()};$.addEventListener("scroll",N,{passive:!0});const L=new ResizeObserver(()=>{i&&y.current&&C(!0),P()});return L.observe(R),L.observe($),()=>{$.removeEventListener("scroll",N),L.disconnect()}},[i,s]),n.jsx("div",{className:Ve.fadeFrame,"data-fade-top":w,"data-fade-bottom":M,children:n.jsx("div",{ref:S,className:ie(Ve.scroller,Ve[`padding-${o}`],l),...h,children:n.jsx("div",{ref:x,className:ie(Ve.content,Ve[`density-${e}`]),children:d})})})});U5.displayName="AIThread";const Zl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ve.label,e==="user"?Ve.labelUser:Ve.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ve.labelAvatar,children:o}),n.jsx("span",{className:Ve.labelText,children:s})]}));Zl.displayName="AILabel";const q5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function V5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Ii=v.forwardRef(({value:e,align:o="ai",format:i=q5,inline:s=!1,className:l,...d},h)=>{const p=v.useMemo(()=>V5(e,i),[e,i]);return p?n.jsx("time",{ref:h,className:ie(Ve.timestamp,s?Ve.timestampInline:o==="user"?Ve.timestampUser:Ve.timestampAi,l),dateTime:p.iso,...d,children:p.text}):null});Ii.displayName="AITimestamp";function G5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ii,{align:"ai",value:e}):e}function Y5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Zl,{align:"ai",children:e}):e}const K5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ve.messageBlock,Ve.messageBlockAi,i),...l,children:[Y5(e),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyAi),children:s}),G5(o)]}));K5.displayName="AIAssistantMessage";function Q5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ii,{align:"user",value:e}):e}function Z5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Zl,{align:"user",children:e}):e}const X5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ve.messageBlock,Ve.messageBlockUser,i),...l,children:[Z5(e),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyUser),children:s}),Q5(o)]}));X5.displayName="AIUserMessage";function J5(e){return e===!1?null:e==null||e===!0?n.jsx(eg,{size:"sm"}):e}function e4(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Zl,{align:"ai",avatar:o,children:e}):e}const t4=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:p,...g},x)=>{const y=J5(e),w=e4(o,y);return n.jsxs("div",{ref:x,"data-author":"ai",className:ie(Ve.messageBlock,Ve.messageBlockAi,Ve.inboundBlock,h),...g,children:[w,i,p!=null&&n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyAi),children:p}),l&&n.jsxs("div",{className:Ve.inboundLoader,"aria-live":"polite",children:[n.jsx(lh,{size:"xs"}),d!=null&&n.jsx("span",{className:Ve.inboundLoaderLabel,children:d})]}),s]})});t4.displayName="AIInboundMessage";function n4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const r4=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const p=o==null?null:n4(o)?n.jsx(Ii,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ve.labelText,children:e}):e,x=g!=null||p!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ve.messageBlock,Ve.messageBlockUser,Ve.outboundBlock,s),...d,children:[x&&n.jsxs("div",{className:ie(Ve.label,Ve.labelUser,Ve.outboundHeader),children:[g,p]}),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyUser),children:l})]})});r4.displayName="AIOutboundMessage";const Mn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Mn.displayName="ChevronDownIcon";const o4="_root_1j4eq_8",a4="_header_1j4eq_17",i4="_headerSummary_1j4eq_53",s4="_aiTrailSummaryFade_1j4eq_1",l4="_aiTrailHeaderAppend_1j4eq_1",c4="_aiTrailEllipsis_1j4eq_1",d4="_headerCurrent_1j4eq_128",u4="_headerChevron_1j4eq_159",h4="_headerChevronExpanded_1j4eq_173",p4="_body_1j4eq_187",f4="_bodyExpanded_1j4eq_200",m4="_bodyCollapsed_1j4eq_201",g4="_bodyInner_1j4eq_203",v4="_bodyContent_1j4eq_187",x4="_step_1j4eq_225",y4="_stepIcon_1j4eq_242",w4="_stepAnimating_1j4eq_256",b4="_aiTrailStepPulse_1j4eq_1",k4="_stepBody_1j4eq_267",_4="_stepHead_1j4eq_282",C4="_stepLabel_1j4eq_286",j4="_stepSeparator_1j4eq_288",S4="_stepDetail_1j4eq_292",$4="_subToggle_1j4eq_302",M4="_subToggleCount_1j4eq_335",R4="_subToggleChevron_1j4eq_339",N4="_subActivityWrap_1j4eq_358",L4="_subActivityExpanded_1j4eq_364",A4="_subActivityCollapsed_1j4eq_365",T4="_subActivityClip_1j4eq_367",E4="_subActivityList_1j4eq_378",I4="_subActivity_1j4eq_358",P4="_aiTrailSubActivityType_1j4eq_1",z4="_aiTrailSubActivityFade_1j4eq_1",ot={root:o4,header:a4,headerSummary:i4,aiTrailSummaryFade:s4,aiTrailHeaderAppend:l4,aiTrailEllipsis:c4,headerCurrent:d4,headerChevron:u4,headerChevronExpanded:h4,body:p4,bodyExpanded:f4,bodyCollapsed:m4,bodyInner:g4,bodyContent:v4,step:x4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:y4,stepAnimating:w4,aiTrailStepPulse:b4,stepBody:k4,stepHead:_4,stepLabel:C4,stepSeparator:j4,stepDetail:S4,subToggle:$4,subToggleCount:M4,subToggleChevron:R4,subActivityWrap:N4,subActivityExpanded:L4,subActivityCollapsed:A4,subActivityClip:T4,subActivityList:E4,subActivity:I4,aiTrailSubActivityType:P4,aiTrailSubActivityFade:z4},ch=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ch.displayName="MessageDotsSquareIcon";function zl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}zl.displayName="SearchMdIcon";function oo({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const dh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dh.displayName="Globe01Icon";const rg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};rg.displayName="Code02Icon";function uh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}uh.displayName="Tool01Icon";const Rn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},ya=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ya.displayName="AlertCircleIcon";const O4={thinking:n.jsx(ch,{size:14}),tool:n.jsx(uh,{size:14}),search:n.jsx(zl,{size:14}),file:n.jsx(oo,{size:14}),web:n.jsx(dh,{size:14}),code:n.jsx(rg,{size:14}),content:n.jsx(Rn,{size:14})},Xl=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:p,...g},x)=>{const y=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[M,_]=v.useState(null),S=M!==null?M:k;v.useEffect(()=>{_(null)},[o]);const $=v.useCallback(()=>_(!S),[S]),R=!!l&&l.length>0,j=(l==null?void 0:l.length)??0,C=o==="error"?n.jsx(ya,{size:14}):s??O4[e];return n.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":o,className:ie(ot.step,ot[`step-${o}`],y&&ot.stepAnimating,h),...g,children:[n.jsx("span",{className:ot.stepIcon,"aria-hidden":!0,children:C}),n.jsxs("span",{className:ot.stepBody,children:[n.jsxs("span",{className:ot.stepHead,children:[n.jsx("span",{className:ot.stepLabel,children:p}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:ot.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:ot.stepDetail,children:i})]}),R&&n.jsxs("button",{type:"button",className:ot.subToggle,onClick:$,"aria-expanded":S,"aria-label":S?`Collapse ${j} sub-steps`:`Expand ${j} sub-steps`,"data-expanded":S||void 0,children:[n.jsx("span",{className:ot.subToggleCount,children:j}),n.jsx("span",{className:ot.subToggleChevron,"aria-hidden":!0,children:n.jsx(Mn,{size:10})})]})]}),R&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(ot.subActivityWrap,S?ot.subActivityExpanded:ot.subActivityCollapsed),"aria-hidden":!S,children:n.jsx("div",{className:ot.subActivityClip,children:n.jsx("ul",{className:ot.subActivityList,"data-animating":w||void 0,children:l.map((P,N)=>n.jsx("li",{className:ot.subActivity,children:P},N))})})})})]})]})});Xl.displayName="AIActivityStep";function Of(e){return e==="error"}function D4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const p=o===1?"1 step":`${o} steps`;return`${h} · ${p}`}return n.jsxs(n.Fragment,{children:[h,i.map((p,g)=>n.jsxs(v.Fragment,{children:[" · ",p]},g))]})}const hh=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:p,...g},x)=>{const y=o!==void 0,[w,k]=v.useState(i??Of(e)),[M,_]=v.useState(!1);v.useEffect(()=>{y||M||k(Of(e))},[e,y,M]);const S=y?!!o:w,$=v.useCallback(()=>{const L=!S;y||(k(L),_(!0)),s==null||s(L)},[S,y,s]),{enhancedChildren:R,stepCount:j,stepLabels:C,currentLabelIdx:P}=v.useMemo(()=>{let L=0;const E=[];let A=-1;return{enhancedChildren:v.Children.map(p,G=>{if(!v.isValidElement(G))return G;const K=G.props;if(!("type"in K||"status"in K))return G;L+=1;const Y=K.status??"done";return Y==="pending"?null:(K.children!=null&&(E.push(K.children),Y==="active"&&(A=E.length-1)),F4(G,e))}),stepCount:L,stepLabels:E,currentLabelIdx:A>=0?A:E.length-1}},[p,e]),N=d??D4(e,j,C,P,ot.headerCurrent,l);return n.jsxs("div",{ref:x,"data-state":e,"data-expanded":S,className:ie(ot.root,h),...g,children:[n.jsxs("button",{type:"button",className:ot.header,onClick:$,"aria-expanded":S,"aria-label":S?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:ot.headerSummary,children:N},`${e}-${P}`),n.jsx("span",{className:ie(ot.headerChevron,S&&ot.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Mn,{size:14})})]}),n.jsx("div",{className:ie(ot.body,S?ot.bodyExpanded:ot.bodyCollapsed),"aria-hidden":!S,children:n.jsx("div",{className:ot.bodyInner,children:n.jsxs("div",{className:ot.bodyContent,children:[R,e==="done"&&n.jsx(Xl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});hh.displayName="AIActivityTrail";function F4(e,o){return v.cloneElement(e,{groupState:o})}var Io=Z0();const B4="_wrapper_3tqlm_10",H4="_tooltip_3tqlm_22",W4="_portal_3tqlm_23",U4="_top_3tqlm_61",q4="_bottom_3tqlm_71",V4="_left_3tqlm_81",G4="_right_3tqlm_91",ll={wrapper:B4,tooltip:H4,portal:W4,top:U4,bottom:q4,left:V4,right:G4},Rr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[p,g]=v.useState(!1),[x,y]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),M=v.useId(),_=v.useCallback(()=>{if(!w.current)return;const C=w.current.getBoundingClientRect(),P=6+d;let N=0,L=0;switch(o){case"top":N=C.top-P,L=C.left+C.width/2;break;case"bottom":N=C.bottom+P,L=C.left+C.width/2;break;case"left":N=C.top+C.height/2,L=C.left-P;break;case"right":N=C.top+C.height/2,L=C.right+P;break}y({top:N,left:L})},[o,d]),S=v.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,_]),$=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!p)return;const C=()=>_();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[p,_]);const R=fn.cloneElement(h,{"aria-describedby":p?M:void 0}),j=n.jsx("span",{id:M,role:"tooltip",className:ie(ll.tooltip,ll[o],ll.portal),"data-visible":p||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:ll.wrapper,onMouseEnter:S,onMouseLeave:$,onFocus:S,onBlur:$,children:[R,Io.createPortal(j,document.body)]})};Rr.displayName="Tooltip";const Y4="_root_v8mqg_9",K4="_hover_v8mqg_21",iu={root:Y4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:K4};function Q4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const og=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},p)=>{const g=i==null?null:Q4(i)?n.jsx(Ii,{value:i,format:s,inline:!0}):i,x=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===Rr)return k;const M=k.props["aria-label"];return M?n.jsx(Rr,{content:M,placement:"top",delay:150,children:k}):k},y=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,x)}return x(w)});return n.jsxs("div",{ref:p,"data-visibility":e,"data-align":o,className:ie(iu.root,iu[`align-${o}`],e==="hover"&&iu.hover,l),...h,children:[y,g]})});og.displayName="AIMessageActions";const Z4="_card_1apq1_17",X4="_header_1apq1_69",J4="_iconBadge_1apq1_74",ew="_iconInner_1apq1_89",tw="_headerText_1apq1_100",nw="_headerTopRow_1apq1_109",rw="_eyebrow_1apq1_115",ow="_title_1apq1_124",aw="_subtitle_1apq1_130",iw="_headerTrailing_1apq1_135",sw="_body_1apq1_141",lw="_footer_1apq1_152",cw="_footerEnd_1apq1_157",dw="_metaRow_1apq1_162",uw="_metaItem_1apq1_170",hw="_resultHero_1apq1_180",pw="_resultHeadline_1apq1_185",fw="_resultDetail_1apq1_191",mw="_clauses_1apq1_205",gw="_clause_1apq1_205",vw="_clauseLabel_1apq1_215",xw="_clauseBody_1apq1_225",yw="_badgeExecuting_1apq1_245",dt={card:Z4,header:X4,iconBadge:J4,iconInner:ew,headerText:tw,headerTopRow:nw,eyebrow:rw,title:ow,subtitle:aw,headerTrailing:iw,body:sw,footer:lw,footerEnd:cw,metaRow:dw,metaItem:uw,resultHero:hw,resultHeadline:pw,resultDetail:fw,clauses:mw,clause:gw,clauseLabel:vw,clauseBody:xw,badgeExecuting:yw},hr=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:p,footer:g,footerEnd:x=!1,className:y,children:w,...k},M)=>{const _=l!=null||p!=null,S=_||d!=null||h!=null,$=s!=null||S;return n.jsxs("div",{ref:M,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(dt.card,y),...k,children:[$&&n.jsxs("div",{className:dt.header,children:[s!=null&&n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:dt.iconInner,children:s})}),S&&n.jsxs("div",{className:dt.headerText,children:[_&&n.jsxs("div",{className:dt.headerTopRow,children:[l!=null&&n.jsx("span",{className:dt.eyebrow,children:l}),p!=null&&n.jsx("span",{className:dt.headerTrailing,children:p})]}),d!=null&&n.jsx("span",{className:dt.title,children:d}),h!=null&&n.jsx("span",{className:dt.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:dt.body,children:w}),g!=null&&n.jsx("div",{className:ie(dt.footer,x&&dt.footerEnd),children:g})]})});hr.displayName="UltronCard";const ww="_root_zkkgh_6",bw="_sm_zkkgh_24",kw="_md_zkkgh_33",_w="_lg_zkkgh_42",Cw="_neutral_zkkgh_53",jw="_blue_zkkgh_66",Sw="_azure_zkkgh_79",$w="_purple_zkkgh_92",Mw="_pink_zkkgh_105",Rw="_red_zkkgh_118",Nw="_orange_zkkgh_131",Lw="_yellow_zkkgh_144",Aw="_matcha_zkkgh_157",Tw="_green_zkkgh_170",Ew="_subtle_zkkgh_184",Iw="_outline_zkkgh_190",Pw="_solid_zkkgh_196",zw="_dot_zkkgh_203",Ow="_icon_zkkgh_212",Dw="_dismiss_zkkgh_224",So={root:ww,sm:bw,md:kw,lg:_w,neutral:Cw,blue:jw,azure:Sw,purple:$w,pink:Mw,red:Rw,orange:Nw,yellow:Lw,matcha:Aw,green:Tw,subtle:Ew,outline:Iw,solid:Pw,dot:zw,icon:Ow,dismiss:Dw},Pi=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},Fw={sm:10,md:12,lg:14},Fn=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:p,children:g,...x},y)=>n.jsxs("span",{ref:y,className:ie(So.root,So[i],So[o],So[e],p),...x,children:[s&&n.jsx("span",{className:So.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(So.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&n.jsx("button",{type:"button",className:So.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Pi,{size:Fw[i]})})]}));Fn.displayName="Tag";function ag({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ag.displayName="SlashCircle01Icon";const ph=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};ph.displayName="EyeIcon";function Jl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Jl.displayName="Target01Icon";function jn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jn.displayName="ClockIcon";const zi=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};zi.displayName="RefreshCw04Icon";const $n=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};$n.displayName="CheckCircleIcon";function ec({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ec.displayName="Save01Icon";const Bw={sm:11,md:12,lg:14},Hw={ignored:{label:"Ignored",color:"neutral",Icon:ag},monitored:{label:"Monitored",color:"blue",Icon:ph},recommended:{label:"Recommended",color:"purple",Icon:Jl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:jn},executing:{label:"Executing",color:"azure",Icon:zi},completed:{label:"Completed",color:"green",Icon:$n},saved:{label:"Saved",color:"matcha",Icon:ec}},Po=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=Hw[e],p=h.Icon;return n.jsx(Fn,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(p,{size:Bw[o]}),className:ie(e==="executing"&&dt.badgeExecuting,s),...l,children:i??h.label})});Po.displayName="UltronStatusBadge";function tc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tc.displayName="Bell01Icon";const Ww=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...p},g)=>n.jsx(hr,{ref:g,tone:d,eyebrow:i,title:e,icon:o??n.jsx(tc,{size:14}),trailing:l?n.jsx(Po,{status:l}):void 0,...p,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:dt.metaRow,children:s.map((x,y)=>n.jsxs("span",{className:dt.metaItem,children:[x.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));Ww.displayName="UltronEventCard";const Uw=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(ch,{size:14}),...d,children:[l,i&&n.jsx("div",{className:dt.metaRow,children:i})]}));Uw.displayName="UltronUnderstandingCard";const qw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Vw=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Jl,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:dt.metaRow,children:i.map((p,g)=>n.jsx(Fn,{size:"sm",color:qw[s],variant:"subtle",children:p},g))}):null]}));Vw.displayName="UltronDecisionCard";const Gw="_root_ou64w_8",Yw="_xs_ou64w_75",Kw="_sm_ou64w_84",Qw="_md_ou64w_93",Zw="_lg_ou64w_102",Xw="_xl_ou64w_111",Jw="_iconOnly_ou64w_122",e6="_primary_ou64w_132",t6="_secondary_ou64w_148",n6="_tertiary_ou64w_167",r6="_ghost_ou64w_185",o6="_destructive_ou64w_203",a6="_destructiveSecondary_ou64w_221",i6="_artwork_ou64w_69",s6="_label_ou64w_254",l6="_spinner_ou64w_69",c6="_light_ou64w_281",hn={root:Gw,xs:Yw,sm:Kw,md:Qw,lg:Zw,xl:Xw,iconOnly:Jw,primary:e6,secondary:t6,tertiary:n6,ghost:r6,destructive:o6,destructiveSecondary:a6,artwork:i6,label:s6,spinner:l6,"alloy-spin":"_alloy-spin_ou64w_1",light:c6},d6={primary:hn.primary,secondary:hn.secondary,tertiary:hn.tertiary,ghost:hn.ghost,destructive:hn.destructive,"destructive-secondary":hn.destructiveSecondary},ze=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:p,disabled:g,...x},y)=>{const w=g||i;return n.jsxs("button",{ref:y,className:ie(hn.root,d6[e],hn[o],d&&hn.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...x,children:[i&&n.jsx("span",{className:hn.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(hn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:p}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(hn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),p&&n.jsx("span",{className:hn.label,children:p}),l&&n.jsx("span",{className:ie(hn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});ze.displayName="Button";function ig({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ig.displayName="XCircleIcon";const u6=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...p},g)=>{const x=n.jsxs(n.Fragment,{children:[i.map((y,w)=>n.jsx(ze,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&n.jsx(ze,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(ig,{size:16}),onClick:s,children:l})]});return n.jsx(hr,{ref:g,tone:d,eyebrow:e,icon:o??n.jsx(Jl,{size:14}),footer:x,...p,children:h})});u6.displayName="UltronRecommendationCard";function nc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nc.displayName="Lock01Icon";const h6=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:p,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},M)=>{const _=n.jsxs(n.Fragment,{children:[p&&n.jsx(ze,{size:"md",variant:"ghost",onClick:p,children:h}),x&&n.jsx(ze,{size:"md",variant:"secondary",onClick:x,children:g}),n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(Rn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(hr,{ref:M,tone:y,eyebrow:o,title:e,icon:i??n.jsx(nc,{size:14}),trailing:n.jsx(Po,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});h6.displayName="UltronApprovalCard";const p6=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},p)=>n.jsx(hr,{ref:p,tone:d,eyebrow:e,icon:o??n.jsx(zi,{size:14}),trailing:n.jsx(Po,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(hh,{state:s,duration:l,children:i.map((g,x)=>n.jsx(Xl,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));p6.displayName="UltronExecutionCard";const f6=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},p)=>n.jsx(hr,{ref:p,tone:l,fill:!0,accent:!1,trailing:n.jsx(Po,{status:s}),footer:d,...h,children:n.jsxs("div",{className:dt.resultHero,children:[n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx($n,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:dt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:dt.resultDetail,children:o})]})]})}));f6.displayName="UltronResultCard";function sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}sg.displayName="ZapIcon";const m6=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:p,tone:g="info",children:x,...y},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(ec,{size:18}),loading:d,onClick:l,children:s}),p&&n.jsx(ze,{size:"md",variant:"ghost",onClick:p,children:h})]});return n.jsx(hr,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(sg,{size:14}),footer:k,...y,children:x})});m6.displayName="UltronWorkflowSaveCard";const lg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};lg.displayName="GitBranch01Icon";function su({label:e,children:o}){return n.jsxs("div",{className:dt.clause,children:[n.jsx("span",{className:dt.clauseLabel,children:e}),n.jsx("span",{className:dt.clauseBody,children:o})]})}const g6=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:p,tone:g="info",...x},y)=>n.jsx(hr,{ref:y,tone:g,eyebrow:o,title:e,icon:i??n.jsx(lg,{size:14}),trailing:h?n.jsx(Po,{status:h}):void 0,footer:p,...x,children:n.jsxs("div",{className:dt.clauses,children:[n.jsx(su,{label:"When",children:s}),n.jsx(su,{label:"If",children:l}),n.jsx(su,{label:"Then",children:d})]})}));g6.displayName="UltronWorkflowPreviewCard";const v6="_root_1nyuz_6",x6="_sm_1nyuz_20",y6="_md_1nyuz_29",w6="_lg_1nyuz_38",b6="_divider_1nyuz_48",k6="_interactive_1nyuz_53",_6="_disabled_1nyuz_60",C6="_destructive_1nyuz_64",j6="_selected_1nyuz_78",S6="_label_1nyuz_87",$6="_description_1nyuz_97",M6="_leadingSlot_1nyuz_101",R6="_trailingSlot_1nyuz_102",N6="_content_1nyuz_115",L6="_taSwitch_1nyuz_167",A6="_taSwitchThumb_1nyuz_188",T6="_taCheckbox_1nyuz_203",E6="_taRadio_1nyuz_226",I6="_taRadioDot_1nyuz_244",P6="_taExpand_1nyuz_252",z6="_taStatus_1nyuz_266",O6="_taStatus_success_1nyuz_273",D6="_taStatus_warning_1nyuz_274",F6="_taStatus_error_1nyuz_275",B6="_taStatus_info_1nyuz_276",$t={root:v6,sm:x6,md:y6,lg:w6,divider:b6,interactive:k6,disabled:_6,destructive:C6,selected:j6,label:S6,description:$6,leadingSlot:M6,trailingSlot:R6,content:N6,taSwitch:L6,taSwitchThumb:A6,taCheckbox:T6,taRadio:E6,taRadioDot:I6,taExpand:P6,taStatus:z6,taStatus_success:O6,taStatus_warning:D6,taStatus_error:F6,taStatus_info:B6},Nn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Nn.displayName="ChevronRightIcon";const fh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fh.displayName="ArrowUpRightIcon";const H6="_root_4qytd_5",W6="_neutral_4qytd_25",U6="_primary_4qytd_30",q6="_success_4qytd_35",V6="_warning_4qytd_40",G6="_error_4qytd_45",Y6="_info_4qytd_50",Df={root:H6,neutral:W6,primary:U6,success:q6,warning:V6,error:G6,info:Y6},Ma=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(Df.root,Df[e],o),...s,children:i}));Ma.displayName="Badge";const K6=({checked:e})=>n.jsx("span",{className:$t.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:$t.taSwitchThumb})}),Q6=({checked:e})=>n.jsx("span",{className:$t.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Z6=({checked:e})=>n.jsx("span",{className:$t.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:$t.taRadioDot})}),X6=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(Ma,{"aria-hidden":"true",children:i}):null},J6=({expanded:e})=>n.jsx("span",{className:$t.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Nn,{size:16,color:"currentColor"})}),eb=({variant:e})=>n.jsx("span",{className:ie($t.taStatus,$t[`taStatus_${e}`]),"aria-hidden":"true"}),tb=new Set(["badge","status"]),Sn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:p,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:M="md",interactive:_,selected:S=!1,destructive:$=!1,disabled:R=!1,className:j,onClick:C,onKeyDown:P,...N},L)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[A,D]=v.useState(h),G=E?d!==void 0?d:A:!1,K=_||!!C||E||l!==void 0&&!tb.has(l),U=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":K?"button":void 0,Y=v.useCallback(de=>{if(!R){if(E){const se=!G;d===void 0&&D(se),p==null||p(se)}C==null||C(de)}},[R,E,G,d,p,C]),J=v.useCallback(de=>{K&&!R&&(de.key==="Enter"||de.key===" ")&&(de.preventDefault(),Y(de)),P==null||P(de)},[K,R,Y,P]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Nn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(fh,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(K6,{checked:G});case"checkbox":return n.jsx(Q6,{checked:G});case"radio":return n.jsx(Z6,{checked:G});case"badge":return n.jsx(X6,{count:g,label:x});case"expand":return n.jsx(J6,{expanded:y});case"status":return n.jsx(eb,{variant:w});default:return null}})();return n.jsxs("div",{ref:L,role:U,tabIndex:K&&!R?0:void 0,"aria-checked":E?G:void 0,"aria-selected":S||void 0,"aria-disabled":R||void 0,"data-selected":S||void 0,"data-disabled":R||void 0,"data-destructive":$||void 0,"data-trailing-action":l??void 0,className:ie($t.root,$t[M],k&&$t.divider,K&&$t.interactive,S&&$t.selected,$&&$t.destructive,R&&$t.disabled,j),onClick:R?void 0:Y,onKeyDown:J,...N,children:[i&&n.jsx("div",{className:$t.leadingSlot,children:i}),n.jsxs("div",{className:$t.content,children:[n.jsx("span",{className:$t.label,children:e}),o&&n.jsx("span",{className:$t.description,children:o})]}),ae&&n.jsx("div",{className:$t.trailingSlot,children:ae})]})});Sn.displayName="ListItem";const nb=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(Sn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(Po,{status:s}),...l}));nb.displayName="UltronActivityStreamItem";const rb="_root_1sz1z_7",ob="_status_1sz1z_50",lu={root:rb,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:ob},mh=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},p)=>{const g=v.useRef(null),[x,y]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const M=k.props;return v.cloneElement(k,{groupDisabled:e||!!M.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=M=>{M.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>y(k),[]),n.jsxs("div",{ref:p,"data-size":o,className:ie(lu.root,lu[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:g,className:lu.status,role:"status","aria-live":"polite",children:x})]})});mh.displayName="ComposerActions";function cu({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const cg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};cg.displayName="SearchSmIcon";const Sl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Sl.displayName="Trash03Icon";const gh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gh.displayName="SunIcon";const dg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dg.displayName="ArrowNarrowRightIcon";function to({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ff({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function ab({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Ol=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ol.displayName="ChevronSelectorVerticalIcon";const No=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};No.displayName="ClipboardCheckIcon";const ug=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};ug.displayName="SettingsGearIcon";const hg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="ChevronLeftIcon";const pg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};pg.displayName="EyeOffIcon";const fg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fg.displayName="StopIcon";const mg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};mg.displayName="RecordingIcon";const gg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gg.displayName="BankIcon";function rc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rc.displayName="ArrowNarrowUpIcon";function vg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}vg.displayName="ArrowNarrowDownIcon";function oc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oc.displayName="Microphone02Icon";const wa=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};wa.displayName="AlertTriangleIcon";const xg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};xg.displayName="BankNote01Icon";const yg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};yg.displayName="CoinsStacked03Icon";function wg({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const vh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vh.displayName="Map01Icon";const xh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};xh.displayName="PackageIcon";const bg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};bg.displayName="ThumbsUpIcon";const kg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};kg.displayName="ThumbsDownIcon";function Mi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Mi.displayName="Building02Icon";function yh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yh.displayName="Building05Icon";function Oi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Oi.displayName="CheckVerified01Icon";function _g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}_g.displayName="Copy01Icon";function Cg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}Cg.displayName="DotsVerticalIcon";function ac({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ac.displayName="Edit02Icon";function jg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jg.displayName="HomeSmileIcon";function wh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}wh.displayName="Link01Icon";function ic({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ic.displayName="LinkExternal01Icon";function bh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bh.displayName="MedicalCrossIcon";function Ri({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ri.displayName="MessageCircle02Icon";function kh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}kh.displayName="MinusIcon";function Sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Sg.displayName="Moon01Icon";function $g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}$g.displayName="Pin01Icon";function Mg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Mg.displayName="ReceiptCheckIcon";function Rg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}Rg.displayName="Settings02Icon";function Ng({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ng.displayName="Speedometer02Icon";function Lg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Lg.displayName="Trash01Icon";function Du({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Du.displayName="UploadCloud01Icon";function ba({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ba.displayName="XCloseIcon";const ib="_base_i93xz_11",sb="_icon_i93xz_45",lb="_sendReady_i93xz_65",cb="_sendStreaming_i93xz_66",db="_sendDisabled_i93xz_67",ub="_sendError_i93xz_68",hb="_attachIdle_i93xz_131",pb="_attachDisabled_i93xz_145",fb="_attachError_i93xz_152",mb="_voiceIdle_i93xz_165",gb="_voiceRecording_i93xz_179",vb="_voiceDisabled_i93xz_189",xb="_iconStack_i93xz_200",yb="_iconLayer_i93xz_209",_t={base:ib,icon:sb,sendReady:lb,sendStreaming:cb,sendDisabled:db,sendError:ub,attachIdle:hb,attachDisabled:pb,attachError:fb,voiceIdle:mb,voiceRecording:gb,voiceDisabled:vb,iconStack:xb,iconLayer:yb},wb={hidden:void 0,ready:_t.sendReady,"disabled-invalid":_t.sendDisabled,streaming:_t.sendStreaming,error:_t.sendError},bb=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Ra=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:p,style:g,...x},y)=>{const w=v.useRef(null),k=v.useRef(null),M=v.useCallback(C=>{k.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]),_=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const C=k.current;C&&(C.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const S=!h&&(e==="ready"||e==="streaming"||e==="error"),$=bb(e,l,d),R=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,j=n.jsx("button",{ref:M,type:"button","data-composer-action":"send","data-state":e,className:ie(_t.base,wb[e],p),style:g,"aria-label":$,disabled:!S,onClick:_,...x,children:n.jsxs("span",{className:_t.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:_t.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(rc,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:_t.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(fg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:_t.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(zi,{size:"100%",strokeWidth:2})})]})});return R?n.jsx(Rr,{content:R,placement:"top",children:j}):j});Ra.displayName="ComposerSendButton";const kb={idle:_t.attachIdle,disabled:_t.attachDisabled,error:_t.attachError},_b=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Ag=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:p,style:g,...x},y)=>{const w=v.useRef(null),k=v.useCallback(()=>{var j;(e==="idle"||e==="error")&&((j=w.current)==null||j.click())},[e]),M=v.useCallback(j=>{const C=j.target.files;C&&C.length>0&&(o==null||o(C)),j.target.value=""},[o]),_=!h&&e!=="disabled",S=_b(e,l,d),$=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,R=n.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:ie(_t.base,kb[e],p),style:g,"aria-label":S,disabled:!_,onClick:k,...x,children:[n.jsx("span",{className:_t.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx($a,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:M,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return $?n.jsx(Rr,{content:$,placement:"top",children:R}):R});Ag.displayName="ComposerAttachment";const Cb={idle:_t.voiceIdle,recording:_t.voiceRecording,disabled:_t.voiceDisabled},jb=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Tg=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...p},g)=>{const x=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),y=!l&&e!=="disabled",w=jb(e,s),k=e==="disabled"?s??"Voice unavailable":null,M=n.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:ie(_t.base,Cb[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...p,children:n.jsxs("span",{className:_t.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:_t.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(oc,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:_t.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(mg,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(Rr,{content:k,placement:"top",children:M}):M});Tg.displayName="ComposerVoiceButton";const Sb=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:p=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(tg,{className:y,style:{flex:"0 0 auto"},children:n.jsx(ng,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:p,radius:g,disabled:d,children:n.jsxs(mh,{size:"md",disabled:d,children:[x,h&&n.jsx(Tg,{state:d?"disabled":"idle"}),n.jsx(Ra,{state:k,onSend:i,onStop:i})]})})})});Sb.displayName="UltronCommandBar";const $b=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(hh,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(Xl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));$b.displayName="UltronThreadTimeline";const Mb="_root_ghwhu_10",Rb="_badge_ghwhu_27",Nb="_badgeIcon_ghwhu_38",Lb="_green_ghwhu_59",Ab="_yellow_ghwhu_60",Tb="_matcha_ghwhu_61",Eb="_purple_ghwhu_62",Ib="_blue_ghwhu_63",Pb="_azure_ghwhu_64",zb="_red_ghwhu_65",Ob="_orange_ghwhu_66",Db="_pink_ghwhu_67",Fb="_slate_ghwhu_68",Bb="_content_ghwhu_73",Hb="_label_ghwhu_83",Wb="_valueRow_ghwhu_97",Ub="_change_ghwhu_106",qb="_value_ghwhu_97",_r={root:Mb,badge:Rb,badgeIcon:Nb,green:Lb,yellow:Ab,matcha:Tb,purple:Eb,blue:Ib,azure:Pb,red:zb,orange:Ob,pink:Db,slate:Fb,content:Bb,label:Hb,valueRow:Wb,change:Ub,value:qb},Vb=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},p)=>n.jsxs("div",{ref:p,className:ie(_r.root,d),...h,children:[n.jsx("div",{className:ie(_r.badge,_r[e]),"aria-hidden":"true",children:n.jsx("span",{className:_r.badgeIcon,children:o})}),n.jsxs("div",{className:_r.content,children:[n.jsx("span",{className:_r.label,children:i}),n.jsxs("div",{className:_r.valueRow,children:[n.jsx("span",{className:_r.value,children:s}),l!=null&&n.jsx("span",{className:_r.change,children:l})]})]})]}));Vb.displayName="DataCard";const Gb="_root_d0j6n_7",Yb="_icon_d0j6n_21",Kb="_text_d0j6n_33",Qb="_positive_d0j6n_41",Zb="_warning_d0j6n_45",Xb="_negative_d0j6n_49",cl={root:Gb,icon:Yb,text:Kb,positive:Qb,warning:Zb,negative:Xb};function Jb(e){return e==="up"?"positive":"negative"}const e8=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Jb(e.trend):e.severity,{severity:p,...g}=d,x=i==="trend"?(({trend:w,severity:k,...M})=>M)(g):g,y=i==="trend"?e.trend==="up"?rc:vg:null;return n.jsxs("span",{ref:o,className:ie(cl.root,cl[h],l),...x,children:[n.jsx("span",{className:cl.text,children:s}),y&&n.jsx("span",{className:cl.icon,"aria-hidden":"true",children:n.jsx(y,{size:14})})]})});e8.displayName="ValueChangeLabel";const t8="_root_1lq10_1",n8="_horizontal_1lq10_9",r8="_vertical_1lq10_15",o8="_solid_1lq10_32",a8="_dashed_1lq10_36",dl={root:t8,horizontal:n8,vertical:r8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:o8,dashed:a8},i8=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(dl.root,dl[`thickness-${e}`],dl[o],dl[i],s),...l}));i8.displayName="Divider";const s8="_overlay_vxgy2_9",l8="_dialogOverlayIn_vxgy2_1",c8="_dialogOverlayOut_vxgy2_1",d8="_dialog_vxgy2_38",u8="_dialogIn_vxgy2_1",h8="_dialogOut_vxgy2_1",p8="_sm_vxgy2_88",f8="_md_vxgy2_89",m8="_lg_vxgy2_90",g8="_header_vxgy2_95",v8="_title_vxgy2_107",x8="_closeBtn_vxgy2_120",y8="_content_vxgy2_152",w8="_footer_vxgy2_163",ao={overlay:s8,dialogOverlayIn:l8,dialogOverlayOut:c8,dialog:d8,dialogIn:u8,dialogOut:h8,sm:p8,md:f8,lg:m8,header:g8,title:v8,closeBtn:x8,content:y8,footer:w8},Eg=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(ao.header,i),...s,children:[n.jsx("span",{className:ao.title,children:o}),e&&n.jsx("button",{type:"button",className:ao.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Pi,{size:16})})]}));Eg.displayName="DialogHeader";const Ig=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(ao.content,o),...i,children:e}));Ig.displayName="DialogContent";const Pg=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(ao.footer,o),...i,children:e}));Pg.displayName="DialogFooter";function zg({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),p=180,[g,x]=v.useState(e);return v.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),p);return()=>clearTimeout(y)},[e]),v.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,o]),v.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),g?Io.createPortal(n.jsx("div",{className:ao.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(ao.dialog,ao[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const b8="_root_1dntq_7",k8="_badge_1dntq_57",_8="_badgeIconSlot_1dntq_74",C8="_content_1dntq_82",j8="_text_1dntq_90",S8="_title_1dntq_99",$8="_description_1dntq_120",M8="_actions_1dntq_131",R8="_dot_1dntq_137",N8="_actionLink_1dntq_144",L8="_primaryAction_1dntq_162",A8="_trailing_1dntq_170",Jt={root:b8,badge:k8,badgeIconSlot:_8,content:C8,text:j8,title:S8,description:$8,actions:M8,dot:R8,actionLink:N8,primaryAction:L8,trailing:A8},T8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),E8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),I8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Bf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),P8={error:T8,warning:I8,success:E8,info:Bf,feature:Bf},Og=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:p,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const M=P8[e],_=i==="lg",S=x?n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:n.jsx(Pi,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Jt.root,y),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Jt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Jt.badgeIconSlot),children:n.jsx(M,{})})}),_?n.jsxs("div",{className:Jt.content,children:[n.jsxs("div",{className:Jt.text,children:[n.jsx("p",{className:Jt.title,children:s}),l&&n.jsx("p",{className:Jt.description,children:l})]}),(d||p)&&n.jsxs("div",{className:Jt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Jt.actionLink,Jt.primaryAction),onClick:h,children:d}),d&&p&&n.jsx("span",{className:Jt.dot,"aria-hidden":"true",children:"·"}),p&&n.jsx("button",{type:"button",className:Jt.actionLink,onClick:g,children:p})]})]}):n.jsx("p",{className:Jt.title,children:s}),_?S:(d||x)&&n.jsxs("div",{className:Jt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Jt.actionLink,Jt.primaryAction),onClick:h,children:d}),S]})]})});Og.displayName="Alert";const z8="_stack_x4xl7_11",O8="_item_x4xl7_28",D8="_itemExiting_x4xl7_33",Fu={stack:z8,item:O8,itemExiting:D8},F8=v.createContext(null);function B8({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:p,duration:g,exiting:x,onRemove:y}){const w=v.useCallback(()=>y(e),[e,y]);return n.jsx("div",{className:ie(Fu.item,x&&Fu.itemExiting),onAnimationEnd:x?w:void 0,children:n.jsx(Og,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:p,onDismiss:w,style:{width:"100%"}})})}function H8({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:Io.createPortal(n.jsx("div",{className:Fu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(B8,{...s,onRemove:i},s.id))}),document.body)}function W8({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(p=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:p.title,description:p.description,status:p.status??"info",variant:p.variant??"stroke",size:p.size??"sm",action:p.action,onAction:p.onAction,duration:p.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(p=>{i(g=>g.map(x=>x.id===p?{...x,exiting:!0}:x))},[]),h=v.useCallback(p=>{i(g=>g.filter(x=>x.id!==p))},[]);return n.jsxs(F8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(H8,{toasts:o,onStartExit:d,onRemove:h})]})}const U8="_root_1s0ek_5",q8="_list_1s0ek_11",V8="_item_1s0ek_23",G8="_separator_1s0ek_31",Y8="_link_1s0ek_47",K8="_current_1s0ek_68",Q8="_iconSlot_1s0ek_76",dr={root:U8,list:q8,item:V8,separator:G8,link:Y8,current:K8,iconSlot:Q8},Z8=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:"/"}),X8=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),J8=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?X8:Z8;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(dr.root,i),...s,children:n.jsx("ol",{className:dr.list,children:e.map((h,p)=>{const g=p===e.length-1,x=!g&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:dr.item,children:[p>0&&n.jsx(d,{}),x?n.jsxs("a",{href:h.href,onClick:h.onClick,className:dr.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(dr.link,g&&dr.current),"aria-current":g?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},p)})})})});J8.displayName="Breadcrumb";const e9="_root_139vz_6",t9="_divider_139vz_14",n9="_item_139vz_19",r9="_label_139vz_25",o9="_description_139vz_26",a9="_chevron_139vz_27",i9="_iconSlot_139vz_28",s9="_hitTarget_139vz_32",l9="_size_sm_139vz_37",c9="_size_md_139vz_43",d9="_size_lg_139vz_49",u9="_header_139vz_59",h9="_headerContent_139vz_59",p9="_checkboxWrap_139vz_60",f9="_labelBlock_139vz_157",m9="_trailingSlot_139vz_60",g9="_body_139vz_199",v9="_bodyInner_139vz_209",x9="_bodyContent_139vz_214",Ft={root:e9,divider:t9,item:n9,label:r9,description:o9,chevron:a9,iconSlot:i9,hitTarget:s9,size_sm:l9,size_md:c9,size_lg:d9,header:u9,headerContent:h9,checkboxWrap:p9,labelBlock:f9,trailingSlot:m9,body:g9,bodyInner:v9,bodyContent:x9},y9="_root_17t97_6",w9="_disabled_17t97_12",b9="_sm_17t97_18",k9="_md_17t97_26",_9="_lg_17t97_34",C9="_controlWrap_17t97_43",j9="_input_17t97_52",S9="_box_17t97_67",$9="_boxChecked_17t97_96",M9="_boxError_17t97_106",R9="_labelWrap_17t97_116",N9="_label_17t97_116",L9="_error_17t97_138",A9="_required_17t97_140",T9="_description_17t97_145",bn={root:y9,disabled:w9,sm:b9,md:k9,lg:_9,controlWrap:C9,input:j9,box:S9,boxChecked:$9,boxError:M9,labelWrap:R9,label:N9,error:L9,required:A9,description:T9},Dg=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:p,description:g,id:x,name:y,value:w,required:k,className:M},_)=>{const S=v.useId(),$=x??S,R=v.useRef(null);v.useEffect(()=>{R.current&&(R.current.indeterminate=i)},[i]);const j=e!==void 0,[C,P]=v.useState(o),N=j?e:C,L=A=>{j||P(A.target.checked),s==null||s(A.target.checked)},E=N||i;return n.jsxs("div",{className:ie(bn.root,bn[h],l&&bn.disabled,d&&bn.error,M),children:[n.jsxs("div",{className:bn.controlWrap,children:[n.jsx("input",{ref:A=>{R.current=A,typeof _=="function"?_(A):_&&(_.current=A)},type:"checkbox",id:$,name:y,value:w,checked:N,disabled:l,required:k,"aria-invalid":d||void 0,onChange:L,className:bn.input}),n.jsx("span",{className:ie(bn.box,E&&bn.boxChecked,d&&bn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):N?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(p||g)&&n.jsxs("div",{className:bn.labelWrap,children:[p&&n.jsxs("label",{htmlFor:$,className:bn.label,children:[p,k&&n.jsx("span",{className:bn.required,"aria-hidden":"true",children:" *"})]}),g&&n.jsx("span",{className:bn.description,children:g})]})]})});Dg.displayName="Checkbox";const Fg=v.createContext(null),Bu=v.createContext(0),Bg=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:p=!1,className:g,children:x,...y},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[M,_]=v.useState(k),S=i!==void 0,$=v.useMemo(()=>S?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:M,[S,i,M]),R=v.useCallback(P=>$.has(P),[$]),j=v.useCallback(P=>{const N=new Set($);e==="single"?N.has(P)?o&&N.delete(P):(N.clear(),N.add(P)):N.has(P)?N.delete(P):N.add(P),S||_(N),l&&l(e==="single"?N.values().next().value??"":Array.from(N))},[$,e,o,S,l]),C=v.useMemo(()=>({type:e,collapsible:o,size:h,disabled:p,isExpanded:R,toggle:j}),[e,o,h,p,R,j]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":p||void 0,"data-size":h,className:ie(Ft.root,d&&Ft.divider,g),...y,children:n.jsx(Fg.Provider,{value:C,children:n.jsx(Bu.Provider,{value:0,children:x})})})});Bg.displayName="Accordion";function ul(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(p=>p.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Hg=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:p=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:M=!1,onExpandedChange:_,disabled:S=!1,size:$,className:R,children:j,...C},P)=>{const N=v.useContext(Fg),L=v.useContext(Bu),E=N!==null,A=$??(N==null?void 0:N.size)??"md",D=S||(N==null?void 0:N.disabled)||!1,[G,K]=v.useState(M);let U;E?U=e!==void 0?N.isExpanded(e):!1:k!==void 0?U=k:U=G;const Y=v.useCallback(()=>{if(D)return;if(E){if(e===void 0)return;const O=N.isExpanded(e);N.toggle(e);const X=N.type==="single"&&!N.collapsible&&O?!0:!O;_==null||_(X);return}const T=!U;k===void 0&&K(T),_==null||_(T)},[D,E,N,e,U,k,_]),J=v.useCallback(T=>w==null?void 0:w(T),[w]),ae=v.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),Y();return}if(E)switch(T.key){case"ArrowDown":T.preventDefault(),ul(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),ul(T.currentTarget,"prev");break;case"Home":T.preventDefault(),ul(T.currentTarget,"first");break;case"End":T.preventDefault(),ul(T.currentTarget,"last");break}},[Y,E]),de=v.useId(),se=`${de}-header`,Q=`${de}-body`,F=A==="sm"?16:A==="md"?18:20,q=l??n.jsxs(n.Fragment,{children:[p&&n.jsx("span",{className:Ft.checkboxWrap,children:n.jsx(Dg,{size:A,checked:g,defaultChecked:x,indeterminate:y,disabled:D,onChange:J})}),s&&n.jsx("span",{className:Ft.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:P,"data-accordion-item":"","data-expanded":U||void 0,"data-disabled":D||void 0,"data-size":A,"data-depth":L,className:ie(Ft.item,Ft[`size_${A}`],R),style:{"--accordion-depth":L},...C,children:[n.jsxs("div",{className:Ft.header,children:[n.jsx("button",{type:"button",id:se,"data-accordion-header-button":"","data-accordion-depth":L,className:Ft.hitTarget,"aria-expanded":U,"aria-controls":Q,"aria-disabled":D||void 0,disabled:D,onClick:Y,onKeyDown:ae}),n.jsxs("div",{className:Ft.headerContent,children:[h==="leading"&&n.jsx("span",{className:Ft.chevron,"aria-hidden":"true",children:n.jsx(Nn,{size:F,color:"currentColor"})}),q,n.jsxs("div",{className:Ft.labelBlock,children:[n.jsx("span",{className:Ft.label,children:o}),i&&n.jsx("span",{className:Ft.description,children:i})]}),d&&n.jsx("div",{className:Ft.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Ft.chevron,"aria-hidden":"true",children:n.jsx(Nn,{size:F,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":se,className:Ft.body,"aria-hidden":!U,children:n.jsx("div",{className:Ft.bodyInner,children:n.jsx("div",{className:Ft.bodyContent,children:n.jsx(Bu.Provider,{value:L+1,children:j})})})})]})});Hg.displayName="AccordionItem";const E9="_root_1vgip_7",I9="_fullWidth_1vgip_12",P9="_panel_1vgip_19",z9="_panelInner_1vgip_73",O9="_item_1vgip_81",D9="_groupHeading_1vgip_87",F9="_groupHeadingSm_1vgip_96",B9="_groupHeadingLabel_1vgip_100",H9="_groupHeadingCollapsible_1vgip_112",W9="_groupChevron_1vgip_125",U9="_groupDivider_1vgip_139",tr={root:E9,fullWidth:I9,panel:P9,panelInner:z9,item:O9,groupHeading:D9,groupHeadingSm:F9,groupHeadingLabel:B9,groupHeadingCollapsible:H9,groupChevron:W9,groupDivider:U9};function q9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(tr.groupHeading,o==="sm"&&tr.groupHeadingSm,e.collapsible&&tr.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:tr.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:tr.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Nn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,p)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(Sn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:tr.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const _h=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:p,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},M)=>{const[_,S]=v.useState(h),$=v.useRef(null),R=d!==void 0?d:_,j=v.useCallback(P=>{$.current=P,M&&(typeof M=="function"?M(P):M.current=P)},[M]),C=v.useCallback(P=>{d===void 0&&S(P),p==null||p(P)},[d,p]);return v.useEffect(()=>{if(!R)return;const P=N=>{var L;(L=$.current)!=null&&L.contains(N.target)||C(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[R,C]),v.useEffect(()=>{if(!R)return;const P=N=>{N.key==="Escape"&&C(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[R,C]),n.jsxs("div",{ref:j,className:ie(tr.root,y&&tr.fullWidth,w),...k,children:[n.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":R,tabIndex:g?-1:0,onClick:g?void 0:()=>C(!R),onKeyDown:g?void 0:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),C(!R))},children:e}),n.jsx("div",{className:tr.panel,"data-open":R||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:tr.panelInner,children:o.map((P,N)=>n.jsxs("div",{children:[N>0&&n.jsx("div",{className:tr.groupDivider,"aria-hidden":"true"}),n.jsx(q9,{group:P,size:i,closeOnSelect:x,onClose:()=>C(!1)})]},P.id))})})]})});_h.displayName="DropdownMenu";const V9="_hiddenInput_8457s_8",G9="_area_8457s_19",Y9="_uploadIcon_8457s_53",K9="_textBlock_8457s_59",Q9="_title_8457s_67",Z9="_description_8457s_76",X9="_fileRow_8457s_88",J9="_fileIcon_8457s_96",e7="_fileName_8457s_101",t7="_successIcon_8457s_115",n7="_removeBtn_8457s_121",r7="_progressWrap_8457s_145",o7="_progressBar_8457s_153",a7="_progressFill_8457s_161",i7="_progressLabel_8457s_168",s7="_errorRow_8457s_178",l7="_errorIcon_8457s_186",c7="_errorText_8457s_192",d7="_areaMulti_8457s_206",u7="_multiDropZone_8457s_214",h7="_fileList_8457s_244",p7="_fileListItem_8457s_254",f7="_inline_8457s_267",m7="_inlineIcon_8457s_309",g7="_inlineText_8457s_330",v7="_inlineProgress_8457s_353",x7="_inlineProgressFill_8457s_363",y7="_footerSlot_8457s_429",Ge={hiddenInput:V9,area:G9,uploadIcon:Y9,textBlock:K9,title:Q9,description:Z9,fileRow:X9,fileIcon:J9,fileName:e7,successIcon:t7,removeBtn:n7,progressWrap:r7,progressBar:o7,progressFill:a7,progressLabel:i7,errorRow:s7,errorIcon:l7,errorText:c7,areaMulti:d7,multiDropZone:u7,fileList:h7,fileListItem:p7,inline:f7,inlineIcon:m7,inlineText:g7,inlineProgress:v7,inlineProgressFill:x7,footerSlot:y7};function du(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Wg=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:p="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:M,fieldVariant:_="outlined",browseButtonVariant:S="tertiary",footerSlot:$,disabled:R=!1,className:j,...C},P)=>{const N=v.useRef(null),[L,E]=v.useState(!1),A=!R&&(o||i==="empty"),D=v.useCallback(()=>{var Q;!R&&(o||i==="empty")&&((Q=N.current)==null||Q.click())},[R,o,i]),G=v.useCallback(Q=>{var F;if(o){const q=Q.target.files?Array.from(Q.target.files):[];q.length&&(w==null||w(q))}else{const q=(F=Q.target.files)==null?void 0:F[0];q&&(y==null||y(q))}Q.target.value=""},[o,y,w]),K=v.useCallback(Q=>{Q.preventDefault(),A&&E(!0)},[A]),U=v.useCallback(()=>E(!1),[]),Y=v.useCallback(Q=>{var F;if(Q.preventDefault(),E(!1),!!A)if(o){const q=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];q.length&&(w==null||w(q))}else{const q=(F=Q.dataTransfer.files)==null?void 0:F[0];q&&(y==null||y(q))}},[A,o,y,w]),J=n.jsx("input",{ref:N,type:"file",className:Ge.hiddenInput,accept:x,multiple:o,disabled:R,"aria-hidden":"true",tabIndex:-1,onChange:G}),ae=l?n.jsxs("div",{className:Ge.fileRow,children:[n.jsx("span",{className:`${Ge.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(oo,{size:16})}),n.jsx("span",{className:Ge.fileName,children:l.name}),n.jsx(Fn,{size:"sm",variant:"subtle",children:du(l)}),i==="complete"&&n.jsx("span",{className:`${Ge.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx($n,{size:16})}),n.jsx("button",{type:"button",className:Ge.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:P,className:ie(Ge.areaMulti,j),"data-drag-over":L||void 0,"data-disabled":R||void 0,onDragOver:K,onDragLeave:U,onDrop:Y,...C,children:[J,n.jsxs("div",{className:Ge.multiDropZone,children:[n.jsx("span",{className:`${Ge.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(cu,{size:24})}),n.jsxs("div",{className:Ge.textBlock,children:[n.jsx("p",{className:Ge.title,children:p}),n.jsx("p",{className:Ge.description,children:g})]}),n.jsx(ze,{variant:S,size:"sm",onClick:D,disabled:R,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:Ge.fileList,"aria-label":"Selected files",children:Q.map((F,q)=>n.jsxs("li",{className:Ge.fileListItem,children:[n.jsx("span",{className:`${Ge.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(oo,{size:16})}),n.jsx("span",{className:Ge.fileName,children:F.name}),n.jsx(Fn,{size:"sm",variant:"subtle",children:du(F)}),n.jsx("button",{type:"button",className:Ge.removeBtn,onClick:()=>M==null?void 0:M(q),"aria-label":`Remove ${F.name}`,disabled:R,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})})]},`${F.name}-${q}`))})]})}return n.jsxs("div",{ref:P,className:ie(Ge.area,j),"data-state":i,"data-drag-over":L||void 0,"data-disabled":R||void 0,onDragOver:K,onDragLeave:U,onDrop:Y,...C,children:[J,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Ge.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(cu,{size:24})}),n.jsxs("div",{className:Ge.textBlock,children:[n.jsx("p",{className:Ge.title,children:p}),n.jsx("p",{className:Ge.description,children:g})]}),n.jsx(ze,{variant:S,size:"sm",onClick:D,disabled:R,children:"Browse File"}),$&&n.jsx("div",{className:Ge.footerSlot,children:$})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Ge.progressWrap,children:[n.jsx("div",{className:Ge.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ge.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Ge.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Ge.errorRow,children:[n.jsx("span",{className:`${Ge.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:20})}),n.jsx("p",{className:Ge.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(ze,{variant:"tertiary",size:"sm",onClick:D,disabled:R,children:"Try Again"})]})]})}const de={empty:n.jsx(cu,{size:16}),uploading:n.jsx(oo,{size:16}),complete:n.jsx($n,{size:16}),error:n.jsx(ya,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:P,className:ie(Ge.inline,j),"data-state":i,"data-field-variant":_,"data-disabled":R||void 0,...C,children:[J,n.jsx("span",{className:`${Ge.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:de}),n.jsxs("span",{className:Ge.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&p,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),se&&n.jsx(Fn,{size:"sm",variant:"subtle",children:du(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Ge.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Sl,{size:14})})}),i==="empty"&&n.jsx(ze,{variant:S,size:"xs",onClick:D,disabled:R,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Ge.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ge.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Wg.displayName="FileUploader";const w7="_wrapper_127v8_8",b7="_labelRow_127v8_16",k7="_label_127v8_16",_7="_required_127v8_28",C7="_labelIcon_127v8_36",j7="_sm_127v8_46",S7="_md_127v8_47",$7="_lg_127v8_48",M7="_shell_127v8_44",R7="_outlined_127v8_75",N7="_underlined_127v8_102",L7="_float_127v8_147",A7="_leadingSlot_127v8_181",T7="_trailingSlot_127v8_193",E7="_trailingActionWrap_127v8_206",I7="_trailingActionBtn_127v8_213",P7="_successTrailingSlot_127v8_234",z7="_errorTrailingSlot_127v8_239",O7="_control_127v8_251",D7="_selectValue_127v8_297",F7="_selectPlaceholder_127v8_303",B7="_selectChevron_127v8_307",H7="_selectChevronOpen_127v8_312",W7="_textareaShell_127v8_315",U7="_textareaControl_127v8_334",q7="_footer_127v8_351",V7="_footerRow_127v8_363",G7="_footerError_127v8_364",Y7="_footerSuccess_127v8_365",K7="_footerIcon_127v8_368",Q7="_wrapperHorizontal_127v8_378",Z7="_horizontalLabelCol_127v8_384",X7="_horizontalLabelHint_127v8_393",J7="_horizontalControlCol_127v8_402",ek="_msContainer_127v8_416",tk="_msShell_127v8_425",nk="_msOpen_127v8_440",rk="_msDisabled_127v8_447",ok="_msBody_127v8_450",ak="_msPlaceholder_127v8_459",ik="_msChevron_127v8_469",sk="_msChevronOpen_127v8_480",lk="_msPanel_127v8_483",Ee={wrapper:w7,labelRow:b7,label:k7,required:_7,labelIcon:C7,sm:j7,md:S7,lg:$7,shell:M7,outlined:R7,underlined:N7,float:L7,leadingSlot:A7,trailingSlot:T7,trailingActionWrap:E7,trailingActionBtn:I7,successTrailingSlot:P7,errorTrailingSlot:z7,control:O7,selectValue:D7,selectPlaceholder:F7,selectChevron:B7,selectChevronOpen:H7,textareaShell:W7,textareaControl:U7,footer:q7,footerRow:V7,footerError:G7,footerSuccess:Y7,footerIcon:K7,wrapperHorizontal:Q7,horizontalLabelCol:Z7,horizontalLabelHint:X7,horizontalControlCol:J7,msContainer:ek,msShell:tk,msOpen:nk,msDisabled:rk,msBody:ok,msPlaceholder:ak,msChevron:ik,msChevronOpen:sk,msPanel:lk};function Na({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:p,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,M=l?"error":d?"success":"hint",_=k?n.jsxs("p",{className:ie(Ee.footer,M==="error"&&Ee.footerError,M==="success"&&Ee.footerSuccess),role:M==="error"?"alert":void 0,"aria-live":M==="error"?"assertive":void 0,children:[M==="hint"&&n.jsx("span",{className:`${Ee.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:12})}),k]}):null,S=e!=null?n.jsxs("div",{className:Ee.labelRow,children:[n.jsx("label",{className:Ee.label,htmlFor:p,children:e}),h&&n.jsx("span",{className:Ee.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Ee.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const $={width:typeof x=="number"?`${x}px`:x};return n.jsxs("div",{className:ie(Ee.wrapper,Ee.wrapperHorizontal,y),children:[(S||i)&&n.jsxs("div",{className:Ee.horizontalLabelCol,style:$,children:[S,i&&n.jsx("p",{className:Ee.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Ee.horizontalControlCol,children:[w,_]})]})}return n.jsxs("div",{className:ie(Ee.wrapper,y),children:[S,w,_]})}function Di({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:p,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const M=o==="sm"?14:o==="lg"?18:16,_=s&&!i&&!p&&!g?n.jsx($n,{size:M}):null,S=i&&!p&&!g?n.jsx(ya,{size:M}):null,$=!!h,R=!!(p||g||_||S);return n.jsxs("div",{className:ie(Ee.shell,Ee[e],Ee[o],x&&Ee.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":$||void 0,"data-has-trailing":R||void 0,children:[h&&n.jsx("span",{className:ie(Ee.leadingSlot,"alloy-icon-slot"),children:h}),k,g?n.jsx("span",{className:Ee.trailingActionWrap,children:g}):p||_||S?n.jsx("span",{className:ie(Ee.trailingSlot,"alloy-icon-slot",_&&Ee.successTrailingSlot,S&&Ee.errorTrailingSlot),children:p??_??S}):null]})}const Ch=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:M,id:_,disabled:S,readOnly:$,className:R,...j},C)=>{const P=v.useId(),N=_??P;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:N,layout:w,labelWidth:k,labelDescription:M,className:R,children:n.jsx(Di,{variant:h,size:p,error:!!s,success:!!l,disabled:S,readOnly:$,leadingIcon:x,trailingIcon:y,children:n.jsx("input",{ref:C,id:N,type:g,disabled:S,readOnly:$,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${N}-footer`:void 0,className:ie(Ee.control),...j})})})});Ch.displayName="TextField";const ck=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:M,disabled:_,readOnly:S,className:$,...R},j)=>{const C=v.useId(),P=M??C;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:P,layout:y,labelWidth:w,labelDescription:k,className:$,children:n.jsx(Di,{variant:h,size:p,error:!!s,success:!!l,disabled:_,readOnly:S,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:n.jsx("textarea",{ref:j,id:P,disabled:_,readOnly:S,"aria-invalid":s?!0:void 0,className:ie(Ee.control,Ee.textareaControl),...R})})})});ck.displayName="TextArea";const dk={sm:"sm",md:"md",lg:"lg"},Ug=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:M,defaultValue:_="",onChange:S,placeholder:$="Select an option…",disabled:R,readOnly:j,id:C,className:P},N)=>{var F;const L=v.useId(),E=C??L,A=M!==void 0,[D,G]=v.useState(_),K=A?M:D,U=v.useCallback(q=>{A||G(q),S==null||S(q)},[A,S]),[Y,J]=v.useState(!1),ae=(F=k.find(q=>q.value===K))==null?void 0:F.label,de=p==="sm"?14:p==="lg"?18:16,se=dk[p],Q=n.jsx(Di,{variant:h,size:p,error:!!s,success:!!l,disabled:R,readOnly:j,focused:Y,leadingIcon:g,trailingIcon:n.jsx("span",{className:ie(Ee.selectChevron,Y&&Ee.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Mn,{size:de})}),children:n.jsx("span",{className:ie(Ee.control,Ee.selectValue,!ae&&Ee.selectPlaceholder),children:ae??$})});return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:E,layout:x,labelWidth:y,labelDescription:w,className:P,children:n.jsx(_h,{ref:N,id:E,fullWidth:!0,trigger:Q,groups:[{id:"options",options:k.map(q=>({id:q.value,label:q.label,disabled:q.disabled,selected:q.value===K,onClick:()=>U(q.value)}))}],size:se,width:"100%",placement:"bottom-start",open:Y,onOpenChange:J,disabled:R||j})})});Ug.displayName="SelectField";const uk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:M,readOnly:_,className:S,...$},R)=>{const j=v.useId(),C=k??j,[P,N]=v.useState(!1),L=p==="sm"?14:p==="lg"?18:16;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:C,layout:x,labelWidth:y,labelDescription:w,className:S,children:n.jsx(Di,{variant:h,size:p,error:!!s,success:!!l,disabled:M,readOnly:_,leadingIcon:g,trailingAction:n.jsx("button",{type:"button",className:`${Ee.trailingActionBtn} alloy-icon-slot`,onClick:()=>N(E=>!E),tabIndex:M?-1:0,"aria-label":P?"Hide password":"Show password","aria-pressed":P,children:P?n.jsx(pg,{size:L}):n.jsx(ph,{size:L})}),children:n.jsx("input",{ref:R,id:C,type:P?"text":"password",disabled:M,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Ee.control),...$})})})});uk.displayName="PasswordField";const qg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:M,value:_,defaultValue:S,disabled:$,readOnly:R,className:j,...C},P)=>{const N=v.useId(),L=M??N,E=p==="sm"?14:p==="lg"?18:16,A=_!==void 0?String(_).length>0:void 0,D=v.useCallback(G=>{x==null||x(G)},[x]);return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:y,labelWidth:w,labelDescription:k,className:j,children:n.jsx(Di,{variant:h,size:p,error:!!s,success:!!l,disabled:$,readOnly:R,leadingIcon:n.jsx(cg,{size:E}),trailingAction:A?n.jsx("button",{type:"button",className:`${Ee.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:$?-1:0,"aria-label":"Clear search",children:n.jsx(Pi,{size:E})}):void 0,children:n.jsx("input",{ref:P,id:L,type:"search",value:_,defaultValue:S,disabled:$,readOnly:R,"aria-invalid":s?!0:void 0,onChange:D,className:ie(Ee.control),...C})})})});qg.displayName="SearchField";const Vg=v.forwardRef((e,o)=>n.jsx(Ch,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));Vg.displayName="EmailField";const Gg=v.forwardRef((e,o)=>n.jsx(Ch,{ref:o,type:"number",inputMode:"numeric",...e}));Gg.displayName="NumberField";const hk={sm:"sm",md:"sm",lg:"md"},pk={sm:"sm",md:"md",lg:"lg"},fk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:M=[],onChange:_,placeholder:S="Select options…",disabled:$,readOnly:R,id:j,className:C},P)=>{const N=v.useId(),L=j??N,E=`${L}-list`,A=v.useRef(null),D=k!==void 0,[G,K]=v.useState(M),U=D?k:G,Y=v.useCallback(O=>{D||K(O),_==null||_(O)},[D,_]),[J,ae]=v.useState(!1);v.useEffect(()=>{if(!J)return;const O=W=>{A.current&&!A.current.contains(W.target)&&ae(!1)},X=W=>{W.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",X),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",X)}},[J]);const de=O=>{if($||R)return;const X=U.includes(O)?U.filter(W=>W!==O):[...U,O];Y(X)},se=O=>{$||R||((O.key==="Enter"||O.key===" ")&&(O.preventDefault(),ae(X=>!X)),O.key==="Backspace"&&U.length>0&&!J&&Y(U.slice(0,-1)))},Q=p==="sm"?14:p==="lg"?18:16,F=hk[p],q=pk[p],T=Object.fromEntries(w.map(O=>[O.value,O.label]));return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:g,labelWidth:x,labelDescription:y,className:C,children:n.jsxs("div",{ref:A,className:Ee.msContainer,children:[n.jsxs("div",{ref:P,id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":J,"aria-controls":E,"aria-disabled":$||void 0,tabIndex:$?-1:0,className:ie(Ee.msShell,Ee[h],Ee[p],J&&Ee.msOpen,$&&Ee.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":$||void 0,onClick:()=>{!$&&!R&&ae(O=>!O)},onKeyDown:se,children:[n.jsx("div",{className:Ee.msBody,children:U.length===0?n.jsx("span",{className:Ee.msPlaceholder,children:S}):U.map(O=>n.jsx(Fn,{size:F,variant:"subtle",dismissible:!$&&!R,onDismiss:()=>Y(U.filter(X=>X!==O)),children:T[O]??O},O))}),n.jsx("span",{className:ie(Ee.msChevron,"alloy-icon-slot",J&&Ee.msChevronOpen),children:n.jsx(Mn,{size:Q})})]}),J&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ee.msPanel,children:w.map(O=>{const X=U.includes(O.value);return n.jsx(Sn,{label:O.label,size:q,trailingAction:"checkbox",checked:X,disabled:O.disabled,role:"option","aria-selected":X,onMouseDown:W=>{W.preventDefault()},onCheckedChange:()=>{O.disabled||de(O.value)}},O.value)})})]})})});fk.displayName="MultiSelectField";const mk="_root_1249j_6",gk="_pageControls_1249j_14",vk="_pageBtn_1249j_21",xk="_ellipsis_1249j_36",yk="_rowsGroup_1249j_51",wk="_rowsSelect_1249j_58",bk="_countText_1249j_64",kk="_groupLabel_1249j_74",_k="_goToGroup_1249j_84",Ck="_goToInput_1249j_91",Xn={root:mk,pageControls:gk,pageBtn:vk,ellipsis:xk,rowsGroup:yk,rowsSelect:wk,countText:bk,groupLabel:kk,goToGroup:_k,goToInput:Ck};function jk(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Sk=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:p=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...M},_)=>{const[S,$]=v.useState(""),R=y,j=y,C=y==="sm"?14:16,P=jk(e,o,x),N=v.useCallback(A=>{const D=Math.min(Math.max(1,A),o);D!==e&&i(D)},[e,o,i]),L=v.useCallback(A=>{if(A.key==="Enter"){const D=parseInt(S,10);isNaN(D)||N(D),$("")}},[S,N]),E=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return n.jsxs("nav",{ref:_,"aria-label":"Pagination",className:ie(Xn.root,k),"data-size":y,...M,children:[s&&n.jsxs("div",{className:Xn.rowsGroup,children:[n.jsx("span",{className:Xn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Xn.rowsSelect,children:n.jsx(Ug,{size:j,value:l,disabled:w,"aria-label":"Rows per page",onChange:A=>h==null?void 0:h(Number(A.target.value)),children:d.map(A=>n.jsx("option",{value:A,children:A},A))})})]}),E&&n.jsx("span",{className:Xn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Xn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(ze,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>N(e-1),children:n.jsx(hg,{size:C})}),P.map((A,D)=>A==="ellipsis"?n.jsx("span",{className:Xn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${D}`):n.jsx(ze,{variant:A===e?"secondary":"ghost",size:R,"aria-label":`Page ${A}`,"aria-current":A===e?"page":void 0,disabled:w,onClick:()=>N(A),className:Xn.pageBtn,children:A},A)),n.jsx(ze,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>N(e+1),children:n.jsx(Nn,{size:C})})]}),p&&n.jsxs("div",{className:Xn.goToGroup,children:[n.jsx("span",{className:Xn.groupLabel,children:"Go to"}),n.jsx("div",{className:Xn.goToInput,children:n.jsx(Gg,{size:j,value:S,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:A=>$(A.target.value),onKeyDown:L})})]})]})});Sk.displayName="Pagination";const $k="_root_1vx33_6",Mk="_fullWidth_1vx33_18",Rk="_item_1vx33_23",Nk="_indicator_1vx33_28",Lk="_sm_1vx33_46",Ak="_md_1vx33_54",Tk="_lg_1vx33_62",Ek="_itemSelected_1vx33_109",Ik="_itemIcon_1vx33_115",Pk="_itemLabel_1vx33_127",no={root:$k,fullWidth:Mk,item:Rk,indicator:Nk,sm:Lk,md:Ak,lg:Tk,itemSelected:Ek,itemIcon:Ik,itemLabel:Pk},Yg=v.createContext(null);function zk(e){const o=v.useContext(Yg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Kg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},p)=>{const{value:g,onChange:x,disabled:y,name:w}=zk("SegmentedControl.Item"),k=g===e,M=y||!!l;return n.jsxs("button",{ref:p,type:"button",role:"radio","aria-checked":k,name:w,disabled:M,className:ie(no.item,k&&no.itemSelected,i),onClick:_=>{M||x(e),d==null||d(_)},...h,children:[o&&n.jsx("span",{className:ie(no.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:no.itemLabel,children:s})]})});Kg.displayName="SegmentedControl.Item";const Qg=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:p,...g},x)=>{const[y,w]=v.useState(o),k=e!==void 0,M=k?e:y,_=v.useId(),S=v.useRef(null);v.useLayoutEffect(()=>{const R=S.current;if(!R)return;const j=R.querySelector('[aria-checked="true"]');j&&(R.style.setProperty("--sc-indicator-x",`${j.offsetLeft}px`),R.style.setProperty("--sc-indicator-w",`${j.offsetWidth}px`))},[M,s]);const $=R=>{k||w(R),i==null||i(R)};return n.jsx(Yg.Provider,{value:{value:M,onChange:$,disabled:l,name:_},children:n.jsxs("div",{ref:R=>{S.current=R,typeof x=="function"?x(R):x&&(x.current=R)},role:"radiogroup",className:ie(no.root,no[s],d&&no.fullWidth,h),...g,children:[n.jsx("span",{className:no.indicator,"aria-hidden":"true"}),p]})})});Qg.displayName="SegmentedControl";Object.assign(Qg,{Item:Kg});const Ok="_root_fkv0x_6",Dk="_sm_fkv0x_26",Fk="_md_fkv0x_33",Bk="_lg_fkv0x_40",Hk="_dot_fkv0x_49",Wk="_success_fkv0x_58",Uk="_warning_fkv0x_65",qk="_error_fkv0x_72",Vk="_info_fkv0x_79",Gk="_neutral_fkv0x_86",Yk="_pending_fkv0x_93",hl={root:Ok,sm:Dk,md:Fk,lg:Bk,dot:Hk,success:Wk,warning:Uk,error:qk,info:Vk,neutral:Gk,pending:Yk},Ni=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(hl.root,hl[o],hl[e],s),...d,children:[i&&n.jsx("span",{className:hl.dot,"aria-hidden":"true"}),l]}));Ni.displayName="StatusTag";const Kk="_root_1m8t5_6",Qk="_underline_1m8t5_15",Zk="_background_1m8t5_21",Xk="_underlineIndicator_1m8t5_26",Jk="_md_1m8t5_43",e_="_lg_1m8t5_44",t_="_tab_1m8t5_42",n_="_tabSelected_1m8t5_77",r_="_tabIcon_1m8t5_99",o_="_tabLabel_1m8t5_111",a_="_tabBadge_1m8t5_116",i_="_tabLabelEditable_1m8t5_123",s_="_tabLabelInput_1m8t5_128",l_="_addTab_1m8t5_147",c_="_addTabIcon_1m8t5_160",pn={root:Kk,underline:Qk,background:Zk,underlineIndicator:Xk,md:Jk,lg:e_,tab:t_,tabSelected:n_,tabIcon:r_,tabLabel:o_,tabBadge:a_,tabLabelEditable:i_,tabLabelInput:s_,addTab:l_,addTabIcon:c_},Zg=v.createContext(null);function Xg(e){const o=v.useContext(Zg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const Jg=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:p,className:g,children:x,...y},w)=>{const{value:k,onChange:M,disabled:_,name:S}=Xg("Tabs.Tab"),$=k===e,R=_||!!s,j=typeof x=="string"?x:"",[C,P]=v.useState(d&&l),[N,L]=v.useState(j),E=v.useRef(null);v.useEffect(()=>{if(C){const U=E.current;U&&(U.focus(),U.select())}},[C]),v.useEffect(()=>{d&&l&&!C&&(L(typeof x=="string"?x:""),P(!0))},[d,l]);const A=()=>{const U=N.trim();U&&U!==j&&(h==null||h(U)),P(!1)},D=()=>{L(j),P(!1)},G=U=>{!l||R||(U.stopPropagation(),L(j),P(!0))},K=U=>{U.key==="Enter"?(U.preventDefault(),A()):U.key==="Escape"&&(U.preventDefault(),D())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":$,name:S,disabled:R,className:ie(pn.tab,$&&pn.tabSelected,g),onClick:U=>{C||(R||M(e),p==null||p(U))},...y,children:[o&&n.jsx("span",{className:ie(pn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),C?n.jsx("input",{ref:E,type:"text",value:N,onChange:U=>L(U.target.value),onKeyDown:K,onBlur:A,onClick:U=>U.stopPropagation(),className:pn.tabLabelInput,"aria-label":"Tab name",size:Math.max(N.length,1)}):x!==void 0&&n.jsx("span",{className:ie(pn.tabLabel,l&&pn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!C&&n.jsx("span",{className:pn.tabBadge,children:i})]})});Jg.displayName="Tabs.Tab";const d_=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e2=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Xg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(pn.tab,pn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(pn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(d_,{})})})});e2.displayName="Tabs.AddTab";const t2=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:p,...g},x)=>{const[y,w]=v.useState(s),k=i!==void 0,M=k?i:y,_=v.useId(),S=v.useRef(null);v.useLayoutEffect(()=>{const R=S.current;if(!R||e!=="underline")return;const j=R.querySelector('[aria-selected="true"]');j&&(R.style.setProperty("--tab-indicator-x",`${j.offsetLeft}px`),R.style.setProperty("--tab-indicator-w",`${j.offsetWidth}px`))},[M,e]);const $=R=>{k||w(R),l==null||l(R)};return n.jsx(Zg.Provider,{value:{value:M,onChange:$,disabled:d,variant:e,size:o,name:_},children:n.jsxs("div",{ref:R=>{S.current=R,typeof x=="function"?x(R):x&&(x.current=R)},role:"tablist",className:ie(pn.root,pn[e],pn[o],h),...g,children:[e==="underline"&&n.jsx("span",{className:pn.underlineIndicator,"aria-hidden":"true"}),p]})})});t2.displayName="Tabs";Object.assign(t2,{Tab:Jg,AddTab:e2});const u_="_selectedBorder_1ypeg_7",h_="_selectedFill_1ypeg_12",Hf={selectedBorder:u_,selectedFill:h_},p_=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},p)=>{const g=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?Hf.selectedFill:Hf.selectedBorder:void 0;return n.jsx(ze,{ref:p,variant:o,"aria-pressed":e,className:ie(x,d),onClick:g,...h})});p_.displayName="ToggleButton";const f_="_root_mcb75_6",m_="_disabled_mcb75_13",g_="_sm_mcb75_20",v_="_md_mcb75_31",x_="_lg_mcb75_42",y_="_track_mcb75_54",w_="_trackChecked_mcb75_90",b_="_thumb_mcb75_100",k_="_labelWrap_mcb75_117",__="_label_mcb75_117",C_="_description_mcb75_139",Cr={root:f_,disabled:m_,sm:g_,md:v_,lg:x_,track:y_,trackChecked:w_,thumb:b_,labelWrap:k_,label:__,description:C_},j_=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:p,name:g,value:x,className:y},w)=>{const k=v.useId(),M=p??k,_=`${M}-label`,S=e!==void 0,[$,R]=v.useState(o),j=S?e:$,C=()=>{if(s)return;const N=!j;S||R(N),i==null||i(N)},P=N=>{(N.key===" "||N.key==="Enter")&&(N.preventDefault(),C())};return n.jsxs("div",{className:ie(Cr.root,Cr[l],s&&Cr.disabled,y),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:M,"aria-checked":j,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:ie(Cr.track,j&&Cr.trackChecked),"data-checked":j||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:P,children:n.jsx("span",{className:Cr.thumb})}),(d||h)&&n.jsxs("div",{className:Cr.labelWrap,children:[d&&n.jsx("label",{id:_,htmlFor:M,className:Cr.label,children:d}),h&&n.jsx("span",{className:Cr.description,children:h})]})]})});j_.displayName="Switch";const S_="_root_104n4_5",$_="_disabled_104n4_11",M_="_sm_104n4_17",R_="_md_104n4_25",N_="_lg_104n4_33",L_="_controlWrap_104n4_41",A_="_input_104n4_50",T_="_ring_104n4_65",E_="_ringChecked_104n4_90",I_="_ringError_104n4_94",P_="_dot_104n4_104",z_="_labelWrap_104n4_112",O_="_label_104n4_112",D_="_error_104n4_130",F_="_required_104n4_132",B_="_description_104n4_137",dn={root:S_,disabled:$_,sm:M_,md:R_,lg:N_,controlWrap:L_,input:A_,ring:T_,ringChecked:E_,ringError:I_,dot:P_,labelWrap:z_,label:O_,error:D_,required:F_,description:B_},H_=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:p,id:g,name:x,required:y,className:w},k)=>{const M=v.useId(),_=g??M;return n.jsxs("div",{className:ie(dn.root,dn[d],s&&dn.disabled,l&&dn.error,w),children:[n.jsxs("div",{className:dn.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:_,name:x,value:e,checked:o,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:dn.input}),n.jsx("span",{className:ie(dn.ring,o&&dn.ringChecked,l&&dn.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:dn.dot})})]}),(h||p)&&n.jsxs("div",{className:dn.labelWrap,children:[h&&n.jsxs("label",{htmlFor:_,className:dn.label,children:[h,y&&n.jsx("span",{className:dn.required,"aria-hidden":"true",children:" *"})]}),p&&n.jsx("span",{className:dn.description,children:p})]})]})});H_.displayName="Radio";const W_="_table_1ad04_8",U_="_sm_1ad04_16",q_="_row_1ad04_30",V_="_head_1ad04_47",G_="_headLabel_1ad04_82",Y_="_sortBtn_1ad04_96",K_="_sortIcon_1ad04_119",Q_="_cell_1ad04_142",Z_="_cellText_1ad04_175",X_="_cellStack_1ad04_203",J_="_cellStackPrimary_1ad04_210",eC="_cellStackSecondary_1ad04_221",tC="_cellActions_1ad04_233",nC="_cellControl_1ad04_240",rC="_addCell_1ad04_251",oC="_addRowCell_1ad04_264",aC="_addRowLabel_1ad04_276",Bt={table:W_,sm:U_,row:q_,head:V_,headLabel:G_,sortBtn:Y_,sortIcon:K_,cell:Q_,cellText:Z_,cellStack:X_,cellStackPrimary:J_,cellStackSecondary:eC,cellActions:tC,cellControl:nC,addCell:rC,addRowCell:oC,addRowLabel:aC},n2=v.createContext({addColumn:!1,addRow:!1}),r2=()=>v.useContext(n2),iC=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:p,...g},x)=>{const y=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(n2.Provider,{value:y,children:n.jsx("table",{ref:x,className:ie(Bt.table,e==="sm"&&Bt.sm,h),"data-interaction":o,...g,children:p})})});iC.displayName="Table";const o2=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...p},g)=>{const x=o!==void 0;return n.jsx("th",{ref:g,className:ie(Bt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":x?"none":void 0,...p,children:x?n.jsxs("button",{type:"button",className:Bt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Bt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Mn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Bt.headLabel,children:h})})});o2.displayName="TableHead";const sC=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=r2(),d=s?v.Children.map(e,(h,p)=>{if(!v.isValidElement(h)||p!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,n.jsx(o2,{hoverable:!0,onClick:l,className:Bt.addCell,"aria-label":"Add column",children:n.jsx($a,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});sC.displayName="TableHeader";const a2=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Bt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));a2.displayName="TableRow";const Hu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},p)=>n.jsx("td",{ref:p,className:ie(Bt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Hu.displayName="TableCell";const lC=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=r2(),h=s?v.Children.map(e,p=>{if(!v.isValidElement(p))return p;const g=v.Children.toArray(p.props.children);return v.cloneElement(p,{},[...g,n.jsx(Hu,{"aria-hidden":"true",className:Bt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(a2,{hoverable:!1,children:n.jsx(Hu,{colSpan:999,onClick:d,className:Bt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Bt.addRowLabel,children:[n.jsx($a,{size:14,strokeWidth:2}),"Add row"]})})})]})});lC.displayName="TableBody";const cC=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(Bt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));cC.displayName="CellText";const dC=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Bt.cellStack,i),...s,children:[n.jsx("span",{className:Bt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Bt.cellStackSecondary,children:o})]}));dC.displayName="CellStack";const uC=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Fn,{ref:i,size:e,...o}));uC.displayName="CellTag";const hC=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Ni,{ref:i,size:e,...o}));hC.displayName="CellStatusTag";const pC=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Bt.cellActions,e),...i,children:o}));pC.displayName="CellActions";const fC=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Bt.cellControl,e),...i,children:o}));fC.displayName="CellControl";const mC="_root_1afcs_8",gC="_secondary_1afcs_23",vC="_header_1afcs_28",xC="_headerText_1afcs_36",yC="_title_1afcs_43",wC="_subtitle_1afcs_52",bC="_action_1afcs_61",kC="_hero_1afcs_66",_C="_heroValue_1afcs_74",CC="_heroCaption_1afcs_83",jC="_heroChange_1afcs_89",SC="_body_1afcs_95",$C="_legend_1afcs_103",kn={root:mC,secondary:gC,header:vC,headerText:xC,title:yC,subtitle:wC,action:bC,hero:kC,heroValue:_C,heroCaption:CC,heroChange:jC,body:SC,legend:$C},MC=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:p,children:g,className:x,...y},w)=>n.jsxs("div",{ref:w,className:ie(kn.root,p&&kn.secondary,x),...y,children:[n.jsxs("div",{className:kn.header,children:[n.jsxs("div",{className:kn.headerText,children:[n.jsx("h3",{className:kn.title,children:e}),o&&n.jsx("p",{className:kn.subtitle,children:o})]}),i&&n.jsx("div",{className:kn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:kn.hero,children:[s!==void 0&&n.jsx("span",{className:kn.heroValue,children:s}),l&&n.jsx("span",{className:kn.heroChange,children:l}),d&&n.jsx("span",{className:kn.heroCaption,children:d})]}),n.jsx("div",{className:kn.body,children:g}),h&&n.jsx("div",{className:kn.legend,children:h})]}));MC.displayName="ChartCard";const RC="_root_je8nq_7",NC="_item_je8nq_17",LC="_swatch_je8nq_23",AC="_label_je8nq_29",TC="_bookend_je8nq_33",la={root:RC,item:NC,swatch:LC,label:AC,bookend:TC},i2=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},p)=>n.jsxs("div",{ref:p,className:ie(la.root,d),...h,children:[o&&n.jsx("span",{className:la.bookend,children:o}),e.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return n.jsxs("span",{className:la.item,children:[n.jsx("span",{className:la.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&n.jsx("span",{className:la.label,children:g.label})]},x)}),i&&n.jsx("span",{className:la.bookend,children:i})]}));i2.displayName="ChartLegend";const EC="_root_igkx4_5",IC="_svgWrap_igkx4_13",PC="_svg_igkx4_13",zC="_gridLine_igkx4_23",OC="_axisLabel_igkx4_28",DC="_legendWrap_igkx4_43",FC="_legendItem_igkx4_51",BC="_legendDot_igkx4_57",HC="_legendLabel_igkx4_64",WC="_tooltip_igkx4_71",UC="_tooltipLabel_igkx4_85",qC="_tooltipRow_igkx4_95",VC="_tooltipDot_igkx4_101",GC="_tooltipSeries_igkx4_108",YC="_tooltipValue_igkx4_115",Ue={root:EC,svgWrap:IC,svg:PC,gridLine:zC,axisLabel:OC,legendWrap:DC,legendItem:FC,legendDot:BC,legendLabel:HC,tooltip:WC,tooltipLabel:UC,tooltipRow:qC,tooltipDot:VC,tooltipSeries:GC,tooltipValue:YC},KC=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function uu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function ca(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const QC=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:p=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:M,className:_,...S},$)=>{var B,z,oe,fe;const R=g&&g.length>0?g:KC,j=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,P]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),N=v.useRef(null),[L,E]=v.useState(540);v.useEffect(()=>{const ce=N.current;if(!ce)return;const ve=new ResizeObserver(we=>{var De;const Le=(De=we[0])==null?void 0:De.contentRect.width;Le>0&&E(Math.floor(Le))});ve.observe(ce);const be=Math.floor(ce.getBoundingClientRect().width);return be>0&&E(be),()=>ve.disconnect()},[]);const A=44,D=0,G=20,K=20,U=L,Y=s,J=U-A-D,ae=Y-G-K,de=5,se=e.map((ce,ve)=>ce.color??R[ve%R.length]);let Q=0;i==="stacked"?o.forEach((ce,ve)=>{const be=e.reduce((we,Le)=>we+(Le.data[ve]??0),0);be>Q&&(Q=be)}):i==="horizontal"?Q=Math.max(...((B=e[0])==null?void 0:B.data)??[0]):e.forEach(ce=>ce.data.forEach(ve=>{ve>Q&&(Q=ve)}));const F=uu(Q),q=Array.from({length:de+1},(ce,ve)=>F*(ve/de)).reverse(),T=ce=>K+ae-ce/F*ae,O=J/o.length,X=3,W=i==="grouped"?Math.max(4,(O-X*(e.length+1))/e.length):O,ee=()=>P(ce=>({...ce,visible:!1})),le=v.useCallback(ce=>{const ve=ce.currentTarget.getBoundingClientRect(),be=ce.clientX-ve.left,we=Math.floor((be-A)/O);if(we<0||we>=o.length){ee();return}const Le=e.map((De,He)=>({color:se[He],series:De.label,value:De.data[we]??0}));P({visible:!0,x:ce.clientX+12,y:ce.clientY-8,label:o[we],items:Le})},[e,o,O,se,A]);if(i==="gradient"){const ce=((z=e[0])==null?void 0:z.data)??[],ve=((oe=e[0])==null?void 0:oe.label)??"",be=44,we=0,Le=20,De=20,He=Math.max(U-be-we,1),We=Y-Le-De,Ae=Math.max(0,...ce),Fe=Ae>0?uu(Ae):10,Ke=5,wt=Array.from({length:Ke+1},(Ce,Xe)=>Fe*Xe/Ke),Ie=Ce=>Le+We-Ce/Fe*We,st=He/Math.max(1,ce.length),Qe=Ce=>be+st*Ce,Tt=Ce=>be+st*(Ce+1),lt=Ce=>be+st*(Ce+.5),xe=ce.length===0?"":ce.map((Ce,Xe)=>{const gt=Ie(Ce);return`M ${Qe(Xe)} ${gt} L ${Tt(Xe)} ${gt}`}).join(" "),Ze=[];ce.forEach((Ce,Xe)=>{if(Ce<=0)return;const gt=Ie(Ce);Ze.push({x:Qe(Xe),y:gt,width:Math.max(Tt(Xe)-Qe(Xe),0),height:Le+We-gt})});const Ct=Math.max(1,Math.ceil(45/st)),bt=o.length-1,or=w??(Ce=>`${ca(Ce)}${h}`);return n.jsxs("div",{ref:$,className:ie(Ue.root,_),...S,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsxs("svg",{width:U,height:Y,viewBox:`0 0 ${U} ${Y}`,className:Ue.svg,onMouseLeave:ee,onMouseMove:Ce=>{const Xe=Ce.currentTarget.getBoundingClientRect(),gt=Ce.clientX-Xe.left,jt=Math.floor((gt-be)/st);if(jt<0||jt>=ce.length){ee();return}P({visible:!0,x:Ce.clientX+12,y:Ce.clientY-8,label:o[jt]??"",items:[{color:y,series:ve,value:ce[jt]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${j}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x}),n.jsx("stop",{offset:"100%",stopColor:y})]}),n.jsxs("linearGradient",{id:`${j}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),wt.map((Ce,Xe)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:U-we,y1:Ie(Ce),y2:Ie(Ce),className:Ue.gridLine}),n.jsxs("text",{x:0,y:Ie(Ce)-6,className:Ue.axisLabel,textAnchor:"start",children:[ca(Ce),h]})]},`t-${Xe}`)),Ze.map((Ce,Xe)=>n.jsx("rect",{x:Ce.x,y:Ce.y,width:Ce.width,height:Ce.height,fill:`url(#${j}-fill)`},`b-${Xe}`)),xe&&n.jsx("path",{d:xe,fill:"none",stroke:`url(#${j}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var mn;const Ce=(mn=N.current)==null?void 0:mn.getBoundingClientRect();if(!Ce)return null;const Xe=C.x-12-Ce.left,gt=Math.floor((Xe-be)/st);if(gt<0||gt>=ce.length)return null;const jt=ce[gt]??0;return jt<=0?null:n.jsx("circle",{cx:lt(gt),cy:Ie(jt),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ce,Xe)=>{const gt=Xe===0,jt=Xe===bt;if(!(gt||jt)&&Xe%Ct!==0)return null;const Ln=gt?be:jt?U-we:lt(Xe),co=gt?"start":jt?"end":"middle";return n.jsx("text",{x:Ln,y:Y-De+18,className:Ue.axisLabel,textAnchor:co,children:Ce},`xl-${Xe}`)})]})}),C.visible&&C.items.length>0&&n.jsxs("div",{className:Ue.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:C.label}),C.items.map(Ce=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Ce.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Ce.series}),n.jsx("span",{className:Ue.tooltipValue,children:or(Ce.value)})]},Ce.series))]})]})}if(i==="horizontal"){const ce=((fe=e[0])==null?void 0:fe.data)??[],ve=uu(Math.max(...ce,1)),be=28,we=10,Le=120,He=U-Le-44,We=o.length*(be+we)+we;return n.jsxs("div",{ref:$,className:ie(Ue.root,_),...S,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsx("svg",{width:U,height:We,viewBox:`0 0 ${U} ${We}`,className:Ue.svg,onMouseLeave:ee,onMouseMove:Ae=>{var Ie;const Fe=Ae.currentTarget.getBoundingClientRect(),Ke=Ae.clientY-Fe.top,wt=Math.floor(Ke/(be+we));if(wt<0||wt>=o.length){ee();return}P({visible:!0,x:Ae.clientX+12,y:Ae.clientY-8,label:o[wt],items:[{color:se[0],series:((Ie=e[0])==null?void 0:Ie.label)??"",value:ce[wt]??0}]})},children:o.map((Ae,Fe)=>{const Ke=we+Fe*(be+we),wt=ce[Fe]??0,Ie=wt/ve*He;return n.jsxs("g",{children:[n.jsx("text",{x:Le-8,y:Ke+be/2+4,className:Ue.axisLabel,textAnchor:"end",children:Ae}),n.jsx("rect",{x:Le,y:Ke,width:Ie,height:be,rx:p,fill:se[0]}),n.jsxs("text",{x:Le+Ie+6,y:Ke+be/2+4,className:Ue.axisLabel,textAnchor:"start",children:[ca(wt),h]})]},Fe)})})}),C.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:C.label}),C.items.map(Ae=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Ae.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Ae.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ca(Ae.value),h]})]},Ae.series))]})]})}return n.jsxs("div",{ref:$,className:ie(Ue.root,_),...S,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsxs("svg",{width:U,height:Y,viewBox:`0 0 ${U} ${Y}`,className:Ue.svg,onMouseMove:le,onMouseLeave:ee,children:[n.jsx("defs",{children:se.flatMap((ce,ve)=>[n.jsxs("linearGradient",{id:`${j}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`soft-${ve}`),n.jsxs("linearGradient",{id:`${j}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`strong-${ve}`)])}),q.map(ce=>{const ve=T(ce);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ve,x2:U-D,y2:ve,className:Ue.gridLine}),n.jsxs("text",{x:0,y:ve-6,className:Ue.axisLabel,textAnchor:"start",children:[ca(ce),h]})]},ce)}),o.map((ce,ve)=>{const be=A+ve*O;if(i==="stacked"){let De=0;const He=e.map((Ie,st)=>{const Qe=Ie.data[ve]??0,Tt=Qe/F*ae,lt=T(De+Qe);return De+=Qe,{si:st,value:Qe,barH:Tt,y:lt}}),We=be+(O-W)/2,Ae=He.filter(Ie=>Ie.value>0),Fe=Ae.length>0?Ae[0].si:-1,Ke=Ae.length>0?Ae[Ae.length-1]:null,wt=M??(Ke?se[Ke.si]:"transparent");return n.jsxs("g",{children:[He.map(({si:Ie,value:st,barH:Qe,y:Tt})=>{if(st<=0)return null;if(k==="mono-scale"){const lt=Ie===Fe;return n.jsx("rect",{x:We,y:Tt,width:W,height:Qe,fill:lt?`url(#${j}-fill-strong-${Ie})`:se[Ie]},`fill-${Ie}`)}return n.jsx("rect",{x:We,y:Tt,width:W,height:Qe,fill:`url(#${j}-fill-${Ie})`},`fill-${Ie}`)}),k==="mono-scale"?Ke&&n.jsx("line",{x1:We,x2:We+W,y1:Ke.y,y2:Ke.y,stroke:wt,strokeWidth:2,strokeLinecap:"butt"}):He.map(({si:Ie,value:st,y:Qe})=>st>0?n.jsx("line",{x1:We,x2:We+W,y1:Qe,y2:Qe,stroke:se[Ie],strokeWidth:2,strokeLinecap:"butt"},`cap-${Ie}`):null)]},ve)}const we=e.length*W+(e.length-1)*X,Le=be+(O-we)/2;return n.jsx("g",{children:e.map((De,He)=>{const We=De.data[ve]??0;if(We<=0)return null;const Ae=We/F*ae,Fe=Le+He*(W+X),Ke=T(We);return n.jsxs("g",{children:[n.jsx("rect",{x:Fe,y:Ke,width:W,height:Ae,fill:`url(#${j}-fill-${He})`}),n.jsx("line",{x1:Fe,x2:Fe+W,y1:Ke,y2:Ke,stroke:se[He],strokeWidth:2,strokeLinecap:"butt"})]},He)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/O)),be=o.length-1;return o.map((we,Le)=>{const De=Le===0,He=Le===be;if(!(De||He)&&Le%ve!==0)return null;const Ae=De?A:He?U-D:A+O*(Le+.5),Fe=De?"start":He?"end":"middle";return n.jsx("text",{x:Ae,y:Y-G+18,className:Ue.axisLabel,textAnchor:Fe,children:we},`xl-${Le}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Ue.legendWrap,children:e.map((ce,ve)=>n.jsxs("div",{className:Ue.legendItem,children:[n.jsx("span",{className:Ue.legendDot,style:{background:se[ve]}}),n.jsx("span",{className:Ue.legendLabel,children:ce.label})]},ce.label))}),C.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:C.label}),C.items.map(ce=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:ce.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:ce.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ca(ce.value),h]})]},ce.series))]})]})});QC.displayName="BarChart";const ZC="_root_1crij_5",XC="_svgWrap_1crij_13",JC="_svg_1crij_13",ej="_gridLine_1crij_23",tj="_axisLabelY_1crij_35 _axisLabel_1crij_28",nj="_axisLabelX_1crij_39 _axisLabel_1crij_28",rj="_legendWrap_1crij_51",oj="_tooltip_1crij_76",aj="_tooltipLabel_1crij_95",ij="_tooltipRow_1crij_105",sj="_tooltipDot_1crij_111",lj="_tooltipSeries_1crij_118",cj="_tooltipValue_1crij_125",_n={root:ZC,svgWrap:XC,svg:JC,gridLine:ej,axisLabelY:tj,axisLabelX:nj,legendWrap:rj,tooltip:oj,tooltipLabel:aj,tooltipRow:ij,tooltipDot:sj,tooltipSeries:lj,tooltipValue:cj};function dj(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Wf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function uj(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,p]=e[s+1],g=(h-l)*o;i+=` C ${l+g} ${d}, ${h-g} ${p}, ${h} ${p}`}return i}const hj=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:p="",yTickCount:g=5,className:x,...y},w)=>{const[k,M]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,S=v.useRef(null),[$,R]=v.useState(540);v.useEffect(()=>{const F=S.current;if(!F)return;const q=new ResizeObserver(O=>{var W;const X=(W=O[0])==null?void 0:W.contentRect.width;X>0&&R(Math.floor(X))});q.observe(F);const T=Math.floor(F.getBoundingClientRect().width);return T>0&&R(T),()=>q.disconnect()},[]);const j=44,C=20,P=20,N=$,L=i,E=N-j,A=L-C-P,D=`url(#${_}-stroke)`,G=F=>F.color??D,K=e.flatMap(F=>F.data),U=dj(Math.max(...K,1)),Y=Array.from({length:g+1},(F,q)=>U*(q/g)).reverse(),J=F=>P+A-F/U*A,ae=F=>o.length>1?j+F/(o.length-1)*E:j+E/2,de=F=>F.map((q,T)=>[ae(T),J(q)]),se=()=>M(F=>({...F,visible:!1})),Q=v.useCallback(F=>{const q=F.currentTarget.getBoundingClientRect(),O=F.clientX-q.left-j,X=E/Math.max(o.length-1,1),W=Math.round(O/X),ee=Math.max(0,Math.min(W,o.length-1)),le=e.map(B=>({color:B.color??h,series:B.label,value:B.data[ee]??0}));M({visible:!0,index:ee,x:F.clientX+12,y:F.clientY-8,label:o[ee],items:le})},[e,o,h,E,j]);return n.jsxs("div",{ref:w,className:ie(_n.root,x),...y,children:[n.jsx("div",{ref:S,className:_n.svgWrap,children:n.jsxs("svg",{width:N,height:L,viewBox:`0 0 ${N} ${L}`,className:_n.svg,onMouseMove:Q,onMouseLeave:se,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${_}-clip`,children:n.jsx("rect",{x:j,y:P,width:E,height:A,rx:6,ry:6})})]}),Y.map(F=>{const q=J(F);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:q,x2:N,y2:q,className:_n.gridLine}),n.jsxs("text",{x:0,y:q-6,className:_n.axisLabelY,textAnchor:"start",children:[Wf(F),p]})]},F)}),n.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((F,q)=>{const T=de(F.data),O=uj(T);return n.jsx("path",{d:O,fill:"none",stroke:G(F),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},q)})}),(()=>{const F=k.index>=0?k.index:0,q=ae(F),T=k.visible&&k.index>=0,O="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${q}px)`,transition:O},children:[n.jsx("line",{x1:0,x2:0,y1:P,y2:P+A,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((X,W)=>{const ee=X.data[F]??0,le=J(ee),B=X.color??h;return n.jsx("g",{style:{transform:`translateY(${le}px)`,transition:O},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:B,filter:`url(#${_}-pin-shadow)`})},W)})]})})})(),(()=>{const q=o.length>1?E/(o.length-1):E,T=Math.max(1,Math.ceil(45/Math.max(q,1))),O=o.length-1;return o.map((X,W)=>{const ee=W===0,le=W===O;if(!(ee||le)&&W%T!==0)return null;const z=ee?j:le?N:ae(W),oe=ee?"start":le?"end":"middle";return n.jsx("text",{x:z,y:L-C+14,className:_n.axisLabelX,textAnchor:oe,children:X},X)})})()]})}),l&&e.length>0&&n.jsx("div",{className:_n.legendWrap,children:n.jsx(i2,{variant:"line",items:e.map(F=>({color:F.color??h,label:F.label}))})}),k.visible&&n.jsxs("div",{className:_n.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:_n.tooltipLabel,children:k.label}),k.items.map(F=>n.jsxs("div",{className:_n.tooltipRow,children:[n.jsx("span",{className:_n.tooltipDot,style:{background:F.color}}),n.jsx("span",{className:_n.tooltipSeries,children:F.series}),n.jsxs("span",{className:_n.tooltipValue,children:[Wf(F.value),p]})]},F.series))]})]})});hj.displayName="LineChart";const pj="_root_3tq2n_5",fj="_chartWrap_3tq2n_14",mj="_svg_3tq2n_18",gj="_centerText_3tq2n_23",vj="_statLegend_3tq2n_31",xj="_statItem_3tq2n_37",yj="_statBar_3tq2n_44",wj="_statText_3tq2n_50",bj="_statValue_3tq2n_56",kj="_statLabel_3tq2n_65",_j="_listLegend_3tq2n_72",Cj="_legendItem_3tq2n_79",jj="_legendDot_3tq2n_85",Sj="_legendLabel_3tq2n_92",$j="_legendValue_3tq2n_99",Mj="_tooltip_3tq2n_107",Rj="_tooltipLabel_3tq2n_118",Nj="_tooltipValue_3tq2n_124",Ot={root:pj,chartWrap:fj,svg:mj,centerText:gj,statLegend:vj,statItem:xj,statBar:yj,statText:wj,statValue:bj,statLabel:kj,listLegend:_j,legendItem:Cj,legendDot:jj,legendLabel:Sj,legendValue:$j,tooltip:Mj,tooltipLabel:Rj,tooltipValue:Nj},Uf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Lj=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((N,L)=>N.color??Uf[L%Uf.length]),M=e.reduce((N,L)=>N+L.value,0),_=i/2,S=i/2,$=i*.15,R=(i-$)/2-2,j=2*Math.PI*R;let C=-j/4;const P=e.map((N,L)=>{const A=(M>0?N.value/M:0)*j,D=`${A} ${j-A}`,G=-C;return C+=A,{dashArray:D,dashOffset:G,color:k[L],...N}});return n.jsxs("div",{ref:x,className:ie(Ot.root,p),...g,children:[n.jsx("div",{className:Ot.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Ot.svg,children:[n.jsx("circle",{cx:_,cy:S,r:R,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:$}),P.map((N,L)=>n.jsx("circle",{cx:_,cy:S,r:R,fill:"none",stroke:N.color,strokeWidth:$,strokeDasharray:N.dashArray,strokeDashoffset:N.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const A=M>0?Math.round(N.value/M*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:N.label,value:`${A}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},L)),h&&o>0&&n.jsx("text",{x:_,y:S+6,textAnchor:"middle",className:Ot.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Ot.statLegend,children:e.map((N,L)=>{const E=M>0?Math.round(N.value/M*100):0;return n.jsxs("div",{className:Ot.statItem,children:[n.jsx("span",{className:Ot.statBar,style:{background:k[L]}}),n.jsxs("div",{className:Ot.statText,children:[n.jsxs("span",{className:Ot.statValue,children:[E,d]}),n.jsx("span",{className:Ot.statLabel,children:N.label})]})]},N.label)})}),s&&l==="list"&&n.jsx("div",{className:Ot.listLegend,children:e.map((N,L)=>{const E=M>0?Math.round(N.value/M*100):0;return n.jsxs("div",{className:Ot.legendItem,children:[n.jsx("span",{className:Ot.legendDot,style:{background:k[L]}}),n.jsx("span",{className:Ot.legendLabel,children:N.label}),n.jsxs("span",{className:Ot.legendValue,children:[E,d]})]},N.label)})}),y.visible&&n.jsxs("div",{className:Ot.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("div",{className:Ot.tooltipLabel,children:y.label}),n.jsx("div",{className:Ot.tooltipValue,children:y.value})]})]})});Lj.displayName="DonutChart";const Aj="_root_bqpf6_5",Tj="_svgWrap_bqpf6_10",Ej="_svg_bqpf6_10",Ij="_axisLabel_bqpf6_19",Pj="_tooltip_bqpf6_25",da={root:Aj,svgWrap:Tj,svg:Ej,axisLabel:Ij,tooltip:Pj};function zj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Oj=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=zj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[M,_]=v.useState(540);v.useEffect(()=>{const L=k.current;if(!L)return;const E=new ResizeObserver(D=>{var K;const G=(K=D[0])==null?void 0:K.contentRect.width;G>0&&_(Math.floor(G))});E.observe(L);const A=Math.floor(L.getBoundingClientRect().width);return A>0&&_(A),()=>E.disconnect()},[]);const S=32,$=16,R=M,j=R-S-d,C=Math.max(4,(j-(i.length-1)*d)/i.length),P=o.length*($+d)+d+24,N=new Map;return e.forEach(L=>N.set(`${L.row}__${L.col}`,L)),n.jsxs("div",{ref:x,className:ie(da.root,p),...g,children:[n.jsx("div",{ref:k,className:da.svgWrap,children:n.jsxs("svg",{width:R,height:P,viewBox:`0 0 ${R} ${P}`,className:da.svg,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:[i.map((L,E)=>{const A=S+d+E*(C+d)+C/2;return n.jsx("text",{x:A,y:12,className:da.axisLabel,textAnchor:"middle",children:L},L)}),o.map((L,E)=>{const A=24+E*($+d);return n.jsxs("g",{children:[n.jsx("text",{x:S-4,y:A+$/2+4,className:da.axisLabel,textAnchor:"end",children:L}),i.map((D,G)=>{const K=N.get(`${L}__${D}`),U=(K==null?void 0:K.value)??0,Y=s(U),J=S+d+G*(C+d);return n.jsx("rect",{x:J,y:A,width:C,height:$,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const de=(K==null?void 0:K.label)??`${L} / ${D}: ${Math.round(U*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:de})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},D)})]},L)})]})}),y.visible&&n.jsx("div",{className:da.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});Oj.displayName="HeatMap";const Dj="_root_18572_6",Fj="_gridWrap_18572_14",Bj="_grid_18572_14",Hj="_cell_18572_27",Wj="_legend_18572_33",Uj="_legendSquare_18572_43",qj="_tooltip_18572_49",Jr={root:Dj,gridWrap:Fj,grid:Bj,cell:Hj,legend:Wj,legendSquare:Uj,tooltip:qj},Vj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Gj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Yj=v.forwardRef(({days:e,levelColors:o=Vj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:p,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[M,_]=v.useState({visible:!1,x:0,y:0,content:""}),S=p??Math.max(1,...e.map(C=>C.count)),$=[];for(let C=0;C<e.length;C+=7)$.push(e.slice(C,C+7));const R=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${$.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},j=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Jr.root,y),...w,children:[n.jsx("div",{className:Jr.gridWrap,children:n.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${S} on the busiest day`,className:Jr.grid,style:R,onMouseLeave:()=>_(C=>({...C,visible:!1})),children:$.map((C,P)=>Array.from({length:7},(N,L)=>{const E=C[L];if(!E)return n.jsx("span",{className:Jr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${P}-${L}`);const A=Gj(E.count,S),D=g?g(E,A):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Jr.cell,style:{width:j,height:i,borderRadius:l,background:o[A]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:D}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${P}-${L}`)}))})}),h&&n.jsxs("div",{className:Jr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>n.jsx("span",{className:Jr.legendSquare,style:{background:o[C],borderRadius:l}},C)),n.jsx("span",{children:"More"})]}),M.visible&&n.jsx("div",{className:Jr.tooltip,style:{left:M.x,top:M.y},children:M.content})]})});Yj.displayName="ActivityHeatMap";const Kj="_root_14edh_5",Qj="_track_14edh_17",Zj="_segment_14edh_28",Xj="_legend_14edh_49",Jj="_legendRow_14edh_58",eS="_legendDot_14edh_68",tS="_legendLabel_14edh_74",nS="_legendValue_14edh_78",rS="_tooltip_14edh_84",oS="_tooltipLabel_14edh_100",aS="_tooltipValueRow_14edh_105",iS="_tooltipDot_14edh_114",On={root:Kj,track:Qj,segment:Zj,legend:Xj,legendRow:Jj,legendDot:eS,legendLabel:tS,legendValue:nS,tooltip:rS,tooltipLabel:oS,tooltipValueRow:aS,tooltipDot:iS},sS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],ua={r:140,g:79,b:226},hu={r:68,g:108,b:255};function qf(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(ua.r+(hu.r-ua.r)*o),s=Math.round(ua.g+(hu.g-ua.g)*o),l=Math.round(ua.b+(hu.b-ua.b)*o);return`rgb(${i}, ${s}, ${l})`}const lS=v.forwardRef(({segments:e,colors:o=sS,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce(($,R)=>$+Math.max(0,R.value),0);let M=0;const _=e.map(($,R)=>{const j=Math.max(0,$.value),C=k>0?j/k*100:0,P=k>0?M/k*100:0;M+=j;const N=k>0?M/k*100:0,L=$.color??o[R%o.length],E=d?!0:$.emphasized??R===0;return{...$,pct:C,startPct:P,endPct:N,color:L,emphasized:E}}),S=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:x,className:ie(On.root,p),...g,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map($=>`${$.label} ${$.value}`).join(", ")}`,className:On.track,style:S,onMouseLeave:()=>w($=>({...$,visible:!1})),children:_.map($=>{const R=i?`linear-gradient(to right, ${qf($.startPct)}, ${qf($.endPct)})`:$.color;return n.jsx("span",{className:On.segment,"data-emphasized":$.emphasized||void 0,"data-ai":i||void 0,style:{width:`${$.pct}%`,background:R,"--ratio-hover-bg":$.color},onMouseMove:j=>w({visible:!0,x:j.clientX,y:j.clientY,label:$.label,value:$.value,color:$.color})},$.label)})}),l&&n.jsx("ul",{className:On.legend,children:_.map($=>n.jsxs("li",{className:On.legendRow,children:[n.jsx("span",{className:On.legendDot,style:{background:$.color}}),n.jsx("span",{className:On.legendLabel,children:$.label}),n.jsx("span",{className:On.legendValue,children:$.value.toLocaleString("en-US")})]},$.label))}),y.visible&&n.jsxs("div",{className:On.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("span",{className:On.tooltipLabel,children:y.label}),n.jsxs("span",{className:On.tooltipValueRow,children:[n.jsx("span",{className:On.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});lS.displayName="RatioBar";const cS="_track_1wmly_6",dS="_fill_1wmly_12",Vf={track:cS,fill:dS},uS=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:p=12,ariaLabel:g,className:x,style:y,...w},k)=>{const M=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${M}px
    )`,S=Math.max(0,Math.min(o,e)),$=o>0?S/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round($)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":S,className:ie(Vf.track,x),style:{height:p,background:`${_}, ${s}`,...y},...w,children:n.jsx("div",{className:Vf.fill,style:{width:`${$}%`,background:`${_}, ${i}`}})})});uS.displayName="StripedBar";const hS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],pS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Gf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}Gf(hS),Gf(pS);var pt="-ms-",Si="-moz-",nt="-webkit-",s2="comm",sc="rule",jh="decl",fS="@import",mS="@namespace",l2="@keyframes",gS="@layer",c2=Math.abs,Sh=String.fromCharCode,Wu=Object.assign;function vS(e,o){return Lt(e,0)^45?(((o<<2^Lt(e,0))<<2^Lt(e,1))<<2^Lt(e,2))<<2^Lt(e,3):0}function d2(e){return e.trim()}function Sr(e,o){return(e=o.exec(e))?e[0]:e}function Be(e,o,i){return e.replace(o,i)}function $l(e,o,i){return e.indexOf(o,i)}function Lt(e,o){return e.charCodeAt(o)|0}function To(e,o,i){return e.slice(o,i)}function Jn(e){return e.length}function u2(e){return e.length}function ki(e,o){return o.push(e),e}function xS(e,o){return e.map(o).join("")}function Yf(e,o){return e.filter(function(i){return!Sr(i,o)})}var lc=1,ka=1,h2=0,Bn=0,Mt=0,La="";function cc(e,o,i,s,l,d,h,p){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:lc,column:ka,length:h,return:"",siblings:p}}function eo(e,o){return Wu(cc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function ha(e){for(;e.root;)e=eo(e.root,{children:[e]});ki(e,e.siblings)}function yS(){return Mt}function wS(){return Mt=Bn>0?Lt(La,--Bn):0,ka--,Mt===10&&(ka=1,lc--),Mt}function nr(){return Mt=Bn<h2?Lt(La,Bn++):0,ka++,Mt===10&&(ka=1,lc++),Mt}function ro(){return Lt(La,Bn)}function Ml(){return Bn}function dc(e,o){return To(La,e,o)}function Li(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bS(e){return lc=ka=1,h2=Jn(La=e),Bn=0,[]}function kS(e){return La="",e}function pu(e){return d2(dc(Bn-1,Uu(e===91?e+2:e===40?e+1:e)))}function _S(e){for(;(Mt=ro())&&Mt<33;)nr();return Li(e)>2||Li(Mt)>3?"":" "}function CS(e,o){for(;--o&&nr()&&!(Mt<48||Mt>102||Mt>57&&Mt<65||Mt>70&&Mt<97););return dc(e,Ml()+(o<6&&ro()==32&&nr()==32))}function Uu(e){for(;nr();)switch(Mt){case e:return Bn;case 34:case 39:e!==34&&e!==39&&Uu(Mt);break;case 40:e===41&&Uu(e);break;case 92:nr();break}return Bn}function jS(e,o){for(;nr()&&e+Mt!==57;)if(e+Mt===84&&ro()===47)break;return"/*"+dc(o,Bn-1)+"*"+Sh(e===47?e:nr())}function SS(e){for(;!Li(ro());)nr();return dc(e,Bn)}function $S(e){return kS(Rl("",null,null,null,[""],e=bS(e),0,[0],e))}function Rl(e,o,i,s,l,d,h,p,g){for(var x=0,y=0,w=h,k=0,M=0,_=0,S=1,$=1,R=1,j=0,C="",P=l,N=d,L=s,E=C;$;)switch(_=j,j=nr()){case 40:if(_!=108&&Lt(E,w-1)==58){$l(E+=Be(pu(j),"&","&\f"),"&\f",c2(x?p[x-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:E+=pu(j);break;case 9:case 10:case 13:case 32:E+=_S(_);break;case 92:E+=CS(Ml()-1,7);continue;case 47:switch(ro()){case 42:case 47:ki(MS(jS(nr(),Ml()),o,i,g),g),(Li(_||1)==5||Li(ro()||1)==5)&&Jn(E)&&To(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*S:p[x++]=Jn(E)*R;case 125*S:case 59:case 0:switch(j){case 0:case 125:$=0;case 59+y:R==-1&&(E=Be(E,/\f/g,"")),M>0&&(Jn(E)-w||S===0&&_===47)&&ki(M>32?Qf(E+";",s,i,w-1,g):Qf(Be(E," ","")+";",s,i,w-2,g),g);break;case 59:E+=";";default:if(ki(L=Kf(E,o,i,x,y,l,p,C,P=[],N=[],w,d),d),j===123)if(y===0)Rl(E,o,L,L,P,d,w,p,N);else{switch(k){case 99:if(Lt(E,3)===110)break;case 108:if(Lt(E,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Rl(e,L,L,s&&ki(Kf(e,L,L,0,0,l,p,C,l,P=[],w,N),N),l,N,w,p,s?P:N):Rl(E,L,L,L,[""],N,0,p,N)}}x=y=M=0,S=R=1,C=E="",w=h;break;case 58:w=1+Jn(E),M=_;default:if(S<1){if(j==123)--S;else if(j==125&&S++==0&&wS()==125)continue}switch(E+=Sh(j),j*S){case 38:R=y>0?1:(E+="\f",-1);break;case 44:p[x++]=(Jn(E)-1)*R,R=1;break;case 64:ro()===45&&(E+=pu(nr())),k=ro(),y=w=Jn(C=E+=SS(Ml())),j++;break;case 45:_===45&&Jn(E)==2&&(S=0)}}return d}function Kf(e,o,i,s,l,d,h,p,g,x,y,w){for(var k=l-1,M=l===0?d:[""],_=u2(M),S=0,$=0,R=0;S<s;++S)for(var j=0,C=To(e,k+1,k=c2($=h[S])),P=e;j<_;++j)(P=d2($>0?M[j]+" "+C:Be(C,/&\f/g,M[j])))&&(g[R++]=P);return cc(e,o,i,l===0?sc:p,g,x,y,w)}function MS(e,o,i,s){return cc(e,o,i,s2,Sh(yS()),To(e,2,-2),0,s)}function Qf(e,o,i,s,l){return cc(e,o,i,jh,To(e,0,s),To(e,s+1,-1),s,l)}function p2(e,o,i){switch(vS(e,o)){case 5103:return nt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return nt+e+e;case 4855:return nt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Si+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+e+Si+e+pt+e+e;case 5936:switch(Lt(e,o+11)){case 114:return nt+e+pt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return nt+e+pt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return nt+e+pt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return nt+e+pt+e+e;case 6165:return nt+e+pt+"flex-"+e+e;case 5187:return nt+e+Be(e,/(\w+).+(:[^]+)/,nt+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return nt+e+pt+"flex-item-"+Be(e,/flex-|-self/g,"")+(Sr(e,/flex-|baseline/)?"":pt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return nt+e+pt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return nt+e+pt+Be(e,"shrink","negative")+e;case 5292:return nt+e+pt+Be(e,"basis","preferred-size")+e;case 6060:return nt+"box-"+Be(e,"-grow","")+nt+e+pt+Be(e,"grow","positive")+e;case 4554:return nt+Be(e,/([^-])(transform)/g,"$1"+nt+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+nt+e+e;case 4200:if(!Sr(e,/flex-|baseline/))return pt+"grid-column-align"+To(e,o)+e;break;case 2592:case 3360:return pt+Be(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,Sr(s.props,/grid-\w+-end/)})?~$l(e+(i=i[o].value),"span",0)?e:pt+Be(e,"-start","")+e+pt+"grid-row-span:"+(~$l(i,"span",0)?Sr(i,/\d+/):+Sr(i,/\d+/)-+Sr(e,/\d+/))+";":pt+Be(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return Sr(s.props,/grid-\w+-start/)})?e:pt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,nt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(e)-1-o>6)switch(Lt(e,o+1)){case 109:if(Lt(e,o+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+Si+(Lt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~$l(e,"stretch",0)?p2(Be(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,p,g,x){return pt+l+":"+d+x+(h?pt+l+"-span:"+(p?g:+g-+d)+x:"")+e});case 4949:if(Lt(e,o+6)===121)return Be(e,":",":"+nt)+e;break;case 6444:switch(Lt(e,Lt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nt+(Lt(e,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+pt+"$2box$3")+e;case 100:return Be(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function Dl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function RS(e,o,i,s){switch(e.type){case gS:if(e.children.length)break;case fS:case mS:case jh:return e.return=e.return||e.value;case s2:return"";case l2:return e.return=e.value+"{"+Dl(e.children,s)+"}";case sc:if(!Jn(e.value=e.props.join(",")))return""}return Jn(i=Dl(e.children,s))?e.return=e.value+"{"+i+"}":""}function NS(e){var o=u2(e);return function(i,s,l,d){for(var h="",p=0;p<o;p++)h+=e[p](i,s,l,d)||"";return h}}function LS(e){return function(o){o.root||(o=o.return)&&e(o)}}function AS(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case jh:e.return=p2(e.value,e.length,i);return;case l2:return Dl([eo(e,{value:Be(e.value,"@","@"+nt)})],s);case sc:if(e.length)return xS(i=e.props,function(l){switch(Sr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ha(eo(e,{props:[Be(l,/:(read-\w+)/,":"+Si+"$1")]})),ha(eo(e,{props:[l]})),Wu(e,{props:Yf(i,s)});break;case"::placeholder":ha(eo(e,{props:[Be(l,/:(plac\w+)/,":"+nt+"input-$1")]})),ha(eo(e,{props:[Be(l,/:(plac\w+)/,":"+Si+"$1")]})),ha(eo(e,{props:[Be(l,/:(plac\w+)/,pt+"input-$1")]})),ha(eo(e,{props:[l]})),Wu(e,{props:Yf(i,s)});break}return""})}}var ga={},fu,mu;const _a=typeof process<"u"&&ga!==void 0&&(ga.REACT_APP_SC_ATTR||ga.SC_ATTR)||"data-styled",f2="active",m2="data-styled-version",uc="6.4.2",$h=`/*!sc*/
`,$i=typeof window<"u"&&typeof document<"u";function Zf(e){if(typeof process<"u"&&ga!==void 0){const o=ga[e];if(o!==void 0&&o!=="")return o!=="false"}}const TS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(mu=(fu=Zf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&fu!==void 0?fu:Zf("SC_DISABLE_SPEEDY"))!==null&&mu!==void 0?mu:typeof process<"u"&&ga!==void 0&&!1),g2="sc-keyframes-",ES={};function Fi(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let Nl=new Map,Fl=new Map,Ll=1;const _i=e=>{if(Nl.has(e))return Nl.get(e);for(;Fl.has(Ll);)Ll++;const o=Ll++;return Nl.set(e,o),Fl.set(o,e),o},IS=e=>Fl.get(e),PS=(e,o)=>{Ll=o+1,Nl.set(e,o),Fl.set(o,e)},Mh=Object.freeze([]),Ca=Object.freeze({});function v2(e,o,i=Ca){return e.theme!==i.theme&&e.theme||o||i.theme}const zS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OS=/(^-|-$)/g;function x2(e){return e.replace(zS,"-").replace(OS,"")}const DS=/(a)(d)/gi,Xf=e=>String.fromCharCode(e+(e>25?39:97));function Rh(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Xf(o%52)+i;return(Xf(o%52)+i).replace(DS,"$1-$2")}const qu=5381,Ao=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},y2=e=>Ao(qu,e);function Nh(e){return Rh(y2(e)>>>0)}function FS(e){return e.displayName||e.name||"Component"}function Vu(e){return typeof e=="string"&&!0}function BS(e){return Vu(e)?`styled.${e}`:`Styled(${FS(e)})`}const w2=Symbol.for("react.memo"),HS=Symbol.for("react.forward_ref"),WS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},US={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},b2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qS={[HS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[w2]:b2};function Jf(e){return("type"in(o=e)&&o.type.$$typeof)===w2?b2:"$$typeof"in e?qS[e.$$typeof]:WS;var o}const VS=Object.defineProperty,GS=Object.getOwnPropertyNames,YS=Object.getOwnPropertySymbols,KS=Object.getOwnPropertyDescriptor,QS=Object.getPrototypeOf,ZS=Object.prototype;function k2(e,o,i){if(typeof o!="string"){const s=QS(o);s&&s!==ZS&&k2(e,s,i);const l=GS(o).concat(YS(o)),d=Jf(e),h=Jf(o);for(let p=0;p<l.length;++p){const g=l[p];if(!(g in US||i&&i[g]||h&&g in h||d&&g in d)){const x=KS(o,g);try{VS(e,g,x)}catch{}}}}return e}function Bi(e){return typeof e=="function"}const XS=Symbol.for("react.forward_ref");function Lh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===XS&&"styledComponentId"in e}function Ci(e,o){return e&&o?e+" "+o:e||o||""}function Bl(e,o){return e.join("")}function Ai(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gu(e,o,i=!1){if(!i&&!Ai(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Gu(e[s],o[s]);else if(Ai(o))for(const s in o)e[s]=Gu(e[s],o[s]);return e}function Ah(e,o){Object.defineProperty(e,"toString",{value:o})}const JS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Fi(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let p=d;p<h;p++)this.groupSizes[p]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+$h;return o}},e$=`style[${_a}][${m2}="${uc}"]`,t$=new RegExp(`^${_a}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),em=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Yu=e=>{if(!e)return document;if(em(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(em(o))return o}return document},n$=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},r$=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split($h),l=[];for(let d=0,h=s.length;d<h;d++){const p=s[d].trim();if(!p)continue;const g=p.match(t$);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(PS(y,x),n$(e,y,g[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(p)}},gu=e=>{const o=Yu(e.options.target).querySelectorAll(e$);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(_a)!==f2&&(r$(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let vi=!1;function o$(){if(vi!==!1)return vi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return vi=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return vi=o.getAttribute("content")||void 0}return vi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const _2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${_a}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(_a,f2),l.setAttribute(m2,uc);const p=o||o$();return p&&l.setAttribute("nonce",p),s.insertBefore(l,h),l},a$=class{constructor(e,o){this.element=_2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const p=l[d];if(p.ownerNode===i)return p}throw Fi(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},i$=class{constructor(e,o){this.element=_2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let tm=$i;const s$={isServer:!$i,useCSSOMInjection:!TS};class Hi{static registerId(o){return _i(o)}constructor(o=Ca,i={},s){this.options=Object.assign(Object.assign({},s$),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&$i&&tm&&(tm=!1,gu(this)),Ah(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let p="";for(let g=0;g<h;g++){const x=IS(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=_a+".g"+g+'[id="'+x+'"]';let M="";for(const _ of y)_.length>0&&(M+=_+",");p+=w+k+'{content:"'+M+'"}'+$h}return p})(this))}rehydrate(){!this.server&&$i&&gu(this)}reconstructWithOptions(o,i=!0){const s=new Hi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&$i&&o.target!==this.options.target&&Yu(this.options.target)!==Yu(o.target)&&gu(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new a$(s,l):new i$(s,l))(this.options),new JS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){_i(o),o.startsWith(g2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(_i(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(_i(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const C2=new WeakSet,l$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function c$(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in l$||e.startsWith("--")?String(o).trim():o+"px"}const Ro=47;function nm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const j2=Symbol.for("sc-keyframes");function d$(e){return typeof e=="object"&&e!==null&&j2 in e}function S2(e){return Bi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const $2=e=>e==null||e===!1||e==="",u$=Symbol.for("react.client.reference");function rm(e){return e.$$typeof===u$}function M2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!$2(s)&&(Array.isArray(s)&&C2.has(s)||Bi(s)?o.push(nm(i)+":",s,";"):Ai(s)?(o.push(i+" {"),M2(s,o),o.push("}")):o.push(nm(i)+": "+c$(i,s)+";"))}}function io(e,o,i,s,l=[]){if($2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(rm(e))return l;if(S2(e)&&o){const h=e(o);return io(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)io(e[h],o,i,s,l);return l}return Lh(e)?(l.push(`.${e.styledComponentId}`),l):d$(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):rm(e)?l:Ai(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(M2(e,l),l):(l.push(e.toString()),l)}const h$=y2(uc);class p${constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=Ao(h$,i),this.baseStyle=s,Hi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const p=this.rules[h];if(typeof p=="string")d+=p;else if(p)if(S2(p)){const g=p(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=Bl(io(g,o,i,s)))}else d+=Bl(io(p,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let p=this.dynamicNameCache.get(h);if(!p){if(p=Rh(Ao(Ao(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,p)}if(!i.hasNameForId(this.componentId,p)){const g=s(d,"."+p,void 0,this.componentId);i.insertRules(this.componentId,p,g)}l=Ci(l,p)}}return l}}const f$=/&/g;function R2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function vu(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,p=!1;for(let g=0;g<o;g++){const x=e.charCodeAt(g);if(d!==0||h||x!==Ro||e.charCodeAt(g+1)!==42)if(h)x===42&&e.charCodeAt(g+1)===Ro&&(h=!1,g++);else if(x!==34&&x!==39||R2(e,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){p=!0;let y=g+1;for(;y<o;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<o&&e.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return p||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function N2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,p=[];for(let g=0;g<h.length;g++)p[g]=i+h[g];d.props=p}Array.isArray(d.children)&&d.type!=="@keyframes"&&N2(d.children,o)}return e}function m$({options:e=Ca,plugins:o=Mh}=Ca){let i,s,l;const d=(k,M,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===sc&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(f$,s).replace(l,d))}),e.prefix&&h.push(AS),h.push(RS);let p=[];const g=NS(h.concat(LS(k=>p.push(k)))),x=(k,M="",_="",S="&")=>{i=S,s=M,l=void 0;const $=(function(j){const C=j.indexOf("//")!==-1,P=j.indexOf("}")!==-1;if(!C&&!P)return j;if(!C)return vu(j);const N=j.length;let L="",E=0,A=0,D=0,G=0,K=0,U=!1;for(;A<N;){const Y=j.charCodeAt(A);if(Y!==34&&Y!==39||R2(j,A))if(D===0)if(Y===Ro&&A+1<N&&j.charCodeAt(A+1)===42){for(A+=2;A+1<N&&(j.charCodeAt(A)!==42||j.charCodeAt(A+1)!==Ro);)A++;A+=2}else if(Y!==40)if(Y!==41)if(G>0)A++;else if(Y===42&&A+1<N&&j.charCodeAt(A+1)===Ro)L+=j.substring(E,A),A+=2,E=A,U=!0;else if(Y===Ro&&A+1<N&&j.charCodeAt(A+1)===Ro){for(L+=j.substring(E,A);A<N&&j.charCodeAt(A)!==10;)A++;E=A,U=!0}else Y===123?K++:Y===125&&K--,A++;else G>0&&G--,A++;else G++,A++;else A++;else D===0?D=Y:D===Y&&(D=0),A++}return U?(E<N&&(L+=j.substring(E)),K===0?L:vu(L)):K===0?j:vu(j)})(k);let R=$S(_||M?_+" "+M+" { "+$+" }":$);return e.namespace&&(R=N2(R,e.namespace)),p=[],Dl(R,g),p},y=e;let w=qu;for(let k=0;k<o.length;k++)o[k].name||Fi(15),w=Ao(w,o[k].name);return y!=null&&y.namespace&&(w=Ao(w,y.namespace)),y!=null&&y.prefix&&(w=Ao(w,"p")),x.hash=w!==qu?w.toString():"",x}const g$=new Hi,Ku=m$(),L2=fn.createContext({shouldForwardProp:void 0,styleSheet:g$,stylis:Ku,stylisPlugins:void 0});L2.Consumer;function A2(){return fn.useContext(L2)}const Th=fn.createContext(void 0);Th.Consumer;const om=Object.prototype.hasOwnProperty,xu={};function v$(e,o){const i=typeof e!="string"?"sc":x2(e);xu[i]=(xu[i]||0)+1;const s=i+"-"+Nh(uc+i+xu[i]);return o?o+"-"+s:s}function x$(e,o,i){const s=Lh(e),l=e,d=!Vu(e),{attrs:h=Mh,componentId:p=v$(o.displayName,o.parentComponentId),displayName:g=BS(e)}=o,x=o.displayName&&o.componentId?x2(o.displayName)+"-"+o.componentId:o.componentId||p,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const S=l.shouldForwardProp;if(o.shouldForwardProp){const $=o.shouldForwardProp;w=(R,j)=>S(R,j)&&$(R,j)}else w=S}const k=new p$(i,x,s?l.componentStyle:void 0);function M(S,$){return(function(R,j,C){const{attrs:P,componentStyle:N,defaultProps:L,foldedComponentIds:E,styledComponentId:A,target:D}=R,G=fn.useContext(Th),K=A2(),U=R.shouldForwardProp||K.shouldForwardProp,Y=v2(j,G,L)||Ca;let J,ae;{const F=fn.useRef(null),q=F.current;if(q!==null&&q[1]===Y&&q[2]===K.styleSheet&&q[3]===K.stylis&&q[7]===N&&(function(T,O,X){const W=T,ee=O;let le=0;for(const B in ee)if(om.call(ee,B)&&(le++,W[B]!==ee[B]))return!1;return le===X})(q[0],j,q[4]))J=q[5],ae=q[6];else{J=(function(O,X,W){const ee=Object.assign(Object.assign({},X),{className:void 0,theme:W}),le=O.length>1;for(let B=0;B<O.length;B++){const z=O[B],oe=Bi(z)?z(le?Object.assign({},ee):ee):z;for(const fe in oe)fe==="className"?ee.className=Ci(ee.className,oe[fe]):fe==="style"?ee.style=Object.assign(Object.assign({},ee.style),oe[fe]):fe in X&&X[fe]===void 0||(ee[fe]=oe[fe])}return"className"in X&&typeof X.className=="string"&&(ee.className=Ci(ee.className,X.className)),ee})(P,j,Y),ae=(function(O,X,W,ee){return O.generateAndInjectStyles(X,W,ee)})(N,J,K.styleSheet,K.stylis);let T=0;for(const O in j)om.call(j,O)&&T++;F.current=[j,Y,K.styleSheet,K.stylis,T,J,ae,N]}}const de=J.as||D,se=(function(F,q,T,O){const X={};for(const W in F)F[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&F.theme===T||(W==="forwardedAs"?X.as=F.forwardedAs:O&&!O(W,q)||(X[W]=F[W]));return X})(J,de,Y,U);let Q=Ci(E,A);return ae&&(Q+=" "+ae),J.className&&(Q+=" "+J.className),se[Vu(de)&&de.includes("-")?"class":"className"]=Q,C&&(se.ref=C),v.createElement(de,se)})(_,S,$)}M.displayName=g;let _=fn.forwardRef(M);return _.attrs=y,_.componentStyle=k,_.displayName=g,_.shouldForwardProp=w,_.foldedComponentIds=s?Ci(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=x,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(S){this._foldedDefaultProps=s?(function($,...R){for(const j of R)Gu($,j,!0);return $})({},l.defaultProps,S):S}}),Ah(_,()=>`.${_.styledComponentId}`),d&&k2(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var y$=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function am(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const im=e=>(C2.add(e),e);function Pe(e,...o){if(Bi(e)||Ai(e))return im(io(am(Mh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?io(i):im(io(am(i,o)))}function Qu(e,o,i=Ca){if(!o)throw Fi(1,o);const s=(l,...d)=>e(o,i,Pe(l,...d));return s.attrs=l=>Qu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Qu(e,o,Object.assign(Object.assign({},i),l)),s}const T2=e=>Qu(x$,e),f=T2;y$.forEach(e=>{f[e]=T2(e)});class w${constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Bi(d)&&!Lh(d))return!1}return!0})(o),Hi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const p=this.computeRules(o,i,s,l);s.insertRules(d,p.name,p.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const p=h.rules,g=this.instanceRules.get(o).rules;if(p.length===g.length){let x=!0;for(let y=0;y<p.length;y++)if(p[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Bl(io(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function E2(e,...o){const i=Pe(e,...o),s=`sc-global-${Nh(JSON.stringify(i))}`,l=new w$(i,s),d=p=>{const g=A2(),x=fn.useContext(Th);let y;{const w=fn.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,p,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,p,g.styleSheet,x,g.stylis,l],k=fn.useRef(l);fn.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,p,g.styleSheet,x,g.stylis))},w),fn.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(p,g,x,y,w){if(l.isStatic)l.renderStyles(p,ES,x,w);else{const k=Object.assign(Object.assign({},g),{theme:v2(g,y,d.defaultProps)});l.renderStyles(p,k,x,w)}}return fn.memo(d)}var I2;class b${constructor(o,i){this[I2]=!0,this.inject=(s,l=Ku)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=g2+o,this.rules=i,_i(this.id),Ah(this,()=>{throw Fi(12,String(this.name))})}getName(o=Ku){return o.hash?this.name+Rh(+o.hash>>>0):this.name}}function je(e,...o){const i=Bl(Pe(e,...o)),s=Nh(i);return new b$(s,i)}I2=j2;const P2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],k$=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function _$(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function C$(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%P2.length}function j$(e){const o=_$(e);let i=-1,s=0;return k$.forEach((l,d)=>{const h=l.reduce((p,g)=>o.includes(g)?p+1:p,0);h>s&&(s=h,i=d)}),P2[i>=0?i:C$(o)]}const At=(e,o,i)=>Math.max(o,Math.min(i,e)),$r=e=>(e=At(e,0,1),e*e*(3-2*e)),so=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function un(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Zu(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function pl(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Zu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Zu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function S$(){const[e,o]=v.useState(0);return v.useEffect(()=>{var d;const i=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",i);const l=new MutationObserver(i);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",i),l.disconnect()}},[]),e}function $$(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function M$(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const $o=["234,54,38","246,112,44","252,172,54","255,212,76"],R$="176,58,32",N$="198,158,52";function er(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function jr(e,o,i){if(!(e!=null&&e.length))return i;if(e.length===1)return e[0];const s=At(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return er(e[l],e[d],s-l)}function lo(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),y=e.size<24,w=At(e.alert??0,0,1),k=(j,C)=>j+(C-j)*w,M=.85+.15*Math.sin(o*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const j=s.createRadialGradient(h,p,0,h,p,x*3);j.addColorStop(0,"rgba("+jr(e.corePalette,.42,i.core)+",0.55)"),j.addColorStop(1,"rgba("+jr(e.corePalette,.86,i.accent)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,p,x*3,0,6.2832),s.fill()}else if(!i.glow){const j=x*k(3.2,3),C=s.createRadialGradient(h,p,0,h,p,j);C.addColorStop(0,"rgba("+er(jr(e.corePalette,.35,i.core),$o[1],w)+","+k(.34,.85*M)+")"),C.addColorStop(.5,"rgba("+er(jr(e.corePalette,.68,i.core),$o[2],w)+","+k(.13,.42*M)+")"),C.addColorStop(1,"rgba("+er(jr(e.corePalette,1,i.core),$o[3],w)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,p,j,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,S=Math.max(.8,x*k(1,1.5)),$=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const R=s.createRadialGradient(h-$,p-$,0,h,p,S);R.addColorStop(0,"rgba("+er(jr(e.corePalette,.08,i.core),$o[0],w)+","+k(_,1)+")"),R.addColorStop(.5,"rgba("+er(jr(e.corePalette,.42,i.core),$o[1],w)+","+k(_,1)+")"),R.addColorStop(.82,"rgba("+er(jr(e.corePalette,.72,i.core),$o[2],w)+","+k(_,.97)+")"),R.addColorStop(1,"rgba("+er(jr(e.corePalette,1,i.core),$o[3],w)+","+k(_,.72)+")"),s.fillStyle=R,s.beginPath(),s.arc(h,p,S,0,6.2832),s.fill(),s.restore()}function z2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=o*(x?.5:.16),k=.42,M=Math.cos(k),_=Math.sin(k),S=Math.cos(w),$=Math.sin(w),R=g*.96,j=(D,G,K)=>{const U=D*S+K*$,Y=-D*$+K*S,J=G,ae=J*M-Y*_,se=(J*_+Y*M+1)/2,Q=.82+.18*se;return{x:h+U*R*Q,y:p+ae*R*Q,d:se}},C=(D,G,K)=>{const U=Math.cos(D),Y=Math.sin(D)*Math.cos(G),J=Math.sin(D)*Math.sin(G);return[U*Math.cos(K)+J*Math.sin(K),Y,-U*Math.sin(K)+J*Math.cos(K)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const P=e.size>=24?64:40,N=x?.9:.3,L=P,E=5.6,A=[];for(let D=0;D<y.length;D++){const G=y[D][0],K=y[D][1],U=ae=>{const de=C(ae,G,K);return j(de[0],de[1],de[2])},Y=D%2?1:-1,J=D*2+Y*o*N;A.push({ptOf:U,head:J,dir:Y,hp:U(J)})}A.sort((D,G)=>D.hp.d-G.hp.d);for(const D of A){const G=Math.max(1.2,g*.05)*(.75+.35*D.hp.d),K=.66*(.45+.55*D.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let U=D.ptOf(D.head);for(let ae=1;ae<=L;ae++){const de=ae/L,se=1-de,Q=K*se*se,F=D.ptOf(D.head-D.dir*de*E);Q>.004&&(s.strokeStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.moveTo(U.x,U.y),s.lineTo(F.x,F.y),s.stroke()),U=F}s.restore();const Y=Math.max(.9,g*.062*so(e.size)*(.65+.5*D.hp.d)),J=.45+.55*D.hp.d;if(i.glow){const ae=s.createRadialGradient(D.hp.x,D.hp.y,0,D.hp.x,D.hp.y,Y*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*J+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(D.hp.x,D.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,J+.1)+")",s.beginPath(),s.arc(D.hp.x,D.hp.y,Y,0,6.2832),s.fill()}lo(e,o,i),s.restore()}function L$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[g*.92],w=y.length,k=1,M=x?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<w;S++){const $=y[S],R=S%2?1:-1,j=6.2832/k,C=Math.min(5.6,j*.92);for(let P=0;P<k;P++){const N=S*2+R*o*M+P*j,L=h+Math.cos(N)*$,E=p+Math.sin(N)*$;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let A=L,D=E;for(let K=1;K<=_;K++){const U=K/_,Y=.62*(1-U)*(1-U),J=N-R*U*C,ae=h+Math.cos(J)*$,de=p+Math.sin(J)*$;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(A,D),s.lineTo(ae,de),s.stroke()),A=ae,D=de}s.restore();const G=Math.max(.9,g*.062*so(e.size));if(i.glow){const K=s.createRadialGradient(L,E,0,L,E,G*4.5);K.addColorStop(0,"rgba("+i.accent+",0.3)"),K.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=K,s.beginPath(),s.arc(L,E,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(L,E,G,0,6.2832),s.fill()}}lo(e,o,i),s.restore()}function sm(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,p=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=At(e.alert??0,0,1),k=x*.82,M=(F,q)=>er(i.dot,er(R$,N$,At(Math.hypot(F-p,q-g)/k,0,1)),w),_=e.size>=120,S=_?22:e.size>=32?10:e.size>=20?7:5,$=y?o*.55:o*.22,R=Math.cos($),j=Math.sin($),C=.42,P=Math.cos(C),N=Math.sin(C);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const F=s.createRadialGradient(p,g,0,p,g,x*1.02);F.addColorStop(0,"rgba("+i.accent+",0.10)"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=F,s.beginPath(),s.arc(p,g,x*1.02,0,6.2832),s.fill()}const L=[];for(let F=0;F<S;F++){const q=1-(F+.5)/S*2,T=Math.sqrt(Math.max(0,1-q*q)),O=F*2.39996,X=Math.cos(O)*T,W=q,ee=Math.sin(O)*T,le=X*R+ee*j,B=-X*j+ee*R,z=W*P-B*N,oe=W*N+B*P,fe=(oe+1)/2,ce=.82+.18*fe;L.push({x:p+le*k*ce,y:g+z*k*ce,d:fe,k:F,vec:[le,z,oe]})}L.sort((F,q)=>F.d-q.d);const E=F=>{const q=(F[2]+1)/2,T=.82+.18*q;return{x:p+F[0]*k*T,y:g+F[1]*k*T,d:q}},A=(F,q,T)=>{let O=F[0]*q[0]+F[1]*q[1]+F[2]*q[2];O=At(O,-1,1);const X=Math.acos(O);if(X<.001)return[F[0],F[1],F[2]];const W=Math.sin(X),ee=Math.sin((1-T)*X)/W,le=Math.sin(T*X)/W;return[F[0]*ee+q[0]*le,F[1]*ee+q[1]*le,F[2]*ee+q[2]*le]},D={};for(const F of L)D[F.k]=F;const K=o*(y?1.4:.5),U=Math.floor(K),Y=K-U,J=5,ae=12;s.lineCap="round",s.lineJoin="round";const de=[1.7,9.3,21.5,34.8,48.2],se=At(Math.round(e.streamCount??(_?5:4)),0,de.length),Q=de.slice(0,se).map(F=>({seed:F}));for(const F of Q){const q=O=>{const X=Math.sin(O*12.9898+F.seed)*43758.5453;return Math.floor((X-Math.floor(X))*S)},T=O=>{let X=q(O);return X===q(O-1)&&(X=(X+1)%S),D[X]};for(let O=J-1;O>=0;O--){const X=U-O;if(X<0)continue;const W=T(X),ee=T(X+1);if(!W||!ee||W===ee)continue;const le=O===0?Y:1,B=E(A(W.vec,ee.vec,le)),z=(W.d+B.d)/2,oe=O===0?1:At(1-(O-1+Y)/(J-1),0,1),fe=(i.glow?.6:.72)*oe*(.4+.6*z);if(fe<.02)continue;const ce=s.createLinearGradient(W.x,W.y,B.x,B.y);ce.addColorStop(0,"rgba("+M(W.x,W.y)+",0)"),ce.addColorStop(1,"rgba("+M(B.x,B.y)+","+fe+")"),s.strokeStyle=ce,s.lineWidth=(_?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*z),s.beginPath();for(let ve=0;ve<=ae;ve++){const be=E(A(W.vec,ee.vec,le*(ve/ae)));ve===0?s.moveTo(be.x,be.y):s.lineTo(be.x,be.y)}s.stroke()}}for(const F of L){const q=.5+.5*Math.sin(o*2-F.k*.9),T=(.18+.82*F.d)*(.62+.38*q),O=_?Math.max(.5,(.9+.9*F.d)*h*(.85+.15*q)):x*.058*so(e.size)*(.6+.5*F.d);if(i.glow){const X=O*4,W=s.createRadialGradient(F.x,F.y,0,F.x,F.y,X);W.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(F.x,F.y,X,0,6.2832),s.fill()}s.fillStyle="rgba("+M(F.x,F.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(F.x,F.y,Math.max(.9,O),0,6.2832),s.fill()}_&&Eh(e,o,i,M),lo(e,o,i),s.restore()}function Eh(e,o,i,s){const{ctx:l,w:d,h,dpr:p}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let M=0;M<46;M++){const _=un(M*5.1)<.5?-1:1,S=un(M*1.7)*6.2832+o*(.3+un(M*3.1)*.6)*_*k,$=y*(.04+.05*un(M*4.7))*Math.sin(o*(.8+un(M*6)*1)+un(M*7)*6.28),R=y*(.5+un(M*2.3)*.5)+$,j=g+Math.cos(S)*R,C=x+Math.sin(S)*R,P=.3+.7*(.5+.5*Math.sin(o*(1.4+un(M)*2)+un(M*2)*6.28)),N=Math.max(.5,(.4+un(M*8)*1)*p*(.55+.6*P));if(i.glow){const L=N*6,E=l.createRadialGradient(j,C,0,j,C,L);E.addColorStop(0,"rgba("+i.accent+","+P*.18+")"),E.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(j,C,L,0,6.2832),l.fill()}l.fillStyle="rgba("+s(j,C)+","+P*(i.glow?.8:.42)+")",l.beginPath(),l.arc(j,C,N,0,6.2832),l.fill()}}function A$(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,p=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,M=x*.12,_=$r(.5+.5*Math.sin(o*(y?1:.55))),S=y?.34+.66*_:.5+.12*_,$=Math.max(1*h,x*.052),R=-o*(y?.5:.16),j=Math.cos(R),C=Math.sin(R),P=.42,N=Math.cos(P),L=Math.sin(P);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=x*(.52+.44*S),A=Math.max(k+$,E-M),D=[];for(let G=0;G<w;G++){const K=1-(G+.5)/w*2,U=Math.sqrt(Math.max(0,1-K*K)),Y=G*2.39996,J=Math.cos(Y)*U,ae=K,de=Math.sin(Y)*U,se=J*j+de*C,Q=-J*C+de*j,F=ae*N-Q*L,T=(ae*L+Q*N+1)/2,O=.82+.18*T,X=.5+.5*Math.sin(o*1.6+G*1.3);D.push({x0:p+se*k*O,y0:g+F*k*O,x1:p+se*A*O,y1:g+F*A*O,cx2:p+se*E*O,cy2:g+F*E*O,d:T,shim:X})}D.sort((G,K)=>G.d-K.d);for(const G of D){const K=(y?.4+.45*S:.6)*(.4+.6*G.d)*(.78+.22*G.shim),U=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);U.addColorStop(0,"rgba("+i.dot+","+K+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=U,s.lineWidth=$*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*so(e.size)*(.85+.3*S)*(.6+.5*G.d));if(i.glow){const J=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);J.addColorStop(0,"rgba("+i.accent+","+.26*K+")"),J.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=J,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,K+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&Eh(e,o,i,()=>i.dot),lo(e,o,i),s.restore()}function T$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=x?o*.5:o*.2,M=Math.cos(k),_=Math.sin(k),S=.42,$=Math.cos(S),R=Math.sin(S),j=x?1:.4,C=(U,Y)=>[Math.sin(U)*Math.cos(Y),Math.cos(U),Math.sin(U)*Math.sin(Y)],P=[C(1.4+.5*Math.sin(o*.5*j),o*.6*j),C(1.9+.4*Math.cos(o*.4*j),-o*.5*j+2)],N=.36,L=e.cellCount==null?y:At(Math.round(e.cellCount),0,y);let E=null,A=null;(L<y||e.cellBirths)&&(A=Array.from({length:y},(U,Y)=>Y).sort((U,Y)=>un(U)-un(Y)),E=new Array(y),A.forEach((U,Y)=>{E[U]=Y}));const D=.7,G=.16;if(A&&e.cellBirths&&e.emergeNow!=null){let U=0;for(let Y=0;Y<L;Y++){const J=A[Y];e.cellBirths.has(J)||e.cellBirths.set(J,e.emergeNow+U++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const K=[];for(let U=0;U<y;U++){let Y=1;if(E){if(E[U]>=L)continue;if(e.cellBirths){const z=e.cellBirths.get(U);if(z==null||(Y=$r(((e.emergeNow??z+D)-z)/D),Y<=.001))continue}}const J=1-(U+.5)/y*2,ae=Math.sqrt(Math.max(0,1-J*J)),de=U*2.39996,se=Math.cos(de)*ae*Y,Q=J*Y,F=Math.sin(de)*ae*Y;let q=0;for(const z of P){const oe=se-z[0],fe=Q-z[1],ce=F-z[2];q+=Math.exp(-(oe*oe+fe*fe+ce*ce)/(2*N*N))}q=At(q,0,1);const T=se*M+F*_,O=-se*_+F*M,X=Q*$-O*R,ee=(Q*R+O*$+1)/2,le=.82+.18*ee;let B=i.dot;if(e.dotPalette&&e.dotPalette.length){const oe=(de/6.2832+(J+1)*.07+1)%1*e.dotPalette.length,fe=Math.floor(oe)%e.dotPalette.length,ce=(fe+1)%e.dotPalette.length;B=er(e.dotPalette[fe],e.dotPalette[ce],oe-Math.floor(oe))}K.push({x:h+T*w*le,y:p+X*w*le,d:ee,inf:q,g:Y,color:B})}K.sort((U,Y)=>U.d-Y.d);for(const U of K){const Y=$r(U.inf),J=Math.max(.6,g*(.05+.06*Y)*so(e.size)*(.55+.5*U.d))*(.35+.65*U.g),ae=(.16+.84*U.d)*(.45+.55*Y)*U.g,de=1-(1-Math.abs(2*U.d-1))*U.g,se=Math.atan2(U.y-p,U.x-h);s.fillStyle="rgba("+U.color+","+ae+")",s.beginPath(),s.ellipse(U.x,U.y,Math.max(.35,J*de),J,se,0,6.2832),s.fill()}lo(e,o,i),s.restore()}function E$(e,o,i,s){const{ctx:l,w:d,h,dpr:p}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,w=e.state!=="idle",k=$r(At(s/.55,0,1)),M=$r(At((s-.3)/.4,0,1)),_=$r(At((s-.5)/.5,0,1)),S=e.size>=32?11:7,$=y*.12,R=y*.12,j=$r(.5+.5*Math.sin(o*(w?1:.55))),C=w?.34+.66*j:.5+.12*j,P=Math.max(1*p,y*.052),N=-o*(w?.5:.16),L=Math.cos(N),E=Math.sin(N),A=.42,D=Math.cos(A),G=Math.sin(A),K=y*(.52+.44*C),U=Math.max($+P,K-R),Y=[];for(let B=0;B<S;B++){const z=1-(B+.5)/S*2,oe=Math.sqrt(Math.max(0,1-z*z)),fe=B*2.39996,ce=Math.cos(fe)*oe,ve=z,be=Math.sin(fe)*oe,we=ce*L+be*E,Le=-ce*E+be*L,De=ve*D-Le*G,We=(ve*G+Le*D+1)/2,Ae=.82+.18*We,Fe=.5+.5*Math.sin(o*1.6+B*1.3);Y.push({x0:g+we*$*Ae,y0:x+De*$*Ae,x1:g+we*U*Ae,y1:x+De*U*Ae,cx2:g+we*K*Ae,cy2:x+De*K*Ae,d:We,shim:Fe,ux:ce,uy:ve,uz:be})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const J=[...Y].sort((B,z)=>B.d-z.d);for(const B of J){const z=(w?.4+.45*C:.6)*(.4+.6*B.d)*(.78+.22*B.shim);if(_>.001){const oe=B.x0+(B.x1-B.x0)*_,fe=B.y0+(B.y1-B.y0)*_,ce=l.createLinearGradient(B.x0,B.y0,B.x1,B.y1);ce.addColorStop(0,"rgba("+i.dot+","+z*_+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ce,l.lineWidth=P*(.7+.5*B.d),l.beginPath(),l.moveTo(B.x0,B.y0),l.lineTo(oe,fe),l.stroke()}if(M>.001){const oe=Math.max(.9,y*.058*so(e.size)*(.85+.3*C)*(.6+.5*B.d));if(i.glow){const fe=l.createRadialGradient(B.cx2,B.cy2,0,B.cx2,B.cy2,oe*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*z*M+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(B.cx2,B.cy2,oe*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,z+.1)*M+")",l.beginPath(),l.arc(B.cx2,B.cy2,oe*(.6+.4*M),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,de=y*.78,se=w?o*.5:o*.2,Q=Math.cos(se),F=Math.sin(se),q=w?1:.4,T=(B,z)=>[Math.sin(B)*Math.cos(z),Math.cos(B),Math.sin(B)*Math.sin(z)],O=[T(1.4+.5*Math.sin(o*.5*q),o*.6*q),T(1.9+.4*Math.cos(o*.4*q),-o*.5*q+2)],X=.36,W=e.cellCount==null?ae:At(Math.round(e.cellCount),0,ae);let ee=null;if(W<ae){const B=Array.from({length:ae},(z,oe)=>oe).sort((z,oe)=>un(z)-un(oe));ee=new Array(ae),B.forEach((z,oe)=>{ee[z]=oe})}const le=1-M;if(le>.001||k<1){const B=[];for(let z=0;z<ae;z++){if(ee&&ee[z]>=W)continue;const oe=1-(z+.5)/ae*2,fe=Math.sqrt(Math.max(0,1-oe*oe)),ce=z*2.39996,ve=Math.cos(ce)*fe,be=oe,we=Math.sin(ce)*fe;let Le=0,De=-2;for(let lt=0;lt<S;lt++){const xe=ve*Y[lt].ux+be*Y[lt].uy+we*Y[lt].uz;xe>De&&(De=xe,Le=lt)}const He=Y[Le];let We=0;for(const lt of O){const xe=ve-lt[0],Ze=be-lt[1],mt=we-lt[2];We+=Math.exp(-(xe*xe+Ze*Ze+mt*mt)/(2*X*X))}We=At(We,0,1);const Ae=ve*Q+we*F,Fe=-ve*F+we*Q,Ke=be*D-Fe*G,Ie=(be*G+Fe*D+1)/2,st=.82+.18*Ie,Qe=g+Ae*de*st,Tt=x+Ke*de*st;B.push({x:Qe+(He.cx2-Qe)*k,y:Tt+(He.cy2-Tt)*k,d:Ie+(He.d-Ie)*k,inf:We,f:(1-(1-Math.abs(2*Ie-1)))*(1-k)+1*k})}B.sort((z,oe)=>z.d-oe.d);for(const z of B){const oe=$r(z.inf),fe=Math.max(.6,y*(.05+.06*oe)*so(e.size)*(.55+.5*z.d)),ce=(.16+.84*z.d)*(.45+.55*oe)*le;if(ce<=.003)continue;const ve=Math.atan2(z.y-x,z.x-g);l.fillStyle="rgba("+i.dot+","+ce+")",l.beginPath(),l.ellipse(z.x,z.y,Math.max(.35,fe*z.f),fe,ve,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,Eh(e,o,i,()=>i.dot),l.globalAlpha=1),lo(e,o,i),l.restore()}function I$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=x?1:.4,M=o*(x?.3:.12),_=o*1*k,S=-o*.7*k+2.2,$=.72,R=(j,C)=>{const P=((j-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(P)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<y;j++){const C=j/y*6.2832+M;let P=Math.exp(-(R(C,_)**2)/(2*$*$))+Math.exp(-(R(C,S)**2)/(2*$*$));P=At(P,0,1);const N=$r(P),L=h+Math.cos(C)*w,E=p+Math.sin(C)*w,A=Math.max(.6,g*(.05+.07*N)*so(e.size)),D=.38+.62*N;if(i.glow&&N>.25){const G=s.createRadialGradient(L,E,0,L,E,A*4);G.addColorStop(0,"rgba("+i.accent+","+.24*N+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(L,E,A*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+D+")",s.beginPath(),s.arc(L,E,A,0,6.2832),s.fill()}lo(e,o,i),s.restore()}function P$(e,o,i){lo(e,o,i)}const z$={orbit:z2,orbit2d:L$,circle:sm,lines:A$,magnetic:T$,magnetic2d:I$,pulse:P$,bands:sm};function it({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:p,corePalette:g,coreHalo:x=!0,coreGradient:y=!1,streamCount:w,cellCount:k,className:M,"aria-label":_}){const S=v.useRef(null),$=S$(),R=v.useRef(0),j=v.useRef(0);j.current=y?1:0;const C=v.useRef(new Map),P=v.useRef(null),N=v.useRef(0);return v.useEffect(()=>{const L=S.current;if(!L)return;const E=L.getContext("2d");if(!E)return;const A=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),D=Math.min(2,window.devicePixelRatio||1),G=Math.max(2,Math.round(o*D)),K=G;L.width=G,L.height=K;const U={ctx:E,w:G,h:K,dpr:D,size:o,state:s,coreHalo:x,alert:R.current,streamCount:w,cellCount:k,cellBirths:k!=null&&!A&&s!=="static"?C.current:void 0},Y=i==="auto"?$$(pl(E,L,"var(--color-bg-primary)"))<.5?"dark":"light":i,J=M$(Y,Zu(d));if(U.dotPalette=h||p==null?void 0:p.map(X=>pl(E,L,X)),U.corePalette=h||g==null?void 0:g.map(X=>pl(E,L,X)),h){const X=pl(E,L,h);J.dot=X,J.core=X}const ae=z$[e]??z2,de=1.15,se=e==="lines"?1:0,Q=e==="lines"||e==="magnetic";(P.current==null||!Q||A||s==="static")&&(P.current=se);const F=X=>{if(R.current+=(j.current-R.current)*.06,Math.abs(R.current-j.current)<.001&&(R.current=j.current),U.alert=R.current,U.emergeNow=performance.now()/1e3,Q&&P.current!==se){const le=U.emergeNow,B=At(le-(N.current||le),0,.1);N.current=le;const z=se>(P.current??0)?1:-1;P.current=At((P.current??0)+z*B/de,0,1)}else N.current=U.emergeNow;E.clearRect(0,0,G,K);const W=s==="static"?.62:X,ee=P.current??se;Q&&ee>.001&&ee<.999?E$(U,W,J,ee):ae(U,W,J)},q=At(l,.4,3);if((A||s==="static")&&(R.current=j.current),F(1.15),A||s==="static")return;let T=0;const O=X=>{F(X/1e3*q),T=requestAnimationFrame(O)};return T=requestAnimationFrame(O),()=>cancelAnimationFrame(T)},[e,o,i,s,l,d,h,p,g,x,y,w,k,$]),n.jsx("canvas",{ref:S,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:M,role:"img","aria-label":_})}const ja={high:0,medium:1,low:2,none:3};f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function hc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function O$(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const O2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,D2=e=>/^(review|adjust|revisit|update)\b/i.test(e),D$=["Revisit","Update","Resolve"],F$=e=>/,|\sand\s/.test(e),B$="Approve all",Hl="Yes",F2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};f.section`
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
`;function H$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function W$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function U$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function q$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function V$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function G$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function B2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function Y$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function K$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Q$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Eo({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function Z$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function X$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function H2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function lm({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const cm=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Sa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},W2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function U2(e){const o=W2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function q2(e){const o=Sa[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const V2={missed_clockin_james:"james_okoro_2"},Ih=e=>`https://i.pravatar.cc/80?u=${V2[e]??e}`,Aa=e=>`https://i.pravatar.cc/80?u=${V2[e]??e}`,J$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},eM=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],G2=e=>J$[e]??eM,Y2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},dm={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Ph={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},tM={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},zh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},nM={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},rM={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},yu={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function K2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return nM[e.id]??e.timeline.map(i=>{var d;const s=((d=yu[i.state])==null?void 0:d.call(yu,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:rM[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Dt=(e,o,i)=>({name:e,match:o,distance:i}),Ye=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),um=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],oM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],aM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],iM=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],Q2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",Mo=e=>({from:"ultron",text:Q2,time:e}),sM={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:um,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Dt("Jordan Pierce","4.9 match","3.2 mi"),Dt("Aisha Karim","4.7 match","5.1 mi"),Dt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:Q2,total:20,threads:[Ye("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[Mo("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ye("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[Mo("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ye("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[Mo("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ye("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[Mo("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ye("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[Mo("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ye("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[Mo("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ye("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[Mo("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:oM,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Dt("Renee Wallace","4.9 match","2.4 mi"),Dt("Carl Jensen","4.6 match","4.1 mi"),Dt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ye("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ye("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ye("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:aM,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Dt("Dane Mercer","4.8 match","2.1 mi"),Dt("Omar Reyes","4.6 match","3.7 mi"),Dt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ye("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ye("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ye("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:iM,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Dt("Jamal Carter","4.7 match","1.8 mi"),Dt("Sara Lindqvist","4.6 match","2.9 mi"),Dt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ye("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ye("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ye("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Dt("Theo Park","4.7 match","1.9 mi"),Dt("Gina Holt","4.5 match","3.3 mi"),Dt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ye("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ye("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ye("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ye("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Dt("Carl Jensen","4.7 match","2.6 mi"),Dt("Tina Boyd","4.5 match","3.9 mi"),Dt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ye("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ye("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ye("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ye("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ye("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ye("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ye("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ye("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ye("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ye("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ye("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ye("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ye("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ye("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:um,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ye("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ye("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},lM={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},cM=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",hm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",pm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),dM={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Xu=e=>{const[o,...i]=e.split(" "),s=dM[o];return s?`Will ${s} ${i.join(" ")}`:e};function uM(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${cM(i.name)}", template="shift_offer", to=matched)`,summary:`${Xu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Xu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function hM(e,o,i,s){var M,_,S,$;if(e==="read"){const R=((M=o.update)==null?void 0:M.recordType)??((_=o.updateClose)==null?void 0:_.recordType);if(!R)return null;const j=R.toLowerCase(),C=[{label:"Type",value:R},{label:"Time",value:((S=W2[s])==null?void 0:S.shiftTime)??""},{label:"User",value:Sa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${R}`,description:`Pulled the current ${j} record before planning`,query:`read_data(record="${R}") → current_state`,recordDetails:C,summary:`Read the ${j}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const R=($=o.policy)==null?void 0:$.eligible;if(!R)return null;const j=R.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${j} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${R.total} ${R.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=R.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${R.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${R.total} qualified ${j} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${R.total} qualified ${j} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:R,query:j,fields:C}=o.task;return{icon:"task",name:"Tasks",description:R,query:j,task:{fields:C}}}if(e==="update"||e==="update-close"){const R=e==="update"?o.update:o.updateClose;if(!R)return null;const{description:j,...C}=R;return{icon:"record",name:"Update Data",description:j,updateData:C}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=e==="policy"?o.policy.description:l?d.description:h.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const R=e==="policy"?x:Xu(x),j={icon:y,name:g,description:R,...uM(e,o)};return l?{...j,channel:pm(d.channel),message:d.message}:h?{...j,channel:hm(h.name),message:h.message}:e==="policy"?{...j,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:j}if(e==="policy")return{icon:y,name:g,description:x,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:hm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:pm(d.channel),notification:k}}function Z2(e,o,i="execution"){const s=sM[e];return s?o.map(l=>hM(l,s,i,e)).filter(l=>l!==null):[]}const pM=e=>e.tools??lM[e.icon]??["policy"],fl=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function fM(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const X2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},fm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Oh(e,o){return fm[o%fm.length]}function mM(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function gM(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function J2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(vM,{children:[n.jsx(rr,{size:"md",src:Ih(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(xM,{children:[n.jsx(yM,{children:e.title}),n.jsx(wM,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(bM,{"data-tone":gM(i),children:[i,"% match"]}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(fh,{size:16})})]})}const vM=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,xM=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,yM=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,wM=f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,bM=f.span`
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
`,mm=e=>e.id.startsWith("detected_"),gm=5400,vm=1100;function kM(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:X2[i.id]??i.outcome}:i)}}const _M=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function CM(){const e=v.useMemo(()=>cm.filter(W=>W.id!=="shift_drop_maria"),[]),[o,i]=v.useReducer(kM,e),[s,l]=v.useState(()=>{var ee;const W=e.find(le=>le.status==="needs_approval"||le.status==="recommended");return(W==null?void 0:W.id)??((ee=e[0])==null?void 0:ee.id)??null}),[d,h]=v.useState([]),p=W=>{l(W),h(ee=>ee.includes(W)?ee:[...ee,W])},g=v.useMemo(()=>{const W=o.map((ee,le)=>({item:ee,index:le}));return _M.map(ee=>({id:ee.id,label:ee.label,threads:W.filter(le=>ee.statuses.includes(le.item.status)).sort((le,B)=>(le.item.status==="analyzing"?1:0)-(B.item.status==="analyzing"?1:0)||(mm(B.item)?1:0)-(mm(le.item)?1:0)||ja[le.item.severity]-ja[B.item.severity]||le.index-B.index).map(le=>le.item)}))},[o]),x=o.find(W=>W.id===s)??null,[y,w]=v.useState({}),k=s?y[s]??0:0,[M,_]=v.useState([]),[S,$]=v.useState({}),[R,j]=v.useState({}),[C,P]=v.useState([]),N=v.useRef({}),[L,E]=v.useState([]),A=W=>{E(ee=>ee.includes(W)?ee.filter(le=>le!==W):[...ee,W])},[D,G]=v.useState([]),K=W=>{G(ee=>ee.includes(W)?ee:[...ee,W])},[U,Y]=v.useState([]),J=W=>Y(ee=>ee.includes(W)?ee:[...ee,W]);return{threads:o,groups:g,selectedId:s,selectedThread:x,selectedStage:k,stageById:y,viewedIds:d,analyzedIds:M,outboundByThread:S,chatByThread:R,replyingIds:C,setSelectedId:p,detectRisk:W=>{i({type:"detect",thread:fM(W)})},surfaceDemoThread:W=>{const ee=cm.find(le=>le.id===W);ee&&(i({type:"detect",thread:ee}),J(W))},decide:W=>{p(W),_(ee=>ee.includes(W)?ee:[...ee,W]),i({type:"decide",threadId:W})},commit:(W,ee)=>{p(W),$(le=>({...le,[W]:[...le[W]??[],ee]})),i({type:"commit",threadId:W})},completeRun:W=>{const ee=y[W]??0,le=Ph[W];ee===0&&le?(w(B=>({...B,[W]:1})),i({type:"reopen",threadId:W})):(i({type:"resolve",threadId:W}),L.includes(W)&&(K(W),E(B=>B.filter(z=>z!==W))))},sendMessage:(W,ee)=>{const le=ee.trim();if(!le)return;p(W),j(z=>({...z,[W]:[...z[W]??[],{role:"operator",text:le}]})),P(z=>z.includes(W)?z:[...z,W]);const B=window.setTimeout(()=>{j(z=>{const oe=z[W]??[],fe=oe.filter(ce=>ce.role==="ultron").length;return{...z,[W]:[...oe,{role:"ultron",text:Oh(le,fe)}]}}),P(z=>z.filter(oe=>oe!==W)),delete N.current[W]},vm);N.current[W]=B},stopReply:W=>{const ee=N.current[W];ee&&(window.clearTimeout(ee),delete N.current[W]),P(le=>le.filter(B=>B!==W))},refine:W=>{},saveWorkflow:W=>{const ee=W.id;p(ee),j(B=>({...B,[ee]:[...B[ee]??[],{role:"operator",text:"Save as workflow"}]})),P(B=>B.includes(ee)?B:[...B,ee]);const le=window.setTimeout(()=>{j(B=>({...B,[ee]:[...B[ee]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),K(ee),P(B=>B.filter(z=>z!==ee)),delete N.current[ee]},vm);N.current[ee]=le},pendingWorkflowIds:L,toggleWorkflowSave:A,savedWorkflowIds:D,markWorkflowSaved:K,revealedNewIds:U,revealNew:J}}const jM={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function SM(e,o){const i=jM[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const $M={search:zl,read:zl,message:Ri,policy:No,shield:No,schedule:No,analytics:ab,clock:$n,monitor:Oi,bell:Ri,record:oo,task:No},MM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},RM=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:MM[e.icon]??e.name,NM=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",xm={positive:0,chatting:1,muted:2},LM=f(Hg)`
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
`,AM=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Dh=240;function TM({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,p]=v.useState(e),[g,x]=v.useState(!1);if(v.useEffect(()=>{if(e){p(!0);let _=0;const S=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(S),cancelAnimationFrame(_)}}x(!1);const M=setTimeout(()=>p(!1),Dh);return()=>clearTimeout(M)},[e]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((M,_)=>({entry:M,index:_}));return Io.createPortal(n.jsxs(UM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(qM,{$shown:g,onClick:o}),n.jsxs(VM,{$shown:g,children:[n.jsxs(GM,{children:[n.jsxs(YM,{children:[n.jsx(KM,{children:i}),n.jsx(QM,{children:w})]}),n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(ba,{size:18})})]}),n.jsxs(ZM,{children:[n.jsx(XM,{"aria-hidden":"true"}),n.jsx(Bg,{type:"single",collapsible:!0,value:l,onValueChange:M=>d(typeof M=="string"?M:""),children:k.map(({entry:M,index:_})=>{const S=M.updateData?ac:$M[M.icon];return n.jsx(LM,{value:String(_),label:RM(M),description:M.description,leadingSlot:n.jsx(AM,{"aria-hidden":"true",children:n.jsx(S,{size:18})}),children:n.jsx(JM,{children:n.jsx(EM,{entry:M})})},_)})})]})]})]}),document.body)}function EM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Channel"}),n.jsx(_m,{children:e.channel})]}),e.message&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Message"}),n.jsx(wm,{children:e.message})]}),e.recordDetails&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Record details"}),n.jsx(wu,{children:e.recordDetails.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:n.jsx(bu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(Cn,{children:[n.jsx(nn,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(hR,{children:e.policies.items.map((o,i)=>n.jsxs(pR,{children:[n.jsx(fR,{"aria-hidden":"true",children:n.jsx(Rn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(Cn,{children:[n.jsx(nn,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(IM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(Cn,{children:[n.jsx(nn,{children:`Threads · ${e.threads.total}`}),n.jsx(BM,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(Cn,{children:[n.jsx(nn,{children:"Recipient"}),n.jsx(mR,{children:n.jsx(Sn,{size:"md",divider:!1,leadingSlot:n.jsx(rr,{size:"sm",src:Aa(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(ic,{size:14})})})})]}),n.jsxs(Cn,{children:[n.jsx(nn,{children:"Message"}),n.jsx(wm,{children:e.notification.message})]})]}),e.task&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Task"}),n.jsx(wu,{children:e.task.fields.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Ni,{status:"success",size:"sm",children:o.value}):n.jsx(bu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(wu,{children:o.map((s,l)=>n.jsx(Sn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(PM,{children:[n.jsx(zM,{children:s.previousValue}),n.jsx(OM,{"aria-hidden":"true",children:"→"}),n.jsx(DM,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Ni,{status:"success",size:"sm",children:s.value}):n.jsx(bu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Recommendation"}),n.jsxs(gR,{children:[n.jsxs(bm,{children:[n.jsx(km,{children:"Incentive?"}),n.jsx(vR,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(bm,{children:[n.jsx(km,{children:"Reason"}),n.jsx(xR,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"Query"}),n.jsx(eR,{children:e.query})]}),e.summary&&n.jsxs(Cn,{children:[n.jsx(nn,{children:"What it does"}),n.jsx(_m,{children:e.summary})]})]})}function IM({candidates:e,total:o,moreNoun:i}){var y;const[s,l]=v.useState(!1),d=e.slice(0,3),h=o-d.length,p=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>FM(k,p)):[],x=[...d,...g];return n.jsxs(n.Fragment,{children:[n.jsx(Fh,{children:x.map((w,k)=>n.jsx(Sn,{size:"sm",leadingSlot:n.jsx(rr,{size:"sm",src:Aa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(rR,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(ev,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Fh=f.div`
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
`,wu=f(Fh)`
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
`,bu=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,PM=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,zM=f.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,OM=f.span`
  color: var(--color-content-tertiary);
`,DM=f.span`
  color: var(--color-success-content);
`,Wl=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Ul=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function FM(e,o){const i=Wl[e%Wl.length],s=Ul[(e*7+3)%Ul.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const ym=3;function BM({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((y,w)=>xm[y.tone]-xm[w.tone]),h=Math.max(0,e.total-d.length),p=[...d,...Array.from({length:h},(y,w)=>WM(w))],g=o?p:p.slice(0,ym),x=p.length-ym;return n.jsxs(n.Fragment,{children:[n.jsx(Fh,{children:g.map((y,w)=>{var S;const k=!!((S=y.conversation)!=null&&S.length),M=`${y.name}-${w}`,_=k&&s===M;return n.jsxs(oR,{"data-open":_||void 0,children:[n.jsx(Sn,{size:"md",interactive:k,onClick:k?()=>l(_?null:M):void 0,"aria-expanded":k?_:void 0,leadingSlot:n.jsx(rr,{size:"sm",src:Aa(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:n.jsxs(uR,{children:[n.jsx(Ni,{status:NM(y),size:"sm",children:y.status}),k?n.jsx(aR,{"data-open":_||void 0,children:n.jsx(Mn,{size:16})}):n.jsx(Nn,{size:16})]})}),_&&n.jsx(HM,{messages:y.conversation})]},M)})}),x>0&&n.jsx(ev,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function HM({messages:e}){return n.jsx(sR,{children:e.map((o,i)=>n.jsxs(lR,{$from:o.from,children:[n.jsx(cR,{children:o.text}),n.jsx(dR,{children:o.time})]},i))})}function WM(e){const o=Wl[e%Wl.length],i=Ul[(e*7+3)%Ul.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const UM=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,qM=f.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Dh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,VM=f.div`
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
`,GM=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,YM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,KM=f.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,QM=f.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,ZM=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,XM=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,JM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,Cn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function eR({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(tR,{children:[n.jsx(nR,{children:e}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(Rn,{size:14}):n.jsx(_g,{size:14})})]})}const tR=f.div`
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
`,nR=f.pre`
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
`,rR=f.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,oR=f.div``,aR=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,iR=je`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,sR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${iR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lR=f.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,cR=f.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,dR=f.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,uR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,ev=f.button`
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
`,hR=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,pR=f.li`
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
`,fR=f.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,wm=f.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,mR=f.div`
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
`,gR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,bm=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,km=f.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,vR=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,xR=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,_m=f.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function yR({milestones:e}){return n.jsx(MR,{children:e.map((o,i)=>n.jsx(_R,{milestone:o,last:i===e.length-1},i))})}function ql({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:p,showConnectors:g,reasoning:x}){return n.jsx(wR,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:p,showConnectors:g,reasoning:x})}function wR({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:p=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=v.useState(!1),_=g||x&&!d?e.length:0,S=_>0,$=S&&!y?_:0,R=e.slice(0,_).map(C=>C.headline).join(" · "),j=e.length>0&&$>=e.length;return n.jsx(NR,{$animate:h,children:n.jsxs(AR,{$compact:j,children:[S&&!y&&n.jsx(Sm,{$tight:!0,$last:j,$connected:p,children:n.jsxs(rv,{type:"button","aria-expanded":y,onClick:()=>w(C=>!C),children:[n.jsx(Rm,{"aria-hidden":"true",children:n.jsx(Ol,{size:16})}),n.jsx(qR,{children:R})]})}),e.slice($).map((C,P)=>{var U,Y;const N=$+P,L=d&&typeof i=="number"&&N>i,E=d&&typeof i=="number"&&N===i,A=L?"plan":E?"working":"done",D=!d||typeof i!="number"||N<i-1?"done":N===i-1?"working":"upcoming",G=!!((U=C.progress)!=null&&U.length),K=N===e.length-1;return n.jsxs(Sm,{$tight:!G,$last:K,$connected:p,children:[p&&!K&&D!=="upcoming"&&n.jsx(ER,{"aria-hidden":"true",$state:D,$tight:!G,$superseded:g}),n.jsx(nv,{milestone:C,label:SM(C.headline,A),last:!0,collapsible:!0,placeholder:L,focused:E,startOpen:!d&&y,onCollapse:S&&y&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:g,typing:N===o,extra:!L&&((Y=C.usage)!=null&&Y.length)?n.jsx(kR,{usage:C.usage,title:C.headline}):void 0,icon:x&&!d&&!L?n.jsx(Rm,{"aria-hidden":"true",children:n.jsx(Ol,{size:16})}):n.jsx(tv,{icon:C.icon,loading:o===N||E||d&&typeof i!="number"&&N===e.length-1,placeholder:L,muted:g})})]},N)}),!l&&!d&&n.jsx(ma,{time:ur(e)})]})})}const Cm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function bR(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=Cm.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[Cm[e],n.jsxs(LR,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function ur(e){const i=581+e.reduce((p,g)=>p+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function ma({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(IR,{"data-feedback-actions":!0,children:n.jsxs(og,{visibility:"always",time:e,children:[n.jsx($m,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(bg,{size:14})}),n.jsx($m,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(kg,{size:14})}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(zi,{size:14})})]})})}function kR({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(PR,{children:[n.jsxs(ze,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Nn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(TM,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function _R({milestone:e,last:o}){return n.jsxs(BR,{children:[n.jsxs(HR,{children:[n.jsx(tv,{icon:e.icon}),!o&&n.jsx(YR,{})]}),n.jsx(nv,{milestone:e,last:o})]})}function CR({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(dN,{children:[l.map((h,p)=>n.jsx(J2,{record:h},p)),d>0&&n.jsx(uN,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function tv({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(Mm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(UR,{})}):n.jsx(Mm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(GR,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function nv({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:p,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var K,U,Y;const M=o??e.headline;if(p)return n.jsx(Lm,{$last:i,$dim:!0,children:n.jsxs(Ti,{as:"div",children:[l,n.jsx(Am,{children:M})]})});const _=!!((K=e.blocks)!=null&&K.length),S=!!h,$=!d||!!e.defaultOpen||!!w,[R,j]=v.useState(null),C=!!k,P=C?!0:R??$,N=d&&(_||S),L=!C&&N&&(!s||!!g),E=L&&!!g&&!!((U=e.progress)!=null&&U.length),A=()=>j(()=>!P),D=_&&(C||!d||P),G=S&&(C||!d||P);return n.jsxs(Lm,{$last:i,children:[n.jsxs(Ti,{as:C||N?"button":"div",type:C||N?"button":void 0,$interactive:C||L,"aria-expanded":C?!0:L?P:void 0,onClick:C?k:L?A:void 0,children:[l,n.jsx(Am,{$focused:!!g,children:M}),L&&!g&&n.jsx(KR,{"data-open":P||void 0,"aria-hidden":"true",children:n.jsx(Nn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?n.jsx(XR,{$indent:!!l,children:n.jsxs(QR,{children:[E&&n.jsx(ZR,{type:"button","aria-expanded":P,"aria-label":P?"Hide details":"Show details",onClick:A,children:P?n.jsx(kh,{size:16}):n.jsx($a,{size:16})}),n.jsx(SR,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:P||s||g})]})}):null,D&&n.jsx(iN,{$indent:!!l,children:e.blocks.map((J,ae)=>n.jsxs(sN,{children:[J.text&&n.jsx(lN,{children:s?n.jsx(Bh,{text:J.text}):J.text}),J.label&&n.jsx(cN,{children:J.label}),J.bullets&&n.jsx(hN,{children:J.bullets.map((de,se)=>n.jsx("li",{children:de},se))}),J.checks&&n.jsx(pN,{children:J.checks.map((de,se)=>n.jsxs("li",{children:[n.jsx(fN,{"aria-hidden":"true"}),n.jsx("span",{children:de})]},se))}),J.records&&n.jsx(CR,{records:J.records})]},ae))}),G&&n.jsx(zR,{$indent:!!l,children:h})]})}const jR=1350;function SR({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:p}){const g=e.length-1,x=typeof h=="number",[y,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(x||!k.current||y>=g)return;const $=setTimeout(()=>w(R=>Math.min(R+1,g)),jR);return()=>clearTimeout($)},[y,g,x]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const M=typeof h=="number"?Math.min(h,g):y,_=M>=g,S=_&&!l;return n.jsxs(JR,{children:[n.jsx(tN,{$done:S,$live:l,$superseded:p,"aria-live":"polite",children:l?n.jsx(Bh,{text:e[M],caret:!1,speed:26}):e[M]},M),d&&(i?_:_||l)&&(o!=null&&o.length)?n.jsx($R,{seeds:o,total:s}):null]})}const jm=90;function $R({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(nN,{"aria-label":`${l} people reached`,children:[s.map((h,p)=>n.jsx(rN,{style:{zIndex:s.length-p,animationDelay:`${p*jm}ms`},children:n.jsx(rr,{size:"sm",src:Aa(h),name:h,alt:""})},h)),d>0&&n.jsxs(oN,{"aria-hidden":"true",style:{animationDelay:`${s.length*jm}ms`},children:["+",d]})]})}const MR=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,RR=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,pc=Pe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,NR=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${RR} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${pc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LR=f.span``,AR=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Ta="var(--space-4)",Sm=f.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,TR=je`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,ER=f.span`
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
        animation: ${TR} 1.25s linear infinite;
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
`,IR=f.div`
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
`,PR=f.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,zR=f.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?`calc(${Ta} + var(--space-2))`:"0"};
`,$m=f(ze)`
  &[data-active] { color: var(--color-content-brand); }
`;function Bh({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const p=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(p)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(DR,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(FR,{"aria-hidden":"true",children:e.slice(l)})]})}const OR=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,DR=f.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?OR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FR=f.span`
  opacity: 0;
`,BR=f.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,HR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Mm=f.span`
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
`,WR=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,UR=f.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${WR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rv=f.button`
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
`,ov=Pe`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,Rm=f.span`
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
  ${ov}
`,qR=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${ov}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${rv}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,VR=je`
  to { transform: rotate(360deg); }
`,Nm=56.5,GR=f.svg`
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
    stroke-dasharray: ${Nm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?Nm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${VR} 2s linear infinite;
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
`,YR=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Lm=f.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Ti=f.div`
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
`,Am=f.span`
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

  ${Ti}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,KR=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Ti}:hover &,
  ${Ti}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,QR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,ZR=f.button`
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
`,XR=f.div`
  padding-left: ${e=>e.$indent?`calc(${Ta} + var(--space-2))`:"0"};
`,JR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,eN=je`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,tN=f.div`
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
    animation: ${eN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,nN=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,av=je`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,rN=f.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${av} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oN=f.span`
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
  animation: ${av} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,aN=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,iN=f.div`
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
  animation: ${aN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,lN=f.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,cN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,dN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,uN=f.button`
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
`,hN=f.ul`
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
`,pN=f.ul`
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
`,fN=f.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function mN({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const gN=160,iv=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[p,g]=v.useState(""),x=v.useRef(null),y=p.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var S;return(S=x.current)==null?void 0:S.focus()}}),[]);const w=()=>{const S=x.current;S&&(S.style.height="auto",S.style.height=`${Math.min(S.scrollHeight,gN)}px`)},k=()=>{!y||i||(o(p),g(""),requestAnimationFrame(()=>{const S=x.current;S&&(S.style.height="auto")}))},M=S=>{S.preventDefault(),k()},_=S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),k())};return n.jsxs(vN,{onSubmit:M,$compact:d,children:[n.jsx(xN,{ref:x,rows:1,value:p,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:S=>{g(S.target.value),w()},onKeyDown:_}),i?n.jsx(Tm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(mN,{size:d?16:20})}):n.jsx(Tm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:n.jsx(rc,{size:d?14:18})})]})}),vN=f.form`
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
`,xN=f.textarea`
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
`,Tm=f(ze)`
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
`,Em=450;function Hh(e,o){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Ph[e.id],d=o===1&&!!l,h=d?l.prompt:Y2[e.id]??e.recommendation,p=d?l.record:tM[e.id],g=p?Array.isArray(p)?p:[p]:[],x=e.status==="unresolved"?D$:d?l.actions:e.actions,y=i&&(!d&&(((_=zh[e.id])==null?void 0:_.length)??0)>1||F$(h)),w=y?B$:x[x.length-1],k=y?[]:x.slice(0,-1),M=O2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:M}}function Im({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:p,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,M]=v.useState(!1),[_,S]=v.useState(!1),{actionable:$,prompt:R,records:j,primaryLabel:C,purple:P}=Hh(e,o),L=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",A=!s&&($||P),D=E&&!d,G=s?L:$||L||A,K=i&&(G||D),U=hc(e),J=U2(e.id)||(K?"":e.assessment),ae=de=>{D2(de)?y(de):x(e.id,de)};return n.jsxs(LN,{"data-tone":U,$expanded:i,children:[n.jsxs(PN,{children:[n.jsxs(ON,{type:"button","aria-expanded":K,"aria-label":K?"Collapse case":"Expand case",onClick:h,children:[n.jsx(rr,{size:"md",src:Ih(e.id),name:Sa[e.id],alt:Sa[e.id]??""}),n.jsxs(hv,{children:[n.jsx(pv,{children:q2(e)}),J&&n.jsx(fv,{children:J})]})]}),n.jsx(zN,{variant:"ghost",size:p?"sm":"xs",iconOnly:!0,"aria-label":p?"Open record":K?"Collapse case":"Expand case",tabIndex:p?void 0:-1,onClick:p??h,children:p?n.jsx(ic,{size:20}):K?n.jsx(Ol,{size:16}):n.jsx(kh,{size:16})})]}),K&&D&&n.jsx(DN,{children:n.jsx(FN,{children:n.jsx(yR,{milestones:K2(e)})})}),K&&G&&n.jsxs(BN,{children:[$&&!s&&n.jsx(fc,{children:R}),$&&!s&&j.length>0&&n.jsx(rL,{children:j.map((de,se)=>n.jsx(J2,{record:de},se))}),L&&n.jsx(mv,{role:"status","aria-live":"polite",children:n.jsx(kN,{thread:e,onDecide:g})}),A&&n.jsxs(Wi,{children:[$&&C&&n.jsx(Lo,{variant:"primary",size:"sm",onClick:()=>ae(Hl),children:Hl}),$&&n.jsx(Lo,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),$&&n.jsx(yv,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{S(!0),y("Other")},children:"Other"}),P&&(k?n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Rn,{size:14}),children:"Saved"}):n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Eo,{size:14}),onClick:()=>{w(e),M(!0)},children:"Save as workflow"}))]})]})]})}function Pm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Bh,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function sv({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:p,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const M=d||h,[_,S]=v.useState(!1),[$,R]=v.useState(!1),[j]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[C,P]=v.useState(!1),[N,L]=v.useState(!1),E=v.useRef(null);v.useEffect(()=>{var q;N&&((q=E.current)==null||q.focus())},[N]);const A=d||g||C,{actionable:D,onFollowUp:G,prompt:K,records:U,primaryLabel:Y,purple:J}=Hh(e,o),ae=D&&!G?zh[e.id]??F2(K).map(q=>({label:q})):void 0,de=e.status==="resolved"||e.status==="auto_resolved",se=J||de,Q=q=>{D2(q)?s(q):i(e.id,q)},F=D&&!(ae&&ae.length>0)&&U.length>0?U[0]:void 0;if(se&&!D){const q=X2[e.id],T=_||!q,O=d&&!g&&!C;return n.jsxs(fL,{$divided:!0,children:[q&&n.jsx(mL,{children:n.jsx(Pm,{text:q,onDone:()=>S(!0),instant:j})}),T&&!O&&n.jsxs(va,{$saved:A,"data-saved":A||void 0,children:[n.jsxs(wv,{children:[n.jsx(bv,{"aria-hidden":"true",children:n.jsx(Eo,{size:16})}),n.jsx(kv,{children:n.jsx(Pm,{text:"Want me to save this as a reusable workflow?",onDone:()=>R(!0),instant:j})})]}),$&&n.jsx(_v,{children:A?n.jsx(Lo,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(Rn,{size:14}),children:"Saved"}):n.jsx(Lo,{variant:"primary",size:"sm",onClick:()=>{P(!0),l(e)},children:"Save workflow"})})]}),T&&O&&n.jsx(cv,{})]})}return n.jsxs(IN,{$flat:k,"data-tone":hc(e),children:[D&&n.jsxs(dv,{children:[n.jsx(fc,{children:K}),F&&n.jsx(uv,{children:n.jsx(rr,{size:"md",src:Aa(F.avatarSeed),name:F.title,alt:F.title})})]}),ae&&ae.length>0?n.jsx(lv,{tasks:ae}):null,n.jsxs(Wi,{children:[D&&Y&&n.jsx(Lo,{variant:N?"secondary":"primary",size:"sm",onClick:()=>Q(Hl),children:Hl}),D&&n.jsx(Lo,{variant:N?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),D&&n.jsx(yv,{variant:"tertiary",size:"sm","data-selected":N||void 0,onClick:()=>L(!0),children:"Other"}),D&&!G&&n.jsx(pL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":M,"data-on":M||void 0,leadingArtwork:M?n.jsx(Rn,{size:14}):n.jsx(Eo,{size:14}),onClick:()=>{d||p==null||p(e.id)},children:"Save as future workflow"})]}),D&&N&&n.jsx(hL,{children:n.jsx(iv,{ref:E,compact:!0,onSend:q=>x==null?void 0:x(q),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function yN({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:p=!1,saved:g=!1}){const x=hc(e),y=U2(e.id)||e.assessment;return n.jsxs(AN,{"data-tone":x,$expanded:i,children:[n.jsxs(TN,{$expanded:i,children:[n.jsx(rr,{size:"md",src:Ih(e.id),name:Sa[e.id],alt:Sa[e.id]??""}),n.jsxs(hv,{children:[n.jsx(pv,{children:q2(e)}),y&&n.jsx(fv,{children:y})]})]}),i&&n.jsx(EN,{children:n.jsx(sv,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:p,saved:g})})]})}function lv({tasks:e,interactive:o=!0}){return n.jsx(oL,{children:e.map((i,s)=>n.jsx(wN,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function wN({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return n.jsxs(aL,{children:[n.jsx(iL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(sL,{})}),n.jsxs(lL,{children:[n.jsxs(cL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(p=>!p):void 0,children:[n.jsx(vv,{children:e.label}),h&&n.jsx(dL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Nn,{size:14})})]}),l&&h&&n.jsx(uL,{children:e.detail})]})]})}function bN({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(GN,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const p=!o&&h===i-1,g=h===l.length-1;return n.jsxs(KN,{children:[n.jsxs(QN,{children:[n.jsx(tL,{$done:!p,"aria-hidden":"true",children:p?n.jsx(nL,{children:n.jsx(it,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(Rn,{size:16})}),!g&&n.jsx(ZN,{})]}),n.jsxs(XN,{$last:g,children:[n.jsx(JN,{children:d.headline}),n.jsx(eL,{children:d.detail})]})]},h)})})}function kN({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(HN,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(p=>!p),children:[n.jsx(it,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(UN,{children:[n.jsx(qN,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(VN,{children:e.assessment})]}),n.jsx(WN,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Nn,{size:14})})]}),d&&n.jsx(bN,{steps:G2(e.id),completed:i}),!i&&!l&&n.jsx(gv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function _N({thread:e,onDecide:o}){return n.jsx(gv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function ku(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:Z2(o,pM(e))}}function CN(e,o){const i=Z2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function jN(e,o){const i=K2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[CN(G2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(dm[e.id]??[]).map(k=>ku(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const p=Ph[e.id],g=[(dm[e.id]??[]).map(w=>ku(w,e.id)),((p==null?void 0:p.working)??[]).map(w=>ku(w,e.id))],x=w=>w===1&&p?p.prompt:Y2[e.id]??e.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(M=>y.push({kind:"activity",milestone:M})),y.push({kind:"reply",text:mM(k)})}),{items:y,reasoningCount:h}}function SN({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:p,saveWorkflowFlagged:g=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=jN(e,o),M=l||e.status==="in_progress",[_,S]=v.useState(l?Math.min(1,k):M?k:w.length),[$]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),R=o.length>0||x||y?w.length:k,j=e.status==="in_progress"&&o.length>0,[C,P]=v.useState(0);v.useEffect(()=>{P(0)},[_]),v.useEffect(()=>{if(_>=R)return;const B=w[_],z=w[_-1];if((B==null?void 0:B.kind)==="question"||(B==null?void 0:B.kind)==="message"){const ce=setTimeout(()=>S(ve=>ve+1),0);return()=>clearTimeout(ce)}if((B==null?void 0:B.kind)==="reply"){if(j)return;const ce=setTimeout(()=>S(ve=>ve+1),Em);return()=>clearTimeout(ce)}if(j&&(z==null?void 0:z.kind)!=="message")return;const oe=(z==null?void 0:z.kind)==="message"?Em:gm,fe=setTimeout(()=>S(ce=>ce+1),oe);return()=>clearTimeout(fe)},[_,R,j]),v.useEffect(()=>{if(!j)return;const B=z=>{var be;if(z.key!=="t"&&z.key!=="T"||z.metaKey||z.ctrlKey||z.altKey)return;const oe=z.target instanceof Element?z.target:null;if(oe&&oe.closest('input, textarea, [contenteditable="true"]'))return;const fe=w[_-1],ce=(fe==null?void 0:fe.kind)==="activity"?((be=fe.milestone.progress)==null?void 0:be.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&C<ce-1){P(we=>we+1);return}const ve=w[_];(ve==null?void 0:ve.kind)==="activity"?(S(we=>we+1),P(0)):p==null||p()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[j,_,C,p]);const N=w.slice(0,_),L=[];for(const B of N){if(B.kind==="question"){L.push({type:"question",text:B.text});continue}if(B.kind==="message"){L.push({type:"msg",text:B.text});continue}if(B.kind==="reply"){L.push({type:"reply",text:B.text});continue}const z=L[L.length-1];z&&z.type==="acts"?z.milestones.push(B.milestone):L.push({type:"acts",milestones:[B.milestone]})}const E=_<w.length,A=N.length>0&&N[N.length-1].kind==="activity",D=_>=R,[G,K]=v.useState(!1);v.useEffect(()=>{if(!(D&&A&&(x||l)&&!y)){K(!1);return}K(!0);const B=setTimeout(()=>K(!1),gm);return()=>clearTimeout(B)},[D,A,_,x,l,y]);const U=(x||l)&&(E||G)&&A;let Y=-1;L.forEach((B,z)=>{B.type==="acts"&&(Y=z)});const J=[];for(const B of w){if(B.kind!=="activity"){J.push({type:"other"});continue}const z=J[J.length-1];z&&z.type==="acts"?z.milestones.push(B.milestone):J.push({type:"acts",milestones:[B.milestone]})}let ae=-1;J.forEach((B,z)=>{B.type==="acts"&&(ae=z)});const de=L.findIndex(B=>B.type==="acts"),se=(B,z,oe=z)=>{const fe=L[B],ce=(l||e.status==="in_progress")&&B===ae,ve=J[B],be=ce&&ve&&ve.type==="acts"?ve.milestones:fe.milestones,we=ce?fe.milestones.length-1:void 0;return n.jsx(ql,{milestones:be,focusIndex:we,focusBeat:ce&&j?C:void 0,typingIndex:B===ae&&U?fe.milestones.length-1:void 0,collapsed:B<Y,hideActions:oe,running:ce,showConnectors:B!==de,reasoning:B===de,animateIn:!z&&!$})},Q=[];for(let B=0;B<L.length;B++){const z=L[B];if(z.type==="question"){Q.push({kind:"question",text:z.text});continue}if(z.type==="msg"){Q.push({kind:"msg",text:z.text});continue}if(z.type==="reply"){Q.push({kind:"response",gi:-1,text:z.text});continue}const oe=L[B+1];oe&&oe.type==="reply"?(Q.push({kind:"response",gi:B,text:oe.text}),B++):Q.push({kind:"acts",gi:B})}const q=(l||e.status==="in_progress")&&Y>=0||s,T=N.length>0,O=s||x,X=(()=>{for(let B=Q.length-1;B>=0;B--){const z=Q[B];if(z.kind==="acts"||z.kind==="response"&&z.gi>=0)return B}return-1})(),W=Q.findIndex(B=>B.kind==="question"),ee=W===de+1?W:-1,le=B=>B.kind==="acts"?ur(L[B.gi].milestones):B.kind==="response"?ur(B.gi>=0?L[B.gi].milestones:[]):ur([]);return n.jsxs(n.Fragment,{children:[Q.map((B,z)=>{var ve,be;const oe=z===X?d:null;if(B.kind==="question"){if(z===ee)return null;const we=Q[z-1],Le=!!we&&(we.kind==="acts"||we.kind==="response")&&z-1!==X,De=z===W;return n.jsxs(Cu,{children:[De?n.jsx(zm,{thread:e,saveWorkflowFlagged:g}):n.jsx(RN,{text:B.text,animate:!$}),Le&&n.jsx(ma,{time:le(we)})]},`q${z}`)}if(B.kind==="msg")return n.jsx(NN,{messages:[B.text],animate:!$},`m${z}`);if(B.kind==="acts"){const we=L[B.gi].milestones,Le=((ve=Q[z+1])==null?void 0:ve.kind)==="question",De=se(B.gi,!1,!!oe||Le),He=z===de,We=oe||(He&&z+1===ee?n.jsx(zm,{thread:e,saveWorkflowFlagged:g}):null);return He&&We?n.jsxs(ML,{children:[De,We,n.jsx(ma,{time:ur(we)})]},`a${z}`):n.jsxs(v.Fragment,{children:[De,oe&&n.jsxs(Cu,{children:[oe,n.jsx(ma,{time:ur(we)})]})]},`a${z}`)}const fe=B.gi>=0,ce=fe?L[B.gi].milestones:[];return n.jsxs(v.Fragment,{children:[n.jsx(Ju,{activity:fe?se(B.gi,!0):void 0,text:B.text,feedbackTime:oe||((be=Q[z+1])==null?void 0:be.kind)==="question"?void 0:ur(ce),showMark:!1,animateIn:!1}),oe&&n.jsxs(Cu,{children:[oe,n.jsx(ma,{time:ur(ce)})]})]},`resp${z}`)}),n.jsx($N,{messages:i,replying:s}),h&&Io.createPortal(T?n.jsxs(_L,{role:O?"status":"img","aria-label":s?"Ultron is replying":q?"Ultron is working":"Ultron",children:[n.jsxs(SL,{"aria-hidden":"true",children:[n.jsx(Om,{$show:q,children:n.jsx(it,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Om,{$show:!q,children:n.jsx(it,{mark:"magnetic2d",size:24,tone:"auto",state:O?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),q&&n.jsx(jL,{children:s?"Replying…":n.jsx(bR,{})})]}):null,h),X<0&&d]})}function Ju({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const p=!!(e||i||s);return n.jsxs($L,{children:[p&&n.jsxs(RL,{$animate:h,children:[e,i,s&&n.jsx(ma,{time:s})]}),d&&n.jsx(NL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(it,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function _u(){return[{icon:"clock",headline:"Reviewed your message"}]}function $N({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(kL,{children:e.map((i,s)=>i.role==="operator"?n.jsx(Cv,{children:n.jsx(Sv,{children:n.jsx($v,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(Ju,{body:n.jsx(MN,{}),feedbackTime:ur(_u()),showMark:!1},s):n.jsx(Ju,{activity:n.jsx(ql,{milestones:_u(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:ur(_u()),showMark:!1},s))})}function MN(){return n.jsx(cv,{})}function cv(){return n.jsxs(va,{children:[n.jsxs(wv,{children:[n.jsx(bv,{"aria-hidden":"true",children:n.jsx(Eo,{size:16})}),n.jsx(kv,{children:"Workflow saved for future use."})]}),n.jsx(_v,{children:n.jsx(Lo,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(ic,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function RN({text:e,animate:o=!0}){return n.jsx(vL,{$animate:o,children:e})}function zm({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Hh(e,0),l=zh[e.id]??F2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(xL,{"data-tone":hc(e),children:[n.jsxs(dv,{children:[n.jsx(fc,{children:i}),o?n.jsx(Rr,{content:"Saved as workflow",children:n.jsx(yL,{"aria-label":"Saved as workflow",children:n.jsx(Eo,{size:18})})}):d&&n.jsx(uv,{children:n.jsx(rr,{size:"md",src:Aa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(lv,{tasks:l,interactive:!1}):null]})}function NN({messages:e,animate:o=!0}){return e.length?n.jsx(wL,{children:e.map((i,s)=>n.jsx(Cv,{children:n.jsx(Sv,{$animate:o,children:n.jsx($v,{children:i})})},s))}):null}const LN=f.div`
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
`,AN=f.div`
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
`,TN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Pe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,EN=f.div`
  padding: var(--space-4);
`,IN=f.div`
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
`,dv=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,uv=f.span`
  flex-shrink: 0;
  display: inline-flex;
`,PN=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,zN=f(ze)`
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
`,ON=f.button`
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
`,hv=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,pv=f.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,fv=f.span`
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
`,DN=f.div`
  overflow: hidden;
`,FN=f.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,BN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,mv=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,HN=f.div`
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
`,WN=f.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;f(mv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const UN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,qN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,VN=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,GN=f.div`
  display: flex;
  flex-direction: column;
`,YN=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,KN=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${YN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,ZN=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,XN=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,JN=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,eL=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,tL=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,nL=f.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,gv=f(ze)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,rL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,oL=f.div`
  display: flex;
  flex-direction: column;
`,Vl="var(--space-8)",aL=f.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,iL=f.div`
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
  &[data-first]::before { top: calc(${Vl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Vl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,sL=f.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Vl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,lL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,cL=f.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Vl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,vv=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,dL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,uL=f.p`
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
`,fc=f.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,xv=je`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Wi=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${xv} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hL=f.div`
  animation: ${xv} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Lo=f(ze)`
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
    ${Wi} > & {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`,yv=f(ze)`
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
    ${Wi} > & {
      flex: 0 0 100%;
    }
  }
`,pL=f(ze)`
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
`,fL=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,mL=f.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,va=f.div`
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
`,wv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,bv=f.span`
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
  ${va}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${va}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${va}[data-saved] & { color: var(--color-content-disabled); }
`,kv=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${va}[data-saved] & { color: var(--color-content-disabled); }
`,_v=f(Wi)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,gL=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,vL=f.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${gL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xL=f.div`
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
  ${fc} { color: var(--color-content-disabled); }
  ${vv} { color: var(--color-content-disabled); }
`,yL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,wL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,Cv=f.div`
  display: flex;
  justify-content: flex-end;
`,Wh=je`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,jv=je`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,bL=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Sv=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Wh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,$v=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,kL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const _L=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${jv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,CL=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,jL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${CL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SL=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Om=f.span`
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
`,$L=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${pc}
`,Cu=f.div`
  display: contents;
  ${pc}
`,ML=f.div`
  display: flex;
  flex-direction: column;
  ${pc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,RL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${bL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${jv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Wh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Wh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const Dm=72,Fm=.58;function Dn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Bm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const p=d.slice(1),g=parseInt(p.length===3?p.split("").map(x=>x+x).join(""):p,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const LL=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function Uh({links:e=0,tone:o="aurora",cornerTone:i="default"}){const s=v.useRef(null),l=v.useRef(0),d=v.useRef(e);return d.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const h=s.current;if(!h)return;const p=h.getContext("2d");if(!p)return;const g=Math.min(2,window.devicePixelRatio||1);let x=0,y=0;const w=()=>{x=h.clientWidth,y=h.clientHeight,h.width=Math.max(2,Math.round(x*g)),h.height=Math.max(2,Math.round(y*g)),p.setTransform(g,0,0,g,0,0)};w();const k=new ResizeObserver(w);k.observe(h);const M=Bm(p,h,"--color-bg-primary","255,255,255"),_=LL(M)<.5,S=Bm(p,h,"--color-content-tertiary",_?"148,163,184":"71,85,105"),$=Array.from({length:Dm},(E,A)=>{const D=A%3===0,G=D?1-.5*Math.pow(Dn(A*3.1),1.6):Dn(A*3.1),K=D?.5*Math.pow(Dn(A*5.7),1.6):Dn(A*5.7);return{bx:G,by:K,vx:(Dn(A*7.3)-.5)*.008,vy:(Dn(A*9.9)-.5)*.008,wA:6+Dn(A*4.7)*10,wS:.25+Dn(A*6.1)*.5,wP:Dn(A*8.2)*6.2832,r:.8+Dn(A*2.3)*1.6,twS:.8+Dn(A)*1.4,twP:Dn(A*11.4)*6.2832}}),R=(E,A)=>{const D=((E.bx+E.vx*A)%1+1)%1,G=((E.by+E.vy*A)%1+1)%1,K=D-.5,U=Math.abs(K)*2,Y=U<1e-4?1:(Fm+(1-Fm)*U)/U;return{x:(.5+K*Y)*x+Math.cos(A*E.wS+E.wP)*E.wA,y:G*y+Math.sin(A*E.wS*.8+E.wP)*E.wA}},j=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),C=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),p.clearRect(0,0,x,y);const A=$.map(D=>R(D,E));for(let D=0;D<Dm;D++){const G=$[D],K=.35+.65*(.5+.5*Math.sin(E*G.twS+G.twP)),U=.82+l.current*.18;p.fillStyle="rgba("+S+","+K*U*(_?.55:.42)+")",p.beginPath(),p.arc(A[D].x,A[D].y,G.r*(.7+.3*K),0,6.2832),p.fill()}};if(j)return l.current=d.current,C(1.15),()=>k.disconnect();C(1.15);let P=0;const N=performance.now(),L=E=>{C(1.15+(E-N)/1e3),P=requestAnimationFrame(L)};return P=requestAnimationFrame(L),()=>{cancelAnimationFrame(P),k.disconnect()}},[]),n.jsx(AL,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:i==="risk",children:n.jsx("canvas",{ref:s})})}const AL=f.div`
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
`,Hn=Pe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Mv=Pe`
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
`;const TL=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,ml=f.div`
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
`,Hm=.025,xi=560,yi=480,EL=260,IL=.08,PL=.18,zL=.06,OL=350,DL=9,gl=[168,197,224,250,285,330,390],FL=e=>{const o=gl.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(gl[s]+(gl[s+1]-gl[s])*(i-s))%360},Al=5,Wm=360,BL=560,HL=.055,WL=.03,wi=320,UL=.84,eh=Al+1,Tl=[];for(let e=0;e<eh;e++)for(let o=e+1;o<eh;o++)Tl.push([e,o]);const Um=(e,o)=>FL((e*DL+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),vl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},qm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),ju=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function qh({tone:e="color"}={}){const o=v.useRef(null),i=v.useRef(null),s=v.useRef([]),l=v.useRef([]),d=v.useRef([]);return v.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),p=o.current,g=i.current;if(!p||!g)return;const x=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,w=Array.from({length:Al},()=>({size:Wm+Math.random()*(BL-Wm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));w.forEach((A,D)=>{const G=l.current[D];G&&(G.style.width=`${A.size.toFixed(0)}px`,G.style.height=`${A.size.toFixed(0)}px`)});const k=(A,D,G)=>{A.style.setProperty("--glow-ha",Um(D,x[0]+G).toFixed(1)),A.style.setProperty("--glow-hb",Um(D,x[1]+G*1.3).toFixed(1)),A.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(D*.17+x[2]*1.9+G)))%360).toFixed(1)),A.style.setProperty("--glow-cx",`${(35+14*Math.sin(D*.4+x[2]+G)).toFixed(1)}%`),A.style.setProperty("--glow-cy",`${(35+14*Math.cos(D*.31+x[3]+G)).toFixed(1)}%`)},M=(A,D,G)=>{const K=new Array(eh).fill(null);for(let U=0;U<Al;U++){const Y=w[U],J=l.current[U];if(!J)continue;const ae=D*(.5+Y.ax*(.68*Math.sin(A*Y.sx1+Y.px1)+.32*Math.sin(A*Y.sx2+Y.px2))),de=G*(.5+Y.ay*(.68*Math.sin(A*Y.sy1+Y.py1)+.32*Math.sin(A*Y.sy2+Y.py2))),se=HL+WL*(.5+.5*Math.sin(A*Y.bs+Y.bp));J.style.transform=`translate(${(ae-Y.size/2).toFixed(1)}px, ${(de-Y.size/2).toFixed(1)}px)`,J.style.opacity=se.toFixed(3),J.style.borderRadius=vl(A,Y.mp),k(J,A,Y.cs),K[U+1]={x:ae,y:de,size:Y.size,o:se}}return K},_=(A,D)=>{for(let G=0;G<Tl.length;G++){const K=d.current[G];if(!K)continue;const[U,Y]=Tl[G],J=D[U],ae=D[Y],de=J&&ae?Math.min(J.o,ae.o):0;if(!J||!ae||de<=.005){K.style.opacity="0";continue}const se=ae.x-J.x,Q=ae.y-J.y,F=Math.hypot(se,Q),q=(J.size+ae.size)/2*UL,T=qm(1-F/q);if(T<=.001){K.style.opacity="0";continue}const O=Math.max(.35,F*.9/wi),X=.3+.4*T;K.style.transform=`translate(${((J.x+ae.x)/2-wi/2).toFixed(1)}px, ${((J.y+ae.y)/2-wi/2).toFixed(1)}px) rotate(${Math.atan2(Q,se).toFixed(3)}rad) scale(${O.toFixed(3)}, ${X.toFixed(3)})`,K.style.opacity=(de*T).toFixed(3),K.style.borderRadius=vl(A,1.1*(G+1)),k(K,A,.23*(G+1))}};if(h){const D=M(2.4,p.clientWidth,p.clientHeight);_(2.4,D);return}let S=null,$=null,R=-1/0,j=0,C=0,P=0;const N=A=>{const D=p.getBoundingClientRect(),G=S===null;S=A.clientX-D.left,$=A.clientY-D.top,R=A.timeStamp,G&&(j=S,C=$)};window.addEventListener("pointermove",N,{passive:!0});let L=0;const E=A=>{L=requestAnimationFrame(E);const D=A/1e3,G=p.clientWidth,K=p.clientHeight,U=M(D,G,K);if(S!==null&&$!==null){j+=(S-j)*Hm,C+=($-C)*Hm;const Y=A-R<OL?PL:IL;P+=(Y-P)*zL,g.style.transform=`translate(${j-xi/2}px, ${C-xi/2}px)`,g.style.opacity=P.toFixed(3),g.style.borderRadius=vl(D,0),k(g,D,0),U[0]={x:j,y:C,size:xi,o:P};for(let J=0;J<ju.length;J++){const ae=s.current[J];if(!ae)continue;const{nx:de,ny:se}=ju[J],Q=de<0?j:de>0?G-j:se<0?C:K-C,F=qm(1-Q/EL);if(F<=.001){ae.style.opacity="0";continue}const q=de!==0?de<0?0:G:j,T=se!==0?se<0?0:K:C,O=yi*(.5-.22*F),X=.55+.45*F;ae.style.transform=`translate(${q+de*O-yi/2}px, ${T+se*O-yi/2}px) scale(${X.toFixed(3)})`,ae.style.opacity=(P*F).toFixed(3),ae.style.borderRadius=vl(D,.9*(J+1)),k(ae,D,.35*(J+1))}}_(D,U)};return L=requestAnimationFrame(E),()=>{cancelAnimationFrame(L),window.removeEventListener("pointermove",N)}},[]),n.jsxs(TL,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[Tl.map((h,p)=>n.jsx(ml,{ref:g=>{d.current[p]=g},style:{width:wi,height:wi,opacity:0}},`bridge-${p}`)),Array.from({length:Al},(h,p)=>n.jsx(ml,{ref:g=>{l.current[p]=g},style:{opacity:0}},`ambient-${p}`)),ju.map((h,p)=>n.jsx(ml,{ref:g=>{s.current[p]=g},style:{width:yi,height:yi,opacity:0}},p)),n.jsx(ml,{ref:i,style:{width:xi,height:xi,opacity:0}})]})}const Vm=.71,Rv=.24,Nv=Pe`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${Rv}em;
`,qL={"Coverage Recovery":to,"Fill Optimization":to,Recruiting:to,Users:to,Attendance:jn,"Attendance Recovery":jn,"Time Off":jn,Scheduling:jn,Compliance:Oi,Onboarding:No,"Payroll Operations":wg,Invoicing:oo,Reporting:Ff,"Marketplace Optimization":Ff,Engagement:Ri,"Autonomous Operations":tc},VL=e=>qL[e]??tc,Gm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],GL=2800,YL=200,KL=6,QL=2200,ji=520;function ZL({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[p,g]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const N=setInterval(()=>l(L=>(L+1)%Gm.length),GL);return()=>clearInterval(N)},[]);const y=Math.min(KL,fl.length),[w,k]=v.useState([]),M=v.useRef(0),_=v.useRef(fl.filter(N=>!N.risk)),S=v.useRef(fl.filter(N=>N.risk)),$=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),R=()=>5+Math.floor(Math.random()*5),j=()=>{const N=$.current,L=S.current;if(L.length>0&&N.sinceRisk>=N.gap)return N.sinceRisk=0,N.gap=R(),L[N.risk++%L.length];N.sinceRisk+=1;const E=_.current;return E.length>0?E[N.routine++%E.length]:L[N.risk++%L.length]},C=N=>N.risk?"risk":Math.random()<.28?"action":"none",P=v.useRef(null);return v.useEffect(()=>{if(fl.length===0){k([]);return}if(o)return;$.current={routine:0,risk:0,sinceRisk:0,gap:R()},M.current=0;const N=Array.from({length:y},()=>{const A=j();return{key:M.current++,event:A,phase:"in",outcome:C(A),resolved:!0}});if(N.length>0){const A=N[N.length-1];A.resolved=!1,P.current={key:A.key,event:A.event,outcome:A.outcome}}else P.current=null;k(N);const L=[],E=setInterval(()=>{var U;const A=j(),D=M.current++,G=C(A),K=P.current;K&&K.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(K.event.id)||(h.current.add(K.event.id),(U=d.current)==null||U.call(d,K.event))),P.current={key:D,event:A,outcome:G},k(Y=>{const J=Y.filter(se=>se.phase!=="leaving"),ae=J.length>=y?J[0].key:null;return[...Y.map(se=>se.key===ae?{...se,phase:"leaving"}:K&&se.key===K.key&&!se.resolved?{...se,resolved:!0}:se),{key:D,event:A,phase:"entering",outcome:G,resolved:!1}]}),L.push(setTimeout(()=>{k(Y=>Y.map(J=>J.key===D?{...J,phase:"in"}:J))},40)),L.push(setTimeout(()=>{k(Y=>Y.filter(J=>J.phase!=="leaving"))},ji))},QL);return()=>{clearInterval(E),L.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,o]),n.jsxs(XL,{children:[n.jsx(Uh,{links:0,tone:"neutral",cornerTone:p?"risk":"default"}),n.jsx(qh,{tone:"neutral"}),n.jsx(JL,{$riskActive:p,"aria-hidden":"true"}),n.jsxs(eA,{children:[n.jsx(tA,{children:n.jsx(it,{mark:"circle",size:YL,tone:"auto",state:"active",coreGradient:p,"aria-label":"Ultron"})}),n.jsx(nA,{children:"Ultron"}),n.jsx(rA,{role:"status","aria-live":"polite",children:n.jsxs(aA,{children:[n.jsx(iA,{children:Gm[s]}),n.jsxs(sA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(cA,{children:i},"deck"):w.length>0&&n.jsx(lA,{"aria-label":"Live event feed",children:w.map(N=>{const L=VL(N.event.capability);return n.jsx(dA,{"data-phase":N.phase,"aria-hidden":N.phase==="leaving"||void 0,children:n.jsx(uA,{children:n.jsxs(hA,{"data-outcome":N.resolved?N.outcome:"pending",children:[n.jsxs(pA,{children:[n.jsx(fA,{"aria-hidden":"true",children:n.jsx(L,{size:16})}),n.jsxs(mA,{children:[n.jsx(wA,{children:N.event.capability}),n.jsx(bA,{children:N.event.title})]})]}),n.jsx(gA,{children:N.resolved?N.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(it,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(vA,{children:"Risk detected"})]}):N.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(it,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(yA,{children:"Action required"})]}):n.jsx(xA,{children:"No action needed"}):n.jsx(it,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},N.key)})},"feed")]})}const XL=f.div`
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
`,JL=f.div`
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
`,Vh=je`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,eA=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Vh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tA=f.div`
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
`,nA=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Nv}
  color: var(--color-content-primary);
`,rA=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,oA=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,aA=f.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${oA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iA=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,Lv=je`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,sA=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Lv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,lA=f.div`
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
  animation: ${Vh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cA=f.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Vh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dA=f.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${ji}ms var(--ease-out, ease),
    opacity ${ji}ms var(--ease-out, ease),
    transform ${ji}ms var(--ease-out, ease);

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
    transition: opacity ${ji}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,uA=f.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,hA=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  /* Glass rather than a flat fill, so the backdrop and glow behind the feed
     refract through each row. */
  ${Hn}
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
`,pA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,fA=f.span`
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
`,mA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,gA=f.div`
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
    animation: ${Lv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const vA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,xA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,yA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,wA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,bA=f.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,kA=5e3,_A=5,El=320,CA=e=>e.status==="needs_approval"||e.status==="recommended";function jA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:p,onReveal:g,onClose:x}){const[y]=v.useState(()=>e.filter(CA).map((L,E)=>({t:L,index:E})).sort((L,E)=>ja[L.t.severity]-ja[E.t.severity]||L.index-E.index).slice(0,_A).map(({t:L})=>L.id)),[w,k]=v.useState(1),[M,_]=v.useState(new Set),[S,$]=v.useState(new Set),R=v.useRef(new Map);v.useEffect(()=>{if(w>=y.length)return;const L=setTimeout(()=>k(E=>E+1),kA);return()=>clearTimeout(L)},[w,y.length]),v.useEffect(()=>{const L=E=>{E.key==="Escape"&&x()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[x]),v.useEffect(()=>{const L=R.current;return()=>{L.forEach(E=>clearTimeout(E))}},[]);const j=y.findIndex(L=>!M.has(L));v.useEffect(()=>{if(y.length>0&&j===-1){const L=setTimeout(x,260);return()=>clearTimeout(L)}},[j,y.length,x]);const C=Math.max(w,j+1);v.useEffect(()=>{y.slice(0,C).forEach(L=>g==null?void 0:g(L))},[C]);const P=(L,E)=>{$(D=>new Set(D).add(L.id));const A=setTimeout(()=>{$(D=>{const G=new Set(D);return G.delete(L.id),G}),_(D=>new Set(D).add(L.id)),R.current.delete(L.id),i(L.id,E)},El);R.current.set(L.id,A)},N=y.length-M.size;return n.jsxs(SA,{role:"region","aria-label":"New cases",children:[n.jsxs(MA,{children:[n.jsx(nn,{children:"Needs your decision"}),n.jsx(Ma,{children:N}),n.jsx(RA,{}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:n.jsx(ba,{size:16})})]}),n.jsx($A,{children:n.jsx(NA,{children:y.slice(0,C).map((L,E)=>{if(M.has(L))return null;const A=e.find(D=>D.id===L);return A?n.jsx(AA,{"data-exiting":S.has(L)||void 0,children:n.jsx(yN,{thread:A,stage:o[L]??0,expanded:E===j,onAction:(D,G)=>P(A,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(L),saved:p.includes(L)})},L):null})})})]})}const SA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,$A=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,MA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,RA=f.div`
  flex: 1;
`,NA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,LA=je`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,AA=f.div`
  animation: ${LA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
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
`,TA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Ym={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},EA=["new","working","done"],IA=280;function PA({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:p,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:M,savedWorkflowIds:_,onSend:S,replyingIds:$,onStop:R,onClose:j,onDetectRisk:C,onRevealNew:P}){const[N,L]=v.useState(!1),E=()=>{N||(L(!0),window.setTimeout(()=>{L(!1),j()},IA))},[A,D]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){D(!1);return}const z=oe=>{if(oe.key!=="t"&&oe.key!=="T"||oe.metaKey||oe.ctrlKey||oe.altKey)return;const fe=oe.target instanceof Element?oe.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||D(ce=>!ce)};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[i]);const G=(z,oe)=>(z.t.status==="analyzing"?1:0)-(oe.t.status==="analyzing"?1:0)||ja[z.t.severity]-ja[oe.t.severity]||z.index-oe.index,K=e.map((z,oe)=>({t:z,index:oe})).filter(({t:z})=>TA[i].includes(z.status)).sort(G).map(({t:z})=>z.id),[U,Y]=v.useState(()=>h??null),J=v.useRef({}),ae=v.useRef(null),de=z=>{var oe;z==="Other"&&((oe=ae.current)==null||oe.focus()),y(z)},se=v.useRef(null),Q=v.useRef(null),[F,q]=v.useState(null),T=v.useRef(void 0);v.useEffect(()=>{var z;if(T.current===void 0){T.current=h;return}!h||h===T.current||(T.current=h,Y(h),(z=J.current[h])==null||z.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const O=EA.includes(i),X=O?h&&K.includes(h)?h:K[0]??null:null;v.useEffect(()=>{var Ae;const z=se.current,oe=Q.current;if(!z||!oe)return;const ce=((Ae=window.matchMedia)==null?void 0:Ae.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ve=160;let be=!0,we=z.scrollHeight;const Le=()=>{be=z.scrollHeight-z.scrollTop-z.clientHeight<=ve};z.addEventListener("scroll",Le,{passive:!0});let De=0;const He=()=>{De=performance.now()};z.addEventListener("pointerdown",He,{passive:!0});const We=new ResizeObserver(()=>{const Fe=z.scrollHeight,Ke=performance.now()-De<500;Fe>we+1&&be&&!Ke&&z.scrollTo({top:Fe,behavior:ce}),we=Fe});return We.observe(oe),()=>{z.removeEventListener("scroll",Le),z.removeEventListener("pointerdown",He),We.disconnect()}},[X,i]),v.useEffect(()=>{if(!O||!X)return;const z=se.current;if(!z)return;const oe=()=>z.scrollTo({top:z.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(oe),ce=[80,240,480].map(ve=>window.setTimeout(oe,ve));return()=>{cancelAnimationFrame(fe),ce.forEach(clearTimeout)}},[X,O]);const W=X?e.find(z=>z.id===X)??null:null,ee=!!W&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(W.status)||O2(W)),le=ee&&W?W:null,B=!(ee&&W&&["needs_approval","recommended","unresolved","monitoring"].includes(W.status))||!!(W!=null&&W.analysisResult);return i==="live"?n.jsx(Km,{$static:!0,children:n.jsx(ZL,{onDetectRisk:C,deckActive:A,deck:A?n.jsx(jA,{threads:e,stageById:o,onAction:g,onRefinement:de,onSaveWorkflow:w,onToggleSaveWorkflow:M,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:P,onClose:()=>D(!1)}):null})},"live"):n.jsxs(Km,{$closing:N,children:[n.jsx(DA,{ref:se,children:O?n.jsx(Qm,{ref:Q,children:X===null?n.jsx(Zm,{role:"status",children:Ym[i]}):(()=>{const z=e.find(Le=>Le.id===X);if(!z)return null;const oe=z.status==="analyzing",fe=z.status==="resolved"||z.status==="auto_resolved",ce=z.status==="in_progress",ve=z.status==="needs_approval"||z.status==="recommended",be=z.status==="monitoring",we=z.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(UA,{children:n.jsx(Im,{thread:z,stage:o[z.id]??0,expanded:ce?!1:B,detachActionable:ee,detachAnalyzing:oe,detachTrail:fe||we,onToggle:()=>{},onClose:E,onDecide:p,onAction:g,onRefinement:de,onSaveWorkflow:w},z.id)}),(oe||ve||ce||fe||be||we)&&n.jsx(SN,{thread:z,outbound:l[z.id]??[],chat:d[z.id]??[],replying:$.includes(z.id),analyzing:oe,footSlot:F,onCompleteRun:()=>x(z.id),saveWorkflowFlagged:k.includes(z.id)||_.includes(z.id),actionCard:le&&le.id===z.id?n.jsx(sv,{thread:le,stage:o[le.id]??0,onAction:g,onRefinement:de,onSaveWorkflow:w,saveIntent:k.includes(le.id),onToggleSaveWorkflow:M,saved:_.includes(le.id),savedConversationally:(d[le.id]??[]).some(Le=>Le.kind==="workflow_saved"),onSend:Le=>S(le.id,Le),replying:$.includes(le.id),onStop:()=>R(le.id)},`action-${le.id}`):void 0},z.id)]})})()}):n.jsx(Qm,{ref:Q,children:K.length===0?n.jsx(Zm,{role:"status",children:Ym[i]}):K.map(z=>{const oe=e.find(fe=>fe.id===z);return oe?n.jsx(WA,{ref:fe=>{J.current[z]=fe},children:n.jsx(Im,{thread:oe,stage:o[z]??0,expanded:U===z,onToggle:()=>Y(fe=>fe===z?null:z),onDecide:p,onAction:g,onRefinement:y,onSaveWorkflow:w})},z):null})})}),O&&X&&W&&n.jsx(FA,{children:n.jsxs(BA,{children:[n.jsx(HA,{ref:q}),W.status==="analyzing"&&!s.includes(W.id)&&n.jsx(_N,{thread:W,onDecide:p}),n.jsx(iv,{ref:ae,onSend:z=>S(X,z),working:$.includes(X),onStop:()=>R(X),placeholder:O$(W.status,$.includes(X))},`composer-${X}`)]})})]},"feed")}const zA=je`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,OA=je`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Km=f.div`
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
    animation: ${OA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Pe`
    animation: ${zA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,DA=f.div`
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
`,FA=f.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,BA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,HA=f.div`
  display: flex;
  &:empty { display: none; }
`,Qm=f.div`
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
`,WA=f.div`
  scroll-margin-top: var(--space-5);
`,UA=f.div`
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
`,Zm=f.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function qA({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,p=e.length===0,g=()=>{const x=s.trim();!x||o||(i(x),l(""))};return n.jsxs(VA,{children:[n.jsx(GA,{children:p?n.jsxs(YA,{children:[n.jsx(KA,{"aria-hidden":"true",children:n.jsx(it,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(QA,{children:"New page"}),n.jsx(ZA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(XA,{children:[e.map((x,y)=>n.jsx(Xm,{"data-from":x.role,children:n.jsx(JA,{"data-from":x.role,children:x.text})},y)),o&&n.jsx(Xm,{"data-from":"ultron",children:n.jsxs(tT,{"aria-label":"Ultron is replying",children:[n.jsx(Su,{}),n.jsx(Su,{}),n.jsx(Su,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(nT,{children:n.jsxs(rT,{onSubmit:x=>{x.preventDefault(),g()},children:[n.jsx(oT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),n.jsx(aT,{children:n.jsx(Ra,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const VA=f.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,GA=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,YA=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,KA=f.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,QA=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,ZA=f.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,XA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Xm=f.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,JA=f.div`
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
`,eT=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,tT=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Su=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${eT} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nT=f.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,rT=f.form`
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
`,oT=f.textarea`
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
`,aT=f.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,iT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Jm(e,o){const i=iT[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const sT=24,e0=.25,lT=Rv-.03;function Gh({className:e}){return n.jsxs(cT,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(dT,{children:n.jsx(it,{mark:"circle",size:sT,tone:"auto",state:"active"})}),"n"]})}const cT=f.span`
  ${Nv}
`,dT=f.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${Vm}em;
  height: ${Vm}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${e0}em;
  margin-right: ${e0+lT}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function uT({onNew:e}){return n.jsxs(hT,{children:[n.jsx(pT,{}),n.jsx(fT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(ac,{size:16})})]})}const hT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,pT=f(Gh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,fT=f.span`
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
`,mT=45;function gT({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const p=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(p)},mT);return()=>clearInterval(p)},[e]);const l=i>=e.length;return n.jsxs(vT,{className:o,children:[e.slice(0,i),!l&&n.jsx(yT,{"aria-hidden":"true",children:"|"})]})}const vT=f.span`
  white-space: nowrap;
`,xT=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,yT=f.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${xT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,$u=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function wT(){const e=v.useMemo(()=>["All",...Array.from(new Set($u.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?$u:$u.filter(l=>l.tag===o);return n.jsx(bT,{children:n.jsxs(kT,{children:[n.jsxs(_T,{children:[n.jsx(it,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(CT,{children:[n.jsx(jT,{children:"Memory"}),n.jsx(ST,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx($T,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(MT,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(RT,{children:s.map((l,d)=>n.jsx(NT,{children:n.jsxs(LT,{children:[n.jsx(AT,{children:l.title}),n.jsx(TT,{children:l.detail})]})},d))})]})})}const bT=f.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,kT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,_T=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,CT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,jT=f.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,ST=f.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,$T=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,MT=f.button`
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
`,RT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,NT=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,LT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,AT=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,TT=f.span`
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
`;const th=[{id:"employees",label:"Employees",icon:n.jsx(to,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(jn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(vh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(No,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Oi,{size:16})}];f.div`
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
`;function ET({collectionId:e}){const o=th.find(i=>i.id===e)??th[0];return n.jsxs(IT,{children:[n.jsxs(PT,{children:[n.jsx(zT,{children:o.label}),n.jsx(Ma,{children:"Account database"})]}),n.jsxs(OT,{role:"status",children:[n.jsx(DT,{"aria-hidden":"true",children:n.jsx(gg,{size:24})}),n.jsxs(FT,{children:[o.label," — demo stub"]}),n.jsxs(BT,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const IT=f.div`
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
`,PT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,zT=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,OT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,DT=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,FT=f.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,BT=f.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function Av({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const HT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",WT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",UT="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",qT="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",VT="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",GT="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",YT="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",KT=560,Tv=320,Mr="cubic-bezier(0.22, 1, 0.36, 1)",Ev=140,Iv={landing:0,workplace:20,loading:40,questions:58},bi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:xg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:Mg,title:"1099",caption:"Independent contractors."},{id:"both",icon:yg,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:jn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:wg,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:$g,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Mi,title:"One location",caption:"A single site."},{id:"multi",icon:yh,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:vh,title:"Client sites",caption:"Out at client locations."}]}];function QT({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[p,g]=v.useState(!1),x=mc(),y=v.useRef(null),w=v.useCallback(N=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{N(),g(!1),y.current=null},x?0:Tv))},[x]);v.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),M=()=>w(()=>i("workplace")),_=N=>{l(L=>({...L,...N})),h(!0),w(()=>i("loading"))},S=N=>{const L={...s,...N};if(l(L),L.companyWebsite){e(L);return}w(()=>i("questions"))},$=N=>e({...s,...N}),R=d?1:o==="landing"?0:.4,[j,C]=v.useState(!1),P=j;return n.jsxs(_E,{children:[n.jsx(Uh,{links:R}),n.jsx(qh,{}),n.jsx(CE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(Av,{size:22})}),n.jsx(jE,{children:n.jsxs(SE,{children:[o!=="landing"&&n.jsx($E,{children:n.jsx(Pv,{children:n.jsx(it,{mark:P?"lines":"magnetic",size:Ev,tone:"auto",state:"active",motionSpeed:P?1.7:1,cellCount:Iv[o],"aria-label":"Ultron"})})}),n.jsxs(RE,{$exiting:p,children:[o==="landing"&&n.jsx(iE,{onNext:M}),o==="workplace"&&n.jsx(gc,{children:n.jsx(cE,{onAnswer:_})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(uE,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:S,onProcessingChange:C}),o==="questions"&&n.jsx(yE,{onComplete:$})]})]})})]})}const ZT="Lead the work that matters.",XT="Show us your company and we'll set up the work.",JT=41e3,t0=[{name:"Levi's Stadium",src:HT},{name:"ProCare HR",src:WT},{name:"Florida Panthers",src:UT},{name:"Express Healthcare",src:qT},{name:"ModSquad",src:VT},{name:"Titan Medical Group",src:GT},{name:"United Staffing Solutions",src:YT}],n0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],eE=6e3;function tE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function nE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function rE(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const oE=[{id:"google",label:"Continue with Google",mark:tE},{id:"microsoft",label:"Continue with Microsoft",mark:nE},{id:"apple",label:"Continue with Apple",mark:rE}];function aE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function iE({onNext:e}){const[o,i]=v.useState(""),[s,l]=v.useState(null),d=v.useRef(null);return v.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(LE,{children:[n.jsx(TE,{children:n.jsxs(EE,{children:[n.jsx(Pv,{children:n.jsx(it,{mark:"magnetic",size:Ev,tone:"auto",state:"active",cellCount:Iv.landing,"aria-label":"Ultron"})}),n.jsx(uI,{children:ZT}),n.jsxs(IE,{children:[n.jsx(hI,{children:XT}),n.jsxs(PE,{"aria-label":"Get started",children:[n.jsx(zE,{children:oE.map(h=>{const p=h.mark;return n.jsx(OE,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(p,{}),onClick:e,children:h.label},h.id)})}),n.jsx(DE,{"aria-hidden":"true",children:n.jsx(FE,{children:"or start with email"})}),n.jsxs(BE,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||aE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(Rr,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(WE,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(HE,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(UE,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(AE,{"aria-hidden":"true"}),n.jsx(sE,{})]})}function sE(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%n0.length),eE);return()=>clearInterval(s)},[]);const i=n0[e];return n.jsx(qE,{children:n.jsxs(VE,{children:[n.jsx(lE,{}),n.jsxs(aI,{children:[n.jsx(iI,{children:`“${i.quote}”`}),n.jsxs(sI,{children:[n.jsx(rr,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(lI,{children:[n.jsx(cI,{children:i.name}),n.jsx(dI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(eI,{children:[n.jsx(tI,{children:"Trusted by frontline operators"}),n.jsxs(rI,{"aria-label":"Operators using Teambridge",children:[n.jsx(r0,{children:t0.map(s=>n.jsx(o0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(r0,{"aria-hidden":"true",children:t0.map(s=>n.jsx(o0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function lE(){const e=kE(JT,1600);return n.jsxs(GE,{children:[n.jsxs(YE,{children:[n.jsx(QE,{"aria-hidden":"true"}),n.jsx(ZE,{children:"Ultron Index · Live"})]}),n.jsx(XE,{children:e.toLocaleString("en-US")}),n.jsx(JE,{children:"pieces of work Ultron performed this week"})]})}function cE({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(wE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(vc,{children:"Where do you work?"}),n.jsx(mI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(Dv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(Fv,{children:[n.jsx(rP,{"aria-hidden":"true",children:n.jsx(wh,{size:18})}),n.jsx(Bv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(Hv,{children:n.jsx(Ra,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(oP,{children:n.jsx(Wv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Mu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],dE=820;function uE({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(pE,{website:e,onDone:i,onProcessingChange:s}):n.jsx(xE,{failedWebsite:o,onDone:i})}const hE=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function pE({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=bE(e),d=Mu.length,[h,p]=v.useState(1),[g,x]=v.useState(!1),y=v.useRef(null),w=mc();v.useEffect(()=>{if(!g)return;const $=window.requestAnimationFrame(()=>{const R=y.current,j=R==null?void 0:R.closest("main");j?j.scrollTo({top:j.scrollHeight,behavior:w?"auto":"smooth"}):R==null||R.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame($)},[g,w]),v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=v.useMemo(()=>j$(e),[e]),M=v.useMemo(()=>hE.reduce(($,R)=>$+k[R].length,0),[k]),_=v.useCallback(()=>{g?o({}):h>=d?x(!0):p($=>Math.min($+1,d))},[h,g,d,o]);v.useEffect(()=>{const $=R=>{R.key.toLowerCase()==="t"&&(R.preventDefault(),_())};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[_]);const S=Mu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(gc,{$wide:!0,onClick:()=>{g||_()},children:[n.jsx(vc,{children:g?"Nearly there! Your free account is taking shape.":`${S}…`},g?"done":S),n.jsx(xc,{children:g?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(_I,{role:"status","aria-live":"polite",$complete:g,children:[n.jsxs($I,{$running:!g,children:[n.jsx(wh,{size:14}),l,g&&n.jsxs(n.Fragment,{children:[n.jsx(MI,{"aria-hidden":"true",children:"·"}),n.jsxs(RI,{children:[n.jsx($n,{size:13})," read ",M," signals"]})]})]}),n.jsx(CI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:Mu.map(($,R)=>{const j=g||R+1<h?"done":R+1===h?"working":"pending";return n.jsx(jI,{"data-status":j,children:j!=="pending"&&n.jsx(SI,{$working:j==="working"})},$)})})]}),n.jsx(gE,{learned:k,host:l,completed:g?d:h-1,done:g}),g&&n.jsxs(n.Fragment,{children:[n.jsx(qI,{children:n.jsx(VI,{children:"Consider it handled."})}),n.jsx(YI,{children:n.jsx(ze,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(dg,{size:16}),children:"Looks good, continue"})}),n.jsx(KI,{children:n.jsx(Wv,{type:"button",onClick:()=>{p(1),x(!1)},children:"Start over"})}),n.jsx(QI,{ref:y,"aria-hidden":"true"})]})]})})}const fE={"Healthcare / Clinical Staffing":bh,"Skilled Trades / Construction Labor":uh,"Warehouse / Logistics & Light Industrial":xh,"Security / Guarding Services":nc,"Home Care / In-Home Support":jg,"Agriculture / Seasonal Labor":gh,"Hospitality / Events Staffing":oc,"Call Center / BPO Staffing":Ri},mE={Business:{icon:Mi,color:"blue"},Workforce:{icon:to,color:"purple"},Operations:{icon:Ng,color:"orange"},Compliance:{icon:Oi,color:"green"}};function gE({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,p]=v.useState(!1),g=fE[e.workforce_type]??yh;return n.jsxs(LI,{children:[n.jsxs(AI,{children:[n.jsx(TI,{children:n.jsxs(II,{children:[n.jsx(PI,{"aria-hidden":"true",children:d?n.jsx(qt,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(g,{size:20}),n.jsx(zI,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:x=>p(x.currentTarget.naturalWidth>=32),onError:()=>p(!1)})]})}),n.jsxs(OI,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(qt,{$w:"240px",$h:"1em"}),n.jsx(qt,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(DI,{children:e.workforce_type}),n.jsx(FI,{children:l.name})]}),n.jsx(BI,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(qt,{$w:"110px",$h:"0.9em"}),n.jsx(qt,{$w:"150px",$h:"0.9em"}),n.jsx(qt,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Ru,{children:[n.jsx(jn,{size:14}),n.jsxs(Nu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(Ru,{children:[n.jsx(Mi,{size:14}),n.jsxs(Nu,{children:["Part of ",l.parent]})]}),n.jsxs(Ru,{children:[n.jsx(dh,{size:14}),n.jsx(Nu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((x,y)=>{const w=i<2,{icon:k,color:M}=mE[x.label]??{icon:Mi,color:"neutral"};return n.jsx(EI,{style:{"--group-i":w?y+1:y},children:w?n.jsxs(n.Fragment,{children:[n.jsx(a0,{"aria-hidden":"true",children:n.jsx(qt,{$w:"20px",$h:"20px",$round:!0})}),n.jsxs(i0,{children:[n.jsx(s0,{as:"div",children:n.jsx(qt,{$w:"112px",$h:"0.95em"})}),n.jsxs(l0,{children:[n.jsx(qt,{$w:"76px",$h:"20px",$round:!0}),n.jsx(qt,{$w:"92px",$h:"20px",$round:!0}),n.jsx(qt,{$w:"64px",$h:"20px",$round:!0})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(a0,{"aria-hidden":"true",children:n.jsx(k,{size:20})}),n.jsxs(i0,{children:[n.jsx(s0,{children:x.label}),n.jsx(l0,{children:x.tags.map(_=>n.jsx(Fn,{size:"sm",variant:"subtle",color:M,children:_},_))})]})]})},`${x.label}-${w?"loading":"ready"}`)})]}),n.jsx(HI,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(c0,{children:[n.jsx(Rg,{size:16}),"Configured for you"]}),n.jsx(WI,{children:e.configured.map(x=>n.jsxs(UI,{children:[n.jsx(Rn,{size:16}),x]},x))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(c0,{as:"div",children:[n.jsx(qt,{$w:"16px",$h:"16px",$round:!0}),n.jsx(qt,{$w:"132px",$h:"0.95em"})]}),n.jsxs(NI,{children:[n.jsx(qt,{$h:"0.85em",$w:"84%"}),n.jsx(qt,{$h:"0.85em",$w:"72%"}),n.jsx(qt,{$h:"0.85em",$w:"78%"}),n.jsx(qt,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const vE=[{icon:bh,label:"Travel nurses"},{icon:oc,label:"Event staff"},{icon:nc,label:"Security guards"},{icon:xh,label:"Warehouse temps"}];function xE({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(gc,{children:[e&&n.jsx(GI,{children:"No problem — let's set it up together."}),n.jsx(vc,{children:"What workforce do you need help with?"}),n.jsx(xc,{children:"Say it in your own words — or grab one of these."}),n.jsx(gI,{children:vE.map(({icon:h,label:p})=>n.jsxs(vI,{type:"button",onClick:()=>o({workforceType:p}),children:[n.jsx(h,{size:16}),p]},p))}),n.jsx(Dv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(Fv,{children:[n.jsx(Bv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(Hv,{children:n.jsx(Ra,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function yE({onComplete:e}){const o=mc(),[i,s]=v.useState(0),l=v.useRef({}),d=bi[i],h=p=>{l.current={...l.current,[d.key]:p.title};const g=i+1;g>=bi.length?e(l.current):s(g)};return n.jsxs(gc,{children:[n.jsx(ZI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":bi.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${bi.length}`,children:bi.map((p,g)=>n.jsx(XI,{"data-filled":g<=i||void 0},p.key))}),n.jsx(vc,{children:d.prompt}),n.jsx(xc,{children:d.sub}),n.jsx(JI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((p,g)=>{const x=p.icon;return n.jsxs(eP,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>h(p),children:[n.jsx(zv,{"aria-hidden":"true",children:n.jsx(x,{size:20})}),n.jsxs(tP,{children:[n.jsx(xI,{children:p.title}),n.jsx(yI,{children:p.caption})]})]},p.id)})})]},d.key)}function wE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function bE(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function kE(e,o){const i=mc(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const p=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/o),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(p))};return d=window.requestAnimationFrame(p),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function mc(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const _E=f.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,CE=f.button`
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
`,jE=f.main`
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
`,SE=f.div`
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
`,$E=f.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Pv=f.span`
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
`,ME=je`
  from { opacity: 1; }
  to   { opacity: 0; }
`,RE=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Pe`
      animation: ${ME} ${Tv}ms var(--ease-in) forwards;
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
`,NE=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,LE=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${NE} 560ms ${Mr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AE=f.div`
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
`,TE=f.div`
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
`,EE=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Yh=je`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,IE=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Yh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,PE=f.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,zE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,OE=f(ze)`
  && {
    width: 100%;
    ${Hn}
  }
`,DE=f.div`
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
`,FE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,BE=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,HE=f(ze)`
  && {
    width: 100%;
  }
`,WE=f(Vg)`
  && [class*='shell'] {
    ${Hn}
  }
  && input {
    background: transparent;
  }
`,UE=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,qE=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Yh} var(--duration-slow) var(--ease-out) both;

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
`,VE=f.div`
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
`,GE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,YE=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,KE=je`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,QE=f.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${KE} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,XE=f.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,JE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,eI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,tI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,nI=je`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,rI=f.div`
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
`,r0=f.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${nI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,o0=f.img`
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
`,oI=je`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,aI=f.figure`
  ${Hn}
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
  animation: ${oI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iI=f.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,sI=f.figcaption`
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
`,lI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,cI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,dI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,uI=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Yh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,pI=je`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,gc=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${pI} ${KT}ms ${Mr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vc=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,xc=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,fI=je`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,mI=f(xc)`
  animation: ${fI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gI=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,vI=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Hn}
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
    ${Mv}
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
`,zv=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,xI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,yI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Ov=je`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,wI=je`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,bI=je`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,kI=je`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,_I=f.div`
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
    opacity 400ms ${Mr} 950ms,
    max-height 400ms ${Mr} 950ms,
    margin-top 400ms ${Mr} 950ms;

  ${e=>e.$complete&&Pe`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,CI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Pe`
    & > * > * {
      animation: ${kI} 900ms ${Mr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,jI=f.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,SI=f.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Pe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${bI} ${dE+380}ms ${Mr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,$I=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,MI=f.span`
  color: var(--color-content-tertiary);
`,RI=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,qt=f.span`
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
  animation: ${wI} 2.2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 7%, transparent);
    animation: none;
  }
`,NI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,LI=f.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Ui=Pe`
  animation: ${Ov} var(--duration-base) ${Mr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,AI=f.div`
  ${Hn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Ui}
`,TI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Ui}
`,EI=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Ui}
`,a0=f.span`
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
  background: var(--color-bg-tertiary);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; }
`,i0=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`,II=f.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,PI=f.span`
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
`,zI=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,OI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,DI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,FI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,BI=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,Ru=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Nu=f.span`
  color: var(--color-content-primary);
`,HI=f.div`
  ${Hn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Ui}
`,s0=f.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,l0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,c0=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,WI=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,UI=f.li`
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
`,qI=f.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Ui}
`,VI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,GI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,YI=f.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,KI=f.div`
  display: flex;
  justify-content: center;
`,QI=f.div`
  width: 100%;
  height: 0;
`,ZI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,XI=f.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,JI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,eP=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Hn}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Ov} var(--duration-base) ${Mr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${zv} {
    margin-bottom: 0;
  }

  &:hover {
    ${Mv}
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
`,tP=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Dv=f.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Hn}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Fv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,nP=je`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,rP=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${nP} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Bv=f.textarea`
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
`,Hv=f(mh)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,oP=f.div`
  margin-top: var(--space-3);
`,Wv=f.button`
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
`;function aP({onEnterApp:e}){return n.jsx(QT,{onComplete:o=>e==null?void 0:e(o)})}const iP=768,Uv=`(max-width: ${iP-1}px)`;function Kh(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function qv(){return Kh(Uv)}const sP="48px",lP="240px",d0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",cP=f.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?lP:sP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Pe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Pe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,dP=f.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,uP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,hP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,pP=f.button`
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
`,fP=f.div`
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
`,mP=f.span`
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
`,u0=f.div`
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
`,Lu=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,gP="var(--gradient-ai)",Vv=f.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Pe`
      background: var(--color-bg-primary, white);
      box-shadow: ${d0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Pe`
      background: ${gP};
      box-shadow: ${d0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Gv=f.button`
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
`,Yv=f.span`
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
`,Kv=f.div`
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
`,vP=f.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Au=f.hr`
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
`;const xP=f.button`
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
`,yP=f.div`
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
`,wP=f.span`
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
`;function Tu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(Vv,{$isActive:l,$isAi:s,children:n.jsxs(Gv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(Kv,{children:[e.hasUnread&&n.jsx(vP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(Yv,{children:e.label}),o&&i&&n.jsx(Ma,{variant:"primary",children:"New"})]})})}function bP({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x}){const[y,w]=v.useState(!1);return n.jsx(cP,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(dP,{$isExpanded:y,children:[n.jsxs(uP,{children:[n.jsxs(pP,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[n.jsx(fP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&n.jsxs(n.Fragment,{children:[n.jsx(mP,{children:s.name}),n.jsx(u0,{children:n.jsx(lm,{})})]})]}),n.jsx(Lu,{children:e.map(k=>n.jsx(Tu,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Au,{}),n.jsx(Lu,{children:o.map(k=>n.jsx(Tu,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),n.jsxs(hP,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Au,{}),n.jsx(Lu,{children:i.map(k=>n.jsx(Tu,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),n.jsx(Au,{}),n.jsx(Vv,{$isActive:!1,children:n.jsxs(Gv,{$isActive:!1,onClick:p,"aria-label":"Settings",title:y?void 0:"Settings",children:[n.jsx(Kv,{children:n.jsx(H2,{})}),y&&n.jsx(Yv,{children:"Settings"})]})}),n.jsxs(xP,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[n.jsx(yP,{$color:l.avatarColor,children:l.initials}),y&&n.jsxs(n.Fragment,{children:[n.jsx(wP,{children:l.name}),n.jsx(u0,{children:n.jsx(lm,{})})]})]})]})]})})}const kP=270,_P=f.nav`
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
`,CP=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,jP=f.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,SP=f.h2`
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
`,$P=f.div`
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
`,MP=f.button`
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
`,RP=f.div`
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
`,NP=f.button`
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
`;const LP=f.span`
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
`,AP=f.div`
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
`,TP=je`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,EP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${TP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Qv=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,IP=je`
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
`,PP=je`
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
`,zP=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,OP=je`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,DP=je`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,nh=420,FP=180,BP=nh-60,HP=f.button`
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
  animation: ${Qv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WP=f.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,UP=f.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${IP} 2.4s ease-in-out infinite;

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
    animation: ${PP} 2.4s ease-out infinite;
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
`,qP=f.div`
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
  font-family: ${zP};
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
`,Zv=f.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${OP} ${nh}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${FP}ms;
    animation-delay: ${nh-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,h0=f.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${DP} 420ms ${BP}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Qv} 200ms both;
    transform: none;
  }
`,p0=f.button`
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
`,VP=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Pe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,GP=f.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,YP=f.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,KP=f.div`
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
`,QP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,ZP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,XP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Xv=f.div`
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
`;function JP(){return n.jsxs(Zv,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function ez(){return n.jsxs(Zv,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function Jv({prompt:e,onDismiss:o,placement:i="right",children:s}){const l=v.useRef(null),[d,h]=v.useState(null);return v.useLayoutEffect(()=>{const p=l.current;if(!p)return;const g=()=>{const w=(p.firstElementChild??p).getBoundingClientRect();h({left:w.left,top:w.top,width:w.width,height:w.height})};g();const x=new ResizeObserver(g);return x.observe(p),window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{x.disconnect(),window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(WP,{ref:l,"aria-hidden":"true",children:s}),d&&Io.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(HP,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(UP,{$mobile:i==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(qP,{$placement:i,role:"status","aria-live":"polite",style:i==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:i==="above"?n.jsxs(n.Fragment,{children:[n.jsx(h0,{children:e}),n.jsx(ez,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(JP,{}),n.jsx(h0,{children:e})]})})]}),document.body)]})}function ex(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function tz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Qh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function nz({item:e}){return n.jsx(Sn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(Xv,{children:e.icon??n.jsx(ex,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Qh})}function rz({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,p=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-p.length;return n.jsxs(VP,{$outlined:e.outlined,children:[n.jsxs(NP,{onClick:()=>i(x=>!x),"aria-expanded":o,children:[n.jsx(AP,{children:o?n.jsx(Mn,{size:16}):n.jsx(Nn,{size:16})}),n.jsx(LP,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(EP,{children:[p.map(x=>{const y=n.jsx(Sn,{label:n.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:n.jsx(Xv,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Qh});return x.spotlightPrompt?n.jsx(Jv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,children:y},x.id):n.jsx(v.Fragment,{children:y},x.id)}),g>0&&n.jsxs(p0,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(p0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function oz({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:p,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=kP,onWidthChange:k,minWidth:M=220,maxWidth:_=520}){const S=y!==void 0,$=v.useRef(null),[R,j]=v.useState(!1);return v.useEffect(()=>{if(!R||!k)return;const C=$.current;if(!C)return;const P=C.getBoundingClientRect().left,N=A=>{const D=Math.min(_,Math.max(M,A.clientX-P));k(D)},L=()=>j(!1);window.addEventListener("mousemove",N),window.addEventListener("mouseup",L);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",L),document.body.style.userSelect=E,document.body.style.cursor=""}},[R,k,M,_]),n.jsxs(_P,{ref:$,$isVisible:o,$width:w,$isResizing:R,"aria-label":"Secondary navigation",children:[n.jsxs(CP,{children:[(e||x)&&n.jsxs(jP,{children:[n.jsx(SP,{children:e}),x]}),d&&!S&&n.jsxs($P,{children:[n.jsx(qg,{size:"sm",placeholder:"Search...",value:h,onChange:C=>p==null?void 0:p(C.target.value)}),n.jsx(MP,{onClick:g,"aria-label":"Filter",children:n.jsx(tz,{})})]})]}),S?y:n.jsxs(RP,{children:[s,i.map(C=>C.type==="single"?n.jsx(nz,{item:C.item},C.item.id):C.type==="group"?n.jsx(rz,{group:C.group},C.group.id):C.type==="divider"?n.jsx(ZP,{},C.id):n.jsx(GP,{children:C.label.label},C.label.id))]}),l.length>0&&n.jsxs(YP,{children:[n.jsx(QP,{}),l.map(C=>n.jsx(Sn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:n.jsx(XP,{children:C.icon??n.jsx(ex,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Qh},C.id))]}),k&&o&&n.jsx(KP,{$isResizing:R,onMouseDown:C=>{C.preventDefault(),j(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const az=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,iz=f.div`
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
`,tx=f.div`
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
`,sz=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,lz=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function cz(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function f0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function m0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function dz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function uz({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:p}){const g=o.filter(w=>w.variant==="secondary"),x=o.filter(w=>w.variant==="primary"),y=Kh("(prefers-color-scheme: dark)");return n.jsxs(az,{$noBorder:l,children:[n.jsx(iz,{children:typeof e=="string"?n.jsx(tx,{children:e}):e}),n.jsxs(sz,{children:[n.jsxs(lz,{children:[n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:p,"aria-label":"More options",title:"More options",children:n.jsx(cz,{})}),g.map(w=>n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(m0,{}),trailingArtwork:n.jsx(f0,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>n.jsx(ze,{variant:"primary",size:"sm",leadingArtwork:n.jsx(m0,{}),trailingArtwork:n.jsx(f0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(dz,{})}),s&&n.jsx(J0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const hz=f.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,pz=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,fz=f.div`
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
`,mz=f.main`
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
`,g0="tb:secondary-nav-width",v0=270,x0=220,y0=520;function gz({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:M,showSearch:_,searchValue:S,onSearchChange:$,onFilterClick:R,headerSlot:j,bodyContent:C,heading:P,actions:N,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:D,onPonderClick:G,onDotsClick:K,children:U,showSecondaryNav:Y=!0,showTopNav:J=!0}){const[ae,de]=v.useState(()=>{if(typeof window>"u")return v0;const se=window.localStorage.getItem(g0),Q=se?parseInt(se,10):NaN;return Number.isFinite(Q)?Math.min(y0,Math.max(x0,Q)):v0});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(g0,String(ae))},[ae]),n.jsxs(hz,{children:[n.jsx(bP,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x}),n.jsxs(pz,{children:[Y&&n.jsx(oz,{heading:y,menuEntries:w,menuHeader:k,pageEntries:M,isVisible:!0,showSearch:_,searchValue:S,onSearchChange:$,onFilterClick:R,headerSlot:j,bodyContent:C,width:ae,onWidthChange:de,minWidth:x0,maxWidth:y0}),n.jsxs(fz,{children:[J&&n.jsx(uz,{heading:P,actions:N,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:D,onPonderClick:G,onDotsClick:K}),n.jsx(mz,{children:U})]})]})]})}function vz({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const p=()=>{const y=h(),w=y-d.current;Math.abs(w)<e||(w>0&&y>o?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",p,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",p)}},[e,o,i]),s}const xz=f.button`
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
`,yz=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,wz=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function w0({label:e,isOpen:o,onClick:i,ariaLabel:s}){return n.jsxs(xz,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[n.jsx(yz,{children:e}),n.jsx(wz,{children:n.jsx(Mn,{size:14})})]})}const bz=f.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,kz=f.div`
  height: 48px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,_z=f.button`
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
`,Cz=f.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,jz=f(Gh)`
  font-size: var(--text-lg, 1.125rem);
`,Sz=f.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function $z({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const Mz=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:h,onSecondaryClick:p,onTertiaryClick:g},x){return n.jsx(bz,{ref:x,$hidden:d,children:n.jsxs(kz,{children:[n.jsx(_z,{onClick:h,"aria-label":"Open navigation",children:n.jsx($z,{size:18})}),n.jsxs(Cz,{children:[n.jsx(w0,{label:i??(o==="Ultron"?n.jsx(jz,{}):o),isOpen:l==="secondary",onClick:p,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(Sz,{"aria-hidden":"true",children:"›"}),n.jsx(w0,{label:s,isOpen:l==="persona",onClick:g??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),Rz=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,Nz=f.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${Rz} 160ms ease-out;
`;function Lz({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(Nz,{onClick:e,"aria-hidden":"true"})}const Az=je`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Tz=f.div`
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
  animation: ${Az} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Ez=f.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,Iz=f.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,Pz=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,zz=f.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Oz=f.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function nx({title:e,children:o,ariaLabel:i,titleAction:s}){return n.jsxs(Tz,{role:"dialog","aria-modal":"true","aria-label":i??(typeof e=="string"?e:void 0),children:[n.jsx(Ez,{children:n.jsx(Iz,{"aria-hidden":"true"})}),e&&n.jsxs(Pz,{children:[n.jsx(zz,{children:e}),s]}),n.jsx(Oz,{children:o})]})}const Zh=f.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Dz=f.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Gl=f.button`
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
`,b0=f.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Yl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,xa=f.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function Fz({moduleLabel:e,entries:o,onSelect:i,onHome:s,onNewPage:l}){const d=e==="Ultron",h=d&&s?n.jsx(Bz,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),i()},children:n.jsx(k0,{})}):n.jsx(k0,{});return n.jsx(nx,{title:d?h:e,ariaLabel:`${e} sections`,titleAction:d&&l?n.jsx(Hz,{type:"button","aria-label":"New page",onClick:()=>{l(),i()},children:n.jsx(ac,{size:16})}):void 0,children:n.jsx(Zh,{children:o.map(p=>{if(p.type==="single"){const x=p.item;return n.jsxs(Gl,{$active:x.isActive,onClick:()=>{var y;(y=x.onClick)==null||y.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Yl,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Kl,{"aria-hidden":"true",children:n.jsx(Rn,{size:16})})]},x.id)}if(p.type!=="group")return null;const g=p.group;return n.jsxs("div",{children:[n.jsx(Dz,{children:g.label}),g.children.map(x=>{const y=n.jsxs(Gl,{$active:x.isActive,$indent:!0,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Yl,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Kl,{"aria-hidden":"true",children:n.jsx(Rn,{size:16})})]});return x.spotlightPrompt?n.jsx(Jv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:y},x.id):n.jsx("div",{children:y},x.id)})]},g.id)})})})}const k0=f(Gh)`
  font-size: 14px;
`,Il="44px",Bz=f.button`
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
`,Hz=f.button`
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
`,Wz=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,Uz=f.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qz=f.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function Vz({personas:e,activeId:o,onSelect:i}){return n.jsx(nx,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Zh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(Gl,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(xa,{as:"span",children:n.jsxs(Wz,{children:[n.jsx(Uz,{children:s.name}),n.jsx(qz,{children:s.role})]})}),l&&n.jsx(Kl,{"aria-hidden":"true",children:n.jsx(Rn,{size:16})})]},s.id)})})})}const Gz=je`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Yz=f.aside`
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
  animation: ${Gz} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,Kz=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,Qz=f.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,Zz=f.button`
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
`,Xz=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Jz=60;function eO({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},p=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<Jz&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",p),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",p)}},[o]),n.jsxs(Yz,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(Kz,{children:[n.jsx(Qz,{children:e??"Navigation"}),n.jsx(Zz,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Pi,{size:18})})]}),n.jsx(Xz,{children:i})]})}const tO=f.span`
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
`,Eu=f(Gl)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function nO({activeId:e,groups:o,user:i,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(eO,{title:"Navigation",onDismiss:h,children:n.jsxs(Zh,{children:[o.map((p,g)=>n.jsxs("div",{children:[g>0&&n.jsx(b0,{"aria-hidden":"true"}),p.items.map(x=>{const y=x.id===e;return n.jsxs(Eu,{$active:y,$disabled:x.disabled,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),d(x.id),h()},"aria-pressed":y,"aria-disabled":x.disabled||void 0,children:[n.jsx(Yl,{children:x.icon}),n.jsx(xa,{children:x.label}),y&&n.jsx(Kl,{"aria-hidden":"true",children:n.jsx(Rn,{size:16})})]},x.id)})]},p.id)),n.jsx(b0,{"aria-hidden":"true"}),n.jsxs(Eu,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Yl,{children:n.jsx(H2,{})}),n.jsx(xa,{children:"Settings"})]}),n.jsxs(Eu,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${i.name}`,children:[n.jsx(tO,{$color:i.avatarColor,"aria-hidden":"true",children:i.initials}),n.jsx(xa,{children:"Account"})]})]})})}const _0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],rO=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,oO=f.main`
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
`;function aO(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:p,onUserClick:g,onSettingsClick:x,onMobileNavigate:y,onSelectPersona:w,onHome:k,onNewPage:M,openSecondaryNav:_,children:S}=e,[$,R]=v.useState(null),j=vz({deadZonePx:8,topThresholdPx:20}),C=$===null&&j==="down",P=v.useMemo(()=>{if(!i)return null;const A=_0.find(D=>D.id===i);return(A==null?void 0:A.name)??null},[i]),N=()=>R(null),L=A=>R(A);v.useEffect(()=>{_&&R("secondary")},[_]);const E=$!==null;return n.jsxs(rO,{children:[n.jsx(Mz,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:P,openOverlay:$,hidden:C,onHamburgerClick:()=>L("drawer"),onSecondaryClick:()=>{L(h.length>0?"secondary":"drawer")},onTertiaryClick:P?()=>L("persona"):void 0}),n.jsx(oO,{children:S}),E&&n.jsx(Lz,{onDismiss:N}),$==="secondary"&&n.jsx(Fz,{moduleLabel:l,entries:h,onSelect:N,onHome:k,onNewPage:M}),$==="persona"&&n.jsx(Vz,{personas:_0,activeId:i,onSelect:A=>{w(A),N()}}),$==="drawer"&&n.jsx(nO,{activeId:o,groups:s,user:p,onUserClick:g,onSettingsClick:x,onSelectModule:A=>y(A),onDismiss:N})]})}function iO(e){if(qv()&&e.mobileNav){const i=e.mobileNav;return n.jsx(aO,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,onHome:i.onHome,onNewPage:i.onNewPage,openSecondaryNav:i.openSecondaryNav,children:e.children})}return n.jsx(gz,{...e})}const sO="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",lO="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",cO=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],dO=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],uO={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},hO=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],pO=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],fO=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function mO(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function rx(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function gO(e){const o=dO.find(i=>i.match.test(e));return o?o.profile:uO}function ox(e,o){const i=gO(e),s=mO(rx(e||"teambridge")^o),l=p=>p[Math.floor(s()*p.length)],d=[],h=new Set;for(;d.length<o;){const p=`${l(hO)} ${l(pO)}`;if(h.has(p))continue;h.add(p);const g=s()<.16;d.push({name:p,role:l(i.roles),location:l(i.locations),tenure:l(fO),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const ax=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],ix=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],vO="Team coverage";function xO(e){var o;return((o=ax.find(i=>i.match.test(e)))==null?void 0:o.shapes)??ix}function C0(e,o="Saturday"){const i=ox(e,8),[s,l,d,h]=i,p=4+rx(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${p} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const yO=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],j0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],sx=["6a–2p","2p–10p","10p–6a"],wO=[4,3,3,4,4,3,3],bO=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],S0={bands:sx,perDay:wO};function kO(e){var o;return e?((o=bO.find(i=>i.match.test(e)))==null?void 0:o.shape)??S0:S0}function rh(e,o){var x;const i=ox(e,12),{bands:s,perDay:l}=kO(o);let d=0;const h=yO.map((y,w)=>{const k=[];for(let M=0;M<l[w];M++){const _=i[d%i.length].name.split(" ")[0];d++,k.push({time:s[M%s.length],who:_})}return{label:y,shifts:k}}),p=lx(h);p>=0&&(h[p].shifts[0]={...h[p].shifts[0],who:"Open",flag:"open"});const g=(x=h[1])!=null&&x.shifts.length?1:h.findIndex(y=>y.shifts.length);return g>=0&&g!==p&&(h[g].shifts[0]={...h[g].shifts[0],flag:"watch"}),h}function _O(e){const o=ax.find(d=>d.match.test(e)),i=(o==null?void 0:o.shapes[0])??ix[0],l=rh(e,i).map((d,h)=>{const p=d.shifts.slice(0,3);for(;p.length<3;){const g=p.length;p.push({time:sx[g],who:`Coverage ${h+1}-${g+1}`})}return{...d,shifts:p}});return{label:(o==null?void 0:o.label)??vO,shape:"Full-week shift coverage",week:l}}function lx(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let i=e.length-1;i>=0;i--)if(e[i].shifts.length)return i;return-1}function $0(e){const o=lx(e);return o>=0?j0[o]:j0[5]}const CO=1100,jO=440,cx=4,dx=2,ux=150,SO=Math.ceil(ux/cx)*dx,Iu=320,$O=720,Pu=2e3,MO=950,M0=1600,hx=249,RO=68,NO=229,LO=47,AO=56,TO=8,EO=hx,IO=8,Xh=84,Ei=81,Ql=48,R0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],oh=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],PO="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",zO='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',N0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",OO="Time for a test run, so you can see how I work? Let's simulate a last minute call out.";function DO(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function FO(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Xh-Ei} rows`,blocks:[{label:"Held for you, none dropped",bullets:oh.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Ei} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function BO(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Ql} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function HO(e,o,i,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},px(i,s),fx(o)]}function WO(e,o,i,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},px(i,s),fx(o)]}function px(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function fx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function UO(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function qO(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function Pl(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function L0(e){return e.includes("	")||e.trim().includes(`
`)}function VO(e){return e.scrollHeight-e.clientHeight>EO}function GO(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function YO(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function KO({text:e}){const o=Math.max(0,e.length-SO);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(i,s)=>n.jsx(RD,{children:i},o+s))]})}function A0({active:e,open:o,closeLabel:i,onClose:s,onScrollToEnd:l,showScrollCue:d=!1,onInsetChange:h,children:p}){const g=e&&o,x=v.useRef(null);v.useEffect(()=>{const w=x.current;if(!g||!w||!h)return;const k=()=>h(w.getBoundingClientRect().height);k();const M=new ResizeObserver(k);return M.observe(w),()=>{M.disconnect(),h(0)}},[g,h]);const y=n.jsxs(pD,{ref:x,$open:o,children:[g&&d&&l&&n.jsx(fD,{type:"button","aria-label":"Scroll to the end of the conversation",onClick:l,children:n.jsx(Mn,{size:18})}),n.jsxs(mD,{$open:o,children:[g&&n.jsx(gD,{type:"button","aria-label":i,onClick:s,children:n.jsx(ba,{size:18})}),p]})]});return g&&typeof document<"u"?Io.createPortal(y,document.body):y}const QO={};function ZO({active:e=!0,answers:o=QO,onContinued:i,onTestRunReady:s,realWorkPromptSignal:l=0}){const d=qv(),[h,p]=v.useState([]),[g,x]=v.useState(""),[y,w]=v.useState([]),[k,M]=v.useState(null),[_,S]=v.useState("roster"),[$,R]=v.useState(!1),[j,C]=v.useState(!1),[P,N]=v.useState(null),[L,E]=v.useState(null),[A,D]=v.useState(null),[G,K]=v.useState(null),[U,Y]=v.useState(""),[J,ae]=v.useState(!1),[de,se]=v.useState(!1),[Q,F]=v.useState("grant"),[q,T]=v.useState(!1),[O,X]=v.useState(!1),[W,ee]=v.useState("delivering"),[le,B]=v.useState(0),[z,oe]=v.useState(-1),[fe,ce]=v.useState(""),[ve,be]=v.useState(!1),[we]=v.useState(()=>{var ne;return typeof window<"u"&&!!((ne=window.matchMedia)!=null&&ne.call(window,"(prefers-reduced-motion: reduce)").matches)}),[Le,De]=v.useState(()=>{var ne;return typeof window<"u"&&!!((ne=window.matchMedia)!=null&&ne.call(window,"(max-width: 600px)").matches)}),[He,We]=v.useState({roster:!1,schedule:!1}),Ae=ne=>We(ge=>({...ge,[ne]:!0})),Fe=_==="roster"?He.roster:_==="schedule"?He.schedule:!0,Ke=Le&&W==="ready"&&_!=="done"&&!Fe,wt=v.useRef([]),Ie=v.useRef(null),st=v.useRef(null),Qe=v.useRef(null),Tt=v.useRef(l),lt=v.useRef(null),xe=v.useRef(null),[Ze,mt]=v.useState(0),Ct=()=>{const ne=xe.current;ne==null||ne.scrollTo({top:ne.scrollHeight,behavior:"smooth"})},[bt,or]=v.useState(!0),Ce=ne=>{or(ne.scrollHeight-ne.scrollTop-ne.clientHeight<=IO)},Xe=v.useMemo(()=>{var ne;return((ne=o.workforceType)==null?void 0:ne.trim())||Pl(o.companyWebsite)||""},[o]),gt=v.useMemo(()=>xO(Xe),[Xe]),jt=v.useMemo(()=>_O(Xe),[Xe]),mn=v.useMemo(()=>{const ne=Pl(o.companyWebsite),ke=[{kind:"text",text:`Welcome to your ${ne?`${ne} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return ke.push({kind:"text",text:PO}),ke.push({kind:"rosterCta"}),ke},[o]),Ln=(ne,ge)=>{wt.current.push(window.setTimeout(ge,ne))};v.useEffect(()=>()=>{wt.current.forEach(ne=>window.clearTimeout(ne)),Ie.current&&window.clearTimeout(Ie.current),Qe.current&&window.clearTimeout(Qe.current)},[]);const co=ne=>{const ge=ne.scrollTop;X(ke=>ke?ge>TO:ge>AO&&VO(ne))};v.useEffect(()=>{var ke;const ne=(ke=window.matchMedia)==null?void 0:ke.call(window,"(max-width: 600px)");if(!ne)return;const ge=()=>De(ne.matches);return ge(),ne.addEventListener("change",ge),()=>ne.removeEventListener("change",ge)},[]);const Nr=ne=>{if(N({file:ne,state:"uploading",progress:8}),we){N({file:ne,state:"uploading",progress:92});return}Ln(180,()=>N({file:ne,state:"uploading",progress:38})),Ln(460,()=>N({file:ne,state:"uploading",progress:74})),Ln(780,()=>N({file:ne,state:"uploading",progress:92}))},Lr=ne=>{if(E({file:ne,state:"uploading",progress:8}),we){E({file:ne,state:"complete",progress:100});return}Ln(180,()=>E({file:ne,state:"uploading",progress:38})),Ln(460,()=>E({file:ne,state:"uploading",progress:74})),Ln(780,()=>E({file:ne,state:"complete",progress:100}))};v.useEffect(()=>{if(we){B(mn.length),oe(-1),ee("ready");return}const ne=[];let ge=null;const ke=(Oe,Yt)=>{ne.push(window.setTimeout(Yt,Oe))},at=Oe=>{if(Oe>=mn.length){be(!1),ee("ready");return}be(!0),ke(jO,()=>{be(!1),oe(Oe);const Yt=mn[Oe];if(Yt.kind!=="text"){ke($O,()=>{B(Oe+1),oe(-1),ke(Iu,()=>at(Oe+1))});return}ce("");const et=Yt.text;let Ht=0;ge=window.setInterval(()=>{Ht=Math.min(et.length,Ht+dx),ce(et.slice(0,Ht)),Ht>=et.length&&(ge&&window.clearInterval(ge),ge=null,ke(Iu,()=>{B(Oe+1),oe(-1),ce(""),ke(Iu,()=>at(Oe+1))}))},cx)})};return ee("delivering"),at(0),()=>{ne.forEach(Oe=>window.clearTimeout(Oe)),ge&&window.clearInterval(ge)}},[mn,we]),v.useEffect(()=>{l<=Tt.current||(Tt.current=l,Qe.current&&window.clearTimeout(Qe.current),Y(""),ae(!1),se(!1),T(!0))},[l]),v.useEffect(()=>{const ne=ge=>{const ke=ge.target,at=(ke==null?void 0:ke.isContentEditable)||(ke==null?void 0:ke.tagName)==="INPUT"||(ke==null?void 0:ke.tagName)==="TEXTAREA"||(ke==null?void 0:ke.tagName)==="SELECT";!e||at||ge.metaKey||ge.ctrlKey||ge.altKey||ge.key.toLowerCase()!=="m"||(ge.preventDefault(),T(!0))};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[e]);const qi=()=>{ae(!0),Qe.current&&window.clearTimeout(Qe.current),Qe.current=window.setTimeout(()=>T(!1),M0)},Vi=()=>{se(!0),Qe.current&&window.clearTimeout(Qe.current),Qe.current=window.setTimeout(()=>T(!1),M0)};v.useEffect(()=>{var ne;e&&(Ze>0?Ct():(ne=lt.current)==null||ne.scrollIntoView({block:"end",behavior:"smooth"}))},[e,h,k,W,le,z,fe,ve,Ze]),v.useEffect(()=>{e||T(!1)},[e]);const Gi=(g.trim().length>0||y.length>0)&&k===null,Ea=ne=>{const ge=Array.from(ne,ke=>ke.name);w(ke=>[...ke,...ge.filter(at=>!ke.includes(at))])},Yi=ne=>w(ge=>ge.filter(ke=>ke!==ne)),pr=(ne,ge={})=>{const ke=we?300:ge.workingMs??CO,at=we?200:MO;M(ge.workingLabel??"");let Oe=0;const Yt=()=>{var gn;Ie.current&&(window.clearTimeout(Ie.current),Ie.current=null);const et=ne[Oe];if(!et)return;const Ht=Oe===ne.length-1;if(Oe+=1,p(es=>[...es,et]),Ht){M(null),st.current=null,(gn=ge.then)==null||gn.call(ge);return}M(""),Ie.current=window.setTimeout(Yt,at)};st.current=Yt,Ie.current=window.setTimeout(Yt,ke)},Ki=()=>{var ne;Le&&((ne=st.current)==null||ne.call(st))},Wn=(ne,ge=[])=>{h.some(ke=>ke.role==="operator")||i==null||i(),p(ke=>[...ke,{role:"operator",text:ne,...ge.length?{attachments:ge}:{}}])},uo=(ne,ge)=>{R(!1),C(!0),Ae("roster"),ge&&Nr(ge),pr([{role:"ultron",activity:FO(ne),text:`Got it — read ${ne}: ${Xh} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ei} people in. ${N0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Pu,then:()=>S("schedule")})},ho=()=>{R(!0),C(!0),Ae("roster"),pr([{role:"ultron",activity:BO(Xe),text:`Done — I spun up ${Ql} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:N0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Pu,then:()=>S("schedule")})},yc=ne=>{const ge=rh(Xe,ne);D({problems:C0(Xe,$0(ge)),week:ge}),K(ne)},Un=ne=>{Ae("schedule"),ne.cardFile&&Lr(ne.cardFile);const ge=rh(Xe,ne.shape),ke=C0(Xe,$0(ge));D({problems:ke,week:ge}),K(ne.shape??null);const at=ge.reduce((Ht,gn)=>Ht+gn.shifts.length,0),Oe=ge.filter(Ht=>Ht.shifts.length>0).length,Yt=ne.fileName?`Read ${ne.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${ne.shape.toLowerCase()}. Here's what's in it.`,et=ne.fileName?HO(ne.fileName,ke.length,at,Oe):WO(ne.shape.toLowerCase(),ke.length,at,Oe);pr([{role:"ultron",activity:et,text:Yt},{role:"ultron",text:"",card:"week"},{role:"ultron",text:OO}],{workingLabel:ne.fileName?"Turning it into shifts…":"Building your week…",workingMs:Pu,then:()=>{S("done"),s==null||s()}})},Oo=(ne,ge=[])=>{if(!ne&&ge.length===0||k!==null)return;if(Wn(ne,ge),_==="roster"){ge.length>0?uo(ge[0]):L0(ne)?uo("your pasted roster"):pr([{role:"ultron",activity:UO("roster"),text:zO}]);return}if(_==="schedule"){ge.length>0?Un({fileName:ge[0]}):L0(ne)?Un({fileName:"your pasted schedule"}):Un({shape:ne});return}const ke=h.filter(at=>at.role==="ultron").length;pr([{role:"ultron",activity:qO(),text:Oh(ne,ke)}])},Ar=()=>{const ne=g.trim();!ne&&y.length===0||k!==null||(Oo(ne,y),x(""),w([]))},Ia=ne=>{if(!ne||ne.length===0||_!=="roster"||k!==null)return;const ge=Array.from(ne),ke=ge.map(at=>at.name);Wn("",ke),uo(ke[0],{name:ge[0].name,type:ge[0].type,size:ge[0].size})},wc=ne=>{if(!ne||ne.length===0||_!=="schedule"||k!==null)return;const ge=Array.from(ne),ke=ge.map(at=>at.name);Wn("",ke),Un({fileName:ke[0],cardFile:{name:ge[0].name,type:ge[0].type,size:ge[0].size}})},Qi=k!==null?[]:_==="roster"?[{icon:to,label:"No roster handy? Use sample teammates",onTap:()=>{Wn("Use sample teammates"),ho()}}]:_==="schedule"?gt.map(ne=>({icon:jn,label:ne,onTap:()=>{Wn(ne),Un({shape:ne})}})):[],Zi=_!=="done"&&Qi.length>0?n.jsx(YF,{"aria-label":"Suggestions",children:Qi.map(({icon:ne,label:ge,onTap:ke})=>n.jsxs(H0,{type:"button",$browseSized:!0,onClick:ke,children:[ne&&n.jsx(ne,{size:14}),ge]},ge))}):null,fr=_==="roster"?"Attach your roster, or ask Ultron anything…":_==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…",Et=Q==="waitlist",Xi=Et?de:J,Ji=U.length>=10;return n.jsxs(eD,{children:[!d&&n.jsxs(n.Fragment,{children:[n.jsx(Uh,{links:1}),n.jsx(qh,{})]}),n.jsx(tD,{$condensed:O,children:n.jsxs(nD,{$condensed:O,children:[n.jsxs(rD,{$condensed:O,role:"img","aria-label":"Ultron",children:[n.jsx(T0,{$show:!O,"aria-hidden":"true",children:n.jsx(it,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(T0,{$show:O,$compact:!0,"aria-hidden":"true",children:n.jsx(it,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(oD,{$condensed:O,children:[n.jsx(aD,{$condensed:O,children:"Welcome"}),n.jsx(iD,{$condensed:O,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(sD,{ref:xe,onScroll:ne=>{co(ne.currentTarget),Ce(ne.currentTarget)},children:n.jsxs(ND,{$bottomInset:Ze,children:[n.jsx(yl,{"data-from":"ultron",children:n.jsxs(zu,{children:[(z>=0||le>0)&&n.jsx(I0,{children:n.jsx(ql,{milestones:DO(Pl(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),mn.slice(0,z>=0?z+1:le).map((ne,ge)=>{if(ne.kind==="rosterCta"){const at=_==="roster"&&!j;return n.jsx(v.Fragment,{children:n.jsx(E0,{children:n.jsx(A0,{active:e&&_==="roster",open:Ke&&_==="roster",closeLabel:"Close roster uploader",onClose:()=>Ae("roster"),onScrollToEnd:Ct,showScrollCue:!bt,onInsetChange:mt,children:j?_==="roster"?P?n.jsx(xl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:P.state,progress:P.progress,file:P.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(wl,{children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(to,{size:16})}),n.jsxs(kl,{children:[n.jsx(_l,{children:"Roster"}),n.jsx(Cl,{children:k||($?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(z0,{})})]}):n.jsxs(wl,{$done:!0,children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(Du,{size:16})}),n.jsxs(kl,{children:[n.jsx(_l,{children:"Roster"}),n.jsx(Cl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx($n,{size:18})})]}):n.jsxs(yx,{children:[at&&!P&&n.jsx(vD,{"aria-hidden":"true",children:n.jsx(xD,{children:[...R0,...R0].map((Oe,Yt)=>n.jsx(yD,{children:n.jsx("img",{src:Oe.photo,alt:""})},`${Oe.name}-${Yt}`))})}),n.jsx(xl,{"data-roster-flow":at&&!P?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(P==null?void 0:P.state)??"empty",progress:(P==null?void 0:P.progress)??0,file:(P==null?void 0:P.file)??null,disabled:k!==null&&!P,footerSlot:at&&W==="ready"?Zi:void 0,onFileSelect:Oe=>Ia([Oe]),onClear:()=>{}})]})})})},`beat-${ge}`)}const ke=ge===z;return n.jsx(P0,{"data-from":"ultron",children:ke?n.jsx(KO,{text:fe}):ne.text},`beat-${ge}`)}),ve&&n.jsx($D,{children:n.jsx(B0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(it,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),h.map((ne,ge)=>{const ke=ne.activity?n.jsx(I0,{children:n.jsx(ql,{milestones:ne.activity,collapsed:!0,hideActions:!0})}):null;if(ne.card)return n.jsx(yl,{"data-from":"ultron",children:n.jsxs(zu,{children:[ke,n.jsx(E0,{$pop:ne.card==="week",children:ne.card==="roster"?n.jsx(XO,{sample:$}):ne.card==="scheduleCta"?n.jsx(A0,{active:e&&_==="schedule",open:Ke&&_==="schedule",closeLabel:"Close schedule uploader",onClose:()=>Ae("schedule"),onScrollToEnd:Ct,showScrollCue:!bt,onInsetChange:mt,children:_==="schedule"?L?n.jsx(xl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:L.state,progress:L.progress,file:L.file,onFileSelect:()=>{},onClear:()=>{}}):k!==null?n.jsx(cD,{children:n.jsxs(wl,{children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(jn,{size:16})}),n.jsxs(kl,{children:[n.jsx(_l,{children:"Schedule"}),n.jsx(Cl,{children:k||"Building your week…"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx(z0,{})})]})}):n.jsxs(hD,{children:[n.jsx(bD,{role:"img","aria-label":`${jt.label}: ${jt.shape}`,children:n.jsx(kD,{children:jt.week.map((Oe,Yt)=>{const et=jt.week.slice(0,Yt).reduce((Ht,gn)=>Ht+gn.shifts.length,0);return n.jsxs(_D,{children:[n.jsx(CD,{children:Oe.label.slice(0,1)}),Oe.shifts.length?Oe.shifts.map((Ht,gn)=>n.jsx(jD,{$sequence:et+gn,$flag:Ht.flag},`${Ht.time}-${gn}`)):n.jsx(SD,{})]},Oe.label)})})}),n.jsx(xl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:Zi,onFileSelect:Oe=>wc([Oe]),onClear:()=>{}})]}):n.jsxs(wl,{$done:!0,children:[n.jsx(bl,{"aria-hidden":"true",children:n.jsx(Du,{size:16})}),n.jsxs(kl,{children:[n.jsx(_l,{children:"Schedule"}),n.jsx(Cl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(jl,{"aria-hidden":"true",children:n.jsx($n,{size:18})})]})}):A?n.jsxs(n.Fragment,{children:[n.jsx(JO,{problems:A.problems,week:A.week}),n.jsx(GF,{"aria-label":"Try another schedule",children:gt.map(Oe=>n.jsxs(H0,{type:"button",$active:Oe===G,"aria-pressed":Oe===G,onClick:()=>yc(Oe),children:[n.jsx(jn,{size:14}),Oe]},Oe))})]}):null})]})},ge);const at=n.jsxs(JF,{"data-from":ne.role,children:[ne.text&&n.jsx(P0,{"data-from":ne.role,children:ne.text}),ne.attachments&&n.jsx(eB,{children:ne.attachments.map(Oe=>n.jsxs(W0,{children:[n.jsx(oo,{size:14}),Oe]},Oe))})]});return n.jsx(yl,{"data-from":ne.role,children:ke?n.jsxs(zu,{children:[ke,at]}):at},ge)}),k!==null&&n.jsx(yl,{"data-from":"ultron",children:n.jsx(FF,{type:"button",onClick:Ki,disabled:!Le,"aria-label":k?`${k} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(DF,{children:[n.jsx(B0,{"aria-hidden":"true",children:n.jsx(it,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),k&&n.jsx(HF,{role:"status","aria-live":"polite",children:k})]})})}),n.jsx("div",{ref:lt})]})}),W==="ready"&&!Ke&&n.jsxs(WF,{children:[n.jsx(UF,{role:"img","aria-label":"Ultron","aria-hidden":k!==null,children:n.jsx(qF,{"aria-hidden":"true",children:n.jsx(VF,{$show:k===null,children:n.jsx(it,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),n.jsxs(KF,{onSubmit:ne=>{ne.preventDefault(),Ar()},children:[y.length>0&&n.jsx(ZF,{"aria-label":"Files to send",children:y.map(ne=>n.jsxs(W0,{children:[n.jsx(oo,{size:14}),ne,n.jsx(XF,{type:"button","aria-label":`Remove ${ne}`,onClick:()=>Yi(ne),children:n.jsx(ba,{size:12})})]},ne))}),n.jsxs(QF,{children:[n.jsx(U0,{children:n.jsx(Ag,{state:"idle",onSelect:Ea})}),n.jsx(tB,{rows:1,value:g,placeholder:fr,"aria-label":"Message Ultron",inputMode:"text",autoComplete:"off",onChange:ne=>x(ne.target.value),onKeyDown:ne=>{ne.key==="Enter"&&!ne.shiftKey&&(ne.preventDefault(),Ar())},onPaste:ne=>{var ke;const ge=(ke=ne.clipboardData)==null?void 0:ke.files;ge&&ge.length>0&&(ne.preventDefault(),Ea(ge))}}),n.jsx(U0,{children:n.jsx(Ra,{state:Gi?"ready":"disabled-invalid",onSend:Ar})})]})]})]}),n.jsx(xF,{}),n.jsxs(zg,{open:q,onClose:()=>T(!1),size:"lg","aria-label":`${Et?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(yF,{children:[n.jsx(bF,{"aria-hidden":"true",children:n.jsx(Av,{size:300})}),n.jsx(kF,{type:"button","aria-label":"Close",onClick:()=>T(!1),children:n.jsx(ba,{size:18})}),n.jsxs(_F,{children:[n.jsx(CF,{"aria-hidden":"true"}),Et?"Ultron early access":"Your welcome grant"]}),!Et&&n.jsxs(jF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(SF,{children:[n.jsx($F,{children:"$"}),"1,000"]}),n.jsxs(MF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(RF,{$prominent:Et,children:Et?"Be first when access opens.":"Ready to see the real work?"}),n.jsx(NF,{children:Et?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered."}),n.jsx(LF,{"aria-label":Et?"Waitlist benefits":"Grant benefits",children:Et?n.jsxs(n.Fragment,{children:[n.jsx(pa,{children:"Priority access"}),n.jsx(pa,{children:"One text when ready"}),n.jsx(pa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(pa,{children:"100,000 credits"}),n.jsx(pa,{children:"Up to 3 months"}),n.jsx(pa,{children:"You approve every action"})]})}),Xi?n.jsxs(zF,{role:"status",children:[n.jsx($n,{size:20}),Et?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live."]}):n.jsxs(AF,{onSubmit:ne=>{ne.preventDefault(),Ji&&(Et?Vi():qi())},children:[n.jsx(TF,{htmlFor:"welcome-grant-phone",children:Et?"Where should we send your access text?":"Where should we text your invite?"}),n.jsxs(EF,{children:[n.jsx(IF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",minLength:10,maxLength:15,value:U,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:ne=>Y(ne.target.value.replace(/\D/g,""))}),n.jsx(PF,{type:"submit",variant:"tertiary",size:"lg",disabled:!Ji,children:Et?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(OF,{children:Et?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(wF,{type:"button",onClick:()=>{Qe.current&&window.clearTimeout(Qe.current),F(ne=>ne==="grant"?"waitlist":"grant")},children:["Demo: show ",Et?"welcome grant":"waitlist"]})]})]})}function XO({sample:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(!0),d=cO.slice(0,6),h=(e?Ql:Ei)-d.length;return n.jsxs(bx,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(AD,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(p=>!p),children:[e?n.jsx(TD,{children:n.jsxs(ED,{children:[Ql," sample teammates, ready to run a full week"]})}):n.jsxs(ID,{children:[n.jsxs(PD,{children:[Ei," ",n.jsxs(zD,{children:["/",Xh]})]}),n.jsxs(OD,{children:[n.jsx($n,{size:16})," imported clean"]})]}),n.jsx(ah,{$open:s,"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]}),s&&n.jsxs(DD,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((p,g)=>n.jsxs(FD,{$i:g,children:[n.jsxs(BD,{"aria-hidden":"true",children:[GO(p.name),n.jsx("img",{src:YO(g),alt:"",loading:"lazy",onError:x=>{x.currentTarget.style.display="none"}})]}),n.jsxs(HD,{children:[n.jsx(WD,{children:p.name}),n.jsxs(UD,{children:[p.role," · ",p.tenure]})]}),p.credentialStatus==="expiring"?n.jsxs(Fn,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[p.credential," · ",p.expiresInDays,"d"]}):n.jsx(Fn,{size:"sm",variant:"subtle",color:"green",children:p.credential}),e&&n.jsx(Fn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},p.name)),n.jsx(qD,{children:e?`+ ${h} more · every one tagged “Sample”`:`+ ${h} more imported clean`})]}),!e&&n.jsxs(VD,{children:[n.jsxs(GD,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(p=>!p),children:[n.jsxs(YD,{children:[oh.length," rows kept for review"]}),n.jsxs(KD,{children:[n.jsx(kx,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsx(ah,{$open:o,"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]})]}),o&&n.jsx(_x,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:oh.map(p=>n.jsxs(Cx,{children:[n.jsx(ZD,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsxs(jx,{children:[n.jsx(XD,{children:p.where}),n.jsx(JD,{children:p.reason})]})]},p.where))})]})]})}function JO({problems:e,week:o}){const[i,s]=v.useState(!1),l=o.map((p,g)=>o.slice(0,g).reduce((x,y)=>x+y.shifts.length,0)),d=o.filter(p=>p.shifts.length>0).length,h=o.reduce((p,g)=>p+g.shifts.length,0);return n.jsxs(bx,{"aria-label":"Your week",children:[n.jsxs(eF,{children:[n.jsxs(nF,{children:[n.jsxs(O0,{children:[n.jsx(D0,{children:d})," days"]}),n.jsx(rF,{"aria-hidden":"true",children:"·"}),n.jsxs(O0,{children:[n.jsx(D0,{children:h})," shifts"]})]}),n.jsxs(tF,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(p=>!p),children:[n.jsx(kx,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsx(ah,{$open:i,"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]})]}),i&&n.jsx(QD,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((p,g)=>n.jsxs(Cx,{children:[n.jsx(oF,{$kind:p.kind,"aria-hidden":"true",children:p.kind==="missing"?n.jsx(jn,{size:15}):n.jsx(wa,{size:15})}),n.jsxs(jx,{children:[n.jsxs(aF,{children:[p.worker," · ",p.role]}),n.jsx(iF,{children:p.detail})]})]},`${p.worker}-${g}`))}),n.jsx(sF,{children:n.jsx(lF,{role:"table","aria-label":"Next week's shifts",children:o.map((p,g)=>n.jsxs(cF,{role:"column",children:[n.jsx(dF,{children:p.label}),p.shifts.map((x,y)=>n.jsxs(uF,{$flag:x.flag,$sequence:l[g]+y,children:[n.jsx(hF,{children:x.time}),n.jsx(pF,{children:x.who})]},`${p.label}-${y}`))]},p.label))})})]})}const eD=f.div`
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
`,mx="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",gx=Pe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${mx};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,vx=e=>Pe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${mx}, transparent);
  pointer-events: none;
`,tD=f.header`
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
    ${gx}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${vx("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,Vt="320ms",Gt="cubic-bezier(0.22, 1, 0.36, 1)",nD=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?RO:hx}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${Vt} ${Gt};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?LO:NO}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,rD=f.span`
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
    top ${Vt} ${Gt},
    left ${Vt} ${Gt},
    width ${Vt} ${Gt},
    height ${Vt} ${Gt},
    transform ${Vt} ${Gt};

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
`,T0=f.span`
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
`,oD=f.div`
  display: contents;
`,aD=f.span`
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
  color: #000;
  white-space: nowrap;
  transition:
    top ${Vt} ${Gt},
    left ${Vt} ${Gt},
    transform ${Vt} ${Gt},
    font-size ${Vt} ${Gt},
    line-height ${Vt} ${Gt},
    letter-spacing ${Vt} ${Gt};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"7px":"168px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,iD=f.span`
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
    top ${Vt} ${Gt},
    left ${Vt} ${Gt},
    transform ${Vt} ${Gt},
    font-size ${Vt} ${Gt},
    line-height ${Vt} ${Gt};

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
`,sD=f.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,zo=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,xx=je`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,lD=je`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,E0=f.div`
  animation: ${e=>e.$pop?xx:zo}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cD=f.div`
  transform-origin: center bottom;
  animation: ${xx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dD=je`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,uD=je`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,yx=f.div`
  position: relative;
  width: 100%;
`,hD=f(yx)``,wx=je`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,pD=f.div`
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
`,fD=f.button`
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
  ${Hn}
  /* Denser than the sheet's own glass. The card is large enough that a 50% fill
     still reads as a surface, but at 44px the thread's prose runs straight
     behind the chevron and turns it to mud — this stays glass (same blur, same
     edge) while giving the glyph a field to sit on. */
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  /* Rises with the card rather than with a shared wrapper — see the shell. */
  animation: ${wx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

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
`,mD=f.div`
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
      ${Hn}
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
      animation: ${wx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gD=f.button`
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
`,vD=f.div`
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
`,xD=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${uD} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yD=f.span`
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
`,wD=je`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,bD=f.div`
  position: absolute;
  z-index: 2;
  top: var(--space-4);
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
    top: var(--space-2);
    width: 218px;
    padding: 6px 8px 7px;
  }
`,kD=f.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,_D=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,CD=f.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,jD=f.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${wD} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SD=f.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,xl=f(Wg)`
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
    min-height: 204px;
    padding-top: 82px;
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
    animation: ${dD} 300ms var(--ease-out) both;
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

    &&[data-schedule-flow][data-state='empty'] {
      min-height: 176px;
      padding: 70px var(--space-4) var(--space-4);
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
`,$D=f.div`
  display: flex;
  justify-content: flex-start;
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MD=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,RD=f.span`
  animation: ${MD} ${ux}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,I0=f.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,ND=f.div`
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
`,yl=f.div`
  display: flex;
  animation: ${zo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zu=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,P0=f.div`
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
    /* One step up from the desktop --text-sm. The thread is the whole screen on
       a phone and its prose is the longest read in the flow — 14px is a UI size,
       fine in a dense sidebar next to other chrome, but thin for paragraphs held
       at arm's length. 16px is the phone's reading size. Line height comes down
       a touch from --line-height-relaxed to stop the taller type from spreading
       each turn out. */
    font-size: var(--text-base);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,wl=f.div`
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
    ${Hn}
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
`,bl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,kl=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,_l=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,Cl=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,LD=je`
  to { transform: rotate(360deg); }
`,z0=f.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${LD} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,jl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,bx=f.div`
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
`,AD=f.button`
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
`,TD=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,ED=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,ID=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,PD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,zD=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,OD=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,DD=f.div`
  display: flex;
  flex-direction: column;
`,FD=f.div`
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
`,BD=f.span`
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
`,HD=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,WD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,UD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,VD=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,GD=f.button`
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
`,YD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,KD=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,kx=f.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,ah=f.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,_x=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${zo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QD=f(_x)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,Cx=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,ZD=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,jx=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,XD=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,JD=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,eF=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,tF=f.button`
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
`,nF=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,O0=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,D0=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,rF=f.span`
  color: var(--color-content-tertiary);
`,oF=f.span`
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
`,aF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,iF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,sF=f.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,lF=f.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,cF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,dF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,uF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${lD} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
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
`,hF=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,pF=f.span`
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
`,F0="cubic-bezier(0.22, 1, 0.36, 1)",fF=je`
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
`,mF=je`
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
`,gF=je`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,vF=je`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,xF=E2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${fF} 440ms ${F0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${gF} 560ms ${F0} both;
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
    animation: ${mF} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${vF} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,yF=f.section`
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
`,wF=f.button`
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
`,bF=f.div`
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
`,kF=f.button`
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
`,_F=f.span`
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
`,CF=f.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,jF=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,SF=f.div`
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
`,$F=f.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,MF=f.span`
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
`,RF=f.h2`
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
`,NF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,LF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,pa=f.span`
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
`,AF=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,TF=f.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,EF=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,IF=f.input`
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
`,PF=f(ze)`
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
`,zF=f.div`
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
`,OF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,B0=f.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,DF=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,FF=f.button`
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
`,BF=je`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,HF=f.span`
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
  animation: ${BF} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,WF=f.div`
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
    ${gx}
  }
  &::after {
    ${vx("up")}
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
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UF=f.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,qF=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,VF=f.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,GF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,YF=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,H0=f.button`
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
`,KF=f.form`
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
`,QF=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,ZF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,W0=f.span`
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
`,XF=f.button`
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
`,JF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,eB=f.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,tB=f.textarea`
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
`,U0=f.div`
  flex-shrink: 0;
`;function nB(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function rB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function oB(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=rB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=nB(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const ih="ultron-theme";function aB(){if(typeof window>"u")return null;const e=window.localStorage.getItem(ih);return e==="light"||e==="dark"?e:null}function iB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function sB(){const e=Kh("(prefers-color-scheme: dark)"),[o,i]=v.useState(aB);v.useEffect(()=>{iB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(ih,o):window.localStorage.removeItem(ih))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const lB="calc(env(safe-area-inset-top, 0px) + 49px)",cB=f.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${Uv} {
    top: calc(${lB} + var(--space-3));
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
`;function dB(){const{theme:e,toggle:o}=sB(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(cB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(gh,{size:18}):n.jsx(Sg,{size:18})})}const q0=[{id:"ultron",label:"Ultron",icon:n.jsx(it,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(H$,{})},{id:"engaged",label:"Engage",icon:n.jsx(W$,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(U$,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(q$,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(V$,{})}],V0=[{id:"apps",label:"Apps",icon:n.jsx(G$,{})}],G0=[{id:"docs",label:"Document Studio",icon:n.jsx(B2,{})},{id:"form",label:"Form",icon:n.jsx(Y$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(K$,{})},{id:"policy",label:"Policy",icon:n.jsx(Q$,{}),activeIcon:n.jsx("img",{src:sO,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(Eo,{}),activeIcon:n.jsx("img",{src:lO,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(Z$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(X$,{})}],uB=3e3,hB=4e3,pB=650,fB=f.button`
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
`,mB=je`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,gB=je`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,vB=je`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,xB=f.span`
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
      ${mB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${gB} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${vB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,yB=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,wB=f(Eg)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,bB=f(Ig)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,kB=f(Pg)`
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
`,_B=E2`
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
`,CB=f.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,jB=f.button`
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
`;function SB({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(_h,{placement:"bottom-end",width:168,trigger:n.jsx(jB,{type:"button","aria-label":"Page options",children:n.jsx(Cg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(Lg,{size:16}),onClick:e}]}]})})}const $B={needs_attention:n.jsx(wa,{size:16}),live:n.jsx(it,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx($n,{size:16})},MB={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function RB({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[h,p]=v.useState(null),[g,x]=v.useState(null),[y,w]=v.useState("ultron"),[k,M]=v.useState("employees"),_=CM(),[S,$]=v.useState(!!e),[R,j]=v.useState(!1),[C,P]=v.useState(!!e),[N,L]=v.useState(!1),E=v.useRef(null),[A,D]=v.useState(!1),G=v.useRef(null),[K,U]=v.useState(0),Y=v.useRef(!1),J=v.useRef(null);v.useEffect(()=>()=>{E.current!==null&&window.clearTimeout(E.current),G.current!==null&&window.clearTimeout(G.current),J.current!==null&&window.clearTimeout(J.current)},[]);const ae=()=>{E.current!==null&&(window.clearTimeout(E.current),E.current=null),L(!1)},de=()=>{ae(),E.current=window.setTimeout(()=>{E.current=null,_.surfaceDemoThread("shift_drop_maria"),se(),L(!0)},uB)},se=()=>{G.current!==null&&window.clearTimeout(G.current),D(!0),G.current=window.setTimeout(()=>{G.current=null,D(!1)},hB)},Q=xe=>{_.completeRun(xe),!(xe!=="shift_drop_maria"||Y.current)&&(Y.current=!0,J.current=window.setTimeout(()=>{J.current=null,U(Ze=>Ze+1)},pB))},[F,q]=v.useState(!e),[T,O]=v.useState([]),[X,W]=v.useState(null),ee=v.useRef(0),le=xe=>{w("ultron"),$(!1),q(!1),W(xe)},B=()=>{P(!0),w("ultron"),q(!1),W(null),$(!0)},z=()=>{w("ultron"),$(!1),q(!0),W(null)},oe=()=>{const xe=`page-${ee.current++}`;O(Ze=>[...Ze,{id:xe,title:"New page"}]),le(xe)},[fe,ce]=v.useState({}),[ve,be]=v.useState({}),we=v.useRef({}),Le=(xe,Ze)=>{const mt=Ze.trim();if(!mt)return;const Ct=(fe[xe]??[]).filter(bt=>bt.role==="ultron").length;ce(bt=>({...bt,[xe]:[...bt[xe]??[],{role:"operator",text:mt}]})),be(bt=>({...bt,[xe]:!0})),we.current[xe]=window.setTimeout(()=>{ce(bt=>({...bt,[xe]:[...bt[xe]??[],{role:"ultron",text:Oh(mt,Ct)}]})),be(bt=>({...bt,[xe]:!1})),delete we.current[xe]},1100)},De=xe=>{we.current[xe]&&(window.clearTimeout(we.current[xe]),delete we.current[xe]),O(Ze=>Ze.filter(mt=>mt.id!==xe)),ce(Ze=>{const{[xe]:mt,...Ct}=Ze;return Ct}),be(Ze=>{const{[xe]:mt,...Ct}=Ze;return Ct}),X===xe&&(W(null),q(!0))},He=F?"live":_.selectedThread?MB[_.selectedThread.status]:"new";oB({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:p,setActivePageId:x});const[We,Ae]=v.useState(!1),Fe=xe=>xe.map(Ze=>({...Ze,isActive:Ze.id===i,disabled:Ze.id!=="ultron",onClick:Ze.id==="ultron"?()=>s("ultron"):()=>Ae(!0)})),Ke=[{id:"memory",label:"Memory",icon:n.jsx(ec,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(ug,{size:16})}],wt=n.jsx(tx,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),Ie=Pl(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,st={id:"welcome",label:Ie?`${Ie} account setup`:"Account setup",icon:n.jsx(it,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"}),isActive:S,onClick:B},Qe=T.map(xe=>({id:xe.id,label:xe.title,icon:n.jsx(B2,{}),isActive:X===xe.id,onClick:()=>le(xe.id),trailingSlot:n.jsx(SB,{onDelete:()=>De(xe.id)})})),Tt=y==="account"?th.map(xe=>({type:"single",item:{id:xe.id,label:xe.label,icon:xe.icon,isActive:k===xe.id,onClick:()=>M(xe.id)}})):_.groups.flatMap(xe=>{const Ze=xe.id==="needs_attention"?"new":xe.id==="resolved"?"done":"working",mt=xe.id==="needs_attention"?xe.threads.filter(Ce=>Ce.status==="analyzing"||_.revealedNewIds.includes(Ce.id)):xe.threads,Ct=xe.id==="needs_attention"&&!R||xe.id==="live"&&R,bt=xe.id==="needs_attention"?Qe:[],or={type:"group",group:{id:xe.id,label:xe.id==="needs_attention"?"New":xe.label,icon:$B[xe.id],trailingBadge:n.jsx(Ma,{children:mt.length+(Ct?1:0)+bt.length}),defaultExpanded:!0,outlined:!1,children:[...Ct?[st]:[],...bt,...mt.map(Ce=>({id:Ce.id,label:Ce.id.startsWith("detected_")?n.jsx(gT,{text:Jm(Ce.name,Ze)}):Jm(Ce.name,Ze),icon:Ce.id==="shift_drop_maria"&&A?n.jsx(it,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Ze==="new"?Ce.status==="analyzing"?n.jsx(it,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(it,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Ze==="working"?n.jsx(it,{mark:"orbit2d",size:32,tone:"auto",state:Ce.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(it,{mark:"pulse",size:32,tone:"auto",state:Ce.status==="unresolved"?"idle":"static",color:Ce.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(Ce.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!F&&!X&&He===Ze&&_.selectedId===Ce.id,onClick:()=>{Ce.id==="shift_drop_maria"&&ae(),w("ultron"),$(!1),q(!1),W(null),_.setSelectedId(Ce.id)},spotlightPrompt:N&&Ce.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:Ce.id==="shift_drop_maria"?ae:void 0,trailingSlot:_.savedWorkflowIds.includes(Ce.id)?n.jsx(Rr,{content:"Saved as workflow",placement:"top",children:n.jsx(xB,{"aria-label":"Saved as workflow",children:n.jsx(Eo,{})})}):void 0}))]}};return xe.id==="resolved"?[{type:"divider",id:"done-divider"},or]:xe.id==="live"?[{type:"divider",id:"working-divider"},or]:[or]}),lt=[{id:"main",label:"Workspace",items:Fe(q0)},{id:"tools",label:"Tools",items:Fe(V0)},{id:"bottom",label:"Apps",items:Fe(G0)}];return n.jsxs(n.Fragment,{children:[n.jsx(dB,{}),n.jsx(_B,{}),n.jsxs(iO,{items:Fe(q0),toolItems:Fe(V0),bottomItems:Fe(G0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:Tt,menuHeader:y==="ultron"?n.jsx(fB,{$active:F&&!X,onClick:z,"aria-label":"Live — Ultron presence","aria-current":F&&!X?"page":void 0,children:n.jsx(uT,{onNew:oe})}):void 0,pageEntries:Ke,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:wt,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:lt,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:xe=>{xe==="ultron"&&s("ultron")},onSelectPersona:p,onHome:z,onNewPage:oe,openSecondaryNav:N},children:[C&&n.jsx(CB,{$visible:y==="ultron"&&S,"aria-hidden":y!=="ultron"||!S,children:n.jsx(ZO,{active:y==="ultron"&&S,answers:e,onContinued:()=>j(!0),onTestRunReady:de,realWorkPromptSignal:K})}),y==="memory"?n.jsx(wT,{}):y==="account"?n.jsx(ET,{collectionId:k}):S?null:X?n.jsx(qA,{messages:fe[X]??[],replying:ve[X]??!1,onSend:xe=>Le(X,xe)},X):n.jsx(PA,{threads:_.threads,stageById:_.stageById,section:He,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:Q,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),$(!1),q(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})]}),n.jsxs(zg,{open:We,onClose:()=>Ae(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(wB,{onClose:()=>Ae(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(bB,{children:n.jsx(yB,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(kB,{children:n.jsx(ze,{variant:"primary",onClick:()=>Ae(!1),children:"Got it"})})]})]})}const Y0="cubic-bezier(0.22, 1, 0.36, 1)",K0=je`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,NB=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,LB=f.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${K0} 460ms ${Y0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${K0} 500ms ${Y0} 90ms both;
  }
  main {
    animation: ${NB} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Ou="tb:onboarding-complete";function AB(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(Ou)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(Ou,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Ou)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(LB,{children:n.jsx(RB,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(aP,{onEnterApp:l})}w3.createRoot(document.getElementById("root")).render(n.jsx(fn.StrictMode,{children:n.jsx(W8,{children:n.jsx(AB,{})})}));
