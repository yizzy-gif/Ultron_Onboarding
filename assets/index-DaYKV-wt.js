(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function h0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Qa={},pd={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function cx(){if(Y1)return Fe;Y1=1;var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,C={};function M(E,L,U){this.props=E,this.context=L,this.refs=C,this.updater=U||A}M.prototype.isReactComponent={},M.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},M.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function $(){}$.prototype=M.prototype;function S(E,L,U){this.props=E,this.context=L,this.refs=C,this.updater=U||A}var j=S.prototype=new $;j.constructor=S,_(j,M.prototype),j.isPureReactComponent=!0;var O=Array.isArray,R=Object.prototype.hasOwnProperty,N={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function z(E,L,U){var K,ie={},de=null,q=null;if(L!=null)for(K in L.ref!==void 0&&(q=L.ref),L.key!==void 0&&(de=""+L.key),L)R.call(L,K)&&!T.hasOwnProperty(K)&&(ie[K]=L[K]);var I=arguments.length-2;if(I===1)ie.children=U;else if(1<I){for(var te=Array(I),fe=0;fe<I;fe++)te[fe]=arguments[fe+2];ie.children=te}if(E&&E.defaultProps)for(K in I=E.defaultProps,I)ie[K]===void 0&&(ie[K]=I[K]);return{$$typeof:e,type:E,key:de,ref:q,props:ie,_owner:N.current}}function B(E,L){return{$$typeof:e,type:E.type,key:L,ref:E.ref,props:E.props,_owner:E._owner}}function G(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function Z(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(U){return L[U]})}var F=/\/+/g;function Y(E,L){return typeof E=="object"&&E!==null&&E.key!=null?Z(""+E.key):L.toString(36)}function ee(E,L,U,K,ie){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var q=!1;if(E===null)q=!0;else switch(de){case"string":case"number":q=!0;break;case"object":switch(E.$$typeof){case e:case a:q=!0}}if(q)return q=E,ie=ie(q),E=K===""?"."+Y(q,0):K,O(ie)?(U="",E!=null&&(U=E.replace(F,"$&/")+"/"),ee(ie,L,U,"",function(fe){return fe})):ie!=null&&(G(ie)&&(ie=B(ie,U+(!ie.key||q&&q.key===ie.key?"":(""+ie.key).replace(F,"$&/")+"/")+E)),L.push(ie)),1;if(q=0,K=K===""?".":K+":",O(E))for(var I=0;I<E.length;I++){de=E[I];var te=K+Y(de,I);q+=ee(de,L,U,te,ie)}else if(te=k(E),typeof te=="function")for(E=te.call(E),I=0;!(de=E.next()).done;)de=de.value,te=K+Y(de,I++),q+=ee(de,L,U,te,ie);else if(de==="object")throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return q}function ae(E,L,U){if(E==null)return E;var K=[],ie=0;return ee(E,K,"","",function(de){return L.call(U,de,ie++)}),K}function re(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(U){(E._status===0||E._status===-1)&&(E._status=1,E._result=U)},function(U){(E._status===0||E._status===-1)&&(E._status=2,E._result=U)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var oe={current:null},X={transition:null},W={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:X,ReactCurrentOwner:N};function V(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:ae,forEach:function(E,L,U){ae(E,function(){L.apply(this,arguments)},U)},count:function(E){var L=0;return ae(E,function(){L++}),L},toArray:function(E){return ae(E,function(L){return L})||[]},only:function(E){if(!G(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Fe.Component=M,Fe.Fragment=i,Fe.Profiler=l,Fe.PureComponent=S,Fe.StrictMode=s,Fe.Suspense=g,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Fe.act=V,Fe.cloneElement=function(E,L,U){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var K=_({},E.props),ie=E.key,de=E.ref,q=E._owner;if(L!=null){if(L.ref!==void 0&&(de=L.ref,q=N.current),L.key!==void 0&&(ie=""+L.key),E.type&&E.type.defaultProps)var I=E.type.defaultProps;for(te in L)R.call(L,te)&&!T.hasOwnProperty(te)&&(K[te]=L[te]===void 0&&I!==void 0?I[te]:L[te])}var te=arguments.length-2;if(te===1)K.children=U;else if(1<te){I=Array(te);for(var fe=0;fe<te;fe++)I[fe]=arguments[fe+2];K.children=I}return{$$typeof:e,type:E.type,key:ie,ref:de,props:K,_owner:q}},Fe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},Fe.createElement=z,Fe.createFactory=function(E){var L=z.bind(null,E);return L.type=E,L},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(E){return{$$typeof:f,render:E}},Fe.isValidElement=G,Fe.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:re}},Fe.memo=function(E,L){return{$$typeof:x,type:E,compare:L===void 0?null:L}},Fe.startTransition=function(E){var L=X.transition;X.transition={};try{E()}finally{X.transition=L}},Fe.unstable_act=V,Fe.useCallback=function(E,L){return oe.current.useCallback(E,L)},Fe.useContext=function(E){return oe.current.useContext(E)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(E){return oe.current.useDeferredValue(E)},Fe.useEffect=function(E,L){return oe.current.useEffect(E,L)},Fe.useId=function(){return oe.current.useId()},Fe.useImperativeHandle=function(E,L,U){return oe.current.useImperativeHandle(E,L,U)},Fe.useInsertionEffect=function(E,L){return oe.current.useInsertionEffect(E,L)},Fe.useLayoutEffect=function(E,L){return oe.current.useLayoutEffect(E,L)},Fe.useMemo=function(E,L){return oe.current.useMemo(E,L)},Fe.useReducer=function(E,L,U){return oe.current.useReducer(E,L,U)},Fe.useRef=function(E){return oe.current.useRef(E)},Fe.useState=function(E){return oe.current.useState(E)},Fe.useSyncExternalStore=function(E,L,U){return oe.current.useSyncExternalStore(E,L,U)},Fe.useTransition=function(){return oe.current.useTransition()},Fe.version="18.3.1",Fe}var K1;function bu(){return K1||(K1=1,pd.exports=cx()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1;function dx(){if(Q1)return Qa;Q1=1;var e=bu(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,x){var y,w={},k=null,A=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(A=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:a,type:f,key:k,ref:A,props:w,_owner:l.current}}return Qa.Fragment=i,Qa.jsx=h,Qa.jsxs=h,Qa}var Z1;function ux(){return Z1||(Z1=1,hd.exports=dx()),hd.exports}var r=ux(),v=bu();const on=h0(v);var $s={},fd={exports:{}},Xt={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function hx(){return X1||(X1=1,(function(e){function a(X,W){var V=X.length;X.push(W);e:for(;0<V;){var E=V-1>>>1,L=X[E];if(0<l(L,W))X[E]=W,X[V]=L,V=E;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var W=X[0],V=X.pop();if(V!==W){X[0]=V;e:for(var E=0,L=X.length,U=L>>>1;E<U;){var K=2*(E+1)-1,ie=X[K],de=K+1,q=X[de];if(0>l(ie,V))de<L&&0>l(q,ie)?(X[E]=q,X[de]=V,E=de):(X[E]=ie,X[K]=V,E=K);else if(de<L&&0>l(q,V))X[E]=q,X[de]=V,E=de;else break e}}return W}function l(X,W){var V=X.sortIndex-W.sortIndex;return V!==0?V:X.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var g=[],x=[],y=1,w=null,k=3,A=!1,_=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(X){for(var W=i(x);W!==null;){if(W.callback===null)s(x);else if(W.startTime<=X)s(x),W.sortIndex=W.expirationTime,a(g,W);else break;W=i(x)}}function O(X){if(C=!1,j(X),!_)if(i(g)!==null)_=!0,re(R);else{var W=i(x);W!==null&&oe(O,W.startTime-X)}}function R(X,W){_=!1,C&&(C=!1,$(z),z=-1),A=!0;var V=k;try{for(j(W),w=i(g);w!==null&&(!(w.expirationTime>W)||X&&!Z());){var E=w.callback;if(typeof E=="function"){w.callback=null,k=w.priorityLevel;var L=E(w.expirationTime<=W);W=e.unstable_now(),typeof L=="function"?w.callback=L:w===i(g)&&s(g),j(W)}else s(g);w=i(g)}if(w!==null)var U=!0;else{var K=i(x);K!==null&&oe(O,K.startTime-W),U=!1}return U}finally{w=null,k=V,A=!1}}var N=!1,T=null,z=-1,B=5,G=-1;function Z(){return!(e.unstable_now()-G<B)}function F(){if(T!==null){var X=e.unstable_now();G=X;var W=!0;try{W=T(!0,X)}finally{W?Y():(N=!1,T=null)}}else N=!1}var Y;if(typeof S=="function")Y=function(){S(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=F,Y=function(){ae.postMessage(null)}}else Y=function(){M(F,0)};function re(X){T=X,N||(N=!0,Y())}function oe(X,W){z=M(function(){X(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){_||A||(_=!0,re(R))},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(X){switch(k){case 1:case 2:case 3:var W=3;break;default:W=k}var V=k;k=W;try{return X()}finally{k=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,W){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var V=k;k=X;try{return W()}finally{k=V}},e.unstable_scheduleCallback=function(X,W,V){var E=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?E+V:E):V=E,X){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=V+L,X={id:y++,callback:W,priorityLevel:X,startTime:V,expirationTime:L,sortIndex:-1},V>E?(X.sortIndex=V,a(x,X),i(g)===null&&X===i(x)&&(C?($(z),z=-1):C=!0,oe(O,V-E))):(X.sortIndex=L,a(g,X),_||A||(_=!0,re(R))),X},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(X){var W=k;return function(){var V=k;k=W;try{return X.apply(this,arguments)}finally{k=V}}}})(gd)),gd}var J1;function px(){return J1||(J1=1,md.exports=hx()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function fx(){if(ef)return Xt;ef=1;var e=bu(),a=px();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return g.call(w,t)?!0:g.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function A(t,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,n,o,c){if(n===null||typeof n>"u"||A(t,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(t,n,o,c,u,p,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=b}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];M[n]=new C(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function S(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,n,o,c){var u=M.hasOwnProperty(n)?M[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_(n,o,u,c)&&(o=null),c||u===null?k(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,c=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?t.setAttributeNS(c,n,o):t.setAttribute(n,o))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),N=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),X=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,E;function L(t){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+t}var U=!1;function K(t,n){if(!t||U)return"";U=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ne){var c=ne}Reflect.construct(t,[],n)}else{try{n.call()}catch(ne){c=ne}t.call(n.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var u=ne.stack.split(`
`),p=c.stack.split(`
`),b=u.length-1,P=p.length-1;1<=b&&0<=P&&u[b]!==p[P];)P--;for(;1<=b&&0<=P;b--,P--)if(u[b]!==p[P]){if(b!==1||P!==1)do if(b--,P--,0>P||u[b]!==p[P]){var D=`
`+u[b].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=b&&0<=P);break}}}finally{U=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function ie(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case N:return"Portal";case B:return"Profiler";case z:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case re:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}function q(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function I(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function te(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fe(t){var n=te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,p.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ce(t){t._valueTracker||(t._valueTracker=fe(t))}function me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return t&&(c=te(t)?t.checked?"true":"false":t.value),t=c,t!==o?(n.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ve(t,n){var o=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Le(t,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=I(n.value!=null?n.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Te(t,n){n=n.checked,n!=null&&j(t,"checked",n,!1)}function ze(t,n){Te(t,n);var o=I(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ie(t,n.type,o):n.hasOwnProperty("defaultValue")&&Ie(t,n.type,I(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Oe(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ie(t,n,o){(n!=="number"||be(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function Ye(t,n,o,c){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&c&&(t[o].defaultSelected=!0)}else{for(o=""+I(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function vt(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function He(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(We(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:I(o)}}function yt(t,n){var o=I(n.value),c=I(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function st(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function It(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?It(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var se,ye=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,c,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=se.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Se(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xt=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(t){xt.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),at[n]=at[t]})});function Rn(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||at.hasOwnProperty(t)&&at[t]?(""+n).trim():n+"px"}function Re(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=Rn(o,n[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,u):t[o]=u}}var Qe=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,n){if(n){if(Qe[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Et(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function ha(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,yo=null,xo=null;function uh(t){if(t=Ea(t)){if(typeof pa!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Gi(n),pa(t.stateNode,t.type,n))}}function hh(t){yo?xo?xo.push(t):xo=[t]:yo=t}function ph(){if(yo){var t=yo,n=xo;if(xo=yo=null,uh(t),n)for(t=0;t<n.length;t++)uh(n[t])}}function fh(t,n){return t(n)}function mh(){}var Rl=!1;function gh(t,n,o){if(Rl)return t(n,o);Rl=!0;try{return fh(t,n,o)}finally{Rl=!1,(yo!==null||xo!==null)&&(mh(),ph())}}function fa(t,n){var o=t.stateNode;if(o===null)return null;var c=Gi(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Ll=!1;if(f)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Ll=!1}function mv(t,n,o,c,u,p,b,P,D){var ne=Array.prototype.slice.call(arguments,3);try{n.apply(o,ne)}catch(he){this.onError(he)}}var ga=!1,ji=null,Si=!1,Al=null,gv={onError:function(t){ga=!0,ji=t}};function vv(t,n,o,c,u,p,b,P,D){ga=!1,ji=null,mv.apply(gv,arguments)}function yv(t,n,o,c,u,p,b,P,D){if(vv.apply(this,arguments),ga){if(ga){var ne=ji;ga=!1,ji=null}else throw Error(i(198));Si||(Si=!0,Al=ne)}}function Br(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function vh(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function yh(t){if(Br(t)!==t)throw Error(i(188))}function xv(t){var n=t.alternate;if(!n){if(n=Br(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,c=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return yh(u),t;if(p===c)return yh(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=p;else{for(var b=!1,P=u.child;P;){if(P===o){b=!0,o=u,c=p;break}if(P===c){b=!0,c=u,o=p;break}P=P.sibling}if(!b){for(P=p.child;P;){if(P===o){b=!0,o=p,c=u;break}if(P===c){b=!0,c=p,o=u;break}P=P.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function xh(t){return t=xv(t),t!==null?wh(t):null}function wh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=wh(t);if(n!==null)return n;t=t.sibling}return null}var bh=a.unstable_scheduleCallback,kh=a.unstable_cancelCallback,wv=a.unstable_shouldYield,bv=a.unstable_requestPaint,pt=a.unstable_now,kv=a.unstable_getCurrentPriorityLevel,$l=a.unstable_ImmediatePriority,_h=a.unstable_UserBlockingPriority,Ni=a.unstable_NormalPriority,_v=a.unstable_LowPriority,Ch=a.unstable_IdlePriority,Mi=null,Wn=null;function Cv(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Mi,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:Nv,jv=Math.log,Sv=Math.LN2;function Nv(t){return t>>>=0,t===0?32:31-(jv(t)/Sv|0)|0}var Ri=64,Li=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ai(t,n){var o=t.pendingLanes;if(o===0)return 0;var c=0,u=t.suspendedLanes,p=t.pingedLanes,b=o&268435455;if(b!==0){var P=b&~u;P!==0?c=va(P):(p&=b,p!==0&&(c=va(p)))}else b=o&~u,b!==0?c=va(b):p!==0&&(c=va(p));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((c&4)!==0&&(c|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)o=31-Ln(n),u=1<<o,c|=t[o],n&=~u;return c}function Mv(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,n){for(var o=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var b=31-Ln(p),P=1<<b,D=u[b];D===-1?((P&o)===0||(P&c)!==0)&&(u[b]=Mv(P,n)):D<=n&&(t.expiredLanes|=P),p&=~P}}function Tl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jh(){var t=Ri;return Ri<<=1,(Ri&4194240)===0&&(Ri=64),t}function Il(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function ya(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Ln(n),t[n]=o}function Lv(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Ln(o),p=1<<u;n[u]=0,c[u]=-1,t[u]=-1,o&=~p}}function El(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var c=31-Ln(o),u=1<<c;u&n|t[c]&n&&(t[c]|=n),o&=~u}}var Xe=0;function Sh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Nh,Pl,Mh,Rh,Lh,zl=!1,$i=[],dr=null,ur=null,hr=null,xa=new Map,wa=new Map,pr=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(t,n){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":xa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(n.pointerId)}}function ba(t,n,o,c,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&Pl(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $v(t,n,o,c,u){switch(n){case"focusin":return dr=ba(dr,t,n,o,c,u),!0;case"dragenter":return ur=ba(ur,t,n,o,c,u),!0;case"mouseover":return hr=ba(hr,t,n,o,c,u),!0;case"pointerover":var p=u.pointerId;return xa.set(p,ba(xa.get(p)||null,t,n,o,c,u)),!0;case"gotpointercapture":return p=u.pointerId,wa.set(p,ba(wa.get(p)||null,t,n,o,c,u)),!0}return!1}function $h(t){var n=Wr(t.target);if(n!==null){var o=Br(n);if(o!==null){if(n=o.tag,n===13){if(n=vh(o),n!==null){t.blockedOn=n,Lh(t.priority,function(){Mh(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ti(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=Dl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Fr=c,o.target.dispatchEvent(c),Fr=null}else return n=Ea(o),n!==null&&Pl(n),t.blockedOn=o,!1;n.shift()}return!0}function Th(t,n,o){Ti(t)&&o.delete(n)}function Tv(){zl=!1,dr!==null&&Ti(dr)&&(dr=null),ur!==null&&Ti(ur)&&(ur=null),hr!==null&&Ti(hr)&&(hr=null),xa.forEach(Th),wa.forEach(Th)}function ka(t,n){t.blockedOn===n&&(t.blockedOn=null,zl||(zl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Tv)))}function _a(t){function n(u){return ka(u,t)}if(0<$i.length){ka($i[0],t);for(var o=1;o<$i.length;o++){var c=$i[o];c.blockedOn===t&&(c.blockedOn=null)}}for(dr!==null&&ka(dr,t),ur!==null&&ka(ur,t),hr!==null&&ka(hr,t),xa.forEach(n),wa.forEach(n),o=0;o<pr.length;o++)c=pr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<pr.length&&(o=pr[0],o.blockedOn===null);)$h(o),o.blockedOn===null&&pr.shift()}var wo=O.ReactCurrentBatchConfig,Ii=!0;function Iv(t,n,o,c){var u=Xe,p=wo.transition;wo.transition=null;try{Xe=1,Ol(t,n,o,c)}finally{Xe=u,wo.transition=p}}function Ev(t,n,o,c){var u=Xe,p=wo.transition;wo.transition=null;try{Xe=4,Ol(t,n,o,c)}finally{Xe=u,wo.transition=p}}function Ol(t,n,o,c){if(Ii){var u=Dl(t,n,o,c);if(u===null)nc(t,n,c,Ei,o),Ah(t,c);else if($v(u,t,n,o,c))c.stopPropagation();else if(Ah(t,c),n&4&&-1<Av.indexOf(t)){for(;u!==null;){var p=Ea(u);if(p!==null&&Nh(p),p=Dl(t,n,o,c),p===null&&nc(t,n,c,Ei,o),p===u)break;u=p}u!==null&&c.stopPropagation()}else nc(t,n,c,null,o)}}var Ei=null;function Dl(t,n,o,c){if(Ei=null,t=ha(c),t=Wr(t),t!==null)if(n=Br(t),n===null)t=null;else if(o=n.tag,o===13){if(t=vh(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ei=t,null}function Ih(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case $l:return 1;case _h:return 4;case Ni:case _v:return 16;case Ch:return 536870912;default:return 16}default:return 16}}var fr=null,Fl=null,Pi=null;function Eh(){if(Pi)return Pi;var t,n=Fl,o=n.length,c,u="value"in fr?fr.value:fr.textContent,p=u.length;for(t=0;t<o&&n[t]===u[t];t++);var b=o-t;for(c=1;c<=b&&n[o-c]===u[p-c];c++);return Pi=u.slice(t,1<c?1-c:void 0)}function zi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Oi(){return!0}function Ph(){return!1}function an(t){function n(o,c,u,p,b){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(o=t[P],this[P]=o?o(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oi:Ph,this.isPropagationStopped=Ph,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),n}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=an(bo),Ca=V({},bo,{view:0,detail:0}),Pv=an(Ca),Wl,Hl,ja,Di=V({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ja&&(ja&&t.type==="mousemove"?(Wl=t.screenX-ja.screenX,Hl=t.screenY-ja.screenY):Hl=Wl=0,ja=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),zh=an(Di),zv=V({},Di,{dataTransfer:0}),Ov=an(zv),Dv=V({},Ca,{relatedTarget:0}),Ul=an(Dv),Fv=V({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=an(Fv),Wv=V({},bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hv=an(Wv),Uv=V({},bo,{data:0}),Oh=an(Uv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gv[t])?!!n[t]:!1}function ql(){return Yv}var Kv=V({},Ca,{key:function(t){if(t.key){var n=qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=an(Kv),Zv=V({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=an(Zv),Xv=V({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Jv=an(Xv),ey=V({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=an(ey),ny=V({},Di,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=an(ny),oy=[9,13,27,32],Vl=f&&"CompositionEvent"in window,Sa=null;f&&"documentMode"in document&&(Sa=document.documentMode);var ay=f&&"TextEvent"in window&&!Sa,Fh=f&&(!Vl||Sa&&8<Sa&&11>=Sa),Bh=" ",Wh=!1;function Hh(t,n){switch(t){case"keyup":return oy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ko=!1;function iy(t,n){switch(t){case"compositionend":return Uh(n);case"keypress":return n.which!==32?null:(Wh=!0,Bh);case"textInput":return t=n.data,t===Bh&&Wh?null:t;default:return null}}function sy(t,n){if(ko)return t==="compositionend"||!Vl&&Hh(t,n)?(t=Eh(),Pi=Fl=fr=null,ko=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fh&&n.locale!=="ko"?null:n.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ly[t.type]:n==="textarea"}function Vh(t,n,o,c){hh(c),n=Ui(n,"onChange"),0<n.length&&(o=new Bl("onChange","change",null,o,c),t.push({event:o,listeners:n}))}var Na=null,Ma=null;function cy(t){dp(t,0)}function Fi(t){var n=No(t);if(me(n))return t}function dy(t,n){if(t==="change")return n}var Gh=!1;if(f){var Gl;if(f){var Yl="oninput"in document;if(!Yl){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),Yl=typeof Yh.oninput=="function"}Gl=Yl}else Gl=!1;Gh=Gl&&(!document.documentMode||9<document.documentMode)}function Kh(){Na&&(Na.detachEvent("onpropertychange",Qh),Ma=Na=null)}function Qh(t){if(t.propertyName==="value"&&Fi(Ma)){var n=[];Vh(n,Ma,t,ha(t)),gh(cy,n)}}function uy(t,n,o){t==="focusin"?(Kh(),Na=n,Ma=o,Na.attachEvent("onpropertychange",Qh)):t==="focusout"&&Kh()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fi(Ma)}function py(t,n){if(t==="click")return Fi(n)}function fy(t,n){if(t==="input"||t==="change")return Fi(n)}function my(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var An=typeof Object.is=="function"?Object.is:my;function Ra(t,n){if(An(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!g.call(n,u)||!An(t[u],n[u]))return!1}return!0}function Zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,n){var o=Zh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=n&&c>=n)return{node:o,offset:n-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zh(o)}}function Jh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ep(){for(var t=window,n=be();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=be(t.document)}return n}function Kl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function gy(t){var n=ep(),o=t.focusedElem,c=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&Jh(o.ownerDocument.documentElement,o)){if(c!==null&&Kl(o)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!t.extend&&p>c&&(u=c,c=p,p=u),u=Xh(o,p);var b=Xh(o,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),p>c?(t.addRange(n),t.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vy=f&&"documentMode"in document&&11>=document.documentMode,_o=null,Ql=null,La=null,Zl=!1;function tp(t,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||_o==null||_o!==be(c)||(c=_o,"selectionStart"in c&&Kl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Ra(La,c)||(La=c,c=Ui(Ql,"onSelect"),0<c.length&&(n=new Bl("onSelect","select",null,n,o),t.push({event:n,listeners:c}),n.target=_o)))}function Bi(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var Co={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Xl={},np={};f&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Wi(t){if(Xl[t])return Xl[t];if(!Co[t])return t;var n=Co[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in np)return Xl[t]=n[o];return t}var rp=Wi("animationend"),op=Wi("animationiteration"),ap=Wi("animationstart"),ip=Wi("transitionend"),sp=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,n){sp.set(t,n),d(n,[t])}for(var Jl=0;Jl<lp.length;Jl++){var ec=lp[Jl],yy=ec.toLowerCase(),xy=ec[0].toUpperCase()+ec.slice(1);mr(yy,"on"+xy)}mr(rp,"onAnimationEnd"),mr(op,"onAnimationIteration"),mr(ap,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(ip,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function cp(t,n,o){var c=t.type||"unknown-event";t.currentTarget=o,yv(c,n,void 0,t),t.currentTarget=null}function dp(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],u=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var b=c.length-1;0<=b;b--){var P=c[b],D=P.instance,ne=P.currentTarget;if(P=P.listener,D!==p&&u.isPropagationStopped())break e;cp(u,P,ne),p=D}else for(b=0;b<c.length;b++){if(P=c[b],D=P.instance,ne=P.currentTarget,P=P.listener,D!==p&&u.isPropagationStopped())break e;cp(u,P,ne),p=D}}}if(Si)throw t=Al,Si=!1,Al=null,t}function nt(t,n){var o=n[lc];o===void 0&&(o=n[lc]=new Set);var c=t+"__bubble";o.has(c)||(up(n,t,2,!1),o.add(c))}function tc(t,n,o){var c=0;n&&(c|=4),up(o,t,c,n)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Hi]){t[Hi]=!0,s.forEach(function(o){o!=="selectionchange"&&(wy.has(o)||tc(o,!1,t),tc(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hi]||(n[Hi]=!0,tc("selectionchange",!1,n))}}function up(t,n,o,c){switch(Ih(n)){case 1:var u=Iv;break;case 4:u=Ev;break;default:u=Ol}o=u.bind(null,n,o,t),u=void 0,!Ll||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function nc(t,n,o,c,u){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var D=b.tag;if((D===3||D===4)&&(D=b.stateNode.containerInfo,D===u||D.nodeType===8&&D.parentNode===u))return;b=b.return}for(;P!==null;){if(b=Wr(P),b===null)return;if(D=b.tag,D===5||D===6){c=p=b;continue e}P=P.parentNode}}c=c.return}gh(function(){var ne=p,he=ha(o),pe=[];e:{var ue=sp.get(t);if(ue!==void 0){var xe=Bl,ke=t;switch(t){case"keypress":if(zi(o)===0)break e;case"keydown":case"keyup":xe=Qv;break;case"focusin":ke="focus",xe=Ul;break;case"focusout":ke="blur",xe=Ul;break;case"beforeblur":case"afterblur":xe=Ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=Jv;break;case rp:case op:case ap:xe=Bv;break;case ip:xe=ty;break;case"scroll":xe=Pv;break;case"wheel":xe=ry;break;case"copy":case"cut":case"paste":xe=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Dh}var _e=(n&4)!==0,ft=!_e&&t==="scroll",Q=_e?ue!==null?ue+"Capture":null:ue;_e=[];for(var H=ne,J;H!==null;){J=H;var ge=J.stateNode;if(J.tag===5&&ge!==null&&(J=ge,Q!==null&&(ge=fa(H,Q),ge!=null&&_e.push(Ta(H,ge,J)))),ft)break;H=H.return}0<_e.length&&(ue=new xe(ue,ke,null,o,he),pe.push({event:ue,listeners:_e}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",ue&&o!==Fr&&(ke=o.relatedTarget||o.fromElement)&&(Wr(ke)||ke[Qn]))break e;if((xe||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,xe?(ke=o.relatedTarget||o.toElement,xe=ne,ke=ke?Wr(ke):null,ke!==null&&(ft=Br(ke),ke!==ft||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(xe=null,ke=ne),xe!==ke)){if(_e=zh,ge="onMouseLeave",Q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(_e=Dh,ge="onPointerLeave",Q="onPointerEnter",H="pointer"),ft=xe==null?ue:No(xe),J=ke==null?ue:No(ke),ue=new _e(ge,H+"leave",xe,o,he),ue.target=ft,ue.relatedTarget=J,ge=null,Wr(he)===ne&&(_e=new _e(Q,H+"enter",ke,o,he),_e.target=J,_e.relatedTarget=ft,ge=_e),ft=ge,xe&&ke)t:{for(_e=xe,Q=ke,H=0,J=_e;J;J=jo(J))H++;for(J=0,ge=Q;ge;ge=jo(ge))J++;for(;0<H-J;)_e=jo(_e),H--;for(;0<J-H;)Q=jo(Q),J--;for(;H--;){if(_e===Q||Q!==null&&_e===Q.alternate)break t;_e=jo(_e),Q=jo(Q)}_e=null}else _e=null;xe!==null&&hp(pe,ue,xe,_e,!1),ke!==null&&ft!==null&&hp(pe,ft,ke,_e,!0)}}e:{if(ue=ne?No(ne):window,xe=ue.nodeName&&ue.nodeName.toLowerCase(),xe==="select"||xe==="input"&&ue.type==="file")var Ce=dy;else if(qh(ue))if(Gh)Ce=fy;else{Ce=hy;var Ne=uy}else(xe=ue.nodeName)&&xe.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Ce=py);if(Ce&&(Ce=Ce(t,ne))){Vh(pe,Ce,o,he);break e}Ne&&Ne(t,ue,ne),t==="focusout"&&(Ne=ue._wrapperState)&&Ne.controlled&&ue.type==="number"&&Ie(ue,"number",ue.value)}switch(Ne=ne?No(ne):window,t){case"focusin":(qh(Ne)||Ne.contentEditable==="true")&&(_o=Ne,Ql=ne,La=null);break;case"focusout":La=Ql=_o=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,tp(pe,o,he);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":tp(pe,o,he)}var Me;if(Vl)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else ko?Hh(t,o)&&(Ae="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ae="onCompositionStart");Ae&&(Fh&&o.locale!=="ko"&&(ko||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ko&&(Me=Eh()):(fr=he,Fl="value"in fr?fr.value:fr.textContent,ko=!0)),Ne=Ui(ne,Ae),0<Ne.length&&(Ae=new Oh(Ae,t,null,o,he),pe.push({event:Ae,listeners:Ne}),Me?Ae.data=Me:(Me=Uh(o),Me!==null&&(Ae.data=Me)))),(Me=ay?iy(t,o):sy(t,o))&&(ne=Ui(ne,"onBeforeInput"),0<ne.length&&(he=new Oh("onBeforeInput","beforeinput",null,o,he),pe.push({event:he,listeners:ne}),he.data=Me))}dp(pe,n)})}function Ta(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Ui(t,n){for(var o=n+"Capture",c=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=fa(t,o),p!=null&&c.unshift(Ta(t,p,u)),p=fa(t,n),p!=null&&c.push(Ta(t,p,u))),t=t.return}return c}function jo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,n,o,c,u){for(var p=n._reactName,b=[];o!==null&&o!==c;){var P=o,D=P.alternate,ne=P.stateNode;if(D!==null&&D===c)break;P.tag===5&&ne!==null&&(P=ne,u?(D=fa(o,p),D!=null&&b.unshift(Ta(o,D,P))):u||(D=fa(o,p),D!=null&&b.push(Ta(o,D,P)))),o=o.return}b.length!==0&&t.push({event:n,listeners:b})}var by=/\r\n?/g,ky=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(ky,"")}function qi(t,n,o){if(n=pp(n),pp(t)!==n&&o)throw Error(i(425))}function Vi(){}var rc=null,oc=null;function ac(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(jy)}:ic;function jy(t){setTimeout(function(){throw t})}function sc(t,n){var o=n,c=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){t.removeChild(u),_a(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);_a(n)}function gr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function mp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Hn="__reactFiber$"+So,Ia="__reactProps$"+So,Qn="__reactContainer$"+So,lc="__reactEvents$"+So,Sy="__reactListeners$"+So,Ny="__reactHandles$"+So;function Wr(t){var n=t[Hn];if(n)return n;for(var o=t.parentNode;o;){if(n=o[Qn]||o[Hn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=mp(t);t!==null;){if(o=t[Hn])return o;t=mp(t)}return n}t=o,o=t.parentNode}return null}function Ea(t){return t=t[Hn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Gi(t){return t[Ia]||null}var cc=[],Mo=-1;function vr(t){return{current:t}}function rt(t){0>Mo||(t.current=cc[Mo],cc[Mo]=null,Mo--)}function et(t,n){Mo++,cc[Mo]=t.current,t.current=n}var yr={},Ot=vr(yr),Gt=vr(!1),Hr=yr;function Ro(t,n){var o=t.type.contextTypes;if(!o)return yr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Yt(t){return t=t.childContextTypes,t!=null}function Yi(){rt(Gt),rt(Ot)}function gp(t,n,o){if(Ot.current!==yr)throw Error(i(168));et(Ot,n),et(Gt,o)}function vp(t,n,o){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,q(t)||"Unknown",u));return V({},o,c)}function Ki(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Hr=Ot.current,et(Ot,t),et(Gt,Gt.current),!0}function yp(t,n,o){var c=t.stateNode;if(!c)throw Error(i(169));o?(t=vp(t,n,Hr),c.__reactInternalMemoizedMergedChildContext=t,rt(Gt),rt(Ot),et(Ot,t)):rt(Gt),et(Gt,o)}var Zn=null,Qi=!1,dc=!1;function xp(t){Zn===null?Zn=[t]:Zn.push(t)}function My(t){Qi=!0,xp(t)}function xr(){if(!dc&&Zn!==null){dc=!0;var t=0,n=Xe;try{var o=Zn;for(Xe=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Zn=null,Qi=!1}catch(u){throw Zn!==null&&(Zn=Zn.slice(t+1)),bh($l,xr),u}finally{Xe=n,dc=!1}}return null}var Lo=[],Ao=0,Zi=null,Xi=0,vn=[],yn=0,Ur=null,Xn=1,Jn="";function qr(t,n){Lo[Ao++]=Xi,Lo[Ao++]=Zi,Zi=t,Xi=n}function wp(t,n,o){vn[yn++]=Xn,vn[yn++]=Jn,vn[yn++]=Ur,Ur=t;var c=Xn;t=Jn;var u=32-Ln(c)-1;c&=~(1<<u),o+=1;var p=32-Ln(n)+u;if(30<p){var b=u-u%5;p=(c&(1<<b)-1).toString(32),c>>=b,u-=b,Xn=1<<32-Ln(n)+u|o<<u|c,Jn=p+t}else Xn=1<<p|o<<u|c,Jn=t}function uc(t){t.return!==null&&(qr(t,1),wp(t,1,0))}function hc(t){for(;t===Zi;)Zi=Lo[--Ao],Lo[Ao]=null,Xi=Lo[--Ao],Lo[Ao]=null;for(;t===Ur;)Ur=vn[--yn],vn[yn]=null,Jn=vn[--yn],vn[yn]=null,Xn=vn[--yn],vn[yn]=null}var sn=null,ln=null,it=!1,$n=null;function bp(t,n){var o=kn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function kp(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,sn=t,ln=gr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,sn=t,ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Ur!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=kn(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,sn=t,ln=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(it){var n=ln;if(n){var o=n;if(!kp(t,n)){if(pc(t))throw Error(i(418));n=gr(o.nextSibling);var c=sn;n&&kp(t,n)?bp(c,o):(t.flags=t.flags&-4097|2,it=!1,sn=t)}}else{if(pc(t))throw Error(i(418));t.flags=t.flags&-4097|2,it=!1,sn=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Ji(t){if(t!==sn)return!1;if(!it)return _p(t),it=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!ac(t.type,t.memoizedProps)),n&&(n=ln)){if(pc(t))throw Cp(),Error(i(418));for(;n;)bp(t,n),n=gr(n.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){ln=gr(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}ln=null}}else ln=sn?gr(t.stateNode.nextSibling):null;return!0}function Cp(){for(var t=ln;t;)t=gr(t.nextSibling)}function $o(){ln=sn=null,it=!1}function mc(t){$n===null?$n=[t]:$n.push(t)}var Ry=O.ReactCurrentBatchConfig;function Pa(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,t));var u=c,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(b){var P=u.refs;b===null?delete P[p]:P[p]=b},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function es(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function jp(t){var n=t._init;return n(t._payload)}function Sp(t){function n(Q,H){if(t){var J=Q.deletions;J===null?(Q.deletions=[H],Q.flags|=16):J.push(H)}}function o(Q,H){if(!t)return null;for(;H!==null;)n(Q,H),H=H.sibling;return null}function c(Q,H){for(Q=new Map;H!==null;)H.key!==null?Q.set(H.key,H):Q.set(H.index,H),H=H.sibling;return Q}function u(Q,H){return Q=Nr(Q,H),Q.index=0,Q.sibling=null,Q}function p(Q,H,J){return Q.index=J,t?(J=Q.alternate,J!==null?(J=J.index,J<H?(Q.flags|=2,H):J):(Q.flags|=2,H)):(Q.flags|=1048576,H)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function P(Q,H,J,ge){return H===null||H.tag!==6?(H=id(J,Q.mode,ge),H.return=Q,H):(H=u(H,J),H.return=Q,H)}function D(Q,H,J,ge){var Ce=J.type;return Ce===T?he(Q,H,J.props.children,ge,J.key):H!==null&&(H.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===re&&jp(Ce)===H.type)?(ge=u(H,J.props),ge.ref=Pa(Q,H,J),ge.return=Q,ge):(ge=Cs(J.type,J.key,J.props,null,Q.mode,ge),ge.ref=Pa(Q,H,J),ge.return=Q,ge)}function ne(Q,H,J,ge){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=sd(J,Q.mode,ge),H.return=Q,H):(H=u(H,J.children||[]),H.return=Q,H)}function he(Q,H,J,ge,Ce){return H===null||H.tag!==7?(H=Jr(J,Q.mode,ge,Ce),H.return=Q,H):(H=u(H,J),H.return=Q,H)}function pe(Q,H,J){if(typeof H=="string"&&H!==""||typeof H=="number")return H=id(""+H,Q.mode,J),H.return=Q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case R:return J=Cs(H.type,H.key,H.props,null,Q.mode,J),J.ref=Pa(Q,null,H),J.return=Q,J;case N:return H=sd(H,Q.mode,J),H.return=Q,H;case re:var ge=H._init;return pe(Q,ge(H._payload),J)}if(We(H)||W(H))return H=Jr(H,Q.mode,J,null),H.return=Q,H;es(Q,H)}return null}function ue(Q,H,J,ge){var Ce=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ce!==null?null:P(Q,H,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case R:return J.key===Ce?D(Q,H,J,ge):null;case N:return J.key===Ce?ne(Q,H,J,ge):null;case re:return Ce=J._init,ue(Q,H,Ce(J._payload),ge)}if(We(J)||W(J))return Ce!==null?null:he(Q,H,J,ge,null);es(Q,J)}return null}function xe(Q,H,J,ge,Ce){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return Q=Q.get(J)||null,P(H,Q,""+ge,Ce);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case R:return Q=Q.get(ge.key===null?J:ge.key)||null,D(H,Q,ge,Ce);case N:return Q=Q.get(ge.key===null?J:ge.key)||null,ne(H,Q,ge,Ce);case re:var Ne=ge._init;return xe(Q,H,J,Ne(ge._payload),Ce)}if(We(ge)||W(ge))return Q=Q.get(J)||null,he(H,Q,ge,Ce,null);es(H,ge)}return null}function ke(Q,H,J,ge){for(var Ce=null,Ne=null,Me=H,Ae=H=0,Mt=null;Me!==null&&Ae<J.length;Ae++){Me.index>Ae?(Mt=Me,Me=null):Mt=Me.sibling;var Ke=ue(Q,Me,J[Ae],ge);if(Ke===null){Me===null&&(Me=Mt);break}t&&Me&&Ke.alternate===null&&n(Q,Me),H=p(Ke,H,Ae),Ne===null?Ce=Ke:Ne.sibling=Ke,Ne=Ke,Me=Mt}if(Ae===J.length)return o(Q,Me),it&&qr(Q,Ae),Ce;if(Me===null){for(;Ae<J.length;Ae++)Me=pe(Q,J[Ae],ge),Me!==null&&(H=p(Me,H,Ae),Ne===null?Ce=Me:Ne.sibling=Me,Ne=Me);return it&&qr(Q,Ae),Ce}for(Me=c(Q,Me);Ae<J.length;Ae++)Mt=xe(Me,Q,Ae,J[Ae],ge),Mt!==null&&(t&&Mt.alternate!==null&&Me.delete(Mt.key===null?Ae:Mt.key),H=p(Mt,H,Ae),Ne===null?Ce=Mt:Ne.sibling=Mt,Ne=Mt);return t&&Me.forEach(function(Mr){return n(Q,Mr)}),it&&qr(Q,Ae),Ce}function _e(Q,H,J,ge){var Ce=W(J);if(typeof Ce!="function")throw Error(i(150));if(J=Ce.call(J),J==null)throw Error(i(151));for(var Ne=Ce=null,Me=H,Ae=H=0,Mt=null,Ke=J.next();Me!==null&&!Ke.done;Ae++,Ke=J.next()){Me.index>Ae?(Mt=Me,Me=null):Mt=Me.sibling;var Mr=ue(Q,Me,Ke.value,ge);if(Mr===null){Me===null&&(Me=Mt);break}t&&Me&&Mr.alternate===null&&n(Q,Me),H=p(Mr,H,Ae),Ne===null?Ce=Mr:Ne.sibling=Mr,Ne=Mr,Me=Mt}if(Ke.done)return o(Q,Me),it&&qr(Q,Ae),Ce;if(Me===null){for(;!Ke.done;Ae++,Ke=J.next())Ke=pe(Q,Ke.value,ge),Ke!==null&&(H=p(Ke,H,Ae),Ne===null?Ce=Ke:Ne.sibling=Ke,Ne=Ke);return it&&qr(Q,Ae),Ce}for(Me=c(Q,Me);!Ke.done;Ae++,Ke=J.next())Ke=xe(Me,Q,Ae,Ke.value,ge),Ke!==null&&(t&&Ke.alternate!==null&&Me.delete(Ke.key===null?Ae:Ke.key),H=p(Ke,H,Ae),Ne===null?Ce=Ke:Ne.sibling=Ke,Ne=Ke);return t&&Me.forEach(function(lx){return n(Q,lx)}),it&&qr(Q,Ae),Ce}function ft(Q,H,J,ge){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case R:e:{for(var Ce=J.key,Ne=H;Ne!==null;){if(Ne.key===Ce){if(Ce=J.type,Ce===T){if(Ne.tag===7){o(Q,Ne.sibling),H=u(Ne,J.props.children),H.return=Q,Q=H;break e}}else if(Ne.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===re&&jp(Ce)===Ne.type){o(Q,Ne.sibling),H=u(Ne,J.props),H.ref=Pa(Q,Ne,J),H.return=Q,Q=H;break e}o(Q,Ne);break}else n(Q,Ne);Ne=Ne.sibling}J.type===T?(H=Jr(J.props.children,Q.mode,ge,J.key),H.return=Q,Q=H):(ge=Cs(J.type,J.key,J.props,null,Q.mode,ge),ge.ref=Pa(Q,H,J),ge.return=Q,Q=ge)}return b(Q);case N:e:{for(Ne=J.key;H!==null;){if(H.key===Ne)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){o(Q,H.sibling),H=u(H,J.children||[]),H.return=Q,Q=H;break e}else{o(Q,H);break}else n(Q,H);H=H.sibling}H=sd(J,Q.mode,ge),H.return=Q,Q=H}return b(Q);case re:return Ne=J._init,ft(Q,H,Ne(J._payload),ge)}if(We(J))return ke(Q,H,J,ge);if(W(J))return _e(Q,H,J,ge);es(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,H!==null&&H.tag===6?(o(Q,H.sibling),H=u(H,J),H.return=Q,Q=H):(o(Q,H),H=id(J,Q.mode,ge),H.return=Q,Q=H),b(Q)):o(Q,H)}return ft}var To=Sp(!0),Np=Sp(!1),ts=vr(null),ns=null,Io=null,gc=null;function vc(){gc=Io=ns=null}function yc(t){var n=ts.current;rt(ts),t._currentValue=n}function xc(t,n,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===o)break;t=t.return}}function Eo(t,n){ns=t,gc=Io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Kt=!0),t.firstContext=null)}function xn(t){var n=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:n,next:null},Io===null){if(ns===null)throw Error(i(308));Io=t,ns.dependencies={lanes:0,firstContext:t}}else Io=Io.next=t;return n}var Vr=null;function wc(t){Vr===null?Vr=[t]:Vr.push(t)}function Mp(t,n,o,c){var u=n.interleaved;return u===null?(o.next=o,wc(n)):(o.next=u.next,u.next=o),n.interleaved=o,er(t,c)}function er(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var wr=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function br(t,n,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ge&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,er(t,o)}return u=c.interleaved,u===null?(n.next=n,wc(c)):(n.next=u.next,u.next=n),c.interleaved=n,er(t,o)}function rs(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,El(t,o)}}function Lp(t,n){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=b:p=p.next=b,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function os(t,n,o,c){var u=t.updateQueue;wr=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var D=P,ne=D.next;D.next=null,b===null?p=ne:b.next=ne,b=D;var he=t.alternate;he!==null&&(he=he.updateQueue,P=he.lastBaseUpdate,P!==b&&(P===null?he.firstBaseUpdate=ne:P.next=ne,he.lastBaseUpdate=D))}if(p!==null){var pe=u.baseState;b=0,he=ne=D=null,P=p;do{var ue=P.lane,xe=P.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:xe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ke=t,_e=P;switch(ue=n,xe=o,_e.tag){case 1:if(ke=_e.payload,typeof ke=="function"){pe=ke.call(xe,pe,ue);break e}pe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=_e.payload,ue=typeof ke=="function"?ke.call(xe,pe,ue):ke,ue==null)break e;pe=V({},pe,ue);break e;case 2:wr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[P]:ue.push(P))}else xe={eventTime:xe,lane:ue,tag:P.tag,payload:P.payload,callback:P.callback,next:null},he===null?(ne=he=xe,D=pe):he=he.next=xe,b|=ue;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;ue=P,P=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(D=pe),u.baseState=D,u.firstBaseUpdate=ne,u.lastBaseUpdate=he,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);Kr|=b,t.lanes=b,t.memoizedState=pe}}function Ap(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var za={},Un=vr(za),Oa=vr(za),Da=vr(za);function Gr(t){if(t===za)throw Error(i(174));return t}function kc(t,n){switch(et(Da,n),et(Oa,t),et(Un,za),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=lt(n,t)}rt(Un),et(Un,n)}function Po(){rt(Un),rt(Oa),rt(Da)}function $p(t){Gr(Da.current);var n=Gr(Un.current),o=lt(n,t.type);n!==o&&(et(Oa,t),et(Un,o))}function _c(t){Oa.current===t&&(rt(Un),rt(Oa))}var dt=vr(0);function as(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Cc=[];function jc(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var is=O.ReactCurrentDispatcher,Sc=O.ReactCurrentBatchConfig,Yr=0,ut=null,_t=null,St=null,ss=!1,Fa=!1,Ba=0,Ly=0;function Dt(){throw Error(i(321))}function Nc(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!An(t[o],n[o]))return!1;return!0}function Mc(t,n,o,c,u,p){if(Yr=p,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,is.current=t===null||t.memoizedState===null?Iy:Ey,t=o(c,u),Fa){p=0;do{if(Fa=!1,Ba=0,25<=p)throw Error(i(301));p+=1,St=_t=null,n.updateQueue=null,is.current=Py,t=o(c,u)}while(Fa)}if(is.current=ds,n=_t!==null&&_t.next!==null,Yr=0,St=_t=ut=null,ss=!1,n)throw Error(i(300));return t}function Rc(){var t=Ba!==0;return Ba=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?ut.memoizedState=St=t:St=St.next=t,St}function wn(){if(_t===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var n=St===null?ut.memoizedState:St.next;if(n!==null)St=n,_t=t;else{if(t===null)throw Error(i(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?ut.memoizedState=St=t:St=St.next=t}return St}function Wa(t,n){return typeof n=="function"?n(t):n}function Lc(t){var n=wn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=_t,u=c.baseQueue,p=o.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}c.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,c=c.baseState;var P=b=null,D=null,ne=p;do{var he=ne.lane;if((Yr&he)===he)D!==null&&(D=D.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var pe={lane:he,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};D===null?(P=D=pe,b=c):D=D.next=pe,ut.lanes|=he,Kr|=he}ne=ne.next}while(ne!==null&&ne!==p);D===null?b=c:D.next=P,An(c,n.memoizedState)||(Kt=!0),n.memoizedState=c,n.baseState=b,n.baseQueue=D,o.lastRenderedState=c}if(t=o.interleaved,t!==null){u=t;do p=u.lane,ut.lanes|=p,Kr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Ac(t){var n=wn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do p=t(p,b.action),b=b.next;while(b!==u);An(p,n.memoizedState)||(Kt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,c]}function Tp(){}function Ip(t,n){var o=ut,c=wn(),u=n(),p=!An(c.memoizedState,u);if(p&&(c.memoizedState=u,Kt=!0),c=c.queue,$c(zp.bind(null,o,c,t),[t]),c.getSnapshot!==n||p||St!==null&&St.memoizedState.tag&1){if(o.flags|=2048,Ha(9,Pp.bind(null,o,c,u,n),void 0,null),Nt===null)throw Error(i(349));(Yr&30)!==0||Ep(o,n,u)}return u}function Ep(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=ut.updateQueue,n===null?(n={lastEffect:null,stores:null},ut.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Pp(t,n,o,c){n.value=o,n.getSnapshot=c,Op(n)&&Dp(t)}function zp(t,n,o){return o(function(){Op(n)&&Dp(t)})}function Op(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!An(t,o)}catch{return!0}}function Dp(t){var n=er(t,1);n!==null&&Pn(n,t,1,-1)}function Fp(t){var n=qn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},n.queue=t,t=t.dispatch=Ty.bind(null,ut,t),[n.memoizedState,t]}function Ha(t,n,o,c){return t={tag:t,create:n,destroy:o,deps:c,next:null},n=ut.updateQueue,n===null?(n={lastEffect:null,stores:null},ut.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,n.lastEffect=t)),t}function Bp(){return wn().memoizedState}function ls(t,n,o,c){var u=qn();ut.flags|=t,u.memoizedState=Ha(1|n,o,void 0,c===void 0?null:c)}function cs(t,n,o,c){var u=wn();c=c===void 0?null:c;var p=void 0;if(_t!==null){var b=_t.memoizedState;if(p=b.destroy,c!==null&&Nc(c,b.deps)){u.memoizedState=Ha(n,o,p,c);return}}ut.flags|=t,u.memoizedState=Ha(1|n,o,p,c)}function Wp(t,n){return ls(8390656,8,t,n)}function $c(t,n){return cs(2048,8,t,n)}function Hp(t,n){return cs(4,2,t,n)}function Up(t,n){return cs(4,4,t,n)}function qp(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vp(t,n,o){return o=o!=null?o.concat([t]):null,cs(4,4,qp.bind(null,n,t),o)}function Tc(){}function Gp(t,n){var o=wn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Nc(n,c[1])?c[0]:(o.memoizedState=[t,n],t)}function Yp(t,n){var o=wn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Nc(n,c[1])?c[0]:(t=t(),o.memoizedState=[t,n],t)}function Kp(t,n,o){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=o):(An(o,n)||(o=jh(),ut.lanes|=o,Kr|=o,t.baseState=!0),n)}function Ay(t,n){var o=Xe;Xe=o!==0&&4>o?o:4,t(!0);var c=Sc.transition;Sc.transition={};try{t(!1),n()}finally{Xe=o,Sc.transition=c}}function Qp(){return wn().memoizedState}function $y(t,n,o){var c=jr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Zp(t))Xp(n,o);else if(o=Mp(t,n,o,c),o!==null){var u=Ut();Pn(o,t,c,u),Jp(o,n,c)}}function Ty(t,n,o){var c=jr(t),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zp(t))Xp(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var b=n.lastRenderedState,P=p(b,o);if(u.hasEagerState=!0,u.eagerState=P,An(P,b)){var D=n.interleaved;D===null?(u.next=u,wc(n)):(u.next=D.next,D.next=u),n.interleaved=u;return}}catch{}finally{}o=Mp(t,n,u,c),o!==null&&(u=Ut(),Pn(o,t,c,u),Jp(o,n,c))}}function Zp(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Xp(t,n){Fa=ss=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function Jp(t,n,o){if((o&4194240)!==0){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,El(t,o)}}var ds={readContext:xn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Iy={readContext:xn,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:Wp,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,ls(4194308,4,qp.bind(null,n,t),o)},useLayoutEffect:function(t,n){return ls(4194308,4,t,n)},useInsertionEffect:function(t,n){return ls(4,2,t,n)},useMemo:function(t,n){var o=qn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var c=qn();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=$y.bind(null,ut,t),[c.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:Fp,useDebugValue:Tc,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Fp(!1),n=t[0];return t=Ay.bind(null,t[1]),qn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var c=ut,u=qn();if(it){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),Nt===null)throw Error(i(349));(Yr&30)!==0||Ep(c,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,Wp(zp.bind(null,c,p,t),[t]),c.flags|=2048,Ha(9,Pp.bind(null,c,p,o,n),void 0,null),o},useId:function(){var t=qn(),n=Nt.identifierPrefix;if(it){var o=Jn,c=Xn;o=(c&~(1<<32-Ln(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=Ba++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Ly++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Ey={readContext:xn,useCallback:Gp,useContext:xn,useEffect:$c,useImperativeHandle:Vp,useInsertionEffect:Hp,useLayoutEffect:Up,useMemo:Yp,useReducer:Lc,useRef:Bp,useState:function(){return Lc(Wa)},useDebugValue:Tc,useDeferredValue:function(t){var n=wn();return Kp(n,_t.memoizedState,t)},useTransition:function(){var t=Lc(Wa)[0],n=wn().memoizedState;return[t,n]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Qp,unstable_isNewReconciler:!1},Py={readContext:xn,useCallback:Gp,useContext:xn,useEffect:$c,useImperativeHandle:Vp,useInsertionEffect:Hp,useLayoutEffect:Up,useMemo:Yp,useReducer:Ac,useRef:Bp,useState:function(){return Ac(Wa)},useDebugValue:Tc,useDeferredValue:function(t){var n=wn();return _t===null?n.memoizedState=t:Kp(n,_t.memoizedState,t)},useTransition:function(){var t=Ac(Wa)[0],n=wn().memoizedState;return[t,n]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Qp,unstable_isNewReconciler:!1};function Tn(t,n){if(t&&t.defaultProps){n=V({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function Ic(t,n,o,c){n=t.memoizedState,o=o(c,n),o=o==null?n:V({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var us={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var c=Ut(),u=jr(t),p=tr(c,u);p.payload=n,o!=null&&(p.callback=o),n=br(t,p,u),n!==null&&(Pn(n,t,u,c),rs(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var c=Ut(),u=jr(t),p=tr(c,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=br(t,p,u),n!==null&&(Pn(n,t,u,c),rs(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=Ut(),c=jr(t),u=tr(o,c);u.tag=2,n!=null&&(u.callback=n),n=br(t,u,c),n!==null&&(Pn(n,t,c,o),rs(n,t,c))}};function e1(t,n,o,c,u,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,b):n.prototype&&n.prototype.isPureReactComponent?!Ra(o,c)||!Ra(u,p):!0}function t1(t,n,o){var c=!1,u=yr,p=n.contextType;return typeof p=="object"&&p!==null?p=xn(p):(u=Yt(n)?Hr:Ot.current,c=n.contextTypes,p=(c=c!=null)?Ro(t,u):yr),n=new n(o,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=us,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),n}function n1(t,n,o,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==t&&us.enqueueReplaceState(n,n.state,null)}function Ec(t,n,o,c){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},bc(t);var p=n.contextType;typeof p=="object"&&p!==null?u.context=xn(p):(p=Yt(n)?Hr:Ot.current,u.context=Ro(t,p)),u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ic(t,n,p,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&us.enqueueReplaceState(u,u.state,null),os(t,o,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,n){try{var o="",c=n;do o+=ie(c),c=c.return;while(c);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:u,digest:null}}function Pc(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function zc(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function r1(t,n,o){o=tr(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){ys||(ys=!0,Xc=c),zc(t,n)},o}function o1(t,n,o){o=tr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;o.payload=function(){return c(u)},o.callback=function(){zc(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){zc(t,n),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),o}function a1(t,n,o){var c=t.pingCache;if(c===null){c=t.pingCache=new zy;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(o)||(u.add(o),t=Zy.bind(null,t,n,o),n.then(t,t))}function i1(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function s1(t,n,o,c,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=tr(-1,1),n.tag=2,br(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Oy=O.ReactCurrentOwner,Kt=!1;function Ht(t,n,o,c){n.child=t===null?Np(n,null,o,c):To(n,t.child,o,c)}function l1(t,n,o,c,u){o=o.render;var p=n.ref;return Eo(n,u),c=Mc(t,n,o,c,p,u),o=Rc(),t!==null&&!Kt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,nr(t,n,u)):(it&&o&&uc(n),n.flags|=1,Ht(t,n,c,u),n.child)}function c1(t,n,o,c,u){if(t===null){var p=o.type;return typeof p=="function"&&!ad(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,d1(t,n,p,c,u)):(t=Cs(o.type,null,c,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&u)===0){var b=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(b,c)&&t.ref===n.ref)return nr(t,n,u)}return n.flags|=1,t=Nr(p,c),t.ref=n.ref,t.return=n,n.child=t}function d1(t,n,o,c,u){if(t!==null){var p=t.memoizedProps;if(Ra(p,c)&&t.ref===n.ref)if(Kt=!1,n.pendingProps=c=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Kt=!0);else return n.lanes=t.lanes,nr(t,n,u)}return Oc(t,n,o,c,u)}function u1(t,n,o){var c=n.pendingProps,u=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Do,cn),cn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,et(Do,cn),cn|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,et(Do,cn),cn|=c}else p!==null?(c=p.baseLanes|o,n.memoizedState=null):c=o,et(Do,cn),cn|=c;return Ht(t,n,u,o),n.child}function h1(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Oc(t,n,o,c,u){var p=Yt(o)?Hr:Ot.current;return p=Ro(n,p),Eo(n,u),o=Mc(t,n,o,c,p,u),c=Rc(),t!==null&&!Kt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,nr(t,n,u)):(it&&c&&uc(n),n.flags|=1,Ht(t,n,o,u),n.child)}function p1(t,n,o,c,u){if(Yt(o)){var p=!0;Ki(n)}else p=!1;if(Eo(n,u),n.stateNode===null)ps(t,n),t1(n,o,c),Ec(n,o,c,u),c=!0;else if(t===null){var b=n.stateNode,P=n.memoizedProps;b.props=P;var D=b.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=xn(ne):(ne=Yt(o)?Hr:Ot.current,ne=Ro(n,ne));var he=o.getDerivedStateFromProps,pe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==c||D!==ne)&&n1(n,b,c,ne),wr=!1;var ue=n.memoizedState;b.state=ue,os(n,c,b,u),D=n.memoizedState,P!==c||ue!==D||Gt.current||wr?(typeof he=="function"&&(Ic(n,o,he,c),D=n.memoizedState),(P=wr||e1(n,o,P,c,ue,D,ne))?(pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=D),b.props=c,b.state=D,b.context=ne,c=P):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{b=n.stateNode,Rp(t,n),P=n.memoizedProps,ne=n.type===n.elementType?P:Tn(n.type,P),b.props=ne,pe=n.pendingProps,ue=b.context,D=o.contextType,typeof D=="object"&&D!==null?D=xn(D):(D=Yt(o)?Hr:Ot.current,D=Ro(n,D));var xe=o.getDerivedStateFromProps;(he=typeof xe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==pe||ue!==D)&&n1(n,b,c,D),wr=!1,ue=n.memoizedState,b.state=ue,os(n,c,b,u);var ke=n.memoizedState;P!==pe||ue!==ke||Gt.current||wr?(typeof xe=="function"&&(Ic(n,o,xe,c),ke=n.memoizedState),(ne=wr||e1(n,o,ne,c,ue,ke,D)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,ke,D),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,ke,D)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=ke),b.props=c,b.state=ke,b.context=D,c=ne):(typeof b.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),c=!1)}return Dc(t,n,o,c,p,u)}function Dc(t,n,o,c,u,p){h1(t,n);var b=(n.flags&128)!==0;if(!c&&!b)return u&&yp(n,o,!1),nr(t,n,p);c=n.stateNode,Oy.current=n;var P=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&b?(n.child=To(n,t.child,null,p),n.child=To(n,null,P,p)):Ht(t,n,P,p),n.memoizedState=c.state,u&&yp(n,o,!0),n.child}function f1(t){var n=t.stateNode;n.pendingContext?gp(t,n.pendingContext,n.pendingContext!==n.context):n.context&&gp(t,n.context,!1),kc(t,n.containerInfo)}function m1(t,n,o,c,u){return $o(),mc(u),n.flags|=256,Ht(t,n,o,c),n.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function g1(t,n,o){var c=n.pendingProps,u=dt.current,p=!1,b=(n.flags&128)!==0,P;if((P=b)||(P=t!==null&&t.memoizedState===null?!1:(u&2)!==0),P?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),et(dt,u&1),t===null)return fc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=c.children,t=c.fallback,p?(c=n.mode,p=n.child,b={mode:"hidden",children:b},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=b):p=js(b,c,0,null),t=Jr(t,c,o,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=Bc(o),n.memoizedState=Fc,t):Wc(n,b));if(u=t.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return Dy(t,n,b,c,P,u,o);if(p){p=c.fallback,b=n.mode,u=t.child,P=u.sibling;var D={mode:"hidden",children:c.children};return(b&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=D,n.deletions=null):(c=Nr(u,D),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?p=Nr(P,p):(p=Jr(p,b,o,null),p.flags|=2),p.return=n,c.return=n,c.sibling=p,n.child=c,c=p,p=n.child,b=t.child.memoizedState,b=b===null?Bc(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=t.childLanes&~o,n.memoizedState=Fc,c}return p=t.child,t=p.sibling,c=Nr(p,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=o),c.return=n,c.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=c,n.memoizedState=null,c}function Wc(t,n){return n=js({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function hs(t,n,o,c){return c!==null&&mc(c),To(n,t.child,null,o),t=Wc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Dy(t,n,o,c,u,p,b){if(o)return n.flags&256?(n.flags&=-257,c=Pc(Error(i(422))),hs(t,n,b,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=c.fallback,u=n.mode,c=js({mode:"visible",children:c.children},u,0,null),p=Jr(p,u,b,null),p.flags|=2,c.return=n,p.return=n,c.sibling=p,n.child=c,(n.mode&1)!==0&&To(n,t.child,null,b),n.child.memoizedState=Bc(b),n.memoizedState=Fc,p);if((n.mode&1)===0)return hs(t,n,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,p=Error(i(419)),c=Pc(p,c,void 0),hs(t,n,b,c)}if(P=(b&t.childLanes)!==0,Kt||P){if(c=Nt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,er(t,u),Pn(c,t,u,-1))}return od(),c=Pc(Error(i(421))),hs(t,n,b,c)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=Xy.bind(null,t),u._reactRetry=n,null):(t=p.treeContext,ln=gr(u.nextSibling),sn=n,it=!0,$n=null,t!==null&&(vn[yn++]=Xn,vn[yn++]=Jn,vn[yn++]=Ur,Xn=t.id,Jn=t.overflow,Ur=n),n=Wc(n,c.children),n.flags|=4096,n)}function v1(t,n,o){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),xc(t.return,n,o)}function Hc(t,n,o,c,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=u)}function y1(t,n,o){var c=n.pendingProps,u=c.revealOrder,p=c.tail;if(Ht(t,n,c.children,o),c=dt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v1(t,o,n);else if(t.tag===19)v1(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(et(dt,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&as(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Hc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&as(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Hc(n,!0,o,null,p);break;case"together":Hc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ps(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function nr(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),Kr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Nr(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Nr(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function Fy(t,n,o){switch(n.tag){case 3:f1(n),$o();break;case 5:$p(n);break;case 1:Yt(n.type)&&Ki(n);break;case 4:kc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;et(ts,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(et(dt,dt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?g1(t,n,o):(et(dt,dt.current&1),t=nr(t,n,o),t!==null?t.sibling:null);et(dt,dt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,(t.flags&128)!==0){if(c)return y1(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(dt,dt.current),c)break;return null;case 22:case 23:return n.lanes=0,u1(t,n,o)}return nr(t,n,o)}var x1,Uc,w1,b1;x1=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Uc=function(){},w1=function(t,n,o,c){var u=t.memoizedProps;if(u!==c){t=n.stateNode,Gr(Un.current);var p=null;switch(o){case"input":u=ve(t,u),c=ve(t,c),p=[];break;case"select":u=V({},u,{value:void 0}),c=V({},c,{value:void 0}),p=[];break;case"textarea":u=vt(t,u),c=vt(t,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Vi)}ct(o,c);var b;o=null;for(ne in u)if(!c.hasOwnProperty(ne)&&u.hasOwnProperty(ne)&&u[ne]!=null)if(ne==="style"){var P=u[ne];for(b in P)P.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(l.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in c){var D=c[ne];if(P=u!=null?u[ne]:void 0,c.hasOwnProperty(ne)&&D!==P&&(D!=null||P!=null))if(ne==="style")if(P){for(b in P)!P.hasOwnProperty(b)||D&&D.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in D)D.hasOwnProperty(b)&&P[b]!==D[b]&&(o||(o={}),o[b]=D[b])}else o||(p||(p=[]),p.push(ne,o)),o=D;else ne==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(p=p||[]).push(ne,D)):ne==="children"?typeof D!="string"&&typeof D!="number"||(p=p||[]).push(ne,""+D):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(l.hasOwnProperty(ne)?(D!=null&&ne==="onScroll"&&nt("scroll",t),p||P===D||(p=[])):(p=p||[]).push(ne,D))}o&&(p=p||[]).push("style",o);var ne=p;(n.updateQueue=ne)&&(n.flags|=4)}},b1=function(t,n,o,c){o!==c&&(n.flags|=4)};function Ua(t,n){if(!it)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Ft(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=o,n}function By(t,n,o){var c=n.pendingProps;switch(hc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(n),null;case 1:return Yt(n.type)&&Yi(),Ft(n),null;case 3:return c=n.stateNode,Po(),rt(Gt),rt(Ot),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ji(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$n!==null&&(td($n),$n=null))),Uc(t,n),Ft(n),null;case 5:_c(n);var u=Gr(Da.current);if(o=n.type,t!==null&&n.stateNode!=null)w1(t,n,o,c,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return Ft(n),null}if(t=Gr(Un.current),Ji(n)){c=n.stateNode,o=n.type;var p=n.memoizedProps;switch(c[Hn]=n,c[Ia]=p,t=(n.mode&1)!==0,o){case"dialog":nt("cancel",c),nt("close",c);break;case"iframe":case"object":case"embed":nt("load",c);break;case"video":case"audio":for(u=0;u<Aa.length;u++)nt(Aa[u],c);break;case"source":nt("error",c);break;case"img":case"image":case"link":nt("error",c),nt("load",c);break;case"details":nt("toggle",c);break;case"input":Le(c,p),nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},nt("invalid",c);break;case"textarea":He(c,p),nt("invalid",c)}ct(o,p),u=null;for(var b in p)if(p.hasOwnProperty(b)){var P=p[b];b==="children"?typeof P=="string"?c.textContent!==P&&(p.suppressHydrationWarning!==!0&&qi(c.textContent,P,t),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&qi(c.textContent,P,t),u=["children",""+P]):l.hasOwnProperty(b)&&P!=null&&b==="onScroll"&&nt("scroll",c)}switch(o){case"input":ce(c),Oe(c,p,!0);break;case"textarea":ce(c),st(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Vi)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=It(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(o,{is:c.is}):(t=b.createElement(o),o==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,o),t[Hn]=n,t[Ia]=c,x1(t,n,!1,!1),n.stateNode=t;e:{switch(b=Et(o,c),o){case"dialog":nt("cancel",t),nt("close",t),u=c;break;case"iframe":case"object":case"embed":nt("load",t),u=c;break;case"video":case"audio":for(u=0;u<Aa.length;u++)nt(Aa[u],t);u=c;break;case"source":nt("error",t),u=c;break;case"img":case"image":case"link":nt("error",t),nt("load",t),u=c;break;case"details":nt("toggle",t),u=c;break;case"input":Le(t,c),u=ve(t,c),nt("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=V({},c,{value:void 0}),nt("invalid",t);break;case"textarea":He(t,c),u=vt(t,c),nt("invalid",t);break;default:u=c}ct(o,u),P=u;for(p in P)if(P.hasOwnProperty(p)){var D=P[p];p==="style"?Re(t,D):p==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&ye(t,D)):p==="children"?typeof D=="string"?(o!=="textarea"||D!=="")&&Se(t,D):typeof D=="number"&&Se(t,""+D):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?D!=null&&p==="onScroll"&&nt("scroll",t):D!=null&&j(t,p,D,b))}switch(o){case"input":ce(t),Oe(t,c,!1);break;case"textarea":ce(t),st(t);break;case"option":c.value!=null&&t.setAttribute("value",""+I(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?Ye(t,!!c.multiple,p,!1):c.defaultValue!=null&&Ye(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Vi)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ft(n),null;case 6:if(t&&n.stateNode!=null)b1(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(o=Gr(Da.current),Gr(Un.current),Ji(n)){if(c=n.stateNode,o=n.memoizedProps,c[Hn]=n,(p=c.nodeValue!==o)&&(t=sn,t!==null))switch(t.tag){case 3:qi(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qi(c.nodeValue,o,(t.mode&1)!==0)}p&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Hn]=n,n.stateNode=c}return Ft(n),null;case 13:if(rt(dt),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&ln!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Cp(),$o(),n.flags|=98560,p=!1;else if(p=Ji(n),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Hn]=n}else $o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ft(n),p=!1}else $n!==null&&(td($n),$n=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(dt.current&1)!==0?Ct===0&&(Ct=3):od())),n.updateQueue!==null&&(n.flags|=4),Ft(n),null);case 4:return Po(),Uc(t,n),t===null&&$a(n.stateNode.containerInfo),Ft(n),null;case 10:return yc(n.type._context),Ft(n),null;case 17:return Yt(n.type)&&Yi(),Ft(n),null;case 19:if(rt(dt),p=n.memoizedState,p===null)return Ft(n),null;if(c=(n.flags&128)!==0,b=p.rendering,b===null)if(c)Ua(p,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(b=as(t),b!==null){for(n.flags|=128,Ua(p,!1),c=b.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)p=o,t=c,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,t=b.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return et(dt,dt.current&1|2),n.child}t=t.sibling}p.tail!==null&&pt()>Fo&&(n.flags|=128,c=!0,Ua(p,!1),n.lanes=4194304)}else{if(!c)if(t=as(b),t!==null){if(n.flags|=128,c=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ua(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!it)return Ft(n),null}else 2*pt()-p.renderingStartTime>Fo&&o!==1073741824&&(n.flags|=128,c=!0,Ua(p,!1),n.lanes=4194304);p.isBackwards?(b.sibling=n.child,n.child=b):(o=p.last,o!==null?o.sibling=b:n.child=b,p.last=b)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=pt(),n.sibling=null,o=dt.current,et(dt,c?o&1|2:o&1),n):(Ft(n),null);case 22:case 23:return rd(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(cn&1073741824)!==0&&(Ft(n),n.subtreeFlags&6&&(n.flags|=8192)):Ft(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function Wy(t,n){switch(hc(n),n.tag){case 1:return Yt(n.type)&&Yi(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Po(),rt(Gt),rt(Ot),jc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return _c(n),null;case 13:if(rt(dt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));$o()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return rt(dt),null;case 4:return Po(),null;case 10:return yc(n.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var fs=!1,Bt=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,we=null;function Oo(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){ht(t,n,c)}else o.current=null}function qc(t,n,o){try{o()}catch(c){ht(t,n,c)}}var k1=!1;function Uy(t,n){if(rc=Ii,t=ep(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var b=0,P=-1,D=-1,ne=0,he=0,pe=t,ue=null;t:for(;;){for(var xe;pe!==o||u!==0&&pe.nodeType!==3||(P=b+u),pe!==p||c!==0&&pe.nodeType!==3||(D=b+c),pe.nodeType===3&&(b+=pe.nodeValue.length),(xe=pe.firstChild)!==null;)ue=pe,pe=xe;for(;;){if(pe===t)break t;if(ue===o&&++ne===u&&(P=b),ue===p&&++he===c&&(D=b),(xe=pe.nextSibling)!==null)break;pe=ue,ue=pe.parentNode}pe=xe}o=P===-1||D===-1?null:{start:P,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(oc={focusedElem:t,selectionRange:o},Ii=!1,we=n;we!==null;)if(n=we,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,we=t;else for(;we!==null;){n=we;try{var ke=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var _e=ke.memoizedProps,ft=ke.memoizedState,Q=n.stateNode,H=Q.getSnapshotBeforeUpdate(n.elementType===n.type?_e:Tn(n.type,_e),ft);Q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var J=n.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ge){ht(n,n.return,ge)}if(t=n.sibling,t!==null){t.return=n.return,we=t;break}we=n.return}return ke=k1,k1=!1,ke}function qa(t,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&qc(n,o,p)}u=u.next}while(u!==c)}}function ms(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function Vc(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function _1(t){var n=t.alternate;n!==null&&(t.alternate=null,_1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Hn],delete n[Ia],delete n[lc],delete n[Sy],delete n[Ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C1(t){return t.tag===5||t.tag===3||t.tag===4}function j1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Vi));else if(c!==4&&(t=t.child,t!==null))for(Gc(t,n,o),t=t.sibling;t!==null;)Gc(t,n,o),t=t.sibling}function Yc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Yc(t,n,o),t=t.sibling;t!==null;)Yc(t,n,o),t=t.sibling}var Pt=null,In=!1;function kr(t,n,o){for(o=o.child;o!==null;)S1(t,n,o),o=o.sibling}function S1(t,n,o){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Mi,o)}catch{}switch(o.tag){case 5:Bt||Oo(o,n);case 6:var c=Pt,u=In;Pt=null,kr(t,n,o),Pt=c,In=u,Pt!==null&&(In?(t=Pt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Pt.removeChild(o.stateNode));break;case 18:Pt!==null&&(In?(t=Pt,o=o.stateNode,t.nodeType===8?sc(t.parentNode,o):t.nodeType===1&&sc(t,o),_a(t)):sc(Pt,o.stateNode));break;case 4:c=Pt,u=In,Pt=o.stateNode.containerInfo,In=!0,kr(t,n,o),Pt=c,In=u;break;case 0:case 11:case 14:case 15:if(!Bt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,b=p.destroy;p=p.tag,b!==void 0&&((p&2)!==0||(p&4)!==0)&&qc(o,n,b),u=u.next}while(u!==c)}kr(t,n,o);break;case 1:if(!Bt&&(Oo(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(P){ht(o,n,P)}kr(t,n,o);break;case 21:kr(t,n,o);break;case 22:o.mode&1?(Bt=(c=Bt)||o.memoizedState!==null,kr(t,n,o),Bt=c):kr(t,n,o);break;default:kr(t,n,o)}}function N1(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Hy),n.forEach(function(c){var u=Jy.bind(null,t,c);o.has(c)||(o.add(c),c.then(u,u))})}}function En(t,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var p=t,b=n,P=b;e:for(;P!==null;){switch(P.tag){case 5:Pt=P.stateNode,In=!1;break e;case 3:Pt=P.stateNode.containerInfo,In=!0;break e;case 4:Pt=P.stateNode.containerInfo,In=!0;break e}P=P.return}if(Pt===null)throw Error(i(160));S1(p,b,u),Pt=null,In=!1;var D=u.alternate;D!==null&&(D.return=null),u.return=null}catch(ne){ht(u,n,ne)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)M1(n,t),n=n.sibling}function M1(t,n){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(n,t),Vn(t),c&4){try{qa(3,t,t.return),ms(3,t)}catch(_e){ht(t,t.return,_e)}try{qa(5,t,t.return)}catch(_e){ht(t,t.return,_e)}}break;case 1:En(n,t),Vn(t),c&512&&o!==null&&Oo(o,o.return);break;case 5:if(En(n,t),Vn(t),c&512&&o!==null&&Oo(o,o.return),t.flags&32){var u=t.stateNode;try{Se(u,"")}catch(_e){ht(t,t.return,_e)}}if(c&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,b=o!==null?o.memoizedProps:p,P=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&Te(u,p),Et(P,b);var ne=Et(P,p);for(b=0;b<D.length;b+=2){var he=D[b],pe=D[b+1];he==="style"?Re(u,pe):he==="dangerouslySetInnerHTML"?ye(u,pe):he==="children"?Se(u,pe):j(u,he,pe,ne)}switch(P){case"input":ze(u,p);break;case"textarea":yt(u,p);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var xe=p.value;xe!=null?Ye(u,!!p.multiple,xe,!1):ue!==!!p.multiple&&(p.defaultValue!=null?Ye(u,!!p.multiple,p.defaultValue,!0):Ye(u,!!p.multiple,p.multiple?[]:"",!1))}u[Ia]=p}catch(_e){ht(t,t.return,_e)}}break;case 6:if(En(n,t),Vn(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(_e){ht(t,t.return,_e)}}break;case 3:if(En(n,t),Vn(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{_a(n.containerInfo)}catch(_e){ht(t,t.return,_e)}break;case 4:En(n,t),Vn(t);break;case 13:En(n,t),Vn(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=pt())),c&4&&N1(t);break;case 22:if(he=o!==null&&o.memoizedState!==null,t.mode&1?(Bt=(ne=Bt)||he,En(n,t),Bt=ne):En(n,t),Vn(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!he&&(t.mode&1)!==0)for(we=t,he=t.child;he!==null;){for(pe=we=he;we!==null;){switch(ue=we,xe=ue.child,ue.tag){case 0:case 11:case 14:case 15:qa(4,ue,ue.return);break;case 1:Oo(ue,ue.return);var ke=ue.stateNode;if(typeof ke.componentWillUnmount=="function"){c=ue,o=ue.return;try{n=c,ke.props=n.memoizedProps,ke.state=n.memoizedState,ke.componentWillUnmount()}catch(_e){ht(c,o,_e)}}break;case 5:Oo(ue,ue.return);break;case 22:if(ue.memoizedState!==null){A1(pe);continue}}xe!==null?(xe.return=ue,we=xe):A1(pe)}he=he.sibling}e:for(he=null,pe=t;;){if(pe.tag===5){if(he===null){he=pe;try{u=pe.stateNode,ne?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=pe.stateNode,D=pe.memoizedProps.style,b=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Rn("display",b))}catch(_e){ht(t,t.return,_e)}}}else if(pe.tag===6){if(he===null)try{pe.stateNode.nodeValue=ne?"":pe.memoizedProps}catch(_e){ht(t,t.return,_e)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;he===pe&&(he=null),pe=pe.return}he===pe&&(he=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:En(n,t),Vn(t),c&4&&N1(t);break;case 21:break;default:En(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(C1(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(Se(u,""),c.flags&=-33);var p=j1(t);Yc(t,p,u);break;case 3:case 4:var b=c.stateNode.containerInfo,P=j1(t);Gc(t,P,b);break;default:throw Error(i(161))}}catch(D){ht(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qy(t,n,o){we=t,R1(t)}function R1(t,n,o){for(var c=(t.mode&1)!==0;we!==null;){var u=we,p=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||fs;if(!b){var P=u.alternate,D=P!==null&&P.memoizedState!==null||Bt;P=fs;var ne=Bt;if(fs=b,(Bt=D)&&!ne)for(we=u;we!==null;)b=we,D=b.child,b.tag===22&&b.memoizedState!==null?$1(u):D!==null?(D.return=b,we=D):$1(u);for(;p!==null;)we=p,R1(p),p=p.sibling;we=u,fs=P,Bt=ne}L1(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,we=p):L1(t)}}function L1(t){for(;we!==null;){var n=we;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Bt||ms(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Bt)if(o===null)c.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Tn(n.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Ap(n,p,c);break;case 3:var b=n.updateQueue;if(b!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Ap(n,b,o)}break;case 5:var P=n.stateNode;if(o===null&&n.flags&4){o=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&o.focus();break;case"img":D.src&&(o.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ne=n.alternate;if(ne!==null){var he=ne.memoizedState;if(he!==null){var pe=he.dehydrated;pe!==null&&_a(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Bt||n.flags&512&&Vc(n)}catch(ue){ht(n,n.return,ue)}}if(n===t){we=null;break}if(o=n.sibling,o!==null){o.return=n.return,we=o;break}we=n.return}}function A1(t){for(;we!==null;){var n=we;if(n===t){we=null;break}var o=n.sibling;if(o!==null){o.return=n.return,we=o;break}we=n.return}}function $1(t){for(;we!==null;){var n=we;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{ms(4,n)}catch(D){ht(n,o,D)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(D){ht(n,u,D)}}var p=n.return;try{Vc(n)}catch(D){ht(n,p,D)}break;case 5:var b=n.return;try{Vc(n)}catch(D){ht(n,b,D)}}}catch(D){ht(n,n.return,D)}if(n===t){we=null;break}var P=n.sibling;if(P!==null){P.return=n.return,we=P;break}we=n.return}}var Vy=Math.ceil,gs=O.ReactCurrentDispatcher,Kc=O.ReactCurrentOwner,bn=O.ReactCurrentBatchConfig,Ge=0,Nt=null,wt=null,zt=0,cn=0,Do=vr(0),Ct=0,Va=null,Kr=0,vs=0,Qc=0,Ga=null,Qt=null,Zc=0,Fo=1/0,rr=null,ys=!1,Xc=null,_r=null,xs=!1,Cr=null,ws=0,Ya=0,Jc=null,bs=-1,ks=0;function Ut(){return(Ge&6)!==0?pt():bs!==-1?bs:bs=pt()}function jr(t){return(t.mode&1)===0?1:(Ge&2)!==0&&zt!==0?zt&-zt:Ry.transition!==null?(ks===0&&(ks=jh()),ks):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:Ih(t.type)),t)}function Pn(t,n,o,c){if(50<Ya)throw Ya=0,Jc=null,Error(i(185));ya(t,o,c),((Ge&2)===0||t!==Nt)&&(t===Nt&&((Ge&2)===0&&(vs|=o),Ct===4&&Sr(t,zt)),Zt(t,c),o===1&&Ge===0&&(n.mode&1)===0&&(Fo=pt()+500,Qi&&xr()))}function Zt(t,n){var o=t.callbackNode;Rv(t,n);var c=Ai(t,t===Nt?zt:0);if(c===0)o!==null&&kh(o),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(o!=null&&kh(o),n===1)t.tag===0?My(I1.bind(null,t)):xp(I1.bind(null,t)),Cy(function(){(Ge&6)===0&&xr()}),o=null;else{switch(Sh(c)){case 1:o=$l;break;case 4:o=_h;break;case 16:o=Ni;break;case 536870912:o=Ch;break;default:o=Ni}o=W1(o,T1.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function T1(t,n){if(bs=-1,ks=0,(Ge&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Bo()&&t.callbackNode!==o)return null;var c=Ai(t,t===Nt?zt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||n)n=_s(t,c);else{n=c;var u=Ge;Ge|=2;var p=P1();(Nt!==t||zt!==n)&&(rr=null,Fo=pt()+500,Zr(t,n));do try{Ky();break}catch(P){E1(t,P)}while(!0);vc(),gs.current=p,Ge=u,wt!==null?n=0:(Nt=null,zt=0,n=Ct)}if(n!==0){if(n===2&&(u=Tl(t),u!==0&&(c=u,n=ed(t,u))),n===1)throw o=Va,Zr(t,0),Sr(t,c),Zt(t,pt()),o;if(n===6)Sr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Gy(u)&&(n=_s(t,c),n===2&&(p=Tl(t),p!==0&&(c=p,n=ed(t,p))),n===1))throw o=Va,Zr(t,0),Sr(t,c),Zt(t,pt()),o;switch(t.finishedWork=u,t.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:Xr(t,Qt,rr);break;case 3:if(Sr(t,c),(c&130023424)===c&&(n=Zc+500-pt(),10<n)){if(Ai(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Ut(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=ic(Xr.bind(null,t,Qt,rr),n);break}Xr(t,Qt,rr);break;case 4:if(Sr(t,c),(c&4194240)===c)break;for(n=t.eventTimes,u=-1;0<c;){var b=31-Ln(c);p=1<<b,b=n[b],b>u&&(u=b),c&=~p}if(c=u,c=pt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Vy(c/1960))-c,10<c){t.timeoutHandle=ic(Xr.bind(null,t,Qt,rr),c);break}Xr(t,Qt,rr);break;case 5:Xr(t,Qt,rr);break;default:throw Error(i(329))}}}return Zt(t,pt()),t.callbackNode===o?T1.bind(null,t):null}function ed(t,n){var o=Ga;return t.current.memoizedState.isDehydrated&&(Zr(t,n).flags|=256),t=_s(t,n),t!==2&&(n=Qt,Qt=o,n!==null&&td(n)),t}function td(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Gy(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],p=u.getSnapshot;u=u.value;try{if(!An(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sr(t,n){for(n&=~Qc,n&=~vs,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-Ln(n),c=1<<o;t[o]=-1,n&=~c}}function I1(t){if((Ge&6)!==0)throw Error(i(327));Bo();var n=Ai(t,0);if((n&1)===0)return Zt(t,pt()),null;var o=_s(t,n);if(t.tag!==0&&o===2){var c=Tl(t);c!==0&&(n=c,o=ed(t,c))}if(o===1)throw o=Va,Zr(t,0),Sr(t,n),Zt(t,pt()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Xr(t,Qt,rr),Zt(t,pt()),null}function nd(t,n){var o=Ge;Ge|=1;try{return t(n)}finally{Ge=o,Ge===0&&(Fo=pt()+500,Qi&&xr())}}function Qr(t){Cr!==null&&Cr.tag===0&&(Ge&6)===0&&Bo();var n=Ge;Ge|=1;var o=bn.transition,c=Xe;try{if(bn.transition=null,Xe=1,t)return t()}finally{Xe=c,bn.transition=o,Ge=n,(Ge&6)===0&&xr()}}function rd(){cn=Do.current,rt(Do)}function Zr(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_y(o)),wt!==null)for(o=wt.return;o!==null;){var c=o;switch(hc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yi();break;case 3:Po(),rt(Gt),rt(Ot),jc();break;case 5:_c(c);break;case 4:Po();break;case 13:rt(dt);break;case 19:rt(dt);break;case 10:yc(c.type._context);break;case 22:case 23:rd()}o=o.return}if(Nt=t,wt=t=Nr(t.current,null),zt=cn=n,Ct=0,Va=null,Qc=vs=Kr=0,Qt=Ga=null,Vr!==null){for(n=0;n<Vr.length;n++)if(o=Vr[n],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,p=o.pending;if(p!==null){var b=p.next;p.next=u,c.next=b}o.pending=c}Vr=null}return t}function E1(t,n){do{var o=wt;try{if(vc(),is.current=ds,ss){for(var c=ut.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}ss=!1}if(Yr=0,St=_t=ut=null,Fa=!1,Ba=0,Kc.current=null,o===null||o.return===null){Ct=1,Va=n,wt=null;break}e:{var p=t,b=o.return,P=o,D=n;if(n=zt,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var ne=D,he=P,pe=he.tag;if((he.mode&1)===0&&(pe===0||pe===11||pe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var xe=i1(b);if(xe!==null){xe.flags&=-257,s1(xe,b,P,p,n),xe.mode&1&&a1(p,ne,n),n=xe,D=ne;var ke=n.updateQueue;if(ke===null){var _e=new Set;_e.add(D),n.updateQueue=_e}else ke.add(D);break e}else{if((n&1)===0){a1(p,ne,n),od();break e}D=Error(i(426))}}else if(it&&P.mode&1){var ft=i1(b);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),s1(ft,b,P,p,n),mc(zo(D,P));break e}}p=D=zo(D,P),Ct!==4&&(Ct=2),Ga===null?Ga=[p]:Ga.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var Q=r1(p,D,n);Lp(p,Q);break e;case 1:P=D;var H=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(_r===null||!_r.has(J)))){p.flags|=65536,n&=-n,p.lanes|=n;var ge=o1(p,P,n);Lp(p,ge);break e}}p=p.return}while(p!==null)}O1(o)}catch(Ce){n=Ce,wt===o&&o!==null&&(wt=o=o.return);continue}break}while(!0)}function P1(){var t=gs.current;return gs.current=ds,t===null?ds:t}function od(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Nt===null||(Kr&268435455)===0&&(vs&268435455)===0||Sr(Nt,zt)}function _s(t,n){var o=Ge;Ge|=2;var c=P1();(Nt!==t||zt!==n)&&(rr=null,Zr(t,n));do try{Yy();break}catch(u){E1(t,u)}while(!0);if(vc(),Ge=o,gs.current=c,wt!==null)throw Error(i(261));return Nt=null,zt=0,Ct}function Yy(){for(;wt!==null;)z1(wt)}function Ky(){for(;wt!==null&&!wv();)z1(wt)}function z1(t){var n=B1(t.alternate,t,cn);t.memoizedProps=t.pendingProps,n===null?O1(t):wt=n,Kc.current=null}function O1(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=By(o,n,cn),o!==null){wt=o;return}}else{if(o=Wy(o,n),o!==null){o.flags&=32767,wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}if(n=n.sibling,n!==null){wt=n;return}wt=n=t}while(n!==null);Ct===0&&(Ct=5)}function Xr(t,n,o){var c=Xe,u=bn.transition;try{bn.transition=null,Xe=1,Qy(t,n,o,c)}finally{bn.transition=u,Xe=c}return null}function Qy(t,n,o,c){do Bo();while(Cr!==null);if((Ge&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Lv(t,p),t===Nt&&(wt=Nt=null,zt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xs||(xs=!0,W1(Ni,function(){return Bo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=bn.transition,bn.transition=null;var b=Xe;Xe=1;var P=Ge;Ge|=4,Kc.current=null,Uy(t,o),M1(o,t),gy(oc),Ii=!!rc,oc=rc=null,t.current=o,qy(o),bv(),Ge=P,Xe=b,bn.transition=p}else t.current=o;if(xs&&(xs=!1,Cr=t,ws=u),p=t.pendingLanes,p===0&&(_r=null),Cv(o.stateNode),Zt(t,pt()),n!==null)for(c=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(ys)throw ys=!1,t=Xc,Xc=null,t;return(ws&1)!==0&&t.tag!==0&&Bo(),p=t.pendingLanes,(p&1)!==0?t===Jc?Ya++:(Ya=0,Jc=t):Ya=0,xr(),null}function Bo(){if(Cr!==null){var t=Sh(ws),n=bn.transition,o=Xe;try{if(bn.transition=null,Xe=16>t?16:t,Cr===null)var c=!1;else{if(t=Cr,Cr=null,ws=0,(Ge&6)!==0)throw Error(i(331));var u=Ge;for(Ge|=4,we=t.current;we!==null;){var p=we,b=p.child;if((we.flags&16)!==0){var P=p.deletions;if(P!==null){for(var D=0;D<P.length;D++){var ne=P[D];for(we=ne;we!==null;){var he=we;switch(he.tag){case 0:case 11:case 15:qa(8,he,p)}var pe=he.child;if(pe!==null)pe.return=he,we=pe;else for(;we!==null;){he=we;var ue=he.sibling,xe=he.return;if(_1(he),he===ne){we=null;break}if(ue!==null){ue.return=xe,we=ue;break}we=xe}}}var ke=p.alternate;if(ke!==null){var _e=ke.child;if(_e!==null){ke.child=null;do{var ft=_e.sibling;_e.sibling=null,_e=ft}while(_e!==null)}}we=p}}if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,we=b;else e:for(;we!==null;){if(p=we,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:qa(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,we=Q;break e}we=p.return}}var H=t.current;for(we=H;we!==null;){b=we;var J=b.child;if((b.subtreeFlags&2064)!==0&&J!==null)J.return=b,we=J;else e:for(b=H;we!==null;){if(P=we,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:ms(9,P)}}catch(Ce){ht(P,P.return,Ce)}if(P===b){we=null;break e}var ge=P.sibling;if(ge!==null){ge.return=P.return,we=ge;break e}we=P.return}}if(Ge=u,xr(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Mi,t)}catch{}c=!0}return c}finally{Xe=o,bn.transition=n}}return!1}function D1(t,n,o){n=zo(o,n),n=r1(t,n,1),t=br(t,n,1),n=Ut(),t!==null&&(ya(t,1,n),Zt(t,n))}function ht(t,n,o){if(t.tag===3)D1(t,t,o);else for(;n!==null;){if(n.tag===3){D1(n,t,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){t=zo(o,t),t=o1(n,t,1),n=br(n,t,1),t=Ut(),n!==null&&(ya(n,1,t),Zt(n,t));break}}n=n.return}}function Zy(t,n,o){var c=t.pingCache;c!==null&&c.delete(n),n=Ut(),t.pingedLanes|=t.suspendedLanes&o,Nt===t&&(zt&o)===o&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>pt()-Zc?Zr(t,0):Qc|=o),Zt(t,n)}function F1(t,n){n===0&&((t.mode&1)===0?n=1:(n=Li,Li<<=1,(Li&130023424)===0&&(Li=4194304)));var o=Ut();t=er(t,n),t!==null&&(ya(t,n,o),Zt(t,o))}function Xy(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),F1(t,o)}function Jy(t,n){var o=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),F1(t,o)}var B1;B1=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||Gt.current)Kt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return Kt=!1,Fy(t,n,o);Kt=(t.flags&131072)!==0}else Kt=!1,it&&(n.flags&1048576)!==0&&wp(n,Xi,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;ps(t,n),t=n.pendingProps;var u=Ro(n,Ot.current);Eo(n,o),u=Mc(null,n,c,t,u,o);var p=Rc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Yt(c)?(p=!0,Ki(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,bc(n),u.updater=us,n.stateNode=u,u._reactInternals=n,Ec(n,c,t,o),n=Dc(null,n,c,!0,p,o)):(n.tag=0,it&&p&&uc(n),Ht(null,n,u,o),n=n.child),n;case 16:c=n.elementType;e:{switch(ps(t,n),t=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=tx(c),t=Tn(c,t),u){case 0:n=Oc(null,n,c,t,o);break e;case 1:n=p1(null,n,c,t,o);break e;case 11:n=l1(null,n,c,t,o);break e;case 14:n=c1(null,n,c,Tn(c.type,t),o);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Tn(c,u),Oc(t,n,c,u,o);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Tn(c,u),p1(t,n,c,u,o);case 3:e:{if(f1(n),t===null)throw Error(i(387));c=n.pendingProps,p=n.memoizedState,u=p.element,Rp(t,n),os(n,c,null,o);var b=n.memoizedState;if(c=b.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=zo(Error(i(423)),n),n=m1(t,n,c,o,u);break e}else if(c!==u){u=zo(Error(i(424)),n),n=m1(t,n,c,o,u);break e}else for(ln=gr(n.stateNode.containerInfo.firstChild),sn=n,it=!0,$n=null,o=Np(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if($o(),c===u){n=nr(t,n,o);break e}Ht(t,n,c,o)}n=n.child}return n;case 5:return $p(n),t===null&&fc(n),c=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,b=u.children,ac(c,u)?b=null:p!==null&&ac(c,p)&&(n.flags|=32),h1(t,n),Ht(t,n,b,o),n.child;case 6:return t===null&&fc(n),null;case 13:return g1(t,n,o);case 4:return kc(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=To(n,null,c,o):Ht(t,n,c,o),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Tn(c,u),l1(t,n,c,u,o);case 7:return Ht(t,n,n.pendingProps,o),n.child;case 8:return Ht(t,n,n.pendingProps.children,o),n.child;case 12:return Ht(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,p=n.memoizedProps,b=u.value,et(ts,c._currentValue),c._currentValue=b,p!==null)if(An(p.value,b)){if(p.children===u.children&&!Gt.current){n=nr(t,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){b=p.child;for(var D=P.firstContext;D!==null;){if(D.context===c){if(p.tag===1){D=tr(-1,o&-o),D.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var he=ne.pending;he===null?D.next=D:(D.next=he.next,he.next=D),ne.pending=D}}p.lanes|=o,D=p.alternate,D!==null&&(D.lanes|=o),xc(p.return,o,n),P.lanes|=o;break}D=D.next}}else if(p.tag===10)b=p.type===n.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(i(341));b.lanes|=o,P=b.alternate,P!==null&&(P.lanes|=o),xc(b,o,n),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Ht(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,Eo(n,o),u=xn(u),c=c(u),n.flags|=1,Ht(t,n,c,o),n.child;case 14:return c=n.type,u=Tn(c,n.pendingProps),u=Tn(c.type,u),c1(t,n,c,u,o);case 15:return d1(t,n,n.type,n.pendingProps,o);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:Tn(c,u),ps(t,n),n.tag=1,Yt(c)?(t=!0,Ki(n)):t=!1,Eo(n,o),t1(n,c,u),Ec(n,c,u,o),Dc(null,n,c,!0,t,o);case 19:return y1(t,n,o);case 22:return u1(t,n,o)}throw Error(i(156,n.tag))};function W1(t,n){return bh(t,n)}function ex(t,n,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,o,c){return new ex(t,n,o,c)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tx(t){if(typeof t=="function")return ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===ae)return 14}return 2}function Nr(t,n){var o=t.alternate;return o===null?(o=kn(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Cs(t,n,o,c,u,p){var b=2;if(c=t,typeof t=="function")ad(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case T:return Jr(o.children,u,p,n);case z:b=8,u|=8;break;case B:return t=kn(12,o,n,u|2),t.elementType=B,t.lanes=p,t;case Y:return t=kn(13,o,n,u),t.elementType=Y,t.lanes=p,t;case ee:return t=kn(19,o,n,u),t.elementType=ee,t.lanes=p,t;case oe:return js(o,u,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case Z:b=9;break e;case F:b=11;break e;case ae:b=14;break e;case re:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=kn(b,o,n,u),n.elementType=t,n.type=c,n.lanes=p,n}function Jr(t,n,o,c){return t=kn(7,t,c,n),t.lanes=o,t}function js(t,n,o,c){return t=kn(22,t,c,n),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function id(t,n,o){return t=kn(6,t,null,n),t.lanes=o,t}function sd(t,n,o){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function nx(t,n,o,c,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ld(t,n,o,c,u,p,b,P,D){return t=new nx(t,n,o,P,D),n===1?(n=1,p===!0&&(n|=8)):n=0,p=kn(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(p),t}function rx(t,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:t,containerInfo:n,implementation:o}}function H1(t){if(!t)return yr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Yt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(Yt(o))return vp(t,o,n)}return n}function U1(t,n,o,c,u,p,b,P,D){return t=ld(o,c,!0,t,u,p,b,P,D),t.context=H1(null),o=t.current,c=Ut(),u=jr(o),p=tr(c,u),p.callback=n??null,br(o,p,u),t.current.lanes=u,ya(t,u,c),Zt(t,c),t}function Ss(t,n,o,c){var u=n.current,p=Ut(),b=jr(u);return o=H1(o),n.context===null?n.context=o:n.pendingContext=o,n=tr(p,b),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=br(u,n,b),t!==null&&(Pn(t,u,b,p),rs(t,u,b)),b}function Ns(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function q1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function cd(t,n){q1(t,n),(t=t.alternate)&&q1(t,n)}function ox(){return null}var V1=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}Ms.prototype.render=dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Ss(t,n,null,null)},Ms.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qr(function(){Ss(null,t,null,null)}),n[Qn]=null}};function Ms(t){this._internalRoot=t}Ms.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rh();t={blockedOn:null,target:t,priority:n};for(var o=0;o<pr.length&&n!==0&&n<pr[o].priority;o++);pr.splice(o,0,t),o===0&&$h(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function G1(){}function ax(t,n,o,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var ne=Ns(b);p.call(ne)}}var b=U1(n,c,t,0,null,!1,!1,"",G1);return t._reactRootContainer=b,t[Qn]=b.current,$a(t.nodeType===8?t.parentNode:t),Qr(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var ne=Ns(D);P.call(ne)}}var D=ld(t,0,!1,null,null,!1,!1,"",G1);return t._reactRootContainer=D,t[Qn]=D.current,$a(t.nodeType===8?t.parentNode:t),Qr(function(){Ss(n,D,o,c)}),D}function Ls(t,n,o,c,u){var p=o._reactRootContainer;if(p){var b=p;if(typeof u=="function"){var P=u;u=function(){var D=Ns(b);P.call(D)}}Ss(n,b,t,u)}else b=ax(o,n,t,u,c);return Ns(b)}Nh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=va(n.pendingLanes);o!==0&&(El(n,o|1),Zt(n,pt()),(Ge&6)===0&&(Fo=pt()+500,xr()))}break;case 13:Qr(function(){var c=er(t,1);if(c!==null){var u=Ut();Pn(c,t,1,u)}}),cd(t,1)}},Pl=function(t){if(t.tag===13){var n=er(t,134217728);if(n!==null){var o=Ut();Pn(n,t,134217728,o)}cd(t,134217728)}},Mh=function(t){if(t.tag===13){var n=jr(t),o=er(t,n);if(o!==null){var c=Ut();Pn(o,t,n,c)}cd(t,n)}},Rh=function(){return Xe},Lh=function(t,n){var o=Xe;try{return Xe=t,n()}finally{Xe=o}},pa=function(t,n,o){switch(n){case"input":if(ze(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==t&&c.form===t.form){var u=Gi(c);if(!u)throw Error(i(90));me(c),ze(c,u)}}}break;case"textarea":yt(t,o);break;case"select":n=o.value,n!=null&&Ye(t,!!o.multiple,n,!1)}},fh=nd,mh=Qr;var ix={usingClientEntryPoint:!1,Events:[Ea,No,Gi,hh,ph,nd]},Ka={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Mi=As.inject(sx),Wn=As}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix,Xt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(n))throw Error(i(200));return rx(t,n,null,o)},Xt.createRoot=function(t,n){if(!ud(t))throw Error(i(299));var o=!1,c="",u=V1;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ld(t,1,!1,null,null,o,!1,c,u),t[Qn]=n.current,$a(t.nodeType===8?t.parentNode:t),new dd(n)},Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=xh(n),t=t===null?null:t.stateNode,t},Xt.flushSync=function(t){return Qr(t)},Xt.hydrate=function(t,n,o){if(!Rs(n))throw Error(i(200));return Ls(null,t,n,!0,o)},Xt.hydrateRoot=function(t,n,o){if(!ud(t))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,p="",b=V1;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),n=U1(n,null,t,1,o??null,u,!1,p,b),t[Qn]=n.current,$a(t),c)for(t=0;t<c.length;t++)o=c[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Ms(n)},Xt.render=function(t,n,o){if(!Rs(n))throw Error(i(200));return Ls(null,t,n,!1,o)},Xt.unmountComponentAtNode=function(t){if(!Rs(t))throw Error(i(40));return t._reactRootContainer?(Qr(function(){Ls(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1},Xt.unstable_batchedUpdates=nd,Xt.unstable_renderSubtreeIntoContainer=function(t,n,o,c){if(!Rs(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Ls(t,n,o,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var tf;function p0(){if(tf)return fd.exports;tf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),fd.exports=fx(),fd.exports}var nf;function mx(){if(nf)return $s;nf=1;var e=p0();return $s.createRoot=e.createRoot,$s.hydrateRoot=e.hydrateRoot,$s}var gx=mx();const vx=h0(gx);function f0(e){var a,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(a=0;a<l;a++)e[a]&&(i=f0(e[a]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function le(){for(var e,a,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(a=f0(e))&&(s&&(s+=" "),s+=a);return s}const mo=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};mo.displayName="PlusIcon";const yx="_root_7uomf_13",xx="_sm_7uomf_82",wx="_md_7uomf_88",bx="_lg_7uomf_94",kx="_horizontal_7uomf_107",_x="_alignStart_7uomf_121",Cx="_vertical_7uomf_125",jx="_inner_7uomf_131",Sx="_iconSlot_7uomf_146",Nx="_label_7uomf_163",eo={root:yx,sm:xx,md:wx,lg:bx,horizontal:kx,alignStart:_x,vertical:Cx,inner:jx,iconSlot:Sx,label:Nx};function rf(e){return typeof e=="number"?`${e}px`:e}const Mx=v.forwardRef(({size:e="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:g,style:x,disabled:y,type:w="button",...k},A)=>{const _=d??r.jsx(mo,{size:"100%"}),C={};return h!==void 0&&(C["--area-min-height"]=rf(h)),f!==void 0&&(C["--area-radius"]=rf(f)),r.jsx("button",{ref:A,type:w,className:le(eo.root,eo[e],eo[a],i==="start"&&eo.alignStart,g),disabled:y,"data-size":e,"data-layout":a,style:{...C,...x},...k,children:r.jsxs("span",{className:eo.inner,children:[r.jsx("span",{className:eo.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&r.jsx("span",{className:eo.label,children:s})]})})});Mx.displayName="AreaButton";const Rx="_root_b29pw_8",Lx="_image_b29pw_33",Ax="_initials_b29pw_40",$x="_iconSlot_b29pw_52",Rr={root:Rx,image:Lx,initials:Ax,iconSlot:$x,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Tx({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ix(e){const a=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const Bn=v.forwardRef(({src:e,alt:a,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:g="circle",className:x,...y},w)=>{const[k,A]=v.useState(!1),_=!!e&&!k,C=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Ix(s):"");let M;return _?M=r.jsx("img",{src:e,alt:a??"",className:Rr.image,onError:()=>A(!0),draggable:!1},e):C?M=r.jsx("span",{className:Rr.initials,"aria-hidden":a?void 0:!0,children:C}):M=r.jsx("span",{className:Rr.iconSlot,"aria-hidden":"true",children:l??r.jsx(Tx,{})}),r.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":g,className:le(Rr.root,Rr[`size-${d}`],Rr[`color-${h}`],Rr[`variant-${f}`],Rr[`shape-${g}`],x),...y,children:M})});Bn.displayName="Avatar";const Ex="_root_uqz3u_7",Px={root:Ex},qt=v.forwardRef(({as:e="span",className:a,children:i,...s},l)=>r.jsx(e,{ref:l,className:le(Px.root,a),...s,children:i}));qt.displayName="Eyebrow";const zx="_root_1tnwf_15",Ox={root:zx},Dx=v.forwardRef(({scale:e="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:g,...x},y)=>{const w=i!==void 0,k=v.useRef(null),[A,_]=v.useState(()=>w?!i:!s),C=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const M=j=>{const O=j.currentTarget.textContent??"";_(O===""),l==null||l(O),g==null||g(j)},$=j=>{j.preventDefault();const O=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,O)},S=!h&&!d;return r.jsx("span",{ref:C,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":A||void 0,"data-placeholder":a,"data-disabled":h||void 0,"data-readonly":d||void 0,className:le(Ox.root,f),onInput:M,onPaste:$,...x})});Dx.displayName="TypeBox";const Fx="_root_1brpy_12",Bx="_ghost_1brpy_27",Wx="_path_1brpy_32",Za={root:Fx,"ai-spin":"_ai-spin_1brpy_1",ghost:Bx,"ai-morph":"_ai-morph_1brpy_1",path:Wx,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Hx={xs:16,sm:24,md:32,lg:48,xl:64},Ux={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},of="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Ts=e=>e==="inverse"||e==="inverse-light",qx=e=>e==="stroke"||e==="stroke-light",ku=v.forwardRef(({size:e="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof e=="string",k=w?Hx[e]:e,A=w?Ux[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=a==="gradient-fill"?`url(#${x})`:Ts(a)?"currentColor":"none",C=Ts(a)?"none":qx(a)?"currentColor":`url(#${x})`,M="currentColor",$=a!=="stroke"&&a!=="stroke-light"&&!Ts(a);return r.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:le(Za.root,Za[`variant-${a}`],Za[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!Ts(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:of,stroke:M,strokeWidth:A*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Za.ghost}),r.jsx("path",{d:of,fill:_,stroke:C==="none"?void 0:C,strokeWidth:C==="none"?void 0:A,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${y})`:void 0,className:Za.path})]})});ku.displayName="AILoader";const Vx="_root_10act_14",Gx="_hovered_10act_68",Yx="_loading_10act_69",Kx="_sm_10act_90",Qx="_md_10act_98",Zx="_lg_10act_106",Xx="_dark_10act_116",Jx="_icon_10act_122",Wo={root:Vx,hovered:Gx,loading:Yx,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Kx,md:Qx,lg:Zx,dark:Xx,icon:Jx},af={sm:12,md:14,lg:18};function e3({size:e,light:a}){return r.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const m0=v.forwardRef(({size:e="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[g,x]=v.useState(!1);return r.jsx("button",{ref:f,className:le(Wo.root,Wo[e],a&&Wo.dark,i?Wo.loading:g&&Wo.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:r.jsx("span",{className:Wo.icon,children:i?r.jsx(ku,{size:af[e],variant:a?"inverse-light":"gradient-fill"}):r.jsx(e3,{size:af[e],light:a})})})});m0.displayName="AICoreButton";const t3="_root_1qx4u_9",n3="_star_1qx4u_34",vd={root:t3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:n3},r3="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",g0=v.forwardRef(({size:e="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:le(vd.root,vd[`size-${e}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:vd.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:r3,fill:"currentColor"})})}));g0.displayName="AIAvatar";const o3="_shell_lalw3_21",a3="_wrapper_lalw3_58",i3="_card_lalw3_65",s3="_cardClip_lalw3_94",l3="_textarea_lalw3_160",c3="_actions_lalw3_203",Ko={shell:o3,wrapper:a3,card:i3,cardClip:s3,textarea:l3,actions:c3},v0=v.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:le(Ko.shell,e),...i,children:a}));v0.displayName="AIComposer";function d3(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const y0=v.forwardRef(({value:e,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:g,children:x,style:y,...w},k)=>{const A=v.useRef(null);v.useEffect(()=>{const S=A.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[e]);const _=v.useCallback(S=>a(S.target.value),[a]),C=v.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),M=v.useCallback(S=>{A.current=S,d3(k,S)},[k]),$={...y??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:le(Ko.wrapper,h),"data-radius":l,children:r.jsx("div",{className:Ko.card,children:r.jsxs("div",{className:Ko.cardClip,children:[r.jsx("textarea",{...w,ref:M,className:Ko.textarea,rows:1,value:e,onChange:_,onKeyDown:C,placeholder:d,disabled:g,style:$}),x!=null&&r.jsx("div",{className:Ko.actions,children:x})]})})})});y0.displayName="AIComposerInput";const u3="_root_fv0gc_10",h3="_simple_fv0gc_28",p3="_float_fv0gc_83",sf={root:u3,simple:h3,float:p3},f3=v.forwardRef(({variant:e="simple",className:a,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":e,className:le(sf.root,sf[e],a),...s,children:i}));f3.displayName="AIConversation";const m3="_fadeFrame_1l0ib_19",g3="_scroller_1l0ib_32",v3="_content_1l0ib_89",y3="_messageBlock_1l0ib_108",x3="_messageBlockAi_1l0ib_116",w3="_inboundBlock_1l0ib_128",b3="_inboundLoader_1l0ib_136",k3="_inboundLoaderLabel_1l0ib_146",_3="_outboundBlock_1l0ib_153",C3="_outboundHeader_1l0ib_161",j3="_messageBlockUser_1l0ib_168",S3="_aiThreadOutboundIn_1l0ib_1",N3="_messageBody_1l0ib_182",M3="_messageBodyAi_1l0ib_193",R3="_messageBodyUser_1l0ib_200",L3="_label_1l0ib_159",A3="_labelAi_1l0ib_221",$3="_labelUser_1l0ib_159",T3="_labelAvatar_1l0ib_224",I3="_labelText_1l0ib_237",E3="_timestamp_1l0ib_244",P3="_timestampAi_1l0ib_259",z3="_timestampUser_1l0ib_260",O3="_timestampInline_1l0ib_270",D3="_aiThreadOutboundFadeIn_1l0ib_1",Be={fadeFrame:m3,scroller:g3,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:v3,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:y3,messageBlockAi:x3,inboundBlock:w3,inboundLoader:b3,inboundLoaderLabel:k3,outboundBlock:_3,outboundHeader:C3,messageBlockUser:j3,aiThreadOutboundIn:S3,messageBody:N3,messageBodyAi:M3,messageBodyUser:R3,label:L3,labelAi:A3,labelUser:$3,labelAvatar:T3,labelText:I3,timestamp:E3,timestampAi:P3,timestampUser:z3,timestampInline:O3,aiThreadOutboundFadeIn:D3},lf=8;function F3(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const B3=v.forwardRef(({density:e="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const g=v.useRef(null),x=v.useRef(null),y=v.useRef(!0),[w,k]=v.useState(!1),[A,_]=v.useState(!1),C=v.useCallback(M=>{g.current=M,F3(f,M)},[f]);return v.useEffect(()=>{const M=g.current,$=x.current;if(!M||!$)return;const S=()=>{const{scrollTop:T,scrollHeight:z,clientHeight:B}=M;return z-T-B<s},j=T=>{M.scrollTo({top:M.scrollHeight,behavior:T?"smooth":"auto"})},O=()=>{const{scrollTop:T,scrollHeight:z,clientHeight:B}=M,G=T>lf,Z=z-T-B>lf;k(F=>F===G?F:G),_(F=>F===Z?F:Z)};i&&(j(!1),y.current=!0),O();const R=()=>{y.current=S(),O()};M.addEventListener("scroll",R,{passive:!0});const N=new ResizeObserver(()=>{i&&y.current&&j(!0),O()});return N.observe($),N.observe(M),()=>{M.removeEventListener("scroll",R),N.disconnect()}},[i,s]),r.jsx("div",{className:Be.fadeFrame,"data-fade-top":w,"data-fade-bottom":A,children:r.jsx("div",{ref:C,className:le(Be.scroller,Be[`padding-${a}`],l),...h,children:r.jsx("div",{ref:x,className:le(Be.content,Be[`density-${e}`]),children:d})})})});B3.displayName="AIThread";const cl=v.forwardRef(({align:e="ai",avatar:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:le(Be.label,e==="user"?Be.labelUser:Be.labelAi,i),...l,children:[a!=null&&r.jsx("span",{className:Be.labelAvatar,children:a}),r.jsx("span",{className:Be.labelText,children:s})]}));cl.displayName="AILabel";const W3=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function H3(e,a){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const mi=v.forwardRef(({value:e,align:a="ai",format:i=W3,inline:s=!1,className:l,...d},h)=>{const f=v.useMemo(()=>H3(e,i),[e,i]);return f?r.jsx("time",{ref:h,className:le(Be.timestamp,s?Be.timestampInline:a==="user"?Be.timestampUser:Be.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});mi.displayName="AITimestamp";function U3(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(mi,{align:"ai",value:e}):e}function q3(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(cl,{align:"ai",children:e}):e}const V3=v.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:le(Be.messageBlock,Be.messageBlockAi,i),...l,children:[q3(e),r.jsx("div",{className:le(Be.messageBody,Be.messageBodyAi),children:s}),U3(a)]}));V3.displayName="AIAssistantMessage";function G3(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(mi,{align:"user",value:e}):e}function Y3(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(cl,{align:"user",children:e}):e}const K3=v.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:le(Be.messageBlock,Be.messageBlockUser,i),...l,children:[Y3(e),r.jsx("div",{className:le(Be.messageBody,Be.messageBodyUser),children:s}),G3(a)]}));K3.displayName="AIUserMessage";function Q3(e){return e===!1?null:e==null||e===!0?r.jsx(g0,{size:"sm"}):e}function Z3(e,a){return e==null&&a==null?null:typeof e=="string"||typeof e=="number"||e==null?r.jsx(cl,{align:"ai",avatar:a,children:e}):e}const X3=v.forwardRef(({avatar:e,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...g},x)=>{const y=Q3(e),w=Z3(a,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:le(Be.messageBlock,Be.messageBlockAi,Be.inboundBlock,h),...g,children:[w,i,f!=null&&r.jsx("div",{className:le(Be.messageBody,Be.messageBodyAi),children:f}),l&&r.jsxs("div",{className:Be.inboundLoader,"aria-live":"polite",children:[r.jsx(ku,{size:"xs"}),d!=null&&r.jsx("span",{className:Be.inboundLoaderLabel,children:d})]}),s]})});X3.displayName="AIInboundMessage";function J3(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const e5=v.forwardRef(({label:e="You",time:a,timeFormat:i,className:s,children:l,...d},h)=>{const f=a==null?null:J3(a)?r.jsx(mi,{value:a,format:i,inline:!0}):a,g=e==null?null:typeof e=="string"||typeof e=="number"?r.jsx("span",{className:Be.labelText,children:e}):e,x=g!=null||f!=null;return r.jsxs("div",{ref:h,"data-author":"user",className:le(Be.messageBlock,Be.messageBlockUser,Be.outboundBlock,s),...d,children:[x&&r.jsxs("div",{className:le(Be.label,Be.labelUser,Be.outboundHeader),children:[g,f]}),r.jsx("div",{className:le(Be.messageBody,Be.messageBodyUser),children:l})]})});e5.displayName="AIOutboundMessage";const Nn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Nn.displayName="ChevronDownIcon";const t5="_root_1j4eq_8",n5="_header_1j4eq_17",r5="_headerSummary_1j4eq_53",o5="_aiTrailSummaryFade_1j4eq_1",a5="_aiTrailHeaderAppend_1j4eq_1",i5="_aiTrailEllipsis_1j4eq_1",s5="_headerCurrent_1j4eq_128",l5="_headerChevron_1j4eq_159",c5="_headerChevronExpanded_1j4eq_173",d5="_body_1j4eq_187",u5="_bodyExpanded_1j4eq_200",h5="_bodyCollapsed_1j4eq_201",p5="_bodyInner_1j4eq_203",f5="_bodyContent_1j4eq_187",m5="_step_1j4eq_225",g5="_stepIcon_1j4eq_242",v5="_stepAnimating_1j4eq_256",y5="_aiTrailStepPulse_1j4eq_1",x5="_stepBody_1j4eq_267",w5="_stepHead_1j4eq_282",b5="_stepLabel_1j4eq_286",k5="_stepSeparator_1j4eq_288",_5="_stepDetail_1j4eq_292",C5="_subToggle_1j4eq_302",j5="_subToggleCount_1j4eq_335",S5="_subToggleChevron_1j4eq_339",N5="_subActivityWrap_1j4eq_358",M5="_subActivityExpanded_1j4eq_364",R5="_subActivityCollapsed_1j4eq_365",L5="_subActivityClip_1j4eq_367",A5="_subActivityList_1j4eq_378",$5="_subActivity_1j4eq_358",T5="_aiTrailSubActivityType_1j4eq_1",I5="_aiTrailSubActivityFade_1j4eq_1",Je={root:t5,header:n5,headerSummary:r5,aiTrailSummaryFade:o5,aiTrailHeaderAppend:a5,aiTrailEllipsis:i5,headerCurrent:s5,headerChevron:l5,headerChevronExpanded:c5,body:d5,bodyExpanded:u5,bodyCollapsed:h5,bodyInner:p5,bodyContent:f5,step:m5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:g5,stepAnimating:v5,aiTrailStepPulse:y5,stepBody:x5,stepHead:w5,stepLabel:b5,stepSeparator:k5,stepDetail:_5,subToggle:C5,subToggleCount:j5,subToggleChevron:S5,subActivityWrap:N5,subActivityExpanded:M5,subActivityCollapsed:R5,subActivityClip:L5,subActivityList:A5,subActivity:$5,aiTrailSubActivityType:T5,aiTrailSubActivityFade:I5},_u=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};_u.displayName="MessageDotsSquareIcon";function Js({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Js.displayName="SearchMdIcon";function Ir({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Cu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Cu.displayName="Globe01Icon";const x0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};x0.displayName="Code02Icon";function w0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}w0.displayName="Tool01Icon";const Vt=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},ea=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ea.displayName="AlertCircleIcon";const E5={thinking:r.jsx(_u,{size:14}),tool:r.jsx(w0,{size:14}),search:r.jsx(Js,{size:14}),file:r.jsx(Ir,{size:14}),web:r.jsx(Cu,{size:14}),code:r.jsx(x0,{size:14}),content:r.jsx(Vt,{size:14})},dl=v.forwardRef(({type:e,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...g},x)=>{const y=a==="active"&&d==="live",w=a==="active"&&d==="live",k=a==="active"||a==="error",[A,_]=v.useState(null),C=A!==null?A:k;v.useEffect(()=>{_(null)},[a]);const M=v.useCallback(()=>_(!C),[C]),$=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,j=a==="error"?r.jsx(ea,{size:14}):s??E5[e];return r.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":a,className:le(Je.step,Je[`step-${a}`],y&&Je.stepAnimating,h),...g,children:[r.jsx("span",{className:Je.stepIcon,"aria-hidden":!0,children:j}),r.jsxs("span",{className:Je.stepBody,children:[r.jsxs("span",{className:Je.stepHead,children:[r.jsx("span",{className:Je.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:Je.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:Je.stepDetail,children:i})]}),$&&r.jsxs("button",{type:"button",className:Je.subToggle,onClick:M,"aria-expanded":C,"aria-label":C?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":C||void 0,children:[r.jsx("span",{className:Je.subToggleCount,children:S}),r.jsx("span",{className:Je.subToggleChevron,"aria-hidden":!0,children:r.jsx(Nn,{size:10})})]})]}),$&&r.jsx(r.Fragment,{children:r.jsx("div",{className:le(Je.subActivityWrap,C?Je.subActivityExpanded:Je.subActivityCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.subActivityClip,children:r.jsx("ul",{className:Je.subActivityList,"data-animating":w||void 0,children:l.map((O,R)=>r.jsx("li",{className:Je.subActivity,children:O},R))})})})})]})]})});dl.displayName="AIActivityStep";function cf(e){return e==="error"}function P5(e,a,i,s,l,d){if(e==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${h} · ${f}`}return r.jsxs(r.Fragment,{children:[h,i.map((f,g)=>r.jsxs(v.Fragment,{children:[" · ",f]},g))]})}const ju=v.forwardRef(({state:e="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...g},x)=>{const y=a!==void 0,[w,k]=v.useState(i??cf(e)),[A,_]=v.useState(!1);v.useEffect(()=>{y||A||k(cf(e))},[e,y,A]);const C=y?!!a:w,M=v.useCallback(()=>{const N=!C;y||(k(N),_(!0)),s==null||s(N)},[C,y,s]),{enhancedChildren:$,stepCount:S,stepLabels:j,currentLabelIdx:O}=v.useMemo(()=>{let N=0;const T=[];let z=-1;return{enhancedChildren:v.Children.map(f,G=>{if(!v.isValidElement(G))return G;const Z=G.props;if(!("type"in Z||"status"in Z))return G;N+=1;const Y=Z.status??"done";return Y==="pending"?null:(Z.children!=null&&(T.push(Z.children),Y==="active"&&(z=T.length-1)),z5(G,e))}),stepCount:N,stepLabels:T,currentLabelIdx:z>=0?z:T.length-1}},[f,e]),R=d??P5(e,S,j,O,Je.headerCurrent,l);return r.jsxs("div",{ref:x,"data-state":e,"data-expanded":C,className:le(Je.root,h),...g,children:[r.jsxs("button",{type:"button",className:Je.header,onClick:M,"aria-expanded":C,"aria-label":C?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:Je.headerSummary,children:R},`${e}-${O}`),r.jsx("span",{className:le(Je.headerChevron,C&&Je.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(Nn,{size:14})})]}),r.jsx("div",{className:le(Je.body,C?Je.bodyExpanded:Je.bodyCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.bodyInner,children:r.jsxs("div",{className:Je.bodyContent,children:[$,e==="done"&&r.jsx(dl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});ju.displayName="AIActivityTrail";function z5(e,a){return v.cloneElement(e,{groupState:a})}var gi=p0();const O5="_wrapper_3tqlm_10",D5="_tooltip_3tqlm_22",F5="_portal_3tqlm_23",B5="_top_3tqlm_61",W5="_bottom_3tqlm_71",H5="_left_3tqlm_81",U5="_right_3tqlm_91",Is={wrapper:O5,tooltip:D5,portal:F5,top:B5,bottom:W5,left:H5,right:U5},cr=({content:e,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,g]=v.useState(!1),[x,y]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),A=v.useId(),_=v.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),O=6+d;let R=0,N=0;switch(a){case"top":R=j.top-O,N=j.left+j.width/2;break;case"bottom":R=j.bottom+O,N=j.left+j.width/2;break;case"left":R=j.top+j.height/2,N=j.left-O;break;case"right":R=j.top+j.height/2,N=j.right+O;break}y({top:R,left:N})},[a,d]),C=v.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,_]),M=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!f)return;const j=()=>_();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[f,_]);const $=on.cloneElement(h,{"aria-describedby":f?A:void 0}),S=r.jsx("span",{id:A,role:"tooltip",className:le(Is.tooltip,Is[a],Is.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return r.jsxs("span",{ref:w,className:Is.wrapper,onMouseEnter:C,onMouseLeave:M,onFocus:C,onBlur:M,children:[$,gi.createPortal(S,document.body)]})};cr.displayName="Tooltip";const q5="_root_v8mqg_9",V5="_hover_v8mqg_21",yd={root:q5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:V5};function G5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const b0=v.forwardRef(({visibility:e="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const g=i==null?null:G5(i)?r.jsx(mi,{value:i,format:s,inline:!0}):i,x=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===cr)return k;const A=k.props["aria-label"];return A?r.jsx(cr,{content:A,placement:"top",delay:150,children:k}):k},y=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,x)}return x(w)});return r.jsxs("div",{ref:f,"data-visibility":e,"data-align":a,className:le(yd.root,yd[`align-${a}`],e==="hover"&&yd.hover,l),...h,children:[y,g]})});b0.displayName="AIMessageActions";const Y5="_card_1apq1_17",K5="_header_1apq1_69",Q5="_iconBadge_1apq1_74",Z5="_iconInner_1apq1_89",X5="_headerText_1apq1_100",J5="_headerTopRow_1apq1_109",e4="_eyebrow_1apq1_115",t4="_title_1apq1_124",n4="_subtitle_1apq1_130",r4="_headerTrailing_1apq1_135",o4="_body_1apq1_141",a4="_footer_1apq1_152",i4="_footerEnd_1apq1_157",s4="_metaRow_1apq1_162",l4="_metaItem_1apq1_170",c4="_resultHero_1apq1_180",d4="_resultHeadline_1apq1_185",u4="_resultDetail_1apq1_191",h4="_clauses_1apq1_205",p4="_clause_1apq1_205",f4="_clauseLabel_1apq1_215",m4="_clauseBody_1apq1_225",g4="_badgeExecuting_1apq1_245",tt={card:Y5,header:K5,iconBadge:Q5,iconInner:Z5,headerText:X5,headerTopRow:J5,eyebrow:e4,title:t4,subtitle:n4,headerTrailing:r4,body:o4,footer:a4,footerEnd:i4,metaRow:s4,metaItem:l4,resultHero:c4,resultHeadline:d4,resultDetail:u4,clauses:h4,clause:p4,clauseLabel:f4,clauseBody:m4,badgeExecuting:g4},Kn=v.forwardRef(({tone:e="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:g,footerEnd:x=!1,className:y,children:w,...k},A)=>{const _=l!=null||f!=null,C=_||d!=null||h!=null,M=s!=null||C;return r.jsxs("div",{ref:A,"data-tone":e,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:le(tt.card,y),...k,children:[M&&r.jsxs("div",{className:tt.header,children:[s!=null&&r.jsx("span",{className:le(tt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:tt.iconInner,children:s})}),C&&r.jsxs("div",{className:tt.headerText,children:[_&&r.jsxs("div",{className:tt.headerTopRow,children:[l!=null&&r.jsx("span",{className:tt.eyebrow,children:l}),f!=null&&r.jsx("span",{className:tt.headerTrailing,children:f})]}),d!=null&&r.jsx("span",{className:tt.title,children:d}),h!=null&&r.jsx("span",{className:tt.subtitle,children:h})]})]}),w!=null&&r.jsx("div",{className:tt.body,children:w}),g!=null&&r.jsx("div",{className:le(tt.footer,x&&tt.footerEnd),children:g})]})});Kn.displayName="UltronCard";const v4="_root_zkkgh_6",y4="_sm_zkkgh_24",x4="_md_zkkgh_33",w4="_lg_zkkgh_42",b4="_neutral_zkkgh_53",k4="_blue_zkkgh_66",_4="_azure_zkkgh_79",C4="_purple_zkkgh_92",j4="_pink_zkkgh_105",S4="_red_zkkgh_118",N4="_orange_zkkgh_131",M4="_yellow_zkkgh_144",R4="_matcha_zkkgh_157",L4="_green_zkkgh_170",A4="_subtle_zkkgh_184",$4="_outline_zkkgh_190",T4="_solid_zkkgh_196",I4="_dot_zkkgh_203",E4="_icon_zkkgh_212",P4="_dismiss_zkkgh_224",to={root:v4,sm:y4,md:x4,lg:w4,neutral:b4,blue:k4,azure:_4,purple:C4,pink:j4,red:S4,orange:N4,yellow:M4,matcha:R4,green:L4,subtle:A4,outline:$4,solid:T4,dot:I4,icon:E4,dismiss:P4},vi=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},z4={sm:10,md:12,lg:14},Sn=v.forwardRef(({variant:e="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:g,...x},y)=>r.jsxs("span",{ref:y,className:le(to.root,to[i],to[a],to[e],f),...x,children:[s&&r.jsx("span",{className:to.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:le(to.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&r.jsx("button",{type:"button",className:to.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:r.jsx(vi,{size:z4[i]})})]}));Sn.displayName="Tag";function k0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}k0.displayName="SlashCircle01Icon";const Su=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Su.displayName="EyeIcon";function ul({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ul.displayName="Target01Icon";function jn({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}jn.displayName="ClockIcon";const yi=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};yi.displayName="RefreshCw04Icon";const mn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};mn.displayName="CheckCircleIcon";function hl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}hl.displayName="Save01Icon";const O4={sm:11,md:12,lg:14},D4={ignored:{label:"Ignored",color:"neutral",Icon:k0},monitored:{label:"Monitored",color:"blue",Icon:Su},recommended:{label:"Recommended",color:"purple",Icon:ul},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:jn},executing:{label:"Executing",color:"azure",Icon:yi},completed:{label:"Completed",color:"green",Icon:mn},saved:{label:"Saved",color:"matcha",Icon:hl}},go=v.forwardRef(({status:e,size:a="sm",label:i,className:s,...l},d)=>{const h=D4[e],f=h.Icon;return r.jsx(Sn,{ref:d,color:h.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:O4[a]}),className:le(e==="executing"&&tt.badgeExecuting,s),...l,children:i??h.label})});go.displayName="UltronStatusBadge";function pl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}pl.displayName="Bell01Icon";const F4=v.forwardRef(({title:e,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},g)=>r.jsx(Kn,{ref:g,tone:d,eyebrow:i,title:e,icon:a??r.jsx(pl,{size:14}),trailing:l?r.jsx(go,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:tt.metaRow,children:s.map((x,y)=>r.jsxs("span",{className:tt.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));F4.displayName="UltronEventCard";const B4=v.forwardRef(({eyebrow:e="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},h)=>r.jsxs(Kn,{ref:h,tone:s,eyebrow:e,icon:a??r.jsx(_u,{size:14}),...d,children:[l,i&&r.jsx("div",{className:tt.metaRow,children:i})]}));B4.displayName="UltronUnderstandingCard";const W4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},H4=v.forwardRef(({eyebrow:e="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},h)=>r.jsxs(Kn,{ref:h,tone:s,eyebrow:e,icon:a??r.jsx(ul,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:tt.metaRow,children:i.map((f,g)=>r.jsx(Sn,{size:"sm",color:W4[s],variant:"subtle",children:f},g))}):null]}));H4.displayName="UltronDecisionCard";const U4="_root_ou64w_8",q4="_xs_ou64w_75",V4="_sm_ou64w_84",G4="_md_ou64w_93",Y4="_lg_ou64w_102",K4="_xl_ou64w_111",Q4="_iconOnly_ou64w_122",Z4="_primary_ou64w_132",X4="_secondary_ou64w_148",J4="_tertiary_ou64w_167",ew="_ghost_ou64w_185",tw="_destructive_ou64w_203",nw="_destructiveSecondary_ou64w_221",rw="_artwork_ou64w_69",ow="_label_ou64w_254",aw="_spinner_ou64w_69",iw="_light_ou64w_281",nn={root:U4,xs:q4,sm:V4,md:G4,lg:Y4,xl:K4,iconOnly:Q4,primary:Z4,secondary:X4,tertiary:J4,ghost:ew,destructive:tw,destructiveSecondary:nw,artwork:rw,label:ow,spinner:aw,"alloy-spin":"_alloy-spin_ou64w_1",light:iw},sw={primary:nn.primary,secondary:nn.secondary,tertiary:nn.tertiary,ghost:nn.ghost,destructive:nn.destructive,"destructive-secondary":nn.destructiveSecondary},Ee=v.forwardRef(({variant:e="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:g,...x},y)=>{const w=g||i;return r.jsxs("button",{ref:y,className:le(nn.root,sw[e],nn[a],d&&nn.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":a,...x,children:[i&&r.jsx("span",{className:nn.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:le(nn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:le(nn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:nn.label,children:f}),l&&r.jsx("span",{className:le(nn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Ee.displayName="Button";function _0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}_0.displayName="XCircleIcon";const lw=v.forwardRef(({eyebrow:e="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},g)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,w)=>r.jsx(Ee,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&r.jsx(Ee,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(_0,{size:16}),onClick:s,children:l})]});return r.jsx(Kn,{ref:g,tone:d,eyebrow:e,icon:a??r.jsx(ul,{size:14}),footer:x,...f,children:h})});lw.displayName="UltronRecommendationCard";function Nu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Nu.displayName="Lock01Icon";const cw=v.forwardRef(({title:e,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},A)=>{const _=r.jsxs(r.Fragment,{children:[f&&r.jsx(Ee,{size:"md",variant:"ghost",onClick:f,children:h}),x&&r.jsx(Ee,{size:"md",variant:"secondary",onClick:x,children:g}),r.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:r.jsx(Vt,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Kn,{ref:A,tone:y,eyebrow:a,title:e,icon:i??r.jsx(Nu,{size:14}),trailing:r.jsx(go,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});cw.displayName="UltronApprovalCard";const dw=v.forwardRef(({eyebrow:e="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>r.jsx(Kn,{ref:f,tone:d,eyebrow:e,icon:a??r.jsx(yi,{size:14}),trailing:r.jsx(go,{status:s==="done"?"completed":"executing"}),...h,children:r.jsx(ju,{state:s,duration:l,children:i.map((g,x)=>r.jsx(dl,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));dw.displayName="UltronExecutionCard";const uw=v.forwardRef(({headline:e,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>r.jsx(Kn,{ref:f,tone:l,fill:!0,accent:!1,trailing:r.jsx(go,{status:s}),footer:d,...h,children:r.jsxs("div",{className:tt.resultHero,children:[r.jsx("span",{className:le(tt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(mn,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:tt.resultHeadline,children:e}),a!=null&&r.jsx("div",{className:tt.resultDetail,children:a})]})]})}));uw.displayName="UltronResultCard";function C0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}C0.displayName="ZapIcon";const hw=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:g="info",children:x,...y},w)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:r.jsx(hl,{size:18}),loading:d,onClick:l,children:s}),f&&r.jsx(Ee,{size:"md",variant:"ghost",onClick:f,children:h})]});return r.jsx(Kn,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:a,title:e,icon:i??r.jsx(C0,{size:14}),footer:k,...y,children:x})});hw.displayName="UltronWorkflowSaveCard";const j0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};j0.displayName="GitBranch01Icon";function xd({label:e,children:a}){return r.jsxs("div",{className:tt.clause,children:[r.jsx("span",{className:tt.clauseLabel,children:e}),r.jsx("span",{className:tt.clauseBody,children:a})]})}const pw=v.forwardRef(({name:e,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:g="info",...x},y)=>r.jsx(Kn,{ref:y,tone:g,eyebrow:a,title:e,icon:i??r.jsx(j0,{size:14}),trailing:h?r.jsx(go,{status:h}):void 0,footer:f,...x,children:r.jsxs("div",{className:tt.clauses,children:[r.jsx(xd,{label:"When",children:s}),r.jsx(xd,{label:"If",children:l}),r.jsx(xd,{label:"Then",children:d})]})}));pw.displayName="UltronWorkflowPreviewCard";const fw="_root_1nyuz_6",mw="_sm_1nyuz_20",gw="_md_1nyuz_29",vw="_lg_1nyuz_38",yw="_divider_1nyuz_48",xw="_interactive_1nyuz_53",ww="_disabled_1nyuz_60",bw="_destructive_1nyuz_64",kw="_selected_1nyuz_78",_w="_label_1nyuz_87",Cw="_description_1nyuz_97",jw="_leadingSlot_1nyuz_101",Sw="_trailingSlot_1nyuz_102",Nw="_content_1nyuz_115",Mw="_taSwitch_1nyuz_167",Rw="_taSwitchThumb_1nyuz_188",Lw="_taCheckbox_1nyuz_203",Aw="_taRadio_1nyuz_226",$w="_taRadioDot_1nyuz_244",Tw="_taExpand_1nyuz_252",Iw="_taStatus_1nyuz_266",Ew="_taStatus_success_1nyuz_273",Pw="_taStatus_warning_1nyuz_274",zw="_taStatus_error_1nyuz_275",Ow="_taStatus_info_1nyuz_276",bt={root:fw,sm:mw,md:gw,lg:vw,divider:yw,interactive:xw,disabled:ww,destructive:bw,selected:kw,label:_w,description:Cw,leadingSlot:jw,trailingSlot:Sw,content:Nw,taSwitch:Mw,taSwitchThumb:Rw,taCheckbox:Lw,taRadio:Aw,taRadioDot:$w,taExpand:Tw,taStatus:Iw,taStatus_success:Ew,taStatus_warning:Pw,taStatus_error:zw,taStatus_info:Ow},gn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};gn.displayName="ChevronRightIcon";const Mu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Mu.displayName="ArrowUpRightIcon";const Dw="_root_4qytd_5",Fw="_neutral_4qytd_25",Bw="_primary_4qytd_30",Ww="_success_4qytd_35",Hw="_warning_4qytd_40",Uw="_error_4qytd_45",qw="_info_4qytd_50",df={root:Dw,neutral:Fw,primary:Bw,success:Ww,warning:Hw,error:Uw,info:qw},sa=v.forwardRef(({variant:e="neutral",className:a,children:i,...s},l)=>r.jsx("span",{ref:l,className:le(df.root,df[e],a),...s,children:i}));sa.displayName="Badge";const Vw=({checked:e})=>r.jsx("span",{className:bt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:r.jsx("span",{className:bt.taSwitchThumb})}),Gw=({checked:e})=>r.jsx("span",{className:bt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Yw=({checked:e})=>r.jsx("span",{className:bt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("span",{className:bt.taRadioDot})}),Kw=({count:e,label:a})=>{const i=e!==void 0?String(e):a;return i?r.jsx(sa,{"aria-hidden":"true",children:i}):null},Qw=({expanded:e})=>r.jsx("span",{className:bt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:16,color:"currentColor"})}),Zw=({variant:e})=>r.jsx("span",{className:le(bt.taStatus,bt[`taStatus_${e}`]),"aria-hidden":"true"}),Xw=new Set(["badge","status"]),fn=v.forwardRef(({label:e,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:A="md",interactive:_,selected:C=!1,destructive:M=!1,disabled:$=!1,className:S,onClick:j,onKeyDown:O,...R},N)=>{const T=l==="switch"||l==="checkbox"||l==="radio",[z,B]=v.useState(h),G=T?d!==void 0?d:z:!1,Z=_||!!j||T||l!==void 0&&!Xw.has(l),F=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Z?"button":void 0,Y=v.useCallback(re=>{if(!$){if(T){const oe=!G;d===void 0&&B(oe),f==null||f(oe)}j==null||j(re)}},[$,T,G,d,f,j]),ee=v.useCallback(re=>{Z&&!$&&(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),Y(re)),O==null||O(re)},[Z,$,Y,O]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(gn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Mu,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(Vw,{checked:G});case"checkbox":return r.jsx(Gw,{checked:G});case"radio":return r.jsx(Yw,{checked:G});case"badge":return r.jsx(Kw,{count:g,label:x});case"expand":return r.jsx(Qw,{expanded:y});case"status":return r.jsx(Zw,{variant:w});default:return null}})();return r.jsxs("div",{ref:N,role:F,tabIndex:Z&&!$?0:void 0,"aria-checked":T?G:void 0,"aria-selected":C||void 0,"aria-disabled":$||void 0,"data-selected":C||void 0,"data-disabled":$||void 0,"data-destructive":M||void 0,"data-trailing-action":l??void 0,className:le(bt.root,bt[A],k&&bt.divider,Z&&bt.interactive,C&&bt.selected,M&&bt.destructive,$&&bt.disabled,S),onClick:$?void 0:Y,onKeyDown:ee,...R,children:[i&&r.jsx("div",{className:bt.leadingSlot,children:i}),r.jsxs("div",{className:bt.content,children:[r.jsx("span",{className:bt.label,children:e}),a&&r.jsx("span",{className:bt.description,children:a})]}),ae&&r.jsx("div",{className:bt.trailingSlot,children:ae})]})});fn.displayName="ListItem";const Jw=v.forwardRef(({title:e,meta:a,icon:i,status:s,...l},d)=>r.jsx(fn,{ref:d,label:e,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(go,{status:s}),...l}));Jw.displayName="UltronActivityStreamItem";const e6="_root_1sz1z_7",t6="_status_1sz1z_50",wd={root:e6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:t6},Ru=v.forwardRef(({disabled:e=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const g=v.useRef(null),[x,y]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const A=k.props;return v.cloneElement(k,{groupDisabled:e||!!A.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=A=>{A.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>y(k),[]),r.jsxs("div",{ref:f,"data-size":a,className:le(wd.root,wd[`size-${a}`],l),...h,children:[w,r.jsx("span",{ref:g,className:wd.status,role:"status","aria-live":"polite",children:x})]})});Ru.displayName="ComposerActions";function bd({size:e=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Lu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Lu.displayName="SearchSmIcon";const Us=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Us.displayName="Trash03Icon";const S0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};S0.displayName="SunIcon";const N0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};N0.displayName="ArrowNarrowRightIcon";function ao({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function uf({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function n6({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const el=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};el.displayName="ChevronSelectorVerticalIcon";const io=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};io.displayName="ClipboardCheckIcon";const M0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};M0.displayName="SettingsGearIcon";const R0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};R0.displayName="ChevronLeftIcon";const L0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};L0.displayName="EyeOffIcon";const A0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};A0.displayName="StopIcon";const $0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$0.displayName="RecordingIcon";const T0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};T0.displayName="BankIcon";function fl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}fl.displayName="ArrowNarrowUpIcon";function I0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}I0.displayName="ArrowNarrowDownIcon";function Au({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Au.displayName="Microphone02Icon";const ta=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ta.displayName="AlertTriangleIcon";const E0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};E0.displayName="BankNote01Icon";const P0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};P0.displayName="CoinsStacked03Icon";function z0({size:e=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const $u=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$u.displayName="Map01Icon";const O0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};O0.displayName="PackageIcon";const D0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};D0.displayName="ThumbsUpIcon";const F0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="ThumbsDownIcon";function Tu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Tu.displayName="Building02Icon";function Iu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Iu.displayName="Building05Icon";function xi({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}xi.displayName="CheckVerified01Icon";function B0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}B0.displayName="Copy01Icon";function W0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}W0.displayName="DotsVerticalIcon";function H0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}H0.displayName="Edit02Icon";function Eu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Eu.displayName="Link01Icon";function ml({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ml.displayName="LinkExternal01Icon";function U0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}U0.displayName="MedicalCrossIcon";function tl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tl.displayName="MessageCircle02Icon";function Pu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Pu.displayName="MinusIcon";function q0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}q0.displayName="Moon01Icon";function V0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}V0.displayName="Pin01Icon";function G0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}G0.displayName="ReceiptCheckIcon";function Y0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Y0.displayName="Trash01Icon";function Xd({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Xd.displayName="UploadCloud01Icon";function ci({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ci.displayName="XCloseIcon";const r6="_base_i93xz_11",o6="_icon_i93xz_45",a6="_sendReady_i93xz_65",i6="_sendStreaming_i93xz_66",s6="_sendDisabled_i93xz_67",l6="_sendError_i93xz_68",c6="_attachIdle_i93xz_131",d6="_attachDisabled_i93xz_145",u6="_attachError_i93xz_152",h6="_voiceIdle_i93xz_165",p6="_voiceRecording_i93xz_179",f6="_voiceDisabled_i93xz_189",m6="_iconStack_i93xz_200",g6="_iconLayer_i93xz_209",mt={base:r6,icon:o6,sendReady:a6,sendStreaming:i6,sendDisabled:s6,sendError:l6,attachIdle:c6,attachDisabled:d6,attachError:u6,voiceIdle:h6,voiceRecording:p6,voiceDisabled:f6,iconStack:m6,iconLayer:g6},v6={hidden:void 0,ready:mt.sendReady,"disabled-invalid":mt.sendDisabled,streaming:mt.sendStreaming,error:mt.sendError},y6=(e,a,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},la=v.forwardRef(({state:e,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useRef(null),A=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]),_=v.useCallback(()=>{if(e==="ready"){a==null||a();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,a,i,s]);if(e==="hidden")return null;const C=!h&&(e==="ready"||e==="streaming"||e==="error"),M=y6(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,S=r.jsx("button",{ref:A,type:"button","data-composer-action":"send","data-state":e,className:le(mt.base,v6[e],f),style:g,"aria-label":M,disabled:!C,onClick:_,...x,children:r.jsxs("span",{className:mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:mt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:r.jsx(fl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:mt.iconLayer,"data-active":e==="streaming"?"true":"false",children:r.jsx(A0,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:mt.iconLayer,"data-active":e==="error"?"true":"false",children:r.jsx(yi,{size:"100%",strokeWidth:2})})]})});return $?r.jsx(cr,{content:$,placement:"top",children:S}):S});la.displayName="ComposerSendButton";const x6={idle:mt.attachIdle,disabled:mt.attachDisabled,error:mt.attachError},w6=(e,a,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},K0=v.forwardRef(({state:e,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useCallback(()=>{var S;(e==="idle"||e==="error")&&((S=w.current)==null||S.click())},[e]),A=v.useCallback(S=>{const j=S.target.files;j&&j.length>0&&(a==null||a(j)),S.target.value=""},[a]),_=!h&&e!=="disabled",C=w6(e,l,d),M=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:le(mt.base,x6[e],f),style:g,"aria-label":C,disabled:!_,onClick:k,...x,children:[r.jsx("span",{className:mt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(mo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:A,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return M?r.jsx(cr,{content:M,placement:"top",children:$}):$});K0.displayName="ComposerAttachment";const b6={idle:mt.voiceIdle,recording:mt.voiceRecording,disabled:mt.voiceDisabled},k6=(e,a)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},Q0=v.forwardRef(({state:e,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},g)=>{const x=v.useCallback(()=>{if(e==="idle"){a==null||a();return}if(e==="recording"){i==null||i();return}},[e,a,i]),y=!l&&e!=="disabled",w=k6(e,s),k=e==="disabled"?s??"Voice unavailable":null,A=r.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:le(mt.base,b6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:mt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:mt.iconLayer,"data-active":e!=="recording"?"true":"false",children:r.jsx(Au,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:mt.iconLayer,"data-active":e==="recording"?"true":"false",children:r.jsx($0,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(cr,{content:k,placement:"top",children:A}):A});Q0.displayName="ComposerVoiceButton";const _6=v.forwardRef(({value:e,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return r.jsx(v0,{className:y,style:{flex:"0 0 auto"},children:r.jsx(y0,{ref:w,value:e,onChange:a,onSubmit:i,placeholder:s,maxRows:f,radius:g,disabled:d,children:r.jsxs(Ru,{size:"md",disabled:d,children:[x,h&&r.jsx(Q0,{state:d?"disabled":"idle"}),r.jsx(la,{state:k,onSend:i,onStop:i})]})})})});_6.displayName="UltronCommandBar";const C6=v.forwardRef(({stages:e,state:a="live",duration:i,...s},l)=>r.jsx(ju,{ref:l,state:a,duration:i,...s,children:e.map((d,h)=>r.jsx(dl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));C6.displayName="UltronThreadTimeline";const j6="_root_ghwhu_10",S6="_badge_ghwhu_27",N6="_badgeIcon_ghwhu_38",M6="_green_ghwhu_59",R6="_yellow_ghwhu_60",L6="_matcha_ghwhu_61",A6="_purple_ghwhu_62",$6="_blue_ghwhu_63",T6="_azure_ghwhu_64",I6="_red_ghwhu_65",E6="_orange_ghwhu_66",P6="_pink_ghwhu_67",z6="_slate_ghwhu_68",O6="_content_ghwhu_73",D6="_label_ghwhu_83",F6="_valueRow_ghwhu_97",B6="_change_ghwhu_106",W6="_value_ghwhu_97",or={root:j6,badge:S6,badgeIcon:N6,green:M6,yellow:R6,matcha:L6,purple:A6,blue:$6,azure:T6,red:I6,orange:E6,pink:P6,slate:z6,content:O6,label:D6,valueRow:F6,change:B6,value:W6},H6=v.forwardRef(({color:e="slate",icon:a,label:i,value:s,change:l,className:d,...h},f)=>r.jsxs("div",{ref:f,className:le(or.root,d),...h,children:[r.jsx("div",{className:le(or.badge,or[e]),"aria-hidden":"true",children:r.jsx("span",{className:or.badgeIcon,children:a})}),r.jsxs("div",{className:or.content,children:[r.jsx("span",{className:or.label,children:i}),r.jsxs("div",{className:or.valueRow,children:[r.jsx("span",{className:or.value,children:s}),l!=null&&r.jsx("span",{className:or.change,children:l})]})]})]}));H6.displayName="DataCard";const U6="_root_d0j6n_7",q6="_icon_d0j6n_21",V6="_text_d0j6n_33",G6="_positive_d0j6n_41",Y6="_warning_d0j6n_45",K6="_negative_d0j6n_49",Es={root:U6,icon:q6,text:V6,positive:G6,warning:Y6,negative:K6};function Q6(e){return e==="up"?"positive":"negative"}const Z6=v.forwardRef((e,a)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Q6(e.trend):e.severity,{severity:f,...g}=d,x=i==="trend"?(({trend:w,severity:k,...A})=>A)(g):g,y=i==="trend"?e.trend==="up"?fl:I0:null;return r.jsxs("span",{ref:a,className:le(Es.root,Es[h],l),...x,children:[r.jsx("span",{className:Es.text,children:s}),y&&r.jsx("span",{className:Es.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});Z6.displayName="ValueChangeLabel";const X6="_root_1lq10_1",J6="_horizontal_1lq10_9",e9="_vertical_1lq10_15",t9="_solid_1lq10_32",n9="_dashed_1lq10_36",Ps={root:X6,horizontal:J6,vertical:e9,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:t9,dashed:n9},r9=v.forwardRef(({thickness:e=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:le(Ps.root,Ps[`thickness-${e}`],Ps[a],Ps[i],s),...l}));r9.displayName="Divider";const o9="_overlay_vxgy2_9",a9="_dialogOverlayIn_vxgy2_1",i9="_dialogOverlayOut_vxgy2_1",s9="_dialog_vxgy2_38",l9="_dialogIn_vxgy2_1",c9="_dialogOut_vxgy2_1",d9="_sm_vxgy2_88",u9="_md_vxgy2_89",h9="_lg_vxgy2_90",p9="_header_vxgy2_95",f9="_title_vxgy2_107",m9="_closeBtn_vxgy2_120",g9="_content_vxgy2_152",v9="_footer_vxgy2_163",Er={overlay:o9,dialogOverlayIn:a9,dialogOverlayOut:i9,dialog:s9,dialogIn:l9,dialogOut:c9,sm:d9,md:u9,lg:h9,header:p9,title:f9,closeBtn:m9,content:g9,footer:v9},y9=v.forwardRef(({onClose:e,children:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:le(Er.header,i),...s,children:[r.jsx("span",{className:Er.title,children:a}),e&&r.jsx("button",{type:"button",className:Er.closeBtn,onClick:e,"aria-label":"Close",children:r.jsx(vi,{size:16})})]}));y9.displayName="DialogHeader";const x9=v.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:le(Er.content,a),...i,children:e}));x9.displayName="DialogContent";const w9=v.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:le(Er.footer,a),...i,children:e}));w9.displayName="DialogFooter";function b9({open:e,onClose:a,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),f=180,[g,x]=v.useState(e);return v.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),f);return()=>clearTimeout(y)},[e]),v.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&a()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,a]),v.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),g?gi.createPortal(r.jsx("div",{className:Er.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&a()},children:r.jsx("div",{ref:h,className:le(Er.dialog,Er[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const k9="_root_1dntq_7",_9="_badge_1dntq_57",C9="_badgeIconSlot_1dntq_74",j9="_content_1dntq_82",S9="_text_1dntq_90",N9="_title_1dntq_99",M9="_description_1dntq_120",R9="_actions_1dntq_131",L9="_dot_1dntq_137",A9="_actionLink_1dntq_144",$9="_primaryAction_1dntq_162",T9="_trailing_1dntq_170",Wt={root:k9,badge:_9,badgeIconSlot:C9,content:j9,text:S9,title:N9,description:M9,actions:R9,dot:L9,actionLink:A9,primaryAction:$9,trailing:T9},I9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),E9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),P9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),hf=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),z9={error:I9,warning:P9,success:E9,info:hf,feature:hf},Z0=v.forwardRef(({status:e="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const A=z9[e],_=i==="lg",C=x?r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(vi,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:le(Wt.root,y),"data-status":e,"data-variant":a,"data-size":i,...w,children:[r.jsx("span",{className:Wt.badge,"aria-hidden":"true",children:r.jsx("span",{className:le("alloy-icon-slot",Wt.badgeIconSlot),children:r.jsx(A,{})})}),_?r.jsxs("div",{className:Wt.content,children:[r.jsxs("div",{className:Wt.text,children:[r.jsx("p",{className:Wt.title,children:s}),l&&r.jsx("p",{className:Wt.description,children:l})]}),(d||f)&&r.jsxs("div",{className:Wt.actions,children:[d&&r.jsx("button",{type:"button",className:le(Wt.actionLink,Wt.primaryAction),onClick:h,children:d}),d&&f&&r.jsx("span",{className:Wt.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:Wt.actionLink,onClick:g,children:f})]})]}):r.jsx("p",{className:Wt.title,children:s}),_?C:(d||x)&&r.jsxs("div",{className:Wt.trailing,children:[d&&r.jsx("button",{type:"button",className:le(Wt.actionLink,Wt.primaryAction),onClick:h,children:d}),C]})]})});Z0.displayName="Alert";const O9="_stack_x4xl7_11",D9="_item_x4xl7_28",F9="_itemExiting_x4xl7_33",Jd={stack:O9,item:D9,itemExiting:F9},B9=v.createContext(null);function W9({id:e,title:a,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:g,exiting:x,onRemove:y}){const w=v.useCallback(()=>y(e),[e,y]);return r.jsx("div",{className:le(Jd.item,x&&Jd.itemExiting),onAnimationEnd:x?w:void 0,children:r.jsx(Z0,{status:s,variant:l,size:d,title:a,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function H9({toasts:e,onStartExit:a,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,a]),e.length===0?null:gi.createPortal(r.jsx("div",{className:Jd.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>r.jsx(W9,{...s,onRemove:i},s.id))}),document.body)}function U9({children:e}){const[a,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(f=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(f=>{i(g=>g.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),h=v.useCallback(f=>{i(g=>g.filter(x=>x.id!==f))},[]);return r.jsxs(B9.Provider,{value:{addToast:l,removeToast:d},children:[e,r.jsx(H9,{toasts:a,onStartExit:d,onRemove:h})]})}const q9="_root_1s0ek_5",V9="_list_1s0ek_11",G9="_item_1s0ek_23",Y9="_separator_1s0ek_31",K9="_link_1s0ek_47",Q9="_current_1s0ek_68",Z9="_iconSlot_1s0ek_76",Gn={root:q9,list:V9,item:G9,separator:Y9,link:K9,current:Q9,iconSlot:Z9},X9=()=>r.jsx("span",{className:Gn.separator,"aria-hidden":"true",children:"/"}),J9=()=>r.jsx("span",{className:Gn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),e8=v.forwardRef(({items:e,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?J9:X9;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:le(Gn.root,i),...s,children:r.jsx("ol",{className:Gn.list,children:e.map((h,f)=>{const g=f===e.length-1,x=!g&&(!!h.href||!!h.onClick);return r.jsxs("li",{className:Gn.item,children:[f>0&&r.jsx(d,{}),x?r.jsxs("a",{href:h.href,onClick:h.onClick,className:Gn.link,"aria-label":h.label,children:[h.icon&&r.jsx("span",{className:le(Gn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]}):r.jsxs("span",{className:le(Gn.link,g&&Gn.current),"aria-current":g?"page":void 0,children:[h.icon&&r.jsx("span",{className:le(Gn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]})]},f)})})})});e8.displayName="Breadcrumb";const t8="_root_139vz_6",n8="_divider_139vz_14",r8="_item_139vz_19",o8="_label_139vz_25",a8="_description_139vz_26",i8="_chevron_139vz_27",s8="_iconSlot_139vz_28",l8="_hitTarget_139vz_32",c8="_size_sm_139vz_37",d8="_size_md_139vz_43",u8="_size_lg_139vz_49",h8="_header_139vz_59",p8="_headerContent_139vz_59",f8="_checkboxWrap_139vz_60",m8="_labelBlock_139vz_157",g8="_trailingSlot_139vz_60",v8="_body_139vz_199",y8="_bodyInner_139vz_209",x8="_bodyContent_139vz_214",At={root:t8,divider:n8,item:r8,label:o8,description:a8,chevron:i8,iconSlot:s8,hitTarget:l8,size_sm:c8,size_md:d8,size_lg:u8,header:h8,headerContent:p8,checkboxWrap:f8,labelBlock:m8,trailingSlot:g8,body:v8,bodyInner:y8,bodyContent:x8},w8="_root_17t97_6",b8="_disabled_17t97_12",k8="_sm_17t97_18",_8="_md_17t97_26",C8="_lg_17t97_34",j8="_controlWrap_17t97_43",S8="_input_17t97_52",N8="_box_17t97_67",M8="_boxChecked_17t97_96",R8="_boxError_17t97_106",L8="_labelWrap_17t97_116",A8="_label_17t97_116",$8="_error_17t97_138",T8="_required_17t97_140",I8="_description_17t97_145",dn={root:w8,disabled:b8,sm:k8,md:_8,lg:C8,controlWrap:j8,input:S8,box:N8,boxChecked:M8,boxError:R8,labelWrap:L8,label:A8,error:$8,required:T8,description:I8},X0=v.forwardRef(({checked:e,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:g,id:x,name:y,value:w,required:k,className:A},_)=>{const C=v.useId(),M=x??C,$=v.useRef(null);v.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const S=e!==void 0,[j,O]=v.useState(a),R=S?e:j,N=z=>{S||O(z.target.checked),s==null||s(z.target.checked)},T=R||i;return r.jsxs("div",{className:le(dn.root,dn[h],l&&dn.disabled,d&&dn.error,A),children:[r.jsxs("div",{className:dn.controlWrap,children:[r.jsx("input",{ref:z=>{$.current=z,typeof _=="function"?_(z):_&&(_.current=z)},type:"checkbox",id:M,name:y,value:w,checked:R,disabled:l,required:k,"aria-invalid":d||void 0,onChange:N,className:dn.input}),r.jsx("span",{className:le(dn.box,T&&dn.boxChecked,d&&dn.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):R?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||g)&&r.jsxs("div",{className:dn.labelWrap,children:[f&&r.jsxs("label",{htmlFor:M,className:dn.label,children:[f,k&&r.jsx("span",{className:dn.required,"aria-hidden":"true",children:" *"})]}),g&&r.jsx("span",{className:dn.description,children:g})]})]})});X0.displayName="Checkbox";const J0=v.createContext(null),eu=v.createContext(0),eg=v.forwardRef(({type:e="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:g,children:x,...y},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[A,_]=v.useState(k),C=i!==void 0,M=v.useMemo(()=>C?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:A,[C,i,A]),$=v.useCallback(O=>M.has(O),[M]),S=v.useCallback(O=>{const R=new Set(M);e==="single"?R.has(O)?a&&R.delete(O):(R.clear(),R.add(O)):R.has(O)?R.delete(O):R.add(O),C||_(R),l&&l(e==="single"?R.values().next().value??"":Array.from(R))},[M,e,a,C,l]),j=v.useMemo(()=>({type:e,collapsible:a,size:h,disabled:f,isExpanded:$,toggle:S}),[e,a,h,f,$,S]);return r.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:le(At.root,d&&At.divider,g),...y,children:r.jsx(J0.Provider,{value:j,children:r.jsx(eu.Provider,{value:0,children:x})})})});eg.displayName="Accordion";function zs(e,a){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(a){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const tg=v.forwardRef(({value:e,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:A=!1,onExpandedChange:_,disabled:C=!1,size:M,className:$,children:S,...j},O)=>{const R=v.useContext(J0),N=v.useContext(eu),T=R!==null,z=M??(R==null?void 0:R.size)??"md",B=C||(R==null?void 0:R.disabled)||!1,[G,Z]=v.useState(A);let F;T?F=e!==void 0?R.isExpanded(e):!1:k!==void 0?F=k:F=G;const Y=v.useCallback(()=>{if(B)return;if(T){if(e===void 0)return;const L=R.isExpanded(e);R.toggle(e);const U=R.type==="single"&&!R.collapsible&&L?!0:!L;_==null||_(U);return}const E=!F;k===void 0&&Z(E),_==null||_(E)},[B,T,R,e,F,k,_]),ee=v.useCallback(E=>w==null?void 0:w(E),[w]),ae=v.useCallback(E=>{if(E.key==="Enter"||E.key===" "){E.preventDefault(),Y();return}if(T)switch(E.key){case"ArrowDown":E.preventDefault(),zs(E.currentTarget,"next");break;case"ArrowUp":E.preventDefault(),zs(E.currentTarget,"prev");break;case"Home":E.preventDefault(),zs(E.currentTarget,"first");break;case"End":E.preventDefault(),zs(E.currentTarget,"last");break}},[Y,T]),re=v.useId(),oe=`${re}-header`,X=`${re}-body`,W=z==="sm"?16:z==="md"?18:20,V=l??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:At.checkboxWrap,children:r.jsx(X0,{size:z,checked:g,defaultChecked:x,indeterminate:y,disabled:B,onChange:ee})}),s&&r.jsx("span",{className:At.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:O,"data-accordion-item":"","data-expanded":F||void 0,"data-disabled":B||void 0,"data-size":z,"data-depth":N,className:le(At.item,At[`size_${z}`],$),style:{"--accordion-depth":N},...j,children:[r.jsxs("div",{className:At.header,children:[r.jsx("button",{type:"button",id:oe,"data-accordion-header-button":"","data-accordion-depth":N,className:At.hitTarget,"aria-expanded":F,"aria-controls":X,"aria-disabled":B||void 0,disabled:B,onClick:Y,onKeyDown:ae}),r.jsxs("div",{className:At.headerContent,children:[h==="leading"&&r.jsx("span",{className:At.chevron,"aria-hidden":"true",children:r.jsx(gn,{size:W,color:"currentColor"})}),V,r.jsxs("div",{className:At.labelBlock,children:[r.jsx("span",{className:At.label,children:a}),i&&r.jsx("span",{className:At.description,children:i})]}),d&&r.jsx("div",{className:At.trailingSlot,children:d}),h==="trailing"&&r.jsx("span",{className:At.chevron,"aria-hidden":"true",children:r.jsx(gn,{size:W,color:"currentColor"})})]})]}),r.jsx("div",{id:X,role:"region","aria-labelledby":oe,className:At.body,"aria-hidden":!F,children:r.jsx("div",{className:At.bodyInner,children:r.jsx("div",{className:At.bodyContent,children:r.jsx(eu.Provider,{value:N+1,children:S})})})})]})});tg.displayName="AccordionItem";const E8="_root_1vgip_7",P8="_fullWidth_1vgip_12",z8="_panel_1vgip_19",O8="_panelInner_1vgip_73",D8="_item_1vgip_81",F8="_groupHeading_1vgip_87",B8="_groupHeadingSm_1vgip_96",W8="_groupHeadingLabel_1vgip_100",H8="_groupHeadingCollapsible_1vgip_112",U8="_groupChevron_1vgip_125",q8="_groupDivider_1vgip_139",Dn={root:E8,fullWidth:P8,panel:z8,panelInner:O8,item:D8,groupHeading:F8,groupHeadingSm:B8,groupHeadingLabel:W8,groupHeadingCollapsible:H8,groupChevron:U8,groupDivider:q8};function V8({group:e,size:a,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return r.jsxs("div",{children:[e.heading&&r.jsxs("div",{className:le(Dn.groupHeading,a==="sm"&&Dn.groupHeadingSm,e.collapsible&&Dn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[r.jsx("span",{className:Dn.groupHeadingLabel,children:e.heading}),e.collapsible&&r.jsx("span",{className:Dn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return r.jsx(fn,{role:"menuitem",size:a,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Dn.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const zu=v.forwardRef(({trigger:e,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},A)=>{const[_,C]=v.useState(h),M=v.useRef(null),$=d!==void 0?d:_,S=v.useCallback(O=>{M.current=O,A&&(typeof A=="function"?A(O):A.current=O)},[A]),j=v.useCallback(O=>{d===void 0&&C(O),f==null||f(O)},[d,f]);return v.useEffect(()=>{if(!$)return;const O=R=>{var N;(N=M.current)!=null&&N.contains(R.target)||j(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[$,j]),v.useEffect(()=>{if(!$)return;const O=R=>{R.key==="Escape"&&j(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[$,j]),r.jsxs("div",{ref:S,className:le(Dn.root,y&&Dn.fullWidth,w),...k,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:g?-1:0,onClick:g?void 0:()=>j(!$),onKeyDown:g?void 0:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),j(!$))},children:e}),r.jsx("div",{className:Dn.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:Dn.panelInner,children:a.map((O,R)=>r.jsxs("div",{children:[R>0&&r.jsx("div",{className:Dn.groupDivider,"aria-hidden":"true"}),r.jsx(V8,{group:O,size:i,closeOnSelect:x,onClose:()=>j(!1)})]},O.id))})})]})});zu.displayName="DropdownMenu";const G8="_hiddenInput_7w2s5_8",Y8="_area_7w2s5_19",K8="_uploadIcon_7w2s5_53",Q8="_textBlock_7w2s5_59",Z8="_title_7w2s5_67",X8="_description_7w2s5_76",J8="_fileRow_7w2s5_88",eb="_fileIcon_7w2s5_96",tb="_fileName_7w2s5_101",nb="_successIcon_7w2s5_115",rb="_removeBtn_7w2s5_121",ob="_progressWrap_7w2s5_145",ab="_progressBar_7w2s5_153",ib="_progressFill_7w2s5_161",sb="_progressLabel_7w2s5_168",lb="_errorRow_7w2s5_178",cb="_errorIcon_7w2s5_186",db="_errorText_7w2s5_192",ub="_areaMulti_7w2s5_206",hb="_multiDropZone_7w2s5_214",pb="_fileList_7w2s5_244",fb="_fileListItem_7w2s5_254",mb="_inline_7w2s5_267",gb="_inlineIcon_7w2s5_309",vb="_inlineText_7w2s5_330",yb="_inlineProgress_7w2s5_353",xb="_inlineProgressFill_7w2s5_363",qe={hiddenInput:G8,area:Y8,uploadIcon:K8,textBlock:Q8,title:Z8,description:X8,fileRow:J8,fileIcon:eb,fileName:tb,successIcon:nb,removeBtn:rb,progressWrap:ob,progressBar:ab,progressFill:ib,progressLabel:sb,errorRow:lb,errorIcon:cb,errorText:db,areaMulti:ub,multiDropZone:hb,fileList:pb,fileListItem:fb,inline:mb,inlineIcon:gb,inlineText:vb,inlineProgress:yb,inlineProgressFill:xb};function kd(e){const a=e.name.lastIndexOf(".");return a!==-1?e.name.slice(a+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const ng=v.forwardRef(({variant:e="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:A,fieldVariant:_="outlined",disabled:C=!1,className:M,...$},S)=>{const j=v.useRef(null),[O,R]=v.useState(!1),N=!C&&(a||i==="empty"),T=v.useCallback(()=>{var re;!C&&(a||i==="empty")&&((re=j.current)==null||re.click())},[C,a,i]),z=v.useCallback(re=>{var oe;if(a){const X=re.target.files?Array.from(re.target.files):[];X.length&&(w==null||w(X))}else{const X=(oe=re.target.files)==null?void 0:oe[0];X&&(y==null||y(X))}re.target.value=""},[a,y,w]),B=v.useCallback(re=>{re.preventDefault(),N&&R(!0)},[N]),G=v.useCallback(()=>R(!1),[]),Z=v.useCallback(re=>{var oe;if(re.preventDefault(),R(!1),!!N)if(a){const X=re.dataTransfer.files?Array.from(re.dataTransfer.files):[];X.length&&(w==null||w(X))}else{const X=(oe=re.dataTransfer.files)==null?void 0:oe[0];X&&(y==null||y(X))}},[N,a,y,w]),F=r.jsx("input",{ref:j,type:"file",className:qe.hiddenInput,accept:x,multiple:a,disabled:C,"aria-hidden":"true",tabIndex:-1,onChange:z}),Y=l?r.jsxs("div",{className:qe.fileRow,children:[r.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Ir,{size:16})}),r.jsx("span",{className:qe.fileName,children:l.name}),r.jsx(Sn,{size:"sm",variant:"subtle",children:kd(l)}),i==="complete"&&r.jsx("span",{className:`${qe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(mn,{size:16})}),r.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Us,{size:14})})})]}):null;if(e==="area"){if(a){const re=d??[];return r.jsxs("div",{ref:S,className:le(qe.areaMulti,M),"data-drag-over":O||void 0,"data-disabled":C||void 0,onDragOver:B,onDragLeave:G,onDrop:Z,...$,children:[F,r.jsxs("div",{className:qe.multiDropZone,children:[r.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(bd,{size:24})}),r.jsxs("div",{className:qe.textBlock,children:[r.jsx("p",{className:qe.title,children:f}),r.jsx("p",{className:qe.description,children:g})]}),r.jsx(Ee,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Browse Files"})]}),re.length>0&&r.jsx("ul",{className:qe.fileList,"aria-label":"Selected files",children:re.map((oe,X)=>r.jsxs("li",{className:qe.fileListItem,children:[r.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Ir,{size:16})}),r.jsx("span",{className:qe.fileName,children:oe.name}),r.jsx(Sn,{size:"sm",variant:"subtle",children:kd(oe)}),r.jsx("button",{type:"button",className:qe.removeBtn,onClick:()=>A==null?void 0:A(X),"aria-label":`Remove ${oe.name}`,disabled:C,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Us,{size:14})})})]},`${oe.name}-${X}`))})]})}return r.jsxs("div",{ref:S,className:le(qe.area,M),"data-state":i,"data-drag-over":O||void 0,"data-disabled":C||void 0,onDragOver:B,onDragLeave:G,onDrop:Z,...$,children:[F,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(bd,{size:24})}),r.jsxs("div",{className:qe.textBlock,children:[r.jsx("p",{className:qe.title,children:f}),r.jsx("p",{className:qe.description,children:g})]}),r.jsx(Ee,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[Y,r.jsxs("div",{className:qe.progressWrap,children:[r.jsx("div",{className:qe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:qe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:qe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&Y,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:qe.errorRow,children:[r.jsx("span",{className:`${qe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(ea,{size:20})}),r.jsx("p",{className:qe.errorText,children:h??"Upload failed. Please try again."})]}),r.jsx(Ee,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Try Again"})]})]})}const ee={empty:r.jsx(bd,{size:16}),uploading:r.jsx(Ir,{size:16}),complete:r.jsx(mn,{size:16}),error:r.jsx(ea,{size:16})}[i],ae=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:S,className:le(qe.inline,M),"data-state":i,"data-field-variant":_,"data-disabled":C||void 0,...$,children:[F,r.jsx("span",{className:`${qe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ee}),r.jsxs("span",{className:qe.inlineText,"data-has-file":ae?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),ae&&r.jsx(Sn,{size:"sm",variant:"subtle",children:kd(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Us,{size:14})})}),i==="empty"&&r.jsx(Ee,{variant:"tertiary",size:"xs",onClick:T,disabled:C,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:qe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:qe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});ng.displayName="FileUploader";const wb="_wrapper_127v8_8",bb="_labelRow_127v8_16",kb="_label_127v8_16",_b="_required_127v8_28",Cb="_labelIcon_127v8_36",jb="_sm_127v8_46",Sb="_md_127v8_47",Nb="_lg_127v8_48",Mb="_shell_127v8_44",Rb="_outlined_127v8_75",Lb="_underlined_127v8_102",Ab="_float_127v8_147",$b="_leadingSlot_127v8_181",Tb="_trailingSlot_127v8_193",Ib="_trailingActionWrap_127v8_206",Eb="_trailingActionBtn_127v8_213",Pb="_successTrailingSlot_127v8_234",zb="_errorTrailingSlot_127v8_239",Ob="_control_127v8_251",Db="_selectValue_127v8_297",Fb="_selectPlaceholder_127v8_303",Bb="_selectChevron_127v8_307",Wb="_selectChevronOpen_127v8_312",Hb="_textareaShell_127v8_315",Ub="_textareaControl_127v8_334",qb="_footer_127v8_351",Vb="_footerRow_127v8_363",Gb="_footerError_127v8_364",Yb="_footerSuccess_127v8_365",Kb="_footerIcon_127v8_368",Qb="_wrapperHorizontal_127v8_378",Zb="_horizontalLabelCol_127v8_384",Xb="_horizontalLabelHint_127v8_393",Jb="_horizontalControlCol_127v8_402",e7="_msContainer_127v8_416",t7="_msShell_127v8_425",n7="_msOpen_127v8_440",r7="_msDisabled_127v8_447",o7="_msBody_127v8_450",a7="_msPlaceholder_127v8_459",i7="_msChevron_127v8_469",s7="_msChevronOpen_127v8_480",l7="_msPanel_127v8_483",$e={wrapper:wb,labelRow:bb,label:kb,required:_b,labelIcon:Cb,sm:jb,md:Sb,lg:Nb,shell:Mb,outlined:Rb,underlined:Lb,float:Ab,leadingSlot:$b,trailingSlot:Tb,trailingActionWrap:Ib,trailingActionBtn:Eb,successTrailingSlot:Pb,errorTrailingSlot:zb,control:Ob,selectValue:Db,selectPlaceholder:Fb,selectChevron:Bb,selectChevronOpen:Wb,textareaShell:Hb,textareaControl:Ub,footer:qb,footerRow:Vb,footerError:Gb,footerSuccess:Yb,footerIcon:Kb,wrapperHorizontal:Qb,horizontalLabelCol:Zb,horizontalLabelHint:Xb,horizontalControlCol:Jb,msContainer:e7,msShell:t7,msOpen:n7,msDisabled:r7,msBody:o7,msPlaceholder:a7,msChevron:i7,msChevronOpen:s7,msPanel:l7};function ca({label:e,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,A=l?"error":d?"success":"hint",_=k?r.jsxs("p",{className:le($e.footer,A==="error"&&$e.footerError,A==="success"&&$e.footerSuccess),role:A==="error"?"alert":void 0,"aria-live":A==="error"?"assertive":void 0,children:[A==="hint"&&r.jsx("span",{className:`${$e.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(ea,{size:12})}),k]}):null,C=e!=null?r.jsxs("div",{className:$e.labelRow,children:[r.jsx("label",{className:$e.label,htmlFor:f,children:e}),h&&r.jsx("span",{className:$e.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${$e.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(g==="horizontal"){const M={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:le($e.wrapper,$e.wrapperHorizontal,y),children:[(C||i)&&r.jsxs("div",{className:$e.horizontalLabelCol,style:M,children:[C,i&&r.jsx("p",{className:$e.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:$e.horizontalControlCol,children:[w,_]})]})}return r.jsxs("div",{className:le($e.wrapper,y),children:[C,w,_]})}function wi({variant:e="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const A=a==="sm"?14:a==="lg"?18:16,_=s&&!i&&!f&&!g?r.jsx(mn,{size:A}):null,C=i&&!f&&!g?r.jsx(ea,{size:A}):null,M=!!h,$=!!(f||g||_||C);return r.jsxs("div",{className:le($e.shell,$e[e],$e[a],x&&$e.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":M||void 0,"data-has-trailing":$||void 0,children:[h&&r.jsx("span",{className:le($e.leadingSlot,"alloy-icon-slot"),children:h}),k,g?r.jsx("span",{className:$e.trailingActionWrap,children:g}):f||_||C?r.jsx("span",{className:le($e.trailingSlot,"alloy-icon-slot",_&&$e.successTrailingSlot,C&&$e.errorTrailingSlot),children:f??_??C}):null]})}const Ou=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:A,id:_,disabled:C,readOnly:M,className:$,...S},j)=>{const O=v.useId(),R=_??O;return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:R,layout:w,labelWidth:k,labelDescription:A,className:$,children:r.jsx(wi,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:M,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:j,id:R,type:g,disabled:C,readOnly:M,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${R}-footer`:void 0,className:le($e.control),...S})})})});Ou.displayName="TextField";const c7=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:A,disabled:_,readOnly:C,className:M,...$},S)=>{const j=v.useId(),O=A??j;return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:O,layout:y,labelWidth:w,labelDescription:k,className:M,children:r.jsx(wi,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:S,id:O,disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,className:le($e.control,$e.textareaControl),...$})})})});c7.displayName="TextArea";const d7={sm:"sm",md:"md",lg:"lg"},rg=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:A,defaultValue:_="",onChange:C,placeholder:M="Select an option…",disabled:$,readOnly:S,id:j,className:O},R)=>{var W;const N=v.useId(),T=j??N,z=A!==void 0,[B,G]=v.useState(_),Z=z?A:B,F=v.useCallback(V=>{z||G(V),C==null||C(V)},[z,C]),[Y,ee]=v.useState(!1),ae=(W=k.find(V=>V.value===Z))==null?void 0:W.label,re=f==="sm"?14:f==="lg"?18:16,oe=d7[f],X=r.jsx(wi,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:S,focused:Y,leadingIcon:g,trailingIcon:r.jsx("span",{className:le($e.selectChevron,Y&&$e.selectChevronOpen),"aria-hidden":"true",children:r.jsx(Nn,{size:re})}),children:r.jsx("span",{className:le($e.control,$e.selectValue,!ae&&$e.selectPlaceholder),children:ae??M})});return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:T,layout:x,labelWidth:y,labelDescription:w,className:O,children:r.jsx(zu,{ref:R,id:T,fullWidth:!0,trigger:X,groups:[{id:"options",options:k.map(V=>({id:V.value,label:V.label,disabled:V.disabled,selected:V.value===Z,onClick:()=>F(V.value)}))}],size:oe,width:"100%",placement:"bottom-start",open:Y,onOpenChange:ee,disabled:$||S})})});rg.displayName="SelectField";const u7=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:A,readOnly:_,className:C,...M},$)=>{const S=v.useId(),j=k??S,[O,R]=v.useState(!1),N=f==="sm"?14:f==="lg"?18:16;return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:j,layout:x,labelWidth:y,labelDescription:w,className:C,children:r.jsx(wi,{variant:h,size:f,error:!!s,success:!!l,disabled:A,readOnly:_,leadingIcon:g,trailingAction:r.jsx("button",{type:"button",className:`${$e.trailingActionBtn} alloy-icon-slot`,onClick:()=>R(T=>!T),tabIndex:A?-1:0,"aria-label":O?"Hide password":"Show password","aria-pressed":O,children:O?r.jsx(L0,{size:N}):r.jsx(Su,{size:N})}),children:r.jsx("input",{ref:$,id:j,type:O?"text":"password",disabled:A,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:le($e.control),...M})})})});u7.displayName="PasswordField";const og=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:A,value:_,defaultValue:C,disabled:M,readOnly:$,className:S,...j},O)=>{const R=v.useId(),N=A??R,T=f==="sm"?14:f==="lg"?18:16,z=_!==void 0?String(_).length>0:void 0,B=v.useCallback(G=>{x==null||x(G)},[x]);return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:N,layout:y,labelWidth:w,labelDescription:k,className:S,children:r.jsx(wi,{variant:h,size:f,error:!!s,success:!!l,disabled:M,readOnly:$,leadingIcon:r.jsx(Lu,{size:T}),trailingAction:z?r.jsx("button",{type:"button",className:`${$e.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:M?-1:0,"aria-label":"Clear search",children:r.jsx(vi,{size:T})}):void 0,children:r.jsx("input",{ref:O,id:N,type:"search",value:_,defaultValue:C,disabled:M,readOnly:$,"aria-invalid":s?!0:void 0,onChange:B,className:le($e.control),...j})})})});og.displayName="SearchField";const ag=v.forwardRef((e,a)=>r.jsx(Ou,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...e}));ag.displayName="EmailField";const ig=v.forwardRef((e,a)=>r.jsx(Ou,{ref:a,type:"number",inputMode:"numeric",...e}));ig.displayName="NumberField";const h7={sm:"sm",md:"sm",lg:"md"},p7={sm:"sm",md:"md",lg:"lg"},f7=v.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:A=[],onChange:_,placeholder:C="Select options…",disabled:M,readOnly:$,id:S,className:j},O)=>{const R=v.useId(),N=S??R,T=`${N}-list`,z=v.useRef(null),B=k!==void 0,[G,Z]=v.useState(A),F=B?k:G,Y=v.useCallback(L=>{B||Z(L),_==null||_(L)},[B,_]),[ee,ae]=v.useState(!1);v.useEffect(()=>{if(!ee)return;const L=K=>{z.current&&!z.current.contains(K.target)&&ae(!1)},U=K=>{K.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",L),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("keydown",U)}},[ee]);const re=L=>{if(M||$)return;const U=F.includes(L)?F.filter(K=>K!==L):[...F,L];Y(U)},oe=L=>{M||$||((L.key==="Enter"||L.key===" ")&&(L.preventDefault(),ae(U=>!U)),L.key==="Backspace"&&F.length>0&&!ee&&Y(F.slice(0,-1)))},X=f==="sm"?14:f==="lg"?18:16,W=h7[f],V=p7[f],E=Object.fromEntries(w.map(L=>[L.value,L.label]));return r.jsx(ca,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:N,layout:g,labelWidth:x,labelDescription:y,className:j,children:r.jsxs("div",{ref:z,className:$e.msContainer,children:[r.jsxs("div",{ref:O,id:N,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":T,"aria-disabled":M||void 0,tabIndex:M?-1:0,className:le($e.msShell,$e[h],$e[f],ee&&$e.msOpen,M&&$e.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":M||void 0,onClick:()=>{!M&&!$&&ae(L=>!L)},onKeyDown:oe,children:[r.jsx("div",{className:$e.msBody,children:F.length===0?r.jsx("span",{className:$e.msPlaceholder,children:C}):F.map(L=>r.jsx(Sn,{size:W,variant:"subtle",dismissible:!M&&!$,onDismiss:()=>Y(F.filter(U=>U!==L)),children:E[L]??L},L))}),r.jsx("span",{className:le($e.msChevron,"alloy-icon-slot",ee&&$e.msChevronOpen),children:r.jsx(Nn,{size:X})})]}),ee&&r.jsx("div",{id:T,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:$e.msPanel,children:w.map(L=>{const U=F.includes(L.value);return r.jsx(fn,{label:L.label,size:V,trailingAction:"checkbox",checked:U,disabled:L.disabled,role:"option","aria-selected":U,onMouseDown:K=>{K.preventDefault()},onCheckedChange:()=>{L.disabled||re(L.value)}},L.value)})})]})})});f7.displayName="MultiSelectField";const m7="_root_1249j_6",g7="_pageControls_1249j_14",v7="_pageBtn_1249j_21",y7="_ellipsis_1249j_36",x7="_rowsGroup_1249j_51",w7="_rowsSelect_1249j_58",b7="_countText_1249j_64",k7="_groupLabel_1249j_74",_7="_goToGroup_1249j_84",C7="_goToInput_1249j_91",zn={root:m7,pageControls:g7,pageBtn:v7,ellipsis:y7,rowsGroup:x7,rowsSelect:w7,countText:b7,groupLabel:k7,goToGroup:_7,goToInput:C7};function j7(e,a,i){if(a<=1)return[1];const s=Math.max(2,e-i),l=Math.min(a-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const S7=v.forwardRef(({page:e,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...A},_)=>{const[C,M]=v.useState(""),$=y,S=y,j=y==="sm"?14:16,O=j7(e,a,x),R=v.useCallback(z=>{const B=Math.min(Math.max(1,z),a);B!==e&&i(B)},[e,a,i]),N=v.useCallback(z=>{if(z.key==="Enter"){const B=parseInt(C,10);isNaN(B)||R(B),M("")}},[C,R]),T=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return r.jsxs("nav",{ref:_,"aria-label":"Pagination",className:le(zn.root,k),"data-size":y,...A,children:[s&&r.jsxs("div",{className:zn.rowsGroup,children:[r.jsx("span",{className:zn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:zn.rowsSelect,children:r.jsx(rg,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:z=>h==null?void 0:h(Number(z.target.value)),children:d.map(z=>r.jsx("option",{value:z,children:z},z))})})]}),T&&r.jsx("span",{className:zn.countText,"aria-live":"polite",children:T}),r.jsxs("div",{className:zn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Ee,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>R(e-1),children:r.jsx(R0,{size:j})}),O.map((z,B)=>z==="ellipsis"?r.jsx("span",{className:zn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${B}`):r.jsx(Ee,{variant:z===e?"secondary":"ghost",size:$,"aria-label":`Page ${z}`,"aria-current":z===e?"page":void 0,disabled:w,onClick:()=>R(z),className:zn.pageBtn,children:z},z)),r.jsx(Ee,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=a,onClick:()=>R(e+1),children:r.jsx(gn,{size:j})})]}),f&&r.jsxs("div",{className:zn.goToGroup,children:[r.jsx("span",{className:zn.groupLabel,children:"Go to"}),r.jsx("div",{className:zn.goToInput,children:r.jsx(ig,{size:S,value:C,placeholder:String(e),min:1,max:a,disabled:w,"aria-label":"Go to page number",onChange:z=>M(z.target.value),onKeyDown:N})})]})]})});S7.displayName="Pagination";const N7="_root_1vx33_6",M7="_fullWidth_1vx33_18",R7="_item_1vx33_23",L7="_indicator_1vx33_28",A7="_sm_1vx33_46",$7="_md_1vx33_54",T7="_lg_1vx33_62",I7="_itemSelected_1vx33_109",E7="_itemIcon_1vx33_115",P7="_itemLabel_1vx33_127",$r={root:N7,fullWidth:M7,item:R7,indicator:L7,sm:A7,md:$7,lg:T7,itemSelected:I7,itemIcon:E7,itemLabel:P7},sg=v.createContext(null);function z7(e){const a=v.useContext(sg);if(!a)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return a}const lg=v.forwardRef(({value:e,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:g,onChange:x,disabled:y,name:w}=z7("SegmentedControl.Item"),k=g===e,A=y||!!l;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:A,className:le($r.item,k&&$r.itemSelected,i),onClick:_=>{A||x(e),d==null||d(_)},...h,children:[a&&r.jsx("span",{className:le($r.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:$r.itemLabel,children:s})]})});lg.displayName="SegmentedControl.Item";const cg=v.forwardRef(({value:e,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(a),k=e!==void 0,A=k?e:y,_=v.useId(),C=v.useRef(null);v.useLayoutEffect(()=>{const $=C.current;if(!$)return;const S=$.querySelector('[aria-checked="true"]');S&&($.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[A,s]);const M=$=>{k||w($),i==null||i($)};return r.jsx(sg.Provider,{value:{value:A,onChange:M,disabled:l,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"radiogroup",className:le($r.root,$r[s],d&&$r.fullWidth,h),...g,children:[r.jsx("span",{className:$r.indicator,"aria-hidden":"true"}),f]})})});cg.displayName="SegmentedControl";Object.assign(cg,{Item:lg});const O7="_root_fkv0x_6",D7="_sm_fkv0x_26",F7="_md_fkv0x_33",B7="_lg_fkv0x_40",W7="_dot_fkv0x_49",H7="_success_fkv0x_58",U7="_warning_fkv0x_65",q7="_error_fkv0x_72",V7="_info_fkv0x_79",G7="_neutral_fkv0x_86",Y7="_pending_fkv0x_93",Os={root:O7,sm:D7,md:F7,lg:B7,dot:W7,success:H7,warning:U7,error:q7,info:V7,neutral:G7,pending:Y7},di=v.forwardRef(({status:e="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},h)=>r.jsxs("span",{ref:h,className:le(Os.root,Os[a],Os[e],s),...d,children:[i&&r.jsx("span",{className:Os.dot,"aria-hidden":"true"}),l]}));di.displayName="StatusTag";const K7="_root_1m8t5_6",Q7="_underline_1m8t5_15",Z7="_background_1m8t5_21",X7="_underlineIndicator_1m8t5_26",J7="_md_1m8t5_43",ek="_lg_1m8t5_44",tk="_tab_1m8t5_42",nk="_tabSelected_1m8t5_77",rk="_tabIcon_1m8t5_99",ok="_tabLabel_1m8t5_111",ak="_tabBadge_1m8t5_116",ik="_tabLabelEditable_1m8t5_123",sk="_tabLabelInput_1m8t5_128",lk="_addTab_1m8t5_147",ck="_addTabIcon_1m8t5_160",rn={root:K7,underline:Q7,background:Z7,underlineIndicator:X7,md:J7,lg:ek,tab:tk,tabSelected:nk,tabIcon:rk,tabLabel:ok,tabBadge:ak,tabLabelEditable:ik,tabLabelInput:sk,addTab:lk,addTabIcon:ck},dg=v.createContext(null);function ug(e){const a=v.useContext(dg);if(!a)throw new Error(`<${e}> must be rendered inside <Tabs>`);return a}const hg=v.forwardRef(({value:e,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:g,children:x,...y},w)=>{const{value:k,onChange:A,disabled:_,name:C}=ug("Tabs.Tab"),M=k===e,$=_||!!s,S=typeof x=="string"?x:"",[j,O]=v.useState(d&&l),[R,N]=v.useState(S),T=v.useRef(null);v.useEffect(()=>{if(j){const F=T.current;F&&(F.focus(),F.select())}},[j]),v.useEffect(()=>{d&&l&&!j&&(N(typeof x=="string"?x:""),O(!0))},[d,l]);const z=()=>{const F=R.trim();F&&F!==S&&(h==null||h(F)),O(!1)},B=()=>{N(S),O(!1)},G=F=>{!l||$||(F.stopPropagation(),N(S),O(!0))},Z=F=>{F.key==="Enter"?(F.preventDefault(),z()):F.key==="Escape"&&(F.preventDefault(),B())};return r.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":M,name:C,disabled:$,className:le(rn.tab,M&&rn.tabSelected,g),onClick:F=>{j||($||A(e),f==null||f(F))},...y,children:[a&&r.jsx("span",{className:le(rn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),j?r.jsx("input",{ref:T,type:"text",value:R,onChange:F=>N(F.target.value),onKeyDown:Z,onBlur:z,onClick:F=>F.stopPropagation(),className:rn.tabLabelInput,"aria-label":"Tab name",size:Math.max(R.length,1)}):x!==void 0&&r.jsx("span",{className:le(rn.tabLabel,l&&rn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!j&&r.jsx("span",{className:rn.tabBadge,children:i})]})});hg.displayName="Tabs.Tab";const dk=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),pg=v.forwardRef(({className:e,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=ug("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:le(rn.tab,rn.addTab,e),onClick:a,...s,children:r.jsx("span",{className:le(rn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(dk,{})})})});pg.displayName="Tabs.AddTab";const fg=v.forwardRef(({variant:e="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(s),k=i!==void 0,A=k?i:y,_=v.useId(),C=v.useRef(null);v.useLayoutEffect(()=>{const $=C.current;if(!$||e!=="underline")return;const S=$.querySelector('[aria-selected="true"]');S&&($.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[A,e]);const M=$=>{k||w($),l==null||l($)};return r.jsx(dg.Provider,{value:{value:A,onChange:M,disabled:d,variant:e,size:a,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"tablist",className:le(rn.root,rn[e],rn[a],h),...g,children:[e==="underline"&&r.jsx("span",{className:rn.underlineIndicator,"aria-hidden":"true"}),f]})})});fg.displayName="Tabs";Object.assign(fg,{Tab:hg,AddTab:pg});const uk="_selectedBorder_1ypeg_7",hk="_selectedFill_1ypeg_12",pf={selectedBorder:uk,selectedFill:hk},pk=v.forwardRef(({selected:e=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const g=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?pf.selectedFill:pf.selectedBorder:void 0;return r.jsx(Ee,{ref:f,variant:a,"aria-pressed":e,className:le(x,d),onClick:g,...h})});pk.displayName="ToggleButton";const fk="_root_mcb75_6",mk="_disabled_mcb75_13",gk="_sm_mcb75_20",vk="_md_mcb75_31",yk="_lg_mcb75_42",xk="_track_mcb75_54",wk="_trackChecked_mcb75_90",bk="_thumb_mcb75_100",kk="_labelWrap_mcb75_117",_k="_label_mcb75_117",Ck="_description_mcb75_139",ar={root:fk,disabled:mk,sm:gk,md:vk,lg:yk,track:xk,trackChecked:wk,thumb:bk,labelWrap:kk,label:_k,description:Ck},jk=v.forwardRef(({checked:e,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:g,value:x,className:y},w)=>{const k=v.useId(),A=f??k,_=`${A}-label`,C=e!==void 0,[M,$]=v.useState(a),S=C?e:M,j=()=>{if(s)return;const R=!S;C||$(R),i==null||i(R)},O=R=>{(R.key===" "||R.key==="Enter")&&(R.preventDefault(),j())};return r.jsxs("div",{className:le(ar.root,ar[l],s&&ar.disabled,y),children:[r.jsx("button",{ref:w,type:"button",role:"switch",id:A,"aria-checked":S,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:le(ar.track,S&&ar.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:O,children:r.jsx("span",{className:ar.thumb})}),(d||h)&&r.jsxs("div",{className:ar.labelWrap,children:[d&&r.jsx("label",{id:_,htmlFor:A,className:ar.label,children:d}),h&&r.jsx("span",{className:ar.description,children:h})]})]})});jk.displayName="Switch";const Sk="_root_104n4_5",Nk="_disabled_104n4_11",Mk="_sm_104n4_17",Rk="_md_104n4_25",Lk="_lg_104n4_33",Ak="_controlWrap_104n4_41",$k="_input_104n4_50",Tk="_ring_104n4_65",Ik="_ringChecked_104n4_90",Ek="_ringError_104n4_94",Pk="_dot_104n4_104",zk="_labelWrap_104n4_112",Ok="_label_104n4_112",Dk="_error_104n4_130",Fk="_required_104n4_132",Bk="_description_104n4_137",Jt={root:Sk,disabled:Nk,sm:Mk,md:Rk,lg:Lk,controlWrap:Ak,input:$k,ring:Tk,ringChecked:Ik,ringError:Ek,dot:Pk,labelWrap:zk,label:Ok,error:Dk,required:Fk,description:Bk},Wk=v.forwardRef(({value:e,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:g,name:x,required:y,className:w},k)=>{const A=v.useId(),_=g??A;return r.jsxs("div",{className:le(Jt.root,Jt[d],s&&Jt.disabled,l&&Jt.error,w),children:[r.jsxs("div",{className:Jt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:_,name:x,value:e,checked:a,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:Jt.input}),r.jsx("span",{className:le(Jt.ring,a&&Jt.ringChecked,l&&Jt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Jt.dot})})]}),(h||f)&&r.jsxs("div",{className:Jt.labelWrap,children:[h&&r.jsxs("label",{htmlFor:_,className:Jt.label,children:[h,y&&r.jsx("span",{className:Jt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Jt.description,children:f})]})]})});Wk.displayName="Radio";const Hk="_table_1ad04_8",Uk="_sm_1ad04_16",qk="_row_1ad04_30",Vk="_head_1ad04_47",Gk="_headLabel_1ad04_82",Yk="_sortBtn_1ad04_96",Kk="_sortIcon_1ad04_119",Qk="_cell_1ad04_142",Zk="_cellText_1ad04_175",Xk="_cellStack_1ad04_203",Jk="_cellStackPrimary_1ad04_210",e_="_cellStackSecondary_1ad04_221",t_="_cellActions_1ad04_233",n_="_cellControl_1ad04_240",r_="_addCell_1ad04_251",o_="_addRowCell_1ad04_264",a_="_addRowLabel_1ad04_276",Tt={table:Hk,sm:Uk,row:qk,head:Vk,headLabel:Gk,sortBtn:Yk,sortIcon:Kk,cell:Qk,cellText:Zk,cellStack:Xk,cellStackPrimary:Jk,cellStackSecondary:e_,cellActions:t_,cellControl:n_,addCell:r_,addRowCell:o_,addRowLabel:a_},mg=v.createContext({addColumn:!1,addRow:!1}),gg=()=>v.useContext(mg),i_=v.forwardRef(({size:e="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...g},x)=>{const y=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(mg.Provider,{value:y,children:r.jsx("table",{ref:x,className:le(Tt.table,e==="sm"&&Tt.sm,h),"data-interaction":a,...g,children:f})})});i_.displayName="Table";const vg=v.forwardRef(({align:e="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},g)=>{const x=a!==void 0;return r.jsx("th",{ref:g,className:le(Tt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:Tt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,r.jsx("span",{className:Tt.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(Nn,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:Tt.headLabel,children:h})})});vg.displayName="TableHead";const s_=v.forwardRef(({children:e,...a},i)=>{const{addColumn:s,onAddColumn:l}=gg(),d=s?v.Children.map(e,(h,f)=>{if(!v.isValidElement(h)||f!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,r.jsx(vg,{hoverable:!0,onClick:l,className:Tt.addCell,"aria-label":"Add column",children:r.jsx(mo,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return r.jsx("thead",{ref:i,...a,children:d})});s_.displayName="TableHeader";const yg=v.forwardRef(({hoverable:e=!0,selected:a,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:le(Tt.row,i),"data-hoverable":e||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));yg.displayName="TableRow";const tu=v.forwardRef(({align:e="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>r.jsx("td",{ref:f,className:le(Tt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));tu.displayName="TableCell";const l_=v.forwardRef(({children:e,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=gg(),h=s?v.Children.map(e,f=>{if(!v.isValidElement(f))return f;const g=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...g,r.jsx(tu,{"aria-hidden":"true",className:Tt.addCell},"__add_col_pad")])}):e;return r.jsxs("tbody",{ref:i,...a,children:[h,l&&r.jsx(yg,{hoverable:!1,children:r.jsx(tu,{colSpan:999,onClick:d,className:Tt.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:Tt.addRowLabel,children:[r.jsx(mo,{size:14,strokeWidth:2}),"Add row"]})})})]})});l_.displayName="TableBody";const c_=v.forwardRef(({variant:e="primary",size:a="md",wrap:i,className:s,children:l,...d},h)=>r.jsx("span",{ref:h,className:le(Tt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));c_.displayName="CellText";const d_=v.forwardRef(({primary:e,secondary:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:le(Tt.cellStack,i),...s,children:[r.jsx("span",{className:Tt.cellStackPrimary,children:e}),a&&r.jsx("span",{className:Tt.cellStackSecondary,children:a})]}));d_.displayName="CellStack";const u_=v.forwardRef(({size:e="sm",...a},i)=>r.jsx(Sn,{ref:i,size:e,...a}));u_.displayName="CellTag";const h_=v.forwardRef(({size:e="sm",...a},i)=>r.jsx(di,{ref:i,size:e,...a}));h_.displayName="CellStatusTag";const p_=v.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:le(Tt.cellActions,e),...i,children:a}));p_.displayName="CellActions";const f_=v.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:le(Tt.cellControl,e),...i,children:a}));f_.displayName="CellControl";const m_="_root_1afcs_8",g_="_secondary_1afcs_23",v_="_header_1afcs_28",y_="_headerText_1afcs_36",x_="_title_1afcs_43",w_="_subtitle_1afcs_52",b_="_action_1afcs_61",k_="_hero_1afcs_66",__="_heroValue_1afcs_74",C_="_heroCaption_1afcs_83",j_="_heroChange_1afcs_89",S_="_body_1afcs_95",N_="_legend_1afcs_103",un={root:m_,secondary:g_,header:v_,headerText:y_,title:x_,subtitle:w_,action:b_,hero:k_,heroValue:__,heroCaption:C_,heroChange:j_,body:S_,legend:N_},M_=v.forwardRef(({title:e,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:g,className:x,...y},w)=>r.jsxs("div",{ref:w,className:le(un.root,f&&un.secondary,x),...y,children:[r.jsxs("div",{className:un.header,children:[r.jsxs("div",{className:un.headerText,children:[r.jsx("h3",{className:un.title,children:e}),a&&r.jsx("p",{className:un.subtitle,children:a})]}),i&&r.jsx("div",{className:un.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:un.hero,children:[s!==void 0&&r.jsx("span",{className:un.heroValue,children:s}),l&&r.jsx("span",{className:un.heroChange,children:l}),d&&r.jsx("span",{className:un.heroCaption,children:d})]}),r.jsx("div",{className:un.body,children:g}),h&&r.jsx("div",{className:un.legend,children:h})]}));M_.displayName="ChartCard";const R_="_root_je8nq_7",L_="_item_je8nq_17",A_="_swatch_je8nq_23",$_="_label_je8nq_29",T_="_bookend_je8nq_33",Ho={root:R_,item:L_,swatch:A_,label:$_,bookend:T_},xg=v.forwardRef(({items:e,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>r.jsxs("div",{ref:f,className:le(Ho.root,d),...h,children:[a&&r.jsx("span",{className:Ho.bookend,children:a}),e.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return r.jsxs("span",{className:Ho.item,children:[r.jsx("span",{className:Ho.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&r.jsx("span",{className:Ho.label,children:g.label})]},x)}),i&&r.jsx("span",{className:Ho.bookend,children:i})]}));xg.displayName="ChartLegend";const I_="_root_igkx4_5",E_="_svgWrap_igkx4_13",P_="_svg_igkx4_13",z_="_gridLine_igkx4_23",O_="_axisLabel_igkx4_28",D_="_legendWrap_igkx4_43",F_="_legendItem_igkx4_51",B_="_legendDot_igkx4_57",W_="_legendLabel_igkx4_64",H_="_tooltip_igkx4_71",U_="_tooltipLabel_igkx4_85",q_="_tooltipRow_igkx4_95",V_="_tooltipDot_igkx4_101",G_="_tooltipSeries_igkx4_108",Y_="_tooltipValue_igkx4_115",De={root:I_,svgWrap:E_,svg:P_,gridLine:z_,axisLabel:O_,legendWrap:D_,legendItem:F_,legendDot:B_,legendLabel:W_,tooltip:H_,tooltipLabel:U_,tooltipRow:q_,tooltipDot:V_,tooltipSeries:G_,tooltipValue:Y_},K_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function _d(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Uo(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const Q_=v.forwardRef(({series:e,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:A,className:_,...C},M)=>{var q,I,te,fe;const $=g&&g.length>0?g:K_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,O]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),R=v.useRef(null),[N,T]=v.useState(540);v.useEffect(()=>{const ce=R.current;if(!ce)return;const me=new ResizeObserver(ve=>{var Te;const Le=(Te=ve[0])==null?void 0:Te.contentRect.width;Le>0&&T(Math.floor(Le))});me.observe(ce);const be=Math.floor(ce.getBoundingClientRect().width);return be>0&&T(be),()=>me.disconnect()},[]);const z=44,B=0,G=20,Z=20,F=N,Y=s,ee=F-z-B,ae=Y-G-Z,re=5,oe=e.map((ce,me)=>ce.color??$[me%$.length]);let X=0;i==="stacked"?a.forEach((ce,me)=>{const be=e.reduce((ve,Le)=>ve+(Le.data[me]??0),0);be>X&&(X=be)}):i==="horizontal"?X=Math.max(...((q=e[0])==null?void 0:q.data)??[0]):e.forEach(ce=>ce.data.forEach(me=>{me>X&&(X=me)}));const W=_d(X),V=Array.from({length:re+1},(ce,me)=>W*(me/re)).reverse(),E=ce=>Z+ae-ce/W*ae,L=ee/a.length,U=3,K=i==="grouped"?Math.max(4,(L-U*(e.length+1))/e.length):L,ie=()=>O(ce=>({...ce,visible:!1})),de=v.useCallback(ce=>{const me=ce.currentTarget.getBoundingClientRect(),be=ce.clientX-me.left,ve=Math.floor((be-z)/L);if(ve<0||ve>=a.length){ie();return}const Le=e.map((Te,ze)=>({color:oe[ze],series:Te.label,value:Te.data[ve]??0}));O({visible:!0,x:ce.clientX+12,y:ce.clientY-8,label:a[ve],items:Le})},[e,a,L,oe,z]);if(i==="gradient"){const ce=((I=e[0])==null?void 0:I.data)??[],me=((te=e[0])==null?void 0:te.label)??"",be=44,ve=0,Le=20,Te=20,ze=Math.max(F-be-ve,1),Oe=Y-Le-Te,Ie=Math.max(0,...ce),We=Ie>0?_d(Ie):10,Ye=5,vt=Array.from({length:Ye+1},(Re,Qe)=>We*Qe/Ye),He=Re=>Le+Oe-Re/We*Oe,yt=ze/Math.max(1,ce.length),st=Re=>be+yt*Re,It=Re=>be+yt*(Re+1),lt=Re=>be+yt*(Re+.5),se=ce.length===0?"":ce.map((Re,Qe)=>{const ct=He(Re);return`M ${st(Qe)} ${ct} L ${It(Qe)} ${ct}`}).join(" "),ye=[];ce.forEach((Re,Qe)=>{if(Re<=0)return;const ct=He(Re);ye.push({x:st(Qe),y:ct,width:Math.max(It(Qe)-st(Qe),0),height:Le+Oe-ct})});const at=Math.max(1,Math.ceil(45/yt)),xt=a.length-1,Rn=w??(Re=>`${Uo(Re)}${h}`);return r.jsxs("div",{ref:M,className:le(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsxs("svg",{width:F,height:Y,viewBox:`0 0 ${F} ${Y}`,className:De.svg,onMouseLeave:ie,onMouseMove:Re=>{const Qe=Re.currentTarget.getBoundingClientRect(),ct=Re.clientX-Qe.left,Et=Math.floor((ct-be)/yt);if(Et<0||Et>=ce.length){ie();return}O({visible:!0,x:Re.clientX+12,y:Re.clientY-8,label:a[Et]??"",items:[{color:y,series:me,value:ce[Et]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),vt.map((Re,Qe)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:F-ve,y1:He(Re),y2:He(Re),className:De.gridLine}),r.jsxs("text",{x:0,y:He(Re)-6,className:De.axisLabel,textAnchor:"start",children:[Uo(Re),h]})]},`t-${Qe}`)),ye.map((Re,Qe)=>r.jsx("rect",{x:Re.x,y:Re.y,width:Re.width,height:Re.height,fill:`url(#${S}-fill)`},`b-${Qe}`)),se&&r.jsx("path",{d:se,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var Fr;const Re=(Fr=R.current)==null?void 0:Fr.getBoundingClientRect();if(!Re)return null;const Qe=j.x-12-Re.left,ct=Math.floor((Qe-be)/yt);if(ct<0||ct>=ce.length)return null;const Et=ce[ct]??0;return Et<=0?null:r.jsx("circle",{cx:lt(ct),cy:He(Et),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Re,Qe)=>{const ct=Qe===0,Et=Qe===xt;if(!(ct||Et)&&Qe%at!==0)return null;const ha=ct?be:Et?F-ve:lt(Qe),pa=ct?"start":Et?"end":"middle";return r.jsx("text",{x:ha,y:Y-Te+18,className:De.axisLabel,textAnchor:pa,children:Re},`xl-${Qe}`)})]})}),j.visible&&j.items.length>0&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(Re=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:Re.color}}),r.jsx("span",{className:De.tooltipSeries,children:Re.series}),r.jsx("span",{className:De.tooltipValue,children:Rn(Re.value)})]},Re.series))]})]})}if(i==="horizontal"){const ce=((fe=e[0])==null?void 0:fe.data)??[],me=_d(Math.max(...ce,1)),be=28,ve=10,Le=120,ze=F-Le-44,Oe=a.length*(be+ve)+ve;return r.jsxs("div",{ref:M,className:le(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsx("svg",{width:F,height:Oe,viewBox:`0 0 ${F} ${Oe}`,className:De.svg,onMouseLeave:ie,onMouseMove:Ie=>{var He;const We=Ie.currentTarget.getBoundingClientRect(),Ye=Ie.clientY-We.top,vt=Math.floor(Ye/(be+ve));if(vt<0||vt>=a.length){ie();return}O({visible:!0,x:Ie.clientX+12,y:Ie.clientY-8,label:a[vt],items:[{color:oe[0],series:((He=e[0])==null?void 0:He.label)??"",value:ce[vt]??0}]})},children:a.map((Ie,We)=>{const Ye=ve+We*(be+ve),vt=ce[We]??0,He=vt/me*ze;return r.jsxs("g",{children:[r.jsx("text",{x:Le-8,y:Ye+be/2+4,className:De.axisLabel,textAnchor:"end",children:Ie}),r.jsx("rect",{x:Le,y:Ye,width:He,height:be,rx:f,fill:oe[0]}),r.jsxs("text",{x:Le+He+6,y:Ye+be/2+4,className:De.axisLabel,textAnchor:"start",children:[Uo(vt),h]})]},We)})})}),j.visible&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(Ie=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:Ie.color}}),r.jsx("span",{className:De.tooltipSeries,children:Ie.series}),r.jsxs("span",{className:De.tooltipValue,children:[Uo(Ie.value),h]})]},Ie.series))]})]})}return r.jsxs("div",{ref:M,className:le(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsxs("svg",{width:F,height:Y,viewBox:`0 0 ${F} ${Y}`,className:De.svg,onMouseMove:de,onMouseLeave:ie,children:[r.jsx("defs",{children:oe.flatMap((ce,me)=>[r.jsxs("linearGradient",{id:`${S}-fill-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`soft-${me}`),r.jsxs("linearGradient",{id:`${S}-fill-strong-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`strong-${me}`)])}),V.map(ce=>{const me=E(ce);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:me,x2:F-B,y2:me,className:De.gridLine}),r.jsxs("text",{x:0,y:me-6,className:De.axisLabel,textAnchor:"start",children:[Uo(ce),h]})]},ce)}),a.map((ce,me)=>{const be=z+me*L;if(i==="stacked"){let Te=0;const ze=e.map((He,yt)=>{const st=He.data[me]??0,It=st/W*ae,lt=E(Te+st);return Te+=st,{si:yt,value:st,barH:It,y:lt}}),Oe=be+(L-K)/2,Ie=ze.filter(He=>He.value>0),We=Ie.length>0?Ie[0].si:-1,Ye=Ie.length>0?Ie[Ie.length-1]:null,vt=A??(Ye?oe[Ye.si]:"transparent");return r.jsxs("g",{children:[ze.map(({si:He,value:yt,barH:st,y:It})=>{if(yt<=0)return null;if(k==="mono-scale"){const lt=He===We;return r.jsx("rect",{x:Oe,y:It,width:K,height:st,fill:lt?`url(#${S}-fill-strong-${He})`:oe[He]},`fill-${He}`)}return r.jsx("rect",{x:Oe,y:It,width:K,height:st,fill:`url(#${S}-fill-${He})`},`fill-${He}`)}),k==="mono-scale"?Ye&&r.jsx("line",{x1:Oe,x2:Oe+K,y1:Ye.y,y2:Ye.y,stroke:vt,strokeWidth:2,strokeLinecap:"butt"}):ze.map(({si:He,value:yt,y:st})=>yt>0?r.jsx("line",{x1:Oe,x2:Oe+K,y1:st,y2:st,stroke:oe[He],strokeWidth:2,strokeLinecap:"butt"},`cap-${He}`):null)]},me)}const ve=e.length*K+(e.length-1)*U,Le=be+(L-ve)/2;return r.jsx("g",{children:e.map((Te,ze)=>{const Oe=Te.data[me]??0;if(Oe<=0)return null;const Ie=Oe/W*ae,We=Le+ze*(K+U),Ye=E(Oe);return r.jsxs("g",{children:[r.jsx("rect",{x:We,y:Ye,width:K,height:Ie,fill:`url(#${S}-fill-${ze})`}),r.jsx("line",{x1:We,x2:We+K,y1:Ye,y2:Ye,stroke:oe[ze],strokeWidth:2,strokeLinecap:"butt"})]},ze)})},me)}),(()=>{const me=Math.max(1,Math.ceil(45/L)),be=a.length-1;return a.map((ve,Le)=>{const Te=Le===0,ze=Le===be;if(!(Te||ze)&&Le%me!==0)return null;const Ie=Te?z:ze?F-B:z+L*(Le+.5),We=Te?"start":ze?"end":"middle";return r.jsx("text",{x:Ie,y:Y-G+18,className:De.axisLabel,textAnchor:We,children:ve},`xl-${Le}`)})})()]})}),d&&e.length>1&&r.jsx("div",{className:De.legendWrap,children:e.map((ce,me)=>r.jsxs("div",{className:De.legendItem,children:[r.jsx("span",{className:De.legendDot,style:{background:oe[me]}}),r.jsx("span",{className:De.legendLabel,children:ce.label})]},ce.label))}),j.visible&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(ce=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:ce.color}}),r.jsx("span",{className:De.tooltipSeries,children:ce.series}),r.jsxs("span",{className:De.tooltipValue,children:[Uo(ce.value),h]})]},ce.series))]})]})});Q_.displayName="BarChart";const Z_="_root_1crij_5",X_="_svgWrap_1crij_13",J_="_svg_1crij_13",eC="_gridLine_1crij_23",tC="_axisLabelY_1crij_35 _axisLabel_1crij_28",nC="_axisLabelX_1crij_39 _axisLabel_1crij_28",rC="_legendWrap_1crij_51",oC="_tooltip_1crij_76",aC="_tooltipLabel_1crij_95",iC="_tooltipRow_1crij_105",sC="_tooltipDot_1crij_111",lC="_tooltipSeries_1crij_118",cC="_tooltipValue_1crij_125",hn={root:Z_,svgWrap:X_,svg:J_,gridLine:eC,axisLabelY:tC,axisLabelX:nC,legendWrap:rC,tooltip:oC,tooltipLabel:aC,tooltipRow:iC,tooltipDot:sC,tooltipSeries:lC,tooltipValue:cC};function dC(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function ff(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function uC(e,a=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],g=(h-l)*a;i+=` C ${l+g} ${d}, ${h-g} ${f}, ${h} ${f}`}return i}const hC=v.forwardRef(({series:e,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:g=5,className:x,...y},w)=>{const[k,A]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,C=v.useRef(null),[M,$]=v.useState(540);v.useEffect(()=>{const W=C.current;if(!W)return;const V=new ResizeObserver(L=>{var K;const U=(K=L[0])==null?void 0:K.contentRect.width;U>0&&$(Math.floor(U))});V.observe(W);const E=Math.floor(W.getBoundingClientRect().width);return E>0&&$(E),()=>V.disconnect()},[]);const S=44,j=20,O=20,R=M,N=i,T=R-S,z=N-j-O,B=`url(#${_}-stroke)`,G=W=>W.color??B,Z=e.flatMap(W=>W.data),F=dC(Math.max(...Z,1)),Y=Array.from({length:g+1},(W,V)=>F*(V/g)).reverse(),ee=W=>O+z-W/F*z,ae=W=>a.length>1?S+W/(a.length-1)*T:S+T/2,re=W=>W.map((V,E)=>[ae(E),ee(V)]),oe=()=>A(W=>({...W,visible:!1})),X=v.useCallback(W=>{const V=W.currentTarget.getBoundingClientRect(),L=W.clientX-V.left-S,U=T/Math.max(a.length-1,1),K=Math.round(L/U),ie=Math.max(0,Math.min(K,a.length-1)),de=e.map(q=>({color:q.color??h,series:q.label,value:q.data[ie]??0}));A({visible:!0,index:ie,x:W.clientX+12,y:W.clientY-8,label:a[ie],items:de})},[e,a,h,T,S]);return r.jsxs("div",{ref:w,className:le(hn.root,x),...y,children:[r.jsx("div",{ref:C,className:hn.svgWrap,children:r.jsxs("svg",{width:R,height:N,viewBox:`0 0 ${R} ${N}`,className:hn.svg,onMouseMove:X,onMouseLeave:oe,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:h})]}),r.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:h}),r.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${_}-clip`,children:r.jsx("rect",{x:S,y:O,width:T,height:z,rx:6,ry:6})})]}),Y.map(W=>{const V=ee(W);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:V,x2:R,y2:V,className:hn.gridLine}),r.jsxs("text",{x:0,y:V-6,className:hn.axisLabelY,textAnchor:"start",children:[ff(W),f]})]},W)}),r.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((W,V)=>{const E=re(W.data),L=uC(E);return r.jsx("path",{d:L,fill:"none",stroke:G(W),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},V)})}),(()=>{const W=k.index>=0?k.index:0,V=ae(W),E=k.visible&&k.index>=0,L="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:E?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${V}px)`,transition:L},children:[r.jsx("line",{x1:0,x2:0,y1:O,y2:O+z,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((U,K)=>{const ie=U.data[W]??0,de=ee(ie),q=U.color??h;return r.jsx("g",{style:{transform:`translateY(${de}px)`,transition:L},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:q,filter:`url(#${_}-pin-shadow)`})},K)})]})})})(),(()=>{const V=a.length>1?T/(a.length-1):T,E=Math.max(1,Math.ceil(45/Math.max(V,1))),L=a.length-1;return a.map((U,K)=>{const ie=K===0,de=K===L;if(!(ie||de)&&K%E!==0)return null;const I=ie?S:de?R:ae(K),te=ie?"start":de?"end":"middle";return r.jsx("text",{x:I,y:N-j+14,className:hn.axisLabelX,textAnchor:te,children:U},U)})})()]})}),l&&e.length>0&&r.jsx("div",{className:hn.legendWrap,children:r.jsx(xg,{variant:"line",items:e.map(W=>({color:W.color??h,label:W.label}))})}),k.visible&&r.jsxs("div",{className:hn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:hn.tooltipLabel,children:k.label}),k.items.map(W=>r.jsxs("div",{className:hn.tooltipRow,children:[r.jsx("span",{className:hn.tooltipDot,style:{background:W.color}}),r.jsx("span",{className:hn.tooltipSeries,children:W.series}),r.jsxs("span",{className:hn.tooltipValue,children:[ff(W.value),f]})]},W.series))]})]})});hC.displayName="LineChart";const pC="_root_3tq2n_5",fC="_chartWrap_3tq2n_14",mC="_svg_3tq2n_18",gC="_centerText_3tq2n_23",vC="_statLegend_3tq2n_31",yC="_statItem_3tq2n_37",xC="_statBar_3tq2n_44",wC="_statText_3tq2n_50",bC="_statValue_3tq2n_56",kC="_statLabel_3tq2n_65",_C="_listLegend_3tq2n_72",CC="_legendItem_3tq2n_79",jC="_legendDot_3tq2n_85",SC="_legendLabel_3tq2n_92",NC="_legendValue_3tq2n_99",MC="_tooltip_3tq2n_107",RC="_tooltipLabel_3tq2n_118",LC="_tooltipValue_3tq2n_124",Rt={root:pC,chartWrap:fC,svg:mC,centerText:gC,statLegend:vC,statItem:yC,statBar:xC,statText:wC,statValue:bC,statLabel:kC,listLegend:_C,legendItem:CC,legendDot:jC,legendLabel:SC,legendValue:NC,tooltip:MC,tooltipLabel:RC,tooltipValue:LC},mf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],AC=v.forwardRef(({segments:e,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((R,N)=>R.color??mf[N%mf.length]),A=e.reduce((R,N)=>R+N.value,0),_=i/2,C=i/2,M=i*.15,$=(i-M)/2-2,S=2*Math.PI*$;let j=-S/4;const O=e.map((R,N)=>{const z=(A>0?R.value/A:0)*S,B=`${z} ${S-z}`,G=-j;return j+=z,{dashArray:B,dashOffset:G,color:k[N],...R}});return r.jsxs("div",{ref:x,className:le(Rt.root,f),...g,children:[r.jsx("div",{className:Rt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Rt.svg,children:[r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:M}),O.map((R,N)=>r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:R.color,strokeWidth:M,strokeDasharray:R.dashArray,strokeDashoffset:R.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:T=>{const z=A>0?Math.round(R.value/A*100):0;w({visible:!0,x:T.clientX+12,y:T.clientY-8,label:R.label,value:`${z}${d}`})},onMouseLeave:()=>w(T=>({...T,visible:!1}))},N)),h&&a>0&&r.jsx("text",{x:_,y:C+6,textAnchor:"middle",className:Rt.centerText,children:h})]})}),s&&l==="stat"&&r.jsx("div",{className:Rt.statLegend,children:e.map((R,N)=>{const T=A>0?Math.round(R.value/A*100):0;return r.jsxs("div",{className:Rt.statItem,children:[r.jsx("span",{className:Rt.statBar,style:{background:k[N]}}),r.jsxs("div",{className:Rt.statText,children:[r.jsxs("span",{className:Rt.statValue,children:[T,d]}),r.jsx("span",{className:Rt.statLabel,children:R.label})]})]},R.label)})}),s&&l==="list"&&r.jsx("div",{className:Rt.listLegend,children:e.map((R,N)=>{const T=A>0?Math.round(R.value/A*100):0;return r.jsxs("div",{className:Rt.legendItem,children:[r.jsx("span",{className:Rt.legendDot,style:{background:k[N]}}),r.jsx("span",{className:Rt.legendLabel,children:R.label}),r.jsxs("span",{className:Rt.legendValue,children:[T,d]})]},R.label)})}),y.visible&&r.jsxs("div",{className:Rt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:Rt.tooltipLabel,children:y.label}),r.jsx("div",{className:Rt.tooltipValue,children:y.value})]})]})});AC.displayName="DonutChart";const $C="_root_bqpf6_5",TC="_svgWrap_bqpf6_10",IC="_svg_bqpf6_10",EC="_axisLabel_bqpf6_19",PC="_tooltip_bqpf6_25",qo={root:$C,svgWrap:TC,svg:IC,axisLabel:EC,tooltip:PC};function zC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const OC=v.forwardRef(({cells:e,rows:a,cols:i,colorScale:s=zC,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[A,_]=v.useState(540);v.useEffect(()=>{const N=k.current;if(!N)return;const T=new ResizeObserver(B=>{var Z;const G=(Z=B[0])==null?void 0:Z.contentRect.width;G>0&&_(Math.floor(G))});T.observe(N);const z=Math.floor(N.getBoundingClientRect().width);return z>0&&_(z),()=>T.disconnect()},[]);const C=32,M=16,$=A,S=$-C-d,j=Math.max(4,(S-(i.length-1)*d)/i.length),O=a.length*(M+d)+d+24,R=new Map;return e.forEach(N=>R.set(`${N.row}__${N.col}`,N)),r.jsxs("div",{ref:x,className:le(qo.root,f),...g,children:[r.jsx("div",{ref:k,className:qo.svgWrap,children:r.jsxs("svg",{width:$,height:O,viewBox:`0 0 ${$} ${O}`,className:qo.svg,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:[i.map((N,T)=>{const z=C+d+T*(j+d)+j/2;return r.jsx("text",{x:z,y:12,className:qo.axisLabel,textAnchor:"middle",children:N},N)}),a.map((N,T)=>{const z=24+T*(M+d);return r.jsxs("g",{children:[r.jsx("text",{x:C-4,y:z+M/2+4,className:qo.axisLabel,textAnchor:"end",children:N}),i.map((B,G)=>{const Z=R.get(`${N}__${B}`),F=(Z==null?void 0:Z.value)??0,Y=s(F),ee=C+d+G*(j+d);return r.jsx("rect",{x:ee,y:z,width:j,height:M,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const re=(Z==null?void 0:Z.label)??`${N} / ${B}: ${Math.round(F*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:re})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},B)})]},N)})]})}),y.visible&&r.jsx("div",{className:qo.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});OC.displayName="HeatMap";const DC="_root_18572_6",FC="_gridWrap_18572_14",BC="_grid_18572_14",WC="_cell_18572_27",HC="_legend_18572_33",UC="_legendSquare_18572_43",qC="_tooltip_18572_49",Lr={root:DC,gridWrap:FC,grid:BC,cell:WC,legend:HC,legendSquare:UC,tooltip:qC},VC=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function GC(e,a){if(e<=0)return 0;const i=e/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const YC=v.forwardRef(({days:e,levelColors:a=VC,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[A,_]=v.useState({visible:!1,x:0,y:0,content:""}),C=f??Math.max(1,...e.map(j=>j.count)),M=[];for(let j=0;j<e.length;j+=7)M.push(e.slice(j,j+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${M.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},S=d?"100%":i;return r.jsxs("div",{ref:k,className:le(Lr.root,y),...w,children:[r.jsx("div",{className:Lr.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${C} on the busiest day`,className:Lr.grid,style:$,onMouseLeave:()=>_(j=>({...j,visible:!1})),children:M.map((j,O)=>Array.from({length:7},(R,N)=>{const T=j[N];if(!T)return r.jsx("span",{className:Lr.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${O}-${N}`);const z=GC(T.count,C),B=g?g(T,z):`${T.label??T.date}: ${T.count} activation${T.count===1?"":"s"}`;return r.jsx("span",{className:Lr.cell,style:{width:S,height:i,borderRadius:l,background:a[z]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:B}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${O}-${N}`)}))})}),h&&r.jsxs("div",{className:Lr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>r.jsx("span",{className:Lr.legendSquare,style:{background:a[j],borderRadius:l}},j)),r.jsx("span",{children:"More"})]}),A.visible&&r.jsx("div",{className:Lr.tooltip,style:{left:A.x,top:A.y},children:A.content})]})});YC.displayName="ActivityHeatMap";const KC="_root_14edh_5",QC="_track_14edh_17",ZC="_segment_14edh_28",XC="_legend_14edh_49",JC="_legendRow_14edh_58",ej="_legendDot_14edh_68",tj="_legendLabel_14edh_74",nj="_legendValue_14edh_78",rj="_tooltip_14edh_84",oj="_tooltipLabel_14edh_100",aj="_tooltipValueRow_14edh_105",ij="_tooltipDot_14edh_114",_n={root:KC,track:QC,segment:ZC,legend:XC,legendRow:JC,legendDot:ej,legendLabel:tj,legendValue:nj,tooltip:rj,tooltipLabel:oj,tooltipValueRow:aj,tooltipDot:ij},sj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Vo={r:140,g:79,b:226},Cd={r:68,g:108,b:255};function gf(e){const a=Math.max(0,Math.min(100,e))/100,i=Math.round(Vo.r+(Cd.r-Vo.r)*a),s=Math.round(Vo.g+(Cd.g-Vo.g)*a),l=Math.round(Vo.b+(Cd.b-Vo.b)*a);return`rgb(${i}, ${s}, ${l})`}const lj=v.forwardRef(({segments:e,colors:a=sj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((M,$)=>M+Math.max(0,$.value),0);let A=0;const _=e.map((M,$)=>{const S=Math.max(0,M.value),j=k>0?S/k*100:0,O=k>0?A/k*100:0;A+=S;const R=k>0?A/k*100:0,N=M.color??a[$%a.length],T=d?!0:M.emphasized??$===0;return{...M,pct:j,startPct:O,endPct:R,color:N,emphasized:T}}),C=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:x,className:le(_n.root,f),...g,children:[r.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(M=>`${M.label} ${M.value}`).join(", ")}`,className:_n.track,style:C,onMouseLeave:()=>w(M=>({...M,visible:!1})),children:_.map(M=>{const $=i?`linear-gradient(to right, ${gf(M.startPct)}, ${gf(M.endPct)})`:M.color;return r.jsx("span",{className:_n.segment,"data-emphasized":M.emphasized||void 0,"data-ai":i||void 0,style:{width:`${M.pct}%`,background:$,"--ratio-hover-bg":M.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:M.label,value:M.value,color:M.color})},M.label)})}),l&&r.jsx("ul",{className:_n.legend,children:_.map(M=>r.jsxs("li",{className:_n.legendRow,children:[r.jsx("span",{className:_n.legendDot,style:{background:M.color}}),r.jsx("span",{className:_n.legendLabel,children:M.label}),r.jsx("span",{className:_n.legendValue,children:M.value.toLocaleString("en-US")})]},M.label))}),y.visible&&r.jsxs("div",{className:_n.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:_n.tooltipLabel,children:y.label}),r.jsxs("span",{className:_n.tooltipValueRow,children:[r.jsx("span",{className:_n.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});lj.displayName="RatioBar";const cj="_track_1wmly_6",dj="_fill_1wmly_12",vf={track:cj,fill:dj},uj=v.forwardRef(({value:e,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:g,className:x,style:y,...w},k)=>{const A=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${A}px
    )`,C=Math.max(0,Math.min(a,e)),M=a>0?C/a*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(M)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":C,className:le(vf.track,x),style:{height:f,background:`${_}, ${s}`,...y},...w,children:r.jsx("div",{className:vf.fill,style:{width:`${M}%`,background:`${_}, ${i}`}})})});uj.displayName="StripedBar";const hj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],pj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function yf(e,a="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}yf(hj),yf(pj);var ot="-ms-",si="-moz-",Ze="-webkit-",wg="comm",gl="rule",Du="decl",fj="@import",mj="@namespace",bg="@keyframes",gj="@layer",kg=Math.abs,Fu=String.fromCharCode,nu=Object.assign;function vj(e,a){return jt(e,0)^45?(((a<<2^jt(e,0))<<2^jt(e,1))<<2^jt(e,2))<<2^jt(e,3):0}function _g(e){return e.trim()}function ir(e,a){return(e=a.exec(e))?e[0]:e}function Pe(e,a,i){return e.replace(a,i)}function qs(e,a,i){return e.indexOf(a,i)}function jt(e,a){return e.charCodeAt(a)|0}function po(e,a,i){return e.slice(a,i)}function On(e){return e.length}function Cg(e){return e.length}function ri(e,a){return a.push(e),e}function yj(e,a){return e.map(a).join("")}function xf(e,a){return e.filter(function(i){return!ir(i,a)})}var vl=1,na=1,jg=0,Mn=0,kt=0,da="";function yl(e,a,i,s,l,d,h,f){return{value:e,root:a,parent:i,type:s,props:l,children:d,line:vl,column:na,length:h,return:"",siblings:f}}function Ar(e,a){return nu(yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Go(e){for(;e.root;)e=Ar(e.root,{children:[e]});ri(e,e.siblings)}function xj(){return kt}function wj(){return kt=Mn>0?jt(da,--Mn):0,na--,kt===10&&(na=1,vl--),kt}function Fn(){return kt=Mn<jg?jt(da,Mn++):0,na++,kt===10&&(na=1,vl++),kt}function Tr(){return jt(da,Mn)}function Vs(){return Mn}function xl(e,a){return po(da,e,a)}function ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bj(e){return vl=na=1,jg=On(da=e),Mn=0,[]}function kj(e){return da="",e}function jd(e){return _g(xl(Mn-1,ru(e===91?e+2:e===40?e+1:e)))}function _j(e){for(;(kt=Tr())&&kt<33;)Fn();return ui(e)>2||ui(kt)>3?"":" "}function Cj(e,a){for(;--a&&Fn()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return xl(e,Vs()+(a<6&&Tr()==32&&Fn()==32))}function ru(e){for(;Fn();)switch(kt){case e:return Mn;case 34:case 39:e!==34&&e!==39&&ru(kt);break;case 40:e===41&&ru(e);break;case 92:Fn();break}return Mn}function jj(e,a){for(;Fn()&&e+kt!==57;)if(e+kt===84&&Tr()===47)break;return"/*"+xl(a,Mn-1)+"*"+Fu(e===47?e:Fn())}function Sj(e){for(;!ui(Tr());)Fn();return xl(e,Mn)}function Nj(e){return kj(Gs("",null,null,null,[""],e=bj(e),0,[0],e))}function Gs(e,a,i,s,l,d,h,f,g){for(var x=0,y=0,w=h,k=0,A=0,_=0,C=1,M=1,$=1,S=0,j="",O=l,R=d,N=s,T=j;M;)switch(_=S,S=Fn()){case 40:if(_!=108&&jt(T,w-1)==58){qs(T+=Pe(jd(S),"&","&\f"),"&\f",kg(x?f[x-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:T+=jd(S);break;case 9:case 10:case 13:case 32:T+=_j(_);break;case 92:T+=Cj(Vs()-1,7);continue;case 47:switch(Tr()){case 42:case 47:ri(Mj(jj(Fn(),Vs()),a,i,g),g),(ui(_||1)==5||ui(Tr()||1)==5)&&On(T)&&po(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*C:f[x++]=On(T)*$;case 125*C:case 59:case 0:switch(S){case 0:case 125:M=0;case 59+y:$==-1&&(T=Pe(T,/\f/g,"")),A>0&&(On(T)-w||C===0&&_===47)&&ri(A>32?bf(T+";",s,i,w-1,g):bf(Pe(T," ","")+";",s,i,w-2,g),g);break;case 59:T+=";";default:if(ri(N=wf(T,a,i,x,y,l,f,j,O=[],R=[],w,d),d),S===123)if(y===0)Gs(T,a,N,N,O,d,w,f,R);else{switch(k){case 99:if(jt(T,3)===110)break;case 108:if(jt(T,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Gs(e,N,N,s&&ri(wf(e,N,N,0,0,l,f,j,l,O=[],w,R),R),l,R,w,f,s?O:R):Gs(T,N,N,N,[""],R,0,f,R)}}x=y=A=0,C=$=1,j=T="",w=h;break;case 58:w=1+On(T),A=_;default:if(C<1){if(S==123)--C;else if(S==125&&C++==0&&wj()==125)continue}switch(T+=Fu(S),S*C){case 38:$=y>0?1:(T+="\f",-1);break;case 44:f[x++]=(On(T)-1)*$,$=1;break;case 64:Tr()===45&&(T+=jd(Fn())),k=Tr(),y=w=On(j=T+=Sj(Vs())),S++;break;case 45:_===45&&On(T)==2&&(C=0)}}return d}function wf(e,a,i,s,l,d,h,f,g,x,y,w){for(var k=l-1,A=l===0?d:[""],_=Cg(A),C=0,M=0,$=0;C<s;++C)for(var S=0,j=po(e,k+1,k=kg(M=h[C])),O=e;S<_;++S)(O=_g(M>0?A[S]+" "+j:Pe(j,/&\f/g,A[S])))&&(g[$++]=O);return yl(e,a,i,l===0?gl:f,g,x,y,w)}function Mj(e,a,i,s){return yl(e,a,i,wg,Fu(xj()),po(e,2,-2),0,s)}function bf(e,a,i,s,l){return yl(e,a,i,Du,po(e,0,s),po(e,s+1,-1),s,l)}function Sg(e,a,i){switch(vj(e,a)){case 5103:return Ze+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ze+e+e;case 4855:return Ze+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return si+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+e+si+e+ot+e+e;case 5936:switch(jt(e,a+11)){case 114:return Ze+e+ot+Pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ze+e+ot+Pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ze+e+ot+Pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ze+e+ot+e+e;case 6165:return Ze+e+ot+"flex-"+e+e;case 5187:return Ze+e+Pe(e,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return Ze+e+ot+"flex-item-"+Pe(e,/flex-|-self/g,"")+(ir(e,/flex-|baseline/)?"":ot+"grid-row-"+Pe(e,/flex-|-self/g,""))+e;case 4675:return Ze+e+ot+"flex-line-pack"+Pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ze+e+ot+Pe(e,"shrink","negative")+e;case 5292:return Ze+e+ot+Pe(e,"basis","preferred-size")+e;case 6060:return Ze+"box-"+Pe(e,"-grow","")+Ze+e+ot+Pe(e,"grow","positive")+e;case 4554:return Ze+Pe(e,/([^-])(transform)/g,"$1"+Ze+"$2")+e;case 6187:return Pe(Pe(Pe(e,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),e,"")+e;case 5495:case 3959:return Pe(e,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Pe(Pe(e,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+ot+"flex-pack:$3"),/space-between/,"justify")+Ze+e+e;case 4200:if(!ir(e,/flex-|baseline/))return ot+"grid-column-align"+po(e,a)+e;break;case 2592:case 3360:return ot+Pe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,ir(s.props,/grid-\w+-end/)})?~qs(e+(i=i[a].value),"span",0)?e:ot+Pe(e,"-start","")+e+ot+"grid-row-span:"+(~qs(i,"span",0)?ir(i,/\d+/):+ir(i,/\d+/)-+ir(e,/\d+/))+";":ot+Pe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return ir(s.props,/grid-\w+-start/)})?e:ot+Pe(Pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Pe(e,/(.+)-inline(.+)/,Ze+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(e)-1-a>6)switch(jt(e,a+1)){case 109:if(jt(e,a+4)!==45)break;case 102:return Pe(e,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+si+(jt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~qs(e,"stretch",0)?Sg(Pe(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,g,x){return ot+l+":"+d+x+(h?ot+l+"-span:"+(f?g:+g-+d)+x:"")+e});case 4949:if(jt(e,a+6)===121)return Pe(e,":",":"+Ze)+e;break;case 6444:switch(jt(e,jt(e,14)===45?18:11)){case 120:return Pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(jt(e,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+ot+"$2box$3")+e;case 100:return Pe(e,":",":"+ot)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Pe(e,"scroll-","scroll-snap-")+e}return e}function nl(e,a){for(var i="",s=0;s<e.length;s++)i+=a(e[s],s,e,a)||"";return i}function Rj(e,a,i,s){switch(e.type){case gj:if(e.children.length)break;case fj:case mj:case Du:return e.return=e.return||e.value;case wg:return"";case bg:return e.return=e.value+"{"+nl(e.children,s)+"}";case gl:if(!On(e.value=e.props.join(",")))return""}return On(i=nl(e.children,s))?e.return=e.value+"{"+i+"}":""}function Lj(e){var a=Cg(e);return function(i,s,l,d){for(var h="",f=0;f<a;f++)h+=e[f](i,s,l,d)||"";return h}}function Aj(e){return function(a){a.root||(a=a.return)&&e(a)}}function $j(e,a,i,s){if(e.length>-1&&!e.return)switch(e.type){case Du:e.return=Sg(e.value,e.length,i);return;case bg:return nl([Ar(e,{value:Pe(e.value,"@","@"+Ze)})],s);case gl:if(e.length)return yj(i=e.props,function(l){switch(ir(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Go(Ar(e,{props:[Pe(l,/:(read-\w+)/,":"+si+"$1")]})),Go(Ar(e,{props:[l]})),nu(e,{props:xf(i,s)});break;case"::placeholder":Go(Ar(e,{props:[Pe(l,/:(plac\w+)/,":"+Ze+"input-$1")]})),Go(Ar(e,{props:[Pe(l,/:(plac\w+)/,":"+si+"$1")]})),Go(Ar(e,{props:[Pe(l,/:(plac\w+)/,ot+"input-$1")]})),Go(Ar(e,{props:[l]})),nu(e,{props:xf(i,s)});break}return""})}}var Zo={},Sd,Nd;const ra=typeof process<"u"&&Zo!==void 0&&(Zo.REACT_APP_SC_ATTR||Zo.SC_ATTR)||"data-styled",Ng="active",Mg="data-styled-version",wl="6.4.2",Bu=`/*!sc*/
`,li=typeof window<"u"&&typeof document<"u";function kf(e){if(typeof process<"u"&&Zo!==void 0){const a=Zo[e];if(a!==void 0&&a!=="")return a!=="false"}}const Tj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Nd=(Sd=kf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Sd!==void 0?Sd:kf("SC_DISABLE_SPEEDY"))!==null&&Nd!==void 0?Nd:typeof process<"u"&&Zo!==void 0&&!1),Rg="sc-keyframes-",Ij={};function bi(e,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let Ys=new Map,rl=new Map,Ks=1;const oi=e=>{if(Ys.has(e))return Ys.get(e);for(;rl.has(Ks);)Ks++;const a=Ks++;return Ys.set(e,a),rl.set(a,e),a},Ej=e=>rl.get(e),Pj=(e,a)=>{Ks=a+1,Ys.set(e,a),rl.set(a,e)},Wu=Object.freeze([]),oa=Object.freeze({});function Lg(e,a,i=oa){return e.theme!==i.theme&&e.theme||a||i.theme}const zj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Oj=/(^-|-$)/g;function Ag(e){return e.replace(zj,"-").replace(Oj,"")}const Dj=/(a)(d)/gi,_f=e=>String.fromCharCode(e+(e>25?39:97));function Hu(e){let a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=_f(a%52)+i;return(_f(a%52)+i).replace(Dj,"$1-$2")}const ou=5381,lo=(e,a)=>{let i=a.length;for(;i;)e=33*e^a.charCodeAt(--i);return e},$g=e=>lo(ou,e);function Uu(e){return Hu($g(e)>>>0)}function Fj(e){return e.displayName||e.name||"Component"}function au(e){return typeof e=="string"&&!0}function Bj(e){return au(e)?`styled.${e}`:`Styled(${Fj(e)})`}const Tg=Symbol.for("react.memo"),Wj=Symbol.for("react.forward_ref"),Hj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Uj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ig={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qj={[Wj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Tg]:Ig};function Cf(e){return("type"in(a=e)&&a.type.$$typeof)===Tg?Ig:"$$typeof"in e?qj[e.$$typeof]:Hj;var a}const Vj=Object.defineProperty,Gj=Object.getOwnPropertyNames,Yj=Object.getOwnPropertySymbols,Kj=Object.getOwnPropertyDescriptor,Qj=Object.getPrototypeOf,Zj=Object.prototype;function Eg(e,a,i){if(typeof a!="string"){const s=Qj(a);s&&s!==Zj&&Eg(e,s,i);const l=Gj(a).concat(Yj(a)),d=Cf(e),h=Cf(a);for(let f=0;f<l.length;++f){const g=l[f];if(!(g in Uj||i&&i[g]||h&&g in h||d&&g in d)){const x=Kj(a,g);try{Vj(e,g,x)}catch{}}}}return e}function ki(e){return typeof e=="function"}const Xj=Symbol.for("react.forward_ref");function qu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Xj&&"styledComponentId"in e}function ai(e,a){return e&&a?e+" "+a:e||a||""}function ol(e,a){return e.join("")}function hi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function iu(e,a,i=!1){if(!i&&!hi(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)e[s]=iu(e[s],a[s]);else if(hi(a))for(const s in a)e[s]=iu(e[s],a[s]);return e}function Vu(e,a){Object.defineProperty(e,"toString",{value:a})}const Jj=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let a=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)a-=this.groupSizes[i];return this._cGroup=e,this._cIndex=a,a}insertRules(e,a){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw bi(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const a=this.groupSizes[e],i=this.indexOfGroup(e),s=i+a;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>e&&(this._cIndex-=a)}}getGroup(e){let a="";if(e>=this.length||this.groupSizes[e]===0)return a;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+Bu;return a}},eS=`style[${ra}][${Mg}="${wl}"]`,tS=new RegExp(`^${ra}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),jf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,su=e=>{if(!e)return document;if(jf(e))return e;if("getRootNode"in e){const a=e.getRootNode();if(jf(a))return a}return document},nS=(e,a,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(a,l)},rS=(e,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(Bu),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const g=f.match(tS);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(Pj(y,x),nS(e,y,g[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(f)}},Md=e=>{const a=su(e.options.target).querySelectorAll(eS);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(ra)!==Ng&&(rS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let Xa=!1;function oS(){if(Xa!==!1)return Xa;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Xa=e.nonce||e.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Xa=a.getAttribute("content")||void 0}return Xa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Pg=(e,a)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${ra}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(ra,Ng),l.setAttribute(Mg,wl);const f=a||oS();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},aS=class{constructor(e,a){this.element=Pg(e,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw bi(17)})(this.element),this.length=0}insertRule(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""}},iS=class{constructor(e,a){this.element=Pg(e,a),this.nodes=this.element.childNodes,this.length=0}insertRule(e,a){if(e<=this.length&&e>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Sf=li;const sS={isServer:!li,useCSSOMInjection:!Tj};class _i{static registerId(a){return oi(a)}constructor(a=oa,i={},s){this.options=Object.assign(Object.assign({},sS),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&li&&Sf&&(Sf=!1,Md(this)),Vu(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let g=0;g<h;g++){const x=Ej(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=ra+".g"+g+'[id="'+x+'"]';let A="";for(const _ of y)_.length>0&&(A+=_+",");f+=w+k+'{content:"'+A+'"}'+Bu}return f})(this))}rehydrate(){!this.server&&li&&Md(this)}reconstructWithOptions(a,i=!0){const s=new _i(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&li&&a.target!==this.options.target&&su(this.options.target)!==su(a.target)&&Md(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new aS(s,l):new iS(s,l))(this.options),new Jj(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){oi(a),a.startsWith(Rg)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(oi(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(oi(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const zg=new WeakSet,lS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cS(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in lS||e.startsWith("--")?String(a).trim():a+"px"}const oo=47;function Nf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let a="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return a.startsWith("ms-")?"-"+a:a}const Og=Symbol.for("sc-keyframes");function dS(e){return typeof e=="object"&&e!==null&&Og in e}function Dg(e){return ki(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Fg=e=>e==null||e===!1||e==="",uS=Symbol.for("react.client.reference");function Mf(e){return e.$$typeof===uS}function Bg(e,a){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!Fg(s)&&(Array.isArray(s)&&zg.has(s)||ki(s)?a.push(Nf(i)+":",s,";"):hi(s)?(a.push(i+" {"),Bg(s,a),a.push("}")):a.push(Nf(i)+": "+cS(i,s)+";"))}}function Pr(e,a,i,s,l=[]){if(Fg(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Mf(e))return l;if(Dg(e)&&a){const h=e(a);return Pr(h,a,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)Pr(e[h],a,i,s,l);return l}return qu(e)?(l.push(`.${e.styledComponentId}`),l):dS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Mf(e)?l:hi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Bg(e,l),l):(l.push(e.toString()),l)}const hS=$g(wl);class pS{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=lo(hS,i),this.baseStyle=s,_i.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(Dg(f)){const g=f(a);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=ol(Pr(g,a,i,s)))}else d+=ol(Pr(f,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=Hu(lo(lo(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const g=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,g)}l=ai(l,f)}}return l}}const fS=/&/g;function Wg(e,a){let i=0;for(;--a>=0&&e.charCodeAt(a)===92;)i++;return!(1&~i)}function Rd(e){const a=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let g=0;g<a;g++){const x=e.charCodeAt(g);if(d!==0||h||x!==oo||e.charCodeAt(g+1)!==42)if(h)x===42&&e.charCodeAt(g+1)===oo&&(h=!1,g++);else if(x!==34&&x!==39||Wg(e,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){f=!0;let y=g+1;for(;y<a;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<a&&e.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return f||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=e.substring(s)),i):e}function Hg(e,a){const i=a+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let g=0;g<h.length;g++)f[g]=i+h[g];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&Hg(d.children,a)}return e}function mS({options:e=oa,plugins:a=Wu}=oa){let i,s,l;const d=(k,A,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=a.slice();h.push(k=>{k.type===gl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(fS,s).replace(l,d))}),e.prefix&&h.push($j),h.push(Rj);let f=[];const g=Lj(h.concat(Aj(k=>f.push(k)))),x=(k,A="",_="",C="&")=>{i=C,s=A,l=void 0;const M=(function(S){const j=S.indexOf("//")!==-1,O=S.indexOf("}")!==-1;if(!j&&!O)return S;if(!j)return Rd(S);const R=S.length;let N="",T=0,z=0,B=0,G=0,Z=0,F=!1;for(;z<R;){const Y=S.charCodeAt(z);if(Y!==34&&Y!==39||Wg(S,z))if(B===0)if(Y===oo&&z+1<R&&S.charCodeAt(z+1)===42){for(z+=2;z+1<R&&(S.charCodeAt(z)!==42||S.charCodeAt(z+1)!==oo);)z++;z+=2}else if(Y!==40)if(Y!==41)if(G>0)z++;else if(Y===42&&z+1<R&&S.charCodeAt(z+1)===oo)N+=S.substring(T,z),z+=2,T=z,F=!0;else if(Y===oo&&z+1<R&&S.charCodeAt(z+1)===oo){for(N+=S.substring(T,z);z<R&&S.charCodeAt(z)!==10;)z++;T=z,F=!0}else Y===123?Z++:Y===125&&Z--,z++;else G>0&&G--,z++;else G++,z++;else z++;else B===0?B=Y:B===Y&&(B=0),z++}return F?(T<R&&(N+=S.substring(T)),Z===0?N:Rd(N)):Z===0?S:Rd(S)})(k);let $=Nj(_||A?_+" "+A+" { "+M+" }":M);return e.namespace&&($=Hg($,e.namespace)),f=[],nl($,g),f},y=e;let w=ou;for(let k=0;k<a.length;k++)a[k].name||bi(15),w=lo(w,a[k].name);return y!=null&&y.namespace&&(w=lo(w,y.namespace)),y!=null&&y.prefix&&(w=lo(w,"p")),x.hash=w!==ou?w.toString():"",x}const gS=new _i,lu=mS(),Ug=on.createContext({shouldForwardProp:void 0,styleSheet:gS,stylis:lu,stylisPlugins:void 0});Ug.Consumer;function qg(){return on.useContext(Ug)}const Gu=on.createContext(void 0);Gu.Consumer;const Rf=Object.prototype.hasOwnProperty,Ld={};function vS(e,a){const i=typeof e!="string"?"sc":Ag(e);Ld[i]=(Ld[i]||0)+1;const s=i+"-"+Uu(wl+i+Ld[i]);return a?a+"-"+s:s}function yS(e,a,i){const s=qu(e),l=e,d=!au(e),{attrs:h=Wu,componentId:f=vS(a.displayName,a.parentComponentId),displayName:g=Bj(e)}=a,x=a.displayName&&a.componentId?Ag(a.displayName)+"-"+a.componentId:a.componentId||f,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=a;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(a.shouldForwardProp){const M=a.shouldForwardProp;w=($,S)=>C($,S)&&M($,S)}else w=C}const k=new pS(i,x,s?l.componentStyle:void 0);function A(C,M){return(function($,S,j){const{attrs:O,componentStyle:R,defaultProps:N,foldedComponentIds:T,styledComponentId:z,target:B}=$,G=on.useContext(Gu),Z=qg(),F=$.shouldForwardProp||Z.shouldForwardProp,Y=Lg(S,G,N)||oa;let ee,ae;{const W=on.useRef(null),V=W.current;if(V!==null&&V[1]===Y&&V[2]===Z.styleSheet&&V[3]===Z.stylis&&V[7]===R&&(function(E,L,U){const K=E,ie=L;let de=0;for(const q in ie)if(Rf.call(ie,q)&&(de++,K[q]!==ie[q]))return!1;return de===U})(V[0],S,V[4]))ee=V[5],ae=V[6];else{ee=(function(L,U,K){const ie=Object.assign(Object.assign({},U),{className:void 0,theme:K}),de=L.length>1;for(let q=0;q<L.length;q++){const I=L[q],te=ki(I)?I(de?Object.assign({},ie):ie):I;for(const fe in te)fe==="className"?ie.className=ai(ie.className,te[fe]):fe==="style"?ie.style=Object.assign(Object.assign({},ie.style),te[fe]):fe in U&&U[fe]===void 0||(ie[fe]=te[fe])}return"className"in U&&typeof U.className=="string"&&(ie.className=ai(ie.className,U.className)),ie})(O,S,Y),ae=(function(L,U,K,ie){return L.generateAndInjectStyles(U,K,ie)})(R,ee,Z.styleSheet,Z.stylis);let E=0;for(const L in S)Rf.call(S,L)&&E++;W.current=[S,Y,Z.styleSheet,Z.stylis,E,ee,ae,R]}}const re=ee.as||B,oe=(function(W,V,E,L){const U={};for(const K in W)W[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&W.theme===E||(K==="forwardedAs"?U.as=W.forwardedAs:L&&!L(K,V)||(U[K]=W[K]));return U})(ee,re,Y,F);let X=ai(T,z);return ae&&(X+=" "+ae),ee.className&&(X+=" "+ee.className),oe[au(re)&&re.includes("-")?"class":"className"]=X,j&&(oe.ref=j),v.createElement(re,oe)})(_,C,M)}A.displayName=g;let _=on.forwardRef(A);return _.attrs=y,_.componentStyle=k,_.displayName=g,_.shouldForwardProp=w,_.foldedComponentIds=s?ai(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=x,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(M,...$){for(const S of $)iu(M,S,!0);return M})({},l.defaultProps,C):C}}),Vu(_,()=>`.${_.styledComponentId}`),d&&Eg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var xS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Lf(e,a){const i=[e[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],e[s+1]);return i}const Af=e=>(zg.add(e),e);function Ve(e,...a){if(ki(e)||hi(e))return Af(Pr(Lf(Wu,[e,...a])));const i=e;return a.length===0&&i.length===1&&typeof i[0]=="string"?Pr(i):Af(Pr(Lf(i,a)))}function cu(e,a,i=oa){if(!a)throw bi(1,a);const s=(l,...d)=>e(a,i,Ve(l,...d));return s.attrs=l=>cu(e,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>cu(e,a,Object.assign(Object.assign({},i),l)),s}const Vg=e=>cu(yS,e),m=Vg;xS.forEach(e=>{m[e]=Vg(e)});class wS{constructor(a,i){this.instanceRules=new Map,this.rules=a,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(ki(d)&&!qu(d))return!1}return!0})(a),_i.registerId(this.componentId)}removeStyles(a,i){this.instanceRules.delete(a),this.rebuildGroup(i)}renderStyles(a,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+a))this.instanceRules.has(a)||this.computeRules(a,i,s,l);else{const f=this.computeRules(a,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(a);if(this.computeRules(a,i,s,l),!s.server&&h){const f=h.rules,g=this.instanceRules.get(a).rules;if(f.length===g.length){let x=!0;for(let y=0;y<f.length;y++)if(f[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(a,i,s,l){const d=ol(Pr(this.rules,i,s,l)),h={name:this.componentId+a,rules:l(d,"")};return this.instanceRules.set(a,h),h}rebuildGroup(a){const i=this.componentId;a.clearRules(i);for(const s of this.instanceRules.values())a.insertRules(i,s.name,s.rules)}}function bS(e,...a){const i=Ve(e,...a),s=`sc-global-${Uu(JSON.stringify(i))}`,l=new wS(i,s),d=f=>{const g=qg(),x=on.useContext(Gu);let y;{const w=on.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,f,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,f,g.styleSheet,x,g.stylis,l],k=on.useRef(l);on.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,f,g.styleSheet,x,g.stylis))},w),on.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(f,g,x,y,w){if(l.isStatic)l.renderStyles(f,Ij,x,w);else{const k=Object.assign(Object.assign({},g),{theme:Lg(g,y,d.defaultProps)});l.renderStyles(f,k,x,w)}}return on.memo(d)}var Gg;class kS{constructor(a,i){this[Gg]=!0,this.inject=(s,l=lu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=a,this.id=Rg+a,this.rules=i,oi(this.id),Vu(this,()=>{throw bi(12,String(this.name))})}getName(a=lu){return a.hash?this.name+Hu(+a.hash>>>0):this.name}}function je(e,...a){const i=ol(Ve(e,...a)),s=Uu(i);return new kS(s,i)}Gg=Og;const Yg=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Your business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Your workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Your compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Your business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Your workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Your compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Your business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Your workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Your operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Your business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Your workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Your operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Your business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Your workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Your compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Your business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Your workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Your compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Your business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Your workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Your operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Your business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Your workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Your compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}]}],_S=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function CS(e){const a=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(a)?a:`https://${a}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return a}}function jS(e){let a=0;for(let i=0;i<e.length;i+=1)a=a*31+e.charCodeAt(i)>>>0;return a%Yg.length}function SS(e){const a=CS(e);let i=-1,s=0;return _S.forEach((l,d)=>{const h=l.reduce((f,g)=>a.includes(g)?f+1:f,0);h>s&&(s=h,i=d)}),Yg[i>=0?i:jS(a)]}const $t=(e,a,i)=>Math.max(a,Math.min(i,e)),lr=e=>(e=$t(e,0,1),e*e*(3-2*e)),zr=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function tn(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function du(e){const a=(e||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function $f(e,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return du(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return du(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function NS(){const[e,a]=v.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function MS(e){const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function RS(e,a){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const no=["234,54,38","246,112,44","252,172,54","255,212,76"],LS="176,58,32",AS="198,158,52";function sr(e,a,i){const s=e.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function Or(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=e.size<24,w=$t(e.alert??0,0,1),k=(S,j)=>S+(j-S)*w,A=.85+.15*Math.sin(a*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,x*3);S.addColorStop(0,"rgba("+i.core+",0.55)"),S.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const S=x*k(3.2,3),j=s.createRadialGradient(h,f,0,h,f,S);j.addColorStop(0,"rgba("+sr(i.core,no[1],w)+","+k(.34,.85*A)+")"),j.addColorStop(.5,"rgba("+sr(i.core,no[2],w)+","+k(.13,.42*A)+")"),j.addColorStop(1,"rgba("+sr(i.core,no[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,C=Math.max(.8,x*k(1,1.5)),M=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(h-M,f-M,0,h,f,C);$.addColorStop(0,"rgba("+sr(i.core,no[0],w)+","+k(_,1)+")"),$.addColorStop(.5,"rgba("+sr(i.core,no[1],w)+","+k(_,1)+")"),$.addColorStop(.82,"rgba("+sr(i.core,no[2],w)+","+k(_,.97)+")"),$.addColorStop(1,"rgba("+sr(i.core,no[3],w)+","+k(_,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(h,f,C,0,6.2832),s.fill(),s.restore()}function Kg(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=a*(x?.5:.16),k=.42,A=Math.cos(k),_=Math.sin(k),C=Math.cos(w),M=Math.sin(w),$=g*.96,S=(B,G,Z)=>{const F=B*C+Z*M,Y=-B*M+Z*C,ee=G,ae=ee*A-Y*_,oe=(ee*_+Y*A+1)/2,X=.82+.18*oe;return{x:h+F*$*X,y:f+ae*$*X,d:oe}},j=(B,G,Z)=>{const F=Math.cos(B),Y=Math.sin(B)*Math.cos(G),ee=Math.sin(B)*Math.sin(G);return[F*Math.cos(Z)+ee*Math.sin(Z),Y,-F*Math.sin(Z)+ee*Math.cos(Z)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const O=e.size>=24?64:40,R=x?.9:.3,N=O,T=5.6,z=[];for(let B=0;B<y.length;B++){const G=y[B][0],Z=y[B][1],F=ae=>{const re=j(ae,G,Z);return S(re[0],re[1],re[2])},Y=B%2?1:-1,ee=B*2+Y*a*R;z.push({ptOf:F,head:ee,dir:Y,hp:F(ee)})}z.sort((B,G)=>B.hp.d-G.hp.d);for(const B of z){const G=Math.max(1.2,g*.05)*(.75+.35*B.hp.d),Z=.66*(.45+.55*B.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let F=B.ptOf(B.head);for(let ae=1;ae<=N;ae++){const re=ae/N,oe=1-re,X=Z*oe*oe,W=B.ptOf(B.head-B.dir*re*T);X>.004&&(s.strokeStyle="rgba("+i.dot+","+X+")",s.beginPath(),s.moveTo(F.x,F.y),s.lineTo(W.x,W.y),s.stroke()),F=W}s.restore();const Y=Math.max(.9,g*.062*zr(e.size)*(.65+.5*B.hp.d)),ee=.45+.55*B.hp.d;if(i.glow){const ae=s.createRadialGradient(B.hp.x,B.hp.y,0,B.hp.x,B.hp.y,Y*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(B.hp.x,B.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(B.hp.x,B.hp.y,Y,0,6.2832),s.fill()}Or(e,a,i),s.restore()}function $S(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[g*.92],w=y.length,k=1,A=x?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<w;C++){const M=y[C],$=C%2?1:-1,S=6.2832/k,j=Math.min(5.6,S*.92);for(let O=0;O<k;O++){const R=C*2+$*a*A+O*S,N=h+Math.cos(R)*M,T=f+Math.sin(R)*M;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let z=N,B=T;for(let Z=1;Z<=_;Z++){const F=Z/_,Y=.62*(1-F)*(1-F),ee=R-$*F*j,ae=h+Math.cos(ee)*M,re=f+Math.sin(ee)*M;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(z,B),s.lineTo(ae,re),s.stroke()),z=ae,B=re}s.restore();const G=Math.max(.9,g*.062*zr(e.size));if(i.glow){const Z=s.createRadialGradient(N,T,0,N,T,G*4.5);Z.addColorStop(0,"rgba("+i.accent+",0.3)"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(N,T,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(N,T,G,0,6.2832),s.fill()}}Or(e,a,i),s.restore()}function Tf(e,a,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=$t(e.alert??0,0,1),k=x*.82,A=(W,V)=>sr(i.dot,sr(LS,AS,$t(Math.hypot(W-f,V-g)/k,0,1)),w),_=e.size>=120,C=_?22:e.size>=32?10:e.size>=20?7:5,M=y?a*.55:a*.22,$=Math.cos(M),S=Math.sin(M),j=.42,O=Math.cos(j),R=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const W=s.createRadialGradient(f,g,0,f,g,x*1.02);W.addColorStop(0,"rgba("+i.accent+",0.10)"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(f,g,x*1.02,0,6.2832),s.fill()}const N=[];for(let W=0;W<C;W++){const V=1-(W+.5)/C*2,E=Math.sqrt(Math.max(0,1-V*V)),L=W*2.39996,U=Math.cos(L)*E,K=V,ie=Math.sin(L)*E,de=U*$+ie*S,q=-U*S+ie*$,I=K*O-q*R,te=K*R+q*O,fe=(te+1)/2,ce=.82+.18*fe;N.push({x:f+de*k*ce,y:g+I*k*ce,d:fe,k:W,vec:[de,I,te]})}N.sort((W,V)=>W.d-V.d);const T=W=>{const V=(W[2]+1)/2,E=.82+.18*V;return{x:f+W[0]*k*E,y:g+W[1]*k*E,d:V}},z=(W,V,E)=>{let L=W[0]*V[0]+W[1]*V[1]+W[2]*V[2];L=$t(L,-1,1);const U=Math.acos(L);if(U<.001)return[W[0],W[1],W[2]];const K=Math.sin(U),ie=Math.sin((1-E)*U)/K,de=Math.sin(E*U)/K;return[W[0]*ie+V[0]*de,W[1]*ie+V[1]*de,W[2]*ie+V[2]*de]},B={};for(const W of N)B[W.k]=W;const Z=a*(y?1.4:.5),F=Math.floor(Z),Y=Z-F,ee=5,ae=12;s.lineCap="round",s.lineJoin="round";const re=[1.7,9.3,21.5,34.8,48.2],oe=$t(Math.round(e.streamCount??(_?5:4)),0,re.length),X=re.slice(0,oe).map(W=>({seed:W}));for(const W of X){const V=L=>{const U=Math.sin(L*12.9898+W.seed)*43758.5453;return Math.floor((U-Math.floor(U))*C)},E=L=>{let U=V(L);return U===V(L-1)&&(U=(U+1)%C),B[U]};for(let L=ee-1;L>=0;L--){const U=F-L;if(U<0)continue;const K=E(U),ie=E(U+1);if(!K||!ie||K===ie)continue;const de=L===0?Y:1,q=T(z(K.vec,ie.vec,de)),I=(K.d+q.d)/2,te=L===0?1:$t(1-(L-1+Y)/(ee-1),0,1),fe=(i.glow?.6:.72)*te*(.4+.6*I);if(fe<.02)continue;const ce=s.createLinearGradient(K.x,K.y,q.x,q.y);ce.addColorStop(0,"rgba("+A(K.x,K.y)+",0)"),ce.addColorStop(1,"rgba("+A(q.x,q.y)+","+fe+")"),s.strokeStyle=ce,s.lineWidth=(_?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*I),s.beginPath();for(let me=0;me<=ae;me++){const be=T(z(K.vec,ie.vec,de*(me/ae)));me===0?s.moveTo(be.x,be.y):s.lineTo(be.x,be.y)}s.stroke()}}for(const W of N){const V=.5+.5*Math.sin(a*2-W.k*.9),E=(.18+.82*W.d)*(.62+.38*V),L=_?Math.max(.5,(.9+.9*W.d)*h*(.85+.15*V)):x*.058*zr(e.size)*(.6+.5*W.d);if(i.glow){const U=L*4,K=s.createRadialGradient(W.x,W.y,0,W.x,W.y,U);K.addColorStop(0,"rgba("+i.accent+","+.24*E+")"),K.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=K,s.beginPath(),s.arc(W.x,W.y,U,0,6.2832),s.fill()}s.fillStyle="rgba("+A(W.x,W.y)+","+(.32+.68*E)+")",s.beginPath(),s.arc(W.x,W.y,Math.max(.9,L),0,6.2832),s.fill()}_&&Yu(e,a,i,A),Or(e,a,i),s.restore()}function Yu(e,a,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let A=0;A<46;A++){const _=tn(A*5.1)<.5?-1:1,C=tn(A*1.7)*6.2832+a*(.3+tn(A*3.1)*.6)*_*k,M=y*(.04+.05*tn(A*4.7))*Math.sin(a*(.8+tn(A*6)*1)+tn(A*7)*6.28),$=y*(.5+tn(A*2.3)*.5)+M,S=g+Math.cos(C)*$,j=x+Math.sin(C)*$,O=.3+.7*(.5+.5*Math.sin(a*(1.4+tn(A)*2)+tn(A*2)*6.28)),R=Math.max(.5,(.4+tn(A*8)*1)*f*(.55+.6*O));if(i.glow){const N=R*6,T=l.createRadialGradient(S,j,0,S,j,N);T.addColorStop(0,"rgba("+i.accent+","+O*.18+")"),T.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=T,l.beginPath(),l.arc(S,j,N,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,j)+","+O*(i.glow?.8:.42)+")",l.beginPath(),l.arc(S,j,R,0,6.2832),l.fill()}}function TS(e,a,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,A=x*.12,_=lr(.5+.5*Math.sin(a*(y?1:.55))),C=y?.34+.66*_:.5+.12*_,M=Math.max(1*h,x*.052),$=-a*(y?.5:.16),S=Math.cos($),j=Math.sin($),O=.42,R=Math.cos(O),N=Math.sin(O);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const T=x*(.52+.44*C),z=Math.max(k+M,T-A),B=[];for(let G=0;G<w;G++){const Z=1-(G+.5)/w*2,F=Math.sqrt(Math.max(0,1-Z*Z)),Y=G*2.39996,ee=Math.cos(Y)*F,ae=Z,re=Math.sin(Y)*F,oe=ee*S+re*j,X=-ee*j+re*S,W=ae*R-X*N,E=(ae*N+X*R+1)/2,L=.82+.18*E,U=.5+.5*Math.sin(a*1.6+G*1.3);B.push({x0:f+oe*k*L,y0:g+W*k*L,x1:f+oe*z*L,y1:g+W*z*L,cx2:f+oe*T*L,cy2:g+W*T*L,d:E,shim:U})}B.sort((G,Z)=>G.d-Z.d);for(const G of B){const Z=(y?.4+.45*C:.6)*(.4+.6*G.d)*(.78+.22*G.shim),F=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);F.addColorStop(0,"rgba("+i.dot+","+Z+")"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=F,s.lineWidth=M*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*zr(e.size)*(.85+.3*C)*(.6+.5*G.d));if(i.glow){const ee=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Z+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Z+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&Yu(e,a,i,()=>i.dot),Or(e,a,i),s.restore()}function IS(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=x?a*.5:a*.2,A=Math.cos(k),_=Math.sin(k),C=.42,M=Math.cos(C),$=Math.sin(C),S=x?1:.4,j=(F,Y)=>[Math.sin(F)*Math.cos(Y),Math.cos(F),Math.sin(F)*Math.sin(Y)],O=[j(1.4+.5*Math.sin(a*.5*S),a*.6*S),j(1.9+.4*Math.cos(a*.4*S),-a*.5*S+2)],R=.36,N=e.cellCount==null?y:$t(Math.round(e.cellCount),0,y);let T=null,z=null;(N<y||e.cellBirths)&&(z=Array.from({length:y},(F,Y)=>Y).sort((F,Y)=>tn(F)-tn(Y)),T=new Array(y),z.forEach((F,Y)=>{T[F]=Y}));const B=.7,G=.16;if(z&&e.cellBirths&&e.emergeNow!=null){let F=0;for(let Y=0;Y<N;Y++){const ee=z[Y];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+F++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Z=[];for(let F=0;F<y;F++){let Y=1;if(T){if(T[F]>=N)continue;if(e.cellBirths){const q=e.cellBirths.get(F);if(q==null||(Y=lr(((e.emergeNow??q+B)-q)/B),Y<=.001))continue}}const ee=1-(F+.5)/y*2,ae=Math.sqrt(Math.max(0,1-ee*ee)),re=F*2.39996,oe=Math.cos(re)*ae*Y,X=ee*Y,W=Math.sin(re)*ae*Y;let V=0;for(const q of O){const I=oe-q[0],te=X-q[1],fe=W-q[2];V+=Math.exp(-(I*I+te*te+fe*fe)/(2*R*R))}V=$t(V,0,1);const E=oe*A+W*_,L=-oe*_+W*A,U=X*M-L*$,ie=(X*$+L*M+1)/2,de=.82+.18*ie;Z.push({x:h+E*w*de,y:f+U*w*de,d:ie,inf:V,g:Y})}Z.sort((F,Y)=>F.d-Y.d);for(const F of Z){const Y=lr(F.inf),ee=Math.max(.6,g*(.05+.06*Y)*zr(e.size)*(.55+.5*F.d))*(.35+.65*F.g),ae=(.16+.84*F.d)*(.45+.55*Y)*F.g,re=1-(1-Math.abs(2*F.d-1))*F.g,oe=Math.atan2(F.y-f,F.x-h);s.fillStyle="rgba("+i.dot+","+ae+")",s.beginPath(),s.ellipse(F.x,F.y,Math.max(.35,ee*re),ee,oe,0,6.2832),s.fill()}Or(e,a,i),s.restore()}function ES(e,a,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,w=e.state!=="idle",k=lr($t(s/.55,0,1)),A=lr($t((s-.3)/.4,0,1)),_=lr($t((s-.5)/.5,0,1)),C=e.size>=32?11:7,M=y*.12,$=y*.12,S=lr(.5+.5*Math.sin(a*(w?1:.55))),j=w?.34+.66*S:.5+.12*S,O=Math.max(1*f,y*.052),R=-a*(w?.5:.16),N=Math.cos(R),T=Math.sin(R),z=.42,B=Math.cos(z),G=Math.sin(z),Z=y*(.52+.44*j),F=Math.max(M+O,Z-$),Y=[];for(let q=0;q<C;q++){const I=1-(q+.5)/C*2,te=Math.sqrt(Math.max(0,1-I*I)),fe=q*2.39996,ce=Math.cos(fe)*te,me=I,be=Math.sin(fe)*te,ve=ce*N+be*T,Le=-ce*T+be*N,Te=me*B-Le*G,Oe=(me*G+Le*B+1)/2,Ie=.82+.18*Oe,We=.5+.5*Math.sin(a*1.6+q*1.3);Y.push({x0:g+ve*M*Ie,y0:x+Te*M*Ie,x1:g+ve*F*Ie,y1:x+Te*F*Ie,cx2:g+ve*Z*Ie,cy2:x+Te*Z*Ie,d:Oe,shim:We,ux:ce,uy:me,uz:be})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...Y].sort((q,I)=>q.d-I.d);for(const q of ee){const I=(w?.4+.45*j:.6)*(.4+.6*q.d)*(.78+.22*q.shim);if(_>.001){const te=q.x0+(q.x1-q.x0)*_,fe=q.y0+(q.y1-q.y0)*_,ce=l.createLinearGradient(q.x0,q.y0,q.x1,q.y1);ce.addColorStop(0,"rgba("+i.dot+","+I*_+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ce,l.lineWidth=O*(.7+.5*q.d),l.beginPath(),l.moveTo(q.x0,q.y0),l.lineTo(te,fe),l.stroke()}if(A>.001){const te=Math.max(.9,y*.058*zr(e.size)*(.85+.3*j)*(.6+.5*q.d));if(i.glow){const fe=l.createRadialGradient(q.cx2,q.cy2,0,q.cx2,q.cy2,te*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*I*A+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(q.cx2,q.cy2,te*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,I+.1)*A+")",l.beginPath(),l.arc(q.cx2,q.cy2,te*(.6+.4*A),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,re=y*.78,oe=w?a*.5:a*.2,X=Math.cos(oe),W=Math.sin(oe),V=w?1:.4,E=(q,I)=>[Math.sin(q)*Math.cos(I),Math.cos(q),Math.sin(q)*Math.sin(I)],L=[E(1.4+.5*Math.sin(a*.5*V),a*.6*V),E(1.9+.4*Math.cos(a*.4*V),-a*.5*V+2)],U=.36,K=e.cellCount==null?ae:$t(Math.round(e.cellCount),0,ae);let ie=null;if(K<ae){const q=Array.from({length:ae},(I,te)=>te).sort((I,te)=>tn(I)-tn(te));ie=new Array(ae),q.forEach((I,te)=>{ie[I]=te})}const de=1-A;if(de>.001||k<1){const q=[];for(let I=0;I<ae;I++){if(ie&&ie[I]>=K)continue;const te=1-(I+.5)/ae*2,fe=Math.sqrt(Math.max(0,1-te*te)),ce=I*2.39996,me=Math.cos(ce)*fe,be=te,ve=Math.sin(ce)*fe;let Le=0,Te=-2;for(let lt=0;lt<C;lt++){const se=me*Y[lt].ux+be*Y[lt].uy+ve*Y[lt].uz;se>Te&&(Te=se,Le=lt)}const ze=Y[Le];let Oe=0;for(const lt of L){const se=me-lt[0],ye=be-lt[1],Se=ve-lt[2];Oe+=Math.exp(-(se*se+ye*ye+Se*Se)/(2*U*U))}Oe=$t(Oe,0,1);const Ie=me*X+ve*W,We=-me*W+ve*X,Ye=be*B-We*G,He=(be*G+We*B+1)/2,yt=.82+.18*He,st=g+Ie*re*yt,It=x+Ye*re*yt;q.push({x:st+(ze.cx2-st)*k,y:It+(ze.cy2-It)*k,d:He+(ze.d-He)*k,inf:Oe,f:(1-(1-Math.abs(2*He-1)))*(1-k)+1*k})}q.sort((I,te)=>I.d-te.d);for(const I of q){const te=lr(I.inf),fe=Math.max(.6,y*(.05+.06*te)*zr(e.size)*(.55+.5*I.d)),ce=(.16+.84*I.d)*(.45+.55*te)*de;if(ce<=.003)continue;const me=Math.atan2(I.y-x,I.x-g);l.fillStyle="rgba("+i.dot+","+ce+")",l.beginPath(),l.ellipse(I.x,I.y,Math.max(.35,fe*I.f),fe,me,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,Yu(e,a,i,()=>i.dot),l.globalAlpha=1),Or(e,a,i),l.restore()}function PS(e,a,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=x?1:.4,A=a*(x?.3:.12),_=a*1*k,C=-a*.7*k+2.2,M=.72,$=(S,j)=>{const O=((S-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(O)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<y;S++){const j=S/y*6.2832+A;let O=Math.exp(-($(j,_)**2)/(2*M*M))+Math.exp(-($(j,C)**2)/(2*M*M));O=$t(O,0,1);const R=lr(O),N=h+Math.cos(j)*w,T=f+Math.sin(j)*w,z=Math.max(.6,g*(.05+.07*R)*zr(e.size)),B=.38+.62*R;if(i.glow&&R>.25){const G=s.createRadialGradient(N,T,0,N,T,z*4);G.addColorStop(0,"rgba("+i.accent+","+.24*R+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(N,T,z*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+B+")",s.beginPath(),s.arc(N,T,z,0,6.2832),s.fill()}Or(e,a,i),s.restore()}function zS(e,a,i){Or(e,a,i)}const OS={orbit:Kg,orbit2d:$S,circle:Tf,lines:TS,magnetic:IS,magnetic2d:PS,pulse:zS,bands:Tf};function gt({mark:e="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:f=!0,coreGradient:g=!1,streamCount:x,cellCount:y,className:w,"aria-label":k}){const A=v.useRef(null),_=NS(),C=v.useRef(0),M=v.useRef(0);M.current=g?1:0;const $=v.useRef(new Map),S=v.useRef(null),j=v.useRef(0);return v.useEffect(()=>{const O=A.current;if(!O)return;const R=O.getContext("2d");if(!R)return;const N=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),T=Math.min(2,window.devicePixelRatio||1),z=Math.max(2,Math.round(a*T)),B=z;O.width=z,O.height=B;const G={ctx:R,w:z,h:B,dpr:T,size:a,state:s,coreHalo:f,alert:C.current,streamCount:x,cellCount:y,cellBirths:y!=null&&!N&&s!=="static"?$.current:void 0},Z=i==="auto"?MS($f(R,O,"var(--color-bg-primary)"))<.5?"dark":"light":i,F=RS(Z,du(d));if(h){const E=$f(R,O,h);F.dot=E,F.core=E}const Y=OS[e]??Kg,ee=1.15,ae=e==="lines"?1:0,re=e==="lines"||e==="magnetic";(S.current==null||!re||N||s==="static")&&(S.current=ae);const oe=E=>{if(C.current+=(M.current-C.current)*.06,Math.abs(C.current-M.current)<.001&&(C.current=M.current),G.alert=C.current,G.emergeNow=performance.now()/1e3,re&&S.current!==ae){const K=G.emergeNow,ie=$t(K-(j.current||K),0,.1);j.current=K;const de=ae>(S.current??0)?1:-1;S.current=$t((S.current??0)+de*ie/ee,0,1)}else j.current=G.emergeNow;R.clearRect(0,0,z,B);const L=s==="static"?.62:E,U=S.current??ae;re&&U>.001&&U<.999?ES(G,L,F,U):Y(G,L,F)},X=$t(l,.4,3);if((N||s==="static")&&(C.current=M.current),oe(1.15),N||s==="static")return;let W=0;const V=E=>{oe(E/1e3*X),W=requestAnimationFrame(V)};return W=requestAnimationFrame(V),()=>cancelAnimationFrame(W)},[e,a,i,s,l,d,h,f,g,x,y,_]),r.jsx("canvas",{ref:A,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:w,role:"img","aria-label":k})}const aa={high:0,medium:1,low:2,none:3};m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function bl(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function DS(e,a){if(a)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const Qg=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,Zg=e=>/^(review|adjust|revisit|update)\b/i.test(e),FS=["Revisit","Update","Resolve"],BS=e=>/,|\sand\s/.test(e),WS="Approve all",al="Yes",Xg=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};m.section`
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
`;function HS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function US({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function qS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function VS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function GS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function YS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function uu({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function KS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function QS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ZS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function fo({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function XS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function JS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function eN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function If({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ad=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],ia={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},Jg={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function e2(e){const a=Jg[e];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function t2(e){const a=ia[e.id];if(!a||e.title.startsWith(a))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${a} ${l}`}const n2={missed_clockin_james:"james_okoro_2"},Ku=e=>`https://i.pravatar.cc/80?u=${n2[e]??e}`,ua=e=>`https://i.pravatar.cc/80?u=${n2[e]??e}`,tN={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},nN=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],r2=e=>tN[e]??nN,o2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Ef={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Qu={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},rN={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Zu={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},oN={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},aN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},$d={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function a2(e){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return oN[e.id]??e.timeline.map(i=>{var d;const s=((d=$d[i.state])==null?void 0:d.call($d,e))??e.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:aN[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Lt=(e,a,i)=>({name:e,match:a,distance:i}),Ue=(e,a,i,s,l,d)=>({seed:e,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Pf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],iN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],sN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],lN=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],i2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",ro=e=>({from:"ultron",text:i2,time:e}),cN={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Pf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Lt("Jordan Pierce","4.9 match","3.2 mi"),Lt("Aisha Karim","4.7 match","5.1 mi"),Lt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:i2,total:20,threads:[Ue("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[ro("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ue("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[ro("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ue("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[ro("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ue("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[ro("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ue("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[ro("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ue("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[ro("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ue("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[ro("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:iN,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Lt("Renee Wallace","4.9 match","2.4 mi"),Lt("Carl Jensen","4.6 match","4.1 mi"),Lt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ue("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ue("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:sN,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Lt("Dane Mercer","4.8 match","2.1 mi"),Lt("Omar Reyes","4.6 match","3.7 mi"),Lt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ue("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ue("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ue("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:lN,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Lt("Jamal Carter","4.7 match","1.8 mi"),Lt("Sara Lindqvist","4.6 match","2.9 mi"),Lt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ue("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ue("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ue("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Lt("Theo Park","4.7 match","1.9 mi"),Lt("Gina Holt","4.5 match","3.3 mi"),Lt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ue("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ue("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ue("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ue("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Lt("Carl Jensen","4.7 match","2.6 mi"),Lt("Tina Boyd","4.5 match","3.9 mi"),Lt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ue("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ue("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ue("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ue("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ue("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ue("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ue("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ue("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ue("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ue("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ue("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ue("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ue("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Pf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ue("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ue("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},dN={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},uN=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",zf=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",Of=e=>e.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),hN={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},hu=e=>{const[a,...i]=e.split(" "),s=hN[a];return s?`Will ${s} ${i.join(" ")}`:e};function pN(e,a){if(e==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${uN(i.name)}", template="shift_offer", to=matched)`,summary:`${hu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${hu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function fN(e,a,i,s){var A,_,C,M;if(e==="read"){const $=((A=a.update)==null?void 0:A.recordType)??((_=a.updateClose)==null?void 0:_.recordType);if(!$)return null;const S=$.toLowerCase(),j=[{label:"Type",value:$},{label:"Time",value:((C=Jg[s])==null?void 0:C.shiftTime)??""},{label:"User",value:ia[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:j,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(M=a.policy)==null?void 0:M.eligible;if(!$)return null;const S=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!a.task)return null;const{description:$,query:S,fields:j}=a.task;return{icon:"task",name:"Tasks",description:$,query:S,task:{fields:j}}}if(e==="update"||e==="update-close"){const $=e==="update"?a.update:a.updateClose;if(!$)return null;const{description:S,...j}=$;return{icon:"record",name:"Update Data",description:S,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0,h=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(!(e==="policy"&&a.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=e==="policy"?a.policy.description:l?d.description:h.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?x:hu(x),S={icon:y,name:g,description:$,...pN(e,a)};return l?{...S,channel:Of(d.channel),message:d.message}:h?{...S,channel:zf(h.name),message:h.message}:e==="policy"?{...S,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:S}if(e==="policy")return{icon:y,name:g,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:zf(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:Of(d.channel),notification:k}}function s2(e,a,i="execution"){const s=cN[e];return s?a.map(l=>fN(l,s,i,e)).filter(l=>l!==null):[]}const mN=e=>e.tools??dN[e.icon]??["policy"],Ds=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function gN(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const l2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Df=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Xu(e,a){return Df[a%Df.length]}function vN(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function yN(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function c2({record:e}){const a=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?e.meta.filter(l=>l!==a):e.meta;return r.jsxs(xN,{children:[r.jsx(Bn,{size:"md",src:Ku(e.avatarSeed),name:e.title,alt:e.title}),r.jsxs(wN,{children:[r.jsx(bN,{children:e.title}),r.jsx(kN,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(_N,{"data-tone":yN(i),children:[i,"% match"]}),r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Mu,{size:16})})]})}const xN=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,wN=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,bN=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,kN=m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,_N=m.span`
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
`,Ff=e=>e.id.startsWith("detected_"),Bf=5400,Wf=1100;function CN(e,a){switch(a.type){case"detect":return e.some(i=>i.id===a.thread.id)?e:[a.thread,...e];case"decide":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:l2[i.id]??i.outcome}:i)}}const jN=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function SN(){const[e,a]=v.useReducer(CN,Ad),[i,s]=v.useState(()=>{var U;const L=Ad.find(K=>K.status==="needs_approval"||K.status==="recommended");return(L==null?void 0:L.id)??((U=Ad[0])==null?void 0:U.id)??null}),[l,d]=v.useState([]),h=L=>{s(L),d(U=>U.includes(L)?U:[...U,L])},f=v.useMemo(()=>{const L=e.map((U,K)=>({item:U,index:K}));return jN.map(U=>({id:U.id,label:U.label,threads:L.filter(K=>U.statuses.includes(K.item.status)).sort((K,ie)=>(K.item.status==="analyzing"?1:0)-(ie.item.status==="analyzing"?1:0)||(Ff(ie.item)?1:0)-(Ff(K.item)?1:0)||aa[K.item.severity]-aa[ie.item.severity]||K.index-ie.index).map(K=>K.item)}))},[e]),g=e.find(L=>L.id===i)??null,[x,y]=v.useState({}),w=i?x[i]??0:0,[k,A]=v.useState([]),[_,C]=v.useState({}),[M,$]=v.useState({}),[S,j]=v.useState([]),O=v.useRef({}),[R,N]=v.useState([]),T=L=>{N(U=>U.includes(L)?U.filter(K=>K!==L):[...U,L])},[z,B]=v.useState([]),G=L=>{B(U=>U.includes(L)?U:[...U,L])},[Z,F]=v.useState([]);return{threads:e,groups:f,selectedId:i,selectedThread:g,selectedStage:w,stageById:x,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:M,replyingIds:S,setSelectedId:h,detectRisk:L=>{a({type:"detect",thread:gN(L)})},decide:L=>{h(L),A(U=>U.includes(L)?U:[...U,L]),a({type:"decide",threadId:L})},commit:(L,U)=>{h(L),C(K=>({...K,[L]:[...K[L]??[],U]})),a({type:"commit",threadId:L})},completeRun:L=>{const U=x[L]??0,K=Qu[L];U===0&&K?(y(ie=>({...ie,[L]:1})),a({type:"reopen",threadId:L})):(a({type:"resolve",threadId:L}),R.includes(L)&&(G(L),N(ie=>ie.filter(de=>de!==L))))},sendMessage:(L,U)=>{const K=U.trim();if(!K)return;h(L),$(de=>({...de,[L]:[...de[L]??[],{role:"operator",text:K}]})),j(de=>de.includes(L)?de:[...de,L]);const ie=window.setTimeout(()=>{$(de=>{const q=de[L]??[],I=q.filter(te=>te.role==="ultron").length;return{...de,[L]:[...q,{role:"ultron",text:Xu(K,I)}]}}),j(de=>de.filter(q=>q!==L)),delete O.current[L]},Wf);O.current[L]=ie},stopReply:L=>{const U=O.current[L];U&&(window.clearTimeout(U),delete O.current[L]),j(K=>K.filter(ie=>ie!==L))},refine:L=>{},saveWorkflow:L=>{const U=L.id;h(U),$(ie=>({...ie,[U]:[...ie[U]??[],{role:"operator",text:"Save as workflow"}]})),j(ie=>ie.includes(U)?ie:[...ie,U]);const K=window.setTimeout(()=>{$(ie=>({...ie,[U]:[...ie[U]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(U),j(ie=>ie.filter(de=>de!==U)),delete O.current[U]},Wf);O.current[U]=K},pendingWorkflowIds:R,toggleWorkflowSave:T,savedWorkflowIds:z,markWorkflowSaved:G,revealedNewIds:Z,revealNew:L=>F(U=>U.includes(L)?U:[...U,L])}}const NN={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function MN(e,a){const i=NN[e];return!i||a==="plan"?e:a==="done"?i.done:i.working}const RN={search:Js,read:Js,message:tl,policy:io,shield:io,schedule:io,analytics:n6,clock:mn,monitor:xi,bell:tl,record:Ir,task:io},LN={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},AN=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:LN[e.icon]??e.name,$N=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",Hf={positive:0,chatting:1,muted:2},TN=m(tg)`
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
`,IN=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Ju=240;function EN({open:e,onClose:a,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,f]=v.useState(e),[g,x]=v.useState(!1);if(v.useEffect(()=>{if(e){f(!0);let _=0;const C=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(C),cancelAnimationFrame(_)}}x(!1);const A=setTimeout(()=>f(!1),Ju);return()=>clearTimeout(A)},[e]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((A,_)=>({entry:A,index:_}));return gi.createPortal(r.jsxs(VN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(GN,{$shown:g,onClick:a}),r.jsxs(YN,{$shown:g,children:[r.jsxs(KN,{children:[r.jsxs(QN,{children:[r.jsx(ZN,{children:i}),r.jsx(XN,{children:w})]}),r.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(ci,{size:18})})]}),r.jsxs(JN,{children:[r.jsx(eM,{"aria-hidden":"true"}),r.jsx(eg,{type:"single",collapsible:!0,value:l,onValueChange:A=>d(typeof A=="string"?A:""),children:k.map(({entry:A,index:_})=>{const C=A.updateData?H0:RN[A.icon];return r.jsx(TN,{value:String(_),label:AN(A),description:A.description,leadingSlot:r.jsx(IN,{"aria-hidden":"true",children:r.jsx(C,{size:18})}),children:r.jsx(tM,{children:r.jsx(PN,{entry:A})})},_)})})]})]})]}),document.body)}function PN({entry:e}){return r.jsxs(r.Fragment,{children:[e.channel&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Channel"}),r.jsx(Yf,{children:e.channel})]}),e.message&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Message"}),r.jsx(qf,{children:e.message})]}),e.recordDetails&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Record details"}),r.jsx(Td,{children:e.recordDetails.map((a,i)=>r.jsx(fn,{size:"sm",label:a.label,trailingSlot:r.jsx(Id,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.policies&&r.jsxs(pn,{children:[r.jsx(qt,{children:`Policies evaluated · ${e.policies.total}`}),r.jsx(fM,{children:e.policies.items.map((a,i)=>r.jsxs(mM,{children:[r.jsx(gM,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),e.eligible&&r.jsxs(pn,{children:[r.jsx(qt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),r.jsx(zN,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&r.jsxs(pn,{children:[r.jsx(qt,{children:`Threads · ${e.threads.total}`}),r.jsx(HN,{threads:e.threads})]}),e.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(pn,{children:[r.jsx(qt,{children:"Recipient"}),r.jsx(vM,{children:r.jsx(fn,{size:"md",divider:!1,leadingSlot:r.jsx(Bn,{size:"sm",src:ua(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:r.jsx(ml,{size:14})})})})]}),r.jsxs(pn,{children:[r.jsx(qt,{children:"Message"}),r.jsx(qf,{children:e.notification.message})]})]}),e.task&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Task"}),r.jsx(Td,{children:e.task.fields.map((a,i)=>r.jsx(fn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(di,{status:"success",size:"sm",children:a.value}):r.jsx(Id,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.updateData&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((a,i)=>r.jsx(Td,{children:a.map((s,l)=>r.jsx(fn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(ON,{children:[r.jsx(DN,{children:s.previousValue}),r.jsx(FN,{"aria-hidden":"true",children:"→"}),r.jsx(BN,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(di,{status:"success",size:"sm",children:s.value}):r.jsx(Id,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Recommendation"}),r.jsxs(yM,{children:[r.jsxs(Vf,{children:[r.jsx(Gf,{children:"Incentive?"}),r.jsx(xM,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),r.jsxs(Vf,{children:[r.jsx(Gf,{children:"Reason"}),r.jsx(wM,{children:e.recommendation.rationale})]})]})]}),e.query&&r.jsxs(pn,{children:[r.jsx(qt,{children:"Query"}),r.jsx(nM,{children:e.query})]}),e.summary&&r.jsxs(pn,{children:[r.jsx(qt,{children:"What it does"}),r.jsx(Yf,{children:e.summary})]})]})}function zN({candidates:e,total:a,moreNoun:i}){var y;const[s,l]=v.useState(!1),d=e.slice(0,3),h=a-d.length,f=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>WN(k,f)):[],x=[...d,...g];return r.jsxs(r.Fragment,{children:[r.jsx(eh,{children:x.map((w,k)=>r.jsx(fn,{size:"sm",leadingSlot:r.jsx(Bn,{size:"sm",src:ua(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:r.jsx(aM,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&r.jsx(d2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const eh=m.div`
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
`,Td=m(eh)`
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
`,Id=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,ON=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,DN=m.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,FN=m.span`
  color: var(--color-content-tertiary);
`,BN=m.span`
  color: var(--color-success-content);
`,il=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],sl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function WN(e,a){const i=il[e%il.length],s=sl[(e*7+3)%sl.length],l=Math.max(3,a-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const Uf=3;function HN({threads:e}){const[a,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((y,w)=>Hf[y.tone]-Hf[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(y,w)=>qN(w))],g=a?f:f.slice(0,Uf),x=f.length-Uf;return r.jsxs(r.Fragment,{children:[r.jsx(eh,{children:g.map((y,w)=>{var C;const k=!!((C=y.conversation)!=null&&C.length),A=`${y.name}-${w}`,_=k&&s===A;return r.jsxs(iM,{"data-open":_||void 0,children:[r.jsx(fn,{size:"md",interactive:k,onClick:k?()=>l(_?null:A):void 0,"aria-expanded":k?_:void 0,leadingSlot:r.jsx(Bn,{size:"sm",src:ua(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:r.jsxs(pM,{children:[r.jsx(di,{status:$N(y),size:"sm",children:y.status}),k?r.jsx(sM,{"data-open":_||void 0,children:r.jsx(Nn,{size:16})}):r.jsx(gn,{size:16})]})}),_&&r.jsx(UN,{messages:y.conversation})]},A)})}),x>0&&r.jsx(d2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":a,children:a?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function UN({messages:e}){return r.jsx(cM,{children:e.map((a,i)=>r.jsxs(dM,{$from:a.from,children:[r.jsx(uM,{children:a.text}),r.jsx(hM,{children:a.time})]},i))})}function qN(e){const a=il[e%il.length],i=sl[(e*7+3)%sl.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const VN=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,GN=m.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Ju}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,YN=m.div`
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
  transition: transform ${Ju}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,KN=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,QN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,ZN=m.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,XN=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,JN=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,eM=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,tM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,pn=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function nM({children:e}){const[a,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(rM,{children:[r.jsx(oM,{children:e}),r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(Vt,{size:14}):r.jsx(B0,{size:14})})]})}const rM=m.div`
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
`,oM=m.pre`
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
`,aM=m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,iM=m.div``,sM=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,lM=je`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${lM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dM=m.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,uM=m.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,hM=m.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,pM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,d2=m.button`
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
`,fM=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,mM=m.li`
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
`,gM=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,qf=m.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,vM=m.div`
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
`,yM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Vf=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Gf=m.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,xM=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,wM=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Yf=m.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function bM({milestones:e}){return r.jsx(LM,{children:e.map((a,i)=>r.jsx(jM,{milestone:a,last:i===e.length-1},i))})}function u2({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:g,reasoning:x}){return r.jsx(kM,{milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:g,reasoning:x})}function kM({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=v.useState(!1),_=g||x&&!d?e.length:0,C=_>0,M=C&&!y?_:0,$=e.slice(0,_).map(j=>j.headline).join(" · "),S=e.length>0&&M>=e.length;return r.jsx($M,{$animate:h,children:r.jsxs(IM,{$compact:S,children:[C&&!y&&r.jsx(Zf,{$tight:!0,$last:S,$connected:f,children:r.jsxs(f2,{type:"button","aria-expanded":y,onClick:()=>w(j=>!j),children:[r.jsx(em,{"aria-hidden":"true",children:r.jsx(el,{size:16})}),r.jsx(GM,{children:$})]})}),e.slice(M).map((j,O)=>{var F,Y;const R=M+O,N=d&&typeof i=="number"&&R>i,T=d&&typeof i=="number"&&R===i,z=N?"plan":T?"working":"done",B=!d||typeof i!="number"||R<i-1?"done":R===i-1?"working":"upcoming",G=!!((F=j.progress)!=null&&F.length),Z=R===e.length-1;return r.jsxs(Zf,{$tight:!G,$last:Z,$connected:f,children:[f&&!Z&&B!=="upcoming"&&r.jsx(PM,{"aria-hidden":"true",$state:B,$tight:!G,$superseded:g}),r.jsx(p2,{milestone:j,label:MN(j.headline,z),last:!0,collapsible:!0,placeholder:N,focused:T,startOpen:!d&&y,onCollapse:C&&y&&!T?()=>w(!1):void 0,progressBeat:T?s:void 0,superseded:g,typing:R===a,extra:!N&&((Y=j.usage)!=null&&Y.length)?r.jsx(CM,{usage:j.usage,title:j.headline}):void 0,icon:x&&!d&&!N?r.jsx(em,{"aria-hidden":"true",children:r.jsx(el,{size:16})}):r.jsx(h2,{icon:j.icon,loading:a===R||T||d&&typeof i!="number"&&R===e.length-1,placeholder:N,muted:g})})]},R)}),!l&&!d&&r.jsx(Qo,{time:Yn(e)})]})})}const Kf=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function _M(){const[e,a]=v.useState(0);return v.useEffect(()=>{if(e>=Kf.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[e]),r.jsxs(r.Fragment,{children:[Kf[e],r.jsxs(TM,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Yn(e){const i=581+e.reduce((f,g)=>f+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Qo({time:e}){const[a,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(zM,{"data-feedback-actions":!0,children:r.jsxs(b0,{visibility:"always",time:e,children:[r.jsx(Xf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(D0,{size:14})}),r.jsx(Xf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(F0,{size:14})}),r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(yi,{size:14})})]})})}function CM({usage:e,title:a}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?r.jsxs(OM,{children:[r.jsxs(Ee,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(gn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),r.jsx(EN,{open:i,onClose:()=>s(!1),title:a,usage:e})]}):null}function jM({milestone:e,last:a}){return r.jsxs(HM,{children:[r.jsxs(UM,{children:[r.jsx(h2,{icon:e.icon}),!a&&r.jsx(QM,{})]}),r.jsx(p2,{milestone:e,last:a})]})}function SM({records:e,initial:a=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,a),d=e.length-a;return r.jsxs(hR,{children:[l.map((h,f)=>r.jsx(c2,{record:h},f)),d>0&&r.jsx(pR,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function h2({slotRef:e,hidden:a,loading:i,placeholder:s,muted:l}){return s?r.jsx(Jf,{ref:e,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(VM,{})}):r.jsx(Jf,{ref:e,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(KM,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function p2({milestone:e,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var Z,F,Y;const A=a??e.headline;if(f)return r.jsx(nm,{$last:i,$dim:!0,children:r.jsxs(pi,{as:"div",children:[l,r.jsx(rm,{children:A})]})});const _=!!((Z=e.blocks)!=null&&Z.length),C=!!h,M=!d||!!e.defaultOpen||!!w,[$,S]=v.useState(null),j=!!k,O=j?!0:$??M,R=d&&(_||C),N=!j&&R&&(!s||!!g),T=N&&!!g&&!!((F=e.progress)!=null&&F.length),z=()=>S(()=>!O),B=_&&(j||!d||O),G=C&&(j||!d||O);return r.jsxs(nm,{$last:i,children:[r.jsxs(pi,{as:j||R?"button":"div",type:j||R?"button":void 0,$interactive:j||N,"aria-expanded":j?!0:N?O:void 0,onClick:j?k:N?z:void 0,children:[l,r.jsx(rm,{$focused:!!g,children:A}),N&&!g&&r.jsx(ZM,{"data-open":O||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?r.jsx(eR,{$indent:!!l,children:r.jsxs(XM,{children:[T&&r.jsx(JM,{type:"button","aria-expanded":O,"aria-label":O?"Hide details":"Show details",onClick:z,children:O?r.jsx(Pu,{size:16}):r.jsx(mo,{size:16})}),r.jsx(MM,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:O||s||g})]})}):null,B&&r.jsx(lR,{$indent:!!l,children:e.blocks.map((ee,ae)=>r.jsxs(cR,{children:[ee.text&&r.jsx(dR,{children:s?r.jsx(th,{text:ee.text}):ee.text}),ee.label&&r.jsx(uR,{children:ee.label}),ee.bullets&&r.jsx(fR,{children:ee.bullets.map((re,oe)=>r.jsx("li",{children:re},oe))}),ee.checks&&r.jsx(mR,{children:ee.checks.map((re,oe)=>r.jsxs("li",{children:[r.jsx(gR,{"aria-hidden":"true"}),r.jsx("span",{children:re})]},oe))}),ee.records&&r.jsx(SM,{records:ee.records})]},ae))}),G&&r.jsx(DM,{$indent:!!l,children:h})]})}const NM=1350;function MM({steps:e,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const g=e.length-1,x=typeof h=="number",[y,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(x||!k.current||y>=g)return;const M=setTimeout(()=>w($=>Math.min($+1,g)),NM);return()=>clearTimeout(M)},[y,g,x]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const A=typeof h=="number"?Math.min(h,g):y,_=A>=g,C=_&&!l;return r.jsxs(tR,{children:[r.jsx(rR,{$done:C,$live:l,$superseded:f,"aria-live":"polite",children:l?r.jsx(th,{text:e[A],caret:!1,speed:26}):e[A]},A),d&&(i?_:_||l)&&(a!=null&&a.length)?r.jsx(RM,{seeds:a,total:s}):null]})}const Qf=90;function RM({seeds:e,total:a,max:i=5}){const s=e.slice(0,i),l=Math.max(a??0,e.length),d=l-s.length;return r.jsxs(oR,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>r.jsx(aR,{style:{zIndex:s.length-f,animationDelay:`${f*Qf}ms`},children:r.jsx(Bn,{size:"sm",src:ua(h),name:h,alt:""})},h)),d>0&&r.jsxs(iR,{"aria-hidden":"true",style:{animationDelay:`${s.length*Qf}ms`},children:["+",d]})]})}const LM=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,AM=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,kl=Ve`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,$M=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${AM} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${kl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,TM=m.span``,IM=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Zf=m.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,EM=je`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,PM=m.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?Ve`
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
        animation: ${EM} 1.25s linear infinite;
      `:e.$state==="upcoming"?Ve`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Ve`
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
`,zM=m.div`
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
`,OM=m.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,DM=m.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,Xf=m(Ee)`
  &[data-active] { color: var(--color-content-brand); }
`;function th({text:e,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(a==null||a())},[h]),r.jsxs(r.Fragment,{children:[e.slice(0,l),s&&r.jsx(BM,{$blink:h,"aria-hidden":"true"}),!h&&r.jsx(WM,{"aria-hidden":"true",children:e.slice(l)})]})}const FM=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,BM=m.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?FM:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,WM=m.span`
  opacity: 0;
`,HM=m.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,UM=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Jf=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,qM=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,VM=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${qM} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,f2=m.button`
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
`,em=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,GM=m.span`
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

  ${f2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,YM=je`
  to { transform: rotate(360deg); }
`,tm=56.5,KM=m.svg`
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
    stroke-dasharray: ${tm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?tm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${YM} 2s linear infinite;
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
`,QM=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,nm=m.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,pi=m.div`
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
`,rm=m.span`
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

  ${pi}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,ZM=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${pi}:hover &,
  ${pi}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,XM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,JM=m.button`
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
`,eR=m.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,tR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,nR=je`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,rR=m.div`
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
  ${e=>e.$live&&Ve`
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
    animation: ${nR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,oR=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,m2=je`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,aR=m.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${m2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iR=m.span`
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
  animation: ${m2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sR=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,lR=m.div`
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
  animation: ${sR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,dR=m.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,uR=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,hR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,pR=m.button`
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
`,fR=m.ul`
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
`,mR=m.ul`
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
`,gR=m.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function vR({size:e=20}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const yR=160,g2=v.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,g]=v.useState(""),x=v.useRef(null),y=f.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var C;return(C=x.current)==null?void 0:C.focus()}}),[]);const w=()=>{const C=x.current;C&&(C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,yR)}px`)},k=()=>{!y||i||(a(f),g(""),requestAnimationFrame(()=>{const C=x.current;C&&(C.style.height="auto")}))},A=C=>{C.preventDefault(),k()},_=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),k())};return r.jsxs(xR,{onSubmit:A,$compact:d,children:[r.jsx(wR,{ref:x,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:C=>{g(C.target.value),w()},onKeyDown:_}),i?r.jsx(om,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(vR,{size:d?16:20})}):r.jsx(om,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:r.jsx(fl,{size:d?14:18})})]})}),xR=m.form`
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
`,wR=m.textarea`
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
`,om=m(Ee)`
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
`,am=450;function nh(e,a){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Qu[e.id],d=a===1&&!!l,h=d?l.prompt:o2[e.id]??e.recommendation,f=d?l.record:rN[e.id],g=f?Array.isArray(f)?f:[f]:[],x=e.status==="unresolved"?FS:d?l.actions:e.actions,y=i&&(!d&&(((_=Zu[e.id])==null?void 0:_.length)??0)>1||BS(h)),w=y?WS:x[x.length-1],k=y?[]:x.slice(0,-1),A=Qg(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:A}}function im({thread:e,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,A]=v.useState(!1),[_,C]=v.useState(!1),{actionable:M,prompt:$,records:S,primaryLabel:j,purple:O}=nh(e,a),N=e.status==="analyzing"&&!l,T=e.status==="resolved"||e.status==="auto_resolved",z=!s&&(M||O),B=T&&!d,G=s?N:M||N||z,Z=i&&(G||B),F=bl(e),ee=e2(e.id)||(Z?"":e.assessment),ae=re=>{Zg(re)?y(re):x(e.id,re)};return r.jsxs(TR,{"data-tone":F,$expanded:i,children:[r.jsxs(OR,{children:[r.jsxs(FR,{type:"button","aria-expanded":Z,"aria-label":Z?"Collapse case":"Expand case",onClick:h,children:[r.jsx(Bn,{size:"md",src:Ku(e.id),name:ia[e.id],alt:ia[e.id]??""}),r.jsxs(k2,{children:[r.jsx(_2,{children:t2(e)}),ee&&r.jsx(C2,{children:ee})]})]}),r.jsx(DR,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":Z?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?r.jsx(ml,{size:20}):Z?r.jsx(el,{size:16}):r.jsx(Pu,{size:16})})]}),Z&&B&&r.jsx(BR,{children:r.jsx(WR,{children:r.jsx(bM,{milestones:a2(e)})})}),Z&&G&&r.jsxs(HR,{children:[M&&!s&&r.jsx(_l,{children:$}),M&&!s&&S.length>0&&r.jsx(aL,{children:S.map((re,oe)=>r.jsx(c2,{record:re},oe))}),N&&r.jsx(j2,{role:"status","aria-live":"polite",children:r.jsx(CR,{thread:e,onDecide:g})}),z&&r.jsxs(rh,{children:[M&&j&&r.jsx(so,{variant:"primary",size:"sm",onClick:()=>ae(al),children:al}),M&&r.jsx(so,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),M&&r.jsx(R2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{C(!0),y("Other")},children:"Other"}),O&&(k?r.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Vt,{size:14}),children:"Saved"}):r.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(fo,{size:14}),onClick:()=>{w(e),A(!0)},children:"Save as workflow"}))]})]})]})}function sm({text:e,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:e}):r.jsx(th,{text:e,speed:a,onDone:()=>{d(!0),i==null||i()}})}function v2({thread:e,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const A=d||h,[_,C]=v.useState(!1),[M,$]=v.useState(!1),[S]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[j,O]=v.useState(!1),[R,N]=v.useState(!1),T=v.useRef(null);v.useEffect(()=>{var V;R&&((V=T.current)==null||V.focus())},[R]);const z=d||g||j,{actionable:B,onFollowUp:G,prompt:Z,records:F,primaryLabel:Y,purple:ee}=nh(e,a),ae=B&&!G?Zu[e.id]??Xg(Z).map(V=>({label:V})):void 0,re=e.status==="resolved"||e.status==="auto_resolved",oe=ee||re,X=V=>{Zg(V)?s(V):i(e.id,V)},W=B&&!(ae&&ae.length>0)&&F.length>0?F[0]:void 0;if(oe&&!B){const V=l2[e.id],E=_||!V,L=d&&!g&&!j;return r.jsxs(gL,{$divided:!0,children:[V&&r.jsx(vL,{children:r.jsx(sm,{text:V,onDone:()=>C(!0),instant:S})}),E&&!L&&r.jsxs(Xo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(L2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(fo,{size:16})}),r.jsx($2,{children:r.jsx(sm,{text:"Want me to save this as a reusable workflow?",onDone:()=>$(!0),instant:S})})]}),M&&r.jsx(T2,{children:z?r.jsx(so,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Vt,{size:14}),children:"Saved"}):r.jsx(so,{variant:"primary",size:"sm",onClick:()=>{O(!0),l(e)},children:"Save workflow"})})]}),E&&L&&r.jsx(x2,{})]})}return r.jsxs(zR,{$flat:k,"data-tone":bl(e),children:[B&&r.jsxs(w2,{children:[r.jsx(_l,{children:Z}),W&&r.jsx(b2,{children:r.jsx(Bn,{size:"md",src:ua(W.avatarSeed),name:W.title,alt:W.title})})]}),ae&&ae.length>0?r.jsx(y2,{tasks:ae}):null,r.jsxs(rh,{children:[B&&Y&&r.jsx(so,{variant:R?"secondary":"primary",size:"sm",onClick:()=>X(al),children:al}),B&&r.jsx(so,{variant:R?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),B&&r.jsx(R2,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>N(!0),children:"Other"}),B&&!G&&r.jsx(mL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":A,"data-on":A||void 0,leadingArtwork:A?r.jsx(Vt,{size:14}):r.jsx(fo,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),B&&R&&r.jsx(fL,{children:r.jsx(g2,{ref:T,compact:!0,onSend:V=>x==null?void 0:x(V),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function bR({thread:e,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:g=!1}){const x=bl(e),y=e2(e.id)||e.assessment;return r.jsxs(IR,{"data-tone":x,$expanded:i,children:[r.jsxs(ER,{$expanded:i,children:[r.jsx(Bn,{size:"md",src:Ku(e.id),name:ia[e.id],alt:ia[e.id]??""}),r.jsxs(k2,{children:[r.jsx(_2,{children:t2(e)}),y&&r.jsx(C2,{children:y})]})]}),i&&r.jsx(PR,{children:r.jsx(v2,{flat:!0,thread:e,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:g})})]})}function y2({tasks:e,interactive:a=!0}){return r.jsx(iL,{children:e.map((i,s)=>r.jsx(kR,{task:i,first:s===0,last:s===e.length-1,interactive:a},s))})}function kR({task:e,first:a,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return r.jsxs(sL,{children:[r.jsx(lL,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(cL,{})}),r.jsxs(dL,{children:[r.jsxs(uL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[r.jsx(N2,{children:e.label}),h&&r.jsx(hL,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),l&&h&&r.jsx(pL,{children:e.detail})]})]})}function _R({steps:e,completed:a}){const[i,s]=v.useState(a?e.length:1);v.useEffect(()=>{if(a){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,a]);const l=e.slice(0,i);return r.jsx(KR,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!a&&h===i-1,g=h===l.length-1;return r.jsxs(ZR,{children:[r.jsxs(XR,{children:[r.jsx(rL,{$done:!f,"aria-hidden":"true",children:f?r.jsx(oL,{children:r.jsx(gt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Vt,{size:16})}),!g&&r.jsx(JR,{})]}),r.jsxs(eL,{$last:g,children:[r.jsx(tL,{children:d.headline}),r.jsx(nL,{children:d.detail})]})]},h)})})}function CR({thread:e,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(UR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[r.jsx(gt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(VR,{children:[r.jsx(GR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(YR,{children:e.assessment})]}),r.jsx(qR,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),d&&r.jsx(_R,{steps:r2(e.id),completed:i}),!i&&!l&&r.jsx(S2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})]})}function jR({thread:e,onDecide:a}){return r.jsx(S2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})}function Ed(e,a){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:s2(a,mN(e))}}function SR(e,a){const i=s2(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function NR(e,a){const i=a2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[SR(r2(e.id),e.id),...i.slice(0,l)],h=d.length;if(a.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Ef[e.id]??[]).map(k=>Ed(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=Qu[e.id],g=[(Ef[e.id]??[]).map(w=>Ed(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>Ed(w,e.id))],x=w=>w===1&&f?f.prompt:o2[e.id]??e.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return a.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(A=>y.push({kind:"activity",milestone:A})),y.push({kind:"reply",text:vN(k)})}),{items:y,reasoningCount:h}}function MR({thread:e,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:g=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=NR(e,a),A=l||e.status==="in_progress",[_,C]=v.useState(l?Math.min(1,k):A?k:w.length),[M]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=a.length>0||x||y?w.length:k,S=e.status==="in_progress"&&a.length>0,[j,O]=v.useState(0);v.useEffect(()=>{O(0)},[_]),v.useEffect(()=>{if(_>=$)return;const q=w[_],I=w[_-1];if((q==null?void 0:q.kind)==="question"||(q==null?void 0:q.kind)==="message"){const ce=setTimeout(()=>C(me=>me+1),0);return()=>clearTimeout(ce)}if((q==null?void 0:q.kind)==="reply"){if(S)return;const ce=setTimeout(()=>C(me=>me+1),am);return()=>clearTimeout(ce)}if(S&&(I==null?void 0:I.kind)!=="message")return;const te=(I==null?void 0:I.kind)==="message"?am:Bf,fe=setTimeout(()=>C(ce=>ce+1),te);return()=>clearTimeout(fe)},[_,$,S]),v.useEffect(()=>{if(!S)return;const q=I=>{var be;if(I.key!=="t"&&I.key!=="T"||I.metaKey||I.ctrlKey||I.altKey)return;const te=I.target instanceof Element?I.target:null;if(te&&te.closest('input, textarea, [contenteditable="true"]'))return;const fe=w[_-1],ce=(fe==null?void 0:fe.kind)==="activity"?((be=fe.milestone.progress)==null?void 0:be.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&j<ce-1){O(ve=>ve+1);return}const me=w[_];(me==null?void 0:me.kind)==="activity"?(C(ve=>ve+1),O(0)):f==null||f()};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[S,_,j,f]);const R=w.slice(0,_),N=[];for(const q of R){if(q.kind==="question"){N.push({type:"question",text:q.text});continue}if(q.kind==="message"){N.push({type:"msg",text:q.text});continue}if(q.kind==="reply"){N.push({type:"reply",text:q.text});continue}const I=N[N.length-1];I&&I.type==="acts"?I.milestones.push(q.milestone):N.push({type:"acts",milestones:[q.milestone]})}const T=_<w.length,z=R.length>0&&R[R.length-1].kind==="activity",B=_>=$,[G,Z]=v.useState(!1);v.useEffect(()=>{if(!(B&&z&&(x||l)&&!y)){Z(!1);return}Z(!0);const q=setTimeout(()=>Z(!1),Bf);return()=>clearTimeout(q)},[B,z,_,x,l,y]);const F=(x||l)&&(T||G)&&z;let Y=-1;N.forEach((q,I)=>{q.type==="acts"&&(Y=I)});const ee=[];for(const q of w){if(q.kind!=="activity"){ee.push({type:"other"});continue}const I=ee[ee.length-1];I&&I.type==="acts"?I.milestones.push(q.milestone):ee.push({type:"acts",milestones:[q.milestone]})}let ae=-1;ee.forEach((q,I)=>{q.type==="acts"&&(ae=I)});const re=N.findIndex(q=>q.type==="acts"),oe=(q,I,te=I)=>{const fe=N[q],ce=(l||e.status==="in_progress")&&q===ae,me=ee[q],be=ce&&me&&me.type==="acts"?me.milestones:fe.milestones,ve=ce?fe.milestones.length-1:void 0;return r.jsx(u2,{milestones:be,focusIndex:ve,focusBeat:ce&&S?j:void 0,typingIndex:q===ae&&F?fe.milestones.length-1:void 0,collapsed:q<Y,hideActions:te,running:ce,showConnectors:q!==re,reasoning:q===re,animateIn:!I&&!M})},X=[];for(let q=0;q<N.length;q++){const I=N[q];if(I.type==="question"){X.push({kind:"question",text:I.text});continue}if(I.type==="msg"){X.push({kind:"msg",text:I.text});continue}if(I.type==="reply"){X.push({kind:"response",gi:-1,text:I.text});continue}const te=N[q+1];te&&te.type==="reply"?(X.push({kind:"response",gi:q,text:te.text}),q++):X.push({kind:"acts",gi:q})}const V=(l||e.status==="in_progress")&&Y>=0||s,E=R.length>0,L=s||x,U=(()=>{for(let q=X.length-1;q>=0;q--){const I=X[q];if(I.kind==="acts"||I.kind==="response"&&I.gi>=0)return q}return-1})(),K=X.findIndex(q=>q.kind==="question"),ie=K===re+1?K:-1,de=q=>q.kind==="acts"?Yn(N[q.gi].milestones):q.kind==="response"?Yn(q.gi>=0?N[q.gi].milestones:[]):Yn([]);return r.jsxs(r.Fragment,{children:[X.map((q,I)=>{var me,be;const te=I===U?d:null;if(q.kind==="question"){if(I===ie)return null;const ve=X[I-1],Le=!!ve&&(ve.kind==="acts"||ve.kind==="response")&&I-1!==U,Te=I===K;return r.jsxs(zd,{children:[Te?r.jsx(lm,{thread:e,saveWorkflowFlagged:g}):r.jsx(AR,{text:q.text,animate:!M}),Le&&r.jsx(Qo,{time:de(ve)})]},`q${I}`)}if(q.kind==="msg")return r.jsx($R,{messages:[q.text],animate:!M},`m${I}`);if(q.kind==="acts"){const ve=N[q.gi].milestones,Le=((me=X[I+1])==null?void 0:me.kind)==="question",Te=oe(q.gi,!1,!!te||Le),ze=I===re,Oe=te||(ze&&I+1===ie?r.jsx(lm,{thread:e,saveWorkflowFlagged:g}):null);return ze&&Oe?r.jsxs(LL,{children:[Te,Oe,r.jsx(Qo,{time:Yn(ve)})]},`a${I}`):r.jsxs(v.Fragment,{children:[Te,te&&r.jsxs(zd,{children:[te,r.jsx(Qo,{time:Yn(ve)})]})]},`a${I}`)}const fe=q.gi>=0,ce=fe?N[q.gi].milestones:[];return r.jsxs(v.Fragment,{children:[r.jsx(pu,{activity:fe?oe(q.gi,!0):void 0,text:q.text,feedbackTime:te||((be=X[I+1])==null?void 0:be.kind)==="question"?void 0:Yn(ce),showMark:!1,animateIn:!1}),te&&r.jsxs(zd,{children:[te,r.jsx(Qo,{time:Yn(ce)})]})]},`resp${I}`)}),r.jsx(RR,{messages:i,replying:s}),h&&gi.createPortal(E?r.jsxs(jL,{role:L?"status":"img","aria-label":s?"Ultron is replying":V?"Ultron is working":"Ultron",children:[r.jsxs(ML,{"aria-hidden":"true",children:[r.jsx(cm,{$show:V,children:r.jsx(gt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(cm,{$show:!V,children:r.jsx(gt,{mark:"magnetic2d",size:24,tone:"auto",state:L?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),V&&r.jsx(NL,{children:s?"Replying…":r.jsx(_M,{})})]}):null,h),U<0&&d]})}function pu({activity:e,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return r.jsxs(RL,{children:[f&&r.jsxs(AL,{$animate:h,children:[e,i,s&&r.jsx(Qo,{time:s})]}),d&&r.jsx($L,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(gt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Pd(){return[{icon:"clock",headline:"Reviewed your message"}]}function RR({messages:e,replying:a=!1}){return!e.length&&!a?null:r.jsx(CL,{children:e.map((i,s)=>i.role==="operator"?r.jsx(I2,{children:r.jsx(P2,{children:r.jsx(z2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(pu,{body:r.jsx(LR,{}),feedbackTime:Yn(Pd()),showMark:!1},s):r.jsx(pu,{activity:r.jsx(u2,{milestones:Pd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Yn(Pd()),showMark:!1},s))})}function LR(){return r.jsx(x2,{})}function x2(){return r.jsxs(Xo,{children:[r.jsxs(L2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(fo,{size:16})}),r.jsx($2,{children:"Workflow saved for future use."})]}),r.jsx(T2,{children:r.jsx(so,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(ml,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function AR({text:e,animate:a=!0}){return r.jsx(xL,{$animate:a,children:e})}function lm({thread:e,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=nh(e,0),l=Zu[e.id]??Xg(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(wL,{"data-tone":bl(e),children:[r.jsxs(w2,{children:[r.jsx(_l,{children:i}),a?r.jsx(cr,{content:"Saved as workflow",children:r.jsx(bL,{"aria-label":"Saved as workflow",children:r.jsx(fo,{size:18})})}):d&&r.jsx(b2,{children:r.jsx(Bn,{size:"md",src:ua(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(y2,{tasks:l,interactive:!1}):null]})}function $R({messages:e,animate:a=!0}){return e.length?r.jsx(kL,{children:e.map((i,s)=>r.jsx(I2,{children:r.jsx(P2,{$animate:a,children:r.jsx(z2,{children:i})})},s))}):null}const TR=m.div`
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
`,IR=m.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?Ve`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Ve`
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
`,ER=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Ve`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,PR=m.div`
  padding: var(--space-4);
`,zR=m.div`
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
  ${e=>e.$flat&&Ve`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,w2=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,b2=m.span`
  flex-shrink: 0;
  display: inline-flex;
`,OR=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,DR=m(Ee)`
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
`,FR=m.button`
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
`,k2=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,_2=m.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,C2=m.span`
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
`,BR=m.div`
  overflow: hidden;
`,WR=m.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,HR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,j2=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,UR=m.div`
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
`,qR=m.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;m(j2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const VR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,GR=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,YR=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,KR=m.div`
  display: flex;
  flex-direction: column;
`,QR=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,ZR=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${QR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,XR=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,JR=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,eL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,tL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,nL=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,rL=m.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,oL=m.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,S2=m(Ee)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,aL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,iL=m.div`
  display: flex;
  flex-direction: column;
`,ll="var(--space-8)",sL=m.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,lL=m.div`
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
`,cL=m.span`
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
`,dL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,uL=m.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${ll};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,N2=m.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,hL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,pL=m.p`
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
`,_l=m.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,M2=je`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,rh=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${M2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fL=m.div`
  animation: ${M2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,so=m(Ee)`
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
`,R2=m(Ee)`
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
`,mL=m(Ee)`
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
`,gL=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,vL=m.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Xo=m.div`
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

  ${e=>!e.$saved&&Ve`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,L2=m.div`
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
  ${Xo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Xo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Xo}[data-saved] & { color: var(--color-content-disabled); }
`,$2=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Xo}[data-saved] & { color: var(--color-content-disabled); }
`,T2=m(rh)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,yL=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,xL=m.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${yL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wL=m.div`
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
  ${N2} { color: var(--color-content-disabled); }
`,bL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,kL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,I2=m.div`
  display: flex;
  justify-content: flex-end;
`,oh=je`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,E2=je`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,_L=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,P2=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${oh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,z2=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,CL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const jL=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${E2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SL=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,NL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${SL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=m.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,cm=m.span`
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
`,RL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${kl}
`,zd=m.div`
  display: contents;
  ${kl}
`,LL=m.div`
  display: flex;
  flex-direction: column;
  ${kl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,AL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${_L} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,$L=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${E2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${oh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${oh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const TL={"Coverage Recovery":ao,"Fill Optimization":ao,Recruiting:ao,Users:ao,Attendance:jn,"Attendance Recovery":jn,"Time Off":jn,Scheduling:jn,Compliance:xi,Onboarding:io,"Payroll Operations":z0,Invoicing:Ir,Reporting:uf,"Marketplace Optimization":uf,Engagement:tl,"Autonomous Operations":pl},IL=e=>TL[e]??pl,dm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],EL=2800,PL=200,zL=6,OL=2200,ii=520;function DL({onDetectRisk:e,deckActive:a=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[f,g]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const R=setInterval(()=>l(N=>(N+1)%dm.length),EL);return()=>clearInterval(R)},[]);const y=Math.min(zL,Ds.length),[w,k]=v.useState([]),A=v.useRef(0),_=v.useRef(Ds.filter(R=>!R.risk)),C=v.useRef(Ds.filter(R=>R.risk)),M=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),S=()=>{const R=M.current,N=C.current;if(N.length>0&&R.sinceRisk>=R.gap)return R.sinceRisk=0,R.gap=$(),N[R.risk++%N.length];R.sinceRisk+=1;const T=_.current;return T.length>0?T[R.routine++%T.length]:N[R.risk++%N.length]},j=R=>R.risk?"risk":Math.random()<.28?"action":"none",O=v.useRef(null);return v.useEffect(()=>{if(Ds.length===0){k([]);return}if(a)return;M.current={routine:0,risk:0,sinceRisk:0,gap:$()},A.current=0;const R=Array.from({length:y},()=>{const z=S();return{key:A.current++,event:z,phase:"in",outcome:j(z),resolved:!0}});if(R.length>0){const z=R[R.length-1];z.resolved=!1,O.current={key:z.key,event:z.event,outcome:z.outcome}}else O.current=null;k(R);const N=[],T=setInterval(()=>{var F;const z=S(),B=A.current++,G=j(z),Z=O.current;Z&&Z.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(Z.event.id)||(h.current.add(Z.event.id),(F=d.current)==null||F.call(d,Z.event))),O.current={key:B,event:z,outcome:G},k(Y=>{const ee=Y.filter(oe=>oe.phase!=="leaving"),ae=ee.length>=y?ee[0].key:null;return[...Y.map(oe=>oe.key===ae?{...oe,phase:"leaving"}:Z&&oe.key===Z.key&&!oe.resolved?{...oe,resolved:!0}:oe),{key:B,event:z,phase:"entering",outcome:G,resolved:!1}]}),N.push(setTimeout(()=>{k(Y=>Y.map(ee=>ee.key===B?{...ee,phase:"in"}:ee))},40)),N.push(setTimeout(()=>{k(Y=>Y.filter(ee=>ee.phase!=="leaving"))},ii))},OL);return()=>{clearInterval(T),N.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,a]),r.jsxs(FL,{children:[r.jsxs(BL,{children:[r.jsx(WL,{children:r.jsx(gt,{mark:"circle",size:PL,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(HL,{children:"Ultron"}),r.jsx(UL,{role:"status","aria-live":"polite",children:r.jsxs(VL,{children:[r.jsx(GL,{children:dm[s]}),r.jsxs(YL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(QL,{children:i},"deck"):w.length>0&&r.jsx(KL,{"aria-label":"Live event feed",children:w.map(R=>{const N=IL(R.event.capability);return r.jsx(ZL,{"data-phase":R.phase,"aria-hidden":R.phase==="leaving"||void 0,children:r.jsx(XL,{children:r.jsxs(JL,{"data-outcome":R.resolved?R.outcome:"pending",children:[r.jsxs(eA,{children:[r.jsx(tA,{"aria-hidden":"true",children:r.jsx(N,{size:16})}),r.jsxs(nA,{children:[r.jsx(sA,{children:R.event.capability}),r.jsx(lA,{children:R.event.title})]})]}),r.jsx(rA,{children:R.resolved?R.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(gt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(oA,{children:"Risk detected"})]}):R.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(gt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(iA,{children:"Action required"})]}):r.jsx(aA,{children:"No action needed"}):r.jsx(gt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},R.key)})},"feed")]})}const FL=m.div`
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
`,ah=je`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,BL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${ah} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WL=m.div`
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
`,HL=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,UL=m.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,qL=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,VL=m.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${qL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,GL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,O2=je`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,YL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${O2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,KL=m.div`
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
  animation: ${ah} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,QL=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${ah} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ZL=m.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${ii}ms var(--ease-out, ease),
    opacity ${ii}ms var(--ease-out, ease),
    transform ${ii}ms var(--ease-out, ease);

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
    transition: opacity ${ii}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,XL=m.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,JL=m.div`
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
`,eA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,tA=m.span`
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
`,nA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rA=m.div`
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
    animation: ${O2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const oA=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,aA=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,iA=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,sA=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,lA=m.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,cA=5e3,dA=5,Qs=320,uA=e=>e.status==="needs_approval"||e.status==="recommended";function hA({threads:e,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:g,onClose:x}){const[y]=v.useState(()=>e.filter(uA).map((N,T)=>({t:N,index:T})).sort((N,T)=>aa[N.t.severity]-aa[T.t.severity]||N.index-T.index).slice(0,dA).map(({t:N})=>N.id)),[w,k]=v.useState(1),[A,_]=v.useState(new Set),[C,M]=v.useState(new Set),$=v.useRef(new Map);v.useEffect(()=>{if(w>=y.length)return;const N=setTimeout(()=>k(T=>T+1),cA);return()=>clearTimeout(N)},[w,y.length]),v.useEffect(()=>{const N=T=>{T.key==="Escape"&&x()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[x]),v.useEffect(()=>{const N=$.current;return()=>{N.forEach(T=>clearTimeout(T))}},[]);const S=y.findIndex(N=>!A.has(N));v.useEffect(()=>{if(y.length>0&&S===-1){const N=setTimeout(x,260);return()=>clearTimeout(N)}},[S,y.length,x]);const j=Math.max(w,S+1);v.useEffect(()=>{y.slice(0,j).forEach(N=>g==null?void 0:g(N))},[j]);const O=(N,T)=>{M(B=>new Set(B).add(N.id));const z=setTimeout(()=>{M(B=>{const G=new Set(B);return G.delete(N.id),G}),_(B=>new Set(B).add(N.id)),$.current.delete(N.id),i(N.id,T)},Qs);$.current.set(N.id,z)},R=y.length-A.size;return r.jsxs(pA,{role:"region","aria-label":"New cases",children:[r.jsxs(mA,{children:[r.jsx(qt,{children:"Needs your decision"}),r.jsx(sa,{children:R}),r.jsx(gA,{}),r.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:r.jsx(ci,{size:16})})]}),r.jsx(fA,{children:r.jsx(vA,{children:y.slice(0,j).map((N,T)=>{if(A.has(N))return null;const z=e.find(B=>B.id===N);return z?r.jsx(xA,{"data-exiting":C.has(N)||void 0,children:r.jsx(bR,{thread:z,stage:a[N]??0,expanded:T===S,onAction:(B,G)=>O(z,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(N),saved:f.includes(N)})},N):null})})})]})}const pA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,fA=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,mA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,gA=m.div`
  flex: 1;
`,vA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,yA=je`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,xA=m.div`
  animation: ${yA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Qs}ms var(--ease-out, ease),
    transform ${Qs}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Qs}ms linear;
    &[data-exiting] { transform: none; }
  }
`,wA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},um={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},bA=["new","working","done"],kA=280;function _A({threads:e,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:A,savedWorkflowIds:_,onSend:C,replyingIds:M,onStop:$,onClose:S,onDetectRisk:j,onRevealNew:O}){const[R,N]=v.useState(!1),T=()=>{R||(N(!0),window.setTimeout(()=>{N(!1),S()},kA))},[z,B]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){B(!1);return}const I=te=>{if(te.key!=="t"&&te.key!=="T"||te.metaKey||te.ctrlKey||te.altKey)return;const fe=te.target instanceof Element?te.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||B(ce=>!ce)};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[i]);const G=(I,te)=>(I.t.status==="analyzing"?1:0)-(te.t.status==="analyzing"?1:0)||aa[I.t.severity]-aa[te.t.severity]||I.index-te.index,Z=e.map((I,te)=>({t:I,index:te})).filter(({t:I})=>wA[i].includes(I.status)).sort(G).map(({t:I})=>I.id),[F,Y]=v.useState(()=>h??null),ee=v.useRef({}),ae=v.useRef(null),re=I=>{var te;I==="Other"&&((te=ae.current)==null||te.focus()),y(I)},oe=v.useRef(null),X=v.useRef(null),[W,V]=v.useState(null),E=v.useRef(void 0);v.useEffect(()=>{var I;if(E.current===void 0){E.current=h;return}!h||h===E.current||(E.current=h,Y(h),(I=ee.current[h])==null||I.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const L=bA.includes(i),U=L?h&&Z.includes(h)?h:Z[0]??null:null;v.useEffect(()=>{var Ie;const I=oe.current,te=X.current;if(!I||!te)return;const ce=((Ie=window.matchMedia)==null?void 0:Ie.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",me=160;let be=!0,ve=I.scrollHeight;const Le=()=>{be=I.scrollHeight-I.scrollTop-I.clientHeight<=me};I.addEventListener("scroll",Le,{passive:!0});let Te=0;const ze=()=>{Te=performance.now()};I.addEventListener("pointerdown",ze,{passive:!0});const Oe=new ResizeObserver(()=>{const We=I.scrollHeight,Ye=performance.now()-Te<500;We>ve+1&&be&&!Ye&&I.scrollTo({top:We,behavior:ce}),ve=We});return Oe.observe(te),()=>{I.removeEventListener("scroll",Le),I.removeEventListener("pointerdown",ze),Oe.disconnect()}},[U,i]),v.useEffect(()=>{if(!L||!U)return;const I=oe.current;if(!I)return;const te=()=>I.scrollTo({top:I.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(te),ce=[80,240,480].map(me=>window.setTimeout(te,me));return()=>{cancelAnimationFrame(fe),ce.forEach(clearTimeout)}},[U,L]);const K=U?e.find(I=>I.id===U)??null:null,ie=!!K&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(K.status)||Qg(K)),de=ie&&K?K:null,q=!(ie&&K&&["needs_approval","recommended","unresolved","monitoring"].includes(K.status))||!!(K!=null&&K.analysisResult);return i==="live"?r.jsx(hm,{$static:!0,children:r.jsx(DL,{onDetectRisk:j,deckActive:z,deck:z?r.jsx(hA,{threads:e,stageById:a,onAction:g,onRefinement:re,onSaveWorkflow:w,onToggleSaveWorkflow:A,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:O,onClose:()=>B(!1)}):null})},"live"):r.jsxs(hm,{$closing:R,children:[r.jsx(SA,{ref:oe,children:L?r.jsx(pm,{ref:X,children:U===null?r.jsx(fm,{role:"status",children:um[i]}):(()=>{const I=e.find(Le=>Le.id===U);if(!I)return null;const te=I.status==="analyzing",fe=I.status==="resolved"||I.status==="auto_resolved",ce=I.status==="in_progress",me=I.status==="needs_approval"||I.status==="recommended",be=I.status==="monitoring",ve=I.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(AA,{children:r.jsx(im,{thread:I,stage:a[I.id]??0,expanded:ce?!1:q,detachActionable:ie,detachAnalyzing:te,detachTrail:fe||ve,onToggle:()=>{},onClose:T,onDecide:f,onAction:g,onRefinement:re,onSaveWorkflow:w},I.id)}),(te||me||ce||fe||be||ve)&&r.jsx(MR,{thread:I,outbound:l[I.id]??[],chat:d[I.id]??[],replying:M.includes(I.id),analyzing:te,footSlot:W,onCompleteRun:()=>x(I.id),saveWorkflowFlagged:k.includes(I.id)||_.includes(I.id),actionCard:de&&de.id===I.id?r.jsx(v2,{thread:de,stage:a[de.id]??0,onAction:g,onRefinement:re,onSaveWorkflow:w,saveIntent:k.includes(de.id),onToggleSaveWorkflow:A,saved:_.includes(de.id),savedConversationally:(d[de.id]??[]).some(Le=>Le.kind==="workflow_saved"),onSend:Le=>C(de.id,Le),replying:M.includes(de.id),onStop:()=>$(de.id)},`action-${de.id}`):void 0},I.id)]})})()}):r.jsx(pm,{ref:X,children:Z.length===0?r.jsx(fm,{role:"status",children:um[i]}):Z.map(I=>{const te=e.find(fe=>fe.id===I);return te?r.jsx(LA,{ref:fe=>{ee.current[I]=fe},children:r.jsx(im,{thread:te,stage:a[I]??0,expanded:F===I,onToggle:()=>Y(fe=>fe===I?null:I),onDecide:f,onAction:g,onRefinement:y,onSaveWorkflow:w})},I):null})})}),L&&U&&K&&r.jsx(NA,{children:r.jsxs(MA,{children:[r.jsx(RA,{ref:V}),K.status==="analyzing"&&!s.includes(K.id)&&r.jsx(jR,{thread:K,onDecide:f}),r.jsx(g2,{ref:ae,onSend:I=>C(U,I),working:M.includes(U),onStop:()=>$(U),placeholder:DS(K.status,M.includes(U))},`composer-${U}`)]})})]},"feed")}const CA=je`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,jA=je`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,hm=m.div`
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

  ${e=>!e.$static&&!e.$closing&&Ve`
    animation: ${jA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Ve`
    animation: ${CA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SA=m.div`
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
`,NA=m.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,MA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,RA=m.div`
  display: flex;
  &:empty { display: none; }
`,pm=m.div`
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
`,LA=m.div`
  scroll-margin-top: var(--space-5);
`,AA=m.div`
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
`,fm=m.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function $A({messages:e,replying:a,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,a]);const h=s.trim().length>0&&!a,f=e.length===0,g=()=>{const x=s.trim();!x||a||(i(x),l(""))};return r.jsxs(TA,{children:[r.jsx(IA,{children:f?r.jsxs(EA,{children:[r.jsx(PA,{"aria-hidden":"true",children:r.jsx(gt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(zA,{children:"New page"}),r.jsx(OA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(DA,{children:[e.map((x,y)=>r.jsx(mm,{"data-from":x.role,children:r.jsx(FA,{"data-from":x.role,children:x.text})},y)),a&&r.jsx(mm,{"data-from":"ultron",children:r.jsxs(WA,{"aria-label":"Ultron is replying",children:[r.jsx(Od,{}),r.jsx(Od,{}),r.jsx(Od,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(HA,{children:r.jsxs(UA,{onSubmit:x=>{x.preventDefault(),g()},children:[r.jsx(qA,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),r.jsx(VA,{children:r.jsx(la,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const TA=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,IA=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,EA=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,PA=m.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,zA=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,OA=m.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,DA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,mm=m.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,FA=m.div`
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
`,BA=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,WA=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Od=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${BA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HA=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,UA=m.form`
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
`,qA=m.textarea`
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
`,VA=m.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,GA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function gm(e,a){const i=GA[e];return i?a==="done"?i.done:a==="new"?i.new:i.working:e}const fu=32;function YA({onNew:e}){return r.jsxs(KA,{children:[r.jsx(QA,{"aria-hidden":"true",children:r.jsx(gt,{mark:"circle",size:fu,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(ZA,{children:"Ultron"}),r.jsx(XA,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),e==null||e()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),e==null||e())},children:r.jsx(mo,{size:16})})]})}const KA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,QA=m.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${fu}px;
  height: ${fu}px;
`,ZA=m.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,XA=m.span`
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
`,JA=45;function e$({text:e,className:a}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},JA);return()=>clearInterval(f)},[e]);const l=i>=e.length;return r.jsxs(t$,{className:a,children:[e.slice(0,i),!l&&r.jsx(r$,{"aria-hidden":"true",children:"|"})]})}const t$=m.span`
  white-space: nowrap;
`,n$=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,r$=m.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${n$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Dd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function o$(){const e=v.useMemo(()=>["All",...Array.from(new Set(Dd.map(l=>l.tag)))],[]),[a,i]=v.useState("All"),s=a==="All"?Dd:Dd.filter(l=>l.tag===a);return r.jsx(a$,{children:r.jsxs(i$,{children:[r.jsxs(s$,{children:[r.jsx(gt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(l$,{children:[r.jsx(c$,{children:"Memory"}),r.jsx(d$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(u$,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>r.jsx(h$,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),r.jsx(p$,{children:s.map((l,d)=>r.jsx(f$,{children:r.jsxs(m$,{children:[r.jsx(g$,{children:l.title}),r.jsx(v$,{children:l.detail})]})},d))})]})})}const a$=m.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,i$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,s$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,l$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,c$=m.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,d$=m.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,u$=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,h$=m.button`
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
`,p$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,f$=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,m$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,g$=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,v$=m.span`
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
`;const mu=[{id:"employees",label:"Employees",icon:r.jsx(ao,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(jn,{size:16})},{id:"locations",label:"Locations",icon:r.jsx($u,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(io,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(xi,{size:16})}];m.div`
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
`;function y$({collectionId:e}){const a=mu.find(i=>i.id===e)??mu[0];return r.jsxs(x$,{children:[r.jsxs(w$,{children:[r.jsx(b$,{children:a.label}),r.jsx(sa,{children:"Account database"})]}),r.jsxs(k$,{role:"status",children:[r.jsx(_$,{"aria-hidden":"true",children:r.jsx(T0,{size:24})}),r.jsxs(C$,{children:[a.label," — demo stub"]}),r.jsxs(j$,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const x$=m.div`
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
`,w$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,b$=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,k$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,_$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,C$=m.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,j$=m.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,vm=72,ym=.58;function Cn(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function xm(e,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),g=parseInt(f.length===3?f.split("").map(x=>x+x).join(""):f,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const S$=e=>{const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function D2({links:e=0}){const a=v.useRef(null),i=v.useRef(0),s=v.useRef(e);return s.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let f=0,g=0;const x=()=>{f=l.clientWidth,g=l.clientHeight,l.width=Math.max(2,Math.round(f*h)),l.height=Math.max(2,Math.round(g*h)),d.setTransform(h,0,0,h,0,0)};x();const y=new ResizeObserver(x);y.observe(l);const w=xm(d,l,"--color-bg-primary","255,255,255"),k=S$(w)<.5,A=xm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:vm},(R,N)=>{const T=N%3===0,z=T?1-.5*Math.pow(Cn(N*3.1),1.6):Cn(N*3.1),B=T?.5*Math.pow(Cn(N*5.7),1.6):Cn(N*5.7);return{bx:z,by:B,vx:(Cn(N*7.3)-.5)*.008,vy:(Cn(N*9.9)-.5)*.008,wA:6+Cn(N*4.7)*10,wS:.25+Cn(N*6.1)*.5,wP:Cn(N*8.2)*6.2832,r:.8+Cn(N*2.3)*1.6,twS:.8+Cn(N)*1.4,twP:Cn(N*11.4)*6.2832}}),C=(R,N)=>{const T=((R.bx+R.vx*N)%1+1)%1,z=((R.by+R.vy*N)%1+1)%1,B=T-.5,G=Math.abs(B)*2,Z=G<1e-4?1:(ym+(1-ym)*G)/G;return{x:(.5+B*Z)*f+Math.cos(N*R.wS+R.wP)*R.wA,y:z*g+Math.sin(N*R.wS*.8+R.wP)*R.wA}},M=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),$=R=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,f,g);const N=_.map(T=>C(T,R));for(let T=0;T<vm;T++){const z=_[T],B=.35+.65*(.5+.5*Math.sin(R*z.twS+z.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+A+","+B*G*(k?.55:.42)+")",d.beginPath(),d.arc(N[T].x,N[T].y,z.r*(.7+.3*B),0,6.2832),d.fill()}};if(M)return i.current=s.current,$(1.15),()=>y.disconnect();$(1.15);let S=0;const j=performance.now(),O=R=>{$(1.15+(R-j)/1e3),S=requestAnimationFrame(O)};return S=requestAnimationFrame(O),()=>{cancelAnimationFrame(S),y.disconnect()}},[]),r.jsx(N$,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const N$=m.div`
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
`,M$=m.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Fs=m.div`
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
`,wm=.025,Ja=560,ei=480,R$=260,L$=.08,A$=.18,$$=.06,T$=350,I$=9,Zs=5,bm=360,E$=560,P$=.055,z$=.03,ti=320,O$=.84,gu=Zs+1,Xs=[];for(let e=0;e<gu;e++)for(let a=e+1;a<gu;a++)Xs.push([e,a]);const km=(e,a)=>(e*I$+80*Math.sin(e*.23+a)+50*Math.sin(e*.071+a*1.7)+720)%360,Bs=(e,a)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+a)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},_m=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),Fd=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function F2(){const e=v.useRef(null),a=v.useRef(null),i=v.useRef([]),s=v.useRef([]),l=v.useRef([]);return v.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),h=e.current,f=a.current;if(!h||!f)return;const g=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,y=Array.from({length:Zs},()=>({size:bm+Math.random()*(E$-bm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));y.forEach((T,z)=>{const B=s.current[z];B&&(B.style.width=`${T.size.toFixed(0)}px`,B.style.height=`${T.size.toFixed(0)}px`)});const w=(T,z,B)=>{T.style.setProperty("--glow-a",`hsl(${km(z,g[0]+B).toFixed(1)} 85% 62% / 0.9)`),T.style.setProperty("--glow-b",`hsl(${km(z,g[1]+B*1.3).toFixed(1)} 85% 58% / 0.8)`),T.style.setProperty("--glow-cx",`${(35+14*Math.sin(z*.4+g[2]+B)).toFixed(1)}%`),T.style.setProperty("--glow-cy",`${(35+14*Math.cos(z*.31+g[3]+B)).toFixed(1)}%`)},k=(T,z,B)=>{const G=new Array(gu).fill(null);for(let Z=0;Z<Zs;Z++){const F=y[Z],Y=s.current[Z];if(!Y)continue;const ee=z*(.5+F.ax*(.68*Math.sin(T*F.sx1+F.px1)+.32*Math.sin(T*F.sx2+F.px2))),ae=B*(.5+F.ay*(.68*Math.sin(T*F.sy1+F.py1)+.32*Math.sin(T*F.sy2+F.py2))),re=P$+z$*(.5+.5*Math.sin(T*F.bs+F.bp));Y.style.transform=`translate(${(ee-F.size/2).toFixed(1)}px, ${(ae-F.size/2).toFixed(1)}px)`,Y.style.opacity=re.toFixed(3),Y.style.borderRadius=Bs(T,F.mp),w(Y,T,F.cs),G[Z+1]={x:ee,y:ae,size:F.size,o:re}}return G},A=(T,z)=>{for(let B=0;B<Xs.length;B++){const G=l.current[B];if(!G)continue;const[Z,F]=Xs[B],Y=z[Z],ee=z[F],ae=Y&&ee?Math.min(Y.o,ee.o):0;if(!Y||!ee||ae<=.005){G.style.opacity="0";continue}const re=ee.x-Y.x,oe=ee.y-Y.y,X=Math.hypot(re,oe),W=(Y.size+ee.size)/2*O$,V=_m(1-X/W);if(V<=.001){G.style.opacity="0";continue}const E=Math.max(.35,X*.9/ti),L=.3+.4*V;G.style.transform=`translate(${((Y.x+ee.x)/2-ti/2).toFixed(1)}px, ${((Y.y+ee.y)/2-ti/2).toFixed(1)}px) rotate(${Math.atan2(oe,re).toFixed(3)}rad) scale(${E.toFixed(3)}, ${L.toFixed(3)})`,G.style.opacity=(ae*V).toFixed(3),G.style.borderRadius=Bs(T,1.1*(B+1)),w(G,T,.23*(B+1))}};if(d){const z=k(2.4,h.clientWidth,h.clientHeight);A(2.4,z);return}let _=null,C=null,M=-1/0,$=0,S=0,j=0;const O=T=>{const z=h.getBoundingClientRect(),B=_===null;_=T.clientX-z.left,C=T.clientY-z.top,M=T.timeStamp,B&&($=_,S=C)};window.addEventListener("pointermove",O,{passive:!0});let R=0;const N=T=>{R=requestAnimationFrame(N);const z=T/1e3,B=h.clientWidth,G=h.clientHeight,Z=k(z,B,G);if(_!==null&&C!==null){$+=(_-$)*wm,S+=(C-S)*wm;const F=T-M<T$?A$:L$;j+=(F-j)*$$,f.style.transform=`translate(${$-Ja/2}px, ${S-Ja/2}px)`,f.style.opacity=j.toFixed(3),f.style.borderRadius=Bs(z,0),w(f,z,0),Z[0]={x:$,y:S,size:Ja,o:j};for(let Y=0;Y<Fd.length;Y++){const ee=i.current[Y];if(!ee)continue;const{nx:ae,ny:re}=Fd[Y],oe=ae<0?$:ae>0?B-$:re<0?S:G-S,X=_m(1-oe/R$);if(X<=.001){ee.style.opacity="0";continue}const W=ae!==0?ae<0?0:B:$,V=re!==0?re<0?0:G:S,E=ei*(.5-.22*X),L=.55+.45*X;ee.style.transform=`translate(${W+ae*E-ei/2}px, ${V+re*E-ei/2}px) scale(${L.toFixed(3)})`,ee.style.opacity=(j*X).toFixed(3),ee.style.borderRadius=Bs(z,.9*(Y+1)),w(ee,z,.35*(Y+1))}}A(z,Z)};return R=requestAnimationFrame(N),()=>{cancelAnimationFrame(R),window.removeEventListener("pointermove",O)}},[]),r.jsxs(M$,{ref:e,"aria-hidden":"true",children:[Xs.map((d,h)=>r.jsx(Fs,{ref:f=>{l.current[h]=f},style:{width:ti,height:ti,opacity:0}},`bridge-${h}`)),Array.from({length:Zs},(d,h)=>r.jsx(Fs,{ref:f=>{s.current[h]=f},style:{opacity:0}},`ambient-${h}`)),Fd.map((d,h)=>r.jsx(Fs,{ref:f=>{i.current[h]=f},style:{width:ei,height:ei,opacity:0}},h)),r.jsx(Fs,{ref:a,style:{width:Ja,height:Ja,opacity:0}})]})}function B2({size:e=22,className:a}){return r.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Dr=Ve`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,W2=Ve`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Ve`
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
`;const D$="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",F$="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",B$="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",W$="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",H$="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",U$="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",q$="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",V$=560,H2=320,Ci="cubic-bezier(0.22, 1, 0.36, 1)",U2=140,q2={landing:0,workplace:20,loading:40,questions:58},ni=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:E0,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:G0,title:"1099",caption:"Independent contractors."},{id:"both",icon:P0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:jn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:z0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:V0,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Tu,title:"One location",caption:"A single site."},{id:"multi",icon:Iu,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:$u,title:"Client sites",caption:"Out at client locations."}]}];function G$({onComplete:e}){const[a,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[f,g]=v.useState(!1),x=Cl(),y=v.useRef(null),w=v.useCallback(R=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{R(),g(!1),y.current=null},x?0:H2))},[x]);v.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),A=()=>w(()=>i("workplace")),_=R=>{l(N=>({...N,...R})),h(!0),w(()=>i("loading"))},C=R=>{const N={...s,...R};if(l(N),N.companyWebsite){e(N);return}w(()=>i("questions"))},M=R=>e({...s,...R}),$=d?1:a==="landing"?0:.4,[S,j]=v.useState(!1),O=S;return r.jsxs(yT,{children:[r.jsx(D2,{links:$}),r.jsx(F2,{}),r.jsx(xT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:r.jsx(B2,{size:22})}),r.jsx(wT,{children:r.jsxs(bT,{children:[a!=="landing"&&r.jsx(kT,{children:r.jsx(V2,{children:r.jsx(gt,{mark:O?"lines":"magnetic",size:U2,tone:"auto",state:"active",motionSpeed:O?1.7:1,cellCount:q2[a],"aria-label":"Ultron"})})}),r.jsxs(CT,{$exiting:f,children:[a==="landing"&&r.jsx(rT,{onNext:A}),a==="workplace"&&r.jsx(jl,{children:r.jsx(iT,{onAnswer:_})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(lT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:C,onProcessingChange:j}),a==="questions"&&r.jsx(fT,{onComplete:M})]})]})})]})}const Y$="Lead the work that matters.",K$="Show us your company and we'll set up the work.",Q$=41e3,Cm=[{name:"Levi's Stadium",src:D$},{name:"ProCare HR",src:F$},{name:"Florida Panthers",src:B$},{name:"Express Healthcare",src:W$},{name:"ModSquad",src:H$},{name:"Titan Medical Group",src:U$},{name:"United Staffing Solutions",src:q$}],jm=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],Z$=6e3;function X$(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function J$(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function eT(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const tT=[{id:"google",label:"Continue with Google",mark:X$},{id:"microsoft",label:"Continue with Microsoft",mark:J$},{id:"apple",label:"Continue with Apple",mark:eT}];function nT(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function rT({onNext:e}){const[a,i]=v.useState(!1),[s,l]=v.useState(""),[d,h]=v.useState(null),f=v.useRef(null),g=Cl();return v.useEffect(()=>{const x=window.setTimeout(()=>i(!0),g?0:500);return()=>window.clearTimeout(x)},[g]),v.useEffect(()=>{var x;d&&((x=f.current)==null||x.focus())},[d]),r.jsxs(jT,{children:[r.jsx(NT,{children:r.jsxs(MT,{children:[r.jsx(V2,{children:r.jsx(gt,{mark:"magnetic",size:U2,tone:"auto",state:"active",cellCount:q2.landing,"aria-label":"Ultron"})}),r.jsx(aI,{children:Y$}),a&&r.jsxs(RT,{children:[r.jsx(iI,{children:K$}),r.jsxs(LT,{"aria-label":"Get started",children:[r.jsx(AT,{children:tT.map(x=>{const y=x.mark;return r.jsx($T,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(y,{}),onClick:e,children:x.label},x.id)})}),r.jsx(TT,{"aria-hidden":"true",children:r.jsx(IT,{children:"or start with email"})}),r.jsxs(ET,{noValidate:!0,onSubmit:x=>{x.preventDefault(),s.trim()===""||nT(s)?e():h({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(cr,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:r.jsx(zT,{ref:f,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:x=>{l(x.target.value),d&&h(null)}})}),r.jsx(PT,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),r.jsx(OT,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),r.jsx(ST,{"aria-hidden":"true"}),a&&r.jsx(oT,{})]})}function oT(){const[e,a]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>a(l=>(l+1)%jm.length),Z$);return()=>clearInterval(s)},[]);const i=jm[e];return r.jsx(DT,{children:r.jsxs(FT,{children:[r.jsx(aT,{}),r.jsxs(JT,{children:[r.jsx(eI,{children:`“${i.quote}”`}),r.jsxs(tI,{children:[r.jsx(Bn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),r.jsxs(nI,{children:[r.jsx(rI,{children:i.name}),r.jsx(oI,{children:`${i.role} · ${i.org}`})]})]})]},e),r.jsxs(YT,{children:[r.jsx(KT,{children:"Trusted by frontline operators"}),r.jsxs(ZT,{"aria-label":"Operators using Teambridge",children:[r.jsx(Sm,{children:Cm.map(s=>r.jsx(Nm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),r.jsx(Sm,{"aria-hidden":"true",children:Cm.map(s=>r.jsx(Nm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function aT(){const e=vT(Q$,1600);return r.jsxs(BT,{children:[r.jsxs(WT,{children:[r.jsx(UT,{"aria-hidden":"true"}),r.jsx(qT,{children:"Ultron Index · Live"})]}),r.jsx(VT,{children:e.toLocaleString("en-US")}),r.jsx(GT,{children:"pieces of work Ultron performed this week"})]})}function iT({onAnswer:e}){const[a,i]=v.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&e(mT(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(Sl,{children:"Where do you work?"}),r.jsx(cI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),r.jsx(K2,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(Q2,{children:[r.jsx(KI,{"aria-hidden":"true",children:r.jsx(Eu,{size:18})}),r.jsx(Z2,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(X2,{children:r.jsx(la,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(QI,{children:r.jsx(J2,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Bd=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],sT=820;function lT({website:e,failedWebsite:a,onDone:i,onProcessingChange:s}){return e?r.jsx(dT,{website:e,onDone:i,onProcessingChange:s}):r.jsx(pT,{failedWebsite:a,onDone:i})}const cT=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function dT({website:e,onDone:a,onProcessingChange:i}){const{name:s,host:l}=gT(e),d=Bd.length,[h,f]=v.useState(1),[g,x]=v.useState(!1);v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const y=v.useMemo(()=>SS(e),[e]),w=v.useMemo(()=>cT.reduce((A,_)=>A+y[_].length,0),[y]);v.useEffect(()=>{const A=_=>{_.key.toLowerCase()==="t"&&(_.preventDefault(),g?a({}):h>=d?x(!0):f(C=>Math.min(C+1,d)))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[h,g,d,a]);const k=Bd[h-1];return r.jsxs(jl,{$wide:!0,children:[r.jsx(Sl,{children:g?"Nearly there!":`Turning on ${s}`}),r.jsx(Nl,{children:g?"Your free account is taking shape.":"Hang tight — I'm reading your site and getting your workspace ready."}),r.jsxs(yI,{role:"status","aria-live":"polite",children:[r.jsxs(kI,{$running:!g,children:[r.jsx(Eu,{size:14}),l,r.jsx(_I,{"aria-hidden":"true",children:"·"}),g?r.jsxs(CI,{children:[r.jsx(mn,{size:13})," read ",w," signals"]}):r.jsx(jI,{children:`${k}…`},k)]}),r.jsx(xI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:Bd.map((A,_)=>{const C=g||_+1<h?"done":_+1===h?"working":"pending";return r.jsx(wI,{"data-status":C,children:C!=="pending"&&r.jsx(bI,{$working:C==="working"})},A)})})]}),r.jsx(uT,{learned:y,loading:!g}),g&&r.jsxs(r.Fragment,{children:[r.jsx(BI,{children:r.jsx(Ee,{variant:"primary",size:"lg",onClick:()=>a({}),trailingArtwork:r.jsx(N0,{size:18}),children:"Looks good, continue"})}),r.jsx(WI,{children:r.jsx(J2,{type:"button",onClick:()=>{f(1),x(!1)},children:"Start over"})})]})]})}function uT({learned:e,loading:a}){const{company:i}=e;return r.jsxs(NI,{children:[r.jsxs(MI,{children:[r.jsxs(RI,{children:[r.jsx(LI,{"aria-hidden":"true",children:a?r.jsx(en,{$w:"20px",$h:"20px",$round:!0}):r.jsx(Iu,{size:20})}),r.jsx(AI,{children:a?r.jsxs(r.Fragment,{children:[r.jsx(en,{$w:"240px",$h:"1em"}),r.jsx(en,{$w:"160px",$h:"0.85em"})]}):r.jsxs(r.Fragment,{children:[r.jsx($I,{children:e.workforce_type}),r.jsx(TI,{children:i.name})]})})]}),r.jsx(II,{children:a?r.jsxs(r.Fragment,{children:[r.jsx(en,{$w:"110px",$h:"0.9em"}),r.jsx(en,{$w:"150px",$h:"0.9em"}),r.jsx(en,{$w:"170px",$h:"0.9em"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(Wd,{children:[r.jsx(jn,{size:14}),r.jsxs(Hd,{children:["Founded ",i.founded]})]}),i.parent&&r.jsxs(Wd,{children:[r.jsx(Tu,{size:14}),r.jsxs(Hd,{children:["Part of ",i.parent]})]}),r.jsxs(Wd,{children:[r.jsx(Cu,{size:14}),r.jsx(Hd,{children:i.footprint})]})]})})]}),e.narrative.map((s,l)=>r.jsx(EI,{style:{"--group-i":l+1},children:a?r.jsxs(r.Fragment,{children:[r.jsx(en,{$w:"128px",$h:"0.95em"}),r.jsxs(SI,{children:[r.jsx(en,{$h:"0.85em"}),r.jsx(en,{$h:"0.85em"}),r.jsx(en,{$h:"0.85em",$w:"62%"})]}),r.jsxs(Mm,{children:[r.jsx(en,{$w:"76px",$h:"20px",$round:!0}),r.jsx(en,{$w:"92px",$h:"20px",$round:!0}),r.jsx(en,{$w:"64px",$h:"20px",$round:!0})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(PI,{children:s.label}),r.jsx(zI,{children:s.body}),r.jsx(Mm,{children:s.tags.map(d=>r.jsx(Sn,{size:"sm",variant:"subtle",color:"neutral",children:d},d))})]})},s.label)),r.jsx(OI,{style:{"--group-i":e.narrative.length+1},children:a?r.jsx(en,{$w:"152px",$h:"0.95em"}):r.jsx(DI,{children:"Consider it handled."})})]},a?"readout-loading":"readout-ready")}const hT=[{icon:U0,label:"Travel nurses"},{icon:Au,label:"Event staff"},{icon:Nu,label:"Security guards"},{icon:O0,label:"Warehouse temps"}];function pT({failedWebsite:e,onDone:a}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&a({workforceType:h})};return r.jsxs(jl,{children:[e&&r.jsx(FI,{children:"No problem — let's set it up together."}),r.jsx(Sl,{children:"What workforce do you need help with?"}),r.jsx(Nl,{children:"Say it in your own words — or grab one of these."}),r.jsx(dI,{children:hT.map(({icon:h,label:f})=>r.jsxs(uI,{type:"button",onClick:()=>a({workforceType:f}),children:[r.jsx(h,{size:16}),f]},f))}),r.jsx(K2,{onSubmit:h=>{h.preventDefault(),d()},children:r.jsxs(Q2,{children:[r.jsx(Z2,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),r.jsx(X2,{children:r.jsx(la,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function fT({onComplete:e}){const a=Cl(),[i,s]=v.useState(0),l=v.useRef({}),d=ni[i],h=f=>{l.current={...l.current,[d.key]:f.title};const g=i+1;g>=ni.length?e(l.current):s(g)};return r.jsxs(jl,{children:[r.jsx(HI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ni.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ni.length}`,children:ni.map((f,g)=>r.jsx(UI,{"data-filled":g<=i||void 0},f.key))}),r.jsx(Sl,{children:d.prompt}),r.jsx(Nl,{children:d.sub}),r.jsx(qI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,g)=>{const x=f.icon;return r.jsxs(VI,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${g*70}ms`},onClick:()=>h(f),children:[r.jsx(G2,{"aria-hidden":"true",children:r.jsx(x,{size:20})}),r.jsxs(GI,{children:[r.jsx(hI,{children:f.title}),r.jsx(pI,{children:f.caption})]})]},f.id)})})]},d.key)}function mT(e){const a=e.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function gT(e){const a=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function vT(e,a){const i=Cl(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/a),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,a,i]),s}function Cl(){const[e,a]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const yT=m.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,xT=m.button`
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
`,wT=m.main`
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
`,bT=m.div`
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
  ${e=>e.$augment&&Ve`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,kT=m.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,V2=m.span`
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
`,_T=je`
  from { opacity: 1; }
  to   { opacity: 0; }
`,CT=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Ve`
      animation: ${_T} ${H2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&Ve`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,ST=m.div`
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
`,NT=m.div`
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
`,MT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,ih=je`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,RT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${ih} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,LT=m.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,AT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,$T=m(Ee)`
  && {
    width: 100%;
    ${Dr}
  }
`,TT=m.div`
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
`,IT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,ET=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,PT=m(Ee)`
  && {
    width: 100%;
  }
`,zT=m(ag)`
  && [class*='shell'] {
    ${Dr}
  }
  && input {
    background: transparent;
  }
`,OT=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,DT=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${ih} var(--duration-slow) var(--ease-out) both;

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
`,FT=m.div`
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
`,BT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,WT=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,HT=je`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,UT=m.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${HT} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,VT=m.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,GT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,YT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,KT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,QT=je`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,ZT=m.div`
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
`,Sm=m.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${QT} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Nm=m.img`
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
`,XT=je`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,JT=m.figure`
  ${Dr}
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
  animation: ${XT} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,eI=m.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,tI=m.figcaption`
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
`,nI=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,rI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,oI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,aI=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${ih} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,sI=je`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,jl=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${sI} ${V$}ms ${Ci} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Sl=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,Nl=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,lI=je`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,cI=m(Nl)`
  animation: ${lI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dI=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,uI=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Dr}
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
    ${W2}
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
`,G2=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,hI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,pI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,Y2=je`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,fI=je`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,mI=je`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,gI=je`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,vI=je`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,yI=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,xI=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Ve`
    & > * > * {
      animation: ${vI} 900ms ${Ci};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,wI=m.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,bI=m.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Ve`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${gI} ${sT+380}ms ${Ci} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,kI=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,_I=m.span`
  color: var(--color-content-tertiary);
`,CI=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,jI=m.span`
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--color-content-disabled) 0%,
    var(--color-content-secondary) 50%,
    var(--color-content-disabled) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${fI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    color: var(--color-content-tertiary);
    background: none;
    animation: none;
  }
`,en=m.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$w??"100%"};
  height: ${e=>e.$h??"0.9em"};
  border-radius: ${e=>e.$round?"var(--radius-full)":"var(--radius-sm)"};
  /* Wide, soft highlight so the sweep reads as a smooth sheen rather than a
     hard band; paired with skeletonSweep it moves at a constant speed and loops
     seamlessly (no blink). */
  background: linear-gradient(
    90deg,
    var(--color-bg-tertiary) 0%,
    var(--color-bg-tertiary) 30%,
    var(--color-border-opaque) 50%,
    var(--color-bg-tertiary) 70%,
    var(--color-bg-tertiary) 100%
  );
  background-size: 200% 100%;
  animation: ${mI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: var(--color-bg-tertiary);
    animation: none;
  }
`,SI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,NI=m.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,sh=Ve`
  animation: ${Y2} var(--duration-base) ${Ci} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MI=m.div`
  ${Dr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${sh}
`,RI=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,LI=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
`,AI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,$I=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,TI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,II=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,Wd=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Hd=m.span`
  color: var(--color-content-primary);
`,EI=m.div`
  ${Dr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${sh}
`,PI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,zI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Mm=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,OI=m.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${sh}
`,DI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,FI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,BI=m.div`
  margin-top: var(--space-5);
`,WI=m.div`
  margin-top: var(--space-3);
`,HI=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,UI=m.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,qI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,VI=m.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Dr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Y2} var(--duration-base) ${Ci} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${G2} {
    margin-bottom: 0;
  }

  &:hover {
    ${W2}
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
`,GI=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,K2=m.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Dr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Q2=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,YI=je`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,KI=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${YI} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Z2=m.textarea`
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
`,X2=m(Ru)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,QI=m.div`
  margin-top: var(--space-3);
`,J2=m.button`
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
`;function ZI({onEnterApp:e}){return r.jsx(G$,{onComplete:a=>e==null?void 0:e(a)})}const XI=768,JI=`(max-width: ${XI-1}px)`;function lh(e){const[a,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),a}function eE(){return lh(JI)}const tE="48px",nE="240px",Rm="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",rE=m.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?nE:tE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Ve`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Ve`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,oE=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,aE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,iE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,sE=m.button`
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
`,lE=m.div`
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
`,cE=m.span`
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
`,Lm=m.div`
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
`,Ud=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dE="var(--gradient-ai)",ev=m.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Ve`
      background: var(--color-bg-primary, white);
      box-shadow: ${Rm}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Ve`
      background: ${dE};
      box-shadow: ${Rm}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,tv=m.button`
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
`,nv=m.span`
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
`,rv=m.div`
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
`,uE=m.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,qd=m.hr`
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
`;const hE=m.button`
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
`,pE=m.div`
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
`,fE=m.span`
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
`;function Vd({item:e,isExpanded:a,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return r.jsx(ev,{$isActive:l,$isAi:s,children:r.jsxs(tv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:e.onClick,"aria-current":l?"page":void 0,title:a?void 0:e.label,children:[r.jsxs(rv,{children:[e.hasUnread&&r.jsx(uE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),a&&r.jsx(nv,{children:e.label}),a&&i&&r.jsx(sa,{variant:"primary",children:"New"})]})})}function mE({items:e,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}){const[y,w]=v.useState(!1);return r.jsx(rE,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:r.jsxs(oE,{$isExpanded:y,children:[r.jsxs(aE,{children:[r.jsxs(sE,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[r.jsx(lE,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(cE,{children:s.name}),r.jsx(Lm,{children:r.jsx(If,{})})]})]}),r.jsx(Ud,{children:e.map(k=>r.jsx(Vd,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(qd,{}),r.jsx(Ud,{children:a.map(k=>r.jsx(Vd,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),r.jsxs(iE,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(qd,{}),r.jsx(Ud,{children:i.map(k=>r.jsx(Vd,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),r.jsx(qd,{}),r.jsx(ev,{$isActive:!1,children:r.jsxs(tv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(rv,{children:r.jsx(eN,{})}),y&&r.jsx(nv,{children:"Settings"})]})}),r.jsxs(hE,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(pE,{$color:l.avatarColor,children:l.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(fE,{children:l.name}),r.jsx(Lm,{children:r.jsx(If,{})})]})]})]})]})})}const gE=270,vE=m.nav`
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
`,yE=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,xE=m.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,wE=m.h2`
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
`,bE=m.div`
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
`,kE=m.button`
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
`,_E=m.div`
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
`,CE=m.button`
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
`;const jE=m.span`
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
`,SE=m.div`
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
`,NE=je`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ME=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${NE} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Am=m.button`
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
`,RE=m.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Ve`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,LE=m.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,AE=m.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$E=m.div`
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
`,TE=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,IE=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,EE=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,ov=m.div`
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
`;function av(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function PE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const ch={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function zE({item:e}){return r.jsx(fn,{label:r.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:r.jsx(ov,{children:e.icon??r.jsx(av,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:ch})}function OE({group:e}){const[a,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-f.length;return r.jsxs(RE,{$outlined:e.outlined,children:[r.jsxs(CE,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(SE,{children:a?r.jsx(Nn,{size:16}):r.jsx(gn,{size:16})}),r.jsx(jE,{children:e.label}),e.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),a&&r.jsxs(ME,{children:[f.map(x=>r.jsx(fn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(ov,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:ch},x.id)),g>0&&r.jsxs(Am,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&r.jsx(Am,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function DE({heading:e,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=gE,onWidthChange:k,minWidth:A=220,maxWidth:_=520}){const C=y!==void 0,M=v.useRef(null),[$,S]=v.useState(!1);return v.useEffect(()=>{if(!$||!k)return;const j=M.current;if(!j)return;const O=j.getBoundingClientRect().left,R=z=>{const B=Math.min(_,Math.max(A,z.clientX-O));k(B)},N=()=>S(!1);window.addEventListener("mousemove",R),window.addEventListener("mouseup",N);const T=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",N),document.body.style.userSelect=T,document.body.style.cursor=""}},[$,k,A,_]),r.jsxs(vE,{ref:M,$isVisible:a,$width:w,$isResizing:$,"aria-label":"Secondary navigation",children:[r.jsxs(yE,{children:[(e||x)&&r.jsxs(xE,{children:[r.jsx(wE,{children:e}),x]}),d&&!C&&r.jsxs(bE,{children:[r.jsx(og,{size:"sm",placeholder:"Search...",value:h,onChange:j=>f==null?void 0:f(j.target.value)}),r.jsx(kE,{onClick:g,"aria-label":"Filter",children:r.jsx(PE,{})})]})]}),C?y:r.jsxs(_E,{children:[s,i.map(j=>j.type==="single"?r.jsx(zE,{item:j.item},j.item.id):j.type==="group"?r.jsx(OE,{group:j.group},j.group.id):j.type==="divider"?r.jsx(IE,{},j.id):r.jsx(LE,{children:j.label.label},j.label.id))]}),l.length>0&&r.jsxs(AE,{children:[r.jsx(TE,{}),l.map(j=>r.jsx(fn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:r.jsx(EE,{children:j.icon??r.jsx(av,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:ch},j.id))]}),k&&a&&r.jsx($E,{$isResizing:$,onMouseDown:j=>{j.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const FE=m.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,BE=m.div`
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
`,iv=m.div`
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
`,WE=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,HE=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function UE(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function $m(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Tm(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function qE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function VE({heading:e,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const g=a.filter(w=>w.variant==="secondary"),x=a.filter(w=>w.variant==="primary"),y=lh("(prefers-color-scheme: dark)");return r.jsxs(FE,{$noBorder:l,children:[r.jsx(BE,{children:typeof e=="string"?r.jsx(iv,{children:e}):e}),r.jsxs(WE,{children:[r.jsxs(HE,{children:[r.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(UE,{})}),g.map(w=>r.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Tm,{}),trailingArtwork:r.jsx($m,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>r.jsx(Ee,{variant:"primary",size:"sm",leadingArtwork:r.jsx(Tm,{}),trailingArtwork:r.jsx($m,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&r.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(qE,{})}),s&&r.jsx(m0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const GE=m.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,YE=m.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,KE=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,QE=m.main`
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
`,Im="tb:secondary-nav-width",Em=270,Pm=220,zm=520;function ZE({items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:A,showSearch:_,searchValue:C,onSearchChange:M,onFilterClick:$,headerSlot:S,bodyContent:j,heading:O,actions:R,showActivityButton:N,showPonderButton:T,noBorder:z,onActivityClick:B,onPonderClick:G,onDotsClick:Z,children:F,showSecondaryNav:Y=!0,showTopNav:ee=!0}){const[ae,re]=v.useState(()=>{if(typeof window>"u")return Em;const oe=window.localStorage.getItem(Im),X=oe?parseInt(oe,10):NaN;return Number.isFinite(X)?Math.min(zm,Math.max(Pm,X)):Em});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Im,String(ae))},[ae]),r.jsxs(GE,{children:[r.jsx(mE,{items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}),r.jsxs(YE,{children:[Y&&r.jsx(DE,{heading:y,menuEntries:w,menuHeader:k,pageEntries:A,isVisible:!0,showSearch:_,searchValue:C,onSearchChange:M,onFilterClick:$,headerSlot:S,bodyContent:j,width:ae,onWidthChange:re,minWidth:Pm,maxWidth:zm}),r.jsxs(KE,{children:[ee&&r.jsx(VE,{heading:O,actions:R,showActivityButton:N,showPonderButton:T,noBorder:z,onActivityClick:B,onPonderClick:G,onDotsClick:Z}),r.jsx(QE,{children:F})]})]})]})}function XE({deadZonePx:e=8,topThresholdPx:a=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const y=h(),w=y-d.current;Math.abs(w)<e||(w>0&&y>a?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",f,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",f)}},[e,a,i]),s}const JE=m.button`
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
`,eP=m.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,tP=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Gd({label:e,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(JE,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(eP,{children:e}),r.jsx(tP,{children:r.jsx(Nn,{size:14})})]})}const nP=m.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,rP=m.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,Om=m.button`
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
`,oP=m.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Dm=m.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,aP=m.button`
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
`;function iP({size:e=18}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const sP=v.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,user:d,hidden:h,onHamburgerClick:f,onPrimaryClick:g,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:w,onUserClick:k},A){return r.jsx(nP,{ref:A,$hidden:h,children:r.jsxs(rP,{children:[r.jsx(Om,{onClick:f,"aria-label":"Open navigation",children:r.jsx(iP,{size:18})}),r.jsxs(oP,{children:[r.jsx(Gd,{label:a,isOpen:l==="primary",onClick:g,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(Dm,{"aria-hidden":"true",children:"›"}),r.jsx(Gd,{label:i,isOpen:l==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(Dm,{"aria-hidden":"true",children:"›"}),r.jsx(Gd,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(Om,{onClick:w,"aria-label":"Search",children:r.jsx(Lu,{size:18})}),r.jsx(aP,{onClick:k,$color:d.avatarColor,"aria-label":`User: ${d.name}`,children:d.initials})]})})}),lP=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,cP=m.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${lP} 160ms ease-out;
`;function dP({onDismiss:e}){return v.useEffect(()=>{const a=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[e]),r.jsx(cP,{onClick:e,"aria-hidden":"true"})}const uP=je`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,hP=m.div`
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
  animation: ${uP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,pP=m.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,fP=m.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,mP=m.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,gP=m.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function dh({title:e,children:a,ariaLabel:i}){return r.jsxs(hP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[r.jsx(pP,{children:r.jsx(fP,{"aria-hidden":"true"})}),e&&r.jsx(mP,{children:e}),r.jsx(gP,{children:a})]})}const Ml=m.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,fi=m.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,co=m.button`
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
`,Jo=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,uo=m.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ho=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function vP({activeId:e,groups:a,onSelect:i}){return r.jsx(dh,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Ml,{children:a.map((s,l)=>r.jsxs("div",{children:[l>0&&r.jsx(fi,{children:s.label}),l===0&&r.jsx(fi,{children:s.label}),s.items.map(d=>{const h=d.id===e;return r.jsxs(co,{$active:h,onClick:()=>i(d.id),"aria-pressed":h,children:[r.jsx(Jo,{children:d.icon}),r.jsx(uo,{children:d.label}),h&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},d.id)})]},s.id))})})}function yP({moduleLabel:e,entries:a,onSelect:i}){return r.jsx(dh,{title:e,ariaLabel:`${e} sections`,children:r.jsx(Ml,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(co,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Jo,{children:d.icon}),r.jsx(uo,{children:d.label}),d.isActive&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(fi,{children:l.label}),l.children.map(d=>r.jsxs(co,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(Jo,{children:d.icon}),r.jsx(uo,{children:d.label}),d.isActive&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},d.id))]},l.id)})})})}const xP=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,wP=m.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bP=m.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function kP({personas:e,activeId:a,onSelect:i}){return r.jsx(dh,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Ml,{children:e.map(s=>{const l=s.id===a;return r.jsxs(co,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(uo,{as:"span",children:r.jsxs(xP,{children:[r.jsx(wP,{children:s.name}),r.jsx(bP,{children:s.role})]})}),l&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},s.id)})})})}const _P=je`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,CP=m.aside`
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
  animation: ${_P} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,jP=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,SP=m.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,NP=m.button`
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
`,MP=m.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,RP=60;function LP({title:e,onDismiss:a,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},f=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<RP&&a()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[a]),r.jsxs(CP,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[r.jsxs(jP,{children:[r.jsx(SP,{children:e??"Navigation"}),r.jsx(NP,{onClick:a,"aria-label":"Close navigation",children:r.jsx(vi,{size:18})})]}),r.jsx(MP,{children:i})]})}function AP({activeId:e,groups:a,currentMenuEntries:i,onSelectModule:s,onDismiss:l}){return r.jsx(LP,{title:"Navigation",onDismiss:l,children:r.jsx(Ml,{children:a.map(d=>r.jsxs("div",{children:[r.jsx(fi,{children:d.label}),d.items.map(h=>{const f=h.id===e;return r.jsxs("div",{children:[r.jsxs(co,{$active:f,onClick:()=>{s(h.id),l()},"aria-pressed":f,children:[r.jsx(Jo,{children:h.icon}),r.jsx(uo,{children:h.label}),f&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(g=>{if(g.type==="single"){const y=g.item;return r.jsxs(co,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(Jo,{children:y.icon}),r.jsx(uo,{children:y.label}),y.isActive&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},y.id)}if(g.type!=="group")return null;const x=g.group;return r.jsxs("div",{children:[r.jsx(fi,{children:x.label}),x.children.map(y=>r.jsxs(co,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(Jo,{children:y.icon}),r.jsx(uo,{children:y.label}),y.isActive&&r.jsx(ho,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},y.id))]},x.id)})})]},h.id)})]},d.id))})})}const Fm=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],$P=m.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,TP=m.main`
  flex: 1 1 auto;
  min-width: 0;
`;function IP(e){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:g,onMobileNavigate:x,onSelectPersona:y,children:w}=e,[k,A]=v.useState(null),_=XE({deadZonePx:8,topThresholdPx:20}),C=k===null&&_==="down",M=v.useMemo(()=>{if(!i)return null;const O=Fm.find(R=>R.id===i);return(O==null?void 0:O.name)??null},[i]),$=()=>A(null),S=O=>A(O),j=k!==null;return r.jsxs($P,{children:[r.jsx(sP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:M,openOverlay:k,user:f,hidden:C,onHamburgerClick:()=>S("drawer"),onPrimaryClick:()=>S("primary"),onSecondaryClick:()=>S("secondary"),onTertiaryClick:M?()=>S("persona"):void 0,onSearchClick:()=>{S("drawer")},onUserClick:()=>g==null?void 0:g()}),r.jsx(TP,{children:w}),j&&r.jsx(dP,{onDismiss:$}),k==="primary"&&r.jsx(vP,{activeId:a,groups:s,onSelect:O=>{x(O),$()}}),k==="secondary"&&r.jsx(yP,{moduleLabel:l,entries:h,onSelect:$}),k==="persona"&&r.jsx(kP,{personas:Fm,activeId:i,onSelect:O=>{y(O),$()}}),k==="drawer"&&r.jsx(AP,{activeId:a,groups:s,currentMenuEntries:h,onSelectModule:O=>x(O),onDismiss:$})]})}function EP(e){if(eE()&&e.mobileNav){const i=e.mobileNav;return r.jsx(IP,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return r.jsx(ZE,{...e})}const PP="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",zP="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",OP=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],DP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],FP={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},BP=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],WP=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],HP=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function UP(e){let a=e>>>0;return()=>{a|=0,a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function sv(e){let a=2166136261;for(let i=0;i<e.length;i++)a^=e.charCodeAt(i),a=Math.imul(a,16777619);return a>>>0}function qP(e){const a=DP.find(i=>i.match.test(e));return a?a.profile:FP}function lv(e,a){const i=qP(e),s=UP(sv(e||"teambridge")^a),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<a;){const f=`${l(BP)} ${l(WP)}`;if(h.has(f))continue;h.add(f);const g=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(HP),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const VP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],GP=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function YP(e){var a;return((a=VP.find(i=>i.match.test(e)))==null?void 0:a.shapes)??GP}function KP(e){const a=lv(e,8),[i,s,l,d]=a,h=4+sv(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${h} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const QP=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Bm=["6a–2p","2p–10p","10p–6a"],ZP=[4,3,3,4,4,3,3];function XP(e){var l,d;const a=lv(e,12);let i=0;const s=QP.map((h,f)=>{const g=[];for(let x=0;x<ZP[f];x++){const y=a[i%a.length].name.split(" ")[0];i++,g.push({time:Bm[x%Bm.length],who:y})}return{label:h,shifts:g}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const JP=1100,ez=440,tz=10,Yd=320,nz=720,Kd=2e3,rz=950,oz=[{icon:ao,label:"Build out coverage"},{icon:jn,label:"Chase open shifts"},{icon:xi,label:"Tidy compliance"}],az=900,iz=1600,cv=84,vu=81,yu=48,sz=7,lz=24,Wm=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],cz="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",dz='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',Hm="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",uz="That's the essentials in place. What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate.";function Um(e){if(!e)return null;const a=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function qm(e){return e.includes("	")||e.trim().includes(`
`)}function hz(e){var l;const a=e.trim().split(/\s+/),i=((l=a[0])==null?void 0:l[0])??"",s=a.length>1?a[a.length-1][0]:"";return(i+s).toUpperCase()}const pz={};function fz({answers:e=pz,onContinued:a}){const[i,s]=v.useState([]),[l,d]=v.useState(""),[h,f]=v.useState([]),[g,x]=v.useState(null),[y,w]=v.useState("roster"),[k,A]=v.useState(!1),[_,C]=v.useState(null),[M,$]=v.useState(null),[S,j]=v.useState(null),[O,R]=v.useState(!1),[N,T]=v.useState(""),[z,B]=v.useState(!1),[G,Z]=v.useState(!1),[F,Y]=v.useState("delivering"),[ee,ae]=v.useState(0),[re,oe]=v.useState(-1),[X,W]=v.useState(""),[V,E]=v.useState(!1),[L]=v.useState(()=>{var se;return typeof window<"u"&&!!((se=window.matchMedia)!=null&&se.call(window,"(prefers-reduced-motion: reduce)").matches)}),U=v.useRef([]),K=v.useRef(null),ie=v.useRef(null),de=v.useMemo(()=>{var se;return((se=e.workforceType)==null?void 0:se.trim())||Um(e.companyWebsite)||""},[e]),q=v.useMemo(()=>YP(de),[de]),I=v.useMemo(()=>{const se=Um(e.companyWebsite),Se=[{kind:"text",text:`Welcome to your ${se?`${se} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return Se.push({kind:"text",text:cz}),Se.push({kind:"rosterCta"}),Se},[e]),te=(se,ye)=>{U.current.push(window.setTimeout(ye,se))};v.useEffect(()=>()=>{U.current.forEach(se=>window.clearTimeout(se))},[]);const fe=se=>{if(C({file:se,state:"uploading",progress:8}),L){C({file:se,state:"complete",progress:100});return}te(180,()=>C({file:se,state:"uploading",progress:38})),te(460,()=>C({file:se,state:"uploading",progress:74})),te(780,()=>C({file:se,state:"complete",progress:100}))},ce=se=>{if($({file:se,state:"uploading",progress:8}),L){$({file:se,state:"complete",progress:100});return}te(180,()=>$({file:se,state:"uploading",progress:38})),te(460,()=>$({file:se,state:"uploading",progress:74})),te(780,()=>$({file:se,state:"complete",progress:100}))};v.useEffect(()=>{if(L){ae(I.length),oe(-1),Y("ready");return}const se=[];let ye=null;const Se=(xt,Rn)=>{se.push(window.setTimeout(Rn,xt))},at=xt=>{if(xt>=I.length){E(!1),Y("ready");return}E(!0),Se(ez,()=>{E(!1),oe(xt);const Rn=I[xt];if(Rn.kind!=="text"){Se(nz,()=>{ae(xt+1),oe(-1),Se(Yd,()=>at(xt+1))});return}W("");const Re=Rn.text;let Qe=0;ye=window.setInterval(()=>{Qe+=1,W(Re.slice(0,Qe)),Qe>=Re.length&&(ye&&window.clearInterval(ye),ye=null,Se(Yd,()=>{ae(xt+1),oe(-1),W(""),Se(Yd,()=>at(xt+1))}))},tz)})};return Y("delivering"),at(0),()=>{se.forEach(xt=>window.clearTimeout(xt)),ye&&window.clearInterval(ye)}},[I,L]),v.useEffect(()=>{if(y==="done")return K.current=window.setTimeout(()=>Z(!0),az),()=>{K.current&&window.clearTimeout(K.current)}},[y]);const me=()=>{B(!0),K.current&&window.clearTimeout(K.current),K.current=window.setTimeout(()=>Z(!1),iz)};v.useEffect(()=>{var se;(se=ie.current)==null||se.scrollIntoView({block:"end",behavior:"smooth"})},[i,g,F,ee,re,X,V]);const be=(l.trim().length>0||h.length>0)&&g===null,ve=se=>{const ye=Array.from(se,Se=>Se.name);f(Se=>[...Se,...ye.filter(at=>!Se.includes(at))])},Le=se=>f(ye=>ye.filter(Se=>Se!==se)),Te=(se,ye={})=>{const Se=L?300:ye.workingMs??JP,at=L?200:rz;x(ye.workingLabel??"");let xt=Se;se.forEach((Rn,Re)=>{const Qe=Re===se.length-1;te(xt,()=>{var ct;s(Et=>[...Et,Rn]),x(Qe?null:""),Qe&&((ct=ye.then)==null||ct.call(ye))}),xt+=at})},ze=(se,ye=[])=>{i.some(Se=>Se.role==="operator")||a==null||a(),s(Se=>[...Se,{role:"operator",text:se,...ye.length?{attachments:ye}:{}}])},Oe=(se,ye)=>{A(!1),ye&&fe(ye),Te([{role:"ultron",text:`Got it — read ${se}: ${cv} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${vu} people in. ${Hm}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Kd,then:()=>w("schedule")})},Ie=()=>{A(!0),Te([{role:"ultron",text:`Done — I spun up ${yu} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:Hm},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Kd,then:()=>w("schedule")})},We=se=>{se.file&&ce(se.file),j({problems:KP(de),week:XP(de)});const ye=se.fileName?`Read ${se.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${se.shape.toLowerCase()}. Here's what's in it.`;Te([{role:"ultron",text:ye},{role:"ultron",text:"",card:"week"},{role:"ultron",text:uz}],{workingLabel:se.fileName?"Turning it into shifts…":"Building your week…",workingMs:Kd,then:()=>w("done")})},Ye=(se,ye=[])=>{if(!se&&ye.length===0||g!==null)return;if(ze(se,ye),y==="roster"){ye.length>0?Oe(ye[0],{name:ye[0]}):qm(se)?Oe("your pasted roster"):Te([{role:"ultron",text:dz}]);return}if(y==="schedule"){ye.length>0?We({fileName:ye[0],file:{name:ye[0]}}):qm(se)?We({fileName:"your pasted schedule"}):We({shape:se});return}R(!0);const Se=i.filter(at=>at.role==="ultron").length;Te([{role:"ultron",text:Xu(se,Se)}])},vt=()=>{const se=l.trim();!se&&h.length===0||g!==null||(Ye(se,h),d(""),f([]))},He=se=>{if(!se||se.length===0||y!=="roster"||g!==null)return;const ye=Array.from(se),Se=ye.map(at=>at.name);ze("",Se),Oe(Se[0],{name:ye[0].name,type:ye[0].type,size:ye[0].size})},yt=se=>{if(!se||se.length===0||y!=="schedule"||g!==null)return;const ye=Array.from(se),Se=ye.map(at=>at.name);ze("",Se),We({fileName:Se[0],file:{name:ye[0].name,type:ye[0].type,size:ye[0].size}})},st=g!==null?[]:y==="roster"?[{icon:ao,label:"No roster handy? Use sample teammates",onTap:()=>{ze("Use sample teammates"),Ie()}}]:y==="schedule"?q.map(se=>({icon:jn,label:se,onTap:()=>{ze(se),We({shape:se})}})):O?[]:oz.map(({icon:se,label:ye})=>({icon:se,label:ye,onTap:()=>Ye(ye)})),It=st.length>0?r.jsx(BO,{"aria-label":"Suggestions",children:st.map(({icon:se,label:ye,onTap:Se})=>r.jsxs(WO,{type:"button",onClick:Se,children:[se&&r.jsx(se,{size:14}),ye]},ye))}):null,lt=y==="roster"?"Attach your roster, or ask Ultron anything…":y==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…";return r.jsxs(vz,{children:[r.jsx(D2,{links:1}),r.jsx(F2,{}),r.jsx(yz,{children:r.jsxs(xz,{children:[r.jsx(wz,{children:r.jsx(gt,{mark:"magnetic",size:44,tone:"light",state:"active","aria-label":"Ultron"})}),r.jsxs(bz,{children:[r.jsx(kz,{children:"Welcome"}),r.jsx(_z,{children:"Finish your setup, right in the chat"})]})]})}),r.jsx(Cz,{children:r.jsxs(Rz,{children:[r.jsx(Hs,{"data-from":"ultron",children:r.jsxs(Gm,{children:[I.slice(0,re>=0?re+1:ee).map((se,ye)=>{if(se.kind==="rosterCta"){const at=y==="roster";return r.jsxs(v.Fragment,{children:[r.jsx(Ws,{children:at||_?r.jsx(Vm,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(_==null?void 0:_.state)??"empty",progress:(_==null?void 0:_.progress)??0,file:(_==null?void 0:_.file)??null,disabled:g!==null&&!_,onFileSelect:xt=>He([xt]),onClear:()=>{}}):r.jsxs(Km,{children:[r.jsx(Qm,{"aria-hidden":"true",children:r.jsx(Xd,{size:16})}),r.jsxs(Zm,{children:[r.jsx(Xm,{children:"Roster"}),r.jsx(Jm,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),r.jsx(e0,{"aria-hidden":"true",children:r.jsx(mn,{size:18})})]})}),at&&F==="ready"&&r.jsx(Ws,{children:It})]},`beat-${ye}`)}const Se=ye===re;return r.jsxs(Ym,{"data-from":"ultron",children:[Se?X:se.text,Se&&r.jsx(Mz,{"aria-hidden":"true"})]},`beat-${ye}`)}),V&&r.jsx(Sz,{children:r.jsxs(o0,{"aria-label":"Ultron is typing",children:[r.jsx(Yo,{}),r.jsx(Yo,{}),r.jsx(Yo,{})]})})]})}),i.map((se,ye)=>se.card?r.jsx(Hs,{"data-from":"ultron",children:r.jsxs(Gm,{children:[r.jsx(Ws,{children:se.card==="roster"?r.jsx(mz,{sample:k}):se.card==="scheduleCta"?y==="schedule"||M?r.jsx(Vm,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:(M==null?void 0:M.state)??"empty",progress:(M==null?void 0:M.progress)??0,file:(M==null?void 0:M.file)??null,disabled:g!==null&&!M,onFileSelect:Se=>yt([Se]),onClear:()=>{}}):r.jsxs(Km,{children:[r.jsx(Qm,{"aria-hidden":"true",children:r.jsx(Xd,{size:16})}),r.jsxs(Zm,{children:[r.jsx(Xm,{children:"Schedule"}),r.jsx(Jm,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),r.jsx(e0,{"aria-hidden":"true",children:r.jsx(mn,{size:18})})]}):S?r.jsx(gz,{problems:S.problems,week:S.week}):null}),se.card==="scheduleCta"&&y==="schedule"&&r.jsx(Ws,{children:It})]})},ye):r.jsx(Hs,{"data-from":se.role,children:r.jsxs(GO,{"data-from":se.role,children:[se.text&&r.jsx(Ym,{"data-from":se.role,children:se.text}),se.attachments&&r.jsx(YO,{children:se.attachments.map(Se=>r.jsxs(a0,{children:[r.jsx(Ir,{size:14}),Se]},Se))})]})},ye)),g!==null&&r.jsx(Hs,{"data-from":"ultron",children:r.jsxs(zO,{children:[r.jsxs(o0,{"aria-label":"Ultron is replying",children:[r.jsx(Yo,{}),r.jsx(Yo,{}),r.jsx(Yo,{})]}),g&&r.jsx(DO,{role:"status","aria-live":"polite",children:g})]})}),r.jsx("div",{ref:ie})]})}),F==="ready"&&r.jsxs(FO,{children:[y==="done"&&It,r.jsxs(HO,{onSubmit:se=>{se.preventDefault(),vt()},children:[h.length>0&&r.jsx(qO,{"aria-label":"Files to send",children:h.map(se=>r.jsxs(a0,{children:[r.jsx(Ir,{size:14}),se,r.jsx(VO,{type:"button","aria-label":`Remove ${se}`,onClick:()=>Le(se),children:r.jsx(ci,{size:12})})]},se))}),r.jsxs(UO,{children:[r.jsx(i0,{children:r.jsx(K0,{state:"idle",onSelect:ve})}),r.jsx(KO,{rows:1,value:l,placeholder:lt,"aria-label":"Message Ultron",onChange:se=>d(se.target.value),onKeyDown:se=>{se.key==="Enter"&&!se.shiftKey&&(se.preventDefault(),vt())},onPaste:se=>{var Se;const ye=(Se=se.clipboardData)==null?void 0:Se.files;ye&&ye.length>0&&(se.preventDefault(),ve(ye))}}),r.jsx(i0,{children:r.jsx(la,{state:be?"ready":"disabled-invalid",onSend:vt})})]})]})]}),r.jsx(gO,{}),r.jsx(b9,{open:G,onClose:()=>Z(!1),size:"lg","aria-label":"Unlock your grant",children:r.jsxs(vO,{children:[r.jsx(yO,{"aria-hidden":"true",children:r.jsx(B2,{size:300})}),r.jsx(xO,{type:"button","aria-label":"Close",onClick:()=>Z(!1),children:r.jsx(ci,{size:18})}),r.jsxs(wO,{children:[r.jsx(bO,{"aria-hidden":"true"})," Your welcome grant"]}),r.jsxs(kO,{"aria-label":"$1,000 of work on us",children:[r.jsxs(_O,{children:[r.jsx(CO,{children:"$"}),"1,000"]}),r.jsxs(jO,{children:["of work",r.jsx("br",{}),r.jsx("strong",{children:"on us"})]})]}),r.jsx(SO,{children:"Turn Ultron loose."}),r.jsx(NO,{children:"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),r.jsxs(MO,{"aria-label":"Grant benefits",children:[r.jsx(Qd,{children:"100,000 credits"}),r.jsx(Qd,{children:"Up to 3 months"}),r.jsx(Qd,{children:"You approve every action"})]}),z?r.jsxs(IO,{role:"status",children:[r.jsx(mn,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(RO,{onSubmit:se=>{se.preventDefault(),N.trim()&&me()},children:[r.jsx(LO,{htmlFor:"welcome-grant-phone",children:"Where should Ultron send proposals?"}),r.jsxs(AO,{children:[r.jsx($O,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:N,placeholder:"2145550148","aria-label":"Mobile number",autoComplete:"tel",onChange:se=>T(se.target.value.replace(/\D/g,""))}),r.jsx(TO,{type:"submit",variant:"tertiary",size:"lg",disabled:!N.trim(),children:"Unlock $1,000"})]})]}),r.jsx(EO,{children:"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]})})]})}function mz({sample:e}){const[a,i]=v.useState(!1),[s,l]=v.useState(!0),d=OP.slice(0,6),h=(e?yu:vu)-d.length;return r.jsxs(dv,{"aria-label":e?"Sample teammates":"Roster import result",children:[r.jsxs(Lz,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(f=>!f),children:[e?r.jsx(Az,{children:r.jsxs($z,{children:[yu," sample teammates, ready to run a full week"]})}):r.jsxs(Tz,{children:[r.jsxs(Iz,{children:[vu," ",r.jsxs(Ez,{children:["/",cv]})]}),r.jsxs(Pz,{children:[r.jsx(mn,{size:16})," imported clean"]})]}),r.jsx(xu,{$open:s,"aria-hidden":"true",children:r.jsx(Nn,{size:16})})]}),s&&r.jsxs(zz,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((f,g)=>r.jsxs(Oz,{$i:g,children:[r.jsx(Dz,{"aria-hidden":"true",children:hz(f.name)}),r.jsxs(Fz,{children:[r.jsx(Bz,{children:f.name}),r.jsxs(Wz,{children:[f.role," · ",f.location," · ",f.tenure]})]}),f.credentialStatus==="expiring"?r.jsxs(Sn,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[f.credential," · ",f.expiresInDays,"d"]}):r.jsx(Sn,{size:"sm",variant:"subtle",color:"green",children:f.credential}),e&&r.jsx(Sn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},f.name)),r.jsx(Hz,{children:e?`+ ${h} more · every one tagged “Sample”`:`+ ${h} more imported clean`})]}),!e&&r.jsxs(Uz,{children:[r.jsxs(qz,{type:"button","aria-expanded":a,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(f=>!f),children:[r.jsxs(Vz,{children:[Wm.length," rows kept for review"]}),r.jsxs(Gz,{children:[r.jsx(uv,{"aria-hidden":"true",children:r.jsx(ta,{size:15})}),r.jsx(xu,{$open:a,"aria-hidden":"true",children:r.jsx(Nn,{size:16})})]})]}),a&&r.jsx(hv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Wm.map(f=>r.jsxs(pv,{children:[r.jsx(Kz,{"aria-hidden":"true",children:r.jsx(ta,{size:15})}),r.jsxs(fv,{children:[r.jsx(Qz,{children:f.where}),r.jsx(Zz,{children:f.reason})]})]},f.where))})]})]})}function gz({problems:e,week:a}){const[i,s]=v.useState(!1);return r.jsxs(dv,{"aria-label":"Your week",children:[r.jsxs(Xz,{children:[r.jsxs(eO,{children:[r.jsxs(t0,{children:[r.jsx(n0,{children:sz})," days"]}),r.jsx(tO,{"aria-hidden":"true",children:"·"}),r.jsxs(t0,{children:[r.jsx(n0,{children:lz})," shifts"]})]}),r.jsxs(Jz,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(l=>!l),children:[r.jsx(uv,{"aria-hidden":"true",children:r.jsx(ta,{size:15})}),r.jsx(xu,{$open:i,"aria-hidden":"true",children:r.jsx(Nn,{size:16})})]})]}),i&&r.jsx(Yz,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((l,d)=>r.jsxs(pv,{children:[r.jsx(nO,{$kind:l.kind,"aria-hidden":"true",children:l.kind==="missing"?r.jsx(jn,{size:15}):r.jsx(ta,{size:15})}),r.jsxs(fv,{children:[r.jsxs(rO,{children:[l.worker," · ",l.role]}),r.jsx(oO,{children:l.detail})]})]},`${l.worker}-${d}`))}),r.jsx(aO,{children:r.jsx(iO,{role:"table","aria-label":"Next week's shifts",children:a.map(l=>r.jsxs(sO,{role:"column",children:[r.jsx(lO,{children:l.label}),l.shifts.map((d,h)=>r.jsxs(cO,{$flag:d.flag,children:[r.jsx(dO,{children:d.time}),r.jsx(uO,{children:d.who})]},`${l.label}-${h}`))]},l.label))})})]})}const vz=m.div`
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
`,yz=m.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  /* One continuous page surface under the header, alpha-masked at its lower
     edge. Unlike a gradient strip, this reveals the ambient glow progressively
     and cannot leave a hard seam where the fade meets the header. At 60%
     opacity with a backdrop blur, thread content frosts through as it scrolls
     underneath (the mask fades the blur out with the surface). */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 calc(-1 * var(--space-10));
    z-index: 0;
    background: color-mix(in srgb, var(--color-bg-primary) 60%, transparent);
    -webkit-backdrop-filter: blur(18px) saturate(180%);
    backdrop-filter: blur(18px) saturate(180%);
    -webkit-mask-image: linear-gradient(
      to bottom,
      black 0,
      black calc(100% - var(--space-10)),
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      black 0,
      black calc(100% - var(--space-10)),
      transparent 100%
    );
    pointer-events: none;
  }
`,xz=m.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  /* Same rhythm as the event card header — air above, tight to the body. */
  padding: var(--space-4) var(--space-6) var(--space-2);
`,wz=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 36px;
  height: 36px;
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

  & > canvas {
    position: relative;
    z-index: 1;
  }
`,bz=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,kz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,_z=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cz=m.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,vo=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ws=m.div`
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jz=je`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,Vm=m(ng)`
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

  & > *:not(input) {
    animation: ${jz} 300ms var(--ease-out) both;
  }

  /* Processing begins immediately in this guided flow, so removing the file
     after selection would be misleading. The completed check remains visible. */
  button[aria-label='Remove file'] {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    && {
      transition: none;
    }

    & > *:not(input) {
      animation: none;
    }
  }
`,Sz=m.div`
  display: flex;
  justify-content: flex-start;
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Nz=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,Mz=m.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${Nz} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Rz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Hs=m.div`
  display: flex;
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Gm=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,Ym=m.div`
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
`,Km=m.div`
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
`,Qm=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Zm=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Xm=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,Jm=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,e0=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,dv=m.div`
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
`,Lz=m.button`
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
`,Az=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,$z=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Tz=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Iz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,Ez=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,Pz=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,zz=m.div`
  display: flex;
  flex-direction: column;
`,Oz=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Dz=m.span`
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
`,Fz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,Bz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,Wz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Uz=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,qz=m.button`
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
`,Vz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,Gz=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,uv=m.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,xu=m.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,hv=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Yz=m(hv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,pv=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,Kz=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,fv=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Qz=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,Zz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,Xz=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,Jz=m.button`
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
`,eO=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,t0=m.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,n0=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,tO=m.span`
  color: var(--color-content-tertiary);
`,nO=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&Ve`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&Ve`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&Ve`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,rO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,oO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,aO=m.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,iO=m.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,sO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,lO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,cO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

  ${e=>e.$flag==="open"&&Ve`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Ve`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }
`,dO=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,uO=m.span`
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
`,r0="cubic-bezier(0.22, 1, 0.36, 1)",hO=je`
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
`,pO=je`
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
`,fO=je`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,mO=je`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,gO=bS`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${hO} 440ms ${r0} both;

    & > div {
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${fO} 560ms ${r0} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${pO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${mO} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`,vO=m.section`
  position: relative;
  width: 100%;
  padding: var(--space-10);
  overflow: hidden;
  background:
    radial-gradient(75% 90% at 100% 0%, color-mix(in srgb, var(--Alloy-blue-500) 38%, transparent), transparent 68%),
    radial-gradient(70% 80% at 0% 100%, color-mix(in srgb, var(--Alloy-purple-500) 30%, transparent), transparent 72%),
    linear-gradient(145deg, var(--Alloy-slate-950), var(--Alloy-purple-950));
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 620px) {
    padding: var(--space-7) var(--space-6);
    gap: var(--space-4);
  }
`,yO=m.div`
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
`,xO=m.button`
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
`,wO=m.span`
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
`,bO=m.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,kO=m.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;
`,_O=m.div`
  font-family: var(--font-sans);
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.075em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;
`,CO=m.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,jO=m.span`
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
`,SO=m.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);
`,NO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,MO=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,Qd=m.span`
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
`,RO=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,LO=m.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,AO=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,$O=m.input`
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
`,TO=m(Ee)`
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
`,IO=m.div`
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
`,EO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,PO=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,o0=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`,Yo=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${PO} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,zO=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,OO=je`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,DO=m.span`
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
  animation: ${OO} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,FO=m.div`
  position: relative;
  isolation: isolate;
  z-index: 1;
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);

  /* A single footer surface sits behind both pills and composer, then fades
     upward through an alpha mask. Because the surface continues beneath the
     controls there is no join line, and the glow remains visible through the
     transparent portion instead of being blurred or clipped. At 60% opacity
     with a backdrop blur, thread content frosts through as it scrolls under
     (the mask fades the blur out with the surface). */
  &::before {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--space-10)) 0 0;
    z-index: 0;
    background: color-mix(in srgb, var(--color-bg-primary) 60%, transparent);
    -webkit-backdrop-filter: blur(18px) saturate(180%);
    backdrop-filter: blur(18px) saturate(180%);
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black var(--space-10),
      black 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black var(--space-10),
      black 100%
    );
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,BO=m.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,WO=m.button`
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
`,HO=m.form`
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
`,UO=m.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,qO=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,a0=m.span`
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
`,VO=m.button`
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
`,GO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,YO=m.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,KO=m.textarea`
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
`,i0=m.div`
  flex-shrink: 0;
`;function QO(e){const a=[e.activeId,e.secActiveId];return e.selectedPersonaId&&a.push("persona",e.selectedPersonaId),e.activePageId&&a.push("page",e.activePageId),"#"+a.map(encodeURIComponent).join("/")}function ZO(e){const a=e.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function XO(e,a){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=ZO(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=QO(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const wu="ultron-theme";function JO(){if(typeof window>"u")return null;const e=window.localStorage.getItem(wu);return e==="light"||e==="dark"?e:null}function eD(e){const a=document.documentElement;a.classList.toggle("dark",e==="dark"),a.classList.toggle("light",e==="light")}function tD(){const e=lh("(prefers-color-scheme: dark)"),[a,i]=v.useState(JO);v.useEffect(()=>{eD(a),!(typeof window>"u")&&(a?window.localStorage.setItem(wu,a):window.localStorage.removeItem(wu))},[a]);const s=a??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const nD=m.button`
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
`;function rD(){const{theme:e,toggle:a}=tD(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(nD,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(S0,{size:18}):r.jsx(q0,{size:18})})}const s0=[{id:"ultron",label:"Ultron",icon:r.jsx(gt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(HS,{})},{id:"engaged",label:"Engaged",icon:r.jsx(US,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(qS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(VS,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(GS,{})}],l0=[{id:"apps",label:"Apps",icon:r.jsx(YS,{})}],c0=[{id:"docs",label:"Document Studio",icon:r.jsx(uu,{})},{id:"form",label:"Form",icon:r.jsx(KS,{})},{id:"tasks",label:"Tasks",icon:r.jsx(QS,{})},{id:"policy",label:"Policy",icon:r.jsx(ZS,{}),activeIcon:r.jsx("img",{src:PP,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(fo,{}),activeIcon:r.jsx("img",{src:zP,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(XS,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(JS,{})}],oD=m.button`
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
`,aD=je`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,iD=je`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,sD=je`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,lD=m.span`
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
      ${aD} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${iD} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${sD} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,cD=m.button`
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
`;function dD({onDelete:e}){const a=i=>i.stopPropagation();return r.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:r.jsx(zu,{placement:"bottom-end",width:168,trigger:r.jsx(cD,{type:"button","aria-label":"Page options",children:r.jsx(W0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(Y0,{size:16}),onClick:e}]}]})})}const uD={needs_attention:r.jsx(ta,{size:16}),live:r.jsx(gt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(mn,{size:16})},hD={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function pD({introAnswers:e,onRestartOnboarding:a}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[h,f]=v.useState(null),[g,x]=v.useState(null),[y,w]=v.useState("ultron"),[k,A]=v.useState("employees"),_=SN(),[C,M]=v.useState(!!e),[$,S]=v.useState(!1),[j,O]=v.useState(!e),[R,N]=v.useState([]),[T,z]=v.useState(null),B=v.useRef(0),G=I=>{w("ultron"),M(!1),O(!1),z(I)},Z=()=>{w("ultron"),O(!1),z(null),M(!0)},F=()=>{const I=`page-${B.current++}`;N(te=>[...te,{id:I,title:"New page"}]),G(I)},[Y,ee]=v.useState({}),[ae,re]=v.useState({}),oe=v.useRef({}),X=(I,te)=>{const fe=te.trim();if(!fe)return;const ce=(Y[I]??[]).filter(me=>me.role==="ultron").length;ee(me=>({...me,[I]:[...me[I]??[],{role:"operator",text:fe}]})),re(me=>({...me,[I]:!0})),oe.current[I]=window.setTimeout(()=>{ee(me=>({...me,[I]:[...me[I]??[],{role:"ultron",text:Xu(fe,ce)}]})),re(me=>({...me,[I]:!1})),delete oe.current[I]},1100)},W=I=>{oe.current[I]&&(window.clearTimeout(oe.current[I]),delete oe.current[I]),N(te=>te.filter(fe=>fe.id!==I)),ee(te=>{const{[I]:fe,...ce}=te;return ce}),re(te=>{const{[I]:fe,...ce}=te;return ce}),T===I&&(z(null),O(!0))},V=j?"live":_.selectedThread?hD[_.selectedThread.status]:"new";XO({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:x});const E=I=>I.map(te=>({...te,isActive:te.id===i,disabled:te.id!=="ultron",onClick:te.id==="ultron"?()=>s("ultron"):void 0})),L=[{id:"memory",label:"Memory",icon:r.jsx(hl,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:r.jsx(M0,{size:16})}],U=r.jsx(iv,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),K={id:"welcome",label:"Welcome",icon:r.jsx(uu,{}),isActive:C,onClick:Z},ie=R.map(I=>({id:I.id,label:I.title,icon:r.jsx(uu,{}),isActive:T===I.id,onClick:()=>G(I.id),trailingSlot:r.jsx(dD,{onDelete:()=>W(I.id)})})),de=y==="account"?mu.map(I=>({type:"single",item:{id:I.id,label:I.label,icon:I.icon,isActive:k===I.id,onClick:()=>A(I.id)}})):_.groups.flatMap(I=>{const te=I.id==="needs_attention"?"new":I.id==="resolved"?"done":"working",fe=I.id==="needs_attention"?I.threads.filter(ve=>ve.status==="analyzing"||_.revealedNewIds.includes(ve.id)):I.threads,ce=I.id==="needs_attention"&&!$||I.id==="live"&&$,me=I.id==="needs_attention"?ie:[],be={type:"group",group:{id:I.id,label:I.id==="needs_attention"?"New":I.label,icon:uD[I.id],trailingBadge:r.jsx(sa,{children:fe.length+(ce?1:0)+me.length}),defaultExpanded:!0,outlined:!1,children:[...ce?[K]:[],...me,...fe.map(ve=>({id:ve.id,label:ve.id.startsWith("detected_")?r.jsx(e$,{text:gm(ve.name,te)}):gm(ve.name,te),icon:te==="new"?ve.status==="analyzing"?r.jsx(gt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(gt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):te==="working"?r.jsx(gt,{mark:"orbit2d",size:32,tone:"auto",state:ve.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(gt,{mark:"pulse",size:32,tone:"auto",state:ve.status==="unresolved"?"idle":"static",color:ve.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(ve.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!j&&!T&&V===te&&_.selectedId===ve.id,onClick:()=>{w("ultron"),M(!1),O(!1),z(null),_.setSelectedId(ve.id)},trailingSlot:_.savedWorkflowIds.includes(ve.id)?r.jsx(cr,{content:"Saved as workflow",placement:"top",children:r.jsx(lD,{"aria-label":"Saved as workflow",children:r.jsx(fo,{})})}):void 0}))]}};return I.id==="resolved"?[{type:"divider",id:"done-divider"},be]:I.id==="live"?[{type:"divider",id:"working-divider"},be]:[be]}),q=[{id:"main",label:"Workspace",items:E(s0)},{id:"tools",label:"Tools",items:E(l0)},{id:"bottom",label:"Apps",items:E(c0)}];return r.jsxs(r.Fragment,{children:[r.jsx(rD,{}),r.jsx(EP,{items:E(s0),toolItems:E(l0),bottomItems:E(c0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:a,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:de,menuHeader:y==="ultron"?r.jsx(oD,{$active:j&&!T,onClick:()=>{w("ultron"),M(!1),O(!0),z(null)},"aria-label":"Live — Ultron presence","aria-current":j&&!T?"page":void 0,children:r.jsx(YA,{onNew:F})}):void 0,pageEntries:L,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:U,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:q,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:I=>{I==="ultron"&&s("ultron")},onSelectPersona:f},children:y==="memory"?r.jsx(o$,{}):y==="account"?r.jsx(y$,{collectionId:k}):C?r.jsx(fz,{answers:e,onContinued:()=>S(!0)}):T?r.jsx($A,{messages:Y[T]??[],replying:ae[T]??!1,onSend:I=>X(T,I)},T):r.jsx(_A,{threads:_.threads,stageById:_.stageById,section:V,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),M(!1),O(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const d0="cubic-bezier(0.22, 1, 0.36, 1)",u0=je`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,fD=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,mD=m.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${u0} 460ms ${d0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${u0} 500ms ${d0} 90ms both;
  }
  main {
    animation: ${fD} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Zd="tb:onboarding-complete";function gD(){const[e,a]=v.useState(()=>{try{return window.sessionStorage.getItem(Zd)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(Zd,"1")}catch{}s(h),a(!0)},d=()=>{try{window.sessionStorage.removeItem(Zd)}catch{}window.location.hash="",window.location.reload()};return e?r.jsx(mD,{children:r.jsx(pD,{introAnswers:i??void 0,onRestartOnboarding:d})}):r.jsx(ZI,{onEnterApp:l})}vx.createRoot(document.getElementById("root")).render(r.jsx(on.StrictMode,{children:r.jsx(U9,{children:r.jsx(gD,{})})}));
