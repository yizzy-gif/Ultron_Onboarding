(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function Y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},gi={},tu={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function s3(){if(kf)return qe;kf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function N(T,z,J){this.props=T,this.context=z,this.refs=M,this.updater=J||_}N.prototype.isReactComponent={},N.prototype.setState=function(T,z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,z,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function R(){}R.prototype=N.prototype;function S(T,z,J){this.props=T,this.context=z,this.refs=M,this.updater=J||_}var j=S.prototype=new R;j.constructor=S,C(j,N.prototype),j.isPureReactComponent=!0;var O=Array.isArray,$=Object.prototype.hasOwnProperty,L={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function A(T,z,J){var U,ee={},le=null,B=null;if(z!=null)for(U in z.ref!==void 0&&(B=z.ref),z.key!==void 0&&(le=""+z.key),z)$.call(z,U)&&!E.hasOwnProperty(U)&&(ee[U]=z[U]);var P=arguments.length-2;if(P===1)ee.children=J;else if(1<P){for(var oe=Array(P),fe=0;fe<P;fe++)oe[fe]=arguments[fe+2];ee.children=oe}if(T&&T.defaultProps)for(U in P=T.defaultProps,P)ee[U]===void 0&&(ee[U]=P[U]);return{$$typeof:e,type:T,key:le,ref:B,props:ee,_owner:L.current}}function D(T,z){return{$$typeof:e,type:T.type,key:z,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function K(T){var z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return z[J]})}var W=/\/+/g;function Y(T,z){return typeof T=="object"&&T!==null&&T.key!=null?K(""+T.key):z.toString(36)}function X(T,z,J,U,ee){var le=typeof T;(le==="undefined"||le==="boolean")&&(T=null);var B=!1;if(T===null)B=!0;else switch(le){case"string":case"number":B=!0;break;case"object":switch(T.$$typeof){case e:case o:B=!0}}if(B)return B=T,ee=ee(B),T=U===""?"."+Y(B,0):U,O(ee)?(J="",T!=null&&(J=T.replace(W,"$&/")+"/"),X(ee,z,J,"",function(fe){return fe})):ee!=null&&(G(ee)&&(ee=D(ee,J+(!ee.key||B&&B.key===ee.key?"":(""+ee.key).replace(W,"$&/")+"/")+T)),z.push(ee)),1;if(B=0,U=U===""?".":U+":",O(T))for(var P=0;P<T.length;P++){le=T[P];var oe=U+Y(le,P);B+=X(le,z,J,oe,ee)}else if(oe=k(T),typeof oe=="function")for(T=oe.call(T),P=0;!(le=T.next()).done;)le=le.value,oe=U+Y(le,P++),B+=X(le,z,J,oe,ee);else if(le==="object")throw z=String(T),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return B}function ae(T,z,J){if(T==null)return T;var U=[],ee=0;return X(T,U,"","",function(le){return z.call(J,le,ee++)}),U}function de(T){if(T._status===-1){var z=T._result;z=z(),z.then(function(J){(T._status===0||T._status===-1)&&(T._status=1,T._result=J)},function(J){(T._status===0||T._status===-1)&&(T._status=2,T._result=J)}),T._status===-1&&(T._status=0,T._result=z)}if(T._status===1)return T._result.default;throw T._result}var se={current:null},Q={transition:null},F={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Q,ReactCurrentOwner:L};function q(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:ae,forEach:function(T,z,J){ae(T,function(){z.apply(this,arguments)},J)},count:function(T){var z=0;return ae(T,function(){z++}),z},toArray:function(T){return ae(T,function(z){return z})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},qe.Component=N,qe.Fragment=i,qe.Profiler=l,qe.PureComponent=S,qe.StrictMode=s,qe.Suspense=g,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,qe.act=q,qe.cloneElement=function(T,z,J){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var U=C({},T.props),ee=T.key,le=T.ref,B=T._owner;if(z!=null){if(z.ref!==void 0&&(le=z.ref,B=L.current),z.key!==void 0&&(ee=""+z.key),T.type&&T.type.defaultProps)var P=T.type.defaultProps;for(oe in z)$.call(z,oe)&&!E.hasOwnProperty(oe)&&(U[oe]=z[oe]===void 0&&P!==void 0?P[oe]:z[oe])}var oe=arguments.length-2;if(oe===1)U.children=J;else if(1<oe){P=Array(oe);for(var fe=0;fe<oe;fe++)P[fe]=arguments[fe+2];U.children=P}return{$$typeof:e,type:T.type,key:ee,ref:le,props:U,_owner:B}},qe.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},qe.createElement=A,qe.createFactory=function(T){var z=A.bind(null,T);return z.type=T,z},qe.createRef=function(){return{current:null}},qe.forwardRef=function(T){return{$$typeof:f,render:T}},qe.isValidElement=G,qe.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:de}},qe.memo=function(T,z){return{$$typeof:x,type:T,compare:z===void 0?null:z}},qe.startTransition=function(T){var z=Q.transition;Q.transition={};try{T()}finally{Q.transition=z}},qe.unstable_act=q,qe.useCallback=function(T,z){return se.current.useCallback(T,z)},qe.useContext=function(T){return se.current.useContext(T)},qe.useDebugValue=function(){},qe.useDeferredValue=function(T){return se.current.useDeferredValue(T)},qe.useEffect=function(T,z){return se.current.useEffect(T,z)},qe.useId=function(){return se.current.useId()},qe.useImperativeHandle=function(T,z,J){return se.current.useImperativeHandle(T,z,J)},qe.useInsertionEffect=function(T,z){return se.current.useInsertionEffect(T,z)},qe.useLayoutEffect=function(T,z){return se.current.useLayoutEffect(T,z)},qe.useMemo=function(T,z){return se.current.useMemo(T,z)},qe.useReducer=function(T,z,J){return se.current.useReducer(T,z,J)},qe.useRef=function(T){return se.current.useRef(T)},qe.useState=function(T){return se.current.useState(T)},qe.useSyncExternalStore=function(T,z,J){return se.current.useSyncExternalStore(T,z,J)},qe.useTransition=function(){return se.current.useTransition()},qe.version="18.3.1",qe}var Cf;function ah(){return Cf||(Cf=1,tu.exports=s3()),tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function l3(){if(_f)return gi;_f=1;var e=ah(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,x){var y,w={},k=null,_=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(_=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:o,type:f,key:k,ref:_,props:w,_owner:l.current}}return gi.Fragment=i,gi.jsx=h,gi.jsxs=h,gi}var jf;function c3(){return jf||(jf=1,eu.exports=l3()),eu.exports}var n=c3(),v=ah();const dn=Y0(v);var rl={},nu={exports:{}},on={},ru={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function d3(){return Sf||(Sf=1,(function(e){function o(Q,F){var q=Q.length;Q.push(F);e:for(;0<q;){var T=q-1>>>1,z=Q[T];if(0<l(z,F))Q[T]=F,Q[q]=z,q=T;else break e}}function i(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var F=Q[0],q=Q.pop();if(q!==F){Q[0]=q;e:for(var T=0,z=Q.length,J=z>>>1;T<J;){var U=2*(T+1)-1,ee=Q[U],le=U+1,B=Q[le];if(0>l(ee,q))le<z&&0>l(B,ee)?(Q[T]=B,Q[le]=q,T=le):(Q[T]=ee,Q[U]=q,T=U);else if(le<z&&0>l(B,q))Q[T]=B,Q[le]=q,T=le;else break e}}return F}function l(Q,F){var q=Q.sortIndex-F.sortIndex;return q!==0?q:Q.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var g=[],x=[],y=1,w=null,k=3,_=!1,C=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(Q){for(var F=i(x);F!==null;){if(F.callback===null)s(x);else if(F.startTime<=Q)s(x),F.sortIndex=F.expirationTime,o(g,F);else break;F=i(x)}}function O(Q){if(M=!1,j(Q),!C)if(i(g)!==null)C=!0,de($);else{var F=i(x);F!==null&&se(O,F.startTime-Q)}}function $(Q,F){C=!1,M&&(M=!1,R(A),A=-1),_=!0;var q=k;try{for(j(F),w=i(g);w!==null&&(!(w.expirationTime>F)||Q&&!K());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var z=T(w.expirationTime<=F);F=e.unstable_now(),typeof z=="function"?w.callback=z:w===i(g)&&s(g),j(F)}else s(g);w=i(g)}if(w!==null)var J=!0;else{var U=i(x);U!==null&&se(O,U.startTime-F),J=!1}return J}finally{w=null,k=q,_=!1}}var L=!1,E=null,A=-1,D=5,G=-1;function K(){return!(e.unstable_now()-G<D)}function W(){if(E!==null){var Q=e.unstable_now();G=Q;var F=!0;try{F=E(!0,Q)}finally{F?Y():(L=!1,E=null)}}else L=!1}var Y;if(typeof S=="function")Y=function(){S(W)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=W,Y=function(){ae.postMessage(null)}}else Y=function(){N(W,0)};function de(Q){E=Q,L||(L=!0,Y())}function se(Q,F){A=N(function(){Q(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){C||_||(C=!0,de($))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var F=3;break;default:F=k}var q=k;k=F;try{return Q()}finally{k=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,F){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var q=k;k=Q;try{return F()}finally{k=q}},e.unstable_scheduleCallback=function(Q,F,q){var T=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?T+q:T):q=T,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=q+z,Q={id:y++,callback:F,priorityLevel:Q,startTime:q,expirationTime:z,sortIndex:-1},q>T?(Q.sortIndex=q,o(x,Q),i(g)===null&&Q===i(x)&&(M?(R(A),A=-1):M=!0,se(O,q-T))):(Q.sortIndex=z,o(g,Q),C||_||(C=!0,de($))),Q},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(Q){var F=k;return function(){var q=k;k=F;try{return Q.apply(this,arguments)}finally{k=q}}}})(ou)),ou}var $f;function u3(){return $f||($f=1,ru.exports=d3()),ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function h3(){if(Mf)return on;Mf=1;var e=ah(),o=u3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return g.call(w,t)?!0:g.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function _(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,r,a,c){if(r===null||typeof r>"u"||_(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,a,c,u,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function S(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(R,S);N[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(R,S);N[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(R,S);N[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(C(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),L=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),K=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Q=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,T;function z(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var J=!1;function U(t,r){if(!t||J)return"";J=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),b=u.length-1,I=m.length-1;1<=b&&0<=I&&u[b]!==m[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==m[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==m[I]){var H=`
`+u[b].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=b&&0<=I);break}}}finally{J=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?z(t):""}function ee(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case L:return"Portal";case D:return"Profiler";case A:return"StrictMode";case Y:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case W:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case de:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}function B(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function P(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ce(t){t._valueTracker||(t._valueTracker=fe(t))}function ve(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=oe(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function Ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _e(t,r){var a=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Me(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=P(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Oe(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function Ge(t,r){Oe(t,r);var a=P(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Pe(t,r.type,a):r.hasOwnProperty("defaultValue")&&Pe(t,r.type,P(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function De(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Pe(t,r,a){(r!=="number"||Ce(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Be=Array.isArray;function Je(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+P(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function xt(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function me(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Be(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:P(a)}}function Le(t,r){var a=P(r.value),c=P(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Ye(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function et(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?et(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kt,nt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(kt=kt||document.createElement("div"),kt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=kt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function jn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Po=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(t){Po.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Bn[r]=Bn[t]})});function zo(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Bn.hasOwnProperty(t)&&Bn[t]?(""+r).trim():r+"px"}function Ie(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=zo(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var Xe=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,r){if(r){if(Xe[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Ct(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hn=null;function Sn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var io=null,Mr=null,Nr=null;function Vi(t){if(t=ti(t)){if(typeof io!="function")throw Error(i(280));var r=t.stateNode;r&&(r=xs(r),io(t.stateNode,t.type,r))}}function Gi(t){Mr?Nr?Nr.push(t):Nr=[t]:Mr=t}function Yi(){if(Mr){var t=Mr,r=Nr;if(Nr=Mr=null,Vi(t),r)for(t=0;t<r.length;t++)Vi(r[t])}}function Ia(t,r){return t(r)}function Ki(){}var rr=!1;function Qi(t,r,a){if(rr)return t(r,a);rr=!0;try{return Ia(t,r,a)}finally{rr=!1,(Mr!==null||Nr!==null)&&(Ki(),Yi())}}function $n(t,r){var a=t.stateNode;if(a===null)return null;var c=xs(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var so=!1;if(f)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){so=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{so=!1}function vc(t,r,a,c,u,m,b,I,H){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(he){this.onError(he)}}var Hn=!1,Oo=null,Do=!1,co=null,xc={onError:function(t){Hn=!0,Oo=t}};function yc(t,r,a,c,u,m,b,I,H){Hn=!1,Oo=null,vc.apply(xc,arguments)}function Zi(t,r,a,c,u,m,b,I,H){if(yc.apply(this,arguments),Hn){if(Hn){var re=Oo;Hn=!1,Oo=null}else throw Error(i(198));Do||(Do=!0,co=re)}}function or(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Xi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function At(t){if(or(t)!==t)throw Error(i(188))}function wc(t){var r=t.alternate;if(!r){if(r=or(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===a)return At(u),t;if(m===c)return At(u),r;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=m;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=m;break}if(I===c){b=!0,c=u,a=m;break}I=I.sibling}if(!b){for(I=m.child;I;){if(I===a){b=!0,a=m,c=u;break}if(I===c){b=!0,c=m,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function Pa(t){return t=wc(t),t!==null?te(t):null}function te(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=te(t);if(r!==null)return r;t=t.sibling}return null}var xe=o.unstable_scheduleCallback,be=o.unstable_cancelCallback,at=o.unstable_shouldYield,Fe=o.unstable_requestPaint,Ke=o.unstable_now,Mn=o.unstable_getCurrentPriorityLevel,$t=o.unstable_ImmediatePriority,Nn=o.unstable_UserBlockingPriority,Fo=o.unstable_NormalPriority,bx=o.unstable_LowPriority,Zh=o.unstable_IdlePriority,Ji=null,ar=null;function kx(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(Ji,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:jx,Cx=Math.log,_x=Math.LN2;function jx(t){return t>>>=0,t===0?32:31-(Cx(t)/_x|0)|0}var es=64,ts=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ns(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=za(I):(m&=b,m!==0&&(c=za(m)))}else b=a&~u,b!==0?c=za(b):m!==0&&(c=za(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Wn(r),u=1<<a,c|=t[a],r&=~u;return c}function Sx(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-Wn(m),I=1<<b,H=u[b];H===-1?((I&a)===0||(I&c)!==0)&&(u[b]=Sx(I,r)):H<=r&&(t.expiredLanes|=I),m&=~I}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xh(){var t=es;return es<<=1,(es&4194240)===0&&(es=64),t}function kc(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Oa(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Wn(r),t[r]=a}function Mx(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Wn(a),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~m}}function Cc(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Wn(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var it=0;function Jh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ep,_c,tp,np,rp,jc=!1,rs=[],Rr=null,Lr=null,Ar=null,Da=new Map,Fa=new Map,Tr=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function op(t,r){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Da.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(r.pointerId)}}function Ba(t,r,a,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=ti(r),r!==null&&_c(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Rx(t,r,a,c,u){switch(r){case"focusin":return Rr=Ba(Rr,t,r,a,c,u),!0;case"dragenter":return Lr=Ba(Lr,t,r,a,c,u),!0;case"mouseover":return Ar=Ba(Ar,t,r,a,c,u),!0;case"pointerover":var m=u.pointerId;return Da.set(m,Ba(Da.get(m)||null,t,r,a,c,u)),!0;case"gotpointercapture":return m=u.pointerId,Fa.set(m,Ba(Fa.get(m)||null,t,r,a,c,u)),!0}return!1}function ap(t){var r=uo(t.target);if(r!==null){var a=or(r);if(a!==null){if(r=a.tag,r===13){if(r=Xi(a),r!==null){t.blockedOn=r,rp(t.priority,function(){tp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function os(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$c(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);hn=c,a.target.dispatchEvent(c),hn=null}else return r=ti(a),r!==null&&_c(r),t.blockedOn=a,!1;r.shift()}return!0}function ip(t,r,a){os(t)&&a.delete(r)}function Lx(){jc=!1,Rr!==null&&os(Rr)&&(Rr=null),Lr!==null&&os(Lr)&&(Lr=null),Ar!==null&&os(Ar)&&(Ar=null),Da.forEach(ip),Fa.forEach(ip)}function Ha(t,r){t.blockedOn===r&&(t.blockedOn=null,jc||(jc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Lx)))}function Wa(t){function r(u){return Ha(u,t)}if(0<rs.length){Ha(rs[0],t);for(var a=1;a<rs.length;a++){var c=rs[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Rr!==null&&Ha(Rr,t),Lr!==null&&Ha(Lr,t),Ar!==null&&Ha(Ar,t),Da.forEach(r),Fa.forEach(r),a=0;a<Tr.length;a++)c=Tr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)ap(a),a.blockedOn===null&&Tr.shift()}var Bo=O.ReactCurrentBatchConfig,as=!0;function Ax(t,r,a,c){var u=it,m=Bo.transition;Bo.transition=null;try{it=1,Sc(t,r,a,c)}finally{it=u,Bo.transition=m}}function Tx(t,r,a,c){var u=it,m=Bo.transition;Bo.transition=null;try{it=4,Sc(t,r,a,c)}finally{it=u,Bo.transition=m}}function Sc(t,r,a,c){if(as){var u=$c(t,r,a,c);if(u===null)Uc(t,r,c,is,a),op(t,c);else if(Rx(u,t,r,a,c))c.stopPropagation();else if(op(t,c),r&4&&-1<Nx.indexOf(t)){for(;u!==null;){var m=ti(u);if(m!==null&&ep(m),m=$c(t,r,a,c),m===null&&Uc(t,r,c,is,a),m===u)break;u=m}u!==null&&c.stopPropagation()}else Uc(t,r,c,null,a)}}var is=null;function $c(t,r,a,c){if(is=null,t=Sn(c),t=uo(t),t!==null)if(r=or(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Xi(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return is=t,null}function sp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mn()){case $t:return 1;case Nn:return 4;case Fo:case bx:return 16;case Zh:return 536870912;default:return 16}default:return 16}}var Er=null,Mc=null,ss=null;function lp(){if(ss)return ss;var t,r=Mc,a=r.length,c,u="value"in Er?Er.value:Er.textContent,m=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[m-c];c++);return ss=u.slice(t,1<c?1-c:void 0)}function ls(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function cs(){return!0}function cp(){return!1}function pn(t){function r(a,c,u,m,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?cs:cp,this.isPropagationStopped=cp,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),r}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=pn(Ho),Ua=q({},Ho,{view:0,detail:0}),Ex=pn(Ua),Rc,Lc,qa,ds=q({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(Rc=t.screenX-qa.screenX,Lc=t.screenY-qa.screenY):Lc=Rc=0,qa=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),dp=pn(ds),Ix=q({},ds,{dataTransfer:0}),Px=pn(Ix),zx=q({},Ua,{relatedTarget:0}),Ac=pn(zx),Ox=q({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=pn(Ox),Fx=q({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=pn(Fx),Hx=q({},Ho,{data:0}),up=pn(Hx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=qx[t])?!!r[t]:!1}function Tc(){return Vx}var Gx=q({},Ua,{key:function(t){if(t.key){var r=Wx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ls(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?ls(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ls(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yx=pn(Gx),Kx=q({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=pn(Kx),Qx=q({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Zx=pn(Qx),Xx=q({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=pn(Xx),ey=q({},ds,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=pn(ey),ny=[9,13,27,32],Ec=f&&"CompositionEvent"in window,Va=null;f&&"documentMode"in document&&(Va=document.documentMode);var ry=f&&"TextEvent"in window&&!Va,pp=f&&(!Ec||Va&&8<Va&&11>=Va),fp=" ",mp=!1;function gp(t,r){switch(t){case"keyup":return ny.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wo=!1;function oy(t,r){switch(t){case"compositionend":return vp(r);case"keypress":return r.which!==32?null:(mp=!0,fp);case"textInput":return t=r.data,t===fp&&mp?null:t;default:return null}}function ay(t,r){if(Wo)return t==="compositionend"||!Ec&&gp(t,r)?(t=lp(),ss=Mc=Er=null,Wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return pp&&r.locale!=="ko"?null:r.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!iy[t.type]:r==="textarea"}function yp(t,r,a,c){Gi(c),r=ms(r,"onChange"),0<r.length&&(a=new Nc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Ga=null,Ya=null;function sy(t){zp(t,0)}function us(t){var r=Yo(t);if(ve(r))return t}function ly(t,r){if(t==="change")return r}var wp=!1;if(f){var Ic;if(f){var Pc="oninput"in document;if(!Pc){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Pc=typeof bp.oninput=="function"}Ic=Pc}else Ic=!1;wp=Ic&&(!document.documentMode||9<document.documentMode)}function kp(){Ga&&(Ga.detachEvent("onpropertychange",Cp),Ya=Ga=null)}function Cp(t){if(t.propertyName==="value"&&us(Ya)){var r=[];yp(r,Ya,t,Sn(t)),Qi(sy,r)}}function cy(t,r,a){t==="focusin"?(kp(),Ga=r,Ya=a,Ga.attachEvent("onpropertychange",Cp)):t==="focusout"&&kp()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return us(Ya)}function uy(t,r){if(t==="click")return us(r)}function hy(t,r){if(t==="input"||t==="change")return us(r)}function py(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Un=typeof Object.is=="function"?Object.is:py;function Ka(t,r){if(Un(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(r,u)||!Un(t[u],r[u]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,r){var a=_p(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function Sp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Sp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function $p(){for(var t=window,r=Ce();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Ce(t.document)}return r}function zc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function fy(t){var r=$p(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Sp(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=jp(a,m);var b=jp(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var my=f&&"documentMode"in document&&11>=document.documentMode,Uo=null,Oc=null,Qa=null,Dc=!1;function Mp(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Uo==null||Uo!==Ce(c)||(c=Uo,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Qa&&Ka(Qa,c)||(Qa=c,c=ms(Oc,"onSelect"),0<c.length&&(r=new Nc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Uo)))}function hs(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var qo={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Fc={},Np={};f&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete qo.animationend.animation,delete qo.animationiteration.animation,delete qo.animationstart.animation),"TransitionEvent"in window||delete qo.transitionend.transition);function ps(t){if(Fc[t])return Fc[t];if(!qo[t])return t;var r=qo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Np)return Fc[t]=r[a];return t}var Rp=ps("animationend"),Lp=ps("animationiteration"),Ap=ps("animationstart"),Tp=ps("transitionend"),Ep=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,r){Ep.set(t,r),d(r,[t])}for(var Bc=0;Bc<Ip.length;Bc++){var Hc=Ip[Bc],gy=Hc.toLowerCase(),vy=Hc[0].toUpperCase()+Hc.slice(1);Ir(gy,"on"+vy)}Ir(Rp,"onAnimationEnd"),Ir(Lp,"onAnimationIteration"),Ir(Ap,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Tp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function Pp(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,Zi(c,r,void 0,t),t.currentTarget=null}function zp(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],H=I.instance,re=I.currentTarget;if(I=I.listener,H!==m&&u.isPropagationStopped())break e;Pp(u,I,re),m=H}else for(b=0;b<c.length;b++){if(I=c[b],H=I.instance,re=I.currentTarget,I=I.listener,H!==m&&u.isPropagationStopped())break e;Pp(u,I,re),m=H}}}if(Do)throw t=co,Do=!1,co=null,t}function ut(t,r){var a=r[Qc];a===void 0&&(a=r[Qc]=new Set);var c=t+"__bubble";a.has(c)||(Op(r,t,2,!1),a.add(c))}function Wc(t,r,a){var c=0;r&&(c|=4),Op(a,t,c,r)}var fs="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[fs]){t[fs]=!0,s.forEach(function(a){a!=="selectionchange"&&(xy.has(a)||Wc(a,!1,t),Wc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[fs]||(r[fs]=!0,Wc("selectionchange",!1,r))}}function Op(t,r,a,c){switch(sp(r)){case 1:var u=Ax;break;case 4:u=Tx;break;default:u=Sc}a=u.bind(null,r,a,t),u=void 0,!so||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Uc(t,r,a,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;b=b.return}for(;I!==null;){if(b=uo(I),b===null)return;if(H=b.tag,H===5||H===6){c=m=b;continue e}I=I.parentNode}}c=c.return}Qi(function(){var re=m,he=Sn(a),pe=[];e:{var ue=Ep.get(t);if(ue!==void 0){var ye=Nc,je=t;switch(t){case"keypress":if(ls(a)===0)break e;case"keydown":case"keyup":ye=Yx;break;case"focusin":je="focus",ye=Ac;break;case"focusout":je="blur",ye=Ac;break;case"beforeblur":case"afterblur":ye=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Zx;break;case Rp:case Lp:case Ap:ye=Dx;break;case Tp:ye=Jx;break;case"scroll":ye=Ex;break;case"wheel":ye=ty;break;case"copy":case"cut":case"paste":ye=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=hp}var Se=(r&4)!==0,wt=!Se&&t==="scroll",Z=Se?ue!==null?ue+"Capture":null:ue;Se=[];for(var V=re,ne;V!==null;){ne=V;var ge=ne.stateNode;if(ne.tag===5&&ge!==null&&(ne=ge,Z!==null&&(ge=$n(V,Z),ge!=null&&Se.push(Ja(V,ge,ne)))),wt)break;V=V.return}0<Se.length&&(ue=new ye(ue,je,null,a,he),pe.push({event:ue,listeners:Se}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==hn&&(je=a.relatedTarget||a.fromElement)&&(uo(je)||je[pr]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(je=a.relatedTarget||a.toElement,ye=re,je=je?uo(je):null,je!==null&&(wt=or(je),je!==wt||je.tag!==5&&je.tag!==6)&&(je=null)):(ye=null,je=re),ye!==je)){if(Se=dp,ge="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Se=hp,ge="onPointerLeave",Z="onPointerEnter",V="pointer"),wt=ye==null?ue:Yo(ye),ne=je==null?ue:Yo(je),ue=new Se(ge,V+"leave",ye,a,he),ue.target=wt,ue.relatedTarget=ne,ge=null,uo(he)===re&&(Se=new Se(Z,V+"enter",je,a,he),Se.target=ne,Se.relatedTarget=wt,ge=Se),wt=ge,ye&&je)t:{for(Se=ye,Z=je,V=0,ne=Se;ne;ne=Vo(ne))V++;for(ne=0,ge=Z;ge;ge=Vo(ge))ne++;for(;0<V-ne;)Se=Vo(Se),V--;for(;0<ne-V;)Z=Vo(Z),ne--;for(;V--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=Vo(Se),Z=Vo(Z)}Se=null}else Se=null;ye!==null&&Dp(pe,ue,ye,Se,!1),je!==null&&wt!==null&&Dp(pe,wt,je,Se,!0)}}e:{if(ue=re?Yo(re):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var $e=ly;else if(xp(ue))if(wp)$e=hy;else{$e=dy;var Ne=cy}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&($e=uy);if($e&&($e=$e(t,re))){yp(pe,$e,a,he);break e}Ne&&Ne(t,ue,re),t==="focusout"&&(Ne=ue._wrapperState)&&Ne.controlled&&ue.type==="number"&&Pe(ue,"number",ue.value)}switch(Ne=re?Yo(re):window,t){case"focusin":(xp(Ne)||Ne.contentEditable==="true")&&(Uo=Ne,Oc=re,Qa=null);break;case"focusout":Qa=Oc=Uo=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Mp(pe,a,he);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Mp(pe,a,he)}var Re;if(Ec)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Wo?gp(t,a)&&(Ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(pp&&a.locale!=="ko"&&(Wo||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Wo&&(Re=lp()):(Er=he,Mc="value"in Er?Er.value:Er.textContent,Wo=!0)),Ne=ms(re,Ae),0<Ne.length&&(Ae=new up(Ae,t,null,a,he),pe.push({event:Ae,listeners:Ne}),Re?Ae.data=Re:(Re=vp(a),Re!==null&&(Ae.data=Re)))),(Re=ry?oy(t,a):ay(t,a))&&(re=ms(re,"onBeforeInput"),0<re.length&&(he=new up("onBeforeInput","beforeinput",null,a,he),pe.push({event:he,listeners:re}),he.data=Re))}zp(pe,r)})}function Ja(t,r,a){return{instance:t,listener:r,currentTarget:a}}function ms(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=$n(t,a),m!=null&&c.unshift(Ja(t,m,u)),m=$n(t,r),m!=null&&c.push(Ja(t,m,u))),t=t.return}return c}function Vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,r,a,c,u){for(var m=r._reactName,b=[];a!==null&&a!==c;){var I=a,H=I.alternate,re=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&re!==null&&(I=re,u?(H=$n(a,m),H!=null&&b.unshift(Ja(a,H,I))):u||(H=$n(a,m),H!=null&&b.push(Ja(a,H,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var yy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(wy,"")}function gs(t,r,a){if(r=Fp(r),Fp(t)!==r&&a)throw Error(i(425))}function vs(){}var qc=null,Vc=null;function Gc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(Cy)}:Yc;function Cy(t){setTimeout(function(){throw t})}function Kc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Wa(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Wa(r)}function Pr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Go=Math.random().toString(36).slice(2),ir="__reactFiber$"+Go,ei="__reactProps$"+Go,pr="__reactContainer$"+Go,Qc="__reactEvents$"+Go,_y="__reactListeners$"+Go,jy="__reactHandles$"+Go;function uo(t){var r=t[ir];if(r)return r;for(var a=t.parentNode;a;){if(r=a[pr]||a[ir]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Hp(t);t!==null;){if(a=t[ir])return a;t=Hp(t)}return r}t=a,a=t.parentNode}return null}function ti(t){return t=t[ir]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function xs(t){return t[ei]||null}var Zc=[],Ko=-1;function zr(t){return{current:t}}function ht(t){0>Ko||(t.current=Zc[Ko],Zc[Ko]=null,Ko--)}function ct(t,r){Ko++,Zc[Ko]=t.current,t.current=r}var Or={},qt=zr(Or),Jt=zr(!1),ho=Or;function Qo(t,r){var a=t.type.contextTypes;if(!a)return Or;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in a)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function en(t){return t=t.childContextTypes,t!=null}function ys(){ht(Jt),ht(qt)}function Wp(t,r,a){if(qt.current!==Or)throw Error(i(168));ct(qt,r),ct(Jt,a)}function Up(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,B(t)||"Unknown",u));return q({},a,c)}function ws(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,ho=qt.current,ct(qt,t),ct(Jt,Jt.current),!0}function qp(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Up(t,r,ho),c.__reactInternalMemoizedMergedChildContext=t,ht(Jt),ht(qt),ct(qt,t)):ht(Jt),ct(Jt,a)}var fr=null,bs=!1,Xc=!1;function Vp(t){fr===null?fr=[t]:fr.push(t)}function Sy(t){bs=!0,Vp(t)}function Dr(){if(!Xc&&fr!==null){Xc=!0;var t=0,r=it;try{var a=fr;for(it=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}fr=null,bs=!1}catch(u){throw fr!==null&&(fr=fr.slice(t+1)),xe($t,Dr),u}finally{it=r,Xc=!1}}return null}var Zo=[],Xo=0,ks=null,Cs=0,Rn=[],Ln=0,po=null,mr=1,gr="";function fo(t,r){Zo[Xo++]=Cs,Zo[Xo++]=ks,ks=t,Cs=r}function Gp(t,r,a){Rn[Ln++]=mr,Rn[Ln++]=gr,Rn[Ln++]=po,po=t;var c=mr;t=gr;var u=32-Wn(c)-1;c&=~(1<<u),a+=1;var m=32-Wn(r)+u;if(30<m){var b=u-u%5;m=(c&(1<<b)-1).toString(32),c>>=b,u-=b,mr=1<<32-Wn(r)+u|a<<u|c,gr=m+t}else mr=1<<m|a<<u|c,gr=t}function Jc(t){t.return!==null&&(fo(t,1),Gp(t,1,0))}function ed(t){for(;t===ks;)ks=Zo[--Xo],Zo[Xo]=null,Cs=Zo[--Xo],Zo[Xo]=null;for(;t===po;)po=Rn[--Ln],Rn[Ln]=null,gr=Rn[--Ln],Rn[Ln]=null,mr=Rn[--Ln],Rn[Ln]=null}var fn=null,mn=null,ft=!1,qn=null;function Yp(t,r){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Kp(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,fn=t,mn=Pr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,fn=t,mn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=po!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,fn=t,mn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(ft){var r=mn;if(r){var a=r;if(!Kp(t,r)){if(td(t))throw Error(i(418));r=Pr(a.nextSibling);var c=fn;r&&Kp(t,r)?Yp(c,a):(t.flags=t.flags&-4097|2,ft=!1,fn=t)}}else{if(td(t))throw Error(i(418));t.flags=t.flags&-4097|2,ft=!1,fn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function _s(t){if(t!==fn)return!1;if(!ft)return Qp(t),ft=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Gc(t.type,t.memoizedProps)),r&&(r=mn)){if(td(t))throw Zp(),Error(i(418));for(;r;)Yp(t,r),r=Pr(r.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){mn=Pr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}mn=null}}else mn=fn?Pr(t.stateNode.nextSibling):null;return!0}function Zp(){for(var t=mn;t;)t=Pr(t.nextSibling)}function Jo(){mn=fn=null,ft=!1}function rd(t){qn===null?qn=[t]:qn.push(t)}var $y=O.ReactCurrentBatchConfig;function ni(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var I=u.refs;b===null?delete I[m]:I[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function js(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Xp(t){var r=t._init;return r(t._payload)}function Jp(t){function r(Z,V){if(t){var ne=Z.deletions;ne===null?(Z.deletions=[V],Z.flags|=16):ne.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)r(Z,V),V=V.sibling;return null}function c(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function u(Z,V){return Z=Gr(Z,V),Z.index=0,Z.sibling=null,Z}function m(Z,V,ne){return Z.index=ne,t?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<V?(Z.flags|=2,V):ne):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,ne,ge){return V===null||V.tag!==6?(V=Yd(ne,Z.mode,ge),V.return=Z,V):(V=u(V,ne),V.return=Z,V)}function H(Z,V,ne,ge){var $e=ne.type;return $e===E?he(Z,V,ne.props.children,ge,ne.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===de&&Xp($e)===V.type)?(ge=u(V,ne.props),ge.ref=ni(Z,V,ne),ge.return=Z,ge):(ge=Ks(ne.type,ne.key,ne.props,null,Z.mode,ge),ge.ref=ni(Z,V,ne),ge.return=Z,ge)}function re(Z,V,ne,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==ne.containerInfo||V.stateNode.implementation!==ne.implementation?(V=Kd(ne,Z.mode,ge),V.return=Z,V):(V=u(V,ne.children||[]),V.return=Z,V)}function he(Z,V,ne,ge,$e){return V===null||V.tag!==7?(V=ko(ne,Z.mode,ge,$e),V.return=Z,V):(V=u(V,ne),V.return=Z,V)}function pe(Z,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Yd(""+V,Z.mode,ne),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case $:return ne=Ks(V.type,V.key,V.props,null,Z.mode,ne),ne.ref=ni(Z,null,V),ne.return=Z,ne;case L:return V=Kd(V,Z.mode,ne),V.return=Z,V;case de:var ge=V._init;return pe(Z,ge(V._payload),ne)}if(Be(V)||F(V))return V=ko(V,Z.mode,ne,null),V.return=Z,V;js(Z,V)}return null}function ue(Z,V,ne,ge){var $e=V!==null?V.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:I(Z,V,""+ne,ge);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:return ne.key===$e?H(Z,V,ne,ge):null;case L:return ne.key===$e?re(Z,V,ne,ge):null;case de:return $e=ne._init,ue(Z,V,$e(ne._payload),ge)}if(Be(ne)||F(ne))return $e!==null?null:he(Z,V,ne,ge,null);js(Z,ne)}return null}function ye(Z,V,ne,ge,$e){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return Z=Z.get(ne)||null,I(V,Z,""+ge,$e);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case $:return Z=Z.get(ge.key===null?ne:ge.key)||null,H(V,Z,ge,$e);case L:return Z=Z.get(ge.key===null?ne:ge.key)||null,re(V,Z,ge,$e);case de:var Ne=ge._init;return ye(Z,V,ne,Ne(ge._payload),$e)}if(Be(ge)||F(ge))return Z=Z.get(ne)||null,he(V,Z,ge,$e,null);js(V,ge)}return null}function je(Z,V,ne,ge){for(var $e=null,Ne=null,Re=V,Ae=V=0,It=null;Re!==null&&Ae<ne.length;Ae++){Re.index>Ae?(It=Re,Re=null):It=Re.sibling;var rt=ue(Z,Re,ne[Ae],ge);if(rt===null){Re===null&&(Re=It);break}t&&Re&&rt.alternate===null&&r(Z,Re),V=m(rt,V,Ae),Ne===null?$e=rt:Ne.sibling=rt,Ne=rt,Re=It}if(Ae===ne.length)return a(Z,Re),ft&&fo(Z,Ae),$e;if(Re===null){for(;Ae<ne.length;Ae++)Re=pe(Z,ne[Ae],ge),Re!==null&&(V=m(Re,V,Ae),Ne===null?$e=Re:Ne.sibling=Re,Ne=Re);return ft&&fo(Z,Ae),$e}for(Re=c(Z,Re);Ae<ne.length;Ae++)It=ye(Re,Z,Ae,ne[Ae],ge),It!==null&&(t&&It.alternate!==null&&Re.delete(It.key===null?Ae:It.key),V=m(It,V,Ae),Ne===null?$e=It:Ne.sibling=It,Ne=It);return t&&Re.forEach(function(Yr){return r(Z,Yr)}),ft&&fo(Z,Ae),$e}function Se(Z,V,ne,ge){var $e=F(ne);if(typeof $e!="function")throw Error(i(150));if(ne=$e.call(ne),ne==null)throw Error(i(151));for(var Ne=$e=null,Re=V,Ae=V=0,It=null,rt=ne.next();Re!==null&&!rt.done;Ae++,rt=ne.next()){Re.index>Ae?(It=Re,Re=null):It=Re.sibling;var Yr=ue(Z,Re,rt.value,ge);if(Yr===null){Re===null&&(Re=It);break}t&&Re&&Yr.alternate===null&&r(Z,Re),V=m(Yr,V,Ae),Ne===null?$e=Yr:Ne.sibling=Yr,Ne=Yr,Re=It}if(rt.done)return a(Z,Re),ft&&fo(Z,Ae),$e;if(Re===null){for(;!rt.done;Ae++,rt=ne.next())rt=pe(Z,rt.value,ge),rt!==null&&(V=m(rt,V,Ae),Ne===null?$e=rt:Ne.sibling=rt,Ne=rt);return ft&&fo(Z,Ae),$e}for(Re=c(Z,Re);!rt.done;Ae++,rt=ne.next())rt=ye(Re,Z,Ae,rt.value,ge),rt!==null&&(t&&rt.alternate!==null&&Re.delete(rt.key===null?Ae:rt.key),V=m(rt,V,Ae),Ne===null?$e=rt:Ne.sibling=rt,Ne=rt);return t&&Re.forEach(function(i3){return r(Z,i3)}),ft&&fo(Z,Ae),$e}function wt(Z,V,ne,ge){if(typeof ne=="object"&&ne!==null&&ne.type===E&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:e:{for(var $e=ne.key,Ne=V;Ne!==null;){if(Ne.key===$e){if($e=ne.type,$e===E){if(Ne.tag===7){a(Z,Ne.sibling),V=u(Ne,ne.props.children),V.return=Z,Z=V;break e}}else if(Ne.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===de&&Xp($e)===Ne.type){a(Z,Ne.sibling),V=u(Ne,ne.props),V.ref=ni(Z,Ne,ne),V.return=Z,Z=V;break e}a(Z,Ne);break}else r(Z,Ne);Ne=Ne.sibling}ne.type===E?(V=ko(ne.props.children,Z.mode,ge,ne.key),V.return=Z,Z=V):(ge=Ks(ne.type,ne.key,ne.props,null,Z.mode,ge),ge.ref=ni(Z,V,ne),ge.return=Z,Z=ge)}return b(Z);case L:e:{for(Ne=ne.key;V!==null;){if(V.key===Ne)if(V.tag===4&&V.stateNode.containerInfo===ne.containerInfo&&V.stateNode.implementation===ne.implementation){a(Z,V.sibling),V=u(V,ne.children||[]),V.return=Z,Z=V;break e}else{a(Z,V);break}else r(Z,V);V=V.sibling}V=Kd(ne,Z.mode,ge),V.return=Z,Z=V}return b(Z);case de:return Ne=ne._init,wt(Z,V,Ne(ne._payload),ge)}if(Be(ne))return je(Z,V,ne,ge);if(F(ne))return Se(Z,V,ne,ge);js(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,V!==null&&V.tag===6?(a(Z,V.sibling),V=u(V,ne),V.return=Z,Z=V):(a(Z,V),V=Yd(ne,Z.mode,ge),V.return=Z,Z=V),b(Z)):a(Z,V)}return wt}var ea=Jp(!0),e1=Jp(!1),Ss=zr(null),$s=null,ta=null,od=null;function ad(){od=ta=$s=null}function id(t){var r=Ss.current;ht(Ss),t._currentValue=r}function sd(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function na(t,r){$s=t,od=ta=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(tn=!0),t.firstContext=null)}function An(t){var r=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:r,next:null},ta===null){if($s===null)throw Error(i(308));ta=t,$s.dependencies={lanes:0,firstContext:t}}else ta=ta.next=t;return r}var mo=null;function ld(t){mo===null?mo=[t]:mo.push(t)}function t1(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,ld(r)):(a.next=u.next,u.next=a),r.interleaved=a,vr(t,c)}function vr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Fr=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n1(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,vr(t,a)}return u=c.interleaved,u===null?(r.next=r,ld(c)):(r.next=u.next,u.next=r),c.interleaved=r,vr(t,a)}function Ms(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Cc(t,a)}}function r1(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?u=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?u=m=r:m=m.next=r}else u=m=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Ns(t,r,a,c){var u=t.updateQueue;Fr=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,re=H.next;H.next=null,b===null?m=re:b.next=re,b=H;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=re:I.next=re,he.lastBaseUpdate=H))}if(m!==null){var pe=u.baseState;b=0,he=re=H=null,I=m;do{var ue=I.lane,ye=I.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Se=I;switch(ue=r,ye=a,Se.tag){case 1:if(je=Se.payload,typeof je=="function"){pe=je.call(ye,pe,ue);break e}pe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Se.payload,ue=typeof je=="function"?je.call(ye,pe,ue):je,ue==null)break e;pe=q({},pe,ue);break e;case 2:Fr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else ye={eventTime:ye,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(re=he=ye,H=pe):he=he.next=ye,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(H=pe),u.baseState=H,u.firstBaseUpdate=re,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);xo|=b,t.lanes=b,t.memoizedState=pe}}function o1(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var ri={},sr=zr(ri),oi=zr(ri),ai=zr(ri);function go(t){if(t===ri)throw Error(i(174));return t}function dd(t,r){switch(ct(ai,r),ct(oi,t),ct(sr,ri),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=We(r,t)}ht(sr),ct(sr,r)}function ra(){ht(sr),ht(oi),ht(ai)}function a1(t){go(ai.current);var r=go(sr.current),a=We(r,t.type);r!==a&&(ct(oi,t),ct(sr,a))}function ud(t){oi.current===t&&(ht(sr),ht(oi))}var gt=zr(0);function Rs(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hd=[];function pd(){for(var t=0;t<hd.length;t++)hd[t]._workInProgressVersionPrimary=null;hd.length=0}var Ls=O.ReactCurrentDispatcher,fd=O.ReactCurrentBatchConfig,vo=0,vt=null,Mt=null,Tt=null,As=!1,ii=!1,si=0,My=0;function Vt(){throw Error(i(321))}function md(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Un(t[a],r[a]))return!1;return!0}function gd(t,r,a,c,u,m){if(vo=m,vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ls.current=t===null||t.memoizedState===null?Ay:Ty,t=a(c,u),ii){m=0;do{if(ii=!1,si=0,25<=m)throw Error(i(301));m+=1,Tt=Mt=null,r.updateQueue=null,Ls.current=Ey,t=a(c,u)}while(ii)}if(Ls.current=Is,r=Mt!==null&&Mt.next!==null,vo=0,Tt=Mt=vt=null,As=!1,r)throw Error(i(300));return t}function vd(){var t=si!==0;return si=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?vt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Tn(){if(Mt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var r=Tt===null?vt.memoizedState:Tt.next;if(r!==null)Tt=r,Mt=t;else{if(t===null)throw Error(i(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Tt===null?vt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function li(t,r){return typeof r=="function"?r(t):r}function xd(t){var r=Tn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=Mt,u=c.baseQueue,m=a.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}c.baseQueue=u=m,a.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=b=null,H=null,re=m;do{var he=re.lane;if((vo&he)===he)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var pe={lane:he,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(I=H=pe,b=c):H=H.next=pe,vt.lanes|=he,xo|=he}re=re.next}while(re!==null&&re!==m);H===null?b=c:H.next=I,Un(c,r.memoizedState)||(tn=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do m=u.lane,vt.lanes|=m,xo|=m,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function yd(t){var r=Tn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,m=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do m=t(m,b.action),b=b.next;while(b!==u);Un(m,r.memoizedState)||(tn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function i1(){}function s1(t,r){var a=vt,c=Tn(),u=r(),m=!Un(c.memoizedState,u);if(m&&(c.memoizedState=u,tn=!0),c=c.queue,wd(d1.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ci(9,c1.bind(null,a,c,u,r),void 0,null),Et===null)throw Error(i(349));(vo&30)!==0||l1(a,r,u)}return u}function l1(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=vt.updateQueue,r===null?(r={lastEffect:null,stores:null},vt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function c1(t,r,a,c){r.value=a,r.getSnapshot=c,u1(r)&&h1(t)}function d1(t,r,a){return a(function(){u1(r)&&h1(t)})}function u1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Un(t,a)}catch{return!0}}function h1(t){var r=vr(t,1);r!==null&&Kn(r,t,1,-1)}function p1(t){var r=lr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:t},r.queue=t,t=t.dispatch=Ly.bind(null,vt,t),[r.memoizedState,t]}function ci(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=vt.updateQueue,r===null?(r={lastEffect:null,stores:null},vt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function f1(){return Tn().memoizedState}function Ts(t,r,a,c){var u=lr();vt.flags|=t,u.memoizedState=ci(1|r,a,void 0,c===void 0?null:c)}function Es(t,r,a,c){var u=Tn();c=c===void 0?null:c;var m=void 0;if(Mt!==null){var b=Mt.memoizedState;if(m=b.destroy,c!==null&&md(c,b.deps)){u.memoizedState=ci(r,a,m,c);return}}vt.flags|=t,u.memoizedState=ci(1|r,a,m,c)}function m1(t,r){return Ts(8390656,8,t,r)}function wd(t,r){return Es(2048,8,t,r)}function g1(t,r){return Es(4,2,t,r)}function v1(t,r){return Es(4,4,t,r)}function x1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function y1(t,r,a){return a=a!=null?a.concat([t]):null,Es(4,4,x1.bind(null,r,t),a)}function bd(){}function w1(t,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&md(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function b1(t,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&md(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function k1(t,r,a){return(vo&21)===0?(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=a):(Un(a,r)||(a=Xh(),vt.lanes|=a,xo|=a,t.baseState=!0),r)}function Ny(t,r){var a=it;it=a!==0&&4>a?a:4,t(!0);var c=fd.transition;fd.transition={};try{t(!1),r()}finally{it=a,fd.transition=c}}function C1(){return Tn().memoizedState}function Ry(t,r,a){var c=qr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_1(t))j1(r,a);else if(a=t1(t,r,a,c),a!==null){var u=Zt();Kn(a,t,c,u),S1(a,r,c)}}function Ly(t,r,a){var c=qr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_1(t))j1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,I=m(b,a);if(u.hasEagerState=!0,u.eagerState=I,Un(I,b)){var H=r.interleaved;H===null?(u.next=u,ld(r)):(u.next=H.next,H.next=u),r.interleaved=u;return}}catch{}finally{}a=t1(t,r,u,c),a!==null&&(u=Zt(),Kn(a,t,c,u),S1(a,r,c))}}function _1(t){var r=t.alternate;return t===vt||r!==null&&r===vt}function j1(t,r){ii=As=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function S1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Cc(t,a)}}var Is={readContext:An,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Ay={readContext:An,useCallback:function(t,r){return lr().memoizedState=[t,r===void 0?null:r],t},useContext:An,useEffect:m1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ts(4194308,4,x1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ts(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ts(4,2,t,r)},useMemo:function(t,r){var a=lr();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=lr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Ry.bind(null,vt,t),[c.memoizedState,t]},useRef:function(t){var r=lr();return t={current:t},r.memoizedState=t},useState:p1,useDebugValue:bd,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=p1(!1),r=t[0];return t=Ny.bind(null,t[1]),lr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=vt,u=lr();if(ft){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Et===null)throw Error(i(349));(vo&30)!==0||l1(c,r,a)}u.memoizedState=a;var m={value:a,getSnapshot:r};return u.queue=m,m1(d1.bind(null,c,m,t),[t]),c.flags|=2048,ci(9,c1.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=lr(),r=Et.identifierPrefix;if(ft){var a=gr,c=mr;a=(c&~(1<<32-Wn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=si++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=My++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ty={readContext:An,useCallback:w1,useContext:An,useEffect:wd,useImperativeHandle:y1,useInsertionEffect:g1,useLayoutEffect:v1,useMemo:b1,useReducer:xd,useRef:f1,useState:function(){return xd(li)},useDebugValue:bd,useDeferredValue:function(t){var r=Tn();return k1(r,Mt.memoizedState,t)},useTransition:function(){var t=xd(li)[0],r=Tn().memoizedState;return[t,r]},useMutableSource:i1,useSyncExternalStore:s1,useId:C1,unstable_isNewReconciler:!1},Ey={readContext:An,useCallback:w1,useContext:An,useEffect:wd,useImperativeHandle:y1,useInsertionEffect:g1,useLayoutEffect:v1,useMemo:b1,useReducer:yd,useRef:f1,useState:function(){return yd(li)},useDebugValue:bd,useDeferredValue:function(t){var r=Tn();return Mt===null?r.memoizedState=t:k1(r,Mt.memoizedState,t)},useTransition:function(){var t=yd(li)[0],r=Tn().memoizedState;return[t,r]},useMutableSource:i1,useSyncExternalStore:s1,useId:C1,unstable_isNewReconciler:!1};function Vn(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function kd(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:q({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ps={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Zt(),u=qr(t),m=xr(c,u);m.payload=r,a!=null&&(m.callback=a),r=Br(t,m,u),r!==null&&(Kn(r,t,u,c),Ms(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Zt(),u=qr(t),m=xr(c,u);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Br(t,m,u),r!==null&&(Kn(r,t,u,c),Ms(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Zt(),c=qr(t),u=xr(a,c);u.tag=2,r!=null&&(u.callback=r),r=Br(t,u,c),r!==null&&(Kn(r,t,c,a),Ms(r,t,c))}};function $1(t,r,a,c,u,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!Ka(a,c)||!Ka(u,m):!0}function M1(t,r,a){var c=!1,u=Or,m=r.contextType;return typeof m=="object"&&m!==null?m=An(m):(u=en(r)?ho:qt.current,c=r.contextTypes,m=(c=c!=null)?Qo(t,u):Or),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ps,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function N1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Ps.enqueueReplaceState(r,r.state,null)}function Cd(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},cd(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=An(m):(m=en(r)?ho:qt.current,u.context=Qo(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(kd(t,r,m,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Ps.enqueueReplaceState(u,u.state,null),Ns(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,r){try{var a="",c=r;do a+=ee(c),c=c.return;while(c);var u=a}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function _d(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function jd(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function R1(t,r,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ws||(Ws=!0,Fd=c),jd(t,r)},a}function L1(t,r,a){a=xr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){jd(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){jd(t,r),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function A1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Iy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=Ky.bind(null,t,r,a),r.then(t,t))}function T1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function E1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=xr(-1,1),r.tag=2,Br(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Py=O.ReactCurrentOwner,tn=!1;function Qt(t,r,a,c){r.child=t===null?e1(r,null,a,c):ea(r,t.child,a,c)}function I1(t,r,a,c,u){a=a.render;var m=r.ref;return na(r,u),c=gd(t,r,a,c,m,u),a=vd(),t!==null&&!tn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(ft&&a&&Jc(r),r.flags|=1,Qt(t,r,c,u),r.child)}function P1(t,r,a,c,u){if(t===null){var m=a.type;return typeof m=="function"&&!Gd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,z1(t,r,m,c,u)):(t=Ks(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ka,a(b,c)&&t.ref===r.ref)return yr(t,r,u)}return r.flags|=1,t=Gr(m,c),t.ref=r.ref,t.return=r,r.child=t}function z1(t,r,a,c,u){if(t!==null){var m=t.memoizedProps;if(Ka(m,c)&&t.ref===r.ref)if(tn=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(tn=!0);else return r.lanes=t.lanes,yr(t,r,u)}return Sd(t,r,a,c,u)}function O1(t,r,a){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ia,gn),gn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(ia,gn),gn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ct(ia,gn),gn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,ct(ia,gn),gn|=c;return Qt(t,r,u,a),r.child}function D1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Sd(t,r,a,c,u){var m=en(a)?ho:qt.current;return m=Qo(r,m),na(r,u),a=gd(t,r,a,c,m,u),c=vd(),t!==null&&!tn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,yr(t,r,u)):(ft&&c&&Jc(r),r.flags|=1,Qt(t,r,a,u),r.child)}function F1(t,r,a,c,u){if(en(a)){var m=!0;ws(r)}else m=!1;if(na(r,u),r.stateNode===null)Os(t,r),M1(r,a,c),Cd(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var H=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=An(re):(re=en(a)?ho:qt.current,re=Qo(r,re));var he=a.getDerivedStateFromProps,pe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||H!==re)&&N1(r,b,c,re),Fr=!1;var ue=r.memoizedState;b.state=ue,Ns(r,c,b,u),H=r.memoizedState,I!==c||ue!==H||Jt.current||Fr?(typeof he=="function"&&(kd(r,a,he,c),H=r.memoizedState),(I=Fr||$1(r,a,I,c,ue,H,re))?(pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),b.props=c,b.state=H,b.context=re,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,n1(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:Vn(r.type,I),b.props=re,pe=r.pendingProps,ue=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=An(H):(H=en(a)?ho:qt.current,H=Qo(r,H));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==pe||ue!==H)&&N1(r,b,c,H),Fr=!1,ue=r.memoizedState,b.state=ue,Ns(r,c,b,u);var je=r.memoizedState;I!==pe||ue!==je||Jt.current||Fr?(typeof ye=="function"&&(kd(r,a,ye,c),je=r.memoizedState),(re=Fr||$1(r,a,re,c,ue,je,H)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,H)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),b.props=c,b.state=je,b.context=H,c=re):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return $d(t,r,a,c,m,u)}function $d(t,r,a,c,u,m){D1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&qp(r,a,!1),yr(t,r,m);c=r.stateNode,Py.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=ea(r,t.child,null,m),r.child=ea(r,null,I,m)):Qt(t,r,I,m),r.memoizedState=c.state,u&&qp(r,a,!0),r.child}function B1(t){var r=t.stateNode;r.pendingContext?Wp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Wp(t,r.context,!1),dd(t,r.containerInfo)}function H1(t,r,a,c,u){return Jo(),rd(u),r.flags|=256,Qt(t,r,a,c),r.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function W1(t,r,a){var c=r.pendingProps,u=gt.current,m=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),ct(gt,u&1),t===null)return nd(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Qs(b,c,0,null),t=ko(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=Nd(a),r.memoizedState=Md,t):Rd(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return zy(t,r,b,c,I,u,a);if(m){m=c.fallback,b=r.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Gr(u,H),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Gr(I,m):(m=ko(m,b,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?Nd(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=Md,c}return m=t.child,t=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Rd(t,r){return r=Qs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function zs(t,r,a,c){return c!==null&&rd(c),ea(r,t.child,null,a),t=Rd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function zy(t,r,a,c,u,m,b){if(a)return r.flags&256?(r.flags&=-257,c=_d(Error(i(422))),zs(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=Qs({mode:"visible",children:c.children},u,0,null),m=ko(m,u,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&ea(r,t.child,null,b),r.child.memoizedState=Nd(b),r.memoizedState=Md,m);if((r.mode&1)===0)return zs(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(i(419)),c=_d(m,c,void 0),zs(t,r,b,c)}if(I=(b&t.childLanes)!==0,tn||I){if(c=Et,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,vr(t,u),Kn(c,t,u,-1))}return Vd(),c=_d(Error(i(421))),zs(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=Qy.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,mn=Pr(u.nextSibling),fn=r,ft=!0,qn=null,t!==null&&(Rn[Ln++]=mr,Rn[Ln++]=gr,Rn[Ln++]=po,mr=t.id,gr=t.overflow,po=r),r=Rd(r,c.children),r.flags|=4096,r)}function U1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),sd(t.return,r,a)}function Ld(t,r,a,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=u)}function q1(t,r,a){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(Qt(t,r,c.children,a),c=gt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U1(t,a,r);else if(t.tag===19)U1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(ct(gt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&Rs(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Ld(r,!1,u,a,m);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Rs(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ld(r,!0,a,null,m);break;case"together":Ld(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Os(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function yr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),xo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Gr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Gr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Oy(t,r,a){switch(r.tag){case 3:B1(r),Jo();break;case 5:a1(r);break;case 1:en(r.type)&&ws(r);break;case 4:dd(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;ct(Ss,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ct(gt,gt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?W1(t,r,a):(ct(gt,gt.current&1),t=yr(t,r,a),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return q1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(gt,gt.current),c)break;return null;case 22:case 23:return r.lanes=0,O1(t,r,a)}return yr(t,r,a)}var V1,Ad,G1,Y1;V1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ad=function(){},G1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,go(sr.current);var m=null;switch(a){case"input":u=_e(t,u),c=_e(t,c),m=[];break;case"select":u=q({},u,{value:void 0}),c=q({},c,{value:void 0}),m=[];break;case"textarea":u=xt(t,u),c=xt(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=vs)}mt(a,c);var b;a=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var H=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&H!==I&&(H!=null||I!=null))if(re==="style")if(I){for(b in I)!I.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&I[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(m||(m=[]),m.push(re,a)),a=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&ut("scroll",t),m||I===H||(m=[])):(m=m||[]).push(re,H))}a&&(m=m||[]).push("style",a);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},Y1=function(t,r,a,c){a!==c&&(r.flags|=4)};function di(t,r){if(!ft)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Gt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Dy(t,r,a){var c=r.pendingProps;switch(ed(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(r),null;case 1:return en(r.type)&&ys(),Gt(r),null;case 3:return c=r.stateNode,ra(),ht(Jt),ht(qt),pd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(_s(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,qn!==null&&(Wd(qn),qn=null))),Ad(t,r),Gt(r),null;case 5:ud(r);var u=go(ai.current);if(a=r.type,t!==null&&r.stateNode!=null)G1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Gt(r),null}if(t=go(sr.current),_s(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[ir]=r,c[ei]=m,t=(r.mode&1)!==0,a){case"dialog":ut("cancel",c),ut("close",c);break;case"iframe":case"object":case"embed":ut("load",c);break;case"video":case"audio":for(u=0;u<Za.length;u++)ut(Za[u],c);break;case"source":ut("error",c);break;case"img":case"image":case"link":ut("error",c),ut("load",c);break;case"details":ut("toggle",c);break;case"input":Me(c,m),ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},ut("invalid",c);break;case"textarea":me(c,m),ut("invalid",c)}mt(a,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var I=m[b];b==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&gs(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&gs(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&ut("scroll",c)}switch(a){case"input":ce(c),De(c,m,!0);break;case"textarea":ce(c),Ye(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=vs)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=et(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[ir]=r,t[ei]=c,V1(t,r,!1,!1),r.stateNode=t;e:{switch(b=Ct(a,c),a){case"dialog":ut("cancel",t),ut("close",t),u=c;break;case"iframe":case"object":case"embed":ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<Za.length;u++)ut(Za[u],t);u=c;break;case"source":ut("error",t),u=c;break;case"img":case"image":case"link":ut("error",t),ut("load",t),u=c;break;case"details":ut("toggle",t),u=c;break;case"input":Me(t,c),u=_e(t,c),ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=q({},c,{value:void 0}),ut("invalid",t);break;case"textarea":me(t,c),u=xt(t,c),ut("invalid",t);break;default:u=c}mt(a,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?Ie(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&nt(t,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&jn(t,H):typeof H=="number"&&jn(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?H!=null&&m==="onScroll"&&ut("scroll",t):H!=null&&j(t,m,H,b))}switch(a){case"input":ce(t),De(t,c,!1);break;case"textarea":ce(t),Ye(t);break;case"option":c.value!=null&&t.setAttribute("value",""+P(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Je(t,!!c.multiple,m,!1):c.defaultValue!=null&&Je(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=vs)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Gt(r),null;case 6:if(t&&r.stateNode!=null)Y1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=go(ai.current),go(sr.current),_s(r)){if(c=r.stateNode,a=r.memoizedProps,c[ir]=r,(m=c.nodeValue!==a)&&(t=fn,t!==null))switch(t.tag){case 3:gs(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gs(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ir]=r,r.stateNode=c}return Gt(r),null;case 13:if(ht(gt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&mn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Zp(),Jo(),r.flags|=98560,m=!1;else if(m=_s(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(i(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[ir]=r}else Jo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Gt(r),m=!1}else qn!==null&&(Wd(qn),qn=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(gt.current&1)!==0?Nt===0&&(Nt=3):Vd())),r.updateQueue!==null&&(r.flags|=4),Gt(r),null);case 4:return ra(),Ad(t,r),t===null&&Xa(r.stateNode.containerInfo),Gt(r),null;case 10:return id(r.type._context),Gt(r),null;case 17:return en(r.type)&&ys(),Gt(r),null;case 19:if(ht(gt),m=r.memoizedState,m===null)return Gt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)di(m,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=Rs(t),b!==null){for(r.flags|=128,di(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return ct(gt,gt.current&1|2),r.child}t=t.sibling}m.tail!==null&&Ke()>sa&&(r.flags|=128,c=!0,di(m,!1),r.lanes=4194304)}else{if(!c)if(t=Rs(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),di(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!ft)return Gt(r),null}else 2*Ke()-m.renderingStartTime>sa&&a!==1073741824&&(r.flags|=128,c=!0,di(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Ke(),r.sibling=null,a=gt.current,ct(gt,c?a&1|2:a&1),r):(Gt(r),null);case 22:case 23:return qd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(gn&1073741824)!==0&&(Gt(r),r.subtreeFlags&6&&(r.flags|=8192)):Gt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Fy(t,r){switch(ed(r),r.tag){case 1:return en(r.type)&&ys(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ra(),ht(Jt),ht(qt),pd(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ud(r),null;case 13:if(ht(gt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Jo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ht(gt),null;case 4:return ra(),null;case 10:return id(r.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Ds=!1,Yt=!1,By=typeof WeakSet=="function"?WeakSet:Set,ke=null;function aa(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){yt(t,r,c)}else a.current=null}function Td(t,r,a){try{a()}catch(c){yt(t,r,c)}}var K1=!1;function Hy(t,r){if(qc=as,t=$p(),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,I=-1,H=-1,re=0,he=0,pe=t,ue=null;t:for(;;){for(var ye;pe!==a||u!==0&&pe.nodeType!==3||(I=b+u),pe!==m||c!==0&&pe.nodeType!==3||(H=b+c),pe.nodeType===3&&(b+=pe.nodeValue.length),(ye=pe.firstChild)!==null;)ue=pe,pe=ye;for(;;){if(pe===t)break t;if(ue===a&&++re===u&&(I=b),ue===m&&++he===c&&(H=b),(ye=pe.nextSibling)!==null)break;pe=ue,ue=pe.parentNode}pe=ye}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:t,selectionRange:a},as=!1,ke=r;ke!==null;)if(r=ke,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ke=t;else for(;ke!==null;){r=ke;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Se=je.memoizedProps,wt=je.memoizedState,Z=r.stateNode,V=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Se:Vn(r.type,Se),wt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ge){yt(r,r.return,ge)}if(t=r.sibling,t!==null){t.return=r.return,ke=t;break}ke=r.return}return je=K1,K1=!1,je}function ui(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Td(r,a,m)}u=u.next}while(u!==c)}}function Fs(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ed(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function Q1(t){var r=t.alternate;r!==null&&(t.alternate=null,Q1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ir],delete r[ei],delete r[Qc],delete r[_y],delete r[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z1(t){return t.tag===5||t.tag===3||t.tag===4}function X1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=vs));else if(c!==4&&(t=t.child,t!==null))for(Id(t,r,a),t=t.sibling;t!==null;)Id(t,r,a),t=t.sibling}function Pd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Pd(t,r,a),t=t.sibling;t!==null;)Pd(t,r,a),t=t.sibling}var Ft=null,Gn=!1;function Hr(t,r,a){for(a=a.child;a!==null;)J1(t,r,a),a=a.sibling}function J1(t,r,a){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 5:Yt||aa(a,r);case 6:var c=Ft,u=Gn;Ft=null,Hr(t,r,a),Ft=c,Gn=u,Ft!==null&&(Gn?(t=Ft,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ft.removeChild(a.stateNode));break;case 18:Ft!==null&&(Gn?(t=Ft,a=a.stateNode,t.nodeType===8?Kc(t.parentNode,a):t.nodeType===1&&Kc(t,a),Wa(t)):Kc(Ft,a.stateNode));break;case 4:c=Ft,u=Gn,Ft=a.stateNode.containerInfo,Gn=!0,Hr(t,r,a),Ft=c,Gn=u;break;case 0:case 11:case 14:case 15:if(!Yt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Td(a,r,b),u=u.next}while(u!==c)}Hr(t,r,a);break;case 1:if(!Yt&&(aa(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){yt(a,r,I)}Hr(t,r,a);break;case 21:Hr(t,r,a);break;case 22:a.mode&1?(Yt=(c=Yt)||a.memoizedState!==null,Hr(t,r,a),Yt=c):Hr(t,r,a);break;default:Hr(t,r,a)}}function ef(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new By),r.forEach(function(c){var u=Zy.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Yn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var m=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Ft=I.stateNode,Gn=!1;break e;case 3:Ft=I.stateNode.containerInfo,Gn=!0;break e;case 4:Ft=I.stateNode.containerInfo,Gn=!0;break e}I=I.return}if(Ft===null)throw Error(i(160));J1(m,b,u),Ft=null,Gn=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(re){yt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)tf(r,t),r=r.sibling}function tf(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(r,t),cr(t),c&4){try{ui(3,t,t.return),Fs(3,t)}catch(Se){yt(t,t.return,Se)}try{ui(5,t,t.return)}catch(Se){yt(t,t.return,Se)}}break;case 1:Yn(r,t),cr(t),c&512&&a!==null&&aa(a,a.return);break;case 5:if(Yn(r,t),cr(t),c&512&&a!==null&&aa(a,a.return),t.flags&32){var u=t.stateNode;try{jn(u,"")}catch(Se){yt(t,t.return,Se)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Oe(u,m),Ct(I,b);var re=Ct(I,m);for(b=0;b<H.length;b+=2){var he=H[b],pe=H[b+1];he==="style"?Ie(u,pe):he==="dangerouslySetInnerHTML"?nt(u,pe):he==="children"?jn(u,pe):j(u,he,pe,re)}switch(I){case"input":Ge(u,m);break;case"textarea":Le(u,m);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ye=m.value;ye!=null?Je(u,!!m.multiple,ye,!1):ue!==!!m.multiple&&(m.defaultValue!=null?Je(u,!!m.multiple,m.defaultValue,!0):Je(u,!!m.multiple,m.multiple?[]:"",!1))}u[ei]=m}catch(Se){yt(t,t.return,Se)}}break;case 6:if(Yn(r,t),cr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch(Se){yt(t,t.return,Se)}}break;case 3:if(Yn(r,t),cr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wa(r.containerInfo)}catch(Se){yt(t,t.return,Se)}break;case 4:Yn(r,t),cr(t);break;case 13:Yn(r,t),cr(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Dd=Ke())),c&4&&ef(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Yt=(re=Yt)||he,Yn(r,t),Yt=re):Yn(r,t),cr(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!he&&(t.mode&1)!==0)for(ke=t,he=t.child;he!==null;){for(pe=ke=he;ke!==null;){switch(ue=ke,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:ui(4,ue,ue.return);break;case 1:aa(ue,ue.return);var je=ue.stateNode;if(typeof je.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Se){yt(c,a,Se)}}break;case 5:aa(ue,ue.return);break;case 22:if(ue.memoizedState!==null){of(pe);continue}}ye!==null?(ye.return=ue,ke=ye):of(pe)}he=he.sibling}e:for(he=null,pe=t;;){if(pe.tag===5){if(he===null){he=pe;try{u=pe.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=pe.stateNode,H=pe.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=zo("display",b))}catch(Se){yt(t,t.return,Se)}}}else if(pe.tag===6){if(he===null)try{pe.stateNode.nodeValue=re?"":pe.memoizedProps}catch(Se){yt(t,t.return,Se)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;he===pe&&(he=null),pe=pe.return}he===pe&&(he=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Yn(r,t),cr(t),c&4&&ef(t);break;case 21:break;default:Yn(r,t),cr(t)}}function cr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Z1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(jn(u,""),c.flags&=-33);var m=X1(t);Pd(t,m,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=X1(t);Id(t,I,b);break;default:throw Error(i(161))}}catch(H){yt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Wy(t,r,a){ke=t,nf(t)}function nf(t,r,a){for(var c=(t.mode&1)!==0;ke!==null;){var u=ke,m=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Ds;if(!b){var I=u.alternate,H=I!==null&&I.memoizedState!==null||Yt;I=Ds;var re=Yt;if(Ds=b,(Yt=H)&&!re)for(ke=u;ke!==null;)b=ke,H=b.child,b.tag===22&&b.memoizedState!==null?af(u):H!==null?(H.return=b,ke=H):af(u);for(;m!==null;)ke=m,nf(m),m=m.sibling;ke=u,Ds=I,Yt=re}rf(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,ke=m):rf(t)}}function rf(t){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yt||Fs(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Yt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&o1(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}o1(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var he=re.memoizedState;if(he!==null){var pe=he.dehydrated;pe!==null&&Wa(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Yt||r.flags&512&&Ed(r)}catch(ue){yt(r,r.return,ue)}}if(r===t){ke=null;break}if(a=r.sibling,a!==null){a.return=r.return,ke=a;break}ke=r.return}}function of(t){for(;ke!==null;){var r=ke;if(r===t){ke=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ke=a;break}ke=r.return}}function af(t){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Fs(4,r)}catch(H){yt(r,a,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(H){yt(r,u,H)}}var m=r.return;try{Ed(r)}catch(H){yt(r,m,H)}break;case 5:var b=r.return;try{Ed(r)}catch(H){yt(r,b,H)}}}catch(H){yt(r,r.return,H)}if(r===t){ke=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ke=I;break}ke=r.return}}var Uy=Math.ceil,Bs=O.ReactCurrentDispatcher,zd=O.ReactCurrentOwner,En=O.ReactCurrentBatchConfig,tt=0,Et=null,_t=null,Bt=0,gn=0,ia=zr(0),Nt=0,hi=null,xo=0,Hs=0,Od=0,pi=null,nn=null,Dd=0,sa=1/0,wr=null,Ws=!1,Fd=null,Wr=null,Us=!1,Ur=null,qs=0,fi=0,Bd=null,Vs=-1,Gs=0;function Zt(){return(tt&6)!==0?Ke():Vs!==-1?Vs:Vs=Ke()}function qr(t){return(t.mode&1)===0?1:(tt&2)!==0&&Bt!==0?Bt&-Bt:$y.transition!==null?(Gs===0&&(Gs=Xh()),Gs):(t=it,t!==0||(t=window.event,t=t===void 0?16:sp(t.type)),t)}function Kn(t,r,a,c){if(50<fi)throw fi=0,Bd=null,Error(i(185));Oa(t,a,c),((tt&2)===0||t!==Et)&&(t===Et&&((tt&2)===0&&(Hs|=a),Nt===4&&Vr(t,Bt)),rn(t,c),a===1&&tt===0&&(r.mode&1)===0&&(sa=Ke()+500,bs&&Dr()))}function rn(t,r){var a=t.callbackNode;$x(t,r);var c=ns(t,t===Et?Bt:0);if(c===0)a!==null&&be(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&be(a),r===1)t.tag===0?Sy(lf.bind(null,t)):Vp(lf.bind(null,t)),ky(function(){(tt&6)===0&&Dr()}),a=null;else{switch(Jh(c)){case 1:a=$t;break;case 4:a=Nn;break;case 16:a=Fo;break;case 536870912:a=Zh;break;default:a=Fo}a=gf(a,sf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function sf(t,r){if(Vs=-1,Gs=0,(tt&6)!==0)throw Error(i(327));var a=t.callbackNode;if(la()&&t.callbackNode!==a)return null;var c=ns(t,t===Et?Bt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Ys(t,c);else{r=c;var u=tt;tt|=2;var m=df();(Et!==t||Bt!==r)&&(wr=null,sa=Ke()+500,wo(t,r));do try{Gy();break}catch(I){cf(t,I)}while(!0);ad(),Bs.current=m,tt=u,_t!==null?r=0:(Et=null,Bt=0,r=Nt)}if(r!==0){if(r===2&&(u=bc(t),u!==0&&(c=u,r=Hd(t,u))),r===1)throw a=hi,wo(t,0),Vr(t,c),rn(t,Ke()),a;if(r===6)Vr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!qy(u)&&(r=Ys(t,c),r===2&&(m=bc(t),m!==0&&(c=m,r=Hd(t,m))),r===1))throw a=hi,wo(t,0),Vr(t,c),rn(t,Ke()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:bo(t,nn,wr);break;case 3:if(Vr(t,c),(c&130023424)===c&&(r=Dd+500-Ke(),10<r)){if(ns(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Zt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Yc(bo.bind(null,t,nn,wr),r);break}bo(t,nn,wr);break;case 4:if(Vr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-Wn(c);m=1<<b,b=r[b],b>u&&(u=b),c&=~m}if(c=u,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Uy(c/1960))-c,10<c){t.timeoutHandle=Yc(bo.bind(null,t,nn,wr),c);break}bo(t,nn,wr);break;case 5:bo(t,nn,wr);break;default:throw Error(i(329))}}}return rn(t,Ke()),t.callbackNode===a?sf.bind(null,t):null}function Hd(t,r){var a=pi;return t.current.memoizedState.isDehydrated&&(wo(t,r).flags|=256),t=Ys(t,r),t!==2&&(r=nn,nn=a,r!==null&&Wd(r)),t}function Wd(t){nn===null?nn=t:nn.push.apply(nn,t)}function qy(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],m=u.getSnapshot;u=u.value;try{if(!Un(m(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(t,r){for(r&=~Od,r&=~Hs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Wn(r),c=1<<a;t[a]=-1,r&=~c}}function lf(t){if((tt&6)!==0)throw Error(i(327));la();var r=ns(t,0);if((r&1)===0)return rn(t,Ke()),null;var a=Ys(t,r);if(t.tag!==0&&a===2){var c=bc(t);c!==0&&(r=c,a=Hd(t,c))}if(a===1)throw a=hi,wo(t,0),Vr(t,r),rn(t,Ke()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,bo(t,nn,wr),rn(t,Ke()),null}function Ud(t,r){var a=tt;tt|=1;try{return t(r)}finally{tt=a,tt===0&&(sa=Ke()+500,bs&&Dr())}}function yo(t){Ur!==null&&Ur.tag===0&&(tt&6)===0&&la();var r=tt;tt|=1;var a=En.transition,c=it;try{if(En.transition=null,it=1,t)return t()}finally{it=c,En.transition=a,tt=r,(tt&6)===0&&Dr()}}function qd(){gn=ia.current,ht(ia)}function wo(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,by(a)),_t!==null)for(a=_t.return;a!==null;){var c=a;switch(ed(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ys();break;case 3:ra(),ht(Jt),ht(qt),pd();break;case 5:ud(c);break;case 4:ra();break;case 13:ht(gt);break;case 19:ht(gt);break;case 10:id(c.type._context);break;case 22:case 23:qd()}a=a.return}if(Et=t,_t=t=Gr(t.current,null),Bt=gn=r,Nt=0,hi=null,Od=Hs=xo=0,nn=pi=null,mo!==null){for(r=0;r<mo.length;r++)if(a=mo[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=u,c.next=b}a.pending=c}mo=null}return t}function cf(t,r){do{var a=_t;try{if(ad(),Ls.current=Is,As){for(var c=vt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}As=!1}if(vo=0,Tt=Mt=vt=null,ii=!1,si=0,zd.current=null,a===null||a.return===null){Nt=1,hi=r,_t=null;break}e:{var m=t,b=a.return,I=a,H=r;if(r=Bt,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,he=I,pe=he.tag;if((he.mode&1)===0&&(pe===0||pe===11||pe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=T1(b);if(ye!==null){ye.flags&=-257,E1(ye,b,I,m,r),ye.mode&1&&A1(m,re,r),r=ye,H=re;var je=r.updateQueue;if(je===null){var Se=new Set;Se.add(H),r.updateQueue=Se}else je.add(H);break e}else{if((r&1)===0){A1(m,re,r),Vd();break e}H=Error(i(426))}}else if(ft&&I.mode&1){var wt=T1(b);if(wt!==null){(wt.flags&65536)===0&&(wt.flags|=256),E1(wt,b,I,m,r),rd(oa(H,I));break e}}m=H=oa(H,I),Nt!==4&&(Nt=2),pi===null?pi=[m]:pi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var Z=R1(m,H,r);r1(m,Z);break e;case 1:I=H;var V=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Wr===null||!Wr.has(ne)))){m.flags|=65536,r&=-r,m.lanes|=r;var ge=L1(m,I,r);r1(m,ge);break e}}m=m.return}while(m!==null)}hf(a)}catch($e){r=$e,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function df(){var t=Bs.current;return Bs.current=Is,t===null?Is:t}function Vd(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Et===null||(xo&268435455)===0&&(Hs&268435455)===0||Vr(Et,Bt)}function Ys(t,r){var a=tt;tt|=2;var c=df();(Et!==t||Bt!==r)&&(wr=null,wo(t,r));do try{Vy();break}catch(u){cf(t,u)}while(!0);if(ad(),tt=a,Bs.current=c,_t!==null)throw Error(i(261));return Et=null,Bt=0,Nt}function Vy(){for(;_t!==null;)uf(_t)}function Gy(){for(;_t!==null&&!at();)uf(_t)}function uf(t){var r=mf(t.alternate,t,gn);t.memoizedProps=t.pendingProps,r===null?hf(t):_t=r,zd.current=null}function hf(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Dy(a,r,gn),a!==null){_t=a;return}}else{if(a=Fy(a,r),a!==null){a.flags&=32767,_t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,_t=null;return}}if(r=r.sibling,r!==null){_t=r;return}_t=r=t}while(r!==null);Nt===0&&(Nt=5)}function bo(t,r,a){var c=it,u=En.transition;try{En.transition=null,it=1,Yy(t,r,a,c)}finally{En.transition=u,it=c}return null}function Yy(t,r,a,c){do la();while(Ur!==null);if((tt&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Mx(t,m),t===Et&&(_t=Et=null,Bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Us||(Us=!0,gf(Fo,function(){return la(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=En.transition,En.transition=null;var b=it;it=1;var I=tt;tt|=4,zd.current=null,Hy(t,a),tf(a,t),fy(Vc),as=!!qc,Vc=qc=null,t.current=a,Wy(a),Fe(),tt=I,it=b,En.transition=m}else t.current=a;if(Us&&(Us=!1,Ur=t,qs=u),m=t.pendingLanes,m===0&&(Wr=null),kx(a.stateNode),rn(t,Ke()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Ws)throw Ws=!1,t=Fd,Fd=null,t;return(qs&1)!==0&&t.tag!==0&&la(),m=t.pendingLanes,(m&1)!==0?t===Bd?fi++:(fi=0,Bd=t):fi=0,Dr(),null}function la(){if(Ur!==null){var t=Jh(qs),r=En.transition,a=it;try{if(En.transition=null,it=16>t?16:t,Ur===null)var c=!1;else{if(t=Ur,Ur=null,qs=0,(tt&6)!==0)throw Error(i(331));var u=tt;for(tt|=4,ke=t.current;ke!==null;){var m=ke,b=m.child;if((ke.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var re=I[H];for(ke=re;ke!==null;){var he=ke;switch(he.tag){case 0:case 11:case 15:ui(8,he,m)}var pe=he.child;if(pe!==null)pe.return=he,ke=pe;else for(;ke!==null;){he=ke;var ue=he.sibling,ye=he.return;if(Q1(he),he===re){ke=null;break}if(ue!==null){ue.return=ye,ke=ue;break}ke=ye}}}var je=m.alternate;if(je!==null){var Se=je.child;if(Se!==null){je.child=null;do{var wt=Se.sibling;Se.sibling=null,Se=wt}while(Se!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,ke=b;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ui(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,ke=Z;break e}ke=m.return}}var V=t.current;for(ke=V;ke!==null;){b=ke;var ne=b.child;if((b.subtreeFlags&2064)!==0&&ne!==null)ne.return=b,ke=ne;else e:for(b=V;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Fs(9,I)}}catch($e){yt(I,I.return,$e)}if(I===b){ke=null;break e}var ge=I.sibling;if(ge!==null){ge.return=I.return,ke=ge;break e}ke=I.return}}if(tt=u,Dr(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(Ji,t)}catch{}c=!0}return c}finally{it=a,En.transition=r}}return!1}function pf(t,r,a){r=oa(a,r),r=R1(t,r,1),t=Br(t,r,1),r=Zt(),t!==null&&(Oa(t,1,r),rn(t,r))}function yt(t,r,a){if(t.tag===3)pf(t,t,a);else for(;r!==null;){if(r.tag===3){pf(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){t=oa(a,t),t=L1(r,t,1),r=Br(r,t,1),t=Zt(),r!==null&&(Oa(r,1,t),rn(r,t));break}}r=r.return}}function Ky(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Zt(),t.pingedLanes|=t.suspendedLanes&a,Et===t&&(Bt&a)===a&&(Nt===4||Nt===3&&(Bt&130023424)===Bt&&500>Ke()-Dd?wo(t,0):Od|=a),rn(t,r)}function ff(t,r){r===0&&((t.mode&1)===0?r=1:(r=ts,ts<<=1,(ts&130023424)===0&&(ts=4194304)));var a=Zt();t=vr(t,r),t!==null&&(Oa(t,r,a),rn(t,a))}function Qy(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),ff(t,a)}function Zy(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),ff(t,a)}var mf;mf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||Jt.current)tn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return tn=!1,Oy(t,r,a);tn=(t.flags&131072)!==0}else tn=!1,ft&&(r.flags&1048576)!==0&&Gp(r,Cs,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Os(t,r),t=r.pendingProps;var u=Qo(r,qt.current);na(r,a),u=gd(null,r,c,t,u,a);var m=vd();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,en(c)?(m=!0,ws(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,cd(r),u.updater=Ps,r.stateNode=u,u._reactInternals=r,Cd(r,c,t,a),r=$d(null,r,c,!0,m,a)):(r.tag=0,ft&&m&&Jc(r),Qt(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Os(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=Jy(c),t=Vn(c,t),u){case 0:r=Sd(null,r,c,t,a);break e;case 1:r=F1(null,r,c,t,a);break e;case 11:r=I1(null,r,c,t,a);break e;case 14:r=P1(null,r,c,Vn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),Sd(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),F1(t,r,c,u,a);case 3:e:{if(B1(r),t===null)throw Error(i(387));c=r.pendingProps,m=r.memoizedState,u=m.element,n1(t,r),Ns(r,c,null,a);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=oa(Error(i(423)),r),r=H1(t,r,c,a,u);break e}else if(c!==u){u=oa(Error(i(424)),r),r=H1(t,r,c,a,u);break e}else for(mn=Pr(r.stateNode.containerInfo.firstChild),fn=r,ft=!0,qn=null,a=e1(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jo(),c===u){r=yr(t,r,a);break e}Qt(t,r,c,a)}r=r.child}return r;case 5:return a1(r),t===null&&nd(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,b=u.children,Gc(c,u)?b=null:m!==null&&Gc(c,m)&&(r.flags|=32),D1(t,r),Qt(t,r,b,a),r.child;case 6:return t===null&&nd(r),null;case 13:return W1(t,r,a);case 4:return dd(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=ea(r,null,c,a):Qt(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),I1(t,r,c,u,a);case 7:return Qt(t,r,r.pendingProps,a),r.child;case 8:return Qt(t,r,r.pendingProps.children,a),r.child;case 12:return Qt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,b=u.value,ct(Ss,c._currentValue),c._currentValue=b,m!==null)if(Un(m.value,b)){if(m.children===u.children&&!Jt.current){r=yr(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){b=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=xr(-1,a&-a),H.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var he=re.pending;he===null?H.next=H:(H.next=he.next,he.next=H),re.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),sd(m.return,a,r),I.lanes|=a;break}H=H.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),sd(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Qt(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,na(r,a),u=An(u),c=c(u),r.flags|=1,Qt(t,r,c,a),r.child;case 14:return c=r.type,u=Vn(c,r.pendingProps),u=Vn(c.type,u),P1(t,r,c,u,a);case 15:return z1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),Os(t,r),r.tag=1,en(c)?(t=!0,ws(r)):t=!1,na(r,a),M1(r,c,u),Cd(r,c,u,a),$d(null,r,c,!0,t,a);case 19:return q1(t,r,a);case 22:return O1(t,r,a)}throw Error(i(156,r.tag))};function gf(t,r){return xe(t,r)}function Xy(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,r,a,c){return new Xy(t,r,a,c)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jy(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===W)return 11;if(t===ae)return 14}return 2}function Gr(t,r){var a=t.alternate;return a===null?(a=In(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ks(t,r,a,c,u,m){var b=2;if(c=t,typeof t=="function")Gd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case E:return ko(a.children,u,m,r);case A:b=8,u|=8;break;case D:return t=In(12,a,r,u|2),t.elementType=D,t.lanes=m,t;case Y:return t=In(13,a,r,u),t.elementType=Y,t.lanes=m,t;case X:return t=In(19,a,r,u),t.elementType=X,t.lanes=m,t;case se:return Qs(a,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case K:b=9;break e;case W:b=11;break e;case ae:b=14;break e;case de:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=In(b,a,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function ko(t,r,a,c){return t=In(7,t,c,r),t.lanes=a,t}function Qs(t,r,a,c){return t=In(22,t,c,r),t.elementType=se,t.lanes=a,t.stateNode={isHidden:!1},t}function Yd(t,r,a){return t=In(6,t,null,r),t.lanes=a,t}function Kd(t,r,a){return r=In(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function e3(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Qd(t,r,a,c,u,m,b,I,H){return t=new e3(t,r,a,I,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=In(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(m),t}function t3(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function vf(t){if(!t)return Or;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(en(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(en(a))return Up(t,a,r)}return r}function xf(t,r,a,c,u,m,b,I,H){return t=Qd(a,c,!0,t,u,m,b,I,H),t.context=vf(null),a=t.current,c=Zt(),u=qr(a),m=xr(c,u),m.callback=r??null,Br(a,m,u),t.current.lanes=u,Oa(t,u,c),rn(t,c),t}function Zs(t,r,a,c){var u=r.current,m=Zt(),b=qr(u);return a=vf(a),r.context===null?r.context=a:r.pendingContext=a,r=xr(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Br(u,r,b),t!==null&&(Kn(t,u,b,m),Ms(t,u,b)),b}function Xs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Zd(t,r){yf(t,r),(t=t.alternate)&&yf(t,r)}function n3(){return null}var wf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xd(t){this._internalRoot=t}Js.prototype.render=Xd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));Zs(t,r,null,null)},Js.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;yo(function(){Zs(null,t,null,null)}),r[pr]=null}};function Js(t){this._internalRoot=t}Js.prototype.unstable_scheduleHydration=function(t){if(t){var r=np();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Tr.length&&r!==0&&r<Tr[a].priority;a++);Tr.splice(a,0,t),a===0&&ap(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bf(){}function r3(t,r,a,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=Xs(b);m.call(re)}}var b=xf(r,c,t,0,null,!1,!1,"",bf);return t._reactRootContainer=b,t[pr]=b.current,Xa(t.nodeType===8?t.parentNode:t),yo(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=Xs(H);I.call(re)}}var H=Qd(t,0,!1,null,null,!1,!1,"",bf);return t._reactRootContainer=H,t[pr]=H.current,Xa(t.nodeType===8?t.parentNode:t),yo(function(){Zs(r,H,a,c)}),H}function tl(t,r,a,c,u){var m=a._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var I=u;u=function(){var H=Xs(b);I.call(H)}}Zs(r,b,t,u)}else b=r3(a,r,t,u,c);return Xs(b)}ep=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=za(r.pendingLanes);a!==0&&(Cc(r,a|1),rn(r,Ke()),(tt&6)===0&&(sa=Ke()+500,Dr()))}break;case 13:yo(function(){var c=vr(t,1);if(c!==null){var u=Zt();Kn(c,t,1,u)}}),Zd(t,1)}},_c=function(t){if(t.tag===13){var r=vr(t,134217728);if(r!==null){var a=Zt();Kn(r,t,134217728,a)}Zd(t,134217728)}},tp=function(t){if(t.tag===13){var r=qr(t),a=vr(t,r);if(a!==null){var c=Zt();Kn(a,t,r,c)}Zd(t,r)}},np=function(){return it},rp=function(t,r){var a=it;try{return it=t,r()}finally{it=a}},io=function(t,r,a){switch(r){case"input":if(Ge(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=xs(c);if(!u)throw Error(i(90));ve(c),Ge(c,u)}}}break;case"textarea":Le(t,a);break;case"select":r=a.value,r!=null&&Je(t,!!a.multiple,r,!1)}},Ia=Ud,Ki=yo;var o3={usingClientEntryPoint:!1,Events:[ti,Yo,xs,Gi,Yi,Ud]},mi={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a3={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pa(t),t===null?null:t.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||n3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Ji=nl.inject(a3),ar=nl}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o3,on.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(r))throw Error(i(200));return t3(t,r,null,a)},on.createRoot=function(t,r){if(!Jd(t))throw Error(i(299));var a=!1,c="",u=wf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Qd(t,1,!1,null,null,a,!1,c,u),t[pr]=r.current,Xa(t.nodeType===8?t.parentNode:t),new Xd(r)},on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Pa(r),t=t===null?null:t.stateNode,t},on.flushSync=function(t){return yo(t)},on.hydrate=function(t,r,a){if(!el(r))throw Error(i(200));return tl(null,t,r,!0,a)},on.hydrateRoot=function(t,r,a){if(!Jd(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,m="",b=wf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=xf(r,null,t,1,a??null,u,!1,m,b),t[pr]=r.current,Xa(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new Js(r)},on.render=function(t,r,a){if(!el(r))throw Error(i(200));return tl(null,t,r,!1,a)},on.unmountComponentAtNode=function(t){if(!el(t))throw Error(i(40));return t._reactRootContainer?(yo(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1},on.unstable_batchedUpdates=Ud,on.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!el(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return tl(t,r,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var Nf;function K0(){if(Nf)return nu.exports;Nf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),nu.exports=h3(),nu.exports}var Rf;function p3(){if(Rf)return rl;Rf=1;var e=K0();return rl.createRoot=e.createRoot,rl.hydrateRoot=e.hydrateRoot,rl}var f3=p3();const m3=Y0(f3);function Q0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=Q0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=Q0(e))&&(s&&(s+=" "),s+=o);return s}const Ma=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ma.displayName="PlusIcon";const g3="_root_7uomf_13",v3="_sm_7uomf_82",x3="_md_7uomf_88",y3="_lg_7uomf_94",w3="_horizontal_7uomf_107",b3="_alignStart_7uomf_121",k3="_vertical_7uomf_125",C3="_inner_7uomf_131",_3="_iconSlot_7uomf_146",j3="_label_7uomf_163",Co={root:g3,sm:v3,md:x3,lg:y3,horizontal:w3,alignStart:b3,vertical:k3,inner:C3,iconSlot:_3,label:j3};function Lf(e){return typeof e=="number"?`${e}px`:e}const S3=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:g,style:x,disabled:y,type:w="button",...k},_)=>{const C=d??n.jsx(Ma,{size:"100%"}),M={};return h!==void 0&&(M["--area-min-height"]=Lf(h)),f!==void 0&&(M["--area-radius"]=Lf(f)),n.jsx("button",{ref:_,type:w,className:ie(Co.root,Co[e],Co[o],i==="start"&&Co.alignStart,g),disabled:y,"data-size":e,"data-layout":o,style:{...M,...x},...k,children:n.jsxs("span",{className:Co.inner,children:[n.jsx("span",{className:Co.iconSlot,"aria-hidden":"true",children:C}),!l&&s&&n.jsx("span",{className:Co.label,children:s})]})})});S3.displayName="AreaButton";const $3="_root_b29pw_8",M3="_image_b29pw_33",N3="_initials_b29pw_40",R3="_iconSlot_b29pw_52",Kr={root:$3,image:M3,initials:N3,iconSlot:R3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function L3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function A3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const nr=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:g="circle",className:x,...y},w)=>{const[k,_]=v.useState(!1),C=!!e&&!k,M=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?A3(s):"");let N;return C?N=n.jsx("img",{src:e,alt:o??"",className:Kr.image,onError:()=>_(!0),draggable:!1},e):M?N=n.jsx("span",{className:Kr.initials,"aria-hidden":o?void 0:!0,children:M}):N=n.jsx("span",{className:Kr.iconSlot,"aria-hidden":"true",children:l??n.jsx(L3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":g,className:ie(Kr.root,Kr[`size-${d}`],Kr[`color-${h}`],Kr[`variant-${f}`],Kr[`shape-${g}`],x),...y,children:N})});nr.displayName="Avatar";const T3="_root_uqz3u_7",E3={root:T3},Xt=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(E3.root,o),...s,children:i}));Xt.displayName="Eyebrow";const I3="_root_1tnwf_15",P3={root:I3},z3=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:g,...x},y)=>{const w=i!==void 0,k=v.useRef(null),[_,C]=v.useState(()=>w?!i:!s),M=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,C(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",C(!(i??"")))},[i,w]);const N=j=>{const O=j.currentTarget.textContent??"";C(O===""),l==null||l(O),g==null||g(j)},R=j=>{j.preventDefault();const O=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,O)},S=!h&&!d;return n.jsx("span",{ref:M,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":_||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(P3.root,f),onInput:N,onPaste:R,...x})});z3.displayName="TypeBox";const O3="_root_1brpy_12",D3="_ghost_1brpy_27",F3="_path_1brpy_32",vi={root:O3,"ai-spin":"_ai-spin_1brpy_1",ghost:D3,"ai-morph":"_ai-morph_1brpy_1",path:F3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},B3={xs:16,sm:24,md:32,lg:48,xl:64},H3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Af="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",ol=e=>e==="inverse"||e==="inverse-light",W3=e=>e==="stroke"||e==="stroke-light",ih=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof e=="string",k=w?B3[e]:e,_=w?H3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,C=o==="gradient-fill"?`url(#${x})`:ol(o)?"currentColor":"none",M=ol(o)?"none":W3(o)?"currentColor":`url(#${x})`,N="currentColor",R=o!=="stroke"&&o!=="stroke-light"&&!ol(o);return n.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(vi.root,vi[`variant-${o}`],vi[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!ol(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Af,stroke:N,strokeWidth:_*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:vi.ghost}),n.jsx("path",{d:Af,fill:C,stroke:M==="none"?void 0:M,strokeWidth:M==="none"?void 0:_,strokeLinecap:"round",strokeLinejoin:"round",filter:R?`url(#${y})`:void 0,className:vi.path})]})});ih.displayName="AILoader";const U3="_root_10act_14",q3="_hovered_10act_68",V3="_loading_10act_69",G3="_sm_10act_90",Y3="_md_10act_98",K3="_lg_10act_106",Q3="_dark_10act_116",Z3="_icon_10act_122",ca={root:U3,hovered:q3,loading:V3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:G3,md:Y3,lg:K3,dark:Q3,icon:Z3},Tf={sm:12,md:14,lg:18};function X3({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const Z0=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[g,x]=v.useState(!1);return n.jsx("button",{ref:f,className:ie(ca.root,ca[e],o&&ca.dark,i?ca.loading:g&&ca.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:n.jsx("span",{className:ca.icon,children:i?n.jsx(ih,{size:Tf[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(X3,{size:Tf[e],light:o})})})});Z0.displayName="AICoreButton";const J3="_root_1qx4u_9",e5="_star_1qx4u_34",au={root:J3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:e5},t5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",X0=v.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(au.root,au[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:au.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:t5,fill:"currentColor"})})}));X0.displayName="AIAvatar";const n5="_shell_lalw3_21",r5="_wrapper_lalw3_58",o5="_card_lalw3_65",a5="_cardClip_lalw3_94",i5="_textarea_lalw3_160",s5="_actions_lalw3_203",ga={shell:n5,wrapper:r5,card:o5,cardClip:a5,textarea:i5,actions:s5},J0=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(ga.shell,e),...i,children:o}));J0.displayName="AIComposer";function l5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const eg=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:g,children:x,style:y,...w},k)=>{const _=v.useRef(null);v.useEffect(()=>{const S=_.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[e]);const C=v.useCallback(S=>o(S.target.value),[o]),M=v.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),N=v.useCallback(S=>{_.current=S,l5(k,S)},[k]),R={...y??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(ga.wrapper,h),"data-radius":l,children:n.jsx("div",{className:ga.card,children:n.jsxs("div",{className:ga.cardClip,children:[n.jsx("textarea",{...w,ref:N,className:ga.textarea,rows:1,value:e,onChange:C,onKeyDown:M,placeholder:d,disabled:g,style:R}),x!=null&&n.jsx("div",{className:ga.actions,children:x})]})})})});eg.displayName="AIComposerInput";const c5="_root_fv0gc_10",d5="_simple_fv0gc_28",u5="_float_fv0gc_83",Ef={root:c5,simple:d5,float:u5},h5=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(Ef.root,Ef[e],o),...s,children:i}));h5.displayName="AIConversation";const p5="_fadeFrame_1l0ib_19",f5="_scroller_1l0ib_32",m5="_content_1l0ib_89",g5="_messageBlock_1l0ib_108",v5="_messageBlockAi_1l0ib_116",x5="_inboundBlock_1l0ib_128",y5="_inboundLoader_1l0ib_136",w5="_inboundLoaderLabel_1l0ib_146",b5="_outboundBlock_1l0ib_153",k5="_outboundHeader_1l0ib_161",C5="_messageBlockUser_1l0ib_168",_5="_aiThreadOutboundIn_1l0ib_1",j5="_messageBody_1l0ib_182",S5="_messageBodyAi_1l0ib_193",$5="_messageBodyUser_1l0ib_200",M5="_label_1l0ib_159",N5="_labelAi_1l0ib_221",R5="_labelUser_1l0ib_159",L5="_labelAvatar_1l0ib_224",A5="_labelText_1l0ib_237",T5="_timestamp_1l0ib_244",E5="_timestampAi_1l0ib_259",I5="_timestampUser_1l0ib_260",P5="_timestampInline_1l0ib_270",z5="_aiThreadOutboundFadeIn_1l0ib_1",Ve={fadeFrame:p5,scroller:f5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:m5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:g5,messageBlockAi:v5,inboundBlock:x5,inboundLoader:y5,inboundLoaderLabel:w5,outboundBlock:b5,outboundHeader:k5,messageBlockUser:C5,aiThreadOutboundIn:_5,messageBody:j5,messageBodyAi:S5,messageBodyUser:$5,label:M5,labelAi:N5,labelUser:R5,labelAvatar:L5,labelText:A5,timestamp:T5,timestampAi:E5,timestampUser:I5,timestampInline:P5,aiThreadOutboundFadeIn:z5},If=8;function O5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const D5=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const g=v.useRef(null),x=v.useRef(null),y=v.useRef(!0),[w,k]=v.useState(!1),[_,C]=v.useState(!1),M=v.useCallback(N=>{g.current=N,O5(f,N)},[f]);return v.useEffect(()=>{const N=g.current,R=x.current;if(!N||!R)return;const S=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:D}=N;return A-E-D<s},j=E=>{N.scrollTo({top:N.scrollHeight,behavior:E?"smooth":"auto"})},O=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:D}=N,G=E>If,K=A-E-D>If;k(W=>W===G?W:G),C(W=>W===K?W:K)};i&&(j(!1),y.current=!0),O();const $=()=>{y.current=S(),O()};N.addEventListener("scroll",$,{passive:!0});const L=new ResizeObserver(()=>{i&&y.current&&j(!0),O()});return L.observe(R),L.observe(N),()=>{N.removeEventListener("scroll",$),L.disconnect()}},[i,s]),n.jsx("div",{className:Ve.fadeFrame,"data-fade-top":w,"data-fade-bottom":_,children:n.jsx("div",{ref:M,className:ie(Ve.scroller,Ve[`padding-${o}`],l),...h,children:n.jsx("div",{ref:x,className:ie(Ve.content,Ve[`density-${e}`]),children:d})})})});D5.displayName="AIThread";const Kl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ve.label,e==="user"?Ve.labelUser:Ve.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ve.labelAvatar,children:o}),n.jsx("span",{className:Ve.labelText,children:s})]}));Kl.displayName="AILabel";const F5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function B5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Pi=v.forwardRef(({value:e,align:o="ai",format:i=F5,inline:s=!1,className:l,...d},h)=>{const f=v.useMemo(()=>B5(e,i),[e,i]);return f?n.jsx("time",{ref:h,className:ie(Ve.timestamp,s?Ve.timestampInline:o==="user"?Ve.timestampUser:Ve.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});Pi.displayName="AITimestamp";function H5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Pi,{align:"ai",value:e}):e}function W5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Kl,{align:"ai",children:e}):e}const U5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ve.messageBlock,Ve.messageBlockAi,i),...l,children:[W5(e),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyAi),children:s}),H5(o)]}));U5.displayName="AIAssistantMessage";function q5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Pi,{align:"user",value:e}):e}function V5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Kl,{align:"user",children:e}):e}const G5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ve.messageBlock,Ve.messageBlockUser,i),...l,children:[V5(e),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyUser),children:s}),q5(o)]}));G5.displayName="AIUserMessage";function Y5(e){return e===!1?null:e==null||e===!0?n.jsx(X0,{size:"sm"}):e}function K5(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Kl,{align:"ai",avatar:o,children:e}):e}const Q5=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...g},x)=>{const y=Y5(e),w=K5(o,y);return n.jsxs("div",{ref:x,"data-author":"ai",className:ie(Ve.messageBlock,Ve.messageBlockAi,Ve.inboundBlock,h),...g,children:[w,i,f!=null&&n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyAi),children:f}),l&&n.jsxs("div",{className:Ve.inboundLoader,"aria-live":"polite",children:[n.jsx(ih,{size:"xs"}),d!=null&&n.jsx("span",{className:Ve.inboundLoaderLabel,children:d})]}),s]})});Q5.displayName="AIInboundMessage";function Z5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const X5=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const f=o==null?null:Z5(o)?n.jsx(Pi,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ve.labelText,children:e}):e,x=g!=null||f!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ve.messageBlock,Ve.messageBlockUser,Ve.outboundBlock,s),...d,children:[x&&n.jsxs("div",{className:ie(Ve.label,Ve.labelUser,Ve.outboundHeader),children:[g,f]}),n.jsx("div",{className:ie(Ve.messageBody,Ve.messageBodyUser),children:l})]})});X5.displayName="AIOutboundMessage";const Dn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Dn.displayName="ChevronDownIcon";const J5="_root_1j4eq_8",e4="_header_1j4eq_17",t4="_headerSummary_1j4eq_53",n4="_aiTrailSummaryFade_1j4eq_1",r4="_aiTrailHeaderAppend_1j4eq_1",o4="_aiTrailEllipsis_1j4eq_1",a4="_headerCurrent_1j4eq_128",i4="_headerChevron_1j4eq_159",s4="_headerChevronExpanded_1j4eq_173",l4="_body_1j4eq_187",c4="_bodyExpanded_1j4eq_200",d4="_bodyCollapsed_1j4eq_201",u4="_bodyInner_1j4eq_203",h4="_bodyContent_1j4eq_187",p4="_step_1j4eq_225",f4="_stepIcon_1j4eq_242",m4="_stepAnimating_1j4eq_256",g4="_aiTrailStepPulse_1j4eq_1",v4="_stepBody_1j4eq_267",x4="_stepHead_1j4eq_282",y4="_stepLabel_1j4eq_286",w4="_stepSeparator_1j4eq_288",b4="_stepDetail_1j4eq_292",k4="_subToggle_1j4eq_302",C4="_subToggleCount_1j4eq_335",_4="_subToggleChevron_1j4eq_339",j4="_subActivityWrap_1j4eq_358",S4="_subActivityExpanded_1j4eq_364",$4="_subActivityCollapsed_1j4eq_365",M4="_subActivityClip_1j4eq_367",N4="_subActivityList_1j4eq_378",R4="_subActivity_1j4eq_358",L4="_aiTrailSubActivityType_1j4eq_1",A4="_aiTrailSubActivityFade_1j4eq_1",st={root:J5,header:e4,headerSummary:t4,aiTrailSummaryFade:n4,aiTrailHeaderAppend:r4,aiTrailEllipsis:o4,headerCurrent:a4,headerChevron:i4,headerChevronExpanded:s4,body:l4,bodyExpanded:c4,bodyCollapsed:d4,bodyInner:u4,bodyContent:h4,step:p4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:f4,stepAnimating:m4,aiTrailStepPulse:g4,stepBody:v4,stepHead:x4,stepLabel:y4,stepSeparator:w4,stepDetail:b4,subToggle:k4,subToggleCount:C4,subToggleChevron:_4,subActivityWrap:j4,subActivityExpanded:S4,subActivityCollapsed:$4,subActivityClip:M4,subActivityList:N4,subActivity:R4,aiTrailSubActivityType:L4,aiTrailSubActivityFade:A4},sh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};sh.displayName="MessageDotsSquareIcon";function El({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}El.displayName="SearchMdIcon";function to({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const lh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};lh.displayName="Globe01Icon";const tg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};tg.displayName="Code02Icon";function ch({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ch.displayName="Tool01Icon";const Cn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},ba=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ba.displayName="AlertCircleIcon";const T4={thinking:n.jsx(sh,{size:14}),tool:n.jsx(ch,{size:14}),search:n.jsx(El,{size:14}),file:n.jsx(to,{size:14}),web:n.jsx(lh,{size:14}),code:n.jsx(tg,{size:14}),content:n.jsx(Cn,{size:14})},Ql=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...g},x)=>{const y=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[_,C]=v.useState(null),M=_!==null?_:k;v.useEffect(()=>{C(null)},[o]);const N=v.useCallback(()=>C(!M),[M]),R=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,j=o==="error"?n.jsx(ba,{size:14}):s??T4[e];return n.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":o,className:ie(st.step,st[`step-${o}`],y&&st.stepAnimating,h),...g,children:[n.jsx("span",{className:st.stepIcon,"aria-hidden":!0,children:j}),n.jsxs("span",{className:st.stepBody,children:[n.jsxs("span",{className:st.stepHead,children:[n.jsx("span",{className:st.stepLabel,children:f}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:st.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:st.stepDetail,children:i})]}),R&&n.jsxs("button",{type:"button",className:st.subToggle,onClick:N,"aria-expanded":M,"aria-label":M?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":M||void 0,children:[n.jsx("span",{className:st.subToggleCount,children:S}),n.jsx("span",{className:st.subToggleChevron,"aria-hidden":!0,children:n.jsx(Dn,{size:10})})]})]}),R&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(st.subActivityWrap,M?st.subActivityExpanded:st.subActivityCollapsed),"aria-hidden":!M,children:n.jsx("div",{className:st.subActivityClip,children:n.jsx("ul",{className:st.subActivityList,"data-animating":w||void 0,children:l.map((O,$)=>n.jsx("li",{className:st.subActivity,children:O},$))})})})})]})]})});Ql.displayName="AIActivityStep";function Pf(e){return e==="error"}function E4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=o===1?"1 step":`${o} steps`;return`${h} · ${f}`}return n.jsxs(n.Fragment,{children:[h,i.map((f,g)=>n.jsxs(v.Fragment,{children:[" · ",f]},g))]})}const dh=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...g},x)=>{const y=o!==void 0,[w,k]=v.useState(i??Pf(e)),[_,C]=v.useState(!1);v.useEffect(()=>{y||_||k(Pf(e))},[e,y,_]);const M=y?!!o:w,N=v.useCallback(()=>{const L=!M;y||(k(L),C(!0)),s==null||s(L)},[M,y,s]),{enhancedChildren:R,stepCount:S,stepLabels:j,currentLabelIdx:O}=v.useMemo(()=>{let L=0;const E=[];let A=-1;return{enhancedChildren:v.Children.map(f,G=>{if(!v.isValidElement(G))return G;const K=G.props;if(!("type"in K||"status"in K))return G;L+=1;const Y=K.status??"done";return Y==="pending"?null:(K.children!=null&&(E.push(K.children),Y==="active"&&(A=E.length-1)),I4(G,e))}),stepCount:L,stepLabels:E,currentLabelIdx:A>=0?A:E.length-1}},[f,e]),$=d??E4(e,S,j,O,st.headerCurrent,l);return n.jsxs("div",{ref:x,"data-state":e,"data-expanded":M,className:ie(st.root,h),...g,children:[n.jsxs("button",{type:"button",className:st.header,onClick:N,"aria-expanded":M,"aria-label":M?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:st.headerSummary,children:$},`${e}-${O}`),n.jsx("span",{className:ie(st.headerChevron,M&&st.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Dn,{size:14})})]}),n.jsx("div",{className:ie(st.body,M?st.bodyExpanded:st.bodyCollapsed),"aria-hidden":!M,children:n.jsx("div",{className:st.bodyInner,children:n.jsxs("div",{className:st.bodyContent,children:[R,e==="done"&&n.jsx(Ql,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});dh.displayName="AIActivityTrail";function I4(e,o){return v.cloneElement(e,{groupState:o})}var To=K0();const P4="_wrapper_3tqlm_10",z4="_tooltip_3tqlm_22",O4="_portal_3tqlm_23",D4="_top_3tqlm_61",F4="_bottom_3tqlm_71",B4="_left_3tqlm_81",H4="_right_3tqlm_91",al={wrapper:P4,tooltip:z4,portal:O4,top:D4,bottom:F4,left:B4,right:H4},$r=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,g]=v.useState(!1),[x,y]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),_=v.useId(),C=v.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),O=6+d;let $=0,L=0;switch(o){case"top":$=j.top-O,L=j.left+j.width/2;break;case"bottom":$=j.bottom+O,L=j.left+j.width/2;break;case"left":$=j.top+j.height/2,L=j.left-O;break;case"right":$=j.top+j.height/2,L=j.right+O;break}y({top:$,left:L})},[o,d]),M=v.useCallback(()=>{s||(C(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,C]),N=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!f)return;const j=()=>C();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[f,C]);const R=dn.cloneElement(h,{"aria-describedby":f?_:void 0}),S=n.jsx("span",{id:_,role:"tooltip",className:ie(al.tooltip,al[o],al.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:al.wrapper,onMouseEnter:M,onMouseLeave:N,onFocus:M,onBlur:N,children:[R,To.createPortal(S,document.body)]})};$r.displayName="Tooltip";const W4="_root_v8mqg_9",U4="_hover_v8mqg_21",iu={root:W4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:U4};function q4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const ng=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const g=i==null?null:q4(i)?n.jsx(Pi,{value:i,format:s,inline:!0}):i,x=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===$r)return k;const _=k.props["aria-label"];return _?n.jsx($r,{content:_,placement:"top",delay:150,children:k}):k},y=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,x)}return x(w)});return n.jsxs("div",{ref:f,"data-visibility":e,"data-align":o,className:ie(iu.root,iu[`align-${o}`],e==="hover"&&iu.hover,l),...h,children:[y,g]})});ng.displayName="AIMessageActions";const V4="_card_1apq1_17",G4="_header_1apq1_69",Y4="_iconBadge_1apq1_74",K4="_iconInner_1apq1_89",Q4="_headerText_1apq1_100",Z4="_headerTopRow_1apq1_109",X4="_eyebrow_1apq1_115",J4="_title_1apq1_124",ew="_subtitle_1apq1_130",tw="_headerTrailing_1apq1_135",nw="_body_1apq1_141",rw="_footer_1apq1_152",ow="_footerEnd_1apq1_157",aw="_metaRow_1apq1_162",iw="_metaItem_1apq1_170",sw="_resultHero_1apq1_180",lw="_resultHeadline_1apq1_185",cw="_resultDetail_1apq1_191",dw="_clauses_1apq1_205",uw="_clause_1apq1_205",hw="_clauseLabel_1apq1_215",pw="_clauseBody_1apq1_225",fw="_badgeExecuting_1apq1_245",dt={card:V4,header:G4,iconBadge:Y4,iconInner:K4,headerText:Q4,headerTopRow:Z4,eyebrow:X4,title:J4,subtitle:ew,headerTrailing:tw,body:nw,footer:rw,footerEnd:ow,metaRow:aw,metaItem:iw,resultHero:sw,resultHeadline:lw,resultDetail:cw,clauses:dw,clause:uw,clauseLabel:hw,clauseBody:pw,badgeExecuting:fw},hr=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:g,footerEnd:x=!1,className:y,children:w,...k},_)=>{const C=l!=null||f!=null,M=C||d!=null||h!=null,N=s!=null||M;return n.jsxs("div",{ref:_,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(dt.card,y),...k,children:[N&&n.jsxs("div",{className:dt.header,children:[s!=null&&n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:dt.iconInner,children:s})}),M&&n.jsxs("div",{className:dt.headerText,children:[C&&n.jsxs("div",{className:dt.headerTopRow,children:[l!=null&&n.jsx("span",{className:dt.eyebrow,children:l}),f!=null&&n.jsx("span",{className:dt.headerTrailing,children:f})]}),d!=null&&n.jsx("span",{className:dt.title,children:d}),h!=null&&n.jsx("span",{className:dt.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:dt.body,children:w}),g!=null&&n.jsx("div",{className:ie(dt.footer,x&&dt.footerEnd),children:g})]})});hr.displayName="UltronCard";const mw="_root_zkkgh_6",gw="_sm_zkkgh_24",vw="_md_zkkgh_33",xw="_lg_zkkgh_42",yw="_neutral_zkkgh_53",ww="_blue_zkkgh_66",bw="_azure_zkkgh_79",kw="_purple_zkkgh_92",Cw="_pink_zkkgh_105",_w="_red_zkkgh_118",jw="_orange_zkkgh_131",Sw="_yellow_zkkgh_144",$w="_matcha_zkkgh_157",Mw="_green_zkkgh_170",Nw="_subtle_zkkgh_184",Rw="_outline_zkkgh_190",Lw="_solid_zkkgh_196",Aw="_dot_zkkgh_203",Tw="_icon_zkkgh_212",Ew="_dismiss_zkkgh_224",_o={root:mw,sm:gw,md:vw,lg:xw,neutral:yw,blue:ww,azure:bw,purple:kw,pink:Cw,red:_w,orange:jw,yellow:Sw,matcha:$w,green:Mw,subtle:Nw,outline:Rw,solid:Lw,dot:Aw,icon:Tw,dismiss:Ew},zi=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},Iw={sm:10,md:12,lg:14},er=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:g,...x},y)=>n.jsxs("span",{ref:y,className:ie(_o.root,_o[i],_o[o],_o[e],f),...x,children:[s&&n.jsx("span",{className:_o.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(_o.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&n.jsx("button",{type:"button",className:_o.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(zi,{size:Iw[i]})})]}));er.displayName="Tag";function rg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rg.displayName="SlashCircle01Icon";const uh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};uh.displayName="EyeIcon";function Zl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Zl.displayName="Target01Icon";function bn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bn.displayName="ClockIcon";const Oi=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Oi.displayName="RefreshCw04Icon";const un=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};un.displayName="CheckCircleIcon";function Xl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Xl.displayName="Save01Icon";const Pw={sm:11,md:12,lg:14},zw={ignored:{label:"Ignored",color:"neutral",Icon:rg},monitored:{label:"Monitored",color:"blue",Icon:uh},recommended:{label:"Recommended",color:"purple",Icon:Zl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:bn},executing:{label:"Executing",color:"azure",Icon:Oi},completed:{label:"Completed",color:"green",Icon:un},saved:{label:"Saved",color:"matcha",Icon:Xl}},Eo=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=zw[e],f=h.Icon;return n.jsx(er,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(f,{size:Pw[o]}),className:ie(e==="executing"&&dt.badgeExecuting,s),...l,children:i??h.label})});Eo.displayName="UltronStatusBadge";function Jl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Jl.displayName="Bell01Icon";const Ow=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},g)=>n.jsx(hr,{ref:g,tone:d,eyebrow:i,title:e,icon:o??n.jsx(Jl,{size:14}),trailing:l?n.jsx(Eo,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:dt.metaRow,children:s.map((x,y)=>n.jsxs("span",{className:dt.metaItem,children:[x.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));Ow.displayName="UltronEventCard";const Dw=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(sh,{size:14}),...d,children:[l,i&&n.jsx("div",{className:dt.metaRow,children:i})]}));Dw.displayName="UltronUnderstandingCard";const Fw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Bw=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(hr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Zl,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:dt.metaRow,children:i.map((f,g)=>n.jsx(er,{size:"sm",color:Fw[s],variant:"subtle",children:f},g))}):null]}));Bw.displayName="UltronDecisionCard";const Hw="_root_ou64w_8",Ww="_xs_ou64w_75",Uw="_sm_ou64w_84",qw="_md_ou64w_93",Vw="_lg_ou64w_102",Gw="_xl_ou64w_111",Yw="_iconOnly_ou64w_122",Kw="_primary_ou64w_132",Qw="_secondary_ou64w_148",Zw="_tertiary_ou64w_167",Xw="_ghost_ou64w_185",Jw="_destructive_ou64w_203",eb="_destructiveSecondary_ou64w_221",tb="_artwork_ou64w_69",nb="_label_ou64w_254",rb="_spinner_ou64w_69",ob="_light_ou64w_281",ln={root:Hw,xs:Ww,sm:Uw,md:qw,lg:Vw,xl:Gw,iconOnly:Yw,primary:Kw,secondary:Qw,tertiary:Zw,ghost:Xw,destructive:Jw,destructiveSecondary:eb,artwork:tb,label:nb,spinner:rb,"alloy-spin":"_alloy-spin_ou64w_1",light:ob},ab={primary:ln.primary,secondary:ln.secondary,tertiary:ln.tertiary,ghost:ln.ghost,destructive:ln.destructive,"destructive-secondary":ln.destructiveSecondary},ze=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:g,...x},y)=>{const w=g||i;return n.jsxs("button",{ref:y,className:ie(ln.root,ab[e],ln[o],d&&ln.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...x,children:[i&&n.jsx("span",{className:ln.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(ln.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(ln.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&n.jsx("span",{className:ln.label,children:f}),l&&n.jsx("span",{className:ie(ln.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});ze.displayName="Button";function og({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}og.displayName="XCircleIcon";const ib=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},g)=>{const x=n.jsxs(n.Fragment,{children:[i.map((y,w)=>n.jsx(ze,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&n.jsx(ze,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(og,{size:16}),onClick:s,children:l})]});return n.jsx(hr,{ref:g,tone:d,eyebrow:e,icon:o??n.jsx(Zl,{size:14}),footer:x,...f,children:h})});ib.displayName="UltronRecommendationCard";function ec({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ec.displayName="Lock01Icon";const sb=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},_)=>{const C=n.jsxs(n.Fragment,{children:[f&&n.jsx(ze,{size:"md",variant:"ghost",onClick:f,children:h}),x&&n.jsx(ze,{size:"md",variant:"secondary",onClick:x,children:g}),n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(Cn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(hr,{ref:_,tone:y,eyebrow:o,title:e,icon:i??n.jsx(ec,{size:14}),trailing:n.jsx(Eo,{status:"awaiting-approval"}),footer:C,footerEnd:!0,...k,children:w})});sb.displayName="UltronApprovalCard";const lb=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>n.jsx(hr,{ref:f,tone:d,eyebrow:e,icon:o??n.jsx(Oi,{size:14}),trailing:n.jsx(Eo,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(dh,{state:s,duration:l,children:i.map((g,x)=>n.jsx(Ql,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));lb.displayName="UltronExecutionCard";const cb=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>n.jsx(hr,{ref:f,tone:l,fill:!0,accent:!1,trailing:n.jsx(Eo,{status:s}),footer:d,...h,children:n.jsxs("div",{className:dt.resultHero,children:[n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(un,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:dt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:dt.resultDetail,children:o})]})]})}));cb.displayName="UltronResultCard";function ag({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ag.displayName="ZapIcon";const db=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:g="info",children:x,...y},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(ze,{size:"md",variant:"primary",leadingArtwork:n.jsx(Xl,{size:18}),loading:d,onClick:l,children:s}),f&&n.jsx(ze,{size:"md",variant:"ghost",onClick:f,children:h})]});return n.jsx(hr,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(ag,{size:14}),footer:k,...y,children:x})});db.displayName="UltronWorkflowSaveCard";const ig=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ig.displayName="GitBranch01Icon";function su({label:e,children:o}){return n.jsxs("div",{className:dt.clause,children:[n.jsx("span",{className:dt.clauseLabel,children:e}),n.jsx("span",{className:dt.clauseBody,children:o})]})}const ub=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:g="info",...x},y)=>n.jsx(hr,{ref:y,tone:g,eyebrow:o,title:e,icon:i??n.jsx(ig,{size:14}),trailing:h?n.jsx(Eo,{status:h}):void 0,footer:f,...x,children:n.jsxs("div",{className:dt.clauses,children:[n.jsx(su,{label:"When",children:s}),n.jsx(su,{label:"If",children:l}),n.jsx(su,{label:"Then",children:d})]})}));ub.displayName="UltronWorkflowPreviewCard";const hb="_root_1nyuz_6",pb="_sm_1nyuz_20",fb="_md_1nyuz_29",mb="_lg_1nyuz_38",gb="_divider_1nyuz_48",vb="_interactive_1nyuz_53",xb="_disabled_1nyuz_60",yb="_destructive_1nyuz_64",wb="_selected_1nyuz_78",bb="_label_1nyuz_87",kb="_description_1nyuz_97",Cb="_leadingSlot_1nyuz_101",_b="_trailingSlot_1nyuz_102",jb="_content_1nyuz_115",Sb="_taSwitch_1nyuz_167",$b="_taSwitchThumb_1nyuz_188",Mb="_taCheckbox_1nyuz_203",Nb="_taRadio_1nyuz_226",Rb="_taRadioDot_1nyuz_244",Lb="_taExpand_1nyuz_252",Ab="_taStatus_1nyuz_266",Tb="_taStatus_success_1nyuz_273",Eb="_taStatus_warning_1nyuz_274",Ib="_taStatus_error_1nyuz_275",Pb="_taStatus_info_1nyuz_276",jt={root:hb,sm:pb,md:fb,lg:mb,divider:gb,interactive:vb,disabled:xb,destructive:yb,selected:wb,label:bb,description:kb,leadingSlot:Cb,trailingSlot:_b,content:jb,taSwitch:Sb,taSwitchThumb:$b,taCheckbox:Mb,taRadio:Nb,taRadioDot:Rb,taExpand:Lb,taStatus:Ab,taStatus_success:Tb,taStatus_warning:Eb,taStatus_error:Ib,taStatus_info:Pb},_n=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};_n.displayName="ChevronRightIcon";const hh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hh.displayName="ArrowUpRightIcon";const zb="_root_4qytd_5",Ob="_neutral_4qytd_25",Db="_primary_4qytd_30",Fb="_success_4qytd_35",Bb="_warning_4qytd_40",Hb="_error_4qytd_45",Wb="_info_4qytd_50",zf={root:zb,neutral:Ob,primary:Db,success:Fb,warning:Bb,error:Hb,info:Wb},Na=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(zf.root,zf[e],o),...s,children:i}));Na.displayName="Badge";const Ub=({checked:e})=>n.jsx("span",{className:jt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:jt.taSwitchThumb})}),qb=({checked:e})=>n.jsx("span",{className:jt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Vb=({checked:e})=>n.jsx("span",{className:jt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:jt.taRadioDot})}),Gb=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(Na,{"aria-hidden":"true",children:i}):null},Yb=({expanded:e})=>n.jsx("span",{className:jt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(_n,{size:16,color:"currentColor"})}),Kb=({variant:e})=>n.jsx("span",{className:ie(jt.taStatus,jt[`taStatus_${e}`]),"aria-hidden":"true"}),Qb=new Set(["badge","status"]),kn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:_="md",interactive:C,selected:M=!1,destructive:N=!1,disabled:R=!1,className:S,onClick:j,onKeyDown:O,...$},L)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[A,D]=v.useState(h),G=E?d!==void 0?d:A:!1,K=C||!!j||E||l!==void 0&&!Qb.has(l),W=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":K?"button":void 0,Y=v.useCallback(de=>{if(!R){if(E){const se=!G;d===void 0&&D(se),f==null||f(se)}j==null||j(de)}},[R,E,G,d,f,j]),X=v.useCallback(de=>{K&&!R&&(de.key==="Enter"||de.key===" ")&&(de.preventDefault(),Y(de)),O==null||O(de)},[K,R,Y,O]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(_n,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(hh,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(Ub,{checked:G});case"checkbox":return n.jsx(qb,{checked:G});case"radio":return n.jsx(Vb,{checked:G});case"badge":return n.jsx(Gb,{count:g,label:x});case"expand":return n.jsx(Yb,{expanded:y});case"status":return n.jsx(Kb,{variant:w});default:return null}})();return n.jsxs("div",{ref:L,role:W,tabIndex:K&&!R?0:void 0,"aria-checked":E?G:void 0,"aria-selected":M||void 0,"aria-disabled":R||void 0,"data-selected":M||void 0,"data-disabled":R||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:ie(jt.root,jt[_],k&&jt.divider,K&&jt.interactive,M&&jt.selected,N&&jt.destructive,R&&jt.disabled,S),onClick:R?void 0:Y,onKeyDown:X,...$,children:[i&&n.jsx("div",{className:jt.leadingSlot,children:i}),n.jsxs("div",{className:jt.content,children:[n.jsx("span",{className:jt.label,children:e}),o&&n.jsx("span",{className:jt.description,children:o})]}),ae&&n.jsx("div",{className:jt.trailingSlot,children:ae})]})});kn.displayName="ListItem";const Zb=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(kn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(Eo,{status:s}),...l}));Zb.displayName="UltronActivityStreamItem";const Xb="_root_1sz1z_7",Jb="_status_1sz1z_50",lu={root:Xb,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:Jb},ph=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const g=v.useRef(null),[x,y]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const _=k.props;return v.cloneElement(k,{groupDisabled:e||!!_.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=_=>{_.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>y(k),[]),n.jsxs("div",{ref:f,"data-size":o,className:ie(lu.root,lu[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:g,className:lu.status,role:"status","aria-live":"polite",children:x})]})});ph.displayName="ComposerActions";function cu({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const sg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};sg.displayName="SearchSmIcon";const Cl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Cl.displayName="Trash03Icon";const fh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fh.displayName="SunIcon";const lg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};lg.displayName="ArrowNarrowRightIcon";function Xr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function Of({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function e6({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Il=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Il.displayName="ChevronSelectorVerticalIcon";const Mo=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Mo.displayName="ClipboardCheckIcon";const cg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};cg.displayName="SettingsGearIcon";const dg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dg.displayName="ChevronLeftIcon";const ug=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};ug.displayName="EyeOffIcon";const hg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="StopIcon";const pg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};pg.displayName="RecordingIcon";const fg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};fg.displayName="BankIcon";function tc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tc.displayName="ArrowNarrowUpIcon";function mg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}mg.displayName="ArrowNarrowDownIcon";function nc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nc.displayName="Microphone02Icon";const Pl=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Pl.displayName="AlertTriangleIcon";const gg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gg.displayName="BankNote01Icon";const vg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vg.displayName="CoinsStacked03Icon";function xg({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const mh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};mh.displayName="Map01Icon";const gh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};gh.displayName="PackageIcon";const yg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};yg.displayName="ThumbsUpIcon";const wg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};wg.displayName="ThumbsDownIcon";function Ni({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ni.displayName="Building02Icon";function vh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}vh.displayName="Building05Icon";function Di({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Di.displayName="CheckVerified01Icon";function bg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bg.displayName="Copy01Icon";function kg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}kg.displayName="DotsVerticalIcon";function rc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rc.displayName="Edit02Icon";function Cg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Cg.displayName="HomeSmileIcon";function xh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}xh.displayName="Link01Icon";function oc({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oc.displayName="LinkExternal01Icon";function yh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yh.displayName="MedicalCrossIcon";function Ri({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ri.displayName="MessageCircle02Icon";function wh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}wh.displayName="MinusIcon";function _g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}_g.displayName="Moon01Icon";function jg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jg.displayName="Pin01Icon";function Sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Sg.displayName="ReceiptCheckIcon";function $g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}$g.displayName="Settings02Icon";function Mg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Mg.displayName="Speedometer02Icon";function Ng({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ng.displayName="Trash01Icon";function Du({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Du.displayName="UploadCloud01Icon";function ka({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ka.displayName="XCloseIcon";const t6="_base_i93xz_11",n6="_icon_i93xz_45",r6="_sendReady_i93xz_65",o6="_sendStreaming_i93xz_66",a6="_sendDisabled_i93xz_67",i6="_sendError_i93xz_68",s6="_attachIdle_i93xz_131",l6="_attachDisabled_i93xz_145",c6="_attachError_i93xz_152",d6="_voiceIdle_i93xz_165",u6="_voiceRecording_i93xz_179",h6="_voiceDisabled_i93xz_189",p6="_iconStack_i93xz_200",f6="_iconLayer_i93xz_209",bt={base:t6,icon:n6,sendReady:r6,sendStreaming:o6,sendDisabled:a6,sendError:i6,attachIdle:s6,attachDisabled:l6,attachError:c6,voiceIdle:d6,voiceRecording:u6,voiceDisabled:h6,iconStack:p6,iconLayer:f6},m6={hidden:void 0,ready:bt.sendReady,"disabled-invalid":bt.sendDisabled,streaming:bt.sendStreaming,error:bt.sendError},g6=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Ra=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useRef(null),_=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]),C=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const M=!h&&(e==="ready"||e==="streaming"||e==="error"),N=g6(e,l,d),R=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,S=n.jsx("button",{ref:_,type:"button","data-composer-action":"send","data-state":e,className:ie(bt.base,m6[e],f),style:g,"aria-label":N,disabled:!M,onClick:C,...x,children:n.jsxs("span",{className:bt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:bt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(tc,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:bt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(hg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:bt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Oi,{size:"100%",strokeWidth:2})})]})});return R?n.jsx($r,{content:R,placement:"top",children:S}):S});Ra.displayName="ComposerSendButton";const v6={idle:bt.attachIdle,disabled:bt.attachDisabled,error:bt.attachError},x6=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Rg=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useCallback(()=>{var S;(e==="idle"||e==="error")&&((S=w.current)==null||S.click())},[e]),_=v.useCallback(S=>{const j=S.target.files;j&&j.length>0&&(o==null||o(j)),S.target.value=""},[o]),C=!h&&e!=="disabled",M=x6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,R=n.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:ie(bt.base,v6[e],f),style:g,"aria-label":M,disabled:!C,onClick:k,...x,children:[n.jsx("span",{className:bt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(Ma,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:_,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx($r,{content:N,placement:"top",children:R}):R});Rg.displayName="ComposerAttachment";const y6={idle:bt.voiceIdle,recording:bt.voiceRecording,disabled:bt.voiceDisabled},w6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Lg=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},g)=>{const x=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),y=!l&&e!=="disabled",w=w6(e,s),k=e==="disabled"?s??"Voice unavailable":null,_=n.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:ie(bt.base,y6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...f,children:n.jsxs("span",{className:bt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:bt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(nc,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:bt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(pg,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx($r,{content:k,placement:"top",children:_}):_});Lg.displayName="ComposerVoiceButton";const b6=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(J0,{className:y,style:{flex:"0 0 auto"},children:n.jsx(eg,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:f,radius:g,disabled:d,children:n.jsxs(ph,{size:"md",disabled:d,children:[x,h&&n.jsx(Lg,{state:d?"disabled":"idle"}),n.jsx(Ra,{state:k,onSend:i,onStop:i})]})})})});b6.displayName="UltronCommandBar";const k6=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(dh,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(Ql,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));k6.displayName="UltronThreadTimeline";const C6="_root_ghwhu_10",_6="_badge_ghwhu_27",j6="_badgeIcon_ghwhu_38",S6="_green_ghwhu_59",$6="_yellow_ghwhu_60",M6="_matcha_ghwhu_61",N6="_purple_ghwhu_62",R6="_blue_ghwhu_63",L6="_azure_ghwhu_64",A6="_red_ghwhu_65",T6="_orange_ghwhu_66",E6="_pink_ghwhu_67",I6="_slate_ghwhu_68",P6="_content_ghwhu_73",z6="_label_ghwhu_83",O6="_valueRow_ghwhu_97",D6="_change_ghwhu_106",F6="_value_ghwhu_97",br={root:C6,badge:_6,badgeIcon:j6,green:S6,yellow:$6,matcha:M6,purple:N6,blue:R6,azure:L6,red:A6,orange:T6,pink:E6,slate:I6,content:P6,label:z6,valueRow:O6,change:D6,value:F6},B6=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(br.root,d),...h,children:[n.jsx("div",{className:ie(br.badge,br[e]),"aria-hidden":"true",children:n.jsx("span",{className:br.badgeIcon,children:o})}),n.jsxs("div",{className:br.content,children:[n.jsx("span",{className:br.label,children:i}),n.jsxs("div",{className:br.valueRow,children:[n.jsx("span",{className:br.value,children:s}),l!=null&&n.jsx("span",{className:br.change,children:l})]})]})]}));B6.displayName="DataCard";const H6="_root_d0j6n_7",W6="_icon_d0j6n_21",U6="_text_d0j6n_33",q6="_positive_d0j6n_41",V6="_warning_d0j6n_45",G6="_negative_d0j6n_49",il={root:H6,icon:W6,text:U6,positive:q6,warning:V6,negative:G6};function Y6(e){return e==="up"?"positive":"negative"}const K6=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Y6(e.trend):e.severity,{severity:f,...g}=d,x=i==="trend"?(({trend:w,severity:k,..._})=>_)(g):g,y=i==="trend"?e.trend==="up"?tc:mg:null;return n.jsxs("span",{ref:o,className:ie(il.root,il[h],l),...x,children:[n.jsx("span",{className:il.text,children:s}),y&&n.jsx("span",{className:il.icon,"aria-hidden":"true",children:n.jsx(y,{size:14})})]})});K6.displayName="ValueChangeLabel";const Q6="_root_1lq10_1",Z6="_horizontal_1lq10_9",X6="_vertical_1lq10_15",J6="_solid_1lq10_32",e8="_dashed_1lq10_36",sl={root:Q6,horizontal:Z6,vertical:X6,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:J6,dashed:e8},t8=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(sl.root,sl[`thickness-${e}`],sl[o],sl[i],s),...l}));t8.displayName="Divider";const n8="_overlay_vxgy2_9",r8="_dialogOverlayIn_vxgy2_1",o8="_dialogOverlayOut_vxgy2_1",a8="_dialog_vxgy2_38",i8="_dialogIn_vxgy2_1",s8="_dialogOut_vxgy2_1",l8="_sm_vxgy2_88",c8="_md_vxgy2_89",d8="_lg_vxgy2_90",u8="_header_vxgy2_95",h8="_title_vxgy2_107",p8="_closeBtn_vxgy2_120",f8="_content_vxgy2_152",m8="_footer_vxgy2_163",no={overlay:n8,dialogOverlayIn:r8,dialogOverlayOut:o8,dialog:a8,dialogIn:i8,dialogOut:s8,sm:l8,md:c8,lg:d8,header:u8,title:h8,closeBtn:p8,content:f8,footer:m8},Ag=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(no.header,i),...s,children:[n.jsx("span",{className:no.title,children:o}),e&&n.jsx("button",{type:"button",className:no.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(zi,{size:16})})]}));Ag.displayName="DialogHeader";const Tg=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(no.content,o),...i,children:e}));Tg.displayName="DialogContent";const Eg=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(no.footer,o),...i,children:e}));Eg.displayName="DialogFooter";function Ig({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),f=180,[g,x]=v.useState(e);return v.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),f);return()=>clearTimeout(y)},[e]),v.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,o]),v.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),g?To.createPortal(n.jsx("div",{className:no.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(no.dialog,no[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const g8="_root_1dntq_7",v8="_badge_1dntq_57",x8="_badgeIconSlot_1dntq_74",y8="_content_1dntq_82",w8="_text_1dntq_90",b8="_title_1dntq_99",k8="_description_1dntq_120",C8="_actions_1dntq_131",_8="_dot_1dntq_137",j8="_actionLink_1dntq_144",S8="_primaryAction_1dntq_162",$8="_trailing_1dntq_170",Kt={root:g8,badge:v8,badgeIconSlot:x8,content:y8,text:w8,title:b8,description:k8,actions:C8,dot:_8,actionLink:j8,primaryAction:S8,trailing:$8},M8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),N8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),R8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Df=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),L8={error:M8,warning:R8,success:N8,info:Df,feature:Df},Pg=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const _=L8[e],C=i==="lg",M=x?n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:n.jsx(zi,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Kt.root,y),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Kt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Kt.badgeIconSlot),children:n.jsx(_,{})})}),C?n.jsxs("div",{className:Kt.content,children:[n.jsxs("div",{className:Kt.text,children:[n.jsx("p",{className:Kt.title,children:s}),l&&n.jsx("p",{className:Kt.description,children:l})]}),(d||f)&&n.jsxs("div",{className:Kt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Kt.actionLink,Kt.primaryAction),onClick:h,children:d}),d&&f&&n.jsx("span",{className:Kt.dot,"aria-hidden":"true",children:"·"}),f&&n.jsx("button",{type:"button",className:Kt.actionLink,onClick:g,children:f})]})]}):n.jsx("p",{className:Kt.title,children:s}),C?M:(d||x)&&n.jsxs("div",{className:Kt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Kt.actionLink,Kt.primaryAction),onClick:h,children:d}),M]})]})});Pg.displayName="Alert";const A8="_stack_x4xl7_11",T8="_item_x4xl7_28",E8="_itemExiting_x4xl7_33",Fu={stack:A8,item:T8,itemExiting:E8},I8=v.createContext(null);function P8({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:g,exiting:x,onRemove:y}){const w=v.useCallback(()=>y(e),[e,y]);return n.jsx("div",{className:ie(Fu.item,x&&Fu.itemExiting),onAnimationEnd:x?w:void 0,children:n.jsx(Pg,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function z8({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:To.createPortal(n.jsx("div",{className:Fu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(P8,{...s,onRemove:i},s.id))}),document.body)}function O8({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(f=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(f=>{i(g=>g.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),h=v.useCallback(f=>{i(g=>g.filter(x=>x.id!==f))},[]);return n.jsxs(I8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(z8,{toasts:o,onStartExit:d,onRemove:h})]})}const D8="_root_1s0ek_5",F8="_list_1s0ek_11",B8="_item_1s0ek_23",H8="_separator_1s0ek_31",W8="_link_1s0ek_47",U8="_current_1s0ek_68",q8="_iconSlot_1s0ek_76",dr={root:D8,list:F8,item:B8,separator:H8,link:W8,current:U8,iconSlot:q8},V8=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:"/"}),G8=()=>n.jsx("span",{className:dr.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Y8=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?G8:V8;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(dr.root,i),...s,children:n.jsx("ol",{className:dr.list,children:e.map((h,f)=>{const g=f===e.length-1,x=!g&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:dr.item,children:[f>0&&n.jsx(d,{}),x?n.jsxs("a",{href:h.href,onClick:h.onClick,className:dr.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(dr.link,g&&dr.current),"aria-current":g?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(dr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},f)})})})});Y8.displayName="Breadcrumb";const K8="_root_139vz_6",Q8="_divider_139vz_14",Z8="_item_139vz_19",X8="_label_139vz_25",J8="_description_139vz_26",e9="_chevron_139vz_27",t9="_iconSlot_139vz_28",n9="_hitTarget_139vz_32",r9="_size_sm_139vz_37",o9="_size_md_139vz_43",a9="_size_lg_139vz_49",i9="_header_139vz_59",s9="_headerContent_139vz_59",l9="_checkboxWrap_139vz_60",c9="_labelBlock_139vz_157",d9="_trailingSlot_139vz_60",u9="_body_139vz_199",h9="_bodyInner_139vz_209",p9="_bodyContent_139vz_214",Ot={root:K8,divider:Q8,item:Z8,label:X8,description:J8,chevron:e9,iconSlot:t9,hitTarget:n9,size_sm:r9,size_md:o9,size_lg:a9,header:i9,headerContent:s9,checkboxWrap:l9,labelBlock:c9,trailingSlot:d9,body:u9,bodyInner:h9,bodyContent:p9},f9="_root_17t97_6",m9="_disabled_17t97_12",g9="_sm_17t97_18",v9="_md_17t97_26",x9="_lg_17t97_34",y9="_controlWrap_17t97_43",w9="_input_17t97_52",b9="_box_17t97_67",k9="_boxChecked_17t97_96",C9="_boxError_17t97_106",_9="_labelWrap_17t97_116",j9="_label_17t97_116",S9="_error_17t97_138",$9="_required_17t97_140",M9="_description_17t97_145",vn={root:f9,disabled:m9,sm:g9,md:v9,lg:x9,controlWrap:y9,input:w9,box:b9,boxChecked:k9,boxError:C9,labelWrap:_9,label:j9,error:S9,required:$9,description:M9},zg=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:g,id:x,name:y,value:w,required:k,className:_},C)=>{const M=v.useId(),N=x??M,R=v.useRef(null);v.useEffect(()=>{R.current&&(R.current.indeterminate=i)},[i]);const S=e!==void 0,[j,O]=v.useState(o),$=S?e:j,L=A=>{S||O(A.target.checked),s==null||s(A.target.checked)},E=$||i;return n.jsxs("div",{className:ie(vn.root,vn[h],l&&vn.disabled,d&&vn.error,_),children:[n.jsxs("div",{className:vn.controlWrap,children:[n.jsx("input",{ref:A=>{R.current=A,typeof C=="function"?C(A):C&&(C.current=A)},type:"checkbox",id:N,name:y,value:w,checked:$,disabled:l,required:k,"aria-invalid":d||void 0,onChange:L,className:vn.input}),n.jsx("span",{className:ie(vn.box,E&&vn.boxChecked,d&&vn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):$?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||g)&&n.jsxs("div",{className:vn.labelWrap,children:[f&&n.jsxs("label",{htmlFor:N,className:vn.label,children:[f,k&&n.jsx("span",{className:vn.required,"aria-hidden":"true",children:" *"})]}),g&&n.jsx("span",{className:vn.description,children:g})]})]})});zg.displayName="Checkbox";const Og=v.createContext(null),Bu=v.createContext(0),Dg=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:g,children:x,...y},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[_,C]=v.useState(k),M=i!==void 0,N=v.useMemo(()=>M?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:_,[M,i,_]),R=v.useCallback(O=>N.has(O),[N]),S=v.useCallback(O=>{const $=new Set(N);e==="single"?$.has(O)?o&&$.delete(O):($.clear(),$.add(O)):$.has(O)?$.delete(O):$.add(O),M||C($),l&&l(e==="single"?$.values().next().value??"":Array.from($))},[N,e,o,M,l]),j=v.useMemo(()=>({type:e,collapsible:o,size:h,disabled:f,isExpanded:R,toggle:S}),[e,o,h,f,R,S]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:ie(Ot.root,d&&Ot.divider,g),...y,children:n.jsx(Og.Provider,{value:j,children:n.jsx(Bu.Provider,{value:0,children:x})})})});Dg.displayName="Accordion";function ll(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Fg=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:_=!1,onExpandedChange:C,disabled:M=!1,size:N,className:R,children:S,...j},O)=>{const $=v.useContext(Og),L=v.useContext(Bu),E=$!==null,A=N??($==null?void 0:$.size)??"md",D=M||($==null?void 0:$.disabled)||!1,[G,K]=v.useState(_);let W;E?W=e!==void 0?$.isExpanded(e):!1:k!==void 0?W=k:W=G;const Y=v.useCallback(()=>{if(D)return;if(E){if(e===void 0)return;const z=$.isExpanded(e);$.toggle(e);const J=$.type==="single"&&!$.collapsible&&z?!0:!z;C==null||C(J);return}const T=!W;k===void 0&&K(T),C==null||C(T)},[D,E,$,e,W,k,C]),X=v.useCallback(T=>w==null?void 0:w(T),[w]),ae=v.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),Y();return}if(E)switch(T.key){case"ArrowDown":T.preventDefault(),ll(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),ll(T.currentTarget,"prev");break;case"Home":T.preventDefault(),ll(T.currentTarget,"first");break;case"End":T.preventDefault(),ll(T.currentTarget,"last");break}},[Y,E]),de=v.useId(),se=`${de}-header`,Q=`${de}-body`,F=A==="sm"?16:A==="md"?18:20,q=l??n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:Ot.checkboxWrap,children:n.jsx(zg,{size:A,checked:g,defaultChecked:x,indeterminate:y,disabled:D,onChange:X})}),s&&n.jsx("span",{className:Ot.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:O,"data-accordion-item":"","data-expanded":W||void 0,"data-disabled":D||void 0,"data-size":A,"data-depth":L,className:ie(Ot.item,Ot[`size_${A}`],R),style:{"--accordion-depth":L},...j,children:[n.jsxs("div",{className:Ot.header,children:[n.jsx("button",{type:"button",id:se,"data-accordion-header-button":"","data-accordion-depth":L,className:Ot.hitTarget,"aria-expanded":W,"aria-controls":Q,"aria-disabled":D||void 0,disabled:D,onClick:Y,onKeyDown:ae}),n.jsxs("div",{className:Ot.headerContent,children:[h==="leading"&&n.jsx("span",{className:Ot.chevron,"aria-hidden":"true",children:n.jsx(_n,{size:F,color:"currentColor"})}),q,n.jsxs("div",{className:Ot.labelBlock,children:[n.jsx("span",{className:Ot.label,children:o}),i&&n.jsx("span",{className:Ot.description,children:i})]}),d&&n.jsx("div",{className:Ot.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Ot.chevron,"aria-hidden":"true",children:n.jsx(_n,{size:F,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":se,className:Ot.body,"aria-hidden":!W,children:n.jsx("div",{className:Ot.bodyInner,children:n.jsx("div",{className:Ot.bodyContent,children:n.jsx(Bu.Provider,{value:L+1,children:S})})})})]})});Fg.displayName="AccordionItem";const N9="_root_1vgip_7",R9="_fullWidth_1vgip_12",L9="_panel_1vgip_19",A9="_panelInner_1vgip_73",T9="_item_1vgip_81",E9="_groupHeading_1vgip_87",I9="_groupHeadingSm_1vgip_96",P9="_groupHeadingLabel_1vgip_100",z9="_groupHeadingCollapsible_1vgip_112",O9="_groupChevron_1vgip_125",D9="_groupDivider_1vgip_139",Jn={root:N9,fullWidth:R9,panel:L9,panelInner:A9,item:T9,groupHeading:E9,groupHeadingSm:I9,groupHeadingLabel:P9,groupHeadingCollapsible:z9,groupChevron:O9,groupDivider:D9};function F9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Jn.groupHeading,o==="sm"&&Jn.groupHeadingSm,e.collapsible&&Jn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Jn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Jn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(_n,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(kn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Jn.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const bh=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},_)=>{const[C,M]=v.useState(h),N=v.useRef(null),R=d!==void 0?d:C,S=v.useCallback(O=>{N.current=O,_&&(typeof _=="function"?_(O):_.current=O)},[_]),j=v.useCallback(O=>{d===void 0&&M(O),f==null||f(O)},[d,f]);return v.useEffect(()=>{if(!R)return;const O=$=>{var L;(L=N.current)!=null&&L.contains($.target)||j(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[R,j]),v.useEffect(()=>{if(!R)return;const O=$=>{$.key==="Escape"&&j(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[R,j]),n.jsxs("div",{ref:S,className:ie(Jn.root,y&&Jn.fullWidth,w),...k,children:[n.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":R,tabIndex:g?-1:0,onClick:g?void 0:()=>j(!R),onKeyDown:g?void 0:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),j(!R))},children:e}),n.jsx("div",{className:Jn.panel,"data-open":R||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Jn.panelInner,children:o.map((O,$)=>n.jsxs("div",{children:[$>0&&n.jsx("div",{className:Jn.groupDivider,"aria-hidden":"true"}),n.jsx(F9,{group:O,size:i,closeOnSelect:x,onClose:()=>j(!1)})]},O.id))})})]})});bh.displayName="DropdownMenu";const B9="_hiddenInput_8457s_8",H9="_area_8457s_19",W9="_uploadIcon_8457s_53",U9="_textBlock_8457s_59",q9="_title_8457s_67",V9="_description_8457s_76",G9="_fileRow_8457s_88",Y9="_fileIcon_8457s_96",K9="_fileName_8457s_101",Q9="_successIcon_8457s_115",Z9="_removeBtn_8457s_121",X9="_progressWrap_8457s_145",J9="_progressBar_8457s_153",e7="_progressFill_8457s_161",t7="_progressLabel_8457s_168",n7="_errorRow_8457s_178",r7="_errorIcon_8457s_186",o7="_errorText_8457s_192",a7="_areaMulti_8457s_206",i7="_multiDropZone_8457s_214",s7="_fileList_8457s_244",l7="_fileListItem_8457s_254",c7="_inline_8457s_267",d7="_inlineIcon_8457s_309",u7="_inlineText_8457s_330",h7="_inlineProgress_8457s_353",p7="_inlineProgressFill_8457s_363",f7="_footerSlot_8457s_429",Qe={hiddenInput:B9,area:H9,uploadIcon:W9,textBlock:U9,title:q9,description:V9,fileRow:G9,fileIcon:Y9,fileName:K9,successIcon:Q9,removeBtn:Z9,progressWrap:X9,progressBar:J9,progressFill:e7,progressLabel:t7,errorRow:n7,errorIcon:r7,errorText:o7,areaMulti:a7,multiDropZone:i7,fileList:s7,fileListItem:l7,inline:c7,inlineIcon:d7,inlineText:u7,inlineProgress:h7,inlineProgressFill:p7,footerSlot:f7};function du(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const Bg=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:_,fieldVariant:C="outlined",browseButtonVariant:M="tertiary",footerSlot:N,disabled:R=!1,className:S,...j},O)=>{const $=v.useRef(null),[L,E]=v.useState(!1),A=!R&&(o||i==="empty"),D=v.useCallback(()=>{var Q;!R&&(o||i==="empty")&&((Q=$.current)==null||Q.click())},[R,o,i]),G=v.useCallback(Q=>{var F;if(o){const q=Q.target.files?Array.from(Q.target.files):[];q.length&&(w==null||w(q))}else{const q=(F=Q.target.files)==null?void 0:F[0];q&&(y==null||y(q))}Q.target.value=""},[o,y,w]),K=v.useCallback(Q=>{Q.preventDefault(),A&&E(!0)},[A]),W=v.useCallback(()=>E(!1),[]),Y=v.useCallback(Q=>{var F;if(Q.preventDefault(),E(!1),!!A)if(o){const q=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];q.length&&(w==null||w(q))}else{const q=(F=Q.dataTransfer.files)==null?void 0:F[0];q&&(y==null||y(q))}},[A,o,y,w]),X=n.jsx("input",{ref:$,type:"file",className:Qe.hiddenInput,accept:x,multiple:o,disabled:R,"aria-hidden":"true",tabIndex:-1,onChange:G}),ae=l?n.jsxs("div",{className:Qe.fileRow,children:[n.jsx("span",{className:`${Qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(to,{size:16})}),n.jsx("span",{className:Qe.fileName,children:l.name}),n.jsx(er,{size:"sm",variant:"subtle",children:du(l)}),i==="complete"&&n.jsx("span",{className:`${Qe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(un,{size:16})}),n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Cl,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:O,className:ie(Qe.areaMulti,S),"data-drag-over":L||void 0,"data-disabled":R||void 0,onDragOver:K,onDragLeave:W,onDrop:Y,...j,children:[X,n.jsxs("div",{className:Qe.multiDropZone,children:[n.jsx("span",{className:`${Qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(cu,{size:24})}),n.jsxs("div",{className:Qe.textBlock,children:[n.jsx("p",{className:Qe.title,children:f}),n.jsx("p",{className:Qe.description,children:g})]}),n.jsx(ze,{variant:M,size:"sm",onClick:D,disabled:R,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:Qe.fileList,"aria-label":"Selected files",children:Q.map((F,q)=>n.jsxs("li",{className:Qe.fileListItem,children:[n.jsx("span",{className:`${Qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(to,{size:16})}),n.jsx("span",{className:Qe.fileName,children:F.name}),n.jsx(er,{size:"sm",variant:"subtle",children:du(F)}),n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:()=>_==null?void 0:_(q),"aria-label":`Remove ${F.name}`,disabled:R,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Cl,{size:14})})})]},`${F.name}-${q}`))})]})}return n.jsxs("div",{ref:O,className:ie(Qe.area,S),"data-state":i,"data-drag-over":L||void 0,"data-disabled":R||void 0,onDragOver:K,onDragLeave:W,onDrop:Y,...j,children:[X,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(cu,{size:24})}),n.jsxs("div",{className:Qe.textBlock,children:[n.jsx("p",{className:Qe.title,children:f}),n.jsx("p",{className:Qe.description,children:g})]}),n.jsx(ze,{variant:M,size:"sm",onClick:D,disabled:R,children:"Browse File"}),N&&n.jsx("div",{className:Qe.footerSlot,children:N})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Qe.progressWrap,children:[n.jsx("div",{className:Qe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Qe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Qe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Qe.errorRow,children:[n.jsx("span",{className:`${Qe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ba,{size:20})}),n.jsx("p",{className:Qe.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(ze,{variant:"tertiary",size:"sm",onClick:D,disabled:R,children:"Try Again"})]})]})}const de={empty:n.jsx(cu,{size:16}),uploading:n.jsx(to,{size:16}),complete:n.jsx(un,{size:16}),error:n.jsx(ba,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:O,className:ie(Qe.inline,S),"data-state":i,"data-field-variant":C,"data-disabled":R||void 0,...j,children:[X,n.jsx("span",{className:`${Qe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:de}),n.jsxs("span",{className:Qe.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),se&&n.jsx(er,{size:"sm",variant:"subtle",children:du(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Qe.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(Cl,{size:14})})}),i==="empty"&&n.jsx(ze,{variant:M,size:"xs",onClick:D,disabled:R,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Qe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Qe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});Bg.displayName="FileUploader";const m7="_wrapper_127v8_8",g7="_labelRow_127v8_16",v7="_label_127v8_16",x7="_required_127v8_28",y7="_labelIcon_127v8_36",w7="_sm_127v8_46",b7="_md_127v8_47",k7="_lg_127v8_48",C7="_shell_127v8_44",_7="_outlined_127v8_75",j7="_underlined_127v8_102",S7="_float_127v8_147",$7="_leadingSlot_127v8_181",M7="_trailingSlot_127v8_193",N7="_trailingActionWrap_127v8_206",R7="_trailingActionBtn_127v8_213",L7="_successTrailingSlot_127v8_234",A7="_errorTrailingSlot_127v8_239",T7="_control_127v8_251",E7="_selectValue_127v8_297",I7="_selectPlaceholder_127v8_303",P7="_selectChevron_127v8_307",z7="_selectChevronOpen_127v8_312",O7="_textareaShell_127v8_315",D7="_textareaControl_127v8_334",F7="_footer_127v8_351",B7="_footerRow_127v8_363",H7="_footerError_127v8_364",W7="_footerSuccess_127v8_365",U7="_footerIcon_127v8_368",q7="_wrapperHorizontal_127v8_378",V7="_horizontalLabelCol_127v8_384",G7="_horizontalLabelHint_127v8_393",Y7="_horizontalControlCol_127v8_402",K7="_msContainer_127v8_416",Q7="_msShell_127v8_425",Z7="_msOpen_127v8_440",X7="_msDisabled_127v8_447",J7="_msBody_127v8_450",ek="_msPlaceholder_127v8_459",tk="_msChevron_127v8_469",nk="_msChevronOpen_127v8_480",rk="_msPanel_127v8_483",Te={wrapper:m7,labelRow:g7,label:v7,required:x7,labelIcon:y7,sm:w7,md:b7,lg:k7,shell:C7,outlined:_7,underlined:j7,float:S7,leadingSlot:$7,trailingSlot:M7,trailingActionWrap:N7,trailingActionBtn:R7,successTrailingSlot:L7,errorTrailingSlot:A7,control:T7,selectValue:E7,selectPlaceholder:I7,selectChevron:P7,selectChevronOpen:z7,textareaShell:O7,textareaControl:D7,footer:F7,footerRow:B7,footerError:H7,footerSuccess:W7,footerIcon:U7,wrapperHorizontal:q7,horizontalLabelCol:V7,horizontalLabelHint:G7,horizontalControlCol:Y7,msContainer:K7,msShell:Q7,msOpen:Z7,msDisabled:X7,msBody:J7,msPlaceholder:ek,msChevron:tk,msChevronOpen:nk,msPanel:rk};function La({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,_=l?"error":d?"success":"hint",C=k?n.jsxs("p",{className:ie(Te.footer,_==="error"&&Te.footerError,_==="success"&&Te.footerSuccess),role:_==="error"?"alert":void 0,"aria-live":_==="error"?"assertive":void 0,children:[_==="hint"&&n.jsx("span",{className:`${Te.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ba,{size:12})}),k]}):null,M=e!=null?n.jsxs("div",{className:Te.labelRow,children:[n.jsx("label",{className:Te.label,htmlFor:f,children:e}),h&&n.jsx("span",{className:Te.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Te.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const N={width:typeof x=="number"?`${x}px`:x};return n.jsxs("div",{className:ie(Te.wrapper,Te.wrapperHorizontal,y),children:[(M||i)&&n.jsxs("div",{className:Te.horizontalLabelCol,style:N,children:[M,i&&n.jsx("p",{className:Te.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Te.horizontalControlCol,children:[w,C]})]})}return n.jsxs("div",{className:ie(Te.wrapper,y),children:[M,w,C]})}function Fi({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const _=o==="sm"?14:o==="lg"?18:16,C=s&&!i&&!f&&!g?n.jsx(un,{size:_}):null,M=i&&!f&&!g?n.jsx(ba,{size:_}):null,N=!!h,R=!!(f||g||C||M);return n.jsxs("div",{className:ie(Te.shell,Te[e],Te[o],x&&Te.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":N||void 0,"data-has-trailing":R||void 0,children:[h&&n.jsx("span",{className:ie(Te.leadingSlot,"alloy-icon-slot"),children:h}),k,g?n.jsx("span",{className:Te.trailingActionWrap,children:g}):f||C||M?n.jsx("span",{className:ie(Te.trailingSlot,"alloy-icon-slot",C&&Te.successTrailingSlot,M&&Te.errorTrailingSlot),children:f??C??M}):null]})}const kh=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:_,id:C,disabled:M,readOnly:N,className:R,...S},j)=>{const O=v.useId(),$=C??O;return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:$,layout:w,labelWidth:k,labelDescription:_,className:R,children:n.jsx(Fi,{variant:h,size:f,error:!!s,success:!!l,disabled:M,readOnly:N,leadingIcon:x,trailingIcon:y,children:n.jsx("input",{ref:j,id:$,type:g,disabled:M,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${$}-footer`:void 0,className:ie(Te.control),...S})})})});kh.displayName="TextField";const ok=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:_,disabled:C,readOnly:M,className:N,...R},S)=>{const j=v.useId(),O=_??j;return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:O,layout:y,labelWidth:w,labelDescription:k,className:N,children:n.jsx(Fi,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:M,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:n.jsx("textarea",{ref:S,id:O,disabled:C,readOnly:M,"aria-invalid":s?!0:void 0,className:ie(Te.control,Te.textareaControl),...R})})})});ok.displayName="TextArea";const ak={sm:"sm",md:"md",lg:"lg"},Hg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:_,defaultValue:C="",onChange:M,placeholder:N="Select an option…",disabled:R,readOnly:S,id:j,className:O},$)=>{var F;const L=v.useId(),E=j??L,A=_!==void 0,[D,G]=v.useState(C),K=A?_:D,W=v.useCallback(q=>{A||G(q),M==null||M(q)},[A,M]),[Y,X]=v.useState(!1),ae=(F=k.find(q=>q.value===K))==null?void 0:F.label,de=f==="sm"?14:f==="lg"?18:16,se=ak[f],Q=n.jsx(Fi,{variant:h,size:f,error:!!s,success:!!l,disabled:R,readOnly:S,focused:Y,leadingIcon:g,trailingIcon:n.jsx("span",{className:ie(Te.selectChevron,Y&&Te.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Dn,{size:de})}),children:n.jsx("span",{className:ie(Te.control,Te.selectValue,!ae&&Te.selectPlaceholder),children:ae??N})});return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:E,layout:x,labelWidth:y,labelDescription:w,className:O,children:n.jsx(bh,{ref:$,id:E,fullWidth:!0,trigger:Q,groups:[{id:"options",options:k.map(q=>({id:q.value,label:q.label,disabled:q.disabled,selected:q.value===K,onClick:()=>W(q.value)}))}],size:se,width:"100%",placement:"bottom-start",open:Y,onOpenChange:X,disabled:R||S})})});Hg.displayName="SelectField";const ik=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:_,readOnly:C,className:M,...N},R)=>{const S=v.useId(),j=k??S,[O,$]=v.useState(!1),L=f==="sm"?14:f==="lg"?18:16;return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:j,layout:x,labelWidth:y,labelDescription:w,className:M,children:n.jsx(Fi,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:g,trailingAction:n.jsx("button",{type:"button",className:`${Te.trailingActionBtn} alloy-icon-slot`,onClick:()=>$(E=>!E),tabIndex:_?-1:0,"aria-label":O?"Hide password":"Show password","aria-pressed":O,children:O?n.jsx(ug,{size:L}):n.jsx(uh,{size:L})}),children:n.jsx("input",{ref:R,id:j,type:O?"text":"password",disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Te.control),...N})})})});ik.displayName="PasswordField";const Wg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:_,value:C,defaultValue:M,disabled:N,readOnly:R,className:S,...j},O)=>{const $=v.useId(),L=_??$,E=f==="sm"?14:f==="lg"?18:16,A=C!==void 0?String(C).length>0:void 0,D=v.useCallback(G=>{x==null||x(G)},[x]);return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:y,labelWidth:w,labelDescription:k,className:S,children:n.jsx(Fi,{variant:h,size:f,error:!!s,success:!!l,disabled:N,readOnly:R,leadingIcon:n.jsx(sg,{size:E}),trailingAction:A?n.jsx("button",{type:"button",className:`${Te.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(zi,{size:E})}):void 0,children:n.jsx("input",{ref:O,id:L,type:"search",value:C,defaultValue:M,disabled:N,readOnly:R,"aria-invalid":s?!0:void 0,onChange:D,className:ie(Te.control),...j})})})});Wg.displayName="SearchField";const Ug=v.forwardRef((e,o)=>n.jsx(kh,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));Ug.displayName="EmailField";const qg=v.forwardRef((e,o)=>n.jsx(kh,{ref:o,type:"number",inputMode:"numeric",...e}));qg.displayName="NumberField";const sk={sm:"sm",md:"sm",lg:"md"},lk={sm:"sm",md:"md",lg:"lg"},ck=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:_=[],onChange:C,placeholder:M="Select options…",disabled:N,readOnly:R,id:S,className:j},O)=>{const $=v.useId(),L=S??$,E=`${L}-list`,A=v.useRef(null),D=k!==void 0,[G,K]=v.useState(_),W=D?k:G,Y=v.useCallback(z=>{D||K(z),C==null||C(z)},[D,C]),[X,ae]=v.useState(!1);v.useEffect(()=>{if(!X)return;const z=U=>{A.current&&!A.current.contains(U.target)&&ae(!1)},J=U=>{U.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",z),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("keydown",J)}},[X]);const de=z=>{if(N||R)return;const J=W.includes(z)?W.filter(U=>U!==z):[...W,z];Y(J)},se=z=>{N||R||((z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ae(J=>!J)),z.key==="Backspace"&&W.length>0&&!X&&Y(W.slice(0,-1)))},Q=f==="sm"?14:f==="lg"?18:16,F=sk[f],q=lk[f],T=Object.fromEntries(w.map(z=>[z.value,z.label]));return n.jsx(La,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:g,labelWidth:x,labelDescription:y,className:j,children:n.jsxs("div",{ref:A,className:Te.msContainer,children:[n.jsxs("div",{ref:O,id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":X,"aria-controls":E,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:ie(Te.msShell,Te[h],Te[f],X&&Te.msOpen,N&&Te.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!R&&ae(z=>!z)},onKeyDown:se,children:[n.jsx("div",{className:Te.msBody,children:W.length===0?n.jsx("span",{className:Te.msPlaceholder,children:M}):W.map(z=>n.jsx(er,{size:F,variant:"subtle",dismissible:!N&&!R,onDismiss:()=>Y(W.filter(J=>J!==z)),children:T[z]??z},z))}),n.jsx("span",{className:ie(Te.msChevron,"alloy-icon-slot",X&&Te.msChevronOpen),children:n.jsx(Dn,{size:Q})})]}),X&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Te.msPanel,children:w.map(z=>{const J=W.includes(z.value);return n.jsx(kn,{label:z.label,size:q,trailingAction:"checkbox",checked:J,disabled:z.disabled,role:"option","aria-selected":J,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{z.disabled||de(z.value)}},z.value)})})]})})});ck.displayName="MultiSelectField";const dk="_root_1249j_6",uk="_pageControls_1249j_14",hk="_pageBtn_1249j_21",pk="_ellipsis_1249j_36",fk="_rowsGroup_1249j_51",mk="_rowsSelect_1249j_58",gk="_countText_1249j_64",vk="_groupLabel_1249j_74",xk="_goToGroup_1249j_84",yk="_goToInput_1249j_91",Qn={root:dk,pageControls:uk,pageBtn:hk,ellipsis:pk,rowsGroup:fk,rowsSelect:mk,countText:gk,groupLabel:vk,goToGroup:xk,goToInput:yk};function wk(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const bk=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,..._},C)=>{const[M,N]=v.useState(""),R=y,S=y,j=y==="sm"?14:16,O=wk(e,o,x),$=v.useCallback(A=>{const D=Math.min(Math.max(1,A),o);D!==e&&i(D)},[e,o,i]),L=v.useCallback(A=>{if(A.key==="Enter"){const D=parseInt(M,10);isNaN(D)||$(D),N("")}},[M,$]),E=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return n.jsxs("nav",{ref:C,"aria-label":"Pagination",className:ie(Qn.root,k),"data-size":y,..._,children:[s&&n.jsxs("div",{className:Qn.rowsGroup,children:[n.jsx("span",{className:Qn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Qn.rowsSelect,children:n.jsx(Hg,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:A=>h==null?void 0:h(Number(A.target.value)),children:d.map(A=>n.jsx("option",{value:A,children:A},A))})})]}),E&&n.jsx("span",{className:Qn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Qn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(ze,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>$(e-1),children:n.jsx(dg,{size:j})}),O.map((A,D)=>A==="ellipsis"?n.jsx("span",{className:Qn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${D}`):n.jsx(ze,{variant:A===e?"secondary":"ghost",size:R,"aria-label":`Page ${A}`,"aria-current":A===e?"page":void 0,disabled:w,onClick:()=>$(A),className:Qn.pageBtn,children:A},A)),n.jsx(ze,{variant:"ghost",size:R,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>$(e+1),children:n.jsx(_n,{size:j})})]}),f&&n.jsxs("div",{className:Qn.goToGroup,children:[n.jsx("span",{className:Qn.groupLabel,children:"Go to"}),n.jsx("div",{className:Qn.goToInput,children:n.jsx(qg,{size:S,value:M,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:A=>N(A.target.value),onKeyDown:L})})]})]})});bk.displayName="Pagination";const kk="_root_1vx33_6",Ck="_fullWidth_1vx33_18",_k="_item_1vx33_23",jk="_indicator_1vx33_28",Sk="_sm_1vx33_46",$k="_md_1vx33_54",Mk="_lg_1vx33_62",Nk="_itemSelected_1vx33_109",Rk="_itemIcon_1vx33_115",Lk="_itemLabel_1vx33_127",Jr={root:kk,fullWidth:Ck,item:_k,indicator:jk,sm:Sk,md:$k,lg:Mk,itemSelected:Nk,itemIcon:Rk,itemLabel:Lk},Vg=v.createContext(null);function Ak(e){const o=v.useContext(Vg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Gg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:g,onChange:x,disabled:y,name:w}=Ak("SegmentedControl.Item"),k=g===e,_=y||!!l;return n.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:_,className:ie(Jr.item,k&&Jr.itemSelected,i),onClick:C=>{_||x(e),d==null||d(C)},...h,children:[o&&n.jsx("span",{className:ie(Jr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:Jr.itemLabel,children:s})]})});Gg.displayName="SegmentedControl.Item";const Yg=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(o),k=e!==void 0,_=k?e:y,C=v.useId(),M=v.useRef(null);v.useLayoutEffect(()=>{const R=M.current;if(!R)return;const S=R.querySelector('[aria-checked="true"]');S&&(R.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),R.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[_,s]);const N=R=>{k||w(R),i==null||i(R)};return n.jsx(Vg.Provider,{value:{value:_,onChange:N,disabled:l,name:C},children:n.jsxs("div",{ref:R=>{M.current=R,typeof x=="function"?x(R):x&&(x.current=R)},role:"radiogroup",className:ie(Jr.root,Jr[s],d&&Jr.fullWidth,h),...g,children:[n.jsx("span",{className:Jr.indicator,"aria-hidden":"true"}),f]})})});Yg.displayName="SegmentedControl";Object.assign(Yg,{Item:Gg});const Tk="_root_fkv0x_6",Ek="_sm_fkv0x_26",Ik="_md_fkv0x_33",Pk="_lg_fkv0x_40",zk="_dot_fkv0x_49",Ok="_success_fkv0x_58",Dk="_warning_fkv0x_65",Fk="_error_fkv0x_72",Bk="_info_fkv0x_79",Hk="_neutral_fkv0x_86",Wk="_pending_fkv0x_93",cl={root:Tk,sm:Ek,md:Ik,lg:Pk,dot:zk,success:Ok,warning:Dk,error:Fk,info:Bk,neutral:Hk,pending:Wk},Li=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(cl.root,cl[o],cl[e],s),...d,children:[i&&n.jsx("span",{className:cl.dot,"aria-hidden":"true"}),l]}));Li.displayName="StatusTag";const Uk="_root_1m8t5_6",qk="_underline_1m8t5_15",Vk="_background_1m8t5_21",Gk="_underlineIndicator_1m8t5_26",Yk="_md_1m8t5_43",Kk="_lg_1m8t5_44",Qk="_tab_1m8t5_42",Zk="_tabSelected_1m8t5_77",Xk="_tabIcon_1m8t5_99",Jk="_tabLabel_1m8t5_111",eC="_tabBadge_1m8t5_116",tC="_tabLabelEditable_1m8t5_123",nC="_tabLabelInput_1m8t5_128",rC="_addTab_1m8t5_147",oC="_addTabIcon_1m8t5_160",cn={root:Uk,underline:qk,background:Vk,underlineIndicator:Gk,md:Yk,lg:Kk,tab:Qk,tabSelected:Zk,tabIcon:Xk,tabLabel:Jk,tabBadge:eC,tabLabelEditable:tC,tabLabelInput:nC,addTab:rC,addTabIcon:oC},Kg=v.createContext(null);function Qg(e){const o=v.useContext(Kg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const Zg=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:g,children:x,...y},w)=>{const{value:k,onChange:_,disabled:C,name:M}=Qg("Tabs.Tab"),N=k===e,R=C||!!s,S=typeof x=="string"?x:"",[j,O]=v.useState(d&&l),[$,L]=v.useState(S),E=v.useRef(null);v.useEffect(()=>{if(j){const W=E.current;W&&(W.focus(),W.select())}},[j]),v.useEffect(()=>{d&&l&&!j&&(L(typeof x=="string"?x:""),O(!0))},[d,l]);const A=()=>{const W=$.trim();W&&W!==S&&(h==null||h(W)),O(!1)},D=()=>{L(S),O(!1)},G=W=>{!l||R||(W.stopPropagation(),L(S),O(!0))},K=W=>{W.key==="Enter"?(W.preventDefault(),A()):W.key==="Escape"&&(W.preventDefault(),D())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":N,name:M,disabled:R,className:ie(cn.tab,N&&cn.tabSelected,g),onClick:W=>{j||(R||_(e),f==null||f(W))},...y,children:[o&&n.jsx("span",{className:ie(cn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),j?n.jsx("input",{ref:E,type:"text",value:$,onChange:W=>L(W.target.value),onKeyDown:K,onBlur:A,onClick:W=>W.stopPropagation(),className:cn.tabLabelInput,"aria-label":"Tab name",size:Math.max($.length,1)}):x!==void 0&&n.jsx("span",{className:ie(cn.tabLabel,l&&cn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!j&&n.jsx("span",{className:cn.tabBadge,children:i})]})});Zg.displayName="Tabs.Tab";const aC=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Xg=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Qg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(cn.tab,cn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(cn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(aC,{})})})});Xg.displayName="Tabs.AddTab";const Jg=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(s),k=i!==void 0,_=k?i:y,C=v.useId(),M=v.useRef(null);v.useLayoutEffect(()=>{const R=M.current;if(!R||e!=="underline")return;const S=R.querySelector('[aria-selected="true"]');S&&(R.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),R.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[_,e]);const N=R=>{k||w(R),l==null||l(R)};return n.jsx(Kg.Provider,{value:{value:_,onChange:N,disabled:d,variant:e,size:o,name:C},children:n.jsxs("div",{ref:R=>{M.current=R,typeof x=="function"?x(R):x&&(x.current=R)},role:"tablist",className:ie(cn.root,cn[e],cn[o],h),...g,children:[e==="underline"&&n.jsx("span",{className:cn.underlineIndicator,"aria-hidden":"true"}),f]})})});Jg.displayName="Tabs";Object.assign(Jg,{Tab:Zg,AddTab:Xg});const iC="_selectedBorder_1ypeg_7",sC="_selectedFill_1ypeg_12",Ff={selectedBorder:iC,selectedFill:sC},lC=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const g=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?Ff.selectedFill:Ff.selectedBorder:void 0;return n.jsx(ze,{ref:f,variant:o,"aria-pressed":e,className:ie(x,d),onClick:g,...h})});lC.displayName="ToggleButton";const cC="_root_mcb75_6",dC="_disabled_mcb75_13",uC="_sm_mcb75_20",hC="_md_mcb75_31",pC="_lg_mcb75_42",fC="_track_mcb75_54",mC="_trackChecked_mcb75_90",gC="_thumb_mcb75_100",vC="_labelWrap_mcb75_117",xC="_label_mcb75_117",yC="_description_mcb75_139",kr={root:cC,disabled:dC,sm:uC,md:hC,lg:pC,track:fC,trackChecked:mC,thumb:gC,labelWrap:vC,label:xC,description:yC},wC=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:g,value:x,className:y},w)=>{const k=v.useId(),_=f??k,C=`${_}-label`,M=e!==void 0,[N,R]=v.useState(o),S=M?e:N,j=()=>{if(s)return;const $=!S;M||R($),i==null||i($)},O=$=>{($.key===" "||$.key==="Enter")&&($.preventDefault(),j())};return n.jsxs("div",{className:ie(kr.root,kr[l],s&&kr.disabled,y),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:_,"aria-checked":S,"aria-labelledby":d?C:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:ie(kr.track,S&&kr.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:O,children:n.jsx("span",{className:kr.thumb})}),(d||h)&&n.jsxs("div",{className:kr.labelWrap,children:[d&&n.jsx("label",{id:C,htmlFor:_,className:kr.label,children:d}),h&&n.jsx("span",{className:kr.description,children:h})]})]})});wC.displayName="Switch";const bC="_root_104n4_5",kC="_disabled_104n4_11",CC="_sm_104n4_17",_C="_md_104n4_25",jC="_lg_104n4_33",SC="_controlWrap_104n4_41",$C="_input_104n4_50",MC="_ring_104n4_65",NC="_ringChecked_104n4_90",RC="_ringError_104n4_94",LC="_dot_104n4_104",AC="_labelWrap_104n4_112",TC="_label_104n4_112",EC="_error_104n4_130",IC="_required_104n4_132",PC="_description_104n4_137",an={root:bC,disabled:kC,sm:CC,md:_C,lg:jC,controlWrap:SC,input:$C,ring:MC,ringChecked:NC,ringError:RC,dot:LC,labelWrap:AC,label:TC,error:EC,required:IC,description:PC},zC=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:g,name:x,required:y,className:w},k)=>{const _=v.useId(),C=g??_;return n.jsxs("div",{className:ie(an.root,an[d],s&&an.disabled,l&&an.error,w),children:[n.jsxs("div",{className:an.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:C,name:x,value:e,checked:o,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:an.input}),n.jsx("span",{className:ie(an.ring,o&&an.ringChecked,l&&an.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:an.dot})})]}),(h||f)&&n.jsxs("div",{className:an.labelWrap,children:[h&&n.jsxs("label",{htmlFor:C,className:an.label,children:[h,y&&n.jsx("span",{className:an.required,"aria-hidden":"true",children:" *"})]}),f&&n.jsx("span",{className:an.description,children:f})]})]})});zC.displayName="Radio";const OC="_table_1ad04_8",DC="_sm_1ad04_16",FC="_row_1ad04_30",BC="_head_1ad04_47",HC="_headLabel_1ad04_82",WC="_sortBtn_1ad04_96",UC="_sortIcon_1ad04_119",qC="_cell_1ad04_142",VC="_cellText_1ad04_175",GC="_cellStack_1ad04_203",YC="_cellStackPrimary_1ad04_210",KC="_cellStackSecondary_1ad04_221",QC="_cellActions_1ad04_233",ZC="_cellControl_1ad04_240",XC="_addCell_1ad04_251",JC="_addRowCell_1ad04_264",e_="_addRowLabel_1ad04_276",Dt={table:OC,sm:DC,row:FC,head:BC,headLabel:HC,sortBtn:WC,sortIcon:UC,cell:qC,cellText:VC,cellStack:GC,cellStackPrimary:YC,cellStackSecondary:KC,cellActions:QC,cellControl:ZC,addCell:XC,addRowCell:JC,addRowLabel:e_},e2=v.createContext({addColumn:!1,addRow:!1}),t2=()=>v.useContext(e2),t_=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...g},x)=>{const y=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(e2.Provider,{value:y,children:n.jsx("table",{ref:x,className:ie(Dt.table,e==="sm"&&Dt.sm,h),"data-interaction":o,...g,children:f})})});t_.displayName="Table";const n2=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},g)=>{const x=o!==void 0;return n.jsx("th",{ref:g,className:ie(Dt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":x?"none":void 0,...f,children:x?n.jsxs("button",{type:"button",className:Dt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Dt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Dn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Dt.headLabel,children:h})})});n2.displayName="TableHead";const n_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=t2(),d=s?v.Children.map(e,(h,f)=>{if(!v.isValidElement(h)||f!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,n.jsx(n2,{hoverable:!0,onClick:l,className:Dt.addCell,"aria-label":"Add column",children:n.jsx(Ma,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});n_.displayName="TableHeader";const r2=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Dt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));r2.displayName="TableRow";const Hu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>n.jsx("td",{ref:f,className:ie(Dt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Hu.displayName="TableCell";const r_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=t2(),h=s?v.Children.map(e,f=>{if(!v.isValidElement(f))return f;const g=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...g,n.jsx(Hu,{"aria-hidden":"true",className:Dt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(r2,{hoverable:!1,children:n.jsx(Hu,{colSpan:999,onClick:d,className:Dt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Dt.addRowLabel,children:[n.jsx(Ma,{size:14,strokeWidth:2}),"Add row"]})})})]})});r_.displayName="TableBody";const o_=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(Dt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));o_.displayName="CellText";const a_=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Dt.cellStack,i),...s,children:[n.jsx("span",{className:Dt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Dt.cellStackSecondary,children:o})]}));a_.displayName="CellStack";const i_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(er,{ref:i,size:e,...o}));i_.displayName="CellTag";const s_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Li,{ref:i,size:e,...o}));s_.displayName="CellStatusTag";const l_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellActions,e),...i,children:o}));l_.displayName="CellActions";const c_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellControl,e),...i,children:o}));c_.displayName="CellControl";const d_="_root_1afcs_8",u_="_secondary_1afcs_23",h_="_header_1afcs_28",p_="_headerText_1afcs_36",f_="_title_1afcs_43",m_="_subtitle_1afcs_52",g_="_action_1afcs_61",v_="_hero_1afcs_66",x_="_heroValue_1afcs_74",y_="_heroCaption_1afcs_83",w_="_heroChange_1afcs_89",b_="_body_1afcs_95",k_="_legend_1afcs_103",xn={root:d_,secondary:u_,header:h_,headerText:p_,title:f_,subtitle:m_,action:g_,hero:v_,heroValue:x_,heroCaption:y_,heroChange:w_,body:b_,legend:k_},C_=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:g,className:x,...y},w)=>n.jsxs("div",{ref:w,className:ie(xn.root,f&&xn.secondary,x),...y,children:[n.jsxs("div",{className:xn.header,children:[n.jsxs("div",{className:xn.headerText,children:[n.jsx("h3",{className:xn.title,children:e}),o&&n.jsx("p",{className:xn.subtitle,children:o})]}),i&&n.jsx("div",{className:xn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:xn.hero,children:[s!==void 0&&n.jsx("span",{className:xn.heroValue,children:s}),l&&n.jsx("span",{className:xn.heroChange,children:l}),d&&n.jsx("span",{className:xn.heroCaption,children:d})]}),n.jsx("div",{className:xn.body,children:g}),h&&n.jsx("div",{className:xn.legend,children:h})]}));C_.displayName="ChartCard";const __="_root_je8nq_7",j_="_item_je8nq_17",S_="_swatch_je8nq_23",$_="_label_je8nq_29",M_="_bookend_je8nq_33",da={root:__,item:j_,swatch:S_,label:$_,bookend:M_},o2=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>n.jsxs("div",{ref:f,className:ie(da.root,d),...h,children:[o&&n.jsx("span",{className:da.bookend,children:o}),e.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return n.jsxs("span",{className:da.item,children:[n.jsx("span",{className:da.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&n.jsx("span",{className:da.label,children:g.label})]},x)}),i&&n.jsx("span",{className:da.bookend,children:i})]}));o2.displayName="ChartLegend";const N_="_root_igkx4_5",R_="_svgWrap_igkx4_13",L_="_svg_igkx4_13",A_="_gridLine_igkx4_23",T_="_axisLabel_igkx4_28",E_="_legendWrap_igkx4_43",I_="_legendItem_igkx4_51",P_="_legendDot_igkx4_57",z_="_legendLabel_igkx4_64",O_="_tooltip_igkx4_71",D_="_tooltipLabel_igkx4_85",F_="_tooltipRow_igkx4_95",B_="_tooltipDot_igkx4_101",H_="_tooltipSeries_igkx4_108",W_="_tooltipValue_igkx4_115",Ue={root:N_,svgWrap:R_,svg:L_,gridLine:A_,axisLabel:T_,legendWrap:E_,legendItem:I_,legendDot:P_,legendLabel:z_,tooltip:O_,tooltipLabel:D_,tooltipRow:F_,tooltipDot:B_,tooltipSeries:H_,tooltipValue:W_},U_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function uu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function ua(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const q_=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:_,className:C,...M},N)=>{var B,P,oe,fe;const R=g&&g.length>0?g:U_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,O]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),$=v.useRef(null),[L,E]=v.useState(540);v.useEffect(()=>{const ce=$.current;if(!ce)return;const ve=new ResizeObserver(_e=>{var Oe;const Me=(Oe=_e[0])==null?void 0:Oe.contentRect.width;Me>0&&E(Math.floor(Me))});ve.observe(ce);const Ce=Math.floor(ce.getBoundingClientRect().width);return Ce>0&&E(Ce),()=>ve.disconnect()},[]);const A=44,D=0,G=20,K=20,W=L,Y=s,X=W-A-D,ae=Y-G-K,de=5,se=e.map((ce,ve)=>ce.color??R[ve%R.length]);let Q=0;i==="stacked"?o.forEach((ce,ve)=>{const Ce=e.reduce((_e,Me)=>_e+(Me.data[ve]??0),0);Ce>Q&&(Q=Ce)}):i==="horizontal"?Q=Math.max(...((B=e[0])==null?void 0:B.data)??[0]):e.forEach(ce=>ce.data.forEach(ve=>{ve>Q&&(Q=ve)}));const F=uu(Q),q=Array.from({length:de+1},(ce,ve)=>F*(ve/de)).reverse(),T=ce=>K+ae-ce/F*ae,z=X/o.length,J=3,U=i==="grouped"?Math.max(4,(z-J*(e.length+1))/e.length):z,ee=()=>O(ce=>({...ce,visible:!1})),le=v.useCallback(ce=>{const ve=ce.currentTarget.getBoundingClientRect(),Ce=ce.clientX-ve.left,_e=Math.floor((Ce-A)/z);if(_e<0||_e>=o.length){ee();return}const Me=e.map((Oe,Ge)=>({color:se[Ge],series:Oe.label,value:Oe.data[_e]??0}));O({visible:!0,x:ce.clientX+12,y:ce.clientY-8,label:o[_e],items:Me})},[e,o,z,se,A]);if(i==="gradient"){const ce=((P=e[0])==null?void 0:P.data)??[],ve=((oe=e[0])==null?void 0:oe.label)??"",Ce=44,_e=0,Me=20,Oe=20,Ge=Math.max(W-Ce-_e,1),De=Y-Me-Oe,Pe=Math.max(0,...ce),Be=Pe>0?uu(Pe):10,Je=5,xt=Array.from({length:Je+1},(Ie,Xe)=>Be*Xe/Je),me=Ie=>Me+De-Ie/Be*De,Le=Ge/Math.max(1,ce.length),Ye=Ie=>Ce+Le*Ie,et=Ie=>Ce+Le*(Ie+1),We=Ie=>Ce+Le*(Ie+.5),kt=ce.length===0?"":ce.map((Ie,Xe)=>{const mt=me(Ie);return`M ${Ye(Xe)} ${mt} L ${et(Xe)} ${mt}`}).join(" "),nt=[];ce.forEach((Ie,Xe)=>{if(Ie<=0)return;const mt=me(Ie);nt.push({x:Ye(Xe),y:mt,width:Math.max(et(Xe)-Ye(Xe),0),height:Me+De-mt})});const Bn=Math.max(1,Math.ceil(45/Le)),Po=o.length-1,zo=w??(Ie=>`${ua(Ie)}${h}`);return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:$,className:Ue.svgWrap,children:n.jsxs("svg",{width:W,height:Y,viewBox:`0 0 ${W} ${Y}`,className:Ue.svg,onMouseLeave:ee,onMouseMove:Ie=>{const Xe=Ie.currentTarget.getBoundingClientRect(),mt=Ie.clientX-Xe.left,Ct=Math.floor((mt-Ce)/Le);if(Ct<0||Ct>=ce.length){ee();return}O({visible:!0,x:Ie.clientX+12,y:Ie.clientY-8,label:o[Ct]??"",items:[{color:y,series:ve,value:ce[Ct]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x}),n.jsx("stop",{offset:"100%",stopColor:y})]}),n.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),xt.map((Ie,Xe)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:W-_e,y1:me(Ie),y2:me(Ie),className:Ue.gridLine}),n.jsxs("text",{x:0,y:me(Ie)-6,className:Ue.axisLabel,textAnchor:"start",children:[ua(Ie),h]})]},`t-${Xe}`)),nt.map((Ie,Xe)=>n.jsx("rect",{x:Ie.x,y:Ie.y,width:Ie.width,height:Ie.height,fill:`url(#${S}-fill)`},`b-${Xe}`)),kt&&n.jsx("path",{d:kt,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var hn;const Ie=(hn=$.current)==null?void 0:hn.getBoundingClientRect();if(!Ie)return null;const Xe=j.x-12-Ie.left,mt=Math.floor((Xe-Ce)/Le);if(mt<0||mt>=ce.length)return null;const Ct=ce[mt]??0;return Ct<=0?null:n.jsx("circle",{cx:We(mt),cy:me(Ct),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ie,Xe)=>{const mt=Xe===0,Ct=Xe===Po;if(!(mt||Ct)&&Xe%Bn!==0)return null;const Sn=mt?Ce:Ct?W-_e:We(Xe),io=mt?"start":Ct?"end":"middle";return n.jsx("text",{x:Sn,y:Y-Oe+18,className:Ue.axisLabel,textAnchor:io,children:Ie},`xl-${Xe}`)})]})}),j.visible&&j.items.length>0&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(Ie=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Ie.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Ie.series}),n.jsx("span",{className:Ue.tooltipValue,children:zo(Ie.value)})]},Ie.series))]})]})}if(i==="horizontal"){const ce=((fe=e[0])==null?void 0:fe.data)??[],ve=uu(Math.max(...ce,1)),Ce=28,_e=10,Me=120,Ge=W-Me-44,De=o.length*(Ce+_e)+_e;return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:$,className:Ue.svgWrap,children:n.jsx("svg",{width:W,height:De,viewBox:`0 0 ${W} ${De}`,className:Ue.svg,onMouseLeave:ee,onMouseMove:Pe=>{var me;const Be=Pe.currentTarget.getBoundingClientRect(),Je=Pe.clientY-Be.top,xt=Math.floor(Je/(Ce+_e));if(xt<0||xt>=o.length){ee();return}O({visible:!0,x:Pe.clientX+12,y:Pe.clientY-8,label:o[xt],items:[{color:se[0],series:((me=e[0])==null?void 0:me.label)??"",value:ce[xt]??0}]})},children:o.map((Pe,Be)=>{const Je=_e+Be*(Ce+_e),xt=ce[Be]??0,me=xt/ve*Ge;return n.jsxs("g",{children:[n.jsx("text",{x:Me-8,y:Je+Ce/2+4,className:Ue.axisLabel,textAnchor:"end",children:Pe}),n.jsx("rect",{x:Me,y:Je,width:me,height:Ce,rx:f,fill:se[0]}),n.jsxs("text",{x:Me+me+6,y:Je+Ce/2+4,className:Ue.axisLabel,textAnchor:"start",children:[ua(xt),h]})]},Be)})})}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(Pe=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Pe.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Pe.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ua(Pe.value),h]})]},Pe.series))]})]})}return n.jsxs("div",{ref:N,className:ie(Ue.root,C),...M,children:[n.jsx("div",{ref:$,className:Ue.svgWrap,children:n.jsxs("svg",{width:W,height:Y,viewBox:`0 0 ${W} ${Y}`,className:Ue.svg,onMouseMove:le,onMouseLeave:ee,children:[n.jsx("defs",{children:se.flatMap((ce,ve)=>[n.jsxs("linearGradient",{id:`${S}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`soft-${ve}`),n.jsxs("linearGradient",{id:`${S}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`strong-${ve}`)])}),q.map(ce=>{const ve=T(ce);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ve,x2:W-D,y2:ve,className:Ue.gridLine}),n.jsxs("text",{x:0,y:ve-6,className:Ue.axisLabel,textAnchor:"start",children:[ua(ce),h]})]},ce)}),o.map((ce,ve)=>{const Ce=A+ve*z;if(i==="stacked"){let Oe=0;const Ge=e.map((me,Le)=>{const Ye=me.data[ve]??0,et=Ye/F*ae,We=T(Oe+Ye);return Oe+=Ye,{si:Le,value:Ye,barH:et,y:We}}),De=Ce+(z-U)/2,Pe=Ge.filter(me=>me.value>0),Be=Pe.length>0?Pe[0].si:-1,Je=Pe.length>0?Pe[Pe.length-1]:null,xt=_??(Je?se[Je.si]:"transparent");return n.jsxs("g",{children:[Ge.map(({si:me,value:Le,barH:Ye,y:et})=>{if(Le<=0)return null;if(k==="mono-scale"){const We=me===Be;return n.jsx("rect",{x:De,y:et,width:U,height:Ye,fill:We?`url(#${S}-fill-strong-${me})`:se[me]},`fill-${me}`)}return n.jsx("rect",{x:De,y:et,width:U,height:Ye,fill:`url(#${S}-fill-${me})`},`fill-${me}`)}),k==="mono-scale"?Je&&n.jsx("line",{x1:De,x2:De+U,y1:Je.y,y2:Je.y,stroke:xt,strokeWidth:2,strokeLinecap:"butt"}):Ge.map(({si:me,value:Le,y:Ye})=>Le>0?n.jsx("line",{x1:De,x2:De+U,y1:Ye,y2:Ye,stroke:se[me],strokeWidth:2,strokeLinecap:"butt"},`cap-${me}`):null)]},ve)}const _e=e.length*U+(e.length-1)*J,Me=Ce+(z-_e)/2;return n.jsx("g",{children:e.map((Oe,Ge)=>{const De=Oe.data[ve]??0;if(De<=0)return null;const Pe=De/F*ae,Be=Me+Ge*(U+J),Je=T(De);return n.jsxs("g",{children:[n.jsx("rect",{x:Be,y:Je,width:U,height:Pe,fill:`url(#${S}-fill-${Ge})`}),n.jsx("line",{x1:Be,x2:Be+U,y1:Je,y2:Je,stroke:se[Ge],strokeWidth:2,strokeLinecap:"butt"})]},Ge)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/z)),Ce=o.length-1;return o.map((_e,Me)=>{const Oe=Me===0,Ge=Me===Ce;if(!(Oe||Ge)&&Me%ve!==0)return null;const Pe=Oe?A:Ge?W-D:A+z*(Me+.5),Be=Oe?"start":Ge?"end":"middle";return n.jsx("text",{x:Pe,y:Y-G+18,className:Ue.axisLabel,textAnchor:Be,children:_e},`xl-${Me}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Ue.legendWrap,children:e.map((ce,ve)=>n.jsxs("div",{className:Ue.legendItem,children:[n.jsx("span",{className:Ue.legendDot,style:{background:se[ve]}}),n.jsx("span",{className:Ue.legendLabel,children:ce.label})]},ce.label))}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(ce=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:ce.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:ce.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ua(ce.value),h]})]},ce.series))]})]})});q_.displayName="BarChart";const V_="_root_1crij_5",G_="_svgWrap_1crij_13",Y_="_svg_1crij_13",K_="_gridLine_1crij_23",Q_="_axisLabelY_1crij_35 _axisLabel_1crij_28",Z_="_axisLabelX_1crij_39 _axisLabel_1crij_28",X_="_legendWrap_1crij_51",J_="_tooltip_1crij_76",ej="_tooltipLabel_1crij_95",tj="_tooltipRow_1crij_105",nj="_tooltipDot_1crij_111",rj="_tooltipSeries_1crij_118",oj="_tooltipValue_1crij_125",yn={root:V_,svgWrap:G_,svg:Y_,gridLine:K_,axisLabelY:Q_,axisLabelX:Z_,legendWrap:X_,tooltip:J_,tooltipLabel:ej,tooltipRow:tj,tooltipDot:nj,tooltipSeries:rj,tooltipValue:oj};function aj(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Bf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function ij(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],g=(h-l)*o;i+=` C ${l+g} ${d}, ${h-g} ${f}, ${h} ${f}`}return i}const sj=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:g=5,className:x,...y},w)=>{const[k,_]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),C=`line-grad-${Math.random().toString(36).slice(2,9)}`,M=v.useRef(null),[N,R]=v.useState(540);v.useEffect(()=>{const F=M.current;if(!F)return;const q=new ResizeObserver(z=>{var U;const J=(U=z[0])==null?void 0:U.contentRect.width;J>0&&R(Math.floor(J))});q.observe(F);const T=Math.floor(F.getBoundingClientRect().width);return T>0&&R(T),()=>q.disconnect()},[]);const S=44,j=20,O=20,$=N,L=i,E=$-S,A=L-j-O,D=`url(#${C}-stroke)`,G=F=>F.color??D,K=e.flatMap(F=>F.data),W=aj(Math.max(...K,1)),Y=Array.from({length:g+1},(F,q)=>W*(q/g)).reverse(),X=F=>O+A-F/W*A,ae=F=>o.length>1?S+F/(o.length-1)*E:S+E/2,de=F=>F.map((q,T)=>[ae(T),X(q)]),se=()=>_(F=>({...F,visible:!1})),Q=v.useCallback(F=>{const q=F.currentTarget.getBoundingClientRect(),z=F.clientX-q.left-S,J=E/Math.max(o.length-1,1),U=Math.round(z/J),ee=Math.max(0,Math.min(U,o.length-1)),le=e.map(B=>({color:B.color??h,series:B.label,value:B.data[ee]??0}));_({visible:!0,index:ee,x:F.clientX+12,y:F.clientY-8,label:o[ee],items:le})},[e,o,h,E,S]);return n.jsxs("div",{ref:w,className:ie(yn.root,x),...y,children:[n.jsx("div",{ref:M,className:yn.svgWrap,children:n.jsxs("svg",{width:$,height:L,viewBox:`0 0 ${$} ${L}`,className:yn.svg,onMouseMove:Q,onMouseLeave:se,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${C}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${C}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${C}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${C}-clip`,children:n.jsx("rect",{x:S,y:O,width:E,height:A,rx:6,ry:6})})]}),Y.map(F=>{const q=X(F);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:q,x2:$,y2:q,className:yn.gridLine}),n.jsxs("text",{x:0,y:q-6,className:yn.axisLabelY,textAnchor:"start",children:[Bf(F),f]})]},F)}),n.jsx("g",{clipPath:`url(#${C}-clip)`,children:e.map((F,q)=>{const T=de(F.data),z=ij(T);return n.jsx("path",{d:z,fill:"none",stroke:G(F),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},q)})}),(()=>{const F=k.index>=0?k.index:0,q=ae(F),T=k.visible&&k.index>=0,z="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${q}px)`,transition:z},children:[n.jsx("line",{x1:0,x2:0,y1:O,y2:O+A,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((J,U)=>{const ee=J.data[F]??0,le=X(ee),B=J.color??h;return n.jsx("g",{style:{transform:`translateY(${le}px)`,transition:z},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:B,filter:`url(#${C}-pin-shadow)`})},U)})]})})})(),(()=>{const q=o.length>1?E/(o.length-1):E,T=Math.max(1,Math.ceil(45/Math.max(q,1))),z=o.length-1;return o.map((J,U)=>{const ee=U===0,le=U===z;if(!(ee||le)&&U%T!==0)return null;const P=ee?S:le?$:ae(U),oe=ee?"start":le?"end":"middle";return n.jsx("text",{x:P,y:L-j+14,className:yn.axisLabelX,textAnchor:oe,children:J},J)})})()]})}),l&&e.length>0&&n.jsx("div",{className:yn.legendWrap,children:n.jsx(o2,{variant:"line",items:e.map(F=>({color:F.color??h,label:F.label}))})}),k.visible&&n.jsxs("div",{className:yn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:yn.tooltipLabel,children:k.label}),k.items.map(F=>n.jsxs("div",{className:yn.tooltipRow,children:[n.jsx("span",{className:yn.tooltipDot,style:{background:F.color}}),n.jsx("span",{className:yn.tooltipSeries,children:F.series}),n.jsxs("span",{className:yn.tooltipValue,children:[Bf(F.value),f]})]},F.series))]})]})});sj.displayName="LineChart";const lj="_root_3tq2n_5",cj="_chartWrap_3tq2n_14",dj="_svg_3tq2n_18",uj="_centerText_3tq2n_23",hj="_statLegend_3tq2n_31",pj="_statItem_3tq2n_37",fj="_statBar_3tq2n_44",mj="_statText_3tq2n_50",gj="_statValue_3tq2n_56",vj="_statLabel_3tq2n_65",xj="_listLegend_3tq2n_72",yj="_legendItem_3tq2n_79",wj="_legendDot_3tq2n_85",bj="_legendLabel_3tq2n_92",kj="_legendValue_3tq2n_99",Cj="_tooltip_3tq2n_107",_j="_tooltipLabel_3tq2n_118",jj="_tooltipValue_3tq2n_124",Pt={root:lj,chartWrap:cj,svg:dj,centerText:uj,statLegend:hj,statItem:pj,statBar:fj,statText:mj,statValue:gj,statLabel:vj,listLegend:xj,legendItem:yj,legendDot:wj,legendLabel:bj,legendValue:kj,tooltip:Cj,tooltipLabel:_j,tooltipValue:jj},Hf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Sj=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map(($,L)=>$.color??Hf[L%Hf.length]),_=e.reduce(($,L)=>$+L.value,0),C=i/2,M=i/2,N=i*.15,R=(i-N)/2-2,S=2*Math.PI*R;let j=-S/4;const O=e.map(($,L)=>{const A=(_>0?$.value/_:0)*S,D=`${A} ${S-A}`,G=-j;return j+=A,{dashArray:D,dashOffset:G,color:k[L],...$}});return n.jsxs("div",{ref:x,className:ie(Pt.root,f),...g,children:[n.jsx("div",{className:Pt.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Pt.svg,children:[n.jsx("circle",{cx:C,cy:M,r:R,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),O.map(($,L)=>n.jsx("circle",{cx:C,cy:M,r:R,fill:"none",stroke:$.color,strokeWidth:N,strokeDasharray:$.dashArray,strokeDashoffset:$.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const A=_>0?Math.round($.value/_*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:$.label,value:`${A}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},L)),h&&o>0&&n.jsx("text",{x:C,y:M+6,textAnchor:"middle",className:Pt.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Pt.statLegend,children:e.map(($,L)=>{const E=_>0?Math.round($.value/_*100):0;return n.jsxs("div",{className:Pt.statItem,children:[n.jsx("span",{className:Pt.statBar,style:{background:k[L]}}),n.jsxs("div",{className:Pt.statText,children:[n.jsxs("span",{className:Pt.statValue,children:[E,d]}),n.jsx("span",{className:Pt.statLabel,children:$.label})]})]},$.label)})}),s&&l==="list"&&n.jsx("div",{className:Pt.listLegend,children:e.map(($,L)=>{const E=_>0?Math.round($.value/_*100):0;return n.jsxs("div",{className:Pt.legendItem,children:[n.jsx("span",{className:Pt.legendDot,style:{background:k[L]}}),n.jsx("span",{className:Pt.legendLabel,children:$.label}),n.jsxs("span",{className:Pt.legendValue,children:[E,d]})]},$.label)})}),y.visible&&n.jsxs("div",{className:Pt.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("div",{className:Pt.tooltipLabel,children:y.label}),n.jsx("div",{className:Pt.tooltipValue,children:y.value})]})]})});Sj.displayName="DonutChart";const $j="_root_bqpf6_5",Mj="_svgWrap_bqpf6_10",Nj="_svg_bqpf6_10",Rj="_axisLabel_bqpf6_19",Lj="_tooltip_bqpf6_25",ha={root:$j,svgWrap:Mj,svg:Nj,axisLabel:Rj,tooltip:Lj};function Aj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Tj=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=Aj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[_,C]=v.useState(540);v.useEffect(()=>{const L=k.current;if(!L)return;const E=new ResizeObserver(D=>{var K;const G=(K=D[0])==null?void 0:K.contentRect.width;G>0&&C(Math.floor(G))});E.observe(L);const A=Math.floor(L.getBoundingClientRect().width);return A>0&&C(A),()=>E.disconnect()},[]);const M=32,N=16,R=_,S=R-M-d,j=Math.max(4,(S-(i.length-1)*d)/i.length),O=o.length*(N+d)+d+24,$=new Map;return e.forEach(L=>$.set(`${L.row}__${L.col}`,L)),n.jsxs("div",{ref:x,className:ie(ha.root,f),...g,children:[n.jsx("div",{ref:k,className:ha.svgWrap,children:n.jsxs("svg",{width:R,height:O,viewBox:`0 0 ${R} ${O}`,className:ha.svg,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:[i.map((L,E)=>{const A=M+d+E*(j+d)+j/2;return n.jsx("text",{x:A,y:12,className:ha.axisLabel,textAnchor:"middle",children:L},L)}),o.map((L,E)=>{const A=24+E*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:M-4,y:A+N/2+4,className:ha.axisLabel,textAnchor:"end",children:L}),i.map((D,G)=>{const K=$.get(`${L}__${D}`),W=(K==null?void 0:K.value)??0,Y=s(W),X=M+d+G*(j+d);return n.jsx("rect",{x:X,y:A,width:j,height:N,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const de=(K==null?void 0:K.label)??`${L} / ${D}: ${Math.round(W*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:de})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},D)})]},L)})]})}),y.visible&&n.jsx("div",{className:ha.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});Tj.displayName="HeatMap";const Ej="_root_18572_6",Ij="_gridWrap_18572_14",Pj="_grid_18572_14",zj="_cell_18572_27",Oj="_legend_18572_33",Dj="_legendSquare_18572_43",Fj="_tooltip_18572_49",Qr={root:Ej,gridWrap:Ij,grid:Pj,cell:zj,legend:Oj,legendSquare:Dj,tooltip:Fj},Bj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Hj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Wj=v.forwardRef(({days:e,levelColors:o=Bj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[_,C]=v.useState({visible:!1,x:0,y:0,content:""}),M=f??Math.max(1,...e.map(j=>j.count)),N=[];for(let j=0;j<e.length;j+=7)N.push(e.slice(j,j+7));const R=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},S=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Qr.root,y),...w,children:[n.jsx("div",{className:Qr.gridWrap,children:n.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${M} on the busiest day`,className:Qr.grid,style:R,onMouseLeave:()=>C(j=>({...j,visible:!1})),children:N.map((j,O)=>Array.from({length:7},($,L)=>{const E=j[L];if(!E)return n.jsx("span",{className:Qr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${O}-${L}`);const A=Hj(E.count,M),D=g?g(E,A):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Qr.cell,style:{width:S,height:i,borderRadius:l,background:o[A]},onMouseMove:G=>C({visible:!0,x:G.clientX,y:G.clientY,content:D}),onMouseLeave:()=>C(G=>({...G,visible:!1}))},`${O}-${L}`)}))})}),h&&n.jsxs("div",{className:Qr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>n.jsx("span",{className:Qr.legendSquare,style:{background:o[j],borderRadius:l}},j)),n.jsx("span",{children:"More"})]}),_.visible&&n.jsx("div",{className:Qr.tooltip,style:{left:_.x,top:_.y},children:_.content})]})});Wj.displayName="ActivityHeatMap";const Uj="_root_14edh_5",qj="_track_14edh_17",Vj="_segment_14edh_28",Gj="_legend_14edh_49",Yj="_legendRow_14edh_58",Kj="_legendDot_14edh_68",Qj="_legendLabel_14edh_74",Zj="_legendValue_14edh_78",Xj="_tooltip_14edh_84",Jj="_tooltipLabel_14edh_100",eS="_tooltipValueRow_14edh_105",tS="_tooltipDot_14edh_114",Pn={root:Uj,track:qj,segment:Vj,legend:Gj,legendRow:Yj,legendDot:Kj,legendLabel:Qj,legendValue:Zj,tooltip:Xj,tooltipLabel:Jj,tooltipValueRow:eS,tooltipDot:tS},nS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],pa={r:140,g:79,b:226},hu={r:68,g:108,b:255};function Wf(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(pa.r+(hu.r-pa.r)*o),s=Math.round(pa.g+(hu.g-pa.g)*o),l=Math.round(pa.b+(hu.b-pa.b)*o);return`rgb(${i}, ${s}, ${l})`}const rS=v.forwardRef(({segments:e,colors:o=nS,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,R)=>N+Math.max(0,R.value),0);let _=0;const C=e.map((N,R)=>{const S=Math.max(0,N.value),j=k>0?S/k*100:0,O=k>0?_/k*100:0;_+=S;const $=k>0?_/k*100:0,L=N.color??o[R%o.length],E=d?!0:N.emphasized??R===0;return{...N,pct:j,startPct:O,endPct:$,color:L,emphasized:E}}),M=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:x,className:ie(Pn.root,f),...g,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Pn.track,style:M,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:C.map(N=>{const R=i?`linear-gradient(to right, ${Wf(N.startPct)}, ${Wf(N.endPct)})`:N.color;return n.jsx("span",{className:Pn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:R,"--ratio-hover-bg":N.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:Pn.legend,children:C.map(N=>n.jsxs("li",{className:Pn.legendRow,children:[n.jsx("span",{className:Pn.legendDot,style:{background:N.color}}),n.jsx("span",{className:Pn.legendLabel,children:N.label}),n.jsx("span",{className:Pn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),y.visible&&n.jsxs("div",{className:Pn.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("span",{className:Pn.tooltipLabel,children:y.label}),n.jsxs("span",{className:Pn.tooltipValueRow,children:[n.jsx("span",{className:Pn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});rS.displayName="RatioBar";const oS="_track_1wmly_6",aS="_fill_1wmly_12",Uf={track:oS,fill:aS},iS=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:g,className:x,style:y,...w},k)=>{const _=d+h,C=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${_}px
    )`,M=Math.max(0,Math.min(o,e)),N=o>0?M/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":M,className:ie(Uf.track,x),style:{height:f,background:`${C}, ${s}`,...y},...w,children:n.jsx("div",{className:Uf.fill,style:{width:`${N}%`,background:`${C}, ${i}`}})})});iS.displayName="StripedBar";const sS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],lS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function qf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}qf(sS),qf(lS);var pt="-ms-",$i="-moz-",ot="-webkit-",a2="comm",ac="rule",Ch="decl",cS="@import",dS="@namespace",i2="@keyframes",uS="@layer",s2=Math.abs,_h=String.fromCharCode,Wu=Object.assign;function hS(e,o){return Rt(e,0)^45?(((o<<2^Rt(e,0))<<2^Rt(e,1))<<2^Rt(e,2))<<2^Rt(e,3):0}function l2(e){return e.trim()}function _r(e,o){return(e=o.exec(e))?e[0]:e}function He(e,o,i){return e.replace(o,i)}function _l(e,o,i){return e.indexOf(o,i)}function Rt(e,o){return e.charCodeAt(o)|0}function Lo(e,o,i){return e.slice(o,i)}function Zn(e){return e.length}function c2(e){return e.length}function Ci(e,o){return o.push(e),e}function pS(e,o){return e.map(o).join("")}function Vf(e,o){return e.filter(function(i){return!_r(i,o)})}var ic=1,Ca=1,d2=0,On=0,St=0,Aa="";function sc(e,o,i,s,l,d,h,f){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:ic,column:Ca,length:h,return:"",siblings:f}}function Zr(e,o){return Wu(sc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function fa(e){for(;e.root;)e=Zr(e.root,{children:[e]});Ci(e,e.siblings)}function fS(){return St}function mS(){return St=On>0?Rt(Aa,--On):0,Ca--,St===10&&(Ca=1,ic--),St}function tr(){return St=On<d2?Rt(Aa,On++):0,Ca++,St===10&&(Ca=1,ic++),St}function eo(){return Rt(Aa,On)}function jl(){return On}function lc(e,o){return Lo(Aa,e,o)}function Ai(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gS(e){return ic=Ca=1,d2=Zn(Aa=e),On=0,[]}function vS(e){return Aa="",e}function pu(e){return l2(lc(On-1,Uu(e===91?e+2:e===40?e+1:e)))}function xS(e){for(;(St=eo())&&St<33;)tr();return Ai(e)>2||Ai(St)>3?"":" "}function yS(e,o){for(;--o&&tr()&&!(St<48||St>102||St>57&&St<65||St>70&&St<97););return lc(e,jl()+(o<6&&eo()==32&&tr()==32))}function Uu(e){for(;tr();)switch(St){case e:return On;case 34:case 39:e!==34&&e!==39&&Uu(St);break;case 40:e===41&&Uu(e);break;case 92:tr();break}return On}function wS(e,o){for(;tr()&&e+St!==57;)if(e+St===84&&eo()===47)break;return"/*"+lc(o,On-1)+"*"+_h(e===47?e:tr())}function bS(e){for(;!Ai(eo());)tr();return lc(e,On)}function kS(e){return vS(Sl("",null,null,null,[""],e=gS(e),0,[0],e))}function Sl(e,o,i,s,l,d,h,f,g){for(var x=0,y=0,w=h,k=0,_=0,C=0,M=1,N=1,R=1,S=0,j="",O=l,$=d,L=s,E=j;N;)switch(C=S,S=tr()){case 40:if(C!=108&&Rt(E,w-1)==58){_l(E+=He(pu(S),"&","&\f"),"&\f",s2(x?f[x-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:E+=pu(S);break;case 9:case 10:case 13:case 32:E+=xS(C);break;case 92:E+=yS(jl()-1,7);continue;case 47:switch(eo()){case 42:case 47:Ci(CS(wS(tr(),jl()),o,i,g),g),(Ai(C||1)==5||Ai(eo()||1)==5)&&Zn(E)&&Lo(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*M:f[x++]=Zn(E)*R;case 125*M:case 59:case 0:switch(S){case 0:case 125:N=0;case 59+y:R==-1&&(E=He(E,/\f/g,"")),_>0&&(Zn(E)-w||M===0&&C===47)&&Ci(_>32?Yf(E+";",s,i,w-1,g):Yf(He(E," ","")+";",s,i,w-2,g),g);break;case 59:E+=";";default:if(Ci(L=Gf(E,o,i,x,y,l,f,j,O=[],$=[],w,d),d),S===123)if(y===0)Sl(E,o,L,L,O,d,w,f,$);else{switch(k){case 99:if(Rt(E,3)===110)break;case 108:if(Rt(E,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Sl(e,L,L,s&&Ci(Gf(e,L,L,0,0,l,f,j,l,O=[],w,$),$),l,$,w,f,s?O:$):Sl(E,L,L,L,[""],$,0,f,$)}}x=y=_=0,M=R=1,j=E="",w=h;break;case 58:w=1+Zn(E),_=C;default:if(M<1){if(S==123)--M;else if(S==125&&M++==0&&mS()==125)continue}switch(E+=_h(S),S*M){case 38:R=y>0?1:(E+="\f",-1);break;case 44:f[x++]=(Zn(E)-1)*R,R=1;break;case 64:eo()===45&&(E+=pu(tr())),k=eo(),y=w=Zn(j=E+=bS(jl())),S++;break;case 45:C===45&&Zn(E)==2&&(M=0)}}return d}function Gf(e,o,i,s,l,d,h,f,g,x,y,w){for(var k=l-1,_=l===0?d:[""],C=c2(_),M=0,N=0,R=0;M<s;++M)for(var S=0,j=Lo(e,k+1,k=s2(N=h[M])),O=e;S<C;++S)(O=l2(N>0?_[S]+" "+j:He(j,/&\f/g,_[S])))&&(g[R++]=O);return sc(e,o,i,l===0?ac:f,g,x,y,w)}function CS(e,o,i,s){return sc(e,o,i,a2,_h(fS()),Lo(e,2,-2),0,s)}function Yf(e,o,i,s,l){return sc(e,o,i,Ch,Lo(e,0,s),Lo(e,s+1,-1),s,l)}function u2(e,o,i){switch(hS(e,o)){case 5103:return ot+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ot+e+e;case 4855:return ot+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return $i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+e+$i+e+pt+e+e;case 5936:switch(Rt(e,o+11)){case 114:return ot+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ot+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ot+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ot+e+pt+e+e;case 6165:return ot+e+pt+"flex-"+e+e;case 5187:return ot+e+He(e,/(\w+).+(:[^]+)/,ot+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return ot+e+pt+"flex-item-"+He(e,/flex-|-self/g,"")+(_r(e,/flex-|baseline/)?"":pt+"grid-row-"+He(e,/flex-|-self/g,""))+e;case 4675:return ot+e+pt+"flex-line-pack"+He(e,/align-content|flex-|-self/g,"")+e;case 5548:return ot+e+pt+He(e,"shrink","negative")+e;case 5292:return ot+e+pt+He(e,"basis","preferred-size")+e;case 6060:return ot+"box-"+He(e,"-grow","")+ot+e+pt+He(e,"grow","positive")+e;case 4554:return ot+He(e,/([^-])(transform)/g,"$1"+ot+"$2")+e;case 6187:return He(He(He(e,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),e,"")+e;case 5495:case 3959:return He(e,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return He(He(e,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+ot+e+e;case 4200:if(!_r(e,/flex-|baseline/))return pt+"grid-column-align"+Lo(e,o)+e;break;case 2592:case 3360:return pt+He(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,_r(s.props,/grid-\w+-end/)})?~_l(e+(i=i[o].value),"span",0)?e:pt+He(e,"-start","")+e+pt+"grid-row-span:"+(~_l(i,"span",0)?_r(i,/\d+/):+_r(i,/\d+/)-+_r(e,/\d+/))+";":pt+He(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return _r(s.props,/grid-\w+-start/)})?e:pt+He(He(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return He(e,/(.+)-inline(.+)/,ot+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zn(e)-1-o>6)switch(Rt(e,o+1)){case 109:if(Rt(e,o+4)!==45)break;case 102:return He(e,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+$i+(Rt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~_l(e,"stretch",0)?u2(He(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return He(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,g,x){return pt+l+":"+d+x+(h?pt+l+"-span:"+(f?g:+g-+d)+x:"")+e});case 4949:if(Rt(e,o+6)===121)return He(e,":",":"+ot)+e;break;case 6444:switch(Rt(e,Rt(e,14)===45?18:11)){case 120:return He(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(Rt(e,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+pt+"$2box$3")+e;case 100:return He(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return He(e,"scroll-","scroll-snap-")+e}return e}function zl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function _S(e,o,i,s){switch(e.type){case uS:if(e.children.length)break;case cS:case dS:case Ch:return e.return=e.return||e.value;case a2:return"";case i2:return e.return=e.value+"{"+zl(e.children,s)+"}";case ac:if(!Zn(e.value=e.props.join(",")))return""}return Zn(i=zl(e.children,s))?e.return=e.value+"{"+i+"}":""}function jS(e){var o=c2(e);return function(i,s,l,d){for(var h="",f=0;f<o;f++)h+=e[f](i,s,l,d)||"";return h}}function SS(e){return function(o){o.root||(o=o.return)&&e(o)}}function $S(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case Ch:e.return=u2(e.value,e.length,i);return;case i2:return zl([Zr(e,{value:He(e.value,"@","@"+ot)})],s);case ac:if(e.length)return pS(i=e.props,function(l){switch(_r(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fa(Zr(e,{props:[He(l,/:(read-\w+)/,":"+$i+"$1")]})),fa(Zr(e,{props:[l]})),Wu(e,{props:Vf(i,s)});break;case"::placeholder":fa(Zr(e,{props:[He(l,/:(plac\w+)/,":"+ot+"input-$1")]})),fa(Zr(e,{props:[He(l,/:(plac\w+)/,":"+$i+"$1")]})),fa(Zr(e,{props:[He(l,/:(plac\w+)/,pt+"input-$1")]})),fa(Zr(e,{props:[l]})),Wu(e,{props:Vf(i,s)});break}return""})}}var xa={},fu,mu;const _a=typeof process<"u"&&xa!==void 0&&(xa.REACT_APP_SC_ATTR||xa.SC_ATTR)||"data-styled",h2="active",p2="data-styled-version",cc="6.4.2",jh=`/*!sc*/
`,Mi=typeof window<"u"&&typeof document<"u";function Kf(e){if(typeof process<"u"&&xa!==void 0){const o=xa[e];if(o!==void 0&&o!=="")return o!=="false"}}const MS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(mu=(fu=Kf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&fu!==void 0?fu:Kf("SC_DISABLE_SPEEDY"))!==null&&mu!==void 0?mu:typeof process<"u"&&xa!==void 0&&!1),f2="sc-keyframes-",NS={};function Bi(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let $l=new Map,Ol=new Map,Ml=1;const _i=e=>{if($l.has(e))return $l.get(e);for(;Ol.has(Ml);)Ml++;const o=Ml++;return $l.set(e,o),Ol.set(o,e),o},RS=e=>Ol.get(e),LS=(e,o)=>{Ml=o+1,$l.set(e,o),Ol.set(o,e)},Sh=Object.freeze([]),ja=Object.freeze({});function m2(e,o,i=ja){return e.theme!==i.theme&&e.theme||o||i.theme}const AS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TS=/(^-|-$)/g;function g2(e){return e.replace(AS,"-").replace(TS,"")}const ES=/(a)(d)/gi,Qf=e=>String.fromCharCode(e+(e>25?39:97));function $h(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Qf(o%52)+i;return(Qf(o%52)+i).replace(ES,"$1-$2")}const qu=5381,Ro=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},v2=e=>Ro(qu,e);function Mh(e){return $h(v2(e)>>>0)}function IS(e){return e.displayName||e.name||"Component"}function Vu(e){return typeof e=="string"&&!0}function PS(e){return Vu(e)?`styled.${e}`:`Styled(${IS(e)})`}const x2=Symbol.for("react.memo"),zS=Symbol.for("react.forward_ref"),OS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},DS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FS={[zS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[x2]:y2};function Zf(e){return("type"in(o=e)&&o.type.$$typeof)===x2?y2:"$$typeof"in e?FS[e.$$typeof]:OS;var o}const BS=Object.defineProperty,HS=Object.getOwnPropertyNames,WS=Object.getOwnPropertySymbols,US=Object.getOwnPropertyDescriptor,qS=Object.getPrototypeOf,VS=Object.prototype;function w2(e,o,i){if(typeof o!="string"){const s=qS(o);s&&s!==VS&&w2(e,s,i);const l=HS(o).concat(WS(o)),d=Zf(e),h=Zf(o);for(let f=0;f<l.length;++f){const g=l[f];if(!(g in DS||i&&i[g]||h&&g in h||d&&g in d)){const x=US(o,g);try{BS(e,g,x)}catch{}}}}return e}function Hi(e){return typeof e=="function"}const GS=Symbol.for("react.forward_ref");function Nh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===GS&&"styledComponentId"in e}function ji(e,o){return e&&o?e+" "+o:e||o||""}function Dl(e,o){return e.join("")}function Ti(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gu(e,o,i=!1){if(!i&&!Ti(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Gu(e[s],o[s]);else if(Ti(o))for(const s in o)e[s]=Gu(e[s],o[s]);return e}function Rh(e,o){Object.defineProperty(e,"toString",{value:o})}const YS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Bi(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+jh;return o}},KS=`style[${_a}][${p2}="${cc}"]`,QS=new RegExp(`^${_a}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Xf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Yu=e=>{if(!e)return document;if(Xf(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Xf(o))return o}return document},ZS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},XS=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(jh),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const g=f.match(QS);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(LS(y,x),ZS(e,y,g[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(f)}},gu=e=>{const o=Yu(e.options.target).querySelectorAll(KS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(_a)!==h2&&(XS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let xi=!1;function JS(){if(xi!==!1)return xi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return xi=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return xi=o.getAttribute("content")||void 0}return xi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const b2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${_a}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(_a,h2),l.setAttribute(p2,cc);const f=o||JS();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},e$=class{constructor(e,o){this.element=b2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw Bi(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},t$=class{constructor(e,o){this.element=b2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Jf=Mi;const n$={isServer:!Mi,useCSSOMInjection:!MS};class Wi{static registerId(o){return _i(o)}constructor(o=ja,i={},s){this.options=Object.assign(Object.assign({},n$),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Mi&&Jf&&(Jf=!1,gu(this)),Rh(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let g=0;g<h;g++){const x=RS(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=_a+".g"+g+'[id="'+x+'"]';let _="";for(const C of y)C.length>0&&(_+=C+",");f+=w+k+'{content:"'+_+'"}'+jh}return f})(this))}rehydrate(){!this.server&&Mi&&gu(this)}reconstructWithOptions(o,i=!0){const s=new Wi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Mi&&o.target!==this.options.target&&Yu(this.options.target)!==Yu(o.target)&&gu(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new e$(s,l):new t$(s,l))(this.options),new YS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){_i(o),o.startsWith(f2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(_i(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(_i(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const k2=new WeakSet,r$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function o$(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in r$||e.startsWith("--")?String(o).trim():o+"px"}const $o=47;function em(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const C2=Symbol.for("sc-keyframes");function a$(e){return typeof e=="object"&&e!==null&&C2 in e}function _2(e){return Hi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const j2=e=>e==null||e===!1||e==="",i$=Symbol.for("react.client.reference");function tm(e){return e.$$typeof===i$}function S2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!j2(s)&&(Array.isArray(s)&&k2.has(s)||Hi(s)?o.push(em(i)+":",s,";"):Ti(s)?(o.push(i+" {"),S2(s,o),o.push("}")):o.push(em(i)+": "+o$(i,s)+";"))}}function ro(e,o,i,s,l=[]){if(j2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(tm(e))return l;if(_2(e)&&o){const h=e(o);return ro(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)ro(e[h],o,i,s,l);return l}return Nh(e)?(l.push(`.${e.styledComponentId}`),l):a$(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):tm(e)?l:Ti(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(S2(e,l),l):(l.push(e.toString()),l)}const s$=v2(cc);class l${constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=Ro(s$,i),this.baseStyle=s,Wi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(_2(f)){const g=f(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=Dl(ro(g,o,i,s)))}else d+=Dl(ro(f,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=$h(Ro(Ro(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const g=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,g)}l=ji(l,f)}}return l}}const c$=/&/g;function $2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function vu(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let g=0;g<o;g++){const x=e.charCodeAt(g);if(d!==0||h||x!==$o||e.charCodeAt(g+1)!==42)if(h)x===42&&e.charCodeAt(g+1)===$o&&(h=!1,g++);else if(x!==34&&x!==39||$2(e,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){f=!0;let y=g+1;for(;y<o;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<o&&e.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return f||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function M2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let g=0;g<h.length;g++)f[g]=i+h[g];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&M2(d.children,o)}return e}function d$({options:e=ja,plugins:o=Sh}=ja){let i,s,l;const d=(k,_,C)=>C.startsWith(s)&&C.endsWith(s)&&C.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===ac&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(c$,s).replace(l,d))}),e.prefix&&h.push($S),h.push(_S);let f=[];const g=jS(h.concat(SS(k=>f.push(k)))),x=(k,_="",C="",M="&")=>{i=M,s=_,l=void 0;const N=(function(S){const j=S.indexOf("//")!==-1,O=S.indexOf("}")!==-1;if(!j&&!O)return S;if(!j)return vu(S);const $=S.length;let L="",E=0,A=0,D=0,G=0,K=0,W=!1;for(;A<$;){const Y=S.charCodeAt(A);if(Y!==34&&Y!==39||$2(S,A))if(D===0)if(Y===$o&&A+1<$&&S.charCodeAt(A+1)===42){for(A+=2;A+1<$&&(S.charCodeAt(A)!==42||S.charCodeAt(A+1)!==$o);)A++;A+=2}else if(Y!==40)if(Y!==41)if(G>0)A++;else if(Y===42&&A+1<$&&S.charCodeAt(A+1)===$o)L+=S.substring(E,A),A+=2,E=A,W=!0;else if(Y===$o&&A+1<$&&S.charCodeAt(A+1)===$o){for(L+=S.substring(E,A);A<$&&S.charCodeAt(A)!==10;)A++;E=A,W=!0}else Y===123?K++:Y===125&&K--,A++;else G>0&&G--,A++;else G++,A++;else A++;else D===0?D=Y:D===Y&&(D=0),A++}return W?(E<$&&(L+=S.substring(E)),K===0?L:vu(L)):K===0?S:vu(S)})(k);let R=kS(C||_?C+" "+_+" { "+N+" }":N);return e.namespace&&(R=M2(R,e.namespace)),f=[],zl(R,g),f},y=e;let w=qu;for(let k=0;k<o.length;k++)o[k].name||Bi(15),w=Ro(w,o[k].name);return y!=null&&y.namespace&&(w=Ro(w,y.namespace)),y!=null&&y.prefix&&(w=Ro(w,"p")),x.hash=w!==qu?w.toString():"",x}const u$=new Wi,Ku=d$(),N2=dn.createContext({shouldForwardProp:void 0,styleSheet:u$,stylis:Ku,stylisPlugins:void 0});N2.Consumer;function R2(){return dn.useContext(N2)}const Lh=dn.createContext(void 0);Lh.Consumer;const nm=Object.prototype.hasOwnProperty,xu={};function h$(e,o){const i=typeof e!="string"?"sc":g2(e);xu[i]=(xu[i]||0)+1;const s=i+"-"+Mh(cc+i+xu[i]);return o?o+"-"+s:s}function p$(e,o,i){const s=Nh(e),l=e,d=!Vu(e),{attrs:h=Sh,componentId:f=h$(o.displayName,o.parentComponentId),displayName:g=PS(e)}=o,x=o.displayName&&o.componentId?g2(o.displayName)+"-"+o.componentId:o.componentId||f,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const M=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;w=(R,S)=>M(R,S)&&N(R,S)}else w=M}const k=new l$(i,x,s?l.componentStyle:void 0);function _(M,N){return(function(R,S,j){const{attrs:O,componentStyle:$,defaultProps:L,foldedComponentIds:E,styledComponentId:A,target:D}=R,G=dn.useContext(Lh),K=R2(),W=R.shouldForwardProp||K.shouldForwardProp,Y=m2(S,G,L)||ja;let X,ae;{const F=dn.useRef(null),q=F.current;if(q!==null&&q[1]===Y&&q[2]===K.styleSheet&&q[3]===K.stylis&&q[7]===$&&(function(T,z,J){const U=T,ee=z;let le=0;for(const B in ee)if(nm.call(ee,B)&&(le++,U[B]!==ee[B]))return!1;return le===J})(q[0],S,q[4]))X=q[5],ae=q[6];else{X=(function(z,J,U){const ee=Object.assign(Object.assign({},J),{className:void 0,theme:U}),le=z.length>1;for(let B=0;B<z.length;B++){const P=z[B],oe=Hi(P)?P(le?Object.assign({},ee):ee):P;for(const fe in oe)fe==="className"?ee.className=ji(ee.className,oe[fe]):fe==="style"?ee.style=Object.assign(Object.assign({},ee.style),oe[fe]):fe in J&&J[fe]===void 0||(ee[fe]=oe[fe])}return"className"in J&&typeof J.className=="string"&&(ee.className=ji(ee.className,J.className)),ee})(O,S,Y),ae=(function(z,J,U,ee){return z.generateAndInjectStyles(J,U,ee)})($,X,K.styleSheet,K.stylis);let T=0;for(const z in S)nm.call(S,z)&&T++;F.current=[S,Y,K.styleSheet,K.stylis,T,X,ae,$]}}const de=X.as||D,se=(function(F,q,T,z){const J={};for(const U in F)F[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&F.theme===T||(U==="forwardedAs"?J.as=F.forwardedAs:z&&!z(U,q)||(J[U]=F[U]));return J})(X,de,Y,W);let Q=ji(E,A);return ae&&(Q+=" "+ae),X.className&&(Q+=" "+X.className),se[Vu(de)&&de.includes("-")?"class":"className"]=Q,j&&(se.ref=j),v.createElement(de,se)})(C,M,N)}_.displayName=g;let C=dn.forwardRef(_);return C.attrs=y,C.componentStyle=k,C.displayName=g,C.shouldForwardProp=w,C.foldedComponentIds=s?ji(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=x,C.target=s?l.target:e,Object.defineProperty(C,"defaultProps",{get(){return this._foldedDefaultProps},set(M){this._foldedDefaultProps=s?(function(N,...R){for(const S of R)Gu(N,S,!0);return N})({},l.defaultProps,M):M}}),Rh(C,()=>`.${C.styledComponentId}`),d&&w2(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}var f$=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rm(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const om=e=>(k2.add(e),e);function Ee(e,...o){if(Hi(e)||Ti(e))return om(ro(rm(Sh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?ro(i):om(ro(rm(i,o)))}function Qu(e,o,i=ja){if(!o)throw Bi(1,o);const s=(l,...d)=>e(o,i,Ee(l,...d));return s.attrs=l=>Qu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Qu(e,o,Object.assign(Object.assign({},i),l)),s}const L2=e=>Qu(p$,e),p=L2;f$.forEach(e=>{p[e]=L2(e)});class m${constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Hi(d)&&!Nh(d))return!1}return!0})(o),Wi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const f=this.computeRules(o,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const f=h.rules,g=this.instanceRules.get(o).rules;if(f.length===g.length){let x=!0;for(let y=0;y<f.length;y++)if(f[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Dl(ro(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function A2(e,...o){const i=Ee(e,...o),s=`sc-global-${Mh(JSON.stringify(i))}`,l=new m$(i,s),d=f=>{const g=R2(),x=dn.useContext(Lh);let y;{const w=dn.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,f,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,f,g.styleSheet,x,g.stylis,l],k=dn.useRef(l);dn.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,f,g.styleSheet,x,g.stylis))},w),dn.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(f,g,x,y,w){if(l.isStatic)l.renderStyles(f,NS,x,w);else{const k=Object.assign(Object.assign({},g),{theme:m2(g,y,d.defaultProps)});l.renderStyles(f,k,x,w)}}return dn.memo(d)}var T2;class g${constructor(o,i){this[T2]=!0,this.inject=(s,l=Ku)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=f2+o,this.rules=i,_i(this.id),Rh(this,()=>{throw Bi(12,String(this.name))})}getName(o=Ku){return o.hash?this.name+$h(+o.hash>>>0):this.name}}function we(e,...o){const i=Dl(Ee(e,...o)),s=Mh(i);return new g$(s,i)}T2=C2;const E2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],v$=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function x$(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function y$(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%E2.length}function w$(e){const o=x$(e);let i=-1,s=0;return v$.forEach((l,d)=>{const h=l.reduce((f,g)=>o.includes(g)?f+1:f,0);h>s&&(s=h,i=d)}),E2[i>=0?i:y$(o)]}const Lt=(e,o,i)=>Math.max(o,Math.min(i,e)),jr=e=>(e=Lt(e,0,1),e*e*(3-2*e)),oo=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function sn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Zu(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function dl(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Zu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Zu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function b$(){const[e,o]=v.useState(0);return v.useEffect(()=>{var d;const i=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",i);const l=new MutationObserver(i);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",i),l.disconnect()}},[]),e}function k$(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function C$(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const jo=["234,54,38","246,112,44","252,172,54","255,212,76"],_$="176,58,32",j$="198,158,52";function Xn(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function Cr(e,o,i){if(!(e!=null&&e.length))return i;if(e.length===1)return e[0];const s=Lt(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return Xn(e[l],e[d],s-l)}function ao(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),y=e.size<24,w=Lt(e.alert??0,0,1),k=(S,j)=>S+(j-S)*w,_=.85+.15*Math.sin(o*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,x*3);S.addColorStop(0,"rgba("+Cr(e.corePalette,.42,i.core)+",0.55)"),S.addColorStop(1,"rgba("+Cr(e.corePalette,.86,i.accent)+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const S=x*k(3.2,3),j=s.createRadialGradient(h,f,0,h,f,S);j.addColorStop(0,"rgba("+Xn(Cr(e.corePalette,.35,i.core),jo[1],w)+","+k(.34,.85*_)+")"),j.addColorStop(.5,"rgba("+Xn(Cr(e.corePalette,.68,i.core),jo[2],w)+","+k(.13,.42*_)+")"),j.addColorStop(1,"rgba("+Xn(Cr(e.corePalette,1,i.core),jo[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const C=i.glow?1:.95,M=Math.max(.8,x*k(1,1.5)),N=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const R=s.createRadialGradient(h-N,f-N,0,h,f,M);R.addColorStop(0,"rgba("+Xn(Cr(e.corePalette,.08,i.core),jo[0],w)+","+k(C,1)+")"),R.addColorStop(.5,"rgba("+Xn(Cr(e.corePalette,.42,i.core),jo[1],w)+","+k(C,1)+")"),R.addColorStop(.82,"rgba("+Xn(Cr(e.corePalette,.72,i.core),jo[2],w)+","+k(C,.97)+")"),R.addColorStop(1,"rgba("+Xn(Cr(e.corePalette,1,i.core),jo[3],w)+","+k(C,.72)+")"),s.fillStyle=R,s.beginPath(),s.arc(h,f,M,0,6.2832),s.fill(),s.restore()}function I2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=o*(x?.5:.16),k=.42,_=Math.cos(k),C=Math.sin(k),M=Math.cos(w),N=Math.sin(w),R=g*.96,S=(D,G,K)=>{const W=D*M+K*N,Y=-D*N+K*M,X=G,ae=X*_-Y*C,se=(X*C+Y*_+1)/2,Q=.82+.18*se;return{x:h+W*R*Q,y:f+ae*R*Q,d:se}},j=(D,G,K)=>{const W=Math.cos(D),Y=Math.sin(D)*Math.cos(G),X=Math.sin(D)*Math.sin(G);return[W*Math.cos(K)+X*Math.sin(K),Y,-W*Math.sin(K)+X*Math.cos(K)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const O=e.size>=24?64:40,$=x?.9:.3,L=O,E=5.6,A=[];for(let D=0;D<y.length;D++){const G=y[D][0],K=y[D][1],W=ae=>{const de=j(ae,G,K);return S(de[0],de[1],de[2])},Y=D%2?1:-1,X=D*2+Y*o*$;A.push({ptOf:W,head:X,dir:Y,hp:W(X)})}A.sort((D,G)=>D.hp.d-G.hp.d);for(const D of A){const G=Math.max(1.2,g*.05)*(.75+.35*D.hp.d),K=.66*(.45+.55*D.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let W=D.ptOf(D.head);for(let ae=1;ae<=L;ae++){const de=ae/L,se=1-de,Q=K*se*se,F=D.ptOf(D.head-D.dir*de*E);Q>.004&&(s.strokeStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.moveTo(W.x,W.y),s.lineTo(F.x,F.y),s.stroke()),W=F}s.restore();const Y=Math.max(.9,g*.062*oo(e.size)*(.65+.5*D.hp.d)),X=.45+.55*D.hp.d;if(i.glow){const ae=s.createRadialGradient(D.hp.x,D.hp.y,0,D.hp.x,D.hp.y,Y*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*X+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(D.hp.x,D.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,X+.1)+")",s.beginPath(),s.arc(D.hp.x,D.hp.y,Y,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function S$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[g*.92],w=y.length,k=1,_=x?.9:.3,C=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let M=0;M<w;M++){const N=y[M],R=M%2?1:-1,S=6.2832/k,j=Math.min(5.6,S*.92);for(let O=0;O<k;O++){const $=M*2+R*o*_+O*S,L=h+Math.cos($)*N,E=f+Math.sin($)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let A=L,D=E;for(let K=1;K<=C;K++){const W=K/C,Y=.62*(1-W)*(1-W),X=$-R*W*j,ae=h+Math.cos(X)*N,de=f+Math.sin(X)*N;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(A,D),s.lineTo(ae,de),s.stroke()),A=ae,D=de}s.restore();const G=Math.max(.9,g*.062*oo(e.size));if(i.glow){const K=s.createRadialGradient(L,E,0,L,E,G*4.5);K.addColorStop(0,"rgba("+i.accent+",0.3)"),K.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=K,s.beginPath(),s.arc(L,E,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(L,E,G,0,6.2832),s.fill()}}ao(e,o,i),s.restore()}function am(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=Lt(e.alert??0,0,1),k=x*.82,_=(F,q)=>Xn(i.dot,Xn(_$,j$,Lt(Math.hypot(F-f,q-g)/k,0,1)),w),C=e.size>=120,M=C?22:e.size>=32?10:e.size>=20?7:5,N=y?o*.55:o*.22,R=Math.cos(N),S=Math.sin(N),j=.42,O=Math.cos(j),$=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",C&&i.glow){const F=s.createRadialGradient(f,g,0,f,g,x*1.02);F.addColorStop(0,"rgba("+i.accent+",0.10)"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=F,s.beginPath(),s.arc(f,g,x*1.02,0,6.2832),s.fill()}const L=[];for(let F=0;F<M;F++){const q=1-(F+.5)/M*2,T=Math.sqrt(Math.max(0,1-q*q)),z=F*2.39996,J=Math.cos(z)*T,U=q,ee=Math.sin(z)*T,le=J*R+ee*S,B=-J*S+ee*R,P=U*O-B*$,oe=U*$+B*O,fe=(oe+1)/2,ce=.82+.18*fe;L.push({x:f+le*k*ce,y:g+P*k*ce,d:fe,k:F,vec:[le,P,oe]})}L.sort((F,q)=>F.d-q.d);const E=F=>{const q=(F[2]+1)/2,T=.82+.18*q;return{x:f+F[0]*k*T,y:g+F[1]*k*T,d:q}},A=(F,q,T)=>{let z=F[0]*q[0]+F[1]*q[1]+F[2]*q[2];z=Lt(z,-1,1);const J=Math.acos(z);if(J<.001)return[F[0],F[1],F[2]];const U=Math.sin(J),ee=Math.sin((1-T)*J)/U,le=Math.sin(T*J)/U;return[F[0]*ee+q[0]*le,F[1]*ee+q[1]*le,F[2]*ee+q[2]*le]},D={};for(const F of L)D[F.k]=F;const K=o*(y?1.4:.5),W=Math.floor(K),Y=K-W,X=5,ae=12;s.lineCap="round",s.lineJoin="round";const de=[1.7,9.3,21.5,34.8,48.2],se=Lt(Math.round(e.streamCount??(C?5:4)),0,de.length),Q=de.slice(0,se).map(F=>({seed:F}));for(const F of Q){const q=z=>{const J=Math.sin(z*12.9898+F.seed)*43758.5453;return Math.floor((J-Math.floor(J))*M)},T=z=>{let J=q(z);return J===q(z-1)&&(J=(J+1)%M),D[J]};for(let z=X-1;z>=0;z--){const J=W-z;if(J<0)continue;const U=T(J),ee=T(J+1);if(!U||!ee||U===ee)continue;const le=z===0?Y:1,B=E(A(U.vec,ee.vec,le)),P=(U.d+B.d)/2,oe=z===0?1:Lt(1-(z-1+Y)/(X-1),0,1),fe=(i.glow?.6:.72)*oe*(.4+.6*P);if(fe<.02)continue;const ce=s.createLinearGradient(U.x,U.y,B.x,B.y);ce.addColorStop(0,"rgba("+_(U.x,U.y)+",0)"),ce.addColorStop(1,"rgba("+_(B.x,B.y)+","+fe+")"),s.strokeStyle=ce,s.lineWidth=(C?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*P),s.beginPath();for(let ve=0;ve<=ae;ve++){const Ce=E(A(U.vec,ee.vec,le*(ve/ae)));ve===0?s.moveTo(Ce.x,Ce.y):s.lineTo(Ce.x,Ce.y)}s.stroke()}}for(const F of L){const q=.5+.5*Math.sin(o*2-F.k*.9),T=(.18+.82*F.d)*(.62+.38*q),z=C?Math.max(.5,(.9+.9*F.d)*h*(.85+.15*q)):x*.058*oo(e.size)*(.6+.5*F.d);if(i.glow){const J=z*4,U=s.createRadialGradient(F.x,F.y,0,F.x,F.y,J);U.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(F.x,F.y,J,0,6.2832),s.fill()}s.fillStyle="rgba("+_(F.x,F.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(F.x,F.y,Math.max(.9,z),0,6.2832),s.fill()}C&&Ah(e,o,i,_),ao(e,o,i),s.restore()}function Ah(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let _=0;_<46;_++){const C=sn(_*5.1)<.5?-1:1,M=sn(_*1.7)*6.2832+o*(.3+sn(_*3.1)*.6)*C*k,N=y*(.04+.05*sn(_*4.7))*Math.sin(o*(.8+sn(_*6)*1)+sn(_*7)*6.28),R=y*(.5+sn(_*2.3)*.5)+N,S=g+Math.cos(M)*R,j=x+Math.sin(M)*R,O=.3+.7*(.5+.5*Math.sin(o*(1.4+sn(_)*2)+sn(_*2)*6.28)),$=Math.max(.5,(.4+sn(_*8)*1)*f*(.55+.6*O));if(i.glow){const L=$*6,E=l.createRadialGradient(S,j,0,S,j,L);E.addColorStop(0,"rgba("+i.accent+","+O*.18+")"),E.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(S,j,L,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,j)+","+O*(i.glow?.8:.42)+")",l.beginPath(),l.arc(S,j,$,0,6.2832),l.fill()}}function $$(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,_=x*.12,C=jr(.5+.5*Math.sin(o*(y?1:.55))),M=y?.34+.66*C:.5+.12*C,N=Math.max(1*h,x*.052),R=-o*(y?.5:.16),S=Math.cos(R),j=Math.sin(R),O=.42,$=Math.cos(O),L=Math.sin(O);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=x*(.52+.44*M),A=Math.max(k+N,E-_),D=[];for(let G=0;G<w;G++){const K=1-(G+.5)/w*2,W=Math.sqrt(Math.max(0,1-K*K)),Y=G*2.39996,X=Math.cos(Y)*W,ae=K,de=Math.sin(Y)*W,se=X*S+de*j,Q=-X*j+de*S,F=ae*$-Q*L,T=(ae*L+Q*$+1)/2,z=.82+.18*T,J=.5+.5*Math.sin(o*1.6+G*1.3);D.push({x0:f+se*k*z,y0:g+F*k*z,x1:f+se*A*z,y1:g+F*A*z,cx2:f+se*E*z,cy2:g+F*E*z,d:T,shim:J})}D.sort((G,K)=>G.d-K.d);for(const G of D){const K=(y?.4+.45*M:.6)*(.4+.6*G.d)*(.78+.22*G.shim),W=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);W.addColorStop(0,"rgba("+i.dot+","+K+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=W,s.lineWidth=N*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*oo(e.size)*(.85+.3*M)*(.6+.5*G.d));if(i.glow){const X=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);X.addColorStop(0,"rgba("+i.accent+","+.26*K+")"),X.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=X,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,K+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&Ah(e,o,i,()=>i.dot),ao(e,o,i),s.restore()}function M$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=x?o*.5:o*.2,_=Math.cos(k),C=Math.sin(k),M=.42,N=Math.cos(M),R=Math.sin(M),S=x?1:.4,j=(W,Y)=>[Math.sin(W)*Math.cos(Y),Math.cos(W),Math.sin(W)*Math.sin(Y)],O=[j(1.4+.5*Math.sin(o*.5*S),o*.6*S),j(1.9+.4*Math.cos(o*.4*S),-o*.5*S+2)],$=.36,L=e.cellCount==null?y:Lt(Math.round(e.cellCount),0,y);let E=null,A=null;(L<y||e.cellBirths)&&(A=Array.from({length:y},(W,Y)=>Y).sort((W,Y)=>sn(W)-sn(Y)),E=new Array(y),A.forEach((W,Y)=>{E[W]=Y}));const D=.7,G=.16;if(A&&e.cellBirths&&e.emergeNow!=null){let W=0;for(let Y=0;Y<L;Y++){const X=A[Y];e.cellBirths.has(X)||e.cellBirths.set(X,e.emergeNow+W++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const K=[];for(let W=0;W<y;W++){let Y=1;if(E){if(E[W]>=L)continue;if(e.cellBirths){const P=e.cellBirths.get(W);if(P==null||(Y=jr(((e.emergeNow??P+D)-P)/D),Y<=.001))continue}}const X=1-(W+.5)/y*2,ae=Math.sqrt(Math.max(0,1-X*X)),de=W*2.39996,se=Math.cos(de)*ae*Y,Q=X*Y,F=Math.sin(de)*ae*Y;let q=0;for(const P of O){const oe=se-P[0],fe=Q-P[1],ce=F-P[2];q+=Math.exp(-(oe*oe+fe*fe+ce*ce)/(2*$*$))}q=Lt(q,0,1);const T=se*_+F*C,z=-se*C+F*_,J=Q*N-z*R,ee=(Q*R+z*N+1)/2,le=.82+.18*ee;let B=i.dot;if(e.dotPalette&&e.dotPalette.length){const oe=(de/6.2832+(X+1)*.07+1)%1*e.dotPalette.length,fe=Math.floor(oe)%e.dotPalette.length,ce=(fe+1)%e.dotPalette.length;B=Xn(e.dotPalette[fe],e.dotPalette[ce],oe-Math.floor(oe))}K.push({x:h+T*w*le,y:f+J*w*le,d:ee,inf:q,g:Y,color:B})}K.sort((W,Y)=>W.d-Y.d);for(const W of K){const Y=jr(W.inf),X=Math.max(.6,g*(.05+.06*Y)*oo(e.size)*(.55+.5*W.d))*(.35+.65*W.g),ae=(.16+.84*W.d)*(.45+.55*Y)*W.g,de=1-(1-Math.abs(2*W.d-1))*W.g,se=Math.atan2(W.y-f,W.x-h);s.fillStyle="rgba("+W.color+","+ae+")",s.beginPath(),s.ellipse(W.x,W.y,Math.max(.35,X*de),X,se,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function N$(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,w=e.state!=="idle",k=jr(Lt(s/.55,0,1)),_=jr(Lt((s-.3)/.4,0,1)),C=jr(Lt((s-.5)/.5,0,1)),M=e.size>=32?11:7,N=y*.12,R=y*.12,S=jr(.5+.5*Math.sin(o*(w?1:.55))),j=w?.34+.66*S:.5+.12*S,O=Math.max(1*f,y*.052),$=-o*(w?.5:.16),L=Math.cos($),E=Math.sin($),A=.42,D=Math.cos(A),G=Math.sin(A),K=y*(.52+.44*j),W=Math.max(N+O,K-R),Y=[];for(let B=0;B<M;B++){const P=1-(B+.5)/M*2,oe=Math.sqrt(Math.max(0,1-P*P)),fe=B*2.39996,ce=Math.cos(fe)*oe,ve=P,Ce=Math.sin(fe)*oe,_e=ce*L+Ce*E,Me=-ce*E+Ce*L,Oe=ve*D-Me*G,De=(ve*G+Me*D+1)/2,Pe=.82+.18*De,Be=.5+.5*Math.sin(o*1.6+B*1.3);Y.push({x0:g+_e*N*Pe,y0:x+Oe*N*Pe,x1:g+_e*W*Pe,y1:x+Oe*W*Pe,cx2:g+_e*K*Pe,cy2:x+Oe*K*Pe,d:De,shim:Be,ux:ce,uy:ve,uz:Ce})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const X=[...Y].sort((B,P)=>B.d-P.d);for(const B of X){const P=(w?.4+.45*j:.6)*(.4+.6*B.d)*(.78+.22*B.shim);if(C>.001){const oe=B.x0+(B.x1-B.x0)*C,fe=B.y0+(B.y1-B.y0)*C,ce=l.createLinearGradient(B.x0,B.y0,B.x1,B.y1);ce.addColorStop(0,"rgba("+i.dot+","+P*C+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ce,l.lineWidth=O*(.7+.5*B.d),l.beginPath(),l.moveTo(B.x0,B.y0),l.lineTo(oe,fe),l.stroke()}if(_>.001){const oe=Math.max(.9,y*.058*oo(e.size)*(.85+.3*j)*(.6+.5*B.d));if(i.glow){const fe=l.createRadialGradient(B.cx2,B.cy2,0,B.cx2,B.cy2,oe*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*P*_+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(B.cx2,B.cy2,oe*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,P+.1)*_+")",l.beginPath(),l.arc(B.cx2,B.cy2,oe*(.6+.4*_),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,de=y*.78,se=w?o*.5:o*.2,Q=Math.cos(se),F=Math.sin(se),q=w?1:.4,T=(B,P)=>[Math.sin(B)*Math.cos(P),Math.cos(B),Math.sin(B)*Math.sin(P)],z=[T(1.4+.5*Math.sin(o*.5*q),o*.6*q),T(1.9+.4*Math.cos(o*.4*q),-o*.5*q+2)],J=.36,U=e.cellCount==null?ae:Lt(Math.round(e.cellCount),0,ae);let ee=null;if(U<ae){const B=Array.from({length:ae},(P,oe)=>oe).sort((P,oe)=>sn(P)-sn(oe));ee=new Array(ae),B.forEach((P,oe)=>{ee[P]=oe})}const le=1-_;if(le>.001||k<1){const B=[];for(let P=0;P<ae;P++){if(ee&&ee[P]>=U)continue;const oe=1-(P+.5)/ae*2,fe=Math.sqrt(Math.max(0,1-oe*oe)),ce=P*2.39996,ve=Math.cos(ce)*fe,Ce=oe,_e=Math.sin(ce)*fe;let Me=0,Oe=-2;for(let We=0;We<M;We++){const kt=ve*Y[We].ux+Ce*Y[We].uy+_e*Y[We].uz;kt>Oe&&(Oe=kt,Me=We)}const Ge=Y[Me];let De=0;for(const We of z){const kt=ve-We[0],nt=Ce-We[1],jn=_e-We[2];De+=Math.exp(-(kt*kt+nt*nt+jn*jn)/(2*J*J))}De=Lt(De,0,1);const Pe=ve*Q+_e*F,Be=-ve*F+_e*Q,Je=Ce*D-Be*G,me=(Ce*G+Be*D+1)/2,Le=.82+.18*me,Ye=g+Pe*de*Le,et=x+Je*de*Le;B.push({x:Ye+(Ge.cx2-Ye)*k,y:et+(Ge.cy2-et)*k,d:me+(Ge.d-me)*k,inf:De,f:(1-(1-Math.abs(2*me-1)))*(1-k)+1*k})}B.sort((P,oe)=>P.d-oe.d);for(const P of B){const oe=jr(P.inf),fe=Math.max(.6,y*(.05+.06*oe)*oo(e.size)*(.55+.5*P.d)),ce=(.16+.84*P.d)*(.45+.55*oe)*le;if(ce<=.003)continue;const ve=Math.atan2(P.y-x,P.x-g);l.fillStyle="rgba("+i.dot+","+ce+")",l.beginPath(),l.ellipse(P.x,P.y,Math.max(.35,fe*P.f),fe,ve,0,6.2832),l.fill()}}e.size>=120&&C>.001&&(l.globalAlpha=C,Ah(e,o,i,()=>i.dot),l.globalAlpha=1),ao(e,o,i),l.restore()}function R$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=x?1:.4,_=o*(x?.3:.12),C=o*1*k,M=-o*.7*k+2.2,N=.72,R=(S,j)=>{const O=((S-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(O)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<y;S++){const j=S/y*6.2832+_;let O=Math.exp(-(R(j,C)**2)/(2*N*N))+Math.exp(-(R(j,M)**2)/(2*N*N));O=Lt(O,0,1);const $=jr(O),L=h+Math.cos(j)*w,E=f+Math.sin(j)*w,A=Math.max(.6,g*(.05+.07*$)*oo(e.size)),D=.38+.62*$;if(i.glow&&$>.25){const G=s.createRadialGradient(L,E,0,L,E,A*4);G.addColorStop(0,"rgba("+i.accent+","+.24*$+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(L,E,A*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+D+")",s.beginPath(),s.arc(L,E,A,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function L$(e,o,i){ao(e,o,i)}const A$={orbit:I2,orbit2d:S$,circle:am,lines:$$,magnetic:M$,magnetic2d:R$,pulse:L$,bands:am};function lt({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:f,corePalette:g,coreHalo:x=!0,coreGradient:y=!1,streamCount:w,cellCount:k,className:_,"aria-label":C}){const M=v.useRef(null),N=b$(),R=v.useRef(0),S=v.useRef(0);S.current=y?1:0;const j=v.useRef(new Map),O=v.useRef(null),$=v.useRef(0);return v.useEffect(()=>{const L=M.current;if(!L)return;const E=L.getContext("2d");if(!E)return;const A=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),D=Math.min(2,window.devicePixelRatio||1),G=Math.max(2,Math.round(o*D)),K=G;L.width=G,L.height=K;const W={ctx:E,w:G,h:K,dpr:D,size:o,state:s,coreHalo:x,alert:R.current,streamCount:w,cellCount:k,cellBirths:k!=null&&!A&&s!=="static"?j.current:void 0},Y=i==="auto"?k$(dl(E,L,"var(--color-bg-primary)"))<.5?"dark":"light":i,X=C$(Y,Zu(d));if(W.dotPalette=h||f==null?void 0:f.map(J=>dl(E,L,J)),W.corePalette=h||g==null?void 0:g.map(J=>dl(E,L,J)),h){const J=dl(E,L,h);X.dot=J,X.core=J}const ae=A$[e]??I2,de=1.15,se=e==="lines"?1:0,Q=e==="lines"||e==="magnetic";(O.current==null||!Q||A||s==="static")&&(O.current=se);const F=J=>{if(R.current+=(S.current-R.current)*.06,Math.abs(R.current-S.current)<.001&&(R.current=S.current),W.alert=R.current,W.emergeNow=performance.now()/1e3,Q&&O.current!==se){const le=W.emergeNow,B=Lt(le-($.current||le),0,.1);$.current=le;const P=se>(O.current??0)?1:-1;O.current=Lt((O.current??0)+P*B/de,0,1)}else $.current=W.emergeNow;E.clearRect(0,0,G,K);const U=s==="static"?.62:J,ee=O.current??se;Q&&ee>.001&&ee<.999?N$(W,U,X,ee):ae(W,U,X)},q=Lt(l,.4,3);if((A||s==="static")&&(R.current=S.current),F(1.15),A||s==="static")return;let T=0;const z=J=>{F(J/1e3*q),T=requestAnimationFrame(z)};return T=requestAnimationFrame(z),()=>cancelAnimationFrame(T)},[e,o,i,s,l,d,h,f,g,x,y,w,k,N]),n.jsx("canvas",{ref:M,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:_,role:"img","aria-label":C})}const Sa={high:0,medium:1,low:2,none:3};p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function dc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function T$(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const P2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,z2=e=>/^(review|adjust|revisit|update)\b/i.test(e),E$=["Revisit","Update","Resolve"],I$=e=>/,|\sand\s/.test(e),P$="Approve all",Fl="Yes",O2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};p.section`
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
`;function z$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function O$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function D$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function F$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function B$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function H$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function D2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function W$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function U$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function q$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Ao({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function V$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function G$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function F2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function im({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const sm=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],$a={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},B2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function H2(e){const o=B2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function W2(e){const o=$a[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const U2={missed_clockin_james:"james_okoro_2"},Th=e=>`https://i.pravatar.cc/80?u=${U2[e]??e}`,Ta=e=>`https://i.pravatar.cc/80?u=${U2[e]??e}`,Y$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},K$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],q2=e=>Y$[e]??K$,V2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},lm={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Eh={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},Q$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Ih={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},Z$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},X$={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},yu={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function G2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return Z$[e.id]??e.timeline.map(i=>{var d;const s=((d=yu[i.state])==null?void 0:d.call(yu,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:X$[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const zt=(e,o,i)=>({name:e,match:o,distance:i}),Ze=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),cm=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],J$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],eM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],tM=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],Y2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",So=e=>({from:"ultron",text:Y2,time:e}),nM={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:cm,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[zt("Jordan Pierce","4.9 match","3.2 mi"),zt("Aisha Karim","4.7 match","5.1 mi"),zt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:Y2,total:20,threads:[Ze("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[So("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ze("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[So("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ze("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[So("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ze("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[So("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ze("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[So("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ze("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[So("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ze("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[So("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:J$,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[zt("Renee Wallace","4.9 match","2.4 mi"),zt("Carl Jensen","4.6 match","4.1 mi"),zt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ze("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ze("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:eM,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[zt("Dane Mercer","4.8 match","2.1 mi"),zt("Omar Reyes","4.6 match","3.7 mi"),zt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ze("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ze("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ze("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:tM,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[zt("Jamal Carter","4.7 match","1.8 mi"),zt("Sara Lindqvist","4.6 match","2.9 mi"),zt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ze("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ze("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ze("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[zt("Theo Park","4.7 match","1.9 mi"),zt("Gina Holt","4.5 match","3.3 mi"),zt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ze("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ze("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ze("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ze("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[zt("Carl Jensen","4.7 match","2.6 mi"),zt("Tina Boyd","4.5 match","3.9 mi"),zt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ze("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ze("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ze("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ze("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ze("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ze("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ze("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ze("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ze("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ze("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ze("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ze("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ze("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:cm,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ze("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ze("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},rM={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},oM=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",dm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",um=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),aM={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Xu=e=>{const[o,...i]=e.split(" "),s=aM[o];return s?`Will ${s} ${i.join(" ")}`:e};function iM(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${oM(i.name)}", template="shift_offer", to=matched)`,summary:`${Xu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Xu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function sM(e,o,i,s){var _,C,M,N;if(e==="read"){const R=((_=o.update)==null?void 0:_.recordType)??((C=o.updateClose)==null?void 0:C.recordType);if(!R)return null;const S=R.toLowerCase(),j=[{label:"Type",value:R},{label:"Time",value:((M=B2[s])==null?void 0:M.shiftTime)??""},{label:"User",value:$a[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${R}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${R}") → current_state`,recordDetails:j,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const R=(N=o.policy)==null?void 0:N.eligible;if(!R)return null;const S=R.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${R.total} ${R.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=R.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${R.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${R.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${R.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:R,query:S,fields:j}=o.task;return{icon:"task",name:"Tasks",description:R,query:S,task:{fields:j}}}if(e==="update"||e==="update-close"){const R=e==="update"?o.update:o.updateClose;if(!R)return null;const{description:S,...j}=R;return{icon:"record",name:"Update Data",description:S,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=e==="policy"?o.policy.description:l?d.description:h.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const R=e==="policy"?x:Xu(x),S={icon:y,name:g,description:R,...iM(e,o)};return l?{...S,channel:um(d.channel),message:d.message}:h?{...S,channel:dm(h.name),message:h.message}:e==="policy"?{...S,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:S}if(e==="policy")return{icon:y,name:g,description:x,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:dm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:um(d.channel),notification:k}}function K2(e,o,i="execution"){const s=nM[e];return s?o.map(l=>sM(l,s,i,e)).filter(l=>l!==null):[]}const lM=e=>e.tools??rM[e.icon]??["policy"],ul=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function cM(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const Q2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},hm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Ph(e,o){return hm[o%hm.length]}function dM(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function uM(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function Z2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(hM,{children:[n.jsx(nr,{size:"md",src:Th(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(pM,{children:[n.jsx(fM,{children:e.title}),n.jsx(mM,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(gM,{"data-tone":uM(i),children:[i,"% match"]}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(hh,{size:16})})]})}const hM=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,pM=p.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,fM=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,mM=p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,gM=p.span`
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
`,pm=e=>e.id.startsWith("detected_"),fm=5400,mm=1100;function vM(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:Q2[i.id]??i.outcome}:i)}}const xM=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function yM(){const e=v.useMemo(()=>sm.filter(U=>U.id!=="shift_drop_maria"),[]),[o,i]=v.useReducer(vM,e),[s,l]=v.useState(()=>{var ee;const U=e.find(le=>le.status==="needs_approval"||le.status==="recommended");return(U==null?void 0:U.id)??((ee=e[0])==null?void 0:ee.id)??null}),[d,h]=v.useState([]),f=U=>{l(U),h(ee=>ee.includes(U)?ee:[...ee,U])},g=v.useMemo(()=>{const U=o.map((ee,le)=>({item:ee,index:le}));return xM.map(ee=>({id:ee.id,label:ee.label,threads:U.filter(le=>ee.statuses.includes(le.item.status)).sort((le,B)=>(le.item.status==="analyzing"?1:0)-(B.item.status==="analyzing"?1:0)||(pm(B.item)?1:0)-(pm(le.item)?1:0)||Sa[le.item.severity]-Sa[B.item.severity]||le.index-B.index).map(le=>le.item)}))},[o]),x=o.find(U=>U.id===s)??null,[y,w]=v.useState({}),k=s?y[s]??0:0,[_,C]=v.useState([]),[M,N]=v.useState({}),[R,S]=v.useState({}),[j,O]=v.useState([]),$=v.useRef({}),[L,E]=v.useState([]),A=U=>{E(ee=>ee.includes(U)?ee.filter(le=>le!==U):[...ee,U])},[D,G]=v.useState([]),K=U=>{G(ee=>ee.includes(U)?ee:[...ee,U])},[W,Y]=v.useState([]),X=U=>Y(ee=>ee.includes(U)?ee:[...ee,U]);return{threads:o,groups:g,selectedId:s,selectedThread:x,selectedStage:k,stageById:y,viewedIds:d,analyzedIds:_,outboundByThread:M,chatByThread:R,replyingIds:j,setSelectedId:f,detectRisk:U=>{i({type:"detect",thread:cM(U)})},surfaceDemoThread:U=>{const ee=sm.find(le=>le.id===U);ee&&(i({type:"detect",thread:ee}),X(U))},decide:U=>{f(U),C(ee=>ee.includes(U)?ee:[...ee,U]),i({type:"decide",threadId:U})},commit:(U,ee)=>{f(U),N(le=>({...le,[U]:[...le[U]??[],ee]})),i({type:"commit",threadId:U})},completeRun:U=>{const ee=y[U]??0,le=Eh[U];ee===0&&le?(w(B=>({...B,[U]:1})),i({type:"reopen",threadId:U})):(i({type:"resolve",threadId:U}),L.includes(U)&&(K(U),E(B=>B.filter(P=>P!==U))))},sendMessage:(U,ee)=>{const le=ee.trim();if(!le)return;f(U),S(P=>({...P,[U]:[...P[U]??[],{role:"operator",text:le}]})),O(P=>P.includes(U)?P:[...P,U]);const B=window.setTimeout(()=>{S(P=>{const oe=P[U]??[],fe=oe.filter(ce=>ce.role==="ultron").length;return{...P,[U]:[...oe,{role:"ultron",text:Ph(le,fe)}]}}),O(P=>P.filter(oe=>oe!==U)),delete $.current[U]},mm);$.current[U]=B},stopReply:U=>{const ee=$.current[U];ee&&(window.clearTimeout(ee),delete $.current[U]),O(le=>le.filter(B=>B!==U))},refine:U=>{},saveWorkflow:U=>{const ee=U.id;f(ee),S(B=>({...B,[ee]:[...B[ee]??[],{role:"operator",text:"Save as workflow"}]})),O(B=>B.includes(ee)?B:[...B,ee]);const le=window.setTimeout(()=>{S(B=>({...B,[ee]:[...B[ee]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),K(ee),O(B=>B.filter(P=>P!==ee)),delete $.current[ee]},mm);$.current[ee]=le},pendingWorkflowIds:L,toggleWorkflowSave:A,savedWorkflowIds:D,markWorkflowSaved:K,revealedNewIds:W,revealNew:X}}const wM={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function bM(e,o){const i=wM[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const kM={search:El,read:El,message:Ri,policy:Mo,shield:Mo,schedule:Mo,analytics:e6,clock:un,monitor:Di,bell:Ri,record:to,task:Mo},CM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},_M=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:CM[e.icon]??e.name,jM=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",gm={positive:0,chatting:1,muted:2},SM=p(Fg)`
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
`,$M=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,zh=240;function MM({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,f]=v.useState(e),[g,x]=v.useState(!1);if(v.useEffect(()=>{if(e){f(!0);let C=0;const M=requestAnimationFrame(()=>{C=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(M),cancelAnimationFrame(C)}}x(!1);const _=setTimeout(()=>f(!1),zh);return()=>clearTimeout(_)},[e]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((_,C)=>({entry:_,index:C}));return To.createPortal(n.jsxs(DM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(FM,{$shown:g,onClick:o}),n.jsxs(BM,{$shown:g,children:[n.jsxs(HM,{children:[n.jsxs(WM,{children:[n.jsx(UM,{children:i}),n.jsx(qM,{children:w})]}),n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(ka,{size:18})})]}),n.jsxs(VM,{children:[n.jsx(GM,{"aria-hidden":"true"}),n.jsx(Dg,{type:"single",collapsible:!0,value:l,onValueChange:_=>d(typeof _=="string"?_:""),children:k.map(({entry:_,index:C})=>{const M=_.updateData?rc:kM[_.icon];return n.jsx(SM,{value:String(C),label:_M(_),description:_.description,leadingSlot:n.jsx($M,{"aria-hidden":"true",children:n.jsx(M,{size:18})}),children:n.jsx(YM,{children:n.jsx(NM,{entry:_})})},C)})})]})]})]}),document.body)}function NM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Channel"}),n.jsx(bm,{children:e.channel})]}),e.message&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Message"}),n.jsx(xm,{children:e.message})]}),e.recordDetails&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Record details"}),n.jsx(wu,{children:e.recordDetails.map((o,i)=>n.jsx(kn,{size:"sm",label:o.label,trailingSlot:n.jsx(bu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(wn,{children:[n.jsx(Xt,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(sN,{children:e.policies.items.map((o,i)=>n.jsxs(lN,{children:[n.jsx(cN,{"aria-hidden":"true",children:n.jsx(Cn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(wn,{children:[n.jsx(Xt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(RM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(wn,{children:[n.jsx(Xt,{children:`Threads · ${e.threads.total}`}),n.jsx(PM,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(wn,{children:[n.jsx(Xt,{children:"Recipient"}),n.jsx(dN,{children:n.jsx(kn,{size:"md",divider:!1,leadingSlot:n.jsx(nr,{size:"sm",src:Ta(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(oc,{size:14})})})})]}),n.jsxs(wn,{children:[n.jsx(Xt,{children:"Message"}),n.jsx(xm,{children:e.notification.message})]})]}),e.task&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Task"}),n.jsx(wu,{children:e.task.fields.map((o,i)=>n.jsx(kn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Li,{status:"success",size:"sm",children:o.value}):n.jsx(bu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(wu,{children:o.map((s,l)=>n.jsx(kn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(LM,{children:[n.jsx(AM,{children:s.previousValue}),n.jsx(TM,{"aria-hidden":"true",children:"→"}),n.jsx(EM,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Li,{status:"success",size:"sm",children:s.value}):n.jsx(bu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Recommendation"}),n.jsxs(uN,{children:[n.jsxs(ym,{children:[n.jsx(wm,{children:"Incentive?"}),n.jsx(hN,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(ym,{children:[n.jsx(wm,{children:"Reason"}),n.jsx(pN,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"Query"}),n.jsx(KM,{children:e.query})]}),e.summary&&n.jsxs(wn,{children:[n.jsx(Xt,{children:"What it does"}),n.jsx(bm,{children:e.summary})]})]})}function RM({candidates:e,total:o,moreNoun:i}){var y;const[s,l]=v.useState(!1),d=e.slice(0,3),h=o-d.length,f=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>IM(k,f)):[],x=[...d,...g];return n.jsxs(n.Fragment,{children:[n.jsx(Oh,{children:x.map((w,k)=>n.jsx(kn,{size:"sm",leadingSlot:n.jsx(nr,{size:"sm",src:Ta(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(XM,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(X2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Oh=p.div`
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
`,wu=p(Oh)`
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
`,bu=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,LM=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,AM=p.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,TM=p.span`
  color: var(--color-content-tertiary);
`,EM=p.span`
  color: var(--color-success-content);
`,Bl=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Hl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function IM(e,o){const i=Bl[e%Bl.length],s=Hl[(e*7+3)%Hl.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const vm=3;function PM({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((y,w)=>gm[y.tone]-gm[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(y,w)=>OM(w))],g=o?f:f.slice(0,vm),x=f.length-vm;return n.jsxs(n.Fragment,{children:[n.jsx(Oh,{children:g.map((y,w)=>{var M;const k=!!((M=y.conversation)!=null&&M.length),_=`${y.name}-${w}`,C=k&&s===_;return n.jsxs(JM,{"data-open":C||void 0,children:[n.jsx(kn,{size:"md",interactive:k,onClick:k?()=>l(C?null:_):void 0,"aria-expanded":k?C:void 0,leadingSlot:n.jsx(nr,{size:"sm",src:Ta(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:n.jsxs(iN,{children:[n.jsx(Li,{status:jM(y),size:"sm",children:y.status}),k?n.jsx(eN,{"data-open":C||void 0,children:n.jsx(Dn,{size:16})}):n.jsx(_n,{size:16})]})}),C&&n.jsx(zM,{messages:y.conversation})]},_)})}),x>0&&n.jsx(X2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function zM({messages:e}){return n.jsx(nN,{children:e.map((o,i)=>n.jsxs(rN,{$from:o.from,children:[n.jsx(oN,{children:o.text}),n.jsx(aN,{children:o.time})]},i))})}function OM(e){const o=Bl[e%Bl.length],i=Hl[(e*7+3)%Hl.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const DM=p.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,FM=p.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${zh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,BM=p.div`
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
  transition: transform ${zh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,HM=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,WM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,UM=p.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,qM=p.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,VM=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,GM=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,YM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,wn=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function KM({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(QM,{children:[n.jsx(ZM,{children:e}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(Cn,{size:14}):n.jsx(bg,{size:14})})]})}const QM=p.div`
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
`,ZM=p.pre`
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
`,XM=p.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,JM=p.div``,eN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,tN=we`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,nN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${tN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rN=p.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,oN=p.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,aN=p.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,iN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,X2=p.button`
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
`,sN=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,lN=p.li`
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
`,cN=p.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,xm=p.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,dN=p.div`
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
`,uN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,ym=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,wm=p.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,hN=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,pN=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,bm=p.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function fN({milestones:e}){return n.jsx(CN,{children:e.map((o,i)=>n.jsx(xN,{milestone:o,last:i===e.length-1},i))})}function Wl({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:g,reasoning:x}){return n.jsx(mN,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:g,reasoning:x})}function mN({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=v.useState(!1),C=g||x&&!d?e.length:0,M=C>0,N=M&&!y?C:0,R=e.slice(0,C).map(j=>j.headline).join(" · "),S=e.length>0&&N>=e.length;return n.jsx(jN,{$animate:h,children:n.jsxs($N,{$compact:S,children:[M&&!y&&n.jsx(_m,{$tight:!0,$last:S,$connected:f,children:n.jsxs(tv,{type:"button","aria-expanded":y,onClick:()=>w(j=>!j),children:[n.jsx($m,{"aria-hidden":"true",children:n.jsx(Il,{size:16})}),n.jsx(FN,{children:R})]})}),e.slice(N).map((j,O)=>{var W,Y;const $=N+O,L=d&&typeof i=="number"&&$>i,E=d&&typeof i=="number"&&$===i,A=L?"plan":E?"working":"done",D=!d||typeof i!="number"||$<i-1?"done":$===i-1?"working":"upcoming",G=!!((W=j.progress)!=null&&W.length),K=$===e.length-1;return n.jsxs(_m,{$tight:!G,$last:K,$connected:f,children:[f&&!K&&D!=="upcoming"&&n.jsx(NN,{"aria-hidden":"true",$state:D,$tight:!G,$superseded:g}),n.jsx(ev,{milestone:j,label:bM(j.headline,A),last:!0,collapsible:!0,placeholder:L,focused:E,startOpen:!d&&y,onCollapse:M&&y&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:g,typing:$===o,extra:!L&&((Y=j.usage)!=null&&Y.length)?n.jsx(vN,{usage:j.usage,title:j.headline}):void 0,icon:x&&!d&&!L?n.jsx($m,{"aria-hidden":"true",children:n.jsx(Il,{size:16})}):n.jsx(J2,{icon:j.icon,loading:o===$||E||d&&typeof i!="number"&&$===e.length-1,placeholder:L,muted:g})})]},$)}),!l&&!d&&n.jsx(va,{time:ur(e)})]})})}const km=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function gN(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=km.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[km[e],n.jsxs(SN,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function ur(e){const i=581+e.reduce((f,g)=>f+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function va({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(RN,{"data-feedback-actions":!0,children:n.jsxs(ng,{visibility:"always",time:e,children:[n.jsx(jm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(yg,{size:14})}),n.jsx(jm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(wg,{size:14})}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Oi,{size:14})})]})})}function vN({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(LN,{children:[n.jsxs(ze,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(_n,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(MM,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function xN({milestone:e,last:o}){return n.jsxs(PN,{children:[n.jsxs(zN,{children:[n.jsx(J2,{icon:e.icon}),!o&&n.jsx(WN,{})]}),n.jsx(ev,{milestone:e,last:o})]})}function yN({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(aR,{children:[l.map((h,f)=>n.jsx(Z2,{record:h},f)),d>0&&n.jsx(iR,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function J2({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(Sm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(DN,{})}):n.jsx(Sm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(HN,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function ev({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var K,W,Y;const _=o??e.headline;if(f)return n.jsx(Nm,{$last:i,$dim:!0,children:n.jsxs(Ei,{as:"div",children:[l,n.jsx(Rm,{children:_})]})});const C=!!((K=e.blocks)!=null&&K.length),M=!!h,N=!d||!!e.defaultOpen||!!w,[R,S]=v.useState(null),j=!!k,O=j?!0:R??N,$=d&&(C||M),L=!j&&$&&(!s||!!g),E=L&&!!g&&!!((W=e.progress)!=null&&W.length),A=()=>S(()=>!O),D=C&&(j||!d||O),G=M&&(j||!d||O);return n.jsxs(Nm,{$last:i,children:[n.jsxs(Ei,{as:j||$?"button":"div",type:j||$?"button":void 0,$interactive:j||L,"aria-expanded":j?!0:L?O:void 0,onClick:j?k:L?A:void 0,children:[l,n.jsx(Rm,{$focused:!!g,children:_}),L&&!g&&n.jsx(UN,{"data-open":O||void 0,"aria-hidden":"true",children:n.jsx(_n,{size:14})})]}),(Y=e.progress)!=null&&Y.length?n.jsx(GN,{$indent:!!l,children:n.jsxs(qN,{children:[E&&n.jsx(VN,{type:"button","aria-expanded":O,"aria-label":O?"Hide details":"Show details",onClick:A,children:O?n.jsx(wh,{size:16}):n.jsx(Ma,{size:16})}),n.jsx(bN,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:O||s||g})]})}):null,D&&n.jsx(tR,{$indent:!!l,children:e.blocks.map((X,ae)=>n.jsxs(nR,{children:[X.text&&n.jsx(rR,{children:s?n.jsx(Dh,{text:X.text}):X.text}),X.label&&n.jsx(oR,{children:X.label}),X.bullets&&n.jsx(sR,{children:X.bullets.map((de,se)=>n.jsx("li",{children:de},se))}),X.checks&&n.jsx(lR,{children:X.checks.map((de,se)=>n.jsxs("li",{children:[n.jsx(cR,{"aria-hidden":"true"}),n.jsx("span",{children:de})]},se))}),X.records&&n.jsx(yN,{records:X.records})]},ae))}),G&&n.jsx(AN,{$indent:!!l,children:h})]})}const wN=1350;function bN({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const g=e.length-1,x=typeof h=="number",[y,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(x||!k.current||y>=g)return;const N=setTimeout(()=>w(R=>Math.min(R+1,g)),wN);return()=>clearTimeout(N)},[y,g,x]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const _=typeof h=="number"?Math.min(h,g):y,C=_>=g,M=C&&!l;return n.jsxs(YN,{children:[n.jsx(QN,{$done:M,$live:l,$superseded:f,"aria-live":"polite",children:l?n.jsx(Dh,{text:e[_],caret:!1,speed:26}):e[_]},_),d&&(i?C:C||l)&&(o!=null&&o.length)?n.jsx(kN,{seeds:o,total:s}):null]})}const Cm=90;function kN({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(ZN,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>n.jsx(XN,{style:{zIndex:s.length-f,animationDelay:`${f*Cm}ms`},children:n.jsx(nr,{size:"sm",src:Ta(h),name:h,alt:""})},h)),d>0&&n.jsxs(JN,{"aria-hidden":"true",style:{animationDelay:`${s.length*Cm}ms`},children:["+",d]})]})}const CN=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,_N=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,uc=Ee`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,jN=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${_N} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${uc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SN=p.span``,$N=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Ea="var(--space-4)",_m=p.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,MN=we`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,NN=p.span`
  position: absolute;
  /* Centered on the icon column — i.e. on the glyph itself. */
  left: calc(${Ea} / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?Ee`
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
        animation: ${MN} 1.25s linear infinite;
      `:e.$state==="upcoming"?Ee`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Ee`
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
`,RN=p.div`
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
`,LN=p.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,AN=p.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?`calc(${Ea} + var(--space-2))`:"0"};
`,jm=p(ze)`
  &[data-active] { color: var(--color-content-brand); }
`;function Dh({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(EN,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(IN,{"aria-hidden":"true",children:e.slice(l)})]})}const TN=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,EN=p.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?TN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IN=p.span`
  opacity: 0;
`,PN=p.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,zN=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Sm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Width hugs the glyph so the marker lands on the row's left edge; height
     stays the 32px row pitch, which is what sets the trail's vertical rhythm. */
  width: ${Ea};
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,ON=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,DN=p.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${ON} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tv=p.button`
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
`,nv=Ee`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,$m=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* The same column as every other leading marker in the trail (see ICON_COL),
     so the chevron sits on the row's left edge whether the group is folded to
     this one line or heading the steps below it — and either way shares the
     left margin of the cards the trail runs between. */
  width: ${Ea};
  height: var(--space-8);
  ${nv}
`,FN=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${nv}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${tv}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,BN=we`
  to { transform: rotate(360deg); }
`,Mm=56.5,HN=p.svg`
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
    animation: ${BN} 2s linear infinite;
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
`,WN=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Nm=p.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Ei=p.div`
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
`,Rm=p.span`
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

  ${Ei}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,UN=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Ei}:hover &,
  ${Ei}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,qN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,VN=p.button`
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
`,GN=p.div`
  padding-left: ${e=>e.$indent?`calc(${Ea} + var(--space-2))`:"0"};
`,YN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,KN=we`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,QN=p.div`
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
  ${e=>e.$live&&Ee`
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
    animation: ${KN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,ZN=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,rv=we`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,XN=p.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${rv} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JN=p.span`
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
  animation: ${rv} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eR=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,tR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (ICON_COL + the header's --space-2 gap). */
  padding-left: ${e=>e.$indent?`calc(${Ea} + var(--space-2))`:"0"};
  animation: ${eR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,rR=p.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,oR=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,aR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,iR=p.button`
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
`,sR=p.ul`
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
`,lR=p.ul`
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
`,cR=p.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function dR({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const uR=160;function hR({captured:e=!1,onSubmit:o}){const[i,s]=v.useState(""),l=v.useRef(null),d=i.length>=10;v.useEffect(()=>{if(e)return;const f=window.requestAnimationFrame(()=>{var g;return(g=l.current)==null?void 0:g.focus()});return()=>window.cancelAnimationFrame(f)},[e]);const h=f=>{f.preventDefault(),!(!d||e)&&o(i)};return n.jsxs(mR,{onSubmit:h,"aria-label":"See Ultron handle real work",children:[n.jsx(gR,{"aria-hidden":"true"}),n.jsxs(vR,{children:[n.jsxs(xR,{children:[n.jsx(yR,{"aria-hidden":"true"})," YOUR SETUP IS READY"]}),n.jsx(wR,{children:"Ready to see the real work?"}),n.jsx(bR,{children:"Add your mobile number to launch a live Ultron event and watch it work from detection through resolution."})]}),e?n.jsxs(MR,{role:"status",children:[n.jsx(un,{size:22}),n.jsxs("span",{children:[n.jsx("strong",{children:"You’re in."})," Your live event is arriving now."]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(kR,{children:[n.jsxs(CR,{children:[n.jsx(_R,{"aria-hidden":"true",children:"+1"}),n.jsx(jR,{ref:l,type:"tel",inputMode:"numeric",autoComplete:"tel",pattern:"[0-9]*",minLength:10,maxLength:15,value:i,placeholder:"Mobile number","aria-label":"Mobile number",onChange:f=>s(f.target.value.replace(/\D/g,""))})]}),n.jsx(SR,{type:"submit",variant:"tertiary",size:"lg",disabled:!d,children:"Launch"})]}),n.jsx($R,{children:"One setup text, never spam. Msg & data rates may apply. Reply STOP to opt out."})]})]})}const ov=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,g]=v.useState(""),x=v.useRef(null),y=f.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var M;return(M=x.current)==null?void 0:M.focus()}}),[]);const w=()=>{const M=x.current;M&&(M.style.height="auto",M.style.height=`${Math.min(M.scrollHeight,uR)}px`)},k=()=>{!y||i||(o(f),g(""),requestAnimationFrame(()=>{const M=x.current;M&&(M.style.height="auto")}))},_=M=>{M.preventDefault(),k()},C=M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),k())};return n.jsxs(NR,{onSubmit:_,$compact:d,children:[n.jsx(RR,{ref:x,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:M=>{g(M.target.value),w()},onKeyDown:C}),i?n.jsx(Lm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(dR,{size:d?16:20})}):n.jsx(Lm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:n.jsx(tc,{size:d?14:18})})]})}),pR=we`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,fR=we`
  0%, 100% { opacity: 0.55; transform: scale(0.82); box-shadow: 0 0 0 0 rgb(110 231 183 / 0%); }
  50% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 7px rgb(110 231 183 / 0%); }
`,mR=p.form`
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
  animation: ${pR} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 600px) {
    gap: var(--space-3);
    padding: var(--space-5);
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gR=p.span`
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
`,vR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,xR=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: 0.08em;
  color: #a7f3d0;
`,yR=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6ee7b7;
  box-shadow: 0 0 14px rgb(110 231 183 / 78%);
  animation: ${fR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,wR=p.h2`
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: var(--font-weight-semibold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #fff;
`,bR=p.p`
  max-width: 620px;
  margin: var(--space-1) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 78%);
`,kR=p.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-2);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,CR=p.label`
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
`,_R=p.span`
  flex: 0 0 auto;
  padding-right: var(--space-3);
  margin-right: var(--space-3);
  border-right: 1px solid rgb(255 255 255 / 22%);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: rgb(226 232 255 / 64%);
`,jR=p.input`
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
`,SR=p(ze)`
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
`,$R=p.p`
  margin: calc(var(--space-2) * -1) 0 0;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: var(--line-height-relaxed);
  color: rgb(226 232 255 / 48%);
`,MR=p.div`
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
`,NR=p.form`
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
`,RR=p.textarea`
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
`,Lm=p(ze)`
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
`,Am=450;function Fh(e,o){var C;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Eh[e.id],d=o===1&&!!l,h=d?l.prompt:V2[e.id]??e.recommendation,f=d?l.record:Q$[e.id],g=f?Array.isArray(f)?f:[f]:[],x=e.status==="unresolved"?E$:d?l.actions:e.actions,y=i&&(!d&&(((C=Ih[e.id])==null?void 0:C.length)??0)>1||I$(h)),w=y?P$:x[x.length-1],k=y?[]:x.slice(0,-1),_=P2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:_}}function Tm({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,_]=v.useState(!1),[C,M]=v.useState(!1),{actionable:N,prompt:R,records:S,primaryLabel:j,purple:O}=Fh(e,o),L=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",A=!s&&(N||O),D=E&&!d,G=s?L:N||L||A,K=i&&(G||D),W=dc(e),X=H2(e.id)||(K?"":e.assessment),ae=de=>{z2(de)?y(de):x(e.id,de)};return n.jsxs(WR,{"data-tone":W,$expanded:i,children:[n.jsxs(YR,{children:[n.jsxs(QR,{type:"button","aria-expanded":K,"aria-label":K?"Collapse case":"Expand case",onClick:h,children:[n.jsx(nr,{size:"md",src:Th(e.id),name:$a[e.id],alt:$a[e.id]??""}),n.jsxs(dv,{children:[n.jsx(uv,{children:W2(e)}),X&&n.jsx(hv,{children:X})]})]}),n.jsx(KR,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":K?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?n.jsx(oc,{size:20}):K?n.jsx(Il,{size:16}):n.jsx(wh,{size:16})})]}),K&&D&&n.jsx(ZR,{children:n.jsx(XR,{children:n.jsx(fN,{milestones:G2(e)})})}),K&&G&&n.jsxs(JR,{children:[N&&!s&&n.jsx(hc,{children:R}),N&&!s&&S.length>0&&n.jsx(mL,{children:S.map((de,se)=>n.jsx(Z2,{record:de},se))}),L&&n.jsx(pv,{role:"status","aria-live":"polite",children:n.jsx(ER,{thread:e,onDecide:g})}),A&&n.jsxs(Ui,{children:[N&&j&&n.jsx(No,{variant:"primary",size:"sm",onClick:()=>ae(Fl),children:Fl}),N&&n.jsx(No,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),N&&n.jsx(vv,{variant:"tertiary",size:"sm","data-selected":C||void 0,onClick:()=>{M(!0),y("Other")},children:"Other"}),O&&(k?n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Cn,{size:14}),children:"Saved"}):n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Ao,{size:14}),onClick:()=>{w(e),_(!0)},children:"Save as workflow"}))]})]})]})}function Em({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Dh,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function av({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const _=d||h,[C,M]=v.useState(!1),[N,R]=v.useState(!1),[S]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[j,O]=v.useState(!1),[$,L]=v.useState(!1),E=v.useRef(null);v.useEffect(()=>{var q;$&&((q=E.current)==null||q.focus())},[$]);const A=d||g||j,{actionable:D,onFollowUp:G,prompt:K,records:W,primaryLabel:Y,purple:X}=Fh(e,o),ae=D&&!G?Ih[e.id]??O2(K).map(q=>({label:q})):void 0,de=e.status==="resolved"||e.status==="auto_resolved",se=X||de,Q=q=>{z2(q)?s(q):i(e.id,q)},F=D&&!(ae&&ae.length>0)&&W.length>0?W[0]:void 0;if(se&&!D){const q=Q2[e.id],T=C||!q,z=d&&!g&&!j;return n.jsxs(SL,{$divided:!0,children:[q&&n.jsx($L,{children:n.jsx(Em,{text:q,onDone:()=>M(!0),instant:S})}),T&&!z&&n.jsxs(ya,{$saved:A,"data-saved":A||void 0,children:[n.jsxs(xv,{children:[n.jsx(yv,{"aria-hidden":"true",children:n.jsx(Ao,{size:16})}),n.jsx(wv,{children:n.jsx(Em,{text:"Want me to save this as a reusable workflow?",onDone:()=>R(!0),instant:S})})]}),N&&n.jsx(bv,{children:A?n.jsx(No,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(Cn,{size:14}),children:"Saved"}):n.jsx(No,{variant:"primary",size:"sm",onClick:()=>{O(!0),l(e)},children:"Save workflow"})})]}),T&&z&&n.jsx(sv,{})]})}return n.jsxs(GR,{$flat:k,"data-tone":dc(e),children:[D&&n.jsxs(lv,{children:[n.jsx(hc,{children:K}),F&&n.jsx(cv,{children:n.jsx(nr,{size:"md",src:Ta(F.avatarSeed),name:F.title,alt:F.title})})]}),ae&&ae.length>0?n.jsx(iv,{tasks:ae}):null,n.jsxs(Ui,{children:[D&&Y&&n.jsx(No,{variant:$?"secondary":"primary",size:"sm",onClick:()=>Q(Fl),children:Fl}),D&&n.jsx(No,{variant:$?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),D&&n.jsx(vv,{variant:"tertiary",size:"sm","data-selected":$||void 0,onClick:()=>L(!0),children:"Other"}),D&&!G&&n.jsx(jL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":_,"data-on":_||void 0,leadingArtwork:_?n.jsx(Cn,{size:14}):n.jsx(Ao,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),D&&$&&n.jsx(_L,{children:n.jsx(ov,{ref:E,compact:!0,onSend:q=>x==null?void 0:x(q),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function LR({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:g=!1}){const x=dc(e),y=H2(e.id)||e.assessment;return n.jsxs(UR,{"data-tone":x,$expanded:i,children:[n.jsxs(qR,{$expanded:i,children:[n.jsx(nr,{size:"md",src:Th(e.id),name:$a[e.id],alt:$a[e.id]??""}),n.jsxs(dv,{children:[n.jsx(uv,{children:W2(e)}),y&&n.jsx(hv,{children:y})]})]}),i&&n.jsx(VR,{children:n.jsx(av,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:g})})]})}function iv({tasks:e,interactive:o=!0}){return n.jsx(gL,{children:e.map((i,s)=>n.jsx(AR,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function AR({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return n.jsxs(vL,{children:[n.jsx(xL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(yL,{})}),n.jsxs(wL,{children:[n.jsxs(bL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[n.jsx(mv,{children:e.label}),h&&n.jsx(kL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(_n,{size:14})})]}),l&&h&&n.jsx(CL,{children:e.detail})]})]})}function TR({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(aL,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!o&&h===i-1,g=h===l.length-1;return n.jsxs(sL,{children:[n.jsxs(lL,{children:[n.jsx(pL,{$done:!f,"aria-hidden":"true",children:f?n.jsx(fL,{children:n.jsx(lt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(Cn,{size:16})}),!g&&n.jsx(cL,{})]}),n.jsxs(dL,{$last:g,children:[n.jsx(uL,{children:d.headline}),n.jsx(hL,{children:d.detail})]})]},h)})})}function ER({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(eL,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[n.jsx(lt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(nL,{children:[n.jsx(rL,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(oL,{children:e.assessment})]}),n.jsx(tL,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(_n,{size:14})})]}),d&&n.jsx(TR,{steps:q2(e.id),completed:i}),!i&&!l&&n.jsx(fv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function IR({thread:e,onDecide:o}){return n.jsx(fv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function ku(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:K2(o,lM(e))}}function PR(e,o){const i=K2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function zR(e,o){const i=G2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[PR(q2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(lm[e.id]??[]).map(k=>ku(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Eh[e.id],g=[(lm[e.id]??[]).map(w=>ku(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>ku(w,e.id))],x=w=>w===1&&f?f.prompt:V2[e.id]??e.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(_=>y.push({kind:"activity",milestone:_})),y.push({kind:"reply",text:dM(k)})}),{items:y,reasoningCount:h}}function OR({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:g=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=zR(e,o),_=l||e.status==="in_progress",[C,M]=v.useState(l?Math.min(1,k):_?k:w.length),[N]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),R=o.length>0||x||y?w.length:k,S=e.status==="in_progress"&&o.length>0,[j,O]=v.useState(0);v.useEffect(()=>{O(0)},[C]),v.useEffect(()=>{if(C>=R)return;const B=w[C],P=w[C-1];if((B==null?void 0:B.kind)==="question"||(B==null?void 0:B.kind)==="message"){const ce=setTimeout(()=>M(ve=>ve+1),0);return()=>clearTimeout(ce)}if((B==null?void 0:B.kind)==="reply"){if(S)return;const ce=setTimeout(()=>M(ve=>ve+1),Am);return()=>clearTimeout(ce)}if(S&&(P==null?void 0:P.kind)!=="message")return;const oe=(P==null?void 0:P.kind)==="message"?Am:fm,fe=setTimeout(()=>M(ce=>ce+1),oe);return()=>clearTimeout(fe)},[C,R,S]),v.useEffect(()=>{if(!S)return;const B=P=>{var Ce;if(P.key!=="t"&&P.key!=="T"||P.metaKey||P.ctrlKey||P.altKey)return;const oe=P.target instanceof Element?P.target:null;if(oe&&oe.closest('input, textarea, [contenteditable="true"]'))return;const fe=w[C-1],ce=(fe==null?void 0:fe.kind)==="activity"?((Ce=fe.milestone.progress)==null?void 0:Ce.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&j<ce-1){O(_e=>_e+1);return}const ve=w[C];(ve==null?void 0:ve.kind)==="activity"?(M(_e=>_e+1),O(0)):f==null||f()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[S,C,j,f]);const $=w.slice(0,C),L=[];for(const B of $){if(B.kind==="question"){L.push({type:"question",text:B.text});continue}if(B.kind==="message"){L.push({type:"msg",text:B.text});continue}if(B.kind==="reply"){L.push({type:"reply",text:B.text});continue}const P=L[L.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):L.push({type:"acts",milestones:[B.milestone]})}const E=C<w.length,A=$.length>0&&$[$.length-1].kind==="activity",D=C>=R,[G,K]=v.useState(!1);v.useEffect(()=>{if(!(D&&A&&(x||l)&&!y)){K(!1);return}K(!0);const B=setTimeout(()=>K(!1),fm);return()=>clearTimeout(B)},[D,A,C,x,l,y]);const W=(x||l)&&(E||G)&&A;let Y=-1;L.forEach((B,P)=>{B.type==="acts"&&(Y=P)});const X=[];for(const B of w){if(B.kind!=="activity"){X.push({type:"other"});continue}const P=X[X.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):X.push({type:"acts",milestones:[B.milestone]})}let ae=-1;X.forEach((B,P)=>{B.type==="acts"&&(ae=P)});const de=L.findIndex(B=>B.type==="acts"),se=(B,P,oe=P)=>{const fe=L[B],ce=(l||e.status==="in_progress")&&B===ae,ve=X[B],Ce=ce&&ve&&ve.type==="acts"?ve.milestones:fe.milestones,_e=ce?fe.milestones.length-1:void 0;return n.jsx(Wl,{milestones:Ce,focusIndex:_e,focusBeat:ce&&S?j:void 0,typingIndex:B===ae&&W?fe.milestones.length-1:void 0,collapsed:B<Y,hideActions:oe,running:ce,showConnectors:B!==de,reasoning:B===de,animateIn:!P&&!N})},Q=[];for(let B=0;B<L.length;B++){const P=L[B];if(P.type==="question"){Q.push({kind:"question",text:P.text});continue}if(P.type==="msg"){Q.push({kind:"msg",text:P.text});continue}if(P.type==="reply"){Q.push({kind:"response",gi:-1,text:P.text});continue}const oe=L[B+1];oe&&oe.type==="reply"?(Q.push({kind:"response",gi:B,text:oe.text}),B++):Q.push({kind:"acts",gi:B})}const q=(l||e.status==="in_progress")&&Y>=0||s,T=$.length>0,z=s||x,J=(()=>{for(let B=Q.length-1;B>=0;B--){const P=Q[B];if(P.kind==="acts"||P.kind==="response"&&P.gi>=0)return B}return-1})(),U=Q.findIndex(B=>B.kind==="question"),ee=U===de+1?U:-1,le=B=>B.kind==="acts"?ur(L[B.gi].milestones):B.kind==="response"?ur(B.gi>=0?L[B.gi].milestones:[]):ur([]);return n.jsxs(n.Fragment,{children:[Q.map((B,P)=>{var ve,Ce;const oe=P===J?d:null;if(B.kind==="question"){if(P===ee)return null;const _e=Q[P-1],Me=!!_e&&(_e.kind==="acts"||_e.kind==="response")&&P-1!==J,Oe=P===U;return n.jsxs(_u,{children:[Oe?n.jsx(Im,{thread:e,saveWorkflowFlagged:g}):n.jsx(BR,{text:B.text,animate:!N}),Me&&n.jsx(va,{time:le(_e)})]},`q${P}`)}if(B.kind==="msg")return n.jsx(HR,{messages:[B.text],animate:!N},`m${P}`);if(B.kind==="acts"){const _e=L[B.gi].milestones,Me=((ve=Q[P+1])==null?void 0:ve.kind)==="question",Oe=se(B.gi,!1,!!oe||Me),Ge=P===de,De=oe||(Ge&&P+1===ee?n.jsx(Im,{thread:e,saveWorkflowFlagged:g}):null);return Ge&&De?n.jsxs(FL,{children:[Oe,De,n.jsx(va,{time:ur(_e)})]},`a${P}`):n.jsxs(v.Fragment,{children:[Oe,oe&&n.jsxs(_u,{children:[oe,n.jsx(va,{time:ur(_e)})]})]},`a${P}`)}const fe=B.gi>=0,ce=fe?L[B.gi].milestones:[];return n.jsxs(v.Fragment,{children:[n.jsx(Ju,{activity:fe?se(B.gi,!0):void 0,text:B.text,feedbackTime:oe||((Ce=Q[P+1])==null?void 0:Ce.kind)==="question"?void 0:ur(ce),showMark:!1,animateIn:!1}),oe&&n.jsxs(_u,{children:[oe,n.jsx(va,{time:ur(ce)})]})]},`resp${P}`)}),n.jsx(DR,{messages:i,replying:s}),h&&To.createPortal(T?n.jsxs(IL,{role:z?"status":"img","aria-label":s?"Ultron is replying":q?"Ultron is working":"Ultron",children:[n.jsxs(OL,{"aria-hidden":"true",children:[n.jsx(Pm,{$show:q,children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Pm,{$show:!q,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:z?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),q&&n.jsx(zL,{children:s?"Replying…":n.jsx(gN,{})})]}):null,h),J<0&&d]})}function Ju({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return n.jsxs(DL,{children:[f&&n.jsxs(BL,{$animate:h,children:[e,i,s&&n.jsx(va,{time:s})]}),d&&n.jsx(HL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Cu(){return[{icon:"clock",headline:"Reviewed your message"}]}function DR({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(EL,{children:e.map((i,s)=>i.role==="operator"?n.jsx(kv,{children:n.jsx(_v,{children:n.jsx(jv,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(Ju,{body:n.jsx(FR,{}),feedbackTime:ur(Cu()),showMark:!1},s):n.jsx(Ju,{activity:n.jsx(Wl,{milestones:Cu(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:ur(Cu()),showMark:!1},s))})}function FR(){return n.jsx(sv,{})}function sv(){return n.jsxs(ya,{children:[n.jsxs(xv,{children:[n.jsx(yv,{"aria-hidden":"true",children:n.jsx(Ao,{size:16})}),n.jsx(wv,{children:"Workflow saved for future use."})]}),n.jsx(bv,{children:n.jsx(No,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(oc,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function BR({text:e,animate:o=!0}){return n.jsx(NL,{$animate:o,children:e})}function Im({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Fh(e,0),l=Ih[e.id]??O2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(RL,{"data-tone":dc(e),children:[n.jsxs(lv,{children:[n.jsx(hc,{children:i}),o?n.jsx($r,{content:"Saved as workflow",children:n.jsx(LL,{"aria-label":"Saved as workflow",children:n.jsx(Ao,{size:18})})}):d&&n.jsx(cv,{children:n.jsx(nr,{size:"md",src:Ta(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(iv,{tasks:l,interactive:!1}):null]})}function HR({messages:e,animate:o=!0}){return e.length?n.jsx(AL,{children:e.map((i,s)=>n.jsx(kv,{children:n.jsx(_v,{$animate:o,children:n.jsx(jv,{children:i})})},s))}):null}const WR=p.div`
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
`,UR=p.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?Ee`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Ee`
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
`,qR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Ee`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,VR=p.div`
  padding: var(--space-4);
`,GR=p.div`
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
  ${e=>e.$flat&&Ee`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,lv=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,cv=p.span`
  flex-shrink: 0;
  display: inline-flex;
`,YR=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,KR=p(ze)`
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
`,QR=p.button`
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
`,dv=p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,uv=p.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,hv=p.span`
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
`,ZR=p.div`
  overflow: hidden;
`,XR=p.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,JR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,pv=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,eL=p.div`
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
`,tL=p.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;p(pv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const nL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rL=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,oL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,aL=p.div`
  display: flex;
  flex-direction: column;
`,iL=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,sL=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${iL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lL=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,cL=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,dL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,uL=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,hL=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,pL=p.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,fL=p.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,fv=p(ze)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,mL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,gL=p.div`
  display: flex;
  flex-direction: column;
`,Ul="var(--space-8)",vL=p.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,xL=p.div`
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
  &[data-first]::before { top: calc(${Ul} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ul} / 2); }
  &[data-first][data-last]::before { display: none; }
`,yL=p.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ul} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,wL=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,bL=p.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ul};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,mv=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,kL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,CL=p.p`
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
`,hc=p.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,gv=we`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ui=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${gv} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,_L=p.div`
  animation: ${gv} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,No=p(ze)`
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
    ${Ui} > & {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`,vv=p(ze)`
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
    ${Ui} > & {
      flex: 0 0 100%;
    }
  }
`,jL=p(ze)`
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
`,SL=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,$L=p.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,ya=p.div`
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

  ${e=>!e.$saved&&Ee`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,xv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,yv=p.span`
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
  ${ya}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${ya}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${ya}[data-saved] & { color: var(--color-content-disabled); }
`,wv=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${ya}[data-saved] & { color: var(--color-content-disabled); }
`,bv=p(Ui)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,ML=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,NL=p.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${ML} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,RL=p.div`
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
  ${hc} { color: var(--color-content-disabled); }
  ${mv} { color: var(--color-content-disabled); }
`,LL=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,AL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,kv=p.div`
  display: flex;
  justify-content: flex-end;
`,Bh=we`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,Cv=we`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,TL=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,_v=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Bh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jv=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,EL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;p.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const IL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${Cv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PL=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,zL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${PL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,OL=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Pm=p.span`
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
`,DL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${uc}
`,_u=p.div`
  display: contents;
  ${uc}
`,FL=p.div`
  display: flex;
  flex-direction: column;
  ${uc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,BL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${TL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${Cv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Bh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Bh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const zm=72,Om=.58;function zn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Dm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),g=parseInt(f.length===3?f.split("").map(x=>x+x).join(""):f,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const WL=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function Hh({links:e=0,tone:o="aurora",cornerTone:i="default"}){const s=v.useRef(null),l=v.useRef(0),d=v.useRef(e);return d.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const h=s.current;if(!h)return;const f=h.getContext("2d");if(!f)return;const g=Math.min(2,window.devicePixelRatio||1);let x=0,y=0;const w=()=>{x=h.clientWidth,y=h.clientHeight,h.width=Math.max(2,Math.round(x*g)),h.height=Math.max(2,Math.round(y*g)),f.setTransform(g,0,0,g,0,0)};w();const k=new ResizeObserver(w);k.observe(h);const _=Dm(f,h,"--color-bg-primary","255,255,255"),C=WL(_)<.5,M=Dm(f,h,"--color-content-tertiary",C?"148,163,184":"71,85,105"),N=Array.from({length:zm},(E,A)=>{const D=A%3===0,G=D?1-.5*Math.pow(zn(A*3.1),1.6):zn(A*3.1),K=D?.5*Math.pow(zn(A*5.7),1.6):zn(A*5.7);return{bx:G,by:K,vx:(zn(A*7.3)-.5)*.008,vy:(zn(A*9.9)-.5)*.008,wA:6+zn(A*4.7)*10,wS:.25+zn(A*6.1)*.5,wP:zn(A*8.2)*6.2832,r:.8+zn(A*2.3)*1.6,twS:.8+zn(A)*1.4,twP:zn(A*11.4)*6.2832}}),R=(E,A)=>{const D=((E.bx+E.vx*A)%1+1)%1,G=((E.by+E.vy*A)%1+1)%1,K=D-.5,W=Math.abs(K)*2,Y=W<1e-4?1:(Om+(1-Om)*W)/W;return{x:(.5+K*Y)*x+Math.cos(A*E.wS+E.wP)*E.wA,y:G*y+Math.sin(A*E.wS*.8+E.wP)*E.wA}},S=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),j=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),f.clearRect(0,0,x,y);const A=N.map(D=>R(D,E));for(let D=0;D<zm;D++){const G=N[D],K=.35+.65*(.5+.5*Math.sin(E*G.twS+G.twP)),W=.82+l.current*.18;f.fillStyle="rgba("+M+","+K*W*(C?.55:.42)+")",f.beginPath(),f.arc(A[D].x,A[D].y,G.r*(.7+.3*K),0,6.2832),f.fill()}};if(S)return l.current=d.current,j(1.15),()=>k.disconnect();j(1.15);let O=0;const $=performance.now(),L=E=>{j(1.15+(E-$)/1e3),O=requestAnimationFrame(L)};return O=requestAnimationFrame(L),()=>{cancelAnimationFrame(O),k.disconnect()}},[]),n.jsx(UL,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:i==="risk",children:n.jsx("canvas",{ref:s})})}const UL=p.div`
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
  ${e=>e.$neutral&&Ee`
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
`,Fn=Ee`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Sv=Ee`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Ee`
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
`;const qL=p.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,hl=p.div`
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
`,Fm=.025,yi=560,wi=480,VL=260,GL=.08,YL=.18,KL=.06,QL=350,ZL=9,pl=[168,197,224,250,285,330,390],XL=e=>{const o=pl.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(pl[s]+(pl[s+1]-pl[s])*(i-s))%360},Nl=5,Bm=360,JL=560,eA=.055,tA=.03,bi=320,nA=.84,eh=Nl+1,Rl=[];for(let e=0;e<eh;e++)for(let o=e+1;o<eh;o++)Rl.push([e,o]);const Hm=(e,o)=>XL((e*ZL+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),fl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Wm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),ju=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function Wh({tone:e="color"}={}){const o=v.useRef(null),i=v.useRef(null),s=v.useRef([]),l=v.useRef([]),d=v.useRef([]);return v.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),f=o.current,g=i.current;if(!f||!g)return;const x=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,w=Array.from({length:Nl},()=>({size:Bm+Math.random()*(JL-Bm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));w.forEach((A,D)=>{const G=l.current[D];G&&(G.style.width=`${A.size.toFixed(0)}px`,G.style.height=`${A.size.toFixed(0)}px`)});const k=(A,D,G)=>{A.style.setProperty("--glow-ha",Hm(D,x[0]+G).toFixed(1)),A.style.setProperty("--glow-hb",Hm(D,x[1]+G*1.3).toFixed(1)),A.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(D*.17+x[2]*1.9+G)))%360).toFixed(1)),A.style.setProperty("--glow-cx",`${(35+14*Math.sin(D*.4+x[2]+G)).toFixed(1)}%`),A.style.setProperty("--glow-cy",`${(35+14*Math.cos(D*.31+x[3]+G)).toFixed(1)}%`)},_=(A,D,G)=>{const K=new Array(eh).fill(null);for(let W=0;W<Nl;W++){const Y=w[W],X=l.current[W];if(!X)continue;const ae=D*(.5+Y.ax*(.68*Math.sin(A*Y.sx1+Y.px1)+.32*Math.sin(A*Y.sx2+Y.px2))),de=G*(.5+Y.ay*(.68*Math.sin(A*Y.sy1+Y.py1)+.32*Math.sin(A*Y.sy2+Y.py2))),se=eA+tA*(.5+.5*Math.sin(A*Y.bs+Y.bp));X.style.transform=`translate(${(ae-Y.size/2).toFixed(1)}px, ${(de-Y.size/2).toFixed(1)}px)`,X.style.opacity=se.toFixed(3),X.style.borderRadius=fl(A,Y.mp),k(X,A,Y.cs),K[W+1]={x:ae,y:de,size:Y.size,o:se}}return K},C=(A,D)=>{for(let G=0;G<Rl.length;G++){const K=d.current[G];if(!K)continue;const[W,Y]=Rl[G],X=D[W],ae=D[Y],de=X&&ae?Math.min(X.o,ae.o):0;if(!X||!ae||de<=.005){K.style.opacity="0";continue}const se=ae.x-X.x,Q=ae.y-X.y,F=Math.hypot(se,Q),q=(X.size+ae.size)/2*nA,T=Wm(1-F/q);if(T<=.001){K.style.opacity="0";continue}const z=Math.max(.35,F*.9/bi),J=.3+.4*T;K.style.transform=`translate(${((X.x+ae.x)/2-bi/2).toFixed(1)}px, ${((X.y+ae.y)/2-bi/2).toFixed(1)}px) rotate(${Math.atan2(Q,se).toFixed(3)}rad) scale(${z.toFixed(3)}, ${J.toFixed(3)})`,K.style.opacity=(de*T).toFixed(3),K.style.borderRadius=fl(A,1.1*(G+1)),k(K,A,.23*(G+1))}};if(h){const D=_(2.4,f.clientWidth,f.clientHeight);C(2.4,D);return}let M=null,N=null,R=-1/0,S=0,j=0,O=0;const $=A=>{const D=f.getBoundingClientRect(),G=M===null;M=A.clientX-D.left,N=A.clientY-D.top,R=A.timeStamp,G&&(S=M,j=N)};window.addEventListener("pointermove",$,{passive:!0});let L=0;const E=A=>{L=requestAnimationFrame(E);const D=A/1e3,G=f.clientWidth,K=f.clientHeight,W=_(D,G,K);if(M!==null&&N!==null){S+=(M-S)*Fm,j+=(N-j)*Fm;const Y=A-R<QL?YL:GL;O+=(Y-O)*KL,g.style.transform=`translate(${S-yi/2}px, ${j-yi/2}px)`,g.style.opacity=O.toFixed(3),g.style.borderRadius=fl(D,0),k(g,D,0),W[0]={x:S,y:j,size:yi,o:O};for(let X=0;X<ju.length;X++){const ae=s.current[X];if(!ae)continue;const{nx:de,ny:se}=ju[X],Q=de<0?S:de>0?G-S:se<0?j:K-j,F=Wm(1-Q/VL);if(F<=.001){ae.style.opacity="0";continue}const q=de!==0?de<0?0:G:S,T=se!==0?se<0?0:K:j,z=wi*(.5-.22*F),J=.55+.45*F;ae.style.transform=`translate(${q+de*z-wi/2}px, ${T+se*z-wi/2}px) scale(${J.toFixed(3)})`,ae.style.opacity=(O*F).toFixed(3),ae.style.borderRadius=fl(D,.9*(X+1)),k(ae,D,.35*(X+1))}}C(D,W)};return L=requestAnimationFrame(E),()=>{cancelAnimationFrame(L),window.removeEventListener("pointermove",$)}},[]),n.jsxs(qL,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[Rl.map((h,f)=>n.jsx(hl,{ref:g=>{d.current[f]=g},style:{width:bi,height:bi,opacity:0}},`bridge-${f}`)),Array.from({length:Nl},(h,f)=>n.jsx(hl,{ref:g=>{l.current[f]=g},style:{opacity:0}},`ambient-${f}`)),ju.map((h,f)=>n.jsx(hl,{ref:g=>{s.current[f]=g},style:{width:wi,height:wi,opacity:0}},f)),n.jsx(hl,{ref:i,style:{width:yi,height:yi,opacity:0}})]})}const Um=.71,$v=.24,Mv=Ee`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${$v}em;
`,rA={"Coverage Recovery":Xr,"Fill Optimization":Xr,Recruiting:Xr,Users:Xr,Attendance:bn,"Attendance Recovery":bn,"Time Off":bn,Scheduling:bn,Compliance:Di,Onboarding:Mo,"Payroll Operations":xg,Invoicing:to,Reporting:Of,"Marketplace Optimization":Of,Engagement:Ri,"Autonomous Operations":Jl},oA=e=>rA[e]??Jl,qm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],aA=2800,iA=200,sA=6,lA=2200,Si=520;function cA({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[f,g]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const $=setInterval(()=>l(L=>(L+1)%qm.length),aA);return()=>clearInterval($)},[]);const y=Math.min(sA,ul.length),[w,k]=v.useState([]),_=v.useRef(0),C=v.useRef(ul.filter($=>!$.risk)),M=v.useRef(ul.filter($=>$.risk)),N=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),R=()=>5+Math.floor(Math.random()*5),S=()=>{const $=N.current,L=M.current;if(L.length>0&&$.sinceRisk>=$.gap)return $.sinceRisk=0,$.gap=R(),L[$.risk++%L.length];$.sinceRisk+=1;const E=C.current;return E.length>0?E[$.routine++%E.length]:L[$.risk++%L.length]},j=$=>$.risk?"risk":Math.random()<.28?"action":"none",O=v.useRef(null);return v.useEffect(()=>{if(ul.length===0){k([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:R()},_.current=0;const $=Array.from({length:y},()=>{const A=S();return{key:_.current++,event:A,phase:"in",outcome:j(A),resolved:!0}});if($.length>0){const A=$[$.length-1];A.resolved=!1,O.current={key:A.key,event:A.event,outcome:A.outcome}}else O.current=null;k($);const L=[],E=setInterval(()=>{var W;const A=S(),D=_.current++,G=j(A),K=O.current;K&&K.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(K.event.id)||(h.current.add(K.event.id),(W=d.current)==null||W.call(d,K.event))),O.current={key:D,event:A,outcome:G},k(Y=>{const X=Y.filter(se=>se.phase!=="leaving"),ae=X.length>=y?X[0].key:null;return[...Y.map(se=>se.key===ae?{...se,phase:"leaving"}:K&&se.key===K.key&&!se.resolved?{...se,resolved:!0}:se),{key:D,event:A,phase:"entering",outcome:G,resolved:!1}]}),L.push(setTimeout(()=>{k(Y=>Y.map(X=>X.key===D?{...X,phase:"in"}:X))},40)),L.push(setTimeout(()=>{k(Y=>Y.filter(X=>X.phase!=="leaving"))},Si))},lA);return()=>{clearInterval(E),L.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,o]),n.jsxs(dA,{children:[n.jsx(Hh,{links:0,tone:"neutral",cornerTone:f?"risk":"default"}),n.jsx(Wh,{tone:"neutral"}),n.jsx(uA,{$riskActive:f,"aria-hidden":"true"}),n.jsxs(hA,{children:[n.jsx(pA,{children:n.jsx(lt,{mark:"circle",size:iA,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),n.jsx(fA,{children:"Ultron"}),n.jsx(mA,{role:"status","aria-live":"polite",children:n.jsxs(vA,{children:[n.jsx(xA,{children:qm[s]}),n.jsxs(yA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(bA,{children:i},"deck"):w.length>0&&n.jsx(wA,{"aria-label":"Live event feed",children:w.map($=>{const L=oA($.event.capability);return n.jsx(kA,{"data-phase":$.phase,"aria-hidden":$.phase==="leaving"||void 0,children:n.jsx(CA,{children:n.jsxs(_A,{"data-outcome":$.resolved?$.outcome:"pending",children:[n.jsxs(jA,{children:[n.jsx(SA,{"aria-hidden":"true",children:n.jsx(L,{size:16})}),n.jsxs($A,{children:[n.jsx(AA,{children:$.event.capability}),n.jsx(TA,{children:$.event.title})]})]}),n.jsx(MA,{children:$.resolved?$.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(NA,{children:"Risk detected"})]}):$.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(LA,{children:"Action required"})]}):n.jsx(RA,{children:"No action needed"}):n.jsx(lt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},$.key)})},"feed")]})}const dA=p.div`
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
`,uA=p.div`
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
`,Uh=we`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,hA=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Uh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pA=p.div`
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
`,fA=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Mv}
  color: var(--color-content-primary);
`,mA=p.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,gA=we`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,vA=p.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${gA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,Nv=we`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,yA=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Nv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,wA=p.div`
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
  animation: ${Uh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,bA=p.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Uh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kA=p.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Si}ms var(--ease-out, ease),
    opacity ${Si}ms var(--ease-out, ease),
    transform ${Si}ms var(--ease-out, ease);

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
    transition: opacity ${Si}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,CA=p.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,_A=p.div`
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
`,jA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,SA=p.span`
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
`,$A=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,MA=p.div`
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
    animation: ${Nv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const NA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,RA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,LA=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,AA=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,TA=p.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,EA=5e3,IA=5,Ll=320,PA=e=>e.status==="needs_approval"||e.status==="recommended";function zA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:g,onClose:x}){const[y]=v.useState(()=>e.filter(PA).map((L,E)=>({t:L,index:E})).sort((L,E)=>Sa[L.t.severity]-Sa[E.t.severity]||L.index-E.index).slice(0,IA).map(({t:L})=>L.id)),[w,k]=v.useState(1),[_,C]=v.useState(new Set),[M,N]=v.useState(new Set),R=v.useRef(new Map);v.useEffect(()=>{if(w>=y.length)return;const L=setTimeout(()=>k(E=>E+1),EA);return()=>clearTimeout(L)},[w,y.length]),v.useEffect(()=>{const L=E=>{E.key==="Escape"&&x()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[x]),v.useEffect(()=>{const L=R.current;return()=>{L.forEach(E=>clearTimeout(E))}},[]);const S=y.findIndex(L=>!_.has(L));v.useEffect(()=>{if(y.length>0&&S===-1){const L=setTimeout(x,260);return()=>clearTimeout(L)}},[S,y.length,x]);const j=Math.max(w,S+1);v.useEffect(()=>{y.slice(0,j).forEach(L=>g==null?void 0:g(L))},[j]);const O=(L,E)=>{N(D=>new Set(D).add(L.id));const A=setTimeout(()=>{N(D=>{const G=new Set(D);return G.delete(L.id),G}),C(D=>new Set(D).add(L.id)),R.current.delete(L.id),i(L.id,E)},Ll);R.current.set(L.id,A)},$=y.length-_.size;return n.jsxs(OA,{role:"region","aria-label":"New cases",children:[n.jsxs(FA,{children:[n.jsx(Xt,{children:"Needs your decision"}),n.jsx(Na,{children:$}),n.jsx(BA,{}),n.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:n.jsx(ka,{size:16})})]}),n.jsx(DA,{children:n.jsx(HA,{children:y.slice(0,j).map((L,E)=>{if(_.has(L))return null;const A=e.find(D=>D.id===L);return A?n.jsx(UA,{"data-exiting":M.has(L)||void 0,children:n.jsx(LR,{thread:A,stage:o[L]??0,expanded:E===S,onAction:(D,G)=>O(A,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(L),saved:f.includes(L)})},L):null})})})]})}const OA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,DA=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,FA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,BA=p.div`
  flex: 1;
`,HA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,WA=we`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,UA=p.div`
  animation: ${WA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Ll}ms var(--ease-out, ease),
    transform ${Ll}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Ll}ms linear;
    &[data-exiting] { transform: none; }
  }
`,qA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Vm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},VA=["new","working","done"],GA=280;function YA({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:_,savedWorkflowIds:C,onSend:M,replyingIds:N,onStop:R,onClose:S,onDetectRisk:j,onRevealNew:O}){const[$,L]=v.useState(!1),E=()=>{$||(L(!0),window.setTimeout(()=>{L(!1),S()},GA))},[A,D]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){D(!1);return}const P=oe=>{if(oe.key!=="t"&&oe.key!=="T"||oe.metaKey||oe.ctrlKey||oe.altKey)return;const fe=oe.target instanceof Element?oe.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||D(ce=>!ce)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[i]);const G=(P,oe)=>(P.t.status==="analyzing"?1:0)-(oe.t.status==="analyzing"?1:0)||Sa[P.t.severity]-Sa[oe.t.severity]||P.index-oe.index,K=e.map((P,oe)=>({t:P,index:oe})).filter(({t:P})=>qA[i].includes(P.status)).sort(G).map(({t:P})=>P.id),[W,Y]=v.useState(()=>h??null),X=v.useRef({}),ae=v.useRef(null),de=P=>{var oe;P==="Other"&&((oe=ae.current)==null||oe.focus()),y(P)},se=v.useRef(null),Q=v.useRef(null),[F,q]=v.useState(null),T=v.useRef(void 0);v.useEffect(()=>{var P;if(T.current===void 0){T.current=h;return}!h||h===T.current||(T.current=h,Y(h),(P=X.current[h])==null||P.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const z=VA.includes(i),J=z?h&&K.includes(h)?h:K[0]??null:null;v.useEffect(()=>{var Pe;const P=se.current,oe=Q.current;if(!P||!oe)return;const ce=((Pe=window.matchMedia)==null?void 0:Pe.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ve=160;let Ce=!0,_e=P.scrollHeight;const Me=()=>{Ce=P.scrollHeight-P.scrollTop-P.clientHeight<=ve};P.addEventListener("scroll",Me,{passive:!0});let Oe=0;const Ge=()=>{Oe=performance.now()};P.addEventListener("pointerdown",Ge,{passive:!0});const De=new ResizeObserver(()=>{const Be=P.scrollHeight,Je=performance.now()-Oe<500;Be>_e+1&&Ce&&!Je&&P.scrollTo({top:Be,behavior:ce}),_e=Be});return De.observe(oe),()=>{P.removeEventListener("scroll",Me),P.removeEventListener("pointerdown",Ge),De.disconnect()}},[J,i]),v.useEffect(()=>{if(!z||!J)return;const P=se.current;if(!P)return;const oe=()=>P.scrollTo({top:P.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(oe),ce=[80,240,480].map(ve=>window.setTimeout(oe,ve));return()=>{cancelAnimationFrame(fe),ce.forEach(clearTimeout)}},[J,z]);const U=J?e.find(P=>P.id===J)??null:null,ee=!!U&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(U.status)||P2(U)),le=ee&&U?U:null,B=!(ee&&U&&["needs_approval","recommended","unresolved","monitoring"].includes(U.status))||!!(U!=null&&U.analysisResult);return i==="live"?n.jsx(Gm,{$static:!0,children:n.jsx(cA,{onDetectRisk:j,deckActive:A,deck:A?n.jsx(zA,{threads:e,stageById:o,onAction:g,onRefinement:de,onSaveWorkflow:w,onToggleSaveWorkflow:_,pendingWorkflowIds:k,savedWorkflowIds:C,onReveal:O,onClose:()=>D(!1)}):null})},"live"):n.jsxs(Gm,{$closing:$,children:[n.jsx(ZA,{ref:se,children:z?n.jsx(Ym,{ref:Q,children:J===null?n.jsx(Km,{role:"status",children:Vm[i]}):(()=>{const P=e.find(Me=>Me.id===J);if(!P)return null;const oe=P.status==="analyzing",fe=P.status==="resolved"||P.status==="auto_resolved",ce=P.status==="in_progress",ve=P.status==="needs_approval"||P.status==="recommended",Ce=P.status==="monitoring",_e=P.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(nT,{children:n.jsx(Tm,{thread:P,stage:o[P.id]??0,expanded:ce?!1:B,detachActionable:ee,detachAnalyzing:oe,detachTrail:fe||_e,onToggle:()=>{},onClose:E,onDecide:f,onAction:g,onRefinement:de,onSaveWorkflow:w},P.id)}),(oe||ve||ce||fe||Ce||_e)&&n.jsx(OR,{thread:P,outbound:l[P.id]??[],chat:d[P.id]??[],replying:N.includes(P.id),analyzing:oe,footSlot:F,onCompleteRun:()=>x(P.id),saveWorkflowFlagged:k.includes(P.id)||C.includes(P.id),actionCard:le&&le.id===P.id?n.jsx(av,{thread:le,stage:o[le.id]??0,onAction:g,onRefinement:de,onSaveWorkflow:w,saveIntent:k.includes(le.id),onToggleSaveWorkflow:_,saved:C.includes(le.id),savedConversationally:(d[le.id]??[]).some(Me=>Me.kind==="workflow_saved"),onSend:Me=>M(le.id,Me),replying:N.includes(le.id),onStop:()=>R(le.id)},`action-${le.id}`):void 0},P.id)]})})()}):n.jsx(Ym,{ref:Q,children:K.length===0?n.jsx(Km,{role:"status",children:Vm[i]}):K.map(P=>{const oe=e.find(fe=>fe.id===P);return oe?n.jsx(tT,{ref:fe=>{X.current[P]=fe},children:n.jsx(Tm,{thread:oe,stage:o[P]??0,expanded:W===P,onToggle:()=>Y(fe=>fe===P?null:P),onDecide:f,onAction:g,onRefinement:y,onSaveWorkflow:w})},P):null})})}),z&&J&&U&&n.jsx(XA,{children:n.jsxs(JA,{children:[n.jsx(eT,{ref:q}),U.status==="analyzing"&&!s.includes(U.id)&&n.jsx(IR,{thread:U,onDecide:f}),n.jsx(ov,{ref:ae,onSend:P=>M(J,P),working:N.includes(J),onStop:()=>R(J),placeholder:T$(U.status,N.includes(J))},`composer-${J}`)]})})]},"feed")}const KA=we`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,QA=we`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Gm=p.div`
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

  ${e=>!e.$static&&!e.$closing&&Ee`
    animation: ${QA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Ee`
    animation: ${KA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZA=p.div`
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
`,XA=p.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,JA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,eT=p.div`
  display: flex;
  &:empty { display: none; }
`,Ym=p.div`
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
`,tT=p.div`
  scroll-margin-top: var(--space-5);
`,nT=p.div`
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
`,Km=p.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function rT({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,f=e.length===0,g=()=>{const x=s.trim();!x||o||(i(x),l(""))};return n.jsxs(oT,{children:[n.jsx(aT,{children:f?n.jsxs(iT,{children:[n.jsx(sT,{"aria-hidden":"true",children:n.jsx(lt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(lT,{children:"New page"}),n.jsx(cT,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(dT,{children:[e.map((x,y)=>n.jsx(Qm,{"data-from":x.role,children:n.jsx(uT,{"data-from":x.role,children:x.text})},y)),o&&n.jsx(Qm,{"data-from":"ultron",children:n.jsxs(pT,{"aria-label":"Ultron is replying",children:[n.jsx(Su,{}),n.jsx(Su,{}),n.jsx(Su,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(fT,{children:n.jsxs(mT,{onSubmit:x=>{x.preventDefault(),g()},children:[n.jsx(gT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),n.jsx(vT,{children:n.jsx(Ra,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const oT=p.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,aT=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,iT=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,sT=p.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,lT=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,cT=p.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,dT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Qm=p.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,uT=p.div`
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
`,hT=we`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,pT=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Su=p.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${hT} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fT=p.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,mT=p.form`
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
`,gT=p.textarea`
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
`,vT=p.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,xT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Zm(e,o){const i=xT[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const yT=24,Xm=.25,wT=$v-.03;function qh({className:e}){return n.jsxs(bT,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(kT,{children:n.jsx(lt,{mark:"circle",size:yT,tone:"auto",state:"active"})}),"n"]})}const bT=p.span`
  ${Mv}
`,kT=p.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${Um}em;
  height: ${Um}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${Xm}em;
  margin-right: ${Xm+wT}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function CT({onNew:e}){return n.jsxs(_T,{children:[n.jsx(jT,{}),n.jsx(ST,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(rc,{size:16})})]})}const _T=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,jT=p(qh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,ST=p.span`
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
`,$T=45;function MT({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},$T);return()=>clearInterval(f)},[e]);const l=i>=e.length;return n.jsxs(NT,{className:o,children:[e.slice(0,i),!l&&n.jsx(LT,{"aria-hidden":"true",children:"|"})]})}const NT=p.span`
  white-space: nowrap;
`,RT=we`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,LT=p.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${RT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,$u=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function AT(){const e=v.useMemo(()=>["All",...Array.from(new Set($u.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?$u:$u.filter(l=>l.tag===o);return n.jsx(TT,{children:n.jsxs(ET,{children:[n.jsxs(IT,{children:[n.jsx(lt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(PT,{children:[n.jsx(zT,{children:"Memory"}),n.jsx(OT,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(DT,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(FT,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(BT,{children:s.map((l,d)=>n.jsx(HT,{children:n.jsxs(WT,{children:[n.jsx(UT,{children:l.title}),n.jsx(qT,{children:l.detail})]})},d))})]})})}const TT=p.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,ET=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,IT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,PT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,zT=p.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,OT=p.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,DT=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,FT=p.button`
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
`,BT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,HT=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,WT=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,UT=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,qT=p.span`
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
`;const th=[{id:"employees",label:"Employees",icon:n.jsx(Xr,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(bn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(mh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(Mo,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Di,{size:16})}];p.div`
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
`;function VT({collectionId:e}){const o=th.find(i=>i.id===e)??th[0];return n.jsxs(GT,{children:[n.jsxs(YT,{children:[n.jsx(KT,{children:o.label}),n.jsx(Na,{children:"Account database"})]}),n.jsxs(QT,{role:"status",children:[n.jsx(ZT,{"aria-hidden":"true",children:n.jsx(fg,{size:24})}),n.jsxs(XT,{children:[o.label," — demo stub"]}),n.jsxs(JT,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const GT=p.div`
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
`,YT=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,KT=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,QT=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,ZT=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,XT=p.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,JT=p.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function Rv({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const eE="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",tE="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",nE="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",rE="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",oE="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",aE="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",iE="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",sE=560,Lv=320,Sr="cubic-bezier(0.22, 1, 0.36, 1)",Av=140,Tv={landing:0,workplace:20,loading:40,questions:58},ki=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:gg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:Sg,title:"1099",caption:"Independent contractors."},{id:"both",icon:vg,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:bn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:xg,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:jg,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Ni,title:"One location",caption:"A single site."},{id:"multi",icon:vh,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:mh,title:"Client sites",caption:"Out at client locations."}]}];function lE({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[f,g]=v.useState(!1),x=pc(),y=v.useRef(null),w=v.useCallback($=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{$(),g(!1),y.current=null},x?0:Lv))},[x]);v.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),_=()=>w(()=>i("workplace")),C=$=>{l(L=>({...L,...$})),h(!0),w(()=>i("loading"))},M=$=>{const L={...s,...$};if(l(L),L.companyWebsite){e(L);return}w(()=>i("questions"))},N=$=>e({...s,...$}),R=d?1:o==="landing"?0:.4,[S,j]=v.useState(!1),O=S;return n.jsxs(IE,{children:[n.jsx(Hh,{links:R}),n.jsx(Wh,{}),n.jsx(PE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(Rv,{size:22})}),n.jsx(zE,{children:n.jsxs(OE,{children:[o!=="landing"&&n.jsx(DE,{children:n.jsx(Ev,{children:n.jsx(lt,{mark:O?"lines":"magnetic",size:Av,tone:"auto",state:"active",motionSpeed:O?1.7:1,cellCount:Tv[o],"aria-label":"Ultron"})})}),n.jsxs(BE,{$exiting:f,children:[o==="landing"&&n.jsx(xE,{onNext:_}),o==="workplace"&&n.jsx(fc,{children:n.jsx(bE,{onAnswer:C})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(CE,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:M,onProcessingChange:j}),o==="questions"&&n.jsx(LE,{onComplete:N})]})]})})]})}const cE="Lead the work that matters.",dE="Show us your company and we'll set up the work.",uE=41e3,Jm=[{name:"Levi's Stadium",src:eE},{name:"ProCare HR",src:tE},{name:"Florida Panthers",src:nE},{name:"Express Healthcare",src:rE},{name:"ModSquad",src:oE},{name:"Titan Medical Group",src:aE},{name:"United Staffing Solutions",src:iE}],e0=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],hE=6e3;function pE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function fE(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function mE(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const gE=[{id:"google",label:"Continue with Google",mark:pE},{id:"microsoft",label:"Continue with Microsoft",mark:fE},{id:"apple",label:"Continue with Apple",mark:mE}];function vE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function xE({onNext:e}){const[o,i]=v.useState(""),[s,l]=v.useState(null),d=v.useRef(null);return v.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(WE,{children:[n.jsx(qE,{children:n.jsxs(VE,{children:[n.jsx(Ev,{children:n.jsx(lt,{mark:"magnetic",size:Av,tone:"auto",state:"active",cellCount:Tv.landing,"aria-label":"Ultron"})}),n.jsx(CI,{children:cE}),n.jsxs(GE,{children:[n.jsx(_I,{children:dE}),n.jsxs(YE,{"aria-label":"Get started",children:[n.jsx(KE,{children:gE.map(h=>{const f=h.mark;return n.jsx(QE,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(f,{}),onClick:e,children:h.label},h.id)})}),n.jsx(ZE,{"aria-hidden":"true",children:n.jsx(XE,{children:"or start with email"})}),n.jsxs(JE,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||vE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx($r,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(tI,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(eI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(nI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(UE,{"aria-hidden":"true"}),n.jsx(yE,{})]})}function yE(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%e0.length),hE);return()=>clearInterval(s)},[]);const i=e0[e];return n.jsx(rI,{children:n.jsxs(oI,{children:[n.jsx(wE,{}),n.jsxs(vI,{children:[n.jsx(xI,{children:`“${i.quote}”`}),n.jsxs(yI,{children:[n.jsx(nr,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(wI,{children:[n.jsx(bI,{children:i.name}),n.jsx(kI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(hI,{children:[n.jsx(pI,{children:"Trusted by frontline operators"}),n.jsxs(mI,{"aria-label":"Operators using Teambridge",children:[n.jsx(t0,{children:Jm.map(s=>n.jsx(n0,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(t0,{"aria-hidden":"true",children:Jm.map(s=>n.jsx(n0,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function wE(){const e=EE(uE,1600);return n.jsxs(aI,{children:[n.jsxs(iI,{children:[n.jsx(lI,{"aria-hidden":"true"}),n.jsx(cI,{children:"Ultron Index · Live"})]}),n.jsx(dI,{children:e.toLocaleString("en-US")}),n.jsx(uI,{children:"pieces of work Ultron performed this week"})]})}function bE({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(AE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(mc,{children:"Where do you work?"}),n.jsx($I,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(zv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(Ov,{children:[n.jsx(mP,{"aria-hidden":"true",children:n.jsx(xh,{size:18})}),n.jsx(Dv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(Fv,{children:n.jsx(Ra,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(gP,{children:n.jsx(Bv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Mu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],kE=820;function CE({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(jE,{website:e,onDone:i,onProcessingChange:s}):n.jsx(RE,{failedWebsite:o,onDone:i})}const _E=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function jE({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=TE(e),d=Mu.length,[h,f]=v.useState(1),[g,x]=v.useState(!1),y=v.useRef(null),w=pc();v.useEffect(()=>{if(!g)return;const N=window.requestAnimationFrame(()=>{const R=y.current,S=R==null?void 0:R.closest("main");S?S.scrollTo({top:S.scrollHeight,behavior:w?"auto":"smooth"}):R==null||R.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame(N)},[g,w]),v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=v.useMemo(()=>w$(e),[e]),_=v.useMemo(()=>_E.reduce((N,R)=>N+k[R].length,0),[k]),C=v.useCallback(()=>{g?o({}):h>=d?x(!0):f(N=>Math.min(N+1,d))},[h,g,d,o]);v.useEffect(()=>{const N=R=>{R.key.toLowerCase()==="t"&&(R.preventDefault(),C())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[C]);const M=Mu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(fc,{$wide:!0,onClick:()=>{g||C()},children:[n.jsx(mc,{children:g?"Nearly there! Your free account is taking shape.":`${M}…`},g?"done":M),n.jsx(gc,{children:g?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(II,{role:"status","aria-live":"polite",$complete:g,children:[n.jsxs(DI,{$running:!g,children:[n.jsx(xh,{size:14}),l,g&&n.jsxs(n.Fragment,{children:[n.jsx(FI,{"aria-hidden":"true",children:"·"}),n.jsxs(BI,{children:[n.jsx(un,{size:13})," read ",_," signals"]})]})]}),n.jsx(PI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:Mu.map((N,R)=>{const S=g||R+1<h?"done":R+1===h?"working":"pending";return n.jsx(zI,{"data-status":S,children:S!=="pending"&&n.jsx(OI,{$working:S==="working"})},N)})})]}),n.jsx(ME,{learned:k,host:l,completed:g?d:h-1,done:g}),g&&n.jsxs(n.Fragment,{children:[n.jsx(rP,{children:n.jsx(oP,{children:"Consider it handled."})}),n.jsx(iP,{children:n.jsx(ze,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(lg,{size:16}),children:"Looks good, continue"})}),n.jsx(sP,{children:n.jsx(Bv,{type:"button",onClick:()=>{f(1),x(!1)},children:"Start over"})}),n.jsx(lP,{ref:y,"aria-hidden":"true"})]})]})})}const SE={"Healthcare / Clinical Staffing":yh,"Skilled Trades / Construction Labor":ch,"Warehouse / Logistics & Light Industrial":gh,"Security / Guarding Services":ec,"Home Care / In-Home Support":Cg,"Agriculture / Seasonal Labor":fh,"Hospitality / Events Staffing":nc,"Call Center / BPO Staffing":Ri},$E={Business:{icon:Ni,color:"blue"},Workforce:{icon:Xr,color:"purple"},Operations:{icon:Mg,color:"orange"},Compliance:{icon:Di,color:"green"}};function ME({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,f]=v.useState(!1),g=SE[e.workforce_type]??vh;return n.jsxs(WI,{children:[n.jsxs(UI,{children:[n.jsx(qI,{children:n.jsxs(GI,{children:[n.jsx(YI,{"aria-hidden":"true",children:d?n.jsx(Ht,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(g,{size:20}),n.jsx(KI,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:x=>f(x.currentTarget.naturalWidth>=32),onError:()=>f(!1)})]})}),n.jsxs(QI,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"240px",$h:"1em"}),n.jsx(Ht,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(ZI,{children:e.workforce_type}),n.jsx(XI,{children:l.name})]}),n.jsx(JI,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"110px",$h:"0.9em"}),n.jsx(Ht,{$w:"150px",$h:"0.9em"}),n.jsx(Ht,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Nu,{children:[n.jsx(bn,{size:14}),n.jsxs(Ru,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(Nu,{children:[n.jsx(Ni,{size:14}),n.jsxs(Ru,{children:["Part of ",l.parent]})]}),n.jsxs(Nu,{children:[n.jsx(lh,{size:14}),n.jsx(Ru,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((x,y)=>{const w=i<2,{icon:k,color:_}=$E[x.label]??{icon:Ni,color:"neutral"};return n.jsx(VI,{style:{"--group-i":w?y+1:y},children:w?n.jsxs(n.Fragment,{children:[n.jsx(r0,{"aria-hidden":"true",children:n.jsx(Ht,{$w:"20px",$h:"20px",$round:!0})}),n.jsxs(o0,{children:[n.jsx(a0,{as:"div",children:n.jsx(Ht,{$w:"112px",$h:"0.95em"})}),n.jsxs(i0,{children:[n.jsx(Ht,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"64px",$h:"20px",$round:!0})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(r0,{"aria-hidden":"true",children:n.jsx(k,{size:20})}),n.jsxs(o0,{children:[n.jsx(a0,{children:x.label}),n.jsx(i0,{children:x.tags.map(C=>n.jsx(er,{size:"sm",variant:"subtle",color:_,children:C},C))})]})]})},`${x.label}-${w?"loading":"ready"}`)})]}),n.jsx(eP,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(s0,{children:[n.jsx($g,{size:16}),"Configured for you"]}),n.jsx(tP,{children:e.configured.map(x=>n.jsxs(nP,{children:[n.jsx(Cn,{size:16}),x]},x))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(s0,{as:"div",children:[n.jsx(Ht,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ht,{$w:"132px",$h:"0.95em"})]}),n.jsxs(HI,{children:[n.jsx(Ht,{$h:"0.85em",$w:"84%"}),n.jsx(Ht,{$h:"0.85em",$w:"72%"}),n.jsx(Ht,{$h:"0.85em",$w:"78%"}),n.jsx(Ht,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const NE=[{icon:yh,label:"Travel nurses"},{icon:nc,label:"Event staff"},{icon:ec,label:"Security guards"},{icon:gh,label:"Warehouse temps"}];function RE({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(fc,{children:[e&&n.jsx(aP,{children:"No problem — let's set it up together."}),n.jsx(mc,{children:"What workforce do you need help with?"}),n.jsx(gc,{children:"Say it in your own words — or grab one of these."}),n.jsx(MI,{children:NE.map(({icon:h,label:f})=>n.jsxs(NI,{type:"button",onClick:()=>o({workforceType:f}),children:[n.jsx(h,{size:16}),f]},f))}),n.jsx(zv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(Ov,{children:[n.jsx(Dv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(Fv,{children:n.jsx(Ra,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function LE({onComplete:e}){const o=pc(),[i,s]=v.useState(0),l=v.useRef({}),d=ki[i],h=f=>{l.current={...l.current,[d.key]:f.title};const g=i+1;g>=ki.length?e(l.current):s(g)};return n.jsxs(fc,{children:[n.jsx(cP,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ki.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ki.length}`,children:ki.map((f,g)=>n.jsx(dP,{"data-filled":g<=i||void 0},f.key))}),n.jsx(mc,{children:d.prompt}),n.jsx(gc,{children:d.sub}),n.jsx(uP,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,g)=>{const x=f.icon;return n.jsxs(hP,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>h(f),children:[n.jsx(Iv,{"aria-hidden":"true",children:n.jsx(x,{size:20})}),n.jsxs(pP,{children:[n.jsx(RI,{children:f.title}),n.jsx(LI,{children:f.caption})]})]},f.id)})})]},d.key)}function AE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function TE(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function EE(e,o){const i=pc(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/o),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function pc(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const IE=p.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,PE=p.button`
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
`,zE=p.main`
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
`,OE=p.div`
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
  ${e=>e.$augment&&Ee`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,DE=p.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Ev=p.span`
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
`,FE=we`
  from { opacity: 1; }
  to   { opacity: 0; }
`,BE=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Ee`
      animation: ${FE} ${Lv}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&Ee`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,HE=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,WE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${HE} 560ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,UE=p.div`
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
`,qE=p.div`
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
`,VE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Vh=we`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,GE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Vh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YE=p.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,KE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,QE=p(ze)`
  && {
    width: 100%;
    ${Fn}
  }
`,ZE=p.div`
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
`,XE=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,JE=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,eI=p(ze)`
  && {
    width: 100%;
  }
`,tI=p(Ug)`
  && [class*='shell'] {
    ${Fn}
  }
  && input {
    background: transparent;
  }
`,nI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,rI=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Vh} var(--duration-slow) var(--ease-out) both;

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
`,oI=p.div`
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
`,aI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,iI=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,sI=we`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,lI=p.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${sI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,dI=p.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,uI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,hI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,pI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,fI=we`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,mI=p.div`
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
`,t0=p.div`
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
`,n0=p.img`
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
`,gI=we`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,vI=p.figure`
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
  animation: ${gI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xI=p.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,yI=p.figcaption`
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
`,wI=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,bI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,kI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,CI=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Vh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_I=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,jI=we`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,fc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${jI} ${sE}ms ${Sr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,mc=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,gc=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,SI=we`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,$I=p(gc)`
  animation: ${SI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MI=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,NI=p.button`
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
    ${Sv}
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
`,Iv=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,RI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,LI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Pv=we`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,AI=we`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,TI=we`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,EI=we`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,II=p.div`
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

  ${e=>e.$complete&&Ee`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,PI=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Ee`
    & > * > * {
      animation: ${EI} 900ms ${Sr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,zI=p.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,OI=p.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Ee`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${TI} ${kE+380}ms ${Sr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,DI=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,FI=p.span`
  color: var(--color-content-tertiary);
`,BI=p.span`
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
  animation: ${AI} 2.2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 7%, transparent);
    animation: none;
  }
`,HI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,WI=p.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,qi=Ee`
  animation: ${Pv} var(--duration-base) ${Sr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UI=p.div`
  ${Fn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${qi}
`,qI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${qi}
`,VI=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${qi}
`,r0=p.span`
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
`,o0=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`,GI=p.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,YI=p.span`
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
`,KI=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,QI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,ZI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,XI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,JI=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,Nu=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Ru=p.span`
  color: var(--color-content-primary);
`,eP=p.div`
  ${Fn}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${qi}
`,a0=p.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,i0=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,s0=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,tP=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,nP=p.li`
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
`,rP=p.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${qi}
`,oP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,aP=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,iP=p.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,sP=p.div`
  display: flex;
  justify-content: center;
`,lP=p.div`
  width: 100%;
  height: 0;
`,cP=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,dP=p.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,uP=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,hP=p.button`
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
  animation: ${Pv} var(--duration-base) ${Sr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Iv} {
    margin-bottom: 0;
  }

  &:hover {
    ${Sv}
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
`,pP=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,zv=p.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Fn}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Ov=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,fP=we`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,mP=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${fP} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Dv=p.textarea`
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
`,Fv=p(ph)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,gP=p.div`
  margin-top: var(--space-3);
`,Bv=p.button`
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
`;function vP({onEnterApp:e}){return n.jsx(lE,{onComplete:o=>e==null?void 0:e(o)})}const xP=768,Hv=`(max-width: ${xP-1}px)`;function Gh(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function Wv(){return Gh(Hv)}const yP="48px",wP="240px",l0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",bP=p.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?wP:yP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Ee`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Ee`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,kP=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,CP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,_P=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,jP=p.button`
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
`,SP=p.div`
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
`,$P=p.span`
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
`,c0=p.div`
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
`,Lu=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,MP="var(--gradient-ai)",Uv=p.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Ee`
      background: var(--color-bg-primary, white);
      box-shadow: ${l0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Ee`
      background: ${MP};
      box-shadow: ${l0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,qv=p.button`
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
`,Vv=p.span`
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
`,Gv=p.div`
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
`,NP=p.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Au=p.hr`
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
`;const RP=p.button`
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
`,LP=p.div`
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
`,AP=p.span`
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
`;function Tu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(Uv,{$isActive:l,$isAi:s,children:n.jsxs(qv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(Gv,{children:[e.hasUnread&&n.jsx(NP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(Vv,{children:e.label}),o&&i&&n.jsx(Na,{variant:"primary",children:"New"})]})})}function TP({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}){const[y,w]=v.useState(!1);return n.jsx(bP,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(kP,{$isExpanded:y,children:[n.jsxs(CP,{children:[n.jsxs(jP,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[n.jsx(SP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&n.jsxs(n.Fragment,{children:[n.jsx($P,{children:s.name}),n.jsx(c0,{children:n.jsx(im,{})})]})]}),n.jsx(Lu,{children:e.map(k=>n.jsx(Tu,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Au,{}),n.jsx(Lu,{children:o.map(k=>n.jsx(Tu,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),n.jsxs(_P,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(Au,{}),n.jsx(Lu,{children:i.map(k=>n.jsx(Tu,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),n.jsx(Au,{}),n.jsx(Uv,{$isActive:!1,children:n.jsxs(qv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[n.jsx(Gv,{children:n.jsx(F2,{})}),y&&n.jsx(Vv,{children:"Settings"})]})}),n.jsxs(RP,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[n.jsx(LP,{$color:l.avatarColor,children:l.initials}),y&&n.jsxs(n.Fragment,{children:[n.jsx(AP,{children:l.name}),n.jsx(c0,{children:n.jsx(im,{})})]})]})]})]})})}const EP=270,IP=p.nav`
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
`,PP=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,zP=p.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,OP=p.h2`
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
`,DP=p.div`
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
`,FP=p.button`
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
`,BP=p.div`
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
`,HP=p.button`
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
`;const WP=p.span`
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
`,UP=p.div`
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
`,qP=we`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,VP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${qP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Yv=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,GP=we`
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
`,YP=we`
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
`,KP=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,QP=we`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,ZP=we`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,nh=420,XP=180,JP=nh-60,ez=p.button`
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
  animation: ${Yv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tz=p.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,nz=p.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${GP} 2.4s ease-in-out infinite;

  /* The measured mobile rectangle already includes the row's selected-state
     inset. Remove the copied button's own outer margin inside the portal so its
     icon, label, radius, width, and height land exactly over the original. */
  ${e=>e.$mobile&&Ee`
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
    animation: ${YP} 2.4s ease-out infinite;
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
`,rz=p.div`
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
  font-family: ${KP};
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
`,Kv=p.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${QP} ${nh}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${XP}ms;
    animation-delay: ${nh-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,d0=p.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${ZP} 420ms ${JP}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Yv} 200ms both;
    transform: none;
  }
`,u0=p.button`
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
`,oz=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Ee`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,az=p.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,iz=p.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sz=p.div`
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
`,lz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,cz=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,dz=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Qv=p.div`
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
`;function uz(){return n.jsxs(Kv,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function hz(){return n.jsxs(Kv,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function Zv({prompt:e,onDismiss:o,placement:i="right",children:s}){const l=v.useRef(null),[d,h]=v.useState(null);return v.useLayoutEffect(()=>{const f=l.current;if(!f)return;const g=()=>{const w=(f.firstElementChild??f).getBoundingClientRect();h({left:w.left,top:w.top,width:w.width,height:w.height})};g();const x=new ResizeObserver(g);return x.observe(f),window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{x.disconnect(),window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(tz,{ref:l,"aria-hidden":"true",children:s}),d&&To.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(ez,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(nz,{$mobile:i==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(rz,{$placement:i,role:"status","aria-live":"polite",style:i==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:i==="above"?n.jsxs(n.Fragment,{children:[n.jsx(d0,{children:e}),n.jsx(hz,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(uz,{}),n.jsx(d0,{children:e})]})})]}),document.body)]})}function Xv(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function pz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Yh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function fz({item:e}){return n.jsx(kn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(Qv,{children:e.icon??n.jsx(Xv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Yh})}function mz({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-f.length;return n.jsxs(oz,{$outlined:e.outlined,children:[n.jsxs(HP,{onClick:()=>i(x=>!x),"aria-expanded":o,children:[n.jsx(UP,{children:o?n.jsx(Dn,{size:16}):n.jsx(_n,{size:16})}),n.jsx(WP,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(VP,{children:[f.map(x=>{const y=n.jsx(kn,{label:n.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:n.jsx(Qv,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Yh});return x.spotlightPrompt?n.jsx(Zv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,children:y},x.id):n.jsx(v.Fragment,{children:y},x.id)}),g>0&&n.jsxs(u0,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(u0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function gz({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=EP,onWidthChange:k,minWidth:_=220,maxWidth:C=520}){const M=y!==void 0,N=v.useRef(null),[R,S]=v.useState(!1);return v.useEffect(()=>{if(!R||!k)return;const j=N.current;if(!j)return;const O=j.getBoundingClientRect().left,$=A=>{const D=Math.min(C,Math.max(_,A.clientX-O));k(D)},L=()=>S(!1);window.addEventListener("mousemove",$),window.addEventListener("mouseup",L);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",L),document.body.style.userSelect=E,document.body.style.cursor=""}},[R,k,_,C]),n.jsxs(IP,{ref:N,$isVisible:o,$width:w,$isResizing:R,"aria-label":"Secondary navigation",children:[n.jsxs(PP,{children:[(e||x)&&n.jsxs(zP,{children:[n.jsx(OP,{children:e}),x]}),d&&!M&&n.jsxs(DP,{children:[n.jsx(Wg,{size:"sm",placeholder:"Search...",value:h,onChange:j=>f==null?void 0:f(j.target.value)}),n.jsx(FP,{onClick:g,"aria-label":"Filter",children:n.jsx(pz,{})})]})]}),M?y:n.jsxs(BP,{children:[s,i.map(j=>j.type==="single"?n.jsx(fz,{item:j.item},j.item.id):j.type==="group"?n.jsx(mz,{group:j.group},j.group.id):j.type==="divider"?n.jsx(cz,{},j.id):n.jsx(az,{children:j.label.label},j.label.id))]}),l.length>0&&n.jsxs(iz,{children:[n.jsx(lz,{}),l.map(j=>n.jsx(kn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:n.jsx(dz,{children:j.icon??n.jsx(Xv,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:Yh},j.id))]}),k&&o&&n.jsx(sz,{$isResizing:R,onMouseDown:j=>{j.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const vz=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,xz=p.div`
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
`,Jv=p.div`
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
`,yz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,wz=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function bz(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function h0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function p0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function kz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Cz({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const g=o.filter(w=>w.variant==="secondary"),x=o.filter(w=>w.variant==="primary"),y=Gh("(prefers-color-scheme: dark)");return n.jsxs(vz,{$noBorder:l,children:[n.jsx(xz,{children:typeof e=="string"?n.jsx(Jv,{children:e}):e}),n.jsxs(yz,{children:[n.jsxs(wz,{children:[n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:n.jsx(bz,{})}),g.map(w=>n.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(p0,{}),trailingArtwork:n.jsx(h0,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>n.jsx(ze,{variant:"primary",size:"sm",leadingArtwork:n.jsx(p0,{}),trailingArtwork:n.jsx(h0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(kz,{})}),s&&n.jsx(Z0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const _z=p.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,jz=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,Sz=p.div`
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
`,$z=p.main`
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
`,f0="tb:secondary-nav-width",m0=270,g0=220,v0=520;function Mz({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:_,showSearch:C,searchValue:M,onSearchChange:N,onFilterClick:R,headerSlot:S,bodyContent:j,heading:O,actions:$,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:D,onPonderClick:G,onDotsClick:K,children:W,showSecondaryNav:Y=!0,showTopNav:X=!0}){const[ae,de]=v.useState(()=>{if(typeof window>"u")return m0;const se=window.localStorage.getItem(f0),Q=se?parseInt(se,10):NaN;return Number.isFinite(Q)?Math.min(v0,Math.max(g0,Q)):m0});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(f0,String(ae))},[ae]),n.jsxs(_z,{children:[n.jsx(TP,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}),n.jsxs(jz,{children:[Y&&n.jsx(gz,{heading:y,menuEntries:w,menuHeader:k,pageEntries:_,isVisible:!0,showSearch:C,searchValue:M,onSearchChange:N,onFilterClick:R,headerSlot:S,bodyContent:j,width:ae,onWidthChange:de,minWidth:g0,maxWidth:v0}),n.jsxs(Sz,{children:[X&&n.jsx(Cz,{heading:O,actions:$,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:D,onPonderClick:G,onDotsClick:K}),n.jsx($z,{children:W})]})]})]})}function Nz({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const y=h(),w=y-d.current;Math.abs(w)<e||(w>0&&y>o?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",f,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",f)}},[e,o,i]),s}const Rz=p.button`
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
`,Lz=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,Az=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function x0({label:e,isOpen:o,onClick:i,ariaLabel:s}){return n.jsxs(Rz,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[n.jsx(Lz,{children:e}),n.jsx(Az,{children:n.jsx(Dn,{size:14})})]})}const Tz=p.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,Ez=p.div`
  height: 48px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,Iz=p.button`
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
`,Pz=p.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,zz=p(qh)`
  font-size: var(--text-lg, 1.125rem);
`,Oz=p.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function Dz({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const Fz=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:h,onSecondaryClick:f,onTertiaryClick:g},x){return n.jsx(Tz,{ref:x,$hidden:d,children:n.jsxs(Ez,{children:[n.jsx(Iz,{onClick:h,"aria-label":"Open navigation",children:n.jsx(Dz,{size:18})}),n.jsxs(Pz,{children:[n.jsx(x0,{label:i??(o==="Ultron"?n.jsx(zz,{}):o),isOpen:l==="secondary",onClick:f,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(Oz,{"aria-hidden":"true",children:"›"}),n.jsx(x0,{label:s,isOpen:l==="persona",onClick:g??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),Bz=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,Hz=p.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${Bz} 160ms ease-out;
`;function Wz({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(Hz,{onClick:e,"aria-hidden":"true"})}const Uz=we`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,qz=p.div`
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
  animation: ${Uz} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Vz=p.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,Gz=p.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,Yz=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,Kz=p.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Qz=p.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function ex({title:e,children:o,ariaLabel:i,titleAction:s}){return n.jsxs(qz,{role:"dialog","aria-modal":"true","aria-label":i??(typeof e=="string"?e:void 0),children:[n.jsx(Vz,{children:n.jsx(Gz,{"aria-hidden":"true"})}),e&&n.jsxs(Yz,{children:[n.jsx(Kz,{children:e}),s]}),n.jsx(Qz,{children:o})]})}const Kh=p.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Zz=p.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ql=p.button`
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
`,y0=p.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Vl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,wa=p.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function Xz({moduleLabel:e,entries:o,onSelect:i,onHome:s,onNewPage:l}){const d=e==="Ultron",h=d&&s?n.jsx(Jz,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),i()},children:n.jsx(w0,{})}):n.jsx(w0,{});return n.jsx(ex,{title:d?h:e,ariaLabel:`${e} sections`,titleAction:d&&l?n.jsx(eO,{type:"button","aria-label":"New page",onClick:()=>{l(),i()},children:n.jsx(rc,{size:16})}):void 0,children:n.jsx(Kh,{children:o.map(f=>{if(f.type==="single"){const x=f.item;return n.jsxs(ql,{$active:x.isActive,onClick:()=>{var y;(y=x.onClick)==null||y.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Vl,{children:x.icon}),n.jsx(wa,{children:x.label}),x.isActive&&n.jsx(Gl,{"aria-hidden":"true",children:n.jsx(Cn,{size:16})})]},x.id)}if(f.type!=="group")return null;const g=f.group;return n.jsxs("div",{children:[n.jsx(Zz,{children:g.label}),g.children.map(x=>{const y=n.jsxs(ql,{$active:x.isActive,$indent:!0,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Vl,{children:x.icon}),n.jsx(wa,{children:x.label}),x.isActive&&n.jsx(Gl,{"aria-hidden":"true",children:n.jsx(Cn,{size:16})})]});return x.spotlightPrompt?n.jsx(Zv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:y},x.id):n.jsx("div",{children:y},x.id)})]},g.id)})})})}const w0=p(qh)`
  font-size: 14px;
`,Al="44px",Jz=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  /* all: unset resets box-sizing to content-box, which would add the padding
     below on top of the minimum instead of inside it. */
  box-sizing: border-box;
  min-height: ${Al};
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
`,eO=p.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${Al};
  height: ${Al};
  /* Half the growth clawed back off the trailing edge, so the pencil stays on
     the same optical inset it sat on at 32px while the target around it grows
     outward into the row's padding. */
  margin-right: calc((${Al} - var(--space-8, 32px)) / -2);
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
`,tO=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,nO=p.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rO=p.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function oO({personas:e,activeId:o,onSelect:i}){return n.jsx(ex,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Kh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(ql,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(wa,{as:"span",children:n.jsxs(tO,{children:[n.jsx(nO,{children:s.name}),n.jsx(rO,{children:s.role})]})}),l&&n.jsx(Gl,{"aria-hidden":"true",children:n.jsx(Cn,{size:16})})]},s.id)})})})}const aO=we`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,iO=p.aside`
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
  animation: ${aO} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,sO=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,lO=p.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,cO=p.button`
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
`,dO=p.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,uO=60;function hO({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},f=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<uO&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[o]),n.jsxs(iO,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(sO,{children:[n.jsx(lO,{children:e??"Navigation"}),n.jsx(cO,{onClick:o,"aria-label":"Close navigation",children:n.jsx(zi,{size:18})})]}),n.jsx(dO,{children:i})]})}const pO=p.span`
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
`,Eu=p(ql)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function fO({activeId:e,groups:o,user:i,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(hO,{title:"Navigation",onDismiss:h,children:n.jsxs(Kh,{children:[o.map((f,g)=>n.jsxs("div",{children:[g>0&&n.jsx(y0,{"aria-hidden":"true"}),f.items.map(x=>{const y=x.id===e;return n.jsxs(Eu,{$active:y,$disabled:x.disabled,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),d(x.id),h()},"aria-pressed":y,"aria-disabled":x.disabled||void 0,children:[n.jsx(Vl,{children:x.icon}),n.jsx(wa,{children:x.label}),y&&n.jsx(Gl,{"aria-hidden":"true",children:n.jsx(Cn,{size:16})})]},x.id)})]},f.id)),n.jsx(y0,{"aria-hidden":"true"}),n.jsxs(Eu,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Vl,{children:n.jsx(F2,{})}),n.jsx(wa,{children:"Settings"})]}),n.jsxs(Eu,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${i.name}`,children:[n.jsx(pO,{$color:i.avatarColor,"aria-hidden":"true",children:i.initials}),n.jsx(wa,{children:"Account"})]})]})})}const b0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],mO=p.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,gO=p.main`
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
`;function vO(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:g,onSettingsClick:x,onMobileNavigate:y,onSelectPersona:w,onHome:k,onNewPage:_,openSecondaryNav:C,children:M}=e,[N,R]=v.useState(null),S=Nz({deadZonePx:8,topThresholdPx:20}),j=N===null&&S==="down",O=v.useMemo(()=>{if(!i)return null;const A=b0.find(D=>D.id===i);return(A==null?void 0:A.name)??null},[i]),$=()=>R(null),L=A=>R(A);v.useEffect(()=>{C&&R("secondary")},[C]);const E=N!==null;return n.jsxs(mO,{children:[n.jsx(Fz,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:O,openOverlay:N,hidden:j,onHamburgerClick:()=>L("drawer"),onSecondaryClick:()=>{L(h.length>0?"secondary":"drawer")},onTertiaryClick:O?()=>L("persona"):void 0}),n.jsx(gO,{children:M}),E&&n.jsx(Wz,{onDismiss:$}),N==="secondary"&&n.jsx(Xz,{moduleLabel:l,entries:h,onSelect:$,onHome:k,onNewPage:_}),N==="persona"&&n.jsx(oO,{personas:b0,activeId:i,onSelect:A=>{w(A),$()}}),N==="drawer"&&n.jsx(fO,{activeId:o,groups:s,user:f,onUserClick:g,onSettingsClick:x,onSelectModule:A=>y(A),onDismiss:$})]})}function xO(e){if(Wv()&&e.mobileNav){const i=e.mobileNav;return n.jsx(vO,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,onHome:i.onHome,onNewPage:i.onNewPage,openSecondaryNav:i.openSecondaryNav,children:e.children})}return n.jsx(Mz,{...e})}const yO="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",wO="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",bO=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],kO=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],CO={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},_O=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],jO=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],SO=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function $O(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function tx(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function MO(e){const o=kO.find(i=>i.match.test(e));return o?o.profile:CO}function nx(e,o){const i=MO(e),s=$O(tx(e||"teambridge")^o),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<o;){const f=`${l(_O)} ${l(jO)}`;if(h.has(f))continue;h.add(f);const g=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(SO),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const rx=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],ox=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],NO="Team coverage";function RO(e){var o;return((o=rx.find(i=>i.match.test(e)))==null?void 0:o.shapes)??ox}function k0(e,o="Saturday"){const i=nx(e,8),[s,l,d,h]=i,f=4+tx(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${f} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const LO=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],C0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ax=["6a–2p","2p–10p","10p–6a"],AO=[4,3,3,4,4,3,3],TO=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],_0={bands:ax,perDay:AO};function EO(e){var o;return e?((o=TO.find(i=>i.match.test(e)))==null?void 0:o.shape)??_0:_0}function rh(e,o){var x;const i=nx(e,12),{bands:s,perDay:l}=EO(o);let d=0;const h=LO.map((y,w)=>{const k=[];for(let _=0;_<l[w];_++){const C=i[d%i.length].name.split(" ")[0];d++,k.push({time:s[_%s.length],who:C})}return{label:y,shifts:k}}),f=ix(h);f>=0&&(h[f].shifts[0]={...h[f].shifts[0],who:"Open",flag:"open"});const g=(x=h[1])!=null&&x.shifts.length?1:h.findIndex(y=>y.shifts.length);return g>=0&&g!==f&&(h[g].shifts[0]={...h[g].shifts[0],flag:"watch"}),h}function IO(e){const o=rx.find(d=>d.match.test(e)),i=(o==null?void 0:o.shapes[0])??ox[0],l=rh(e,i).map((d,h)=>{const f=d.shifts.slice(0,3);for(;f.length<3;){const g=f.length;f.push({time:ax[g],who:`Coverage ${h+1}-${g+1}`})}return{...d,shifts:f}});return{label:(o==null?void 0:o.label)??NO,shape:"Full-week shift coverage",week:l}}function ix(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let i=e.length-1;i>=0;i--)if(e[i].shifts.length)return i;return-1}function j0(e){const o=ix(e);return o>=0?C0[o]:C0[5]}const PO=1100,zO=440,sx=4,lx=4,cx=150,OO=Math.ceil(cx/sx)*lx,Iu=320,DO=720,Pu=2e3,FO=950,S0=1600,dx=249,BO=68,HO=229,WO=47,UO=56,qO=8,VO=dx,GO=8,Qh=84,Ii=81,Yl=48,$0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],YO=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],KO="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",QO='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',M0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",ZO="Time for a test run, so you can see how I work? Let's simulate a last minute call out.";function XO(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function JO(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Qh-Ii} rows`,blocks:[{label:"Held for you, none dropped",bullets:YO.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Ii} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function eD(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Yl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function tD(e,o,i,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},ux(i,s),hx(o)]}function nD(e,o,i,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},ux(i,s),hx(o)]}function ux(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function hx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function rD(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function oD(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function Tl(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function N0(e){return e.includes("	")||e.trim().includes(`
`)}function aD(e){return e.scrollHeight-e.clientHeight>VO}function iD(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function sD(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function lD({text:e}){const o=Math.max(0,e.length-OO);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(i,s)=>n.jsx(UD,{children:i},o+s))]})}function R0({active:e,open:o,closeLabel:i,onClose:s,onScrollToEnd:l,showScrollCue:d=!1,onInsetChange:h,children:f}){const g=e&&o,x=v.useRef(null);v.useEffect(()=>{const w=x.current;if(!g||!w||!h)return;const k=()=>h(w.getBoundingClientRect().height);k();const _=new ResizeObserver(k);return _.observe(w),()=>{_.disconnect(),h(0)}},[g,h]);const y=n.jsxs(MD,{ref:x,$open:o,children:[g&&d&&l&&n.jsx(ND,{type:"button","aria-label":"Scroll to the end of the conversation",onClick:l,children:n.jsx(Dn,{size:18})}),n.jsxs(RD,{$open:o,children:[g&&n.jsx(LD,{type:"button","aria-label":i,onClick:s,children:n.jsx(ka,{size:18})}),f]})]});return g&&typeof document<"u"?To.createPortal(y,document.body):y}const cD={};function dD({active:e=!0,answers:o=cD,onContinued:i,onPhoneSubmitted:s}){const l=Wv(),[d,h]=v.useState([]),[f,g]=v.useState(""),[x,y]=v.useState([]),[w,k]=v.useState(null),[_,C]=v.useState("roster"),[M,N]=v.useState(!1),[R,S]=v.useState(!1),[j,O]=v.useState(!1),[$,L]=v.useState(null),[E,A]=v.useState(null),[D,G]=v.useState(null),[K,W]=v.useState(null),[Y,X]=v.useState(""),[ae,de]=v.useState(!1),[se,Q]=v.useState(!1),[F,q]=v.useState("grant"),[T,z]=v.useState(!1),[J,U]=v.useState(!1),[ee,le]=v.useState("delivering"),[B,P]=v.useState(0),[oe,fe]=v.useState(-1),[ce,ve]=v.useState(""),[Ce,_e]=v.useState(!1),[Me]=v.useState(()=>{var te;return typeof window<"u"&&!!((te=window.matchMedia)!=null&&te.call(window,"(prefers-reduced-motion: reduce)").matches)}),[Oe,Ge]=v.useState(()=>{var te;return typeof window<"u"&&!!((te=window.matchMedia)!=null&&te.call(window,"(max-width: 600px)").matches)}),[De,Pe]=v.useState({roster:!1,schedule:!1}),Be=te=>Pe(xe=>({...xe,[te]:!0})),Je=_==="roster"?De.roster:_==="schedule"?De.schedule:!0,xt=Oe&&ee==="ready"&&_!=="done"&&!Je,me=v.useRef([]),Le=v.useRef(null),Ye=v.useRef(null),et=v.useRef(null),We=v.useRef(null),kt=v.useRef(null),[nt,jn]=v.useState(0),Bn=()=>{const te=kt.current;te==null||te.scrollTo({top:te.scrollHeight,behavior:"smooth"})},[Po,zo]=v.useState(!0),Ie=te=>{zo(te.scrollHeight-te.scrollTop-te.clientHeight<=GO)},Xe=v.useMemo(()=>{var te;return((te=o.workforceType)==null?void 0:te.trim())||Tl(o.companyWebsite)||""},[o]),mt=v.useMemo(()=>RO(Xe),[Xe]),Ct=v.useMemo(()=>IO(Xe),[Xe]),hn=v.useMemo(()=>{const te=Tl(o.companyWebsite),be=[{kind:"text",text:`Welcome to your ${te?`${te} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return be.push({kind:"text",text:KO}),be.push({kind:"rosterCta"}),be},[o]),Sn=(te,xe)=>{me.current.push(window.setTimeout(xe,te))};v.useEffect(()=>()=>{me.current.forEach(te=>window.clearTimeout(te)),Le.current&&window.clearTimeout(Le.current),et.current&&window.clearTimeout(et.current)},[]);const io=te=>{const xe=te.scrollTop;U(be=>be?xe>qO:xe>UO&&aD(te))};v.useEffect(()=>{var be;const te=(be=window.matchMedia)==null?void 0:be.call(window,"(max-width: 600px)");if(!te)return;const xe=()=>Ge(te.matches);return xe(),te.addEventListener("change",xe),()=>te.removeEventListener("change",xe)},[]);const Mr=te=>{if(L({file:te,state:"uploading",progress:8}),Me){L({file:te,state:"uploading",progress:92});return}Sn(180,()=>L({file:te,state:"uploading",progress:38})),Sn(460,()=>L({file:te,state:"uploading",progress:74})),Sn(780,()=>L({file:te,state:"uploading",progress:92}))},Nr=te=>{if(A({file:te,state:"uploading",progress:8}),Me){A({file:te,state:"complete",progress:100});return}Sn(180,()=>A({file:te,state:"uploading",progress:38})),Sn(460,()=>A({file:te,state:"uploading",progress:74})),Sn(780,()=>A({file:te,state:"complete",progress:100}))};v.useEffect(()=>{if(Me){P(hn.length),fe(-1),le("ready");return}const te=[];let xe=null;const be=(Fe,Ke)=>{te.push(window.setTimeout(Ke,Fe))},at=Fe=>{if(Fe>=hn.length){_e(!1),le("ready");return}_e(!0),be(zO,()=>{_e(!1),fe(Fe);const Ke=hn[Fe];if(Ke.kind!=="text"){be(DO,()=>{P(Fe+1),fe(-1),be(Iu,()=>at(Fe+1))});return}ve("");const Mn=Ke.text;let $t=0;xe=window.setInterval(()=>{$t=Math.min(Mn.length,$t+lx),ve(Mn.slice(0,$t)),$t>=Mn.length&&(xe&&window.clearInterval(xe),xe=null,be(Iu,()=>{P(Fe+1),fe(-1),ve(""),be(Iu,()=>at(Fe+1))}))},sx)})};return le("delivering"),at(0),()=>{te.forEach(Fe=>window.clearTimeout(Fe)),xe&&window.clearInterval(xe)}},[hn,Me]),v.useEffect(()=>{const te=xe=>{const be=xe.target,at=(be==null?void 0:be.isContentEditable)||(be==null?void 0:be.tagName)==="INPUT"||(be==null?void 0:be.tagName)==="TEXTAREA"||(be==null?void 0:be.tagName)==="SELECT";!e||at||xe.metaKey||xe.ctrlKey||xe.altKey||xe.key.toLowerCase()!=="m"||(xe.preventDefault(),z(!0))};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[e]);const Vi=()=>{de(!0),et.current&&window.clearTimeout(et.current),et.current=window.setTimeout(()=>z(!1),S0)},Gi=()=>{Q(!0),et.current&&window.clearTimeout(et.current),et.current=window.setTimeout(()=>z(!1),S0)};v.useEffect(()=>{var te;e&&(nt>0?Bn():(te=We.current)==null||te.scrollIntoView({block:"end",behavior:"smooth"}))},[e,d,w,ee,B,oe,ce,Ce,nt]),v.useEffect(()=>{e||z(!1)},[e]);const Yi=(f.trim().length>0||x.length>0)&&w===null,Ia=te=>{const xe=Array.from(te,be=>be.name);y(be=>[...be,...xe.filter(at=>!be.includes(at))])},Ki=te=>y(xe=>xe.filter(be=>be!==te)),rr=(te,xe={})=>{const be=Me?300:xe.workingMs??PO,at=Me?200:FO;k(xe.workingLabel??"");let Fe=0;const Ke=()=>{var Nn;Le.current&&(window.clearTimeout(Le.current),Le.current=null);const Mn=te[Fe];if(!Mn)return;const $t=Fe===te.length-1;if(Fe+=1,h(Fo=>[...Fo,Mn]),$t){k(null),Ye.current=null,(Nn=xe.then)==null||Nn.call(xe);return}k(""),Le.current=window.setTimeout(Ke,at)};Ye.current=Ke,Le.current=window.setTimeout(Ke,be)},Qi=()=>{var te;Oe&&((te=Ye.current)==null||te.call(Ye))},$n=(te,xe=[])=>{d.some(be=>be.role==="operator")||i==null||i(),h(be=>[...be,{role:"operator",text:te,...xe.length?{attachments:xe}:{}}])},so=(te,xe)=>{S(!1),O(!0),Be("roster"),xe&&Mr(xe),rr([{role:"ultron",activity:JO(te),text:`Got it — read ${te}: ${Qh} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ii} people in. ${M0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Pu,then:()=>C("schedule")})},lo=()=>{S(!0),O(!0),Be("roster"),rr([{role:"ultron",activity:eD(Xe),text:`Done — I spun up ${Yl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:M0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Pu,then:()=>C("schedule")})},vc=te=>{const xe=rh(Xe,te);G({problems:k0(Xe,j0(xe)),week:xe}),W(te)},Hn=te=>{Be("schedule"),te.cardFile&&Nr(te.cardFile);const xe=rh(Xe,te.shape),be=k0(Xe,j0(xe));G({problems:be,week:xe}),W(te.shape??null);const at=xe.reduce(($t,Nn)=>$t+Nn.shifts.length,0),Fe=xe.filter($t=>$t.shifts.length>0).length,Ke=te.fileName?`Read ${te.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${te.shape.toLowerCase()}. Here's what's in it.`,Mn=te.fileName?tD(te.fileName,be.length,at,Fe):nD(te.shape.toLowerCase(),be.length,at,Fe);rr([{role:"ultron",activity:Mn,text:Ke},{role:"ultron",text:"",card:"week"},{role:"ultron",text:ZO}],{workingLabel:te.fileName?"Turning it into shifts…":"Building your week…",workingMs:Pu,then:()=>C("done")})},Oo=()=>{Be("schedule"),$n("Skip the schedule for now"),rr([{role:"ultron",text:"No problem — we’ll skip the schedule for now. You can add it anytime. Your setup is ready; add your mobile number below to launch a live Ultron event."}],{workingLabel:"Skipping the schedule for now…",then:()=>C("done")})},Do=(te,xe=[])=>{if(!te&&xe.length===0||w!==null)return;if($n(te,xe),_==="roster"){xe.length>0?so(xe[0]):N0(te)?so("your pasted roster"):rr([{role:"ultron",activity:rD("roster"),text:QO}]);return}if(_==="schedule"){xe.length>0?Hn({fileName:xe[0]}):N0(te)?Hn({fileName:"your pasted schedule"}):Hn({shape:te});return}const be=d.filter(at=>at.role==="ultron").length;rr([{role:"ultron",activity:oD(),text:Ph(te,be)}])},co=()=>{const te=f.trim();!te&&x.length===0||w!==null||(Do(te,x),g(""),y([]))},xc=te=>{if(!te||te.length===0||_!=="roster"||w!==null)return;const xe=Array.from(te),be=xe.map(at=>at.name);$n("",be),so(be[0],{name:xe[0].name,type:xe[0].type,size:xe[0].size})},yc=te=>{if(!te||te.length===0||_!=="schedule"||w!==null)return;const xe=Array.from(te),be=xe.map(at=>at.name);$n("",be),Hn({fileName:be[0],cardFile:{name:xe[0].name,type:xe[0].type,size:xe[0].size}})},Zi=w!==null?[]:_==="roster"?[{icon:Xr,label:"No roster handy? Use sample teammates",onTap:()=>{$n("Use sample teammates"),lo()}}]:_==="schedule"?[...mt.map(te=>({icon:bn,label:te,onTap:()=>{$n(te),Hn({shape:te})}})),{label:"Skip for now",onTap:Oo,secondary:!0}]:[],or=_!=="done"&&Zi.length>0?n.jsx(iB,{"aria-label":_==="schedule"?"Schedule options":"Suggestions",children:Zi.map(({icon:te,label:xe,onTap:be,secondary:at})=>n.jsxs(F0,{type:"button",$browseSized:!0,$secondary:at,onClick:be,children:[te&&n.jsx(te,{size:14}),xe]},xe))}):null,Xi=_==="roster"?"Attach your roster, or ask Ultron anything…":_==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…",At=F==="waitlist",wc=At?se:ae,Pa=Y.length>=10;return n.jsxs(mD,{children:[!l&&n.jsxs(n.Fragment,{children:[n.jsx(Hh,{links:1}),n.jsx(Wh,{})]}),n.jsx(gD,{$condensed:J,children:n.jsxs(vD,{$condensed:J,children:[n.jsxs(xD,{$condensed:J,role:"img","aria-label":"Ultron",children:[n.jsx(L0,{$show:!J,"aria-hidden":"true",children:n.jsx(lt,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(L0,{$show:J,$compact:!0,"aria-hidden":"true",children:n.jsx(lt,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(yD,{$condensed:J,children:[n.jsx(wD,{$condensed:J,children:"Welcome"}),n.jsx(bD,{$condensed:J,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(kD,{ref:kt,onScroll:te=>{io(te.currentTarget),Ie(te.currentTarget)},children:n.jsxs(qD,{$bottomInset:nt,children:[n.jsx(gl,{"data-from":"ultron",children:n.jsxs(zu,{children:[(oe>=0||B>0)&&n.jsx(T0,{children:n.jsx(Wl,{milestones:XO(Tl(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),hn.slice(0,oe>=0?oe+1:B).map((te,xe)=>{if(te.kind==="rosterCta"){const at=_==="roster"&&!j;return n.jsx(v.Fragment,{children:n.jsx(A0,{children:n.jsx(R0,{active:e&&_==="roster",open:xt&&_==="roster",closeLabel:"Close roster uploader",onClose:()=>Be("roster"),onScrollToEnd:Bn,showScrollCue:!Po,onInsetChange:jn,children:j?_==="roster"?$?n.jsx(ml,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:$.state,progress:$.progress,file:$.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(vl,{children:[n.jsx(xl,{"aria-hidden":"true",children:n.jsx(Xr,{size:16})}),n.jsxs(yl,{children:[n.jsx(wl,{children:"Roster"}),n.jsx(bl,{children:w||(R?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(kl,{"aria-hidden":"true",children:n.jsx(I0,{})})]}):n.jsxs(vl,{$done:!0,children:[n.jsx(xl,{"aria-hidden":"true",children:n.jsx(Du,{size:16})}),n.jsxs(yl,{children:[n.jsx(wl,{children:"Roster"}),n.jsx(bl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(kl,{"aria-hidden":"true",children:n.jsx(un,{size:18})})]}):n.jsxs(vx,{children:[at&&!$&&n.jsx(AD,{"aria-hidden":"true",children:n.jsx(TD,{children:[...$0,...$0].map((Fe,Ke)=>n.jsx(ED,{children:n.jsx("img",{src:Fe.photo,alt:""})},`${Fe.name}-${Ke}`))})}),n.jsx(ml,{"data-roster-flow":at&&!$?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:($==null?void 0:$.state)??"empty",progress:($==null?void 0:$.progress)??0,file:($==null?void 0:$.file)??null,disabled:w!==null&&!$,footerSlot:at&&ee==="ready"?or:void 0,onFileSelect:Fe=>xc([Fe]),onClear:()=>{}})]})})})},`beat-${xe}`)}const be=xe===oe;return n.jsx(E0,{"data-from":"ultron",children:be?n.jsx(lD,{text:ce}):te.text},`beat-${xe}`)}),Ce&&n.jsx(HD,{children:n.jsx(D0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),d.map((te,xe)=>{const be=te.activity?n.jsx(T0,{children:n.jsx(Wl,{milestones:te.activity,collapsed:!0,hideActions:!0})}):null;if(te.card)return n.jsx(gl,{"data-from":"ultron",children:n.jsxs(zu,{children:[be,n.jsx(A0,{$pop:te.card==="week",children:te.card==="roster"?n.jsx(pD,{sample:R}):te.card==="scheduleCta"?n.jsx(R0,{active:e&&_==="schedule",open:xt&&_==="schedule",closeLabel:"Close schedule uploader",onClose:()=>Be("schedule"),onScrollToEnd:Bn,showScrollCue:!Po,onInsetChange:jn,children:_==="schedule"?E?n.jsx(ml,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:E.state,progress:E.progress,file:E.file,onFileSelect:()=>{},onClear:()=>{}}):w!==null?n.jsx(_D,{children:n.jsxs(vl,{children:[n.jsx(xl,{"aria-hidden":"true",children:n.jsx(bn,{size:16})}),n.jsxs(yl,{children:[n.jsx(wl,{children:"Schedule"}),n.jsx(bl,{children:w||"Building your week…"})]}),n.jsx(kl,{"aria-hidden":"true",children:n.jsx(I0,{})})]})}):n.jsxs($D,{children:[n.jsx(PD,{role:"img","aria-label":`${Ct.label}: ${Ct.shape}`,children:n.jsx(zD,{children:Ct.week.map((Fe,Ke)=>{const Mn=Ct.week.slice(0,Ke).reduce(($t,Nn)=>$t+Nn.shifts.length,0);return n.jsxs(OD,{children:[n.jsx(DD,{children:Fe.label.slice(0,1)}),Fe.shifts.length?Fe.shifts.map(($t,Nn)=>n.jsx(FD,{$sequence:Mn+Nn,$flag:$t.flag},`${$t.time}-${Nn}`)):n.jsx(BD,{})]},Fe.label)})})}),n.jsx(ml,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:or,onFileSelect:Fe=>yc([Fe]),onClear:()=>{}})]}):n.jsxs(vl,{$done:!0,children:[n.jsx(xl,{"aria-hidden":"true",children:n.jsx(Du,{size:16})}),n.jsxs(yl,{children:[n.jsx(wl,{children:"Schedule"}),n.jsx(bl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(kl,{"aria-hidden":"true",children:n.jsx(un,{size:18})})]})}):D?n.jsxs(n.Fragment,{children:[n.jsx(fD,{problems:D.problems,week:D.week}),n.jsx(aB,{"aria-label":"Try another schedule",children:mt.map(Fe=>n.jsxs(F0,{type:"button",$active:Fe===K,"aria-pressed":Fe===K,onClick:()=>vc(Fe),children:[n.jsx(bn,{size:14}),Fe]},Fe))})]}):null})]})},xe);const at=n.jsxs(uB,{"data-from":te.role,children:[te.text&&n.jsx(E0,{"data-from":te.role,children:te.text}),te.attachments&&n.jsx(hB,{children:te.attachments.map(Fe=>n.jsxs(B0,{children:[n.jsx(to,{size:14}),Fe]},Fe))})]});return n.jsx(gl,{"data-from":te.role,children:be?n.jsxs(zu,{children:[be,at]}):at},xe)}),w!==null&&n.jsx(gl,{"data-from":"ultron",children:n.jsx(XF,{type:"button",onClick:Qi,disabled:!Oe,"aria-label":w?`${w} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(ZF,{children:[n.jsx(D0,{"aria-hidden":"true",children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),w&&n.jsx(eB,{role:"status","aria-live":"polite",children:w})]})})}),n.jsx("div",{ref:We})]})}),ee==="ready"&&!xt&&n.jsxs(tB,{children:[n.jsx(nB,{role:"img","aria-label":"Ultron","aria-hidden":w!==null,children:n.jsx(rB,{"aria-hidden":"true",children:n.jsx(oB,{$show:w===null,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),_==="done"?n.jsx(hR,{captured:M,onSubmit:te=>{N(!0),s==null||s(te)}}):n.jsxs(sB,{onSubmit:te=>{te.preventDefault(),co()},children:[x.length>0&&n.jsx(cB,{"aria-label":"Files to send",children:x.map(te=>n.jsxs(B0,{children:[n.jsx(to,{size:14}),te,n.jsx(dB,{type:"button","aria-label":`Remove ${te}`,onClick:()=>Ki(te),children:n.jsx(ka,{size:12})})]},te))}),n.jsxs(lB,{children:[n.jsx(H0,{children:n.jsx(Rg,{state:"idle",onSelect:Ia})}),n.jsx(pB,{rows:1,value:f,placeholder:Xi,"aria-label":"Message Ultron",inputMode:"text",autoComplete:"off",onChange:te=>g(te.target.value),onKeyDown:te=>{te.key==="Enter"&&!te.shiftKey&&(te.preventDefault(),co())},onPaste:te=>{var be;const xe=(be=te.clipboardData)==null?void 0:be.files;xe&&xe.length>0&&(te.preventDefault(),Ia(xe))}}),n.jsx(H0,{children:n.jsx(Ra,{state:Yi?"ready":"disabled-invalid",onSend:co})})]})]})]}),n.jsx(RF,{}),n.jsxs(Ig,{open:T,onClose:()=>z(!1),size:"lg","aria-label":`${At?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(LF,{children:[n.jsx(TF,{"aria-hidden":"true",children:n.jsx(Rv,{size:300})}),n.jsx(EF,{type:"button","aria-label":"Close",onClick:()=>z(!1),children:n.jsx(ka,{size:18})}),n.jsxs(IF,{children:[n.jsx(PF,{"aria-hidden":"true"}),At?"Ultron early access":"Your welcome grant"]}),!At&&n.jsxs(zF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(OF,{children:[n.jsx(DF,{children:"$"}),"1,000"]}),n.jsxs(FF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(BF,{$prominent:At,children:At?"Be first when access opens.":"Ready to see the real work?"}),n.jsx(HF,{children:At?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Bring Ultron into your operation. Leave your mobile number and we’ll get the real workspace ready—your first 100,000 credits are covered."}),n.jsx(WF,{"aria-label":At?"Waitlist benefits":"Grant benefits",children:At?n.jsxs(n.Fragment,{children:[n.jsx(ma,{children:"Priority access"}),n.jsx(ma,{children:"One text when ready"}),n.jsx(ma,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(ma,{children:"100,000 credits"}),n.jsx(ma,{children:"Up to 3 months"}),n.jsx(ma,{children:"You approve every action"})]})}),wc?n.jsxs(KF,{role:"status",children:[n.jsx(un,{size:20}),At?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — we’ll text you when your real workspace is ready. Your $1,000 grant is live."]}):n.jsxs(UF,{onSubmit:te=>{te.preventDefault(),Pa&&(At?Gi():Vi())},children:[n.jsx(qF,{htmlFor:"welcome-grant-phone",children:At?"Where should we send your access text?":"Where should we text your invite?"}),n.jsxs(VF,{children:[n.jsx(GF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",minLength:10,maxLength:15,value:Y,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:te=>X(te.target.value.replace(/\D/g,""))}),n.jsx(YF,{type:"submit",variant:"tertiary",size:"lg",disabled:!Pa,children:At?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(QF,{children:At?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(AF,{type:"button",onClick:()=>{et.current&&window.clearTimeout(et.current),q(te=>te==="grant"?"waitlist":"grant")},children:["Demo: show ",At?"welcome grant":"waitlist"]})]})]})}const uD={"Registered Nurse":{short:"RN",color:"blue"},"Charge Nurse":{short:"Charge RN",color:"pink"},"Licensed Practical Nurse":{short:"LPN",color:"azure"},"Licensed Vocational Nurse":{short:"LVN",color:"azure"},"Certified Nursing Assistant":{short:"CNA",color:"green"},RN:{short:"RN",color:"blue"},LPN:{short:"LPN",color:"azure"},CNA:{short:"CNA",color:"green"},Caregiver:{short:"Caregiver",color:"matcha"},"Med Aide":{short:"Med Aide",color:"purple"}};function hD(e){return uD[e]??{short:e,color:"neutral"}}function pD({sample:e}){const[o,i]=v.useState(!0),s=bO.slice(0,6),l=(e?Yl:Ii)-s.length;return n.jsxs(yx,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(GD,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-people",onClick:()=>i(d=>!d),children:[e?n.jsx(YD,{children:n.jsxs(KD,{children:[Yl," sample teammates, ready to run a full week"]})}):n.jsxs(QD,{children:[n.jsxs(ZD,{children:[Ii," ",n.jsxs(XD,{children:["/",Qh]})]}),n.jsxs(JD,{children:[n.jsx(un,{size:16})," imported clean"]})]}),n.jsx(wx,{$open:o,"aria-hidden":"true",children:n.jsx(Dn,{size:16})})]}),o&&n.jsxs(eF,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[s.map((d,h)=>{const f=hD(d.role);return n.jsxs(tF,{$i:h,children:[n.jsxs(nF,{"aria-hidden":"true",children:[iD(d.name),n.jsx("img",{src:sD(h),alt:"",loading:"lazy",onError:g=>{g.currentTarget.style.display="none"}})]}),n.jsxs(rF,{children:[n.jsx(oF,{children:d.name}),n.jsxs(aF,{children:[d.location," · ",d.tenure]})]}),n.jsx(er,{size:"sm",variant:"subtle",color:f.color,children:f.short}),e&&n.jsx(er,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},d.name)}),n.jsx(iF,{children:e?`+ ${l} more · every one tagged “Sample”`:`+ ${l} more imported clean`})]})]})}function fD({problems:e,week:o}){const[i,s]=v.useState(!1),l=o.map((f,g)=>o.slice(0,g).reduce((x,y)=>x+y.shifts.length,0)),d=o.filter(f=>f.shifts.length>0).length,h=o.reduce((f,g)=>f+g.shifts.length,0);return n.jsxs(yx,{"aria-label":"Your week",children:[n.jsxs(hF,{children:[n.jsxs(fF,{children:[n.jsxs(P0,{children:[n.jsx(z0,{children:d})," days"]}),n.jsx(mF,{"aria-hidden":"true",children:"·"}),n.jsxs(P0,{children:[n.jsx(z0,{children:h})," shifts"]})]}),n.jsxs(pF,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(f=>!f),children:[n.jsx(sF,{"aria-hidden":"true",children:n.jsx(Pl,{size:15})}),n.jsx(wx,{$open:i,"aria-hidden":"true",children:n.jsx(Dn,{size:16})})]})]}),i&&n.jsx(cF,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((f,g)=>n.jsxs(dF,{children:[n.jsx(gF,{$kind:f.kind,"aria-hidden":"true",children:f.kind==="missing"?n.jsx(bn,{size:15}):n.jsx(Pl,{size:15})}),n.jsxs(uF,{children:[n.jsxs(vF,{children:[f.worker," · ",f.role]}),n.jsx(xF,{children:f.detail})]})]},`${f.worker}-${g}`))}),n.jsx(yF,{children:n.jsx(wF,{role:"table","aria-label":"Next week's shifts",children:o.map((f,g)=>n.jsxs(bF,{role:"column",children:[n.jsx(kF,{children:f.label}),f.shifts.map((x,y)=>n.jsxs(CF,{$flag:x.flag,$sequence:l[g]+y,children:[n.jsx(_F,{children:x.time}),n.jsx(jF,{children:x.who})]},`${f.label}-${y}`))]},f.label))})})]})}const mD=p.div`
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
`,px="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",fx=Ee`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${px};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,mx=e=>Ee`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${px}, transparent);
  pointer-events: none;
`,gD=p.header`
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
    ${fx}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${mx("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,Wt="320ms",Ut="cubic-bezier(0.22, 1, 0.36, 1)",vD=p.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?BO:dx}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${Wt} ${Ut};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?WO:HO}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,xD=p.span`
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
`,L0=p.span`
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
`,yD=p.div`
  display: contents;
`,wD=p.span`
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
`,bD=p.span`
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
`,kD=p.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Io=we`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,gx=we`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,CD=we`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,A0=p.div`
  animation: ${e=>e.$pop?gx:Io}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,_D=p.div`
  transform-origin: center bottom;
  animation: ${gx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jD=we`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,SD=we`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,vx=p.div`
  position: relative;
  width: 100%;
`,$D=p(vx)``,xx=we`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,MD=p.div`
  display: contents;

  @media (max-width: 600px) {
    ${e=>e.$open&&Ee`
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
`,ND=p.button`
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
  animation: ${xx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;

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
`,RD=p.div`
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    /* Dismissing the sheet doesn't dismiss the intake — the card just stops
       being a sheet and settles back into the thread, where it stays reachable
       as the ordinary inline uploader (its desktop placement). Only one copy
       exists either way: while open, the surface is portaled to body instead of
       rendering here. */
    display: block;

    ${e=>e.$open&&Ee`
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
      animation: ${xx} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,LD=p.button`
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
`,AD=p.div`
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
`,TD=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${SD} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ED=p.span`
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
`,ID=we`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,PD=p.div`
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
`,zD=p.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,OD=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,DD=p.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,FD=p.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${ID} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,BD=p.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,ml=p(Bg)`
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
    animation: ${jD} 300ms var(--ease-out) both;
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
`,HD=p.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Io} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,WD=we`
  from { opacity: 0; }
  to   { opacity: 1; }
`,UD=p.span`
  animation: ${WD} ${cx}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,T0=p.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,qD=p.div`
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
    ${e=>e.$bottomInset?Ee`
      padding-bottom: calc(${e.$bottomInset}px + var(--space-4));
    `:""}
  }
`,gl=p.div`
  display: flex;
  animation: ${Io} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zu=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,E0=p.div`
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
`,vl=p.div`
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
  ${e=>e.$done&&Ee`
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
`,xl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,yl=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,wl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,bl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,VD=we`
  to { transform: rotate(360deg); }
`,I0=p.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${VD} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,kl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,yx=p.div`
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
`,GD=p.button`
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
`,YD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,KD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,QD=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,ZD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,XD=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,JD=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,eF=p.div`
  display: flex;
  flex-direction: column;
`,tF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Io} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nF=p.span`
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
`,rF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,oF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,aF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,iF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Io} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sF=p.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,wx=p.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,lF=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Io} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cF=p(lF)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,dF=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,uF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,hF=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,pF=p.button`
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
`,fF=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,P0=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,z0=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,mF=p.span`
  color: var(--color-content-tertiary);
`,gF=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&Ee`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&Ee`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&Ee`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,vF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,xF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,yF=p.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,wF=p.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,bF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,kF=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,CF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${CD} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + ${e=>e.$sequence} * 70ms);

  ${e=>e.$flag==="open"&&Ee`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Ee`
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
`,_F=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,jF=p.span`
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
`,O0="cubic-bezier(0.22, 1, 0.36, 1)",SF=we`
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
`,$F=we`
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
`,MF=we`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,NF=we`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,RF=A2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${SF} 440ms ${O0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${MF} 560ms ${O0} both;
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
    animation: ${$F} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${NF} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,LF=p.section`
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
`,AF=p.button`
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
`,TF=p.div`
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
`,EF=p.button`
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
`,IF=p.span`
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
`,PF=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,zF=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,OF=p.div`
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
`,DF=p.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,FF=p.span`
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
`,BF=p.h2`
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
`,HF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,WF=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,ma=p.span`
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
`,UF=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,qF=p.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,VF=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,GF=p.input`
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
`,YF=p(ze)`
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
`,KF=p.div`
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
`,QF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,D0=p.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,ZF=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,XF=p.button`
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
`,JF=we`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,eB=p.span`
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
  animation: ${JF} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,tB=p.div`
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
    ${fx}
  }
  &::after {
    ${mx("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Io} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nB=p.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,rB=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,oB=p.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,aB=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,iB=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,F0=p.button`
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
  ${e=>e.$secondary&&Ee`
    background: var(--color-bg-secondary);
    border-color: transparent;
    color: var(--color-content-primary);

    &:hover {
      background: var(--color-bg-tertiary);
      border-color: var(--color-border-hover);
      color: var(--color-content-primary);
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
`,sB=p.form`
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
`,lB=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,cB=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,B0=p.span`
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
`,dB=p.button`
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
`,uB=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,hB=p.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,pB=p.textarea`
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
`,H0=p.div`
  flex-shrink: 0;
`;function fB(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function mB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function gB(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=mB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=fB(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const oh="ultron-theme";function vB(){if(typeof window>"u")return null;const e=window.localStorage.getItem(oh);return e==="light"||e==="dark"?e:null}function xB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function yB(){const e=Gh("(prefers-color-scheme: dark)"),[o,i]=v.useState(vB);v.useEffect(()=>{xB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(oh,o):window.localStorage.removeItem(oh))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const wB="calc(env(safe-area-inset-top, 0px) + 49px)",bB=p.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${Hv} {
    top: calc(${wB} + var(--space-3));
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
`;function kB(){const{theme:e,toggle:o}=yB(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(bB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(fh,{size:18}):n.jsx(_g,{size:18})})}const W0=[{id:"ultron",label:"Ultron",icon:n.jsx(lt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(z$,{})},{id:"engaged",label:"Engage",icon:n.jsx(O$,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(D$,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(F$,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(B$,{})}],U0=[{id:"apps",label:"Apps",icon:n.jsx(H$,{})}],q0=[{id:"docs",label:"Document Studio",icon:n.jsx(D2,{})},{id:"form",label:"Form",icon:n.jsx(W$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(U$,{})},{id:"policy",label:"Policy",icon:n.jsx(q$,{}),activeIcon:n.jsx("img",{src:yO,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(Ao,{}),activeIcon:n.jsx("img",{src:wO,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(V$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(G$,{})}],CB=3e3,_B=4e3,jB=p.button`
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
`,SB=we`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,$B=we`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,MB=we`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,NB=p.span`
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
      ${SB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${$B} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${MB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,RB=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,LB=p(Ag)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,AB=p(Tg)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,TB=p(Eg)`
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
`,EB=A2`
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
`,IB=p.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,PB=p.button`
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
`;function zB({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(bh,{placement:"bottom-end",width:168,trigger:n.jsx(PB,{type:"button","aria-label":"Page options",children:n.jsx(kg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(Ng,{size:16}),onClick:e}]}]})})}const OB={needs_attention:n.jsx(Pl,{size:16}),live:n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(un,{size:16})},DB={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function FB({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[h,f]=v.useState(null),[g,x]=v.useState(null),[y,w]=v.useState("ultron"),[k,_]=v.useState("employees"),C=yM(),[M,N]=v.useState(!!e),[R,S]=v.useState(!1),[j,O]=v.useState(!!e),[$,L]=v.useState(!1),E=v.useRef(null),[A,D]=v.useState(!1),G=v.useRef(null);v.useEffect(()=>()=>{E.current!==null&&window.clearTimeout(E.current),G.current!==null&&window.clearTimeout(G.current)},[]);const K=()=>{E.current!==null&&(window.clearTimeout(E.current),E.current=null),L(!1)},W=()=>{K(),E.current=window.setTimeout(()=>{E.current=null,C.surfaceDemoThread("shift_drop_maria"),Y(),L(!0)},CB)},Y=()=>{G.current!==null&&window.clearTimeout(G.current),D(!0),G.current=window.setTimeout(()=>{G.current=null,D(!1)},_B)},[X,ae]=v.useState(!e),[de,se]=v.useState([]),[Q,F]=v.useState(null),q=v.useRef(0),T=me=>{w("ultron"),N(!1),ae(!1),F(me)},z=()=>{O(!0),w("ultron"),ae(!1),F(null),N(!0)},J=()=>{w("ultron"),N(!1),ae(!0),F(null)},U=()=>{const me=`page-${q.current++}`;se(Le=>[...Le,{id:me,title:"New page"}]),T(me)},[ee,le]=v.useState({}),[B,P]=v.useState({}),oe=v.useRef({}),fe=(me,Le)=>{const Ye=Le.trim();if(!Ye)return;const et=(ee[me]??[]).filter(We=>We.role==="ultron").length;le(We=>({...We,[me]:[...We[me]??[],{role:"operator",text:Ye}]})),P(We=>({...We,[me]:!0})),oe.current[me]=window.setTimeout(()=>{le(We=>({...We,[me]:[...We[me]??[],{role:"ultron",text:Ph(Ye,et)}]})),P(We=>({...We,[me]:!1})),delete oe.current[me]},1100)},ce=me=>{oe.current[me]&&(window.clearTimeout(oe.current[me]),delete oe.current[me]),se(Le=>Le.filter(Ye=>Ye.id!==me)),le(Le=>{const{[me]:Ye,...et}=Le;return et}),P(Le=>{const{[me]:Ye,...et}=Le;return et}),Q===me&&(F(null),ae(!0))},ve=X?"live":C.selectedThread?DB[C.selectedThread.status]:"new";gB({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:x});const[Ce,_e]=v.useState(!1),Me=me=>me.map(Le=>({...Le,isActive:Le.id===i,disabled:Le.id!=="ultron",onClick:Le.id==="ultron"?()=>s("ultron"):()=>_e(!0)})),Oe=[{id:"memory",label:"Memory",icon:n.jsx(Xl,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(cg,{size:16})}],Ge=n.jsx(Jv,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),De=Tl(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,Pe={id:"welcome",label:De?`${De} account setup`:"Account setup",icon:n.jsx(lt,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"}),isActive:M,onClick:z},Be=de.map(me=>({id:me.id,label:me.title,icon:n.jsx(D2,{}),isActive:Q===me.id,onClick:()=>T(me.id),trailingSlot:n.jsx(zB,{onDelete:()=>ce(me.id)})})),Je=y==="account"?th.map(me=>({type:"single",item:{id:me.id,label:me.label,icon:me.icon,isActive:k===me.id,onClick:()=>_(me.id)}})):C.groups.flatMap(me=>{const Le=me.id==="needs_attention"?"new":me.id==="resolved"?"done":"working",Ye=me.id==="needs_attention"?me.threads.filter(nt=>nt.status==="analyzing"||C.revealedNewIds.includes(nt.id)):me.threads,et=me.id==="needs_attention"&&!R||me.id==="live"&&R,We=me.id==="needs_attention"?Be:[],kt={type:"group",group:{id:me.id,label:me.id==="needs_attention"?"New":me.label,icon:OB[me.id],trailingBadge:n.jsx(Na,{children:Ye.length+(et?1:0)+We.length}),defaultExpanded:!0,outlined:!1,children:[...et?[Pe]:[],...We,...Ye.map(nt=>({id:nt.id,label:nt.id.startsWith("detected_")?n.jsx(MT,{text:Zm(nt.name,Le)}):Zm(nt.name,Le),icon:nt.id==="shift_drop_maria"&&A?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Le==="new"?nt.status==="analyzing"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Le==="working"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:nt.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:nt.status==="unresolved"?"idle":"static",color:nt.status==="unresolved"?"var(--color-orange-content-tertiary)":C.viewedIds.includes(nt.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!X&&!Q&&ve===Le&&C.selectedId===nt.id,onClick:()=>{nt.id==="shift_drop_maria"&&K(),w("ultron"),N(!1),ae(!1),F(null),C.setSelectedId(nt.id)},spotlightPrompt:$&&nt.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:nt.id==="shift_drop_maria"?K:void 0,trailingSlot:C.savedWorkflowIds.includes(nt.id)?n.jsx($r,{content:"Saved as workflow",placement:"top",children:n.jsx(NB,{"aria-label":"Saved as workflow",children:n.jsx(Ao,{})})}):void 0}))]}};return me.id==="resolved"?[{type:"divider",id:"done-divider"},kt]:me.id==="live"?[{type:"divider",id:"working-divider"},kt]:[kt]}),xt=[{id:"main",label:"Workspace",items:Me(W0)},{id:"tools",label:"Tools",items:Me(U0)},{id:"bottom",label:"Apps",items:Me(q0)}];return n.jsxs(n.Fragment,{children:[n.jsx(kB,{}),n.jsx(EB,{}),n.jsxs(xO,{items:Me(W0),toolItems:Me(U0),bottomItems:Me(q0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:Je,menuHeader:y==="ultron"?n.jsx(jB,{$active:X&&!Q,onClick:J,"aria-label":"Live — Ultron presence","aria-current":X&&!Q?"page":void 0,children:n.jsx(CT,{onNew:U})}):void 0,pageEntries:Oe,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:Ge,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:xt,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:me=>{me==="ultron"&&s("ultron")},onSelectPersona:f,onHome:J,onNewPage:U,openSecondaryNav:$},children:[j&&n.jsx(IB,{$visible:y==="ultron"&&M,"aria-hidden":y!=="ultron"||!M,children:n.jsx(dD,{active:y==="ultron"&&M,answers:e,onContinued:()=>S(!0),onPhoneSubmitted:W})}),y==="memory"?n.jsx(AT,{}):y==="account"?n.jsx(VT,{collectionId:k}):M?null:Q?n.jsx(rT,{messages:ee[Q]??[],replying:B[Q]??!1,onSend:me=>fe(Q,me)},Q):n.jsx(YA,{threads:C.threads,stageById:C.stageById,section:ve,analyzedIds:C.analyzedIds,outboundByThread:C.outboundByThread,chatByThread:C.chatByThread,selectedId:C.selectedId,onDecide:C.decide,onAction:C.commit,onCompleteRun:C.completeRun,onRefinement:C.refine,onSaveWorkflow:C.saveWorkflow,pendingWorkflowIds:C.pendingWorkflowIds,onToggleSaveWorkflow:C.toggleWorkflowSave,savedWorkflowIds:C.savedWorkflowIds,onSend:C.sendMessage,replyingIds:C.replyingIds,onStop:C.stopReply,onClose:()=>{w("ultron"),N(!1),ae(!0)},onDetectRisk:C.detectRisk,onRevealNew:C.revealNew})]}),n.jsxs(Ig,{open:Ce,onClose:()=>_e(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(LB,{onClose:()=>_e(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(AB,{children:n.jsx(RB,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(TB,{children:n.jsx(ze,{variant:"primary",onClick:()=>_e(!1),children:"Got it"})})]})]})}const V0="cubic-bezier(0.22, 1, 0.36, 1)",G0=we`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,BB=we`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,HB=p.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${G0} 460ms ${V0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${G0} 500ms ${V0} 90ms both;
  }
  main {
    animation: ${BB} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Ou="tb:onboarding-complete";function WB(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(Ou)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(Ou,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Ou)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(HB,{children:n.jsx(FB,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(vP,{onEnterApp:l})}m3.createRoot(document.getElementById("root")).render(n.jsx(dn.StrictMode,{children:n.jsx(O8,{children:n.jsx(WB,{})})}));
