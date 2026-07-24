(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function f0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},Ja={},gd={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function dy(){if(of)return Be;of=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(I){return I===null||typeof I!="object"?null:(I=w&&I[w]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,C={};function M(I,L,q){this.props=I,this.context=L,this.refs=C,this.updater=q||A}M.prototype.isReactComponent={},M.prototype.setState=function(I,L){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,L,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function $(){}$.prototype=M.prototype;function S(I,L,q){this.props=I,this.context=L,this.refs=C,this.updater=q||A}var j=S.prototype=new $;j.constructor=S,_(j,M.prototype),j.isPureReactComponent=!0;var O=Array.isArray,R=Object.prototype.hasOwnProperty,N={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function z(I,L,q){var K,ie={},de=null,H=null;if(L!=null)for(K in L.ref!==void 0&&(H=L.ref),L.key!==void 0&&(de=""+L.key),L)R.call(L,K)&&!T.hasOwnProperty(K)&&(ie[K]=L[K]);var E=arguments.length-2;if(E===1)ie.children=q;else if(1<E){for(var ne=Array(E),pe=0;pe<E;pe++)ne[pe]=arguments[pe+2];ie.children=ne}if(I&&I.defaultProps)for(K in E=I.defaultProps,E)ie[K]===void 0&&(ie[K]=E[K]);return{$$typeof:e,type:I,key:de,ref:H,props:ie,_owner:N.current}}function B(I,L){return{$$typeof:e,type:I.type,key:L,ref:I.ref,props:I.props,_owner:I._owner}}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function Z(I){var L={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return L[q]})}var F=/\/+/g;function Y(I,L){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):L.toString(36)}function ee(I,L,q,K,ie){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var H=!1;if(I===null)H=!0;else switch(de){case"string":case"number":H=!0;break;case"object":switch(I.$$typeof){case e:case o:H=!0}}if(H)return H=I,ie=ie(H),I=K===""?"."+Y(H,0):K,O(ie)?(q="",I!=null&&(q=I.replace(F,"$&/")+"/"),ee(ie,L,q,"",function(pe){return pe})):ie!=null&&(G(ie)&&(ie=B(ie,q+(!ie.key||H&&H.key===ie.key?"":(""+ie.key).replace(F,"$&/")+"/")+I)),L.push(ie)),1;if(H=0,K=K===""?".":K+":",O(I))for(var E=0;E<I.length;E++){de=I[E];var ne=K+Y(de,E);H+=ee(de,L,q,ne,ie)}else if(ne=k(I),typeof ne=="function")for(I=ne.call(I),E=0;!(de=I.next()).done;)de=de.value,ne=K+Y(de,E++),H+=ee(de,L,q,ne,ie);else if(de==="object")throw L=String(I),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return H}function ae(I,L,q){if(I==null)return I;var K=[],ie=0;return ee(I,K,"","",function(de){return L.call(q,de,ie++)}),K}function re(I){if(I._status===-1){var L=I._result;L=L(),L.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=L)}if(I._status===1)return I._result.default;throw I._result}var oe={current:null},X={transition:null},W={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:X,ReactCurrentOwner:N};function V(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:ae,forEach:function(I,L,q){ae(I,function(){L.apply(this,arguments)},q)},count:function(I){var L=0;return ae(I,function(){L++}),L},toArray:function(I){return ae(I,function(L){return L})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Be.Component=M,Be.Fragment=i,Be.Profiler=l,Be.PureComponent=S,Be.StrictMode=s,Be.Suspense=g,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Be.act=V,Be.cloneElement=function(I,L,q){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=_({},I.props),ie=I.key,de=I.ref,H=I._owner;if(L!=null){if(L.ref!==void 0&&(de=L.ref,H=N.current),L.key!==void 0&&(ie=""+L.key),I.type&&I.type.defaultProps)var E=I.type.defaultProps;for(ne in L)R.call(L,ne)&&!T.hasOwnProperty(ne)&&(K[ne]=L[ne]===void 0&&E!==void 0?E[ne]:L[ne])}var ne=arguments.length-2;if(ne===1)K.children=q;else if(1<ne){E=Array(ne);for(var pe=0;pe<ne;pe++)E[pe]=arguments[pe+2];K.children=E}return{$$typeof:e,type:I.type,key:ie,ref:de,props:K,_owner:H}},Be.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:d,_context:I},I.Consumer=I},Be.createElement=z,Be.createFactory=function(I){var L=z.bind(null,I);return L.type=I,L},Be.createRef=function(){return{current:null}},Be.forwardRef=function(I){return{$$typeof:f,render:I}},Be.isValidElement=G,Be.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:re}},Be.memo=function(I,L){return{$$typeof:x,type:I,compare:L===void 0?null:L}},Be.startTransition=function(I){var L=X.transition;X.transition={};try{I()}finally{X.transition=L}},Be.unstable_act=V,Be.useCallback=function(I,L){return oe.current.useCallback(I,L)},Be.useContext=function(I){return oe.current.useContext(I)},Be.useDebugValue=function(){},Be.useDeferredValue=function(I){return oe.current.useDeferredValue(I)},Be.useEffect=function(I,L){return oe.current.useEffect(I,L)},Be.useId=function(){return oe.current.useId()},Be.useImperativeHandle=function(I,L,q){return oe.current.useImperativeHandle(I,L,q)},Be.useInsertionEffect=function(I,L){return oe.current.useInsertionEffect(I,L)},Be.useLayoutEffect=function(I,L){return oe.current.useLayoutEffect(I,L)},Be.useMemo=function(I,L){return oe.current.useMemo(I,L)},Be.useReducer=function(I,L,q){return oe.current.useReducer(I,L,q)},Be.useRef=function(I){return oe.current.useRef(I)},Be.useState=function(I){return oe.current.useState(I)},Be.useSyncExternalStore=function(I,L,q){return oe.current.useSyncExternalStore(I,L,q)},Be.useTransition=function(){return oe.current.useTransition()},Be.version="18.3.1",Be}var af;function $u(){return af||(af=1,gd.exports=dy()),gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function uy(){if(sf)return Ja;sf=1;var e=$u(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,x){var y,w={},k=null,A=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(A=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:o,type:f,key:k,ref:A,props:w,_owner:l.current}}return Ja.Fragment=i,Ja.jsx=h,Ja.jsxs=h,Ja}var lf;function hy(){return lf||(lf=1,md.exports=uy()),md.exports}var r=hy(),v=$u();const rn=f0(v);var Is={},vd={exports:{}},Xt={},yd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf;function py(){return cf||(cf=1,(function(e){function o(X,W){var V=X.length;X.push(W);e:for(;0<V;){var I=V-1>>>1,L=X[I];if(0<l(L,W))X[I]=W,X[V]=L,V=I;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var W=X[0],V=X.pop();if(V!==W){X[0]=V;e:for(var I=0,L=X.length,q=L>>>1;I<q;){var K=2*(I+1)-1,ie=X[K],de=K+1,H=X[de];if(0>l(ie,V))de<L&&0>l(H,ie)?(X[I]=H,X[de]=V,I=de):(X[I]=ie,X[K]=V,I=K);else if(de<L&&0>l(H,V))X[I]=H,X[de]=V,I=de;else break e}}return W}function l(X,W){var V=X.sortIndex-W.sortIndex;return V!==0?V:X.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();e.unstable_now=function(){return h.now()-f}}var g=[],x=[],y=1,w=null,k=3,A=!1,_=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(X){for(var W=i(x);W!==null;){if(W.callback===null)s(x);else if(W.startTime<=X)s(x),W.sortIndex=W.expirationTime,o(g,W);else break;W=i(x)}}function O(X){if(C=!1,j(X),!_)if(i(g)!==null)_=!0,re(R);else{var W=i(x);W!==null&&oe(O,W.startTime-X)}}function R(X,W){_=!1,C&&(C=!1,$(z),z=-1),A=!0;var V=k;try{for(j(W),w=i(g);w!==null&&(!(w.expirationTime>W)||X&&!Z());){var I=w.callback;if(typeof I=="function"){w.callback=null,k=w.priorityLevel;var L=I(w.expirationTime<=W);W=e.unstable_now(),typeof L=="function"?w.callback=L:w===i(g)&&s(g),j(W)}else s(g);w=i(g)}if(w!==null)var q=!0;else{var K=i(x);K!==null&&oe(O,K.startTime-W),q=!1}return q}finally{w=null,k=V,A=!1}}var N=!1,T=null,z=-1,B=5,G=-1;function Z(){return!(e.unstable_now()-G<B)}function F(){if(T!==null){var X=e.unstable_now();G=X;var W=!0;try{W=T(!0,X)}finally{W?Y():(N=!1,T=null)}}else N=!1}var Y;if(typeof S=="function")Y=function(){S(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=F,Y=function(){ae.postMessage(null)}}else Y=function(){M(F,0)};function re(X){T=X,N||(N=!0,Y())}function oe(X,W){z=M(function(){X(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){_||A||(_=!0,re(R))},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(X){switch(k){case 1:case 2:case 3:var W=3;break;default:W=k}var V=k;k=W;try{return X()}finally{k=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,W){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var V=k;k=X;try{return W()}finally{k=V}},e.unstable_scheduleCallback=function(X,W,V){var I=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?I+V:I):V=I,X){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=V+L,X={id:y++,callback:W,priorityLevel:X,startTime:V,expirationTime:L,sortIndex:-1},V>I?(X.sortIndex=V,o(x,X),i(g)===null&&X===i(x)&&(C?($(z),z=-1):C=!0,oe(O,V-I))):(X.sortIndex=L,o(g,X),_||A||(_=!0,re(R))),X},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(X){var W=k;return function(){var V=k;k=W;try{return X.apply(this,arguments)}finally{k=V}}}})(xd)),xd}var df;function fy(){return df||(df=1,yd.exports=py()),yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function my(){if(uf)return Xt;uf=1;var e=$u(),o=fy();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return g.call(w,t)?!0:g.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function A(t,n,a,c){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,n,a,c){if(n===null||typeof n>"u"||A(t,n,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(t,n,a,c,u,p,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=b}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];M[n]=new C(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function S(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace($,S);M[n]=new C(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,n,a,c){var u=M.hasOwnProperty(n)?M[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_(n,a,u,c)&&(a=null),c||u===null?k(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(n=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(n):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,n,a):t.setAttribute(n,a))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),N=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),X=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,I;function L(t){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||""}return`
`+I+t}var q=!1;function K(t,n){if(!t||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(te){var c=te}Reflect.construct(t,[],n)}else{try{n.call()}catch(te){c=te}t.call(n.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),p=c.stack.split(`
`),b=u.length-1,P=p.length-1;1<=b&&0<=P&&u[b]!==p[P];)P--;for(;1<=b&&0<=P;b--,P--)if(u[b]!==p[P]){if(b!==1||P!==1)do if(b--,P--,0>P||u[b]!==p[P]){var D=`
`+u[b].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=b&&0<=P);break}}}finally{q=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?L(t):""}function ie(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case N:return"Portal";case B:return"Profiler";case z:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case re:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}function H(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function E(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pe(t){var n=ne(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,p.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ce(t){t._valueTracker||(t._valueTracker=pe(t))}function me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),c="";return t&&(c=ne(t)?t.checked?"true":"false":t.value),t=c,t!==a?(n.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ve(t,n){var a=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Le(t,n){var a=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;a=E(n.value!=null?n.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fe(t,n){n=n.checked,n!=null&&j(t,"checked",n,!1)}function Pe(t,n){Fe(t,n);var a=E(n.value),c=n.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Te(t,n.type,a):n.hasOwnProperty("defaultValue")&&Te(t,n.type,E(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Ie(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Te(t,n,a){(n!=="number"||be(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ve=Array.isArray;function Qe(t,n,a,c){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+E(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ut(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function He(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(Ve(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:E(a)}}function pt(t,n){var a=E(n.value),c=E(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function it(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Bt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Bt(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Et,vn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(n,a,c,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Et=Et||document.createElement("div"),Et.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Et.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(t){xe.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),le[n]=le[t]})});function Re(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||le.hasOwnProperty(t)&&le[t]?(""+n).trim():n+"px"}function ke(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=Re(a,n[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var Ee=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(t,n){if(n){if(Ee[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function yt(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vt=null;function dr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,wo=null,bo=null;function bh(t){if(t=Oa(t)){if(typeof Hr!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Ki(n),Hr(t.stateNode,t.type,n))}}function kh(t){wo?bo?bo.push(t):bo=[t]:wo=t}function _h(){if(wo){var t=wo,n=bo;if(bo=wo=null,bh(t),n)for(t=0;t<n.length;t++)bh(n[t])}}function Ch(t,n){return t(n)}function jh(){}var $l=!1;function Sh(t,n,a){if($l)return t(n,a);$l=!0;try{return Ch(t,n,a)}finally{$l=!1,(wo!==null||bo!==null)&&(jh(),_h())}}function va(t,n){var a=t.stateNode;if(a===null)return null;var c=Ki(a);if(c===null)return null;a=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var Tl=!1;if(f)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Tl=!1}function gv(t,n,a,c,u,p,b,P,D){var te=Array.prototype.slice.call(arguments,3);try{n.apply(a,te)}catch(he){this.onError(he)}}var xa=!1,Ni=null,Mi=!1,Il=null,vv={onError:function(t){xa=!0,Ni=t}};function yv(t,n,a,c,u,p,b,P,D){xa=!1,Ni=null,gv.apply(vv,arguments)}function xv(t,n,a,c,u,p,b,P,D){if(yv.apply(this,arguments),xa){if(xa){var te=Ni;xa=!1,Ni=null}else throw Error(i(198));Mi||(Mi=!0,Il=te)}}function Ur(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Nh(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Mh(t){if(Ur(t)!==t)throw Error(i(188))}function wv(t){var n=t.alternate;if(!n){if(n=Ur(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,c=n;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return Mh(u),t;if(p===c)return Mh(u),n;p=p.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=p;else{for(var b=!1,P=u.child;P;){if(P===a){b=!0,a=u,c=p;break}if(P===c){b=!0,c=u,a=p;break}P=P.sibling}if(!b){for(P=p.child;P;){if(P===a){b=!0,a=p,c=u;break}if(P===c){b=!0,c=p,a=u;break}P=P.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function Rh(t){return t=wv(t),t!==null?Lh(t):null}function Lh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Lh(t);if(n!==null)return n;t=t.sibling}return null}var Ah=o.unstable_scheduleCallback,$h=o.unstable_cancelCallback,bv=o.unstable_shouldYield,kv=o.unstable_requestPaint,ft=o.unstable_now,_v=o.unstable_getCurrentPriorityLevel,El=o.unstable_ImmediatePriority,Th=o.unstable_UserBlockingPriority,Ri=o.unstable_NormalPriority,Cv=o.unstable_LowPriority,Ih=o.unstable_IdlePriority,Li=null,Wn=null;function jv(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Li,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:Mv,Sv=Math.log,Nv=Math.LN2;function Mv(t){return t>>>=0,t===0?32:31-(Sv(t)/Nv|0)|0}var Ai=64,$i=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ti(t,n){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,p=t.pingedLanes,b=a&268435455;if(b!==0){var P=b&~u;P!==0?c=wa(P):(p&=b,p!==0&&(c=wa(p)))}else b=a&~u,b!==0?c=wa(b):p!==0&&(c=wa(p));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((c&4)!==0&&(c|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)a=31-Rn(n),u=1<<a,c|=t[a],n&=~u;return c}function Rv(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lv(t,n){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var b=31-Rn(p),P=1<<b,D=u[b];D===-1?((P&a)===0||(P&c)!==0)&&(u[b]=Rv(P,n)):D<=n&&(t.expiredLanes|=P),p&=~P}}function Pl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eh(){var t=Ai;return Ai<<=1,(Ai&4194240)===0&&(Ai=64),t}function zl(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ba(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Rn(n),t[n]=a}function Av(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Rn(a),p=1<<u;n[u]=0,c[u]=-1,t[u]=-1,a&=~p}}function Ol(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var c=31-Rn(a),u=1<<c;u&n|t[c]&n&&(t[c]|=n),a&=~u}}var Xe=0;function Ph(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zh,Dl,Oh,Dh,Fh,Fl=!1,Ii=[],ur=null,hr=null,pr=null,ka=new Map,_a=new Map,fr=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,n){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":ka.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(n.pointerId)}}function Ca(t,n,a,c,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Oa(n),n!==null&&Dl(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Tv(t,n,a,c,u){switch(n){case"focusin":return ur=Ca(ur,t,n,a,c,u),!0;case"dragenter":return hr=Ca(hr,t,n,a,c,u),!0;case"mouseover":return pr=Ca(pr,t,n,a,c,u),!0;case"pointerover":var p=u.pointerId;return ka.set(p,Ca(ka.get(p)||null,t,n,a,c,u)),!0;case"gotpointercapture":return p=u.pointerId,_a.set(p,Ca(_a.get(p)||null,t,n,a,c,u)),!0}return!1}function Wh(t){var n=qr(t.target);if(n!==null){var a=Ur(n);if(a!==null){if(n=a.tag,n===13){if(n=Nh(a),n!==null){t.blockedOn=n,Fh(t.priority,function(){Oh(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ei(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Vt=c,a.target.dispatchEvent(c),Vt=null}else return n=Oa(a),n!==null&&Dl(n),t.blockedOn=a,!1;n.shift()}return!0}function Hh(t,n,a){Ei(t)&&a.delete(n)}function Iv(){Fl=!1,ur!==null&&Ei(ur)&&(ur=null),hr!==null&&Ei(hr)&&(hr=null),pr!==null&&Ei(pr)&&(pr=null),ka.forEach(Hh),_a.forEach(Hh)}function ja(t,n){t.blockedOn===n&&(t.blockedOn=null,Fl||(Fl=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Iv)))}function Sa(t){function n(u){return ja(u,t)}if(0<Ii.length){ja(Ii[0],t);for(var a=1;a<Ii.length;a++){var c=Ii[a];c.blockedOn===t&&(c.blockedOn=null)}}for(ur!==null&&ja(ur,t),hr!==null&&ja(hr,t),pr!==null&&ja(pr,t),ka.forEach(n),_a.forEach(n),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Wh(a),a.blockedOn===null&&fr.shift()}var ko=O.ReactCurrentBatchConfig,Pi=!0;function Ev(t,n,a,c){var u=Xe,p=ko.transition;ko.transition=null;try{Xe=1,Bl(t,n,a,c)}finally{Xe=u,ko.transition=p}}function Pv(t,n,a,c){var u=Xe,p=ko.transition;ko.transition=null;try{Xe=4,Bl(t,n,a,c)}finally{Xe=u,ko.transition=p}}function Bl(t,n,a,c){if(Pi){var u=Wl(t,n,a,c);if(u===null)ac(t,n,c,zi,a),Bh(t,c);else if(Tv(u,t,n,a,c))c.stopPropagation();else if(Bh(t,c),n&4&&-1<$v.indexOf(t)){for(;u!==null;){var p=Oa(u);if(p!==null&&zh(p),p=Wl(t,n,a,c),p===null&&ac(t,n,c,zi,a),p===u)break;u=p}u!==null&&c.stopPropagation()}else ac(t,n,c,null,a)}}var zi=null;function Wl(t,n,a,c){if(zi=null,t=dr(c),t=qr(t),t!==null)if(n=Ur(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Nh(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return zi=t,null}function Uh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case El:return 1;case Th:return 4;case Ri:case Cv:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var mr=null,Hl=null,Oi=null;function qh(){if(Oi)return Oi;var t,n=Hl,a=n.length,c,u="value"in mr?mr.value:mr.textContent,p=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&n[a-c]===u[p-c];c++);return Oi=u.slice(t,1<c?1-c:void 0)}function Di(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fi(){return!0}function Vh(){return!1}function an(t){function n(a,c,u,p,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Fi:Vh,this.isPropagationStopped=Vh,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),n}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=an(_o),Na=V({},_o,{view:0,detail:0}),zv=an(Na),ql,Vl,Ma,Bi=V({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(ql=t.screenX-Ma.screenX,Vl=t.screenY-Ma.screenY):Vl=ql=0,Ma=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),Gh=an(Bi),Ov=V({},Bi,{dataTransfer:0}),Dv=an(Ov),Fv=V({},Na,{relatedTarget:0}),Gl=an(Fv),Bv=V({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=an(Bv),Hv=V({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uv=an(Hv),qv=V({},_o,{data:0}),Yh=an(qv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Yv[t])?!!n[t]:!1}function Yl(){return Kv}var Qv=V({},Na,{key:function(t){if(t.key){var n=Vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Di(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(t){return t.type==="keypress"?Di(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Di(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=an(Qv),Xv=V({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=an(Xv),Jv=V({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),e3=an(Jv),t3=V({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),n3=an(t3),r3=V({},Bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o3=an(r3),a3=[9,13,27,32],Kl=f&&"CompositionEvent"in window,Ra=null;f&&"documentMode"in document&&(Ra=document.documentMode);var i3=f&&"TextEvent"in window&&!Ra,Qh=f&&(!Kl||Ra&&8<Ra&&11>=Ra),Zh=" ",Xh=!1;function Jh(t,n){switch(t){case"keyup":return a3.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Co=!1;function s3(t,n){switch(t){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:(Xh=!0,Zh);case"textInput":return t=n.data,t===Zh&&Xh?null:t;default:return null}}function l3(t,n){if(Co)return t==="compositionend"||!Kl&&Jh(t,n)?(t=qh(),Oi=Hl=mr=null,Co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var c3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!c3[t.type]:n==="textarea"}function np(t,n,a,c){kh(c),n=Vi(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,c),t.push({event:a,listeners:n}))}var La=null,Aa=null;function d3(t){wp(t,0)}function Wi(t){var n=Ro(t);if(me(n))return t}function u3(t,n){if(t==="change")return n}var rp=!1;if(f){var Ql;if(f){var Zl="oninput"in document;if(!Zl){var op=document.createElement("div");op.setAttribute("oninput","return;"),Zl=typeof op.oninput=="function"}Ql=Zl}else Ql=!1;rp=Ql&&(!document.documentMode||9<document.documentMode)}function ap(){La&&(La.detachEvent("onpropertychange",ip),Aa=La=null)}function ip(t){if(t.propertyName==="value"&&Wi(Aa)){var n=[];np(n,Aa,t,dr(t)),Sh(d3,n)}}function h3(t,n,a){t==="focusin"?(ap(),La=n,Aa=a,La.attachEvent("onpropertychange",ip)):t==="focusout"&&ap()}function p3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wi(Aa)}function f3(t,n){if(t==="click")return Wi(n)}function m3(t,n){if(t==="input"||t==="change")return Wi(n)}function g3(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ln=typeof Object.is=="function"?Object.is:g3;function $a(t,n){if(Ln(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(n,u)||!Ln(t[u],n[u]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var a=sp(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=n&&c>=n)return{node:a,offset:n-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dp(){for(var t=window,n=be();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=be(t.document)}return n}function Xl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function v3(t){var n=dp(),a=t.focusedElem,c=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&cp(a.ownerDocument.documentElement,a)){if(c!==null&&Xl(a)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!t.extend&&p>c&&(u=c,c=p,p=u),u=lp(a,p);var b=lp(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),p>c?(t.addRange(n),t.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y3=f&&"documentMode"in document&&11>=document.documentMode,jo=null,Jl=null,Ta=null,ec=!1;function up(t,n,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||jo==null||jo!==be(c)||(c=jo,"selectionStart"in c&&Xl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&$a(Ta,c)||(Ta=c,c=Vi(Jl,"onSelect"),0<c.length&&(n=new Ul("onSelect","select",null,n,a),t.push({event:n,listeners:c}),n.target=jo)))}function Hi(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var So={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},tc={},hp={};f&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Ui(t){if(tc[t])return tc[t];if(!So[t])return t;var n=So[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return tc[t]=n[a];return t}var pp=Ui("animationend"),fp=Ui("animationiteration"),mp=Ui("animationstart"),gp=Ui("transitionend"),vp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,n){vp.set(t,n),d(n,[t])}for(var nc=0;nc<yp.length;nc++){var rc=yp[nc],x3=rc.toLowerCase(),w3=rc[0].toUpperCase()+rc.slice(1);gr(x3,"on"+w3)}gr(pp,"onAnimationEnd"),gr(fp,"onAnimationIteration"),gr(mp,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(gp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function xp(t,n,a){var c=t.type||"unknown-event";t.currentTarget=a,xv(c,n,void 0,t),t.currentTarget=null}function wp(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var b=c.length-1;0<=b;b--){var P=c[b],D=P.instance,te=P.currentTarget;if(P=P.listener,D!==p&&u.isPropagationStopped())break e;xp(u,P,te),p=D}else for(b=0;b<c.length;b++){if(P=c[b],D=P.instance,te=P.currentTarget,P=P.listener,D!==p&&u.isPropagationStopped())break e;xp(u,P,te),p=D}}}if(Mi)throw t=Il,Mi=!1,Il=null,t}function rt(t,n){var a=n[uc];a===void 0&&(a=n[uc]=new Set);var c=t+"__bubble";a.has(c)||(bp(n,t,2,!1),a.add(c))}function oc(t,n,a){var c=0;n&&(c|=4),bp(a,t,c,n)}var qi="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[qi]){t[qi]=!0,s.forEach(function(a){a!=="selectionchange"&&(b3.has(a)||oc(a,!1,t),oc(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[qi]||(n[qi]=!0,oc("selectionchange",!1,n))}}function bp(t,n,a,c){switch(Uh(n)){case 1:var u=Ev;break;case 4:u=Pv;break;default:u=Bl}a=u.bind(null,n,a,t),u=void 0,!Tl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ac(t,n,a,c,u){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var D=b.tag;if((D===3||D===4)&&(D=b.stateNode.containerInfo,D===u||D.nodeType===8&&D.parentNode===u))return;b=b.return}for(;P!==null;){if(b=qr(P),b===null)return;if(D=b.tag,D===5||D===6){c=p=b;continue e}P=P.parentNode}}c=c.return}Sh(function(){var te=p,he=dr(a),fe=[];e:{var ue=vp.get(t);if(ue!==void 0){var ye=Ul,_e=t;switch(t){case"keypress":if(Di(a)===0)break e;case"keydown":case"keyup":ye=Zv;break;case"focusin":_e="focus",ye=Gl;break;case"focusout":_e="blur",ye=Gl;break;case"beforeblur":case"afterblur":ye=Gl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=e3;break;case pp:case fp:case mp:ye=Wv;break;case gp:ye=n3;break;case"scroll":ye=zv;break;case"wheel":ye=o3;break;case"copy":case"cut":case"paste":ye=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Kh}var Ce=(n&4)!==0,mt=!Ce&&t==="scroll",Q=Ce?ue!==null?ue+"Capture":null:ue;Ce=[];for(var U=te,J;U!==null;){J=U;var ge=J.stateNode;if(J.tag===5&&ge!==null&&(J=ge,Q!==null&&(ge=va(U,Q),ge!=null&&Ce.push(Pa(U,ge,J)))),mt)break;U=U.return}0<Ce.length&&(ue=new ye(ue,_e,null,a,he),fe.push({event:ue,listeners:Ce}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==Vt&&(_e=a.relatedTarget||a.fromElement)&&(qr(_e)||_e[Qn]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(_e=a.relatedTarget||a.toElement,ye=te,_e=_e?qr(_e):null,_e!==null&&(mt=Ur(_e),_e!==mt||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(ye=null,_e=te),ye!==_e)){if(Ce=Gh,ge="onMouseLeave",Q="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(Ce=Kh,ge="onPointerLeave",Q="onPointerEnter",U="pointer"),mt=ye==null?ue:Ro(ye),J=_e==null?ue:Ro(_e),ue=new Ce(ge,U+"leave",ye,a,he),ue.target=mt,ue.relatedTarget=J,ge=null,qr(he)===te&&(Ce=new Ce(Q,U+"enter",_e,a,he),Ce.target=J,Ce.relatedTarget=mt,ge=Ce),mt=ge,ye&&_e)t:{for(Ce=ye,Q=_e,U=0,J=Ce;J;J=No(J))U++;for(J=0,ge=Q;ge;ge=No(ge))J++;for(;0<U-J;)Ce=No(Ce),U--;for(;0<J-U;)Q=No(Q),J--;for(;U--;){if(Ce===Q||Q!==null&&Ce===Q.alternate)break t;Ce=No(Ce),Q=No(Q)}Ce=null}else Ce=null;ye!==null&&kp(fe,ue,ye,Ce,!1),_e!==null&&mt!==null&&kp(fe,mt,_e,Ce,!0)}}e:{if(ue=te?Ro(te):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var je=u3;else if(tp(ue))if(rp)je=m3;else{je=p3;var Ne=h3}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(je=f3);if(je&&(je=je(t,te))){np(fe,je,a,he);break e}Ne&&Ne(t,ue,te),t==="focusout"&&(Ne=ue._wrapperState)&&Ne.controlled&&ue.type==="number"&&Te(ue,"number",ue.value)}switch(Ne=te?Ro(te):window,t){case"focusin":(tp(Ne)||Ne.contentEditable==="true")&&(jo=Ne,Jl=te,Ta=null);break;case"focusout":Ta=Jl=jo=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,up(fe,a,he);break;case"selectionchange":if(y3)break;case"keydown":case"keyup":up(fe,a,he)}var Me;if(Kl)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Co?Jh(t,a)&&(Ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Qh&&a.locale!=="ko"&&(Co||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Co&&(Me=qh()):(mr=he,Hl="value"in mr?mr.value:mr.textContent,Co=!0)),Ne=Vi(te,Ae),0<Ne.length&&(Ae=new Yh(Ae,t,null,a,he),fe.push({event:Ae,listeners:Ne}),Me?Ae.data=Me:(Me=ep(a),Me!==null&&(Ae.data=Me)))),(Me=i3?s3(t,a):l3(t,a))&&(te=Vi(te,"onBeforeInput"),0<te.length&&(he=new Yh("onBeforeInput","beforeinput",null,a,he),fe.push({event:he,listeners:te}),he.data=Me))}wp(fe,n)})}function Pa(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Vi(t,n){for(var a=n+"Capture",c=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=va(t,a),p!=null&&c.unshift(Pa(t,p,u)),p=va(t,n),p!=null&&c.push(Pa(t,p,u))),t=t.return}return c}function No(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kp(t,n,a,c,u){for(var p=n._reactName,b=[];a!==null&&a!==c;){var P=a,D=P.alternate,te=P.stateNode;if(D!==null&&D===c)break;P.tag===5&&te!==null&&(P=te,u?(D=va(a,p),D!=null&&b.unshift(Pa(a,D,P))):u||(D=va(a,p),D!=null&&b.push(Pa(a,D,P)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var k3=/\r\n?/g,_3=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace(k3,`
`).replace(_3,"")}function Gi(t,n,a){if(n=_p(n),_p(t)!==n&&a)throw Error(i(425))}function Yi(){}var ic=null,sc=null;function lc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,C3=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,j3=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(S3)}:cc;function S3(t){setTimeout(function(){throw t})}function dc(t,n){var a=n,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Sa(n);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Sa(n)}function vr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function jp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Mo,za="__reactProps$"+Mo,Qn="__reactContainer$"+Mo,uc="__reactEvents$"+Mo,N3="__reactListeners$"+Mo,M3="__reactHandles$"+Mo;function qr(t){var n=t[Hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Qn]||a[Hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jp(t);t!==null;){if(a=t[Hn])return a;t=jp(t)}return n}t=a,a=t.parentNode}return null}function Oa(t){return t=t[Hn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Ki(t){return t[za]||null}var hc=[],Lo=-1;function yr(t){return{current:t}}function ot(t){0>Lo||(t.current=hc[Lo],hc[Lo]=null,Lo--)}function tt(t,n){Lo++,hc[Lo]=t.current,t.current=n}var xr={},Pt=yr(xr),Gt=yr(!1),Vr=xr;function Ao(t,n){var a=t.type.contextTypes;if(!a)return xr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=n[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Yt(t){return t=t.childContextTypes,t!=null}function Qi(){ot(Gt),ot(Pt)}function Sp(t,n,a){if(Pt.current!==xr)throw Error(i(168));tt(Pt,n),tt(Gt,a)}function Np(t,n,a){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,H(t)||"Unknown",u));return V({},a,c)}function Zi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Vr=Pt.current,tt(Pt,t),tt(Gt,Gt.current),!0}function Mp(t,n,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Np(t,n,Vr),c.__reactInternalMemoizedMergedChildContext=t,ot(Gt),ot(Pt),tt(Pt,t)):ot(Gt),tt(Gt,a)}var Zn=null,Xi=!1,pc=!1;function Rp(t){Zn===null?Zn=[t]:Zn.push(t)}function R3(t){Xi=!0,Rp(t)}function wr(){if(!pc&&Zn!==null){pc=!0;var t=0,n=Xe;try{var a=Zn;for(Xe=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Zn=null,Xi=!1}catch(u){throw Zn!==null&&(Zn=Zn.slice(t+1)),Ah(El,wr),u}finally{Xe=n,pc=!1}}return null}var $o=[],To=0,Ji=null,es=0,yn=[],xn=0,Gr=null,Xn=1,Jn="";function Yr(t,n){$o[To++]=es,$o[To++]=Ji,Ji=t,es=n}function Lp(t,n,a){yn[xn++]=Xn,yn[xn++]=Jn,yn[xn++]=Gr,Gr=t;var c=Xn;t=Jn;var u=32-Rn(c)-1;c&=~(1<<u),a+=1;var p=32-Rn(n)+u;if(30<p){var b=u-u%5;p=(c&(1<<b)-1).toString(32),c>>=b,u-=b,Xn=1<<32-Rn(n)+u|a<<u|c,Jn=p+t}else Xn=1<<p|a<<u|c,Jn=t}function fc(t){t.return!==null&&(Yr(t,1),Lp(t,1,0))}function mc(t){for(;t===Ji;)Ji=$o[--To],$o[To]=null,es=$o[--To],$o[To]=null;for(;t===Gr;)Gr=yn[--xn],yn[xn]=null,Jn=yn[--xn],yn[xn]=null,Xn=yn[--xn],yn[xn]=null}var sn=null,ln=null,st=!1,An=null;function Ap(t,n){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function $p(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,sn=t,ln=vr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,sn=t,ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Gr!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,sn=t,ln=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(st){var n=ln;if(n){var a=n;if(!$p(t,n)){if(gc(t))throw Error(i(418));n=vr(a.nextSibling);var c=sn;n&&$p(t,n)?Ap(c,a):(t.flags=t.flags&-4097|2,st=!1,sn=t)}}else{if(gc(t))throw Error(i(418));t.flags=t.flags&-4097|2,st=!1,sn=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function ts(t){if(t!==sn)return!1;if(!st)return Tp(t),st=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!lc(t.type,t.memoizedProps)),n&&(n=ln)){if(gc(t))throw Ip(),Error(i(418));for(;n;)Ap(t,n),n=vr(n.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){ln=vr(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}ln=null}}else ln=sn?vr(t.stateNode.nextSibling):null;return!0}function Ip(){for(var t=ln;t;)t=vr(t.nextSibling)}function Io(){ln=sn=null,st=!1}function yc(t){An===null?An=[t]:An.push(t)}var L3=O.ReactCurrentBatchConfig;function Da(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(b){var P=u.refs;b===null?delete P[p]:P[p]=b},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function ns(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Ep(t){var n=t._init;return n(t._payload)}function Pp(t){function n(Q,U){if(t){var J=Q.deletions;J===null?(Q.deletions=[U],Q.flags|=16):J.push(U)}}function a(Q,U){if(!t)return null;for(;U!==null;)n(Q,U),U=U.sibling;return null}function c(Q,U){for(Q=new Map;U!==null;)U.key!==null?Q.set(U.key,U):Q.set(U.index,U),U=U.sibling;return Q}function u(Q,U){return Q=Mr(Q,U),Q.index=0,Q.sibling=null,Q}function p(Q,U,J){return Q.index=J,t?(J=Q.alternate,J!==null?(J=J.index,J<U?(Q.flags|=2,U):J):(Q.flags|=2,U)):(Q.flags|=1048576,U)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function P(Q,U,J,ge){return U===null||U.tag!==6?(U=cd(J,Q.mode,ge),U.return=Q,U):(U=u(U,J),U.return=Q,U)}function D(Q,U,J,ge){var je=J.type;return je===T?he(Q,U,J.props.children,ge,J.key):U!==null&&(U.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Ep(je)===U.type)?(ge=u(U,J.props),ge.ref=Da(Q,U,J),ge.return=Q,ge):(ge=Ss(J.type,J.key,J.props,null,Q.mode,ge),ge.ref=Da(Q,U,J),ge.return=Q,ge)}function te(Q,U,J,ge){return U===null||U.tag!==4||U.stateNode.containerInfo!==J.containerInfo||U.stateNode.implementation!==J.implementation?(U=dd(J,Q.mode,ge),U.return=Q,U):(U=u(U,J.children||[]),U.return=Q,U)}function he(Q,U,J,ge,je){return U===null||U.tag!==7?(U=no(J,Q.mode,ge,je),U.return=Q,U):(U=u(U,J),U.return=Q,U)}function fe(Q,U,J){if(typeof U=="string"&&U!==""||typeof U=="number")return U=cd(""+U,Q.mode,J),U.return=Q,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return J=Ss(U.type,U.key,U.props,null,Q.mode,J),J.ref=Da(Q,null,U),J.return=Q,J;case N:return U=dd(U,Q.mode,J),U.return=Q,U;case re:var ge=U._init;return fe(Q,ge(U._payload),J)}if(Ve(U)||W(U))return U=no(U,Q.mode,J,null),U.return=Q,U;ns(Q,U)}return null}function ue(Q,U,J,ge){var je=U!==null?U.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:P(Q,U,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case R:return J.key===je?D(Q,U,J,ge):null;case N:return J.key===je?te(Q,U,J,ge):null;case re:return je=J._init,ue(Q,U,je(J._payload),ge)}if(Ve(J)||W(J))return je!==null?null:he(Q,U,J,ge,null);ns(Q,J)}return null}function ye(Q,U,J,ge,je){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return Q=Q.get(J)||null,P(U,Q,""+ge,je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case R:return Q=Q.get(ge.key===null?J:ge.key)||null,D(U,Q,ge,je);case N:return Q=Q.get(ge.key===null?J:ge.key)||null,te(U,Q,ge,je);case re:var Ne=ge._init;return ye(Q,U,J,Ne(ge._payload),je)}if(Ve(ge)||W(ge))return Q=Q.get(J)||null,he(U,Q,ge,je,null);ns(U,ge)}return null}function _e(Q,U,J,ge){for(var je=null,Ne=null,Me=U,Ae=U=0,Nt=null;Me!==null&&Ae<J.length;Ae++){Me.index>Ae?(Nt=Me,Me=null):Nt=Me.sibling;var Ke=ue(Q,Me,J[Ae],ge);if(Ke===null){Me===null&&(Me=Nt);break}t&&Me&&Ke.alternate===null&&n(Q,Me),U=p(Ke,U,Ae),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke,Me=Nt}if(Ae===J.length)return a(Q,Me),st&&Yr(Q,Ae),je;if(Me===null){for(;Ae<J.length;Ae++)Me=fe(Q,J[Ae],ge),Me!==null&&(U=p(Me,U,Ae),Ne===null?je=Me:Ne.sibling=Me,Ne=Me);return st&&Yr(Q,Ae),je}for(Me=c(Q,Me);Ae<J.length;Ae++)Nt=ye(Me,Q,Ae,J[Ae],ge),Nt!==null&&(t&&Nt.alternate!==null&&Me.delete(Nt.key===null?Ae:Nt.key),U=p(Nt,U,Ae),Ne===null?je=Nt:Ne.sibling=Nt,Ne=Nt);return t&&Me.forEach(function(Rr){return n(Q,Rr)}),st&&Yr(Q,Ae),je}function Ce(Q,U,J,ge){var je=W(J);if(typeof je!="function")throw Error(i(150));if(J=je.call(J),J==null)throw Error(i(151));for(var Ne=je=null,Me=U,Ae=U=0,Nt=null,Ke=J.next();Me!==null&&!Ke.done;Ae++,Ke=J.next()){Me.index>Ae?(Nt=Me,Me=null):Nt=Me.sibling;var Rr=ue(Q,Me,Ke.value,ge);if(Rr===null){Me===null&&(Me=Nt);break}t&&Me&&Rr.alternate===null&&n(Q,Me),U=p(Rr,U,Ae),Ne===null?je=Rr:Ne.sibling=Rr,Ne=Rr,Me=Nt}if(Ke.done)return a(Q,Me),st&&Yr(Q,Ae),je;if(Me===null){for(;!Ke.done;Ae++,Ke=J.next())Ke=fe(Q,Ke.value,ge),Ke!==null&&(U=p(Ke,U,Ae),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke);return st&&Yr(Q,Ae),je}for(Me=c(Q,Me);!Ke.done;Ae++,Ke=J.next())Ke=ye(Me,Q,Ae,Ke.value,ge),Ke!==null&&(t&&Ke.alternate!==null&&Me.delete(Ke.key===null?Ae:Ke.key),U=p(Ke,U,Ae),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke);return t&&Me.forEach(function(cy){return n(Q,cy)}),st&&Yr(Q,Ae),je}function mt(Q,U,J,ge){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case R:e:{for(var je=J.key,Ne=U;Ne!==null;){if(Ne.key===je){if(je=J.type,je===T){if(Ne.tag===7){a(Q,Ne.sibling),U=u(Ne,J.props.children),U.return=Q,Q=U;break e}}else if(Ne.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Ep(je)===Ne.type){a(Q,Ne.sibling),U=u(Ne,J.props),U.ref=Da(Q,Ne,J),U.return=Q,Q=U;break e}a(Q,Ne);break}else n(Q,Ne);Ne=Ne.sibling}J.type===T?(U=no(J.props.children,Q.mode,ge,J.key),U.return=Q,Q=U):(ge=Ss(J.type,J.key,J.props,null,Q.mode,ge),ge.ref=Da(Q,U,J),ge.return=Q,Q=ge)}return b(Q);case N:e:{for(Ne=J.key;U!==null;){if(U.key===Ne)if(U.tag===4&&U.stateNode.containerInfo===J.containerInfo&&U.stateNode.implementation===J.implementation){a(Q,U.sibling),U=u(U,J.children||[]),U.return=Q,Q=U;break e}else{a(Q,U);break}else n(Q,U);U=U.sibling}U=dd(J,Q.mode,ge),U.return=Q,Q=U}return b(Q);case re:return Ne=J._init,mt(Q,U,Ne(J._payload),ge)}if(Ve(J))return _e(Q,U,J,ge);if(W(J))return Ce(Q,U,J,ge);ns(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,U!==null&&U.tag===6?(a(Q,U.sibling),U=u(U,J),U.return=Q,Q=U):(a(Q,U),U=cd(J,Q.mode,ge),U.return=Q,Q=U),b(Q)):a(Q,U)}return mt}var Eo=Pp(!0),zp=Pp(!1),rs=yr(null),os=null,Po=null,xc=null;function wc(){xc=Po=os=null}function bc(t){var n=rs.current;ot(rs),t._currentValue=n}function kc(t,n,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===a)break;t=t.return}}function zo(t,n){os=t,xc=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Kt=!0),t.firstContext=null)}function wn(t){var n=t._currentValue;if(xc!==t)if(t={context:t,memoizedValue:n,next:null},Po===null){if(os===null)throw Error(i(308));Po=t,os.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return n}var Kr=null;function _c(t){Kr===null?Kr=[t]:Kr.push(t)}function Op(t,n,a,c){var u=n.interleaved;return u===null?(a.next=a,_c(n)):(a.next=u.next,u.next=a),n.interleaved=a,er(t,c)}function er(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var br=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function kr(t,n,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ge&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,er(t,a)}return u=c.interleaved,u===null?(n.next=n,_c(c)):(n.next=u.next,u.next=n),c.interleaved=n,er(t,a)}function as(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,a|=c,n.lanes=a,Ol(t,a)}}function Fp(t,n){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=b:p=p.next=b,a=a.next}while(a!==null);p===null?u=p=n:p=p.next=n}else u=p=n;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function is(t,n,a,c){var u=t.updateQueue;br=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var D=P,te=D.next;D.next=null,b===null?p=te:b.next=te,b=D;var he=t.alternate;he!==null&&(he=he.updateQueue,P=he.lastBaseUpdate,P!==b&&(P===null?he.firstBaseUpdate=te:P.next=te,he.lastBaseUpdate=D))}if(p!==null){var fe=u.baseState;b=0,he=te=D=null,P=p;do{var ue=P.lane,ye=P.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var _e=t,Ce=P;switch(ue=n,ye=a,Ce.tag){case 1:if(_e=Ce.payload,typeof _e=="function"){fe=_e.call(ye,fe,ue);break e}fe=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=Ce.payload,ue=typeof _e=="function"?_e.call(ye,fe,ue):_e,ue==null)break e;fe=V({},fe,ue);break e;case 2:br=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[P]:ue.push(P))}else ye={eventTime:ye,lane:ue,tag:P.tag,payload:P.payload,callback:P.callback,next:null},he===null?(te=he=ye,D=fe):he=he.next=ye,b|=ue;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;ue=P,P=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(D=fe),u.baseState=D,u.firstBaseUpdate=te,u.lastBaseUpdate=he,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);Xr|=b,t.lanes=b,t.memoizedState=fe}}function Bp(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Fa={},Un=yr(Fa),Ba=yr(Fa),Wa=yr(Fa);function Qr(t){if(t===Fa)throw Error(i(174));return t}function jc(t,n){switch(tt(Wa,n),tt(Ba,t),tt(Un,Fa),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=lt(n,t)}ot(Un),tt(Un,n)}function Oo(){ot(Un),ot(Ba),ot(Wa)}function Wp(t){Qr(Wa.current);var n=Qr(Un.current),a=lt(n,t.type);n!==a&&(tt(Ba,t),tt(Un,a))}function Sc(t){Ba.current===t&&(ot(Un),ot(Ba))}var ct=yr(0);function ss(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Nc=[];function Mc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var ls=O.ReactCurrentDispatcher,Rc=O.ReactCurrentBatchConfig,Zr=0,dt=null,kt=null,jt=null,cs=!1,Ha=!1,Ua=0,A3=0;function zt(){throw Error(i(321))}function Lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ln(t[a],n[a]))return!1;return!0}function Ac(t,n,a,c,u,p){if(Zr=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ls.current=t===null||t.memoizedState===null?E3:P3,t=a(c,u),Ha){p=0;do{if(Ha=!1,Ua=0,25<=p)throw Error(i(301));p+=1,jt=kt=null,n.updateQueue=null,ls.current=z3,t=a(c,u)}while(Ha)}if(ls.current=hs,n=kt!==null&&kt.next!==null,Zr=0,jt=kt=dt=null,cs=!1,n)throw Error(i(300));return t}function $c(){var t=Ua!==0;return Ua=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?dt.memoizedState=jt=t:jt=jt.next=t,jt}function bn(){if(kt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=jt===null?dt.memoizedState:jt.next;if(n!==null)jt=n,kt=t;else{if(t===null)throw Error(i(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?dt.memoizedState=jt=t:jt=jt.next=t}return jt}function qa(t,n){return typeof n=="function"?n(t):n}function Tc(t){var n=bn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=kt,u=c.baseQueue,p=a.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}c.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,c=c.baseState;var P=b=null,D=null,te=p;do{var he=te.lane;if((Zr&he)===he)D!==null&&(D=D.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var fe={lane:he,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};D===null?(P=D=fe,b=c):D=D.next=fe,dt.lanes|=he,Xr|=he}te=te.next}while(te!==null&&te!==p);D===null?b=c:D.next=P,Ln(c,n.memoizedState)||(Kt=!0),n.memoizedState=c,n.baseState=b,n.baseQueue=D,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do p=u.lane,dt.lanes|=p,Xr|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Ic(t){var n=bn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,p=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do p=t(p,b.action),b=b.next;while(b!==u);Ln(p,n.memoizedState)||(Kt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,c]}function Hp(){}function Up(t,n){var a=dt,c=bn(),u=n(),p=!Ln(c.memoizedState,u);if(p&&(c.memoizedState=u,Kt=!0),c=c.queue,Ec(Gp.bind(null,a,c,t),[t]),c.getSnapshot!==n||p||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,Va(9,Vp.bind(null,a,c,u,n),void 0,null),St===null)throw Error(i(349));(Zr&30)!==0||qp(a,n,u)}return u}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vp(t,n,a,c){n.value=a,n.getSnapshot=c,Yp(n)&&Kp(t)}function Gp(t,n,a){return a(function(){Yp(n)&&Kp(t)})}function Yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ln(t,a)}catch{return!0}}function Kp(t){var n=er(t,1);n!==null&&En(n,t,1,-1)}function Qp(t){var n=qn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},n.queue=t,t=t.dispatch=I3.bind(null,dt,t),[n.memoizedState,t]}function Va(t,n,a,c){return t={tag:t,create:n,destroy:a,deps:c,next:null},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,n.lastEffect=t)),t}function Zp(){return bn().memoizedState}function ds(t,n,a,c){var u=qn();dt.flags|=t,u.memoizedState=Va(1|n,a,void 0,c===void 0?null:c)}function us(t,n,a,c){var u=bn();c=c===void 0?null:c;var p=void 0;if(kt!==null){var b=kt.memoizedState;if(p=b.destroy,c!==null&&Lc(c,b.deps)){u.memoizedState=Va(n,a,p,c);return}}dt.flags|=t,u.memoizedState=Va(1|n,a,p,c)}function Xp(t,n){return ds(8390656,8,t,n)}function Ec(t,n){return us(2048,8,t,n)}function Jp(t,n){return us(4,2,t,n)}function e1(t,n){return us(4,4,t,n)}function t1(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function n1(t,n,a){return a=a!=null?a.concat([t]):null,us(4,4,t1.bind(null,n,t),a)}function Pc(){}function r1(t,n){var a=bn();n=n===void 0?null:n;var c=a.memoizedState;return c!==null&&n!==null&&Lc(n,c[1])?c[0]:(a.memoizedState=[t,n],t)}function o1(t,n){var a=bn();n=n===void 0?null:n;var c=a.memoizedState;return c!==null&&n!==null&&Lc(n,c[1])?c[0]:(t=t(),a.memoizedState=[t,n],t)}function a1(t,n,a){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=a):(Ln(a,n)||(a=Eh(),dt.lanes|=a,Xr|=a,t.baseState=!0),n)}function $3(t,n){var a=Xe;Xe=a!==0&&4>a?a:4,t(!0);var c=Rc.transition;Rc.transition={};try{t(!1),n()}finally{Xe=a,Rc.transition=c}}function i1(){return bn().memoizedState}function T3(t,n,a){var c=Sr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},s1(t))l1(n,a);else if(a=Op(t,n,a,c),a!==null){var u=Ht();En(a,t,c,u),c1(a,n,c)}}function I3(t,n,a){var c=Sr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(s1(t))l1(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var b=n.lastRenderedState,P=p(b,a);if(u.hasEagerState=!0,u.eagerState=P,Ln(P,b)){var D=n.interleaved;D===null?(u.next=u,_c(n)):(u.next=D.next,D.next=u),n.interleaved=u;return}}catch{}finally{}a=Op(t,n,u,c),a!==null&&(u=Ht(),En(a,t,c,u),c1(a,n,c))}}function s1(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function l1(t,n){Ha=cs=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function c1(t,n,a){if((a&4194240)!==0){var c=n.lanes;c&=t.pendingLanes,a|=c,n.lanes=a,Ol(t,a)}}var hs={readContext:wn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},E3={readContext:wn,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Xp,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,ds(4194308,4,t1.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ds(4194308,4,t,n)},useInsertionEffect:function(t,n){return ds(4,2,t,n)},useMemo:function(t,n){var a=qn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var c=qn();return n=a!==void 0?a(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=T3.bind(null,dt,t),[c.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:Qp,useDebugValue:Pc,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Qp(!1),n=t[0];return t=$3.bind(null,t[1]),qn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var c=dt,u=qn();if(st){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),St===null)throw Error(i(349));(Zr&30)!==0||qp(c,n,a)}u.memoizedState=a;var p={value:a,getSnapshot:n};return u.queue=p,Xp(Gp.bind(null,c,p,t),[t]),c.flags|=2048,Va(9,Vp.bind(null,c,p,a,n),void 0,null),a},useId:function(){var t=qn(),n=St.identifierPrefix;if(st){var a=Jn,c=Xn;a=(c&~(1<<32-Rn(c)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ua++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=A3++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},P3={readContext:wn,useCallback:r1,useContext:wn,useEffect:Ec,useImperativeHandle:n1,useInsertionEffect:Jp,useLayoutEffect:e1,useMemo:o1,useReducer:Tc,useRef:Zp,useState:function(){return Tc(qa)},useDebugValue:Pc,useDeferredValue:function(t){var n=bn();return a1(n,kt.memoizedState,t)},useTransition:function(){var t=Tc(qa)[0],n=bn().memoizedState;return[t,n]},useMutableSource:Hp,useSyncExternalStore:Up,useId:i1,unstable_isNewReconciler:!1},z3={readContext:wn,useCallback:r1,useContext:wn,useEffect:Ec,useImperativeHandle:n1,useInsertionEffect:Jp,useLayoutEffect:e1,useMemo:o1,useReducer:Ic,useRef:Zp,useState:function(){return Ic(qa)},useDebugValue:Pc,useDeferredValue:function(t){var n=bn();return kt===null?n.memoizedState=t:a1(n,kt.memoizedState,t)},useTransition:function(){var t=Ic(qa)[0],n=bn().memoizedState;return[t,n]},useMutableSource:Hp,useSyncExternalStore:Up,useId:i1,unstable_isNewReconciler:!1};function $n(t,n){if(t&&t.defaultProps){n=V({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function zc(t,n,a,c){n=t.memoizedState,a=a(c,n),a=a==null?n:V({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ps={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var c=Ht(),u=Sr(t),p=tr(c,u);p.payload=n,a!=null&&(p.callback=a),n=kr(t,p,u),n!==null&&(En(n,t,u,c),as(n,t,u))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var c=Ht(),u=Sr(t),p=tr(c,u);p.tag=1,p.payload=n,a!=null&&(p.callback=a),n=kr(t,p,u),n!==null&&(En(n,t,u,c),as(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ht(),c=Sr(t),u=tr(a,c);u.tag=2,n!=null&&(u.callback=n),n=kr(t,u,c),n!==null&&(En(n,t,c,a),as(n,t,c))}};function d1(t,n,a,c,u,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,b):n.prototype&&n.prototype.isPureReactComponent?!$a(a,c)||!$a(u,p):!0}function u1(t,n,a){var c=!1,u=xr,p=n.contextType;return typeof p=="object"&&p!==null?p=wn(p):(u=Yt(n)?Vr:Pt.current,c=n.contextTypes,p=(c=c!=null)?Ao(t,u):xr),n=new n(a,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ps,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),n}function h1(t,n,a,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,c),n.state!==t&&ps.enqueueReplaceState(n,n.state,null)}function Oc(t,n,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Cc(t);var p=n.contextType;typeof p=="object"&&p!==null?u.context=wn(p):(p=Yt(n)?Vr:Pt.current,u.context=Ao(t,p)),u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(zc(t,n,p,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&ps.enqueueReplaceState(u,u.state,null),is(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Do(t,n){try{var a="",c=n;do a+=ie(c),c=c.return;while(c);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:u,digest:null}}function Dc(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function Fc(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var O3=typeof WeakMap=="function"?WeakMap:Map;function p1(t,n,a){a=tr(-1,a),a.tag=3,a.payload={element:null};var c=n.value;return a.callback=function(){ws||(ws=!0,td=c),Fc(t,n)},a}function f1(t,n,a){a=tr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;a.payload=function(){return c(u)},a.callback=function(){Fc(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Fc(t,n),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),a}function m1(t,n,a){var c=t.pingCache;if(c===null){c=t.pingCache=new O3;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(a)||(u.add(a),t=X3.bind(null,t,n,a),n.then(t,t))}function g1(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function v1(t,n,a,c,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=tr(-1,1),n.tag=2,kr(a,n,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var D3=O.ReactCurrentOwner,Kt=!1;function Wt(t,n,a,c){n.child=t===null?zp(n,null,a,c):Eo(n,t.child,a,c)}function y1(t,n,a,c,u){a=a.render;var p=n.ref;return zo(n,u),c=Ac(t,n,a,c,p,u),a=$c(),t!==null&&!Kt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,nr(t,n,u)):(st&&a&&fc(n),n.flags|=1,Wt(t,n,c,u),n.child)}function x1(t,n,a,c,u){if(t===null){var p=a.type;return typeof p=="function"&&!ld(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=p,w1(t,n,p,c,u)):(t=Ss(a.type,null,c,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&u)===0){var b=p.memoizedProps;if(a=a.compare,a=a!==null?a:$a,a(b,c)&&t.ref===n.ref)return nr(t,n,u)}return n.flags|=1,t=Mr(p,c),t.ref=n.ref,t.return=n,n.child=t}function w1(t,n,a,c,u){if(t!==null){var p=t.memoizedProps;if($a(p,c)&&t.ref===n.ref)if(Kt=!1,n.pendingProps=c=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Kt=!0);else return n.lanes=t.lanes,nr(t,n,u)}return Bc(t,n,a,c,u)}function b1(t,n,a){var c=n.pendingProps,u=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Bo,cn),cn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,tt(Bo,cn),cn|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,tt(Bo,cn),cn|=c}else p!==null?(c=p.baseLanes|a,n.memoizedState=null):c=a,tt(Bo,cn),cn|=c;return Wt(t,n,u,a),n.child}function k1(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Bc(t,n,a,c,u){var p=Yt(a)?Vr:Pt.current;return p=Ao(n,p),zo(n,u),a=Ac(t,n,a,c,p,u),c=$c(),t!==null&&!Kt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,nr(t,n,u)):(st&&c&&fc(n),n.flags|=1,Wt(t,n,a,u),n.child)}function _1(t,n,a,c,u){if(Yt(a)){var p=!0;Zi(n)}else p=!1;if(zo(n,u),n.stateNode===null)ms(t,n),u1(n,a,c),Oc(n,a,c,u),c=!0;else if(t===null){var b=n.stateNode,P=n.memoizedProps;b.props=P;var D=b.context,te=a.contextType;typeof te=="object"&&te!==null?te=wn(te):(te=Yt(a)?Vr:Pt.current,te=Ao(n,te));var he=a.getDerivedStateFromProps,fe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";fe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==c||D!==te)&&h1(n,b,c,te),br=!1;var ue=n.memoizedState;b.state=ue,is(n,c,b,u),D=n.memoizedState,P!==c||ue!==D||Gt.current||br?(typeof he=="function"&&(zc(n,a,he,c),D=n.memoizedState),(P=br||d1(n,a,P,c,ue,D,te))?(fe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=D),b.props=c,b.state=D,b.context=te,c=P):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{b=n.stateNode,Dp(t,n),P=n.memoizedProps,te=n.type===n.elementType?P:$n(n.type,P),b.props=te,fe=n.pendingProps,ue=b.context,D=a.contextType,typeof D=="object"&&D!==null?D=wn(D):(D=Yt(a)?Vr:Pt.current,D=Ao(n,D));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(P!==fe||ue!==D)&&h1(n,b,c,D),br=!1,ue=n.memoizedState,b.state=ue,is(n,c,b,u);var _e=n.memoizedState;P!==fe||ue!==_e||Gt.current||br?(typeof ye=="function"&&(zc(n,a,ye,c),_e=n.memoizedState),(te=br||d1(n,a,te,c,ue,_e,D)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,_e,D),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,_e,D)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=_e),b.props=c,b.state=_e,b.context=D,c=te):(typeof b.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),c=!1)}return Wc(t,n,a,c,p,u)}function Wc(t,n,a,c,u,p){k1(t,n);var b=(n.flags&128)!==0;if(!c&&!b)return u&&Mp(n,a,!1),nr(t,n,p);c=n.stateNode,D3.current=n;var P=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&b?(n.child=Eo(n,t.child,null,p),n.child=Eo(n,null,P,p)):Wt(t,n,P,p),n.memoizedState=c.state,u&&Mp(n,a,!0),n.child}function C1(t){var n=t.stateNode;n.pendingContext?Sp(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Sp(t,n.context,!1),jc(t,n.containerInfo)}function j1(t,n,a,c,u){return Io(),yc(u),n.flags|=256,Wt(t,n,a,c),n.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function S1(t,n,a){var c=n.pendingProps,u=ct.current,p=!1,b=(n.flags&128)!==0,P;if((P=b)||(P=t!==null&&t.memoizedState===null?!1:(u&2)!==0),P?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),tt(ct,u&1),t===null)return vc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=c.children,t=c.fallback,p?(c=n.mode,p=n.child,b={mode:"hidden",children:b},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=b):p=Ns(b,c,0,null),t=no(t,c,a,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=Uc(a),n.memoizedState=Hc,t):qc(n,b));if(u=t.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return F3(t,n,b,c,P,u,a);if(p){p=c.fallback,b=n.mode,u=t.child,P=u.sibling;var D={mode:"hidden",children:c.children};return(b&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=D,n.deletions=null):(c=Mr(u,D),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?p=Mr(P,p):(p=no(p,b,a,null),p.flags|=2),p.return=n,c.return=n,c.sibling=p,n.child=c,c=p,p=n.child,b=t.child.memoizedState,b=b===null?Uc(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=t.childLanes&~a,n.memoizedState=Hc,c}return p=t.child,t=p.sibling,c=Mr(p,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=a),c.return=n,c.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=c,n.memoizedState=null,c}function qc(t,n){return n=Ns({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function fs(t,n,a,c){return c!==null&&yc(c),Eo(n,t.child,null,a),t=qc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function F3(t,n,a,c,u,p,b){if(a)return n.flags&256?(n.flags&=-257,c=Dc(Error(i(422))),fs(t,n,b,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=c.fallback,u=n.mode,c=Ns({mode:"visible",children:c.children},u,0,null),p=no(p,u,b,null),p.flags|=2,c.return=n,p.return=n,c.sibling=p,n.child=c,(n.mode&1)!==0&&Eo(n,t.child,null,b),n.child.memoizedState=Uc(b),n.memoizedState=Hc,p);if((n.mode&1)===0)return fs(t,n,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,p=Error(i(419)),c=Dc(p,c,void 0),fs(t,n,b,c)}if(P=(b&t.childLanes)!==0,Kt||P){if(c=St,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,er(t,u),En(c,t,u,-1))}return sd(),c=Dc(Error(i(421))),fs(t,n,b,c)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=J3.bind(null,t),u._reactRetry=n,null):(t=p.treeContext,ln=vr(u.nextSibling),sn=n,st=!0,An=null,t!==null&&(yn[xn++]=Xn,yn[xn++]=Jn,yn[xn++]=Gr,Xn=t.id,Jn=t.overflow,Gr=n),n=qc(n,c.children),n.flags|=4096,n)}function N1(t,n,a){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),kc(t.return,n,a)}function Vc(t,n,a,c,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=u)}function M1(t,n,a){var c=n.pendingProps,u=c.revealOrder,p=c.tail;if(Wt(t,n,c.children,a),c=ct.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N1(t,a,n);else if(t.tag===19)N1(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(tt(ct,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ss(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vc(n,!1,u,a,p);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ss(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Vc(n,!0,a,null,p);break;case"together":Vc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ms(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function nr(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xr|=n.lanes,(a&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=Mr(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Mr(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function B3(t,n,a){switch(n.tag){case 3:C1(n),Io();break;case 5:Wp(n);break;case 1:Yt(n.type)&&Zi(n);break;case 4:jc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;tt(rs,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(tt(ct,ct.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?S1(t,n,a):(tt(ct,ct.current&1),t=nr(t,n,a),t!==null?t.sibling:null);tt(ct,ct.current&1);break;case 19:if(c=(a&n.childLanes)!==0,(t.flags&128)!==0){if(c)return M1(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),tt(ct,ct.current),c)break;return null;case 22:case 23:return n.lanes=0,b1(t,n,a)}return nr(t,n,a)}var R1,Gc,L1,A1;R1=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gc=function(){},L1=function(t,n,a,c){var u=t.memoizedProps;if(u!==c){t=n.stateNode,Qr(Un.current);var p=null;switch(a){case"input":u=ve(t,u),c=ve(t,c),p=[];break;case"select":u=V({},u,{value:void 0}),c=V({},c,{value:void 0}),p=[];break;case"textarea":u=ut(t,u),c=ut(t,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Yi)}et(a,c);var b;a=null;for(te in u)if(!c.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var P=u[te];for(b in P)P.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in c){var D=c[te];if(P=u!=null?u[te]:void 0,c.hasOwnProperty(te)&&D!==P&&(D!=null||P!=null))if(te==="style")if(P){for(b in P)!P.hasOwnProperty(b)||D&&D.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in D)D.hasOwnProperty(b)&&P[b]!==D[b]&&(a||(a={}),a[b]=D[b])}else a||(p||(p=[]),p.push(te,a)),a=D;else te==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(p=p||[]).push(te,D)):te==="children"?typeof D!="string"&&typeof D!="number"||(p=p||[]).push(te,""+D):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(D!=null&&te==="onScroll"&&rt("scroll",t),p||P===D||(p=[])):(p=p||[]).push(te,D))}a&&(p=p||[]).push("style",a);var te=p;(n.updateQueue=te)&&(n.flags|=4)}},A1=function(t,n,a,c){a!==c&&(n.flags|=4)};function Ga(t,n){if(!st)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Ot(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,n}function W3(t,n,a){var c=n.pendingProps;switch(mc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(n),null;case 1:return Yt(n.type)&&Qi(),Ot(n),null;case 3:return c=n.stateNode,Oo(),ot(Gt),ot(Pt),Mc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ts(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,An!==null&&(od(An),An=null))),Gc(t,n),Ot(n),null;case 5:Sc(n);var u=Qr(Wa.current);if(a=n.type,t!==null&&n.stateNode!=null)L1(t,n,a,c,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return Ot(n),null}if(t=Qr(Un.current),ts(n)){c=n.stateNode,a=n.type;var p=n.memoizedProps;switch(c[Hn]=n,c[za]=p,t=(n.mode&1)!==0,a){case"dialog":rt("cancel",c),rt("close",c);break;case"iframe":case"object":case"embed":rt("load",c);break;case"video":case"audio":for(u=0;u<Ia.length;u++)rt(Ia[u],c);break;case"source":rt("error",c);break;case"img":case"image":case"link":rt("error",c),rt("load",c);break;case"details":rt("toggle",c);break;case"input":Le(c,p),rt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},rt("invalid",c);break;case"textarea":He(c,p),rt("invalid",c)}et(a,p),u=null;for(var b in p)if(p.hasOwnProperty(b)){var P=p[b];b==="children"?typeof P=="string"?c.textContent!==P&&(p.suppressHydrationWarning!==!0&&Gi(c.textContent,P,t),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&Gi(c.textContent,P,t),u=["children",""+P]):l.hasOwnProperty(b)&&P!=null&&b==="onScroll"&&rt("scroll",c)}switch(a){case"input":ce(c),Ie(c,p,!0);break;case"textarea":ce(c),it(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Yi)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bt(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[Hn]=n,t[za]=c,R1(t,n,!1,!1),n.stateNode=t;e:{switch(b=yt(a,c),a){case"dialog":rt("cancel",t),rt("close",t),u=c;break;case"iframe":case"object":case"embed":rt("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ia.length;u++)rt(Ia[u],t);u=c;break;case"source":rt("error",t),u=c;break;case"img":case"image":case"link":rt("error",t),rt("load",t),u=c;break;case"details":rt("toggle",t),u=c;break;case"input":Le(t,c),u=ve(t,c),rt("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=V({},c,{value:void 0}),rt("invalid",t);break;case"textarea":He(t,c),u=ut(t,c),rt("invalid",t);break;default:u=c}et(a,u),P=u;for(p in P)if(P.hasOwnProperty(p)){var D=P[p];p==="style"?ke(t,D):p==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&vn(t,D)):p==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Mn(t,D):typeof D=="number"&&Mn(t,""+D):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?D!=null&&p==="onScroll"&&rt("scroll",t):D!=null&&j(t,p,D,b))}switch(a){case"input":ce(t),Ie(t,c,!1);break;case"textarea":ce(t),it(t);break;case"option":c.value!=null&&t.setAttribute("value",""+E(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?Qe(t,!!c.multiple,p,!1):c.defaultValue!=null&&Qe(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Yi)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ot(n),null;case 6:if(t&&n.stateNode!=null)A1(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(a=Qr(Wa.current),Qr(Un.current),ts(n)){if(c=n.stateNode,a=n.memoizedProps,c[Hn]=n,(p=c.nodeValue!==a)&&(t=sn,t!==null))switch(t.tag){case 3:Gi(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gi(c.nodeValue,a,(t.mode&1)!==0)}p&&(n.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hn]=n,n.stateNode=c}return Ot(n),null;case 13:if(ot(ct),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&ln!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ip(),Io(),n.flags|=98560,p=!1;else if(p=ts(n),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Hn]=n}else Io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ot(n),p=!1}else An!==null&&(od(An),An=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(ct.current&1)!==0?_t===0&&(_t=3):sd())),n.updateQueue!==null&&(n.flags|=4),Ot(n),null);case 4:return Oo(),Gc(t,n),t===null&&Ea(n.stateNode.containerInfo),Ot(n),null;case 10:return bc(n.type._context),Ot(n),null;case 17:return Yt(n.type)&&Qi(),Ot(n),null;case 19:if(ot(ct),p=n.memoizedState,p===null)return Ot(n),null;if(c=(n.flags&128)!==0,b=p.rendering,b===null)if(c)Ga(p,!1);else{if(_t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(b=ss(t),b!==null){for(n.flags|=128,Ga(p,!1),c=b.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=a,a=n.child;a!==null;)p=a,t=c,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,t=b.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return tt(ct,ct.current&1|2),n.child}t=t.sibling}p.tail!==null&&ft()>Wo&&(n.flags|=128,c=!0,Ga(p,!1),n.lanes=4194304)}else{if(!c)if(t=ss(b),t!==null){if(n.flags|=128,c=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),Ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!st)return Ot(n),null}else 2*ft()-p.renderingStartTime>Wo&&a!==1073741824&&(n.flags|=128,c=!0,Ga(p,!1),n.lanes=4194304);p.isBackwards?(b.sibling=n.child,n.child=b):(a=p.last,a!==null?a.sibling=b:n.child=b,p.last=b)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=ft(),n.sibling=null,a=ct.current,tt(ct,c?a&1|2:a&1),n):(Ot(n),null);case 22:case 23:return id(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(cn&1073741824)!==0&&(Ot(n),n.subtreeFlags&6&&(n.flags|=8192)):Ot(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function H3(t,n){switch(mc(n),n.tag){case 1:return Yt(n.type)&&Qi(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oo(),ot(Gt),ot(Pt),Mc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Sc(n),null;case 13:if(ot(ct),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Io()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ot(ct),null;case 4:return Oo(),null;case 10:return bc(n.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var gs=!1,Dt=!1,U3=typeof WeakSet=="function"?WeakSet:Set,we=null;function Fo(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ht(t,n,c)}else a.current=null}function Yc(t,n,a){try{a()}catch(c){ht(t,n,c)}}var $1=!1;function q3(t,n){if(ic=Pi,t=dp(),Xl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var b=0,P=-1,D=-1,te=0,he=0,fe=t,ue=null;t:for(;;){for(var ye;fe!==a||u!==0&&fe.nodeType!==3||(P=b+u),fe!==p||c!==0&&fe.nodeType!==3||(D=b+c),fe.nodeType===3&&(b+=fe.nodeValue.length),(ye=fe.firstChild)!==null;)ue=fe,fe=ye;for(;;){if(fe===t)break t;if(ue===a&&++te===u&&(P=b),ue===p&&++he===c&&(D=b),(ye=fe.nextSibling)!==null)break;fe=ue,ue=fe.parentNode}fe=ye}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(sc={focusedElem:t,selectionRange:a},Pi=!1,we=n;we!==null;)if(n=we,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,we=t;else for(;we!==null;){n=we;try{var _e=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var Ce=_e.memoizedProps,mt=_e.memoizedState,Q=n.stateNode,U=Q.getSnapshotBeforeUpdate(n.elementType===n.type?Ce:$n(n.type,Ce),mt);Q.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var J=n.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ge){ht(n,n.return,ge)}if(t=n.sibling,t!==null){t.return=n.return,we=t;break}we=n.return}return _e=$1,$1=!1,_e}function Ya(t,n,a){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Yc(n,a,p)}u=u.next}while(u!==c)}}function vs(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==n)}}function Kc(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function T1(t){var n=t.alternate;n!==null&&(t.alternate=null,T1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Hn],delete n[za],delete n[uc],delete n[N3],delete n[M3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I1(t){return t.tag===5||t.tag===3||t.tag===4}function E1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,n,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(c!==4&&(t=t.child,t!==null))for(Qc(t,n,a),t=t.sibling;t!==null;)Qc(t,n,a),t=t.sibling}function Zc(t,n,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Zc(t,n,a),t=t.sibling;t!==null;)Zc(t,n,a),t=t.sibling}var Tt=null,Tn=!1;function _r(t,n,a){for(a=a.child;a!==null;)P1(t,n,a),a=a.sibling}function P1(t,n,a){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:Dt||Fo(a,n);case 6:var c=Tt,u=Tn;Tt=null,_r(t,n,a),Tt=c,Tn=u,Tt!==null&&(Tn?(t=Tt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(Tn?(t=Tt,a=a.stateNode,t.nodeType===8?dc(t.parentNode,a):t.nodeType===1&&dc(t,a),Sa(t)):dc(Tt,a.stateNode));break;case 4:c=Tt,u=Tn,Tt=a.stateNode.containerInfo,Tn=!0,_r(t,n,a),Tt=c,Tn=u;break;case 0:case 11:case 14:case 15:if(!Dt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,b=p.destroy;p=p.tag,b!==void 0&&((p&2)!==0||(p&4)!==0)&&Yc(a,n,b),u=u.next}while(u!==c)}_r(t,n,a);break;case 1:if(!Dt&&(Fo(a,n),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){ht(a,n,P)}_r(t,n,a);break;case 21:_r(t,n,a);break;case 22:a.mode&1?(Dt=(c=Dt)||a.memoizedState!==null,_r(t,n,a),Dt=c):_r(t,n,a);break;default:_r(t,n,a)}}function z1(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new U3),n.forEach(function(c){var u=ey.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function In(t,n){var a=n.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var p=t,b=n,P=b;e:for(;P!==null;){switch(P.tag){case 5:Tt=P.stateNode,Tn=!1;break e;case 3:Tt=P.stateNode.containerInfo,Tn=!0;break e;case 4:Tt=P.stateNode.containerInfo,Tn=!0;break e}P=P.return}if(Tt===null)throw Error(i(160));P1(p,b,u),Tt=null,Tn=!1;var D=u.alternate;D!==null&&(D.return=null),u.return=null}catch(te){ht(u,n,te)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)O1(n,t),n=n.sibling}function O1(t,n){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(n,t),Vn(t),c&4){try{Ya(3,t,t.return),vs(3,t)}catch(Ce){ht(t,t.return,Ce)}try{Ya(5,t,t.return)}catch(Ce){ht(t,t.return,Ce)}}break;case 1:In(n,t),Vn(t),c&512&&a!==null&&Fo(a,a.return);break;case 5:if(In(n,t),Vn(t),c&512&&a!==null&&Fo(a,a.return),t.flags&32){var u=t.stateNode;try{Mn(u,"")}catch(Ce){ht(t,t.return,Ce)}}if(c&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,b=a!==null?a.memoizedProps:p,P=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&Fe(u,p),yt(P,b);var te=yt(P,p);for(b=0;b<D.length;b+=2){var he=D[b],fe=D[b+1];he==="style"?ke(u,fe):he==="dangerouslySetInnerHTML"?vn(u,fe):he==="children"?Mn(u,fe):j(u,he,fe,te)}switch(P){case"input":Pe(u,p);break;case"textarea":pt(u,p);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ye=p.value;ye!=null?Qe(u,!!p.multiple,ye,!1):ue!==!!p.multiple&&(p.defaultValue!=null?Qe(u,!!p.multiple,p.defaultValue,!0):Qe(u,!!p.multiple,p.multiple?[]:"",!1))}u[za]=p}catch(Ce){ht(t,t.return,Ce)}}break;case 6:if(In(n,t),Vn(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(Ce){ht(t,t.return,Ce)}}break;case 3:if(In(n,t),Vn(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sa(n.containerInfo)}catch(Ce){ht(t,t.return,Ce)}break;case 4:In(n,t),Vn(t);break;case 13:In(n,t),Vn(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(ed=ft())),c&4&&z1(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Dt=(te=Dt)||he,In(n,t),Dt=te):In(n,t),Vn(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!he&&(t.mode&1)!==0)for(we=t,he=t.child;he!==null;){for(fe=we=he;we!==null;){switch(ue=we,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:Ya(4,ue,ue.return);break;case 1:Fo(ue,ue.return);var _e=ue.stateNode;if(typeof _e.componentWillUnmount=="function"){c=ue,a=ue.return;try{n=c,_e.props=n.memoizedProps,_e.state=n.memoizedState,_e.componentWillUnmount()}catch(Ce){ht(c,a,Ce)}}break;case 5:Fo(ue,ue.return);break;case 22:if(ue.memoizedState!==null){B1(fe);continue}}ye!==null?(ye.return=ue,we=ye):B1(fe)}he=he.sibling}e:for(he=null,fe=t;;){if(fe.tag===5){if(he===null){he=fe;try{u=fe.stateNode,te?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=fe.stateNode,D=fe.memoizedProps.style,b=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Re("display",b))}catch(Ce){ht(t,t.return,Ce)}}}else if(fe.tag===6){if(he===null)try{fe.stateNode.nodeValue=te?"":fe.memoizedProps}catch(Ce){ht(t,t.return,Ce)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===t)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===t)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===t)break e;he===fe&&(he=null),fe=fe.return}he===fe&&(he=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:In(n,t),Vn(t),c&4&&z1(t);break;case 21:break;default:In(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(I1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(Mn(u,""),c.flags&=-33);var p=E1(t);Zc(t,p,u);break;case 3:case 4:var b=c.stateNode.containerInfo,P=E1(t);Qc(t,P,b);break;default:throw Error(i(161))}}catch(D){ht(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V3(t,n,a){we=t,D1(t)}function D1(t,n,a){for(var c=(t.mode&1)!==0;we!==null;){var u=we,p=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||gs;if(!b){var P=u.alternate,D=P!==null&&P.memoizedState!==null||Dt;P=gs;var te=Dt;if(gs=b,(Dt=D)&&!te)for(we=u;we!==null;)b=we,D=b.child,b.tag===22&&b.memoizedState!==null?W1(u):D!==null?(D.return=b,we=D):W1(u);for(;p!==null;)we=p,D1(p),p=p.sibling;we=u,gs=P,Dt=te}F1(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,we=p):F1(t)}}function F1(t){for(;we!==null;){var n=we;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Dt||vs(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Dt)if(a===null)c.componentDidMount();else{var u=n.elementType===n.type?a.memoizedProps:$n(n.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Bp(n,p,c);break;case 3:var b=n.updateQueue;if(b!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Bp(n,b,a)}break;case 5:var P=n.stateNode;if(a===null&&n.flags&4){a=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var te=n.alternate;if(te!==null){var he=te.memoizedState;if(he!==null){var fe=he.dehydrated;fe!==null&&Sa(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Dt||n.flags&512&&Kc(n)}catch(ue){ht(n,n.return,ue)}}if(n===t){we=null;break}if(a=n.sibling,a!==null){a.return=n.return,we=a;break}we=n.return}}function B1(t){for(;we!==null;){var n=we;if(n===t){we=null;break}var a=n.sibling;if(a!==null){a.return=n.return,we=a;break}we=n.return}}function W1(t){for(;we!==null;){var n=we;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{vs(4,n)}catch(D){ht(n,a,D)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(D){ht(n,u,D)}}var p=n.return;try{Kc(n)}catch(D){ht(n,p,D)}break;case 5:var b=n.return;try{Kc(n)}catch(D){ht(n,b,D)}}}catch(D){ht(n,n.return,D)}if(n===t){we=null;break}var P=n.sibling;if(P!==null){P.return=n.return,we=P;break}we=n.return}}var G3=Math.ceil,ys=O.ReactCurrentDispatcher,Xc=O.ReactCurrentOwner,kn=O.ReactCurrentBatchConfig,Ge=0,St=null,xt=null,It=0,cn=0,Bo=yr(0),_t=0,Ka=null,Xr=0,xs=0,Jc=0,Qa=null,Qt=null,ed=0,Wo=1/0,rr=null,ws=!1,td=null,Cr=null,bs=!1,jr=null,ks=0,Za=0,nd=null,_s=-1,Cs=0;function Ht(){return(Ge&6)!==0?ft():_s!==-1?_s:_s=ft()}function Sr(t){return(t.mode&1)===0?1:(Ge&2)!==0&&It!==0?It&-It:L3.transition!==null?(Cs===0&&(Cs=Eh()),Cs):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:Uh(t.type)),t)}function En(t,n,a,c){if(50<Za)throw Za=0,nd=null,Error(i(185));ba(t,a,c),((Ge&2)===0||t!==St)&&(t===St&&((Ge&2)===0&&(xs|=a),_t===4&&Nr(t,It)),Zt(t,c),a===1&&Ge===0&&(n.mode&1)===0&&(Wo=ft()+500,Xi&&wr()))}function Zt(t,n){var a=t.callbackNode;Lv(t,n);var c=Ti(t,t===St?It:0);if(c===0)a!==null&&$h(a),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(a!=null&&$h(a),n===1)t.tag===0?R3(U1.bind(null,t)):Rp(U1.bind(null,t)),j3(function(){(Ge&6)===0&&wr()}),a=null;else{switch(Ph(c)){case 1:a=El;break;case 4:a=Th;break;case 16:a=Ri;break;case 536870912:a=Ih;break;default:a=Ri}a=X1(a,H1.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function H1(t,n){if(_s=-1,Cs=0,(Ge&6)!==0)throw Error(i(327));var a=t.callbackNode;if(Ho()&&t.callbackNode!==a)return null;var c=Ti(t,t===St?It:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||n)n=js(t,c);else{n=c;var u=Ge;Ge|=2;var p=V1();(St!==t||It!==n)&&(rr=null,Wo=ft()+500,eo(t,n));do try{Q3();break}catch(P){q1(t,P)}while(!0);wc(),ys.current=p,Ge=u,xt!==null?n=0:(St=null,It=0,n=_t)}if(n!==0){if(n===2&&(u=Pl(t),u!==0&&(c=u,n=rd(t,u))),n===1)throw a=Ka,eo(t,0),Nr(t,c),Zt(t,ft()),a;if(n===6)Nr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Y3(u)&&(n=js(t,c),n===2&&(p=Pl(t),p!==0&&(c=p,n=rd(t,p))),n===1))throw a=Ka,eo(t,0),Nr(t,c),Zt(t,ft()),a;switch(t.finishedWork=u,t.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:to(t,Qt,rr);break;case 3:if(Nr(t,c),(c&130023424)===c&&(n=ed+500-ft(),10<n)){if(Ti(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Ht(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=cc(to.bind(null,t,Qt,rr),n);break}to(t,Qt,rr);break;case 4:if(Nr(t,c),(c&4194240)===c)break;for(n=t.eventTimes,u=-1;0<c;){var b=31-Rn(c);p=1<<b,b=n[b],b>u&&(u=b),c&=~p}if(c=u,c=ft()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*G3(c/1960))-c,10<c){t.timeoutHandle=cc(to.bind(null,t,Qt,rr),c);break}to(t,Qt,rr);break;case 5:to(t,Qt,rr);break;default:throw Error(i(329))}}}return Zt(t,ft()),t.callbackNode===a?H1.bind(null,t):null}function rd(t,n){var a=Qa;return t.current.memoizedState.isDehydrated&&(eo(t,n).flags|=256),t=js(t,n),t!==2&&(n=Qt,Qt=a,n!==null&&od(n)),t}function od(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Y3(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],p=u.getSnapshot;u=u.value;try{if(!Ln(p(),u))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nr(t,n){for(n&=~Jc,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-Rn(n),c=1<<a;t[a]=-1,n&=~c}}function U1(t){if((Ge&6)!==0)throw Error(i(327));Ho();var n=Ti(t,0);if((n&1)===0)return Zt(t,ft()),null;var a=js(t,n);if(t.tag!==0&&a===2){var c=Pl(t);c!==0&&(n=c,a=rd(t,c))}if(a===1)throw a=Ka,eo(t,0),Nr(t,n),Zt(t,ft()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,to(t,Qt,rr),Zt(t,ft()),null}function ad(t,n){var a=Ge;Ge|=1;try{return t(n)}finally{Ge=a,Ge===0&&(Wo=ft()+500,Xi&&wr())}}function Jr(t){jr!==null&&jr.tag===0&&(Ge&6)===0&&Ho();var n=Ge;Ge|=1;var a=kn.transition,c=Xe;try{if(kn.transition=null,Xe=1,t)return t()}finally{Xe=c,kn.transition=a,Ge=n,(Ge&6)===0&&wr()}}function id(){cn=Bo.current,ot(Bo)}function eo(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,C3(a)),xt!==null)for(a=xt.return;a!==null;){var c=a;switch(mc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Qi();break;case 3:Oo(),ot(Gt),ot(Pt),Mc();break;case 5:Sc(c);break;case 4:Oo();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:bc(c.type._context);break;case 22:case 23:id()}a=a.return}if(St=t,xt=t=Mr(t.current,null),It=cn=n,_t=0,Ka=null,Jc=xs=Xr=0,Qt=Qa=null,Kr!==null){for(n=0;n<Kr.length;n++)if(a=Kr[n],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,p=a.pending;if(p!==null){var b=p.next;p.next=u,c.next=b}a.pending=c}Kr=null}return t}function q1(t,n){do{var a=xt;try{if(wc(),ls.current=hs,cs){for(var c=dt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}cs=!1}if(Zr=0,jt=kt=dt=null,Ha=!1,Ua=0,Xc.current=null,a===null||a.return===null){_t=1,Ka=n,xt=null;break}e:{var p=t,b=a.return,P=a,D=n;if(n=It,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var te=D,he=P,fe=he.tag;if((he.mode&1)===0&&(fe===0||fe===11||fe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=g1(b);if(ye!==null){ye.flags&=-257,v1(ye,b,P,p,n),ye.mode&1&&m1(p,te,n),n=ye,D=te;var _e=n.updateQueue;if(_e===null){var Ce=new Set;Ce.add(D),n.updateQueue=Ce}else _e.add(D);break e}else{if((n&1)===0){m1(p,te,n),sd();break e}D=Error(i(426))}}else if(st&&P.mode&1){var mt=g1(b);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),v1(mt,b,P,p,n),yc(Do(D,P));break e}}p=D=Do(D,P),_t!==4&&(_t=2),Qa===null?Qa=[p]:Qa.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var Q=p1(p,D,n);Fp(p,Q);break e;case 1:P=D;var U=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Cr===null||!Cr.has(J)))){p.flags|=65536,n&=-n,p.lanes|=n;var ge=f1(p,P,n);Fp(p,ge);break e}}p=p.return}while(p!==null)}Y1(a)}catch(je){n=je,xt===a&&a!==null&&(xt=a=a.return);continue}break}while(!0)}function V1(){var t=ys.current;return ys.current=hs,t===null?hs:t}function sd(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||(Xr&268435455)===0&&(xs&268435455)===0||Nr(St,It)}function js(t,n){var a=Ge;Ge|=2;var c=V1();(St!==t||It!==n)&&(rr=null,eo(t,n));do try{K3();break}catch(u){q1(t,u)}while(!0);if(wc(),Ge=a,ys.current=c,xt!==null)throw Error(i(261));return St=null,It=0,_t}function K3(){for(;xt!==null;)G1(xt)}function Q3(){for(;xt!==null&&!bv();)G1(xt)}function G1(t){var n=Z1(t.alternate,t,cn);t.memoizedProps=t.pendingProps,n===null?Y1(t):xt=n,Xc.current=null}function Y1(t){var n=t;do{var a=n.alternate;if(t=n.return,(n.flags&32768)===0){if(a=W3(a,n,cn),a!==null){xt=a;return}}else{if(a=H3(a,n),a!==null){a.flags&=32767,xt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,xt=null;return}}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);_t===0&&(_t=5)}function to(t,n,a){var c=Xe,u=kn.transition;try{kn.transition=null,Xe=1,Z3(t,n,a,c)}finally{kn.transition=u,Xe=c}return null}function Z3(t,n,a,c){do Ho();while(jr!==null);if((Ge&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Av(t,p),t===St&&(xt=St=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||bs||(bs=!0,X1(Ri,function(){return Ho(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=kn.transition,kn.transition=null;var b=Xe;Xe=1;var P=Ge;Ge|=4,Xc.current=null,q3(t,a),O1(a,t),v3(sc),Pi=!!ic,sc=ic=null,t.current=a,V3(a),kv(),Ge=P,Xe=b,kn.transition=p}else t.current=a;if(bs&&(bs=!1,jr=t,ks=u),p=t.pendingLanes,p===0&&(Cr=null),jv(a.stateNode),Zt(t,ft()),n!==null)for(c=t.onRecoverableError,a=0;a<n.length;a++)u=n[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(ws)throw ws=!1,t=td,td=null,t;return(ks&1)!==0&&t.tag!==0&&Ho(),p=t.pendingLanes,(p&1)!==0?t===nd?Za++:(Za=0,nd=t):Za=0,wr(),null}function Ho(){if(jr!==null){var t=Ph(ks),n=kn.transition,a=Xe;try{if(kn.transition=null,Xe=16>t?16:t,jr===null)var c=!1;else{if(t=jr,jr=null,ks=0,(Ge&6)!==0)throw Error(i(331));var u=Ge;for(Ge|=4,we=t.current;we!==null;){var p=we,b=p.child;if((we.flags&16)!==0){var P=p.deletions;if(P!==null){for(var D=0;D<P.length;D++){var te=P[D];for(we=te;we!==null;){var he=we;switch(he.tag){case 0:case 11:case 15:Ya(8,he,p)}var fe=he.child;if(fe!==null)fe.return=he,we=fe;else for(;we!==null;){he=we;var ue=he.sibling,ye=he.return;if(T1(he),he===te){we=null;break}if(ue!==null){ue.return=ye,we=ue;break}we=ye}}}var _e=p.alternate;if(_e!==null){var Ce=_e.child;if(Ce!==null){_e.child=null;do{var mt=Ce.sibling;Ce.sibling=null,Ce=mt}while(Ce!==null)}}we=p}}if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,we=b;else e:for(;we!==null;){if(p=we,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ya(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,we=Q;break e}we=p.return}}var U=t.current;for(we=U;we!==null;){b=we;var J=b.child;if((b.subtreeFlags&2064)!==0&&J!==null)J.return=b,we=J;else e:for(b=U;we!==null;){if(P=we,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:vs(9,P)}}catch(je){ht(P,P.return,je)}if(P===b){we=null;break e}var ge=P.sibling;if(ge!==null){ge.return=P.return,we=ge;break e}we=P.return}}if(Ge=u,wr(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Li,t)}catch{}c=!0}return c}finally{Xe=a,kn.transition=n}}return!1}function K1(t,n,a){n=Do(a,n),n=p1(t,n,1),t=kr(t,n,1),n=Ht(),t!==null&&(ba(t,1,n),Zt(t,n))}function ht(t,n,a){if(t.tag===3)K1(t,t,a);else for(;n!==null;){if(n.tag===3){K1(n,t,a);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){t=Do(a,t),t=f1(n,t,1),n=kr(n,t,1),t=Ht(),n!==null&&(ba(n,1,t),Zt(n,t));break}}n=n.return}}function X3(t,n,a){var c=t.pingCache;c!==null&&c.delete(n),n=Ht(),t.pingedLanes|=t.suspendedLanes&a,St===t&&(It&a)===a&&(_t===4||_t===3&&(It&130023424)===It&&500>ft()-ed?eo(t,0):Jc|=a),Zt(t,n)}function Q1(t,n){n===0&&((t.mode&1)===0?n=1:(n=$i,$i<<=1,($i&130023424)===0&&($i=4194304)));var a=Ht();t=er(t,n),t!==null&&(ba(t,n,a),Zt(t,a))}function J3(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Q1(t,a)}function ey(t,n){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),Q1(t,a)}var Z1;Z1=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Gt.current)Kt=!0;else{if((t.lanes&a)===0&&(n.flags&128)===0)return Kt=!1,B3(t,n,a);Kt=(t.flags&131072)!==0}else Kt=!1,st&&(n.flags&1048576)!==0&&Lp(n,es,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;ms(t,n),t=n.pendingProps;var u=Ao(n,Pt.current);zo(n,a),u=Ac(null,n,c,t,u,a);var p=$c();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Yt(c)?(p=!0,Zi(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Cc(n),u.updater=ps,n.stateNode=u,u._reactInternals=n,Oc(n,c,t,a),n=Wc(null,n,c,!0,p,a)):(n.tag=0,st&&p&&fc(n),Wt(null,n,u,a),n=n.child),n;case 16:c=n.elementType;e:{switch(ms(t,n),t=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=ny(c),t=$n(c,t),u){case 0:n=Bc(null,n,c,t,a);break e;case 1:n=_1(null,n,c,t,a);break e;case 11:n=y1(null,n,c,t,a);break e;case 14:n=x1(null,n,c,$n(c.type,t),a);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:$n(c,u),Bc(t,n,c,u,a);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:$n(c,u),_1(t,n,c,u,a);case 3:e:{if(C1(n),t===null)throw Error(i(387));c=n.pendingProps,p=n.memoizedState,u=p.element,Dp(t,n),is(n,c,null,a);var b=n.memoizedState;if(c=b.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Do(Error(i(423)),n),n=j1(t,n,c,a,u);break e}else if(c!==u){u=Do(Error(i(424)),n),n=j1(t,n,c,a,u);break e}else for(ln=vr(n.stateNode.containerInfo.firstChild),sn=n,st=!0,An=null,a=zp(n,null,c,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Io(),c===u){n=nr(t,n,a);break e}Wt(t,n,c,a)}n=n.child}return n;case 5:return Wp(n),t===null&&vc(n),c=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,b=u.children,lc(c,u)?b=null:p!==null&&lc(c,p)&&(n.flags|=32),k1(t,n),Wt(t,n,b,a),n.child;case 6:return t===null&&vc(n),null;case 13:return S1(t,n,a);case 4:return jc(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=Eo(n,null,c,a):Wt(t,n,c,a),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:$n(c,u),y1(t,n,c,u,a);case 7:return Wt(t,n,n.pendingProps,a),n.child;case 8:return Wt(t,n,n.pendingProps.children,a),n.child;case 12:return Wt(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,p=n.memoizedProps,b=u.value,tt(rs,c._currentValue),c._currentValue=b,p!==null)if(Ln(p.value,b)){if(p.children===u.children&&!Gt.current){n=nr(t,n,a);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){b=p.child;for(var D=P.firstContext;D!==null;){if(D.context===c){if(p.tag===1){D=tr(-1,a&-a),D.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var he=te.pending;he===null?D.next=D:(D.next=he.next,he.next=D),te.pending=D}}p.lanes|=a,D=p.alternate,D!==null&&(D.lanes|=a),kc(p.return,a,n),P.lanes|=a;break}D=D.next}}else if(p.tag===10)b=p.type===n.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(i(341));b.lanes|=a,P=b.alternate,P!==null&&(P.lanes|=a),kc(b,a,n),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Wt(t,n,u.children,a),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,zo(n,a),u=wn(u),c=c(u),n.flags|=1,Wt(t,n,c,a),n.child;case 14:return c=n.type,u=$n(c,n.pendingProps),u=$n(c.type,u),x1(t,n,c,u,a);case 15:return w1(t,n,n.type,n.pendingProps,a);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:$n(c,u),ms(t,n),n.tag=1,Yt(c)?(t=!0,Zi(n)):t=!1,zo(n,a),u1(n,c,u),Oc(n,c,u,a),Wc(null,n,c,!0,t,a);case 19:return M1(t,n,a);case 22:return b1(t,n,a)}throw Error(i(156,n.tag))};function X1(t,n){return Ah(t,n)}function ty(t,n,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,n,a,c){return new ty(t,n,a,c)}function ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ny(t){if(typeof t=="function")return ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===ae)return 14}return 2}function Mr(t,n){var a=t.alternate;return a===null?(a=_n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ss(t,n,a,c,u,p){var b=2;if(c=t,typeof t=="function")ld(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case T:return no(a.children,u,p,n);case z:b=8,u|=8;break;case B:return t=_n(12,a,n,u|2),t.elementType=B,t.lanes=p,t;case Y:return t=_n(13,a,n,u),t.elementType=Y,t.lanes=p,t;case ee:return t=_n(19,a,n,u),t.elementType=ee,t.lanes=p,t;case oe:return Ns(a,u,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case Z:b=9;break e;case F:b=11;break e;case ae:b=14;break e;case re:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=_n(b,a,n,u),n.elementType=t,n.type=c,n.lanes=p,n}function no(t,n,a,c){return t=_n(7,t,c,n),t.lanes=a,t}function Ns(t,n,a,c){return t=_n(22,t,c,n),t.elementType=oe,t.lanes=a,t.stateNode={isHidden:!1},t}function cd(t,n,a){return t=_n(6,t,null,n),t.lanes=a,t}function dd(t,n,a){return n=_n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function ry(t,n,a,c,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ud(t,n,a,c,u,p,b,P,D){return t=new ry(t,n,a,P,D),n===1?(n=1,p===!0&&(n|=8)):n=0,p=_n(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(p),t}function oy(t,n,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:t,containerInfo:n,implementation:a}}function J1(t){if(!t)return xr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Yt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Yt(a))return Np(t,a,n)}return n}function ef(t,n,a,c,u,p,b,P,D){return t=ud(a,c,!0,t,u,p,b,P,D),t.context=J1(null),a=t.current,c=Ht(),u=Sr(a),p=tr(c,u),p.callback=n??null,kr(a,p,u),t.current.lanes=u,ba(t,u,c),Zt(t,c),t}function Ms(t,n,a,c){var u=n.current,p=Ht(),b=Sr(u);return a=J1(a),n.context===null?n.context=a:n.pendingContext=a,n=tr(p,b),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=kr(u,n,b),t!==null&&(En(t,u,b,p),as(t,u,b)),b}function Rs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tf(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){tf(t,n),(t=t.alternate)&&tf(t,n)}function ay(){return null}var nf=typeof reportError=="function"?reportError:function(t){console.error(t)};function pd(t){this._internalRoot=t}Ls.prototype.render=pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Ms(t,n,null,null)},Ls.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jr(function(){Ms(null,t,null,null)}),n[Qn]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var n=Dh();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Wh(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function As(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rf(){}function iy(t,n,a,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var te=Rs(b);p.call(te)}}var b=ef(n,c,t,0,null,!1,!1,"",rf);return t._reactRootContainer=b,t[Qn]=b.current,Ea(t.nodeType===8?t.parentNode:t),Jr(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var te=Rs(D);P.call(te)}}var D=ud(t,0,!1,null,null,!1,!1,"",rf);return t._reactRootContainer=D,t[Qn]=D.current,Ea(t.nodeType===8?t.parentNode:t),Jr(function(){Ms(n,D,a,c)}),D}function $s(t,n,a,c,u){var p=a._reactRootContainer;if(p){var b=p;if(typeof u=="function"){var P=u;u=function(){var D=Rs(b);P.call(D)}}Ms(n,b,t,u)}else b=iy(a,n,t,u,c);return Rs(b)}zh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=wa(n.pendingLanes);a!==0&&(Ol(n,a|1),Zt(n,ft()),(Ge&6)===0&&(Wo=ft()+500,wr()))}break;case 13:Jr(function(){var c=er(t,1);if(c!==null){var u=Ht();En(c,t,1,u)}}),hd(t,1)}},Dl=function(t){if(t.tag===13){var n=er(t,134217728);if(n!==null){var a=Ht();En(n,t,134217728,a)}hd(t,134217728)}},Oh=function(t){if(t.tag===13){var n=Sr(t),a=er(t,n);if(a!==null){var c=Ht();En(a,t,n,c)}hd(t,n)}},Dh=function(){return Xe},Fh=function(t,n){var a=Xe;try{return Xe=t,n()}finally{Xe=a}},Hr=function(t,n,a){switch(n){case"input":if(Pe(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var c=a[n];if(c!==t&&c.form===t.form){var u=Ki(c);if(!u)throw Error(i(90));me(c),Pe(c,u)}}}break;case"textarea":pt(t,a);break;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}},Ch=ad,jh=Jr;var sy={usingClientEntryPoint:!1,Events:[Oa,Ro,Ki,kh,_h,ad]},Xa={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ly={bundleType:Xa.bundleType,version:Xa.version,rendererPackageName:Xa.rendererPackageName,rendererConfig:Xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rh(t),t===null?null:t.stateNode},findFiberByHostInstance:Xa.findFiberByHostInstance||ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ts.isDisabled&&Ts.supportsFiber)try{Li=Ts.inject(ly),Wn=Ts}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy,Xt.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(n))throw Error(i(200));return oy(t,n,null,a)},Xt.createRoot=function(t,n){if(!fd(t))throw Error(i(299));var a=!1,c="",u=nf;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ud(t,1,!1,null,null,a,!1,c,u),t[Qn]=n.current,Ea(t.nodeType===8?t.parentNode:t),new pd(n)},Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Rh(n),t=t===null?null:t.stateNode,t},Xt.flushSync=function(t){return Jr(t)},Xt.hydrate=function(t,n,a){if(!As(n))throw Error(i(200));return $s(null,t,n,!0,a)},Xt.hydrateRoot=function(t,n,a){if(!fd(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,p="",b=nf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),n=ef(n,null,t,1,a??null,u,!1,p,b),t[Qn]=n.current,Ea(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,u]:n.mutableSourceEagerHydrationData.push(a,u);return new Ls(n)},Xt.render=function(t,n,a){if(!As(n))throw Error(i(200));return $s(null,t,n,!1,a)},Xt.unmountComponentAtNode=function(t){if(!As(t))throw Error(i(40));return t._reactRootContainer?(Jr(function(){$s(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1},Xt.unstable_batchedUpdates=ad,Xt.unstable_renderSubtreeIntoContainer=function(t,n,a,c){if(!As(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return $s(t,n,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var hf;function m0(){if(hf)return vd.exports;hf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),vd.exports=my(),vd.exports}var pf;function gy(){if(pf)return Is;pf=1;var e=m0();return Is.createRoot=e.createRoot,Is.hydrateRoot=e.hydrateRoot,Is}var vy=gy();const yy=f0(vy);function g0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=g0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function se(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=g0(e))&&(s&&(s+=" "),s+=o);return s}const vo=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};vo.displayName="PlusIcon";const xy="_root_7uomf_13",wy="_sm_7uomf_82",by="_md_7uomf_88",ky="_lg_7uomf_94",_y="_horizontal_7uomf_107",Cy="_alignStart_7uomf_121",jy="_vertical_7uomf_125",Sy="_inner_7uomf_131",Ny="_iconSlot_7uomf_146",My="_label_7uomf_163",ro={root:xy,sm:wy,md:by,lg:ky,horizontal:_y,alignStart:Cy,vertical:jy,inner:Sy,iconSlot:Ny,label:My};function ff(e){return typeof e=="number"?`${e}px`:e}const Ry=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:g,style:x,disabled:y,type:w="button",...k},A)=>{const _=d??r.jsx(vo,{size:"100%"}),C={};return h!==void 0&&(C["--area-min-height"]=ff(h)),f!==void 0&&(C["--area-radius"]=ff(f)),r.jsx("button",{ref:A,type:w,className:se(ro.root,ro[e],ro[o],i==="start"&&ro.alignStart,g),disabled:y,"data-size":e,"data-layout":o,style:{...C,...x},...k,children:r.jsxs("span",{className:ro.inner,children:[r.jsx("span",{className:ro.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&r.jsx("span",{className:ro.label,children:s})]})})});Ry.displayName="AreaButton";const Ly="_root_b29pw_8",Ay="_image_b29pw_33",$y="_initials_b29pw_40",Ty="_iconSlot_b29pw_52",Lr={root:Ly,image:Ay,initials:$y,iconSlot:Ty,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Iy({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function Ey(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const Bn=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:g="circle",className:x,...y},w)=>{const[k,A]=v.useState(!1),_=!!e&&!k,C=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Ey(s):"");let M;return _?M=r.jsx("img",{src:e,alt:o??"",className:Lr.image,onError:()=>A(!0),draggable:!1},e):C?M=r.jsx("span",{className:Lr.initials,"aria-hidden":o?void 0:!0,children:C}):M=r.jsx("span",{className:Lr.iconSlot,"aria-hidden":"true",children:l??r.jsx(Iy,{})}),r.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":f,"data-shape":g,className:se(Lr.root,Lr[`size-${d}`],Lr[`color-${h}`],Lr[`variant-${f}`],Lr[`shape-${g}`],x),...y,children:M})});Bn.displayName="Avatar";const Py="_root_uqz3u_7",zy={root:Py},Ut=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>r.jsx(e,{ref:l,className:se(zy.root,o),...s,children:i}));Ut.displayName="Eyebrow";const Oy="_root_1tnwf_15",Dy={root:Oy},Fy=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:g,...x},y)=>{const w=i!==void 0,k=v.useRef(null),[A,_]=v.useState(()=>w?!i:!s),C=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const M=j=>{const O=j.currentTarget.textContent??"";_(O===""),l==null||l(O),g==null||g(j)},$=j=>{j.preventDefault();const O=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,O)},S=!h&&!d;return r.jsx("span",{ref:C,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":A||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:se(Dy.root,f),onInput:M,onPaste:$,...x})});Fy.displayName="TypeBox";const By="_root_1brpy_12",Wy="_ghost_1brpy_27",Hy="_path_1brpy_32",ei={root:By,"ai-spin":"_ai-spin_1brpy_1",ghost:Wy,"ai-morph":"_ai-morph_1brpy_1",path:Hy,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Uy={xs:16,sm:24,md:32,lg:48,xl:64},qy={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},mf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Es=e=>e==="inverse"||e==="inverse-light",Vy=e=>e==="stroke"||e==="stroke-light",Tu=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof e=="string",k=w?Uy[e]:e,A=w?qy[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=o==="gradient-fill"?`url(#${x})`:Es(o)?"currentColor":"none",C=Es(o)?"none":Vy(o)?"currentColor":`url(#${x})`,M="currentColor",$=o!=="stroke"&&o!=="stroke-light"&&!Es(o);return r.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:se(ei.root,ei[`variant-${o}`],ei[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!Es(o)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:mf,stroke:M,strokeWidth:A*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:ei.ghost}),r.jsx("path",{d:mf,fill:_,stroke:C==="none"?void 0:C,strokeWidth:C==="none"?void 0:A,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${y})`:void 0,className:ei.path})]})});Tu.displayName="AILoader";const Gy="_root_10act_14",Yy="_hovered_10act_68",Ky="_loading_10act_69",Qy="_sm_10act_90",Zy="_md_10act_98",Xy="_lg_10act_106",Jy="_dark_10act_116",ex="_icon_10act_122",Uo={root:Gy,hovered:Yy,loading:Ky,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Qy,md:Zy,lg:Xy,dark:Jy,icon:ex},gf={sm:12,md:14,lg:18};function tx({size:e,light:o}){return r.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const v0=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[g,x]=v.useState(!1);return r.jsx("button",{ref:f,className:se(Uo.root,Uo[e],o&&Uo.dark,i?Uo.loading:g&&Uo.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:r.jsx("span",{className:Uo.icon,children:i?r.jsx(Tu,{size:gf[e],variant:o?"inverse-light":"gradient-fill"}):r.jsx(tx,{size:gf[e],light:o})})})});v0.displayName="AICoreButton";const nx="_root_1qx4u_9",rx="_star_1qx4u_34",wd={root:nx,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:rx},ox="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",y0=v.forwardRef(({size:e="sm",className:o,...i},s)=>r.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:se(wd.root,wd[`size-${e}`],o),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:wd.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:ox,fill:"currentColor"})})}));y0.displayName="AIAvatar";const ax="_shell_lalw3_21",ix="_wrapper_lalw3_58",sx="_card_lalw3_65",lx="_cardClip_lalw3_94",cx="_textarea_lalw3_160",dx="_actions_lalw3_203",Zo={shell:ax,wrapper:ix,card:sx,cardClip:lx,textarea:cx,actions:dx},x0=v.forwardRef(({className:e,children:o,...i},s)=>r.jsx("div",{ref:s,className:se(Zo.shell,e),...i,children:o}));x0.displayName="AIComposer";function ux(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const w0=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:g,children:x,style:y,...w},k)=>{const A=v.useRef(null);v.useEffect(()=>{const S=A.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[e]);const _=v.useCallback(S=>o(S.target.value),[o]),C=v.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),M=v.useCallback(S=>{A.current=S,ux(k,S)},[k]),$={...y??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:se(Zo.wrapper,h),"data-radius":l,children:r.jsx("div",{className:Zo.card,children:r.jsxs("div",{className:Zo.cardClip,children:[r.jsx("textarea",{...w,ref:M,className:Zo.textarea,rows:1,value:e,onChange:_,onKeyDown:C,placeholder:d,disabled:g,style:$}),x!=null&&r.jsx("div",{className:Zo.actions,children:x})]})})})});w0.displayName="AIComposerInput";const hx="_root_fv0gc_10",px="_simple_fv0gc_28",fx="_float_fv0gc_83",vf={root:hx,simple:px,float:fx},mx=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":e,className:se(vf.root,vf[e],o),...s,children:i}));mx.displayName="AIConversation";const gx="_fadeFrame_1l0ib_19",vx="_scroller_1l0ib_32",yx="_content_1l0ib_89",xx="_messageBlock_1l0ib_108",wx="_messageBlockAi_1l0ib_116",bx="_inboundBlock_1l0ib_128",kx="_inboundLoader_1l0ib_136",_x="_inboundLoaderLabel_1l0ib_146",Cx="_outboundBlock_1l0ib_153",jx="_outboundHeader_1l0ib_161",Sx="_messageBlockUser_1l0ib_168",Nx="_aiThreadOutboundIn_1l0ib_1",Mx="_messageBody_1l0ib_182",Rx="_messageBodyAi_1l0ib_193",Lx="_messageBodyUser_1l0ib_200",Ax="_label_1l0ib_159",$x="_labelAi_1l0ib_221",Tx="_labelUser_1l0ib_159",Ix="_labelAvatar_1l0ib_224",Ex="_labelText_1l0ib_237",Px="_timestamp_1l0ib_244",zx="_timestampAi_1l0ib_259",Ox="_timestampUser_1l0ib_260",Dx="_timestampInline_1l0ib_270",Fx="_aiThreadOutboundFadeIn_1l0ib_1",We={fadeFrame:gx,scroller:vx,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:yx,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:xx,messageBlockAi:wx,inboundBlock:bx,inboundLoader:kx,inboundLoaderLabel:_x,outboundBlock:Cx,outboundHeader:jx,messageBlockUser:Sx,aiThreadOutboundIn:Nx,messageBody:Mx,messageBodyAi:Rx,messageBodyUser:Lx,label:Ax,labelAi:$x,labelUser:Tx,labelAvatar:Ix,labelText:Ex,timestamp:Px,timestampAi:zx,timestampUser:Ox,timestampInline:Dx,aiThreadOutboundFadeIn:Fx},yf=8;function Bx(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const Wx=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const g=v.useRef(null),x=v.useRef(null),y=v.useRef(!0),[w,k]=v.useState(!1),[A,_]=v.useState(!1),C=v.useCallback(M=>{g.current=M,Bx(f,M)},[f]);return v.useEffect(()=>{const M=g.current,$=x.current;if(!M||!$)return;const S=()=>{const{scrollTop:T,scrollHeight:z,clientHeight:B}=M;return z-T-B<s},j=T=>{M.scrollTo({top:M.scrollHeight,behavior:T?"smooth":"auto"})},O=()=>{const{scrollTop:T,scrollHeight:z,clientHeight:B}=M,G=T>yf,Z=z-T-B>yf;k(F=>F===G?F:G),_(F=>F===Z?F:Z)};i&&(j(!1),y.current=!0),O();const R=()=>{y.current=S(),O()};M.addEventListener("scroll",R,{passive:!0});const N=new ResizeObserver(()=>{i&&y.current&&j(!0),O()});return N.observe($),N.observe(M),()=>{M.removeEventListener("scroll",R),N.disconnect()}},[i,s]),r.jsx("div",{className:We.fadeFrame,"data-fade-top":w,"data-fade-bottom":A,children:r.jsx("div",{ref:C,className:se(We.scroller,We[`padding-${o}`],l),...h,children:r.jsx("div",{ref:x,className:se(We.content,We[`density-${e}`]),children:d})})})});Wx.displayName="AIThread";const dl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:se(We.label,e==="user"?We.labelUser:We.labelAi,i),...l,children:[o!=null&&r.jsx("span",{className:We.labelAvatar,children:o}),r.jsx("span",{className:We.labelText,children:s})]}));dl.displayName="AILabel";const Hx=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Ux(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const xi=v.forwardRef(({value:e,align:o="ai",format:i=Hx,inline:s=!1,className:l,...d},h)=>{const f=v.useMemo(()=>Ux(e,i),[e,i]);return f?r.jsx("time",{ref:h,className:se(We.timestamp,s?We.timestampInline:o==="user"?We.timestampUser:We.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});xi.displayName="AITimestamp";function qx(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(xi,{align:"ai",value:e}):e}function Vx(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(dl,{align:"ai",children:e}):e}const Gx=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:se(We.messageBlock,We.messageBlockAi,i),...l,children:[Vx(e),r.jsx("div",{className:se(We.messageBody,We.messageBodyAi),children:s}),qx(o)]}));Gx.displayName="AIAssistantMessage";function Yx(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(xi,{align:"user",value:e}):e}function Kx(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(dl,{align:"user",children:e}):e}const Qx=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:se(We.messageBlock,We.messageBlockUser,i),...l,children:[Kx(e),r.jsx("div",{className:se(We.messageBody,We.messageBodyUser),children:s}),Yx(o)]}));Qx.displayName="AIUserMessage";function Zx(e){return e===!1?null:e==null||e===!0?r.jsx(y0,{size:"sm"}):e}function Xx(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?r.jsx(dl,{align:"ai",avatar:o,children:e}):e}const Jx=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...g},x)=>{const y=Zx(e),w=Xx(o,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:se(We.messageBlock,We.messageBlockAi,We.inboundBlock,h),...g,children:[w,i,f!=null&&r.jsx("div",{className:se(We.messageBody,We.messageBodyAi),children:f}),l&&r.jsxs("div",{className:We.inboundLoader,"aria-live":"polite",children:[r.jsx(Tu,{size:"xs"}),d!=null&&r.jsx("span",{className:We.inboundLoaderLabel,children:d})]}),s]})});Jx.displayName="AIInboundMessage";function e5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const t5=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const f=o==null?null:e5(o)?r.jsx(xi,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?r.jsx("span",{className:We.labelText,children:e}):e,x=g!=null||f!=null;return r.jsxs("div",{ref:h,"data-author":"user",className:se(We.messageBlock,We.messageBlockUser,We.outboundBlock,s),...d,children:[x&&r.jsxs("div",{className:se(We.label,We.labelUser,We.outboundHeader),children:[g,f]}),r.jsx("div",{className:se(We.messageBody,We.messageBodyUser),children:l})]})});t5.displayName="AIOutboundMessage";const Sn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Sn.displayName="ChevronDownIcon";const n5="_root_1j4eq_8",r5="_header_1j4eq_17",o5="_headerSummary_1j4eq_53",a5="_aiTrailSummaryFade_1j4eq_1",i5="_aiTrailHeaderAppend_1j4eq_1",s5="_aiTrailEllipsis_1j4eq_1",l5="_headerCurrent_1j4eq_128",c5="_headerChevron_1j4eq_159",d5="_headerChevronExpanded_1j4eq_173",u5="_body_1j4eq_187",h5="_bodyExpanded_1j4eq_200",p5="_bodyCollapsed_1j4eq_201",f5="_bodyInner_1j4eq_203",m5="_bodyContent_1j4eq_187",g5="_step_1j4eq_225",v5="_stepIcon_1j4eq_242",y5="_stepAnimating_1j4eq_256",x5="_aiTrailStepPulse_1j4eq_1",w5="_stepBody_1j4eq_267",b5="_stepHead_1j4eq_282",k5="_stepLabel_1j4eq_286",_5="_stepSeparator_1j4eq_288",C5="_stepDetail_1j4eq_292",j5="_subToggle_1j4eq_302",S5="_subToggleCount_1j4eq_335",N5="_subToggleChevron_1j4eq_339",M5="_subActivityWrap_1j4eq_358",R5="_subActivityExpanded_1j4eq_364",L5="_subActivityCollapsed_1j4eq_365",A5="_subActivityClip_1j4eq_367",$5="_subActivityList_1j4eq_378",T5="_subActivity_1j4eq_358",I5="_aiTrailSubActivityType_1j4eq_1",E5="_aiTrailSubActivityFade_1j4eq_1",Je={root:n5,header:r5,headerSummary:o5,aiTrailSummaryFade:a5,aiTrailHeaderAppend:i5,aiTrailEllipsis:s5,headerCurrent:l5,headerChevron:c5,headerChevronExpanded:d5,body:u5,bodyExpanded:h5,bodyCollapsed:p5,bodyInner:f5,bodyContent:m5,step:g5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:v5,stepAnimating:y5,aiTrailStepPulse:x5,stepBody:w5,stepHead:b5,stepLabel:k5,stepSeparator:_5,stepDetail:C5,subToggle:j5,subToggleCount:S5,subToggleChevron:N5,subActivityWrap:M5,subActivityExpanded:R5,subActivityCollapsed:L5,subActivityClip:A5,subActivityList:$5,subActivity:T5,aiTrailSubActivityType:I5,aiTrailSubActivityFade:E5},Iu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Iu.displayName="MessageDotsSquareIcon";function el({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}el.displayName="SearchMdIcon";function zr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Eu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Eu.displayName="Globe01Icon";const b0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};b0.displayName="Code02Icon";function k0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}k0.displayName="Tool01Icon";const qt=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},na=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};na.displayName="AlertCircleIcon";const P5={thinking:r.jsx(Iu,{size:14}),tool:r.jsx(k0,{size:14}),search:r.jsx(el,{size:14}),file:r.jsx(zr,{size:14}),web:r.jsx(Eu,{size:14}),code:r.jsx(b0,{size:14}),content:r.jsx(qt,{size:14})},ul=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...g},x)=>{const y=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[A,_]=v.useState(null),C=A!==null?A:k;v.useEffect(()=>{_(null)},[o]);const M=v.useCallback(()=>_(!C),[C]),$=!!l&&l.length>0,S=(l==null?void 0:l.length)??0,j=o==="error"?r.jsx(na,{size:14}):s??P5[e];return r.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":o,className:se(Je.step,Je[`step-${o}`],y&&Je.stepAnimating,h),...g,children:[r.jsx("span",{className:Je.stepIcon,"aria-hidden":!0,children:j}),r.jsxs("span",{className:Je.stepBody,children:[r.jsxs("span",{className:Je.stepHead,children:[r.jsx("span",{className:Je.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:Je.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:Je.stepDetail,children:i})]}),$&&r.jsxs("button",{type:"button",className:Je.subToggle,onClick:M,"aria-expanded":C,"aria-label":C?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":C||void 0,children:[r.jsx("span",{className:Je.subToggleCount,children:S}),r.jsx("span",{className:Je.subToggleChevron,"aria-hidden":!0,children:r.jsx(Sn,{size:10})})]})]}),$&&r.jsx(r.Fragment,{children:r.jsx("div",{className:se(Je.subActivityWrap,C?Je.subActivityExpanded:Je.subActivityCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.subActivityClip,children:r.jsx("ul",{className:Je.subActivityList,"data-animating":w||void 0,children:l.map((O,R)=>r.jsx("li",{className:Je.subActivity,children:O},R))})})})})]})]})});ul.displayName="AIActivityStep";function xf(e){return e==="error"}function z5(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=o===1?"1 step":`${o} steps`;return`${h} · ${f}`}return r.jsxs(r.Fragment,{children:[h,i.map((f,g)=>r.jsxs(v.Fragment,{children:[" · ",f]},g))]})}const Pu=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...g},x)=>{const y=o!==void 0,[w,k]=v.useState(i??xf(e)),[A,_]=v.useState(!1);v.useEffect(()=>{y||A||k(xf(e))},[e,y,A]);const C=y?!!o:w,M=v.useCallback(()=>{const N=!C;y||(k(N),_(!0)),s==null||s(N)},[C,y,s]),{enhancedChildren:$,stepCount:S,stepLabels:j,currentLabelIdx:O}=v.useMemo(()=>{let N=0;const T=[];let z=-1;return{enhancedChildren:v.Children.map(f,G=>{if(!v.isValidElement(G))return G;const Z=G.props;if(!("type"in Z||"status"in Z))return G;N+=1;const Y=Z.status??"done";return Y==="pending"?null:(Z.children!=null&&(T.push(Z.children),Y==="active"&&(z=T.length-1)),O5(G,e))}),stepCount:N,stepLabels:T,currentLabelIdx:z>=0?z:T.length-1}},[f,e]),R=d??z5(e,S,j,O,Je.headerCurrent,l);return r.jsxs("div",{ref:x,"data-state":e,"data-expanded":C,className:se(Je.root,h),...g,children:[r.jsxs("button",{type:"button",className:Je.header,onClick:M,"aria-expanded":C,"aria-label":C?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:Je.headerSummary,children:R},`${e}-${O}`),r.jsx("span",{className:se(Je.headerChevron,C&&Je.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(Sn,{size:14})})]}),r.jsx("div",{className:se(Je.body,C?Je.bodyExpanded:Je.bodyCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.bodyInner,children:r.jsxs("div",{className:Je.bodyContent,children:[$,e==="done"&&r.jsx(ul,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Pu.displayName="AIActivityTrail";function O5(e,o){return v.cloneElement(e,{groupState:o})}var wi=m0();const D5="_wrapper_3tqlm_10",F5="_tooltip_3tqlm_22",B5="_portal_3tqlm_23",W5="_top_3tqlm_61",H5="_bottom_3tqlm_71",U5="_left_3tqlm_81",q5="_right_3tqlm_91",Ps={wrapper:D5,tooltip:F5,portal:B5,top:W5,bottom:H5,left:U5,right:q5},cr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,g]=v.useState(!1),[x,y]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),A=v.useId(),_=v.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),O=6+d;let R=0,N=0;switch(o){case"top":R=j.top-O,N=j.left+j.width/2;break;case"bottom":R=j.bottom+O,N=j.left+j.width/2;break;case"left":R=j.top+j.height/2,N=j.left-O;break;case"right":R=j.top+j.height/2,N=j.right+O;break}y({top:R,left:N})},[o,d]),C=v.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,_]),M=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!f)return;const j=()=>_();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[f,_]);const $=rn.cloneElement(h,{"aria-describedby":f?A:void 0}),S=r.jsx("span",{id:A,role:"tooltip",className:se(Ps.tooltip,Ps[o],Ps.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return r.jsxs("span",{ref:w,className:Ps.wrapper,onMouseEnter:C,onMouseLeave:M,onFocus:C,onBlur:M,children:[$,wi.createPortal(S,document.body)]})};cr.displayName="Tooltip";const V5="_root_v8mqg_9",G5="_hover_v8mqg_21",bd={root:V5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:G5};function Y5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const _0=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const g=i==null?null:Y5(i)?r.jsx(xi,{value:i,format:s,inline:!0}):i,x=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===cr)return k;const A=k.props["aria-label"];return A?r.jsx(cr,{content:A,placement:"top",delay:150,children:k}):k},y=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,x)}return x(w)});return r.jsxs("div",{ref:f,"data-visibility":e,"data-align":o,className:se(bd.root,bd[`align-${o}`],e==="hover"&&bd.hover,l),...h,children:[y,g]})});_0.displayName="AIMessageActions";const K5="_card_1apq1_17",Q5="_header_1apq1_69",Z5="_iconBadge_1apq1_74",X5="_iconInner_1apq1_89",J5="_headerText_1apq1_100",e4="_headerTopRow_1apq1_109",t4="_eyebrow_1apq1_115",n4="_title_1apq1_124",r4="_subtitle_1apq1_130",o4="_headerTrailing_1apq1_135",a4="_body_1apq1_141",i4="_footer_1apq1_152",s4="_footerEnd_1apq1_157",l4="_metaRow_1apq1_162",c4="_metaItem_1apq1_170",d4="_resultHero_1apq1_180",u4="_resultHeadline_1apq1_185",h4="_resultDetail_1apq1_191",p4="_clauses_1apq1_205",f4="_clause_1apq1_205",m4="_clauseLabel_1apq1_215",g4="_clauseBody_1apq1_225",v4="_badgeExecuting_1apq1_245",nt={card:K5,header:Q5,iconBadge:Z5,iconInner:X5,headerText:J5,headerTopRow:e4,eyebrow:t4,title:n4,subtitle:r4,headerTrailing:o4,body:a4,footer:i4,footerEnd:s4,metaRow:l4,metaItem:c4,resultHero:d4,resultHeadline:u4,resultDetail:h4,clauses:p4,clause:f4,clauseLabel:m4,clauseBody:g4,badgeExecuting:v4},Kn=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:g,footerEnd:x=!1,className:y,children:w,...k},A)=>{const _=l!=null||f!=null,C=_||d!=null||h!=null,M=s!=null||C;return r.jsxs("div",{ref:A,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:se(nt.card,y),...k,children:[M&&r.jsxs("div",{className:nt.header,children:[s!=null&&r.jsx("span",{className:se(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:nt.iconInner,children:s})}),C&&r.jsxs("div",{className:nt.headerText,children:[_&&r.jsxs("div",{className:nt.headerTopRow,children:[l!=null&&r.jsx("span",{className:nt.eyebrow,children:l}),f!=null&&r.jsx("span",{className:nt.headerTrailing,children:f})]}),d!=null&&r.jsx("span",{className:nt.title,children:d}),h!=null&&r.jsx("span",{className:nt.subtitle,children:h})]})]}),w!=null&&r.jsx("div",{className:nt.body,children:w}),g!=null&&r.jsx("div",{className:se(nt.footer,x&&nt.footerEnd),children:g})]})});Kn.displayName="UltronCard";const y4="_root_zkkgh_6",x4="_sm_zkkgh_24",w4="_md_zkkgh_33",b4="_lg_zkkgh_42",k4="_neutral_zkkgh_53",_4="_blue_zkkgh_66",C4="_azure_zkkgh_79",j4="_purple_zkkgh_92",S4="_pink_zkkgh_105",N4="_red_zkkgh_118",M4="_orange_zkkgh_131",R4="_yellow_zkkgh_144",L4="_matcha_zkkgh_157",A4="_green_zkkgh_170",$4="_subtle_zkkgh_184",T4="_outline_zkkgh_190",I4="_solid_zkkgh_196",E4="_dot_zkkgh_203",P4="_icon_zkkgh_212",z4="_dismiss_zkkgh_224",oo={root:y4,sm:x4,md:w4,lg:b4,neutral:k4,blue:_4,azure:C4,purple:j4,pink:S4,red:N4,orange:M4,yellow:R4,matcha:L4,green:A4,subtle:$4,outline:T4,solid:I4,dot:E4,icon:P4,dismiss:z4},bi=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},O4={sm:10,md:12,lg:14},Dn=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:g,...x},y)=>r.jsxs("span",{ref:y,className:se(oo.root,oo[i],oo[o],oo[e],f),...x,children:[s&&r.jsx("span",{className:oo.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:se(oo.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&r.jsx("button",{type:"button",className:oo.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:r.jsx(bi,{size:O4[i]})})]}));Dn.displayName="Tag";function C0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}C0.displayName="SlashCircle01Icon";const zu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};zu.displayName="EyeIcon";function hl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}hl.displayName="Target01Icon";function fn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}fn.displayName="ClockIcon";const ki=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ki.displayName="RefreshCw04Icon";const on=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};on.displayName="CheckCircleIcon";function pl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}pl.displayName="Save01Icon";const D4={sm:11,md:12,lg:14},F4={ignored:{label:"Ignored",color:"neutral",Icon:C0},monitored:{label:"Monitored",color:"blue",Icon:zu},recommended:{label:"Recommended",color:"purple",Icon:hl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:fn},executing:{label:"Executing",color:"azure",Icon:ki},completed:{label:"Completed",color:"green",Icon:on},saved:{label:"Saved",color:"matcha",Icon:pl}},yo=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=F4[e],f=h.Icon;return r.jsx(Dn,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:r.jsx(f,{size:D4[o]}),className:se(e==="executing"&&nt.badgeExecuting,s),...l,children:i??h.label})});yo.displayName="UltronStatusBadge";function fl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}fl.displayName="Bell01Icon";const B4=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},g)=>r.jsx(Kn,{ref:g,tone:d,eyebrow:i,title:e,icon:o??r.jsx(fl,{size:14}),trailing:l?r.jsx(yo,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:nt.metaRow,children:s.map((x,y)=>r.jsxs("span",{className:nt.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));B4.displayName="UltronEventCard";const W4=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>r.jsxs(Kn,{ref:h,tone:s,eyebrow:e,icon:o??r.jsx(Iu,{size:14}),...d,children:[l,i&&r.jsx("div",{className:nt.metaRow,children:i})]}));W4.displayName="UltronUnderstandingCard";const H4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},U4=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>r.jsxs(Kn,{ref:h,tone:s,eyebrow:e,icon:o??r.jsx(hl,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:nt.metaRow,children:i.map((f,g)=>r.jsx(Dn,{size:"sm",color:H4[s],variant:"subtle",children:f},g))}):null]}));U4.displayName="UltronDecisionCard";const q4="_root_ou64w_8",V4="_xs_ou64w_75",G4="_sm_ou64w_84",Y4="_md_ou64w_93",K4="_lg_ou64w_102",Q4="_xl_ou64w_111",Z4="_iconOnly_ou64w_122",X4="_primary_ou64w_132",J4="_secondary_ou64w_148",ew="_tertiary_ou64w_167",tw="_ghost_ou64w_185",nw="_destructive_ou64w_203",rw="_destructiveSecondary_ou64w_221",ow="_artwork_ou64w_69",aw="_label_ou64w_254",iw="_spinner_ou64w_69",sw="_light_ou64w_281",tn={root:q4,xs:V4,sm:G4,md:Y4,lg:K4,xl:Q4,iconOnly:Z4,primary:X4,secondary:J4,tertiary:ew,ghost:tw,destructive:nw,destructiveSecondary:rw,artwork:ow,label:aw,spinner:iw,"alloy-spin":"_alloy-spin_ou64w_1",light:sw},lw={primary:tn.primary,secondary:tn.secondary,tertiary:tn.tertiary,ghost:tn.ghost,destructive:tn.destructive,"destructive-secondary":tn.destructiveSecondary},ze=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:g,...x},y)=>{const w=g||i;return r.jsxs("button",{ref:y,className:se(tn.root,lw[e],tn[o],d&&tn.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...x,children:[i&&r.jsx("span",{className:tn.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:se(tn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:se(tn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:tn.label,children:f}),l&&r.jsx("span",{className:se(tn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});ze.displayName="Button";function j0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}j0.displayName="XCircleIcon";const cw=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},g)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,w)=>r.jsx(ze,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&r.jsx(ze,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(j0,{size:16}),onClick:s,children:l})]});return r.jsx(Kn,{ref:g,tone:d,eyebrow:e,icon:o??r.jsx(hl,{size:14}),footer:x,...f,children:h})});cw.displayName="UltronRecommendationCard";function Ou({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ou.displayName="Lock01Icon";const dw=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},A)=>{const _=r.jsxs(r.Fragment,{children:[f&&r.jsx(ze,{size:"md",variant:"ghost",onClick:f,children:h}),x&&r.jsx(ze,{size:"md",variant:"secondary",onClick:x,children:g}),r.jsx(ze,{size:"md",variant:"primary",leadingArtwork:r.jsx(qt,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Kn,{ref:A,tone:y,eyebrow:o,title:e,icon:i??r.jsx(Ou,{size:14}),trailing:r.jsx(yo,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});dw.displayName="UltronApprovalCard";const uw=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>r.jsx(Kn,{ref:f,tone:d,eyebrow:e,icon:o??r.jsx(ki,{size:14}),trailing:r.jsx(yo,{status:s==="done"?"completed":"executing"}),...h,children:r.jsx(Pu,{state:s,duration:l,children:i.map((g,x)=>r.jsx(ul,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));uw.displayName="UltronExecutionCard";const hw=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>r.jsx(Kn,{ref:f,tone:l,fill:!0,accent:!1,trailing:r.jsx(yo,{status:s}),footer:d,...h,children:r.jsxs("div",{className:nt.resultHero,children:[r.jsx("span",{className:se(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(on,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:nt.resultHeadline,children:e}),o!=null&&r.jsx("div",{className:nt.resultDetail,children:o})]})]})}));hw.displayName="UltronResultCard";function S0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}S0.displayName="ZapIcon";const pw=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:g="info",children:x,...y},w)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(ze,{size:"md",variant:"primary",leadingArtwork:r.jsx(pl,{size:18}),loading:d,onClick:l,children:s}),f&&r.jsx(ze,{size:"md",variant:"ghost",onClick:f,children:h})]});return r.jsx(Kn,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??r.jsx(S0,{size:14}),footer:k,...y,children:x})});pw.displayName="UltronWorkflowSaveCard";const N0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};N0.displayName="GitBranch01Icon";function kd({label:e,children:o}){return r.jsxs("div",{className:nt.clause,children:[r.jsx("span",{className:nt.clauseLabel,children:e}),r.jsx("span",{className:nt.clauseBody,children:o})]})}const fw=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:g="info",...x},y)=>r.jsx(Kn,{ref:y,tone:g,eyebrow:o,title:e,icon:i??r.jsx(N0,{size:14}),trailing:h?r.jsx(yo,{status:h}):void 0,footer:f,...x,children:r.jsxs("div",{className:nt.clauses,children:[r.jsx(kd,{label:"When",children:s}),r.jsx(kd,{label:"If",children:l}),r.jsx(kd,{label:"Then",children:d})]})}));fw.displayName="UltronWorkflowPreviewCard";const mw="_root_1nyuz_6",gw="_sm_1nyuz_20",vw="_md_1nyuz_29",yw="_lg_1nyuz_38",xw="_divider_1nyuz_48",ww="_interactive_1nyuz_53",bw="_disabled_1nyuz_60",kw="_destructive_1nyuz_64",_w="_selected_1nyuz_78",Cw="_label_1nyuz_87",jw="_description_1nyuz_97",Sw="_leadingSlot_1nyuz_101",Nw="_trailingSlot_1nyuz_102",Mw="_content_1nyuz_115",Rw="_taSwitch_1nyuz_167",Lw="_taSwitchThumb_1nyuz_188",Aw="_taCheckbox_1nyuz_203",$w="_taRadio_1nyuz_226",Tw="_taRadioDot_1nyuz_244",Iw="_taExpand_1nyuz_252",Ew="_taStatus_1nyuz_266",Pw="_taStatus_success_1nyuz_273",zw="_taStatus_warning_1nyuz_274",Ow="_taStatus_error_1nyuz_275",Dw="_taStatus_info_1nyuz_276",wt={root:mw,sm:gw,md:vw,lg:yw,divider:xw,interactive:ww,disabled:bw,destructive:kw,selected:_w,label:Cw,description:jw,leadingSlot:Sw,trailingSlot:Nw,content:Mw,taSwitch:Rw,taSwitchThumb:Lw,taCheckbox:Aw,taRadio:$w,taRadioDot:Tw,taExpand:Iw,taStatus:Ew,taStatus_success:Pw,taStatus_warning:zw,taStatus_error:Ow,taStatus_info:Dw},gn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gn.displayName="ChevronRightIcon";const Du=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Du.displayName="ArrowUpRightIcon";const Fw="_root_4qytd_5",Bw="_neutral_4qytd_25",Ww="_primary_4qytd_30",Hw="_success_4qytd_35",Uw="_warning_4qytd_40",qw="_error_4qytd_45",Vw="_info_4qytd_50",wf={root:Fw,neutral:Bw,primary:Ww,success:Hw,warning:Uw,error:qw,info:Vw},da=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>r.jsx("span",{ref:l,className:se(wf.root,wf[e],o),...s,children:i}));da.displayName="Badge";const Gw=({checked:e})=>r.jsx("span",{className:wt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:r.jsx("span",{className:wt.taSwitchThumb})}),Yw=({checked:e})=>r.jsx("span",{className:wt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Kw=({checked:e})=>r.jsx("span",{className:wt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("span",{className:wt.taRadioDot})}),Qw=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?r.jsx(da,{"aria-hidden":"true",children:i}):null},Zw=({expanded:e})=>r.jsx("span",{className:wt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:16,color:"currentColor"})}),Xw=({variant:e})=>r.jsx("span",{className:se(wt.taStatus,wt[`taStatus_${e}`]),"aria-hidden":"true"}),Jw=new Set(["badge","status"]),mn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:A="md",interactive:_,selected:C=!1,destructive:M=!1,disabled:$=!1,className:S,onClick:j,onKeyDown:O,...R},N)=>{const T=l==="switch"||l==="checkbox"||l==="radio",[z,B]=v.useState(h),G=T?d!==void 0?d:z:!1,Z=_||!!j||T||l!==void 0&&!Jw.has(l),F=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Z?"button":void 0,Y=v.useCallback(re=>{if(!$){if(T){const oe=!G;d===void 0&&B(oe),f==null||f(oe)}j==null||j(re)}},[$,T,G,d,f,j]),ee=v.useCallback(re=>{Z&&!$&&(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),Y(re)),O==null||O(re)},[Z,$,Y,O]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(gn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Du,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(Gw,{checked:G});case"checkbox":return r.jsx(Yw,{checked:G});case"radio":return r.jsx(Kw,{checked:G});case"badge":return r.jsx(Qw,{count:g,label:x});case"expand":return r.jsx(Zw,{expanded:y});case"status":return r.jsx(Xw,{variant:w});default:return null}})();return r.jsxs("div",{ref:N,role:F,tabIndex:Z&&!$?0:void 0,"aria-checked":T?G:void 0,"aria-selected":C||void 0,"aria-disabled":$||void 0,"data-selected":C||void 0,"data-disabled":$||void 0,"data-destructive":M||void 0,"data-trailing-action":l??void 0,className:se(wt.root,wt[A],k&&wt.divider,Z&&wt.interactive,C&&wt.selected,M&&wt.destructive,$&&wt.disabled,S),onClick:$?void 0:Y,onKeyDown:ee,...R,children:[i&&r.jsx("div",{className:wt.leadingSlot,children:i}),r.jsxs("div",{className:wt.content,children:[r.jsx("span",{className:wt.label,children:e}),o&&r.jsx("span",{className:wt.description,children:o})]}),ae&&r.jsx("div",{className:wt.trailingSlot,children:ae})]})});mn.displayName="ListItem";const e9=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>r.jsx(mn,{ref:d,label:e,description:o,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(yo,{status:s}),...l}));e9.displayName="UltronActivityStreamItem";const t9="_root_1sz1z_7",n9="_status_1sz1z_50",_d={root:t9,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:n9},Fu=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const g=v.useRef(null),[x,y]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const A=k.props;return v.cloneElement(k,{groupDisabled:e||!!A.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=A=>{A.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>y(k),[]),r.jsxs("div",{ref:f,"data-size":o,className:se(_d.root,_d[`size-${o}`],l),...h,children:[w,r.jsx("span",{ref:g,className:_d.status,role:"status","aria-live":"polite",children:x})]})});Fu.displayName="ComposerActions";function Cd({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Bu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Bu.displayName="SearchSmIcon";const qs=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};qs.displayName="Trash03Icon";const M0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};M0.displayName="SunIcon";const R0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};R0.displayName="ArrowNarrowRightIcon";function Ir({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function bf({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function r9({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}function o9({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const tl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};tl.displayName="ChevronSelectorVerticalIcon";const lo=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};lo.displayName="ClipboardCheckIcon";const L0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};L0.displayName="SettingsGearIcon";const A0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};A0.displayName="ChevronLeftIcon";const $0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};$0.displayName="EyeOffIcon";const T0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};T0.displayName="StopIcon";const I0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="RecordingIcon";const E0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};E0.displayName="BankIcon";function ml({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ml.displayName="ArrowNarrowUpIcon";function P0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}P0.displayName="ArrowNarrowDownIcon";function Wu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Wu.displayName="Microphone02Icon";const ra=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ra.displayName="AlertTriangleIcon";const Hu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Hu.displayName="BankNote01Icon";const z0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};z0.displayName="CoinsStacked03Icon";function O0({size:e=16,color:o="currentColor",...i}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Uu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Uu.displayName="Map01Icon";const D0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};D0.displayName="PackageIcon";const F0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="ThumbsUpIcon";const B0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};B0.displayName="ThumbsDownIcon";function oa({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oa.displayName="Building02Icon";function gl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}gl.displayName="Building05Icon";function ua({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ua.displayName="CheckVerified01Icon";function W0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}W0.displayName="Copy01Icon";function H0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}H0.displayName="DotsVerticalIcon";function U0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}U0.displayName="Edit02Icon";function qu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}qu.displayName="Link01Icon";function vl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}vl.displayName="LinkExternal01Icon";function q0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}q0.displayName="MedicalCrossIcon";function nl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nl.displayName="MessageCircle02Icon";function Vu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Vu.displayName="MinusIcon";function V0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}V0.displayName="Moon01Icon";function G0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}G0.displayName="Pin01Icon";function yl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yl.displayName="ReceiptCheckIcon";function Y0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Y0.displayName="Trash01Icon";function lu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}lu.displayName="UploadCloud01Icon";function pi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}pi.displayName="XCloseIcon";const a9="_base_i93xz_11",i9="_icon_i93xz_45",s9="_sendReady_i93xz_65",l9="_sendStreaming_i93xz_66",c9="_sendDisabled_i93xz_67",d9="_sendError_i93xz_68",u9="_attachIdle_i93xz_131",h9="_attachDisabled_i93xz_145",p9="_attachError_i93xz_152",f9="_voiceIdle_i93xz_165",m9="_voiceRecording_i93xz_179",g9="_voiceDisabled_i93xz_189",v9="_iconStack_i93xz_200",y9="_iconLayer_i93xz_209",gt={base:a9,icon:i9,sendReady:s9,sendStreaming:l9,sendDisabled:c9,sendError:d9,attachIdle:u9,attachDisabled:h9,attachError:p9,voiceIdle:f9,voiceRecording:m9,voiceDisabled:g9,iconStack:v9,iconLayer:y9},x9={hidden:void 0,ready:gt.sendReady,"disabled-invalid":gt.sendDisabled,streaming:gt.sendStreaming,error:gt.sendError},w9=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},ha=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useRef(null),A=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]),_=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const C=!h&&(e==="ready"||e==="streaming"||e==="error"),M=w9(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,S=r.jsx("button",{ref:A,type:"button","data-composer-action":"send","data-state":e,className:se(gt.base,x9[e],f),style:g,"aria-label":M,disabled:!C,onClick:_,...x,children:r.jsxs("span",{className:gt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:gt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:r.jsx(ml,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:gt.iconLayer,"data-active":e==="streaming"?"true":"false",children:r.jsx(T0,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:gt.iconLayer,"data-active":e==="error"?"true":"false",children:r.jsx(ki,{size:"100%",strokeWidth:2})})]})});return $?r.jsx(cr,{content:$,placement:"top",children:S}):S});ha.displayName="ComposerSendButton";const b9={idle:gt.attachIdle,disabled:gt.attachDisabled,error:gt.attachError},k9=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},K0=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:g,...x},y)=>{const w=v.useRef(null),k=v.useCallback(()=>{var S;(e==="idle"||e==="error")&&((S=w.current)==null||S.click())},[e]),A=v.useCallback(S=>{const j=S.target.files;j&&j.length>0&&(o==null||o(j)),S.target.value=""},[o]),_=!h&&e!=="disabled",C=k9(e,l,d),M=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:se(gt.base,b9[e],f),style:g,"aria-label":C,disabled:!_,onClick:k,...x,children:[r.jsx("span",{className:gt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(vo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:A,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return M?r.jsx(cr,{content:M,placement:"top",children:$}):$});K0.displayName="ComposerAttachment";const _9={idle:gt.voiceIdle,recording:gt.voiceRecording,disabled:gt.voiceDisabled},C9=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},Q0=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},g)=>{const x=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),y=!l&&e!=="disabled",w=C9(e,s),k=e==="disabled"?s??"Voice unavailable":null,A=r.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:se(gt.base,_9[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:gt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:gt.iconLayer,"data-active":e!=="recording"?"true":"false",children:r.jsx(Wu,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:gt.iconLayer,"data-active":e==="recording"?"true":"false",children:r.jsx(I0,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(cr,{content:k,placement:"top",children:A}):A});Q0.displayName="ComposerVoiceButton";const j9=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return r.jsx(x0,{className:y,style:{flex:"0 0 auto"},children:r.jsx(w0,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:f,radius:g,disabled:d,children:r.jsxs(Fu,{size:"md",disabled:d,children:[x,h&&r.jsx(Q0,{state:d?"disabled":"idle"}),r.jsx(ha,{state:k,onSend:i,onStop:i})]})})})});j9.displayName="UltronCommandBar";const S9=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>r.jsx(Pu,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>r.jsx(ul,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));S9.displayName="UltronThreadTimeline";const N9="_root_ghwhu_10",M9="_badge_ghwhu_27",R9="_badgeIcon_ghwhu_38",L9="_green_ghwhu_59",A9="_yellow_ghwhu_60",$9="_matcha_ghwhu_61",T9="_purple_ghwhu_62",I9="_blue_ghwhu_63",E9="_azure_ghwhu_64",P9="_red_ghwhu_65",z9="_orange_ghwhu_66",O9="_pink_ghwhu_67",D9="_slate_ghwhu_68",F9="_content_ghwhu_73",B9="_label_ghwhu_83",W9="_valueRow_ghwhu_97",H9="_change_ghwhu_106",U9="_value_ghwhu_97",or={root:N9,badge:M9,badgeIcon:R9,green:L9,yellow:A9,matcha:$9,purple:T9,blue:I9,azure:E9,red:P9,orange:z9,pink:O9,slate:D9,content:F9,label:B9,valueRow:W9,change:H9,value:U9},q9=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},f)=>r.jsxs("div",{ref:f,className:se(or.root,d),...h,children:[r.jsx("div",{className:se(or.badge,or[e]),"aria-hidden":"true",children:r.jsx("span",{className:or.badgeIcon,children:o})}),r.jsxs("div",{className:or.content,children:[r.jsx("span",{className:or.label,children:i}),r.jsxs("div",{className:or.valueRow,children:[r.jsx("span",{className:or.value,children:s}),l!=null&&r.jsx("span",{className:or.change,children:l})]})]})]}));q9.displayName="DataCard";const V9="_root_d0j6n_7",G9="_icon_d0j6n_21",Y9="_text_d0j6n_33",K9="_positive_d0j6n_41",Q9="_warning_d0j6n_45",Z9="_negative_d0j6n_49",zs={root:V9,icon:G9,text:Y9,positive:K9,warning:Q9,negative:Z9};function X9(e){return e==="up"?"positive":"negative"}const J9=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??X9(e.trend):e.severity,{severity:f,...g}=d,x=i==="trend"?(({trend:w,severity:k,...A})=>A)(g):g,y=i==="trend"?e.trend==="up"?ml:P0:null;return r.jsxs("span",{ref:o,className:se(zs.root,zs[h],l),...x,children:[r.jsx("span",{className:zs.text,children:s}),y&&r.jsx("span",{className:zs.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});J9.displayName="ValueChangeLabel";const e6="_root_1lq10_1",t6="_horizontal_1lq10_9",n6="_vertical_1lq10_15",r6="_solid_1lq10_32",o6="_dashed_1lq10_36",Os={root:e6,horizontal:t6,vertical:n6,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:r6,dashed:o6},a6=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:se(Os.root,Os[`thickness-${e}`],Os[o],Os[i],s),...l}));a6.displayName="Divider";const i6="_overlay_vxgy2_9",s6="_dialogOverlayIn_vxgy2_1",l6="_dialogOverlayOut_vxgy2_1",c6="_dialog_vxgy2_38",d6="_dialogIn_vxgy2_1",u6="_dialogOut_vxgy2_1",h6="_sm_vxgy2_88",p6="_md_vxgy2_89",f6="_lg_vxgy2_90",m6="_header_vxgy2_95",g6="_title_vxgy2_107",v6="_closeBtn_vxgy2_120",y6="_content_vxgy2_152",x6="_footer_vxgy2_163",Or={overlay:i6,dialogOverlayIn:s6,dialogOverlayOut:l6,dialog:c6,dialogIn:d6,dialogOut:u6,sm:h6,md:p6,lg:f6,header:m6,title:g6,closeBtn:v6,content:y6,footer:x6},w6=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>r.jsxs("div",{ref:l,className:se(Or.header,i),...s,children:[r.jsx("span",{className:Or.title,children:o}),e&&r.jsx("button",{type:"button",className:Or.closeBtn,onClick:e,"aria-label":"Close",children:r.jsx(bi,{size:16})})]}));w6.displayName="DialogHeader";const b6=v.forwardRef(({children:e,className:o,...i},s)=>r.jsx("div",{ref:s,className:se(Or.content,o),...i,children:e}));b6.displayName="DialogContent";const k6=v.forwardRef(({children:e,className:o,...i},s)=>r.jsx("div",{ref:s,className:se(Or.footer,o),...i,children:e}));k6.displayName="DialogFooter";function _6({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),f=180,[g,x]=v.useState(e);return v.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),f);return()=>clearTimeout(y)},[e]),v.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,o]),v.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),g?wi.createPortal(r.jsx("div",{className:Or.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&o()},children:r.jsx("div",{ref:h,className:se(Or.dialog,Or[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const C6="_root_1dntq_7",j6="_badge_1dntq_57",S6="_badgeIconSlot_1dntq_74",N6="_content_1dntq_82",M6="_text_1dntq_90",R6="_title_1dntq_99",L6="_description_1dntq_120",A6="_actions_1dntq_131",$6="_dot_1dntq_137",T6="_actionLink_1dntq_144",I6="_primaryAction_1dntq_162",E6="_trailing_1dntq_170",Ft={root:C6,badge:j6,badgeIconSlot:S6,content:N6,text:M6,title:R6,description:L6,actions:A6,dot:$6,actionLink:T6,primaryAction:I6,trailing:E6},P6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),z6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),O6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),kf=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),D6={error:P6,warning:O6,success:z6,info:kf,feature:kf},Z0=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const A=D6[e],_=i==="lg",C=x?r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(bi,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:se(Ft.root,y),"data-status":e,"data-variant":o,"data-size":i,...w,children:[r.jsx("span",{className:Ft.badge,"aria-hidden":"true",children:r.jsx("span",{className:se("alloy-icon-slot",Ft.badgeIconSlot),children:r.jsx(A,{})})}),_?r.jsxs("div",{className:Ft.content,children:[r.jsxs("div",{className:Ft.text,children:[r.jsx("p",{className:Ft.title,children:s}),l&&r.jsx("p",{className:Ft.description,children:l})]}),(d||f)&&r.jsxs("div",{className:Ft.actions,children:[d&&r.jsx("button",{type:"button",className:se(Ft.actionLink,Ft.primaryAction),onClick:h,children:d}),d&&f&&r.jsx("span",{className:Ft.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:Ft.actionLink,onClick:g,children:f})]})]}):r.jsx("p",{className:Ft.title,children:s}),_?C:(d||x)&&r.jsxs("div",{className:Ft.trailing,children:[d&&r.jsx("button",{type:"button",className:se(Ft.actionLink,Ft.primaryAction),onClick:h,children:d}),C]})]})});Z0.displayName="Alert";const F6="_stack_x4xl7_11",B6="_item_x4xl7_28",W6="_itemExiting_x4xl7_33",cu={stack:F6,item:B6,itemExiting:W6},H6=v.createContext(null);function U6({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:g,exiting:x,onRemove:y}){const w=v.useCallback(()=>y(e),[e,y]);return r.jsx("div",{className:se(cu.item,x&&cu.itemExiting),onAnimationEnd:x?w:void 0,children:r.jsx(Z0,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:f,onDismiss:w,style:{width:"100%"}})})}function q6({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:wi.createPortal(r.jsx("div",{className:cu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>r.jsx(U6,{...s,onRemove:i},s.id))}),document.body)}function V6({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(f=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(f=>{i(g=>g.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),h=v.useCallback(f=>{i(g=>g.filter(x=>x.id!==f))},[]);return r.jsxs(H6.Provider,{value:{addToast:l,removeToast:d},children:[e,r.jsx(q6,{toasts:o,onStartExit:d,onRemove:h})]})}const G6="_root_1s0ek_5",Y6="_list_1s0ek_11",K6="_item_1s0ek_23",Q6="_separator_1s0ek_31",Z6="_link_1s0ek_47",X6="_current_1s0ek_68",J6="_iconSlot_1s0ek_76",Gn={root:G6,list:Y6,item:K6,separator:Q6,link:Z6,current:X6,iconSlot:J6},e8=()=>r.jsx("span",{className:Gn.separator,"aria-hidden":"true",children:"/"}),t8=()=>r.jsx("span",{className:Gn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),n8=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?t8:e8;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:se(Gn.root,i),...s,children:r.jsx("ol",{className:Gn.list,children:e.map((h,f)=>{const g=f===e.length-1,x=!g&&(!!h.href||!!h.onClick);return r.jsxs("li",{className:Gn.item,children:[f>0&&r.jsx(d,{}),x?r.jsxs("a",{href:h.href,onClick:h.onClick,className:Gn.link,"aria-label":h.label,children:[h.icon&&r.jsx("span",{className:se(Gn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]}):r.jsxs("span",{className:se(Gn.link,g&&Gn.current),"aria-current":g?"page":void 0,children:[h.icon&&r.jsx("span",{className:se(Gn.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]})]},f)})})})});n8.displayName="Breadcrumb";const r8="_root_139vz_6",o8="_divider_139vz_14",a8="_item_139vz_19",i8="_label_139vz_25",s8="_description_139vz_26",l8="_chevron_139vz_27",c8="_iconSlot_139vz_28",d8="_hitTarget_139vz_32",u8="_size_sm_139vz_37",h8="_size_md_139vz_43",p8="_size_lg_139vz_49",f8="_header_139vz_59",m8="_headerContent_139vz_59",g8="_checkboxWrap_139vz_60",v8="_labelBlock_139vz_157",y8="_trailingSlot_139vz_60",x8="_body_139vz_199",w8="_bodyInner_139vz_209",b8="_bodyContent_139vz_214",Lt={root:r8,divider:o8,item:a8,label:i8,description:s8,chevron:l8,iconSlot:c8,hitTarget:d8,size_sm:u8,size_md:h8,size_lg:p8,header:f8,headerContent:m8,checkboxWrap:g8,labelBlock:v8,trailingSlot:y8,body:x8,bodyInner:w8,bodyContent:b8},k8="_root_17t97_6",_8="_disabled_17t97_12",C8="_sm_17t97_18",j8="_md_17t97_26",S8="_lg_17t97_34",N8="_controlWrap_17t97_43",M8="_input_17t97_52",R8="_box_17t97_67",L8="_boxChecked_17t97_96",A8="_boxError_17t97_106",$8="_labelWrap_17t97_116",T8="_label_17t97_116",I8="_error_17t97_138",E8="_required_17t97_140",P8="_description_17t97_145",dn={root:k8,disabled:_8,sm:C8,md:j8,lg:S8,controlWrap:N8,input:M8,box:R8,boxChecked:L8,boxError:A8,labelWrap:$8,label:T8,error:I8,required:E8,description:P8},X0=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:g,id:x,name:y,value:w,required:k,className:A},_)=>{const C=v.useId(),M=x??C,$=v.useRef(null);v.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const S=e!==void 0,[j,O]=v.useState(o),R=S?e:j,N=z=>{S||O(z.target.checked),s==null||s(z.target.checked)},T=R||i;return r.jsxs("div",{className:se(dn.root,dn[h],l&&dn.disabled,d&&dn.error,A),children:[r.jsxs("div",{className:dn.controlWrap,children:[r.jsx("input",{ref:z=>{$.current=z,typeof _=="function"?_(z):_&&(_.current=z)},type:"checkbox",id:M,name:y,value:w,checked:R,disabled:l,required:k,"aria-invalid":d||void 0,onChange:N,className:dn.input}),r.jsx("span",{className:se(dn.box,T&&dn.boxChecked,d&&dn.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):R?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||g)&&r.jsxs("div",{className:dn.labelWrap,children:[f&&r.jsxs("label",{htmlFor:M,className:dn.label,children:[f,k&&r.jsx("span",{className:dn.required,"aria-hidden":"true",children:" *"})]}),g&&r.jsx("span",{className:dn.description,children:g})]})]})});X0.displayName="Checkbox";const J0=v.createContext(null),du=v.createContext(0),eg=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:g,children:x,...y},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[A,_]=v.useState(k),C=i!==void 0,M=v.useMemo(()=>C?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:A,[C,i,A]),$=v.useCallback(O=>M.has(O),[M]),S=v.useCallback(O=>{const R=new Set(M);e==="single"?R.has(O)?o&&R.delete(O):(R.clear(),R.add(O)):R.has(O)?R.delete(O):R.add(O),C||_(R),l&&l(e==="single"?R.values().next().value??"":Array.from(R))},[M,e,o,C,l]),j=v.useMemo(()=>({type:e,collapsible:o,size:h,disabled:f,isExpanded:$,toggle:S}),[e,o,h,f,$,S]);return r.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:se(Lt.root,d&&Lt.divider,g),...y,children:r.jsx(J0.Provider,{value:j,children:r.jsx(du.Provider,{value:0,children:x})})})});eg.displayName="Accordion";function Ds(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const tg=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:A=!1,onExpandedChange:_,disabled:C=!1,size:M,className:$,children:S,...j},O)=>{const R=v.useContext(J0),N=v.useContext(du),T=R!==null,z=M??(R==null?void 0:R.size)??"md",B=C||(R==null?void 0:R.disabled)||!1,[G,Z]=v.useState(A);let F;T?F=e!==void 0?R.isExpanded(e):!1:k!==void 0?F=k:F=G;const Y=v.useCallback(()=>{if(B)return;if(T){if(e===void 0)return;const L=R.isExpanded(e);R.toggle(e);const q=R.type==="single"&&!R.collapsible&&L?!0:!L;_==null||_(q);return}const I=!F;k===void 0&&Z(I),_==null||_(I)},[B,T,R,e,F,k,_]),ee=v.useCallback(I=>w==null?void 0:w(I),[w]),ae=v.useCallback(I=>{if(I.key==="Enter"||I.key===" "){I.preventDefault(),Y();return}if(T)switch(I.key){case"ArrowDown":I.preventDefault(),Ds(I.currentTarget,"next");break;case"ArrowUp":I.preventDefault(),Ds(I.currentTarget,"prev");break;case"Home":I.preventDefault(),Ds(I.currentTarget,"first");break;case"End":I.preventDefault(),Ds(I.currentTarget,"last");break}},[Y,T]),re=v.useId(),oe=`${re}-header`,X=`${re}-body`,W=z==="sm"?16:z==="md"?18:20,V=l??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:Lt.checkboxWrap,children:r.jsx(X0,{size:z,checked:g,defaultChecked:x,indeterminate:y,disabled:B,onChange:ee})}),s&&r.jsx("span",{className:Lt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:O,"data-accordion-item":"","data-expanded":F||void 0,"data-disabled":B||void 0,"data-size":z,"data-depth":N,className:se(Lt.item,Lt[`size_${z}`],$),style:{"--accordion-depth":N},...j,children:[r.jsxs("div",{className:Lt.header,children:[r.jsx("button",{type:"button",id:oe,"data-accordion-header-button":"","data-accordion-depth":N,className:Lt.hitTarget,"aria-expanded":F,"aria-controls":X,"aria-disabled":B||void 0,disabled:B,onClick:Y,onKeyDown:ae}),r.jsxs("div",{className:Lt.headerContent,children:[h==="leading"&&r.jsx("span",{className:Lt.chevron,"aria-hidden":"true",children:r.jsx(gn,{size:W,color:"currentColor"})}),V,r.jsxs("div",{className:Lt.labelBlock,children:[r.jsx("span",{className:Lt.label,children:o}),i&&r.jsx("span",{className:Lt.description,children:i})]}),d&&r.jsx("div",{className:Lt.trailingSlot,children:d}),h==="trailing"&&r.jsx("span",{className:Lt.chevron,"aria-hidden":"true",children:r.jsx(gn,{size:W,color:"currentColor"})})]})]}),r.jsx("div",{id:X,role:"region","aria-labelledby":oe,className:Lt.body,"aria-hidden":!F,children:r.jsx("div",{className:Lt.bodyInner,children:r.jsx("div",{className:Lt.bodyContent,children:r.jsx(du.Provider,{value:N+1,children:S})})})})]})});tg.displayName="AccordionItem";const z8="_root_1vgip_7",O8="_fullWidth_1vgip_12",D8="_panel_1vgip_19",F8="_panelInner_1vgip_73",B8="_item_1vgip_81",W8="_groupHeading_1vgip_87",H8="_groupHeadingSm_1vgip_96",U8="_groupHeadingLabel_1vgip_100",q8="_groupHeadingCollapsible_1vgip_112",V8="_groupChevron_1vgip_125",G8="_groupDivider_1vgip_139",On={root:z8,fullWidth:O8,panel:D8,panelInner:F8,item:B8,groupHeading:W8,groupHeadingSm:H8,groupHeadingLabel:U8,groupHeadingCollapsible:q8,groupChevron:V8,groupDivider:G8};function Y8({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return r.jsxs("div",{children:[e.heading&&r.jsxs("div",{className:se(On.groupHeading,o==="sm"&&On.groupHeadingSm,e.collapsible&&On.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[r.jsx("span",{className:On.groupHeadingLabel,children:e.heading}),e.collapsible&&r.jsx("span",{className:On.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,f)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return r.jsx(mn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:On.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const Gu=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},A)=>{const[_,C]=v.useState(h),M=v.useRef(null),$=d!==void 0?d:_,S=v.useCallback(O=>{M.current=O,A&&(typeof A=="function"?A(O):A.current=O)},[A]),j=v.useCallback(O=>{d===void 0&&C(O),f==null||f(O)},[d,f]);return v.useEffect(()=>{if(!$)return;const O=R=>{var N;(N=M.current)!=null&&N.contains(R.target)||j(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[$,j]),v.useEffect(()=>{if(!$)return;const O=R=>{R.key==="Escape"&&j(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[$,j]),r.jsxs("div",{ref:S,className:se(On.root,y&&On.fullWidth,w),...k,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:g?-1:0,onClick:g?void 0:()=>j(!$),onKeyDown:g?void 0:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),j(!$))},children:e}),r.jsx("div",{className:On.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:On.panelInner,children:o.map((O,R)=>r.jsxs("div",{children:[R>0&&r.jsx("div",{className:On.groupDivider,"aria-hidden":"true"}),r.jsx(Y8,{group:O,size:i,closeOnSelect:x,onClose:()=>j(!1)})]},O.id))})})]})});Gu.displayName="DropdownMenu";const K8="_hiddenInput_7w2s5_8",Q8="_area_7w2s5_19",Z8="_uploadIcon_7w2s5_53",X8="_textBlock_7w2s5_59",J8="_title_7w2s5_67",e7="_description_7w2s5_76",t7="_fileRow_7w2s5_88",n7="_fileIcon_7w2s5_96",r7="_fileName_7w2s5_101",o7="_successIcon_7w2s5_115",a7="_removeBtn_7w2s5_121",i7="_progressWrap_7w2s5_145",s7="_progressBar_7w2s5_153",l7="_progressFill_7w2s5_161",c7="_progressLabel_7w2s5_168",d7="_errorRow_7w2s5_178",u7="_errorIcon_7w2s5_186",h7="_errorText_7w2s5_192",p7="_areaMulti_7w2s5_206",f7="_multiDropZone_7w2s5_214",m7="_fileList_7w2s5_244",g7="_fileListItem_7w2s5_254",v7="_inline_7w2s5_267",y7="_inlineIcon_7w2s5_309",x7="_inlineText_7w2s5_330",w7="_inlineProgress_7w2s5_353",b7="_inlineProgressFill_7w2s5_363",qe={hiddenInput:K8,area:Q8,uploadIcon:Z8,textBlock:X8,title:J8,description:e7,fileRow:t7,fileIcon:n7,fileName:r7,successIcon:o7,removeBtn:a7,progressWrap:i7,progressBar:s7,progressFill:l7,progressLabel:c7,errorRow:d7,errorIcon:u7,errorText:h7,areaMulti:p7,multiDropZone:f7,fileList:m7,fileListItem:g7,inline:v7,inlineIcon:y7,inlineText:x7,inlineProgress:w7,inlineProgressFill:b7};function jd(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const ng=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:A,fieldVariant:_="outlined",disabled:C=!1,className:M,...$},S)=>{const j=v.useRef(null),[O,R]=v.useState(!1),N=!C&&(o||i==="empty"),T=v.useCallback(()=>{var re;!C&&(o||i==="empty")&&((re=j.current)==null||re.click())},[C,o,i]),z=v.useCallback(re=>{var oe;if(o){const X=re.target.files?Array.from(re.target.files):[];X.length&&(w==null||w(X))}else{const X=(oe=re.target.files)==null?void 0:oe[0];X&&(y==null||y(X))}re.target.value=""},[o,y,w]),B=v.useCallback(re=>{re.preventDefault(),N&&R(!0)},[N]),G=v.useCallback(()=>R(!1),[]),Z=v.useCallback(re=>{var oe;if(re.preventDefault(),R(!1),!!N)if(o){const X=re.dataTransfer.files?Array.from(re.dataTransfer.files):[];X.length&&(w==null||w(X))}else{const X=(oe=re.dataTransfer.files)==null?void 0:oe[0];X&&(y==null||y(X))}},[N,o,y,w]),F=r.jsx("input",{ref:j,type:"file",className:qe.hiddenInput,accept:x,multiple:o,disabled:C,"aria-hidden":"true",tabIndex:-1,onChange:z}),Y=l?r.jsxs("div",{className:qe.fileRow,children:[r.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zr,{size:16})}),r.jsx("span",{className:qe.fileName,children:l.name}),r.jsx(Dn,{size:"sm",variant:"subtle",children:jd(l)}),i==="complete"&&r.jsx("span",{className:`${qe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(on,{size:16})}),r.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(qs,{size:14})})})]}):null;if(e==="area"){if(o){const re=d??[];return r.jsxs("div",{ref:S,className:se(qe.areaMulti,M),"data-drag-over":O||void 0,"data-disabled":C||void 0,onDragOver:B,onDragLeave:G,onDrop:Z,...$,children:[F,r.jsxs("div",{className:qe.multiDropZone,children:[r.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Cd,{size:24})}),r.jsxs("div",{className:qe.textBlock,children:[r.jsx("p",{className:qe.title,children:f}),r.jsx("p",{className:qe.description,children:g})]}),r.jsx(ze,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Browse Files"})]}),re.length>0&&r.jsx("ul",{className:qe.fileList,"aria-label":"Selected files",children:re.map((oe,X)=>r.jsxs("li",{className:qe.fileListItem,children:[r.jsx("span",{className:`${qe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zr,{size:16})}),r.jsx("span",{className:qe.fileName,children:oe.name}),r.jsx(Dn,{size:"sm",variant:"subtle",children:jd(oe)}),r.jsx("button",{type:"button",className:qe.removeBtn,onClick:()=>A==null?void 0:A(X),"aria-label":`Remove ${oe.name}`,disabled:C,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(qs,{size:14})})})]},`${oe.name}-${X}`))})]})}return r.jsxs("div",{ref:S,className:se(qe.area,M),"data-state":i,"data-drag-over":O||void 0,"data-disabled":C||void 0,onDragOver:B,onDragLeave:G,onDrop:Z,...$,children:[F,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${qe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Cd,{size:24})}),r.jsxs("div",{className:qe.textBlock,children:[r.jsx("p",{className:qe.title,children:f}),r.jsx("p",{className:qe.description,children:g})]}),r.jsx(ze,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[Y,r.jsxs("div",{className:qe.progressWrap,children:[r.jsx("div",{className:qe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:qe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:qe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&Y,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:qe.errorRow,children:[r.jsx("span",{className:`${qe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(na,{size:20})}),r.jsx("p",{className:qe.errorText,children:h??"Upload failed. Please try again."})]}),r.jsx(ze,{variant:"tertiary",size:"sm",onClick:T,disabled:C,children:"Try Again"})]})]})}const ee={empty:r.jsx(Cd,{size:16}),uploading:r.jsx(zr,{size:16}),complete:r.jsx(on,{size:16}),error:r.jsx(na,{size:16})}[i],ae=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:S,className:se(qe.inline,M),"data-state":i,"data-field-variant":_,"data-disabled":C||void 0,...$,children:[F,r.jsx("span",{className:`${qe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ee}),r.jsxs("span",{className:qe.inlineText,"data-has-file":ae?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),ae&&r.jsx(Dn,{size:"sm",variant:"subtle",children:jd(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:qe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(qs,{size:14})})}),i==="empty"&&r.jsx(ze,{variant:"tertiary",size:"xs",onClick:T,disabled:C,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:qe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:qe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});ng.displayName="FileUploader";const k7="_wrapper_127v8_8",_7="_labelRow_127v8_16",C7="_label_127v8_16",j7="_required_127v8_28",S7="_labelIcon_127v8_36",N7="_sm_127v8_46",M7="_md_127v8_47",R7="_lg_127v8_48",L7="_shell_127v8_44",A7="_outlined_127v8_75",$7="_underlined_127v8_102",T7="_float_127v8_147",I7="_leadingSlot_127v8_181",E7="_trailingSlot_127v8_193",P7="_trailingActionWrap_127v8_206",z7="_trailingActionBtn_127v8_213",O7="_successTrailingSlot_127v8_234",D7="_errorTrailingSlot_127v8_239",F7="_control_127v8_251",B7="_selectValue_127v8_297",W7="_selectPlaceholder_127v8_303",H7="_selectChevron_127v8_307",U7="_selectChevronOpen_127v8_312",q7="_textareaShell_127v8_315",V7="_textareaControl_127v8_334",G7="_footer_127v8_351",Y7="_footerRow_127v8_363",K7="_footerError_127v8_364",Q7="_footerSuccess_127v8_365",Z7="_footerIcon_127v8_368",X7="_wrapperHorizontal_127v8_378",J7="_horizontalLabelCol_127v8_384",eb="_horizontalLabelHint_127v8_393",tb="_horizontalControlCol_127v8_402",nb="_msContainer_127v8_416",rb="_msShell_127v8_425",ob="_msOpen_127v8_440",ab="_msDisabled_127v8_447",ib="_msBody_127v8_450",sb="_msPlaceholder_127v8_459",lb="_msChevron_127v8_469",cb="_msChevronOpen_127v8_480",db="_msPanel_127v8_483",$e={wrapper:k7,labelRow:_7,label:C7,required:j7,labelIcon:S7,sm:N7,md:M7,lg:R7,shell:L7,outlined:A7,underlined:$7,float:T7,leadingSlot:I7,trailingSlot:E7,trailingActionWrap:P7,trailingActionBtn:z7,successTrailingSlot:O7,errorTrailingSlot:D7,control:F7,selectValue:B7,selectPlaceholder:W7,selectChevron:H7,selectChevronOpen:U7,textareaShell:q7,textareaControl:V7,footer:G7,footerRow:Y7,footerError:K7,footerSuccess:Q7,footerIcon:Z7,wrapperHorizontal:X7,horizontalLabelCol:J7,horizontalLabelHint:eb,horizontalControlCol:tb,msContainer:nb,msShell:rb,msOpen:ob,msDisabled:ab,msBody:ib,msPlaceholder:sb,msChevron:lb,msChevronOpen:cb,msPanel:db};function pa({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,A=l?"error":d?"success":"hint",_=k?r.jsxs("p",{className:se($e.footer,A==="error"&&$e.footerError,A==="success"&&$e.footerSuccess),role:A==="error"?"alert":void 0,"aria-live":A==="error"?"assertive":void 0,children:[A==="hint"&&r.jsx("span",{className:`${$e.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(na,{size:12})}),k]}):null,C=e!=null?r.jsxs("div",{className:$e.labelRow,children:[r.jsx("label",{className:$e.label,htmlFor:f,children:e}),h&&r.jsx("span",{className:$e.required,"aria-hidden":"true",children:"*"}),o&&r.jsx("span",{className:`${$e.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const M={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:se($e.wrapper,$e.wrapperHorizontal,y),children:[(C||i)&&r.jsxs("div",{className:$e.horizontalLabelCol,style:M,children:[C,i&&r.jsx("p",{className:$e.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:$e.horizontalControlCol,children:[w,_]})]})}return r.jsxs("div",{className:se($e.wrapper,y),children:[C,w,_]})}function _i({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const A=o==="sm"?14:o==="lg"?18:16,_=s&&!i&&!f&&!g?r.jsx(on,{size:A}):null,C=i&&!f&&!g?r.jsx(na,{size:A}):null,M=!!h,$=!!(f||g||_||C);return r.jsxs("div",{className:se($e.shell,$e[e],$e[o],x&&$e.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":M||void 0,"data-has-trailing":$||void 0,children:[h&&r.jsx("span",{className:se($e.leadingSlot,"alloy-icon-slot"),children:h}),k,g?r.jsx("span",{className:$e.trailingActionWrap,children:g}):f||_||C?r.jsx("span",{className:se($e.trailingSlot,"alloy-icon-slot",_&&$e.successTrailingSlot,C&&$e.errorTrailingSlot),children:f??_??C}):null]})}const Yu=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:A,id:_,disabled:C,readOnly:M,className:$,...S},j)=>{const O=v.useId(),R=_??O;return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:R,layout:w,labelWidth:k,labelDescription:A,className:$,children:r.jsx(_i,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:M,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:j,id:R,type:g,disabled:C,readOnly:M,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${R}-footer`:void 0,className:se($e.control),...S})})})});Yu.displayName="TextField";const ub=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:A,disabled:_,readOnly:C,className:M,...$},S)=>{const j=v.useId(),O=A??j;return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:O,layout:y,labelWidth:w,labelDescription:k,className:M,children:r.jsx(_i,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:S,id:O,disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,className:se($e.control,$e.textareaControl),...$})})})});ub.displayName="TextArea";const hb={sm:"sm",md:"md",lg:"lg"},rg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:A,defaultValue:_="",onChange:C,placeholder:M="Select an option…",disabled:$,readOnly:S,id:j,className:O},R)=>{var W;const N=v.useId(),T=j??N,z=A!==void 0,[B,G]=v.useState(_),Z=z?A:B,F=v.useCallback(V=>{z||G(V),C==null||C(V)},[z,C]),[Y,ee]=v.useState(!1),ae=(W=k.find(V=>V.value===Z))==null?void 0:W.label,re=f==="sm"?14:f==="lg"?18:16,oe=hb[f],X=r.jsx(_i,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:S,focused:Y,leadingIcon:g,trailingIcon:r.jsx("span",{className:se($e.selectChevron,Y&&$e.selectChevronOpen),"aria-hidden":"true",children:r.jsx(Sn,{size:re})}),children:r.jsx("span",{className:se($e.control,$e.selectValue,!ae&&$e.selectPlaceholder),children:ae??M})});return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:T,layout:x,labelWidth:y,labelDescription:w,className:O,children:r.jsx(Gu,{ref:R,id:T,fullWidth:!0,trigger:X,groups:[{id:"options",options:k.map(V=>({id:V.value,label:V.label,disabled:V.disabled,selected:V.value===Z,onClick:()=>F(V.value)}))}],size:oe,width:"100%",placement:"bottom-start",open:Y,onOpenChange:ee,disabled:$||S})})});rg.displayName="SelectField";const pb=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:A,readOnly:_,className:C,...M},$)=>{const S=v.useId(),j=k??S,[O,R]=v.useState(!1),N=f==="sm"?14:f==="lg"?18:16;return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:j,layout:x,labelWidth:y,labelDescription:w,className:C,children:r.jsx(_i,{variant:h,size:f,error:!!s,success:!!l,disabled:A,readOnly:_,leadingIcon:g,trailingAction:r.jsx("button",{type:"button",className:`${$e.trailingActionBtn} alloy-icon-slot`,onClick:()=>R(T=>!T),tabIndex:A?-1:0,"aria-label":O?"Hide password":"Show password","aria-pressed":O,children:O?r.jsx($0,{size:N}):r.jsx(zu,{size:N})}),children:r.jsx("input",{ref:$,id:j,type:O?"text":"password",disabled:A,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:se($e.control),...M})})})});pb.displayName="PasswordField";const og=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:A,value:_,defaultValue:C,disabled:M,readOnly:$,className:S,...j},O)=>{const R=v.useId(),N=A??R,T=f==="sm"?14:f==="lg"?18:16,z=_!==void 0?String(_).length>0:void 0,B=v.useCallback(G=>{x==null||x(G)},[x]);return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:N,layout:y,labelWidth:w,labelDescription:k,className:S,children:r.jsx(_i,{variant:h,size:f,error:!!s,success:!!l,disabled:M,readOnly:$,leadingIcon:r.jsx(Bu,{size:T}),trailingAction:z?r.jsx("button",{type:"button",className:`${$e.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:M?-1:0,"aria-label":"Clear search",children:r.jsx(bi,{size:T})}):void 0,children:r.jsx("input",{ref:O,id:N,type:"search",value:_,defaultValue:C,disabled:M,readOnly:$,"aria-invalid":s?!0:void 0,onChange:B,className:se($e.control),...j})})})});og.displayName="SearchField";const ag=v.forwardRef((e,o)=>r.jsx(Yu,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));ag.displayName="EmailField";const ig=v.forwardRef((e,o)=>r.jsx(Yu,{ref:o,type:"number",inputMode:"numeric",...e}));ig.displayName="NumberField";const fb={sm:"sm",md:"sm",lg:"md"},mb={sm:"sm",md:"md",lg:"lg"},gb=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:A=[],onChange:_,placeholder:C="Select options…",disabled:M,readOnly:$,id:S,className:j},O)=>{const R=v.useId(),N=S??R,T=`${N}-list`,z=v.useRef(null),B=k!==void 0,[G,Z]=v.useState(A),F=B?k:G,Y=v.useCallback(L=>{B||Z(L),_==null||_(L)},[B,_]),[ee,ae]=v.useState(!1);v.useEffect(()=>{if(!ee)return;const L=K=>{z.current&&!z.current.contains(K.target)&&ae(!1)},q=K=>{K.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",L),document.addEventListener("keydown",q),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("keydown",q)}},[ee]);const re=L=>{if(M||$)return;const q=F.includes(L)?F.filter(K=>K!==L):[...F,L];Y(q)},oe=L=>{M||$||((L.key==="Enter"||L.key===" ")&&(L.preventDefault(),ae(q=>!q)),L.key==="Backspace"&&F.length>0&&!ee&&Y(F.slice(0,-1)))},X=f==="sm"?14:f==="lg"?18:16,W=fb[f],V=mb[f],I=Object.fromEntries(w.map(L=>[L.value,L.label]));return r.jsx(pa,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:N,layout:g,labelWidth:x,labelDescription:y,className:j,children:r.jsxs("div",{ref:z,className:$e.msContainer,children:[r.jsxs("div",{ref:O,id:N,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":T,"aria-disabled":M||void 0,tabIndex:M?-1:0,className:se($e.msShell,$e[h],$e[f],ee&&$e.msOpen,M&&$e.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":M||void 0,onClick:()=>{!M&&!$&&ae(L=>!L)},onKeyDown:oe,children:[r.jsx("div",{className:$e.msBody,children:F.length===0?r.jsx("span",{className:$e.msPlaceholder,children:C}):F.map(L=>r.jsx(Dn,{size:W,variant:"subtle",dismissible:!M&&!$,onDismiss:()=>Y(F.filter(q=>q!==L)),children:I[L]??L},L))}),r.jsx("span",{className:se($e.msChevron,"alloy-icon-slot",ee&&$e.msChevronOpen),children:r.jsx(Sn,{size:X})})]}),ee&&r.jsx("div",{id:T,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:$e.msPanel,children:w.map(L=>{const q=F.includes(L.value);return r.jsx(mn,{label:L.label,size:V,trailingAction:"checkbox",checked:q,disabled:L.disabled,role:"option","aria-selected":q,onMouseDown:K=>{K.preventDefault()},onCheckedChange:()=>{L.disabled||re(L.value)}},L.value)})})]})})});gb.displayName="MultiSelectField";const vb="_root_1249j_6",yb="_pageControls_1249j_14",xb="_pageBtn_1249j_21",wb="_ellipsis_1249j_36",bb="_rowsGroup_1249j_51",kb="_rowsSelect_1249j_58",_b="_countText_1249j_64",Cb="_groupLabel_1249j_74",jb="_goToGroup_1249j_84",Sb="_goToInput_1249j_91",Pn={root:vb,pageControls:yb,pageBtn:xb,ellipsis:wb,rowsGroup:bb,rowsSelect:kb,countText:_b,groupLabel:Cb,goToGroup:jb,goToInput:Sb};function Nb(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Mb=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...A},_)=>{const[C,M]=v.useState(""),$=y,S=y,j=y==="sm"?14:16,O=Nb(e,o,x),R=v.useCallback(z=>{const B=Math.min(Math.max(1,z),o);B!==e&&i(B)},[e,o,i]),N=v.useCallback(z=>{if(z.key==="Enter"){const B=parseInt(C,10);isNaN(B)||R(B),M("")}},[C,R]),T=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return r.jsxs("nav",{ref:_,"aria-label":"Pagination",className:se(Pn.root,k),"data-size":y,...A,children:[s&&r.jsxs("div",{className:Pn.rowsGroup,children:[r.jsx("span",{className:Pn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:Pn.rowsSelect,children:r.jsx(rg,{size:S,value:l,disabled:w,"aria-label":"Rows per page",onChange:z=>h==null?void 0:h(Number(z.target.value)),children:d.map(z=>r.jsx("option",{value:z,children:z},z))})})]}),T&&r.jsx("span",{className:Pn.countText,"aria-live":"polite",children:T}),r.jsxs("div",{className:Pn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(ze,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>R(e-1),children:r.jsx(A0,{size:j})}),O.map((z,B)=>z==="ellipsis"?r.jsx("span",{className:Pn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${B}`):r.jsx(ze,{variant:z===e?"secondary":"ghost",size:$,"aria-label":`Page ${z}`,"aria-current":z===e?"page":void 0,disabled:w,onClick:()=>R(z),className:Pn.pageBtn,children:z},z)),r.jsx(ze,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>R(e+1),children:r.jsx(gn,{size:j})})]}),f&&r.jsxs("div",{className:Pn.goToGroup,children:[r.jsx("span",{className:Pn.groupLabel,children:"Go to"}),r.jsx("div",{className:Pn.goToInput,children:r.jsx(ig,{size:S,value:C,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:z=>M(z.target.value),onKeyDown:N})})]})]})});Mb.displayName="Pagination";const Rb="_root_1vx33_6",Lb="_fullWidth_1vx33_18",Ab="_item_1vx33_23",$b="_indicator_1vx33_28",Tb="_sm_1vx33_46",Ib="_md_1vx33_54",Eb="_lg_1vx33_62",Pb="_itemSelected_1vx33_109",zb="_itemIcon_1vx33_115",Ob="_itemLabel_1vx33_127",Er={root:Rb,fullWidth:Lb,item:Ab,indicator:$b,sm:Tb,md:Ib,lg:Eb,itemSelected:Pb,itemIcon:zb,itemLabel:Ob},sg=v.createContext(null);function Db(e){const o=v.useContext(sg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const lg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:g,onChange:x,disabled:y,name:w}=Db("SegmentedControl.Item"),k=g===e,A=y||!!l;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:w,disabled:A,className:se(Er.item,k&&Er.itemSelected,i),onClick:_=>{A||x(e),d==null||d(_)},...h,children:[o&&r.jsx("span",{className:se(Er.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&r.jsx("span",{className:Er.itemLabel,children:s})]})});lg.displayName="SegmentedControl.Item";const cg=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(o),k=e!==void 0,A=k?e:y,_=v.useId(),C=v.useRef(null);v.useLayoutEffect(()=>{const $=C.current;if(!$)return;const S=$.querySelector('[aria-checked="true"]');S&&($.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[A,s]);const M=$=>{k||w($),i==null||i($)};return r.jsx(sg.Provider,{value:{value:A,onChange:M,disabled:l,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"radiogroup",className:se(Er.root,Er[s],d&&Er.fullWidth,h),...g,children:[r.jsx("span",{className:Er.indicator,"aria-hidden":"true"}),f]})})});cg.displayName="SegmentedControl";Object.assign(cg,{Item:lg});const Fb="_root_fkv0x_6",Bb="_sm_fkv0x_26",Wb="_md_fkv0x_33",Hb="_lg_fkv0x_40",Ub="_dot_fkv0x_49",qb="_success_fkv0x_58",Vb="_warning_fkv0x_65",Gb="_error_fkv0x_72",Yb="_info_fkv0x_79",Kb="_neutral_fkv0x_86",Qb="_pending_fkv0x_93",Fs={root:Fb,sm:Bb,md:Wb,lg:Hb,dot:Ub,success:qb,warning:Vb,error:Gb,info:Yb,neutral:Kb,pending:Qb},fi=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>r.jsxs("span",{ref:h,className:se(Fs.root,Fs[o],Fs[e],s),...d,children:[i&&r.jsx("span",{className:Fs.dot,"aria-hidden":"true"}),l]}));fi.displayName="StatusTag";const Zb="_root_1m8t5_6",Xb="_underline_1m8t5_15",Jb="_background_1m8t5_21",ek="_underlineIndicator_1m8t5_26",tk="_md_1m8t5_43",nk="_lg_1m8t5_44",rk="_tab_1m8t5_42",ok="_tabSelected_1m8t5_77",ak="_tabIcon_1m8t5_99",ik="_tabLabel_1m8t5_111",sk="_tabBadge_1m8t5_116",lk="_tabLabelEditable_1m8t5_123",ck="_tabLabelInput_1m8t5_128",dk="_addTab_1m8t5_147",uk="_addTabIcon_1m8t5_160",nn={root:Zb,underline:Xb,background:Jb,underlineIndicator:ek,md:tk,lg:nk,tab:rk,tabSelected:ok,tabIcon:ak,tabLabel:ik,tabBadge:sk,tabLabelEditable:lk,tabLabelInput:ck,addTab:dk,addTabIcon:uk},dg=v.createContext(null);function ug(e){const o=v.useContext(dg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const hg=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:g,children:x,...y},w)=>{const{value:k,onChange:A,disabled:_,name:C}=ug("Tabs.Tab"),M=k===e,$=_||!!s,S=typeof x=="string"?x:"",[j,O]=v.useState(d&&l),[R,N]=v.useState(S),T=v.useRef(null);v.useEffect(()=>{if(j){const F=T.current;F&&(F.focus(),F.select())}},[j]),v.useEffect(()=>{d&&l&&!j&&(N(typeof x=="string"?x:""),O(!0))},[d,l]);const z=()=>{const F=R.trim();F&&F!==S&&(h==null||h(F)),O(!1)},B=()=>{N(S),O(!1)},G=F=>{!l||$||(F.stopPropagation(),N(S),O(!0))},Z=F=>{F.key==="Enter"?(F.preventDefault(),z()):F.key==="Escape"&&(F.preventDefault(),B())};return r.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":M,name:C,disabled:$,className:se(nn.tab,M&&nn.tabSelected,g),onClick:F=>{j||($||A(e),f==null||f(F))},...y,children:[o&&r.jsx("span",{className:se(nn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),j?r.jsx("input",{ref:T,type:"text",value:R,onChange:F=>N(F.target.value),onKeyDown:Z,onBlur:z,onClick:F=>F.stopPropagation(),className:nn.tabLabelInput,"aria-label":"Tab name",size:Math.max(R.length,1)}):x!==void 0&&r.jsx("span",{className:se(nn.tabLabel,l&&nn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!j&&r.jsx("span",{className:nn.tabBadge,children:i})]})});hg.displayName="Tabs.Tab";const hk=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),pg=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=ug("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:se(nn.tab,nn.addTab,e),onClick:o,...s,children:r.jsx("span",{className:se(nn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(hk,{})})})});pg.displayName="Tabs.AddTab";const fg=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...g},x)=>{const[y,w]=v.useState(s),k=i!==void 0,A=k?i:y,_=v.useId(),C=v.useRef(null);v.useLayoutEffect(()=>{const $=C.current;if(!$||e!=="underline")return;const S=$.querySelector('[aria-selected="true"]');S&&($.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[A,e]);const M=$=>{k||w($),l==null||l($)};return r.jsx(dg.Provider,{value:{value:A,onChange:M,disabled:d,variant:e,size:o,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"tablist",className:se(nn.root,nn[e],nn[o],h),...g,children:[e==="underline"&&r.jsx("span",{className:nn.underlineIndicator,"aria-hidden":"true"}),f]})})});fg.displayName="Tabs";Object.assign(fg,{Tab:hg,AddTab:pg});const pk="_selectedBorder_1ypeg_7",fk="_selectedFill_1ypeg_12",_f={selectedBorder:pk,selectedFill:fk},mk=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const g=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?_f.selectedFill:_f.selectedBorder:void 0;return r.jsx(ze,{ref:f,variant:o,"aria-pressed":e,className:se(x,d),onClick:g,...h})});mk.displayName="ToggleButton";const gk="_root_mcb75_6",vk="_disabled_mcb75_13",yk="_sm_mcb75_20",xk="_md_mcb75_31",wk="_lg_mcb75_42",bk="_track_mcb75_54",kk="_trackChecked_mcb75_90",_k="_thumb_mcb75_100",Ck="_labelWrap_mcb75_117",jk="_label_mcb75_117",Sk="_description_mcb75_139",ar={root:gk,disabled:vk,sm:yk,md:xk,lg:wk,track:bk,trackChecked:kk,thumb:_k,labelWrap:Ck,label:jk,description:Sk},Nk=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:g,value:x,className:y},w)=>{const k=v.useId(),A=f??k,_=`${A}-label`,C=e!==void 0,[M,$]=v.useState(o),S=C?e:M,j=()=>{if(s)return;const R=!S;C||$(R),i==null||i(R)},O=R=>{(R.key===" "||R.key==="Enter")&&(R.preventDefault(),j())};return r.jsxs("div",{className:se(ar.root,ar[l],s&&ar.disabled,y),children:[r.jsx("button",{ref:w,type:"button",role:"switch",id:A,"aria-checked":S,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:se(ar.track,S&&ar.trackChecked),"data-checked":S||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:O,children:r.jsx("span",{className:ar.thumb})}),(d||h)&&r.jsxs("div",{className:ar.labelWrap,children:[d&&r.jsx("label",{id:_,htmlFor:A,className:ar.label,children:d}),h&&r.jsx("span",{className:ar.description,children:h})]})]})});Nk.displayName="Switch";const Mk="_root_104n4_5",Rk="_disabled_104n4_11",Lk="_sm_104n4_17",Ak="_md_104n4_25",$k="_lg_104n4_33",Tk="_controlWrap_104n4_41",Ik="_input_104n4_50",Ek="_ring_104n4_65",Pk="_ringChecked_104n4_90",zk="_ringError_104n4_94",Ok="_dot_104n4_104",Dk="_labelWrap_104n4_112",Fk="_label_104n4_112",Bk="_error_104n4_130",Wk="_required_104n4_132",Hk="_description_104n4_137",Jt={root:Mk,disabled:Rk,sm:Lk,md:Ak,lg:$k,controlWrap:Tk,input:Ik,ring:Ek,ringChecked:Pk,ringError:zk,dot:Ok,labelWrap:Dk,label:Fk,error:Bk,required:Wk,description:Hk},Uk=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:g,name:x,required:y,className:w},k)=>{const A=v.useId(),_=g??A;return r.jsxs("div",{className:se(Jt.root,Jt[d],s&&Jt.disabled,l&&Jt.error,w),children:[r.jsxs("div",{className:Jt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:_,name:x,value:e,checked:o,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:Jt.input}),r.jsx("span",{className:se(Jt.ring,o&&Jt.ringChecked,l&&Jt.ringError),"aria-hidden":"true",children:o&&r.jsx("span",{className:Jt.dot})})]}),(h||f)&&r.jsxs("div",{className:Jt.labelWrap,children:[h&&r.jsxs("label",{htmlFor:_,className:Jt.label,children:[h,y&&r.jsx("span",{className:Jt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Jt.description,children:f})]})]})});Uk.displayName="Radio";const qk="_table_1ad04_8",Vk="_sm_1ad04_16",Gk="_row_1ad04_30",Yk="_head_1ad04_47",Kk="_headLabel_1ad04_82",Qk="_sortBtn_1ad04_96",Zk="_sortIcon_1ad04_119",Xk="_cell_1ad04_142",Jk="_cellText_1ad04_175",e_="_cellStack_1ad04_203",t_="_cellStackPrimary_1ad04_210",n_="_cellStackSecondary_1ad04_221",r_="_cellActions_1ad04_233",o_="_cellControl_1ad04_240",a_="_addCell_1ad04_251",i_="_addRowCell_1ad04_264",s_="_addRowLabel_1ad04_276",$t={table:qk,sm:Vk,row:Gk,head:Yk,headLabel:Kk,sortBtn:Qk,sortIcon:Zk,cell:Xk,cellText:Jk,cellStack:e_,cellStackPrimary:t_,cellStackSecondary:n_,cellActions:r_,cellControl:o_,addCell:a_,addRowCell:i_,addRowLabel:s_},mg=v.createContext({addColumn:!1,addRow:!1}),gg=()=>v.useContext(mg),l_=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...g},x)=>{const y=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(mg.Provider,{value:y,children:r.jsx("table",{ref:x,className:se($t.table,e==="sm"&&$t.sm,h),"data-interaction":o,...g,children:f})})});l_.displayName="Table";const vg=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},g)=>{const x=o!==void 0;return r.jsx("th",{ref:g,className:se($t.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:$t.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,r.jsx("span",{className:$t.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:r.jsx(Sn,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:$t.headLabel,children:h})})});vg.displayName="TableHead";const c_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=gg(),d=s?v.Children.map(e,(h,f)=>{if(!v.isValidElement(h)||f!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,r.jsx(vg,{hoverable:!0,onClick:l,className:$t.addCell,"aria-label":"Add column",children:r.jsx(vo,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return r.jsx("thead",{ref:i,...o,children:d})});c_.displayName="TableHeader";const yg=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:se($t.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));yg.displayName="TableRow";const uu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>r.jsx("td",{ref:f,className:se($t.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));uu.displayName="TableCell";const d_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=gg(),h=s?v.Children.map(e,f=>{if(!v.isValidElement(f))return f;const g=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...g,r.jsx(uu,{"aria-hidden":"true",className:$t.addCell},"__add_col_pad")])}):e;return r.jsxs("tbody",{ref:i,...o,children:[h,l&&r.jsx(yg,{hoverable:!1,children:r.jsx(uu,{colSpan:999,onClick:d,className:$t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:$t.addRowLabel,children:[r.jsx(vo,{size:14,strokeWidth:2}),"Add row"]})})})]})});d_.displayName="TableBody";const u_=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>r.jsx("span",{ref:h,className:se($t.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));u_.displayName="CellText";const h_=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>r.jsxs("div",{ref:l,className:se($t.cellStack,i),...s,children:[r.jsx("span",{className:$t.cellStackPrimary,children:e}),o&&r.jsx("span",{className:$t.cellStackSecondary,children:o})]}));h_.displayName="CellStack";const p_=v.forwardRef(({size:e="sm",...o},i)=>r.jsx(Dn,{ref:i,size:e,...o}));p_.displayName="CellTag";const f_=v.forwardRef(({size:e="sm",...o},i)=>r.jsx(fi,{ref:i,size:e,...o}));f_.displayName="CellStatusTag";const m_=v.forwardRef(({className:e,children:o,...i},s)=>r.jsx("div",{ref:s,className:se($t.cellActions,e),...i,children:o}));m_.displayName="CellActions";const g_=v.forwardRef(({className:e,children:o,...i},s)=>r.jsx("div",{ref:s,className:se($t.cellControl,e),...i,children:o}));g_.displayName="CellControl";const v_="_root_1afcs_8",y_="_secondary_1afcs_23",x_="_header_1afcs_28",w_="_headerText_1afcs_36",b_="_title_1afcs_43",k_="_subtitle_1afcs_52",__="_action_1afcs_61",C_="_hero_1afcs_66",j_="_heroValue_1afcs_74",S_="_heroCaption_1afcs_83",N_="_heroChange_1afcs_89",M_="_body_1afcs_95",R_="_legend_1afcs_103",un={root:v_,secondary:y_,header:x_,headerText:w_,title:b_,subtitle:k_,action:__,hero:C_,heroValue:j_,heroCaption:S_,heroChange:N_,body:M_,legend:R_},L_=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:g,className:x,...y},w)=>r.jsxs("div",{ref:w,className:se(un.root,f&&un.secondary,x),...y,children:[r.jsxs("div",{className:un.header,children:[r.jsxs("div",{className:un.headerText,children:[r.jsx("h3",{className:un.title,children:e}),o&&r.jsx("p",{className:un.subtitle,children:o})]}),i&&r.jsx("div",{className:un.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:un.hero,children:[s!==void 0&&r.jsx("span",{className:un.heroValue,children:s}),l&&r.jsx("span",{className:un.heroChange,children:l}),d&&r.jsx("span",{className:un.heroCaption,children:d})]}),r.jsx("div",{className:un.body,children:g}),h&&r.jsx("div",{className:un.legend,children:h})]}));L_.displayName="ChartCard";const A_="_root_je8nq_7",$_="_item_je8nq_17",T_="_swatch_je8nq_23",I_="_label_je8nq_29",E_="_bookend_je8nq_33",qo={root:A_,item:$_,swatch:T_,label:I_,bookend:E_},xg=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>r.jsxs("div",{ref:f,className:se(qo.root,d),...h,children:[o&&r.jsx("span",{className:qo.bookend,children:o}),e.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return r.jsxs("span",{className:qo.item,children:[r.jsx("span",{className:qo.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&r.jsx("span",{className:qo.label,children:g.label})]},x)}),i&&r.jsx("span",{className:qo.bookend,children:i})]}));xg.displayName="ChartLegend";const P_="_root_igkx4_5",z_="_svgWrap_igkx4_13",O_="_svg_igkx4_13",D_="_gridLine_igkx4_23",F_="_axisLabel_igkx4_28",B_="_legendWrap_igkx4_43",W_="_legendItem_igkx4_51",H_="_legendDot_igkx4_57",U_="_legendLabel_igkx4_64",q_="_tooltip_igkx4_71",V_="_tooltipLabel_igkx4_85",G_="_tooltipRow_igkx4_95",Y_="_tooltipDot_igkx4_101",K_="_tooltipSeries_igkx4_108",Q_="_tooltipValue_igkx4_115",De={root:P_,svgWrap:z_,svg:O_,gridLine:D_,axisLabel:F_,legendWrap:B_,legendItem:W_,legendDot:H_,legendLabel:U_,tooltip:q_,tooltipLabel:V_,tooltipRow:G_,tooltipDot:Y_,tooltipSeries:K_,tooltipValue:Q_},Z_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Sd(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Vo(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const X_=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:A,className:_,...C},M)=>{var H,E,ne,pe;const $=g&&g.length>0?g:Z_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,O]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),R=v.useRef(null),[N,T]=v.useState(540);v.useEffect(()=>{const ce=R.current;if(!ce)return;const me=new ResizeObserver(ve=>{var Fe;const Le=(Fe=ve[0])==null?void 0:Fe.contentRect.width;Le>0&&T(Math.floor(Le))});me.observe(ce);const be=Math.floor(ce.getBoundingClientRect().width);return be>0&&T(be),()=>me.disconnect()},[]);const z=44,B=0,G=20,Z=20,F=N,Y=s,ee=F-z-B,ae=Y-G-Z,re=5,oe=e.map((ce,me)=>ce.color??$[me%$.length]);let X=0;i==="stacked"?o.forEach((ce,me)=>{const be=e.reduce((ve,Le)=>ve+(Le.data[me]??0),0);be>X&&(X=be)}):i==="horizontal"?X=Math.max(...((H=e[0])==null?void 0:H.data)??[0]):e.forEach(ce=>ce.data.forEach(me=>{me>X&&(X=me)}));const W=Sd(X),V=Array.from({length:re+1},(ce,me)=>W*(me/re)).reverse(),I=ce=>Z+ae-ce/W*ae,L=ee/o.length,q=3,K=i==="grouped"?Math.max(4,(L-q*(e.length+1))/e.length):L,ie=()=>O(ce=>({...ce,visible:!1})),de=v.useCallback(ce=>{const me=ce.currentTarget.getBoundingClientRect(),be=ce.clientX-me.left,ve=Math.floor((be-z)/L);if(ve<0||ve>=o.length){ie();return}const Le=e.map((Fe,Pe)=>({color:oe[Pe],series:Fe.label,value:Fe.data[ve]??0}));O({visible:!0,x:ce.clientX+12,y:ce.clientY-8,label:o[ve],items:Le})},[e,o,L,oe,z]);if(i==="gradient"){const ce=((E=e[0])==null?void 0:E.data)??[],me=((ne=e[0])==null?void 0:ne.label)??"",be=44,ve=0,Le=20,Fe=20,Pe=Math.max(F-be-ve,1),Ie=Y-Le-Fe,Te=Math.max(0,...ce),Ve=Te>0?Sd(Te):10,Qe=5,ut=Array.from({length:Qe+1},(ke,Ee)=>Ve*Ee/Qe),He=ke=>Le+Ie-ke/Ve*Ie,pt=Pe/Math.max(1,ce.length),it=ke=>be+pt*ke,Bt=ke=>be+pt*(ke+1),lt=ke=>be+pt*(ke+.5),Et=ce.length===0?"":ce.map((ke,Ee)=>{const et=He(ke);return`M ${it(Ee)} ${et} L ${Bt(Ee)} ${et}`}).join(" "),vn=[];ce.forEach((ke,Ee)=>{if(ke<=0)return;const et=He(ke);vn.push({x:it(Ee),y:et,width:Math.max(Bt(Ee)-it(Ee),0),height:Le+Ie-et})});const le=Math.max(1,Math.ceil(45/pt)),xe=o.length-1,Re=w??(ke=>`${Vo(ke)}${h}`);return r.jsxs("div",{ref:M,className:se(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsxs("svg",{width:F,height:Y,viewBox:`0 0 ${F} ${Y}`,className:De.svg,onMouseLeave:ie,onMouseMove:ke=>{const Ee=ke.currentTarget.getBoundingClientRect(),et=ke.clientX-Ee.left,yt=Math.floor((et-be)/pt);if(yt<0||yt>=ce.length){ie();return}O({visible:!0,x:ke.clientX+12,y:ke.clientY-8,label:o[yt]??"",items:[{color:y,series:me,value:ce[yt]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),ut.map((ke,Ee)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:F-ve,y1:He(ke),y2:He(ke),className:De.gridLine}),r.jsxs("text",{x:0,y:He(ke)-6,className:De.axisLabel,textAnchor:"start",children:[Vo(ke),h]})]},`t-${Ee}`)),vn.map((ke,Ee)=>r.jsx("rect",{x:ke.x,y:ke.y,width:ke.width,height:ke.height,fill:`url(#${S}-fill)`},`b-${Ee}`)),Et&&r.jsx("path",{d:Et,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var Vt;const ke=(Vt=R.current)==null?void 0:Vt.getBoundingClientRect();if(!ke)return null;const Ee=j.x-12-ke.left,et=Math.floor((Ee-be)/pt);if(et<0||et>=ce.length)return null;const yt=ce[et]??0;return yt<=0?null:r.jsx("circle",{cx:lt(et),cy:He(yt),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((ke,Ee)=>{const et=Ee===0,yt=Ee===xe;if(!(et||yt)&&Ee%le!==0)return null;const dr=et?be:yt?F-ve:lt(Ee),Hr=et?"start":yt?"end":"middle";return r.jsx("text",{x:dr,y:Y-Fe+18,className:De.axisLabel,textAnchor:Hr,children:ke},`xl-${Ee}`)})]})}),j.visible&&j.items.length>0&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(ke=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:ke.color}}),r.jsx("span",{className:De.tooltipSeries,children:ke.series}),r.jsx("span",{className:De.tooltipValue,children:Re(ke.value)})]},ke.series))]})]})}if(i==="horizontal"){const ce=((pe=e[0])==null?void 0:pe.data)??[],me=Sd(Math.max(...ce,1)),be=28,ve=10,Le=120,Pe=F-Le-44,Ie=o.length*(be+ve)+ve;return r.jsxs("div",{ref:M,className:se(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsx("svg",{width:F,height:Ie,viewBox:`0 0 ${F} ${Ie}`,className:De.svg,onMouseLeave:ie,onMouseMove:Te=>{var He;const Ve=Te.currentTarget.getBoundingClientRect(),Qe=Te.clientY-Ve.top,ut=Math.floor(Qe/(be+ve));if(ut<0||ut>=o.length){ie();return}O({visible:!0,x:Te.clientX+12,y:Te.clientY-8,label:o[ut],items:[{color:oe[0],series:((He=e[0])==null?void 0:He.label)??"",value:ce[ut]??0}]})},children:o.map((Te,Ve)=>{const Qe=ve+Ve*(be+ve),ut=ce[Ve]??0,He=ut/me*Pe;return r.jsxs("g",{children:[r.jsx("text",{x:Le-8,y:Qe+be/2+4,className:De.axisLabel,textAnchor:"end",children:Te}),r.jsx("rect",{x:Le,y:Qe,width:He,height:be,rx:f,fill:oe[0]}),r.jsxs("text",{x:Le+He+6,y:Qe+be/2+4,className:De.axisLabel,textAnchor:"start",children:[Vo(ut),h]})]},Ve)})})}),j.visible&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(Te=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:Te.color}}),r.jsx("span",{className:De.tooltipSeries,children:Te.series}),r.jsxs("span",{className:De.tooltipValue,children:[Vo(Te.value),h]})]},Te.series))]})]})}return r.jsxs("div",{ref:M,className:se(De.root,_),...C,children:[r.jsx("div",{ref:R,className:De.svgWrap,children:r.jsxs("svg",{width:F,height:Y,viewBox:`0 0 ${F} ${Y}`,className:De.svg,onMouseMove:de,onMouseLeave:ie,children:[r.jsx("defs",{children:oe.flatMap((ce,me)=>[r.jsxs("linearGradient",{id:`${S}-fill-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`soft-${me}`),r.jsxs("linearGradient",{id:`${S}-fill-strong-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`strong-${me}`)])}),V.map(ce=>{const me=I(ce);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:me,x2:F-B,y2:me,className:De.gridLine}),r.jsxs("text",{x:0,y:me-6,className:De.axisLabel,textAnchor:"start",children:[Vo(ce),h]})]},ce)}),o.map((ce,me)=>{const be=z+me*L;if(i==="stacked"){let Fe=0;const Pe=e.map((He,pt)=>{const it=He.data[me]??0,Bt=it/W*ae,lt=I(Fe+it);return Fe+=it,{si:pt,value:it,barH:Bt,y:lt}}),Ie=be+(L-K)/2,Te=Pe.filter(He=>He.value>0),Ve=Te.length>0?Te[0].si:-1,Qe=Te.length>0?Te[Te.length-1]:null,ut=A??(Qe?oe[Qe.si]:"transparent");return r.jsxs("g",{children:[Pe.map(({si:He,value:pt,barH:it,y:Bt})=>{if(pt<=0)return null;if(k==="mono-scale"){const lt=He===Ve;return r.jsx("rect",{x:Ie,y:Bt,width:K,height:it,fill:lt?`url(#${S}-fill-strong-${He})`:oe[He]},`fill-${He}`)}return r.jsx("rect",{x:Ie,y:Bt,width:K,height:it,fill:`url(#${S}-fill-${He})`},`fill-${He}`)}),k==="mono-scale"?Qe&&r.jsx("line",{x1:Ie,x2:Ie+K,y1:Qe.y,y2:Qe.y,stroke:ut,strokeWidth:2,strokeLinecap:"butt"}):Pe.map(({si:He,value:pt,y:it})=>pt>0?r.jsx("line",{x1:Ie,x2:Ie+K,y1:it,y2:it,stroke:oe[He],strokeWidth:2,strokeLinecap:"butt"},`cap-${He}`):null)]},me)}const ve=e.length*K+(e.length-1)*q,Le=be+(L-ve)/2;return r.jsx("g",{children:e.map((Fe,Pe)=>{const Ie=Fe.data[me]??0;if(Ie<=0)return null;const Te=Ie/W*ae,Ve=Le+Pe*(K+q),Qe=I(Ie);return r.jsxs("g",{children:[r.jsx("rect",{x:Ve,y:Qe,width:K,height:Te,fill:`url(#${S}-fill-${Pe})`}),r.jsx("line",{x1:Ve,x2:Ve+K,y1:Qe,y2:Qe,stroke:oe[Pe],strokeWidth:2,strokeLinecap:"butt"})]},Pe)})},me)}),(()=>{const me=Math.max(1,Math.ceil(45/L)),be=o.length-1;return o.map((ve,Le)=>{const Fe=Le===0,Pe=Le===be;if(!(Fe||Pe)&&Le%me!==0)return null;const Te=Fe?z:Pe?F-B:z+L*(Le+.5),Ve=Fe?"start":Pe?"end":"middle";return r.jsx("text",{x:Te,y:Y-G+18,className:De.axisLabel,textAnchor:Ve,children:ve},`xl-${Le}`)})})()]})}),d&&e.length>1&&r.jsx("div",{className:De.legendWrap,children:e.map((ce,me)=>r.jsxs("div",{className:De.legendItem,children:[r.jsx("span",{className:De.legendDot,style:{background:oe[me]}}),r.jsx("span",{className:De.legendLabel,children:ce.label})]},ce.label))}),j.visible&&r.jsxs("div",{className:De.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:De.tooltipLabel,children:j.label}),j.items.map(ce=>r.jsxs("div",{className:De.tooltipRow,children:[r.jsx("span",{className:De.tooltipDot,style:{background:ce.color}}),r.jsx("span",{className:De.tooltipSeries,children:ce.series}),r.jsxs("span",{className:De.tooltipValue,children:[Vo(ce.value),h]})]},ce.series))]})]})});X_.displayName="BarChart";const J_="_root_1crij_5",eC="_svgWrap_1crij_13",tC="_svg_1crij_13",nC="_gridLine_1crij_23",rC="_axisLabelY_1crij_35 _axisLabel_1crij_28",oC="_axisLabelX_1crij_39 _axisLabel_1crij_28",aC="_legendWrap_1crij_51",iC="_tooltip_1crij_76",sC="_tooltipLabel_1crij_95",lC="_tooltipRow_1crij_105",cC="_tooltipDot_1crij_111",dC="_tooltipSeries_1crij_118",uC="_tooltipValue_1crij_125",hn={root:J_,svgWrap:eC,svg:tC,gridLine:nC,axisLabelY:rC,axisLabelX:oC,legendWrap:aC,tooltip:iC,tooltipLabel:sC,tooltipRow:lC,tooltipDot:cC,tooltipSeries:dC,tooltipValue:uC};function hC(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Cf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function pC(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,f]=e[s+1],g=(h-l)*o;i+=` C ${l+g} ${d}, ${h-g} ${f}, ${h} ${f}`}return i}const fC=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:g=5,className:x,...y},w)=>{const[k,A]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,C=v.useRef(null),[M,$]=v.useState(540);v.useEffect(()=>{const W=C.current;if(!W)return;const V=new ResizeObserver(L=>{var K;const q=(K=L[0])==null?void 0:K.contentRect.width;q>0&&$(Math.floor(q))});V.observe(W);const I=Math.floor(W.getBoundingClientRect().width);return I>0&&$(I),()=>V.disconnect()},[]);const S=44,j=20,O=20,R=M,N=i,T=R-S,z=N-j-O,B=`url(#${_}-stroke)`,G=W=>W.color??B,Z=e.flatMap(W=>W.data),F=hC(Math.max(...Z,1)),Y=Array.from({length:g+1},(W,V)=>F*(V/g)).reverse(),ee=W=>O+z-W/F*z,ae=W=>o.length>1?S+W/(o.length-1)*T:S+T/2,re=W=>W.map((V,I)=>[ae(I),ee(V)]),oe=()=>A(W=>({...W,visible:!1})),X=v.useCallback(W=>{const V=W.currentTarget.getBoundingClientRect(),L=W.clientX-V.left-S,q=T/Math.max(o.length-1,1),K=Math.round(L/q),ie=Math.max(0,Math.min(K,o.length-1)),de=e.map(H=>({color:H.color??h,series:H.label,value:H.data[ie]??0}));A({visible:!0,index:ie,x:W.clientX+12,y:W.clientY-8,label:o[ie],items:de})},[e,o,h,T,S]);return r.jsxs("div",{ref:w,className:se(hn.root,x),...y,children:[r.jsx("div",{ref:C,className:hn.svgWrap,children:r.jsxs("svg",{width:R,height:N,viewBox:`0 0 ${R} ${N}`,className:hn.svg,onMouseMove:X,onMouseLeave:oe,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:h})]}),r.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:h}),r.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${_}-clip`,children:r.jsx("rect",{x:S,y:O,width:T,height:z,rx:6,ry:6})})]}),Y.map(W=>{const V=ee(W);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:V,x2:R,y2:V,className:hn.gridLine}),r.jsxs("text",{x:0,y:V-6,className:hn.axisLabelY,textAnchor:"start",children:[Cf(W),f]})]},W)}),r.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((W,V)=>{const I=re(W.data),L=pC(I);return r.jsx("path",{d:L,fill:"none",stroke:G(W),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},V)})}),(()=>{const W=k.index>=0?k.index:0,V=ae(W),I=k.visible&&k.index>=0,L="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:I?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${V}px)`,transition:L},children:[r.jsx("line",{x1:0,x2:0,y1:O,y2:O+z,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((q,K)=>{const ie=q.data[W]??0,de=ee(ie),H=q.color??h;return r.jsx("g",{style:{transform:`translateY(${de}px)`,transition:L},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:H,filter:`url(#${_}-pin-shadow)`})},K)})]})})})(),(()=>{const V=o.length>1?T/(o.length-1):T,I=Math.max(1,Math.ceil(45/Math.max(V,1))),L=o.length-1;return o.map((q,K)=>{const ie=K===0,de=K===L;if(!(ie||de)&&K%I!==0)return null;const E=ie?S:de?R:ae(K),ne=ie?"start":de?"end":"middle";return r.jsx("text",{x:E,y:N-j+14,className:hn.axisLabelX,textAnchor:ne,children:q},q)})})()]})}),l&&e.length>0&&r.jsx("div",{className:hn.legendWrap,children:r.jsx(xg,{variant:"line",items:e.map(W=>({color:W.color??h,label:W.label}))})}),k.visible&&r.jsxs("div",{className:hn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:hn.tooltipLabel,children:k.label}),k.items.map(W=>r.jsxs("div",{className:hn.tooltipRow,children:[r.jsx("span",{className:hn.tooltipDot,style:{background:W.color}}),r.jsx("span",{className:hn.tooltipSeries,children:W.series}),r.jsxs("span",{className:hn.tooltipValue,children:[Cf(W.value),f]})]},W.series))]})]})});fC.displayName="LineChart";const mC="_root_3tq2n_5",gC="_chartWrap_3tq2n_14",vC="_svg_3tq2n_18",yC="_centerText_3tq2n_23",xC="_statLegend_3tq2n_31",wC="_statItem_3tq2n_37",bC="_statBar_3tq2n_44",kC="_statText_3tq2n_50",_C="_statValue_3tq2n_56",CC="_statLabel_3tq2n_65",jC="_listLegend_3tq2n_72",SC="_legendItem_3tq2n_79",NC="_legendDot_3tq2n_85",MC="_legendLabel_3tq2n_92",RC="_legendValue_3tq2n_99",LC="_tooltip_3tq2n_107",AC="_tooltipLabel_3tq2n_118",$C="_tooltipValue_3tq2n_124",Mt={root:mC,chartWrap:gC,svg:vC,centerText:yC,statLegend:xC,statItem:wC,statBar:bC,statText:kC,statValue:_C,statLabel:CC,listLegend:jC,legendItem:SC,legendDot:NC,legendLabel:MC,legendValue:RC,tooltip:LC,tooltipLabel:AC,tooltipValue:$C},jf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],TC=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((R,N)=>R.color??jf[N%jf.length]),A=e.reduce((R,N)=>R+N.value,0),_=i/2,C=i/2,M=i*.15,$=(i-M)/2-2,S=2*Math.PI*$;let j=-S/4;const O=e.map((R,N)=>{const z=(A>0?R.value/A:0)*S,B=`${z} ${S-z}`,G=-j;return j+=z,{dashArray:B,dashOffset:G,color:k[N],...R}});return r.jsxs("div",{ref:x,className:se(Mt.root,f),...g,children:[r.jsx("div",{className:Mt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Mt.svg,children:[r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:M}),O.map((R,N)=>r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:R.color,strokeWidth:M,strokeDasharray:R.dashArray,strokeDashoffset:R.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:T=>{const z=A>0?Math.round(R.value/A*100):0;w({visible:!0,x:T.clientX+12,y:T.clientY-8,label:R.label,value:`${z}${d}`})},onMouseLeave:()=>w(T=>({...T,visible:!1}))},N)),h&&o>0&&r.jsx("text",{x:_,y:C+6,textAnchor:"middle",className:Mt.centerText,children:h})]})}),s&&l==="stat"&&r.jsx("div",{className:Mt.statLegend,children:e.map((R,N)=>{const T=A>0?Math.round(R.value/A*100):0;return r.jsxs("div",{className:Mt.statItem,children:[r.jsx("span",{className:Mt.statBar,style:{background:k[N]}}),r.jsxs("div",{className:Mt.statText,children:[r.jsxs("span",{className:Mt.statValue,children:[T,d]}),r.jsx("span",{className:Mt.statLabel,children:R.label})]})]},R.label)})}),s&&l==="list"&&r.jsx("div",{className:Mt.listLegend,children:e.map((R,N)=>{const T=A>0?Math.round(R.value/A*100):0;return r.jsxs("div",{className:Mt.legendItem,children:[r.jsx("span",{className:Mt.legendDot,style:{background:k[N]}}),r.jsx("span",{className:Mt.legendLabel,children:R.label}),r.jsxs("span",{className:Mt.legendValue,children:[T,d]})]},R.label)})}),y.visible&&r.jsxs("div",{className:Mt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:Mt.tooltipLabel,children:y.label}),r.jsx("div",{className:Mt.tooltipValue,children:y.value})]})]})});TC.displayName="DonutChart";const IC="_root_bqpf6_5",EC="_svgWrap_bqpf6_10",PC="_svg_bqpf6_10",zC="_axisLabel_bqpf6_19",OC="_tooltip_bqpf6_25",Go={root:IC,svgWrap:EC,svg:PC,axisLabel:zC,tooltip:OC};function DC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const FC=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=DC,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[A,_]=v.useState(540);v.useEffect(()=>{const N=k.current;if(!N)return;const T=new ResizeObserver(B=>{var Z;const G=(Z=B[0])==null?void 0:Z.contentRect.width;G>0&&_(Math.floor(G))});T.observe(N);const z=Math.floor(N.getBoundingClientRect().width);return z>0&&_(z),()=>T.disconnect()},[]);const C=32,M=16,$=A,S=$-C-d,j=Math.max(4,(S-(i.length-1)*d)/i.length),O=o.length*(M+d)+d+24,R=new Map;return e.forEach(N=>R.set(`${N.row}__${N.col}`,N)),r.jsxs("div",{ref:x,className:se(Go.root,f),...g,children:[r.jsx("div",{ref:k,className:Go.svgWrap,children:r.jsxs("svg",{width:$,height:O,viewBox:`0 0 ${$} ${O}`,className:Go.svg,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:[i.map((N,T)=>{const z=C+d+T*(j+d)+j/2;return r.jsx("text",{x:z,y:12,className:Go.axisLabel,textAnchor:"middle",children:N},N)}),o.map((N,T)=>{const z=24+T*(M+d);return r.jsxs("g",{children:[r.jsx("text",{x:C-4,y:z+M/2+4,className:Go.axisLabel,textAnchor:"end",children:N}),i.map((B,G)=>{const Z=R.get(`${N}__${B}`),F=(Z==null?void 0:Z.value)??0,Y=s(F),ee=C+d+G*(j+d);return r.jsx("rect",{x:ee,y:z,width:j,height:M,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const re=(Z==null?void 0:Z.label)??`${N} / ${B}: ${Math.round(F*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:re})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},B)})]},N)})]})}),y.visible&&r.jsx("div",{className:Go.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});FC.displayName="HeatMap";const BC="_root_18572_6",WC="_gridWrap_18572_14",HC="_grid_18572_14",UC="_cell_18572_27",qC="_legend_18572_33",VC="_legendSquare_18572_43",GC="_tooltip_18572_49",Ar={root:BC,gridWrap:WC,grid:HC,cell:UC,legend:qC,legendSquare:VC,tooltip:GC},YC=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function KC(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const QC=v.forwardRef(({days:e,levelColors:o=YC,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[A,_]=v.useState({visible:!1,x:0,y:0,content:""}),C=f??Math.max(1,...e.map(j=>j.count)),M=[];for(let j=0;j<e.length;j+=7)M.push(e.slice(j,j+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${M.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},S=d?"100%":i;return r.jsxs("div",{ref:k,className:se(Ar.root,y),...w,children:[r.jsx("div",{className:Ar.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${C} on the busiest day`,className:Ar.grid,style:$,onMouseLeave:()=>_(j=>({...j,visible:!1})),children:M.map((j,O)=>Array.from({length:7},(R,N)=>{const T=j[N];if(!T)return r.jsx("span",{className:Ar.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${O}-${N}`);const z=KC(T.count,C),B=g?g(T,z):`${T.label??T.date}: ${T.count} activation${T.count===1?"":"s"}`;return r.jsx("span",{className:Ar.cell,style:{width:S,height:i,borderRadius:l,background:o[z]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:B}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${O}-${N}`)}))})}),h&&r.jsxs("div",{className:Ar.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>r.jsx("span",{className:Ar.legendSquare,style:{background:o[j],borderRadius:l}},j)),r.jsx("span",{children:"More"})]}),A.visible&&r.jsx("div",{className:Ar.tooltip,style:{left:A.x,top:A.y},children:A.content})]})});QC.displayName="ActivityHeatMap";const ZC="_root_14edh_5",XC="_track_14edh_17",JC="_segment_14edh_28",ej="_legend_14edh_49",tj="_legendRow_14edh_58",nj="_legendDot_14edh_68",rj="_legendLabel_14edh_74",oj="_legendValue_14edh_78",aj="_tooltip_14edh_84",ij="_tooltipLabel_14edh_100",sj="_tooltipValueRow_14edh_105",lj="_tooltipDot_14edh_114",Cn={root:ZC,track:XC,segment:JC,legend:ej,legendRow:tj,legendDot:nj,legendLabel:rj,legendValue:oj,tooltip:aj,tooltipLabel:ij,tooltipValueRow:sj,tooltipDot:lj},cj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Yo={r:140,g:79,b:226},Nd={r:68,g:108,b:255};function Sf(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(Yo.r+(Nd.r-Yo.r)*o),s=Math.round(Yo.g+(Nd.g-Yo.g)*o),l=Math.round(Yo.b+(Nd.b-Yo.b)*o);return`rgb(${i}, ${s}, ${l})`}const dj=v.forwardRef(({segments:e,colors:o=cj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((M,$)=>M+Math.max(0,$.value),0);let A=0;const _=e.map((M,$)=>{const S=Math.max(0,M.value),j=k>0?S/k*100:0,O=k>0?A/k*100:0;A+=S;const R=k>0?A/k*100:0,N=M.color??o[$%o.length],T=d?!0:M.emphasized??$===0;return{...M,pct:j,startPct:O,endPct:R,color:N,emphasized:T}}),C=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:x,className:se(Cn.root,f),...g,children:[r.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(M=>`${M.label} ${M.value}`).join(", ")}`,className:Cn.track,style:C,onMouseLeave:()=>w(M=>({...M,visible:!1})),children:_.map(M=>{const $=i?`linear-gradient(to right, ${Sf(M.startPct)}, ${Sf(M.endPct)})`:M.color;return r.jsx("span",{className:Cn.segment,"data-emphasized":M.emphasized||void 0,"data-ai":i||void 0,style:{width:`${M.pct}%`,background:$,"--ratio-hover-bg":M.color},onMouseMove:S=>w({visible:!0,x:S.clientX,y:S.clientY,label:M.label,value:M.value,color:M.color})},M.label)})}),l&&r.jsx("ul",{className:Cn.legend,children:_.map(M=>r.jsxs("li",{className:Cn.legendRow,children:[r.jsx("span",{className:Cn.legendDot,style:{background:M.color}}),r.jsx("span",{className:Cn.legendLabel,children:M.label}),r.jsx("span",{className:Cn.legendValue,children:M.value.toLocaleString("en-US")})]},M.label))}),y.visible&&r.jsxs("div",{className:Cn.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:Cn.tooltipLabel,children:y.label}),r.jsxs("span",{className:Cn.tooltipValueRow,children:[r.jsx("span",{className:Cn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});dj.displayName="RatioBar";const uj="_track_1wmly_6",hj="_fill_1wmly_12",Nf={track:uj,fill:hj},pj=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:g,className:x,style:y,...w},k)=>{const A=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${A}px
    )`,C=Math.max(0,Math.min(o,e)),M=o>0?C/o*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(M)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":C,className:se(Nf.track,x),style:{height:f,background:`${_}, ${s}`,...y},...w,children:r.jsx("div",{className:Nf.fill,style:{width:`${M}%`,background:`${_}, ${i}`}})})});pj.displayName="StripedBar";const fj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],mj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Mf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}Mf(fj),Mf(mj);var at="-ms-",ui="-moz-",Ze="-webkit-",wg="comm",xl="rule",Ku="decl",gj="@import",vj="@namespace",bg="@keyframes",yj="@layer",kg=Math.abs,Qu=String.fromCharCode,hu=Object.assign;function xj(e,o){return Ct(e,0)^45?(((o<<2^Ct(e,0))<<2^Ct(e,1))<<2^Ct(e,2))<<2^Ct(e,3):0}function _g(e){return e.trim()}function ir(e,o){return(e=o.exec(e))?e[0]:e}function Oe(e,o,i){return e.replace(o,i)}function Vs(e,o,i){return e.indexOf(o,i)}function Ct(e,o){return e.charCodeAt(o)|0}function mo(e,o,i){return e.slice(o,i)}function zn(e){return e.length}function Cg(e){return e.length}function si(e,o){return o.push(e),e}function wj(e,o){return e.map(o).join("")}function Rf(e,o){return e.filter(function(i){return!ir(i,o)})}var wl=1,aa=1,jg=0,Nn=0,bt=0,fa="";function bl(e,o,i,s,l,d,h,f){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:wl,column:aa,length:h,return:"",siblings:f}}function Tr(e,o){return hu(bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function Ko(e){for(;e.root;)e=Tr(e.root,{children:[e]});si(e,e.siblings)}function bj(){return bt}function kj(){return bt=Nn>0?Ct(fa,--Nn):0,aa--,bt===10&&(aa=1,wl--),bt}function Fn(){return bt=Nn<jg?Ct(fa,Nn++):0,aa++,bt===10&&(aa=1,wl++),bt}function Pr(){return Ct(fa,Nn)}function Gs(){return Nn}function kl(e,o){return mo(fa,e,o)}function mi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _j(e){return wl=aa=1,jg=zn(fa=e),Nn=0,[]}function Cj(e){return fa="",e}function Md(e){return _g(kl(Nn-1,pu(e===91?e+2:e===40?e+1:e)))}function jj(e){for(;(bt=Pr())&&bt<33;)Fn();return mi(e)>2||mi(bt)>3?"":" "}function Sj(e,o){for(;--o&&Fn()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return kl(e,Gs()+(o<6&&Pr()==32&&Fn()==32))}function pu(e){for(;Fn();)switch(bt){case e:return Nn;case 34:case 39:e!==34&&e!==39&&pu(bt);break;case 40:e===41&&pu(e);break;case 92:Fn();break}return Nn}function Nj(e,o){for(;Fn()&&e+bt!==57;)if(e+bt===84&&Pr()===47)break;return"/*"+kl(o,Nn-1)+"*"+Qu(e===47?e:Fn())}function Mj(e){for(;!mi(Pr());)Fn();return kl(e,Nn)}function Rj(e){return Cj(Ys("",null,null,null,[""],e=_j(e),0,[0],e))}function Ys(e,o,i,s,l,d,h,f,g){for(var x=0,y=0,w=h,k=0,A=0,_=0,C=1,M=1,$=1,S=0,j="",O=l,R=d,N=s,T=j;M;)switch(_=S,S=Fn()){case 40:if(_!=108&&Ct(T,w-1)==58){Vs(T+=Oe(Md(S),"&","&\f"),"&\f",kg(x?f[x-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:T+=Md(S);break;case 9:case 10:case 13:case 32:T+=jj(_);break;case 92:T+=Sj(Gs()-1,7);continue;case 47:switch(Pr()){case 42:case 47:si(Lj(Nj(Fn(),Gs()),o,i,g),g),(mi(_||1)==5||mi(Pr()||1)==5)&&zn(T)&&mo(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*C:f[x++]=zn(T)*$;case 125*C:case 59:case 0:switch(S){case 0:case 125:M=0;case 59+y:$==-1&&(T=Oe(T,/\f/g,"")),A>0&&(zn(T)-w||C===0&&_===47)&&si(A>32?Af(T+";",s,i,w-1,g):Af(Oe(T," ","")+";",s,i,w-2,g),g);break;case 59:T+=";";default:if(si(N=Lf(T,o,i,x,y,l,f,j,O=[],R=[],w,d),d),S===123)if(y===0)Ys(T,o,N,N,O,d,w,f,R);else{switch(k){case 99:if(Ct(T,3)===110)break;case 108:if(Ct(T,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Ys(e,N,N,s&&si(Lf(e,N,N,0,0,l,f,j,l,O=[],w,R),R),l,R,w,f,s?O:R):Ys(T,N,N,N,[""],R,0,f,R)}}x=y=A=0,C=$=1,j=T="",w=h;break;case 58:w=1+zn(T),A=_;default:if(C<1){if(S==123)--C;else if(S==125&&C++==0&&kj()==125)continue}switch(T+=Qu(S),S*C){case 38:$=y>0?1:(T+="\f",-1);break;case 44:f[x++]=(zn(T)-1)*$,$=1;break;case 64:Pr()===45&&(T+=Md(Fn())),k=Pr(),y=w=zn(j=T+=Mj(Gs())),S++;break;case 45:_===45&&zn(T)==2&&(C=0)}}return d}function Lf(e,o,i,s,l,d,h,f,g,x,y,w){for(var k=l-1,A=l===0?d:[""],_=Cg(A),C=0,M=0,$=0;C<s;++C)for(var S=0,j=mo(e,k+1,k=kg(M=h[C])),O=e;S<_;++S)(O=_g(M>0?A[S]+" "+j:Oe(j,/&\f/g,A[S])))&&(g[$++]=O);return bl(e,o,i,l===0?xl:f,g,x,y,w)}function Lj(e,o,i,s){return bl(e,o,i,wg,Qu(bj()),mo(e,2,-2),0,s)}function Af(e,o,i,s,l){return bl(e,o,i,Ku,mo(e,0,s),mo(e,s+1,-1),s,l)}function Sg(e,o,i){switch(xj(e,o)){case 5103:return Ze+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ze+e+e;case 4855:return Ze+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ui+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+e+ui+e+at+e+e;case 5936:switch(Ct(e,o+11)){case 114:return Ze+e+at+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ze+e+at+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ze+e+at+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ze+e+at+e+e;case 6165:return Ze+e+at+"flex-"+e+e;case 5187:return Ze+e+Oe(e,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return Ze+e+at+"flex-item-"+Oe(e,/flex-|-self/g,"")+(ir(e,/flex-|baseline/)?"":at+"grid-row-"+Oe(e,/flex-|-self/g,""))+e;case 4675:return Ze+e+at+"flex-line-pack"+Oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ze+e+at+Oe(e,"shrink","negative")+e;case 5292:return Ze+e+at+Oe(e,"basis","preferred-size")+e;case 6060:return Ze+"box-"+Oe(e,"-grow","")+Ze+e+at+Oe(e,"grow","positive")+e;case 4554:return Ze+Oe(e,/([^-])(transform)/g,"$1"+Ze+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+at+"flex-pack:$3"),/space-between/,"justify")+Ze+e+e;case 4200:if(!ir(e,/flex-|baseline/))return at+"grid-column-align"+mo(e,o)+e;break;case 2592:case 3360:return at+Oe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,ir(s.props,/grid-\w+-end/)})?~Vs(e+(i=i[o].value),"span",0)?e:at+Oe(e,"-start","")+e+at+"grid-row-span:"+(~Vs(i,"span",0)?ir(i,/\d+/):+ir(i,/\d+/)-+ir(e,/\d+/))+";":at+Oe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return ir(s.props,/grid-\w+-start/)})?e:at+Oe(Oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Ze+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(e)-1-o>6)switch(Ct(e,o+1)){case 109:if(Ct(e,o+4)!==45)break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+ui+(Ct(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~Vs(e,"stretch",0)?Sg(Oe(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return Oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,g,x){return at+l+":"+d+x+(h?at+l+"-span:"+(f?g:+g-+d)+x:"")+e});case 4949:if(Ct(e,o+6)===121)return Oe(e,":",":"+Ze)+e;break;case 6444:switch(Ct(e,Ct(e,14)===45?18:11)){case 120:return Oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(Ct(e,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+at+"$2box$3")+e;case 100:return Oe(e,":",":"+at)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(e,"scroll-","scroll-snap-")+e}return e}function rl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function Aj(e,o,i,s){switch(e.type){case yj:if(e.children.length)break;case gj:case vj:case Ku:return e.return=e.return||e.value;case wg:return"";case bg:return e.return=e.value+"{"+rl(e.children,s)+"}";case xl:if(!zn(e.value=e.props.join(",")))return""}return zn(i=rl(e.children,s))?e.return=e.value+"{"+i+"}":""}function $j(e){var o=Cg(e);return function(i,s,l,d){for(var h="",f=0;f<o;f++)h+=e[f](i,s,l,d)||"";return h}}function Tj(e){return function(o){o.root||(o=o.return)&&e(o)}}function Ij(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case Ku:e.return=Sg(e.value,e.length,i);return;case bg:return rl([Tr(e,{value:Oe(e.value,"@","@"+Ze)})],s);case xl:if(e.length)return wj(i=e.props,function(l){switch(ir(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ko(Tr(e,{props:[Oe(l,/:(read-\w+)/,":"+ui+"$1")]})),Ko(Tr(e,{props:[l]})),hu(e,{props:Rf(i,s)});break;case"::placeholder":Ko(Tr(e,{props:[Oe(l,/:(plac\w+)/,":"+Ze+"input-$1")]})),Ko(Tr(e,{props:[Oe(l,/:(plac\w+)/,":"+ui+"$1")]})),Ko(Tr(e,{props:[Oe(l,/:(plac\w+)/,at+"input-$1")]})),Ko(Tr(e,{props:[l]})),hu(e,{props:Rf(i,s)});break}return""})}}var Jo={},Rd,Ld;const ia=typeof process<"u"&&Jo!==void 0&&(Jo.REACT_APP_SC_ATTR||Jo.SC_ATTR)||"data-styled",Ng="active",Mg="data-styled-version",_l="6.4.2",Zu=`/*!sc*/
`,hi=typeof window<"u"&&typeof document<"u";function $f(e){if(typeof process<"u"&&Jo!==void 0){const o=Jo[e];if(o!==void 0&&o!=="")return o!=="false"}}const Ej=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ld=(Rd=$f("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Rd!==void 0?Rd:$f("SC_DISABLE_SPEEDY"))!==null&&Ld!==void 0?Ld:typeof process<"u"&&Jo!==void 0&&!1),Rg="sc-keyframes-",Pj={};function Ci(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let Ks=new Map,ol=new Map,Qs=1;const li=e=>{if(Ks.has(e))return Ks.get(e);for(;ol.has(Qs);)Qs++;const o=Qs++;return Ks.set(e,o),ol.set(o,e),o},zj=e=>ol.get(e),Oj=(e,o)=>{Qs=o+1,Ks.set(e,o),ol.set(o,e)},Xu=Object.freeze([]),sa=Object.freeze({});function Lg(e,o,i=sa){return e.theme!==i.theme&&e.theme||o||i.theme}const Dj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fj=/(^-|-$)/g;function Ag(e){return e.replace(Dj,"-").replace(Fj,"")}const Bj=/(a)(d)/gi,Tf=e=>String.fromCharCode(e+(e>25?39:97));function Ju(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Tf(o%52)+i;return(Tf(o%52)+i).replace(Bj,"$1-$2")}const fu=5381,uo=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},$g=e=>uo(fu,e);function eh(e){return Ju($g(e)>>>0)}function Wj(e){return e.displayName||e.name||"Component"}function mu(e){return typeof e=="string"&&!0}function Hj(e){return mu(e)?`styled.${e}`:`Styled(${Wj(e)})`}const Tg=Symbol.for("react.memo"),Uj=Symbol.for("react.forward_ref"),qj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Vj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ig={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gj={[Uj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Tg]:Ig};function If(e){return("type"in(o=e)&&o.type.$$typeof)===Tg?Ig:"$$typeof"in e?Gj[e.$$typeof]:qj;var o}const Yj=Object.defineProperty,Kj=Object.getOwnPropertyNames,Qj=Object.getOwnPropertySymbols,Zj=Object.getOwnPropertyDescriptor,Xj=Object.getPrototypeOf,Jj=Object.prototype;function Eg(e,o,i){if(typeof o!="string"){const s=Xj(o);s&&s!==Jj&&Eg(e,s,i);const l=Kj(o).concat(Qj(o)),d=If(e),h=If(o);for(let f=0;f<l.length;++f){const g=l[f];if(!(g in Vj||i&&i[g]||h&&g in h||d&&g in d)){const x=Zj(o,g);try{Yj(e,g,x)}catch{}}}}return e}function ji(e){return typeof e=="function"}const eS=Symbol.for("react.forward_ref");function th(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===eS&&"styledComponentId"in e}function ci(e,o){return e&&o?e+" "+o:e||o||""}function al(e,o){return e.join("")}function gi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gu(e,o,i=!1){if(!i&&!gi(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=gu(e[s],o[s]);else if(gi(o))for(const s in o)e[s]=gu(e[s],o[s]);return e}function nh(e,o){Object.defineProperty(e,"toString",{value:o})}const tS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Ci(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+Zu;return o}},nS=`style[${ia}][${Mg}="${_l}"]`,rS=new RegExp(`^${ia}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ef=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,vu=e=>{if(!e)return document;if(Ef(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Ef(o))return o}return document},oS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},aS=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(Zu),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const g=f.match(rS);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(Oj(y,x),oS(e,y,g[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(f)}},Ad=e=>{const o=vu(e.options.target).querySelectorAll(nS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(ia)!==Ng&&(aS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let ti=!1;function iS(){if(ti!==!1)return ti;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ti=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return ti=o.getAttribute("content")||void 0}return ti=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Pg=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${ia}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(ia,Ng),l.setAttribute(Mg,_l);const f=o||iS();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},sS=class{constructor(e,o){this.element=Pg(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw Ci(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},lS=class{constructor(e,o){this.element=Pg(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Pf=hi;const cS={isServer:!hi,useCSSOMInjection:!Ej};class Si{static registerId(o){return li(o)}constructor(o=sa,i={},s){this.options=Object.assign(Object.assign({},cS),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&hi&&Pf&&(Pf=!1,Ad(this)),nh(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let g=0;g<h;g++){const x=zj(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=ia+".g"+g+'[id="'+x+'"]';let A="";for(const _ of y)_.length>0&&(A+=_+",");f+=w+k+'{content:"'+A+'"}'+Zu}return f})(this))}rehydrate(){!this.server&&hi&&Ad(this)}reconstructWithOptions(o,i=!0){const s=new Si(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&hi&&o.target!==this.options.target&&vu(this.options.target)!==vu(o.target)&&Ad(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new sS(s,l):new lS(s,l))(this.options),new tS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){li(o),o.startsWith(Rg)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(li(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(li(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const zg=new WeakSet,dS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uS(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in dS||e.startsWith("--")?String(o).trim():o+"px"}const so=47;function zf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const Og=Symbol.for("sc-keyframes");function hS(e){return typeof e=="object"&&e!==null&&Og in e}function Dg(e){return ji(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Fg=e=>e==null||e===!1||e==="",pS=Symbol.for("react.client.reference");function Of(e){return e.$$typeof===pS}function Bg(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!Fg(s)&&(Array.isArray(s)&&zg.has(s)||ji(s)?o.push(zf(i)+":",s,";"):gi(s)?(o.push(i+" {"),Bg(s,o),o.push("}")):o.push(zf(i)+": "+uS(i,s)+";"))}}function Dr(e,o,i,s,l=[]){if(Fg(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Of(e))return l;if(Dg(e)&&o){const h=e(o);return Dr(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)Dr(e[h],o,i,s,l);return l}return th(e)?(l.push(`.${e.styledComponentId}`),l):hS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Of(e)?l:gi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Bg(e,l),l):(l.push(e.toString()),l)}const fS=$g(_l);class mS{constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=uo(fS,i),this.baseStyle=s,Si.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(Dg(f)){const g=f(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=al(Dr(g,o,i,s)))}else d+=al(Dr(f,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=Ju(uo(uo(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const g=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,g)}l=ci(l,f)}}return l}}const gS=/&/g;function Wg(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function $d(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let g=0;g<o;g++){const x=e.charCodeAt(g);if(d!==0||h||x!==so||e.charCodeAt(g+1)!==42)if(h)x===42&&e.charCodeAt(g+1)===so&&(h=!1,g++);else if(x!==34&&x!==39||Wg(e,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){f=!0;let y=g+1;for(;y<o;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<o&&e.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return f||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function Hg(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let g=0;g<h.length;g++)f[g]=i+h[g];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&Hg(d.children,o)}return e}function vS({options:e=sa,plugins:o=Xu}=sa){let i,s,l;const d=(k,A,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===xl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(gS,s).replace(l,d))}),e.prefix&&h.push(Ij),h.push(Aj);let f=[];const g=$j(h.concat(Tj(k=>f.push(k)))),x=(k,A="",_="",C="&")=>{i=C,s=A,l=void 0;const M=(function(S){const j=S.indexOf("//")!==-1,O=S.indexOf("}")!==-1;if(!j&&!O)return S;if(!j)return $d(S);const R=S.length;let N="",T=0,z=0,B=0,G=0,Z=0,F=!1;for(;z<R;){const Y=S.charCodeAt(z);if(Y!==34&&Y!==39||Wg(S,z))if(B===0)if(Y===so&&z+1<R&&S.charCodeAt(z+1)===42){for(z+=2;z+1<R&&(S.charCodeAt(z)!==42||S.charCodeAt(z+1)!==so);)z++;z+=2}else if(Y!==40)if(Y!==41)if(G>0)z++;else if(Y===42&&z+1<R&&S.charCodeAt(z+1)===so)N+=S.substring(T,z),z+=2,T=z,F=!0;else if(Y===so&&z+1<R&&S.charCodeAt(z+1)===so){for(N+=S.substring(T,z);z<R&&S.charCodeAt(z)!==10;)z++;T=z,F=!0}else Y===123?Z++:Y===125&&Z--,z++;else G>0&&G--,z++;else G++,z++;else z++;else B===0?B=Y:B===Y&&(B=0),z++}return F?(T<R&&(N+=S.substring(T)),Z===0?N:$d(N)):Z===0?S:$d(S)})(k);let $=Rj(_||A?_+" "+A+" { "+M+" }":M);return e.namespace&&($=Hg($,e.namespace)),f=[],rl($,g),f},y=e;let w=fu;for(let k=0;k<o.length;k++)o[k].name||Ci(15),w=uo(w,o[k].name);return y!=null&&y.namespace&&(w=uo(w,y.namespace)),y!=null&&y.prefix&&(w=uo(w,"p")),x.hash=w!==fu?w.toString():"",x}const yS=new Si,yu=vS(),Ug=rn.createContext({shouldForwardProp:void 0,styleSheet:yS,stylis:yu,stylisPlugins:void 0});Ug.Consumer;function qg(){return rn.useContext(Ug)}const rh=rn.createContext(void 0);rh.Consumer;const Df=Object.prototype.hasOwnProperty,Td={};function xS(e,o){const i=typeof e!="string"?"sc":Ag(e);Td[i]=(Td[i]||0)+1;const s=i+"-"+eh(_l+i+Td[i]);return o?o+"-"+s:s}function wS(e,o,i){const s=th(e),l=e,d=!mu(e),{attrs:h=Xu,componentId:f=xS(o.displayName,o.parentComponentId),displayName:g=Hj(e)}=o,x=o.displayName&&o.componentId?Ag(o.displayName)+"-"+o.componentId:o.componentId||f,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(o.shouldForwardProp){const M=o.shouldForwardProp;w=($,S)=>C($,S)&&M($,S)}else w=C}const k=new mS(i,x,s?l.componentStyle:void 0);function A(C,M){return(function($,S,j){const{attrs:O,componentStyle:R,defaultProps:N,foldedComponentIds:T,styledComponentId:z,target:B}=$,G=rn.useContext(rh),Z=qg(),F=$.shouldForwardProp||Z.shouldForwardProp,Y=Lg(S,G,N)||sa;let ee,ae;{const W=rn.useRef(null),V=W.current;if(V!==null&&V[1]===Y&&V[2]===Z.styleSheet&&V[3]===Z.stylis&&V[7]===R&&(function(I,L,q){const K=I,ie=L;let de=0;for(const H in ie)if(Df.call(ie,H)&&(de++,K[H]!==ie[H]))return!1;return de===q})(V[0],S,V[4]))ee=V[5],ae=V[6];else{ee=(function(L,q,K){const ie=Object.assign(Object.assign({},q),{className:void 0,theme:K}),de=L.length>1;for(let H=0;H<L.length;H++){const E=L[H],ne=ji(E)?E(de?Object.assign({},ie):ie):E;for(const pe in ne)pe==="className"?ie.className=ci(ie.className,ne[pe]):pe==="style"?ie.style=Object.assign(Object.assign({},ie.style),ne[pe]):pe in q&&q[pe]===void 0||(ie[pe]=ne[pe])}return"className"in q&&typeof q.className=="string"&&(ie.className=ci(ie.className,q.className)),ie})(O,S,Y),ae=(function(L,q,K,ie){return L.generateAndInjectStyles(q,K,ie)})(R,ee,Z.styleSheet,Z.stylis);let I=0;for(const L in S)Df.call(S,L)&&I++;W.current=[S,Y,Z.styleSheet,Z.stylis,I,ee,ae,R]}}const re=ee.as||B,oe=(function(W,V,I,L){const q={};for(const K in W)W[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&W.theme===I||(K==="forwardedAs"?q.as=W.forwardedAs:L&&!L(K,V)||(q[K]=W[K]));return q})(ee,re,Y,F);let X=ci(T,z);return ae&&(X+=" "+ae),ee.className&&(X+=" "+ee.className),oe[mu(re)&&re.includes("-")?"class":"className"]=X,j&&(oe.ref=j),v.createElement(re,oe)})(_,C,M)}A.displayName=g;let _=rn.forwardRef(A);return _.attrs=y,_.componentStyle=k,_.displayName=g,_.shouldForwardProp=w,_.foldedComponentIds=s?ci(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=x,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(M,...$){for(const S of $)gu(M,S,!0);return M})({},l.defaultProps,C):C}}),nh(_,()=>`.${_.styledComponentId}`),d&&Eg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var bS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ff(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const Bf=e=>(zg.add(e),e);function Ye(e,...o){if(ji(e)||gi(e))return Bf(Dr(Ff(Xu,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?Dr(i):Bf(Dr(Ff(i,o)))}function xu(e,o,i=sa){if(!o)throw Ci(1,o);const s=(l,...d)=>e(o,i,Ye(l,...d));return s.attrs=l=>xu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>xu(e,o,Object.assign(Object.assign({},i),l)),s}const Vg=e=>xu(wS,e),m=Vg;bS.forEach(e=>{m[e]=Vg(e)});class kS{constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(ji(d)&&!th(d))return!1}return!0})(o),Si.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const f=this.computeRules(o,i,s,l);s.insertRules(d,f.name,f.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const f=h.rules,g=this.instanceRules.get(o).rules;if(f.length===g.length){let x=!0;for(let y=0;y<f.length;y++)if(f[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=al(Dr(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function _S(e,...o){const i=Ye(e,...o),s=`sc-global-${eh(JSON.stringify(i))}`,l=new kS(i,s),d=f=>{const g=qg(),x=rn.useContext(rh);let y;{const w=rn.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,f,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,f,g.styleSheet,x,g.stylis,l],k=rn.useRef(l);rn.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,f,g.styleSheet,x,g.stylis))},w),rn.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(f,g,x,y,w){if(l.isStatic)l.renderStyles(f,Pj,x,w);else{const k=Object.assign(Object.assign({},g),{theme:Lg(g,y,d.defaultProps)});l.renderStyles(f,k,x,w)}}return rn.memo(d)}var Gg;class CS{constructor(o,i){this[Gg]=!0,this.inject=(s,l=yu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=Rg+o,this.rules=i,li(this.id),nh(this,()=>{throw Ci(12,String(this.name))})}getName(o=yu){return o.hash?this.name+Ju(+o.hash>>>0):this.name}}function Se(e,...o){const i=al(Ye(e,...o)),s=eh(i);return new CS(s,i)}Gg=Og;const Yg=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"]}],jS=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function SS(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function NS(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%Yg.length}function MS(e){const o=SS(e);let i=-1,s=0;return jS.forEach((l,d)=>{const h=l.reduce((f,g)=>o.includes(g)?f+1:f,0);h>s&&(s=h,i=d)}),Yg[i>=0?i:NS(o)]}const At=(e,o,i)=>Math.max(o,Math.min(i,e)),lr=e=>(e=At(e,0,1),e*e*(3-2*e)),Fr=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function en(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function wu(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function Wf(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return wu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return wu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function RS(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function LS(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function AS(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const ao=["234,54,38","246,112,44","252,172,54","255,212,76"],$S="176,58,32",TS="198,158,52";function sr(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function Br(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),y=e.size<24,w=At(e.alert??0,0,1),k=(S,j)=>S+(j-S)*w,A=.85+.15*Math.sin(o*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const S=s.createRadialGradient(h,f,0,h,f,x*3);S.addColorStop(0,"rgba("+i.core+",0.55)"),S.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const S=x*k(3.2,3),j=s.createRadialGradient(h,f,0,h,f,S);j.addColorStop(0,"rgba("+sr(i.core,ao[1],w)+","+k(.34,.85*A)+")"),j.addColorStop(.5,"rgba("+sr(i.core,ao[2],w)+","+k(.13,.42*A)+")"),j.addColorStop(1,"rgba("+sr(i.core,ao[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,f,S,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,C=Math.max(.8,x*k(1,1.5)),M=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(h-M,f-M,0,h,f,C);$.addColorStop(0,"rgba("+sr(i.core,ao[0],w)+","+k(_,1)+")"),$.addColorStop(.5,"rgba("+sr(i.core,ao[1],w)+","+k(_,1)+")"),$.addColorStop(.82,"rgba("+sr(i.core,ao[2],w)+","+k(_,.97)+")"),$.addColorStop(1,"rgba("+sr(i.core,ao[3],w)+","+k(_,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(h,f,C,0,6.2832),s.fill(),s.restore()}function Kg(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=o*(x?.5:.16),k=.42,A=Math.cos(k),_=Math.sin(k),C=Math.cos(w),M=Math.sin(w),$=g*.96,S=(B,G,Z)=>{const F=B*C+Z*M,Y=-B*M+Z*C,ee=G,ae=ee*A-Y*_,oe=(ee*_+Y*A+1)/2,X=.82+.18*oe;return{x:h+F*$*X,y:f+ae*$*X,d:oe}},j=(B,G,Z)=>{const F=Math.cos(B),Y=Math.sin(B)*Math.cos(G),ee=Math.sin(B)*Math.sin(G);return[F*Math.cos(Z)+ee*Math.sin(Z),Y,-F*Math.sin(Z)+ee*Math.cos(Z)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const O=e.size>=24?64:40,R=x?.9:.3,N=O,T=5.6,z=[];for(let B=0;B<y.length;B++){const G=y[B][0],Z=y[B][1],F=ae=>{const re=j(ae,G,Z);return S(re[0],re[1],re[2])},Y=B%2?1:-1,ee=B*2+Y*o*R;z.push({ptOf:F,head:ee,dir:Y,hp:F(ee)})}z.sort((B,G)=>B.hp.d-G.hp.d);for(const B of z){const G=Math.max(1.2,g*.05)*(.75+.35*B.hp.d),Z=.66*(.45+.55*B.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let F=B.ptOf(B.head);for(let ae=1;ae<=N;ae++){const re=ae/N,oe=1-re,X=Z*oe*oe,W=B.ptOf(B.head-B.dir*re*T);X>.004&&(s.strokeStyle="rgba("+i.dot+","+X+")",s.beginPath(),s.moveTo(F.x,F.y),s.lineTo(W.x,W.y),s.stroke()),F=W}s.restore();const Y=Math.max(.9,g*.062*Fr(e.size)*(.65+.5*B.hp.d)),ee=.45+.55*B.hp.d;if(i.glow){const ae=s.createRadialGradient(B.hp.x,B.hp.y,0,B.hp.x,B.hp.y,Y*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(B.hp.x,B.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(B.hp.x,B.hp.y,Y,0,6.2832),s.fill()}Br(e,o,i),s.restore()}function IS(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[g*.92],w=y.length,k=1,A=x?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<w;C++){const M=y[C],$=C%2?1:-1,S=6.2832/k,j=Math.min(5.6,S*.92);for(let O=0;O<k;O++){const R=C*2+$*o*A+O*S,N=h+Math.cos(R)*M,T=f+Math.sin(R)*M;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let z=N,B=T;for(let Z=1;Z<=_;Z++){const F=Z/_,Y=.62*(1-F)*(1-F),ee=R-$*F*j,ae=h+Math.cos(ee)*M,re=f+Math.sin(ee)*M;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(z,B),s.lineTo(ae,re),s.stroke()),z=ae,B=re}s.restore();const G=Math.max(.9,g*.062*Fr(e.size));if(i.glow){const Z=s.createRadialGradient(N,T,0,N,T,G*4.5);Z.addColorStop(0,"rgba("+i.accent+",0.3)"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(N,T,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(N,T,G,0,6.2832),s.fill()}}Br(e,o,i),s.restore()}function Hf(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=At(e.alert??0,0,1),k=x*.82,A=(W,V)=>sr(i.dot,sr($S,TS,At(Math.hypot(W-f,V-g)/k,0,1)),w),_=e.size>=120,C=_?22:e.size>=32?10:e.size>=20?7:5,M=y?o*.55:o*.22,$=Math.cos(M),S=Math.sin(M),j=.42,O=Math.cos(j),R=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const W=s.createRadialGradient(f,g,0,f,g,x*1.02);W.addColorStop(0,"rgba("+i.accent+",0.10)"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(f,g,x*1.02,0,6.2832),s.fill()}const N=[];for(let W=0;W<C;W++){const V=1-(W+.5)/C*2,I=Math.sqrt(Math.max(0,1-V*V)),L=W*2.39996,q=Math.cos(L)*I,K=V,ie=Math.sin(L)*I,de=q*$+ie*S,H=-q*S+ie*$,E=K*O-H*R,ne=K*R+H*O,pe=(ne+1)/2,ce=.82+.18*pe;N.push({x:f+de*k*ce,y:g+E*k*ce,d:pe,k:W,vec:[de,E,ne]})}N.sort((W,V)=>W.d-V.d);const T=W=>{const V=(W[2]+1)/2,I=.82+.18*V;return{x:f+W[0]*k*I,y:g+W[1]*k*I,d:V}},z=(W,V,I)=>{let L=W[0]*V[0]+W[1]*V[1]+W[2]*V[2];L=At(L,-1,1);const q=Math.acos(L);if(q<.001)return[W[0],W[1],W[2]];const K=Math.sin(q),ie=Math.sin((1-I)*q)/K,de=Math.sin(I*q)/K;return[W[0]*ie+V[0]*de,W[1]*ie+V[1]*de,W[2]*ie+V[2]*de]},B={};for(const W of N)B[W.k]=W;const Z=o*(y?1.4:.5),F=Math.floor(Z),Y=Z-F,ee=5,ae=12;s.lineCap="round",s.lineJoin="round";const re=[1.7,9.3,21.5,34.8,48.2],oe=At(Math.round(e.streamCount??(_?5:4)),0,re.length),X=re.slice(0,oe).map(W=>({seed:W}));for(const W of X){const V=L=>{const q=Math.sin(L*12.9898+W.seed)*43758.5453;return Math.floor((q-Math.floor(q))*C)},I=L=>{let q=V(L);return q===V(L-1)&&(q=(q+1)%C),B[q]};for(let L=ee-1;L>=0;L--){const q=F-L;if(q<0)continue;const K=I(q),ie=I(q+1);if(!K||!ie||K===ie)continue;const de=L===0?Y:1,H=T(z(K.vec,ie.vec,de)),E=(K.d+H.d)/2,ne=L===0?1:At(1-(L-1+Y)/(ee-1),0,1),pe=(i.glow?.6:.72)*ne*(.4+.6*E);if(pe<.02)continue;const ce=s.createLinearGradient(K.x,K.y,H.x,H.y);ce.addColorStop(0,"rgba("+A(K.x,K.y)+",0)"),ce.addColorStop(1,"rgba("+A(H.x,H.y)+","+pe+")"),s.strokeStyle=ce,s.lineWidth=(_?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*E),s.beginPath();for(let me=0;me<=ae;me++){const be=T(z(K.vec,ie.vec,de*(me/ae)));me===0?s.moveTo(be.x,be.y):s.lineTo(be.x,be.y)}s.stroke()}}for(const W of N){const V=.5+.5*Math.sin(o*2-W.k*.9),I=(.18+.82*W.d)*(.62+.38*V),L=_?Math.max(.5,(.9+.9*W.d)*h*(.85+.15*V)):x*.058*Fr(e.size)*(.6+.5*W.d);if(i.glow){const q=L*4,K=s.createRadialGradient(W.x,W.y,0,W.x,W.y,q);K.addColorStop(0,"rgba("+i.accent+","+.24*I+")"),K.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=K,s.beginPath(),s.arc(W.x,W.y,q,0,6.2832),s.fill()}s.fillStyle="rgba("+A(W.x,W.y)+","+(.32+.68*I)+")",s.beginPath(),s.arc(W.x,W.y,Math.max(.9,L),0,6.2832),s.fill()}_&&oh(e,o,i,A),Br(e,o,i),s.restore()}function oh(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let A=0;A<46;A++){const _=en(A*5.1)<.5?-1:1,C=en(A*1.7)*6.2832+o*(.3+en(A*3.1)*.6)*_*k,M=y*(.04+.05*en(A*4.7))*Math.sin(o*(.8+en(A*6)*1)+en(A*7)*6.28),$=y*(.5+en(A*2.3)*.5)+M,S=g+Math.cos(C)*$,j=x+Math.sin(C)*$,O=.3+.7*(.5+.5*Math.sin(o*(1.4+en(A)*2)+en(A*2)*6.28)),R=Math.max(.5,(.4+en(A*8)*1)*f*(.55+.6*O));if(i.glow){const N=R*6,T=l.createRadialGradient(S,j,0,S,j,N);T.addColorStop(0,"rgba("+i.accent+","+O*.18+")"),T.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=T,l.beginPath(),l.arc(S,j,N,0,6.2832),l.fill()}l.fillStyle="rgba("+s(S,j)+","+O*(i.glow?.8:.42)+")",l.beginPath(),l.arc(S,j,R,0,6.2832),l.fill()}}function ES(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,f=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,A=x*.12,_=lr(.5+.5*Math.sin(o*(y?1:.55))),C=y?.34+.66*_:.5+.12*_,M=Math.max(1*h,x*.052),$=-o*(y?.5:.16),S=Math.cos($),j=Math.sin($),O=.42,R=Math.cos(O),N=Math.sin(O);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const T=x*(.52+.44*C),z=Math.max(k+M,T-A),B=[];for(let G=0;G<w;G++){const Z=1-(G+.5)/w*2,F=Math.sqrt(Math.max(0,1-Z*Z)),Y=G*2.39996,ee=Math.cos(Y)*F,ae=Z,re=Math.sin(Y)*F,oe=ee*S+re*j,X=-ee*j+re*S,W=ae*R-X*N,I=(ae*N+X*R+1)/2,L=.82+.18*I,q=.5+.5*Math.sin(o*1.6+G*1.3);B.push({x0:f+oe*k*L,y0:g+W*k*L,x1:f+oe*z*L,y1:g+W*z*L,cx2:f+oe*T*L,cy2:g+W*T*L,d:I,shim:q})}B.sort((G,Z)=>G.d-Z.d);for(const G of B){const Z=(y?.4+.45*C:.6)*(.4+.6*G.d)*(.78+.22*G.shim),F=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);F.addColorStop(0,"rgba("+i.dot+","+Z+")"),F.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=F,s.lineWidth=M*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,x*.058*Fr(e.size)*(.85+.3*C)*(.6+.5*G.d));if(i.glow){const ee=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Z+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Z+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&oh(e,o,i,()=>i.dot),Br(e,o,i),s.restore()}function PS(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=x?o*.5:o*.2,A=Math.cos(k),_=Math.sin(k),C=.42,M=Math.cos(C),$=Math.sin(C),S=x?1:.4,j=(F,Y)=>[Math.sin(F)*Math.cos(Y),Math.cos(F),Math.sin(F)*Math.sin(Y)],O=[j(1.4+.5*Math.sin(o*.5*S),o*.6*S),j(1.9+.4*Math.cos(o*.4*S),-o*.5*S+2)],R=.36,N=e.cellCount==null?y:At(Math.round(e.cellCount),0,y);let T=null,z=null;(N<y||e.cellBirths)&&(z=Array.from({length:y},(F,Y)=>Y).sort((F,Y)=>en(F)-en(Y)),T=new Array(y),z.forEach((F,Y)=>{T[F]=Y}));const B=.7,G=.16;if(z&&e.cellBirths&&e.emergeNow!=null){let F=0;for(let Y=0;Y<N;Y++){const ee=z[Y];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+F++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Z=[];for(let F=0;F<y;F++){let Y=1;if(T){if(T[F]>=N)continue;if(e.cellBirths){const H=e.cellBirths.get(F);if(H==null||(Y=lr(((e.emergeNow??H+B)-H)/B),Y<=.001))continue}}const ee=1-(F+.5)/y*2,ae=Math.sqrt(Math.max(0,1-ee*ee)),re=F*2.39996,oe=Math.cos(re)*ae*Y,X=ee*Y,W=Math.sin(re)*ae*Y;let V=0;for(const H of O){const E=oe-H[0],ne=X-H[1],pe=W-H[2];V+=Math.exp(-(E*E+ne*ne+pe*pe)/(2*R*R))}V=At(V,0,1);const I=oe*A+W*_,L=-oe*_+W*A,q=X*M-L*$,ie=(X*$+L*M+1)/2,de=.82+.18*ie;Z.push({x:h+I*w*de,y:f+q*w*de,d:ie,inf:V,g:Y})}Z.sort((F,Y)=>F.d-Y.d);for(const F of Z){const Y=lr(F.inf),ee=Math.max(.6,g*(.05+.06*Y)*Fr(e.size)*(.55+.5*F.d))*(.35+.65*F.g),ae=(.16+.84*F.d)*(.45+.55*Y)*F.g,re=1-(1-Math.abs(2*F.d-1))*F.g,oe=Math.atan2(F.y-f,F.x-h);s.fillStyle="rgba("+i.dot+","+ae+")",s.beginPath(),s.ellipse(F.x,F.y,Math.max(.35,ee*re),ee,oe,0,6.2832),s.fill()}Br(e,o,i),s.restore()}function zS(e,o,i,s){const{ctx:l,w:d,h,dpr:f}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,w=e.state!=="idle",k=lr(At(s/.55,0,1)),A=lr(At((s-.3)/.4,0,1)),_=lr(At((s-.5)/.5,0,1)),C=e.size>=32?11:7,M=y*.12,$=y*.12,S=lr(.5+.5*Math.sin(o*(w?1:.55))),j=w?.34+.66*S:.5+.12*S,O=Math.max(1*f,y*.052),R=-o*(w?.5:.16),N=Math.cos(R),T=Math.sin(R),z=.42,B=Math.cos(z),G=Math.sin(z),Z=y*(.52+.44*j),F=Math.max(M+O,Z-$),Y=[];for(let H=0;H<C;H++){const E=1-(H+.5)/C*2,ne=Math.sqrt(Math.max(0,1-E*E)),pe=H*2.39996,ce=Math.cos(pe)*ne,me=E,be=Math.sin(pe)*ne,ve=ce*N+be*T,Le=-ce*T+be*N,Fe=me*B-Le*G,Ie=(me*G+Le*B+1)/2,Te=.82+.18*Ie,Ve=.5+.5*Math.sin(o*1.6+H*1.3);Y.push({x0:g+ve*M*Te,y0:x+Fe*M*Te,x1:g+ve*F*Te,y1:x+Fe*F*Te,cx2:g+ve*Z*Te,cy2:x+Fe*Z*Te,d:Ie,shim:Ve,ux:ce,uy:me,uz:be})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...Y].sort((H,E)=>H.d-E.d);for(const H of ee){const E=(w?.4+.45*j:.6)*(.4+.6*H.d)*(.78+.22*H.shim);if(_>.001){const ne=H.x0+(H.x1-H.x0)*_,pe=H.y0+(H.y1-H.y0)*_,ce=l.createLinearGradient(H.x0,H.y0,H.x1,H.y1);ce.addColorStop(0,"rgba("+i.dot+","+E*_+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ce,l.lineWidth=O*(.7+.5*H.d),l.beginPath(),l.moveTo(H.x0,H.y0),l.lineTo(ne,pe),l.stroke()}if(A>.001){const ne=Math.max(.9,y*.058*Fr(e.size)*(.85+.3*j)*(.6+.5*H.d));if(i.glow){const pe=l.createRadialGradient(H.cx2,H.cy2,0,H.cx2,H.cy2,ne*5);pe.addColorStop(0,"rgba("+i.accent+","+.26*E*A+")"),pe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=pe,l.beginPath(),l.arc(H.cx2,H.cy2,ne*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,E+.1)*A+")",l.beginPath(),l.arc(H.cx2,H.cy2,ne*(.6+.4*A),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,re=y*.78,oe=w?o*.5:o*.2,X=Math.cos(oe),W=Math.sin(oe),V=w?1:.4,I=(H,E)=>[Math.sin(H)*Math.cos(E),Math.cos(H),Math.sin(H)*Math.sin(E)],L=[I(1.4+.5*Math.sin(o*.5*V),o*.6*V),I(1.9+.4*Math.cos(o*.4*V),-o*.5*V+2)],q=.36,K=e.cellCount==null?ae:At(Math.round(e.cellCount),0,ae);let ie=null;if(K<ae){const H=Array.from({length:ae},(E,ne)=>ne).sort((E,ne)=>en(E)-en(ne));ie=new Array(ae),H.forEach((E,ne)=>{ie[E]=ne})}const de=1-A;if(de>.001||k<1){const H=[];for(let E=0;E<ae;E++){if(ie&&ie[E]>=K)continue;const ne=1-(E+.5)/ae*2,pe=Math.sqrt(Math.max(0,1-ne*ne)),ce=E*2.39996,me=Math.cos(ce)*pe,be=ne,ve=Math.sin(ce)*pe;let Le=0,Fe=-2;for(let lt=0;lt<C;lt++){const Et=me*Y[lt].ux+be*Y[lt].uy+ve*Y[lt].uz;Et>Fe&&(Fe=Et,Le=lt)}const Pe=Y[Le];let Ie=0;for(const lt of L){const Et=me-lt[0],vn=be-lt[1],Mn=ve-lt[2];Ie+=Math.exp(-(Et*Et+vn*vn+Mn*Mn)/(2*q*q))}Ie=At(Ie,0,1);const Te=me*X+ve*W,Ve=-me*W+ve*X,Qe=be*B-Ve*G,He=(be*G+Ve*B+1)/2,pt=.82+.18*He,it=g+Te*re*pt,Bt=x+Qe*re*pt;H.push({x:it+(Pe.cx2-it)*k,y:Bt+(Pe.cy2-Bt)*k,d:He+(Pe.d-He)*k,inf:Ie,f:(1-(1-Math.abs(2*He-1)))*(1-k)+1*k})}H.sort((E,ne)=>E.d-ne.d);for(const E of H){const ne=lr(E.inf),pe=Math.max(.6,y*(.05+.06*ne)*Fr(e.size)*(.55+.5*E.d)),ce=(.16+.84*E.d)*(.45+.55*ne)*de;if(ce<=.003)continue;const me=Math.atan2(E.y-x,E.x-g);l.fillStyle="rgba("+i.dot+","+ce+")",l.beginPath(),l.ellipse(E.x,E.y,Math.max(.35,pe*E.f),pe,me,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,oh(e,o,i,()=>i.dot),l.globalAlpha=1),Br(e,o,i),l.restore()}function OS(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,f=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=x?1:.4,A=o*(x?.3:.12),_=o*1*k,C=-o*.7*k+2.2,M=.72,$=(S,j)=>{const O=((S-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(O)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<y;S++){const j=S/y*6.2832+A;let O=Math.exp(-($(j,_)**2)/(2*M*M))+Math.exp(-($(j,C)**2)/(2*M*M));O=At(O,0,1);const R=lr(O),N=h+Math.cos(j)*w,T=f+Math.sin(j)*w,z=Math.max(.6,g*(.05+.07*R)*Fr(e.size)),B=.38+.62*R;if(i.glow&&R>.25){const G=s.createRadialGradient(N,T,0,N,T,z*4);G.addColorStop(0,"rgba("+i.accent+","+.24*R+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(N,T,z*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+B+")",s.beginPath(),s.arc(N,T,z,0,6.2832),s.fill()}Br(e,o,i),s.restore()}function DS(e,o,i){Br(e,o,i)}const FS={orbit:Kg,orbit2d:IS,circle:Hf,lines:ES,magnetic:PS,magnetic2d:OS,pulse:DS,bands:Hf};function vt({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:f=!0,coreGradient:g=!1,streamCount:x,cellCount:y,className:w,"aria-label":k}){const A=v.useRef(null),_=RS(),C=v.useRef(0),M=v.useRef(0);M.current=g?1:0;const $=v.useRef(new Map),S=v.useRef(null),j=v.useRef(0);return v.useEffect(()=>{const O=A.current;if(!O)return;const R=O.getContext("2d");if(!R)return;const N=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),T=Math.min(2,window.devicePixelRatio||1),z=Math.max(2,Math.round(o*T)),B=z;O.width=z,O.height=B;const G={ctx:R,w:z,h:B,dpr:T,size:o,state:s,coreHalo:f,alert:C.current,streamCount:x,cellCount:y,cellBirths:y!=null&&!N&&s!=="static"?$.current:void 0},Z=i==="auto"?LS(Wf(R,O,"var(--color-bg-primary)"))<.5?"dark":"light":i,F=AS(Z,wu(d));if(h){const I=Wf(R,O,h);F.dot=I,F.core=I}const Y=FS[e]??Kg,ee=1.15,ae=e==="lines"?1:0,re=e==="lines"||e==="magnetic";(S.current==null||!re||N||s==="static")&&(S.current=ae);const oe=I=>{if(C.current+=(M.current-C.current)*.06,Math.abs(C.current-M.current)<.001&&(C.current=M.current),G.alert=C.current,G.emergeNow=performance.now()/1e3,re&&S.current!==ae){const K=G.emergeNow,ie=At(K-(j.current||K),0,.1);j.current=K;const de=ae>(S.current??0)?1:-1;S.current=At((S.current??0)+de*ie/ee,0,1)}else j.current=G.emergeNow;R.clearRect(0,0,z,B);const L=s==="static"?.62:I,q=S.current??ae;re&&q>.001&&q<.999?zS(G,L,F,q):Y(G,L,F)},X=At(l,.4,3);if((N||s==="static")&&(C.current=M.current),oe(1.15),N||s==="static")return;let W=0;const V=I=>{oe(I/1e3*X),W=requestAnimationFrame(V)};return W=requestAnimationFrame(V),()=>cancelAnimationFrame(W)},[e,o,i,s,l,d,h,f,g,x,y,_]),r.jsx("canvas",{ref:A,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:w,role:"img","aria-label":k})}const la={high:0,medium:1,low:2,none:3};m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Cl(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function BS(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const Qg=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,Zg=e=>/^(review|adjust|revisit|update)\b/i.test(e),WS=["Revisit","Update","Resolve"],HS=e=>/,|\sand\s/.test(e),US="Approve all",il="Yes",Xg=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};m.section`
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
`;function qS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function VS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function GS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function YS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function KS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function QS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function bu({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function ZS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function XS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function JS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function go({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function eN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function tN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function nN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Uf({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Id=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],ca={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},Jg={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function e2(e){const o=Jg[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function t2(e){const o=ca[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const n2={missed_clockin_james:"james_okoro_2"},ah=e=>`https://i.pravatar.cc/80?u=${n2[e]??e}`,ma=e=>`https://i.pravatar.cc/80?u=${n2[e]??e}`,rN={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},oN=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],r2=e=>rN[e]??oN,o2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},qf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},ih={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},aN={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},sh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},iN={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},sN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Ed={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function a2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return iN[e.id]??e.timeline.map(i=>{var d;const s=((d=Ed[i.state])==null?void 0:d.call(Ed,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:sN[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Rt=(e,o,i)=>({name:e,match:o,distance:i}),Ue=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Vf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],lN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],cN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],dN=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],i2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",io=e=>({from:"ultron",text:i2,time:e}),uN={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Vf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Rt("Jordan Pierce","4.9 match","3.2 mi"),Rt("Aisha Karim","4.7 match","5.1 mi"),Rt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:i2,total:20,threads:[Ue("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[io("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ue("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[io("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ue("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ue("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ue("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ue("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ue("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:lN,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Rt("Renee Wallace","4.9 match","2.4 mi"),Rt("Carl Jensen","4.6 match","4.1 mi"),Rt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ue("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ue("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:cN,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Rt("Dane Mercer","4.8 match","2.1 mi"),Rt("Omar Reyes","4.6 match","3.7 mi"),Rt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ue("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ue("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ue("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:dN,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Rt("Jamal Carter","4.7 match","1.8 mi"),Rt("Sara Lindqvist","4.6 match","2.9 mi"),Rt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ue("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ue("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ue("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Rt("Theo Park","4.7 match","1.9 mi"),Rt("Gina Holt","4.5 match","3.3 mi"),Rt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ue("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ue("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ue("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ue("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Rt("Carl Jensen","4.7 match","2.6 mi"),Rt("Tina Boyd","4.5 match","3.9 mi"),Rt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ue("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ue("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ue("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ue("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ue("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ue("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ue("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ue("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ue("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ue("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ue("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ue("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ue("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Vf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ue("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ue("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},hN={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},pN=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",Gf=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",Yf=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),fN={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},ku=e=>{const[o,...i]=e.split(" "),s=fN[o];return s?`Will ${s} ${i.join(" ")}`:e};function mN(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${pN(i.name)}", template="shift_offer", to=matched)`,summary:`${ku(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${ku(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function gN(e,o,i,s){var A,_,C,M;if(e==="read"){const $=((A=o.update)==null?void 0:A.recordType)??((_=o.updateClose)==null?void 0:_.recordType);if(!$)return null;const S=$.toLowerCase(),j=[{label:"Type",value:$},{label:"Time",value:((C=Jg[s])==null?void 0:C.shiftTime)??""},{label:"User",value:ca[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:j,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(M=o.policy)==null?void 0:M.eligible;if(!$)return null;const S=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:$,query:S,fields:j}=o.task;return{icon:"task",name:"Tasks",description:$,query:S,task:{fields:j}}}if(e==="update"||e==="update-close"){const $=e==="update"?o.update:o.updateClose;if(!$)return null;const{description:S,...j}=$;return{icon:"record",name:"Update Data",description:S,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=e==="policy"?o.policy.description:l?d.description:h.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?x:ku(x),S={icon:y,name:g,description:$,...mN(e,o)};return l?{...S,channel:Yf(d.channel),message:d.message}:h?{...S,channel:Gf(h.name),message:h.message}:e==="policy"?{...S,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:S}if(e==="policy")return{icon:y,name:g,description:x,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:Gf(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:Yf(d.channel),notification:k}}function s2(e,o,i="execution"){const s=uN[e];return s?o.map(l=>gN(l,s,i,e)).filter(l=>l!==null):[]}const vN=e=>e.tools??hN[e.icon]??["policy"],Bs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function yN(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const l2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Kf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function lh(e,o){return Kf[o%Kf.length]}function xN(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function wN(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function c2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return r.jsxs(bN,{children:[r.jsx(Bn,{size:"md",src:ah(e.avatarSeed),name:e.title,alt:e.title}),r.jsxs(kN,{children:[r.jsx(_N,{children:e.title}),r.jsx(CN,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(jN,{"data-tone":wN(i),children:[i,"% match"]}),r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Du,{size:16})})]})}const bN=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,kN=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,_N=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,CN=m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,jN=m.span`
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
`,Qf=e=>e.id.startsWith("detected_"),Zf=5400,Xf=1100;function SN(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:l2[i.id]??i.outcome}:i)}}const NN=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function MN(){const[e,o]=v.useReducer(SN,Id),[i,s]=v.useState(()=>{var q;const L=Id.find(K=>K.status==="needs_approval"||K.status==="recommended");return(L==null?void 0:L.id)??((q=Id[0])==null?void 0:q.id)??null}),[l,d]=v.useState([]),h=L=>{s(L),d(q=>q.includes(L)?q:[...q,L])},f=v.useMemo(()=>{const L=e.map((q,K)=>({item:q,index:K}));return NN.map(q=>({id:q.id,label:q.label,threads:L.filter(K=>q.statuses.includes(K.item.status)).sort((K,ie)=>(K.item.status==="analyzing"?1:0)-(ie.item.status==="analyzing"?1:0)||(Qf(ie.item)?1:0)-(Qf(K.item)?1:0)||la[K.item.severity]-la[ie.item.severity]||K.index-ie.index).map(K=>K.item)}))},[e]),g=e.find(L=>L.id===i)??null,[x,y]=v.useState({}),w=i?x[i]??0:0,[k,A]=v.useState([]),[_,C]=v.useState({}),[M,$]=v.useState({}),[S,j]=v.useState([]),O=v.useRef({}),[R,N]=v.useState([]),T=L=>{N(q=>q.includes(L)?q.filter(K=>K!==L):[...q,L])},[z,B]=v.useState([]),G=L=>{B(q=>q.includes(L)?q:[...q,L])},[Z,F]=v.useState([]);return{threads:e,groups:f,selectedId:i,selectedThread:g,selectedStage:w,stageById:x,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:M,replyingIds:S,setSelectedId:h,detectRisk:L=>{o({type:"detect",thread:yN(L)})},decide:L=>{h(L),A(q=>q.includes(L)?q:[...q,L]),o({type:"decide",threadId:L})},commit:(L,q)=>{h(L),C(K=>({...K,[L]:[...K[L]??[],q]})),o({type:"commit",threadId:L})},completeRun:L=>{const q=x[L]??0,K=ih[L];q===0&&K?(y(ie=>({...ie,[L]:1})),o({type:"reopen",threadId:L})):(o({type:"resolve",threadId:L}),R.includes(L)&&(G(L),N(ie=>ie.filter(de=>de!==L))))},sendMessage:(L,q)=>{const K=q.trim();if(!K)return;h(L),$(de=>({...de,[L]:[...de[L]??[],{role:"operator",text:K}]})),j(de=>de.includes(L)?de:[...de,L]);const ie=window.setTimeout(()=>{$(de=>{const H=de[L]??[],E=H.filter(ne=>ne.role==="ultron").length;return{...de,[L]:[...H,{role:"ultron",text:lh(K,E)}]}}),j(de=>de.filter(H=>H!==L)),delete O.current[L]},Xf);O.current[L]=ie},stopReply:L=>{const q=O.current[L];q&&(window.clearTimeout(q),delete O.current[L]),j(K=>K.filter(ie=>ie!==L))},refine:L=>{},saveWorkflow:L=>{const q=L.id;h(q),$(ie=>({...ie,[q]:[...ie[q]??[],{role:"operator",text:"Save as workflow"}]})),j(ie=>ie.includes(q)?ie:[...ie,q]);const K=window.setTimeout(()=>{$(ie=>({...ie,[q]:[...ie[q]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(q),j(ie=>ie.filter(de=>de!==q)),delete O.current[q]},Xf);O.current[q]=K},pendingWorkflowIds:R,toggleWorkflowSave:T,savedWorkflowIds:z,markWorkflowSaved:G,revealedNewIds:Z,revealNew:L=>F(q=>q.includes(L)?q:[...q,L])}}const RN={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function LN(e,o){const i=RN[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const AN={search:el,read:el,message:nl,policy:lo,shield:lo,schedule:lo,analytics:o9,clock:on,monitor:ua,bell:nl,record:zr,task:lo},$N={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},TN=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:$N[e.icon]??e.name,IN=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",Jf={positive:0,chatting:1,muted:2},EN=m(tg)`
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
`,PN=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,ch=240;function zN({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,f]=v.useState(e),[g,x]=v.useState(!1);if(v.useEffect(()=>{if(e){f(!0);let _=0;const C=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(C),cancelAnimationFrame(_)}}x(!1);const A=setTimeout(()=>f(!1),ch);return()=>clearTimeout(A)},[e]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((A,_)=>({entry:A,index:_}));return wi.createPortal(r.jsxs(YN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(KN,{$shown:g,onClick:o}),r.jsxs(QN,{$shown:g,children:[r.jsxs(ZN,{children:[r.jsxs(XN,{children:[r.jsx(JN,{children:i}),r.jsx(eM,{children:w})]}),r.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:r.jsx(pi,{size:18})})]}),r.jsxs(tM,{children:[r.jsx(nM,{"aria-hidden":"true"}),r.jsx(eg,{type:"single",collapsible:!0,value:l,onValueChange:A=>d(typeof A=="string"?A:""),children:k.map(({entry:A,index:_})=>{const C=A.updateData?U0:AN[A.icon];return r.jsx(EN,{value:String(_),label:TN(A),description:A.description,leadingSlot:r.jsx(PN,{"aria-hidden":"true",children:r.jsx(C,{size:18})}),children:r.jsx(rM,{children:r.jsx(ON,{entry:A})})},_)})})]})]})]}),document.body)}function ON({entry:e}){return r.jsxs(r.Fragment,{children:[e.channel&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Channel"}),r.jsx(om,{children:e.channel})]}),e.message&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Message"}),r.jsx(tm,{children:e.message})]}),e.recordDetails&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Record details"}),r.jsx(Pd,{children:e.recordDetails.map((o,i)=>r.jsx(mn,{size:"sm",label:o.label,trailingSlot:r.jsx(zd,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&r.jsxs(pn,{children:[r.jsx(Ut,{children:`Policies evaluated · ${e.policies.total}`}),r.jsx(gM,{children:e.policies.items.map((o,i)=>r.jsxs(vM,{children:[r.jsx(yM,{"aria-hidden":"true",children:r.jsx(qt,{size:16})}),r.jsx("span",{children:o})]},i))})]}),e.eligible&&r.jsxs(pn,{children:[r.jsx(Ut,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),r.jsx(DN,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&r.jsxs(pn,{children:[r.jsx(Ut,{children:`Threads · ${e.threads.total}`}),r.jsx(qN,{threads:e.threads})]}),e.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(pn,{children:[r.jsx(Ut,{children:"Recipient"}),r.jsx(xM,{children:r.jsx(mn,{size:"md",divider:!1,leadingSlot:r.jsx(Bn,{size:"sm",src:ma(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:r.jsx(vl,{size:14})})})})]}),r.jsxs(pn,{children:[r.jsx(Ut,{children:"Message"}),r.jsx(tm,{children:e.notification.message})]})]}),e.task&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Task"}),r.jsx(Pd,{children:e.task.fields.map((o,i)=>r.jsx(mn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?r.jsx(fi,{status:"success",size:"sm",children:o.value}):r.jsx(zd,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>r.jsx(Pd,{children:o.map((s,l)=>r.jsx(mn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(FN,{children:[r.jsx(BN,{children:s.previousValue}),r.jsx(WN,{"aria-hidden":"true",children:"→"}),r.jsx(HN,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(fi,{status:"success",size:"sm",children:s.value}):r.jsx(zd,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Recommendation"}),r.jsxs(wM,{children:[r.jsxs(nm,{children:[r.jsx(rm,{children:"Incentive?"}),r.jsx(bM,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),r.jsxs(nm,{children:[r.jsx(rm,{children:"Reason"}),r.jsx(kM,{children:e.recommendation.rationale})]})]})]}),e.query&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"Query"}),r.jsx(oM,{children:e.query})]}),e.summary&&r.jsxs(pn,{children:[r.jsx(Ut,{children:"What it does"}),r.jsx(om,{children:e.summary})]})]})}function DN({candidates:e,total:o,moreNoun:i}){var y;const[s,l]=v.useState(!1),d=e.slice(0,3),h=o-d.length,f=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>UN(k,f)):[],x=[...d,...g];return r.jsxs(r.Fragment,{children:[r.jsx(dh,{children:x.map((w,k)=>r.jsx(mn,{size:"sm",leadingSlot:r.jsx(Bn,{size:"sm",src:ma(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:r.jsx(sM,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&r.jsx(d2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const dh=m.div`
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
`,Pd=m(dh)`
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
`,zd=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,FN=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,BN=m.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,WN=m.span`
  color: var(--color-content-tertiary);
`,HN=m.span`
  color: var(--color-success-content);
`,sl=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],ll=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function UN(e,o){const i=sl[e%sl.length],s=ll[(e*7+3)%ll.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const em=3;function qN({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((y,w)=>Jf[y.tone]-Jf[w.tone]),h=Math.max(0,e.total-d.length),f=[...d,...Array.from({length:h},(y,w)=>GN(w))],g=o?f:f.slice(0,em),x=f.length-em;return r.jsxs(r.Fragment,{children:[r.jsx(dh,{children:g.map((y,w)=>{var C;const k=!!((C=y.conversation)!=null&&C.length),A=`${y.name}-${w}`,_=k&&s===A;return r.jsxs(lM,{"data-open":_||void 0,children:[r.jsx(mn,{size:"md",interactive:k,onClick:k?()=>l(_?null:A):void 0,"aria-expanded":k?_:void 0,leadingSlot:r.jsx(Bn,{size:"sm",src:ma(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:r.jsxs(mM,{children:[r.jsx(fi,{status:IN(y),size:"sm",children:y.status}),k?r.jsx(cM,{"data-open":_||void 0,children:r.jsx(Sn,{size:16})}):r.jsx(gn,{size:16})]})}),_&&r.jsx(VN,{messages:y.conversation})]},A)})}),x>0&&r.jsx(d2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function VN({messages:e}){return r.jsx(uM,{children:e.map((o,i)=>r.jsxs(hM,{$from:o.from,children:[r.jsx(pM,{children:o.text}),r.jsx(fM,{children:o.time})]},i))})}function GN(e){const o=sl[e%sl.length],i=ll[(e*7+3)%ll.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const YN=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,KN=m.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${ch}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,QN=m.div`
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
  transition: transform ${ch}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,ZN=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,XN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,JN=m.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,eM=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,tM=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,nM=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,rM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,pn=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function oM({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(aM,{children:[r.jsx(iM,{children:e}),r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?r.jsx(qt,{size:14}):r.jsx(W0,{size:14})})]})}const aM=m.div`
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
`,iM=m.pre`
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
`,sM=m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,lM=m.div``,cM=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,dM=Se`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,uM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${dM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hM=m.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,pM=m.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,fM=m.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,mM=m.div`
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
`,gM=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,vM=m.li`
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
`,yM=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,tm=m.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,xM=m.div`
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
`,wM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,nm=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,rm=m.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,bM=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,kM=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,om=m.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function _M({milestones:e}){return r.jsx($M,{children:e.map((o,i)=>r.jsx(NM,{milestone:o,last:i===e.length-1},i))})}function u2({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:g,reasoning:x}){return r.jsx(CM,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:g,reasoning:x})}function CM({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=v.useState(!1),_=g||x&&!d?e.length:0,C=_>0,M=C&&!y?_:0,$=e.slice(0,_).map(j=>j.headline).join(" · "),S=e.length>0&&M>=e.length;return r.jsx(IM,{$animate:h,children:r.jsxs(PM,{$compact:S,children:[C&&!y&&r.jsx(sm,{$tight:!0,$last:S,$connected:f,children:r.jsxs(f2,{type:"button","aria-expanded":y,onClick:()=>w(j=>!j),children:[r.jsx(dm,{"aria-hidden":"true",children:r.jsx(tl,{size:16})}),r.jsx(KM,{children:$})]})}),e.slice(M).map((j,O)=>{var F,Y;const R=M+O,N=d&&typeof i=="number"&&R>i,T=d&&typeof i=="number"&&R===i,z=N?"plan":T?"working":"done",B=!d||typeof i!="number"||R<i-1?"done":R===i-1?"working":"upcoming",G=!!((F=j.progress)!=null&&F.length),Z=R===e.length-1;return r.jsxs(sm,{$tight:!G,$last:Z,$connected:f,children:[f&&!Z&&B!=="upcoming"&&r.jsx(OM,{"aria-hidden":"true",$state:B,$tight:!G,$superseded:g}),r.jsx(p2,{milestone:j,label:LN(j.headline,z),last:!0,collapsible:!0,placeholder:N,focused:T,startOpen:!d&&y,onCollapse:C&&y&&!T?()=>w(!1):void 0,progressBeat:T?s:void 0,superseded:g,typing:R===o,extra:!N&&((Y=j.usage)!=null&&Y.length)?r.jsx(SM,{usage:j.usage,title:j.headline}):void 0,icon:x&&!d&&!N?r.jsx(dm,{"aria-hidden":"true",children:r.jsx(tl,{size:16})}):r.jsx(h2,{icon:j.icon,loading:o===R||T||d&&typeof i!="number"&&R===e.length-1,placeholder:N,muted:g})})]},R)}),!l&&!d&&r.jsx(Xo,{time:Yn(e)})]})})}const am=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function jM(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=am.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),r.jsxs(r.Fragment,{children:[am[e],r.jsxs(EM,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Yn(e){const i=581+e.reduce((f,g)=>f+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Xo({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(DM,{"data-feedback-actions":!0,children:r.jsxs(_0,{visibility:"always",time:e,children:[r.jsx(lm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:r.jsx(F0,{size:14})}),r.jsx(lm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:r.jsx(B0,{size:14})}),r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(ki,{size:14})})]})})}function SM({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?r.jsxs(FM,{children:[r.jsxs(ze,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(gn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),r.jsx(zN,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function NM({milestone:e,last:o}){return r.jsxs(qM,{children:[r.jsxs(VM,{children:[r.jsx(h2,{icon:e.icon}),!o&&r.jsx(XM,{})]}),r.jsx(p2,{milestone:e,last:o})]})}function MM({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return r.jsxs(fR,{children:[l.map((h,f)=>r.jsx(c2,{record:h},f)),d>0&&r.jsx(mR,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function h2({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?r.jsx(cm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:r.jsx(YM,{})}):r.jsx(cm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:r.jsxs(ZM,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function p2({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var Z,F,Y;const A=o??e.headline;if(f)return r.jsx(hm,{$last:i,$dim:!0,children:r.jsxs(vi,{as:"div",children:[l,r.jsx(pm,{children:A})]})});const _=!!((Z=e.blocks)!=null&&Z.length),C=!!h,M=!d||!!e.defaultOpen||!!w,[$,S]=v.useState(null),j=!!k,O=j?!0:$??M,R=d&&(_||C),N=!j&&R&&(!s||!!g),T=N&&!!g&&!!((F=e.progress)!=null&&F.length),z=()=>S(()=>!O),B=_&&(j||!d||O),G=C&&(j||!d||O);return r.jsxs(hm,{$last:i,children:[r.jsxs(vi,{as:j||R?"button":"div",type:j||R?"button":void 0,$interactive:j||N,"aria-expanded":j?!0:N?O:void 0,onClick:j?k:N?z:void 0,children:[l,r.jsx(pm,{$focused:!!g,children:A}),N&&!g&&r.jsx(JM,{"data-open":O||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?r.jsx(nR,{$indent:!!l,children:r.jsxs(eR,{children:[T&&r.jsx(tR,{type:"button","aria-expanded":O,"aria-label":O?"Hide details":"Show details",onClick:z,children:O?r.jsx(Vu,{size:16}):r.jsx(vo,{size:16})}),r.jsx(LM,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:O||s||g})]})}):null,B&&r.jsx(dR,{$indent:!!l,children:e.blocks.map((ee,ae)=>r.jsxs(uR,{children:[ee.text&&r.jsx(hR,{children:s?r.jsx(uh,{text:ee.text}):ee.text}),ee.label&&r.jsx(pR,{children:ee.label}),ee.bullets&&r.jsx(gR,{children:ee.bullets.map((re,oe)=>r.jsx("li",{children:re},oe))}),ee.checks&&r.jsx(vR,{children:ee.checks.map((re,oe)=>r.jsxs("li",{children:[r.jsx(yR,{"aria-hidden":"true"}),r.jsx("span",{children:re})]},oe))}),ee.records&&r.jsx(MM,{records:ee.records})]},ae))}),G&&r.jsx(BM,{$indent:!!l,children:h})]})}const RM=1350;function LM({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const g=e.length-1,x=typeof h=="number",[y,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(x||!k.current||y>=g)return;const M=setTimeout(()=>w($=>Math.min($+1,g)),RM);return()=>clearTimeout(M)},[y,g,x]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const A=typeof h=="number"?Math.min(h,g):y,_=A>=g,C=_&&!l;return r.jsxs(rR,{children:[r.jsx(aR,{$done:C,$live:l,$superseded:f,"aria-live":"polite",children:l?r.jsx(uh,{text:e[A],caret:!1,speed:26}):e[A]},A),d&&(i?_:_||l)&&(o!=null&&o.length)?r.jsx(AM,{seeds:o,total:s}):null]})}const im=90;function AM({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return r.jsxs(iR,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>r.jsx(sR,{style:{zIndex:s.length-f,animationDelay:`${f*im}ms`},children:r.jsx(Bn,{size:"sm",src:ma(h),name:h,alt:""})},h)),d>0&&r.jsxs(lR,{"aria-hidden":"true",style:{animationDelay:`${s.length*im}ms`},children:["+",d]})]})}const $M=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,TM=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,jl=Ye`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,IM=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${TM} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${jl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EM=m.span``,PM=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,sm=m.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,zM=Se`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,OM=m.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?Ye`
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
        animation: ${zM} 1.25s linear infinite;
      `:e.$state==="upcoming"?Ye`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Ye`
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
`,DM=m.div`
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
`,FM=m.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,BM=m.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,lm=m(ze)`
  &[data-active] { color: var(--color-content-brand); }
`;function uh({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const f=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(f)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(o==null||o())},[h]),r.jsxs(r.Fragment,{children:[e.slice(0,l),s&&r.jsx(HM,{$blink:h,"aria-hidden":"true"}),!h&&r.jsx(UM,{"aria-hidden":"true",children:e.slice(l)})]})}const WM=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,HM=m.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?WM:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UM=m.span`
  opacity: 0;
`,qM=m.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,VM=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,cm=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,GM=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,YM=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${GM} 1.6s ease-in-out infinite;

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
`,dm=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,KM=m.span`
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
`,QM=Se`
  to { transform: rotate(360deg); }
`,um=56.5,ZM=m.svg`
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
    stroke-dasharray: ${um};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?um*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${QM} 2s linear infinite;
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
`,XM=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,hm=m.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,vi=m.div`
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
`,pm=m.span`
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

  ${vi}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,JM=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${vi}:hover &,
  ${vi}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,eR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,tR=m.button`
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
`,nR=m.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,rR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,oR=Se`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,aR=m.div`
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
  ${e=>e.$live&&Ye`
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
    animation: ${oR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,iR=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,m2=Se`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,sR=m.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${m2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lR=m.span`
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
`,cR=Se`
  from { opacity: 0; }
  to   { opacity: 1; }
`,dR=m.div`
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
  animation: ${cR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,hR=m.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,pR=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,fR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,mR=m.button`
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
`,gR=m.ul`
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
`,vR=m.ul`
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
`,yR=m.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function xR({size:e=20}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const wR=160,g2=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,g]=v.useState(""),x=v.useRef(null),y=f.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var C;return(C=x.current)==null?void 0:C.focus()}}),[]);const w=()=>{const C=x.current;C&&(C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,wR)}px`)},k=()=>{!y||i||(o(f),g(""),requestAnimationFrame(()=>{const C=x.current;C&&(C.style.height="auto")}))},A=C=>{C.preventDefault(),k()},_=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),k())};return r.jsxs(bR,{onSubmit:A,$compact:d,children:[r.jsx(kR,{ref:x,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:C=>{g(C.target.value),w()},onKeyDown:_}),i?r.jsx(fm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(xR,{size:d?16:20})}):r.jsx(fm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:r.jsx(ml,{size:d?14:18})})]})}),bR=m.form`
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
`,kR=m.textarea`
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
`,fm=m(ze)`
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
`,mm=450;function hh(e,o){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=ih[e.id],d=o===1&&!!l,h=d?l.prompt:o2[e.id]??e.recommendation,f=d?l.record:aN[e.id],g=f?Array.isArray(f)?f:[f]:[],x=e.status==="unresolved"?WS:d?l.actions:e.actions,y=i&&(!d&&(((_=sh[e.id])==null?void 0:_.length)??0)>1||HS(h)),w=y?US:x[x.length-1],k=y?[]:x.slice(0,-1),A=Qg(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:A}}function gm({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,A]=v.useState(!1),[_,C]=v.useState(!1),{actionable:M,prompt:$,records:S,primaryLabel:j,purple:O}=hh(e,o),N=e.status==="analyzing"&&!l,T=e.status==="resolved"||e.status==="auto_resolved",z=!s&&(M||O),B=T&&!d,G=s?N:M||N||z,Z=i&&(G||B),F=Cl(e),ee=e2(e.id)||(Z?"":e.assessment),ae=re=>{Zg(re)?y(re):x(e.id,re)};return r.jsxs(ER,{"data-tone":F,$expanded:i,children:[r.jsxs(FR,{children:[r.jsxs(WR,{type:"button","aria-expanded":Z,"aria-label":Z?"Collapse case":"Expand case",onClick:h,children:[r.jsx(Bn,{size:"md",src:ah(e.id),name:ca[e.id],alt:ca[e.id]??""}),r.jsxs(k2,{children:[r.jsx(_2,{children:t2(e)}),ee&&r.jsx(C2,{children:ee})]})]}),r.jsx(BR,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":Z?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?r.jsx(vl,{size:20}):Z?r.jsx(tl,{size:16}):r.jsx(Vu,{size:16})})]}),Z&&B&&r.jsx(HR,{children:r.jsx(UR,{children:r.jsx(_M,{milestones:a2(e)})})}),Z&&G&&r.jsxs(qR,{children:[M&&!s&&r.jsx(Sl,{children:$}),M&&!s&&S.length>0&&r.jsx(sL,{children:S.map((re,oe)=>r.jsx(c2,{record:re},oe))}),N&&r.jsx(j2,{role:"status","aria-live":"polite",children:r.jsx(SR,{thread:e,onDecide:g})}),z&&r.jsxs(ph,{children:[M&&j&&r.jsx(co,{variant:"primary",size:"sm",onClick:()=>ae(il),children:il}),M&&r.jsx(co,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),M&&r.jsx(R2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{C(!0),y("Other")},children:"Other"}),O&&(k?r.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(qt,{size:14}),children:"Saved"}):r.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(go,{size:14}),onClick:()=>{w(e),A(!0)},children:"Save as workflow"}))]})]})]})}function vm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:e}):r.jsx(uh,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function v2({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const A=d||h,[_,C]=v.useState(!1),[M,$]=v.useState(!1),[S]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[j,O]=v.useState(!1),[R,N]=v.useState(!1),T=v.useRef(null);v.useEffect(()=>{var V;R&&((V=T.current)==null||V.focus())},[R]);const z=d||g||j,{actionable:B,onFollowUp:G,prompt:Z,records:F,primaryLabel:Y,purple:ee}=hh(e,o),ae=B&&!G?sh[e.id]??Xg(Z).map(V=>({label:V})):void 0,re=e.status==="resolved"||e.status==="auto_resolved",oe=ee||re,X=V=>{Zg(V)?s(V):i(e.id,V)},W=B&&!(ae&&ae.length>0)&&F.length>0?F[0]:void 0;if(oe&&!B){const V=l2[e.id],I=_||!V,L=d&&!g&&!j;return r.jsxs(yL,{$divided:!0,children:[V&&r.jsx(xL,{children:r.jsx(vm,{text:V,onDone:()=>C(!0),instant:S})}),I&&!L&&r.jsxs(ea,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(L2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(go,{size:16})}),r.jsx($2,{children:r.jsx(vm,{text:"Want me to save this as a reusable workflow?",onDone:()=>$(!0),instant:S})})]}),M&&r.jsx(T2,{children:z?r.jsx(co,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(qt,{size:14}),children:"Saved"}):r.jsx(co,{variant:"primary",size:"sm",onClick:()=>{O(!0),l(e)},children:"Save workflow"})})]}),I&&L&&r.jsx(x2,{})]})}return r.jsxs(DR,{$flat:k,"data-tone":Cl(e),children:[B&&r.jsxs(w2,{children:[r.jsx(Sl,{children:Z}),W&&r.jsx(b2,{children:r.jsx(Bn,{size:"md",src:ma(W.avatarSeed),name:W.title,alt:W.title})})]}),ae&&ae.length>0?r.jsx(y2,{tasks:ae}):null,r.jsxs(ph,{children:[B&&Y&&r.jsx(co,{variant:R?"secondary":"primary",size:"sm",onClick:()=>X(il),children:il}),B&&r.jsx(co,{variant:R?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),B&&r.jsx(R2,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>N(!0),children:"Other"}),B&&!G&&r.jsx(vL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":A,"data-on":A||void 0,leadingArtwork:A?r.jsx(qt,{size:14}):r.jsx(go,{size:14}),onClick:()=>{d||f==null||f(e.id)},children:"Save as future workflow"})]}),B&&R&&r.jsx(gL,{children:r.jsx(g2,{ref:T,compact:!0,onSend:V=>x==null?void 0:x(V),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function _R({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:g=!1}){const x=Cl(e),y=e2(e.id)||e.assessment;return r.jsxs(PR,{"data-tone":x,$expanded:i,children:[r.jsxs(zR,{$expanded:i,children:[r.jsx(Bn,{size:"md",src:ah(e.id),name:ca[e.id],alt:ca[e.id]??""}),r.jsxs(k2,{children:[r.jsx(_2,{children:t2(e)}),y&&r.jsx(C2,{children:y})]})]}),i&&r.jsx(OR,{children:r.jsx(v2,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:g})})]})}function y2({tasks:e,interactive:o=!0}){return r.jsx(lL,{children:e.map((i,s)=>r.jsx(CR,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function CR({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return r.jsxs(cL,{children:[r.jsx(dL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(uL,{})}),r.jsxs(hL,{children:[r.jsxs(pL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[r.jsx(N2,{children:e.label}),h&&r.jsx(fL,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),l&&h&&r.jsx(mL,{children:e.detail})]})]})}function jR({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return r.jsx(ZR,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!o&&h===i-1,g=h===l.length-1;return r.jsxs(JR,{children:[r.jsxs(eL,{children:[r.jsx(aL,{$done:!f,"aria-hidden":"true",children:f?r.jsx(iL,{children:r.jsx(vt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(qt,{size:16})}),!g&&r.jsx(tL,{})]}),r.jsxs(nL,{$last:g,children:[r.jsx(rL,{children:d.headline}),r.jsx(oL,{children:d.detail})]})]},h)})})}function SR({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(VR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[r.jsx(vt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(YR,{children:[r.jsx(KR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(QR,{children:e.assessment})]}),r.jsx(GR,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(gn,{size:14})})]}),d&&r.jsx(jR,{steps:r2(e.id),completed:i}),!i&&!l&&r.jsx(S2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function NR({thread:e,onDecide:o}){return r.jsx(S2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function Od(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:s2(o,vN(e))}}function MR(e,o){const i=s2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function RR(e,o){const i=a2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[MR(r2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(qf[e.id]??[]).map(k=>Od(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const f=ih[e.id],g=[(qf[e.id]??[]).map(w=>Od(w,e.id)),((f==null?void 0:f.working)??[]).map(w=>Od(w,e.id))],x=w=>w===1&&f?f.prompt:o2[e.id]??e.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(A=>y.push({kind:"activity",milestone:A})),y.push({kind:"reply",text:xN(k)})}),{items:y,reasoningCount:h}}function LR({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:g=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=RR(e,o),A=l||e.status==="in_progress",[_,C]=v.useState(l?Math.min(1,k):A?k:w.length),[M]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=o.length>0||x||y?w.length:k,S=e.status==="in_progress"&&o.length>0,[j,O]=v.useState(0);v.useEffect(()=>{O(0)},[_]),v.useEffect(()=>{if(_>=$)return;const H=w[_],E=w[_-1];if((H==null?void 0:H.kind)==="question"||(H==null?void 0:H.kind)==="message"){const ce=setTimeout(()=>C(me=>me+1),0);return()=>clearTimeout(ce)}if((H==null?void 0:H.kind)==="reply"){if(S)return;const ce=setTimeout(()=>C(me=>me+1),mm);return()=>clearTimeout(ce)}if(S&&(E==null?void 0:E.kind)!=="message")return;const ne=(E==null?void 0:E.kind)==="message"?mm:Zf,pe=setTimeout(()=>C(ce=>ce+1),ne);return()=>clearTimeout(pe)},[_,$,S]),v.useEffect(()=>{if(!S)return;const H=E=>{var be;if(E.key!=="t"&&E.key!=="T"||E.metaKey||E.ctrlKey||E.altKey)return;const ne=E.target instanceof Element?E.target:null;if(ne&&ne.closest('input, textarea, [contenteditable="true"]'))return;const pe=w[_-1],ce=(pe==null?void 0:pe.kind)==="activity"?((be=pe.milestone.progress)==null?void 0:be.length)??0:0;if((pe==null?void 0:pe.kind)==="activity"&&j<ce-1){O(ve=>ve+1);return}const me=w[_];(me==null?void 0:me.kind)==="activity"?(C(ve=>ve+1),O(0)):f==null||f()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[S,_,j,f]);const R=w.slice(0,_),N=[];for(const H of R){if(H.kind==="question"){N.push({type:"question",text:H.text});continue}if(H.kind==="message"){N.push({type:"msg",text:H.text});continue}if(H.kind==="reply"){N.push({type:"reply",text:H.text});continue}const E=N[N.length-1];E&&E.type==="acts"?E.milestones.push(H.milestone):N.push({type:"acts",milestones:[H.milestone]})}const T=_<w.length,z=R.length>0&&R[R.length-1].kind==="activity",B=_>=$,[G,Z]=v.useState(!1);v.useEffect(()=>{if(!(B&&z&&(x||l)&&!y)){Z(!1);return}Z(!0);const H=setTimeout(()=>Z(!1),Zf);return()=>clearTimeout(H)},[B,z,_,x,l,y]);const F=(x||l)&&(T||G)&&z;let Y=-1;N.forEach((H,E)=>{H.type==="acts"&&(Y=E)});const ee=[];for(const H of w){if(H.kind!=="activity"){ee.push({type:"other"});continue}const E=ee[ee.length-1];E&&E.type==="acts"?E.milestones.push(H.milestone):ee.push({type:"acts",milestones:[H.milestone]})}let ae=-1;ee.forEach((H,E)=>{H.type==="acts"&&(ae=E)});const re=N.findIndex(H=>H.type==="acts"),oe=(H,E,ne=E)=>{const pe=N[H],ce=(l||e.status==="in_progress")&&H===ae,me=ee[H],be=ce&&me&&me.type==="acts"?me.milestones:pe.milestones,ve=ce?pe.milestones.length-1:void 0;return r.jsx(u2,{milestones:be,focusIndex:ve,focusBeat:ce&&S?j:void 0,typingIndex:H===ae&&F?pe.milestones.length-1:void 0,collapsed:H<Y,hideActions:ne,running:ce,showConnectors:H!==re,reasoning:H===re,animateIn:!E&&!M})},X=[];for(let H=0;H<N.length;H++){const E=N[H];if(E.type==="question"){X.push({kind:"question",text:E.text});continue}if(E.type==="msg"){X.push({kind:"msg",text:E.text});continue}if(E.type==="reply"){X.push({kind:"response",gi:-1,text:E.text});continue}const ne=N[H+1];ne&&ne.type==="reply"?(X.push({kind:"response",gi:H,text:ne.text}),H++):X.push({kind:"acts",gi:H})}const V=(l||e.status==="in_progress")&&Y>=0||s,I=R.length>0,L=s||x,q=(()=>{for(let H=X.length-1;H>=0;H--){const E=X[H];if(E.kind==="acts"||E.kind==="response"&&E.gi>=0)return H}return-1})(),K=X.findIndex(H=>H.kind==="question"),ie=K===re+1?K:-1,de=H=>H.kind==="acts"?Yn(N[H.gi].milestones):H.kind==="response"?Yn(H.gi>=0?N[H.gi].milestones:[]):Yn([]);return r.jsxs(r.Fragment,{children:[X.map((H,E)=>{var me,be;const ne=E===q?d:null;if(H.kind==="question"){if(E===ie)return null;const ve=X[E-1],Le=!!ve&&(ve.kind==="acts"||ve.kind==="response")&&E-1!==q,Fe=E===K;return r.jsxs(Fd,{children:[Fe?r.jsx(ym,{thread:e,saveWorkflowFlagged:g}):r.jsx(TR,{text:H.text,animate:!M}),Le&&r.jsx(Xo,{time:de(ve)})]},`q${E}`)}if(H.kind==="msg")return r.jsx(IR,{messages:[H.text],animate:!M},`m${E}`);if(H.kind==="acts"){const ve=N[H.gi].milestones,Le=((me=X[E+1])==null?void 0:me.kind)==="question",Fe=oe(H.gi,!1,!!ne||Le),Pe=E===re,Ie=ne||(Pe&&E+1===ie?r.jsx(ym,{thread:e,saveWorkflowFlagged:g}):null);return Pe&&Ie?r.jsxs($L,{children:[Fe,Ie,r.jsx(Xo,{time:Yn(ve)})]},`a${E}`):r.jsxs(v.Fragment,{children:[Fe,ne&&r.jsxs(Fd,{children:[ne,r.jsx(Xo,{time:Yn(ve)})]})]},`a${E}`)}const pe=H.gi>=0,ce=pe?N[H.gi].milestones:[];return r.jsxs(v.Fragment,{children:[r.jsx(_u,{activity:pe?oe(H.gi,!0):void 0,text:H.text,feedbackTime:ne||((be=X[E+1])==null?void 0:be.kind)==="question"?void 0:Yn(ce),showMark:!1,animateIn:!1}),ne&&r.jsxs(Fd,{children:[ne,r.jsx(Xo,{time:Yn(ce)})]})]},`resp${E}`)}),r.jsx(AR,{messages:i,replying:s}),h&&wi.createPortal(I?r.jsxs(NL,{role:L?"status":"img","aria-label":s?"Ultron is replying":V?"Ultron is working":"Ultron",children:[r.jsxs(LL,{"aria-hidden":"true",children:[r.jsx(xm,{$show:V,children:r.jsx(vt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(xm,{$show:!V,children:r.jsx(vt,{mark:"magnetic2d",size:24,tone:"auto",state:L?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),V&&r.jsx(RL,{children:s?"Replying…":r.jsx(jM,{})})]}):null,h),q<0&&d]})}function _u({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(e||i||s);return r.jsxs(AL,{children:[f&&r.jsxs(TL,{$animate:h,children:[e,i,s&&r.jsx(Xo,{time:s})]}),d&&r.jsx(IL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(vt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Dd(){return[{icon:"clock",headline:"Reviewed your message"}]}function AR({messages:e,replying:o=!1}){return!e.length&&!o?null:r.jsx(SL,{children:e.map((i,s)=>i.role==="operator"?r.jsx(I2,{children:r.jsx(P2,{children:r.jsx(z2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(_u,{body:r.jsx($R,{}),feedbackTime:Yn(Dd()),showMark:!1},s):r.jsx(_u,{activity:r.jsx(u2,{milestones:Dd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Yn(Dd()),showMark:!1},s))})}function $R(){return r.jsx(x2,{})}function x2(){return r.jsxs(ea,{children:[r.jsxs(L2,{children:[r.jsx(A2,{"aria-hidden":"true",children:r.jsx(go,{size:16})}),r.jsx($2,{children:"Workflow saved for future use."})]}),r.jsx(T2,{children:r.jsx(co,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(vl,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function TR({text:e,animate:o=!0}){return r.jsx(bL,{$animate:o,children:e})}function ym({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=hh(e,0),l=sh[e.id]??Xg(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(kL,{"data-tone":Cl(e),children:[r.jsxs(w2,{children:[r.jsx(Sl,{children:i}),o?r.jsx(cr,{content:"Saved as workflow",children:r.jsx(_L,{"aria-label":"Saved as workflow",children:r.jsx(go,{size:18})})}):d&&r.jsx(b2,{children:r.jsx(Bn,{size:"md",src:ma(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(y2,{tasks:l,interactive:!1}):null]})}function IR({messages:e,animate:o=!0}){return e.length?r.jsx(CL,{children:e.map((i,s)=>r.jsx(I2,{children:r.jsx(P2,{$animate:o,children:r.jsx(z2,{children:i})})},s))}):null}const ER=m.div`
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
`,PR=m.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?Ye`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:Ye`
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
`,zR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Ye`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,OR=m.div`
  padding: var(--space-4);
`,DR=m.div`
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
  ${e=>e.$flat&&Ye`
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
`,FR=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,BR=m(ze)`
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
`,WR=m.button`
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
`,HR=m.div`
  overflow: hidden;
`,UR=m.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,qR=m.div`
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
`,VR=m.div`
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
`,GR=m.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;m(j2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const YR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,KR=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,QR=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,ZR=m.div`
  display: flex;
  flex-direction: column;
`,XR=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,JR=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${XR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,tL=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,nL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,rL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,oL=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,aL=m.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,iL=m.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,S2=m(ze)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,sL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,lL=m.div`
  display: flex;
  flex-direction: column;
`,cl="var(--space-8)",cL=m.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,dL=m.div`
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
  &[data-first]::before { top: calc(${cl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${cl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,uL=m.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${cl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,hL=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,pL=m.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${cl};
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
`,fL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,mL=m.p`
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
`,Sl=m.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,M2=Se`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,ph=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${M2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gL=m.div`
  animation: ${M2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,co=m(ze)`
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
`,R2=m(ze)`
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
`,vL=m(ze)`
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
`,yL=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,xL=m.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,ea=m.div`
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

  ${e=>!e.$saved&&Ye`
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
  ${ea}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${ea}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${ea}[data-saved] & { color: var(--color-content-disabled); }
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
  ${ea}[data-saved] & { color: var(--color-content-disabled); }
`,T2=m(ph)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,wL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,bL=m.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${wL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kL=m.div`
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
  ${Sl} { color: var(--color-content-disabled); }
  ${N2} { color: var(--color-content-disabled); }
`,_L=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,CL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,I2=m.div`
  display: flex;
  justify-content: flex-end;
`,fh=Se`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,E2=Se`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,jL=Se`
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
  animation: ${fh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,z2=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,SL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const NL=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${E2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,RL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${ML} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LL=m.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,xm=m.span`
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
`,AL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${jl}
`,Fd=m.div`
  display: contents;
  ${jl}
`,$L=m.div`
  display: flex;
  flex-direction: column;
  ${jl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,TL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${jL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IL=m.span`
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
  animation: ${fh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${fh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const EL={"Coverage Recovery":Ir,"Fill Optimization":Ir,Recruiting:Ir,Users:Ir,Attendance:fn,"Attendance Recovery":fn,"Time Off":fn,Scheduling:fn,Compliance:ua,Onboarding:lo,"Payroll Operations":O0,Invoicing:zr,Reporting:bf,"Marketplace Optimization":bf,Engagement:nl,"Autonomous Operations":fl},PL=e=>EL[e]??fl,wm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],zL=2800,OL=200,DL=6,FL=2200,di=520;function BL({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[f,g]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const R=setInterval(()=>l(N=>(N+1)%wm.length),zL);return()=>clearInterval(R)},[]);const y=Math.min(DL,Bs.length),[w,k]=v.useState([]),A=v.useRef(0),_=v.useRef(Bs.filter(R=>!R.risk)),C=v.useRef(Bs.filter(R=>R.risk)),M=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),S=()=>{const R=M.current,N=C.current;if(N.length>0&&R.sinceRisk>=R.gap)return R.sinceRisk=0,R.gap=$(),N[R.risk++%N.length];R.sinceRisk+=1;const T=_.current;return T.length>0?T[R.routine++%T.length]:N[R.risk++%N.length]},j=R=>R.risk?"risk":Math.random()<.28?"action":"none",O=v.useRef(null);return v.useEffect(()=>{if(Bs.length===0){k([]);return}if(o)return;M.current={routine:0,risk:0,sinceRisk:0,gap:$()},A.current=0;const R=Array.from({length:y},()=>{const z=S();return{key:A.current++,event:z,phase:"in",outcome:j(z),resolved:!0}});if(R.length>0){const z=R[R.length-1];z.resolved=!1,O.current={key:z.key,event:z.event,outcome:z.outcome}}else O.current=null;k(R);const N=[],T=setInterval(()=>{var F;const z=S(),B=A.current++,G=j(z),Z=O.current;Z&&Z.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(Z.event.id)||(h.current.add(Z.event.id),(F=d.current)==null||F.call(d,Z.event))),O.current={key:B,event:z,outcome:G},k(Y=>{const ee=Y.filter(oe=>oe.phase!=="leaving"),ae=ee.length>=y?ee[0].key:null;return[...Y.map(oe=>oe.key===ae?{...oe,phase:"leaving"}:Z&&oe.key===Z.key&&!oe.resolved?{...oe,resolved:!0}:oe),{key:B,event:z,phase:"entering",outcome:G,resolved:!1}]}),N.push(setTimeout(()=>{k(Y=>Y.map(ee=>ee.key===B?{...ee,phase:"in"}:ee))},40)),N.push(setTimeout(()=>{k(Y=>Y.filter(ee=>ee.phase!=="leaving"))},di))},FL);return()=>{clearInterval(T),N.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,o]),r.jsxs(WL,{children:[r.jsxs(HL,{children:[r.jsx(UL,{children:r.jsx(vt,{mark:"circle",size:OL,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(qL,{children:"Ultron"}),r.jsx(VL,{role:"status","aria-live":"polite",children:r.jsxs(YL,{children:[r.jsx(KL,{children:wm[s]}),r.jsxs(QL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),o?r.jsx(XL,{children:i},"deck"):w.length>0&&r.jsx(ZL,{"aria-label":"Live event feed",children:w.map(R=>{const N=PL(R.event.capability);return r.jsx(JL,{"data-phase":R.phase,"aria-hidden":R.phase==="leaving"||void 0,children:r.jsx(eA,{children:r.jsxs(tA,{"data-outcome":R.resolved?R.outcome:"pending",children:[r.jsxs(nA,{children:[r.jsx(rA,{"aria-hidden":"true",children:r.jsx(N,{size:16})}),r.jsxs(oA,{children:[r.jsx(cA,{children:R.event.capability}),r.jsx(dA,{children:R.event.title})]})]}),r.jsx(aA,{children:R.resolved?R.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(vt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(iA,{children:"Risk detected"})]}):R.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(vt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(lA,{children:"Action required"})]}):r.jsx(sA,{children:"No action needed"}):r.jsx(vt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},R.key)})},"feed")]})}const WL=m.div`
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
`,mh=Se`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,HL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${mh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,UL=m.div`
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
`,qL=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,VL=m.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,GL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,YL=m.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${GL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,KL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,O2=Se`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,QL=m.span`
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
`,ZL=m.div`
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
  animation: ${mh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,XL=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${mh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JL=m.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${di}ms var(--ease-out, ease),
    opacity ${di}ms var(--ease-out, ease),
    transform ${di}ms var(--ease-out, ease);

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
    transition: opacity ${di}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,eA=m.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,tA=m.div`
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
`,nA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,rA=m.span`
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
`,oA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aA=m.div`
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
`;const iA=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,sA=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,lA=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,cA=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,dA=m.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,uA=5e3,hA=5,Zs=320,pA=e=>e.status==="needs_approval"||e.status==="recommended";function fA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:g,onClose:x}){const[y]=v.useState(()=>e.filter(pA).map((N,T)=>({t:N,index:T})).sort((N,T)=>la[N.t.severity]-la[T.t.severity]||N.index-T.index).slice(0,hA).map(({t:N})=>N.id)),[w,k]=v.useState(1),[A,_]=v.useState(new Set),[C,M]=v.useState(new Set),$=v.useRef(new Map);v.useEffect(()=>{if(w>=y.length)return;const N=setTimeout(()=>k(T=>T+1),uA);return()=>clearTimeout(N)},[w,y.length]),v.useEffect(()=>{const N=T=>{T.key==="Escape"&&x()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[x]),v.useEffect(()=>{const N=$.current;return()=>{N.forEach(T=>clearTimeout(T))}},[]);const S=y.findIndex(N=>!A.has(N));v.useEffect(()=>{if(y.length>0&&S===-1){const N=setTimeout(x,260);return()=>clearTimeout(N)}},[S,y.length,x]);const j=Math.max(w,S+1);v.useEffect(()=>{y.slice(0,j).forEach(N=>g==null?void 0:g(N))},[j]);const O=(N,T)=>{M(B=>new Set(B).add(N.id));const z=setTimeout(()=>{M(B=>{const G=new Set(B);return G.delete(N.id),G}),_(B=>new Set(B).add(N.id)),$.current.delete(N.id),i(N.id,T)},Zs);$.current.set(N.id,z)},R=y.length-A.size;return r.jsxs(mA,{role:"region","aria-label":"New cases",children:[r.jsxs(vA,{children:[r.jsx(Ut,{children:"Needs your decision"}),r.jsx(da,{children:R}),r.jsx(yA,{}),r.jsx(ze,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:r.jsx(pi,{size:16})})]}),r.jsx(gA,{children:r.jsx(xA,{children:y.slice(0,j).map((N,T)=>{if(A.has(N))return null;const z=e.find(B=>B.id===N);return z?r.jsx(bA,{"data-exiting":C.has(N)||void 0,children:r.jsx(_R,{thread:z,stage:o[N]??0,expanded:T===S,onAction:(B,G)=>O(z,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(N),saved:f.includes(N)})},N):null})})})]})}const mA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,gA=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,vA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,yA=m.div`
  flex: 1;
`,xA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,wA=Se`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,bA=m.div`
  animation: ${wA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Zs}ms var(--ease-out, ease),
    transform ${Zs}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Zs}ms linear;
    &[data-exiting] { transform: none; }
  }
`,kA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},bm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},_A=["new","working","done"],CA=280;function jA({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:A,savedWorkflowIds:_,onSend:C,replyingIds:M,onStop:$,onClose:S,onDetectRisk:j,onRevealNew:O}){const[R,N]=v.useState(!1),T=()=>{R||(N(!0),window.setTimeout(()=>{N(!1),S()},CA))},[z,B]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){B(!1);return}const E=ne=>{if(ne.key!=="t"&&ne.key!=="T"||ne.metaKey||ne.ctrlKey||ne.altKey)return;const pe=ne.target instanceof Element?ne.target:null;pe&&pe.closest('input, textarea, [contenteditable="true"]')||B(ce=>!ce)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[i]);const G=(E,ne)=>(E.t.status==="analyzing"?1:0)-(ne.t.status==="analyzing"?1:0)||la[E.t.severity]-la[ne.t.severity]||E.index-ne.index,Z=e.map((E,ne)=>({t:E,index:ne})).filter(({t:E})=>kA[i].includes(E.status)).sort(G).map(({t:E})=>E.id),[F,Y]=v.useState(()=>h??null),ee=v.useRef({}),ae=v.useRef(null),re=E=>{var ne;E==="Other"&&((ne=ae.current)==null||ne.focus()),y(E)},oe=v.useRef(null),X=v.useRef(null),[W,V]=v.useState(null),I=v.useRef(void 0);v.useEffect(()=>{var E;if(I.current===void 0){I.current=h;return}!h||h===I.current||(I.current=h,Y(h),(E=ee.current[h])==null||E.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const L=_A.includes(i),q=L?h&&Z.includes(h)?h:Z[0]??null:null;v.useEffect(()=>{var Te;const E=oe.current,ne=X.current;if(!E||!ne)return;const ce=((Te=window.matchMedia)==null?void 0:Te.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",me=160;let be=!0,ve=E.scrollHeight;const Le=()=>{be=E.scrollHeight-E.scrollTop-E.clientHeight<=me};E.addEventListener("scroll",Le,{passive:!0});let Fe=0;const Pe=()=>{Fe=performance.now()};E.addEventListener("pointerdown",Pe,{passive:!0});const Ie=new ResizeObserver(()=>{const Ve=E.scrollHeight,Qe=performance.now()-Fe<500;Ve>ve+1&&be&&!Qe&&E.scrollTo({top:Ve,behavior:ce}),ve=Ve});return Ie.observe(ne),()=>{E.removeEventListener("scroll",Le),E.removeEventListener("pointerdown",Pe),Ie.disconnect()}},[q,i]),v.useEffect(()=>{if(!L||!q)return;const E=oe.current;if(!E)return;const ne=()=>E.scrollTo({top:E.scrollHeight,behavior:"auto"}),pe=requestAnimationFrame(ne),ce=[80,240,480].map(me=>window.setTimeout(ne,me));return()=>{cancelAnimationFrame(pe),ce.forEach(clearTimeout)}},[q,L]);const K=q?e.find(E=>E.id===q)??null:null,ie=!!K&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(K.status)||Qg(K)),de=ie&&K?K:null,H=!(ie&&K&&["needs_approval","recommended","unresolved","monitoring"].includes(K.status))||!!(K!=null&&K.analysisResult);return i==="live"?r.jsx(km,{$static:!0,children:r.jsx(BL,{onDetectRisk:j,deckActive:z,deck:z?r.jsx(fA,{threads:e,stageById:o,onAction:g,onRefinement:re,onSaveWorkflow:w,onToggleSaveWorkflow:A,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:O,onClose:()=>B(!1)}):null})},"live"):r.jsxs(km,{$closing:R,children:[r.jsx(MA,{ref:oe,children:L?r.jsx(_m,{ref:X,children:q===null?r.jsx(Cm,{role:"status",children:bm[i]}):(()=>{const E=e.find(Le=>Le.id===q);if(!E)return null;const ne=E.status==="analyzing",pe=E.status==="resolved"||E.status==="auto_resolved",ce=E.status==="in_progress",me=E.status==="needs_approval"||E.status==="recommended",be=E.status==="monitoring",ve=E.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(TA,{children:r.jsx(gm,{thread:E,stage:o[E.id]??0,expanded:ce?!1:H,detachActionable:ie,detachAnalyzing:ne,detachTrail:pe||ve,onToggle:()=>{},onClose:T,onDecide:f,onAction:g,onRefinement:re,onSaveWorkflow:w},E.id)}),(ne||me||ce||pe||be||ve)&&r.jsx(LR,{thread:E,outbound:l[E.id]??[],chat:d[E.id]??[],replying:M.includes(E.id),analyzing:ne,footSlot:W,onCompleteRun:()=>x(E.id),saveWorkflowFlagged:k.includes(E.id)||_.includes(E.id),actionCard:de&&de.id===E.id?r.jsx(v2,{thread:de,stage:o[de.id]??0,onAction:g,onRefinement:re,onSaveWorkflow:w,saveIntent:k.includes(de.id),onToggleSaveWorkflow:A,saved:_.includes(de.id),savedConversationally:(d[de.id]??[]).some(Le=>Le.kind==="workflow_saved"),onSend:Le=>C(de.id,Le),replying:M.includes(de.id),onStop:()=>$(de.id)},`action-${de.id}`):void 0},E.id)]})})()}):r.jsx(_m,{ref:X,children:Z.length===0?r.jsx(Cm,{role:"status",children:bm[i]}):Z.map(E=>{const ne=e.find(pe=>pe.id===E);return ne?r.jsx($A,{ref:pe=>{ee.current[E]=pe},children:r.jsx(gm,{thread:ne,stage:o[E]??0,expanded:F===E,onToggle:()=>Y(pe=>pe===E?null:E),onDecide:f,onAction:g,onRefinement:y,onSaveWorkflow:w})},E):null})})}),L&&q&&K&&r.jsx(RA,{children:r.jsxs(LA,{children:[r.jsx(AA,{ref:V}),K.status==="analyzing"&&!s.includes(K.id)&&r.jsx(NR,{thread:K,onDecide:f}),r.jsx(g2,{ref:ae,onSend:E=>C(q,E),working:M.includes(q),onStop:()=>$(q),placeholder:BS(K.status,M.includes(q))},`composer-${q}`)]})})]},"feed")}const SA=Se`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,NA=Se`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,km=m.div`
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

  ${e=>!e.$static&&!e.$closing&&Ye`
    animation: ${NA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Ye`
    animation: ${SA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MA=m.div`
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
`,RA=m.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,LA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,AA=m.div`
  display: flex;
  &:empty { display: none; }
`,_m=m.div`
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
`,$A=m.div`
  scroll-margin-top: var(--space-5);
`,TA=m.div`
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
`,Cm=m.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function IA({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,f=e.length===0,g=()=>{const x=s.trim();!x||o||(i(x),l(""))};return r.jsxs(EA,{children:[r.jsx(PA,{children:f?r.jsxs(zA,{children:[r.jsx(OA,{"aria-hidden":"true",children:r.jsx(vt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(DA,{children:"New page"}),r.jsx(FA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(BA,{children:[e.map((x,y)=>r.jsx(jm,{"data-from":x.role,children:r.jsx(WA,{"data-from":x.role,children:x.text})},y)),o&&r.jsx(jm,{"data-from":"ultron",children:r.jsxs(UA,{"aria-label":"Ultron is replying",children:[r.jsx(Bd,{}),r.jsx(Bd,{}),r.jsx(Bd,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(qA,{children:r.jsxs(VA,{onSubmit:x=>{x.preventDefault(),g()},children:[r.jsx(GA,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),r.jsx(YA,{children:r.jsx(ha,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const EA=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,PA=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,zA=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,OA=m.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,DA=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,FA=m.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,BA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,jm=m.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,WA=m.div`
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
`,HA=Se`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,UA=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Bd=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${HA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qA=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,VA=m.form`
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
`,GA=m.textarea`
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
`,YA=m.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,KA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Sm(e,o){const i=KA[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const Cu=32;function QA({onNew:e}){return r.jsxs(ZA,{children:[r.jsx(XA,{"aria-hidden":"true",children:r.jsx(vt,{mark:"circle",size:Cu,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(JA,{children:"Ultron"}),r.jsx(e$,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:r.jsx(vo,{size:16})})]})}const ZA=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,XA=m.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Cu}px;
  height: ${Cu}px;
`,JA=m.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,e$=m.span`
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
`,t$=45;function n$({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(f)},t$);return()=>clearInterval(f)},[e]);const l=i>=e.length;return r.jsxs(r$,{className:o,children:[e.slice(0,i),!l&&r.jsx(a$,{"aria-hidden":"true",children:"|"})]})}const r$=m.span`
  white-space: nowrap;
`,o$=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,a$=m.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${o$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Wd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function i$(){const e=v.useMemo(()=>["All",...Array.from(new Set(Wd.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?Wd:Wd.filter(l=>l.tag===o);return r.jsx(s$,{children:r.jsxs(l$,{children:[r.jsxs(c$,{children:[r.jsx(vt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(d$,{children:[r.jsx(u$,{children:"Memory"}),r.jsx(h$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(p$,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>r.jsx(f$,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),r.jsx(m$,{children:s.map((l,d)=>r.jsx(g$,{children:r.jsxs(v$,{children:[r.jsx(y$,{children:l.title}),r.jsx(x$,{children:l.detail})]})},d))})]})})}const s$=m.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,l$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,c$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,d$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,u$=m.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,h$=m.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,p$=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,f$=m.button`
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
`,m$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,g$=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,v$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,y$=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,x$=m.span`
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
`;const ju=[{id:"employees",label:"Employees",icon:r.jsx(Ir,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(fn,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(Uu,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(lo,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(ua,{size:16})}];m.div`
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
`;function w$({collectionId:e}){const o=ju.find(i=>i.id===e)??ju[0];return r.jsxs(b$,{children:[r.jsxs(k$,{children:[r.jsx(_$,{children:o.label}),r.jsx(da,{children:"Account database"})]}),r.jsxs(C$,{role:"status",children:[r.jsx(j$,{"aria-hidden":"true",children:r.jsx(E0,{size:24})}),r.jsxs(S$,{children:[o.label," — demo stub"]}),r.jsxs(N$,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const b$=m.div`
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
`,k$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,_$=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,C$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,j$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,S$=m.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,N$=m.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Nm=72,Mm=.58;function jn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Rm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const f=d.slice(1),g=parseInt(f.length===3?f.split("").map(x=>x+x).join(""):f,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const M$=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function D2({links:e=0}){const o=v.useRef(null),i=v.useRef(0),s=v.useRef(e);return s.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let f=0,g=0;const x=()=>{f=l.clientWidth,g=l.clientHeight,l.width=Math.max(2,Math.round(f*h)),l.height=Math.max(2,Math.round(g*h)),d.setTransform(h,0,0,h,0,0)};x();const y=new ResizeObserver(x);y.observe(l);const w=Rm(d,l,"--color-bg-primary","255,255,255"),k=M$(w)<.5,A=Rm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Nm},(R,N)=>{const T=N%3===0,z=T?1-.5*Math.pow(jn(N*3.1),1.6):jn(N*3.1),B=T?.5*Math.pow(jn(N*5.7),1.6):jn(N*5.7);return{bx:z,by:B,vx:(jn(N*7.3)-.5)*.008,vy:(jn(N*9.9)-.5)*.008,wA:6+jn(N*4.7)*10,wS:.25+jn(N*6.1)*.5,wP:jn(N*8.2)*6.2832,r:.8+jn(N*2.3)*1.6,twS:.8+jn(N)*1.4,twP:jn(N*11.4)*6.2832}}),C=(R,N)=>{const T=((R.bx+R.vx*N)%1+1)%1,z=((R.by+R.vy*N)%1+1)%1,B=T-.5,G=Math.abs(B)*2,Z=G<1e-4?1:(Mm+(1-Mm)*G)/G;return{x:(.5+B*Z)*f+Math.cos(N*R.wS+R.wP)*R.wA,y:z*g+Math.sin(N*R.wS*.8+R.wP)*R.wA}},M=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),$=R=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,f,g);const N=_.map(T=>C(T,R));for(let T=0;T<Nm;T++){const z=_[T],B=.35+.65*(.5+.5*Math.sin(R*z.twS+z.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+A+","+B*G*(k?.55:.42)+")",d.beginPath(),d.arc(N[T].x,N[T].y,z.r*(.7+.3*B),0,6.2832),d.fill()}};if(M)return i.current=s.current,$(1.15),()=>y.disconnect();$(1.15);let S=0;const j=performance.now(),O=R=>{$(1.15+(R-j)/1e3),S=requestAnimationFrame(O)};return S=requestAnimationFrame(O),()=>{cancelAnimationFrame(S),y.disconnect()}},[]),r.jsx(R$,{"aria-hidden":"true",children:r.jsx("canvas",{ref:o})})}const R$=m.div`
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
`,L$=m.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Ws=m.div`
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
`,Lm=.025,ni=560,ri=480,A$=260,$$=.08,T$=.18,I$=.06,E$=350,P$=9,Xs=5,Am=360,z$=560,O$=.055,D$=.03,oi=320,F$=.84,Su=Xs+1,Js=[];for(let e=0;e<Su;e++)for(let o=e+1;o<Su;o++)Js.push([e,o]);const $m=(e,o)=>(e*P$+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7)+720)%360,Hs=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Tm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),Hd=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function F2(){const e=v.useRef(null),o=v.useRef(null),i=v.useRef([]),s=v.useRef([]),l=v.useRef([]);return v.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),h=e.current,f=o.current;if(!h||!f)return;const g=Array.from({length:4},()=>Math.random()*Math.PI*2),x=()=>Math.random()*Math.PI*2,y=Array.from({length:Xs},()=>({size:Am+Math.random()*(z$-Am),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:x(),sx2:.11+Math.random()*.09,px2:x(),sy1:.05+Math.random()*.07,py1:x(),sy2:.11+Math.random()*.09,py2:x(),bs:.12+Math.random()*.14,bp:x(),mp:x(),cs:.4+Math.random()*2.6}));y.forEach((T,z)=>{const B=s.current[z];B&&(B.style.width=`${T.size.toFixed(0)}px`,B.style.height=`${T.size.toFixed(0)}px`)});const w=(T,z,B)=>{T.style.setProperty("--glow-a",`hsl(${$m(z,g[0]+B).toFixed(1)} 85% 62% / 0.9)`),T.style.setProperty("--glow-b",`hsl(${$m(z,g[1]+B*1.3).toFixed(1)} 85% 58% / 0.8)`),T.style.setProperty("--glow-cx",`${(35+14*Math.sin(z*.4+g[2]+B)).toFixed(1)}%`),T.style.setProperty("--glow-cy",`${(35+14*Math.cos(z*.31+g[3]+B)).toFixed(1)}%`)},k=(T,z,B)=>{const G=new Array(Su).fill(null);for(let Z=0;Z<Xs;Z++){const F=y[Z],Y=s.current[Z];if(!Y)continue;const ee=z*(.5+F.ax*(.68*Math.sin(T*F.sx1+F.px1)+.32*Math.sin(T*F.sx2+F.px2))),ae=B*(.5+F.ay*(.68*Math.sin(T*F.sy1+F.py1)+.32*Math.sin(T*F.sy2+F.py2))),re=O$+D$*(.5+.5*Math.sin(T*F.bs+F.bp));Y.style.transform=`translate(${(ee-F.size/2).toFixed(1)}px, ${(ae-F.size/2).toFixed(1)}px)`,Y.style.opacity=re.toFixed(3),Y.style.borderRadius=Hs(T,F.mp),w(Y,T,F.cs),G[Z+1]={x:ee,y:ae,size:F.size,o:re}}return G},A=(T,z)=>{for(let B=0;B<Js.length;B++){const G=l.current[B];if(!G)continue;const[Z,F]=Js[B],Y=z[Z],ee=z[F],ae=Y&&ee?Math.min(Y.o,ee.o):0;if(!Y||!ee||ae<=.005){G.style.opacity="0";continue}const re=ee.x-Y.x,oe=ee.y-Y.y,X=Math.hypot(re,oe),W=(Y.size+ee.size)/2*F$,V=Tm(1-X/W);if(V<=.001){G.style.opacity="0";continue}const I=Math.max(.35,X*.9/oi),L=.3+.4*V;G.style.transform=`translate(${((Y.x+ee.x)/2-oi/2).toFixed(1)}px, ${((Y.y+ee.y)/2-oi/2).toFixed(1)}px) rotate(${Math.atan2(oe,re).toFixed(3)}rad) scale(${I.toFixed(3)}, ${L.toFixed(3)})`,G.style.opacity=(ae*V).toFixed(3),G.style.borderRadius=Hs(T,1.1*(B+1)),w(G,T,.23*(B+1))}};if(d){const z=k(2.4,h.clientWidth,h.clientHeight);A(2.4,z);return}let _=null,C=null,M=-1/0,$=0,S=0,j=0;const O=T=>{const z=h.getBoundingClientRect(),B=_===null;_=T.clientX-z.left,C=T.clientY-z.top,M=T.timeStamp,B&&($=_,S=C)};window.addEventListener("pointermove",O,{passive:!0});let R=0;const N=T=>{R=requestAnimationFrame(N);const z=T/1e3,B=h.clientWidth,G=h.clientHeight,Z=k(z,B,G);if(_!==null&&C!==null){$+=(_-$)*Lm,S+=(C-S)*Lm;const F=T-M<E$?T$:$$;j+=(F-j)*I$,f.style.transform=`translate(${$-ni/2}px, ${S-ni/2}px)`,f.style.opacity=j.toFixed(3),f.style.borderRadius=Hs(z,0),w(f,z,0),Z[0]={x:$,y:S,size:ni,o:j};for(let Y=0;Y<Hd.length;Y++){const ee=i.current[Y];if(!ee)continue;const{nx:ae,ny:re}=Hd[Y],oe=ae<0?$:ae>0?B-$:re<0?S:G-S,X=Tm(1-oe/A$);if(X<=.001){ee.style.opacity="0";continue}const W=ae!==0?ae<0?0:B:$,V=re!==0?re<0?0:G:S,I=ri*(.5-.22*X),L=.55+.45*X;ee.style.transform=`translate(${W+ae*I-ri/2}px, ${V+re*I-ri/2}px) scale(${L.toFixed(3)})`,ee.style.opacity=(j*X).toFixed(3),ee.style.borderRadius=Hs(z,.9*(Y+1)),w(ee,z,.35*(Y+1))}}A(z,Z)};return R=requestAnimationFrame(N),()=>{cancelAnimationFrame(R),window.removeEventListener("pointermove",O)}},[]),r.jsxs(L$,{ref:e,"aria-hidden":"true",children:[Js.map((d,h)=>r.jsx(Ws,{ref:f=>{l.current[h]=f},style:{width:oi,height:oi,opacity:0}},`bridge-${h}`)),Array.from({length:Xs},(d,h)=>r.jsx(Ws,{ref:f=>{s.current[h]=f},style:{opacity:0}},`ambient-${h}`)),Hd.map((d,h)=>r.jsx(Ws,{ref:f=>{i.current[h]=f},style:{width:ri,height:ri,opacity:0}},h)),r.jsx(Ws,{ref:o,style:{width:ni,height:ni,opacity:0}})]})}function B2({size:e=22,className:o}){return r.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Wr=Ye`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,W2=Ye`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;Ye`
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
`;const B$="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",W$="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",H$="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",U$="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",q$="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",V$="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",G$="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",Y$=560,H2=320,ga="cubic-bezier(0.22, 1, 0.36, 1)",U2=140,q2={landing:0,workplace:20,loading:40,questions:58},ai=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:Hu,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:yl,title:"1099",caption:"Independent contractors."},{id:"both",icon:z0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:fn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:O0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:G0,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:oa,title:"One location",caption:"A single site."},{id:"multi",icon:gl,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Uu,title:"Client sites",caption:"Out at client locations."}]}];function K$({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[f,g]=v.useState(!1),x=Nl(),y=v.useRef(null),w=v.useCallback(R=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{R(),g(!1),y.current=null},x?0:H2))},[x]);v.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),A=()=>w(()=>i("workplace")),_=R=>{l(N=>({...N,...R})),h(!0),w(()=>i("loading"))},C=R=>{const N={...s,...R};if(l(N),N.companyWebsite){e(N);return}w(()=>i("questions"))},M=R=>e({...s,...R}),$=d?1:o==="landing"?0:.4,[S,j]=v.useState(!1),O=S;return r.jsxs(bT,{children:[r.jsx(D2,{links:$}),r.jsx(F2,{}),r.jsx(kT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:r.jsx(B2,{size:22})}),r.jsx(_T,{children:r.jsxs(CT,{children:[o!=="landing"&&r.jsx(jT,{children:r.jsx(Y2,{children:r.jsx(vt,{mark:O?"lines":"magnetic",size:U2,tone:"auto",state:"active",motionSpeed:O?1.7:1,cellCount:q2[o],"aria-label":"Ultron"})})}),r.jsxs(NT,{$exiting:f,children:[o==="landing"&&r.jsx(aT,{onNext:A}),o==="workplace"&&r.jsx(Ml,{children:r.jsx(lT,{onAnswer:_})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(dT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:C,onProcessingChange:j}),o==="questions"&&r.jsx(vT,{onComplete:M})]})]})})]})}const Q$="Lead the work that matters.",Z$="Show us your company and we'll set up the work.",X$=41e3,Im=[{name:"Levi's Stadium",src:B$},{name:"ProCare HR",src:W$},{name:"Florida Panthers",src:H$},{name:"Express Healthcare",src:U$},{name:"ModSquad",src:q$},{name:"Titan Medical Group",src:V$},{name:"United Staffing Solutions",src:G$}],Em=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],J$=6e3;function eT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function tT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function nT(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const rT=[{id:"google",label:"Continue with Google",mark:eT},{id:"microsoft",label:"Continue with Microsoft",mark:tT},{id:"apple",label:"Continue with Apple",mark:nT}];function oT(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function aT({onNext:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(""),[d,h]=v.useState(null),f=v.useRef(null),g=Nl();return v.useEffect(()=>{const x=window.setTimeout(()=>i(!0),g?0:500);return()=>window.clearTimeout(x)},[g]),v.useEffect(()=>{var x;d&&((x=f.current)==null||x.focus())},[d]),r.jsxs(MT,{children:[r.jsx(LT,{children:r.jsxs(AT,{children:[r.jsx(Y2,{children:r.jsx(vt,{mark:"magnetic",size:U2,tone:"auto",state:"active",cellCount:q2.landing,"aria-label":"Ultron"})}),r.jsx(lI,{children:Q$}),o&&r.jsxs($T,{children:[r.jsx(cI,{children:Z$}),r.jsxs(TT,{"aria-label":"Get started",children:[r.jsx(IT,{children:rT.map(x=>{const y=x.mark;return r.jsx(ET,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(y,{}),onClick:e,children:x.label},x.id)})}),r.jsx(PT,{"aria-hidden":"true",children:r.jsx(zT,{children:"or start with email"})}),r.jsxs(OT,{noValidate:!0,onSubmit:x=>{x.preventDefault(),s.trim()===""||oT(s)?e():h({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(cr,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:r.jsx(FT,{ref:f,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:x=>{l(x.target.value),d&&h(null)}})}),r.jsx(DT,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),r.jsx(BT,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),r.jsx(RT,{"aria-hidden":"true"}),o&&r.jsx(iT,{})]})}function iT(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%Em.length),J$);return()=>clearInterval(s)},[]);const i=Em[e];return r.jsx(WT,{children:r.jsxs(HT,{children:[r.jsx(sT,{}),r.jsxs(nI,{children:[r.jsx(rI,{children:`“${i.quote}”`}),r.jsxs(oI,{children:[r.jsx(Bn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),r.jsxs(aI,{children:[r.jsx(iI,{children:i.name}),r.jsx(sI,{children:`${i.role} · ${i.org}`})]})]})]},e),r.jsxs(ZT,{children:[r.jsx(XT,{children:"Trusted by frontline operators"}),r.jsxs(eI,{"aria-label":"Operators using Teambridge",children:[r.jsx(Pm,{children:Im.map(s=>r.jsx(zm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),r.jsx(Pm,{"aria-hidden":"true",children:Im.map(s=>r.jsx(zm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function sT(){const e=wT(X$,1600);return r.jsxs(UT,{children:[r.jsxs(qT,{children:[r.jsx(GT,{"aria-hidden":"true"}),r.jsx(YT,{children:"Ultron Index · Live"})]}),r.jsx(KT,{children:e.toLocaleString("en-US")}),r.jsx(QT,{children:"pieces of work Ultron performed this week"})]})}function lT({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(yT(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(Rl,{children:"Where do you work?"}),r.jsx(hI,{children:"Paste your company website and I'll get a head start on turning things on."}),r.jsx(Q2,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(Z2,{children:[r.jsx(JI,{"aria-hidden":"true",children:r.jsx(qu,{size:18})}),r.jsx(X2,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(J2,{children:r.jsx(ha,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(eE,{children:r.jsx(ev,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Ud=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],cT=820;function dT({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?r.jsx(hT,{website:e,onDone:i,onProcessingChange:s}):r.jsx(gT,{failedWebsite:o,onDone:i})}const V2=[{keys:["worker_types"],title:"Worker types",icon:fn,color:"blue"},{keys:["talent_categories"],title:"Talent categories",icon:Ir,color:"purple"},{keys:["client_types"],title:"Client types",icon:oa,color:"azure"},{keys:["service_models"],title:"Service models",icon:yl,color:"green"},{keys:["tech_footprint","access_model"],title:"Platform & access",icon:r9,color:"matcha"},{keys:["compliance"],title:"Compliance",icon:ua,color:"yellow"}],uT={blue:"var(--color-blue-content-primary)",purple:"var(--color-purple-content-primary)",azure:"var(--color-azure-content-primary)",green:"var(--color-green-content-primary)",matcha:"var(--color-matcha-content-primary)",yellow:"var(--color-yellow-content-primary)"};function G2(e,o){return o.flatMap(i=>e[i])}function hT({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=xT(e),d=Ud.length,[h,f]=v.useState(1),[g,x]=v.useState(!1);v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const y=v.useMemo(()=>MS(e),[e]),w=v.useMemo(()=>V2.reduce((A,_)=>A+G2(y,_.keys).length,0),[y]);v.useEffect(()=>{const A=_=>{_.key.toLowerCase()==="t"&&(_.preventDefault(),g?o({}):h>=d?x(!0):f(C=>Math.min(C+1,d)))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[h,g,d,o]);const k=Ud[h-1];return r.jsxs(Ml,{$wide:!0,children:[r.jsx(Rl,{children:g?"Here's what I read off your site":`Turning on ${s}`}),r.jsx(Ll,{children:g?`Looks like ${y.company.market_position.toLowerCase()} — I've organized it into your workspace. Glance it over, correct anything later.`:"Hang tight — I'm reading your site and getting your workspace ready."}),r.jsxs(bI,{role:"status","aria-live":"polite",children:[r.jsxs(jI,{$running:!g,children:[r.jsx(qu,{size:14}),l,r.jsx(SI,{"aria-hidden":"true",children:"·"}),g?r.jsxs(NI,{children:[r.jsx(on,{size:13})," read ",w," signals"]}):r.jsx(MI,{children:`${k}…`},k)]}),r.jsx(kI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:Ud.map((A,_)=>{const C=g||_+1<h?"done":_+1===h?"working":"pending";return r.jsx(_I,{"data-status":C,children:C!=="pending"&&r.jsx(CI,{$working:C==="working"})},A)})})]}),r.jsx(fT,{learned:y,loading:!g}),g&&r.jsxs(r.Fragment,{children:[r.jsx(qI,{children:r.jsx(ze,{variant:"primary",size:"lg",onClick:()=>o({}),trailingArtwork:r.jsx(R0,{size:18}),children:"Looks good, continue"})}),r.jsx(VI,{children:r.jsx(ev,{type:"button",onClick:()=>{f(1),x(!1)},children:"Start over"})})]})]})}function pT(e){const o=e.join(" · ").length;return Math.min(6,Math.max(2,Math.round(o/34)))}function fT({learned:e,loading:o}){const{company:i}=e;return r.jsxs(r.Fragment,{children:[r.jsxs(LI,{children:[r.jsxs(AI,{children:[r.jsx($I,{"aria-hidden":"true",children:o?r.jsx($r,{$w:"20px",$h:"20px",$round:!0}):r.jsx(gl,{size:20})}),r.jsx(TI,{children:o?r.jsxs(r.Fragment,{children:[r.jsx($r,{$w:"240px",$h:"1em"}),r.jsx($r,{$w:"160px",$h:"0.85em"})]}):r.jsxs(r.Fragment,{children:[r.jsx(II,{children:e.workforce_type}),r.jsx(EI,{children:i.name})]})})]}),r.jsx(PI,{children:o?r.jsxs(r.Fragment,{children:[r.jsx($r,{$w:"110px",$h:"0.9em"}),r.jsx($r,{$w:"150px",$h:"0.9em"}),r.jsx($r,{$w:"170px",$h:"0.9em"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(qd,{children:[r.jsx(fn,{size:14}),r.jsxs(Vd,{children:["Founded ",i.founded]})]}),i.parent&&r.jsxs(qd,{children:[r.jsx(oa,{size:14}),r.jsxs(Vd,{children:["Part of ",i.parent]})]}),r.jsxs(qd,{children:[r.jsx(Eu,{size:14}),r.jsx(Vd,{children:i.footprint})]})]})})]},o?"lead-loading":"lead-ready"),r.jsx(zI,{children:V2.map((s,l)=>{const d=G2(e,s.keys);return r.jsxs(OI,{style:{"--card-i":l},children:[r.jsx(DI,{children:o?r.jsx($r,{$w:"96px",$h:"0.75em"}):r.jsxs(r.Fragment,{children:[r.jsx(FI,{children:s.title}),r.jsx(BI,{children:d.length})]})}),o?r.jsx(RI,{children:Array.from({length:pT(d)}).map((h,f,g)=>r.jsx($r,{$h:"0.85em",$w:f===g.length-1?"55%":"100%"},f))}):r.jsx(WI,{style:{"--note-accent":uT[s.color]},children:d.map((h,f)=>r.jsxs(v.Fragment,{children:[f>0&&r.jsx(HI,{"aria-hidden":"true",children:" · "}),h]},h))})]},`${s.title}-${o?"loading":"ready"}`)})})]})}const mT=[{icon:q0,label:"Travel nurses"},{icon:Wu,label:"Event staff"},{icon:Ou,label:"Security guards"},{icon:D0,label:"Warehouse temps"}];function gT({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return r.jsxs(Ml,{children:[e&&r.jsx(UI,{children:"No problem — let's set it up together."}),r.jsx(Rl,{children:"What workforce do you need help with?"}),r.jsx(Ll,{children:"Say it in your own words — or grab one of these."}),r.jsx(pI,{children:mT.map(({icon:h,label:f})=>r.jsxs(fI,{type:"button",onClick:()=>o({workforceType:f}),children:[r.jsx(h,{size:16}),f]},f))}),r.jsx(Q2,{onSubmit:h=>{h.preventDefault(),d()},children:r.jsxs(Z2,{children:[r.jsx(X2,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),r.jsx(J2,{children:r.jsx(ha,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function vT({onComplete:e}){const o=Nl(),[i,s]=v.useState(0),l=v.useRef({}),d=ai[i],h=f=>{l.current={...l.current,[d.key]:f.title};const g=i+1;g>=ai.length?e(l.current):s(g)};return r.jsxs(Ml,{children:[r.jsx(GI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ai.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ai.length}`,children:ai.map((f,g)=>r.jsx(YI,{"data-filled":g<=i||void 0},f.key))}),r.jsx(Rl,{children:d.prompt}),r.jsx(Ll,{children:d.sub}),r.jsx(KI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,g)=>{const x=f.icon;return r.jsxs(QI,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>h(f),children:[r.jsx(K2,{"aria-hidden":"true",children:r.jsx(x,{size:20})}),r.jsxs(ZI,{children:[r.jsx(mI,{children:f.title}),r.jsx(gI,{children:f.caption})]})]},f.id)})})]},d.key)}function yT(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function xT(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function wT(e,o){const i=Nl(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const f=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/o),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function Nl(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const bT=m.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,kT=m.button`
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
`,_T=m.main`
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
`,CT=m.div`
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
  ${e=>e.$augment&&Ye`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,jT=m.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Y2=m.span`
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
`,ST=Se`
  from { opacity: 1; }
  to   { opacity: 0; }
`,NT=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Ye`
      animation: ${ST} ${H2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&Ye`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,RT=m.div`
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
`,LT=m.div`
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
`,AT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,gh=Se`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,$T=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${gh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,TT=m.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,IT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,ET=m(ze)`
  && {
    width: 100%;
    ${Wr}
  }
`,PT=m.div`
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
`,zT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,OT=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,DT=m(ze)`
  && {
    width: 100%;
  }
`,FT=m(ag)`
  && [class*='shell'] {
    ${Wr}
  }
  && input {
    background: transparent;
  }
`,BT=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,WT=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${gh} var(--duration-slow) var(--ease-out) both;

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
`,HT=m.div`
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
`,UT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,qT=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,VT=Se`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,GT=m.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${VT} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,KT=m.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,QT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,ZT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,XT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,JT=Se`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,eI=m.div`
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
`,Pm=m.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${JT} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,zm=m.img`
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
`,tI=Se`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,nI=m.figure`
  ${Wr}
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
  animation: ${tI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rI=m.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,oI=m.figcaption`
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
`,aI=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,iI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,sI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,lI=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${gh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,dI=Se`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ml=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${dI} ${Y$}ms ${ga} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Rl=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,Ll=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,uI=Se`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,hI=m(Ll)`
  animation: ${uI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pI=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,fI=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Wr}
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
`,K2=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,mI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,gI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,vh=Se`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,vI=Se`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,yI=Se`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,xI=Se`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,wI=Se`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,bI=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,kI=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Ye`
    & > * > * {
      animation: ${wI} 900ms ${ga};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,_I=m.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,CI=m.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Ye`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${xI} ${cT+380}ms ${ga} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,jI=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,SI=m.span`
  color: var(--color-content-tertiary);
`,NI=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,MI=m.span`
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
  animation: ${vI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    color: var(--color-content-tertiary);
    background: none;
    animation: none;
  }
`,$r=m.span`
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
  animation: ${yI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: var(--color-bg-tertiary);
    animation: none;
  }
`,RI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,LI=m.div`
  /* Same glass surface as the category cards below, so the whole read-out sits
     at one opacity. */
  ${Wr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  width: 100%;
  max-width: 900px;
  margin-top: var(--space-3);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  animation: ${vh} var(--duration-base) ${ga} both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,AI=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,$I=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
`,TI=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,II=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,EI=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,PI=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,qd=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Vd=m.span`
  color: var(--color-content-primary);
`,zI=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-3);
  width: 100%;
  max-width: 900px;
  /* Pulls back against the StepIn flex gap so the lead→grid spacing lands on
     exactly the grid's own card gap (space-3) — one even rhythm down the set. */
  margin-top: calc(var(--space-3) - var(--space-4));
  text-align: left;
`,OI=m.div`
  ${Wr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  animation: ${vh} var(--duration-base) ${ga} both;
  animation-delay: calc((var(--card-i, 0) + 1) * 70ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,DI=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,FI=m.span`
  flex: 1;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,BI=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  font-variant-numeric: tabular-nums;
`,WI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,HI=m.span`
  color: var(--note-accent, var(--color-content-tertiary));
  font-weight: var(--font-weight-bold);
`,UI=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,qI=m.div`
  margin-top: var(--space-5);
`,VI=m.div`
  margin-top: var(--space-3);
`,GI=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,YI=m.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,KI=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,QI=m.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Wr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${vh} var(--duration-base) ${ga} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${K2} {
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
`,ZI=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Q2=m.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Wr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Z2=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,XI=Se`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,JI=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${XI} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,X2=m.textarea`
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
`,J2=m(Fu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,eE=m.div`
  margin-top: var(--space-3);
`,ev=m.button`
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
`;function tE({onEnterApp:e}){return r.jsx(K$,{onComplete:o=>e==null?void 0:e(o)})}const nE=768,rE=`(max-width: ${nE-1}px)`;function yh(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function oE(){return yh(rE)}const aE="48px",iE="240px",Om="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",sE=m.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?iE:aE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Ye`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Ye`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,lE=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,cE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,dE=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,uE=m.button`
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
`,hE=m.div`
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
`,pE=m.span`
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
`,Dm=m.div`
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
`,Gd=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fE="var(--gradient-ai)",tv=m.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Ye`
      background: var(--color-bg-primary, white);
      box-shadow: ${Om}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Ye`
      background: ${fE};
      box-shadow: ${Om}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,nv=m.button`
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
`,rv=m.span`
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
`,ov=m.div`
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
`,mE=m.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Yd=m.hr`
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
`;const gE=m.button`
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
`,vE=m.div`
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
`,yE=m.span`
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
`;function Kd({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return r.jsx(tv,{$isActive:l,$isAi:s,children:r.jsxs(nv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[r.jsxs(ov,{children:[e.hasUnread&&r.jsx(mE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&r.jsx(rv,{children:e.label}),o&&i&&r.jsx(da,{variant:"primary",children:"New"})]})})}function xE({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}){const[y,w]=v.useState(!1);return r.jsx(sE,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:r.jsxs(lE,{$isExpanded:y,children:[r.jsxs(cE,{children:[r.jsxs(uE,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[r.jsx(hE,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(pE,{children:s.name}),r.jsx(Dm,{children:r.jsx(Uf,{})})]})]}),r.jsx(Gd,{children:e.map(k=>r.jsx(Kd,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),o.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Yd,{}),r.jsx(Gd,{children:o.map(k=>r.jsx(Kd,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),r.jsxs(dE,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Yd,{}),r.jsx(Gd,{children:i.map(k=>r.jsx(Kd,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),r.jsx(Yd,{}),r.jsx(tv,{$isActive:!1,children:r.jsxs(nv,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(ov,{children:r.jsx(nN,{})}),y&&r.jsx(rv,{children:"Settings"})]})}),r.jsxs(gE,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(vE,{$color:l.avatarColor,children:l.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(yE,{children:l.name}),r.jsx(Dm,{children:r.jsx(Uf,{})})]})]})]})]})})}const wE=270,bE=m.nav`
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
`,kE=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,_E=m.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,CE=m.h2`
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
`,jE=m.div`
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
`,SE=m.button`
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
`,NE=m.div`
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
`,ME=m.button`
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
`;const RE=m.span`
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
`,LE=m.div`
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
`,AE=Se`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,$E=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${AE} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Fm=m.button`
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
`,TE=m.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Ye`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,IE=m.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,EE=m.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,PE=m.div`
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
`,zE=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,OE=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,DE=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,av=m.div`
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
`;function iv(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function FE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const xh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function BE({item:e}){return r.jsx(mn,{label:r.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:r.jsx(av,{children:e.icon??r.jsx(iv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:xh})}function WE({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,f=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-f.length;return r.jsxs(TE,{$outlined:e.outlined,children:[r.jsxs(ME,{onClick:()=>i(x=>!x),"aria-expanded":o,children:[r.jsx(LE,{children:o?r.jsx(Sn,{size:16}):r.jsx(gn,{size:16})}),r.jsx(RE,{children:e.label}),e.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&r.jsxs($E,{children:[f.map(x=>r.jsx(mn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(av,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:xh},x.id)),g>0&&r.jsxs(Fm,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&r.jsx(Fm,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function HE({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=wE,onWidthChange:k,minWidth:A=220,maxWidth:_=520}){const C=y!==void 0,M=v.useRef(null),[$,S]=v.useState(!1);return v.useEffect(()=>{if(!$||!k)return;const j=M.current;if(!j)return;const O=j.getBoundingClientRect().left,R=z=>{const B=Math.min(_,Math.max(A,z.clientX-O));k(B)},N=()=>S(!1);window.addEventListener("mousemove",R),window.addEventListener("mouseup",N);const T=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",N),document.body.style.userSelect=T,document.body.style.cursor=""}},[$,k,A,_]),r.jsxs(bE,{ref:M,$isVisible:o,$width:w,$isResizing:$,"aria-label":"Secondary navigation",children:[r.jsxs(kE,{children:[(e||x)&&r.jsxs(_E,{children:[r.jsx(CE,{children:e}),x]}),d&&!C&&r.jsxs(jE,{children:[r.jsx(og,{size:"sm",placeholder:"Search...",value:h,onChange:j=>f==null?void 0:f(j.target.value)}),r.jsx(SE,{onClick:g,"aria-label":"Filter",children:r.jsx(FE,{})})]})]}),C?y:r.jsxs(NE,{children:[s,i.map(j=>j.type==="single"?r.jsx(BE,{item:j.item},j.item.id):j.type==="group"?r.jsx(WE,{group:j.group},j.group.id):j.type==="divider"?r.jsx(OE,{},j.id):r.jsx(IE,{children:j.label.label},j.label.id))]}),l.length>0&&r.jsxs(EE,{children:[r.jsx(zE,{}),l.map(j=>r.jsx(mn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:r.jsx(DE,{children:j.icon??r.jsx(iv,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:xh},j.id))]}),k&&o&&r.jsx(PE,{$isResizing:$,onMouseDown:j=>{j.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const UE=m.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,qE=m.div`
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
`,sv=m.div`
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
`,VE=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,GE=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function YE(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Bm(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Wm(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function KE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function QE({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const g=o.filter(w=>w.variant==="secondary"),x=o.filter(w=>w.variant==="primary"),y=yh("(prefers-color-scheme: dark)");return r.jsxs(UE,{$noBorder:l,children:[r.jsx(qE,{children:typeof e=="string"?r.jsx(sv,{children:e}):e}),r.jsxs(VE,{children:[r.jsxs(GE,{children:[r.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(YE,{})}),g.map(w=>r.jsx(ze,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Wm,{}),trailingArtwork:r.jsx(Bm,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>r.jsx(ze,{variant:"primary",size:"sm",leadingArtwork:r.jsx(Wm,{}),trailingArtwork:r.jsx(Bm,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&r.jsx(ze,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(KE,{})}),s&&r.jsx(v0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const ZE=m.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,XE=m.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,JE=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,eP=m.main`
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
`,Hm="tb:secondary-nav-width",Um=270,qm=220,Vm=520;function tP({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:A,showSearch:_,searchValue:C,onSearchChange:M,onFilterClick:$,headerSlot:S,bodyContent:j,heading:O,actions:R,showActivityButton:N,showPonderButton:T,noBorder:z,onActivityClick:B,onPonderClick:G,onDotsClick:Z,children:F,showSecondaryNav:Y=!0,showTopNav:ee=!0}){const[ae,re]=v.useState(()=>{if(typeof window>"u")return Um;const oe=window.localStorage.getItem(Hm),X=oe?parseInt(oe,10):NaN;return Number.isFinite(X)?Math.min(Vm,Math.max(qm,X)):Um});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Hm,String(ae))},[ae]),r.jsxs(ZE,{children:[r.jsx(xE,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:g,aiItemId:x}),r.jsxs(XE,{children:[Y&&r.jsx(HE,{heading:y,menuEntries:w,menuHeader:k,pageEntries:A,isVisible:!0,showSearch:_,searchValue:C,onSearchChange:M,onFilterClick:$,headerSlot:S,bodyContent:j,width:ae,onWidthChange:re,minWidth:qm,maxWidth:Vm}),r.jsxs(JE,{children:[ee&&r.jsx(QE,{heading:O,actions:R,showActivityButton:N,showPonderButton:T,noBorder:z,onActivityClick:B,onPonderClick:G,onDotsClick:Z}),r.jsx(eP,{children:F})]})]})]})}function nP({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const y=h(),w=y-d.current;Math.abs(w)<e||(w>0&&y>o?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",f,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",f)}},[e,o,i]),s}const rP=m.button`
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
`,oP=m.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,aP=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Qd({label:e,isOpen:o,onClick:i,ariaLabel:s}){return r.jsxs(rP,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[r.jsx(oP,{children:e}),r.jsx(aP,{children:r.jsx(Sn,{size:14})})]})}const iP=m.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,sP=m.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,Gm=m.button`
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
`,lP=m.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,Ym=m.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,cP=m.button`
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
`;function dP({size:e=18}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const uP=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,user:d,hidden:h,onHamburgerClick:f,onPrimaryClick:g,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:w,onUserClick:k},A){return r.jsx(iP,{ref:A,$hidden:h,children:r.jsxs(sP,{children:[r.jsx(Gm,{onClick:f,"aria-label":"Open navigation",children:r.jsx(dP,{size:18})}),r.jsxs(lP,{children:[r.jsx(Qd,{label:o,isOpen:l==="primary",onClick:g,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(Ym,{"aria-hidden":"true",children:"›"}),r.jsx(Qd,{label:i,isOpen:l==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(Ym,{"aria-hidden":"true",children:"›"}),r.jsx(Qd,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(Gm,{onClick:w,"aria-label":"Search",children:r.jsx(Bu,{size:18})}),r.jsx(cP,{onClick:k,$color:d.avatarColor,"aria-label":`User: ${d.name}`,children:d.initials})]})})}),hP=Se`
  from { opacity: 0; }
  to { opacity: 1; }
`,pP=m.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${hP} 160ms ease-out;
`;function fP({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),r.jsx(pP,{onClick:e,"aria-hidden":"true"})}const mP=Se`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,gP=m.div`
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
  animation: ${mP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,vP=m.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,yP=m.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,xP=m.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,wP=m.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function wh({title:e,children:o,ariaLabel:i}){return r.jsxs(gP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[r.jsx(vP,{children:r.jsx(yP,{"aria-hidden":"true"})}),e&&r.jsx(xP,{children:e}),r.jsx(wP,{children:o})]})}const Al=m.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,yi=m.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ho=m.button`
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
`,ta=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,po=m.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fo=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function bP({activeId:e,groups:o,onSelect:i}){return r.jsx(wh,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Al,{children:o.map((s,l)=>r.jsxs("div",{children:[l>0&&r.jsx(yi,{children:s.label}),l===0&&r.jsx(yi,{children:s.label}),s.items.map(d=>{const h=d.id===e;return r.jsxs(ho,{$active:h,onClick:()=>i(d.id),"aria-pressed":h,children:[r.jsx(ta,{children:d.icon}),r.jsx(po,{children:d.label}),h&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},d.id)})]},s.id))})})}function kP({moduleLabel:e,entries:o,onSelect:i}){return r.jsx(wh,{title:e,ariaLabel:`${e} sections`,children:r.jsx(Al,{children:o.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(ho,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(ta,{children:d.icon}),r.jsx(po,{children:d.label}),d.isActive&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(yi,{children:l.label}),l.children.map(d=>r.jsxs(ho,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(ta,{children:d.icon}),r.jsx(po,{children:d.label}),d.isActive&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},d.id))]},l.id)})})})}const _P=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,CP=m.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jP=m.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function SP({personas:e,activeId:o,onSelect:i}){return r.jsx(wh,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Al,{children:e.map(s=>{const l=s.id===o;return r.jsxs(ho,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(po,{as:"span",children:r.jsxs(_P,{children:[r.jsx(CP,{children:s.name}),r.jsx(jP,{children:s.role})]})}),l&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},s.id)})})})}const NP=Se`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,MP=m.aside`
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
  animation: ${NP} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,RP=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,LP=m.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,AP=m.button`
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
`,$P=m.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,TP=60;function IP({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},f=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<TP&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[o]),r.jsxs(MP,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[r.jsxs(RP,{children:[r.jsx(LP,{children:e??"Navigation"}),r.jsx(AP,{onClick:o,"aria-label":"Close navigation",children:r.jsx(bi,{size:18})})]}),r.jsx($P,{children:i})]})}function EP({activeId:e,groups:o,currentMenuEntries:i,onSelectModule:s,onDismiss:l}){return r.jsx(IP,{title:"Navigation",onDismiss:l,children:r.jsx(Al,{children:o.map(d=>r.jsxs("div",{children:[r.jsx(yi,{children:d.label}),d.items.map(h=>{const f=h.id===e;return r.jsxs("div",{children:[r.jsxs(ho,{$active:f,onClick:()=>{s(h.id),l()},"aria-pressed":f,children:[r.jsx(ta,{children:h.icon}),r.jsx(po,{children:h.label}),f&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(g=>{if(g.type==="single"){const y=g.item;return r.jsxs(ho,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(ta,{children:y.icon}),r.jsx(po,{children:y.label}),y.isActive&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},y.id)}if(g.type!=="group")return null;const x=g.group;return r.jsxs("div",{children:[r.jsx(yi,{children:x.label}),x.children.map(y=>r.jsxs(ho,{$active:y.isActive,$indent:!0,onClick:()=>{var w;(w=y.onClick)==null||w.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(ta,{children:y.icon}),r.jsx(po,{children:y.label}),y.isActive&&r.jsx(fo,{"aria-hidden":"true",children:r.jsx(qt,{size:16})})]},y.id))]},x.id)})})]},h.id)})]},d.id))})})}const Km=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],PP=m.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,zP=m.main`
  flex: 1 1 auto;
  min-width: 0;
`;function OP(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:g,onMobileNavigate:x,onSelectPersona:y,children:w}=e,[k,A]=v.useState(null),_=nP({deadZonePx:8,topThresholdPx:20}),C=k===null&&_==="down",M=v.useMemo(()=>{if(!i)return null;const O=Km.find(R=>R.id===i);return(O==null?void 0:O.name)??null},[i]),$=()=>A(null),S=O=>A(O),j=k!==null;return r.jsxs(PP,{children:[r.jsx(uP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:M,openOverlay:k,user:f,hidden:C,onHamburgerClick:()=>S("drawer"),onPrimaryClick:()=>S("primary"),onSecondaryClick:()=>S("secondary"),onTertiaryClick:M?()=>S("persona"):void 0,onSearchClick:()=>{S("drawer")},onUserClick:()=>g==null?void 0:g()}),r.jsx(zP,{children:w}),j&&r.jsx(fP,{onDismiss:$}),k==="primary"&&r.jsx(bP,{activeId:o,groups:s,onSelect:O=>{x(O),$()}}),k==="secondary"&&r.jsx(kP,{moduleLabel:l,entries:h,onSelect:$}),k==="persona"&&r.jsx(SP,{personas:Km,activeId:i,onSelect:O=>{y(O),$()}}),k==="drawer"&&r.jsx(EP,{activeId:o,groups:s,currentMenuEntries:h,onSelectModule:O=>x(O),onDismiss:$})]})}function DP(e){if(oE()&&e.mobileNav){const i=e.mobileNav;return r.jsx(OP,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return r.jsx(tP,{...e})}const FP="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",BP="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",WP=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],HP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],UP={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},qP=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],VP=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],GP=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function YP(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function lv(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function KP(e){const o=HP.find(i=>i.match.test(e));return o?o.profile:UP}function cv(e,o){const i=KP(e),s=YP(lv(e||"teambridge")^o),l=f=>f[Math.floor(s()*f.length)],d=[],h=new Set;for(;d.length<o;){const f=`${l(qP)} ${l(VP)}`;if(h.has(f))continue;h.add(f);const g=s()<.16;d.push({name:f,role:l(i.roles),location:l(i.locations),tenure:l(GP),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const QP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],ZP=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function XP(e){var o;return((o=QP.find(i=>i.match.test(e)))==null?void 0:o.shapes)??ZP}function JP(e){const o=cv(e,8),[i,s,l,d]=o,h=4+lv(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${h} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const ez=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Qm=["6a–2p","2p–10p","10p–6a"],tz=[4,3,3,4,4,3,3];function nz(e){var l,d;const o=cv(e,12);let i=0;const s=ez.map((h,f)=>{const g=[];for(let x=0;x<tz[f];x++){const y=o[i%o.length].name.split(" ")[0];i++,g.push({time:Qm[x%Qm.length],who:y})}return{label:h,shifts:g}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const rz=1100,oz=440,az=26,Zd=320,iz=720,Xd=2e3,sz=950,lz=[{icon:Ir,label:"Build out coverage"},{icon:fn,label:"Chase open shifts"},{icon:ua,label:"Tidy compliance"}],cz=900,dz=1600,dv=84,Nu=81,Mu=48,uz=7,hz=24,Zm=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],pz="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",fz='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',Jd="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",Xm="That's the essentials in place. What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate.";function Ru(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function mz(e){const o=[],i=Ru(e.companyWebsite);return i?o.push({icon:oa,label:"Workspace",detail:`${i} is set up and ready`}):e.workforceType&&o.push({icon:oa,label:"Workspace",detail:`Set up for ${e.workforceType.toLowerCase()}`}),e.pay&&o.push({icon:Hu,label:"Pay",detail:`Turned on for ${e.pay} workers`}),e.billing&&o.push({icon:yl,label:"Billing",detail:`Set to bill ${e.billing.toLowerCase()}`}),e.worksite&&o.push({icon:gl,label:"Sites",detail:e.worksite}),o}function Jm(e){return e.includes("	")||e.trim().includes(`
`)}function gz(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}const vz={};function yz({answers:e=vz,onContinued:o}){const[i,s]=v.useState([]),[l,d]=v.useState(""),[h,f]=v.useState([]),[g,x]=v.useState(null),[y,w]=v.useState("roster"),[k,A]=v.useState(!1),[_,C]=v.useState(null),[M,$]=v.useState(null),[S,j]=v.useState(null),[O,R]=v.useState(!1),[N,T]=v.useState(""),[z,B]=v.useState(!1),[G,Z]=v.useState(!1),[F,Y]=v.useState("delivering"),[ee,ae]=v.useState(0),[re,oe]=v.useState(-1),[X,W]=v.useState(""),[V,I]=v.useState(!1),[L]=v.useState(()=>{var le;return typeof window<"u"&&!!((le=window.matchMedia)!=null&&le.call(window,"(prefers-reduced-motion: reduce)").matches)}),q=v.useRef([]),K=v.useRef(null),ie=v.useRef(null),de=v.useMemo(()=>mz(e),[e]),H=v.useMemo(()=>{var le;return((le=e.workforceType)==null?void 0:le.trim())||Ru(e.companyWebsite)||""},[e]),E=v.useMemo(()=>XP(H),[H]),ne=v.useMemo(()=>{const le=Ru(e.companyWebsite),Re=[{kind:"text",text:`Welcome to your ${le?`${le} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`+(de.length>0?" Here's what I already turned on from what you shared:":"")}];return de.length>0&&Re.push({kind:"summary"}),Re.push({kind:"text",text:pz}),Re.push({kind:"rosterCta"}),Re},[de,e]),pe=(le,xe)=>{q.current.push(window.setTimeout(xe,le))};v.useEffect(()=>()=>{q.current.forEach(le=>window.clearTimeout(le))},[]);const ce=le=>{if(C({file:le,state:"uploading",progress:8}),L){C({file:le,state:"complete",progress:100});return}pe(180,()=>C({file:le,state:"uploading",progress:38})),pe(460,()=>C({file:le,state:"uploading",progress:74})),pe(780,()=>C({file:le,state:"complete",progress:100}))},me=le=>{if($({file:le,state:"uploading",progress:8}),L){$({file:le,state:"complete",progress:100});return}pe(180,()=>$({file:le,state:"uploading",progress:38})),pe(460,()=>$({file:le,state:"uploading",progress:74})),pe(780,()=>$({file:le,state:"complete",progress:100}))};v.useEffect(()=>{if(L){ae(ne.length),oe(-1),Y("ready");return}const le=[];let xe=null;const Re=(Ee,et)=>{le.push(window.setTimeout(et,Ee))},ke=Ee=>{if(Ee>=ne.length){I(!1),Y("ready");return}I(!0),Re(oz,()=>{I(!1),oe(Ee);const et=ne[Ee];if(et.kind!=="text"){Re(iz,()=>{ae(Ee+1),oe(-1),Re(Zd,()=>ke(Ee+1))});return}W("");const yt=et.text;let Vt=0;xe=window.setInterval(()=>{Vt+=1,W(yt.slice(0,Vt)),Vt>=yt.length&&(xe&&window.clearInterval(xe),xe=null,Re(Zd,()=>{ae(Ee+1),oe(-1),W(""),Re(Zd,()=>ke(Ee+1))}))},az)})};return Y("delivering"),ke(0),()=>{le.forEach(Ee=>window.clearTimeout(Ee)),xe&&window.clearInterval(xe)}},[ne,L]),v.useEffect(()=>{if(y==="done")return K.current=window.setTimeout(()=>Z(!0),cz),()=>{K.current&&window.clearTimeout(K.current)}},[y]);const be=()=>{B(!0),K.current&&window.clearTimeout(K.current),K.current=window.setTimeout(()=>Z(!1),dz)};v.useEffect(()=>{var le;(le=ie.current)==null||le.scrollIntoView({block:"end",behavior:"smooth"})},[i,g,F,ee,re,X,V]);const ve=(l.trim().length>0||h.length>0)&&g===null,Le=le=>{const xe=Array.from(le,Re=>Re.name);f(Re=>[...Re,...xe.filter(ke=>!Re.includes(ke))])},Fe=le=>f(xe=>xe.filter(Re=>Re!==le)),Pe=(le,xe={})=>{const Re=L?300:xe.workingMs??rz,ke=L?200:sz;x(xe.workingLabel??"");let Ee=Re;le.forEach((et,yt)=>{const Vt=yt===le.length-1;pe(Ee,()=>{var dr;s(Hr=>[...Hr,et]),x(Vt?null:""),Vt&&((dr=xe.then)==null||dr.call(xe))}),Ee+=ke})},Ie=(le,xe=[])=>{i.some(Re=>Re.role==="operator")||o==null||o(),s(Re=>[...Re,{role:"operator",text:le,...xe.length?{attachments:xe}:{}}])},Te=(le,xe)=>{A(!1),xe&&ce(xe),Pe([{role:"ultron",text:`Got it — read ${le}: ${dv} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Nu} people in. ${Jd}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Xd,then:()=>w("schedule")})},Ve=()=>{A(!0),Pe([{role:"ultron",text:`Done — I spun up ${Mu} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:Jd},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Xd,then:()=>w("schedule")})},Qe=()=>{Pe([{role:"ultron",text:`No problem — we can bring your people in later. ${Jd}`},{role:"ultron",text:"",card:"scheduleCta"}],{then:()=>w("schedule")})},ut=le=>{le.file&&me(le.file),j({problems:JP(H),week:nz(H)});const xe=le.fileName?`Read ${le.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${le.shape.toLowerCase()}. Here's what's in it.`;Pe([{role:"ultron",text:xe},{role:"ultron",text:"",card:"week"},{role:"ultron",text:Xm}],{workingLabel:le.fileName?"Turning it into shifts…":"Building your week…",workingMs:Xd,then:()=>w("done")})},He=()=>{Pe([{role:"ultron",text:"No problem — drop a schedule in anytime and I'll turn it into shifts."},{role:"ultron",text:Xm}],{then:()=>w("done")})},pt=(le,xe=[])=>{if(!le&&xe.length===0||g!==null)return;if(Ie(le,xe),y==="roster"){xe.length>0?Te(xe[0],{name:xe[0]}):Jm(le)?Te("your pasted roster"):Pe([{role:"ultron",text:fz}]);return}if(y==="schedule"){xe.length>0?ut({fileName:xe[0],file:{name:xe[0]}}):Jm(le)?ut({fileName:"your pasted schedule"}):ut({shape:le});return}R(!0);const Re=i.filter(ke=>ke.role==="ultron").length;Pe([{role:"ultron",text:lh(le,Re)}])},it=()=>{const le=l.trim();!le&&h.length===0||g!==null||(pt(le,h),d(""),f([]))},Bt=le=>{if(!le||le.length===0||y!=="roster"||g!==null)return;const xe=Array.from(le),Re=xe.map(ke=>ke.name);Ie("",Re),Te(Re[0],{name:xe[0].name,type:xe[0].type,size:xe[0].size})},lt=le=>{if(!le||le.length===0||y!=="schedule"||g!==null)return;const xe=Array.from(le),Re=xe.map(ke=>ke.name);Ie("",Re),ut({fileName:Re[0],file:{name:xe[0].name,type:xe[0].type,size:xe[0].size}})},Et=g!==null?[]:y==="roster"?[{icon:Ir,label:"No roster handy? Use sample teammates",onTap:()=>{Ie("Use sample teammates"),Ve()}},{label:"Skip for now",onTap:()=>{Ie("Skip for now"),Qe()}}]:y==="schedule"?[...E.map(le=>({icon:fn,label:le,onTap:()=>{Ie(le),ut({shape:le})}})),{label:"Skip for now",onTap:()=>{Ie("Skip for now"),He()}}]:O?[]:lz.map(({icon:le,label:xe})=>({icon:le,label:xe,onTap:()=>pt(xe)})),vn=Et.length>0?r.jsx(KO,{"aria-label":"Suggestions",children:Et.map(({icon:le,label:xe,onTap:Re})=>r.jsxs(QO,{type:"button",onClick:Re,children:[le&&r.jsx(le,{size:14}),xe]},xe))}):null,Mn=y==="roster"?"Attach your roster, or ask Ultron anything…":y==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…";return r.jsxs(bz,{children:[r.jsx(D2,{links:1}),r.jsx(F2,{}),r.jsx(kz,{children:r.jsxs(_z,{children:[r.jsx(Cz,{children:r.jsx(vt,{mark:"magnetic",size:44,tone:"light",state:"active","aria-label":"Ultron"})}),r.jsxs(jz,{children:[r.jsx(Sz,{children:"Welcome"}),r.jsx(Nz,{children:"Finish your setup, right in the chat"})]})]})}),r.jsx(Mz,{children:r.jsxs(Tz,{children:[r.jsx(Us,{"data-from":"ultron",children:r.jsxs(t0,{children:[ne.slice(0,re>=0?re+1:ee).map((le,xe)=>{if(le.kind==="summary")return r.jsx(ii,{children:r.jsxs(Iz,{"aria-label":"What Ultron set up",children:[r.jsx(Ez,{children:r.jsx(Pz,{children:"Here’s what I set up"})}),r.jsx(zz,{children:de.map(ke=>{const Ee=ke.icon;return r.jsxs(eu,{children:[r.jsx(tu,{"aria-hidden":"true",children:r.jsx(Ee,{size:16})}),r.jsxs(nu,{children:[r.jsx(ru,{children:ke.label}),r.jsx(ou,{children:ke.detail})]}),r.jsx(au,{"aria-hidden":"true",children:r.jsx(on,{size:18})})]},ke.label)})})]})},`beat-${xe}`);if(le.kind==="rosterCta"){const ke=y==="roster";return r.jsxs(v.Fragment,{children:[r.jsx(ii,{children:ke||_?r.jsx(e0,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(_==null?void 0:_.state)??"empty",progress:(_==null?void 0:_.progress)??0,file:(_==null?void 0:_.file)??null,disabled:g!==null&&!_,onFileSelect:Ee=>Bt([Ee]),onClear:()=>{}}):r.jsxs(eu,{children:[r.jsx(tu,{"aria-hidden":"true",children:r.jsx(lu,{size:16})}),r.jsxs(nu,{children:[r.jsx(ru,{children:"Roster"}),r.jsx(ou,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),r.jsx(au,{"aria-hidden":"true",children:r.jsx(on,{size:18})})]})}),ke&&F==="ready"&&r.jsx(ii,{children:vn})]},`beat-${xe}`)}const Re=xe===re;return r.jsxs(n0,{"data-from":"ultron",children:[Re?X:le.text,Re&&r.jsx($z,{"aria-hidden":"true"})]},`beat-${xe}`)}),V&&r.jsx(Lz,{children:r.jsxs(i0,{"aria-label":"Ultron is typing",children:[r.jsx(Qo,{}),r.jsx(Qo,{}),r.jsx(Qo,{})]})})]})}),i.map((le,xe)=>le.card?r.jsx(Us,{"data-from":"ultron",children:r.jsxs(t0,{children:[r.jsx(ii,{children:le.card==="roster"?r.jsx(xz,{sample:k}):le.card==="scheduleCta"?y==="schedule"||M?r.jsx(e0,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:(M==null?void 0:M.state)??"empty",progress:(M==null?void 0:M.progress)??0,file:(M==null?void 0:M.file)??null,disabled:g!==null&&!M,onFileSelect:Re=>lt([Re]),onClear:()=>{}}):r.jsxs(eu,{children:[r.jsx(tu,{"aria-hidden":"true",children:r.jsx(lu,{size:16})}),r.jsxs(nu,{children:[r.jsx(ru,{children:"Schedule"}),r.jsx(ou,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),r.jsx(au,{"aria-hidden":"true",children:r.jsx(on,{size:18})})]}):S?r.jsx(wz,{problems:S.problems,week:S.week}):null}),le.card==="scheduleCta"&&y==="schedule"&&r.jsx(ii,{children:vn})]})},xe):r.jsx(Us,{"data-from":le.role,children:r.jsxs(tD,{"data-from":le.role,children:[le.text&&r.jsx(n0,{"data-from":le.role,children:le.text}),le.attachments&&r.jsx(nD,{children:le.attachments.map(Re=>r.jsxs(s0,{children:[r.jsx(zr,{size:14}),Re]},Re))})]})},xe)),g!==null&&r.jsx(Us,{"data-from":"ultron",children:r.jsxs(qO,{children:[r.jsxs(i0,{"aria-label":"Ultron is replying",children:[r.jsx(Qo,{}),r.jsx(Qo,{}),r.jsx(Qo,{})]}),g&&r.jsx(GO,{role:"status","aria-live":"polite",children:g})]})}),r.jsx("div",{ref:ie})]})}),F==="ready"&&r.jsxs(YO,{children:[y==="done"&&vn,r.jsxs(ZO,{onSubmit:le=>{le.preventDefault(),it()},children:[h.length>0&&r.jsx(JO,{"aria-label":"Files to send",children:h.map(le=>r.jsxs(s0,{children:[r.jsx(zr,{size:14}),le,r.jsx(eD,{type:"button","aria-label":`Remove ${le}`,onClick:()=>Fe(le),children:r.jsx(pi,{size:12})})]},le))}),r.jsxs(XO,{children:[r.jsx(l0,{children:r.jsx(K0,{state:"idle",onSelect:Le})}),r.jsx(rD,{rows:1,value:l,placeholder:Mn,"aria-label":"Message Ultron",onChange:le=>d(le.target.value),onKeyDown:le=>{le.key==="Enter"&&!le.shiftKey&&(le.preventDefault(),it())},onPaste:le=>{var Re;const xe=(Re=le.clipboardData)==null?void 0:Re.files;xe&&xe.length>0&&(le.preventDefault(),Le(xe))}}),r.jsx(l0,{children:r.jsx(ha,{state:ve?"ready":"disabled-invalid",onSend:it})})]})]})]}),r.jsx(CO,{}),r.jsx(_6,{open:G,onClose:()=>Z(!1),size:"lg","aria-label":"Unlock your grant",children:r.jsxs(jO,{children:[r.jsx(SO,{"aria-hidden":"true",children:r.jsx(B2,{size:300})}),r.jsx(NO,{type:"button","aria-label":"Close",onClick:()=>Z(!1),children:r.jsx(pi,{size:18})}),r.jsxs(MO,{children:[r.jsx(RO,{"aria-hidden":"true"})," Your welcome grant"]}),r.jsxs(LO,{"aria-label":"$1,000 of work on us",children:[r.jsxs(AO,{children:[r.jsx($O,{children:"$"}),"1,000"]}),r.jsxs(TO,{children:["of work",r.jsx("br",{}),r.jsx("strong",{children:"on us"})]})]}),r.jsx(IO,{children:"Turn Ultron loose."}),r.jsx(EO,{children:"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),r.jsxs(PO,{"aria-label":"Grant benefits",children:[r.jsx(iu,{children:"100,000 credits"}),r.jsx(iu,{children:"Up to 3 months"}),r.jsx(iu,{children:"You approve every action"})]}),z?r.jsxs(WO,{role:"status",children:[r.jsx(on,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(zO,{onSubmit:le=>{le.preventDefault(),N.trim()&&be()},children:[r.jsx(OO,{htmlFor:"welcome-grant-phone",children:"Where should Ultron send proposals?"}),r.jsxs(DO,{children:[r.jsx(FO,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:N,placeholder:"2145550148","aria-label":"Mobile number",autoComplete:"tel",onChange:le=>T(le.target.value.replace(/\D/g,""))}),r.jsx(BO,{type:"submit",variant:"tertiary",size:"lg",disabled:!N.trim(),children:"Unlock $1,000"})]})]}),r.jsx(HO,{children:"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]})})]})}function xz({sample:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(!0),d=WP.slice(0,6),h=(e?Mu:Nu)-d.length;return r.jsxs(uv,{"aria-label":e?"Sample teammates":"Roster import result",children:[r.jsxs(Oz,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(f=>!f),children:[e?r.jsx(Dz,{children:r.jsxs(Fz,{children:[Mu," sample teammates, ready to run a full week"]})}):r.jsxs(Bz,{children:[r.jsxs(Wz,{children:[Nu," ",r.jsxs(Hz,{children:["/",dv]})]}),r.jsxs(Uz,{children:[r.jsx(on,{size:16})," imported clean"]})]}),r.jsx(Lu,{$open:s,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]}),s&&r.jsxs(qz,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((f,g)=>r.jsxs(Vz,{$i:g,children:[r.jsx(Gz,{"aria-hidden":"true",children:gz(f.name)}),r.jsxs(Yz,{children:[r.jsx(Kz,{children:f.name}),r.jsxs(Qz,{children:[f.role," · ",f.location," · ",f.tenure]})]}),f.credentialStatus==="expiring"?r.jsxs(Dn,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[f.credential," · ",f.expiresInDays,"d"]}):r.jsx(Dn,{size:"sm",variant:"subtle",color:"green",children:f.credential}),e&&r.jsx(Dn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},f.name)),r.jsx(Zz,{children:e?`+ ${h} more · every one tagged “Sample”`:`+ ${h} more imported clean`})]}),!e&&r.jsxs(Xz,{children:[r.jsxs(Jz,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(f=>!f),children:[r.jsxs(eO,{children:[Zm.length," rows kept for review"]}),r.jsxs(tO,{children:[r.jsx(hv,{"aria-hidden":"true",children:r.jsx(ra,{size:15})}),r.jsx(Lu,{$open:o,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]})]}),o&&r.jsx(pv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Zm.map(f=>r.jsxs(fv,{children:[r.jsx(rO,{"aria-hidden":"true",children:r.jsx(ra,{size:15})}),r.jsxs(mv,{children:[r.jsx(oO,{children:f.where}),r.jsx(aO,{children:f.reason})]})]},f.where))})]})]})}function wz({problems:e,week:o}){const[i,s]=v.useState(!1);return r.jsxs(uv,{"aria-label":"Your week",children:[r.jsxs(iO,{children:[r.jsxs(lO,{children:[r.jsxs(r0,{children:[r.jsx(o0,{children:uz})," days"]}),r.jsx(cO,{"aria-hidden":"true",children:"·"}),r.jsxs(r0,{children:[r.jsx(o0,{children:hz})," shifts"]})]}),r.jsxs(sO,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(l=>!l),children:[r.jsx(hv,{"aria-hidden":"true",children:r.jsx(ra,{size:15})}),r.jsx(Lu,{$open:i,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]})]}),i&&r.jsx(nO,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((l,d)=>r.jsxs(fv,{children:[r.jsx(dO,{$kind:l.kind,"aria-hidden":"true",children:l.kind==="missing"?r.jsx(fn,{size:15}):r.jsx(ra,{size:15})}),r.jsxs(mv,{children:[r.jsxs(uO,{children:[l.worker," · ",l.role]}),r.jsx(hO,{children:l.detail})]})]},`${l.worker}-${d}`))}),r.jsx(pO,{children:r.jsx(fO,{role:"table","aria-label":"Next week's shifts",children:o.map(l=>r.jsxs(mO,{role:"column",children:[r.jsx(gO,{children:l.label}),l.shifts.map((d,h)=>r.jsxs(vO,{$flag:d.flag,children:[r.jsx(yO,{children:d.time}),r.jsx(xO,{children:d.who})]},`${l.label}-${h}`))]},l.label))})})]})}const bz=m.div`
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
`,kz=m.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  /* One continuous white surface under the header, alpha-masked at its lower
     edge. Unlike a gradient strip, this reveals the ambient glow progressively
     and cannot leave a hard seam where the fade meets the header. */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 calc(-1 * var(--space-10));
    z-index: 0;
    background: var(--color-bg-always-light);
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
`,_z=m.div`
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
`,Cz=m.span`
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
      var(--Alloy-slate-50) 0%,
      transparent 72%
    );
    pointer-events: none;
  }

  & > canvas {
    position: relative;
    z-index: 1;
  }
`,jz=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Sz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-950);
`,Nz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--Alloy-slate-500);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mz=m.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,xo=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,ii=m.div`
  animation: ${xo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Rz=Se`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,e0=m(ng)`
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
    animation: ${Rz} 300ms var(--ease-out) both;
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
`,Lz=m.div`
  display: flex;
  justify-content: flex-start;
  animation: ${xo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Az=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,$z=m.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${Az} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Tz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Us=m.div`
  display: flex;
  animation: ${xo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,t0=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,n0=m.div`
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
`,Iz=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,Ez=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Pz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,zz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,eu=m.div`
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
`,tu=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,nu=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,ru=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,ou=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,au=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,uv=m.div`
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
`,Oz=m.button`
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
`,Dz=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Fz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Bz=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Wz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,Hz=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,Uz=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,qz=m.div`
  display: flex;
  flex-direction: column;
`,Vz=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${xo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Gz=m.span`
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
`,Yz=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,Kz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,Qz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zz=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${xo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Xz=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,Jz=m.button`
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
`,eO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,tO=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,hv=m.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Lu=m.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,pv=m.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${xo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nO=m(pv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,fv=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,rO=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,mv=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,oO=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,aO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,iO=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,sO=m.button`
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
`,lO=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,r0=m.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,o0=m.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,cO=m.span`
  color: var(--color-content-tertiary);
`,dO=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&Ye`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&Ye`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&Ye`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,uO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,hO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,pO=m.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,fO=m.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,mO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,gO=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,vO=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

  ${e=>e.$flag==="open"&&Ye`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&Ye`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }
`,yO=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,xO=m.span`
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
`,a0="cubic-bezier(0.22, 1, 0.36, 1)",wO=Se`
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
`,bO=Se`
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
`,kO=Se`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,_O=Se`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,CO=_S`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${wO} 440ms ${a0} both;

    & > div {
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${kO} 560ms ${a0} both;
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${bO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${_O} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`,jO=m.section`
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
`,SO=m.div`
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
`,NO=m.button`
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
`,MO=m.span`
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
`,RO=m.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,LO=m.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;
`,AO=m.div`
  font-family: var(--font-sans);
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.075em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;
`,$O=m.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,TO=m.span`
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
`,IO=m.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);
`,EO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,PO=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,iu=m.span`
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
`,zO=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,OO=m.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,DO=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,FO=m.input`
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
`,BO=m(ze)`
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
`,WO=m.div`
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
`,HO=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,UO=Se`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,i0=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`,Qo=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${UO} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qO=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,VO=Se`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,GO=m.span`
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
  animation: ${VO} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,YO=m.div`
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
     transparent portion instead of being blurred or clipped. */
  &::before {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--space-10)) 0 0;
    z-index: 0;
    background: var(--color-bg-primary);
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
  animation: ${xo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,KO=m.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,QO=m.button`
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
`,ZO=m.form`
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
`,XO=m.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,JO=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,s0=m.span`
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
`,eD=m.button`
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
`,tD=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,nD=m.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,rD=m.textarea`
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
`,l0=m.div`
  flex-shrink: 0;
`;function oD(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function aD(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function iD(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=aD(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=oD(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Au="ultron-theme";function sD(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Au);return e==="light"||e==="dark"?e:null}function lD(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function cD(){const e=yh("(prefers-color-scheme: dark)"),[o,i]=v.useState(sD);v.useEffect(()=>{lD(o),!(typeof window>"u")&&(o?window.localStorage.setItem(Au,o):window.localStorage.removeItem(Au))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const dD=m.button`
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
`;function uD(){const{theme:e,toggle:o}=cD(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(dD,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(M0,{size:18}):r.jsx(V0,{size:18})})}const c0=[{id:"ultron",label:"Ultron",icon:r.jsx(vt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(qS,{})},{id:"engaged",label:"Engaged",icon:r.jsx(VS,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(GS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(YS,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(KS,{})}],d0=[{id:"apps",label:"Apps",icon:r.jsx(QS,{})}],u0=[{id:"docs",label:"Document Studio",icon:r.jsx(bu,{})},{id:"form",label:"Form",icon:r.jsx(ZS,{})},{id:"tasks",label:"Tasks",icon:r.jsx(XS,{})},{id:"policy",label:"Policy",icon:r.jsx(JS,{}),activeIcon:r.jsx("img",{src:FP,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(go,{}),activeIcon:r.jsx("img",{src:BP,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(eN,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(tN,{})}],hD=m.button`
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
`,pD=Se`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,fD=Se`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,mD=Se`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,gD=m.span`
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
      ${pD} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${fD} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${mD} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,vD=m.button`
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
`;function yD({onDelete:e}){const o=i=>i.stopPropagation();return r.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:r.jsx(Gu,{placement:"bottom-end",width:168,trigger:r.jsx(vD,{type:"button","aria-label":"Page options",children:r.jsx(H0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(Y0,{size:16}),onClick:e}]}]})})}const xD={needs_attention:r.jsx(ra,{size:16}),live:r.jsx(vt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(on,{size:16})},wD={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function bD({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[h,f]=v.useState(null),[g,x]=v.useState(null),[y,w]=v.useState("ultron"),[k,A]=v.useState("employees"),_=MN(),[C,M]=v.useState(!!e),[$,S]=v.useState(!1),[j,O]=v.useState(!e),[R,N]=v.useState([]),[T,z]=v.useState(null),B=v.useRef(0),G=E=>{w("ultron"),M(!1),O(!1),z(E)},Z=()=>{w("ultron"),O(!1),z(null),M(!0)},F=()=>{const E=`page-${B.current++}`;N(ne=>[...ne,{id:E,title:"New page"}]),G(E)},[Y,ee]=v.useState({}),[ae,re]=v.useState({}),oe=v.useRef({}),X=(E,ne)=>{const pe=ne.trim();if(!pe)return;const ce=(Y[E]??[]).filter(me=>me.role==="ultron").length;ee(me=>({...me,[E]:[...me[E]??[],{role:"operator",text:pe}]})),re(me=>({...me,[E]:!0})),oe.current[E]=window.setTimeout(()=>{ee(me=>({...me,[E]:[...me[E]??[],{role:"ultron",text:lh(pe,ce)}]})),re(me=>({...me,[E]:!1})),delete oe.current[E]},1100)},W=E=>{oe.current[E]&&(window.clearTimeout(oe.current[E]),delete oe.current[E]),N(ne=>ne.filter(pe=>pe.id!==E)),ee(ne=>{const{[E]:pe,...ce}=ne;return ce}),re(ne=>{const{[E]:pe,...ce}=ne;return ce}),T===E&&(z(null),O(!0))},V=j?"live":_.selectedThread?wD[_.selectedThread.status]:"new";iD({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:f,setActivePageId:x});const I=E=>E.map(ne=>({...ne,isActive:ne.id===i,disabled:ne.id!=="ultron",onClick:ne.id==="ultron"?()=>s("ultron"):void 0})),L=[{id:"memory",label:"Memory",icon:r.jsx(pl,{size:16}),isActive:y==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:r.jsx(L0,{size:16})}],q=r.jsx(sv,{children:y==="memory"?"Memory":y==="account"?"Account database":"Ultron"}),K={id:"welcome",label:"Welcome",icon:r.jsx(bu,{}),isActive:C,onClick:Z},ie=R.map(E=>({id:E.id,label:E.title,icon:r.jsx(bu,{}),isActive:T===E.id,onClick:()=>G(E.id),trailingSlot:r.jsx(yD,{onDelete:()=>W(E.id)})})),de=y==="account"?ju.map(E=>({type:"single",item:{id:E.id,label:E.label,icon:E.icon,isActive:k===E.id,onClick:()=>A(E.id)}})):_.groups.flatMap(E=>{const ne=E.id==="needs_attention"?"new":E.id==="resolved"?"done":"working",pe=E.id==="needs_attention"?E.threads.filter(ve=>ve.status==="analyzing"||_.revealedNewIds.includes(ve.id)):E.threads,ce=E.id==="needs_attention"&&!$||E.id==="live"&&$,me=E.id==="needs_attention"?ie:[],be={type:"group",group:{id:E.id,label:E.id==="needs_attention"?"New":E.label,icon:xD[E.id],trailingBadge:r.jsx(da,{children:pe.length+(ce?1:0)+me.length}),defaultExpanded:!0,outlined:!1,children:[...ce?[K]:[],...me,...pe.map(ve=>({id:ve.id,label:ve.id.startsWith("detected_")?r.jsx(n$,{text:Sm(ve.name,ne)}):Sm(ve.name,ne),icon:ne==="new"?ve.status==="analyzing"?r.jsx(vt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(vt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ne==="working"?r.jsx(vt,{mark:"orbit2d",size:32,tone:"auto",state:ve.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(vt,{mark:"pulse",size:32,tone:"auto",state:ve.status==="unresolved"?"idle":"static",color:ve.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(ve.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:y==="ultron"&&!j&&!T&&V===ne&&_.selectedId===ve.id,onClick:()=>{w("ultron"),M(!1),O(!1),z(null),_.setSelectedId(ve.id)},trailingSlot:_.savedWorkflowIds.includes(ve.id)?r.jsx(cr,{content:"Saved as workflow",placement:"top",children:r.jsx(gD,{"aria-label":"Saved as workflow",children:r.jsx(go,{})})}):void 0}))]}};return E.id==="resolved"?[{type:"divider",id:"done-divider"},be]:E.id==="live"?[{type:"divider",id:"working-divider"},be]:[be]}),H=[{id:"main",label:"Workspace",items:I(c0)},{id:"tools",label:"Tools",items:I(d0)},{id:"bottom",label:"Apps",items:I(u0)}];return r.jsxs(r.Fragment,{children:[r.jsx(uD,{}),r.jsx(DP,{items:I(c0),toolItems:I(d0),bottomItems:I(u0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:de,menuHeader:y==="ultron"?r.jsx(hD,{$active:j&&!T,onClick:()=>{w("ultron"),M(!1),O(!0),z(null)},"aria-label":"Live — Ultron presence","aria-current":j&&!T?"page":void 0,children:r.jsx(QA,{onNew:F})}):void 0,pageEntries:L,showSecondaryNav:!0,showTopNav:y!=="ultron",showSearch:!1,heading:q,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:h,moduleGroups:H,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:E=>{E==="ultron"&&s("ultron")},onSelectPersona:f},children:y==="memory"?r.jsx(i$,{}):y==="account"?r.jsx(w$,{collectionId:k}):C?r.jsx(yz,{answers:e,onContinued:()=>S(!0)}):T?r.jsx(IA,{messages:Y[T]??[],replying:ae[T]??!1,onSend:E=>X(T,E)},T):r.jsx(jA,{threads:_.threads,stageById:_.stageById,section:V,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),M(!1),O(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const h0="cubic-bezier(0.22, 1, 0.36, 1)",p0=Se`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,kD=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,_D=m.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${p0} 460ms ${h0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${p0} 500ms ${h0} 90ms both;
  }
  main {
    animation: ${kD} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,su="tb:onboarding-complete";function CD(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(su)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(su,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(su)}catch{}window.location.hash="",window.location.reload()};return e?r.jsx(_D,{children:r.jsx(bD,{introAnswers:i??void 0,onRestartOnboarding:d})}):r.jsx(tE,{onEnterApp:l})}yy.createRoot(document.getElementById("root")).render(r.jsx(rn.StrictMode,{children:r.jsx(V6,{children:r.jsx(CD,{})})}));
